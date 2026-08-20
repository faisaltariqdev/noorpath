import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import {
  CANCELLATION_NOTICE_DAYS,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  TRIAL,
} from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "NoorPath Academy | Online Quran Class Pricing — Family Plans",
  },
  description: `NoorPath Academy online Quran class pricing from $${PRICING_PLANS[0].monthlyPriceUsd}/month. Compare Starter, Standard and Intensive one-to-one plans and request a free trial.`,
  alternates: { canonical: "https://www.noorpath.online/pricing" },
  openGraph: {
    title: "NoorPath Academy | Online Quran Class Pricing — Family Plans",
    description: `From $${PRICING_PLANS[0].monthlyPriceUsd}/month. Starter, Standard, and Intensive plans. Family discount for 2+ siblings. Free ${TRIAL.durationMinutes}-minute trial.`,
    url: "https://www.noorpath.online/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Class Pricing — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath Academy | Online Quran Class Pricing",
    description: `From $${PRICING_PLANS[0].monthlyPriceUsd}/month. Family discount for siblings. Free trial request.`,
    images: ["/og-image.png"],
  },
};

const plans = PRICING_PLANS.map((plan) => ({
  ...plan,
  price: `$${plan.monthlyPriceUsd}`,
  period: "/month",
  sessions: `${plan.sessionsPerMonth} sessions/month`,
  sessionsPerWeekLabel: `${plan.sessionsPerWeek} ${plan.sessionsPerWeek === 1 ? "class" : "classes"} per week`,
  features: [
    `${plan.sessionsPerWeek} live one-to-one ${plan.sessionsPerWeek === 1 ? "class" : "classes"} per week`,
    `${plan.sessionMinutes}-minute sessions`,
    "Tutor matched by learner needs and availability",
    "Course materials used during lessons",
    "Schedule confirmed before enrolment",
  ],
  highlight: plan.name === "Standard",
  cta: `Choose ${plan.name}`,
}));

const faqs = [
  { q: "Is there a free trial?", a: `Yes. New learners can request a free ${TRIAL.durationMinutes}-minute trial class. No credit card is required. Tutor availability is confirmed after the request.` },
  { q: "Do you have family discounts?", a: `Yes — ${FAMILY_DISCOUNTS.map((item) => `${item.siblings}: ${item.discountPercent}% off`).join("; ")}. Contact us to confirm the applicable plan.` },
  { q: "Can I change my plan later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle." },
  { q: "What if I need to cancel?", a: `You can cancel with ${CANCELLATION_NOTICE_DAYS} days' notice before your next billing date. Payments already made for a partial month are not refundable, and remaining scheduled sessions may still be used.` },
  { q: "Are female tutors available?", a: "You can request a female tutor. NoorPath confirms a suitable match based on the learner's needs, schedule and current tutor availability." },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/pricing#service",
      name: "Online Quran Class Pricing",
      description: "Affordable online Quran class plans for kids, adults and families. Starter, Standard and Intensive plans with a free trial class.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      areaServed: "Worldwide",
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan`,
        price: plan.price.replace("$", ""),
        priceCurrency: "USD",
        description: `${plan.sessionsPerWeekLabel}. ${plan.description}`,
        url: "https://www.noorpath.online/pricing",
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.noorpath.online/pricing" },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Pricing</span>
          </nav>
          <h1>Simple, Transparent Pricing</h1>
          <p>No hidden fees. No long-term contracts. Family discounts for multiple siblings. Start with a free trial.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((p) => (
              <div key={p.name} style={{ background: p.highlight ? "var(--emerald)" : "#fff", border: p.highlight ? "none" : "2px solid var(--border)", borderRadius: 24, padding: "32px 28px", position: "relative" }}>
                {p.highlight && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "var(--charcoal)", fontSize: ".72rem", fontWeight: 700, padding: "5px 18px", borderRadius: 50, textTransform: "uppercase", whiteSpace: "nowrap" }}>Standard Plan</div>}
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, color: p.highlight ? "#fff" : "var(--charcoal)", marginBottom: 6 }}>{p.name}</h2>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: p.highlight ? "#fff" : "var(--emerald)" }}>{p.price}</span>
                  <span style={{ color: p.highlight ? "rgba(255,255,255,.6)" : "var(--muted)", fontSize: ".88rem" }}>{p.period}</span>
                </div>
                <div style={{ color: p.highlight ? "rgba(255,255,255,.8)" : "var(--emerald)", fontSize: ".82rem", fontWeight: 600, marginBottom: 12 }}>{p.sessionsPerWeekLabel}</div>
                <p style={{ color: p.highlight ? "rgba(255,255,255,.75)" : "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, marginBottom: 24 }}>{p.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: ".86rem", color: p.highlight ? "rgba(255,255,255,.85)" : "var(--slate)" }}>
                      <CheckCircle size={15} style={{ color: p.highlight ? "var(--gold-lt)" : "var(--emerald)", flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/free-quran-classes-online" style={{ display: "block", textAlign: "center", background: p.highlight ? "var(--gold)" : "var(--emerald)", color: p.highlight ? "var(--charcoal)" : "#fff", padding: "13px 0", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".92rem" }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Family discount */}
          <div className="px-5 py-8 sm:px-9" style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 20, textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 12 }}>👨‍👩‍👧‍👦 Family Sibling Discount</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 20px" }}>Enroll multiple children from the same family and save on every sibling.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FAMILY_DISCOUNTS.map((item) => (
                <div key={item.siblings} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{item.siblings}</div>
                  <div style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem" }}>{item.discountPercent}% off each sibling</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", color: "var(--charcoal)", textAlign: "center", marginBottom: 28 }}>Pricing FAQs</h2>
          <div className="max-w-[700px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}>{f.q}</summary>
                <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)", marginBottom: 16 }}>Start With a Free Trial — No Credit Card</h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                Experience NoorPath before you commit. Request a free {TRIAL.durationMinutes}-minute class with a tutor matched to the learner&apos;s needs and current availability.
              </p>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>Book Your Free Trial Class</h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
