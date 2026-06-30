"use client";

import { useState } from "react";
import Link from "next/link";

const cityData = [
  { city: "San Francisco / Bay Area", country: "🇺🇸 USA", avgSalary: 195000, range: "$160k–$240k+", jobDensity: "Very High", topEmployers: "Google, IonQ, Rigetti, startups", notes: "Highest compensation globally; stock options often significant" },
  { city: "New York City", country: "🇺🇸 USA", avgSalary: 175000, range: "$145k–$220k", jobDensity: "High", topEmployers: "IBM, Goldman Sachs, JPMorgan, hedge funds", notes: "Finance-sector quantum applications dominate; strong for quantum ML and risk analysis roles" },
  { city: "Boston / Cambridge", country: "🇺🇸 USA", avgSalary: 165000, range: "$135k–$210k", jobDensity: "High", topEmployers: "MIT spinouts, QuEra, PsiQuantum, pharma R&D", notes: "Dense academic-to-industry pipeline; hardware and quantum chemistry focus" },
  { city: "Seattle", country: "🇺🇸 USA", avgSalary: 170000, range: "$140k–$215k", jobDensity: "Medium-High", topEmployers: "Microsoft, Amazon Braket, Allen Institute", notes: "Microsoft's topological qubit program is Seattle-based" },
  { city: "London", country: "🇬🇧 UK", avgSalary: 95000, range: "£75k–£130k", jobDensity: "High", topEmployers: "Quantinuum, Oxford Quantum Circuits, Riverlane, Goldman Sachs", notes: "Lower than US in nominal terms; strong purchasing power parity; growing fast post-NQS" },
  { city: "Toronto / Waterloo", country: "🇨🇦 Canada", avgSalary: 130000, range: "C$100k–C$175k", jobDensity: "High", topEmployers: "Xanadu, D-Wave, 1QBit, Vector Institute", notes: "Highest quantum job density outside USA; CAD vs USD gap; strong equity upside at startups" },
  { city: "Amsterdam / Delft", country: "🇳🇱 Netherlands", avgSalary: 80000, range: "€65k–€110k", jobDensity: "Medium", topEmployers: "QuiX Quantum, TU Delft spinouts, ASML", notes: "QuTech at TU Delft is one of Europe's top quantum research groups" },
  { city: "Paris", country: "🇫🇷 France", avgSalary: 75000, range: "€60k–€105k", jobDensity: "Medium", topEmployers: "Pasqal, Alice & Bob, Thales, Atos", notes: "Growing fast with Pasqal's IPO; government quantum plan creating new roles" },
  { city: "Munich / Berlin", country: "🇩🇪 Germany", avgSalary: 80000, range: "€65k–€115k", jobDensity: "Medium", topEmployers: "IQM (German office), Munich Quantum Valley, Siemens R&D", notes: "Germany's €2B quantum investment creating rapid growth in industry roles" },
  { city: "Sydney / Melbourne", country: "🇦🇺 Australia", avgSalary: 135000, range: "A$110k–A$175k", jobDensity: "Low-Medium", topEmployers: "Silicon Quantum Computing, Diraq, UNSW, defence contractors", notes: "Silicon spin qubit focus; AUKUS driving defence-adjacent quantum roles" },
  { city: "Tokyo", country: "🇯🇵 Japan", avgSalary: 9500000, range: "¥8M–¥14M", jobDensity: "Low-Medium", topEmployers: "Fujitsu, NTT, RIKEN, Toshiba", notes: "Roles concentrated at large corporates and national labs; significant equity upside rare" },
  { city: "Bengaluru / Mumbai", country: "🇮🇳 India", avgSalary: 2500000, range: "₹18L–₹45L", jobDensity: "Low but growing", topEmployers: "IBM India, TCS Quantum, IISc spinouts, QNu Labs", notes: "Early stage but NQM driving rapid growth; remote work for US/UK firms adds premium" },
];

const skillData = [
  { skill: "Quantum Error Correction", demand: "Very High", premiumPct: "+35–50%", reason: "Rarest skill; directly relevant to fault-tolerant roadmaps at IBM, Google, Quantinuum" },
  { skill: "Qiskit / IBM Quantum SDK", demand: "Very High", premiumPct: "+15–25%", reason: "Most in-demand quantum programming framework; IBM's massive hardware install base" },
  { skill: "Quantum Algorithm Design", demand: "High", premiumPct: "+25–40%", reason: "Deep theoretical work; PhD-level expected; scarce globally" },
  { skill: "PennyLane / Quantum ML", demand: "High", premiumPct: "+20–30%", reason: "QML is growing fast; PennyLane integrates with PyTorch/TF making it crossover-friendly" },
  { skill: "Cirq (Google)", demand: "High", premiumPct: "+15–20%", reason: "Google-ecosystem hardware work; hardware-aware circuit compilation" },
  { skill: "Python (quantum context)", demand: "Very High", premiumPct: "+10–15%", reason: "Table stakes for all software-adjacent quantum roles" },
  { skill: "Linear Algebra / Quantum Math", demand: "High", premiumPct: "+20–30%", reason: "Foundational for algorithm design; often tested in interviews" },
  { skill: "Superconducting Qubit Physics", demand: "Medium-High", premiumPct: "+40–60%", reason: "Hardware engineering roles; extremely specialized; PhD + lab experience required" },
  { skill: "Trapped-Ion Systems", demand: "Medium", premiumPct: "+40–55%", reason: "IonQ, Quantinuum-specific; even rarer than superconducting specialists" },
  { skill: "Quantum Cryptography / PQC", demand: "High", premiumPct: "+25–35%", reason: "Post-quantum migration urgency driving rapid hiring in finance and government" },
  { skill: "Q# (Microsoft)", demand: "Low-Medium", premiumPct: "+10–20%", reason: "Microsoft-specific; smaller market but dedicated hiring pipeline" },
  { skill: "Quantum Chemistry (VQE)", demand: "Medium", premiumPct: "+20–30%", reason: "Pharma and materials R&D quantum applications; chemistry background valued" },
];

const roleData = [
  { role: "Quantum Research Scientist", level: "PhD", usRange: "$160k–$250k", ukRange: "£90k–£150k", demand: "Very High" },
  { role: "Quantum Software Engineer", level: "BS/MS", usRange: "$140k–$200k", ukRange: "£80k–£130k", demand: "Very High" },
  { role: "Quantum Error Correction Engineer", level: "PhD", usRange: "$170k–$260k", ukRange: "£100k–£160k", demand: "High" },
  { role: "Quantum Hardware Engineer", level: "PhD", usRange: "$160k–$240k", ukRange: "£95k–£145k", demand: "High" },
  { role: "Quantum Applications Developer", level: "BS/MS", usRange: "$120k–$180k", ukRange: "£70k–£115k", demand: "High" },
  { role: "Quantum Algorithm Researcher", level: "PhD", usRange: "$155k–$230k", ukRange: "£85k–£140k", demand: "High" },
  { role: "Quantum ML Engineer", level: "MS/PhD", usRange: "$140k–$210k", ukRange: "£80k–£130k", demand: "Medium-High" },
  { role: "Post-Quantum Cryptography Engineer", level: "BS/MS", usRange: "$130k–$195k", ukRange: "£75k–£125k", demand: "Very High" },
  { role: "Cryogenic Systems Engineer", level: "BS/MS/PhD", usRange: "$120k–$180k", ukRange: "£70k–£110k", demand: "Medium" },
  { role: "Quantum Control Systems Engineer", level: "MS/PhD", usRange: "$130k–$190k", ukRange: "£75k–£120k", demand: "Medium" },
];

type Tab = "cities" | "skills" | "roles";

const demandColor: Record<string, string> = {
  "Very High": "text-quantum bg-quantum-50",
  "High": "text-quantum bg-quantum-50",
  "Medium-High": "text-collapse bg-collapse-50",
  "Medium": "text-ink-muted bg-paper border border-line",
  "Low-Medium": "text-ink-muted bg-paper border border-line",
  "Low but growing": "text-ink-muted bg-paper border border-line",
};

export default function SalaryPage() {
  const [tab, setTab] = useState<Tab>("cities");
  const [sortCities, setSortCities] = useState<"salary" | "density">("salary");

  const sortedCities = [...cityData].sort((a, b) =>
    sortCities === "salary" ? b.avgSalary - a.avgSalary : 0
  );

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Career Intelligence
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing Salary & Skills Heatmap
      </h1>
      <p className="text-ink-muted max-w-2xl mb-2">
        Salary ranges, skill premiums, and hiring demand across cities, roles,
        and skill sets — based on aggregated job postings, recruiter reports,
        and industry surveys. Figures are approximate mid-2026 estimates.
      </p>
      <p className="text-xs text-ink-soft mb-8">
        Note: Salary figures reflect total comp (base + typical bonus) where available, excluding equity. Individual variation is significant.
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-line">
        {(["cities", "skills", "roles"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors capitalize ${
              tab === t
                ? "border-quantum text-quantum"
                : "border-transparent text-ink-muted hover:text-ink"
            }`}
          >
            {t === "cities" ? "By City" : t === "skills" ? "By Skill" : "By Role"}
          </button>
        ))}
      </div>

      {/* Cities tab */}
      {tab === "cities" && (
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm text-ink-muted">Sort by:</span>
            <button
              onClick={() => setSortCities("salary")}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${sortCities === "salary" ? "bg-quantum text-white border-quantum" : "bg-surface text-ink-muted border-line"}`}
            >
              Highest salary
            </button>
          </div>
          <div className="space-y-4">
            {sortedCities.map((c) => (
              <div key={c.city} className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink">{c.city}</h3>
                    <p className="text-xs text-ink-soft">{c.country}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-lg font-bold text-quantum">{c.range}</p>
                    <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 ${demandColor[c.jobDensity] || "text-ink-muted bg-paper border border-line"}`}>
                      {c.jobDensity} density
                    </span>
                  </div>
                </div>
                <p className="text-sm text-ink-muted mb-1"><span className="font-medium text-ink">Top employers:</span> {c.topEmployers}</p>
                <p className="text-sm text-ink-soft italic">{c.notes}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills tab */}
      {tab === "skills" && (
        <div className="space-y-3">
          {skillData.map((s) => (
            <div key={s.skill} className="rounded-xl border border-line bg-surface p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-ink">{s.skill}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-sm font-bold text-quantum">{s.premiumPct}</span>
                  <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 ${demandColor[s.demand] || "text-ink-muted"}`}>
                    {s.demand}
                  </span>
                </div>
              </div>
              <p className="text-sm text-ink-muted">{s.reason}</p>
            </div>
          ))}
          <p className="text-xs text-ink-soft mt-2">
            Salary premium % is relative to a comparable software engineering role without quantum-specific skills.
          </p>
        </div>
      )}

      {/* Roles tab */}
      {tab === "roles" && (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-quantum-50">
                  <th className="text-left p-3 border border-line font-semibold text-ink">Role</th>
                  <th className="text-left p-3 border border-line font-semibold text-ink">Typical level</th>
                  <th className="text-left p-3 border border-line font-semibold text-ink">US range</th>
                  <th className="text-left p-3 border border-line font-semibold text-ink">UK range</th>
                  <th className="text-left p-3 border border-line font-semibold text-ink">Demand</th>
                </tr>
              </thead>
              <tbody>
                {roleData.map((r, i) => (
                  <tr key={r.role} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                    <td className="p-3 border border-line font-medium text-ink">{r.role}</td>
                    <td className="p-3 border border-line text-ink-muted font-mono text-xs">{r.level}</td>
                    <td className="p-3 border border-line text-quantum font-mono text-xs font-semibold">{r.usRange}</td>
                    <td className="p-3 border border-line text-ink-muted font-mono text-xs">{r.ukRange}</td>
                    <td className="p-3 border border-line">
                      <span className={`font-mono text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 ${demandColor[r.demand]}`}>
                        {r.demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Start building skills</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/jobs" className="text-quantum hover:underline">→ Live quantum job listings</Link>
          <Link href="/courses" className="text-quantum hover:underline">→ Courses — learn the top skills</Link>
          <Link href="/learn/choosing-your-first-quantum-framework" className="text-quantum hover:underline">→ Choosing your first quantum framework</Link>
        </div>
      </div>
    </div>
  );
}
