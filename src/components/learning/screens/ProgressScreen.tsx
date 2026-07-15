"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; done: Set<number>; toggleDone: (id: number) => void; }

const BADGES = [
  { id: "b5",  required: 5,  label: "First 5",    icon: "🌱", color: "#2E7D32" },
  { id: "b10", required: 10, label: "Halfway!",   icon: "⭐",  color: "#1565C0" },
  { id: "b20", required: 20, label: "Almost!",    icon: "🏅",  color: "#6A1B9A" },
  { id: "b28", required: 28, label: "Complete!",  icon: "🏆",  color: "#C8902E" },
];

export default function ProgressScreen({ onNavigate, done, toggleDone }: Props) {
  const pct = Math.round((done.size / 28) * 100);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,215,0,.18)", color: "#FFD700", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Tracker</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>My Learning Progress</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>{done.size} of 28 letters completed · {pct}% complete</p>
      </div>

      {/* Progress bar */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontWeight: 700, fontSize: ".88rem" }}>Overall Progress</span>
          <span style={{ fontWeight: 900, color: "#1B6B3A", fontSize: "1.1rem" }}>{pct}%</span>
        </div>
        <div style={{ background: "#E8F5E9", borderRadius: 50, height: 14, overflow: "hidden" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ height: "100%", background: "linear-gradient(90deg,#1B6B3A,#FFD700)", borderRadius: 50 }}
          />
        </div>
        <div id="progCount" style={{ textAlign: "center", marginTop: 10, color: "#666", fontSize: ".82rem" }}>
          {done.size} completed, {28 - done.size} remaining
        </div>
      </div>

      {/* Badges */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 12, marginBottom: 20 }}>
        {BADGES.map(({ id, required, label, icon, color }) => {
          const earned = done.size >= required;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: earned ? `linear-gradient(135deg,#FFD700,#FFA000)` : "#F5F5F5",
                borderRadius: 16, padding: "16px 12px", textAlign: "center",
                boxShadow: earned ? "0 4px 16px rgba(255,215,0,.3)" : "none",
                border: `2px solid ${earned ? "#FFD700" : "#E0E0E0"}`,
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 6 }}>{icon}</div>
              <div style={{ fontWeight: 900, fontSize: ".8rem", color: earned ? "#1a1a1a" : "#aaa" }}>{label}</div>
              <div style={{ fontSize: ".68rem", color: earned ? "#666" : "#ccc", marginTop: 2 }}>{required} letters</div>
            </motion.div>
          );
        })}
      </div>

      {/* Letter grid */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 18, marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: ".88rem", marginBottom: 14, color: "#555" }}>
          Click a letter to mark as complete / jump to lesson:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(50px,1fr))", gap: 6 }}>
          {LETTERS.map((lt) => {
            const gc = COLOR_GROUPS[lt.colorGroup];
            const isDone = done.has(lt.id);
            return (
              <motion.button
                key={lt.id}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => onNavigate(`letter-${lt.id}` as ScreenId)}
                onContextMenu={(e) => { e.preventDefault(); toggleDone(lt.id); }}
                title={`${lt.name} — click to open lesson, right-click to toggle complete`}
                style={{
                  aspectRatio: "1",
                  borderRadius: 10,
                  border: `2px solid ${isDone ? gc.bg : "#E0E0E0"}`,
                  background: isDone ? `linear-gradient(135deg,${gc.bg},${gc.bg}cc)` : "#fff",
                  cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}
              >
                <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.3rem", color: isDone ? "#fff" : gc.text }}>{lt.letter}</span>
                <span style={{ fontSize: ".48rem", fontWeight: 700, color: isDone ? "rgba(255,255,255,.8)" : "#aaa", fontFamily: "'Nunito',sans-serif" }}>{lt.name}</span>
                {isDone && (
                  <span style={{ position: "absolute", top: 1, right: 4, fontSize: ".6rem", color: "#fff" }}>✓</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("letter-1")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          📖 Start from Letter 1
        </motion.button>
      </div>
    </div>
  );
}
