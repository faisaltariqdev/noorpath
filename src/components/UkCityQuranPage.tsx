import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CalendarClock,
  CheckCircle,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import CountryQuranClassesGuide from "@/components/CountryQuranClassesGuide";
import { getCityGuide } from "@/data/cityGuides";
import {
  BASE_URL,
  CONTACT,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  SERVICE_FACTS,
  TRIAL,
} from "@/lib/academyFacts";
import {
  ORGANIZATION_REF,
  WEBSITE_ID,
} from "@/lib/organizationSchema";

export interface UkCityPageConfig {
  city: string;
  slug: string;
  description: string;
  heroCopy: string;
  localHeading: string;
  localParagraphs: [string, string];
  scheduleNotes: [string, string, string];
  relatedCities: Array<{ city: string; href: string }>;
  relatedCourse: { href: string; label: string };
  imageAlt: string;
  localQuestion: string;
  localAnswer: string;
  keywords: string[];
}

export function createUkCityMetadata(config: UkCityPageConfig): Metadata {
  const pageUrl = `${BASE_URL}/online-quran-classes/${config.slug}`;
  return {
    title: {
      absolute: `Online Quran Classes ${config.city} | Live 1-to-1 & Free Trial`,
    },
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `Online Quran Classes ${config.city} — Live One-to-One Lessons`,
      description: config.description,
      url: pageUrl,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: "/marketing/family-evening-quran.jpg",
          width: 1024,
          height: 683,
          alt: config.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Online Quran Classes ${config.city} | NoorPath`,
      description: config.description,
      images: ["/marketing/family-evening-quran.jpg"],
    },
  };
}

const learningPaths = [
  {
    icon: <Users size={21} />,
    title: "Quran Classes for Kids",
    description:
      "One-to-one lessons matched to the child’s current reading level and learning goal.",
    href: "/online-quran-classes-for-kids",
  },
  {
    icon: <UserCheck size={21} />,
    title: "Adult Quran Lessons",
    description:
      "Private lessons for adults beginning, returning to reading or improving recitation.",
    href: "/online-quran-classes-for-adults",
  },
  {
    icon: <BookOpen size={21} />,
    title: "Noorani Qaida",
    description:
      "Arabic letters, vowel signs, joining and reading foundations for beginners.",
    href: "/courses/noorani-qaida-online",
  },
  {
    icon: <GraduationCap size={21} />,
    title: "Tajweed Lessons",
    description:
      "Live pronunciation and recitation practice with correction during the lesson.",
    href: "/learn-tajweed-online",
  },
  {
    icon: <BookOpen size={21} />,
    title: "Online Hifz",
    description:
      "Memorisation support that considers new work and structured revision.",
    href: "/hifz-quran-online",
  },
  {
    icon: <UserCheck size={21} />,
    title: "Female Tutor Requests",
    description:
      "Request a female tutor, subject to subject and GMT/BST availability.",
    href: "/female-quran-teacher-online",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Send your requirements",
    text: "Share the learner’s current level, goal, preferred UK lesson windows and tutor preference.",
  },
  {
    number: "02",
    title: "Receive a proposed match",
    text: "NoorPath checks subject and schedule availability before confirming a tutor.",
  },
  {
    number: "03",
    title: "Attend the trial",
    text: `Use the ${TRIAL.durationMinutes}-minute live trial to meet the tutor, review the starting level and discuss the learning route.`,
  },
  {
    number: "04",
    title: "Confirm recurring lessons",
    text: "If the match is suitable, agree the lesson frequency and GMT/BST time before paid enrolment.",
  },
];

function buildFaqs(config: UkCityPageConfig) {
  return [
    {
      question: `How do online Quran classes work in ${config.city}?`,
      answer: `Lessons are live and one-to-one through an agreed video platform. Submit the learner’s level, course goal, GMT/BST schedule and tutor preference. NoorPath confirms the proposed tutor and available time before the trial.`,
    },
    {
      question: `Can children take online Quran classes in ${config.city}?`,
      answer:
        "Yes. Children can request Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas or Islamic studies. The appropriate starting point depends on current ability and goals.",
    },
    {
      question: `Can adults learn Quran online from ${config.city}?`,
      answer:
        "Yes. Adults can start from Arabic letters, return to Quran reading, improve Tajweed or discuss a suitable memorisation route.",
    },
    {
      question: `Can I request a female Quran teacher in ${config.city}?`,
      answer:
        "Yes. Share the female tutor preference in the trial form. NoorPath confirms tutor, subject and GMT/BST availability before enrolment.",
    },
    {
      question: `How much do online Quran lessons cost in ${config.city}?`,
      answer: `Published plans currently start at $${PRICING_PLANS[0].monthlyPriceUsd} per month. Prices are published in USD, so UK families should confirm payment details before enrolling. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} and requires no credit card.`,
    },
    {
      question: `Can I request after-school or weekend Quran lessons in ${config.city}?`,
      answer:
        "Yes. Weekday after-school, evening and weekend windows can be requested. A recurring lesson time is confirmed only after a suitable tutor is matched.",
    },
    {
      question: "What happens during the free trial?",
      answer:
        "The trial introduces the proposed tutor, reviews the learner’s starting point, includes a short sample lesson and discusses the most suitable route. It does not create a paid subscription.",
    },
    {
      question: config.localQuestion,
      answer: config.localAnswer,
    },
  ];
}

const cardStyle = {
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: 23,
  boxShadow: "var(--shadow-sm)",
} as const;

export default function UkCityQuranPage({
  config,
}: {
  config: UkCityPageConfig;
}) {
  const pageUrl = `${BASE_URL}/online-quran-classes/${config.slug}`;
  const faqs = buildFaqs(config);
  const cityGuide = getCityGuide(config.slug);
  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    `Assalamu Alaikum. I would like to request a free online Quran trial class for a learner in ${config.city}. Please share GMT/BST tutor availability and the next steps.`,
  )}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Online Quran Classes ${config.city}`,
        description: config.description,
        provider: ORGANIZATION_REF,
        serviceType: "Online Quran Education",
        areaServed: {
          "@type": "City",
          name: config.city,
          containedInPlace: {
            "@type": "Country",
            name: "United Kingdom",
          },
        },
        offers: {
          "@type": "Offer",
          price: String(TRIAL.price),
          priceCurrency: TRIAL.priceCurrency,
          description: `${TRIAL.durationMinutes}-minute trial; no credit card required; availability confirmed after request`,
          url: `${pageUrl}#trial`,
        },
        termsOfService: `${BASE_URL}/terms-of-service`,
        url: pageUrl,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Online Quran Classes ${config.city}`,
        description: config.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${pageUrl}#service` },
        inLanguage: "en-GB",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      ...(cityGuide
        ? [
            {
              "@type": "Article",
              headline: cityGuide.title,
              description: cityGuide.description,
              mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
              author: ORGANIZATION_REF,
              publisher: ORGANIZATION_REF,
              dateModified: "2026-07-15",
              inLanguage: "en-GB",
              about: { "@id": `${pageUrl}#service` },
            },
          ]
        : []),
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: "en-GB",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Online Quran Classes UK",
            item: `${BASE_URL}/locations/online-quran-classes-uk`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: config.city,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 18 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
              Home
            </Link>
            <span aria-hidden="true" style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>
              ›
            </span>
            <Link
              href="/locations/online-quran-classes-uk"
              style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}
            >
              Online Quran Classes UK
            </Link>
            <span aria-hidden="true" style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>
              ›
            </span>
            <span style={{ color: "rgba(255,255,255,.65)", fontSize: ".85rem" }}>
              {config.city}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--gold-lt)",
                  fontSize: ".78rem",
                  fontWeight: 800,
                  letterSpacing: ".8px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                <span aria-hidden="true">🇬🇧</span> Remote lessons · GMT/BST
              </span>
              <h1>Online Quran Classes {config.city}</h1>
              <p style={{ maxWidth: 600, marginBottom: 22 }}>{config.heroCopy}</p>
              <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
                {[
                  "Live one-to-one lessons with real-time recitation feedback",
                  "Kids, adults and complete beginners can request a suitable route",
                  "Female tutor requests considered during matching",
                  `${TRIAL.durationMinutes}-minute free trial with no credit card`,
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <CheckCircle
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--gold-lt)", flexShrink: 0, marginTop: 2 }}
                    />
                    <span style={{ color: "rgba(255,255,255,.9)", fontSize: ".92rem", lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#trial" className="btn-primary-np">
                  Request a Free Trial
                </a>
                <WhatsAppLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
                >
                  Ask on WhatsApp
                </WhatsAppLink>
              </div>
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".75rem", lineHeight: 1.6, marginTop: 16 }}>
                NoorPath provides remote lessons and does not claim a physical
                branch or local teaching centre in {config.city}.
              </p>
            </div>

            <div
              id="trial"
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 20,
                padding: "25px 23px",
                boxShadow: "0 24px 60px rgba(0,0,0,.35)",
                backdropFilter: "blur(6px)",
                scrollMarginTop: 100,
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 15 }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--gold)",
                    color: "var(--charcoal)",
                    fontWeight: 800,
                    fontSize: ".71rem",
                    padding: "5px 12px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    marginBottom: 9,
                  }}
                >
                  Free {TRIAL.durationMinutes}-minute trial · No card
                </span>
                <h2 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: 5 }}>
                  Request a {config.city} Trial
                </h2>
                <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".82rem" }}>
                  Share the learner’s level and preferred GMT/BST windows.
                </p>
              </div>
              <CTAForm />
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "28px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SERVICE_FACTS.map((fact) => (
              <div key={fact.label} style={{ textAlign: "center", padding: "11px 8px" }}>
                <div style={{ color: "var(--emerald)", fontWeight: 800, fontSize: "1.2rem" }}>
                  {fact.value}
                </div>
                <div style={{ color: "var(--muted)", fontSize: ".76rem", marginTop: 3 }}>
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Local scheduling context</span>
              <h2 className="section-title">{config.localHeading}</h2>
              {config.localParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}
                >
                  {paragraph}
                </p>
              ))}
              <div style={{ display: "grid", gap: 10, marginTop: 20 }}>
                {config.scheduleNotes.map((note) => (
                  <div key={note} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <CalendarClock
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 2 }}
                    />
                    <span style={{ color: "var(--slate)", fontSize: ".87rem", lineHeight: 1.6 }}>
                      {note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", minHeight: 380, borderRadius: 22, overflow: "hidden" }}>
              <Image
                src="/marketing/family-evening-quran.jpg"
                alt={config.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {cityGuide && (
        <section style={{ background: "var(--ivory)" }}>
          <div className="max-w-[1000px] mx-auto px-4">
            <CountryQuranClassesGuide
              guide={cityGuide}
              eyebrow="City learning guide"
            />
          </div>
        </section>
      )}

      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">Learning routes</span>
            <h2 className="section-title">
              Quran lessons for {config.city}{" "}
              <em className="accent">children and adults</em>
            </h2>
            <p className="section-desc center">
              Choose the starting point by current ability and learning goal.
              The trial can help clarify which route is appropriate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                style={{ ...cardStyle, display: "block", textDecoration: "none" }}
              >
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{path.icon}</div>
                <h3 style={{ color: "var(--charcoal)", fontSize: "1.03rem", marginBottom: 7 }}>
                  {path.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.65, marginBottom: 12 }}>
                  {path.description}
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--emerald)", fontWeight: 700, fontSize: ".8rem" }}>
                  View learning route <ChevronRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">From request to recurring lesson</span>
            <h2 className="section-title">
              How online Quran classes <em className="accent">begin</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div key={step.number} style={cardStyle}>
                <div style={{ color: "var(--gold)", fontWeight: 800, fontSize: ".75rem", marginBottom: 11 }}>
                  STEP {step.number}
                </div>
                <h3 style={{ color: "var(--charcoal)", fontSize: ".98rem", marginBottom: 7 }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".82rem", lineHeight: 1.65, margin: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--emerald-dk)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span
                className="section-eyebrow"
                style={{ background: "rgba(255,255,255,.08)", color: "var(--gold-lt)", borderColor: "rgba(255,255,255,.16)" }}
              >
                Parent confidence
              </span>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.75rem,4vw,2.4rem)", marginBottom: 15 }}>
                Safeguarding questions to settle before enrolment
              </h2>
              <div style={{ display: "grid", gap: 11 }}>
                {[
                  "Who is the proposed tutor, and which relevant credentials can be checked?",
                  "How should a parent manage scheduling and communication for a child?",
                  "Can a parent remain nearby or observe when appropriate?",
                  "How should a concern or tutor-change request be reported?",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 9, color: "rgba(255,255,255,.88)", fontSize: ".88rem", lineHeight: 1.6 }}>
                    <ShieldCheck
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--gold-lt)", flexShrink: 0, marginTop: 2 }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 18, padding: 26 }}>
              <h3 style={{ color: "#fff", fontSize: "1.15rem", marginBottom: 14 }}>
                Verify NoorPath’s policies
              </h3>
              {[
                ["/our-tutors", "Tutor matching information"],
                ["/safeguarding", "Safeguarding guidance"],
                ["/privacy-policy", "Privacy policy"],
                ["/terms-of-service", "Trial and service terms"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", textDecoration: "none", padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,.1)", fontSize: ".86rem" }}
                >
                  {label}
                  <ChevronRight size={15} aria-hidden="true" style={{ color: "var(--gold-lt)" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <span className="section-eyebrow">Published plans</span>
            <h2 className="section-title">
              Compare lesson time and <em className="accent">frequency</em>
            </h2>
            <p className="section-desc center">
              Prices are currently published in USD. UK families should confirm
              payment details before enrolment rather than relying on an
              estimated currency conversion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.name} style={cardStyle}>
                <div style={{ color: "var(--emerald)", fontWeight: 800, fontSize: ".74rem", textTransform: "uppercase" }}>
                  {plan.name}
                </div>
                <div style={{ color: "var(--charcoal)", fontFamily: "'Playfair Display',serif", fontSize: "1.9rem", fontWeight: 700, margin: "7px 0 11px" }}>
                  ${plan.monthlyPriceUsd}
                  <span style={{ color: "var(--muted)", fontSize: ".76rem", fontWeight: 500 }}> / month</span>
                </div>
                <p style={{ color: "var(--slate)", fontSize: ".84rem", lineHeight: 1.7, marginBottom: 9 }}>
                  {plan.sessionsPerMonth} sessions monthly · {plan.sessionMinutes} minutes each
                </p>
                <p style={{ color: "var(--muted)", fontSize: ".81rem", lineHeight: 1.6, margin: 0 }}>
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--muted)", textAlign: "center", fontSize: ".82rem", marginTop: 20, lineHeight: 1.7 }}>
            Sibling discounts:{" "}
            {FAMILY_DISCOUNTS.map(({ siblings, discountPercent }) => `${siblings}: ${discountPercent}%`).join(" · ")}{" "}
            · <Link href="/pricing" style={{ fontWeight: 700 }}>View full pricing</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="section-eyebrow">UK internal links</span>
              <h2 className="section-title">
                Related online Quran class pages
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                <Link
                  href="/locations/online-quran-classes-uk"
                  style={{ ...cardStyle, textDecoration: "none", color: "var(--charcoal)", fontWeight: 700 }}
                >
                  Online Quran Classes UK
                </Link>
                {config.relatedCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    style={{ ...cardStyle, textDecoration: "none", color: "var(--charcoal)", fontWeight: 700 }}
                  >
                    Online Quran Classes {city.city}
                  </Link>
                ))}
                <Link
                  href={config.relatedCourse.href}
                  style={{ ...cardStyle, textDecoration: "none", color: "var(--charcoal)", fontWeight: 700 }}
                >
                  {config.relatedCourse.label}
                </Link>
              </div>
            </div>
            <div>
              <span className="section-eyebrow">Questions</span>
              <h2 className="section-title">
                Frequently asked <em className="accent">questions</em>
              </h2>
              <div style={{ display: "grid", gap: 11 }}>
                {faqs.map((faq) => (
                  <details key={faq.question} style={{ border: "1px solid var(--border)", borderRadius: 13, padding: "14px 16px", background: "#fff" }}>
                    <summary style={{ cursor: "pointer", color: "var(--charcoal)", fontWeight: 700, fontSize: ".9rem", lineHeight: 1.5 }}>
                      {faq.question}
                    </summary>
                    <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.7, margin: "10px 0 0" }}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <span style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            No card · Availability confirmed after request
          </span>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.4rem)", margin: "10px 0 14px" }}>
            Request a free Quran trial in {config.city}
          </h2>
          <p style={{ color: "rgba(255,255,255,.74)", lineHeight: 1.75, maxWidth: 680, margin: "0 auto 24px" }}>
            Share the learner’s level, course goal and preferred GMT/BST
            windows. NoorPath will confirm tutor and schedule availability.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="#trial" className="btn-primary-np">
              Request Free Trial
            </a>
            <WhatsAppLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
            >
              <MessageCircle size={17} aria-hidden="true" />
              Ask on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
