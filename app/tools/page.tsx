"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

function QubitConverter() {
  const [qubits, setQubits] = useState(5);
  const states = useMemo(() => Math.pow(2, qubits), [qubits]);

  const context =
    qubits <= 8
      ? "At this size, a classical computer can easily list every possible state — this is roughly the scale of a simple classical lookup table."
      : qubits <= 20
      ? "A classical computer can still enumerate this many states, but it's starting to take real memory and time — this is roughly the scale of a large spreadsheet or small database."
      : qubits <= 40
      ? "This is now beyond what a single classical computer can comfortably hold in memory at once — it would require distributing the states across many machines, similar to how Google's Sycamore experiment pushed the limits of classical simulation."
      : "At this scale, no classical computer — not even the world's largest supercomputer — could ever store all these states simultaneously. For comparison, the number of atoms in the observable universe is estimated around 10^80, and 2^270 already exceeds that.";

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">1. Qubit-to-States Converter</h2>
      <p className="text-sm text-ink-muted mb-5">
        Every qubit you add doesn't just add one more possibility — it{" "}
        <strong>doubles</strong> the total number of states the system can
        represent in superposition. This slider shows exactly how fast that
        growth becomes unmanageable for classical computers.
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

      <div className="rounded-lg bg-quantum-50 p-5 text-center mb-4">
        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
          2^{qubits} possible states
        </p>
        <p className="font-mono text-2xl md:text-3xl font-bold text-ink break-all">
          {states.toLocaleString()}
        </p>
      </div>

      <p className="text-sm text-ink-muted leading-relaxed mb-4">{context}</p>

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          Try this
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Drag the slider to <strong>53</strong> (if the range allowed it) —
          that's roughly the qubit count Google's Sycamore processor used in
          its 2019 quantum supremacy claim. The resulting state count is
          part of why that demonstration was considered significant, even
          though the task itself had no practical application. See the{" "}
          <Link href="/algorithms/quantum-supremacy-sampling" className="text-quantum hover:underline">
            full algorithm writeup
          </Link>{" "}
          for context.
        </p>
      </div>
    </div>
  );
}

function ProbabilityCalculator() {
  const [alpha, setAlpha] = useState(0.707);

  const alphaSq = alpha * alpha;
  const betaSq = Math.max(0, 1 - alphaSq);
  const beta = Math.sqrt(betaSq);

  const interpretation =
    Math.abs(alphaSq - 0.5) < 0.02
      ? "This is almost exactly an equal superposition — the same state a Hadamard gate produces from |0⟩, and the starting point of most quantum algorithms."
      : alphaSq > 0.9
      ? "This qubit is heavily weighted toward |0⟩ — measuring it will almost always give 0, similar to a classical bit that's 'mostly' 0."
      : alphaSq < 0.1
      ? "This qubit is heavily weighted toward |1⟩ — measuring it will almost always give 1."
      : "This is an uneven superposition — both outcomes are possible, but one is noticeably more likely than the other.";

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">2. Probability Amplitude Calculator</h2>
      <p className="text-sm text-ink-muted mb-5">
        A qubit's state |ψ⟩ = α|0⟩ + β|1⟩ is defined by two numbers called{" "}
        <strong>amplitudes</strong>. Squaring an amplitude gives you the
        probability of measuring that outcome. Because total probability
        must equal 100%, |α|² + |β|² always equals 1 — so adjusting α here
        automatically determines β.
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

      <div className="h-8 rounded-full overflow-hidden flex border border-line mb-4">
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

      <p className="text-xs text-ink-soft mb-4 font-mono">
        |ψ⟩ = {alpha.toFixed(3)}|0⟩ + {beta.toFixed(3)}|1⟩
      </p>

      <p className="text-sm text-ink-muted leading-relaxed mb-4">{interpretation}</p>

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          Try this
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Set α to exactly <strong>0.707</strong> (≈ 1/√2) — this is the
          famous equal superposition state a single{" "}
          <Link href="/dictionary/quantum-gate" className="text-quantum hover:underline">
            Hadamard gate
          </Link>{" "}
          produces, giving a perfect 50/50 split. It's the opening move of
          nearly every quantum algorithm on this site, including{" "}
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
            Grover's Algorithm
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function BellStateExplorer() {
  const [measurement, setMeasurement] = useState<null | 0 | 1>(null);
  const [history, setHistory] = useState<(0 | 1)[]>([]);

  const flip = () => {
    const result = Math.random() < 0.5 ? 0 : 1;
    setMeasurement(result);
    setHistory((h) => [...h.slice(-9), result]);
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">3. Bell State Measurement Simulator</h2>
      <p className="text-sm text-ink-muted mb-5">
        Two qubits are prepared in the entangled{" "}
        <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
          Bell state
        </Link>{" "}
        |Φ+⟩ = (1/√2)(|00⟩ + |11⟩). Neither qubit has a definite value before
        measurement — but the moment you measure Qubit A, Qubit B's outcome
        is instantly determined too, no matter how far apart they are.
      </p>

      <button
        onClick={flip}
        className="w-full rounded-full bg-quantum text-white py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors mb-6"
      >
        Measure Qubit A
      </button>

      <div className="grid grid-cols-2 gap-4 mb-4">
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

      {history.length > 0 && (
        <div className="mb-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
            Last {history.length} measurements (A = B every time)
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {history.map((h, i) => (
              <span key={i} className="font-mono text-xs bg-paper border border-line rounded px-2 py-1 text-ink-muted">
                {h}
              </span>
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-ink-muted leading-relaxed mb-4">
        {measurement === null
          ? "Click the button a few times — notice the two qubits always agree, even though each individual outcome is random."
          : "Click again — you'll get a different random 0 or 1 each time, but A and B will never disagree."}
      </p>

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          What this proves (and doesn't)
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          This correlation is real and has been confirmed experimentally
          countless times — but it cannot be used to send information
          faster than light. To even notice the correlation, someone has to
          physically bring the two results together and compare them, which
          takes ordinary, slower-than-light communication. See our{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            Entanglement entry
          </Link>{" "}
          for the full explanation of why.
        </p>
      </div>
    </div>
  );
}

function CircuitBuilder() {
  const [gates, setGates] = useState<("H" | "X" | "Z")[]>([]);

  const addGate = (gate: "H" | "X" | "Z") => {
    if (gates.length < 5) setGates([...gates, gate]);
  };
  const reset = () => setGates([]);

  // Simulate state starting from |0> through H, X, Z gates (real-valued amplitudes only, simplified)
  const simulate = () => {
    let a0 = 1;
    let a1 = 0;
    for (const g of gates) {
      if (g === "H") {
        const newA0 = (a0 + a1) / Math.sqrt(2);
        const newA1 = (a0 - a1) / Math.sqrt(2);
        a0 = newA0;
        a1 = newA1;
      } else if (g === "X") {
        const temp = a0;
        a0 = a1;
        a1 = temp;
      } else if (g === "Z") {
        a1 = -a1;
      }
    }
    return { a0, a1 };
  };

  const { a0, a1 } = simulate();
  const p0 = a0 * a0;
  const p1 = a1 * a1;

  const gateDescriptions: Record<string, string> = {
    H: "Hadamard — creates or modifies superposition",
    X: "Pauli-X — flips |0⟩ and |1⟩ (the quantum NOT gate)",
    Z: "Pauli-Z — flips the sign of |1⟩'s amplitude (a phase flip)",
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">4. Mini Quantum Circuit Builder</h2>
      <p className="text-sm text-ink-muted mb-5">
        Build a tiny quantum circuit by stacking gates on a single qubit
        starting in state |0⟩, and watch the resulting probabilities update
        live. Real quantum circuits chain together exactly this kind of
        gate sequence — see our{" "}
        <Link href="/dictionary/quantum-circuit" className="text-quantum hover:underline">
          Quantum Circuit
        </Link>{" "}
        entry for the full picture.
      </p>

      <div className="flex gap-2 mb-4 flex-wrap">
        {(["H", "X", "Z"] as const).map((g) => (
          <button
            key={g}
            onClick={() => addGate(g)}
            disabled={gates.length >= 5}
            className="rounded-lg border border-line bg-paper px-4 py-2 text-sm font-mono font-semibold text-ink hover:border-quantum hover:text-quantum transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {g}
          </button>
        ))}
        <button
          onClick={reset}
          className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink-soft hover:text-collapse hover:border-collapse transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Circuit visualization */}
      <div className="rounded-lg border border-line bg-paper p-4 mb-4 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          <span className="font-mono text-sm text-ink-soft">|0⟩ —</span>
          {gates.length === 0 ? (
            <span className="text-sm text-ink-soft italic">add a gate below</span>
          ) : (
            gates.map((g, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-9 h-9 flex items-center justify-center rounded border-2 border-quantum bg-quantum-50 font-mono font-bold text-quantum text-sm">
                  {g}
                </span>
                {i < gates.length - 1 && <span className="text-ink-soft">—</span>}
              </span>
            ))
          )}
          {gates.length > 0 && <span className="font-mono text-sm text-ink-soft">— ?</span>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="rounded-lg bg-quantum-50 p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">P(measure 0)</p>
          <p className="font-mono text-xl font-bold text-ink">{(p0 * 100).toFixed(1)}%</p>
        </div>
        <div className="rounded-lg bg-collapse-50 p-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-collapse mb-1">P(measure 1)</p>
          <p className="font-mono text-xl font-bold text-ink">{(p1 * 100).toFixed(1)}%</p>
        </div>
      </div>

      {gates.length > 0 && (
        <div className="mb-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-1">Last gate added</p>
          <p className="text-sm text-ink-muted">{gateDescriptions[gates[gates.length - 1]]}</p>
        </div>
      )}

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          Try this
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Add <strong>H</strong> then <strong>Z</strong> then <strong>H</strong> again.
          You'll land on |1⟩ with 100% probability — this exact three-gate
          sequence (H–Z–H) behaves like an X gate, a neat example of how
          different gate sequences can produce identical results.
        </p>
      </div>
    </div>
  );
}

function CoherenceVisualizer() {
  const [t1, setT1] = useState(100);
  const [elapsed, setElapsed] = useState(40);

  // Probability the qubit is still in its original state, exponential decay model
  const survivalProbability = Math.exp(-elapsed / t1);

  const platformContext =
    t1 >= 80
      ? "Comparable to trapped-ion systems like IonQ Forte, which boast coherence times far longer than superconducting qubits."
      : t1 >= 30
      ? "Roughly in the range of modern superconducting processors like IBM's Heron or Condor."
      : "Shorter than most modern hardware — useful for visualizing just how fast decoherence can dominate without error correction.";

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h2 className="font-serif text-xl font-semibold text-ink mb-1">5. Decoherence Time Visualizer</h2>
      <p className="text-sm text-ink-muted mb-5">
        Every qubit gradually loses its quantum state through{" "}
        <Link href="/dictionary/decoherence" className="text-quantum hover:underline">
          decoherence
        </Link>
        . This tool models that decay using a simplified exponential curve
        based on a qubit's <strong>T₁ time</strong> — the characteristic time
        scale at which a qubit tends to lose its state.
      </p>

      <label className="block text-sm font-medium text-ink mb-2">
        T₁ coherence time: <span className="font-mono text-quantum">{t1} µs</span>
      </label>
      <input
        type="range"
        min={10}
        max={300}
        step={5}
        value={t1}
        onChange={(e) => setT1(Number(e.target.value))}
        className="w-full mb-4 accent-quantum"
      />

      <label className="block text-sm font-medium text-ink mb-2">
        Time elapsed since preparation: <span className="font-mono text-quantum">{elapsed} µs</span>
      </label>
      <input
        type="range"
        min={0}
        max={300}
        step={5}
        value={elapsed}
        onChange={(e) => setElapsed(Number(e.target.value))}
        className="w-full mb-6 accent-collapse"
      />

      <div className="rounded-lg bg-quantum-50 p-5 text-center mb-4">
        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">
          Probability state survives intact
        </p>
        <p className="font-mono text-2xl md:text-3xl font-bold text-ink">
          {(survivalProbability * 100).toFixed(1)}%
        </p>
      </div>

      {/* Simple decay bar */}
      <div className="h-6 rounded-full overflow-hidden border border-line mb-4">
        <div
          className="h-full bg-quantum transition-all"
          style={{ width: `${survivalProbability * 100}%` }}
        />
      </div>

      <p className="text-sm text-ink-muted leading-relaxed mb-4">{platformContext}</p>

      <div className="rounded-lg border border-line bg-paper p-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
          Try this
        </p>
        <p className="text-sm text-ink-muted leading-relaxed">
          Set elapsed time equal to T₁ exactly. The survival probability
          will always land at about <strong>36.8%</strong> (1/e) — this is
          the actual mathematical definition of T₁: the time at which a
          qubit's signal has decayed to about a third of its original
          strength. Compare this against real hardware on our{" "}
          <Link href="/hardware" className="text-quantum hover:underline">
            Hardware Database
          </Link>
          .
        </p>
      </div>
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
      <p className="text-ink-muted max-w-2xl mb-4">
        Reading about superposition and entanglement only gets you so far —
        these five tools let you actually manipulate the numbers behind
        quantum mechanics and watch the results update in real time. No
        quantum hardware, no software installation, just the underlying
        math made interactive.
      </p>
      <p className="text-ink-muted max-w-2xl mb-10">
        Each tool below includes a guided "try this" example connecting the
        calculation back to a real concept, algorithm, or piece of hardware
        covered elsewhere on this site — use them alongside the{" "}
        <Link href="/learn" className="text-quantum hover:underline">
          Learning Center
        </Link>{" "}
        for the best results.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <QubitConverter />
        <ProbabilityCalculator />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <CircuitBuilder />
        <CoherenceVisualizer />
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
          <Link href="/dictionary/quantum-circuit" className="text-quantum hover:underline">→ What is a Quantum Circuit?</Link>
          <Link href="/learn/quantum-error-correction" className="text-quantum hover:underline">→ Quantum Error Correction</Link>
        </div>
      </div>
    </div>
  );
}
