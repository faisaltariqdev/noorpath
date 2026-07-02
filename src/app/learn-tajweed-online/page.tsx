import type { Metadata } from "next";
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
  return <KeywordLandingPage canonicalPath={PATH} {...props} />;
}
