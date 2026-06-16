export type QuantumProcessor = {
  slug: string;
  name: string;
  company: string;
  companySlug: string;
  qubitCount: number;
  qubitType: string;
  architecture: string;
  releaseYear: string;
  connectivity: string;
  gateError: string;
  coherenceTime: string;
  operatingTemp: string;
  cloudAccess: boolean;
  cloudPlatform?: string;
  summary: string;
  keyFeatures: string[];
  limitations: string[];
  technicalNotes: string;
};

export const processors: QuantumProcessor[] = [
  {
    slug: "ibm-condor",
    name: "IBM Condor",
    company: "IBM",
    companySlug: "ibm",
    qubitCount: 1121,
    qubitType: "Superconducting (transmon qubits)",
    architecture: "Heavy-hex lattice",
    releaseYear: "2023",
    connectivity: "Heavy-hex — each qubit connects to 2 or 3 neighbors in a hexagonal pattern",
    gateError: "~0.1–0.3% per two-qubit gate (CNOT)",
    coherenceTime: "T₁ ~300 µs, T₂ ~200 µs",
    operatingTemp: "~15 millikelvin (inside dilution refrigerator)",
    cloudAccess: true,
    cloudPlatform: "IBM Quantum (cloud.ibm.com)",
    summary:
      "IBM Condor was the world's first quantum processor to exceed 1,000 qubits at the time of its announcement in late 2023. Part of IBM's aggressive processor roadmap, it represents a significant milestone in scaling superconducting qubit systems while maintaining reasonable gate fidelity across the full device.",
    keyFeatures: [
      "1,121 qubits — first processor to exceed 1,000",
      "Heavy-hex connectivity optimized to reduce error propagation",
      "Designed for error mitigation research and algorithm exploration at scale",
      "Fabricated using advanced semiconductor-compatible processes",
    ],
    limitations: [
      "High qubit count does not yet translate to full fault tolerance — physical error rates remain above the fault-tolerant threshold without error correction",
      "Coherence times limit circuit depth for complex algorithms",
      "Not all qubits equally connected — heavy-hex limits some gate combinations",
    ],
    technicalNotes:
      "Condor uses IBM's 'heavy-hex' lattice topology, where qubits are arranged so each connects to at most 3 neighbors. This reduces the number of error pathways compared to a fully-connected grid, improving overall device reliability at scale.",
  },
  {
    slug: "ibm-heron",
    name: "IBM Heron (r1)",
    company: "IBM",
    companySlug: "ibm",
    qubitCount: 133,
    qubitType: "Superconducting (fixed-frequency transmon qubits)",
    architecture: "Heavy-hex lattice with tunable couplers",
    releaseYear: "2023",
    connectivity: "Heavy-hex with tunable couplers between adjacent qubits",
    gateError: "~0.04–0.1% per two-qubit gate — IBM's best gate fidelity at release",
    coherenceTime: "T₁ ~300 µs, T₂ ~150 µs",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "IBM Quantum (cloud.ibm.com)",
    summary:
      "Released alongside Condor, IBM Heron represents IBM's highest-performance processor at the time — prioritizing gate fidelity over raw qubit count. Heron introduced tunable couplers between qubits, significantly reducing crosstalk (unwanted interactions between neighboring qubits) compared to previous IBM designs.",
    keyFeatures: [
      "Tunable couplers — allows qubits to be selectively coupled or decoupled, dramatically reducing crosstalk",
      "Best two-qubit gate error rates in IBM's lineup at release (~3–5× better than previous generation)",
      "Designed as the building block for IBM's modular, multi-chip architecture",
      "Supports quantum error correction experiments at small scale",
    ],
    limitations: [
      "Only 133 qubits — much smaller than Condor",
      "Tunable couplers add control complexity",
    ],
    technicalNotes:
      "Heron's tunable couplers are one of its most important innovations. Previous IBM processors used fixed couplings between qubits, meaning unwanted interactions were always present. Tunable couplers allow the interaction strength to be turned on and off, reducing errors significantly during idle periods.",
  },
  {
    slug: "google-sycamore",
    name: "Google Sycamore",
    company: "Google (Google Quantum AI)",
    companySlug: "google",
    qubitCount: 53,
    qubitType: "Superconducting (transmon qubits)",
    architecture: "2D grid with nearest-neighbor connectivity",
    releaseYear: "2019",
    connectivity: "2D rectangular grid — each qubit connects to 4 nearest neighbors",
    gateError: "~0.6% per two-qubit gate (at time of release)",
    coherenceTime: "T₁ ~50 µs, T₂ ~70 µs (at time of release)",
    operatingTemp: "~20 millikelvin",
    cloudAccess: false,
    summary:
      "Google Sycamore achieved global recognition in 2019 when Google claimed it had achieved 'quantum supremacy' — completing a random circuit sampling task in 200 seconds that Google estimated would take the world's best supercomputer approximately 10,000 years. The claim was later contested, but Sycamore remains a landmark in quantum computing history.",
    keyFeatures: [
      "First processor associated with a credible 'quantum supremacy' claim",
      "Programmable superconducting processor with 53 active qubits (54 qubits fabricated, one non-functional)",
      "2D grid architecture enabling nearest-neighbor two-qubit gates",
      "Demonstrated random circuit sampling at scale",
    ],
    limitations: [
      "IBM and others later argued classical simulation of Sycamore's task was achievable in days, not 10,000 years, with improved classical algorithms",
      "Not available for public cloud access",
      "Relatively low qubit count and shorter coherence times by today's standards",
    ],
    technicalNotes:
      "The 'quantum supremacy' debate around Sycamore highlighted a key challenge in benchmarking: as classical simulation algorithms improve, the threshold for what counts as 'hard for a classical computer' shifts. The scientific value of the demonstration was in proving large-scale superconducting control, not the specific task chosen.",
  },
  {
    slug: "ionq-forte",
    name: "IonQ Forte",
    company: "IonQ",
    companySlug: "ionq",
    qubitCount: 32,
    qubitType: "Trapped-ion (ytterbium ions)",
    architecture: "Linear ion trap with all-to-all connectivity",
    releaseYear: "2023",
    connectivity: "All-to-all — any qubit can directly interact with any other qubit",
    gateError: "~0.1% per two-qubit gate",
    coherenceTime: "T₂ > 1 second (trapped ions have much longer coherence than superconducting)",
    operatingTemp: "Room temperature (ion trap operates in vacuum, not cryogenic)",
    cloudAccess: true,
    cloudPlatform: "AWS Braket, Azure Quantum, Google Cloud",
    summary:
      "IonQ Forte is IonQ's flagship trapped-ion quantum computer, offering 32 algorithmic qubits with all-to-all connectivity and significantly longer coherence times than superconducting alternatives. Trapped-ion systems like Forte are often seen as complementary to superconducting approaches, excelling in fidelity and coherence at the cost of slower gate speeds.",
    keyFeatures: [
      "All-to-all qubit connectivity — any qubit can interact with any other, simplifying circuit compilation",
      "Long coherence times (seconds vs microseconds for superconducting qubits)",
      "High gate fidelity — among the best available commercially",
      "Available across multiple major cloud platforms",
      "No cryogenic cooling required — operates in a compact vacuum chamber at room temperature",
    ],
    limitations: [
      "Gate operations are slower than superconducting qubits (microseconds vs nanoseconds)",
      "32 qubits — fewer than leading superconducting systems",
      "Scaling to large qubit numbers while maintaining all-to-all connectivity is an engineering challenge",
    ],
    technicalNotes:
      "IonQ measures performance using 'algorithmic qubits' — a metric that accounts for both qubit count and gate fidelity to estimate how complex an algorithm the device can reliably run. Forte's 32 algorithmic qubits compare favorably to much larger superconducting processors with lower fidelity.",
  },
  {
    slug: "rigetti-novera",
    name: "Rigetti Novera QPU",
    company: "Rigetti Computing",
    companySlug: "rigetti",
    qubitCount: 9,
    qubitType: "Superconducting (tunable transmon qubits)",
    architecture: "Square lattice",
    releaseYear: "2023",
    connectivity: "Nearest-neighbor square grid",
    gateError: "~1–2% per two-qubit gate",
    coherenceTime: "T₁ ~40–80 µs",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "Rigetti Quantum Cloud Services (QCS)",
    summary:
      "The Rigetti Novera is notable for being the first commercially purchasable quantum processing unit (QPU) — allowing research institutions and companies to own and operate a quantum processor on-premise rather than relying solely on cloud access. With 9 qubits, it's designed for research, education, and quantum error correction experimentation.",
    keyFeatures: [
      "First commercially purchasable QPU — buy and operate on-premise",
      "Designed for quantum error correction research and education",
      "Full control over the hardware — not limited by cloud access constraints",
      "Comes with Rigetti's full software stack (Quil, pyQuil, QCS)",
    ],
    limitations: [
      "Only 9 qubits — not suitable for large-scale algorithm demonstrations",
      "Higher gate error rates than leading research systems",
      "Requires significant supporting infrastructure (dilution refrigerator, control electronics)",
    ],
    technicalNotes:
      "The Novera's significance is primarily commercial and educational rather than raw performance — it opens the possibility of on-premise quantum computing for the first time, which matters for organizations with security, latency, or customization requirements that cloud access cannot meet.",
  },
];

export function getProcessorBySlug(slug: string) {
  return processors.find((p) => p.slug === slug);
}
