"use client";
import { motion } from "framer-motion";

interface Props { progress: number; }

export default function QaidaProgressBar({ progress }: Props) {
  return (
    <div style={{ position: "fixed", top: 58, left: 0, right: 0, height: 3, background: "rgba(255,255,255,.15)", zIndex: 1039 }}>
      <motion.div
        style={{ height: "100%", background: "linear-gradient(90deg, #FFD700, #FFA000)", transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
