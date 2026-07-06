"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SuperpositionVisualPage() {
  const [measured, setMeasured] = useState<null | 0 | 1>(null);
  const [measuring, setMeasuring] = useState(false);
  const [history, setHistory] = useState<(0 | 1)[]>([]);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setPhase((p) => (p + 1) % 100), 50);
    return () => clearInterval(interval);
  }, []);

  const measure = () => {
    if (measuring) return;
    setMeasuring(true);
    setMeasured(null);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 0 : 1;
      setMeasured(outcome as 0 | 1);
      setHistory((h) => [...h, outcome as 0 | 1].slice(-20));
      setMeasuring(false);
    }, 700);
  };

  const reset = () => { setMeasured(null); setHistory([]); };

  const zeros = history.filter((h) => h === 0).length;
  const ones = history.filter((h) => h === 1).length;

  // Animated Bloch sphere approximation using CSS
  const wobble = Math.sin((phase / 100) * Math.PI * 2);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Visual Explainer
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Superposition — Visualized
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        A qubit in superposition isn't secretly a 0 or 1 — both possibilities genuinely coexist until measurement. Watch what happens.
      </p>

      {/* Main visualization */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl">

        {/* Left: Bloch sphere visualization */}
        <div className="rounded-2xl border border-line bg-surface p-6 flex flex-col items-center">
          <p className="font-mono text-xs text-quantum uppercase tracking-wide mb-4">Qubit State</p>

          {/* SVG Bloch-sphere-inspired visualization */}
          <svg width="180" height="180" viewBox="-90 -90 180 180" className="mb-4">
            {/* Outer circle */}
            <ellipse cx="0" cy="0" rx="70" ry="70" fill="none" stroke="rgb(var(--color-line))" strokeWidth="1.5" />
            {/* Equator ellipse */}
            <ellipse cx="0" cy="0" rx="70" ry="20" fill="none" stroke="rgb(var(--color-line))" strokeWidth="1" strokeDasharray="3 3" />
            {/* North pole |0⟩ */}
            <circle cx="0" cy="-70" r="4" fill="rgb(var(--color-quantum))" />
            <text x="8" y="-65" fontSize="11" fill="rgb(var(--color-quantum))" fontFamily="monospace">|0⟩</text>
            {/* South pole |1⟩ */}
            <circle cx="0" cy="70" r="4" fill="rgb(var(--color-collapse))" />
            <text x="8" y="76" fontSize="11" fill="rgb(var(--color-collapse))" fontFamily="monospace">|1⟩</text>

            {measured !== null ? (
              // Collapsed state — point to pole
              <>
                <line
                  x1="0" y1="0"
                  x2={0}
                  y2={measured === 0 ? -62 : 62}
                  stroke={measured === 0 ? "rgb(var(--color-quantum))" : "rgb(var(--color-collapse))"}
                  strokeWidth="2.5"
                />
                <circle
                  cx={0}
                  cy={measured === 0 ? -62 : 62}
                  r="7"
                  fill={measured === 0 ? "rgb(var(--color-quantum))" : "rgb(var(--color-collapse))"}
                />
              </>
            ) : measuring ? (
              // Measuring — fast spinning
              <line x1="0" y1="0" x2={Math.sin(phase * 0.5) * 60} y2={Math.cos(phase * 0.5) * 60 - 10}
                stroke="rgb(var(--color-quantum))" strokeWidth="2.5" opacity="0.6" />
            ) : (
              // Superposition — hovering at equator, wobbling
              <>
                <line
                  x1="0" y1="0"
                  x2={Math.sin((phase / 100) * Math.PI * 2) * 50}
                  y2={wobble * 15 - 5}
                  stroke="rgb(var(--color-quantum))"
                  strokeWidth="2.5"
                />
                <circle
                  cx={Math.sin((phase / 100) * Math.PI * 2) * 50}
                  cy={wobble * 15 - 5}
                  r="7"
                  fill="rgb(var(--color-quantum))"
                  opacity="0.85"
                />
                {/* Ghost dot showing both possibilities */}
                <circle cx="0" cy="-62" r="4" fill="rgb(var(--color-quantum))" opacity="0.25" />
                <circle cx="0" cy="62" r="4" fill="rgb(var(--color-collapse))" opacity="0.25" />
              </>
            )}
          </svg>

          <p className="font-mono text-sm text-center text-ink-muted">
            {measured !== null
              ? <span className={measured === 0 ? "text-quantum font-bold" : "text-collapse font-bold"}>Collapsed → |{measured}⟩</span>
              : measuring
              ? <span className="text-ink-soft animate-pulse">Measuring…</span>
              : <span className="text-quantum">In superposition: (|0⟩+|1⟩)/√2</span>
            }
          </p>
        </div>

        {/* Right: Probability bars */}
        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="font-mono text-xs text-quantum uppercase tracking-wide mb-4">Amplitudes</p>

          <div className="space-y-4 mb-6">
            {[{ label: "|0⟩", color: "bg-quantum", textColor: "text-quantum" },
              { label: "|1⟩", color: "bg-collapse", textColor: "text-collapse" }].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between mb-1">
                  <span className={`font-mono text-sm font-bold ${s.textColor}`}>{s.label}</span>
                  <span className="font-mono text-xs text-ink-muted">
                    {measured !== null
                      ? (s.label === `|${measured}⟩` ? "100%" : "0%")
                      : "50%"}
                  </span>
                </div>
                <div className="h-3 bg-line rounded-full overflow-hidden">
                  <div
                    className={`h-full ${s.color} rounded-full transition-all duration-500`}
                    style={{
                      width: measured !== null
                        ? (s.label === `|${measured}⟩` ? "100%" : "0%")
                        : "50%"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-line pt-4">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-3">
              Measurement history ({history.length} shots)
            </p>
            <div className="flex flex-wrap gap-1 min-h-[32px]">
              {history.map((h, i) => (
                <span key={i} className={`font-mono text-xs px-1.5 py-0.5 rounded ${h === 0 ? "bg-quantum-50 text-quantum" : "bg-collapse-50 text-collapse"}`}>
                  {h}
                </span>
              ))}
            </div>
            {history.length > 0 && (
              <p className="text-xs text-ink-soft mt-2">
                0: {zeros} ({Math.round(zeros / history.length * 100)}%) · 1: {ones} ({Math.round(ones / history.length * 100)}%)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-12">
        <button onClick={measure} disabled={measuring}
          className="rounded-full bg-quantum text-white px-6 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-50">
          {measuring ? "Measuring…" : measured !== null ? "Measure Again" : "Measure the Qubit"}
        </button>
        {history.length > 0 && (
          <button onClick={reset}
            className="rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-ink-muted hover:border-collapse hover:text-collapse transition-colors">
            Reset
          </button>
        )}
      </div>

      {/* Explanation */}
      <div className="prose-quantum max-w-2xl">
        <h2>What you're seeing</h2>
        <p>Before measurement, the qubit is in a genuine superposition — the Bloch sphere arrow hovers between |0⟩ and |1⟩, not secretly pointing to one. The 50% probability isn't ignorance about a hidden value — it's the real, irreducible probability of each outcome. Click "Measure" repeatedly and you'll see a roughly 50/50 split emerge over many shots — exactly as quantum mechanics predicts.</p>
        <h2>What superposition is not</h2>
        <p>It's not "the qubit is secretly a 0 or 1 and we just don't know which." <Link href="/people/john-bell" className="text-quantum hover:underline">Bell's theorem</Link> and decades of experiments rule that out definitively. The superposition is real, and measurement creates the definite outcome — it doesn't just reveal a pre-existing one.</p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/entanglement-visual" className="text-quantum hover:underline">→ Entanglement — Visualized</Link>
          <Link href="/learn/interference-visual" className="text-quantum hover:underline">→ Interference — Visualized</Link>
          <Link href="/dictionary/superposition" className="text-quantum hover:underline">→ Full dictionary entry</Link>
          <Link href="/entanglement-visualizer" className="text-quantum hover:underline">→ Live Entanglement Visualizer</Link>
        </div>
      </div>
    </div>
  );
}
