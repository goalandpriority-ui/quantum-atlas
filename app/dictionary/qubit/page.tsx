import TermPage from "@/components/TermPage";
import { getTermBySlug } from "@/lib/content/dictionary";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Qubit — Definition, Examples & Visual Explanation | QuantumAtlas",
  description:
    "What is a qubit? Definition, technical explanation, analogy, and real-world use cases.",
};

export default function QubitPage() {
  const term = getTermBySlug("qubit");
  if (!term) return notFound();
  return <TermPage term={term} />;
}
