"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ---------- 1. Quantum Random Number Generator ---------- */
export function QuantumRandomGenerator() {
  const [quantumBits, setQuantumBits] = useState<number[]>([]);
  const [classicalBits, setClassicalBits] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const generate = () => {
    // Simulating true quantum randomness: a qubit in equal superposition,
    // measured — genuinely 50/50 with no internal state or seed.
    const newQ = Array.from({ length: 20 }, () => (Math.random() < 0.5 ? 0 : 1));
    // "Classical" side uses the same Math.random for visual fairness, but
    // the point made below is conceptual (seeded vs physical), not a
    // statistical difference visible in this demo.
    const newC = Array.from({ length: 20 }, (_, i) => (i % 2 === 0 ? 0 : 1)).sort(
      () => Math.random() - 0.5
    );
    setQuantumBits(newQ);
    setClassicalBits(newC);
    setCount((c) => c + 1);
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">6. Quantum Random Number Generator</h2>
      <p className="text-sm text-ink-muted mb-5">
        Measuring a qubit in equal{" "}
        <Link href="/dictionary/superposition" className="text-quantum hover:underline">
          superposition
        </Link>{" "}
        produces a genuinely unpredictable 0 or 1 — not a number calculated
        from a hidden formula, the way classical "random" numbers are. This
        is the basis of real commercial quantum random number generators.
      </p>

      <button
        onClick={generate}
        className="w-full rounded-full bg-quantum text-white py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors mb-6"
      >
        Measure 20 Qubits
      </button>

      {quantumBits.length > 0 && (
        <>
          <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">
            Quantum measurement results (run #{count})
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {quantumBits.map((b, i) => (
              <span key={i} className="w-7 h-7 flex items-center justify-center rounded bg-quantum-50 font-mono text-xs font-bold text-quantum">
                {b}
              </span>
            ))}
          </div>
        </>
      )}

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          Quantum vs classical "random"
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Classical software random number generators use a deterministic
          mathematical formula — given the same starting "seed," they
          produce the exact same sequence every time, making them
          predictable in principle. A quantum measurement has no such
          seed — the outcome is fundamentally undetermined until measured,
          per the{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            measurement collapse
          </Link>{" "}
          process, not just difficult to predict.
        </p>
      </div>
    </div>
  );
}

/* ---------- 2. Encryption Breaking Time Estimator ---------- */
export function EncryptionTimeEstimator() {
  const [bits, setBits] = useState(2048);

  // Rough, illustrative complexity-class scaling (not literal runtime claims):
  // classical brute-force-style assumption scales exponentially with key size,
  // Shor's algorithm scales polynomially — used here only to illustrate the
  // qualitative gap described in our Shor's Algorithm article, not as a
  // precise hardware benchmark.
  const classicalYears = Math.pow(2, bits / 50) / 1e6; // illustrative scaling only
  const quantumSeconds = Math.pow(bits, 3) / 1e6; // illustrative polynomial scaling only

  const formatBig = (n: number) => {
    if (n > 1e15) return "longer than the age of the universe";
    if (n > 1e9) return `~${(n / 1e9).toFixed(1)} billion years`;
    if (n > 1e6) return `~${(n / 1e6).toFixed(1)} million years`;
    if (n > 1e3) return `~${(n / 1e3).toFixed(1)} thousand years`;
    if (n > 1) return `~${n.toFixed(1)} years`;
    return "under a year";
  };

  const formatSmall = (s: number) => {
    if (s < 1) return "under a second";
    if (s < 60) return `~${s.toFixed(0)} seconds`;
    if (s < 3600) return `~${(s / 60).toFixed(0)} minutes`;
    if (s < 86400) return `~${(s / 3600).toFixed(1)} hours`;
    return `~${(s / 86400).toFixed(1)} days`;
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">7. Encryption Breaking Time Estimator</h2>
      <p className="text-sm text-ink-muted mb-5">
        Adjust an RSA-style key length and see the qualitative gap between
        classical brute-force difficulty and{" "}
        <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
          Shor's Algorithm's
        </Link>{" "}
        polynomial scaling on a large, error-corrected quantum computer.
      </p>

      <label className="block text-sm font-medium text-ink mb-2">
        Key length: <span className="font-mono text-quantum">{bits}-bit</span>
      </label>
      <input
        type="range"
        min={256}
        max={4096}
        step={256}
        value={bits}
        onChange={(e) => setBits(Number(e.target.value))}
        className="w-full mb-6 accent-quantum"
      />

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="rounded-lg bg-paper border border-line p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-1">Classical computer</p>
          <p className="font-mono text-sm font-bold text-ink">{formatBig(classicalYears)}</p>
        </div>
        <div className="rounded-lg bg-quantum-50 p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">Large quantum computer</p>
          <p className="font-mono text-sm font-bold text-ink">{formatSmall(quantumSeconds)}</p>
        </div>
      </div>

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          Important caveat
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          These numbers are illustrative of the exponential-vs-polynomial
          gap discussed in our{" "}
          <Link href="/learn/quantum-complexity-theory" className="text-quantum hover:underline">
            Quantum Complexity Theory
          </Link>{" "}
          article — not a precise hardware benchmark. No quantum computer
          today is anywhere close to large or reliable enough to run Shor's
          Algorithm at these key sizes. See our{" "}
          <Link href="/dictionary/harvest-now-decrypt-later" className="text-quantum hover:underline">
            Harvest Now, Decrypt Later
          </Link>{" "}
          entry for why this matters today anyway.
        </p>
      </div>
    </div>
  );
}

/* ---------- 3. Qubit Infrastructure Cost Estimator ---------- */
export function QubitCostEstimator() {
  const [qubits, setQubits] = useState(100);

  // Illustrative, rough order-of-magnitude figures for engaging intuition only —
  // not a real procurement quote. Explicitly labeled as such in the UI.
  const fridgeCost = 2_000_000;
  const perQubitControlCost = 15_000;
  const totalEstimate = fridgeCost + qubits * perQubitControlCost;

  const formatMoney = (n: number) => {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    return `$${(n / 1000).toFixed(0)}k`;
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">8. Qubit Infrastructure Cost Estimator</h2>
      <p className="text-sm text-ink-muted mb-5">
        A playful, order-of-magnitude estimate of what it might cost to
        build a superconducting quantum processor with a given qubit count
        — dilution refrigerator plus per-qubit control electronics.
      </p>

      <label className="block text-sm font-medium text-ink mb-2">
        Qubit count: <span className="font-mono text-quantum">{qubits}</span>
      </label>
      <input
        type="range"
        min={5}
        max={1000}
        step={5}
        value={qubits}
        onChange={(e) => setQubits(Number(e.target.value))}
        className="w-full mb-6 accent-quantum"
      />

      <div className="rounded-lg bg-quantum-50 p-5 text-center mb-4">
        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
          Rough estimated infrastructure cost
        </p>
        <p className="font-mono text-2xl md:text-3xl font-bold text-ink">
          {formatMoney(totalEstimate)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-center">
        <div className="rounded-lg border border-line p-3">
          <p className="font-mono text-[11px] text-ink-soft mb-1">Dilution refrigerator</p>
          <p className="font-mono text-sm font-semibold text-ink">{formatMoney(fridgeCost)}</p>
        </div>
        <div className="rounded-lg border border-line p-3">
          <p className="font-mono text-[11px] text-ink-soft mb-1">Control electronics</p>
          <p className="font-mono text-sm font-semibold text-ink">{formatMoney(qubits * perQubitControlCost)}</p>
        </div>
      </div>

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          This is a rough illustration, not a real quote
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Real costs vary enormously by qubit quality, fabrication yield,
          and vendor — this tool exists to build intuition for why a{" "}
          <Link href="/dictionary/dilution-refrigerator" className="text-quantum hover:underline">
            dilution refrigerator
          </Link>{" "}
          is a large fixed cost regardless of qubit count, while control
          electronics scale with each additional qubit. Compare this
          intuition against{" "}
          <Link href="/companies/rigetti" className="text-quantum hover:underline">
            Rigetti's Novera
          </Link>
          , the first commercially purchasable QPU.
        </p>
      </div>
    </div>
  );
}

/* ---------- 4. Step-by-Step Bell State Builder ---------- */
export function StepByStepBellBuilder() {
  const [step, setStep] = useState(0);

  const steps = [
    { label: "Start: |00⟩", desc: "Both qubits begin in the |0⟩ state." },
    { label: "Apply H to qubit A", desc: "Qubit A enters superposition: (1/√2)(|00⟩ + |10⟩)." },
    { label: "Apply CNOT (A → B)", desc: "Entanglement created: (1/√2)(|00⟩ + |11⟩) — the Bell state." },
    { label: "Measure", desc: "Both qubits collapse to the same random value — 0 or 1, always matching." },
  ];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const reset = () => setStep(0);

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">9. Step-by-Step Bell State Builder</h2>
      <p className="text-sm text-ink-muted mb-5">
        Walk through exactly how a{" "}
        <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
          Bell state
        </Link>{" "}
        gets built, one gate at a time — the same{" "}
        <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
          H
        </Link>{" "}
        +{" "}
        <Link href="/dictionary/cnot-gate" className="text-quantum hover:underline">
          CNOT
        </Link>{" "}
        sequence used in our{" "}
        <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
          Your First Qiskit Circuit
        </Link>{" "}
        tutorial.
      </p>

      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-quantum" : "bg-line"}`}
          />
        ))}
      </div>

      <div className="rounded-lg bg-quantum-50 p-5 mb-4">
        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
          Step {step + 1} of {steps.length}
        </p>
        <p className="font-mono text-lg font-bold text-ink mb-2">{steps[step].label}</p>
        <p className="text-sm text-ink-muted leading-relaxed">{steps[step].desc}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={next}
          disabled={step === steps.length - 1}
          className="flex-1 rounded-full bg-quantum text-white py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next Step →
        </button>
        <button
          onClick={reset}
          className="rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink-soft hover:text-collapse hover:border-collapse transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

/* ---------- 5. Quantum Algorithm Picker Quiz ---------- */
type QuizAnswer = "search" | "factor" | "simulate" | "optimize" | null;

export function AlgorithmPickerQuiz() {
  const [answer, setAnswer] = useState<QuizAnswer>(null);

  const results: Record<NonNullable<QuizAnswer>, { name: string; href: string; reason: string }> = {
    search: {
      name: "Grover's Algorithm",
      href: "/algorithms/grovers-algorithm",
      reason: "designed for finding an item in an unsorted dataset with a quadratic speedup.",
    },
    factor: {
      name: "Shor's Algorithm",
      href: "/algorithms/shors-algorithm",
      reason: "designed for factoring large numbers with an exponential speedup.",
    },
    simulate: {
      name: "VQE (Variational Quantum Eigensolver)",
      href: "/algorithms/vqe",
      reason: "designed for simulating molecules and materials on near-term hardware.",
    },
    optimize: {
      name: "QAOA",
      href: "/algorithms/qaoa",
      reason: "designed for finding good approximate solutions to optimization problems.",
    },
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">10. Which Algorithm Fits My Problem?</h2>
      <p className="text-sm text-ink-muted mb-5">
        Answer one question to get pointed toward the right starting point
        in our{" "}
        <Link href="/algorithms" className="text-quantum hover:underline">
          50-algorithm database
        </Link>
        .
      </p>

      <p className="text-sm font-medium text-ink mb-3">
        What does your problem mostly involve?
      </p>
      <div className="grid grid-cols-2 gap-2 mb-5">
        {[
          { key: "search" as const, label: "Searching / finding something" },
          { key: "factor" as const, label: "Factoring / cryptography" },
          { key: "simulate" as const, label: "Simulating chemistry / materials" },
          { key: "optimize" as const, label: "Optimization / scheduling" },
        ].map((opt) => (
          <button
            key={opt.key}
            onClick={() => setAnswer(opt.key)}
            className={`rounded-lg border px-3 py-3 text-sm font-medium text-left transition-colors ${
              answer === opt.key
                ? "bg-quantum text-white border-quantum"
                : "bg-paper text-ink-muted border-line hover:border-quantum hover:text-quantum"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {answer && (
        <div className="rounded-lg bg-quantum-50 p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
            Recommended starting point
          </p>
          <Link
            href={results[answer].href}
            className="font-serif text-lg font-semibold text-ink hover:text-quantum transition-colors block mb-2"
          >
            {results[answer].name} →
          </Link>
          <p className="text-sm text-ink-muted leading-relaxed">
            {results[answer].reason} This is a starting point, not the only
            relevant algorithm — browse the full{" "}
            <Link href="/algorithms" className="text-quantum hover:underline">
              Algorithms Database
            </Link>{" "}
            for related options.
          </p>
        </div>
      )}
    </div>
  );
}
