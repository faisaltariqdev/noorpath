import type { Metadata } from "next";
import Link from "next/link";
import HijriConverter from "@/components/tools/HijriConverter";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { BASE_URL } from "@/lib/academyFacts";
import {
  Calendar,
  Compass,
  GraduationCap,
  HelpCircle,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";

const URL = `${BASE_URL}/tools/hijri-date-converter`;

export const metadata: Metadata = {
  title: absolutePageTitle("Islamic Hijri Date Converter & Calendar 1447-1448 AH | NoorPath"),
  description:
    "Free accurate Islamic Hijri date converter. Convert Gregorian to Hijri and Hijri to Gregorian dates, view today's Islamic date, moon sighting adjustments, and upcoming Eid & Ramadan countdowns.",
  keywords: [
    "Islamic date converter",
    "Hijri date today",
    "convert gregorian to hijri",
    "convert hijri to gregorian",
    "islamic calendar 1447 1448",
    "when is ramadan",
    "when is eid al fitr",
    "arabic calendar converter",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "Islamic Hijri Date Converter & Calendar | NoorPath Academy",
    description:
      "Accurate Islamic date converter with local moon-sighting adjustments, live today's Hijri date widget, and countdown to Ramadan and Eid.",
    url: URL,
    siteName: "NoorPath",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Hijri Date Converter & Calendar | NoorPath",
    description: "Free interactive Hijri to Gregorian date converter with upcoming Islamic holidays countdown.",
  },
};

const HIJRI_FAQS = [
  {
    q: "What is today's Islamic Hijri date?",
    a: "The Islamic Hijri calendar is a lunar calendar based on the moon's phases. You can see the live today's Islamic date at the top of this tool, with adjustable ±1–2 day toggles to reflect local moon sightings in your specific country.",
  },
  {
    q: "Why does the Islamic date sometimes differ by 1 or 2 days between countries?",
    a: "The Islamic calendar relies on the physical or astronomical sighting of the crescent moon (Hilal) at sunset each month. Due to geographical differences and varying criteria between global moon-sighting committees (e.g. UK, Saudi Arabia, Pakistan, North America), dates can vary by 1 day.",
  },
  {
    q: "When did the Islamic Hijri calendar begin?",
    a: "The Islamic calendar was formally established during the Caliphate of Umar ibn al-Khattab (RA) in 638 CE (17 AH). The starting epoch (Year 1 AH) was designated as the year of the Prophet Muhammad's ﷺ migration (Hijrah) from Mecca to Medina in 622 CE.",
  },
  {
    q: "How many days are in a Hijri year compared to a solar Gregorian year?",
    a: "A Hijri lunar year consists of 12 lunar months totaling 354 or 355 days, which is approximately 10 to 12 days shorter than the solar Gregorian calendar (365/366 days). As a result, Islamic events like Ramadan and Eid move forward through the solar seasons over a ~33-year cycle.",
  },
  {
    q: "What are the four Sacred Months in Islam?",
    a: "The four sacred months (Al-Ashhur Al-Hurum) mentioned in Surah At-Tawbah (9:36) are: 1) Rajab (7th month), 2) Dhu al-Qi'dah (11th month), 3) Dhu al-Hijjah (12th month), and 4) Muharram (1st month). Good deeds in these months carry immense reward, and sins are treated with heightened gravity.",
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
        { "@type": "ListItem", position: 3, name: "Hijri Date Converter", item: URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": URL,
      name: "NoorPath Islamic Hijri Date Converter",
      url: URL,
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Accurate two-way Gregorian to Hijri date converter with live moon sighting adjustments and Islamic holiday countdowns.",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: BASE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: HIJRI_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HijriConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Hero Section */}
        <header
          className="relative overflow-hidden text-white pt-28 sm:pt-32 pb-16 px-4 sm:px-6"
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
              <span className="text-[var(--gold-lt)]">Hijri Converter</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[var(--gold-lt)]">
              <Sparkles size={14} />
              <span>Two-Way Gregorian ↔ Hijri Conversion</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Islamic Hijri Date Converter &amp; Calendar
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
              Convert dates effortlessly between the Gregorian solar calendar and the Islamic lunar calendar with
              accurate moon-sighting adjustments and live holiday countdowns.
            </p>
          </div>
        </header>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 pb-16">
          <HijriConverter />

          {/* Educational E-E-A-T Guide Section */}
          <div className="mt-16 space-y-12">
            {/* Conversion CTA to Islamic Studies / Arabic */}
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
                  <span>Learn Islamic History &amp; Arabic Language</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                  Connect Deeper with Islamic Heritage &amp; Classical Arabic
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Understand the Islamic lunar cycle, Quranic Arabic grammar, and authentic prophetic traditions with
                  NoorPath&apos;s accredited 1-on-1 online tutors.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/free-quran-classes-online"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] font-bold text-sm transition-all shadow-md"
                    style={{ color: "var(--charcoal)" }}
                  >
                    <span>Book Free 1-on-1 Trial</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 !text-white font-semibold text-sm transition-colors border border-white/25"
                      style={{ color: "#ffffff" }}
                  >
                    <span>View All Islamic Courses</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)] mb-6 flex items-center gap-2.5">
                <HelpCircle size={24} className="text-[var(--emerald)]" />
                <span>Frequently Asked Questions about the Islamic Hijri Calendar</span>
              </h2>

              <div className="space-y-4">
                {HIJRI_FAQS.map((faq, idx) => (
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
