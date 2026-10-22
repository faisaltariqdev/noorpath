import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import OnlineQuranClassesGuide from "@/components/OnlineQuranClassesGuide";
import AiDirectAnswerBox from "@/components/AiDirectAnswerBox";
import MadrasahVsOnlineComparison from "@/components/MadrasahVsOnlineComparison";
import TripleGuaranteeBadge from "@/components/TripleGuaranteeBadge";
import FreeResourceLeadMagnet from "@/components/FreeResourceLeadMagnet";
import LocationConversionBar from "@/components/LocationConversionBar";
import LocationHeroCtaCard from "@/components/LocationHeroCtaCard";
import { BASE_URL, ORGANIZATION_REF } from "@/lib/organizationSchema";
import { getCountryHubHreflang, PRIORITY_MARKETS } from "@/lib/geoSeo";
import { CheckCircle, Clock, Users, Award, Video, Shield, Lock } from "lucide-react";
import { PRICING_PLANS } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes — Live 1-on-1 Lessons | NoorPath",
  },
  description:
    "Live 1-on-1 online Quran classes for kids and adults: Noorani Qaida, Tajweed, Hifz & Arabic with timezone matching. Free 30-min trial, no card required.",
  keywords: [
    "online quran classes", "learn quran online", "quran classes online", "online quran academy",
    "quran tutor online", "live quran classes", "quran classes for kids", "online quran teacher",
    "best online quran classes", "quran learning online", "1 on 1 quran classes", "free quran trial",
    "tajweed classes online", "noorani qaida online", "hifz program online", "islamic classes online",
    "one-to-one quran classes", "one to one quran classes",
    "online quran classes after school", "after school quran classes online",
    "quran lessons for busy families",
  ],
  alternates: {
    canonical: "https://www.noorpath.online/online-quran-classes",
    languages: getCountryHubHreflang(),
  },
  openGraph: {
    title: "NoorPath Academy | Online Quran Classes — Live One-to-One Lessons",
    description: "Personalised Quran classes for kids and adults: Qaida, reading, Tajweed, Hifz and Islamic studies, with timezone-based matching and a free trial.",
    url: "https://www.noorpath.online/online-quran-classes",
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
    modifiedTime: "2026-08-11T00:00:00.000Z",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "A child learning Quran online with a live NoorPath tutor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath Academy | Online Quran Classes",
    description: "Live one-to-one Quran learning for children and adults, with tutor matching by goals and timezone and a free trial request.",
    images: ["/og-image.png"],
  },
};

const features = [
  { icon: <Award size={22} />, title: "Tutor Matching", desc: "Request a tutor by learner level, goals, timezone and male or female preference. Available tutor details are confirmed before enrolment." },
  { icon: <Users size={22} />, title: "1-on-1 Private Sessions", desc: "Each live class is arranged as one-to-one Quran classes for one learner and one tutor, rather than a group — clearer correction for busy family schedules." },
  { icon: <Clock size={22} />, title: "Timezone-Based Scheduling", desc: "Request online Quran classes after school, or evening or weekend windows in your timezone — including for families abroad. The recurring time is confirmed after matching; tutor availability is confirmed after your request." },
  { icon: <Shield size={22} />, title: "Female Tutor Requests", desc: "Request a female tutor for sisters or daughters. NoorPath confirms a suitable match based on current availability." },
  { icon: <Video size={22} />, title: "Live Video Lessons", desc: "Sessions use an agreed online meeting platform and lesson materials suited to the learning goal." },
  { icon: <CheckCircle size={22} />, title: "Clear Learning Goals", desc: "Tutors set lesson goals according to the learner's assessed level, pace and selected course. Language of instruction preferences are recorded where available during matching." },
];

const pageUrl = `${BASE_URL}/online-quran-classes`;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Online Quran Classes — Live One-to-One",
      description: "Live one-to-one online Quran classes for children and adults covering Noorani Qaida, Quran reading, Tajweed, Hifz and Islamic studies.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: [
        { "@type": "PeopleAudience", suggestedMinAge: 4, audienceType: "Children learning Quran online" },
        { "@type": "Audience", audienceType: "Adult Quran learners" },
      ],
      areaServed: [
        ...PRIORITY_MARKETS.map(({ country }) => country),
      ].map((name) => ({ "@type": "Country", name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online Quran Courses",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Noorani Qaida Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Tajweed Classes Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Hifz Program Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Arabic Language Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Islamic Studies Online" } },
        ],
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      url: pageUrl,
    },
    {
      "@type": "Course",
      "@id": `${pageUrl}#course`,
      name: "Online Quran Classes for Kids and Adults",
      description: "A personalised online Quran learning pathway covering Noorani Qaida, Quran reading, Tajweed, Hifz and Islamic studies through live one-to-one teaching.",
      provider: ORGANIZATION_REF,
      url: pageUrl,
      courseMode: "online",
      inLanguage: "en",
      educationalLevel: "Beginner to advanced",
      category: "Quran Education",
      coursePrerequisites: "No prior Arabic or Quran reading experience is required for beginners.",
      hasCourseInstance: PRICING_PLANS.map((plan) => ({
        "@type": "CourseInstance",
        name: `${plan.name} — ${plan.sessionsPerWeek}x ${plan.sessionMinutes} min per week`,
        description: `${plan.sessionsPerWeek} live one-to-one ${plan.sessionMinutes}-minute sessions per week.`,
        courseMode: "online",
        courseWorkload: `PT${plan.sessionMinutes}M`,
        instructor: ORGANIZATION_REF,
        offers: {
          "@type": "Offer",
          name: `${plan.name} Plan`,
          price: String(plan.monthlyPriceUsd),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://www.noorpath.online/pricing",
          category: "Quran Education",
        },
      })),
      offers: PRICING_PLANS.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan`,
        price: String(plan.monthlyPriceUsd),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://www.noorpath.online/pricing",
        category: "Quran Education",
      })),
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#guide`,
      headline: "Online Quran Classes: Global Guide for Kids and Adults",
      description: "A practical guide to choosing live online Quran classes, tutors, courses, safeguarding, progress measures and a suitable learning pathway.",
      mainEntityOfPage: { "@id": pageUrl },
      author: { "@type": "Person", name: "Faisal Tariq", url: `${BASE_URL}/founder` },
      publisher: ORGANIZATION_REF,
      image: `${BASE_URL}/og-image.png`,
      datePublished: "2026-07-14",
      dateModified: "2026-07-15",
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: "https://www.noorpath.online/online-quran-classes" },
      ],
    },
  ],
};

export default function OnlineQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Online Quran Classes</span>
          </nav>
          <h1>Online Quran Classes — Live One-to-One Lessons</h1>
          <p>
            Personalised one-to-one Quran classes for kids and adults — from Noorani Qaida and Quran reading to Tajweed, Hifz and Islamic studies.
            Request online Quran classes after school or at another window that fits busy families, with tutor matching across timezones.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/one-on-one-quran-classes" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>1-to-1 Classes</Link>
            <Link href="/online-quran-classes-for-kids" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Kids Classes</Link>
            <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View All Courses</Link>
          </div>
          <div style={{ marginTop: 28 }}>
            <LocationHeroCtaCard whatsappText="Assalamu Alaikum, I want to book a free online Quran trial class. Please share tutor availability and the next steps." />
          </div>
        </div>
      </div>

      {/* AI Search / GEO Direct Answer Box */}
      <section style={{ maxWidth: 1200, margin: "32px auto 0", padding: "0 16px" }}>
        <AiDirectAnswerBox country="Worldwide" timezone="Your Local Time" />
      </section>

      {/* Features */}
      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title">Why Families Choose <em className="accent">NoorPath</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive pillar guide */}
      <section className="oqc-guide-section">
        <div className="max-w-[980px] mx-auto px-4">
          <header style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">Complete 2026 Global Guide</span>
            <h2 className="section-title">
              How to Choose the Right <em className="accent">Online Quran Classes</em>
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 760, margin: "0 auto", lineHeight: 1.8 }}>
              A practical global guide for Muslim parents and adult learners comparing tutors,
              courses, safeguarding, schedules and progress.
            </p>
            <p style={{ color: "var(--muted)", fontSize: ".8rem", marginTop: 12 }}>
              Written by <Link href="/founder" style={{ color: "var(--emerald)", fontWeight: 700 }}>Faisal Tariq, Founder of NoorPath</Link>
              {" "}· Editorially reviewed under the <Link href="/editorial-policy" style={{ color: "var(--emerald)", fontWeight: 700 }}>NoorPath editorial policy</Link>
              {" "}· Updated 15 July 2026
            </p>
          </header>
          <OnlineQuranClassesGuide />
          <aside className="highlight-box" aria-labelledby="planning-resources-heading">
            <h2 id="planning-resources-heading">Evidence and planning resources</h2>
            <p>
              Families can use our{" "}
              <Link href="/blog/online-quran-class-setup" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                online Quran class setup guide
              </Link>{" "}
              to prepare the learning space, technology and routine, then{" "}
              <Link href="/blog/quran-learning-method-comparisons" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                compare Quran learning methods
              </Link>{" "}
              to weigh the trade-offs between different formats. The most suitable approach depends on the learner&apos;s
              goals, age, schedule, support needs and circumstances; no single format is universally best.
            </p>
          </aside>
          <aside className="highlight-box" aria-labelledby="country-guides-heading">
            <h2 id="country-guides-heading">Country-specific class guides</h2>
            <p>
              Visit <Link href="/locations" style={{ color: "var(--emerald)", fontWeight: 700 }}>all locations</Link> or
              choose a priority country:
            </p>
            <ul>
              {PRIORITY_MARKETS.map(({ country, slug }) => (
                <li key={slug}><Link href={`/locations/${slug}`} style={{ color: "var(--emerald)", fontWeight: 700 }}>{country}</Link></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Madrasah vs Online Comparison */}
      <MadrasahVsOnlineComparison />

      {/* Triple Peace-of-Mind Guarantee */}
      <div className="max-w-[1200px] mx-auto px-4">
        <TripleGuaranteeBadge />
      </div>

      {/* Free Lead Magnet for Undecided Parents */}
      <FreeResourceLeadMagnet />

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2.2rem", marginBottom: 16 }}>
                Book Your Free 30-Minute<br />
                <em style={{ color: "var(--gold-lt)" }}>Trial Class Today</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  [<CheckCircle size={18} key="1" />, "Free 30-minute trial — no credit card needed"],
                  [<Video size={18} key="2" />, "Live 1-on-1 lesson with the proposed tutor match"],
                  [<Lock size={18} key="3" />, "Privacy and trial terms linked before submission"],
                ].map(([icon, text]) => (
                  <div key={String(text)} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.85)", fontSize: ".92rem" }}>
                    <span style={{ color: "var(--gold-lt)" }}>{icon}</span> {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.25rem", marginBottom: 20, textAlign: "center" }}>
                Book Your Free Trial Class
              </h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>

      <LocationConversionBar whatsappText="Assalamu Alaikum, I want to book a free online Quran trial class. Please share tutor availability and the next steps." />
    </>
  );
}
