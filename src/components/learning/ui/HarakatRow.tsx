"use client";
import { motion } from "framer-motion";
import type { Letter } from "@/data/learning/types";

interface Props { letter: Letter; }

const MARKS = [
  { suffix: "\u064E", label: "a", bg: "#FFEBEE", color: "#C62828" },
  { suffix: "\u0650", label: "i", bg: "#E8EAF6", color: "#1A237E" },
  { suffix: "\u064F", label: "u", bg: "#E8F5E9", color: "#1B5E20" },
  { suffix: "\u0652", label: "sukoon", bg: "#E0F2F1", color: "#004D40" },
];

export default function HarakatRow({ letter }: Props) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", margin: "12px 0" }}>
      {MARKS.map(({ suffix, label, bg, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{
            background: bg, borderRadius: 14, padding: "14px 18px",
            textAlign: "center", flex: "1 1 80px",
          }}
        >
          <span style={{ fontFamily: "'Amiri', serif", fontSize: "3rem", display: "block", color, marginBottom: 6 }}>
            {letter.letter}{suffix}
          </span>
          <div style={{ fontWeight: 800, fontSize: ".78rem", color }}>
            {letter.name}{label !== "sukoon" ? label : " (no vowel)"}
          </div>
          <div style={{ fontSize: ".68rem", color: "#666", marginTop: 2 }}>"{label}"</div>
        </motion.div>
      ))}
    </div>
  );
}
