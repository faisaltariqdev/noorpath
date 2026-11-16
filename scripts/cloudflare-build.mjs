#!/usr/bin/env node
/**
 * Builds the site as plain static files for Cloudflare Pages (folder: out/).
 *
 *   Cloudflare build command:  node scripts/cloudflare-build.mjs   (output folder: out)
 *   Cloudflare Workers deploy command: npx wrangler deploy        (see wrangler.jsonc)
 *   Local test (safe, works on a temporary copy):  node scripts/cloudflare-build.mjs
 *
 * What it does, in order:
 *   1. Static export needs no server code, so it removes src/app/api and src/proxy.ts from the
 *      working copy. Their jobs move to functions/api/* (form email, nisab, Meta events) and to the
 *      generated out/_redirects and out/_headers files.
 *   2. Marks metadata routes (sitemap, robots, manifest) as static.
 *   3. Runs `next build` with CLOUDFLARE_EXPORT=1 (see next.config.ts).
 *   4. Writes out/_redirects (legacy paths, Holy Quran aliases, country short forms) and
 *      out/_headers (security headers, long caching for assets, noindex for thin city pages).
 *
 * The Vercel setup is untouched: in the repo itself nothing is deleted. On Cloudflare Pages
 * (CF_PAGES=1 / WORKERS_CI=1) the script edits the throw-away build checkout; locally it works on a copy in the
 * OS temp folder.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Cloudflare Pages sets CF_PAGES=1, Cloudflare Workers Builds sets WORKERS_CI=1.
const inCI = process.env.CF_PAGES === "1" || process.env.WORKERS_CI === "1";
const MAX_STATIC_REDIRECTS = 2000; // Cloudflare Pages limit

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: "inherit", ...opts });
  if (r.status !== 0) {
    console.error(`\n[cloudflare-build] "${cmd} ${args.join(" ")}" failed (exit ${r.status}).`);
    process.exit(r.status ?? 1);
  }
}

// ── 0. Working directory ──────────────────────────────────────────────────────
let work = repo;
if (!inCI) {
  work = path.join(os.tmpdir(), "noorpath-cf-build");
  console.log(`[cloudflare-build] local run: working on a copy in ${work}`);
  const skip = new Set(["node_modules", ".next", "out", ".git", ".claude", "scratch", "seo-reports", "legacy-html-do-not-deploy"]);
  for (const entry of ["src", "out", ".next"]) fs.rmSync(path.join(work, entry), { recursive: true, force: true });
  fs.mkdirSync(work, { recursive: true });
  fs.cpSync(repo, work, {
    recursive: true,
    filter: (src) => !skip.has(path.relative(repo, src).split(path.sep)[0]),
  });
  if (!fs.existsSync(path.join(work, "node_modules"))) {
    // Turbopack rejects symlinked node_modules, so clone it (instant on APFS).
    const cloneFlag = process.platform === "darwin" ? "-Rc" : "-R";
    run("cp", [cloneFlag, path.join(repo, "node_modules"), path.join(work, "node_modules")]);
  }
}

// ── 1. Remove server-only pieces from the working copy ────────────────────────
fs.rmSync(path.join(work, "src/app/api"), { recursive: true, force: true });
fs.rmSync(path.join(work, "src/proxy.ts"), { force: true });

// ── 2. Metadata routes must be explicitly static for `output: "export"` ───────
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}
for (const file of walk(path.join(work, "src/app"))) {
  if (!/(?:^|[\\/])(route|sitemap|robots|manifest)\.ts$/.test(file)) continue;
  const src = fs.readFileSync(file, "utf8");
  if (!/export const dynamic\s*=/.test(src)) fs.appendFileSync(file, '\nexport const dynamic = "force-static";\n');
}

// Temporary route that lets Next's own bundler evaluate the redirect data (TypeScript + "@/" aliases).
const metaDir = path.join(work, "src/app/cf-meta.json");
fs.mkdirSync(metaDir, { recursive: true });
fs.writeFileSync(
  path.join(metaDir, "route.ts"),
  `import { LEGACY_PATHS } from "@/data/legacyPaths";
import { holyQuranRedirects } from "@/data/holy-quran";
import { TEMPLATE_CITY_NOINDEX_SLUGS } from "@/data/cities";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    legacy: LEGACY_PATHS,
    holyQuran: holyQuranRedirects(),
    noindexCities: [...TEMPLATE_CITY_NOINDEX_SLUGS],
  });
}
`,
);

// ── 3. Build ──────────────────────────────────────────────────────────────────
fs.rmSync(path.join(work, "out"), { recursive: true, force: true });
run(process.execPath, [path.join(work, "node_modules/next/dist/bin/next"), "build"], {
  cwd: work,
  env: { ...process.env, CLOUDFLARE_EXPORT: "1" },
});

const out = path.join(work, "out");
const metaFile = path.join(out, "cf-meta.json");
const meta = JSON.parse(fs.readFileSync(metaFile, "utf8"));
fs.rmSync(metaFile);
fs.rmSync(path.join(out, "cf-meta"), { recursive: true, force: true });

// ── 4. _redirects ─────────────────────────────────────────────────────────────
// Redirects from next.config.ts (read with Next's own loader, WITHOUT export mode so they are present).
const probe = `
  const mod = await import("next/dist/server/config.js");
  const loadConfig = typeof mod.default === "function" ? mod.default : mod.default.default;
  const cfg = await loadConfig("phase-production-build", process.cwd());
  const list = typeof cfg.redirects === "function" ? await cfg.redirects() : [];
  process.stdout.write("@@JSON@@" + JSON.stringify(list));
`;
const probeRun = spawnSync(process.execPath, ["--input-type=module", "-e", probe], {
  cwd: work,
  encoding: "utf8",
  env: { ...process.env, CLOUDFLARE_EXPORT: "" },
});
if (probeRun.status !== 0 || !probeRun.stdout.includes("@@JSON@@")) {
  console.error("[cloudflare-build] could not read redirects from next.config.ts\n", probeRun.stderr);
  process.exit(1);
}
const configRedirects = JSON.parse(probeRun.stdout.split("@@JSON@@")[1]);

const rules = new Map(); // source -> destination (first rule wins, like Cloudflare)
const add = (source, destination) => {
  if (!source.startsWith("/") || /[:*]/.test(source)) return; // host-based / pattern rules handled elsewhere
  if (source === destination || rules.has(source)) return;
  rules.set(source, destination);
};
for (const [from, to] of Object.entries(meta.legacy)) add(from, to);
for (const [from, to] of Object.entries(meta.holyQuran)) add(from, to);
for (const r of configRedirects) {
  if (r.has?.length) continue; // apex -> www and http -> https are done by Cloudflare itself
  add(r.source, r.destination);
}

if (rules.size > MAX_STATIC_REDIRECTS) {
  console.error(`[cloudflare-build] ${rules.size} redirects exceed Cloudflare Pages' limit of ${MAX_STATIC_REDIRECTS}.`);
  process.exit(1);
}
fs.writeFileSync(
  path.join(out, "_redirects"),
  [...rules].map(([from, to]) => `${from} ${to} 301`).join("\n") + "\n",
);

// ── 5. _headers ───────────────────────────────────────────────────────────────
const security = [
  "X-Frame-Options: SAMEORIGIN",
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
  "X-DNS-Prefetch-Control: on",
  "Permissions-Policy: camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
];
const headers = [
  ["/*", security],
  ["/_next/static/*", ["Cache-Control: public, max-age=31536000, immutable"]],
  ["/marketing/*", ["Cache-Control: public, max-age=31536000"]],
  ["/assets/*", ["Cache-Control: public, max-age=31536000"]],
  ["/resources/*", ["Cache-Control: public, max-age=31536000"]],
  // Thin template city pages: same noindex header the Vercel proxy sent.
  ...meta.noindexCities.map((slug) => [`/online-quran-classes/${slug}`, ["X-Robots-Tag: noindex, follow"]]),
];
fs.writeFileSync(
  path.join(out, "_headers"),
  headers.map(([p, lines]) => `${p}\n${lines.map((l) => `  ${l}`).join("\n")}`).join("\n\n") + "\n",
);

// ── Summary ───────────────────────────────────────────────────────────────────
const files = walk(out);
console.log("\n[cloudflare-build] done");
console.log(`  output folder : ${out}`);
console.log(`  files         : ${files.length} (Cloudflare Pages limit: 20000)`);
console.log(`  html pages    : ${files.filter((f) => f.endsWith(".html")).length}`);
console.log(`  redirects     : ${rules.size} (limit ${MAX_STATIC_REDIRECTS})`);
console.log(`  noindex pages : ${meta.noindexCities.join(", ") || "none"}`);
if (!inCI) console.log(`  functions     : ${path.join(work, "functions")}  (test with: npx wrangler pages dev out)`);
