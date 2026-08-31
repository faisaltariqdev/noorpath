import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";
import { cities, isCityIndexable } from "@/data/cities";
import { backlinkAssets } from "@/data/backlinkAssets";
import {
  QAIDA_BASE_PATH,
  QAIDA_CONTENT_VERSION,
  QAIDA_INDEXABLE_PATHS,
} from "@/data/noorani-qaida";

const BASE = "https://www.noorpath.online";

/** Stable stamp for rarely changed commercial/legal pages (do not set to “build now”). */
const CONTENT_UPDATE = new Date("2026-05-01");
/** Honest stamp for brand-entity pages updated in the brand visibility pass. */
const BRAND_ENTITY_UPDATE = new Date("2026-08-20");
/**
 * Honest content stamp for pages last materially updated in the enterprise overhaul.
 */
const SITE_CONTENT_STAMP = new Date("2026-08-20");


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
  "attahiyat-full-arabic-english-tashahhud",
  "safar-ki-dua-travel-dua-arabic-english",
  "inna-lillahi-wa-inna-ilayhi-rajiun-meaning",
  "dua-before-and-after-eating",
  "islamic-months-names-in-order",
  "dua-for-rizq-arabic-english",
  "benefits-of-reading-quran-daily",
  "dua-for-children-arabic-english",
  "dua-for-sick-person-arabic-english",
  "what-breaks-wudu",
  "how-to-do-tayammum-step-by-step",
  "barakallah-meaning",
  "what-is-wazifa-in-islam",
  "adhkar-after-salah-arabic-english",
  "hasbunallahu-wa-nimal-wakeel-meaning",
  "la-hawla-wa-la-quwwata-illallah-meaning",
  "dua-for-hajat-arabic-english",
  "istikhara-for-marriage-step-by-step",
  "sayyidul-istighfar-arabic-english",
  "manzil-dua-protection-ruqyah",
  "ayat-al-shifa-quranic-verses-of-healing",
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
  "what-is-ijazah-in-quran-teaching",
  "is-online-quran-learning-as-effective-as-in-person",
  "difference-between-hifz-and-tajweed-classes",
  "finish-quran-in-ramadan-30-day-plan",
  "how-long-does-noorani-qaida-take",
  "parents-dont-speak-arabic-child-learn-quran",
  "child-wont-sit-for-quran-class",
  "quran-practice-routine-at-home-kids",
  "hard-arabic-letters-for-kids-makharij",
  "online-quran-classes-for-shy-kids",
  "how-to-memorize-juz-amma",
  "questions-to-ask-before-booking-a-quran-tutor",
  "live-online-quran-tutor-vs-prerecorded-courses",
  "online-quran-class-checklist-for-parents",
  "how-many-quran-classes-per-week",
  // "No local masjid / Muslim-minority area" cluster, supporting the pillar at
  // /online-quran-classes-no-masjid-nearby. These convert like commercial guides
  // rather than general reading, which is why the audit kept flagging them.
  "how-to-teach-quran-when-theres-no-mosque-nearby",
  "raising-muslim-child-in-non-muslim-country",
  "online-quran-classes-for-muslim-families-abroad",
  "online-quran-classes-for-homeschool-families",
  "quran-classes-for-expat-families",
  "weekend-quran-classes-for-nordic-families",
  "trustworthy-online-quran-teacher-live-abroad",
  "noorpath-academy-vision-online-quran-education",
  "how-long-should-online-quran-lessons-be",
  "what-should-my-child-learn-first-in-quran",
  "sibling-online-quran-classes-scheduling",
  "when-to-change-your-online-quran-tutor",
  "online-quran-classes-for-teenagers",
  "keeping-quran-classes-during-exams-and-holidays",
  "after-school-quran-classes-for-gulf-families",
  "how-to-start-hifz-for-kids",
  "online-tajweed-classes-for-kids",
  "child-forgets-quran-between-classes",
  "quran-homework-kids-wont-practice",
  "how-to-know-if-online-quran-tutor-is-good",
  "adult-embarrassed-to-learn-quran-beginner",
  "online-quran-trial-what-to-expect",
  "how-long-until-child-reads-quran",
  "online-quran-classes-canada-for-kids",
  "quran-classes-for-adults-in-singapore",
  "online-quran-classes-new-zealand-for-kids",
  "after-school-quran-classes-australia-for-kids",
  "female-quran-teacher-online-canada",
]);
const BACKLINK_ASSET_SLUGS = new Set(
  backlinkAssets.map((asset) => asset.slug)
);

/** Root-level keyword landing pages (commercial URL variants) */
const KEYWORD_LANDING_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE}/learn-quran-online`,     priority: 0.97, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
  { url: `${BASE}/learn-tajweed-online`,    priority: 0.94, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
  { url: `${BASE}/hifz-quran-online`,       priority: 0.94, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
  { url: `${BASE}/online-quran-academy`,    priority: 0.93, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
  { url: `${BASE}/quran-lesson-online`,     priority: 0.92, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
  { url: `${BASE}/studying-quran-online`,   priority: 0.92, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
  { url: `${BASE}/online-quran-classes-no-masjid-nearby`, priority: 0.9, changeFrequency: "weekly", lastModified: SITE_CONTENT_STAMP },
];

const REDIRECTED_COURSE_SLUGS = new Set([
  "quran-classes-for-kids",
  "tajweed-classes-online",
  "hifz-program-online",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // ── Tier 1: highest priority commercial pages ───────────────────────────────
    { url: BASE,                                               priority: 1.0,  changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/online-quran-classes`,                    priority: 0.95, changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/online-quran-classes-for-kids`,          priority: 0.96, changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    // ── Tier 2: main conversion + high-traffic pages ────────────────────────────
    { url: `${BASE}/courses`,                                  priority: 0.9,  changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/quran-teacher-online`,                     priority: 0.9,  changeFrequency: "monthly", lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/free-quran-classes-online`,                priority: 0.9,  changeFrequency: "monthly", lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/online-quran-for-beginners`,               priority: 0.9,  changeFrequency: "monthly", lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/blog`,                                     priority: 0.85, changeFrequency: "daily",   lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/pricing`,                                  priority: 0.85, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    // ── Tier 3: supporting pages ────────────────────────────────────────────────
    { url: `${BASE}/female-quran-teacher-online`,              priority: 0.9,  changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/one-on-one-quran-classes`,                 priority: 0.94, changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/quran-classes-for-sisters`,                priority: 0.93, changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/quran-classes-for-working-professionals`,  priority: 0.93, changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/online-quran-classes-for-adults`,          priority: 0.9,  changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/locations`,                                priority: 0.8,  changeFrequency: "monthly", lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/about`,                                    priority: 0.9,  changeFrequency: "monthly", lastModified: BRAND_ENTITY_UPDATE },
    { url: `${BASE}/contact`,                                  priority: 0.85, changeFrequency: "yearly",  lastModified: BRAND_ENTITY_UPDATE },
    { url: `${BASE}/founder`,                                  priority: 0.85, changeFrequency: "monthly", lastModified: BRAND_ENTITY_UPDATE },
    { url: `${BASE}/our-tutors`,                               priority: 0.88, changeFrequency: "monthly", lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/islamic-resources`,                        priority: 0.87, changeFrequency: "weekly",  lastModified: SITE_CONTENT_STAMP },
    { url: `${BASE}/safeguarding`,                             priority: 0.65, changeFrequency: "monthly", lastModified: CONTENT_UPDATE },
    { url: `${BASE}/editorial-policy`,                         priority: 0.5,  changeFrequency: "yearly",  lastModified: CONTENT_UPDATE },
    { url: `${BASE}/accessibility-statement`,                  priority: 0.5,  changeFrequency: "yearly",  lastModified: CONTENT_UPDATE },
    { url: `${BASE}/privacy-policy`,                           priority: 0.4,  changeFrequency: "yearly",  lastModified: CONTENT_UPDATE },
    { url: `${BASE}/terms-of-service`,                         priority: 0.4,  changeFrequency: "yearly",  lastModified: CONTENT_UPDATE },
  ];

  // Auto-generate from shared data (courses + country locations + cities + blogs)
  const coursePages: MetadataRoute.Sitemap = courses
    .filter((c) => !REDIRECTED_COURSE_SLUGS.has(c.slug))
    .map((c) => ({
    url: `${BASE}/courses/${c.slug}`,
    lastModified: CONTENT_UPDATE,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE}/locations/${l.slug}`,
    lastModified: SITE_CONTENT_STAMP,
    priority: 0.88,
    changeFrequency: "weekly" as const,
  }));

  const cityPages: MetadataRoute.Sitemap = cities
    .filter((c) => isCityIndexable(c.slug))
    .map((c) => ({
    url: `${BASE}/online-quran-classes/${c.slug}`,
    lastModified: SITE_CONTENT_STAMP,
    priority: 0.86,
    changeFrequency: "weekly" as const,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => {
    const raw = p.updatedAt ?? p.date;
    const lastModified = Number.isFinite(Date.parse(raw)) ? new Date(raw) : SITE_CONTENT_STAMP;
    const isCommercial = COMMERCIAL_BLOG_SLUGS.has(p.slug);
    const isHighTraffic = HIGH_TRAFFIC_BLOG_SLUGS.has(p.slug);
    const isBacklinkAsset = BACKLINK_ASSET_SLUGS.has(p.slug);
    return {
      url: `${BASE}/blog/${p.slug}`,
      lastModified,
      priority: isCommercial ? 0.88 : isBacklinkAsset ? 0.86 : isHighTraffic ? 0.84 : 0.75,
      changeFrequency: (isCommercial || isBacklinkAsset || isHighTraffic) ? ("weekly" as const) : ("monthly" as const),
    };
  });

  const qaidaPages: MetadataRoute.Sitemap = QAIDA_INDEXABLE_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(QAIDA_CONTENT_VERSION),
    priority: path === QAIDA_BASE_PATH ? 0.92 : path.includes("/arabic-letters/") ? 0.78 : 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...KEYWORD_LANDING_PAGES, ...coursePages, ...locationPages, ...cityPages, ...blogPages, ...qaidaPages];
}
