import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HolyQuranFaqs from "@/components/holy-quran/HolyQuranFaqs";
import HolyQuranPublicReader from "@/components/holy-quran/HolyQuranPublicReader";
import { QaidaBreadcrumbs } from "@/components/noorani-qaida/QaidaSeoComponents";
import {
  HOLY_QURAN_BASE_URL,
  PARAS,
  faqJsonLd,
  getPara,
  holyQuranBreadcrumbs,
  loadPara,
  paraEndLabel,
  paraFaqs,
  paraPath,
  paraStartLabel,
  quranBookJsonLd,
  surahPath,
} from "@/data/holy-quran";
import { serializeJsonLd } from "@/lib/jsonLd";

interface Props {
  params: Promise<{ n: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return PARAS.map((para) => ({ n: String(para.number) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { n } = await params;
  const para = getPara(Number(n));
  if (!para) return {};

  const url = `${HOLY_QURAN_BASE_URL}/para/${para.number}`;
  const amma = para.number === 30 ? " (Juz Amma)" : "";
  const title = `Para ${para.number}${amma} — Read Online in Arabic`;
  const description =
    `Read Para ${para.number} (${para.name}${amma}) in verified Uthmani Arabic — ${para.ayahCount} ayahs from ${paraStartLabel(para)} to ${paraEndLabel(para)}. Free, no login.`.slice(0, 160);

  return {
    title: { absolute: `${title} | NoorPath` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Read Para ${para.number} on NoorPath` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function HolyQuranParaPage({ params }: Props) {
  const { n } = await params;
  const para = getPara(Number(n));
  if (!para) notFound();

  const file = await loadPara(para.number);
  if (file.ayahs.length !== para.ayahCount) {
    throw new Error(`Para ${para.number} ayah count mismatch: ${file.ayahs.length} vs ${para.ayahCount}`);
  }

  const previous = getPara(para.number - 1);
  const next = getPara(para.number + 1);
  const url = `${HOLY_QURAN_BASE_URL}/para/${para.number}`;
  const amma = para.number === 30 ? " (Juz Amma)" : "";
  const faqs = paraFaqs(para);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      quranBookJsonLd(),
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        name: `Para ${para.number} · ${para.name}${amma}`,
        url,
        inLanguage: ["ar", "en"],
        isAccessibleForFree: true,
        isPartOf: { "@id": "https://www.noorpath.online/#website" },
        about: {
          "@type": "CreativeWork",
          name: `Para ${para.number} (${para.name}${amma})`,
          inLanguage: "ar",
          isPartOf: { "@id": `${HOLY_QURAN_BASE_URL}#quran` },
        },
      },
      holyQuranBreadcrumbs([
        { name: "Home", item: "https://www.noorpath.online" },
        { name: "Holy Quran", item: HOLY_QURAN_BASE_URL },
        { name: `Para ${para.number}`, item: url },
      ]),
      faqJsonLd(faqs),
    ],
  };

  return (
    <div className="hq-reader-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <div className="max-w-[860px] mx-auto px-4">
        <div className="hq-reader-toolbar">
          <div>
            <QaidaBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Holy Quran", href: "/holy-quran" },
                { label: `Para ${para.number}` },
              ]}
            />
            <p className="hq-kicker">Holy Quran · Para {para.number}{amma}</p>
            <h1>
              {para.name} · <span lang="ar" dir="rtl">{para.arabicName}</span>
            </h1>
            <p className="hq-lead" style={{ marginBottom: 8 }}>
              Para {para.number} runs from {paraStartLabel(para)} to {paraEndLabel(para)} — {para.ayahCount} ayahs
              in Tanzil Uthmani Arabic. Free to read worldwide, no account required.
            </p>
          </div>
        </div>

        <HolyQuranPublicReader ayahs={file.ayahs} currentPara={para.number} />

        <div className="hq-nav-row">
          {previous ? (
            <Link href={paraPath(previous.number)} className="btn-outline-np">
              ← Para {previous.number}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={paraPath(next.number)} className="btn-outline-np">
              Para {next.number} →
            </Link>
          ) : <span />}
        </div>

        <p className="hq-note" style={{ marginTop: 22 }}>
          Starts in <Link href={surahPath(para.startSurah)}>Surah {para.startSurah}</Link>
          {" · "}
          Ends in <Link href={surahPath(para.endSurah)}>Surah {para.endSurah}</Link>
          {" · "}
          <Link href="/holy-quran">All Surahs and Paras</Link>
          {" · "}
          <Link href="/tools/hifz-calculator">Hifz planner</Link>
        </p>
        <HolyQuranFaqs faqs={faqs} />
      </div>
    </div>
  );
}
