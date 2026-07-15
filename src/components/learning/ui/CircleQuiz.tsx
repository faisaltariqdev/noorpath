"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Letter } from "@/data/learning/types";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props {
  target: Letter;
  distractors: Letter[];
}

export default function CircleQuiz({ target, distractors }: Props) {
  const [results, setResults] = useState<Record<number, "right" | "wrong">>({});

  // Build shuffled options: 2 correct, 2 wrong
  const options = [
    { letter: target, correct: true, key: 0 },
    { letter: distractors[0], correct: false, key: 1 },
    { letter: distractors[1], correct: false, key: 2 },
    { letter: target, correct: true, key: 3 },
  ].sort(() => Math.random() - 0.5);

  function handleClick(key: number, correct: boolean) {
    setResults((prev) => ({ ...prev, [key]: correct ? "right" : "wrong" }));
  }

  const gc = COLOR_GROUPS[target.colorGroup];

  return (
    <div>
      <p style={{ fontSize: ".82rem", marginBottom: 10, color: "#555" }}>
        Which one is <strong style={{ color: gc.text }}>{target.name}</strong>? Tap to select!
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {options.map(({ letter, correct, key }) => {
          const res = results[key];
          return (
            <motion.button
              key={key}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => !res && handleClick(key, correct)}
              style={{
                width: 66, height: 66,
                border: `3px solid ${res === "right" ? "#2E7D32" : res === "wrong" ? "#C62828" : "#E0E0E0"}`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Amiri', serif", fontSize: "1.9rem",
                background: res === "right" ? "#E8F5E9" : res === "wrong" ? "#FFEBEE" : "#fff",
                cursor: res ? "default" : "pointer",
                transition: "background .2s, border-color .2s",
              }}
            >
              {letter.letter}
              <AnimatePresence>
                {res && (
                  <motion.span
                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                    style={{ position: "absolute", top: -6, right: -6, fontSize: ".85rem" }}
                  >
                    {res === "right" ? "✅" : "❌"}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
