"use client";
import { motion } from "framer-motion";
import { HARAKAT } from "@/data/learning/curriculum";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; }

export default function HarakatIntroScreen({ onNavigate }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#4A148C,#6A1B9A)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Unit 2</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>Harakat — Short Vowels</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Arabic has three short vowels that change the sound of every letter!</p>
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 20, marginBottom: 20 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#1B6B3A", marginBottom: 16 }}>What are Harakat?</h2>
        <p style={{ fontSize: ".88rem", color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
          Harakat (حركات) are small marks placed above or below Arabic letters to show how they should be pronounced.
          Without harakat, Arabic text can be ambiguous — with them, every letter has a clear, precise sound.
          In the Quran, harakat are always used so everyone can read correctly.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
          {HARAKAT.map((h, i) => (
            <motion.button
              key={h.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate(h.id as ScreenId)}
              style={{
                background: h.bg, borderRadius: 16, padding: "20px 16px",
                textAlign: "center", border: `2px solid ${h.color}33`,
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>{h.emoji}</div>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "3rem", color: h.color, marginBottom: 6 }}>{h.display}</div>
              <div style={{ fontWeight: 900, fontSize: "1rem", color: h.color }}>{h.name}</div>
              <div style={{ fontSize: ".78rem", color: "#555", marginTop: 4 }}>Sound: "{h.sound}"</div>
            </motion.button>
          ))}
        </div>
      </div>

      <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 12px 12px 0", padding: "14px 18px", marginBottom: 20, fontSize: ".88rem", lineHeight: 1.6 }}>
        💡 <strong>Remember:</strong> Harakat are temporary marks — once you master reading with them, you'll eventually read without them. The Quran always has harakat to protect the exact recitation.
      </div>

      <div style={{ textAlign: "center" }}>
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate("fatha")}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 900, fontSize: ".95rem", padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer" }}>
          ➡️ Start with Fatha
        </motion.button>
      </div>
    </div>
  );
}
