// Harakat (short vowels) lesson data
export const HARAKAT = [
  {
    id: "fatha",
    name: "Fatha",
    arabic: "\u064E",
    display: "\u0628\u064E",
    sound: "a",
    description: "Short 'a' vowel mark — a small diagonal stroke above the letter",
    color: "#C62828",
    bg: "#FFEBEE",
    examples: [
      { text: "\u0628\u064E", roman: "ba" },
      { text: "\u062A\u064E", roman: "ta" },
      { text: "\u062C\u064E", roman: "ja" },
      { text: "\u0633\u064E", roman: "sa" },
    ],
    tip: "Fatha always makes an 'A' sound like in 'apple' or 'cat'.",
    emoji: "☀️",
  },
  {
    id: "kasra",
    name: "Kasra",
    arabic: "\u0650",
    display: "\u0628\u0650",
    sound: "i",
    description: "Short 'i' vowel mark — a small diagonal stroke BELOW the letter",
    color: "#1565C0",
    bg: "#E3F2FD",
    examples: [
      { text: "\u0628\u0650", roman: "bi" },
      { text: "\u062A\u0650", roman: "ti" },
      { text: "\u062C\u0650", roman: "ji" },
      { text: "\u0633\u0650", roman: "si" },
    ],
    tip: "Kasra is below the letter and makes an 'I' sound like in 'sit'.",
    emoji: "💧",
  },
  {
    id: "damma",
    name: "Damma",
    arabic: "\u064F",
    display: "\u0628\u064F",
    sound: "u",
    description: "Short 'u' vowel mark — a small waw-like shape above the letter",
    color: "#2E7D32",
    bg: "#E8F5E9",
    examples: [
      { text: "\u0628\u064F", roman: "bu" },
      { text: "\u062A\u064F", roman: "tu" },
      { text: "\u062C\u064F", roman: "ju" },
      { text: "\u0633\u064F", roman: "su" },
    ],
    tip: "Damma looks like a tiny waw and always makes a 'U' sound like in 'put'.",
    emoji: "🌙",
  },
];

// Joining combinations for the joining letters screen
export const JOINING_EXAMPLES = [
  { letters: ["\u0628\u064E", "\u062A\u064E", "\u0628\u064E"], joined: "\u0628\u062A\u0628", roman: "ba-ta-ba", meaning: "Practice word" },
  { letters: ["\u0633\u064E", "\u0644\u064E", "\u0645\u064E"], joined: "\u0633\u0644\u0645", roman: "sa-la-ma", meaning: "Peace (Salam)" },
  { letters: ["\u0643\u064E", "\u062A\u064E", "\u0628\u064E"], joined: "\u0643\u062A\u0628", roman: "ka-ta-ba", meaning: "He wrote" },
  { letters: ["\u0645\u064E", "\u062F\u064E", "\u0631\u064E", "\u0633\u064E", "\u0629\u064E"], joined: "\u0645\u062F\u0631\u0633\u0629", roman: "mad-ra-sa", meaning: "School" },
];

// Simple Quran verses for practice
export const QURAN_PRACTICE = [
  { surah: "Al-Fatiha", verse: 1, arabic: "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650", translation: "In the name of Allah, the Most Gracious, the Most Merciful" },
  { surah: "Al-Ikhlas", verse: 1, arabic: "\u0642\u064F\u0644\u0652 \u0647\u064F\u0648\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0623\u064E\u062D\u064E\u062F\u064C", translation: "Say: He is Allah, the One" },
  { surah: "Al-Asr", verse: 1, arabic: "\u0648\u064E\u0627\u0644\u0652\u0639\u064E\u0635\u0652\u0631\u0650", translation: "By time" },
  { surah: "Al-Kawthar", verse: 1, arabic: "\u0625\u0650\u0646\u0651\u064E\u0627 \u0623\u064E\u0639\u0652\u0637\u064E\u064A\u0652\u0646\u064E\u0627\u0643\u064E \u0627\u0644\u0652\u0643\u064E\u0648\u062B\u064E\u0631\u064E", translation: "Indeed, We have granted you Al-Kawthar" },
];

// Weekly planner weeks
export const WEEKLY_PLANS = [
  {
    week: 1,
    title: "Letters 1–5 (Alif to Jeem)",
    color: "#1565C0",
    bg: "#E3F2FD",
    days: [
      { day: "Sat", letterIdx: 0, color: "#C62828" },
      { day: "Sun", letterIdx: 1, color: "#E91E63" },
      { day: "Mon", letterIdx: 2, color: "#9C27B0" },
      { day: "Tue", letterIdx: 3, color: "#1565C0" },
      { day: "Wed", letterIdx: 4, color: "#00695C" },
      { day: "Thu", letterIdx: -1, color: "#999", label: "🔄 Revision" },
      { day: "Fri", letterIdx: -2, color: "#E65100", label: "☀️ Quran" },
    ],
  },
  {
    week: 2,
    title: "Letters 6–10 (Ha to Ra)",
    color: "#2E7D32",
    bg: "#E8F5E9",
    days: [
      { day: "Sat", letterIdx: 5, color: "#C62828" },
      { day: "Sun", letterIdx: 6, color: "#E91E63" },
      { day: "Mon", letterIdx: 7, color: "#9C27B0" },
      { day: "Tue", letterIdx: 8, color: "#1565C0" },
      { day: "Wed", letterIdx: 9, color: "#00695C" },
      { day: "Thu", letterIdx: -1, color: "#999", label: "🔄 Revision" },
      { day: "Fri", letterIdx: -2, color: "#E65100", label: "☀️ Quran" },
    ],
  },
  {
    week: 3,
    title: "Letters 11–18 (Zain to Ain)",
    color: "#E65100",
    bg: "#FFF3E0",
    days: [
      { day: "Sat", letterIdx: 10, color: "#C62828" },
      { day: "Sun", letterIdx: 11, color: "#E91E63" },
      { day: "Mon", letterIdx: 12, color: "#9C27B0" },
      { day: "Tue", letterIdx: 13, color: "#1565C0" },
      { day: "Wed", letterIdx: 14, color: "#00695C" },
      { day: "Thu", letterIdx: -1, color: "#999", label: "🔄 Revision" },
      { day: "Fri", letterIdx: -2, color: "#E65100", label: "☀️ Quran" },
    ],
  },
  {
    week: 4,
    title: "Letters 19–28 (Ghain to Ya)",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    days: [
      { day: "Sat", letterIdx: 18, color: "#C62828" },
      { day: "Sun", letterIdx: 19, color: "#E91E63" },
      { day: "Mon", letterIdx: 20, color: "#9C27B0" },
      { day: "Tue", letterIdx: 21, color: "#1565C0" },
      { day: "Wed", letterIdx: 22, color: "#00695C" },
      { day: "Thu", letterIdx: -1, color: "#999", label: "🔄 Revision" },
      { day: "Fri", letterIdx: -2, color: "#E65100", label: "☀️ Quran" },
    ],
  },
];

// Letter family groupings for the letter families screen
export const LETTER_FAMILIES = [
  {
    id: "ba-family",
    title: "Family 1 — The Dot Family",
    subtitle: "Same base shape — different dots",
    color: "#C62828",
    bg: "#FFEBEE",
    members: [
      { letterIdx: 1, label: "1 dot below", note: "Ba — used in Bismillah" },
      { letterIdx: 2, label: "2 dots above", note: "Ta — sounds like English T" },
      { letterIdx: 3, label: "3 dots above", note: "Tha — like 'th' in think" },
    ],
    tip: "These 3 letters (ب ت ث) have the SAME shape — only the dots differ!",
  },
  {
    id: "jeem-family",
    title: "Family 2 — The Jeem Family",
    subtitle: "Same curved base",
    color: "#1565C0",
    bg: "#E3F2FD",
    members: [
      { letterIdx: 5, label: "No dots", note: "Ha — throat H sound" },
      { letterIdx: 4, label: "1 dot below", note: "Jeem — J sound" },
      { letterIdx: 6, label: "1 dot above", note: "Kha — gargling KH" },
    ],
    tip: "ج ح خ share the same curved body — the dots are your key!",
  },
  {
    id: "dal-family",
    title: "Family 3 — The Dal Family",
    subtitle: "Simple angular shape",
    color: "#2E7D32",
    bg: "#E8F5E9",
    members: [
      { letterIdx: 7, label: "No dots", note: "Dal — D sound" },
      { letterIdx: 8, label: "1 dot above", note: "Dhal — like 'the'" },
    ],
    tip: "د ذ — just one dot makes all the difference!",
  },
  {
    id: "ra-family",
    title: "Family 4 — The Ra Family",
    subtitle: "Small curved letters",
    color: "#E65100",
    bg: "#FFF3E0",
    members: [
      { letterIdx: 9, label: "No dots", note: "Ra — rolling R" },
      { letterIdx: 10, label: "1 dot above", note: "Zain — like Z in zebra" },
    ],
    tip: "ر ز — Ra is like a smile, Zain has one dot above!",
  },
  {
    id: "seen-family",
    title: "Family 5 — The Seen Family",
    subtitle: "Wavy teeth-like shape",
    color: "#00695C",
    bg: "#E0F2F1",
    members: [
      { letterIdx: 11, label: "No dots", note: "Seen — S sound" },
      { letterIdx: 12, label: "3 dots above", note: "Sheen — SH sound" },
    ],
    tip: "س ش — same wavy shape, Sheen has 3 dots!",
  },
  {
    id: "sad-family",
    title: "Family 6 — The Saad Family",
    subtitle: "Heavy sounds — special Arabic",
    color: "#6A1B9A",
    bg: "#F3E5F5",
    members: [
      { letterIdx: 13, label: "No dots", note: "Saad — heavy S" },
      { letterIdx: 14, label: "1 dot above", note: "Daad — heavy D" },
    ],
    tip: "ص ض — unique heavy Arabic sounds. No equivalent in English!",
  },
  {
    id: "ain-family",
    title: "Family 7 — The Ain Family",
    subtitle: "Eye-shaped letters",
    color: "#AD1457",
    bg: "#FCE4EC",
    members: [
      { letterIdx: 17, label: "No dots", note: "Ain — throat squeeze" },
      { letterIdx: 18, label: "1 dot above", note: "Ghain — soft gargle" },
    ],
    tip: "ع غ — both from the throat. Ain is the hardest letter for non-Arabs!",
  },
];
