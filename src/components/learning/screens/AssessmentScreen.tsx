"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; done: Set<number>; }

const RUBRIC = [
  { stars: "⭐⭐⭐", label: "Excellent", desc: "Confident, correct Makharij, no hesitation", color: "#2E7D32" },
  { stars: "⭐⭐",   label: "Good",      desc: "Minor errors, self-corrects quickly",        color: "#1565C0" },
  { stars: "⭐",     label: "Developing",desc: "Needs support, practice required",            color: "#E65100" },
  { stars: "📝",    label: "Not Yet",   desc: "Requires further revision and practice",      color: "#C62828" },
];

export default function AssessmentScreen({ onNavigate, done }: Props) {
  const [ratings, setRatings] = useState<Record<number, number>>({});

  function setRating(letterId: number, value: number) {
    setRatings((prev) => ({ ...prev, [letterId]: value }));
  }

  const totalRated = Object.keys(ratings).length;
  const avgRating = totalRated > 0 ? Object.values(ratings).reduce((a, b) => a + b, 0) / totalRated : 0;

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#C8902E,#E6A320)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 7</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Assessment & Evaluation</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Rate your mastery of each letter. Be honest — this helps you know what to revise!</p>
      </div>

      {/* Rubric */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 20 }}>
        <div style={{ background: "#FFEBEE", color: "#C62828", padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>📋 Assessment Rubric</div>
        <div style={{ padding: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10 }}>
          {RUBRIC.map(({ stars, label, desc, color }) => (
            <div key={label} style={{ background: "#F9F9F9", borderRadius: 12, padding: "12px 14px" }}>
              <div style={{ fontSize: "1.2rem", marginBottom: 4 }}>{stars}</div>
              <div style={{ fontWeight: 900, fontSize: ".84rem", color }}>{label}</div>
              <div style={{ fontSize: ".76rem", color: "#666", marginTop: 3 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Letter assessment grid */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <h2 style={{ fontWeight: 900, fontSize: "1rem", color: "#333", marginBottom: 14 }}>Rate Each Letter (tap ⭐ to rate 1-3):</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 10 }}>
          {LETTERS.map((lt) => {
            const gc = COLOR_GROUPS[lt.colorGroup];
            const rating = ratings[lt.id] ?? 0;
            return (
              <div key={lt.id} style={{ background: gc.light, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, border: `2px solid ${gc.bg}22` }}>
                <div style={{ fontFamily: "'Amiri', serif", fontSize: "2rem", color: gc.text, flexShrink: 0, width: 36, textAlign: "center" }}>{lt.letter}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: ".8rem", color: gc.text, marginBottom: 4 }}>{lt.name}</div>
                  <div style={{ display: "flex", gap: 4 }}>
                    {[1, 2, 3].map((n) => (
                      <motion.button
                        key={n}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(lt.id, n)}
                        style={{
                          width: 28, height: 28, borderRadius: "50%",
                          border: `2px solid ${rating >= n ? "#FFD700" : "#E0E0E0"}`,
                          background: rating >= n ? "#FDD835" : "#fff",
                          cursor: "pointer", fontSize: ".8rem", display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >
                        ⭐
                      </motion.button>
                    ))}
                  </div>
                </div>
                {done.has(lt.id) && <span style={{ fontSize: ".75rem", color: "#1B6B3A" }}>✓</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      {totalRated > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", borderRadius: 16, padding: "20px 22px", color: "#fff", marginBottom: 20, textAlign: "center" }}
        >
          <div style={{ fontSize: "2.2rem", marginBottom: 6 }}>
            {avgRating >= 2.5 ? "🏆" : avgRating >= 1.5 ? "⭐" : "💪"}
          </div>
          <div style={{ fontWeight: 900, fontSize: "1.1rem" }}>
            {totalRated} of 28 letters assessed · Average: {avgRating.toFixed(1)}/3
          </div>
          <div style={{ color: "rgba(255,255,255,.75)", fontSize: ".84rem", marginTop: 4 }}>
            {avgRating >= 2.5 ? "Excellent work! You're ready for the certificate!" : avgRating >= 1.5 ? "Good progress — keep practising the lower-rated letters!" : "Keep going — every letter you master is a step closer to reading the Quran!"}
          </div>
        </motion.div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("revision")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Revision
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("certificate")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          🏆 My Certificate →
        </motion.button>
      </div>
    </div>
  );
}
