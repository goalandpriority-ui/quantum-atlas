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
      { slug: "bell-state", term: "Bell State" },
    ],
    misconceptions: [
      "Entanglement does not allow faster-than-light communication — no usable information can be transmitted this way.",
      "Entanglement is not 'spooky telepathy' between particles; it's a well-defined mathematical correlation confirmed by countless experiments.",
    ],
  },
  {
    slug: "superposition",
    term: "Superposition",
    shortDefinition:
      "The quantum principle that a qubit can exist in a combination of 0 and 1 simultaneously, until it is measured.",
    category: "Core Principles",
    definition:
      "Superposition is the quantum mechanical principle that a system can exist in multiple states at the same time, each with an associated probability amplitude. For a qubit, this means existing as a blend of |0⟩ and |1⟩ simultaneously — not secretly one or the other, but genuinely both, until a measurement forces it into one definite outcome.",
    technicalDefinition:
      "A qubit in superposition has state |ψ⟩ = α|0⟩ + β|1⟩, where α and β are complex probability amplitudes. The key insight is that these amplitudes can interfere with each other — adding constructively or destructively — which is what allows quantum algorithms to amplify correct answers and suppress incorrect ones.",
    analogy:
      "Think of a sound wave that's a combination of two notes played at once. Before you 'measure' (listen to) a single note, both are genuinely present. A qubit in superposition is similar: both 0 and 1 are genuinely present as possibilities, and the probabilities only 'resolve' when measured.",
    useCases: [
      "Enabling quantum parallelism — processing many possible inputs simultaneously in algorithms",
      "The starting point of almost every quantum algorithm, via the Hadamard gate",
      "Underpinning the exponential state space that makes quantum computers potentially powerful",
    ],
    relatedTerms: [
      { slug: "qubit", term: "Qubit" },
      { slug: "quantum-gate", term: "Quantum Gate" },
      { slug: "bloch-sphere", term: "Bloch Sphere" },
      { slug: "decoherence", term: "Decoherence" },
    ],
    misconceptions: [
      "Superposition is not the same as classical uncertainty — it's not that we 'don't know' which state the qubit is in. Before measurement, both possibilities are genuinely real and can interfere.",
      "Measuring a qubit in superposition gives one definite result, not 'both values at once.'",
    ],
  },
  {
    slug: "quantum-gate",
    term: "Quantum Gate",
    shortDefinition:
      "A basic operation applied to qubits that transforms their quantum state — the quantum equivalent of a classical logic gate.",
    category: "Gates & Circuits",
    definition:
      "A quantum gate is a mathematical operation — represented as a unitary matrix — that transforms the state of one or more qubits. Quantum gates are the building blocks of quantum circuits and quantum algorithms, analogous to logic gates (AND, OR, NOT) in classical computing. Unlike most classical gates, all quantum gates are reversible.",
    technicalDefinition:
      "A single-qubit gate is a 2×2 unitary matrix U applied to a qubit's state vector. A two-qubit gate is a 4×4 unitary matrix. The Hadamard gate H = (1/√2)[[1,1],[1,-1]] puts a qubit into equal superposition. The CNOT gate flips a target qubit if and only if the control qubit is |1⟩, and is the primary way entanglement is created in quantum circuits.",
    analogy:
      "Think of a quantum gate like a precise physical transformation — similar to how rotating a compass needle by exactly 90 degrees changes where it points. The gate specifies exactly how the qubit's 'direction' in an abstract mathematical space changes.",
    useCases: [
      "Creating superposition with the Hadamard gate",
      "Creating entanglement with the CNOT gate",
      "Building quantum circuits and algorithms from sequences of gates",
    ],
    relatedTerms: [
      { slug: "quantum-circuit", term: "Quantum Circuit" },
      { slug: "superposition", term: "Superposition" },
      { slug: "entanglement", term: "Entanglement" },
    ],
    misconceptions: [
      "Quantum gates are not like classical logic gates in one key way: all quantum gates are reversible — you can always 'undo' a gate by applying its inverse.",
    ],
  },
  {
    slug: "bloch-sphere",
    term: "Bloch Sphere",
    shortDefinition:
      "A geometric representation of a single qubit's state as a point on the surface of a sphere.",
    category: "Fundamentals",
    definition:
      "The Bloch sphere is a mathematical visualization tool used to represent the state of a single qubit. Every possible pure state of a qubit corresponds to a unique point on the surface of a unit sphere. The north pole represents |0⟩, the south pole represents |1⟩, and every other point on the sphere represents a different superposition of the two.",
    technicalDefinition:
      "A qubit state |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩ is parameterized by two angles: θ (the polar angle from the north pole, 0 to π) and φ (the azimuthal angle around the equator, 0 to 2π). Single-qubit gates correspond to rotations of this sphere around various axes.",
    analogy:
      "Imagine a globe: the North Pole is '0,' the South Pole is '1,' and every other point on the surface — London, Tokyo, the middle of the Pacific — represents a different superposition. Applying a gate is like rotating the entire globe.",
    useCases: [
      "Visualizing the effect of single-qubit gates as rotations",
      "Understanding and teaching qubit states intuitively",
      "Describing the 'phase' of a qubit state, which isn't visible from measurement probabilities alone",
    ],
    relatedTerms: [
      { slug: "qubit", term: "Qubit" },
      { slug: "superposition", term: "Superposition" },
      { slug: "quantum-gate", term: "Quantum Gate" },
    ],
    misconceptions: [
      "The Bloch sphere only works for a single qubit — multi-qubit states (especially entangled ones) cannot be visualized this way.",
    ],
  },
  {
    slug: "decoherence",
    term: "Decoherence",
    shortDefinition:
      "The process by which a qubit loses its quantum properties through unwanted interactions with its environment.",
    category: "Hardware & Errors",
    definition:
      "Decoherence is the process by which a quantum system loses its superposition and entanglement properties through interactions with its surrounding environment. Even tiny disturbances — stray electromagnetic fields, temperature fluctuations, or vibrations — can cause a qubit to 'forget' its quantum state and behave like a classical bit. Decoherence is one of the primary engineering challenges in building useful quantum computers.",
    technicalDefinition:
      "Decoherence can be described in terms of two timescales: T₁ (the relaxation time — how long before a qubit in |1⟩ decays to |0⟩) and T₂ (the dephasing time — how long before the qubit's phase relationship is lost). Both timescales are crucial for determining how many gate operations can be performed before errors dominate.",
    analogy:
      "Imagine trying to balance a pencil perfectly upright on its tip. Any tiny vibration knocks it over — the longer you wait, the more likely it is to fall. A qubit in superposition is similarly fragile: the longer you wait or the more it interacts with its environment, the more likely it is to 'fall' into a definite classical state.",
    useCases: [
      "Understanding why quantum computers need extreme isolation (cooling, shielding)",
      "Motivating quantum error correction — to work faster than decoherence destroys information",
      "Benchmarking quantum hardware — T₁ and T₂ times are key performance metrics",
    ],
    relatedTerms: [
      { slug: "qubit", term: "Qubit" },
      { slug: "superposition", term: "Superposition" },
      { slug: "nisq", term: "NISQ" },
    ],
    misconceptions: [
      "Decoherence is not the same as measurement — decoherence is an unwanted, uncontrolled interaction with the environment, while measurement is a deliberate, controlled process.",
    ],
  },
  {
    slug: "bell-state",
    term: "Bell State",
    shortDefinition:
      "One of four maximally entangled two-qubit states, serving as a fundamental resource in quantum information.",
    category: "Core Principles",
    definition:
      "A Bell state is one of four specific quantum states of two qubits that represent maximum entanglement — the strongest possible correlation between two quantum systems. Named after physicist John Bell, they are the simplest examples of entangled states and serve as fundamental building blocks in quantum communication, quantum cryptography, and quantum teleportation protocols.",
    technicalDefinition:
      "The four Bell states are: |Φ+⟩ = (1/√2)(|00⟩ + |11⟩), |Φ-⟩ = (1/√2)(|00⟩ - |11⟩), |Ψ+⟩ = (1/√2)(|01⟩ + |10⟩), |Ψ-⟩ = (1/√2)(|01⟩ - |10⟩). Each is created by a Hadamard gate followed by a CNOT gate. They form a complete orthonormal basis for the two-qubit state space.",
    analogy:
      "Think of a Bell state as two dice that are perfectly correlated: whenever you roll them, they always show the same number (or always show different numbers, depending on which Bell state). No matter how far apart the dice are, the outcome of rolling one instantly tells you the outcome of the other.",
    useCases: [
      "Quantum teleportation — transferring a quantum state using a Bell state as a resource",
      "Quantum key distribution protocols (like E91)",
      "Testing the foundations of quantum mechanics via Bell inequality experiments",
    ],
    relatedTerms: [
      { slug: "entanglement", term: "Entanglement" },
      { slug: "qubit", term: "Qubit" },
      { slug: "quantum-circuit", term: "Quantum Circuit" },
    ],
  },
  {
    slug: "quantum-circuit",
    term: "Quantum Circuit",
    shortDefinition:
      "A sequence of quantum gates applied to a set of qubits — the quantum equivalent of a program.",
    category: "Gates & Circuits",
    definition:
      "A quantum circuit is a model for quantum computation in which a fixed number of qubits are acted on by a sequence of quantum gates, followed by measurements. It is the standard way of describing and visualizing quantum algorithms — analogous to a classical program or flowchart, but for quantum operations.",
    technicalDefinition:
      "A quantum circuit is drawn as a set of horizontal wires (one per qubit, representing the passage of time from left to right) with gate symbols placed along the wires. Single-qubit gates appear as labeled boxes on a single wire; multi-qubit gates connect multiple wires. The 'depth' of a circuit (the longest path from input to output) determines how long the computation takes and how much decoherence it is exposed to.",
    analogy:
      "A quantum circuit is like a musical score: the horizontal lines are the instruments (qubits), the notes along each line are the operations (gates) to be performed, and reading left to right tells you the order in which things happen.",
    useCases: [
      "Representing and communicating quantum algorithms (Shor's, Grover's, etc.)",
      "Input format for quantum computing frameworks like Qiskit and Cirq",
      "Benchmarking hardware by measuring how deep a circuit can run before errors dominate",
    ],
    relatedTerms: [
      { slug: "quantum-gate", term: "Quantum Gate" },
      { slug: "qubit", term: "Qubit" },
      { slug: "decoherence", term: "Decoherence" },
    ],
  },
  {
    slug: "nisq",
    term: "NISQ",
    shortDefinition:
      "Noisy Intermediate-Scale Quantum — the current era of quantum computing, characterized by machines with 50–1000 qubits but significant error rates.",
    category: "Industry & Era",
    definition:
      "NISQ stands for Noisy Intermediate-Scale Quantum. The term, coined by physicist John Preskill in 2018, describes the current generation of quantum computers: machines with enough qubits to be interesting and potentially useful, but with error rates too high and coherence times too short to run full quantum error correction. NISQ devices operate in a regime between simple proof-of-concept experiments and the fully fault-tolerant quantum computers of the future.",
    technicalDefinition:
      "A NISQ device typically has 50 to a few thousand physical qubits with gate error rates on the order of 0.1–1% per gate. At these error rates, computations are limited to relatively shallow circuits (low depth) before noise dominates. Algorithms designed for the NISQ era — like VQE (Variational Quantum Eigensolver) and QAOA (Quantum Approximate Optimization Algorithm) — are specifically designed to extract useful results within these constraints.",
    analogy:
      "The NISQ era is like the early days of classical computing, when computers filled rooms and could only run limited programs before overheating or breaking down — powerful enough to hint at the future, but not yet the transformative technology they'd become.",
    useCases: [
      "Running near-term quantum algorithms (VQE, QAOA) for chemistry and optimization",
      "Exploring quantum advantage on specific, carefully chosen problems",
      "Benchmarking hardware and developing the engineering needed for future fault-tolerant systems",
    ],
    relatedTerms: [
      { slug: "decoherence", term: "Decoherence" },
      { slug: "quantum-supremacy", term: "Quantum Supremacy" },
      { slug: "qubit", term: "Qubit" },
    ],
  },
  {
    slug: "quantum-supremacy",
    term: "Quantum Supremacy",
    shortDefinition:
      "The milestone at which a quantum computer performs a specific task faster than any classical computer could.",
    category: "Industry & Era",
    definition:
      "Quantum supremacy (also called quantum advantage in some contexts) refers to the point at which a quantum computer demonstrates the ability to perform a specific computation faster than the best available classical computers or supercomputers. The term was popularized after Google's 2019 announcement that its Sycamore processor had achieved this milestone for a specific mathematical sampling task.",
    technicalDefinition:
      "Google's 2019 claim involved random circuit sampling — a task with no direct practical application, but one that is believed to be exponentially hard for classical computers. The Sycamore chip's result was later challenged and partially rebutted by improved classical simulations, illustrating that 'supremacy' claims for specific tasks are often contested and that the boundary between 'hard for classical' and 'achievable quantumly' is still being defined.",
    analogy:
      "Quantum supremacy is like a new type of runner completing a specific kind of race faster than any human — impressive and significant, but not the same as being better at all races. The task may be specially chosen to suit the quantum runner's strengths.",
    useCases: [
      "Marking a historical milestone in quantum computing development",
      "Motivating further investment and research in quantum hardware",
      "Prompting debate about how to fairly measure and compare quantum and classical performance",
    ],
    relatedTerms: [
      { slug: "nisq", term: "NISQ" },
      { slug: "quantum-circuit", term: "Quantum Circuit" },
      { slug: "decoherence", term: "Decoherence" },
    ],
    misconceptions: [
      "Quantum supremacy on one specific task does not mean a quantum computer is generally more powerful than a classical computer for all tasks.",
      "The term 'supremacy' is sometimes replaced by 'quantum advantage' to avoid implying broader superiority.",
    ],
  },
  {
    slug: "post-quantum-cryptography",
    term: "Post-Quantum Cryptography",
    shortDefinition:
      "Encryption methods designed to be secure against attacks from both classical and quantum computers.",
    category: "Applications",
    definition:
      "Post-quantum cryptography (PQC) refers to cryptographic algorithms that are believed to be secure against attacks by large-scale quantum computers, particularly Shor's Algorithm, which could break widely-used encryption schemes like RSA. These new algorithms are based on mathematical problems believed to be hard even for quantum computers.",
    technicalDefinition:
      "The main families of post-quantum cryptographic algorithms include: lattice-based cryptography (based on problems like Learning With Errors), hash-based signatures, code-based cryptography, and multivariate polynomial cryptography. NIST (the US National Institute of Standards and Technology) completed a multi-year standardization process in 2024, selecting several algorithms — including CRYSTALS-Kyber for key exchange and CRYSTALS-Dilithium for digital signatures — as the first post-quantum standards.",
    analogy:
      "Imagine current internet encryption as a lock whose key can be copied by a powerful enough machine (a quantum computer). Post-quantum cryptography replaces it with a fundamentally different type of lock — one whose key-copying mechanism simply doesn't work on the new design, even with a quantum machine.",
    useCases: [
      "Securing internet communications (HTTPS) against future quantum attacks",
      "Protecting government and military communications long-term",
      "Addressing 'harvest now, decrypt later' threats — where encrypted data is collected now and decrypted once quantum computers mature",
    ],
    relatedTerms: [
      { slug: "quantum-supremacy", term: "Quantum Supremacy" },
      { slug: "nisq", term: "NISQ" },
    ],
    misconceptions: [
      "Post-quantum cryptography does not use quantum computers — it's classical cryptography designed to be resistant to quantum attacks.",
      "Adopting post-quantum cryptography is necessary even before large quantum computers exist, because of the harvest-now-decrypt-later risk.",
    ],
  },
];

export function getTermBySlug(slug: string) {
  return dictionaryTerms.find((t) => t.slug === slug);
}
