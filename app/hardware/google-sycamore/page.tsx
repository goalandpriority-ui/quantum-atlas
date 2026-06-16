import HardwarePage from "@/components/HardwarePage";
import { getProcessorBySlug } from "@/lib/content/hardware";
import { notFound } from "next/navigation";

export default function Page() {
  const processor = getProcessorBySlug("google-sycamore");
  if (!processor) return notFound();
  return <HardwarePage processor={processor} />;
}

