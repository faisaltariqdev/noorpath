import type { Metadata } from "next";
import Link from "next/link";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { hifzQuranOnline } from "@/lib/landingPageData";

export const revalidate = false;

const PATH = "/hifz-quran-online";
const { metaTitle, metaDescription, keywords, ...props } = hifzQuranOnline;

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  keywords,
  alternates: { canonical: `https://www.noorpath.online${PATH}` },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `https://www.noorpath.online${PATH}`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: metaTitle }],
  },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: ["/og-image.png"] },
};

export default function HifzQuranOnlinePage() {
  return (
    <KeywordLandingPage
      canonicalPath={PATH}
      {...props}
      extraContent={
        <aside
          aria-labelledby="free-hifz-resources"
          style={{
            background: "var(--ivory)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "24px 28px",
            marginBottom: 48,
          }}
        >
          <h2
            id="free-hifz-resources"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.2rem",
              marginBottom: 10,
            }}
          >
            Free Hifz planning resources
          </h2>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, margin: "0 0 12px" }}>
            These adaptable planning and evidence resources can help learners and families shape an individual approach.
            They are not guaranteed schedules and do not guarantee memorization or retention outcomes.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
            <Link href="/blog/hifz-revision-schedule" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Hifz revision schedule infographic
            </Link>
            <Link href="/blog/quran-memorization-retention-research" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Quran memorization retention research
            </Link>
          </div>
        </aside>
      }
    />
  );
}
