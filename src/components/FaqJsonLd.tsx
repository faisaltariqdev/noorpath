"use client";

import { serializeJsonLd } from "@/lib/jsonLd";

export interface FaqItem {
  q: string;
  a: string;
}

const MAX_ANSWER_CHARS = 500;

/** Remove HTML tags and collapse whitespace for schema.org text fields. */
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * Truncate to ~500 characters, preferring to end at a sentence boundary.
 * Keeps the first 2-3 sentences when an answer is long.
 */
function truncateAnswer(text: string, maxChars: number = MAX_ANSWER_CHARS): string {
  if (text.length <= maxChars) return text;

  // Find the last sentence-ending punctuation within the limit.
  const truncated = text.slice(0, maxChars + 1);
  const match = truncated.match(/^(.*[.!?])(?:\s|$)/);
  if (match) return match[1].trim();

  // Fallback: hard truncate at maxChars and add ellipsis if mid-word.
  return truncated.slice(0, maxChars).trim() + "…";
}

export function buildFaqPageJsonLd(
  faqs: FaqItem[],
  pageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": `${pageUrl}#faq` } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: truncateAnswer(stripHtml(faq.a)),
      },
    })),
  };
}

/**
 * Render FAQPage JSON-LD for a visible FAQ section.
 * Only renders when faqs is non-empty so Google never sees hidden/empty schema.
 */
export default function FaqJsonLd({
  faqs,
  pageUrl,
}: {
  faqs: FaqItem[];
  pageUrl?: string;
}) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = buildFaqPageJsonLd(faqs, pageUrl);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
    />
  );
}
