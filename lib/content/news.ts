export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  category: "hardware" | "research" | "industry" | "policy";
  companySlug?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "ibm-fault-tolerant-roadmap",
    title: "IBM outlines next milestones on path to fault-tolerant quantum computing",
    summary:
      "IBM detailed its updated roadmap toward large-scale fault-tolerant quantum computing, emphasizing improvements in logical qubit count and error correction overhead ahead of its planned milestones.",
    source: "IBM Research",
    date: "2026",
    category: "hardware",
    companySlug: "ibm",
  },
  {
    slug: "google-error-correction-results",
    title: "Google Quantum AI publishes new error-correction results",
    summary:
      "Google Quantum AI shared new experimental results demonstrating improved logical error rates using surface code error correction, a key step toward larger-scale fault-tolerant systems.",
    source: "Google Quantum AI",
    date: "2026",
    category: "research",
    companySlug: "google",
  },
  {
    slug: "ionq-enterprise-partnership",
    title: "IonQ announces new partnership for enterprise quantum applications",
    summary:
      "IonQ announced a new enterprise partnership focused on exploring quantum-enhanced optimization and simulation use cases across logistics and materials science.",
    source: "IonQ",
    date: "2026",
    category: "industry",
    companySlug: "ionq",
  },
  {
    slug: "microsoft-topological-progress",
    title: "Microsoft shares progress on topological qubit research",
    summary:
      "Microsoft published updated research on its topological qubit approach, reporting incremental progress toward the error-resistant qubits central to its long-term quantum strategy.",
    source: "Microsoft",
    date: "2026",
    category: "research",
    companySlug: "microsoft",
  },
  {
    slug: "rigetti-chip-fidelity",
    title: "Rigetti reports progress on next-generation chip fidelity",
    summary:
      "Rigetti Computing detailed improvements in two-qubit gate fidelity on its next-generation superconducting processor, narrowing the gap with leading competitors.",
    source: "Rigetti Computing",
    date: "2026",
    category: "hardware",
    companySlug: "rigetti",
  },
  {
    slug: "nist-pqc-migration-guidance",
    title: "NIST issues updated guidance on post-quantum cryptography migration timelines",
    summary:
      "Following its 2024 standardization of post-quantum algorithms, NIST released further guidance encouraging organizations to accelerate migration timelines for critical infrastructure systems.",
    source: "NIST",
    date: "2026",
    category: "policy",
  },
  {
    slug: "quantum-funding-report",
    title: "Global quantum computing investment continues to climb, report finds",
    summary:
      "A new industry report tracking venture capital and government funding found continued year-over-year growth in quantum computing investment, with hardware startups capturing the largest share.",
    source: "Industry Report",
    date: "2026",
    category: "industry",
  },
  {
    slug: "vqe-chemistry-demonstration",
    title: "Researchers demonstrate improved VQE accuracy for small molecule simulation",
    summary:
      "A research team published results showing improved accuracy using the Variational Quantum Eigensolver for simulating small molecules, a promising near-term application for NISQ-era hardware.",
    source: "Academic Research",
    date: "2026",
    category: "research",
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((n) => n.slug === slug);
}

