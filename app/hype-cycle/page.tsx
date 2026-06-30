"use client";

import { useState } from "react";
import Link from "next/link";

type Phase = "trigger" | "peak" | "trough" | "slope" | "plateau";

type HypeItem = {
  name: string;
  phase: Phase;
  position: number; // 0-100 along the curve for this phase
  description: string;
  link?: { href: string; label: string };
};

const phaseLabels: Record<Phase, { label: string; color: string }> = {
  trigger: { label: "Innovation Trigger", color: "text-ink-muted" },
  peak: { label: "Peak of Inflated Expectations", color: "text-collapse" },
  trough: { label: "Trough of Disillusionment", color: "text-collapse" },
  slope: { label: "Slope of Enlightenment", color: "text-quantum" },
  plateau: { label: "Plateau of Productivity", color: "text-quantum" },
};

const items: HypeItem[] = [
  {
    name: "Quantum Annealing (D-Wave)",
    phase: "slope",
    position: 60,
    description:
      "Past its hype peak from the mid-2010s. Now used for specific, narrow optimization pilots with realistic expectations rather than general-purpose claims.",
    link: { href: "/companies/d-wave", label: "D-Wave profile" },
  },
  {
    name: "Quantum Key Distribution (QKD)",
    phase: "slope",
    position: 50,
    description:
      "Moving from research demonstrations to real metropolitan deployments for high-security use cases, with honest acknowledgment of infrastructure limitations.",
    link: { href: "/algorithms/bb84-protocol", label: "BB84 Protocol" },
  },
  {
    name: "Quantum Chemistry Simulation (VQE)",
    phase: "slope",
    position: 40,
    description:
      "Genuine research progress with realistic near-term framing — widely seen as one of the more credible practical applications, without overselling timelines.",
    link: { href: "/algorithms/vqe", label: "VQE Algorithm" },
  },
  {
    name: "'Quantum Supremacy' Claims",
    phase: "trough",
    position: 70,
    description:
      "Google's 2019 claim generated massive hype, then was partially walked back as classical algorithms improved. The field has become more cautious about supremacy-style announcements since.",
    link: { href: "/dictionary/quantum-supremacy", label: "Quantum Supremacy explained" },
  },
  {
    name: "Quantum Machine Learning",
    phase: "trough",
    position: 50,
    description:
      "Initial excitement around quantum ML has cooled significantly as researchers found proven speedups apply only under narrow, often unrealistic assumptions.",
    link: { href: "/quantum-vs-ai", label: "Quantum vs AI" },
  },
  {
    name: "Quantum Portfolio Optimization (Finance)",
    phase: "trough",
    position: 30,
    description:
      "Early finance-sector pilots generated headlines, but classical optimization heuristics have largely remained competitive, tempering initial enthusiasm.",
    link: { href: "/industries/finance", label: "Quantum for Finance" },
  },
  {
    name: "Post-Quantum Cryptography Migration",
    phase: "peak",
    position: 60,
    description:
      "Urgency is genuinely warranted given the 'harvest now, decrypt later' threat, but media coverage sometimes implies quantum computers can already break encryption today — they cannot.",
    link: { href: "/dictionary/post-quantum-cryptography", label: "Post-Quantum Cryptography" },
  },
  {
    name: "Fault-Tolerant Quantum Computing",
    phase: "trigger",
    position: 80,
    description:
      "Google's Willow below-threshold result (2024) is a genuine milestone, but large-scale fault tolerance with thousands of logical qubits remains years away — early excitement is building again.",
    link: { href: "/learn/path-to-fault-tolerance", label: "Path to Fault Tolerance" },
  },
  {
    name: "Quantum Internet / Networking",
    phase: "trigger",
    position: 40,
    description:
      "Early prototype quantum repeaters are genuinely promising, but a working quantum internet remains a multi-decade engineering challenge — still early in its hype cycle.",
    link: { href: "/learn/quantum-networking-fundamentals", label: "Quantum Networking" },
  },
  {
    name: "Topological Qubits (Microsoft)",
    phase: "trough",
    position: 60,
    description:
      "A theoretically elegant, higher-risk approach that has taken longer to demonstrate convincingly than initially hoped, generating periodic skepticism alongside genuine research interest.",
    link: { href: "/companies/microsoft", label: "Microsoft profile" },
  },
  {
    name: "Quantum Computing for Drug Discovery",
    phase: "peak",
    position: 50,
    description:
      "Frequently cited as a flagship application in pharma press releases, but actual demonstrated impact on real drug discovery pipelines remains limited to small academic proofs of concept.",
    link: { href: "/industries/healthcare", label: "Quantum for Healthcare" },
  },
  {
    name: "Boson Sampling / Photonic Demonstrations",
    phase: "plateau",
    position: 50,
    description:
      "Well-understood, narrow, mathematically rigorous demonstrations of quantum advantage for an artificial sampling task — modest, settled expectations.",
    link: { href: "/dictionary/photonic-qubit", label: "Photonic Qubit" },
  },
];

function getCurvePosition(phase: Phase, position: number) {
  // Approximate x,y coordinates along a stylized hype cycle curve
  const phaseRanges: Record<Phase, { xStart: number; xEnd: number; curve: (t: number) => number }> = {
    trigger: { xStart: 0, xEnd: 15, curve: (t) => 70 - t * 50 },
    peak: { xStart: 15, xEnd: 30, curve: (t) => 20 - t * 5 },
    trough: { xStart: 30, xEnd: 55, curve: (t) => 15 + t * 55 },
    slope: { xStart: 55, xEnd: 80, curve: (t) => 70 - t * 35 },
    plateau: { xStart: 80, xEnd: 98, curve: () => 35 },
  };
  const range = phaseRanges[phase];
  const t = position / 100;
  const x = range.xStart + t * (range.xEnd - range.xStart);
  const y = range.curve(t);
  return { x, y };
}

export default function HypeCyclePage() {
  const [selected, setSelected] = useState<HypeItem | null>(null);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Honest Assessment
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        The Quantum Computing Hype Cycle
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Where {items.length} quantum computing applications and claims
        actually stand — separating genuine momentum from inflated
        expectations, based on a Gartner-style hype cycle framework.
        Click any point for details.
      </p>

      {/* SVG curve visualization */}
      <div className="rounded-2xl border border-line bg-surface p-6 mb-10 overflow-x-auto">
        <svg viewBox="0 0 100 90" className="w-full min-w-[600px] h-auto">
          {/* Curve path */}
          <path
            d="M 0,70 Q 15,5 30,15 Q 45,75 55,70 Q 70,35 98,35"
            fill="none"
            stroke="rgb(var(--color-line))"
            strokeWidth="0.8"
          />
          {/* Axis */}
          <line x1="0" y1="85" x2="100" y2="85" stroke="rgb(var(--color-line))" strokeWidth="0.5" />

          {/* Phase labels */}
          <text x="5" y="90" fontSize="2.2" fill="rgb(var(--color-ink-soft))" fontFamily="monospace">TRIGGER</text>
          <text x="18" y="90" fontSize="2.2" fill="rgb(var(--color-ink-soft))" fontFamily="monospace">PEAK</text>
          <text x="35" y="90" fontSize="2.2" fill="rgb(var(--color-ink-soft))" fontFamily="monospace">TROUGH</text>
          <text x="60" y="90" fontSize="2.2" fill="rgb(var(--color-ink-soft))" fontFamily="monospace">SLOPE</text>
          <text x="83" y="90" fontSize="2.2" fill="rgb(var(--color-ink-soft))" fontFamily="monospace">PLATEAU</text>

          {/* Data points */}
          {items.map((item) => {
            const { x, y } = getCurvePosition(item.phase, item.position);
            const isSelected = selected?.name === item.name;
            return (
              <circle
                key={item.name}
                cx={x}
                cy={y}
                r={isSelected ? 2.2 : 1.5}
                fill={isSelected ? "rgb(var(--color-quantum))" : "rgb(var(--color-collapse))"}
                stroke="rgb(var(--color-surface))"
                strokeWidth="0.4"
                className="cursor-pointer transition-all"
                onClick={() => setSelected(item)}
              />
            );
          })}
        </svg>
        <p className="text-xs text-ink-soft text-center mt-2">
          Click any dot above, or browse the full list below
        </p>
      </div>

      {/* Selected item detail */}
      {selected && (
        <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-6 mb-8 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className={`font-mono text-[11px] uppercase tracking-wide ${phaseLabels[selected.phase].color}`}>
              {phaseLabels[selected.phase].label}
            </span>
          </div>
          <h2 className="font-serif text-xl font-semibold text-ink mb-2">{selected.name}</h2>
          <p className="text-sm text-ink-muted leading-relaxed mb-3">{selected.description}</p>
          {selected.link && (
            <Link href={selected.link.href} className="text-sm text-quantum hover:underline">
              → {selected.link.label}
            </Link>
          )}
        </div>
      )}

      {/* Full list grouped by phase */}
      <div className="space-y-8">
        {(Object.keys(phaseLabels) as Phase[]).map((phase) => {
          const phaseItems = items.filter((i) => i.phase === phase);
          if (phaseItems.length === 0) return null;
          return (
            <div key={phase}>
              <h3 className={`font-mono text-xs uppercase tracking-wide mb-3 ${phaseLabels[phase].color}`}>
                {phaseLabels[phase].label}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {phaseItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelected(item)}
                    className="text-left rounded-xl border border-line bg-surface p-4 hover:border-quantum transition-colors"
                  >
                    <p className="font-medium text-ink text-sm mb-1">{item.name}</p>
                    <p className="text-xs text-ink-muted line-clamp-2">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/myths" className="text-quantum hover:underline">→ Myths Debunked</Link>
          <Link href="/future" className="text-quantum hover:underline">→ Future Predictions</Link>
          <Link href="/research" className="text-quantum hover:underline">→ Research Papers</Link>
        </div>
      </div>
    </div>
  );
}
