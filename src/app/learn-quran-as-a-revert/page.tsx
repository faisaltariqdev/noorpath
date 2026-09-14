import type { Metadata } from "next";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { learnQuranAsRevert } from "@/lib/landingPageData";
import { BASE_URL } from "@/lib/academyFacts";

export const revalidate = false;

const PATH = "/learn-quran-as-a-revert";
const { metaTitle, metaDescription, keywords, ...props } = learnQuranAsRevert;

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

export default function LearnQuranAsRevertPage() {
  return <KeywordLandingPage canonicalPath={PATH} {...props} />;
}
