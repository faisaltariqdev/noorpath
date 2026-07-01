import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";

const BASE = "https://www.noorpath.online";

const LAUNCH = new Date("2024-01-15");
const CONTENT_UPDATE = new Date("2026-05-01");
const RECENT = new Date("2026-06-01");
const NOW = new Date("2026-07-01");

/** Root-level keyword landing pages (Qutor-style commercial URLs) */
const KEYWORD_LANDING_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE}/learn-quran-online`,          priority: 0.97, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/online-quran-academy`,         priority: 0.97, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/learn-tajweed-online`,         priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/hifz-quran-online`,           priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/quran-lesson-online`,         priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/studying-quran-online`,       priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
];

/** Commercial blogs that drive student enrollment */
const COMMERCIAL_BLOG_SLUGS = new Set([
  "online-quran-classes-for-kids-parent-guide",
  "learn-quran-online-adult-beginner-guide",
  "best-online-quran-academy-guide",
  "benefits-of-online-quran-classes",
  "how-to-teach-quran-to-kids",
  "best-age-to-start-quran-learning",
  "how-long-to-memorize-quran",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // ── Tier 1: highest priority commercial pages ───────────────────────────────
    { url: BASE,                                               priority: 1.0,  changeFrequency: "weekly",  lastModified: NOW },
    { url: `${BASE}/online-quran-classes`,                    priority: 0.95, changeFrequency: "weekly",  lastModified: NOW },
    { url: `${BASE}/online-quran-classes-for-kids`,          priority: 0.96, changeFrequency: "weekly",  lastModified: NOW },
    // ── Tier 2: main conversion + high-traffic pages ────────────────────────────
    { url: `${BASE}/courses`,                                  priority: 0.9,  changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/quran-teacher-online`,                     priority: 0.9,  changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/free-quran-classes-online`,                priority: 0.9,  changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/online-quran-for-beginners`,               priority: 0.9,  changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/blog`,                                     priority: 0.85, changeFrequency: "daily",   lastModified: NOW },
    { url: `${BASE}/pricing`,                                  priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    // ── Tier 3: supporting pages ────────────────────────────────────────────────
    { url: `${BASE}/female-quran-teacher-online`,              priority: 0.9,  changeFrequency: "weekly",  lastModified: NOW },
    { url: `${BASE}/online-quran-classes-for-adults`,          priority: 0.9,  changeFrequency: "weekly",  lastModified: NOW },
    { url: `${BASE}/locations`,                                priority: 0.8,  changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/about`,                                    priority: 0.75, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/founder`,                                  priority: 0.7,  changeFrequency: "monthly", lastModified: LAUNCH },
    { url: `${BASE}/our-tutors`,                               priority: 0.88, changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/islamic-resources`,                        priority: 0.87, changeFrequency: "weekly",  lastModified: NOW },
    // ── Legal ───────────────────────────────────────────────────────────────────
    { url: `${BASE}/privacy-policy`,                           priority: 0.3,  changeFrequency: "yearly",  lastModified: LAUNCH },
    { url: `${BASE}/terms-of-service`,                         priority: 0.3,  changeFrequency: "yearly",  lastModified: LAUNCH },
  ];

  // Auto-generate from shared data (all 7 courses + all 12 locations)
  const coursePages: MetadataRoute.Sitemap = courses.map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: CONTENT_UPDATE,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE}/locations/${l.slug}`,
    lastModified: NOW,
    priority: 0.88,
    changeFrequency: "weekly" as const,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.date),
    priority: COMMERCIAL_BLOG_SLUGS.has(p.slug) ? 0.88 : 0.75,
    changeFrequency: COMMERCIAL_BLOG_SLUGS.has(p.slug) ? ("weekly" as const) : ("monthly" as const),
  }));

  return [...staticPages, ...KEYWORD_LANDING_PAGES, ...coursePages, ...locationPages, ...blogPages];
}
