"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BlochMark from "./BlochMark";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { companies } from "@/lib/content/companies";
import { industries } from "@/lib/content/industries";
import { researchPapers } from "@/lib/content/research";

type DropdownItem = { href: string; label: string; desc?: string };
type NavItem = { href: string; label: string; dropdown?: DropdownItem[][] };

const nav: NavItem[] = [
  {
    href: "/learn",
    label: "Learning Center",
    dropdown: [
      [
        { href: "/learn", label: "All Articles", desc: "29 articles across 8 levels" },
        { href: "/learning-paths", label: "Learning Paths", desc: "Curated by goal" },
        { href: "/roadmap", label: "Roadmap", desc: "Beginner → Researcher" },
        { href: "/learn/quiz-hub", label: "Quiz Hub", desc: "Test your knowledge" },
        { href: "/certification", label: "Get Certified 🎓", desc: "Earn a certificate" },
      ],
      [
        { href: "/learn/superposition-visual", label: "Superposition (Visual)" },
        { href: "/learn/entanglement-visual", label: "Entanglement (Visual)" },
        { href: "/learn/interference-visual", label: "Interference (Visual)" },
        { href: "/interview-questions", label: "Interview Questions" },
        { href: "/frameworks", label: "Frameworks Compared" },
      ],
    ],
  },
  {
    href: "/dictionary",
    label: "Dictionary",
    dropdown: [
      [
        { href: "/dictionary", label: "Full Dictionary", desc: "50 terms explained" },
        { href: "/algorithms", label: "Algorithms", desc: "51 quantum algorithms" },
        { href: "/glossary", label: "Acronym Glossary", desc: "NISQ, QEC, VQE…" },
      ],
    ],
  },
  {
    href: "/hardware",
    label: "Hardware",
    dropdown: [
      [
        { href: "/hardware", label: "Hardware Database", desc: "14 processors profiled" },
        { href: "/companies", label: "Companies", desc: "10 companies covered" },
        { href: "/compare", label: "Compare Processors" },
        { href: "/vendor-comparison", label: "Vendor Comparison" },
        { href: "/people", label: "Quantum Pioneers" },
      ],
    ],
  },
  {
    href: "/research",
    label: "Research",
    dropdown: [
      [
        { href: "/research", label: "Research Papers", desc: "20 papers, plain language" },
        { href: "/news", label: "News", desc: "Live quantum news" },
        { href: "/timeline", label: "Timeline", desc: "1900 to today" },
        { href: "/hype-cycle", label: "Hype Cycle Tracker" },
        { href: "/investment-tracker", label: "Investment Tracker" },
        { href: "/patents", label: "Patent Filings" },
      ],
    ],
  },
  {
    href: "/industries",
    label: "Insights",
    dropdown: [
      [
        { href: "/industries", label: "By Industry", desc: "10 sectors covered" },
        { href: "/countries", label: "By Country", desc: "Global quantum landscape" },
        { href: "/quantum-vs-classical", label: "Quantum vs Classical" },
        { href: "/quantum-vs-ai", label: "Quantum vs AI" },
        { href: "/quantum-vs-supercomputers", label: "Quantum vs Supercomputers" },
        { href: "/quantum-vs-blockchain", label: "Quantum vs Blockchain" },
      ],
      [
        { href: "/future", label: "Future Predictions" },
        { href: "/myths", label: "Myths Debunked", desc: "30 myths fact-checked" },
        { href: "/faq", label: "FAQ", desc: "62 questions answered" },
        { href: "/pop-culture", label: "Quantum in Pop Culture" },
        { href: "/industry-readiness", label: "Industry Readiness" },
      ],
    ],
  },
  {
    href: "/tools",
    label: "Tools",
    dropdown: [
      [
        { href: "/tools", label: "Calculators", desc: "10 interactive tools" },
        { href: "/circuit-builder", label: "Circuit Builder" },
        { href: "/grovers-builder", label: "Build Grover's" },
        { href: "/race", label: "Quantum vs Classical Race" },
        { href: "/entanglement-visualizer", label: "Entanglement Visualizer" },
      ],
      [
        { href: "/daily-challenge", label: "Daily Challenge 🧩" },
        { href: "/qubit-defender", label: "Qubit Defender 🎮" },
        { href: "/badges", label: "Badges & Achievements" },
        { href: "/quiz", label: "Readiness Quiz" },
        { href: "/salary", label: "Salary Heatmap" },
      ],
    ],
  },
  {
    href: "/courses",
    label: "Career",
    dropdown: [
      [
        { href: "/courses", label: "Courses", desc: "10 courses reviewed" },
        { href: "/jobs", label: "Jobs", desc: "Live quantum roles" },
        { href: "/salary", label: "Salary Heatmap" },
        { href: "/interview-questions", label: "Interview Questions" },
        { href: "/roadmap", label: "Learning Roadmap" },
        { href: "/certification", label: "Get Certified 🎓" },
      ],
    ],
  },
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

  if (!mounted) return <div className="w-9 h-9 shrink-0" />;

  return (
    <button onClick={toggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-line bg-surface text-ink-muted hover:border-quantum hover:text-quantum transition-colors">
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function DropdownMenu({ columns }: { columns: DropdownItem[][] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-surface border border-line rounded-2xl shadow-xl p-4 min-w-[220px]"
      style={{ width: columns.length > 1 ? 440 : 220 }}>
      <div className={`grid gap-4 ${columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {columns.map((col, ci) => (
          <div key={ci} className="space-y-0.5">
            {col.map((item) => (
              <Link key={item.href} href={item.href}
                className="flex flex-col px-3 py-2 rounded-lg hover:bg-quantum-50 transition-colors group">
                <span className="text-sm font-medium text-ink group-hover:text-quantum transition-colors">
                  {item.label}
                </span>
                {item.desc && (
                  <span className="text-xs text-ink-soft">{item.desc}</span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function NavItemWithDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.dropdown) {
    return (
      <Link href={item.href}
        className="hover:text-quantum transition-colors whitespace-nowrap shrink-0">
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 hover:text-quantum transition-colors whitespace-nowrap"
      >
        {item.label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div onMouseLeave={() => setOpen(false)}>
          <DropdownMenu columns={item.dropdown} />
        </div>
      )}
    </div>
  );
}

function RandomArticleButton({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const goRandom = () => {
    const pool = buildRandomPool();
    router.push(pool[Math.floor(Math.random() * pool.length)]);
  };

  if (compact) {
    return (
      <button onClick={goRandom} aria-label="Random article"
        className="sm:hidden w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-line bg-surface text-ink-muted hover:border-quantum hover:text-quantum transition-colors">
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
    <button onClick={goRandom}
      className="hidden sm:inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors shrink-0">
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

        {/* Desktop nav with dropdowns */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-muted overflow-x-auto scrollbar-none">
          {nav.map((item) => (
            <NavItemWithDropdown key={item.href} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <RandomArticleButton />
          <RandomArticleButton compact />
          <DarkModeToggle />
          <Link href="/search"
            className="hidden sm:inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors shrink-0">
            Search |ψ⟩
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-line">
        <nav className="max-w-content mx-auto px-6 py-2.5 flex items-center gap-5 text-sm font-medium text-ink-muted overflow-x-auto scrollbar-none">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}
              className="hover:text-quantum transition-colors whitespace-nowrap shrink-0">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
