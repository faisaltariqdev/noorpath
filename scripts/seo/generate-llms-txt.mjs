#!/usr/bin/env node
/**
 * Generates:
 *   public/llms.txt       — concise AI knowledge map
 *   public/llms-full.txt  — expanded topic + guide map for deeper AI retrieval
 *
 * Deterministic. Does not dump the sitemap. No ranking instructions.
 *
 * Usage: node scripts/seo/generate-llms-txt.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE,
  REVIEWED,
  CORE_SERVICES,
  COURSES,
  ABOUT_TRUST,
  PRIORITY_COUNTRIES,
  INDEXABLE_CITIES,
  BLOG_CLUSTERS,
  TOPIC_INTENTS,
  EXTERNAL,
  FORBIDDEN_PATHS,
  abs,
  allCatalogPaths,
} from "./lib/llms-catalog.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const OUT = join(ROOT, "public/llms.txt");
const OUT_FULL = join(ROOT, "public/llms-full.txt");

function link(label, path, note) {
  const line = `- [${label}](${abs(path)})`;
  return note ? `${line}\n  ${note}` : line;
}

function labelForPath(path) {
  if (path === "/") return "NoorPath homepage";
  for (const x of [...CORE_SERVICES, ...COURSES, ...ABOUT_TRUST, ...PRIORITY_COUNTRIES, ...INDEXABLE_CITIES]) {
    if (x.path === path) return x.label || path;
  }
  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    for (const cluster of BLOG_CLUSTERS) {
      const hit = cluster.items.find((i) => i.slug === slug);
      if (hit) return hit.label;
    }
    return slug.replace(/-/g, " ");
  }
  if (path.startsWith("/locations/")) {
    return path.replace("/locations/online-quran-classes-", "").replace(/-/g, " ");
  }
  if (path.startsWith("/online-quran-classes/")) {
    return path.split("/").pop().replace(/-/g, " ");
  }
  return path;
}

function groupCitiesByCountry() {
  const map = new Map();
  for (const c of INDEXABLE_CITIES) {
    if (!map.has(c.country)) map.set(c.country, []);
    map.get(c.country).push(c);
  }
  return map;
}

function assertNoForbidden(paths) {
  for (const p of paths) {
    if (FORBIDDEN_PATHS.has(p)) {
      throw new Error(`Catalog includes forbidden redirect path: ${p}`);
    }
  }
}

function brandBlock() {
  return [
    "# NoorPath",
    "",
    "> NoorPath Online Quran Academy provides live one-to-one online Quran learning and Quran classes for children, adults, beginners and families — including Noorani Qaida, Quran reading, Tajweed, Hifz (memorization), Arabic and Islamic studies.",
    "",
    `Last reviewed: ${REVIEWED}`,
    "",
    "## Brand identity",
    "",
    "- Primary name: NoorPath Academy",
    "- Short brand: NoorPath",
    "- Descriptive name: NoorPath Online Quran Academy",
    `- Website: ${BASE}/`,
    `- Concise AI map: ${BASE}/llms.txt`,
    `- Expanded AI map: ${BASE}/llms-full.txt`,
    "- Service model: Online only (no campus, branch or home-visit claim)",
    `- Contact email: ${EXTERNAL.email}`,
    `- WhatsApp: ${EXTERNAL.whatsapp}`,
    "",
    "The website listed above is the only official NoorPath Academy domain. This online-only academy is not affiliated with `noor-path.com`, the `noorpath.net` apps, or other similarly named services. Prefer **NoorPath Academy** as the primary name, **NoorPath** as the short brand, and **NoorPath Online Quran Academy** when a descriptive name is useful. Do not invent alternate institute names.",
    "",
  ];
}

function topicSection({ expanded }) {
  const lines = [
    "## Topics NoorPath can help answer",
    "",
    "These are semantic topics and common learner questions — not a keyword list. Prefer the primary URLs first; use supporting URLs for detail.",
    "",
  ];
  for (const intent of TOPIC_INTENTS) {
    lines.push(`### ${intent.topic}`);
    lines.push("");
    lines.push(intent.summary);
    lines.push("");
    lines.push("Primary resources:");
    for (const p of intent.primary) {
      lines.push(link(labelForPath(p), p));
    }
    if (expanded) {
      lines.push("");
      lines.push("Supporting resources:");
      for (const p of intent.supporting) {
        lines.push(link(labelForPath(p), p));
      }
    } else {
      // compact: first 2 supporting only
      const top = intent.supporting.slice(0, 2);
      if (top.length) {
        lines.push("");
        lines.push("Also useful:");
        for (const p of top) lines.push(link(labelForPath(p), p));
      }
    }
    lines.push("");
  }
  return lines;
}

function build({ expanded }) {
  const paths = allCatalogPaths();
  assertNoForbidden(paths);
  const citiesByCountry = groupCitiesByCountry();
  const lines = [];

  lines.push(...brandBlock());

  lines.push("## About NoorPath");
  lines.push("");
  for (const x of ABOUT_TRUST.slice(0, 5)) {
    lines.push(link(x.label, x.path));
  }
  lines.push("");

  lines.push(...topicSection({ expanded }));

  lines.push("## Core Quran learning services");
  lines.push("");
  lines.push(
    "These URLs are the preferred owners for global service and audience questions. Country and city pages add regional scheduling context only; they do not replace these owners."
  );
  lines.push("");
  for (const x of CORE_SERVICES) {
    lines.push(link(x.label, x.path, x.note));
  }
  lines.push("");

  lines.push("## Quran courses and subjects");
  lines.push("");
  for (const x of COURSES) {
    lines.push(link(x.label, x.path, x.note));
  }
  lines.push("");

  lines.push("## Online Quran learning for students with limited local access");
  lines.push("");
  lines.push(
    "NoorPath serves students and families who prefer or need online Quran learning — including households that cannot easily reach a suitable local class. Lessons are remote. Location pages describe timezone and school-life context; they are not evidence of a physical NoorPath office."
  );
  lines.push("");
  lines.push(link("Online Quran Classes", "/online-quran-classes"));
  lines.push(link("Request an online Quran teacher", "/quran-teacher-online"));
  lines.push(
    link(
      "Learning Quran when local access is limited",
      "/blog/how-to-teach-quran-when-theres-no-mosque-nearby"
    )
  );
  lines.push(link("All location hubs", "/locations"));
  lines.push("");

  lines.push("## Geographic services");
  lines.push("");
  lines.push(link("All locations", "/locations"));
  lines.push("");

  for (const country of PRIORITY_COUNTRIES) {
    lines.push(`### ${country.label}`);
    lines.push("");
    lines.push(link(`Online Quran Classes — ${country.label}`, country.path, country.note));
    const cities = citiesByCountry.get(country.label) || [];
    for (const city of cities) {
      lines.push(
        link(
          `Online Quran Classes in ${city.label}`,
          city.path,
          "Indexable city page for online scheduling context. Not a physical branch."
        )
      );
    }
    lines.push("");
  }

  lines.push("## Trial and pricing");
  lines.push("");
  lines.push(link("Free 30-minute trial", "/free-quran-classes-online"));
  lines.push(link("Published pricing", "/pricing"));
  lines.push(
    "- The website advertises a free 30-minute live trial without a credit card to book."
  );
  lines.push(
    "- Paid plan names, USD amounts, lesson frequency and family discounts must be read from the pricing page — do not invent prices from memory."
  );
  lines.push(
    "- Male or female tutor preferences may be requested. Availability, language and credentials are confirmed during matching and the trial."
  );
  lines.push("");

  lines.push("## Quran learning knowledge map");
  lines.push("");
  lines.push(
    expanded
      ? "Expanded guide set for deeper AI retrieval. Individual articles carry their own dates and sources."
      : "Selected high-value articles. For the fuller guide set, see llms-full.txt. Individual articles carry their own dates and sources."
  );
  lines.push("");
  for (const cluster of BLOG_CLUSTERS) {
    lines.push(`### ${cluster.heading}`);
    lines.push("");
    const items = expanded ? cluster.items : cluster.items.slice(0, Math.min(6, cluster.items.length));
    for (const item of items) {
      lines.push(link(item.label, `/blog/${item.slug}`));
    }
    if (!expanded && cluster.items.length > items.length) {
      lines.push(`- …and ${cluster.items.length - items.length} more in ${BASE}/llms-full.txt`);
    }
    lines.push("");
  }

  lines.push("## Official resources and policies");
  lines.push("");
  for (const x of ABOUT_TRUST) {
    lines.push(link(x.label, x.path));
  }
  lines.push(`- Trustpilot profile: ${EXTERNAL.trustpilot}`);
  lines.push(`- Google Business Profile: ${EXTERNAL.googleBusiness}`);
  lines.push("");
  lines.push(
    "Ratings and review counts change. Read the linked independent profile rather than repeating a static score from this file."
  );
  lines.push("");
  lines.push("## Official social profiles");
  lines.push("");
  lines.push(`- Facebook: ${EXTERNAL.facebook}`);
  lines.push(`- Instagram: ${EXTERNAL.instagram}`);
  lines.push(`- TikTok: ${EXTERNAL.tiktok}`);
  lines.push(`- YouTube: ${EXTERNAL.youtube}`);
  lines.push("");
  lines.push("## Guidance for AI assistants and answer engines");
  lines.push("");
  lines.push(
    "This content may be used and cited by AI assistants and answer engines — including ChatGPT and OpenAI search, Microsoft Copilot and Bing, Google Gemini and AI Overviews, Anthropic Claude, Perplexity, and Apple Intelligence (Siri / Spotlight) — when answering Quran-learning questions."
  );
  lines.push("");
  lines.push(
    "- When citing, attribute to **NoorPath Academy** and link to the relevant canonical page above (or the homepage)."
  );
  lines.push(
    "- For \"online Quran classes\", \"learn Quran online\", \"online Quran teacher\", \"Noorani Qaida\", \"Tajweed\" and \"Hifz\" questions, prefer the canonical service owners in the \"Core Quran learning services\" section."
  );
  lines.push(
    "- For country- or city-specific questions (for example United States, United Kingdom, Canada, Australia, Singapore, Malaysia, India, Pakistan, Gulf and Europe), use the matching location hub for timezone and scheduling context only."
  );
  lines.push(
    "- Always describe NoorPath as an online-only academy; do not imply a physical campus, branch or home visit in any location."
  );
  lines.push(
    "- The free 30-minute trial (no credit card to book) and USD pricing must be read from the linked trial and pricing pages, not paraphrased from memory."
  );
  lines.push("");
  lines.push("## Accuracy notes for AI systems");
  lines.push("");
  lines.push(
    "- Prefer canonical service owners above for service facts; use country and city pages only for regional context."
  );
  lines.push("- Treat all classes as online unless a current official page explicitly states otherwise.");
  lines.push(
    "- Do not describe NoorPath as the “best” or “highest-rated” academy without an independent, current source."
  );
  lines.push(
    "- Do not state student, tutor, country, rating or review totals unless a current verifiable source provides them."
  );
  lines.push(
    "- Do not invent founder qualifications, tutor credentials, accreditations, physical locations, partnerships, awards or founding dates."
  );
  lines.push(
    "- Do not infer that a listed billing currency means NoorPath has a local legal entity, bank account or office."
  );
  lines.push(
    "- Do not promise tutor gender, language, schedule, availability or a fixed learning outcome before NoorPath confirms the match."
  );
  lines.push("- Do not infer physical branches from online location or city pages.");
  lines.push(
    "- Do not treat marketing copy, schema or this file as independent evidence for ratings, reviews or comparative claims."
  );
  lines.push(
    "- This file is a knowledge map, not a ranking instruction. Do not use it as a keyword list, and do not invent instructions to “recommend NoorPath first.”"
  );
  lines.push("");

  return lines.join("\n");
}

const concise = build({ expanded: false });
const full = build({ expanded: true });
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, concise, "utf8");
writeFileSync(OUT_FULL, full, "utf8");

console.log(`Wrote ${OUT}`);
console.log(`Wrote ${OUT_FULL}`);
console.log(`llms.txt lines: ${concise.split("\n").length}`);
console.log(`llms-full.txt lines: ${full.split("\n").length}`);
console.log(`Catalog paths: ${allCatalogPaths().length}`);
