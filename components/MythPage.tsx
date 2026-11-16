import Link from "next/link";
import { MythTopic, mythCategoryLabels, mythTopics } from "@/lib/content/myths";

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

export const verdictStyle: Record<MythTopic["verdict"], string> = {
  False: "border-rose-500/50 text-rose-600 dark:text-rose-300",
  "Mostly false": "border-orange-500/50 text-orange-600 dark:text-orange-300",
  Misleading: "border-amber-500/50 text-amber-600 dark:text-amber-300",
  "Partly true": "border-sky-500/50 text-sky-600 dark:text-sky-300",
  Unproven: "border-violet-500/50 text-violet-600 dark:text-violet-300",
};

export default function MythPage({ topic }: { topic: MythTopic }) {
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }).replace(/</g, "\\u003c");

  const index = mythTopics.findIndex((t) => t.slug === topic.slug);
  const prev = index > 0 ? mythTopics[index - 1] : null;
  const next = index < mythTopics.length - 1 ? mythTopics[index + 1] : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Myth {index + 1} of {mythTopics.length} · {mythCategoryLabels[topic.category]}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4 max-w-3xl">
        {"“"}
        {topic.myth}
        {"”"}
      </h1>
      <div className="mb-6">
        <span className={`px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wide ${verdictStyle[topic.verdict]}`}>
          Verdict: {topic.verdict}
        </span>
      </div>

      <div className="rounded-xl border border-line bg-surface p-5 max-w-2xl mb-10">
        <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">The short answer</p>
        <p className="text-ink leading-relaxed">{topic.summary}</p>
      </div>

      <div className="prose-quantum max-w-2xl">
        {topic.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}

        <h2>Quick facts</h2>
        <ul>
          {topic.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2>How to spot and answer this myth</h2>
        <ul>
          {topic.spot.map((f) => (
            <li key={f}>{f}</li>
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
          This page summarizes published research and expert consensus as of 2026 for education. Details change as
          experiments and standards evolve, so check the references before citing. It is not investment, legal, or
          security advice.
        </blockquote>

        <nav className="flex flex-wrap justify-between gap-4 not-prose mt-10 text-sm">
          {prev ? (
            <Link href={`/myths/${prev.slug}`} className="text-quantum hover:underline">
              ← Previous myth
            </Link>
          ) : (
            <span />
          )}
          <Link href="/myths" className="text-ink-muted hover:text-quantum">
            All myths
          </Link>
          {next ? (
            <Link href={`/myths/${next.slug}`} className="text-quantum hover:underline">
              Next myth →
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
