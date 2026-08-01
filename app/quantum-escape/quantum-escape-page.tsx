"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ── Types ──
type GameScreen = "intro" | "playing" | "level-complete" | "game-complete";

type PuzzleType = "superposition" | "entanglement" | "tunneling" | "measurement" | "interference" | "boss";

type Level = {
  id: number;
  title: string;
  concept: PuzzleType;
  story: string;
  puzzle: string;
  hint: string;
  options: string[];
  correct: number;
  explanation: string;
  conceptLink: string;
  conceptLabel: string;
};

// ── 10 Levels ──
const levels: Level[] = [
  {
    id: 1,
    title: "The First Door",
    concept: "superposition",
    story: "Year 2055. You're trapped in QuantumLab-7 after an explosion. The exit door has a quantum lock. The security AI says: 'This door exists in a superposition of locked and unlocked.' You need to understand superposition to proceed.",
    puzzle: "The quantum lock displays: |ψ⟩ = α|locked⟩ + β|unlocked⟩. The system tells you the probability of 'unlocked' is 25%. What is |β|²?",
    hint: "In quantum mechanics, |α|² + |β|² = 1. Probabilities must sum to 1.",
    options: ["0.25", "0.50", "0.75", "0.125"],
    correct: 0,
    explanation: "|β|² directly gives the probability of measuring the 'unlocked' state. If the probability is 25%, then |β|² = 0.25. The amplitudes squared give probabilities.",
    conceptLink: "/dictionary/superposition",
    conceptLabel: "Superposition explained",
  },
  {
    id: 2,
    title: "Schrödinger's Keypad",
    concept: "measurement",
    story: "The door cracked open — but just barely. You reach a second door with a quantum keypad. 'Do not measure prematurely,' warns a flickering display. 'Observation collapses the state.'",
    puzzle: "The keypad has a qubit prepared as |+⟩ = (|0⟩+|1⟩)/√2. If you measure it in the computational basis, what happens?",
    hint: "Measurement always collapses a superposition to a definite eigenstate.",
    options: [
      "It stays as (|0⟩+|1⟩)/√2 — measurement doesn't disturb it",
      "It collapses to either |0⟩ or |1⟩ with 50% probability each",
      "It always collapses to |0⟩",
      "It collapses to |1⟩ with 100% probability",
    ],
    correct: 1,
    explanation: "Measuring a qubit in the |+⟩ state collapses it to |0⟩ or |1⟩ with equal (50%) probability. The act of measurement is irreversible — the superposition is destroyed.",
    conceptLink: "/dictionary/measurement-collapse",
    conceptLabel: "Measurement collapse",
  },
  {
    id: 3,
    title: "The Hadamard Gate",
    concept: "superposition",
    story: "A console blocks the corridor. 'Apply the correct gate to create superposition from a classical state,' it demands. The lab's automated defenses are closing in.",
    puzzle: "You need to put qubit |0⟩ into equal superposition. Which single gate achieves this?",
    hint: "One gate creates (|0⟩+|1⟩)/√2 from |0⟩. It is named after a mathematician.",
    options: [
      "Pauli-X gate (NOT gate)",
      "Pauli-Z gate (phase flip)",
      "Hadamard (H) gate",
      "CNOT gate",
    ],
    correct: 2,
    explanation: "The Hadamard gate transforms |0⟩ → (|0⟩+|1⟩)/√2 — equal superposition. It's the most fundamental gate for creating superposition and is used at the start of nearly every quantum algorithm.",
    conceptLink: "/dictionary/quantum-gate",
    conceptLabel: "Quantum Gates",
  },
  {
    id: 4,
    title: "Entangled Twins",
    concept: "entanglement",
    story: "The next chamber has two quantum locks on opposite sides of the room — 50 meters apart. A sign reads: 'These locks share a Bell state. Unlock one and the other responds instantly.' You realize this is entanglement.",
    puzzle: "Two qubits are in the Bell state |Φ+⟩ = (|00⟩+|11⟩)/√2. You measure the first qubit and get |0⟩. What will you measure on the second qubit?",
    hint: "In a Bell state, the two qubits are perfectly correlated.",
    options: [
      "Always |0⟩",
      "Always |1⟩",
      "Random — 50% chance of either",
      "|0⟩ or |1⟩ depending on measurement basis",
    ],
    correct: 0,
    explanation: "In the Bell state |Φ+⟩ = (|00⟩+|11⟩)/√2, both qubits are always in the same state. Measuring the first qubit as |0⟩ instantly collapses the second to |0⟩ as well — regardless of distance.",
    conceptLink: "/dictionary/bell-state",
    conceptLabel: "Bell State",
  },
  {
    id: 5,
    title: "No-Clone Protocol",
    concept: "entanglement",
    story: "The lab's security system challenges you: 'Copy my quantum key and I'll let you pass.' You realize this is a trap — the no-cloning theorem!",
    puzzle: "The system asks: 'Can you create an exact copy of an unknown quantum state |ψ⟩?'",
    hint: "This is one of the most fundamental theorems in quantum information.",
    options: [
      "Yes — use a CNOT gate to copy it",
      "Yes — measure it first, then recreate",
      "No — the no-cloning theorem proves it's impossible",
      "Yes — but only if the state is |0⟩ or |1⟩",
    ],
    correct: 2,
    explanation: "The no-cloning theorem (proved by Wootters and Zurek, 1982) shows it's impossible to create an identical copy of an arbitrary unknown quantum state. This is a direct consequence of quantum linearity. It's also what makes quantum cryptography secure.",
    conceptLink: "/dictionary/no-cloning-theorem",
    conceptLabel: "No-Cloning Theorem",
  },
  {
    id: 6,
    title: "Quantum Teleporter",
    concept: "entanglement",
    story: "You find a quantum teleporter that could transport your ID card to the exit — but the instructions are scrambled. 'Teleportation requires entanglement PLUS classical communication,' a damaged screen reads.",
    puzzle: "Quantum teleportation transfers a quantum state from Alice to Bob. What resources are required?",
    hint: "Teleportation uses both quantum and classical channels.",
    options: [
      "Only a quantum channel — no classical communication needed",
      "Pre-shared entanglement + 2 classical bits",
      "A direct quantum wire between sender and receiver",
      "Faster-than-light signaling",
    ],
    correct: 1,
    explanation: "Quantum teleportation requires: (1) a pre-shared entangled pair, and (2) 2 classical bits communicated from Alice to Bob. Without the classical bits, Bob cannot reconstruct the state. This is why teleportation doesn't violate the speed of light.",
    conceptLink: "/learn/quantum-teleportation-lesson",
    conceptLabel: "Quantum Teleportation",
  },
  {
    id: 7,
    title: "The Quantum Tunnel",
    concept: "tunneling",
    story: "A solid wall of quantum-locked material blocks the only exit corridor. But in the quantum world, particles can tunnel through barriers they classically couldn't overcome. The lab's own structure could be your escape route.",
    puzzle: "Quantum tunneling allows a particle to pass through a potential barrier even if its energy is less than the barrier height. What determines the probability of tunneling?",
    hint: "Think about how barrier properties affect tunneling probability.",
    options: [
      "Only the particle's speed — faster particles tunnel more",
      "The barrier width and height — thinner/lower barriers increase tunneling probability",
      "The particle's charge — only charged particles tunnel",
      "Temperature only — tunneling only happens at absolute zero",
    ],
    correct: 1,
    explanation: "Tunneling probability depends exponentially on barrier width and height. Thinner, lower barriers give higher tunneling probability. This is the principle behind scanning tunneling microscopes and tunnel diodes — and why very thin barriers in quantum hardware cause unwanted energy leakage.",
    conceptLink: "/dictionary/decoherence",
    conceptLabel: "Quantum Effects in Hardware",
  },
  {
    id: 8,
    title: "Interference Corridor",
    concept: "interference",
    story: "The final corridor before the exit is a quantum interference chamber. Two paths lead to the exit door — but only one path constructively interferes to produce a bright exit signal. Choose wrong and destructive interference will seal the door forever.",
    puzzle: "Two quantum paths have amplitudes: Path A = +1/√2, Path B = +1/√2. They combine at the exit. What is the combined probability of reaching the exit?",
    hint: "Add the amplitudes first, then square — not the other way around.",
    options: [
      "50% — each path has 50% so average is 50%",
      "100% — amplitudes add constructively: (1/√2 + 1/√2)² = 2",
      "25% — you must square each then add: (1/2 + 1/2) = 1... wait",
      "0% — interference always cancels",
    ],
    correct: 1,
    explanation: "Quantum amplitudes add before squaring (unlike classical probabilities). Path A amplitude + Path B amplitude = 1/√2 + 1/√2 = 2/√2 = √2. Probability = (√2)² = 2... wait, normalized: each amplitude is 1/2, combined amplitude is 2×(1/2) = 1, probability = 1² = 100%. Constructive interference amplifies the result!",
    conceptLink: "/dictionary/quantum-interference",
    conceptLabel: "Quantum Interference",
  },
  {
    id: 9,
    title: "Error in the System",
    concept: "tunneling",
    story: "Almost out! But the exit door's control system has suffered bit-flip errors from the explosion. The quantum error correction system is asking you to diagnose the error type before it can auto-correct.",
    puzzle: "A qubit that should be in state |0⟩ is now in state |1⟩ after passing through a noisy channel. What type of error occurred and which gate corrects it?",
    hint: "Bit-flip = |0⟩↔|1⟩. Phase-flip = |+⟩↔|-⟩.",
    options: [
      "Phase-flip error — corrected by Pauli-Z gate",
      "Bit-flip error — corrected by Pauli-X gate",
      "Depolarizing error — corrected by Hadamard gate",
      "Measurement error — corrected by repeating the measurement",
    ],
    correct: 1,
    explanation: "A |0⟩ → |1⟩ flip is a bit-flip error, caused by a Pauli-X (NOT) operation acting on the qubit. To correct it, apply another Pauli-X gate, which flips it back. This is the simplest error in quantum error correction — the quantum analog of a classical bit error.",
    conceptLink: "/learn/quantum-error-correction",
    conceptLabel: "Quantum Error Correction",
  },
  {
    id: 10,
    title: "BOSS: The Quantum AI",
    concept: "boss",
    story: "The lab's quantum AI — 'ORACLE' — has locked the final door and won't let you leave. 'Prove you understand quantum computing,' it demands, 'or stay here forever.' ORACLE asks you the hardest question in the lab.",
    puzzle: "ORACLE asks: 'I can factor the number that secures this door in polynomial time. Classical computers would take longer than the age of the universe. What algorithm am I using, and why does it matter for your escape?'",
    hint: "This algorithm threatens RSA encryption and was discovered in 1994.",
    options: [
      "Grover's Algorithm — it searches the keyspace quadratically faster",
      "Shor's Algorithm — it factors integers exponentially faster, breaking the RSA lock",
      "VQE — it finds the ground state energy of the lock's quantum system",
      "QAOA — it approximately optimizes the combination",
    ],
    correct: 1,
    explanation: "ORACLE is running Shor's Algorithm — discovered by Peter Shor in 1994. It factors large integers exponentially faster than any classical algorithm, directly threatening RSA encryption (which secures the door). On a large fault-tolerant quantum computer, it would break RSA-2048 in hours. YOU correctly identified it — the door opens. You escape QuantumLab-7.",
    conceptLink: "/algorithms/shors-algorithm",
    conceptLabel: "Shor's Algorithm",
  },
];

const conceptColors: Record<PuzzleType, string> = {
  superposition: "text-quantum bg-quantum-50 border-quantum-100",
  entanglement: "text-collapse bg-collapse-50",
  tunneling: "text-ink bg-paper border-line",
  measurement: "text-quantum bg-quantum-50",
  interference: "text-collapse bg-collapse-50",
  boss: "text-collapse bg-collapse-50 border-2 border-collapse",
};

const conceptEmoji: Record<PuzzleType, string> = {
  superposition: "⚛",
  entanglement: "🔗",
  tunneling: "🌀",
  measurement: "📡",
  interference: "〰️",
  boss: "🤖",
};

const STORAGE_KEY = "qa_escape_progress";

export default function QuantumEscapePage() {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        setCompletedLevels(data.completed || []);
        setScore(data.score || 0);
      }
    } catch {}
  }, []);

  const saveProgress = useCallback((completed: number[], sc: number) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ completed, score: sc }));
    } catch {}
  }, []);

  const level = levels[currentLevel];

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === level.correct;
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) {
      const pts = showHint ? 5 : 10;
      const newScore = score + pts;
      const newCompleted = [...new Set([...completedLevels, level.id])];
      setScore(newScore);
      setCompletedLevels(newCompleted);
      saveProgress(newCompleted, newScore);
    }
  };

  const handleNext = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel((c) => c + 1);
      setSelected(null);
      setAnswered(false);
      setIsCorrect(false);
      setShowHint(false);
      setScreen("playing");
    } else {
      setScreen("game-complete");
    }
  };

  const handleRetry = () => {
    setSelected(null);
    setAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  const resetGame = () => {
    setCurrentLevel(0);
    setSelected(null);
    setAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setShowHint(false);
    setHintsUsed(0);
    setCompletedLevels([]);
    localStorage.removeItem(STORAGE_KEY);
    setScreen("intro");
  };

  // ── INTRO SCREEN ──
  if (screen === "intro") {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-collapse mb-2">
            🎮 Puzzle Game
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4">
            Quantum Escape
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed mb-8">
            Year 2055. You're trapped in <span className="text-quantum font-semibold">QuantumLab-7</span> after a catastrophic explosion. Every door, every lock, every system runs on quantum mechanics. To escape, you must solve 10 puzzles using real quantum computing concepts.
          </p>

          {/* Story teaser */}
          <div className="rounded-2xl bg-paper border border-line p-6 mb-8 font-mono text-sm text-ink-muted leading-relaxed">
            <p className="text-quantum mb-2">// SYSTEM LOG — 2055-07-09 03:47:22</p>
            <p>CRITICAL FAILURE: Quantum containment breach in sectors 3-7</p>
            <p>STATUS: 1 human trapped — quantum locks engaged</p>
            <p>ESCAPE ROUTE: Requires quantum knowledge verification</p>
            <p className="text-collapse mt-2">WARNING: ORACLE AI monitoring all attempts</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="rounded-xl border border-line bg-surface p-4 text-center">
              <p className="font-mono text-xl font-bold text-quantum">10</p>
              <p className="text-xs text-ink-muted">Puzzle levels</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4 text-center">
              <p className="font-mono text-xl font-bold text-quantum">6</p>
              <p className="text-xs text-ink-muted">Quantum concepts</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4 text-center">
              <p className="font-mono text-xl font-bold text-collapse">100</p>
              <p className="text-xs text-ink-muted">Max score</p>
            </div>
          </div>

          {completedLevels.length > 0 && (
            <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-4 mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-ink">Progress saved</p>
                <p className="text-xs text-ink-muted">{completedLevels.length}/10 levels complete · Score: {score}</p>
              </div>
              <button onClick={() => { setCurrentLevel(completedLevels.length >= 10 ? 9 : completedLevels.length); setScreen("playing"); }}
                className="text-sm text-quantum hover:underline font-medium">
                Continue →
              </button>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => { setCurrentLevel(0); setScreen("playing"); }}
              className="flex-1 rounded-full bg-quantum text-white py-4 font-semibold hover:bg-quantum-700 transition-colors text-lg"
            >
              {completedLevels.length > 0 ? "Restart Game" : "Start Escape →"}
            </button>
          </div>
          <p className="text-xs text-ink-soft text-center mt-3">
            Real quantum concepts · Every wrong answer has an explanation · No timer pressure
          </p>
        </div>
      </div>
    );
  }

  // ── GAME COMPLETE ──
  if (screen === "game-complete") {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-6xl mb-4">🎉</p>
          <h1 className="font-serif text-4xl font-semibold text-ink mb-3">
            You Escaped QuantumLab-7!
          </h1>
          <p className="text-ink-muted mb-2">
            You outsmarted ORACLE and escaped using real quantum computing knowledge.
          </p>
          <p className="font-mono text-3xl font-bold text-quantum mb-8">
            Final Score: {score}/100
          </p>

          <div className="rounded-2xl bg-quantum-50 border-2 border-quantum p-6 mb-8 text-left">
            <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-3">Concepts you mastered</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: "⚛", label: "Superposition & amplitudes" },
                { icon: "📡", label: "Quantum measurement collapse" },
                { icon: "🔗", label: "Entanglement & Bell states" },
                { icon: "🚫", label: "No-cloning theorem" },
                { icon: "📡", label: "Quantum teleportation" },
                { icon: "🌀", label: "Quantum tunneling" },
                { icon: "〰️", label: "Quantum interference" },
                { icon: "🛡", label: "Quantum error correction" },
                { icon: "🤖", label: "Shor's Algorithm" },
              ].map((c) => (
                <div key={c.label} className="flex gap-2 text-sm text-ink-muted">
                  <span>{c.icon}</span><span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `I just escaped QuantumLab-7 on QuantumAtlas! 🎮⚛\n\nSolved 10 quantum computing puzzles using superposition, entanglement, Shor's algorithm and more.\n\nScore: ${score}/100\n\nTry it → quantumatlas.in/quantum-escape`
            )}`} target="_blank" rel="noopener noreferrer"
              className="rounded-full bg-quantum text-white px-6 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors">
              Share on X/Twitter
            </a>
            <button onClick={resetGame}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors">
              Play Again
            </button>
          </div>

          <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 text-left">
            <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">Ready for the real thing?</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/certification" className="text-quantum hover:underline">→ Take the Quantum Computing Certification Exam</Link>
              <Link href="/learning-paths" className="text-quantum hover:underline">→ Follow a structured Learning Path</Link>
              <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">→ Deep dive into Shor's Algorithm</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── PLAYING SCREEN ──
  return (
    <div className="max-w-content mx-auto px-6 py-10">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setScreen("intro")}
          className="font-mono text-xs text-ink-soft hover:text-quantum transition-colors">
          ← Back to intro
        </button>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-ink-soft">
            Level <span className="text-quantum font-bold">{level.id}</span>/10
          </span>
          <span className="font-mono text-xs text-quantum font-bold">
            Score: {score}
          </span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mb-8">
        {levels.map((l) => (
          <div key={l.id} className={`h-1.5 flex-1 rounded-full transition-colors ${
            completedLevels.includes(l.id) ? "bg-quantum" :
            l.id === level.id ? "bg-quantum-100 border border-quantum" :
            "bg-line"
          }`} />
        ))}
      </div>

      <div className="max-w-2xl">
        {/* Concept badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 border ${conceptColors[level.concept]}`}>
            {conceptEmoji[level.concept]} {level.concept}
          </span>
          {level.concept === "boss" && (
            <span className="font-mono text-[11px] text-collapse animate-pulse">⚠ BOSS LEVEL</span>
          )}
        </div>

        {/* Level title */}
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-4">
          Level {level.id}: {level.title}
        </h2>

        {/* Story */}
        <div className="rounded-xl bg-paper border border-line p-5 mb-5 font-mono text-sm text-ink-muted leading-relaxed">
          <p className="text-quantum text-[10px] uppercase tracking-widest mb-2">// Story</p>
          {level.story}
        </div>

        {/* Puzzle */}
        <div className="rounded-2xl border-2 border-quantum bg-surface p-6 mb-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-quantum mb-3">// Puzzle</p>
          <p className="font-serif text-lg font-semibold text-ink leading-snug mb-6">
            {level.puzzle}
          </p>

          <div className="space-y-2.5">
            {level.options.map((opt, i) => {
              let style = "border-line bg-paper text-ink-muted hover:border-quantum hover:text-ink";
              if (answered) {
                if (i === level.correct) style = "border-quantum bg-quantum-50 text-ink";
                else if (i === selected && !isCorrect) style = "border-collapse bg-collapse-50 text-ink";
              } else if (selected === i) {
                style = "border-quantum bg-quantum-50 text-ink";
              }
              return (
                <button key={i} onClick={() => !answered && setSelected(i)}
                  disabled={answered}
                  className={`w-full text-left rounded-xl border-2 px-4 py-3.5 text-sm transition-all ${style}`}>
                  <span className={`font-mono text-xs mr-3 ${selected === i || (answered && i === level.correct) ? "text-quantum" : "text-ink-soft"}`}>
                    {["A", "B", "C", "D"][i]}.
                  </span>
                  {opt}
                  {answered && i === level.correct && " ✓"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hint */}
        {!answered && (
          <button onClick={() => { setShowHint(true); setHintsUsed(h => h + 1); }}
            className="text-xs text-ink-soft hover:text-quantum transition-colors mb-4 block">
            {showHint ? `💡 Hint: ${level.hint}` : "💡 Show hint (−5 pts)"}
          </button>
        )}

        {/* Action buttons */}
        {!answered ? (
          <button onClick={handleSubmit} disabled={selected === null}
            className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
            Submit Answer
          </button>
        ) : (
          <div className="space-y-4">
            {/* Result */}
            <div className={`rounded-xl p-5 border ${isCorrect ? "bg-quantum-50 border-quantum-100" : "bg-collapse-50 border-collapse"}`}>
              <p className={`font-semibold mb-2 text-lg ${isCorrect ? "text-quantum" : "text-collapse"}`}>
                {isCorrect ? `✅ Correct! +${showHint ? 5 : 10} points` : "❌ Not quite — study this:"}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mb-3">{level.explanation}</p>
              <Link href={level.conceptLink}
                className="text-sm text-quantum hover:underline font-medium">
                → {level.conceptLabel}
              </Link>
            </div>

            {isCorrect ? (
              <button onClick={handleNext}
                className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors">
                {currentLevel < levels.length - 1 ? `Proceed to Level ${level.id + 1} →` : "🎉 Complete the Escape!"}
              </button>
            ) : (
              <button onClick={handleRetry}
                className="w-full rounded-full border-2 border-quantum text-quantum bg-quantum-50 py-3.5 font-semibold hover:bg-quantum hover:text-white transition-colors">
                Try Again
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
