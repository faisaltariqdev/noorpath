"use client";
import { useState, useCallback, useEffect } from "react";
import type { ScreenId } from "@/data/learning/types";

const STORAGE_KEY = "np_qaida_v2";

export interface Badge {
  id: string;
  label: string;
  icon: string;
  earned: boolean;
}

const DEFAULT_BADGES: Badge[] = [
  { id: "first_letter",  label: "First Steps",       icon: "🌱", earned: false },
  { id: "five_letters",  label: "Alphabet Starter",   icon: "⭐", earned: false },
  { id: "ten_letters",   label: "Half Way There",     icon: "🎯", earned: false },
  { id: "twenty_letters",label: "Almost a Scholar",   icon: "🏅", earned: false },
  { id: "all_letters",   label: "Alphabet Master",    icon: "🏆", earned: false },
  { id: "harakat",       label: "Vowel Expert",       icon: "🎵", earned: false },
  { id: "reading",       label: "Quran Reader",       icon: "📖", earned: false },
  { id: "streak_3",      label: "3-Day Streak",       icon: "🔥", earned: false },
  { id: "streak_7",      label: "Weekly Champion",    icon: "💪", earned: false },
  { id: "certificate",   label: "Qaida Complete",     icon: "🎓", earned: false },
];

interface StoredState {
  done: number[];
  stars: Record<string, number>;
  xp: number;
  coins: number;
  level: number;
  badges: Badge[];
  streak: number;
  lastActiveDate: string;
}

function loadState(): StoredState {
  if (typeof window === "undefined") return getDefault();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefault();
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    return { ...getDefault(), ...parsed };
  } catch {
    return getDefault();
  }
}

function getDefault(): StoredState {
  return {
    done: [], stars: {}, xp: 0, coins: 0, level: 1,
    badges: DEFAULT_BADGES, streak: 0,
    lastActiveDate: "",
  };
}

function saveState(state: StoredState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* noop */ }
}

function calcLevel(xp: number) { return Math.floor(xp / 100) + 1; }

export interface LevelCompleteData {
  xpGained: number;
  coinsGained: number;
  newBadges: Badge[];
  leveledUp: boolean;
  newLevel: number;
  letterName?: string;
}

export function useQaidaStore() {
  const [screen, setScreenRaw] = useState<ScreenId>("cover");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [done, setDone] = useState<Set<number>>(new Set());
  const [stars, setStars] = useState<Record<string, number>>({});
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState<Badge[]>(DEFAULT_BADGES);
  const [streak, setStreak] = useState(0);
  const [levelCompleteData, setLevelCompleteData] = useState<LevelCompleteData | null>(null);
  const [mascotMessage, setMascotMessage] = useState<string | null>(null);

  useEffect(() => {
    const s = loadState();
    setDone(new Set(s.done));
    setStars(s.stars);
    setXp(s.xp);
    setCoins(s.coins);
    setLevel(s.level);
    setBadges(s.badges);
    // Streak calculation
    const today = new Date().toDateString();
    const last = s.lastActiveDate;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    let newStreak = s.streak;
    if (last === today) {
      newStreak = s.streak;
    } else if (last === yesterday) {
      newStreak = s.streak + 1;
    } else if (last !== today) {
      newStreak = 1;
    }
    setStreak(newStreak);
    const updated = { ...s, streak: newStreak, lastActiveDate: today };
    saveState(updated);
  }, []);

  const navigate = useCallback((id: ScreenId) => {
    setScreenRaw(id);
    setSidebarOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const showMascotMsg = useCallback((msg: string) => {
    setMascotMessage(msg);
    setTimeout(() => setMascotMessage(null), 3500);
  }, []);

  const markDone = useCallback((letterId: number, letterName?: string) => {
    setDone((prev) => {
      if (prev.has(letterId)) return prev;
      const next = new Set(prev);
      next.add(letterId);

      const xpGain = 50;
      const coinGain = 20;

      setXp((prevXp) => {
        const newXp = prevXp + xpGain;
        const newLevel = calcLevel(newXp);
        const leveled = newLevel > calcLevel(prevXp);

        // Check badges
        const newBadgesEarned: Badge[] = [];
        setBadges((prevBadges) => {
          const updated = prevBadges.map((b) => {
            if (b.earned) return b;
            let earned = false;
            if (b.id === "first_letter" && next.size >= 1) earned = true;
            if (b.id === "five_letters" && next.size >= 5) earned = true;
            if (b.id === "ten_letters" && next.size >= 10) earned = true;
            if (b.id === "twenty_letters" && next.size >= 20) earned = true;
            if (b.id === "all_letters" && next.size >= 28) earned = true;
            if (earned) newBadgesEarned.push({ ...b, earned: true });
            return earned ? { ...b, earned: true } : b;
          });
          const stored = loadState();
          saveState({ ...stored, badges: updated, xp: newXp, level: newLevel, done: Array.from(next) });
          return updated;
        });

        setLevel(newLevel);
        setLevelCompleteData({ xpGained: xpGain, coinsGained: coinGain, newBadges: newBadgesEarned, leveledUp: leveled, newLevel, letterName });

        return newXp;
      });

      setCoins((c) => {
        const nc = c + coinGain;
        return nc;
      });

      const stored = loadState();
      saveState({ ...stored, done: Array.from(next) });
      return next;
    });
  }, []);

  const toggleDone = useCallback((letterId: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(letterId)) next.delete(letterId); else next.add(letterId);
      const stored = loadState();
      saveState({ ...stored, done: Array.from(next) });
      return next;
    });
  }, []);

  const setStarCount = useCallback((screenId: string, count: number) => {
    setStars((prev) => {
      const next = { ...prev, [screenId]: count };
      const stored = loadState();
      saveState({ ...stored, stars: next });
      return next;
    });
    const xpGain = count * 5;
    setXp((prev) => { const n = prev + xpGain; setLevel(calcLevel(n)); return n; });
    showMascotMsg(count >= 4 ? "MashaAllah! ⭐⭐⭐" : count >= 2 ? "Amazing work! 🌟" : "Keep going! 💪");
  }, [showMascotMsg]);

  const dismissLevelComplete = useCallback(() => setLevelCompleteData(null), []);

  const earnCoins = useCallback((amount: number) => {
    setCoins((c) => { const n = c + amount; const s = loadState(); saveState({ ...s, coins: n }); return n; });
  }, []);

  const progress = done.size / 28;
  const xpInCurrentLevel = xp % 100;
  const xpForNextLevel = 100;

  return {
    screen, navigate,
    sidebarOpen, setSidebarOpen,
    done, markDone, toggleDone,
    stars, setStarCount,
    xp, xpInCurrentLevel, xpForNextLevel,
    coins, level,
    badges,
    streak,
    progress,
    levelCompleteData, dismissLevelComplete,
    mascotMessage, showMascotMsg,
    earnCoins,
  };
}
