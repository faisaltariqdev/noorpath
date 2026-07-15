"use client";
import { motion } from "framer-motion";

interface Props {
  letter: string;
  count?: number;
}

export default function TraceRow({ letter, count = 4 }: Props) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", margin: "10px 0" }}>
      {/* Example box — solid */}
      <div style={{
        width: 66, height: 66,
        border: "2.5px solid #1565C0",
        borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#fff",
        fontFamily: "'Amiri', serif",
        fontSize: "2.6rem",
        color: "#1565C0",
      }}>
        {letter}
      </div>
      <div style={{ fontSize: "1.2rem", color: "#90CAF9" }}>→</div>

      {/* Trace boxes */}
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.07 }}
          style={{
            width: 66, height: 66,
            border: "2.5px dashed #90CAF9",
            borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#fff",
            fontFamily: "'Amiri', serif",
            fontSize: "2.6rem",
            color: "#BBDEFB",
            userSelect: "none",
          }}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
}
