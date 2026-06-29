import type { Metadata } from "next";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { learnQuranOnline } from "@/lib/landingPageData";

const PATH = "/learn-quran-online";
const { metaTitle, metaDescription, keywords, ...props } = learnQuranOnline;

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  keywords,
  alternates: { canonical: `https://www.noorpath.online${PATH}` },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `https://www.noorpath.online${PATH}`,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: metaTitle }],
  },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: ["/og-image.svg"] },
};

export default function LearnQuranOnlinePage() {
  return <KeywordLandingPage canonicalPath={PATH} {...props} />;
}
