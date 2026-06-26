"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type FAQItem = {
  q: string;
  a: string;
  links?: { href: string; label: string }[];
};

type FAQCategory = {
  category: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    category: "Basics",
    items: [
      { q: "What is quantum computing?", a: "Quantum computing is a type of computation that uses quantum mechanical phenomena — superposition, entanglement, and interference — to process information in ways that classical computers cannot efficiently replicate. It is not a faster classical computer but a fundamentally different computational model suited for specific problem types.", links: [{ href: "/learn/what-is-quantum-computing", label: "Full article" }] },
      { q: "How is a qubit different from a classical bit?", a: "A classical bit is always either 0 or 1. A qubit can exist in a superposition of both simultaneously until measured, at which point it collapses to one definite value. The probabilities are controlled by complex-valued amplitudes, enabling quantum interference.", links: [{ href: "/dictionary/qubit", label: "Qubit explained" }] },
      { q: "What is superposition?", a: "Superposition is the quantum mechanical principle that a system can exist in a combination of multiple states at once, each with an associated probability amplitude. For a qubit, this means being in a blend of |0⟩ and |1⟩ simultaneously, not secretly one or the other.", links: [{ href: "/dictionary/superposition", label: "Superposition explained" }] },
      { q: "What is quantum entanglement?", a: "Entanglement is a correlation between two or more qubits such that the state of each cannot be described independently. Measuring one instantly determines the correlated outcome of the other, regardless of distance — though this cannot be used to send information faster than light.", links: [{ href: "/dictionary/entanglement", label: "Entanglement explained" }] },
      { q: "What is quantum interference?", a: "Quantum interference is the mechanism by which probability amplitudes combine — constructively (increasing probability) or destructively (canceling out). It is the actual computational tool quantum algorithms use to amplify correct answers and suppress wrong ones.", links: [{ href: "/dictionary/quantum-interference", label: "Quantum Interference explained" }] },
      { q: "What is the Bloch sphere?", a: "The Bloch sphere is a geometric representation of a single qubit's state as a point on the surface of a unit sphere. The north pole represents |0⟩, the south pole |1⟩, and every other point a superposition. Single-qubit gates correspond to rotations of the sphere.", links: [{ href: "/dictionary/bloch-sphere", label: "Bloch Sphere explained" }] },
      { q: "What is a quantum gate?", a: "A quantum gate is a mathematical operation — represented as a unitary matrix — that transforms one or more qubits' states. Quantum gates are the quantum analog of classical logic gates, with the key difference that all quantum gates are reversible.", links: [{ href: "/dictionary/quantum-gate", label: "Quantum Gate explained" }] },
      { q: "What is a quantum circuit?", a: "A quantum circuit is a sequence of quantum gates applied to a set of qubits, followed by measurements. It is the standard representation for quantum algorithms — analogous to a classical program, read left to right over time.", links: [{ href: "/dictionary/quantum-circuit", label: "Quantum Circuit explained" }] },
      { q: "What happens when you measure a qubit?", a: "Measuring a qubit in superposition causes it to collapse into one definite state (0 or 1), with probabilities given by the squared magnitudes of its amplitudes. This is called measurement collapse, and it destroys the superposition.", links: [{ href: "/dictionary/measurement-collapse", label: "Measurement Collapse explained" }] },
      { q: "Can a quantum computer run any program a classical computer can?", a: "Yes — quantum computers are computationally universal. Any classical program can in principle be run on a quantum computer. The advantage is not generality but efficiency: quantum computers offer provable speedups for specific problem types.", links: [{ href: "/quantum-vs-classical", label: "Quantum vs Classical" }] },
    ],
  },
  {
    category: "Hardware",
    items: [
      { q: "What types of qubits exist?", a: "The main qubit technologies are superconducting qubits (IBM, Google, Rigetti), trapped-ion qubits (IonQ, Quantinuum), neutral atom qubits (Pasqal), photonic qubits (Xanadu), and quantum annealing (D-Wave). Each has different tradeoffs in coherence time, gate speed, connectivity, and scalability.", links: [{ href: "/hardware", label: "Hardware Database" }] },
      { q: "Why do quantum computers need to be so cold?", a: "Superconducting qubits must be cooled to near absolute zero (around 15 millikelvin) using dilution refrigerators to exhibit quantum behavior and minimize thermal noise. Trapped-ion and neutral atom approaches operate at room temperature in vacuum chambers.", links: [{ href: "/dictionary/dilution-refrigerator", label: "Dilution Refrigerator explained" }] },
      { q: "What is qubit connectivity?", a: "Qubit connectivity describes which pairs of qubits in a processor can directly perform two-qubit gates. Limited connectivity (like IBM's heavy-hex lattice) requires extra SWAP gates to route information, adding circuit depth and errors.", links: [{ href: "/dictionary/qubit-connectivity", label: "Qubit Connectivity explained" }] },
      { q: "What is gate fidelity?", a: "Gate fidelity measures how closely a physical quantum gate operation matches the ideal mathematical operation, expressed as a percentage. Higher fidelity means fewer errors. Current best two-qubit gate fidelities are around 99.9% on leading trapped-ion systems.", links: [{ href: "/dictionary/gate-fidelity", label: "Gate Fidelity explained" }] },
      { q: "What is coherence time?", a: "Coherence time describes how long a qubit maintains its quantum state before decoherence degrades it. T₁ measures energy relaxation time; T₂ measures phase coherence time. Trapped-ion systems typically have longer coherence times than superconducting qubits.", links: [{ href: "/dictionary/coherence-time", label: "Coherence Time explained" }] },
      { q: "What is decoherence?", a: "Decoherence is the process by which a qubit loses its quantum properties through unwanted interactions with its environment — thermal noise, electromagnetic interference, vibrations. It is the central engineering challenge of quantum hardware.", links: [{ href: "/dictionary/decoherence", label: "Decoherence explained" }] },
      { q: "How many qubits does the largest quantum computer have?", a: "As of 2026, IBM's Condor processor has 1,121 physical qubits — the largest publicly documented gate-based quantum processor. D-Wave's annealing systems have over 4,000 qubits but are not directly comparable, as they implement a specialized optimization model.", links: [{ href: "/hardware/ibm-condor", label: "IBM Condor profile" }] },
      { q: "What is quantum volume?", a: "Quantum Volume is a benchmark metric (introduced by IBM) for comparing quantum processors across different architectures. It accounts for qubit count, connectivity, and gate error rates together rather than any one metric in isolation.", links: [{ href: "/dictionary/quantum-volume", label: "Quantum Volume explained" }] },
      { q: "What are algorithmic qubits?", a: "Algorithmic qubits is a performance metric (used by IonQ) combining qubit count and gate fidelity to estimate how complex an algorithm a processor can reliably run — arguing that fidelity matters as much as raw qubit count.", links: [{ href: "/dictionary/algorithmic-qubits", label: "Algorithmic Qubits explained" }] },
      { q: "What is the QCCD architecture?", a: "QCCD (Quantum Charge-Coupled Device) is a trapped-ion architecture where ions can be physically moved between trap zones, enabling flexible connectivity on demand. Used by Quantinuum's H-Series systems, it has achieved some of the highest published gate fidelities.", links: [{ href: "/hardware/quantinuum-h2", label: "Quantinuum H2 profile" }] },
    ],
  },
  {
    category: "Algorithms",
    items: [
      { q: "What is Shor's Algorithm?", a: "Shor's Algorithm factors large integers exponentially faster than any known classical algorithm. On a large, error-corrected quantum computer, it would break RSA encryption — the primary motivation for post-quantum cryptography.", links: [{ href: "/algorithms/shors-algorithm", label: "Shor's Algorithm" }] },
      { q: "What is Grover's Algorithm?", a: "Grover's Algorithm searches an unsorted database in O(√N) steps — a quadratic speedup over classical methods. It's broadly applicable and provably optimal for unstructured search.", links: [{ href: "/algorithms/grovers-algorithm", label: "Grover's Algorithm" }] },
      { q: "What is VQE?", a: "VQE (Variational Quantum Eigensolver) is a hybrid quantum-classical algorithm for finding the ground-state energy of molecules and materials — one of the most promising near-term quantum computing applications.", links: [{ href: "/algorithms/vqe", label: "VQE Algorithm" }] },
      { q: "What is QAOA?", a: "QAOA (Quantum Approximate Optimization Algorithm) is a hybrid algorithm for finding approximate solutions to combinatorial optimization problems like portfolio optimization and routing.", links: [{ href: "/algorithms/qaoa", label: "QAOA Algorithm" }] },
      { q: "What is quantum amplitude estimation?", a: "Quantum Amplitude Estimation estimates an unknown probability quadratically faster than classical Monte Carlo sampling — a leading candidate for near-term quantum advantage in finance and risk analysis.", links: [{ href: "/algorithms/quantum-amplitude-estimation", label: "Quantum Amplitude Estimation" }] },
      { q: "What is the HHL algorithm?", a: "HHL (Harrow-Hassidim-Lloyd) solves linear systems of equations exponentially faster than classical methods under specific conditions, though practical use is limited by the quantum data loading problem.", links: [{ href: "/algorithms/hhl-algorithm", label: "HHL Algorithm" }] },
      { q: "What is quantum phase estimation?", a: "Quantum Phase Estimation extracts eigenvalue information from a quantum operation — a core subroutine used inside Shor's Algorithm, quantum chemistry simulation, and other advanced algorithms.", links: [{ href: "/algorithms/quantum-phase-estimation", label: "Quantum Phase Estimation" }] },
      { q: "What is a barren plateau?", a: "A barren plateau is a training obstacle in variational quantum algorithms where gradients become exponentially small as circuit size grows, making optimization practically impossible.", links: [{ href: "/dictionary/barren-plateau", label: "Barren Plateau explained" }] },
      { q: "What is quantum error mitigation?", a: "Quantum error mitigation reduces the impact of noise on NISQ-era computations through classical post-processing — techniques like zero-noise extrapolation — without the full qubit overhead of error correction.", links: [{ href: "/dictionary/quantum-error-mitigation", label: "Error Mitigation explained" }] },
      { q: "How do I choose which quantum algorithm fits my problem?", a: "The key is identifying the problem's mathematical structure. Searching/finding → Grover's. Factoring/cryptography → Shor's. Molecular simulation → VQE. Optimization → QAOA. Use our interactive Algorithm Picker in the Tools section for a quick guide.", links: [{ href: "/tools", label: "Algorithm Picker Tool" }, { href: "/algorithms", label: "Algorithms Database" }] },
    ],
  },
  {
    category: "Error Correction",
    items: [
      { q: "What is quantum error correction?", a: "Quantum error correction protects quantum information from decoherence and gate errors by encoding one logical qubit across many physical qubits, allowing errors to be detected and corrected without directly measuring the protected information.", links: [{ href: "/learn/quantum-error-correction", label: "Full article" }] },
      { q: "What is a logical qubit?", a: "A logical qubit is an error-protected qubit built from many physical qubits using an error-correcting code. It behaves like an ideal qubit despite the physical errors of the underlying hardware.", links: [{ href: "/dictionary/logical-qubit", label: "Logical Qubit explained" }] },
      { q: "What is the surface code?", a: "The surface code is the leading quantum error-correcting code, arranging qubits in a 2D grid with only nearest-neighbor interactions. It has a relatively high fault-tolerance threshold and is used in Google's Willow processor experiments.", links: [{ href: "/dictionary/surface-code", label: "Surface Code explained" }] },
      { q: "How many physical qubits does one logical qubit need?", a: "Current estimates for surface code implementations suggest hundreds to over a thousand physical qubits per logical qubit, depending on the target logical error rate and hardware error rates.", links: [{ href: "/learn/path-to-fault-tolerance", label: "Path to Fault Tolerance" }] },
      { q: "What is the fault-tolerance threshold?", a: "The fault-tolerance threshold is the physical error rate below which adding more qubits to an error-correcting code actually reduces the logical error rate. Google's Willow processor demonstrated being below this threshold in 2024.", links: [{ href: "/dictionary/fault-tolerance", label: "Fault Tolerance explained" }] },
      { q: "What is syndrome measurement?", a: "Syndrome measurement detects errors in a quantum error-correcting code without measuring the protected quantum information itself — using ancilla qubits to reveal what errors occurred without collapsing the logical qubit's state.", links: [{ href: "/dictionary/syndrome-measurement", label: "Syndrome Measurement explained" }] },
    ],
  },
  {
    category: "Applications",
    items: [
      { q: "Will quantum computers break encryption?", a: "Eventually — but not soon. Shor's Algorithm could break RSA on a sufficiently large, fault-tolerant quantum computer, but no current hardware comes close to that scale. The 'harvest now, decrypt later' threat is real, however, motivating post-quantum cryptography migration now.", links: [{ href: "/industries/cybersecurity", label: "Quantum for Cybersecurity" }] },
      { q: "What is post-quantum cryptography?", a: "Post-quantum cryptography is classical encryption mathematically designed to resist quantum attacks — not using quantum hardware, but based on problems believed hard for quantum computers. NIST finalized standards in 2024.", links: [{ href: "/dictionary/post-quantum-cryptography", label: "Post-Quantum Cryptography" }] },
      { q: "What is quantum key distribution?", a: "QKD uses quantum mechanics to establish encryption keys whose security is guaranteed by physics rather than mathematical assumptions. Any eavesdropping attempt disturbs quantum states detectably. BB84 and E91 are the two leading protocols.", links: [{ href: "/algorithms/bb84-protocol", label: "BB84 Protocol" }] },
      { q: "How will quantum computing affect finance?", a: "Finance is one of the most actively piloted quantum application areas — quantum amplitude estimation offers a proven quadratic speedup for Monte Carlo risk analysis, and QAOA is being explored for portfolio optimization.", links: [{ href: "/industries/finance", label: "Quantum for Finance" }] },
      { q: "How will quantum computing affect drug discovery?", a: "Quantum chemistry simulation (via VQE) could accelerate early-stage drug discovery by modeling molecular interactions more accurately than classical approximations allow — one of the most credible near-term quantum application areas.", links: [{ href: "/industries/healthcare", label: "Quantum for Healthcare" }] },
      { q: "What is a quantum internet?", a: "A quantum internet would distribute entanglement between distant locations, enabling provably secure communication and networked quantum computing. It requires quantum repeaters — devices that extend entanglement over distance — which don't yet exist at scale.", links: [{ href: "/learn/quantum-networking-fundamentals", label: "Quantum Networking article" }] },
      { q: "Will quantum computers replace classical computers?", a: "No. Quantum computers are specialized co-processors for specific problem types. The realistic future is hybrid classical-quantum systems, analogous to how GPUs accelerate specific tasks alongside CPUs without replacing them.", links: [{ href: "/quantum-vs-classical", label: "Quantum vs Classical" }] },
      { q: "Can quantum computers improve AI?", a: "Proven quantum ML speedups remain narrow and problem-specific — no broad advantage has been demonstrated on real-world AI tasks. Classical AI helping build quantum computers (calibration, error correction) is more mature today than quantum speeding up AI.", links: [{ href: "/quantum-vs-ai", label: "Quantum vs AI" }] },
      { q: "What is quantum sensing?", a: "Quantum sensing uses quantum phenomena to measure physical quantities (magnetic fields, gravity, acceleration, time) with extraordinary precision — already in commercial use in atomic clocks and some navigation systems, more mature than quantum computing.", links: [{ href: "/dictionary/quantum-sensing", label: "Quantum Sensing explained" }] },
      { q: "When will quantum computers be practically useful?", a: "For quantum chemistry simulation: plausibly within the next decade as hardware improves. For breaking RSA encryption: likely 15-30+ years, requiring millions of high-quality physical qubits. For broad optimization tasks: uncertain — classical methods remain competitive.", links: [{ href: "/future", label: "Future Predictions" }] },
    ],
  },
  {
    category: "Companies & Access",
    items: [
      { q: "How can I access a real quantum computer?", a: "Multiple providers offer free cloud access to real quantum hardware: IBM Quantum (via Qiskit), IonQ (via AWS Braket or Azure Quantum), Rigetti (via QCS), and others. Most have free tiers sufficient for learning and experimentation.", links: [{ href: "/hardware", label: "Hardware Database" }] },
      { q: "What is IBM's quantum roadmap?", a: "IBM has published a detailed multi-year hardware roadmap, targeting increasing qubit counts and quality through successive processor generations (Eagle → Osprey → Condor → Heron and beyond), with fault-tolerant milestones projected for the late 2020s.", links: [{ href: "/companies/ibm", label: "IBM profile" }] },
      { q: "What makes IonQ different from IBM?", a: "IonQ uses trapped-ion qubits rather than superconducting qubits — offering all-to-all connectivity, longer coherence times, and higher gate fidelity, at the cost of slower gate speeds. IonQ emphasizes 'algorithmic qubits' as its key performance metric.", links: [{ href: "/companies/ionq", label: "IonQ profile" }, { href: "/hardware/ionq-forte", label: "IonQ Forte" }] },
      { q: "What is Quantinuum?", a: "Quantinuum was formed from the 2021 merger of Cambridge Quantum and Honeywell Quantum Solutions. It uses QCCD trapped-ion architecture and has set records for two-qubit gate fidelity. It completed its Nasdaq IPO (QNT) in June 2026.", links: [{ href: "/companies/quantinuum", label: "Quantinuum profile" }] },
      { q: "What is D-Wave and how is it different?", a: "D-Wave builds quantum annealers — specialized hardware for optimization problems using a fundamentally different model than gate-based quantum computers. It cannot run Shor's or Grover's algorithms but can tackle specific optimization problems.", links: [{ href: "/companies/d-wave", label: "D-Wave profile" }] },
      { q: "What is Microsoft's approach to quantum computing?", a: "Microsoft is pursuing topological qubits — based on non-Abelian anyons — that are theoretically more resistant to errors than conventional qubit types. This approach is higher risk but potentially higher reward in terms of fault tolerance.", links: [{ href: "/companies/microsoft", label: "Microsoft profile" }] },
    ],
  },
  {
    category: "Learning & Careers",
    items: [
      { q: "Where should I start learning quantum computing?", a: "Start with our Learning Center Level 1 (Foundations) — What is Quantum Computing, What is a Qubit, Bits vs Qubits. If you want the math, read the Level 0 articles on Linear Algebra and Tensor Products first.", links: [{ href: "/learn", label: "Learning Center" }] },
      { q: "Do I need a physics background to learn quantum computing?", a: "Not necessarily. Our Learning Center is designed to be accessible through Levels 1-4 with analogies and plain-language explanations. For Level 5+ and the math foundations, linear algebra helps more than physics.", links: [{ href: "/learn/linear-algebra-for-quantum-computing", label: "Math Foundations" }] },
      { q: "What programming languages are used for quantum computing?", a: "Python is the primary language, used with quantum frameworks. The main frameworks are Qiskit (IBM), Cirq (Google), and PennyLane (Xanadu). Microsoft uses Q# for its own platform. Most frameworks can target multiple hardware backends.", links: [{ href: "/learn/choosing-your-first-quantum-framework", label: "Choosing a Framework" }] },
      { q: "How do I write my first quantum circuit?", a: "Our Practitioner's Corner Level 6 tutorial walks through writing a Bell state in Qiskit step by step — installing Qiskit, building the circuit, running on a simulator, interpreting results, and then moving to real hardware.", links: [{ href: "/learn/your-first-qiskit-circuit", label: "Your First Qiskit Circuit" }] },
      { q: "What jobs exist in quantum computing?", a: "Main categories: quantum research scientist (PhD-level physics/CS), quantum software engineer (programming quantum SDKs), quantum applications developer (industry-specific use cases), quantum hardware engineer (qubit fabrication), and internships at all levels.", links: [{ href: "/jobs", label: "Quantum Jobs Guide" }] },
      { q: "What courses are available for learning quantum computing?", a: "Free options include MIT OpenCourseWare, IBM's Qiskit Textbook, and Microsoft's Quantum Katas. Structured paid options include Coursera specializations and Brilliant.org. Our Courses page covers all 10 with prerequisites and format details.", links: [{ href: "/courses", label: "Courses Page" }] },
      { q: "Is quantum computing a good career choice?", a: "Yes — demand for quantum-skilled workers consistently exceeds supply, and the field is expected to grow significantly over the next decade. Software-oriented roles (Qiskit programming, quantum applications) have lower entry barriers than hardware research.", links: [{ href: "/jobs", label: "Quantum Jobs Guide" }] },
    ],
  },
  {
    category: "Common Misconceptions",
    items: [
      { q: "Isn't a qubit just a bit we haven't measured yet?", a: "No — this is the most common misconception. A qubit in superposition isn't secretly a 0 or 1 waiting to be revealed. Both possibilities genuinely coexist with specific amplitudes that can interfere. Bell inequality experiments definitively rule out hidden predetermined values.", links: [{ href: "/myths", label: "Myths Debunked" }] },
      { q: "Will quantum computers make all encryption obsolete?", a: "No. Shor's Algorithm threatens specific public-key encryption (RSA, ECC) but doesn't break symmetric encryption or post-quantum cryptographic algorithms. Most encryption can be made quantum-resistant with appropriate algorithm choices.", links: [{ href: "/myths", label: "Myths Debunked" }] },
      { q: "Does quantum supremacy mean quantum computers are now better than classical?", a: "No. Quantum supremacy claims refer to outperforming classical computers on one specific, often artificially chosen benchmark task — not general superiority. Google's 2019 Sycamore claim was later partially challenged by improved classical algorithms.", links: [{ href: "/dictionary/quantum-supremacy", label: "Quantum Supremacy explained" }] },
      { q: "Does entanglement allow faster-than-light communication?", a: "No. While measuring one entangled particle instantly correlates with its partner, no usable information can be transmitted — Bob can't read any message without Alice's classical message, which travels at normal speed.", links: [{ href: "/myths", label: "Myths Debunked" }] },
      { q: "Are quantum computers just faster classical computers?", a: "No — they're a fundamentally different computational model, useful only for specific problem types. For general tasks like web browsing or word processing, classical computers remain vastly more practical and efficient.", links: [{ href: "/quantum-vs-classical", label: "Quantum vs Classical" }] },
    ],
  },
];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return faqData;
    const q = query.toLowerCase();
    return faqData
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const totalVisible = filtered.reduce((sum, cat) => sum + cat.items.length, 0);
  const totalAll = faqData.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        {totalAll} Questions Answered
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing FAQ
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        The most common questions about quantum computing — from complete
        beginners to those wanting precise technical answers.
      </p>

      {/* Search */}
      <div className="relative max-w-xl mb-10">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions…"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-line bg-surface text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum transition-colors text-sm"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink">✕</button>
        )}
      </div>

      {query && (
        <p className="text-sm text-ink-muted mb-6">{totalVisible} result{totalVisible !== 1 ? "s" : ""} for "{query}"</p>
      )}

      <div className="space-y-10 max-w-3xl">
        {filtered.map((cat) => (
          <div key={cat.category}>
            <h2 className="font-serif text-xl font-semibold text-ink mb-4 pb-2 border-b border-line">
              {cat.category}
            </h2>
            <div className="space-y-2">
              {cat.items.map((item, i) => {
                const key = `${cat.category}-${i}`;
                const isOpen = openItems.has(key);
                return (
                  <div key={key} className="rounded-xl border border-line bg-surface overflow-hidden">
                    <button
                      onClick={() => toggleItem(key)}
                      className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 hover:bg-quantum-50 transition-colors"
                    >
                      <span className="font-medium text-ink text-sm leading-snug">{item.q}</span>
                      <span className="text-ink-soft shrink-0 mt-0.5">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 border-t border-line">
                        <p className="text-sm text-ink-muted leading-relaxed mt-3 mb-3">{item.a}</p>
                        {item.links && (
                          <div className="flex flex-wrap gap-3">
                            {item.links.map((l) => (
                              <Link key={l.href} href={l.href} className="text-xs text-quantum hover:underline font-medium">
                                {l.label} →
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
