import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FutureTopicPage from "@/components/FutureTopicPage";
import { futureTopics, getFutureTopic } from "@/lib/content/future";

export const dynamicParams = false;

export function generateStaticParams() {
  return futureTopics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = getFutureTopic(params.slug);
  if (!topic) return {};
  return {
    title: `${topic.title}: Forecast and Timeline | QuantumAtlas`,
    description: topic.summary.slice(0, 155),
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const topic = getFutureTopic(params.slug);
  if (!topic) return notFound();
  return <FutureTopicPage topic={topic} />;
}
