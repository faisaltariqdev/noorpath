import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QaidaTopicPage from "@/components/noorani-qaida/QaidaTopicPage";
import {
  QAIDA_LESSONS,
  QAIDA_TOPIC_BY_SLUG,
} from "@/data/noorani-qaida";
import { QAIDA_BASE_URL } from "@/components/noorani-qaida/QaidaSeoComponents";

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
  const title = `${topic.title} in Noorani Qaida: Examples & Practice`;
  const description = `${topic.summary} Learn with Arabic examples, mouth and writing cues, common mistakes, four practice steps, and parent and teacher guidance.`;
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
