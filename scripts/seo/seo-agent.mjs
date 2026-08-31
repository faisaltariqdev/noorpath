#!/usr/bin/env node
/**
 * NoorPath AI SEO Agent (FREE, local)
 * Modes:
 *   node scripts/seo/seo-agent.mjs              # full project scan
 *   node scripts/seo/seo-agent.mjs --staged     # git staged files only (pre-commit)
 *   node scripts/seo/seo-agent.mjs --fix-safe  # apply safe wiring checks only (no content rewrite)
 *
 * Safe fixes only:
 *  - report missing FAQ/content/sitemap wiring for blog slugs
 *  - never invent Trustpilot/campus/stats
 *  - never auto-publish content
 */

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import {
  ROOT,
  BASE,
  listBlogSlugsFromBlogTs,
  listSitemapCommercialSlugs,
  listSitemapHighTrafficSlugs,
  extractContentSlugs,
  scanExistingSeoConfig,
  read,
} from "./lib/project-scan.mjs";

const STAGED = process.argv.includes("--staged");
const FIX_SAFE = process.argv.includes("--fix-safe");
const OUT_DIR = join(ROOT, "seo-reports");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

const findings = [];
const note = (level, area, msg, fix) => findings.push({ level, area, msg, fix: fix || null });

function stagedFiles() {
  const r = spawnSync("git", ["diff", "--cached", "--name-only", "--diff-filter=ACMR"], {
    encoding: "utf8",
  });
  return (r.stdout || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function validateRobotsSource() {
  const src = read("src/app/robots.ts");
  if (!src) return note("fail", "robots", "src/app/robots.ts missing");
  if (!/sitemap:\s*"https:\/\/www\.noorpath\.online\/sitemap\.xml"/.test(src)) {
    note("fail", "robots", "Sitemap URL missing or incorrect in robots.ts", "Set sitemap to https://www.noorpath.online/sitemap.xml");
  } else note("pass", "robots", "Sitemap directive present in robots.ts");
  if (!/disallow:\s*\["\/api\/"\]/.test(src) && !/disallow:\s*\[?"\/api\//.test(src)) {
    note("warn", "robots", "Confirm /api/ remains disallowed");
  } else note("pass", "robots", "/api/ disallow present");
}

/** Repo-relative paths of files under `dir` whose basename matches `match`. */
function listFilesUnder(dir, match) {
  const abs = join(ROOT, dir);
  if (!existsSync(abs)) return [];
  const out = [];
  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (match.test(entry.name)) out.push(relative(ROOT, full));
    }
  };
  walk(abs);
  return out;
}

/**
 * Brand-token guard for title tags.
 *
 * `title: { absolute: "..." }` bypasses the root layout template `%s | NoorPath Academy`,
 * so an absolute title without the brand ships a title tag containing no brand token at
 * all. That previously removed NoorPath from the homepage SERP result and cost the brand
 * queries ("noorpath", "noorpath academy"). Fail the build rather than let it recur.
 */
function validateBrandInTitles() {
  const BRAND = /NoorPath/i;
  // Files whose absolute titles are built from a variable defined elsewhere; the
  // brand is asserted on the source constant instead (see metaTitle checks below).
  const INDIRECT = /absolute:\s*(metaTitle|`\$\{)/;

  const sources = [
    ...listFilesUnder("src/app", /page\.tsx$/),
    "src/components/UkCityQuranPage.tsx",
    "src/lib/landingPageData.tsx",
    "src/lib/geoSeo.ts",
  ];

  const offenders = [];
  let checked = 0;
  for (const rel of sources) {
    const src = read(rel);
    if (!src) continue;
    // Literal absolute titles + the metaTitle/metadataTitle constants that feed them.
    const patterns = [
      /absolute:\s*"([^"]+)"/g,
      /absolute:\s*`([^`]+)`/g,
      /\bmetaTitle:\s*"([^"]+)"/g,
      /\bmetadataTitle:\s*"([^"]+)"/g,
    ];
    for (const re of patterns) {
      let m;
      while ((m = re.exec(src)) !== null) {
        const title = m[1];
        if (INDIRECT.test(m[0]) && !title) continue;
        checked += 1;
        if (!BRAND.test(title)) offenders.push({ rel, title });
      }
    }
  }

  if (offenders.length) {
    for (const { rel, title } of offenders) {
      note(
        "fail",
        "brand-title",
        `Title has no NoorPath brand token: ${rel} → "${title}"`,
        "Add '| NoorPath' or '| NoorPath Academy', or drop `absolute` so the layout template appends the brand",
      );
    }
  } else if (checked === 0) {
    // Guard the guard: a silent extraction break would otherwise pass vacuously.
    note("fail", "brand-title", "Brand-title guard matched 0 titles — extraction patterns are broken");
  } else {
    note("pass", "brand-title", `All ${checked} absolute/meta titles contain the NoorPath brand token`);
  }
}

function validateBlogWiring() {
  const meta = new Set(listBlogSlugsFromBlogTs());
  const content = new Set(extractContentSlugs());
  const commercial = new Set(listSitemapCommercialSlugs());
  const high = new Set(listSitemapHighTrafficSlugs());

  // FAQ honesty: live FAQPage JSON-LD is derived from visible `.faq-acc` HTML
  // (src/lib/faqFromHtml.ts). Prefer visible FAQs over legacy blogFaqs.ts keys.
  const blogPage = read("src/app/blog/[slug]/page.tsx");
  if (!/faqPageJsonLdFromHtml|faqFromHtml/.test(blogPage)) {
    note(
      "fail",
      "faq-honesty",
      "Blog page does not derive FAQ JSON-LD from visible HTML",
      "Wire faqPageJsonLdFromHtml(richContent.content) in src/app/blog/[slug]/page.tsx",
    );
  } else {
    note("pass", "faq-honesty", "Blog FAQ JSON-LD is derived from visible .faq-acc HTML");
  }

  // Sitemap priority coverage recommendations for commercial-looking titles
  const commercialCandidates = [...meta].filter((s) =>
    /online-|classes|tutor|pricing|hifz|tajweed|checklist|questions-to-ask|sibling|teen|gulf|start-hifz/.test(s)
  );
  for (const s of commercialCandidates.slice(0, 40)) {
    if (!commercial.has(s) && !high.has(s)) {
      note("warn", "sitemap-priority", `Consider COMMERCIAL_BLOG_SLUGS: ${s}`);
    }
  }

  note("pass", "inventory", `Blogs=${meta.size}, content-module slugs=${content.size}`);
}

function validateHonestyGuards() {
  const facts = read("src/lib/academyFacts.ts");
  if (!/score:\s*"4\.0"/.test(facts) && !/score:\s*'4\.0'/.test(facts)) {
    note("warn", "eeat", "Verify TRUSTPILOT.score still matches live Trustpilot truth");
  } else note("pass", "eeat", "Trustpilot score constant present (4.0)");

  const org = read("src/lib/organizationSchema.ts");
  if (/AggregateRating/.test(org) && /ratingValue["']?\s*:\s*["']?5/.test(org)) {
    note("fail", "schema", "Suspicious 5.0 aggregate rating in organization schema");
  } else note("pass", "schema", "No obvious fake 5.0 AggregateRating in organizationSchema.ts");
}

function validateStagedSeoSurface(files) {
  const seoTouch = files.filter((f) =>
    /^(src\/app\/|src\/data\/blog|src\/lib\/(geoSeo|organizationSchema|academyFacts|pageTitle)|src\/app\/(sitemap|robots))/.test(f)
  );
  if (!seoTouch.length) {
    note("pass", "staged", "No SEO-surface files staged");
    return seoTouch;
  }
  note("pass", "staged", `SEO-related staged files: ${seoTouch.length}`);
  for (const f of seoTouch) {
    if (f.endsWith("page.tsx") || f.endsWith("layout.tsx")) {
      const src = existsSync(join(ROOT, f)) ? readFileSync(join(ROOT, f), "utf8") : "";
      if (src && !/metadata|generateMetadata/.test(src) && !/layout\.tsx$/.test(f)) {
        // many pages import shared metadata helpers; soft warn only
        note("warn", "metadata", `${f}: no local metadata/generateMetadata — confirm parent layout metadata covers this route`);
      }
      if (/noindex/.test(src)) note("warn", "indexability", `${f} contains noindex`);
    }
    if (f === "src/data/blog.ts") {
      note("warn", "blog", "blog.ts changed — ensure blogContent + visible .faq-acc FAQs + sitemap sets updated");
    }
  }
  return seoTouch;
}

function validateKeywordCannibalization() {
  const posts = [];
  const src = read("src/data/blog.ts");
  const blocks = src.split(/\{\s*slug:/).slice(1);
  for (const block of blocks) {
    const slug = block.match(/^\s*"([^"]+)"/)?.[1];
    const title = block.match(/title:\s*"([^"]+)"/)?.[1];
    const keywords = [...block.matchAll(/"([^"]+)"/g)]
      .map((m) => m[1])
      .filter((k) => k.includes(" ") || k.includes("quran") || k.includes("dua"));
    if (slug && title) posts.push({ slug, title, keywords: keywords.slice(0, 12) });
  }

  const primary = new Map();
  for (const p of posts) {
    const key = (p.keywords[0] || p.title).toLowerCase();
    if (!primary.has(key)) primary.set(key, []);
    primary.get(key).push(p.slug);
  }
  let clashes = 0;
  for (const [k, slugs] of primary) {
    if (slugs.length > 1 && k.length > 8) {
      clashes++;
      if (clashes <= 15) note("warn", "cannibalization", `Possible shared primary term "${k}" → ${slugs.join(", ")}`);
    }
  }
  if (clashes === 0) note("pass", "cannibalization", "No obvious primary-keyword collisions in heuristic pass");
}

function validateHreflangSource() {
  const geo = read("src/lib/geoSeo.ts");
  if (!geo) return note("warn", "hreflang", "geoSeo.ts missing");
  if (/x-default/.test(geo) && /en-AE|en-GB|en-US/.test(geo)) {
    note("pass", "hreflang", "geoSeo contains locale cluster signals (x-default / market locales)");
  } else note("warn", "hreflang", "Review hreflang/locale cluster completeness in geoSeo.ts");
}

async function liveSmokeIfNeeded() {
  // lightweight live check only when not in staged mode or when SEO_LIVE=1
  if (STAGED && process.env.SEO_LIVE !== "1") {
    note("pass", "live", "Skipped live fetch in staged mode (set SEO_LIVE=1 to enable)");
    return;
  }
  try {
    const res = await fetch(`${BASE}/robots.txt`, { redirect: "follow" });
    if (res.ok) note("pass", "live", `robots.txt live ${res.status}`);
    else note("fail", "live", `robots.txt live ${res.status}`);
    const sm = await fetch(`${BASE}/sitemap.xml`);
    if (sm.ok) note("pass", "live", `sitemap.xml live ${sm.status}`);
    else note("fail", "live", `sitemap.xml live ${sm.status}`);
  } catch (e) {
    note("warn", "live", `Live fetch failed: ${e.message}`);
  }
}

function writeReport() {
  mkdirSync(OUT_DIR, { recursive: true });
  const summary = {
    generatedAt: new Date().toISOString(),
    mode: STAGED ? "staged" : "full",
    base: BASE,
    config: scanExistingSeoConfig(),
    counts: {
      pass: findings.filter((f) => f.level === "pass").length,
      warn: findings.filter((f) => f.level === "warn").length,
      fail: findings.filter((f) => f.level === "fail").length,
    },
    findings,
  };
  const jsonPath = join(OUT_DIR, `seo-agent-${stamp}.json`);
  const mdPath = join(OUT_DIR, `seo-agent-${stamp}.md`);
  writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  const md = [
    `# SEO Agent Report`,
    ``,
    `- Mode: ${summary.mode}`,
    `- Pass: ${summary.counts.pass} | Warn: ${summary.counts.warn} | Fail: ${summary.counts.fail}`,
    ``,
    ...findings.map((f) => `- **${f.level.toUpperCase()}** [${f.area}] ${f.msg}${f.fix ? ` → ${f.fix}` : ""}`),
    ``,
  ].join("\n");
  writeFileSync(mdPath, md);
  writeFileSync(join(OUT_DIR, "seo-agent-latest.md"), md);
  console.log(md);
  console.log(`\nWrote ${jsonPath}`);
  return summary;
}

async function main() {
  console.log("NoorPath SEO Agent starting…");
  if (STAGED) {
    const files = stagedFiles();
    validateStagedSeoSurface(files);
  }
  validateRobotsSource();
  validateBrandInTitles();
  validateBlogWiring();
  validateHonestyGuards();
  validateKeywordCannibalization();
  validateHreflangSource();
  await liveSmokeIfNeeded();

  if (FIX_SAFE) {
    note("pass", "fix-safe", "Safe-fix mode: no automatic content rewrites (enterprise policy). Wiring fixes must be reviewed.");
  }

  const summary = writeReport();
  if (summary.counts.fail > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
