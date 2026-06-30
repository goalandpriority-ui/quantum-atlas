"use client";

import { useState } from "react";
import Link from "next/link";

type MeasurementResult = { qubitA: 0 | 1; qubitB: 0 | 1; correlated: boolean };

export default function EntanglementVisualizerPage() {
  const [mode, setMode] = useState<"entangled" | "independent">("entangled");
  const [history, setHistory] = useState<MeasurementResult[]>([]);
  const [animating, setAnimating] = useState(false);
  const [revealed, setRevealed] = useState<{ a: boolean; b: boolean }>({ a: false, b: false });

  const measure = () => {
    setAnimating(true);
    setRevealed({ a: false, b: false });

    let qubitA: 0 | 1;
    let qubitB: 0 | 1;

    if (mode === "entangled") {
      // Bell state: both qubits always match
      const outcome = Math.random() < 0.5 ? 0 : 1;
      qubitA = outcome;
      qubitB = outcome;
    } else {
      // Independent qubits: each is its own coin flip
      qubitA = Math.random() < 0.5 ? 0 : 1;
      qubitB = Math.random() < 0.5 ? 0 : 1;
    }

    setTimeout(() => setRevealed((r) => ({ ...r, a: true })), 400);
    setTimeout(() => {
      setRevealed((r) => ({ ...r, b: true }));
      setHistory((prev) => [{ qubitA, qubitB, correlated: qubitA === qubitB }, ...prev].slice(0, 12));
      setAnimating(false);
    }, 900);
  };

  const matchCount = history.filter((h) => h.correlated).length;
  const matchPct = history.length > 0 ? Math.round((matchCount / history.length) * 100) : 0;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Live Visualization
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Entanglement Visualizer
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Measure two qubits repeatedly and watch the correlation pattern
        emerge. Toggle between an{" "}
        <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
          entangled Bell state
        </Link>{" "}
        and two independent qubits to see the difference directly.
      </p>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-10">
        <button
          onClick={() => { setMode("entangled"); setHistory([]); }}
          className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-colors ${
            mode === "entangled" ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"
          }`}
        >
          Entangled qubits
        </button>
        <button
          onClick={() => { setMode("independent"); setHistory([]); }}
          className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-colors ${
            mode === "independent" ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"
          }`}
        >
          Independent qubits
        </button>
      </div>

      {/* Visualization */}
      <div className="rounded-2xl border border-line bg-surface p-8 mb-6">
        <div className="flex items-center justify-center gap-12 mb-8">
          {/* Qubit A */}
          <div className="flex flex-col items-center">
            <p className="font-mono text-xs text-quantum mb-3">Qubit A</p>
            <div
              className={`w-24 h-24 rounded-full border-4 flex items-center justify-center font-mono text-3xl font-bold transition-all duration-500 ${
                animating && !revealed.a
                  ? "border-quantum bg-quantum-50 animate-pulse"
                  : revealed.a
                  ? "border-quantum bg-quantum text-white"
                  : "border-line bg-paper text-ink-soft"
              }`}
            >
              {revealed.a && history[0] !== undefined ? "" : animating ? "?" : "—"}
            </div>
          </div>

          {/* Connection line */}
          <div className="flex flex-col items-center gap-1">
            {mode === "entangled" ? (
              <svg width="60" height="20" viewBox="0 0 60 20">
                <line x1="0" y1="10" x2="60" y2="10" stroke="rgb(var(--color-quantum))" strokeWidth="2" strokeDasharray="4 3" />
              </svg>
            ) : (
              <svg width="60" height="20" viewBox="0 0 60 20">
                <line x1="0" y1="10" x2="60" y2="10" stroke="rgb(var(--color-line))" strokeWidth="2" />
              </svg>
            )}
            <span className="font-mono text-[10px] text-ink-soft">
              {mode === "entangled" ? "entangled" : "no link"}
            </span>
          </div>

          {/* Qubit B */}
          <div className="flex flex-col items-center">
            <p className="font-mono text-xs text-quantum mb-3">Qubit B</p>
            <div
              className={`w-24 h-24 rounded-full border-4 flex items-center justify-center font-mono text-3xl font-bold transition-all duration-500 ${
                animating && !revealed.b
                  ? "border-quantum bg-quantum-50 animate-pulse"
                  : revealed.b
                  ? "border-quantum bg-quantum text-white"
                  : "border-line bg-paper text-ink-soft"
              }`}
            >
              {revealed.b && history[0] !== undefined ? "" : animating ? "?" : "—"}
            </div>
          </div>
        </div>

        {/* Show actual measured values once both revealed */}
        {revealed.a && revealed.b && history[0] && !animating && (
          <div className="text-center mb-4">
            <span className="font-mono text-2xl font-bold text-quantum">{history[0].qubitA}</span>
            <span className="text-ink-soft mx-3">and</span>
            <span className="font-mono text-2xl font-bold text-quantum">{history[0].qubitB}</span>
            <p className="text-xs text-ink-soft mt-1">
              {history[0].correlated ? "✓ Matched" : "✗ Different"}
            </p>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={measure}
            disabled={animating}
            className="rounded-full bg-quantum text-white px-8 py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-50"
          >
            {animating ? "Measuring…" : "Measure Both Qubits"}
          </button>
        </div>
      </div>

      {/* Stats */}
      {history.length > 0 && (
        <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-6 mb-6 max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-3">
            Correlation rate over {history.length} measurement{history.length === 1 ? "" : "s"}
          </p>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 bg-line rounded-full h-3 overflow-hidden">
              <div className="h-full bg-quantum rounded-full transition-all" style={{ width: `${matchPct}%` }} />
            </div>
            <span className="font-mono text-sm font-bold text-quantum w-12 text-right">{matchPct}%</span>
          </div>
          <p className="text-xs text-ink-soft">
            {mode === "entangled"
              ? "Entangled qubits should match nearly 100% of the time."
              : "Independent qubits should match roughly 50% of the time, purely by chance."}
          </p>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Recent measurements</p>
          <div className="flex flex-wrap gap-2">
            {history.map((h, i) => (
              <div
                key={i}
                className={`rounded-lg border px-3 py-2 font-mono text-xs ${
                  h.correlated ? "border-quantum bg-quantum-50 text-quantum" : "border-collapse bg-collapse-50 text-collapse"
                }`}
              >
                {h.qubitA}{h.qubitB} {h.correlated ? "✓" : "✗"}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="prose-quantum max-w-2xl">
        <h2>What you're actually seeing</h2>
        <p>
          When qubits are entangled (specifically, in the{" "}
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
            Bell state
          </Link>{" "}
          simulated here), measuring one instantly determines what the
          other will show — even though each individual outcome is
          genuinely random. This is{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entanglement
          </Link>
          : a correlation stronger than anything possible classically,
          confirmed experimentally through{" "}
          <Link href="/people/john-bell" className="text-quantum hover:underline">
            Bell inequality
          </Link>{" "}
          violations.
        </p>
        <h2>Why this isn't faster-than-light communication</h2>
        <p>
          Even though the correlation is instant, neither qubit's outcome
          can be controlled — both are still genuinely random. You can't
          use this to send a message, because there's no way to choose
          what value you'll measure. This distinction is covered in detail
          in our{" "}
          <Link href="/learn/quantum-teleportation-lesson" className="text-quantum hover:underline">
            Quantum Teleportation lesson
          </Link>
          , which relies on this same entanglement property.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Go deeper</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">→ Entanglement explained</Link>
          <Link href="/people/john-bell" className="text-quantum hover:underline">→ John Bell — proved entanglement is real</Link>
          <Link href="/circuit-builder" className="text-quantum hover:underline">→ Build a Bell state yourself</Link>
        </div>
      </div>
    </div>
  );
            }
          
