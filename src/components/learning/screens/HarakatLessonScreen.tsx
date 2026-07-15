"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HARAKAT } from "@/data/learning/curriculum";
import { LETTERS } from "@/data/learning/letters";
import StarRating from "@/components/learning/ui/StarRating";
import ActivityBox from "@/components/learning/ui/ActivityBox";
import type { ScreenId } from "@/data/learning/types";

interface Props {
  harakatId: "fatha" | "kasra" | "damma";
  onNavigate: (id: ScreenId) => void;
  onRate: (screen: string, count: number) => void;
}

const NEXT_MAP: Record<string, ScreenId> = {
  fatha: "kasra",
  kasra: "damma",
  damma: "tanween",
};

export default function HarakatLessonScreen({ harakatId, onNavigate, onRate }: Props) {
  const [quizResult, setQuizResult] = useState<"right" | "wrong" | null>(null);
  const h = HARAKAT.find((x) => x.id === harakatId)!;
  const nextId = NEXT_MAP[harakatId];

  // Build quiz: which harakat is this?
  const quizOptions = [
    { display: "بَ", name: "Fatha", correct: harakatId === "fatha" },
    { display: "بِ", name: "Kasra", correct: harakatId === "kasra" },
    { display: "بُ", name: "Damma", correct: harakatId === "damma" },
  ];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: `linear-gradient(135deg,${h.color}dd,${h.color})`, color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 2 · Harakat</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>{h.name} — Short "{h.sound}" Sound</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>{h.description}</p>
      </div>

      {/* Big display */}
      <div style={{ background: h.bg, borderRadius: 20, padding: "32px 20px", textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: "2rem", marginBottom: 8 }}>{h.emoji}</div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
          style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(4rem,15vw,8rem)", color: h.color, lineHeight: 1 }}
        >
          {h.display}
        </motion.div>
        <div style={{ fontWeight: 900, fontSize: "1.4rem", color: h.color, marginTop: 8 }}>{h.name}</div>
        <div style={{ fontSize: "1rem", color: `${h.color}99`, fontWeight: 700 }}>Sound: "{h.sound}"</div>
      </div>

      {/* Examples with all letters */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ background: h.bg, color: h.color, padding: "12px 18px", fontWeight: 800, fontSize: ".88rem" }}>
          {h.name} with Different Letters — Say Each One Aloud!
        </div>
        <div style={{ padding: 18 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {LETTERS.slice(0, 12).map((lt) => {
              const suffix = harakatId === "fatha" ? "\u064E" : harakatId === "kasra" ? "\u0650" : "\u064F";
              return (
                <motion.div
                  key={lt.id}
                  whileHover={{ scale: 1.1 }}
                  style={{
                    background: h.bg, borderRadius: 12, padding: "12px 16px",
                    textAlign: "center", cursor: "default", border: `2px solid ${h.color}22`,
                    minWidth: 70,
                  }}
                >
                  <div style={{ fontFamily: "'Amiri', serif", fontSize: "2.4rem", color: h.color, lineHeight: 1 }}>
                    {lt.letter}{suffix}
                  </div>
                  <div style={{ fontSize: ".68rem", fontWeight: 700, color: "#666", marginTop: 4 }}>
                    {lt.name}{h.sound}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tip */}
      <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 12px 12px 0", padding: "12px 18px", marginBottom: 16, fontSize: ".88rem" }}>
        💡 {h.tip}
      </div>

      {/* Quiz */}
      <ActivityBox variant="quiz" title="Quick Quiz — Which Harakat is This?" icon="❓">
        <div style={{ fontFamily: "'Amiri', serif", fontSize: "4rem", textAlign: "center", marginBottom: 12, color: h.color }}>{h.display}</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {quizOptions.map(({ display, name, correct }) => (
            <motion.button
              key={name}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => !quizResult && setQuizResult(correct ? "right" : "wrong")}
              style={{
                padding: "12px 20px", borderRadius: 12,
                border: `2px solid ${quizResult ? (correct ? "#2E7D32" : "#C62828") : "#E0E0E0"}`,
                background: quizResult && correct ? "#E8F5E9" : quizResult && !correct ? "#FFEBEE" : "#fff",
                cursor: quizResult ? "default" : "pointer", fontWeight: 800, fontSize: ".9rem",
              }}
            >
              <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.6rem", display: "block", textAlign: "center" }}>{display}</span>
              {name}
            </motion.button>
          ))}
        </div>
        {quizResult && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginTop: 12, fontWeight: 800, color: quizResult === "right" ? "#2E7D32" : "#C62828", fontSize: ".92rem" }}>
            {quizResult === "right" ? "🎉 Excellent! You got it right!" : "Keep practising — try again!"}
          </motion.div>
        )}
      </ActivityBox>

      {/* Stars */}
      <ActivityBox variant="reward" title="My Stars" icon="⭐">
        <StarRating screenId={harakatId} onRate={(count) => onRate(harakatId, count)} />
      </ActivityBox>

      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("harakat-intro")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Overview
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(nextId)}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Next →
        </motion.button>
      </div>
    </div>
  );
}
