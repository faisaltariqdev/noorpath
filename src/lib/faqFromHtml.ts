/**
 * Build FAQPage JSON-LD from visible `.faq-acc` markup only.
 * Google requires FAQ structured data to match on-page FAQ content.
 */

export type VisibleFaq = { question: string; answer: string };

function stripTags(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extract FAQs from article HTML that uses `<details class="faq-acc">`.
 * Tolerates optional whitespace and a trailing `+` toggle span in `<summary>`.
 */
export function extractVisibleFaqsFromHtml(html: string): VisibleFaq[] {
  if (!html) return [];
  const faqs: VisibleFaq[] = [];
  const re =
    /<details\b[^>]*\bclass=["'][^"']*\bfaq-acc\b[^"']*["'][^>]*>\s*<summary\b[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const question = stripTags(match[1].replace(/<span[^>]*>\s*\+\s*<\/span>/gi, " "));
    const answer = stripTags(match[2]);
    if (question.length >= 8 && answer.length >= 8) {
      faqs.push({ question, answer });
    }
  }
  return faqs;
}

export function buildFaqPageJsonLd(faqs: VisibleFaq[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function faqPageJsonLdFromHtml(html: string) {
  return buildFaqPageJsonLd(extractVisibleFaqsFromHtml(html));
}
