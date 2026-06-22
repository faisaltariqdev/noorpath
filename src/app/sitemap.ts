import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE = "https://www.noorpath.online";

// Use real dates so Googlebot doesn't think every page changed on every deploy
const LAUNCH = new Date("2024-01-15");
const CONTENT_UPDATE = new Date("2025-06-01");
const RECENT = new Date("2026-01-10");
const NOW = new Date("2026-06-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // ── Tier 1: highest priority commercial pages ───────────────────────────────
    { url: BASE,                                             priority: 1.0,  changeFrequency: "weekly",  lastModified: NOW },
    { url: `${BASE}/online-quran-classes`,                  priority: 0.95, changeFrequency: "weekly",  lastModified: RECENT },
    // ── Tier 2: main conversion pages ──────────────────────────────────────────
    { url: `${BASE}/courses`,                               priority: 0.9,  changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/blog`,                                  priority: 0.85, changeFrequency: "daily",   lastModified: NOW },
    { url: `${BASE}/pricing`,                               priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    // ── Tier 3: supporting pages ────────────────────────────────────────────────
    { url: `${BASE}/female-quran-teacher-online`,           priority: 0.85, changeFrequency: "monthly", lastModified: RECENT },
    { url: `${BASE}/online-quran-classes-for-adults`,       priority: 0.85, changeFrequency: "monthly", lastModified: RECENT },
    { url: `${BASE}/locations`,                             priority: 0.8,  changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/about`,                                 priority: 0.75, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/founder`,                               priority: 0.7,  changeFrequency: "monthly", lastModified: LAUNCH },
    // ── Courses ─────────────────────────────────────────────────────────────────
    { url: `${BASE}/courses/noorani-qaida-online`,          priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/courses/tajweed-classes-online`,        priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/courses/hifz-program-online`,           priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/courses/quran-classes-for-kids`,        priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/courses/arabic-language-online`,        priority: 0.82, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/courses/islamic-studies-online`,        priority: 0.82, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/courses/daily-duas-for-kids`,           priority: 0.82, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    // ── Locations ───────────────────────────────────────────────────────────────
    { url: `${BASE}/locations/online-quran-classes-usa`,       priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/locations/online-quran-classes-uk`,        priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/locations/online-quran-classes-canada`,    priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/locations/online-quran-classes-australia`, priority: 0.82, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/locations/online-quran-classes-uae`,       priority: 0.82, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    // ── Legal (noindex but still in sitemap for reference) ──────────────────────
    { url: `${BASE}/privacy-policy`,                        priority: 0.3, changeFrequency: "yearly", lastModified: LAUNCH },
    { url: `${BASE}/terms-of-service`,                      priority: 0.3, changeFrequency: "yearly", lastModified: LAUNCH },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.75,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...blogPages];
}
