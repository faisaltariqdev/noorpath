import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, PencilLine, Volume2 } from "lucide-react";
import {
  QAIDA_BASE_PATH,
  QAIDA_LETTER_BY_SLUG,
  QAIDA_LETTERS,
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
  params: Promise<{ letter: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return QAIDA_LETTERS.map((letter) => ({ letter: letter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { letter: slug } = await params;
  const letter = QAIDA_LETTER_BY_SLUG[slug];
  if (!letter) return {};

  const url = `${QAIDA_BASE_URL}/arabic-letters/${letter.slug}`;
  const title = `${letter.name} (${letter.arabic}) Arabic Letter: Sound, Forms & Pronunciation`;
  const description = `Learn the Arabic letter ${letter.name} (${letter.arabic}): sound, four joining forms, makhraj, writing cue, example, common confusion, and practice tips for kids.`;
  return {
    title: { absolute: `${title} | NoorPath` },
    description,
    keywords: letter.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{
        url: "/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png",
        width: 1024,
        height: 488,
        alt: `NoorPath Arabic letter lesson interface for ${letter.name}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png"],
    },
  };
}

export default async function ArabicLetterPage({ params }: Props) {
  const { letter: slug } = await params;
  const letter = QAIDA_LETTER_BY_SLUG[slug];
  if (!letter) notFound();

  const index = QAIDA_LETTERS.findIndex((item) => item.slug === letter.slug);
  const previous = index > 0 ? QAIDA_LETTERS[index - 1] : null;
  const next = index < QAIDA_LETTERS.length - 1 ? QAIDA_LETTERS[index + 1] : null;
  const url = `${QAIDA_BASE_URL}/arabic-letters/${letter.slug}`;
  const faqs = [
    {
      question: `How is the Arabic letter ${letter.name} pronounced?`,
      answer: `${letter.name} is represented here as “${letter.sound}”. Its articulation cue is: ${letter.makhraj}. English spelling is only an approximation, so use an approved audible model or teacher correction for accuracy.`,
    },
    {
      question: `What are the four forms of ${letter.name}?`,
      answer: `The isolated, initial, medial, and final teaching forms shown on this page are ${letter.forms.join("، ")}. The exact form used depends on position and whether neighbouring letters connect.`,
    },
    {
      question: `What can children confuse with ${letter.name}?`,
      answer: letter.commonConfusion,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${url}#resource`,
        name: `${letter.name} (${letter.arabic}) Arabic Letter Guide`,
        description: `A beginner guide to ${letter.name}, including joining forms, articulation, writing, examples, and practice.`,
        url,
        learningResourceType: "Arabic letter reference",
        educationalLevel: "Beginner",
        typicalAgeRange: "3-12",
        teaches: [
          `${letter.name} letter recognition`,
          `${letter.name} joining forms`,
          `${letter.name} articulation`,
        ],
        inLanguage: ["en", "ar"],
        isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 3, name: "Arabic Letters", item: `${QAIDA_BASE_URL}#arabic-alphabet` },
          { "@type": "ListItem", position: 4, name: letter.name, item: url },
        ],
      },
    ],
  };

  return (
    <article className="qaida-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <header className="qaida-hero">
        <div className="qaida-container qaida-hero-grid">
          <div>
            <QaidaBreadcrumbs
              inverse
              items={[
                { label: "Home", href: "/" },
                { label: "Noorani Qaida", href: QAIDA_BASE_PATH },
                { label: "Arabic Letters", href: `${QAIDA_BASE_PATH}#arabic-alphabet` },
                { label: letter.name },
              ]}
            />
            <span className="qaida-eyebrow">Arabic letter {letter.id} of 28</span>
            <h1>{letter.name} ({letter.arabic}) Arabic Letter</h1>
            <p>
              Learn how to recognise {letter.name}, compare its joining forms,
              understand its articulation cue, and practise it without confusing
              visual recognition with verified pronunciation.
            </p>
            <div className="qaida-actions">
              {previous && (
                <Link href={`${QAIDA_BASE_PATH}/arabic-letters/${previous.slug}`} className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.55)" }}>
                  <ArrowLeft size={16} aria-hidden="true" /> {previous.name}
                </Link>
              )}
              {next && (
                <Link href={`${QAIDA_BASE_PATH}/arabic-letters/${next.slug}`} className="btn-primary-np">
                  Next: {next.name} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
          <div className="qaida-arabic-hero" aria-label={`Arabic letter ${letter.name}`}>
            <span lang="ar" dir="rtl">{letter.arabic}</span>
          </div>
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="recognise-heading">
            <span className="qaida-eyebrow">Recognise the shape</span>
            <h2 id="recognise-heading">What does {letter.name} look like?</h2>
            <p>{letter.shapeGuide} {letter.childPrompt}</p>
            <div className="qaida-forms" style={{ marginTop: "1.5rem" }} dir="rtl">
              {(["Isolated", "Initial", "Medial", "Final"] as const).map((label, formIndex) => (
                <div className="qaida-form" key={label}>
                  <b lang="ar">{letter.forms[formIndex]}</b>
                  <span dir="ltr">{label} form</span>
                </div>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="sound-heading">
            <span className="qaida-eyebrow">Sound and articulation</span>
            <h2 id="sound-heading">How to approach the {letter.name} sound</h2>
            <p>
              The compact transliteration cue is <strong>“{letter.sound}”</strong>,
              but transliteration cannot reproduce every Arabic sound. The physical
              orientation for this letter is: <strong>{letter.makhraj}</strong>.
              Listen to an approved model and ask a teacher to verify uncertain attempts.
            </p>
            <div className="qaida-note-grid" style={{ marginTop: "1.5rem" }}>
              <QaidaCallout title="Common confusion" tone="gold">
                <p>{letter.commonConfusion}</p>
              </QaidaCallout>
              <QaidaCallout title="Safe practice rule" tone="blue">
                <p>Use the cue to direct attention, not to force the mouth or throat. Pause if repeated attempts create tension.</p>
              </QaidaCallout>
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="example-heading">
            <span className="qaida-eyebrow">See it in context</span>
            <h2 id="example-heading">{letter.name} example</h2>
            <div className="qaida-example-grid">
              <div className="qaida-example">
                <span className="arabic" lang="ar" dir="rtl">{letter.example}</span>
                <strong>{letter.exampleMeaning}</strong>
                <small>Example containing {letter.name}</small>
              </div>
              <div className="qaida-example">
                <span className="arabic" lang="ar" dir="rtl">{letter.arabic}</span>
                <strong>{letter.name}</strong>
                <small>Approximate sound cue: {letter.sound}</small>
              </div>
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="writing-heading">
            <span className="qaida-eyebrow">Writing and recall</span>
            <h2 id="writing-heading">Practise writing and finding {letter.name}</h2>
            <p><PencilLine size={18} aria-hidden="true" style={{ display: "inline", marginRight: ".4rem" }} />{letter.writingCue}</p>
            <ol className="qaida-practice-steps" style={{ marginTop: "1.5rem" }}>
              {[
                `Point to ${letter.name} among two familiar letters.`,
                `Name its dots and the stable part of its shape.`,
                `Trace the main body before adding dots.`,
                `Find ${letter.name} in its example and one joined form.`,
              ].map((step, stepIndex) => (
                <li key={step}>
                  <span aria-hidden="true">{stepIndex + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {letter.id === 1 && (
            <section className="qaida-section" aria-labelledby="platform-preview-heading">
              <span className="qaida-eyebrow">Learning platform preview</span>
              <h2 id="platform-preview-heading">How an interactive letter lesson is organised</h2>
              <p>
                The NoorPath platform separates meeting the letter, hearing a model,
                tracing, repeating, playing, and reviewing. Rewards record activity;
                they do not lock other letters or modules.
              </p>
              <div style={{ marginTop: "1.5rem" }}><QaidaScreenshot kind="lesson" /></div>
            </section>
          )}

          <section className="qaida-section" aria-labelledby="adult-guidance-heading">
            <span className="qaida-eyebrow">Support the learner</span>
            <h2 id="adult-guidance-heading">Parent and teacher guidance</h2>
            <div className="qaida-note-grid">
              <QaidaCallout title="For parents">
                <p>{letter.parentTip}</p>
              </QaidaCallout>
              <QaidaCallout title="For teachers" tone="gold">
                <p>{letter.teacherTip}</p>
              </QaidaCallout>
            </div>
          </section>

          <QaidaFaqs faqs={faqs} />

          <QaidaRelatedLinks
            title={`Continue learning after ${letter.name}`}
            links={[
              ...(next ? [{ href: `${QAIDA_BASE_PATH}/arabic-letters/${next.slug}`, label: `Next letter: ${next.name}`, description: `Compare ${letter.name} with ${next.name}.` }] : []),
              { href: `${QAIDA_BASE_PATH}/lessons/fatha`, label: "Add Fatha", description: "See how a short vowel gives a consonant its reading sound." },
              { href: `${QAIDA_BASE_PATH}/lessons/joining-letters`, label: "Joining Arabic letters", description: "Understand initial, medial, and final forms." },
              { href: `${QAIDA_BASE_PATH}/guides/pronunciation`, label: "Pronunciation guide", description: "Use transliteration, audio guidance, and teacher feedback responsibly." },
            ]}
          />

          <QaidaCallout title="Audio and pronunciation note" tone="blue">
            <p><Volume2 size={17} aria-hidden="true" style={{ display: "inline", marginRight: ".4rem" }} />NoorPath does not label public audio as Qari-reviewed until specific files complete formal review. Live classes remain the correction route for uncertain sounds.</p>
          </QaidaCallout>
          <QaidaCourseCta title={`Want a teacher to guide ${letter.name} pronunciation?`} />
        </div>
      </div>
    </article>
  );
}
