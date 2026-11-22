import Link from "next/link";
import { calculators, calculatorCategoryLabels, type CalculatorCategory } from "@/lib/content/calculators";

export const metadata = {
  title: "Quantum Computing Calculators: Free Interactive Tools | QuantumAtlas",
  description:
    "In-depth interactive calculators for quantum computing: Bell tests, Grover search, error correction overhead, noise budgets, RSA resource estimates, post-quantum migration, and more, each with formulas, worked examples, and references.",
};

const levelStyle: Record<string, string> = {
  Beginner: "border-emerald-500/40 text-emerald-600 dark:text-emerald-300",
  Intermediate: "border-amber-500/40 text-amber-600 dark:text-amber-300",
  Advanced: "border-rose-500/40 text-rose-600 dark:text-rose-300",
};

export default function CalculatorsIndexPage() {
  const categories = Array.from(new Set(calculators.map((c) => c.category))) as CalculatorCategory[];
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Interactive · {calculators.length} Calculators
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing Calculators
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-4">
        Move a slider and watch the physics respond. Each calculator uses a published model, shows its formulas, walks
        through worked examples, explains how to read the result, states its limits, and lists the references it comes
        from.
      </p>
      <p className="text-sm text-ink-muted max-w-2xl mb-12">
        Looking for the original quick tools, such as the qubit-to-states converter and the encryption time estimator?{" "}
        <Link href="/tools" className="text-quantum hover:underline">
          They are still on the Tools page.
        </Link>
      </p>

      {categories.map((c) => (
        <section key={c} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-5">{calculatorCategoryLabels[c]}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {calculators
              .filter((x) => x.category === c)
              .map((x) => (
                <Link
                  key={x.slug}
                  href={`/calculators/${x.slug}`}
                  className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum transition-colors"
                >
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">{x.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{x.tagline}</p>
                  <span className={`px-2 py-0.5 rounded-full border font-mono uppercase tracking-wide text-[10px] ${levelStyle[x.level]}`}>
                    {x.level}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
