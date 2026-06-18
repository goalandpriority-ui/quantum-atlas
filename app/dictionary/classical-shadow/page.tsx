import TermPage from "@/components/TermPage";
import { getTermBySlug } from "@/lib/content/dictionary";
import { notFound } from "next/navigation";

export default function Page() {
  const term = getTermBySlug("classical-shadow");
  if (!term) return notFound();
  return <TermPage term={term} />;
}

