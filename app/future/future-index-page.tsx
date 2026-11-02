import Link from "next/link";
import { futureTopics, futureCategoryLabels, type FutureCategory } from "@/lib/content/future";

export const metadata = {
  title: "Quantum Future Predictions: Referenced Forecasts on Where Quantum Technology Is Heading | QuantumAtlas",
  description:
    "Detailed, referenced forecasts on quantum computing, security, networks, industry, and policy, with timelines, confidence levels, signals to watch, and reasons each forecast could be wrong.",
};

const confidenceStyle: Record<string, string> = {
  High: "border-emerald-500/40 text-emerald-600 dark:text-emerald-300",
  Medium: "border-amber-500/40 text-amber-600 dark:text-amber-300",
  Low: "border-rose-500/40 text-rose-600 dark:text-rose-300",
};

export default function FutureIndexPage() {
  const categories = Array.from(new Set(futureTopics.map((t) => t.category))) as FutureCategory[];
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Looking Ahead · {futureTopics.length} Forecasts
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Future Predictions
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-6">
        Each forecast explains where the technology stands today, what published roadmaps promise, what is technically
        hard, and what we expect to happen, with a timeline, a confidence level, signals to watch, and honest reasons
        the forecast might be wrong. Every page lists its references.
      </p>
      <div className="rounded-xl border border-line bg-surface p-5 max-w-2xl mb-12 text-sm text-ink-muted leading-relaxed">
        <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">How to read these forecasts</p>
        <p>
          A forecast is a judgment, not a fact. We rely on company roadmaps, peer-reviewed papers, government
          documents, and expert surveys, and we state our own view separately. Confidence tells you how well the
          evidence supports the forecast: High means multiple independent sources agree, Medium means credible but
          contested, Low means speculative. Roadmaps are marketing as well as engineering, so we discount them.
        </p>
      </div>

      {categories.map((c) => (
        <section key={c} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-5">{futureCategoryLabels[c]}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {futureTopics
              .filter((t) => t.category === c)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/future/${t.slug}`}
                  className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum transition-colors"
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">{t.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{t.summary}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-ink-soft">{t.horizon}</span>
                    <span className={`px-2 py-0.5 rounded-full border font-mono uppercase tracking-wide text-[10px] ${confidenceStyle[t.confidence]}`}>
                      {t.confidence} confidence
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
