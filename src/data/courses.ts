export interface CourseFaq {
  q: string;
  a: string;
}

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
  faqs: CourseFaq[];
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
    faqs: [
      { q: "What is Noorani Qaida?", a: "Noorani Qaida is the standard beginner's book for learning to read the Arabic script used in the Quran. It teaches the Arabic alphabet, short vowels (Harakat), Tanwin, Sukoon, Madd letters, and basic pronunciation (Makharij) — step by step. It is the foundation every Quran learner builds on before moving to reciting the Holy Quran." },
      { q: "How long does Noorani Qaida take to complete online?", a: "With 3 classes per week, most children (ages 4–10) complete Noorani Qaida in 3–5 months. Adult beginners typically take 4–7 months with 2–3 sessions per week. Progress depends on daily practice — even 10 minutes a day makes a big difference." },
      { q: "What age can children start Noorani Qaida?", a: "Children can start Noorani Qaida from age 4. Our tutors use visual aids, coloured letters, and games to make learning fun for very young children. By age 5–6, most children are moving through Qaida confidently." },
      { q: "Can adults start with Noorani Qaida?", a: "Yes — many adults start completely from scratch with Noorani Qaida. There is no age limit. Our tutors who specialise in adult learners are patient, non-judgmental, and adapt the pace to fit a busy adult schedule." },
      { q: "What comes after completing Noorani Qaida?", a: "After completing Noorani Qaida, students move directly to reading the Holy Quran from Surah Al-Fatihah. Once they can read the Quran fluently, they can progress to the Tajweed course (to perfect pronunciation rules) or the Hifz program (to memorize the Quran)." },
    ],
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
    faqs: [
      { q: "What is Tajweed?", a: "Tajweed (تجويد) is the set of rules governing how the Quran is recited. It covers correct pronunciation of Arabic letters (Makharij), characteristics of letters (Sifaat), rules for Noon Sakinah, Meem Sakinah, Madd (elongation), Qalqalah, and more. Reciting with Tajweed means reciting as the Prophet Muhammad ﷺ recited." },
      { q: "Can I learn Tajweed as a complete beginner?", a: "Yes, but it is recommended to first complete Noorani Qaida. Tajweed classes assume you can already read Arabic. If you cannot yet read Arabic, start with our Noorani Qaida course first (3–6 months), then move to Tajweed." },
      { q: "How long does it take to learn Tajweed online?", a: "Basic Tajweed rules can be learned in 3–6 months with 3 sessions per week. Full Tajweed mastery (all rules, applied to the whole Quran) takes 9–12 months. Ijazah-level Tajweed (teaching certification) can take 2–3 years of dedicated study." },
      { q: "Do Tajweed classes include the Ijazah certification track?", a: "Yes. NoorPath Academy offers an Ijazah track for advanced students who want to earn the authorised Quran teaching certification. This requires mastering all Tajweed rules and reciting the complete Quran to an Ijazah-certified tutor." },
      { q: "Is Tajweed necessary for Salah (prayer)?", a: "Applying basic Tajweed in Salah is obligatory (Fard Ayn) according to many scholars — especially the correct pronunciation of letters. Full mastery of all Tajweed rules is recommended (Sunnah). NoorPath's Tajweed course covers both the essential rules for Salah and the advanced rules for complete mastery." },
    ],
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
    faqs: [
      { q: "What is the Sabaq-Sabqi-Manzil system used in Hifz?", a: "The Sabaq-Sabqi-Manzil system is the proven Hifz revision method. Sabaq is today's new memorization portion. Sabqi is the recent memorization from the past few days (short-term revision). Manzil is the older memorization revised cyclically to prevent forgetting. This three-level system ensures students memorize solidly without losing previous portions." },
      { q: "How many pages of Quran should a child memorize per day?", a: "Beginners start with 1–3 lines per day (ayah by ayah). As confidence grows, most students memorize half a page to 1 page per day. Advanced students can memorize 1–2 pages daily. Our tutors set a personalized daily target based on your child's age, memory capacity, and revision strength." },
      { q: "How long does it take to memorize the full Quran online?", a: "The Quran has 604 pages. With daily memorization and strong revision, children (ages 7–14) typically complete Hifz in 2–4 years. Adults memorizing part-time may take 4–7 years. The key is consistency — daily sessions are far more effective than occasional longer sessions." },
      { q: "Can adults memorize the Quran online?", a: "Yes. Adult memory is different but not less capable — many adults memorize the full Quran in their 30s, 40s, and beyond. Our Hifz tutors who specialise in adult students use techniques specifically suited to adult learning patterns, including spaced repetition and meaning-based memorization." },
      { q: "How many sessions per week are needed for Hifz?", a: "5–6 sessions per week is recommended for consistent Hifz progress. Fewer sessions slow memorization significantly as the Quran requires daily reinforcement. Our minimum recommendation is 5 sessions per week of 30–45 minutes each." },
    ],
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
    faqs: [
      { q: "What age can children start online Quran classes?", a: "Children can start from age 4. We have specialist tutors for very young children (4–6) who use visual aids, games, and short 15–20 minute sessions. By age 6–7 most children do 30-minute sessions. From age 10+ they can do full 45-minute sessions." },
      { q: "How do online Quran classes work for young children?", a: "Classes run via Zoom — 1-on-1 between the child and their tutor. The tutor shares their screen showing the Quran/Qaida, uses a digital pointer, and engages the child with encouragement and interactive methods. Parents can sit alongside for younger children." },
      { q: "Are there female Quran teachers for girls?", a: "Yes. All our Kids Quran Classes are available with certified female tutors (Hafiza). Simply request a female teacher when booking and your daughter will be assigned a female tutor for all lessons." },
      { q: "What does a typical children's Quran class cover?", a: "A typical 30-minute class covers: 5 minutes Quran/Qaida revision from last session, 15 minutes new learning (new letters, new ayahs, or new Tajweed rule), 5 minutes duas or Islamic value, 5 minutes parent feedback. The tutor sends a written progress note after each class." },
      { q: "How quickly do children progress in online Quran classes?", a: "Most children ages 4–6 complete Noorani Qaida in 4–6 months with 3 sessions per week. Ages 7–10 often complete Qaida in 3–4 months. After Qaida, they move to Quran recitation where they typically read 2–3 new ayahs per session with Tajweed correction." },
    ],
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
    faqs: [
      { q: "What is the difference between Quranic Arabic and Modern Arabic?", a: "Quranic Arabic (Classical Arabic) is the language of the Quran — it has specific grammar and vocabulary used in religious texts. Modern Standard Arabic (MSA) is the contemporary written form used in media and education. NoorPath teaches both — we recommend starting with Quranic Arabic if your goal is to understand the Quran directly." },
      { q: "How long does it take to understand the Quran in Arabic?", a: "With 3 sessions per week focused on Quranic vocabulary and grammar, most students can understand 60–70% of Quranic words within 12–18 months. The Quran uses around 1,700 root words — the 200 most common words cover 50%+ of the Quran text." },
      { q: "Do I need to know how to read Arabic before starting Arabic language classes?", a: "For Quranic Arabic, basic Arabic reading ability is required. If you cannot yet read Arabic, complete our Noorani Qaida course first. For Conversational Arabic, some programs can start without reading ability." },
      { q: "Can children learn Arabic language online?", a: "Yes. We offer Arabic language classes for children from age 7+. Our tutors use age-appropriate methods — games, stories, and visual vocabulary — to make Arabic engaging for young learners." },
    ],
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
    faqs: [
      { q: "What topics are covered in Islamic Studies online?", a: "Our Islamic Studies program covers: Pillars of Islam and Iman, Fiqh (Islamic law — prayer, fasting, Zakat, Hajj), Aqeedah (core Islamic beliefs), Seerah (Prophet Muhammad's ﷺ biography), Islamic history, Tafseer basics (Quran interpretation), and Akhlaq (Islamic character and morals)." },
      { q: "Is Islamic Studies available for both children and adults?", a: "Yes. We have age-specific Islamic Studies curricula — a children's program (ages 6–14) focused on values, stories, and fundamentals, and an adult program covering deeper Fiqh, Aqeedah, and scholarly discussion." },
      { q: "Can Islamic Studies be combined with Quran classes?", a: "Yes, and we recommend it. Many families combine Quran recitation classes with Islamic Studies sessions — this builds both practical skills (reading Quran) and understanding (knowing Islam). Our tutors can combine subjects in one session or schedule separately." },
    ],
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
    faqs: [
      { q: "Which duas should children learn first?", a: "We start with the most used daily duas: Bismillah (before eating), dua before sleep (Bismika Allahumma), dua on waking, dua entering/leaving home, dua entering the bathroom, and Al-Fatihah. These cover the core moments of a child's day and take 6–8 weeks to learn with meaning." },
      { q: "How do children memorize duas quickly?", a: "Our tutors use repetition with melody, visual flashcards, and story-based meaning explanation. Children memorize best when they understand what they are saying — so we always teach the meaning alongside the Arabic. Songs and rhythm also help younger children (3–7) memorize very quickly." },
      { q: "Can this course be combined with Quran classes?", a: "Yes. Daily Duas is often combined with Noorani Qaida or Quran recitation in a single session. The tutor spends 20–25 minutes on Quran/Qaida and 10 minutes on duas. This is the most popular structure for children aged 4–8." },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
