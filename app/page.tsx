import Link from "next/link";
import BlochMark from "@/components/BlochMark";
import { SectionHeader, Card } from "@/components/Section";
import { companies } from "@/lib/content/companies";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { learningLevels } from "@/lib/content/learning";

const news = [
  {
    title: "IBM outlines next milestones on path to fault-tolerant quantum computing",
    source: "IBM Research",
    date: "2026",
    tag: "Hardware",
  },
  {
    title: "Google Quantum AI publishes new error-correction results",
    source: "Google Quantum AI",
    date: "2026",
    tag: "Research",
  },
  {
    title: "IonQ announces new partnership for enterprise quantum applications",
    source: "IonQ",
    date: "2026",
    tag: "Industry",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-4">
              The Open Encyclopedia of Quantum Computing
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-ink mb-6">
              Every qubit, every company,
              <br />
              every breakthrough —
              <br />
              in one place.
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-xl mb-8">
              QuantumAtlas brings together news, research, a 1000+ term dictionary,
              company and hardware databases, and an interactive learning path —
              from your first qubit to advanced algorithms.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/learn"
                className="inline-flex items-center rounded-full bg-quantum text-white px-6 py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors"
              >
                Start Learning
              </Link>
              <Link
                href="/dictionary"
                className="inline-flex items-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink hover:border-quantum hover:text-quantum transition-colors"
              >
                Browse Dictionary
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <BlochMark size={288} className="w-full h-full" />
              <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs text-ink-soft whitespace-nowrap">
                |ψ⟩ = α|0⟩ + β|1⟩
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live News */}
      <section className="max-w-content mx-auto px-6 py-16">
        <SectionHeader eyebrow="Updated Daily" title="Live Quantum News" href="/news" />
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((item) => (
            <Card key={item.title}>
              <span className="inline-block font-mono text-[11px] uppercase tracking-wide text-quantum bg-quantum-50 rounded-full px-2.5 py-1 mb-3">
                {item.tag}
              </span>
              <h3 className="font-serif text-lg font-semibold text-ink leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink-soft">
                {item.source} · {item.date}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Companies */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader
          eyebrow="Database"
          title="Quantum Companies"
          href="/companies"
          hrefLabel="View all companies →"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {companies.map((company) => (
            <Card key={company.slug} href={`/companies/${company.slug}`} className="text-center">
              <p className="font-serif text-base font-semibold text-ink mb-1">{company.name}</p>
              <p className="text-xs text-ink-soft">{company.technology}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Center */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader
          eyebrow="Beginner → Advanced"
          title="Quantum Learning Center"
          href="/learn"
          hrefLabel="Explore all levels →"
        />
        <div className="grid md:grid-cols-4 gap-5">
          {learningLevels.map((level) => (
            <Card key={level.level} href="/learn">
              <p className="font-mono text-xs text-quantum mb-2">Level {level.level}</p>
              <h3 className="font-serif text-lg font-semibold text-ink mb-2">{level.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{level.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Dictionary preview */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader
          eyebrow="1000+ Terms"
          title="Quantum Dictionary"
          href="/dictionary"
          hrefLabel="Browse the dictionary →"
        />
        <div className="grid md:grid-cols-2 gap-5">
          {dictionaryTerms.map((t) => (
            <Card key={t.slug} href={`/dictionary/${t.slug}`}>
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">{t.term}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{t.shortDefinition}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Complete Guide CTA */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
              Pillar Guide
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-2">
              New here? Read the Complete Guide.
            </h2>
            <p className="text-ink-muted max-w-xl">
              History, qubits, algorithms, hardware, and the future of quantum
              computing — one comprehensive guide covering everything on this site.
            </p>
          </div>
          <Link
            href="/guide/quantum-computing-complete-guide"
            className="inline-flex items-center rounded-full bg-quantum text-white px-6 py-3 text-sm font-semibold hover:bg-quantum-700 transition-colors whitespace-nowrap"
          >
            Read the Guide →
          </Link>
        </div>
      </section>
    </div>
  );
                }
