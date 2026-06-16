export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  person?: string;
  category: "theory" | "algorithm" | "hardware" | "industry" | "cryptography";
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1900",
    title: "Birth of Quantum Theory",
    description:
      "Max Planck proposes that energy is emitted in discrete packets called 'quanta' to explain blackbody radiation — the first crack in classical physics and the foundation of all quantum mechanics to follow.",
    person: "Max Planck",
    category: "theory",
  },
  {
    year: "1905",
    title: "Photoelectric Effect Explained",
    description:
      "Albert Einstein explains the photoelectric effect by proposing that light itself travels in discrete packets (photons), extending quantum theory and earning him the 1921 Nobel Prize.",
    person: "Albert Einstein",
    category: "theory",
  },
  {
    year: "1913",
    title: "Bohr Model of the Atom",
    description:
      "Niels Bohr proposes a quantum model of the hydrogen atom with electrons occupying discrete energy levels — establishing the quantum nature of atomic structure.",
    person: "Niels Bohr",
    category: "theory",
  },
  {
    year: "1925",
    title: "Matrix Mechanics",
    description:
      "Werner Heisenberg develops matrix mechanics — the first complete formulation of quantum mechanics — describing physical observables as matrices rather than classical variables.",
    person: "Werner Heisenberg",
    category: "theory",
  },
  {
    year: "1926",
    title: "Wave Mechanics & the Schrödinger Equation",
    description:
      "Erwin Schrödinger develops wave mechanics and the equation bearing his name, describing how quantum states evolve over time. His 'Schrödinger's cat' thought experiment later becomes one of the most famous illustrations of quantum superposition.",
    person: "Erwin Schrödinger",
    category: "theory",
  },
  {
    year: "1927",
    title: "Uncertainty Principle",
    description:
      "Werner Heisenberg formulates the uncertainty principle: the more precisely you know a particle's position, the less precisely you can know its momentum, and vice versa. This is not a limitation of measurement tools but a fundamental property of nature.",
    person: "Werner Heisenberg",
    category: "theory",
  },
  {
    year: "1935",
    title: "EPR Paradox & Entanglement",
    description:
      "Einstein, Podolsky, and Rosen publish the EPR paper, arguing quantum mechanics is incomplete and proposing the existence of 'hidden variables.' Schrödinger coins the term 'entanglement' in response, recognizing it as quantum mechanics' most distinctive feature.",
    person: "Einstein, Podolsky, Rosen & Schrödinger",
    category: "theory",
  },
  {
    year: "1964",
    title: "Bell's Theorem",
    description:
      "John Bell proves that if hidden variables exist, quantum measurements must obey certain statistical limits (Bell inequalities). Any violation of these limits would prove quantum entanglement is real — setting up decades of experiments.",
    person: "John Bell",
    category: "theory",
  },
  {
    year: "1981",
    title: "Feynman Proposes Quantum Computers",
    description:
      "Richard Feynman delivers his landmark lecture 'Simulating Physics with Computers,' arguing that classical computers cannot efficiently simulate quantum systems, and proposing that a computer built on quantum principles could. This is the conceptual birth of quantum computing.",
    person: "Richard Feynman",
    category: "theory",
  },
  {
    year: "1982",
    title: "No-Cloning Theorem",
    description:
      "Wootters, Zurek, and Dieks independently prove the no-cloning theorem: it is impossible to create an identical copy of an unknown quantum state. This result is fundamental to quantum cryptography and error correction.",
    person: "Wootters, Zurek & Dieks",
    category: "theory",
  },
  {
    year: "1984",
    title: "First Quantum Cryptography Protocol (BB84)",
    description:
      "Charles Bennett and Gilles Brassard publish BB84 — the first quantum key distribution protocol — showing that quantum mechanics can be used to create provably secure communication channels.",
    person: "Bennett & Brassard",
    category: "cryptography",
  },
  {
    year: "1985",
    title: "Universal Quantum Computer Concept",
    description:
      "David Deutsch formalizes the concept of a universal quantum computer — a quantum Turing machine that can simulate any physical process. He also introduces the first quantum algorithm (for the Deutsch problem), showing a provable quantum speedup.",
    person: "David Deutsch",
    category: "theory",
  },
  {
    year: "1991",
    title: "E91 Quantum Cryptography Protocol",
    description:
      "Artur Ekert proposes the E91 protocol for quantum key distribution based on entangled particle pairs and Bell inequalities — connecting quantum information to the foundations of quantum mechanics.",
    person: "Artur Ekert",
    category: "cryptography",
  },
  {
    year: "1994",
    title: "Shor's Algorithm",
    description:
      "Peter Shor develops an algorithm that a quantum computer could use to factor large numbers exponentially faster than any known classical algorithm — directly threatening RSA encryption and triggering major government and industry interest in quantum computing.",
    person: "Peter Shor",
    category: "algorithm",
  },
  {
    year: "1995",
    title: "First Qubit Realized",
    description:
      "The first experimental realization of a single qubit is demonstrated using a trapped ion, marking the transition from quantum computing as a purely theoretical field to one with experimental foundations.",
    category: "hardware",
  },
  {
    year: "1996",
    title: "Grover's Search Algorithm",
    description:
      "Lov Grover publishes a quantum algorithm that searches unsorted data in O(√N) steps — a quadratic speedup over classical search. Though less dramatic than Shor's exponential speedup, its broad applicability makes it one of quantum computing's most important tools.",
    person: "Lov Grover",
    category: "algorithm",
  },
  {
    year: "1998",
    title: "First 2-Qubit Quantum Computer",
    description:
      "Researchers demonstrate the first small quantum computers, executing simple algorithms. Groups at MIT, Oxford, and IBM begin demonstrating quantum operations on 2-qubit systems using NMR (nuclear magnetic resonance) techniques.",
    category: "hardware",
  },
  {
    year: "2001",
    title: "Shor's Algorithm Demonstrated (15 = 3 × 5)",
    description:
      "IBM researchers implement Shor's Algorithm on a 7-qubit NMR quantum computer, successfully factoring the number 15 into 3 × 5 — the first experimental demonstration of Shor's Algorithm.",
    category: "hardware",
  },
  {
    year: "2007",
    title: "D-Wave's First Commercial Quantum Annealer",
    description:
      "D-Wave Systems announces the first commercially available quantum computer — a 16-qubit quantum annealer. While controversial (debate about whether it achieves true quantum speedup persists), it marks the first step toward commercial quantum hardware.",
    category: "industry",
  },
  {
    year: "2011",
    title: "D-Wave One Sold to Lockheed Martin",
    description:
      "D-Wave sells its 128-qubit D-Wave One system to Lockheed Martin — the first commercial sale of a quantum computer. Though the machine's quantumness remained debated, the sale marks quantum computing entering the commercial world.",
    category: "industry",
  },
  {
    year: "2016",
    title: "IBM Quantum Experience Launches",
    description:
      "IBM launches IBM Quantum Experience, the world's first cloud-accessible quantum computer — putting a 5-qubit quantum processor in the hands of researchers and developers worldwide via the internet. This democratized access to real quantum hardware.",
    category: "industry",
  },
  {
    year: "2017",
    title: "IBM 50-Qubit Processor",
    description:
      "IBM demonstrates a 50-qubit quantum processor — at the time the largest superconducting qubit system ever built — and makes a 20-qubit system available via the cloud. Quantum computing enters the 'intermediate scale' era.",
    category: "hardware",
  },
  {
    year: "2018",
    title: "NISQ Era Named",
    description:
      "John Preskill coins the term 'NISQ' (Noisy Intermediate-Scale Quantum) to describe the current generation of quantum computers — too noisy for full error correction, but large enough to be potentially useful for specific problems.",
    person: "John Preskill",
    category: "theory",
  },
  {
    year: "2019",
    title: "Google Claims Quantum Supremacy",
    description:
      "Google announces its 53-qubit Sycamore processor performed a random circuit sampling task in 200 seconds that would take a classical supercomputer approximately 10,000 years — claiming 'quantum supremacy.' IBM contests the claim. The debate highlights challenges in benchmarking quantum vs classical performance.",
    category: "hardware",
  },
  {
    year: "2021",
    title: "IBM Eagle: 127-Qubit Processor",
    description:
      "IBM unveils Eagle, a 127-qubit quantum processor — the first to exceed 100 qubits. IBM also publishes its detailed quantum development roadmap, committing to specific qubit milestones through 2025.",
    category: "hardware",
  },
  {
    year: "2022",
    title: "IBM Osprey: 433 Qubits",
    description:
      "IBM releases Osprey with 433 qubits, more than tripling Eagle's count. IonQ goes public on the NYSE — becoming the first pure-play quantum computing company to be publicly traded.",
    category: "hardware",
  },
  {
    year: "2023",
    title: "IBM Condor (1,121 Qubits) & Heron",
    description:
      "IBM releases Condor, the first quantum processor to exceed 1,000 qubits (1,121), alongside Heron — a smaller but significantly higher-fidelity processor using tunable couplers to reduce crosstalk. The era of four-figure qubit counts begins.",
    category: "hardware",
  },
  {
    year: "2024",
    title: "NIST Post-Quantum Cryptography Standards Finalized",
    description:
      "NIST finalizes its first post-quantum cryptography standards, including CRYSTALS-Kyber and CRYSTALS-Dilithium — marking the beginning of the internet's transition to quantum-resistant encryption, well ahead of large-scale quantum computers arriving.",
    category: "cryptography",
  },
  {
    year: "2025",
    title: "Race to Fault-Tolerant Quantum Computing",
    description:
      "Major players — IBM, Google, Microsoft, IonQ — intensify efforts toward fault-tolerant quantum computing. Microsoft demonstrates early topological qubit results. The focus shifts from qubit count to qubit quality and the path to logical qubits with full error correction.",
    category: "hardware",
  },
];
