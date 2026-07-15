"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useQaidaStore } from "@/hooks/learning/useQaidaStore";

// Shell
import QaidaTopbar from "@/components/learning/QaidaTopbar";
import QaidaSidebar from "@/components/learning/QaidaSidebar";
import QaidaProgressBar from "@/components/learning/QaidaProgressBar";

// Screens
import CoverScreen from "@/components/learning/screens/CoverScreen";
import TocScreen from "@/components/learning/screens/TocScreen";
import HowToScreen from "@/components/learning/screens/HowToScreen";
import TeacherGuideScreen from "@/components/learning/screens/TeacherGuideScreen";
import ParentGuideScreen from "@/components/learning/screens/ParentGuideScreen";
import PlannerScreen from "@/components/learning/screens/PlannerScreen";
import AlphabetChartScreen from "@/components/learning/screens/AlphabetChartScreen";
import LetterFamiliesScreen from "@/components/learning/screens/LetterFamiliesScreen";
import FlashcardModeScreen from "@/components/learning/screens/FlashcardModeScreen";
import ProgressScreen from "@/components/learning/screens/ProgressScreen";
import LetterLessonScreen from "@/components/learning/screens/LetterLessonScreen";
import HarakatIntroScreen from "@/components/learning/screens/HarakatIntroScreen";
import HarakatLessonScreen from "@/components/learning/screens/HarakatLessonScreen";
import DiacriticsScreen from "@/components/learning/screens/DiacriticsScreen";
import MaddScreen from "@/components/learning/screens/MaddScreen";
import ReadingScreen from "@/components/learning/screens/ReadingScreen";
import TajweedIntroScreen from "@/components/learning/screens/TajweedIntroScreen";
import GrandRevisionScreen from "@/components/learning/screens/GrandRevisionScreen";
import AssessmentScreen from "@/components/learning/screens/AssessmentScreen";
import CertificateScreen from "@/components/learning/screens/CertificateScreen";

import type { ScreenId } from "@/data/learning/types";

const READING_SCREENS = new Set(["joining", "compound", "reading-words", "reading-stories", "reading-sentences", "quran-practice"]);
const DIACRITICS_SCREENS = new Set(["tanween", "sukoon", "shaddah"]);
const HARAKAT_LESSON_SCREENS = new Set(["fatha", "kasra", "damma"]);

function getLetterIdFromScreen(screen: ScreenId): number | null {
  if (screen.startsWith("letter-")) {
    const n = parseInt(screen.replace("letter-", ""));
    return isNaN(n) ? null : n;
  }
  return null;
}

function renderScreen(
  screen: ScreenId,
  navigate: (id: ScreenId) => void,
  done: Set<number>,
  markDone: (id: number) => void,
  toggleDone: (id: number) => void,
  setStarCount: (id: string, count: number) => void,
) {
  const letterId = getLetterIdFromScreen(screen);

  if (letterId !== null) {
    return <LetterLessonScreen key={screen} letterId={letterId} onNavigate={navigate} done={done} markDone={markDone} onRate={setStarCount} />;
  }
  if (HARAKAT_LESSON_SCREENS.has(screen)) {
    return <HarakatLessonScreen key={screen} harakatId={screen as "fatha" | "kasra" | "damma"} onNavigate={navigate} onRate={setStarCount} />;
  }
  if (DIACRITICS_SCREENS.has(screen)) {
    return <DiacriticsScreen key={screen} id={screen as "tanween" | "sukoon" | "shaddah"} onNavigate={navigate} onRate={setStarCount} />;
  }
  if (READING_SCREENS.has(screen)) {
    return <ReadingScreen key={screen} screenId={screen as Parameters<typeof ReadingScreen>[0]["screenId"]} onNavigate={navigate} onRate={setStarCount} />;
  }

  switch (screen) {
    case "cover":         return <CoverScreen onNavigate={navigate} />;
    case "toc":           return <TocScreen onNavigate={navigate} done={done} />;
    case "how-to":        return <HowToScreen onNavigate={navigate} />;
    case "teacher-guide": return <TeacherGuideScreen onNavigate={navigate} />;
    case "parent-guide":  return <ParentGuideScreen onNavigate={navigate} />;
    case "planner":       return <PlannerScreen onNavigate={navigate} />;
    case "alphabet-chart":return <AlphabetChartScreen onNavigate={navigate} done={done} />;
    case "letter-families":return <LetterFamiliesScreen onNavigate={navigate} />;
    case "flashcards":    return <FlashcardModeScreen onNavigate={navigate} />;
    case "progress":      return <ProgressScreen onNavigate={navigate} done={done} toggleDone={toggleDone} />;
    case "harakat-intro": return <HarakatIntroScreen onNavigate={navigate} />;
    case "madd":          return <MaddScreen onNavigate={navigate} onRate={setStarCount} />;
    case "tajweed-intro": return <TajweedIntroScreen onNavigate={navigate} onRate={setStarCount} />;
    case "revision":      return <GrandRevisionScreen onNavigate={navigate} done={done} />;
    case "assessment":    return <AssessmentScreen onNavigate={navigate} done={done} />;
    case "certificate":   return <CertificateScreen onNavigate={navigate} done={done} />;
    default:              return <CoverScreen onNavigate={navigate} />;
  }
}

export default function NooraniQaidaPage() {
  const { screen, navigate, sidebarOpen, setSidebarOpen, done, markDone, toggleDone, stars, setStarCount, progress } = useQaidaStore();

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#FFFEF8", minHeight: "100vh" }}>
      {/* Topbar */}
      <QaidaTopbar
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        onNavigate={navigate}
        done={done}
      />

      {/* Progress bar */}
      <QaidaProgressBar progress={progress} />

      {/* Sidebar */}
      <QaidaSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={navigate}
        screen={screen}
        done={done}
      />

      {/* Main content */}
      <main style={{ paddingTop: 62, minHeight: "100vh" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {renderScreen(screen, navigate, done, markDone, toggleDone, setStarCount)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        style={{
          position: "fixed", bottom: 22, right: 18, zIndex: 999,
          width: 44, height: 44, borderRadius: "50%",
          background: "#1B6B3A", color: "#fff", border: "none",
          fontSize: "1rem", cursor: "pointer",
          boxShadow: "0 3px 12px rgba(0,0,0,.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        ↑
      </button>
    </div>
  );
}
