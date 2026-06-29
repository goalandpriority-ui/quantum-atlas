import Link from "next/link";

export const metadata = {
  title: "Global Quantum Computing by Country | QuantumAtlas",
  description:
    "How the US, China, EU, UK, Canada, Japan, India, and Australia compare in quantum computing investment, research, hardware, and policy.",
};

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    maturity: "Leading",
    investment: "$1.9B+ National Quantum Initiative (2018–2023), additional DoD funding ongoing",
    keyPlayers: "IBM, Google, IonQ, Rigetti, Microsoft, Intel, NIST, Argonne, Oak Ridge National Labs",
    strengths: [
      "Home to the world's leading quantum hardware companies across all major qubit types",
      "Strong university research ecosystem — MIT, Caltech, Harvard, Stanford, Chicago",
      "Cloud-accessible quantum hardware globally via IBM Quantum, AWS Braket, Azure Quantum",
      "NIST leading global post-quantum cryptography standardization (standards finalized 2024)",
      "Largest private venture capital investment in quantum startups globally",
    ],
    challenges: [
      "Export controls limiting international quantum technology collaboration and talent inflow",
      "Workforce shortage — demand for quantum-skilled workers consistently exceeds supply",
      "Fragmented federal agency coordination across NSF, NIST, DoE, DoD, and DARPA programs",
    ],
    policyHighlight:
      "The National Quantum Initiative Act (2018) committed multi-year federal funding across NSF, NIST, DoE, and DoD. Export controls on quantum technology have expanded significantly since 2022, limiting technology transfer to China and certain other nations.",
    recentMilestone:
      "Google Willow processor demonstrates below-threshold error correction scaling (2024); IBM Eagle, Osprey, Condor roadmap advancing toward fault tolerance",
    watchFor:
      "IBM's 2025–2027 error-corrected processor milestones; US-China quantum technology decoupling accelerating",
  },
  {
    name: "China",
    flag: "🇨🇳",
    maturity: "Leading",
    investment: "$15B+ estimated government investment (2016–2026, includes Hefei National Laboratory)",
    keyPlayers:
      "Origin Quantum, Baidu Quantum, USTC, Zhejiang University, Alibaba DAMO Academy (scaled back 2023)",
    strengths: [
      "Largest single government quantum investment globally by announced figures",
      "World-leading photonic quantum experiments — Jiuzhang boson sampling at USTC",
      "Origin Quantum building a full domestic quantum stack independently of Western supply chains",
      "Micius satellite demonstrated intercontinental quantum key distribution (2017)",
      "Strong domestic talent pipeline through specialized quantum university programs",
    ],
    challenges: [
      "Western export controls limit access to advanced semiconductor manufacturing equipment",
      "Gate-based superconducting hardware lags behind leading US platforms in published benchmarks",
      "Major corporate quantum programs scaled back (Alibaba DAMO 2023)",
      "Less transparent publication of hardware benchmarks than leading Western competitors",
    ],
    policyHighlight:
      "Quantum computing is a national strategic priority under China's 14th Five-Year Plan. The Hefei National Laboratory and the national quantum communication network connecting Beijing, Shanghai, and other cities represent the world's largest quantum infrastructure investments.",
    recentMilestone:
      "Origin Quantum open-sources Origin Pilot quantum OS (2026); USTC demonstrates 255-photon Jiuzhang 3.0 boson sampling",
    watchFor:
      "Whether China's superconducting hardware program closes the gap with IBM/Google; expansion of national quantum communication network",
  },
  {
    name: "European Union",
    flag: "🇪🇺",
    maturity: "Active",
    investment:
      "€1B Quantum Flagship (2018–2028), plus Germany (€2B+), France (€1.8B), Netherlands, Finland",
    keyPlayers:
      "IQM (Finland), Pasqal (France), Alice & Bob (France), QuiX Quantum (Netherlands), Multiverse Computing (Spain)",
    strengths: [
      "Diverse hardware approaches — superconducting, neutral atom, photonic, cat qubits",
      "Pasqal leading globally in neutral atom hardware, Nasdaq listing 2026",
      "Strong academic research across Delft, Paris, Munich, and Vienna",
      "Alice & Bob pursuing cat qubit approach — fewer physical qubits per logical qubit theoretically",
      "GDPR and data sovereignty emphasis shaping quantum cryptography deployment priorities",
    ],
    challenges: [
      "Fragmented across national programs rather than unified federal investment",
      "Commercial quantum companies generally smaller and less well-funded than US counterparts",
      "Brain drain to US — researchers attracted to better-funded American quantum programs",
      "No dominant EU quantum hardware player comparable to IBM, Google, or IonQ",
    ],
    policyHighlight:
      "The EU Quantum Flagship funds research across computing, communication, sensing, and simulation. The EuroQCI initiative is building a pan-European quantum communication infrastructure. Germany and France run significant parallel national programs.",
    recentMilestone:
      "Pasqal Nasdaq listing via SPAC (2026); IQM delivers superconducting systems to European research institutions and Finland's national quantum computer",
    watchFor:
      "Whether EU can consolidate fragmented programs into a coherent industrial strategy; Pasqal's commercial traction with neutral atom hardware",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    maturity: "Active",
    investment: "£2.5B National Quantum Strategy (2023–2033)",
    keyPlayers:
      "Quantinuum, Oxford Quantum Circuits, Riverlane, Phasecraft, NPL (National Physical Laboratory)",
    strengths: [
      "Quantinuum leads globally in trapped-ion gate fidelity",
      "Strong academic foundation — Oxford, Cambridge, UCL quantum research groups",
      "Riverlane specializing in quantum error correction software stack",
      "GCHQ and national security interest driving early post-quantum cryptography adoption",
      "Oxford Quantum Circuits commercializing superconducting quantum hardware as a service",
    ],
    challenges: [
      "Post-Brexit friction complicates research collaboration with EU institutions",
      "Smaller domestic market and capital base than US or China",
      "Quantinuum headquarters split between Cambridge and Colorado complicates UK attribution",
    ],
    policyHighlight:
      "The UK's 2023 National Quantum Strategy commits £2.5B over 10 years with stated ambition to become a 'quantum-enabled economy' by 2033. The National Quantum Computing Centre (NQCC) provides centralized hardware access.",
    recentMilestone:
      "Quantinuum completes Nasdaq IPO (QNT) June 2026 — first major quantum hardware company IPO of 2026",
    watchFor:
      "Quantinuum's commercial traction post-IPO; whether UK can attract major quantum manufacturing investment",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    maturity: "Active",
    investment:
      "C$360M National Quantum Strategy (2023) + significant private investment in Toronto-Waterloo corridor",
    keyPlayers:
      "Xanadu (Toronto), D-Wave (Burnaby BC), 1QBit, University of Waterloo IQC, Perimeter Institute",
    strengths: [
      "Xanadu — world-leading photonic quantum company, first publicly traded (XNDU)",
      "D-Wave — world's longest-running commercial quantum computing company",
      "University of Waterloo's IQC is one of the world's top quantum information research institutes",
      "Toronto-Waterloo corridor has highest density of quantum startups outside the US",
      "Strong AI and quantum-ML research community benefiting from proximity to Vector Institute",
    ],
    challenges: [
      "Proximity to US creates talent and capital outflow pressure",
      "National quantum investment significantly smaller than US, China, or UK",
      "D-Wave's annealing approach is niche — not directly competitive with gate-based leaders",
    ],
    policyHighlight:
      "Canada's 2023 National Quantum Strategy focuses on research excellence, commercialization pipelines, and talent development, explicitly building on Canada's unusual position of having multiple globally significant quantum companies.",
    recentMilestone:
      "Xanadu goes public (NASDAQ/TSX: XNDU) 2026; Aurora photonic system demonstrates 12 logical GKP qubits — world's first large-scale logical qubit demonstration in photonics",
    watchFor:
      "Whether Xanadu's photonic approach can scale to fault-tolerant computation; D-Wave vs NISQ gate-based competition for optimization problems",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    maturity: "Developing",
    investment: "¥100B+ (approx $700M) across MEXT, Cabinet Office, and corporate programs",
    keyPlayers: "RIKEN, Fujitsu, NTT, Toshiba, IBM Japan, NEC",
    strengths: [
      "RIKEN operating Japan's first domestic superconducting quantum computer (64 qubits, 2023)",
      "Strong semiconductor and precision manufacturing expertise relevant to qubit fabrication",
      "Fujitsu and NTT running significant corporate quantum programs",
      "IBM Japan partnership providing cloud access to IBM quantum hardware for domestic researchers",
      "NEC has long history in superconducting qubit research dating to early 2000s",
    ],
    challenges: [
      "Domestic quantum hardware currently behind leading US/China platforms in qubit count and fidelity",
      "Aging research workforce and intense competition for quantum talent with industry",
      "Corporate quantum R&D not yet producing internationally competitive hardware",
    ],
    policyHighlight:
      "Japan's Quantum Technology and Innovation Strategy designates quantum as a 'key technology.' The 2023 Quantum Leap Flagship Program targets a domestically developed fault-tolerant quantum computer.",
    recentMilestone:
      "RIKEN launches cloud-accessible 64-qubit domestic superconducting quantum computer (2023); Fujitsu-RIKEN partnership targeting 1000-qubit device by 2026",
    watchFor:
      "Whether Japan's RIKEN-Fujitsu collaboration can produce internationally competitive hardware; NTT's photonic quantum networking research",
  },
  {
    name: "India",
    flag: "🇮🇳",
    maturity: "Emerging",
    investment: "₹6,000 crore (~$720M) National Quantum Mission (2023–2031)",
    keyPlayers: "IISc Bangalore, TIFR Mumbai, IITs, C-DAC, QNu Labs (QKD startup)",
    strengths: [
      "Large pool of physics and mathematics graduates relevant to quantum research",
      "National Quantum Mission represents significant commitment for an emerging quantum economy",
      "Strong diaspora connection — many Indian-origin researchers at top US/UK quantum programs",
      "QNu Labs commercializing quantum key distribution domestically",
      "IISc and IITs have active quantum research groups building domestic expertise",
    ],
    challenges: [
      "No major domestic quantum hardware company yet — starting from lower baseline",
      "Brain drain of quantum talent to US and European programs",
      "₹6,000 crore over 8 years is modest relative to US, China, or UK investments",
      "Limited domestic quantum manufacturing infrastructure",
    ],
    policyHighlight:
      "India's National Quantum Mission (2023) targets development of intermediate-scale quantum computers (50–1000 qubits) by 2031, satellite-based quantum communication, and quantum sensing applications for defense and civilian use.",
    recentMilestone:
      "National Quantum Mission approved by Cabinet (2023) with ₹6,003 crore budget; IISc demonstrates early superconducting qubit research results",
    watchFor:
      "Whether NQM funding translates into competitive domestic hardware; India-US quantum technology cooperation under iCET framework",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    maturity: "Emerging",
    investment:
      "A$1B+ across federal programs and Silicon Quantum Computing Pty Ltd corporate investment",
    keyPlayers:
      "Silicon Quantum Computing (UNSW spinout), Diraq, Q-NEXT collaboration with US national labs",
    strengths: [
      "Silicon Quantum Computing pursuing silicon spin qubits — compatible with existing semiconductor fabs",
      "UNSW Sydney has been a world leader in silicon qubit research for over a decade",
      "Strong US research collaboration through Q-NEXT and Five Eyes intelligence sharing",
      "Diraq commercializing silicon spin qubit technology with major chip company partnerships",
      "Geographic and alliance position makes Australia a natural US quantum technology partner",
    ],
    challenges: [
      "No production-scale quantum hardware yet — still at research prototype stage",
      "Small domestic market and relatively limited government quantum investment",
      "Distance from major quantum hardware manufacturing ecosystems",
    ],
    policyHighlight:
      "Australia's quantum strategy emphasizes silicon spin qubit technology — a differentiated approach — and positions Australia as a technology partner within the AUKUS and Five Eyes frameworks.",
    recentMilestone:
      "Diraq announces partnership with GlobalFoundries for silicon qubit integration in CMOS processes (2025); Silicon Quantum Computing demonstrates 10-qubit silicon processor",
    watchFor:
      "Whether silicon spin qubits can leverage standard semiconductor manufacturing for scalability advantages; AUKUS quantum technology collaboration depth",
  },
];

const investmentData = [
  { country: "China 🇨🇳", amount: "$15B+", note: "Estimated, includes Hefei lab" },
  { country: "United States 🇺🇸", amount: "$3B+", note: "Federal only, excludes private" },
  { country: "Germany 🇩🇪", amount: "€2B+", note: "Part of EU Flagship" },
  { country: "France 🇫🇷", amount: "€1.8B", note: "National quantum plan" },
  { country: "United Kingdom 🇬🇧", amount: "£2.5B", note: "2023–2033 strategy" },
  { country: "EU Flagship 🇪🇺", amount: "€1B", note: "Shared across member states" },
  { country: "Japan 🇯🇵", amount: "$700M+", note: "Multiple programs" },
  { country: "India 🇮🇳", amount: "$720M", note: "NQM 2023–2031" },
  { country: "Canada 🇨🇦", amount: "C$360M", note: "National Quantum Strategy" },
  { country: "Australia 🇦🇺", amount: "A$1B+", note: "Federal + corporate" },
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
        Honest assessments of where each nation actually stands — investment
        figures, key players, real strengths and challenges, and what to watch.
        Not press-release claims.
      </p>

      {/* Investment overview */}
      <div className="rounded-xl border border-line bg-surface p-6 mb-12 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-4">
          Announced Government Investment (rough magnitudes — not directly comparable)
        </p>
        <div className="space-y-2">
          {investmentData.map((item) => (
            <div key={item.country} className="flex items-center gap-3">
              <span className="text-sm font-medium text-ink w-52 shrink-0">{item.country}</span>
              <span className="font-mono text-sm text-quantum font-bold w-24 shrink-0">{item.amount}</span>
              <span className="text-xs text-ink-soft">{item.note}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-ink-soft mt-4">
          Investment figures are not directly comparable — countries count differently (public only vs public+private, committed vs spent). Use as rough magnitude indicators only.
        </p>
      </div>

      {/* Quick comparison table */}
      <div className="overflow-x-auto mb-14">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink">Country</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Status</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Distinctive strength</th>
              <th className="text-left p-3 border border-line font-semibold text-ink">Key player</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((c, i) => (
              <tr key={c.name} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line font-semibold text-ink">
                  {c.flag} {c.name}
                </td>
                <td className="p-3 border border-line">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 ${
                      c.maturity === "Leading"
                        ? "text-quantum bg-quantum-50"
                        : c.maturity === "Active"
                        ? "text-collapse bg-collapse-50"
                        : "text-ink-muted bg-paper border border-line"
                    }`}
                  >
                    {c.maturity}
                  </span>
                </td>
                <td className="p-3 border border-line text-ink-muted text-xs">{c.strengths[0]}</td>
                <td className="p-3 border border-line text-ink-muted text-xs">
                  {c.keyPlayers.split(",")[0].trim()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed profiles */}
      <div className="space-y-8">
        {countries.map((c) => (
          <div key={c.name} className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                {c.flag} {c.name}
              </h2>
              <span
                className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-3 py-1 shrink-0 ${
                  c.maturity === "Leading"
                    ? "text-quantum bg-quantum-50"
                    : c.maturity === "Active"
                    ? "text-collapse bg-collapse-50"
                    : "text-ink-muted bg-paper border border-line"
                }`}
              >
                {c.maturity}
              </span>
            </div>
            <p className="font-mono text-xs text-quantum mb-4">{c.investment}</p>
            <p className="text-sm font-medium text-ink mb-1">Key players</p>
            <p className="text-sm text-ink-muted mb-5">{c.keyPlayers}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-2">
                  Strengths
                </p>
                <ul className="text-sm text-ink-muted space-y-1.5">
                  {c.strengths.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-quantum shrink-0 mt-0.5">→</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-collapse mb-2">
                  Challenges
                </p>
                <ul className="text-sm text-ink-muted space-y-1.5">
                  {c.challenges.map((ch) => (
                    <li key={ch} className="flex gap-2">
                      <span className="text-collapse shrink-0 mt-0.5">→</span>
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-paper border border-line p-4 mb-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-1">
                Policy context
              </p>
              <p className="text-sm text-ink-muted">{c.policyHighlight}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-quantum-50 p-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">
                  Recent milestone
                </p>
                <p className="text-sm text-ink-muted">{c.recentMilestone}</p>
              </div>
              <div className="rounded-lg bg-paper border border-line p-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-1">
                  Watch for
                </p>
                <p className="text-sm text-ink-muted">{c.watchFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/companies" className="text-quantum hover:underline">→ Companies Database</Link>
          <Link href="/hardware" className="text-quantum hover:underline">→ Hardware Database</Link>
          <Link href="/future" className="text-quantum hover:underline">→ Future Predictions</Link>
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            → Quantum for Cybersecurity
          </Link>
        </div>
      </div>
    </div>
  );
}
