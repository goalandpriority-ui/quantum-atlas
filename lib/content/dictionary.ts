export type DictionaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  category: string;
  definition: string;
  technicalDefinition: string;
  analogy: string;
  useCases: string[];
  relatedTerms: { slug: string; term: string }[];
  misconceptions?: string[];
};

export const dictionaryTerms: DictionaryTerm[] = [
  {
    slug: "qubit",
    term: "Qubit",
    shortDefinition:
      "The basic unit of quantum information, capable of existing in a superposition of 0 and 1.",
    category: "Fundamentals",
    definition:
      "A qubit (quantum bit) is the fundamental unit of information in a quantum computer. Unlike a classical bit, which must be either 0 or 1, a qubit can exist in a superposition — a combination of both states at once, described by probabilities.",
    technicalDefinition:
      "Mathematically, a qubit's state is represented as |ψ⟩ = α|0⟩ + β|1⟩, where α and β are complex numbers called probability amplitudes, and |α|² + |β|² = 1. Measuring the qubit collapses it to |0⟩ with probability |α|² or |1⟩ with probability |β|².",
    analogy:
      "Imagine a spinning coin in the air. While it's spinning, it isn't simply 'heads' or 'tails' — it's in a blend of both possibilities. Only when it lands (is measured) does it settle into one definite state. A qubit behaves similarly until it is measured.",
    useCases: [
      "Storing and processing information in quantum algorithms like Shor's and Grover's",
      "Representing molecular states in quantum chemistry simulations",
      "Acting as the carriers of information in quantum cryptography protocols",
    ],
    relatedTerms: [
      { slug: "superposition", term: "Superposition" },
      { slug: "entanglement", term: "Entanglement" },
      { slug: "bloch-sphere", term: "Bloch Sphere" },
    ],
    misconceptions: [
      "A qubit is not 'secretly' a 0 or a 1 that we just haven't checked yet — it genuinely exists in a probabilistic combination until measured.",
      "A single qubit cannot store two classical bits of information simultaneously for retrieval; superposition collapses upon measurement.",
    ],
  },
  {
    slug: "entanglement",
    term: "Entanglement",
    shortDefinition:
      "A quantum phenomenon where two or more qubits become linked, so the state of one instantly correlates with the state of another.",
    category: "Core Principles",
    definition:
      "Entanglement is a uniquely quantum phenomenon in which two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others — even when separated by large distances.",
    technicalDefinition:
      "An entangled two-qubit state, such as |Φ+⟩ = (1/√2)(|00⟩ + |11⟩), cannot be written as a product of two individual single-qubit states. Measuring one qubit instantly determines the measurement outcome of the other, a correlation stronger than any possible in classical physics.",
    analogy:
      "Picture two coins that always land on opposite faces no matter how far apart they are flipped — flip one in Tokyo and get heads, and the other in New York instantly shows tails, even though neither coin 'knew' the result in advance. Entanglement produces correlations like this, though it cannot be used to send information faster than light.",
    useCases: [
      "Enabling quantum teleportation protocols (transferring quantum states, not matter)",
      "Powering quantum key distribution for ultra-secure communication",
      "Serving as a computational resource in many quantum algorithms",
    ],
    relatedTerms: [
      { slug: "superposition", term: "Superposition" },
      { slug: "qubit", term: "Qubit" },
      { slug: "quantum-teleportation", term: "Quantum Teleportation" },
    ],
    misconceptions: [
      "Entanglement does not allow faster-than-light communication — no usable information can be transmitted this way.",
      "Entanglement is not 'spooky telepathy' between particles; it's a well-defined mathematical correlation confirmed by countless experiments.",
    ],
  },
];

export function getTermBySlug(slug: string) {
  return dictionaryTerms.find((t) => t.slug === slug);
}
