import Link from "next/link";
import { DictionaryTerm } from "@/lib/content/dictionary";

export default function TermPage({ term }: { term: DictionaryTerm }) {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        {term.category}
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6">
        {term.term}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        {term.shortDefinition}
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Definition</h2>
        <p>{term.definition}</p>

        <h2>Technical Definition</h2>
        <p className="font-mono text-sm bg-surface border border-line rounded-lg p-4">
          {term.technicalDefinition}
        </p>

        <h2>Visual Explanation: An Analogy</h2>
        <blockquote>{term.analogy}</blockquote>

        <h2>Real-World Use Cases</h2>
        <ul>
          {term.useCases.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>

        {term.misconceptions && (
          <>
            <h2>Common Misconceptions</h2>
            <ul>
              {term.misconceptions.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        )}

        <h2>Related Terms</h2>
        <ul>
          {term.relatedTerms.map((rt) => (
            <li key={rt.slug}>
              <Link href={`/dictionary/${rt.slug}`} className="text-quantum hover:underline">
                {rt.term}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
