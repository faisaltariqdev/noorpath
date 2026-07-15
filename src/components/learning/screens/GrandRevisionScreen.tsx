"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import Flashcard3D from "@/components/learning/ui/Flashcard3D";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; done: Set<number>; }

export default function GrandRevisionScreen({ onNavigate, done }: Props) {
  const [quizIdx, setQuizIdx] = useState(Math.floor(Math.random() * 28));
  const [revealed, setRevealed] = useState(false);

  const lt = LETTERS[quizIdx];
  const gc = COLOR_GROUPS[lt.colorGroup];

  function nextQuiz() {
    setQuizIdx(Math.floor(Math.random() * 28));
    setRevealed(false);
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,215,0,.18)", color: "#FFD700", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 7</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Grand Revision</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Review all 28 letters, harakat, diacritics, and reading skills!</p>
      </div>

      {/* Progress summary */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <h2 style={{ fontWeight: 900, fontSize: "1rem", color: "#333", marginBottom: 14 }}>Your Progress Summary</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10 }}>
          {[
            { label: "Letters Completed", value: done.size, total: 28, color: "#1B6B3A" },
            { label: "Percentage", value: `${Math.round((done.size/28)*100)}%`, total: null, color: "#1565C0" },
            { label: "Letters Remaining", value: 28 - done.size, total: 28, color: "#E65100" },
          ].map(({ label, value, total, color }) => (
            <div key={label} style={{ background: "#F9F9F9", borderRadius: 14, padding: "16px 12px", textAlign: "center" }}>
              <div style={{ fontWeight: 900, fontSize: "1.8rem", color }}>{value}</div>
              {total && <div style={{ fontSize: ".72rem", color: "#aaa" }}>of {total}</div>}
              <div style={{ fontSize: ".72rem", color: "#666", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick quiz */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <h2 style={{ fontWeight: 900, fontSize: "1rem", color: "#333", marginBottom: 14 }}>Quick Letter Quiz</h2>
        <p style={{ fontSize: ".84rem", color: "#555", marginBottom: 14 }}>Look at this letter — can you name it without looking?</p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(4rem,15vw,7rem)", color: gc.text, lineHeight: 1 }}>
            {lt.letter}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => setRevealed(true)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
              🔍 Reveal Answer
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={nextQuiz}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,215,0,.15)", border: "2px solid #FFD700", color: "#C8902E", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, cursor: "pointer" }}>
              🔀 New Letter
            </motion.button>
          </div>

          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{ background: gc.light, borderRadius: 16, padding: "16px 24px", textAlign: "center", border: `2px solid ${gc.bg}44` }}
            >
              <div style={{ fontWeight: 900, fontSize: "1.4rem", color: gc.text }}>{lt.name}</div>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.1rem", color: `${gc.text}99` }}>{lt.arabicName}</div>
              <div style={{ fontSize: ".88rem", color: "#555", marginTop: 4 }}>Sound: "{lt.sound}" · {lt.makharij}</div>
            </motion.div>
          )}
        </div>
      </div>

      {/* All letters flashcard strip */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <h2 style={{ fontWeight: 900, fontSize: "1rem", color: "#333", marginBottom: 12 }}>Random Flashcard Practice</h2>
        <Flashcard3D letter={LETTERS[quizIdx]} size={200} />
        <div style={{ textAlign: "center", marginTop: 14 }}>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={nextQuiz}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
            🔀 New Flashcard
          </motion.button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("tajweed-intro")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Tajweed
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("assessment")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Assessment →
        </motion.button>
      </div>
    </div>
  );
}
