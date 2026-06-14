import { Company } from "@/lib/content/companies";

export default function CompanyPage({ company }: { company: Company }) {
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
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">Founded</p>
          <p className="text-ink">{company.founded}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">CEO</p>
          <p className="text-ink">{company.ceo}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">Headquarters</p>
          <p className="text-ink">{company.headquarters}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">Technology</p>
          <p className="text-ink">{company.technology}</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-1">Funding</p>
          <p className="text-ink">{company.funding}</p>
        </div>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>Products</h2>
        <ul>
          {company.products.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2>Latest News</h2>
        <ul>
          {company.latestNews.map((n) => (
            <li key={n.title}>
              {n.title} <span className="text-ink-soft">— {n.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
