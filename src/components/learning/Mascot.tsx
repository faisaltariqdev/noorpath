"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

interface Props {
  message: string | null;
  isVisible?: boolean;
}

const IDLE_MESSAGES = [
  "MashaAllah! 🌟",
  "You're doing amazing! 💪",
  "Keep going, superstar! ⭐",
  "Bismillah, let's learn! 📖",
  "Every letter is a blessing! ✨",
  "You're a Quran star! 🌙",
];

export default function Mascot({ message, isVisible = true }: Props) {
  const leftEyeRef = useRef<SVGEllipseElement>(null);
  const rightEyeRef = useRef<SVGEllipseElement>(null);
  const leftWingRef = useRef<SVGPathElement>(null);
  const rightWingRef = useRef<SVGPathElement>(null);
  const bodyRef = useRef<SVGEllipseElement>(null);
  const [idleMsg, setIdleMsg] = useState<string | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!bodyRef.current) return;

    // Idle float
    gsap.to(bodyRef.current.closest("svg"), {
      y: -8, duration: 2, ease: "sine.inOut", yoyo: true, repeat: -1,
    });

    // Blink eyes periodically
    const blinkTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    blinkTl
      .to([leftEyeRef.current, rightEyeRef.current], { scaleY: 0.1, duration: 0.08, transformOrigin: "50% 50%" })
      .to([leftEyeRef.current, rightEyeRef.current], { scaleY: 1, duration: 0.08 });

    // Wing wave on click / hover
    const wingWave = gsap.to([leftWingRef.current, rightWingRef.current], {
      rotate: 15, duration: 0.3, yoyo: true, repeat: 3, ease: "sine.inOut",
      transformOrigin: "50% 100%", paused: true,
    });

    const svg = bodyRef.current.closest("svg") as SVGElement | null;
    const handleEnter = () => wingWave.restart();
    svg?.addEventListener("mouseenter", handleEnter);
    svg?.addEventListener("click", handleEnter);

    return () => {
      blinkTl.kill();
      svg?.removeEventListener("mouseenter", handleEnter);
      svg?.removeEventListener("click", handleEnter);
    };
  }, []);

  // Idle message rotation
  useEffect(() => {
    function scheduleNext() {
      idleTimerRef.current = setTimeout(() => {
        setIdleMsg(IDLE_MESSAGES[Math.floor(Math.random() * IDLE_MESSAGES.length)]);
        setTimeout(() => {
          setIdleMsg(null);
          scheduleNext();
        }, 2800);
      }, 12000 + Math.random() * 8000);
    }
    scheduleNext();
    return () => { if (idleTimerRef.current) clearTimeout(idleTimerRef.current); };
  }, []);

  const displayMsg = message || idleMsg;

  if (!isVisible) return null;

  return (
    <div style={{ position: "fixed", bottom: 80, right: 16, zIndex: 900, userSelect: "none" }}>
      {/* Speech bubble */}
      <AnimatePresence>
        {displayMsg && (
          <motion.div
            key={displayMsg}
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ type: "spring", damping: 16, stiffness: 300 }}
            style={{
              position: "absolute", bottom: "105%", right: 0,
              background: "linear-gradient(135deg,#1B6B3A,#0D3D1E)",
              color: "#fff", borderRadius: 14, padding: "9px 14px",
              fontSize: ".78rem", fontWeight: 800, whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,.3)",
              border: "2px solid rgba(255,215,0,.3)",
              maxWidth: 180, textAlign: "center", lineHeight: 1.4,
            }}
          >
            {displayMsg}
            {/* Tail */}
            <div style={{
              position: "absolute", bottom: -8, right: 20,
              width: 0, height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #0D3D1E",
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Owl SVG mascot */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} style={{ cursor: "pointer" }}>
        <svg ref={bodyRef as unknown as React.RefObject<SVGSVGElement>} width="72" height="90" viewBox="0 0 72 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="36" cy="87" rx="20" ry="4" fill="rgba(0,0,0,.15)" />

          {/* Body */}
          <ellipse ref={bodyRef} cx="36" cy="52" rx="26" ry="30" fill="#1B6B3A" />
          {/* Body highlight */}
          <ellipse cx="36" cy="52" rx="20" ry="24" fill="#2E7D32" opacity="0.6" />

          {/* Tummy */}
          <ellipse cx="36" cy="60" rx="14" ry="16" fill="#FFF8E1" />

          {/* Wings */}
          <path ref={leftWingRef} d="M10 55 Q0 45 8 32 Q14 42 14 55Z" fill="#0D3D1E" />
          <path ref={rightWingRef} d="M62 55 Q72 45 64 32 Q58 42 58 55Z" fill="#0D3D1E" />

          {/* Head */}
          <circle cx="36" cy="24" r="22" fill="#1B6B3A" />
          <circle cx="36" cy="24" r="18" fill="#2E7D32" opacity="0.5" />

          {/* Ears (horns) */}
          <polygon points="18,8 24,2 26,12" fill="#FFD700" />
          <polygon points="54,8 48,2 46,12" fill="#FFD700" />

          {/* Eyes */}
          <circle cx="26" cy="24" r="9" fill="#fff" />
          <circle cx="46" cy="24" r="9" fill="#fff" />
          <circle cx="26" cy="24" r="7" fill="#FFD700" />
          <circle cx="46" cy="24" r="7" fill="#FFD700" />
          <ellipse ref={leftEyeRef} cx="26" cy="24" rx="4" ry="4" fill="#1a1a1a" />
          <ellipse ref={rightEyeRef} cx="46" cy="24" rx="4" ry="4" fill="#1a1a1a" />
          {/* Eye shine */}
          <circle cx="28" cy="22" r="1.5" fill="#fff" />
          <circle cx="48" cy="22" r="1.5" fill="#fff" />

          {/* Beak */}
          <polygon points="32,30 40,30 36,36" fill="#FFD700" />

          {/* Belly detail */}
          <circle cx="32" cy="64" r="3" fill="#FFD700" opacity="0.4" />
          <circle cx="40" cy="64" r="3" fill="#FFD700" opacity="0.4" />

          {/* Feet */}
          <rect x="26" y="80" width="8" height="5" rx="2" fill="#FFD700" />
          <rect x="38" y="80" width="8" height="5" rx="2" fill="#FFD700" />

          {/* Star sparkles around owl */}
          <motion.text x="2" y="16" fontSize="10" fill="#FFD700" opacity="0.8"
            style={{ animation: "sparkle 2s ease-in-out infinite" }}>✦</motion.text>
          <motion.text x="60" y="20" fontSize="8" fill="#FFD700" opacity="0.6"
            style={{ animation: "sparkle 2.5s ease-in-out infinite 0.5s" }}>✦</motion.text>
        </svg>
      </motion.div>
    </div>
  );
}
