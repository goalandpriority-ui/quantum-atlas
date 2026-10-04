import { notFound } from "next/navigation";
import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { industries, getIndustryBySlug } from "@/lib/content/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return {
    title: `${industry.name} | QuantumAtlas`,
    description: industry.metaDescription ?? industry.summary,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return notFound();
  return <IndustryPage industry={industry} />;
}
