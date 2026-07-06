"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type PathSetup = {
  label: string;
  ampA: number;
  ampB: number;
  phaseB: "same" | "opposite";
  description: string;
};

const setups: PathSetup[] = [
  { label: "Constructive", ampA: 0.7, ampB: 0.7, phaseB: "same", description: "Both paths have the same phase — amplitudes add together. The target state has a high probability." },
  { label: "Destructive", ampA: 0.7, ampB: 0.7, phaseB: "opposite", description: "Path B has an opposite phase — amplitudes cancel. The target state probability drops to near zero." },
  { label: "Partial", ampA: 0.8, ampB: 0.4, phaseB: "opposite", description: "Unequal amplitudes with opposite phase — partial cancellation. Some probability remains." },
];

export default function InterferenceVisualPage() {
  const [setup, setSetup] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setTick((t) => t + 1), 40);
    return () => clearInterval(iv);
  }, []);

  const current = setups[setup];
  const ampA = current.ampA;
  const ampB = current.phaseB === "same" ? current.ampB : -current.ampB;
  const combined = ampA + ampB;
  const prob = Math.min(1, Math.max(0, combined * combined));

  // Wave animation
  const waveA = (x: number) => Math.sin((x / 60 - tick / 15) * Math.PI * 2) * 25 * current.ampA;
  const waveB = (x: number) => Math.sin((x / 60 - tick / 15) * Math.PI * 2 + (current.phaseB === "opposite" ? Math.PI : 0)) * 25 * current.ampB;
  const waveCombined = (x: number) => waveA(x) + waveB(x);

  const buildPath = (fn: (x: number) => number, width: number) => {
    const pts = Array.from({ length: width + 1 }, (_, x) => `${x},${30 - fn(x)}`);
    return `M ${pts.join(" L ")}`;
  };

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Visual Explainer
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Interference — Visualized
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Quantum interference is the mechanism that makes quantum algorithms useful — it amplifies correct answers and cancels wrong ones. See how it works.
      </p>

      {/* Setup selector */}
      <div className="flex gap-2 mb-8">
        {setups.map((s, i) => (
          <button key={i} onClick={() => setSetup(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              setup === i ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"
            }`}>
            {s.label}
          </button>
        ))}
      </div>

      {/* Wave visualization */}
      <div className="rounded-2xl border border-line bg-surface p-6 mb-6 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-4">Live Wave Animation</p>

        <div className="space-y-4">
          {/* Wave A */}
          <div>
            <p className="font-mono text-[11px] text-quantum mb-1">Path A (amplitude {current.ampA})</p>
            <svg width="100%" height="60" viewBox={`0 0 320 60`} preserveAspectRatio="none" className="overflow-visible">
              <path d={buildPath(waveA, 320)} fill="none" stroke="rgb(var(--color-quantum))" strokeWidth="2" />
              <line x1="0" y1="30" x2="320" y2="30" stroke="rgb(var(--color-line))" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Wave B */}
          <div>
            <p className="font-mono text-[11px] mb-1" style={{ color: current.phaseB === "opposite" ? "rgb(var(--color-collapse))" : "rgb(var(--color-quantum))" }}>
              Path B (amplitude {current.ampB}, phase: {current.phaseB})
            </p>
            <svg width="100%" height="60" viewBox={`0 0 320 60`} preserveAspectRatio="none" className="overflow-visible">
              <path d={buildPath(waveB, 320)} fill="none"
                stroke={current.phaseB === "opposite" ? "rgb(var(--color-collapse))" : "rgb(var(--color-quantum-100))"}
                strokeWidth="2" />
              <line x1="0" y1="30" x2="320" y2="30" stroke="rgb(var(--color-line))" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Divider */}
          <div className="border-t border-line pt-2">
            <p className="font-mono text-[11px] text-ink-soft mb-1">Combined (A + B)</p>
            <svg width="100%" height="60" viewBox={`0 0 320 60`} preserveAspectRatio="none" className="overflow-visible">
              <path d={buildPath(waveCombined, 320)} fill="none" stroke="rgb(var(--color-ink))" strokeWidth="2.5" />
              <line x1="0" y1="30" x2="320" y2="30" stroke="rgb(var(--color-line))" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>

        <p className="text-sm text-ink-muted mt-4 leading-relaxed">{current.description}</p>
      </div>

      {/* Probability bar */}
      <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 mb-10 max-w-md">
        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-3">
          Resulting measurement probability
        </p>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-line rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-quantum rounded-full transition-all duration-300"
              style={{ width: `${Math.round(prob * 100)}%` }}
            />
          </div>
          <span className="font-mono text-lg font-bold text-quantum w-14 text-right">
            {Math.round(prob * 100)}%
          </span>
        </div>
        <p className="text-xs text-ink-soft mt-2">
          {prob > 0.7 ? "High probability — constructive interference" : prob < 0.1 ? "Near-zero — destructive interference" : "Partial — mixed interference"}
        </p>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>Why this is the actual engine of quantum computing</h2>
        <p>
          Superposition gives a quantum computer access to many states at once. But that alone doesn't help — measuring a superposition gives a random result. What makes quantum algorithms powerful is orchestrating <strong>interference</strong> so that wrong answers cancel (destructive) and right answers amplify (constructive). <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">Grover's Algorithm</Link> is the purest example — its oracle marks the target answer with a phase flip, and the diffusion operator then uses interference to amplify that marked state's probability.
        </p>
        <h2>Interference is not magic — it's wave mechanics</h2>
        <p>
          The same constructive/destructive pattern appears in classical waves — sound, light, water. Quantum amplitudes behave like wave amplitudes. The difference is that quantum amplitudes encode <em>probability</em>, so interference directly changes the likelihood of outcomes. No classical system can achieve this exact effect with probabilities.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/superposition-visual" className="text-quantum hover:underline">→ Superposition — Visualized</Link>
          <Link href="/learn/entanglement-visual" className="text-quantum hover:underline">→ Entanglement — Visualized</Link>
          <Link href="/grovers-builder" className="text-quantum hover:underline">→ See interference in Grover's Algorithm</Link>
          <Link href="/dictionary/quantum-interference" className="text-quantum hover:underline">→ Quantum Interference dictionary entry</Link>
        </div>
      </div>
    </div>
  );
}
