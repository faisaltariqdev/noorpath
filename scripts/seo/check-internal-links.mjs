#!/usr/bin/env node
/**
 * Internal link + orphan integrity gate for NoorPath.
 * Runs against the prerendered output in .next/server/app — no server required.
 *
 * Fails on: internal links that resolve to no route and no public asset.
 * Warns on:  indexable pages with zero inbound internal links (orphans).
 *
 * Usage:
 *   npm run build && node scripts/seo/check-internal-links.mjs
 *   node scripts/seo/check-internal-links.mjs --max-orphans=25
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");
const PUBLIC_DIR = join(process.cwd(), "public");
const OUT_DIR = join(process.cwd(), "seo-reports");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

const maxOrphansArg = process.argv.find((a) => a.startsWith("--max-orphans="));
const MAX_ORPHANS = maxOrphansArg ? Number(maxOrphansArg.split("=")[1]) : Infinity;

/** Routes that legitimately carry no inbound links or are intentionally non-indexable. */
const ORPHAN_ALLOWLIST = new Set([
  "/_not-found",
  "/_global-error",
  "/index",
  "/thank-you",
]);

const findings = [];
const ok = (area, msg) => findings.push({ level: "pass", area, msg });
const warn = (area, msg) => findings.push({ level: "warn", area, msg });
const fail = (area, msg) => findings.push({ level: "fail", area, msg });

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

/** `.next/server/app/blog/foo.html` → `/blog/foo` */
function routeOf(file) {
  const rel = "/" + relative(APP_DIR, file).replace(/\.html$/, "");
  return rel.replace(/\/$/, "") || "/";
}

function isAssetPath(href) {
  return /\.[a-z0-9]{2,5}$/i.test(href);
}

function main() {
  if (!existsSync(APP_DIR)) {
    console.error(`No prerender output at ${APP_DIR}. Run \`npm run build\` first.`);
    process.exit(1);
  }

  const files = walk(APP_DIR);
  const routes = new Set(files.map(routeOf));
  // `/` is emitted as `/index` by the prerenderer but is a real route.
  routes.add("/");

  const inbound = new Map(); // route -> Set(source routes)
  const brokenBy = new Map(); // href -> Set(source routes)

  for (const file of files) {
    const src = routeOf(file);
    const html = readFileSync(file, "utf8");
    for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const raw = m[1];
      // Protocol-relative URLs (//example.com) are external preconnect hints.
      if (raw.startsWith("//")) continue;
      const href = raw.replace(/\/$/, "") || "/";

      if (routes.has(href)) {
        if (href !== src) {
          if (!inbound.has(href)) inbound.set(href, new Set());
          inbound.get(href).add(src);
        }
        continue;
      }
      if (href.startsWith("/_next/") || href.startsWith("/api/")) continue;
      if (isAssetPath(href) && existsSync(join(PUBLIC_DIR, href))) continue;
      // Next metadata routes (manifest.webmanifest, sitemap.xml, robots.txt…)
      // are emitted as `<route>.body` rather than `<route>.html`.
      if (existsSync(join(APP_DIR, `${href}.body`))) continue;

      if (!brokenBy.has(href)) brokenBy.set(href, new Set());
      brokenBy.get(href).add(src);
    }
  }

  // ── Broken links ──────────────────────────────────────────────────────────
  if (brokenBy.size === 0) {
    ok("links", `All internal links resolve (${routes.size} routes scanned)`);
  } else {
    for (const [href, sources] of brokenBy) {
      const from = [...sources].slice(0, 3).join(", ");
      fail("links", `Broken internal link ${href} — referenced ${sources.size}x (e.g. ${from})`);
    }
  }

  // ── Orphans ───────────────────────────────────────────────────────────────
  const orphans = [...routes]
    .filter((r) => !ORPHAN_ALLOWLIST.has(r))
    .filter((r) => !(inbound.get(r)?.size > 0))
    .sort();

  if (orphans.length === 0) {
    ok("orphans", "No orphan pages");
  } else {
    for (const r of orphans) warn("orphans", `Orphan page (zero inbound internal links): ${r}`);
  }

  // ── Report ────────────────────────────────────────────────────────────────
  const passes = findings.filter((f) => f.level === "pass").length;
  const warns = findings.filter((f) => f.level === "warn").length;
  const fails = findings.filter((f) => f.level === "fail").length;

  console.log("\n=== NoorPath Internal Link Integrity ===");
  console.log(`Routes: ${routes.size} | Pass: ${passes} | Warn: ${warns} | Fail: ${fails}\n`);
  for (const f of findings) {
    const tag = f.level === "pass" ? "✓" : f.level === "warn" ? "!" : "✗";
    console.log(`${tag} [${f.area}] ${f.msg}`);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = join(OUT_DIR, `internal-links-${stamp}.json`);
  writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        routeCount: routes.size,
        orphanCount: orphans.length,
        orphans,
        broken: Object.fromEntries([...brokenBy].map(([k, v]) => [k, [...v]])),
        inboundCounts: Object.fromEntries([...routes].map((r) => [r, inbound.get(r)?.size ?? 0])),
        findings,
      },
      null,
      2
    )
  );
  console.log(`\nJSON report: ${jsonPath}`);

  if (fails > 0) process.exitCode = 1;
  if (orphans.length > MAX_ORPHANS) {
    console.error(`\n✗ Orphan count ${orphans.length} exceeds --max-orphans=${MAX_ORPHANS}`);
    process.exitCode = 1;
  }
}

main();
