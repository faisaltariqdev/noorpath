export { SURAHS, type Surah } from "./surahs";
export {
  PARAS,
  TOTAL_AYAHS,
  TOTAL_PARAS,
  TOTAL_SURAHS,
  getPara,
  paraEndLabel,
  paraForAyah,
  paraStartLabel,
  parasForSurah,
  startingParaForSurah,
  surahArabic,
  surahName,
} from "./paras";
export { loadPara, loadSurahAyahs, recitationUrl, stripFileBom } from "./loadPara";
export { PARA_ALIASES, SURAH_ALIASES, searchHitHref, searchQuranIndex } from "./search";
export {
  HIGH_TRAFFIC_SURAH_NUMBERS,
  HOLY_QURAN_BASE_PATH,
  HOLY_QURAN_BASE_URL,
  HOLY_QURAN_CONTENT_VERSION,
  HOLY_QURAN_INDEXABLE_PATHS,
  holyQuranRedirects,
  paraPath,
  revelationLabel,
  surahBySlug,
  surahPath,
  toSurahSlug,
} from "./slugs";
export {
  faqJsonLd,
  holyQuranBreadcrumbs,
  holyQuranSitemapEntries,
  paraFaqs,
  quranBookJsonLd,
  surahDisplayName,
  surahFaqs,
  HOLY_QURAN_SITEMAP_PATH,
  HOLY_QURAN_SITEMAP_STAMP,
} from "./seo";
export type { HolyQuranFaq } from "./seo";
export type { ParaFile, ParaMeta, QuranAyah, QuranSearchHit } from "./types";
