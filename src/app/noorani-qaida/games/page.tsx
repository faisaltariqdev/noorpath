import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Gamepad2 } from "lucide-react";
import {
  QAIDA_BASE_PATH,
  QAIDA_GAMES,
  QAIDA_GAMES_HUB_FAQS,
} from "@/data/noorani-qaida";
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

export const revalidate = false;

const pageUrl = `${QAIDA_BASE_URL}/games`;
const title = "Free Noorani Qaida Games Online for Kids";
const description =
  "Play free Noorani Qaida games online: Arabic letter matching, harakat quiz, and a parent progress checklist. Mobile-friendly practice for ages 3–12 — no login.";

export const metadata: Metadata = {
  title: { absolute: `${title} | NoorPath` },
  description,
  keywords: [
    "noorani qaida games",
    "free noorani qaida games online",
    "arabic alphabet games for kids",
    "noorani qaida letter game",
    "arabic harakat game for kids",
    "noorani qaida practice quiz",
    "interactive quran games for kids",
    "free arabic letter games",
    "noorani qaida for beginners kids",
    "learn arabic letters online free",
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
      alt: "Free Noorani Qaida games for kids — letter matching and practice",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/marketing/noorani-qaida/noorani-qaida-practice-games.png"],
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
      inLanguage: ["en", "ar"],
      isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
      about: ["Noorani Qaida", "Arabic alphabet games", "Harakat practice"],
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        audienceType: "Children ages 3–12 and parents",
      },
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
        description: game.summary,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: QAIDA_GAMES_HUB_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
          <span className="qaida-eyebrow">Free interactive practice · Ages 3–12 · No login</span>
          <h1 style={{ maxWidth: 860 }}>{title}</h1>
          <p>
            Free <strong>Noorani Qaida games</strong> for letter recognition, Arabic harakat (Fatha, Kasra, Damma),
            and a parent progress checklist. Built for phones, short sessions, and calm practice between live lessons —
            without replacing a teacher for pronunciation correction.
          </p>
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="why-games-heading">
            <span className="qaida-eyebrow">Why games help Qaida stick</span>
            <h2 id="why-games-heading">What free Noorani Qaida games should actually practise</h2>
            <p>
              Useful Arabic alphabet games for kids target one skill at a time: find a letter, match a name,
              notice a vowel mark, or recall what has already been covered. Random colourful tapping without a
              learning goal wastes attention. NoorPath’s free games keep the goal visible and link back to the
              full <Link href={QAIDA_BASE_PATH}>interactive Noorani Qaida hub</Link> and lesson pages.
            </p>
            <ul className="qaida-practice-steps" style={{ marginTop: "1.25rem" }}>
              {[
                "Recognition before production — point or tap the correct form before demanding a perfect sound.",
                "Small distractor sets — two or three nearby letters beat a crowded screen.",
                "Short rounds — stop while the child still feels successful.",
                "Teacher correction for uncertain articulation — games do not certify Tajweed.",
              ].map((item, index) => (
                <li key={item}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="qaida-section" aria-labelledby="games-list-heading">
            <span className="qaida-eyebrow">Choose a game</span>
            <h2 id="games-list-heading">Playable Noorani Qaida activities</h2>
            <p>
              Start with the letter matching game if the alphabet is still new. Use the harakat quiz once letters
              are familiar. Use the progress checklist anytime you want a clear parent overview.
            </p>
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

          <section className="qaida-section" aria-labelledby="how-parents-heading">
            <span className="qaida-eyebrow">Parent routine</span>
            <h2 id="how-parents-heading">How to use these Arabic learning games at home</h2>
            <div className="qaida-note-grid">
              <QaidaCallout title="5-minute routine">
                <p>
                  One known success → one new target → 3–5 game rounds → stop. Pair with the matching{" "}
                  <Link href={`${QAIDA_BASE_PATH}/arabic-letters/alif`}>letter page</Link> or{" "}
                  <Link href={`${QAIDA_BASE_PATH}/lessons/fatha`}>Fatha lesson</Link> when you need deeper explanation.
                </p>
              </QaidaCallout>
              <QaidaCallout title="What games cannot do" tone="gold">
                <p>
                  They cannot replace live listening for hard letters (ع، ح، ق، ص، ض) or decide that a child is
                  “finished” Qaida. Use them as retrieval practice between lessons.
                </p>
              </QaidaCallout>
            </div>
            <ul style={{ marginTop: "1.25rem", color: "var(--slate)", lineHeight: 1.7 }}>
              {[
                "Open the free games hub on your phone during after-school wind-down.",
                "Let the child choose the next round only after one careful attempt.",
                "Praise looking and listening — not only speed.",
                "Share the link with another parent if they are also teaching Noorani Qaida at home.",
              ].map((tip) => (
                <li key={tip} style={{ display: "flex", gap: ".55rem", marginBottom: ".55rem" }}>
                  <CheckCircle2 size={18} aria-hidden="true" style={{ color: "var(--emerald)", flex: "0 0 auto", marginTop: ".15rem" }} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="qaida-section" aria-labelledby="keywords-cluster-heading">
            <span className="qaida-eyebrow">Related practice paths</span>
            <h2 id="keywords-cluster-heading">From games to full Noorani Qaida learning</h2>
            <p>
              Families searching for <strong>Noorani Qaida games</strong>, <strong>Arabic alphabet games for kids</strong>,
              or a <strong>Noorani Qaida practice quiz</strong> usually need both play and structure. Continue with:
            </p>
            <div className="qaida-grid qaida-grid-topics" style={{ marginTop: "1.25rem" }}>
              <Link href={QAIDA_BASE_PATH} className="qaida-card">
                <h3>Interactive Noorani Qaida hub</h3>
                <p>11-module path, all 28 letters, Harakaat, joining, and revision guides.</p>
              </Link>
              <Link href={`${QAIDA_BASE_PATH}/guides/games`} className="qaida-card">
                <h3>Games teaching guide</h3>
                <p>How Bubble Pop–style activities fit after modelling a skill.</p>
              </Link>
              <Link href="/blog/interactive-noorani-qaida-kids-studio" className="qaida-card">
                <h3>Kids Studio interactive Qaida</h3>
                <p>Parent guide for children who know sounds but stall on joining.</p>
              </Link>
              <Link href="/blog/how-long-does-noorani-qaida-take" className="qaida-card">
                <h3>How long Noorani Qaida takes</h3>
                <p>Realistic timelines by age — without racing the booklet.</p>
              </Link>
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

          <QaidaFaqs faqs={[...QAIDA_GAMES_HUB_FAQS]} />

          <QaidaRelatedLinks
            title="Keep learning"
            links={[
              { href: QAIDA_BASE_PATH, label: "Interactive Noorani Qaida hub", description: "Open the full 11-module path and letter index." },
              { href: `${QAIDA_BASE_PATH}/guides/games`, label: "Games teaching guide", description: "How to use games after modelling a skill." },
              { href: `${QAIDA_BASE_PATH}/arabic-letters/alif`, label: "Start with Alif", description: "Open the first letter reference page." },
              { href: `${QAIDA_BASE_PATH}/lessons/fatha`, label: "Fatha lesson", description: "Review the first short vowel before the harakat quiz." },
              { href: "/courses/noorani-qaida-online", label: "Live Noorani Qaida classes", description: "Book one-to-one lessons with tutor matching." },
            ]}
          />

          <QaidaCourseCta />
        </div>
      </div>
    </div>
  );
}
