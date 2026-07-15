"use client";
import { motion } from "framer-motion";
import type { Letter } from "@/data/learning/types";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props { letter: Letter; }

export default function LetterHero({ letter }: Props) {
  const gc = COLOR_GROUPS[letter.colorGroup];
  return (
    <div style={{
      borderRadius: 20, padding: "28px 18px", textAlign: "center",
      background: `linear-gradient(135deg, ${gc.light}, ${gc.light}cc)`,
      border: `2px solid ${gc.bg}22`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ fontSize: ".65rem", fontWeight: 800, color: `${gc.text}99`, letterSpacing: "2px", marginBottom: 4, textTransform: "uppercase" }}>
        LETTER {letter.id} OF 28
      </div>

      <motion.div
        key={letter.id}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
        style={{
          fontFamily: "'Amiri', serif",
          fontSize: "clamp(5rem, 18vw, 9rem)",
          lineHeight: 1,
          color: gc.text,
          display: "block",
          cursor: "default",
          userSelect: "none",
        }}
      >
        {letter.letter}
      </motion.div>

      <div style={{ fontWeight: 900, fontSize: "1.5rem", color: gc.text, marginTop: 4 }}>{letter.name}</div>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.1rem", color: `${gc.text}99`, margin: "3px 0" }}>{letter.arabicName}</div>
      <div style={{ fontWeight: 700, fontSize: ".88rem", color: `${gc.text}88` }}>Sound: &ldquo;<strong>{letter.sound}</strong>&rdquo;</div>
      <div style={{ fontSize: "2.4rem", marginTop: 8 }}>{letter.emoji}</div>
    </div>
  );
}
