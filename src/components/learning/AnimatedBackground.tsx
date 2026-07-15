"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Seeded random so hydration matches SSR
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: seededRand(i * 3) * 100,
  y: seededRand(i * 7) * 60,
  size: seededRand(i * 11) * 4 + 2,
  delay: seededRand(i * 13) * 4,
  duration: seededRand(i * 17) * 3 + 2,
}));

const CLOUDS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  y: seededRand(i * 5) * 30 + 5,
  size: seededRand(i * 9) * 60 + 60,
  duration: seededRand(i * 23) * 20 + 30,
  delay: seededRand(i * 31) * -20,
  opacity: seededRand(i * 37) * 0.12 + 0.04,
}));

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: seededRand(i * 41) * 100,
  y: seededRand(i * 43) * 100,
  size: seededRand(i * 47) * 6 + 3,
  color: ["#FFD700", "#C8E6FF", "#FFB347", "#E8F5E9", "#F3E5F5"][i % 5],
  duration: seededRand(i * 53) * 6 + 4,
  delay: seededRand(i * 59) * 5,
}));

const LANTERNS = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  x: [10, 30, 70, 90][i],
  delay: i * 1.2,
}));

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", overflow: "hidden",
        background: "radial-gradient(ellipse at 20% 10%, #0a2518 0%, #051a0d 60%, #020d07 100%)",
      }}
    >
      {/* Moon glow */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "6%", right: "8%",
          width: 90, height: 90, borderRadius: "50%",
          background: "radial-gradient(circle, #FFF9C4 0%, #FFD700 40%, transparent 70%)",
          boxShadow: "0 0 60px 20px rgba(255,215,0,.18), 0 0 120px 40px rgba(255,215,0,.08)",
        }}
      />
      {/* Moon crescent overlay */}
      <motion.div
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "5%", right: "7.2%",
          width: 100, height: 100,
          fontFamily: "serif", fontSize: 70, lineHeight: "100px", textAlign: "center",
          color: "#FFD700", opacity: 0.9, filter: "drop-shadow(0 0 12px rgba(255,215,0,.6))",
        }}
      >
        ☪
      </motion.div>

      {/* Animated stars */}
      {STARS.map((s) => (
        <motion.div
          key={s.id}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,.6)`,
          }}
        />
      ))}

      {/* Floating clouds */}
      {CLOUDS.map((c) => (
        <motion.div
          key={c.id}
          animate={{ x: ["100vw", "-30vw"] }}
          transition={{ duration: c.duration, repeat: Infinity, delay: c.delay, ease: "linear" }}
          style={{
            position: "absolute",
            top: `${c.y}%`,
            fontSize: c.size,
            opacity: c.opacity,
            color: "#fff",
            lineHeight: 1,
            filter: "blur(1px)",
          }}
        >
          ☁
        </motion.div>
      ))}

      {/* Islamic Lanterns */}
      {LANTERNS.map((l) => (
        <motion.div
          key={l.id}
          animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, delay: l.delay, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "3%",
            left: `${l.x}%`,
            fontSize: 28,
            opacity: 0.25,
            filter: "drop-shadow(0 0 8px rgba(255,215,0,.5))",
          }}
        >
          🪔
        </motion.div>
      ))}

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -30, 0],
            x: [0, seededRand(p.id * 61) * 20 - 10, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}

      {/* Light rays at top */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", height: "35%",
        background: "conic-gradient(from 270deg at 50% 0%, transparent 30deg, rgba(255,215,0,.025) 45deg, transparent 60deg, transparent 120deg, rgba(255,215,0,.02) 135deg, transparent 150deg)",
        pointerEvents: "none",
      }} />
    </div>
  );
}
