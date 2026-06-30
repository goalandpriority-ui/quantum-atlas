"use client";

import { useState } from "react";
import Link from "next/link";

type YearData = { year: number; vcFunding: number; govFunding: number; majorEvents: string[] };

const yearlyData: YearData[] = [
  { year: 2015, vcFunding: 60, govFunding: 200, majorEvents: ["D-Wave 2X launched (1,000+ qubits)"] },
  { year: 2016, vcFunding: 110, govFunding: 250, majorEvents: ["China announces national quantum satellite program"] },
  { year: 2017, vcFunding: 180, govFunding: 400, majorEvents: ["IBM Q commercial cloud access launches", "Micius satellite launched"] },
  { year: 2018, vcFunding: 250, govFunding: 1900, majorEvents: ["US National Quantum Initiative Act signed ($1.2B)", "EU Quantum Flagship launches (€1B)"] },
  { year: 2019, vcFunding: 450, govFunding: 600, majorEvents: ["Google claims 'quantum supremacy' with Sycamore"] },
  { year: 2020, vcFunding: 700, govFunding: 700, majorEvents: ["Honeywell enters trapped-ion race", "IonQ announces SPAC plans"] },
  { year: 2021, vcFunding: 1400, govFunding: 900, majorEvents: ["IonQ goes public (first pure-play quantum IPO)", "Cambridge Quantum + Honeywell merge into Quantinuum"] },
  { year: 2022, vcFunding: 2350, govFunding: 1100, majorEvents: ["Rigetti goes public via SPAC", "D-Wave goes public via SPAC"] },
  { year: 2023, vcFunding: 1800, govFunding: 3200, majorEvents: ["UK £2.5B National Quantum Strategy", "India National Quantum Mission approved"] },
  { year: 2024, vcFunding: 1450, govFunding: 1400, majorEvents: ["Google Willow demonstrates below-threshold error correction"] },
  { year: 2025, vcFunding: 2100, govFunding: 1600, majorEvents: ["PsiQuantum continues fault-tolerant photonic roadmap", "Multiple national strategies updated"] },
  { year: 2026, vcFunding: 2400, govFunding: 1500, majorEvents: ["Quantinuum IPO (Nasdaq: QNT)", "Pasqal and Xanadu go public", "Origin Quantum open-sources Origin Pilot"] },
];

const maxValue = Math.max(...yearlyData.map(d => d.vcFunding + d.govFunding));

export default function InvestmentTrackerPage() {
  const [selectedYear, setSelectedYear] = useState<YearData | null>(yearlyData[yearlyData.length - 1]);

  const totalVC = yearlyData.reduce((sum, d) => sum + d.vcFunding, 0);
  const totalGov = yearlyData.reduce((sum, d) => sum + d.govFunding, 0);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry Data
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing Investment Tracker
      </h1>
      <p className="text-ink-muted max-w-2xl mb-2">
        Estimated global venture capital and government funding into quantum
        computing, 2015–2026. Figures are approximate aggregates from public
        reporting and industry estimates — treat as directional trends, not
        precise totals.
      </p>
      <p className="text-xs text-ink-soft mb-8">All figures in $ millions USD, approximate.</p>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl">
        <div className="rounded-xl border border-line bg-surface p-5 text-center">
          <p className="font-mono text-2xl font-bold text-quantum">${(totalVC / 1000).toFixed(1)}B</p>
          <p className="text-xs text-ink-muted">Total VC funding 2015–2026</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5 text-center">
          <p className="font-mono text-2xl font-bold text-collapse">${(totalGov / 1000).toFixed(1)}B</p>
          <p className="text-xs text-ink-muted">Total government funding 2015–2026</p>
        </div>
      </div>

      {/* Bar chart */}
      <div className="rounded-2xl border border-line bg-surface p-6 mb-8">
        <div className="flex items-center gap-4 mb-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-quantum inline-block" /> VC Funding</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-collapse inline-block" /> Government Funding</span>
        </div>
        <div className="overflow-x-auto">
          <div className="flex items-end gap-3 min-w-[700px] h-64">
            {yearlyData.map((d) => {
              const vcHeight = (d.vcFunding / maxValue) * 100;
              const govHeight = (d.govFunding / maxValue) * 100;
              const isSelected = selectedYear?.year === d.year;
              return (
                <button
                  key={d.year}
                  onClick={() => setSelectedYear(d)}
                  className="flex-1 flex flex-col items-center gap-1 group"
                >
                  <div className="w-full flex flex-col-reverse h-52 justify-start">
                    <div
                      className={`w-full rounded-t-sm transition-all ${isSelected ? "bg-quantum" : "bg-quantum-100 group-hover:bg-quantum-50"}`}
                      style={{ height: `${vcHeight}%` }}
                    />
                    <div
                      className={`w-full transition-all ${isSelected ? "bg-collapse" : "bg-collapse-50 group-hover:bg-collapse-50"}`}
                      style={{ height: `${govHeight}%` }}
                    />
                  </div>
                  <span className={`font-mono text-[10px] ${isSelected ? "text-quantum font-bold" : "text-ink-soft"}`}>
                    '{String(d.year).slice(2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected year detail */}
      {selectedYear && (
        <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-6 mb-10 max-w-2xl">
          <h2 className="font-serif text-xl font-semibold text-ink mb-3">{selectedYear.year}</h2>
          <div className="flex gap-6 mb-4">
            <div>
              <p className="font-mono text-xs text-quantum uppercase tracking-wide">VC Funding</p>
              <p className="font-mono text-lg font-bold text-ink">${selectedYear.vcFunding}M</p>
            </div>
            <div>
              <p className="font-mono text-xs text-collapse uppercase tracking-wide">Gov Funding</p>
              <p className="font-mono text-lg font-bold text-ink">${selectedYear.govFunding}M</p>
            </div>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">Major events</p>
          <ul className="text-sm text-ink-muted space-y-1">
            {selectedYear.majorEvents.map((e) => (
              <li key={e} className="flex gap-2"><span className="text-quantum shrink-0">→</span>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="prose-quantum max-w-2xl">
        <h2>What the trend shows</h2>
        <p>
          Government funding spiked sharply in 2018 (US National Quantum
          Initiative, EU Quantum Flagship) and again in 2023 (UK, India,
          and other national strategies), reflecting periodic waves of
          policy commitment rather than steady year-over-year growth. VC
          funding has grown more consistently but with notable
          volatility — the 2022 peak coincided with several SPAC listings
          (Rigetti, D-Wave), and 2026 marks a fresh wave of public
          listings (Quantinuum, Pasqal, Xanadu).
        </p>
        <h2>A note on data quality</h2>
        <p>
          Unlike our live{" "}
          <Link href="/jobs" className="text-quantum hover:underline">
            Jobs
          </Link>{" "}
          and{" "}
          <Link href="/news" className="text-quantum hover:underline">
            News
          </Link>{" "}
          pages, this tracker uses periodically updated estimates rather
          than a live data feed — comprehensive, verified global quantum
          investment data isn't available through any single free API. We
          aggregate from public company announcements, government program
          documents, and industry reports referenced throughout our{" "}
          <Link href="/countries" className="text-quantum hover:underline">
            Countries
          </Link>{" "}
          coverage.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/countries" className="text-quantum hover:underline">→ Quantum Computing by Country</Link>
          <Link href="/companies" className="text-quantum hover:underline">→ Companies Database</Link>
          <Link href="/patents" className="text-quantum hover:underline">→ Patent Filings Tracker</Link>
        </div>
      </div>
    </div>
  );
          }
      
