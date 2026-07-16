import { QAIDA_GUIDES } from "./guides";
import { QAIDA_LETTERS } from "./letters";
import { QAIDA_LESSONS, QAIDA_TAJWEED_TOPICS } from "./topics";
import type { QaidaModule } from "./types";

export * from "./guides";
export * from "./letters";
export * from "./topics";
export * from "./types";

export const QAIDA_CONTENT_VERSION = "2026-07-16";
export const QAIDA_BASE_PATH = "/noorani-qaida";

export const QAIDA_MODULES: QaidaModule[] = [
  { order: 1, title: "Arabic Alphabets", arabicTitle: "الحُرُوفُ العَرَبِيَّة", description: "Meet all 28 letters, their shapes, names, articulation cues, and joining forms.", href: `${QAIDA_BASE_PATH}#arabic-alphabet` },
  { order: 2, title: "Harakaat", arabicTitle: "الحَرَكَات", description: "Compare the short sounds of Fatha, Kasra, and Damma.", href: `${QAIDA_BASE_PATH}/lessons/fatha` },
  { order: 3, title: "Double Harakaat", arabicTitle: "التَّنْوِين", description: "Recognise Fathatain, Kasratain, and Dammatain.", href: `${QAIDA_BASE_PATH}/lessons/fathatain` },
  { order: 4, title: "Sukoon", arabicTitle: "السُّكُون", description: "Close a consonant cleanly without adding a vowel.", href: `${QAIDA_BASE_PATH}/lessons/sukoon` },
  { order: 5, title: "Shaddah", arabicTitle: "الشَّدَّة", description: "Read a doubled consonant as still plus vowelled parts.", href: `${QAIDA_BASE_PATH}/lessons/shaddah` },
  { order: 6, title: "Madd", arabicTitle: "المَدّ", description: "Learn foundational two-count Alif, Waw, and Ya patterns.", href: `${QAIDA_BASE_PATH}/lessons/madd-alif` },
  { order: 7, title: "Letter Joining", arabicTitle: "وَصْلُ الحُرُوف", description: "Compare isolated, initial, medial, and final forms.", href: `${QAIDA_BASE_PATH}/lessons/joining-letters` },
  { order: 8, title: "Word Reading", arabicTitle: "قِرَاءَةُ الكَلِمَات", description: "Blend signs and joined forms into short words.", href: `${QAIDA_BASE_PATH}/lessons/word-reading` },
  { order: 9, title: "Quranic Practice", arabicTitle: "تَدْرِيبٌ قُرْآنِيّ", description: "Apply familiar reading clues to guided words and phrases.", href: `${QAIDA_BASE_PATH}/lessons/quranic-practice` },
  { order: 10, title: "Revision", arabicTitle: "المُرَاجَعَة", description: "Mix recognition, pronunciation, joining, and reading practice.", href: `${QAIDA_BASE_PATH}/guides/practice` },
  { order: 11, title: "Final Review", arabicTitle: "المُرَاجَعَةُ النِّهَائِيَّة", description: "Review with parent and teacher guidance before the next reading stage.", href: `${QAIDA_BASE_PATH}/guides/for-teachers` },
];

export const QAIDA_SCREENSHOTS = {
  curriculum: {
    src: "/marketing/noorani-qaida/interactive-noorani-qaida-11-module-curriculum.png",
    alt: "NoorPath interactive Noorani Qaida showing the 11-module curriculum and Arabic alphabet book",
    caption: "NoorPath learning platform preview: an open 11-module journey from Arabic letters to guided Quranic practice.",
    width: 1024,
    height: 543,
  },
  lesson: {
    src: "/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png",
    alt: "Interactive Alif lesson with pronunciation, tracing, practice games, rewards, and progress",
    caption: "NoorPath learning platform preview: a focused Alif lesson with listen, trace, repeat, practise, and review steps.",
    width: 1024,
    height: 488,
  },
  bubble: {
    src: "/marketing/noorani-qaida/arabic-letter-bubble-pop-game.png",
    alt: "Arabic letter Bubble Pop recognition game for children practising Alif",
    caption: "NoorPath learning platform preview: Bubble Pop asks the learner to find a target letter among visual distractors.",
    width: 1024,
    height: 350,
  },
  games: {
    src: "/marketing/noorani-qaida/noorani-qaida-practice-games.png",
    alt: "Noorani Qaida practice activities and seven Arabic letter games for Alif",
    caption: "NoorPath learning platform preview: teachers can connect tracing, listening, memory, sequencing, and quizzes to the current letter.",
    width: 1024,
    height: 533,
  },
} as const;

export const QAIDA_INDEXABLE_PATHS = [
  QAIDA_BASE_PATH,
  ...QAIDA_LETTERS.map((letter) => `${QAIDA_BASE_PATH}/arabic-letters/${letter.slug}`),
  ...QAIDA_LESSONS.map((topic) => `${QAIDA_BASE_PATH}/lessons/${topic.slug}`),
  ...QAIDA_TAJWEED_TOPICS.map((topic) => `${QAIDA_BASE_PATH}/tajweed/${topic.slug}`),
  ...QAIDA_GUIDES.map((guide) => `${QAIDA_BASE_PATH}/guides/${guide.slug}`),
];
