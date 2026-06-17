import Link from "next/link";
import BlochMark from "@/components/BlochMark";
import { SectionHeader, Card } from "@/components/Section";
import { companies } from "@/lib/content/companies";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { learningLevels } from "@/lib/content/learning";
import { algorithms } from "@/lib/content/algorithms";
import { industries } from "@/lib/content/industries";
import { newsItems } from "@/lib/content/news";

export default function HomePage() {
  const previewTerms = dictionaryTerms.slice(0, 6);
  const previewAlgorithms = algorithms.slice(0, 4);
  const previewNews = newsItems.slice(0, 3);

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
              QuantumAtlas brings together news, research, a growing dictionary,
              company and hardware databases, 20 quantum algorithms, and an
              interactive learning path — from your first qubit to advanced
              algorithms.
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

      {/* Quick nav strip - the "what's here" overview */}
      <section className="max-w-content mx-auto px-6 py-10 border-b border-line">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { href: "/algorithms", label: "Algorithms", count: "20" },
            { href: "/hardware", label: "Hardware", count: "5" },
            { href: "/companies", label: "Companies", count: "5" },
            { href: "/industries", label: "Industries", count: "4" },
            { href: "/research", label: "Research", count: "6" },
            { href: "/myths", label: "Myths", count: "12" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-line bg-surface p-4 text-center hover:border-quantum transition-colors"
            >
              <p className="font-mono text-xl font-bold text-quantum mb-0.5">{item.count}</p>
              <p className="text-xs text-ink-muted font-medium">{item.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Live News */}
      <section className="max-w-content mx-auto px-6 py-16">
        <SectionHeader eyebrow="Updated Regularly" title="Quantum News" href="/news" />
        <div className="grid md:grid-cols-3 gap-5">
          {previewNews.map((item) => (
            <Card key={item.slug}>
              <span className="inline-block font-mono text-[11px] uppercase tracking-wide text-quantum bg-quantum-50 rounded-full px-2.5 py-1 mb-3">
                {item.category}
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

      {/* Algorithms Database */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader
          eyebrow="20 Algorithms"
          title="Quantum Algorithms Database"
          href="/algorithms"
          hrefLabel="Browse all algorithms →"
        />
        <div className="grid md:grid-cols-4 gap-5">
          {previewAlgorithms.map((algo) => (
            <Card key={algo.slug} href={`/algorithms/${algo.slug}`}>
              <p className="font-mono text-xs text-quantum mb-2">{algo.year}</p>
              <h3 className="font-serif text-base font-semibold text-ink mb-2 leading-snug">{algo.name}</h3>
              <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">{algo.summary}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Dictionary preview */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader
          eyebrow="Growing Glossary"
          title="Quantum Dictionary"
          href="/dictionary"
          hrefLabel="Browse the dictionary →"
        />
        <div className="grid md:grid-cols-3 gap-5">
          {previewTerms.map((t) => (
            <Card key={t.slug} href={`/dictionary/${t.slug}`}>
              <h3 className="font-serif text-xl font-semibold text-ink mb-2">{t.term}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{t.shortDefinition}</p>
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

      {/* Industries */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader
          eyebrow="Real-World Applications"
          title="Quantum by Industry"
          href="/industries"
          hrefLabel="Explore all industries →"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((industry) => (
            <Card key={industry.slug} href={`/industries/${industry.slug}`}>
              <h3 className="font-serif text-base font-semibold text-ink mb-2">{industry.name}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{industry.tagline}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Insights strip - comparisons, myths, future */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader eyebrow="Go Deeper" title="Insights & Perspectives" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <Card href="/quantum-vs-classical">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Quantum vs Classical</h3>
            <p className="text-sm text-ink-muted leading-relaxed">How they really compare — and why one won't replace the other.</p>
          </Card>
          <Card href="/quantum-vs-ai">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Quantum vs AI</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Two different technologies, honestly compared — no fake numbers.</p>
          </Card>
          <Card href="/myths">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">12 Myths, Debunked</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Common misconceptions, separated from reality.</p>
          </Card>
          <Card href="/future">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Future Predictions</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Quantum internet, AI, medicine, and cybersecurity — realistically assessed.</p>
          </Card>
        </div>
      </section>

      {/* Tools strip */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <SectionHeader eyebrow="Interactive" title="Explore Hands-On" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <Card href="/compare">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Compare Processors</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Side-by-side hardware specs, your way.</p>
          </Card>
          <Card href="/tools">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Quantum Calculators</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Qubit states, probability amplitudes, Bell states.</p>
          </Card>
          <Card href="/timeline">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Timeline</h3>
            <p className="text-sm text-ink-muted leading-relaxed">1900 to today — every major milestone.</p>
          </Card>
          <Card href="/research">
            <h3 className="font-serif text-base font-semibold text-ink mb-2">Research Papers</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Real research, explained in plain language.</p>
          </Card>
        </div>
      </section>

      {/* Courses & Jobs strip */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-line">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/courses"
            className="rounded-2xl border border-line bg-surface p-8 hover:border-quantum transition-colors"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Learn More</p>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Quantum Courses</h3>
            <p className="text-sm text-ink-muted leading-relaxed">University courses, vendor tutorials, and platform specializations — free and paid.</p>
          </Link>
          <Link
            href="/jobs"
            className="rounded-2xl border border-line bg-surface p-8 hover:border-quantum transition-colors"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Build a Career</p>
            <h3 className="font-serif text-xl font-semibold text-ink mb-2">Quantum Jobs</h3>
            <p className="text-sm text-ink-muted leading-relaxed">Research, software, hardware, and internship roles — what they involve and how to get there.</p>
          </Link>
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
