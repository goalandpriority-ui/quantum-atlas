import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ResearchPaperPage from "@/components/ResearchPaperPage";
import { researchPapers, getResearchBySlug } from "@/lib/content/research";

export const dynamicParams = false;

export function generateStaticParams() {
  return researchPapers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const paper = getResearchBySlug(params.slug);
  if (!paper) return {};
  return {
    title: `${paper.title} — Explained | QuantumAtlas`,
    description: paper.plainSummary.slice(0, 155),
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const paper = getResearchBySlug(params.slug);
  if (!paper) return notFound();
  return <ResearchPaperPage paper={paper} />;
}
