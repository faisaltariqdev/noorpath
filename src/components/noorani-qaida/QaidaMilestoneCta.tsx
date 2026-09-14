"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, X } from "lucide-react";
import { TRIAL } from "@/lib/academyFacts";

/**
 * QaidaMilestoneCta — appears only after genuine engagement inside a game
 * (e.g. 5 quiz rounds, 7+ checklist items). It is the bridge between the
 * site's highest-CTR asset (free Qaida games) and the free live trial.
 *
 * Honest by design: it praises effort, not achievement, and states plainly
 * that a game cannot hear the child — a live tutor can.
 */
export default function QaidaMilestoneCta({
  show,
  headline,
  body,
}: {
  show: boolean;
  headline: string;
  body: string;
}) {
  const [dismissed, setDismissed] = useState(false);
  if (!show || dismissed) return null;

  return (
    <aside
      className="qaida-milestone-cta"
      role="status"
      aria-live="polite"
      style={{
        marginTop: "1.25rem",
        background: "rgba(10,110,79,.06)",
        border: "1px solid rgba(10,110,79,.22)",
        borderLeft: "4px solid var(--emerald)",
        borderRadius: 12,
        padding: "16px 18px",
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <GraduationCap size={22} aria-hidden="true" style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 700, color: "var(--charcoal)", fontSize: ".95rem" }}>{headline}</p>
        <p style={{ margin: "6px 0 12px", color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.6 }}>{body}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/free-quran-classes-online" className="btn-primary-np" style={{ padding: "9px 16px", fontSize: ".85rem" }}>
            Book a free {TRIAL.durationMinutes}-minute live lesson →
          </Link>
          <span style={{ fontSize: ".78rem", color: "var(--muted)" }}>No credit card · one-to-one · your timezone</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{ background: "transparent", border: 0, cursor: "pointer", color: "var(--muted)", padding: 4, lineHeight: 0 }}
      >
        <X size={16} aria-hidden="true" />
      </button>
    </aside>
  );
}
