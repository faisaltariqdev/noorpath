"use client";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import type { ScreenId } from "@/data/learning/types";

interface Props { onNavigate: (id: ScreenId) => void; done: Set<number>; }

export default function AlphabetChartScreen({ onNavigate, done }: Props) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <div style={{ borderRadius: 16, padding: "28px 24px", marginBottom: 24, background: "linear-gradient(135deg,#0D3D1E,#1B6B3A)", color: "#fff" }}>
        <div style={{ display: "inline-block", background: "rgba(255,215,0,.18)", color: "#FFD700", fontSize: ".65rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", padding: "3px 12px", borderRadius: 50, marginBottom: 8 }}>Reference</div>
        <h1 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 900, margin: 0 }}>The Arabic Alphabet — All 28 Letters</h1>
        <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".88rem", margin: "6px 0 0" }}>Click any letter to jump to its full lesson!</p>
      </div>

      <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,.07)", padding: 18, marginBottom: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(80px,1fr))", gap: 8 }}>
          {LETTERS.map((lt, i) => {
            const gc = COLOR_GROUPS[lt.colorGroup];
            return (
              <motion.button
                key={lt.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.025 }}
                whileHover={{ scale: 1.08, y: -3, boxShadow: `0 6px 18px ${gc.bg}44` }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(`letter-${lt.id}` as ScreenId)}
                style={{
                  borderRadius: 12, padding: "12px 6px", textAlign: "center",
                  background: gc.bg, color: "#fff",
                  border: "none", cursor: "pointer",
                  position: "relative",
                }}
              >
                <span style={{ fontFamily: "'Amiri', serif", fontSize: "2rem", display: "block" }}>{lt.letter}</span>
                <span style={{ fontSize: ".62rem", fontWeight: 700, marginTop: 3, display: "block", opacity: .92 }}>{lt.name}</span>
                {done.has(lt.id) && (
                  <span style={{ position: "absolute", top: 4, right: 6, fontSize: ".75rem" }}>✓</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12, marginBottom: 20 }}>
        {["Arabic is written from right to left — the opposite of English!","Arabic has 28 letters — all are consonants.","The Quran was revealed in Arabic — learning it is an act of worship!"].map((tip, i) => (
          <div key={i} style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 10px 10px 0", padding: "10px 14px", fontSize: ".84rem" }}>💡 {tip}</div>
        ))}
      </div>
    </div>
  );
}
