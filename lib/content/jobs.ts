export type JobRole = {
  slug: string;
  title: string;
  category: "research" | "software" | "hardware" | "internship";
  typicalEmployers: string;
  description: string;
  commonSkills: string[];
  typicalBackground: string;
};

export const jobRoles: JobRole[] = [
  {
    slug: "quantum-research-scientist",
    title: "Quantum Research Scientist",
    category: "research",
    typicalEmployers: "National labs, university research groups, R&D divisions of IBM, Google, Microsoft",
    description:
      "Conducts original research into quantum algorithms, error correction methods, or the physics of qubit systems. Often involves publishing peer-reviewed papers and collaborating with hardware teams to test theoretical ideas.",
    commonSkills: ["Quantum mechanics", "Linear algebra", "Research publication", "Mathematical proof techniques"],
    typicalBackground: "PhD in physics, computer science, or applied mathematics, often with a postdoctoral research period.",
  },
  {
    slug: "quantum-algorithm-researcher",
    title: "Quantum Algorithm Researcher",
    category: "research",
    typicalEmployers: "Quantum computing startups, Big Tech quantum divisions, finance and pharma R&D groups",
    description:
      "Designs and analyzes new quantum algorithms or improves existing ones for specific applications like optimization, chemistry simulation, or machine learning.",
    commonSkills: ["Algorithm design", "Complexity theory", "Qiskit/Cirq programming", "Domain expertise (chemistry, finance, etc.)"],
    typicalBackground: "Master's or PhD in computer science, physics, or mathematics, with strong algorithmic background.",
  },
  {
    slug: "quantum-software-engineer",
    title: "Quantum Software Engineer",
    category: "software",
    typicalEmployers: "IBM, Google, IonQ, Rigetti, quantum software startups",
    description:
      "Builds the software stack that lets users write and run quantum programs — compilers, SDKs (like Qiskit or Cirq), simulators, and cloud access platforms.",
    commonSkills: ["Python", "Software architecture", "Quantum circuit design", "Cloud infrastructure"],
    typicalBackground: "Bachelor's or Master's in computer science with self-taught or coursework-based quantum computing knowledge.",
  },
  {
    slug: "quantum-applications-developer",
    title: "Quantum Applications Developer",
    category: "software",
    typicalEmployers: "Enterprise quantum computing teams (finance, pharma, logistics), consulting firms",
    description:
      "Translates real business problems (portfolio optimization, drug discovery, routing) into quantum circuit implementations, often working with hybrid classical-quantum algorithms like VQE or QAOA.",
    commonSkills: ["Domain knowledge", "Qiskit/Cirq/PennyLane", "Classical optimization", "Problem formulation"],
    typicalBackground: "Bachelor's or Master's in a quantitative field, often transitioning from classical software or data science roles.",
  },
  {
    slug: "quantum-error-correction-engineer",
    title: "Quantum Error Correction Engineer",
    category: "software",
    typicalEmployers: "IBM, Google Quantum AI, Microsoft, error-correction-focused startups",
    description:
      "Designs and implements error-correcting codes and decoders, working at the intersection of theoretical error correction and practical hardware constraints.",
    commonSkills: ["Error correction theory", "Classical coding theory", "Decoder algorithm design", "Hardware-aware optimization"],
    typicalBackground: "PhD or strong Master's in physics, computer science, or electrical engineering with coding theory background.",
  },
  {
    slug: "quantum-hardware-engineer",
    title: "Quantum Hardware Engineer",
    category: "hardware",
    typicalEmployers: "IBM, Google, Rigetti, IonQ, Quantinuum, hardware-focused startups",
    description:
      "Designs, fabricates, and tests the physical qubit devices themselves — superconducting circuits, ion traps, or photonic components — working closely with cryogenic and control systems.",
    commonSkills: ["Solid-state physics", "Microfabrication", "Cryogenics", "RF/microwave engineering"],
    typicalBackground: "PhD in experimental physics or electrical engineering, often with cleanroom fabrication experience.",
  },
  {
    slug: "cryogenic-systems-engineer",
    title: "Cryogenic Systems Engineer",
    category: "hardware",
    typicalEmployers: "Superconducting qubit companies (IBM, Google, Rigetti), dilution refrigerator manufacturers",
    description:
      "Designs and maintains the extreme cooling infrastructure (dilution refrigerators) required to operate superconducting qubits near absolute zero.",
    commonSkills: ["Cryogenic engineering", "Thermal management", "Vacuum systems", "Mechanical design"],
    typicalBackground: "Degree in mechanical or physics engineering with specialization in low-temperature physics.",
  },
  {
    slug: "quantum-control-systems-engineer",
    title: "Quantum Control Systems Engineer",
    category: "hardware",
    typicalEmployers: "All major quantum hardware companies",
    description:
      "Builds the electronics and software that send precisely timed control signals (microwave pulses, laser sequences) to manipulate qubits and read out their states.",
    commonSkills: ["FPGA programming", "Signal processing", "Real-time systems", "Electronics design"],
    typicalBackground: "Electrical engineering degree with experience in real-time control systems or RF electronics.",
  },
  {
    slug: "quantum-computing-research-intern",
    title: "Quantum Computing Research Intern",
    category: "internship",
    typicalEmployers: "IBM Quantum, Google Quantum AI, Microsoft Quantum, university labs",
    description:
      "Supports ongoing research projects — running experiments, analyzing data, contributing to small pieces of algorithm or hardware research under the guidance of senior researchers.",
    commonSkills: ["Python", "Basic quantum computing knowledge", "Data analysis", "Scientific writing"],
    typicalBackground: "Undergraduate or graduate student in physics, computer science, or related field, often applying through university partnerships.",
  },
  {
    slug: "quantum-software-engineering-intern",
    title: "Quantum Software Engineering Intern",
    category: "internship",
    typicalEmployers: "Quantum computing startups, Big Tech quantum divisions",
    description:
      "Contributes to quantum SDKs, documentation, example code, or internal tools — a common entry point for students wanting hands-on quantum software experience.",
    commonSkills: ["Python", "Git/version control", "Basic Qiskit or Cirq familiarity", "Software testing"],
    typicalBackground: "Undergraduate computer science student, often with self-taught quantum computing coursework (like IBM's Qiskit textbook).",
  },
];

export function getJobBySlug(slug: string) {
  return jobRoles.find((j) => j.slug === slug);
}
