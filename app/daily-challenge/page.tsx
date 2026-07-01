"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getTodayDateString,
  recordDailyResult,
  computeStreak,
  hasSolvedToday,
  getTodayAttempts,
  awardBadge,
} from "@/lib/gamification";

type Puzzle = {
  type: "gate-sequence" | "algorithm-match" | "term-match";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  link?: { href: string; label: string };
};

const puzzlePool: Puzzle[] = [
  {
    type: "gate-sequence",
    question: "A qubit starts at |0⟩. You apply: H, then X, then H. What state results?",
    options: ["|0⟩", "|1⟩", "(|0⟩+|1⟩)/√2", "(|0⟩-|1⟩)/√2"],
    correctIndex: 1,
    explanation: "H puts it in superposition, X flips the components (which does nothing to equal superposition's symmetry in this specific case... but combined with the second H, the X effectively becomes a phase flip that H converts to |1⟩).",
    link: { href: "/circuit-builder", label: "Try it in the Circuit Builder" },
  },
  {
    type: "algorithm-match",
    question: "Which algorithm offers a quadratic (not exponential) speedup over the best classical methods?",
    options: ["Shor's Algorithm", "Grover's Algorithm", "HHL Algorithm", "Quantum Phase Estimation"],
    correctIndex: 1,
    explanation: "Grover's Algorithm provides a proven quadratic speedup for unstructured search — and this bound is mathematically proven optimal, unlike Shor's exponential speedup for factoring.",
    link: { href: "/algorithms/grovers-algorithm", label: "Grover's Algorithm" },
  },
  {
    type: "term-match",
    question: "What does NISQ stand for?",
    options: [
      "Near-Instant Superposition Quantum",
      "Noisy Intermediate-Scale Quantum",
      "Non-Interactive Sequential Qubits",
      "Networked Integrated Synchronous Qubits",
    ],
    correctIndex: 1,
    explanation: "NISQ — Noisy Intermediate-Scale Quantum — describes today's era of quantum hardware: tens to a few thousand qubits, too noisy for the most dramatic promised applications.",
    link: { href: "/dictionary/nisq", label: "NISQ explained" },
  },
  {
    type: "algorithm-match",
    question: "Which algorithm is most credible for near-term quantum chemistry simulation?",
    options: ["QAOA", "VQE", "Shor's Algorithm", "BB84 Protocol"],
    correctIndex: 1,
    explanation: "VQE (Variational Quantum Eigensolver) is a hybrid quantum-classical algorithm specifically designed for finding molecular ground-state energies on near-term, noisy hardware.",
    link: { href: "/algorithms/vqe", label: "VQE Algorithm" },
  },
  {
    type: "term-match",
    question: "What does measuring a qubit in superposition actually do?",
    options: [
      "Reveals a hidden value that was always there",
      "Causes it to collapse to one definite random outcome",
      "Splits it into two separate qubits",
      "Has no effect on the qubit's state",
    ],
    correctIndex: 1,
    explanation: "Measurement causes genuine collapse — the outcome wasn't predetermined, it becomes definite at the moment of measurement, with probabilities given by the squared amplitudes.",
    link: { href: "/dictionary/measurement-collapse", label: "Measurement Collapse" },
  },
  {
    type: "gate-sequence",
    question: "What two gates, applied in sequence to two qubits starting at |00⟩, create the Bell state?",
    options: ["X then Z", "H then CNOT", "CNOT then H", "Z then X"],
    correctIndex: 1,
    explanation: "Hadamard on the first qubit creates superposition, then CNOT entangles it with the second qubit — the standard recipe for a Bell state.",
    link: { href: "/dictionary/bell-state", label: "Bell State explained" },
  },
  {
    type: "algorithm-match",
    question: "Which company pioneered trapped-ion QCCD architecture with the highest published gate fidelity?",
    options: ["D-Wave", "Quantinuum", "Xanadu", "Pasqal"],
    correctIndex: 1,
    explanation: "Quantinuum's QCCD (Quantum Charge-Coupled Device) trapped-ion architecture has achieved some of the highest published two-qubit gate fidelities of any quantum hardware platform.",
    link: { href: "/companies/quantinuum", label: "Quantinuum profile" },
  },
  {
    type: "term-match",
    question: "What is the 'harvest now, decrypt later' threat?",
    options: [
      "Quantum computers stealing classical computing resources",
      "Adversaries storing encrypted data today to decrypt once quantum computers exist",
      "A type of quantum error correction",
      "A vulnerability in quantum key distribution",
    ],
    correctIndex: 1,
    explanation: "This describes adversaries intercepting and storing currently-encrypted data, betting that future quantum computers running Shor's Algorithm could eventually decrypt it.",
    link: { href: "/dictionary/harvest-now-decrypt-later", label: "Harvest Now, Decrypt Later" },
  },
  {
    type: "algorithm-match",
    question: "Which 1994 algorithm transformed quantum computing into a national security priority?",
    options: ["Grover's Algorithm", "Shor's Algorithm", "Deutsch-Jozsa Algorithm", "HHL Algorithm"],
    correctIndex: 1,
    explanation: "Shor's Algorithm proved a quantum computer could factor large integers exponentially faster than classical methods — directly threatening RSA encryption.",
    link: { href: "/algorithms/shors-algorithm", label: "Shor's Algorithm" },
  },
  {
    type: "term-match",
    question: "What's the key difference between superposition and classical uncertainty?",
    options: [
      "There is no real difference",
      "Superposition states can interfere with each other; classical uncertainty cannot",
      "Superposition only applies to large systems",
      "Classical uncertainty is faster to compute",
    ],
    correctIndex: 1,
    explanation: "Superposition allows quantum interference — amplitudes can combine constructively or destructively — which classical probability simply cannot do.",
    link: { href: "/dictionary/quantum-interference", label: "Quantum Interference" },
  },
];

// Deterministic daily puzzle selection — same puzzle for everyone on the same date
function getPuzzleForDate(dateStr: string): Puzzle {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) % 1000003;
  }
  return puzzlePool[Math.abs(hash) % puzzlePool.length];
}

export default function DailyChallengePage() {
  const [today, setToday] = useState("");
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streak, setStreak] = useState({ current: 0, best: 0 });
  const [alreadySolved, setAlreadySolved] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const dateStr = getTodayDateString();
    setToday(dateStr);
    setPuzzle(getPuzzleForDate(dateStr));
    setStreak(computeStreak());
    setAlreadySolved(hasSolvedToday());
    setAttempts(getTodayAttempts());
  }, []);

  const handleSubmit = () => {
    if (selected === null || !puzzle) return;
    const correct = selected === puzzle.correctIndex;
    setIsCorrect(correct);
    setSubmitted(true);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    const newStreak = recordDailyResult(correct, newAttempts);
    setStreak(newStreak);

    if (correct) {
      awardBadge("first-daily-solve");
      if (newStreak.current >= 3) awardBadge("streak-3");
      if (newStreak.current >= 7) awardBadge("streak-7");
      if (newStreak.current >= 30) awardBadge("streak-30");
      setAlreadySolved(true);
    }
  };

  const tryAgain = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const shareText = puzzle
    ? `QuantumAtlas Daily Challenge — ${today}\n${isCorrect ? "✅ Solved" : "Attempted"} in ${attempts} ${attempts === 1 ? "try" : "tries"} | 🔥 ${streak.current}-day streak\nquantumatlas.in/daily-challenge`
    : "";

  if (!puzzle) return null;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        {today}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Daily Quantum Challenge
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        One new quantum computing puzzle every day. Same puzzle for everyone,
        build your streak.
      </p>

      {/* Streak display */}
      <div className="flex gap-4 mb-10">
        <div className="rounded-xl border border-line bg-surface px-5 py-3 text-center">
          <p className="font-mono text-xl font-bold text-collapse">🔥 {streak.current}</p>
          <p className="text-xs text-ink-soft">Current streak</p>
        </div>
        <div className="rounded-xl border border-line bg-surface px-5 py-3 text-center">
          <p className="font-mono text-xl font-bold text-quantum">🏆 {streak.best}</p>
          <p className="text-xs text-ink-soft">Best streak</p>
        </div>
      </div>

      {alreadySolved && !submitted ? (
        <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl text-center">
          <p className="text-3xl mb-3">✅</p>
          <h2 className="font-serif text-xl font-semibold text-ink mb-2">
            Already solved today's challenge!
          </h2>
          <p className="text-sm text-ink-muted mb-4">
            Come back tomorrow for a new puzzle. Your streak is safe.
          </p>
          <Link href="/glossary" className="text-sm text-quantum hover:underline">
            → Browse the Acronym Glossary while you wait
          </Link>
        </div>
      ) : (
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-wide text-quantum bg-quantum-50 rounded-full px-2 py-0.5">
              {puzzle.type.replace("-", " ")}
            </span>
            <h2 className="font-serif text-xl font-semibold text-ink mt-3 mb-6 leading-snug">
              {puzzle.question}
            </h2>
            <div className="space-y-2">
              {puzzle.options.map((opt, i) => {
                const isSelected = selected === i;
                const showResult = submitted;
                const isThisCorrect = i === puzzle.correctIndex;
                let style = "border-line bg-paper text-ink-muted hover:border-quantum";
                if (showResult && isThisCorrect) style = "border-quantum bg-quantum-50 text-ink";
                else if (showResult && isSelected && !isThisCorrect) style = "border-collapse bg-collapse-50 text-ink";
                else if (isSelected) style = "border-quantum bg-quantum-50 text-ink";

                return (
                  <button
                    key={i}
                    onClick={() => !submitted && setSelected(i)}
                    disabled={submitted}
                    className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all ${style}`}
                  >
                    {opt}
                    {showResult && isThisCorrect && <span className="ml-2">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="w-full rounded-full bg-quantum text-white py-3.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <div className="space-y-4">
              <div className={`rounded-xl p-5 ${isCorrect ? "bg-quantum-50 border border-quantum-100" : "bg-collapse-50 border border-collapse"}`}>
                <p className={`font-semibold mb-2 ${isCorrect ? "text-quantum" : "text-collapse"}`}>
                  {isCorrect ? "✅ Correct!" : "Not quite — here's the explanation"}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed mb-3">{puzzle.explanation}</p>
                {puzzle.link && (
                  <Link href={puzzle.link.href} className="text-sm text-quantum hover:underline">
                    → {puzzle.link.label}
                  </Link>
                )}
              </div>

              {!isCorrect && (
                <button
                  onClick={tryAgain}
                  className="w-full rounded-full border border-line bg-surface py-3 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
                >
                  Try Again
                </button>
              )}

              {isCorrect && (
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full bg-quantum text-white py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors"
                >
                  Share Your Streak
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep learning</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center</Link>
          <Link href="/badges" className="text-quantum hover:underline">→ Your Badges & Achievements</Link>
          <Link href="/glossary" className="text-quantum hover:underline">→ Acronym Glossary</Link>
        </div>
      </div>
    </div>
  );
}
