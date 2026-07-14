import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";
import { cities } from "@/data/cities";

const BASE = "https://www.noorpath.online";

const LAUNCH = new Date("2024-01-15");
const CONTENT_UPDATE = new Date("2026-05-01");
const RECENT = new Date("2026-06-01");
const NOW = new Date("2026-07-13");

/** High-traffic Islamic reference blogs — priority indexing for organic search */
const HIGH_TRAFFIC_BLOG_SLUGS = new Set([
  "dua-for-success-exams",
  "dua-for-marriage",
  "rabbana-atina-fid-dunya",
  "dua-for-forgiveness-istighfar",
  "how-to-do-ghusl-step-by-step",
  "labbaik-allahumma-labbaik",
  "dua-entering-leaving-home",
  "how-to-pray-witr",
  "allahu-akbar-meaning-in-english",
  "la-ilaha-illallah-meaning",
  "dua-before-sleeping-islam",
  "evil-eye-dua-nazar-ruqyah",
  "morning-evening-adhkar-dhikr",
  "last-two-ayahs-surah-baqarah",
  "dua-for-parents-rabbirhamhuma",
  "surah-ikhlas-benefits",
  "ayatul-kursi-arabic-english-benefits",
  "alhamdulillah-meaning-in-english",
  "subhanallah-meaning",
  "mashallah-meaning",
  "inshallah-meaning-in-english",
  "bismillah-meaning-in-english",
  "surah-yaseen-arabic-english",
  "surah-mulk-benefits",
  "dua-e-istikhara",
  "4-quls",
]);

/** Commercial blogs that drive student enrollment */
const COMMERCIAL_BLOG_SLUGS = new Set([
  "female-quran-teacher-for-kids",
  "online-hifz-classes-for-kids",
  "online-quran-classes-for-kids-parent-guide",
  "learn-quran-online-adult-beginner-guide",
  "best-online-quran-academy-guide",
  "benefits-of-online-quran-classes",
  "how-to-teach-quran-to-kids",
  "best-age-to-start-quran-learning",
  "how-long-to-memorize-quran",
  "online-quran-classes-uk-kids-guide",
  "online-quran-classes-cost-pricing-guide",
  "learn-quran-as-an-adult-never-too-late",
  "new-muslim-guide-to-reading-quran",
  "online-quran-classes-usa-kids-guide",
  "how-to-choose-online-quran-teacher",
  "finish-quran-in-ramadan-30-day-plan",
]);

/** Root-level keyword landing pages (Qutor-style commercial URLs) */
const KEYWORD_LANDING_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE}/learn-quran-online`,          priority: 0.97, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/online-quran-academy`,         priority: 0.97, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/learn-tajweed-online`,         priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/hifz-quran-online`,           priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/quran-lesson-online`,         priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
  { url: `${BASE}/studying-quran-online`,       priority: 0.94, changeFrequency: "weekly", lastModified: NOW },
];

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
    // privacy-policy + terms-of-service intentionally omitted (robots noindex)
  ];

  // Auto-generate from shared data (courses + country locations + cities + blogs)
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

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/online-quran-classes/${c.slug}`,
    lastModified: NOW,
    priority: 0.86,
    changeFrequency: "weekly" as const,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => {
    const raw = p.updatedAt ?? p.date;
    const lastModified = Number.isFinite(Date.parse(raw)) ? new Date(raw) : NOW;
    const isCommercial = COMMERCIAL_BLOG_SLUGS.has(p.slug);
    const isHighTraffic = HIGH_TRAFFIC_BLOG_SLUGS.has(p.slug);
    return {
      url: `${BASE}/blog/${p.slug}`,
      lastModified,
      priority: isCommercial ? 0.88 : isHighTraffic ? 0.84 : 0.75,
      changeFrequency: (isCommercial || isHighTraffic) ? ("weekly" as const) : ("monthly" as const),
    };
  });

  return [...staticPages, ...KEYWORD_LANDING_PAGES, ...coursePages, ...locationPages, ...cityPages, ...blogPages];
}
