"use client";

import { useState } from "react";
import Link from "next/link";

type Stage = {
  id: string;
  title: string;
  icon: string;
  duration: string;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
  skills: string[];
  resources: { label: string; href: string; type: string }[];
  milestone: string;
};

const stages: Stage[] = [
  {
    id: "beginner",
    title: "Beginner",
    icon: "🌱",
    duration: "1–3 months",
    color: "text-quantum",
    borderColor: "border-quantum",
    bgColor: "bg-quantum-50",
    description: "Understand what quantum computing actually is, why it's different from classical computing, and what makes it potentially powerful. No physics or math background required.",
    skills: [
      "What a qubit is and how it differs from a bit",
      "Superposition — what it really means (not 'both at once')",
      "Entanglement at an intuitive level",
      "Why quantum computers aren't just faster classical computers",
      "What NISQ means and why it matters today",
      "Basic awareness of Shor's and Grover's algorithms",
    ],
    resources: [
      { label: "What is Quantum Computing?", href: "/learn/what-is-quantum-computing", type: "Article" },
      { label: "What is a Qubit?", href: "/learn/what-is-a-qubit", type: "Article" },
      { label: "Superposition (Visual)", href: "/learn/superposition-visual", type: "Visual" },
      { label: "Entanglement (Visual)", href: "/learn/entanglement-visual", type: "Visual" },
      { label: "30 Myths Debunked", href: "/myths", type: "Reference" },
      { label: "Quantum vs Classical", href: "/quantum-vs-classical", type: "Comparison" },
      { label: "FAQ", href: "/faq", type: "Reference" },
    ],
    milestone: "You can explain quantum computing accurately to a non-technical person and identify common misconceptions.",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    icon: "⚛️",
    duration: "3–8 months",
    color: "text-collapse",
    borderColor: "border-collapse",
    bgColor: "bg-collapse-50",
    description: "Learn the mathematics and programming fundamentals needed to write real quantum circuits and understand how algorithms work at a technical level.",
    skills: [
      "Linear algebra: vectors, matrices, eigenvalues, inner products",
      "Complex numbers and their role in quantum amplitudes",
      "Dirac notation (bra-ket notation)",
      "Single and multi-qubit gates (H, X, Z, CNOT, Toffoli)",
      "Writing and running circuits in Qiskit or PennyLane",
      "How Grover's Algorithm achieves its speedup step-by-step",
      "VQE and QAOA at a conceptual + implementation level",
      "What coherence time and gate fidelity mean in practice",
    ],
    resources: [
      { label: "Linear Algebra for QC", href: "/learn/linear-algebra-for-quantum-computing", type: "Article" },
      { label: "The Math of a Qubit", href: "/learn/the-math-of-a-qubit", type: "Article" },
      { label: "Quantum Gates", href: "/learn/quantum-gates", type: "Article" },
      { label: "Your First Qiskit Circuit", href: "/learn/your-first-qiskit-circuit", type: "Tutorial" },
      { label: "Build Grover's Algorithm", href: "/grovers-builder", type: "Interactive" },
      { label: "Circuit Builder", href: "/circuit-builder", type: "Tool" },
      { label: "Frameworks Comparison", href: "/frameworks", type: "Guide" },
      { label: "Article Quiz Hub", href: "/learn/quiz-hub", type: "Practice" },
    ],
    milestone: "You can write a Bell state and a simple Grover's search in Qiskit, and explain how it works line by line.",
  },
  {
    id: "advanced",
    title: "Advanced",
    icon: "🔬",
    duration: "6–18 months",
    color: "text-ink",
    borderColor: "border-line",
    bgColor: "bg-paper",
    description: "Go deep on quantum algorithms, error correction theory, and the complexity-theoretic foundations of the field. You'll be able to read and understand research papers.",
    skills: [
      "Quantum phase estimation and the QFT in depth",
      "Shor's Algorithm from first principles",
      "Quantum error correction: stabilizer codes, surface code",
      "Density matrices and mixed states",
      "Quantum complexity theory: BQP, QMA, PSPACE",
      "Hamiltonian simulation techniques",
      "Adiabatic quantum computing",
      "Barren plateaus and trainability in variational circuits",
      "Post-quantum cryptography (CRYSTALS-Kyber, Dilithium)",
    ],
    resources: [
      { label: "Quantum Error Correction", href: "/learn/quantum-error-correction", type: "Article" },
      { label: "Quantum Complexity Theory", href: "/learn/quantum-complexity-theory", type: "Article" },
      { label: "Path to Fault Tolerance", href: "/learn/path-to-fault-tolerance", type: "Article" },
      { label: "Density Matrices", href: "/learn/density-matrices-mixed-states", type: "Article" },
      { label: "Algorithm Design Patterns", href: "/learn/quantum-algorithm-design-patterns", type: "Article" },
      { label: "Algorithms Database", href: "/algorithms", type: "Reference" },
      { label: "Interview Questions (Advanced)", href: "/interview-questions", type: "Practice" },
      { label: "Practice Problem Set", href: "/learn/practice-problem-set", type: "Practice" },
    ],
    milestone: "You can read arXiv quantum computing papers and understand the main contributions, limitations, and open questions.",
  },
  {
    id: "researcher",
    title: "Researcher",
    icon: "🎓",
    duration: "Ongoing",
    color: "text-quantum",
    borderColor: "border-quantum",
    bgColor: "bg-quantum-50",
    description: "Contribute original work to the field. This stage is less about following a curriculum and more about developing a research focus and building relationships with the community.",
    skills: [
      "Deep specialization in one or more sub-areas (hardware, algorithms, error correction, QML)",
      "Ability to identify open problems and formulate research questions",
      "Experience implementing and benchmarking algorithms on real hardware",
      "Familiarity with the research literature in your sub-area",
      "Graduate-level mathematics (abstract algebra, information theory)",
      "Collaborating with experimental and theory teams",
      "Writing and presenting research clearly",
    ],
    resources: [
      { label: "Research Papers Database", href: "/research", type: "Reference" },
      { label: "Quantum Companies Hiring Researchers", href: "/companies", type: "Reference" },
      { label: "Hardware Database", href: "/hardware", type: "Reference" },
      { label: "Quantum People — role models", href: "/people", type: "Inspiration" },
      { label: "Jobs — Research Scientist roles", href: "/jobs", type: "Career" },
      { label: "Countries — where research is happening", href: "/countries", type: "Context" },
    ],
    milestone: "You are contributing original results, supervising students or collaborators, and attending/presenting at conferences.",
  },
];

const typeColors: Record<string, string> = {
  Article: "text-quantum bg-quantum-50",
  Visual: "text-quantum bg-quantum-50",
  Tutorial: "text-collapse bg-collapse-50",
  Interactive: "text-collapse bg-collapse-50",
  Tool: "text-ink-muted bg-paper border border-line",
  Reference: "text-ink-muted bg-paper border border-line",
  Guide: "text-ink-muted bg-paper border border-line",
  Comparison: "text-ink-muted bg-paper border border-line",
  Practice: "text-collapse bg-collapse-50",
  Career: "text-quantum bg-quantum-50",
  Inspiration: "text-quantum bg-quantum-50",
  Context: "text-ink-muted bg-paper border border-line",
};

export default function RoadmapPage() {
  const [active, setActive] = useState("beginner");
  const stage = stages.find((s) => s.id === active)!;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Learning Roadmap
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Your Quantum Computing Roadmap
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        From complete beginner to active researcher — an honest, structured
        roadmap with real resources at each stage. Select your current level
        to see what to focus on.
      </p>

      {/* Stage selector — visual timeline */}
      <div className="relative mb-10">
        <div className="flex items-center gap-0">
          {stages.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <button
                onClick={() => setActive(s.id)}
                className={`flex flex-col items-center gap-1.5 flex-1 py-3 px-2 rounded-xl border-2 transition-all ${
                  active === s.id ? `${s.borderColor} ${s.bgColor}` : "border-transparent hover:border-line"
                }`}
              >
                <span className="text-2xl">{s.icon}</span>
                <span className={`font-semibold text-xs ${active === s.id ? s.color : "text-ink-muted"}`}>{s.title}</span>
                <span className="font-mono text-[10px] text-ink-soft">{s.duration}</span>
              </button>
              {i < stages.length - 1 && (
                <div className="w-6 h-0.5 bg-line shrink-0 mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stage detail */}
      <div className="max-w-3xl">
        <div className={`rounded-2xl border-2 ${stage.borderColor} ${stage.bgColor} p-6 mb-8`}>
          <h2 className="font-serif text-2xl font-semibold text-ink mb-2">
            {stage.icon} {stage.title} Stage
          </h2>
          <p className="font-mono text-xs text-ink-soft mb-3">{stage.duration}</p>
          <p className="text-ink-muted leading-relaxed">{stage.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Skills */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-3">Skills to build</h3>
            <ul className="space-y-2">
              {stage.skills.map((skill) => (
                <li key={skill} className="flex gap-2 text-sm text-ink-muted">
                  <span className={`shrink-0 mt-0.5 ${stage.color}`}>→</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-3">Resources on QuantumAtlas</h3>
            <div className="space-y-2">
              {stage.resources.map((r) => (
                <Link key={r.href} href={r.href}
                  className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2.5 hover:border-quantum transition-colors">
                  <span className="text-sm text-ink">{r.label}</span>
                  <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 shrink-0 ${typeColors[r.type] || "text-ink-muted"}`}>
                    {r.type}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone */}
        <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">Stage milestone</p>
          <p className="text-sm text-ink leading-relaxed">{stage.milestone}</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Start now</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learning-paths" className="text-quantum hover:underline">→ Curated Learning Paths by goal</Link>
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center (all 29 articles)</Link>
          <Link href="/interview-questions" className="text-quantum hover:underline">→ Interview Questions</Link>
          <Link href="/daily-challenge" className="text-quantum hover:underline">→ Daily Challenge — test yourself every day</Link>
        </div>
      </div>
    </div>
  );
}
