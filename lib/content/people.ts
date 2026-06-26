export type Person = {
  slug: string;
  name: string;
  born: string;
  died?: string;
  nationality: string;
  field: string;
  shortBio: string;
  whyTheyMatter: string;
  keyContributions: { title: string; year: string; description: string }[];
  famousQuote?: string;
  relatedAlgorithmSlugs?: string[];
  relatedDictionarySlugs?: string[];
};

export const people: Person[] = [
  {
    slug: "richard-feynman",
    name: "Richard Feynman",
    born: "1918",
    died: "1988",
    nationality: "American",
    field: "Theoretical Physics",
    shortBio:
      "Nobel Prize-winning physicist whose 1981 lecture 'Simulating Physics with Computers' planted the conceptual seed for all of quantum computing.",
    whyTheyMatter:
      "Feynman didn't invent quantum computing — he proposed it should exist. His core insight, that classical computers are fundamentally unable to efficiently simulate quantum systems, and that a computer built from quantum mechanics might not face that limitation, is still the foundational motivation for the entire field. Every quantum chemistry simulation, every VQE experiment, every drug-discovery quantum computing project traces its intellectual lineage directly to Feynman's 1981 observation.",
    keyContributions: [
      {
        title: "Simulating Physics with Computers",
        year: "1981",
        description:
          "His landmark lecture at the First Conference on Physics and Computation at MIT, where he argued classical computers cannot efficiently simulate quantum systems and proposed a 'quantum computer' as the solution — the founding document of quantum computing as a field.",
      },
      {
        title: "Feynman Diagrams",
        year: "1948",
        description:
          "Developed pictorial representations of quantum field theory interactions that revolutionized particle physics calculations — though not directly quantum computing, they reflect the same deep intuition for quantum mechanical calculation.",
      },
      {
        title: "Path Integral Formulation",
        year: "1948",
        description:
          "Reformulated quantum mechanics using a sum over all possible paths — a conceptual framework that influences quantum algorithm design thinking about exploring multiple computational paths simultaneously.",
      },
      {
        title: "Nobel Prize in Physics",
        year: "1965",
        description:
          "Awarded jointly for work in quantum electrodynamics, the quantum field theory of electromagnetic interactions.",
      },
    ],
    famousQuote:
      "Nature isn't classical, dammit, and if you want to make a simulation of nature, you'd better make it quantum mechanical.",
    relatedAlgorithmSlugs: ["vqe", "quantum-simulation-deep-dive"],
    relatedDictionarySlugs: ["qubit", "quantum-interference"],
  },
  {
    slug: "peter-shor",
    name: "Peter Shor",
    born: "1959",
    nationality: "American",
    field: "Mathematics & Computer Science",
    shortBio:
      "MIT mathematician who in 1994 invented the algorithm that made quantum computing a matter of global security concern.",
    whyTheyMatter:
      "Before Shor's Algorithm, quantum computing was a fascinating theoretical curiosity. After it, governments and intelligence agencies around the world began paying serious attention and funding research, because the algorithm directly threatened the RSA encryption protecting global internet communications. Shor's work is the single reason quantum cryptography and post-quantum cryptography exist as urgent practical fields today, and the primary reason quantum computing receives the funding levels it does.",
    keyContributions: [
      {
        title: "Shor's Algorithm",
        year: "1994",
        description:
          "Proved that a quantum computer could factor large integers exponentially faster than any known classical algorithm — directly threatening RSA encryption and transforming quantum computing from academic curiosity to national security priority.",
      },
      {
        title: "First Quantum Error-Correcting Code",
        year: "1995",
        description:
          "Developed the first quantum error-correcting code (the Shor code), proving that quantum information could be protected from errors — a foundational result making fault-tolerant quantum computing theoretically possible.",
      },
      {
        title: "Quantum Fault Tolerance",
        year: "1996",
        description:
          "Contributed to establishing the theoretical foundations of fault-tolerant quantum computation, including early work on the threshold theorem.",
      },
    ],
    famousQuote:
      "I think quantum computing will happen. The only question is when.",
    relatedAlgorithmSlugs: ["shors-algorithm", "quantum-fourier-transform", "quantum-error-correction-codes"],
    relatedDictionarySlugs: ["post-quantum-cryptography", "logical-qubit"],
  },
  {
    slug: "lov-grover",
    name: "Lov Grover",
    born: "1961",
    nationality: "Indian-American",
    field: "Computer Science",
    shortBio:
      "Bell Labs researcher who in 1996 discovered the quantum search algorithm that bears his name — a result with surprisingly broad applicability.",
    whyTheyMatter:
      "Grover's Algorithm is one of only two quantum algorithms with a proven, unconditional speedup over classical methods (alongside Shor's) that applies to a practically broad class of problems. Unlike Shor's exponential speedup for a specific mathematical problem, Grover's quadratic speedup applies generically to searching any unsorted data — making it a tool that appears as a subroutine in many other quantum algorithms, and the foundation of quantum amplitude estimation used in finance applications.",
    keyContributions: [
      {
        title: "Grover's Search Algorithm",
        year: "1996",
        description:
          "Discovered a quantum algorithm for searching unsorted databases in O(√N) steps — a provable quadratic speedup over any classical method, with the bound proven optimal.",
      },
      {
        title: "Amplitude Amplification Framework",
        year: "1996–1998",
        description:
          "The general technique underlying Grover's algorithm became the 'amplitude amplification' framework, subsequently generalized by Brassard, Høyer, Mosca, and Tapp into a widely used quantum subroutine.",
      },
    ],
    relatedAlgorithmSlugs: ["grovers-algorithm", "quantum-amplitude-estimation", "quantum-counting"],
    relatedDictionarySlugs: ["quantum-interference", "superposition"],
  },
  {
    slug: "john-bell",
    name: "John Bell",
    born: "1928",
    died: "1990",
    nationality: "Northern Irish",
    field: "Theoretical Physics",
    shortBio:
      "CERN physicist whose 1964 theorem transformed a philosophical debate about quantum mechanics into an experimentally testable prediction — with profound implications for quantum computing.",
    whyTheyMatter:
      "Bell's theorem proved that the strange correlations of quantum entanglement cannot be explained by any 'hidden variables' — they are genuinely quantum mechanical, not just classical correlations we haven't measured yet. This mathematical result transformed entanglement from a philosophical puzzle (the EPR paradox) into an experimentally confirmed, exploitable physical resource. Without Bell's theorem and its experimental confirmation, the security proofs underlying quantum cryptography protocols like E91 would not exist, and our understanding of entanglement as a computational resource would lack its rigorous foundation.",
    keyContributions: [
      {
        title: "Bell's Theorem",
        year: "1964",
        description:
          "Proved that any 'hidden variable' theory reproducing quantum mechanics' predictions must violate 'local realism' — converting a philosophical dispute into a testable prediction about measurable statistical correlations.",
      },
      {
        title: "Bell Inequalities",
        year: "1964",
        description:
          "The specific statistical bounds Bell derived, whose violation by quantum measurements proves entanglement is a genuinely non-classical phenomenon — now used in E91 quantum key distribution security proofs.",
      },
    ],
    relatedDictionarySlugs: ["bell-state", "entanglement"],
    relatedAlgorithmSlugs: ["e91-protocol"],
  },
  {
    slug: "david-deutsch",
    name: "David Deutsch",
    born: "1953",
    nationality: "British",
    field: "Physics & Computer Science",
    shortBio:
      "Oxford physicist who in 1985 formalized the concept of a universal quantum computer and demonstrated the first quantum algorithm — the true founder of quantum computing as a computational science.",
    whyTheyMatter:
      "If Feynman planted the seed, Deutsch built the tree. He was the first to rigorously define what a quantum computer is, prove it could simulate any physical system, and demonstrate an actual quantum algorithm (for the Deutsch problem) with a provable quantum advantage. His 1985 paper is the founding document of quantum computing as computer science (as opposed to Feynman's founding of it as a physics motivation). The entire complexity-theoretic framework discussed in our Learning Center — including BQP — descends from Deutsch's formalization.",
    keyContributions: [
      {
        title: "Universal Quantum Computer",
        year: "1985",
        description:
          "Formally defined the universal quantum computer — a quantum analog of the Turing machine — and proved it could efficiently simulate any physical process, including other quantum systems.",
      },
      {
        title: "Deutsch Algorithm",
        year: "1985",
        description:
          "The first quantum algorithm: determines whether a function is constant or balanced using one query instead of two — a provable quantum speedup, and the direct inspiration for the Deutsch-Jozsa algorithm.",
      },
      {
        title: "Quantum Parallelism",
        year: "1985",
        description:
          "Articulated the concept of quantum parallelism — how superposition allows a quantum computer to evaluate a function on multiple inputs simultaneously — the foundational intuition behind most quantum algorithms.",
      },
    ],
    relatedAlgorithmSlugs: ["deutsch-jozsa"],
    relatedDictionarySlugs: ["qubit", "quantum-interference", "quantum-circuit"],
  },
  {
    slug: "john-preskill",
    name: "John Preskill",
    born: "1953",
    nationality: "American",
    field: "Theoretical Physics",
    shortBio:
      "Caltech physicist who coined the term 'quantum supremacy,' named the NISQ era, and wrote the field's most widely read graduate textbook.",
    whyTheyMatter:
      "Preskill has shaped how the entire field talks about itself. His terminology — 'quantum supremacy' (1012), 'NISQ' (2018) — defines the vocabulary of quantum computing discussions. His Caltech lecture notes on quantum computation are freely available online and remain the most widely cited graduate-level resource in the field. He also made important theoretical contributions to quantum error correction and topological quantum computation.",
    keyContributions: [
      {
        title: "Coined 'Quantum Supremacy'",
        year: "2012",
        description:
          "Introduced the term 'quantum supremacy' to describe the milestone at which a quantum computer outperforms any classical computer on some task — the term that defined a generation of quantum computing benchmarking.",
      },
      {
        title: "Named the NISQ Era",
        year: "2018",
        description:
          "Introduced 'NISQ' (Noisy Intermediate-Scale Quantum) as a term describing current-generation quantum devices — immediately adopted universally by the field.",
      },
      {
        title: "Quantum Computing Lecture Notes",
        year: "1997–present",
        description:
          "His freely available Caltech lecture notes on quantum computation and quantum information remain the most widely used graduate-level reference in the field.",
      },
    ],
    relatedDictionarySlugs: ["nisq", "quantum-supremacy", "fault-tolerance"],
  },
  {
    slug: "charles-bennett",
    name: "Charles Bennett",
    born: "1943",
    nationality: "American",
    field: "Physics & Computer Science",
    shortBio:
      "IBM Research physicist who co-invented quantum key distribution (BB84), quantum teleportation, and proved the quantum no-cloning theorem.",
    whyTheyMatter:
      "Bennett is arguably the most broadly influential figure in quantum information science — his fingerprints are on quantum cryptography, quantum communication, quantum teleportation, and the no-cloning theorem. His collaborations produced foundational results that span the entire field of quantum information, not just one algorithm or application area.",
    keyContributions: [
      {
        title: "BB84 Quantum Key Distribution",
        year: "1984",
        description:
          "Co-invented with Gilles Brassard the first quantum cryptography protocol — allowing provably secure key exchange using quantum mechanical principles.",
      },
      {
        title: "No-Cloning Theorem",
        year: "1982",
        description:
          "Co-proved (independently from Dieks and Wootters-Zurek) that arbitrary quantum states cannot be perfectly copied — foundational to both quantum cryptography and error correction.",
      },
      {
        title: "Quantum Teleportation",
        year: "1993",
        description:
          "Co-discovered the quantum teleportation protocol with Brassard, Crépeau, Jozsa, Peres and Wootters — a foundational protocol for quantum networking.",
      },
    ],
    relatedAlgorithmSlugs: ["bb84-protocol", "quantum-teleportation-protocol"],
    relatedDictionarySlugs: ["no-cloning-theorem", "quantum-repeater"],
  },
  {
    slug: "alexei-kitaev",
    name: "Alexei Kitaev",
    born: "1963",
    nationality: "Russian-American",
    field: "Theoretical Physics & Mathematics",
    shortBio:
      "Caltech physicist who invented topological quantum computation, the surface code, and quantum phase estimation — three foundational results spanning fault tolerance, error correction, and algorithms.",
    whyTheyMatter:
      "Kitaev's contributions span an unusually wide range of foundational results. Quantum phase estimation (used inside Shor's Algorithm) is his. The surface code — the leading error-correcting code in today's hardware roadmaps — is his. Topological quantum computation (Microsoft's entire quantum strategy) is based on his theoretical framework. He is the theoretical physicist whose work most directly shapes what modern quantum hardware is being built to do.",
    keyContributions: [
      {
        title: "Quantum Phase Estimation",
        year: "1995",
        description:
          "Invented quantum phase estimation, a key subroutine used inside Shor's Algorithm and quantum chemistry simulation algorithms.",
      },
      {
        title: "Surface Code",
        year: "1997–2003",
        description:
          "Developed the surface code error-correcting code — now the leading candidate for fault-tolerant quantum computing, used in Google's Willow processor experiments.",
      },
      {
        title: "Topological Quantum Computation",
        year: "2003",
        description:
          "Proposed using non-Abelian anyons — exotic quantum particles — to store quantum information in a way inherently protected from local errors, forming the basis of Microsoft's quantum computing approach.",
      },
    ],
    relatedAlgorithmSlugs: ["quantum-phase-estimation", "quantum-error-correction-codes"],
    relatedDictionarySlugs: ["surface-code", "logical-qubit", "fault-tolerance"],
  },
  {
    slug: "artur-ekert",
    name: "Artur Ekert",
    born: "1961",
    nationality: "Polish-British",
    field: "Physics",
    shortBio:
      "Oxford and NUS physicist who invented entanglement-based quantum cryptography (E91) and helped establish quantum information science as a distinct field.",
    whyTheyMatter:
      "Ekert independently discovered a completely different approach to quantum key distribution from BB84 — one based on entanglement and Bell inequality violations rather than single-photon polarization. The E91 protocol connects quantum cryptography directly to the foundations of quantum mechanics, and underlies device-independent QKD schemes — the most secure known form of quantum communication. Ekert also co-founded the Centre for Quantum Technologies in Singapore.",
    keyContributions: [
      {
        title: "E91 Quantum Key Distribution",
        year: "1991",
        description:
          "Invented an entanglement-based quantum cryptography protocol that uses Bell inequality violations as the security foundation — connecting practical cryptography to quantum foundations.",
      },
      {
        title: "Centre for Quantum Technologies",
        year: "2007",
        description:
          "Co-founded one of the world's leading quantum information research institutes at the National University of Singapore.",
      },
    ],
    relatedAlgorithmSlugs: ["e91-protocol", "device-independent-qkd"],
    relatedDictionarySlugs: ["entanglement", "bell-state"],
  },
  {
    slug: "william-wootters",
    name: "William Wootters",
    born: "1951",
    nationality: "American",
    field: "Physics",
    shortBio:
      "Williams College physicist who co-proved the no-cloning theorem and co-discovered quantum teleportation — two results that define the possibilities and limits of quantum information.",
    whyTheyMatter:
      "The no-cloning theorem — proved independently by Wootters and Zurek, and by Dieks — is the foundational constraint that makes quantum cryptography secure. The same constraint that prevents eavesdroppers from copying quantum keys without detection also means quantum error correction cannot use classical redundancy techniques, driving the need for entirely different error-correcting codes. Wootters also contributed to quantum teleportation and the mathematical framework of quantum entanglement.",
    keyContributions: [
      {
        title: "No-Cloning Theorem",
        year: "1982",
        description:
          "Co-proved with Wojciech Zurek (and independently Dieks) that an arbitrary unknown quantum state cannot be perfectly copied — the foundational constraint underlying quantum cryptography security.",
      },
      {
        title: "Quantum Teleportation",
        year: "1993",
        description:
          "Co-discovered with Bennett, Brassard, Crépeau, Jozsa, and Peres the quantum teleportation protocol — showing that quantum states can be transferred using entanglement and classical communication.",
      },
      {
        title: "Entanglement of Formation",
        year: "1998",
        description:
          "Developed a quantitative measure of entanglement — the 'entanglement of formation' — contributing to the mathematical theory of quantum entanglement as a resource.",
      },
    ],
    relatedAlgorithmSlugs: ["quantum-teleportation-protocol", "bb84-protocol"],
    relatedDictionarySlugs: ["no-cloning-theorem", "entanglement"],
  },
];

export function getPersonBySlug(slug: string) {
  return people.find((p) => p.slug === slug);
}
