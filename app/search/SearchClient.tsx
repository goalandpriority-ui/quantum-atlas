"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { companies } from "@/lib/content/companies";
import { industries } from "@/lib/content/industries";
import { researchPapers } from "@/lib/content/research";
import { learningLevels } from "@/lib/content/learning";
import { courses } from "@/lib/content/courses";

type SearchResult = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  category: string;
  categoryColor: string;
};

const categoryColors: Record<string, string> = {
  Dictionary: "text-quantum bg-quantum-50",
  Algorithm: "text-collapse bg-collapse-50",
  Hardware: "text-ink bg-paper border border-line",
  Company: "text-ink-muted bg-paper border border-line",
  Industry: "text-quantum bg-quantum-50",
  Research: "text-collapse bg-collapse-50",
  Learn: "text-quantum bg-quantum-50",
  Course: "text-ink bg-paper border border-line",
};

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];
  dictionaryTerms.forEach((t) => results.push({ slug: t.slug, title: t.term, summary: t.shortDefinition, href: `/dictionary/${t.slug}`, category: "Dictionary", categoryColor: categoryColors["Dictionary"] }));
  algorithms.forEach((a) => results.push({ slug: a.slug, title: a.name, summary: a.summary, href: `/algorithms/${a.slug}`, category: "Algorithm", categoryColor: categoryColors["Algorithm"] }));
  processors.forEach((p) => results.push({ slug: p.slug, title: p.name, summary: p.summary.slice(0, 140) + "...", href: `/hardware/${p.slug}`, category: "Hardware", categoryColor: categoryColors["Hardware"] }));
  companies.forEach((c) => results.push({ slug: c.slug, title: c.name, summary: c.summary.slice(0, 140) + "...", href: `/companies/${c.slug}`, category: "Company", categoryColor: categoryColors["Company"] }));
  industries.forEach((i) => results.push({ slug: i.slug, title: i.name, summary: i.summary, href: `/industries/${i.slug}`, category: "Industry", categoryColor: categoryColors["Industry"] }));
  researchPapers.forEach((r) => results.push({ slug: r.slug, title: r.title, summary: r.plainSummary.slice(0, 140) + "...", href: `/research/${r.slug}`, category: "Research", categoryColor: categoryColors["Research"] }));
  learningLevels.forEach((level) => level.articles.forEach((article) => results.push({ slug: article.slug, title: article.title, summary: article.summary, href: `/learn/${article.slug}`, category: "Learn", categoryColor: categoryColors["Learn"] })));
  courses.forEach((c) => results.push({ slug: c.slug, title: c.title, summary: c.description.slice(0, 140) + "...", href: `/courses/${c.slug}`, category: "Course", categoryColor: categoryColors["Course"] }));
  return results;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <span>{text}</span>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-quantum-50 text-quantum rounded px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export default function SearchClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState("All");

  const index = useMemo(() => buildIndex(), []);

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { const q = searchParams.get("q"); if (q) setQuery(q); }, [searchParams]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return index.filter((item) => item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q));
  }, [query, index]);

  const categories = useMemo(() => {
    const cats = new Set(results.map((r) => r.category));
    return ["All", ...Array.from(cats)];
  }, [results]);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return results;
    return results.filter((r) => r.category === activeCategory);
  }, [results, activeCategory]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setActiveCategory("All");
    router.replace(`/search?q=${encodeURIComponent(val)}`, { scroll: false });
  };

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Site-wide Search</p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-6">Search QuantumAtlas</h1>

      <div className="relative max-w-2xl mb-8">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input ref={inputRef} type="text" value={query} onChange={handleInput} placeholder="Search algorithms, terms, hardware, companies…" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-line bg-surface text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum transition-colors text-sm" />
        {query && <button onClick={() => { setQuery(""); inputRef.current?.focus(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors">✕</button>}
      </div>

      {query.trim() && (
        <p className="text-sm text-ink-muted mb-4">
          {results.length === 0 ? `No results for "${query}"` : `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
        </p>
      )}

      {results.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${activeCategory === cat ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line hover:border-quantum hover:text-quantum"}`}>
              {cat}{cat !== "All" && <span className="ml-1.5 opacity-60">{results.filter((r) => r.category === cat).length}</span>}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 && (
        <div className="space-y-3 max-w-2xl">
          {filtered.map((result) => (
            <Link key={result.href} href={result.href} className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all">
              <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 mb-2 inline-block ${result.categoryColor}`}>{result.category}</span>
              <h2 className="font-serif text-base font-semibold text-ink mb-1 leading-snug"><HighlightedText text={result.title} query={query} /></h2>
              <p className="text-sm text-ink-muted leading-relaxed"><HighlightedText text={result.summary} query={query} /></p>
            </Link>
          ))}
        </div>
      )}

      {!query.trim() && (
        <div className="max-w-2xl">
          <p className="text-ink-muted text-sm mb-6">Search across {index.length}+ entries — dictionary terms, algorithms, hardware, companies, industries, research papers, learning articles, and courses.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["Shor's Algorithm", "Qubit", "IBM Condor", "VQE"].map((suggestion) => (
              <button key={suggestion} onClick={() => { setQuery(suggestion); router.replace(`/search?q=${encodeURIComponent(suggestion)}`, { scroll: false }); }} className="rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink-muted hover:border-quantum hover:text-quantum transition-colors text-left">
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
