#!/usr/bin/env node
/**
 * Inventory schema-related source files and FAQ/Org presence.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { ROOT, read, listFaqSlugs, scanExistingSeoConfig } from "./lib/project-scan.mjs";

const findings = [];
const push = (level, msg) => findings.push({ level, msg });

const org = read("src/lib/organizationSchema.ts");
const faqs = listFaqSlugs();
const cfg = scanExistingSeoConfig();

if (/@type:\s*["']Organization["']|\"@type\":\s*\"Organization\"/.test(org) || /Organization/.test(org)) {
  push("pass", "Organization schema helper present");
} else push("fail", "Organization schema helper missing/unexpected");

if (faqs.length > 50) push("pass", `FAQPage inventory: ${faqs.length} slugs`);
else push("warn", `FAQPage inventory low: ${faqs.length}`);

// BlogPosting typically emitted in blog page component — soft check
const blogPage = read("src/app/blog/[slug]/page.tsx") || read("src/app/blog/[slug]/page.ts");
if (/BlogPosting|Article|FAQPage|jsonld|JSON-LD|application\/ld\+json/i.test(blogPage)) {
  push("pass", "Blog route references structured data patterns");
} else push("warn", "Blog route structured-data patterns not obviously detected — verify manually");

const courseHint = read("src/app/courses/[slug]/page.tsx") || read("src/lib/organizationSchema.ts");
if (/Course/.test(courseHint)) push("pass", "Course schema signals found");
else push("warn", "Course schema signals weak/absent");

const outDir = join(ROOT, "seo-reports");
mkdirSync(outDir, { recursive: true });
const report = { generatedAt: new Date().toISOString(), config: cfg, findings };
writeFileSync(join(outDir, "schema-inventory-latest.json"), JSON.stringify(report, null, 2));
for (const f of findings) console.log(`${f.level === "pass" ? "✓" : f.level === "warn" ? "!" : "✗"} ${f.msg}`);
if (findings.some((f) => f.level === "fail")) process.exitCode = 1;
