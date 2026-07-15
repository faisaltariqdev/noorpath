"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  count?: number;
  screenId: string;
  onRate?: (count: number) => void;
}

export default function StarRating({ count = 5, onRate }: Props) {
  const [active, setActive] = useState<number>(-1);

  function handleStar(idx: number) {
    const newVal = idx;
    setActive(newVal);
    onRate?.(newVal + 1);
  }

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={active >= i ? { scale: [1, 1.35, 1] } : { scale: 1 }}
          onClick={() => handleStar(i)}
          style={{
            width: 44, height: 44,
            background: active >= i ? "#FDD835" : "#FFF9C4",
            border: `2px ${active >= i ? "solid" : "dashed"} #FDD835`,
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.4rem",
            cursor: "pointer",
            transition: "background .2s, border .2s",
          }}
        >
          ⭐
        </motion.button>
      ))}
    </div>
  );
}
