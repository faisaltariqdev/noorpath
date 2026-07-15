"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props {
  letterId?: number;
  onComplete?: (stars: number) => void;
}

function buildRound(currentId: number) {
  const correct = LETTERS.find((l) => l.id === currentId) ?? LETTERS[0];
  const distractors = LETTERS.filter((l) => l.id !== currentId).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
  // Show either the Arabic letter or the name as prompt
  const showLetter = Math.random() > 0.5;
  return { correct, options, showLetter };
}

export default function LetterMatchGame({ letterId = 1, onComplete }: Props) {
  const ROUNDS = 5;
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [roundData] = useState(() => {
    const ids = LETTERS.slice(0, 10).sort(() => Math.random() - 0.5).slice(0, ROUNDS).map((l) => l.id);
    ids[0] = letterId; // ensure target letter appears
    return ids.map((id) => buildRound(id));
  });

  const current = roundData[round];
  const gc = current ? COLOR_GROUPS[current.correct.colorGroup] : null;

  const choose = useCallback((optLetterId: number) => {
    if (selected !== null) return;
    setSelected(optLetterId);
    const correct = optLetterId === roundData[round].correct.id;
    if (correct) {
      setScore((s) => s + 1);
      if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(30);
    }
    setTimeout(() => {
      setSelected(null);
      if (round + 1 >= ROUNDS) {
        setDone(true);
        const stars = score + (correct ? 1 : 0) >= 4 ? 5 : score + (correct ? 1 : 0) >= 2 ? 3 : 1;
        confetti({ particleCount: 60, spread: 80, colors: ["#FFD700", "#1B6B3A"] });
        onComplete?.(stars);
      } else {
        setRound((r) => r + 1);
      }
    }, 800);
  }, [selected, round, roundData, score, onComplete]);

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "24px 0" }}>
        <div style={{ fontSize: "3rem", marginBottom: 8 }}>{score >= 4 ? "🏆" : score >= 2 ? "⭐" : "💪"}</div>
        <div style={{ color: "#FFD700", fontWeight: 900, fontSize: "1.3rem", marginBottom: 6 }}>
          {score >= 4 ? "MashaAllah! Perfect!" : score >= 2 ? "Well done!" : "Keep practicing!"}
        </div>
        <div style={{ color: "rgba(255,255,255,.7)", fontSize: ".88rem", marginBottom: 16 }}>{score}/{ROUNDS} correct answers</div>
      </motion.div>
    );
  }

  if (!current || !gc) return null;

  return (
    <div style={{ padding: "12px 0" }}>
      {/* Progress */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, justifyContent: "center" }}>
        {roundData.map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: i === round ? [1, 1.15, 1] : 1 }}
            transition={{ duration: 0.5, repeat: i === round ? Infinity : 0 }}
            style={{
              width: 10, height: 10, borderRadius: "50%",
              background: i < round ? "#4CAF50" : i === round ? "#FFD700" : "rgba(255,255,255,.2)",
            }}
          />
        ))}
      </div>

      {/* Prompt */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ color: "rgba(255,255,255,.6)", fontSize: ".75rem", fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "1px" }}>
          {current.showLetter ? "Which name matches this letter?" : "Which letter matches this name?"}
        </div>
        <motion.div
          key={`${round}-prompt`}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 14 }}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg,${gc.light},${gc.light}bb)`,
            borderRadius: 20, padding: "20px 36px", minWidth: 120,
            border: `2px solid ${gc.bg}44`,
          }}
        >
          {current.showLetter
            ? <span style={{ fontFamily: "'Amiri',serif", fontSize: "4rem", color: gc.text }}>{current.correct.letter}</span>
            : <span style={{ fontWeight: 900, fontSize: "1.4rem", color: gc.text }}>{current.correct.name}</span>
          }
        </motion.div>
      </div>

      {/* Options */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, maxWidth: 360, margin: "0 auto" }}>
        {current.options.map((opt) => {
          const isCorrect = opt.id === current.correct.id;
          const isSelected = selected === opt.id;
          const optGc = COLOR_GROUPS[opt.colorGroup];
          let bgColor = "rgba(255,255,255,.06)";
          let borderColor = "rgba(255,255,255,.15)";
          if (isSelected && isCorrect) { bgColor = "rgba(76,175,80,.3)"; borderColor = "#4CAF50"; }
          else if (isSelected && !isCorrect) { bgColor = "rgba(239,83,80,.3)"; borderColor = "#EF5350"; }
          else if (selected !== null && isCorrect) { bgColor = "rgba(76,175,80,.15)"; borderColor = "#4CAF50"; }

          return (
            <motion.div
              key={opt.id}
              onClick={() => choose(opt.id)}
              whileHover={selected === null ? { scale: 1.04, y: -2 } : {}}
              whileTap={selected === null ? { scale: 0.96 } : {}}
              animate={isSelected && !isCorrect ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.3 }}
              style={{
                padding: "14px 10px", borderRadius: 16, cursor: selected !== null ? "default" : "pointer",
                background: bgColor, border: `2px solid ${borderColor}`,
                textAlign: "center", transition: "background .2s, border .2s",
              }}
            >
              {current.showLetter
                ? <div style={{ fontWeight: 800, fontSize: ".9rem", color: "#fff" }}>{opt.name}</div>
                : <div style={{ fontFamily: "'Amiri',serif", fontSize: "2.2rem", color: "#FFD700" }}>{opt.letter}</div>
              }
              <AnimatePresence>
                {isSelected && (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    style={{ fontSize: "1.4rem", marginTop: 4 }}
                  >
                    {isCorrect ? "✅" : "❌"}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 14, color: "rgba(255,255,255,.5)", fontSize: ".74rem", fontWeight: 700 }}>
        Score: {score} • Question {round + 1} of {ROUNDS}
      </div>
    </div>
  );
}
