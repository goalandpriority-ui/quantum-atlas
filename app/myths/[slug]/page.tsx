import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MythPage from "@/components/MythPage";
import { mythTopics, getMythTopic } from "@/lib/content/myths";

export const dynamicParams = false;

export function generateStaticParams() {
  return mythTopics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = getMythTopic(params.slug);
  if (!topic) return {};
  return {
    title: `Myth: ${topic.myth} | QuantumAtlas`,
    description: topic.summary.slice(0, 155),
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const topic = getMythTopic(params.slug);
  if (!topic) return notFound();
  return <MythPage topic={topic} />;
}
