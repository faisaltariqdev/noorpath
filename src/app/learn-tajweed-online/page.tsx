import type { Metadata } from "next";
import Link from "next/link";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { learnTajweedOnline } from "@/lib/landingPageData";

export const revalidate = false;

const PATH = "/learn-tajweed-online";
const { metaTitle, metaDescription, keywords, ...props } = learnTajweedOnline;

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

export default function LearnTajweedOnlinePage() {
  return (
    <KeywordLandingPage
      canonicalPath={PATH}
      {...props}
      extraContent={
        <aside
          aria-labelledby="tajweed-resources-heading"
          style={{
            background: "rgba(10,110,79,.03)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "24px 28px",
            marginBottom: 48,
          }}
        >
          <h2
            id="tajweed-resources-heading"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.25rem",
              marginBottom: 10,
              color: "var(--charcoal)",
            }}
          >
            Practical Tajweed Resources
          </h2>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, margin: 0 }}>
            Use the{" "}
            <Link href="/blog/how-to-improve-quran-recitation" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Quran recitation improvement guide
            </Link>
            , the{" "}
            <Link href="/blog/quran-pronunciation-troubleshooting" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Quran pronunciation troubleshooting infographic
            </Link>{" "}
            to review common issues, or{" "}
            <Link href="/blog/tajweed-learning-format-comparison" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              compare Tajweed learning formats
            </Link>
            . The visual is an educational reference and cannot diagnose your recitation. Live listening and feedback from a qualified teacher may still be needed.
          </p>
        </aside>
      }
    />
  );
}
