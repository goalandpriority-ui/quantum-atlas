"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BlochMark from "./BlochMark";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { companies } from "@/lib/content/companies";
import { industries } from "@/lib/content/industries";
import { researchPapers } from "@/lib/content/research";

const nav = [
  { href: "/learn", label: "Learning Center" },
  { href: "/dictionary", label: "Dictionary" },
  { href: "/algorithms", label: "Algorithms" },
  { href: "/companies", label: "Companies" },
  { href: "/hardware", label: "Hardware" },
  { href: "/industries", label: "Industries" },
  { href: "/myths", label: "Myths" },
  { href: "/research", label: "Research" },
  { href: "/timeline", label: "Timeline" },
  { href: "/quantum-vs-classical", label: "Quantum vs Classical" },
  { href: "/quantum-vs-ai", label: "Quantum vs AI" },
  { href: "/future", label: "Future" },
  { href: "/news", label: "News" },
  { href: "/courses", label: "Courses" },
  { href: "/jobs", label: "Jobs" },
  { href: "/tools", label: "Tools" },
];

function buildRandomPool(): string[] {
  return [
    ...dictionaryTerms.map((t) => `/dictionary/${t.slug}`),
    ...algorithms.map((a) => `/algorithms/${a.slug}`),
    ...processors.map((p) => `/hardware/${p.slug}`),
    ...companies.map((c) => `/companies/${c.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...researchPapers.map((r) => `/research/${r.slug}`),
  ];
}

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return <div className="w-9 h-9 shrink-0" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-line bg-surface text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function RandomArticleButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();

  const goRandom = () => {
    const pool = buildRandomPool();
    const pick = pool[Math.floor(Math.random() * pool.length)];
    router.push(pick);
  };

  if (compact) {
    return (
      <button
        onClick={goRandom}
        aria-label="Random article"
        className="sm:hidden w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-line bg-surface text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
        title="Take me somewhere random"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={goRandom}
      className="hidden sm:inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors shrink-0"
    >
      Surprise Me 🎲
    </button>
  );
}

export default function Header() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <BlochMark size={30} />
          <span className="font-serif text-xl font-semibold tracking-tight">
            Quantum<span className="text-quantum">Atlas</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-muted overflow-x-auto scrollbar-none">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-quantum transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <RandomArticleButton />
          <RandomArticleButton compact />
          <DarkModeToggle />
          <Link
            href="/dictionary"
            className="hidden sm:inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors shrink-0"
          >
            Search |ψ⟩
          </Link>
        </div>
      </div>

      {/* Mobile nav - horizontal scroll */}
      <div className="md:hidden border-t border-line">
        <nav className="max-w-content mx-auto px-6 py-2.5 flex items-center gap-5 text-sm font-medium text-ink-muted overflow-x-auto scrollbar-none">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-quantum transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
