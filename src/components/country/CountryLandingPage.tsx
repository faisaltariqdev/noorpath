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
import FaqJsonLd from "@/components/FaqJsonLd";
import LocationConversionBar from "@/components/LocationConversionBar";
import CountryQuranClassesGuide from "@/components/CountryQuranClassesGuide";
import UkQuranClassesGuide from "@/components/UkQuranClassesGuide";
import { CurrencyProvider, LocalPrice, PriceDisclosure } from "@/components/pricing/LocalPrice";
import CurrencySelector from "@/components/pricing/CurrencySelector";
import {
  BASE_URL,
  CANCELLATION_NOTICE_DAYS,
  CONTACT,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  RESCHEDULE_NOTICE_HOURS,
  SERVICE_FACTS,
  TRIAL,
  TRIAL_OFFER,
  TRUSTPILOT,
  TUTOR_FACTS,
} from "@/lib/academyFacts";
import { ORGANIZATION_REF, WEBSITE_ID } from "@/lib/organizationSchema";
import { getCountryHubHreflang, getLocale, getOpenGraphLocale } from "@/lib/geoSeo";
import { toWeeklyWorkload } from "@/lib/jsonLd";
import { getDisplayRates } from "@/lib/currency/rates";
import { getCountryGuide } from "@/data/countryGuides";
import { getCountryMarket, type CountryContent } from "@/data/countryMarkets";
import { getLocation } from "@/data/locations";
import { trustpilotReviews } from "@/data/trustpilotReviews";

const CTA_LABEL = `Start ${TRIAL.classes} Free Trial Sessions`;

/** Article metadata for the UK guide, which lives in UkQuranClassesGuide rather than countryGuides. */
const UK_GUIDE_ARTICLE = {
  headline: "Online Quran Classes UK: A Practical Guide for Families and Adults",
  description:
    "UK-specific guidance on GMT and BST scheduling, course selection, tutor checks, safeguarding, pricing and progress in online Quran classes.",
  author: { "@type": "Person", name: "Faisal Tariq", url: `${BASE_URL}/founder` },
  datePublished: "2026-07-14",
  dateModified: "2026-07-15",
};

const COURSES = [
  { title: "Noorani Qaida", description: "Arabic letters, vowel marks and joining — the reading foundation for beginners.", href: "/noorani-qaida" },
  { title: "Quran Reading", description: "Fluent reading from the Mushaf with steady, corrected practice.", href: "/learn-quran-online" },
  { title: "Tajweed", description: "Makharij and the rules of recitation applied live while you read.", href: "/learn-tajweed-online" },
  { title: "Hifz Quran", description: "Memorization with new lessons and structured revision.", href: "/hifz-quran-online" },
  { title: "Daily Duas and Kalmas", description: "Everyday duas, the Kalimas and short Surahs for salah.", href: "/courses/daily-duas-for-kids" },
  { title: "Islamic Studies", description: "Age-appropriate lessons on beliefs, salah and character.", href: "/courses/islamic-studies-online" },
];

const LEARNER_GROUPS = [
  {
    icon: <Sparkles size={20} />,
    title: "Children and beginners",
    body: "Young learners start with short, encouraging Noorani Qaida lessons on letter sounds and joining, then move into fluent Quran reading.",
    links: [
      { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
      { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
    ],
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Adults learning Quran",
    body: "Start from the alphabet, return after years away or polish your recitation — privately, at your own pace.",
    links: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Sisters requesting female tutors",
    body: `${TUTOR_FACTS.femaleTutors} A female tutor is assigned subject to availability and confirmed before the trial.`,
    links: [{ href: "/female-quran-teacher-online", label: "Request a female Quran teacher" }],
  },
  {
    icon: <BookOpen size={20} />,
    title: "Tajweed and Hifz students",
    body: "Learners who already read can work on correct pronunciation and Tajweed rules, or begin memorization with regular revision.",
    links: [
      { href: "/learn-tajweed-online", label: "Learn Tajweed online" },
      { href: "/hifz-quran-online", label: "Online Hifz program" },
    ],
  },
];

const STEPS = [
  { title: "Send an enquiry", description: "Share who will learn, their level, your local time zone and the times that suit you." },
  { title: "Tutor matching", description: "NoorPath matches a tutor by subject, level and any male or female teacher preference." },
  { title: "Availability confirmed", description: `The tutor and trial time are confirmed in your local time. ${TRIAL.availabilityNote}` },
  { title: "Trial sessions", description: `Attend ${TRIAL_OFFER}, live and one-to-one, with no credit card required.` },
  { title: "Regular classes", description: "Agree the course, lesson frequency and recurring time, then choose a plan." },
];

const PORTAL_FEATURES = [
  { icon: <ClipboardCheck size={18} />, label: "Attendance for each class" },
  { icon: <BookOpen size={18} />, label: "Homework and quizzes" },
  { icon: <BarChart3 size={18} />, label: "Daily progress" },
  { icon: <MessageCircle size={18} />, label: "Teacher reports" },
];

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
  fontSize: ".82rem",
  fontWeight: 600,
  color: "var(--emerald)",
  border: "1px solid var(--border)",
  borderRadius: 20,
  padding: "6px 14px",
  background: "#fff",
} as const;

function pageUrl(slug: string): string {
  return `${BASE_URL}/locations/${slug}`;
}

/** "4 November 2026" → "2026-11-04", read as a calendar date (no time-zone shift). */
function isoFromReviewedDate(reviewedDate: string): string | undefined {
  const parsed = Date.parse(`${reviewedDate} 12:00 UTC`);
  return Number.isNaN(parsed) ? undefined : new Date(parsed).toISOString().slice(0, 10);
}

/** Metadata for a country landing page; throws if the country has no template content. */
export function countryLandingMetadata(slug: string): Metadata {
  const content = getCountryMarket(slug)?.content;
  if (!content) throw new Error(`No country landing content for ${slug}`);
  const url = pageUrl(slug);
  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    alternates: { canonical: url, languages: getCountryHubHreflang() },
    robots: { index: true, follow: true },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      type: "website",
      locale: getOpenGraphLocale(slug),
      siteName: "NoorPath Academy",
      images: [
        {
          url: content.heroImage.src,
          width: content.heroImage.width,
          height: content.heroImage.height,
          alt: content.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [content.heroImage.src],
    },
  };
}

function buildJsonLd(slug: string, content: CountryContent, countryLabel: string) {
  const url = pageUrl(slug);
  const inLanguage = getLocale(slug);
  const countryGuide = content.guide === "country" ? getCountryGuide(slug) : undefined;
  const article =
    content.guide === "uk"
      ? UK_GUIDE_ARTICLE
      : countryGuide
        ? {
            headline: countryGuide.title,
            description: countryGuide.description,
            author: ORGANIZATION_REF,
            dateModified: isoFromReviewedDate(countryGuide.reviewedDate),
          }
        : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: content.h1,
        description: content.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${url}#service` },
        mainEntity: { "@id": `${url}#course` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}${content.heroImage.src}`,
          width: content.heroImage.width,
          height: content.heroImage.height,
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Online Quran Classes in ${countryLabel}`,
        description: `Live one-to-one online Quran lessons for children and adults in ${countryLabel}: Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies, scheduled in the learner's local time after tutor matching. Delivered online only; NoorPath has no office in ${countryLabel}.`,
        provider: ORGANIZATION_REF,
        serviceType: "Online Quran Education",
        areaServed: { "@type": "Country", name: countryLabel },
        audience: [
          { "@type": "PeopleAudience", audienceType: `Parents of children learning Quran in ${countryLabel}` },
          { "@type": "PeopleAudience", audienceType: `Adult Quran learners in ${countryLabel}` },
        ],
        offers: {
          "@type": "Offer",
          name: TRIAL_OFFER,
          price: String(TRIAL.price),
          priceCurrency: TRIAL.priceCurrency,
          description: `${TRIAL_OFFER}; no credit card required; ${TRIAL.availabilityNote}`,
          url: `${url}#trial`,
        },
        termsOfService: `${BASE_URL}/terms-of-service`,
        url,
      },
      {
        // Instances and offers derive from PRICING_PLANS so structured prices never drift from /pricing.
        "@type": "Course",
        "@id": `${url}#course`,
        name: `Online Quran Classes in ${countryLabel}`,
        description: `One-to-one online Quran lessons for children and adults in ${countryLabel}, covering Noorani Qaida, Quran reading, Tajweed, Hifz, daily duas and Islamic studies.`,
        url,
        provider: ORGANIZATION_REF,
        inLanguage,
        courseMode: "online",
        isAccessibleForFree: false,
        teaches: COURSES.map((course) => course.title),
        hasCourseInstance: PRICING_PLANS.map((plan) => ({
          "@type": "CourseInstance",
          name: `${plan.name} — ${plan.sessionsPerWeek}x ${plan.sessionMinutes} min per week`,
          description: plan.description,
          courseMode: "online",
          courseWorkload: toWeeklyWorkload(plan.sessionsPerWeek, plan.sessionMinutes),
          instructor: ORGANIZATION_REF,
          inLanguage,
          location: { "@type": "VirtualLocation", url },
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
            url: `${url}#trial`,
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
      ...(article
        ? [
            {
              "@type": "Article",
              "@id": `${url}#guide`,
              headline: article.headline,
              description: article.description,
              mainEntityOfPage: { "@id": `${url}#webpage` },
              author: article.author,
              publisher: ORGANIZATION_REF,
              ...("datePublished" in article ? { datePublished: article.datePublished } : {}),
              ...(article.dateModified ? { dateModified: article.dateModified } : {}),
              inLanguage,
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
          { "@type": "ListItem", position: 3, name: `Online Quran Classes ${countryLabel}`, item: url },
        ],
      },
    ],
  };
}

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

function NorthAmericaPhoneLine() {
  const linkStyle = { display: "inline-flex", alignItems: "center", gap: 6, color: "var(--gold-lt)", fontWeight: 700, fontSize: ".86rem" } as const;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px", marginTop: 14 }}>
      <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".82rem" }}>
        US &amp; Canada line ({CONTACT.usaAvailableHours}):
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

export default async function CountryLandingPage({ slug }: { slug: string }) {
  const market = getCountryMarket(slug);
  const content = market?.content;
  if (!market || !content) throw new Error(`No country landing content for ${slug}`);
  const countryLabel = getLocation(slug)?.country ?? content.countryName;

  const rates = await getDisplayRates();
  const countryGuide = content.guide === "country" ? getCountryGuide(slug) : undefined;
  const reviewCountry = content.reviewCountry;
  const localReviews = reviewCountry ? trustpilotReviews.filter((review) => review.country.includes(reviewCountry)) : [];
  const whatsappUrl = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(content.whatsappText)}`;
  const jsonLd = buildJsonLd(slug, content, countryLabel);
  const url = pageUrl(slug);

  const heroBullets = [
    "Private one-to-one live lessons",
    "Beginner-friendly, from the Arabic alphabet upward",
    content.scheduleBullet,
    "Classes for children and adults",
    "Female tutor requests, subject to availability",
    `${TRIAL_OFFER} — no credit card`,
  ];

  const reasons = [
    { icon: <Home size={21} />, title: "Learning from home", description: "Live lessons over video — no travel to a class or weekend school." },
    { icon: <UserCheck size={21} />, title: "Individual attention", description: "One learner, one tutor: every line is heard and corrected straight away." },
    { icon: <CalendarClock size={21} />, title: "Flexible scheduling", description: `Request windows in your local time in ${content.countryName}; the recurring slot is confirmed after tutor matching.` },
    { icon: <BarChart3 size={21} />, title: "Parent progress updates", description: "Follow attendance, homework and teacher reports in the Parent Portal." },
    { icon: <Users size={21} />, title: "Every age and level", description: "From four-year-olds learning letters to adults polishing Tajweed." },
  ];

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
              {countryLabel}
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
                {content.eyebrow}
              </span>
              <h1 id="country-hero-title">{content.h1}</h1>
              <p style={{ maxWidth: 610, marginBottom: 24 }}>{content.hook}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "grid", gap: 11 }}>
                {heroBullets.map((item) => (
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
              {content.northAmericaLine && <NorthAmericaPhoneLine />}

              <p style={{ color: "rgba(255,255,255,.65)", fontSize: ".78rem", lineHeight: 1.6, marginTop: 16, maxWidth: 580 }}>
                {content.hideNoOfficeNote
                  ? "Lessons are live over video."
                  : `NoorPath teaches online only and has no office in ${content.countryName}.`}{" "}
                Tutor and schedule availability are confirmed after your request.
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
                <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: 5 }}>Book Your Free Trial</h2>
                <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".84rem", lineHeight: 1.55 }}>
                  Tell us the learner&apos;s level and the times that suit you.
                </p>
              </div>
              <CTAForm defaultCountry={content.formCountry} idPrefix="country-hero-trial" formVariant="country-hero" />
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
                <div style={{ color: "var(--emerald)", fontWeight: 800, fontSize: "1.25rem", marginBottom: 3 }}>{fact.value}</div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick answer + why online */}
      <section aria-labelledby="country-why-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div
            className="np-quick-answer"
            style={{
              background: "rgba(10,110,79,.06)",
              borderLeft: "4px solid var(--emerald)",
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 40,
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 6 }}>{content.quickAnswer.q}</h2>
            <p style={{ margin: 0, color: "var(--slate)", lineHeight: 1.75 }}>{content.quickAnswer.a}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ marginBottom: 36 }}>
            <div>
              <span className="section-eyebrow">Learning from home</span>
              <h2 id="country-why-heading" className="section-title">
                Why families in {content.countryName} choose <em className="accent">online Quran learning</em>
              </h2>
              <p className="section-desc">
                {content.whyIntro} Every lesson is part of NoorPath&apos;s live{" "}
                <Link href="/online-quran-classes" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  online Quran classes
                </Link>
                , taught one-to-one.
              </p>
            </div>
            <div style={{ position: "relative", aspectRatio: "3 / 2", borderRadius: 20, overflow: "hidden" }}>
              <Image src={content.heroImage.src} alt={content.heroImage.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {reasons.map((reason) => (
              <div key={reason.title} style={{ ...cardStyle, padding: 20 }}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  {reason.icon}
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{reason.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section aria-labelledby="country-courses-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Courses</span>
          <h2 id="country-courses-heading" className="section-title">
            Quran courses for learners in <em className="accent">{content.countryName}</em>
          </h2>
          <p className="section-desc">Every course is taught one-to-one. The tutor checks the learner&apos;s level in the trial and suggests where to start.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COURSES.map((course) => (
              <Link key={course.title} href={course.href} style={{ ...cardStyle, display: "block", textDecoration: "none", color: "inherit" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 6, color: "var(--charcoal)" }}>{course.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.6, margin: 0 }}>{course.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learner groups */}
      <section aria-labelledby="country-learners-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Who it&apos;s for</span>
          <h2 id="country-learners-heading" className="section-title">
            Classes for <em className="accent">different learners</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 8 }}>
            {LEARNER_GROUPS.map((group) => (
              <div key={group.title} style={cardStyle}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  {group.icon}
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 8 }}>{group.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".93rem", lineHeight: 1.7, marginBottom: 12 }}>{group.body}</p>
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
          <TrialCtaBand text="Tell us who will learn and we'll confirm a tutor before the trial." whatsappUrl={whatsappUrl} />
        </div>
      </section>

      {/* Time zones */}
      <section aria-labelledby="country-timezones-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Scheduling</span>
          <h2 id="country-timezones-heading" className="section-title">
            Class times in <em className="accent">{content.countryName}</em>
          </h2>
          <p className="section-desc" style={{ maxWidth: 760 }}>
            {content.timeZonesIntro} You request lesson windows in your own local time, and NoorPath confirms the trial and
            recurring slot individually — there is no fixed public timetable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.timeZones.map((tz) => (
              <div key={tz.zone} style={{ ...cardStyle, padding: 20 }}>
                <span style={iconBadgeStyle} aria-hidden="true">
                  <Clock size={20} />
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>{tz.zone}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>{tz.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ ...cardStyle, marginTop: 20, background: "rgba(201,146,42,.06)" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>Clock changes and the school week</h3>
            <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.7, margin: "0 0 8px" }}>{content.clockNote}</p>
            <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.7, margin: 0 }}>{content.schoolWeek}</p>
          </div>
          {content.cityLinks.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>City scheduling notes</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {content.cityLinks.map((city) => (
                  <Link key={city.href} href={city.href} style={chipLinkStyle}>
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {content.localNotes && content.localNotes.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 12 }}>Notes for families in {content.countryName}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.localNotes.map((note) => (
                  <div key={note.title} style={{ ...cardStyle, padding: 20 }}>
                    <h4 style={{ fontSize: ".98rem", fontWeight: 700, marginBottom: 6 }}>{note.title}</h4>
                    <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: note.link ? "0 0 10px" : 0 }}>{note.body}</p>
                    {note.link && (
                      <Link href={note.link.href} style={inlineLinkStyle}>
                        {note.link.label} <ChevronRight size={16} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How classes work */}
      <section aria-labelledby="country-steps-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Getting started</span>
          <h2 id="country-steps-heading" className="section-title">
            How classes <em className="accent">work</em>
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {STEPS.map((step, index) => (
              <li key={step.title} style={{ ...cardStyle, padding: 20 }}>
                <span aria-hidden="true" style={{ color: "#a8721a", fontWeight: 800, fontSize: "1.4rem", display: "block", marginBottom: 6 }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.6, margin: 0 }}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plans and prices */}
      <section aria-labelledby="country-pricing-heading" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <span className="section-eyebrow">Plans</span>
          <h2 id="country-pricing-heading" className="section-title">
            Plans and <em className="accent">prices</em>
          </h2>
          <CurrencyProvider defaultCode={market.currency} rates={rates}>
            <div style={{ marginBottom: 20 }}>
              <CurrencySelector />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRICING_PLANS.map((plan) => (
                <div key={plan.name} style={cardStyle}>
                  <h3 style={{ color: "var(--emerald)", fontWeight: 800, fontSize: ".8rem", letterSpacing: ".8px", textTransform: "uppercase", marginBottom: 8 }}>
                    {plan.name}
                  </h3>
                  <div style={{ fontFamily: "'Playfair Display',serif", color: "var(--charcoal)", fontWeight: 700, fontSize: "2rem" }}>
                    ${plan.monthlyPriceUsd}
                    <span style={{ fontFamily: "inherit", color: "var(--muted)", fontSize: ".8rem", fontWeight: 500 }}> / month</span>
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: ".86rem", fontWeight: 600, minHeight: 20, marginBottom: 12 }}>
                    <LocalPrice usd={plan.monthlyPriceUsd} />
                  </div>
                  <p style={{ color: "var(--slate)", fontSize: ".88rem", margin: "0 0 8px" }}>
                    {plan.sessionsPerWeek} lesson{plan.sessionsPerWeek > 1 ? "s" : ""} a week · {plan.sessionMinutes} minutes ·{" "}
                    {plan.sessionsPerMonth} a month
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.6, margin: 0 }}>{plan.description}</p>
                </div>
              ))}
            </div>
            <PriceDisclosure style={{ color: "var(--muted)", fontSize: ".8rem", lineHeight: 1.6, margin: "16px 0 0", maxWidth: 760 }} />
          </CurrencyProvider>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, marginTop: 12 }}>
            Sibling discounts: {FAMILY_DISCOUNTS.map((d) => `${d.discountPercent}% for ${d.siblings}`).join(", ")}.{" "}
            <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Compare all plans
            </Link>
            .
          </p>
          <TrialCtaBand text={`Start with ${TRIAL_OFFER} before choosing a plan — no card required.`} whatsappUrl={whatsappUrl} />
        </div>
      </section>

      {/* Parent portal and trust */}
      <section aria-labelledby="country-portal-heading">
        <div className="max-w-[1000px] mx-auto px-4">
          <span className="section-eyebrow">For parents</span>
          <h2 id="country-portal-heading" className="section-title">
            Parent Portal and <em className="accent">progress</em>
          </h2>
          <p className="section-desc">
            Enrolled families get secure Parent Portal access for each child, so you can see what happened in class even
            when you were at work.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
            {PORTAL_FEATURES.map((feature) => (
              <li key={feature.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: ".93rem", fontWeight: 600 }}>
                <span style={{ color: "var(--emerald)", display: "inline-flex" }} aria-hidden="true">
                  {feature.icon}
                </span>
                {feature.label}
              </li>
            ))}
          </ul>
          <ul style={{ paddingLeft: 18, margin: 0, display: "grid", gap: 6, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.6 }}>
            <li>{TUTOR_FACTS.credentials}</li>
            <li>{TUTOR_FACTS.rematch}</li>
            <li>A class can be moved with {RESCHEDULE_NOTICE_HOURS} hours&apos; notice, subject to tutor availability.</li>
            <li>
              Plans can be cancelled with {CANCELLATION_NOTICE_DAYS} days&apos; notice before the next billing date.{" "}
              <Link href="/safeguarding" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                Safeguarding guidance for parents
              </Link>
              .
            </li>
            <li>
              NoorPath is rated {TRUSTPILOT.score}/5 on{" "}
              <a href={TRUSTPILOT.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                Trustpilot
              </a>{" "}
              from {TRUSTPILOT.reviewCount} public reviews (checked {TRUSTPILOT.lastChecked}).
            </li>
          </ul>
          {localReviews.length > 0 && (
            <div style={{ marginTop: 28 }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 12 }}>
                Reviews from families in {content.countryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {localReviews.map((review) => (
                  <figure key={review.name} style={{ ...cardStyle, padding: 20, margin: 0 }}>
                    <div aria-label={`${review.stars} out of 5 stars`} style={{ color: "#007f55", letterSpacing: 2, marginBottom: 8 }}>
                      {"★".repeat(review.stars)}
                    </div>
                    <blockquote style={{ margin: "0 0 10px", color: "var(--slate)", fontSize: ".92rem", lineHeight: 1.7 }}>
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <figcaption style={{ fontSize: ".84rem", color: "var(--muted)" }}>
                      <strong style={{ color: "var(--charcoal)" }}>{review.name}</strong> · {review.country} · {review.date} ·{" "}
                      <a href={TRUSTPILOT.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--emerald)" }}>
                        Trustpilot
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Long-form guide */}
      {content.guide === "uk" && (
        <section id="country-guide" style={{ background: "var(--ivory)" }}>
          <div className="max-w-[1000px] mx-auto px-4">
            <UkQuranClassesGuide />
          </div>
        </section>
      )}
      {countryGuide && (
        <section id="country-guide" style={{ background: "var(--ivory)" }}>
          <div className="max-w-[1000px] mx-auto px-4">
            <CountryQuranClassesGuide guide={countryGuide} eyebrow={`Guide for families in ${content.countryName}`} />
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="country-faq-heading">
        <div className="max-w-[900px] mx-auto px-4">
          <span className="section-eyebrow">FAQ</span>
          <h2 id="country-faq-heading" className="section-title">
            Online Quran classes in {content.countryName}: <em className="accent">common questions</em>
          </h2>
          <FaqJsonLd faqs={content.faqs} pageUrl={url} />
          <div style={{ display: "grid", gap: 12, marginTop: 8 }}>
            {content.faqs.map((faq) => (
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
        aria-labelledby="country-final-cta-heading"
        style={{ background: "linear-gradient(135deg, var(--emerald-dk, #0a3d32), var(--emerald, #0d5c4a))" }}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="country-final-cta-heading" style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: 12, lineHeight: 1.25 }}>
                Start your child&apos;s Quran learning journey from home
              </h2>
              <p style={{ color: "rgba(255,255,255,.82)", lineHeight: 1.7, marginBottom: 20 }}>
                Send a short enquiry with your local time and learning goal. NoorPath confirms a tutor and time, then you
                attend {TRIAL_OFFER} — no credit card needed.
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
              {content.northAmericaLine && <NorthAmericaPhoneLine />}
            </div>
            <div style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.16)", borderRadius: 20, padding: "24px 22px" }}>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", textAlign: "center", marginBottom: 14 }}>{CTA_LABEL}</h3>
              <CTAForm defaultCountry={content.formCountry} idPrefix="country-final-trial" formVariant="country-final" />
            </div>
          </div>
        </div>
      </section>

      <LocationConversionBar whatsappText={content.whatsappText} />
    </>
  );
}
