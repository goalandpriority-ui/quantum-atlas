import Link from "next/link";
import { mythTopics, mythCategoryLabels, type MythCategory } from "@/lib/content/myths";
import { verdictStyle } from "@/components/MythPage";

export const metadata = {
  title: "Quantum Computing Myths, Debunked | QuantumAtlas",
  description:
    "Detailed, referenced fact-checks of common quantum computing myths: encryption, speed, qubits, entanglement, hype, and more, each with a verdict, evidence, and sources.",
};

export default function MythsIndexPage() {
  const categories = Array.from(new Set(mythTopics.map((t) => t.category))) as MythCategory[];
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Fact-Checks · {mythTopics.length} Myths
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing Myths, Debunked
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-6">
        Quantum computing is surrounded by exaggeration, confusion, and plain wrong claims. Each page below takes one
        common myth, explains where it comes from, shows what the evidence says, acknowledges the grain of truth if
        there is one, and lists the references. Every page ends with a verdict.
      </p>
      <div className="rounded-xl border border-line bg-surface p-5 max-w-2xl mb-12 text-sm text-ink-muted leading-relaxed">
        <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">How we label verdicts</p>
        <p>
          False means the claim contradicts well-established results. Mostly false means it is wrong in its usual form
          but contains a narrow truth. Misleading means the statement can be technically defensible but leads people to
          a wrong conclusion. Partly true means the claim is right in some settings and wrong in others. Unproven means
          the evidence does not yet settle it.
        </p>
      </div>

      {categories.map((c) => (
        <section key={c} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-5">{mythCategoryLabels[c]}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {mythTopics
              .filter((t) => t.category === c)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/myths/${t.slug}`}
                  className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum transition-colors"
                >
                  <p className="font-serif text-lg font-semibold text-ink mb-2">
                    {"“"}
                    {t.myth}
                    {"”"}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{t.summary}</p>
                  <span className={`px-2 py-0.5 rounded-full border font-mono uppercase tracking-wide text-[10px] ${verdictStyle[t.verdict]}`}>
                    {t.verdict}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
