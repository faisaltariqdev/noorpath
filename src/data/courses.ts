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
    desc: "Live beginner lessons supported by NoorPath’s 11-module interactive Qaida reference — Arabic letters, pronunciation guidance, games, and reading foundations.",
    fullDesc: "Noorani Qaida provides a structured foundation for students beginning their Quran learning journey. Live lessons can cover Arabic letters, vowel signs (Harakat), Tanwin, Sukoon, Shaddah, Madd, joining, pronunciation points (Makharij), and foundational word reading. NoorPath’s separate interactive reference supports ages 3–12 with open modules, practice activities, games, progress, and adult guidance; live classes are available by request from age 4.",
    features: ["28 Arabic letters and joining forms", "Makharij and pronunciation guidance", "Harakat, Tanwin, Sukoon, Shaddah, and Madd", "Interactive practice, games, progress, and rewards", "Live class requests for children from age 4"],
    level: "Complete Beginner",
    age: "Ages 4+",
    duration: "Learner-paced",
    sessionsPerWeek: "Choose 1–4 sessions/week",
    keywords: ["noorani qaida online", "learn noorani qaida online", "noorani qaida for kids", "online noorani qaida classes", "quran beginners course", "arabic alphabet online"],
    faqs: [
      { q: "What is Noorani Qaida?", a: "Noorani Qaida is the standard beginner's book for learning to read the Arabic script used in the Quran. It teaches the Arabic alphabet, short vowels (Harakat), Tanwin, Sukoon, Madd letters, and basic pronunciation (Makharij) — step by step. It is the foundation every Quran learner builds on before moving to reciting the Holy Quran." },
      { q: "How long does Noorani Qaida take to complete online?", a: "There is no universal completion time. Progress depends on starting level, lesson frequency, attendance and home practice. A tutor can recommend a suitable routine after hearing the learner read." },
      { q: "What age can children start Noorani Qaida?", a: "Noorani Qaida can be introduced when a child can engage with letter recognition and short guided lessons. Parents can use the trial to discuss whether the format is suitable for their child." },
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
    fullDesc: "Tajweed (تجويد) covers rules used when reciting the Quran. Lessons can cover Noon Sakinah, Meem Sakinah, Madd, Qalqalah, Ghunna, pronunciation points and application through Quran verses.",
    features: ["Major Tajweed rules explained", "Guided recitation examples", "Step-by-step rule application", "Practice with Quran verses", "Live pronunciation correction"],
    level: "Beginner to Advanced",
    age: "All ages",
    duration: "Learner-paced",
    sessionsPerWeek: "Choose 1–4 sessions/week",
    keywords: ["tajweed classes online", "learn tajweed online", "tajweed rules online", "quran tajweed course", "tajweed for beginners"],
    faqs: [
      { q: "What is Tajweed?", a: "Tajweed (تجويد) is the set of rules governing how the Quran is recited. It covers correct pronunciation of Arabic letters (Makharij), characteristics of letters (Sifaat), rules for Noon Sakinah, Meem Sakinah, Madd (elongation), Qalqalah, and more. Reciting with Tajweed means reciting as the Prophet Muhammad ﷺ recited." },
      { q: "Can I learn Tajweed as a complete beginner?", a: "Learners who cannot yet read Arabic usually begin with Noorani Qaida before focusing on Tajweed. The trial can help identify the right starting point." },
      { q: "How long does it take to learn Tajweed online?", a: "There is no fixed timeframe. It depends on current reading ability, the rules being studied, lesson frequency and practice between lessons." },
      { q: "Do Tajweed classes include an Ijazah certification track?", a: "Do not assume that every tutor or course includes an Ijazah pathway. Ask NoorPath to confirm whether a suitably qualified tutor and pathway are currently available before enrolment." },
      { q: "Is Tajweed necessary for Salah (prayer)?", a: "Applying basic Tajweed in Salah is obligatory (Fard Ayn) according to many scholars — especially the correct pronunciation of letters. Full mastery of all Tajweed rules is recommended (Sunnah). NoorPath's Tajweed course covers both the essential rules for Salah and the advanced rules for complete mastery." },
    ],
  },
  {
    slug: "hifz-program-online",
    icon: "🧠",
    title: "Hifz Program Online",
    shortTitle: "Hifz Program",
    desc: "Online Quran memorization lessons with structured new memorization and revision goals, followed Juz by Juz at the learner's pace.",
    fullDesc: "The Online Hifz Program supports Quran memorization through agreed new portions and revision. A tutor may use Sabaq, Sabqi and Manzil concepts to balance new memorization, recent revision and older revision according to the learner's needs.",
    features: ["Structured memorization goals", "New portion and revision balance", "Sabaq, Sabqi and Manzil concepts", "Regular revision checks", "Plan adapted to the learner"],
    level: "Intermediate to Advanced",
    age: "Ages 7+",
    duration: "Long-term, learner-paced",
    sessionsPerWeek: "Choose 1–4 sessions/week",
    keywords: ["hifz program online", "online quran memorization", "hifz classes online", "quran memorization course", "hifz online"],
    faqs: [
      { q: "What is the Sabaq-Sabqi-Manzil system used in Hifz?", a: "Sabaq is the current new portion, Sabqi is recently memorized material, and Manzil is older material reviewed on a cycle. A tutor can adapt the balance to the learner." },
      { q: "How many pages of Quran should a child memorize per day?", a: "A safe target varies by age, current fluency, memory, available practice and revision strength. The tutor should set a manageable portion after assessing the learner." },
      { q: "How long does it take to memorize the full Quran online?", a: "There is no honest universal timeframe. Full memorization is a long-term goal affected by starting level, attendance, daily practice, revision and the portion assigned." },
      { q: "Can adults memorize the Quran online?", a: "Adults can work on Hifz goals online. The tutor should adapt new portions and revision to work, family commitments and current memorization." },
      { q: "How many sessions per week are needed for Hifz?", a: "The right frequency depends on the learner's plan and available revision time. NoorPath's published plans offer one, two or four lessons per week." },
    ],
  },
  {
    slug: "quran-classes-for-kids",
    icon: "🌙",
    title: "Quran Classes for Kids",
    shortTitle: "Kids Quran Classes",
    desc: "Our All-in-One kids programme — Noorani Qaida, daily duas, Hadith, and Islamic values all in one fun weekly session.",
    fullDesc: "Designed for children aged 4–12, Kids Quran Classes can blend Noorani Qaida or Quran recitation with daily duas, short Hadith, and Islamic character topics. Lesson content is adjusted to the child's current level and agreed course goals.",
    features: ["Noorani Qaida or Quran recitation", "Selected daily duas", "Short Hadith for character building", "Islamic manners and values", "Parent communication through official channels"],
    level: "Beginner",
    age: "Ages 4–12",
    duration: "Ongoing",
    sessionsPerWeek: "Choose 1–4 sessions/week",
    keywords: ["quran classes for kids", "online quran for children", "kids quran lessons online", "quran learning for children", "islamic classes for kids"],
    faqs: [
      { q: "What age can children start online Quran classes?", a: "The program is designed for children from age 4, but suitability depends on attention span and readiness for an online lesson. Parents can use the trial to discuss the format and lesson length." },
      { q: "How do online Quran classes work for young children?", a: "Classes run via Zoom — 1-on-1 between the child and their tutor. The tutor shares their screen showing the Quran/Qaida, uses a digital pointer, and engages the child with encouragement and interactive methods. Parents can sit alongside for younger children." },
      { q: "Are there female Quran teachers for girls?", a: "Parents can request a female tutor. NoorPath confirms a suitable match based on the child's needs, schedule and current tutor availability." },
      { q: "What does a typical children's Quran class cover?", a: "A lesson may include revision, new Quran or Qaida work, pronunciation correction, and an agreed dua or Islamic topic. The exact balance depends on the child's level and course." },
      { q: "How quickly do children progress in online Quran classes?", a: "Progress varies by starting level, lesson frequency, attendance and practice. Parents should ask the tutor what was covered and what to practise next rather than relying on a fixed completion promise." },
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
    duration: "Learner-paced",
    sessionsPerWeek: "Choose 1–4 sessions/week",
    keywords: ["arabic language online", "learn arabic online", "quranic arabic course", "arabic classes online", "learn arabic for quran"],
    faqs: [
      { q: "What is the difference between Quranic Arabic and Modern Arabic?", a: "Quranic Arabic (Classical Arabic) is the language of the Quran — it has specific grammar and vocabulary used in religious texts. Modern Standard Arabic (MSA) is the contemporary written form used in media and education. NoorPath teaches both — we recommend starting with Quranic Arabic if your goal is to understand the Quran directly." },
      { q: "How long does it take to understand the Quran in Arabic?", a: "There is no fixed timeframe. Progress depends on prior Arabic reading, vocabulary, grammar study, lesson frequency and practice. The tutor can recommend a suitable sequence after assessing the learner." },
      { q: "Do I need to know how to read Arabic before starting Arabic language classes?", a: "For Quranic Arabic, basic Arabic reading ability is required. If you cannot yet read Arabic, complete our Noorani Qaida course first. For Conversational Arabic, some programs can start without reading ability." },
      { q: "Can children learn Arabic language online?", a: "Children can study Arabic online when the lesson format suits their age and reading level. Parents can request a trial to discuss the available course and tutor match." },
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
    sessionsPerWeek: "Choose 1–4 sessions/week",
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
    desc: "Teach children commonly used daily Islamic supplications with Arabic, transliteration, meaning, and guided memorization.",
    fullDesc: "The Daily Duas for Kids program covers selected supplications in Arabic, including morning and evening duas, mealtime duas, sleep duas and travel duas. Lessons may use repetition, stories and visual prompts according to the child's learning needs.",
    features: ["Morning and evening duas", "Mealtime duas", "Sleep and waking duas", "Travel and protection duas", "Fun memorization games"],
    level: "Beginner",
    age: "Ages 3–10",
    duration: "Learner-paced",
    sessionsPerWeek: "Choose 1–4 sessions/week",
    keywords: ["duas for kids online", "teach kids duas", "daily duas for children", "islamic duas memorization", "duas for kids"],
    faqs: [
      { q: "Which duas should children learn first?", a: "A beginner can start with frequently used duas for eating, sleeping, waking, entering or leaving home, and using the bathroom. The order and pace should suit the child." },
      { q: "How do children memorize duas?", a: "A tutor may use repetition, visual prompts and meaning-based explanation. Parents can reinforce the same dua during the relevant daily routine." },
      { q: "Can this course be combined with Quran classes?", a: "Daily Duas can be combined with Noorani Qaida or Quran recitation when the lesson duration and the child's attention allow. Agree the lesson balance with the tutor." },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
