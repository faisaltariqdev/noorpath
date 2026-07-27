"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

const HARAKAT = [
  {
    id: "fatha",
    label: "Fatha",
    arabicMark: "َ",
    sample: "بَ",
    cue: "Short a sound — mark above",
    lessonHref: "/noorani-qaida/lessons/fatha",
  },
  {
    id: "kasra",
    label: "Kasra",
    arabicMark: "ِ",
    sample: "بِ",
    cue: "Short i sound — mark below",
    lessonHref: "/noorani-qaida/lessons/kasra",
  },
  {
    id: "damma",
    label: "Damma",
    arabicMark: "ُ",
    sample: "بُ",
    cue: "Short u sound — curl above",
    lessonHref: "/noorani-qaida/lessons/damma",
  },
] as const;

function pickRound(seed: number) {
  const target = HARAKAT[seed % HARAKAT.length];
  const choices = [...HARAKAT].sort((a, b) => {
    const aRank = (a.id.charCodeAt(0) + seed) % 5;
    const bRank = (b.id.charCodeAt(0) + seed) % 5;
    return aRank - bRank;
  });
  return { target, choices };
}

export default function HarakatQuizGame() {
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const { target, choices } = useMemo(() => pickRound(round + 1), [round]);
  const isCorrect = selected === target.id;

  function choose(id: string) {
    if (selected) return;
    setSelected(id);
    if (id === target.id) setScore((value) => value + 1);
  }

  function next() {
    setSelected(null);
    setRound((value) => value + 1);
  }

  return (
    <div className="qaida-game-board">
      <div className="qaida-mini-game-prompt">
        <p>
          What vowel mark is on this letter? Score: <strong>{score}</strong>
        </p>
        <span className="arabic" lang="ar" dir="rtl">
          {target.sample}
        </span>
      </div>
      <div className="qaida-game-choices" role="group" aria-label="Choose the matching harakah">
        {choices.map((choice) => {
          const state =
            selected == null
              ? "idle"
              : choice.id === target.id
                ? "correct"
                : choice.id === selected
                  ? "wrong"
                  : "idle";
          return (
            <button
              key={`${choice.id}-${round}`}
              type="button"
              className={`qaida-game-choice qaida-game-choice--${state}`}
              onClick={() => choose(choice.id)}
              disabled={Boolean(selected)}
            >
              <span className="arabic" lang="ar" dir="rtl">
                ب{choice.arabicMark}
              </span>
              <strong dir="ltr">{choice.label}</strong>
              <small dir="ltr">{choice.cue}</small>
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="qaida-game-feedback">
          <p>
            {isCorrect ? (
              <>
                <CheckCircle2 size={18} aria-hidden="true" /> Correct — {target.label}.
              </>
            ) : (
              <>That mark is {target.label}. {target.cue}.</>
            )}
          </p>
          <a href={target.lessonHref} className="btn-outline-np">
            Open {target.label} lesson
          </a>
          <button type="button" className="btn-outline-np" onClick={next}>
            <RotateCcw size={15} aria-hidden="true" /> Next round
          </button>
        </div>
      )}
    </div>
  );
}
