"use client";
import { useState, useCallback } from "react";

const pairs = [
  { id: 1, arabic: "ا", english: "Alif" },
  { id: 2, arabic: "ب", english: "Ba" },
  { id: 3, arabic: "ت", english: "Ta" },
  { id: 4, arabic: "ث", english: "Tha" },
  { id: 5, arabic: "ج", english: "Jeem" },
  { id: 6, arabic: "ح", english: "Ha" },
];

interface Card {
  id: string;
  pairId: number;
  content: string;
  type: "arabic" | "english";
  matched: boolean;
  selected: boolean;
}

function makeCards(): Card[] {
  const cards: Card[] = [];
  pairs.forEach((p) => {
    cards.push({ id: `a-${p.id}`, pairId: p.id, content: p.arabic, type: "arabic", matched: false, selected: false });
    cards.push({ id: `e-${p.id}`, pairId: p.id, content: p.english, type: "english", matched: false, selected: false });
  });
  return cards.sort(() => Math.random() - 0.5);
}

interface Props {
  onComplete: (score: number) => void;
}

export default function LetterMatchGame({ onComplete }: Props) {
  const [cards, setCards] = useState<Card[]>(() => makeCards());
  const [selected, setSelected] = useState<Card | null>(null);
  const [matched, setMatched] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [done, setDone] = useState(false);
  const [wrongFlash, setWrongFlash] = useState<string[]>([]);

  const reset = useCallback(() => {
    setCards(makeCards());
    setSelected(null);
    setMatched(0);
    setMistakes(0);
    setDone(false);
    setWrongFlash([]);
  }, []);

  function handleSelect(card: Card) {
    if (card.matched || card.selected || done) return;

    if (!selected) {
      setCards((prev) => prev.map((c) => c.id === card.id ? { ...c, selected: true } : c));
      setSelected(card);
      return;
    }

    if (selected.id === card.id) return;

    if (selected.pairId === card.pairId) {
      // Match!
      const newMatched = matched + 1;
      setCards((prev) =>
        prev.map((c) =>
          c.id === card.id || c.id === selected.id
            ? { ...c, matched: true, selected: false }
            : c
        )
      );
      setSelected(null);
      setMatched(newMatched);
      if (newMatched === pairs.length) {
        setDone(true);
        const score = Math.max(0, 100 - mistakes * 10);
        setTimeout(() => onComplete(score), 500);
      }
    } else {
      // Wrong
      setMistakes((m) => m + 1);
      const ids = [selected.id, card.id];
      setWrongFlash(ids);
      setCards((prev) =>
        prev.map((c) => ids.includes(c.id) ? { ...c, selected: false } : c)
      );
      setSelected(null);
      setTimeout(() => setWrongFlash([]), 500);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
        <span style={{ fontSize: ".82rem", color: "#6b7280", fontWeight: 600 }}>{matched}/{pairs.length} matched</span>
        <span style={{ fontSize: ".82rem", color: mistakes > 0 ? "#ef4444" : "#6b7280", fontWeight: 600 }}>
          {mistakes > 0 ? `${mistakes} mistake${mistakes > 1 ? "s" : ""}` : "No mistakes yet!"}
        </span>
      </div>

      <p style={{ fontSize: ".82rem", color: "#6b7280", textAlign: "center", marginBottom: 12 }}>
        Tap a letter, then its name to make a pair
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {cards.map((card) => {
          const isWrong = wrongFlash.includes(card.id);
          let bg = "#fff";
          let border = "2px solid #e5e7eb";
          let textColor = "#374151";
          if (card.matched) { bg = "#dcfce7"; border = "2px solid #22c55e"; textColor = "#15803d"; }
          else if (isWrong) { bg = "#fee2e2"; border = "2px solid #ef4444"; }
          else if (card.selected) { bg = "#dbeafe"; border = "2px solid #3b82f6"; textColor = "#1d4ed8"; }

          return (
            <button
              key={card.id}
              onClick={() => handleSelect(card)}
              disabled={card.matched}
              style={{
                background: bg,
                border,
                borderRadius: 12,
                padding: card.type === "arabic" ? "16px 8px" : "12px 6px",
                fontSize: card.type === "arabic" ? "1.8rem" : ".78rem",
                fontFamily: card.type === "arabic" ? "var(--font-amiri, serif)" : "inherit",
                fontWeight: 700,
                color: textColor,
                cursor: card.matched ? "default" : "pointer",
                transition: "all .18s",
                textAlign: "center",
                minHeight: 68,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: isWrong ? "scale(.96)" : "scale(1)",
              }}
            >
              {card.content}
            </button>
          );
        })}
      </div>

      {done && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <div style={{ fontSize: "1.5rem" }}>🎉 All matched!</div>
          <button
            onClick={reset}
            style={{ marginTop: 10, background: "#0a6e4f", color: "#fff", border: "none", borderRadius: 24, padding: "8px 22px", fontSize: ".87rem", fontWeight: 700, cursor: "pointer" }}
          >
            Play Again
          </button>
        </div>
      )}
      {!done && (
        <div style={{ textAlign: "center", marginTop: 12 }}>
          <button
            onClick={reset}
            style={{ background: "transparent", color: "#6b7280", border: "1px solid #e5e7eb", borderRadius: 24, padding: "6px 18px", fontSize: ".8rem", cursor: "pointer" }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
