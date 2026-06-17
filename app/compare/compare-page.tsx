"use client";

import { useState } from "react";
import Link from "next/link";
import { processors } from "@/lib/content/hardware";

const MAX_SLOTS = 3;

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([
    processors[0].slug,
    processors[2].slug,
  ]);

  const updateSlot = (index: number, slug: string) => {
    const next = [...selected];
    next[index] = slug;
    setSelected(next);
  };

  const addSlot = () => {
    if (selected.length < MAX_SLOTS) {
      const unused = processors.find((p) => !selected.includes(p.slug));
      setSelected([...selected, unused ? unused.slug : processors[0].slug]);
    }
  };

  const removeSlot = (index: number) => {
    if (selected.length > 1) {
      setSelected(selected.filter((_, i) => i !== index));
    }
  };

  const selectedProcessors = selected.map(
    (slug) => processors.find((p) => p.slug === slug)!
  );

  const rows: { label: string; getValue: (p: typeof processors[0]) => string }[] = [
    { label: "Company", getValue: (p) => p.company },
    { label: "Qubit Count", getValue: (p) => p.qubitCount.toLocaleString() },
    { label: "Qubit Type", getValue: (p) => p.qubitType },
    { label: "Architecture", getValue: (p) => p.architecture },
    { label: "Released", getValue: (p) => p.releaseYear },
    { label: "Connectivity", getValue: (p) => p.connectivity },
    { label: "Gate Error (2Q)", getValue: (p) => p.gateError },
    { label: "Coherence Time", getValue: (p) => p.coherenceTime },
    { label: "Operating Temp", getValue: (p) => p.operatingTemp },
    {
      label: "Cloud Access",
      getValue: (p) => (p.cloudAccess ? p.cloudPlatform || "Yes" : "Not publicly available"),
    },
  ];

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Interactive Tool
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Compare Quantum Processors
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        Select up to three quantum processors to compare their specs
        side by side — qubit count, architecture, error rates, and more.
      </p>

      {/* Selectors */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl">
        {selected.map((slug, index) => (
          <div key={index} className="flex items-center gap-2">
            <select
              value={slug}
              onChange={(e) => updateSlot(index, e.target.value)}
              className="flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink focus:outline-none focus:border-quantum"
            >
              {processors.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
            {selected.length > 1 && (
              <button
                onClick={() => removeSlot(index)}
                className="text-ink-soft hover:text-collapse text-sm font-mono px-2"
                aria-label="Remove"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        {selected.length < MAX_SLOTS && (
          <button
            onClick={addSlot}
            className="rounded-lg border border-dashed border-line text-ink-soft text-sm font-medium py-2 hover:border-quantum hover:text-quantum transition-colors"
          >
            + Add processor
          </button>
        )}
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto max-w-4xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink w-1/5">Spec</th>
              {selectedProcessors.map((p) => (
                <th key={p.slug} className="text-left p-3 border border-line font-semibold text-quantum">
                  <Link href={`/hardware/${p.slug}`} className="hover:underline">
                    {p.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line font-medium text-ink text-sm">{row.label}</td>
                {selectedProcessors.map((p) => (
                  <td key={p.slug} className="p-3 border border-line text-ink-muted text-sm">
                    {row.getValue(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-ink-soft mt-4 max-w-2xl">
        Want the full spec sheet and context for any of these processors?
        Click a processor name above, or browse the full{" "}
        <Link href="/hardware" className="text-quantum hover:underline">
          Hardware Database
        </Link>
        .
      </p>
    </div>
  );
}
