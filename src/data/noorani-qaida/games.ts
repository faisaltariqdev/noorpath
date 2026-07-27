export type QaidaGameMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  summary: string;
  href: string;
};

const GAMES_BASE = "/noorani-qaida/games";

export const QAIDA_GAMES: QaidaGameMeta[] = [
  {
    slug: "letter-matching",
    title: "Arabic Letter Matching Game",
    metaTitle: "Free Noorani Qaida Letter Game for Kids",
    description:
      "A free Noorani Qaida letter matching game: show an Arabic letter and help children pick the matching name. Mobile-friendly recognition practice.",
    keywords: [
      "noorani qaida letter game",
      "arabic letter matching game",
      "arabic alphabet game for kids",
    ],
    summary: "Find the matching Arabic letter name from a small set of choices.",
    href: `${GAMES_BASE}/letter-matching`,
  },
  {
    slug: "harakat-quiz",
    title: "Arabic Harakat Quiz for Kids",
    metaTitle: "Free Arabic Harakat Game for Kids Online",
    description:
      "A free Arabic harakat game for kids: practise Fatha, Kasra, and Damma recognition with short quiz rounds linked to Noorani Qaida vowel lessons.",
    keywords: [
      "arabic harakat game for kids",
      "fatha kasra damma quiz",
      "noorani qaida vowels game",
    ],
    summary: "Recognise Fatha, Kasra, and Damma on simple Arabic letters.",
    href: `${GAMES_BASE}/harakat-quiz`,
  },
  {
    slug: "progress-checklist",
    title: "Noorani Qaida Progress Checklist",
    metaTitle: "Noorani Qaida Practice Quiz & Checklist",
    description:
      "A free Noorani Qaida practice quiz and parent checklist to track letters, harakat, and early reading skills — then share progress with another parent.",
    keywords: [
      "noorani qaida practice quiz",
      "noorani qaida checklist",
      "track noorani qaida progress",
    ],
    summary: "Tick what your child has covered and share a simple progress card.",
    href: `${GAMES_BASE}/progress-checklist`,
  },
];

export const QAIDA_GAME_BY_SLUG = Object.fromEntries(
  QAIDA_GAMES.map((game) => [game.slug, game]),
) as Record<string, QaidaGameMeta>;
