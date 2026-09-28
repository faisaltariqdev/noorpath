"use client";

import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT, ENROLLED_STUDENTS_DISPLAY, TRIAL, TRUSTPILOT, WHATSAPP_TRIAL_MESSAGE } from "@/lib/academyFacts";

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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
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

        {/* WhatsApp Fast-Track Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            padding: "12px 16px",
            background: "rgba(37, 211, 102, 0.08)",
            border: "1px solid rgba(37, 211, 102, 0.25)",
            borderRadius: 12,
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.3rem" }}>💬</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: ".88rem", color: "var(--charcoal)" }}>
                Want an instant reply?
              </div>
              <div style={{ fontSize: ".76rem", color: "var(--muted)" }}>
                Chat on WhatsApp with our academic coordinator
              </div>
            </div>
          </div>
          <WhatsAppLink
            href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_TRIAL_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#25D366",
              color: "#fff",
              padding: "7px 15px",
              borderRadius: 50,
              fontSize: ".82rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(37,211,102,.25)",
            }}
          >
            <span>Chat on WhatsApp →</span>
          </WhatsAppLink>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "10px 0 14px", position: "relative" }}>
        <span
          style={{
            background: "#fff",
            padding: "0 10px",
            fontSize: ".74rem",
            color: "var(--muted)",
            fontWeight: 600,
            position: "relative",
            zIndex: 1,
          }}
        >
          or submit class details below
        </span>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(10,110,79,.15)",
          }}
        />
      </div>

      <CTAForm compact formVariant={`inline-${placement}`} idPrefix={`inline-${placement}`} />
    </aside>
  );
}
