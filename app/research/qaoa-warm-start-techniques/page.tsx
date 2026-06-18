import ResearchPaperPage from "@/components/ResearchPaperPage";
import { getPaperBySlug } from "@/lib/content/research";
import { notFound } from "next/navigation";

export default function Page() {
  const paper = getPaperBySlug("qaoa-warm-start-techniques");
  if (!paper) return notFound();
  return <ResearchPaperPage paper={paper} />;
}

