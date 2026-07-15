export type ColorGroupKey =
  | "red" | "blue" | "green" | "orange" | "purple"
  | "teal" | "pink" | "grey" | "green2" | "blue2";

export interface ColorGroup {
  bg: string;
  light: string;
  text: string;
}

export interface Letter {
  id: number;
  letter: string;      // Arabic glyph
  name: string;        // English name e.g. "Alif"
  arabicName: string;  // Arabic name with harakat
  sound: string;       // transliteration e.g. "a"
  emoji: string;       // visual memory aid
  word: string;        // Arabic example word
  wordEn: string;      // English meaning of example word
  makharij: string;    // articulation point description
  mistake: string;     // common error to avoid
  tip: string;         // teaching tip
  colorGroup: ColorGroupKey;
  // four forms
  iso: string; ini: string; med: string; fin: string;
}

export type ScreenId =
  | "cover" | "toc" | "how-to" | "teacher-guide" | "parent-guide"
  | "planner" | "alphabet-chart" | "letter-families" | "flashcards"
  | "progress"
  | `letter-${number}`
  | "harakat-intro" | "fatha" | "kasra" | "damma"
  | "tanween" | "sukoon" | "shaddah"
  | "madd"
  | "joining" | "compound" | "reading-words" | "reading-stories"
  | "reading-sentences" | "quran-practice"
  | "tajweed-intro"
  | "revision" | "assessment" | "certificate";

export interface QaidaStore {
  screen: ScreenId;
  done: Set<number>;      // completed letter IDs
  stars: Record<string, number>; // screen id → star count
  sidebarOpen: boolean;
}
