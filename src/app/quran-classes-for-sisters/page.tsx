import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import InlineTrialCTA from "@/components/InlineTrialCTA";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Heart, Shield, Clock, BookOpen, Users } from "lucide-react";
import { PRICING_PLANS, TRIAL, VERIFIED_TRUST_CLAIMS } from "@/lib/academyFacts";
import { serializeJsonLd } from "@/lib/jsonLd";

export const revalidate = false;

const pageUrl = "https://www.noorpath.online/quran-classes-for-sisters";

export const metadata: Metadata = {
  title: {
    absolute: "Quran Classes for Sisters Online — Female Tutor | NoorPath Academy",
  },
  description:
    "Online Quran classes for sisters and ladies with a female tutor request. Live 1-to-1 Qaida, Tajweed or Hifz lessons — free 30-minute trial, no credit card.",
  keywords: [
    "quran classes for sisters",
    "quran classes for ladies online",
    "female quran teacher for sisters online",
    "online quran classes for women",
    "quran classes for sisters online",
    "ladies quran classes online",
    "female tutor quran sisters",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Quran Classes for Sisters Online | NoorPath Academy",
    description:
      "Request a female Quran tutor for sisters and ladies. Live 1-to-1 lessons and a free trial with no credit card.",
    url: pageUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Quran Classes for Sisters — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Classes for Sisters | NoorPath Academy",
    description: "Female tutor requests for sisters and ladies. Free 30-minute trial.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "Can sisters request a female Quran teacher online?",
    a: "Yes. Adult sisters and mothers can request a female tutor for Qaida, reading, Tajweed, or Hifz. Subject and schedule availability are confirmed after your request.",
  },
  {
    q: "Are Quran classes for ladies private (1-to-1)?",
    a: "Lessons are arranged as live one-to-one sessions — not a mixed group class. You can discuss privacy preferences when booking.",
  },
  {
    q: "Can a complete beginner sister start from zero?",
    a: "Yes. Many adult sisters begin with Noorani Qaida. No prior Arabic is required. The tutor assesses your level in the free trial.",
  },
  {
    q: "How much do Quran classes for sisters cost?",
    a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} session per week. The first ${TRIAL.durationMinutes}-minute trial is free and requires no credit card.`,
  },
  {
    q: "Do you offer evening or weekend slots for sisters who work or care for family?",
    a: "Share your preferred windows (including evening or weekend). Tutor availability is confirmed after matching — see also our page for working professionals.",
  },
];

const benefits = [
  { icon: <Shield size={22} />, title: "Female tutor requests", desc: "Request a female tutor for comfort and privacy. Availability is confirmed for the subject and schedule you need." },
  { icon: <Heart size={22} />, title: "Private 1-to-1 lessons", desc: "One learner, one tutor — no mixed group classroom." },
  { icon: <BookOpen size={22} />, title: "Beginner to Hifz", desc: "Qaida, Quran reading, Tajweed, or memorisation — matched after assessing your level." },
  { icon: <Clock size={22} />, title: "Schedule matching", desc: "Share morning, evening, or weekend preferences in your timezone." },
  { icon: <Users size={22} />, title: "Mothers & adult sisters", desc: "Adult-aware pacing for beginners and returning learners." },
  { icon: <CheckCircle size={22} />, title: "Credentials confirmed", desc: "Relevant credentials for the proposed tutor are confirmed before enrolment." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Quran Classes for Sisters Online",
      description:
        "Online Quran classes for sisters and ladies with female tutor requests. Live 1-to-1 lessons covering Qaida, Tajweed, or Hifz, with a free trial.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: { "@type": "Audience", audienceType: "Muslim women and adult sisters" },
      url: pageUrl,
      offers: {
        "@type": "Offer",
        price: String(PRICING_PLANS[0].monthlyPriceUsd),
        priceCurrency: "USD",
        description: `From $${PRICING_PLANS[0].monthlyPriceUsd}/month. Free ${TRIAL.durationMinutes}-minute trial request.`,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Quran Classes for Sisters", item: pageUrl },
      ],
    },
  ],
};

export default function QuranClassesForSistersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Quran Classes for Sisters</span>
          </nav>
          <h1>Quran Classes for Sisters &amp; Ladies Online</h1>
          <p>
            Private <strong style={{ color: "var(--gold-lt)" }}>1-to-1 Quran lessons</strong> with a{" "}
            <strong style={{ color: "var(--gold-lt)" }}>female tutor request</strong> for sisters, mothers, and adult learners.{" "}
            Free {TRIAL.durationMinutes}-minute trial — no credit card.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/female-quran-teacher-online" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
              Female Tutor Hub
            </Link>
            <Link href="/pricing" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
              Pricing
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ background: "rgba(10,110,79,.06)", borderLeft: "4px solid var(--emerald)", borderRadius: 12, padding: "20px 26px", marginBottom: 28, fontSize: ".95rem", lineHeight: 1.75, color: "#374151" }}>
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            Sisters and ladies can request a <strong>female Quran teacher online</strong> for private 1-to-1 lessons.
            Credentials and schedule are confirmed for the proposed tutor before enrolment.{" "}
            <a href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book free trial →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="content-card" style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", marginBottom: 14 }}>What we can confirm today</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
              {VERIFIED_TRUST_CLAIMS.map((c) => (
                <li key={c.id} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.65 }}>
                    <strong style={{ color: "var(--charcoal)" }}>{c.title}:</strong> {c.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[560px] mx-auto mb-16">
            <InlineTrialCTA
              placement="course-top"
              title="Book a sisters’ free trial"
              subtitle="Request a female tutor — name, WhatsApp or email, and preferred time."
            />
          </div>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-[760px] mx-auto mb-16">
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                  {f.q} <span style={{ color: "var(--emerald)", marginLeft: 8 }}>+</span>
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>

          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 14 }}>Related Pages</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                ["/female-quran-teacher-online", "Female Quran Teacher Online"],
                ["/quran-classes-for-working-professionals", "Classes for Working Professionals"],
                ["/online-quran-classes-for-adults", "Adult Quran Classes"],
                ["/one-on-one-quran-classes", "1-to-1 Quran Classes"],
                ["/free-quran-classes-online", "Free Trial"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".88rem", textDecoration: "none" }}>
                  → {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                Start with a Free Trial<br /><em style={{ color: "var(--gold-lt)" }}>Female Tutor Request</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                No credit card required. Request a free {TRIAL.durationMinutes}-minute class and assess tutor fit before choosing a plan.
              </p>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
                Book Your Free Trial Class
              </h3>
              <CTAForm formVariant="sisters-landing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
