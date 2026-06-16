import Link from "next/link";
import { Algorithm } from "@/lib/content/algorithms";

const speedupLabels: Record<string, string> = {
  exponential: "Exponential Speedup",
  quadratic: "Quadratic Speedup",
  polynomial: "Polynomial Speedup",
  heuristic: "Heuristic (No Proven Speedup)",
  "none-proven": "No Speedup Claimed",
};

export default function AlgorithmPage({ algorithm }: { algorithm: Algorithm }) {
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
          <p className="text-sm text-ink font-medium">{"★".repeat(algorithm.difficulty)}{"☆".repeat(5 - algorithm.difficulty)}</p>
        </div>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>The Problem</h2>
        <p>{algorithm.problem}</p>

        <h2>How It Works</h2>
        <p>{algorithm.howItWorks}</p>

        <h2>Real-World Impact</h2>
        <p>{algorithm.realWorldImpact}</p>

        {algorithm.relatedLearnSlug && (
          <p>
            <Link href={`/learn/${algorithm.relatedLearnSlug}`} className="text-quantum hover:underline">
              → Read the full deep-dive in our Learning Center
            </Link>
          </p>
        )}

        <p>
          <Link href="/algorithms" className="text-quantum hover:underline">
            ← Back to Algorithms Database
          </Link>
        </p>
      </div>
    </article>
  );
}
