import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HolyQuranAyahs from "@/components/holy-quran/HolyQuranAyahs";
import HolyQuranListen from "@/components/holy-quran/HolyQuranListen";
import { QaidaBreadcrumbs } from "@/components/noorani-qaida/QaidaSeoComponents";
import {
  HOLY_QURAN_BASE_URL,
  SURAHS,
  loadSurahAyahs,
  paraPath,
  parasForSurah,
  revelationLabel,
  surahBySlug,
  surahPath,
  toSurahSlug,
} from "@/data/holy-quran";
import { serializeJsonLd } from "@/lib/jsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

const RELATED_BLOG: Record<number, { href: string; label: string }> = {
  1: { href: "/blog/surah-al-fatiha-arabic-english", label: "Surah Al-Fatiha translation notes" },
  2: { href: "/blog/ayatul-kursi-arabic-english-benefits", label: "Ayatul Kursi notes" },
  18: { href: "/blog/surah-al-kahf-arabic-english-friday", label: "Surah Al-Kahf Friday notes" },
  36: { href: "/blog/surah-yaseen-arabic-english", label: "Surah Yaseen translation notes" },
  67: { href: "/blog/surah-mulk-benefits", label: "Surah Al-Mulk notes" },
  112: { href: "/blog/surah-ikhlas-benefits", label: "Surah Al-Ikhlas notes" },
};

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return SURAHS.map((surah) => ({ slug: toSurahSlug(surah.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const surah = surahBySlug(slug);
  if (!surah) return {};

  const url = `${HOLY_QURAN_BASE_URL}/surah/${toSurahSlug(surah.name)}`;
  const popularName = surah.number === 36 ? "Yaseen (Ya-Sin)" : surah.name;
  const title = `Surah ${popularName} — Read Online in Arabic`;
  const description =
    `Read Surah ${surah.name} (${surah.arabic}), Quran ${surah.number}, ${surah.verses} ayahs, ${revelationLabel(surah.type)} — verified Uthmani Arabic. Free, no login.`.slice(0, 160);

  return {
    title: { absolute: `${title} | NoorPath` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Read Surah ${surah.name} on NoorPath` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function HolyQuranSurahPage({ params }: Props) {
  const { slug } = await params;
  const surah = surahBySlug(slug);
  if (!surah) notFound();

  const ayahs = await loadSurahAyahs(surah.number);
  if (ayahs.length !== surah.verses) {
    throw new Error(`Surah ${surah.number} ayah count mismatch: ${ayahs.length} vs ${surah.verses}`);
  }

  const juzs = parasForSurah(surah.number);
  const index = SURAHS.findIndex((item) => item.number === surah.number);
  const previous = index > 0 ? SURAHS[index - 1] : null;
  const next = index < SURAHS.length - 1 ? SURAHS[index + 1] : null;
  const url = `${HOLY_QURAN_BASE_URL}/surah/${toSurahSlug(surah.name)}`;
  const related = RELATED_BLOG[surah.number];
  const displayName = surah.number === 36 ? "Yaseen (Ya-Sin)" : surah.name;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        name: `Surah ${surah.name}`,
        url,
        inLanguage: ["ar", "en"],
        isPartOf: { "@id": "https://www.noorpath.online/#website" },
        about: {
          "@type": "CreativeWork",
          name: `Surah ${surah.name}`,
          inLanguage: "ar",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
          { "@type": "ListItem", position: 2, name: "Holy Quran", item: HOLY_QURAN_BASE_URL },
          { "@type": "ListItem", position: 3, name: `Surah ${surah.name}`, item: url },
        ],
      },
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
                { label: `Surah ${surah.name}` },
              ]}
            />
            <p className="hq-kicker">
              Holy Quran · Surah {surah.number}
            </p>
            <h1>
              Surah {displayName} · <span lang="ar" dir="rtl">{surah.arabic}</span>
            </h1>
            <p className="hq-lead" style={{ marginBottom: 8 }}>
              Surah {surah.name} is chapter {surah.number} of the Quran — {surah.verses} ayahs,{" "}
              {revelationLabel(surah.type)}, in Para{juzs.length > 1 ? "s" : ""} {juzs.join("–")}.
              Arabic below is Tanzil Uthmani. Free to read, no account required.
            </p>
          </div>
          <HolyQuranListen ayahs={ayahs} />
        </div>

        <HolyQuranAyahs ayahs={ayahs} />

        <div className="hq-nav-row">
          {previous ? (
            <Link href={surahPath(previous.number)} className="btn-outline-np">
              ← {previous.number}. {previous.name}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={surahPath(next.number)} className="btn-outline-np">
              {next.number}. {next.name} →
            </Link>
          ) : <span />}
        </div>

        <p className="hq-note" style={{ marginTop: 22 }}>
          Related Paras:{" "}
          {juzs.map((juz, i) => (
            <span key={juz}>
              {i > 0 && " · "}
              <Link href={paraPath(juz)}>Para {juz}</Link>
            </span>
          ))}
          {related && (
            <>
              {" · "}
              <Link href={related.href}>{related.label}</Link>
            </>
          )}
          {" · "}
          <Link href="/learn-quran-online">Learn with a teacher</Link>
        </p>
      </div>
    </div>
  );
}
