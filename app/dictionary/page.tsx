import { dictionaryTerms } from "@/lib/content/dictionary";
import { Card } from "@/components/Section";

export const metadata = {
  title: "Quantum Dictionary | QuantumAtlas",
  description: "1000+ quantum computing terms, defined simply and rigorously.",
};

export default function DictionaryIndexPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        1000+ Terms · Growing Daily
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Dictionary
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Every quantum computing term, explained with a plain-language
        definition, a technical definition, an analogy, and real-world use
        cases. New terms are added every week.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {dictionaryTerms.map((t) => (
          <Card key={t.slug} href={`/dictionary/${t.slug}`}>
            <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">
              {t.category}
            </p>
            <h2 className="font-serif text-xl font-semibold text-ink mb-2">{t.term}</h2>
            <p className="text-sm text-ink-muted leading-relaxed">{t.shortDefinition}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
