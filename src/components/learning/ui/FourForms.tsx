"use client";
import { motion } from "framer-motion";
import type { Letter } from "@/data/learning/types";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props { letter: Letter; }

const FORMS: { key: keyof Pick<Letter, "iso" | "ini" | "med" | "fin">; label: string }[] = [
  { key: "iso", label: "Isolated" },
  { key: "ini", label: "Initial" },
  { key: "med", label: "Medial" },
  { key: "fin", label: "Final" },
];

export default function FourForms({ letter }: Props) {
  const gc = COLOR_GROUPS[letter.colorGroup];
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E8E8E8", overflow: "hidden", marginBottom: 16 }}>
      <div style={{ background: gc.light, color: gc.text, padding: "10px 16px", fontWeight: 800, fontSize: ".82rem" }}>
        Four Forms of {letter.name}
      </div>
      <div style={{ padding: 16, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {FORMS.map(({ key, label }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            style={{
              background: gc.light,
              borderRadius: 10,
              padding: "10px 14px",
              textAlign: "center",
              minWidth: 64,
              flex: "1 1 64px",
            }}
          >
            <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.8rem", display: "block", color: gc.text }}>{letter[key]}</span>
            <span style={{ fontSize: ".6rem", fontWeight: 800, textTransform: "uppercase", color: `${gc.text}99`, marginTop: 3, display: "block" }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
