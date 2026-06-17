"use client";

import { useState } from "react";
import Link from "next/link";
import { researchPapers } from "@/lib/content/research";

const categories = [
  { key: "all", label: "All" },
  { key: "hardware", label: "Hardware" },
  { key: "algorithms", label: "Algorithms" },
  { key: "error-correction", label: "Error Correction" },
  { key: "applications", label: "Applications" },
  { key: "theory", label: "Theory" },
] as const;

export default function ResearchIndexPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? researchPapers
      : researchPapers.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Updated Regularly
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Research Papers
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Real quantum computing research, explained in plain language. Every
        paper includes a summary anyone can understand, the key findings,
        real-world impact, and a difficulty rating — plus the original
        technical abstract for those who want it.
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

      {/* Papers grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((paper) => (
          <Link
            key={paper.slug}
            href={`/research/${paper.slug}`}
            className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-wide text-quantum bg-quantum-50 rounded-full px-2.5 py-1 mb-3">
              {paper.category.replace("-", " ")}
            </span>
            <h2 className="font-serif text-lg font-semibold text-ink leading-snug mb-2">
              {paper.title}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-3 line-clamp-2">
              {paper.plainSummary}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-ink-soft">{paper.institution} · {paper.date}</p>
              <span className="font-mono text-xs text-ink-soft">
                {"★".repeat(paper.difficulty)}{"☆".repeat(5 - paper.difficulty)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No papers in this category yet.</p>
      )}
    </div>
  );
}
