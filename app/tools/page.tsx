"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

function QubitConverter() {
  const [qubits, setQubits] = useState(5);

  const states = useMemo(() => Math.pow(2, qubits), [qubits]);

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">Qubit-to-States Converter</h2>
      <p className="text-sm text-ink-muted mb-6">
        See how many simultaneous states N qubits can represent in superposition.
      </p>

      <label className="block text-sm font-medium text-ink mb-2">
        Number of qubits: <span className="font-mono text-quantum">{qubits}</span>
      </label>
      <input
        type="range"
        min={1}
        max={50}
        value={qubits}
        onChange={(e) => setQubits(Number(e.target.value))}
        className="w-full mb-6 accent-quantum"
      />

      <div className="rounded-lg bg-quantum-50 p-5 text-center">
        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
          2^{qubits} possible states
        </p>
        <p className="font-mono text-2xl md:text-3xl font-bold text-ink break-all">
          {states.toLocaleString()}
        </p>
      </div>

      <p className="text-xs text-ink-soft mt-4">
        {qubits <= 20
          ? "A classical computer can enumerate this many states without much trouble."
          : qubits <= 40
          ? "This many states would already strain classical supercomputers to represent simultaneously."
          : "At this scale, no classical computer could ever store all these states in memory at once — more than the number of atoms in a human body."}
      </p>
    </div>
  );
}

function ProbabilityCalculator() {
  const [alpha, setAlpha] = useState(0.707);

  const alphaSq = alpha * alpha;
  const betaSq = Math.max(0, 1 - alphaSq);
  const beta = Math.sqrt(betaSq);
  const isValid = alphaSq <= 1;

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">Probability Amplitude Calculator</h2>
      <p className="text-sm text-ink-muted mb-6">
        For a qubit |ψ⟩ = α|0⟩ + β|1⟩, adjust α and see the resulting
        measurement probabilities. Since |α|² + |β|² = 1, β is calculated automatically.
      </p>

      <label className="block text-sm font-medium text-ink mb-2">
        α (amplitude of |0⟩): <span className="font-mono text-quantum">{alpha.toFixed(3)}</span>
      </label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={alpha}
        onChange={(e) => setAlpha(Number(e.target.value))}
        className="w-full mb-6 accent-quantum"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="rounded-lg bg-quantum-50 p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">P(measure 0)</p>
          <p className="font-mono text-2xl font-bold text-ink">{(alphaSq * 100).toFixed(1)}%</p>
        </div>
        <div className="rounded-lg bg-collapse-50 p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-collapse mb-1">P(measure 1)</p>
          <p className="font-mono text-2xl font-bold text-ink">{(betaSq * 100).toFixed(1)}%</p>
        </div>
      </div>

      {/* Visual bar */}
      <div className="h-8 rounded-full overflow-hidden flex border border-line">
        <div
          className="bg-quantum flex items-center justify-center text-white text-xs font-mono transition-all"
          style={{ width: `${alphaSq * 100}%` }}
        >
          {alphaSq > 0.12 ? "|0⟩" : ""}
        </div>
        <div
          className="bg-collapse flex items-center justify-center text-white text-xs font-mono transition-all"
          style={{ width: `${betaSq * 100}%` }}
        >
          {betaSq > 0.12 ? "|1⟩" : ""}
        </div>
      </div>

      <p className="text-xs text-ink-soft mt-4 font-mono">
        |ψ⟩ = {alpha.toFixed(3)}|0⟩ + {beta.toFixed(3)}|1⟩
      </p>
    </div>
  );
}

function BellStateExplorer() {
  const [measurement, setMeasurement] = useState<null | 0 | 1>(null);

  const flip = () => {
    setMeasurement(Math.random() < 0.5 ? 0 : 1);
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">Bell State Measurement Simulator</h2>
      <p className="text-sm text-ink-muted mb-6">
        Two qubits are prepared in the entangled Bell state |Φ+⟩ = (1/√2)(|00⟩ + |11⟩).
        Simulate measuring Qubit A — Qubit B's result is always perfectly correlated.
      </p>

      <button
        onClick={flip}
        className="w-full rounded-full bg-quantum text-white py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors mb-6"
      >
        Measure Qubit A
      </button>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-line p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-2">Qubit A</p>
          <p className="font-mono text-3xl font-bold text-quantum">
            {measurement === null ? "?" : measurement}
          </p>
        </div>
        <div className="rounded-lg border border-line p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-2">Qubit B</p>
          <p className="font-mono text-3xl font-bold text-quantum">
            {measurement === null ? "?" : measurement}
          </p>
        </div>
      </div>

      <p className="text-xs text-ink-soft mt-4">
        {measurement === null
          ? "Click the button to measure — notice both qubits always agree, even though each individual outcome is random."
          : `Both qubits collapsed to ${measurement} — try again, the result will be random (0 or 1) but always identical for both.`}
      </p>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Interactive
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Calculators
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Hands-on tools for building intuition about qubits, probability
        amplitudes, and entanglement — no quantum hardware required.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <QubitConverter />
        <ProbabilityCalculator />
      </div>

      <div className="max-w-2xl mb-12">
        <BellStateExplorer />
      </div>

      <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Want to understand the theory behind these tools?
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/what-is-a-qubit" className="text-quantum hover:underline">→ What is a Qubit?</Link>
          <Link href="/learn/superposition" className="text-quantum hover:underline">→ Superposition Explained</Link>
          <Link href="/learn/entanglement" className="text-quantum hover:underline">→ Entanglement Explained</Link>
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">→ What is a Bell State?</Link>
        </div>
      </div>
    </div>
  );
}
