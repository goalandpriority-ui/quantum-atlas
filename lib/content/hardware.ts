export type QuantumProcessor = {
  slug: string;
  name: string;
  company: string;
  companySlug: string;
  qubitCount: number;
  qubitType: string;
  architecture: string;
  releaseYear: string;
  connectivity: string;
  gateError: string;
  coherenceTime: string;
  operatingTemp: string;
  cloudAccess: boolean;
  cloudPlatform?: string;
  summary: string;
  keyFeatures: string[];
  limitations: string[];
  technicalNotes: string;
};

export const processors: QuantumProcessor[] = [
  {
    slug: "ibm-condor",
    name: "IBM Condor",
    company: "IBM",
    companySlug: "ibm",
    qubitCount: 1121,
    qubitType: "Superconducting (transmon qubits)",
    architecture: "Heavy-hex lattice",
    releaseYear: "2023",
    connectivity: "Heavy-hex — each qubit connects to 2 or 3 neighbors in a hexagonal pattern",
    gateError: "~0.1–0.3% per two-qubit gate (CNOT)",
    coherenceTime: "T₁ ~300 µs, T₂ ~200 µs",
    operatingTemp: "~15 millikelvin (inside dilution refrigerator)",
    cloudAccess: true,
    cloudPlatform: "IBM Quantum (cloud.ibm.com)",
    summary:
      "IBM Condor was the world's first quantum processor to exceed 1,000 qubits at the time of its announcement in late 2023. Part of IBM's aggressive processor roadmap, it represents a significant milestone in scaling superconducting qubit systems while maintaining reasonable gate fidelity across the full device.",
    keyFeatures: [
      "1,121 qubits — first processor to exceed 1,000",
      "Heavy-hex connectivity optimized to reduce error propagation",
      "Designed for error mitigation research and algorithm exploration at scale",
      "Fabricated using advanced semiconductor-compatible processes",
    ],
    limitations: [
      "High qubit count does not yet translate to full fault tolerance — physical error rates remain above the fault-tolerant threshold without error correction",
      "Coherence times limit circuit depth for complex algorithms",
      "Not all qubits equally connected — heavy-hex limits some gate combinations",
    ],
    technicalNotes:
      "Condor uses IBM's 'heavy-hex' lattice topology, where qubits are arranged so each connects to at most 3 neighbors. This reduces the number of error pathways compared to a fully-connected grid, improving overall device reliability at scale.",
  },
  {
    slug: "ibm-heron",
    name: "IBM Heron (r1)",
    company: "IBM",
    companySlug: "ibm",
    qubitCount: 133,
    qubitType: "Superconducting (fixed-frequency transmon qubits)",
    architecture: "Heavy-hex lattice with tunable couplers",
    releaseYear: "2023",
    connectivity: "Heavy-hex with tunable couplers between adjacent qubits",
    gateError: "~0.04–0.1% per two-qubit gate — IBM's best gate fidelity at release",
    coherenceTime: "T₁ ~300 µs, T₂ ~150 µs",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "IBM Quantum (cloud.ibm.com)",
    summary:
      "Released alongside Condor, IBM Heron represents IBM's highest-performance processor at the time — prioritizing gate fidelity over raw qubit count. Heron introduced tunable couplers between qubits, significantly reducing crosstalk (unwanted interactions between neighboring qubits) compared to previous IBM designs.",
    keyFeatures: [
      "Tunable couplers — allows qubits to be selectively coupled or decoupled, dramatically reducing crosstalk",
      "Best two-qubit gate error rates in IBM's lineup at release (~3–5× better than previous generation)",
      "Designed as the building block for IBM's modular, multi-chip architecture",
      "Supports quantum error correction experiments at small scale",
    ],
    limitations: [
      "Only 133 qubits — much smaller than Condor",
      "Tunable couplers add control complexity",
    ],
    technicalNotes:
      "Heron's tunable couplers are one of its most important innovations. Previous IBM processors used fixed couplings between qubits, meaning unwanted interactions were always present. Tunable couplers allow the interaction strength to be turned on and off, reducing errors significantly during idle periods.",
  },
  {
    slug: "google-sycamore",
    name: "Google Sycamore",
    company: "Google (Google Quantum AI)",
    companySlug: "google",
    qubitCount: 53,
    qubitType: "Superconducting (transmon qubits)",
    architecture: "2D grid with nearest-neighbor connectivity",
    releaseYear: "2019",
    connectivity: "2D rectangular grid — each qubit connects to 4 nearest neighbors",
    gateError: "~0.6% per two-qubit gate (at time of release)",
    coherenceTime: "T₁ ~50 µs, T₂ ~70 µs (at time of release)",
    operatingTemp: "~20 millikelvin",
    cloudAccess: false,
    summary:
      "Google Sycamore achieved global recognition in 2019 when Google claimed it had achieved 'quantum supremacy' — completing a random circuit sampling task in 200 seconds that Google estimated would take the world's best supercomputer approximately 10,000 years. The claim was later contested, but Sycamore remains a landmark in quantum computing history.",
    keyFeatures: [
      "First processor associated with a credible 'quantum supremacy' claim",
      "Programmable superconducting processor with 53 active qubits (54 qubits fabricated, one non-functional)",
      "2D grid architecture enabling nearest-neighbor two-qubit gates",
      "Demonstrated random circuit sampling at scale",
    ],
    limitations: [
      "IBM and others later argued classical simulation of Sycamore's task was achievable in days, not 10,000 years, with improved classical algorithms",
      "Not available for public cloud access",
      "Relatively low qubit count and shorter coherence times by today's standards",
    ],
    technicalNotes:
      "The 'quantum supremacy' debate around Sycamore highlighted a key challenge in benchmarking: as classical simulation algorithms improve, the threshold for what counts as 'hard for a classical computer' shifts. The scientific value of the demonstration was in proving large-scale superconducting control, not the specific task chosen.",
  },
  {
    slug: "ionq-forte",
    name: "IonQ Forte",
    company: "IonQ",
    companySlug: "ionq",
    qubitCount: 32,
    qubitType: "Trapped-ion (ytterbium ions)",
    architecture: "Linear ion trap with all-to-all connectivity",
    releaseYear: "2023",
    connectivity: "All-to-all — any qubit can directly interact with any other qubit",
    gateError: "~0.1% per two-qubit gate",
    coherenceTime: "T₂ > 1 second (trapped ions have much longer coherence than superconducting)",
    operatingTemp: "Room temperature (ion trap operates in vacuum, not cryogenic)",
    cloudAccess: true,
    cloudPlatform: "AWS Braket, Azure Quantum, Google Cloud",
    summary:
      "IonQ Forte is IonQ's flagship trapped-ion quantum computer, offering 32 algorithmic qubits with all-to-all connectivity and significantly longer coherence times than superconducting alternatives. Trapped-ion systems like Forte are often seen as complementary to superconducting approaches, excelling in fidelity and coherence at the cost of slower gate speeds.",
    keyFeatures: [
      "All-to-all qubit connectivity — any qubit can interact with any other, simplifying circuit compilation",
      "Long coherence times (seconds vs microseconds for superconducting qubits)",
      "High gate fidelity — among the best available commercially",
      "Available across multiple major cloud platforms",
      "No cryogenic cooling required — operates in a compact vacuum chamber at room temperature",
    ],
    limitations: [
      "Gate operations are slower than superconducting qubits (microseconds vs nanoseconds)",
      "32 qubits — fewer than leading superconducting systems",
      "Scaling to large qubit numbers while maintaining all-to-all connectivity is an engineering challenge",
    ],
    technicalNotes:
      "IonQ measures performance using 'algorithmic qubits' — a metric that accounts for both qubit count and gate fidelity to estimate how complex an algorithm the device can reliably run. Forte's 32 algorithmic qubits compare favorably to much larger superconducting processors with lower fidelity.",
  },
  {
    slug: "rigetti-novera",
    name: "Rigetti Novera QPU",
    company: "Rigetti Computing",
    companySlug: "rigetti",
    qubitCount: 9,
    qubitType: "Superconducting (tunable transmon qubits)",
    architecture: "Square lattice",
    releaseYear: "2023",
    connectivity: "Nearest-neighbor square grid",
    gateError: "~1–2% per two-qubit gate",
    coherenceTime: "T₁ ~40–80 µs",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "Rigetti Quantum Cloud Services (QCS)",
    summary:
      "The Rigetti Novera is notable for being the first commercially purchasable quantum processing unit (QPU) — allowing research institutions and companies to own and operate a quantum processor on-premise rather than relying solely on cloud access. With 9 qubits, it's designed for research, education, and quantum error correction experimentation.",
    keyFeatures: [
      "First commercially purchasable QPU — buy and operate on-premise",
      "Designed for quantum error correction research and education",
      "Full control over the hardware — not limited by cloud access constraints",
      "Comes with Rigetti's full software stack (Quil, pyQuil, QCS)",
    ],
    limitations: [
      "Only 9 qubits — not suitable for large-scale algorithm demonstrations",
      "Higher gate error rates than leading research systems",
      "Requires significant supporting infrastructure (dilution refrigerator, control electronics)",
    ],
    technicalNotes:
      "The Novera's significance is primarily commercial and educational rather than raw performance — it opens the possibility of on-premise quantum computing for the first time, which matters for organizations with security, latency, or customization requirements that cloud access cannot meet.",
  },
  {
    slug: "ionq-tempo",
    name: "IonQ Tempo",
    company: "IonQ",
    companySlug: "ionq",
    qubitCount: 36,
    qubitType: "Trapped-ion (ytterbium ions)",
    architecture: "Linear ion trap with all-to-all connectivity",
    releaseYear: "2025",
    connectivity: "All-to-all — any qubit can directly interact with any other qubit",
    gateError: "~0.05–0.1% per two-qubit gate",
    coherenceTime: "T₂ > 1 second",
    operatingTemp: "Room temperature (ion trap operates in vacuum)",
    cloudAccess: true,
    cloudPlatform: "AWS Braket, Azure Quantum, IonQ direct access",
    summary:
      "IonQ Tempo is IonQ's next-generation trapped-ion system following Forte, designed to push algorithmic qubit counts higher while maintaining the high gate fidelity and all-to-all connectivity that distinguishes trapped-ion architectures from superconducting alternatives.",
    keyFeatures: [
      "Improved algorithmic qubit count over the previous Forte generation",
      "Maintains all-to-all connectivity, simplifying circuit compilation",
      "Designed with enterprise and government deployment in mind",
      "Available through multiple major cloud platforms",
    ],
    limitations: [
      "Still fewer raw qubits than leading superconducting processors",
      "Gate operation speed remains slower than superconducting alternatives",
    ],
    technicalNotes:
      "IonQ continues to emphasize 'algorithmic qubits' as its primary performance metric rather than raw physical qubit count, arguing that high-fidelity, fully-connected qubits at modest scale outperform much larger, noisier processors for real algorithm execution.",
  },
  {
    slug: "google-willow",
    name: "Google Willow",
    company: "Google (Google Quantum AI)",
    companySlug: "google",
    qubitCount: 105,
    qubitType: "Superconducting (transmon qubits)",
    architecture: "2D grid with nearest-neighbor connectivity",
    releaseYear: "2024",
    connectivity: "2D rectangular grid — each qubit connects to 4 nearest neighbors",
    gateError: "~0.1–0.3% per two-qubit gate",
    coherenceTime: "T₁ approaching 100 µs, improved over Sycamore generation",
    operatingTemp: "~15 millikelvin",
    cloudAccess: false,
    summary:
      "Google Willow succeeded Sycamore as Google's flagship superconducting processor, notably demonstrating that logical error rates can decrease as more physical qubits are added to a surface code — a long-sought milestone suggesting quantum error correction can scale as theory predicts.",
    keyFeatures: [
      "Demonstrated 'below threshold' error correction scaling, a key fault-tolerance milestone",
      "Significant improvements in coherence time over the Sycamore generation",
      "Used to run improved random circuit sampling benchmarks",
      "Built with refined fabrication techniques to reduce defect-related errors",
    ],
    limitations: [
      "Not available for public cloud access",
      "Still well below the qubit counts needed for large-scale fault-tolerant algorithms",
    ],
    technicalNotes:
      "Willow's most significant result was showing that, as the surface code's distance is increased (more physical qubits protecting each logical qubit), the logical error rate decreases exponentially — confirming a foundational prediction of quantum error correction theory at meaningful scale for the first time.",
  },
  {
    slug: "ibm-eagle",
    name: "IBM Eagle",
    company: "IBM",
    companySlug: "ibm",
    qubitCount: 127,
    qubitType: "Superconducting (fixed-frequency transmon qubits)",
    architecture: "Heavy-hex lattice",
    releaseYear: "2021",
    connectivity: "Heavy-hex — each qubit connects to 2 or 3 neighbors",
    gateError: "~0.5–1% per two-qubit gate (at time of release)",
    coherenceTime: "T₁ ~100 µs (at time of release)",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "IBM Quantum (cloud.ibm.com)",
    summary:
      "IBM Eagle was the first quantum processor to exceed 100 qubits, released as part of IBM's published hardware roadmap. It marked a significant scaling milestone and validated the heavy-hex lattice architecture that IBM continued to use in later, larger processors like Condor.",
    keyFeatures: [
      "First processor to exceed 100 qubits",
      "Validated heavy-hex lattice scaling for future larger processors",
      "Part of IBM's first publicly committed multi-year hardware roadmap",
    ],
    limitations: [
      "Higher error rates than later IBM processors like Heron",
      "Superseded relatively quickly by Osprey and Condor in qubit count",
    ],
    technicalNotes:
      "Eagle's main historical significance is as a scaling proof point — demonstrating that IBM's heavy-hex architecture and fabrication process could be extended past the 100-qubit mark while remaining operable, paving the way for the much larger Osprey and Condor processors that followed.",
  },
  {
    slug: "ibm-osprey",
    name: "IBM Osprey",
    company: "IBM",
    companySlug: "ibm",
    qubitCount: 433,
    qubitType: "Superconducting (fixed-frequency transmon qubits)",
    architecture: "Heavy-hex lattice",
    releaseYear: "2022",
    connectivity: "Heavy-hex — each qubit connects to 2 or 3 neighbors",
    gateError: "~0.3–0.8% per two-qubit gate (at time of release)",
    coherenceTime: "T₁ ~100–150 µs",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "IBM Quantum (cloud.ibm.com)",
    summary:
      "IBM Osprey more than tripled the qubit count of the previous Eagle processor, serving as an intermediate scaling step on the path to Condor's 1,000+ qubit milestone, and helping IBM validate manufacturing processes needed for even larger future devices.",
    keyFeatures: [
      "More than 3x the qubit count of Eagle, the previous generation",
      "Continued validation of heavy-hex architecture at increasing scale",
      "Used for early large-scale error mitigation research",
    ],
    limitations: [
      "Gate fidelity not significantly improved over Eagle — scaling prioritized over quality at this stage",
      "Superseded by Condor's even larger qubit count the following year",
    ],
    technicalNotes:
      "Osprey represented a deliberate 'scale first' step in IBM's roadmap, prioritizing demonstrating manufacturing scalability before later generations like Heron shifted focus back toward improving per-qubit gate fidelity.",
  },
  {
    slug: "quantinuum-h2",
    name: "Quantinuum H2",
    company: "Quantinuum",
    companySlug: "quantinuum",
    qubitCount: 56,
    qubitType: "Trapped-ion (ytterbium ions)",
    architecture: "Quantum charge-coupled device (QCCD) linear trap",
    releaseYear: "2023",
    connectivity: "All-to-all via ion shuttling between trap zones",
    gateError: "~0.03% per two-qubit gate — among the best published fidelities of any platform",
    coherenceTime: "T₂ in the seconds range",
    operatingTemp: "Room temperature (ion trap operates in vacuum)",
    cloudAccess: true,
    cloudPlatform: "Microsoft Azure Quantum, Quantinuum direct access",
    summary:
      "Quantinuum's H2 processor (formed from the 2021 merger of Honeywell Quantum Solutions and Cambridge Quantum) has repeatedly set records for two-qubit gate fidelity, using a quantum charge-coupled device architecture that physically shuttles ions between trap zones to achieve flexible, high-quality connectivity.",
    keyFeatures: [
      "Among the highest published two-qubit gate fidelities of any quantum hardware platform",
      "QCCD architecture allows ions to be physically moved for flexible qubit connectivity",
      "Used to demonstrate some of the most complex error-corrected logical qubit experiments to date",
      "Strong focus on quantum chemistry and cryptography research applications",
    ],
    limitations: [
      "Lower qubit count than leading superconducting processors",
      "Ion shuttling adds operational complexity and time overhead compared to fixed-position qubit architectures",
    ],
    technicalNotes:
      "The QCCD architecture's defining feature is the ability to physically move ions between different zones of the trap, effectively reconfiguring which qubits are adjacent to each other on demand — a fundamentally different approach to achieving connectivity than either superconducting grids or static ion chains.",
  },
  {
    slug: "pasqal-fresnel",
    name: "Pasqal Fresnel",
    company: "Pasqal",
    companySlug: "pasqal",
    qubitCount: 100,
    qubitType: "Neutral atom (rubidium atoms held in optical tweezers)",
    architecture: "Reconfigurable 2D and 3D atom arrays",
    releaseYear: "2023",
    connectivity: "Reconfigurable — programmable geometric arrangement of atoms determines connectivity",
    gateError: "~1–3% per two-qubit gate",
    coherenceTime: "Coherence times in the millisecond range — notably long for a gate-based platform",
    operatingTemp: "Ultra-cold atoms (microkelvin range), held in room-temperature vacuum chamber via lasers",
    cloudAccess: true,
    cloudPlatform: "Pasqal Cloud, AWS Braket",
    summary:
      "Pasqal's Fresnel processor uses neutral atoms held in place by precisely focused laser beams ('optical tweezers'), offering a uniquely reconfigurable architecture where the physical arrangement of qubits — and therefore their connectivity — can be programmed for each specific problem.",
    keyFeatures: [
      "Reconfigurable atom arrangement allows custom connectivity per problem",
      "Notably long coherence times relative to gate speed",
      "Well-suited to simulating other quantum systems with similar geometric structure",
      "No need for individual wiring to each qubit, unlike superconducting approaches",
    ],
    limitations: [
      "Higher gate error rates than leading trapped-ion or superconducting systems",
      "Atom loss and reloading between runs adds operational overhead",
    ],
    technicalNotes:
      "Neutral atom platforms like Fresnel are particularly well suited to quantum simulation tasks where the natural geometry of the problem (such as molecular structures or condensed matter physics models) can be directly mapped onto the physical arrangement of trapped atoms.",
  },
  {
    slug: "xanadu-borealis",
    name: "Xanadu Borealis",
    company: "Xanadu",
    companySlug: "xanadu",
    qubitCount: 216,
    qubitType: "Photonic (squeezed light states, continuous-variable)",
    architecture: "Time-multiplexed photonic loop",
    releaseYear: "2022",
    connectivity: "Programmable via reconfigurable optical interferometers",
    gateError: "Photon loss is the dominant error source rather than traditional gate error rates",
    coherenceTime: "Not directly applicable — photons are typically used immediately rather than stored",
    operatingTemp: "Room temperature for most components (some cooling needed for photon detectors)",
    cloudAccess: true,
    cloudPlatform: "Xanadu Cloud",
    summary:
      "Xanadu Borealis was the first photonic quantum computer to demonstrate a quantum advantage claim that was accessible over the cloud to the public, using squeezed light and a technique called Gaussian Boson Sampling, distinguishing it from the more common qubit-based architectures covered elsewhere on this site.",
    keyFeatures: [
      "Demonstrated a publicly accessible quantum advantage claim via Gaussian Boson Sampling",
      "Operates largely at room temperature, unlike superconducting approaches",
      "Time-multiplexed design reuses the same physical hardware for many computational modes",
      "Photonic approach offers a naturally different error model than qubit-based systems",
    ],
    limitations: [
      "Photon loss accumulates with circuit complexity, fundamentally limiting achievable circuit depth",
      "Uses continuous-variable quantum information rather than discrete qubits, requiring different algorithms than most of this database covers",
    ],
    technicalNotes:
      "Borealis works with 'squeezed states' of light rather than traditional qubits, making it a continuous-variable quantum computer. This is a fundamentally different computational model than the discrete-qubit systems (superconducting, trapped-ion, neutral atom) covered elsewhere, suited to specific sampling problems rather than general-purpose gate-based algorithms.",
  },
  {
    slug: "dwave-advantage2",
    name: "D-Wave Advantage2",
    company: "D-Wave Systems",
    companySlug: "d-wave",
    qubitCount: 4400,
    qubitType: "Superconducting flux qubits (quantum annealer)",
    architecture: "Zephyr topology — higher connectivity than previous D-Wave generations",
    releaseYear: "2024",
    connectivity: "Each qubit connects to up to 20 neighbors in the Zephyr topology",
    gateError: "Not applicable — annealers don't use discrete gates the way gate-based processors do",
    coherenceTime: "Not the primary relevant metric for annealing-based architectures",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "D-Wave Leap cloud platform",
    summary:
      "D-Wave Advantage2 is the latest generation of D-Wave's specialized quantum annealing hardware, a fundamentally different architecture from the gate-based processors that dominate this database, purpose-built for solving optimization problems via quantum annealing rather than running general quantum algorithms.",
    keyFeatures: [
      "Thousands of qubits — far exceeding gate-based processor qubit counts, though not directly comparable",
      "Improved Zephyr connectivity topology over previous Pegasus-generation hardware",
      "Purpose-built for combinatorial optimization problems",
      "Longest continuously commercially available quantum computing platform, dating back to 2011",
    ],
    limitations: [
      "Cannot run general-purpose gate-based quantum algorithms like Shor's or Grover's",
      "Whether quantum annealing provides genuine advantage over best classical optimization heuristics remains actively debated",
      "Qubit count is not directly comparable to gate-based processor qubit counts due to the fundamentally different computational model",
    ],
    technicalNotes:
      "D-Wave's annealing architecture implements a physical realization of adiabatic quantum computation, encoding optimization problems directly into the energy landscape of a superconducting qubit network rather than executing discrete gate sequences — a different paradigm covered in our Algorithms Database entry on adiabatic quantum computation.",
  },
  {
    slug: "origin-wukong",
    name: "Origin Wukong",
    company: "Origin Quantum",
    companySlug: "origin-quantum",
    qubitCount: 72,
    qubitType: "Superconducting (transmon qubits)",
    architecture: "2D grid architecture",
    releaseYear: "2024",
    connectivity: "Nearest-neighbor 2D grid",
    gateError: "~0.5–1% per two-qubit gate",
    coherenceTime: "T₁ in the tens of microseconds range",
    operatingTemp: "~15 millikelvin",
    cloudAccess: true,
    cloudPlatform: "Origin Quantum Cloud Platform",
    summary:
      "Origin Wukong is a flagship superconducting quantum processor developed by China's Origin Quantum, representing one of the most prominent domestically developed quantum computing platforms in China, with public cloud access for running quantum circuits.",
    keyFeatures: [
      "One of China's most prominent indigenously developed superconducting quantum processors",
      "Publicly accessible cloud platform for running quantum circuits",
      "Part of a broader Chinese national push toward quantum computing self-sufficiency",
    ],
    limitations: [
      "Gate fidelity and coherence times trail the leading US-based superconducting platforms as of this processor's release",
      "Smaller qubit count than leading IBM or Google processors",
    ],
    technicalNotes:
      "Origin Wukong is notable less for record-setting specs and more for its role in China's broader quantum computing ecosystem, alongside academic efforts like the Jiuzhang photonic quantum computing experiments, reflecting significant national investment in domestic quantum hardware capability.",
  },
];

export function getProcessorBySlug(slug: string) {
  return processors.find((p) => p.slug === slug);
}
