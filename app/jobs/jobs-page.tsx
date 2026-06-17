"use client";

import { useState } from "react";
import Link from "next/link";
import { jobRoles } from "@/lib/content/jobs";

const categories = [
  { key: "all", label: "All" },
  { key: "research", label: "Research" },
  { key: "software", label: "Software" },
  { key: "hardware", label: "Hardware" },
  { key: "internship", label: "Internships" },
] as const;

const categoryStyles: Record<string, string> = {
  research: "text-quantum bg-quantum-50",
  software: "text-collapse bg-collapse-50",
  hardware: "text-ink bg-paper border border-line",
  internship: "text-ink-muted bg-paper border border-line",
};

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? jobRoles
      : jobRoles.filter((j) => j.category === activeFilter);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Career Paths
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Jobs
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        An overview of the career paths available in quantum computing —
        what each role actually involves, who typically hires for it, and
        what background tends to lead there. This is a guide to the field,
        not a live job board — check company career pages directly for
        current openings.
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

      {/* Job cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((job) => (
          <div
            key={job.slug}
            className="rounded-xl border border-line bg-surface p-5"
          >
            <span className={`inline-block font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 mb-3 ${categoryStyles[job.category]}`}>
              {job.category}
            </span>
            <h2 className="font-serif text-lg font-semibold text-ink leading-snug mb-2">
              {job.title}
            </h2>
            <p className="text-xs text-ink-soft mb-3">{job.typicalEmployers}</p>
            <p className="text-sm text-ink-muted leading-relaxed mb-3">
              {job.description}
            </p>
            <div className="mb-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1.5">
                Common Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {job.commonSkills.map((skill) => (
                  <span key={skill} className="text-xs bg-paper border border-line rounded-full px-2.5 py-1 text-ink-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-ink-soft">
              <span className="font-medium text-ink">Typical background:</span> {job.typicalBackground}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No roles in this category yet.</p>
      )}

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Build the skills</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Start preparing today
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center — build foundational knowledge</Link>
          <Link href="/courses" className="text-quantum hover:underline">→ Courses — structured learning paths</Link>
          <Link href="/algorithms" className="text-quantum hover:underline">→ Algorithms Database — go deeper on the math</Link>
        </div>
      </div>
    </div>
  );
}
