import TermPage from "@/components/TermPage";
import { getTermBySlug } from "@/lib/content/dictionary";
import { notFound } from "next/navigation";

export default function Page() {
  const term = getTermBySlug("no-cloning-theorem");
  if (!term) return notFound();
  return <TermPage term={term} />;
}

