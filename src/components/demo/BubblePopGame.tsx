"use client";
import { useState, useEffect, useCallback } from "react";

interface Bubble {
  id: number;
  letter: string;
  isTarget: boolean;
  x: number;
  y: number;
  popped: boolean;
  wrong: boolean;
  speed: number;
  size: number;
  color: string;
}

const LETTERS = ["ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش"];
const COLORS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e",
  "#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4",
];
const TARGET = "ا";

function makeBubbles(): Bubble[] {
  const bubbles: Bubble[] = [];
  const targetCount = 3;
  const decoyCount = 6;

  for (let i = 0; i < targetCount; i++) {
    bubbles.push({
      id: i,
      letter: TARGET,
      isTarget: true,
      x: 10 + Math.random() * 80,
      y: 20 + Math.random() * 60,
      popped: false,
      wrong: false,
      speed: 0.3 + Math.random() * 0.4,
      size: 70 + Math.random() * 20,
      color: "#22c55e",
    });
  }

  for (let i = 0; i < decoyCount; i++) {
    bubbles.push({
      id: targetCount + i,
      letter: LETTERS[i % LETTERS.length],
      isTarget: false,
      x: 5 + Math.random() * 88,
      y: 15 + Math.random() * 70,
      popped: false,
      wrong: false,
      speed: 0.2 + Math.random() * 0.5,
      size: 64 + Math.random() * 18,
      color: COLORS[i % COLORS.length],
    });
  }

  return bubbles.sort(() => Math.random() - 0.5);
}

interface Props {
  onComplete: (score: number) => void;
}

export default function BubblePopGame({ onComplete }: Props) {
  const [bubbles, setBubbles] = useState<Bubble[]>(() => makeBubbles());
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const poppedTargets = bubbles.filter((b) => b.isTarget && b.popped).length;
  const totalTargets = bubbles.filter((b) => b.isTarget).length;

  const reset = useCallback(() => {
    setBubbles(makeBubbles());
    setScore(0);
    setMistakes(0);
    setDone(false);
    setTimeLeft(30);
  }, []);

  /* floating animation */
  useEffect(() => {
    if (done) return;
    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev.map((b) => ({
          ...b,
          y: b.popped ? b.y : (b.y - b.speed + 100) % 100,
        }))
      );
    }, 80);
    return () => clearInterval(interval);
  }, [done]);

  /* countdown timer */
  useEffect(() => {
    if (done) return;
    if (timeLeft <= 0) {
      const t = setTimeout(() => {
        setDone(true);
        onComplete(score);
      }, 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, done, score, onComplete]);

  function handlePop(bubble: Bubble) {
    if (bubble.popped || done) return;

    if (bubble.isTarget) {
      const newScore = score + 10;
      setBubbles((prev) =>
        prev.map((b) => (b.id === bubble.id ? { ...b, popped: true } : b))
      );
      setScore(newScore);

      const updatedPopped = poppedTargets + 1;
      if (updatedPopped === totalTargets) {
        setDone(true);
        setTimeout(() => onComplete(newScore), 600);
      }
    } else {
      setMistakes((m) => m + 1);
      setBubbles((prev) =>
        prev.map((b) => (b.id === bubble.id ? { ...b, wrong: true } : b))
      );
      setTimeout(() => {
        setBubbles((prev) =>
          prev.map((b) => (b.id === bubble.id ? { ...b, wrong: false } : b))
        );
      }, 600);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, padding: "0 4px" }}>
        <div style={{ background: "#dcfce7", borderRadius: 24, padding: "6px 14px", fontSize: ".85rem", fontWeight: 700, color: "#15803d" }}>
          ⭐ {score} pts
        </div>
        <div style={{ fontSize: ".9rem", fontWeight: 700, color: timeLeft <= 10 ? "#ef4444" : "#374151" }}>
          ⏱ {timeLeft}s
        </div>
        <div style={{ background: mistakes > 0 ? "#fee2e2" : "#f3f4f6", borderRadius: 24, padding: "6px 14px", fontSize: ".85rem", fontWeight: 700, color: mistakes > 0 ? "#dc2626" : "#6b7280" }}>
          {mistakes > 0 ? `❌ ${mistakes}` : "No mistakes!"}
        </div>
      </div>

      <div style={{ background: "linear-gradient(180deg,#e0f2fe,#dbeafe)", borderRadius: 20, position: "relative", height: 340, overflow: "hidden", border: "2px solid #bfdbfe" }}>
        {/* Instruction */}
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,.85)", borderRadius: 20, padding: "4px 16px", fontSize: ".8rem", fontWeight: 700, color: "#1e40af", whiteSpace: "nowrap", zIndex: 10 }}>
          Pop all <span style={{ color: "#15803d", fontSize: "1.1rem", fontFamily: "var(--font-amiri, serif)" }}>ا</span> (Alif) bubbles!
        </div>

        {bubbles.map((bubble) =>
          bubble.popped ? null : (
            <button
              key={bubble.id}
              onClick={() => handlePop(bubble)}
              style={{
                position: "absolute",
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: bubble.size,
                height: bubble.size,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                border: `3px solid ${bubble.isTarget ? "#16a34a" : bubble.color}`,
                background: bubble.wrong
                  ? "radial-gradient(circle at 35% 35%, #fca5a5, #ef4444)"
                  : bubble.isTarget
                  ? "radial-gradient(circle at 35% 35%, #bbf7d0, #22c55e)"
                  : `radial-gradient(circle at 35% 35%, ${bubble.color}44, ${bubble.color})`,
                color: "#fff",
                fontSize: bubble.size * 0.42,
                fontFamily: "var(--font-amiri, serif)",
                fontWeight: 700,
                cursor: "pointer",
                transition: "transform .15s",
                boxShadow: `0 4px 14px ${bubble.isTarget ? "#22c55e55" : bubble.color + "44"}`,
                zIndex: 5,
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: bubble.wrong ? "shake .3s ease" : undefined,
              }}
            >
              {bubble.letter}
            </button>
          )
        )}

        {done && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.92)", borderRadius: 18 }}>
            <div style={{ fontSize: "3rem" }}>🎉</div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#15803d", margin: "8px 0 4px" }}>
              {poppedTargets === totalTargets ? "Brilliant!" : "Time's up!"}
            </div>
            <div style={{ color: "#374151", fontSize: ".95rem" }}>You scored <strong>{score} points</strong></div>
            {mistakes === 0 && <div style={{ color: "#15803d", fontWeight: 700, fontSize: ".85rem", marginTop: 4 }}>🏆 Perfect — no mistakes!</div>}
          </div>
        )}
      </div>

      <button
        onClick={reset}
        style={{ marginTop: 12, background: "#0a6e4f", color: "#fff", border: "none", borderRadius: 24, padding: "8px 22px", fontSize: ".87rem", fontWeight: 700, cursor: "pointer" }}
      >
        Play Again
      </button>
    </div>
  );
}
