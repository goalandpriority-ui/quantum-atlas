import { dictionaryTerms } from "@/lib/content/dictionary";
import { Card } from "@/components/Section";

export const metadata = {
  title: "Quantum Dictionary | QuantumAtlas",
  description:
    "100 quantum computing terms explained with plain-language definitions, technical definitions, analogies, key facts, and FAQs.",
};

export default function DictionaryIndexPage() {
  const categories = Array.from(new Set(dictionaryTerms.map((t) => t.category)));

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        {dictionaryTerms.length} Terms · {categories.length} Categories
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Dictionary
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Quantum computing terms explained with a plain-language definition, a technical definition, an
        analogy, key facts, real-world use cases, common misconceptions, and answers to frequent questions.
        Entries link to the related algorithms, hardware, and industries in our other databases.
      </p>

      {categories.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-5">{category}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {dictionaryTerms
              .filter((t) => t.category === category)
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((t) => (
                <Card key={t.slug} href={`/dictionary/${t.slug}`}>
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2">{t.term}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{t.shortDefinition}</p>
                </Card>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
