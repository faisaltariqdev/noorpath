import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CalendarClock,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Home,
  MessageCircle,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import LocationConversionBar from "@/components/LocationConversionBar";
import FaqJsonLd from "@/components/FaqJsonLd";
import {
  BASE_URL,
  CANCELLATION_NOTICE_DAYS,
  CONTACT,
  FAMILY_DISCOUNTS,
  PARENT_POLICY_FACTS,
  PRICING_PLANS,
  REFUND_WINDOW_DAYS,
  SERVICE_FACTS,
  TRIAL,
  TRIAL_OFFER,
  TUTOR_FACTS,
} from "@/lib/academyFacts";
import { ORGANIZATION_REF, WEBSITE_ID } from "@/lib/organizationSchema";
import { getCountryHubHreflang } from "@/lib/geoSeo";
import { toWeeklyWorkload } from "@/lib/jsonLd";

export const revalidate = false;

const PAGE_URL = `${BASE_URL}/locations/online-quran-classes-usa`;
const META_TITLE = "Online Quran Classes in USA for Kids & Adults | NoorPath";
const META_DESCRIPTION =
  "Learn Quran online with one-to-one classes for kids and adults across the USA. Flexible scheduling, experienced teachers and a free trial at NoorPath Academy.";
const HERO_IMAGE = {
  src: "/marketing/kids-online-quran-class.jpg",
  width: 1200,
  height: 800,
  alt: "A child taking a live one-to-one online Quran lesson on a laptop at home",
};
const WHATSAPP_TEXT =
  "Assalamu Alaikum. I am in the USA and would like to book a free online Quran trial class. Please share tutor availability for my time zone.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "online quran classes usa",
    "online quran classes for kids usa",
    "online quran teacher usa",
    "quran classes for adults usa",
    "female quran teacher online usa",
    "one-to-one quran classes usa",
    "quran classes for beginners usa",
    "online quran classes with free trial",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: getCountryHubHreflang(),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: "NoorPath Academy",
    images: [{ url: HERO_IMAGE.src, width: HERO_IMAGE.width, height: HERO_IMAGE.height, alt: HERO_IMAGE.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HERO_IMAGE.src],
  },
};

const benefits = [
  {
    icon: <Home size={21} />,
    title: "No travel to a physical academy",
    description:
      "Lessons happen at home over video, so there is no weekday drive to a masjid or weekend school across town.",
  },
  {
    icon: <UserCheck size={21} />,
    title: "Individual attention",
    description:
      "Every class is one-to-one. The tutor listens to each line your child or you recite and corrects it in the moment.",
  },
  {
    icon: <CalendarClock size={21} />,
    title: "Flexible scheduling",
    description:
      "Request after-school, evening, weekend or daytime windows in your own US time zone. The recurring slot is confirmed after tutor matching.",
  },
  {
    icon: <BarChart3 size={21} />,
    title: "Parent progress updates",
    description:
      "Enrolled families can follow attendance, homework and teacher feedback through the NoorPath Parent Portal.",
  },
  {
    icon: <Users size={21} />,
    title: "Options for children and adults",
    description:
      "Young beginners, school-age children, teens, parents and new Muslims each start from their own level.",
  },
  {
    icon: <ShieldCheck size={21} />,
    title: "Female teacher requests",
    description:
      "Request a female tutor for daughters, young children or adult sisters. Availability for your time window is confirmed before the trial.",
  },
];

const courses = [
  {
    title: "Noorani Qaida",
    description: "Arabic letters, vowel marks and joining — the reading foundation for complete beginners.",
    href: "/noorani-qaida",
    anchor: "Noorani Qaida lessons",
  },
  {
    title: "Quran Reading",
    description: "Move from Qaida into fluent reading from the Mushaf with steady, corrected practice.",
    href: "/learn-quran-online",
    anchor: "Learn to read the Quran",
  },
  {
    title: "Tajweed",
    description: "Makharij, Sifaat and the rules of recitation applied live while you read.",
    href: "/learn-tajweed-online",
    anchor: "Tajweed classes online",
  },
  {
    title: "Hifz Quran",
    description: "Memorization with new lessons and structured revision, paced to the student.",
    href: "/hifz-quran-online",
    anchor: "Online Hifz program",
  },
  {
    title: "Daily Duas and Kalmas",
    description: "Everyday duas, the Kalimas and short Surahs for salah, taught for young learners.",
    href: "/courses/daily-duas-for-kids",
    anchor: "Daily duas for kids",
  },
  {
    title: "Islamic Studies",
    description: "Age-appropriate lessons on beliefs, salah, manners and the stories of the Prophets.",
    href: "/courses/islamic-studies-online",
    anchor: "Islamic studies online",
  },
];

const timeZones = [
  {
    zone: "Eastern Time (ET)",
    examples: "New York, New Jersey, Georgia, Michigan, Florida",
    note: "Weekday evenings after school and Saturday or Sunday mornings are common requests.",
  },
  {
    zone: "Central Time (CT)",
    examples: "Texas, Illinois, Minnesota, Tennessee",
    note: "After-school slots and weekend mornings can be requested in Central time.",
  },
  {
    zone: "Mountain Time (MT)",
    examples: "Colorado, Utah, Arizona, New Mexico",
    note: "Most of Arizona does not change clocks, so its offset from other zones shifts in March and November.",
  },
  {
    zone: "Pacific Time (PT)",
    examples: "California, Washington, Oregon, Nevada",
    note: "Later evening and weekend windows are often requested by West Coast families.",
  },
];

const learnerGroups = [
  {
    icon: <Sparkles size={20} />,
    title: "Young beginners",
    body: "Children aged around four to seven usually begin with short, playful Noorani Qaida lessons focused on letter sounds and recognition. Shorter sessions keep attention without pressure.",
    links: [
      { href: "/noorani-qaida", label: "See how Noorani Qaida is taught" },
      { href: "/online-quran-for-beginners", label: "Quran classes for beginners" },
    ],
  },
  {
    icon: <BookOpen size={20} />,
    title: "School-age children",
    body: "Lessons can sit after school or on weekends around homework and activities. Children work on Qaida, fluent reading, Tajweed or Hifz depending on where they are now.",
    links: [{ href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" }],
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Adults learning Quran",
    body: "Adults can start from the alphabet, return after years away or polish Tajweed. Lessons are private, so you learn at your own pace without a group watching.",
    links: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Sisters requesting female teachers",
    body: `Sisters and mothers can ask for a female tutor for themselves or their children. ${TUTOR_FACTS.femaleTutors} The specific tutor and time are confirmed before the trial.`,
    links: [
      { href: "/female-quran-teacher-online", label: "Request a female Quran teacher" },
      { href: "/quran-classes-for-sisters", label: "Quran classes for sisters" },
    ],
  },
];

const trialSteps = [
  {
    title: "Submit an enquiry",
    description:
      "Use the form or WhatsApp to tell us who will learn, their current level, your US time zone and the times that suit you.",
  },
  {
    title: "NoorPath contacts you",
    description: "The team replies to discuss the learner's goals and any tutor preference, such as a female teacher.",
  },
  {
    title: "Tutor and timings are confirmed",
    description: `Tutor availability is checked against your requested window, and the trial time is confirmed in your local US time. ${TRIAL.availabilityNote}`,
  },
  {
    title: "Attend the trial",
    description: `You get ${TRIAL_OFFER}, live and one-to-one, with no credit card required.`,
  },
  {
    title: "Agree a learning plan",
    description: "After the trial, discuss the starting course, lesson frequency and recurring time before choosing a paid plan.",
  },
];

const portalFeatures = [
  { icon: <ClipboardCheck size={18} />, label: "Attendance for each class" },
  { icon: <BookOpen size={18} />, label: "Homework and assignments" },
  { icon: <BarChart3 size={18} />, label: "Progress updates and quizzes" },
  { icon: <MessageCircle size={18} />, label: "Teacher reports and notes" },
];

const faqs = [
  {
    q: "Are Quran classes available throughout the USA?",
    a: "Yes. Classes are fully online, so families in any US state can join from home. NoorPath has no physical US office or branch; every lesson takes place live over video.",
  },
  {
    q: "Do you offer online Quran classes for kids?",
    a: "Yes. Children can learn Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies in one-to-one lessons matched to their age and current level.",
  },
  {
    q: "Can adults learn Quran online?",
    a: "Yes. Adults can start from the Arabic alphabet, return to reading after a long gap, improve Tajweed or begin memorization. Lessons are private and paced to the learner.",
  },
  {
    q: "Can I request a female Quran teacher?",
    a: `Yes. ${TUTOR_FACTS.femaleTutors} Share the preference when you enquire, and a female tutor for your requested time window is confirmed before the trial.`,
  },
  {
    q: "How are US time zones accommodated?",
    a: "Tell us whether you are on Eastern, Central, Mountain or Pacific time and which windows suit you. Lessons are agreed in your local time and tutor availability is confirmed before scheduling. Around the March and November clock changes, NoorPath reconfirms the recurring time with you.",
  },
  {
    q: "Are classes one-to-one?",
    a: "Yes. Every NoorPath lesson is one student with one tutor. Siblings each have their own lesson, and family discounts apply when more than one child enrolls.",
  },
  {
    q: "What courses are available?",
    a: "Noorani Qaida, Quran reading, Tajweed, Hifz (memorization), daily duas and Kalmas, and Islamic studies. The tutor helps decide where to start during the trial.",
  },
  {
    q: "How can I book a free trial?",
    a: `Fill in the short form on this page or message NoorPath on WhatsApp. After tutor availability is confirmed, you get ${TRIAL_OFFER} with no credit card required.`,
  },
];

const usCities = [
  { name: "New York", href: "/online-quran-classes/new-york" },
  { name: "Houston", href: "/online-quran-classes/houston" },
  { name: "Chicago", href: "/online-quran-classes/chicago" },
  { name: "Dallas", href: "/online-quran-classes/dallas" },
  { name: "Los Angeles", href: "/online-quran-classes/los-angeles" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Online Quran Classes in the USA for Kids and Adults",
      description: META_DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${PAGE_URL}#service` },
      mainEntity: { "@id": `${PAGE_URL}#course` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Quran Classes in the USA",
      description:
        "Live one-to-one online Quran lessons for children and adults in the United States: Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies, scheduled in the learner's US time zone after tutor matching. Delivered remotely; NoorPath has no physical US location.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      areaServed: { "@type": "Country", name: "United States" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: PAGE_URL,
        availableLanguage: "English",
      },
      audience: [
        { "@type": "PeopleAudience", audienceType: "Parents of children learning Quran in the USA" },
        { "@type": "PeopleAudience", audienceType: "Adult Quran learners in the USA" },
      ],
      offers: {
        "@type": "Offer",
        name: TRIAL_OFFER,
        price: String(TRIAL.price),
        priceCurrency: TRIAL.priceCurrency,
        description: `${TRIAL_OFFER}; no credit card required; ${TRIAL.availabilityNote}`,
        url: `${PAGE_URL}#trial`,
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      url: PAGE_URL,
    },
    {
      // Instances and offers derive from PRICING_PLANS so structured prices never drift from /pricing.
      "@type": "Course",
      "@id": `${PAGE_URL}#course`,
      name: "Online Quran Classes in the USA",
      description:
        "One-to-one online Quran lessons for US children and adults covering Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies, scheduled in ET, CT, MT or PT after tutor matching.",
      url: PAGE_URL,
      provider: ORGANIZATION_REF,
      inLanguage: "en-US",
      courseMode: "online",
      isAccessibleForFree: false,
      teaches: courses.map((course) => course.title),
      hasCourseInstance: PRICING_PLANS.map((plan) => ({
        "@type": "CourseInstance",
        name: `${plan.name} — ${plan.sessionsPerWeek}x ${plan.sessionMinutes} min per week`,
        description: plan.description,
        courseMode: "online",
        courseWorkload: toWeeklyWorkload(plan.sessionsPerWeek, plan.sessionMinutes),
        instructor: ORGANIZATION_REF,
        inLanguage: "en-US",
        location: { "@type": "VirtualLocation", url: PAGE_URL },
        offers: {
          "@type": "Offer",
          price: String(plan.monthlyPriceUsd),
          priceCurrency: "USD",
          category: "Subscription",
          url: `${BASE_URL}/pricing`,
          availability: "https://schema.org/InStock",
        },
      })),
      offers: [
        {
          "@type": "Offer",
          name: TRIAL_OFFER,
          price: String(TRIAL.price),
          priceCurrency: TRIAL.priceCurrency,
          category: "Free trial",
          url: `${PAGE_URL}#trial`,
          availability: "https://schema.org/InStock",
        },
        ...PRICING_PLANS.map((plan) => ({
          "@type": "Offer",
          name: `${plan.name} plan`,
          price: String(plan.monthlyPriceUsd),
          priceCurrency: "USD",
          category: "Subscription",
          url: `${BASE_URL}/pricing`,
          availability: "https://schema.org/InStock",
        })),
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
        { "@type": "ListItem", position: 3, name: "Online Quran Classes USA", item: PAGE_URL },
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

const iconBadgeStyle = {
  width: 42,
  height: 42,
  borderRadius: 12,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(13,92,74,.08)",
  color: "var(--emerald)",
  marginBottom: 12,
} as const;

const inlineLinkStyle = {
  color: "var(--emerald)",
  fontWeight: 700,
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  fontSize: ".9rem",
} as const;

function TrialCtaBand({ text, whatsappUrl }: { text: string; whatsappUrl: string }) {
  return (
    <div
      style={{
        marginTop: 36,
        padding: "20px 22px",
        borderRadius: 16,
        background: "var(--ivory)",
        border: "1px solid var(--border)",
        display: "flex",
        flexWrap: "wrap",
        gap: 14,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ margin: 0, fontWeight: 600, color: "var(--charcoal)", maxWidth: 620 }}>{text}</p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="#trial" className="btn-primary-np">
          Book a Free Trial
        </a>
        <WhatsAppLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-np">
          WhatsApp NoorPath
        </WhatsAppLink>
      </div>
    </div>
  );
}

/** US call/SMS line (no WhatsApp on this number). */
function UsPhoneLinks() {
  const linkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    color: "var(--gold-lt)",
    fontWeight: 700,
    fontSize: ".86rem",
  } as const;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", marginTop: 14 }}>
      <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".82rem" }}>
        US line ({CONTACT.usaAvailableHours}):
      </span>
      <a href={CONTACT.usaCallUrl} style={linkStyle}>
        <Phone size={15} aria-hidden="true" /> Call {CONTACT.usaPhoneDisplay}
      </a>
      <a href={CONTACT.usaSmsUrl} style={linkStyle}>
        <MessageSquare size={15} aria-hidden="true" /> Text / SMS
      </a>
    </div>
  );
}

export default function OnlineQuranClassesUsaPage() {
  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 18 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
              Home
            </Link>
            <span aria-hidden="true" style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>
              ›
            </span>
            <Link href="/locations" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
              Locations
            </Link>
            <span aria-hidden="true" style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>
              ›
            </span>
            <span aria-current="page" style={{ color: "rgba(255,255,255,.65)", fontSize: ".85rem" }}>
              United States
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
                <span aria-hidden="true">🇺🇸</span> For families across the United States
              </span>
              <h1 id="usa-hero-title">Online Quran Classes in the USA for Kids and Adults</h1>
              <p style={{ maxWidth: 610, marginBottom: 24 }}>
                Live one-to-one Quran lessons from home, with a tutor who teaches only you or your child. Choose a time
                that fits your Eastern, Central, Mountain or Pacific schedule — complete beginners are welcome.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 11 }}>
                {[
                  "Live one-to-one lessons, never a group class",
                  "Learn from home — no commute to a weekend school",
                  "Scheduling across ET, CT, MT and PT, confirmed after tutor matching",
                  "Beginner-friendly, from the Arabic alphabet upward",
                  `${TRIAL_OFFER} — no credit card`,
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle
                      size={18}
                      aria-hidden="true"
                      style={{ color: "var(--gold-lt)", flexShrink: 0, marginTop: 2 }}
                    />
                    <span style={{ color: "rgba(255,255,255,.92)", fontSize: ".94rem", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#trial" className="btn-primary-np">
                  Book a Free Trial
                </a>
                <WhatsAppLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
                >
                  <MessageCircle size={16} aria-hidden="true" /> WhatsApp NoorPath
                </WhatsAppLink>
              </div>
              <UsPhoneLinks />

              <p
                style={{
                  color: "rgba(255,255,255,.62)",
                  fontSize: ".76rem",
                  lineHeight: 1.6,
                  marginTop: 16,
                  maxWidth: 580,
                }}
              >
                NoorPath is an online academy with no physical US office. Tutor and schedule availability are
                confirmed after your request.
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
                  {TRIAL.classes} free trial classes · No card
                </span>
                <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: 5 }}>Book Your Free Trial</h2>
                <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".84rem", lineHeight: 1.55 }}>
                  Tell us your US time zone and the learner&apos;s level.
                </p>
              </div>
              <CTAForm defaultCountry="United States" idPrefix="usa-hero-trial" formVariant="usa-hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Service facts */}
      <section style={{ padding: "28px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_FACTS.map((fact) => (
              <div key={fact.label} style={{ textAlign: "center", padding: "12px 8px" }}>
                <div style={{ color: "var(--emerald)", fontWeight: 800, fontSize: "1.25rem", marginBottom: 3 }}>
                  {fact.value}
                </div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why online */}
      <section aria-labelledby="usa-why-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ marginBottom: 36 }}>
            <div>
              <span className="section-eyebrow">Learning from home</span>
              <h2 id="usa-why-heading" className="section-title">
                Why US families choose <em className="accent">online Quran learning</em>
              </h2>
              <p className="section-desc">
                For many American Muslim families, the nearest weekend Islamic school is a long drive away, or its
                timetable clashes with school and work. Live{" "}
                <Link href="/online-quran-classes" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  online Quran classes
                </Link>{" "}
                bring a dedicated tutor to your living room instead.
              </p>
            </div>
            <div style={{ position: "relative", aspectRatio: "3 / 2", borderRadius: 20, overflow: "hidden" }}>
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} style={cardStyle}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 6 }}>{benefit.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.65, margin: 0 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section aria-labelledby="usa-courses-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Courses</span>
          <h2 id="usa-courses-heading" className="section-title">
            Quran courses available to <em className="accent">US learners</em>
          </h2>
          <p className="section-desc">
            Every course is taught one-to-one. If you are unsure where to start, the tutor checks the learner&apos;s
            level during the trial and suggests a starting point.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <div key={course.title} style={{ ...cardStyle, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "1.08rem", fontWeight: 700, marginBottom: 6 }}>{course.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.65, flex: 1 }}>
                  {course.description}
                </p>
                <Link href={course.href} style={inlineLinkStyle}>
                  {course.anchor} <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time zones */}
      <section aria-labelledby="usa-timezones-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Scheduling</span>
          <h2 id="usa-timezones-heading" className="section-title">
            Class times across <em className="accent">US time zones</em>
          </h2>
          <p className="section-desc" style={{ maxWidth: 760 }}>
            You request lesson windows in your own local time. NoorPath checks them against tutor availability and
            confirms the trial and recurring slot before anything is booked — there is no fixed public timetable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeZones.map((tz) => (
              <div key={tz.zone} style={cardStyle}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  <Clock size={20} />
                </span>
                <h3 style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: 4 }}>{tz.zone}</h3>
                <p style={{ color: "var(--slate)", fontSize: ".82rem", marginBottom: 8 }}>{tz.examples}</p>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{tz.note}</p>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle, marginTop: 24, background: "rgba(201,146,42,.06)" }}>
            <h3 style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: 6 }}>Daylight saving time</h3>
            <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.7, margin: 0 }}>
              Most of the US moves its clocks forward on the second Sunday of March and back on the first Sunday of
              November. Tutor schedules do not necessarily change on the same dates, so the gap between your time and
              your tutor&apos;s can shift by an hour. NoorPath reconfirms the recurring lesson time in your local time
              around each change. Hawaii and most of Arizona do not observe daylight saving time.
            </p>
          </div>

          <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginTop: 20 }}>
            Planning notes for specific cities:{" "}
            {usCities.map((city, index) => (
              <span key={city.href}>
                <Link href={city.href} style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  {city.name}
                </Link>
                {index < usCities.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>

          <TrialCtaBand
            text="Share your time zone and preferred windows — we'll confirm a tutor before the trial."
            whatsappUrl={whatsappUrl}
          />
        </div>
      </section>

      {/* Learner groups */}
      <section aria-labelledby="usa-learners-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Who it&apos;s for</span>
          <h2 id="usa-learners-heading" className="section-title">
            Classes for <em className="accent">every kind of learner</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 8 }}>
            {learnerGroups.map((group) => (
              <div key={group.title} style={cardStyle}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  {group.icon}
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 8 }}>{group.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".93rem", lineHeight: 1.7, marginBottom: 12 }}>
                  {group.body}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px" }}>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} style={inlineLinkStyle}>
                      {link.label} <ChevronRight size={16} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial steps */}
      <section aria-labelledby="usa-trial-steps-heading" id="usa-trial-steps">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Free trial</span>
          <h2 id="usa-trial-steps-heading" className="section-title">
            How the <em className="accent">free trial</em> works
          </h2>
          <p className="section-desc">
            New students get {TRIAL_OFFER} before choosing a plan. No credit card is needed to book.
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {trialSteps.map((step, index) => (
              <li key={step.title} style={{ ...cardStyle, padding: 20 }}>
                <span
                  aria-hidden="true"
                  style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.4rem", display: "block", marginBottom: 6 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div style={{ ...cardStyle, marginTop: 24 }}>
            <h3 style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: 6 }}>After the trial: plans in USD</h3>
            <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.7, margin: 0 }}>
              Plans are billed in US dollars:{" "}
              {PRICING_PLANS.map(
                (plan) =>
                  `${plan.name} $${plan.monthlyPriceUsd}/month (${plan.sessionsPerWeek}× ${plan.sessionMinutes} min per week)`,
              ).join(", ")}
              . Sibling discounts are {FAMILY_DISCOUNTS.map((d) => `${d.discountPercent}% for ${d.siblings}`).join(", ")}
              . A full refund is available if requested within {REFUND_WINDOW_DAYS} days of the first paid class, and
              plans can be cancelled with {CANCELLATION_NOTICE_DAYS} days&apos; notice.{" "}
              <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                Compare all plans and pricing
              </Link>
              .
            </p>
          </div>

          <TrialCtaBand text={`Ready to try? Book ${TRIAL_OFFER} — no card required.`} whatsappUrl={whatsappUrl} />
        </div>
      </section>

      {/* Parent portal */}
      <section aria-labelledby="usa-portal-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div style={{ position: "relative", aspectRatio: "3 / 2", borderRadius: 20, overflow: "hidden" }}>
              <Image
                src="/marketing/parent-portal-promo.jpg"
                alt="NoorPath Parent Portal showing a student's attendance and lesson progress"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="section-eyebrow">For parents</span>
              <h2 id="usa-portal-heading" className="section-title">
                Parent Portal and <em className="accent">progress updates</em>
              </h2>
              <p className="section-desc">
                Enrolled families get secure Parent Portal access for each child, so you can see what happened in
                class even when you were at work.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {portalFeatures.map((feature) => (
                  <li
                    key={feature.label}
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: ".93rem", fontWeight: 600 }}
                  >
                    <span style={{ color: "var(--emerald)", display: "inline-flex" }} aria-hidden="true">
                      {feature.icon}
                    </span>
                    {feature.label}
                  </li>
                ))}
              </ul>
              <h3 style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: 8 }}>Parent policies at a glance</h3>
              <ul style={{ paddingLeft: 18, margin: 0, display: "grid", gap: 6 }}>
                {PARENT_POLICY_FACTS.map((fact) => (
                  <li key={fact.id} style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6 }}>
                    <strong style={{ color: "var(--charcoal)" }}>{fact.q}</strong> {fact.a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="usa-faq-heading">
        <div className="max-w-[900px] mx-auto px-4">
          <span className="section-eyebrow">FAQ</span>
          <h2 id="usa-faq-heading" className="section-title">
            Online Quran classes in the USA: <em className="accent">common questions</em>
          </h2>
          <FaqJsonLd faqs={faqs} pageUrl={PAGE_URL} />
          <div style={{ display: "grid", gap: 12, marginTop: 8 }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ ...cardStyle, padding: "18px 22px" }}>
                <summary style={{ cursor: "pointer", listStyle: "revert" }}>
                  <h3 style={{ display: "inline", fontSize: "1rem", fontWeight: 700 }}>{faq.q}</h3>
                </summary>
                <p style={{ color: "var(--muted)", fontSize: ".93rem", lineHeight: 1.7, margin: "10px 0 0" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="usa-final-cta-heading"
        style={{ background: "linear-gradient(135deg, var(--emerald-dk, #0a3d32), var(--emerald, #0d5c4a))" }}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                id="usa-final-cta-heading"
                style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: 12, lineHeight: 1.25 }}
              >
                Start Your Quran Learning Journey from Home
              </h2>
              <p style={{ color: "rgba(255,255,255,.82)", lineHeight: 1.7, marginBottom: 20 }}>
                Send a short enquiry with your US time zone and learning goal. NoorPath confirms a tutor and time, then
                you attend {TRIAL_OFFER} — no credit card needed.
              </p>
              <WhatsAppLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#25D366",
                  color: "#0b3d2e",
                  padding: "13px 22px",
                  borderRadius: 12,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp NoorPath
              </WhatsAppLink>
              <UsPhoneLinks />
            </div>
            <div
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 20,
                padding: "24px 22px",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "1.2rem", textAlign: "center", marginBottom: 14 }}>
                Book a Free Trial
              </h3>
              <CTAForm defaultCountry="United States" idPrefix="usa-final-trial" formVariant="usa-final" />
            </div>
          </div>
        </div>
      </section>

      <LocationConversionBar whatsappText={WHATSAPP_TEXT} />
    </>
  );
}
