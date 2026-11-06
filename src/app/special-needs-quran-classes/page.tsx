import type { Metadata } from "next";
import KeywordLandingPage from "@/components/KeywordLandingPage";
import { specialNeedsQuranClasses } from "@/lib/landingPageData";
import { SpecialNeedsIntro, SpecialNeedsLearningKit } from "@/components/special-needs/SpecialNeedsSections";
import { BASE_URL } from "@/lib/academyFacts";

export const revalidate = false;

const PATH = "/special-needs-quran-classes";
const { metaTitle, metaDescription, keywords, ...props } = specialNeedsQuranClasses;

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
    images: [{ url: "/marketing/special-needs-calm-lesson.jpg", width: 1200, height: 570, alt: metaTitle }],
  },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: ["/marketing/special-needs-calm-lesson.jpg"] },
};

export default function SpecialNeedsQuranClassesPage() {
  return (
    <KeywordLandingPage
      canonicalPath={PATH}
      {...props}
      introContent={<SpecialNeedsIntro />}
      extraContent={<SpecialNeedsLearningKit />}
    />
  );
}
