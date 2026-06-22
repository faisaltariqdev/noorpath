import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE = "https://www.noorpath.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/online-quran-classes`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${BASE}/courses`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE}/blog`, priority: 0.85, changeFrequency: "daily" as const },
    { url: `${BASE}/pricing`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${BASE}/founder`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/female-quran-teacher-online`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/online-quran-classes-for-adults`, priority: 0.8, changeFrequency: "monthly" as const },
    // Courses
    { url: `${BASE}/courses/noorani-qaida-online`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/courses/tajweed-classes-online`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/courses/hifz-program-online`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/courses/quran-classes-for-kids`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/courses/arabic-language-online`, priority: 0.82, changeFrequency: "monthly" as const },
    { url: `${BASE}/courses/islamic-studies-online`, priority: 0.82, changeFrequency: "monthly" as const },
    { url: `${BASE}/courses/daily-duas-for-kids`, priority: 0.82, changeFrequency: "monthly" as const },
    // Locations
    { url: `${BASE}/locations/online-quran-classes-usa`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/online-quran-classes-uk`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/online-quran-classes-canada`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/online-quran-classes-australia`, priority: 0.82, changeFrequency: "monthly" as const },
    { url: `${BASE}/locations/online-quran-classes-uae`, priority: 0.82, changeFrequency: "monthly" as const },
    // Legal
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms-of-service`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogPages = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: new Date() })),
    ...blogPages,
  ];
}
