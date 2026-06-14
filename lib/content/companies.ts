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
];

export function getCompanyBySlug(slug: string) {
  return companies.find((c) => c.slug === slug);
}
