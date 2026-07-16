import Link from "next/link";
import { AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import {
  QAIDA_BASE_PATH,
  QAIDA_LESSONS,
  QAIDA_TAJWEED_TOPICS,
  type QaidaTopic,
} from "@/data/noorani-qaida";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  QAIDA_BASE_URL,
  QaidaBreadcrumbs,
  QaidaCallout,
  QaidaCourseCta,
  QaidaFaqs,
  QaidaPracticeSteps,
  QaidaRelatedLinks,
  QaidaScreenshot,
} from "./QaidaSeoComponents";

export default function QaidaTopicPage({ topic }: { topic: QaidaTopic }) {
  const collection = topic.category === "lesson" ? QAIDA_LESSONS : QAIDA_TAJWEED_TOPICS;
  const segment = topic.category === "lesson" ? "lessons" : "tajweed";
  const index = collection.findIndex((item) => item.slug === topic.slug);
  const previous = index > 0 ? collection[index - 1] : null;
  const next = index < collection.length - 1 ? collection[index + 1] : null;
  const url = `${QAIDA_BASE_URL}/${segment}/${topic.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${url}#resource`,
        name: `${topic.title} Beginner Guide`,
        description: topic.summary,
        url,
        learningResourceType: topic.category === "lesson" ? "Noorani Qaida lesson" : "Tajweed foundation guide",
        educationalLevel: "Beginner",
        typicalAgeRange: "3-12",
        teaches: [topic.title, topic.summary, ...topic.practiceSteps],
        inLanguage: ["en", "ar"],
        isPartOf: { "@id": `${QAIDA_BASE_URL}#learning-resource` },
      },
      {
        "@type": "FAQPage",
        mainEntity: topic.faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 3, name: topic.category === "lesson" ? "Lessons" : "Tajweed", item: `${QAIDA_BASE_URL}#${topic.category === "lesson" ? "curriculum" : "tajweed-heading"}` },
          { "@type": "ListItem", position: 4, name: topic.title, item: url },
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
                { label: topic.category === "lesson" ? "Lessons" : "Tajweed", href: QAIDA_BASE_PATH },
                { label: topic.title },
              ]}
            />
            <span className="qaida-eyebrow">{topic.module} · Beginner guide</span>
            <h1>{topic.title}: A Beginner&apos;s Guide</h1>
            <p>{topic.summary} This page explains what to notice, how to practise, common mistakes, and when teacher correction matters.</p>
            <div className="qaida-actions">
              {previous && (
                <Link href={`${QAIDA_BASE_PATH}/${segment}/${previous.slug}`} className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.55)" }}>
                  <ArrowLeft size={16} aria-hidden="true" /> {previous.title}
                </Link>
              )}
              {next && (
                <Link href={`${QAIDA_BASE_PATH}/${segment}/${next.slug}`} className="btn-primary-np">
                  Next: {next.title} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
          <div className="qaida-arabic-hero" aria-label={`${topic.title} in Arabic`}>
            <span lang="ar" dir="rtl" style={{ fontSize: "clamp(3.8rem, 10vw, 7rem)" }}>{topic.arabicTitle}</span>
          </div>
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="understand-heading">
            <span className="qaida-eyebrow">Understand the rule</span>
            <h2 id="understand-heading">What is {topic.title}?</h2>
            <p>{topic.explanation}</p>
            <div className="qaida-note-grid" style={{ marginTop: "1.5rem" }}>
              <QaidaCallout title="Mouth and sound cue">
                <p>{topic.mouthGuide}</p>
              </QaidaCallout>
              <QaidaCallout title="Writing and reading cue" tone="blue">
                <p>{topic.writingGuide}</p>
              </QaidaCallout>
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="examples-heading">
            <span className="qaida-eyebrow">Worked examples</span>
            <h2 id="examples-heading">{topic.title} examples</h2>
            <div className="qaida-example-grid">
              {topic.examples.map((example) => (
                <div className="qaida-example" key={`${example.arabic}-${example.transliteration}`}>
                  <span className="arabic" lang="ar" dir="rtl">{example.arabic}</span>
                  <strong>{example.transliteration}</strong>
                  {example.meaning && <small>{example.meaning}</small>}
                </div>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="practice-heading">
            <span className="qaida-eyebrow">Short, focused practice</span>
            <h2 id="practice-heading">How to practise {topic.title}</h2>
            <QaidaPracticeSteps steps={topic.practiceSteps} />
          </section>

          <QaidaCallout title="Common mistake to watch" tone="gold">
            <p><AlertCircle size={17} aria-hidden="true" style={{ display: "inline", marginRight: ".4rem" }} />{topic.commonMistake}</p>
          </QaidaCallout>

          <section className="qaida-section" aria-labelledby="guidance-heading">
            <span className="qaida-eyebrow">Adult guidance</span>
            <h2 id="guidance-heading">Support at home and in class</h2>
            <div className="qaida-note-grid">
              <QaidaCallout title="For parents">
                <p>{topic.parentTip}</p>
              </QaidaCallout>
              <QaidaCallout title="For teachers" tone="gold">
                <p>{topic.teacherTip}</p>
              </QaidaCallout>
            </div>
          </section>

          {topic.slug === "fatha" && (
            <section className="qaida-section" aria-labelledby="lesson-preview-heading">
              <span className="qaida-eyebrow">Platform context</span>
              <h2 id="lesson-preview-heading">From explanation to guided activity</h2>
              <p>
                NoorPath’s lesson layout keeps the current target visible while practice
                changes from listening and tracing to games and review. The screenshot is
                a product preview, not a public playable demo.
              </p>
              <div style={{ marginTop: "1.5rem" }}><QaidaScreenshot kind="lesson" /></div>
            </section>
          )}

          <QaidaFaqs faqs={topic.faqs} />

          <QaidaRelatedLinks
            title="Related learning resources"
            links={[
              ...(previous ? [{ href: `${QAIDA_BASE_PATH}/${segment}/${previous.slug}`, label: previous.title, description: "Review the preceding concept." }] : []),
              ...(next ? [{ href: `${QAIDA_BASE_PATH}/${segment}/${next.slug}`, label: next.title, description: "Continue to the next concept." }] : []),
              { href: `${QAIDA_BASE_PATH}/guides/practice`, label: "Practice guide", description: "Build a short recognise, model, retrieve, and review routine." },
              { href: topic.category === "tajweed" ? "/learn-tajweed-online" : `${QAIDA_BASE_PATH}/guides/pronunciation`, label: topic.category === "tajweed" ? "Live Tajweed classes" : "Pronunciation guide", description: "Know when audible modelling and teacher feedback matter." },
            ]}
          />

          <QaidaCourseCta
            title={topic.category === "tajweed" ? "Ready for teacher-guided Tajweed?" : `Want guided help with ${topic.title}?`}
            description={topic.category === "tajweed"
              ? "Explore live one-to-one Tajweed classes for learners ready to apply these foundations with corrective feedback."
              : "Live Noorani Qaida classes for ages 4+ connect the written rule to modelled reading and individual correction."}
          />
        </div>
      </div>
    </article>
  );
}
