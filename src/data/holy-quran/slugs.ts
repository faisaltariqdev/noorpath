import { SURAHS, type Surah } from "./surahs";
import { PARAS } from "./paras";
import { PARA_ALIASES, SURAH_ALIASES } from "./aliases";

export const HOLY_QURAN_BASE_PATH = "/holy-quran";
export const HOLY_QURAN_BASE_URL = "https://www.noorpath.online/holy-quran";
export const HOLY_QURAN_CONTENT_VERSION = "2026-09-06";

/** High-intent public reader pages (people search these names most often). */
export const HIGH_TRAFFIC_SURAH_NUMBERS = new Set([1, 2, 18, 36, 55, 56, 67, 112, 113, 114]);

export function toSurahSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function surahBySlug(slug: string): Surah | undefined {
  const folded = toSurahSlug(slug);
  return SURAHS.find((surah) => toSurahSlug(surah.name) === folded);
}

export function surahPath(number: number): string {
  const surah = SURAHS.find((item) => item.number === number);
  return surah ? `${HOLY_QURAN_BASE_PATH}/surah/${toSurahSlug(surah.name)}` : HOLY_QURAN_BASE_PATH;
}

export function paraPath(number: number): string {
  return `${HOLY_QURAN_BASE_PATH}/para/${number}`;
}

export function revelationLabel(type: Surah["type"]): "Makki" | "Madani" {
  return type === "Meccan" ? "Makki" : "Madani";
}

export const HOLY_QURAN_INDEXABLE_PATHS: string[] = [
  HOLY_QURAN_BASE_PATH,
  ...SURAHS.map((surah) => surahPath(surah.number)),
  ...PARAS.map((para) => paraPath(para.number)),
];

function aliasSlug(alias: string): string {
  return toSurahSlug(alias);
}

/** Alias and shorthand paths → one canonical owner (no thin duplicate pages). */
export function holyQuranRedirects(): Record<string, string> {
  const map: Record<string, string> = {
    "/quran": HOLY_QURAN_BASE_PATH,
    "/holy-quran/read": HOLY_QURAN_BASE_PATH,
    "/quran/read": HOLY_QURAN_BASE_PATH,
    "/quran/para": HOLY_QURAN_BASE_PATH,
    "/quran/surah": HOLY_QURAN_BASE_PATH,
  };

  for (const surah of SURAHS) {
    const canonical = surahPath(surah.number);
    const extras = [
      String(surah.number),
      `surah-${surah.number}`,
      ...(SURAH_ALIASES[surah.number] || []),
    ];
    for (const extra of extras) {
      const slug = aliasSlug(extra);
      const candidates = [
        `${HOLY_QURAN_BASE_PATH}/surah/${slug}`,
        `${HOLY_QURAN_BASE_PATH}/${slug}`,
        `/quran/${slug}`,
        `/quran/surah/${slug}`,
      ];
      for (const path of candidates) {
        if (path !== canonical) map[path] = canonical;
      }
    }
  }

  for (const para of PARAS) {
    const canonical = paraPath(para.number);
    const extras = PARA_ALIASES[para.number] || [];
    for (const extra of extras) {
      const slug = aliasSlug(extra);
      const candidates = [
        `${HOLY_QURAN_BASE_PATH}/para/${slug}`,
        `/quran/para/${slug}`,
        `/quran/juz/${para.number}`,
        `${HOLY_QURAN_BASE_PATH}/juz/${para.number}`,
      ];
      for (const path of candidates) {
        if (path !== canonical) map[path] = canonical;
      }
    }
    map[`/quran/para/${para.number}`] = canonical;
    map[`/quran/juz/${para.number}`] = canonical;
    map[`${HOLY_QURAN_BASE_PATH}/juz/${para.number}`] = canonical;
  }

  return map;
}
