import TermPage from "@/components/TermPage";
import EntanglementDiagram from "@/components/diagrams/EntanglementDiagram";
import { getTermBySlug } from "@/lib/content/dictionary";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Entanglement — Definition, Animation & Use Cases | QuantumAtlas",
  description:
    "What is quantum entanglement? Definition, technical explanation, analogy, and real-world use cases.",
};

export default function EntanglementPage() {
  const term = getTermBySlug("entanglement");
  if (!term) return notFound();
  return <TermPage term={term} diagram={<EntanglementDiagram />} />;
}
