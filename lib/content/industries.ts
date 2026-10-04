export type IndustryUseCase = {
  title: string;
  problem: string;
  approach: string;
  reality: string;
  algorithms?: string[];
};

export type IndustryFaq = { q: string; a: string };

export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  maturity: "exploratory" | "early-pilots" | "active-deployment";
  // Optional long-form fields. Pages render each section only when present.
  metaDescription?: string;
  lastUpdated?: string;
  overview?: string[];
  whyQuantum?: string[];
  atAGlance?: { label: string; value: string }[];
  keyNumbers?: { label: string; value: string }[];
  useCases?: IndustryUseCase[];
  whoIsWorking?: string[];
  timeline?: { horizon: string; outlook: string }[];
  deepDive?: string[];
  obstacles?: string[];
  gettingStarted?: string[];
  mythsVsReality?: string[];
  bottomLine?: string[];
  faq?: IndustryFaq[];
  relatedAlgorithms?: string[];
  relatedHardware?: string[];
  relatedCompanies?: string[];
  relatedIndustries?: string[];
  relatedResearch?: string[];
};

export const industries: Industry[] = [
  {
    slug: "finance",
    name: "Quantum Computing for Finance",
    tagline: "Portfolio optimization, risk modeling, and derivatives pricing",
    summary: "Financial institutions are exploring quantum algorithms for optimization and Monte Carlo-style simulations — among the most actively piloted near-term applications.",
    maturity: "early-pilots",
    metaDescription: "How quantum computing could affect banking, trading, risk, and derivatives pricing: real pilots (HSBC, JPMorgan), resource estimates, obstacles, and timelines.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Finance is the most visible commercial testing ground for quantum computing. Banks, asset managers, and insurers run some of the most computation-hungry workloads in the economy: pricing derivatives, measuring risk across millions of scenarios, building portfolios under dozens of constraints, and screening transactions for fraud. They also employ large numbers of quantitative researchers, so the sector can evaluate new methods quickly, and a small edge in speed or accuracy can be worth a great deal of money.",
      "That combination explains why nearly every major bank now has a quantum team or a research partnership. It does not mean quantum computers are running trading desks. Today's activity falls into three groups: pilots on small, noisy machines whose results are compared against classical baselines; resource estimates that ask how large a fault-tolerant machine would need to be for a given task; and preparation for the security effects of quantum computing, which is the one area where action is already required.",
    ],
    whyQuantum: [
      "Two kinds of problems dominate quantitative finance. The first is simulation: estimating an average over many random scenarios, which is what Monte Carlo methods do for pricing and risk. The second is optimization: choosing the best combination of assets, trades, or hedges from an astronomically large set of possibilities. Quantum algorithms offer a provable quadratic speedup for Monte Carlo estimation and heuristic approaches to optimization.",
      "Finance also has an unusual tolerance for approximate answers. A price needs to be correct to a cent, not to the last digit, and a portfolio only needs to be good, not provably optimal. That tolerance suits near-term hybrid methods that give approximate answers, and it lowers the bar for a useful quantum contribution compared with fields that need exact results.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots, with post-quantum security migration already underway" },
      { label: "Most credible quantum workload", value: "Monte Carlo estimation for derivative pricing and risk (amplitude estimation)" },
      { label: "Hardware needed for that workload", value: "Fault-tolerant machine with thousands of logical qubits" },
      { label: "Strongest classical competition", value: "GPU Monte Carlo, quasi-Monte Carlo, and commercial optimization solvers" },
      { label: "Only urgent action today", value: "Migrating cryptography to post-quantum standards" },
      { label: "Realistic horizon for production use", value: "Early 2030s for estimation tasks; later and less certain for the rest" },
    ],
    keyNumbers: [
      { label: "Post-quantum standards", value: "NIST FIPS 203 (ML-KEM), 204 (ML-DSA), and 205 (SLH-DSA), published in August 2024" },
      { label: "RSA-2048 break estimate", value: "Fewer than one million noisy physical qubits, under a week (Gidney, 2025)" },
      { label: "Derivative pricing advantage", value: "On the order of 8,000 logical qubits (Goldman Sachs, IBM, and QC Ware, 2021)" },
      { label: "HSBC and IBM bond study", value: "Up to 34 percent better fill prediction, up to 109 qubits and about 4,200 gates (September 2025)" },
      { label: "JPMorgan certified randomness", value: "56-qubit Quantinuum H2 with supercomputer verification, published in Nature in 2025" },
      { label: "Monte Carlo error scaling", value: "Classical: 1 over the square root of N; quantum amplitude estimation: 1 over N" },
      { label: "Key sizes", value: "ML-KEM-768 public key is 1,184 bytes versus 32 bytes for X25519" },
    ],
    useCases: [
      { title: "Derivative pricing and risk measurement", problem: "Pricing a complex derivative or computing a risk measure such as value at risk usually means simulating many paths of market variables and averaging the payoff. Accuracy improves only as one over the square root of the number of paths, so a ten-fold gain in accuracy needs a hundred-fold increase in computation, and large banks run these calculations overnight on big clusters.", approach: "Quantum amplitude estimation encodes the expected payoff as an amplitude and estimates it with error that shrinks as one over the number of circuit runs, a quadratic improvement. The 2021 study by Goldman Sachs, IBM, and QC Ware titled A Threshold for Quantum Advantage in Derivative Pricing estimated what hardware this needs.", reality: "That study found that a useful advantage for a representative derivative would need on the order of eight thousand logical qubits and a very fast, error-corrected machine, which is well beyond today's chips. Small price calculations have been run on IBM and other devices, but they use a handful of qubits and do not beat classical methods.", algorithms: [
          "quantum-amplitude-estimation",
          "quantum-monte-carlo-integration",
          "quantum-mean-estimation",
        ] },
      { title: "Portfolio optimization and trading", problem: "Building a portfolio that maximizes return for a given risk, while respecting limits on position size, sectors, turnover, and transaction costs, is a constrained optimization problem that grows hard as assets and constraints are added.", approach: "The problem is written as a quadratic binary optimization and attacked with QAOA on gate-based machines or with quantum annealing. Hybrid solvers split large problems between classical and quantum parts. Banks such as BBVA and Santander have run studies with Multiverse Computing and others on exactly this task.", reality: "Benchmarks generally show strong classical heuristics and solvers matching or beating current quantum methods at realistic sizes. Quantum-inspired classical hardware, such as Fujitsu's Digital Annealer and Toshiba's simulated bifurcation machines, has found some commercial use for similar problems, which shows that part of the value comes from the formulation, not from quantum effects.", algorithms: [
          "qaoa",
          "quantum-annealing",
          "quantum-max-cut",
        ] },
      { title: "Machine learning for prediction and fraud detection", problem: "Predicting whether a customer's trade request will be filled, flagging fraudulent transactions, and scoring credit risk are classification and regression tasks on noisy, high-dimensional data, where small accuracy gains translate into real revenue or avoided losses.", approach: "Quantum feature maps and kernel methods embed data in a high-dimensional quantum state space, and a classical model is trained on top. The hope is that quantum features capture structure that classical features miss.", reality: "In September 2025, HSBC and IBM reported up to a 34 percent improvement in predicting whether a European corporate bond trade would be filled at the quoted price, using real production-scale data, a hybrid workflow, and up to 109 qubits of an IBM Heron processor with circuits of up to about 4,200 gates. The authors noted that the result lacks guarantees of generalization to other markets and datasets, and that device noise may have contributed to the effect, so it is an encouraging data point and not proof of advantage.", algorithms: [
          "quantum-kernel-estimation",
          "quantum-support-vector-machine",
          "quantum-anomaly-detection",
        ] },
      { title: "Cryptography, randomness, and security", problem: "Financial systems rely on public-key cryptography for payments, settlement, signatures, and customer data, and adversaries can record encrypted traffic today and decrypt it once a large quantum computer exists. That risk is called harvest now, decrypt later.", approach: "The fix is to migrate to post-quantum cryptography, which runs on ordinary computers. Quantum devices also contribute directly: in 2025 JPMorgan Chase, working with Quantinuum and U.S. national laboratories, published in Nature a protocol that used a 56-qubit trapped-ion machine to generate randomness that can be certified, with classical supercomputers verifying the result.", reality: "Migration is the one quantum-related task in finance with a firm deadline. The U.S. National Institute of Standards and Technology published its first post-quantum standards in August 2024, and regulators and industry groups in the United States, Europe, and the United Kingdom have issued timelines running to the early and mid 2030s. Certified randomness is a proof of principle with niche commercial relevance.", algorithms: [
          "shors-algorithm",
          "quantum-supremacy-sampling",
          "bb84-protocol",
        ] },
    ],
    whoIsWorking: [
      "HSBC, with IBM, on algorithmic bond trading, and with a dedicated Group Head of Quantum Technologies who has described operational enhancement, financial simulation, and machine learning as the focus areas.",
      "JPMorgan Chase, which publishes extensively, including a 2023 survey of quantum computing for finance in Nature Reviews Physics, and the 2025 certified randomness work with Quantinuum.",
      "Goldman Sachs, whose researchers produced the widely cited derivative pricing resource estimate with IBM and QC Ware.",
      "BBVA, Santander, Wells Fargo, Citi, Barclays, and Vanguard, which have run pilots or partnerships on portfolio optimization, risk, and security, often with Multiverse Computing, IBM, IonQ, or Quantinuum.",
      "Regulators and standards bodies, including NIST and European and UK authorities, on the post-quantum migration timeline.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Post-quantum migration is the main operational task. Pilots on noisy hardware continue, mostly hybrid workflows for prediction and optimization, benchmarked against strong classical baselines." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines with tens to hundreds of logical qubits arrive. Small amplitude estimation and optimization demonstrations become possible, but probably not yet cost-effective." },
      { horizon: "2032 and later", outlook: "If error-corrected machines reach thousands of logical qubits at fast clock rates, Monte Carlo estimation for pricing and risk becomes the first likely production use. Broader advantage in optimization and machine learning remains uncertain." },
    ],
    deepDive: [
      "Finance is a good place to learn how to read quantum claims, because the baselines are well defined. For a pricing or risk task, ask what the classical method is, what hardware it runs on, and what accuracy it reaches in the same time. Production banks use GPU-accelerated Monte Carlo, variance reduction, and quasi-Monte Carlo methods, and a fair test compares against those, not against a naive single-core simulation. For optimization, the right baseline is a commercial mixed-integer solver or a tuned heuristic, run for the same wall-clock time.",
      "Several features of a claim deserve scrutiny. Was the problem small enough to solve exactly on a laptop? Did the quantum step carry the work, or did classical pre- and post-processing do most of it? Was the result tested on out-of-sample data, and does it hold at larger sizes? The HSBC study is useful because it used production-scale data, but its authors state clearly that generalization and the role of noise are open questions, which is the standard to hold other announcements to.",
    ],
    obstacles: [
      "Hardware: the cleanest speedup, amplitude estimation, needs deep circuits and thousands of logical qubits.",
      "Data loading: encoding market distributions and models into quantum states can cost as much as the computation it replaces.",
      "Classical competition: GPUs, quasi-Monte Carlo methods, and specialized optimizers keep improving, which keeps raising the bar.",
      "Governance: model validation, regulation, and explainability requirements slow adoption of any new method in production.",
    ],
    gettingStarted: [
      "Inventory cryptography across systems and vendors, and plan the post-quantum migration now, because it has a deadline and a long lead time.",
      "Keep a small research group that benchmarks quantum methods against the best classical alternatives on real internal problems.",
      "Estimate which workloads, such as large Monte Carlo runs, would benefit from a quadratic speedup and how large the hardware would need to be.",
      "Develop talent through partnerships and training, so the firm can evaluate vendor claims independently.",
    ],
    mythsVsReality: [
      "Myth: banks already trade with quantum computers. Reality: results so far come from trials, not live trading.",
      "Myth: a quantum computer will instantly price everything. Reality: the proven speedup for pricing is quadratic and needs large fault-tolerant machines.",
      "Myth: quantum computing only matters to finance in the future. Reality: the cryptographic risk requires action today.",
    ],
    bottomLine: [
      "For financial firms the quantum story has two timelines. Security is urgent, concrete, and already regulated, so it deserves budget now. Computational advantage is a probable but distant event that depends on fault-tolerant hardware, and is best handled by a small research team that benchmarks honestly and builds expertise. Treat headlines about speedups with care until they are reproduced against strong classical baselines.",
    ],
    faq: [
      { q: "Is quantum computing used in banks today?", a: "Banks run pilots and research projects on quantum hardware, but not in core trading or risk systems. The one area where action is already required is migrating cryptography to post-quantum standards." },
      { q: "What did the HSBC and IBM trial show?", a: "Using a hybrid quantum-classical workflow on IBM Heron processors and real bond trading data, HSBC reported up to a 34 percent improvement in predicting whether a trade would be filled at a quoted price. It was not a live deployment, and the authors caution that results may not generalize." },
      { q: "How many qubits would derivative pricing need?", a: "A 2021 study by Goldman Sachs, IBM, and QC Ware estimated roughly eight thousand logical qubits and extremely fast error-corrected operation for a useful advantage on a representative derivative." },
      { q: "Which financial problems benefit most from quantum computers?", a: "Monte Carlo estimation for pricing and risk has the best-established theoretical speedup. Optimization and machine learning are promising but unproven." },
      { q: "What should a financial firm do first?", a: "Start the post-quantum cryptography migration, since it is the one quantum-related task with a deadline, and keep a small team benchmarking quantum methods against classical baselines." },
    ],
    relatedAlgorithms: [
      "quantum-amplitude-estimation",
      "qaoa",
      "quantum-monte-carlo-integration",
      "shors-algorithm",
    ],
    relatedHardware: [
      "ibm-heron",
      "quantinuum-h2",
    ],
    relatedCompanies: [
      "ibm",
      "quantinuum",
      "multiverse-computing",
    ],
    relatedIndustries: [
      "cybersecurity",
      "logistics",
      "manufacturing",
    ],
    relatedResearch: [
      "qaoa-portfolio-optimization-benchmark",
      "quantum-machine-learning-kernel-methods",
      "post-quantum-migration-case-study",
    ],
  },
  {
    slug: "healthcare",
    name: "Quantum Computing for Healthcare",
    tagline: "Drug discovery, molecular simulation, and genomics",
    summary: "Quantum computing's most scientifically grounded near-term application: simulating molecules for drug discovery and understanding biological systems at the quantum level.",
    maturity: "early-pilots",
    metaDescription: "Quantum computing in healthcare: molecular simulation, genomics, imaging, treatment planning, and quantum sensing, with real pilots and honest timelines.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Healthcare touches quantum technology in two quite different ways. The first is quantum computing in the strict sense: using quantum processors to simulate molecules, search large combinatorial spaces, and learn from data. The second is quantum sensing, where the quantum properties of atoms and spins are used to build extremely sensitive detectors, some of which already appear in medical research and are further along than computing.",
      "On the computing side, the most scientifically solid prospect is simulating molecular and biochemical systems, which underpins drug discovery and is covered here from the clinical perspective. Other proposed uses, such as genomics, medical imaging, and treatment planning, are earlier-stage and often rely on hybrid methods that have not yet shown a measurable advantage over classical tools.",
    ],
    whyQuantum: [
      "Biology is chemistry, and chemistry is quantum mechanics. The interactions that decide how a drug binds to a protein, how an enzyme works, or how a molecule absorbs light depend on electron correlations that are exponentially expensive to describe on classical computers. Approximate classical methods work well for many cases, and a failure to capture strong correlations is a persistent limit for some important targets.",
      "Healthcare also generates optimization problems, in scheduling, radiation therapy planning, and logistics, and a large volume of data for machine learning. These are areas where quantum algorithms are being explored, but where the honest summary is that advantage has not been shown and strong classical methods set a high bar.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots; quantum sensing is further ahead than quantum computing" },
      { label: "Strongest scientific case", value: "Simulating molecules and reaction mechanisms" },
      { label: "Hardware needed", value: "Fault-tolerant machines with thousands of logical qubits for chemistry beyond classical reach" },
      { label: "Strongest classical competition", value: "Density functional theory, coupled cluster, AI structure prediction, and GPU molecular dynamics" },
      { label: "Nearest-term quantum contribution", value: "Sensing, such as optically pumped magnetometers for brain imaging" },
      { label: "Realistic horizon", value: "Early 2030s for first chemistry results; longer for clinical impact" },
    ],
    keyNumbers: [
      { label: "Drug development time", value: "Commonly cited as 10 to 15 years from target to approval, at a cost of over a billion dollars per approved drug" },
      { label: "Chemical accuracy target", value: "About 1.6 millihartree, roughly 1 kcal per mole, needed to predict binding and reactivity" },
      { label: "Metalloenzyme simulation", value: "Resource estimates for cytochrome P450 and FeMoco point to millions of physical qubits and days of runtime" },
      { label: "Cleveland Clinic and IBM", value: "First IBM Quantum System One installed on a hospital campus in 2023" },
      { label: "Typical near-term demos", value: "Small molecules and short sequences on roughly 2 to 100 qubits, solvable exactly or approximately by classical methods" },
      { label: "Quantum sensing in medicine", value: "Optically pumped magnetometers allow wearable brain-activity sensors without cryogenic cooling" },
    ],
    useCases: [
      { title: "Molecular simulation for drug and biologic design", problem: "Predicting how strongly a candidate drug binds to its target, and how enzymes metabolize it, requires accurate electronic structure calculations. For metal-containing enzymes such as cytochrome P450, which processes most drugs in the body, strong electron correlation limits the accuracy of standard classical approximations.", approach: "Quantum phase estimation and related algorithms can compute ground-state energies with guaranteed accuracy on a fault-tolerant machine. Near-term hybrid methods such as the variational quantum eigensolver use short circuits and a classical optimizer.", reality: "Published resource estimates for cytochrome P450 and similar systems point to millions of physical qubits and hours to days of runtime. Near-term demonstrations are on very small molecules that classical computers solve exactly. Meanwhile AI structure predictors have transformed the field in ways that reduce the immediate need for quantum methods.", algorithms: [
          "quantum-phase-estimation",
          "vqe",
          "trotter-suzuki-decomposition",
        ] },
      { title: "Genomics and sequence analysis", problem: "Assembling genomes from short reads, aligning sequences, and finding variants involve searching and optimizing over enormous sets of strings, and the data volumes keep growing.", approach: "Researchers have formulated assembly and alignment as optimization problems for quantum annealers and QAOA, and have studied Grover-style search for pattern matching.", reality: "Quadratic speedups from search algorithms do not overcome the data-loading cost for genomes, and classical tools built on indexing structures such as the Burrows-Wheeler transform are extremely efficient. Demonstrations are on toy-sized problems, so genomics is a research direction, not a near-term application.", algorithms: [
          "grovers-algorithm",
          "quantum-annealing",
          "qaoa",
        ] },
      { title: "Medical imaging and diagnostic machine learning", problem: "Classifying scans, segmenting tumors, and predicting outcomes from imaging and electronic health records are machine learning tasks where labeled data is scarce and accuracy matters.", approach: "Quantum kernels and variational classifiers are being tested on small imaging datasets, with the aim of finding features that classical models miss.", reality: "Published studies use tiny datasets, often downsampled, and report accuracy comparable to classical baselines. Theoretical work, including results on the power of data in quantum machine learning, suggests that classical models with enough data are hard to beat on typical tasks, so a clear advantage in imaging has not been demonstrated.", algorithms: [
          "quantum-kernel-estimation",
          "quantum-support-vector-machine",
          "quantum-anomaly-detection",
        ] },
      { title: "Treatment planning and hospital operations", problem: "Radiation therapy plans must deliver dose to a tumor while sparing healthy tissue, subject to many constraints, and hospitals must schedule staff, operating rooms, and equipment under tight rules.", approach: "These problems are cast as constrained optimization and attacked with QAOA, annealing, and hybrid solvers.", reality: "Studies show that formulations can be mapped to quantum hardware, but at realistic sizes, classical solvers such as mixed-integer programming are faster and more accurate. The Cleveland Clinic and IBM installed an on-site quantum computer in 2023 as part of a research partnership, which illustrates the interest, not a clinical benefit.", algorithms: [
          "qaoa",
          "quantum-annealing",
          "quantum-approximate-tsp",
        ] },
    ],
    whoIsWorking: [
      "Cleveland Clinic and IBM, which placed an IBM Quantum System One on a hospital campus in 2023 as part of a Discovery Accelerator partnership, the first such on-site installation in healthcare.",
      "Moderna and IBM, who have explored predicting mRNA secondary structure with hybrid quantum workflows, reporting studies on short sequences on an IBM device.",
      "Pharmaceutical and biotechnology firms such as Boehringer Ingelheim, Roche, Merck, and Amgen, which run chemistry-focused collaborations with hardware and software companies.",
      "Quantum sensing groups and companies developing optically pumped magnetometers for brain imaging and nitrogen-vacancy sensors for biological measurement.",
      "Software firms such as Quantinuum and Phasecraft, which develop chemistry and life-science algorithms.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Pilots on small molecules and optimization problems, quantum sensing instruments for research, and hybrid workflows that mainly serve as testbeds." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines may allow chemistry calculations for small active spaces that exceed exact classical methods. Drug discovery impact is likely indirect, through better data for classical models." },
      { horizon: "2032 and later", outlook: "If fault-tolerant machines with thousands of logical qubits arrive, accurate simulation of metalloenzymes and reaction mechanisms could inform design. Clinical applications of computing remain speculative." },
    ],
    deepDive: [
      "Healthcare claims are easy to inflate because the end goal, a better drug or diagnosis, is far from the technical step being demonstrated. A useful habit is to separate the layers. At the bottom is a calculation, such as the energy of a molecule. Above it is a prediction, such as binding strength. Above that is a decision, such as which compound to synthesize. A quantum computer can only change the bottom layer, and its value depends on whether errors there are what limits the decision.",
      "For machine learning claims on medical data, ask about dataset size, leakage between training and test sets, and whether the quantum model beat a well-tuned classical model, not a weak one. Studies on small, downsampled imaging data often show similar accuracy for quantum and classical classifiers, and the difference is within statistical noise. Independent replication matters more here than anywhere else.",
    ],
    obstacles: [
      "Scale: chemically relevant systems need thousands of logical qubits, far beyond current machines.",
      "Competition: AI-based structure and property prediction is advancing fast, narrowing the gap quantum methods would fill.",
      "Validation: any new method must be validated against experiment, and drug development pipelines move slowly.",
      "Data and privacy: patient data rules complicate sending records to cloud quantum services.",
    ],
    gettingStarted: [
      "Identify the specific molecular problems where classical methods fail, so that quantum efforts target real bottlenecks.",
      "Partner with academic groups and vendors on small, well-defined benchmarks and publish results.",
      "Watch quantum sensing, which may reach clinics sooner than quantum computing.",
      "Build data governance that would allow secure use of external quantum services when they become useful.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will soon discover new drugs. Reality: any contribution is likely years away and will complement AI and classical simulation.",
      "Myth: quantum computing will read genomes instantly. Reality: data loading and classical indexing make genomics a poor fit.",
      "Myth: quantum sensing and quantum computing are the same thing. Reality: they are different technologies at different maturity levels.",
    ],
    bottomLine: [
      "Quantum computing may one day improve the accuracy of molecular simulation for hard drug targets, but that is a long-range prospect that complements AI-driven design. Quantum sensing is closer to practical use in research settings. Healthcare organizations should focus on partnerships that build expertise and avoid committing to quantum-dependent clinical plans.",
    ],
    faq: [
      { q: "Is quantum computing being used in hospitals?", a: "Not for patient care. Some hospitals partner on research, such as the Cleveland Clinic and IBM, but clinical applications are not yet available." },
      { q: "How could quantum computers help drug discovery?", a: "By simulating molecules and reactions with high accuracy, especially for systems with strong electron correlation. Resource estimates suggest this needs fault-tolerant machines with thousands of logical qubits." },
      { q: "What is quantum sensing in medicine?", a: "The use of quantum properties of atoms and spins to build sensitive detectors, such as optically pumped magnetometers for measuring brain activity. It is more mature than quantum computing." },
      { q: "Will quantum computers improve medical AI?", a: "It is not shown. Quantum machine learning results on medical data match classical baselines on small datasets, and classical models with enough data are hard to beat." },
      { q: "When might healthcare see real benefits?", a: "Quantum sensing may help research sooner. Computing benefits for chemistry are likely in the 2030s at the earliest, with clinical impact further out." },
    ],
    relatedAlgorithms: [
      "vqe",
      "quantum-phase-estimation",
      "quantum-kernel-estimation",
      "qaoa",
    ],
    relatedHardware: [
      "ibm-heron",
      "quantinuum-h2",
    ],
    relatedCompanies: [
      "ibm",
      "quantinuum",
      "phasecraft",
    ],
    relatedIndustries: [
      "materials-science",
      "agriculture",
      "manufacturing",
    ],
    relatedResearch: [
      "vqe-molecular-simulation-accuracy",
      "quantum-chemistry-active-space-selection",
    ],
  },
  {
    slug: "logistics",
    name: "Quantum Computing for Logistics",
    tagline: "Route optimization, scheduling, and supply chain efficiency",
    summary: "Optimization-heavy logistics problems are a natural testing ground for quantum and quantum-inspired algorithms, with several companies running active pilots.",
    maturity: "early-pilots",
    metaDescription: "Quantum computing for logistics and supply chains: routing, warehouse optimization, scheduling, with real pilots, quantum-inspired alternatives, and realistic timelines.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Logistics is the study of moving goods and people efficiently, and it is built from optimization problems: which truck takes which route, in what order to pick items in a warehouse, how to load a container, how to schedule drivers and loading docks. These problems are famous in computer science for being hard in the worst case, and companies solve them every day with heuristics that give good, not perfect, answers.",
      "That is why logistics shows up in almost every list of quantum computing applications. It is also a field where honesty matters, because strong classical solvers are already extremely good and a large part of the reported benefit of quantum pilots has come from reformulating the problem or from quantum-inspired classical hardware.",
    ],
    whyQuantum: [
      "Many logistics problems are instances of vehicle routing, bin packing, scheduling, and network design. Their search spaces grow combinatorially, and no efficient exact algorithm is known for the hard cases. Quantum algorithms offer a provable quadratic speedup for unstructured search and a family of heuristic methods, such as quantum annealing and QAOA, designed for this kind of problem.",
      "The economic stakes are large and measured in fuel, time, and labor. A one-percent improvement in routing for a big carrier is worth a great deal, which makes even a modest gain attractive and explains the steady flow of pilots with companies such as DHL, Volkswagen, and Ford Otosan.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots, mostly with annealers and quantum-inspired solvers" },
      { label: "Most credible quantum workload", value: "Combinatorial optimization on fault-tolerant machines using quadratic-speedup search, plus heuristics" },
      { label: "Hardware needed", value: "Not yet known for a clear advantage; today's pilots use hundreds to thousands of annealing qubits" },
      { label: "Strongest classical competition", value: "Mixed-integer solvers, OR-Tools, LKH, and metaheuristics" },
      { label: "Notable pilot results", value: "Reported runtime reductions on scheduling at Ford Otosan and grocery chains using D-Wave hybrid solvers" },
      { label: "Realistic horizon", value: "Uncertain; incremental pilots now, clear advantage not established" },
    ],
    keyNumbers: [
      { label: "Traveling salesman encoding", value: "N squared binary variables, so 10 cities need about 81 qubits after fixing the start" },
      { label: "Classical TSP record", value: "Concorde has solved an instance with 85,900 cities to proven optimality" },
      { label: "Grover-type speedup", value: "Square root: about 1,000 steps instead of a million for an unstructured search" },
      { label: "Annealer size", value: "D-Wave Advantage2 has more than 4,400 qubits, but embedding reduces the problem size that fits" },
      { label: "Ford Otosan report", value: "Production scheduling time reduced from tens of minutes to a few minutes with a hybrid solver" },
      { label: "Vehicle routing", value: "Classical heuristics handle instances with thousands to tens of thousands of stops in practice" },
    ],
    useCases: [
      { title: "Vehicle routing and fleet scheduling", problem: "Deciding which vehicles serve which customers, in what order, within time windows and capacity limits is the vehicle routing problem, a generalization of the traveling salesman problem. Industrial instances have thousands of stops and many side constraints.", approach: "The problem is encoded as a quadratic binary optimization and given to a quantum annealer or QAOA, usually as part of a hybrid solver that splits the work and refines results classically.", reality: "Quantum devices handle only small instances in direct form, and hybrid solvers get most of their power from the classical components. Classical solvers routinely find near-optimal routes for instances with tens of thousands of nodes, so a quantum edge has not been shown.", algorithms: [
          "quantum-approximate-tsp",
          "qaoa",
          "quantum-annealing",
        ] },
      { title: "Warehouse operations and order picking", problem: "Choosing the order in which pickers visit shelves, how to slot products, and how to batch orders reduces walking time, which is the biggest cost in many warehouses.", approach: "Pick-path and batching problems are formulated as routing and assignment problems and tried on annealers and quantum-inspired hardware.", reality: "Pilots report improvements over existing heuristics in some cases. Several of those gains also appear when the same formulation is solved with classical methods, which suggests the formulation, not the quantum hardware, supplies much of the benefit.", algorithms: [
          "quantum-annealing",
          "quantum-max-cut",
        ] },
      { title: "Container loading and packing", problem: "Placing items in containers or trucks to use space well while respecting weight, stacking, and delivery-order constraints is a three-dimensional bin packing problem.", approach: "Researchers cast packing as optimization on a lattice of positions and test quantum annealing and variational circuits.", reality: "Only small, simplified instances fit on today's machines. Packing heuristics used in industry are fast and effective, so this is a research benchmark more than a deployed tool.", algorithms: [
          "qaoa",
          "grovers-algorithm",
        ] },
      { title: "Supply chain network design and planning", problem: "Choosing where to put factories, warehouses, and inventory, and how to route flows through the network under uncertain demand, mixes optimization with simulation.", approach: "Quantum amplitude estimation could speed up the simulation of demand scenarios, and quantum linear programming and semidefinite programming solvers are being studied for the optimization layer.", reality: "These approaches are theoretical. They rely on fault-tolerant hardware and quantum data access, and the quadratic gains must be weighed against overhead.", algorithms: [
          "quantum-amplitude-estimation",
          "quantum-semidefinite-programming",
          "quantum-optimal-transport",
        ] },
    ],
    whoIsWorking: [
      "Ford Otosan, which has described using D-Wave hybrid solvers for production and vehicle scheduling, with reported reductions in solution time.",
      "Volkswagen, which ran traffic flow and fleet optimization pilots with D-Wave in Beijing and Lisbon.",
      "DHL, whose trend research has examined quantum computing for routing, network design, and warehouse optimization.",
      "Grocery and retail chains in Canada and elsewhere that have used D-Wave hybrid solvers for scheduling, with reported large reductions in computation time.",
      "Software and hardware firms such as D-Wave, IBM, IonQ, and Quantinuum, and quantum-inspired providers including Fujitsu, Toshiba, and Hitachi.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Hybrid solver pilots continue, quantum-inspired hardware delivers some commercial value, and the main work is benchmarking against classical solvers." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines enable provable quadratic speedups on small search subroutines. Whether they beat tuned classical heuristics on real fleet problems is an open question." },
      { horizon: "2032 and later", outlook: "If hardware scales, quantum-accelerated planning and simulation could appear in supply chain software. No guarantee that logistics will be a leading application." },
    ],
    deepDive: [
      "Logistics pilots often report impressive percentage improvements, so the first question is the baseline. Many company systems use simple rules or older heuristics, and almost any modern optimizer beats them. The relevant comparison is a state-of-the-art solver such as Gurobi, OR-Tools, or LKH, tuned by an expert, run for the same time on comparable hardware. If a quantum or hybrid approach is better only against a weak baseline, the finding is about the formulation, not the quantum hardware.",
      "A second question is the role of the classical part. Hybrid solvers decompose a large problem, solve pieces on a quantum processor, and stitch the results together. If most of the work is the decomposition and the stitching, the quantum processor may be incidental. The most convincing evidence would be a controlled experiment that replaces the quantum step with a classical subsolver and shows a loss in quality or speed.",
    ],
    obstacles: [
      "Classical solvers are very strong and keep improving, with GPU acceleration.",
      "Encoding overhead: routing problems need many qubits for a few vehicles and stops.",
      "Constraints: real problems have messy rules that are hard to express in quantum-friendly form.",
      "Proof of value: pilots often compare against weak baselines, so credible benchmarks are needed.",
    ],
    gettingStarted: [
      "Benchmark your current optimizer against the best open and commercial solvers first, so you know how much headroom exists.",
      "If you run pilots, define success in terms of solution quality and cost, with an honest classical baseline.",
      "Consider quantum-inspired solvers, which can be used today on conventional hardware.",
      "Track the research on quantum speedups for combinatorial search, which is where proven gains live.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will find the best route among all possibilities instantly. Reality: the best known quantum speedups for search are quadratic, and optimization problems stay hard.",
      "Myth: reported speedups from pilots prove quantum advantage. Reality: many came from reformulation or classical components in hybrid solvers.",
      "Myth: logistics will be the first quantum success story. Reality: chemistry and simulation have stronger theoretical cases.",
    ],
    bottomLine: [
      "Logistics is a sensible area for experiments because the problems are real and the data are available. It is not yet an area with proven quantum advantage. Companies can gain today from better optimization software, including quantum-inspired solvers, and should keep quantum pilots small, benchmarked, and honest.",
    ],
    faq: [
      { q: "Is quantum computing used in logistics today?", a: "In pilots, mainly with D-Wave hybrid solvers and quantum-inspired hardware. These are not widespread production systems, and the value of the quantum part is still debated." },
      { q: "Can a quantum computer solve the traveling salesman problem?", a: "Not efficiently in general. It remains NP-hard, and the known quantum speedups for exact methods are modest." },
      { q: "What are quantum-inspired solvers?", a: "Classical hardware or software, such as Fujitsu's Digital Annealer, that borrows ideas from quantum annealing to solve optimization problems. They run on conventional chips." },
      { q: "Which algorithms matter for logistics?", a: "QAOA, quantum annealing, and Grover-style search for combinatorial problems, plus amplitude estimation for simulation inside planning tools." },
      { q: "When will logistics benefit?", a: "Pilots yield incremental gains now. A clear, general quantum advantage is not established and may take until the 2030s or later, if it happens." },
    ],
    relatedAlgorithms: [
      "quantum-approximate-tsp",
      "qaoa",
      "quantum-annealing",
      "quantum-max-cut",
    ],
    relatedHardware: [
      "dwave-advantage2",
      "ibm-heron",
    ],
    relatedCompanies: [
      "d-wave",
      "ibm",
      "ionq",
    ],
    relatedIndustries: [
      "transportation",
      "manufacturing",
      "automotive",
    ],
    relatedResearch: [
      "qaoa-hardware-aware-circuit-compilation",
      "qaoa-warm-start-techniques",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Quantum Computing for Cybersecurity",
    tagline: "Post-quantum cryptography and quantum key distribution",
    summary: "Both a long-term threat (to current encryption) and a source of new tools (quantum key distribution) — the most mature quantum application from a deployment standpoint.",
    maturity: "active-deployment",
    metaDescription: "Quantum computing and cybersecurity: the Shor's algorithm threat, post-quantum cryptography migration deadlines, QKD, quantum random numbers, and what to do now.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Cybersecurity is the one industry where quantum computing already demands action, even though no machine can yet break today's encryption. The reason is that a large, fault-tolerant quantum computer would run Shor's algorithm, which breaks the public-key cryptography that protects web traffic, software updates, digital signatures, and cryptocurrencies. Data encrypted today can be recorded and decrypted years later, so information that must stay secret for decades is already exposed in principle.",
      "The response has two parts. The main one is post-quantum cryptography: new algorithms that run on ordinary computers and are believed to resist quantum attacks. The second is quantum technology used for security, including quantum key distribution and quantum random number generators. Governments have published standards and deadlines, and migration is under way in browsers, messaging apps, and cloud services.",
    ],
    whyQuantum: [
      "Public-key cryptography rests on mathematical problems, such as factoring and discrete logarithms, that are hard for classical computers but easy for Shor's algorithm. A 2025 analysis by Craig Gidney estimated that RSA-2048 could be factored by a machine with fewer than one million noisy physical qubits in under a week, a major drop from earlier estimates of tens of millions. Such machines do not exist today, but the estimate keeps falling.",
      "Security planners think in terms of time. If information must stay confidential for X years, the migration takes Y years, and a quantum computer might appear in Z years, then trouble begins when X plus Y exceeds Z. Because migrations take a decade for large organizations, the planning has to start well before the machine exists.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Active deployment of post-quantum cryptography" },
      { label: "Core threat", value: "Shor's algorithm against RSA, Diffie-Hellman, and elliptic-curve cryptography" },
      { label: "Standards", value: "NIST FIPS 203 (ML-KEM), 204 (ML-DSA), and 205 (SLH-DSA), published August 2024" },
      { label: "Backup standard", value: "HQC selected by NIST in March 2025 as an additional key-encapsulation method" },
      { label: "Not threatened much", value: "Symmetric encryption such as AES-256 and hash functions" },
      { label: "Key deadlines", value: "Government timelines target migration of most systems between about 2030 and 2035" },
    ],
    keyNumbers: [
      { label: "Standards published", value: "FIPS 203 (ML-KEM), 204 (ML-DSA), and 205 (SLH-DSA) on August 13, 2024; HQC selected in March 2025" },
      { label: "UK NCSC milestones", value: "Discovery and planning by 2028, priority migration by 2031, completion by 2035" },
      { label: "RSA-2048 break estimate", value: "Under one million noisy physical qubits and under a week (Gidney, 2025), down from about 20 million in 2019" },
      { label: "AES-256 under Grover", value: "Roughly 128 bits of effective security, which remains adequate" },
      { label: "ML-KEM-768 sizes", value: "Public key 1,184 bytes and ciphertext 1,088 bytes, versus 32 bytes for an X25519 key" },
      { label: "ML-DSA-65 sizes", value: "Public key 1,952 bytes and signature about 3,309 bytes, versus 64-byte Ed25519 signatures" },
      { label: "Mosca's inequality", value: "If secrecy lifetime plus migration time exceeds the time until a quantum computer, you are already late" },
    ],
    useCases: [
      { title: "Migrating to post-quantum cryptography", problem: "Cryptography is embedded in protocols, hardware, firmware, certificates, and third-party products, often without a complete inventory. Replacing it is a multi-year engineering program, and some devices cannot be updated.", approach: "Adopt the NIST-standardized algorithms, first in hybrid mode that combines a classical and a post-quantum scheme, and build crypto-agility so algorithms can be swapped without redesigning systems.", reality: "Deployment has already started. Major browsers and cloud providers use hybrid key exchange based on ML-KEM for a large and growing share of web traffic, and messaging systems such as Signal and iMessage have added post-quantum protection. Guidance from NIST, the U.S. National Security Agency, the UK National Cyber Security Centre, and the European Union gives dates between about 2030 and 2035 for retiring vulnerable algorithms.", algorithms: [
          "shors-algorithm",
          "grovers-algorithm",
        ] },
      { title: "Assessing harvest-now-decrypt-later risk", problem: "Adversaries can store encrypted traffic today and decrypt it when quantum computers arrive, so any data with a long confidentiality lifetime, such as health records, state secrets, and intellectual property, is already at risk.", approach: "Organizations classify data by required secrecy lifetime, estimate migration time, and compare with expert timelines for quantum capability, prioritizing systems where the lifetimes exceed the expected time to a capable machine.", reality: "Expert surveys put a cryptographically relevant machine somewhere in the 2030s, with wide uncertainty. The lack of a firm date is the reason many agencies advise starting now.", algorithms: [
          "shors-algorithm",
          "quantum-phase-estimation",
        ] },
      { title: "Quantum key distribution and certified randomness", problem: "Some users want security that does not rely on computational assumptions, and everyone needs good random numbers for keys.", approach: "Quantum key distribution lets two parties generate shared keys by sending single photons and detecting eavesdropping through the disturbance it causes. Quantum random number generators use quantum processes as entropy sources, and 2025 work with trapped-ion hardware demonstrated randomness that can be certified.", reality: "QKD networks exist, including long fiber and satellite links in China and national projects in Europe. However, agencies such as the NSA and the UK NCSC advise using post-quantum cryptography instead of QKD for most purposes, because QKD needs special hardware and has distance and side-channel limits.", algorithms: [
          "bb84-protocol",
          "e91-protocol",
          "device-independent-qkd",
        ] },
      { title: "Quantum-assisted defense and detection", problem: "Security teams look for intrusions, malware, and anomalies in large data streams.", approach: "Quantum machine learning for anomaly detection and optimization of security configurations has been proposed.", reality: "These are research topics. Demonstrations are on small data, and strong classical machine learning tools are widely used, so there is no evidence of advantage.", algorithms: [
          "quantum-anomaly-detection",
          "quantum-kernel-estimation",
        ] },
    ],
    whoIsWorking: [
      "NIST, which ran a multi-year competition and published ML-KEM, ML-DSA, and SLH-DSA in 2024, with additional standards in progress, including a Falcon-based signature and HQC.",
      "The U.S. National Security Agency, which published the CNSA 2.0 suite and timelines for national security systems, and the UK NCSC, which set milestones for 2028, 2031, and 2035.",
      "Cloud and technology companies including Google, Cloudflare, Apple, Microsoft, Amazon, and Signal, which have deployed hybrid post-quantum key exchange.",
      "Telecom and QKD providers such as Toshiba, ID Quantique, and SK Telecom, and national networks in China and the European Union.",
      "Researchers who continually refine resource estimates for Shor's algorithm, including Craig Gidney and Martin Ekerå.",
    ],
    timeline: [
      { horizon: "Now to 2030", outlook: "Inventory cryptography, deploy hybrid post-quantum key exchange, and begin replacing signatures in long-lived systems. Government timelines begin to bite." },
      { horizon: "2030 to 2035", outlook: "Vulnerable public-key algorithms are deprecated and then disallowed in many regulated settings. Remaining legacy systems become the main risk." },
      { horizon: "2035 and later", outlook: "Quantum computers capable of breaking RSA and elliptic curves may exist. Organizations that migrated are protected, and those that did not face exposure." },
    ],
    deepDive: [
      "In cybersecurity, the loudest quantum claims are usually about threat timing, and the honest answer is that nobody knows the date. Resource estimates for Shor's algorithm have fallen by more than an order of magnitude in six years, which is why planners treat the risk as real. At the same time, no machine today has more than a few thousand noisy physical qubits, and logical qubits remain in the dozens, so claims that encryption is already broken should be rejected.",
      "Product claims need similar care. A vendor selling quantum key distribution should explain how its devices resist side-channel attacks, how keys are authenticated, and why it is a better choice than post-quantum cryptography for the threat in question. A vendor claiming quantum-safe products should name the algorithms, the standards they follow, and whether they use hybrid modes. Cryptographic agility, meaning the ability to change algorithms without rebuilding systems, is a better signal of readiness than any single product.",
    ],
    obstacles: [
      "Inventory: many organizations do not know where cryptography is used.",
      "Performance and size: post-quantum keys and signatures are larger than elliptic-curve ones, which strains constrained devices and protocols.",
      "Long-lived hardware: embedded systems, satellites, and industrial equipment may be unpatchable.",
      "Maturity: newer algorithms get less cryptanalysis than RSA, which argues for hybrid deployment and agility.",
    ],
    gettingStarted: [
      "Build a cryptographic inventory, a list of every system, library, and vendor that uses public-key cryptography.",
      "Classify data by confidentiality lifetime and prioritize anything that must stay secret past the early 2030s.",
      "Adopt crypto-agility so that algorithms can be changed by configuration, and test hybrid post-quantum key exchange now.",
      "Ask vendors for their post-quantum roadmaps and include them in procurement requirements.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will break all encryption. Reality: symmetric ciphers and hashes are only modestly affected, and AES-256 remains safe.",
      "Myth: QKD is the fix. Reality: most agencies recommend post-quantum cryptography, which runs on ordinary hardware.",
      "Myth: there is plenty of time. Reality: data can be harvested now, and large migrations take many years.",
    ],
    bottomLine: [
      "Cybersecurity is the sector where quantum computing already changes what organizations must do. The safe approach is to treat migration as an engineering program with a deadline, not as a bet on a hardware date, and to avoid both complacency and panic.",
    ],
    faq: [
      { q: "Can quantum computers break encryption today?", a: "No. Breaking RSA-2048 is estimated to need under a million high-quality physical qubits running for days, and current machines have far fewer." },
      { q: "What is post-quantum cryptography?", a: "A set of classical algorithms, such as ML-KEM, ML-DSA, and SLH-DSA, designed to resist attacks by both classical and quantum computers. NIST published the first standards in August 2024." },
      { q: "What is harvest now, decrypt later?", a: "An attack in which an adversary records encrypted data today to decrypt it once quantum computers are available. It makes migration urgent for long-lived secrets." },
      { q: "Is QKD better than post-quantum cryptography?", a: "It offers a different kind of security but needs special hardware and has limits. Agencies such as the NSA and NCSC recommend post-quantum cryptography for most uses." },
      { q: "What should my organization do first?", a: "Inventory where cryptography is used, prioritize long-lived data, adopt hybrid key exchange, and require post-quantum roadmaps from vendors." },
    ],
    relatedAlgorithms: [
      "shors-algorithm",
      "grovers-algorithm",
      "bb84-protocol",
      "device-independent-qkd",
    ],
    relatedHardware: [
      "google-willow",
      "quantinuum-h2",
    ],
    relatedCompanies: [
      "ionq",
      "quantinuum",
      "google",
    ],
    relatedIndustries: [
      "finance",
      "telecommunications",
      "space-defense",
    ],
    relatedResearch: [
      "post-quantum-migration-case-study",
      "quantum-repeater-prototype-demonstration",
    ],
  },
  {
    slug: "energy",
    name: "Quantum Computing for Energy and Utilities",
    tagline: "Battery materials, grid optimization, and carbon capture chemistry",
    summary: "From designing better battery materials to optimizing power grids, energy is an area where quantum simulation and optimization algorithms show genuine, if early-stage, promise.",
    maturity: "early-pilots",
    metaDescription: "Quantum computing for the power sector: grid optimization, battery and storage materials, fusion and plasma simulation, trading, with pilots and honest timelines.",
    lastUpdated: "September 30, 2026",
    overview: [
      "The power sector is being rebuilt around variable renewable generation, large-scale batteries, electrified transport, and new nuclear and fusion designs. Every part of that transition produces hard computational problems: balancing a grid in which supply and demand change by the minute, finding better battery chemistries, simulating plasmas inside fusion devices, and forecasting renewable output hours or days ahead. Utilities, grid operators, and energy majors have therefore become regular participants in quantum computing programs.",
      "The honest picture is that most of these problems are already attacked with strong classical tools, including high-performance computing, mixed-integer solvers, and now machine learning. Quantum computing is a long-term option for the parts that classical methods struggle with, mainly the quantum-mechanical simulation of materials and some optimization and simulation tasks. This page separates what is being tried from what is likely to matter.",
    ],
    whyQuantum: [
      "Two kinds of problems in energy have a quantum flavor. The first is simulation of matter: the performance of a battery electrode, a catalyst for hydrogen production, or a solar absorber depends on electron behavior that is exponentially costly to simulate classically when correlations are strong. The second is large optimization and simulation: scheduling thousands of generators, storage units, and flexible loads, or solving nonlinear equations for plasma and fluid flow.",
      "Energy decisions also carry long time horizons and large capital costs, which makes better design tools valuable. A modest improvement in a cathode material or in the operating schedule of a grid can be worth billions over its lifetime, so the sector is willing to fund exploratory work well before hardware matures.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots; material simulation is the strongest long-term case" },
      { label: "Most credible quantum workload", value: "Simulating battery, catalyst, and solar materials" },
      { label: "Hardware needed", value: "Fault-tolerant machines with thousands of logical qubits" },
      { label: "Strongest classical competition", value: "HPC, density functional theory, mixed-integer solvers, and AI surrogates" },
      { label: "Example of classical-first progress", value: "AI and HPC screening of battery electrolytes, which delivers candidates today" },
      { label: "Realistic horizon", value: "Optimization pilots now; materials impact in the 2030s at the earliest" },
    ],
    keyNumbers: [
      { label: "Battery electrolyte screening (2024)", value: "Microsoft and PNNL used AI and HPC to narrow about 32 million candidates to a small set in under a week, without a quantum computer" },
      { label: "Aramco and Pasqal", value: "A 200-qubit neutral atom system deployed in Aramco's data center" },
      { label: "Electrolyte molecule simulation", value: "Resource estimates need thousands of logical qubits" },
      { label: "Grid scale", value: "National grids have thousands of generators and tens of thousands of buses, handled today by classical solvers" },
      { label: "Plasma simulation", value: "Kinetic fusion simulations use six-dimensional phase space and run on the largest supercomputers" },
      { label: "Quantum speedup for Monte Carlo", value: "Quadratic, requiring fault-tolerant hardware" },
    ],
    useCases: [
      { title: "Power grid optimization and scheduling", problem: "Grid operators must decide which generators run, how storage charges and discharges, and how power flows through the network at every moment, subject to physical limits and reliability rules. The unit commitment and optimal power flow problems are large and combinatorial, and renewables add uncertainty.", approach: "These problems are encoded as quadratic binary optimization and tried on annealers and QAOA, or split into hybrid workflows. Quantum linear algebra could in principle speed up the linear systems inside power flow calculations.", reality: "Studies have run small test networks on quantum hardware, and the European utility EDF has worked with Pasqal on optimizing smart charging of electric vehicles. Industrial solvers handle national-scale grids today, and no quantum method has beaten them at realistic size.", algorithms: [
          "qaoa",
          "quantum-annealing",
          "hhl-algorithm",
        ] },
      { title: "Battery, storage, and hydrogen materials", problem: "Better batteries need electrolytes, electrodes, and interfaces that are stable, conductive, and cheap, and hydrogen production needs better catalysts. Predicting these properties accurately requires solving the electronic structure of large, correlated systems.", approach: "Fault-tolerant quantum phase estimation and Hamiltonian simulation could compute energies and reaction barriers beyond what classical approximations manage. Near-term variational methods are tested on small fragments.", reality: "Resource estimates for lithium-ion electrolyte molecules and for catalysts point to thousands of logical qubits. Meanwhile, classical AI and HPC are already delivering: in 2024 Microsoft and the Pacific Northwest National Laboratory reported screening millions of candidates down to a promising solid-state electrolyte using AI and high-performance computing, with no quantum computer involved.", algorithms: [
          "quantum-phase-estimation",
          "vqe",
          "trotter-suzuki-decomposition",
        ] },
      { title: "Fusion and plasma simulation", problem: "Designing fusion reactors needs models of plasmas, which are described by nonlinear kinetic and fluid equations in many dimensions. Large simulations strain even the biggest supercomputers.", approach: "Researchers have proposed quantum algorithms for the Vlasov equation, for linear plasma waves, and for nonlinear differential equations, based on Hamiltonian simulation and linear algebra routines.", reality: "Theory shows speedups under assumptions, but nonlinearity limits them: results for dissipative nonlinear equations work only when dissipation dominates, and loading data and reading results back are costly. No practical advantage is established, and the work is exploratory.", algorithms: [
          "quantum-singular-value-transformation",
          "hhl-algorithm",
          "trotter-suzuki-decomposition",
        ] },
      { title: "Energy trading, forecasting, and demand response", problem: "Forecasting wind, solar, and demand, and trading in volatile markets, are statistical tasks that profit from better predictions and faster scenario analysis.", approach: "Quantum machine learning models and quantum amplitude estimation for scenario analysis have been proposed, parallel to finance applications.", reality: "Experiments use small datasets and show performance comparable to classical models. As in finance, the speedup for Monte Carlo is quadratic and needs large fault-tolerant machines.", algorithms: [
          "quantum-amplitude-estimation",
          "quantum-kernel-estimation",
          "quantum-monte-carlo-integration",
        ] },
    ],
    whoIsWorking: [
      "EDF, which has collaborated with Pasqal and Quandela on energy applications such as smart charging and grid optimization.",
      "TotalEnergies, which has worked with Quantinuum on quantum chemistry for carbon capture materials and with other partners on optimization.",
      "Saudi Aramco, which installed a 200-qubit neutral atom machine from Pasqal in its data center and explores simulation and optimization.",
      "ExxonMobil and other energy majors, which have participated in IBM's quantum network and published studies on shipping and logistics optimization.",
      "U.S. national laboratories including Pacific Northwest, Oak Ridge, and Lawrence Berkeley, which combine AI, HPC, and quantum research for energy materials.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Hybrid optimization pilots, benchmark studies, and quantum-inspired solvers. Classical AI and HPC continue to deliver most gains in materials screening." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines might compute small but chemically relevant fragments of battery and catalyst systems more accurately than classical methods." },
      { horizon: "2032 and later", outlook: "If large fault-tolerant machines arrive, accurate simulation of electrode interfaces and catalysts could feed into design. Grid optimization advantage is uncertain." },
    ],
    deepDive: [
      "Energy is a sector where classical computing keeps moving the goalposts. Machine learning potentials now approximate quantum-accurate energies for many materials at a tiny fraction of the cost, and exascale computers run molecular and plasma simulations that were out of reach a decade ago. A quantum claim should therefore specify which accuracy gap it fills, such as strongly correlated transition-metal chemistry, and show that classical approximations fail there.",
      "For grid and trading applications, the baseline is a commercial solver running on a cluster, and the key metric is solution quality within the operator's time limit, which is often seconds to minutes. Pilots that solve a toy network or that take hours on a quantum device do not address that requirement. Look for results on realistic network sizes with realistic constraints and a clear account of how much of the calculation ran classically.",
    ],
    obstacles: [
      "Scale: chemistry of real battery systems needs thousands of logical qubits.",
      "Moving target: AI and HPC keep narrowing the problems that would need quantum hardware.",
      "Integration: utilities have legacy IT and strict reliability rules that slow adoption of new tools.",
      "Data loading: grid and plasma problems involve large datasets that must enter a quantum state.",
    ],
    gettingStarted: [
      "Track which of your problems are limited by quantum-mechanical accuracy and which by data or compute, since only the former point to quantum computing.",
      "Join consortia or national lab programs that offer access to hardware and expertise at low cost.",
      "Use quantum-inspired and classical AI tools now for optimization and materials screening.",
      "Build in-house literacy so you can judge vendor claims and resource estimates.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will optimize the grid in real time. Reality: grid operators already use powerful solvers, and there is no quantum advantage shown.",
      "Myth: quantum computing will discover the next battery soon. Reality: classical AI is currently delivering candidates, and quantum simulation needs hardware that does not yet exist.",
      "Myth: fusion needs quantum computers. Reality: fusion progress depends mostly on engineering and classical simulation.",
    ],
    bottomLine: [
      "The energy transition needs better materials and smarter operation, and quantum computing might contribute to the first in the long run. In the near term, the biggest gains come from classical AI, HPC, and better engineering. Utilities and energy firms should invest modestly in understanding quantum methods while delivering results with proven tools.",
    ],
    faq: [
      { q: "How could quantum computing help the energy transition?", a: "Mainly by simulating materials for batteries, catalysts, and solar cells with higher accuracy, and possibly by accelerating some optimization and simulation tasks, once fault-tolerant machines exist." },
      { q: "Is quantum computing used to run power grids?", a: "No. Pilots test small networks, but grid operators rely on classical optimization software." },
      { q: "What are the best-known energy pilots?", a: "Examples include EDF with Pasqal on smart charging, TotalEnergies with Quantinuum on carbon capture chemistry, and Aramco's installation of a Pasqal neutral atom machine." },
      { q: "Will quantum computers help fusion?", a: "Algorithms for plasma equations exist on paper, but practical advantage is unproven and limited by nonlinearity and data loading." },
      { q: "When might the energy sector benefit?", a: "Optimization pilots are under way now. Materials simulation benefits are likely in the 2030s at the earliest." },
    ],
    relatedAlgorithms: [
      "quantum-phase-estimation",
      "qaoa",
      "vqe",
      "quantum-annealing",
    ],
    relatedHardware: [
      "pasqal-fresnel",
      "ibm-heron",
    ],
    relatedCompanies: [
      "pasqal",
      "quantinuum",
      "ibm",
    ],
    relatedIndustries: [
      "materials-science",
      "climate-environment",
      "automotive",
    ],
    relatedResearch: [
      "vqe-molecular-simulation-accuracy",
      "quantum-chemistry-active-space-selection",
    ],
  },
  {
    slug: "manufacturing",
    name: "Quantum Computing for Manufacturing",
    tagline: "New materials discovery, catalysts, and quality optimization",
    summary: "Designing new materials and catalysts at the atomic level is fundamentally a quantum simulation problem, making manufacturing and materials science a natural application area.",
    maturity: "early-pilots",
    metaDescription: "Quantum computing in manufacturing: production scheduling, simulation, quality control, and quantum sensing, with real pilots from Ford Otosan, BMW, Airbus, and more.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Manufacturing turns materials into products through long chains of planning, machining, assembly, and inspection. Each stage is full of constrained choices: which job runs on which machine and when, how to nest parts on a sheet, how to simulate the flow of air or the stress on a component, and how to detect defects early. Because margins are thin, a small improvement in throughput or yield is valuable, and manufacturers have been among the earliest industrial customers of quantum optimization.",
      "Quantum technology reaches the factory in two forms. Quantum computing, still experimental, targets scheduling, simulation, and chemistry. Quantum sensing is already available and uses atoms and spins to measure magnetic fields, time, and gravity with great precision. The first is a research bet, and the second is closer to real use.",
    ],
    whyQuantum: [
      "Production planning problems such as job-shop scheduling, assembly line balancing, and supply planning are combinatorial, and their difficulty grows quickly with the number of jobs and constraints. They are the type of problem that annealers and QAOA are designed to attack, and manufacturers already pay for optimization software, so a pilot has an obvious comparison point.",
      "Simulation is the second pillar. Computational fluid dynamics and structural analysis solve huge sparse linear systems, which are the kind of calculation some quantum linear algebra algorithms address in theory. And at the process level, manufacturers of chemicals, batteries, and materials depend on molecular simulation, where the case for quantum computers is strongest.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots in scheduling; quantum sensing is more mature than computing" },
      { label: "Most credible near-term workload", value: "Hybrid scheduling and planning on annealers and quantum-inspired solvers" },
      { label: "Hardware needed", value: "Annealers with thousands of qubits today; fault-tolerant machines for simulation" },
      { label: "Strongest classical competition", value: "Constraint programming, mixed-integer solvers, and metaheuristics" },
      { label: "Notable pilots", value: "Ford Otosan production scheduling; BMW and Airbus industry challenges" },
      { label: "Realistic horizon", value: "Incremental optimization gains now; simulation advantage in the 2030s or later" },
    ],
    keyNumbers: [
      { label: "Ford Otosan", value: "Reported production scheduling time reduced from about 30 minutes to under 5 minutes with a D-Wave hybrid solver" },
      { label: "Airbus Quantum Computing Challenge", value: "Launched in 2019 with five problems, including aircraft loading, wing-box design, and fluid dynamics" },
      { label: "Annealer scale", value: "D-Wave Advantage2: more than 4,400 qubits and 20-way connectivity" },
      { label: "Quantum linear solvers", value: "Optimal scaling is linear in the condition number (QSVT), with data-loading costs outside that bound" },
      { label: "Quantum sensing", value: "Diamond nitrogen-vacancy magnetometers and atomic clocks are sold commercially for niche measurements" },
      { label: "Job-shop scheduling", value: "NP-hard in general, solved heuristically at industrial scale with constraint programming" },
    ],
    useCases: [
      { title: "Production scheduling and planning", problem: "Assigning jobs to machines, sequencing them, and respecting setup times, deadlines, and shared resources is a classic NP-hard family of problems. Better schedules cut idle time, work in progress, and overtime.", approach: "Schedules are encoded as binary optimization and solved with annealers, hybrid solvers, or QAOA. Quantum-inspired solvers apply similar encodings on classical hardware.", reality: "Ford Otosan has described using D-Wave hybrid solvers for vehicle production scheduling, reporting that solution time dropped from tens of minutes to a few minutes. Such results come with caveats: the comparison baselines and the share of the work done classically are not always public.", algorithms: [
          "quantum-annealing",
          "qaoa",
          "quantum-max-cut",
        ] },
      { title: "Simulation for design: fluids and structures", problem: "Computational fluid dynamics and finite element analysis solve very large linear and nonlinear systems to predict airflow, heat, and stress. High-fidelity runs can take days on supercomputers.", approach: "Quantum linear system algorithms such as HHL, quantum singular value transformation, and variational solvers could speed up the linear algebra, and quantum algorithms for nonlinear equations are being studied.", reality: "Theoretical speedups depend on loading data, a well-conditioned matrix, and reading out only summary results. Demonstrations solve tiny systems. Industrial adoption would need fault-tolerant hardware and much better data handling.", algorithms: [
          "hhl-algorithm",
          "quantum-singular-value-transformation",
          "variational-quantum-linear-solver",
        ] },
      { title: "Quality control and predictive maintenance", problem: "Detecting defects in images, spotting anomalies in sensor streams, and predicting when machines will fail are machine learning problems with heavy data and tight costs of error.", approach: "Quantum kernels and variational classifiers have been tested for defect detection and anomaly detection.", reality: "Studies use small, curated datasets and report accuracy similar to classical models. Classical deep learning is mature and cheap, so a quantum advantage here is unproven.", algorithms: [
          "quantum-kernel-estimation",
          "quantum-anomaly-detection",
          "quantum-support-vector-machine",
        ] },
      { title: "Quantum sensing on the factory floor", problem: "Measuring magnetic fields, vibration, temperature, and time accurately is essential for quality control, battery inspection, and automation.", approach: "Sensors based on nitrogen-vacancy defects in diamond, atomic vapors, and optical clocks reach sensitivities beyond classical devices for some quantities.", reality: "Quantum sensors are commercially available for niche uses. Companies such as Bosch have set up quantum sensing business units, and applications include battery inspection and non-destructive testing. This is the most mature quantum technology for manufacturers today.", algorithms: [
          "quantum-error-mitigation",
        ] },
    ],
    whoIsWorking: [
      "Ford Otosan, which has used D-Wave hybrid solvers for production scheduling in Turkey.",
      "BMW Group and Airbus, which launched an open Quantum Computing Challenge for industrial problems and have worked with companies such as Pasqal and AWS.",
      "Volkswagen, which has run optimization pilots in vehicle manufacturing and traffic planning with D-Wave and others.",
      "Bosch, which has research in quantum computing and a business unit for quantum sensing.",
      "Software and hardware vendors including D-Wave, Pasqal, IBM, and Q-CTRL, and quantum-inspired providers such as Fujitsu and Toshiba.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Scheduling pilots with hybrid solvers, adoption of quantum-inspired optimization, and early commercial quantum sensors." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines enable small linear algebra and chemistry demonstrations. Optimization advantage over tuned classical solvers remains to be shown." },
      { horizon: "2032 and later", outlook: "If scalable hardware arrives, simulation for design and process chemistry could become the main quantum contribution, alongside widespread quantum sensing." },
    ],
    deepDive: [
      "Manufacturing pilots need an internal baseline before any vendor claim can be assessed. Many plants run schedules from spreadsheets or legacy planning systems, and replacing those with any modern solver can yield large gains. The question to ask is whether a classical constraint programming or mixed-integer solver, run on the same data, achieves similar results. If it does, the quantum component adds little.",
      "For simulation claims, the issues are accuracy and scale. A quantum linear solver that solves a four-by-four system proves the mechanics but says nothing about a fluid problem with billions of unknowns. Ask how the matrix would be loaded, what condition number it has, and how the answer would be read out. Without credible answers, the speedup does not apply to the application.",
    ],
    obstacles: [
      "Strong baselines: manufacturers already use well-tuned optimization software.",
      "Integration: shop-floor systems are complex, and optimization must fit into existing planning tools.",
      "Problem size: real schedules have more variables and constraints than current quantum devices handle directly.",
      "Evidence: published pilots rarely disclose full comparisons, which makes the true benefit hard to assess.",
    ],
    gettingStarted: [
      "Pick one bounded scheduling or planning problem with clear metrics and compare quantum, quantum-inspired, and classical solvers.",
      "Evaluate quantum sensors for inspection and measurement tasks where they are already competitive.",
      "Join industry consortia and challenges that share benchmarks and reduce the cost of experimenting.",
      "Plan for simulation and chemistry use cases as long-term research, not near-term projects.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will run the factory. Reality: they are experimental accelerators for narrow tasks.",
      "Myth: pilot speedups of ten times prove quantum advantage. Reality: gains often come from better formulations and classical components.",
      "Myth: quantum sensing is far off. Reality: some quantum sensors are already sold.",
    ],
    bottomLine: [
      "Manufacturers can benefit today from advanced optimization and from quantum sensing, and should treat quantum computing as a research horizon for chemistry and simulation. The best way to prepare is to modernize the data and optimization stack, which makes any future quantum tool easier to adopt.",
    ],
    faq: [
      { q: "Is quantum computing used in manufacturing today?", a: "In pilots, mainly for scheduling with hybrid solvers. Quantum sensors are further along and are sold commercially for specific measurements." },
      { q: "What did Ford Otosan do?", a: "It reported using D-Wave hybrid solvers to plan vehicle production, cutting scheduling computation from tens of minutes to a few minutes. Details of the baseline are limited." },
      { q: "Can quantum computers speed up CFD?", a: "In theory, for some linear algebra steps, but data loading, conditioning, and readout limits remove the advantage in many settings. No practical speedup has been shown." },
      { q: "What are quantum-inspired solvers?", a: "Classical algorithms or hardware that adopt ideas from quantum annealing, such as Fujitsu's Digital Annealer, and run on conventional chips." },
      { q: "What should a manufacturer do now?", a: "Benchmark current optimizers, test quantum-inspired solvers, evaluate quantum sensors, and follow chemistry and simulation research for the longer term." },
    ],
    relatedAlgorithms: [
      "quantum-annealing",
      "qaoa",
      "hhl-algorithm",
      "quantum-kernel-estimation",
    ],
    relatedHardware: [
      "dwave-advantage2",
      "pasqal-fresnel",
    ],
    relatedCompanies: [
      "d-wave",
      "pasqal",
      "q-ctrl",
    ],
    relatedIndustries: [
      "automotive",
      "logistics",
      "materials-science",
    ],
    relatedResearch: [
      "qaoa-hardware-aware-circuit-compilation",
      "variational-quantum-linear-solver-comparison",
    ],
  },
  {
    slug: "telecommunications",
    name: "Quantum Computing for Telecommunications",
    tagline: "Quantum networking, secure communication, and network optimization",
    summary: "Telecom carriers are exploring quantum key distribution for secure links and quantum-inspired optimization for network routing, while also building toward a future quantum internet.",
    maturity: "early-pilots",
    metaDescription: "Quantum technology in telecom: QKD networks, post-quantum security, the quantum internet, network optimization, and quantum computing pilots, with real deployments.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Telecommunications is where quantum computing and quantum communication meet. Carriers run the networks that carry the world's data, so they face the security threat that quantum computers pose to encryption, and they are natural builders of the quantum networks that may link future quantum machines. They also run enormous optimization problems, from placing radio towers to routing traffic, and some carriers invest in quantum computing as customers.",
      "This page separates three threads. Security, meaning post-quantum cryptography and quantum key distribution, is the most active. Quantum networking, the long-term plan to distribute entanglement between sites, is a research frontier with real prototypes. And network optimization with quantum computers is a set of pilots with the same mixed results as in other industries.",
    ],
    whyQuantum: [
      "Telecom networks protect traffic with public-key cryptography, so they are exposed to the same Shor's algorithm threat as banks, but with a twist: their equipment, from base stations to subscriber SIM cards, has long lifetimes and is hard to update. A standards body for mobile networks has therefore been working on post-quantum migration paths.",
      "Quantum communication is also native to telecom. Single photons travel through optical fiber and free space, the same media carriers already operate, so the industry is the natural home for quantum key distribution links and for networks that distribute entanglement to connect quantum computers and sensors.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots; QKD networks deployed, post-quantum migration beginning" },
      { label: "Most mature quantum technology", value: "Quantum key distribution links and quantum random number generators" },
      { label: "Long-term goal", value: "Quantum internet with repeaters and entanglement distribution" },
      { label: "Hardware needed", value: "Single-photon sources and detectors, quantum memories, and fiber or satellite links" },
      { label: "Strongest alternative", value: "Post-quantum cryptography on ordinary hardware, favored by many agencies" },
      { label: "Realistic horizon", value: "Secure links now; entanglement networks over the 2030s" },
    ],
    keyNumbers: [
      { label: "China QKD backbone", value: "More than 2,000 km between Beijing and Shanghai, operating since 2017" },
      { label: "Micius satellite", value: "Launched in 2016, with satellite-to-ground QKD and entanglement distribution over about 1,200 km" },
      { label: "Fiber QKD range", value: "A few hundred kilometers without trusted nodes or repeaters; laboratory twin-field experiments reach about 1,000 km at very low rates" },
      { label: "QuTech Delft", value: "Three-node entanglement network demonstrated in 2021" },
      { label: "Harvard and AWS", value: "Entanglement between memories over about 35 km of Boston fiber (2024)" },
      { label: "Post-quantum overhead", value: "ML-KEM-768 public keys are about 37 times larger than X25519 keys" },
    ],
    useCases: [
      { title: "Quantum key distribution networks", problem: "Operators of critical links, such as between data centers or government sites, want key exchange whose security does not depend on computational assumptions.", approach: "Quantum key distribution sends single photons over fiber or through free space and detects eavesdropping from the disturbance it causes. Trusted-node networks relay keys over long distances.", reality: "China operates a backbone of more than 2,000 kilometers between Beijing and Shanghai and has demonstrated satellite links over 1,000 kilometers. In Europe, the EuroQCI initiative is building national and cross-border networks, and BT and Toshiba have trialed a QKD network in London. Agencies such as the U.S. NSA and the UK NCSC nonetheless recommend post-quantum cryptography over QKD for most uses.", algorithms: [
          "bb84-protocol",
          "e91-protocol",
          "device-independent-qkd",
        ] },
      { title: "Post-quantum security for mobile and fixed networks", problem: "Mobile networks rely on cryptography in SIM cards, radio access, the core network, and backhaul, and fixed networks use it in VPNs and routing security. Replacing it across billions of devices takes years.", approach: "Adopt NIST-standardized algorithms such as ML-KEM and ML-DSA, deploy hybrid modes, and plan upgrades to SIM and network functions, guided by industry bodies such as the GSMA.", reality: "Work is under way in standards groups, and large carriers have begun trials. The main challenge is the long life of deployed hardware and the larger size of post-quantum keys and signatures.", algorithms: [
          "shors-algorithm",
          "quantum-digital-signatures",
        ] },
      { title: "The quantum internet", problem: "Linking quantum computers, sensors, and clocks over distance needs a network that can distribute entanglement, which cannot be amplified like classical signals.", approach: "Quantum repeaters use memories and entanglement swapping to extend range. Teleportation moves quantum states between nodes. Satellites provide long links.", reality: "Research prototypes exist: a three-node entanglement network at QuTech in Delft in 2021, a Harvard and Amazon fiber network connecting memories across about 35 kilometers in Boston in 2024, and Chinese satellite experiments. EPB in Chattanooga operates a commercial quantum network. A global quantum internet is a decades-long project.", algorithms: [
          "quantum-teleportation-protocol",
          "e91-protocol",
          "quantum-secret-sharing",
        ] },
      { title: "Network design and optimization", problem: "Carriers must place towers, assign frequencies, route traffic, and plan capacity, all with many constraints and uncertain demand.", approach: "These problems are formulated as optimization and tested on annealers and QAOA, and quantum machine learning has been proposed for tasks such as channel estimation.", reality: "Pilots with carriers and vendors have solved small instances. Classical optimization is strong and mature in this industry, and no quantum advantage has been shown.", algorithms: [
          "qaoa",
          "quantum-annealing",
          "quantum-max-cut",
        ] },
    ],
    whoIsWorking: [
      "BT and Toshiba, with HSBC as a user, on a commercial-scale QKD network trial in London.",
      "The European Union's EuroQCI program and national carriers building quantum communication infrastructure, with satellite components planned.",
      "China Telecom Quantum Group and the Chinese Academy of Sciences, operating a large QKD backbone and satellite links.",
      "SK Telecom and ID Quantique, which has been owned in part by SK Telecom and is now majority-owned by IonQ, on QKD and quantum random number generators in phones and networks.",
      "EPB in Chattanooga, operating a commercial quantum network with IonQ technology, and research groups at QuTech, Harvard, and Caltech on repeaters.",
    ],
    timeline: [
      { horizon: "Now to 2030", outlook: "Post-quantum migration plans and trials, QKD in niche government and financial links, and quantum random number generators in devices." },
      { horizon: "2030 to 2035", outlook: "Vulnerable algorithms are retired in many standards. Early quantum repeaters link nearby sites for sensing and computing experiments." },
      { horizon: "2035 and later", outlook: "If repeaters mature, regional entanglement networks could connect quantum computers and clocks. A global quantum internet remains a long-term goal." },
    ],
    deepDive: [
      "In telecommunications, the most common confusion is between quantum key distribution and post-quantum cryptography, which are different tools for different threats. QKD gives information-theoretic key exchange over a dedicated optical link but needs special hardware and authentication, and it does not protect other layers of the network. Post-quantum cryptography is software that protects existing protocols and scales to every device.",
      "When a carrier announces a quantum network, check what it actually delivers: a key-distribution link between two sites, a trusted-node chain, or genuine entanglement distribution. The first two are deployable today with known limits. The third is an experiment. Also check whether the same security could be achieved with post-quantum algorithms at lower cost, which is the question that agencies such as the NSA and NCSC ask.",
    ],
    obstacles: [
      "Distance and loss: photons cannot be amplified, so range needs trusted nodes or repeaters that are still immature.",
      "Cost and interoperability: QKD hardware is specialized and standards are still maturing.",
      "Legacy equipment: SIMs and base stations have long lives and limited upgrade paths.",
      "Policy: agencies favor post-quantum cryptography, which affects the business case for QKD.",
    ],
    gettingStarted: [
      "Plan the post-quantum migration of core network, VPN, signing, and subscriber systems with vendor roadmaps.",
      "Evaluate QKD only for specific high-assurance links, and understand its limits.",
      "Participate in standards bodies and testbeds to shape interoperability.",
      "Track quantum repeater and memory progress for future network services.",
    ],
    mythsVsReality: [
      "Myth: QKD makes networks unhackable. Reality: it protects key exchange, and implementations have side-channel risks.",
      "Myth: a quantum internet exists. Reality: prototypes exist, but they are small and experimental.",
      "Myth: quantum computers will fix network congestion. Reality: classical optimization is strong, and quantum advantage is unproven.",
    ],
    bottomLine: [
      "Telecom will remain at the center of quantum security and networking, because the industry owns the fiber and the customers. Today's priority is migrating cryptography. The quantum internet is a long-term research goal, and operators can participate through testbeds and standards without large commitments.",
    ],
    faq: [
      { q: "What is quantum key distribution?", a: "A method for two parties to create shared secret keys using single photons, with eavesdropping revealed by disturbance to the quantum states." },
      { q: "Is QKD or post-quantum cryptography better?", a: "They address different threat models. Most government agencies recommend post-quantum cryptography for general use because it runs on existing hardware, with QKD for specific high-assurance links." },
      { q: "What is a quantum repeater?", a: "A device that extends the range of entanglement distribution using quantum memories and entanglement swapping, because photons cannot be amplified." },
      { q: "Do carriers use quantum computers?", a: "Some run pilots for network optimization, but production networks use classical optimization." },
      { q: "What is the status of the quantum internet?", a: "There are small prototypes, such as networks in Delft and Boston and the commercial EPB network in Chattanooga, but a large-scale quantum internet is a long-term effort." },
    ],
    relatedAlgorithms: [
      "bb84-protocol",
      "e91-protocol",
      "quantum-teleportation-protocol",
      "shors-algorithm",
    ],
    relatedHardware: [
      "ionq-forte",
    ],
    relatedCompanies: [
      "ionq",
      "q-ctrl",
      "quantum-computing-inc",
    ],
    relatedIndustries: [
      "cybersecurity",
      "space-defense",
      "finance",
    ],
    relatedResearch: [
      "quantum-repeater-prototype-demonstration",
      "post-quantum-migration-case-study",
    ],
  },
  {
    slug: "aerospace-defense",
    name: "Quantum Computing for the Aerospace and Defense Industry",
    tagline: "Sensing, navigation, secure communications, and materials simulation",
    summary: "Defense and aerospace agencies are major funders of quantum research, particularly for quantum sensing, GPS-independent navigation, and secure communications.",
    maturity: "early-pilots",
    metaDescription: "Quantum computing for aerospace and defense industry: aircraft design, fluid dynamics, mission planning, materials, sensing, and real programs from Airbus, Lockheed Martin, and DARPA.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Aerospace and defense companies design and build some of the most complex machines in the world, and they were early adopters of quantum computing. Lockheed Martin bought one of the first D-Wave machines in 2011, NASA has studied quantum annealing since 2013, and Airbus has run an open Quantum Computing Challenge since 2019. The sector has long design cycles, huge simulation workloads, and a strong interest in sensing and secure communication, which gives it several distinct reasons to watch the technology.",
      "This page covers the industrial side: aircraft and engine design, manufacturing and maintenance, mission planning, and the sensing and navigation technology that sits close to platforms. Space systems, satellite communication, and government cryptography are covered on the space and defense page. Both sides share a basic feature: the most mature quantum technology is sensing, and quantum computing is still a long-term research investment.",
    ],
    whyQuantum: [
      "Aircraft design rests on simulation of fluid flow, structures, and combustion. These models stress the largest supercomputers, and many are limited by turbulence, which is hard to resolve. Chemistry and materials science also matter: lighter alloys, better coatings, batteries, and hydrogen systems depend on quantum-mechanical properties of matter.",
      "The sector also lives with large combinatorial planning problems, such as loading aircraft, scheduling maintenance, and assigning crews, as well as with demanding requirements on navigation when GPS is unavailable or denied. Quantum sensors address the last point directly, and that is why defense research agencies fund them heavily.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots in optimization; sensing is closer to deployment" },
      { label: "Most credible computing workload", value: "Materials and combustion chemistry, then selected optimization and simulation tasks" },
      { label: "Hardware needed", value: "Fault-tolerant machines for chemistry and fluid dynamics" },
      { label: "Strongest classical competition", value: "HPC fluid dynamics, topology optimization, and mixed-integer solvers" },
      { label: "Notable programs", value: "Airbus Quantum Computing Challenge, NASA QuAIL, DARPA Quantum Benchmarking Initiative" },
      { label: "Realistic horizon", value: "Sensors in the late 2020s; computing impact in the 2030s at the earliest" },
    ],
    keyNumbers: [
      { label: "D-Wave One", value: "Sold to Lockheed Martin in 2011, among the first commercial quantum computers" },
      { label: "NASA QuAIL", value: "Quantum Artificial Intelligence Laboratory at Ames, studying quantum annealing since 2013" },
      { label: "Airbus Quantum Computing Challenge", value: "Launched in 2019 with five problems in aircraft design and operations" },
      { label: "DARPA QBI Stage B", value: "Eleven companies selected in November 2025, with the aim of testing utility-scale feasibility by 2033" },
      { label: "Q-CTRL DARPA awards", value: "About 24 million U.S. dollars (38 million Australian dollars) under Robust Quantum Sensors, announced in 2025" },
      { label: "Navigation certification", value: "RTCA DO-160 airworthiness qualification reported for a quantum magnetic navigation system in 2026" },
    ],
    useCases: [
      { title: "Aerodynamics and structural design", problem: "Computational fluid dynamics simulates airflow around wings and through engines, and finite element analysis predicts stress in structures. High-fidelity turbulent simulations of full aircraft remain out of reach, so designers rely on approximations and wind tunnels.", approach: "Quantum linear system algorithms, quantum singular value transformation, and variational solvers might accelerate the linear algebra in these solvers, and researchers have proposed quantum algorithms for nonlinear flow equations.", reality: "Airbus Quantum Computing Challenge entries explored fluid dynamics, wing-box design, and aircraft loading on early hardware and simulators. Theoretical speedups depend on loading data and reading only summary quantities, and no practical advantage has been shown. Nonlinear turbulence is especially hard for quantum methods.", algorithms: [
          "hhl-algorithm",
          "quantum-singular-value-transformation",
          "variational-quantum-linear-solver",
        ] },
      { title: "Optimization of operations and logistics", problem: "Airlines, manufacturers, and militaries must solve large scheduling problems: aircraft loading and balance, maintenance planning, supply chain for spare parts, and mission planning with many assets and constraints.", approach: "These are encoded as binary optimization and tested on annealers and QAOA, or as inputs to hybrid solvers.", reality: "The Airbus challenge included aircraft loading optimization and climb planning, and quantum annealing has been explored at NASA and by defense contractors. Results at small scale are comparable to classical heuristics, and industrial solvers are strong at larger scale.", algorithms: [
          "qaoa",
          "quantum-annealing",
          "quantum-approximate-tsp",
        ] },
      { title: "Materials, propulsion, and energy systems", problem: "Better turbine alloys, thermal barrier coatings, composites, batteries, and propellants require accurate models of how atoms bond and react, including combustion chemistry and catalytic fuel production.", approach: "Fault-tolerant quantum simulation could compute energies and reaction pathways that classical approximations handle poorly, especially for transition-metal compounds and strongly correlated systems.", reality: "Resource estimates for industrial chemistry point to thousands of logical qubits. The aerospace sector participates mainly through partnerships and national laboratory programs, with experiments limited to small molecules today.", algorithms: [
          "quantum-phase-estimation",
          "vqe",
          "trotter-suzuki-decomposition",
        ] },
      { title: "Quantum sensing for navigation, timing, and detection", problem: "Platforms need to navigate without GPS, keep precise time, and detect weak signals. Conventional inertial sensors drift, and magnetic anomaly maps offer an alternative reference.", approach: "Atom interferometers and cold-atom accelerometers measure motion precisely. Quantum magnetometers read the Earth's magnetic field for map-based navigation, and optical clocks keep time.", reality: "Quantum navigation systems are in field trials. In 2026 Q-CTRL reported that its magnetic navigation system achieved airworthiness qualification under the RTCA DO-160 standard and showed it at an airshow, building on defense funding including DARPA's Robust Quantum Sensors program. Adoption on operational aircraft will take years of certification.", algorithms: [
          "quantum-error-mitigation",
        ] },
    ],
    whoIsWorking: [
      "Airbus, which runs the Airbus Quantum Computing Challenge with partners and has a quantum technologies initiative, and which has worked with BMW Group on a joint challenge.",
      "Lockheed Martin, a pioneer buyer of D-Wave systems, and defense contractors such as Boeing, Northrop Grumman, and RTX, which fund or collaborate with quantum companies.",
      "NASA's Quantum Artificial Intelligence Laboratory at Ames, which has studied quantum annealing for planning and scheduling since 2013.",
      "DARPA, which runs the Quantum Benchmarking Initiative to test whether a useful machine can be built by 2033, along with sensing programs such as Robust Quantum Sensors.",
      "Quantum sensing companies such as Q-CTRL, Infleqtion, and AOSense, and hardware companies in the DARPA program including IBM, IonQ, Quantinuum, and QuEra.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Quantum sensors are tested and certified for navigation and timing. Computing pilots in optimization continue on annealers and small gate-based machines." },
      { horizon: "2028 to 2032", outlook: "Early operational use of quantum navigation in specific platforms. First fault-tolerant demonstrations in chemistry relevant to materials." },
      { horizon: "2032 and later", outlook: "If utility-scale machines arrive, as DARPA's program tests for 2033, materials and combustion simulation could feed design. CFD advantage is uncertain." },
    ],
    deepDive: [
      "Aerospace is a field where physical realism limits any quantum speedup. Turbulence is chaotic and nonlinear, certification demands explainable and verifiable software, and test data from wind tunnels and flight remain essential. A claim that a quantum algorithm accelerates computational fluid dynamics should state which equations it solves, whether it handles nonlinearity, and how the answer is read out. Linear sub-problems may benefit, but the whole simulation pipeline rarely does.",
      "Defense claims add secrecy. Programs may be classified, so public information is partial, and announcements often come from companies with something to sell. The most reliable evidence is peer-reviewed results, independent benchmarks such as DARPA's, and certification milestones, since a sensor that passes airworthiness tests has met a concrete standard.",
    ],
    obstacles: [
      "Certification: aviation safety rules make adopting new sensors and software slow.",
      "Nonlinear physics: turbulence and combustion are nonlinear, and quantum algorithms handle linear problems best.",
      "Data loading: large meshes and fields are costly to put into quantum states.",
      "Supply chain and export control: quantum components are subject to controls that complicate collaboration.",
    ],
    gettingStarted: [
      "Separate problems limited by quantum-mechanical accuracy, such as materials and propulsion chemistry, from problems limited by scale, such as turbulence.",
      "Evaluate quantum sensors for navigation and timing on a certification roadmap.",
      "Join open challenges and national programs to test ideas cheaply and compare with classical tools.",
      "Track DARPA and national benchmarking results for credible hardware timelines.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will design aircraft. Reality: they might help specific sub-problems in materials and linear algebra, and design relies on HPC and testing.",
      "Myth: quantum navigation replaces GPS. Reality: it supplements it where GPS is unavailable, after certification.",
      "Myth: defense is far ahead in secret. Reality: public benchmarks show the whole field is still at an early stage.",
    ],
    bottomLine: [
      "For aerospace and defense, quantum sensing is the nearest-term technology, quantum chemistry is the strongest computing prospect, and optimization remains uncertain. The sensible strategy is to certify sensors for specific roles, partner on materials research, and track benchmarking results before committing to computing roadmaps.",
    ],
    faq: [
      { q: "How could quantum computing help aircraft design?", a: "Mostly through materials and chemistry simulation and possibly through accelerating some linear algebra in simulation. Practical advantages in fluid dynamics are unproven." },
      { q: "What is the Airbus Quantum Computing Challenge?", a: "An open competition launched in 2019 that asked teams to propose quantum approaches to aerospace problems such as aircraft climb optimization, fluid dynamics, wing-box design, and loading." },
      { q: "What is quantum navigation?", a: "Navigation that uses quantum sensors, such as magnetometers and atom interferometers, to determine position without relying on GPS." },
      { q: "What is DARPA's Quantum Benchmarking Initiative?", a: "A program to test whether any quantum computing approach can reach utility-scale operation by 2033. Eleven companies entered its second stage in November 2025." },
      { q: "When will aerospace see impact?", a: "Sensors may be operational in the late 2020s. Computing impact is a 2030s question that depends on hardware progress." },
    ],
    relatedAlgorithms: [
      "hhl-algorithm",
      "quantum-singular-value-transformation",
      "qaoa",
      "quantum-phase-estimation",
    ],
    relatedHardware: [
      "dwave-advantage2",
      "ibm-heron",
    ],
    relatedCompanies: [
      "d-wave",
      "q-ctrl",
      "ibm",
    ],
    relatedIndustries: [
      "space-defense",
      "materials-science",
      "manufacturing",
    ],
    relatedResearch: [
      "quantum-advantage-claim-independent-verification",
    ],
  },
  {
    slug: "automotive",
    name: "Quantum Computing for the Automotive Industry",
    tagline: "Battery chemistry, supply chain optimization, and autonomous systems",
    summary: "Automakers are exploring quantum computing for battery material design, manufacturing optimization, and as a longer-term tool for autonomous vehicle algorithm development.",
    maturity: "exploratory",
    metaDescription: "Quantum computing in automotive: battery chemistry, traffic and fleet optimization, manufacturing, and autonomous driving, with pilots from Volkswagen, BMW, Hyundai, and Ford.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Automakers are among the most active industrial users of quantum computing research. Volkswagen worked with D-Wave on traffic optimization in Beijing and Lisbon starting in 2017, BMW has run an open challenge with Airbus and collaborated with Pasqal on metal forming simulation, Hyundai has worked with IonQ on battery chemistry and image recognition, and Ford Otosan has used D-Wave hybrid solvers for production scheduling. The industry is under pressure to electrify and to adopt software-defined vehicles, and it funds exploratory research broadly.",
      "The activity covers a wide range, from battery cells to paint shops to autonomous driving. Most of it is exploratory: small demonstrations that probe where quantum methods might one day help. This page explains the main use cases, what has been shown, and why chemistry is the most solid long-term case.",
    ],
    whyQuantum: [
      "Car companies face three kinds of hard problems. Electrification requires better battery chemistry, which is a quantum simulation problem. Manufacturing and fleet operations produce scheduling and routing problems with large numbers of constraints. And perception and planning for driver assistance involve machine learning on huge datasets.",
      "The industry also has an unusual position in the supply chain. It buys electrochemical materials from a global supplier base, runs highly automated plants with tight takt times, and sells connected products that generate data. Each link in that chain has an optimization or simulation task where even a small gain is worth millions across millions of vehicles.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Exploratory, with several well-known pilots" },
      { label: "Most credible long-term workload", value: "Battery and fuel cell chemistry" },
      { label: "Hardware needed", value: "Fault-tolerant machines for chemistry; annealers for current optimization pilots" },
      { label: "Strongest classical competition", value: "HPC, AI-based materials screening, and industrial optimization software" },
      { label: "Notable pilots", value: "Volkswagen traffic flow, BMW metal forming, Hyundai with IonQ, Ford Otosan scheduling" },
      { label: "Realistic horizon", value: "Optimization pilots now; chemistry impact in the 2030s at the earliest" },
    ],
    keyNumbers: [
      { label: "Volkswagen Beijing (2017)", value: "Traffic optimization study for about 10,000 taxis using D-Wave" },
      { label: "Volkswagen Lisbon (2019)", value: "Bus route optimization during a technology conference with D-Wave" },
      { label: "Ford Otosan", value: "Reported production scheduling time cut from tens of minutes to a few minutes" },
      { label: "Battery electrolyte simulation", value: "Thousands of logical qubits estimated for chemically relevant molecules" },
      { label: "Quantum-inspired hardware", value: "Fujitsu Digital Annealer and Toshiba simulated bifurcation are used in some industrial optimization" },
      { label: "Typical vehicle program", value: "Development cycles of three to five years, which favor technologies with clear, certifiable payoffs" },
    ],
    useCases: [
      { title: "Battery and fuel cell chemistry", problem: "Battery range, charging speed, safety, and cost depend on electrode and electrolyte materials, and on interfaces where reactions happen. Predicting their behavior needs accurate electronic structure calculations, which are expensive for complex materials.", approach: "Quantum phase estimation and Hamiltonian simulation could calculate ground-state energies and reaction barriers for relevant fragments with controlled accuracy. Variational methods run on small devices today.", reality: "Published resource estimates for electrolyte molecules need thousands of logical qubits. Hyundai and IonQ reported work on simulating lithium compounds on small devices, and Mercedes-Benz has collaborated with quantum companies on battery simulation. These are small proofs of concept. Classical AI-driven screening is delivering candidates now.", algorithms: [
          "quantum-phase-estimation",
          "vqe",
          "trotter-suzuki-decomposition",
        ] },
      { title: "Traffic, routing, and mobility", problem: "Routing many vehicles through a city to reduce congestion, or assigning fleets and chargers, are large optimization problems that interact with human behavior.", approach: "Volkswagen formulated traffic flow as a binary optimization problem and ran it on D-Wave machines, with a 2019 Lisbon demonstration that optimized routes for buses during a conference.", reality: "The demonstrations were small and used hybrid solvers that rely on classical computation. They showed feasibility, not advantage, and classical traffic simulation and optimization are mature.", algorithms: [
          "quantum-annealing",
          "qaoa",
          "quantum-approximate-tsp",
        ] },
      { title: "Manufacturing and supply chain", problem: "Paint shops, assembly lines, and supplier networks need schedules that minimize color changes, idle time, and delays, and plants must adapt quickly to disruptions.", approach: "Schedules are encoded as optimization problems for annealers and QAOA. BMW and Pasqal explored quantum algorithms for metal forming simulation, a mechanics problem.", reality: "Ford Otosan reported cutting production scheduling computation from tens of minutes to a few minutes with a D-Wave hybrid solver. Details of baselines are limited, and gains may reflect reformulation as much as quantum hardware.", algorithms: [
          "quantum-annealing",
          "qaoa",
          "quantum-max-cut",
        ] },
      { title: "Driver assistance and autonomous driving", problem: "Perception systems classify objects in camera and lidar data, and planners choose safe actions in real time under uncertainty.", approach: "Quantum machine learning has been tested for image classification and sensor fusion, for example in Hyundai's work with IonQ on 3D object detection and image classification.", reality: "Results are small-scale and comparable to classical baselines. Production autonomy relies on large neural networks trained on classical hardware, and a quantum advantage is not established.", algorithms: [
          "quantum-kernel-estimation",
          "quantum-support-vector-machine",
        ] },
    ],
    whoIsWorking: [
      "Volkswagen, with pilots in traffic, logistics, and materials with D-Wave, Google, and others.",
      "BMW Group, with Airbus on a joint Quantum Computing Challenge and with Pasqal and other partners on simulation.",
      "Hyundai Motor Group, with IonQ on battery chemistry and machine learning.",
      "Ford Otosan, using D-Wave hybrid solvers, and Mercedes-Benz, which has worked with quantum companies on battery simulation and optimization.",
      "Hardware and software firms such as D-Wave, IonQ, Pasqal, IBM, and Quantinuum, along with Toyota-affiliated companies such as Denso and Toyota Tsusho in traffic and optimization.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Pilots in scheduling and routing, small chemistry demonstrations, and quantum-inspired solvers in production planning." },
      { horizon: "2028 to 2032", outlook: "First error-corrected chemistry results for small battery-relevant systems. Optimization advantage still to be proven." },
      { horizon: "2032 and later", outlook: "Simulation of electrode and electrolyte systems could influence battery design if large fault-tolerant machines arrive." },
    ],
    deepDive: [
      "Automotive announcements often combine several kinds of results, so it helps to separate them. A traffic demonstration with a few dozen vehicles shows that a formulation can run on hardware. A scheduling pilot shows possible value if the baseline was weak. A battery simulation on a handful of qubits shows nothing about advantage. Claims should be sorted into feasibility, value against a tuned baseline, and genuine quantum advantage, and most so far fall in the first category.",
      "Because carmakers also invest heavily in classical AI and simulation, internal comparisons are possible. A fair test would ask whether an AI-based materials screen or a conventional optimizer reaches the same result at lower cost. If it does, the quantum contribution is not yet needed, which is a legitimate finding and helps focus research on the problems that classical tools cannot handle.",
    ],
    obstacles: [
      "Hardware scale: realistic battery chemistry needs thousands of logical qubits.",
      "Classical progress: AI-driven materials discovery is moving quickly and competes for the same problems.",
      "Complexity of real systems: batteries involve interfaces, defects, and degradation over time, which exceed idealized models.",
      "Value capture: gains in scheduling must exceed integration costs in large plants.",
    ],
    gettingStarted: [
      "Focus quantum research on chemistry problems where classical methods are inaccurate, not on problems that are already well solved.",
      "Benchmark any optimization pilot against tuned classical solvers and quantum-inspired alternatives.",
      "Partner with universities and hardware vendors through consortia to share cost.",
      "Build a small team able to translate between automotive engineering and quantum algorithms.",
    ],
    mythsVsReality: [
      "Myth: quantum computers are optimizing city traffic. Reality: demonstrations were small pilots.",
      "Myth: batteries will be designed by quantum computers soon. Reality: hardware is not yet large enough, and classical AI is currently delivering progress.",
      "Myth: self-driving needs quantum computing. Reality: autonomy depends on classical machine learning.",
    ],
    bottomLine: [
      "The automotive industry is a useful early adopter and a good source of honest case studies. Its best long-term quantum prospect is battery and materials chemistry. Meanwhile, optimization pilots are worth running if they are benchmarked against strong classical solvers and tied to measurable plant or fleet metrics.",
    ],
    faq: [
      { q: "What did Volkswagen do with quantum computing?", a: "It ran traffic flow optimization with D-Wave, including a 2019 demonstration in Lisbon that planned bus routes, and explored battery and logistics applications with other partners." },
      { q: "Can quantum computers improve batteries?", a: "Possibly, by simulating electrode and electrolyte materials with higher accuracy. Estimates say this needs thousands of logical qubits, so it is a longer-term prospect." },
      { q: "Are carmakers using quantum computers in production?", a: "Some use hybrid solvers for scheduling in pilots, but quantum computing is not part of routine production." },
      { q: "Will quantum computing help autonomous driving?", a: "Not shown. Autonomous systems rely on classical neural networks, and quantum machine learning has not outperformed them." },
      { q: "Which automakers are most active?", a: "Volkswagen, BMW, Hyundai, Ford Otosan, Mercedes-Benz, and Toyota-affiliated firms have all announced quantum projects." },
    ],
    relatedAlgorithms: [
      "quantum-phase-estimation",
      "vqe",
      "quantum-annealing",
      "qaoa",
    ],
    relatedHardware: [
      "dwave-advantage2",
      "ionq-forte",
    ],
    relatedCompanies: [
      "d-wave",
      "ionq",
      "pasqal",
    ],
    relatedIndustries: [
      "transportation",
      "manufacturing",
      "energy",
    ],
    relatedResearch: [
      "vqe-molecular-simulation-accuracy",
      "qaoa-hardware-aware-circuit-compilation",
    ],
  },
  {
    slug: "agriculture",
    name: "Quantum Computing for Agriculture and Food",
    tagline: "Crop optimization, fertilizer chemistry, and supply chain modeling",
    summary: "One of the most exploratory application areas, where quantum simulation of nitrogen-fixing chemistry and optimization of agricultural supply chains are being investigated for long-term potential.",
    maturity: "exploratory",
    metaDescription: "Quantum computing for agriculture: nitrogen fixation and fertilizer chemistry, crop and supply chain optimization, weather prediction, and sensing, with realistic timelines.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Agriculture is one of the least obvious industries for quantum computing and, in one respect, one of the most interesting. About half of the world's population depends on food grown with synthetic nitrogen fertilizer, which is made from air and natural gas by the Haber-Bosch process at high temperature and pressure. That process is often estimated to consume one to two percent of the world's energy, and the enzyme that nature uses to do the same job at room temperature, nitrogenase, has an active site that classical computers struggle to model.",
      "Beyond fertilizer, the sector has optimization problems in planting, irrigation, harvest logistics, and supply chains, as well as data problems in weather, yield, and pest prediction. This page explains the one chemistry problem that makes agriculture a serious long-term candidate, and the more speculative proposals around it.",
    ],
    whyQuantum: [
      "The nitrogen problem is a textbook example of a quantum chemistry challenge. Nitrogenase converts atmospheric nitrogen to ammonia using an iron-molybdenum cofactor, often called FeMoco, a cluster of metal and sulfur atoms in which many electron configurations contribute. Classical approximations disagree about its electronic structure, so nobody can reliably predict how it works or design a catalyst that mimics it.",
      "The reward for solving it would be large: a catalyst that makes ammonia under mild conditions could cut fertilizer cost and emissions. This is the same type of problem that drives interest in quantum chemistry for batteries and catalysts, and FeMoco has become a standard benchmark for resource estimates in the field.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Exploratory; one strong chemistry case and several speculative ones" },
      { label: "Most credible quantum workload", value: "Simulating FeMoco and related catalysts for nitrogen fixation" },
      { label: "Hardware needed", value: "Published estimates point to millions of physical qubits and days of runtime" },
      { label: "Strongest classical competition", value: "Density functional theory, DMRG, coupled cluster, and AI for materials" },
      { label: "Why it matters", value: "Haber-Bosch fertilizer production uses an estimated one to two percent of world energy" },
      { label: "Realistic horizon", value: "2030s at the earliest for chemistry; other uses uncertain" },
    ],
    keyNumbers: [
      { label: "Haber-Bosch energy use", value: "An estimated one to two percent of world energy" },
      { label: "Ammonia production", value: "Roughly 180 million tonnes per year worldwide" },
      { label: "Food dependence", value: "Synthetic nitrogen fertilizer is estimated to support about half of the world's population" },
      { label: "FeMoco simulation", value: "Estimated at a few million physical qubits and days of runtime with current error-correction assumptions" },
      { label: "Nitrogenase conditions", value: "Fixes nitrogen at ambient temperature and pressure, versus 400 to 500 degrees Celsius and 150 to 300 atmospheres for Haber-Bosch" },
      { label: "Classical state of the art", value: "DMRG, coupled cluster, and DFT variants disagree on parts of the FeMoco electronic structure" },
    ],
    useCases: [
      { title: "Nitrogen fixation and fertilizer catalysts", problem: "Understanding how nitrogenase binds and splits nitrogen, and designing industrial catalysts that work under mild conditions, requires accurate electronic structure of the FeMoco cluster and similar systems.", approach: "Quantum phase estimation with efficient Hamiltonian representations, such as tensor hypercontraction, could compute the ground-state energy of an active space of FeMoco with controlled accuracy.", reality: "Resource estimates from groups including Reiher and colleagues in 2017 and later improvements, such as work by Lee and coauthors in 2021, brought the requirement down from astronomical to a few million physical qubits and a few days of runtime. No such machine exists, and classical methods have also improved, which keeps debate alive about how much quantum advantage remains for this problem.", algorithms: [
          "quantum-phase-estimation",
          "vqe",
          "linear-combination-of-unitaries",
        ] },
      { title: "Crop planning, irrigation, and supply chains", problem: "Choosing what to plant where, scheduling irrigation and harvest, and routing produce to market involve combinatorial optimization with uncertain weather and prices.", approach: "These are encoded as optimization problems for annealers and QAOA, or approached with hybrid solvers.", reality: "Studies are mostly academic and small-scale. Agricultural optimization is handled well by classical operations research, and no quantum advantage has been shown.", algorithms: [
          "quantum-annealing",
          "qaoa",
          "quantum-approximate-tsp",
        ] },
      { title: "Weather, yield, and pest prediction", problem: "Forecasting rainfall, temperature, yields, and disease outbreaks drives decisions on planting, insurance, and trade.", approach: "Quantum machine learning and quantum algorithms for differential equations have been proposed for forecasting and for atmospheric models.", reality: "Operational weather prediction relies on supercomputers and, increasingly, machine learning models. Quantum approaches are at the proof-of-concept stage, and the data-loading problem is severe for large fields.", algorithms: [
          "quantum-kernel-estimation",
          "hhl-algorithm",
        ] },
      { title: "Biochemistry for crop protection and food science", problem: "Designing safer pesticides, plant-growth regulators, and food ingredients needs models of how molecules bind to biological targets, much like drug design.", approach: "Quantum simulation of binding energies and reaction pathways could improve accuracy for difficult targets.", reality: "This follows the same timeline as pharmaceutical chemistry. Agrochemical firms follow the research and run small studies, but they do not yet use quantum computers for production design.", algorithms: [
          "vqe",
          "quantum-phase-estimation",
        ] },
    ],
    whoIsWorking: [
      "Academic groups at ETH Zurich, Microsoft Research, Google, and others that produced the FeMoco resource estimates and continue to reduce them.",
      "Chemical and agrochemical companies such as BASF, which have participated in quantum chemistry collaborations.",
      "Quantum software firms working on chemistry, including Quantinuum, Phasecraft, and others.",
      "Research programs in national laboratories and agricultural universities exploring optimization and sensing.",
      "Quantum sensing groups developing magnetometers and gravimeters that could eventually support soil and water monitoring.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Resource estimates improve, small catalyst fragments are simulated on hardware, and classical methods keep advancing." },
      { horizon: "2028 to 2032", outlook: "First error-corrected chemistry demonstrations on small active spaces, still short of FeMoco." },
      { horizon: "2032 and later", outlook: "If fault-tolerant machines reach millions of physical qubits, nitrogen fixation catalysts could be studied directly. Other agricultural uses remain speculative." },
    ],
    deepDive: [
      "Agricultural quantum claims fall into two groups with very different credibility. The chemistry case, centered on nitrogenase and FeMoco, is grounded in a well-defined scientific gap, and the resource estimates are published and debated. The farm-level claims, about crop planning or yield prediction, rest on general optimization and machine learning arguments that apply to any industry, with little evidence specific to agriculture.",
      "A fair assessment of the chemistry case asks how much classical methods have narrowed the uncertainty, since improvements in tensor network and selected configuration methods keep shrinking the set of questions that need a quantum computer. It also asks how a better calculation would change decisions: even a perfect energy for FeMoco does not by itself deliver a new industrial catalyst, which needs synthesis, stability, and scale-up.",
    ],
    obstacles: [
      "Scale: FeMoco needs millions of physical qubits with current error rates.",
      "Classical progress: better classical methods may shrink the set of problems that need quantum computers.",
      "Experimental validation: even a perfect simulation must be tested in the lab and scaled industrially.",
      "Economics: ammonia is a commodity, and new catalysts must compete with a very optimized process.",
    ],
    gettingStarted: [
      "Track chemistry resource estimates and benchmark results rather than hardware headlines.",
      "Collaborate with academic groups on active-space selection and classical baselines for key catalysts.",
      "Use classical AI and HPC tools now for materials and crop modeling.",
      "Treat optimization and weather applications as low-priority research.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will solve world hunger. Reality: they might help design better catalysts, which is one step in a long chain.",
      "Myth: farms will use quantum computers. Reality: any impact comes through chemistry research and suppliers.",
      "Myth: FeMoco is solved. Reality: it is a benchmark target that needs hardware that does not exist yet.",
    ],
    bottomLine: [
      "Agriculture will not use quantum computers directly. Its link to quantum computing runs through fertilizer chemistry, where a successful simulation could guide catalyst design with large energy and emissions benefits. That is a decade-scale research goal, and the sector should follow it through chemical suppliers and academic partners.",
    ],
    faq: [
      { q: "Why is nitrogen fixation important for quantum computing?", a: "Making fertilizer consumes a large amount of energy, and the enzyme nitrogenase does it under mild conditions with a metal cluster, FeMoco, that classical methods cannot model reliably." },
      { q: "How many qubits would FeMoco need?", a: "Published estimates range from millions of physical qubits and days of runtime, depending on error rates and algorithmic improvements." },
      { q: "Is quantum computing used on farms?", a: "No. Applications are research-stage, mostly in chemistry, and farmers would benefit indirectly." },
      { q: "Could quantum computers improve weather forecasts?", a: "Not shown. Operational forecasting relies on supercomputers and machine learning, and quantum approaches are experimental." },
      { q: "What is the Haber-Bosch process?", a: "The industrial method of making ammonia from nitrogen and hydrogen at high temperature and pressure. It supports fertilizer production and uses an estimated one to two percent of global energy." },
    ],
    relatedAlgorithms: [
      "quantum-phase-estimation",
      "vqe",
      "linear-combination-of-unitaries",
      "quantum-annealing",
    ],
    relatedHardware: [
      "quantinuum-h2",
    ],
    relatedCompanies: [
      "quantinuum",
      "phasecraft",
    ],
    relatedIndustries: [
      "materials-science",
      "climate-environment",
      "healthcare",
    ],
    relatedResearch: [
      "quantum-chemistry-active-space-selection",
      "vqe-molecular-simulation-accuracy",
    ],
  },
  {
    slug: "climate-environment",
    name: "Quantum Computing for Climate and the Environment",
    tagline: "Battery materials, carbon capture chemistry, and climate modeling",
    summary: "Quantum simulation of molecular systems could accelerate discovery of next-generation battery materials, more efficient solar cells, and catalysts for carbon capture — among the most credible medium-term quantum computing applications.",
    maturity: "exploratory",
    metaDescription: "Quantum computing for climate and environment: carbon capture materials, climate and weather modeling, environmental sensing, and risk analysis, with realistic expectations.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Climate and environmental science depends on computation at enormous scale. Climate models divide the atmosphere and oceans into millions of grid cells and step them forward in time, consuming some of the largest supercomputers in the world, and the chemistry of carbon capture, clean fuels, and pollution control rests on molecular behavior that is hard to compute accurately. Quantum computing is sometimes presented as a way to solve climate change, which overstates the case, but it could contribute in a few specific ways.",
      "The most credible contributions are indirect: better materials for capturing carbon, storing energy, and making clean fuels, through more accurate chemistry; and quantum sensors that measure gravity, magnetic fields, and time with new precision for monitoring ice, water, and the Earth's interior. The proposals to speed up the climate models themselves are theoretical and face serious obstacles.",
    ],
    whyQuantum: [
      "Climate models are built on nonlinear partial differential equations for fluid flow, radiation, and chemistry. Their cost is dominated by resolution and by the need to run many scenarios. Quantum algorithms for differential equations exist, but they work best for linear problems and dissipative systems, and the chaotic, nonlinear nature of the atmosphere is a poor match.",
      "The chemistry side is much better aligned. Designing a sorbent that captures carbon dioxide from air, a catalyst that turns it into fuel, or a better battery involves the electronic structure of molecules and materials. Simulating these accurately is the best-established use of fault-tolerant quantum computers, and climate-related research programs fund it for that reason.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Exploratory; chemistry for climate technologies is the strongest case" },
      { label: "Most credible quantum workload", value: "Materials for carbon capture, storage, and clean fuels" },
      { label: "Weakest case", value: "Speeding up global climate models directly" },
      { label: "Hardware needed", value: "Fault-tolerant machines with thousands of logical qubits for chemistry" },
      { label: "Most mature quantum technology", value: "Sensing, such as gravimeters and magnetometers for environmental monitoring" },
      { label: "Realistic horizon", value: "Sensing now to 2030; chemistry impact in the 2030s at the earliest" },
    ],
    keyNumbers: [
      { label: "Atmospheric CO2", value: "About 420 parts per million, which drives interest in capture and conversion chemistry" },
      { label: "NASA Cold Atom Laboratory", value: "On the International Space Station since 2018, producing ultracold atoms in orbit" },
      { label: "Climate model resolution", value: "Global models typically use grid cells of tens to about a hundred kilometers, with kilometer-scale runs on exascale systems" },
      { label: "Quantum differential equation solvers", value: "Speedups proven mainly for linear or strongly dissipative cases" },
      { label: "Carbon capture materials", value: "Metal-organic frameworks have hundreds of thousands of possible structures, and binding energies require accurate chemistry" },
      { label: "Quantum gravimeters", value: "Commercially available cold-atom instruments for geophysical surveying" },
    ],
    useCases: [
      { title: "Carbon capture and conversion materials", problem: "Capturing carbon dioxide from flue gas or air requires materials, such as metal-organic frameworks and amine sorbents, that bind it strongly enough to capture and weakly enough to release with little energy. Screening thousands of candidates with accurate chemistry is expensive.", approach: "Quantum simulation could compute binding energies and reaction barriers for promising candidates more accurately than approximate classical methods, especially when metal centers are involved.", reality: "TotalEnergies has worked with Quantinuum on quantum chemistry for carbon capture materials, and other groups run small studies. Calculations on today's devices cover fragments, not whole materials. Classical simulation and machine learning currently do most of the screening.", algorithms: [
          "quantum-phase-estimation",
          "vqe",
        ] },
      { title: "Climate and weather modeling", problem: "Weather and climate models solve nonlinear fluid equations on global grids at ever finer resolution, and ensembles of runs quantify uncertainty. Costs are high, and resolution is limited.", approach: "Researchers have proposed quantum algorithms for fluid equations based on Hamiltonian simulation, linear solvers, and quantum Carleman linearization for nonlinear equations.", reality: "Results show quantum speedups only under conditions, such as weak nonlinearity or strong dissipation, that real atmospheric flows do not meet, and state loading and readout add heavy costs. Operational centers are instead adopting machine learning forecasts and exascale computing. Quantum climate modeling is a research topic.", algorithms: [
          "hhl-algorithm",
          "quantum-singular-value-transformation",
          "trotter-suzuki-decomposition",
        ] },
      { title: "Environmental sensing and monitoring", problem: "Measuring changes in ice sheets, groundwater, sea level, and subsurface structures, and detecting leaks of methane or other gases, needs sensors with high sensitivity and stability.", approach: "Atom-interferometer gravimeters, quantum magnetometers, and optical clocks measure tiny changes in gravity, magnetic fields, and time, and can map mass changes underground and in ice.", reality: "Quantum gravimeters and magnetometers are available commercially for geophysics and surveying. Space-based cold-atom experiments, including NASA's Cold Atom Laboratory on the International Space Station, test technology for future Earth observation. Costs and portability are the main barriers to wide use.", algorithms: [
          "quantum-error-mitigation",
        ] },
      { title: "Risk analysis and resource planning", problem: "Insurers, governments, and utilities simulate climate risk, flooding, and supply disruption with Monte Carlo methods across many scenarios.", approach: "Quantum amplitude estimation offers a quadratic speedup for estimating expected losses, in the same way as for financial risk.", reality: "The speedup is real in theory, but it requires large fault-tolerant machines and does not address the larger uncertainty, which comes from model assumptions and data.", algorithms: [
          "quantum-amplitude-estimation",
          "quantum-monte-carlo-integration",
        ] },
    ],
    whoIsWorking: [
      "TotalEnergies and Quantinuum, on quantum chemistry for carbon capture materials.",
      "National laboratories and universities that study quantum algorithms for fluid dynamics and plasma and combine them with classical climate science.",
      "Space agencies, including NASA, which operate cold-atom experiments in orbit to prepare quantum sensors for Earth observation.",
      "Geophysics and surveying companies that use quantum gravimeters and magnetometers, and sensing startups such as Q-CTRL and Infleqtion.",
      "Chemical and materials companies that fund fundamental research on catalysts and sorbents with hardware and software partners.",
    ],
    timeline: [
      { horizon: "Now to 2030", outlook: "Quantum sensors are used in niche geophysics and surveying. Chemistry pilots on small molecules run on available hardware, with classical AI doing most of the screening." },
      { horizon: "2030 to 2035", outlook: "Early fault-tolerant machines may allow improved calculations for catalyst and sorbent fragments. Space-based quantum sensors begin flight tests." },
      { horizon: "2035 and later", outlook: "If hardware scales, quantum-enhanced design of carbon capture and clean fuel materials could contribute. Direct climate modeling impact remains doubtful." },
    ],
    deepDive: [
      "Claims that quantum computing will transform climate modeling should be treated with caution. The central equations are nonlinear and chaotic, the dominant uncertainty comes from physics and data rather than compute, and the best current progress comes from machine learning emulators and exascale simulations. A credible claim would state which part of a model it accelerates and show a classical comparison on the same problem.",
      "Claims about materials and sensing are easier to evaluate. A carbon capture chemistry result should say which molecule was treated, with how many qubits, and how the result compares with accurate classical methods. A sensing claim should give sensitivity, stability, and field-test results in realistic conditions, which are concrete and checkable.",
    ],
    obstacles: [
      "Nonlinearity: the equations of the atmosphere and oceans are nonlinear and chaotic, which limits quantum speedups.",
      "Time: climate mitigation is urgent, while fault-tolerant quantum computers are at least several years away.",
      "Competing tools: machine learning and exascale systems are advancing rapidly for modeling and materials screening.",
      "Translation: a computed material must still be synthesized, tested, and scaled.",
    ],
    gettingStarted: [
      "Prioritize proven climate technologies now, and treat quantum computing as a longer-term research bet, not a substitute for action.",
      "Use classical AI and HPC for materials screening today, and define the accuracy gaps that quantum methods might fill.",
      "Consider quantum sensors for monitoring where they are commercially available.",
      "Support open benchmarks that compare quantum and classical chemistry on climate-relevant molecules.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will solve climate change. Reality: they might help design materials, but emissions cuts depend on deployment of existing technology.",
      "Myth: quantum computing will make climate models exact. Reality: uncertainty in climate projections is dominated by physics and data, not by raw compute.",
      "Myth: all quantum climate tools are far off. Reality: quantum sensors are already used in surveying and geophysics.",
    ],
    bottomLine: [
      "Quantum technology can support climate goals through materials and measurement, but it is not a substitute for deploying known solutions today. A realistic plan funds quantum research as a long-term complement while delivering emissions cuts with existing technology.",
    ],
    faq: [
      { q: "Can quantum computers help fight climate change?", a: "Possibly, mainly through chemistry for carbon capture, batteries, and clean fuels. They are not a substitute for deploying known solutions now." },
      { q: "Will quantum computers improve climate models?", a: "Not in the near term. Quantum algorithms for differential equations are limited by nonlinearity, and data loading is costly." },
      { q: "What are quantum gravimeters?", a: "Instruments that use cold atoms to measure small changes in gravity, which can reveal changes in groundwater, ice, and subsurface structure." },
      { q: "Which companies work on carbon capture chemistry with quantum computers?", a: "TotalEnergies has collaborated with Quantinuum, and other energy and chemical companies run similar studies." },
      { q: "What is the NASA Cold Atom Laboratory?", a: "An experiment on the International Space Station that produces ultracold atoms in microgravity, used to test quantum sensors that might later measure Earth's gravity from orbit." },
    ],
    relatedAlgorithms: [
      "quantum-phase-estimation",
      "vqe",
      "hhl-algorithm",
      "quantum-amplitude-estimation",
    ],
    relatedHardware: [
      "quantinuum-h2",
    ],
    relatedCompanies: [
      "quantinuum",
      "q-ctrl",
    ],
    relatedIndustries: [
      "energy",
      "materials-science",
      "agriculture",
    ],
    relatedResearch: [
      "vqe-molecular-simulation-accuracy",
      "quantum-chemistry-active-space-selection",
    ],
  },
  {
    slug: "materials-science",
    name: "Quantum Computing for Materials Science",
    tagline: "Novel materials discovery, superconductor simulation, and catalysis",
    summary: "Quantum computers are uniquely suited to simulating quantum mechanical systems — making materials science one of the most promising application areas. Simulating high-temperature superconductors and designing novel catalysts are near-term research targets.",
    maturity: "early-pilots",
    metaDescription: "Quantum computing for materials science: superconductors, catalysts, batteries, solar cells, and quantum simulation experiments, with resource estimates and honest limits.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Materials science is the field where quantum computers have the most natural advantage, and it is also where the earliest scientific results are appearing. The properties of a material, whether it conducts electricity without resistance, stores energy, absorbs sunlight, or resists corrosion, come from the quantum mechanics of its electrons. In many materials those electrons interact strongly, and the number of states needed to describe them grows exponentially with the size of the sample. This is the problem Richard Feynman had in mind in 1982 when he proposed quantum computers.",
      "Today's classical methods, such as density functional theory, coupled cluster, and tensor networks, handle a huge range of materials well. The cases that resist them involve strong correlation: high-temperature superconductors, certain magnets, transition-metal catalysts, and some battery materials. Quantum simulation aims at exactly those cases, and experiments on analog and digital quantum devices have begun to explore simplified models of them.",
    ],
    whyQuantum: [
      "The cost of simulating a quantum system on a classical computer typically grows exponentially with its size, while a quantum computer can represent the state with a number of qubits that grows only linearly. For the simplest models, such as lattices of interacting spins and electrons, this has already allowed experiments that probe regimes where classical methods are strained.",
      "There are two routes. Analog and digital simulation with near-term devices studies model Hamiltonians directly, and has produced published experiments on magnetism, phase transitions, and dynamics. Fault-tolerant quantum phase estimation promises accurate energies for realistic materials, but needs thousands of logical qubits. Both routes are active research, and the field is candid about the distance between them.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Early pilots; the strongest scientific case for quantum computing" },
      { label: "Most credible quantum workload", value: "Simulating strongly correlated materials and catalysts" },
      { label: "Experiments so far", value: "Spin models, Hubbard-model physics, and dynamics on 50 to 150 qubit devices and annealers" },
      { label: "Hardware needed for industrial accuracy", value: "Thousands of logical qubits; published estimates for key catalysts reach millions of physical qubits" },
      { label: "Strongest classical competition", value: "DFT, DMRG, quantum Monte Carlo, tensor networks, and AI force fields" },
      { label: "Realistic horizon", value: "Scientific insights now; industrial design impact in the 2030s" },
    ],
    keyNumbers: [
      { label: "Feynman's proposal", value: "1982 paper suggesting quantum computers to simulate quantum physics" },
      { label: "IBM utility experiment", value: "127-qubit kicked Ising dynamics published in Nature in 2023, later matched by classical simulations" },
      { label: "Google Quantum Echoes", value: "Reported 13,000 times faster than the best classical method tested (Nature, October 2025)" },
      { label: "Chemical accuracy", value: "About 1.6 millihartree, the target for useful energy predictions" },
      { label: "Catalyst resource estimates", value: "Thousands of logical qubits for smaller systems, millions of physical qubits for FeMoco and P450" },
      { label: "D-Wave materials claim", value: "2025 Science paper on beyond-classical magnetic simulation, challenged by tensor network studies" },
    ],
    useCases: [
      { title: "Strongly correlated materials and superconductors", problem: "High-temperature superconductors and related quantum materials are described by models such as the Hubbard model, where electrons interact strongly. Exact solutions are known only in special cases, and approximate methods disagree about key properties.", approach: "Digital and analog quantum simulators implement the Hubbard model directly, using trapped ions, neutral atoms, and superconducting qubits, and measure properties such as pairing and magnetism.", reality: "Experiments on devices from Google, Quantinuum, IBM, and cold-atom platforms have simulated spin and Hubbard dynamics at scales that stress classical methods. A 2023 IBM experiment on 127 qubits and a 2025 Google result called Quantum Echoes are examples, and several claims were later matched by improved classical simulations. Genuine, accepted advantage for a useful material is not yet shown.", algorithms: [
          "trotter-suzuki-decomposition",
          "quantum-error-mitigation",
          "quantum-annealing",
        ] },
      { title: "Catalysts and reaction mechanisms", problem: "Catalysts that make ammonia, hydrogen, and fuels, and enzymes such as nitrogenase and cytochrome P450, involve transition metals with many nearly degenerate electronic states that approximate methods handle poorly.", approach: "Quantum phase estimation with compressed Hamiltonians computes ground-state energies of the active space with controlled accuracy.", reality: "Resource estimates range from thousands of logical qubits for smaller catalysts to a few million physical qubits and days of runtime for FeMoco and P450. Work by von Burg, Reiher, and others on ruthenium catalysts and by Google and Boehringer Ingelheim on P450 is typical. Hardware to run them does not yet exist.", algorithms: [
          "quantum-phase-estimation",
          "linear-combination-of-unitaries",
          "quantum-signal-processing",
        ] },
      { title: "Batteries and energy materials", problem: "Predicting electrolyte stability, ion transport, and electrode behavior needs accurate energies and dynamics for molecules and interfaces.", approach: "Variational methods probe small fragments now, and fault-tolerant simulation could handle larger ones later.", reality: "Studies of lithium electrolyte molecules estimate thousands of logical qubits. Meanwhile, AI-driven screening, such as the 2024 Microsoft and Pacific Northwest National Laboratory electrolyte search, finds candidates classically and sets a high bar.", algorithms: [
          "vqe",
          "quantum-phase-estimation",
        ] },
      { title: "Photovoltaics, semiconductors, and magnets", problem: "Solar absorbers, light-emitting materials, and magnetic materials depend on excited states, defects, and magnetic interactions that are hard for approximate methods.", approach: "Algorithms for excited states, dynamics, and spectral functions are being developed, along with quantum-centric supercomputing workflows that combine quantum and classical resources.", reality: "Collaborations such as Phasecraft with Oxford PV and Johnson Matthey aim to build algorithms for these tasks, and IBM and others promote hybrid workflows. Demonstrations are on model systems.", algorithms: [
          "quantum-imaginary-time-evolution",
          "quantum-gibbs-sampling",
        ] },
    ],
    whoIsWorking: [
      "Google Quantum AI, IBM, Quantinuum, and QuEra, which run simulation experiments on their hardware, often with academic partners.",
      "Phasecraft, which builds algorithms for materials simulation with partners such as Oxford PV, Johnson Matthey, and hardware makers including Google, IBM, Quantinuum, QuEra, and Atom Computing.",
      "Chemical and materials companies, including BASF, Dow, Merck KGaA, JSR, and Mitsubishi Chemical, in collaborations with hardware and software providers.",
      "National laboratories such as Oak Ridge, Pacific Northwest, Lawrence Berkeley, and Sandia, and university groups at Caltech, Harvard, and ETH Zurich.",
      "D-Wave, which published a 2025 paper claiming a beyond-classical simulation of magnetic materials that other groups have challenged with classical methods.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Analog and digital simulations of model systems on 100-qubit class devices, hybrid workflows, and an ongoing cycle of advantage claims and classical rebuttals." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines with logical qubits could compute small but chemically meaningful active spaces beyond exact classical methods." },
      { horizon: "2032 and later", outlook: "If fault-tolerant machines reach thousands of logical qubits, simulation of catalysts and correlated materials could start to inform industrial design." },
    ],
    deepDive: [
      "Materials science has a mature culture of benchmarking, which makes it a good model for judging quantum claims. A convincing result names the physical model, the observable measured, the system size, and the best classical method compared, ideally with an independent group trying to reproduce it. Several recent advantage claims were narrowed within months by improved tensor network or Monte Carlo methods, which is a sign of a healthy field.",
      "The distinction between model systems and real materials matters most. A simulation of a lattice model on 100 qubits is a scientific achievement but does not predict a specific superconductor. The step from model to material needs accurate parameters and often additional physics. The most useful announcements are explicit about this gap.",
    ],
    obstacles: [
      "Hardware scale and error rates: industrial accuracy needs error correction and many logical qubits.",
      "Moving classical baseline: tensor networks and machine learning keep pushing the boundary of what classical methods can do.",
      "State preparation: phase estimation needs a good starting state, which is itself hard for correlated systems.",
      "Gap to practice: accurate energies are only one input to materials design, which also needs synthesis and testing.",
    ],
    gettingStarted: [
      "Identify the specific properties where your current methods fail, and quantify the accuracy needed.",
      "Collaborate with academic or vendor groups on active-space selection and classical baselines.",
      "Follow independent verification of advantage claims, which have often been revised.",
      "Use classical AI and HPC for screening now, and keep quantum for the hardest cases.",
    ],
    mythsVsReality: [
      "Myth: quantum computers have already designed a new material. Reality: experiments have simulated model systems, not delivered industrial materials.",
      "Myth: all materials problems need quantum computers. Reality: classical methods handle most, and quantum targets the strongly correlated minority.",
      "Myth: every advantage claim is final. Reality: several were narrowed by better classical algorithms.",
    ],
    bottomLine: [
      "Materials science is the field most likely to see real, early scientific value from quantum computers, and it is already producing papers. Industrial impact depends on fault-tolerant hardware and on how far classical methods keep advancing, so organizations should engage through collaborations and watch independent verification closely.",
    ],
    faq: [
      { q: "Why is materials science a good fit for quantum computers?", a: "Because material properties come from quantum mechanics of interacting electrons, whose complexity grows exponentially on classical machines for strongly correlated systems." },
      { q: "Has a quantum computer simulated a material?", a: "Yes, simplified models such as spin chains and the Hubbard model, on devices with tens to over a hundred qubits. Useful, industrial-grade simulations are still out of reach." },
      { q: "How many qubits are needed for industrial catalysts?", a: "Estimates range from thousands of logical qubits to millions of physical qubits with days of runtime, depending on the system and assumptions." },
      { q: "What is quantum-centric supercomputing?", a: "A workflow, promoted by IBM and others, in which quantum processors handle the hardest part of a calculation and classical supercomputers handle the rest." },
      { q: "When will materials benefit?", a: "Scientific insights are emerging now. Industrial design impact is likely in the 2030s at the earliest." },
    ],
    relatedAlgorithms: [
      "quantum-phase-estimation",
      "trotter-suzuki-decomposition",
      "vqe",
      "quantum-imaginary-time-evolution",
    ],
    relatedHardware: [
      "google-willow",
      "quantinuum-h2",
      "ibm-heron",
    ],
    relatedCompanies: [
      "phasecraft",
      "quantinuum",
      "google",
    ],
    relatedIndustries: [
      "energy",
      "agriculture",
      "manufacturing",
    ],
    relatedResearch: [
      "vqe-molecular-simulation-accuracy",
      "quantum-chemistry-active-space-selection",
      "quantum-advantage-claim-independent-verification",
    ],
  },
  {
    slug: "space-defense",
    name: "Quantum Technology for Space and National Security",
    tagline: "Quantum sensing, navigation, secure communications, and cryptography",
    summary: "Defense agencies globally are investing heavily in quantum technologies — particularly quantum sensing (for GPS-independent navigation and submarine detection), quantum key distribution for secure communications, and post-quantum cryptography for protecting classified data.",
    maturity: "active-deployment",
    metaDescription: "Quantum technology for space and defense: satellite QKD, quantum navigation, atomic clocks, sensing, post-quantum cryptography, and DARPA programs, with real milestones.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Space agencies and defense ministries are the largest public funders of quantum technology, and they use it in ways that go well beyond computing. Quantum communication from satellites distributes cryptographic keys across continents. Quantum sensors measure acceleration, gravity, and magnetic fields for navigation that does not depend on GPS. Atomic clocks keep time precisely enough to synchronize networks. And governments are migrating their cryptography to resist quantum attack. Several of these are already deployed or in field trials, which is why this sector is classed as active deployment.",
      "Quantum computing for defense is a longer-term matter. The U.S. defense research agency DARPA runs the Quantum Benchmarking Initiative to test whether any approach can reach utility-scale operation by 2033, and intelligence agencies track the code-breaking potential of Shor's algorithm. This page focuses on space systems and national security, and leaves aerospace manufacturing and design to the aerospace and defense industry page.",
    ],
    whyQuantum: [
      "National security cares about three things that quantum technology touches directly: secure communication, resilient navigation and timing, and the ability to detect things that others cannot. Quantum mechanics provides new tools for each, often through sensors and communication links that do not need a large fault-tolerant computer.",
      "Space adds distance and isolation. Photons from a satellite can span thousands of kilometers with less loss than fiber, and a clock or accelerometer in orbit works in a clean environment. At the same time, governments know that a future quantum computer capable of running Shor's algorithm would expose today's encrypted archives, so they have set deadlines for migration to post-quantum cryptography.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Active deployment for post-quantum cryptography; field trials for sensing and satellite QKD" },
      { label: "Most mature technologies", value: "Atomic clocks, cold-atom and magnetic sensors, satellite QKD experiments" },
      { label: "Key milestone", value: "China's Micius satellite (2016) and 1,000 km-scale quantum links" },
      { label: "Government timelines", value: "NSA CNSA 2.0 and UK NCSC plans move national systems to post-quantum cryptography by about 2030 to 2035" },
      { label: "DARPA goal", value: "Test whether a utility-scale quantum computer can exist by 2033" },
      { label: "Realistic horizon", value: "Sensors and secure communication in the late 2020s; computing in the 2030s" },
    ],
    keyNumbers: [
      { label: "Micius satellite", value: "Launched in August 2016, with QKD and entanglement distribution over about 1,200 km" },
      { label: "Space-ground network", value: "Integrated quantum network spanning about 4,600 km reported in 2021" },
      { label: "NASA Cold Atom Laboratory", value: "Operating on the International Space Station since 2018" },
      { label: "DARPA QBI Stage B", value: "Eleven companies selected in November 2025, targeting utility-scale feasibility by 2033" },
      { label: "UK NCSC post-quantum milestones", value: "2028, 2031, and 2035" },
      { label: "Q-CTRL DARPA awards", value: "About 24 million U.S. dollars in 2025 for quantum sensing" },
      { label: "Navigation certification", value: "RTCA DO-160 qualification reported for a quantum magnetic navigation system in 2026" },
    ],
    useCases: [
      { title: "Satellite quantum communication", problem: "Fiber loses photons rapidly, which limits quantum key distribution to a few hundred kilometers without trusted relays. Governments want secure links between distant sites and continents.", approach: "Satellites send entangled or single photons to ground stations, and keys are relayed through the satellite. Free space has far lower loss at long distances than fiber.", reality: "China's Micius satellite, launched in 2016, demonstrated QKD over about 1,200 kilometers and entanglement distribution over about 1,200 kilometers, and later linked ground networks to a 4,600-kilometer integrated space-ground network. European projects, including the Eagle-1 satellite program and national initiatives, and efforts in Canada, Singapore, and elsewhere aim for operational systems.", algorithms: [
          "bb84-protocol",
          "e91-protocol",
          "device-independent-qkd",
        ] },
      { title: "Quantum navigation and sensing", problem: "Satellite navigation can be jammed or spoofed, and conventional inertial sensors drift. Militaries and civil aviation want navigation that works without external signals.", approach: "Cold-atom accelerometers and gyroscopes drift far less than classical ones, and quantum magnetometers use the Earth's magnetic anomaly map as a reference. Optical clocks improve timing.", reality: "Quantum navigation has moved from laboratory demonstrations to field trials on aircraft, ships, and vehicles. Q-CTRL reported that its magnetic navigation system received airworthiness qualification under RTCA DO-160 in 2026, and DARPA, the UK Ministry of Defence, and others fund programs. Operational deployment depends on certification and cost.", algorithms: [
          "quantum-error-mitigation",
        ] },
      { title: "Post-quantum cryptography for government systems", problem: "Classified and sensitive data encrypted today could be recorded and decrypted by a future quantum computer, so governments need to replace vulnerable public-key algorithms across weapons systems, satellites, and networks with long lifetimes.", approach: "Deploy NIST-standardized algorithms in hybrid form, build cryptographic agility, and set national deadlines. The NSA's CNSA 2.0 suite and the UK NCSC's 2028, 2031, and 2035 milestones define the path.", reality: "Migration has begun, and agencies have said that most national security systems should complete the transition between about 2030 and 2035. Satellites and embedded systems are among the hardest to update.", algorithms: [
          "shors-algorithm",
          "quantum-digital-signatures",
        ] },
      { title: "Mission optimization and computing", problem: "Scheduling satellite observations, ground station contacts, and constellations, and planning missions with many assets, are large optimization problems.", approach: "These are encoded for annealers and QAOA, and defense agencies fund benchmarking of fault-tolerant machines for broader uses such as materials and signal analysis.", reality: "NASA has studied quantum annealing for planning and scheduling since 2013. DARPA's Quantum Benchmarking Initiative, whose second stage in November 2025 included Atom Computing, Diraq, IBM, IonQ, Nord Quantique, Photonic, Quantinuum, Quantum Motion, QuEra, Silicon Quantum Computing, and Xanadu, aims to determine whether useful machines can be built by 2033.", algorithms: [
          "qaoa",
          "quantum-annealing",
          "quantum-error-correction-codes",
        ] },
    ],
    whoIsWorking: [
      "DARPA, which runs the Quantum Benchmarking Initiative and sensing programs such as Robust Quantum Sensors, with Q-CTRL receiving awards of about 24 million U.S. dollars in 2025.",
      "The Chinese Academy of Sciences and Pan Jianwei's team, which launched Micius and built a space-ground quantum network.",
      "The European Space Agency, the European Commission through EuroQCI, and companies such as SES and SpeQtral working on QKD satellites.",
      "NASA, which operates the Cold Atom Laboratory on the International Space Station and has studied quantum optimization.",
      "Quantum sensing firms such as Q-CTRL, Infleqtion, and AOSense, and defense primes that partner with them.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Post-quantum migration continues, quantum navigation and clocks are field tested, and national QKD satellites move toward service." },
      { horizon: "2028 to 2033", outlook: "Early operational use of quantum sensors on selected platforms. DARPA's benchmarking tests whether utility-scale quantum computers can be built by 2033." },
      { horizon: "2033 and later", outlook: "If utility-scale machines arrive, they affect both cryptography and materials and signal processing. Quantum sensors may become standard on many platforms." },
    ],
    deepDive: [
      "National security claims often arrive without data, so the best indicators are public milestones that can be checked. A satellite that has demonstrated QKD over a given distance, a sensor that has passed a certification test, and a government that has published migration deadlines are all concrete. Statements about secret capabilities cannot be evaluated and should not drive planning.",
      "For cryptography, the key distinction is between timing uncertainty and risk management. Nobody can predict when a cryptographically relevant quantum computer will exist, but the cost of migrating early is small compared with the cost of exposing long-lived secrets. That asymmetry, not a forecast, is the reason agencies set deadlines.",
    ],
    obstacles: [
      "Certification and cost: sensors must be rugged, small, and certified, which takes years.",
      "Loss and limits: satellite QKD needs clear skies, precise pointing, and trusted ground infrastructure.",
      "Legacy systems: satellites and weapons platforms with decades of life are difficult to upgrade cryptographically.",
      "Secrecy and uncertainty: capabilities of adversaries are not public, so planning relies on estimates.",
    ],
    gettingStarted: [
      "Inventory cryptography across platforms, prioritizing long-lived and space-based systems, and follow national migration guidance.",
      "Test quantum sensors for navigation and timing in realistic environments before committing to platforms.",
      "Evaluate QKD only where the threat model justifies its cost, and favor post-quantum cryptography for broad use.",
      "Follow independent benchmarking of quantum computing progress, such as DARPA's, to guide long-term planning.",
    ],
    mythsVsReality: [
      "Myth: a quantum computer capable of breaking encryption already exists in secret. Reality: public estimates and benchmarks suggest it is still years away, with uncertainty.",
      "Myth: quantum communication cannot be intercepted. Reality: it detects eavesdropping on the channel, and implementations have vulnerabilities.",
      "Myth: quantum navigation replaces GPS everywhere. Reality: it is a backup for specific platforms after certification.",
    ],
    bottomLine: [
      "Space and defense are the clearest case where quantum technology is already being fielded, mainly in sensing, timing, and secure communication, alongside post-quantum cryptography migration. Computing is a separate, longer story that benchmarking programs like DARPA's will clarify over the next several years.",
    ],
    faq: [
      { q: "What was the Micius satellite?", a: "A Chinese satellite launched in 2016 that demonstrated quantum key distribution and entanglement distribution over about 1,200 kilometers, a landmark for space-based quantum communication." },
      { q: "What is quantum navigation?", a: "Navigation that uses quantum sensors, such as cold-atom accelerometers and magnetometers, to determine position without GPS." },
      { q: "What is DARPA's Quantum Benchmarking Initiative?", a: "A program to test whether any quantum computing approach can reach utility-scale operation by 2033, with eleven companies in its second stage as of November 2025." },
      { q: "When must governments migrate to post-quantum cryptography?", a: "U.S. and UK guidance sets timelines between about 2030 and 2035 for most national security systems, with some milestones earlier." },
      { q: "Are quantum sensors in use?", a: "Atomic clocks are widely used, and cold-atom and magnetic navigation sensors are in field trials, with some certified in 2026." },
    ],
    relatedAlgorithms: [
      "bb84-protocol",
      "e91-protocol",
      "shors-algorithm",
      "quantum-error-correction-codes",
    ],
    relatedHardware: [
      "ionq-forte",
      "quantinuum-h2",
    ],
    relatedCompanies: [
      "q-ctrl",
      "ionq",
      "quantinuum",
    ],
    relatedIndustries: [
      "aerospace-defense",
      "cybersecurity",
      "telecommunications",
    ],
    relatedResearch: [
      "quantum-repeater-prototype-demonstration",
      "post-quantum-migration-case-study",
    ],
  },
  {
    slug: "transportation",
    name: "Quantum Computing for Transportation",
    tagline: "Route optimization, traffic management, and autonomous vehicle simulation",
    summary: "Combinatorial optimization problems in transportation — vehicle routing, traffic signal coordination, fleet scheduling — are natural candidates for quantum optimization algorithms like QAOA, though classical heuristics remain competitive in most benchmarks.",
    maturity: "exploratory",
    metaDescription: "Quantum computing for transportation: traffic flow, public transit and rail scheduling, EV charging, fleet routing, and autonomous mobility, with pilots and realistic expectations.",
    lastUpdated: "September 30, 2026",
    overview: [
      "Transportation systems move people and goods through networks of roads, rails, ports, and airways, and managing them is an exercise in solving large optimization problems under uncertainty. Which route should a bus take, how should trains be rescheduled after a delay, where should electric vehicle chargers go, how should signals be timed to reduce congestion? Researchers and transport operators have tried quantum approaches to all of these, mostly as small demonstrations.",
      "This page covers public and private transport and mobility services. Supply chains and freight networks are covered on the logistics page, vehicle makers on the automotive page, and airlines on the aviation page. The common theme is that the problems are real and large, the quantum results so far are modest, and quantum-inspired classical methods are currently the practical option.",
    ],
    whyQuantum: [
      "Transport problems are graph and scheduling problems whose difficulty grows quickly with size. Timetabling a railway network, assigning rolling stock, or optimizing the flow of vehicles through a city involve thousands of interacting decisions. They are the kind of combinatorial problems that annealing and QAOA are designed to explore.",
      "The stakes are also high. Congestion costs economies billions each year, public transit agencies run on tight budgets, and electrification adds new constraints on charging and grid load. Even a few percent improvement in routing or scheduling is worth pursuing, which is why transport agencies and manufacturers are open to experiments.",
    ],
    atAGlance: [
      { label: "Maturity", value: "Exploratory, with quantum-inspired solvers already used in some settings" },
      { label: "Most credible near-term workload", value: "Hybrid optimization of traffic, scheduling, and charging" },
      { label: "Hardware needed", value: "Annealers with thousands of qubits for pilots; fault-tolerant machines for provable speedups" },
      { label: "Strongest classical competition", value: "Mixed-integer solvers, heuristics, and traffic simulation software" },
      { label: "Notable pilots", value: "Volkswagen traffic flow in Beijing and Lisbon; Toyota-affiliated firms; research on railway rescheduling" },
      { label: "Realistic horizon", value: "Incremental pilots now; clear advantage not established" },
    ],
    keyNumbers: [
      { label: "Volkswagen Beijing (2017)", value: "Traffic optimization study for about 10,000 taxis using D-Wave" },
      { label: "Volkswagen Lisbon (2019)", value: "Bus route optimization during a conference with D-Wave" },
      { label: "Direct routing encodings", value: "Problems with N stops and N positions need about N squared binary variables" },
      { label: "Annealer scale", value: "D-Wave Advantage2: more than 4,400 qubits, with embedding reducing usable problem size" },
      { label: "Quantum-inspired hardware", value: "Fujitsu Digital Annealer, Toshiba simulated bifurcation, and Hitachi CMOS annealer are used commercially" },
      { label: "Railway rescheduling studies", value: "Small dispatching problems solved on D-Wave annealers in academic work in 2022" },
    ],
    useCases: [
      { title: "Traffic flow and signal control", problem: "Cities want to reduce congestion by timing signals and routing vehicles, but each driver's choice affects others, which makes the system hard to optimize globally.", approach: "Traffic is modeled as a binary optimization over route choices, and solved with annealers or hybrid solvers. Volkswagen demonstrated this approach on taxis in Beijing in 2017 and on buses in Lisbon in 2019.", reality: "The demonstrations used small numbers of vehicles and hybrid solvers with large classical components. They showed that the formulation works but not that it beats classical traffic management software.", algorithms: [
          "quantum-annealing",
          "qaoa",
        ] },
      { title: "Railway and public transit scheduling", problem: "Timetables must respect safety rules and connections, and after a delay, dispatchers must reschedule trains quickly to limit knock-on effects.", approach: "Rescheduling is written as a quadratic optimization problem. Researchers in Poland and elsewhere have run railway dispatching on D-Wave annealers, and rail technology firms have explored quantum-inspired annealers.", reality: "Small instances are solved on hardware, and larger ones need hybrid methods. Operational rail scheduling uses well-developed classical optimization, so adoption of quantum methods is at the research stage.", algorithms: [
          "quantum-annealing",
          "quantum-approximate-tsp",
          "quantum-max-cut",
        ] },
      { title: "Electric vehicle charging and fleet management", problem: "Placing chargers, scheduling charging to avoid grid overload, and dispatching shared or autonomous vehicle fleets are coupled optimization problems that grow with electrification.", approach: "These are modeled as assignment and scheduling problems for annealers or QAOA, and EDF with Pasqal has explored smart charging optimization.", reality: "Pilots address small fleets. Classical optimization copes with realistic sizes, and the benefits of quantum methods are not yet shown.", algorithms: [
          "qaoa",
          "quantum-annealing",
        ] },
      { title: "Autonomous mobility and perception", problem: "Autonomous and driver-assist systems need to recognize objects and plan motion in milliseconds under uncertainty.", approach: "Quantum machine learning has been tested for image classification and sensor fusion, and quantum sensing may improve inertial navigation when GPS is poor.", reality: "Machine learning demonstrations are small and match classical models. Quantum navigation sensors are in field trials for aircraft and ships, with road vehicles further away.", algorithms: [
          "quantum-kernel-estimation",
          "quantum-support-vector-machine",
        ] },
    ],
    whoIsWorking: [
      "Volkswagen, with D-Wave and other partners, on traffic and fleet optimization pilots.",
      "Toyota Tsusho and Denso, which have worked with D-Wave on traffic flow and related problems, and other Japanese firms using quantum-inspired annealers from Fujitsu, Toshiba, and Hitachi.",
      "EDF and Pasqal, on smart charging for electric vehicles.",
      "Railway research groups and operators, including Polish academic teams that have run dispatching problems on quantum annealers.",
      "Hardware and software vendors such as D-Wave, IBM, and Quantinuum, and consultancies that run optimization pilots for transport clients.",
    ],
    timeline: [
      { horizon: "Now to 2028", outlook: "Pilots in traffic, rail, and charging continue with hybrid solvers, and quantum-inspired annealers provide practical value in some deployments." },
      { horizon: "2028 to 2032", outlook: "Early fault-tolerant machines enable small provable speedups on search subroutines. Operational advantage over tuned classical solvers is not expected to be broad." },
      { horizon: "2032 and later", outlook: "If scalable hardware arrives, quantum-accelerated scheduling and simulation tools could appear, with uncertain benefit relative to classical methods." },
    ],
    deepDive: [
      "Transport pilots are easy to over-interpret because a demonstration on a real city or railway sounds more significant than it is. The key questions are the number of vehicles or trains involved, how often the solution must be recomputed, and what the existing system already does. A pilot with a few dozen vehicles optimized once offline does not show readiness for a live system that updates every few seconds.",
      "It also helps to separate the contribution of the optimization formulation from the hardware. Several studies found that a classical solver given the same formulation did as well. That suggests organizations can gain by modeling their problems better, regardless of whether quantum hardware is involved.",
    ],
    obstacles: [
      "Scale: real networks have more decision variables than current quantum devices handle directly.",
      "Dynamics: traffic and delays change continuously, so solutions must be recomputed in near real time.",
      "Competition: classical solvers and heuristics are fast, mature, and getting faster with GPUs.",
      "Integration: transport operators rely on certified, safety-critical software that is slow to change.",
    ],
    gettingStarted: [
      "Benchmark current planning tools against open solvers to understand the potential headroom first.",
      "Run small, well-defined pilots with clear metrics, and include quantum-inspired and classical baselines.",
      "Collaborate with universities and vendors, and share anonymized data and benchmarks to lower cost.",
      "Watch results in related fields, such as logistics and finance, for transferable techniques.",
    ],
    mythsVsReality: [
      "Myth: quantum computers will end traffic jams. Reality: demonstrations are small, and congestion also depends on infrastructure and behavior.",
      "Myth: reported pilot speedups prove quantum advantage. Reality: much of the gain comes from reformulation and classical solvers in the hybrid.",
      "Myth: transit agencies will buy quantum computers. Reality: they are more likely to use cloud services or quantum-inspired software.",
    ],
    bottomLine: [
      "Transportation offers many optimization problems and a willingness to experiment, but no proven quantum advantage yet. Operators can benefit from modern optimization and quantum-inspired tools now, while following quantum research with a critical eye.",
    ],
    faq: [
      { q: "Has quantum computing been used to manage traffic?", a: "In pilots. Volkswagen optimized taxi routes in Beijing in 2017 and bus routes in Lisbon in 2019 with D-Wave, using small numbers of vehicles and hybrid solvers." },
      { q: "Can quantum computers schedule trains?", a: "Researchers have solved small railway rescheduling problems on annealers. Operational scheduling uses mature classical optimization." },
      { q: "What are quantum-inspired annealers?", a: "Classical hardware, such as Fujitsu's Digital Annealer and Toshiba's simulated bifurcation machine, that uses ideas from quantum annealing to solve optimization problems." },
      { q: "Will quantum computing help autonomous vehicles?", a: "Not shown. Autonomous driving relies on classical machine learning, and quantum sensing is more likely to matter for navigation." },
      { q: "When will transportation benefit?", a: "Incremental pilots exist now. A clear and general quantum advantage is not established and may take until the 2030s or longer." },
    ],
    relatedAlgorithms: [
      "quantum-annealing",
      "qaoa",
      "quantum-approximate-tsp",
      "quantum-max-cut",
    ],
    relatedHardware: [
      "dwave-advantage2",
    ],
    relatedCompanies: [
      "d-wave",
      "pasqal",
      "ibm",
    ],
    relatedIndustries: [
      "logistics",
      "automotive",
      "energy",
    ],
    relatedResearch: [
      "qaoa-hardware-aware-circuit-compilation",
      "qaoa-warm-start-techniques",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
