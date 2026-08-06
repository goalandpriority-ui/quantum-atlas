import { algorithms } from "@/lib/content/algorithms";
import AlgorithmPage from "@/components/AlgorithmPage";
import { notFound } from "next/navigation";

export default function Page() {
  const algo = algorithms.find((a) => a.slug === "variational-quantum-linear-solver");
  if (!algo) return notFound();
  return <AlgorithmPage algorithm={algo} />;
}

export async function generateMetadata() {
  const algo = algorithms.find((a) => a.slug === "variational-quantum-linear-solver");
  if (!algo) return {};
  return {
    title: algo.name,
    description: algo.summary,
  };
}

