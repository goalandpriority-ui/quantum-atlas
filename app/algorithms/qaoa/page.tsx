import AlgorithmPage from "@/components/AlgorithmPage";
import { getAlgorithmBySlug } from "@/lib/content/algorithms";
import { notFound } from "next/navigation";

export default function Page() {
  const algorithm = getAlgorithmBySlug("qaoa");
  if (!algorithm) return notFound();
  return <AlgorithmPage algorithm={algorithm} />;
}

