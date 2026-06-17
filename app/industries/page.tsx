import Link from "next/link";
import { industries } from "@/lib/content/industries";

export const metadata = {
  title: "Quantum Computing by Industry | QuantumAtlas",
  description:
    "How quantum computing applies to finance, healthcare, logistics, and cybersecurity — practical use cases, current maturity, and realistic timelines.",
};

const maturityLabels: Record<string, string> = {
  exploratory: "Exploratory",
  "early-pilots": "Early Pilots",
  "active-deployment": "Active Deployment",
};

const maturityStyles: Record<string, string> = {
  exploratory: "text-ink-soft bg-paper border border-line",
  "early-pilots": "text-quantum bg-quantum-50",
  "active-deployment": "text-collapse bg-collapse-50",
};

export default function IndustriesIndexPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        By Industry
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing by Industry
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Practical, honest breakdowns of how quantum computing applies to
        specific industries — what's real today, what's still speculative,
        and what timeline to realistically expect.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="block rounded-xl border border-line bg-surface p-6 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
          >
            <span className={`inline-block font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 mb-3 ${maturityStyles[industry.maturity]}`}>
              {maturityLabels[industry.maturity]}
            </span>
            <h2 className="font-serif text-xl font-semibold text-ink mb-1">{industry.name}</h2>
            <p className="text-sm text-quantum font-medium mb-3">{industry.tagline}</p>
            <p className="text-sm text-ink-muted leading-relaxed">{industry.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
