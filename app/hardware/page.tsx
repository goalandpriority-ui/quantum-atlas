import Link from "next/link";
import { processors } from "@/lib/content/hardware";

export const metadata = {
  title: "Quantum Hardware Database | QuantumAtlas",
  description:
    "Specs, architectures, and comparisons for major quantum processors — IBM Condor, Google Sycamore, IonQ Forte, Rigetti Novera, and more.",
};

export default function HardwareIndexPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Database · Growing
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Hardware Database
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Detailed specs for every major quantum processor — qubit count,
        architecture, gate fidelity, coherence times, operating temperature,
        and cloud access. Updated as new hardware is announced.
      </p>

      {/* Comparison table */}
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink">Processor</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Company</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Qubits</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Type</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Released</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Cloud</th>
            </tr>
          </thead>
          <tbody>
            {processors.map((p, i) => (
              <tr key={p.slug} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line">
                  <Link href={`/hardware/${p.slug}`} className="text-quantum font-medium hover:underline">
                    {p.name}
                  </Link>
                </td>
                <td className="p-3 border border-line text-ink-muted">{p.company}</td>
                <td className="p-3 border border-line font-mono text-ink font-semibold">
                  {p.qubitCount.toLocaleString()}
                </td>
                <td className="p-3 border border-line text-ink-muted">{p.qubitType.split("(")[0].trim()}</td>
                <td className="p-3 border border-line text-ink-muted">{p.releaseYear}</td>
                <td className="p-3 border border-line">
                  {p.cloudAccess ? (
                    <span className="inline-block bg-quantum-50 text-quantum font-mono text-[11px] px-2 py-0.5 rounded-full">Yes</span>
                  ) : (
                    <span className="inline-block bg-paper text-ink-soft font-mono text-[11px] px-2 py-0.5 rounded-full border border-line">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {processors.map((p) => (
          <Link
            key={p.slug}
            href={`/hardware/${p.slug}`}
            className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-serif text-lg font-semibold text-ink">{p.name}</h2>
              <span className="font-mono text-xl font-bold text-quantum ml-2 shrink-0">
                {p.qubitCount.toLocaleString()}
              </span>
            </div>
            <p className="font-mono text-xs text-quantum mb-1">{p.company} · {p.releaseYear}</p>
            <p className="text-xs text-ink-soft mb-3">{p.qubitType}</p>
            <p className="text-sm text-ink-muted leading-relaxed line-clamp-3">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
