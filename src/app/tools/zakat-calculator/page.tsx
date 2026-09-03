import type { Metadata } from "next";
import Link from "next/link";
import ZakatCalculator from "@/components/tools/ZakatCalculator";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { NISAB_GRAMS } from "@/lib/zakat/engine";
import { ShieldCheck, Sparkles, Scale, BookOpen, Clock, HeartHandshake } from "lucide-react";

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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-14 bg-gradient-to-br from-[#041f14] via-[#083422] to-[#0a3d28] text-white">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(201, 146, 42, 0.4) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(20, 184, 130, 0.3) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[var(--gold-lt)] mb-4 backdrop-blur-sm">
            <Sparkles size={14} className="text-[var(--gold)]" />
            <span>Islamic Finance Tool · 100% Client-Side Privacy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Comprehensive <span className="text-[var(--gold-lt)] italic">Zakat</span> Calculator
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base mb-8">
            Zakat is <strong className="text-[var(--gold-lt)]">2.5% of your net zakatable wealth</strong> — cash, gold &amp;
            silver, investments, crypto, and business assets minus deductible debts — once it reaches the nisab threshold and has
            been held for one lunar year. Runs entirely in your browser with live market prices.
          </p>

          {/* Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck size={18} className="text-[var(--gold-lt)] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">100% Private &amp; Secure</div>
                <div className="text-[0.72rem] text-white/60">No financial data is ever sent to our servers.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Scale size={18} className="text-[var(--emerald-lt)] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Live Spot Nisab Rates</div>
                <div className="text-[0.72rem] text-white/60">Real-time gold &amp; silver valuation across 20 currencies.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <BookOpen size={18} className="text-[var(--gold-lt)] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Documented Scholarly Fiqh</div>
                <div className="text-[0.72rem] text-white/60">Transparent positions for 401k, RSUs &amp; modern assets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-[var(--cream)] py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <ZakatCalculator />

          {/* Disclaimer */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[var(--ivory)] border border-[var(--border)] text-xs text-[var(--muted)] leading-relaxed max-w-4xl">
            <strong className="text-[var(--charcoal)]">Educational Aid Notice:</strong> This calculator is designed as an
            informative calculation aid based on recognized scholarly frameworks (including National Zakat Foundation,
            Islamic Relief, and the Fiqh Council of North America). Certain modern assets — specifically retirement accounts,
            private equity, and long-term business assets — involve legitimate scholarly differences of opinion. For complex
            financial estates, please consult a qualified scholar.
          </div>
        </div>
      </section>

      {/* Islamic Pillars of Zakat */}
      <section className="bg-white py-14 sm:py-16 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-eyebrow">🕌 Fundamentals</span>
            <h2 className="section-title">Essential Zakat <em className="accent">Principles</em></h2>
            <p className="section-desc center">
              Understanding the religious pillars that govern how Zakat is determined and distributed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[var(--ivory)] rounded-2xl p-6 border border-[var(--border)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(10,110,79,0.1)] text-[var(--emerald)] flex items-center justify-center font-bold mb-4">
                  <Scale size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2">
                  The Nisab Threshold
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  The nisab is the minimum net qualifying wealth a Muslim must own before Zakat becomes mandatory. It equals
                  either <strong>{NISAB_GRAMS.silver} grams of pure silver</strong> (standard for mixed wealth) or{" "}
                  <strong>{NISAB_GRAMS.gold} grams of pure gold</strong> at current spot prices.
                </p>
              </div>
            </div>

            <div className="bg-[var(--ivory)] rounded-2xl p-6 border border-[var(--border)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(201,146,42,0.12)] text-[var(--gold)] flex items-center justify-center font-bold mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2">
                  The Hawl (1 Lunar Year)
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Zakat is due once one full Islamic lunar year (354 days) has passed while your net wealth remained at or
                  above the nisab. Many Muslims set an annual anniversary (such as Ramadan or 1st of Muharram) as their fixed
                  Hawl calculation date.
                </p>
              </div>
            </div>

            <div className="bg-[var(--ivory)] rounded-2xl p-6 border border-[var(--border)] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(10,110,79,0.1)] text-[var(--emerald)] flex items-center justify-center font-bold mb-4">
                  <HeartHandshake size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2">
                  Eligible Recipients (Masarif)
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Surah At-Tawbah (9:60) specifies the 8 valid categories of recipients: the poor (Fuqara), the needy
                  (Masakin), zakat administrators, those whose hearts are to be reconciled, freeing captives, those in debt,
                  in the cause of Allah, and stranded travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-[var(--cream)] py-14 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-eyebrow">📚 Methodology</span>
            <h2 className="section-title">How This Calculator <em className="accent">Works</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Nisab from live prices",
                body: `We compute the nisab as ${NISAB_GRAMS.gold} g of gold or ${NISAB_GRAMS.silver} g of silver at the current market price — the same weights used by major zakat institutions such as the National Zakat Foundation and Islamic Relief. Some scholars use 85 g / 595 g; if you follow that convention your threshold will be slightly lower.`,
              },
              {
                title: "Documented positions, not one hidden opinion",
                body: "Where scholars genuinely differ — most importantly on 401k/IRA/pension accounts — the calculator presents both documented positions (the majority “excluded until accessible” view and the Fiqh Council of North America’s net-withdrawable method) and lets you choose, instead of silently deciding for you.",
              },
              {
                title: "Private by design",
                body: "The full calculation runs in your browser. Your figures are saved only on your own device so you can return to them, and can be printed for your records or your scholar. Our server only ever receives a currency code to fetch metal prices.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm">
                <h3 className="font-serif text-base font-bold text-[var(--charcoal)] mb-2.5">{item.title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed m-0">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-14 sm:py-16 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-eyebrow">❓ Common Questions</span>
            <h2 className="section-title">Zakat Questions, <em className="accent">Answered</em></h2>
          </div>
          <div className="qaida-faq-list max-w-3xl mx-auto space-y-3">
            {ZAKAT_FAQS.map((faq) => (
              <details key={faq.q} className="bg-[var(--ivory)] border border-[var(--border)] rounded-xl p-4 transition-all">
                <summary className="font-bold text-sm text-[var(--charcoal)] cursor-pointer select-none">{faq.q}</summary>
                <p className="text-xs text-[var(--slate)] leading-relaxed mt-2.5 pt-2.5 border-t border-[rgba(0,0,0,0.06)]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links + CTA */}
      <section className="bg-[var(--cream)] py-14 sm:py-16 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-3.5">
            Keep Learning With <em className="text-[var(--emerald)] not-italic">NoorPath</em>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--muted)] max-w-2xl mx-auto mb-7 leading-relaxed">
            NoorPath Academy teaches Quran reading, Tajweed and Hifz in live one-to-one online classes for children and
            adults. Explore our free resources, or meet a teacher in a free trial lesson.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center">
            <Link
              href="/islamic-resources"
              className="inline-flex items-center gap-2 bg-[var(--emerald)] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm hover:bg-[var(--emerald-dk)] transition-colors"
            >
              📖 Free Islamic Resources
            </Link>
            <Link
              href="/free-quran-classes-online"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-lt)] text-[var(--charcoal)] font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm hover:opacity-95 transition-opacity"
            >
              🎓 Book a Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
