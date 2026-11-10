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
  Heart,
  Home,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import FaqJsonLd from "@/components/FaqJsonLd";
import {
  BASE_URL,
  CANCELLATION_NOTICE_DAYS,
  CONTACT,
  PRICING_PLANS,
  RESCHEDULE_NOTICE_HOURS,
  SERVICE_FACTS,
  TRIAL,
  TRIAL_OFFER,
  TUTOR_FACTS,
} from "@/lib/academyFacts";
import { ORGANIZATION_REF, WEBSITE_ID } from "@/lib/organizationSchema";
import { toWeeklyWorkload } from "@/lib/jsonLd";

export const revalidate = false;

const PAGE_URL = `${BASE_URL}/female-quran-teacher-online`;
const META_TITLE = "Female Quran Teacher Online | Classes for Kids & Sisters – NoorPath";
const META_DESCRIPTION =
  "Learn Quran online with a female teacher at NoorPath Academy. One-to-one lessons for children and sisters, flexible timings and a free trial.";
const HERO_IMAGE = {
  src: "/marketing/female-hafiza-tutor.jpg",
  width: 1200,
  height: 800,
  alt: "A female Quran teacher guiding a young girl through a live one-to-one online Quran lesson on a laptop",
};
const CTA_LABEL = `Start ${TRIAL.classes} Free Trial Sessions`;
const AVAILABILITY_NOTE = "A female tutor is assigned subject to availability and confirmation before your trial.";
const WHATSAPP_TEXT =
  "Assalamu Alaikum. I would like to request a female Quran teacher and book a free trial. Please share female tutor availability for my time zone.";

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "female quran teacher online",
    "online female quran tutor",
    "female quran teacher for kids",
    "female quran teacher for adults",
    "online quran classes with female teacher",
    "female quran tutor for sisters",
    "learn quran online with female teacher",
    "female quran teacher for beginners",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
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

const reasons = [
  {
    icon: <Heart size={21} />,
    title: "A comfortable learning environment",
    description:
      "Many girls and sisters recite more freely with a female teacher, especially when they are shy about making mistakes aloud.",
  },
  {
    icon: <UserCheck size={21} />,
    title: "Individual attention",
    description: "Every lesson is one-to-one, so the tutor hears each line and corrects it straight away.",
  },
  {
    icon: <Sparkles size={21} />,
    title: "A suitable learning pace",
    description: "Lessons move at the learner's pace — slower for new readers, steadier for Tajweed or memorization.",
  },
  {
    icon: <Home size={21} />,
    title: "Privacy and convenience",
    description: "Learn from home over live video, with no travel and no group watching.",
  },
  {
    icon: <Users size={21} />,
    title: "Parent involvement",
    description:
      "Parents arrange children's lessons, can stay present or nearby during class, and follow progress in the Parent Portal.",
  },
  {
    icon: <CalendarClock size={21} />,
    title: "Flexible scheduling",
    description: "Request lesson windows in your own time zone; the recurring slot is confirmed after tutor matching.",
  },
];

const learnerGroups = [
  {
    icon: <Sparkles size={20} />,
    title: "Young girls and children",
    body: "Daughters can learn with a female tutor using short, encouraging lessons matched to their age and attention span, from letter sounds to fluent reading and daily duas.",
    links: [
      { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
      { href: "/blog/female-quran-teacher-for-kids", label: "Guide: female Quran teacher for kids" },
    ],
  },
  {
    icon: <Users size={20} />,
    title: "Sisters and adult women",
    body: "Mothers, students and working women can learn privately at their own pace — whether starting from the alphabet or returning to the Quran after years away.",
    links: [
      { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
      { href: "/quran-classes-for-sisters", label: "Quran classes for sisters" },
    ],
  },
  {
    icon: <BookOpen size={20} />,
    title: "Beginners learning Noorani Qaida",
    body: "Complete beginners start with Arabic letters, vowel marks and joining, so reading the Quran becomes possible step by step.",
    links: [
      { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
      { href: "/online-quran-for-beginners", label: "Quran classes for beginners" },
    ],
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Quran reading and Tajweed learners",
    body: "Learners who can already read work on fluency and correct pronunciation, applying Makharij and Tajweed rules with live correction.",
    links: [{ href: "/learn-tajweed-online", label: "Learn Tajweed online" }],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Students interested in memorization",
    body: "Girls and women ready to memorize can request a female tutor for Hifz, with new lessons and regular revision paced to the student.",
    links: [
      { href: "/hifz-quran-online", label: "Online Hifz program" },
      { href: "/blog/online-hifz-classes-for-kids", label: "Guide: online Hifz for kids" },
    ],
  },
];

const courses = [
  { title: "Noorani Qaida", description: "Arabic letters, vowels and joining for complete beginners.", href: "/noorani-qaida" },
  { title: "Quran Reading", description: "Fluent reading from the Mushaf with steady correction.", href: "/learn-quran-online" },
  { title: "Tajweed", description: "Makharij and recitation rules applied while you read.", href: "/learn-tajweed-online" },
  { title: "Hifz Quran", description: "Memorization with new lessons and structured revision.", href: "/hifz-quran-online" },
  { title: "Daily Duas and Kalmas", description: "Everyday duas, the Kalimas and short Surahs for salah.", href: "/courses/daily-duas-for-kids" },
  { title: "Islamic Studies", description: "Age-appropriate lessons on beliefs, salah and character.", href: "/courses/islamic-studies-online" },
];

const steps = [
  { title: "Submit a trial enquiry", description: "Use the form or WhatsApp to share who will learn, their level and your time zone." },
  { title: "Request a female tutor", description: "Mention the female teacher preference for your daughter or for yourself." },
  { title: "NoorPath checks availability", description: `NoorPath checks female tutor availability for the subject and your preferred windows. ${TRIAL.availabilityNote}` },
  { title: "Confirm a suitable schedule", description: "The trial time is confirmed in your local time once a suitable female tutor is available." },
  { title: "Attend the trial", description: `You get ${TRIAL_OFFER}, live and one-to-one, with no credit card required.` },
  { title: "Discuss the learning plan", description: "Agree the starting course, lesson frequency and recurring time before choosing a paid plan." },
];

const regions = [
  {
    region: "USA and Canada",
    detail: "Request windows in Eastern, Central, Mountain or Pacific time. Clocks change in March and November, so the recurring time is reconfirmed around each change.",
    links: [
      { href: "/locations/online-quran-classes-usa", label: "USA" },
      { href: "/locations/online-quran-classes-canada", label: "Canada" },
    ],
  },
  {
    region: "UK and Ireland",
    detail: "Share GMT or BST preferences — Ireland follows GMT in winter and Irish Standard Time in summer. Clocks change on the last Sundays of March and October.",
    links: [
      { href: "/locations/online-quran-classes-uk", label: "UK" },
      { href: "/online-quran-classes/london", label: "London" },
      { href: "/online-quran-classes/birmingham", label: "Birmingham" },
      { href: "/online-quran-classes/bradford", label: "Bradford" },
      { href: "/online-quran-classes/manchester", label: "Manchester" },
      { href: "/locations/online-quran-classes-ireland", label: "Ireland (incl. Dublin)" },
    ],
  },
  {
    region: "Australia and New Zealand",
    detail: "Some Australian states use daylight saving and others (Queensland, Western Australia, Northern Territory) do not, so tell us your state or city.",
    links: [
      { href: "/locations/online-quran-classes-australia", label: "Australia" },
      { href: "/locations/online-quran-classes-new-zealand", label: "New Zealand" },
    ],
  },
  {
    region: "Europe",
    detail: "Most of Europe uses CET/CEST, changing clocks on the last Sundays of March and October. Share your city and preferred evenings or weekends.",
    links: [
      { href: "/locations/online-quran-classes-germany", label: "Germany" },
      { href: "/locations/online-quran-classes-france", label: "France" },
      { href: "/locations/online-quran-classes-spain", label: "Spain" },
    ],
  },
  {
    region: "Gulf countries",
    detail: "Gulf time zones (GST, AST) do not change clocks. Share your preferred windows around school and weekend days.",
    links: [
      { href: "/locations/online-quran-classes-uae", label: "UAE" },
      { href: "/locations/online-quran-classes-saudi-arabia", label: "Saudi Arabia" },
      { href: "/locations/online-quran-classes-qatar", label: "Qatar" },
      { href: "/locations/online-quran-classes-kuwait", label: "Kuwait" },
      { href: "/locations/online-quran-classes-oman", label: "Oman" },
    ],
  },
];

const otherRegions = [
  { href: "/locations/online-quran-classes-singapore", label: "Singapore" },
  { href: "/locations/online-quran-classes-hong-kong", label: "Hong Kong" },
  { href: "/locations/online-quran-classes-nigeria", label: "Nigeria" },
  { href: "/online-quran-classes/lagos", label: "Lagos" },
  { href: "/online-quran-classes/abuja", label: "Abuja" },
  { href: "/online-quran-classes/port-harcourt", label: "Port Harcourt" },
];

const portalFeatures = [
  { icon: <ClipboardCheck size={18} />, label: "Attendance for each class" },
  { icon: <BookOpen size={18} />, label: "Homework and quizzes" },
  { icon: <BarChart3 size={18} />, label: "Daily progress" },
  { icon: <MessageCircle size={18} />, label: "Teacher reports" },
];

const faqs = [
  {
    q: "Can I request a female Quran teacher?",
    a: `Yes. Mention the preference in your trial enquiry. ${TUTOR_FACTS.femaleTutors} A female tutor is assigned subject to availability for your subject and time window, and confirmed before the trial.`,
  },
  {
    q: "Are female teachers available for children?",
    a: "Yes, female tutors teach daughters and young children. Parents arrange the lessons, can stay present or nearby during class, and the specific tutor and time are confirmed before the trial.",
  },
  {
    q: "Can adult women learn Quran online?",
    a: "Yes. Sisters can learn from the Arabic alphabet, improve fluency and Tajweed, or memorize, in private one-to-one lessons at their own pace.",
  },
  {
    q: "Is there a female Quran teacher near me?",
    a: "NoorPath is online only, so where you live does not limit the choice. A female Quran teacher (Ustadha) teaches you or your daughter live at home, in your own time zone, which helps where no local female teacher is available. Availability for your time window is confirmed before the trial.",
  },
  {
    q: "Are lessons one-to-one?",
    a: "Yes. Every NoorPath lesson is one student with one tutor, live over video.",
  },
  {
    q: "Can beginners join?",
    a: "Yes. Complete beginners usually start with Noorani Qaida — Arabic letters, vowel marks and joining — before moving on to Quran reading.",
  },
  {
    q: "Can I request Tajweed lessons?",
    a: "Yes. Learners who can already read can request Tajweed with a female tutor, focusing on correct pronunciation and the rules of recitation.",
  },
  {
    q: "Are timings flexible?",
    a: `Request the windows that suit you in your own time zone; the recurring time is confirmed after tutor matching. A class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
  },
  {
    q: "How can I book a trial?",
    a: `Fill in the short form on this page or message NoorPath on WhatsApp and mention the female tutor request. Once a suitable tutor is confirmed, you get ${TRIAL_OFFER} with no credit card required.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Learn Quran Online with a Female Quran Teacher",
      description: META_DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${PAGE_URL}#service` },
      mainEntity: { "@id": `${PAGE_URL}#course` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
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
      name: "Female Quran Teacher Online",
      description:
        "Live one-to-one online Quran lessons with a female tutor for girls, children and adult women, covering Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies. Female tutor assignment is subject to availability and confirmed before the trial. Online only.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: [
        { "@type": "PeopleAudience", audienceType: "Parents of girls and young children" },
        { "@type": "PeopleAudience", audienceType: "Adult women learning Quran" },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: PAGE_URL,
        availableLanguage: "English",
      },
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
      // Same one-to-one programme and published plans as /pricing; instances derive from PRICING_PLANS.
      "@type": "Course",
      "@id": `${PAGE_URL}#course`,
      name: "Online Quran Classes with a Female Teacher",
      description:
        "One-to-one online Quran lessons with a female tutor, subject to availability: Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies.",
      url: PAGE_URL,
      provider: ORGANIZATION_REF,
      inLanguage: "en",
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
        { "@type": "ListItem", position: 2, name: "Female Quran Teacher Online", item: PAGE_URL },
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

const chipLinkStyle = {
  fontSize: ".8rem",
  fontWeight: 600,
  color: "var(--emerald)",
  border: "1px solid var(--border)",
  borderRadius: 20,
  padding: "4px 12px",
  background: "#fff",
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
          {CTA_LABEL}
        </a>
        <WhatsAppLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-np">
          Contact Us on WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}

export default function FemaleQuranTeacherPage() {
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
            <span aria-current="page" style={{ color: "rgba(255,255,255,.65)", fontSize: ".85rem" }}>
              Female Quran Teacher Online
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span
                style={{
                  display: "inline-flex",
                  color: "var(--gold-lt)",
                  fontWeight: 700,
                  fontSize: ".8rem",
                  letterSpacing: ".8px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Female Quran tutor requests
              </span>
              <h1 id="female-hero-title">Learn Quran Online with a Female Quran Teacher</h1>
              <p style={{ maxWidth: 610, marginBottom: 24 }}>
                Private one-to-one Quran lessons from home, with a female tutor for your daughter or for yourself.
                Beginners are welcome, and lesson times are arranged around your week.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 11 }}>
                {[
                  "Private one-to-one live lessons",
                  "Female tutor requests for children and sisters",
                  "Beginner-friendly, from the Arabic alphabet upward",
                  "Flexible scheduling in your own time zone",
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
                  {CTA_LABEL}
                </a>
                <WhatsAppLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
                >
                  <MessageCircle size={16} aria-hidden="true" /> Contact Us on WhatsApp
                </WhatsAppLink>
              </div>

              <p
                style={{
                  color: "rgba(255,255,255,.7)",
                  fontSize: ".8rem",
                  lineHeight: 1.6,
                  marginTop: 16,
                  maxWidth: 580,
                }}
              >
                {TUTOR_FACTS.femaleTutors} {AVAILABILITY_NOTE} NoorPath teaches online only and has no physical
                branches.
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
                  {TRIAL.classes} free trial sessions · No card
                </span>
                <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: 5 }}>Request a Female Tutor</h2>
                <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".84rem", lineHeight: 1.55 }}>
                  Mention &ldquo;female tutor&rdquo; in your message, with your time zone and the learner&apos;s level.
                </p>
              </div>
              <CTAForm idPrefix="female-hero-trial" formVariant="female-hero" />
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

      {/* Why a female teacher */}
      <section aria-labelledby="female-why-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ marginBottom: 36 }}>
            <div>
              <span className="section-eyebrow">Why it helps</span>
              <h2 id="female-why-heading" className="section-title">
                Why choose a <em className="accent">female Quran teacher?</em>
              </h2>
              <p className="section-desc">
                For many families, a female tutor makes Quran lessons feel more comfortable — for a shy daughter, a
                teenage girl or a sister learning as an adult. Every lesson is part of NoorPath&apos;s live{" "}
                <Link href="/online-quran-classes" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  online Quran classes
                </Link>
                , taught one-to-one.
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
            {reasons.map((reason) => (
              <div key={reason.title} style={cardStyle}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  {reason.icon}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 6 }}>{reason.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.65, margin: 0 }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learner groups */}
      <section aria-labelledby="female-learners-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Who it&apos;s for</span>
          <h2 id="female-learners-heading" className="section-title">
            Female Quran classes for <em className="accent">different learners</em>
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
          <TrialCtaBand
            text="Tell us who will learn and we'll check female tutor availability for your time zone."
            whatsappUrl={whatsappUrl}
          />
        </div>
      </section>

      {/* Courses */}
      <section aria-labelledby="female-courses-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Courses</span>
          <h2 id="female-courses-heading" className="section-title">
            What students can learn with <em className="accent">a female tutor</em>
          </h2>
          <p className="section-desc">
            Each course is taught one-to-one. Female tutor availability is confirmed for the requested subject and
            schedule.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <Link
                key={course.title}
                href={course.href}
                style={{ ...cardStyle, display: "block", textDecoration: "none", color: "inherit" }}
              >
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 6, color: "var(--charcoal)" }}>
                  {course.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.6, margin: 0 }}>{course.description}</p>
              </Link>
            ))}
          </div>
          <p style={{ color: "var(--muted)", fontSize: ".88rem", marginTop: 16 }}>
            Arabic is also available —{" "}
            <Link href="/courses/arabic-language-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>
              see the Arabic language course
            </Link>
            .
          </p>
        </div>
      </section>

      {/* How classes work */}
      <section aria-labelledby="female-steps-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Getting started</span>
          <h2 id="female-steps-heading" className="section-title">
            How classes <em className="accent">work</em>
          </h2>
          <p className="section-desc">
            Female tutors are not assigned instantly — NoorPath confirms a suitable tutor and time before your trial.
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {steps.map((step, index) => (
              <li key={step.title} style={{ ...cardStyle, padding: 20 }}>
                <span
                  aria-hidden="true"
                  style={{ color: "#a8721a", fontWeight: 800, fontSize: "1.4rem", display: "block", marginBottom: 6 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{step.description}</p>
              </li>
            ))}
          </ol>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, marginTop: 20 }}>
            After the trial, plans start from ${PRICING_PLANS[0].monthlyPriceUsd}/month for{" "}
            {PRICING_PLANS[0].sessionsPerWeek} lesson per week.{" "}
            <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Compare plans and pricing
            </Link>
            .
          </p>
          <TrialCtaBand text={`Ready to start? Book ${TRIAL_OFFER} — no card required.`} whatsappUrl={whatsappUrl} />
        </div>
      </section>

      {/* International timings */}
      <section aria-labelledby="female-timings-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Scheduling</span>
          <h2 id="female-timings-heading" className="section-title">
            Flexible <em className="accent">international timings</em>
          </h2>
          <p className="section-desc" style={{ maxWidth: 760 }}>
            Share your preferred windows in your local time. Exact female tutor availability is confirmed for each
            family individually — there is no fixed public timetable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region) => (
              <div key={region.region} style={cardStyle}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  <Clock size={20} />
                </span>
                <h3 style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: 6 }}>{region.region}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, marginBottom: 12 }}>{region.detail}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {region.links.map((link) => (
                    <Link key={link.href} href={link.href} style={chipLinkStyle}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div style={cardStyle}>
              <span style={iconBadgeStyle} aria-hidden="true">
                <Clock size={20} />
              </span>
              <h3 style={{ fontSize: "1.02rem", fontWeight: 700, marginBottom: 6 }}>Other regions</h3>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, marginBottom: 12 }}>
                Families in Asia and Africa can request a female tutor the same way — share your city and preferred
                windows.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {otherRegions.map((link) => (
                  <Link key={link.href} href={link.href} style={chipLinkStyle}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent portal */}
      <section aria-labelledby="female-portal-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1000px] mx-auto px-4">
          <span className="section-eyebrow">For parents</span>
          <h2 id="female-portal-heading" className="section-title">
            Parent progress and <em className="accent">communication</em>
          </h2>
          <p className="section-desc">
            Enrolled families get secure Parent Portal access for each child. Scheduling messages go through the
            parent or guardian using NoorPath&apos;s official email or WhatsApp.
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
          <ul style={{ paddingLeft: 18, margin: 0, display: "grid", gap: 6, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.6 }}>
            <li>{TUTOR_FACTS.rematch}</li>
            <li>
              A class can be moved with {RESCHEDULE_NOTICE_HOURS} hours&apos; notice, subject to tutor availability.
            </li>
            <li>
              Plans can be cancelled with {CANCELLATION_NOTICE_DAYS} days&apos; notice before the next billing date.{" "}
              <Link href="/safeguarding" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                Read the safeguarding guidance for parents
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="female-faq-heading">
        <div className="max-w-[900px] mx-auto px-4">
          <span className="section-eyebrow">FAQ</span>
          <h2 id="female-faq-heading" className="section-title">
            Female Quran teacher: <em className="accent">common questions</em>
          </h2>
          <FaqJsonLd faqs={faqs} pageUrl={PAGE_URL} />
          <div style={{ display: "grid", gap: 12, marginTop: 8 }}>
            {faqs.map((faq) => (
              <details key={faq.q} style={{ ...cardStyle, padding: "18px 22px" }}>
                <summary style={{ cursor: "pointer", listStyle: "revert" }}>
                  <h3 style={{ display: "inline", fontSize: "1rem", fontWeight: 700 }}>{faq.q}</h3>
                </summary>
                <p style={{ color: "var(--muted)", fontSize: ".93rem", lineHeight: 1.7, margin: "10px 0 0" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="female-final-cta-heading"
        style={{ background: "linear-gradient(135deg, var(--emerald-dk, #0a3d32), var(--emerald, #0d5c4a))" }}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                id="female-final-cta-heading"
                style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: 12, lineHeight: 1.25 }}
              >
                Find a Comfortable Way to Learn the Quran Online
              </h2>
              <p style={{ color: "rgba(255,255,255,.82)", lineHeight: 1.7, marginBottom: 20 }}>
                Send a short enquiry and mention the female tutor request. {AVAILABILITY_NOTE} Then attend{" "}
                {TRIAL_OFFER} — no credit card needed.
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
                <MessageCircle size={18} aria-hidden="true" /> Contact Us on WhatsApp
              </WhatsAppLink>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 20,
                padding: "24px 22px",
              }}
            >
              <h3 style={{ color: "#fff", fontSize: "1.2rem", textAlign: "center", marginBottom: 14 }}>{CTA_LABEL}</h3>
              <CTAForm idPrefix="female-final-trial" formVariant="female-final" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
