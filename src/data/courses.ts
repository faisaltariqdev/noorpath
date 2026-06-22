export interface Course {
  slug: string;
  icon: string;
  title: string;
  shortTitle: string;
  desc: string;
  fullDesc: string;
  features: string[];
  level: string;
  age: string;
  duration: string;
  sessionsPerWeek: string;
  keywords: string[];
}

export const courses: Course[] = [
  {
    slug: "noorani-qaida-online",
    icon: "📖",
    title: "Noorani Qaida Online",
    shortTitle: "Noorani Qaida",
    desc: "The proven first step for Quran beginners — master Arabic letters, pronunciation, and foundations before moving to Quran recitation.",
    fullDesc: "Noorani Qaida is the essential foundation for any student beginning their Quran learning journey. Our certified tutors guide students step by step through Arabic letters, vowel signs (Harakat), Tanwin, Sukoon, Madd, and all foundational rules — ensuring correct pronunciation (Makharij) from the very first lesson.",
    features: ["Arabic alphabet from scratch", "Correct Makharij (pronunciation points)", "Harakat and vowel signs", "Tanwin and Sukoon rules", "Suitable for children from age 4"],
    level: "Complete Beginner",
    age: "Ages 4+",
    duration: "3–6 months",
    sessionsPerWeek: "3–5 sessions/week",
    keywords: ["noorani qaida online", "learn noorani qaida online", "noorani qaida for kids", "quran beginners course", "arabic alphabet online"],
  },
  {
    slug: "tajweed-classes-online",
    icon: "🎵",
    title: "Tajweed Classes Online",
    shortTitle: "Tajweed Classes",
    desc: "Learn the rules of beautiful Quran recitation — Noon Sakinah, Madd, Ghunna, and all major Tajweed principles with practice.",
    fullDesc: "Tajweed (تجويد) is the art of reciting the Quran as the Prophet Muhammad ﷺ recited it. Our certified Tajweed tutors teach all major rules — Noon Sakinah, Meem Sakinah, Madd rules, Qalqalah, Ghunna, and more — using actual Quran verses for practice. Available from beginner to Ijazah level.",
    features: ["All major Tajweed rules explained", "Audio examples with certified Qari", "Step-by-step rule application", "Practice with actual Quran verses", "Ijazah track available"],
    level: "Beginner to Advanced",
    age: "All ages",
    duration: "6–12 months",
    sessionsPerWeek: "3–5 sessions/week",
    keywords: ["tajweed classes online", "learn tajweed online", "tajweed rules online", "quran tajweed course", "tajweed for beginners"],
  },
  {
    slug: "hifz-program-online",
    icon: "🧠",
    title: "Hifz Program Online",
    shortTitle: "Hifz Program",
    desc: "Complete Quran memorization program with structured daily lessons, revision system, and Sanad preparation — Juz by Juz.",
    fullDesc: "Our Online Hifz Program is a structured, personalized memorization journey. Using the proven Sabaq–Sabqi–Manzil revision system, our Huffaz tutors guide students through the complete memorization of the Quran — Juz by Juz — with a built-in revision schedule to prevent forgetting and ensure solid Hifz.",
    features: ["Structured Juz memorization plan", "Daily new + revision sessions", "Sabaq and Sabqi system", "Weekly revision tests", "Sanad and Ijazah certification track"],
    level: "Intermediate to Advanced",
    age: "Ages 7+",
    duration: "2–5 years",
    sessionsPerWeek: "5–6 sessions/week",
    keywords: ["hifz program online", "online quran memorization", "hifz classes online", "quran memorization course", "hifz online"],
  },
  {
    slug: "quran-classes-for-kids",
    icon: "🌙",
    title: "Quran Classes for Kids",
    shortTitle: "Kids Quran Classes",
    desc: "Our All-in-One kids programme — Noorani Qaida, daily duas, Hadith, and Islamic values all in one fun weekly session.",
    fullDesc: "Designed specifically for children aged 4–12, our Kids Quran Classes blend Noorani Qaida or Quran recitation with daily duas, short Hadith, and Islamic character building. Our child-specialist tutors make every lesson engaging, interactive, and fun — ensuring your child loves learning the Quran.",
    features: ["Noorani Qaida or Quran recitation", "20 essential daily duas", "Short Hadith for character building", "Islamic manners and values", "Weekly parent progress report"],
    level: "Beginner",
    age: "Ages 4–12",
    duration: "Ongoing",
    sessionsPerWeek: "3–5 sessions/week",
    keywords: ["quran classes for kids", "online quran for children", "kids quran lessons online", "quran learning for children", "islamic classes for kids"],
  },
  {
    slug: "arabic-language-online",
    icon: "📝",
    title: "Arabic Language Online",
    shortTitle: "Arabic Language",
    desc: "Learn Quranic and Modern Standard Arabic — understand the Quran in its original language, build grammar and vocabulary step by step.",
    fullDesc: "Our Arabic Language Program teaches both Quranic Arabic (to understand the Quran directly) and Modern Standard Arabic (for communication). Students learn Arabic grammar (Nahw & Sarf), build vocabulary, and progress toward reading and understanding Quran without translation.",
    features: ["Quranic Arabic fundamentals", "Arabic grammar (Nahw & Sarf)", "Vocabulary building", "Quranic word understanding", "Conversational Arabic (optional)"],
    level: "Beginner to Advanced",
    age: "All ages",
    duration: "6–18 months",
    sessionsPerWeek: "3–5 sessions/week",
    keywords: ["arabic language online", "learn arabic online", "quranic arabic course", "arabic classes online", "learn arabic for quran"],
  },
  {
    slug: "islamic-studies-online",
    icon: "🕌",
    title: "Islamic Studies Online",
    shortTitle: "Islamic Studies",
    desc: "Comprehensive Islamic education — Fiqh, Aqeedah, Seerah, Islamic history, and character development for children and adults.",
    fullDesc: "Our Islamic Studies Program provides a comprehensive foundation in Islamic knowledge — covering the pillars of Islam, Fiqh (jurisprudence), Aqeedah (belief), Seerah (Prophet's biography), Islamic history, and Akhlaq (character). Suitable for all ages and levels.",
    features: ["Islamic pillars and Fiqh basics", "Seerah (Prophet's biography)", "Aqeedah (Islamic beliefs)", "Islamic history and civilization", "Character and morals (Akhlaq)"],
    level: "All levels",
    age: "All ages",
    duration: "Ongoing",
    sessionsPerWeek: "2–3 sessions/week",
    keywords: ["islamic studies online", "online islamic education", "learn islam online", "islamic classes online", "fiqh aqeedah online"],
  },
  {
    slug: "daily-duas-for-kids",
    icon: "🤲",
    title: "Daily Duas for Kids",
    shortTitle: "Daily Duas",
    desc: "Teach your children the most important daily Islamic supplications — with Arabic, transliteration, meaning, and fun memorization methods.",
    fullDesc: "Help your child build the habit of daily Islamic supplications. Our Daily Duas for Kids program teaches the most essential duas in Arabic — morning and evening duas, mealtime duas, sleep duas, travel duas, and more — using fun games, stories, and interactive methods that children love.",
    features: ["Morning and evening duas", "Mealtime duas", "Sleep and waking duas", "Travel and protection duas", "Fun memorization games"],
    level: "Beginner",
    age: "Ages 3–10",
    duration: "2–4 months",
    sessionsPerWeek: "2–3 sessions/week",
    keywords: ["duas for kids online", "teach kids duas", "daily duas for children", "islamic duas memorization", "duas for kids"],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
