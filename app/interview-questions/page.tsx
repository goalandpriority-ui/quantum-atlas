"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Question = {
  q: string;
  a: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  links?: { href: string; label: string }[];
};

const questions: Question[] = [
  // Beginner — Concepts
  { level: "Beginner", category: "Core Concepts", q: "What is a qubit and how does it differ from a classical bit?", a: "A classical bit is always exactly 0 or 1. A qubit can exist in a superposition of both simultaneously — described by complex probability amplitudes — until it is measured, at which point it collapses to a definite 0 or 1. The probabilities of each outcome are given by the squared magnitudes of the amplitudes.", links: [{ href: "/dictionary/qubit", label: "Qubit explained" }] },
  { level: "Beginner", category: "Core Concepts", q: "Explain superposition in your own words.", a: "Superposition is the quantum mechanical property allowing a qubit to exist in a genuine combination of states simultaneously. It is not a hidden classical value — both possibilities genuinely coexist with specific amplitudes that can interfere. This is confirmed experimentally: you cannot explain measurement statistics using hidden predetermined values.", links: [{ href: "/dictionary/superposition", label: "Superposition" }] },
  { level: "Beginner", category: "Core Concepts", q: "What is quantum entanglement?", a: "Entanglement is a correlation between two or more qubits such that the state of each cannot be described independently. Measuring one instantly determines the correlated outcome of the other, regardless of distance. This correlation is stronger than any classical correlation and cannot be explained by hidden variables — proven by Bell inequality violations.", links: [{ href: "/dictionary/entanglement", label: "Entanglement" }] },
  { level: "Beginner", category: "Core Concepts", q: "What is quantum interference and why does it matter for algorithms?", a: "Quantum interference is the mechanism by which probability amplitudes combine — constructively (increasing probability) or destructively (canceling). It is the actual computational tool quantum algorithms use: the oracle marks a correct answer with a phase flip, and then interference amplifies that answer's probability while suppressing wrong answers.", links: [{ href: "/dictionary/quantum-interference", label: "Quantum Interference" }] },
  { level: "Beginner", category: "Core Concepts", q: "What is a quantum gate?", a: "A quantum gate is a unitary matrix operation transforming one or more qubits' states. All quantum gates are reversible (unlike most classical gates). Common examples: Hadamard (H) creates superposition, Pauli-X flips a qubit (quantum NOT), CNOT performs a controlled bit flip on a target qubit.", links: [{ href: "/dictionary/quantum-gate", label: "Quantum Gate" }] },
  { level: "Beginner", category: "Core Concepts", q: "What is decoherence?", a: "Decoherence is the process by which a qubit loses its quantum properties through unwanted interactions with its environment — thermal noise, electromagnetic interference, vibrations. It is the central engineering challenge of quantum hardware. Coherence time (T1, T2) measures how long a qubit maintains its quantum state.", links: [{ href: "/dictionary/decoherence", label: "Decoherence" }] },
  { level: "Beginner", category: "Hardware", q: "What are the main qubit types and their tradeoffs?", a: "Main types: Superconducting qubits (IBM, Google) — fast gates, shorter coherence times, operate near absolute zero. Trapped-ion qubits (IonQ, Quantinuum) — longer coherence, higher fidelity, all-to-all connectivity, slower gates. Neutral atoms (Pasqal) — reconfigurable connectivity. Photonic (Xanadu) — room temperature, but hard to create deterministic two-qubit gates. Silicon spin (Diraq) — compatible with semiconductor manufacturing.", links: [{ href: "/hardware", label: "Hardware Database" }] },
  { level: "Beginner", category: "Algorithms", q: "What is Grover's Algorithm and what speedup does it offer?", a: "Grover's Algorithm searches an unsorted database of N items in O(√N) steps — a quadratic speedup over classical O(N) brute force. Crucially, this speedup is proven optimal for unstructured search. It works by marking the target with a phase flip, then repeatedly amplifying its amplitude through the diffusion operator.", links: [{ href: "/algorithms/grovers-algorithm", label: "Grover's Algorithm" }] },
  { level: "Beginner", category: "Algorithms", q: "What is Shor's Algorithm and why does it matter?", a: "Shor's Algorithm factors large integers in polynomial time — exponentially faster than the best known classical algorithms. This threatens RSA encryption, which relies on the difficulty of factoring. A sufficiently large fault-tolerant quantum computer running Shor's could break RSA-2048 in hours; classically this would take longer than the age of the universe.", links: [{ href: "/algorithms/shors-algorithm", label: "Shor's Algorithm" }] },
  { level: "Beginner", category: "Career", q: "What programming languages are used in quantum computing?", a: "Python is the primary language for all major quantum frameworks. IBM uses Qiskit (Python), Google uses Cirq (Python), Xanadu uses PennyLane (Python, integrates with PyTorch/TF). Microsoft uses Q# (its own language). Most frameworks can target multiple hardware backends. Deep hardware work also uses C++ and FPGA programming for control systems.", links: [{ href: "/learn/choosing-your-first-quantum-framework", label: "Choosing a Framework" }] },

  // Intermediate — Technical
  { level: "Intermediate", category: "Core Concepts", q: "Explain the difference between T1 and T2 coherence times.", a: "T1 (longitudinal relaxation time) measures energy relaxation — how long before a |1⟩ state decays to |0⟩ due to energy loss to the environment. T2 (transverse relaxation / dephasing time) measures phase coherence — how long before the qubit's phase relationship is randomized. T2 ≤ 2×T1 always. Gate operations must complete well within both limits.", links: [{ href: "/dictionary/coherence-time", label: "Coherence Time" }] },
  { level: "Intermediate", category: "Core Concepts", q: "What is the Bloch sphere and what do points on it represent?", a: "The Bloch sphere is a geometric representation of a single qubit's state space. The north pole represents |0⟩, the south pole |1⟩. Any point on the surface represents a valid pure qubit state as a superposition. Single-qubit gates correspond to rotations of the Bloch sphere. Mixed states (with decoherence) are represented as points inside the sphere, not on its surface.", links: [{ href: "/dictionary/bloch-sphere", label: "Bloch Sphere" }] },
  { level: "Intermediate", category: "Algorithms", q: "How does the Quantum Fourier Transform differ from the classical DFT?", a: "The QFT computes the discrete Fourier transform exponentially faster than the classical FFT — O(n²) quantum gates vs O(N log N) classical, where N=2ⁿ. However, you cannot efficiently read out all output amplitudes (measurement collapses them). The QFT's value is as a subroutine: its output's phases encode Fourier information used by phase estimation algorithms like Shor's.", links: [{ href: "/dictionary/quantum-fourier-transform", label: "QFT" }] },
  { level: "Intermediate", category: "Algorithms", q: "What is VQE and how does it work?", a: "VQE (Variational Quantum Eigensolver) is a hybrid quantum-classical algorithm for finding ground-state energies. A parameterized quantum circuit (ansatz) prepares a trial state; the quantum processor measures its energy expectation value; a classical optimizer adjusts the parameters to minimize energy. The hybrid loop continues until convergence. Key limitation: barren plateaus can make optimization exponentially hard as circuit depth grows.", links: [{ href: "/algorithms/vqe", label: "VQE" }] },
  { level: "Intermediate", category: "Algorithms", q: "What is QAOA and what problem class does it target?", a: "QAOA (Quantum Approximate Optimization Algorithm) is a hybrid algorithm for combinatorial optimization — problems like Max-Cut, portfolio optimization, routing. It alternates between a problem Hamiltonian and a mixing Hamiltonian, with parameters optimized classically. At depth p=1 it has provable approximation guarantees; deeper circuits can theoretically approach the optimal solution but training becomes harder.", links: [{ href: "/algorithms/qaoa", label: "QAOA" }] },
  { level: "Intermediate", category: "Error Correction", q: "What is the difference between quantum error mitigation and quantum error correction?", a: "Error correction uses redundancy (many physical qubits per logical qubit) to actively detect and correct errors — requires fault-tolerant hardware. Error mitigation uses classical post-processing to reduce noise effects without adding qubit overhead — techniques like zero-noise extrapolation (ZNE) or probabilistic error cancellation. Mitigation is practical on today's NISQ devices; full correction requires hardware we don't yet have at scale.", links: [{ href: "/dictionary/quantum-error-mitigation", label: "Error Mitigation" }] },
  { level: "Intermediate", category: "Error Correction", q: "What is the surface code and why is it the leading error correction approach?", a: "The surface code arranges qubits in a 2D grid with only nearest-neighbor interactions — compatible with most physical hardware layouts. It has a relatively high error threshold (~1%) meaning hardware doesn't need to be extremely precise. Errors are detected via syndrome measurements on ancilla qubits without measuring (collapsing) the logical qubit. The main cost is qubit overhead: hundreds to thousands of physical qubits per logical qubit.", links: [{ href: "/dictionary/surface-code", label: "Surface Code" }] },
  { level: "Intermediate", category: "Hardware", q: "What is quantum volume and why was it introduced?", a: "Quantum Volume is a single-number benchmark (introduced by IBM) accounting for qubit count, connectivity, and gate error rates together. A system has QV=2ⁿ if it can successfully execute random n-qubit circuits with sufficient fidelity. It was introduced because raw qubit count alone is misleading — a 100-qubit system with poor fidelity may be less useful than a 20-qubit system with excellent gates.", links: [{ href: "/dictionary/quantum-volume", label: "Quantum Volume" }] },
  { level: "Intermediate", category: "Career", q: "Explain the NISQ era and its implications for near-term applications.", a: "NISQ (Noisy Intermediate-Scale Quantum) describes today's hardware — tens to thousands of qubits, no full error correction. Implications: algorithms must be shallow (low gate count) to finish before decoherence. Error mitigation is used instead of correction. Hybrid classical-quantum algorithms (VQE, QAOA) are preferred because they tolerate noise better. Most 'quantum advantage' claims in this era apply to artificial benchmarks rather than practical applications.", links: [{ href: "/dictionary/nisq", label: "NISQ" }] },
  { level: "Intermediate", category: "Career", q: "Write a Hadamard gate applied to |0⟩ in Qiskit.", a: "from qiskit import QuantumCircuit\nqc = QuantumCircuit(1, 1)\nqc.h(0)          # Apply Hadamard\nqc.measure(0, 0) # Measure qubit 0 into classical bit 0\nprint(qc.draw())\n\nThis creates a 1-qubit, 1-classical-bit circuit, applies H to put the qubit in superposition (|0⟩+|1⟩)/√2, then measures it. Running this multiple times should yield approximately 50% 0 and 50% 1.", links: [{ href: "/learn/your-first-qiskit-circuit", label: "First Qiskit Circuit" }] },

  // Advanced
  { level: "Advanced", category: "Algorithms", q: "What is quantum phase estimation and where is it used?", a: "QPE extracts the eigenvalue (phase) of a unitary operator U with respect to an eigenstate |u⟩. It uses the QFT and controlled-U operations to encode the phase into a register of ancilla qubits. QPE is a core subroutine inside Shor's Algorithm (estimating the period of a modular function) and quantum chemistry simulation (finding molecular energies). Runtime scales as O(1/ε) for precision ε.", links: [{ href: "/algorithms/quantum-phase-estimation", label: "QPE" }] },
  { level: "Advanced", category: "Algorithms", q: "What is a barren plateau and how can it be mitigated?", a: "A barren plateau is a training landscape phenomenon where gradients of a variational quantum circuit's cost function become exponentially small as circuit size grows — making optimization practically impossible. Causes include global cost functions, hardware noise, and entanglement overload. Mitigations: use local cost functions, layer-wise training, correlating circuit structure to the problem, or alternative architectures (tensor networks, MERA ansatz).", links: [{ href: "/dictionary/barren-plateau", label: "Barren Plateau" }] },
  { level: "Advanced", category: "Error Correction", q: "Explain the fault-tolerance threshold theorem.", a: "The threshold theorem states: if physical error rates fall below a hardware-specific threshold value (e.g. ~1% for surface code), then adding more physical qubits to encode a logical qubit actually decreases the logical error rate. Below threshold, error correction works; above threshold, adding more qubits makes things worse. Google's Willow processor (2024) demonstrated below-threshold scaling experimentally.", links: [{ href: "/dictionary/fault-tolerance", label: "Fault Tolerance" }] },
  { level: "Advanced", category: "Algorithms", q: "What is the HHL algorithm and what are its practical limitations?", a: "HHL (Harrow-Hassidim-Lloyd) solves linear systems Ax=b exponentially faster than classical Gaussian elimination for sparse, well-conditioned matrices. Key limitations: (1) Input must be quantum-accessible — classically loading the b vector takes O(N) time, potentially removing the speedup. (2) Output is a quantum state — reading all x values requires O(N) measurements. Practical advantage exists only when you need specific expectation values of x, not the full vector.", links: [{ href: "/algorithms/hhl-algorithm", label: "HHL" }] },
  { level: "Advanced", category: "Core Concepts", q: "Explain the no-cloning theorem and its implications.", a: "The no-cloning theorem proves it is impossible to create an exact copy of an arbitrary unknown quantum state. This follows from the linearity of quantum mechanics — any cloning operation would have to be nonlinear. Implications: quantum information cannot be copied like classical bits (no backup), but this enables quantum key distribution security (any eavesdropping disturbs the state detectably).", links: [{ href: "/dictionary/no-cloning-theorem", label: "No-Cloning Theorem" }] },
  { level: "Advanced", category: "Career", q: "What is BQP and how does it relate to NP and P?", a: "BQP (Bounded-error Quantum Polynomial time) is the class of problems quantum computers can solve efficiently. We know P ⊆ BQP ⊆ PSPACE. Factoring is in BQP (via Shor's) but not believed to be in P. BQP vs NP: we don't know if BQP ⊆ NP or vice versa — it's a major open question. Quantum computers are not believed to solve all NP-complete problems efficiently.", links: [{ href: "/learn/quantum-complexity-theory", label: "Complexity Theory" }] },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"] as const;
const categories = ["All", "Core Concepts", "Algorithms", "Hardware", "Error Correction", "Career"];

export default function InterviewQuestionsPage() {
  const [level, setLevel] = useState<string>("All");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (i: number) => setOpenItems((prev) => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      if (level !== "All" && q.level !== level) return false;
      if (category !== "All" && q.category !== category) return false;
      if (query.trim()) {
        const s = query.toLowerCase();
        return q.q.toLowerCase().includes(s) || q.a.toLowerCase().includes(s);
      }
      return true;
    });
  }, [level, category, query]);

  const levelColor: Record<string, string> = {
    Beginner: "text-quantum bg-quantum-50",
    Intermediate: "text-collapse bg-collapse-50",
    Advanced: "text-ink bg-paper border border-line",
  };

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Career Prep
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing Interview Questions
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        {questions.length} questions across Beginner, Intermediate, and Advanced levels — covering core concepts, algorithms, hardware, error correction, and career-specific questions including live coding.
      </p>

      {/* Filters */}
      <div className="space-y-3 mb-8">
        <div className="relative max-w-xl">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-line bg-surface text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => (
            <button key={l} onClick={() => setLevel(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${level === l ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"}`}>
              {l}
            </button>
          ))}
          <span className="text-line">|</span>
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${category === c ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"}`}>
              {c}
            </button>
          ))}
        </div>
        <p className="text-xs text-ink-soft">{filtered.length} question{filtered.length !== 1 ? "s" : ""} shown</p>
      </div>

      {/* Questions */}
      <div className="space-y-3 max-w-3xl">
        {filtered.map((item, i) => {
          const isOpen = openItems.has(i);
          return (
            <div key={i} className="rounded-xl border border-line bg-surface overflow-hidden">
              <button onClick={() => toggle(i)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-quantum-50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 shrink-0 mt-0.5 ${levelColor[item.level]}`}>
                    {item.level}
                  </span>
                  <span className="font-medium text-ink text-sm leading-snug">{item.q}</span>
                </div>
                <span className="text-ink-soft shrink-0 mt-0.5">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 border-t border-line pt-4">
                  <p className="text-xs text-ink-soft mb-2 font-mono uppercase tracking-wide">{item.category}</p>
                  <pre className="text-sm text-ink-muted leading-relaxed whitespace-pre-wrap font-sans mb-3">{item.a}</pre>
                  {item.links && (
                    <div className="flex flex-wrap gap-3">
                      {item.links.map((l) => (
                        <Link key={l.href} href={l.href} className="text-xs text-quantum hover:underline">→ {l.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Prepare further</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learning-paths" className="text-quantum hover:underline">→ Follow a learning path</Link>
          <Link href="/learn/quiz-hub" className="text-quantum hover:underline">→ Test yourself with Article Quizzes</Link>
          <Link href="/jobs" className="text-quantum hover:underline">→ Browse open quantum roles</Link>
          <Link href="/salary" className="text-quantum hover:underline">→ Salary & Skills Heatmap</Link>
        </div>
      </div>
    </div>
  );
}
