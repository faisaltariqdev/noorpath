import type { MetadataRoute } from "next";
import { paraEndLabel, paraStartLabel } from "./paras";
import {
  HIGH_TRAFFIC_SURAH_NUMBERS,
  HOLY_QURAN_BASE_PATH,
  HOLY_QURAN_BASE_URL,
  HOLY_QURAN_CONTENT_VERSION,
  HOLY_QURAN_INDEXABLE_PATHS,
  revelationLabel,
  toSurahSlug,
} from "./slugs";
import { SURAHS, type Surah } from "./surahs";
import type { ParaMeta } from "./types";

export const HOLY_QURAN_SITEMAP_STAMP = new Date(HOLY_QURAN_CONTENT_VERSION);
export const HOLY_QURAN_SITEMAP_PATH = `${HOLY_QURAN_BASE_PATH}/sitemap.xml`;

export interface HolyQuranFaq {
  question: string;
  answer: string;
}

const SITE = "https://www.noorpath.online";

const QURAN_BOOK = {
  "@type": "Book" as const,
  "@id": `${HOLY_QURAN_BASE_URL}#quran`,
  name: "The Holy Quran",
  inLanguage: "ar",
  bookFormat: "EBook",
  isAccessibleForFree: true,
  copyrightNotice:
    "Arabic text is Tanzil Uthmani (الرسم العثماني) via Al Quran Cloud quran-uthmani. NoorPath does not author or edit the verses.",
};

export function surahDisplayName(surah: Surah): string {
  return surah.number === 36 ? "Yaseen (Ya-Sin)" : surah.name;
}

export function surahFaqs(surah: Surah, juzs: number[]): HolyQuranFaq[] {
  const name = surahDisplayName(surah);
  const paraLabel = `Para${juzs.length > 1 ? "s" : ""} ${juzs.join("–")}`;
  return [
    {
      question: `Can I read Surah ${name} on NoorPath without an account?`,
      answer: `Yes. Surah ${surah.name} is a free public page. You can read the verified Uthmani Arabic without signing in.`,
    },
    {
      question: `How many ayahs are in Surah ${surah.name}?`,
      answer: `Surah ${surah.name} is Quran chapter ${surah.number}. It has ${surah.verses} ayahs, is ${revelationLabel(surah.type)}, and appears in ${paraLabel}.`,
    },
    {
      question: "Which Arabic text is used on this page?",
      answer:
        "This page uses Tanzil Uthmani Arabic from the Al Quran Cloud quran-uthmani edition. Counts match the imported dataset. NoorPath does not type or rewrite the verses.",
    },
    {
      question: "Does this reader replace a Quran teacher?",
      answer:
        "No. This is a public reading text. Live one-to-one classes for Tajweed, Hifz, and beginner reading remain a separate enrolment path.",
    },
  ];
}

export function paraFaqs(para: ParaMeta): HolyQuranFaq[] {
  const amma = para.number === 30 ? " (Juz Amma)" : "";
  return [
    {
      question: `Can I read Para ${para.number}${amma} without an account?`,
      answer: `Yes. Para ${para.number} (${para.name}${amma}) is free to open worldwide. No login is required.`,
    },
    {
      question: `What range does Para ${para.number} cover?`,
      answer: `Para ${para.number} runs from ${paraStartLabel(para)} to ${paraEndLabel(para)} — ${para.ayahCount} ayahs in Tanzil Uthmani Arabic.`,
    },
    {
      question: "Which Arabic text is used on this page?",
      answer:
        "This page uses Tanzil Uthmani Arabic from the Al Quran Cloud quran-uthmani edition. NoorPath does not type or rewrite the verses.",
    },
    {
      question: "Does this reader replace a Quran teacher?",
      answer:
        "No. This is a public reading text. Live one-to-one classes for Tajweed, Hifz, and beginner reading remain a separate enrolment path.",
    },
  ];
}

export function faqJsonLd(faqs: HolyQuranFaq[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
    })),
  };
}

export function quranBookJsonLd() {
  return QURAN_BOOK;
}

export function holyQuranSitemapEntries(base = SITE): MetadataRoute.Sitemap {
  const highTrafficSlugs = new Set(
    SURAHS.filter((surah) => HIGH_TRAFFIC_SURAH_NUMBERS.has(surah.number)).map((surah) => toSurahSlug(surah.name)),
  );

  return HOLY_QURAN_INDEXABLE_PATHS.map((path) => {
    const isHub = path === HOLY_QURAN_BASE_PATH;
    const isYaseen = path.endsWith("/surah/ya-sin");
    const isAmma = path.endsWith("/para/30");
    const isPara1 = path.endsWith("/para/1");
    const surahSlug = path.split("/surah/")[1];
    const isHighTrafficSurah = Boolean(surahSlug && highTrafficSlugs.has(surahSlug));
    return {
      url: `${base}${path}`,
      lastModified: HOLY_QURAN_SITEMAP_STAMP,
      priority: isHub ? 0.95 : isYaseen ? 0.93 : isAmma || isPara1 || isHighTrafficSurah ? 0.88 : 0.8,
      changeFrequency: "monthly" as const,
    };
  });
}

export function holyQuranBreadcrumbs(items: Array<{ name: string; item?: string }>) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  };
}
