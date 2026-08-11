#!/usr/bin/env node
/**
 * Validates public/llms.txt URLs against:
 * 1) Curated catalog consistency
 * 2) Forbidden redirect paths
 * 3) Built prerender HTML / sitemap (local)
 * 4) Optional live HEAD checks (--live)
 *
 * Usage:
 *   node scripts/seo/validate-llms-txt.mjs
 *   node scripts/seo/validate-llms-txt.mjs --base http://127.0.0.1:3100
 *   node scripts/seo/validate-llms-txt.mjs --live
 */
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE,
  FORBIDDEN_PATHS,
  allCatalogPaths,
  abs,
} from "./lib/llms-catalog.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const LLMS = join(ROOT, "public/llms.txt");
const LLMS_FULL = join(ROOT, "public/llms-full.txt");
const REPORT = join(ROOT, "seo-reports/llms-txt-validation.json");

const args = process.argv.slice(2);
const live = args.includes("--live");
const baseIdx = args.indexOf("--base");
const localBase = baseIdx >= 0 ? args[baseIdx + 1] : null;

function extractUrls(text) {
  const re = /https?:\/\/[^\s)\]]+/g;
  return [...new Set(text.match(re) || [])];
}

function pathFromNoorpathUrl(url) {
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("noorpath.online")) return null;
    return u.pathname.replace(/\/$/, "") || "/";
  } catch {
    return null;
  }
}

function prerenderExists(pathname) {
  if (pathname === "/") {
    return existsSync(join(ROOT, ".next/server/app/index.html"));
  }
  const clean = pathname.replace(/^\//, "");
  const candidates = [
    join(ROOT, `.next/server/app/${clean}.html`),
    join(ROOT, `.next/server/app/${clean}/index.html`),
  ];
  return candidates.some((p) => existsSync(p));
}

function sitemapHas(pathname) {
  const body = join(ROOT, ".next/server/app/sitemap.xml.body");
  if (!existsSync(body)) return null;
  const text = readFileSync(body, "utf8");
  const needle = `${BASE}${pathname === "/" ? "" : pathname}`;
  return text.includes(needle) || text.includes(`https://www.noorpath.online${pathname}`);
}

async function headCheck(url) {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
      headers: { "user-agent": "NoorPath-llms-validator/1.0" },
    });
    return { status: res.status, location: res.headers.get("location") };
  } catch (err) {
    return { status: 0, error: String(err.message || err) };
  }
}

async function main() {
  if (!existsSync(LLMS) || !existsSync(LLMS_FULL)) {
    console.error("Missing public/llms.txt or public/llms-full.txt — run generate-llms-txt.mjs first");
    process.exit(1);
  }

  const text = readFileSync(LLMS, "utf8");
  const textFull = readFileSync(LLMS_FULL, "utf8");
  const urls = extractUrls(text);
  const urlsFull = extractUrls(textFull);
  const allUrls = [...new Set([...urls, ...urlsFull])];

  const noorpathUrls = allUrls.filter((u) => {
    try {
      return new URL(u).hostname === "www.noorpath.online" || new URL(u).hostname === "noorpath.online";
    } catch {
      return false;
    }
  });
  const externalUrls = allUrls.filter((u) => !noorpathUrls.includes(u));

  const report = {
    generatedAt: new Date().toISOString(),
    files: ["public/llms.txt", "public/llms-full.txt"],
    totalUrls: allUrls.length,
    noorpathUrls: noorpathUrls.length,
    externalUrls: externalUrls.length,
    valid: 0,
    broken: [],
    redirects: [],
    nonCanonicalHost: [],
    forbiddenRedirectPaths: [],
    missingFromPrerender: [],
    missingFromSitemap: [],
    duplicateUrls: [],
    catalogMismatch: [],
  };

  const paths = noorpathUrls
    .map(pathFromNoorpathUrl)
    .filter((p) => p && p !== "/llms.txt" && p !== "/llms-full.txt");
  const pathCounts = new Map();
  for (const p of paths) pathCounts.set(p, (pathCounts.get(p) || 0) + 1);
  for (const [p, n] of pathCounts) {
    if (n > 1) report.duplicateUrls.push({ path: p, count: n });
  }

  for (const u of noorpathUrls) {
    const host = new URL(u).hostname;
    if (host !== "www.noorpath.online") {
      report.nonCanonicalHost.push(u);
    }
    const p = pathFromNoorpathUrl(u);
    if (p && FORBIDDEN_PATHS.has(p)) {
      report.forbiddenRedirectPaths.push(u);
    }
  }

  // Full map must cover the catalog; concise map must be a subset of catalog.
  const catalog = new Set(allCatalogPaths());
  const uniquePaths = new Set(paths);
  const fullPaths = new Set(
    extractUrls(textFull)
      .map(pathFromNoorpathUrl)
      .filter((p) => p && p !== "/llms.txt" && p !== "/llms-full.txt")
  );
  const shortPaths = new Set(
    extractUrls(text)
      .map(pathFromNoorpathUrl)
      .filter((p) => p && p !== "/llms.txt" && p !== "/llms-full.txt")
  );

  for (const p of fullPaths) {
    if (!catalog.has(p)) {
      report.catalogMismatch.push({ path: p, reason: "in llms-full.txt but not catalog" });
    }
  }
  for (const p of catalog) {
    if (!fullPaths.has(p)) {
      report.catalogMismatch.push({ path: p, reason: "in catalog but missing from llms-full.txt" });
    }
  }
  for (const p of shortPaths) {
    if (!catalog.has(p)) {
      report.catalogMismatch.push({ path: p, reason: "in llms.txt but not catalog" });
    }
  }

  const hasBuild = existsSync(join(ROOT, ".next/server/app"));
  if (hasBuild) {
    for (const p of [...uniquePaths]) {
      if (!prerenderExists(p)) report.missingFromPrerender.push(p);
      const inSm = sitemapHas(p);
      if (inSm === false) report.missingFromSitemap.push(p);
    }
  }

  const checkBase = localBase || (live ? BASE : null);
  if (checkBase) {
    for (const u of noorpathUrls) {
      const p = pathFromNoorpathUrl(u);
      const target = localBase ? `${localBase.replace(/\/$/, "")}${p === "/" ? "/" : p}` : u;
      const res = await headCheck(target);
      if (res.status >= 200 && res.status < 300) {
        report.valid += 1;
      } else if (res.status >= 300 && res.status < 400) {
        report.redirects.push({ url: target, status: res.status, location: res.location });
      } else {
        report.broken.push({ url: target, status: res.status, error: res.error });
      }
    }
  } else if (hasBuild) {
    for (const p of [...uniquePaths]) {
      if (prerenderExists(p)) report.valid += 1;
      else report.broken.push({ url: abs(p), status: "missing-prerender" });
    }
  } else {
    console.warn("No .next build and no --base/--live; skipped HTTP validation.");
  }

  mkdirSync(dirname(REPORT), { recursive: true });
  writeFileSync(REPORT, JSON.stringify(report, null, 2));

  const fail =
    report.broken.length > 0 ||
    report.forbiddenRedirectPaths.length > 0 ||
    report.nonCanonicalHost.length > 0 ||
    report.catalogMismatch.length > 0 ||
    report.missingFromPrerender.length > 0;

  console.log("llms.txt + llms-full.txt validation");
  console.log(`  Total URLs (union): ${report.totalUrls}`);
  console.log(`  NoorPath URLs: ${report.noorpathUrls}`);
  console.log(`  Valid (checked): ${report.valid}`);
  console.log(`  Broken: ${report.broken.length}`);
  console.log(`  Redirects: ${report.redirects.length}`);
  console.log(`  Non-canonical host: ${report.nonCanonicalHost.length}`);
  console.log(`  Forbidden redirect paths: ${report.forbiddenRedirectPaths.length}`);
  console.log(`  Missing prerender: ${report.missingFromPrerender.length}`);
  console.log(`  Missing sitemap (info): ${report.missingFromSitemap.length}`);
  console.log(`  Catalog mismatches: ${report.catalogMismatch.length}`);
  console.log(`  Report: ${REPORT}`);

  if (fail) {
    console.error("VALIDATION FAILED");
    if (report.broken.length) console.error(report.broken.slice(0, 10));
    if (report.forbiddenRedirectPaths.length) console.error(report.forbiddenRedirectPaths);
    if (report.catalogMismatch.length) console.error(report.catalogMismatch.slice(0, 20));
    if (report.missingFromPrerender.length) console.error(report.missingFromPrerender.slice(0, 20));
    process.exit(1);
  }
  console.log("VALIDATION PASSED");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
