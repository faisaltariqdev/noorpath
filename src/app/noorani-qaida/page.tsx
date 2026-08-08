import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Gamepad2, Headphones, Users } from "lucide-react";
import {
  QAIDA_BASE_PATH,
  QAIDA_GAMES,
  QAIDA_GUIDES,
  QAIDA_LESSONS,
  QAIDA_LETTERS,
  QAIDA_MODULES,
  QAIDA_TAJWEED_TOPICS,
} from "@/data/noorani-qaida";
import { validateQaidaContent } from "@/data/noorani-qaida/validate";
import ParentShareButtons from "@/components/noorani-qaida/ParentShareButtons";
import {
  QAIDA_BASE_URL,
  QaidaBreadcrumbs,
  QaidaCourseCta,
  QaidaScreenshot,
} from "@/components/noorani-qaida/QaidaSeoComponents";
import { serializeJsonLd } from "@/lib/jsonLd";

validateQaidaContent();

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Interactive Noorani Qaida for Kids | Letters, Audio Guidance & Games",
  },
  description:
    "Explore an interactive 11-module Noorani Qaida for ages 3–12: Arabic letters, Harakaat, pronunciation guidance, tracing, games, rewards, parent tips and teacher support.",
  keywords: [
    "interactive Noorani Qaida",
    "Interactive Noorani Qaida online",
    "Noorani Qaida online",
    "Noorani Qaida with audio",
    "Noorani Qaida with pronunciation",
    "Arabic alphabet for kids",
    "learn Arabic letters",
    "Noorani Qaida with animation",
    "Noorani Qaida games",
  ],
  alternates: { canonical: QAIDA_BASE_URL },
  openGraph: {
    title: "Interactive Noorani Qaida for Kids | NoorPath",
    description:
      "See NoorPath’s 11-module learning journey from Arabic letters to guided Quranic practice, with age-aware activities for children 3–12.",
    url: QAIDA_BASE_URL,
    type: "website",
    images: [{
      url: "/marketing/noorani-qaida/interactive-noorani-qaida-11-module-curriculum.png",
      width: 1024,
      height: 543,
      alt: "NoorPath interactive Noorani Qaida 11-module curriculum",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Noorani Qaida for Kids | NoorPath",
    description: "Arabic letters, Harakaat, guided pronunciation, games, practice and progress in one 11-module journey.",
    images: ["/marketing/noorani-qaida/interactive-noorani-qaida-11-module-curriculum.png"],
  },
};

const hubFaqs = [
  {
    question: "What is the Interactive Noorani Qaida?",
    answer: "It is NoorPath’s structured Interactive Noorani Qaida online learning-platform experience for ages 3–12. The 11-module journey covers Arabic letters, short and double vowels, Sukoon, Shaddah, Madd, joining, word reading, guided Quranic practice, revision, and review.",
  },
  {
    question: "Is Interactive Noorani Qaida online free to explore?",
    answer: "Yes. The public hub, letter pages, and free browser games can be opened without an account. Live one-to-one classes are a separate enrolment path with tutor matching.",
  },
  {
    question: "Does the platform replace a Quran teacher?",
    answer: "No. It supports recognition, guided practice, replay, tracing, games, and progress. A qualified teacher or approved recitation remains important for correcting uncertain pronunciation and Tajweed.",
  },
  {
    question: "Are modules or lessons locked?",
    answer: "No. Learners can open modules and lessons freely. Progress, stars, badges, and rewards acknowledge activity without blocking curriculum access.",
  },
  {
    question: "Is the platform suitable for children in the UK and USA?",
    answer: "The English-language platform can support families worldwide. Live classes for ages 4+ are arranged separately through NoorPath’s existing timezone-based tutor-matching process.",
  },
  {
    question: "Can I download a Noorani Qaida PDF here?",
    answer: "NoorPath does not currently publish a licensed PDF download. The PDF comparison guide explains how to evaluate authorised resources and combine print with interactive practice.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${QAIDA_BASE_URL}#page`,
      name: "Interactive Noorani Qaida Learning Hub",
      description: metadata.description,
      url: QAIDA_BASE_URL,
      inLanguage: ["en", "ar"],
      isPartOf: { "@id": "https://www.noorpath.online/#website" },
      about: ["Noorani Qaida", "Arabic alphabet", "Quranic Arabic reading"],
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        audienceType: "Children ages 3–12, parents, and teachers",
      },
    },
    {
      "@type": "LearningResource",
      "@id": `${QAIDA_BASE_URL}#learning-resource`,
      name: "Interactive Noorani Qaida",
      url: QAIDA_BASE_URL,
      learningResourceType: ["Curriculum guide", "Practice guide", "Educational reference"],
      educationalLevel: "Beginner",
      typicalAgeRange: "3-12",
      teaches: [
        "Arabic letter recognition",
        "Harakaat and Tanween",
        "Sukoon and Shaddah",
        "Madd",
        "Arabic letter joining",
        "Foundational word reading",
      ],
      inLanguage: ["en", "ar"],
    },
    {
      "@type": "ItemList",
      name: "Noorani Qaida 11-Module Curriculum",
      numberOfItems: QAIDA_MODULES.length,
      itemListElement: QAIDA_MODULES.map((module) => ({
        "@type": "ListItem",
        position: module.order,
        name: module.title,
        url: `https://www.noorpath.online${module.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: hubFaqs.map((faq) => ({
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
      ],
    },
  ],
};

export default function NooraniQaidaHubPage() {
  return (
    <div className="qaida-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <header className="qaida-hero">
        <div className="qaida-container qaida-hero-grid">
          <div>
            <QaidaBreadcrumbs inverse items={[{ label: "Home", href: "/" }, { label: "Noorani Qaida" }]} />
            <span className="qaida-eyebrow">Interactive Quran reading foundations · Ages 3–12</span>
            <h1>Interactive Noorani Qaida for Kids</h1>
            <p>
              Use Interactive Noorani Qaida online as a complete 11-module path from the Arabic alphabet to guided Quranic practice.
              Children can meet, listen, trace, repeat, play and review, while parents and teachers
              receive practical guidance for the same learning goal.
            </p>
            <div className="qaida-actions">
              <Link href="#curriculum" className="btn-primary-np">
                <BookOpen size={17} aria-hidden="true" /> Explore the Curriculum
              </Link>
              <Link href={`${QAIDA_BASE_PATH}/games`} className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.55)" }}>
                <Gamepad2 size={17} aria-hidden="true" /> Free Interactive Games
              </Link>
            </div>
          </div>
          <QaidaScreenshot kind="curriculum" priority />
        </div>
      </header>

      <div className="qaida-main">
        <div className="qaida-container">
          <section className="qaida-section" aria-labelledby="difference-heading">
            <span className="qaida-eyebrow">What makes this learning path different</span>
            <h2 id="difference-heading">A connected learning journey—not a folder of worksheets</h2>
            <p>
              Many search results offer a static PDF, isolated audio clips, or a class enquiry.
              NoorPath’s educational hub explains what children learn at each stage and how
              recognition, pronunciation guidance, tracing, games, revision, rewards, parent
              support and teacher feedback fit together.
            </p>
            <div className="qaida-grid qaida-grid-topics" style={{ marginTop: "1.5rem" }}>
              {[
                { icon: <Headphones aria-hidden="true" />, title: "Listen and notice", text: "Letter names, sound cues, mouth-position guidance, and explicit reminders to seek correction when uncertain." },
                { icon: <Gamepad2 aria-hidden="true" />, title: "Practise through retrieval", text: "Games target recognition, sound-symbol matching, memory, sequencing, and fluent recall rather than random tapping." },
                { icon: <Users aria-hidden="true" />, title: "Adults see the learning goal", text: "Parent and teacher notes explain what to model, what to praise, and which errors should be saved for guided correction." },
              ].map((item) => (
                <article key={item.title} className="qaida-card">
                  <span style={{ color: "var(--emerald)" }}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="curriculum" className="qaida-section" aria-labelledby="curriculum-heading">
            <span className="qaida-eyebrow">Complete sequence</span>
            <h2 id="curriculum-heading">The 11-module Noorani Qaida curriculum</h2>
            <p>
              Every module is open for exploration. The sequence still provides a sensible
              progression for teaching, while learners can revisit or preview any stage.
            </p>
            <div className="qaida-grid qaida-grid-modules" style={{ marginTop: "1.5rem" }}>
              {QAIDA_MODULES.map((module) => (
                <Link key={module.order} href={module.href} className="qaida-card">
                  <span className="qaida-module-number">Module {module.order} of 11</span>
                  <h3>{module.title}</h3>
                  <span className="arabic" lang="ar" dir="rtl" style={{ color: "var(--emerald)", fontSize: "1.2rem" }}>{module.arabicTitle}</span>
                  <p>{module.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="arabic-alphabet" className="qaida-section" aria-labelledby="alphabet-heading">
            <span className="qaida-eyebrow">Letter-by-letter reference</span>
            <h2 id="alphabet-heading">Learn all 28 Arabic letters</h2>
            <p>
              Open any letter to compare its four forms, articulation cue, example, common
              confusion, writing direction, and age-appropriate home and classroom practice.
            </p>
            <div className="qaida-grid qaida-grid-letters" dir="rtl" style={{ marginTop: "1.5rem" }}>
              {QAIDA_LETTERS.map((letter) => (
                <Link
                  key={letter.slug}
                  href={`${QAIDA_BASE_PATH}/arabic-letters/${letter.slug}`}
                  className="qaida-card qaida-letter-card"
                  aria-label={`Learn the Arabic letter ${letter.name}`}
                >
                  <span className="arabic" lang="ar">{letter.arabic}</span>
                  <span dir="ltr">
                    <strong style={{ color: "var(--charcoal)", display: "block" }}>{letter.name}</strong>
                    <small style={{ color: "var(--muted)" }}>Letter {letter.id} · {letter.sound}</small>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="lessons-heading">
            <span className="qaida-eyebrow">Reading building blocks</span>
            <h2 id="lessons-heading">Harakaat, joining, and word-reading lessons</h2>
            <div className="qaida-grid qaida-grid-topics">
              {QAIDA_LESSONS.map((topic) => (
                <Link key={topic.slug} href={`${QAIDA_BASE_PATH}/lessons/${topic.slug}`} className="qaida-card">
                  <span className="arabic" lang="ar" dir="rtl" style={{ color: "var(--emerald)", fontSize: "1.6rem" }}>{topic.arabicTitle}</span>
                  <h3>{topic.title}</h3>
                  <p>{topic.summary}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="tajweed-heading">
            <span className="qaida-eyebrow">Connected next step</span>
            <h2 id="tajweed-heading">Foundational Tajweed topics</h2>
            <p>
              These pages build terminology and recognition. They do not claim certification
              or replace listening to reviewed recitation and receiving teacher feedback.
            </p>
            <div className="qaida-grid qaida-grid-topics" style={{ marginTop: "1.5rem" }}>
              {QAIDA_TAJWEED_TOPICS.map((topic) => (
                <Link key={topic.slug} href={`${QAIDA_BASE_PATH}/tajweed/${topic.slug}`} className="qaida-card">
                  <span className="arabic" lang="ar" dir="rtl" style={{ color: "var(--emerald)", fontSize: "1.5rem" }}>{topic.arabicTitle}</span>
                  <h3>{topic.title}</h3>
                  <p>{topic.summary}</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="free-games" className="qaida-section" aria-labelledby="games-hub-heading">
            <span className="qaida-eyebrow">Ranking practice asset</span>
            <h2 id="games-hub-heading">Free Interactive Noorani Qaida Games for Kids</h2>
            <p>
              Play letter matching, a harakat quiz, and a parent progress checklist on your phone.
              No account is required. These activities reinforce recognition after a clear model.
            </p>
            <div className="qaida-grid qaida-grid-topics" style={{ marginTop: "1.5rem" }}>
              {QAIDA_GAMES.map((game) => (
                <Link key={game.slug} href={game.href} className="qaida-card">
                  <Gamepad2 size={18} aria-hidden="true" style={{ color: "var(--emerald)" }} />
                  <h3>{game.title}</h3>
                  <p>{game.summary}</p>
                  <span style={{ color: "var(--emerald)", display: "inline-flex", alignItems: "center", gap: ".3rem", fontSize: ".8rem", fontWeight: 750, marginTop: ".75rem" }}>
                    Play now <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: "1.25rem" }}>
              Prefer teaching guidance first?{" "}
              <Link href={`${QAIDA_BASE_PATH}/guides/games`} style={{ color: "var(--emerald)", fontWeight: 650 }}>
                Read the Noorani Qaida games guide
              </Link>
              {" "}or{" "}
              <Link href={`${QAIDA_BASE_PATH}/games`} style={{ color: "var(--emerald)", fontWeight: 650 }}>
                open the free games hub
              </Link>.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <ParentShareButtons
                shareText="Free Interactive Noorani Qaida Games for Kids — letter matching, harakat quiz, and a progress checklist:"
                shareUrl={`${QAIDA_BASE_URL}/games`}
              />
            </div>
            <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: ".9rem" }}>
              Know another parent teaching their child Noorani Qaida? Share this free resource with them.
            </p>
          </section>

          <section className="qaida-section" aria-labelledby="cluster-index-heading">
            <span className="qaida-eyebrow">SEO cluster map</span>
            <h2 id="cluster-index-heading">Noorani Qaida cluster index</h2>
            <p>
              Every public guide and free games hub in this cluster — reach any URL in one or two clicks
              from this hub. Commercial live classes stay on the course and kids class pages.
            </p>
            <ul
              style={{
                marginTop: "1.25rem",
                padding: 0,
                listStyle: "none",
                display: "grid",
                gap: ".55rem",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              }}
            >
              <li>
                <Link href={QAIDA_BASE_PATH} style={{ color: "var(--emerald)", fontWeight: 650 }}>
                  Interactive Noorani Qaida hub
                </Link>
              </li>
              <li>
                <Link href={`${QAIDA_BASE_PATH}/games`} style={{ color: "var(--emerald)", fontWeight: 650 }}>
                  Free Noorani Qaida learning games
                </Link>
              </li>
              <li>
                <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 650 }}>
                  Noorani Qaida online classes
                </Link>
              </li>
              {QAIDA_GUIDES.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`${QAIDA_BASE_PATH}/guides/${guide.slug}`}
                    style={{ color: "var(--emerald)", fontWeight: 650 }}
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="qaida-section" aria-labelledby="guides-heading">
            <span className="qaida-eyebrow">Support around the learner</span>
            <h2 id="guides-heading">Guides for parents, teachers, and practice</h2>
            <div className="qaida-grid qaida-grid-topics">
              {QAIDA_GUIDES.map((guide) => (
                <Link key={guide.slug} href={`${QAIDA_BASE_PATH}/guides/${guide.slug}`} className="qaida-card">
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <span style={{ color: "var(--emerald)", display: "inline-flex", alignItems: "center", gap: ".3rem", fontSize: ".8rem", fontWeight: 750, marginTop: ".75rem" }}>
                    Open guide <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="hub-faq-heading">
            <span className="qaida-eyebrow">Clear expectations</span>
            <h2 id="hub-faq-heading">Interactive Noorani Qaida questions</h2>
            <div className="qaida-faq-list">
              {hubFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="qaida-section" aria-labelledby="live-qaida-locations-heading">
            <span className="qaida-eyebrow">Live lessons</span>
            <h2 id="live-qaida-locations-heading">Ready for live Noorani Qaida with a tutor?</h2>
            <p>
              Free tools on this hub help with recognition between lessons. When you want a teacher to correct
              sounds live, request{" "}
              <Link href="/locations/online-quran-classes-uk" style={{ color: "var(--emerald)", fontWeight: 650 }}>
                Qaida lessons with UK schedule matching
              </Link>{" "}
              or{" "}
              <Link href="/locations/online-quran-classes-usa" style={{ color: "var(--emerald)", fontWeight: 650 }}>
                Noorani Qaida online for USA families
              </Link>
              . Availability is confirmed after your trial request.
            </p>
          </section>

          <QaidaCourseCta />
        </div>
      </div>
    </div>
  );
}
