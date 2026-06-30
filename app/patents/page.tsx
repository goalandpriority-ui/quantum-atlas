"use client";

import { useState } from "react";
import Link from "next/link";

type CompanyPatents = {
  name: string;
  country: string;
  estimatedPatents: number;
  focus: string;
  link?: string;
};

const companyData: CompanyPatents[] = [
  { name: "IBM", country: "🇺🇸", estimatedPatents: 950, focus: "Superconducting qubits, error correction, quantum software", link: "/companies/ibm" },
  { name: "Google", country: "🇺🇸", estimatedPatents: 480, focus: "Superconducting hardware, quantum supremacy benchmarks", link: "/companies/google" },
  { name: "Microsoft", country: "🇺🇸", estimatedPatents: 410, focus: "Topological qubits, quantum software stack (Q#)", link: "/companies/microsoft" },
  { name: "Origin Quantum", country: "🇨🇳", estimatedPatents: 380, focus: "Full-stack domestic quantum systems, quantum OS" },
  { name: "Huawei", country: "🇨🇳", estimatedPatents: 290, focus: "Quantum communication, quantum-safe networking" },
  { name: "Baidu", country: "🇨🇳", estimatedPatents: 210, focus: "Quantum machine learning, quantum cloud platforms" },
  { name: "Honeywell / Quantinuum", country: "🇺🇸🇬🇧", estimatedPatents: 195, focus: "Trapped-ion hardware, QCCD architecture", link: "/companies/quantinuum" },
  { name: "Intel", country: "🇺🇸", estimatedPatents: 175, focus: "Silicon spin qubits, cryogenic control electronics" },
  { name: "Toshiba", country: "🇯🇵", estimatedPatents: 160, focus: "Quantum key distribution, quantum sensing" },
  { name: "NTT", country: "🇯🇵", estimatedPatents: 140, focus: "Photonic quantum computing, quantum networking" },
  { name: "Rigetti", country: "🇺🇸", estimatedPatents: 95, focus: "Superconducting hardware, hybrid cloud access", link: "/companies/rigetti" },
  { name: "IonQ", country: "🇺🇸", estimatedPatents: 85, focus: "Trapped-ion hardware, algorithmic qubits", link: "/companies/ionq" },
  { name: "D-Wave", country: "🇨🇦", estimatedPatents: 220, focus: "Quantum annealing hardware and software", link: "/companies/d-wave" },
  { name: "Xanadu", country: "🇨🇦", estimatedPatents: 70, focus: "Photonic qubits, GKP error correction", link: "/companies/xanadu" },
  { name: "Pasqal", country: "🇫🇷", estimatedPatents: 55, focus: "Neutral atom hardware, optical tweezers", link: "/companies/pasqal" },
];

const countryTotals = [
  { country: "🇺🇸 United States", total: 2390 },
  { country: "🇨🇳 China", total: 880 },
  { country: "🇯🇵 Japan", total: 300 },
  { country: "🇨🇦 Canada", total: 290 },
  { country: "🇬🇧 United Kingdom", total: 195 },
  { country: "🇫🇷 France", total: 55 },
];

export default function PatentsPage() {
  const [sortBy, setSortBy] = useState<"patents" | "name">("patents");

  const sorted = [...companyData].sort((a, b) =>
    sortBy === "patents" ? b.estimatedPatents - a.estimatedPatents : a.name.localeCompare(b.name)
  );

  const maxPatents = Math.max(...companyData.map(c => c.estimatedPatents));

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry Data
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing Patent Filings
      </h1>
      <p className="text-ink-muted max-w-2xl mb-2">
        Estimated cumulative quantum computing patent filings by company,
        based on aggregated patent office data and industry analyst reports
        through 2026.
      </p>
      <p className="text-xs text-ink-soft mb-8">
        Figures are approximate and methodology varies by source — patent
        counting differs across jurisdictions and "quantum computing" patent
        classification isn't perfectly standardized. Use as directional
        indicators of R&D investment focus, not precise rankings.
      </p>

      {/* Country totals */}
      <div className="rounded-xl border border-line bg-surface p-6 mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-4">
          Estimated Patents by Country (aggregated)
        </p>
        <div className="space-y-2">
          {countryTotals.map((c) => {
            const pct = (c.total / countryTotals[0].total) * 100;
            return (
              <div key={c.country} className="flex items-center gap-3">
                <span className="text-sm text-ink w-44 shrink-0">{c.country}</span>
                <div className="flex-1 bg-line rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-quantum rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="font-mono text-xs text-quantum w-16 text-right shrink-0">{c.total}+</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sort controls */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-sm text-ink-muted">Sort by:</span>
        <button onClick={() => setSortBy("patents")} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${sortBy === "patents" ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line"}`}>
          Most patents
        </button>
        <button onClick={() => setSortBy("name")} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${sortBy === "name" ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line"}`}>
          A–Z
        </button>
      </div>

      {/* Company list */}
      <div className="space-y-3">
        {sorted.map((c) => {
          const pct = (c.estimatedPatents / maxPatents) * 100;
          const content = (
            <>
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.country}</span>
                  <h3 className="font-semibold text-ink">{c.name}</h3>
                </div>
                <span className="font-mono text-sm font-bold text-quantum">{c.estimatedPatents}+ patents</span>
              </div>
              <div className="w-full bg-line rounded-full h-1.5 mb-2 overflow-hidden">
                <div className="h-full bg-quantum rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-xs text-ink-muted">{c.focus}</p>
            </>
          );
          return c.link ? (
            <Link key={c.name} href={c.link} className="block rounded-xl border border-line bg-surface p-5 hover:border-quantum transition-colors">
              {content}
            </Link>
          ) : (
            <div key={c.name} className="block rounded-xl border border-line bg-surface p-5">
              {content}
            </div>
          );
        })}
      </div>

      <div className="prose-quantum max-w-2xl mt-10">
        <h2>What patent activity reveals</h2>
        <p>
          IBM's commanding patent lead reflects its decades-long, broad
          quantum research program spanning hardware, software, and error
          correction — consistent with its position as the most
          established player covered in our{" "}
          <Link href="/companies/ibm" className="text-quantum hover:underline">
            Companies Database
          </Link>
          . China's aggregate patent activity across Origin Quantum,
          Huawei, and Baidu is substantial, though concentrated differently
          than the US — with notable strength in quantum communication and
          networking patents specifically, reflecting the national quantum
          communication infrastructure discussed in our{" "}
          <Link href="/countries" className="text-quantum hover:underline">
            Countries coverage
          </Link>
          .
        </p>
        <h2>Patents don't equal product leadership</h2>
        <p>
          A large patent portfolio indicates R&D investment and IP
          strategy, but doesn't necessarily translate to product or
          hardware leadership — D-Wave's relatively high patent count
          reflects its long history (since 1999) in a narrower technical
          area, while younger companies like IonQ and Xanadu have fewer
          patents but lead in specific hardware benchmarks discussed in
          our{" "}
          <Link href="/hardware" className="text-quantum hover:underline">
            Hardware Database
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/companies" className="text-quantum hover:underline">→ Companies Database</Link>
          <Link href="/investment-tracker" className="text-quantum hover:underline">→ Investment Tracker</Link>
          <Link href="/countries" className="text-quantum hover:underline">→ Quantum Computing by Country</Link>
        </div>
      </div>
    </div>
  );
            }

