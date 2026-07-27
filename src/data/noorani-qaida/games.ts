export type QaidaGameMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  summary: string;
  href: string;
  /** Unique on-page SEO sections (educational; not marketing fluff). */
  seoIntro: string;
  howToUse: string[];
  skillFocus: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const GAMES_BASE = "/noorani-qaida/games";

export const QAIDA_GAMES: QaidaGameMeta[] = [
  {
    slug: "letter-matching",
    title: "Arabic Letter Matching Game",
    metaTitle: "Free Noorani Qaida Letter Game for Kids",
    description:
      "Free Noorani Qaida letter matching game for kids: match Arabic letters to names, build recognition, then open the full alphabet guides. Mobile-friendly, no login.",
    keywords: [
      "noorani qaida letter game",
      "arabic letter matching game",
      "arabic alphabet game for kids",
      "learn arabic letters online free",
      "noorani qaida alphabet practice",
      "free arabic letter recognition game",
      "arabic letters quiz for kids",
    ],
    summary: "Find the matching Arabic letter name from a small set of choices.",
    href: `${GAMES_BASE}/letter-matching`,
    seoIntro:
      "This free Noorani Qaida letter game helps children practise visual recognition: see an Arabic letter, choose the correct English name, and build confidence before joined reading. It is designed for phones, short attention spans, and calm parent-led practice — not as a pronunciation grader.",
    howToUse: [
      "Model the target letter once from a letter page or teacher recording.",
      "Play 5–8 matching rounds, then stop while the child still feels successful.",
      "If the child guesses repeatedly, reduce to two choices and revisit dots/shape clues.",
      "Open the matching letter guide afterwards for forms, makhraj cues, and writing tips.",
    ],
    skillFocus: [
      "Arabic letter shape recognition",
      "Name-to-glyph matching",
      "Dot and family discrimination (Baa/Taa/Thaa, Seen/Saad, etc.)",
      "Short retrieval practice between live lessons",
    ],
    faqs: [
      {
        question: "Is this Noorani Qaida letter game free?",
        answer:
          "Yes. The browser letter matching game on NoorPath requires no account and no payment. Live classes are a separate service if you want teacher correction.",
      },
      {
        question: "Can a letter game teach pronunciation by itself?",
        answer:
          "No. Matching checks recognition. Accurate Arabic sounds still need an approved model or a live teacher, especially for letters with no English equivalent.",
      },
      {
        question: "What age is Arabic letter matching for?",
        answer:
          "Most families use it for ages 3–12. Younger children may need a parent to tap choices; older beginners can play independently after a quick model.",
      },
    ],
  },
  {
    slug: "harakat-quiz",
    title: "Arabic Harakat Quiz for Kids",
    metaTitle: "Free Arabic Harakat Game for Kids Online",
    description:
      "Free Arabic harakat game for kids: practise Fatha, Kasra, and Damma recognition with short quiz rounds linked to Noorani Qaida vowel lessons. Mobile-friendly.",
    keywords: [
      "arabic harakat game for kids",
      "fatha kasra damma quiz",
      "noorani qaida vowels game",
      "harakat for beginners kids",
      "learn zabar zer pesh online",
      "short vowels arabic quiz",
      "noorani qaida harakat practice",
    ],
    summary: "Recognise Fatha, Kasra, and Damma on simple Arabic letters.",
    href: `${GAMES_BASE}/harakat-quiz`,
    seoIntro:
      "Harakat (short vowels) turn a consonant into a readable sound. This Arabic harakat game for kids asks children to identify Fatha, Kasra, or Damma on a simple letter — a core Noorani Qaida skill before Tanween, Sukoon, and joining.",
    howToUse: [
      "Review one vowel lesson (Fatha, Kasra, or Damma) before playing.",
      "Ask the child where the mark sits (above or below) before naming the sound.",
      "Keep rounds short; contrast one short vowel with one Madd example afterwards.",
      "Return to the linked lesson page if the child confuses length with short vowels.",
    ],
    skillFocus: [
      "Fatha (short a) recognition",
      "Kasra (short i) recognition",
      "Damma (short u) recognition",
      "Mark position awareness before sound production",
    ],
    faqs: [
      {
        question: "What are harakat in Noorani Qaida?",
        answer:
          "Harakat are the short vowel marks: Fatha, Kasra, and Damma. They give a consonant a brief reading sound and must stay short — not stretched into Madd.",
      },
      {
        question: "Should my child say the sound during the quiz?",
        answer:
          "Optional. First confirm they can name the mark correctly. Then add a soft listen-and-repeat model so recognition and pronunciation stay connected without rushing.",
      },
      {
        question: "What comes after the harakat quiz?",
        answer:
          "When short vowels are stable, move to Tanween, Sukoon, and joining lessons on the Noorani Qaida hub — still with teacher checks for uncertain sounds.",
      },
    ],
  },
  {
    slug: "progress-checklist",
    title: "Noorani Qaida Progress Checklist",
    metaTitle: "Noorani Qaida Practice Quiz & Checklist",
    description:
      "Free Noorani Qaida practice quiz and parent checklist to track letters, harakat, and early reading skills — then share progress with another parent. No account needed.",
    keywords: [
      "noorani qaida practice quiz",
      "noorani qaida checklist",
      "track noorani qaida progress",
      "noorani qaida for parents",
      "qaida skills checklist kids",
      "arabic reading readiness checklist",
      "share noorani qaida progress",
    ],
    summary: "Tick what your child has covered and share a simple progress card.",
    href: `${GAMES_BASE}/progress-checklist`,
    seoIntro:
      "Parents often ask what “progress” should look like during Noorani Qaida. This free practice quiz and checklist turns that into clear skills: letter groups, harakat, joining awareness, and short word reading — without inventing grades or certificates.",
    howToUse: [
      "Tick only skills your child can do calmly with a model nearby.",
      "Use the list before a tutor conversation so goals stay specific.",
      "Revisit weekly; progress is consistency, not a one-day score.",
      "Share the card with another parent only if it genuinely helps them start.",
    ],
    skillFocus: [
      "Parent-visible skill tracking",
      "Letter-group coverage awareness",
      "Harakat and joining readiness signals",
      "Honest sharing without fake social proof",
    ],
    faqs: [
      {
        question: "Is this checklist a certificate?",
        answer:
          "No. It is a parent helper for conversation and home planning. It does not certify Tajweed, completion, or readiness for full Quran pages.",
      },
      {
        question: "Do I need an account to save progress?",
        answer:
          "No. The checklist runs in your browser session. If you refresh, you can retick items — keep a simple note if you want a longer record.",
      },
      {
        question: "When should we move from Qaida to Quran?",
        answer:
          "When decoding unfamiliar short lines is usually accurate and calm. Use this checklist as a conversation aid with your teacher, not as a hard stop/start rule.",
      },
    ],
  },
];

export const QAIDA_GAME_BY_SLUG = Object.fromEntries(
  QAIDA_GAMES.map((game) => [game.slug, game]),
) as Record<string, QaidaGameMeta>;

export const QAIDA_GAMES_HUB_FAQS = [
  {
    question: "Are NoorPath Noorani Qaida games free?",
    answer:
      "Yes. The browser games for letter matching, harakat recognition, and the parent progress checklist are free and require no login. Live one-to-one classes are arranged separately.",
  },
  {
    question: "Do these games replace a Quran teacher?",
    answer:
      "No. Games reinforce recognition and recall after a clear model. A qualified teacher or approved recitation remains important for correcting uncertain pronunciation and Tajweed.",
  },
  {
    question: "What is the best Noorani Qaida game to start with?",
    answer:
      "Start with letter matching if your child is still learning the alphabet. Use the harakat quiz once letters are familiar. Use the progress checklist anytime you want a calm parent overview.",
  },
  {
    question: "Can I use these Arabic games on a phone?",
    answer:
      "Yes. The activities are built for mobile-first practice — large tap targets and short rounds for parents practising with children on phones.",
  },
  {
    question: "How should parents use Noorani Qaida games at home?",
    answer:
      "Model first, play a few short rounds, praise careful looking, and stop before frustration. Pair games with the letter and lesson pages on the Noorani Qaida hub.",
  },
] as const;
