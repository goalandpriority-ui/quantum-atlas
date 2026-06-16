import Link from "next/link";
import { QuantumProcessor } from "@/lib/content/hardware";

export default function HardwarePage({ processor }: { processor: QuantumProcessor }) {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Quantum Hardware Database
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        {processor.name}
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        {processor.summary}
      </p>

      {/* Spec grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-12">
        {[
          { label: "Qubit Count", value: processor.qubitCount.toLocaleString() },
          { label: "Qubit Type", value: processor.qubitType },
          { label: "Architecture", value: processor.architecture },
          { label: "Released", value: processor.releaseYear },
          { label: "Gate Error (2Q)", value: processor.gateError },
          { label: "Coherence Time", value: processor.coherenceTime },
          { label: "Operating Temp", value: processor.operatingTemp },
          { label: "Cloud Access", value: processor.cloudAccess ? `Yes — ${processor.cloudPlatform}` : "Not publicly available" },
          { label: "Company", value: processor.company },
        ].map((spec) => (
          <div key={spec.label} className="rounded-xl border border-line bg-surface p-4">
            <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">
              {spec.label}
            </p>
            <p className="text-sm text-ink font-medium leading-snug">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>Connectivity</h2>
        <p>{processor.connectivity}</p>

        <h2>Key Features</h2>
        <ul>
          {processor.keyFeatures.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <h2>Limitations</h2>
        <ul>
          {processor.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        <h2>Technical Notes</h2>
        <p>{processor.technicalNotes}</p>

        <p>
          <Link href="/hardware" className="text-quantum hover:underline">
            ← Back to Hardware Database
          </Link>
        </p>
      </div>
    </article>
  );
}
