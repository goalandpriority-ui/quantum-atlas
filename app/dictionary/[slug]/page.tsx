import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TermPage from "@/components/TermPage";
import { dictionaryTerms, getTermBySlug } from "@/lib/content/dictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return dictionaryTerms.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const term = getTermBySlug(params.slug);
  if (!term) return {};
  return {
    title: `${term.term} — Definition, Examples & Explanation | QuantumAtlas`,
    description: term.shortDefinition,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const term = getTermBySlug(params.slug);
  if (!term) return notFound();
  return <TermPage term={term} />;
}
