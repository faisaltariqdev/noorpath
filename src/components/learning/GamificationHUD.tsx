"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Props {
  xp: number;
  xpInLevel: number;
  xpForNextLevel: number;
  coins: number;
  level: number;
  streak: number;
  done: Set<number>;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(value);
  const [bump, setBump] = useState(false);
  const prev = useRef(value);

  useEffect(() => {
    if (value !== prev.current) {
      setBump(true);
      setTimeout(() => setBump(false), 400);
      // Count up animation
      const diff = value - prev.current;
      const steps = Math.min(Math.abs(diff), 20);
      const step = diff / steps;
      let count = 0;
      const timer = setInterval(() => {
        count++;
        setDisplayed((d) => Math.round(d + step));
        if (count >= steps) clearInterval(timer);
      }, 30);
      prev.current = value;
    }
  }, [value]);

  return (
    <motion.span
      animate={bump ? { scale: [1, 1.4, 1], color: ["#FFD700", "#fff", "#FFD700"] } : {}}
      transition={{ duration: 0.4 }}
    >
      {displayed}
    </motion.span>
  );
}

export default function GamificationHUD({ xp, xpInLevel, xpForNextLevel, coins, level, streak, done }: Props) {
  const pct = (xpInLevel / xpForNextLevel) * 100;

  return (
    <div style={{
      position: "fixed", top: 61, left: 0, right: 0, zIndex: 1035,
      background: "linear-gradient(90deg,rgba(13,61,30,.97),rgba(27,107,58,.97))",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,215,0,.15)",
      padding: "4px 16px 5px",
      display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
    }}>
      {/* Level badge */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        style={{
          background: "linear-gradient(135deg,#FFD700,#FFA000)",
          borderRadius: 20, padding: "2px 10px",
          display: "flex", alignItems: "center", gap: 5, flexShrink: 0,
        }}
      >
        <span style={{ fontSize: ".65rem", fontWeight: 900, color: "#1a1a1a" }}>LVL</span>
        <span style={{ fontSize: ".9rem", fontWeight: 900, color: "#1a1a1a", lineHeight: 1 }}>{level}</span>
      </motion.div>

      {/* XP bar */}
      <div style={{ flex: 1, minWidth: 80, maxWidth: 160 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
          <span style={{ fontSize: ".55rem", color: "rgba(255,255,255,.6)", fontWeight: 700 }}>XP</span>
          <span style={{ fontSize: ".55rem", color: "#FFD700", fontWeight: 700 }}><AnimatedNumber value={xp} /></span>
        </div>
        <div style={{ background: "rgba(255,255,255,.1)", borderRadius: 50, height: 6, overflow: "hidden" }}>
          <motion.div
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ height: "100%", background: "linear-gradient(90deg,#FFD700,#FFA000)", borderRadius: 50 }}
          />
        </div>
      </div>

      {/* Coins */}
      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        <motion.span
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          style={{ fontSize: "1rem" }}
        >🪙</motion.span>
        <span style={{ color: "#FFD700", fontWeight: 800, fontSize: ".78rem" }}>
          <AnimatedNumber value={coins} />
        </span>
      </div>

      {/* Letters progress */}
      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        <span style={{ fontSize: "1rem" }}>📖</span>
        <span style={{ color: "rgba(255,255,255,.85)", fontWeight: 700, fontSize: ".74rem" }}>{done.size}/28</span>
      </div>

      {/* Streak */}
      {streak > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ fontSize: ".95rem" }}
          >🔥</motion.span>
          <span style={{ color: "#FF6B35", fontWeight: 800, fontSize: ".74rem" }}>{streak}</span>
        </motion.div>
      )}
    </div>
  );
}
