import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { QAIDA_BASE_PATH, QAIDA_GAMES } from "@/data/noorani-qaida";
import ParentShareButtons from "@/components/noorani-qaida/ParentShareButtons";
import {
  QAIDA_BASE_URL,
  QaidaBreadcrumbs,
  QaidaCourseCta,
  QaidaRelatedLinks,
} from "@/components/noorani-qaida/QaidaSeoComponents";
import { serializeJsonLd } from "@/lib/jsonLd";

export const revalidate = false;

const pageUrl = `${QAIDA_BASE_URL}/games`;
const title = "Free Noorani Qaida Games Online for Kids";
const description =
  "Play free Noorani Qaida games online: Arabic letter matching, harakat quiz, and a parent progress checklist. Mobile-friendly practice for ages 3–12.";

export const metadata: Metadata = {
  title: { absolute: `${title} | NoorPath` },
  description,
  keywords: [
    "noorani qaida games",
    "free arabic letter games",
    "noorani qaida practice quiz",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    images: [{
      url: "/marketing/noorani-qaida/noorani-qaida-practice-games.png",
      width: 1024,
      height: 533,
      alt: "Noorani Qaida practice games",
    }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#page`,
      name: title,
      description,
      url: pageUrl,
      isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
    },
    {
      "@type": "ItemList",
      name: "Free Noorani Qaida interactive games",
      numberOfItems: QAIDA_GAMES.length,
      itemListElement: QAIDA_GAMES.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.title,
        url: `https://www.noorpath.online${game.href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Noorani Qaida", item: QAIDA_BASE_URL },
        { "@type": "ListItem", position: 3, name: "Games", item: pageUrl },
      ],
    },
  ],
};

export default function NooraniQaidaGamesHubPage() {
  return (
    <div className="qaida-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <header className="qaida-hero">
        <div className="qaida-container">
          <QaidaBreadcrumbs
            inverse
            items={[
              { label: "Home", href: "/" },
              { label: "Noorani Qaida", href: QAIDA_BASE_PATH },
              { label: "Games" },
            ]}
          />
          <span className="qaida-eyebrow">Free interactive practice · Ages 3–12</span>
          <h1 style={{ maxWidth: 820 }}>{title}</h1>
          <p>
            Short, mobile-friendly games for letter recognition, vowel marks, and parent tracking.
            No account is required. These activities support practice — they do not replace a teacher for pronunciation correction.
          </p>
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="games-list-heading">
            <span className="qaida-eyebrow">Choose a game</span>
            <h2 id="games-list-heading">Playable Noorani Qaida activities</h2>
            <div className="qaida-grid qaida-grid-topics" style={{ marginTop: "1.5rem" }}>
              {QAIDA_GAMES.map((game) => (
                <Link key={game.slug} href={game.href} className="qaida-card">
                  <Gamepad2 size={20} aria-hidden="true" style={{ color: "var(--emerald)" }} />
                  <h3>{game.title}</h3>
                  <p>{game.summary}</p>
                  <span style={{ color: "var(--emerald)", display: "inline-flex", alignItems: "center", gap: ".3rem", fontSize: ".8rem", fontWeight: 750, marginTop: ".75rem" }}>
                    Play now <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="share-games-heading">
            <span className="qaida-eyebrow">Parent to parent</span>
            <h2 id="share-games-heading">Know another parent teaching Noorani Qaida?</h2>
            <p>
              Share this free resource with them — in a WhatsApp family chat or an Islamic parenting group you already trust.
              Only share where helpful practice links are welcome.
            </p>
            <ParentShareButtons
              shareText="Free interactive Noorani Qaida games for kids (letter matching, harakat quiz, progress checklist):"
              shareUrl={pageUrl}
            />
          </section>

          <QaidaRelatedLinks
            title="Keep learning"
            links={[
              { href: QAIDA_BASE_PATH, label: "Interactive Noorani Qaida hub", description: "Open the full 11-module path and letter index." },
              { href: `${QAIDA_BASE_PATH}/guides/games`, label: "Games teaching guide", description: "How to use games after modelling a skill." },
              { href: `${QAIDA_BASE_PATH}/arabic-letters/alif`, label: "Start with Alif", description: "Open the first letter reference page." },
              { href: `${QAIDA_BASE_PATH}/lessons/fatha`, label: "Fatha lesson", description: "Review the first short vowel before the harakat quiz." },
            ]}
          />

          <QaidaCourseCta />
        </div>
      </div>
    </div>
  );
}
