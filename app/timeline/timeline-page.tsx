import TimelineClient from "@/components/TimelineClient";
import { timelineEvents } from "@/lib/content/timeline";

export const metadata = {
  title: "Quantum Computing Timeline, 1900 to 2026 | QuantumAtlas",
  description:
    "A detailed timeline of quantum physics and quantum computing from Planck in 1900 to the error-correction era of 2026, with descriptions, why each event matters, and references for every entry.",
};

export default function TimelinePage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        {timelineEvents.length} Events · 1900 to 2026 · Full References
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        The Quantum Computing Timeline
      </h1>
      <p className="text-ink-muted max-w-2xl mb-3">
        From Planck's quantum of energy in 1900 to logical qubits, post-quantum standards, and the race for verified
        advantage in 2026. Every entry explains what happened, why it matters, and lists the references it is based on,
        with links to the matching papers, terms, algorithms, and hardware on this site.
      </p>
      <p className="text-sm text-ink-soft max-w-2xl mb-10">
        Entries from 2025 and 2026 reflect press releases and news reports as well as papers. Companies' claims,
        especially about advantage and logical qubit counts, are often contested or revised, so check the original
        sources before citing.
      </p>
      <TimelineClient />
    </div>
  );
}
