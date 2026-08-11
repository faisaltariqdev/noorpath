import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const ROOT = process.cwd();
export const BASE = (process.env.SEO_BASE_URL || "https://www.noorpath.online").replace(/\/$/, "");

export function read(rel) {
  const p = join(ROOT, rel);
  return existsSync(p) ? readFileSync(p, "utf8") : "";
}

export function listBlogSlugsFromBlogTs() {
  const src = read("src/data/blog.ts");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

export function listSitemapCommercialSlugs() {
  const src = read("src/app/sitemap.ts");
  const block = src.match(/COMMERCIAL_BLOG_SLUGS[\s\S]*?\]/);
  if (!block) return [];
  return [...block[0].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

export function listSitemapHighTrafficSlugs() {
  const src = read("src/app/sitemap.ts");
  const block = src.match(/HIGH_TRAFFIC_BLOG_SLUGS[\s\S]*?\]/);
  if (!block) return [];
  return [...block[0].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

export function listFaqSlugs() {
  const src = read("src/data/blogFaqs.ts");
  return [...src.matchAll(/^\s+"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1]);
}

export function listContentModuleFiles() {
  const dir = join(ROOT, "src/data");
  return readdirSync(dir)
    .filter((f) => f.startsWith("blogContent") && f.endsWith(".ts"))
    .map((f) => join("src/data", f));
}

export function extractContentSlugs() {
  const files = listContentModuleFiles();
  const slugs = new Set();
  for (const f of files) {
    const src = read(f);
    for (const m of src.matchAll(/^\s+"([a-z0-9-]+)":\s*\{/gm)) slugs.add(m[1]);
  }
  // also inline keys in blogContent.ts itself beyond spreads are harder; keep modules
  return [...slugs];
}

export function scanExistingSeoConfig() {
  return {
    hasSitemap: existsSync(join(ROOT, "src/app/sitemap.ts")),
    hasRobots: existsSync(join(ROOT, "src/app/robots.ts")),
    hasOrgSchema: existsSync(join(ROOT, "src/lib/organizationSchema.ts")),
    hasGeoSeo: existsSync(join(ROOT, "src/lib/geoSeo.ts")),
    hasAcademyFacts: existsSync(join(ROOT, "src/lib/academyFacts.ts")),
    hasBlogFaqs: existsSync(join(ROOT, "src/data/blogFaqs.ts")),
    blogCount: listBlogSlugsFromBlogTs().length,
    faqCount: listFaqSlugs().length,
    commercialSitemapCount: listSitemapCommercialSlugs().length,
    highTrafficSitemapCount: listSitemapHighTrafficSlugs().length,
  };
}
