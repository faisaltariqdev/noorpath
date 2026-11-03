import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QAIDA_BASE_PATH, QAIDA_GAME_BY_SLUG, QAIDA_GAMES } from "@/data/noorani-qaida";
import LetterMatchingGame from "@/components/noorani-qaida/LetterMatchingGame";
import HarakatQuizGame from "@/components/noorani-qaida/HarakatQuizGame";
import ProgressChecklistGame from "@/components/noorani-qaida/ProgressChecklistGame";
import InteractiveQuizGame from "@/components/noorani-qaida/InteractiveQuizGame";
import QaidaGamesWorksheetsGrid from "@/components/noorani-qaida/QaidaGamesWorksheetsGrid";
import ParentShareButtons from "@/components/noorani-qaida/ParentShareButtons";
import {
  QAIDA_BASE_URL,
  QaidaBreadcrumbs,
  QaidaCallout,
  QaidaCourseCta,
  QaidaFaqs,
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
    twitter: {
      card: "summary_large_image",
      title: game.metaTitle,
      description: game.description,
      images: ["/marketing/noorani-qaida/arabic-letter-bubble-pop-game.png"],
    },
  };
}

export default async function NooraniQaidaGamePage({ params }: Props) {
  const { game: slug } = await params;
  const game = QAIDA_GAME_BY_SLUG[slug];
  if (!game) notFound();

  const url = `${QAIDA_BASE_URL}/games/${game.slug}`;
  const relatedGameSlug = slug === "letter-matching" ? "harakat-quiz" : "letter-matching";
  const relatedGame = QAIDA_GAME_BY_SLUG[relatedGameSlug] || QAIDA_GAMES[0];

  const primaryInternalLinks = [
    { href: QAIDA_BASE_PATH, label: "Interactive Noorani Qaida Hub", description: "Explore the full 11-module curriculum map and letter index." },
    { href: relatedGame.href, label: relatedGame.title, description: relatedGame.summary },
    { href: "/courses/noorani-qaida-online", label: "Online Noorani Qaida Classes", description: "1-on-1 personalized lessons with certified live tutors." },
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
        teaches: game.skillFocus,
        isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
        inLanguage: ["en", "ar"],
      },
      {
        "@type": "FAQPage",
        mainEntity: game.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "HowTo",
        name: `How to use the ${game.title}`,
        description: game.seoIntro,
        step: game.howToUse.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
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
          <span className="qaida-eyebrow">Free interactive practice · Mobile-friendly</span>
          <h1 style={{ maxWidth: 820 }}>{game.title}</h1>
          <p>{game.seoIntro}</p>

          {game.answerBox && (
            <div
              className="np-quick-answer"
              style={{
                background: "rgba(255,255,255,.08)",
                borderLeft: "4px solid var(--gold)",
                borderRadius: "10px",
                padding: "16px 20px",
                marginTop: "1.25rem",
                fontSize: ".96rem",
                lineHeight: 1.65,
                color: "#ffffff",
                maxWidth: 820,
              }}
            >
              <div style={{ fontSize: ".76rem", fontWeight: 700, textTransform: "uppercase", color: "var(--gold-lt)", marginBottom: 4, letterSpacing: ".5px" }}>
                Direct Answer
              </div>
              <p style={{ margin: 0, fontWeight: 500 }}>{game.answerBox}</p>
            </div>
          )}
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
              {game.quizQuestions && (
                <InteractiveQuizGame title={game.title} questions={game.quizQuestions} />
              )}
            </div>
          </section>

          {game.sections &&
            game.sections.map((sec, idx) => (
              <section className="qaida-section" key={sec.heading} aria-labelledby={`sec-${idx}`}>
                <span className="qaida-eyebrow">Lesson Guide · Part {idx + 1}</span>
                <h2 id={`sec-${idx}`}>{sec.heading}</h2>
                <p>{sec.body}</p>
                {sec.points && (
                  <ul className="qaida-practice-steps" style={{ marginTop: "1rem" }}>
                    {sec.points.map((pt, pIdx) => (
                      <li key={pt}>
                        <span aria-hidden="true">{pIdx + 1}</span>
                        <p>{pt}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

          <section className="qaida-section" aria-labelledby="skills-heading">
            <span className="qaida-eyebrow">Learning focus</span>
            <h2 id="skills-heading">Skills this {game.title.toLowerCase()} builds</h2>
            <ul className="qaida-practice-steps">
              {game.skillFocus.map((skill, index) => (
                <li key={skill}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="qaida-section" aria-labelledby="howto-heading">
            <span className="qaida-eyebrow">Parent & teacher routine</span>
            <h2 id="howto-heading">How to use this game well</h2>
            <ol className="qaida-practice-steps">
              {game.howToUse.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <QaidaCallout title="Honest practice boundary" tone="blue">
            <p>
              This activity supports recognition and recall. It does not grade Tajweed, unlock a certificate,
              or replace live correction for uncertain Arabic sounds.
            </p>
          </QaidaCallout>

          <QaidaFaqs faqs={game.faqs} />

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
            title="Core learning links"
            links={primaryInternalLinks}
          />

          <QaidaGamesWorksheetsGrid currentHref={url} limit={6} />

          <p style={{ marginTop: "1rem" }}>
            <Link href={`${QAIDA_BASE_PATH}/guides/games`} style={{ color: "var(--emerald)", fontWeight: 650 }}>
              Read the games teaching guide
            </Link>
            {" "}for how platform-style activities fit after modelling.
          </p>

          <QaidaCourseCta
            title="Practice with a live Noorani Qaida teacher — Book a free trial"
            description="Games build recognition. Pronunciation needs a trained ear. Book a free 30-minute one-to-one lesson — no credit card — and hear how a patient tutor works with your child at their level, in your timezone."
          />
        </div>
      </div>
    </article>
  );
}
