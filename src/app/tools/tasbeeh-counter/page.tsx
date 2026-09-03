import type { Metadata } from "next";
import Link from "next/link";
import TasbeehCounter from "@/components/tools/TasbeehCounter";
import { serializeJsonLd } from "@/lib/jsonLd";
import { absolutePageTitle } from "@/lib/pageTitle";
import { BASE_URL } from "@/lib/academyFacts";
import {
  Bell,
  CheckCircle2,
  GraduationCap,
  Heart,
  HelpCircle,
  Moon,
  Sparkles,
  Zap,
} from "lucide-react";

const URL = `${BASE_URL}/tools/tasbeeh-counter`;

export const metadata: Metadata = {
  title: absolutePageTitle("Online Digital Tasbeeh & Dhikr Counter | NoorPath Academy"),
  description:
    "Free interactive online digital Tasbeeh counter. Count daily Adhkar, Tasbeeh Fatimah, Istighfar, and Salawat with sound, haptic vibration feedback, and authentic Hadith virtues.",
  keywords: [
    "digital tasbeeh counter",
    "online tasbeeh",
    "dhikr counter online",
    "tasbeeh fatimah 33 33 34",
    "daily islamic adhkar counter",
    "subhanallah counter",
    "istighfar 100 times counter",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: "Online Digital Tasbeeh & Dhikr Counter | NoorPath",
    description:
      "Interactive Digital Tasbih with vibration, click sounds, lap counters, and authentic morning/evening Sunnah Adhkar.",
    url: URL,
    siteName: "NoorPath",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Digital Tasbeeh & Dhikr Counter | NoorPath",
    description: "Free interactive digital Tasbih counter with sound, haptic feedback, and authentic Sunnah Dhikr presets.",
  },
};

const TASBEEH_FAQS = [
  {
    q: "Is it permissible to use a digital Tasbeeh or electronic counter in Islam?",
    a: "Yes, the vast majority of contemporary Islamic scholars (including the Permanent Committee of Senior Scholars and Dar al-Ifta) have ruled that using physical beads or electronic/digital counters is permissible (Mubah) as a tool to help keep accurate count of Adhkar. Counting on the fingers of the right hand remains the primary Sunnah.",
  },
  {
    q: "What is the authentic Tasbeeh recited after obligatory prayers (Fard Salah)?",
    a: "According to Sahih Muslim (597), the Prophet ﷺ recommended reciting: 33 times SubhanAllah (Glory be to Allah), 33 times Alhamdulillah (Praise be to Allah), 33 times Allahu Akbar (Allah is the Greatest), and completing 100 with 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer.'",
  },
  {
    q: "What are the spiritual benefits of consistent daily Dhikr?",
    a: "Allah SWT states in Surah Ar-Ra'd (13:28): 'Unquestionably, by the remembrance of Allah hearts are assured.' Daily Adhkar repels spiritual anxiety, protects from Shaytan, erases sins, and brings peace and barakah into one's home and family.",
  },
  {
    q: "How many times should one seek forgiveness (Istighfar) each day?",
    a: "The Messenger of Allah ﷺ said: 'By Allah, I seek forgiveness from Allah and repent to Him more than seventy times a day' (Sahih al-Bukhari). In Sahih Muslim, he reported reciting it 100 times daily.",
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
        { "@type": "ListItem", position: 3, name: "Digital Tasbeeh", item: URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": URL,
      name: "NoorPath Digital Tasbeeh & Dhikr Counter",
      url: URL,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Any (web browser)",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free online digital Tasbeeh counter with sound effects, haptic vibration, and authentic Sunnah Dhikr presets.",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: BASE_URL },
    },
    {
      "@type": "FAQPage",
      mainEntity: TASBEEH_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function TasbeehCounterPage() {
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
              <span className="text-[var(--gold-lt)]">Digital Tasbeeh</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-[var(--gold-lt)]">
              <Sparkles size={14} />
              <span>Authentic Sunnah Adhkar &amp; Custom Targets</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Online Digital Tasbeeh &amp; Dhikr Counter
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed">
              Track your daily remembrance of Allah SWT with tactile click feedback, vibration, lap counters, Arabic
              text, and verified Hadith virtues.
            </p>
          </div>
        </header>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 pb-16">
          <TasbeehCounter />

          {/* Educational Guide Section */}
          <div className="mt-16 space-y-12">
            {/* Conversion CTA to Learn Quran Tajweed & Duas */}
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
              style={{
                background: "linear-gradient(135deg, #05291b 0%, #0a4d33 100%)",
                border: "1.5px solid rgba(232, 184, 75, 0.3)",
              }}
            >
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[var(--gold-lt)]">
                  <Heart size={15} />
                  <span>Deepen Your Connection to Allah SWT</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                  Learn Quranic Recitation, Daily Sunnah Duas &amp; Salah with a Live Tutor
                </h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Enhance your spiritual worship. Perfect your Salah, memorize authentic morning/evening Adhkar, and master
                  Tajweed with qualified 1-on-1 teachers at NoorPath Academy.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/free-quran-classes-online"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[var(--gold)] hover:bg-[var(--gold-lt)] font-bold text-sm transition-all shadow-md"
                    style={{ color: "var(--charcoal)" }}
                  >
                    <span>Book Free 1-on-1 Trial Class</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/courses/islamic-studies-online"
                    className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 !text-white font-semibold text-sm transition-colors border border-white/25"
                      style={{ color: "#ffffff" }}
                  >
                    <span>Explore Islamic Studies</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)] mb-6 flex items-center gap-2.5">
                <HelpCircle size={24} className="text-[var(--emerald)]" />
                <span>Frequently Asked Questions about Dhikr &amp; Tasbeeh</span>
              </h2>

              <div className="space-y-4">
                {TASBEEH_FAQS.map((faq, idx) => (
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
