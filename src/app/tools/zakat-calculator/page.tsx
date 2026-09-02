import type { Metadata } from "next";
import Link from "next/link";
import ZakatCalculator from "@/components/tools/ZakatCalculator";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { NISAB_GRAMS } from "@/lib/zakat/engine";

export const revalidate = false;

const URL = "https://www.noorpath.online/tools/zakat-calculator";

export const metadata: Metadata = {
  title: absolutePageTitle("Zakat Calculator — Gold, Cash, Stocks & 401k | NoorPath"),
  description:
    "Free zakat calculator with live gold & silver nisab. Covers cash, stocks, crypto, RSUs & 401k with scholarly positions. Private — runs in your browser.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Free Zakat Calculator — Gold, Cash, Stocks, Crypto & 401k | NoorPath",
    description:
      "Calculate zakat on modern assets with live nisab prices and documented scholarly positions for retirement accounts. Everything runs privately in your browser.",
    url: URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Zakat Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Zakat Calculator | NoorPath",
    description:
      "Zakat on cash, gold, stocks, crypto, RSUs and 401k — live nisab, cited scholarly positions, fully private in-browser calculation.",
    images: ["/og-image.png"],
  },
};

/**
 * Single source for the visible FAQ and the FAQPage JSON-LD so the two can
 * never drift apart (site rule: JSON-LD must match visible answers).
 */
const ZAKAT_FAQS: { q: string; a: string }[] = [
  {
    q: "How is zakat calculated?",
    a: "Zakat is 2.5% of your net zakatable wealth — cash, gold and silver, investments, business stock and money owed to you, minus debts due now — once that net amount reaches the nisab threshold and has been held for one lunar year (hawl).",
  },
  {
    q: "What is the nisab and which standard should I use?",
    a: `The nisab is the minimum wealth at which zakat becomes due, defined as ${NISAB_GRAMS.gold} g of gold or ${NISAB_GRAMS.silver} g of silver at today's market price (some scholars use 85 g and 595 g). When wealth is a mix of assets, most zakat institutions recommend the lower silver standard, as it is safer for those entitled to zakat. This calculator shows both thresholds using live prices.`,
  },
  {
    q: "Do I pay zakat on my 401(k), IRA or pension?",
    a: "There are two documented scholarly positions. The majority position holds that funds locked behind an early-withdrawal penalty are not fully in your possession, so zakat is not due until they become accessible. The Fiqh Council of North America (2024) holds that zakat is due every year on the net withdrawable amount — the balance minus penalties and taxes. Choose one position, apply it consistently, and ask a scholar if you are unsure which to follow.",
  },
  {
    q: "Is zakat due on cryptocurrency?",
    a: "Contemporary scholars generally treat cryptocurrency held as an investment or currency as zakatable wealth. Include its market value on your zakat date, the same way you would include cash or shares.",
  },
  {
    q: "Do I pay zakat on RSUs from my employer?",
    a: "Unvested RSUs are a promise, not property you own, so they are not zakatable. Once RSUs vest, the shares belong to you and their market value on your zakat date is included, counting only the net shares you actually received after any tax withholding.",
  },
  {
    q: "Which debts can I deduct?",
    a: "You may deduct debts that are due now or within the coming year — bills, rent due, and current instalments. You do not deduct the full outstanding balance of a long-term loan such as a mortgage.",
  },
  {
    q: "When should I pay zakat?",
    a: "Zakat falls due on the lunar anniversary of the day your wealth first reached the nisab — your personal hawl date. Many Muslims choose to pay during Ramadan, which is permissible because zakat may be paid in advance of its due date.",
  },
  {
    q: "Is this calculator private?",
    a: "Yes. All calculations run in your browser and the amounts you enter are never sent to our servers. The only network request is for live gold and silver prices, which contains no personal or financial information.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Zakat Calculator", item: URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": URL,
      name: "NoorPath Zakat Calculator",
      url: URL,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free in-browser zakat calculator covering cash, gold, silver, shares, cryptocurrency, vested RSUs, business assets and retirement accounts, with live nisab thresholds.",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: "https://www.noorpath.online" },
    },
    {
      "@type": "FAQPage",
      mainEntity: ZAKAT_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ZakatCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      {/* Hero — answer-first */}
      <section style={{ background: "linear-gradient(135deg, #041f14, #0a3d28)", padding: "72px 0 56px" }}>
        <div className="max-w-[1200px] mx-auto px-4" style={{ textAlign: "center" }}>
          <span className="section-eyebrow" style={{ background: "rgba(255,255,255,.1)", color: "var(--gold-lt)" }}>
            🕌 Free Tool — No Sign-Up
          </span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4.5vw,3rem)", color: "#fff", margin: "16px 0" }}>
            Zakat Calculator
          </h1>
          <p style={{ color: "rgba(255,255,255,.78)", maxWidth: 720, margin: "0 auto", lineHeight: 1.8, fontSize: ".98rem" }}>
            Zakat is <strong style={{ color: "var(--gold-lt)" }}>2.5% of your net zakatable wealth</strong> — cash, gold and
            silver, investments and business assets minus debts due — once it reaches the nisab threshold and has been held
            for one lunar year. This calculator uses live gold and silver prices, covers modern assets like stocks, crypto,
            vested RSUs and 401k/pension accounts, and runs entirely in your browser: the amounts you enter never leave your
            device.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ background: "var(--cream)", padding: "48px 0 64px" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <ZakatCalculator />
          <p style={{ marginTop: 28, fontSize: ".78rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 860 }}>
            <strong>Please note:</strong> this calculator is an educational aid, not a fatwa. Asset treatment — especially
            retirement accounts, long-term investments and business holdings — involves genuine scholarly difference. For
            complex situations, confirm your calculation with a qualified scholar.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ background: "#fff", padding: "56px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-eyebrow">📚 Methodology</span>
            <h2 className="section-title">How This Calculator <em className="accent">Works</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ maxWidth: 1000, margin: "0 auto" }}>
            {[
              {
                title: "Nisab from live prices",
                body: `We compute the nisab as ${NISAB_GRAMS.gold} g of gold or ${NISAB_GRAMS.silver} g of silver at the current market price — the same weights used by major zakat institutions such as the National Zakat Foundation and Islamic Relief. Some scholars use 85 g / 595 g; if you follow that convention your threshold will be slightly lower.`,
              },
              {
                title: "Documented positions, not one hidden opinion",
                body: "Where scholars genuinely differ — most importantly on 401k/IRA/pension accounts — the calculator presents both documented positions (the majority \u201cexcluded until accessible\u201d view and the Fiqh Council of North America\u2019s net-withdrawable method) and lets you choose, instead of silently deciding for you.",
              },
              {
                title: "Private by design",
                body: "The full calculation runs in your browser. Your figures are saved only on your own device so you can return to them, and can be printed for your records or your scholar. Our server only ever receives a currency code to fetch metal prices.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--ivory)", borderRadius: 16, padding: "26px 22px", border: "1px solid var(--border)" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.02rem", color: "var(--charcoal)", margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--ivory)", padding: "56px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">❓ Common Questions</span>
            <h2 className="section-title">Zakat Questions, <em className="accent">Answered</em></h2>
          </div>
          <div className="qaida-faq-list" style={{ maxWidth: 860, margin: "0 auto" }}>
            {ZAKAT_FAQS.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links + CTA */}
      <section style={{ background: "#fff", padding: "56px 0 72px" }}>
        <div className="max-w-[1200px] mx-auto px-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--charcoal)", marginBottom: 14 }}>
            Keep Learning With <em style={{ color: "var(--emerald)" }}>NoorPath</em>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 640, margin: "0 auto 28px", lineHeight: 1.75, fontSize: ".92rem" }}>
            NoorPath Academy teaches Quran reading, Tajweed and Hifz in live one-to-one online classes for children and
            adults. Explore our free resources, or meet a teacher in a free trial lesson.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/islamic-resources" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--emerald)", color: "#fff", fontWeight: 700, padding: "13px 26px", borderRadius: 50, textDecoration: "none", fontSize: ".9rem" }}>
              📖 Free Islamic Resources
            </Link>
            <Link href="/free-quran-classes-online" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#c9922a,#d4a030)", color: "#1a1a2e", fontWeight: 700, padding: "13px 26px", borderRadius: 50, textDecoration: "none", fontSize: ".9rem" }}>
              🎓 Book a Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
