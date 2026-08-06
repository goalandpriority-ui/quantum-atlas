import { processors } from "@/lib/content/hardware";
import HardwarePage from "@/components/HardwarePage";
import { notFound } from "next/navigation";

export default function Page() {
  const proc = processors.find((p) => p.slug === "riken-h60");
  if (!proc) return notFound();
  return <HardwarePage processor={proc} />;
}

export async function generateMetadata() {
  const proc = processors.find((p) => p.slug === "riken-h60");
  if (!proc) return {};
  return {
    title: proc.name,
    description: proc.summary,
  };
}

