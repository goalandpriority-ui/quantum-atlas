"use client";

import { useState } from "react";
import Link from "next/link";
import { algorithms } from "@/lib/content/algorithms";

const categories = [
  { key: "all", label: "All" },
  { key: "factoring", label: "Factoring" },
  { key: "search", label: "Search" },
  { key: "simulation", label: "Simulation" },
  { key: "optimization", label: "Optimization" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "cryptography", label: "Cryptography" },
  { key: "foundational", label: "Foundational" },
] as const;

const speedupStyles: Record<string, string> = {
  exponential: "text-collapse bg-collapse-50",
  quadratic: "text-quantum bg-quantum-50",
  polynomial: "text-quantum bg-quantum-50",
  heuristic: "text-ink-muted bg-paper border border-line",
  "none-proven": "text-ink-soft bg-paper border border-line",
};

const speedupLabels: Record<string, string> = {
  exponential: "Exponential",
  quadratic: "Quadratic",
  polynomial: "Polynomial",
  heuristic: "Heuristic",
  "none-proven": "N/A",
};

export default function AlgorithmsIndexPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all" ? algorithms : algorithms.filter((a) => a.category === activeFilter);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Database · {algorithms.length} Algorithms
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Algorithms Database
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        From Shor's Algorithm to quantum walks — every major quantum
        algorithm, what problem it solves, what kind of speedup it offers,
        and how difficult it is to understand.
      </p>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeFilter === cat.key
                ? "bg-quantum text-white border-quantum"
                : "bg-surface text-ink-muted border-line hover:border-quantum hover:text-quantum"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Algorithm cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((algo) => (
          <Link
            key={algo.slug}
            href={`/algorithms/${algo.slug}`}
            className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="font-serif text-lg font-semibold text-ink leading-snug">{algo.name}</h2>
              <span className="font-mono text-xs text-ink-soft shrink-0">{algo.year}</span>
            </div>
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${speedupStyles[algo.speedupType]}`}>
                {speedupLabels[algo.speedupType]}
              </span>
              <span className="font-mono text-[11px] text-ink-soft px-2.5 py-1">
                {"★".repeat(algo.difficulty)}{"☆".repeat(5 - algo.difficulty)}
              </span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">{algo.summary}</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No algorithms in this category yet.</p>
      )}
    </div>
  );
}
