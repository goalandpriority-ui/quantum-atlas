export type Company = {
  slug: string;
  name: string;
  founded: string;
  ceo: string;
  headquarters: string;
  technology: string;
  summary: string;
  products: string[];
  funding: string;
  latestNews: { title: string; date: string }[];
};

export const companies: Company[] = [
  {
    slug: "ibm",
    name: "IBM",
    founded: "1911 (Quantum division est. ~2016)",
    ceo: "Arvind Krishna",
    headquarters: "Armonk, New York, USA",
    technology: "Superconducting qubits",
    summary:
      "IBM operates one of the world's largest fleets of cloud-accessible quantum computers and has published a long-term roadmap toward fault-tolerant, error-corrected quantum systems through its IBM Quantum division.",
    products: ["IBM Quantum Experience (cloud access)", "Qiskit (open-source SDK)", "IBM Condor processor"],
    funding: "Publicly traded (NYSE: IBM)",
    latestNews: [
      { title: "IBM outlines next milestones on path to fault-tolerant quantum computing", date: "2026" },
    ],
  },
  {
    slug: "google",
    name: "Google (Google Quantum AI)",
    founded: "Quantum AI team established ~2012",
    ceo: "Sundar Pichai (Alphabet); Hartmut Neven (Quantum AI lead)",
    headquarters: "Mountain View, California, USA",
    technology: "Superconducting qubits",
    summary:
      "Google Quantum AI is known for its Sycamore processor and early demonstrations of 'quantum supremacy,' and continues to develop superconducting processors aimed at error correction breakthroughs.",
    products: ["Sycamore processor", "Cirq (open-source framework)"],
    funding: "Subsidiary of Alphabet Inc. (NASDAQ: GOOGL)",
    latestNews: [
      { title: "Google Quantum AI publishes new error-correction results", date: "2026" },
    ],
  },
  {
    slug: "microsoft",
    name: "Microsoft",
    founded: "Quantum research program est. ~2005",
    ceo: "Satya Nadella",
    headquarters: "Redmond, Washington, USA",
    technology: "Topological qubits (experimental)",
    summary:
      "Microsoft pursues a topological approach to qubits aimed at inherently lower error rates, alongside its Azure Quantum cloud platform offering access to hardware from multiple partners.",
    products: ["Azure Quantum", "Q# programming language"],
    funding: "Publicly traded (NASDAQ: MSFT)",
    latestNews: [
      { title: "Microsoft shares progress on topological qubit research", date: "2026" },
    ],
  },
  {
    slug: "ionq",
    name: "IonQ",
    founded: "2015",
    ceo: "Niccolo de Masi",
    headquarters: "College Park, Maryland, USA",
    technology: "Trapped-ion qubits",
    summary:
      "IonQ builds trapped-ion quantum computers, offering cloud access through major platforms and pursuing applications in chemistry, optimization, and machine learning.",
    products: ["IonQ Forte", "IonQ Tempo"],
    funding: "Publicly traded (NYSE: IONQ)",
    latestNews: [
      { title: "IonQ announces new partnership for enterprise quantum applications", date: "2026" },
    ],
  },
  {
    slug: "rigetti",
    name: "Rigetti Computing",
    founded: "2013",
    ceo: "Subodh Kulkarni",
    headquarters: "Berkeley, California, USA",
    technology: "Superconducting qubits",
    summary:
      "Rigetti Computing designs and fabricates superconducting quantum processors and offers full-stack cloud access for developers and researchers.",
    products: ["Novera QPU", "Rigetti Quantum Cloud Services"],
    funding: "Publicly traded (NASDAQ: RGTI)",
    latestNews: [
      { title: "Rigetti reports progress on next-generation chip fidelity", date: "2026" },
    ],
  },
  {
    slug: "quantinuum",
    name: "Quantinuum",
    founded: "2021 (merger of Cambridge Quantum and Honeywell Quantum Solutions)",
    ceo: "Rajeeb (Raj) Hazra",
    headquarters: "Broomfield, Colorado, USA",
    technology: "Trapped-ion qubits (QCCD architecture)",
    summary:
      "Quantinuum, formed from the 2021 merger of Honeywell Quantum Solutions and Cambridge Quantum, builds trapped-ion quantum computers using a quantum charge-coupled device (QCCD) architecture and has repeatedly set records for two-qubit gate fidelity. The company completed its initial public offering on the Nasdaq in June 2026.",
    products: ["System Model H2", "System Model H1", "TKET (quantum software development kit)"],
    funding: "Publicly traded (Nasdaq: QNT); completed IPO June 2026",
    latestNews: [
      { title: "Quantinuum completes Nasdaq IPO under ticker QNT", date: "2026" },
    ],
  },
  {
    slug: "d-wave",
    name: "D-Wave Quantum",
    founded: "1999",
    ceo: "Alan Baratz",
    headquarters: "Palo Alto, California, USA (expanding Florida operations)",
    technology: "Quantum annealing (superconducting flux qubits); also developing gate-model systems",
    summary:
      "D-Wave was the world's first commercial supplier of quantum computers, specializing in quantum annealing hardware designed specifically for optimization problems. The company is now also expanding into gate-model quantum computing, including through its 2026 acquisition of Quantum Circuits.",
    products: ["Advantage2 annealing system", "Leap quantum cloud service", "Dual-rail gate-model system (in development)"],
    funding: "Publicly traded (NYSE: QBTS)",
    latestNews: [
      { title: "D-Wave acquires Quantum Circuits to accelerate gate-model roadmap", date: "2026" },
    ],
  },
  {
    slug: "xanadu",
    name: "Xanadu Quantum Technologies",
    founded: "2016",
    ceo: "Christian Weedbrook",
    headquarters: "Toronto, Canada",
    technology: "Photonic qubits (continuous-variable, squeezed light states)",
    summary:
      "Xanadu builds photonic quantum computers that use light rather than matter-based qubits, an approach that can operate near room temperature and may benefit from existing semiconductor photonic manufacturing techniques. The company became the first publicly traded pure-play photonic quantum computing company via a 2026 SPAC merger.",
    products: ["Borealis photonic processor", "Aurora modular photonic system", "PennyLane (open-source quantum ML framework)"],
    funding: "Publicly traded (NASDAQ/TSX: XNDU)",
    latestNews: [
      { title: "Xanadu demonstrates 12 logical GKP qubits on its Aurora system", date: "2026" },
    ],
  },
  {
    slug: "pasqal",
    name: "Pasqal",
    founded: "2019",
    ceo: "Wasiq Bokhari",
    headquarters: "Paris, France",
    technology: "Neutral atom qubits (optical tweezers)",
    summary:
      "Pasqal builds neutral atom quantum processors that hold individual atoms in place using precisely focused laser beams, allowing programmable, reconfigurable qubit connectivity. The company has announced plans to go public on Nasdaq via a SPAC merger.",
    products: ["Fresnel processor", "Pasqal Cloud"],
    funding: "Privately funded; Nasdaq listing announced for 2026 via SPAC merger",
    latestNews: [
      { title: "Pasqal files for Nasdaq listing via SPAC merger", date: "2026" },
    ],
  },
  {
    slug: "origin-quantum",
    name: "Origin Quantum",
    founded: "2017",
    ceo: "Guo Guoping (co-founder); Guo Guangcan (co-founder)",
    headquarters: "Hefei, Anhui Province, China",
    technology: "Superconducting qubits",
    summary:
      "Origin Quantum is China's first and most prominent quantum computing company, building its entire technology stack in-house — from quantum chips and dilution refrigerators to its own operating system and cloud platform. Its Origin Wukong processor is among the most advanced quantum computers developed in China.",
    products: ["Origin Wukong processor", "Origin Pilot (quantum operating system)", "Origin Quantum Cloud Platform"],
    funding: "Privately funded by Chinese state-linked investors; IPO counseling underway for Shanghai STAR Market listing",
    latestNews: [
      { title: "Origin Quantum open-sources Origin Pilot, described as the first publicly downloadable quantum OS", date: "2026" },
    ],
  },
];

export function getCompanyBySlug(slug: string) {
  return companies.find((c) => c.slug === slug);
}
