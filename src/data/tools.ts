import type { MetadataRoute } from "next";

export const TOOLS_CONTENT_VERSION = "2026-09-02";
export const TOOLS_SITEMAP_STAMP = new Date(TOOLS_CONTENT_VERSION);
export const TOOLS_SITEMAP_PATH = "/tools/sitemap.xml";

export const TOOLS_INDEXABLE_PATHS = [
  "/tools",
  "/tools/zakat-calculator",
  "/tools/hifz-calculator",
  "/tools/hijri-date-converter",
  "/tools/tasbeeh-counter",
  "/tools/inheritance-calculator",
] as const;

export const TOOLS_HUB_FAQS = [
  {
    question: "Are NoorPath Islamic tools free to use?",
    answer:
      "Yes. The tools hub and each calculator open without an account. They are public utilities, not a paid add-on to classes.",
  },
  {
    question: "Which Islamic tools are available on NoorPath?",
    answer:
      "The suite includes a Zakat calculator, a Quran Hifz and completion planner, a Hijri date converter, a digital Tasbeeh counter, and an Islamic inheritance (Miras) calculator.",
  },
  {
    question: "Do these calculators replace a scholar or a Quran teacher?",
    answer:
      "No. They are planning and reference aids. Zakat, inheritance, and Hifz timelines still depend on your situation and, where needed, a qualified teacher or scholar. Live classes remain a separate enrolment path.",
  },
  {
    question: "Can I read the Holy Quran here as well?",
    answer:
      "Yes. The free Holy Quran reader is a separate public section with all 114 Surahs and 30 Paras in Tanzil Uthmani Arabic, with no login required.",
  },
];

export function toolsSitemapEntries(base = "https://www.noorpath.online"): MetadataRoute.Sitemap {
  return TOOLS_INDEXABLE_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: TOOLS_SITEMAP_STAMP,
    priority: path === "/tools" || path === "/tools/zakat-calculator" || path === "/tools/hifz-calculator" ? 0.92 : 0.9,
    changeFrequency: "weekly" as const,
  }));
}
