"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

type Choice = {
  slug: string;
  arabic: string;
  name: string;
};

type Props = {
  target: Choice;
  distractors: Choice[];
};

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export default function LetterFindPractice({ target, distractors }: Props) {
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);

  const choices = useMemo(() => {
    const pool = distractors.filter((item) => item.slug !== target.slug).slice(0, 3);
    return shuffle([target, ...pool]);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reshuffle only when round changes
  }, [round, target.slug, target.arabic, target.name, distractors]);

  const isCorrect = selected === target.slug;

  function handleSelect(slug: string) {
    if (selected) return;
    setSelected(slug);
    if (slug === target.slug) setStreak((value) => value + 1);
  }

  function nextRound() {
    setSelected(null);
    setRound((value) => value + 1);
  }

  return (
    <div className="qaida-mini-game" aria-live="polite">
      <div className="qaida-mini-game-prompt">
        <p>
          Find <strong>{target.name}</strong>
        </p>
        <span className="arabic" lang="ar" dir="rtl" aria-hidden="true">
          {target.arabic}
        </span>
      </div>

      <div className="qaida-mini-game-choices" role="group" aria-label={`Choose the letter ${target.name}`}>
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
              className={`qaida-mini-game-choice qaida-mini-game-choice--${state}`}
              onClick={() => handleSelect(choice.slug)}
              disabled={Boolean(selected)}
              aria-label={`Letter ${choice.name}`}
            >
              <span className="arabic" lang="ar" dir="rtl">
                {choice.arabic}
              </span>
              <small dir="ltr">{choice.name}</small>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="qaida-mini-game-feedback">
          {isCorrect ? (
            <p>
              <CheckCircle2 size={18} aria-hidden="true" /> Correct — that is {target.name}.
              {streak > 1 ? ` Streak: ${streak}.` : ""}
            </p>
          ) : (
            <p>Not quite. Look again for {target.name} ({target.arabic}).</p>
          )}
          <button type="button" className="btn-outline-np" onClick={nextRound}>
            <RotateCcw size={15} aria-hidden="true" /> Try another round
          </button>
        </div>
      )}
    </div>
  );
}
