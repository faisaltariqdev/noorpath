"use client";
import { Menu, BookOpen } from "lucide-react";
import type { ScreenId } from "@/data/learning/types";

interface Props {
  onMenuToggle: () => void;
  onNavigate: (id: ScreenId) => void;
  done: Set<number>;
}

export default function QaidaTopbar({ onMenuToggle, onNavigate, done }: Props) {
  const pct = Math.round((done.size / 28) * 100);
  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 58,
        background: "linear-gradient(90deg, #0D3D1E, #1B6B3A)",
        display: "flex", alignItems: "center", gap: 12, padding: "0 16px",
        zIndex: 1040, boxShadow: "0 2px 16px rgba(0,0,0,.28)",
      }}
    >
      <button
        onClick={onMenuToggle}
        aria-label="Toggle navigation menu"
        style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 10, color: "#fff", padding: "8px 10px", cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <Menu size={20} />
      </button>

      <button onClick={() => onNavigate("cover")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", lineHeight: 1.15, textAlign: "left" }}>
        <span style={{ color: "#FFD700", fontWeight: 900, fontSize: ".92rem", fontFamily: "'Baloo 2', cursive" }}>NoorPath Academy</span>
        <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".66rem", fontWeight: 600, letterSpacing: ".3px" }}>Noorani Qaida — Premium Edition</span>
      </button>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        {done.size > 0 && (
          <div style={{ background: "rgba(255,215,0,.18)", border: "1px solid rgba(255,215,0,.35)", borderRadius: 50, padding: "4px 12px", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: "1rem" }}>⭐</span>
            <span style={{ color: "#FFD700", fontSize: ".74rem", fontWeight: 800 }}>{done.size}/28 letters · {pct}%</span>
          </div>
        )}
        <button
          onClick={() => onNavigate("toc")}
          aria-label="Table of contents"
          style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.18)", borderRadius: 10, color: "rgba(255,255,255,.85)", padding: "6px 10px", cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <BookOpen size={18} />
        </button>
      </div>
    </div>
  );
}
