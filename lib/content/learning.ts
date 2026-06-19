export type LearningArticle = {
  slug: string;
  title: string;
  summary: string;
  available: boolean;
};

export type LearningLevel = {
  level: number;
  title: string;
  description: string;
  articles: LearningArticle[];
};

export const learningLevels: LearningLevel[] = [
  {
    level: 1,
    title: "Foundations",
    description: "Start here if you're completely new to quantum computing.",
    articles: [
      {
        slug: "what-is-quantum-computing",
        title: "What is Quantum Computing?",
        summary: "A plain-language introduction to what quantum computers are and aren't.",
        available: true,
      },
      {
        slug: "what-is-a-qubit",
        title: "What is a Qubit?",
        summary: "The fundamental unit of quantum information, explained from scratch.",
        available: true,
      },
      {
        slug: "bit-vs-qubit",
        title: "Difference Between Bit & Qubit",
        summary: "A side-by-side comparison of classical and quantum information units.",
        available: true,
      },
    ],
  },
  {
    level: 2,
    title: "Core Principles",
    description: "The quantum phenomena that make quantum computing possible.",
    articles: [
      {
        slug: "superposition",
        title: "Superposition",
        summary: "How a qubit can be 0 and 1 at the same time.",
        available: true,
      },
      {
        slug: "entanglement",
        title: "Entanglement",
        summary: "The strange correlation between particles that puzzled Einstein.",
        available: true,
      },
      {
        slug: "quantum-gates",
        title: "Quantum Gates",
        summary: "The operations used to manipulate qubits.",
        available: true,
      },
    ],
  },
  {
    level: 3,
    title: "Algorithms",
    description: "The algorithms that give quantum computers their power.",
    articles: [
      {
        slug: "quantum-algorithms",
        title: "Quantum Algorithms",
        summary: "An overview of how quantum algorithms work.",
        available: true,
      },
      {
        slug: "shors-algorithm",
        title: "Shor's Algorithm",
        summary: "The algorithm that threatens modern encryption.",
        available: true,
      },
      {
        slug: "grovers-algorithm",
        title: "Grover's Algorithm",
        summary: "A quadratic speedup for searching unsorted data.",
        available: true,
      },
    ],
  },
  {
    level: 4,
    title: "Hardware & Error Correction",
    description: "How real quantum computers are built and made reliable.",
    articles: [
      {
        slug: "quantum-error-correction",
        title: "Quantum Error Correction",
        summary: "How quantum computers fight decoherence and noise.",
        available: true,
      },
      {
        slug: "quantum-hardware",
        title: "Quantum Hardware",
        summary: "A tour of the major approaches to building qubits.",
        available: true,
      },
    ],
  },
  {
    level: 5,
    title: "Advanced Topics",
    description: "Deeper theory and the path toward fault-tolerant quantum computing.",
    articles: [
      {
        slug: "quantum-complexity-theory",
        title: "Quantum Complexity Theory",
        summary: "What BQP means and why it matters for what quantum computers can and can't do.",
        available: true,
      },
      {
        slug: "density-matrices-mixed-states",
        title: "Density Matrices & Mixed States",
        summary: "How to describe quantum states when there's uncertainty beyond superposition.",
        available: true,
      },
      {
        slug: "quantum-simulation-deep-dive",
        title: "Quantum Simulation",
        summary: "How Trotterization and related techniques let quantum computers model other quantum systems.",
        available: true,
      },
      {
        slug: "adiabatic-quantum-computing",
        title: "Adiabatic Quantum Computing",
        summary: "A different model of quantum computation, and how it relates to quantum annealing.",
        available: true,
      },
      {
        slug: "quantum-networking-fundamentals",
        title: "Quantum Networking Fundamentals",
        summary: "The building blocks of a future quantum internet, from entanglement distribution to repeaters.",
        available: true,
      },
      {
        slug: "path-to-fault-tolerance",
        title: "The Path to Fault Tolerance",
        summary: "What it will actually take to get from today's NISQ devices to reliable, large-scale quantum computers.",
        available: true,
      },
    ],
  },
  {
    level: 6,
    title: "Practitioner's Corner",
    description: "Hands-on guidance for actually writing and running quantum code.",
    articles: [
      {
        slug: "your-first-qiskit-circuit",
        title: "Your First Qiskit Circuit",
        summary: "A step-by-step walkthrough of writing and running a simple quantum circuit in Qiskit.",
        available: true,
      },
      {
        slug: "reading-a-quantum-circuit-diagram",
        title: "Reading a Quantum Circuit Diagram",
        summary: "How to interpret the symbols, wires, and boxes in a quantum circuit diagram like a pro.",
        available: true,
      },
      {
        slug: "common-beginner-mistakes",
        title: "Common Beginner Mistakes",
        summary: "The misunderstandings that trip up almost everyone learning quantum computing, and how to avoid them.",
        available: true,
      },
      {
        slug: "choosing-your-first-quantum-framework",
        title: "Choosing Your First Quantum Framework",
        summary: "An honest comparison of Qiskit, Cirq, and PennyLane to help you pick where to start.",
        available: true,
      },
      {
        slug: "from-simulator-to-real-hardware",
        title: "From Simulator to Real Hardware",
        summary: "What changes when you move your code from a local simulator to an actual quantum processor.",
        available: true,
      },
    ],
  },
];
