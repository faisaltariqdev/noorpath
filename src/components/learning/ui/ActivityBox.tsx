"use client";
import type { ReactNode } from "react";

type Variant = "warm" | "speak" | "trace" | "match" | "quiz" | "color" | "hw" | "teacher" | "parent" | "reward" | "tip" | "miss" | "info";

const VARIANT_STYLES: Record<Variant, { bg: string; border: string; titleColor: string }> = {
  warm:    { bg: "#FFF8E1", border: "#FFD54F", titleColor: "#C8902E" },
  speak:   { bg: "#E8F5E9", border: "#66BB6A", titleColor: "#2E7D32" },
  trace:   { bg: "#E3F2FD", border: "#64B5F6", titleColor: "#0277BD" },
  match:   { bg: "#F3E5F5", border: "#BA68C8", titleColor: "#6A1B9A" },
  quiz:    { bg: "#E8EAF6", border: "#7986CB", titleColor: "#3949AB" },
  color:   { bg: "#FCE4EC", border: "#F48FB1", titleColor: "#AD1457" },
  hw:      { bg: "#E0F7FA", border: "#4DD0E1", titleColor: "#0277BD" },
  teacher: { bg: "#FFF3E0", border: "#FFA726", titleColor: "#E65100" },
  parent:  { bg: "#E8F5E9", border: "#66BB6A", titleColor: "#2E7D32" },
  reward:  { bg: "#FFF9C4", border: "#FDD835", titleColor: "#F9A825" },
  tip:     { bg: "#FFFDE7", border: "#FDD835", titleColor: "#F57F17" },
  miss:    { bg: "#FFEBEE", border: "#EF9A9A", titleColor: "#C62828" },
  info:    { bg: "#E3F2FD", border: "#90CAF9", titleColor: "#1565C0" },
};

interface Props {
  variant?: Variant;
  title?: string;
  icon?: string | ReactNode;
  children: ReactNode;
  className?: string;
}

export default function ActivityBox({ variant = "info", title, icon, children }: Props) {
  const s = VARIANT_STYLES[variant];
  return (
    <div style={{
      background: s.bg,
      border: `2px dashed ${s.border}`,
      borderRadius: 16,
      padding: "14px 16px",
      marginBottom: 14,
    }}>
      {title && (
        <div style={{
          fontSize: ".72rem", fontWeight: 900, textTransform: "uppercase",
          letterSpacing: "1.5px", color: s.titleColor, marginBottom: 8,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          {icon && <span>{icon}</span>}
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
