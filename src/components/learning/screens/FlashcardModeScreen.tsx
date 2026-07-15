"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import Flashcard3D from "@/components/learning/ui/Flashcard3D";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function FlashcardModeScreen({ onNavigate }: Props) {
  const [idx, setIdx] = useState(0);

  function next() { setIdx((i) => (i + 1) % 28); }
  function prev() { setIdx((i) => (i - 1 + 28) % 28); }
  function shuffle() { setIdx(Math.floor(Math.random() * 28)); }

  const lt = LETTERS[idx];

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#00695C,#00897B)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Review Tool</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Interactive Flashcard Mode</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Tap the card to flip! Navigate through all 28 letters.</p>
      </div>

      {/* Letter selector */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 18, marginBottom: 20 }}>
        <div style={{ marginBottom: 12, fontWeight: 700, fontSize: ".84rem", color: "#555" }}>Select Letter:</div>
        <select
          value={idx}
          onChange={(e) => setIdx(parseInt(e.target.value))}
          style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "2px solid #E0E0E0", fontSize: ".9rem", fontFamily: "'Nunito', sans-serif", background: "#FAFAFA" }}
        >
          {LETTERS.map((l, i) => (
            <option key={l.id} value={i}>{l.name} ({l.letter})</option>
          ))}
        </select>
      </div>

      {/* Counter */}
      <div style={{ textAlign: "center", marginBottom: 12, color: "#999", fontSize: ".8rem", fontWeight: 700 }}>
        Letter {idx + 1} of 28
      </div>

      {/* Card */}
      <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: 24 }}>
        <Flashcard3D letter={lt} size={240} />
      </motion.div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={prev}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ← Prev
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={shuffle}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,215,0,.15)", border: "2px solid #FFD700", color: "#C8902E", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, cursor: "pointer" }}>
          🔀 Shuffle
        </motion.button>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={next}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          Next →
        </motion.button>
      </div>

      {/* All letters mini-grid */}
      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 18 }}>
        <div style={{ fontWeight: 700, fontSize: ".84rem", color: "#555", marginBottom: 12 }}>Jump to any letter:</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(48px,1fr))", gap: 6 }}>
          {LETTERS.map((l, i) => (
            <motion.button
              key={l.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIdx(i)}
              style={{
                fontFamily: "'Amiri', serif", fontSize: "1.5rem",
                border: `2px solid ${i === idx ? "#1B6B3A" : "#E0E0E0"}`,
                borderRadius: 10,
                background: i === idx ? "#E8F5E9" : "#fff",
                cursor: "pointer", aspectRatio: "1",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i === idx ? "#1B6B3A" : "#333",
              }}
            >
              {l.letter}
            </motion.button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate(`letter-${lt.id}` as ScreenId)}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 900, fontSize: ".92rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          📖 Go to Full Lesson: {lt.name}
        </motion.button>
      </div>
    </div>
  );
}
