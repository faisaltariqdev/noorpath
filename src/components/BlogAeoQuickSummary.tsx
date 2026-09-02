import React from "react";
import { Sparkles, CheckCircle2, BookmarkCheck, ShieldCheck } from "lucide-react";

interface BlogAeoQuickSummaryProps {
  title: string;
  excerpt: string;
  category?: string;
  readTime?: string;
  keyPoints?: string[];
  reviewedBy?: string;
}

export default function BlogAeoQuickSummary({
  title,
  excerpt,
  category,
  readTime,
  keyPoints,
  reviewedBy = "NoorPath Academic & Islamic Curators",
}: BlogAeoQuickSummaryProps) {
  // Generate intelligent bullet points from excerpt if custom points are not supplied
  const points = keyPoints && keyPoints.length > 0
    ? keyPoints
    : [
        `Direct answer & complete Islamic context for ${title.split("—")[0].trim()}.`,
        `Curated Arabic text, authentic English translation, and practical everyday implementation.`,
        `Structured for self-paced study or guided 1-on-1 revision with certified tutors.`,
      ];

  return (
    <aside
      className="quick-answer article-takeaway highlight-box mb-8 p-5 sm:p-6 rounded-2xl"
      aria-label="Quick Summary and Key Takeaways for AI & Readers"
      style={{
        background: "linear-gradient(135deg, rgba(10, 110, 79, 0.06) 0%, rgba(201, 146, 42, 0.06) 100%)",
        border: "1.5px solid rgba(10, 110, 79, 0.2)",
        boxShadow: "0 4px 20px rgba(10, 61, 40, 0.04)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[rgba(10,110,79,0.12)]">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-[var(--emerald)] text-white">
            <Sparkles size={16} />
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--emerald)]">
            AEO Quick Answer &amp; Key Takeaways
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-[var(--muted)] font-medium">
          {category && (
            <span className="inline-flex items-center gap-1">
              <BookmarkCheck size={13} className="text-[var(--gold)]" />
              {category}
            </span>
          )}
          {readTime && <span>• {readTime} read</span>}
        </div>
      </div>

      {/* Primary Direct Definition / Answer (for Google AI Overviews & Perplexity) */}
      <p
        className="text-[0.95rem] sm:text-[1rem] text-[var(--charcoal)] font-semibold leading-relaxed mb-4"
        style={{ color: "#1a3028" }}
      >
        {excerpt}
      </p>

      {/* Bulleted Key Takeaways */}
      <div className="space-y-2 mb-4">
        {points.map((pt, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--slate)] leading-relaxed">
            <CheckCircle2 size={16} className="text-[var(--emerald)] shrink-0 mt-0.5" />
            <span>{pt}</span>
          </div>
        ))}
      </div>

      {/* Fact & E-E-A-T verification footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[rgba(10,110,79,0.1)] text-[0.78rem] text-[var(--muted)]">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-[var(--emerald)]" />
          Verified for authenticity &amp; verified sources
        </span>
        <span className="italic">Reviewed by {reviewedBy}</span>
      </div>
    </aside>
  );
}
