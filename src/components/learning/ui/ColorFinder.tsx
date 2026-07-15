"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  targetLetter: string;
  targetName: string;
  pool: { letter: string; isTarget: boolean }[];
}

export default function ColorFinder({ targetLetter, targetName, pool }: Props) {
  const [colored, setColored] = useState<Record<number, "right" | "wrong">>({});

  function handleTap(idx: number, isTarget: boolean) {
    setColored((prev) => ({ ...prev, [idx]: isTarget ? "right" : "wrong" }));
  }

  return (
    <div>
      <p style={{ fontSize: ".82rem", marginBottom: 10, color: "#555" }}>
        Colour all the <strong style={{ fontFamily: "'Amiri', serif", fontSize: "1.3rem" }}>{targetLetter}</strong> ({targetName}) letters!
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {pool.map(({ letter, isTarget }, idx) => {
          const res = colored[idx];
          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => !res && handleTap(idx, isTarget)}
              style={{
                fontFamily: "'Amiri', serif", fontSize: "1.8rem",
                width: 52, height: 52,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `2px ${res ? "solid" : "dashed"} ${res === "right" ? "#2E7D32" : res === "wrong" ? "#C62828" : "#E0E0E0"}`,
                borderRadius: 8,
                background: res === "right" ? "#D4EDDA" : res === "wrong" ? "#FFEBEE" : "#fff",
                cursor: res ? "default" : "pointer",
                transition: "all .2s",
              }}
            >
              {letter}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
