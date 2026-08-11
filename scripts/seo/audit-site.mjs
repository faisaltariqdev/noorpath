#!/usr/bin/env node
/**
 * Free local enterprise SEO smoke audit for NoorPath.
 * No paid APIs. Uses fetch + optional Lighthouse CLI.
 *
 * Usage:
 *   node scripts/seo/audit-site.mjs
 *   SEO_BASE_URL=https://www.noorpath.online node scripts/seo/audit-site.mjs
 *   node scripts/seo/audit-site.mjs --lighthouse
 */

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = (process.env.SEO_BASE_URL || "https://www.noorpath.online").replace(/\/$/, "");
const RUN_LH = process.argv.includes("--lighthouse");
const OUT_DIR = join(process.cwd(), "seo-reports");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

const SAMPLE_PATHS = [
  "/",
  "/blog",
  "/online-quran-classes",
  "/online-quran-classes-for-kids",
  "/pricing",
  "/free-quran-classes-online",
  "/sitemap.xml",
  "/robots.txt",
];

const findings = [];
const ok = (area, msg) => findings.push({ level: "pass", area, msg });
const warn = (area, msg) => findings.push({ level: "warn", area, msg });
const fail = (area, msg) => findings.push({ level: "fail", area, msg });

async function fetchText(path) {
  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  const res = await fetch(url, {
    redirect: "manual",
    headers: { "user-agent": "NoorPath-SEO-Audit/1.0" },
  });
  const text = res.status >= 200 && res.status < 400 ? await res.text() : "";
  return { url, res, text };
}

function pickMeta(html, attr, key) {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${key}["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+(?:name|property)=["']${key}["']`,
    "i"
  );
  const m = html.match(re);
  return m?.[1] || m?.[2] || "";
}

function pickCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m?.[1] || "";
}

function pickTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m?.[1]?.trim() || "";
}

function countJsonLd(html) {
  return (html.match(/application\/ld\+json/gi) || []).length;
}

async function auditRobots() {
  const { res, text, url } = await fetchText("/robots.txt");
  if (res.status !== 200) return fail("robots", `${url} returned ${res.status}`);
  ok("robots", `robots.txt reachable (${res.status})`);
  if (!/sitemap:\s*https?:\/\//i.test(text)) fail("robots", "No Sitemap: directive found");
  else ok("robots", "Sitemap directive present");
  if (/disallow:\s*\/\s*$/im.test(text) && !/allow:\s*\//i.test(text)) {
    warn("robots", "Broad Disallow:/ detected — verify intentional");
  }
}

async function auditSitemap() {
  const { res, text, url } = await fetchText("/sitemap.xml");
  if (res.status !== 200) return fail("sitemap", `${url} returned ${res.status}`);
  ok("sitemap", `sitemap.xml reachable (${res.status})`);
  const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length < 10) fail("sitemap", `Only ${locs.length} <loc> entries`);
  else ok("sitemap", `${locs.length} URLs listed`);
  const nonHttps = locs.filter((u) => !u.startsWith("https://"));
  if (nonHttps.length) fail("sitemap", `${nonHttps.length} non-https URLs`);
  else ok("sitemap", "All sitemap URLs use https");
  return locs;
}

async function auditPage(path) {
  const { res, text, url } = await fetchText(path);
  const area = `page:${path}`;
  if (res.status >= 300 && res.status < 400) {
    warn(area, `${url} redirect ${res.status} → ${res.headers.get("location") || "?"}`);
    return;
  }
  if (res.status !== 200) {
    fail(area, `${url} returned ${res.status}`);
    return;
  }
  ok(area, `200 OK`);

  const title = pickTitle(text);
  const desc = pickMeta(text, "name", "description");
  const canonical = pickCanonical(text);
  const ogTitle = pickMeta(text, "property", "og:title");
  const ogDesc = pickMeta(text, "property", "og:description");
  const ogImage = pickMeta(text, "property", "og:image");
  const twCard = pickMeta(text, "name", "twitter:card");
  const robots = pickMeta(text, "name", "robots");
  const jsonLd = countJsonLd(text);

  if (!title) fail(area, "Missing <title>");
  else if (title.length < 15 || title.length > 70) warn(area, `Title length ${title.length} (ideal ~15–60)`);
  else ok(area, `Title OK (${title.length} chars)`);

  if (!desc) fail(area, "Missing meta description");
  else if (desc.length < 50 || desc.length > 170) warn(area, `Description length ${desc.length}`);
  else ok(area, `Description OK (${desc.length} chars)`);

  if (!canonical) warn(area, "Missing canonical");
  else if (!canonical.startsWith("https://")) fail(area, `Canonical not https: ${canonical}`);
  else ok(area, `Canonical: ${canonical}`);

  if (!ogTitle || !ogDesc) warn(area, "Incomplete Open Graph tags");
  else ok(area, "Open Graph title/description present");
  if (!ogImage) warn(area, "Missing og:image");
  else ok(area, "og:image present");

  if (!twCard) warn(area, "Missing twitter:card");
  else ok(area, `twitter:card=${twCard}`);

  if (/noindex/i.test(robots)) warn(area, `robots meta contains noindex: ${robots}`);
  if (jsonLd === 0) warn(area, "No JSON-LD blocks detected");
  else ok(area, `${jsonLd} JSON-LD block(s)`);

  const imgs = [...text.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const missingAlt = imgs.filter((i) => !/\balt=/i.test(i)).length;
  if (imgs.length && missingAlt) warn(area, `${missingAlt}/${imgs.length} <img> missing alt`);
  else if (imgs.length) ok(area, `All ${imgs.length} sampled <img> have alt attr`);
}

async function auditInternalSample(locs) {
  if (!locs?.length) return;
  const blogLocs = locs.filter((u) => u.includes("/blog/")).slice(0, 8);
  for (const loc of blogLocs) {
    const { res } = await fetchText(loc);
    if (res.status === 200) ok("internal-links", `${loc} → 200`);
    else fail("internal-links", `${loc} → ${res.status}`);
  }
}

function runLighthouse() {
  const out = join(OUT_DIR, `lighthouse-home-${stamp}`);
  mkdirSync(OUT_DIR, { recursive: true });
  const result = spawnSync(
    "npx",
    [
      "lighthouse",
      `${BASE}/`,
      "--only-categories=seo,accessibility,best-practices,performance",
      "--chrome-flags=--headless --no-sandbox",
      "--output=json",
      "--output=html",
      `--output-path=${out}`,
      "--quiet",
    ],
    { encoding: "utf8", timeout: 180000 }
  );
  if (result.status === 0) ok("lighthouse", `Report written: ${out}.html / .report.json`);
  else fail("lighthouse", result.stderr || result.stdout || "Lighthouse failed");
}

function printReport() {
  const passes = findings.filter((f) => f.level === "pass").length;
  const warns = findings.filter((f) => f.level === "warn").length;
  const fails = findings.filter((f) => f.level === "fail").length;
  console.log(`\n=== NoorPath SEO Audit ===`);
  console.log(`Base: ${BASE}`);
  console.log(`Pass: ${passes} | Warn: ${warns} | Fail: ${fails}\n`);
  for (const f of findings) {
    const tag = f.level === "pass" ? "✓" : f.level === "warn" ? "!" : "✗";
    console.log(`${tag} [${f.area}] ${f.msg}`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = join(OUT_DIR, `audit-${stamp}.json`);
  writeFileSync(
    jsonPath,
    JSON.stringify({ base: BASE, generatedAt: new Date().toISOString(), findings }, null, 2)
  );
  console.log(`\nJSON report: ${jsonPath}`);
  if (fails > 0) process.exitCode = 1;
}

async function main() {
  await auditRobots();
  const locs = await auditSitemap();
  for (const path of SAMPLE_PATHS.filter((p) => !p.endsWith(".xml") && !p.endsWith(".txt"))) {
    await auditPage(path);
  }
  await auditInternalSample(locs);
  if (RUN_LH) runLighthouse();
  printReport();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
