import { PARA_ALIASES, SURAH_ALIASES } from "./aliases";
import { SURAHS } from "./surahs";
import type { QuranSearchHit } from "./types";
import { PARAS, paraForAyah, paraStartLabel, startingParaForSurah } from "./paras";
import { surahPath } from "./slugs";

export { PARA_ALIASES, SURAH_ALIASES };

function fold(value: string): string {
  return value.toLowerCase().replace(/[-_'’]/g, "").replace(/\s+/g, " ").trim();
}

function digits(raw: string): number | null {
  const match = raw.match(/(?:para|parah|juz|surah|surat)?\s*(\d{1,3})\s*$/i) || raw.match(/^(\d{1,3})$/);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isInteger(value) && value > 0 ? value : null;
}

export function searchQuranIndex(raw: string): QuranSearchHit[] {
  const trimmed = raw.trim();
  const q = fold(trimmed);
  if (!q) return [];
  if (q.length < 2 && !/^\d+$/.test(q)) return [];

  const ayahRef = trimmed.match(/^(\d{1,3})\s*[:：]\s*(\d{1,3})$/);
  if (ayahRef) {
    const surahNo = Number(ayahRef[1]);
    const ayahNo = Number(ayahRef[2]);
    const surah = SURAHS.find((item) => item.number === surahNo);
    if (surah && ayahNo >= 1 && ayahNo <= surah.verses) {
      return [{
        kind: "ayah",
        para: paraForAyah(surahNo, ayahNo),
        surah: surahNo,
        ayah: ayahNo,
        title: `${surah.name} ${surahNo}:${ayahNo}`,
        subtitle: `${surah.arabic} · Para ${paraForAyah(surahNo, ayahNo)}`,
      }];
    }
  }

  const n = digits(trimmed);
  const wantsPara = /para|parah|juz/.test(q);
  const wantsSurah = /surah|surat/.test(q);
  const hits: QuranSearchHit[] = [];

  for (const para of PARAS) {
    const aliases = PARA_ALIASES[para.number] || [];
    const nameHit =
      fold(para.name).includes(q)
      || para.arabicName.includes(trimmed)
      || aliases.some((alias) => fold(alias).includes(q) || q.includes(fold(alias)));
    const numberHit = n !== null && para.number === n && !wantsSurah;
    if (nameHit || numberHit || (wantsPara && n === para.number)) {
      hits.push({
        kind: "para",
        para: para.number,
        title: `Para ${para.number} · ${para.name}`,
        subtitle: `${para.arabicName} · Starts ${paraStartLabel(para)}`,
      });
    }
  }

  for (const surah of SURAHS) {
    const aliases = SURAH_ALIASES[surah.number] || [];
    const nameHit =
      fold(surah.name).includes(q)
      || surah.arabic.includes(trimmed)
      || aliases.some((alias) => fold(alias).includes(q) || q.includes(fold(alias)));
    const numberHit = n !== null && surah.number === n && !wantsPara;
    if (nameHit || numberHit || (wantsSurah && n === surah.number)) {
      hits.push({
        kind: "surah",
        para: startingParaForSurah(surah.number),
        surah: surah.number,
        title: `${surah.number}. ${surah.name}`,
        subtitle: `${surah.arabic} · ${surah.verses} ayahs · Para ${startingParaForSurah(surah.number)}`,
      });
    }
  }

  return hits.slice(0, 18);
}

export function searchHitHref(hit: QuranSearchHit): string {
  if (hit.kind === "para") return `/holy-quran/para/${hit.para}`;
  if (hit.kind === "ayah" && hit.surah && hit.ayah) {
    return `${surahPath(hit.surah)}#ayah-${hit.surah}-${hit.ayah}`;
  }
  if (hit.surah) return surahPath(hit.surah);
  return "/holy-quran";
}
