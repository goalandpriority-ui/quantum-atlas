"use client";

import { useState } from "react";
import Link from "next/link";

type Vendor = {
  name: string;
  slug: string;
  qubitType: string;
  bestFor: string[];
  accessModel: string;
  maturity: number; // 1-5
  ecosystemSize: number; // 1-5
  pricing: "Free tier" | "Paid only" | "Free + Paid";
  strengths: string;
  considerations: string;
};

const vendors: Vendor[] = [
  {
    name: "IBM",
    slug: "ibm",
    qubitType: "Superconducting",
    bestFor: ["learning", "research", "broad-ecosystem"],
    accessModel: "IBM Quantum cloud (Qiskit)",
    maturity: 5,
    ecosystemSize: 5,
    pricing: "Free + Paid",
    strengths: "Largest install base, best documentation and learning resources, most mature software stack (Qiskit).",
    considerations: "Superconducting qubits have shorter coherence times than trapped-ion alternatives; queue times on free tier can be long.",
  },
  {
    name: "IonQ",
    slug: "ionq",
    qubitType: "Trapped-ion",
    bestFor: ["high-fidelity", "research"],
    accessModel: "AWS Braket, Azure Quantum, IonQ direct",
    maturity: 4,
    ecosystemSize: 3,
    pricing: "Paid only",
    strengths: "High gate fidelity, all-to-all qubit connectivity, publicly traded with transparent roadmap.",
    considerations: "No meaningful free tier; smaller qubit counts than superconducting competitors.",
  },
  {
    name: "Quantinuum",
    slug: "quantinuum",
    qubitType: "Trapped-ion (QCCD)",
    bestFor: ["high-fidelity", "enterprise"],
    accessModel: "Direct enterprise access, Azure Quantum",
    maturity: 4,
    ecosystemSize: 3,
    pricing: "Paid only",
    strengths: "Industry-leading two-qubit gate fidelity, strong enterprise relationships, recently public (Nasdaq: QNT).",
    considerations: "Primarily enterprise-focused pricing; less accessible for individual learners or small pilots.",
  },
  {
    name: "Rigetti",
    slug: "rigetti",
    qubitType: "Superconducting",
    bestFor: ["learning", "hybrid-cloud"],
    accessModel: "AWS Braket, Rigetti QCS",
    maturity: 3,
    ecosystemSize: 3,
    pricing: "Free + Paid",
    strengths: "Fast gate speeds, strong hybrid classical-quantum cloud integration, sells standalone QPU hardware (Novera).",
    considerations: "Smaller qubit counts and lower fidelity than IBM or trapped-ion leaders in recent benchmarks.",
  },
  {
    name: "D-Wave",
    slug: "d-wave",
    qubitType: "Quantum annealing",
    bestFor: ["optimization-only"],
    accessModel: "Leap cloud platform",
    maturity: 5,
    ecosystemSize: 3,
    pricing: "Free + Paid",
    strengths: "Largest qubit counts available (4000+), mature optimization-focused software, longest commercial track record.",
    considerations: "Cannot run general gate-based algorithms (no Shor's, no Grover's) — purpose-built for optimization only.",
  },
  {
    name: "Xanadu",
    slug: "xanadu",
    qubitType: "Photonic",
    bestFor: ["quantum-ml", "research"],
    accessModel: "Xanadu Cloud, PennyLane (open-source)",
    maturity: 3,
    ecosystemSize: 3,
    pricing: "Free + Paid",
    strengths: "Room-temperature operation, PennyLane is purpose-built for quantum machine learning, first publicly traded photonic company.",
    considerations: "Photonic architecture is less proven at scale than superconducting or trapped-ion approaches.",
  },
  {
    name: "Pasqal",
    slug: "pasqal",
    qubitType: "Neutral atom",
    bestFor: ["simulation", "research"],
    accessModel: "Pasqal Cloud, EuroHPC partnerships",
    maturity: 3,
    ecosystemSize: 2,
    pricing: "Paid only",
    strengths: "Reconfigurable qubit connectivity, well-suited to quantum simulation problems with geometric structure.",
    considerations: "Smaller software ecosystem than IBM or Google; primarily research-focused access model.",
  },
];

const useCaseFilters = [
  { key: "all", label: "All Vendors" },
  { key: "learning", label: "Learning / Education" },
  { key: "research", label: "Academic Research" },
  { key: "high-fidelity", label: "High-Fidelity Circuits" },
  { key: "optimization-only", label: "Optimization Problems" },
  { key: "quantum-ml", label: "Quantum Machine Learning" },
  { key: "enterprise", label: "Enterprise Pilot" },
];

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? "text-quantum" : "text-line"}>★</span>
      ))}
    </div>
  );
}

export default function VendorComparisonPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? vendors : vendors.filter((v) => v.bestFor.includes(filter));

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Decision Tool
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Which Quantum Vendor Should You Pilot With?
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Filter by your primary use case to see which quantum hardware
        provider is the most reasonable starting point — an honest,
        non-commercial comparison.
      </p>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {useCaseFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === f.key
                ? "bg-quantum text-white border-quantum"
                : "bg-surface text-ink-muted border-line hover:border-quantum hover:text-quantum"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Vendor cards */}
      <div className="space-y-4">
        {filtered.map((v) => (
          <div key={v.slug} className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <Link href={`/companies/${v.slug}`} className="font-serif text-xl font-semibold text-ink hover:text-quantum transition-colors">
                  {v.name}
                </Link>
                <p className="font-mono text-xs text-quantum mt-0.5">{v.qubitType}</p>
              </div>
              <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2.5 py-1 shrink-0 ${
                v.pricing === "Free + Paid" ? "text-quantum bg-quantum-50" : "text-ink-muted bg-paper border border-line"
              }`}>
                {v.pricing}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-ink-soft mb-1">Hardware maturity</p>
                <StarRating value={v.maturity} />
              </div>
              <div>
                <p className="text-xs text-ink-soft mb-1">Ecosystem / docs</p>
                <StarRating value={v.ecosystemSize} />
              </div>
            </div>

            <p className="text-sm text-ink-muted mb-3"><span className="font-medium text-ink">Access: </span>{v.accessModel}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">Strengths</p>
                <p className="text-sm text-ink-muted leading-relaxed">{v.strengths}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-collapse mb-1">Considerations</p>
                <p className="text-sm text-ink-muted leading-relaxed">{v.considerations}</p>
              </div>
            </div>

            <Link href={`/companies/${v.slug}`} className="text-xs text-quantum hover:underline mt-3 inline-block">
              View full company profile →
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No vendors match this filter.</p>
      )}

      <div className="prose-quantum max-w-2xl mt-10">
        <h2>How to use this comparison</h2>
        <p>
          There's no universally "best" vendor — the right choice depends
          entirely on your goal. If you're learning or building internal
          expertise, IBM's free tier and extensive documentation make it
          the easiest entry point. If you need the highest possible gate
          fidelity for a research-grade pilot, IonQ or Quantinuum's
          trapped-ion systems are worth the cost. If your problem is
          specifically optimization-shaped, D-Wave's quantum annealing
          approach may outperform gate-based alternatives for that narrow
          use case. See our{" "}
          <Link href="/compare" className="text-quantum hover:underline">
            Compare Processors tool
          </Link>{" "}
          for detailed technical specifications once you've narrowed your
          options.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/compare" className="text-quantum hover:underline">→ Compare Processors (technical specs)</Link>
          <Link href="/companies" className="text-quantum hover:underline">→ Companies Database</Link>
          <Link href="/courses" className="text-quantum hover:underline">→ Courses — learn each platform</Link>
        </div>
      </div>
    </div>
  );
                                  }
      
