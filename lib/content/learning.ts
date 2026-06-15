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
        available: false,
      },
      {
        slug: "shors-algorithm",
        title: "Shor's Algorithm",
        summary: "The algorithm that threatens modern encryption.",
        available: false,
      },
      {
        slug: "grovers-algorithm",
        title: "Grover's Algorithm",
        summary: "A quadratic speedup for searching unsorted data.",
        available: false,
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
        available: false,
      },
      {
        slug: "quantum-hardware",
        title: "Quantum Hardware",
        summary: "A tour of the major approaches to building qubits.",
        available: false,
      },
    ],
  },
];
