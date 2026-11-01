import Link from "next/link";
import QuantumNetworkDiagram from "@/components/diagrams/QuantumNetworkDiagram";
import { FutureTopic, futureCategoryLabels, futureTopics } from "@/lib/content/future";

function Reference({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/\S+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-quantum hover:underline break-all">
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const confidenceStyle: Record<FutureTopic["confidence"], string> = {
  High: "border-emerald-500/40 text-emerald-600 dark:text-emerald-300",
  Medium: "border-amber-500/40 text-amber-600 dark:text-amber-300",
  Low: "border-rose-500/40 text-rose-600 dark:text-rose-300",
};

export default function FutureTopicPage({ topic }: { topic: FutureTopic }) {
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }).replace(/</g, "\\u003c");

  const index = futureTopics.findIndex((t) => t.slug === topic.slug);
  const prev = index > 0 ? futureTopics[index - 1] : null;
  const next = index < futureTopics.length - 1 ? futureTopics[index + 1] : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Future Predictions · {futureCategoryLabels[topic.category]}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4 max-w-3xl">{topic.title}</h1>
      <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-ink-muted">
        <span className="font-mono">Horizon: {topic.horizon}</span>
        <span className={`px-2 py-0.5 rounded-full border text-[11px] font-mono uppercase tracking-wide ${confidenceStyle[topic.confidence]}`}>
          Forecast confidence: {topic.confidence}
        </span>
      </div>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">{topic.summary}</p>

      <div className="prose-quantum max-w-2xl">
        {topic.slug === "quantum-internet-future" && (
          <div className="rounded-xl border border-line bg-surface p-6 mb-8 not-prose">
            <QuantumNetworkDiagram />
          </div>
        )}
        {topic.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

        <h2>Our forecast, step by step</h2>
        <table>
          <thead>
            <tr>
              <th>When</th>
              <th>What we expect</th>
            </tr>
          </thead>
          <tbody>
            {topic.forecast.map((f) => (
              <tr key={f.label}>
                <td>{f.label}</td>
                <td>{f.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Signals to watch</h2>
        <ul>
          {topic.signals.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2>Why this forecast could be wrong</h2>
        <ul>
          {topic.risks.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2>Frequently asked questions</h2>
        {topic.faq.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>References</h2>
        <ol className="text-sm">
          {topic.references.map((r, i) => (
            <li key={i}>
              <Reference text={r} />
            </li>
          ))}
        </ol>

        {topic.links.length > 0 && (
          <>
            <h2>Keep exploring</h2>
            <ul>
              {topic.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-quantum hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <blockquote>
          This page is a forecast, not a fact. It reflects our reading of public roadmaps, papers, and expert surveys as
          of {"2026"}, and it will be wrong in places. It is not investment, legal, or security advice.
        </blockquote>

        <nav className="flex flex-wrap justify-between gap-4 not-prose mt-10 text-sm">
          {prev ? (
            <Link href={`/future/${prev.slug}`} className="text-quantum hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          <Link href="/future" className="text-ink-muted hover:text-quantum">
            All predictions
          </Link>
          {next ? (
            <Link href={`/future/${next.slug}`} className="text-quantum hover:underline">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
    </article>
  );
}
