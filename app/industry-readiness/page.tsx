"use client";

import { useState } from "react";
import Link from "next/link";

type Industry = {
  key: string;
  name: string;
  icon: string;
  applications: { name: string; maturity: "early" | "piloting" | "promising"; description: string; link?: string }[];
  recommendation: string;
  link: string;
};

const industries: Industry[] = [
  {
    key: "finance",
    name: "Finance & Banking",
    icon: "💰",
    applications: [
      { name: "Monte Carlo risk analysis", maturity: "promising", description: "Quantum amplitude estimation offers a proven quadratic speedup for derivatives pricing and risk simulation.", link: "/algorithms/quantum-amplitude-estimation" },
      { name: "Portfolio optimization", maturity: "piloting", description: "QAOA-based approaches are being piloted but haven't yet beaten mature classical heuristics in most benchmarks.", link: "/algorithms/qaoa" },
      { name: "Fraud detection (quantum ML)", maturity: "early", description: "Quantum machine learning for fraud pattern detection remains largely unproven on real-world data at scale." },
    ],
    recommendation: "Begin with a research partnership focused on Monte Carlo risk applications — this is the most credible near-term opportunity. Treat portfolio optimization and fraud detection as longer-term research bets.",
    link: "/industries/finance",
  },
  {
    key: "healthcare",
    name: "Healthcare & Pharma",
    icon: "🧬",
    applications: [
      { name: "Molecular simulation (drug discovery)", maturity: "promising", description: "VQE-based quantum chemistry simulation is widely seen as one of the most credible practical applications, though still small-scale.", link: "/algorithms/vqe" },
      { name: "Protein folding assistance", maturity: "early", description: "Quantum approaches to protein structure prediction remain largely theoretical compared to classical tools like AlphaFold." },
      { name: "Clinical trial optimization", maturity: "early", description: "Quantum optimization for trial design and patient matching is speculative with minimal real-world demonstration." },
    ],
    recommendation: "Molecular simulation research partnerships are worth exploring now if you're in pharma R&D. Don't expect production-ready tools for clinical operations within the next several years.",
    link: "/industries/healthcare",
  },
  {
    key: "logistics",
    name: "Logistics & Supply Chain",
    icon: "🚚",
    applications: [
      { name: "Route optimization", maturity: "piloting", description: "QAOA and quantum annealing pilots for vehicle routing exist, but classical optimization heuristics remain highly competitive.", link: "/algorithms/qaoa" },
      { name: "Warehouse/inventory optimization", maturity: "early", description: "Limited real-world quantum pilots; mostly theoretical mapping of inventory problems to quantum optimization formulations." },
      { name: "Network resilience modeling", maturity: "early", description: "Quantum simulation of complex supply network failure modes is an active but immature research area." },
    ],
    recommendation: "Route optimization pilots are reasonable to monitor, but don't expect quantum to outperform your existing classical optimization tools yet. Revisit in 3-5 years.",
    link: "/industries/logistics",
  },
  {
    key: "manufacturing",
    name: "Manufacturing & Materials",
    icon: "🏭",
    applications: [
      { name: "Materials discovery", maturity: "promising", description: "Quantum chemistry simulation for new materials and catalysts shares the same credible foundation as pharma applications.", link: "/algorithms/vqe" },
      { name: "Process optimization", maturity: "early", description: "Quantum optimization for manufacturing scheduling remains largely experimental." },
      { name: "Quality control (quantum sensing)", maturity: "piloting", description: "Quantum sensing technology (distinct from quantum computing) is more mature and already used in some precision manufacturing contexts.", link: "/dictionary/quantum-sensing" },
    ],
    recommendation: "If materials science is core to your business, a quantum chemistry research partnership is worth investigating now. Quantum sensing (not computing) may offer more immediate practical value.",
    link: "/industries/manufacturing",
  },
  {
    key: "energy",
    name: "Energy & Climate",
    icon: "⚡",
    applications: [
      { name: "Battery materials research", maturity: "promising", description: "Next-generation battery chemistry simulation via VQE-style methods is an actively researched, credible application.", link: "/algorithms/vqe" },
      { name: "Grid optimization", maturity: "early", description: "Quantum optimization for power grid balancing remains experimental, with classical methods still dominant." },
      { name: "Carbon capture chemistry", maturity: "early", description: "Quantum simulation of carbon capture materials is speculative, limited to small academic demonstrations." },
    ],
    recommendation: "Battery materials research is the most credible near-term opportunity if you're in energy storage. Grid and carbon capture applications remain longer-term research bets.",
    link: "/industries/energy",
  },
  {
    key: "cybersecurity",
    name: "Cybersecurity",
    icon: "🔒",
    applications: [
      { name: "Post-quantum cryptography migration", maturity: "promising", description: "Not quantum computing itself, but an urgent, well-defined classical migration with NIST-standardized algorithms ready now.", link: "/dictionary/post-quantum-cryptography" },
      { name: "Quantum key distribution", maturity: "piloting", description: "Real metropolitan QKD deployments exist for high-security use cases, though infrastructure requirements limit broad adoption.", link: "/algorithms/bb84-protocol" },
      { name: "Quantum random number generation", maturity: "promising", description: "Commercially available today — genuinely unpredictable randomness for cryptographic applications.", link: "/dictionary/quantum-sensing" },
    ],
    recommendation: "This is the most urgent category on this list — post-quantum cryptography migration should begin now regardless of your quantum computing timeline views. Take our full Quantum Readiness Quiz for a detailed assessment.",
    link: "/industries/cybersecurity",
  },
];

const maturityConfig = {
  early: { label: "Early Research", color: "text-ink-muted bg-paper border border-line" },
  piloting: { label: "Active Piloting", color: "text-collapse bg-collapse-50" },
  promising: { label: "Most Promising", color: "text-quantum bg-quantum-50" },
};

export default function IndustryReadinessPage() {
  const [selected, setSelected] = useState<Industry | null>(null);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry Assessment
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Is My Industry Quantum-Ready?
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Select your industry to see exactly which quantum computing
        applications are most credible for your sector right now — honestly
        rated by maturity, not marketing hype.
      </p>

      {/* Industry selector grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
        {industries.map((ind) => (
          <button
            key={ind.key}
            onClick={() => setSelected(ind)}
            className={`rounded-xl border-2 p-4 text-center transition-all ${
              selected?.key === ind.key
                ? "border-quantum bg-quantum-50"
                : "border-line bg-surface hover:border-quantum"
            }`}
          >
            <p className="text-2xl mb-1.5">{ind.icon}</p>
            <p className="text-xs font-medium text-ink leading-snug">{ind.name}</p>
          </button>
        ))}
      </div>

      {/* Selected industry detail */}
      {selected && (
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-1">
            {selected.icon} {selected.name}
          </h2>
          <Link href={selected.link} className="text-sm text-quantum hover:underline mb-6 inline-block">
            View full industry coverage →
          </Link>

          <div className="space-y-3 mb-6">
            {selected.applications.map((app) => (
              <div key={app.name} className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-ink text-sm">{app.name}</h3>
                  <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 shrink-0 ${maturityConfig[app.maturity].color}`}>
                    {maturityConfig[app.maturity].label}
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-2">{app.description}</p>
                {app.link && (
                  <Link href={app.link} className="text-xs text-quantum hover:underline">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Our recommendation</p>
            <p className="text-sm text-ink leading-relaxed">{selected.recommendation}</p>
          </div>
        </div>
      )}

      {!selected && (
        <p className="text-ink-soft text-sm">Select an industry above to see its quantum readiness assessment.</p>
      )}

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Go deeper</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/quiz" className="text-quantum hover:underline">→ Full Quantum Readiness Quiz (cybersecurity-focused)</Link>
          <Link href="/industries" className="text-quantum hover:underline">→ All Industries</Link>
          <Link href="/future" className="text-quantum hover:underline">→ Future Predictions</Link>
        </div>
      </div>
    </div>
  );
  }
