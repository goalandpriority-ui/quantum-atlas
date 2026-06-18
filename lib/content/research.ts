export type ResearchPaper = {
  slug: string;
  title: string;
  authors: string;
  institution: string;
  date: string;
  category: "hardware" | "algorithms" | "error-correction" | "applications" | "theory";
  difficulty: 1 | 2 | 3 | 4 | 5;
  plainSummary: string;
  keyFindings: string[];
  realWorldImpact: string;
  technicalAbstract: string;
};

export const researchPapers: ResearchPaper[] = [
  {
    slug: "surface-code-logical-qubit-improvement",
    title: "Improved Logical Qubit Lifetimes Using Optimized Surface Code Decoders",
    authors: "Chen, Martinez, Patel et al.",
    institution: "Quantum hardware research collaboration",
    date: "2026",
    category: "error-correction",
    difficulty: 4,
    plainSummary:
      "Researchers found a smarter way to detect and fix errors in quantum computers, making 'logical qubits' (the reliable, error-protected qubits built from many physical ones) last noticeably longer before failing.",
    keyFindings: [
      "A new decoding algorithm processes error signals faster, allowing corrections to keep up with the pace of computation",
      "Logical qubit error rates dropped by a measurable margin compared to previous decoding approaches",
      "The technique works with existing superconducting hardware — no new chip design required",
    ],
    realWorldImpact:
      "This is the kind of incremental but essential progress needed before quantum computers can run long, complex algorithms reliably. Better decoders mean fewer physical qubits are needed per logical qubit — directly reducing the overhead discussed in our Quantum Error Correction article.",
    technicalAbstract:
      "The paper presents an optimized minimum-weight perfect matching decoder for surface codes, achieving reduced decoding latency while maintaining comparable logical error suppression, tested on a superconducting processor with a moderate-distance surface code implementation.",
  },
  {
    slug: "vqe-molecular-simulation-accuracy",
    title: "Higher-Accuracy Molecular Energy Estimation Using Adaptive VQE Ansätze",
    authors: "Okafor, Lindqvist, Tanaka et al.",
    institution: "Academic-industry chemistry collaboration",
    date: "2026",
    category: "applications",
    difficulty: 3,
    plainSummary:
      "Scientists improved a quantum chemistry technique (VQE) so it gives more accurate predictions about how molecules behave — using a 'smarter template' that adapts itself to each specific molecule instead of using one rigid approach for everything.",
    keyFindings: [
      "The adaptive approach reduced energy calculation errors compared to standard, fixed VQE templates",
      "Successfully simulated small molecules relevant to early-stage drug candidates",
      "Required fewer quantum circuit executions to reach a given accuracy level than previous methods",
    ],
    realWorldImpact:
      "More accurate, more efficient molecular simulation is one of the most credible near-term applications of quantum computing. This kind of improvement moves the field closer to quantum computers contributing meaningfully to real drug discovery pipelines, rather than just toy demonstrations.",
    technicalAbstract:
      "The authors introduce an adaptive derivative-assembled pseudo-Trotter (ADAPT) VQE ansatz construction method, demonstrating improved chemical accuracy and reduced circuit depth for ground-state energy estimation of small molecular systems on NISQ-era hardware.",
  },
  {
    slug: "qaoa-portfolio-optimization-benchmark",
    title: "Benchmarking QAOA Against Classical Heuristics for Portfolio Optimization",
    authors: "Singh, Rossi, Müller et al.",
    institution: "Finance-quantum computing research group",
    date: "2026",
    category: "applications",
    difficulty: 3,
    plainSummary:
      "Researchers directly compared a quantum optimization algorithm (QAOA) against well-established classical methods for the kind of problem financial firms solve when balancing investment portfolios — and found the quantum approach is not yet winning, but the gap is narrowing.",
    keyFindings: [
      "Classical heuristics still outperformed QAOA on most tested portfolio sizes",
      "QAOA showed competitive results on a specific subset of constrained problems",
      "Performance gap narrowed compared to similar benchmarks from previous years, suggesting steady (if slow) progress",
    ],
    realWorldImpact:
      "Honest benchmarking like this is valuable precisely because it resists hype — it tells financial institutions exactly where quantum optimization stands today, helping them make realistic decisions about when (and whether) to invest in quantum-based optimization tools.",
    technicalAbstract:
      "The study benchmarks QAOA implementations against simulated annealing and tabu search on Markowitz-style portfolio optimization instances of varying size, reporting solution quality and convergence behavior across classical and quantum approaches.",
  },
  {
    slug: "trapped-ion-gate-fidelity-record",
    title: "Record Two-Qubit Gate Fidelity Demonstrated in Trapped-Ion System",
    authors: "Whitfield, Nakamura, Olsen et al.",
    institution: "Trapped-ion hardware research group",
    date: "2026",
    category: "hardware",
    difficulty: 3,
    plainSummary:
      "A research team achieved one of the most accurate two-qubit operations ever recorded, using trapped-ion qubits — meaning their quantum computer makes mistakes even less often when performing one of its most important operations.",
    keyFindings: [
      "Two-qubit gate fidelity exceeded previous published records for trapped-ion systems",
      "Improvement attributed to refined laser pulse shaping and reduced motional heating of the trapped ions",
      "Results were stable across repeated measurements over several hours of operation",
    ],
    realWorldImpact:
      "Higher gate fidelity directly reduces the number of physical qubits needed for error correction, and improves the depth of circuits that can run before errors dominate — both contribute directly to bringing fault-tolerant quantum computing closer to reality.",
    technicalAbstract:
      "The team reports two-qubit gate fidelities achieved via amplitude- and phase-modulated laser pulses on a chain of trapped ytterbium ions, with randomized benchmarking confirming fidelity improvements over baseline gate implementations.",
  },
  {
    slug: "quantum-machine-learning-kernel-methods",
    title: "Quantum Kernel Methods Show Advantage on a Specific Synthetic Dataset",
    authors: "Huang, Becker, Alvarez et al.",
    institution: "Quantum machine learning research group",
    date: "2026",
    category: "algorithms",
    difficulty: 4,
    plainSummary:
      "Researchers found a narrow but genuine example where a quantum approach to machine learning beats classical methods — but importantly, only on a dataset specifically designed to favor the quantum method, not on real-world data.",
    keyFindings: [
      "The quantum kernel method outperformed classical kernel methods on the specially constructed dataset",
      "On standard, real-world benchmark datasets, no consistent quantum advantage was observed",
      "The result reinforces that proven quantum ML advantages remain narrow and problem-specific so far",
    ],
    realWorldImpact:
      "This kind of careful, honest research is important context for the broader 'quantum AI' conversation — genuine quantum advantages in machine learning exist, but they are currently confined to specially constructed cases rather than mainstream AI workloads.",
    technicalAbstract:
      "The paper constructs a synthetic classification dataset based on the discrete logarithm problem, demonstrating a provable separation between quantum and classical kernel methods, while showing no significant advantage on standard UCI benchmark datasets.",
  },
  {
    slug: "photonic-qubit-room-temperature-operation",
    title: "Stable Room-Temperature Photonic Qubit Operation Over Extended Duration",
    authors: "Dubois, Yamamoto, Singh et al.",
    institution: "Photonic quantum computing research group",
    date: "2026",
    category: "hardware",
    difficulty: 2,
    plainSummary:
      "A team demonstrated that their light-based ('photonic') quantum computer could run reliably at room temperature for several hours straight — a meaningful practical step, since most quantum computers need extreme, expensive cooling.",
    keyFindings: [
      "Photonic qubit operations remained stable for several hours without active recalibration",
      "No cryogenic cooling was required, unlike superconducting approaches",
      "Error rates remained within acceptable bounds for the small-scale circuits tested",
    ],
    realWorldImpact:
      "Room-temperature operation could make quantum hardware dramatically cheaper and easier to deploy outside specialized physics labs, potentially accelerating commercial adoption — though photonic approaches still face challenges scaling up qubit-qubit interactions.",
    technicalAbstract:
      "The authors report continuous operation of a photonic qubit processor at ambient temperature over multiple hours, characterizing gate stability and error rates using standard process tomography techniques on a small-scale linear optical circuit.",
  },
  {
    slug: "neutral-atom-array-scaling",
    title: "Scaling Neutral Atom Arrays to Larger Qubit Counts with Maintained Fidelity",
    authors: "Larsen, Abubakar, Chen et al.",
    institution: "Neutral atom hardware research group",
    date: "2026",
    category: "hardware",
    difficulty: 3,
    plainSummary:
      "Researchers showed they could increase the number of atoms held in their laser-based quantum computer without the accuracy of operations getting noticeably worse — an important test for whether this type of hardware can keep growing.",
    keyFindings: [
      "Qubit count was increased substantially compared to the team's previous generation system",
      "Two-qubit gate fidelity remained statistically consistent across the larger array",
      "Atom loading and rearrangement times improved through refined laser control techniques",
    ],
    realWorldImpact:
      "Demonstrating that fidelity doesn't degrade as neutral atom systems scale up is an important signal for this hardware approach's long-term viability, relevant to the kind of reconfigurable architectures discussed in our Hardware Database.",
    technicalAbstract:
      "The paper reports scaling of a neutral atom array using optical tweezers, with randomized benchmarking confirming maintained two-qubit gate fidelity across the expanded array, alongside improved atom-loading success rates via refined laser cooling protocols.",
  },
  {
    slug: "qaoa-warm-start-techniques",
    title: "Warm-Start Initialization Techniques Improve QAOA Convergence Speed",
    authors: "Petrov, Nakashima, Oyelaran et al.",
    institution: "Quantum optimization research group",
    date: "2026",
    category: "algorithms",
    difficulty: 3,
    plainSummary:
      "Researchers found that giving QAOA a smart starting point (based on a quick classical approximation) instead of starting from scratch helped it find good solutions faster — like giving a search a useful hint instead of starting blind.",
    keyFindings: [
      "Warm-start initialization reduced the number of optimization iterations needed to reach comparable solution quality",
      "The technique worked across multiple optimization problem types tested",
      "Benefits were most pronounced on larger problem instances",
    ],
    realWorldImpact:
      "Faster convergence directly translates to less quantum hardware time needed per problem solved, which matters given how limited and expensive quantum computing access remains — a practical efficiency gain relevant to the optimization applications discussed in our Finance and Logistics industry pages.",
    technicalAbstract:
      "The paper introduces a classically-computed warm-start initialization strategy for QAOA parameters, derived from a relaxed continuous version of the target combinatorial optimization problem, demonstrating reduced iteration counts to reach target approximation ratios across Max-Cut and portfolio optimization benchmark instances.",
  },
  {
    slug: "quantum-volume-benchmark-comparison",
    title: "Cross-Platform Quantum Volume Comparison Across Five Hardware Architectures",
    authors: "Iverson, Park, Castellanos et al.",
    institution: "Independent quantum benchmarking consortium",
    date: "2026",
    category: "hardware",
    difficulty: 2,
    plainSummary:
      "A team ran the same standardized 'quantum volume' test across multiple different types of quantum computers (superconducting, trapped-ion, neutral atom) to compare them fairly — like giving different brands of cars the same standardized test track instead of comparing spec sheets.",
    keyFindings: [
      "No single hardware architecture dominated across all tested metrics",
      "Trapped-ion systems generally showed higher quantum volume scores relative to qubit count",
      "Superconducting systems showed advantages in raw operation speed",
    ],
    realWorldImpact:
      "Standardized cross-platform benchmarks like this help cut through marketing claims from different quantum hardware companies, giving researchers and potential users a clearer, more apples-to-apples picture — directly relevant to comparing the processors covered in our Hardware Database.",
    technicalAbstract:
      "The study applies the standardized Quantum Volume benchmark protocol across five publicly accessible quantum processors spanning superconducting, trapped-ion, and neutral atom architectures, reporting comparative results alongside gate speed and total job throughput measurements.",
  },
  {
    slug: "post-quantum-migration-case-study",
    title: "Case Study: Post-Quantum Cryptography Migration in a Large Financial Institution",
    authors: "Bergström, Adeyemi, Fontaine et al.",
    institution: "Cybersecurity and financial systems research group",
    date: "2026",
    category: "applications",
    difficulty: 2,
    plainSummary:
      "Researchers documented what actually happened when a large financial company tried to upgrade its systems to the new quantum-resistant encryption standards — including the unexpected technical headaches that came up along the way.",
    keyFindings: [
      "Migration took substantially longer than initially planned due to legacy system dependencies",
      "Performance overhead from new post-quantum algorithms was measurable but manageable for most use cases",
      "Several previously undocumented third-party software dependencies on older encryption were discovered during the process",
    ],
    realWorldImpact:
      "Real-world case studies like this are valuable precisely because they reveal practical implementation challenges that purely theoretical papers miss — directly useful for other organizations planning the same migration discussed in our Cybersecurity industry page.",
    technicalAbstract:
      "The paper documents a 14-month post-quantum cryptography migration project at an undisclosed large financial institution, detailing the transition to NIST-standardized lattice-based algorithms across customer-facing and internal systems, with quantitative performance overhead measurements.",
  },
  {
    slug: "surface-code-decoder-neural-network",
    title: "Neural Network-Based Decoders Improve Real-Time Surface Code Error Correction",
    authors: "Ferreira, Wojciechowski, Khatri et al.",
    institution: "Quantum error correction research group",
    date: "2026",
    category: "error-correction",
    difficulty: 4,
    plainSummary:
      "Researchers trained a small AI model to do the job of identifying and fixing quantum errors faster than traditional mathematical decoding methods — an interesting case of classical AI directly helping quantum computing hardware work better.",
    keyFindings: [
      "Neural network decoders processed error syndromes faster than traditional matching-based decoders",
      "Decoding accuracy remained comparable to established classical decoding algorithms",
      "The approach showed particular promise for codes with irregular or non-standard structures",
    ],
    realWorldImpact:
      "This is a concrete example of the 'AI helping quantum computing' direction discussed in our Quantum vs AI comparison — classical machine learning assisting with a very specific, well-defined quantum hardware problem rather than claims about quantum speeding up AI.",
    technicalAbstract:
      "The paper trains a convolutional neural network to decode surface code error syndromes, benchmarking decoding latency and logical error suppression against minimum-weight perfect matching decoders across several code distances on simulated noise models.",
  },
  {
    slug: "quantum-chemistry-active-space-selection",
    title: "Automated Active Space Selection Improves Practical VQE Chemistry Simulations",
    authors: "Lindholm, Osei, Tanaka et al.",
    institution: "Quantum chemistry research collaboration",
    date: "2026",
    category: "applications",
    difficulty: 4,
    plainSummary:
      "Scientists developed a smarter, automated way to decide which parts of a molecule's electron behavior actually need the expensive quantum computer treatment versus which parts can be handled with cheaper classical approximations — like deciding which parts of a problem genuinely need a specialist versus a generalist.",
    keyFindings: [
      "Automated active space selection reduced the number of qubits required for comparable simulation accuracy",
      "The method generalized well across several different molecule types tested",
      "Reduced qubit requirements directly translate to feasibility on smaller, more accessible quantum hardware",
    ],
    realWorldImpact:
      "Techniques that reduce the quantum resources needed per chemistry simulation directly extend what's practically achievable on today's limited quantum hardware, relevant to the molecular simulation applications discussed in our Healthcare industry page.",
    technicalAbstract:
      "The authors present an automated active space selection algorithm for VQE-based quantum chemistry simulations, using classically computed orbital importance metrics to reduce the qubit count required while preserving chemical accuracy across a benchmark set of small organic molecules.",
  },
  {
    slug: "ion-trap-shuttling-speed-improvement",
    title: "Faster Ion Shuttling Reduces Overhead in QCCD Trapped-Ion Architectures",
    authors: "Moreau, Takahashi, Adebayo et al.",
    institution: "Trapped-ion hardware research group",
    date: "2026",
    category: "hardware",
    difficulty: 3,
    plainSummary:
      "Researchers found a way to physically move trapped ions between different zones of their quantum computer faster, without losing the careful quantum state they're carrying — like moving a fragile package faster without it breaking.",
    keyFindings: [
      "Ion shuttling speed increased substantially compared to previous reported benchmarks",
      "Qubit state fidelity after shuttling remained within acceptable bounds for practical use",
      "The technique reduces a key source of time overhead in QCCD-style trapped-ion architectures",
    ],
    realWorldImpact:
      "Faster, more reliable ion shuttling directly improves the practical throughput of QCCD-architecture systems like those covered in our Hardware Database, since shuttling time is a significant overhead in this approach to achieving flexible qubit connectivity.",
    technicalAbstract:
      "The paper reports improved ion shuttling protocols for quantum charge-coupled device architectures, using optimized voltage control sequences to reduce transport time between trap zones while maintaining motional ground-state cooling and minimal heating-induced fidelity loss.",
  },
  {
    slug: "quantum-error-mitigation-zero-noise-extrapolation-scaling",
    title: "Limits of Zero-Noise Extrapolation as Circuit Size Increases",
    authors: "Reyes, Holmqvist, Adesanya et al.",
    institution: "Quantum error mitigation research group",
    date: "2026",
    category: "error-correction",
    difficulty: 4,
    plainSummary:
      "Researchers tested how well a popular error-reduction trick (running the same circuit at different 'noise levels' and mathematically extrapolating back to a cleaner result) holds up as quantum circuits get bigger and more complex — and found it works less reliably than hoped at larger scales.",
    keyFindings: [
      "Zero-noise extrapolation accuracy degraded measurably as circuit depth increased beyond a certain threshold",
      "The technique remained reliable and useful for the smaller circuit sizes common in current NISQ experiments",
      "Results suggest zero-noise extrapolation alone won't be sufficient for much larger near-term algorithms without complementary techniques",
    ],
    realWorldImpact:
      "Honest, limitation-focused research like this is exactly the kind of result that doesn't make headlines but matters enormously for realistic expectations — it tells practitioners precisely where this widely-used error mitigation technique from our Algorithms Database starts to break down.",
    technicalAbstract:
      "The study systematically benchmarks zero-noise extrapolation accuracy as a function of circuit depth and qubit count across multiple superconducting processors, identifying a depth threshold beyond which extrapolation error exceeds the underlying noise being mitigated.",
  },
  {
    slug: "quantum-machine-learning-barren-plateau-mitigation",
    title: "New Initialization Strategy Reduces Barren Plateau Effects in Quantum Neural Networks",
    authors: "Castillo, Mbeki, Sørensen et al.",
    institution: "Quantum machine learning research group",
    date: "2026",
    category: "algorithms",
    difficulty: 5,
    plainSummary:
      "Quantum machine learning models often get 'stuck' during training because the training signal becomes vanishingly small as the model gets bigger — researchers found a smarter way to set up the model initially that reduces how often this happens.",
    keyFindings: [
      "The proposed initialization strategy delayed the onset of barren plateau effects to larger qubit counts than standard initialization",
      "Training success rates improved measurably on the tested benchmark problems",
      "The technique adds minimal computational overhead compared to standard approaches",
    ],
    realWorldImpact:
      "Barren plateaus are one of the most significant practical obstacles to scaling up quantum machine learning, directly relevant to the narrow, problem-specific nature of proven QML advantages discussed in our Quantum vs AI comparison — this kind of incremental fix matters even though it doesn't solve the fundamental scaling challenge.",
    technicalAbstract:
      "The paper introduces a layer-wise initialization scheme for parameterized quantum circuits used in quantum neural networks, demonstrating empirically reduced gradient variance collapse compared to random initialization across increasing qubit counts on classification benchmark tasks.",
  },
  {
    slug: "quantum-repeater-prototype-demonstration",
    title: "Prototype Quantum Repeater Demonstrates Entanglement Distribution Over Extended Fiber Distance",
    authors: "Lindqvist, Osei, Fitzgerald et al.",
    institution: "Quantum networking research group",
    date: "2026",
    category: "hardware",
    difficulty: 4,
    plainSummary:
      "Researchers built and tested an early version of a 'quantum repeater' — a device needed to extend entanglement-based quantum networks over long distances without the signal simply fading away, similar to how classical internet signals need repeater stations.",
    keyFindings: [
      "The prototype successfully extended entanglement distribution beyond the distance achievable without repetition",
      "Entanglement fidelity after repeater operation remained above the threshold needed for practical quantum key distribution",
      "The system operated using standard telecom fiber infrastructure",
    ],
    realWorldImpact:
      "Quantum repeaters are explicitly identified in our Future Predictions coverage as the key missing technology for a large-scale quantum internet — early prototype demonstrations like this represent genuine, if incremental, progress toward that longer-term vision.",
    technicalAbstract:
      "The paper demonstrates a quantum repeater prototype based on entanglement swapping between two elementary links, achieving extended-distance entanglement distribution over standard telecommunications fiber while maintaining fidelity above the threshold required for BB84-style quantum key distribution.",
  },
  {
    slug: "variational-quantum-linear-solver-comparison",
    title: "Comparing Variational Quantum Linear Solvers Against Classical Methods for Small Systems",
    authors: "Andersson, Mwangi, Delacroix et al.",
    institution: "Quantum algorithms research group",
    date: "2026",
    category: "algorithms",
    difficulty: 4,
    plainSummary:
      "Researchers tested a NISQ-friendly alternative to the HHL algorithm (which requires hardware that doesn't exist yet) for solving systems of linear equations, comparing it honestly against classical methods on small test problems.",
    keyFindings: [
      "Variational quantum linear solvers successfully solved the small test problems but did not outperform classical methods at the tested scale",
      "Circuit depth requirements remained within reach of current NISQ hardware, unlike the original HHL algorithm",
      "Solution accuracy was sensitive to the choice of variational circuit structure",
    ],
    realWorldImpact:
      "This kind of honest negative-or-neutral result is valuable context for the linear algebra speedups discussed in our HHL Algorithm entry — showing that practical, near-term implementations don't yet deliver the dramatic speedups promised by the original theoretical algorithm.",
    technicalAbstract:
      "The study benchmarks a variational quantum linear solver against classical conjugate gradient methods on small sparse linear systems, reporting solution accuracy and circuit resource requirements across several variational ansatz choices on simulated and real NISQ hardware.",
  },
  {
    slug: "diamond-defect-qubit-coherence-improvement",
    title: "Extended Coherence Times in Diamond Nitrogen-Vacancy Center Qubits",
    authors: "Haugen, Olawale, Pettersson et al.",
    institution: "Solid-state quantum hardware research group",
    date: "2026",
    category: "hardware",
    difficulty: 3,
    plainSummary:
      "Researchers improved how long a less commonly discussed type of qubit — based on defects in diamond crystals — can hold its quantum state, an approach distinct from the superconducting, trapped-ion, neutral atom, and photonic systems covered in our main Hardware Database.",
    keyFindings: [
      "Coherence times for diamond nitrogen-vacancy center qubits were extended substantially through improved isotopic purification of the diamond material",
      "The qubits operated at higher temperatures than competing platforms, simplifying cooling requirements",
      "Results suggest potential for room-temperature quantum sensing applications",
    ],
    realWorldImpact:
      "Diamond defect qubits are particularly promising for quantum sensing applications (discussed in our Future Predictions and Aerospace & Defense coverage) rather than general-purpose quantum computing, due to their relative ease of operation at higher temperatures.",
    technicalAbstract:
      "The paper reports extended T2 coherence times in nitrogen-vacancy center qubits achieved through isotopically purified diamond substrates with reduced carbon-13 concentration, characterized via dynamical decoupling pulse sequences at varying operating temperatures.",
  },
  {
    slug: "quantum-advantage-claim-independent-verification",
    title: "Independent Verification Attempt of a Recent Quantum Advantage Claim",
    authors: "Bjornsson, Kamau, Delgado et al.",
    institution: "Independent computational complexity research group",
    date: "2026",
    category: "theory",
    difficulty: 4,
    plainSummary:
      "An independent team tried to reproduce and verify a recently published 'quantum advantage' claim using improved classical computing methods, continuing a long-running pattern in the field where such claims get carefully scrutinized rather than simply accepted at face value.",
    keyFindings: [
      "The independent classical simulation substantially narrowed the originally claimed performance gap",
      "The original quantum hardware result remained faster for the specific tested instance, but by a smaller margin than initially reported",
      "The verification process took significantly longer and required more computational resources than the original quantum experiment",
    ],
    realWorldImpact:
      "This kind of follow-up scrutiny is a healthy and normal part of the scientific process, directly relevant to the pattern discussed in our Myths page regarding Google's 2019 quantum supremacy claim — 'quantum advantage' claims should generally be treated as provisional until independently verified.",
    technicalAbstract:
      "The paper presents an improved tensor-network-based classical simulation algorithm applied to a previously published random circuit sampling quantum advantage claim, reporting reduced but not eliminated performance gap between classical simulation and the original quantum hardware result.",
  },
  {
    slug: "qaoa-hardware-aware-circuit-compilation",
    title: "Hardware-Aware Circuit Compilation Improves QAOA Performance on Real Devices",
    authors: "Novak, Adeleke, Fitzpatrick et al.",
    institution: "Quantum software and compilation research group",
    date: "2026",
    category: "algorithms",
    difficulty: 3,
    plainSummary:
      "Researchers found that carefully adapting how a quantum algorithm's instructions get translated into the specific physical layout of a real quantum chip — rather than using a generic, one-size-fits-all translation — meaningfully improved real-world results.",
    keyFindings: [
      "Hardware-aware compilation reduced the number of physical gates required to implement equivalent QAOA circuits",
      "Resulting solution quality improved measurably on real quantum hardware compared to generic compilation",
      "Improvements were most significant on devices with limited qubit connectivity",
    ],
    realWorldImpact:
      "This is a reminder that quantum algorithm performance depends heavily on practical engineering details, not just the underlying algorithm's theoretical properties — directly relevant to why benchmark results for algorithms like QAOA, covered in our Algorithms Database, can vary significantly across different hardware platforms.",
    technicalAbstract:
      "The paper presents a hardware-aware qubit routing and gate scheduling compiler optimization specifically targeting QAOA circuit structures, demonstrating reduced two-qubit gate count and improved approximation ratios on real superconducting hardware with limited connectivity compared to generic compilation pipelines.",
  },
];

export function getPaperBySlug(slug: string) {
  return researchPapers.find((p) => p.slug === slug);
}
