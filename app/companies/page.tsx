import { companies } from "@/lib/content/companies";
import { Card } from "@/components/Section";

export const metadata = {
  title: "Quantum Computing Companies | QuantumAtlas",
  description:
    "Profiles of leading quantum computing companies — IBM, Google, Microsoft, IonQ, Rigetti, and more.",
};

export default function CompaniesIndexPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Database · 500+ Companies (Goal)
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Companies
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Profiles of the companies building quantum computers — including
        founding history, leadership, funding, technology, products, and the
        latest news for each.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {companies.map((c) => (
          <Card key={c.slug} href={`/companies/${c.slug}`}>
            <h2 className="font-serif text-xl font-semibold text-ink mb-1">{c.name}</h2>
            <p className="font-mono text-xs text-quantum mb-3">{c.technology}</p>
            <p className="text-sm text-ink-muted leading-relaxed">{c.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
