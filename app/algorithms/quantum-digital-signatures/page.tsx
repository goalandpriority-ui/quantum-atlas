import AlgorithmPage from "@/components/AlgorithmPage";
import { getAlgorithmBySlug } from "@/lib/content/algorithms";
import { notFound } from "next/navigation";

export default function Page() {
  const algorithm = getAlgorithmBySlug("quantum-digital-signatures");
  if (!algorithm) return notFound();
  return <AlgorithmPage algorithm={algorithm} />;
}

