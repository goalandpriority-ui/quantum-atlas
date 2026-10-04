import Link from "next/link";
import { Industry, industries } from "@/lib/content/industries";
import { algorithms } from "@/lib/content/algorithms";
import { processors } from "@/lib/content/hardware";
import { companies } from "@/lib/content/companies";
import { researchPapers } from "@/lib/content/research";

const maturityLabels: Record<string, string> = {
  exploratory: "Exploratory",
  "early-pilots": "Early Pilots",
  "active-deployment": "Active Deployment",
};

export default function IndustryPage({ industry }: { industry: Industry }) {
  const relAlgos = (industry.relatedAlgorithms ?? [])
    .map((s) => algorithms.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const relHardware = (industry.relatedHardware ?? [])
    .map((s) => processors.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relCompanies = (industry.relatedCompanies ?? [])
    .map((s) => companies.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const relIndustries = (industry.relatedIndustries ?? [])
    .map((s) => industries.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const relResearch = (industry.relatedResearch ?? [])
    .map((s) => researchPapers.find((r) => r.slug === s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const algoName = (slug: string) => algorithms.find((a) => a.slug === slug)?.name ?? slug;

  const faqJsonLd =
    industry.faq && industry.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: industry.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\\u003c")
      : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · {maturityLabels[industry.maturity]}
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4 max-w-3xl">
        {industry.name}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">{industry.summary}</p>

      {industry.atAGlance && industry.atAGlance.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-12">
          {industry.atAGlance.map((g) => (
            <div key={g.label} className="rounded-xl border border-line bg-surface p-4">
              <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">{g.label}</p>
              <p className="text-sm text-ink font-medium leading-snug">{g.value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="prose-quantum max-w-2xl">
        {industry.overview && industry.overview.length > 0 && (
          <>
            <h2>Overview</h2>
            {industry.overview.map((p, i) => (
              <p key={`ov-${i}`}>{p}</p>
            ))}
          </>
        )}

        {industry.whyQuantum && industry.whyQuantum.length > 0 && (
          <>
            <h2>Why this industry is a candidate for quantum computing</h2>
            {industry.whyQuantum.map((p, i) => (
              <p key={`wq-${i}`}>{p}</p>
            ))}
          </>
        )}

        {industry.keyNumbers && industry.keyNumbers.length > 0 && (
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
                {industry.keyNumbers.map((k) => (
                  <tr key={k.label}>
                    <td>{k.label}</td>
                    <td>{k.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {industry.useCases && industry.useCases.length > 0 && (
          <>
            <h2>Where quantum computing could help</h2>
            {industry.useCases.map((u) => (
              <div key={u.title}>
                <h3>{u.title}</h3>
                <p>
                  <strong>The problem:</strong> {u.problem}
                </p>
                <p>
                  <strong>The quantum approach:</strong> {u.approach}
                </p>
                <p>
                  <strong>Where things stand:</strong> {u.reality}
                </p>
                {u.algorithms && u.algorithms.length > 0 && (
                  <p>
                    <strong>Related algorithms:</strong>{" "}
                    {u.algorithms.map((s, i) => (
                      <span key={s}>
                        {i > 0 ? ", " : ""}
                        <Link href={`/algorithms/${s}`} className="text-quantum hover:underline">
                          {algoName(s)}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </>
        )}

        {industry.whoIsWorking && industry.whoIsWorking.length > 0 && (
          <>
            <h2>Who is working on it</h2>
            <ul>
              {industry.whoIsWorking.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </>
        )}

        {industry.timeline && industry.timeline.length > 0 && (
          <>
            <h2>Realistic timeline</h2>
            <table>
              <thead>
                <tr>
                  <th>Horizon</th>
                  <th>What to expect</th>
                </tr>
              </thead>
              <tbody>
                {industry.timeline.map((t) => (
                  <tr key={t.horizon}>
                    <td>{t.horizon}</td>
                    <td>{t.outlook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {industry.deepDive && industry.deepDive.length > 0 && (
          <>
            <h2>How to judge quantum claims in this sector</h2>
            {industry.deepDive.map((p, i) => (
              <p key={`dd-${i}`}>{p}</p>
            ))}
          </>
        )}

        {industry.obstacles && industry.obstacles.length > 0 && (
          <>
            <h2>What stands in the way</h2>
            <ul>
              {industry.obstacles.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </>
        )}

        {industry.gettingStarted && industry.gettingStarted.length > 0 && (
          <>
            <h2>What organizations in this sector should do now</h2>
            <ul>
              {industry.gettingStarted.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </>
        )}

        {industry.mythsVsReality && industry.mythsVsReality.length > 0 && (
          <>
            <h2>Myths versus reality</h2>
            <ul>
              {industry.mythsVsReality.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </>
        )}

        {industry.bottomLine && industry.bottomLine.length > 0 && (
          <>
            <h2>The bottom line</h2>
            {industry.bottomLine.map((p, i) => (
              <p key={`bl-${i}`}>{p}</p>
            ))}
          </>
        )}

        {industry.faq && industry.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            {industry.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </>
        )}

        {(relAlgos.length > 0 ||
          relHardware.length > 0 ||
          relCompanies.length > 0 ||
          relResearch.length > 0 ||
          relIndustries.length > 0) && (
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
              {relHardware.map((p) => (
                <li key={p.slug}>
                  Hardware:{" "}
                  <Link href={`/hardware/${p.slug}`} className="text-quantum hover:underline">
                    {p.name}
                  </Link>
                </li>
              ))}
              {relCompanies.map((c) => (
                <li key={c.slug}>
                  Company:{" "}
                  <Link href={`/companies/${c.slug}`} className="text-quantum hover:underline">
                    {c.name}
                  </Link>
                </li>
              ))}
              {relResearch.map((r) => (
                <li key={r.slug}>
                  Research:{" "}
                  <Link href={`/research/${r.slug}`} className="text-quantum hover:underline">
                    {r.title}
                  </Link>
                </li>
              ))}
              {relIndustries.map((i) => (
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
          This page is written for educational purposes and summarizes public announcements, published
          research, and published resource estimates{industry.lastUpdated ? ` (last reviewed ${industry.lastUpdated})` : ""}.
          Vendor and customer claims have not all been independently verified, timelines are estimates, and
          nothing here is investment or business advice.
        </blockquote>

        <p>
          <Link href="/industries" className="text-quantum hover:underline">
            ← Back to all industries
          </Link>
        </p>
      </div>

      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      ) : null}
    </article>
  );
}
