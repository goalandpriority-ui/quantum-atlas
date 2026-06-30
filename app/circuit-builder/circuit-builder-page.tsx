"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

type Gate = {
  id: string;
  name: string;
  symbol: string;
  color: string;
  qubits: 1 | 2;
  description: string;
  matrix?: string;
};

type CircuitCell = { gate: Gate; targetQubit?: number } | null;

const GATES: Gate[] = [
  { id: "H", name: "Hadamard", symbol: "H", color: "bg-quantum-50 border-quantum text-quantum", qubits: 1, description: "Creates equal superposition: |0⟩ → (|0⟩+|1⟩)/√2", matrix: "½[[1,1],[1,-1]]" },
  { id: "X", name: "Pauli-X (NOT)", symbol: "X", color: "bg-collapse-50 border-collapse text-collapse", qubits: 1, description: "Bit flip: |0⟩↔|1⟩, the quantum NOT gate", matrix: "[[0,1],[1,0]]" },
  { id: "Z", name: "Pauli-Z", symbol: "Z", color: "bg-collapse-50 border-collapse text-collapse", qubits: 1, description: "Phase flip: |1⟩ → -|1⟩, leaves |0⟩ unchanged", matrix: "[[1,0],[0,-1]]" },
  { id: "Y", name: "Pauli-Y", symbol: "Y", color: "bg-collapse-50 border-collapse text-collapse", qubits: 1, description: "Combines X and Z rotations", matrix: "[[0,-i],[i,0]]" },
  { id: "S", name: "S Gate", symbol: "S", color: "bg-paper border-line text-ink", qubits: 1, description: "Phase gate: |1⟩ → i|1⟩", matrix: "[[1,0],[0,i]]" },
  { id: "T", name: "T Gate", symbol: "T", color: "bg-paper border-line text-ink", qubits: 1, description: "π/8 gate: |1⟩ → e^(iπ/4)|1⟩", matrix: "[[1,0],[0,e^(iπ/4)]]" },
  { id: "CNOT", name: "CNOT", symbol: "CX", color: "bg-quantum-50 border-quantum text-quantum", qubits: 2, description: "Controlled-NOT: flips target if control is |1⟩. Creates entanglement." },
  { id: "M", name: "Measure", symbol: "M", color: "bg-paper border-line text-ink-muted", qubits: 1, description: "Measures the qubit, collapsing superposition to 0 or 1" },
];

const NUM_QUBITS = 3;
const NUM_STEPS = 7;

type CircuitState = (CircuitCell)[][];

function emptyCircuit(): CircuitState {
  return Array.from({ length: NUM_QUBITS }, () => Array(NUM_STEPS).fill(null));
}

function simulateCircuit(circuit: CircuitState): { probs: number[]; state: string } {
  // Simplified simulation for visual feedback — 2^n state vector for n qubits
  const n = NUM_QUBITS;
  const dim = 1 << n;
  let state = new Array(dim).fill(0).map((_, i) => ({ re: i === 0 ? 1 : 0, im: 0 }));

  for (let step = 0; step < NUM_STEPS; step++) {
    for (let q = 0; q < n; q++) {
      const cell = circuit[q][step];
      if (!cell) continue;

      if (cell.gate.id === "H") {
        const inv = 1 / Math.sqrt(2);
        const newState = [...state.map(s => ({ ...s }))];
        for (let i = 0; i < dim; i++) {
          const bit = (i >> (n - 1 - q)) & 1;
          const partner = i ^ (1 << (n - 1 - q));
          if (bit === 0) {
            newState[i] = { re: inv * (state[i].re + state[partner].re), im: inv * (state[i].im + state[partner].im) };
            newState[partner] = { re: inv * (state[i].re - state[partner].re), im: inv * (state[i].im - state[partner].im) };
          }
        }
        state = newState;
      } else if (cell.gate.id === "X") {
        const newState = [...state.map(s => ({ ...s }))];
        for (let i = 0; i < dim; i++) {
          const partner = i ^ (1 << (n - 1 - q));
          if (i < partner) { [newState[i], newState[partner]] = [newState[partner], newState[i]]; }
        }
        state = newState;
      } else if (cell.gate.id === "Z") {
        for (let i = 0; i < dim; i++) {
          if ((i >> (n - 1 - q)) & 1) { state[i] = { re: -state[i].re, im: -state[i].im }; }
        }
      } else if (cell.gate.id === "CNOT" && cell.targetQubit !== undefined) {
        const ctrl = q;
        const tgt = cell.targetQubit;
        const newState = [...state.map(s => ({ ...s }))];
        for (let i = 0; i < dim; i++) {
          const ctrlBit = (i >> (n - 1 - ctrl)) & 1;
          if (ctrlBit === 1) {
            const partner = i ^ (1 << (n - 1 - tgt));
            if (i < partner) { [newState[i], newState[partner]] = [newState[partner], newState[i]]; }
          }
        }
        state = newState;
      }
    }
  }

  const probs = state.map(s => Math.round((s.re * s.re + s.im * s.im) * 1000) / 1000);
  const stateStr = state
    .map((s, i) => {
      const p = s.re * s.re + s.im * s.im;
      if (p < 0.001) return null;
      const basisState = i.toString(2).padStart(n, "0");
      const amp = Math.round(Math.sqrt(p) * 100) / 100;
      return `${amp}|${basisState}⟩`;
    })
    .filter(Boolean)
    .join(" + ");

  return { probs, state: stateStr || "|000⟩" };
}

function detectCircuitPattern(circuit: CircuitState): string | null {
  const hasH0 = circuit[0].some(c => c?.gate.id === "H");
  const hasCNOT = circuit.some(row => row.some(c => c?.gate.id === "CNOT"));
  const hasX = circuit.some(row => row.some(c => c?.gate.id === "X"));
  const hasZ = circuit.some(row => row.some(c => c?.gate.id === "Z"));

  if (hasH0 && hasCNOT) return "Bell State — two entangled qubits! Measuring one instantly determines the other.";
  if (hasH0 && !hasCNOT) return "Superposition — qubit 0 is now in an equal blend of |0⟩ and |1⟩.";
  if (hasX && !hasH0 && !hasCNOT) return "Bit flip — this is the quantum NOT gate, same as a classical inverter.";
  if (hasH0 && hasX && hasZ) return "This looks like the start of a Deutsch-Jozsa or Grover circuit!";
  return null;
}

export default function CircuitBuilderPage() {
  const [circuit, setCircuit] = useState<CircuitState>(emptyCircuit);
  const [selectedGate, setSelectedGate] = useState<Gate | null>(null);
  const [cnotControl, setCnotControl] = useState<number | null>(null);
  const [simResult, setSimResult] = useState<{ probs: number[]; state: string } | null>(null);
  const [dragGate, setDragGate] = useState<Gate | null>(null);

  const handleCellClick = useCallback((qubit: number, step: number) => {
    if (!selectedGate) return;

    if (selectedGate.id === "CNOT") {
      if (cnotControl === null) {
        setCnotControl(qubit);
        return;
      }
      if (cnotControl === qubit) { setCnotControl(null); return; }
      setCircuit(prev => {
        const next = prev.map(row => [...row]);
        next[cnotControl][step] = { gate: selectedGate, targetQubit: qubit };
        next[qubit][step] = { gate: { ...selectedGate, symbol: "⊕" }, targetQubit: cnotControl };
        return next;
      });
      setCnotControl(null);
      return;
    }

    setCircuit(prev => {
      const next = prev.map(row => [...row]);
      next[qubit][step] = { gate: selectedGate };
      return next;
    });
  }, [selectedGate, cnotControl]);

  const handleCellRightClick = (e: React.MouseEvent, qubit: number, step: number) => {
    e.preventDefault();
    setCircuit(prev => {
      const next = prev.map(row => [...row]);
      next[qubit][step] = null;
      return next;
    });
  };

  const runSimulation = () => {
    const result = simulateCircuit(circuit);
    setSimResult(result);
  };

  const clearCircuit = () => {
    setCircuit(emptyCircuit());
    setSimResult(null);
    setCnotControl(null);
  };

  const loadPreset = (preset: "bell" | "ghz" | "teleport") => {
    const c = emptyCircuit();
    if (preset === "bell") {
      c[0][0] = { gate: GATES[0] }; // H on q0
      c[0][1] = { gate: GATES.find(g => g.id === "CNOT")!, targetQubit: 1 };
      c[1][1] = { gate: { ...GATES.find(g => g.id === "CNOT")!, symbol: "⊕" }, targetQubit: 0 };
    } else if (preset === "ghz") {
      c[0][0] = { gate: GATES[0] }; // H
      c[0][1] = { gate: GATES.find(g => g.id === "CNOT")!, targetQubit: 1 };
      c[1][1] = { gate: { ...GATES.find(g => g.id === "CNOT")!, symbol: "⊕" }, targetQubit: 0 };
      c[0][2] = { gate: GATES.find(g => g.id === "CNOT")!, targetQubit: 2 };
      c[2][2] = { gate: { ...GATES.find(g => g.id === "CNOT")!, symbol: "⊕" }, targetQubit: 0 };
    } else if (preset === "teleport") {
      c[1][0] = { gate: GATES[0] }; // H
      c[1][1] = { gate: GATES.find(g => g.id === "CNOT")!, targetQubit: 2 };
      c[2][1] = { gate: { ...GATES.find(g => g.id === "CNOT")!, symbol: "⊕" }, targetQubit: 1 };
    }
    setCircuit(c);
    setSimResult(null);
  };

  const pattern = detectCircuitPattern(circuit);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Interactive Tool
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-2">
        Quantum Circuit Builder
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Click a gate to select it, then click a circuit cell to place it.
        Right-click any cell to remove a gate. Run the simulation to see
        the resulting quantum state.
      </p>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Gate palette */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Gate Palette</p>
          <div className="space-y-2 mb-6">
            {GATES.map((gate) => (
              <button
                key={gate.id}
                onClick={() => { setSelectedGate(selectedGate?.id === gate.id ? null : gate); setCnotControl(null); }}
                className={`w-full text-left rounded-xl border-2 p-3 transition-all ${
                  selectedGate?.id === gate.id
                    ? "border-quantum bg-quantum-50 shadow-md"
                    : "border-line bg-surface hover:border-quantum"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center font-mono text-sm font-bold shrink-0 ${gate.color}`}>
                    {gate.symbol}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{gate.name}</p>
                    <p className="text-xs text-ink-soft leading-tight">{gate.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {selectedGate?.id === "CNOT" && (
            <div className="rounded-lg bg-quantum-50 border border-quantum-100 p-3 mb-4 text-xs text-quantum">
              {cnotControl === null
                ? "Click a qubit row to set the CONTROL qubit"
                : `Control set to Q${cnotControl + 1} — now click another qubit row for the TARGET`}
            </div>
          )}

          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-2">Presets</p>
          <div className="space-y-2">
            {[
              { key: "bell" as const, label: "Bell State", desc: "H + CNOT" },
              { key: "ghz" as const, label: "GHZ State", desc: "3-qubit entanglement" },
              { key: "teleport" as const, label: "Teleportation", desc: "Step 1 setup" },
            ].map(p => (
              <button
                key={p.key}
                onClick={() => loadPreset(p.key)}
                className="w-full text-left rounded-xl border border-line bg-surface px-3 py-2.5 hover:border-quantum transition-colors"
              >
                <p className="text-sm font-medium text-ink">{p.label}</p>
                <p className="text-xs text-ink-soft">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Circuit grid */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">Circuit</p>
            <span className="text-xs text-ink-soft">· Right-click to remove</span>
          </div>

          <div className="overflow-x-auto mb-4">
            <div className="inline-block min-w-full">
              {/* Step labels */}
              <div className="flex gap-2 ml-16 mb-1">
                {Array.from({ length: NUM_STEPS }, (_, i) => (
                  <div key={i} className="w-14 text-center font-mono text-[10px] text-ink-soft">t{i + 1}</div>
                ))}
              </div>

              {/* Qubit rows */}
              {Array.from({ length: NUM_QUBITS }, (_, q) => (
                <div key={q} className="flex items-center gap-2 mb-2">
                  <div className="w-14 shrink-0 text-right">
                    <span className="font-mono text-xs text-quantum font-semibold">|q{q}⟩</span>
                  </div>
                  <div className="flex gap-2">
                    {Array.from({ length: NUM_STEPS }, (_, s) => {
                      const cell = circuit[q][s];
                      return (
                        <button
                          key={s}
                          onClick={() => handleCellClick(q, s)}
                          onContextMenu={(e) => handleCellRightClick(e, q, s)}
                          className={`w-14 h-12 rounded-lg border-2 flex items-center justify-center font-mono text-sm font-bold transition-all
                            ${cell
                              ? `${cell.gate.color} shadow-sm`
                              : cnotControl === q
                              ? "border-quantum bg-quantum-50 border-dashed"
                              : "border-dashed border-line bg-paper hover:border-quantum hover:bg-quantum-50"
                            }`}
                        >
                          {cell ? cell.gate.symbol : <span className="text-ink-soft text-xs opacity-30">+</span>}
                        </button>
                      );
                    })}
                  </div>
                  {/* Wire line visual */}
                </div>
              ))}
            </div>
          </div>

          {/* Pattern detection */}
          {pattern && (
            <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-4 mb-4 text-sm text-ink">
              <span className="font-mono text-xs text-quantum uppercase tracking-wide mr-2">Detected:</span>
              {pattern}
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={runSimulation}
              className="rounded-full bg-quantum text-white px-6 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors"
            >
              ▶ Run Simulation
            </button>
            <button
              onClick={clearCircuit}
              className="rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink-muted hover:border-collapse hover:text-collapse transition-colors"
            >
              Clear
            </button>
          </div>

          {/* Simulation results */}
          {simResult && (
            <div className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-3">Simulation Output</p>
              <p className="font-mono text-sm text-ink mb-4 leading-relaxed">
                |ψ⟩ = {simResult.state}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">
                Measurement probabilities
              </p>
              <div className="space-y-1.5">
                {simResult.probs.map((p, i) => {
                  if (p < 0.001) return null;
                  const basisState = i.toString(2).padStart(NUM_QUBITS, "0");
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <span className="font-mono text-xs text-ink w-12 shrink-0">|{basisState}⟩</span>
                      <div className="flex-1 bg-line rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-quantum rounded-full transition-all"
                          style={{ width: `${Math.round(p * 100)}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-quantum w-12 text-right shrink-0">
                        {Math.round(p * 100)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-line">
            <p className="text-xs text-ink-soft mb-2">
              This simulator models ideal (noiseless) quantum gates. Real hardware introduces errors — see our{" "}
              <Link href="/learn/from-simulator-to-real-hardware" className="text-quantum hover:underline">
                Simulator to Real Hardware
              </Link>{" "}
              article.
            </p>
            <div className="flex gap-4 text-xs">
              <Link href="/dictionary/quantum-circuit" className="text-quantum hover:underline">Circuit explained</Link>
              <Link href="/dictionary/bell-state" className="text-quantum hover:underline">Bell State</Link>
              <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">Qiskit Tutorial</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
