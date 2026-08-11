import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CalendarClock,
  CheckCircle,
  ChevronRight,
  Clock,
  GraduationCap,
  MessageCircle,
  Monitor,
  ShieldCheck,
  UserCheck,
  Users,
  Video,
} from "lucide-react";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import UkQuranClassesGuide from "@/components/UkQuranClassesGuide";
import {
  BASE_URL,
  CONTACT,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  SERVICE_FACTS,
  TRIAL,
  TRUSTPILOT,
} from "@/lib/academyFacts";
import {
  ORGANIZATION_REF,
  WEBSITE_ID,
} from "@/lib/organizationSchema";
import { getCountryHubHreflang } from "@/lib/geoSeo";

export const revalidate = false;

const PAGE_URL = `${BASE_URL}/locations/online-quran-classes-uk`;

export const metadata: Metadata = {
  title: {
    absolute: "NoorPath Academy | Online Quran Classes UK — Live 1-to-1 & Free Trial",
  },
  description:
    "NoorPath Academy — live one-to-one online Quran classes in the UK for kids and adults. Request Qaida, Tajweed, Hifz or a female tutor in GMT/BST. Free 30-minute trial, no credit card.",
  keywords: [
    "online quran classes uk",
    "quran classes online uk",
    "learn quran online uk",
    "online quran tuition uk",
    "quran lessons online uk",
    "uk online quran academy",
    "online quran learning uk",
    "live quran classes uk",
    "virtual quran classes uk",
    "quran courses online uk",
    "online quran classes for kids uk",
    "female quran teacher uk",
    "online tajweed classes uk",
    "online hifz classes uk",
    "noorani qaida online uk",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: getCountryHubHreflang(),
  },
  openGraph: {
    title: "NoorPath Academy | Online Quran Classes UK — Live One-to-One Lessons",
    description:
      "UK-focused online Quran lessons for children and adults, with GMT/BST tutor matching and a free 30-minute trial request.",
    url: PAGE_URL,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/marketing/family-evening-quran.jpg",
        width: 1024,
        height: 683,
        alt: "A family preparing for an online Quran lesson at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath Academy | Online Quran Classes UK",
    description:
      "Live one-to-one lessons for UK children and adults, with GMT/BST scheduling requests and a free trial.",
    images: ["/marketing/family-evening-quran.jpg"],
  },
};

const learningPaths = [
  {
    icon: <Users size={22} />,
    title: "Quran Classes for Kids",
    description:
      "One-to-one lessons matched to a child’s current reading level, goals and attention needs.",
    href: "/online-quran-classes-for-kids",
    anchor: "Explore Quran classes for kids",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Quran Classes for Adults",
    description:
      "A private learning route for adults beginning, returning to Quran reading or improving recitation.",
    href: "/online-quran-classes-for-adults",
    anchor: "View adult Quran classes",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Noorani Qaida",
    description:
      "Arabic letters, vowel signs, joining and reading foundations for complete beginners.",
    href: "/courses/noorani-qaida-online",
    anchor: "Start Noorani Qaida online",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Tajweed Lessons",
    description:
      "Live recitation practice covering pronunciation, Makharij and the application of Tajweed rules.",
    href: "/learn-tajweed-online",
    anchor: "Learn Tajweed online",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Online Hifz",
    description:
      "Memorisation lessons with new work, recent revision and longer-term revision discussed by level.",
    href: "/hifz-quran-online",
    anchor: "Explore the online Hifz programme",
  },
  {
    icon: <UserCheck size={22} />,
    title: "Female Tutor Requests",
    description:
      "Request a female tutor for a child, sister or adult learner, subject to current availability.",
    href: "/female-quran-teacher-online",
    anchor: "Request a female Quran tutor",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share the learner’s needs",
    description:
      "Tell NoorPath who will attend, their current level, learning goal, UK timezone and preferred lesson windows.",
  },
  {
    number: "02",
    title: "Receive a tutor match",
    description:
      "NoorPath checks subject, schedule and tutor-preference availability before confirming the proposed match.",
  },
  {
    number: "03",
    title: "Attend the free trial",
    description: `The live ${TRIAL.durationMinutes}-minute trial introduces the tutor, reviews the starting level and discusses an appropriate route. No credit card is required.`,
  },
  {
    number: "04",
    title: "Confirm the recurring plan",
    description:
      "If the match is suitable, agree the lesson frequency and recurring GMT or BST time before paid enrolment.",
  },
];

const ukCities = [
  { city: "London", href: "/online-quran-classes/london" },
  { city: "Birmingham", href: "/online-quran-classes/birmingham" },
  { city: "Manchester", href: "/online-quran-classes/manchester" },
  { city: "Bradford", href: "/online-quran-classes/bradford" },
  { city: "Leeds", href: "/online-quran-classes/leeds" },
  { city: "Leicester", href: "/online-quran-classes/leicester" },
  { city: "Luton", href: "/online-quran-classes/luton" },
];

const faqs = [
  {
    question: "How do NoorPath’s online Quran classes work in the UK?",
    answer:
      "Lessons are live and one-to-one through an agreed video platform. You submit the learner’s level, course goal, GMT or BST schedule and tutor preference. NoorPath then confirms a suitable tutor and available time before the trial.",
  },
  {
    question: "Can lessons follow GMT and BST?",
    answer:
      "Yes. Share your UK timezone and preferred windows when requesting a trial. When the clocks change, confirm the recurring lesson time with NoorPath and the tutor. Exact availability is confirmed after matching.",
  },
  {
    question: "Are online Quran classes available for children?",
    answer:
      "Yes. Children can request beginner Qaida, Quran reading, Tajweed, Hifz, daily duas or Islamic studies. The starting point depends on the child’s current ability and goals.",
  },
  {
    question: "Can an adult start from the beginning?",
    answer:
      "Yes. Adults with no Arabic reading experience can request a beginner route starting with letter recognition, pronunciation and joining before moving into Quran reading.",
  },
  {
    question: "Can I request a female Quran teacher in the UK?",
    answer:
      "You can request a female tutor for a child or adult learner. NoorPath confirms female tutor, subject and GMT/BST availability before enrolment.",
  },
  {
    question: "How much do online Quran classes cost?",
    answer: `Published plans currently start at $${PRICING_PLANS[0].monthlyPriceUsd} per month. NoorPath publishes prices in USD; UK families should confirm payment details before enrolling. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} and requires no credit card.`,
  },
  {
    question: "What happens in the free trial?",
    answer:
      "The trial introduces the proposed tutor, reviews the learner’s starting level, includes a short sample lesson and discusses the most suitable learning route. A trial request does not create a paid subscription.",
  },
  {
    question: "How do I choose between Qaida, Tajweed and Hifz?",
    answer:
      "A complete beginner usually needs a reading foundation such as Noorani Qaida. A learner who can already read may focus on fluency and Tajweed. Hifz suits learners ready to memorise while maintaining structured revision.",
  },
  {
    question: "How can parents support safe online lessons?",
    answer:
      "Parents should manage arrangements for children, understand who the proposed tutor is, remain appropriately involved, use official communication channels and read the safeguarding policy before lessons begin.",
  },
  {
    question: "Does NoorPath have physical branches in UK cities?",
    answer:
      "NoorPath provides remote online lessons and does not claim physical branches in London, Birmingham, Manchester, Bradford, Leeds, Leicester or Luton.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Quran Classes UK",
      description:
        "Live one-to-one online Quran lessons for children and adults in the United Kingdom, with GMT and BST tutor matching for Qaida, Quran reading, Tajweed, Hifz and Islamic studies.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      audience: [
        {
          "@type": "PeopleAudience",
          audienceType: "Children learning Quran online in the UK",
        },
        {
          "@type": "PeopleAudience",
          audienceType: "Adult Quran learners in the UK",
        },
      ],
      offers: {
        "@type": "Offer",
        price: String(TRIAL.price),
        priceCurrency: TRIAL.priceCurrency,
        description: `${TRIAL.durationMinutes}-minute trial; no credit card required; tutor availability confirmed after request`,
        url: `${PAGE_URL}#trial`,
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      url: PAGE_URL,
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Online Quran Classes UK",
      description:
        "UK-focused information about live one-to-one Quran lessons, learning routes, GMT/BST tutor matching, pricing, safeguarding and the free trial process.",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${PAGE_URL}#service` },
      inLanguage: "en-GB",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/marketing/family-evening-quran.jpg`,
        width: 1024,
        height: 683,
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#guide`,
      headline: "Online Quran Classes UK: A Practical Guide for Families and Adults",
      description:
        "UK-specific guidance on GMT and BST scheduling, course selection, tutor checks, safeguarding, pricing and progress in online Quran classes.",
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      author: {
        "@type": "Person",
        name: "Faisal Tariq",
        url: `${BASE_URL}/founder`,
      },
      publisher: ORGANIZATION_REF,
      datePublished: "2026-07-14",
      dateModified: "2026-07-15",
      inLanguage: "en-GB",
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
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
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "Locations",
          item: `${BASE_URL}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Online Quran Classes UK",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const cardStyle = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  background: "#fff",
  padding: 24,
  boxShadow: "var(--shadow-sm)",
} as const;

export default function OnlineQuranClassesUkPage() {
  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(
    "Assalamu Alaikum. I would like to request a free online Quran trial class in the UK. Please share GMT/BST tutor availability and the next steps.",
  )}`;

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
            <Link
              href="/"
              style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}
            >
              Home
            </Link>
            <span
              aria-hidden="true"
              style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}
            >
              ›
            </span>
            <Link
              href="/locations"
              style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}
            >
              Locations
            </Link>
            <span
              aria-hidden="true"
              style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}
            >
              ›
            </span>
            <span style={{ color: "rgba(255,255,255,.65)", fontSize: ".85rem" }}>
              United Kingdom
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
                  fontWeight: 700,
                  fontSize: ".8rem",
                  letterSpacing: ".8px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                <span aria-hidden="true">🇬🇧</span> UK online Quran learning
              </span>
              <h1>Online Quran Classes UK</h1>
              <p style={{ maxWidth: 610, marginBottom: 24 }}>
                Live one-to-one Quran lessons for children and adults across
                the United Kingdom. Request Noorani Qaida, Quran reading,
                Tajweed, Hifz or Islamic studies with tutor matching around GMT
                and BST.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                  marginBottom: 24,
                }}
              >
                {[
                  "Private live lessons with real-time recitation feedback",
                  "Morning, after-school, evening or weekend time requests",
                  "Male or female tutor preference considered during matching",
                  `${TRIAL.durationMinutes}-minute free trial with no credit card`,
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <CheckCircle
                      size={18}
                      aria-hidden="true"
                      style={{
                        color: "var(--gold-lt)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <span
                      style={{
                        color: "rgba(255,255,255,.92)",
                        fontSize: ".94rem",
                        lineHeight: 1.55,
                      }}
                    >
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
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.5)",
                  }}
                >
                  Ask on WhatsApp
                </WhatsAppLink>
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,.62)",
                  fontSize: ".76rem",
                  lineHeight: 1.6,
                  marginTop: 16,
                  maxWidth: 580,
                }}
              >
                Tutor and schedule availability are confirmed after your
                request. NoorPath provides remote lessons and does not claim
                physical branches in UK cities.
              </p>
            </div>

            <div
              id="trial"
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 20,
                padding: "26px 24px",
                boxShadow: "0 24px 60px rgba(0,0,0,.35)",
                backdropFilter: "blur(6px)",
                scrollMarginTop: 100,
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 16 }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--gold)",
                    color: "var(--charcoal)",
                    fontWeight: 800,
                    fontSize: ".72rem",
                    padding: "5px 12px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                    marginBottom: 9,
                  }}
                >
                  Free {TRIAL.durationMinutes}-minute trial · No card
                </span>
                <h2
                  style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    marginBottom: 5,
                  }}
                >
                  Request Your UK Trial Class
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,.7)",
                    fontSize: ".84rem",
                    lineHeight: 1.55,
                  }}
                >
                  Share your GMT/BST lesson preferences and learning goal.
                </p>
              </div>
              <CTAForm />
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "28px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_FACTS.map((fact) => (
              <div
                key={fact.label}
                style={{ textAlign: "center", padding: "12px 8px" }}
              >
                <div
                  style={{
                    color: "var(--emerald)",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    marginBottom: 3,
                  }}
                >
                  {fact.value}
                </div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>
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
              <span className="section-eyebrow">Built around UK family life</span>
              <h2 className="section-title">
                Quran lessons that fit <em className="accent">GMT and BST</em>
              </h2>
              <p className="section-desc" style={{ maxWidth: 640 }}>
                UK learners can request lesson windows around school, work and
                family routines. Instead of publishing fixed availability,
                NoorPath checks the requested time against a suitable tutor
                before confirming the trial and recurring schedule.
              </p>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  {
                    icon: <Clock size={21} />,
                    title: "After-school and evening requests",
                    description:
                      "Share preferred weekday windows after school or work. A recurring time is confirmed only after matching.",
                  },
                  {
                    icon: <CalendarClock size={21} />,
                    title: "Weekend requests",
                    description:
                      "Saturday or Sunday preferences can be requested when weekday lessons are difficult.",
                  },
                  {
                    icon: <Monitor size={21} />,
                    title: "No travel between activities",
                    description:
                      "Lessons are remote, so learners can join from home with a suitable device, microphone and stable connection.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        color: "var(--emerald)",
                        background: "rgba(10,110,79,.08)",
                        borderRadius: 10,
                        padding: 10,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1rem",
                          marginBottom: 4,
                          color: "var(--charcoal)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--muted)",
                          fontSize: ".86rem",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 22,
                overflow: "hidden",
                minHeight: 380,
                background: "var(--ivory)",
              }}
            >
              <Image
                src="/marketing/family-evening-quran.jpg"
                alt="A parent and children using a tablet for online learning at home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <span className="section-eyebrow">Choose the right starting point</span>
            <h2 className="section-title">
              Online Quran learning paths for{" "}
              <em className="accent">UK children and adults</em>
            </h2>
            <p className="section-desc center">
              Select by learner level and goal rather than choosing a course
              only by age. The trial can help clarify the appropriate route.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                style={{ ...cardStyle, textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    color: "var(--emerald)",
                    background: "rgba(10,110,79,.08)",
                    padding: 10,
                    borderRadius: 11,
                    marginBottom: 14,
                  }}
                >
                  {path.icon}
                </div>
                <h3
                  style={{
                    color: "var(--charcoal)",
                    fontSize: "1.08rem",
                    marginBottom: 8,
                  }}
                >
                  {path.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: ".86rem",
                    lineHeight: 1.65,
                    marginBottom: 14,
                  }}
                >
                  {path.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    color: "var(--emerald)",
                    fontWeight: 700,
                    fontSize: ".82rem",
                  }}
                >
                  {path.anchor} <ChevronRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <span className="section-eyebrow">A transparent process</span>
            <h2 className="section-title">
              How UK online Quran classes <em className="accent">begin</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div key={step.number} style={cardStyle}>
                <div
                  style={{
                    color: "var(--gold)",
                    fontWeight: 800,
                    fontSize: ".78rem",
                    letterSpacing: "1px",
                    marginBottom: 12,
                  }}
                >
                  STEP {step.number}
                </div>
                <h3
                  style={{
                    color: "var(--charcoal)",
                    fontSize: "1rem",
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: ".84rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", paddingTop: 24 }}>
        <div className="max-w-[980px] mx-auto px-4">
          <header style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">Complete UK guide</span>
            <h2 className="section-title">
              Choosing online Quran classes in the{" "}
              <em className="accent">United Kingdom</em>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: 760,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Detailed British-English guidance for parents and adult learners,
              covering scheduling, learning routes, tutor checks, safeguarding,
              pricing and progress.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: ".8rem",
                marginTop: 12,
              }}
            >
              Written by{" "}
              <Link
                href="/founder"
                style={{ color: "var(--emerald)", fontWeight: 700 }}
              >
                Faisal Tariq, Founder of NoorPath
              </Link>
              {" "}· Reviewed under the{" "}
              <Link
                href="/editorial-policy"
                style={{ color: "var(--emerald)", fontWeight: 700 }}
              >
                NoorPath editorial policy
              </Link>
              {" "}· Updated 15 July 2026
            </p>
          </header>
          <UkQuranClassesGuide />
        </div>
      </section>

      <section style={{ background: "var(--emerald-dk)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="section-eyebrow"
                style={{
                  background: "rgba(255,255,255,.08)",
                  color: "var(--gold-lt)",
                  borderColor: "rgba(255,255,255,.16)",
                }}
              >
                Parent confidence
              </span>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.8rem,4vw,2.55rem)",
                  marginBottom: 16,
                }}
              >
                Questions to settle before your child’s first lesson
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,.74)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                A trustworthy arrangement should make the tutor match,
                communication route, lesson expectations and safeguarding
                responsibilities clear before enrolment.
              </p>
              <div style={{ display: "grid", gap: 11 }}>
                {[
                  "Who is the proposed tutor, and which relevant credentials can be checked?",
                  "Which adult manages communication and scheduling for the child?",
                  "Can a parent remain nearby or observe when appropriate?",
                  "How should a concern or tutor-change request be reported?",
                  "Will any recording happen, and has consent been discussed first?",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: 10,
                      color: "rgba(255,255,255,.88)",
                      fontSize: ".9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <ShieldCheck
                      size={18}
                      aria-hidden="true"
                      style={{
                        color: "var(--gold-lt)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.14)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: 18 }}>
                Verify before enrolment
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  {
                    href: "/our-tutors",
                    label: "How NoorPath handles tutor matching",
                  },
                  {
                    href: "/safeguarding",
                    label: "Read the safeguarding information",
                  },
                  {
                    href: "/privacy-policy",
                    label: "Understand how personal information is handled",
                  },
                  {
                    href: "/terms-of-service",
                    label: "Review trial, scheduling and payment terms",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      color: "#fff",
                      textDecoration: "none",
                      background: "rgba(255,255,255,.06)",
                      borderRadius: 10,
                      padding: "12px 14px",
                      fontSize: ".87rem",
                    }}
                  >
                    {item.label}
                    <ChevronRight
                      size={16}
                      aria-hidden="true"
                      style={{ color: "var(--gold-lt)", flexShrink: 0 }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <span className="section-eyebrow">Published pricing</span>
            <h2 className="section-title">
              Compare lesson frequency and{" "}
              <em className="accent">teaching time</em>
            </h2>
            <p className="section-desc center">
              NoorPath currently publishes plans in USD. UK families should
              confirm payment details before enrolling rather than relying on
              an estimated currency conversion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.name} style={cardStyle}>
                <div
                  style={{
                    color: "var(--emerald)",
                    fontWeight: 800,
                    fontSize: ".76rem",
                    letterSpacing: ".8px",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "var(--charcoal)",
                    fontWeight: 700,
                    fontSize: "2rem",
                    marginBottom: 12,
                  }}
                >
                  ${plan.monthlyPriceUsd}
                  <span
                    style={{
                      fontFamily: "inherit",
                      color: "var(--muted)",
                      fontSize: ".78rem",
                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    / month
                  </span>
                </div>
                <div style={{ display: "grid", gap: 8, marginBottom: 15 }}>
                  {[
                    `${plan.sessionsPerMonth} sessions per month`,
                    `${plan.sessionsPerWeek} session${plan.sessionsPerWeek > 1 ? "s" : ""} per week`,
                    `${plan.sessionMinutes} minutes per session`,
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        gap: 8,
                        color: "var(--slate)",
                        fontSize: ".84rem",
                      }}
                    >
                      <CheckCircle
                        size={15}
                        aria-hidden="true"
                        style={{ color: "var(--emerald)", flexShrink: 0 }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: ".82rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 22,
              padding: 18,
              borderRadius: 14,
              background: "rgba(10,110,79,.07)",
              color: "var(--slate)",
              textAlign: "center",
              fontSize: ".85rem",
              lineHeight: 1.7,
            }}
          >
            Published sibling discounts:{" "}
            {FAMILY_DISCOUNTS.map(
              ({ siblings, discountPercent }) =>
                `${siblings}: ${discountPercent}%`,
            ).join(" · ")}{" "}
            ·{" "}
            <Link href="/pricing" style={{ fontWeight: 700 }}>
              View full pricing details
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="section-eyebrow">UK city guides</span>
              <h2 className="section-title">
                Online Quran classes across the{" "}
                <em className="accent">United Kingdom</em>
              </h2>
              <p className="section-desc">
                Lessons are remote. City pages organise UK-specific searches
                and link back to this national page; they do not represent
                physical NoorPath branches.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {ukCities.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      textDecoration: "none",
                      color: "var(--emerald)",
                      background: "rgba(10,110,79,.07)",
                      border: "1px solid rgba(10,110,79,.15)",
                      borderRadius: 50,
                      padding: "9px 14px",
                      fontWeight: 700,
                      fontSize: ".82rem",
                    }}
                  >
                    Quran classes in {item.city}
                    <ChevronRight size={14} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <div style={cardStyle}>
              <h3
                style={{
                  color: "var(--charcoal)",
                  fontSize: "1.2rem",
                  marginBottom: 14,
                }}
              >
                What to compare before choosing a Quran academy
              </h3>
              <div style={{ display: "grid", gap: 11 }}>
                {[
                  "Is the lesson live, and is it genuinely one-to-one?",
                  "Does the proposed tutor fit the learner’s level and goal?",
                  "Can relevant tutor credentials be checked before enrolment?",
                  "Are safeguarding and parent responsibilities clearly explained?",
                  "Are prices, lesson lengths, cancellation terms and trial conditions visible?",
                  "Does the provider avoid guaranteed outcomes and fixed learning timelines?",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 9,
                      color: "var(--slate)",
                      fontSize: ".86rem",
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle
                      size={16}
                      aria-hidden="true"
                      style={{
                        color: "var(--emerald)",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/blog/online-quran-classes-uk-kids-guide"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 18,
                  fontWeight: 700,
                  fontSize: ".84rem",
                  textDecoration: "none",
                }}
              >
                Read the UK parent guide
                <ChevronRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ivory)" }}>
        <div className="max-w-[980px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <span className="section-eyebrow">Factual trust signals</span>
            <h2 className="section-title">
              Check NoorPath before you{" "}
              <em className="accent">request a trial</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href={TRUSTPILOT.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...cardStyle, textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  color: "var(--emerald)",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  marginBottom: 6,
                }}
              >
                {TRUSTPILOT.score} / 5 on Trustpilot
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: ".86rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Based on {TRUSTPILOT.reviewCount} public reviews, checked{" "}
                {TRUSTPILOT.lastChecked}. Open the source to read the reviews
                directly.
              </p>
            </a>
            <div style={cardStyle}>
              <h3
                style={{
                  color: "var(--charcoal)",
                  fontSize: "1.1rem",
                  marginBottom: 8,
                }}
              >
                Contact before committing
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: ".86rem",
                  lineHeight: 1.65,
                  marginBottom: 12,
                }}
              >
                Ask which tutor is proposed, which schedule is available, what
                the selected plan includes and how a change or concern is
                handled.
              </p>
              <WhatsAppLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  color: "var(--emerald)",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: ".85rem",
                }}
              >
                <MessageCircle size={17} aria-hidden="true" />
                Ask about UK tutor availability
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[980px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <span className="section-eyebrow">UK parent and learner questions</span>
            <h2 className="section-title">
              Frequently asked <em className="accent">questions</em>
            </h2>
          </div>
          <div style={{ display: "grid", gap: 13 }}>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  background: "#fff",
                  padding: "16px 18px",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    color: "var(--charcoal)",
                    fontWeight: 700,
                    fontSize: ".94rem",
                    lineHeight: 1.5,
                  }}
                >
                  {faq.question}
                </summary>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: ".87rem",
                    lineHeight: 1.75,
                    margin: "12px 0 0",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                style={{
                  color: "var(--gold-lt)",
                  fontWeight: 800,
                  fontSize: ".76rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                No card · No paid subscription
              </span>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.8rem,4vw,2.45rem)",
                  margin: "10px 0 14px",
                }}
              >
                Request a free UK Quran trial class
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,.74)",
                  lineHeight: 1.8,
                  marginBottom: 22,
                  maxWidth: 560,
                }}
              >
                Share the learner’s level, course goal and preferred GMT/BST
                windows. NoorPath will confirm tutor and schedule availability
                after reviewing the request.
              </p>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  [<Video size={18} key="video" />, "Live one-to-one trial"],
                  [
                    <Clock size={18} key="clock" />,
                    `${TRIAL.durationMinutes} minutes`,
                  ],
                  [
                    <ShieldCheck size={18} key="shield" />,
                    "Privacy and terms linked before submission",
                  ],
                ].map(([icon, label]) => (
                  <div
                    key={String(label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      color: "rgba(255,255,255,.88)",
                      fontSize: ".88rem",
                    }}
                  >
                    <span style={{ color: "var(--gold-lt)" }}>{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-form-wrap">
              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.25rem",
                  textAlign: "center",
                  marginBottom: 18,
                }}
              >
                Request Your Free Trial
              </h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
