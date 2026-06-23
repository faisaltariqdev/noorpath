import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CTAForm from "@/components/CTAForm";

export const metadata: Metadata = {
  title: "Online Quran Class Pricing — Affordable Plans for Families",
  description: "Affordable online Quran class pricing from $29/month. Starter, Standard and Intensive family plans with certified tutors and free trial.",
  alternates: { canonical: "https://www.noorpath.online/pricing" },
  openGraph: {
    title: "Online Quran Class Pricing — Affordable Family Plans | NoorPath Academy",
    description: "From $29/month. Starter, Standard, and Intensive plans. Family discount for 2+ siblings. Free 30-min trial included.",
    url: "https://www.noorpath.online/pricing",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Class Pricing — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Class Pricing | NoorPath Academy",
    description: "From $29/month. Family discount for siblings. Free trial included.",
    images: ["/og-image.svg"],
  },
};

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    sessions: "4 sessions/month",
    sessionsPerWeek: "1 class per week",
    desc: "Perfect for beginners getting started with Qaida or basic Quran recitation.",
    features: [
      "1 live 1-on-1 class per week",
      "30-minute sessions",
      "Certified tutor assigned",
      "Weekly progress report",
      "Beginner learning materials",
      "WhatsApp parent updates",
    ],
    highlight: false,
    cta: "Start Starter Plan",
  },
  {
    name: "Standard",
    price: "$49",
    period: "/month",
    sessions: "8 sessions/month",
    sessionsPerWeek: "2 classes per week",
    desc: "Our most popular plan — steady progress for serious learners of all ages.",
    features: [
      "2 live 1-on-1 classes per week",
      "45-minute sessions",
      "Premium certified tutor",
      "Weekly detailed progress report",
      "All learning materials included",
      "WhatsApp + email updates",
      "Make-up class policy",
    ],
    highlight: true,
    cta: "Start Standard Plan",
  },
  {
    name: "Intensive",
    price: "$79",
    period: "/month",
    sessions: "16 sessions/month",
    sessionsPerWeek: "4 classes per week",
    desc: "Fastest progress plan — ideal for Hifz students or those wanting rapid improvement.",
    features: [
      "4 live 1-on-1 classes per week",
      "60-minute sessions",
      "Senior Hafiz/Hafiza tutor",
      "Daily tracking & detailed report",
      "Hifz revision system included",
      "Priority tutor access",
      "Parent consultation monthly",
    ],
    highlight: false,
    cta: "Start Intensive Plan",
  },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes! Every new student gets a completely free 30-minute trial class with no credit card required. Book it above." },
  { q: "Do you have family discounts?", a: "Yes — enroll 2 siblings and get 15% off, 3 siblings get 20% off, and 4+ siblings get 25% off. Contact us for exact pricing." },
  { q: "Can I change my plan later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle." },
  { q: "What if I need to cancel?", a: "No contracts. Cancel anytime with 7 days notice before your next billing date. No cancellation fees." },
  { q: "Are female tutors available?", a: "Yes, we have certified female tutors (Hafiza) available for female students and young girls at all plan levels." },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/pricing#service",
      name: "Online Quran Class Pricing",
      description: "Affordable online Quran class plans for kids, adults and families. Starter, Standard and Intensive plans with a free trial class.",
      provider: {
        "@type": "EducationalOrganization",
        name: "NoorPath Academy",
        url: "https://www.noorpath.online",
      },
      serviceType: "Online Quran Education",
      areaServed: "Worldwide",
      offers: plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan`,
        price: plan.price.replace("$", ""),
        priceCurrency: "USD",
        description: `${plan.sessionsPerWeek}. ${plan.desc}`,
        availability: "https://schema.org/InStock",
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
                {p.highlight && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "var(--charcoal)", fontSize: ".72rem", fontWeight: 700, padding: "5px 18px", borderRadius: 50, textTransform: "uppercase", whiteSpace: "nowrap" }}>⭐ Most Popular</div>}
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, color: p.highlight ? "#fff" : "var(--charcoal)", marginBottom: 6 }}>{p.name}</h2>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: p.highlight ? "#fff" : "var(--emerald)" }}>{p.price}</span>
                  <span style={{ color: p.highlight ? "rgba(255,255,255,.6)" : "var(--muted)", fontSize: ".88rem" }}>{p.period}</span>
                </div>
                <div style={{ color: p.highlight ? "rgba(255,255,255,.8)" : "var(--emerald)", fontSize: ".82rem", fontWeight: 600, marginBottom: 12 }}>{p.sessionsPerWeek}</div>
                <p style={{ color: p.highlight ? "rgba(255,255,255,.75)" : "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, marginBottom: 24 }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: ".86rem", color: p.highlight ? "rgba(255,255,255,.85)" : "var(--slate)" }}>
                      <CheckCircle size={15} style={{ color: p.highlight ? "var(--gold-lt)" : "var(--emerald)", flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#cta" style={{ display: "block", textAlign: "center", background: p.highlight ? "var(--gold)" : "var(--emerald)", color: p.highlight ? "var(--charcoal)" : "#fff", padding: "13px 0", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".92rem" }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Family discount */}
          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 20, padding: "32px 36px", textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 12 }}>👨‍👩‍👧‍👦 Family Sibling Discount</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 20px" }}>Enroll multiple children from the same family and save on every sibling.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[["2 Siblings","15% off each sibling"],["3 Siblings","20% off each sibling"],["4+ Siblings","25% off each sibling"]].map(([n, d]) => (
                <div key={n} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{n}</div>
                  <div style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem" }}>{d}</div>
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
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2.2rem", marginBottom: 16 }}>Start With a Free Trial — No Credit Card</h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>Experience NoorPath before you commit. Get a free 30-minute class with a certified tutor.</p>
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
