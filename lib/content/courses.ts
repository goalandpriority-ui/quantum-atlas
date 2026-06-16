export type Course = {
  slug: string;
  title: string;
  provider: string;
  providerType: "university" | "platform" | "vendor";
  cost: "free" | "paid" | "freemium";
  level: "beginner" | "intermediate" | "advanced";
  format: string;
  description: string;
  url?: string;
};

export const courses: Course[] = [
  {
    slug: "mit-quantum-information-science",
    title: "Quantum Information Science",
    provider: "MIT",
    providerType: "university",
    cost: "free",
    level: "advanced",
    format: "MIT OpenCourseWare — self-paced video lectures and problem sets",
    description:
      "A rigorous graduate-level course covering quantum mechanics foundations, quantum information theory, quantum error correction, and quantum algorithms. Assumes a strong physics and linear algebra background.",
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
  },
  {
    slug: "edx-quantum-computing-fundamentals",
    title: "Quantum Computing Fundamentals",
    provider: "edX",
    providerType: "platform",
    cost: "freemium",
    level: "beginner",
    format: "Self-paced online course, certificate available for a fee",
    description:
      "A beginner-friendly introduction covering qubits, superposition, entanglement, and basic quantum algorithms, designed for learners with general technical backgrounds but no physics prerequisite.",
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
  },
];

export function getCoursesByCost(cost: string) {
  if (cost === "all") return courses;
  return courses.filter((c) => c.cost === cost);
}
