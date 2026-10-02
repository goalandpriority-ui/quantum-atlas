import Link from "next/link";
import { Algorithm, algorithms } from "@/lib/content/algorithms";

const speedupLabels: Record<string, string> = {
  exponential: "Exponential Speedup",
  quadratic: "Quadratic Speedup",
  polynomial: "Polynomial Speedup",
  heuristic: "Heuristic (No Proven Speedup)",
  "none-proven": "No Speedup Claimed",
};

export default function AlgorithmPage({ algorithm }: { algorithm: Algorithm }) {
  const related = (algorithm.related ?? [])
    .map((slug) => algorithms.find((a) => a.slug === slug))
    .filter((a): a is Algorithm => Boolean(a));

  const faqJsonLd =
    algorithm.faq && algorithm.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: algorithm.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\\u003c")
      : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Quantum Algorithms Database
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        {algorithm.name}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        {algorithm.summary}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mb-12">
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">Year</p>
          <p className="text-sm text-ink font-medium">{algorithm.year}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">Inventor(s)</p>
          <p className="text-sm text-ink font-medium">{algorithm.inventor}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">Speedup Type</p>
          <p className="text-sm text-ink font-medium">{speedupLabels[algorithm.speedupType]}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">Difficulty</p>
          <p className="text-sm text-ink font-medium">
            {"★".repeat(algorithm.difficulty)}
            {"☆".repeat(5 - algorithm.difficulty)}
          </p>
        </div>
      </div>

      <div className="prose-quantum max-w-2xl">
        {algorithm.overview && algorithm.overview.length > 0 && (
          <>
            <h2>Overview</h2>
            {algorithm.overview.map((para, i) => (
              <p key={`overview-${i}`}>{para}</p>
            ))}
          </>
        )}

        <h2>The problem it solves</h2>
        <p>{algorithm.problem}</p>

        {algorithm.history && algorithm.history.length > 0 && (
          <>
            <h2>History and background</h2>
            {algorithm.history.map((para, i) => (
              <p key={`history-${i}`}>{para}</p>
            ))}
          </>
        )}

        <h2>How it works</h2>
        <p>{algorithm.howItWorks}</p>
        {algorithm.intuition &&
          algorithm.intuition.map((para, i) => <p key={`intuition-${i}`}>{para}</p>)}

        {algorithm.steps && algorithm.steps.length > 0 && (
          <>
            <h2>Step by step</h2>
            <ol>
              {algorithm.steps.map((s, i) => (
                <li key={`step-${i}`}>{s}</li>
              ))}
            </ol>
          </>
        )}

        {algorithm.workedExample && algorithm.workedExample.length > 0 && (
          <>
            <h2>A worked example</h2>
            {algorithm.workedExample.map((para, i) => (
              <p key={`example-${i}`}>{para}</p>
            ))}
          </>
        )}

        {algorithm.complexity && algorithm.complexity.length > 0 && (
          <>
            <h2>Complexity and resources</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {algorithm.complexity.map((c) => (
                  <tr key={c.label}>
                    <td>{c.label}</td>
                    <td>{c.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {algorithm.hardwareNeeds && algorithm.hardwareNeeds.length > 0 && (
          <>
            <h2>What hardware it needs</h2>
            <ul>
              {algorithm.hardwareNeeds.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        )}

        {algorithm.applications && algorithm.applications.length > 0 && (
          <>
            <h2>Applications</h2>
            <ul>
              {algorithm.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </>
        )}

        {algorithm.limitations && algorithm.limitations.length > 0 && (
          <>
            <h2>Limitations and caveats</h2>
            <ul>
              {algorithm.limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </>
        )}

        {algorithm.misconceptions && algorithm.misconceptions.length > 0 && (
          <>
            <h2>Common misconceptions</h2>
            <ul>
              {algorithm.misconceptions.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        )}

        {algorithm.howItCompares && algorithm.howItCompares.length > 0 && (
          <>
            <h2>How it compares</h2>
            <ul>
              {algorithm.howItCompares.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        )}

        <h2>Real-world impact</h2>
        <p>{algorithm.realWorldImpact}</p>

        {algorithm.whyItMatters && algorithm.whyItMatters.length > 0 && (
          <>
            <h2>Why it matters</h2>
            {algorithm.whyItMatters.map((para, i) => (
              <p key={`why-${i}`}>{para}</p>
            ))}
          </>
        )}

        {algorithm.faq && algorithm.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            {algorithm.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </>
        )}

        {(algorithm.relatedLearnSlug || related.length > 0) && (
          <>
            <h2>Keep learning</h2>
            <ul>
              {algorithm.relatedLearnSlug && (
                <li>
                  <Link
                    href={`/learn/${algorithm.relatedLearnSlug}`}
                    className="text-quantum hover:underline"
                  >
                    Read the full deep-dive in our Learning Center
                  </Link>
                </li>
              )}
              {related.map((r) => (
                <li key={r.slug}>
                  Related algorithm:{" "}
                  <Link href={`/algorithms/${r.slug}`} className="text-quantum hover:underline">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <blockquote>
          This page is written for educational purposes. Complexity statements describe the best known
          results at the time of review{algorithm.lastUpdated ? ` (${algorithm.lastUpdated})` : ""}, and
          research in this area moves quickly, so check recent papers before relying on a specific bound.
        </blockquote>

        <p>
          <Link href="/algorithms" className="text-quantum hover:underline">
            ← Back to Algorithms Database
          </Link>
        </p>
      </div>

      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      ) : null}
    </article>
  );
}
