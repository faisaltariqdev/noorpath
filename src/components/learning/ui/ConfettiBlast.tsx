"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

interface Props { trigger: boolean; }

export default function ConfettiBlast({ trigger }: Props) {
  useEffect(() => {
    if (!trigger) return;
    const end = Date.now() + 1500;
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#FFD700", "#1B6B3A", "#fff"] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#FFD700", "#C62828", "#fff"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [trigger]);

  return null;
}
