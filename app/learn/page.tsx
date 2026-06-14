import Link from "next/link";
import { learningLevels } from "@/lib/content/learning";

export const metadata = {
  title: "Quantum Learning Center | QuantumAtlas",
  description: "Learn quantum computing from the basics to advanced algorithms and hardware.",
};

export default function LearnIndexPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Beginner → Advanced
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Learning Center
      </h1>
      <p className="text-ink-muted max-w-2xl mb-12">
        A structured path through quantum computing — from your first qubit
        to advanced algorithms and hardware. Each level builds on the last.
      </p>

      <div className="space-y-10">
        {learningLevels.map((level) => (
          <div key={level.level}>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-sm text-quantum">Level {level.level}</span>
              <h2 className="font-serif text-2xl font-semibold text-ink">{level.title}</h2>
            </div>
            <p className="text-ink-muted mb-5">{level.description}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {level.articles.map((article) =>
                article.available ? (
                  <Link
                    key={article.slug}
                    href={`/learn/${article.slug}`}
                    className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
                  >
                    <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{article.summary}</p>
                  </Link>
                ) : (
                  <div
                    key={article.slug}
                    className="block rounded-xl border border-dashed border-line bg-paper p-5 opacity-60"
                  >
                    <h3 className="font-serif text-lg font-semibold text-ink mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed mb-2">
                      {article.summary}
                    </p>
                    <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                      Coming soon
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
