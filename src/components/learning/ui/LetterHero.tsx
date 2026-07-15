"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Letter } from "@/data/learning/types";
import { COLOR_GROUPS } from "@/data/learning/colorGroups";

interface Props {
  letter: Letter;
  onTap?: () => void;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  angle: number;
  color: string;
}

const SPARKLE_COLORS = ["#FFD700", "#FF6B6B", "#4FC3F7", "#A5D6A7", "#CE93D8", "#fff"];

let sparkleId = 0;

function SoundWave({ playing }: { playing: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, height: 24, marginTop: 8 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={playing ? { scaleY: [0.3, 1.6, 0.3], opacity: [0.4, 1, 0.4] } : { scaleY: 0.3, opacity: 0.25 }}
          transition={{ duration: 0.5, repeat: playing ? Infinity : 0, delay: i * 0.08, ease: "easeInOut" }}
          style={{ width: 4, borderRadius: 4, background: "#FFD700", transformOrigin: "bottom" }}
        >
          <div style={{ height: 20 }} />
        </motion.div>
      ))}
    </div>
  );
}

export default function LetterHero({ letter, onTap }: Props) {
  const gc = COLOR_GROUPS[letter.colorGroup];
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tapEffect, setTapEffect] = useState(false);
  const [glowPulse, setGlowPulse] = useState(false);

  // Clear sparkles
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => setSparkles([]), 900);
    return () => clearTimeout(timer);
  }, [sparkles]);

  const handleTap = useCallback(() => {
    // Sparkle burst
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: ++sparkleId,
      x: 50 + Math.cos((i / 12) * Math.PI * 2) * (20 + Math.random() * 15),
      y: 40 + Math.sin((i / 12) * Math.PI * 2) * (20 + Math.random() * 15),
      angle: (i / 12) * 360,
      color: SPARKLE_COLORS[i % SPARKLE_COLORS.length],
    }));
    setSparkles(newSparkles);
    setTapEffect(true);
    setGlowPulse(true);
    setIsPlaying(true);

    // Mobile vibration
    if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate([30, 20, 30]);

    setTimeout(() => setTapEffect(false), 350);
    setTimeout(() => setGlowPulse(false), 800);
    setTimeout(() => setIsPlaying(false), 2000);

    onTap?.();
  }, [onTap]);

  return (
    <div style={{
      borderRadius: 24, padding: "28px 18px 20px", textAlign: "center",
      background: `linear-gradient(135deg, ${gc.light}, ${gc.light}cc)`,
      border: `2px solid ${gc.bg}33`,
      position: "relative", overflow: "visible",
      boxShadow: glowPulse
        ? `0 0 40px 12px ${gc.bg}55, 0 8px 40px rgba(0,0,0,.25)`
        : `0 8px 32px rgba(0,0,0,.15)`,
      transition: "box-shadow .35s ease",
    }}>
      <div style={{ fontSize: ".65rem", fontWeight: 800, color: `${gc.text}99`, letterSpacing: "2px", marginBottom: 4, textTransform: "uppercase" }}>
        LETTER {letter.id} OF 28
      </div>

      {/* Living letter with breathing + tap */}
      <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }} onClick={handleTap}>
        {/* Idle glow ring */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: -20,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${gc.bg}60 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Golden aura on tap */}
        <AnimatePresence>
          {glowPulse && (
            <motion.div
              key="aura"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                position: "absolute", inset: -10,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,215,0,.5) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>

        {/* The letter */}
        <motion.div
          key={letter.id}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={tapEffect
            ? { scale: [1.18, 0.9, 1.05, 1], rotate: [0, -5, 5, 0] }
            : { scale: [1, 1.03, 1], y: [0, -4, 0] }
          }
          transition={tapEffect
            ? { duration: 0.38, ease: "easeOut" }
            : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
          whileHover={{ scale: 1.12, filter: `drop-shadow(0 0 14px ${gc.bg}88)` }}
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "clamp(5rem, 18vw, 9rem)",
            lineHeight: 1,
            color: gc.text,
            display: "block",
            userSelect: "none",
            filter: `drop-shadow(0 0 8px ${gc.bg}55)`,
          }}
        >
          {letter.letter}
        </motion.div>

        {/* Sparkle burst */}
        <AnimatePresence>
          {sparkles.map((s) => (
            <motion.div
              key={s.id}
              initial={{ x: "50%", y: "50%", scale: 0, opacity: 1 }}
              animate={{ x: `${s.x}%`, y: `${s.y}%`, scale: [0, 1.4, 0], opacity: [1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                position: "absolute", top: 0, left: 0,
                width: 10, height: 10, borderRadius: "50%",
                background: s.color,
                boxShadow: `0 0 8px ${s.color}`,
                pointerEvents: "none",
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Tap hint */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: ".6rem", color: `${gc.text}70`, marginBottom: 6, fontWeight: 700 }}
      >
        👆 Tap the letter!
      </motion.div>

      {/* Sound wave visualization */}
      <SoundWave playing={isPlaying} />

      <div style={{ fontWeight: 900, fontSize: "1.5rem", color: gc.text, marginTop: 8 }}>{letter.name}</div>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: "1.1rem", color: `${gc.text}99`, margin: "3px 0" }}>{letter.arabicName}</div>
      <div style={{ fontWeight: 700, fontSize: ".88rem", color: `${gc.text}88` }}>Sound: &ldquo;<strong>{letter.sound}</strong>&rdquo;</div>

      {/* Animated emoji */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: "2.4rem", marginTop: 8 }}
      >
        {letter.emoji}
      </motion.div>
    </div>
  );
}
