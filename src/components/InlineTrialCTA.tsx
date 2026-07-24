"use client";

import CTAForm from "@/components/CTAForm";

type Props = {
  /** Distinguishes mid-article vs end / course placements for CRM + unique field ids */
  placement?: "mid-article" | "end-article" | "course-top" | "course-bottom" | "courses-index";
  title?: string;
  subtitle?: string;
};

export default function InlineTrialCTA({
  placement = "end-article",
  title = "Book a free 30-minute trial",
  subtitle = "Name, WhatsApp or email, and preferred time — no credit card required.",
}: Props) {
  return (
    <aside
      className="inline-trial-cta"
      aria-label="Book a free trial class"
      data-placement={placement}
      style={{
        background: "linear-gradient(165deg, #f7fbf8 0%, #fff 55%)",
        border: "1px solid rgba(10,110,79,.18)",
        borderRadius: 16,
        padding: "22px 20px 18px",
        margin: "28px 0",
        boxShadow: "0 8px 28px rgba(10, 61, 40, .06)",
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <p
          style={{
            color: "var(--emerald)",
            fontSize: ".72rem",
            fontWeight: 800,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            margin: "0 0 6px",
          }}
        >
          Free trial
        </p>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--charcoal)",
            fontSize: "1.2rem",
            margin: "0 0 6px",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.55, margin: 0 }}>
          {subtitle}
        </p>
      </div>
      <CTAForm compact formVariant={`inline-${placement}`} idPrefix={`inline-${placement}`} />
    </aside>
  );
}
