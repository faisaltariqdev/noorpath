"use client";
import { useState, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";

interface Ripple { id: number; x: number; y: number; }
let rippleId = 0;

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit";
  icon?: ReactNode;
  fullWidth?: boolean;
}

const VARIANTS = {
  primary: {
    bg: "linear-gradient(135deg,#1B6B3A,#0D3D1E)",
    color: "#fff",
    border: "none",
    shadow: "0 4px 20px rgba(27,107,58,.45)",
    hoverShadow: "0 8px 32px rgba(27,107,58,.65)",
    rippleColor: "rgba(255,255,255,.25)",
  },
  secondary: {
    bg: "rgba(255,255,255,.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.2)",
    shadow: "0 2px 10px rgba(0,0,0,.1)",
    hoverShadow: "0 6px 20px rgba(0,0,0,.2)",
    rippleColor: "rgba(255,255,255,.2)",
  },
  ghost: {
    bg: "transparent",
    color: "rgba(255,255,255,.8)",
    border: "1px solid rgba(255,255,255,.2)",
    shadow: "none",
    hoverShadow: "0 4px 16px rgba(0,0,0,.15)",
    rippleColor: "rgba(255,255,255,.15)",
  },
  gold: {
    bg: "linear-gradient(135deg,#FFD700,#FFA000)",
    color: "#1a1a1a",
    border: "none",
    shadow: "0 4px 20px rgba(255,215,0,.4)",
    hoverShadow: "0 8px 32px rgba(255,215,0,.65)",
    rippleColor: "rgba(255,255,255,.3)",
  },
};

const SIZES = {
  sm: { padding: "8px 18px", fontSize: ".78rem", borderRadius: 40, minHeight: 36 },
  md: { padding: "11px 24px", fontSize: ".88rem", borderRadius: 50, minHeight: 44 },
  lg: { padding: "14px 32px", fontSize: "1rem", borderRadius: 50, minHeight: 52 },
};

export default function QaidaButton({ children, onClick, variant = "primary", size = "md", disabled, loading, style, type = "button", icon, fullWidth }: Props) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const v = VARIANTS[variant];
  const s = SIZES[size];

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = ++rippleId;
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    onClick?.();
  }, [disabled, loading, onClick]);

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? {
        scale: 1.04,
        boxShadow: v.hoverShadow,
        y: -2,
      } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95, y: 0 } : {}}
      transition={{ type: "spring", damping: 20, stiffness: 400 }}
      style={{
        position: "relative", overflow: "hidden",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: 8, cursor: disabled || loading ? "not-allowed" : "pointer",
        fontFamily: "'Baloo 2', 'Nunito', sans-serif",
        fontWeight: 800, letterSpacing: "0.01em",
        background: v.bg, color: v.color, border: v.border,
        boxShadow: v.shadow, opacity: disabled ? 0.5 : 1,
        width: fullWidth ? "100%" : undefined,
        ...s, ...style,
      }}
    >
      {/* Ripple effects */}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 8, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            position: "absolute", left: r.x, top: r.y,
            width: 20, height: 20, borderRadius: "50%",
            background: v.rippleColor,
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Loading spinner */}
      {loading && (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          style={{ width: 16, height: 16, border: "2px solid currentColor", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block" }}
        />
      )}

      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}

      {children}
    </motion.button>
  );
}
