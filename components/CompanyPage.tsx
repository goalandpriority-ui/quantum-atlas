import Link from "next/link";
import { Company } from "@/lib/content/companies";
import { processors } from "@/lib/content/hardware";

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">{label}</p>
      <p className="text-ink">{value}</p>
    </div>
  );
}

export default function CompanyPage({ company }: { company: Company }) {
  const relatedProcessors = processors.filter((p) => p.companySlug === company.slug);

  const faqJsonLd =
    company.faq && company.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: company.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\\u003c")
      : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Quantum Companies Database
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4">
        {company.name}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        {company.summary}
      </p>

      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mb-10">
        <FactCard label="Founded" value={company.founded} />
        <FactCard label="CEO" value={company.ceo} />
        <FactCard label="Headquarters" value={company.headquarters} />
        <FactCard label="Technology" value={company.technology} />
        <FactCard label="Funding / Status" value={company.funding} />
        {company.website ? <FactCard label="Website" value={company.website} /> : null}
      </div>

      <div className="prose-quantum max-w-2xl">
        {company.overview && company.overview.length > 0 && (
          <>
            <h2>Overview</h2>
            {company.overview.map((para, i) => (
              <p key={`overview-${i}`}>{para}</p>
            ))}
          </>
        )}

        {company.history && company.history.length > 0 && (
          <>
            <h2>History and background</h2>
            {company.history.map((para, i) => (
              <p key={`history-${i}`}>{para}</p>
            ))}
          </>
        )}

        {company.technologyDeepDive && company.technologyDeepDive.length > 0 && (
          <>
            <h2>How the technology works</h2>
            {company.technologyDeepDive.map((para, i) => (
              <p key={`tech-${i}`}>{para}</p>
            ))}
          </>
        )}

        <h2>Products and platforms</h2>
        {company.productsDetail && company.productsDetail.length > 0 ? (
          <>
            {company.productsDetail.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </>
        ) : (
          <ul>
            {company.products.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}

        {relatedProcessors.length > 0 && (
          <>
            <h3>Processors in our Hardware Database</h3>
            <ul>
              {relatedProcessors.map((p) => (
                <li key={p.slug}>
                  <Link href={`/hardware/${p.slug}`} className="text-quantum hover:underline">
                    {p.name}
                  </Link>{" "}
                  — {p.qubitCount.toLocaleString()} qubits, released {p.releaseYear}
                </li>
              ))}
            </ul>
          </>
        )}

        {company.milestones && company.milestones.length > 0 && (
          <>
            <h2>Key milestones</h2>
            <table>
              <thead>
                <tr>
                  <th>When</th>
                  <th>What happened</th>
                </tr>
              </thead>
              <tbody>
                {company.milestones.map((m) => (
                  <tr key={`${m.year}-${m.event}`}>
                    <td>{m.year}</td>
                    <td>{m.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {((company.strengths && company.strengths.length > 0) ||
          (company.challenges && company.challenges.length > 0)) && (
          <>
            <h2>Strengths and challenges</h2>
            {company.strengths && company.strengths.length > 0 && (
              <>
                <h3>Strengths</h3>
                <ul>
                  {company.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            )}
            {company.challenges && company.challenges.length > 0 && (
              <>
                <h3>Challenges and open questions</h3>
                <ul>
                  {company.challenges.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}

        {company.whyItMatters && company.whyItMatters.length > 0 && (
          <>
            <h2>Why it matters</h2>
            {company.whyItMatters.map((para, i) => (
              <p key={`why-${i}`}>{para}</p>
            ))}
          </>
        )}

        {company.latestNews.length > 0 && (
          <>
            <h2>Latest news</h2>
            <ul>
              {company.latestNews.map((n) => (
                <li key={n.title}>
                  {n.title} <span className="text-ink-soft">— {n.date}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {company.faq && company.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            {company.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </>
        )}

        <blockquote>
          This profile is written for educational purposes and summarizes public announcements, company
          filings, and published research.
          {company.lastUpdated ? ` Last reviewed: ${company.lastUpdated}.` : ""} It is not investment
          advice. Check the company&apos;s official channels for the latest figures and claims.
        </blockquote>

        <p>
          <Link href="/companies" className="text-quantum hover:underline">
            ← Back to all quantum companies
          </Link>
        </p>
      </div>

      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      ) : null}
    </article>
  );
}
