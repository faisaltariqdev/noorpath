"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props {
  onComplete?: (stars: number) => void;
}

interface Card {
  id: number;
  letterId: number;
  face: string;
  isName: boolean;
  matched: boolean;
  flipped: boolean;
}

function buildDeck(count = 5): Card[] {
  const pool = LETTERS.slice(0, 10);
  const selected = pool.sort(() => Math.random() - 0.5).slice(0, count);
  const cards: Card[] = [];
  selected.forEach((l, i) => {
    cards.push({ id: i * 2, letterId: l.id, face: l.letter, isName: false, matched: false, flipped: false });
    cards.push({ id: i * 2 + 1, letterId: l.id, face: l.name, isName: true, matched: false, flipped: false });
  });
  return cards.sort(() => Math.random() - 0.5);
}

export default function MemoryGame({ onComplete }: Props) {
  const [cards, setCards] = useState<Card[]>(() => buildDeck(5));
  const [selected, setSelected] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);
  const [done, setDone] = useState(false);
  const [wrongPair, setWrongPair] = useState<number[]>([]);
  const total = 5;

  useEffect(() => {
    if (selected.length === 2) {
      setAttempts((a) => a + 1);
      const [a, b] = selected;
      const cardA = cards[a];
      const cardB = cards[b];
      if (cardA.letterId === cardB.letterId && cardA.isName !== cardB.isName) {
        // Match!
        setTimeout(() => {
          setCards((prev) => prev.map((c, i) => (i === a || i === b) ? { ...c, matched: true } : c));
          setMatches((m) => {
            const next = m + 1;
            if (next === total) {
              setDone(true);
              confetti({ particleCount: 80, spread: 90, colors: ["#FFD700", "#1B6B3A", "#fff"] });
              const stars = attempts <= total + 2 ? 5 : attempts <= total + 5 ? 3 : 2;
              onComplete?.(stars);
            }
            return next;
          });
          setSelected([]);
        }, 500);
      } else {
        setWrongPair([a, b]);
        setTimeout(() => {
          setCards((prev) => prev.map((c, i) => (i === a || i === b) ? { ...c, flipped: false } : c));
          setSelected([]);
          setWrongPair([]);
        }, 900);
      }
    }
  }, [selected, cards, attempts, total, onComplete]);

  const flip = useCallback((i: number) => {
    if (selected.length === 2) return;
    if (cards[i].flipped || cards[i].matched) return;
    if (selected.includes(i)) return;
    setCards((prev) => prev.map((c, idx) => idx === i ? { ...c, flipped: true } : c));
    setSelected((s) => [...s, i]);
  }, [cards, selected]);

  const reset = () => {
    setCards(buildDeck(5));
    setSelected([]);
    setAttempts(0);
    setMatches(0);
    setDone(false);
    setWrongPair([]);
  };

  return (
    <div style={{ padding: "16px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
        <div style={{ color: "#FFD700", fontWeight: 800, fontSize: ".88rem" }}>🃏 Match the letter to its name!</div>
        <div style={{ display: "flex", gap: 12 }}>
          <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".78rem" }}>✅ {matches}/{total}</span>
          <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".78rem" }}>🎯 {attempts} tries</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 10 }}>
        {cards.map((card, i) => {
          const letter = LETTERS.find((l) => l.id === card.letterId)!;
          const gc = COLOR_GROUPS[letter.colorGroup];
          const isWrong = wrongPair.includes(i);

          return (
            <motion.div
              key={card.id}
              onClick={() => flip(i)}
              whileHover={!card.flipped && !card.matched ? { scale: 1.06 } : {}}
              whileTap={!card.flipped && !card.matched ? { scale: 0.94 } : {}}
              animate={isWrong ? { x: [-5, 5, -5, 5, 0] } : card.matched ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.3 }}
              style={{
                height: 90, borderRadius: 14, cursor: card.flipped || card.matched ? "default" : "pointer",
                position: "relative", transformStyle: "preserve-3d",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: card.matched
                  ? `linear-gradient(135deg,${gc.light},${gc.light}cc)`
                  : card.flipped
                    ? "linear-gradient(135deg,#1B6B3A,#0D3D1E)"
                    : "linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.04))",
                border: card.matched
                  ? `2px solid ${gc.bg}55`
                  : card.flipped
                    ? "2px solid rgba(255,215,0,.4)"
                    : "2px solid rgba(255,255,255,.12)",
                boxShadow: card.matched ? `0 4px 16px ${gc.bg}44` : "0 2px 8px rgba(0,0,0,.2)",
              }}
            >
              <AnimatePresence mode="wait">
                {card.matched || card.flipped ? (
                  <motion.div
                    key="face"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ textAlign: "center" }}
                  >
                    {card.isName
                      ? <span style={{ color: card.matched ? gc.text : "#fff", fontWeight: 800, fontSize: ".8rem" }}>{card.face}</span>
                      : <span style={{ fontFamily: "'Amiri',serif", fontSize: "2rem", color: card.matched ? gc.text : "#FFD700" }}>{card.face}</span>
                    }
                  </motion.div>
                ) : (
                  <motion.div key="back" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span style={{ fontSize: "1.6rem", opacity: 0.3 }}>❓</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginTop: 20 }}
        >
          <div style={{ color: "#FFD700", fontWeight: 900, fontSize: "1.3rem", marginBottom: 8 }}>🎉 Excellent! You matched all letters!</div>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={reset}
            style={{ background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", border: "none", borderRadius: 50, padding: "10px 26px", fontWeight: 900, cursor: "pointer", fontSize: ".9rem" }}
          >
            Play Again 🔄
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
