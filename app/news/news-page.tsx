"use client";

import { useState, useEffect } from "react";
import { newsItems as staticNewsItems } from "@/lib/content/news";

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

type LiveNewsItem = {
  slug: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  category: string;
  url?: string;
};

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [liveItems, setLiveItems] = useState<LiveNewsItem[] | null>(null);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setLiveItems(data.items);
          setIsLive(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const items: LiveNewsItem[] = liveItems || staticNewsItems;

  const filtered =
    activeFilter === "all" ? items : items.filter((n) => n.category === activeFilter);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <div className="flex items-center gap-3 mb-2">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum">
          {loading ? "Loading..." : isLive ? "Live Feed" : "Curated"}
        </p>
        {isLive && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-collapse bg-collapse-50 rounded-full px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-collapse animate-pulse" />
            Live
          </span>
        )}
      </div>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum News
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        {isLive
          ? "Real-time news pulled from across the web, updated hourly — the latest breakthroughs, processor announcements, research results, and policy developments."
          : "The latest breakthroughs, processor announcements, research results, and policy developments from across the quantum computing industry."}
      </p>

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

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((item) => {
          const CardContent = (
            <>
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
            </>
          );

          return item.url ? (
            <a
              key={item.slug}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all block"
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={item.slug}
              className="rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
            >
              {CardContent}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No news in this category yet.</p>
      )}

      {!isLive && !loading && (
        <p className="text-xs text-ink-soft text-center mt-10">
          Showing curated articles. Live feed unavailable right now — check back soon.
        </p>
      )}
    </div>
  );
}
