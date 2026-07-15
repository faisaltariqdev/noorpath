import type { ColorGroup, ColorGroupKey } from "./types";

export const COLOR_GROUPS: Record<ColorGroupKey, ColorGroup> = {
  red:    { bg: "#C62828", light: "#FFEBEE", text: "#C62828" },
  blue:   { bg: "#1565C0", light: "#E3F2FD", text: "#1565C0" },
  green:  { bg: "#2E7D32", light: "#E8F5E9", text: "#2E7D32" },
  orange: { bg: "#E65100", light: "#FFF3E0", text: "#E65100" },
  purple: { bg: "#6A1B9A", light: "#F3E5F5", text: "#6A1B9A" },
  teal:   { bg: "#00695C", light: "#E0F2F1", text: "#00695C" },
  pink:   { bg: "#AD1457", light: "#FCE4EC", text: "#AD1457" },
  grey:   { bg: "#37474F", light: "#ECEFF1", text: "#37474F" },
  green2: { bg: "#1B6B3A", light: "#D4EDDA", text: "#1B6B3A" },
  blue2:  { bg: "#01579B", light: "#E1F5FE", text: "#01579B" },
};
