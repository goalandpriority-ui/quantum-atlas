"use client";

import { useState, useEffect } from "react";
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

type LiveJob = {
  slug: string;
  title: string;
  company: string;
  location: string;
  description: string;
  category: string;
  contractType: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  date: string;
  url: string;
};

function formatSalary(min: number | null, max: number | null) {
  if (!min && !max) return null;
  const fmt = (n: number) => `$${Math.round(n / 1000)}k`;
  if (min && max) return `${fmt(min)} – ${fmt(max)}`;
  if (min) return `From ${fmt(min)}`;
  if (max) return `Up to ${fmt(max)}`;
  return null;
}

export default function JobsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [liveJobs, setLiveJobs] = useState<LiveJob[] | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setLiveJobs(data.items);
          setIsLive(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const filteredLive = liveJobs
    ? activeFilter === "all"
      ? liveJobs
      : liveJobs.filter((j) => j.category === activeFilter)
    : [];

  const filteredGuide =
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
        {isLive
          ? "Live job openings pulled in real time, plus a guide to what each career path actually involves and how to prepare for it."
          : "An overview of the career paths available in quantum computing — what each role actually involves, who typically hires for it, and what background tends to lead there."}
      </p>

      {/* Filter pills (shared by both sections) */}
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

      {/* Live openings section */}
      {!loading && isLive && (
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-xl font-semibold text-ink">Live Openings</h2>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-collapse bg-collapse-50 rounded-full px-2 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-collapse animate-pulse" />
              Live
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {filteredLive.map((job) => {
              const salary = formatSalary(job.salaryMin, job.salaryMax);
              return (
                <a
                  key={job.slug}
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
                >
                  <span className={`inline-block font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 mb-3 ${categoryStyles[job.category]}`}>
                    {job.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ink leading-snug mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-quantum font-medium mb-1">{job.company}</p>
                  <p className="text-xs text-ink-soft mb-3">{job.location} · {job.date}</p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">
                    {job.description}
                  </p>
                  {salary && (
                    <p className="text-xs font-mono text-ink-soft">{salary}</p>
                  )}
                </a>
              );
            })}
          </div>
          {filteredLive.length === 0 && (
            <p className="text-ink-muted text-sm py-6">No live openings in this category right now — try "All" or check back later.</p>
          )}
        </div>
      )}

      {/* Career path guide (always shown) */}
      <div className="mb-4">
        <h2 className="font-serif text-xl font-semibold text-ink mb-1">Career Path Guide</h2>
        <p className="text-sm text-ink-soft mb-6">
          What each role actually involves, who typically hires for it, and what background tends to lead there.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {filteredGuide.map((job) => (
          <div
            key={job.slug}
            className="rounded-xl border border-line bg-surface p-5"
          >
            <span className={`inline-block font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 mb-3 ${categoryStyles[job.category]}`}>
              {job.category}
            </span>
            <h3 className="font-serif text-lg font-semibold text-ink leading-snug mb-2">
              {job.title}
            </h3>
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

      {filteredGuide.length === 0 && (
        <p className="text-ink-muted text-center py-12">No roles in this category yet.</p>
      )}

      {!isLive && !loading && (
        <p className="text-xs text-ink-soft text-center mt-6">
          Live job listings unavailable right now — showing the career path guide below. Check company career pages directly for current openings.
        </p>
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
