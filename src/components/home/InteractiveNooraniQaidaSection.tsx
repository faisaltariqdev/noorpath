import Link from "next/link";
import {
  BookOpen,
  CheckCircle,
  Gamepad2,
  GraduationCap,
  Headphones,
  Heart,
  Shield,
  Star,
  Users,
  Video,
} from "lucide-react";
import { NOORANI_QAIDA_LIVE_PREVIEW_URL } from "@/lib/nooraniQaidaPlatform";
import { serializeJsonLd } from "@/lib/jsonLd";

const BASE = "https://www.noorpath.online";
const SECTION_ID = "interactive-noorani-qaida";

const trustBadges = [
  { icon: Gamepad2, label: "Interactive Learning" },
  { icon: Star, label: "Gamified Lessons" },
  { icon: Headphones, label: "Audio Pronunciation" },
  { icon: GraduationCap, label: "Qualified Tutors" },
  { icon: Heart, label: "Kids Friendly" },
  { icon: Shield, label: "Parent Approved" },
  { icon: Users, label: "Teacher Guided" },
  { icon: BookOpen, label: "Self Learning" },
] as const;

const conversionBadges = [
  "No Credit Card Required",
  "Qualified Tutors",
  "Kids Ages 3–12",
  "Flexible Timings",
] as const;

const comparisonRows = [
  { feature: "Guided audio pronunciation", pdf: false, platform: true },
  { feature: "Letter recognition games", pdf: false, platform: true },
  { feature: "Arabic tracing practice", pdf: false, platform: true },
  { feature: "Visible progress tracking", pdf: false, platform: true },
  { feature: "Stars, badges and rewards", pdf: false, platform: true },
  { feature: "Makharij and sound guidance", pdf: "Limited", platform: true },
  { feature: "Live teacher support", pdf: false, platform: true },
  { feature: "Parent and teacher notes", pdf: false, platform: true },
  { feature: "Open curriculum navigation", pdf: "Static pages", platform: true },
  { feature: "Mobile-friendly practice", pdf: "Varies", platform: true },
] as const;

const faqs = [
  {
    question: "What is Noorani Qaida?",
    answer:
      "Noorani Qaida is the structured beginner pathway for learning to read Arabic as used in the Quran. It introduces the Arabic alphabet, Harakaat, Tanween, Sukoon, Shaddah, Madd, joining, and early word reading before full Quranic recitation.",
  },
  {
    question: "Why should children learn Noorani Qaida?",
    answer:
      "Children build Arabic letter recognition, sound-symbol links, and reading confidence step by step. A clear sequence reduces guesswork and helps parents and teachers see which skill comes next — from isolated letters to joined words.",
  },
  {
    question: "What age should kids start?",
    answer:
      "NoorPath’s interactive reference is designed for ages 3–12, with age-appropriate prompts, tracing, and games. Live one-to-one classes are arranged separately from age 4+, depending on tutor availability and the child’s readiness.",
  },
  {
    question: "Does this include audio?",
    answer:
      "The platform includes listen-and-repeat guidance for letter sounds and lesson flow. It supports practice and replay; uncertain pronunciation should still be checked with a qualified teacher or approved recitation model.",
  },
  {
    question: "Can parents use it?",
    answer:
      "Yes. Parent notes explain what to model at home, what to praise, and which errors are better saved for guided correction — so practice stays calm and purposeful between lessons.",
  },
  {
    question: "Can teachers use it?",
    answer:
      "Yes. Teacher guidance aligns classroom or online sessions with the same module sequence, games, and revision goals so instruction and self-practice reinforce each other.",
  },
  {
    question: "What is the difference between a PDF and an interactive Qaida?",
    answer:
      "A traditional Noorani Qaida PDF is useful for reference and print practice, but it cannot respond, track progress, or offer games and tracing in one flow. NoorPath’s digital pathway connects recognition, pronunciation guidance, writing practice, and revision in a single 11-module journey.",
  },
  {
    question: "How does tracing help Arabic learning?",
    answer:
      "Tracing strengthens letter shape memory and writing direction before children read joined words. It turns visual recognition into motor memory — especially helpful for young learners meeting Arabic script for the first time.",
  },
  {
    question: "How do games improve Arabic learning?",
    answer:
      "Short games target retrieval: finding a letter, matching sound to symbol, sequencing, and memory — not random tapping. That repetition builds fluency faster than passive reading alone.",
  },
  {
    question: "Can adults also use this?",
    answer:
      "Yes. Beginners of any age can use the letter guides, pronunciation cues, and practice structure. Many adults pair the interactive reference with live Tajweed or reading classes for correction and accountability.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Interactive Noorani Qaida",
          item: `${BASE}/#${SECTION_ID}`,
        },
      ],
    },
    {
      "@type": "EducationalApplication",
      "@id": `${BASE}/#noorani-qaida-platform`,
      name: "NoorPath Interactive Noorani Qaida",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Interactive curriculum reference; live classes booked separately.",
      },
      educationalUse: "Noorani Qaida, Arabic alphabet, Arabic phonics, Quran reading preparation",
      typicalAgeRange: "3-12",
      inLanguage: ["en", "ar"],
      url: `${BASE}/noorani-qaida`,
      isPartOf: { "@id": `${BASE}/#organization` },
    },
    {
      "@type": "Course",
      name: "Noorani Qaida Online",
      description:
        "Live and self-paced pathways for learning the Arabic alphabet, Harakaat, and Quran reading foundations.",
      provider: { "@id": `${BASE}/#organization` },
      url: `${BASE}/courses/noorani-qaida-online`,
      courseMode: "online",
      educationalLevel: "Beginner",
      teaches: [
        "Arabic alphabet",
        "Arabic phonics",
        "Noorani Qaida",
        "Quran reading for beginners",
      ],
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "Flexible",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function InteractiveNooraniQaidaSection() {
  return (
    <article
      id={SECTION_ID}
      className="home-qaida-section"
      aria-labelledby="interactive-qaida-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section
        className="home-qaida-panel"
        aria-label="Interactive Noorani Qaida overview"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-eyebrow">
                Interactive Noorani Qaida · Digital Arabic learning · Ages 3–12
              </span>
              <h2 id="interactive-qaida-heading" className="section-title">
                Interactive Noorani Qaida for Kids — Learn the{" "}
                <em className="accent">Arabic Alphabet</em>, Pronunciation, Tracing &amp; Games
              </h2>

              <div className="home-qaida-prose section-desc">
                <p>
                  NoorPath combines an{" "}
                  <Link href="/noorani-qaida">
                    <strong>Interactive Noorani Qaida</strong>
                  </Link>{" "}
                  with <Link href="/online-quran-classes">online Quran learning</Link> for families
                  in the UK, USA, Canada, Australia, and worldwide. Children meet each Arabic
                  letter with English names, <strong>Arabic phonics</strong>, and{" "}
                  <strong>Makharij</strong> cues — then move through Harakaat, joining, and early
                  word reading without relying on a static PDF alone.
                </p>
                <p>
                  Free{" "}
                  <Link href="/noorani-qaida/games">
                    <strong>Arabic Learning Games</strong>
                  </Link>{" "}
                  on the practice hub:{" "}
                  <Link href="/noorani-qaida/games">interactive letter matching</Link>, a{" "}
                  <Link href="/noorani-qaida/games/harakat-quiz">harakat quiz</Link>, and a{" "}
                  <Link href="/noorani-qaida/games/progress-checklist">parent progress checklist</Link>
                  — plus guides on{" "}
                  <Link href="/noorani-qaida/guides/gamified-learning">gamified Quran learning</Link>{" "}
                  and{" "}
                  <Link href="/noorani-qaida/guides/arabic-alphabet-practice">
                    Digital Qaida practice
                  </Link>{" "}
                  for online Arabic alphabet work. No account required.
                </p>
                <details className="home-qaida-more">
                  <summary>How the 11-module learning journey works</summary>
                  <p>
                    Think of it as a structured <strong>interactive ebook</strong> and{" "}
                    <strong>Arabic learning app experience</strong> on the web: listen, trace,
                    repeat, play memory games, and review progress in one place. Parents and
                    teachers see why each activity exists, while children build{" "}
                    <strong>letter recognition</strong>, <strong>Arabic pronunciation</strong>, and
                    <strong> Arabic writing practice</strong> at a calm pace.
                  </p>
                  <p>
                    The 11-module journey supports <strong>Quran reading for beginners</strong> and
                    <strong> kids Quran learning</strong> before live correction. Families can pair
                    it with{" "}
                    <Link href="/courses/noorani-qaida-online">Noorani Qaida online classes</Link>,{" "}
                    <Link href="/online-quran-classes-for-kids">Quran classes for kids</Link>,{" "}
                    <Link href="/quran-teacher-online">an online Quran tutor</Link>, or{" "}
                    <Link href="/courses/arabic-language-online">Arabic classes</Link>.
                  </p>
                </details>
              </div>

              <h3 className="home-qaida-subheading">What children practise in each lesson</h3>
              <ul className="home-qaida-checklist">
                {[
                  "All 28 Arabic letters with English names and four joining forms",
                  "Arabic sounds, Harakaat, and guided pronunciation replay",
                  "Tracing, writing cues, and reading preparation activities",
                  "Letter games, memory games, stars, badges, and visible progress",
                  "Parent and teacher guidance beside every module",
                ].map((point) => (
                  <li key={point}>
                    <CheckCircle size={18} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="home-qaida-conversion-badges" aria-label="Enrollment highlights">
                {conversionBadges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>

              <div className="home-qaida-cta-row">
                <Link href="/noorani-qaida" className="btn-primary-np">
                  Explore Interactive Noorani Qaida
                </Link>
                <Link href="/noorani-qaida/games" className="btn-outline-np">
                  <Gamepad2 size={16} aria-hidden="true" /> Free Interactive Noorani Qaida Games for Kids
                </Link>
                <a
                  href={NOORANI_QAIDA_LIVE_PREVIEW_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-outline-np"
                  aria-label="Open the interactive Alif lesson live demo in a new tab"
                >
                  <Video size={16} aria-hidden="true" /> View Live Demo
                </a>
                <Link href="/online-quran-classes" className="btn-outline-np">
                  View Live Quran Classes
                </Link>
              </div>

              <p className="home-qaida-disclaimer">
                Platform reference for ages 3–12. Live{" "}
                <Link href="/pricing">class pricing</Link> and tutor matching are arranged
                separately for children ages 4+. Read more on our{" "}
                <Link href="/blog">Quran learning blog</Link> or{" "}
                <Link href="/contact">contact</Link> the team with questions.
              </p>
            </div>

            <figure className="qaida-screenshot qaida-screenshot--video">
              <a
                href={NOORANI_QAIDA_LIVE_PREVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="qaida-video-link"
                aria-label="Open the interactive Noorani Qaida lesson preview — click to try the Alif lesson"
              >
                <video
                  src="/marketing/noorani-qaida/noorani-qaida-platform-preview.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  className="qaida-preview-video"
                  poster="/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png"
                />
                <span className="qaida-video-play-hint" aria-hidden="true">
                  <span className="qaida-video-play-icon">▶</span>
                  Try the live lesson
                </span>
              </a>
              <figcaption>
                NoorPath learning platform: one Arabic letter, multiple practice modes, and
                visible progress — a practical Noorani Qaida PDF alternative for families.
              </figcaption>
            </figure>
          </div>

          <ul className="home-qaida-trust-grid" aria-label="Platform strengths">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <section aria-labelledby="qaida-comparison-heading" className="home-qaida-compare-wrap">
            <h3 id="qaida-comparison-heading" className="home-qaida-subheading center">
              Why families choose an interactive Qaida
            </h3>
            <p className="home-qaida-compare-intro">
              Many families search for a <strong>Noorani Qaida PDF</strong> or printable booklet.
              Print still has value — but interactive practice adds audio, tracing, games, and
              progress that paper alone cannot provide.
            </p>
            <details className="home-qaida-comparison">
              <summary>Compare NoorPath with a traditional PDF</summary>
              <div className="home-qaida-table-scroll" role="region" aria-label="PDF versus interactive comparison" tabIndex={0}>
                <table className="home-qaida-compare-table">
                  <caption className="sr-only">
                    Comparison of traditional Noorani Qaida PDF and NoorPath interactive platform
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Feature</th>
                      <th scope="col">Traditional PDF</th>
                      <th scope="col">NoorPath Interactive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.feature}>
                        <th scope="row">{row.feature}</th>
                        <td>
                          {typeof row.pdf === "string" ? (
                            row.pdf
                          ) : (
                            <span className="home-qaida-no" aria-label="Not included">—</span>
                          )}
                        </td>
                        <td>
                          <span className="home-qaida-yes" aria-label="Included">✓</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </section>

          <aside className="home-qaida-aside" aria-label="Quick links for families and teachers">
            <blockquote cite={`${BASE}/noorani-qaida`}>
              <p>
                &ldquo;Islamic education for young readers works best when recognition, sound,
                writing, and revision stay connected — not scattered across unrelated worksheets.&rdquo;
              </p>
            </blockquote>
            <p>
              Explore the full hub:{" "}
              <Link href="/noorani-qaida">Interactive Noorani Qaida</Link> ·{" "}
              <Link href="/noorani-qaida/games">Arabic Learning Games</Link> ·{" "}
              <Link href="/noorani-qaida/guides/digital-quran-learning-platform">
                Digital Quran Learning Platform
              </Link>{" "}
              · <Link href="/noorani-qaida/guides/with-animation">Qaida with animation</Link> ·{" "}
              <Link href="/noorani-qaida/guides/games">Practice games guide</Link> ·{" "}
              <Link href="/noorani-qaida/guides/for-parents">Parent guide</Link> ·{" "}
              <Link href="/islamic-resources">Islamic resources</Link>
            </p>
          </aside>
        </div>
      </section>

      <section className="home-qaida-faq-section" aria-labelledby="home-qaida-faq-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <h3 id="home-qaida-faq-heading" className="home-qaida-subheading center">
            Noorani Qaida questions for parents and teachers
          </h3>
          <div className="home-qaida-faq-list qaida-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
