"use client";

import { useState } from "react";
import Link from "next/link";

type Step = { href: string; label: string; level: string; time: string };
type Path = {
  id: string;
  title: string;
  icon: string;
  description: string;
  duration: string;
  difficulty: string;
  steps: Step[];
  outcome: string;
};

const paths: Path[] = [
  {
    id: "qse",
    title: "Become a Quantum Software Engineer",
    icon: "💻",
    description: "From zero to writing real quantum circuits in Qiskit, understanding the algorithms behind the code, and being ready for entry-level quantum software roles.",
    duration: "~12 hours",
    difficulty: "Beginner → Intermediate",
    outcome: "Write and run real Qiskit circuits, understand core algorithms, speak confidently in quantum software interviews.",
    steps: [
      { href: "/learn/what-is-quantum-computing", label: "What is Quantum Computing?", level: "Level 1", time: "15 min" },
      { href: "/learn/what-is-a-qubit", label: "What is a Qubit?", level: "Level 1", time: "20 min" },
      { href: "/learn/bit-vs-qubit", label: "Bits vs Qubits", level: "Level 1", time: "15 min" },
      { href: "/learn/linear-algebra-for-quantum-computing", label: "Linear Algebra for QC", level: "Level 0", time: "30 min" },
      { href: "/learn/superposition", label: "Superposition", level: "Level 2", time: "20 min" },
      { href: "/learn/entanglement", label: "Entanglement", level: "Level 2", time: "20 min" },
      { href: "/learn/quantum-gates", label: "Quantum Gates", level: "Level 2", time: "25 min" },
      { href: "/learn/quantum-algorithms", label: "Quantum Algorithms Overview", level: "Level 3", time: "25 min" },
      { href: "/learn/grovers-algorithm", label: "Grover's Algorithm", level: "Level 3", time: "25 min" },
      { href: "/learn/choosing-your-first-quantum-framework", label: "Choosing a Framework", level: "Level 6", time: "15 min" },
      { href: "/learn/your-first-qiskit-circuit", label: "Your First Qiskit Circuit", level: "Level 6", time: "30 min" },
      { href: "/learn/reading-a-quantum-circuit-diagram", label: "Reading Circuit Diagrams", level: "Level 6", time: "20 min" },
      { href: "/learn/from-simulator-to-real-hardware", label: "Simulator to Real Hardware", level: "Level 6", time: "25 min" },
      { href: "/learn/common-beginner-mistakes", label: "Common Beginner Mistakes", level: "Level 6", time: "15 min" },
    ],
  },
  {
    id: "crypto",
    title: "Understand the Quantum Cryptography Threat",
    icon: "🔒",
    description: "For security professionals, IT managers, and policy makers who need to understand what quantum computing actually means for encryption — and what to do about it.",
    duration: "~4 hours",
    difficulty: "Beginner",
    outcome: "Explain the post-quantum cryptography migration to stakeholders, assess your organization's risk, and prioritize action items.",
    steps: [
      { href: "/learn/what-is-quantum-computing", label: "What is Quantum Computing?", level: "Level 1", time: "15 min" },
      { href: "/learn/shors-algorithm", label: "Shor's Algorithm", level: "Level 3", time: "25 min" },
      { href: "/learn/quantum-cryptography-lesson", label: "Quantum Cryptography (full lesson)", level: "Level 7", time: "30 min" },
      { href: "/dictionary/post-quantum-cryptography", label: "Post-Quantum Cryptography", level: "Dictionary", time: "10 min" },
      { href: "/dictionary/harvest-now-decrypt-later", label: "Harvest Now, Decrypt Later", level: "Dictionary", time: "10 min" },
      { href: "/industries/cybersecurity", label: "Quantum for Cybersecurity", level: "Industry", time: "20 min" },
      { href: "/research/post-quantum-migration-case-study", label: "Real Migration Case Study", level: "Research", time: "15 min" },
      { href: "/quiz", label: "Take the Quantum Readiness Quiz", level: "Tool", time: "5 min" },
    ],
  },
  {
    id: "researcher",
    title: "Academic Research Background",
    icon: "🔬",
    description: "For students and researchers wanting a rigorous theoretical foundation — complexity theory, density matrices, error correction, and fault tolerance.",
    duration: "~8 hours",
    difficulty: "Intermediate → Advanced",
    outcome: "Read quantum computing research papers confidently, understand the field's major open problems, and have the foundations for graduate-level study.",
    steps: [
      { href: "/learn/linear-algebra-for-quantum-computing", label: "Linear Algebra for QC", level: "Level 0", time: "30 min" },
      { href: "/learn/the-math-of-a-qubit", label: "The Math of a Qubit", level: "Level 0", time: "25 min" },
      { href: "/learn/multi-qubit-systems-tensor-products", label: "Multi-Qubit Systems", level: "Level 0", time: "30 min" },
      { href: "/learn/quantum-complexity-theory", label: "Quantum Complexity Theory", level: "Level 5", time: "35 min" },
      { href: "/learn/density-matrices-mixed-states", label: "Density Matrices & Mixed States", level: "Level 5", time: "30 min" },
      { href: "/learn/quantum-error-correction", label: "Quantum Error Correction", level: "Level 4", time: "30 min" },
      { href: "/learn/quantum-simulation-deep-dive", label: "Quantum Simulation", level: "Level 5", time: "30 min" },
      { href: "/learn/adiabatic-quantum-computing", label: "Adiabatic Quantum Computing", level: "Level 5", time: "25 min" },
      { href: "/learn/path-to-fault-tolerance", label: "Path to Fault Tolerance", level: "Level 5", time: "30 min" },
      { href: "/learn/quantum-algorithm-design-patterns", label: "Algorithm Design Patterns", level: "Level 7", time: "30 min" },
      { href: "/learn/practice-problem-set", label: "Practice Problem Set", level: "Level 7", time: "45 min" },
    ],
  },
  {
    id: "business",
    title: "Business & Industry Decision Maker",
    icon: "💼",
    description: "For executives, product managers, and consultants who need to evaluate quantum computing's relevance to their industry without getting lost in the physics.",
    duration: "~3 hours",
    difficulty: "Beginner",
    outcome: "Brief executives on quantum risks and opportunities, evaluate vendor claims critically, and make informed decisions about quantum pilots.",
    steps: [
      { href: "/learn/what-is-quantum-computing", label: "What is Quantum Computing?", level: "Level 1", time: "15 min" },
      { href: "/quantum-vs-classical", label: "Quantum vs Classical Computing", level: "Comparison", time: "15 min" },
      { href: "/myths", label: "30 Myths Debunked", level: "Reference", time: "20 min" },
      { href: "/hype-cycle", label: "The Quantum Hype Cycle", level: "Analysis", time: "15 min" },
      { href: "/industry-readiness", label: "Is My Industry Quantum-Ready?", level: "Tool", time: "10 min" },
      { href: "/future", label: "Future Predictions (10 areas)", level: "Analysis", time: "20 min" },
      { href: "/vendor-comparison", label: "Vendor Comparison Tool", level: "Tool", time: "10 min" },
      { href: "/countries", label: "Quantum by Country", level: "Analysis", time: "15 min" },
    ],
  },
  {
    id: "curious",
    title: "Curious Generalist",
    icon: "🌍",
    description: "For anyone who just wants to genuinely understand what all the quantum computing discussion is about — without a science or math background required.",
    duration: "~2 hours",
    difficulty: "Complete Beginner",
    outcome: "Understand what quantum computers actually are, what they can and cannot do, and be able to critically evaluate news claims about the field.",
    steps: [
      { href: "/learn/what-is-quantum-computing", label: "What is Quantum Computing?", level: "Level 1", time: "15 min" },
      { href: "/learn/what-is-a-qubit", label: "What is a Qubit?", level: "Level 1", time: "20 min" },
      { href: "/learn/superposition-visual", label: "Superposition (Visual)", level: "Visual", time: "5 min" },
      { href: "/learn/entanglement-visual", label: "Entanglement (Visual)", level: "Visual", time: "5 min" },
      { href: "/quantum-vs-classical", label: "Quantum vs Classical", level: "Comparison", time: "15 min" },
      { href: "/myths", label: "Myths Debunked", level: "Reference", time: "20 min" },
      { href: "/pop-culture", label: "Quantum in Pop Culture", level: "Fun", time: "10 min" },
      { href: "/faq", label: "Frequently Asked Questions", level: "Reference", time: "20 min" },
    ],
  },
];

export default function LearningPathsPage() {
  const [selected, setSelected] = useState<string>("qse");
  const path = paths.find((p) => p.id === selected)!;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Curated Curriculum
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Learning Paths
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        29 articles across 8 levels — but where do you start? Choose a goal
        and follow a curated sequence designed for your background and purpose.
      </p>

      {/* Path selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {paths.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`rounded-xl border-2 p-4 text-center transition-all ${
              selected === p.id
                ? "border-quantum bg-quantum-50"
                : "border-line bg-surface hover:border-quantum"
            }`}
          >
            <p className="text-2xl mb-1.5">{p.icon}</p>
            <p className="text-xs font-medium text-ink leading-snug">{p.title.split(" ").slice(0, 3).join(" ")}…</p>
          </button>
        ))}
      </div>

      {/* Path detail */}
      <div className="max-w-2xl">
        <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-6 mb-6">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-2">
            {path.icon} {path.title}
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-4">{path.description}</p>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <span className="text-quantum">⏱ {path.duration}</span>
            <span className="text-ink-muted">📊 {path.difficulty}</span>
          </div>
        </div>

        <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-3">
          Outcome: <span className="font-normal text-ink-muted normal-case">{path.outcome}</span>
        </p>

        <div className="space-y-2 mb-8">
          {path.steps.map((step, i) => (
            <Link
              key={step.href}
              href={step.href}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 hover:border-quantum hover:shadow-[0_2px_12px_-4px_rgba(52,84,209,0.3)] transition-all"
            >
              <span className="font-mono text-xs text-ink-soft w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{step.label}</p>
                <p className="text-xs text-ink-soft">{step.level}</p>
              </div>
              <span className="font-mono text-xs text-ink-soft shrink-0">{step.time}</span>
            </Link>
          ))}
        </div>

        <Link
          href={path.steps[0].href}
          className="block w-full text-center rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors"
        >
          Start This Path →
        </Link>
      </div>
    </div>
  );
}
