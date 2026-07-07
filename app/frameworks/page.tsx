"use client";

import { useState } from "react";
import Link from "next/link";

type Framework = {
  id: string;
  name: string;
  maker: string;
  language: string;
  bestFor: string[];
  strengths: string[];
  weaknesses: string[];
  hardwareAccess: string[];
  difficulty: "Beginner-friendly" | "Moderate" | "Steep";
  openSource: boolean;
  install: string;
  helloWorld: string;
  useCases: string;
  link?: string;
};

const frameworks: Framework[] = [
  {
    id: "qiskit",
    name: "Qiskit",
    maker: "IBM",
    language: "Python",
    bestFor: ["learning", "ibm-hardware", "broad-ecosystem"],
    strengths: [
      "Largest community and ecosystem by far",
      "Best documentation and learning resources",
      "Direct access to IBM Quantum hardware (free tier available)",
      "Qiskit Runtime for optimized execution",
      "Strong tooling: transpiler, noise models, visualization",
    ],
    weaknesses: [
      "IBM-centric — optimized for heavy-hex superconducting architecture",
      "Recent Qiskit 1.0 breaking changes from older tutorials",
      "Runtime API differs from older Aer simulator syntax",
    ],
    hardwareAccess: ["IBM Quantum (native)", "Various via plugins"],
    difficulty: "Beginner-friendly",
    openSource: true,
    install: "pip install qiskit qiskit-aer",
    helloWorld: `from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

qc = QuantumCircuit(2, 2)
qc.h(0)          # Hadamard on qubit 0
qc.cx(0, 1)      # CNOT — creates Bell state
qc.measure([0,1], [0,1])

sim = AerSimulator()
job = sim.run(qc, shots=1000)
print(job.result().get_counts())
# Output: {'00': ~500, '11': ~500}`,
    useCases: "General learning, IBM hardware experiments, quantum chemistry (Qiskit Nature), quantum ML (Qiskit Machine Learning), finance (Qiskit Finance)",
    link: "/learn/your-first-qiskit-circuit",
  },
  {
    id: "pennylane",
    name: "PennyLane",
    maker: "Xanadu",
    language: "Python",
    bestFor: ["quantum-ml", "research", "hardware-agnostic"],
    strengths: [
      "Best quantum machine learning support — native integration with PyTorch, TensorFlow, JAX",
      "Hardware-agnostic: runs on IBM, IonQ, Rigetti, simulators with same code",
      "Automatic differentiation of quantum circuits (essential for QML)",
      "Excellent for variational algorithms (VQE, QAOA) research",
      "Strong research community and active paper implementations",
    ],
    weaknesses: [
      "Less beginner-friendly than Qiskit for pure circuit building",
      "Smaller community than Qiskit",
      "Hardware access requires separate backend setup",
    ],
    hardwareAccess: ["AWS Braket", "IBM Quantum", "IonQ", "Rigetti", "Xanadu Cloud", "Local simulators"],
    difficulty: "Moderate",
    openSource: true,
    install: "pip install pennylane",
    helloWorld: `import pennylane as qml
import numpy as np

dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def bell_state():
    qml.Hadamard(wires=0)
    qml.CNOT(wires=[0, 1])
    return qml.probs(wires=[0, 1])

print(bell_state())
# Output: [0.5, 0.  , 0.  , 0.5] → 50% |00⟩, 50% |11⟩`,
    useCases: "Quantum machine learning, variational algorithms, hardware-agnostic research, hybrid classical-quantum ML models",
  },
  {
    id: "cirq",
    name: "Cirq",
    maker: "Google",
    language: "Python",
    bestFor: ["google-hardware", "research", "hardware-aware"],
    strengths: [
      "Designed for hardware-aware circuit optimization from the ground up",
      "Native access to Google's Sycamore processors",
      "Fine-grained control over noise models and hardware topology",
      "Used in Google's quantum supremacy and Willow experiments",
      "Strong for NISQ-era research requiring tight hardware control",
    ],
    weaknesses: [
      "Steeper learning curve than Qiskit",
      "Smaller community and fewer learning resources",
      "Less abstraction — more boilerplate for common tasks",
      "Google hardware access is limited and not broadly available",
    ],
    hardwareAccess: ["Google Quantum AI (limited)", "IonQ via Amazon Braket", "Local simulators"],
    difficulty: "Moderate",
    openSource: true,
    install: "pip install cirq",
    helloWorld: `import cirq

q0, q1 = cirq.LineQubit.range(2)

circuit = cirq.Circuit([
    cirq.H(q0),           # Hadamard
    cirq.CNOT(q0, q1),    # CNOT
    cirq.measure(q0, q1, key='result')
])

sim = cirq.Simulator()
result = sim.run(circuit, repetitions=1000)
print(result.histogram(key='result'))`,
    useCases: "Hardware-aware NISQ research, Google hardware experiments, noise-aware circuit compilation, quantum simulation",
  },
  {
    id: "qsharp",
    name: "Q#",
    maker: "Microsoft",
    language: "Q# (own language) + Python interop",
    bestFor: ["microsoft-ecosystem", "fault-tolerant", "education"],
    strengths: [
      "Purpose-built language with strong type system for quantum programs",
      "Excellent for expressing fault-tolerant algorithms cleanly",
      "Deep integration with Microsoft Azure Quantum",
      "Good educational resources via Microsoft Learn and Quantum Katas",
      "Resource estimation tools for pre-hardware fault-tolerant planning",
    ],
    weaknesses: [
      "Learning a new language (Q#) adds friction vs Python-native frameworks",
      "Smaller community than Qiskit or PennyLane",
      "Azure Quantum hardware access is pay-per-use with limited free tier",
      "Microsoft's topological qubit hardware not yet broadly available",
    ],
    hardwareAccess: ["Azure Quantum (IonQ, Quantinuum, Rigetti)", "Microsoft simulators"],
    difficulty: "Moderate",
    openSource: true,
    install: "dotnet add package Microsoft.Quantum.Development.Kit\npip install qsharp azure-quantum",
    helloWorld: `// In a .qs file:
operation BellState() : (Result, Result) {
    use (q0, q1) = (Qubit(), Qubit());
    H(q0);
    CNOT(q0, q1);
    let r0 = M(q0);
    let r1 = M(q1);
    Reset(q0); Reset(q1);
    return (r0, r1);
}`,
    useCases: "Fault-tolerant algorithm research, Azure Quantum integration, educational use (Quantum Katas), resource estimation",
  },
  {
    id: "braket",
    name: "Amazon Braket SDK",
    maker: "Amazon Web Services",
    language: "Python",
    bestFor: ["cloud-access", "multi-hardware", "enterprise"],
    strengths: [
      "Single SDK to access IonQ, Rigetti, Oxford Quantum Circuits, QuEra hardware",
      "Deep AWS integration — S3 results storage, Lambda post-processing",
      "Managed simulators (SV1, DM1, TN1) with no setup required",
      "Free trial credit available for new AWS accounts",
      "Good choice for enterprises already in the AWS ecosystem",
    ],
    weaknesses: [
      "Pay-per-shot pricing — costs can accumulate quickly on real hardware",
      "Less quantum-native than Qiskit or PennyLane (more of an access layer)",
      "Smaller community and fewer learning resources",
      "Hybrid jobs require AWS setup overhead",
    ],
    hardwareAccess: ["IonQ", "Rigetti", "Oxford Quantum Circuits", "QuEra (neutral atoms)", "AWS simulators"],
    difficulty: "Moderate",
    openSource: true,
    install: "pip install amazon-braket-sdk",
    helloWorld: `from braket.circuits import Circuit
from braket.devices import LocalSimulator

circuit = Circuit()
circuit.h(0)       # Hadamard on qubit 0
circuit.cnot(0, 1) # CNOT

device = LocalSimulator()
task = device.run(circuit, shots=1000)
print(task.result().measurement_counts)
# Output: Counter({'00': ~500, '11': ~500})`,
    useCases: "Multi-hardware access from one SDK, AWS-integrated quantum workflows, enterprise pilots, neutral atom experiments via QuEra",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "learning", label: "Learning" },
  { key: "quantum-ml", label: "Quantum ML" },
  { key: "ibm-hardware", label: "IBM Hardware" },
  { key: "google-hardware", label: "Google Hardware" },
  { key: "cloud-access", label: "Multi-Cloud" },
  { key: "hardware-agnostic", label: "Hardware-Agnostic" },
];

const difficultyColor: Record<string, string> = {
  "Beginner-friendly": "text-quantum bg-quantum-50",
  "Moderate": "text-collapse bg-collapse-50",
  "Steep": "text-ink-muted bg-paper border border-line",
};

export default function FrameworksPage() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = filter === "all" ? frameworks : frameworks.filter((f) => f.bestFor.includes(filter));
  const detail = frameworks.find((f) => f.id === selected);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Developer Guide
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Frameworks Compared
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Qiskit, PennyLane, Cirq, Q#, and Amazon Braket — which should you use? An honest comparison with real code samples.
      </p>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button key={f.key} onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              filter === f.key ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum"
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Framework cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {filtered.map((fw) => (
          <button key={fw.id} onClick={() => setSelected(selected === fw.id ? null : fw.id)}
            className={`text-left rounded-xl border-2 p-5 transition-all ${
              selected === fw.id ? "border-quantum bg-quantum-50" : "border-line bg-surface hover:border-quantum"
            }`}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-serif text-lg font-semibold text-ink">{fw.name}</h3>
                <p className="text-xs text-ink-soft">by {fw.maker}</p>
              </div>
              <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 shrink-0 ${difficultyColor[fw.difficulty]}`}>
                {fw.difficulty}
              </span>
            </div>
            <p className="text-xs text-ink-muted mb-3">{fw.useCases.slice(0, 80)}…</p>
            <div className="flex flex-wrap gap-1">
              {fw.hardwareAccess.slice(0, 3).map((h) => (
                <span key={h} className="font-mono text-[10px] bg-paper border border-line rounded px-1.5 py-0.5 text-ink-soft">{h}</span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {detail && (
        <div className="rounded-2xl border border-line bg-surface p-6 mb-10 max-w-3xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{detail.name}</h2>
              <p className="text-sm text-ink-soft">by {detail.maker} · {detail.language} · {detail.openSource ? "Open Source" : "Proprietary"}</p>
            </div>
            <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 ${difficultyColor[detail.difficulty]}`}>
              {detail.difficulty}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">Strengths</p>
              <ul className="space-y-1.5">
                {detail.strengths.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-ink-muted"><span className="text-quantum shrink-0">→</span>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-collapse mb-2">Weaknesses</p>
              <ul className="space-y-1.5">
                {detail.weaknesses.map((w) => (
                  <li key={w} className="flex gap-2 text-sm text-ink-muted"><span className="text-collapse shrink-0">→</span>{w}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-paper border border-line p-4 mb-5">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">Install</p>
            <pre className="font-mono text-xs text-quantum whitespace-pre-wrap">{detail.install}</pre>
          </div>

          <div className="rounded-lg bg-paper border border-line p-4 mb-5">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">Bell State — Hello World</p>
            <pre className="font-mono text-xs text-ink whitespace-pre-wrap leading-relaxed overflow-x-auto">{detail.helloWorld}</pre>
          </div>

          <p className="text-sm text-ink-muted"><span className="font-medium text-ink">Use cases: </span>{detail.useCases}</p>
          {detail.link && (
            <Link href={detail.link} className="text-sm text-quantum hover:underline mt-3 inline-block">
              → Hands-on tutorial on QuantumAtlas
            </Link>
          )}
        </div>
      )}

      <div className="prose-quantum max-w-2xl">
        <h2>Which should you start with?</h2>
        <p>If you're learning quantum computing for the first time: <strong>Qiskit</strong> — best documentation, free hardware access, largest community. If you're interested in quantum machine learning or want a hardware-agnostic framework that integrates with PyTorch: <strong>PennyLane</strong>. If you're doing hardware-aware NISQ research targeting Google's architecture: <strong>Cirq</strong>. If you're in the Microsoft/Azure ecosystem or interested in fault-tolerant algorithm design: <strong>Q#</strong>. If you need a single SDK to access multiple hardware providers in an enterprise cloud context: <strong>Amazon Braket</strong>.</p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Start coding</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">→ Your First Qiskit Circuit (tutorial)</Link>
          <Link href="/circuit-builder" className="text-quantum hover:underline">→ Circuit Builder (no install needed)</Link>
          <Link href="/learn/choosing-your-first-quantum-framework" className="text-quantum hover:underline">→ Choosing Your First Framework (article)</Link>
          <Link href="/interview-questions" className="text-quantum hover:underline">→ Interview Questions — framework questions included</Link>
        </div>
      </div>
    </div>
  );
      }
            
