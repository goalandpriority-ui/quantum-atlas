import Link from "next/link";
import { CalculatorInfo, calculatorCategoryLabels, calculators } from "@/lib/content/calculators";
import { calculatorTools } from "@/components/calculators/registry";

const levelStyle: Record<CalculatorInfo["level"], string> = {
  Beginner: "border-emerald-500/40 text-emerald-600 dark:text-emerald-300",
  Intermediate: "border-amber-500/40 text-amber-600 dark:text-amber-300",
  Advanced: "border-rose-500/40 text-rose-600 dark:text-rose-300",
};

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

export default function CalculatorPage({ calc }: { calc: CalculatorInfo }) {
  const Tool = calculatorTools[calc.slug];
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calc.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }).replace(/</g, "\\u003c");

  const index = calculators.findIndex((c) => c.slug === calc.slug);
  const prev = index > 0 ? calculators[index - 1] : null;
  const next = index < calculators.length - 1 ? calculators[index + 1] : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Interactive Calculator · {calculatorCategoryLabels[calc.category]}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3 max-w-3xl">{calc.title}</h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-4">{calc.tagline}</p>
      <div className="mb-8">
        <span className={`px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wide ${levelStyle[calc.level]}`}>
          {calc.level}
        </span>
      </div>

      <section aria-label="Calculator" className="mb-14">
        {Tool ? <Tool /> : <p className="text-ink-muted">This calculator is not available yet.</p>}
      </section>

      <div className="prose-quantum max-w-2xl">
        <p>{calc.summary}</p>
        {calc.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

        <h2>The formulas behind it</h2>
        <div className="not-prose space-y-3">
          {calc.formulas.map((f) => (
            <div key={f.name} className="rounded-lg border border-line bg-surface p-4">
              <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">{f.name}</p>
              <p className="font-mono text-sm text-ink break-words">{f.expression}</p>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">{f.note}</p>
            </div>
          ))}
        </div>

        <h2>Worked examples</h2>
        <div className="not-prose space-y-4">
          {calc.examples.map((e) => (
            <div key={e.title} className="rounded-lg border border-line bg-surface p-4">
              <p className="font-semibold text-ink mb-2">{e.title}</p>
              <ol className="list-decimal ml-5 text-sm text-ink-muted space-y-1">
                {e.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
              <p className="text-sm text-ink mt-2">
                <span className="font-mono text-[11px] uppercase tracking-wide text-quantum mr-2">Result</span>
                {e.result}
              </p>
            </div>
          ))}
        </div>

        <h2>Frequently asked questions</h2>
        {calc.faq.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}

        <h2>References</h2>
        <ol className="text-sm">
          {calc.references.map((r, i) => (
            <li key={i}>
              <Reference text={r} />
            </li>
          ))}
        </ol>

        {calc.links.length > 0 && (
          <>
            <h2>Keep exploring</h2>
            <ul>
              {calc.links.map((l) => (
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
          These calculators use simplified, published models for education and planning. Real devices and systems differ,
          so treat results as estimates. They are not engineering, investment, legal, or security advice.
        </blockquote>

        <nav className="flex flex-wrap justify-between gap-4 not-prose mt-10 text-sm">
          {prev ? (
            <Link href={`/calculators/${prev.slug}`} className="text-quantum hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          <Link href="/calculators" className="text-ink-muted hover:text-quantum">
            All calculators
          </Link>
          {next ? (
            <Link href={`/calculators/${next.slug}`} className="text-quantum hover:underline">
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
