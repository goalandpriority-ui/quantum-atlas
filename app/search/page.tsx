import { Suspense } from "react";
import SearchClient from "./SearchClient";

export const metadata = {
  title: "Search | QuantumAtlas",
  description: "Search across 200+ entries — dictionary terms, algorithms, hardware, companies, research papers, learning articles, and courses.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-content mx-auto px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Site-wide Search</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-6">Search QuantumAtlas</h1>
        <div className="h-12 rounded-xl border border-line bg-surface animate-pulse max-w-2xl" />
      </div>
    }>
      <SearchClient />
    </Suspense>
  );
}
