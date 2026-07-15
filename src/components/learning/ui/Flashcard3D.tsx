"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Letter } from "@/data/learning/types";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props { letter: Letter; size?: number; }

export default function Flashcard3D({ letter, size = 220 }: Props) {
  const [flipped, setFlipped] = useState(false);
  const gc = COLOR_GROUPS[letter.colorGroup];

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: 800, width: size, height: size, cursor: "pointer", margin: "0 auto" }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", borderRadius: 20,
          background: `linear-gradient(135deg, ${gc.bg}dd, ${gc.bg})`,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 20, boxShadow: "0 8px 32px rgba(0,0,0,.18)",
        }}>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: "6rem", lineHeight: 1, color: "#fff" }}>{letter.letter}</div>
          <div style={{ fontSize: ".75rem", marginTop: 8, color: "rgba(255,255,255,.75)", textAlign: "center" }}>Tap to reveal</div>
        </div>

        {/* Back */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden", borderRadius: 20,
          background: "#fff", border: `3px solid ${gc.bg}`,
          transform: "rotateY(180deg)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          padding: 20, boxShadow: "0 8px 32px rgba(0,0,0,.12)",
        }}>
          <div style={{ fontSize: "1.6rem", fontWeight: 900, color: gc.text }}>{letter.name}</div>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.1rem", color: `${gc.text}99`, margin: "3px 0" }}>{letter.arabicName}</div>
          <div style={{ fontSize: "1rem", color: `${gc.text}88`, fontWeight: 700 }}>Sound: &ldquo;{letter.sound}&rdquo;</div>
          <div style={{ fontSize: "2rem", marginTop: 6 }}>{letter.emoji}</div>
          <div style={{ fontSize: ".75rem", color: "#aaa", marginTop: 6 }}>Tap to flip back</div>
        </div>
      </motion.div>
    </div>
  );
}
