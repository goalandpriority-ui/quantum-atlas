import Link from "next/link";
import { people } from "@/lib/content/people";

export const metadata = {
  title: "Quantum Computing Pioneers | QuantumAtlas",
  description:
    "The scientists who built quantum computing — biographical profiles of Feynman, Shor, Grover, Bell, Deutsch, and more.",
};

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
        The scientists whose ideas, algorithms, and theorems built quantum
        computing — what each contributed, why it mattered, and how their
        work connects to everything else on this site.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {people.map((person) => (
          <Link
            key={person.slug}
            href={`/people/${person.slug}`}
            className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="font-serif text-xl font-semibold text-ink">{person.name}</h2>
              <span className="font-mono text-xs text-ink-soft shrink-0">
                {person.born}{person.died ? `–${person.died}` : ""}
              </span>
            </div>
            <p className="font-mono text-xs text-quantum mb-3">
              {person.nationality} · {person.field}
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">{person.shortBio}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
