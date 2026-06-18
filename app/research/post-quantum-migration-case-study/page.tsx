import ResearchPaperPage from "@/components/ResearchPaperPage";
import { getPaperBySlug } from "@/lib/content/research";
import { notFound } from "next/navigation";

export default function Page() {
  const paper = getPaperBySlug("post-quantum-migration-case-study");
  if (!paper) return notFound();
  return <ResearchPaperPage paper={paper} />;
}

