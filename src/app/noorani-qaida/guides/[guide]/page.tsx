import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  QAIDA_BASE_PATH,
  QAIDA_GUIDE_BY_SLUG,
  QAIDA_GUIDES,
} from "@/data/noorani-qaida";
import {
  QAIDA_BASE_URL,
  QaidaBreadcrumbs,
  QaidaCallout,
  QaidaCourseCta,
  QaidaFaqs,
  QaidaRelatedLinks,
  QaidaScreenshot,
} from "@/components/noorani-qaida/QaidaSeoComponents";
import { serializeJsonLd } from "@/lib/jsonLd";

interface Props {
  params: Promise<{ guide: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return QAIDA_GUIDES.map((guide) => ({ guide: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = QAIDA_GUIDE_BY_SLUG[slug];
  if (!guide) return {};
  const url = `${QAIDA_BASE_URL}/guides/${guide.slug}`;
  return {
    title: { absolute: `${guide.title} | NoorPath` },
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      type: "article",
      images: [{
        url: guide.image === "bubble"
          ? "/marketing/noorani-qaida/arabic-letter-bubble-pop-game.png"
          : guide.image === "games"
            ? "/marketing/noorani-qaida/noorani-qaida-practice-games.png"
            : "/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png",
        width: 1024,
        height: guide.image === "bubble" ? 350 : guide.image === "games" ? 533 : 488,
        alt: guide.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [guide.image === "bubble"
        ? "/marketing/noorani-qaida/arabic-letter-bubble-pop-game.png"
        : "/marketing/noorani-qaida/noorani-qaida-practice-games.png"],
    },
  };
}

export default async function NooraniQaidaGuidePage({ params }: Props) {
  const { guide: slug } = await params;
  const guide = QAIDA_GUIDE_BY_SLUG[slug];
  if (!guide) notFound();

  const index = QAIDA_GUIDES.findIndex((item) => item.slug === guide.slug);
  const previous = index > 0 ? QAIDA_GUIDES[index - 1] : null;
  const next = index < QAIDA_GUIDES.length - 1 ? QAIDA_GUIDES[index + 1] : null;
  const url = `${QAIDA_BASE_URL}/guides/${guide.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${url}#resource`,
        name: guide.title,
        description: guide.description,
        url,
        learningResourceType: "Educational guide",
        educationalUse: ["Instruction", "Practice", "Parent and teacher support"],
        audience: { "@type": "Audience", audienceType: guide.audience },
        inLanguage: "en",
        isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 3, name: "Guides", item: `${QAIDA_BASE_URL}#guides-heading` },
          { "@type": "ListItem", position: 4, name: guide.title, item: url },
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
              { label: "Guides", href: `${QAIDA_BASE_PATH}#guides-heading` },
              { label: guide.title },
            ]}
          />
          <span className="qaida-eyebrow">{guide.audience}</span>
          <h1 style={{ maxWidth: 850 }}>{guide.title}</h1>
          <p>{guide.description}</p>
          <div className="qaida-actions">
            {previous && (
              <Link href={`${QAIDA_BASE_PATH}/guides/${previous.slug}`} className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.55)" }}>
                <ArrowLeft size={16} aria-hidden="true" /> {previous.title}
              </Link>
            )}
            {next && (
              <Link href={`${QAIDA_BASE_PATH}/guides/${next.slug}`} className="btn-primary-np">
                Next guide <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="guide-introduction-heading">
            <span className="qaida-eyebrow">Practical guidance</span>
            <h2 id="guide-introduction-heading">How to use this guide</h2>
            <p>{guide.introduction}</p>
          </section>

          {guide.sections.map((section, sectionIndex) => (
            <section className="qaida-section" aria-labelledby={`guide-section-${sectionIndex}`} key={section.heading}>
              <span className="qaida-eyebrow">Step {sectionIndex + 1}</span>
              <h2 id={`guide-section-${sectionIndex}`}>{section.heading}</h2>
              <p>{section.body}</p>
              {section.points && (
                <ul className="qaida-grid qaida-grid-topics" style={{ listStyle: "none", marginTop: "1.25rem", padding: 0 }}>
                  {section.points.map((point) => (
                    <li className="qaida-card" key={point} style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
                      <Check size={17} aria-hidden="true" style={{ color: "var(--emerald)", flex: "0 0 auto" }} />
                      <span style={{ color: "var(--slate)", fontSize: ".88rem" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {guide.image && (
            <section className="qaida-section" aria-labelledby="guide-preview-heading">
              <span className="qaida-eyebrow">Platform preview</span>
              <h2 id="guide-preview-heading">See the learning approach</h2>
              <p>
                This screenshot documents NoorPath’s learning-platform experience.
                It is shown for educational and product context and does not link to
                a public playable demo.
              </p>
              <div style={{ marginTop: "1.5rem" }}><QaidaScreenshot kind={guide.image} /></div>
              {guide.slug === "games" && (
                <div style={{ marginTop: "1.5rem" }}><QaidaScreenshot kind="games" /></div>
              )}
            </section>
          )}

          <section className="qaida-section" aria-labelledby="checklist-heading">
            <span className="qaida-eyebrow">Keep beside the lesson</span>
            <h2 id="checklist-heading">{guide.title} checklist</h2>
            <ul className="qaida-practice-steps">
              {guide.checklist.map((item, itemIndex) => (
                <li key={item}>
                  <span aria-hidden="true">{itemIndex + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          {guide.slug === "pronunciation" && (
            <QaidaCallout title="Review-status disclosure" tone="blue">
              <p>
                The admin curriculum currently marks pronunciation content as pending
                formal Qari review. Public copy therefore describes audio guidance and
                live teacher correction without claiming reviewed recordings.
              </p>
            </QaidaCallout>
          )}

          <QaidaFaqs faqs={guide.faqs} />

          <QaidaRelatedLinks
            title="Continue exploring"
            links={[
              { href: QAIDA_BASE_PATH, label: "Interactive Noorani Qaida hub", description: "Explore the full 11-module path." },
              { href: `${QAIDA_BASE_PATH}/arabic-letters/alif`, label: "Start with Alif", description: "Open the first complete letter reference." },
              { href: `${QAIDA_BASE_PATH}/lessons/fatha`, label: "Learn Fatha", description: "See the first short-vowel lesson." },
              { href: "/blog/noorani-qaida-complete-guide", label: "Traditional Noorani Qaida guide", description: "Read the editorial overview of the method." },
            ]}
          />

          <QaidaCourseCta />
        </div>
      </div>
    </article>
  );
}
