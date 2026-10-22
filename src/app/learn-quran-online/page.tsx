import type { Metadata } from "next";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { learnQuranOnline } from "@/lib/landingPageData";
import {
  buildCourseItemListJsonLd,
  PRICED_COURSE_CATEGORIES,
} from "@/lib/courseJsonLd";

export const revalidate = false;

const PATH = "/learn-quran-online";
const { metaTitle, metaDescription, keywords, ...props } = learnQuranOnline;

const pageUrl = `https://www.noorpath.online${PATH}`;
const courseListJsonLd = buildCourseItemListJsonLd(pageUrl, PRICED_COURSE_CATEGORIES);

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

export default function LearnQuranOnlinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListJsonLd) }}
      />
      <KeywordLandingPage canonicalPath={PATH} {...props} />
    </>
  );
}
