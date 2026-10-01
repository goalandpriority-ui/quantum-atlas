export type CompanyFaq = { q: string; a: string };

export type CompanyProduct = { name: string; description: string };

export type CompanyMilestone = { year: string; event: string };

export type Company = {
  slug: string;
  name: string;
  founded: string;
  ceo: string;
  headquarters: string;
  technology: string;
  summary: string;
  products: string[];
  funding: string;
  latestNews: { title: string; date: string }[];
  // Optional long-form fields. Pages render each section only when present.
  website?: string;
  lastUpdated?: string;
  overview?: string[];
  history?: string[];
  technologyDeepDive?: string[];
  productsDetail?: CompanyProduct[];
  milestones?: CompanyMilestone[];
  strengths?: string[];
  challenges?: string[];
  whyItMatters?: string[];
  faq?: CompanyFaq[];
};

export const companies: Company[] = [
  {
    slug: "ibm",
    name: "IBM",
    founded: "1911 (public quantum program since 2016)",
    ceo: "Arvind Krishna (Chairman and CEO)",
    headquarters: "Armonk, New York, USA",
    technology: "Superconducting qubits",
    website: "ibm.com/quantum",
    lastUpdated: "September 30, 2026",
    summary:
      "IBM operates one of the world's largest fleets of cloud-accessible quantum computers and publishes the most detailed public roadmap in the industry, aiming for a fault-tolerant system called Starling by 2029.",
    overview: [
      "IBM is one of the oldest technology companies in the world, and it has been building quantum computers for longer than almost anyone else in the industry. Its IBM Quantum division designs superconducting processors, builds the control electronics and cryogenic systems around them, and runs a cloud service that lets researchers, students, and companies run circuits on real hardware from anywhere.",
      "What sets IBM apart is its habit of publishing a dated, public roadmap and then reporting against it. The current plan runs through a fault-tolerant machine called Starling, targeted for 2029, and extends to even larger systems in the 2030s. Because the milestones are public, it is unusually easy to check whether IBM is on schedule.",
    ],
    history: [
      "IBM's quantum story reaches back to the 1980s and 1990s, when IBM researchers such as Charles Bennett and Rolf Landauer helped lay the theoretical foundations of quantum information. The company moved from theory to public hardware in May 2016, when it put a small five-qubit processor on the cloud as the IBM Quantum Experience. It was one of the first times anyone outside a research lab could run a program on a real quantum chip. Qiskit, the open-source software development kit, followed in 2017.",
      "Hardware then scaled quickly. IBM introduced its first integrated system for commercial use, IBM Q System One, in 2019. The Eagle processor passed 100 qubits in 2021, Osprey reached 433 qubits in 2022, and in December 2023 IBM unveiled the 1,121-qubit Condor alongside the 133-qubit Heron and a modular system called Quantum System Two. After Condor, IBM deliberately shifted its emphasis from raw qubit count to quality, modularity, and error correction.",
    ],
    technologyDeepDive: [
      "IBM builds superconducting transmon qubits: tiny circuits made from superconducting metal that behave like artificial atoms when cooled to around 15 millikelvin inside a dilution refrigerator. Microwave pulses control each qubit, and qubits are coupled to their neighbors so they can run two-qubit gates. Superconducting qubits are fast, and they can be manufactured with techniques borrowed from the semiconductor industry, which is one reason both IBM and Google favor them.",
      "Earlier IBM chips used a heavy-hex layout, where each qubit connects to two or three neighbors. That design limits certain kinds of noise but forces extra swap operations. The Nighthawk processor, delivered in November 2025, moves to a square lattice with 120 qubits and 218 tunable couplers, which lets circuits use fewer swaps and therefore run more complex programs before errors pile up.",
      "For fault tolerance, IBM is betting on quantum low-density parity-check (qLDPC) codes rather than the surface code. IBM's published analysis suggests these codes could need roughly ten times fewer physical qubits for the same level of protection, but they require long-range connections between qubits. The experimental Loon chip, also delivered in November 2025, tests the extra wiring layers that make those connections possible. The Kookaburra module planned for 2026 is meant to be the first to store information in qLDPC memory and process it with an attached logical processing unit.",
    ],
    productsDetail: [
      {
        name: "IBM Quantum Nighthawk",
        description:
          "A 120-qubit processor with a square-lattice layout and 218 tunable couplers, positioned as IBM's main platform for near-term quantum advantage experiments. IBM has said it supports circuits of up to 5,000 two-qubit gates at launch, with targets of 7,500 gates by the end of 2026 and 10,000 in 2027.",
      },
      {
        name: "IBM Quantum Loon",
        description:
          "An experimental processor rather than a production system. Loon exists to prove out the building blocks of fault-tolerant hardware, especially the long-range couplers needed for qLDPC error-correcting codes.",
      },
      {
        name: "IBM Quantum Heron and Condor",
        description:
          "Heron (133 qubits, tunable couplers) has been IBM's highest-quality production chip, while Condor (1,121 qubits) demonstrated that very large chips can be fabricated. Both are covered in detail in our Hardware Database.",
      },
      {
        name: "Qiskit",
        description:
          "IBM's open-source quantum software development kit and one of the most widely used quantum programming tools in the world. It lets you build circuits in Python, optimize them for a specific chip, and run them on IBM hardware or on simulators. If you want to try it yourself, see our Your First Qiskit Circuit lesson.",
      },
      {
        name: "IBM Quantum Platform and Quantum System Two",
        description:
          "Cloud access to IBM's fleet of processors, plus Quantum System Two, a modular cryogenic and control system designed to house several processors in a single installation.",
      },
    ],
    products: [
      "IBM Quantum Nighthawk",
      "IBM Quantum Loon",
      "IBM Quantum Heron and Condor processors",
      "Qiskit (open-source SDK)",
      "IBM Quantum Platform (cloud access)",
    ],
    milestones: [
      { year: "2016", event: "IBM puts a 5-qubit processor on the cloud as the IBM Quantum Experience." },
      { year: "2017", event: "Qiskit is released as an open-source software development kit." },
      { year: "2019", event: "IBM Q System One, its first integrated quantum system for commercial use, is unveiled." },
      { year: "2021", event: "Eagle (127 qubits) becomes the first processor to pass 100 qubits." },
      { year: "2022", event: "Osprey reaches 433 qubits." },
      { year: "2023", event: "IBM and university partners publish a Nature paper on a 127-qubit utility experiment; Condor (1,121 qubits), Heron (133 qubits), and Quantum System Two are announced." },
      { year: "June 2025", event: "IBM publishes its detailed roadmap to Starling, a fault-tolerant system planned for 2029." },
      { year: "November 2025", event: "Nighthawk (120 qubits) and the experimental Loon processor are delivered." },
      { year: "2026", event: "Kookaburra, the first qLDPC memory module, is scheduled; IBM has said it expects credible quantum advantage demonstrations by the end of the year." },
    ],
    strengths: [
      "The most detailed and verifiable public roadmap in the industry, with named processors and target years.",
      "A large ecosystem: cloud access, the Qiskit SDK, and a broad network of research and enterprise partners.",
      "In-house expertise across chip design, cryogenics, control electronics, and software.",
      "A qLDPC error-correction strategy that, on paper, needs far fewer physical qubits than the surface code.",
    ],
    challenges: [
      "Fault tolerance is still years away: Starling is targeted for 2029, and Kookaburra's 2026 delivery had not been announced as of late September 2026.",
      "qLDPC codes need long-range connections that are hard to fabricate, and they are less proven experimentally than the surface code.",
      "Superconducting qubits need dilution refrigerators, and scaling wiring and cooling to very large systems is an unsolved engineering problem.",
      "Claims of quantum advantage on today's noisy chips are often challenged by improved classical algorithms, so results need independent verification.",
    ],
    whyItMatters: [
      "For anyone learning quantum computing, IBM is the easiest place to begin. Access to real hardware, a mature Python SDK, and extensive documentation mean that you can write a circuit in the morning and see it run on a physical chip the same afternoon. Much of the vocabulary used across this site, from heavy-hex lattices to logical qubits, comes from IBM's public materials.",
      "For the industry, IBM's roadmap acts as a benchmark. When a company promises a fault-tolerant machine, IBM's schedule gives everyone else something concrete to compare against. Whether IBM meets its 2026 and 2027 milestones will be one of the clearest signals about how quickly error-corrected quantum computing is actually arriving.",
    ],
    funding: "Publicly traded (NYSE: IBM)",
    latestNews: [
      { title: "Kookaburra, IBM's first qLDPC memory module, remains on the 2026 roadmap; no delivery had been announced as of late September 2026", date: "September 2026" },
      { title: "IBM delivers the 120-qubit Nighthawk and the experimental Loon processor", date: "November 2025" },
      { title: "IBM says it expects the first demonstrations of quantum advantage by the end of 2026", date: "November 2025" },
      { title: "IBM publishes its roadmap to the Starling fault-tolerant system planned for 2029", date: "June 2025" },
    ],
    faq: [
      {
        q: "Where can I use IBM's quantum computers?",
        a: "Through the IBM Quantum Platform on the cloud. IBM has offered free access to smaller systems for years, with paid plans for heavier use. Plans and limits change, so check IBM's site for the current options.",
      },
      {
        q: "What is Qiskit?",
        a: "Qiskit is IBM's open-source Python toolkit for writing quantum circuits, simulating them on your own computer, and running them on real IBM hardware. It is one of the most popular ways to start learning quantum programming.",
      },
      {
        q: "What is IBM Starling?",
        a: "Starling is IBM's planned fault-tolerant quantum computer, targeted for 2029 at its Poughkeepsie, New York site. IBM says it is designed to run about 100 million quantum operations on 200 logical qubits.",
      },
      {
        q: "Is IBM ahead of Google in quantum computing?",
        a: "It depends on what you measure. Google has led on headline error-correction and benchmark results with its Willow chip, while IBM leads on public roadmap detail, cloud access, and ecosystem size. Neither company has a fault-tolerant machine today.",
      },
      {
        q: "Is IBM a pure quantum company?",
        a: "No. IBM is a large, diversified technology and consulting company, and quantum computing is a small part of its business. Companies such as IonQ and Rigetti are pure-play quantum firms.",
      },
    ],
  },
  {
    slug: "google",
    name: "Google (Google Quantum AI)",
    founded: "Quantum AI Lab launched in 2013",
    ceo: "Sundar Pichai (Alphabet and Google CEO); Hartmut Neven (founder and lead of Google Quantum AI)",
    headquarters: "Mountain View, California, USA (quantum hardware lab in Santa Barbara, California)",
    technology: "Superconducting qubits (neutral atom program added in 2026)",
    website: "quantumai.google",
    lastUpdated: "September 30, 2026",
    summary:
      "Google Quantum AI builds superconducting quantum processors, including the 105-qubit Willow chip, which showed that error rates can fall as more qubits are added. In March 2026 the lab added a second track based on neutral atoms.",
    overview: [
      "Google Quantum AI is the quantum computing research group inside Google, part of Alphabet. Its main lab in Santa Barbara, California designs and builds its own superconducting quantum chips, and a newer team in Boulder, Colorado is working on neutral atom hardware. Unlike IBM, Google has not made its processors generally available on a public cloud. Access is limited to Google's own researchers and to selected outside research teams.",
      "The group has produced some of the field's most cited results: the 2019 quantum supremacy experiment on Sycamore, the 2024 demonstration on Willow that error correction improves as a chip scales up, and the 2025 Quantum Echoes experiment, which Google described as the first verifiable quantum advantage. Its stated goal is a large-scale, error-corrected quantum computer, and Google has said it expects commercially relevant machines by the end of this decade.",
    ],
    history: [
      "Google's quantum work began around 2012 and 2013 with the Quantum Artificial Intelligence Lab, set up with NASA and the Universities Space Research Association. The lab first experimented with quantum annealing hardware from D-Wave. In 2014 Google decided to build its own gate-based processors and brought in John Martinis and his superconducting-qubit group from the University of California, Santa Barbara.",
      "That decision produced the 72-qubit Bristlecone chip in 2018 and the 53-qubit Sycamore in 2019. In October 2025 the Nobel Prize in Physics went to John Clarke, Michel Devoret, and John Martinis for their 1980s experiments on superconducting circuits, work that underpins today's superconducting qubits. Devoret is Chief Scientist for Quantum Hardware at Google Quantum AI, and Martinis is a former leader of Google's hardware effort.",
    ],
    technologyDeepDive: [
      "Google's chips use superconducting transmon qubits arranged on a two-dimensional grid, where each qubit interacts with its four nearest neighbors. Willow has 105 qubits. According to figures published alongside the Quantum Echoes result, single-qubit gates reach about 99.97% fidelity, entangling gates about 99.88%, and readout about 99.5%.",
      "The most important idea in Google's roadmap is the logical qubit. A single physical qubit is too noisy for long computations, so error correction spreads one logical qubit across many physical ones. In December 2024, Willow showed that when Google increased the size of its surface code, from a 3 by 3 grid of qubits to 5 by 5 and then 7 by 7, the logical error rate fell at each step, by roughly half. This below-threshold behavior is what theory says is needed for error correction to scale.",
      "Google's public roadmap has six milestones. Willow sits between the second milestone, a prototype error-corrected qubit, and the third, a long-lived logical qubit with very low error rates. The end goal is a machine with about a million physical qubits. In March 2026 Google added neutral atom hardware as a second track: superconducting chips are fast and good at deep circuits, while neutral atom arrays can reach many thousands of qubits with flexible connectivity but run more slowly.",
    ],
    productsDetail: [
      {
        name: "Willow",
        description:
          "Google's 105-qubit superconducting processor, announced in December 2024. Google reported that a benchmark called random circuit sampling took Willow only minutes, a task it estimated would be impractical for a leading supercomputer. The more meaningful result was the below-threshold error correction. Willow is not on a public cloud; Google opened an early-access program for selected research proposals in 2026.",
      },
      {
        name: "Quantum Echoes",
        description:
          "An algorithm run on Willow and published in Nature in October 2025. It sends a signal into the quantum system, perturbs one qubit, and then reverses the evolution to listen for an echo. Google reported it ran about 13,000 times faster than the best classical method it tested, and called the result verifiable because another quantum computer of similar quality should be able to reproduce it. A proof-of-principle experiment with UC Berkeley applied the technique to two molecules using NMR data.",
      },
      {
        name: "Sycamore",
        description:
          "The 53-qubit processor behind the 2019 quantum supremacy claim. Later classical simulations narrowed the gap Google originally described, but the experiment remains a landmark in the field. See the Sycamore entry in our Hardware Database.",
      },
      {
        name: "Cirq",
        description:
          "Google's open-source Python framework for writing, simulating, and running quantum circuits. Cirq is used mainly by researchers and can be run on your own computer without access to Google's hardware.",
      },
      {
        name: "Neutral atom program",
        description:
          "Announced on March 24, 2026 and led by physicist Adam Kaufman in Boulder, Colorado. The program focuses on error correction for atom arrays, simulation of hardware designs, and experimental hardware. Google also continues to work with QuEra, a neutral atom company in which it is an investor.",
      },
    ],
    products: [
      "Willow processor",
      "Sycamore processor",
      "Quantum Echoes algorithm",
      "Cirq (open-source framework)",
      "Neutral atom hardware program",
    ],
    milestones: [
      { year: "2013", event: "The Quantum Artificial Intelligence Lab launches with NASA and USRA." },
      { year: "2014", event: "Google announces plans to build its own superconducting processors and recruits John Martinis's team." },
      { year: "2018", event: "Bristlecone, a 72-qubit chip, is unveiled." },
      { year: "2019", event: "Sycamore (53 qubits) completes a random circuit sampling task that Google says demonstrates quantum supremacy." },
      { year: "2023", event: "Google shows a distance-5 surface code performing slightly better than a distance-3 code on Sycamore-class hardware." },
      { year: "December 2024", event: "Willow (105 qubits) demonstrates below-threshold error correction." },
      { year: "October 2025", event: "Quantum Echoes is published in Nature; the Nobel Prize in Physics is shared by Michel Devoret and John Martinis with John Clarke." },
      { year: "March 2026", event: "Google announces a neutral atom hardware program and opens the Willow Early Access Program for research proposals." },
    ],
    strengths: [
      "Leading published error-correction results, including below-threshold scaling on Willow.",
      "Deep research talent, including a Nobel laureate as Chief Scientist for hardware.",
      "Large computing resources and AI expertise for simulating designs and decoding errors.",
      "A clearly staged roadmap with defined milestones.",
    ],
    challenges: [
      "Willow is not publicly accessible, so outside researchers cannot easily verify or build on its results.",
      "The long-lived logical qubit milestone, and everything after it, has not been reached yet.",
      "The 2019 supremacy claim was later challenged by improved classical simulation, so new advantage claims invite scrutiny.",
      "Running two hardware tracks, superconducting and neutral atom, adds cost and complexity, and the neutral atom effort is at an early stage.",
    ],
    whyItMatters: [
      "Google's results shape how the whole field thinks about error correction. The Willow experiment was widely seen as the first clear evidence that adding more physical qubits can make a logical qubit better rather than worse, which is the central bet behind every fault-tolerant roadmap.",
      "There is also a security angle. In 2025 a Google researcher published an analysis suggesting that RSA-2048 encryption could be broken with fewer than a million noisy qubits in under a week, far below earlier estimates. That is still far beyond today's hardware, but it is one reason governments and companies are planning migrations to post-quantum cryptography.",
    ],
    funding: "Part of Alphabet Inc. (NASDAQ: GOOGL); funded from Alphabet's research budget",
    latestNews: [
      { title: "Google Quantum AI launches a neutral atom hardware program led from Boulder, Colorado", date: "March 2026" },
      { title: "Willow Early Access Program opens for outside research proposals (deadline May 15, selections by July 1)", date: "March 2026" },
      { title: "Michel Devoret, Google Quantum AI's Chief Scientist for hardware, shares the Nobel Prize in Physics", date: "October 2025" },
      { title: "Google publishes Quantum Echoes on Willow in Nature, reporting a 13,000x speedup over classical methods", date: "October 2025" },
    ],
    faq: [
      {
        q: "What is Google Willow?",
        a: "Willow is Google's 105-qubit superconducting quantum processor, announced in December 2024. Its key result was showing that a logical qubit's error rate falls as the error-correcting code is made larger, which is a requirement for building fault-tolerant machines.",
      },
      {
        q: "Can I use Google's quantum computer?",
        a: "Not directly. Willow is not on a public cloud, though Google has run an early-access program for selected research teams. You can use Google's open-source Cirq framework to write and simulate circuits on your own computer.",
      },
      {
        q: "Did Google really achieve quantum supremacy?",
        a: "Google claimed it in 2019 with Sycamore. Other researchers later showed that improved classical algorithms could simulate the task much faster than Google originally estimated, so the claim remains debated. The 2025 Quantum Echoes result was framed differently, as a verifiable advantage on a physically meaningful problem.",
      },
      {
        q: "What is a logical qubit?",
        a: "A logical qubit is a more reliable qubit built from many physical qubits using error correction. If the physical qubits are good enough, adding more of them makes the logical qubit's error rate drop, which is what Willow demonstrated.",
      },
      {
        q: "Why did Google start a neutral atom program?",
        a: "Google says the two technologies complement each other. Superconducting chips run very fast and handle deep circuits well, while neutral atom arrays scale to many thousands of qubits with flexible connectivity. Pursuing both lets the lab hedge its bets and share research between them.",
      },
    ],
  },
  {
    slug: "microsoft",
    name: "Microsoft",
    founded: "Quantum research since the mid-2000s; Azure Quantum announced in 2019",
    ceo: "Satya Nadella (Chairman and CEO); Jason Zander (Executive Vice President) and Chetan Nayak (Technical Fellow, quantum hardware) lead the quantum effort",
    headquarters: "Redmond, Washington, USA (quantum research sites include Santa Barbara, California and Lyngby, Denmark)",
    technology: "Topological qubits (Majorana-based, experimental) plus cloud and software for partner hardware",
    website: "quantum.microsoft.com",
    lastUpdated: "September 30, 2026",
    summary:
      "Microsoft is pursuing topological qubits based on Majorana zero modes, a high-risk approach designed for built-in error protection, while its Azure Quantum cloud gives developers access to hardware from partners. Its Majorana 1 and Majorana 2 chips remain scientifically debated.",
    overview: [
      "Microsoft takes a different path from most quantum companies. Rather than building the superconducting or trapped-ion qubits that other firms use, it has spent close to two decades trying to create a topological qubit, a type of qubit that would be naturally protected from many kinds of errors. If it works, it could be far easier to scale than today's noisy qubits. If it does not, Microsoft has hedged with a cloud platform and partnerships.",
      "That hedge is Azure Quantum, a cloud service that gives developers access to quantum hardware and simulators from several providers, along with a growing collaboration with hardware companies such as Atom Computing and Quantinuum on error-corrected logical qubits.",
    ],
    history: [
      "Microsoft's quantum program grew out of Station Q, a research group set up in Santa Barbara, California in the mid-2000s and led by the mathematician Michael Freedman, a Fields Medal winner known for his work in topology. The idea was to turn an exotic theoretical concept, particles whose braiding patterns could store information, into working hardware. Microsoft also built the software side, releasing the Q# programming language and the Quantum Development Kit in 2017 and announcing the Azure Quantum cloud in 2019.",
      "The hardware effort has been controversial. A 2018 Nature paper from a Microsoft-linked team in Delft claiming evidence for Majorana particles was retracted in 2021 after problems were found in the data analysis. Microsoft continued the program with new materials and measurement methods, and in February 2025 it announced Majorana 1, which it called the first quantum processor with a topological core. Independent physicists have said the evidence for genuine topological qubits is still incomplete.",
    ],
    technologyDeepDive: [
      "A conventional qubit stores information in a fragile physical property, such as the state of a circuit or an ion. A topological qubit would store it in a collective property of the system that local disturbances cannot easily change. Microsoft's design uses semiconductor-superconductor nanowires made from a material stack it calls a topoconductor. At near absolute zero and in a magnetic field, the wire is supposed to host Majorana zero modes at its ends, and the qubit's state is encoded in the parity, even or odd, of the electrons shared between them.",
      "Reading and controlling these qubits uses voltage pulses and measurements rather than the microwave pulses used with superconducting chips, which Microsoft argues makes the system digitally controlled and easier to scale. Microsoft has said Majorana 1 holds eight qubits on a design intended to accommodate up to one million.",
      "The central scientific dispute is proof. When Majorana 1 was announced, the editorial notes accompanying the related Nature paper said the results did not by themselves demonstrate Majorana modes, and critics said Microsoft had not shown a working topological qubit. In June 2026 Microsoft announced Majorana 2 with a new material stack, reporting a parity lifetime of about 20 seconds and a topological gap more than twice as large as before. Nature's news coverage noted that some researchers remained sceptical.",
    ],
    productsDetail: [
      {
        name: "Majorana 1 and Majorana 2",
        description:
          "Microsoft's topological quantum chips. Majorana 1 was unveiled in February 2025 and Majorana 2 in June 2026. Both are research devices, not products you can rent, and both remain the subject of scientific debate. Microsoft now says it expects a scalable topological quantum computer by 2029.",
      },
      {
        name: "Azure Quantum",
        description:
          "Microsoft's cloud platform for quantum computing. It provides access to hardware and simulators from partners, along with tools for resource estimation, which calculates how many qubits and how much time a given algorithm would need on a future fault-tolerant machine. The list of hardware providers changes over time, so check the current Azure Quantum documentation.",
      },
      {
        name: "Q# and the Quantum Development Kit",
        description:
          "Microsoft's quantum programming language and toolkit, first released in 2017. It supports local simulation and resource estimation and integrates with Microsoft's developer tools.",
      },
      {
        name: "Magne, built with Atom Computing",
        description:
          "A planned Level 2 machine for Denmark's QuNorth, built by Atom Computing with Microsoft's error-correction software. It targets about 50 logical qubits from roughly 1,200 physical neutral-atom qubits, and QuNorth says it expects full operation in early 2027. QuNorth is backed by 80 million euros from Denmark's EIFO and the Novo Nordisk Foundation.",
      },
      {
        name: "Logical-qubit demonstrations with partners",
        description:
          "In April 2024 Microsoft and Quantinuum reported logical qubits with error rates far below those of the underlying physical qubits, and in November 2024 Microsoft and Atom Computing reported 24 entangled logical qubits on neutral atoms.",
      },
    ],
    products: [
      "Majorana 1 and Majorana 2 topological chips (research)",
      "Azure Quantum (cloud platform)",
      "Q# and the Quantum Development Kit",
      "Magne logical-qubit system (with Atom Computing)",
    ],
    milestones: [
      { year: "Mid-2000s", event: "Station Q is founded in Santa Barbara to pursue topological quantum computing." },
      { year: "2017", event: "Q# and the Quantum Development Kit are released." },
      { year: "2019", event: "Azure Quantum is announced." },
      { year: "2021", event: "Nature retracts a 2018 Majorana paper from a Microsoft-linked research group." },
      { year: "April 2024", event: "Microsoft and Quantinuum report logical-qubit results on trapped-ion hardware." },
      { year: "November 2024", event: "Microsoft and Atom Computing report 24 entangled logical qubits." },
      { year: "February 2025", event: "Majorana 1 is unveiled; Microsoft says it is part of the final phase of DARPA's US2QC program." },
      { year: "July 2025", event: "QuNorth and the Magne Level 2 system are announced in Denmark." },
      { year: "June 2026", event: "Majorana 2 is announced at Microsoft Build." },
    ],
    strengths: [
      "A potentially very scalable qubit design, if topological protection works as hoped.",
      "A mature software and cloud business that does not depend on a single hardware bet.",
      "Long-term commitment: Microsoft has funded this research for close to two decades.",
      "Partnerships that deliver logical-qubit results now, on other companies' hardware.",
    ],
    challenges: [
      "Many independent researchers remain sceptical that Microsoft has demonstrated a fully working topological qubit.",
      "Majorana devices are far behind superconducting and trapped-ion systems in demonstrated computations.",
      "The 2021 retraction and the disputed 2025 claims mean Microsoft's announcements attract heavy scrutiny.",
      "The 2029 target for a scalable topological system is ambitious and depends on further materials progress.",
    ],
    whyItMatters: [
      "Microsoft's bet is the highest-risk, highest-reward approach among the big technology companies. If topological qubits work, the number of physical qubits needed for a useful machine could drop dramatically, changing the economics of the entire field. That is why the debate over Majorana 1 and Majorana 2 matters even to people who never plan to use one.",
      "For developers, Azure Quantum and its resource estimator are practical tools today. They help answer a question that matters for planning: how big must a quantum computer be before a given problem becomes solvable? Estimates like these are what make timelines for cryptography, chemistry, and finance more concrete.",
    ],
    funding: "Publicly traded (NASDAQ: MSFT)",
    latestNews: [
      { title: "Microsoft announces Majorana 2 at Build, reporting a 20-second parity lifetime and targeting a scalable topological system by 2029", date: "June 2026" },
      { title: "Nature reports that researchers remain sceptical of Microsoft's Majorana 2 claims", date: "June 2026" },
      { title: "QuNorth says Magne, the 50-logical-qubit machine built with Atom Computing, is expected to be fully operational in early 2027", date: "2026" },
      { title: "Microsoft expands its quantum fabrication and research lab in Denmark", date: "November 2025" },
    ],
    faq: [
      {
        q: "What is a topological qubit?",
        a: "A topological qubit stores information in a global property of a material rather than in a single fragile particle, so ordinary local noise should not easily disturb it. If it can be built, it would need far less error correction than other qubit types.",
      },
      {
        q: "Has Microsoft built a working topological qubit?",
        a: "Microsoft says yes and points to Majorana 1 and Majorana 2. Many independent physicists say the published evidence does not yet prove it. The honest answer is that the question is still open and depends on further peer-reviewed results.",
      },
      {
        q: "Can I run programs on Microsoft's quantum computers?",
        a: "Azure Quantum lets you submit jobs to partner hardware and simulators. Microsoft's own Majorana chips are research devices and are not available for general use. Provider availability and pricing change, so check the Azure Quantum documentation.",
      },
      {
        q: "What is a Level 2 quantum computer?",
        a: "In Microsoft's framework, today's noisy machines are Level 1, machines that use logical qubits with error correction are Level 2, and large machines that can solve problems beyond classical reach are Level 3. Magne is intended to be one of the first commercial Level 2 systems.",
      },
      {
        q: "What is Q#?",
        a: "Q# is Microsoft's quantum programming language, released in 2017 as part of the Quantum Development Kit. It is used to write quantum algorithms, simulate them locally, and estimate the resources they would need.",
      },
    ],
  },
  {
    slug: "ionq",
    name: "IonQ",
    founded: "2015 (listed on the NYSE in 2021)",
    ceo: "Niccolo de Masi (Chairman and CEO)",
    headquarters: "College Park, Maryland, USA",
    technology: "Trapped-ion qubits (ytterbium)",
    website: "ionq.com",
    lastUpdated: "September 30, 2026",
    summary:
      "IonQ builds trapped-ion quantum computers and has grown quickly through acquisitions into networking, sensing, space, and semiconductor manufacturing. Revenue is rising fast, but so are losses.",
    overview: [
      "IonQ is one of the best-known pure-play quantum computing companies and one of the first to go public. Its computers trap individual ytterbium ions in electromagnetic fields and use lasers to manipulate them. Because every ion is identical and can interact with every other ion in the same trap, IonQ's systems are known for high gate fidelity and flexible connectivity.",
      "Under CEO Niccolo de Masi, who took over in February 2025, IonQ has pursued a strategy of consolidation, buying companies in quantum networking, security, sensing, space communications, and chip fabrication. The aim is to become a full-stack quantum platform and a merchant supplier of quantum hardware to the rest of the industry.",
    ],
    history: [
      "IonQ was founded in 2015 by Christopher Monroe of the University of Maryland and Duke University and Jungsang Kim of Duke, two academics who had spent years working on trapped-ion physics. It went public in October 2021 through a merger with the special purpose acquisition company dMY Technology Group, which de Masi co-founded, and was one of the first quantum computing companies to list on a US exchange.",
      "Peter Chapman led IonQ as CEO from 2019 until February 2025, when de Masi took over; de Masi became chairman in August 2025. During 2025 the company announced acquisitions including Oxford Ionics, ID Quantique, Lightsynq, Capella Space, and Vector Atomic, and in July 2026 it completed the roughly 1.8 billion dollar purchase of the semiconductor foundry SkyWater Technology.",
    ],
    technologyDeepDive: [
      "Trapped-ion qubits are individual charged atoms held in place by electric fields in a vacuum chamber. IonQ uses ytterbium ions. Each ion's internal energy levels serve as the 0 and 1 of a qubit, and precisely tuned lasers perform the gates. Since all the ions are the same species, the qubits are naturally uniform, and coherence times are long, on the order of seconds on this platform.",
      "Ions in a single chain can be coupled through their shared motion, which gives IonQ its all-to-all connectivity: any qubit can be entangled with any other without swap operations. The trade-offs are slower gates than superconducting chips, typically microseconds instead of nanoseconds, and the difficulty of keeping long chains stable. IonQ's answer to scaling is to link multiple smaller traps with photonic interconnects, and its acquisitions in photonic interconnects and quantum networking support that plan.",
      "IonQ has historically reported performance using algorithmic qubits, a metric that combines qubit count and error rates. In late 2025 the company reported a two-qubit gate fidelity of 99.99%, using electronic qubit control technology that came with its Oxford Ionics acquisition. IonQ has also published roadmap targets for 2030 in the range of millions of physical qubits and tens of thousands of logical qubits; these are goals, not results.",
    ],
    productsDetail: [
      {
        name: "IonQ Forte",
        description:
          "An earlier-generation trapped-ion system offered through the cloud and for on-premises deployment. See the IonQ Forte entry in our Hardware Database for specifications.",
      },
      {
        name: "IonQ Tempo",
        description:
          "IonQ's newer trapped-ion system. The company said global deployments of Tempo systems, together with strong cloud usage, drove its record second-quarter 2026 revenue.",
      },
      {
        name: "Cloud access",
        description:
          "IonQ systems are available through Amazon Braket, Microsoft Azure Quantum, and Google Cloud, as well as through IonQ's own cloud service.",
      },
      {
        name: "Quantum networking and security",
        description:
          "Through ID Quantique, IonQ sells quantum random number generators and quantum key distribution products, and it is developing quantum networking based on photonic interconnects and quantum memory.",
      },
      {
        name: "Space and sensing",
        description:
          "IonQ's Space Division, formerly Capella Space, builds satellites for Earth observation, and Vector Atomic adds quantum sensing technology such as atomic clocks and navigation sensors.",
      },
      {
        name: "Foundry and manufacturing",
        description:
          "The SkyWater acquisition gives IonQ a US semiconductor foundry to manufacture its own chips. The company says this will support its next-generation systems, including a platform it calls Superion.",
      },
    ],
    products: [
      "IonQ Forte",
      "IonQ Tempo",
      "Cloud access via AWS, Azure, and Google Cloud",
      "Quantum networking and security products",
      "Quantum sensing and space systems",
    ],
    milestones: [
      { year: "2015", event: "IonQ is founded by Christopher Monroe and Jungsang Kim." },
      { year: "October 2021", event: "IonQ begins trading on the NYSE after its merger with dMY Technology Group." },
      { year: "February 2025", event: "Niccolo de Masi replaces Peter Chapman as CEO." },
      { year: "2025", event: "IonQ announces deals for Oxford Ionics, ID Quantique, Lightsynq, Capella Space, and Vector Atomic." },
      { year: "October 2025", event: "IonQ reports a 99.99% two-qubit gate fidelity." },
      { year: "Early 2026", event: "IonQ agrees to acquire SkyWater Technology." },
      { year: "July 2026", event: "The SkyWater acquisition closes." },
      { year: "August 2026", event: "IonQ reports record Q2 revenue of 80.1 million dollars, up 287% year over year." },
      { year: "September 2026", event: "IonQ raises its 2026 revenue guidance to 450 to 460 million dollars." },
    ],
    strengths: [
      "Very high reported gate fidelities and all-to-all connectivity.",
      "Fast revenue growth: Q2 2026 revenue was up 287% from a year earlier, and 2026 guidance was raised to 450 to 460 million dollars after SkyWater.",
      "A broad platform covering computing, networking, sensing, space, and now manufacturing.",
      "Availability through all three major cloud providers.",
    ],
    challenges: [
      "Large losses: IonQ reported a GAAP net loss of about 1.87 billion dollars in Q2 2026, largely from acquisition-related accounting charges.",
      "Integration risk: absorbing many acquisitions in under two years is difficult.",
      "Trapped-ion gates are slower than superconducting gates, which affects total run time for deep algorithms.",
      "Roadmap targets for 2030 are goals, and scaling ion traps to very large systems is still unproven.",
    ],
    whyItMatters: [
      "IonQ is a useful case study of how quantum computing is turning into an industry. Revenue is growing quickly from a small base, customers include governments and large companies, and the company is buying suppliers to secure its manufacturing. At the same time, the enormous losses and the fact that no quantum computer can yet outperform classical systems on useful commercial work show how early the market still is.",
      "Trapped ions are also the leading rival to superconducting qubits, so IonQ's fidelity and scaling results are one of the main tests of which hardware approach will win. Comparing IonQ with IBM and Google is a good way to understand the trade-off between fast gates and high-quality, well-connected qubits.",
    ],
    funding:
      "Publicly traded (NYSE: IONQ); about 2.0 billion dollars of pro forma cash after the SkyWater acquisition, as reported in August 2026",
    latestNews: [
      { title: "IonQ raises its 2026 revenue guidance to 450 to 460 million dollars following the SkyWater acquisition", date: "September 2026" },
      { title: "IonQ reports record Q2 revenue of 80.1 million dollars, up 287% year over year", date: "August 2026" },
      { title: "IonQ completes its acquisition of SkyWater Technology", date: "July 2026" },
    ],
    faq: [
      {
        q: "What does IonQ do?",
        a: "IonQ builds trapped-ion quantum computers and sells access to them through the cloud and as on-premises systems. It also sells quantum networking and security products and, through acquisitions, has moved into sensing, space systems, and chip manufacturing.",
      },
      {
        q: "How are trapped-ion computers different from superconducting ones?",
        a: "Trapped-ion qubits are individual atoms and are all identical, which gives high fidelity and connectivity between any pair of qubits. Superconducting qubits are fabricated circuits with much faster gates but more limited connectivity. Each approach has strengths, and it is not yet clear which will scale best.",
      },
      {
        q: "Can I use IonQ's computers?",
        a: "Yes, through Amazon Braket, Microsoft Azure Quantum, and Google Cloud, or directly through IonQ. Pricing and availability change, so check each provider's documentation.",
      },
      {
        q: "Is IonQ profitable?",
        a: "No. IonQ reported a large GAAP net loss in the second quarter of 2026, driven mostly by acquisition-related charges, and analysts do not expect profits for some time. This page is not investment advice.",
      },
      {
        q: "Who founded IonQ?",
        a: "IonQ was founded in 2015 by Christopher Monroe and Jungsang Kim, both academic researchers in trapped-ion quantum computing.",
      },
    ],
  },
  {
    slug: "rigetti",
    name: "Rigetti Computing",
    founded: "2013 (listed on Nasdaq in 2022)",
    ceo: "Subodh Kulkarni (President and CEO)",
    headquarters: "Berkeley, California, USA (chip fabrication in Fremont, California)",
    technology: "Superconducting qubits (chiplet-based modular architecture)",
    website: "rigetti.com",
    lastUpdated: "September 30, 2026",
    summary:
      "Rigetti designs and manufactures superconducting quantum processors and pioneered a chiplet approach, joining small 9-qubit chips into larger systems such as the 108-qubit Cepheus-1-108Q.",
    overview: [
      "Rigetti Computing is a US pure-play quantum company that designs its own superconducting chips and manufactures them in its own fabrication facility. It sells access through the cloud and sells complete on-premises systems, from the 9-qubit Novera to the 108-qubit Cepheus class, mainly to national laboratories and quantum computing centers.",
      "The company's defining technical idea is modularity. Instead of building one large, fragile chip, Rigetti tiles several small chips, called chiplets, into a larger processor. Smaller chips are easier to manufacture with high quality, and the company argues this offers a practical path to systems with 1,000 or more qubits.",
    ],
    history: [
      "Rigetti was founded in 2013 by Chad Rigetti, a physicist who had worked at IBM Research, and was one of the first startups to build superconducting quantum processors along with its own fabrication line. It launched a cloud platform, Forest, in 2017, combining quantum hardware with the Quil instruction language and the pyQuil library. It went public on Nasdaq in March 2022 through a merger with a special purpose acquisition company, Supernova Partners Acquisition Company II.",
      "Subodh Kulkarni has led the company as CEO since late 2022. Since then Rigetti has focused on fidelity and modularity, introducing the 9-qubit Novera QPU for on-premises use in December 2023 and the 84-qubit Ankaa-3 in late 2024, followed by the four-chiplet Cepheus-1-36Q in 2025 and the twelve-chiplet Cepheus-1-108Q in 2026.",
    ],
    technologyDeepDive: [
      "Rigetti's qubits are superconducting circuits cooled to a few hundredths of a degree above absolute zero. Its chips use tunable transmon qubits, whose frequencies can be adjusted so that pairs of qubits can be brought into resonance to perform two-qubit gates. The company reports a median two-qubit gate fidelity of 99.8% with gate times of 40 nanoseconds on a 9-qubit chip, using a scheme it calls an adiabatic CZ gate.",
      "The chiplet approach is the important part. Each 9-qubit chiplet is fabricated and tested separately, then joined to others in a multi-chip package. Cepheus-1-36Q uses four chiplets and Cepheus-1-108Q uses twelve. The challenge is that fidelity tends to fall as chiplets are combined. In January 2026 Rigetti reported median two-qubit fidelities of about 99.7% on its 9-qubit system, 99.6% on the 36-qubit system, and 99% on the 108-qubit system, and it has set a target of a 99.5% median on the 108-qubit machine by the end of 2026.",
      "According to summaries of the company's Q2 2026 earnings call, management said the 108-qubit system is currently limited by coherence times of about 25 to 30 microseconds, and that materials work aims to double or triple that. The longer-term target is roughly 1,000 qubits at 99.9% fidelity within about three years, and the company has begun investing in dilution refrigeration for systems of that size.",
    ],
    productsDetail: [
      {
        name: "Cepheus-1-108Q",
        description:
          "A 108-qubit system built from twelve interconnected 9-qubit chiplets. It became generally available in 2026 through Rigetti QCS, Amazon Braket, Microsoft Azure Quantum, and qBraid. Rigetti describes it as the largest modular quantum computing system currently available.",
      },
      {
        name: "Cepheus-1-36Q",
        description:
          "A 36-qubit system built from four 9-qubit chiplets. Deployed in 2025, it was Rigetti's first multi-chip system and the proof of concept for the chiplet approach.",
      },
      {
        name: "Novera QPU",
        description:
          "A 9-qubit quantum processing unit for on-premises use, designed to plug into a customer's existing cryogenic and control systems. It is aimed at research groups and universities that want to own and operate their own hardware.",
      },
      {
        name: "Rigetti Quantum Cloud Services and software",
        description:
          "Rigetti's own cloud platform, along with the Quil language and the pyQuil Python library. Rigetti systems are also reachable through Amazon Braket, Azure Quantum, and qBraid.",
      },
      {
        name: "On-premises systems and the C-DAC order in India",
        description:
          "Rigetti sells complete systems including control electronics. It has an 8.4 million dollar order from India's C-DAC for an on-premises 108-qubit system, which management said it expects to recognize as revenue in the fourth quarter of 2026 after installation and acceptance testing.",
      },
    ],
    products: [
      "Cepheus-1-108Q (108 qubits)",
      "Cepheus-1-36Q (36 qubits)",
      "Novera QPU (9 qubits)",
      "Rigetti Quantum Cloud Services",
      "Quil and pyQuil software",
    ],
    milestones: [
      { year: "2013", event: "Rigetti is founded in Berkeley, California by Chad Rigetti." },
      { year: "2017", event: "The Forest cloud platform launches with the Quil language and pyQuil." },
      { year: "March 2022", event: "Rigetti begins trading on Nasdaq after its SPAC merger." },
      { year: "December 2023", event: "The 9-qubit Novera QPU is introduced for on-premises use." },
      { year: "Late 2024", event: "The 84-qubit Ankaa-3 system is announced." },
      { year: "2025", event: "Cepheus-1-36Q, built from four chiplets, is deployed." },
      { year: "January 2026", event: "Rigetti pushes the 108-qubit general availability date to around the end of the first quarter of 2026." },
      { year: "2026", event: "Cepheus-1-108Q becomes generally available on Rigetti QCS, Amazon Braket, Azure Quantum, and qBraid." },
      { year: "August 2026", event: "Rigetti reports a Department of Commerce letter of intent for up to 100 million dollars of potential funding and says three system deliveries remain targeted for 2026." },
    ],
    strengths: [
      "Owns the full stack, from chip fabrication to control electronics, cloud access, and software.",
      "A modular chiplet architecture that offers a credible route to larger systems.",
      "Very fast gates, about 40 nanoseconds on the 9-qubit chip, with high fidelity on small systems.",
      "International customers, including India's C-DAC, and a balance sheet with no debt as of Q1 2026.",
    ],
    challenges: [
      "Fidelity falls as chiplets are combined, and the 108-qubit system is still working toward its 99.5% target.",
      "Coherence times of roughly 25 to 30 microseconds limit circuit depth.",
      "Schedule risk: the 108-qubit system's general availability was pushed back from its original 2025 target.",
      "Revenue is small and lumpy because it depends on system sales that are recognized when deliveries are completed.",
    ],
    whyItMatters: [
      "Rigetti shows how the small-chips, big-system idea plays out in practice. If chiplets can be combined without losing fidelity, quantum computers might scale the way modern classical processors do, by assembling many well-tested components. If fidelity keeps falling as systems grow, that path gets harder, and the company's progress on the 108-qubit machine over the next year will be an important data point.",
      "For readers in India, Rigetti's C-DAC order is notable. Management has described it as a sign of national-level interest in superconducting platforms in India, and it will put a 108-qubit system into a national computing institution once installation and acceptance testing are complete.",
    ],
    funding: "Publicly traded (NASDAQ: RGTI); reported a strong cash position and no debt as of Q1 2026",
    latestNews: [
      { title: "Rigetti says three system deliveries are still targeted for 2026, including the 108-qubit system for C-DAC in India, and reports a Department of Commerce letter of intent for up to 100 million dollars in potential funding", date: "August 2026" },
      { title: "Management targets a median two-qubit fidelity of about 99.5% on Cepheus-1-108Q by the end of 2026", date: "August 2026" },
      { title: "Rigetti appoints David Rivas as Chief Operating Officer and Andrew Bestwick as Chief Technology Officer", date: "2026" },
      { title: "Cepheus-1-108Q becomes generally available on Rigetti QCS, Amazon Braket, Azure Quantum, and qBraid", date: "2026" },
    ],
    faq: [
      {
        q: "What is a chiplet quantum computer?",
        a: "Instead of fabricating one large chip, a chiplet design makes several small chips, tests each one, and joins them in a single package. This can improve manufacturing yield and quality, and it is the approach behind Rigetti's Cepheus systems.",
      },
      {
        q: "How many qubits does Rigetti's largest computer have?",
        a: "Rigetti's largest system is the 108-qubit Cepheus-1-108Q, built from twelve 9-qubit chiplets. The company's roadmap aims for about 1,000 qubits in roughly three years.",
      },
      {
        q: "Can I use Rigetti's computers?",
        a: "Yes. They are available through Rigetti's own cloud services and through Amazon Braket, Microsoft Azure Quantum, and qBraid. Rigetti also sells on-premises systems to institutions.",
      },
      {
        q: "Is Rigetti connected to India?",
        a: "Yes. Rigetti has an 8.4 million dollar order from India's C-DAC for an on-premises 108-qubit system, which management expects to recognize as revenue in the fourth quarter of 2026 after installation and testing.",
      },
      {
        q: "What does 99.5% gate fidelity mean?",
        a: "It means a two-qubit gate works correctly about 99.5 times out of 100, so roughly one gate in 200 fails. Long algorithms use thousands or millions of gates, which is why every extra fraction of a percent, and eventually error correction, matters so much.",
      },
    ],
  },
  {
    slug: "quantinuum",
    name: "Quantinuum",
    founded: "2021 (merger of Honeywell Quantum Solutions and Cambridge Quantum); listed on Nasdaq in June 2026",
    ceo: "Rajeeb (Raj) Hazra (President and CEO)",
    headquarters: "Broomfield, Colorado, USA (with major sites in Cambridge, UK and Minnesota)",
    technology: "Trapped-ion qubits (QCCD architecture, barium and ytterbium ions)",
    website: "quantinuum.com",
    lastUpdated: "September 30, 2026",
    summary: "Quantinuum builds trapped-ion quantum computers that hold some of the highest published gate fidelities in the industry. It listed on Nasdaq in June 2026 after one of the largest quantum IPOs to date, and its latest system, Helios, is the centerpiece of a roadmap to fault-tolerant machines by 2029.",
    overview: [
      "Quantinuum is one of the largest dedicated quantum computing companies in the world. It was formed in 2021 when Honeywell combined its quantum hardware business with Cambridge Quantum, a British software and algorithms company, and it now sells access to trapped-ion computers, quantum chemistry software, and a certified quantum random number generator. Its machines are used by pharmaceutical, chemical, financial, and government customers, as well as by research teams at national laboratories.",
      "The company is best known for quality rather than raw qubit count. Its systems have repeatedly set records for how accurately two qubits can be entangled, and its researchers regularly publish error-correction experiments that other companies later try to match. That reputation helped it complete an initial public offering on Nasdaq in June 2026 under the ticker QNT.",
    ],
    history: [
      "The hardware side traces back to Honeywell, which spent years developing a trapped-ion architecture called the quantum charge-coupled device (QCCD) and launched its first commercial system in 2020. Cambridge Quantum, founded by Ilyas Khan, built the TKET compiler, the InQuanto chemistry platform, and the Quantum Origin randomness product. In November 2021 the two businesses merged into Quantinuum, with Honeywell holding a majority stake.",
      "Since the merger the company has released a series of machines, from the 20-qubit H1 and the 56-qubit H2 to the Helios system launched in late 2025. It also worked with Microsoft on error-corrected logical-qubit demonstrations in 2024. In 2026 the business reorganized under a new holding company, Quantinuum Inc., and priced its IPO on June 3, 2026 at 60 dollars per share, selling 28 million shares in an upsized offering before trading began on June 4.",
    ],
    technologyDeepDive: [
      "A trapped-ion qubit is a single charged atom suspended in a vacuum by electric fields and manipulated with lasers. Every atom of a given element is identical, so ion qubits are uniform and naturally long-lived, and gates between them can be very precise. Quantinuum uses a QCCD design in which ions are physically shuttled between different zones of a chip: some zones store qubits, others perform gates, and others read out results. Because ions can be moved next to any partner, the machine achieves flexible connectivity without long chains of swap operations.",
      "The trade-offs are speed and engineering complexity. Moving ions takes time, so Quantinuum's circuits run more slowly than those on superconducting chips, and building the laser delivery, trap fabrication, and control systems is difficult. The company argues that the quality of each operation matters more than speed because error correction is limited by fidelity. In 2025 it reported a two-qubit gate fidelity of 99.921% on Helios, and in its second-quarter 2026 update it said it had demonstrated logical-qubit fidelity close to five nines, meaning errors on the order of one in a hundred thousand.",
      "Quantinuum's published roadmap runs through three generations. Helios arrived in 2025, a larger system called Sol is planned for 2027, and a universal fault-tolerant machine called Apollo is targeted for 2029. These are company goals, and the later machines depend on solving scaling problems that have not yet been shown at full size.",
    ],
    productsDetail: [
      { name: "Helios", description: "Quantinuum's current flagship, a barium-ion system launched in 2025 with about a hundred physical qubits and record-level gate fidelity. In 2026 the company announced a partnership with Oracle to deliver Helios as a service on Oracle Cloud Infrastructure, the first such arrangement for a trapped-ion machine on a major cloud." },
      { name: "System Model H2 and H1", description: "The earlier commercial generations. The 56-qubit H2 is covered in our Hardware Database and remains widely used in research and benchmarking." },
      { name: "TKET and Nexus", description: "TKET is an open-source quantum compiler that optimizes circuits for many types of hardware, not only Quantinuum's. Nexus is the company's cloud software environment for building and running workflows." },
      { name: "InQuanto", description: "A software platform for quantum chemistry and materials simulation that lets chemists set up molecular problems and run them on quantum hardware or simulators." },
      { name: "Quantum Origin", description: "A cryptographic product that uses quantum processes to generate certified random numbers, aimed at security teams that need provably unpredictable keys." },
    ],
    products: [
      "Helios trapped-ion system",
      "System Model H2 and H1",
      "TKET compiler and Nexus platform",
      "InQuanto chemistry software",
      "Quantum Origin random number generator",
    ],
    milestones: [
      { year: "2020", event: "Honeywell launches its first commercial trapped-ion quantum computer." },
      { year: "November 2021", event: "Honeywell Quantum Solutions and Cambridge Quantum merge to form Quantinuum." },
      { year: "2023", event: "The 56-qubit System Model H2 is introduced." },
      { year: "April 2024", event: "Quantinuum and Microsoft report logical qubits with error rates far below those of the physical qubits." },
      { year: "September 2024", event: "The company publishes a roadmap through Helios (2025), Sol (2027), and Apollo (2029)." },
      { year: "2025", event: "Helios launches, with a reported two-qubit gate fidelity of 99.921%." },
      { year: "May 2026", event: "Quantinuum announces a letter of intent with the U.S. Department of Commerce for up to 100 million dollars under the CHIPS Act." },
      { year: "June 2026", event: "Quantinuum prices its upsized IPO at 60 dollars per share and begins trading on Nasdaq as QNT." },
      { year: "August 2026", event: "Second-quarter revenue is reported up 279% from a year earlier, with more than 2 billion dollars of cash." },
    ],
    strengths: [
      "Among the highest published gate and logical-qubit fidelities of any platform.",
      "A flexible QCCD architecture with strong connectivity between qubits.",
      "A software business, including TKET and InQuanto, that is independent of its own hardware.",
      "Over 2 billion dollars in cash after the IPO, giving it room to invest through the next hardware generations.",
    ],
    challenges: [
      "Trapped-ion operations are slower than superconducting ones, which matters for deep algorithms.",
      "Scaling beyond a hundred or so qubits requires more ion shuttling, lasers, and control hardware.",
      "The company is still far from profitable, and its valuation depends on roadmap targets (Sol in 2027, Apollo in 2029) that have not yet been met.",
      "In the market data we reviewed, the stock was trading below its IPO price, which shows how volatile expectations around quantum companies can be.",
    ],
    whyItMatters: [
      "Quantinuum's results are among the best evidence for how error-corrected quantum computing might work in practice. When researchers talk about logical qubits that outperform their physical components, a large share of the demonstrations come from Quantinuum hardware, either alone or with partners such as Microsoft.",
      "Its IPO also matters as a market signal. It was one of the biggest listings in the sector, and its results will be watched as a test of whether investors will fund long-term fault-tolerant quantum computing at scale. Readers comparing technologies should read this page alongside IonQ and IBM: trapped ions and superconducting circuits are the two leading approaches, and Quantinuum represents the quality-first end of the trapped-ion camp.",
    ],
    funding: "Publicly traded (Nasdaq: QNT) since June 4, 2026; IPO priced at 60 dollars per share; more than 2 billion dollars of cash at the end of June 2026",
    latestNews: [
      { title: "Quantinuum reports Q2 2026 revenue up 279% year over year and raises its full-year outlook", date: "August 2026" },
      { title: "Quantinuum announces a partnership with Oracle to deliver Helios as a service on Oracle Cloud Infrastructure", date: "2026" },
      { title: "Quantinuum shows near five-nines logical fidelity on Helios", date: "2026" },
      { title: "Quantinuum completes its upsized Nasdaq IPO at 60 dollars per share", date: "June 2026" },
    ],
    faq: [
      { q: "What is a trapped-ion quantum computer?", a: "It stores each qubit in the internal state of a single charged atom held in place by electric fields and controlled with lasers. Because the atoms are identical and well isolated, trapped-ion machines tend to have very accurate gates, though they run more slowly than superconducting chips." },
      { q: "What is Quantinuum Helios?", a: "Helios is Quantinuum's latest commercial system, launched in 2025. It uses barium ions, has roughly a hundred physical qubits, and reported record-level two-qubit gate fidelity. In 2026 Quantinuum announced it would be offered as a service on Oracle Cloud Infrastructure." },
      { q: "Is Quantinuum publicly traded?", a: "Yes. Quantinuum listed on Nasdaq under the ticker QNT on June 4, 2026 after pricing its IPO at 60 dollars per share. This page is not investment advice." },
      { q: "How is Quantinuum different from IonQ?", a: "Both use trapped ions. Quantinuum uses a QCCD architecture that physically moves ions and emphasizes record-level fidelity, while IonQ has emphasized all-to-all connectivity within a trap and has grown by acquisition. Each reports strong results, and the two take different paths to scaling." },
      { q: "What are TKET and InQuanto?", a: "TKET is an open-source compiler that optimizes quantum circuits for many hardware platforms. InQuanto is a software platform for quantum chemistry and materials simulation. Both are Quantinuum products that can be used independently of its hardware in some cases." },
    ],
  },
  {
    slug: "d-wave",
    name: "D-Wave Quantum",
    founded: "1999 (first commercial quantum computer sold in 2011)",
    ceo: "Alan Baratz (CEO)",
    headquarters: "Palo Alto, California, USA (engineering and fabrication in Burnaby, British Columbia, Canada)",
    technology: "Quantum annealing (superconducting flux qubits); gate-model dual-rail superconducting qubits in development",
    website: "dwavequantum.com",
    lastUpdated: "September 30, 2026",
    summary: "D-Wave sold the first commercial quantum computer and remains the leading maker of quantum annealers for optimization. In January 2026 it bought Quantum Circuits to add gate-model hardware, and it now describes itself as the only dual-platform quantum company.",
    overview: [
      "D-Wave takes a different approach from companies such as IBM, Google, and Quantinuum. Its machines are quantum annealers: special-purpose devices that look for the lowest-energy solution to an optimization problem by letting a network of superconducting qubits settle into a low-energy state. They cannot run general-purpose algorithms such as Shor's, but they can address scheduling, routing, and sampling problems that map naturally onto an energy landscape.",
      "For years that focus made D-Wave unusual and sometimes controversial. Today the company is trying to broaden its position. It continues to sell and cloud-host annealing systems, and since the acquisition of Quantum Circuits in January 2026 it is building error-corrected gate-model computers as well, with an initial gate-model system promised for 2026.",
    ],
    history: [
      "D-Wave was founded in 1999 in Canada as a spin-off from research at the University of British Columbia, and it spent its first decade developing superconducting annealing chips. In 2011 it sold the D-Wave One to Lockheed Martin, which is generally described as the first commercially sold quantum computer. Google, NASA, and other organizations bought or hosted later machines. Skeptics argued for years about whether the devices were truly faster than classical solvers, and the debate has never fully ended.",
      "The company went public in 2022 through a merger with a special purpose acquisition company. Alan Baratz became CEO in 2020 and shifted the business toward cloud access through its Leap service and toward hybrid solvers that combine quantum and classical computing. The current annealing system, Advantage2, became widely available in 2025. In 2026 D-Wave reorganized around a dual-platform strategy by acquiring Quantum Circuits, a Yale-linked startup, for 250 million dollars in cash plus roughly 10.4 million shares.",
    ],
    technologyDeepDive: [
      "In annealing, a problem is encoded into the couplings between qubits. The qubits start in a simple quantum state and are slowly steered, using a controlled magnetic field, toward a configuration that represents a low-cost answer. Quantum effects such as tunneling may help the system escape poor local solutions. The output is a sample of good answers rather than a single guaranteed optimum, which suits some problems and not others.",
      "Advantage2 uses a connectivity layout called Zephyr and has more than 4,400 qubits. D-Wave reports that, compared with the previous generation, it has about 40% higher energy scale, roughly twice the coherence time, and four times lower noise. Counting qubits in an annealer is not comparable to counting qubits in a gate-model machine, since annealers have no universal gate set. Advantage2 systems operated in three countries (Canada, the United States, and Germany) at the end of 2025.",
      "The gate-model effort uses dual-rail qubits developed by Quantum Circuits and its co-founder Rob Schoelkopf, now D-Wave's chief scientist. A dual-rail qubit encodes information in which of two resonators holds a photon, which makes the most common errors detectable as erasures and simplifies error correction. D-Wave's roadmap calls for 17 physical qubits in 2026, 49 in 2027, 181 in 2028, and around 10 logical qubits by 2030. It has also described an on-chip control design meant to scale to 100,000 qubits without a proportional increase in wiring.",
    ],
    productsDetail: [
      { name: "Advantage2 annealing quantum computer", description: "D-Wave's sixth-generation annealer, available through the Leap cloud service and as an on-premises system. It is covered in our Hardware Database." },
      { name: "Leap cloud service and hybrid solvers", description: "A cloud platform that gives developers access to annealers, hybrid solvers, and a growing set of tools. Hybrid solvers split large problems between classical and quantum processors, which is how most customers currently use the hardware." },
      { name: "Gate-model systems", description: "Built on Quantum Circuits' dual-rail superconducting technology. D-Wave says an initial gate-model system will become available in 2026, with development bundles that provide access to both a simulator and the hardware." },
      { name: "On-premises system sales", description: "D-Wave sells complete annealing systems to governments and large enterprises. In the first half of 2026 it announced a new 20 million dollar system sale, which drove bookings up more than 1,100% from a year earlier." },
    ],
    products: [
      "Advantage2 annealing system",
      "Leap cloud service and hybrid solvers",
      "Gate-model systems based on dual-rail qubits",
      "On-premises annealing systems",
    ],
    milestones: [
      { year: "1999", event: "D-Wave is founded in Canada." },
      { year: "2011", event: "The D-Wave One, the first commercially sold quantum computer, is delivered to Lockheed Martin." },
      { year: "2020", event: "Alan Baratz becomes CEO; the Advantage system with more than 5,000 qubits launches." },
      { year: "2022", event: "D-Wave begins trading publicly after a SPAC merger." },
      { year: "2025", event: "Advantage2 becomes generally available." },
      { year: "January 2026", event: "D-Wave completes its acquisition of Quantum Circuits and announces a gate-model roadmap." },
      { year: "August 2026", event: "Second-quarter results show revenue of about 3.1 million dollars, first-half bookings of 35.5 million dollars, and 546 million dollars of cash." },
    ],
    strengths: [
      "The longest commercial track record of any quantum computing company, with customers in telecom, logistics, and public safety.",
      "Large cash reserves relative to its revenue, reported at about 546 million dollars at the end of June 2026.",
      "A new gate-model program with an unusual error-detecting qubit design.",
      "A cloud service and hybrid solvers that let customers use the technology without owning hardware.",
    ],
    challenges: [
      "Annealers cannot run general quantum algorithms, and whether they beat the best classical optimization methods remains debated.",
      "Revenue is small and lumpy: quarterly revenue was flat at about 3.1 million dollars in Q2 2026 because system sales are timed irregularly.",
      "The gate-model roadmap starts at only 17 physical qubits in 2026, so it is years behind several competitors.",
      "Integrating Quantum Circuits and funding two hardware programs will raise costs.",
    ],
    whyItMatters: [
      "D-Wave is a useful counterexample to the idea that quantum computing is only about gate-model machines. Many real business problems, such as scheduling shifts or routing deliveries, are optimization problems, and annealing is a different tool for them. Whether it actually beats classical solvers on such problems is one of the most important open questions for the commercial side of the field.",
      "The company's move into gate-model hardware also shows how competition is reshaping the industry. A pure annealing business was not enough to satisfy customers or investors who want fault-tolerant machines, so even the oldest quantum company is adding a second platform.",
    ],
    funding: "Publicly traded (ticker QBTS); about 546 million dollars of cash and marketable securities at the end of June 2026",
    latestNews: [
      { title: "D-Wave reports Q2 2026 results: revenue of 3.1 million dollars, first-half bookings up more than 1,100%, and a design for scaling to 100,000 qubits", date: "August 2026" },
      { title: "D-Wave announces a forthcoming gate-model simulator and a National Science Foundation grant of about 1.57 million dollars", date: "2026" },
      { title: "D-Wave publishes a peer-reviewed Nature paper on a high-fidelity two-qubit gate in its dual-rail architecture", date: "2026" },
      { title: "D-Wave completes the acquisition of Quantum Circuits", date: "January 2026" },
    ],
    faq: [
      { q: "What is quantum annealing?", a: "Quantum annealing is a method for finding low-cost solutions to optimization problems. The problem is encoded into a network of qubits, and the system is slowly guided toward a low-energy state that represents a good answer. It cannot run general-purpose quantum algorithms." },
      { q: "How many qubits does D-Wave's computer have?", a: "The Advantage2 annealing system has more than 4,400 qubits. This number cannot be compared directly with the qubit counts of gate-model machines from IBM or Google because annealers work differently." },
      { q: "Has D-Wave proven a quantum advantage?", a: "D-Wave has published results claiming advantage on specific tasks, including a 2025 materials-simulation paper, but other researchers dispute some of these claims or argue that classical methods can close the gap. The question is still actively debated." },
      { q: "What did D-Wave buy in 2026?", a: "In January 2026 D-Wave acquired Quantum Circuits, a developer of error-detecting superconducting gate-model qubits, for 250 million dollars in cash plus about 10.4 million shares. It uses the technology to build gate-model computers alongside its annealers." },
      { q: "Can I use D-Wave's computers?", a: "Yes. D-Wave offers cloud access through its Leap service, and its systems are also available through partners. Pricing and free-tier terms change, so check D-Wave's website for current options." },
    ],
  },
  {
    slug: "xanadu",
    name: "Xanadu Quantum Technologies",
    founded: "2016 (listed on Nasdaq and the Toronto Stock Exchange in March 2026)",
    ceo: "Christian Weedbrook (Founder and CEO)",
    headquarters: "Toronto, Ontario, Canada",
    technology: "Photonic qubits (squeezed light, continuous-variable and GKP encodings)",
    website: "xanadu.ai",
    lastUpdated: "September 30, 2026",
    summary: "Xanadu builds photonic quantum computers that use particles of light as qubits. It became the first publicly traded pure-play photonic quantum company in March 2026 and says it is on track for fault-tolerant operation around 2028 to 2029.",
    overview: [
      "Xanadu is a Toronto company that bet early on photonics: building quantum computers from light rather than from superconducting circuits or trapped atoms. Photons travel through optical fiber and silicon chips, interact weakly with their environment, and can be manipulated at or near room temperature, although the detectors that read them out still need cooling. That makes photonic designs attractive for networking many modules together, which is central to Xanadu's strategy.",
      "The company is also known for PennyLane, an open-source software library for quantum machine learning and differentiable quantum programming that is used by researchers across the industry whatever hardware they run on. That software reach gives Xanadu a developer audience far larger than its hardware customer base.",
    ],
    history: [
      "Christian Weedbrook, a physicist with a background in continuous-variable quantum information, founded Xanadu in 2016 after writing a whitepaper arguing that photonics offered a path to scale. The company released the Strawberry Fields software library, then PennyLane in 2018, and in 2022 demonstrated a machine called Borealis that sampled from a quantum state of light in a way Xanadu said would be impractical to simulate classically. Borealis was made available through the cloud.",
      "The company's next phase focused on fault tolerance. In 2025 it introduced Aurora, which it describes as the first modular, networked photonic quantum computer with real-time error correction, and it reported 12 logical qubits encoded in a bosonic scheme called GKP. On March 27, 2026 Xanadu began trading on Nasdaq and the Toronto Stock Exchange under the ticker XNDU after completing a merger with the special purpose acquisition company Crane Harbor Acquisition Corp.",
    ],
    technologyDeepDive: [
      "Most photonic approaches encode quantum information in features of light such as its path, its polarization, or its squeezing. Xanadu works with continuous-variable states, in which information is stored in the amplitude and phase of the light field. A particular encoding called the Gottesman-Kitaev-Preskill (GKP) state packs a qubit into a single mode of light in a way that makes small shifts detectable and correctable. Generating high-quality GKP states is one of the hardest problems in the field, and Xanadu's reported 12 logical GKP qubits with real-time error-correction decoding is a published step in that direction.",
      "The central enemy for photonic machines is loss. Every optical component absorbs or scatters a tiny fraction of the light, and those losses add up as circuits grow. Xanadu cites a roughly twenty-fold improvement in the performance of its photonic components over the past three years, and it has been working with semiconductor partners such as Tower Semiconductor and ASML to build its chips on production fabrication lines. It has also announced a partnership with the cryogenics company Bluefors.",
      "Aurora connects multiple rack-mounted modules with optical fiber, and the company's roadmap expects further modules to be networked as the system scales. At its August 2026 roadmap presentation, Xanadu described a plan to reach fault-tolerant operation in 2028 to 2029, then to build a quantum data center, and to reach more than 1,000 logical qubits by 2031. Earlier statements had set a goal of up to 500 logical qubits in 2029 to 2030. These are targets, and the figures have moved between presentations.",
    ],
    productsDetail: [
      { name: "Aurora", description: "Xanadu's modular, networked photonic quantum computer. A Nature paper described a 12-qubit system with independent validation of the networked design, and the company points to it as the template for scaling to larger fault-tolerant machines." },
      { name: "Borealis", description: "A photonic processor demonstrated in 2022 for Gaussian Boson Sampling, a specialized task rather than a general-purpose computation. It is described in our Hardware Database." },
      { name: "PennyLane", description: "An open-source Python library for quantum machine learning and quantum chemistry that works with hardware from many vendors. It is one of the most widely used tools in quantum software." },
      { name: "Quantum algorithms and applications", description: "Xanadu also researches algorithms for chemistry, such as simulating photochemical reactions on fault-tolerant machines, which it announced in February 2026." },
      { name: "Chip manufacturing", description: "The company is building a photonics research and manufacturing capability and announced plans for an advanced facility in August 2026, alongside collaborations with Tower Semiconductor and ASML." },
    ],
    products: [
      "Aurora modular photonic computer",
      "Borealis photonic processor",
      "PennyLane (open-source software)",
      "Photonic chips and components",
    ],
    milestones: [
      { year: "2016", event: "Xanadu is founded in Toronto by Christian Weedbrook." },
      { year: "2018", event: "PennyLane is released as an open-source library." },
      { year: "2022", event: "Borealis demonstrates a Gaussian Boson Sampling quantum advantage claim, accessible over the cloud." },
      { year: "2025", event: "Aurora, a modular and networked photonic computer, is introduced; 12 logical GKP qubits with real-time error correction are demonstrated." },
      { year: "Early 2026", event: "Xanadu advances to Stage B of DARPA's Quantum Benchmarking Initiative and is selected for Canada's Quantum Champions Program." },
      { year: "March 27, 2026", event: "Xanadu begins trading on Nasdaq and TSX as XNDU." },
      { year: "August 2026", event: "Second-quarter results show 312.8 million dollars of cash; the company presents a roadmap to more than 1,000 logical qubits by 2031." },
    ],
    strengths: [
      "A scalable architecture based on networking modules over optical fiber.",
      "PennyLane gives the company a large developer community and influence beyond its own hardware.",
      "Peer-reviewed results on logical GKP qubits and a modular design.",
      "Partnerships with chip fabrication and cryogenics leaders, and government support from the United States and Canada.",
    ],
    challenges: [
      "Optical loss still limits circuit depth, and further large reductions are needed.",
      "Generating GKP states at high quality and high rates is extremely difficult.",
      "Xanadu describes itself as in an investment phase, so it is spending heavily and revenue is not the main story yet.",
      "Roadmap targets have shifted between presentations, so the 2028 to 2029 fault-tolerance goal should be read as a goal.",
    ],
    whyItMatters: [
      "Photonics is the most radical of the major quantum hardware approaches, and Xanadu is its best-known public company. If photons can be made low-loss and generated on demand, quantum computers could be built with the manufacturing methods and networking that already support the telecom and chip industries. If not, the approach could remain a niche.",
      "For students, PennyLane is also a practical entry point. You can write a quantum machine learning model in Python and run it on simulators or on hardware from several providers, which makes Xanadu's software relevant even if you never use its computers.",
    ],
    funding: "Publicly traded (Nasdaq and TSX: XNDU) since March 27, 2026; 312.8 million dollars of cash at the end of June 2026",
    latestNews: [
      { title: "Xanadu presents a roadmap to more than 1,000 logical qubits by 2031 and fault-tolerant operation in 2028 to 2029", date: "August 2026" },
      { title: "Xanadu announces plans for an advanced photonics research and manufacturing facility", date: "August 2026" },
      { title: "Xanadu reports Q2 2026 results with 312.8 million dollars in cash and raises 67.2 million dollars through an at-the-market facility", date: "August 2026" },
      { title: "Xanadu and ASML announce a collaboration on advanced lithography for photonic chips", date: "2026" },
    ],
    faq: [
      { q: "How does a photonic quantum computer work?", a: "It encodes quantum information in light, using properties such as squeezing, phase, or path. Light is guided through optical chips and fiber, manipulated with components such as beam splitters and phase shifters, and measured with detectors." },
      { q: "What is PennyLane?", a: "PennyLane is an open-source Python library from Xanadu for quantum machine learning and quantum chemistry. It works with simulators and with hardware from several providers, and it is widely used in research and teaching." },
      { q: "What is a GKP qubit?", a: "A Gottesman-Kitaev-Preskill qubit encodes one qubit of information into a single mode of light in a pattern that makes small errors detectable and correctable. Xanadu reported 12 logical GKP qubits with real-time error correction." },
      { q: "Is Xanadu publicly traded?", a: "Yes. Xanadu began trading on Nasdaq and the Toronto Stock Exchange under the ticker XNDU on March 27, 2026. This page is not investment advice." },
      { q: "Why is photon loss such a problem?", a: "Every optical component absorbs or scatters a small fraction of the light, and when thousands of components are chained together the losses compound. High loss destroys quantum information, so photonic computers need extremely low-loss parts." },
    ],
  },
  {
    slug: "pasqal",
    name: "Pasqal",
    founded: "2019",
    ceo: "Wasiq Bokhari (CEO)",
    headquarters: "Massy (Paris area), France",
    technology: "Neutral atom qubits held in optical tweezers",
    website: "pasqal.com",
    lastUpdated: "September 30, 2026",
    summary: "Pasqal builds neutral atom quantum computers in which individual atoms are held in place by focused laser beams. It has deployed seven systems, including a 200-qubit machine for Aramco, and moved to a Nasdaq listing in 2026.",
    overview: [
      "Pasqal is a French company that makes quantum processors from arrays of neutral atoms. A laser technique called optical tweezers captures individual atoms and arranges them in any pattern the user wants, in two or three dimensions. Because the atoms are arranged by light, the geometry of the processor can be changed from one problem to the next, which is useful when the problem itself has a geometric shape, as in many simulations of materials and networks.",
      "The company says it has deployed seven quantum computers, more than any other pure-play neutral atom company, with three more in production as of its March 2026 announcement. Customers include research centers, industrial groups, and the energy company Aramco in Saudi Arabia.",
    ],
    history: [
      "Pasqal was founded in 2019 as a spin-off from the Institut d'Optique in Palaiseau, near Paris. Its founders include Georges-Olivier Reymond, Christophe Jurczak, and the physicists Antoine Browaeys, Thierry Lahaye, and Alain Aspect, who shared the 2022 Nobel Prize in Physics for experiments on quantum entanglement. The company raised more than 300 million dollars in total funding from investors including French and European backers.",
      "In June 2024 Pasqal reported loading more than 1,000 atoms in a single shot, and in the first half of 2026 it prepared defect-free registers of 1,024 atoms, doubling its earlier 506-atom result, while extending atom lifetimes by about forty times with a redesigned cryogenic setup. In March 2026 it announced plans to go public through a merger with the special purpose acquisition company Bleichroeder Acquisition Corp. II, at a 2 billion dollar pre-money valuation, and by late September 2026 it was reporting results as a Nasdaq-listed company under the ticker PSQL.",
    ],
    technologyDeepDive: [
      "In a neutral atom computer, each qubit is a single atom, often rubidium, suspended in a vacuum chamber. Lasers cool the atoms to near absolute zero and trap them in tweezers, and a camera system checks which sites are filled and rearranges atoms to remove gaps. To perform two-qubit operations, the atoms are excited to Rydberg states, in which an electron orbits far from the nucleus, so that nearby atoms interact strongly and can become entangled.",
      "Two features distinguish this approach. First, scale: loading thousands of atoms into tweezers is easier than wiring thousands of superconducting circuits, so neutral atom machines may reach large qubit counts sooner. Second, flexibility: atoms can be physically moved during a computation, which allows connections that fixed chips cannot make. The challenges are slower operations, lost atoms that must be replaced, and gate errors that are higher than the best trapped-ion results.",
      "Pasqal's machines can run in an analog mode, where the atoms evolve under a controlled interaction to simulate physical systems, and in a digital gate-based mode. The company's roadmap has aimed for several thousand qubits and logical-qubit architectures in the second half of the decade. Its older roadmap pointed to 10,000 qubits around 2026 to 2027, and readers should treat such figures as goals rather than delivered results.",
    ],
    productsDetail: [
      { name: "Fresnel and Orion systems", description: "Pasqal's analog and hybrid neutral atom processors. Fresnel is covered in our Hardware Database. Systems are available through Pasqal's cloud service and installed at customer sites." },
      { name: "Aramco deployment", description: "A 200-qubit neutral atom system located in Aramco's data center in Saudi Arabia, described by Pasqal as a sign that quantum computers are moving from research into industrial settings." },
      { name: "Pulser and Qadence", description: "Open-source software for programming Pasqal's hardware. Pulser lets users design the laser pulse sequences that control the atoms, and Qadence supports higher-level digital and analog quantum programs." },
      { name: "Cloud and discovery programs", description: "Pasqal Cloud and a Quantum Discovery program let companies test neutral atom computing without buying hardware." },
      { name: "Industry partnerships", description: "Pasqal works with partners in finance, including Crédit Agricole CIB, and in life sciences and energy, applying neutral atom computers to optimization, simulation, and machine learning." },
    ],
    products: [
      "Fresnel and Orion neutral atom processors",
      "200-qubit system deployed for Aramco",
      "Pasqal Cloud",
      "Pulser and Qadence software",
    ],
    milestones: [
      { year: "2019", event: "Pasqal is founded as a spin-off from the Institut d'Optique." },
      { year: "2022", event: "Alain Aspect, a Pasqal co-founder, shares the Nobel Prize in Physics." },
      { year: "June 2024", event: "Pasqal loads more than 1,000 atoms in a single shot." },
      { year: "March 2026", event: "The company announces a SPAC merger with Bleichroeder Acquisition Corp. II, valuing it at 2 billion dollars pre-money, with 7 systems deployed and 3 in production." },
      { year: "June 2026", event: "Stéphane Rougeot is appointed CFO to lead the Nasdaq listing; the 200-qubit Aramco system is publicized." },
      { year: "First half of 2026", event: "Defect-free 1,024-atom registers are prepared and atom lifetimes extended about forty times." },
      { year: "September 2026", event: "Pasqal reports first-half 2026 results as a Nasdaq-listed company (PSQL)." },
    ],
    strengths: [
      "A scalable platform that can trap thousands of atoms without individual wiring.",
      "Reconfigurable geometry, well suited to simulation and graph problems.",
      "One of the largest deployed fleets among neutral atom companies, with international customers.",
      "Operates in conventional data center environments, since the atoms are cooled by lasers and the apparatus does not need a dilution refrigerator.",
    ],
    challenges: [
      "Gate fidelities trail those of leading trapped-ion and superconducting systems.",
      "Atom loss and the time needed to reload registers slow down computations.",
      "Competition is intense from QuEra, Atom Computing, Infleqtion, and others pursuing similar technology.",
      "The public listing brings quarterly scrutiny, share-based compensation charges, and listing costs that weigh on reported results.",
    ],
    whyItMatters: [
      "Neutral atoms have become one of the fastest-moving hardware approaches, and Pasqal is Europe's leading company in the field. Its customers and its public listing show that governments and large companies are willing to buy machines that are still imperfect.",
      "For learners, Pasqal is a good case study of analog versus digital quantum computing. Many of its earliest use cases rely on analog simulation, where the machine mimics a physical system directly, and the move toward error-corrected digital gates is one of the main transitions in the field to watch over the next few years.",
    ],
    funding: "Publicly traded (Nasdaq: PSQL) after a 2026 SPAC merger; more than 300 million dollars raised from investors before listing",
    latestNews: [
      { title: "Pasqal reports first-half 2026 financial results as a Nasdaq-listed company", date: "September 2026" },
      { title: "Pasqal appoints Stéphane Rougeot as Chief Financial Officer", date: "June 2026" },
      { title: "Pasqal's 200-qubit system is deployed at Aramco", date: "2026" },
      { title: "Pasqal announces plans to go public via a merger with Bleichroeder Acquisition Corp. II", date: "March 2026" },
    ],
    faq: [
      { q: "What is a neutral atom quantum computer?", a: "It uses individual uncharged atoms as qubits, held in place by tightly focused laser beams called optical tweezers. Lasers also cool, move, and entangle the atoms." },
      { q: "Who founded Pasqal?", a: "Pasqal was founded in 2019 by Georges-Olivier Reymond, Christophe Jurczak, Antoine Browaeys, Thierry Lahaye, and Alain Aspect, a physicist who shared the 2022 Nobel Prize in Physics." },
      { q: "What is the Aramco system?", a: "It is a 200-qubit neutral atom computer installed in Aramco's data center in Saudi Arabia, which Pasqal describes as one of its flagship industrial deployments." },
      { q: "Is Pasqal publicly traded?", a: "Pasqal announced a SPAC merger in March 2026, and its September 2026 results release identifies it as listed on Nasdaq under PSQL. This page is not investment advice." },
      { q: "What are analog and digital modes?", a: "In analog mode the atoms evolve under a controlled interaction to simulate a physical system directly. In digital mode the machine applies a sequence of discrete logic gates, which is required for general-purpose algorithms and error correction." },
    ],
  },
  {
    slug: "origin-quantum",
    name: "Origin Quantum",
    founded: "2017",
    ceo: "Guo Guoping (co-founder and chief executive); Guo Guangcan (co-founder)",
    headquarters: "Hefei, Anhui Province, China",
    technology: "Superconducting qubits (with a parallel silicon semiconductor qubit program)",
    website: "originqc.com.cn",
    lastUpdated: "September 30, 2026",
    summary: "Origin Quantum is China's leading commercial quantum computer maker, building chips, control systems, dilution refrigerators, an operating system, and a cloud platform in-house. Its Wukong series reached 180 qubits in 2026, and the company is preparing a listing on Shanghai's STAR Market.",
    overview: [
      "Origin Quantum is a quantum computing company based in Hefei, the city that hosts much of China's national quantum research. It was spun out of the University of Science and Technology of China and the Chinese Academy of Sciences' key laboratory of quantum information. The company sells superconducting quantum computers and, uniquely among major vendors, says it builds every layer of the stack itself: the quantum chip, the measurement and control electronics, the supporting cryogenic equipment, the operating system, and the cloud platform.",
      "That vertical integration is partly a technical choice and partly a policy one. China has made quantum technology a national priority, and Origin Quantum has become the best-known commercial result of that effort. It also runs education programs with nearly one hundred universities and operates one of the country's cloud platforms where users can run circuits on its hardware.",
    ],
    history: [
      "The company was founded in 2017 by Guo Guoping and Guo Guangcan, professors who had spent years researching superconducting and semiconductor quantum circuits. It built what it describes as China's first quantum chip production line and delivered the country's first domestically developed superconducting quantum computer.",
      "The commercial flagship is the Origin Wukong series. The 72-qubit Wukong, its third generation, launched in early 2024 and was made available through a cloud platform. In May 2026 the company introduced Wukong-180, a fourth-generation system built on a 180-qubit chip with 251 coupling qubits. In February 2026 it released Origin Pilot, a quantum computer operating system, as a public download that supports superconducting, ion trap, and neutral atom hardware. Origin Quantum entered IPO tutoring for the Shanghai STAR Market in September 2025, and reports in mid-2026 described a large pre-IPO funding round led by a state-linked industrial group.",
    ],
    technologyDeepDive: [
      "Origin Quantum's main modality is the superconducting transmon qubit, the same family used by IBM, Google, and Rigetti. Qubits are circuits made from superconducting metal cooled to a few thousandths of a degree above absolute zero in a dilution refrigerator, and microwave pulses control them. The company develops its own chip fabrication, readout electronics, and refrigeration, which is notable because dilution refrigerators and control electronics have been among the hardest components to source domestically.",
      "Wukong-180 uses a design in which separate coupling qubits mediate interactions between computational qubits. The company says all four core systems, covering the chip, the measurement and control, the environmental support, and the operating system, are developed in China. It has not published gate fidelity benchmarks comparable to those of the leading Western or Google and IBM systems, so independent comparisons of quality are limited.",
      "Origin Pilot manages tasks such as scheduling jobs, coordinating classical and quantum resources, running tasks in parallel, and calibrating qubits automatically. The company's decision to release it as a public download is a signal that it wants its software to become a platform beyond its own machines.",
    ],
    productsDetail: [
      { name: "Origin Wukong (72 qubits)", description: "A third-generation superconducting quantum computer launched in 2024 and offered through the company's cloud. It is described in our Hardware Database." },
      { name: "Origin Wukong-180", description: "The fourth-generation system introduced in May 2026 with 180 computational qubits, aimed at applications in artificial intelligence, chemistry, and finance." },
      { name: "Origin Pilot (Sinan)", description: "A quantum computer operating system, publicly downloadable since February 2026, that supports superconducting, ion trap, and neutral atom machines." },
      { name: "Quantum cloud platform", description: "A cloud service for running quantum circuits on Origin's hardware and simulators, which the company says has been used in applications such as medical image analysis and fluid dynamics research." },
      { name: "Education and talent programs", description: "Training and teaching programs that reach nearly one hundred Chinese universities." },
    ],
    products: [
      "Origin Wukong (72 qubits)",
      "Origin Wukong-180 (180 qubits)",
      "Origin Pilot quantum operating system",
      "Origin Quantum cloud platform",
    ],
    milestones: [
      { year: "2017", event: "Origin Quantum is founded in Hefei." },
      { year: "2021", event: "The first version of the Origin Pilot operating system is launched." },
      { year: "January 2024", event: "Origin Wukong, a 72-qubit superconducting quantum computer, begins commercial service." },
      { year: "2025", event: "The company completes what it describes as China's first export of domestic quantum computing power." },
      { year: "September 2025", event: "Origin Quantum begins IPO tutoring for the Shanghai STAR Market." },
      { year: "February 2026", event: "Origin Pilot V4.0 is released for public download." },
      { year: "May 2026", event: "Origin Wukong-180, a 180-qubit system, is launched." },
    ],
    strengths: [
      "The most complete in-house stack among commercial quantum vendors, from chips to cloud.",
      "Strong national support and a growing domestic customer and education base.",
      "Rapid hardware progress, from 72 to 180 qubits within about two years.",
      "An open operating system aimed at building an ecosystem beyond its own machines.",
    ],
    challenges: [
      "Limited public benchmarking of gate fidelities, which makes it hard to compare with leading Western systems.",
      "Export controls and geopolitical tension can limit access to components and international customers.",
      "The company is pre-profit, and a listing process on the STAR Market is still in progress, so timing and valuation figures reported in the media are not confirmed.",
      "Error correction has not been demonstrated at the scale shown by Google, Quantinuum, or QuEra.",
    ],
    whyItMatters: [
      "Any serious map of the quantum industry has to include China, and Origin Quantum is the most visible commercial company there. Its path from lab spin-out to a multi-generation product line shows how quickly national programs can build capability when hardware, software, and training are developed together.",
      "For readers following the field, the key questions are about quality rather than size. Whether Wukong-180's qubits are accurate enough to support error correction, and whether Origin Pilot attracts users beyond China, will show how competitive the company can become internationally.",
    ],
    funding: "Privately held; preparing for a Shanghai STAR Market IPO; reported valuation of about 6.9 billion yuan in a 2025 transaction, with reports of a larger pre-IPO round in 2026",
    latestNews: [
      { title: "Reports describe a pre-IPO funding round of nearly three billion yuan led by a state-linked industrial group", date: "June 2026" },
      { title: "Origin Quantum launches the 180-qubit Origin Wukong-180", date: "May 2026" },
      { title: "Origin Quantum releases Origin Pilot V4.0 as a public download", date: "February 2026" },
      { title: "Origin Quantum begins IPO tutoring for the STAR Market", date: "September 2025" },
    ],
    faq: [
      { q: "What is Origin Quantum?", a: "Origin Quantum is a Hefei-based company that builds superconducting quantum computers and says it develops the full stack in-house, including chips, control electronics, operating system, and cloud platform." },
      { q: "How many qubits does Origin Wukong have?", a: "The original Wukong has 72 qubits. The fourth-generation Wukong-180, launched in May 2026, has 180 computational qubits and 251 coupling qubits." },
      { q: "What is Origin Pilot?", a: "Origin Pilot is a quantum computer operating system that manages scheduling, resource coordination, and qubit calibration. Version 4.0 was released for public download in February 2026." },
      { q: "Is Origin Quantum publicly traded?", a: "Not as of this review. It began IPO tutoring for the Shanghai STAR Market in September 2025, but a listing has not been completed. Valuation figures in the press vary and are not confirmed." },
      { q: "How does Origin Quantum compare with IBM or Google?", a: "It uses the same general qubit type, but it has published less benchmark data on gate quality, and its error-correction results are less advanced. Its distinctive strength is a fully in-house, domestic technology stack." },
    ],
  },
  {
    slug: "alice-bob",
    name: "Alice & Bob",
    founded: "2020",
    ceo: "Théau Peronnin (CEO and co-founder); Raphaël Lescanne (CTO and co-founder)",
    headquarters: "Paris, France (with an office in Boston, USA)",
    technology: "Superconducting cat qubits (bosonic qubits)",
    website: "alice-bob.com",
    lastUpdated: "September 30, 2026",
    summary: "Alice & Bob builds quantum computers from cat qubits, a kind of superconducting qubit designed to suppress one of the two main error types by construction. The company plans a 100-logical-qubit machine, code-named Graphene, by 2030.",
    overview: [
      "Alice & Bob is a Paris quantum hardware company with a distinctive idea. Most quantum computers use qubits that suffer from two kinds of errors, bit flips and phase flips, and correcting both requires many extra physical qubits. Alice & Bob's cat qubits are engineered so that bit flips become exponentially rare, leaving only phase flips to correct. That could cut the number of physical qubits needed for a useful machine by a large factor.",
      "The company has more than 200 employees, has raised about 130 million euros in total, and works from sites in Paris and Boston. It sells research access to its processors and is building toward a fault-tolerant computer that it expects to deliver by the end of the decade.",
    ],
    history: [
      "Alice & Bob was founded in 2020 by Théau Peronnin and Raphaël Lescanne, who built the first cat-qubit experiments while working in the research groups around the École Normale Supérieure in Paris and Lyon, Mines Paris, and Inria. The company's name comes from the characters traditionally used to describe quantum communication. The cat-qubit technique it pioneered was later adopted by Amazon's quantum hardware team.",
      "In December 2024 it published a white paper and a five-milestone roadmap, and in January 2025 it raised a 100 million euro Series B, one of the largest rounds for a European quantum startup at the time. In 2026 the venture arm of Nvidia invested, and in June 2026 the company signed a memorandum of understanding with Bull to deepen collaboration on integrating cat-qubit machines into high-performance computing centers.",
    ],
    technologyDeepDive: [
      "A cat qubit is named after Schrödinger's cat. Instead of storing information in a single two-level system, it stores a quantum state in a microwave resonator as a superposition of two classical-like states of light. A carefully designed circuit continually pumps and dissipates photons in pairs so that the resonator is pushed back toward those two states. The result is that the rate of bit-flip errors falls exponentially as the average number of photons in the cat state increases, while phase-flip errors rise only linearly.",
      "This asymmetry lets error correction use a simple repetition code against the remaining phase flips, instead of the more demanding two-dimensional codes needed for ordinary qubits. Alice & Bob's Boson 4 chip reported bit-flip times of up to seven minutes in 2024, a record for superconducting qubits at that time, and the company later reported bit-flip lifetimes of more than an hour on a newer design.",
      "The roadmap names its chip series after elements. Boson, which masters the cat qubit, is described as complete. Helium aims to build a below-threshold logical qubit from 18 cat qubits and is in progress in 2026. Lithium connects logical qubits and demonstrates fault-tolerant gates, Beryllium delivers universal gates using magic-state factories, and Graphene, the 2030 target, would pack 100 logical qubits into about 2,000 cat qubits with a logical error rate of one in a million. These targets are plans, not results.",
    ],
    productsDetail: [
      { name: "Boson series", description: "Chips that demonstrate and refine a single cat qubit. Boson processors have been offered to researchers through cloud access, and the Boson 4 chip set bit-flip records." },
      { name: "Helium series", description: "The first generation intended to encode a logical qubit with error correction below threshold, using 18 cat qubits. The company also sells on-premises Helium systems to research partners and high-performance computing centers." },
      { name: "Graphene (planned)", description: "The company's target for a useful fault-tolerant computer, with 100 logical qubits, aimed at materials science and chemistry applications by 2030." },
      { name: "Software and integration partners", description: "Alice & Bob works with Riverlane on an error-correction stack and with Bull on integrating its processors into Bull's Qaptiva platform for high-performance computing." },
      { name: "Cat Factory and the Paris lab", description: "A research grant of 16.5 million euros with ENS de Lyon and Mines Paris supports work on cheaper fault-tolerant architectures, and the company announced a new 50 million dollar quantum lab in Paris for developing its Lithium, Beryllium, and Graphene chips." },
    ],
    products: [
      "Boson cat-qubit chips",
      "Helium systems (18 cat qubits)",
      "Planned Graphene fault-tolerant processor",
      "Cloud access for researchers",
    ],
    milestones: [
      { year: "2020", event: "Alice & Bob is founded in Paris." },
      { year: "2024", event: "Boson 4 shows bit-flip times of up to seven minutes; the company publishes its five-milestone roadmap in December." },
      { year: "January 2025", event: "Alice & Bob raises a 100 million euro Series B." },
      { year: "Late 2025", event: "The company reports bit-flip lifetimes of more than an hour on a new architecture." },
      { year: "2026", event: "Nvidia's venture arm invests in the company, and the Helium series, with its 18-cat-qubit logical qubit, is in progress." },
      { year: "June 2026", event: "Alice & Bob and Bull sign a memorandum of understanding on cat-qubit systems for high-performance computing." },
      { year: "2030 (target)", event: "The Graphene processor with 100 logical qubits is scheduled." },
    ],
    strengths: [
      "A design that removes one error type at the hardware level and could sharply reduce qubit overhead.",
      "Record-setting bit-flip suppression results.",
      "Strong backing from French and European investors, plus Nvidia.",
      "A clear, staged public roadmap with named milestones.",
    ],
    challenges: [
      "Phase-flip errors still require correction, and the Helium logical qubit has not yet been shown below threshold.",
      "Cat-qubit gates are harder to engineer than for conventional transmons, and extending the approach to many qubits is unproven.",
      "The 2030 Graphene target is ambitious, and the company will need to scale from a handful of qubits to thousands.",
      "Larger competitors, including Google, IBM, and Amazon, have greater resources.",
    ],
    whyItMatters: [
      "Alice & Bob represents the idea that smarter qubit design, not only more qubits, could be what makes quantum computers practical. If cat qubits deliver their promised hardware efficiency, a useful machine could need far fewer components than the roadmaps of IBM and Google imply.",
      "For students, it is also a clear example of how quantum error correction works in practice. The company's focus on suppressing one error type physically and correcting the other in software shows how hardware and code design can be co-optimized.",
    ],
    funding: "Privately held; about 130 million euros raised in total, including a 100 million euro Series B in January 2025 and a 2026 investment from Nvidia's venture arm",
    latestNews: [
      { title: "Alice & Bob and Bull sign a memorandum of understanding to deepen cat-qubit collaboration for high-performance computing", date: "June 2026" },
      { title: "Nvidia's venture capital arm invests in Alice & Bob", date: "2026" },
      { title: "Alice & Bob reports bit-flip lifetimes of more than an hour on a new cat-qubit design", date: "Late 2025" },
      { title: "Alice & Bob announces a 50 million dollar advanced quantum lab in Paris", date: "2025" },
    ],
    faq: [
      { q: "What is a cat qubit?", a: "A cat qubit stores quantum information in a superposition of two classical-like states of a microwave resonator. Its design suppresses bit-flip errors exponentially, leaving mainly phase-flip errors to correct." },
      { q: "Why is it called Alice & Bob?", a: "Alice and Bob are the traditional names used for the two parties in quantum communication and cryptography examples. The founders adopted them as a nod to the field." },
      { q: "What is the Graphene chip?", a: "Graphene is the code name for Alice & Bob's planned fault-tolerant processor. The company aims to deliver 100 logical qubits built from about 2,000 cat qubits by 2030." },
      { q: "How much has Alice & Bob raised?", a: "The company reports about 130 million euros in total funding, including a 100 million euro Series B in January 2025, and it received an investment from Nvidia's venture arm in 2026." },
      { q: "Can I use Alice & Bob's processors?", a: "The company has offered cloud access to its Boson processors for research and sells on-premises systems to partners. Availability changes, so check the company website." },
    ],
  },
  {
    slug: "quera",
    name: "QuEra Computing",
    founded: "2018",
    ceo: "Andy Ory (CEO)",
    headquarters: "Boston, Massachusetts, USA",
    technology: "Neutral atom qubits (rubidium atoms in optical tweezers)",
    website: "quera.com",
    lastUpdated: "September 30, 2026",
    summary: "QuEra is a Harvard and MIT spin-out that builds neutral atom quantum computers. It has delivered systems to Japan's AIST and the UK's National Quantum Computing Centre and plans a megaquop-class system by 2028.",
    overview: [
      "QuEra Computing commercializes neutral atom quantum computing research from Harvard University and the Massachusetts Institute of Technology. Its machines trap rubidium atoms in arrays of laser tweezers and use light to make them interact. The company's early analog processor, Aquila, was among the first neutral atom machines available through the cloud, and its newer Gemini systems add digital gate-based operation.",
      "The company has raised more than 250 million dollars, including a 230 million dollar Series B in 2025 with participation from Google, SoftBank, and Nvidia's venture arm. It has about 200 employees, nearly half with doctorates.",
    ],
    history: [
      "QuEra was founded in 2018 around research by Harvard and MIT scientists including Mikhail Lukin, Markus Greiner, and Vladan Vuletić, who led some of the first experiments to build large programmable arrays of Rydberg atoms. Aquila, a 256-qubit analog machine, became available on Amazon Braket in 2022.",
      "A turning point came in December 2023, when a Harvard-led team with QuEra and MIT reported 48 logical qubits on a neutral atom processor, followed by further peer-reviewed work on continuous operation of thousands of atoms and on a fault-tolerant architecture design. In 2025 QuEra delivered Gemini-class systems to Japan's National Institute of Advanced Industrial Science and Technology (AIST) and to the UK's National Quantum Computing Centre, among the first neutral atom machines installed outside the company's labs. Andy Ory, who joined as interim CEO, now leads the company.",
    ],
    technologyDeepDive: [
      "A neutral atom qubit uses two internal energy states of an atom, which makes every qubit identical. The atoms are cooled by lasers and caught in optical tweezers, then rearranged into any desired pattern. When a laser excites a pair of nearby atoms into Rydberg states they interact strongly, allowing fast entangling gates. Because the atoms are physically movable, the machine can change which qubits are neighbors during a computation.",
      "QuEra's research direction is to use that mobility for error correction. Atoms can be shuttled into groups called logical qubits, and many atoms can be controlled in parallel with a single laser, which cuts the number of control lines. Published demonstrations include logical qubits with error rates lower than their physical constituents, magic-state distillation, and a reported end-to-end fault-tolerant architecture with up to 96 logical qubits described in a 2025 Nature paper. Results of this kind come from academic collaborations as much as from QuEra itself.",
      "The company's public roadmap calls for a megaquop-class system, called Libra, in 2028, with availability through Amazon Braket, and a gigaquop-class system around 2028 to 2029 with more than 1,000 logical qubits and a logical error rate near one in a billion. A megaquop is a million reliable operations, a gigaquop a billion. These are goals and depend on large improvements in atom number, speed, and error rates.",
    ],
    productsDetail: [
      { name: "Aquila", description: "A 256-qubit analog processor, available on Amazon Braket since 2022, used to simulate quantum many-body systems and to solve certain optimization problems. See our Hardware Database for details." },
      { name: "Gemini", description: "A gate-based neutral atom system that runs about 260 atoms and supports logical qubits and magic-state experiments. Units have been installed at AIST in Japan, where one sits next to a large GPU supercomputer, and at the UK's NQCC." },
      { name: "Bloqade", description: "An open-source software package for programming and simulating QuEra's analog neutral atom hardware." },
      { name: "Hybrid HPC integrations", description: "The company integrates its machines with NVIDIA's CUDA-Q software and works with HPE on on-premises systems for high-performance computing centers, announced in September 2026." },
      { name: "Research access programs", description: "The Lawrence Berkeley National Laboratory's NERSC center invited proposals in 2026 for research on Aquila and Gemini." },
    ],
    products: [
      "Aquila analog processor",
      "Gemini gate-based system",
      "Bloqade software",
      "Hybrid HPC integrations",
    ],
    milestones: [
      { year: "2018", event: "QuEra is founded by researchers from Harvard and MIT." },
      { year: "2022", event: "The 256-qubit Aquila processor becomes available on Amazon Braket." },
      { year: "December 2023", event: "A Harvard-led collaboration with QuEra and MIT reports 48 logical qubits." },
      { year: "February 2025", event: "QuEra announces a 230 million dollar Series B with Google and SoftBank among the investors." },
      { year: "2025", event: "Gemini systems are delivered to AIST in Japan and to the UK National Quantum Computing Centre; Nvidia's venture arm joins the financing." },
      { year: "February 2026", event: "NERSC opens a call for research proposals on Aquila and Gemini." },
      { year: "September 2026", event: "QuEra and HPE announce plans for on-premises quantum systems at high-performance computing centers." },
      { year: "2028 (target)", event: "The Libra megaquop-class system is planned for availability through Amazon Braket." },
    ],
    strengths: [
      "A strong academic pedigree and close ties to some of the field's leading error-correction research.",
      "Neutral atom arrays that scale in atom count and can be reconfigured.",
      "Installed systems in Japan and the UK, and a hybrid HPC approach.",
      "Investors including Google, SoftBank, and Nvidia's venture arm.",
    ],
    challenges: [
      "Gate fidelities and speed are still behind the best trapped-ion systems, and each shot takes longer than on superconducting machines.",
      "Atom loss limits long-running computations, though continuous reloading research addresses it.",
      "The 2028 to 2029 megaquop and gigaquop targets require steep engineering progress.",
      "Competition from Pasqal, Atom Computing, Infleqtion, and others is intense.",
    ],
    whyItMatters: [
      "QuEra shows how quickly neutral atoms have moved from physics experiments to products. Many of the most-cited logical-qubit demonstrations of the past few years came from collaborations in which QuEra hardware played a part, and the company is one of the main contenders in the race to deliver error-corrected machines.",
      "The Aquila processor is also one of the easiest real quantum computers to reach for a student or researcher through Amazon Braket, which makes QuEra practically relevant to learners as well as to investors.",
    ],
    funding: "Privately held; more than 250 million dollars raised, including a 230 million dollar Series B in 2025 with Google, SoftBank, and Nvidia's venture arm",
    latestNews: [
      { title: "QuEra and HPE plan on-premises quantum systems for high-performance computing centers", date: "September 2026" },
      { title: "Zapata Quantum and QuEra announce a partnership on quantum application development", date: "August 2026" },
      { title: "QuEra announces a fault-tolerant roadmap with a megaquop-class system in 2028 and a gigaquop-class system in 2028 to 2029", date: "2026" },
      { title: "NERSC invites research proposals on QuEra's Aquila and Gemini systems", date: "February 2026" },
    ],
    faq: [
      { q: "What does QuEra do?", a: "QuEra builds neutral atom quantum computers. Its Aquila processor runs analog quantum simulations and is available on Amazon Braket, and its Gemini systems add gate-based operation." },
      { q: "Is QuEra connected to Harvard and MIT?", a: "Yes. The company was founded in 2018 around neutral atom research from Harvard and MIT, and it continues to collaborate with those groups on error-correction experiments." },
      { q: "What is a logical qubit?", a: "A logical qubit is a more reliable qubit built from many physical qubits using error correction. Neutral atom experiments have shown logical qubits with lower error rates than their individual atoms." },
      { q: "What is a megaquop?", a: "A megaquop is a million reliable quantum operations. QuEra calls its planned 2028 Libra system megaquop-class, and a later gigaquop-class system would run a billion operations." },
      { q: "Can I use QuEra's computers?", a: "Aquila is available through Amazon Braket, and research programs such as NERSC's have offered access to Aquila and Gemini. Availability and pricing change, so check current listings." },
    ],
  },
  {
    slug: "classiq",
    name: "Classiq",
    founded: "2020",
    ceo: "Nir Minerbi (CEO and co-founder); Amir Naveh (Chief Product Officer); Yehuda Naveh (CTO)",
    headquarters: "Tel Aviv, Israel",
    technology: "Quantum software (hardware-agnostic circuit synthesis and compilation)",
    website: "classiq.io",
    lastUpdated: "September 30, 2026",
    summary: "Classiq makes the leading enterprise platform for designing quantum algorithms at a high level and automatically compiling them for any hardware. It has raised more than 200 million dollars, the largest total for a quantum software company.",
    overview: [
      "Classiq is an Israeli software company that treats quantum programming the way chip designers treat electronics. Instead of writing every gate by hand, a developer describes what the algorithm should do in a high-level model, and Classiq's synthesis engine generates an optimized circuit for the chosen quantum computer, taking into account the number of qubits, gate set, and connectivity.",
      "The company does not make hardware. Its software works with processors from IBM, IonQ, Quantinuum, Rigetti, and others, mainly through cloud services such as Amazon Braket, Microsoft Azure Quantum, and Google Cloud. That neutrality is its main selling point to large corporations that do not want to tie their quantum software to a single hardware vendor.",
    ],
    history: [
      "Classiq was founded in 2020 by Nir Minerbi, Amir Naveh, and Yehuda Naveh. Minerbi and Amir Naveh are graduates of Israel's elite Talpiot program, and Yehuda Naveh, the chief technology officer, spent about two decades at IBM Research in Haifa working on automated design and quantum software. The company's co-founders have described its early product as an operating system that few customers needed yet, and said demand grew as hardware improved.",
      "In May 2025 Classiq raised 110 million dollars in a Series C led by Entrée Capital, the largest round ever for a quantum software company, and later added funding from SoftBank, AMD Ventures, Qualcomm Ventures, and IonQ. Total funding passed 200 million dollars. In February 2026 it released Classiq 1.0, a production platform, and in April 2026 it introduced AI agents that build quantum programs from natural-language specifications. The company had about 143 employees in mid-2026.",
    ],
    technologyDeepDive: [
      "Writing quantum algorithms at the gate level is like writing software in assembly language: slow and error-prone. Classiq's platform lets users define a function using its modeling language, called Qmod, which describes quantum operations at a higher level, such as arithmetic, state preparation, or an optimization routine. The synthesis engine then searches for a circuit that meets the user's constraints, for example the smallest number of qubits or the fewest two-qubit gates.",
      "Classiq 1.0 added features designed to make programs safe by construction. These include enforcement that circuits are valid, automatic uncomputation of temporary qubits so that they can be reused, classical local variables, mid-circuit measurement and conditional logic at runtime, and support for GPU-based simulation. The platform also integrates with high-performance computing environments and supports hybrid workflows in which a classical computer runs most of the work.",
      "The company claims more than 60 filed patents on core modeling and compilation methods. A caution for readers: software that reduces resource counts is valuable, but it cannot make a noisy machine fault-tolerant. The benefit of Classiq's approach grows as hardware improves, which is why the company's backers include several hardware and chip firms.",
    ],
    productsDetail: [
      { name: "Classiq Platform", description: "A web and Python-based environment for modeling, synthesizing, simulating, and running quantum algorithms. Users can compare circuits for different hardware targets and see resource estimates." },
      { name: "Qmod language", description: "The high-level modeling language that describes the functional structure of a quantum program, from which the synthesis engine generates optimized circuits." },
      { name: "AI coding and agents", description: "Features announced in 2025 and 2026 that generate quantum programs from natural-language descriptions, intended to make quantum software more approachable to non-specialists." },
      { name: "Cloud marketplace access", description: "The platform is available through the AWS Marketplace and integrates with major cloud providers, which simplifies purchasing for enterprise customers." },
      { name: "Education and ecosystem programs", description: "Classiq supports national quantum initiatives and academic programs. In September 2026 it announced a partnership with Scientek to expand quantum software adoption in Taiwan." },
    ],
    products: [
      "Classiq Platform",
      "Qmod modeling language",
      "AI coding and agent features",
      "Enterprise cloud integrations",
    ],
    milestones: [
      { year: "2020", event: "Classiq is founded in Israel." },
      { year: "May 2025", event: "A 110 million dollar Series C, led by Entrée Capital, is announced as the largest quantum software round to date." },
      { year: "2025", event: "SoftBank, AMD Ventures, Qualcomm Ventures, and IonQ invest; total funding passes 200 million dollars." },
      { year: "February 2026", event: "Classiq 1.0, a production-ready platform with GPU simulation, is released." },
      { year: "April 2026", event: "The company introduces AI agents that build quantum programs from natural-language specifications." },
      { year: "September 2026", event: "Classiq and Scientek announce a partnership in Taiwan." },
    ],
    strengths: [
      "A hardware-agnostic platform that fits the multi-vendor strategy most enterprises prefer.",
      "Backing from leading chip, networking, and quantum hardware companies.",
      "Strong funding, with a leadership team that has deep software and quantum experience.",
      "A growing set of automation features, including AI-assisted programming.",
    ],
    challenges: [
      "Software cannot remove the limits of noisy hardware, so near-term commercial demand depends on hardware progress.",
      "Competing platforms from IBM (Qiskit), Microsoft, NVIDIA (CUDA-Q), and others are free or bundled.",
      "Revenue figures are not public, so the speed of enterprise adoption is hard to judge.",
      "Customers must trust a synthesis engine they do not fully control, which makes verification an important concern.",
    ],
    whyItMatters: [
      "As quantum computers get bigger, programming them by hand becomes unrealistic, and a software layer that automates design becomes essential, just as compilers and electronic design automation tools did for classical chips. Classiq is the best-funded attempt to build that layer.",
      "For learners, Classiq also illustrates the move from gate-level thinking to function-level thinking. Understanding what the synthesis engine does, such as turning an arithmetic function into a circuit, is a good way to connect the textbook ideas in our Learn section to real engineering.",
    ],
    funding: "Privately held; more than 200 million dollars raised, including a 110 million dollar Series C in May 2025",
    latestNews: [
      { title: "Classiq and Scientek partner to accelerate quantum software adoption in Taiwan", date: "September 2026" },
      { title: "Classiq introduces AI agents that build production-ready quantum programs from natural-language specifications", date: "April 2026" },
      { title: "Classiq releases version 1.0 of its quantum software engineering platform", date: "February 2026" },
      { title: "Classiq's total funding passes 200 million dollars with investment from AMD Ventures, Qualcomm Ventures, and IonQ", date: "2025" },
    ],
    faq: [
      { q: "What does Classiq do?", a: "Classiq makes software that lets developers describe quantum algorithms at a high level. Its synthesis engine automatically produces optimized circuits for a chosen quantum computer." },
      { q: "Does Classiq make quantum computers?", a: "No. Classiq is a software company, and its platform works with hardware from several vendors, mostly through cloud services." },
      { q: "What is Qmod?", a: "Qmod is Classiq's high-level modeling language. It describes what a quantum program should do, and the platform decides how to implement it as gates." },
      { q: "How much has Classiq raised?", a: "More than 200 million dollars in total, including a 110 million dollar Series C in May 2025, which was reported as the largest round for a quantum software company at the time." },
      { q: "Do I need quantum hardware to try Classiq?", a: "No. The platform includes simulators, including GPU-based simulation, so you can design and test programs before running them on hardware. Access options and pricing change, so check Classiq's website." },
    ],
  },
  {
    slug: "multiverse-computing",
    name: "Multiverse Computing",
    founded: "2019",
    ceo: "Enrique Lizaso (co-founder and CEO); Román Orús (co-founder and Chief Scientific Officer)",
    headquarters: "San Sebastián (Donostia), Spain",
    technology: "Quantum-inspired software; tensor networks for AI model compression (CompactifAI)",
    website: "multiversecomputing.com",
    lastUpdated: "September 30, 2026",
    summary: "Multiverse Computing started as a quantum software company for finance and is now best known for CompactifAI, which uses tensor networks from quantum physics to shrink large language models by up to 95%. A 570 million dollar round in July 2026 valued it at 1.7 billion dollars before the investment.",
    overview: [
      "Multiverse Computing is a Spanish deep-tech company that has changed shape as the quantum market has matured. It began in 2019 building quantum and quantum-inspired software for banks and other industrial customers, with products such as Singularity for portfolio optimization and risk analysis. Its fastest-growing business is now CompactifAI, a technology for compressing large language models so that they run faster, use less energy, and can operate on devices such as phones or factory equipment.",
      "This is a useful example for readers: not every company in a list of quantum firms builds a quantum computer. Multiverse applies mathematical ideas from quantum physics, running on ordinary classical hardware, to problems in artificial intelligence.",
    ],
    history: [
      "The company was co-founded in 2019 by Enrique Lizaso, Román Orús, Samuel Mugel, and Alfonso Rubio-Manzanares. Orús is a physicist known for his work on tensor networks, a way of describing complicated quantum states as chains of smaller components. In 2021 Multiverse announced its first significant funding of about 12.5 million euros, and in 2022 Gartner named it a Cool Vendor for quantum software in financial services.",
      "CompactifAI was launched in 2023. In June 2025 Multiverse closed a 215 million dollar Series B, and in 2025 it released compressed versions of Meta's Llama models as well as very small models named SuperFly and ChickenBrain. In 2026 it launched HyperNova 60B, its first open-source model. On July 27, 2026 it announced a 570 million dollar (500 million euro) Series C at a 1.7 billion dollar pre-money valuation, five times its Series B valuation, bringing total funding to about 800 million dollars. The company had about 480 employees in 2026.",
    ],
    technologyDeepDive: [
      "A large language model stores its knowledge in enormous grids of numbers called weight matrices. Tensor-network methods rewrite such a matrix as a chain of much smaller linked pieces, keeping the structure that matters and discarding redundancy. The same mathematics physicists use to describe entangled quantum systems turns out to be effective at finding which parts of a neural network can be simplified.",
      "Multiverse says CompactifAI can shrink a model by 80 to 95% with little loss of accuracy, and that the compressed models run faster and consume less energy. Independent evaluation is important here, since results depend on the model, the task, and how accuracy is measured, and the company's figures come from its own announcements. The platform also includes a router that decides in real time whether a request should run locally on a device or in the cloud.",
      "On the quantum side, Multiverse continues to develop algorithms for finance and industry that can run on quantum hardware or on quantum-inspired classical solvers. Because current quantum computers are small and noisy, many of its commercial results come from the classical, quantum-inspired side of the business.",
    ],
    productsDetail: [
      { name: "CompactifAI", description: "A model compression platform that applies tensor networks to reduce the size of large language models, aimed at running them in the cloud, on premises, or on devices. It can compress open-source models and proprietary ones where the developer grants access." },
      { name: "CompactifAI Router", description: "Software that decides in real time whether each workload runs on a device, in a private data center, or in the cloud." },
      { name: "Compressed and open models", description: "Compressed versions of popular open models, small models named SuperFly and ChickenBrain, and the open-source HyperNova 60B released in 2026." },
      { name: "Singularity", description: "A quantum and quantum-inspired software platform for finance and optimization that connects to hardware from several providers." },
      { name: "Sovereign AI infrastructure", description: "A software layer for data centers that need to run efficient AI under national or corporate control, which is a focus of its 2026 expansion into North America, Asia, and the Middle East." },
    ],
    products: [
      "CompactifAI model compression",
      "CompactifAI Router",
      "HyperNova open-source model",
      "Singularity quantum finance software",
    ],
    milestones: [
      { year: "2019", event: "Multiverse Computing is founded in San Sebastián." },
      { year: "2021", event: "The company announces about 12.5 million euros in funding." },
      { year: "2022", event: "Gartner names Multiverse a Cool Vendor for quantum software in financial services." },
      { year: "2023", event: "CompactifAI is launched." },
      { year: "June 2025", event: "A 215 million dollar Series B closes." },
      { year: "August 2025", event: "The first nano models, SuperFly and ChickenBrain, are released." },
      { year: "2026", event: "The open-source HyperNova 60B model is launched." },
      { year: "July 27, 2026", event: "A 570 million dollar Series C is announced at a 1.7 billion dollar pre-money valuation." },
    ],
    strengths: [
      "A technology that addresses an immediate problem: the cost and energy use of running large AI models.",
      "Substantial funding and a growing list of investors, including HP Inc., Orange Ventures, Santander, and Tikehau Capital.",
      "Deep expertise in tensor networks and quantum algorithms.",
      "A product line that spans compressed models, software, and quantum applications.",
    ],
    challenges: [
      "Compression results come largely from company reports, and they can depend on the model and task.",
      "The AI model market is crowded and moves quickly, with strong competition from larger AI labs.",
      "As the business shifts toward AI, the connection to quantum hardware becomes weaker.",
      "The valuation step-up creates high expectations for revenue growth.",
    ],
    whyItMatters: [
      "Multiverse is one of the clearest examples of quantum ideas paying off before quantum computers are ready. Tensor networks were developed to describe quantum systems, and now they are used to make AI more efficient. That shows that research in quantum information can create commercial value through its mathematics, not just through hardware.",
      "It is also a reminder to read funding headlines carefully. A company on a list of quantum firms may earn most of its revenue from AI, and this page therefore separates what Multiverse does with quantum methods from what it does with classical computers.",
    ],
    funding: "Privately held; about 800 million dollars raised in total, including a 570 million dollar Series C in July 2026 and a 215 million dollar Series B in June 2025",
    latestNews: [
      { title: "Multiverse Computing raises a 570 million dollar Series C at a 1.7 billion dollar pre-money valuation", date: "July 2026" },
      { title: "Multiverse launches HyperNova 60B, its first open-source AI model", date: "2026" },
      { title: "Multiverse releases the SuperFly and ChickenBrain nano models", date: "August 2025" },
      { title: "Multiverse closes a 215 million dollar Series B", date: "June 2025" },
    ],
    faq: [
      { q: "Does Multiverse Computing build quantum computers?", a: "No. It develops software. Some of it targets quantum computers, but its largest product, CompactifAI, runs on classical hardware and uses mathematics borrowed from quantum physics." },
      { q: "What is CompactifAI?", a: "CompactifAI is Multiverse's technology for compressing large language models using tensor networks. The company says it can reduce model size by 80 to 95% with little loss of accuracy." },
      { q: "What is a tensor network?", a: "A tensor network is a way of representing a large, complicated object as a network of smaller linked pieces. Physicists use them to describe entangled quantum systems, and the same idea can simplify the large weight matrices in neural networks." },
      { q: "How much has Multiverse raised?", a: "About 800 million dollars in total, including a 570 million dollar Series C announced in July 2026 and a 215 million dollar Series B in June 2025." },
      { q: "Is Multiverse Computing publicly traded?", a: "No. It is privately held, and its valuation figures come from funding rounds. This page is not investment advice." },
    ],
  },
  {
    slug: "iqm",
    name: "IQM",
    founded: "2018 (listed on Nasdaq in July 2026)",
    ceo: "Jan Goetz (co-founder and CEO)",
    headquarters: "Espoo, Finland",
    technology: "Superconducting qubits (Crystal square-lattice and Star architectures)",
    website: "meetiqm.com",
    lastUpdated: "September 30, 2026",
    summary: "IQM builds superconducting quantum computers that customers buy and run on their own premises, and it is the first European quantum hardware company listed on Nasdaq. It has deployed more than a dozen systems and is developing a new line, Halocene, for error correction.",
    overview: [
      "IQM Quantum Computers, based in Espoo near Helsinki, builds complete superconducting quantum computers, including the chip, the control electronics, and the software. Unlike companies that mainly sell cloud access, IQM focuses on selling machines that universities, supercomputing centers, and companies install in their own facilities, where they can be integrated with existing high-performance computers.",
      "The company reports about 15 systems deployed, more than any other European hardware builder. Its customers include research centers in Finland, Germany, Italy, Poland, and the United States, and it listed on Nasdaq on July 2, 2026 under the ticker IQMX, with a second listing in Helsinki.",
    ],
    history: [
      "IQM was founded in 2018 as a spin-off from Aalto University and the VTT Technical Research Centre of Finland. Jan Goetz, a physicist who earned his doctorate on superconducting circuits at the Walther-Meissner-Institute in Munich, co-founded the company and became its sole chief executive in January 2026. Over its first years IQM raised more than 600 million dollars, which made it one of the best-funded quantum hardware startups in Europe.",
      "In February 2026 the company announced a merger with the special purpose acquisition company Real Asset Acquisition Corp, valuing it at 1.8 billion dollars before the deal. The transaction closed on July 2, 2026, with a pro forma cash position of about 337 million euros, and trading began in New York on that day and in Helsinki the next. The company has since reported revenue for the first half of 2026 of about 8.9 million euros and guided to 42 to 47 million euros for the year.",
    ],
    technologyDeepDive: [
      "IQM's qubits are superconducting circuits cooled below 20 millikelvin. The company has two main chip families. Crystal uses a two-dimensional square lattice in which each qubit couples to its neighbors, a layout that works well with surface-code error correction. Star places a central coupling element at the middle of a group of qubits so that any qubit can interact with the others through it, which reduces the number of operations needed for some algorithms.",
      "IQM sells three main product lines. Spark is a compact 5-qubit system for education and training. Radiance is a larger system, offered in sizes such as 54 and 150 qubits, designed to be installed in data centers next to supercomputers. Resonance is IQM's cloud service. A newer line, Halocene, targets customers who want to study quantum error correction, beginning with a 150-qubit system and extending in the company's plans to 1,000 qubits.",
      "IQM publishes a roadmap toward fault-tolerant machines by 2030. A Halocene H4 with 150 physical qubits and early error-correcting codes is expected around 2027, and an H5 with a handful of logical qubits around 2029. In 2026 the first Halocene installation was reported to have moved from late 2026 into 2027, which illustrates how hardware schedules can slip.",
    ],
    productsDetail: [
      { name: "IQM Radiance", description: "On-premises systems in 54-qubit and 150-qubit configurations. A 54-qubit Radiance was delivered to CINECA in Bologna, Italy in late 2025 to work with the Leonardo supercomputer, Oak Ridge National Laboratory in the United States took delivery of its first Radiance in June 2026, and Japan's Toyo Corporation bought a 20-qubit Radiance in April 2026." },
      { name: "IQM Spark", description: "A compact 5-qubit system for universities and training centers that want to teach and test quantum programming on real hardware." },
      { name: "IQM Halocene", description: "A product line designed for error-correction research. LUMI AI Factory, a European supercomputing initiative, selected IQM to deploy the Halocene H4 in 2027." },
      { name: "IQM Resonance", description: "Cloud access to IQM processors for developers and researchers who do not want to buy a system." },
      { name: "Garnet and national programs", description: "IQM's 20-qubit Garnet processor, covered in our Hardware Database, supports Finland's national quantum program with VTT. In May 2026 Poznan University of Technology launched Poland's first on-premises quantum computer, an IQM Radiance." },
    ],
    products: [
      "IQM Radiance on-premises systems",
      "IQM Spark",
      "IQM Halocene (error-correction line)",
      "IQM Resonance cloud service",
    ],
    milestones: [
      { year: "2018", event: "IQM is founded in Finland as a spin-off from Aalto University and VTT." },
      { year: "Late 2025", event: "A 54-qubit Radiance system is delivered to CINECA in Italy." },
      { year: "January 2026", event: "Jan Goetz becomes IQM's sole chief executive." },
      { year: "February 2026", event: "IQM announces a SPAC merger valuing it at 1.8 billion dollars pre-money." },
      { year: "May 2026", event: "Poznan University of Technology launches an IQM Radiance as Poland's first on-premises quantum computer." },
      { year: "June 2026", event: "Oak Ridge National Laboratory takes delivery of its first Radiance." },
      { year: "July 2, 2026", event: "IQM begins trading on Nasdaq as IQMX, with a Helsinki listing the next day." },
      { year: "2027 (planned)", event: "The first Halocene H4 systems are expected, including one for LUMI AI Factory." },
    ],
    strengths: [
      "One of the largest installed bases among independent quantum hardware companies.",
      "A business model built around on-premises systems that integrate with supercomputers.",
      "A clear technical roadmap with named product lines and customers for upcoming systems.",
      "Public-market capital and broad public-sector support in Europe.",
    ],
    challenges: [
      "Revenue is small relative to the valuation, and sales are concentrated in a few large public-sector customers.",
      "Hardware schedules can slip, as the delay of the first Halocene installation shows.",
      "Superconducting hardware competes with IBM, Google, and Rigetti, which have deeper resources.",
      "Fault-tolerant machines by 2030 require large improvements in qubit quality and scale.",
    ],
    whyItMatters: [
      "IQM represents Europe's most direct answer to the American superconducting companies. Its listing and its government customers show that quantum computers are increasingly viewed as strategic infrastructure, and that countries want machines they own and operate rather than only renting cloud time.",
      "Its on-premises model is also a good illustration of how quantum computers will most likely be used for now: as accelerators attached to supercomputers. The machine in a research center in Bologna or Oak Ridge sits next to a classical system, and the interesting work is in how the two are combined.",
    ],
    funding: "Publicly traded (Nasdaq: IQMX, with a listing in Helsinki) since July 2, 2026; more than 600 million dollars raised; pro forma cash of about 337 million euros at listing",
    latestNews: [
      { title: "IQM reports first-half 2026 revenue of about 8.9 million euros and guides to 42 to 47 million euros for the year", date: "2026" },
      { title: "IQM begins trading on Nasdaq as IQMX and on Nasdaq Helsinki", date: "July 2026" },
      { title: "Oak Ridge National Laboratory takes delivery of an IQM Radiance system", date: "June 2026" },
      { title: "IQM sells a 20-qubit Radiance system to Japan's Toyo Corporation", date: "April 2026" },
    ],
    faq: [
      { q: "Where is IQM based?", a: "IQM is based in Espoo, Finland, and also operates in Germany and elsewhere. It was spun out of Aalto University and the VTT Technical Research Centre." },
      { q: "Is IQM publicly traded?", a: "Yes. IQM began trading on Nasdaq under the ticker IQMX on July 2, 2026, and on Nasdaq Helsinki the next day. This page is not investment advice." },
      { q: "What is IQM Radiance?", a: "Radiance is IQM's line of on-premises superconducting quantum computers, offered in several sizes for installation in data centers and research facilities." },
      { q: "What is Halocene?", a: "Halocene is IQM's product line for error-correction research, beginning with a 150-qubit system. The first installations were reported to have been pushed into 2027." },
      { q: "How is IQM different from IBM or Rigetti?", a: "It builds the same general type of qubit but focuses on selling systems that customers own and operate on premises, particularly to supercomputing centers and universities, instead of mainly offering cloud access." },
    ],
  },
  {
    slug: "q-ctrl",
    name: "Q-CTRL",
    founded: "2017",
    ceo: "Michael J. Biercuk (Founder and CEO)",
    headquarters: "Sydney, Australia (offices in Los Angeles, San Francisco, Huntsville, Berlin, and Oxford)",
    technology: "Quantum infrastructure software (error suppression, control, and calibration) and quantum sensing for navigation",
    website: "q-ctrl.com",
    lastUpdated: "September 30, 2026",
    summary: "Q-CTRL sells software that makes quantum computers more accurate, and quantum navigation systems that work without GPS. Its Fire Opal software is built into IBM's cloud, and its Ironstone Opal navigation system was the first of its kind qualified for flight safety.",
    overview: [
      "Q-CTRL is an Australian company that works on a problem every quantum computer shares: noise. Its software shapes the control signals sent to qubits and adjusts circuits so that errors are suppressed before they accumulate, which improves results on existing hardware without changing it. Because the software works with many machines, Q-CTRL sells to hardware makers and cloud platforms as well as to end users.",
      "The company has also built a second business on the same expertise. Its quantum sensing division makes navigation systems that determine position from the Earth's magnetic field, as a backup for GPS, and works with defense and aviation customers including Lockheed Martin and Airbus.",
    ],
    history: [
      "Michael Biercuk, a physicist at the University of Sydney, founded Q-CTRL in 2017 as a university spin-out. Its first products supported researchers who control quantum devices, and it added software for improving the performance of quantum computers. Fire Opal was integrated natively into IBM's quantum services, which the company describes as the first time a major hardware vendor embedded third-party performance software.",
      "In 2024 the company raised a Series B that reached 113 million dollars, led by Bullhound, and its press kit reports about 133 million dollars raised to date as of September 2026. In August 2025 DARPA awarded Q-CTRL contracts valued at about 38 million Australian dollars (24.4 million US dollars) under its Robust Quantum Sensors program. Q-CTRL also provides educational software, called Black Opal, which has been rolled out at national and state levels, including in Tamil Nadu in India.",
    ],
    technologyDeepDive: [
      "Qubits are fragile, and their errors come from many sources: drifting frequencies, crosstalk between neighboring qubits, and imperfect control pulses. Q-CTRL's approach is to treat these as control engineering problems. Its Boulder Opal software uses optimization to design pulses that cancel out noise and to automate calibration, which is the tedious process of tuning each qubit and gate. Its Fire Opal software works one level higher, rewriting circuits and applying error suppression so that results from algorithms run on real hardware are more accurate.",
      "Error suppression differs from error correction. Suppression reduces the rate of errors on physical qubits and is useful today. Correction uses extra qubits to detect and fix errors and requires much larger machines. Q-CTRL's results show improved performance on current devices, including claims of practical advantage in optimization and materials-discovery tasks, which should be read as company-reported demonstrations rather than independently confirmed breakthroughs.",
      "For navigation, the company's Ironstone Opal system uses quantum magnetometers, sensors that measure tiny changes in the magnetic field, together with software that compares the readings against a map of the Earth's crustal magnetic anomalies. It reports field trials on land, in the air, and at sea, and in 2026 it said Ironstone Opal had become the first quantum navigation system to achieve airworthiness qualification under the RTCA DO-160 standard.",
    ],
    productsDetail: [
      { name: "Fire Opal", description: "Performance-management software for quantum computers that suppresses errors in circuits. It is available natively through IBM Quantum, Amazon Braket, and IonQ's cloud, among others." },
      { name: "Boulder Opal", description: "A toolkit for quantum control research and automated calibration, used by hardware teams to design better control pulses and keep systems tuned." },
      { name: "Ironstone Opal", description: "A magnetic quantum navigation system that provides positioning when GPS is unavailable. It was named one of TIME's Best Inventions of 2025 and showcased at the Farnborough International Airshow in July 2026." },
      { name: "Black Opal", description: "Interactive education software used to teach quantum concepts to students and professionals." },
      { name: "Q-PAC and open architecture work", description: "In March 2026 Q-CTRL contributed software to Elevate Quantum's Q-PAC, which was described as the first commercially deployable Quantum Open Architecture system in the United States." },
    ],
    products: [
      "Fire Opal",
      "Boulder Opal",
      "Ironstone Opal quantum navigation",
      "Black Opal (education)",
    ],
    milestones: [
      { year: "2017", event: "Q-CTRL is founded in Sydney by Michael Biercuk." },
      { year: "2023", event: "Fire Opal is integrated natively into IBM Quantum services." },
      { year: "2024", event: "The Series B reaches 113 million dollars; Fire Opal is deployed on additional platforms including Rigetti and Diraq." },
      { year: "August 2025", event: "DARPA selects Q-CTRL for awards worth about 24.4 million US dollars under the Robust Quantum Sensors program." },
      { year: "March 2026", event: "Q-CTRL software supports the launch of Q-PAC, an open-architecture quantum system in Colorado." },
      { year: "July 2026", event: "Ironstone Opal achieves RTCA DO-160 safety-of-flight qualification and is shown at Farnborough." },
      { year: "September 2026", event: "Q-CTRL announces expanded capabilities in Fire Opal for all users and autonomous calibration tools." },
    ],
    strengths: [
      "Software that works across many hardware platforms and is embedded in major cloud services.",
      "A second revenue line in defense and aviation navigation, with named partners and government funding.",
      "Deep control-engineering expertise that is hard for newcomers to replicate.",
      "Education tools used by government programs, including in India.",
    ],
    challenges: [
      "Error suppression cannot replace full error correction, so its value depends on hardware that remains noisy.",
      "Hardware vendors, including IBM, may build similar features in-house.",
      "Performance claims come mostly from the company's own demonstrations.",
      "The company is private and does not publish revenue, so the scale of its business is unclear.",
    ],
    whyItMatters: [
      "Q-CTRL shows that software around the chip can matter as much as the chip. Making today's imperfect machines produce better results is a practical way to find out what useful quantum computing can do before fault tolerance arrives.",
      "Its navigation work is also one of the few quantum technologies that is moving into products today. Quantum sensors do not need thousands of qubits, and applications such as GPS-free navigation are close to deployment, which makes sensing a useful counterweight to the long timelines of quantum computing.",
    ],
    funding: "Privately held; about 133 million US dollars raised to date as of September 2026, with a Series B led by Bullhound",
    latestNews: [
      { title: "Q-CTRL announces expanded capabilities in Fire Opal and autonomous calibration for all users", date: "September 2026" },
      { title: "Q-CTRL shows airworthiness-qualified quantum navigation at the Farnborough International Airshow", date: "July 2026" },
      { title: "Q-CTRL reports a 3,000x speedup in a materials-discovery demonstration and describes it as evidence of practical advantage", date: "2026" },
      { title: "Q-CTRL software supports the launch of the Q-PAC open-architecture quantum system", date: "March 2026" },
    ],
    faq: [
      { q: "What does Q-CTRL do?", a: "Q-CTRL builds software that reduces errors in quantum computers, tools for calibrating and controlling quantum hardware, and quantum navigation systems that work without GPS." },
      { q: "What is Fire Opal?", a: "Fire Opal is Q-CTRL's software that suppresses errors in quantum circuits. It is offered natively through platforms such as IBM Quantum and Amazon Braket." },
      { q: "What is quantum navigation?", a: "It uses quantum sensors that measure very small changes in the magnetic field, together with maps of the Earth's magnetic anomalies, to work out position without relying on GPS." },
      { q: "Is Q-CTRL connected to India?", a: "Its Black Opal education software has been rolled out in Tamil Nadu, among other regions, as part of efforts to build a quantum workforce." },
      { q: "Is Q-CTRL publicly traded?", a: "No. It is a private company, and as of September 2026 it has not announced an IPO. This page is not investment advice." },
    ],
  },
  {
    slug: "phasecraft",
    name: "Phasecraft",
    founded: "2019",
    ceo: "Ashley Montanaro (co-founder and CEO)",
    headquarters: "Bristol, United Kingdom",
    technology: "Quantum algorithms (hardware-agnostic) for simulation and optimization",
    website: "phasecraft.io",
    lastUpdated: "September 30, 2026",
    summary: "Phasecraft designs quantum algorithms that run on today's noisy machines, with a focus on simulating materials and optimizing energy systems. It works with Google, IBM, Quantinuum, QuEra, and Atom Computing and raised a 34 million dollar Series B in 2025.",
    overview: [
      "Phasecraft is a UK company that writes the instructions rather than building the machines. Its team designs quantum algorithms, the step-by-step methods that decide how a quantum computer solves a problem, and tunes them to the limits of present-day hardware. The central idea is that a clever algorithm can reduce the number of operations needed so that a useful result fits within what a noisy machine can do.",
      "The company concentrates on materials and chemistry, where quantum computers have a natural advantage, and on optimization of large networks such as energy grids. It works with partners who run the algorithms on real hardware and with industrial customers who supply the problems.",
    ],
    history: [
      "Phasecraft was founded in 2019 by Toby Cubitt and John Morton of University College London and Ashley Montanaro of the University of Bristol, three professors with long research records in quantum algorithms and quantum devices. It raised a Series A of about 13 million pounds in 2023, led by Playground Global.",
      "In September 2025 it announced a 34 million dollar Series B co-led by Plural, Playground Global, and the Quantum Fund of Novo Holdings, which made its first direct investment in quantum software. Total funding exceeded 50 million dollars. In June 2026 the company announced a strategic collaboration with Atom Computing on next-generation materials quantum computing.",
    ],
    technologyDeepDive: [
      "A quantum algorithm for simulating a material, such as a model of electrons moving in a solid, usually needs many gates, and the number of gates grows quickly with the size of the system. Phasecraft invents ways to represent the same physics with far fewer operations, by exploiting the structure of the problem and by compiling it carefully for the particular hardware that will run it. The company says its methods can make materials simulation millions of times more efficient than earlier approaches, a claim based on its own and published resource estimates.",
      "Working on noisy machines also means designing around errors. Phasecraft combines algorithm design with error mitigation, which uses extra measurements and classical post-processing to reduce the effect of noise. It also studies how many qubits and operations a future fault-tolerant computer would need to run an industrially relevant simulation, which tells hardware makers what to build.",
      "These results should be read with care. Showing that a quantum computer can simulate a model of a material faster than the best classical method on a specific benchmark is different from showing it can predict the behavior of a real product material better than existing tools. Phasecraft's goal is to bridge that gap, and the outcome depends on hardware progress as well as algorithms.",
    ],
    productsDetail: [
      { name: "Materials simulation algorithms", description: "Methods for simulating the electronic and magnetic behavior of materials, including models used for batteries, solar cells, and catalysts. Partners include Johnson Matthey and Oxford PV." },
      { name: "Optimization algorithms", description: "Algorithms for large-scale network problems, such as designing and operating energy systems. The UK's National Energy System Operator is one of its collaborators." },
      { name: "Telecom and life-sciences applications", description: "Work with BT on network problems and research on biochemical processes relevant to drug development for genetic conditions." },
      { name: "Hardware partnerships", description: "Collaborations with Google Quantum AI, IBM, Quantinuum, QuEra, and Atom Computing allow the company to test its algorithms across different qubit types." },
      { name: "Intellectual property and software", description: "The company licenses algorithms and develops software tools that turn them into runnable programs for specific machines." },
    ],
    products: [
      "Materials simulation algorithms",
      "Energy and network optimization algorithms",
      "Algorithm licensing and software",
      "Hardware co-design partnerships",
    ],
    milestones: [
      { year: "2019", event: "Phasecraft is founded by Toby Cubitt, Ashley Montanaro, and John Morton." },
      { year: "2023", event: "The company raises a Series A of about 13 million pounds." },
      { year: "September 2025", event: "A 34 million dollar Series B is announced, bringing total funding above 50 million dollars." },
      { year: "June 2026", event: "Phasecraft and Atom Computing announce a strategic collaboration on materials simulation." },
    ],
    strengths: [
      "Founders with strong academic records in quantum algorithms and devices.",
      "Partnerships with several of the leading hardware companies, so the algorithms are tested on varied machines.",
      "Industrial partners with real problems, including Johnson Matthey, Oxford PV, NESO, and BT.",
      "A hardware-agnostic position that does not depend on one qubit technology succeeding.",
    ],
    challenges: [
      "Algorithm gains do not remove the need for better hardware, so useful results depend on machine progress.",
      "Advantage claims on benchmark models may not carry over to real industrial materials.",
      "Funding is smaller than that of hardware competitors, and the company must prove commercial revenue.",
      "Large technology companies employ their own algorithm teams and could compete.",
    ],
    whyItMatters: [
      "Phasecraft is a good example of the algorithm layer of the quantum industry. Many people assume progress depends only on qubits, but the number of qubits needed to solve a problem is set by the algorithm. A better algorithm can bring a useful application years closer.",
      "It is also a useful company to follow for a realistic view of near-term applications. Its focus on materials and energy is where researchers broadly expect the earliest valuable uses of quantum computers, which makes its progress a good indicator of whether the field is on track.",
    ],
    funding: "Privately held; more than 50 million dollars raised, including a 34 million dollar Series B in September 2025",
    latestNews: [
      { title: "Atom Computing and Phasecraft announce a strategic collaboration on next-generation materials quantum computing", date: "June 2026" },
      { title: "Phasecraft raises a 34 million dollar Series B co-led by Plural, Playground Global, and Novo Holdings' Quantum Fund", date: "September 2025" },
    ],
    faq: [
      { q: "What does Phasecraft do?", a: "Phasecraft designs quantum algorithms, especially for simulating materials and optimizing networks, and adapts them to run on current noisy quantum computers." },
      { q: "Does Phasecraft build quantum computers?", a: "No. It is a software and algorithms company that works with hardware partners including Google, IBM, Quantinuum, QuEra, and Atom Computing." },
      { q: "Who founded Phasecraft?", a: "Toby Cubitt and John Morton of University College London and Ashley Montanaro of the University of Bristol founded it in 2019. Montanaro is the CEO." },
      { q: "What is a quantum algorithm?", a: "A quantum algorithm is a procedure that tells a quantum computer which operations to perform in what order to solve a problem. Better algorithms reduce the number of qubits and gates required." },
      { q: "How much has Phasecraft raised?", a: "More than 50 million dollars in total, including a 34 million dollar Series B announced in September 2025." },
    ],
  },
  {
    slug: "quantum-computing-inc",
    name: "Quantum Computing Inc. (QCi)",
    founded: "2018 (as Quantum Computing Inc.)",
    ceo: "Yuping Huang (CEO and Chairman since January 1, 2026)",
    headquarters: "Hoboken, New Jersey, USA (thin-film lithium niobate foundry in Tempe, Arizona)",
    technology: "Integrated photonics (thin-film lithium niobate); room-temperature photonic optimization machines",
    website: "quantumcomputinginc.com",
    lastUpdated: "September 30, 2026",
    summary: "QCi is a Nasdaq-listed company that builds photonic quantum hardware that works at room temperature, and it now runs its own thin-film lithium niobate chip foundry. Revenue is growing from a very small base, and it held about 1.3 billion dollars in cash and investments in mid-2026.",
    overview: [
      "Quantum Computing Inc., known as QCi, takes a photonics-first approach. Rather than cooling circuits to a few thousandths of a degree above absolute zero, it uses light and chips made from thin-film lithium niobate, a crystal that controls light very efficiently, and its machines are designed to operate at room temperature. The company describes itself as vertically integrated: it designs the chips, runs a fabrication facility, and sells photonic components as well as complete systems.",
      "Its main quantum product is Dirac-3, a machine for solving optimization problems, which it sells for use cases such as portfolio optimization. It also sells lasers, detectors, photonic integrated circuits, and foundry services, and these photonic products produce most of its current revenue.",
    ],
    history: [
      "The company began life in 2018 as Quantum Computing Inc. and listed on Nasdaq under the ticker QUBT. For its first years it concentrated on software for quantum optimization, and then shifted to photonic hardware. In 2025 it opened Fab 1, a thin-film lithium niobate chip foundry in Tempe, Arizona, as a pilot-scale facility that it describes as an internal innovation engine rather than a high-volume plant.",
      "Yuping Huang, a photonics professor and one of the company's scientific leaders, became CEO on January 1, 2026. During 2026 QCi has completed three acquisitions to expand its manufacturing and photonics capabilities: Luminar Semiconductor for 110 million dollars in cash, NuCrypt for quantum communications, and NHanced Semiconductors, which became its Fab 2. The company raised substantial capital in 2025 and reported about 1.3 billion dollars in cash, cash equivalents, and investments at the end of June 2026.",
    ],
    technologyDeepDive: [
      "Thin-film lithium niobate (TFLN) is a material that can change how light travels through it when an electric voltage is applied, which allows very fast, low-loss optical modulators. Chips made from TFLN can route, switch, and generate photons, and the manufacturing processes are close to those used for semiconductors, so the technology can in principle be mass-produced. QCi's pitch is that this makes quantum hardware smaller, cheaper, and easier to deploy than cryogenic machines.",
      "QCi calls its Dirac-3 approach entropy quantum computing. The machine is designed to solve difficult optimization problems by letting a physical system settle into a low-energy state, which is conceptually similar to quantum annealing. The company says the machine uses quantum effects to escape local minima, and a management response in an earnings call acknowledged that some benchmark data has been published in journals and customer presentations while internal benchmarks have not been released. Readers should therefore treat claims of advantage over classical solvers as unverified until independent evidence is available.",
      "The company also states that it is making progress on gate-based machines that use single photons and heterogeneous integrated chips, but this is at an early stage compared with its optimization hardware. Its near-term business is better described as a photonics component and foundry company with a quantum roadmap than as a maker of general-purpose quantum computers.",
    ],
    productsDetail: [
      { name: "Dirac-3", description: "A photonic optimization machine. In June 2026 QCi said it sold, delivered, and installed a Dirac-3 at a leading global consulting firm for enterprise optimization work such as portfolio optimization." },
      { name: "Thin-film lithium niobate foundry", description: "Fab 1 in Tempe, Arizona offers prototyping and early production of TFLN chips. The NHanced Semiconductors acquisition added a second fab to expand U.S.-based manufacturing." },
      { name: "Photonic components and integrated circuits", description: "Lasers, detectors, modulators, photonic integrated circuits, and advanced packaging sold to aerospace, government, and industrial customers. These accounted for most Q2 2026 revenue." },
      { name: "Quantum security and sensing", description: "Quantum random number generators, quantum authentication and networking technology, and remote sensing products such as vibrometers, supported by the NuCrypt acquisition." },
      { name: "Foundry and OEM services", description: "Private-label photonics, custom design, and contract manufacturing for outside customers." },
    ],
    products: [
      "Dirac-3 optimization machine",
      "Thin-film lithium niobate foundry services",
      "Photonic components and integrated circuits",
      "Quantum security and sensing products",
    ],
    milestones: [
      { year: "2018", event: "The company is established as Quantum Computing Inc." },
      { year: "2025", event: "Fab 1, a thin-film lithium niobate foundry in Tempe, Arizona, opens." },
      { year: "January 1, 2026", event: "Yuping Huang becomes CEO and Chairman." },
      { year: "2026", event: "QCi acquires Luminar Semiconductor for 110 million dollars in cash and NuCrypt." },
      { year: "June 2026", event: "A Dirac-3 machine is sold, delivered, and installed at a global consulting firm." },
      { year: "August 2026", event: "The company reports Q2 revenue of 5.6 million dollars and completes the NHanced Semiconductors acquisition, launching Fab 2." },
    ],
    strengths: [
      "A large cash position of about 1.3 billion dollars, which gives it years of runway.",
      "A room-temperature approach that avoids cryogenic equipment.",
      "Its own TFLN foundry capability, which is rare among quantum companies.",
      "A growing photonics product business that supplies revenue while the quantum roadmap develops.",
    ],
    challenges: [
      "Revenue is still small at 5.6 million dollars for the quarter, with a gross loss of about 1.2 million dollars.",
      "Independent benchmarks that prove an advantage for Dirac-3 over classical optimization methods are limited.",
      "Multiple acquisitions create integration risk.",
      "The stock has been highly volatile, and the valuation reflects expectations well ahead of current sales.",
    ],
    whyItMatters: [
      "QCi illustrates a different route to quantum technology, one built on manufacturing and photonics. If TFLN chips can be mass-produced like semiconductors, then room-temperature quantum devices could become much easier to deploy, for example in telecommunications and sensing.",
      "It is also a reminder to look at where revenue actually comes from. In its case most revenue currently comes from photonics products and foundry services, not from selling general-purpose quantum computers, and an informed reader should judge the company on both its component business and its quantum roadmap.",
    ],
    funding: "Publicly traded (Nasdaq: QUBT); about 1.3 billion dollars in cash, equivalents, and investments at the end of June 2026",
    latestNews: [
      { title: "QCi reports Q2 2026 revenue of 5.6 million dollars, up from 61 thousand a year earlier, and completes the NHanced Semiconductors acquisition", date: "August 2026" },
      { title: "QCi sells, delivers, and installs a Dirac-3 optimization machine at a global consulting firm", date: "June 2026" },
      { title: "QCi completes the 110 million dollar all-cash acquisition of Luminar Semiconductor", date: "2026" },
      { title: "Yuping Huang becomes CEO of Quantum Computing Inc.", date: "January 2026" },
    ],
    faq: [
      { q: "What does Quantum Computing Inc. do?", a: "QCi builds photonic hardware, including a quantum optimization machine called Dirac-3, and runs a thin-film lithium niobate chip foundry. It also sells photonic components such as lasers and detectors." },
      { q: "Does QCi's computer need cooling?", a: "The company says its photonic machines are designed to work at room temperature, unlike superconducting quantum computers, though components such as some detectors may have their own requirements." },
      { q: "What is Dirac-3?", a: "Dirac-3 is QCi's optimization machine, which the company describes as using entropy quantum computing to solve hard optimization problems. Independent benchmark evidence of advantage over classical methods is limited." },
      { q: "Is QCi publicly traded?", a: "Yes. It trades on Nasdaq under the ticker QUBT. This page is not investment advice." },
      { q: "What is thin-film lithium niobate?", a: "It is a crystal material that can control light very quickly and efficiently when a voltage is applied. Chips made from it can be manufactured with semiconductor-like processes." },
    ],
  },
  {
    slug: "strangeworks",
    name: "Strangeworks",
    founded: "2018",
    ceo: "William Hurley, known as whurley (Founder and CEO)",
    headquarters: "Austin, Texas, USA (offices in Europe and Asia-Pacific)",
    technology: "Quantum and high-performance computing software platform (hardware-agnostic)",
    website: "strangeworks.com",
    lastUpdated: "September 30, 2026",
    summary: "Strangeworks runs a platform that gives users one place to access quantum computers, simulators, and optimization solvers from many providers. In 2025 it acquired the German optimization company Quantagonia and expanded into India.",
    overview: [
      "Strangeworks is an Austin, Texas software company that acts as a hub for quantum and high-performance computing. Instead of signing separate contracts with each hardware vendor, an organization can use the Strangeworks platform to reach a catalog of quantum processors, classical solvers, and simulators, and to combine them in workflows. The company describes this as access to classical, hybrid, quantum, and quantum-inspired resources through one interface.",
      "The business is aimed at enterprises, governments, and developers that want to experiment with quantum computing without committing to one hardware technology. Its backers include IBM, Hitachi Ventures, RTX Ventures, Lightspeed Venture Partners, and GreatPoint Ventures.",
    ],
    history: [
      "Strangeworks was founded in 2018 by William Hurley, known as whurley, a technology entrepreneur who earlier built and sold software companies, including to Accenture and Goldman Sachs. It began as a place to share quantum software and expanded into a commercial platform with a catalog of compute resources and partner relationships.",
      "In 2025 the company expanded its footprint to India and then, in August 2025, announced the acquisition of Quantagonia, a company founded in 2021 with offices in Frankfurt and Munich. Quantagonia contributed a solver-orchestration engine, called HybridSolver, that runs several solvers in parallel, and AI-powered decision tools that use language models to give non-experts a simple interface. Its co-founder and CEO Dirk Zechiel, who also co-founded Gurobi GmbH, took a senior leadership role at Strangeworks.",
    ],
    technologyDeepDive: [
      "A central difficulty for anyone adopting quantum computing is fragmentation. Every vendor has its own software development kit, access rules, and pricing, and the best machine for a task changes as hardware improves. An aggregation platform hides some of that complexity by providing one account, one way to submit jobs, and one place to track results.",
      "The Quantagonia acquisition shifts emphasis to optimization. In many business problems the best answer comes from combining several methods: a classical mathematical solver, a heuristic, a quantum-inspired algorithm, and, where it helps, a quantum computer. An orchestration engine runs these approaches in parallel on the same problem and returns the best result, which gives customers value even if quantum hardware is not yet the winner.",
      "A practical example shows why this matters. A logistics team might need to schedule thousands of deliveries. A classical solver can handle most of the problem, a quantum-inspired heuristic might find better answers for the hardest sub-problems, and a small quantum processor could be tested on a reduced version of the same task. An orchestration layer lets the team run all three on the same data, compare the results, and see where quantum hardware is competitive and where it is not. Having that comparison is more useful to a business than a claim of advantage from any single vendor.",
      "The platform also supports education, with tools for teaching and for building a quantum-ready workforce. Because Strangeworks does not make hardware itself, its success depends on the quality of its partnerships and on whether customers value a neutral layer rather than going directly to vendors or to cloud providers such as Amazon Braket and Microsoft Azure Quantum.",
    ],
    productsDetail: [
      { name: "Strangeworks platform", description: "A cloud platform with a catalog of quantum processors, simulators, and classical solvers from many providers, with job management and collaboration tools." },
      { name: "HybridSolver and optimization tools", description: "Solver orchestration technology acquired with Quantagonia, which runs several solvers in parallel and selects the best result for a given optimization problem." },
      { name: "AI-powered decision tools", description: "Software that uses language models to let non-technical users describe planning and scheduling problems and receive optimized solutions." },
      { name: "Enterprise and government programs", description: "Customized access, consulting, and integration for organizations in life sciences, finance, energy, aerospace, logistics, and manufacturing." },
      { name: "Regional expansion", description: "The company operates in the United States, Europe, and Asia-Pacific and expanded into India in 2025." },
    ],
    products: [
      "Strangeworks platform",
      "HybridSolver optimization engine",
      "AI-powered decision tools",
      "Enterprise and government programs",
    ],
    milestones: [
      { year: "2018", event: "Strangeworks is founded in Austin by William Hurley." },
      { year: "July 2025", event: "The company announces investment and expansion plans in India." },
      { year: "August 2025", event: "Strangeworks acquires Quantagonia, adding European operations and optimization technology." },
    ],
    strengths: [
      "A neutral, multi-vendor platform that does not depend on one hardware winner.",
      "Investors that include IBM, Hitachi Ventures, and RTX Ventures.",
      "An optimization focus that delivers value with classical and quantum-inspired methods today.",
      "Presence in the United States, Europe, Asia-Pacific, and India.",
    ],
    challenges: [
      "Cloud providers such as Amazon Braket and Azure Quantum already offer multi-vendor access.",
      "Revenue and customer numbers are not public, so the size of the business is unclear.",
      "Acquisitions require integration, and the value of orchestration depends on how well quantum hardware performs.",
      "The company is private and competes with larger software firms in optimization.",
    ],
    whyItMatters: [
      "Strangeworks represents the idea that quantum computing will be used as one tool among many. Real customers rarely want a single technology; they want the best answer to a business problem, and platforms that route work between classical, hybrid, and quantum resources reflect how adoption is likely to happen.",
      "It also helps to understand what an aggregator can and cannot do. It can make access simpler, lower the cost of trying different machines, and make comparisons fair. It cannot make a noisy machine more accurate, and it cannot create quantum advantage where none exists, so the value of the platform grows as the underlying hardware improves and as customers learn which problems are worth testing.",
      "For readers in India, its 2025 expansion into the country is relevant. It signals that Indian enterprises and research institutions are among the markets where multi-vendor quantum platforms expect growth.",
    ],
    funding: "Privately held; investors include IBM, Hitachi Ventures, RTX Ventures, Lightspeed Venture Partners, and GreatPoint Ventures",
    latestNews: [
      { title: "Strangeworks acquires Quantagonia to create a combined AI, optimization, and quantum computing company", date: "August 2025" },
      { title: "Strangeworks highlights investment in India and expansion into the region", date: "July 2025" },
    ],
    faq: [
      { q: "What does Strangeworks do?", a: "Strangeworks runs a platform that gives users access to quantum computers, simulators, and classical solvers from many providers through one interface." },
      { q: "Who founded Strangeworks?", a: "William Hurley, known as whurley, founded the company in 2018 and serves as its CEO." },
      { q: "What did Strangeworks acquire?", a: "In August 2025 it acquired Quantagonia, a German optimization company with offices in Frankfurt and Munich, which added solver-orchestration and AI decision tools." },
      { q: "Does Strangeworks make quantum computers?", a: "No. It is a software platform company that works with hardware from other providers." },
      { q: "Is Strangeworks publicly traded?", a: "No. It is privately held. This page is not investment advice." },
    ],
  },
  {
    slug: "zapata-ai",
    name: "Zapata AI (now Zapata Quantum)",
    founded: "2017",
    ceo: "Sumit Kapur (CEO of Zapata Quantum)",
    headquarters: "Boston, Massachusetts, USA",
    technology: "Quantum software and algorithms (hardware-agnostic), including the Orquestra workflow platform",
    website: "zapata.ai",
    lastUpdated: "September 30, 2026",
    summary: "Zapata was an early Harvard spin-out in quantum software that went public in 2024, pivoted to generative AI, and then ceased operations in October 2024. It has since re-emerged as Zapata Quantum, a restructured company rebuilding around quantum algorithms and applications.",
    overview: [
      "Zapata is a cautionary tale as well as a quantum software company. It was founded in 2017 to help large organizations explore quantum computing, and it built Orquestra, a platform for managing hybrid quantum and classical workflows across hardware from different vendors. In 2024 it shifted its marketing toward industrial generative AI, listed on Nasdaq, and then collapsed within months.",
      "The company that exists today is Zapata Quantum, Inc., traded over the counter under the ticker ZPTA, which emerged from a restructuring in 2025 with new capital and a renewed focus on quantum applications. This page covers both chapters because many sources still describe the earlier version of the company, and the older description of Zapata as an active generative AI business is out of date.",
    ],
    history: [
      "Zapata was founded in 2017 as a spin-out from Harvard University by researchers that include the chemist Alán Aspuru-Guzik and the quantum computing researcher Yudong Cao. Its early work built quantum algorithms for chemistry and finance, and the company took part in government programs, including DARPA work on estimating the resources needed to run quantum applications.",
      "In March 2024 Zapata went public by merging with the special purpose acquisition company Andretti Acquisition Corp, trading on Nasdaq as ZPTA, and presented itself as a leader in industrial generative AI. On October 7, 2024, its board approved a cessation of operations after the company was unable to meet a payment demanded under a forward purchase agreement with Sandia Investment Management of about 2.5 million dollars. Most employees were terminated, and Nasdaq moved to delist the shares.",
      "In the months that followed the company restructured, raised new capital, and converted debt into equity to avoid liquidating its assets, and it re-emerged in 2025 as Zapata Quantum, Inc. The restructuring preserved more than 50 patents. Sumit Kapur, previously its chief financial officer, became CEO. In August 2026 Zapata Quantum announced a partnership with QuEra on quantum application development, and it has said it intends to pursue an uplisting to a national exchange.",
    ],
    technologyDeepDive: [
      "Zapata's technology is software, not hardware. Orquestra is a workflow platform: it lets a team describe a computation that mixes classical steps, such as data preparation and optimization, with quantum steps, and then runs the pieces on whatever machines are best. Its algorithm libraries cover chemistry, finance, logistics, optimization, machine learning, and simulation.",
      "A useful way to think about the company is as an applications specialist. Companies that want to know which of their problems might benefit from quantum computing, and when, need people who can map problems to algorithms and estimate the hardware requirements. That is the gap Zapata Quantum says it addresses, in partnership with hardware makers such as QuEra, whose planned megaquop-class system for 2028 the company plans to support from the application side.",
      "The 2024 shutdown shows that quantum software is a difficult business. Customers are early, hardware cannot yet deliver clear advantages, and funding is hard to sustain through the long gap between research and revenue. Zapata Quantum will need to show revenue growth and manage financing risk, as the restructuring itself did not guarantee a commercial future.",
    ],
    productsDetail: [
      { name: "Orquestra", description: "A workflow orchestration platform for hybrid quantum and classical computing that is hardware-agnostic and aims to make it easier to run algorithms across providers." },
      { name: "Quantum algorithm libraries", description: "Algorithms for chemistry, finance, logistics, optimization, machine learning, and simulation, designed to be ready for future hardware." },
      { name: "Application development services", description: "Consulting that helps enterprises identify which quantum use cases matter, when they might become viable, and how to build the applications." },
      { name: "Intellectual property", description: "More than 50 patents preserved through the restructuring, covering work developed over seven years." },
    ],
    products: [
      "Orquestra workflow platform",
      "Quantum algorithm libraries",
      "Application development services",
    ],
    milestones: [
      { year: "2017", event: "Zapata Computing is founded as a Harvard spin-out." },
      { year: "March 2024", event: "The company goes public through a merger with Andretti Acquisition Corp and begins trading as ZPTA." },
      { year: "October 2024", event: "The board approves ceasing operations; most employees are terminated." },
      { year: "2025", event: "Zapata restructures, raises new capital, and re-emerges as Zapata Quantum, Inc." },
      { year: "August 2026", event: "Zapata Quantum announces a partnership with QuEra." },
    ],
    strengths: [
      "A history of quantum algorithm and workflow development going back to 2017.",
      "Patents and intellectual property retained after restructuring.",
      "A hardware-agnostic position that fits many partners.",
      "A lean restructured company with a clearer focus on quantum applications.",
    ],
    challenges: [
      "A near-total wind-down in 2024 damaged its operating base, customer relationships, and credibility.",
      "It trades over the counter rather than on a national exchange, which limits visibility and access to capital.",
      "Quantum software revenue is small across the industry, and competitors such as Classiq and Phasecraft are better funded.",
      "The company must demonstrate sustained revenue growth to justify its reorganization.",
    ],
    whyItMatters: [
      "Zapata's story is important context for anyone reading about quantum companies. It shows that being early, having famous founders, and listing on a stock exchange do not protect a company from running out of money. Reading the history of the whole sector, including failures, gives a more honest picture than reading only success stories.",
      "It is also a reminder to check the date on any company profile. Older articles describe Zapata AI as a generative AI company with large partners, which is no longer accurate, and information in this field goes out of date quickly.",
    ],
    funding: "Restructured in 2025; trades over the counter (OTCQB: ZPTA); has said it intends to seek an uplisting to a national exchange",
    latestNews: [
      { title: "Zapata Quantum and QuEra announce a partnership on quantum application development", date: "August 2026" },
      { title: "Zapata Quantum re-emerges after restructuring, with new financing and its patent portfolio intact", date: "2025" },
      { title: "Zapata Computing ceases operations after a dispute over a payment to Sandia Investment Management", date: "October 2024" },
    ],
    faq: [
      { q: "What happened to Zapata AI?", a: "Zapata AI's board approved a cessation of operations in October 2024 after it could not meet a payment of about 2.5 million dollars demanded under a financing agreement. It later restructured and re-emerged as Zapata Quantum, Inc." },
      { q: "Is Zapata still in business?", a: "Yes, as Zapata Quantum, Inc., a restructured company that trades over the counter under ZPTA and is rebuilding its operations. This page is not investment advice." },
      { q: "What is Orquestra?", a: "Orquestra is Zapata's platform for building and running workflows that combine classical and quantum computing steps across hardware from different providers." },
      { q: "Who runs Zapata Quantum?", a: "Sumit Kapur, previously the company's chief financial officer, is CEO of Zapata Quantum." },
      { q: "Did Zapata build quantum computers?", a: "No. It has always been a software and algorithms company that works with hardware built by others." },
    ],
  },
];

export function getCompanyBySlug(slug: string) {
  return companies.find((c) => c.slug === slug);
}
