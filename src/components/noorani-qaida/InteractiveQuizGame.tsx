"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, BookOpen } from "lucide-react";
import { TRIAL } from "@/lib/academyFacts";

export interface QuizQuestion {
  question: string;
  arabic?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export default function InteractiveQuizGame({
  title,
  questions,
}: {
  title: string;
  questions: QuizQuestion[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f8fbf9 0%, #ffffff 100%)",
        border: "1.5px solid rgba(10,110,79,.16)",
        borderRadius: "16px",
        padding: "clamp(1.2rem, 3vw, 2rem)",
        boxShadow: "0 8px 24px rgba(10,110,79,.06)",
        margin: "1.5rem 0",
      }}
    >
      {!isCompleted ? (
        <div>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              paddingBottom: ".75rem",
              borderBottom: "1px solid rgba(0,0,0,.07)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: ".78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--emerald)",
                  letterSpacing: ".5px",
                }}
              >
                Interactive Quiz
              </span>
              <h3 style={{ fontSize: "1.1rem", margin: "2px 0 0", color: "var(--charcoal)" }}>
                {title}
              </h3>
            </div>
            <div
              style={{
                fontSize: ".88rem",
                fontWeight: 700,
                background: "rgba(10,110,79,.08)",
                color: "var(--emerald)",
                padding: "4px 12px",
                borderRadius: "20px",
              }}
            >
              Question {currentIndex + 1} of {questions.length}
            </div>
          </div>

          {/* Progress bar */}
          <div
            style={{
              height: "6px",
              width: "100%",
              background: "#e5e7eb",
              borderRadius: "4px",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
                background: "var(--emerald)",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          {/* Question Text */}
          <div style={{ marginBottom: "1.25rem" }}>
            {currentQ.arabic && (
              <div
                style={{
                  fontSize: "2.4rem",
                  fontFamily: "'Amiri', serif",
                  direction: "rtl",
                  textAlign: "center",
                  color: "var(--charcoal)",
                  background: "rgba(10,110,79,.04)",
                  padding: "16px",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                  border: "1px dashed rgba(10,110,79,.2)",
                }}
              >
                {currentQ.arabic}
              </div>
            )}
            <p
              style={{
                fontSize: "1.06rem",
                fontWeight: 650,
                color: "var(--charcoal)",
                lineHeight: 1.5,
              }}
            >
              {currentQ.question}
            </p>
          </div>

          {/* Options */}
          <div style={{ display: "grid", gap: ".75rem", marginBottom: "1.5rem" }}>
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let bg = "#ffffff";
              let border = "1px solid #d1d5db";
              let textColor = "#1f2937";

              if (isAnswered) {
                if (isCorrect) {
                  bg = "rgba(16, 185, 129, 0.12)";
                  border = "2px solid #10b981";
                  textColor = "#065f46";
                } else if (isSelected) {
                  bg = "rgba(239, 68, 68, 0.12)";
                  border = "2px solid #ef4444";
                  textColor = "#991b1b";
                }
              } else if (isSelected) {
                border = "2px solid var(--emerald)";
              }

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 18px",
                    borderRadius: "10px",
                    background: bg,
                    border,
                    color: textColor,
                    fontSize: ".96rem",
                    fontWeight: isSelected || (isAnswered && isCorrect) ? 700 : 500,
                    textAlign: "left",
                    cursor: isAnswered ? "default" : "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: ".8rem",
                        fontWeight: 700,
                        background: isAnswered && isCorrect ? "#10b981" : "#e5e7eb",
                        color: isAnswered && isCorrect ? "#fff" : "#4b5563",
                      }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>
                  {isAnswered && (
                    <span>
                      {isCorrect && <CheckCircle2 size={20} color="#10b981" />}
                      {isSelected && !isCorrect && <XCircle size={20} color="#ef4444" />}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div
              style={{
                background: selectedOption === currentQ.correctIndex ? "rgba(16, 185, 129, 0.08)" : "rgba(239, 68, 68, 0.08)",
                borderLeft: `4px solid ${selectedOption === currentQ.correctIndex ? "#10b981" : "#ef4444"}`,
                padding: "12px 16px",
                borderRadius: "8px",
                marginBottom: "1.25rem",
                fontSize: ".92rem",
                lineHeight: 1.6,
                color: "var(--charcoal)",
              }}
            >
              <strong>{selectedOption === currentQ.correctIndex ? "Correct! " : "Incorrect. "}</strong>
              {currentQ.explanation}
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary-np"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 24px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: ".94rem",
                  cursor: "pointer",
                }}
              >
                <span>{currentIndex < questions.length - 1 ? "Next Question" : "See Your Results"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results View */
        <div style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              background: "rgba(10,110,79,.1)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              color: "var(--emerald)",
            }}
          >
            <Trophy size={36} />
          </div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 750, color: "var(--charcoal)", marginBottom: ".5rem" }}>
            Quiz Completed!
          </h3>
          <p style={{ fontSize: "1.1rem", color: "var(--slate)", marginBottom: "1.25rem" }}>
            You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>!
          </p>

          <p style={{ maxWidth: 540, margin: "0 auto 1.75rem", fontSize: ".95rem", color: "var(--slate)", lineHeight: 1.6 }}>
            {score === questions.length
              ? "Masha'Allah! You showed an outstanding grasp of this Noorani Qaida concept. Ready to practice reading real Quranic verses?"
              : "Great effort! Review the explanations above or practise with a live teacher to perfect your pronunciation and makharij."}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={handleReset}
              className="btn-outline-np"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: "50px",
                fontSize: ".92rem",
                fontWeight: 650,
                cursor: "pointer",
              }}
            >
              <RotateCcw size={15} /> Retake Quiz
            </button>
            <Link
              href="/courses/noorani-qaida-online"
              className="btn-primary-np"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 22px",
                borderRadius: "50px",
                fontSize: ".92rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <BookOpen size={16} /> Start {TRIAL.classes} Free Trial Sessions
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
