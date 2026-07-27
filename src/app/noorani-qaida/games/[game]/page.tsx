import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QAIDA_BASE_PATH, QAIDA_GAME_BY_SLUG, QAIDA_GAMES } from "@/data/noorani-qaida";
import LetterMatchingGame from "@/components/noorani-qaida/LetterMatchingGame";
import HarakatQuizGame from "@/components/noorani-qaida/HarakatQuizGame";
import ProgressChecklistGame from "@/components/noorani-qaida/ProgressChecklistGame";
import ParentShareButtons from "@/components/noorani-qaida/ParentShareButtons";
import {
  QAIDA_BASE_URL,
  QaidaBreadcrumbs,
  QaidaCallout,
  QaidaCourseCta,
  QaidaRelatedLinks,
} from "@/components/noorani-qaida/QaidaSeoComponents";
import { serializeJsonLd } from "@/lib/jsonLd";

interface Props {
  params: Promise<{ game: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return QAIDA_GAMES.map((game) => ({ game: game.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { game: slug } = await params;
  const game = QAIDA_GAME_BY_SLUG[slug];
  if (!game) return {};
  const url = `${QAIDA_BASE_URL}/games/${game.slug}`;
  return {
    title: { absolute: `${game.metaTitle} | NoorPath` },
    description: game.description.slice(0, 160),
    keywords: game.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: game.metaTitle,
      description: game.description,
      url,
      type: "website",
      images: [{
        url: "/marketing/noorani-qaida/arabic-letter-bubble-pop-game.png",
        width: 1024,
        height: 350,
        alt: game.title,
      }],
    },
  };
}

export default async function NooraniQaidaGamePage({ params }: Props) {
  const { game: slug } = await params;
  const game = QAIDA_GAME_BY_SLUG[slug];
  if (!game) notFound();

  const url = `${QAIDA_BASE_URL}/games/${game.slug}`;
  const related =
    slug === "letter-matching"
      ? [
          { href: `${QAIDA_BASE_PATH}#arabic-alphabet`, label: "Arabic letters index", description: "Open all 28 letter guides from the hub." },
          { href: `${QAIDA_BASE_PATH}/arabic-letters/alif`, label: "Alif letter page", description: "Continue with a full letter reference." },
          { href: `${QAIDA_BASE_PATH}/games/harakat-quiz`, label: "Harakat quiz", description: "Practise Fatha, Kasra, and Damma next." },
        ]
      : slug === "harakat-quiz"
        ? [
            { href: `${QAIDA_BASE_PATH}/lessons/fatha`, label: "Fatha lesson", description: "Review the short a vowel." },
            { href: `${QAIDA_BASE_PATH}/lessons/kasra`, label: "Kasra lesson", description: "Review the short i vowel." },
            { href: `${QAIDA_BASE_PATH}/lessons/damma`, label: "Damma lesson", description: "Review the short u vowel." },
          ]
        : [
            { href: QAIDA_BASE_PATH, label: "Noorani Qaida hub", description: "See the full 11-module learning path." },
            { href: `${QAIDA_BASE_PATH}/guides/for-parents`, label: "Parent guide", description: "Keep home practice short and calm." },
            { href: `${QAIDA_BASE_PATH}/games/letter-matching`, label: "Letter matching game", description: "Practise recognition after checklist review." },
          ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${url}#resource`,
        name: game.title,
        description: game.description,
        url,
        learningResourceType: "Interactive practice",
        educationalLevel: "Beginner",
        typicalAgeRange: "3-12",
        isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
        inLanguage: ["en", "ar"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
          { "@type": "ListItem", position: 2, name: "Noorani Qaida", item: QAIDA_BASE_URL },
          { "@type": "ListItem", position: 3, name: "Games", item: `${QAIDA_BASE_URL}/games` },
          { "@type": "ListItem", position: 4, name: game.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="qaida-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <header className="qaida-hero">
        <div className="qaida-container">
          <QaidaBreadcrumbs
            inverse
            items={[
              { label: "Home", href: "/" },
              { label: "Noorani Qaida", href: QAIDA_BASE_PATH },
              { label: "Games", href: `${QAIDA_BASE_PATH}/games` },
              { label: game.title },
            ]}
          />
          <span className="qaida-eyebrow">Free interactive practice</span>
          <h1 style={{ maxWidth: 820 }}>{game.title}</h1>
          <p>{game.summary}</p>
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="play-heading">
            <span className="qaida-eyebrow">Play on your phone</span>
            <h2 id="play-heading">Start the activity</h2>
            <p>{game.description}</p>
            <div style={{ marginTop: "1.25rem" }}>
              {slug === "letter-matching" && <LetterMatchingGame />}
              {slug === "harakat-quiz" && <HarakatQuizGame />}
              {slug === "progress-checklist" && <ProgressChecklistGame />}
            </div>
          </section>

          <QaidaCallout title="How to use this with a child" tone="blue">
            <p>
              Model the skill once, then let the child try a few rounds. Pause if guessing starts.
              These games check recognition and recall — not Tajweed mastery.
            </p>
          </QaidaCallout>

          <section className="qaida-section" aria-labelledby="share-heading">
            <span className="qaida-eyebrow">Share a useful link</span>
            <h2 id="share-heading">Know another parent teaching their child Noorani Qaida?</h2>
            <p>
              Share this free resource with them. WhatsApp is often the easiest place to pass a calm practice link.
            </p>
            <ParentShareButtons
              shareText={`Free ${game.title} for Noorani Qaida practice:`}
              shareUrl={url}
            />
          </section>

          <QaidaRelatedLinks
            title="Related lessons"
            links={[
              { href: QAIDA_BASE_PATH, label: "Interactive Noorani Qaida hub", description: "Return to the full curriculum map." },
              ...related,
              { href: `${QAIDA_BASE_PATH}/games`, label: "All free games", description: "Browse letter, harakat, and progress tools." },
            ]}
          />

          <p style={{ marginTop: "1rem" }}>
            <Link href={`${QAIDA_BASE_PATH}/guides/games`} style={{ color: "var(--emerald)", fontWeight: 650 }}>
              Read the games teaching guide
            </Link>
            {" "}for how Bubble Pop–style activities fit after modelling.
          </p>

          <QaidaCourseCta />
        </div>
      </div>
    </article>
  );
}
