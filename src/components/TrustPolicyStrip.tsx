import Link from "next/link";
import { PARENT_POLICY_FACTS } from "@/lib/academyFacts";

/**
 * TrustPolicyStrip — answers the four questions parents ask before booking
 * (who teaches, missed classes, tutor switch, cancelling). Content comes only
 * from PARENT_POLICY_FACTS so every page states the same, Terms-backed policy.
 *
 * Renders as a compact grid; optionally with a heading. Safe to place on
 * service pages, the trial page, and pricing.
 */
export default function TrustPolicyStrip({
  heading = "Before you book — four straight answers",
  compact = false,
  className,
}: {
  heading?: string | null;
  compact?: boolean;
  className?: string;
}) {
  return (
    <section
      className={className}
      aria-labelledby={heading ? "np-trust-policy-heading" : undefined}
      style={{
        background: "var(--ivory)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: compact ? "18px 20px" : "26px 28px",
        marginBottom: 48,
      }}
    >
      {heading && (
        <h2
          id="np-trust-policy-heading"
          style={{ fontFamily: "var(--font-playfair), serif", fontSize: compact ? "1.05rem" : "1.3rem", color: "var(--charcoal)", margin: "0 0 14px" }}
        >
          {heading}
        </h2>
      )}
      <dl
        className="np-trust-policy"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: compact ? 12 : 18,
          margin: 0,
        }}
      >
        {PARENT_POLICY_FACTS.map((item) => (
          <div key={item.id} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 12, padding: compact ? "12px 14px" : "16px 18px" }}>
            <dt style={{ fontWeight: 700, color: "var(--emerald)", fontSize: ".9rem", marginBottom: 6 }}>{item.q}</dt>
            <dd style={{ margin: 0, color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.65 }}>{item.a}</dd>
          </div>
        ))}
      </dl>
      <p style={{ margin: "14px 0 0", fontSize: ".8rem", color: "var(--muted)" }}>
        Full wording in the{" "}
        <Link href="/terms-of-service" style={{ color: "var(--emerald)", fontWeight: 600 }}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/safeguarding" style={{ color: "var(--emerald)", fontWeight: 600 }}>
          Safeguarding policy
        </Link>
        .
      </p>
    </section>
  );
}
