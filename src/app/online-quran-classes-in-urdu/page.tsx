import type { Metadata } from "next";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { quranClassesInUrdu } from "@/lib/landingPageDataDemand";
import { BASE_URL } from "@/lib/academyFacts";

export const revalidate = false;

const PATH = "/online-quran-classes-in-urdu";
const { metaTitle, metaDescription, keywords, ...props } = quranClassesInUrdu;

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  keywords,
  alternates: { canonical: `${BASE_URL}${PATH}` },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `${BASE_URL}${PATH}`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: metaTitle }],
  },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: ["/og-image.png"] },
};

export default function QuranClassesInUrduPage() {
  return <KeywordLandingPage canonicalPath={PATH} heroCtaHref="#cta" {...props} />;
}
