"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LETTERS } from "@/data/learning/letters";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";
import LetterHero from "@/components/learning/ui/LetterHero";
import FourForms from "@/components/learning/ui/FourForms";
import TraceRow from "@/components/learning/ui/TraceRow";
import HarakatRow from "@/components/learning/ui/HarakatRow";
import CircleQuiz from "@/components/learning/ui/CircleQuiz";
import ColorFinder from "@/components/learning/ui/ColorFinder";
import StarRating from "@/components/learning/ui/StarRating";
import ActivityBox from "@/components/learning/ui/ActivityBox";
import ConfettiBlast from "@/components/learning/ui/ConfettiBlast";
import Flashcard3D from "@/components/learning/ui/Flashcard3D";
import type { ScreenId, Letter } from "@/data/learning/types";

interface Props {
  letterId: number;
  onNavigate: (id: ScreenId) => void;
  done: Set<number>;
  markDone: (id: number) => void;
  onRate: (screen: string, count: number) => void;
}

function buildColorPool(lt: Letter) {
  const others = LETTERS.filter((l) => l.id !== lt.id);
  const w1 = others[lt.id % others.length];
  const w2 = others[(lt.id + 3) % others.length];
  const w3 = others[(lt.id + 7) % others.length];
  const pool = [lt, w1, lt, w2, w3, lt, w1, lt];
  return pool.map((l) => ({ letter: l.letter, isTarget: l.id === lt.id }));
}

export default function LetterLessonScreen({ letterId, onNavigate, done, markDone, onRate }: Props) {
  const [celebrated, setCelebrated] = useState(false);
  const lt = LETTERS[letterId - 1];
  if (!lt) return null;

  const gc = COLOR_GROUPS[lt.colorGroup];
  const prevId = lt.id > 1 ? lt.id - 1 : null;
  const nextId = lt.id < 28 ? lt.id + 1 : null;
  const isDone = done.has(lt.id);

  const distractors = LETTERS.filter((l) => l.id !== lt.id).slice(lt.id % 10, (lt.id % 10) + 2);

  function handleDone() {
    if (!isDone) {
      markDone(lt.id);
      setCelebrated(true);
    }
  }

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px 64px" }}>
      <ConfettiBlast trigger={celebrated} />

      {/* Breadcrumb */}
      <div style={{ fontSize: ".72rem", color: "#999", marginBottom: 10 }}>
        Unit 1 · Lesson {lt.id} of 28 · Arabic Alphabet
      </div>

      {/* Objectives */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10, marginBottom: 20 }}>
        {[
          { icon: "🎯", title: "Objective", bg: "#E3F2FD", color: "#1565C0", text: `Recognise, name and pronounce ${lt.name} (${lt.letter}) in all four forms.` },
          { icon: "👩‍🏫", title: "Teacher Goal", bg: "#FFF3E0", color: "#E65100", text: `Students identify ${lt.name} and pronounce with correct Makharij in 15–20 minutes.` },
          { icon: "👨‍👩‍👦", title: "Parent Goal", bg: "#E8F5E9", color: "#1B6B3A", text: `Practise ${lt.name} five times daily at home. Trace the letter every evening!` },
        ].map(({ icon, title, bg, color, text }) => (
          <div key={title} style={{ background: bg, borderRadius: 16, padding: "12px 14px", border: `2px solid ${color}22` }}>
            <div style={{ fontSize: "1.3rem", marginBottom: 4 }}>{icon}</div>
            <div style={{ fontSize: ".64rem", fontWeight: 900, textTransform: "uppercase", color, letterSpacing: "1px", marginBottom: 4 }}>{title}</div>
            <p style={{ fontSize: ".78rem", margin: 0, color: "#444" }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Warm-up */}
      <ActivityBox variant="warm" title="Warm-Up (3 min)" icon="☀️">
        <p style={{ fontSize: ".84rem", margin: 0 }}>
          Sing the alphabet up to Letter {lt.id}! Then: what letter came before this one? Shout it out!
        </p>
      </ActivityBox>

      {/* Hero + Makharij */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 16 }}>
        <LetterHero letter={lt} />
        <div>
          <div style={{
            background: `linear-gradient(135deg, ${gc.bg}dd, ${gc.bg})`,
            borderRadius: 16, padding: "16px 18px", marginBottom: 12, color: "#fff",
          }}>
            <div style={{ fontSize: ".7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "rgba(255,255,255,.7)", marginBottom: 6 }}>
              Makharij — How to Pronounce {lt.name}
            </div>
            <p style={{ fontSize: ".84rem", margin: 0 }}>{lt.makharij}</p>
          </div>
          <div style={{ background: "#FFFDE7", borderLeft: "4px solid #FDD835", borderRadius: "0 10px 10px 0", padding: "10px 14px", marginBottom: 10, fontSize: ".84rem" }}>
            💡 {lt.tip}
          </div>
          <div style={{ background: "#FFEBEE", borderLeft: "4px solid #EF9A9A", borderRadius: "0 10px 10px 0", padding: "10px 14px", marginBottom: 10, fontSize: ".84rem" }}>
            ⚠️ <strong>Watch out!</strong> {lt.mistake}
          </div>
          {/* Example word */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E8E8E8", overflow: "hidden" }}>
            <div style={{ background: gc.light, color: gc.text, padding: "10px 16px", fontWeight: 800, fontSize: ".82rem" }}>Example Word</div>
            <div style={{ padding: 16, textAlign: "center" }}>
              <div style={{ fontFamily: "'Amiri', serif", fontSize: "3rem", color: gc.text, lineHeight: 1 }}>{lt.word}</div>
              <div style={{ fontSize: ".82rem", color: "#666", fontWeight: 700, marginTop: 4 }}>{lt.wordEn}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Four Forms */}
      <FourForms letter={lt} />

      {/* Trace */}
      <ActivityBox variant="trace" title="Trace the Letter!" icon="✏️">
        <p style={{ fontSize: ".82rem", color: "#555", marginBottom: 8 }}>Trace with finger first, then pencil. Start from the example!</p>
        <TraceRow letter={lt.letter} count={4} />
      </ActivityBox>

      {/* Speaking Practice */}
      <ActivityBox variant="speak" title={`Speaking Practice — Say Each Sound 5 Times!`} icon="🎤">
        <HarakatRow letter={lt} />
      </ActivityBox>

      {/* Flashcard */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: ".84rem", color: "#555", marginBottom: 10 }}>🃏 Practice with Flashcard:</div>
        <Flashcard3D letter={lt} size={200} />
      </div>

      {/* Quiz + Color finder */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 16 }}>
        <ActivityBox variant="quiz" title={`Circle the ${lt.name}!`} icon="⭕">
          <CircleQuiz target={lt} distractors={distractors} />
        </ActivityBox>
        <ActivityBox variant="color" title={`Find the ${lt.name}!`} icon="🎨">
          <ColorFinder targetLetter={lt.letter} targetName={lt.name} pool={buildColorPool(lt)} />
        </ActivityBox>
      </div>

      {/* Teacher + Parent + HW + Stars (2×2 grid) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12, marginBottom: 16 }}>
        <ActivityBox variant="teacher" title="Teacher Notes" icon="👩‍🏫">
          <ul style={{ fontSize: ".8rem", margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
            <li>Lesson time: 15–20 minutes</li>
            <li>Makharij: {lt.makharij}</li>
            <li>Write letter 3x on board, narrate each stroke</li>
            <li>Online: Zoom annotation + echo game</li>
            <li>Give stars generously — encourage every attempt!</li>
          </ul>
        </ActivityBox>
        <ActivityBox variant="parent" title="Parent Tips" icon="🏠">
          <ul style={{ fontSize: ".8rem", margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
            <li>Practise {lt.name} for 5 min before bed</li>
            <li>"Find {lt.letter} in this book!" — letter hunt</li>
            <li>Put sticky note with {lt.letter} on the fridge!</li>
            <li>Reward every practice with a sticker</li>
          </ul>
        </ActivityBox>
        <ActivityBox variant="hw" title="Homework" icon="✏️">
          <ol style={{ fontSize: ".8rem", margin: 0, paddingLeft: 16, lineHeight: 1.8 }}>
            <li>Trace {lt.name} 10× on paper</li>
            <li>Say {lt.name}a, {lt.name}i, {lt.name}u five times each</li>
            <li>Find {lt.letter} in a Quran page — count them!</li>
            <li>Draw {lt.letter} in sand or on a whiteboard</li>
          </ol>
        </ActivityBox>
        <ActivityBox variant="reward" title="My Stars" icon="⭐">
          <StarRating
            screenId={`letter-${lt.id}`}
            onRate={(count) => onRate(`letter-${lt.id}`, count)}
          />
          {isDone && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,#FFD700,#FFA000)", borderRadius: 50, padding: "5px 14px", fontWeight: 800, fontSize: ".74rem", color: "#1a1a1a" }}
            >
              ⭐ Lesson {lt.id} Complete!
            </motion.div>
          )}
        </ActivityBox>
      </div>

      {/* Review Questions */}
      <ActivityBox variant="quiz" title="Review Questions" icon="❓">
        <ol style={{ fontSize: ".84rem", margin: 0, paddingLeft: 18, lineHeight: 2.2 }}>
          <li>What is the name of <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.3rem" }}>{lt.letter}</span>?</li>
          <li>Where does {lt.name} come from in the mouth?</li>
          <li>Say {lt.name}a, {lt.name}i, {lt.name}u quickly!</li>
          <li>Can you write {lt.name} from memory?</li>
          <li>Find {lt.name} in the word: <span style={{ fontFamily: "'Amiri', serif", fontSize: "1.3rem" }}>{lt.word}</span></li>
        </ol>
      </ActivityBox>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
        {prevId ? (
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(`letter-${prevId}` as ScreenId)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)", color: "#fff", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
            ← Prev
          </motion.button>
        ) : <div />}

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleDone}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: isDone ? "linear-gradient(135deg,#2E7D32,#1B6B3A)" : "linear-gradient(135deg,#1B6B3A,#0D3D1E)",
            color: "#fff", fontWeight: 800, fontSize: ".82rem", padding: "9px 20px", borderRadius: 50, border: "none", cursor: "pointer"
          }}
        >
          {isDone ? "✓ Done!" : "✓ Mark Done"}
        </motion.button>

        {nextId ? (
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate(`letter-${nextId}` as ScreenId)}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
            Next →
          </motion.button>
        ) : (
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate("harakat-intro")}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#FFD700,#FFA000)", color: "#1a1a1a", fontWeight: 800, fontSize: ".84rem", padding: "10px 22px", borderRadius: 50, border: "none", cursor: "pointer" }}>
            Unit 2: Vowels →
          </motion.button>
        )}
      </div>
    </div>
  );
}
