import Link from "next/link";
import { people } from "@/lib/content/people";

export const metadata = {
  title: "Quantum Computing Pioneers | QuantumAtlas",
  description:
    "The scientists who built quantum computing — biographical profiles of Feynman, Shor, Grover, Bell, Deutsch, Preskill, Bennett, Kitaev, Ekert, and Wootters.",
};

const eras = [
  {
    label: "Founders (1960s–1980s)",
    description:
      "The physicists and mathematicians who asked 'can we compute with quantum mechanics?' — before anyone knew how to build a qubit.",
    slugs: ["john-bell", "richard-feynman", "david-deutsch", "charles-bennett", "william-wootters"],
  },
  {
    label: "Algorithm Builders (1990s)",
    description:
      "The researchers who proved quantum computers would be worth building — by discovering algorithms with provable advantages over anything classical.",
    slugs: ["peter-shor", "lov-grover", "artur-ekert", "alexei-kitaev"],
  },
  {
    label: "Field Shapers (2000s–present)",
    description:
      "The scientists who named the era, built the institutions, and defined how the field talks about itself.",
    slugs: ["john-preskill"],
  },
];

const contributionHighlights = [
  { slug: "richard-feynman", contribution: "Proposed quantum computers should exist", year: "1981" },
  { slug: "david-deutsch", contribution: "Formally defined the quantum computer", year: "1985" },
  { slug: "charles-bennett", contribution: "Co-invented BB84 quantum cryptography", year: "1984" },
  { slug: "william-wootters", contribution: "Proved the no-cloning theorem", year: "1982" },
  { slug: "john-bell", contribution: "Bell's theorem — entanglement is real", year: "1964" },
  { slug: "peter-shor", contribution: "Shor's Algorithm — threatened RSA encryption", year: "1994" },
  { slug: "lov-grover", contribution: "Grover's Algorithm — quantum search", year: "1996" },
  { slug: "artur-ekert", contribution: "E91 entanglement-based QKD", year: "1991" },
  { slug: "alexei-kitaev", contribution: "Surface code + quantum phase estimation", year: "1995–2003" },
  { slug: "john-preskill", contribution: "Named NISQ era, coined 'quantum supremacy'", year: "2012–2018" },
];

export default function PeopleIndexPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        The People Behind the Science
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Pioneers
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Quantum computing wasn't built by one person or one moment — it emerged
        from decades of work across physics, mathematics, and computer science.
        These ten scientists contributed the theorems, algorithms, and frameworks
        that define the field. Click any profile to see their full story and how
        their work connects to the rest of this site.
      </p>

      {/* Quick contribution timeline */}
      <div className="rounded-xl border border-line bg-surface p-6 mb-12 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-4">
          Key Contributions at a Glance
        </p>
        <div className="space-y-2">
          {contributionHighlights.map((item) => {
            const person = people.find((p) => p.slug === item.slug);
            if (!person) return null;
            return (
              <Link
                key={item.slug}
                href={`/people/${item.slug}`}
                className="flex items-center gap-3 py-2 border-b border-line last:border-0 hover:text-quantum transition-colors group"
              >
                <span className="font-mono text-xs text-ink-soft w-16 shrink-0">{item.year}</span>
                <span className="font-semibold text-ink text-sm group-hover:text-quantum transition-colors shrink-0 w-36 hidden sm:block">{person.name}</span>
                <span className="text-sm text-ink-muted">{item.contribution}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Era-grouped profiles */}
      {eras.map((era) => {
        const erapeople = era.slugs.map((slug) => people.find((p) => p.slug === slug)).filter(Boolean) as typeof people;
        return (
          <div key={era.label} className="mb-12">
            <h2 className="font-serif text-xl font-semibold text-ink mb-1">{era.label}</h2>
            <p className="text-sm text-ink-muted mb-5 max-w-2xl">{era.description}</p>
            <div className="grid md:grid-cols-2 gap-5">
              {erapeople.map((person) => (
                <Link
                  key={person.slug}
                  href={`/people/${person.slug}`}
                  className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-ink">{person.name}</h3>
                    <span className="font-mono text-xs text-ink-soft shrink-0">
                      {person.born}{person.died ? `–${person.died}` : "–present"}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-quantum mb-3">
                    {person.nationality} · {person.field}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{person.shortBio}</p>
                  {person.famousQuote && (
                    <p className="text-xs text-ink-soft italic border-l-2 border-quantum pl-3">
                      "{person.famousQuote.slice(0, 100)}…"
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        );
      })}

      <div className="rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related on QuantumAtlas</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/timeline" className="text-quantum hover:underline">→ Full quantum computing timeline</Link>
          <Link href="/algorithms" className="text-quantum hover:underline">→ Algorithms Database — see their work in action</Link>
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center</Link>
        </div>
      </div>
    </div>
  );
              }
