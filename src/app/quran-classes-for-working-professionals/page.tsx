import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import InlineTrialCTA from "@/components/InlineTrialCTA";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Calendar, Briefcase, Moon, Monitor } from "lucide-react";
import { PRICING_PLANS, TRIAL, VERIFIED_TRUST_CLAIMS } from "@/lib/academyFacts";
import { serializeJsonLd } from "@/lib/jsonLd";

export const revalidate = false;

const pageUrl = "https://www.noorpath.online/quran-classes-for-working-professionals";

export const metadata: Metadata = {
  title: {
    absolute: "Quran Classes for Working Professionals — Evening & Weekend Online",
  },
  description:
    "Online Quran classes for working professionals with evening and weekend schedule matching. Live 1-to-1 lessons — free 30-minute trial, no credit card.",
  keywords: [
    "online quran classes for working professionals",
    "evening quran classes online",
    "weekend quran classes online",
    "quran classes after work",
    "flexible quran classes online adults",
    "quran classes for busy professionals",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Quran Classes for Working Professionals | NoorPath Academy",
    description:
      "Evening and weekend-friendly 1-to-1 online Quran lessons for busy adults. Free trial, no credit card.",
    url: pageUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Quran Classes for Working Professionals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Classes for Working Professionals | NoorPath",
    description: "Evening & weekend schedule matching. Free 30-minute trial.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "Can I take online Quran classes around a full-time job?",
    a: "Yes. Share evening, early-morning, or weekend windows in your timezone. Tutor availability is confirmed after matching — slots are not guaranteed for every timezone.",
  },
  {
    q: "Are lessons short enough for busy professionals?",
    a: `Session lengths depend on the plan (for example ${PRICING_PLANS[0].sessionMinutes}–${PRICING_PLANS[2].sessionMinutes} minutes). Many adults start with one or two lessons per week and short home practice.`,
  },
  {
    q: "I am a complete beginner with no Arabic — can I start?",
    a: "Yes. Adult beginners typically start with Noorani Qaida. The free trial assesses your level and recommends a starting point.",
  },
  {
    q: "Can I request a female tutor as a working sister?",
    a: "Yes. Request a female tutor when booking. See also Quran classes for sisters. Availability is confirmed after your request.",
  },
  {
    q: "How much do flexible adult Quran classes cost?",
    a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month. The first ${TRIAL.durationMinutes}-minute trial is free with no credit card.`,
  },
];

const benefits = [
  { icon: <Clock size={22} />, title: "Evening & weekend windows", desc: "Tell us when you are free after work or on weekends; we match against current tutor availability." },
  { icon: <Briefcase size={22} />, title: "Built for busy adults", desc: "Private 1-to-1 lessons — no travel, no group pace that moves without you." },
  { icon: <Calendar size={22} />, title: "Steady weekly rhythm", desc: "One to several sessions per week depending on your plan and practice capacity." },
  { icon: <Moon size={22} />, title: "Timezone matching", desc: "UK, US, Gulf, Canada, Australia and more — remote lessons with schedule confirmation after enquiry." },
  { icon: <Monitor size={22} />, title: "Live video lessons", desc: "Interactive online classes — not only pre-recorded courses." },
  { icon: <CheckCircle size={22} />, title: "Clear goals", desc: "Qaida, reading, Tajweed, or Hifz focus set after assessing your current level." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Online Quran Classes for Working Professionals",
      description:
        "Live one-to-one online Quran classes for working professionals with evening and weekend schedule matching, and a free trial request.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: { "@type": "Audience", audienceType: "Working adults and busy professionals" },
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
        { "@type": "ListItem", position: 2, name: "Quran Classes for Working Professionals", item: pageUrl },
      ],
    },
  ],
};

export default function QuranClassesForWorkingProfessionalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Working Professionals</span>
          </nav>
          <h1>Quran Classes for Working Professionals</h1>
          <p>
            Live <strong style={{ color: "var(--gold-lt)" }}>1-to-1 online Quran lessons</strong> with{" "}
            <strong style={{ color: "var(--gold-lt)" }}>evening and weekend</strong> schedule matching —
            for busy adults who cannot attend daytime madrassah. Free {TRIAL.durationMinutes}-minute trial, no credit card.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/online-quran-classes-for-adults" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
              All Adult Classes
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
            Working professionals can request <strong>online Quran classes</strong> around evening or weekend availability.
            Tutor and schedule are confirmed after your request — not every slot is available in every timezone.{" "}
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
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", marginBottom: 14 }}>Verified enrolment facts</h2>
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
              title="Book an after-work free trial"
              subtitle="Tell us evening or weekend preference — name + WhatsApp or email is enough."
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
                ["/online-quran-classes-for-adults", "Adult Quran Classes"],
                ["/quran-classes-for-sisters", "Classes for Sisters"],
                ["/one-on-one-quran-classes", "1-to-1 Classes"],
                ["/blog/learn-quran-online-adult-beginner-guide", "Adult Beginner Guide"],
                ["/pricing", "Pricing"],
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
                Evening-Friendly<br /><em style={{ color: "var(--gold-lt)" }}>Free Trial Class</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                No credit card. Share your preferred after-work or weekend window and we will confirm tutor availability.
              </p>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
                Book Your Free Trial Class
              </h3>
              <CTAForm formVariant="professionals-landing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
