import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { Gift } from "lucide-react";
import { PRICING_PLANS, TRIAL, TRUSTPILOT } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "NoorPath Academy | Free Quran Classes Online — Free Trial",
  },
  description:
    "NoorPath Academy free 30-minute live one-to-one online Quran trial for kids or adults. No credit card; tutor and schedule availability are confirmed.",
  keywords: [
    "free quran classes online",
    "quran classes free trial no credit card",
    "free quran lessons online",
    "free online quran class",
    "free quran trial",
    "free quran learning",
    "free quran class for kids",
    "free quran course",
    "free islamic classes online",
    "free quran teacher online",
    "free quran education",
  ],
  alternates: { canonical: "https://www.noorpath.online/free-quran-classes-online" },
  openGraph: {
    title: "NoorPath Academy | Free Quran Classes Online — Free Trial",
    description:
      "Request a free 30-minute one-to-one online Quran trial for kids or adults. No credit card; tutor and schedule availability are confirmed.",
    url: "https://www.noorpath.online/free-quran-classes-online",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Quran Classes Online — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath Academy | Free Quran Trial",
    description: "Free 30-minute one-to-one online Quran trial request. No credit card.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "Is the free Quran class really free?",
    a: `Yes. NoorPath Academy offers a free ${TRIAL.durationMinutes}-minute live trial class. No credit card is required and there is no automatic paid enrolment. ${TRIAL.availabilityNote}`,
  },
  {
    q: "What happens in the free trial Quran class?",
    a: "The tutor discusses your current level and learning goals, teaches part of a live lesson, and explains suitable next steps. Progress varies by learner — no fixed completion timeline is promised.",
  },
  {
    q: "Who can join the free online Quran class?",
    a: "Children (from about age 4), teenagers, adults and seniors can request a trial. Matching considers age, level and schedule; availability is confirmed after your request.",
  },
  {
    q: "How do I book a free online Quran class?",
    a: "Use the form on this page with your name, WhatsApp number and preferred timing. The team confirms a slot and sends the meeting link after matching.",
  },
  {
    q: "What happens after the free trial?",
    a: `If you continue, published plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} class per week. You only pay if you choose a plan — see the pricing page for current USD amounts.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Free Online Quran Classes — Trial",
      description:
        "NoorPath Academy offers new learners a free 30-minute one-to-one online Quran trial request with no credit card required.",
      provider: ORGANIZATION_REF,
      serviceType: "Free Online Quran Trial Class",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free 30-Minute Trial Quran Class",
        description: "No credit card required. Tutor availability is confirmed after your request.",
      },
      url: "https://www.noorpath.online/free-quran-classes-online",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Free Quran Classes Online",
          item: "https://www.noorpath.online/free-quran-classes-online",
        },
      ],
    },
  ],
};

export default function FreeQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero" style={{ paddingBottom: 100 }}>
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Free Quran Classes Online</span>
          </nav>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(232,184,75,.15)",
              border: "1px solid rgba(232,184,75,.3)",
              borderRadius: 50,
              padding: "6px 18px",
              marginBottom: 16,
            }}
          >
            <Gift size={16} style={{ color: "var(--gold-lt)" }} />
            <span style={{ color: "var(--gold-lt)", fontSize: ".82rem", fontWeight: 700 }}>
              FREE {TRIAL.durationMinutes}-MIN TRIAL — No credit card
            </span>
          </div>
          <h1>
            Free Online Quran Classes
            <br />
            <em style={{ color: "var(--gold-lt)" }}>{TRIAL.durationMinutes}-Minute Live Trial</em>
          </h1>
          <p style={{ maxWidth: 580 }}>
            Request a free live 1-to-1 Quran class for a child or adult. NoorPath confirms an available tutor and
            suitable time after you submit the form — online only, no campus or home visit.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link
              href="#cta"
              style={{
                background: "var(--gold)",
                color: "var(--charcoal)",
                padding: "14px 32px",
                borderRadius: 12,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Book free trial class →
            </Link>
            <Link
              href="/pricing"
              style={{
                border: "1px solid rgba(255,255,255,.45)",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 600,
                textDecoration: "none",
                fontSize: ".95rem",
              }}
            >
              View USD pricing
            </Link>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
            {[
              "✓ No trial fee",
              "✓ No credit card",
              "✓ Live 1-to-1 class",
              "✓ Tutor details confirmed",
              "✓ Timezone matching",
            ].map((t) => (
              <span key={t} style={{ color: "rgba(255,255,255,.8)", fontSize: ".83rem" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "56px 0 24px" }}>
        <div className="max-w-[760px] mx-auto px-4">
          <div
            style={{
              background: "rgba(10,110,79,.06)",
              borderLeft: "4px solid var(--emerald)",
              borderRadius: 12,
              padding: "20px 26px",
              fontSize: ".95rem",
              lineHeight: 1.75,
              color: "#374151",
            }}
          >
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            “Free Quran classes online” at NoorPath means a free {TRIAL.durationMinutes}-minute live one-to-one trial —
            not an unlimited free course. After the trial, paid plans are published in USD on the{" "}
            <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              pricing page
            </Link>
            . {TRIAL.availabilityNote}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0 72px", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.8rem,3.5vw,2.3rem)",
                color: "var(--charcoal)",
              }}
            >
              What is included in the free trial?
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              A real live 1-to-1 session — not a recording or group webinar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Level check",
                desc: "The tutor listens to current reading (or starts from letters) to suggest a suitable course route — Qaida, reading, Tajweed or Hifz.",
              },
              {
                title: "Live 1-to-1 teaching",
                desc: `${TRIAL.durationMinutes} minutes of live instruction shaped to age, goals and ability — not a generic recording.`,
              },
              {
                title: "Honest next steps",
                desc: "You leave with a clear suggested focus and practice ideas. No guaranteed timeline or Hifz completion date is promised.",
              },
              {
                title: "Q&A for parents",
                desc: "Ask about curriculum, schedule preferences, female-tutor requests, family plans and safeguarding expectations.",
              },
              {
                title: "Beginner-friendly start",
                desc: "Complete beginners can be introduced to Arabic letters and sound formation at a calm pace.",
              },
              {
                title: "Match confirmation",
                desc: "Relevant tutor details and schedule availability are confirmed after matching — preferences are requests until then.",
              },
            ].map((item) => (
              <div key={item.title} className="content-card">
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.05rem",
                    color: "var(--charcoal)",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.8rem,3.5vw,2.3rem)",
                color: "var(--charcoal)",
              }}
            >
              How matching and enrolment work
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              Ranking-relevant clarity for families comparing free trials: process first, then decide whether a paid
              plan fits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: 900, margin: "0 auto" }}>
            {[
              {
                step: "1",
                title: "Submit the trial request",
                desc: "Share learner age/level, preferred local time windows and any female-tutor preference.",
              },
              {
                step: "2",
                title: "Tutor and slot confirmation",
                desc: TRIAL.availabilityNote,
              },
              {
                step: "3",
                title: "Attend the live lesson",
                desc: "Join from home on a known video platform. Parents should supervise younger learners in a shared space.",
              },
              {
                step: "4",
                title: "Choose only if it fits",
                desc: `Review published USD plans (from $${PRICING_PLANS[0].monthlyPriceUsd}/month). There is no automatic charge after the trial.`,
              },
            ].map((item) => (
              <div key={item.step} className="content-card" style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "var(--emerald)",
                    color: "#fff",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.05rem", color: "var(--charcoal)", marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(1.8rem,3.5vw,2.3rem)",
                color: "var(--charcoal)",
              }}
            >
              Who the free trial is for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Young children",
                desc: "Ages about 4–8. Short attention spans, letter recognition and gentle correction — subject to tutor match.",
              },
              {
                label: "School-age kids",
                desc: "Noorani Qaida, Quran reading, Tajweed basics and short duas around school routines.",
              },
              {
                label: "Teens & adults",
                desc: "Beginner to returning learners who want discreet one-to-one correction or Hifz structure.",
              },
              {
                label: "Sisters (female tutor)",
                desc: "Request a female tutor for daughters or adult sisters via the female teacher page.",
              },
            ].map((item) => (
              <div key={item.label} className="content-card">
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.05rem",
                    color: "var(--charcoal)",
                    marginBottom: 8,
                  }}
                >
                  {item.label}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28, color: "var(--muted)", fontSize: ".9rem" }}>
            Prefer a female tutor?{" "}
            <Link href="/female-quran-teacher-online" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Female Quran teacher online
            </Link>
            {" · "}
            Beginners hub:{" "}
            <Link href="/online-quran-for-beginners" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Online Quran for beginners
            </Link>
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[900px] mx-auto px-4">
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "2rem",
              color: "var(--charcoal)",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Trust signals we can substantiate
          </h2>
          <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 28, lineHeight: 1.7 }}>
            Trustpilot score {TRUSTPILOT.score}/5 from {TRUSTPILOT.reviewCount} reviews (checked {TRUSTPILOT.lastChecked}
            ). Read current reviews on{" "}
            <a href={TRUSTPILOT.url} rel="noopener noreferrer" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Trustpilot
            </a>
            . We do not invent testimonial counts or guaranteed learning timelines.
          </p>
          <div className="content-card">
            <h3 style={{ fontSize: "1.1rem", marginBottom: 12, color: "var(--charcoal)" }}>
              After the trial — course paths
            </h3>
            <ul style={{ margin: 0, paddingLeft: 20, color: "var(--muted)", lineHeight: 1.8, fontSize: ".92rem" }}>
              <li>
                <Link href="/noorani-qaida" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  Noorani Qaida
                </Link>{" "}
                — letter and decoding foundations
              </li>
              <li>
                <Link href="/learn-tajweed-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  Tajweed
                </Link>{" "}
                — rules applied in live recitation
              </li>
              <li>
                <Link href="/hifz-quran-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  Hifz
                </Link>{" "}
                — new memorisation plus revision (no fixed completion promise)
              </li>
              <li>
                <Link href="/online-quran-classes-for-adults" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  Adults
                </Link>{" "}
                and{" "}
                <Link href="/online-quran-classes-for-kids" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  kids
                </Link>{" "}
                programme pages
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 0", background: "var(--ivory)" }}>
        <div className="max-w-[900px] mx-auto px-4">
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "1.75rem",
              color: "var(--charcoal)",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Country scheduling hubs (online only)
          </h2>
          <p style={{ color: "var(--muted)", textAlign: "center", marginBottom: 24, lineHeight: 1.7 }}>
            Use your country hub for local-time context, then return here to book the trial. City pages are not
            campuses.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              ["/locations/online-quran-classes-uk", "UK"],
              ["/locations/online-quran-classes-usa", "USA"],
              ["/locations/online-quran-classes-canada", "Canada"],
              ["/locations/online-quran-classes-australia", "Australia"],
              ["/locations/online-quran-classes-singapore", "Singapore"],
              ["/locations/online-quran-classes-new-zealand", "New Zealand"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: ".85rem",
                  fontWeight: 600,
                  color: "var(--emerald)",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "6px 14px",
                  background: "#fff",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[760px] mx-auto px-4">
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "2rem",
              color: "var(--charcoal)",
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            Common questions about the free trial
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((item) => (
              <div
                key={item.q}
                className="faq-acc"
                style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 22px" }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 700,
                    fontSize: ".95rem",
                    color: "var(--charcoal)",
                    marginBottom: 8,
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display',serif",
                  color: "#fff",
                  fontSize: "clamp(1.8rem,3vw,2.4rem)",
                  marginBottom: 16,
                }}
              >
                Book your free Quran class
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.7 }}>
                {TRIAL.durationMinutes} minutes. Live. 1-to-1. Tutor match confirmed. No credit card.
              </p>
            </div>
            <div className="cta-form-wrap">
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
