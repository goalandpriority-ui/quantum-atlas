import ResearchPaperPage from "@/components/ResearchPaperPage";
import { getPaperBySlug } from "@/lib/content/research";
import { notFound } from "next/navigation";

export default function Page() {
  const paper = getPaperBySlug("qaoa-portfolio-optimization-benchmark");
  if (!paper) return notFound();
  return <ResearchPaperPage paper={paper} />;
}

