import TermPage from "@/components/TermPage";
import { getTermBySlug } from "@/lib/content/dictionary";
import { notFound } from "next/navigation";

export default function Page() {
  const term = getTermBySlug("nisq");
  if (!term) return notFound();
  return <TermPage term={term} />;
}

