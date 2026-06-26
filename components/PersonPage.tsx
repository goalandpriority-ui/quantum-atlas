import Link from "next/link";
import { Person } from "@/lib/content/people";

export default function PersonPage({ person }: { person: Person }) {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Quantum Pioneers
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-2">
        {person.name}
      </h1>
      <p className="font-mono text-sm text-ink-muted mb-6">
        {person.born}{person.died ? ` – ${person.died}` : ""} · {person.nationality} · {person.field}
      </p>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        {person.shortBio}
      </p>

      {person.famousQuote && (
        <blockquote className="border-l-4 border-quantum bg-quantum-50 rounded-r-xl px-6 py-4 max-w-2xl mb-10 italic text-ink">
          "{person.famousQuote}"
          <footer className="mt-2 text-sm not-italic font-semibold text-quantum">— {person.name}</footer>
        </blockquote>
      )}

      <div className="prose-quantum max-w-2xl">
        <h2>Why they matter</h2>
        <p>{person.whyTheyMatter}</p>

        <h2>Key contributions</h2>
      </div>

      <div className="space-y-4 max-w-2xl my-6">
        {person.keyContributions.map((c) => (
          <div key={c.title} className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-serif text-base font-semibold text-ink leading-snug">{c.title}</h3>
              <span className="font-mono text-xs text-quantum shrink-0">{c.year}</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>

      {(person.relatedAlgorithmSlugs || person.relatedDictionarySlugs) && (
        <div className="max-w-2xl mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-3">Related on QuantumAtlas</p>
          <div className="flex flex-col gap-2 text-sm">
            {person.relatedAlgorithmSlugs?.map((s) => (
              <Link key={s} href={`/algorithms/${s}`} className="text-quantum hover:underline">→ Algorithm: {s.replace(/-/g, " ")}</Link>
            ))}
            {person.relatedDictionarySlugs?.map((s) => (
              <Link key={s} href={`/dictionary/${s}`} className="text-quantum hover:underline">→ Dictionary: {s.replace(/-/g, " ")}</Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 max-w-2xl">
        <Link href="/people" className="text-quantum hover:underline text-sm">← Back to Quantum Pioneers</Link>
      </div>
    </article>
  );
}
