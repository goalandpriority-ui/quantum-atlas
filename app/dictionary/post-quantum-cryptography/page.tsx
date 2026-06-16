import TermPage from "@/components/TermPage";
import { getTermBySlug } from "@/lib/content/dictionary";
import { notFound } from "next/navigation";

export default function Page() {
  const term = getTermBySlug("post-quantum-cryptography");
  if (!term) return notFound();
  return <TermPage term={term} />;
}

