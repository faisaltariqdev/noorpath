import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QaidaTopicPage from "@/components/noorani-qaida/QaidaTopicPage";
import {
  QAIDA_TAJWEED_TOPICS,
  QAIDA_TOPIC_BY_SLUG,
} from "@/data/noorani-qaida";
import { QAIDA_BASE_URL } from "@/components/noorani-qaida/QaidaSeoComponents";
import { fitTitle, withTail } from "@/lib/seoMeta";

interface Props {
  params: Promise<{ topic: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return QAIDA_TAJWEED_TOPICS.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = QAIDA_TOPIC_BY_SLUG[slug];
  if (!topic || topic.category !== "tajweed") return {};
  const url = `${QAIDA_BASE_URL}/tajweed/${topic.slug}`;
  const title = fitTitle([
    `${topic.title} Rules for Beginners: Guide & Examples | NoorPath`,
    `${topic.title} Rules for Beginners: Guide & Examples`,
    `${topic.title} Tajweed Rules for Beginners | NoorPath`,
    `${topic.title} Tajweed Rules | NoorPath`,
  ]);
  const description = withTail(topic.summary, [
    "Tajweed examples, common mistakes and a step-by-step practice sequence for beginners.",
    "With Tajweed examples, common mistakes and practice steps.",
    "With examples and practice steps.",
  ]);
  return {
    title: { absolute: title },
    description,
    keywords: topic.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{
        url: "/resources/quran-pronunciation-troubleshooting.svg",
        width: 1200,
        height: 630,
        alt: `${topic.title} pronunciation and Tajweed learning guide`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/resources/quran-pronunciation-troubleshooting.svg"],
    },
  };
}

export default async function NooraniQaidaTajweedPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = QAIDA_TOPIC_BY_SLUG[slug];
  if (!topic || topic.category !== "tajweed") notFound();
  return <QaidaTopicPage topic={topic} />;
}
