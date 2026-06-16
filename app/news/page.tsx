"use client";

import { useState } from "react";
import { newsItems } from "@/lib/content/news";

const categories = [
  { key: "all", label: "All" },
  { key: "hardware", label: "Hardware" },
  { key: "research", label: "Research" },
  { key: "industry", label: "Industry" },
  { key: "policy", label: "Policy" },
] as const;

const categoryStyles: Record<string, string> = {
  hardware: "text-quantum bg-quantum-50",
  research: "text-collapse bg-collapse-50",
  industry: "text-ink bg-paper border border-line",
  policy: "text-ink-muted bg-paper border border-line",
};

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? newsItems
      : newsItems.filter((n) => n.category === activeFilter);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Updated Regularly
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Live Quantum News
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        The latest breakthroughs, processor announcements, research results,
        and policy developments from across the quantum computing industry.
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

      {/* News grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((item) => (
          <div
            key={item.slug}
            className="rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
          >
            <span
              className={`inline-block font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 mb-3 ${categoryStyles[item.category]}`}
            >
              {item.category}
            </span>
            <h2 className="font-serif text-lg font-semibold text-ink leading-snug mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-3">
              {item.summary}
            </p>
            <p className="text-xs text-ink-soft">
              {item.source} · {item.date}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No news in this category yet.</p>
      )}
    </div>
  );
}

