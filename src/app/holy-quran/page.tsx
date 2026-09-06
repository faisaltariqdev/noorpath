import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";
import HolyQuranSearch from "@/components/holy-quran/HolyQuranSearch";
import { QaidaBreadcrumbs } from "@/components/noorani-qaida/QaidaSeoComponents";
import {
  HOLY_QURAN_BASE_URL,
  PARAS,
  SURAHS,
  TOTAL_AYAHS,
  TOTAL_PARAS,
  TOTAL_SURAHS,
  faqJsonLd,
  holyQuranBreadcrumbs,
  paraEndLabel,
  paraPath,
  paraStartLabel,
  quranBookJsonLd,
  revelationLabel,
  surahPath,
} from "@/data/holy-quran";
import { serializeJsonLd } from "@/lib/jsonLd";

export const revalidate = false;

const description =
  "Read the Holy Quran online in verified Uthmani Arabic — all 114 Surahs and 30 Paras, including Yaseen, free and without an account.";

export const metadata: Metadata = {
  title: { absolute: "Read Holy Quran Online — 114 Surahs & 30 Paras | NoorPath" },
  description,
  keywords: [
    "read quran online",
    "holy quran online",
    "surah yaseen online",
    "read surah yaseen",
    "quran para online",
    "juz amma online",
    "uthmani quran",
  ],
  alternates: { canonical: HOLY_QURAN_BASE_URL },
  openGraph: {
    title: "Read Holy Quran Online | NoorPath",
    description,
    url: HOLY_QURAN_BASE_URL,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Holy Quran reader" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read Holy Quran Online | NoorPath",
    description,
    images: ["/og-image.png"],
  },
};

const hubFaqs = [
  {
    question: "Can I read the Holy Quran on NoorPath without an account?",
    answer:
      "Yes. The public Holy Quran reader is free and open worldwide. You can open any Surah or Para without signing in.",
  },
  {
    question: "Which Arabic text is used?",
    answer:
      "The reader uses Tanzil Uthmani Arabic (الرسم العثماني), imported from the Al Quran Cloud quran-uthmani edition. Counts match 114 Surahs, 30 Paras/Juz, and 6236 ayahs. Verses are not typed or rewritten by NoorPath.",
  },
  {
    question: "Can I open Surah Yaseen or any other Surah directly?",
    answer:
      "Yes. Every Surah and every Para has its own page. Search accepts names such as Yaseen, Yasin, Mulk, Kahf, and Juz Amma, plus ayah references such as 2:255.",
  },
  {
    question: "Does this reader replace a Quran teacher?",
    answer:
      "No. This is a public reading text. Live one-to-one classes for Tajweed, Hifz, and beginner reading remain a separate enrolment path.",
  },
  {
    question: "Is audio included?",
    answer:
      "A male recitation (Mishary Rashid Alafasy) can be played from a public audio source. A complete female ayah-by-ayah recitation is not available here yet.",
  },
];

const popular = [
  { href: surahPath(36), label: "Surah Yaseen", note: "Ya-Sin · 36" },
  { href: surahPath(67), label: "Surah Al-Mulk", note: "67" },
  { href: surahPath(18), label: "Surah Al-Kahf", note: "18" },
  { href: surahPath(1), label: "Surah Al-Fatiha", note: "1" },
  { href: surahPath(55), label: "Surah Ar-Rahman", note: "55" },
  { href: surahPath(112), label: "Surah Al-Ikhlas", note: "112" },
  { href: paraPath(1), label: "Para 1", note: "Alif Lam Meem" },
  { href: paraPath(30), label: "Para 30", note: "Juz Amma" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    quranBookJsonLd(),
    {
      "@type": "CollectionPage",
      "@id": `${HOLY_QURAN_BASE_URL}#page`,
      name: "Holy Quran Online Reader",
      description,
      url: HOLY_QURAN_BASE_URL,
      inLanguage: ["en", "ar"],
      isAccessibleForFree: true,
      isPartOf: { "@id": "https://www.noorpath.online/#website" },
      about: { "@id": `${HOLY_QURAN_BASE_URL}#quran` },
      numberOfItems: TOTAL_SURAHS + TOTAL_PARAS,
    },
    {
      "@type": "ItemList",
      name: "Popular Surahs and Paras",
      itemListElement: popular.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        url: `https://www.noorpath.online${item.href}`,
      })),
    },
    faqJsonLd(hubFaqs),
    holyQuranBreadcrumbs([
      { name: "Home", item: "https://www.noorpath.online" },
      { name: "Holy Quran", item: HOLY_QURAN_BASE_URL },
    ]),
  ],
};

export default function HolyQuranHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <header className="hq-hero">
        <div className="max-w-[1100px] mx-auto px-4">
          <QaidaBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Holy Quran" }]} />
          <p className="hq-kicker">Free public reader · No login</p>
          <h1>Read the Holy Quran online</h1>
          <p className="hq-lead">
            Open any Surah or Para in verified Uthmani Arabic — {TOTAL_SURAHS} Surahs, {TOTAL_PARAS} Paras,
            and {TOTAL_AYAHS} ayahs. Search Yaseen, Juz Amma, or an ayah such as 2:255. This is a reading
            text, not a substitute for a teacher.
          </p>
          <div className="hq-facts">
            <span className="hq-fact">{TOTAL_SURAHS} Surahs</span>
            <span className="hq-fact">{TOTAL_PARAS} Paras / Juz</span>
            <span className="hq-fact">{TOTAL_AYAHS} ayahs</span>
            <span className="hq-fact">Tanzil Uthmani</span>
          </div>
          <HolyQuranSearch />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "16px 0 8px" }}>
            <Link href="/holy-quran/para/1" className="btn-primary-np">
              <BookOpen size={16} aria-hidden="true" /> Open reader · Para 1 to 30
            </Link>
            <Link href="/tools" className="btn-outline-np">
              Islamic tools
            </Link>
          </div>
          <div className="hq-pills" style={{ marginTop: 16 }}>
            {popular.map((item) => (
              <Link key={item.href} href={item.href} className="hq-pill">
                {item.label} <span style={{ color: "var(--hq-muted)", fontWeight: 500 }}>{item.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-4">
        <section className="hq-section" aria-labelledby="surahs-heading">
          <h2 id="surahs-heading">All 114 Surahs</h2>
          <div className="hq-grid">
            {SURAHS.map((surah) => (
              <Link key={surah.number} href={surahPath(surah.number)} className="hq-card">
                <strong>
                  {surah.number}. {surah.name}
                </strong>
                <em lang="ar" dir="rtl">{surah.arabic}</em>
                <small>
                  {surah.verses} ayahs · {revelationLabel(surah.type)}
                </small>
              </Link>
            ))}
          </div>
        </section>

        <section className="hq-section" aria-labelledby="paras-heading">
          <h2 id="paras-heading">All 30 Paras (Juz)</h2>
          <div className="hq-grid">
            {PARAS.map((para) => (
              <Link key={para.number} href={paraPath(para.number)} className="hq-card">
                <strong>
                  Para {para.number} · {para.name}
                </strong>
                <em lang="ar" dir="rtl">{para.arabicName}</em>
                <small>
                  {paraStartLabel(para)} – {paraEndLabel(para)} · {para.ayahCount} ayahs
                </small>
              </Link>
            ))}
          </div>
        </section>

        <section className="hq-section hq-faq" aria-labelledby="hq-faq-heading">
          <h2 id="hq-faq-heading">Frequently asked questions</h2>
          {hubFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <section className="hq-section" aria-labelledby="hq-class-cta">
          <h2 id="hq-class-cta">Want a teacher with the reading?</h2>
          <p className="hq-note">
            The public reader stays free. Live one-to-one classes for Qaida, Tajweed, and Hifz are a separate
            path with a published trial.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <Link href="/learn-quran-online" className="btn-primary-np">
              <BookOpen size={16} aria-hidden="true" /> Learn Quran online
            </Link>
            <Link href="/tools/hifz-calculator" className="btn-outline-np">
              Hifz planner
            </Link>
            <Link href="/free-quran-classes-online" className="btn-outline-np">
              <GraduationCap size={16} aria-hidden="true" /> Request a free trial
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
