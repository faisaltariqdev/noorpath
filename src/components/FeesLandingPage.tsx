import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CTAForm from "@/components/CTAForm";
import FaqJsonLd from "@/components/FaqJsonLd";
import TrustPolicyStrip from "@/components/TrustPolicyStrip";
import TripleGuaranteeBadge from "@/components/TripleGuaranteeBadge";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { serializeJsonLd } from "@/lib/jsonLd";
import { formatMoney, formatRateDate } from "@/lib/currency/format";
import { getDisplayRates } from "@/lib/currency/rates";
import {
  BASE_URL,
  CANCELLATION_NOTICE_DAYS,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  REFUND_POLICY,
  REFUND_WINDOW_DAYS,
  TRIAL,
  TRIAL_OFFER,
  TUTOR_FACTS,
} from "@/lib/academyFacts";

/**
 * FeesLandingPage — country-specific "how much do online Quran classes cost"
 * page. Prices come only from PRICING_PLANS (USD). Local-currency amounts are
 * approximate hints from licence-clear ECB rates (see src/lib/currency).
 */

export interface FeesPageConfig {
  path: string;
  /** Running-text name, e.g. "the UK". */
  countryName: string;
  /** Preselected country in the trial form. */
  formCountry: string;
  currency: string;
  currencyName: string;
  locationPath: string;
  locationLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  /** Short note on paying in this currency. */
  paymentNote: string;
  /** Country-specific fit paragraphs shown under "What affects the cost". */
  costFactors: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export function feesMetadata(config: FeesPageConfig): Metadata {
  const url = `${BASE_URL}${config.path}`;
  return {
    title: { absolute: config.metaTitle },
    description: config.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: config.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function FeesLandingPage({ config }: { config: FeesPageConfig }) {
  const rates = await getDisplayRates();
  const rate = rates.perUsd[config.currency];
  const rateDate = rates.ecbDate ? formatRateDate(rates.ecbDate) : null;
  const local = (usd: number, decimals = 0) =>
    rate && rateDate ? `≈ ${formatMoney(usd * rate, config.currency, decimals)}` : null;

  const url = `${BASE_URL}${config.path}`;
  const plans = PRICING_PLANS.map((p) => ({
    ...p,
    perClassUsd: p.monthlyPriceUsd / p.sessionsPerMonth,
    highlight: p.name === "Standard",
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: config.h1,
        description: config.metaDescription,
        isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL },
        about: { "@id": `${url}#service` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: [".page-hero-content h1", ".np-quick-answer"] },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Online Quran classes for families in ${config.countryName}`,
        provider: ORGANIZATION_REF,
        serviceType: "Online Quran Education",
        areaServed: config.formCountry,
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: `${p.name} plan`,
          price: String(p.monthlyPriceUsd),
          priceCurrency: "USD",
          description: `${p.sessionsPerWeek} live one-to-one ${p.sessionsPerWeek === 1 ? "class" : "classes"} per week, ${p.sessionMinutes} minutes each.`,
          url,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Pricing", item: `${BASE_URL}/pricing` },
          { "@type": "ListItem", position: 3, name: config.h1, item: url },
        ],
      },
    ],
  };

  const faqs = [
    ...config.faqs,
    {
      q: "Is there a free trial before I pay?",
      a: `Yes. New learners get ${TRIAL_OFFER}, live and 1-to-1, with no credit card. Tutor availability is confirmed after your request.`,
    },
    { q: "Can I get a refund?", a: REFUND_POLICY },
  ];

  const h2: React.CSSProperties = {
    fontFamily: "'Playfair Display',serif",
    fontSize: "1.6rem",
    color: "var(--charcoal)",
    marginBottom: 14,
  };
  const body: React.CSSProperties = { color: "var(--slate)", lineHeight: 1.75, fontSize: ".96rem" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/pricing" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Pricing</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{config.countryName === "the UK" ? "UK" : config.countryName}</span>
          </nav>
          <h1>{config.h1}</h1>
          <p>{config.intro}</p>
          <div style={{ marginTop: 22 }}>
            <a
              href="#book-trial"
              style={{ display: "inline-block", background: "var(--gold)", color: "var(--charcoal)", fontWeight: 700, padding: "13px 26px", borderRadius: 12, textDecoration: "none" }}
            >
              Start {TRIAL.classes} free trial sessions →
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div
            className="np-quick-answer max-w-[1000px] mx-auto mb-10 p-5 rounded-2xl"
            style={{ background: "rgba(10,110,79,0.05)", borderLeft: "4px solid var(--emerald)", fontSize: ".95rem", lineHeight: 1.7, color: "var(--charcoal)" }}
          >
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            {config.quickAnswer}
          </div>

          <h2 style={{ ...h2, textAlign: "center" }}>NoorPath plans for families in {config.countryName}</h2>
          <p style={{ ...body, textAlign: "center", maxWidth: 720, margin: "0 auto 28px" }}>
            Every plan is live and one-to-one. Plans are billed monthly in US dollars{rate && rateDate ? `; the ${config.currencyName} amounts below are approximate` : ""}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {plans.map((p) => (
              <div
                key={p.name}
                style={{ background: p.highlight ? "var(--emerald)" : "#fff", border: p.highlight ? "none" : "2px solid var(--border)", borderRadius: 24, padding: "30px 26px" }}
              >
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", fontWeight: 700, color: p.highlight ? "#fff" : "var(--charcoal)", marginBottom: 6 }}>{p.name}</h3>
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: "2.4rem", fontWeight: 800, color: p.highlight ? "#fff" : "var(--emerald)" }}>${p.monthlyPriceUsd}</span>
                  <span style={{ color: p.highlight ? "rgba(255,255,255,.65)" : "var(--muted)", fontSize: ".88rem" }}> /month</span>
                </div>
                {local(p.monthlyPriceUsd) && (
                  <div style={{ color: p.highlight ? "rgba(255,255,255,.8)" : "var(--muted)", fontSize: ".85rem", marginBottom: 8 }}>
                    {local(p.monthlyPriceUsd)} per month
                  </div>
                )}
                <div style={{ color: p.highlight ? "rgba(255,255,255,.85)" : "var(--emerald)", fontSize: ".84rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.sessionsPerWeek} {p.sessionsPerWeek === 1 ? "class" : "classes"} a week · {p.sessionMinutes} minutes each
                </div>
                <p style={{ color: p.highlight ? "rgba(255,255,255,.78)" : "var(--muted)", fontSize: ".88rem", lineHeight: 1.6, marginBottom: 18 }}>{p.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {[
                    `${p.sessionsPerMonth} live one-to-one lessons a month`,
                    `About $${p.perClassUsd.toFixed(2)} per class${local(p.perClassUsd, 2) ? ` (${local(p.perClassUsd, 2)})` : ""}`,
                    "Tutor matched to level, age and your time zone",
                  ].map((f) => (
                    <li key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: ".86rem", color: p.highlight ? "rgba(255,255,255,.88)" : "var(--slate)" }}>
                      <CheckCircle size={15} style={{ color: p.highlight ? "var(--gold-lt)" : "var(--emerald)", flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {rate && rateDate && (
            <p style={{ color: "var(--muted)", fontSize: ".8rem", textAlign: "center", marginBottom: 40 }}>
              {config.currencyName} figures are approximate, based on the European Central Bank euro reference rate of {rateDate} converted to US dollars. The price you agree at enrolment is the USD price.
            </p>
          )}

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 48 }}>
            <h2 style={h2}>What changes the cost for a family in {config.countryName}</h2>
            <p style={{ ...body, marginBottom: 18 }}>
              Two quotes are only comparable when the lessons are. Before you decide, check lesson length, lessons per month, whether lessons are truly one-to-one, and what the tutor can show you. These are the points that matter most here.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {config.costFactors.map((f) => (
                <div key={f.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, padding: "18px 20px" }}>
                  <h3 style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 6, fontSize: "1rem" }}>{f.title}</h3>
                  <p style={{ ...body, margin: 0, fontSize: ".92rem" }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 48 }}>
            <h2 style={h2}>Paying from {config.countryName}</h2>
            <p style={body}>{config.paymentNote}</p>
          </div>

          <div className="px-5 py-8 sm:px-9" style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 20, textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ ...h2, textAlign: "center" }}>Sibling discounts</h2>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 20px" }}>
              Enrol more than one child from the same family and each sibling is discounted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FAMILY_DISCOUNTS.map((d) => (
                <div key={d.siblings} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{d.siblings}</div>
                  <div style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem" }}>{d.discountPercent}% off each sibling</div>
                </div>
              ))}
            </div>
          </div>

          <TripleGuaranteeBadge />
          <TrustPolicyStrip heading="Before you pay: four straight answers" />

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 40 }}>
            <h2 style={h2}>Not sure which plan? Start free</h2>
            <p style={body}>
              Most families begin with {TRIAL_OFFER}. You meet the tutor, see how your child responds, and only then choose a plan. {TUTOR_FACTS.credentials} Cancelling needs {CANCELLATION_NOTICE_DAYS} days&apos; notice before the next billing date, with no cancellation fee, and there is a {REFUND_WINDOW_DAYS}-day refund window after the first paid class.
            </p>
            <p style={{ ...body, marginTop: 14 }}>
              More detail: <Link href={config.locationPath} style={{ color: "var(--emerald)", fontWeight: 600 }}>{config.locationLabel}</Link>
              {" · "}<Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 600 }}>full pricing page</Link>
              {" · "}<Link href="/online-quran-classes-for-kids" style={{ color: "var(--emerald)", fontWeight: 600 }}>classes for kids</Link>
              {" · "}<Link href="/noorani-qaida" style={{ color: "var(--emerald)", fontWeight: 600 }}>free Noorani Qaida practice</Link>
              {" · "}<Link href="/quran-classes-for-sisters" style={{ color: "var(--emerald)", fontWeight: 600 }}>classes for sisters</Link>
            </p>
          </div>

          <FaqJsonLd faqs={faqs} pageUrl={url} />
          <h2 style={{ ...h2, textAlign: "center", marginBottom: 24 }}>Frequently asked questions</h2>
          <div className="max-w-[760px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}>{f.q}</summary>
                <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="book-trial">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)", marginBottom: 16 }}>
                Try it before you pay anything
              </h2>
              <p style={{ color: "rgba(255,255,255,.78)", marginBottom: 20 }}>
                Take {TRIAL_OFFER} with a tutor matched to the learner and your time zone. No credit card.
              </p>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
                Start {TRIAL.classes} free trial sessions
              </h3>
              <CTAForm defaultCountry={config.formCountry} idPrefix="fees-final-trial" formVariant="country-final" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
