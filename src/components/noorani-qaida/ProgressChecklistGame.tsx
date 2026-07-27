"use client";

import { useMemo, useState } from "react";
import ParentShareButtons from "@/components/noorani-qaida/ParentShareButtons";

const CHECKLIST = [
  { id: "letters-1-7", label: "Letters Alif to Khaa", detail: "Recognises shapes and dots for the first group." },
  { id: "letters-8-14", label: "Letters Daal to Saad", detail: "Can find these letters among nearby distractors." },
  { id: "letters-15-21", label: "Letters Daad to Kaaf", detail: "Including emphatic letters with calm recognition." },
  { id: "letters-22-28", label: "Letters Laam to Yaa", detail: "Can name the final group and common joining clues." },
  { id: "fatha", label: "Fatha", detail: "Reads a short a sound without stretching into Madd." },
  { id: "kasra", label: "Kasra", detail: "Reads a short i sound and finds the mark below." },
  { id: "damma", label: "Damma", detail: "Reads a short u sound with light lip rounding." },
  { id: "joining", label: "Joining forms", detail: "Notices isolated, initial, medial, and final forms." },
  { id: "sukoon", label: "Sukoon basics", detail: "Closes a consonant cleanly without an extra vowel." },
  { id: "word-reading", label: "Short word reading", detail: "Blends familiar letters and marks into short words." },
] as const;

const SHARE_URL = "https://www.noorpath.online/noorani-qaida/games/progress-checklist";

export default function ProgressChecklistGame() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const completed = useMemo(
    () => CHECKLIST.filter((item) => checked[item.id]).length,
    [checked],
  );
  const total = CHECKLIST.length;
  const percent = Math.round((completed / total) * 100);
  const milestone =
    completed === 0
      ? null
      : completed >= total
        ? "My child completed the full Noorani Qaida starter checklist!"
        : completed >= 7
          ? `My child is building Noorani Qaida foundations — ${completed}/${total} skills checked.`
          : `We started Noorani Qaida practice — ${completed}/${total} skills checked so far.`;

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="qaida-game-board">
      <p style={{ margin: 0, color: "var(--slate)" }}>
        Tick only what your child can do calmly with a model or teacher nearby.
        This checklist is a parent helper — not a certificate or grade.
      </p>
      <p style={{ margin: "0.85rem 0 0", color: "var(--muted)", fontSize: ".88rem" }}>
        Progress this session: <strong style={{ color: "var(--emerald)" }}>{completed}/{total}</strong> ({percent}%)
      </p>

      <ul className="qaida-progress-list">
        {CHECKLIST.map((item) => (
          <li key={item.id}>
            <input
              id={`qaida-check-${item.id}`}
              type="checkbox"
              checked={Boolean(checked[item.id])}
              onChange={() => toggle(item.id)}
            />
            <label htmlFor={`qaida-check-${item.id}`}>
              <strong>{item.label}</strong>
              <small>{item.detail}</small>
            </label>
          </li>
        ))}
      </ul>

      {milestone && (
        <div className="qaida-share-card" style={{ marginTop: "1.25rem" }}>
          <h3>{milestone}</h3>
          <p>
            Free practice tools and the full Noorani Qaida hub are open on NoorPath —
            no account needed for this checklist.
          </p>
          <ParentShareButtons
            label="Share progress on WhatsApp"
            shareText={`${milestone} Free Noorani Qaida practice for kids:`}
            shareUrl={SHARE_URL}
          />
        </div>
      )}
    </div>
  );
}
