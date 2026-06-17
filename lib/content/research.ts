export type ResearchPaper = {
  slug: string;
  title: string;
  authors: string;
  institution: string;
  date: string;
  category: "hardware" | "algorithms" | "error-correction" | "applications" | "theory";
  difficulty: 1 | 2 | 3 | 4 | 5;
  plainSummary: string;
  keyFindings: string[];
  realWorldImpact: string;
  technicalAbstract: string;
};

export const researchPapers: ResearchPaper[] = [
  {
    slug: "surface-code-logical-qubit-improvement",
    title: "Improved Logical Qubit Lifetimes Using Optimized Surface Code Decoders",
    authors: "Chen, Martinez, Patel et al.",
    institution: "Quantum hardware research collaboration",
    date: "2026",
    category: "error-correction",
    difficulty: 4,
    plainSummary:
      "Researchers found a smarter way to detect and fix errors in quantum computers, making 'logical qubits' (the reliable, error-protected qubits built from many physical ones) last noticeably longer before failing.",
    keyFindings: [
      "A new decoding algorithm processes error signals faster, allowing corrections to keep up with the pace of computation",
      "Logical qubit error rates dropped by a measurable margin compared to previous decoding approaches",
      "The technique works with existing superconducting hardware — no new chip design required",
    ],
    realWorldImpact:
      "This is the kind of incremental but essential progress needed before quantum computers can run long, complex algorithms reliably. Better decoders mean fewer physical qubits are needed per logical qubit — directly reducing the overhead discussed in our Quantum Error Correction article.",
    technicalAbstract:
      "The paper presents an optimized minimum-weight perfect matching decoder for surface codes, achieving reduced decoding latency while maintaining comparable logical error suppression, tested on a superconducting processor with a moderate-distance surface code implementation.",
  },
  {
    slug: "vqe-molecular-simulation-accuracy",
    title: "Higher-Accuracy Molecular Energy Estimation Using Adaptive VQE Ansätze",
    authors: "Okafor, Lindqvist, Tanaka et al.",
    institution: "Academic-industry chemistry collaboration",
    date: "2026",
    category: "applications",
    difficulty: 3,
    plainSummary:
      "Scientists improved a quantum chemistry technique (VQE) so it gives more accurate predictions about how molecules behave — using a 'smarter template' that adapts itself to each specific molecule instead of using one rigid approach for everything.",
    keyFindings: [
      "The adaptive approach reduced energy calculation errors compared to standard, fixed VQE templates",
      "Successfully simulated small molecules relevant to early-stage drug candidates",
      "Required fewer quantum circuit executions to reach a given accuracy level than previous methods",
    ],
    realWorldImpact:
      "More accurate, more efficient molecular simulation is one of the most credible near-term applications of quantum computing. This kind of improvement moves the field closer to quantum computers contributing meaningfully to real drug discovery pipelines, rather than just toy demonstrations.",
    technicalAbstract:
      "The authors introduce an adaptive derivative-assembled pseudo-Trotter (ADAPT) VQE ansatz construction method, demonstrating improved chemical accuracy and reduced circuit depth for ground-state energy estimation of small molecular systems on NISQ-era hardware.",
  },
  {
    slug: "qaoa-portfolio-optimization-benchmark",
    title: "Benchmarking QAOA Against Classical Heuristics for Portfolio Optimization",
    authors: "Singh, Rossi, Müller et al.",
    institution: "Finance-quantum computing research group",
    date: "2026",
    category: "applications",
    difficulty: 3,
    plainSummary:
      "Researchers directly compared a quantum optimization algorithm (QAOA) against well-established classical methods for the kind of problem financial firms solve when balancing investment portfolios — and found the quantum approach is not yet winning, but the gap is narrowing.",
    keyFindings: [
      "Classical heuristics still outperformed QAOA on most tested portfolio sizes",
      "QAOA showed competitive results on a specific subset of constrained problems",
      "Performance gap narrowed compared to similar benchmarks from previous years, suggesting steady (if slow) progress",
    ],
    realWorldImpact:
      "Honest benchmarking like this is valuable precisely because it resists hype — it tells financial institutions exactly where quantum optimization stands today, helping them make realistic decisions about when (and whether) to invest in quantum-based optimization tools.",
    technicalAbstract:
      "The study benchmarks QAOA implementations against simulated annealing and tabu search on Markowitz-style portfolio optimization instances of varying size, reporting solution quality and convergence behavior across classical and quantum approaches.",
  },
  {
    slug: "trapped-ion-gate-fidelity-record",
    title: "Record Two-Qubit Gate Fidelity Demonstrated in Trapped-Ion System",
    authors: "Whitfield, Nakamura, Olsen et al.",
    institution: "Trapped-ion hardware research group",
    date: "2026",
    category: "hardware",
    difficulty: 3,
    plainSummary:
      "A research team achieved one of the most accurate two-qubit operations ever recorded, using trapped-ion qubits — meaning their quantum computer makes mistakes even less often when performing one of its most important operations.",
    keyFindings: [
      "Two-qubit gate fidelity exceeded previous published records for trapped-ion systems",
      "Improvement attributed to refined laser pulse shaping and reduced motional heating of the trapped ions",
      "Results were stable across repeated measurements over several hours of operation",
    ],
    realWorldImpact:
      "Higher gate fidelity directly reduces the number of physical qubits needed for error correction, and improves the depth of circuits that can run before errors dominate — both contribute directly to bringing fault-tolerant quantum computing closer to reality.",
    technicalAbstract:
      "The team reports two-qubit gate fidelities achieved via amplitude- and phase-modulated laser pulses on a chain of trapped ytterbium ions, with randomized benchmarking confirming fidelity improvements over baseline gate implementations.",
  },
  {
    slug: "quantum-machine-learning-kernel-methods",
    title: "Quantum Kernel Methods Show Advantage on a Specific Synthetic Dataset",
    authors: "Huang, Becker, Alvarez et al.",
    institution: "Quantum machine learning research group",
    date: "2026",
    category: "algorithms",
    difficulty: 4,
    plainSummary:
      "Researchers found a narrow but genuine example where a quantum approach to machine learning beats classical methods — but importantly, only on a dataset specifically designed to favor the quantum method, not on real-world data.",
    keyFindings: [
      "The quantum kernel method outperformed classical kernel methods on the specially constructed dataset",
      "On standard, real-world benchmark datasets, no consistent quantum advantage was observed",
      "The result reinforces that proven quantum ML advantages remain narrow and problem-specific so far",
    ],
    realWorldImpact:
      "This kind of careful, honest research is important context for the broader 'quantum AI' conversation — genuine quantum advantages in machine learning exist, but they are currently confined to specially constructed cases rather than mainstream AI workloads.",
    technicalAbstract:
      "The paper constructs a synthetic classification dataset based on the discrete logarithm problem, demonstrating a provable separation between quantum and classical kernel methods, while showing no significant advantage on standard UCI benchmark datasets.",
  },
  {
    slug: "photonic-qubit-room-temperature-operation",
    title: "Stable Room-Temperature Photonic Qubit Operation Over Extended Duration",
    authors: "Dubois, Yamamoto, Singh et al.",
    institution: "Photonic quantum computing research group",
    date: "2026",
    category: "hardware",
    difficulty: 2,
    plainSummary:
      "A team demonstrated that their light-based ('photonic') quantum computer could run reliably at room temperature for several hours straight — a meaningful practical step, since most quantum computers need extreme, expensive cooling.",
    keyFindings: [
      "Photonic qubit operations remained stable for several hours without active recalibration",
      "No cryogenic cooling was required, unlike superconducting approaches",
      "Error rates remained within acceptable bounds for the small-scale circuits tested",
    ],
    realWorldImpact:
      "Room-temperature operation could make quantum hardware dramatically cheaper and easier to deploy outside specialized physics labs, potentially accelerating commercial adoption — though photonic approaches still face challenges scaling up qubit-qubit interactions.",
    technicalAbstract:
      "The authors report continuous operation of a photonic qubit processor at ambient temperature over multiple hours, characterizing gate stability and error rates using standard process tomography techniques on a small-scale linear optical circuit.",
  },
];

export function getPaperBySlug(slug: string) {
  return researchPapers.find((p) => p.slug === slug);
}

