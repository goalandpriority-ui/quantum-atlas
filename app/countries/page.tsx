import Link from "next/link";

export const metadata = {
  title: "Global Quantum Computing by Country | QuantumAtlas",
  description:
    "How the US, China, EU, UK, Canada, and other nations compare in quantum computing investment, research, hardware, and policy.",
};

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    maturity: "Leading",
    investment: "$1.9B+ National Quantum Initiative (2018–2023)",
    keyPlayers: "IBM, Google, IonQ, Rigetti, Microsoft, Intel, government labs (NIST, Argonne, Oak Ridge)",
    strengths: [
      "Home to the world's leading quantum hardware companies",
      "Strong university research ecosystem (MIT, Caltech, Harvard, Stanford)",
      "Cloud-accessible quantum hardware freely available globally via IBM Quantum, AWS Braket, Azure Quantum",
      "NIST leading global post-quantum cryptography standardization",
    ],
    challenges: [
      "Export controls limiting international quantum technology collaboration",
      "Workforce shortage — demand for quantum-skilled workers consistently exceeds supply",
    ],
    policyHighlight:
      "The National Quantum Initiative Act (2018) committed multi-year federal funding across NSF, NIST, DoE, and DoD. Export controls on quantum technology have expanded since 2022.",
    recentMilestone: "Google Willow processor demonstrates below-threshold error correction (2024)",
  },
  {
    name: "China",
    flag: "🇨🇳",
    maturity: "Leading",
    investment: "$15B+ estimated government investment (2016–2026, includes Hefei National Laboratory)",
    keyPlayers: "Origin Quantum, Baidu Quantum, Alibaba DAMO Academy (now paused), University of Science and Technology of China (USTC)",
    strengths: [
      "Largest single government quantum investment globally, by announced figures",
      "World-leading boson sampling experiments (Jiuzhang photonic systems at USTC)",
      "Origin Quantum building full domestic quantum stack independently",
      "Micius satellite demonstrated intercontinental quantum key distribution",
    ],
    challenges: [
      "Western export controls limit access to some advanced semiconductor manufacturing equipment",
      "Gate-based superconducting hardware lags behind leading US platforms in published benchmarks",
      "Some major corporate quantum programs (Alibaba) paused or scaled back",
    ],
    policyHighlight:
      "Quantum computing is designated a national strategic priority under China's 14th Five-Year Plan, with the Hefei National Laboratory for Physical Sciences at the Microscale serving as a major research hub.",
    recentMilestone: "Origin Quantum open-sources Origin Pilot quantum operating system (2026)",
  },
  {
    name: "European Union",
    flag: "🇪🇺",
    maturity: "Active",
    investment: "€1B Quantum Flagship program (2018–2028)",
    keyPlayers: "IQM (Finland), Pasqal (France), Quantinuum (UK/US), Alice & Bob (France), QuiX Quantum (Netherlands)",
    strengths: [
      "Strong academic research base across multiple countries",
      "Diverse hardware approaches — superconducting, neutral atom, photonic",
      "Pasqal leading in neutral atom hardware, filing for Nasdaq listing 2026",
      "Strong privacy and data sovereignty policies shaping quantum technology deployment",
    ],
    challenges: [
      "Fragmented across many national programs rather than unified like US or China",
      "Commercial quantum companies generally smaller and less well-funded than US counterparts",
      "Brain drain concern — researchers attracted to better-funded US/UK programs",
    ],
    policyHighlight:
      "The EU Quantum Flagship is a €1 billion, 10-year program funding research across quantum computing, communication, sensing, and simulation. Individual member states run additional national programs.",
    recentMilestone: "Pasqal announces Nasdaq listing via SPAC (2026), IQM delivers quantum systems to European research institutions",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    maturity: "Active",
    investment: "£2.5B National Quantum Strategy (2023–2033)",
    keyPlayers: "Quantinuum (joint US/UK), Oxford Quantum Circuits, Riverlane, Phasecraft, NPL",
    strengths: [
      "Quantinuum — formed from merger of Cambridge Quantum and Honeywell Quantum — is a global leader in trapped-ion hardware fidelity",
      "Strong academic foundation (Oxford, Cambridge, UCL)",
      "GCHQ and national security interest driving early post-quantum cryptography adoption",
      "Riverlane specializing in quantum error correction software",
    ],
    challenges: [
      "Smaller domestic market than US or China",
      "Post-Brexit research collaboration with EU more complex",
    ],
    policyHighlight:
      "The UK's 2023 National Quantum Strategy commits £2.5B over 10 years, with goals spanning quantum computing, networking, and sensing, and explicit ambition to be a 'quantum-enabled economy' by 2033.",
    recentMilestone: "Quantinuum completes Nasdaq IPO (QNT) June 2026",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    maturity: "Active",
    investment: "C$360M+ National Quantum Strategy (2023)",
    keyPlayers: "Xanadu (Toronto), D-Wave (Burnaby, BC), 1QBit, Zapata Computing (US/Canada), University of Waterloo Institute for Quantum Computing",
    strengths: [
      "Xanadu — world's leading photonic quantum computing company, first publicly traded (XNDU)",
      "D-Wave — world's longest-running commercial quantum computing company",
      "University of Waterloo's IQC is one of the world's top quantum research institutes",
      "Strong AI and quantum AI research community in Toronto/Waterloo corridor",
    ],
    challenges: [
      "Proximity to US creates talent and capital outflow pressure",
      "National quantum investment significantly smaller than US, China, or UK",
    ],
    policyHighlight:
      "Canada's 2023 National Quantum Strategy, backed by C$360M, focuses on research excellence, commercialization, and talent development, recognizing Canada's unique position with multiple globally significant quantum companies.",
    recentMilestone: "Xanadu goes public via SPAC (NASDAQ/TSX: XNDU) 2026, Xanadu demonstrates 12 logical GKP qubits",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    maturity: "Developing",
    investment: "¥100B+ (approx $700M) over multiple programs",
    keyPlayers: "RIKEN, Fujitsu, NTT, Toshiba, IBM Japan partnership",
    strengths: [
      "RIKEN operating Japan's first domestic superconducting quantum computer",
      "Strong semiconductor manufacturing expertise relevant to qubit fabrication",
      "Fujitsu and NTT running significant corporate quantum programs",
      "IBM Japan partnership providing cloud access to IBM quantum hardware",
    ],
    challenges: [
      "Domestic quantum hardware behind leading US/China platforms in qubit count and fidelity",
      "Aging research workforce and competition for quantum talent",
    ],
    policyHighlight:
      "Japan's Quantum Technology and Innovation Strategy designates quantum as a 'key technology' and includes goals for domestic quantum computers, quantum networking infrastructure, and quantum sensing applications for industry.",
    recentMilestone: "RIKEN launches Japan's first domestic cloud-accessible superconducting quantum computer (2023)",
  },
];

export default function CountriesPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Global Landscape
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing by Country
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        How major nations compare in quantum computing investment, hardware,
        research, and policy — honest assessments of where each country
        actually stands, not press-release claims.
      </p>

      {/* Quick comparison table */}
      <div className="overflow-x-auto mb-14">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink">Country</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Status</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Key Strength</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Major Companies</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((c, i) => (
              <tr key={c.name} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line font-semibold text-ink">{c.flag} {c.name}</td>
                <td className="p-3 border border-line">
                  <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${
                    c.maturity === "Leading" ? "text-quantum bg-quantum-50" :
                    c.maturity === "Active" ? "text-collapse bg-collapse-50" :
                    "text-ink-muted bg-paper border border-line"
                  }`}>{c.maturity}</span>
                </td>
                <td className="p-3 border border-line text-ink-muted text-xs">{c.strengths[0]}</td>
                <td className="p-3 border border-line text-ink-muted text-xs">{c.keyPlayers.split(",")[0].trim()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed profiles */}
      <div className="space-y-8">
        {countries.map((c) => (
          <div key={c.name} className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-2 mb-4">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-ink">
                  {c.flag} {c.name}
                </h2>
                <p className="font-mono text-xs text-quantum mt-1">{c.investment}</p>
              </div>
              <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 shrink-0 ${
                c.maturity === "Leading" ? "text-quantum bg-quantum-50" :
                c.maturity === "Active" ? "text-collapse bg-collapse-50" :
                "text-ink-muted bg-paper border border-line"
              }`}>{c.maturity}</span>
            </div>

            <p className="text-sm font-medium text-ink mb-1">Key players</p>
            <p className="text-sm text-ink-muted mb-4">{c.keyPlayers}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">Strengths</p>
                <ul className="text-sm text-ink-muted space-y-1">
                  {c.strengths.map((s) => (
                    <li key={s} className="flex gap-2"><span className="text-quantum shrink-0">→</span>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-collapse mb-2">Challenges</p>
                <ul className="text-sm text-ink-muted space-y-1">
                  {c.challenges.map((ch) => (
                    <li key={ch} className="flex gap-2"><span className="text-collapse shrink-0">→</span>{ch}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-paper border border-line p-4 mb-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-1">Policy</p>
              <p className="text-sm text-ink-muted">{c.policyHighlight}</p>
            </div>

            <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">Recent milestone</p>
            <p className="text-sm text-ink-muted">{c.recentMilestone}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/companies" className="text-quantum hover:underline">→ Companies Database</Link>
          <Link href="/hardware" className="text-quantum hover:underline">→ Hardware Database</Link>
          <Link href="/future" className="text-quantum hover:underline">→ Future Predictions</Link>
        </div>
      </div>
    </div>
  );
}
