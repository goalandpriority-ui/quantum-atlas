import Link from "next/link";
import { QuantumProcessor, processors } from "@/lib/content/hardware";
import { companies } from "@/lib/content/companies";

export default function HardwarePage({ processor }: { processor: QuantumProcessor }) {
  const companyPage = companies.find((c) => c.slug === processor.companySlug);
  const related = (processor.related ?? [])
    .map((slug) => processors.find((p) => p.slug === slug))
    .filter((p): p is QuantumProcessor => Boolean(p));

  const faqJsonLd =
    processor.faq && processor.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: processor.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }).replace(/</g, "\\u003c")
      : null;

  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Quantum Hardware Database
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        {processor.name}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        {processor.summary}
      </p>

      {/* Spec grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-12">
        {[
          { label: "Qubit Count", value: processor.qubitCount.toLocaleString() },
          { label: "Qubit Type", value: processor.qubitType },
          { label: "Architecture", value: processor.architecture },
          { label: "Released", value: processor.releaseYear },
          { label: "Gate Error (2Q)", value: processor.gateError },
          { label: "Coherence Time", value: processor.coherenceTime },
          { label: "Operating Temp", value: processor.operatingTemp },
          {
            label: "Cloud Access",
            value: processor.cloudAccess
              ? `Yes — ${processor.cloudPlatform ?? "see provider"}`
              : "Not publicly available",
          },
          { label: "Company", value: processor.company },
        ].map((spec) => (
          <div key={spec.label} className="rounded-xl border border-line bg-surface p-4">
            <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">
              {spec.label}
            </p>
            <p className="text-sm text-ink font-medium leading-snug">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="prose-quantum max-w-2xl">
        {processor.overview && processor.overview.length > 0 && (
          <>
            <h2>Overview</h2>
            {processor.overview.map((para, i) => (
              <p key={`overview-${i}`}>{para}</p>
            ))}
          </>
        )}

        {processor.history && processor.history.length > 0 && (
          <>
            <h2>History and background</h2>
            {processor.history.map((para, i) => (
              <p key={`history-${i}`}>{para}</p>
            ))}
          </>
        )}

        {processor.howItWorks && processor.howItWorks.length > 0 && (
          <>
            <h2>How it works</h2>
            {processor.howItWorks.map((para, i) => (
              <p key={`how-${i}`}>{para}</p>
            ))}
          </>
        )}

        <h2>Connectivity</h2>
        <p>{processor.connectivity}</p>

        {processor.extraSpecs && processor.extraSpecs.length > 0 && (
          <>
            <h2>Specifications in detail</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {processor.extraSpecs.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <h2>Key features</h2>
        <ul>
          {processor.keyFeatures.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2>Limitations</h2>
        <ul>
          {processor.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        {processor.milestones && processor.milestones.length > 0 && (
          <>
            <h2>Timeline</h2>
            <table>
              <thead>
                <tr>
                  <th>When</th>
                  <th>What happened</th>
                </tr>
              </thead>
              <tbody>
                {processor.milestones.map((m) => (
                  <tr key={`${m.year}-${m.event}`}>
                    <td>{m.year}</td>
                    <td>{m.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {processor.applications && processor.applications.length > 0 && (
          <>
            <h2>What it is used for</h2>
            <ul>
              {processor.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </>
        )}

        {processor.howItCompares && processor.howItCompares.length > 0 && (
          <>
            <h2>How it compares</h2>
            <ul>
              {processor.howItCompares.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        )}

        <h2>Technical notes</h2>
        <p>{processor.technicalNotes}</p>

        {processor.whyItMatters && processor.whyItMatters.length > 0 && (
          <>
            <h2>Why it matters</h2>
            {processor.whyItMatters.map((para, i) => (
              <p key={`why-${i}`}>{para}</p>
            ))}
          </>
        )}

        {processor.faq && processor.faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            {processor.faq.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </>
        )}

        {(companyPage || related.length > 0) && (
          <>
            <h2>Keep exploring</h2>
            <ul>
              {companyPage && (
                <li>
                  Company profile:{" "}
                  <Link href={`/companies/${companyPage.slug}`} className="text-quantum hover:underline">
                    {companyPage.name}
                  </Link>
                </li>
              )}
              {related.map((r) => (
                <li key={r.slug}>
                  Related processor:{" "}
                  <Link href={`/hardware/${r.slug}`} className="text-quantum hover:underline">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <blockquote>
          This profile is written for educational purposes and summarizes company announcements, published
          papers, and vendor specification sheets.
          {processor.lastUpdated ? ` Last reviewed: ${processor.lastUpdated}.` : ""} Figures marked as
          company-reported have not all been independently verified, and benchmarks differ between vendors,
          so compare them with care.
        </blockquote>

        <p>
          <Link href="/hardware" className="text-quantum hover:underline">
            ← Back to Hardware Database
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
