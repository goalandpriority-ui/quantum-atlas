import { industries } from "@/lib/content/industries";
import IndustryPage from "@/components/IndustryPage";
import { notFound } from "next/navigation";

export default function Page() {
  const industry = industries.find((i) => i.slug === "transportation");
  if (!industry) return notFound();
  return <IndustryPage industry={industry} />;
}

export async function generateMetadata() {
  const industry = industries.find((i) => i.slug === "transportation");
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.summary,
  };
}

