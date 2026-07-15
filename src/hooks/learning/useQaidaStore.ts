"use client";
import { useState, useCallback, useEffect } from "react";
import type { ScreenId } from "@/data/learning/types";

const STORAGE_KEY = "np_qaida_v1";

interface StoredState {
  done: number[];
  stars: Record<string, number>;
}

function loadState(): StoredState {
  if (typeof window === "undefined") return { done: [], stars: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { done: [], stars: {} };
    return JSON.parse(raw) as StoredState;
  } catch {
    return { done: [], stars: {} };
  }
}

function saveState(state: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch { /* storage full or private mode */ }
}

export function useQaidaStore() {
  const [screen, setScreenRaw] = useState<ScreenId>("cover");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [done, setDone] = useState<Set<number>>(new Set());
  const [stars, setStars] = useState<Record<string, number>>({});

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = loadState();
    setDone(new Set(stored.done));
    setStars(stored.stars);
  }, []);

  const navigate = useCallback((id: ScreenId) => {
    setScreenRaw(id);
    setSidebarOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const markDone = useCallback((letterId: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.add(letterId);
      const stored = loadState();
      stored.done = Array.from(next);
      saveState(stored);
      return next;
    });
  }, []);

  const toggleDone = useCallback((letterId: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(letterId)) next.delete(letterId);
      else next.add(letterId);
      const stored = loadState();
      stored.done = Array.from(next);
      saveState(stored);
      return next;
    });
  }, []);

  const setStarCount = useCallback((screenId: string, count: number) => {
    setStars((prev) => {
      const next = { ...prev, [screenId]: count };
      const stored = loadState();
      stored.stars = next;
      saveState(stored);
      return next;
    });
  }, []);

  const progress = done.size / 28;

  return {
    screen, navigate,
    sidebarOpen, setSidebarOpen,
    done, markDone, toggleDone,
    stars, setStarCount,
    progress,
  };
}
