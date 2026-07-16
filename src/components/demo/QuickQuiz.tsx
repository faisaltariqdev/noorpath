"use client";
import { useState } from "react";

const questions = [
  {
    q: "Which letter is Alif?",
    options: ["ا", "ب", "ت", "ث"],
    answer: 0,
    type: "arabic",
  },
  {
    q: "What sound does Alif make?",
    options: ["a (as in apple)", "b (as in ball)", "t (as in tall)", "th (as in the)"],
    answer: 0,
    type: "text",
  },
  {
    q: "How many forms does Alif have?",
    options: ["4 forms", "2 forms", "3 forms", "1 form"],
    answer: 0,
    type: "text",
  },
  {
    q: "Where is the Alif sound made?",
    options: ["Throat and chest", "Between the teeth", "At the lips", "At the nose"],
    answer: 0,
    type: "text",
  },
  {
    q: "Which word starts with Alif (ا)?",
    options: ["أَسَد (lion)", "بَيْت (house)", "تُفَّاح (apple)", "ذَهَب (gold)"],
    answer: 0,
    type: "text",
  },
];

interface Props {
  onComplete: (score: number) => void;
}

export default function QuickQuiz({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === q.answer;
    if (isCorrect) setCorrect((c) => c + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setDone(true);
        onComplete((isCorrect ? correct + 1 : correct) * 20);
      }
    }, 900);
  }

  if (done) {
    const finalScore = correct + (selected === q.answer ? 1 : 0);
    const total = questions.length;
    return (
      <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>
          {finalScore === total ? "🏆" : finalScore >= 3 ? "⭐" : "📚"}
        </div>
        <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#15803d" }}>
          {finalScore}/{total} correct!
        </div>
        <p style={{ color: "#374151", marginTop: 8, fontSize: ".95rem" }}>
          {finalScore === total
            ? "Perfect score! You know Alif well."
            : finalScore >= 3
            ? "Great job! Keep practising Alif."
            : "Good start! Review the lesson and try again."}
        </p>
        <button
          onClick={() => { setCurrent(0); setSelected(null); setCorrect(0); setDone(false); }}
          style={{ marginTop: 16, background: "#0a6e4f", color: "#fff", border: "none", borderRadius: 24, padding: "8px 22px", fontSize: ".87rem", fontWeight: 700, cursor: "pointer" }}
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontSize: ".8rem", color: "#6b7280", fontWeight: 600 }}>
          Question {current + 1} of {questions.length}
        </span>
        <div style={{ display: "flex", gap: 4 }}>
          {questions.map((_, i) => (
            <div key={i} style={{ width: 22, height: 6, borderRadius: 3, background: i < current ? "#22c55e" : i === current ? "#0a6e4f" : "#e5e7eb" }} />
          ))}
        </div>
      </div>

      <div style={{ background: "#f9fafb", borderRadius: 16, padding: "1.2rem", marginBottom: 14, textAlign: "center" }}>
        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", margin: 0 }}>{q.q}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {q.options.map((opt, idx) => {
          let bg = "#fff";
          let border = "2px solid #e5e7eb";
          let color = "#374151";
          if (selected !== null) {
            if (idx === q.answer) { bg = "#dcfce7"; border = "2px solid #22c55e"; color = "#15803d"; }
            else if (idx === selected && selected !== q.answer) { bg = "#fee2e2"; border = "2px solid #ef4444"; color = "#dc2626"; }
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                background: bg,
                border,
                borderRadius: 12,
                padding: "12px 10px",
                fontSize: q.type === "arabic" ? "1.8rem" : ".88rem",
                fontFamily: q.type === "arabic" ? "var(--font-amiri, serif)" : "inherit",
                fontWeight: q.type === "arabic" ? 700 : 600,
                color,
                cursor: selected !== null ? "default" : "pointer",
                transition: "all .2s",
                lineHeight: 1.3,
                textAlign: "center",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
