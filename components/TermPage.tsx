import Link from "next/link";
import { ReactNode } from "react";
import { DictionaryTerm } from "@/lib/content/dictionary";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { industries } from "@/lib/content/industries";

export default function TermPage({
  term,
  diagram,
}: {
  term: DictionaryTerm;
  diagram?: ReactNode;
}) {
  const relAlgos = (term.relatedAlgorithms ?? [])
    .map((x) => algorithms.find((a) => a.slug === x))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const relHw = (term.relatedHardware ?? [])
    .map((x) => processors.find((p) => p.slug === x))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relInd = (term.relatedIndustries ?? [])
    .map((x) => industries.find((i) => i.slug === x))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const faqJsonLd =
    term.faq && term.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: term.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\\u003c")
      : null;

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

        {term.inDepth && term.inDepth.length > 0 && (
          <>
            <h2>In depth</h2>
            {term.inDepth.map((p, i) => (
              <p key={`depth-${i}`}>{p}</p>
            ))}
          </>
        )}

        <h2>Technical Definition</h2>
        <p className="font-mono text-sm bg-surface border border-line rounded-lg p-4">
          {term.technicalDefinition}
        </p>

        {diagram && (
          <div className="rounded-xl border border-line bg-surface p-6 my-8">
            {diagram}
          </div>
        )}

        <h2>Visual Explanation: An Analogy</h2>
        <blockquote>{term.analogy}</blockquote>

        {term.keyFacts && term.keyFacts.length > 0 && (
          <>
            <h2>Key facts</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {term.keyFacts.map((k) => (
                  <tr key={k.label}>
                    <td>{k.label}</td>
                    <td>{k.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {term.history && (
          <>
            <h2>Where the idea comes from</h2>
            <p>{term.history}</p>
          </>
        )}

        <h2>Real-World Use Cases</h2>
        <ul>
          {term.useCases.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>

        {term.comparison && term.comparison.length > 0 && (
          <>
            <h2>How it differs from related ideas</h2>
            <ul>
              {term.comparison.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        )}

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

        {term.faq && term.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            {term.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
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

        {(relAlgos.length > 0 || relHw.length > 0 || relInd.length > 0) && (
          <>
            <h2>Keep exploring</h2>
            <ul>
              {relAlgos.map((a) => (
                <li key={a.slug}>
                  Algorithm:{" "}
                  <Link href={`/algorithms/${a.slug}`} className="text-quantum hover:underline">
                    {a.name}
                  </Link>
                </li>
              ))}
              {relHw.map((p) => (
                <li key={p.slug}>
                  Hardware:{" "}
                  <Link href={`/hardware/${p.slug}`} className="text-quantum hover:underline">
                    {p.name}
                  </Link>
                </li>
              ))}
              {relInd.map((i) => (
                <li key={i.slug}>
                  Industry:{" "}
                  <Link href={`/industries/${i.slug}`} className="text-quantum hover:underline">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p>
          <Link href="/dictionary" className="text-quantum hover:underline">
            ← Back to the dictionary
          </Link>
        </p>
      </div>

      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      ) : null}
    </article>
  );
}
