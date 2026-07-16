import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QaidaTopicPage from "@/components/noorani-qaida/QaidaTopicPage";
import {
  QAIDA_TAJWEED_TOPICS,
  QAIDA_TOPIC_BY_SLUG,
} from "@/data/noorani-qaida";
import { QAIDA_BASE_URL } from "@/components/noorani-qaida/QaidaSeoComponents";

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
  const title = `${topic.title} Rules for Beginners: Guide & Examples`;
  const description = `${topic.summary} Understand the written clue, examples, common mistakes, practice sequence, and why reviewed recitation and teacher feedback matter.`;
  return {
    title: { absolute: `${title} | NoorPath` },
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
