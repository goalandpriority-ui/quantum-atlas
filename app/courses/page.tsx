"use client";

import { useState } from "react";
import { courses } from "@/lib/content/courses";

const costFilters = [
  { key: "all", label: "All" },
  { key: "free", label: "Free" },
  { key: "freemium", label: "Freemium" },
  { key: "paid", label: "Paid" },
] as const;

const levelStyles: Record<string, string> = {
  beginner: "text-quantum bg-quantum-50",
  intermediate: "text-collapse bg-collapse-50",
  advanced: "text-ink bg-paper border border-line",
};

const costStyles: Record<string, string> = {
  free: "text-quantum bg-quantum-50",
  freemium: "text-ink-muted bg-paper border border-line",
  paid: "text-collapse bg-collapse-50",
};

const providerTypeLabels: Record<string, string> = {
  university: "University",
  vendor: "Vendor",
  platform: "Platform",
};

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all" ? courses : courses.filter((c) => c.cost === activeFilter);

  const universities = filtered.filter((c) => c.providerType === "university");
  const others = filtered.filter((c) => c.providerType !== "university");

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Free &amp; Paid
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Courses
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        University courses, vendor tutorials, and platform specializations
        for learning quantum computing — from zero-cost OpenCourseWare to
        structured, certificate-bearing programs.
      </p>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {costFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeFilter === f.key
                ? "bg-quantum text-white border-quantum"
                : "bg-surface text-ink-muted border-line hover:border-quantum hover:text-quantum"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {universities.length > 0 && (
        <div className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">University Courses</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {universities.map((course) => (
              <div
                key={course.slug}
                className="rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-ink leading-snug">{course.title}</h3>
                </div>
                <p className="font-mono text-xs text-quantum mb-3">{course.provider}</p>
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${levelStyles[course.level]}`}>
                    {course.level}
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${costStyles[course.cost]}`}>
                    {course.cost}
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-2">{course.description}</p>
                <p className="text-xs text-ink-soft">{course.format}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div>
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">Vendor &amp; Platform Courses</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {others.map((course) => (
              <div
                key={course.slug}
                className="rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-ink leading-snug">{course.title}</h3>
                </div>
                <p className="font-mono text-xs text-quantum mb-3">
                  {course.provider} · {providerTypeLabels[course.providerType]}
                </p>
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${levelStyles[course.level]}`}>
                    {course.level}
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${costStyles[course.cost]}`}>
                    {course.cost}
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-2">{course.description}</p>
                <p className="text-xs text-ink-soft">{course.format}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No courses in this category yet.</p>
      )}
    </div>
  );
}
