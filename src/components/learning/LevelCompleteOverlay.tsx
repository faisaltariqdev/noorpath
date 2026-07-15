"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import type { LevelCompleteData } from "@/hooks/learning/useQaidaStore";

interface Props {
  data: LevelCompleteData | null;
  onDismiss: () => void;
}

const CELEBRATE_MSGS = [
  "Excellent! 🌟", "MashaAllah! ✨", "Amazing! 🎉",
  "Fantastic! 🏆", "Superstar! ⭐", "Brilliant! 💫",
];

export default function LevelCompleteOverlay({ data, onDismiss }: Props) {
  useEffect(() => {
    if (!data) return;
    const end = Date.now() + 2200;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors: ["#FFD700", "#1B6B3A", "#fff", "#FFB347"] });
      confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors: ["#FFD700", "#C62828", "#fff", "#4FC3F7"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [data]);

  const msg = data ? CELEBRATE_MSGS[Math.floor(Math.random() * CELEBRATE_MSGS.length)] : "";

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onDismiss}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,.7)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20,
          }}
        >
          <motion.div
            initial={{ scale: 0.5, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.5, y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg,#0D3D1E 0%,#1B6B3A 60%,#0a2e18 100%)",
              borderRadius: 28, padding: "36px 28px", textAlign: "center",
              maxWidth: 380, width: "100%",
              border: "2px solid rgba(255,215,0,.4)",
              boxShadow: "0 20px 60px rgba(0,0,0,.6), 0 0 80px rgba(255,215,0,.12)",
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Background glow rings */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: "absolute", inset: -40,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,215,0,.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Trophy / celebration emoji */}
            <motion.div
              animate={{ rotate: [-10, 10, -10], y: [0, -6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: "4rem", marginBottom: 8 }}
            >
              {data.leveledUp ? "🚀" : "🏆"}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: "#FFD700", fontWeight: 900, fontSize: "1.6rem", fontFamily: "'Baloo 2', cursive", marginBottom: 4 }}
            >
              {msg}
            </motion.div>

            {data.letterName && (
              <div style={{ color: "rgba(255,255,255,.75)", fontSize: ".9rem", marginBottom: 16 }}>
                {data.letterName} lesson complete! 📖
              </div>
            )}

            {/* Rewards row */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", margin: "20px 0" }}>
              {[
                { icon: "⭐", label: `+${data.xpGained} XP`, color: "#FFD700" },
                { icon: "🪙", label: `+${data.coinsGained}`, color: "#FFA000" },
              ].map(({ icon, label, color }) => (
                <motion.div
                  key={label}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 14, delay: 0.3 }}
                  style={{
                    background: "rgba(255,255,255,.08)", borderRadius: 16, padding: "12px 20px",
                    border: `2px solid ${color}44`,
                  }}
                >
                  <div style={{ fontSize: "1.6rem" }}>{icon}</div>
                  <div style={{ color, fontWeight: 900, fontSize: ".88rem", marginTop: 4 }}>{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Level up banner */}
            {data.leveledUp && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, delay: 0.5 }}
                style={{
                  background: "linear-gradient(135deg,#FFD700,#FFA000)",
                  borderRadius: 50, padding: "8px 20px",
                  color: "#1a1a1a", fontWeight: 900, fontSize: ".9rem",
                  display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
                }}
              >
                🚀 Level Up! → Level {data.newLevel}
              </motion.div>
            )}

            {/* New badges */}
            {data.newBadges.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                {data.newBadges.map((b) => (
                  <motion.div
                    key={b.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, delay: 0.6 }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "rgba(255,215,0,.15)", borderRadius: 50, padding: "6px 16px",
                      border: "1px solid rgba(255,215,0,.4)", color: "#FFD700",
                      fontSize: ".82rem", fontWeight: 800, margin: 4,
                    }}
                  >
                    {b.icon} Badge Earned: {b.label}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Stars decoration */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.35 + i * 0.08 }}
                  style={{ fontSize: "1.6rem" }}
                >⭐</motion.span>
              ))}
            </div>

            {/* Continue button */}
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 8px 30px rgba(255,215,0,.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onDismiss}
              style={{
                background: "linear-gradient(135deg,#FFD700,#FFA000)",
                color: "#1a1a1a", fontWeight: 900, fontSize: "1rem",
                padding: "13px 36px", borderRadius: 50, border: "none", cursor: "pointer",
                fontFamily: "'Baloo 2', cursive",
                boxShadow: "0 4px 20px rgba(255,215,0,.35)",
              }}
            >
              Continue Learning →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
