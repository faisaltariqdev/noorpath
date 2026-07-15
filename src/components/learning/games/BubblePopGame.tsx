"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props {
  targetLetterId?: number;
  onComplete?: (stars: number) => void;
}

interface Bubble {
  id: number;
  letter: typeof LETTERS[0];
  x: number;
  y: number;
  size: number;
  speed: number;
  popped: boolean;
}

let bId = 0;

const BUBBLE_COLORS = ["#1B6B3A", "#C62828", "#1565C0", "#6A1B9A", "#E65100", "#00695C"];

function makeBubble(targetId?: number): Bubble {
  const isTarget = Math.random() < 0.45 && targetId !== undefined;
  const letter = isTarget
    ? LETTERS.find((l) => l.id === targetId) ?? LETTERS[Math.floor(Math.random() * LETTERS.length)]
    : LETTERS.filter((l) => l.id !== targetId)[Math.floor(Math.random() * (LETTERS.length - 1))];
  return {
    id: ++bId,
    letter: letter ?? LETTERS[0],
    x: 5 + Math.random() * 85,
    y: 105,
    size: 55 + Math.random() * 30,
    speed: 3 + Math.random() * 2.5,
    popped: false,
  };
}

export default function BubblePopGame({ targetLetterId, onComplete }: Props) {
  const targetLetter = LETTERS.find((l) => l.id === (targetLetterId ?? 1)) ?? LETTERS[0];
  const gc = COLOR_GROUPS[targetLetter.colorGroup];
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const moveRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const TARGET_SCORE = 5;
  const MAX_MISSES = 3;

  const stopGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (moveRef.current) clearInterval(moveRef.current);
    setGameOver(true);
    setStarted(false);
  }, []);

  const startGame = useCallback(() => {
    setBubbles([]);
    setScore(0);
    setMisses(0);
    setGameOver(false);
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started) return;
    // Spawn bubbles
    timerRef.current = setInterval(() => {
      setBubbles((prev) => [...prev.filter((b) => !b.popped && b.y > -20), makeBubble(targetLetterId)]);
    }, 1200);
    // Move bubbles up
    moveRef.current = setInterval(() => {
      setBubbles((prev) => prev.map((b) => {
        const newY = b.y - b.speed * 0.6;
        if (newY < -10) { return { ...b, y: newY, popped: true }; }
        return { ...b, y: newY };
      }).filter((b) => b.y > -15));
    }, 50);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (moveRef.current) clearInterval(moveRef.current);
    };
  }, [started, targetLetterId]);

  const popBubble = useCallback((bubble: Bubble) => {
    if (bubble.popped) return;
    setBubbles((prev) => prev.map((b) => b.id === bubble.id ? { ...b, popped: true } : b));
    if (bubble.letter.id === (targetLetterId ?? 1)) {
      setScore((s) => {
        const ns = s + 1;
        if (ns >= TARGET_SCORE) {
          stopGame();
          confetti({ particleCount: 60, spread: 80, colors: ["#FFD700", gc.bg] });
          onComplete?.(5);
        }
        return ns;
      });
    } else {
      setMisses((m) => {
        const nm = m + 1;
        if (nm >= MAX_MISSES) stopGame();
        return nm;
      });
    }
  }, [targetLetterId, stopGame, onComplete, gc.bg]);

  return (
    <div style={{ padding: "12px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <div style={{ color: "#FFD700", fontWeight: 900, fontSize: "1rem", marginBottom: 6 }}>
          🫧 Pop only the bubbles with:&nbsp;
          <span style={{ fontFamily: "'Amiri',serif", fontSize: "1.6rem", color: gc.text }}>{targetLetter.letter}</span>
          &nbsp;({targetLetter.name})
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <span style={{ color: "#4CAF50", fontWeight: 800, fontSize: ".82rem" }}>✅ {score}/{TARGET_SCORE}</span>
          <span style={{ color: "#EF5350", fontWeight: 800, fontSize: ".82rem" }}>❌ {misses}/{MAX_MISSES}</span>
        </div>
      </div>

      {!started && !gameOver && (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <motion.button
            whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
            onClick={startGame}
            style={{ background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#FFD700", border: "2px solid rgba(255,215,0,.4)", borderRadius: 50, padding: "12px 28px", fontWeight: 900, cursor: "pointer", fontSize: ".95rem" }}
          >
            Start Game 🫧
          </motion.button>
        </div>
      )}

      {gameOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", padding: "16px 0" }}>
          <div style={{ color: score >= TARGET_SCORE ? "#FFD700" : "#FF6B6B", fontWeight: 900, fontSize: "1.2rem", marginBottom: 10 }}>
            {score >= TARGET_SCORE ? "🎉 Amazing! You did it!" : "Good try! Keep practicing!"}
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={startGame}
            style={{ background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", border: "none", borderRadius: 50, padding: "10px 24px", fontWeight: 900, cursor: "pointer", fontSize: ".88rem" }}
          >
            Play Again 🔄
          </motion.button>
        </motion.div>
      )}

      {/* Game area */}
      {started && (
        <div style={{ position: "relative", height: 260, overflow: "hidden", borderRadius: 16, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)" }}>
          <AnimatePresence>
            {bubbles.filter((b) => !b.popped).map((bubble) => {
              const blc = COLOR_GROUPS[bubble.letter.colorGroup];
              const isTarget = bubble.letter.id === (targetLetterId ?? 1);
              return (
                <motion.div
                  key={bubble.id}
                  onClick={() => popBubble(bubble)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  style={{
                    position: "absolute",
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    width: bubble.size, height: bubble.size, borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 35%, ${blc.light}, ${blc.bg})`,
                    border: `3px solid ${isTarget ? "#FFD700" : "rgba(255,255,255,.3)"}`,
                    boxShadow: isTarget ? `0 0 16px rgba(255,215,0,.5)` : `0 4px 12px rgba(0,0,0,.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", userSelect: "none",
                    transition: "top 0.05s linear",
                  }}
                >
                  <span style={{ fontFamily: "'Amiri',serif", fontSize: bubble.size * 0.38, color: isTarget ? "#FFD700" : "#fff" }}>
                    {bubble.letter.letter}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
