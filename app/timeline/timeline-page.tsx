"use client";

import { useState } from "react";
import Link from "next/link";
import { timelineEvents } from "@/lib/content/timeline";

const categories = [
  { key: "all", label: "All", color: "#3454D1" },
  { key: "theory", label: "Theory", color: "#3454D1" },
  { key: "algorithm", label: "Algorithms", color: "#E8542E" },
  { key: "hardware", label: "Hardware", color: "#1B1B2F" },
  { key: "cryptography", label: "Cryptography", color: "#6B6F8A" },
  { key: "industry", label: "Industry", color: "#9296AC" },
] as const;

const categoryColors: Record<string, string> = {
  theory: "#3454D1",
  algorithm: "#E8542E",
  hardware: "#1B1B2F",
  cryptography: "#6B6F8A",
  industry: "#9296AC",
};

export default function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredEvents =
    activeFilter === "all"
      ? timelineEvents
      : timelineEvents.filter((e) => e.category === activeFilter);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        1900 → Today
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Timeline
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        From Max Planck's first quantum hypothesis to today's 1,000+ qubit
        processors — every major milestone in the history of quantum theory
        and quantum computing.
      </p>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-12">
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

      {/* Timeline */}
      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line md:left-[87px]" />

        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <div key={event.year + event.title} className="relative flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Year label (desktop) */}
              <div className="hidden md:block w-20 shrink-0 pt-0.5">
                <span className="font-mono text-sm font-semibold text-ink">{event.year}</span>
              </div>

              {/* Dot */}
              <div className="absolute left-0 top-1.5 md:left-[80px]">
                <span
                  className="block w-4 h-4 rounded-full border-2 border-surface"
                  style={{ backgroundColor: categoryColors[event.category] }}
                />
              </div>

              {/* Content */}
              <div className="pl-8 md:pl-8 flex-1">
                <div className="md:hidden mb-1">
                  <span className="font-mono text-sm font-semibold text-quantum">{event.year}</span>
                </div>
                <div className="flex items-start gap-2 mb-1.5 flex-wrap">
                  <h2 className="font-serif text-lg font-semibold text-ink">{event.title}</h2>
                  <span
                    className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full"
                    style={{
                      color: categoryColors[event.category],
                      backgroundColor: `${categoryColors[event.category]}15`,
                    }}
                  >
                    {event.category}
                  </span>
                </div>
                {event.person && (
                  <p className="text-xs text-ink-soft font-medium mb-2">{event.person}</p>
                )}
                <p className="text-sm text-ink-muted leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          See where this history leads
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center — understand the concepts behind each milestone</Link>
          <Link href="/hardware" className="text-quantum hover:underline">→ Hardware Database — today's processors in detail</Link>
          <Link href="/companies" className="text-quantum hover:underline">→ Companies — who's building the future</Link>
        </div>
      </div>
    </div>
  );
}
