"use client";

import CTAForm from "@/components/CTAForm";
import { ENROLLED_STUDENTS_DISPLAY, TRIAL, TRUSTPILOT } from "@/lib/academyFacts";

type Props = {
  /** Distinguishes mid-article vs end / course placements for CRM + unique field ids */
  placement?: "mid-article" | "end-article" | "course-top" | "course-bottom" | "courses-index";
  title?: string;
  subtitle?: string;
};

const trustItems = [
  { icon: "👨‍👩‍👧", label: `${ENROLLED_STUDENTS_DISPLAY} students` },
  { icon: "✓", label: "No credit card" },
  { icon: "★", label: `${TRUSTPILOT.score}/5 Trustpilot` },
  { icon: "⏱", label: `${TRIAL.durationMinutes}-min free class` },
];

export default function InlineTrialCTA({
  placement = "end-article",
  title = "Book a free 30-minute trial",
  subtitle = "Live 1-on-1 lesson — no credit card, no commitment.",
}: Props) {
  return (
    <aside
      className="inline-trial-cta"
      aria-label="Book a free trial class"
      data-placement={placement}
      style={{
        background: "linear-gradient(165deg, #f0faf5 0%, #fff 60%)",
        border: "1.5px solid rgba(10,110,79,.2)",
        borderRadius: 18,
        padding: "24px 22px 20px",
        margin: "32px 0",
        boxShadow: "0 8px 32px rgba(10, 61, 40, .08)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <p
          style={{
            color: "var(--emerald)",
            fontSize: ".7rem",
            fontWeight: 800,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            margin: "0 0 4px",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span style={{ width: 7, height: 7, background: "var(--emerald)", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
          Free trial — no commitment
        </p>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--charcoal)",
            fontSize: "1.22rem",
            margin: "0 0 6px",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.55, margin: "0 0 12px" }}>
          {subtitle}
        </p>

        {/* Trust pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {trustItems.map(({ icon, label }) => (
            <span
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                background: "rgba(10,110,79,.07)",
                border: "1px solid rgba(10,110,79,.14)",
                borderRadius: 50,
                padding: "4px 10px",
                fontSize: ".72rem",
                color: "var(--emerald)",
                fontWeight: 700,
              }}
            >
              <span>{icon}</span> {label}
            </span>
          ))}
        </div>
      </div>

      <CTAForm compact formVariant={`inline-${placement}`} idPrefix={`inline-${placement}`} />
    </aside>
  );
}
