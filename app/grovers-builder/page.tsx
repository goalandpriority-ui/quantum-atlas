"use client";

import { useState } from "react";
import Link from "next/link";

type Step = {
  title: string;
  instruction: string;
  explanation: string;
  visual: "init" | "superposition" | "oracle" | "diffusion" | "repeat" | "measure";
};

const steps: Step[] = [
  {
    title: "Step 1: The problem",
    instruction:
      "Imagine searching for one specific item among 4 unsorted possibilities, labeled 00, 01, 10, 11. Classically, you'd check items one by one — averaging 2.5 checks, worst case 4.",
    explanation:
      "We'll use 2 qubits to represent these 4 possibilities (2² = 4 states) and build Grover's Algorithm to find the marked item faster.",
    visual: "init",
  },
  {
    title: "Step 2: Create equal superposition",
    instruction:
      "Apply a Hadamard gate to each of the 2 qubits. This puts the system into an equal superposition of all 4 possible states — each with 25% measurement probability.",
    explanation:
      "This is the 'explore everywhere at once' starting point. Every possibility now has exactly the same amplitude — there's no bias toward any answer yet.",
    visual: "superposition",
  },
  {
    title: "Step 3: Apply the oracle",
    instruction:
      "The 'oracle' is a special gate that flips the sign (phase) of the amplitude for the marked item — let's say item '10' is what we're searching for — while leaving all other amplitudes unchanged.",
    explanation:
      "Crucially, this doesn't change any measurement probabilities yet (phase flips are invisible to direct measurement) — but it sets up the interference effect in the next step.",
    visual: "oracle",
  },
  {
    title: "Step 4: Apply the diffusion operator",
    instruction:
      "Apply the 'diffusion operator' — a reflection around the average amplitude. This is the clever part: because '10' now has a flipped (negative) phase, this reflection amplifies its probability while shrinking the others.",
    explanation:
      "This is quantum interference in action: the marked item's amplitude grows constructively, while the unmarked items' amplitudes shrink through destructive interference.",
    visual: "diffusion",
  },
  {
    title: "Step 5: Repeat (if needed)",
    instruction:
      "For N=4 possibilities, one round of oracle + diffusion is actually enough to make the answer highly likely. For larger search spaces, you'd repeat this oracle+diffusion cycle approximately √N times.",
    explanation:
      "This repetition count is exactly where Grover's quadratic speedup comes from — needing only √N rounds instead of N individual checks.",
    visual: "repeat",
  },
  {
    title: "Step 6: Measure",
    instruction:
      "Measure both qubits. With high probability, you'll get '10' — the marked item — even though you never directly checked each item one by one.",
    explanation:
      "For N=4, this single round gives 100% theoretical probability of success — a dramatic illustration of how interference, not brute-force checking, found the answer.",
    visual: "measure",
  },
];

function StateVisual({ visual }: { visual: Step["visual"] }) {
  const states = ["00", "01", "10", "11"];
  const amplitudes: Record<Step["visual"], number[]> = {
    init: [1, 0, 0, 0],
    superposition: [0.5, 0.5, 0.5, 0.5],
    oracle: [0.5, 0.5, -0.5, 0.5],
    diffusion: [0.1, 0.1, 0.95, 0.1],
    repeat: [0.05, 0.05, 0.98, 0.05],
    measure: [0, 0, 1, 0],
  };
  const amps = amplitudes[visual];
  const markedIndex = 2; // "10"

  return (
    <div className="grid grid-cols-4 gap-3">
      {states.map((s, i) => {
        const amp = amps[i];
        const isMarked = i === markedIndex;
        const height = Math.abs(amp) * 100;
        const isNegative = amp < 0;
        return (
          <div key={s} className="flex flex-col items-center">
            <div className="h-24 w-full flex items-end justify-center mb-2 relative">
              <div
                className={`w-10 rounded-t-md transition-all duration-500 ${
                  isNegative
                    ? "bg-collapse border-2 border-collapse-50"
                    : isMarked && (visual === "diffusion" || visual === "repeat" || visual === "measure")
                    ? "bg-quantum"
                    : "bg-quantum-100"
                }`}
                style={{ height: `${height}%` }}
              />
              {isNegative && (
                <span className="absolute -top-5 text-xs text-collapse font-mono">−</span>
              )}
            </div>
            <span className={`font-mono text-xs ${isMarked ? "text-quantum font-bold" : "text-ink-soft"}`}>
              |{s}⟩{isMarked ? " ★" : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function GroversBuilderPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const reset = () => setStep(0);

  const current = steps[step];

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Guided Build
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Build Grover's Algorithm, Step by Step
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        A scaffolded walkthrough of how{" "}
        <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
          Grover's Algorithm
        </Link>{" "}
        finds a marked item among 4 possibilities using interference,
        rather than checking each one individually.
      </p>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8 max-w-2xl">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-quantum" : "bg-line"}`}
          />
        ))}
      </div>

      <div className="max-w-2xl">
        {/* State visualization */}
        <div className="rounded-2xl border border-line bg-surface p-6 mb-6">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-4 text-center">
            Amplitude of each possible state (★ = the marked item we're searching for)
          </p>
          <StateVisual visual={current.visual} />
        </div>

        {/* Step content */}
        <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-6 mb-6">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
            {current.title} ({step + 1} of {steps.length})
          </p>
          <p className="text-ink font-medium mb-3 leading-relaxed">{current.instruction}</p>
          <p className="text-sm text-ink-muted leading-relaxed border-t border-quantum-100 pt-3">
            {current.explanation}
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={step === 0}
            className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
          <button
            onClick={next}
            disabled={step === steps.length - 1}
            className="flex-1 rounded-full bg-quantum text-white py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === steps.length - 1 ? "Complete!" : "Next Step →"}
          </button>
          {step === steps.length - 1 && (
            <button
              onClick={reset}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-collapse hover:text-collapse transition-colors"
            >
              Restart
            </button>
          )}
        </div>
      </div>

      <div className="prose-quantum max-w-2xl mt-10">
        <h2>Why this matters beyond search</h2>
        <p>
          The oracle-and-diffusion pattern you just walked through —
          marking a target with a phase flip, then amplifying it through
          reflection — is called{" "}
          <strong>amplitude amplification</strong>, and it's one of the
          most reused design patterns in quantum computing. It underlies{" "}
          <Link href="/algorithms/quantum-counting" className="text-quantum hover:underline">
            Quantum Counting
          </Link>
          ,{" "}
          <Link href="/algorithms/quantum-amplitude-estimation" className="text-quantum hover:underline">
            Quantum Amplitude Estimation
          </Link>
          , and several other algorithms covered in our{" "}
          <Link href="/learn/quantum-algorithm-design-patterns" className="text-quantum hover:underline">
            Algorithm Design Patterns
          </Link>{" "}
          article.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Go deeper</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">→ Grover's Algorithm full entry</Link>
          <Link href="/circuit-builder" className="text-quantum hover:underline">→ Try building it yourself in the Circuit Builder</Link>
          <Link href="/learn/quantum-algorithm-design-patterns" className="text-quantum hover:underline">→ Algorithm Design Patterns</Link>
        </div>
      </div>
    </div>
  );
          }

