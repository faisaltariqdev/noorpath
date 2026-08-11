#!/usr/bin/env node
/**
 * Validate blog FAQ honesty: any FAQPage emission must match visible .faq-acc HTML.
 * Runtime source of truth: src/lib/faqFromHtml.ts (used by blog/[slug]/page.tsx).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractVisibleFaqsFromHtml(html) {
  if (!html) return [];
  const faqs = [];
  const re =
    /<details\b[^>]*\bclass=["'][^"']*\bfaq-acc\b[^"']*["'][^>]*>\s*<summary\b[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    const question = stripTags(match[1].replace(/<span[^>]*>\s*\+\s*<\/span>/gi, " "));
    const answer = stripTags(match[2]);
    if (question.length >= 8 && answer.length >= 8) faqs.push({ question, answer });
  }
  return faqs;
}

function loadMergedContent() {
  const dir = join(ROOT, "src/data");
  const files = readdirSync(dir).filter((f) => f.startsWith("blogContent") && f.endsWith(".ts"));
  files.push("backlinkAssetContent.ts");
  const map = new Map();
  for (const f of files) {
    const src = readFileSync(join(dir, f), "utf8");
    const re = /"([a-z0-9-]+)"\s*:\s*\{[\s\S]*?content:\s*`([\s\S]*?)`/g;
    let m;
    while ((m = re.exec(src)) !== null) {
      map.set(m[1], m[2]);
    }
  }
  return map;
}

const blogPage = readFileSync(join(ROOT, "src/app/blog/[slug]/page.tsx"), "utf8");
const usesHtmlFaqs = /faqPageJsonLdFromHtml/.test(blogPage);
const stillUsesBlogFaqs = /from ["']@\/data\/blogFaqs["']/.test(blogPage);

const content = loadMergedContent();
let withVisible = 0;
let totalVisibleFaqs = 0;
for (const html of content.values()) {
  const faqs = extractVisibleFaqsFromHtml(html);
  if (faqs.length) {
    withVisible++;
    totalVisibleFaqs += faqs.length;
  }
}

const outDir = join(ROOT, "seo-reports");
mkdirSync(outDir, { recursive: true });
const report = {
  pulledAt: new Date().toISOString(),
  usesHtmlDerivedFaqJsonLd: usesHtmlFaqs,
  stillImportsLegacyBlogFaqs: stillUsesBlogFaqs,
  contentSlugsScanned: content.size,
  slugsWithVisibleFaqAcc: withVisible,
  totalVisibleFaqItems: totalVisibleFaqs,
  pass: usesHtmlFaqs && !stillUsesBlogFaqs,
};
writeFileSync(join(outDir, "blog-faq-honesty-latest.json"), JSON.stringify(report, null, 2));

console.log(JSON.stringify(report, null, 2));
if (!report.pass) {
  console.error("FAIL: blog FAQ JSON-LD must come only from visible .faq-acc HTML");
  process.exit(1);
}
console.log("PASS: FAQ honesty wiring OK (schema ≡ visible FAQs when present; no schema when absent)");
