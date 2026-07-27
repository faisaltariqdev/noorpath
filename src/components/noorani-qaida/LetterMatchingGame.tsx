"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { QAIDA_LETTERS } from "@/data/noorani-qaida";

function pickRound(seed: number) {
  const target = QAIDA_LETTERS[seed % QAIDA_LETTERS.length];
  const others = QAIDA_LETTERS.filter((letter) => letter.slug !== target.slug);
  const distractors = [0, 1, 2].map((offset) => others[(seed + offset * 7) % others.length]);
  const choices = [target, ...distractors].sort((a, b) => {
    const aRank = (a.id * 17 + seed) % 11;
    const bRank = (b.id * 17 + seed) % 11;
    return aRank - bRank;
  });
  return { target, choices };
}

export default function LetterMatchingGame() {
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const { target, choices } = useMemo(() => pickRound(round + 3), [round]);
  const isCorrect = selected === target.slug;

  function choose(slug: string) {
    if (selected) return;
    setSelected(slug);
    if (slug === target.slug) setScore((value) => value + 1);
  }

  function next() {
    setSelected(null);
    setRound((value) => value + 1);
  }

  return (
    <div className="qaida-game-board">
      <div className="qaida-mini-game-prompt">
        <p>
          Which name matches this letter? Score: <strong>{score}</strong>
        </p>
        <span className="arabic" lang="ar" dir="rtl">
          {target.arabic}
        </span>
      </div>
      <div className="qaida-game-choices" role="group" aria-label="Choose the matching letter name">
        {choices.map((choice) => {
          const state =
            selected == null
              ? "idle"
              : choice.slug === target.slug
                ? "correct"
                : choice.slug === selected
                  ? "wrong"
                  : "idle";
          return (
            <button
              key={`${choice.slug}-${round}`}
              type="button"
              className={`qaida-game-choice qaida-game-choice--${state}`}
              onClick={() => choose(choice.slug)}
              disabled={Boolean(selected)}
            >
              <span className="arabic" lang="ar" dir="rtl" aria-hidden="true">
                {choice.arabic}
              </span>
              <small dir="ltr">{choice.name}</small>
            </button>
          );
        })}
      </div>
      {selected && (
        <div className="qaida-game-feedback">
          <p>
            {isCorrect ? (
              <>
                <CheckCircle2 size={18} aria-hidden="true" /> Yes — that is {target.name}.
              </>
            ) : (
              <>The matching name is {target.name}.</>
            )}
          </p>
          <button type="button" className="btn-outline-np" onClick={next}>
            <RotateCcw size={15} aria-hidden="true" /> Next letter
          </button>
        </div>
      )}
    </div>
  );
}
