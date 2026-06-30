"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type RaceState = "idle" | "running" | "finished";

const presets = [
  { bits: 8, label: "8-bit number", classicalSteps: 16, quantumSteps: 6 },
  { bits: 16, label: "16-bit number", classicalSteps: 256, quantumSteps: 12 },
  { bits: 32, label: "32-bit number", classicalSteps: 65536, quantumSteps: 24 },
  { bits: 64, label: "64-bit number", classicalSteps: 4294967296, quantumSteps: 48 },
  { bits: 128, label: "128-bit number (real RSA-lite)", classicalSteps: 1.8e19, quantumSteps: 96 },
  { bits: 2048, label: "2048-bit number (real RSA)", classicalSteps: 3e150, quantumSteps: 1536 },
];

function formatSteps(n: number): string {
  if (n > 1e15) return n.toExponential(2) + " steps";
  if (n > 1e6) return (n / 1e6).toFixed(1) + "M steps";
  if (n > 1e3) return (n / 1e3).toFixed(1) + "k steps";
  return Math.round(n) + " steps";
}

function formatTime(steps: number, stepsPerSecond: number): string {
  const seconds = steps / stepsPerSecond;
  const YEAR = 365.25 * 24 * 3600;
  if (seconds > YEAR * 1e9) return "longer than the age of the universe";
  if (seconds > YEAR) return `~${(seconds / YEAR).toExponential(2)} years`;
  if (seconds > 86400) return `~${(seconds / 86400).toFixed(1)} days`;
  if (seconds > 3600) return `~${(seconds / 3600).toFixed(1)} hours`;
  if (seconds > 60) return `~${(seconds / 60).toFixed(1)} minutes`;
  if (seconds > 1) return `~${seconds.toFixed(1)} seconds`;
  return "under a second";
}

export default function RacePage() {
  const [presetIndex, setPresetIndex] = useState(1);
  const [raceState, setRaceState] = useState<RaceState>("idle");
  const [classicalProgress, setClassicalProgress] = useState(0);
  const [quantumProgress, setQuantumProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

  const preset = presets[presetIndex];

  // Visual race duration is compressed for demo purposes — classical bar
  // animates much slower for small sizes and "freezes" near-instantly-full
  // for huge sizes to represent its overwhelming step count, while quantum
  // always completes in a short, roughly constant visual time, illustrating
  // the qualitative exponential-vs-polynomial gap (not literal real-time).
  const runRace = useCallback(() => {
    setRaceState("running");
    setClassicalProgress(0);
    setQuantumProgress(0);

    const startTime = performance.now();
    // Quantum always finishes its visual animation in ~2.5s regardless of size
    const quantumDuration = 2500;
    // Classical visual duration scales with log(steps) to stay watchable,
    // but is always slower than quantum, capped at 12s for huge numbers
    const classicalDuration = Math.min(2500 + Math.log10(preset.classicalSteps) * 1800, 12000);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const qProg = Math.min(elapsed / quantumDuration, 1);
      const cProg = Math.min(elapsed / classicalDuration, 1);
      setQuantumProgress(qProg);
      setClassicalProgress(cProg);

      if (qProg < 1 || cProg < 1) {
        animationRef.current = requestAnimationFrame(tick);
      } else {
        setRaceState("finished");
      }
    };
    animationRef.current = requestAnimationFrame(tick);
  }, [preset]);

  const reset = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setRaceState("idle");
    setClassicalProgress(0);
    setQuantumProgress(0);
  };

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Interactive Visualization
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum vs Classical: The Factoring Race
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Watch a classical brute-force approach race against{" "}
        <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
          Shor's Algorithm
        </Link>{" "}
        on the same factoring problem, at different number sizes. The
        animation timing is compressed for visibility — see the note below
        for what's really being illustrated.
      </p>

      {/* Size selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {presets.map((p, i) => (
          <button
            key={p.bits}
            onClick={() => { setPresetIndex(i); reset(); }}
            disabled={raceState === "running"}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors disabled:opacity-50 ${
              presetIndex === i
                ? "bg-quantum text-white border-quantum"
                : "bg-surface text-ink-muted border-line hover:border-quantum hover:text-quantum"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Race track */}
      <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 mb-6">
        {/* Classical lane */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-wide text-ink-muted">
              Classical Brute Force
            </span>
            <span className="font-mono text-xs text-ink-soft">
              {formatSteps(preset.classicalSteps)}
            </span>
          </div>
          <div className="h-10 bg-paper border border-line rounded-full overflow-hidden relative">
            <div
              className="h-full bg-collapse-50 border-r-2 border-collapse rounded-full transition-none flex items-center justify-end pr-2"
              style={{ width: `${classicalProgress * 100}%` }}
            >
              {classicalProgress > 0.05 && <span className="text-sm">🐢</span>}
            </div>
          </div>
        </div>

        {/* Quantum lane */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-wide text-quantum">
              Shor's Algorithm (Quantum)
            </span>
            <span className="font-mono text-xs text-quantum">
              {preset.quantumSteps} steps
            </span>
          </div>
          <div className="h-10 bg-paper border border-line rounded-full overflow-hidden relative">
            <div
              className="h-full bg-quantum-50 border-r-2 border-quantum rounded-full transition-none flex items-center justify-end pr-2"
              style={{ width: `${quantumProgress * 100}%` }}
            >
              {quantumProgress > 0.05 && <span className="text-sm">⚡</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={runRace}
          disabled={raceState === "running"}
          className="rounded-full bg-quantum text-white px-6 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-50"
        >
          {raceState === "finished" ? "▶ Race Again" : "▶ Start Race"}
        </button>
        <button
          onClick={reset}
          className="rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink-muted hover:border-collapse hover:text-collapse transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Result panel */}
      {raceState === "finished" && (
        <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-6 mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-3">
            At {preset.label}, on real hardware running ~1 billion operations/second
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-ink-soft mb-1">Classical estimated time</p>
              <p className="font-mono text-sm font-bold text-ink">
                {formatTime(preset.classicalSteps, 1e9)}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-soft mb-1">Quantum estimated time (illustrative)</p>
              <p className="font-mono text-sm font-bold text-quantum">
                {formatTime(preset.quantumSteps, 1000)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="prose-quantum max-w-2xl">
        <h2>What this animation is really showing</h2>
        <p>
          The visual race timing above is compressed for watchability — it
          is not a literal real-time simulation. What it's meant to
          illustrate is the actual mathematical relationship: classical
          factoring difficulty grows{" "}
          <strong>exponentially</strong> with number size, while{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm's
          </Link>{" "}
          step count grows only <strong>polynomially</strong>. At small
          sizes (8-bit, 16-bit), this gap is barely noticeable — both
          approaches finish quickly. At large sizes (2048-bit, the kind
          used in real RSA encryption), the classical approach would take
          longer than the age of the universe, while Shor's Algorithm
          scales gracefully.
        </p>
        <h2>An important caveat</h2>
        <p>
          This visualization assumes a large, error-corrected quantum
          computer capable of actually running Shor's Algorithm at these
          sizes — which doesn't exist yet. No current quantum hardware can
          factor a real 2048-bit RSA key. See our{" "}
          <Link href="/learn/path-to-fault-tolerance" className="text-quantum hover:underline">
            Path to Fault Tolerance
          </Link>{" "}
          article for what's actually required to get there, and our{" "}
          <Link href="/dictionary/harvest-now-decrypt-later" className="text-quantum hover:underline">
            Harvest Now, Decrypt Later
          </Link>{" "}
          entry for why this matters today regardless.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Go deeper</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">→ Shor's Algorithm explained</Link>
          <Link href="/learn/quantum-complexity-theory" className="text-quantum hover:underline">→ Quantum Complexity Theory</Link>
          <Link href="/tools" className="text-quantum hover:underline">→ Encryption Breaking Time Estimator</Link>
        </div>
      </div>
    </div>
  );
      }
        
