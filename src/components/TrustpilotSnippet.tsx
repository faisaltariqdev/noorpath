import Link from "next/link";
import { featuredTrustpilotReviews } from "@/data/trustpilotReviews";
import { TRUSTPILOT } from "@/lib/academyFacts";

type Props = {
  /** How many reviews to show (2–3 recommended on course/location pages) */
  count?: number;
  title?: string;
};

/** Compact Trustpilot reviews for course and location templates. */
export default function TrustpilotSnippet({
  count = 3,
  title = "What parents say on Trustpilot",
}: Props) {
  const reviews = featuredTrustpilotReviews.slice(0, Math.min(count, 3));

  return (
    <aside
      aria-label="Parent reviews from Trustpilot"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "22px 20px",
        margin: "28px 0",
      }}
    >
      <div style={{ marginBottom: 16 }}>
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
          Reviews
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            color: "var(--charcoal)",
            margin: "0 0 8px",
          }}
        >
          {title}
        </h2>
        <a
          href={TRUSTPILOT.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00b67a", fontWeight: 700, fontSize: ".82rem", textDecoration: "none" }}
        >
          Verified on Trustpilot · last checked {TRUSTPILOT.lastChecked} →
        </a>
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        {reviews.map((t) => (
          <blockquote
            key={t.name}
            style={{
              margin: 0,
              padding: "14px 16px",
              background: "var(--ivory)",
              borderRadius: 12,
              borderLeft: "3px solid #00b67a",
            }}
          >
            <div style={{ color: "#00b67a", letterSpacing: 2, fontSize: ".95rem", marginBottom: 6 }}>
              {"★".repeat(t.stars)}
            </div>
            <p style={{ color: "var(--slate)", fontSize: ".86rem", lineHeight: 1.65, margin: "0 0 10px", fontStyle: "italic" }}>
              &ldquo;{t.text.length > 180 ? `${t.text.slice(0, 180)}…` : t.text}&rdquo;
            </p>
            <p style={{ fontSize: ".8rem", color: "var(--muted)", margin: 0 }}>
              <strong style={{ color: "var(--charcoal)" }}>{t.name}</strong> · {t.country} · {t.date}
            </p>
          </blockquote>
        ))}
      </div>
      <p style={{ margin: "16px 0 0", textAlign: "center" }}>
        <Link href="/#testimonials" style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".85rem" }}>
          See more parent reviews →
        </Link>
      </p>
    </aside>
  );
}
