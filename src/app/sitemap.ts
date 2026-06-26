import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";

const BASE = "https://www.noorpath.online";

const LAUNCH = new Date("2024-01-15");
const CONTENT_UPDATE = new Date("2025-06-01");
const RECENT = new Date("2026-01-10");
const NOW = new Date("2026-06-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // ── Tier 1: highest priority commercial pages ───────────────────────────────
    { url: BASE,                                               priority: 1.0,  changeFrequency: "weekly",  lastModified: NOW },
    { url: `${BASE}/online-quran-classes`,                    priority: 0.95, changeFrequency: "weekly",  lastModified: RECENT },
    // ── Tier 2: main conversion + high-traffic pages ────────────────────────────
    { url: `${BASE}/courses`,                                  priority: 0.9,  changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/quran-teacher-online`,                     priority: 0.9,  changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/free-quran-classes-online`,                priority: 0.9,  changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/online-quran-for-beginners`,               priority: 0.9,  changeFrequency: "monthly", lastModified: NOW },
    { url: `${BASE}/blog`,                                     priority: 0.85, changeFrequency: "daily",   lastModified: NOW },
    { url: `${BASE}/pricing`,                                  priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    // ── Tier 3: supporting pages ────────────────────────────────────────────────
    { url: `${BASE}/female-quran-teacher-online`,              priority: 0.85, changeFrequency: "monthly", lastModified: RECENT },
    { url: `${BASE}/online-quran-classes-for-adults`,          priority: 0.85, changeFrequency: "monthly", lastModified: RECENT },
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
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...coursePages, ...locationPages, ...blogPages];
}
