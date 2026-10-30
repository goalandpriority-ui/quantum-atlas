"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  timelineEvents,
  timelineEras,
  type TimelineCategory,
} from "@/lib/content/timeline";

const categoryLabels: Record<TimelineCategory, string> = {
  foundations: "Foundations",
  theory: "Theory",
  algorithm: "Algorithms",
  hardware: "Hardware",
  "error-correction": "Error Correction",
  cryptography: "Cryptography",
  networking: "Networking",
  industry: "Industry and Policy",
};

const categoryStyles: Record<TimelineCategory, string> = {
  foundations: "border-amber-500/40 text-amber-600 dark:text-amber-300",
  theory: "border-violet-500/40 text-violet-600 dark:text-violet-300",
  algorithm: "border-sky-500/40 text-sky-600 dark:text-sky-300",
  hardware: "border-emerald-500/40 text-emerald-600 dark:text-emerald-300",
  "error-correction": "border-rose-500/40 text-rose-600 dark:text-rose-300",
  cryptography: "border-orange-500/40 text-orange-600 dark:text-orange-300",
  networking: "border-cyan-500/40 text-cyan-600 dark:text-cyan-300",
  industry: "border-slate-500/40 text-slate-600 dark:text-slate-300",
};

function Reference({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/\S+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-quantum hover:underline break-all"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function TimelineClient() {
  const [eraId, setEraId] = useState<string>("all");
  const [category, setCategory] = useState<TimelineCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [showRefs, setShowRefs] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const era = timelineEras.find((e) => e.id === eraId);
    return timelineEvents.filter((ev) => {
      if (era && (ev.year < era.start || ev.year > era.end)) return false;
      if (category !== "all" && ev.category !== category) return false;
      if (q) {
        const hay = `${ev.title} ${ev.description} ${ev.people} ${ev.date} ${ev.why}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [eraId, category, query]);

  const grouped = useMemo(
    () =>
      timelineEras
        .map((era) => ({
          era,
          events: filtered.filter((ev) => ev.year >= era.start && ev.year <= era.end),
        }))
        .filter((g) => g.events.length > 0),
    [filtered]
  );

  const chip = (active: boolean) =>
    `px-3 py-1.5 rounded-full border text-xs font-mono transition-colors ${
      active
        ? "bg-quantum text-white border-quantum"
        : "border-line text-ink-muted hover:text-ink hover:border-quantum"
    }`;

  return (
    <div>
      <div className="rounded-xl border border-line bg-surface p-4 mb-10 space-y-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search events, people, or years (for example Shor, 1994, Willow)"
          className="w-full rounded-lg border border-line bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum"
          aria-label="Search the timeline"
        />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">Era</p>
          <div className="flex flex-wrap gap-2">
            <button className={chip(eraId === "all")} onClick={() => setEraId("all")}>
              All eras
            </button>
            {timelineEras.map((era) => (
              <button key={era.id} className={chip(eraId === era.id)} onClick={() => setEraId(era.id)}>
                {era.start} to {era.end}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">Topic</p>
          <div className="flex flex-wrap gap-2">
            <button className={chip(category === "all")} onClick={() => setCategory("all")}>
              All topics
            </button>
            {(Object.keys(categoryLabels) as TimelineCategory[]).map((c) => (
              <button key={c} className={chip(category === c)} onClick={() => setCategory(c)}>
                {categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-muted">
            Showing {filtered.length} of {timelineEvents.length} events
          </p>
          <button className={chip(showRefs)} onClick={() => setShowRefs((v) => !v)}>
            {showRefs ? "Hide all references" : "Show all references"}
          </button>
        </div>
      </div>

      {grouped.length === 0 && (
        <p className="text-ink-muted">No events match your filters. Try clearing the search or topic.</p>
      )}

      {grouped.map(({ era, events }) => (
        <section key={era.id} className="mb-14" aria-labelledby={`era-${era.id}`}>
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-quantum">
              {era.start} to {era.end}
            </p>
            <h2 id={`era-${era.id}`} className="font-serif text-2xl md:text-3xl font-semibold text-ink mt-1">
              {era.label}
            </h2>
            <p className="text-ink-muted mt-2 max-w-2xl">{era.blurb}</p>
          </div>

          <ol className="relative border-l border-line ml-3 space-y-8">
            {events.map((ev) => (
              <li key={ev.id} id={`event-${ev.id}`} className="ml-6">
                <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-quantum" aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-sm font-semibold text-quantum">{ev.date}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wide ${categoryStyles[ev.category]}`}
                  >
                    {categoryLabels[ev.category]}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">{ev.title}</h3>
                {ev.people && <p className="text-xs text-ink-soft mt-1">{ev.people}</p>}
                <p className="text-ink-muted leading-relaxed mt-3">{ev.description}</p>
                <p className="mt-3 rounded-lg border-l-2 border-quantum bg-surface px-3 py-2 text-sm text-ink">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-quantum mr-2">Why it matters</span>
                  {ev.why}
                </p>

                {ev.links.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mt-3">
                    {ev.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="inline-block rounded-full border border-line px-3 py-1 text-xs text-ink-muted hover:text-quantum hover:border-quantum"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <details className="mt-3 group" open={showRefs}>
                  <summary className="cursor-pointer font-mono text-xs text-quantum select-none">
                    References ({ev.sources.length})
                  </summary>
                  <ol className="list-decimal ml-5 mt-2 space-y-1 text-xs text-ink-muted leading-relaxed">
                    {ev.sources.map((s, i) => (
                      <li key={i}>
                        <Reference text={s} />
                      </li>
                    ))}
                  </ol>
                </details>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
