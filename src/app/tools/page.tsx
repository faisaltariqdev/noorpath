import type { Metadata } from "next";
import Link from "next/link";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { BASE_URL } from "@/lib/academyFacts";
import {
  BookOpen,
  Calendar,
  Coins,
  GraduationCap,
  Scale,
  Sparkles,
} from "lucide-react";

const URL = `${BASE_URL}/tools`;

export const metadata: Metadata = {
  title: absolutePageTitle("Free Islamic Tools & Calculators | NoorPath Academy"),
  description:
    "Explore NoorPath's suite of free, private, and authentic Islamic tools: Zakat Calculator, Quran Hifz Planner, Hijri Date Converter, Digital Tasbeeh Counter, and Islamic Inheritance Calculator.",
  keywords: [
    "Islamic tools online",
    "Islamic calculators",
    "free zakat calculator",
    "quran hifz planner",
    "hijri date converter",
    "digital tasbeeh counter",
    "islamic inheritance calculator miras",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "Free Islamic Tools & Calculators | NoorPath Academy",
    description:
      "Suite of free, privacy-focused Islamic tools for daily worship, Quran study, and financial duties.",
    url: URL,
    siteName: "NoorPath",
    type: "website",
    locale: "en_GB",
  },
};

const TOOLS = [
  {
    slug: "/tools/zakat-calculator",
    title: "Zakat Calculator",
    arabicTitle: "حَاسِبَة الزَّكَاة",
    tagline: "Gold, Silver, Cash, Stocks & Crypto",
    description:
      "Calculate your obligatory 2.5% Zakat with live Nisab threshold rates, modern assets (crypto, 401k/pensions, equities), and itemized audit ledgers.",
    icon: <Coins className="text-[var(--gold)]" size={28} />,
    badge: "Most Popular",
  },
  {
    slug: "/tools/hifz-calculator",
    title: "Quran Hifz & Completion Planner",
    arabicTitle: "مُخَطِّط حِفْظ القُرْآن",
    tagline: "Target Dates & Revision Timetables",
    description:
      "Plan your full Quran memorization graduation date with daily Sabaq targets and the authentic 3-tier Sabaq-Sabqi-Manzil retention system.",
    icon: <BookOpen className="text-emerald-400" size={28} />,
    badge: "Quran Study",
  },
  {
    slug: "/tools/hijri-date-converter",
    title: "Islamic Hijri Date & Calendar",
    arabicTitle: "مُحَوِّل التَّارِيخ الهِجْرِي",
    tagline: "Gregorian ↔ Hijri Conversion",
    description:
      "Convert dates seamlessly between Gregorian and Hijri lunar calendars with local moon-sighting adjustments (±2 days) and live Islamic holiday countdowns.",
    icon: <Calendar className="text-cyan-400" size={28} />,
    badge: "Calendar",
  },
  {
    slug: "/tools/tasbeeh-counter",
    title: "Digital Tasbeeh & Dhikr Counter",
    arabicTitle: "المِسْبَحَة الإِلِكْتُرُونِيَّة",
    tagline: "Sound, Vibration & Sunnah Adhkar",
    description:
      "Interactive digital bead counter with realistic click audio, mobile haptic vibration feedback, lifetime tallies, and authentic Hadith virtues.",
    icon: <Sparkles className="text-yellow-300" size={28} />,
    badge: "Daily Worship",
  },
  {
    slug: "/tools/inheritance-calculator",
    title: "Islamic Inheritance (Miras) Calculator",
    arabicTitle: "حَاسِبَة المَوَارِيث الشَّرْعِيَّة",
    tagline: "Surah An-Nisa (4:11–12) Shariah Division",
    description:
      "Calculate Quranic estate distributions for spouses, children, and parents with deductions for debts, funeral costs, and the 1/3 Wasiyyah bequest cap.",
    icon: <Scale className="text-[var(--gold-lt)]" size={28} />,
    badge: "Estate Law",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Tools", item: URL },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": URL,
      name: "NoorPath Islamic Calculators & Tools Suite",
      url: URL,
      description:
        "Free privacy-focused online Islamic tools suite: Zakat Calculator, Quran Hifz Planner, Hijri Date Converter, Digital Tasbeeh, and Islamic Inheritance Calculator.",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: BASE_URL },
    },
  ],
};

export default function ToolsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Hero Section */}
        <header
          className="relative overflow-hidden text-white pt-14 pb-16 px-4 sm:px-6"
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
              <span className="text-[var(--gold-lt)]">Tools &amp; Calculators</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[var(--gold-lt)]">
              <Sparkles size={14} />
              <span>100% Free • Private • Shariah-Compliant</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Islamic Calculators &amp; Productivity Tools
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
              Empowering Muslims worldwide with verified tools for Zakat calculation, Quran memorization planning,
              calendar conversion, daily Dhikr tracking, and Shariah estate distribution.
            </p>
          </div>
        </header>

        {/* Tools Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.slug}
                className="group rounded-3xl p-6 sm:p-7 border border-[var(--border)] bg-white hover:border-[var(--emerald)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <div className="p-3.5 rounded-2xl bg-[var(--ivory)] border border-[var(--border)] group-hover:scale-105 transition-transform">
                      {tool.icon}
                    </div>
                    <span className="text-[0.7rem] font-bold px-2.5 py-1 rounded-full bg-[rgba(10,110,79,0.1)] text-[var(--emerald)]">
                      {tool.badge}
                    </span>
                  </div>

                  <div className="font-arabic text-xs text-[var(--emerald)] font-bold mb-1" dir="rtl">
                    {tool.arabicTitle}
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[var(--charcoal)] group-hover:text-[var(--emerald)] transition-colors mb-1">
                    {tool.title}
                  </h2>
                  <div className="text-xs font-semibold text-[var(--gold)] mb-3">{tool.tagline}</div>
                  <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between text-xs font-bold text-[var(--emerald)]">
                  <span>Open Free Calculator</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* NoorPath Free Trial CTA */}
          <div
            className="mt-16 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl"
            style={{
              background: "linear-gradient(135deg, #05291b 0%, #0a4d33 100%)",
              border: "1.5px solid rgba(232, 184, 75, 0.3)",
            }}
          >
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[var(--gold-lt)]">
                <GraduationCap size={15} />
                <span>Live 1-on-1 Online Quran &amp; Islamic Studies</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                Learn Quran, Tajweed &amp; Islamic Sciences with Qualified Tutors
              </h2>
              <p className="text-sm text-white/85 leading-relaxed">
                Connect your family to authentic Islamic learning. NoorPath Academy provides interactive one-on-one live
                classes tailored to your timezone and learning pace.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/free-quran-classes-online"
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] text-[var(--charcoal)] font-bold text-sm transition-all shadow-md"
                >
                  <span>Book Free 1-on-1 Trial Class</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
                >
                  <span>View All Courses</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
