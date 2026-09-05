export interface QuranAyah {
  surah: number;
  ayah: number;
  juz: number;
  text: string;
  global: number;
}

export interface ParaFile {
  juz: number;
  ayahs: QuranAyah[];
}

export interface ParaMeta {
  number: number;
  name: string;
  arabicName: string;
  startSurah: number;
  startAyah: number;
  endSurah: number;
  endAyah: number;
  ayahCount: number;
}

export interface QuranSearchHit {
  kind: "para" | "surah" | "ayah";
  para: number;
  surah?: number;
  ayah?: number;
  title: string;
  subtitle: string;
}
