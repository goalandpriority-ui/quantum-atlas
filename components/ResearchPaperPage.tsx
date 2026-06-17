import Link from "next/link";
import { ResearchPaper } from "@/lib/content/research";

export default function ResearchPaperPage({ paper }: { paper: ResearchPaper }) {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Research Papers
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4 max-w-2xl">
        {paper.title}
      </h1>
      <p className="text-sm text-ink-soft mb-1">{paper.authors}</p>
      <p className="text-sm text-ink-soft mb-8">{paper.institution} · {paper.date}</p>

      <div className="flex gap-3 mb-10 flex-wrap">
        <span className="font-mono text-[11px] uppercase tracking-wide text-quantum bg-quantum-50 rounded-full px-3 py-1">
          {paper.category.replace("-", " ")}
        </span>
        <span className="font-mono text-[11px] text-ink-soft px-3 py-1 border border-line rounded-full">
          Difficulty: {"★".repeat(paper.difficulty)}{"☆".repeat(5 - paper.difficulty)}
        </span>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>In Plain Language</h2>
        <p>{paper.plainSummary}</p>

        <h2>Key Findings</h2>
        <ul>
          {paper.keyFindings.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2>Real-World Impact</h2>
        <p>{paper.realWorldImpact}</p>

        <h2>Technical Abstract</h2>
        <p className="font-mono text-sm bg-surface border border-line rounded-lg p-4">
          {paper.technicalAbstract}
        </p>

        <p>
          <Link href="/research" className="text-quantum hover:underline">
            ← Back to Research Papers
          </Link>
        </p>
      </div>
    </article>
  );
}

