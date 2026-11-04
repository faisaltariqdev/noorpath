import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  QAIDA_BASE_PATH,
  QAIDA_GAMES,
  QAIDA_GAME_BY_SLUG,
} from "@/data/noorani-qaida";
import {
  QAIDA_WORKSHEETS,
  QAIDA_WORKSHEET_BY_SLUG,
} from "@/data/noorani-qaida/worksheets";
import PrintableWorksheetView from "@/components/noorani-qaida/PrintableWorksheetView";
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
import { Check, FileDown, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ worksheet: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return QAIDA_WORKSHEETS.map((w) => ({ worksheet: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { worksheet: slug } = await params;
  const item = QAIDA_WORKSHEET_BY_SLUG[slug];
  if (!item) return {};
  const url = `https://www.noorpath.online/noorani-qaida/worksheets/${item.slug}`;
  return {
    title: { absolute: `${item.metaTitle} | NoorPath` },
    description: item.description.slice(0, 160),
    keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: item.metaTitle,
      description: item.description,
      url,
      type: "website",
      images: [
        {
          url: "/marketing/noorani-qaida/interactive-noorani-qaida-11-module-curriculum.png",
          width: 1024,
          height: 543,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.metaTitle,
      description: item.description,
      images: ["/marketing/noorani-qaida/interactive-noorani-qaida-11-module-curriculum.png"],
    },
  };
}

export default async function NooraniQaidaWorksheetPage({ params }: Props) {
  const { worksheet: slug } = await params;
  const worksheet = QAIDA_WORKSHEET_BY_SLUG[slug];
  if (!worksheet) notFound();

  const url = `https://www.noorpath.online/noorani-qaida/worksheets/${worksheet.slug}`;

  // Pick a related game based on worksheet subject
  const relatedGameSlug =
    slug === "harakat-worksheet"
      ? "harakat-quiz"
      : slug === "madd-worksheet"
      ? "madd-quiz"
      : slug === "tanween-worksheet"
      ? "tanween-quiz"
      : "letter-matching";

  const relatedGame = QAIDA_GAME_BY_SLUG[relatedGameSlug] || QAIDA_GAMES[0];

  // Exactly 3 required internal links: to /noorani-qaida, to one related game, to /courses/noorani-qaida-online
  const primaryInternalLinks = [
    {
      href: QAIDA_BASE_PATH,
      label: "Interactive Noorani Qaida Hub",
      description: "Return to the complete 11-module curriculum map and letter index.",
    },
    {
      href: relatedGame.href,
      label: relatedGame.title,
      description: `Practise ${relatedGame.summary}`,
    },
    {
      href: "/courses/noorani-qaida-online",
      label: "Live Noorani Qaida Online Classes",
      description: "Book 1-on-1 personalized lessons with certified live tutors.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${url}#resource`,
        name: worksheet.title,
        description: worksheet.description,
        url,
        learningResourceType: "Worksheet",
        educationalLevel: "Beginner",
        typicalAgeRange: "4-12",
        inLanguage: ["en", "ar"],
        isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
      },
      {
        "@type": "FAQPage",
        mainEntity: worksheet.faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 3, name: "Worksheets", item: `${QAIDA_BASE_URL}#worksheets` },
          { "@type": "ListItem", position: 4, name: worksheet.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="qaida-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <header className="qaida-hero">
        <div className="qaida-container">
          <QaidaBreadcrumbs
            inverse
            items={[
              { label: "Home", href: "/" },
              { label: "Noorani Qaida", href: QAIDA_BASE_PATH },
              { label: "Worksheets" },
              { label: worksheet.title },
            ]}
          />
          <span className="qaida-eyebrow">Free Printable Worksheet · A4 PDF · No Login</span>
          <h1 style={{ maxWidth: 880 }}>{worksheet.title}</h1>
          <p>{worksheet.seoIntro}</p>

          {/* Answer Box (40–60 words) */}
          {worksheet.answerBox && (
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
              <div
                style={{
                  fontSize: ".76rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--gold-lt)",
                  marginBottom: 4,
                  letterSpacing: ".5px",
                }}
              >
                Direct Answer
              </div>
              <p style={{ margin: 0, fontWeight: 500 }}>{worksheet.answerBox}</p>
            </div>
          )}
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          {/* Printable Worksheet Component */}
          <PrintableWorksheetView worksheet={worksheet} />

          {/* Worksheet Highlights & Features */}
          <section className="qaida-section" aria-labelledby="features-heading">
            <span className="qaida-eyebrow">Printable Features</span>
            <h2 id="features-heading">What this worksheet includes</h2>
            <ul
              className="qaida-grid qaida-grid-topics"
              style={{ listStyle: "none", marginTop: "1.25rem", padding: 0 }}
            >
              {worksheet.printableFeatures.map((feat) => (
                <li
                  className="qaida-card"
                  key={feat}
                  style={{ display: "flex", alignItems: "center", gap: ".6rem" }}
                >
                  <Check
                    size={17}
                    aria-hidden="true"
                    style={{ color: "var(--emerald)", flex: "0 0 auto" }}
                  />
                  <span style={{ color: "var(--slate)", fontSize: ".9rem" }}>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3–5 Instructional Sections */}
          {worksheet.instructionalSections.map((sec, idx) => (
            <section
              className="qaida-section"
              key={sec.heading}
              aria-labelledby={`worksheet-sec-${idx}`}
            >
              <span className="qaida-eyebrow">Teaching Guide · Part {idx + 1}</span>
              <h2 id={`worksheet-sec-${idx}`}>{sec.heading}</h2>
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

          <QaidaCallout title="Home Study Advice" tone="green">
            <p>
              Keep worksheet practice under 10 minutes per day. Pair written tracing with reading
              aloud so that hand muscle memory and ear phonetic calibration develop together.
            </p>
          </QaidaCallout>

          {/* FAQ Section */}
          <QaidaFaqs faqs={worksheet.faqs} />

          {/* Share Section */}
          <section className="qaida-section" aria-labelledby="share-worksheet-heading">
            <span className="qaida-eyebrow">Share with Parents &amp; Teachers</span>
            <h2 id="share-worksheet-heading">Know someone teaching Noorani Qaida?</h2>
            <p>
              Share this free printable resource with friends, homeschooling groups, or community
              madrasah teachers on WhatsApp.
            </p>
            <ParentShareButtons
              shareText={`Free printable ${worksheet.title}:`}
              shareUrl={url}
            />
          </section>

          {/* 3 Required Internal Links */}
          <QaidaRelatedLinks
            title="Core learning links"
            links={primaryInternalLinks}
          />

          {/* Sibling Worksheets Cross-linking */}
          <section className="qaida-section" aria-labelledby="sibling-worksheets-heading">
            <span className="qaida-eyebrow">Printable Series</span>
            <h2 id="sibling-worksheets-heading">More Noorani Qaida Printables</h2>
            <p>
              Download companion worksheets from this series for complete Arabic reading foundations:
            </p>
            <div className="qaida-grid qaida-grid-topics" style={{ marginTop: "1.25rem" }}>
              {QAIDA_WORKSHEETS.filter((w) => w.slug !== slug).map((ws) => (
                <Link key={ws.slug} href={ws.href} className="qaida-card">
                  <FileDown size={18} aria-hidden="true" style={{ color: "var(--emerald)" }} />
                  <h3>{ws.title}</h3>
                  <p>{ws.summary}</p>
                  <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".85rem", marginTop: ".5rem", display: "inline-block" }}>
                    Download Worksheet →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* More Games & Worksheets Grid */}
          <QaidaGamesWorksheetsGrid currentHref={worksheet.href} limit={6} />

          {/* Mandatory Trial CTA */}
          <QaidaCourseCta
            title="Practice with a live Noorani Qaida teacher — Book a free trial"
            description="Worksheets strengthen handwriting and visual memory. Pronunciation needs a trained teacher listening live. Book 3 free 30-minute 1-on-1 trial sessions with a patient, certified tutor in your timezone — no credit card needed."
          />
        </div>
      </div>
    </article>
  );
}
