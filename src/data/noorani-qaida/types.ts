export interface QaidaFaq {
  question: string;
  answer: string;
}

export interface QaidaLetter {
  id: number;
  slug: string;
  arabic: string;
  name: string;
  sound: string;
  forms: [string, string, string, string];
  example: string;
  exampleMeaning: string;
  makhraj: string;
  shapeGuide: string;
  commonConfusion: string;
  writingCue: string;
  childPrompt: string;
  parentTip: string;
  teacherTip: string;
  keywords: string[];
}

export interface QaidaExample {
  arabic: string;
  transliteration: string;
  meaning?: string;
}

export interface QaidaTopic {
  slug: string;
  title: string;
  arabicTitle: string;
  category: "lesson" | "tajweed";
  module: string;
  order: number;
  summary: string;
  explanation: string;
  mouthGuide: string;
  writingGuide: string;
  commonMistake: string;
  practiceSteps: string[];
  parentTip: string;
  teacherTip: string;
  examples: QaidaExample[];
  keywords: string[];
  faqs: QaidaFaq[];
}

export interface QaidaGuide {
  slug: string;
  title: string;
  description: string;
  audience: string;
  introduction: string;
  sections: Array<{ heading: string; body: string; points?: string[] }>;
  checklist: string[];
  keywords: string[];
  faqs: QaidaFaq[];
  image?: "lesson" | "games" | "bubble";
}

export interface QaidaModule {
  order: number;
  title: string;
  arabicTitle: string;
  description: string;
  href: string;
}
