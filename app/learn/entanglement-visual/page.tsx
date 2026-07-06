"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Pair = { a: 0 | 1; b: 0 | 1 };

export default function EntanglementVisualPage() {
  const [mode, setMode] = useState<"entangled" | "independent">("entangled");
  const [measuring, setMeasuring] = useState<"none" | "a" | "both">("none");
  const [result, setResult] = useState<Pair | null>(null);
  const [history, setHistory] = useState<Pair[]>([]);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setPulse((p) => (p + 1) % 60), 50);
    return () => clearInterval(iv);
  }, []);

  const measureBoth = () => {
    if (measuring !== "none") return;
    setMeasuring("a");
    setResult(null);
    setTimeout(() => {
      const a = Math.random() < 0.5 ? 0 : 1;
      const b = mode === "entangled" ? a : (Math.random() < 0.5 ? 0 : 1);
      const pair = { a: a as 0 | 1, b: b as 0 | 1 };
      setMeasuring("both");
      setResult(pair);
      setHistory((h) => [pair, ...h].slice(0, 16));
      setTimeout(() => setMeasuring("none"), 200);
    }, 600);
  };

  const reset = () => { setResult(null); setHistory([]); setMeasuring("none"); };

  const matches = history.filter((p) => p.a === p.b).length;
  const pct = history.length > 0 ? Math.round((matches / history.length) * 100) : 0;

  const glowA = mode === "entangled" && measuring === "none" && !result;
  const entanglePulse = 0.4 + 0.3 * Math.sin((pulse / 60) * Math.PI * 2);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Visual Explainer
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Entanglement — Visualized
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Toggle between entangled and independent qubits. Measure both and watch the correlation pattern emerge over many shots.
      </p>

      {/* Mode toggle */}
      <div className="flex gap-2 mb-10">
        {["entangled", "independent"].map((m) => (
          <button key={m} onClick={() => { setMode(m as "entangled" | "independent"); reset(); }}
            className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-colors capitalize ${
              mode === m ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"
            }`}>
            {m === "entangled" ? "🔗 Entangled" : "🔀 Independent"}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="rounded-2xl border border-line bg-surface p-8 mb-6 max-w-2xl">
        <div className="flex items-center justify-center gap-8 mb-8">

          {/* Qubit A */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono text-xs text-quantum">Qubit A</p>
            <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center font-mono text-2xl font-bold transition-all duration-500 ${
              result
                ? result.a === 0 ? "border-quantum bg-quantum text-white" : "border-collapse bg-collapse-50 text-collapse"
                : measuring === "a" ? "border-quantum bg-quantum-50 animate-pulse"
                : "border-line bg-paper text-ink-soft"
            }`}>
              {result ? result.a : measuring === "a" ? "?" : "—"}
            </div>
          </div>

          {/* Connection */}
          <div className="flex flex-col items-center gap-1">
            <svg width="80" height="30" viewBox="0 0 80 30">
              {mode === "entangled" ? (
                <>
                  <line x1="0" y1="15" x2="80" y2="15"
                    stroke="rgb(var(--color-quantum))" strokeWidth="2"
                    strokeDasharray="5 4"
                    opacity={result ? 1 : entanglePulse} />
                  {!result && (
                    <circle cx={40 + Math.sin((pulse / 60) * Math.PI * 2) * 20} cy="15" r="3"
                      fill="rgb(var(--color-quantum))" opacity="0.8" />
                  )}
                </>
              ) : (
                <line x1="0" y1="15" x2="80" y2="15"
                  stroke="rgb(var(--color-line))" strokeWidth="1.5" strokeDasharray="3 5" />
              )}
            </svg>
            <span className="font-mono text-[10px] text-ink-soft">
              {mode === "entangled" ? "entangled" : "no link"}
            </span>
          </div>

          {/* Qubit B */}
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono text-xs text-quantum">Qubit B</p>
            <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center font-mono text-2xl font-bold transition-all duration-500 ${
              result
                ? result.b === 0 ? "border-quantum bg-quantum text-white" : "border-collapse bg-collapse-50 text-collapse"
                : "border-line bg-paper text-ink-soft"
            }`}>
              {result ? result.b : "—"}
            </div>
          </div>
        </div>

        {/* Result label */}
        {result && (
          <div className="text-center mb-4">
            <span className={`font-mono text-sm font-bold rounded-full px-4 py-1.5 ${
              result.a === result.b ? "bg-quantum-50 text-quantum" : "bg-collapse-50 text-collapse"
            }`}>
              {result.a === result.b ? "✓ Matched" : "✗ Different"}
            </span>
          </div>
        )}

        <div className="text-center">
          <button onClick={measureBoth} disabled={measuring !== "none"}
            className="rounded-full bg-quantum text-white px-7 py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-50">
            {measuring !== "none" ? "Measuring…" : "Measure Both"}
          </button>
        </div>
      </div>

      {/* Correlation stats */}
      {history.length > 0 && (
        <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 mb-8 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
            Correlation rate — {history.length} measurement{history.length !== 1 ? "s" : ""}
          </p>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 bg-line rounded-full h-3 overflow-hidden">
              <div className="h-full bg-quantum rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-mono text-sm font-bold text-quantum w-12 text-right">{pct}%</span>
          </div>
          <p className="text-xs text-ink-soft">
            {mode === "entangled"
              ? "Entangled → expect ~100% correlation (Bell state |Φ+⟩)"
              : "Independent → expect ~50% correlation (pure chance)"}
          </p>

          {/* History grid */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {history.map((p, i) => (
              <span key={i} className={`font-mono text-xs px-2 py-0.5 rounded ${
                p.a === p.b ? "bg-quantum text-white" : "bg-collapse-50 text-collapse"
              }`}>
                {p.a}{p.b}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="prose-quantum max-w-2xl">
        <h2>What makes entanglement special</h2>
        <p>With independent qubits, each outcome is its own coin flip — matches happen about 50% of the time by chance. With entangled qubits (specifically a Bell state), measuring one qubit instantly determines the other — every time, regardless of any distance between them. This correlation is stronger than anything achievable classically, which is what <Link href="/people/john-bell" className="text-quantum hover:underline">John Bell's theorem</Link> proved in 1964.</p>
        <h2>Why it's not faster-than-light communication</h2>
        <p>Even though the correlation is instantaneous, neither qubit's outcome is controllable — both are genuinely random. You can't choose what value you'll measure, so no message can be encoded. Only by comparing results over a classical channel does the correlation become visible.</p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/superposition-visual" className="text-quantum hover:underline">→ Superposition — Visualized</Link>
          <Link href="/learn/interference-visual" className="text-quantum hover:underline">→ Interference — Visualized</Link>
          <Link href="/people/john-bell" className="text-quantum hover:underline">→ John Bell — who proved entanglement is real</Link>
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">→ BB84 — using entanglement for crypto</Link>
        </div>
      </div>
    </div>
  );
}
