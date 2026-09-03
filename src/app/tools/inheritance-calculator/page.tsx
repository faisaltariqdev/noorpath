import type { Metadata } from "next";
import Link from "next/link";
import InheritanceCalculator from "@/components/tools/InheritanceCalculator";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { BASE_URL } from "@/lib/academyFacts";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  HelpCircle,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const URL = `${BASE_URL}/tools/inheritance-calculator`;

export const metadata: Metadata = {
  title: absolutePageTitle("Islamic Inheritance (Miras) Calculator | NoorPath Academy"),
  description:
    "Free Islamic Inheritance (Miras & Faraid) Calculator. Calculate Shariah estate distribution according to Quran (Surah An-Nisa 4:11-12) for spouses, children, and parents with debt and Wasiyyah deductions.",
  keywords: [
    "Islamic inheritance calculator",
    "Miras calculator",
    "Faraid calculator online",
    "Quran inheritance shares",
    "surah nisa inheritance rules",
    "islamic estate division sons daughters",
    "islamic will wasiyyah rules",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "Islamic Inheritance (Miras) Calculator | NoorPath Academy",
    description:
      "Accurate Islamic Inheritance Calculator based on Surah An-Nisa (4:11-12). Free estate distribution ledger with debts and Wasiyyah limits.",
    url: URL,
    siteName: "NoorPath",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Inheritance (Miras) Calculator | NoorPath",
    description: "Free interactive Shariah estate distribution calculator based on authentic Quran and Sunnah rules.",
  },
};

const INHERITANCE_FAQS = [
  {
    q: "What is the primary order of estate distribution in Islamic law?",
    a: "Before distributing any inheritance to heirs, Islamic law dictates four sequential steps: 1) Funeral and burial costs (Tajheez), 2) Clearing all debts owed to Allah and creditors (Dayn), 3) Executing valid bequests (Wasiyyah) up to a maximum of 1/3 to non-heirs, and 4) Distributing the remaining net estate among legal Quranic heirs (Ashab al-Furood and 'Asabah).",
  },
  {
    q: "Why does a son receive twice the share of a daughter in Islamic inheritance?",
    a: "In Islamic law, financial responsibility is solely placed upon men. A male is obligated to provide housing, food, and living expenses for his wife, children, elderly parents, and unmarried sisters (Nafaqah). In contrast, a female's wealth and inheritance are exclusively hers to keep, with zero mandatory financial maintenance obligations on anyone else.",
  },
  {
    q: "Can an individual leave their entire wealth to charity through a will (Wasiyyah)?",
    a: "No. The Prophet Muhammad ﷺ explicitly limited bequests to non-heirs or charities to a maximum of one-third (1/3) of the net estate, stating: 'One-third, and one-third is much. It is better to leave your heirs wealthy than to leave them poor and begging from people' (Sahih al-Bukhari 2742).",
  },
  {
    q: "What is the 'Awl principle in Islamic estate distribution?",
    a: "When the sum of fixed Quranic shares (Ashab al-Furood) exceeds 1 (e.g. Husband 1/2 + 2 Sisters 2/3 = 7/6), the principle of 'Awl proportionally reduces the shares of all heirs equitably without excluding anyone, as established during the Caliphate of Umar ibn al-Khattab (RA).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "Inheritance Calculator", item: URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": URL,
      name: "NoorPath Islamic Inheritance (Miras) Calculator",
      url: URL,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Accurate Shariah inheritance calculator implementing Quranic shares (Surah An-Nisa 4:11-12) with debt and Wasiyyah deductions.",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: BASE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: INHERITANCE_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function InheritanceCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Hero Section */}
        <header
          className="relative overflow-hidden text-white pt-12 pb-16 px-4 sm:px-6"
          style={{
            background: "linear-gradient(135deg, #021a11 0%, #063824 60%, #0b5336 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(232, 184, 75, 0.4) 0%, transparent 60%),
                               radial-gradient(circle at 80% 70%, rgba(10, 110, 79, 0.6) 0%, transparent 50%)`,
            }}
          />

          <div className="relative max-w-5xl mx-auto text-center space-y-4">
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-1.5 text-xs text-white/70 mb-2">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-white transition-colors">
                Tools
              </Link>
              <span>/</span>
              <span className="text-[var(--gold-lt)]">Inheritance Calculator</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[var(--gold-lt)]">
              <Sparkles size={14} />
              <span>Surah An-Nisa (4:11–12) Shariah Distribution</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Islamic Inheritance (Miras) Calculator
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
              Calculate the exact Shariah distribution of an estate among spouses, children, and parents with deductions
              for debts, funeral costs, and the 1/3 Wasiyyah bequest ceiling.
            </p>
          </div>
        </header>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 pb-16">
          <InheritanceCalculator />

          {/* Educational Guide Section */}
          <div className="mt-16 space-y-12">
            {/* Conversion CTA to Learn Islamic Studies */}
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
              style={{
                background: "linear-gradient(135deg, #05291b 0%, #0a4d33 100%)",
                border: "1.5px solid rgba(232, 184, 75, 0.3)",
              }}
            >
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[var(--gold-lt)]">
                  <GraduationCap size={15} />
                  <span>The Importance of &apos;Ilm al-Fara&apos;id</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                  &ldquo;Learn the laws of inheritance and teach them, for it is half of knowledge.&rdquo;
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  The Messenger of Allah ﷺ emphasized the science of inheritance (Sunan Ibn Majah). Deepen your
                  understanding of Islamic jurisprudence, Quranic Arabic, and Tajweed with NoorPath Academy&apos;s
                  qualified scholars.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/free-quran-classes-online"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] text-[var(--charcoal)] font-bold text-sm transition-all shadow-md"
                  >
                    <span>Book Free Trial Lesson</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
                  >
                    <span>Browse All Courses</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)] mb-6 flex items-center gap-2.5">
                <HelpCircle size={24} className="text-[var(--emerald)]" />
                <span>Frequently Asked Questions about Islamic Inheritance</span>
              </h2>

              <div className="space-y-4">
                {INHERITANCE_FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-[var(--border)] rounded-2xl p-4 bg-[var(--ivory)] open:bg-white transition-colors"
                  >
                    <summary className="font-serif font-bold text-sm text-[var(--charcoal)] cursor-pointer list-none flex justify-between items-center">
                      <span>{faq.q}</span>
                      <span className="text-[var(--emerald)] group-open:rotate-180 transition-transform font-bold text-base">
                        ↓
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-[var(--slate)] mt-3 pt-3 border-t border-[rgba(0,0,0,0.06)] leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
