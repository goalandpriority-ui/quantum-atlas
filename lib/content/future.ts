export type FutureCategory =
  | "hardware"
  | "error-correction"
  | "applications"
  | "security-networks"
  | "industry-policy"
  | "science-outlook";

export type FutureTopic = {
  slug: string;
  title: string;
  category: FutureCategory;
  horizon: string;
  confidence: "High" | "Medium" | "Low";
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  forecast: { label: string; value: string }[];
  signals: string[];
  risks: string[];
  faq: { q: string; a: string }[];
  references: string[];
  links: { label: string; href: string }[];
  words: number;
};

export const futureCategoryLabels: Record<FutureCategory, string> = {
  hardware: "Hardware and Scaling",
  "error-correction": "Error Correction",
  applications: "Applications",
  "security-networks": "Security and Networks",
  "industry-policy": "Industry, Policy, and People",
  "science-outlook": "Science and Outlook",
};

export const futureTopics: FutureTopic[] = [
  { slug: "quantum-internet-future", title: "The Quantum Internet", category: "security-networks", horizon: "2026 to 2040", confidence: "Medium", summary: "A quantum internet would distribute entanglement between distant devices, enabling provably secure communication, networked quantum computers, and linked sensors. Small prototypes exist today, but a working repeater chain is the hard milestone ahead.", sections: [
      { heading: "What a quantum internet is, and what it is not", paragraphs: [
          "A quantum internet is a network that can deliver entanglement and quantum states between distant nodes, alongside the ordinary internet that carries classical data. It would not replace the web or make downloads faster. Entanglement cannot carry a message by itself, because the receiver needs classical information to interpret what arrives, so a quantum network is always built on top of a classical one.",
          "The reason people want it is a short list of capabilities that classical networks cannot offer. The first is key distribution whose security rests on physics instead of unproven mathematical assumptions. The second is linking small quantum computers into a larger one, which may be the practical route to machines that no single cryostat or trap can hold. The third is combining distant sensors and clocks into one instrument with better precision than any of its parts, which matters for astronomy, geodesy, and navigation.",
          "Researchers describe progress with the six-stage framework of Wehner, Elkouss, and Hanson: trusted-repeater networks, prepare-and-measure networks, entanglement distribution networks, quantum memory networks, few-qubit fault-tolerant networks, and finally networks of quantum computers. Each stage unlocks new applications, and each depends on hardware that is harder to build than the stage before.",
        ] },
      { heading: "Where the technology stands in 2026", paragraphs: [
          "The first stage already exists commercially. China operates a quantum key distribution backbone of more than 2,000 kilometers between Beijing and Shanghai that relies on trusted relay nodes, and similar networks run in Europe, Japan, South Korea, and elsewhere. Satellites extend the range: the Micius satellite distributed entangled photons over about 1,200 kilometers and exchanged keys between ground stations in China and Austria in 2017, and Yin and coauthors reported entanglement-based key distribution over 1,120 kilometers in 2020.",
          "The research frontier is the third and fourth stages. In 2021, a Delft team linked three diamond nodes with entanglement swapping and teleportation, showing a memory qubit that holds one link while another is made. In 2024, a Harvard and AWS group reported entanglement between silicon-vacancy memories across about 35 kilometers of fiber in the Boston area. Commercial and municipal test networks, such as the one operated by EPB in Chattanooga, are using these ideas for testing and early services.",
          "On the standards side, the Internet Research Task Force published RFC 9340 in 2023, an architecture document for quantum internet principles, and the European Quantum Internet Alliance has set the goal of a prototype network connecting several European cities around the end of the decade. None of these systems yet beats direct transmission over long distances with a full repeater chain, which is the central missing result.",
        ] },
      { heading: "The hard problems", paragraphs: [
          "The core difficulty is loss. Light in telecom fiber loses about 0.2 decibels per kilometer, so the chance that a single photon survives falls by a factor of ten every 50 kilometers. A classical network amplifies signals along the way, but the no-cloning theorem forbids amplifying an unknown quantum state. Quantum repeaters, proposed by Briegel, Dür, Cirac, and Zoller in 1998, solve the problem by dividing a long link into short segments, storing entanglement in memories, and joining the segments with entanglement swapping and purification.",
          "A working repeater needs quantum memories that hold a state longer than the time it takes to generate entanglement over a segment, efficient interfaces between memories and photons, and high-fidelity Bell measurements. Each of those is demonstrated separately, with different platforms such as nitrogen-vacancy centers, trapped ions, neutral atoms, and rare-earth crystals, but no platform yet does all three well at the same time. A second obstacle is transduction. Superconducting quantum computers work with microwave photons, while long-distance links need telecom-wavelength light, and converting between them with high efficiency and low noise is an open engineering problem.",
          "Rates are a further concern. Early repeater links generate entanglement at rates of a few pairs per second, which is far below what applications such as continuous encryption need. Closing that gap requires multiplexing, many memories working in parallel, and better detectors, and the second and third generations of repeaters, which use error-correcting codes in place of purification, trade hardware complexity for speed.",
        ] },
      { heading: "Applications, in the order they are likely to arrive", paragraphs: [
          "Quantum key distribution is the first application and is already deployed, though agencies such as the NSA and the UK National Cyber Security Centre prefer post-quantum cryptography for most uses and see QKD as suitable for special high-assurance links. We expect QKD networks to keep growing mainly in government and critical infrastructure, and in countries that invest heavily in them, while the general internet moves to post-quantum algorithms.",
          "The applications that depend on entanglement distribution and memories come next. These include blind quantum computing, in which a client runs a computation on a remote quantum server without revealing it, quantum clock synchronization, and secure delegated computation. They are interesting but narrow, and their commercial pull depends on the availability of cloud quantum computers that clients want to use privately.",
          "The largest long-term prize is distributed quantum computing. If processors with a few hundred or thousand logical qubits cannot be built in a single device, networking modules may be the way to scale, as proposed in architectures from IBM, IonQ, and others. This requires entanglement links between modules with high fidelity and rates comparable to the internal gate speed, a much higher bar than key distribution, and it is why interconnects and transduction are active research areas in every platform.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect steady progress along two tracks. On the first track, trusted-node QKD networks and satellite links will expand through the late 2020s, driven by government programs in China, the European Union, India, and the United States. On the second track, laboratory demonstrations will move from three-node networks toward repeater chains with several nodes, with the first demonstrations of entanglement distribution that beats the direct-transmission limit over 100 kilometers or more likely in the early 2030s.",
          "A continental-scale quantum internet with on-demand entanglement for ordinary users is, in our view, unlikely before 2040, and it may never be a consumer product. The more likely outcome is a set of specialized networks: secure government links, interconnects inside quantum data centers, and sensor networks for science. That is still a significant result, but it is not the picture of a second internet that popular accounts sometimes give.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More metropolitan QKD and test networks; new satellite launches; three- to five-node laboratory networks with memories." },
      { label: "2029 to 2032", value: "First repeater demonstrations that beat direct transmission over 100 km or more; prototype regional networks, including the European target." },
      { label: "2033 to 2040", value: "Specialized networks for secure government links, quantum data center interconnects, and sensor arrays; global coverage remains partial." },
      { label: "After 2040", value: "A general-purpose quantum internet is possible but uncertain and depends on fault-tolerant repeaters." },
    ], signals: [
      "A published repeater experiment that exceeds the direct-transmission rate over at least 100 km.",
      "Memories with coherence times of seconds or longer combined with fiber-compatible photon interfaces.",
      "Efficient microwave-to-optical transducers, with conversion efficiencies above about 50 percent and low added noise.",
      "Entanglement generation rates above kilohertz between nodes.",
    ], risks: [
      "Post-quantum cryptography may meet most security needs, which would shrink the demand for quantum links.",
      "Transduction and memory efficiency may improve more slowly than hoped.",
      "Fault-tolerant quantum computers may arrive in single large modules, reducing the need for networking them.",
      "Standards, regulation, and costs may confine quantum networks to a few countries.",
    ], faq: [
      { q: "Will the quantum internet replace the internet?", a: "No. It will run alongside the classical internet, which carries the classical control information that every quantum protocol needs." },
      { q: "Can entanglement send messages faster than light?", a: "No. Entanglement correlations only become useful after classical information is compared, so no signal travels faster than light." },
      { q: "When will ordinary people use it?", a: "Probably indirectly, through services secured or enabled by quantum links, and not through a consumer quantum connection." },
    ], references: [
      "Kimble, H. J. (2008). The quantum internet. Nature, 453, 1023-1030.",
      "Wehner, S., Elkouss, D., & Hanson, R. (2018). Quantum internet: A vision for the road ahead. Science, 362(6412), eaam9288.",
      "Azuma, K., et al. (2023). Quantum repeaters: From quantum networks to the quantum internet. Reviews of Modern Physics, 95, 045006.",
      "Briegel, H.-J., Dür, W., Cirac, J. I., & Zoller, P. (1998). Quantum repeaters: The role of imperfect local operations in quantum communication. Physical Review Letters, 81, 5932-5935.",
      "Pompili, M., et al. (2021). Realization of a multinode quantum network of remote solid-state qubits. Science, 372, 259-264.",
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
      "Yin, J., et al. (2020). Entanglement-based secure quantum cryptography over 1,120 kilometres. Nature, 582, 501-505.",
      "Kozlowski, W., Wehner, S., Van Meter, R., et al. (2023). Architectural principles for a quantum internet. IETF RFC 9340.",
      "Pirandola, S., et al. (2020). Advances in quantum cryptography. Advances in Optics and Photonics, 12(4), 1012-1236.",
    ], links: [
      { label: "Paper: Quantum Internet: A Vision for the Road Ahead", href: "/research/wehner-quantum-internet-vision-2018" },
      { label: "Paper: Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication", href: "/research/briegel-quantum-repeaters-1998" },
      { label: "Paper: Realization of a Multinode Quantum Network of Remote Solid-State Qubits", href: "/research/pompili-multinode-quantum-network-2021" },
      { label: "Term: Quantum Internet", href: "/dictionary/quantum-internet" },
      { label: "Term: Quantum Repeater", href: "/dictionary/quantum-repeater" },
      { label: "Term: Entanglement Swapping", href: "/dictionary/entanglement-swapping" },
    ], words: 1272 },
  { slug: "quantum-ai-future", title: "Quantum AI: Hype, Hope, and the Real Overlap", category: "applications", horizon: "2026 to 2035", confidence: "Medium", summary: "Quantum AI means two different things: quantum computers speeding up machine learning, and AI helping to build quantum computers. The second is already working, while the first has so far failed to show a clear practical advantage.", sections: [
      { heading: "Two meanings of quantum AI", paragraphs: [
          "The phrase quantum AI is used for at least four combinations of classical or quantum data with classical or quantum algorithms. The most discussed is using a quantum computer to process classical data in a machine learning pipeline, for example with quantum kernels, quantum neural networks, or quantum linear algebra subroutines. A second is using classical machine learning to analyze data from quantum experiments, such as predicting properties of quantum states from measurements. A third is using quantum computers to study quantum data directly. The fourth, which is increasingly important in practice, is using artificial intelligence as a tool for building and operating quantum computers.",
          "Mixing these meanings creates most of the confusion. News stories that say quantum computers will train AI models faster usually refer to the first meaning, where the evidence is weak. Stories about AI improving quantum hardware refer to the fourth meaning, where results are real and recent.",
        ] },
      { heading: "What the evidence says about quantum speedups for machine learning", paragraphs: [
          "Early proposals promised exponential speedups for tasks such as recommendation systems, principal component analysis, and support vector machines. Ewin Tang's 2018 result showed that a classical algorithm with comparable data access matches the quantum recommendation algorithm, and follow-up work dequantized several related proposals. The pattern is that apparent exponential advantages often come from assumptions about how data is stored and read, which a classical algorithm can also exploit.",
          "Loading classical data into a quantum state is itself costly. A dataset of N numbers needs on the order of N operations to be encoded, which can erase the gain of a fast quantum routine. Variational quantum models face a second problem, barren plateaus, in which gradients vanish exponentially as the number of qubits grows for random or global circuits. In 2021 Huang and coauthors showed that classical models with access to training data can often match quantum models, and a 2024 benchmark by Bowles, Ahmed, and Schuld found that simple classical models generally outperformed the quantum models tested on standard tasks.",
          "None of this proves that quantum machine learning is impossible. It shows that on classical datasets, a clear advantage has not been found, and that the burden of proof is on quantum proposals. The cases that remain open are those in which the data is quantum in origin, or in which the learning task has a structure that classical methods cannot use, as in the rigorous separation by Liu, Arunachalam, and Temme in 2021 for a task built on the discrete logarithm problem.",
        ] },
      { heading: "Where quantum and AI do overlap in practice", paragraphs: [
          "The strongest overlap today is AI for quantum computing. Google DeepMind and Google Quantum AI trained a neural network decoder, AlphaQubit, that made fewer errors than the best conventional decoders on real surface-code data from a Sycamore processor. Reinforcement learning was used to design the control sequences for a GKP qubit that passed break-even in 2023. Machine learning is used to calibrate qubits, to discover better circuits and error-correcting codes, and to compile algorithms for specific hardware.",
          "A second overlap is learning from quantum experiments. Huang and coauthors showed in 2022 that a quantum computer with quantum memory can learn certain properties of physical systems with exponentially fewer experiments than a classical learner that can only measure and record results. If sensors and simulators produce quantum data in the future, such quantum learning may become practical for materials and physics research.",
          "A third is energy. Training large AI models consumes large amounts of electricity, and some proponents hope that quantum computers might help. The evidence for this is thin, since quantum computers are not good at the bulk linear algebra that dominates deep learning, and their own energy needs, mostly for cooling and control, are not small.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect AI to become a standard component of the quantum software stack by 2030, including neural decoders for error correction, learned calibration, and AI-assisted compilers. We are skeptical that quantum computers will accelerate mainstream deep learning in the next decade. If a quantum advantage in machine learning appears, we expect it first in scientific tasks involving quantum data, such as learning properties of materials from quantum simulators, not in image or language models.",
          "Readers should treat claims of quantum AI products with caution. A system described as quantum-enhanced AI may be a classical model with a small quantum circuit that can be replaced by a classical function without loss. Asking for a comparison against a tuned classical baseline on the same data is the most useful single test.",
        ] },
      { heading: "Practical guidance for readers and builders", paragraphs: [
          "If you are evaluating a quantum machine learning claim, start by asking what the classical baseline was and whether it was tuned with the same effort as the quantum model. Many published comparisons use weak baselines, small datasets, or a handful of features, and these choices can hide the fact that a simple logistic regression or a gradient-boosted tree does as well. Ask also whether the dataset was reduced to a size that fits on a few qubits, since that reduction often removes the difficulty that would make a quantum model interesting.",
          "If you are building skills, the most useful investments are linear algebra, probability, and the basics of quantum circuits and error correction, together with ordinary machine learning practice. Practical work today often involves classical machine learning applied to quantum problems, such as decoders and calibration, and that work is valuable regardless of how the debate on quantum speedups ends. Tools such as PennyLane, Qiskit, and Cirq make it easy to experiment, and simulators are enough for learning.",
          "For managers, the useful stance is curiosity without commitment. Small teams exploring both the AI-for-quantum and quantum-for-AI directions, with clear stopping criteria, are a reasonable investment. Large commitments based on claims of quantum-accelerated deep learning are not supported by the evidence in 2026.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Neural decoders and learned control appear in vendor stacks; benchmarks continue to show classical models matching quantum ones on standard datasets." },
      { label: "2029 to 2032", value: "AI-designed codes and compilers cut quantum overhead; first quantum learning demonstrations on quantum data at moderate scale." },
      { label: "2033 to 2040", value: "Possible advantage in learning from quantum experiments; mainstream deep learning remains classical." },
    ], signals: [
      "Peer-reviewed benchmarks in which quantum models beat tuned classical baselines on the same data.",
      "Real-time neural decoders running at the speed of the hardware.",
      "Quantum memory and sensors that produce quantum data for learning tasks.",
      "Rigorous separations that survive dequantization attempts.",
    ], risks: [
      "A new algorithm might show a practical learning advantage sooner than expected.",
      "Classical methods might keep improving, so the bar for quantum models keeps rising.",
      "Hardware may not reach the scale at which a quantum learning advantage appears.",
    ], faq: [
      { q: "Will quantum computers make ChatGPT-style models faster?", a: "There is no evidence for it. Training large language models is dominated by large-scale classical linear algebra that GPUs do very well." },
      { q: "Is AI helping quantum computing?", a: "Yes. Neural decoders, reinforcement learning control, and automated calibration are already used in research and are likely to be standard." },
      { q: "What is dequantization?", a: "The discovery of a classical algorithm that matches a claimed quantum speedup under the same data-access assumptions." },
    ], references: [
      "Biamonte, J., et al. (2017). Quantum machine learning. Nature, 549, 195-202.",
      "Cerezo, M., et al. (2022). Challenges and opportunities in quantum machine learning. Nature Computational Science, 2, 567-576.",
      "Tang, E. (2019). A quantum-inspired classical algorithm for recommendation systems. STOC '19, 217-228.",
      "Huang, H.-Y., et al. (2021). Power of data in quantum machine learning. Nature Communications, 12, 2631.",
      "Huang, H.-Y., et al. (2022). Quantum advantage in learning from experiments. Science, 376(6598), 1182-1186.",
      "Bowles, J., Ahmed, S., & Schuld, M. (2024). Better than classical? The subtle art of benchmarking quantum machine learning models. arXiv:2403.07059.",
      "Bausch, J., et al. (2024). Learning high-accuracy error decoding for quantum processors. Nature, 635, 834-840.",
      "Sivak, V. V., et al. (2023). Real-time quantum error correction beyond break-even. Nature, 616, 50-55.",
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
    ], links: [
      { label: "Paper: A Quantum-Inspired Classical Algorithm for Recommendation Systems", href: "/research/tang-quantum-inspired-recommendation-2019" },
      { label: "Paper: Power of Data in Quantum Machine Learning", href: "/research/huang-power-of-data-qml-2021" },
      { label: "Paper: Learning High-Accuracy Error Decoding for Quantum Processors", href: "/research/bausch-alphaqubit-decoder-2024" },
      { label: "Term: Quantum Machine Learning (QML)", href: "/dictionary/quantum-machine-learning" },
      { label: "Industry: Quantum Computing, AI, and Data Centers", href: "/industries/artificial-intelligence-data-centers" },
    ], words: 1155 },
  { slug: "quantum-medicine-future", title: "Quantum Computing in Medicine and Drug Discovery", category: "applications", horizon: "2028 to 2040", confidence: "Medium", summary: "Quantum computers may eventually help design drugs by calculating the quantum chemistry of molecules that classical methods handle poorly. The nearer-term medical impact is more likely to come from quantum sensors than from quantum drug design.", sections: [
      { heading: "Why drug discovery attracts quantum computing", paragraphs: [
          "Drugs act through chemical interactions, and chemistry is quantum mechanics. Predicting how strongly a candidate molecule binds to a protein, how a reaction proceeds, or how a metal-containing enzyme behaves requires solving the electronic structure problem. For small molecules and many everyday cases, classical methods such as density functional theory and coupled cluster are accurate enough and fast. For molecules with strongly correlated electrons, such as those with transition metals, they can be unreliable, and exact methods scale exponentially with system size.",
          "That gap is the opening for quantum computers. In principle, a fault-tolerant machine running quantum phase estimation can compute ground-state energies of such molecules to chemical accuracy, about one kilocalorie per mole, with a cost that grows only polynomially. The proposal goes back to Aspuru-Guzik and coauthors in 2005, and the review by Cao and coauthors in 2018 laid out where drug discovery might benefit.",
        ] },
      { heading: "What the resource estimates say", paragraphs: [
          "Resource estimates are the best guide to timing. For the nitrogenase cofactor FeMoco, a standard benchmark, the 2017 estimate by Reiher and coauthors implied an enormous gate count, and the 2021 estimate by Lee and coauthors lowered it to about four million physical qubits running for several days, assuming a surface-code machine with 0.1 percent physical error rates. Estimates for cytochrome P450, an enzyme central to drug metabolism, are of similar magnitude.",
          "These are machines far beyond today's hardware, which has dozens of logical qubits at best and physical error rates around 0.1 to 0.5 percent. The estimates are also moving down as algorithms improve, with several factor-of-ten reductions in the past decade, which is why timelines are uncertain. If the improvements continue and hardware roadmaps are met, chemistry calculations at this scale could be possible in the early to mid 2030s. If not, they could slip by a decade.",
        ] },
      { heading: "What quantum computers will not do for medicine", paragraphs: [
          "A drug is not discovered by computing one energy. The pipeline includes target identification, screening, optimizing properties such as solubility and toxicity, preclinical studies, and clinical trials, and most of the cost and failure is in biology, not in the accuracy of a binding energy. AlphaFold and related artificial intelligence systems have already transformed protein structure prediction without any quantum computer, and machine-learned potentials are improving fast for small molecules.",
          "This means that quantum computers will compete with strong and improving classical methods. The advantage is most plausible for specific high-value subproblems: metalloenzymes, photochemistry, covalent inhibitors, and cases in which classical approximations disagree with each other. Claims that quantum computers will speed up clinical trial design or genome analysis in general are not supported by current algorithms.",
        ] },
      { heading: "Where quantum technology helps sooner: sensing and imaging", paragraphs: [
          "The nearest-term medical benefits come from quantum sensors. Optically pumped magnetometers now allow wearable magnetoencephalography, in which sensors sit in a helmet, so patients can move naturally, instead of sitting in a fixed cryogenic scanner. Boto and coauthors showed this in Nature in 2018, and commercial systems are in research hospitals. Diamond nitrogen-vacancy sensors can measure magnetic fields and temperatures at the scale of single cells, with applications in research on neurons and cancer biology.",
          "Quantum-enhanced imaging methods, such as squeezed-light microscopy, can reduce the light dose needed to image delicate samples. Atomic clocks and sensors support better navigation and timing for hospital networks and devices, though that is an indirect benefit. We expect these sensing applications to mature in the second half of the 2020s, long before quantum chemistry on fault-tolerant machines.",
        ] },
      { heading: "A realistic timeline for one drug program", paragraphs: [
          "It helps to follow a hypothetical program. Suppose a company wants to design an inhibitor for a metal-containing enzyme, where classical methods give conflicting binding energies. In 2026 the team would run classical calculations, machine-learned potentials, and experiments, and perhaps a small quantum chemistry pilot to learn the tools. In the early 2030s, if a fault-tolerant machine with a few thousand logical qubits is available through a cloud provider, the team might compute reference energies for a few key intermediates, to settle which classical method to trust.",
          "The quantum calculation would then be one input to a long pipeline. Medicinal chemists would synthesize compounds, biologists would test them in cells and animals, and clinicians would run trials, which take most of a decade and cost hundreds of millions of dollars. Even a perfect energy calculation would reduce risk at one step. This is why we expect quantum computing to become one more tool in computational chemistry, valuable but not revolutionary, and why the economic value is probably concentrated in a small number of difficult targets.",
        ] },
      { heading: "What would change this forecast", paragraphs: [
          "Several developments would make us more optimistic. A sustained drop in resource estimates for chemistry, such as an order-of-magnitude reduction in qubits or gate counts, would bring the timeline forward. Experimental logical qubits at error rates near one in a million would show that deep circuits are feasible. A convincing case in which a quantum calculation gives a different and experimentally confirmed answer than the best classical methods would be the strongest evidence of all.",
          "Other developments would make us more pessimistic: classical methods that handle strongly correlated molecules at lower cost, such as improved neural-network wavefunctions and tensor network methods, would erode the target. Delays in error-corrected hardware would push the timeline back. We hold the forecast with medium confidence because both kinds of surprises have happened in this field.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "For the next five years, pharmaceutical companies will continue to run pilots with quantum computers mainly to build expertise, to test algorithms, and to secure partnerships. A verified quantum advantage in a drug discovery workflow is unlikely before the early 2030s, and the first clear cases will likely be narrow chemistry problems instead of whole pipelines.",
          "Patients will see the effects indirectly and late: faster and more accurate computational chemistry in the design of some compounds, sensors in diagnostics, and stronger security for health data under post-quantum cryptography. Anyone who claims that quantum computers will cure diseases soon is selling a story, not a roadmap.",
        ] },
    ], forecast: [
      { label: "2026 to 2029", value: "Pilots and partnerships; wearable quantum magnetometers expand in research hospitals; small-molecule demonstrations on quantum hardware remain classical-solvable." },
      { label: "2030 to 2034", value: "First fault-tolerant chemistry calculations on active spaces beyond classical exact methods; narrow advantage on metalloenzyme or photochemistry problems is possible." },
      { label: "2035 to 2040", value: "Quantum chemistry as a routine tool in some pharma workflows if hardware roadmaps hold; sensing in clinical diagnostics." },
    ], signals: [
      "Resource estimates for P450 or FeMoco falling below one million physical qubits and a few days.",
      "Demonstrations of logical qubit gates at error rates near 10^-6.",
      "Independent classical groups failing to match a quantum chemistry result.",
      "Regulatory acceptance of wearable quantum sensors in clinical use.",
    ], risks: [
      "Classical machine-learned potentials may close the accuracy gap for most drug-relevant molecules.",
      "Hardware scaling may take longer than roadmaps suggest.",
      "The bottleneck in drug discovery is mostly biological, so better chemistry may not change outcomes much.",
    ], faq: [
      { q: "Can a quantum computer find a new drug today?", a: "No. Current devices simulate only very small molecules that classical computers handle exactly." },
      { q: "Which part of drug discovery could quantum computing improve?", a: "Accurate energy calculations for molecules with strongly correlated electrons, such as metal-containing enzymes." },
      { q: "Is quantum sensing in medicine real?", a: "Yes. Wearable magnetometers for brain imaging are already used in research and are moving toward clinical use." },
    ], references: [
      "Aspuru-Guzik, A., Dutoi, A. D., Love, P. J., & Head-Gordon, M. (2005). Simulated quantum computation of molecular energies. Science, 309, 1704-1707.",
      "Cao, Y., Romero, J., & Aspuru-Guzik, A. (2018). Potential of quantum computing for drug discovery. IBM Journal of Research and Development, 62(6), 6:1-6:20.",
      "Reiher, M., Wiebe, N., Svore, K. M., Wecker, D., & Troyer, M. (2017). Elucidating reaction mechanisms on quantum computers. PNAS, 114, 7555-7560.",
      "Lee, J., et al. (2021). Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum, 2, 030305.",
      "McArdle, S., Endo, S., Aspuru-Guzik, A., Benjamin, S. C., & Yuan, X. (2020). Quantum computational chemistry. Reviews of Modern Physics, 92, 015003.",
      "Jumper, J., et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature, 596, 583-589.",
      "Boto, E., et al. (2018). Moving magnetoencephalography towards real-world applications with a wearable system. Nature, 555, 657-661.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
    ], links: [
      { label: "Paper: Elucidating Reaction Mechanisms on Quantum Computers", href: "/research/reiher-reaction-mechanisms-quantum-computers-2017" },
      { label: "Paper: Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction", href: "/research/lee-tensor-hypercontraction-chemistry-2021" },
      { label: "Paper: Simulated Quantum Computation of Molecular Energies", href: "/research/aspuru-guzik-molecular-energies-2005" },
      { label: "Industry: Quantum Computing for Pharmaceuticals and Drug Discovery", href: "/industries/pharmaceuticals" },
      { label: "Industry: Quantum Computing for Biotechnology and Genomics", href: "/industries/biotechnology-genomics" },
      { label: "Term: Quantum Chemistry Simulation", href: "/dictionary/quantum-chemistry-simulation" },
    ], words: 1180 },
  { slug: "quantum-cybersecurity-future", title: "Quantum Computing and the Future of Cybersecurity", category: "security-networks", horizon: "2026 to 2038", confidence: "High", summary: "A large quantum computer would break the public-key cryptography that secures the internet. The migration to post-quantum algorithms is already underway with official deadlines in 2030 and 2035, and the main risk is that organizations start too late.", sections: [
      { heading: "What is at risk and what is not", paragraphs: [
          "Shor's algorithm lets a quantum computer factor large numbers and compute discrete logarithms, which breaks RSA, Diffie-Hellman, and elliptic-curve cryptography. These systems protect web connections, software updates, digital signatures, VPNs, cryptocurrencies, and much of the identity infrastructure of the internet. Symmetric ciphers such as AES-256 and hash functions such as SHA-256 are much less affected: Grover's algorithm gives only a quadratic speedup against them, so doubling key lengths restores the margin.",
          "Two threats must be separated. The first is a future attack, once a cryptographically relevant quantum computer exists, against signatures and live connections. The second is already active: harvest now, decrypt later. An adversary can record encrypted traffic today and decrypt it years later. Anything that must stay confidential for decades, such as state secrets, health records, and trade secrets, is exposed to that second threat even though no capable quantum computer exists yet.",
        ] },
      { heading: "How close is a cryptographically relevant machine?", paragraphs: [
          "No one knows, and estimates have fallen steadily. In 2012, Fowler and coauthors estimated about a billion physical qubits to factor a 2,000-bit number. In 2019, Gidney and Ekerå estimated 20 million noisy qubits and eight hours for RSA-2048. In 2025, Gidney reduced the estimate to fewer than one million noisy qubits and under a week, using better arithmetic, denser error-correcting layouts, and magic state cultivation. Each reduction came from software and architecture, not hardware.",
          "Today's machines are far from that scale. The best devices have on the order of hundreds to a few thousand physical qubits, dozens of error-detected or error-corrected logical qubits, and logical error rates well above what a billion-gate algorithm needs. Public roadmaps, such as IBM's plan for a 200-logical-qubit machine in 2029 and a larger one in 2033, reach scales that are still below RSA-2048, but not by a margin that allows comfort.",
          "The annual expert survey by the Global Risk Institute, the Quantum Threat Timeline Report, asks researchers for probabilities. Responses vary widely, and a substantial share of experts assign a meaningful chance to a cryptographically relevant machine within a decade. Our own view is that a break before 2030 is unlikely, in the low single-digit percent range, and that a break by the mid 2030s is plausible but far from certain. Those numbers are judgments, and the point of policy is to make the exact date irrelevant.",
        ] },
      { heading: "The official migration timeline", paragraphs: [
          "Governments have set dates. NIST published its first post-quantum standards in August 2024: FIPS 203 for ML-KEM key establishment, FIPS 204 for ML-DSA signatures, and FIPS 205 for SLH-DSA hash-based signatures, and selected HQC in March 2025 as a backup key-establishment method. NIST's transition guidance proposes deprecating quantum-vulnerable algorithms with 112 bits of security around 2030 and disallowing them by 2035. The US National Security Agency's CNSA 2.0 sets earlier dates for national security systems, with exclusive use of its algorithms by 2033 for most categories. The UK National Cyber Security Centre has milestones for 2028, 2031, and 2035, and the European Union has published a coordinated roadmap with a similar structure.",
          "Industry is moving first on key exchange, because of harvest-now-decrypt-later. Google Chrome enabled a hybrid key exchange combining X25519 with the lattice scheme Kyber by default in 2024, and later switched to the standardized ML-KEM, with Cloudflare and others following. A large share of web traffic is now protected by such hybrids. Signatures and certificates are harder, because post-quantum signatures are much larger than elliptic-curve ones, and public-key infrastructure has many dependencies.",
        ] },
      { heading: "What organizations should do", paragraphs: [
          "The practical advice from Michele Mosca's framework is simple. If the time that data must stay secret, plus the time needed to migrate, exceeds the time until a quantum computer can break current cryptography, you are already late. The steps are to inventory where cryptography is used, rank systems by data lifetime, build crypto-agility so that algorithms can be swapped without redesign, and deploy hybrid schemes, which combine a classical and a post-quantum algorithm, so that a failure of either does not break security.",
          "The lesson of SIKE is worth keeping in mind. In 2022 Castryck and Decru broke the isogeny-based SIKE scheme, a NIST fourth-round candidate, with a classical attack that took about an hour on a laptop. The scheme that was broken was not a standard, but the episode shows why hybrids and continued scrutiny are sensible. The lattice-based standards have been studied intensively, but no one can prove them secure.",
          "Quantum key distribution has a limited role. It needs special hardware, point-to-point links or trusted nodes, and still needs authentication, so agencies recommend post-quantum cryptography for general use and consider QKD for specific links.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "The cybersecurity story is the one area of quantum technology where we have high confidence in the direction, because the response does not depend on a quantum computer being built. Migration will occur because regulators require it, and the cost of being early is low compared with the cost of being late. By 2030, most major web, cloud, and messaging systems will use post-quantum key exchange. By 2035, signatures and certificates for the public web and government systems will mostly be migrated, with long tails in embedded devices, industrial systems, and legacy software.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Hybrid post-quantum key exchange becomes the default on major browsers and cloud services; certificate and signature migration plans published; compliance deadlines begin." },
      { label: "2029 to 2031", value: "Federal and regulated sectors complete high-priority migration; first deprecation of RSA-2048 and P-256 for new deployments." },
      { label: "2032 to 2035", value: "Most public-key infrastructure migrated; legacy and embedded systems lag; RSA and elliptic curves disallowed in regulated settings by 2035." },
      { label: "2035 onward", value: "A cryptographically relevant quantum computer is plausible; organizations that migrated are unaffected." },
    ], signals: [
      "Further reductions in published resource estimates for RSA-2048 and elliptic-curve breaking.",
      "Logical qubit counts above a few hundred with logical error rates near 10^-6 or lower.",
      "New cryptanalytic attacks on lattice-based schemes.",
      "Adoption rates of post-quantum certificates and signatures on the public web.",
    ], risks: [
      "A new algorithm or architecture could bring the date forward sharply.",
      "A weakness in lattice cryptography could require another migration.",
      "Delays in embedded and industrial systems could leave long-lived vulnerabilities.",
      "Overconfidence that QKD alone solves the problem.",
    ], faq: [
      { q: "Is my data safe today?", a: "Data protected by post-quantum or symmetric encryption is safe. Data encrypted only with RSA or elliptic-curve key exchange could be recorded now and decrypted later." },
      { q: "Should I switch to AES-256?", a: "AES-256 is already considered quantum-resistant for symmetric encryption. The main change is in key exchange and signatures." },
      { q: "Will quantum computers break Bitcoin?", a: "Bitcoin's signatures use elliptic curves that Shor's algorithm would break, so the network would need a protocol change to a post-quantum scheme." },
    ], references: [
      "Mosca, M. (2018). Cybersecurity in an era with quantum computers: Will we be ready? IEEE Security and Privacy, 16(5), 38-41.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum, 5, 433.",
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205: Module-lattice-based key-encapsulation, module-lattice-based digital signature, and stateless hash-based digital signature standards.",
      "National Institute of Standards and Technology (2024). NIST IR 8547 (initial public draft): Transition to post-quantum cryptography standards.",
      "National Security Agency (2022). Commercial National Security Algorithm Suite 2.0 advisory and FAQ.",
      "UK National Cyber Security Centre (2025). Timelines for migration to post-quantum cryptography.",
      "Mosca, M., & Piani, M. Quantum threat timeline report. Global Risk Institute (annual).",
      "Castryck, W., & Decru, T. (2023). An efficient key recovery attack on SIDH. EUROCRYPT 2023, LNCS 14008, 423-447.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: An Efficient Key Recovery Attack on SIDH", href: "/research/castryck-decru-sidh-break-2022" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Industry: Quantum Computing for Cybersecurity", href: "/industries/cybersecurity" },
    ], words: 1082 },
  { slug: "quantum-finance-future", title: "Quantum Computing in Finance", category: "applications", horizon: "2028 to 2040", confidence: "Low", summary: "Banks are among the most active early adopters of quantum computing, but the resource estimates for useful financial applications are large. The nearest real impacts are post-quantum security and certified randomness, not trading advantages.", sections: [
      { heading: "Why finance is interested", paragraphs: [
          "Financial institutions run some of the most compute-hungry workloads in business. They price complex derivatives with Monte Carlo simulation, estimate risk across portfolios, optimize allocations under constraints, detect fraud, and settle transactions. A quantum speedup of even a modest size could matter if it reduced the run time of a calculation that runs overnight, or allowed a more accurate model within the same time budget.",
          "Banks also have a strong defensive motive, since the public-key cryptography that secures payments and records is vulnerable to Shor's algorithm. As a result, many banks have quantum teams that cover both opportunities and risks, and they have formed partnerships with IBM, Quantinuum, IonQ, D-Wave, and others. JPMorgan Chase, Goldman Sachs, HSBC, Wells Fargo, and BBVA have published work in the area.",
        ] },
      { heading: "What the algorithms offer, and the catch", paragraphs: [
          "The best-known application is Monte Carlo estimation. Quantum amplitude estimation, developed by Brassard, Høyer, Mosca, and Tapp in 2002, estimates an expected value with error that falls as one over the number of runs, instead of one over the square root, a quadratic speedup. This applies to derivative pricing, credit valuation adjustments, and value at risk.",
          "The catch is the size of the quadratic gain once error correction is included. Babbush and coauthors argued in 2021 that quadratic speedups are hard to turn into practical advantage on error-corrected machines, because logical quantum operations are much slower and costlier than classical ones. The most detailed study for finance, by Chakrabarti and coauthors in 2021, designed fault-tolerant circuits for pricing an autocallable and a target accrual redemption forward, and found that they would need about 8,000 logical qubits and a T-depth of tens of millions, with a logical clock rate in the megahertz range to be competitive. That is far beyond today's roadmaps for logical clock speeds.",
          "Portfolio optimization and other combinatorial problems are often mapped to QAOA or to quantum annealers. Here the classical competition is strong, since specialized solvers and heuristics handle large instances well, and no convincing advantage has been shown for realistic financial portfolios. Quantum machine learning for fraud detection or credit scoring faces the data-loading and benchmarking problems discussed elsewhere in this series.",
        ] },
      { heading: "Recent claims and how to read them", paragraphs: [
          "Several recent announcements illustrate the pattern. In 2025, HSBC and IBM reported an improvement of about 34 percent in predicting whether a bond trade would be filled at a quoted price, using a hybrid workflow on IBM hardware. Such results are interesting, but independent experts note that the improvement is measured against a specific classical baseline, that the task is a prediction problem in which noise in the data limits any gain, and that the role of the quantum part is hard to isolate. We treat these as evidence of progress in hybrid workflows, not proof of advantage.",
          "A different example is certified randomness. In 2025, JPMorgan Chase, Quantinuum, and national laboratories published a protocol in which a 56-qubit trapped-ion computer generated random bits whose randomness can be verified with classical supercomputers. The application is narrow, but it is verifiable, which most quantum finance results are not.",
        ] },
      { heading: "The nearest real impact: security and compliance", paragraphs: [
          "For financial institutions, the clearest near-term quantum effect is the post-quantum migration. Payment systems, card networks, interbank messaging, digital signatures on contracts, and archives with long retention periods all depend on public-key cryptography. Regulators in the United States, Europe, and the United Kingdom have issued guidance, and banks are inventorying their systems and testing hybrid key exchange. The migration is large and slow, and it is mandatory. It is likely to consume more budget than any quantum computing pilot in this decade.",
        ] },
      { heading: "A checklist for evaluating quantum finance claims", paragraphs: [
          "A few questions separate substance from marketing. First, is the problem one that finance actually needs solved faster, or one chosen because it fits a quantum circuit? Second, what is the best classical result for the same problem, including GPUs and variance reduction, and how does the quantum method compare in cost and accuracy, not only in speed on a toy instance? Third, how does the method scale: how many logical qubits, how many T gates, and what logical clock speed would be needed at production scale?",
          "Fourth, was the result reproduced by an independent group, and was the quantum part isolated from the classical preprocessing? Fifth, what is the cost of loading the data into the quantum state, and does it erase the benefit? A claim that passes all five checks is rare today, and a claim that fails the second one is the most common. Applying this checklist to announcements will save time and protect against the sales cycles that accompany every technology wave.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect pilots to continue through the 2020s, with banks building skills and testing algorithms on small instances. Advantage in derivative pricing or risk calculation requires fault-tolerant machines of a quality that roadmaps place in the early to mid 2030s at best, and the economic value depends on whether the improvement beats classical methods that also keep improving, including GPU-based Monte Carlo and machine-learned surrogate models. For these reasons our confidence in any specific financial advantage before 2035 is low.",
          "Investors and managers should ask for three things from any vendor claim: a comparison against the best classical method on the same problem, an estimate of the logical qubits and gate counts needed at production scale, and an independent reproduction.",
        ] },
    ], forecast: [
      { label: "2026 to 2029", value: "Pilots on small instances; post-quantum migration dominates budgets; certified randomness and quantum-safe tools appear in products." },
      { label: "2030 to 2034", value: "First fault-tolerant demonstrations of amplitude estimation on toy financial problems; advantage claims remain contested." },
      { label: "2035 to 2040", value: "Possible advantage in some Monte Carlo workloads if logical clock rates and error rates reach the required levels." },
    ], signals: [
      "Logical clock rates in the tens to hundreds of kilohertz or better.",
      "Independent classical rebuttals or confirmations of financial advantage claims.",
      "Resource estimates for derivative pricing dropping by another order of magnitude.",
      "Regulatory deadlines for quantum-safe systems in finance.",
    ], risks: [
      "GPU-based classical methods may keep ahead for most financial workloads.",
      "Algorithmic advances may raise or lower the estimates unpredictably.",
      "Vendor claims may overstate results, as in earlier hype cycles.",
    ], faq: [
      { q: "Will quantum computers predict the stock market?", a: "No. Markets are noisy and adaptive, and no quantum algorithm gives a reliable way to forecast prices." },
      { q: "Are banks using quantum computers in production?", a: "Not for trading or pricing. Banks run pilots, and use quantum-safe cryptography and quantum random number sources." },
      { q: "What is the biggest quantum risk for banks?", a: "The break of public-key cryptography, which is why migration to post-quantum algorithms is the priority." },
    ], references: [
      "Herman, D., et al. (2023). Quantum computing for finance. Nature Reviews Physics, 5, 450-465.",
      "Chakrabarti, S., et al. (2021). A threshold for quantum advantage in derivative pricing. Quantum, 5, 463.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Egger, D. J., et al. (2020). Quantum computing for finance: State-of-the-art and future prospects. IEEE Transactions on Quantum Engineering, 1, 3101724.",
      "Orús, R., Mugel, S., & Lizaso, E. (2019). Quantum computing for finance: Overview and prospects. Reviews in Physics, 4, 100028.",
      "Brassard, G., Høyer, P., Mosca, M., & Tapp, A. (2002). Quantum amplitude amplification and estimation. Contemporary Mathematics, 305, 53-74.",
      "Abbas, A., et al. (2024). Challenges and opportunities in quantum optimization. Nature Reviews Physics, 6, 718-735.",
      "Liu, M., et al. (2025). Certified randomness using a trapped-ion quantum processor. Nature, 640, 343-348.",
    ], links: [
      { label: "Paper: A Threshold for Quantum Advantage in Derivative Pricing", href: "/research/chakrabarti-derivative-pricing-threshold-2021" },
      { label: "Paper: Focus Beyond Quadratic Speedups for Error-Corrected Quantum Advantage", href: "/research/babbush-beyond-quadratic-speedups-2021" },
      { label: "Paper: Quantum Amplitude Amplification and Estimation", href: "/research/brassard-amplitude-amplification-estimation-2002" },
      { label: "Industry: Quantum Computing for Finance", href: "/industries/finance" },
      { label: "Term: Quantum Speedup", href: "/dictionary/quantum-speedup" },
    ], words: 1064 },
  { slug: "quantum-manufacturing-materials-future", title: "Quantum Computing in Manufacturing and Materials", category: "applications", horizon: "2028 to 2040", confidence: "Medium", summary: "Quantum computers could help design better batteries, catalysts, and alloys by simulating the electrons inside materials. Quantum sensors may improve inspection and measurement sooner, and optimization claims for factories remain unproven.", sections: [
      { heading: "Why materials and manufacturing", paragraphs: [
          "The properties of a material, such as its strength, conductivity, magnetism, and the way it stores energy, come from the quantum behavior of its electrons. Materials scientists have powerful classical tools: density functional theory is accurate enough for many metals and semiconductors, and machine-learned force fields are making large simulations cheaper. But for systems with strong electron correlation, such as certain high-temperature superconductors, transition-metal catalysts, and some battery materials, these tools fail or give conflicting answers.",
          "Those cases are where Feynman's original argument for quantum computing applies most directly: use a quantum system to simulate another quantum system. Manufacturers, chemical companies, and aerospace firms have funded research in the area, among them BASF, Airbus, BMW, Boeing, and Samsung, and they are interested in new materials, better catalysts, and lighter, stronger components.",
        ] },
      { heading: "What quantum simulation can do, and when", paragraphs: [
          "Two approaches are distinguished. Analog quantum simulators, built from cold atoms, ions, or superconducting circuits, realize model Hamiltonians such as the Hubbard model directly. They already reach regimes that are hard for classical methods, as in the 256-atom Rydberg array of Ebadi and coauthors in 2021 and the D-Wave simulations of 2025, but they simulate idealized models, not specific real materials. Digital quantum simulation uses gate-based circuits to evolve any Hamiltonian and is more general, but it needs error correction for useful sizes.",
          "Resource estimates give a sense of scale. Simulating the dynamics of a model such as the two-dimensional Hubbard system, or computing ground states of catalysts like FeMoco, needs thousands of logical qubits and billions of gates. Lee and coauthors estimated about four million physical qubits and four days for FeMoco in 2021. Childs and coauthors showed in 2018 that even for simpler spin models a quantum speedup requires large devices, with the first useful simulations needing on the order of hundreds of logical qubits and much longer circuits than current devices can run.",
          "In practice, the route to value probably starts with quantum computers providing reference data that calibrate cheaper classical methods. A single high-accuracy energy for a hard catalyst could tell researchers which approximation to trust across thousands of cheaper calculations. This hybrid use may be economically important even if quantum computers never run production-scale materials screening.",
        ] },
      { heading: "Optimization in factories: claims and reality", paragraphs: [
          "Many vendor presentations show quantum optimization for scheduling, routing, and packing in factories and supply chains. Airbus, for example, ran a quantum computing challenge on aircraft loading optimization in 2019, and automakers have tested quantum annealers for paint shop scheduling and robot paths. These are combinatorial problems of the type that annealers and the QAOA algorithm target.",
          "Classical optimization is a mature field, with solvers such as those based on integer programming and constraint programming handling instances with millions of variables. Abbas and coauthors reviewed the state of quantum optimization in 2024 and concluded that for realistic problems no proven advantage exists, and that quadratic speedups from Grover-type methods are hard to realize in practice. Pilots have value for learning, but few of them have moved to production because the classical solver was good enough.",
        ] },
      { heading: "Where quantum sensing helps first", paragraphs: [
          "Quantum sensing offers more immediate benefits for manufacturing. Diamond nitrogen-vacancy magnetometers can image magnetic fields on chips and in batteries at the micrometer scale, which helps to find defects, short circuits, and current paths in electronics. Atomic magnetometers and gravimeters are used in non-destructive testing and mineral exploration. Optical atomic clocks support precise timing for factories and networks, and quantum-enhanced inspection techniques are being tested for semiconductors.",
          "These applications do not need fault-tolerant machines, and several are commercial. Companies such as Bosch Quantum Sensing and Qnami sell instruments, and the market is growing from a small base. We expect sensing to be the main way manufacturers encounter quantum technology in the next five years.",
        ] },
      { heading: "A practical roadmap for a manufacturing company", paragraphs: [
          "A manufacturer deciding how to respond can think in three horizons. In the next two years, the useful actions are low-cost: assign one person to track the field, identify two or three problems in chemistry, materials, or measurement where better simulation or sensing would matter, and run a small pilot with a quantum sensor if the use case fits. Update cryptographic inventories, since product designs with long lifetimes, such as industrial controllers and vehicles, will still be in service when post-quantum deadlines arrive.",
          "In the middle horizon, from about 2028 to 2032, the company can prepare data and workflows so that high-accuracy reference calculations could be used when they become available. That means curating experimental datasets, learning to use hybrid classical-quantum workflows through cloud platforms, and building relationships with a few vendors and universities. Spending should stay modest and tied to a concrete problem.",
          "In the long horizon, if fault-tolerant machines arrive, the company will want staff who can specify problems, interpret results, and integrate them into existing simulation pipelines. The cost of preparation is small compared with the cost of ignoring the field, and the cost of overinvesting is also real, so a staged approach with clear review points is sensible.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "The strongest case for quantum computing in materials is high-accuracy simulation of strongly correlated systems, and it depends on fault-tolerant hardware that may arrive in the early to mid 2030s. We expect the first valuable uses to be narrow, for example a specific catalyst or battery electrolyte, and to supply reference data for classical models. Production-scale design of new alloys and polymers with quantum computers is unlikely before the late 2030s.",
          "Companies should invest modestly in expertise, track resource estimates, and prioritize sensing and post-quantum security upgrades where the benefits are near term.",
        ] },
    ], forecast: [
      { label: "2026 to 2029", value: "Analog simulators explore model systems; sensing products spread in inspection and battery research; optimization pilots rarely reach production." },
      { label: "2030 to 2034", value: "First fault-tolerant simulations of small catalysts and model materials; reference-data use in R&D begins." },
      { label: "2035 to 2040", value: "Narrow but valuable uses in catalysts and battery materials if hardware roadmaps hold." },
    ], signals: [
      "Resource estimates for FeMoco and battery materials falling below a million physical qubits.",
      "Analog simulators matching measured properties of real materials, not only models.",
      "Classical neural-network wavefunctions solving the same targets.",
      "Commercial adoption of quantum sensors in factories.",
    ], risks: [
      "Machine-learned force fields and better classical methods could cover most needs.",
      "Hardware scaling may be slower than planned.",
      "Targets chosen by hype may not be where the real economic value lies.",
    ], faq: [
      { q: "Can a quantum computer design a better battery today?", a: "No. Present devices simulate only tiny molecules. Useful battery chemistry needs fault-tolerant machines." },
      { q: "Will quantum computers optimize my factory schedule?", a: "Not better than classical solvers on current evidence." },
      { q: "What is the earliest quantum benefit for manufacturers?", a: "Quantum sensors for inspection and measurement." },
    ], references: [
      "Reiher, M., Wiebe, N., Svore, K. M., Wecker, D., & Troyer, M. (2017). Elucidating reaction mechanisms on quantum computers. PNAS, 114, 7555-7560.",
      "Lee, J., et al. (2021). Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum, 2, 030305.",
      "Bauer, B., Bravyi, S., Motta, M., & Chan, G. K.-L. (2020). Quantum algorithms for quantum chemistry and quantum materials science. Chemical Reviews, 120, 12685-12717.",
      "Childs, A. M., Maslov, D., Nam, Y., Ross, N. J., & Su, Y. (2018). Toward the first quantum simulation with quantum speedup. PNAS, 115, 9456-9461.",
      "Georgescu, I. M., Ashhab, S., & Nori, F. (2014). Quantum simulation. Reviews of Modern Physics, 86, 153-185.",
      "Ebadi, S., et al. (2021). Quantum phases of matter on a 256-atom programmable quantum simulator. Nature, 595, 227-232.",
      "Abbas, A., et al. (2024). Challenges and opportunities in quantum optimization. Nature Reviews Physics, 6, 718-735.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
    ], links: [
      { label: "Paper: Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction", href: "/research/lee-tensor-hypercontraction-chemistry-2021" },
      { label: "Paper: Quantum Phases of Matter on a 256-Atom Programmable Quantum Simulator", href: "/research/ebadi-256-atom-quantum-simulator-2021" },
      { label: "Term: Quantum Simulator", href: "/dictionary/quantum-simulator" },
      { label: "Industry: Quantum Computing for Materials Science", href: "/industries/materials-science" },
      { label: "Industry: Quantum Computing and the Semiconductor Industry", href: "/industries/semiconductors-electronics" },
    ], words: 1080 },
  { slug: "quantum-energy-climate-future", title: "Quantum Technology for Energy and Climate", category: "applications", horizon: "2030 to 2045", confidence: "Low", summary: "Quantum computing might help design better batteries, fertilizers, solar materials, and carbon capture chemicals. These benefits depend on fault-tolerant machines, so they are long-term, and the energy cost of quantum computers themselves is a smaller question than it seems.", sections: [
      { heading: "The case for quantum computing in energy and climate", paragraphs: [
          "Energy and climate problems are dominated by chemistry and materials. Batteries depend on how ions move through electrolytes and electrode materials. Solar cells depend on how light creates and separates charges in semiconductors. Fertilizer production depends on a catalyst for splitting nitrogen. Carbon capture depends on materials that bind carbon dioxide selectively and release it at low energy cost. In each case, a better material could save large amounts of energy or emissions.",
          "The Haber-Bosch process for making ammonia is an often-cited example. It consumes an estimated one to two percent of the world's energy, while bacteria make ammonia at ambient conditions using the enzyme nitrogenase, whose active site FeMoco has a strongly correlated electronic structure that classical methods cannot settle. Reiher and coauthors in 2017 used it as the first detailed target for quantum computers, and later work reduced the estimated cost to millions of physical qubits and days of runtime.",
        ] },
      { heading: "What would have to be true", paragraphs: [
          "For quantum computing to change energy materials, three things must happen. First, fault-tolerant machines with thousands of logical qubits and low logical error rates must exist. Second, the calculations they enable must give answers that classical methods cannot, such as the mechanism of a catalyst or the properties of a candidate electrolyte. Third, those answers must lead to materials that can be synthesized, scaled, and produced at a cost that beats existing options, which depends on engineering and economics as much as on chemistry.",
          "The third step is where many promising computational discoveries have stalled. The Materials Genome Initiative and machine learning have already generated large numbers of candidate materials, but only a small fraction have been made and tested. A more accurate energy calculation helps, but it does not by itself solve problems of stability, cost, and manufacturability.",
        ] },
      { heading: "Sectors and realistic expectations", paragraphs: [
          "Batteries: Quantum simulation could improve models of electrolytes, interfaces, and cathode materials, helping design batteries with higher energy density or lower cost. The estimates of Lee and coauthors cover lithium-ion related systems at a scale of millions of physical qubits. Classical machine-learned potentials are advancing quickly and will address most near-term needs.",
          "Catalysis and fertilizers: This is the strongest case, because transition-metal catalysts are strongly correlated. A success would be a new catalyst for ammonia or for hydrogen production that works at lower temperature and pressure. The timeline is the 2030s at the earliest for the calculations, and much later for industrial impact.",
          "Carbon capture and solar materials: Quantum chemistry could help design sorbents and photoactive materials, but the candidate space is huge and the classical methods are improving. We see these as long-term and uncertain.",
          "Fusion and grid optimization: Plasma physics is nonlinear and not well suited to known quantum algorithms, and grid scheduling problems are handled well by classical solvers. Claims about quantum computers solving fusion or the power grid should be treated with skepticism.",
        ] },
      { heading: "The energy use of quantum computers", paragraphs: [
          "Quantum computers use energy too. Superconducting systems need dilution refrigerators and control electronics, and a single system draws tens of kilowatts, comparable to a few households, mostly for cooling and classical control. Jaschke and Montangero estimated in 2023 that quantum computers could achieve an energy-efficiency advantage for some tasks at large scales, since the energy of a quantum computation scales more slowly with problem size than classical supercomputing for those tasks.",
          "At the scale of millions of physical qubits, energy and cooling become engineering constraints. Cryogenic control chips, more efficient refrigerators, and modular designs are being developed to keep power in check. Neutral atom and photonic systems avoid dilution refrigerators but have their own lasers and detectors. We expect the energy use of quantum computers to be small in comparison to data centers for AI, and not a major factor in climate terms, although a careful accounting is needed per task.",
        ] },
      { heading: "How to evaluate climate claims about quantum computing", paragraphs: [
          "Claims linking quantum computing to climate benefits are common in press releases and fundraising materials, and a few questions help to test them. Which specific problem will be solved, and what is the expected improvement in a measurable quantity, such as energy density, conversion efficiency, or process temperature? Is the bottleneck in that field computational accuracy, or is it manufacturing, cost, supply chain, or policy? What would the classical alternative achieve, including machine-learned potentials and high-throughput experiments?",
          "How many logical qubits and what gate counts does the claimed calculation need, and when will machines of that size exist according to credible roadmaps? Has any experimental result confirmed a prediction made with a quantum computer? Most claims fail the second and fifth questions, which does not mean that the underlying idea is wrong, only that the benefit is far away and uncertain. Policy decisions on climate in this decade should be made without relying on quantum computing, and funding for quantum research should be justified on its own merits and not as a shortcut to climate goals.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "The climate relevance of quantum computing is real but long-term, uncertain, and indirect. It is unlikely to affect emissions before the 2030s, and it will matter only if it leads to materials that are manufactured at scale. In the near term, quantum sensors can help with geophysical exploration, grid monitoring, and methane detection, and improve measurement, but their impact on emissions is small. Policymakers should not count on quantum computing as part of climate plans for this decade.",
        ] },
    ], forecast: [
      { label: "2026 to 2030", value: "Pilots and roadmaps; quantum sensing for geophysics and monitoring; classical AI drives most materials discovery." },
      { label: "2031 to 2037", value: "First fault-tolerant calculations on catalysts and electrolytes; reference data for classical methods." },
      { label: "2038 to 2045", value: "Possible new catalysts and battery materials influenced by quantum calculations, with industrial effects later." },
    ], signals: [
      "A catalyst or electrolyte whose key property was first predicted by a quantum computer and confirmed in experiment.",
      "Resource estimates for ammonia catalysts dropping below one million physical qubits.",
      "Energy per logical operation figures reported by vendors.",
    ], risks: [
      "Classical AI may deliver most of the gains without quantum computers.",
      "Synthesis, scale-up, and cost may block promising materials.",
      "Timelines for fault-tolerant hardware may slip.",
    ], faq: [
      { q: "Can quantum computers solve climate change?", a: "No. They may help design some materials, but climate change depends on deployment, policy, and economics." },
      { q: "How much energy does a quantum computer use?", a: "Tens of kilowatts for a superconducting system, mostly for cooling and control, which is small compared to AI data centers." },
      { q: "Is nitrogen fixation a real target?", a: "Yes. The FeMoco cofactor is the standard benchmark for quantum chemistry on fault-tolerant machines." },
    ], references: [
      "Reiher, M., Wiebe, N., Svore, K. M., Wecker, D., & Troyer, M. (2017). Elucidating reaction mechanisms on quantum computers. PNAS, 114, 7555-7560.",
      "Lee, J., et al. (2021). Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum, 2, 030305.",
      "Jaschke, D., & Montangero, S. (2023). Is quantum computing green? An estimate for an energy-efficiency quantum advantage. Quantum Science and Technology, 8, 025001.",
      "Bauer, B., Bravyi, S., Motta, M., & Chan, G. K.-L. (2020). Quantum algorithms for quantum chemistry and quantum materials science. Chemical Reviews, 120, 12685-12717.",
      "McArdle, S., Endo, S., Aspuru-Guzik, A., Benjamin, S. C., & Yuan, X. (2020). Quantum computational chemistry. Reviews of Modern Physics, 92, 015003.",
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
    ], links: [
      { label: "Paper: Elucidating Reaction Mechanisms on Quantum Computers", href: "/research/reiher-reaction-mechanisms-quantum-computers-2017" },
      { label: "Paper: Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction", href: "/research/lee-tensor-hypercontraction-chemistry-2021" },
      { label: "Industry: Quantum Computing for Energy and Utilities", href: "/industries/energy" },
      { label: "Industry: Quantum Computing for Climate and the Environment", href: "/industries/climate-environment" },
      { label: "Term: Dilution Refrigerator", href: "/dictionary/dilution-refrigerator" },
    ], words: 1055 },
  { slug: "quantum-education-workforce-future", title: "Quantum Education and the Workforce", category: "industry-policy", horizon: "2026 to 2035", confidence: "Medium", summary: "The quantum industry needs far more than physicists. Engineers, software developers, cryptography specialists, and technicians are in short supply, and students who build the right foundations now can enter the field from many directions.", sections: [
      { heading: "The talent picture", paragraphs: [
          "Surveys of the quantum industry consistently report a shortage of qualified people. Hughes and coauthors, who interviewed quantum companies in 2022, found that most roles do not require a PhD in physics, and that employers want a mix of skills: engineering, software, mathematics, and the ability to work across disciplines. Fox, Zwickl, and Lewandowski argued in 2020 that universities were slow to adapt, with few programs designed for the non-PhD workforce, and that the field would need new courses, certificates, and training routes.",
          "The demand is spread over several job families. Hardware roles include cryogenic engineers, microwave and photonics engineers, materials and fabrication scientists, and control-system engineers. Software roles cover compilers, simulation, error-correction decoders, and cloud platforms. Theory roles cover algorithms and error-correcting codes. Application roles cover chemistry, finance, and optimization, and a growing group of security engineers works on post-quantum migration. Many of the fastest-growing jobs are in post-quantum cryptography and in classical engineering for quantum machines, not in quantum algorithm research.",
        ] },
      { heading: "What to study", paragraphs: [
          "A solid foundation for most quantum careers is linear algebra, probability, and basic quantum mechanics at the level of a qubit, with programming in Python. Nielsen and Chuang's textbook remains the standard introduction to quantum computation and information. Software kits such as Qiskit, Cirq, and PennyLane let students run circuits on simulators and on cloud hardware, and many of the vendors offer free learning resources.",
          "Beyond that, the path depends on the role. For hardware, electrical engineering, materials science, and experimental physics are common routes. For software, computer science with an emphasis on compilers, numerical methods, and high-performance computing is useful. For theory, a graduate education in physics, computer science, or mathematics is the norm. For security, cryptography and systems security are essential, and post-quantum migration needs engineers who know protocols, certificates, and embedded systems.",
          "A useful rule is to build depth in one classical discipline and add quantum as a second skill. A strong classical engineer who understands how a quantum computer is controlled or how error correction works is more valuable than someone with only a surface knowledge of many quantum topics.",
        ] },
      { heading: "India and the global picture", paragraphs: [
          "Many countries have launched national programs. India's National Quantum Mission, approved in April 2023 with a budget of about 6,000 crore rupees over 2023 to 2031, targets intermediate-scale quantum computers with tens to hundreds of physical qubits, satellite-based quantum communication, quantum sensing, and materials, with thematic hubs at leading institutes including IISc Bengaluru, the IITs, and TIFR. Such programs increase the number of research positions and create industry opportunities, and Indian companies and startups are active in quantum software, sensing, and communication.",
          "Globally, the United States, European Union, United Kingdom, China, Japan, and South Korea have strategies that include workforce measures: fellowships, new degree programs, and industry partnerships. The competition for experienced engineers is strong, and large companies recruit from universities and startups. For students in India, this means that opportunities exist both domestically and abroad, and that open resources, research internships, and contributions to open-source projects are accessible routes to build a track record.",
        ] },
      { heading: "How hype affects careers", paragraphs: [
          "A sober view helps career planning. Quantum computing is a long-term technology, with commercial revenue in the low billions of dollars worldwide in the mid 2020s, according to industry analysts such as McKinsey, and with timelines for large-scale machines in the 2030s. Funding cycles are volatile, and some startups will fail or be acquired. Students should choose paths that keep options open: skills in numerical computing, hardware engineering, or cryptography are valuable in quantum and in adjacent fields such as semiconductors, AI infrastructure, and security.",
          "For working professionals, the practical advice is to learn the basics, follow a few reliable sources, and look for ways that quantum affects your current field, for example post-quantum migration for security teams, or resource estimation for chemistry and finance teams.",
        ] },
      { heading: "A learning path you can start this month", paragraphs: [
          "A practical path for someone starting from a general science or engineering background takes about six to twelve months of part-time study. In the first month, refresh linear algebra, with attention to vectors, matrices, eigenvalues, and complex numbers, and learn enough Python to use arrays and plotting. In the second and third months, work through the first chapters of a textbook such as Nielsen and Chuang or a free online course, and write small circuits in a software kit such as Qiskit or Cirq: a Bell state, the Deutsch-Jozsa algorithm, and Grover search on a few qubits.",
          "In the following months, pick a direction. For algorithms and applications, study phase estimation, variational algorithms, and the resource estimates for chemistry. For hardware, learn how superconducting qubits and ion traps are controlled, using review articles such as those by Kjaergaard and by Bruzewicz and coauthors. For security, read the NIST post-quantum standards and learn how key exchange and signatures work in practice. At each stage, build something small and put it in a public repository, because a visible project is often the best credential for a field with few formal pathways.",
          "Finally, join a community. Open-source projects, university seminars, and online groups give feedback and expose you to problems that practitioners actually face. Consistency matters more than speed.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect the workforce to grow by a factor of several by 2035, with the largest growth in engineering and software roles and in post-quantum security. Certificates and shorter programs will spread alongside degree programs. Open educational resources will remain central, and learners will increasingly practice on cloud hardware and high-quality simulators. The main bottleneck will remain people who combine a strong discipline with quantum knowledge and the ability to work in teams.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More undergraduate and master's programs; certificates and bootcamps; strong demand for post-quantum security engineers." },
      { label: "2029 to 2032", value: "Quantum engineering becomes a recognized discipline; hardware roles dominate hiring as fault-tolerant machines are built." },
      { label: "2033 to 2035", value: "Quantum skills are integrated into computer science, physics, and engineering curricula; roles in applications grow if advantage appears." },
    ], signals: [
      "University program counts and enrollment in quantum engineering.",
      "Hiring and salary trends published by industry surveys.",
      "Government workforce funding, such as national mission fellowships.",
      "Layoffs or consolidation among startups.",
    ], risks: [
      "A funding downturn could cut hiring.",
      "Roles may shift toward classical engineering faster than expected.",
      "Credential inflation could make entry harder.",
    ], faq: [
      { q: "Do I need a PhD to work in quantum computing?", a: "No. Many roles in engineering, software, operations, and security do not require one." },
      { q: "What is the best first step?", a: "Learn linear algebra and Python, then work through a quantum computing textbook and run circuits with a software kit." },
      { q: "Is it too late to enter the field?", a: "No. The field is growing, and the shortage is in applied and engineering roles." },
    ], references: [
      "Fox, M. F. J., Zwickl, B. M., & Lewandowski, H. J. (2020). Preparing for the quantum revolution: What is the role of higher education? Physical Review Physics Education Research, 16, 020131.",
      "Hughes, C., Finke, D., German, D.-A., Merzbacher, C., Vora, P. M., & Lewandowski, H. J. (2022). Assessing the needs of the quantum industry. IEEE Transactions on Education, 65, 592-601.",
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
      "McKinsey and Company (2025). Quantum Technology Monitor.",
    ], links: [
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
    ], words: 1093 },
  { slug: "quantum-government-defense-future", title: "Governments, Defense, and Quantum Strategy", category: "industry-policy", horizon: "2026 to 2040", confidence: "High", summary: "Quantum technology is now a matter of national strategy. Governments are funding research, setting post-quantum security deadlines, controlling exports, and in some cases taking equity in companies, and the policy environment will shape which technologies succeed.", sections: [
      { heading: "Why governments care", paragraphs: [
          "Three motives drive government interest. The first is security: a quantum computer capable of breaking public-key cryptography would expose state secrets and critical infrastructure, and the same machines might help intelligence agencies decrypt recorded traffic. The second is military and economic advantage, from quantum sensors for navigation without satellites, to materials discovery, to secure communication. The third is industrial policy: governments see quantum technology as a strategic industry, similar to semiconductors, where leadership affects economic security.",
          "These motives explain why funding has grown and why policy has become more assertive in the 2020s. The language of national security appears in nearly every national quantum strategy.",
        ] },
      { heading: "The major programs", paragraphs: [
          "The United States passed the National Quantum Initiative Act in December 2018, authorizing about 1.2 billion dollars over five years, followed by executive orders and the CHIPS-era investments in related technologies. National Security Memorandum 10 of 2022 and the Quantum Computing Cybersecurity Preparedness Act of that year direct agencies to prepare for post-quantum migration. In May 2026, the Department of Commerce announced letters of intent with nine companies for about two billion dollars of support, reported to include government equity stakes, which signals a shift toward direct investment in quantum hardware makers and fabrication capacity. DARPA's Quantum Benchmarking Initiative, started in 2025, asks companies to demonstrate credible paths to a utility-scale machine, with a test of feasibility by 2033.",
          "The European Union launched its Quantum Flagship in 2018 with about one billion euros over ten years, and added a Quantum Europe Strategy in 2025 with plans for pilot lines, a quantum internet infrastructure, and a communication infrastructure network, EuroQCI. The United Kingdom's national strategy, announced in 2023, commits about 2.5 billion pounds over ten years. China has invested heavily in quantum communication and computing, with the Micius satellite, a long-distance QKD backbone, and the Jiuzhang and Zuchongzhi machines, although public figures on spending are uncertain. India's National Quantum Mission, approved in 2023, allocates about 6,000 crore rupees to 2031. Japan, South Korea, Canada, Australia, and others have national programs as well.",
        ] },
      { heading: "Export controls and geopolitics", paragraphs: [
          "Policy increasingly includes export controls. In September 2024, the US Bureau of Industry and Security issued rules covering certain quantum computers above defined qubit and error-rate thresholds, along with key components such as dilution refrigerators and cryogenic control electronics, and allied countries have adopted parallel measures. China faces restrictions on advanced chips and on quantum items, and has responded with its own domestic supply efforts. Controls cover not only machines but also materials such as helium-3, which is scarce, and specialized lasers and detectors.",
          "Such controls raise questions of scientific openness. Quantum research has been highly international, with many collaborations between US, European, Chinese, and Indian groups. Restrictions may slow some progress and fragment supply chains, and they may push countries to build domestic capacity. We expect the trend toward controls to continue and to become more specific as capabilities mature.",
        ] },
      { heading: "Defense and intelligence applications", paragraphs: [
          "Defense interest centers on four areas. Quantum sensing promises navigation that does not depend on GPS, using accelerometers and gyroscopes based on cold atoms, and magnetic anomaly detection. Secure communication includes post-quantum cryptography for all systems and QKD for specific links. Cryptanalysis is the offensive use and the reason for the migration deadlines. Simulation and optimization are possible for materials and logistics, though less certain.",
          "Quantum sensing may have the earliest operational impact, since it does not need large fault-tolerant machines. Field tests of quantum navigation systems have been run by several militaries, and companies have delivered prototypes. Post-quantum migration is also a defense priority, driven by deadlines in NSA's CNSA 2.0 and NSM-10.",
        ] },
      { heading: "What policy choices matter most", paragraphs: [
          "Four choices will shape the outcome more than the size of budgets. The first is how to balance openness and control. Quantum research thrives on international collaboration, and broad export controls can slow progress and push talent elsewhere, while too little control may transfer sensitive capabilities. Targeted controls on specific components and thresholds, coordinated with allies, are more defensible than blanket restrictions.",
          "The second is the design of funding. Programs that reward verified milestones, such as DARPA's benchmarking approach, reduce the risk of paying for hype, and procurement that lets agencies buy time on several platforms keeps competition alive. The third is workforce and infrastructure: fabrication facilities, cryogenic supply chains, and training programs take years to build and are bottlenecks for every company.",
          "The fourth is the pace of cryptographic migration. Deadlines that are clear, funded, and enforced matter far more for security than any single quantum computing project, because migration is slow and costly for governments and for the private sector. Countries that treat post-quantum migration as an infrastructure project, with budgets and audits, will be more secure than those that wait for a quantum computer to appear.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We have high confidence that government involvement will grow and that policy will shape the industry. Expect more direct funding, more equity and procurement arrangements, tighter export controls, and migration deadlines that become legal requirements. Public programs will emphasize error-corrected machines, supply chains, and workforce. Risks include overspending on hype, fragmentation of standards, and loss of international collaboration. For companies, government contracts will be a large share of revenue in the next decade, which also means exposure to political cycles.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More government equity and procurement deals; DARPA QBI stages narrow the field; export controls broaden; post-quantum deadlines enter regulations." },
      { label: "2029 to 2033", value: "Government-backed fault-tolerant prototypes; quantum navigation fielded in niche roles; QBI feasibility assessment around 2033." },
      { label: "2034 to 2040", value: "Quantum technology is a standard part of defense and critical infrastructure planning; international rules on quantum export and standards mature." },
    ], signals: [
      "DARPA QBI stage selections and results.",
      "New export-control rules and allied alignment.",
      "Funding commitments from the US, EU, India, China, Japan, and the UK.",
      "Post-quantum compliance deadlines in law.",
    ], risks: [
      "A funding bubble could burst if advantage claims fail.",
      "Geopolitical tension could fragment research and supply chains.",
      "Secrecy might hide the true state of progress.",
    ], faq: [
      { q: "Are governments buying quantum computers?", a: "Yes. National labs, supercomputing centers, and defense agencies buy or lease systems, and some governments are taking equity in quantum companies." },
      { q: "Why are export controls placed on quantum computers?", a: "Because of their potential use in cryptanalysis and military applications, and to keep key components and know-how within allied countries." },
      { q: "What is the earliest military use?", a: "Quantum sensing for navigation and detection, and post-quantum cryptography for secure communication." },
    ], references: [
      "United States Congress (2018). National Quantum Initiative Act, Public Law 115-368.",
      "The White House (2022). National Security Memorandum on promoting United States leadership in quantum computing while mitigating risks to vulnerable cryptographic systems (NSM-10).",
      "United States Congress (2022). Quantum Computing Cybersecurity Preparedness Act, Public Law 117-260.",
      "U.S. Department of Commerce (2026). Department of Commerce announces letters of intent with 9 companies for $2 billion to accelerate U.S. leadership in quantum computing. https://www.quantum.gov/department-of-commerce-announces-letters-of-intent-with-9-companies-for-2-billion-to-accelerate-u-s-leadership-in-quantum-computing/",
      "Defense Advanced Research Projects Agency (2025). Quantum Benchmarking Initiative.",
      "U.S. Bureau of Industry and Security (2024). Export controls on quantum computing items, interim final rule, September 2024.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
      "UK Department for Science, Innovation and Technology (2023). National Quantum Strategy.",
      "European Commission (2025). Quantum Europe Strategy.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
      { label: "Industry: Quantum Computing for Aviation and Airlines", href: "/industries/aviation-airlines" },
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
    ], words: 1048 },
  { slug: "quantum-space-future", title: "Quantum Technology in Space", category: "applications", horizon: "2026 to 2040", confidence: "Medium", summary: "Space gives quantum technology long, clean links and a microgravity laboratory. Satellite key distribution is proven, and space-based clocks, atom interferometers, and sensor networks are the next steps.", sections: [
      { heading: "Why space matters to quantum technology", paragraphs: [
          "Space offers two things that the ground does not. The first is distance without fiber loss. Light traveling through the thin atmosphere and then vacuum loses much less than light in fiber over the same distance, so satellites can link ground stations thousands of kilometers apart with quantum signals. The second is a quiet environment: microgravity allows atoms to be cooled and observed for much longer, which improves precision measurement, and space provides large baselines for sensor networks and for tests of fundamental physics.",
          "The relevance goes both ways. Quantum technology helps space through better clocks, navigation, and secure links, and space helps quantum technology by providing a way around the loss limit of ground networks and by supplying conditions for experiments that cannot be done on Earth.",
        ] },
      { heading: "Satellite quantum communication", paragraphs: [
          "The Micius satellite, launched in 2016, demonstrated entanglement distribution over 1,200 kilometers, ground-to-satellite teleportation, and satellite-to-ground decoy-state key distribution, and in 2017 it supported a key exchange between ground stations in China and Austria used for an encrypted video call. In 2020 the team reported entanglement-based QKD over 1,120 kilometers between ground stations. China has since launched additional satellites, including a microsatellite that works with small ground stations.",
          "Other countries are following. The European Space Agency and the European Union are developing EuroQCI, which includes a space segment, with the Eagle-1 satellite planned as a first demonstrator. Singapore, Canada, India, Japan, and the United Kingdom have satellite quantum communication programs. India's National Quantum Mission has a goal of satellite-based QKD between ground stations over ranges of about 2,000 kilometers within the mission period.",
          "A limit of low-orbit satellites is that each pass over a ground station lasts only minutes, and links work best at night and in clear weather. For key relay between distant sites, the satellite acts as a trusted node, which weakens the security model unless entanglement-based schemes are used. Future designs include constellations, higher orbits with larger telescopes, and quantum memories on board, which would make a satellite a true repeater.",
        ] },
      { heading: "Clocks, sensors, and fundamental physics in orbit", paragraphs: [
          "NASA's Cold Atom Lab on the International Space Station, operating since 2018, produced Bose-Einstein condensates in orbit, as reported by Aveline and coauthors in 2020. German sounding-rocket missions showed Bose-Einstein condensation in microgravity in 2017 and atom interferometry in space, reported by Becker and coauthors in 2018. These experiments pave the way for space atom interferometers that measure gravity, test the equivalence principle, and might detect gravitational waves in frequency bands that ground detectors cannot reach.",
          "Optical atomic clocks, which have reached fractional uncertainties around 10 to the minus 18 on the ground, are being prepared for space, where they could improve navigation, geodesy, and tests of relativity. Squeezed light is already used in the LIGO gravitational wave detectors to reduce quantum noise, and similar techniques are planned for the space detector LISA. A network of space clocks or interferometers connected by quantum links is a long-term vision for a very precise global sensor.",
        ] },
      { heading: "Quantum computing for space missions", paragraphs: [
          "Claims that quantum computers will transform mission planning, trajectory optimization, or satellite scheduling are common. These are optimization problems, for which classical solvers are strong, and the evidence for quantum advantage is weak. Radiation and the weight of cryogenic systems also make putting quantum computers in orbit unlikely in this decade. We see little near-term value for flight-qualified quantum computers, and more value in ground-based machines that support mission design, if any advantage exists.",
        ] },
      { heading: "The engineering challenges of putting quantum hardware in orbit", paragraphs: [
          "Space hardware must be small, light, power-efficient, and tolerant of radiation, vibration at launch, and large temperature swings, and each of these requirements is demanding for quantum devices. A laser system for cold atoms has many components that must stay aligned, and the first flight systems, such as the Cold Atom Lab, are the size of a small refrigerator and required years of development. Optical clocks are less mature for space, though compact versions are under development.",
          "For quantum communication payloads, the main difficulties are pointing accuracy, which must be at the level of microradians while the satellite moves at about seven kilometers per second, and the need to maintain polarization or phase references across the link. Single-photon detectors need cooling or must tolerate radiation damage, and sources must run for years without service. The Micius mission solved these problems for a research satellite, but producing many low-cost satellites with reliable performance is a different task.",
          "Cost and cadence matter. Launch costs have fallen, and small satellites make constellations more affordable, yet each satellite must carry precise optics and control. The business case for quantum links will depend on whether customers, mostly governments and critical infrastructure operators, are willing to pay for security that post-quantum cryptography may provide at lower cost. This is why we rate the confidence of the space forecast as medium: the physics is proven, but the economics are not.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect satellite quantum key distribution to expand through the 2020s, with constellations and microsatellites making service more regular, and entanglement-based links to be demonstrated between continents. Space atom interferometers and optical clocks are likely to fly in the 2030s, and they are the most promising space-based application for science. A space-based quantum repeater with memories is a long-term goal that depends on laboratory progress in memories. Costs and launch cadence, as much as physics, will set the pace.",
        ] },
    ], forecast: [
      { label: "2026 to 2029", value: "More QKD satellites and microsatellites; EuroQCI demonstrators; ISS cold-atom experiments continue." },
      { label: "2030 to 2035", value: "Space-qualified optical clocks and atom interferometers; first entanglement-based intercontinental links in regular service." },
      { label: "2036 to 2040", value: "Possible satellite repeaters and sensor networks; space gravitational-wave missions with quantum-enhanced optics." },
    ], signals: [
      "Launch of Eagle-1 and other QKD satellites.",
      "Space-qualified optical clocks flown on missions.",
      "Quantum memories demonstrated on orbit.",
      "Cost per key bit of satellite QKD service.",
    ], risks: [
      "Launch cost, reliability, and weather limit satellite links.",
      "Post-quantum cryptography may reduce demand for QKD from space.",
      "Space atom interferometers may face engineering delays.",
    ], faq: [
      { q: "Why use satellites for quantum communication?", a: "Because loss in free space grows slowly with distance, so satellites can connect places far beyond the reach of fiber." },
      { q: "Can quantum computers be sent to space?", a: "Not practically soon, because of cooling, size, and radiation issues." },
      { q: "What is the Cold Atom Lab?", a: "A NASA facility on the International Space Station that produces ultracold atoms in microgravity for research." },
    ], references: [
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
      "Yin, J., et al. (2020). Entanglement-based secure quantum cryptography over 1,120 kilometres. Nature, 582, 501-505.",
      "Yin, J., et al. (2017). Satellite-based entanglement distribution over 1200 kilometers. Science, 356, 1140-1144.",
      "Aveline, D. C., et al. (2020). Observation of Bose-Einstein condensates in an Earth-orbiting research lab. Nature, 582, 193-197.",
      "Becker, D., et al. (2018). Space-borne Bose-Einstein condensation for precision interferometry. Nature, 562, 391-395.",
      "Tse, M., et al. (2019). Quantum-enhanced Advanced LIGO detectors in the era of gravitational-wave astronomy. Physical Review Letters, 123, 231107.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
    ], links: [
      { label: "Paper: Satellite-to-Ground Quantum Key Distribution", href: "/research/liao-satellite-to-ground-qkd-2017" },
      { label: "Paper: Quantum Internet: A Vision for the Road Ahead", href: "/research/wehner-quantum-internet-vision-2018" },
      { label: "Industry: Quantum Technology for Space and National Security", href: "/industries/space-defense" },
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
    ], words: 1032 },
  { slug: "superconducting-qubits-future", title: "Superconducting Qubits: The Road to 2030", category: "hardware", horizon: "2026 to 2035", confidence: "Medium", summary: "Superconducting circuits are the most mature qubit platform, backed by IBM and Google. The next five years are about turning hundreds of good physical qubits into tens to hundreds of error-corrected logical qubits, and the main obstacles are wiring, materials, and rare error bursts.", sections: [
      { heading: "Where superconducting qubits stand today", paragraphs: [
          "Superconducting qubits are tiny circuits of metal and Josephson junctions cooled to about 10 to 20 millikelvin. Since the transmon was introduced in 2007, coherence has risen from microseconds to hundreds of microseconds in processors and above a millisecond in laboratory devices, and two-qubit gate errors have fallen to roughly 0.1 to 0.5 percent. Their strength is speed: gates take tens of nanoseconds and error-correction cycles about a microsecond, so a given computation runs far faster than on ions or atoms.",
          "The platform has also produced the clearest error-correction result so far. In December 2024, Google's Willow chip with 105 qubits showed a surface-code logical qubit whose error fell by about a factor of 2.14 each time the code distance increased from 3 to 5 to 7, with the distance-7 memory outliving its best physical qubit by roughly 2.4 times. IBM has put processors with 127, 133, 156, and 120 qubits into service and has shown that a bivariate bicycle code can store 12 logical qubits in 288 physical qubits on paper, with hardware to test the ideas under way. Fujitsu and RIKEN announced a 256-qubit machine in 2025, and USTC's Zuchongzhi 3.0 reached 105 qubits.",
        ] },
      { heading: "What the roadmaps promise", paragraphs: [
          "IBM's public roadmap is the most detailed. Its Nighthawk processor, announced in November 2025, has 120 qubits and 218 tunable couplers, aimed at circuits with thousands of two-qubit gates, with targets to raise that number each year through 2028. Loon is an experimental chip that tests the long-range connections needed for quantum LDPC codes, and Kookaburra and Cockatoo are planned modules that combine error-correcting memory with logic and link chips together. The goal is Starling in 2029, a machine with about 200 logical qubits able to run on the order of 100 million logical operations, followed by Blue Jay around 2033 with about 2,000 logical qubits and a billion operations.",
          "Google describes six milestones: beating classical computers on a benchmark (2019), a prototype of error correction (Willow, 2024), a long-lived logical qubit with error near one in a million, a logical gate, an engineering scale-up to about 100 logical qubits, and finally a large error-corrected machine with roughly a million physical qubits. Company leaders have said they aim for a useful error-corrected computer by the end of the decade. Microsoft, Amazon, and other companies pursue related ideas with different qubit designs.",
          "Roadmaps are statements of intent and marketing as well as engineering, and they have slipped before. IBM revised its 2020 roadmap after concluding that raising qubit counts without improving quality was not enough, and shifted emphasis to Heron-class quality and error correction in 2023.",
        ] },
      { heading: "The technical hurdles", paragraphs: [
          "Materials and fabrication come first. Coherence is limited by microscopic defects, tiny two-level systems in oxides and interfaces, and by quasiparticles. Switching to tantalum films on high-resistivity silicon has produced transmons with coherence above 0.3 milliseconds in 2021 and above a millisecond in later work, but yield and uniformity across many qubits matter more than the best single device. Frequency collisions, where neighboring qubits accidentally resonate, reduce yield and are partly addressed by laser trimming and tunable couplers.",
          "Error correction adds its own problems. Leakage out of the two computational levels, crosstalk, and correlated errors from rare events such as cosmic-ray impacts can corrupt many qubits at once. McEwen and coauthors showed in 2021 that cosmic rays cause bursts of errors across large arrays, and Google's repetition-code experiments found a floor near one error in ten billion cycles caused by such events. Mitigations include shielding, gap engineering, and decoders that detect bursts.",
          "Scaling the hardware is the third problem. Each qubit needs control and readout lines, and the dilution refrigerator has limited cooling power at the coldest stage. Cryogenic control chips, multiplexed readout, flip-chip packaging, and modular designs with microwave or optical links between chips are all in development. Finally, fast classical decoding must keep pace with microsecond cycles, which requires dedicated hardware and has motivated neural and parallel decoders.",
        ] },
      { heading: "Why superconducting may win, or lose", paragraphs: [
          "The case for superconducting qubits is that they use the lithography and packaging methods of the semiconductor industry, run fast, and have the longest record of continuous improvement. Speed matters for algorithms that need very large numbers of operations, such as factoring or chemistry, because a slower platform takes proportionally longer for the same code distance.",
          "The case against is the cryogenic and wiring burden at the scale of a million qubits, the limit on connectivity for fixed planar layouts, and the stubborn defect physics. Neutral atoms and ions have better connectivity and higher fidelities per gate but are slower, and photonic and spin approaches have different bottlenecks. We do not think the platform race will have a single winner by 2030. More likely, several platforms will reach tens of logical qubits and diverge in cost, speed, and suitability for particular codes.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect superconducting machines to demonstrate error-corrected systems with logical qubit counts in the tens by 2028 and around 100 or somewhat more by 2030, with logical error rates well below physical rates but still above the 10 to the minus 9 or lower needed for long algorithms. Machines with a thousand or more logical qubits, which would run chemistry and cryptanalysis workloads, are more likely in the mid-2030s than before 2030. A reasonable range is wide, because progress depends on rare events such as a materials breakthrough or a decoding bottleneck.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Nighthawk-class processors deliver circuits of thousands of gates; first qLDPC memory modules; Google targets a long-lived logical qubit." },
      { label: "2028 to 2029", value: "Tens of logical qubits with logical gates; IBM Starling-class prototype targeted for 2029, with a meaningful chance of slipping." },
      { label: "2030 to 2033", value: "Roughly 100 to several hundred logical qubits; modular machines linking several chips." },
      { label: "2034 onward", value: "Machines with about a thousand logical qubits are plausible and would begin to address chemistry and cryptanalysis workloads." },
    ], signals: [
      "Logical error per cycle below 10^-4 and then 10^-6 in published experiments.",
      "Chips with more than 1,000 qubits that keep two-qubit errors near 0.1 percent.",
      "Demonstrated long-range couplers and chip-to-chip links.",
      "Real-time decoders running at hardware speed on large codes.",
    ], risks: [
      "Materials defects or error bursts could cap performance.",
      "Wiring and cryogenic costs could make million-qubit machines impractical.",
      "Neutral atoms or ions could overtake on logical qubit count.",
      "Roadmap dates could slip by several years.",
    ], faq: [
      { q: "Why do superconducting qubits need such cold temperatures?", a: "To keep the metal superconducting and to prevent thermal energy from exciting the qubits, so they run at about 10 to 20 millikelvin." },
      { q: "Is Google or IBM ahead?", a: "They emphasize different things. Google leads on demonstrated surface-code scaling, and IBM on public roadmaps, qLDPC codes, and cloud access." },
      { q: "How many physical qubits will a useful machine need?", a: "Estimates range from hundreds of thousands to millions for cryptanalysis, and depend on error rates and codes." },
    ], references: [
      "Kjaergaard, M., et al. (2020). Superconducting qubits: Current state of play. Annual Review of Condensed Matter Physics, 11, 369-395.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Bravyi, S., et al. (2024). High-threshold and low-overhead fault-tolerant quantum memory. Nature, 627, 778-782.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
      "Place, A. P. M., et al. (2021). New material platform for superconducting transmon qubits with coherence times exceeding 0.3 milliseconds. Nature Communications, 12, 1779.",
      "McEwen, M., et al. (2022). Resolving catastrophic error bursts from cosmic rays in large arrays of superconducting qubits. Nature Physics, 18, 107-111.",
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "Koch, J., et al. (2007). Charge-insensitive qubit design derived from the Cooper pair box. Physical Review A, 76, 042319.",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: High-Threshold and Low-Overhead Fault-Tolerant Quantum Memory", href: "/research/bravyi-high-threshold-low-overhead-memory-2024" },
      { label: "Paper: Charge-Insensitive Qubit Design Derived from the Cooper Pair Box", href: "/research/koch-transmon-charge-insensitive-qubit-2007" },
      { label: "Hardware: Google Willow", href: "/hardware/google-willow" },
      { label: "Hardware: IBM Heron (r1, r2, and r3)", href: "/hardware/ibm-heron" },
      { label: "Term: Superconducting Qubit", href: "/dictionary/superconducting-qubit" },
    ], words: 1119 },
  { slug: "trapped-ion-quantum-computing-future", title: "Trapped-Ion Quantum Computing: Accuracy First, Scale Next", category: "hardware", horizon: "2026 to 2035", confidence: "Medium", summary: "Trapped ions have the highest gate fidelities and all-to-all connectivity within a trap. The challenge is speed and scale, and companies are betting on moving ions around chips and linking modules with light.", sections: [
      { heading: "Where trapped ions stand", paragraphs: [
          "A trapped-ion qubit is an atom, such as ytterbium, barium, or calcium, held in a vacuum by electric fields, with two internal states serving as 0 and 1. Because every ion of a species is identical and well isolated, coherence reaches seconds to minutes and gate fidelities are the best of any platform: two-qubit fidelities of 99.9 percent are routine on leading machines and 99.99 percent has been reported in laboratory and company results. Single-qubit errors below one in a million have been shown in the laboratory.",
          "These qualities have made ions the leader in several benchmarks. Quantinuum's H2 system reached a quantum volume of more than 33 million in 2025, a record, and the company showed real-time error correction with feedback as early as 2021. Quantinuum's Helios system, launched in late 2025 with 98 barium ions, and later reports of dozens of logical qubits with error-detecting codes, show a platform moving from small demonstrations toward logical-qubit machines. IonQ, Alpine Quantum Technologies, and Oxford Ionics, which IonQ agreed to acquire in 2025, pursue different engineering routes.",
        ] },
      { heading: "Two scaling strategies", paragraphs: [
          "A single chain of ions becomes hard to control beyond a few dozen to about a hundred ions, because the vibrational modes crowd together and gates slow. The first strategy, the quantum charge-coupled device, moves ions between zones of a segmented trap chip: memory zones store qubits, gate zones perform entangling operations in small groups, and readout zones measure. Pino and coauthors demonstrated the architecture in 2021, and Quantinuum's racetrack and later designs scale it up. Transport takes tens to hundreds of microseconds, which slows circuits but gives flexible connectivity.",
          "The second strategy links separate traps with photons. Each module holds a modest number of ions, and an ion emits a photon entangled with its state, so that entanglement can be established between modules, as in the demonstration of distributed quantum computing across an optical link by an Oxford team in 2025. IonQ has described roadmaps with tens of thousands of qubits on a chip by 2027 and millions of physical qubits around 2030, which are targets we treat with caution until demonstrated.",
          "A third thread is control. Oxford Ionics and others use microwave and electronic control instead of lasers for gates, which could lower cost and improve stability, and integrated photonics aims to deliver light to many ions on a chip. These advances matter because laser delivery and stability are among the largest engineering burdens.",
        ] },
      { heading: "Technical hurdles", paragraphs: [
          "Speed is the central issue. Two-qubit gates take tens to hundreds of microseconds, a thousand times slower than superconducting gates, and syndrome extraction in error correction involves measurement and reset that are also slow. For algorithms that need billions of operations, such as Shor's algorithm, the run time could stretch from hours to months at the same logical error rate, unless parallelism across many gate zones compensates.",
          "Scale brings heating, crosstalk between zones, and the control of thousands of electrodes with low-noise electronics. Ion loss and the cooling needed after transport add overhead. Photonic links currently have low success rates, so entanglement between modules is generated at rates of perhaps tens to hundreds of pairs per second, far below internal gate rates, and improving that rate requires better photon collection and multiplexing. Finally, the vacuum, laser, and optical systems are bulky, and miniaturization is a major engineering task.",
        ] },
      { heading: "Where ions fit in the platform race", paragraphs: [
          "Ions are likely to remain the accuracy leader and the preferred platform for early fault-tolerant demonstrations that depend on very low physical error rates, such as logical gates and magic state experiments. Quantinuum's roadmap aims at a universal fault-tolerant machine called Apollo in 2029, with hundreds of logical qubits. The tradeoff is cost per logical operation and speed, which may favor other platforms for the largest algorithms unless parallelism and modular scaling work.",
          "A comparison with neutral atoms is instructive. Atoms scale to thousands of qubits more easily and are cheap per qubit, but have slower cycles and lower gate fidelities so far. Ions have the opposite profile. We expect both to reach tens of logical qubits in the next few years and to converge on hybrid ideas, such as atoms moved on a chip and ions linked by photons.",
        ] },
      { heading: "What error correction on ions has shown so far", paragraphs: [
          "Trapped ions were the first platform to show real-time fault-tolerant error correction with mid-circuit measurement and feedback, in the 2021 experiment of Ryan-Anderson and coauthors on a Quantinuum system, and they have since demonstrated small logical qubits protected by codes such as color codes and the Steane code, as well as logical teleportation and magic states at the logical level. The joint work with Microsoft reported logical error rates many times below physical ones for a handful of logical qubits.",
          "These results are encouraging but should be read with care. Most use small codes with distance two or three and some rely on post-selection, which discards runs in which errors were detected. The real test is whether logical error decreases steadily as the code distance grows, with active correction and no post-selection, on enough qubits to reach error rates below 10 to the minus 6. Ions are better placed to show that test than most platforms because of their fidelity, and we expect such results within a few years.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect trapped-ion systems to demonstrate error-corrected logical operations with logical error rates of about one in ten thousand to one in a million before 2030, and to scale to a few hundred physical qubits per module with several modules linked by 2030. A machine with a thousand logical qubits in this platform is more likely in the mid-2030s, if modular links work. We give the claims of millions of physical qubits by 2030 a low probability, though we would be glad to be wrong.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Helios-class machines with about 100 qubits and dozens of logical qubits; microwave-controlled chips; first multi-module demonstrations." },
      { label: "2028 to 2029", value: "Hundreds of physical qubits per system; logical gates at 10^-4 to 10^-6 error; Quantinuum targets a fault-tolerant Apollo system in 2029." },
      { label: "2030 to 2035", value: "Modular machines with hundreds of logical qubits, if photonic links and speed improve." },
    ], signals: [
      "Entanglement rates between modules above a kilohertz.",
      "Two-qubit gate times below 10 microseconds with high fidelity.",
      "Chips with hundreds of ions and integrated optics.",
      "Logical error rates reported for logical gates, not only memory.",
    ], risks: [
      "Slow clock speed could make large algorithms impractical.",
      "Photonic interconnects may remain too slow.",
      "Claims of rapid scaling may not be met.",
    ], faq: [
      { q: "Why are trapped ions so accurate?", a: "The ions are identical, well isolated from the environment, and controlled with precise lasers or microwaves." },
      { q: "What is the main weakness?", a: "Speed. Gates and measurements take much longer than on superconducting chips." },
      { q: "What is QCCD?", a: "An architecture in which ions are shuttled between zones for storage, gates, and readout." },
    ], references: [
      "Bruzewicz, C. D., Chiaverini, J., McConnell, R., & Sage, J. M. (2019). Trapped-ion quantum computing: Progress and challenges. Applied Physics Reviews, 6, 021314.",
      "Kielpinski, D., Monroe, C., & Wineland, D. J. (2002). Architecture for a large-scale ion-trap quantum computer. Nature, 417, 709-711.",
      "Pino, J. M., et al. (2021). Demonstration of the trapped-ion quantum CCD computer architecture. Nature, 592, 209-213.",
      "Ryan-Anderson, C., et al. (2021). Realization of real-time fault-tolerant quantum error correction. Physical Review X, 11, 041058.",
      "Moses, S. A., et al. (2023). A race-track trapped-ion quantum processor. Physical Review X, 13, 041052.",
      "Main, D., et al. (2025). Distributed quantum computing across an optical network link. Nature, 638, 383-388.",
      "Monroe, C., & Kim, J. (2013). Scaling the ion trap quantum processor. Science, 339, 1164-1169.",
      "Quantinuum (2025). Quantinuum launches Helios. Press release, November 2025.",
    ], links: [
      { label: "Paper: Quantum Computations with Cold Trapped Ions", href: "/research/cirac-zoller-trapped-ions-1995" },
      { label: "Paper: Architecture for a Large-Scale Ion-Trap Quantum Computer", href: "/research/kielpinski-ion-trap-architecture-2002" },
      { label: "Paper: Multiparticle Entanglement of Hot Trapped Ions", href: "/research/molmer-sorensen-hot-ions-1999" },
      { label: "Hardware: Quantinuum H2", href: "/hardware/quantinuum-h2" },
      { label: "Hardware: IonQ Forte (and Forte Enterprise)", href: "/hardware/ionq-forte" },
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
      { label: "Term: QCCD Architecture", href: "/dictionary/qccd-architecture" },
    ], words: 1114 },
  { slug: "neutral-atom-quantum-computing-future", title: "Neutral-Atom Quantum Computing: Thousands of Atoms and the Race to Logical Qubits", category: "hardware", horizon: "2026 to 2035", confidence: "Medium", summary: "Neutral atoms held by laser tweezers scale to thousands of qubits and can be rearranged during a computation. They have moved fast from simulators to logical-qubit demonstrations, and speed and atom loss are the main constraints.", sections: [
      { heading: "Where neutral atoms stand", paragraphs: [
          "A neutral-atom quantum computer holds individual atoms, usually rubidium, cesium, strontium, or ytterbium, in optical tweezers, with laser light exciting them to Rydberg states for entangling gates. Atoms are identical, qubit coherence reaches seconds, and arrays are assembled by imaging the random loading and moving atoms into place, a technique shown in 2016. The platform needs no dilution refrigerator, which removes the cryogenic wiring bottleneck.",
          "Progress since 2021 has been rapid. A Harvard and MIT team built a 256-atom programmable simulator in 2021. In 2023 the same collaboration reported two-qubit gate fidelities of about 99.5 percent and a logical processor with up to 48 logical qubits. In 2025, a Caltech team demonstrated an array of more than 6,100 atoms, and a Harvard team operated a 3,000-atom system continuously for hours by reloading atoms during operation. QuEra and collaborators published logical-level magic state distillation in 2025 and later reports of up to 96 logical qubits, and Infleqtion reported 30 entangled logical qubits in September 2026.",
        ] },
      { heading: "Roadmaps", paragraphs: [
          "QuEra's roadmap, published in 2024, targeted 10 logical qubits in 2024, 30 in 2025, and 100 logical qubits in 2026 using about ten thousand physical qubits, so the pace has roughly matched the plan in counts, though many of the logical qubits use small codes with error detection. Microsoft and Atom Computing have announced a machine called Magne for Denmark, with about 50 logical qubits planned for operation around 2026 to 2027. Pasqal, Infleqtion, planqc, and others have comparable aims.",
          "These targets use different error-correcting codes. Atom arrays can move atoms, which allows codes that need nonlocal connections, such as the high-rate quantum LDPC codes and hypercube codes. Xu and coauthors proposed in 2024 a constant-overhead scheme for reconfigurable arrays, which promises to reduce the number of physical qubits per logical qubit compared with the surface code, if it can be realized.",
        ] },
      { heading: "Technical hurdles", paragraphs: [
          "The first is speed. A cycle of loading, rearranging, computing, and imaging takes milliseconds, so atoms run about a thousand times slower than superconducting qubits. For a long algorithm, that means a long wall-clock time unless many operations run in parallel, which atoms can do because a single laser pulse can entangle many pairs at once. Faster rearrangement and mid-circuit readout are active research areas.",
          "The second is atom loss. Atoms are lost during operation and imaging, and each loss is an error. A positive twist is that loss can be detected, which makes it an erasure error that is easier to correct, and several groups have designed erasure conversion schemes in which the dominant errors are turned into detectable losses, as in the 2022 and 2023 proposals and experiments on alkaline-earth atoms. The third is gate fidelity, which at 99.5 percent is below that of ions and the best superconducting devices, and requires stable lasers and precise control to improve.",
          "The fourth is the engineering of control at scale: millions of laser pulses with high power at specific wavelengths, optical systems for thousands of tweezers, and classical control and decoding electronics with low latency.",
        ] },
      { heading: "How neutral atoms compare", paragraphs: [
          "Atoms combine large numbers, flexible connectivity, and good coherence, at the cost of speed. Their cost per physical qubit is low, which makes the arithmetic of codes with large overhead more attractive. They may be the platform that first reaches hundreds of logical qubits, even if the logical clock is slow, and slow clocks matter less for tasks such as simulation of quantum systems or algorithms in which parallelism is high.",
          "A caveat is that many logical qubit counts reported so far use small distance-two or distance-three codes, often with post-selection on detected errors. Such results show architecture progress but do not yet show the exponential error suppression that large-scale computing needs. The community will need experiments in which logical error decreases with code size on atom arrays, as Google showed on superconducting chips.",
        ] },
      { heading: "Applications that fit atoms best", paragraphs: [
          "Because atoms combine large numbers, parallel gates, and flexible geometry, they suit certain applications first. Analog simulation of quantum magnets and other many-body systems already works at scales beyond exact classical simulation, as in the 256-atom experiments, and programmable analog and digital-analog modes are available through cloud services such as QuEra's Aquila. Optimization problems that map to maximum independent set on graphs match the Rydberg blockade naturally, and several groups have explored such mappings, although a clear advantage over classical solvers has not been shown.",
          "For fault-tolerant algorithms, atoms may be well matched to codes with high rates, because moving atoms allows long-range gates. If the cycle time can be reduced and the logical error rates improved, atom machines could run chemistry and materials simulations in the 2030s with fewer physical qubits per logical qubit than a surface code requires. The cost of that choice is speed, so tasks that can be parallelized across many logical qubits are favored over deep sequential circuits.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect neutral-atom machines to show below-threshold scaling with logical error falling as codes grow within the next two to three years, and to reach on the order of 100 logical qubits by 2028 to 2030, with logical error rates around 10 to the minus 3 to 10 to the minus 4. Reaching error rates of 10 to the minus 6 and a thousand logical qubits, the scale for chemistry and cryptanalysis, is plausible by the mid-2030s. Speed is the principal risk, and architecture choices that exploit parallelism will decide the outcome.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Tens of logical qubits across vendors; first below-threshold scaling with atoms; Magne-class machines; arrays beyond 10,000 atoms." },
      { label: "2028 to 2030", value: "About 100 logical qubits; logical gates and magic states at scale; qLDPC and hypercube codes on arrays." },
      { label: "2031 to 2035", value: "Hundreds to a thousand logical qubits if speed and fidelity improve." },
    ], signals: [
      "Logical error falling with code distance on an atom array.",
      "Two-qubit gate fidelity of 99.9 percent across large arrays.",
      "Cycle times below a millisecond for error-correction rounds.",
      "Continuous operation of arrays with more than 10,000 atoms.",
    ], risks: [
      "Slow cycle times could limit the algorithms that can be run.",
      "Atom loss and laser noise may limit scaling.",
      "Logical qubit counts may be inflated by post-selection.",
    ], faq: [
      { q: "Do neutral atoms need a dilution refrigerator?", a: "No. The atoms are cooled by lasers in a vacuum chamber, which avoids cryogenic wiring." },
      { q: "Why are neutral atoms slower?", a: "Loading, rearranging, and imaging atoms take milliseconds, so cycles are much slower than on chips." },
      { q: "Who builds neutral-atom machines?", a: "QuEra, Pasqal, Atom Computing, Infleqtion, planqc, and several university groups." },
    ], references: [
      "Saffman, M. (2016). Quantum computing with atomic qubits and Rydberg interactions: progress and challenges. Journal of Physics B, 49, 202001.",
      "Henriet, L., et al. (2020). Quantum computing with neutral atoms. Quantum, 4, 327.",
      "Endres, M., et al. (2016). Atom-by-atom assembly of defect-free one-dimensional cold atom arrays. Science, 354, 1024-1027.",
      "Evered, S. J., et al. (2023). High-fidelity parallel entangling gates on a neutral-atom quantum computer. Nature, 622, 268-272.",
      "Bluvstein, D., et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature, 626, 58-65.",
      "Xu, Q., et al. (2024). Constant-overhead fault-tolerant quantum computation with reconfigurable atom arrays. Nature Physics, 20, 1084-1090.",
      "Wu, Y., Kolkowitz, S., Puri, S., & Thompson, J. D. (2022). Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays. Nature Communications, 13, 4657.",
      "Manetsch, H. J., et al. (2025). A tweezer array with 6100 highly coherent atom qubits. Nature (2025).",
      "Quantum Computing Report (2026). Infleqtion achieves 30 entangled logical qubits on Sqale neutral atom quantum processor. https://quantumcomputingreport.com/infleqtion-achieves-30-entangled-logical-qubits-on-sqale-neutral-atom-quantum-processor/amp/",
    ], links: [
      { label: "Paper: Atom-by-Atom Assembly of Defect-Free One-Dimensional Cold Atom Arrays", href: "/research/endres-atom-by-atom-assembly-2016" },
      { label: "Paper: High-Fidelity Parallel Entangling Gates on a Neutral-Atom Quantum Computer", href: "/research/evered-parallel-entangling-gates-atoms-2023" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
      { label: "Paper: Fast Quantum Gates for Neutral Atoms", href: "/research/jaksch-fast-gates-neutral-atoms-2000" },
      { label: "Hardware: QuEra Aquila", href: "/hardware/quera-aquila" },
      { label: "Term: Neutral Atom Qubit", href: "/dictionary/neutral-atom-qubit" },
      { label: "Term: Optical Tweezers", href: "/dictionary/optical-tweezers" },
    ], words: 1063 },
  { slug: "photonic-quantum-computing-future", title: "Photonic Quantum Computing: Chips, Loss, and Million-Qubit Plans", category: "hardware", horizon: "2026 to 2035", confidence: "Low", summary: "Photonic quantum computers use light on silicon chips made in semiconductor foundries. They promise room-temperature operation and natural networking, but photon loss is a brutal constraint, and large-scale claims remain to be demonstrated.", sections: [
      { heading: "Where photonic quantum computing stands", paragraphs: [
          "A photonic qubit is encoded in a particle of light, in properties such as path, polarization, or arrival time. Photons are fast, travel through fiber, and rarely interact with their surroundings, which makes them ideal for networking, but they also rarely interact with each other, so entangling gates are hard. The theoretical answer, from Knill, Laflamme, and Milburn in 2001, is that measurement can supply the missing interaction: linear optics, single-photon sources, and detectors suffice for universal computation, at a high resource cost.",
          "Modern designs reduce that cost. PsiQuantum's fusion-based quantum computation builds small entangled states of photons and joins them with two-photon fusion measurements, with errors handled by a topological code. Xanadu uses squeezed light and GKP encoding in a modular design, and its Aurora system, reported in Nature in 2025, linked multiple chips and demonstrated 12 qubits across 35 photonic chips and 86 kilometers of fiber. Quandela, ORCA Computing, and others build smaller photonic machines. Experiments on Gaussian boson sampling, such as Jiuzhang and Borealis, show photonic devices operating beyond easy classical simulation, though classical algorithms have since narrowed their claims.",
        ] },
      { heading: "The plans", paragraphs: [
          "PsiQuantum has raised more than a billion dollars, including a round of about one billion dollars in September 2025, and is building utility-scale sites in Brisbane, Australia, and Chicago, Illinois. Its 2025 Nature paper described a manufacturable platform with single-photon sources, detectors, and low-loss waveguides built in a commercial foundry, and it presented the Omega chipset. The company aims at a machine with about a million physical qubits, and has targeted operation of its first utility-scale facilities in the later part of this decade. Xanadu's roadmap targets fault-tolerant machines by around 2029.",
          "These are among the most ambitious plans in the field, and the least verified. The company has not published a complete fault-tolerant logical qubit demonstration, and success depends on loss performance across millions of components.",
        ] },
      { heading: "The central problem: loss", paragraphs: [
          "Every optical component absorbs or scatters a little light. In a fusion-based machine, the threshold for photon loss is a few percent per component, and the system must hold the total loss budget across sources, waveguides, switches, and detectors. Losses of a fraction of a decibel in each of hundreds of elements add up, so each element must be extraordinarily clean. Bartolucci and coauthors calculated thresholds for different constructions in the range of a few percent loss and about ten percent for erasure of fusion outcomes, and designs aim for margins below those values.",
          "Other problems include sources that emit single photons on demand with high purity and indistinguishability, fast low-loss optical switches, detectors with efficiencies above 90 percent that run at cryogenic temperatures of a few kelvin, and the control electronics. Photonic machines are often described as operating at room temperature, but the detectors need cooling, so large systems still require cryogenics, though at higher temperatures than superconducting qubits.",
        ] },
      { heading: "What photonics can do in the shorter term", paragraphs: [
          "Even if a full fault-tolerant photonic computer takes longer than hoped, photonic technology has useful near-term roles. Single-photon sources and detectors are the basis of quantum key distribution and of the quantum networks discussed elsewhere in this series, and integrated photonics reduces the cost of those systems. Gaussian boson sampling machines may find uses in graph problems and molecular vibronic spectra, although claims of practical advantage are weak. Photonic chips are used as interconnects between other kinds of quantum modules, such as ion traps and superconducting chips, where optical links carry entanglement between modules.",
          "Photonics also supplies the classical side of quantum computing. Laser delivery for ions and atoms is moving to integrated optics, and optical links can carry control signals into cryostats with less heat than coaxial cables. A company that fails to build a million-qubit photonic computer might still sell the components that other platforms need. This breadth is one reason photonic investment has persisted despite the long timelines.",
        ] },
      { heading: "Advantages that remain real", paragraphs: [
          "Foundry manufacturing is a real advantage. If the components can be made with the yield and uniformity of modern silicon photonics, the cost of scaling to millions of components is lower than for hand-assembled systems. Photonic machines are also naturally networked, since fibers connect modules, and they may be the way different quantum computers will talk to each other. Finally, photons are well suited to specific tasks, such as sampling problems and certain simulations of molecular vibrations.",
        ] },
      { heading: "How to judge progress in photonic claims", paragraphs: [
          "A few indicators separate real progress from announcements. First, look for published measurements of the total optical loss budget of a complete logical qubit, including sources, waveguides, switches, and detectors, rather than the loss of individual parts. Second, look for the fidelity and indistinguishability of single photons as measured by independent groups. Third, look for demonstrations of error correction in which logical error decreases with code size, as in superconducting and atom platforms. Fourth, check whether the claimed qubit counts refer to physical components, resource states, or logical qubits, because photonic announcements often use terms that differ from other platforms.",
          "If those indicators improve steadily, confidence in the platform should rise. If announcements continue to emphasize future sites and funding without data, caution is warranted. We will revise this forecast as evidence appears.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We give photonic quantum computing a low confidence rating because the main claims are still ahead of public evidence. Over the next three years we expect progress in component performance, small logical qubit demonstrations, and networking between chips. A fault-tolerant photonic machine with a hundred logical qubits before 2030 would be a major surprise to us, and by the mid-2030s the outcome is wide open. Photonic technology will likely be central to quantum networking and interconnects regardless of whether it wins the computing race.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Improved low-loss components; small logical-qubit experiments; modular photonic networking demonstrations." },
      { label: "2029 to 2032", value: "First fault-tolerant-scale tests at utility-scale sites; independent evidence of loss budgets." },
      { label: "2033 to 2035", value: "Outcome uncertain: either a large photonic machine or a niche role in networking and interconnects." },
    ], signals: [
      "Published logical-qubit results with measured loss budgets.",
      "Detector efficiencies above 95 percent in foundry-made devices.",
      "Resource states generated at scale with high fidelity.",
      "Independent verification of PsiQuantum or Xanadu milestones.",
    ], risks: [
      "Loss may exceed the thresholds needed.",
      "Cryogenic detectors and switches may be harder to scale than expected.",
      "Competing platforms may reach fault tolerance first.",
    ], faq: [
      { q: "Do photonic quantum computers work at room temperature?", a: "Most optical components do, but the best single-photon detectors need cooling to a few kelvin." },
      { q: "Why is photon loss so important?", a: "Every lost photon is an error, and large machines contain millions of components, so tiny losses add up." },
      { q: "Has a photonic machine shown quantum advantage?", a: "Gaussian boson sampling experiments claimed advantage, but classical algorithms have since reduced those claims." },
    ], references: [
      "Knill, E., Laflamme, R., & Milburn, G. J. (2001). A scheme for efficient quantum computation with linear optics. Nature, 409, 46-52.",
      "Bartolucci, S., et al. (2023). Fusion-based quantum computation. Nature Communications, 14, 912.",
      "Alexander, K., et al. (2025). A manufacturable platform for photonic quantum computing. Nature, 641, 876-883.",
      "Aghaee Rad, H., et al. (2025). Scaling and networking a modular photonic quantum computer. Nature, 638, 912-919.",
      "Bourassa, J. E., et al. (2021). Blueprint for a scalable photonic fault-tolerant quantum computer. Quantum, 5, 392.",
      "Slussarenko, S., & Pryde, G. J. (2019). Photonic quantum information processing: A concise review. Applied Physics Reviews, 6, 041303.",
      "Madsen, L. S., et al. (2022). Quantum computational advantage with a programmable photonic processor. Nature, 606, 75-81.",
      "Oh, C., Liu, M., Alexeev, Y., Fefferman, B., & Jiang, L. (2024). Classical algorithm for simulating experimental Gaussian boson sampling. Nature Physics, 20, 1461-1468.",
    ], links: [
      { label: "Paper: A Scheme for Efficient Quantum Computation with Linear Optics", href: "/research/knill-laflamme-milburn-linear-optics-2001" },
      { label: "Paper: Fusion-Based Quantum Computation", href: "/research/bartolucci-fusion-based-quantum-computation-2023" },
      { label: "Paper: Quantum Computational Advantage with a Programmable Photonic Processor", href: "/research/madsen-borealis-photonic-advantage-2022" },
      { label: "Hardware: Xanadu Borealis", href: "/hardware/xanadu-borealis" },
      { label: "Term: Photonic Qubit", href: "/dictionary/photonic-qubit" },
      { label: "Term: GKP Qubit", href: "/dictionary/gkp-qubit" },
    ], words: 1092 },
  { slug: "silicon-spin-qubits-future", title: "Silicon Spin Qubits: Quantum Chips from Transistor Factories", category: "hardware", horizon: "2026 to 2040", confidence: "Medium", summary: "Spin qubits in silicon are tiny, can be made with chip-factory processes, and now meet the fidelity needed for error correction. The challenge is to scale from a dozen qubits to millions with uniform devices, short control lines, and local control electronics.", sections: [
      { heading: "Where spin qubits stand", paragraphs: [
          "A silicon spin qubit stores a bit of information in the spin of one electron trapped in a quantum dot, a nanoscale pocket defined by gate electrodes, or in a hole spin in germanium. The proposal by Loss and DiVincenzo in 1998 was followed by decades of slow progress, and then rapid improvements after groups moved to isotopically purified silicon-28, which has no nuclear spins to disturb the electron. In January 2022 three groups, at Delft, RIKEN, and UNSW, reported two-qubit gate fidelities above about 99 percent in papers published together in Nature.",
          "Industry has followed. Intel released Tunnel Falls, a 12-qubit chip made in its fabrication line, to researchers in 2023. Diraq, working with imec, reported devices made on 300-millimeter wafers in an industrial CMOS line with two-qubit fidelities above 99 percent in 2025. Quantum Motion in the UK has built a full-stack silicon quantum computer system, and groups in Australia, the Netherlands, Japan, and France work on related devices. Germanium hole-spin qubits have reached four-qubit processors and offer fast electrical control.",
        ] },
      { heading: "Why scaling might be easier here", paragraphs: [
          "The qubits are tiny, about the size of a transistor, so in principle a million fit on one chip, compared with a superconducting circuit that is millimeters across. They can be made with the processes used for transistors, so progress in the semiconductor industry may transfer. Operating temperatures are around 100 millikelvin to 1 kelvin in some devices, higher than the 10 millikelvin of superconducting qubits, so cooling and wiring are less demanding, and cryogenic CMOS control chips can sit next to the qubits, as Vandersypen and coauthors argued in 2017 for hot, dense, and coherent spin qubits.",
          "Several groups showed in 2020 that silicon spin qubits can operate above one kelvin, and the Delft and UNSW teams have shown shuttling of electrons across a chip to connect distant qubits. These properties suggest an architecture in which small groups of qubits are tightly controlled by local electronics and linked by shuttling or couplers.",
        ] },
      { heading: "Technical hurdles", paragraphs: [
          "Uniformity is the first hurdle. Each quantum dot is defined by tiny differences in gate shape and in the charge environment, so qubit frequencies and couplings vary from device to device, and each must be tuned. Automated tuning with machine learning is a main research area. Charge noise at interfaces limits gate fidelity, and the exchange interaction used for two-qubit gates decays quickly with distance, so qubits must be close, which creates crosstalk.",
          "Control and readout are the second. Each qubit needs several gate voltages, microwave or magnetic control, and a sensor for readout, and the line count grows with the number of qubits. Local cryogenic electronics, multiplexed readout, and shared control lines are key, but add heat and noise. Spin qubits have also shown fewer large-scale entangled demonstrations than other platforms, with devices of a dozen qubits at most.",
          "The third is the maturity of the error-correction stack. Fast measurement and reset, parallel operation, and decoding must be demonstrated, and the surface code needs nearest-neighbor connectivity in two dimensions that spin arrays can provide, but so far only in small tiles.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect silicon spin qubits to show a few dozen qubits with high-fidelity operation by about 2028, using industrial wafers and cryogenic control, and error-correction experiments such as small surface-code patches around 2028 to 2030. The platform's potential is long-term. If uniformity and control problems are solved, spin qubits could reach millions of qubits on one chip in the 2030s or later, which is why large technology companies and governments continue to invest. If not, the platform may stay at tens of qubits and serve niche roles such as sensors and small processors.",
          "We rate confidence as medium because the physics is solid and fidelity milestones are reached, but scaling has not been demonstrated.",
        ] },
      { heading: "The control electronics problem in numbers", paragraphs: [
          "The control problem can be estimated with simple arithmetic. A spin qubit needs about three to five control signals: voltages on several gates, a microwave or magnetic drive, and a readout channel. A million qubits would therefore need millions of connections. A dilution refrigerator can carry perhaps hundreds to a few thousand lines, so wiring every qubit directly is impossible, and shared lines, multiplexing, and local electronics are essential.",
          "Cryogenic CMOS chips running at 4 kelvin or lower have been demonstrated by Intel and by university groups, and spin qubits that operate at 1 kelvin ease the heat budget because cooling power rises quickly with temperature, from microwatts at 20 millikelvin to a watt at 4 kelvin. A design with qubits and control transistors on the same chip, or stacked in a three-dimensional package, is the long-term picture, and imec and others are working on it. The success of this line of research, more than qubit physics, will decide how large silicon quantum chips can become.",
        ] },
      { heading: "What would convince us the platform is on track", paragraphs: [
          "We would update toward optimism if a group demonstrated a chip with at least 50 qubits made in an industrial line, with two-qubit fidelities near 99.9 percent on all pairs, tuned automatically, and operating with local cryogenic control. We would also want to see a surface-code patch with logical error that falls with distance, and electron shuttling used routinely to connect qubit groups.",
          "We would update toward pessimism if variability continued to demand per-qubit hand tuning, if fidelity fell as arrays grew beyond a dozen qubits, or if the control electronics consumed too much power at the needed temperatures. These checks can be made within three to five years, which makes the platform's outlook more testable than many longer-term roadmaps.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Arrays of dozens of qubits on 300 mm wafers; automated tuning; cryo-CMOS integration." },
      { label: "2029 to 2032", value: "Small error-correcting patches; several hundred qubits with local control; modular links by shuttling." },
      { label: "2033 to 2040", value: "Possible chips with thousands to millions of qubits if uniformity and control scale." },
    ], signals: [
      "Two-qubit fidelity above 99.9 percent across entire wafers.",
      "Demonstrations of surface-code patches in silicon.",
      "Operation at 1 kelvin or above with high fidelity.",
      "Yield and variability data from industrial lines.",
    ], risks: [
      "Device variability could limit scaling.",
      "Control wiring and electronics may dominate cost and heat.",
      "Other platforms could reach fault tolerance first.",
    ], faq: [
      { q: "Why silicon?", a: "Because it is the material of the chip industry, and purified silicon-28 gives a quiet environment for electron spins." },
      { q: "Can silicon qubits run at higher temperatures?", a: "Some have operated above one kelvin, which would ease cooling compared with superconducting qubits." },
      { q: "Who builds them?", a: "Intel, Diraq, imec, Quantum Motion, Silicon Quantum Computing, and several universities." },
    ], references: [
      "Loss, D., & DiVincenzo, D. P. (1998). Quantum computation with quantum dots. Physical Review A, 57, 120-126.",
      "Burkard, G., Ladd, T. D., Pan, A., Nichol, J. M., & Petta, J. R. (2023). Semiconductor spin qubits. Reviews of Modern Physics, 95, 025003.",
      "Xue, X., et al. (2022). Quantum logic with spin qubits crossing the surface code threshold. Nature, 601, 343-347.",
      "Noiri, A., et al. (2022). Fast universal quantum gate above the fault-tolerance threshold in silicon. Nature, 601, 338-342.",
      "Veldhorst, M., et al. (2017). Silicon CMOS architecture for a spin-based quantum computer. Nature Communications, 8, 1766.",
      "Vandersypen, L. M. K., et al. (2017). Interfacing spin qubits in quantum dots and donors: hot, dense, and coherent. npj Quantum Information, 3, 34.",
      "Hendrickx, N. W., et al. (2021). A four-qubit germanium quantum processor. Nature, 591, 580-585.",
      "Yang, C. H., et al. (2020). Operation of a silicon quantum processor unit cell above one kelvin. Nature, 580, 350-354.",
    ], links: [
      { label: "Paper: Quantum Computation with Quantum Dots", href: "/research/loss-divincenzo-spin-qubits-quantum-dots-1998" },
      { label: "Paper: Quantum Logic with Spin Qubits Crossing the Surface Code Threshold", href: "/research/xue-spin-qubits-surface-code-threshold-2022" },
      { label: "Paper: Fast Universal Quantum Gate Above the Fault-Tolerance Threshold in Silicon", href: "/research/noiri-fast-universal-gate-silicon-2022" },
      { label: "Hardware: Diraq Silicon Spin-Qubit Devices (imec 300 mm CMOS)", href: "/hardware/diraq-core1" },
      { label: "Term: Spin Qubit", href: "/dictionary/spin-qubit" },
      { label: "Term: Cryogenic CMOS Control", href: "/dictionary/cryo-cmos" },
      { label: "Industry: Quantum Computing and the Semiconductor Industry", href: "/industries/semiconductors-electronics" },
    ], words: 1063 },
  { slug: "topological-qubits-future", title: "Topological Qubits: Will Majorana Machines Deliver?", category: "hardware", horizon: "2026 to 2040", confidence: "Low", summary: "Topological qubits promise built-in protection from errors, but after twenty years of work the evidence for them is still disputed. Microsoft's 2025 and 2026 chips are the key tests, and independent verification matters more than announcements.", sections: [
      { heading: "The idea and why it is attractive", paragraphs: [
          "A topological qubit stores information in a global property of a material, so local noise cannot easily change it, much as a knot in a rope persists when you shake the rope. In the leading proposal, pairs of Majorana zero modes at the ends of semiconductor-superconductor nanowires encode a qubit in the parity of electrons, and gates are done by braiding or by measurement. Kitaev described the idea in 1997, and Nayak and coauthors reviewed the physics of non-Abelian anyons in 2008.",
          "If it works, the payoff is large. A qubit with intrinsic protection could need far less error-correction overhead, because physical error rates could be orders of magnitude lower. That is why Microsoft has pursued the approach for about two decades, and why DARPA selected Microsoft and PsiQuantum for the final phase of its US2QC program in 2025. The risk is equally large: the physics is subtle, the materials are demanding, and the experimental signatures are easy to misread.",
        ] },
      { heading: "The record so far", paragraphs: [
          "The field has a history of claims that did not hold. A 2018 Nature paper reporting quantized Majorana conductance from a Microsoft-linked group was retracted in 2021 after data selection problems were found. Many experiments in the 2010s saw zero-bias conductance peaks that can arise from ordinary states and disorder, and critics, including Vincent Mourik, Sergey Frolov, and others, have argued that such signals are not proof of Majorana modes.",
          "In February 2025, Microsoft announced Majorana 1, a chip it described as the first with a topological core and eight qubits, and published a Nature paper on interferometric parity measurement in indium arsenide-aluminum devices. The journal added an editorial note that the paper does not by itself show that Majorana modes are present. Many physicists welcomed the engineering progress and asked for more evidence. On 2 June 2026, Microsoft announced Majorana 2, built with a lead superconductor and described as a tetron device, reporting parity lifetimes of about 20 seconds and a roughly thousandfold improvement in reliability, and repeating a target of useful quantum computing by 2029. Coverage notes that these are company claims with skepticism still present, and a long parity lifetime is not the same as a long-lived computational qubit.",
        ] },
      { heading: "What would count as proof", paragraphs: [
          "Several tests would be convincing. First, independent groups should reproduce key signatures in devices made by different processes. Second, there should be evidence of non-Abelian statistics, such as the result of braiding or fusion experiments that cannot be explained by trivial states. Third, the qubit should show coherent control with error rates and lifetimes that beat comparable conventional qubits, including on a sequence of operations such as a complete logical gate. Fourth, the data and analysis should be open for scrutiny.",
          "Synthetic demonstrations offer a related but different route. In 2023, Google and Quantinuum created and braided non-Abelian anyons on superconducting and trapped-ion processors, simulating the physics on conventional qubits. These experiments show that the theory is sound but do not give the hardware protection that a topological material would.",
        ] },
      { heading: "Alternatives and competition", paragraphs: [
          "Conventional qubits are improving, with error-corrected logical qubits showing exponential suppression. Bosonic cat qubits give strong protection against bit flips, and erasure qubits make errors visible. In that setting, a topological qubit has to compete not with today's physical qubits but with the combination of conventional qubits and codes that will exist by 2030. If Majorana qubits reach error rates of one in a million at the physical level, the advantage would still be large. If they reach only one in a thousand, the advantage would be modest.",
          "Other topological platforms exist, such as fractional quantum Hall states and certain materials proposed to host non-Abelian anyons, but they are earlier-stage, and none has a demonstrated qubit.",
        ] },
      { heading: "A short guide to reading Majorana news", paragraphs: [
          "Announcements in this area follow a pattern worth recognizing. A press release describes a new chip and a large improvement factor, a preprint or paper presents measurements, and independent physicists comment on whether the data prove the claimed physics. When you read such news, ask which quantity improved: a parity lifetime, a measurement fidelity, or a qubit coherence time are different things, and only the last matters directly for computing. Ask whether the device performed a computation, such as a gate or a logical operation, or only a measurement.",
          "Ask also whether the result has been reproduced outside the company, and whether the data are available for others to analyze. Companies sometimes report results first through press events and conferences, with peer review later. That is normal for industry, but in a field with a history of retractions, it is reasonable to wait for the peer-reviewed record and independent replication before updating strongly.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We keep a low confidence rating. A fair summary is that the engineering of nanowire devices and fast parity measurement has advanced, but the claim that the devices are topological qubits with the required protection is not yet established to the community's satisfaction. We think there is a meaningful chance, perhaps one in four, that a topological qubit with convincingly demonstrated protection appears by 2030, and a larger chance that the effort contributes tools useful elsewhere. We would revise sharply upward if independent groups reproduce the results and demonstrate braiding or logical operations.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Peer review and replication attempts of Majorana 2 results; more detailed data and independent analysis." },
      { label: "2028 to 2030", value: "First demonstrations of logical operations on topological qubits, if the physics holds; DARPA program decisions." },
      { label: "2031 to 2040", value: "Either a scalable topological platform or an eventual consensus that the approach does not work as hoped." },
    ], signals: [
      "Independent replication in other laboratories.",
      "Evidence of braiding or non-Abelian fusion.",
      "Gate error rates and coherence of topological qubits compared with conventional ones.",
      "Peer-reviewed publication with full data access.",
    ], risks: [
      "The devices may not be topological.",
      "Parity lifetimes may not translate into computational qubit performance.",
      "Conventional qubits may reach fault tolerance first.",
    ], faq: [
      { q: "Did Microsoft build a topological qubit?", a: "Microsoft says so, but many physicists say the evidence for topological protection is not yet conclusive." },
      { q: "What is a Majorana zero mode?", a: "An exotic quasiparticle at the ends of certain nanowires that could store quantum information in a protected way." },
      { q: "Is the 2018 Majorana paper still valid?", a: "No. The Nature paper from a Microsoft-linked group was retracted in 2021." },
    ], references: [
      "Kitaev, A. Yu. (2003). Fault-tolerant quantum computation by anyons. Annals of Physics, 303, 2-30.",
      "Nayak, C., Simon, S. H., Stern, A., Freedman, M., & Das Sarma, S. (2008). Non-Abelian anyons and topological quantum computation. Reviews of Modern Physics, 80, 1083-1159.",
      "Mourik, V., et al. (2012). Signatures of Majorana fermions in hybrid superconductor-semiconductor nanowire devices. Science, 336, 1003-1007.",
      "Microsoft Azure Quantum (2025). Interferometric single-shot parity measurement in InAs-Al hybrid devices. Nature, 638, 651-655.",
      "Andersen, T. I., et al. (2023). Non-Abelian braiding of graph vertices in a superconducting processor. Nature, 618, 264-269.",
      "Quantum Computing Report (2026). Microsoft announces an improved Majorana qubit design. https://quantumcomputingreport.com/microsoft-announces-an-improved-majorana-qubit-design/",
      "Redmond Magazine (2026). Microsoft ties Majorana 2 quantum chip to its Build AI push, 3 June 2026. https://redmondmag.com/articles/2026/06/03/microsoft-ties-majorana-2-quantum-chip-to-its-build-ai-push.aspx",
    ], links: [
      { label: "Paper: Fault-Tolerant Quantum Computation by Anyons", href: "/research/kitaev-fault-tolerant-anyons-2003" },
      { label: "Term: Topological Qubit", href: "/dictionary/topological-qubit" },
      { label: "Company: Microsoft", href: "/companies/microsoft" },
    ], words: 1026 },
  { slug: "bosonic-cat-gkp-qubits-future", title: "Bosonic Qubits: Cat, GKP, and Dual-Rail Designs", category: "hardware", horizon: "2026 to 2035", confidence: "Medium", summary: "Bosonic and erasure-style qubits trade complex hardware for simpler error correction. Cat qubits suppress one kind of error, GKP qubits fix small shifts, and dual-rail qubits make errors visible, and each could cut the number of qubits needed for a logical qubit.", sections: [
      { heading: "The core idea", paragraphs: [
          "Conventional error correction spends many physical qubits on correcting errors of every type. Bosonic approaches take advantage of the physics of oscillators, such as microwave cavities, to make errors rarer, easier to detect, or biased toward one type, so that the code on top can be smaller. Three families lead the field.",
          "Cat qubits encode a qubit in two opposite-phase coherent states of a cavity and use engineered two-photon dissipation to suppress bit flips exponentially in the size of the cat, leaving phase flips as the main error, which a simple repetition code can correct. GKP qubits, proposed by Gottesman, Kitaev, and Preskill in 2001, store a qubit as a comb-shaped state in the oscillator's phase space so that small shifts can be detected and undone. Dual-rail qubits store a qubit as a single excitation shared between two resonators or transmons, so that the dominant error, loss of the excitation, is detected as the loss of the signal and becomes an erasure, which is easier to correct than an unknown error.",
        ] },
      { heading: "What has been shown", paragraphs: [
          "Cat qubits: Lescanne and coauthors showed exponential suppression of bit flips in 2020, and Alice and Bob reported bit-flip times of many minutes in 2024. Amazon Web Services announced Ocelot in February 2025, combining cat qubits with a repetition code and claiming a large reduction in error-correction overhead. Guillaud and Mirrahimi and Chamberland and coauthors worked out how to build fault-tolerant machines from cat qubits, including bias-preserving gates.",
          "GKP qubits: A Yale team passed break-even in 2023, with a corrected GKP qubit outliving the best physical qubit in the system by about 2.3 times. Xanadu generated GKP states on a photonic chip in 2025, and Nord Quantique has reported multimode bosonic codes in superconducting cavities with the aim of building machines with far fewer components.",
          "Dual-rail and erasure qubits: Levine and coauthors demonstrated a long-coherence dual-rail erasure qubit using tunable transmons in 2024, and Quantum Circuits, Inc. has built systems using dual-rail qubits with erasure detection. Erasure conversion has also been demonstrated in neutral atoms and trapped ions in different forms.",
        ] },
      { heading: "Why they might matter", paragraphs: [
          "The cost of fault tolerance is dominated by the number of physical qubits per logical qubit. A surface code with good hardware can need hundreds to a thousand. If a bosonic scheme reduces this by an order of magnitude, as AWS and Alice and Bob claim, it could bring a useful machine closer by several years or lower its cost. Erasure qubits also raise the error threshold of the surface code, because known-location errors are easier to correct than unknown ones.",
          "There is also an engineering benefit: some designs need fewer control lines per logical qubit, and a cavity with many modes can in principle hold several qubits. Those advantages matter most for platforms where wiring and cryogenic capacity limit scale, such as superconducting circuits.",
        ] },
      { heading: "Challenges", paragraphs: [
          "Each approach has hard problems. Cat qubits need gates that keep the noise bias, especially entangling gates, and the dissipation engineering must work at scale without introducing new errors. Phase flips grow with the cat size, which sets a tradeoff. GKP qubits need high squeezing, about 10 to 12 decibels or more, and fast, accurate ancilla operations, and they are sensitive to loss. Dual-rail qubits double the number of components per qubit, and the erasure detection circuits themselves must be reliable.",
          "A more general challenge is that all these schemes add a layer to the architecture: bosonic modes, ancillas, control of nonlinear elements, and an outer code. The overall benefit depends on the full system, not on the numbers for a single qubit, and no group has yet demonstrated a full logical qubit with scaling in an architecture built from them. Surface-code experiments with conventional transmons are ahead on that measure.",
        ] },
      { heading: "How the three approaches compare", paragraphs: [
          "Cat qubits offer the simplest architecture if bias-preserving gates work: a line of cat qubits and a repetition code protects against the remaining error type. Their weakness is the need for nonlinear elements and careful dissipation engineering, and the phase-flip rate that grows with cat size. GKP qubits offer protection against a broad class of small errors in a single oscillator and fit both superconducting and photonic platforms, at the price of demanding squeezing and measurement quality. Dual-rail and erasure qubits are the most conservative: they use familiar components, make errors visible, and raise code thresholds, at the price of using two components per qubit.",
          "None has a clear lead, and a hybrid is plausible: a transmon-based chip with erasure detection for the dominant error, a surface code for the rest, and perhaps cat-like bias in some components. The architecture that wins will be the one that gives the lowest cost per logical operation at the target error rate, which can only be measured in system-level experiments that have not yet been done.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect bosonic and erasure-based designs to remain strong contenders, especially in superconducting and ion platforms, and to show logical qubit demonstrations with lower overhead within the next three years. Whether they overtake conventional qubits depends on demonstrating bias-preserving gates and logical operations at scale. We think it is more likely that some hybrid, with conventional qubits plus erasure detection or bias, becomes standard than that any single bosonic scheme wins outright.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Repetition-code logical qubits from cat qubits with improved gates; GKP and multimode demonstrations; commercial dual-rail systems." },
      { label: "2028 to 2030", value: "Logical gates with bosonic codes; first surface-code-on-cat or erasure-enhanced surface code demonstrations." },
      { label: "2031 to 2035", value: "Lower-overhead machines if bias-preserving gates scale; otherwise niche roles." },
    ], signals: [
      "Entangling gates that preserve noise bias with high fidelity.",
      "Logical error falling with code size for cat-qubit repetition codes.",
      "GKP states with more than 12 decibels of squeezing in practical devices.",
      "Resource estimates that include the full bosonic architecture.",
    ], risks: [
      "Added complexity may erase the savings.",
      "Gate errors may break the bias.",
      "Conventional qubits may improve faster.",
    ], faq: [
      { q: "What is a cat qubit?", a: "A qubit stored in two opposite-phase coherent states of a cavity, engineered so that bit flips become exponentially rare." },
      { q: "What is an erasure qubit?", a: "A qubit designed so that its main errors are detectable, which makes them easier to correct." },
      { q: "Who builds these?", a: "Alice and Bob, Amazon Web Services, Nord Quantique, Xanadu, Quantum Circuits, and academic groups." },
    ], references: [
      "Gottesman, D., Kitaev, A., & Preskill, J. (2001). Encoding a qubit in an oscillator. Physical Review A, 64, 012310.",
      "Mirrahimi, M., et al. (2014). Dynamically protected cat-qubits: a new paradigm for universal quantum computation. New Journal of Physics, 16, 045014.",
      "Lescanne, R., et al. (2020). Exponential suppression of bit-flips in a qubit encoded in an oscillator. Nature Physics, 16, 509-513.",
      "Sivak, V. V., et al. (2023). Real-time quantum error correction beyond break-even. Nature, 616, 50-55.",
      "Putterman, H., et al. (2025). Hardware-efficient quantum error correction via concatenated bosonic qubits. Nature, 638, 927-934.",
      "Terhal, B. M., Conrad, J., & Vuillot, C. (2020). Towards scalable bosonic quantum error correction. Quantum Science and Technology, 5, 043001.",
      "Guillaud, J., & Mirrahimi, M. (2019). Repetition cat qubits for fault-tolerant quantum computation. Physical Review X, 9, 041053.",
      "Levine, H., et al. (2024). Demonstrating a long-coherence dual-rail erasure qubit using tunable transmons. Physical Review X, 14, 011051.",
      "Wu, Y., Kolkowitz, S., Puri, S., & Thompson, J. D. (2022). Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays. Nature Communications, 13, 4657.",
    ], links: [
      { label: "Paper: Encoding a Qubit in an Oscillator", href: "/research/gottesman-kitaev-preskill-encoding-oscillator-2001" },
      { label: "Paper: Dynamically Protected Cat-Qubits: A New Paradigm for Universal Quantum Computation", href: "/research/mirrahimi-dynamically-protected-cat-qubits-2014" },
      { label: "Paper: Exponential Suppression of Bit-Flips in a Qubit Encoded in an Oscillator", href: "/research/lescanne-exponential-bit-flip-suppression-2020" },
      { label: "Paper: Real-Time Quantum Error Correction Beyond Break-Even", href: "/research/sivak-error-correction-beyond-break-even-2023" },
      { label: "Term: Cat Qubit", href: "/dictionary/cat-qubit" },
      { label: "Term: GKP Qubit", href: "/dictionary/gkp-qubit" },
      { label: "Hardware: Alice & Bob Boson 4 (cat qubit chip)", href: "/hardware/alice-bob-cat-qubit" },
    ], words: 1027 },
  { slug: "quantum-annealing-future", title: "Quantum Annealing: What D-Wave and Its Competitors Can Do", category: "hardware", horizon: "2026 to 2035", confidence: "Medium", summary: "Quantum annealers are the only quantum machines with thousands of qubits on sale, but they solve a narrow class of problems. The central question, whether they beat the best classical solvers, remains open and contested.", sections: [
      { heading: "What annealers are", paragraphs: [
          "A quantum annealer is a special-purpose machine that finds low-energy states of an Ising-type problem. The user encodes an optimization problem as couplings and fields among qubits, the machine starts in a state dominated by quantum fluctuations from a transverse field, and the field is reduced until the system settles in a configuration that encodes a good solution. Kadowaki and Nishimori formulated the method in 1998, and Farhi and coauthors framed it as adiabatic quantum computation in 2000. D-Wave Systems commercialized it starting in 2011.",
          "The hardware differs from gate-model computers. D-Wave's Advantage2 system has more than 4,400 superconducting flux qubits with higher connectivity than earlier generations, available through the company's cloud service since 2025. Machines can run thousands of anneals per second, each lasting microseconds, and are used through hybrid solvers that split large problems into pieces. Fujitsu's digital annealer, Toshiba's simulated bifurcation machine, and coherent Ising machines are classical or photonic competitors that attack the same class of problems.",
        ] },
      { heading: "The evidence on speedups", paragraphs: [
          "Since 2011, many studies have compared annealers with classical algorithms. Rønnow and coauthors in 2014 set out careful definitions of quantum speedup and found no clear speedup on random instances at that time. Denchev and coauthors at Google in 2016 reported a large speedup over simulated annealing for specially built instances, and Albash and Lidar in 2018 reported a scaling advantage over simulated annealing in some regimes, but specialized classical algorithms such as quantum Monte Carlo and the Hamze-de Freitas-Selby algorithm matched or surpassed the annealer in many cases. The pattern is that speedups appear against particular classical methods and not against the best available.",
          "In March 2025, D-Wave published in Science a claim of beyond-classical computation, simulating the quench dynamics of quantum magnetic materials, with an estimate that classical simulation would take about a million years. Other groups reproduced parts of the results with tensor networks and belief-propagation methods using modest classical resources, which disputes the strongest form of the claim. The exchange shows that the science is productive, since analog quantum simulation is a valid use, and that the advantage question is contested.",
        ] },
      { heading: "Where annealers may find a place", paragraphs: [
          "Realistic use cases fall in three groups. The first is analog quantum simulation of magnetic and spin-glass systems, which suits the hardware's natural Hamiltonian. The second is sampling from Boltzmann-like distributions, with uses in machine learning and statistical physics. The third is optimization for industrial problems such as scheduling, routing, and portfolio construction, where hybrid solvers produce good solutions and where customers value convenience and integration, but where classical solvers are often equally good.",
          "Commercial reports describe pilots in logistics, manufacturing, telecommunications, and finance, with some production deployments for scheduling and routing in specific companies. These are modest in scale. Whether customers would pay for annealers without a proven advantage depends on cost, ease of use, and the value of exploring a new tool, and revenue figures for the industry remain small relative to the hype.",
        ] },
      { heading: "Technical limits and the gate-model question", paragraphs: [
          "Annealers use stoquastic Hamiltonians, which can often be simulated efficiently by classical quantum Monte Carlo, so the hardware as built may not be universal. Aharonov and coauthors proved in 2007 that adiabatic computation with non-stoquastic interactions is equivalent to the circuit model, but implementing such interactions at scale and with low noise is a challenge. Noise, finite temperature, and limited control precision also restrict the problems that can be solved accurately, and mapping real problems to the hardware graph has overhead.",
          "D-Wave has said it is working on gate-model hardware in addition to annealing, and other companies are exploring new annealing designs with improved coherence. The long-term question is whether annealing remains a niche or evolves into something more general.",
        ] },
      { heading: "Practical advice for anyone considering an annealer", paragraphs: [
          "If you are thinking about trying an annealer for a business problem, treat it as an experiment. Start by formulating the problem as a quadratic unconstrained binary optimization problem or an Ising model and note how many variables and constraints it has. Solve the same problem with a strong classical solver, for example a commercial integer programming solver or a well-tuned heuristic, and record time, cost, and solution quality. Then run the annealer, usually through a hybrid solver, and compare under the same conditions.",
          "Pay attention to the cost of formulating the problem. Constraints must be turned into penalty terms, embedded in the hardware graph, and tuned, and this takes expertise. Also check whether the result is robust to small changes in the data, since annealers are noisy. If the annealer wins on your problem, check again at a larger size, because small instances are easy for every method. If it does not win, the exercise still teaches your team how to model optimization problems in a form that other quantum and classical methods can use, which is a modest but real benefit.",
        ] },
      { heading: "What could change the picture", paragraphs: [
          "Three developments could change this assessment. A demonstration of non-stoquastic couplings at useful scale would move annealing hardware toward universality and away from problems that classical Monte Carlo handles. An independent, reproducible result in which an annealer outperforms the best classical solver on a practical optimization benchmark would justify wider adoption. A sharp reduction in noise and an increase in coherence would make the pure adiabatic picture more accurate. None of these has happened yet.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect annealers to remain commercially available and to continue to be used for pilots and some production applications, with the analog simulation of quantum magnets as the most defensible quantum use. A broad, verified advantage for industrial optimization is unlikely in this decade. If you consider using one, benchmark against a strong classical solver on your actual problem and measure total cost and time.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Advantage2 deployments; more hybrid solver users; continued claim-and-rebuttal cycles on simulation advantage." },
      { label: "2029 to 2032", value: "Annealers coexist with gate-model machines; analog simulation results become more rigorous." },
      { label: "2033 to 2035", value: "Niche but stable role, or consolidation into broader quantum platforms." },
    ], signals: [
      "Independent benchmarks against the best classical solvers.",
      "Non-stoquastic interactions realized at scale.",
      "Customer deployments that persist after pilots.",
      "Peer-reviewed analog simulation results not reproduced classically.",
    ], risks: [
      "Classical solvers keep improving.",
      "The hardware may not be universal.",
      "Gate-model machines may absorb the optimization market.",
    ], faq: [
      { q: "Is a quantum annealer a real quantum computer?", a: "It is a special-purpose quantum device that exploits quantum effects but solves only a restricted class of problems." },
      { q: "Does D-Wave beat classical computers?", a: "On some problems against some classical methods. Claims of broad advantage are contested." },
      { q: "What can I use an annealer for?", a: "Scheduling, routing, sampling, and simulating magnetic systems, ideally compared against classical solvers first." },
    ], references: [
      "Kadowaki, T., & Nishimori, H. (1998). Quantum annealing in the transverse Ising model. Physical Review E, 58, 5355-5363.",
      "Farhi, E., Goldstone, J., Gutmann, S., & Sipser, M. (2000). Quantum computation by adiabatic evolution. arXiv:quant-ph/0001106.",
      "Aharonov, D., et al. (2007). Adiabatic quantum computation is equivalent to standard quantum computation. SIAM Journal on Computing, 37, 166-194.",
      "Rønnow, T. F., et al. (2014). Defining and detecting quantum speedup. Science, 345, 420-424.",
      "Denchev, V. S., et al. (2016). What is the computational value of finite-range tunneling? Physical Review X, 6, 031015.",
      "Albash, T., & Lidar, D. A. (2018). Demonstration of a scaling advantage for a quantum annealer over simulated annealing. Physical Review X, 8, 031016.",
      "Hauke, P., Katzgraber, H. G., Lechner, W., Nishimori, H., & Oliver, W. D. (2020). Perspectives of quantum annealing: Methods and implementations. Reports on Progress in Physics, 83, 054401.",
      "King, A. D., et al. (2025). Beyond-classical computation in quantum simulation. Science, 388, 199-204.",
    ], links: [
      { label: "Paper: Quantum Annealing in the Transverse Ising Model", href: "/research/kadowaki-nishimori-quantum-annealing-1998" },
      { label: "Paper: Quantum Computation by Adiabatic Evolution", href: "/research/farhi-adiabatic-evolution-2000" },
      { label: "Paper: Adiabatic Quantum Computation Is Equivalent to Standard Quantum Computation", href: "/research/aharonov-adiabatic-equivalent-circuit-2007" },
      { label: "Paper: Beyond-Classical Computation in Quantum Simulation", href: "/research/king-beyond-classical-quantum-simulation-2025" },
      { label: "Hardware: D-Wave Advantage2", href: "/hardware/dwave-advantage2" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
      { label: "Term: Quantum Annealing", href: "/dictionary/quantum-annealing" },
    ], words: 1073 },
  { slug: "quantum-cryogenics-wiring-future", title: "Cryogenics, Wiring, and Control Electronics: The Hidden Scaling Problem", category: "hardware", horizon: "2026 to 2038", confidence: "Medium", summary: "Beyond qubits, quantum computers need refrigerators, cables, and classical electronics. These supporting systems may decide how large machines can get and how much they cost, and several fixes are under way: cryogenic control chips, optical links, and modular designs.", sections: [
      { heading: "Why the plumbing matters", paragraphs: [
          "Headlines about qubit counts hide a larger physical system. A superconducting quantum computer sits inside a dilution refrigerator with stages at about 50 kelvin, 4 kelvin, 1 kelvin, 100 millikelvin, and 10 millikelvin, and each qubit needs control and readout lines that run from room-temperature electronics to the coldest stage. Every cable carries heat and noise, and the cooling power at the coldest stage is only tens of microwatts. A thousand-qubit machine already needs thousands of coaxial lines, and a million-qubit machine cannot be built by repeating the same approach.",
          "Neutral atoms, ions, and photonic systems avoid dilution refrigerators in part, but they have their own supporting systems: lasers and optics for thousands of beams, vacuum chambers, high-bandwidth control electronics, and detectors, some of which need cooling. In every platform, the classical hardware needed to control and read out qubits and to decode errors in real time is a large share of cost and complexity.",
        ] },
      { heading: "Cooling", paragraphs: [
          "Dilution refrigerators have become a business of their own. Bluefors, Oxford Instruments, Maybell, and others sell systems, and IBM built a large system called Goldeneye to test the cooling needs of larger processors. Krinner and coauthors laid out in 2019 how to engineer cryogenic setups for 100-qubit systems, and the lessons scale in a straightforward way: more lines need more cooling power, bigger plates, and better filtering.",
          "The supply chain has limits. Dilution refrigerators use helium-3, a rare isotope produced mainly as a byproduct of tritium decay in nuclear weapons programs, whose supply is limited, as the Congressional Research Service documented in 2010. Demand from quantum computing, medical imaging, and neutron detection has raised prices, and companies are exploring alternatives and recycling. Systems with larger cooling power and cryogen-free designs are improving, and modular designs, in which several smaller refrigerators are linked, are an answer to the size limit.",
        ] },
      { heading: "Wiring and control electronics", paragraphs: [
          "There are four main strategies. The first is multiplexing: sending several control signals over one cable using frequency division, and reading out many qubits through a shared feedline, which is already standard for readout. The second is cryogenic control electronics. Complementary metal-oxide-semiconductor chips designed to operate at 4 kelvin or lower, as in Intel's Horse Ridge chips and work at universities and Google, generate pulses near the qubits and cut the number of lines to the outside. Patra and coauthors and Charbon and coauthors described the design of cryo-CMOS circuits for quantum computing, and the limits are power dissipation and noise.",
          "The third is superconducting digital logic, in which single-flux-quantum circuits dissipate far less power at millikelvin temperatures than CMOS, as McDermott and coauthors proposed, though they are less mature. The fourth is optical delivery: sending control signals into the cryostat through optical fiber, which carries little heat, and converting them to microwaves near the qubits with photodetectors, an approach being developed by several groups. A related need is microwave-to-optical transduction for linking cryogenic modules, discussed in the context of quantum networks, which currently has low efficiency.",
          "Photonic and trapped-ion systems face similar problems with different technology: integrated photonics to deliver light, electronic control of ions by microwaves, and high-speed digital electronics.",
        ] },
      { heading: "Decoding and classical processing", paragraphs: [
          "Fault-tolerant machines need real-time decoders that process syndrome data every microsecond or so and feed corrections back. This is a classical computing problem at large scale, with data rates of terabits per second for large codes. Solutions use FPGAs and custom chips, parallel decoders, and, in some designs, neural networks. IBM's relay belief-propagation decoder and Google's real-time decoders are examples, and NVIDIA has announced hardware links aimed at connecting GPUs to quantum processors with low latency.",
          "The classical side may consume as much power and space as the quantum chip. For this reason, many roadmaps treat the quantum computer as a system with a classical co-processor, and resource estimates that ignore classical overhead can be misleading.",
        ] },
      { heading: "What it costs and what to expect", paragraphs: [
          "The cost of cryogenic and control infrastructure is a large part of the price of a quantum computer, and published estimates suggest that for superconducting systems the refrigerators, cables, and control electronics can account for a major share of the hardware cost. Systems currently sold to research customers cost from several million to tens of millions of dollars, and the price per qubit depends on the platform and the number of qubits. As volumes grow and designs mature, costs should fall, but the pace is unclear, and the supply chain for specialized components such as cryogenic amplifiers, superconducting cables, and cryo-CMOS chips is young.",
          "For readers following the field, the practical lesson is to look at the whole system when comparing roadmaps. A claim of a million qubits is incomplete without the number of fridges, the number of control lines, the power consumption, and the decoder hardware. Teams that publish these numbers are signaling that they have thought about scale, and teams that do not may have unsolved problems behind the headlines.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect incremental progress: more lines per fridge, multiplexed readout everywhere, cryo-CMOS chips in commercial systems by about 2028, and modular multi-fridge systems for the first machines with hundreds of logical qubits. A step change, such as practical optical delivery and efficient transduction, could arrive around 2030 to 2035 if research succeeds. These advances are less visible than qubit records, but they will decide cost per logical qubit, and so the economic viability of fault-tolerant machines.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Larger and modular dilution refrigerator systems; multiplexing standard; first commercial cryo-CMOS control in systems." },
      { label: "2029 to 2032", value: "Optical control links and chip-to-chip couplers in prototype machines; decoders on custom hardware." },
      { label: "2033 to 2038", value: "Mature supply chain for million-qubit class systems if the economics work." },
    ], signals: [
      "Lines per qubit falling below one in published architectures.",
      "Cryo-CMOS controllers with power below the cooling budget at 4 kelvin and below.",
      "Microwave-to-optical transduction with efficiency above 50 percent.",
      "Helium-3 supply and price trends.",
    ], risks: [
      "Control electronics may add noise that limits qubit performance.",
      "Supply constraints may raise costs.",
      "Decoder latency may limit code size.",
    ], faq: [
      { q: "Why do superconducting qubits need so many cables?", a: "Each qubit needs lines for control and readout, and every line carries heat and noise into the cold stage." },
      { q: "What is cryo-CMOS?", a: "Control chips made with standard transistor technology but designed to work at very low temperatures next to the qubits." },
      { q: "Is helium-3 a real constraint?", a: "Yes. It is scarce, and demand from quantum computing is raising prices." },
    ], references: [
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "Patra, B., et al. (2018). Cryo-CMOS circuits and systems for quantum computing applications. IEEE Journal of Solid-State Circuits, 53, 309-321.",
      "Charbon, E., et al. (2016). Cryo-CMOS for quantum computing. IEEE International Electron Devices Meeting (IEDM).",
      "McDermott, R., et al. (2018). Quantum-classical interface based on single flux quantum digital logic. Quantum Science and Technology, 3, 024004.",
      "Lauk, N., et al. (2020). Perspectives on quantum transduction. Quantum Science and Technology, 5, 020501.",
      "Shea, D. A., & Morgan, D. (2010). The helium-3 shortage: Supply, demand, and options for Congress. Congressional Research Service Report R41419.",
      "Higgott, O., & Gidney, C. (2025). Sparse blossom: correcting a million errors per core second with minimum-weight matching. Quantum.",
    ], links: [
      { label: "Term: Dilution Refrigerator", href: "/dictionary/dilution-refrigerator" },
      { label: "Term: Cryogenic CMOS Control", href: "/dictionary/cryo-cmos" },
      { label: "Term: Syndrome Measurement", href: "/dictionary/syndrome-measurement" },
      { label: "Industry: Quantum Computing and the Semiconductor Industry", href: "/industries/semiconductors-electronics" },
    ], words: 1047 },
  { slug: "quantum-hpc-integration-future", title: "Quantum Meets Supercomputing: Hybrid Systems and Quantum Data Centers", category: "hardware", horizon: "2026 to 2035", confidence: "High", summary: "Quantum processors are being installed next to supercomputers and GPU clusters, and most useful workflows will be hybrid. The integration of fast classical control, decoding, and shared software is as important as the quantum chip.", sections: [
      { heading: "Why hybrid is the default", paragraphs: [
          "Almost every real quantum workload combines quantum and classical computing. A variational algorithm alternates between circuits on a quantum processor and optimization on a classical computer. Error correction needs a classical decoder that reads measurements every microsecond. Chemistry workflows use classical computers to choose active spaces and prepare Hamiltonians, and to post-process results. Even a fault-tolerant machine is a hybrid system, so the real question is how tightly the two are connected.",
          "This is why national laboratories and supercomputing centers have become major customers. Humble and coauthors described in 2021 how quantum computers could be integrated into high-performance computing as accelerators, much like GPUs, called by classical programs for specific tasks. Alexeev and coauthors in 2021 described the systems view for scientific discovery.",
        ] },
      { heading: "What is happening now", paragraphs: [
          "Quantum machines are being placed inside HPC centers. RIKEN in Japan pairs IBM and Quantinuum systems with the Fugaku supercomputer, Jülich in Germany, the Leibniz Supercomputing Centre, Oak Ridge National Laboratory, and others host quantum systems from several vendors, and many European centers are integrating machines under EuroHPC. IBM and RIKEN reported in 2025 a quantum-centric supercomputing workflow in which a Heron processor samples configurations and Fugaku processes them in a method called sample-based quantum diagonalization, applied to molecules beyond the scale of exact classical diagonalization, though classical methods can approximate such systems well.",
          "NVIDIA has built a software and hardware stack for the integration: CUDA-Q for programming hybrid workflows, and NVQLink, announced in 2025, a connection aimed at linking quantum processors with GPUs at microsecond latency, with many vendors and national laboratories as partners. The stack targets uses such as decoding, calibration, and real-time control.",
        ] },
      { heading: "Technical issues", paragraphs: [
          "Latency is the main issue. Variational algorithms involve thousands of iterations, so queueing and network delays dominate unless the classical loop is close to the hardware, which is why runtimes such as Qiskit Runtime and Braket Hybrid Jobs keep the loop on the provider's side. Error correction demands far tighter latency: decoding for superconducting machines must keep up with cycles of about a microsecond, and the delay between measurement and feedback limits the speed of logical operations.",
          "Software is the second. Programs must describe workflows across different processors, and compilers must optimize across the boundary. Standards such as OpenQASM 3 and the Quantum Intermediate Representation help, but the ecosystem is fragmented. Scheduling is the third issue: quantum machines are scarce, calibrations drift over hours, and queues vary, so HPC schedulers need to learn how to manage them.",
          "The fourth is data and cost. Quantum workloads produce small outputs compared with simulation, but the preparation can involve large classical data, so data movement and cost per job matter. Customers will judge the combination on time to solution and total cost against classical alternatives, including GPU clusters, which are improving quickly.",
        ] },
      { heading: "Quantum data centers", paragraphs: [
          "Several companies describe quantum data centers: facilities that house many quantum systems with shared cryogenics, power, and classical infrastructure, offering cloud access. IBM has opened a quantum data center in Poughkeepsie and plans for others, IonQ and Quantinuum are expanding facilities, and PsiQuantum is building large sites. Over time, these facilities may look like a co-located mix of GPU racks and quantum modules linked by fast networks. For large customers, such as governments and pharmaceutical firms, on-premises systems may be purchased, while others will use the cloud.",
        ] },
      { heading: "What a hybrid workload looks like in practice", paragraphs: [
          "A typical hybrid chemistry workflow shows the division of labor. A classical program selects the molecule and the active space, computes integrals, and builds the Hamiltonian. The quantum processor runs circuits that prepare trial states and returns measurement samples. A classical program turns those samples into energy estimates or into a reduced problem that it solves with supercomputer resources, and an optimizer decides the next circuits. The loop repeats until the result converges.",
          "In error-corrected machines the same split appears at a faster timescale: the quantum chip runs syndrome extraction, the classical decoder interprets the results within microseconds, and the controller applies corrections. In both cases the classical part is not a detail. It determines the speed, cost, and reliability of the whole system, and teams that treat quantum and classical engineering as one project tend to progress faster.",
        ] },
      { heading: "Standards and organizational readiness", paragraphs: [
          "Organizations that want to use quantum resources can prepare in practical ways. Teams should learn the common programming tools, such as Qiskit and CUDA-Q, and run workloads on simulators and small devices to understand the workflow. Procurement and security teams should consider how data will be handled in cloud quantum services, and how post-quantum cryptography applies to the connections. Scheduling and accounting systems at HPC centers will need to support quantum jobs with different characteristics from classical ones.",
          "At the standards level, work continues on circuit languages, runtime interfaces, and benchmarks, and industry consortia and national laboratories publish reference architectures. We expect convergence on a few widely used interfaces by the late 2020s, which would reduce vendor lock-in and make hybrid workflows portable.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We have high confidence that hybrid integration will define the field through the 2030s. Expect most announcements to emphasize quantum-centric supercomputing, GPU-quantum links, and shared software. The first real value is likely to come from workflows in which the quantum processor handles a narrow subroutine and the classical system does most of the work, which makes honest benchmarking against classical-only workflows essential. Standardization of interfaces will accelerate adoption.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Quantum systems installed at most major HPC centers; GPU-quantum links in production use for calibration and decoding." },
      { label: "2029 to 2032", value: "Fault-tolerant prototypes with tightly integrated decoders; standard hybrid programming interfaces." },
      { label: "2033 to 2035", value: "Quantum modules as routine accelerators in some HPC centers, if advantage appears." },
    ], signals: [
      "Microsecond-latency links between GPUs and quantum processors in routine use.",
      "Standards for hybrid workflows and scheduling.",
      "Published hybrid workflows beating classical-only baselines.",
      "Procurement of quantum systems by supercomputing centers.",
    ], risks: [
      "Hybrid workflows may not beat strong classical ones.",
      "Fragmented software may slow adoption.",
      "Quantum hardware may remain too scarce for production use.",
    ], faq: [
      { q: "Will quantum computers replace supercomputers?", a: "No. They will work alongside them as accelerators for specific tasks." },
      { q: "What is quantum-centric supercomputing?", a: "A workflow in which quantum processors and classical supercomputers cooperate, as IBM and RIKEN demonstrated." },
      { q: "Why is latency so important?", a: "Because error correction and variational loops need fast classical feedback." },
    ], references: [
      "Humble, T. S., et al. (2021). Quantum computers for high-performance computing. IEEE Micro, 41(5), 15-23.",
      "Alexeev, Y., et al. (2021). Quantum computer systems for scientific discovery. PRX Quantum, 2, 017001.",
      "Britt, K. A., & Humble, T. S. (2017). High-performance computing with quantum processing units. ACM Journal on Emerging Technologies in Computing Systems, 13, 39.",
      "Robledo-Moreno, J., et al. (2025). Chemistry beyond the scale of exact diagonalization on a quantum-centric supercomputer. Science Advances, 11, eadu9991.",
      "Bharti, K., et al. (2022). Noisy intermediate-scale quantum algorithms. Reviews of Modern Physics, 94, 015004.",
      "Cerezo, M., et al. (2021). Variational quantum algorithms. Nature Reviews Physics, 3, 625-644.",
      "NVIDIA (2025). NVQLink announcement: connecting quantum processors to GPU supercomputing. NVIDIA press release, October 2025.",
    ], links: [
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Term: Variational Quantum Algorithm", href: "/dictionary/variational-quantum-algorithm" },
      { label: "Industry: Quantum Computing, AI, and Data Centers", href: "/industries/artificial-intelligence-data-centers" },
      { label: "Company: IBM", href: "/companies/ibm" },
    ], words: 1024 },
];

export function getFutureTopic(slug: string) {
  return futureTopics.find((t) => t.slug === slug);
}
