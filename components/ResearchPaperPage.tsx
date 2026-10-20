import Link from "next/link";
import { ResearchPaper } from "@/lib/content/research";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { dictionaryTerms } from "@/lib/content/dictionary";
import { industries } from "@/lib/content/industries";

const categoryLabels: Record<string, string> = {
  hardware: "Hardware",
  algorithms: "Algorithms",
  "error-correction": "Error Correction",
  applications: "Applications",
  theory: "Theory",
};

export default function ResearchPaperPage({ paper }: { paper: ResearchPaper }) {
  const relAlgos = (paper.relatedAlgorithms ?? [])
    .map((s) => algorithms.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const relHw = (paper.relatedHardware ?? [])
    .map((s) => processors.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relTerms = (paper.relatedTerms ?? [])
    .map((s) => dictionaryTerms.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const relInd = (paper.relatedIndustries ?? [])
    .map((s) => industries.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const faqJsonLd =
    paper.faq && paper.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: paper.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\\u003c")
      : null;

  const section = (title: string, paras?: string[]) =>
    paras && paras.length > 0 ? (
      <>
        <h2>{title}</h2>
        {paras.map((p, i) => (
          <p key={`${title}-${i}`}>{p}</p>
        ))}
      </>
    ) : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Research Explained · {categoryLabels[paper.category]}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3 max-w-3xl">
        {paper.title}
      </h1>
      <p className="text-ink-muted mb-1">{paper.authors}</p>
      <p className="text-sm text-ink-soft mb-8">
        {paper.institution} · {paper.date} · Difficulty {"★".repeat(paper.difficulty)}
        {"☆".repeat(5 - paper.difficulty)}
      </p>

      <div className="rounded-xl border border-line bg-surface p-5 max-w-2xl mb-10">
        <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">Reference</p>
        <p className="text-sm text-ink leading-relaxed mb-2">{paper.reference}</p>
        {paper.arxiv && (
          <p className="text-sm text-ink-muted">
            Preprint:{" "}
            <a
              href={`https://arxiv.org/abs/${paper.arxiv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum hover:underline"
            >
              arXiv:{paper.arxiv}
            </a>
          </p>
        )}
        <p className="text-xs text-ink-soft mt-2">
          This page is an independent explanation. For exact wording, figures, and data, read the original
          paper.
        </p>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>The short version</h2>
        <p>{paper.plainSummary}</p>

        <h2>Key findings</h2>
        <ul>
          {paper.keyFindings.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        {section("Background: why this paper was written", paper.background)}
        {section("What the researchers did", paper.whatTheyDid)}
        {section("Results", paper.results)}

        {paper.keyNumbers && paper.keyNumbers.length > 0 && (
          <>
            <h2>Key facts and numbers</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {paper.keyNumbers.map((k) => (
                  <tr key={k.label}>
                    <td>{k.label}</td>
                    <td>{k.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {section("Limitations and caveats", paper.limitations)}

        <h2>Why it matters</h2>
        <p>{paper.realWorldImpact}</p>

        {section("What happened next", paper.legacy)}
        {section("How to read the original paper", paper.howToRead)}

        <h2>Original abstract (paraphrased)</h2>
        <p>{paper.technicalAbstract}</p>

        {paper.faq && paper.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            {paper.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </>
        )}

        {(relAlgos.length > 0 || relHw.length > 0 || relTerms.length > 0 || relInd.length > 0) && (
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
              {relTerms.map((t) => (
                <li key={t.slug}>
                  Dictionary:{" "}
                  <Link href={`/dictionary/${t.slug}`} className="text-quantum hover:underline">
                    {t.term}
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

        <blockquote>
          Explanations on this page summarize published work for education{paper.lastUpdated ? ` (last reviewed ${paper.lastUpdated})` : ""}.
          Numbers are taken from the cited paper or from widely reported follow-up work, and later results may
          have updated or challenged them. Check the reference above before citing.
        </blockquote>

        <p>
          <Link href="/research" className="text-quantum hover:underline">
            ← Back to all research papers
          </Link>
        </p>
      </div>

      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      ) : null}
    </article>
  );
}
