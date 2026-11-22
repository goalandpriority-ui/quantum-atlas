import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CalculatorPage from "@/components/CalculatorPage";
import { calculators, getCalculator } from "@/lib/content/calculators";

export const dynamicParams = false;

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const calc = getCalculator(params.slug);
  if (!calc) return {};
  return {
    title: `${calc.title}: Free Interactive Quantum Calculator | QuantumAtlas`,
    description: calc.summary.slice(0, 155),
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const calc = getCalculator(params.slug);
  if (!calc) return notFound();
  return <CalculatorPage calc={calc} />;
}
