import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QaidaTopicPage from "@/components/noorani-qaida/QaidaTopicPage";
import {
  QAIDA_LESSONS,
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
  return QAIDA_LESSONS.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = QAIDA_TOPIC_BY_SLUG[slug];
  if (!topic || topic.category !== "lesson") return {};
  const url = `${QAIDA_BASE_URL}/lessons/${topic.slug}`;
  const title = fitTitle([
    `${topic.title} in Noorani Qaida: Examples & Practice | NoorPath`,
    `${topic.title} in Noorani Qaida: Examples & Practice`,
    `${topic.title} in Noorani Qaida | NoorPath`,
  ]);
  const description = withTail(topic.summary, [
    "Arabic examples, common mistakes and practice steps for kids and beginners.",
    "With Arabic examples, common mistakes and practice steps.",
    "With Arabic examples and practice steps.",
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
        url: "/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png",
        width: 1024,
        height: 488,
        alt: `Interactive Noorani Qaida lesson supporting ${topic.title}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/marketing/noorani-qaida/alif-pronunciation-tracing-lesson.png"],
    },
  };
}

export default async function NooraniQaidaLessonPage({ params }: Props) {
  const { topic: slug } = await params;
  const topic = QAIDA_TOPIC_BY_SLUG[slug];
  if (!topic || topic.category !== "lesson") notFound();
  return <QaidaTopicPage topic={topic} />;
}
