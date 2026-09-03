import type { Metadata } from "next";
import Link from "next/link";
import HifzCalculator from "@/components/tools/HifzCalculator";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { BASE_URL } from "@/lib/academyFacts";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  HelpCircle,
  Layers,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const URL = `${BASE_URL}/tools/hifz-calculator`;

export const metadata: Metadata = {
  title: absolutePageTitle("Quran Hifz & Completion Calculator | NoorPath Academy"),
  description:
    "Free Quran Memorization (Hifz) & Reading Completion Planner. Calculate completion dates, daily Sabaq pages, and custom Sabqi & Manzil revision timetables.",
  keywords: [
    "Quran hifz calculator",
    "Quran memorization planner",
    "how long to memorize quran",
    "quran completion calculator",
    "hifz planner schedule",
    "daily quran reading target",
    "hifz revision timetable sabaq sabqi manzil",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "Quran Hifz & Completion Calculator | NoorPath Academy",
    description:
      "Plan your full Quran memorization timeline or reading khatmah with realistic daily targets and structured madrasa revision cycles.",
    url: URL,
    siteName: "NoorPath",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Hifz & Completion Calculator | NoorPath",
    description: "Free interactive Quran memorization timeline and revision planner for adults and kids.",
  },
};

const HIFZ_FAQS = [
  {
    q: "How long does it take to memorize the entire Quran (Hifz)?",
    a: "On average, memorizing 1 Medina page per day (5 days a week with 2 days dedicated to revision) takes approximately 2 to 2.5 years. Memorizing half a page daily takes 4 to 5 years, which is the most sustainable pace for working adults and young children.",
  },
  {
    q: "What is the difference between Sabaq, Sabqi, and Manzil?",
    a: "Traditional Islamic madrasas divide daily Quran study into three pillars: 1) Sabaq: The new lesson/page memorized today. 2) Sabqi (Amokhta): The past 5–10 pages of the current Juz revised to prevent immediate forgetting. 3) Manzil (Dhor): A full Juz from earlier memorized parts reviewed on a rotating cycle.",
  },
  {
    q: "How many pages are in the standard Quran (Medina Mushaf)?",
    a: "The standard Medina (Uthmani) Mushaf contains 604 pages divided across 30 Juz (Paras) and 114 Surahs. Each full page contains 15 lines, and each Juz spans approximately 20 pages.",
  },
  {
    q: "Can an adult memorize the Quran with a busy work schedule?",
    a: "Yes. Thousands of adults memorize the Quran by targeting just 3 to 5 lines per day (taking 15–30 minutes in the morning after Fajr). Consistency (Istiqamah) is beloved by Allah SWT, even if in smaller daily amounts.",
  },
  {
    q: "Why is a live Quran teacher essential during Hifz?",
    a: "Self-memorizing often locks in hidden Tajweed mistakes, incorrect vowels (Harakat), and stops (Waqf) that are extremely difficult to unlearn later. A qualified teacher listens daily, corrects Makharij immediately, and enforces weekly revision milestones.",
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
        { "@type": "ListItem", position: 3, name: "Hifz Planner", item: URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": URL,
      name: "NoorPath Quran Hifz & Completion Planner",
      url: URL,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free online calculator to plan Quran memorization timelines, daily page targets, and Sabaq-Sabqi-Manzil revision timetables.",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: BASE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: HIFZ_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HifzCalculatorPage() {
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
              <span className="text-[var(--gold-lt)]">Hifz Planner</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[var(--gold-lt)]">
              <Sparkles size={14} />
              <span>Standard 604-Page Medina Mushaf Schedule</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Quran Hifz &amp; Completion Planner
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
              Calculate your exact graduation date, daily Sabaq pace, and structured revision timetables based on the
              authentic 3-tier madrasa methodology.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="text-[0.7rem] text-white/70 font-semibold uppercase">Total Pages</div>
                <div className="text-lg sm:text-xl font-bold text-[var(--gold-lt)]">604 Pages</div>
                <div className="text-[0.68rem] text-white/60">Medina 15-Line</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="text-[0.7rem] text-white/70 font-semibold uppercase">Total Juz</div>
                <div className="text-lg sm:text-xl font-bold text-[var(--gold-lt)]">30 Paras</div>
                <div className="text-[0.68rem] text-white/60">~20 pages / Juz</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="text-[0.7rem] text-white/70 font-semibold uppercase">Avg Hifz Duration</div>
                <div className="text-lg sm:text-xl font-bold text-[var(--gold-lt)]">2 – 3 Years</div>
                <div className="text-[0.68rem] text-white/60">At 1 page / day</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                <div className="text-[0.7rem] text-white/70 font-semibold uppercase">Revision Ratio</div>
                <div className="text-lg sm:text-xl font-bold text-[var(--gold-lt)]">80% / 20%</div>
                <div className="text-[0.68rem] text-white/60">Revision vs New</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 pb-16">
          <HifzCalculator />

          {/* Educational Guide Section (E-E-A-T) */}
          <div className="mt-16 space-y-12">
            {/* Guide 1: How to Memorize Effectively */}
            <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)] mb-4 flex items-center gap-2.5">
                <Target size={24} className="text-[var(--emerald)]" />
                <span>The Golden Rules of Successful Quran Memorization</span>
              </h2>
              <p className="text-sm text-[var(--slate)] leading-relaxed mb-6">
                Memorizing the Holy Quran is a profound spiritual achievement. Decades of traditional Islamic scholarship
                and cognitive science confirm four fundamental rules for lasting retention:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
                <div className="p-4 rounded-2xl bg-[var(--ivory)] border border-[var(--border)]">
                  <div className="font-bold text-[var(--charcoal)] flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[var(--emerald)]" />
                    <span>1. Use One Single Mushaf Edition</span>
                  </div>
                  <p className="text-xs text-[var(--slate)] leading-relaxed">
                    Visual memory is key. Always use the standard 15-line Medina Mushaf so your brain maps the exact
                    position of every Ayah on the top, middle, or bottom of each page.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--ivory)] border border-[var(--border)]">
                  <div className="font-bold text-[var(--charcoal)] flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[var(--emerald)]" />
                    <span>2. Prioritize Revision Over New Memorization</span>
                  </div>
                  <p className="text-xs text-[var(--slate)] leading-relaxed">
                    The Prophet ﷺ said: &ldquo;Keep refreshing your knowledge of the Quran, for by the One in Whose Hand
                    is my soul, it escapes faster than camels from their ropes.&rdquo; (Bukhari). Spend 80% of your time
                    reviewing old Juz.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--ivory)] border border-[var(--border)]">
                  <div className="font-bold text-[var(--charcoal)] flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[var(--emerald)]" />
                    <span>3. Perfect Tajweed Before Memorizing</span>
                  </div>
                  <p className="text-xs text-[var(--slate)] leading-relaxed">
                    Never memorize an Ayah with incorrect pronunciation. Memorizing wrong Makharij solidifies the error in
                    muscle memory, requiring double the effort to unlearn.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--ivory)] border border-[var(--border)]">
                  <div className="font-bold text-[var(--charcoal)] flex items-center gap-2 mb-1.5">
                    <CheckCircle2 size={16} className="text-[var(--emerald)]" />
                    <span>4. Recite in Daily Fard &amp; Sunnah Prayers</span>
                  </div>
                  <p className="text-xs text-[var(--slate)] leading-relaxed">
                    The ultimate test of a Hafiz is reciting newly memorized portions smoothly during Tahajjud and Sunnah
                    prayers without opening the Mushaf.
                  </p>
                </div>
              </div>
            </div>

            {/* Structured NoorPath Program Lead CTA */}
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
                  <span>NoorPath 1-on-1 Online Hifz Program</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                  Achieve Your Hifz Goal with a Dedicated Sanad-Certified Hafiz
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Join hundreds of students from the UK, USA, Canada, and UAE. Flexible 1-on-1 live lessons, female
                  Huffaz available for sisters and daughters, personalized daily Sabaq-Sabqi tracker, and Ijazah
                  certification.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/free-quran-classes-online"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] text-[var(--charcoal)] font-bold text-sm transition-all shadow-md"
                  >
                    <span>Book 30-Min Free Evaluation</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/hifz-quran-online"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
                  >
                    <span>View Hifz Curriculum</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)] mb-6 flex items-center gap-2.5">
                <HelpCircle size={24} className="text-[var(--emerald)]" />
                <span>Frequently Asked Questions about Quran Memorization</span>
              </h2>

              <div className="space-y-4">
                {HIFZ_FAQS.map((faq, idx) => (
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
