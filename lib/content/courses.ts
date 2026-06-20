export type Course = {
  slug: string;
  title: string;
  provider: string;
  providerType: "university" | "platform" | "vendor";
  cost: "free" | "paid" | "freemium";
  level: "beginner" | "intermediate" | "advanced";
  format: string;
  description: string;
  topics: string[];
  prerequisites: string;
  url: string;
};

export const courses: Course[] = [
  {
    slug: "mit-quantum-information-science",
    title: "Quantum Information Science",
    provider: "MIT",
    providerType: "university",
    cost: "free",
    level: "advanced",
    format: "MIT OpenCourseWare / MITx — self-paced video lectures and problem sets",
    description:
      "A rigorous graduate-level course covering quantum mechanics foundations, quantum information theory, quantum error correction, and quantum algorithms. Assumes a strong physics and linear algebra background.",
    topics: [
      "Foundations of quantum and classical computing",
      "Quantum measurement and reversible computation",
      "Teleportation and superdense coding",
      "Deutsch-Jozsa, Simon's, Grover's, and Shor's algorithms",
      "Noise, quantum channels, and quantum key distribution",
    ],
    prerequisites:
      "Linear algebra is required; prior quantum mechanics is helpful but not strictly necessary, since the course builds it up from the start.",
    url: "https://ocw.mit.edu/courses/8-370x-quantum-information-science-i-spring-2018/",
  },
  {
    slug: "mit-quantum-computation",
    title: "Quantum Computation",
    provider: "MIT",
    providerType: "university",
    cost: "free",
    level: "advanced",
    format: "MIT OpenCourseWare — lecture notes and assignments",
    description:
      "Covers the theoretical foundations of quantum computation, including quantum circuits, Shor's and Grover's algorithms, and quantum complexity theory. A staple reference for those wanting the full mathematical treatment.",
    topics: [
      "Physics of information processing",
      "Quantum logic and quantum circuits",
      "Shor's factoring algorithm",
      "Grover's search algorithm",
      "Quantum error correction and communication",
    ],
    prerequisites:
      "Comfort with linear algebra and mathematical proof is expected; this is a theory-heavy course aimed at advanced undergraduates and graduate students.",
    url: "https://ocw.mit.edu/courses/18-435j-quantum-computation-fall-2003/",
  },
  {
    slug: "stanford-quantum-computer-science",
    title: "Quantum Computer Science",
    provider: "Stanford University",
    providerType: "university",
    cost: "free",
    level: "intermediate",
    format: "Online lecture series with accompanying lecture notes",
    description:
      "An introduction to quantum computing aimed at computer science students, covering qubits, gates, circuits, and key algorithms with a focus on computational thinking rather than physics derivations.",
    topics: [
      "Qubits and quantum gates from a CS perspective",
      "Quantum circuit model",
      "Core quantum algorithms",
      "Computational complexity of quantum problems",
    ],
    prerequisites:
      "Basic computer science background (data structures, algorithms) is more useful here than a physics background — the course is deliberately framed for CS students.",
    url: "https://online.stanford.edu/courses/soe-ycscs1-quantum-computer-science",
  },
  {
    slug: "harvard-quantum-mechanics-applications",
    title: "Quantum Mechanics and Quantum Computation",
    provider: "Harvard University",
    providerType: "university",
    cost: "free",
    level: "advanced",
    format: "edX — self-paced with video lectures",
    description:
      "Harvard's quantum mechanics course extended with applications to quantum computing, covering the physical principles underlying qubits, measurement, and quantum algorithms.",
    topics: [
      "Qubits and quantum gates from physical first principles",
      "Entanglement and non-local correlations",
      "The no-cloning theorem and quantum teleportation",
      "Quantum Fourier transform and period finding",
      "Shor's algorithm and prospects for NP-complete problems",
    ],
    prerequisites:
      "Designed to be accessible to undergraduates, including computer science majors with no prior quantum mechanics exposure.",
    url: "https://www.edx.org/learn/quantum-computing/harvard-university-quantum-mechanics-and-quantum-computation",
  },
  {
    slug: "ibm-qiskit-textbook",
    title: "Learn Quantum Computing using Qiskit",
    provider: "IBM",
    providerType: "vendor",
    cost: "free",
    level: "beginner",
    format: "Interactive textbook with runnable code on real quantum hardware",
    description:
      "IBM's widely-used, hands-on introduction to quantum computing through its open-source Qiskit framework. Combines theory with executable Python code you can run on real IBM quantum processors via the cloud — one of the best starting points for developers.",
    topics: [
      "Setting up Qiskit and writing your first circuit",
      "Single and multi-qubit gates",
      "Running circuits on simulators and real IBM hardware",
      "Implementing core algorithms in code",
      "Quantum error correction basics",
    ],
    prerequisites:
      "Basic Python programming knowledge is helpful. No prior quantum mechanics background required — concepts are introduced as you go.",
    url: "https://learning.quantum.ibm.com/",
  },
  {
    slug: "ibm-quantum-developer-certification",
    title: "IBM Quantum Developer Certification",
    provider: "IBM",
    providerType: "vendor",
    cost: "paid",
    level: "intermediate",
    format: "Certification exam plus preparatory materials",
    description:
      "A professional certification validating practical skills in building and running quantum programs using Qiskit, aimed at developers seeking to demonstrate quantum programming proficiency for career purposes.",
    topics: [
      "Qiskit circuit construction and transpilation",
      "Working with quantum primitives (Sampler, Estimator)",
      "Running and managing jobs on IBM Quantum hardware",
      "Debugging and optimizing quantum programs",
    ],
    prerequisites:
      "Working knowledge of Qiskit is expected — most candidates complete the Qiskit Textbook or equivalent hands-on practice first.",
    url: "https://www.ibm.com/training/certification/ibm-certified-associate-developer-quantum-computation-using-qiskit-v02x-C0010300",
  },
  {
    slug: "edx-quantum-computing-fundamentals",
    title: "Quantum Computing Fundamentals",
    provider: "edX (Purdue University)",
    providerType: "platform",
    cost: "freemium",
    level: "beginner",
    format: "Self-paced online course, certificate available for a fee",
    description:
      "A beginner-friendly introduction covering qubits, superposition, entanglement, and basic quantum algorithms, designed for learners with general technical backgrounds but no physics prerequisite.",
    topics: [
      "Postulates of quantum mechanics",
      "Gate-based quantum computing",
      "Quantum errors and error correction basics",
      "Adiabatic quantum computing",
      "Introduction to quantum machine learning",
    ],
    prerequisites:
      "Undergraduate-level linear algebra, physics, and chemistry are recommended, though the course is built to be approachable for newcomers to quantum mechanics specifically.",
    url: "https://www.edx.org/course/quantum-computing-i-fundamentals",
  },
  {
    slug: "coursera-quantum-computing",
    title: "Quantum Computing Specialization",
    provider: "Coursera (various universities)",
    providerType: "platform",
    cost: "paid",
    level: "intermediate",
    format: "Multi-course specialization with graded assignments",
    description:
      "A structured specialization covering quantum mechanics fundamentals, quantum algorithms, and hands-on programming, taught by university faculty and aggregated through Coursera's subscription model.",
    topics: [
      "Quantum mechanics fundamentals for computing",
      "Quantum circuit design",
      "Hands-on programming assignments",
      "Core quantum algorithms",
    ],
    prerequisites:
      "Varies by specific specialization chosen — Coursera hosts multiple quantum computing offerings from different university partners, each with its own prerequisites listed on the course page.",
    url: "https://www.coursera.org/courses?query=quantum%20computing",
  },
  {
    slug: "brilliant-quantum-computing",
    title: "Quantum Computing Course",
    provider: "Brilliant.org",
    providerType: "platform",
    cost: "paid",
    level: "beginner",
    format: "Interactive, visual lessons with built-in problem solving",
    description:
      "A highly visual, interactive course designed for beginners, emphasizing intuition-building through guided problems rather than dense lecture content — well suited to visual and hands-on learners.",
    topics: [
      "Visual introduction to qubits and superposition",
      "Interactive gate and circuit exercises",
      "Guided problem sets building toward key algorithms",
    ],
    prerequisites:
      "None — explicitly designed for complete beginners, using visual intuition rather than assuming any physics or advanced math background.",
    url: "https://brilliant.org/courses/quantum-computing/",
  },
  {
    slug: "microsoft-quantum-katas",
    title: "Quantum Katas",
    provider: "Microsoft",
    providerType: "vendor",
    cost: "free",
    level: "intermediate",
    format: "Open-source, self-paced programming exercises using Q#",
    description:
      "A collection of programming exercises ('katas') for learning quantum computing concepts hands-on using Microsoft's Q# language, ranging from basic gate operations to more advanced algorithm implementations.",
    topics: [
      "Q# language basics",
      "Single and multi-qubit gate exercises",
      "Implementing Deutsch-Jozsa and Grover's algorithm",
      "Quantum error correction exercises",
    ],
    prerequisites:
      "Basic programming experience in any language is helpful; Q# itself is taught through the exercises, so no prior Q# knowledge is needed.",
    url: "https://github.com/microsoft/QuantumKatas",
  },
];

export function getCoursesByCost(cost: string) {
  if (cost === "all") return courses;
  return courses.filter((c) => c.cost === cost);
}

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
