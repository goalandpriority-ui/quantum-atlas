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
  { slug: "logical-qubit-milestones-future", title: "Logical Qubits: How Many, How Good, and When", category: "error-correction", horizon: "2026 to 2035", confidence: "Medium", summary: "Logical qubit counts are the new headline number, but they are easy to misread. What matters is the logical error rate, the code distance, and whether logical gates work, and on those measures the field is moving from a handful of good logical qubits to tens by the end of the decade.", sections: [
      { heading: "Why logical qubits are the right yardstick", paragraphs: [
          "A physical qubit is an imperfect device. A logical qubit is a qubit encoded across many physical qubits by an error-correcting code so that errors can be detected and corrected, which makes it far more reliable than any single component. Useful algorithms need logical qubits because they run for billions of operations, and physical error rates of 0.1 percent would ruin them within a thousand steps. For that reason roadmaps have shifted from counting physical qubits to counting logical ones.",
          "The shift also brings confusion. A claim of dozens of logical qubits can mean very different things depending on the code, the way errors are handled, and what operations were performed. A fair reading needs four numbers: the code distance, the logical error rate per cycle or per operation, the fraction of runs discarded by post-selection, and whether logical gates and not only memory were shown.",
        ] },
      { heading: "What has been shown", paragraphs: [
          "The most convincing result is Google's 2024 surface-code experiment on the Willow chip. Logical error fell by about a factor of 2.14 each time the code distance rose from 3 to 5 to 7, ending at about 0.143 percent per cycle, with the logical memory outliving the best physical qubit by roughly 2.4 times. This is real error correction, in the sense that bigger codes do better, but it is a single logical qubit and a memory.",
          "On other platforms, results emphasize counts. Harvard, QuEra, and collaborators reported 48 logical qubits on neutral atoms in 2023 using small codes, and later work extended the architecture to larger numbers, including reports of up to 96 logical qubits. Microsoft and Quantinuum reported logical qubits with error rates well below the physical ones on trapped ions in 2024, Microsoft and Atom Computing reported 24 entangled logical qubits, Quantinuum reported dozens of logical qubits on its Helios system in 2025 and 2026, and Infleqtion reported 30 entangled logical qubits in September 2026. Many of these use distance-two or distance-three codes that detect errors, together with post-selection, which does not scale to long computations.",
          "The practical conclusion is that the field has shown the ingredients on different platforms, but not yet a machine with many logical qubits whose error rates fall steadily with code distance, with logical gates, and without post-selection.",
        ] },
      { heading: "Roadmaps and what to discount", paragraphs: [
          "The published roadmaps are ambitious. IBM aims for about 200 logical qubits running 100 million operations on its Starling system in 2029, and about 2,000 logical qubits and a billion operations around 2033. Quantinuum targets a universal fault-tolerant machine named Apollo in 2029 with hundreds of logical qubits. QuEra's plan called for 100 logical qubits in 2026. Google's milestone list includes a long-lived logical qubit with error near one in a million, a logical gate, and then about 100 logical qubits. IonQ has described far larger numbers by 2030, based on millions of physical qubits, which we treat as the least certain.",
          "A useful way to discount a roadmap is to ask which piece has been demonstrated at small scale. Logical memory below threshold has, on superconducting qubits. Logical gates with error correction have only partly. Magic states at the logical level have been shown in small experiments. Fast real-time decoding at scale has not. Each missing piece adds risk to the date.",
        ] },
      { heading: "How to compare claims", paragraphs: [
          "We suggest a simple checklist for logical qubit claims. First, is the code able to correct errors or only to detect them? Second, was the logical error rate measured per cycle or per operation, and how does it compare with the physical error rate? Third, how does the error change with code distance, since that scaling is the signature of fault tolerance? Fourth, were logical gates shown, including entangling gates between logical qubits? Fifth, how many runs were discarded?",
          "By these measures, a handful of logical qubits with decreasing error as distance grows is worth more than dozens of small-code logical qubits with post-selection. We expect the community to converge on reporting standards, and several groups have already begun to publish more complete tables.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect the first systems with tens of logical qubits that satisfy a strict definition, meaning below-threshold scaling, logical gates, and no post-selection, to appear around 2027 to 2029. Machines with about 100 logical qubits and logical error rates near one in ten thousand to one in a million are plausible around 2029 to 2031. A thousand logical qubits at error rates low enough for chemistry and cryptanalysis is more likely in the mid-2030s. These are central estimates, and the uncertainty is a few years in each direction because the problems are partly engineering and partly unknown.",
        ] },
      { heading: "Why the numbers will keep changing meaning", paragraphs: [
          "As the field matures, the definition of a good logical qubit will tighten. Today a result can be called a logical qubit if it protects information better than a single physical qubit, even for a short time and with small codes. Within a few years the expectation will be a logical qubit that supports a universal set of gates, survives thousands of correction cycles, and has a logical error rate that can be projected to the needs of an algorithm. Companies and researchers will then report logical operations per second, the logical error per operation, and the resource cost of each logical gate, much as classical computing reports instructions per second and error rates for memory.",
          "Readers should expect today's claims to look modest by those later standards, and should not read the absence of strict definitions as a sign that the progress is not real. The ingredients are being demonstrated, and the engineering to combine them is the main task of the next five years.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Several platforms report logical qubits with strict definitions; first logical gates with error correction below threshold." },
      { label: "2028 to 2029", value: "Tens of logical qubits with logical error near 10^-4; roadmap targets of 2029 for 100 to 200 logical qubits tested." },
      { label: "2030 to 2032", value: "About 100 to several hundred logical qubits at error near 10^-6 on leading platforms." },
      { label: "2033 to 2035", value: "Roughly a thousand logical qubits plausible; algorithms for chemistry and cryptanalysis within reach." },
    ], signals: [
      "Logical error per cycle below 10^-4 and then 10^-6.",
      "Logical entangling gates between error-corrected qubits with below-threshold scaling.",
      "Results without post-selection on codes of distance five or more.",
      "Independent replication of vendor logical qubit claims.",
    ], risks: [
      "Correlated errors or leakage could break the scaling at larger distances.",
      "Decoding speed could limit logical clock rates.",
      "Roadmap dates could slip by several years.",
    ], faq: [
      { q: "What is a logical qubit?", a: "A qubit encoded in many physical qubits with an error-correcting code, so that errors can be detected and fixed." },
      { q: "Does a larger logical qubit count mean a better computer?", a: "Not by itself. The logical error rate, the code distance, and the ability to run logical gates matter more." },
      { q: "Why do some claims use post-selection?", a: "Discarding runs with detected errors improves apparent quality but does not scale to long computations." },
    ], references: [
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Bluvstein, D., et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature, 626, 58-65.",
      "Ryan-Anderson, C., et al. (2021). Realization of real-time fault-tolerant quantum error correction. Physical Review X, 11, 041058.",
      "da Silva, M. P., et al. (2024). Demonstration of logical qubits and repeated error correction with better-than-physical error rates. arXiv:2404.02280.",
      "Terhal, B. M. (2015). Quantum error correction for quantum memories. Reviews of Modern Physics, 87, 307-346.",
      "Campbell, E. T., Terhal, B. M., & Vuillot, C. (2017). Roads towards fault-tolerant universal quantum computation. Nature, 549, 172-179.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
      "Quantum Computing Report (2026). Infleqtion achieves 30 entangled logical qubits on Sqale neutral atom quantum processor. https://quantumcomputingreport.com/infleqtion-achieves-30-entangled-logical-qubits-on-sqale-neutral-atom-quantum-processor/amp/",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
      { label: "Paper: Suppressing Quantum Errors by Scaling a Surface Code Logical Qubit", href: "/research/google-suppressing-errors-surface-code-2023" },
      { label: "Term: Logical Qubit", href: "/dictionary/logical-qubit" },
      { label: "Term: Logical Error Rate", href: "/dictionary/logical-error-rate" },
      { label: "Term: Code Distance", href: "/dictionary/code-distance" },
    ], words: 1131 },
  { slug: "qldpc-codes-future", title: "Beyond the Surface Code: Quantum LDPC Codes", category: "error-correction", horizon: "2026 to 2035", confidence: "Medium", summary: "Quantum LDPC codes could protect many logical qubits with far fewer physical qubits than the surface code, at the cost of longer-range connections. IBM has built its fault-tolerant roadmap on them, and neutral atoms and ions may suit them even better.", sections: [
      { heading: "The overhead problem", paragraphs: [
          "The surface code is easy to build, since it needs only nearest-neighbor connections on a flat chip, and it tolerates error rates around one percent. Its drawback is overhead. A logical qubit of distance d uses about 2 d squared physical qubits, so the logical error rate of one in a billion can need roughly a thousand physical qubits per logical qubit, and an algorithm with thousands of logical qubits needs millions of physical ones. These numbers drive the cost and size of fault-tolerant machines.",
          "The classical error-correction world has long had better options. Low-density parity-check codes, introduced by Gallager in 1962, protect long messages with a constant fraction of redundancy using sparse checks, and they are used in Wi-Fi, 5G, and satellite links. The quantum analogs, in which each check involves only a few qubits and each qubit takes part in only a few checks, could in principle keep the rate of logical to physical qubits high.",
        ] },
      { heading: "How the theory developed", paragraphs: [
          "The search for good quantum LDPC codes took more than twenty years. Hypergraph product codes by Tillich and Zémor in 2009 gave constant rate with distance growing as the square root of the length. Several improvements followed, and in 2021 Pavel Panteleev and Gleb Kalachev proved the existence of asymptotically good quantum LDPC codes, with constant rate and linear distance, using a lifted product construction. Leverrier and Zémor's quantum Tanner codes in 2022 achieved the same result by a different route, and Dinur and coauthors gave efficient decoders for related codes.",
          "Practical codes are smaller and more structured. In 2024 IBM researchers showed bivariate bicycle codes, including the gross code that stores 12 logical qubits with distance 12 in 144 data qubits plus 144 check qubits, about ten times fewer qubits than the surface code for similar protection, with a circuit-level threshold near 0.8 percent. Other proposals, such as the constant-overhead scheme of Xu and coauthors for reconfigurable atom arrays, and the lifted-product codes explored by several groups, promise further savings.",
        ] },
      { heading: "What it costs", paragraphs: [
          "The price of the saving is connectivity. Check circuits in a bivariate bicycle code need each qubit to interact with six others, in a pattern that is not planar, so a flat chip cannot lay it out with only nearest-neighbor couplers. IBM's design uses a two-layer arrangement with long-range couplers, and its Loon processor, announced in November 2025, tests such connections. Neutral atoms, which can be moved, and trapped ions in modular traps have more natural access to nonlocal connections, which is a reason that several atom groups are interested in the codes.",
          "Logical operations are the second cost. The memory results are promising, but performing gates on qLDPC codes, such as measuring logical operators and teleporting between code blocks, is harder than lattice surgery on surface codes and has been the subject of active research since 2023, including generalized lattice surgery and code switching. Decoders are the third: belief propagation with ordered statistics post-processing works well in simulation and IBM has reported faster variants, but real-time operation at scale is not yet demonstrated.",
        ] },
      { heading: "Who is betting on what", paragraphs: [
          "IBM's roadmap for Starling in 2029 uses bivariate bicycle codes for memory with logical processing units based on related ideas, and its Kookaburra and Cockatoo modules in 2026 and 2027 test the memory and the links between modules. Google continues to build on the surface code and has also studied alternatives. Neutral-atom companies such as QuEra and Atom Computing and academic groups study hypercube and lifted-product codes. Alice and Bob and AWS pair cat qubits with repetition codes that have an LDPC flavor. Quantinuum has explored high-rate codes on its connected ion hardware.",
          "This diversity is healthy. The best code depends on the hardware's connectivity, speed, and error structure, and different platforms may converge on different codes.",
        ] },
      { heading: "A comparison with the surface code in numbers", paragraphs: [
          "A rough comparison shows the stakes. To protect 12 logical qubits at a distance of 12, a surface code needs on the order of 12 times about 2 times 144, or roughly 3,000 physical qubits, while the gross code uses 288. For a machine with 200 logical qubits, that difference is the gap between hundreds of thousands and tens of thousands of physical qubits for memory alone. Savings of that size matter for cooling, wiring, and cost, and they help explain why IBM changed its roadmap to qLDPC codes in 2023 and 2024.",
          "The comparison is not complete without the cost of the nonlocal connections, the larger control complexity, and the slower or more complex logical gates. A fair summary is that qLDPC codes win on memory and on qubit count, and the surface code still wins on simplicity and on the maturity of its decoders and operations. The two will probably coexist for years.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We think qLDPC codes will be used in some of the first fault-tolerant machines, most likely in IBM's modular superconducting systems and in atom-based systems, with surface codes remaining the baseline elsewhere. The reduction in physical qubits by a factor of about five to ten is significant but is not the only cost driver, since logical gate speed, decoding, and magic state supply also matter. We expect the first hardware demonstrations of qLDPC memory in 2026 and 2027, and demonstrations of logical operations in the following two years. A machine whose cost advantage from qLDPC codes is demonstrated end to end is a 2029 to 2031 event in our view.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Loon and Kookaburra-class tests of qLDPC memory and long-range couplers; atom-array experiments with high-rate codes." },
      { label: "2028 to 2029", value: "Logical operations on qLDPC codes; IBM targets Starling in 2029." },
      { label: "2030 to 2035", value: "qLDPC codes common in modular and atom-based machines; physical qubit counts for useful algorithms fall." },
    ], signals: [
      "Below-threshold scaling shown for a qLDPC memory on hardware.",
      "Fast decoders running in real time for codes with hundreds of qubits.",
      "Logical gates between qLDPC blocks with measured error rates.",
      "Long-range couplers with high fidelity on superconducting chips.",
    ], risks: [
      "Long-range couplers may add noise and crosstalk.",
      "Logical gate overhead may erase the memory savings.",
      "Decoders may not scale to real time.",
    ], faq: [
      { q: "What is a qLDPC code?", a: "A quantum error-correcting code whose checks each involve only a few qubits, which allows high efficiency." },
      { q: "Why is IBM using them?", a: "They need about ten times fewer qubits than the surface code for similar protection in memory." },
      { q: "What is the catch?", a: "They need connections between distant qubits that planar chips do not provide." },
    ], references: [
      "Panteleev, P., & Kalachev, G. (2022). Asymptotically good quantum and locally testable classical LDPC codes. STOC '22, 375-388.",
      "Bravyi, S., et al. (2024). High-threshold and low-overhead fault-tolerant quantum memory. Nature, 627, 778-782.",
      "Breuckmann, N. P., & Eberhardt, J. N. (2021). Quantum low-density parity-check codes. PRX Quantum, 2, 040101.",
      "Tillich, J.-P., & Zémor, G. (2014). Quantum LDPC codes with positive rate and minimum distance proportional to the square root of the blocklength. IEEE Transactions on Information Theory, 60, 1193-1202.",
      "Xu, Q., et al. (2024). Constant-overhead fault-tolerant quantum computation with reconfigurable atom arrays. Nature Physics, 20, 1084-1090.",
      "Roffe, J., White, D. R., Burton, S., & Campbell, E. (2020). Decoding across the quantum low-density parity-check code landscape. Physical Review Research, 2, 043423.",
      "Yoder, T. J., et al. (2025). Tour de gross: A modular quantum computer based on bivariate bicycle codes. arXiv:2506.03094.",
      "Cohen, L. Z., Kim, I. H., Bartlett, S. D., & Brown, B. J. (2022). Low-overhead fault-tolerant quantum computing using long-range connectivity. Science Advances, 8, eabn1717.",
    ], links: [
      { label: "Paper: High-Threshold and Low-Overhead Fault-Tolerant Quantum Memory", href: "/research/bravyi-high-threshold-low-overhead-memory-2024" },
      { label: "Paper: Asymptotically Good Quantum and Locally Testable Classical LDPC Codes", href: "/research/panteleev-kalachev-good-qldpc-codes-2022" },
      { label: "Term: Quantum LDPC Code", href: "/dictionary/qldpc-code" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
      { label: "Term: Stabilizer Code", href: "/dictionary/stabilizer-code" },
    ], words: 1052 },
  { slug: "magic-states-non-clifford-future", title: "Magic States and the Cost of Non-Clifford Gates", category: "error-correction", horizon: "2026 to 2033", confidence: "Medium", summary: "Error-corrected machines get most operations cheaply but need special resource states for the T gate. Magic state factories have consumed half or more of the qubits in resource estimates, and new methods such as cultivation could cut that cost by about an order of magnitude.", sections: [
      { heading: "Why a special state is needed", paragraphs: [
          "Fault-tolerant machines can perform some gates, the Clifford gates, easily and exactly on encoded qubits. Those gates alone cannot do a useful quantum computation, because circuits made only of Clifford gates can be simulated efficiently on a classical computer, by the Gottesman-Knill theorem. A non-Clifford gate such as the T gate is required, and the Eastin-Knill theorem of 2009 shows that no code that detects local errors can implement a universal gate set transversally, so some extra technique is unavoidable.",
          "The standard solution, proposed by Bravyi and Kitaev in 2005, is to prepare a special state, a magic state, offline and consume it with a small circuit that teleports the gate onto the data, a method of gate teleportation described by Gottesman and Chuang in 1999. The difficulty is that the magic state itself must be of very high quality, often with error of one part in a billion or better, while raw preparation gives errors of about one percent.",
        ] },
      { heading: "The traditional approach: distillation", paragraphs: [
          "Magic state distillation purifies many noisy states into fewer good ones using Clifford operations and measurements. The best-known protocol takes 15 noisy states with error p and produces one with error about 35 p cubed. Repeating rounds reaches the required quality, but each round multiplies the number of states consumed by 15, so full distillation uses hundreds of raw states per output and requires regions of the chip set aside as factories.",
          "Resource estimates show the consequence. In the 2019 estimate by Gidney and Ekerå for RSA-2048, factories take a large fraction of the machine, and in estimates for chemistry, the number of T gates, which can reach billions to trillions, sets the run time as well as the size. Litinski showed in 2019 that careful layouts and lattice surgery reduce the cost substantially, but it remained a dominant term.",
        ] },
      { heading: "New methods: cultivation and logical-level experiments", paragraphs: [
          "In 2024, Gidney, Shutty, and Jones proposed magic state cultivation. A small color code is prepared in a noisy T-like state and repeatedly checked by measurements, with runs discarded when errors are detected, and the code is enlarged in stages before the state is moved into a surface code. At a physical error rate of 0.1 percent, the method produces T states with error near a part in a billion at a cost of a few hundred qubit-rounds, roughly the cost of a few CNOT gates and about an order of magnitude below distillation. The 2025 estimate that RSA-2048 could be factored with under a million noisy qubits relied on it.",
          "Experiments are beginning. QuEra and Harvard reported logical-level magic state distillation on a neutral-atom machine in 2025, and Quantinuum has reported logical magic states with fidelity beyond that of physical ones on its trapped-ion systems. These experiments are small and have not shown the full scaling, but they confirm that the steps work on real hardware.",
        ] },
      { heading: "Alternatives", paragraphs: [
          "Other routes to non-Clifford gates exist. Some three-dimensional codes have transversal T gates, which avoids magic states but needs a three-dimensional layout that is natural in atom arrays and photonic architectures. Code switching moves a logical qubit between two codes that together have complementary transversal gates, at a cost in time and qubits. Gauge fixing and other techniques fall in a similar family. For rotations by arbitrary angles, which appear in simulation and chemistry, synthesis of rotations with T gates, as in the work of Ross and Selinger, costs several T gates per rotation, and algorithms that reduce the number of rotations lower the cost directly.",
          "A different approach is to reduce the demand for T gates in the algorithm, with better arithmetic circuits, qubitization instead of Trotter steps, and tensor hypercontraction for chemistry, as in the work of Lee and coauthors. In practice, the future cost of non-Clifford gates will be set by both hardware methods and algorithm design.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect the cost of T gates to fall substantially over the next five years as cultivation and related methods are demonstrated and as architectures integrate them. By around 2030, we expect magic state production to be a smaller share of a large machine, perhaps a quarter or less, compared with half or more in older estimates, although the exact figure depends on hardware error rates and the algorithm. This change is one of the main reasons that estimates for cryptanalysis and chemistry keep falling. The remaining risk is that real devices have correlated errors or leakage that reduce the benefit of postselection-heavy methods such as cultivation.",
        ] },
      { heading: "What this means for algorithm designers", paragraphs: [
          "Algorithm designers can reduce the burden on hardware by counting T gates as carefully as they count qubits. Qubitization and linear combination of unitaries methods use fewer T gates than Trotter-based simulation for the same accuracy, and tensor hypercontraction reduces the cost of chemistry Hamiltonians. Arithmetic circuits for factoring and elliptic curves have been rewritten to use fewer Toffoli gates, each of which needs several T gates. For rotations, using a small number of high-precision rotations is cheaper than many low-precision ones.",
          "As hardware makes T gates cheaper, the balance may shift again, and different algorithms may become preferable. This interplay between algorithm and architecture is one of the reasons that resource estimates move, and it argues for keeping teams that work on algorithms close to those who design error-correcting architectures.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Experimental tests of cultivation and logical-level distillation at small scale on several platforms." },
      { label: "2028 to 2030", value: "Magic state production integrated in architectures; T-gate cost near that of a few CNOT gates at target error rates." },
      { label: "2031 to 2033", value: "Factories occupy a minor share of large machines; non-Clifford cost is no longer the main bottleneck." },
    ], signals: [
      "Experimental cultivation with measured output infidelity below 10^-6.",
      "Estimates of the factory share of qubits in new resource studies.",
      "3D codes with transversal T gates demonstrated in hardware.",
      "Algorithms with lower T counts for chemistry.",
    ], risks: [
      "Correlated noise could undermine cultivation.",
      "Postselection rates could be higher than assumed.",
      "Factory throughput may limit logical clock speed.",
    ], faq: [
      { q: "What is a magic state?", a: "A special quantum state that, when consumed in a small circuit, lets an error-corrected machine apply a non-Clifford gate such as the T gate." },
      { q: "Why is the T gate costly?", a: "Because it cannot be applied directly on most codes and needs high-quality magic states." },
      { q: "What is magic state cultivation?", a: "A method that grows a high-quality T state inside a code through repeated checks, at a much lower cost than distillation." },
    ], references: [
      "Bravyi, S., & Kitaev, A. (2005). Universal quantum computation with ideal Clifford gates and noisy ancillas. Physical Review A, 71, 022316.",
      "Gottesman, D., & Chuang, I. L. (1999). Demonstrating the viability of universal quantum computation using teleportation and single-qubit operations. Nature, 402, 390-392.",
      "Eastin, B., & Knill, E. (2009). Restrictions on transversal encoded quantum gate sets. Physical Review Letters, 102, 110502.",
      "Litinski, D. (2019). Magic state distillation: Not as costly as you think. Quantum, 3, 205.",
      "Litinski, D. (2019). A game of surface codes: Large-scale quantum computing with lattice surgery. Quantum, 3, 128.",
      "Gidney, C., Shutty, N., & Jones, C. (2024). Magic state cultivation: growing T states as cheap as CNOT gates. arXiv:2409.17595.",
      "Rodriguez, P. S., et al. (2025). Experimental demonstration of logical magic state distillation. Nature, 645, 620-625.",
      "Ross, N. J., & Selinger, P. (2016). Optimal ancilla-free Clifford+T approximation of z-rotations. Quantum Information and Computation, 16, 901-953.",
    ], links: [
      { label: "Paper: Universal Quantum Computation with Ideal Clifford Gates and Noisy Ancillas", href: "/research/bravyi-kitaev-magic-states-2005" },
      { label: "Paper: Magic State Cultivation: Growing T States as Cheap as CNOT Gates", href: "/research/gidney-magic-state-cultivation-2024" },
      { label: "Paper: Restrictions on Transversal Encoded Quantum Gate Sets", href: "/research/eastin-knill-transversal-gates-2009" },
      { label: "Paper: Demonstrating the Viability of Universal Quantum Computation Using Teleportation and Single-Qubit Operations", href: "/research/gottesman-chuang-teleportation-gates-1999" },
      { label: "Term: Magic State Distillation", href: "/dictionary/magic-state-distillation" },
      { label: "Term: T Gate", href: "/dictionary/t-gate" },
    ], words: 1051 },
  { slug: "quantum-decoding-future", title: "Decoding at Scale: The Classical Brain of Fault Tolerance", category: "error-correction", horizon: "2026 to 2032", confidence: "Medium", summary: "Every error-corrected quantum computer needs a classical decoder that interprets measurements and decides on corrections, in microseconds. Decoder speed and accuracy will limit logical clock rates, and machine-learned and hardware decoders are developing quickly.", sections: [
      { heading: "What a decoder does", paragraphs: [
          "In error correction, a quantum computer repeatedly measures parity checks that reveal where errors may have occurred, without revealing the encoded information. The record of those measurements, the syndrome, is a stream of classical bits that a decoder must turn into a decision about which errors most likely happened, so that corrections can be applied or tracked. In a surface-code machine with a cycle time of about a microsecond, a decoder must process the syndrome data for thousands of qubits every cycle, with an accuracy that does not degrade the logical error rate.",
          "The requirement is demanding. A decoder that is too slow causes a backlog: syndrome data accumulate faster than they are processed, and the delay grows exponentially with the number of operations that depend on the decoded result, as Terhal pointed out in 2015. The decoder must also be accurate, since decoding errors add to the logical error rate, and it must handle correlated errors and leakage that simple models ignore.",
        ] },
      { heading: "The main decoder families", paragraphs: [
          "Minimum-weight perfect matching has been the standard for surface codes since Dennis, Kitaev, Landahl, and Preskill and Fowler's work in the 2000s and 2010s. Software such as PyMatching and the sparse blossom algorithm of Higgott and Gidney correct on the order of a million errors per core-second, which is fast enough for simulations and for moderate-size experiments. Union-find decoders, introduced by Delfosse and Nickerson in 2021, run in almost linear time and are suited to hardware implementation, with some loss of accuracy.",
          "For qLDPC codes, belief propagation with ordered statistics post-processing is the leading approach, and IBM's relay belief propagation, published in 2025, improved speed and accuracy toward real-time operation. For the most accurate results on small codes, tensor-network decoders exist but are far too slow for real-time use. Neural decoders are the newest family: Google DeepMind and Google Quantum AI's AlphaQubit, reported in 2024, made fewer errors than the best conventional decoders on real Sycamore data, though it was not fast enough for real time.",
        ] },
      { heading: "Speed: parallel and hardware decoders", paragraphs: [
          "Real-time operation requires parallelism. Parallel window decoding, described by Skoric and coauthors and by Tan and coauthors in 2023, splits the stream of syndrome data into overlapping windows that are decoded at the same time, which allows the decoder to scale with the number of processors. Modular decoding, which splits a large code into regions, is another approach. Hardware implementations on FPGAs and application-specific chips are under development: Riverlane reported in 2025 a real-time decoder with a collision clustering algorithm implemented in hardware, and Google reported a real-time decoder keeping pace with distance-five surface-code cycles with an average latency of about 63 microseconds on Willow.",
          "The decoder's latency also sets the logical clock rate. When a logical operation depends on a decoded measurement, such as a T gate teleportation, the machine must wait for the decoder, so a slow decoder slows the algorithm even if it keeps up with the data. This reaction time is one of the parameters in resource estimates, and Gidney's 2025 RSA estimate assumed a control reaction time of 10 microseconds.",
        ] },
      { heading: "Where artificial intelligence fits", paragraphs: [
          "Machine learning may help in three ways. Neural decoders can learn the actual correlated noise of a device and improve accuracy, as AlphaQubit showed. Learned components can be distilled into smaller, faster networks for hardware deployment. And machine learning can calibrate qubits and tune devices, which makes the noise that the decoder sees more predictable. The challenges are cost of training, the need for device-specific data, and the difficulty of certifying a learned decoder, since a failure mode that appears rarely in training could cause a logical error in production.",
          "We expect hybrid approaches: fast conventional decoders for the bulk of the work, with learned components handling hard cases, similar to how modern speech and vision systems combine learned models with classical algorithms.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "Decoding is a solvable engineering problem and not a fundamental barrier, but it is easy to underestimate. We expect real-time decoders for surface codes with hundreds to thousands of physical qubits to be routine in the next two to three years, and decoders for qLDPC codes at comparable scale by about 2029. At the scale of a million physical qubits, the classical decoding system will be a significant machine in its own right, with power and cost comparable to a rack of servers or more. Reported logical clock rates should be read together with the decoder's latency.",
        ] },
      { heading: "The decoder as a product", paragraphs: [
          "Decoding is also a business opportunity. Riverlane in the UK sells decoder technology as a layer for quantum hardware makers, and several hardware companies develop their own. Chip makers and GPU vendors see an opening as well, since decoding combines high data rates, parallel computation, and tight latency, which resembles other workloads they already serve. Open-source libraries, such as PyMatching and Stim, have made it possible for researchers to test ideas without building hardware, and they have helped establish common benchmarks.",
          "For an organization evaluating a quantum vendor, a useful question is how the decoder scales: what is its latency at the target code distance, what hardware does it run on, how much power does it use, and what happens when the noise differs from the assumed model? A vendor that can answer in numbers has probably thought about the problem, and the answer is a good indicator of how mature the whole system is.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "Real-time decoders for distance-7 to 11 surface codes; hardware decoders in commercial systems." },
      { label: "2028 to 2029", value: "Real-time decoders for qLDPC memory; learned decoders deployed in production for specific devices." },
      { label: "2030 to 2032", value: "Decoder systems scaled to hundreds of logical qubits; reaction time of a few microseconds." },
    ], signals: [
      "Published decoder latency and throughput for the largest codes run on hardware.",
      "Logical clock rates reported together with reaction times.",
      "Neural decoders that meet latency targets in hardware.",
      "Standard open benchmarks for decoders.",
    ], risks: [
      "Decoder cost may dominate system cost.",
      "Correlated errors may degrade decoder accuracy.",
      "Learned decoders may be hard to certify.",
    ], faq: [
      { q: "What is a decoder in quantum error correction?", a: "A classical algorithm that reads error-check measurements and infers which errors occurred." },
      { q: "Why must decoding be so fast?", a: "Because syndrome data arrive every microsecond or so, and delays slow down logical operations or cause a backlog." },
      { q: "Can AI help with decoding?", a: "Yes. Neural decoders have beaten conventional ones in accuracy, though they must be made fast enough for real time." },
    ], references: [
      "Dennis, E., Kitaev, A., Landahl, A., & Preskill, J. (2002). Topological quantum memory. Journal of Mathematical Physics, 43, 4452-4505.",
      "Terhal, B. M. (2015). Quantum error correction for quantum memories. Reviews of Modern Physics, 87, 307-346.",
      "Delfosse, N., & Nickerson, N. H. (2021). Almost-linear time decoding algorithm for topological codes. Quantum, 5, 595.",
      "Higgott, O., & Gidney, C. (2025). Sparse blossom: correcting a million errors per core second with minimum-weight matching. Quantum.",
      "Skoric, L., et al. (2023). Parallel window decoding enables scalable fault tolerant quantum computation. Nature Communications, 14, 7040.",
      "Bausch, J., et al. (2024). Learning high-accuracy error decoding for quantum processors. Nature, 635, 834-840.",
      "Barber, B., et al. (2025). A real-time, scalable, fast and resource-efficient decoder for a quantum computer. Nature Electronics, 8, 84-91.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
    ], links: [
      { label: "Paper: Learning High-Accuracy Error Decoding for Quantum Processors", href: "/research/bausch-alphaqubit-decoder-2024" },
      { label: "Paper: Topological Quantum Memory", href: "/research/dennis-topological-quantum-memory-2002" },
      { label: "Term: Syndrome Measurement", href: "/dictionary/syndrome-measurement" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
      { label: "Term: Logical Error Rate", href: "/dictionary/logical-error-rate" },
    ], words: 1048 },
  { slug: "resource-estimates-future", title: "How the Cost of Useful Quantum Computing Keeps Falling", category: "error-correction", horizon: "2026 to 2035", confidence: "High", summary: "Estimates of the qubits and time needed to break RSA or simulate key molecules have fallen by factors of hundreds in a decade, mostly from better algorithms and codes. Understanding why they fall, and what assumptions they hide, helps judge any date.", sections: [
      { heading: "Why resource estimates matter", paragraphs: [
          "A resource estimate answers a concrete question: how many physical qubits and how much time does a given algorithm need on a stated hardware model? It is the best bridge between abstract speedups and real machines. Estimates tell cryptographers how seriously to take the quantum threat, tell chemists whether a molecule is within reach, and tell hardware teams what to build. They are not forecasts of when a machine will exist, but they define the target.",
          "The key inputs are the physical error rate, the cycle time, the reaction time of the classical control, the connectivity of the qubits, and the error-correcting code. Change any of them and the estimate moves by large factors, which is why two estimates for the same problem can differ by a factor of ten while both being reasonable.",
        ] },
      { heading: "The record so far", paragraphs: [
          "For factoring RSA-2048, the first detailed estimate by Fowler and coauthors in 2012 was about a billion physical qubits for roughly a day. In 2019, Gidney and Ekerå gave 20 million noisy qubits for eight hours. In 2025, Gidney reduced it to under a million noisy qubits for less than a week, with a physical error rate of 0.1 percent and a cycle time of one microsecond. For elliptic-curve cryptography, Litinski estimated in 2023 that a 256-bit key could be broken with about 50 million Toffoli gates, and Gouzien and coauthors estimated that a cat-qubit architecture could compute a 256-bit elliptic curve logarithm in about nine hours with about 126,000 cat qubits, under their assumptions.",
          "For chemistry, the 2017 estimate for the nitrogenase cofactor FeMoco by Reiher and coauthors implied an enormous gate count, and Lee and coauthors in 2021 lowered it to about four million physical qubits and four days. Each of these steps came from several improvements acting together.",
        ] },
      { heading: "Where the savings came from", paragraphs: [
          "Three kinds of improvement account for most of the progress. Algorithms and arithmetic: windowed arithmetic, approximate residue number systems, qubitization with tensor hypercontraction, and better ways to load data reduced the number of logical qubits and operations. Error correction: better layouts and lattice surgery, denser storage of idle qubits, and lower-cost magic states reduced the physical qubits per logical qubit. Hardware assumptions: faster cycles and lower error rates reduced the code distance needed.",
          "Notably, little of the improvement for RSA came from hardware. It came from thinking. This pattern is encouraging for the field and a warning for security planners: estimates have repeatedly fallen faster than predicted, so planning around a fixed number is risky.",
        ] },
      { heading: "How to read an estimate", paragraphs: [
          "A responsible reading starts with the assumptions table. What physical error rate does the estimate assume, and have any devices reached it at scale? What cycle time and reaction time? Does it assume nearest-neighbor connectivity on a planar grid, or long-range connections that need special hardware? Which code and which magic-state method? Does it include the classical decoder and control, or only the quantum chip? The Azure Quantum Resource Estimator described by Beverland and coauthors in 2022 is a tool that lets anyone vary these assumptions and see the effect.",
          "Another caution is that estimates describe a computation, not a service. Running the algorithm many times, handling failures, and operating a system for days add cost. The total cost of ownership and the energy used are rarely included.",
        ] },
      { heading: "A worked example: why a factor of twenty fell off RSA", paragraphs: [
          "The reduction from 20 million to under one million qubits for RSA-2048 shows how an estimate falls. The arithmetic changed first: an approximate residue method lowered the number of logical qubits from about 6,000 to about 1,400 and reduced the number of operations. Then idle qubits, which dominate the count, were stored in denser codes called yoked surface codes, using far fewer physical qubits per logical qubit. Finally, magic state cultivation shrank the factories that make T gates, which in the older design occupied a large part of the machine. Each change reduced the estimate by a factor of two to four, and together they gave about twenty.",
          "Notably, the physical assumptions did not change much: the error rate stayed at 0.1 percent and the cycle at one microsecond. The runtime went up, from hours to under a week, because fewer qubits mean less parallelism. This tradeoff between space and time is a standard feature of estimates, and it is why one should always ask whether a quoted figure is for the fastest or the smallest implementation.",
        ] },
      { heading: "Limits of the exercise", paragraphs: [
          "Estimates also have limits that are rarely stated. They assume that a machine can run a computation of billions of operations without a catastrophic failure, such as a burst of errors from a cosmic ray, and many do not include the cost of verifying the result or of restarting after a failure. They assume that error rates measured on small devices extend to large ones, which has been true so far but is not guaranteed. They treat classical control as free or fast, and they rarely include the cost of cooling or the floor space.",
          "For these reasons, we recommend treating an estimate as a lower bound on difficulty and as a compass for research, not as a schedule. A claim that a problem will be solved by a specific year because an estimate has fallen below a number is stronger than the evidence supports.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect estimates to keep falling, though not as dramatically as in the last decade, because the largest savings, such as better magic states and denser codes, are now being absorbed. Moving to qLDPC and cat-qubit architectures could reduce the physical qubits for cryptanalysis by another factor of two to ten by 2030, in our judgment, and algorithmic improvements might add more. Estimates for chemistry will keep falling as algorithms improve. Independent of the exact numbers, the direction is clear, and the practical implication is that timelines should be revised downward more often than upward. High confidence applies to the direction, not to any specific number.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Estimates incorporating cultivation, qLDPC codes, and cat qubits; RSA-2048 estimates move toward a few hundred thousand qubits in some architectures." },
      { label: "2029 to 2031", value: "Resource estimates based on measured hardware parameters, not assumed ones; chemistry estimates below a million physical qubits." },
      { label: "2032 to 2035", value: "Estimates converge as hardware matures; remaining uncertainty is about the pace of hardware scaling." },
    ], signals: [
      "New papers lowering the Toffoli counts or qubits for cryptanalysis.",
      "Estimates with qubit counts below 300,000 for RSA-2048 under realistic assumptions.",
      "Hardware parameters that match the assumptions of estimates.",
      "Estimates that include decoder and control overhead.",
    ], risks: [
      "Real devices may not reach assumed error rates.",
      "Correlated errors may raise overheads.",
      "Hidden classical overheads may be underestimated.",
    ], faq: [
      { q: "Are resource estimates predictions?", a: "No. They say what a machine would need, not when one will exist." },
      { q: "Why do estimates keep falling?", a: "Because researchers keep finding better algorithms, codes, and layouts." },
      { q: "What should security planners do with them?", a: "Treat them as a reason to migrate early and to assume that estimates may fall further." },
    ], references: [
      "Fowler, A. G., Mariantoni, M., Martinis, J. M., & Cleland, A. N. (2012). Surface codes: Towards practical large-scale quantum computation. Physical Review A, 86, 032324.",
      "Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum, 5, 433.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Litinski, D. (2023). How to compute a 256-bit elliptic curve private key with only 50 million Toffoli gates. arXiv:2306.08585.",
      "Gouzien, E., Ruiz, D., Le Régent, F.-M., Guillaud, J., & Sangouard, N. (2023). Performance analysis of a repetition cat code architecture: Computing 256-bit elliptic curve logarithm in 9 hours with 126,133 cat qubits. Physical Review Letters, 131, 040602.",
      "Reiher, M., Wiebe, N., Svore, K. M., Wecker, D., & Troyer, M. (2017). Elucidating reaction mechanisms on quantum computers. PNAS, 114, 7555-7560.",
      "Lee, J., et al. (2021). Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum, 2, 030305.",
      "Beverland, M. E., et al. (2022). Assessing requirements to scale to practical quantum advantage. arXiv:2211.07629.",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
      { label: "Paper: Surface Codes: Towards Practical Large-Scale Quantum Computation", href: "/research/fowler-surface-codes-2012" },
      { label: "Paper: Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction", href: "/research/lee-tensor-hypercontraction-chemistry-2021" },
      { label: "Paper: Elucidating Reaction Mechanisms on Quantum Computers", href: "/research/reiher-reaction-mechanisms-quantum-computers-2017" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
    ], words: 1135 },
  { slug: "benchmarking-verification-future", title: "Benchmarks and Verification: How We Will Know a Quantum Computer Is Better", category: "error-correction", horizon: "2026 to 2032", confidence: "Medium", summary: "Every advantage claim is followed by classical rebuttals, so the field is building better benchmarks and verification methods. Expect more public trackers, application-level tests, and a shift toward results that can be checked classically.", sections: [
      { heading: "The problem with proving advantage", paragraphs: [
          "Quantum advantage means a quantum computer doing something better than the best classical alternative. Proving it is harder than it sounds, because the baseline keeps moving. When Google reported in 2019 that its processor sampled random circuits in about 200 seconds, versus an estimated 10,000 years on a supercomputer, IBM argued within days that a better algorithm would take days, and later work with tensor networks cut the classical cost further. The pattern repeated with Jiuzhang and Borealis, IBM's utility experiment, and D-Wave's 2025 simulation claim, each followed by classical groups reproducing the results with cleverer methods.",
          "This is not a failure of the experiments, and it is how science should work. But it means that a single announcement is weak evidence, and that the field needs standing infrastructure for testing claims: open data, transparent baselines, and independent verification.",
        ] },
      { heading: "Types of benchmarks", paragraphs: [
          "Several families of benchmarks exist. Hardware-level metrics, such as gate fidelity measured by randomized benchmarking, readout error, and coherence times, tell you about the components. System-level metrics combine many aspects: quantum volume, introduced by IBM in 2019, measures the largest random square circuit a machine can run successfully, and IonQ's algorithmic qubits measure the size of application circuits that pass a threshold. Each has limits: quantum volume saturates near 40 to 50 qubits because verification needs classical simulation, and vendor-defined metrics invite doubts.",
          "Application-level benchmarks test circuits resembling real workloads. Lubinski and coauthors in 2023 proposed a suite from the Quantum Economic Development Consortium, and mirror-circuit methods described by Proctor and coauthors in 2022 test a device on circuits whose ideal output is known without heavy simulation. Sampling benchmarks such as random circuit sampling and boson sampling test whether a device can produce a distribution that is hard to simulate, using cross-entropy or related scores, with the caveat that noisy versions can be classically easy, as Aharonov and coauthors showed in 2023.",
        ] },
      { heading: "Verifiable advantage", paragraphs: [
          "A strong trend is toward tasks whose results can be checked efficiently. Factoring is the classic example: the answer can be verified by multiplying, though no machine can yet run it at scale. Certified randomness, demonstrated in 2025 by JPMorgan Chase, Quantinuum, and national laboratories on a 56-qubit trapped-ion machine, produces bits whose randomness can be verified using classical supercomputers, at a cost that is feasible for the verifier but not for a cheater. Google's Quantum Echoes experiment of 2025 measured an out-of-time-order correlator, a physical quantity whose value can in principle be compared across different devices and with theory, and was presented as a verifiable step.",
          "Verification by cross-checking is another route: the same quantity is computed on independent quantum devices of different types, and agreement in a regime where classical methods fail is strong evidence that the results are right. This has not yet been done at scale, but it is an obvious goal for the next few years.",
        ] },
      { heading: "Trackers, programs, and standards", paragraphs: [
          "Institutions are building structures to test claims. IBM, together with Algorithmiq, the Flatiron Institute, and BlueQubit, launched a public quantum advantage tracker in 2025 where candidate experiments are posted and classical groups are invited to challenge them, and IBM has said it expects the first verified advantage by the end of 2026. DARPA's Quantum Benchmarking Initiative, begun in 2025, evaluates whether companies' plans can reach a utility-scale machine, with a feasibility test by 2033, and uses independent evaluators who check hardware claims. Standards bodies, including the new ISO and IEC joint technical committee on quantum technologies, are working on terminology and performance metrics.",
          "These efforts should make claims more comparable, and they may also discourage hype, since claims that fail under review are visible. We expect the tracker model to spread, and for major journals to require more complete data and classical baselines for advantage claims.",
        ] },
      { heading: "What good reporting looks like", paragraphs: [
          "A useful announcement states the task precisely, the best classical method tried and its cost, the hardware's measured fidelity, the sample size, the verification method, and the uncertainty. It releases data and code so that others can attempt to reproduce or spoof it. It separates three claims that are often blurred: that the device works as intended, that the task is hard for known classical methods, and that the task is useful. Many results succeed on the first, some on the second, and few on the third.",
          "Readers can apply the same standard. If a press release says a quantum computer solved in minutes what would take a supercomputer thousands of years, ask for the classical baseline details. If it says a quantum computer improved a business metric by a percentage, ask for the baseline model and the statistical significance.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect the next five years to bring several more advantage claims, an increasing share of them on verifiable or scientifically meaningful tasks, and a steady cycle of classical responses. By 2030, we expect at least one claim in quantum simulation or a related task to survive sustained scrutiny, and the benchmark ecosystem to include trackers, application suites, and logical-qubit metrics such as logical error per operation. The clearest and least contestable advantage will be cryptanalysis with Shor's algorithm, which requires fault-tolerant machines.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "IBM and partners test candidate advantage claims on the tracker; more certified randomness and verifiable physics experiments." },
      { label: "2028 to 2030", value: "Standardized application benchmarks; logical-qubit metrics adopted; at least one scientific advantage survives scrutiny." },
      { label: "2031 to 2032", value: "DARPA QBI feasibility assessments inform national plans; benchmarking shifts to logical operations and error-corrected workloads." },
    ], signals: [
      "Independent groups failing to reproduce an advantage claim classically over a year or more.",
      "Cross-validation of one quantity on two different quantum platforms.",
      "Journals requiring classical baselines and data release.",
      "Participation of independent evaluators in vendor programs.",
    ], risks: [
      "Vendor-defined metrics may confuse comparisons.",
      "Classical methods may keep improving.",
      "Verification may lag behind claims.",
    ], faq: [
      { q: "Why are advantage claims so often disputed?", a: "Because classical algorithms keep improving, and claims depend on the best known classical method at the time." },
      { q: "What is quantum volume?", a: "A benchmark that measures the largest random square circuit a device can run successfully." },
      { q: "What is verifiable advantage?", a: "A task where the quantum computer's answer can be checked efficiently by a classical computer." },
    ], references: [
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505-510.",
      "Cross, A. W., et al. (2019). Validating quantum computers using randomized model circuits. Physical Review A, 100, 032328.",
      "Proctor, T., Rudinger, K., Young, K., Nielsen, E., & Blume-Kohout, R. (2022). Measuring the capabilities of quantum computers. Nature Physics, 18, 75-79.",
      "Lubinski, T., et al. (2023). Application-oriented performance benchmarks for quantum computing. IEEE Transactions on Quantum Engineering, 4, 3100332.",
      "Hangleiter, D., & Eisert, J. (2023). Computational advantage of quantum random sampling. Reviews of Modern Physics, 95, 035001.",
      "Aharonov, D., Gao, X., Landau, Z., Liu, Y., & Vazirani, U. (2023). A polynomial-time classical algorithm for noisy random circuit sampling. STOC '23, 945-957.",
      "Liu, M., et al. (2025). Certified randomness using a trapped-ion quantum processor. Nature, 640, 343-348.",
      "Tech Wire Asia (2025). IBM introduces new processor as it targets quantum advantage by 2026. https://techwireasia.com/2025/11/ibm-introduces-new-processor-as-it-targets-quantum-advantage-by-2026/",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Validating Quantum Computers Using Randomized Model Circuits", href: "/research/cross-quantum-volume-2019" },
      { label: "Paper: A Polynomial-Time Classical Algorithm for Noisy Random Circuit Sampling", href: "/research/aharonov-noisy-random-circuit-sampling-2023" },
      { label: "Paper: Efficient Tensor Network Simulation of IBM's Eagle Kicked Ising Experiment", href: "/research/tindall-tensor-network-eagle-kicked-ising-2024" },
      { label: "Term: Quantum Volume", href: "/dictionary/quantum-volume" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
      { label: "Term: Cross-Entropy Benchmarking", href: "/dictionary/cross-entropy-benchmarking" },
    ], words: 1008 },
  { slug: "quantum-advantage-2030-future", title: "Quantum Advantage by 2030: What to Expect and What Not To", category: "applications", horizon: "2026 to 2032", confidence: "Medium", summary: "Several kinds of quantum advantage are being pursued at once, and they will arrive at different times. We expect verified scientific advantage in simulation first, with commercial advantage in chemistry, materials, or optimization later and less certain.", sections: [
      { heading: "Four meanings of advantage", paragraphs: [
          "Advantage is used for at least four different things. Computational advantage on an artificial task, such as random circuit sampling, has been claimed since 2019. Scientific advantage means a quantum device computes a quantity of scientific interest, such as the dynamics of a magnet, beyond what known classical methods can do. Commercial advantage means a quantum solution is better than the best classical one on a problem a customer pays for, once cost, time, and accuracy are counted. Cryptographic advantage means breaking encryption, which requires fault-tolerant machines.",
          "The four will not arrive together. Mixing them is the main source of misleading headlines: a claim of the first kind is often reported as if it were the third.",
        ] },
      { heading: "Where we stand in 2026", paragraphs: [
          "The first kind is established, though contested in detail. Google's Willow benchmark, Zuchongzhi, Jiuzhang, and Borealis showed devices sampling distributions that were expensive to simulate, and classical algorithms have since reduced several of the estimated costs. The second kind has candidates: D-Wave's 2025 simulation of magnetic quench dynamics, Google's Quantum Echoes measurement, IBM's utility experiment, and analog atom-array experiments. Each has been challenged by classical simulation to some degree, the IBM and D-Wave results most clearly, with tensor-network and belief-propagation methods reproducing key outputs.",
          "No commercial advantage has been demonstrated. Reports such as HSBC and IBM's 2025 claim of a 34 percent improvement in predicting bond trades, or optimization pilots on annealers, are interesting but not proof, because the classical baselines were limited or the improvement is modest and sensitive to the data. No claim of cryptographic advantage exists, and the largest number factored by a real quantum algorithm remains tiny.",
        ] },
      { heading: "What to expect by 2030", paragraphs: [
          "Scientific advantage is the most likely first robust result. Analog and digital quantum simulators on atoms, ions, and superconducting circuits can study quantum dynamics, and the classical methods for the hardest regimes are limited. Daley and coauthors argued in 2022 that practical advantage in quantum simulation is within reach in the near term, with problems chosen so that results can be verified. We think it is more likely than not that by 2028 to 2030 at least one scientifically meaningful simulation will be accepted by the community as beyond classical methods, and the first such results will probably involve dynamics of spin or lattice systems.",
          "Commercial advantage is less likely by 2030. The candidate areas are chemistry for strongly correlated molecules, materials, and some optimization or sampling tasks, and most need fault-tolerant machines with at least dozens to hundreds of logical qubits and low logical error. If the roadmaps for 2029 and 2030 are met, early commercial uses could appear at the end of the decade, but we would put the probability of a widely accepted commercial advantage before 2031 at well below one in four. Cryptanalysis is not expected before the mid 2030s on the central estimates, though the date is uncertain.",
        ] },
      { heading: "How claims will be tested", paragraphs: [
          "Claims will be tested in public. The IBM advantage tracker, independent classical groups, and benchmarking programs such as DARPA's will probe results. We expect each major claim to survive or fail within months, which is a healthy pace compared with earlier years. A result that survives a serious classical effort, includes data release, and is reproduced on another device will be taken seriously.",
          "One implication is that companies will aim for tasks that favor verification, even if they are less commercially exciting. Another is that disputes will continue, since the definition of the best classical method is flexible. Readers should look for the consensus of independent experts and not the first announcement.",
        ] },
      { heading: "What would change our minds", paragraphs: [
          "We would raise our forecast for commercial advantage if logical error rates near one in a million were demonstrated with dozens of logical qubits and logical gates, if resource estimates for a specific valuable calculation fell below the capacity of announced machines, or if a classical method that matched a claimed advantage proved impossible after serious attempts. We would lower it if error-correction scaling broke down at larger distances, if correlated errors proved intractable, or if classical algorithms, including machine-learned ones, closed the gap for the leading candidate applications.",
        ] },
      { heading: "Why the timeline is hard to predict", paragraphs: [
          "Predicting advantage is hard because it depends on two moving targets at once. Quantum hardware improves along several axes at different rates, qubit number, error rates, speed, and connectivity, and a breakthrough on one can matter more than steady gains on the others. Classical methods improve as well, through better algorithms, machine learning, and hardware such as GPUs, and the improvements are often discovered in response to quantum claims. A date for advantage is therefore the meeting point of two uncertain curves.",
          "This is why we express forecasts as probabilities and ranges and why we prefer to look at leading indicators, such as logical error rates and decoder speed, over vendor dates. If the indicators improve at the pace implied by the roadmaps, the central forecasts above hold. If they slow, the dates move out, and the cost of being wrong in either direction is real: overinvestment wastes money, and underinvestment, especially in security, creates risk.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "A reasonable summary is that advantage is coming in stages. The first stage is already contested but real, the second is likely within the next four years, the third is possible late in the decade and more likely in the 2030s, and the fourth is a mid-2030s question. For decision-makers, the implication is to invest in learning and in readiness, such as post-quantum migration and skills, and to be skeptical of claims that commercial advantage is imminent.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "More advantage claims on simulation and verifiable tasks; classical rebuttals; no accepted commercial advantage." },
      { label: "2028 to 2030", value: "At least one scientific simulation advantage widely accepted; early logical-qubit machines tested on chemistry and optimization." },
      { label: "2031 to 2035", value: "Possible commercial advantage in chemistry or materials; cryptographic advantage becomes a live possibility." },
    ], signals: [
      "A claim surviving more than a year of classical challenges.",
      "Agreement between different quantum platforms on a hard quantity.",
      "Customers repeating workloads in production after pilots.",
      "Resource estimates matching announced machine sizes.",
    ], risks: [
      "Classical algorithms may close the gaps.",
      "Error-correction scaling may stall.",
      "Hype may lead to premature claims and backlash.",
    ], faq: [
      { q: "Has quantum advantage been achieved?", a: "Advantage on artificial tasks has been claimed and debated. Commercial advantage has not been shown." },
      { q: "What is the most likely first useful advantage?", a: "Simulating quantum systems, such as materials and magnets, with results that can be verified." },
      { q: "Will quantum computers break encryption by 2030?", a: "We think it unlikely, though migration to post-quantum cryptography should proceed regardless." },
    ], references: [
      "Daley, A. J., et al. (2022). Practical quantum advantage in quantum simulation. Nature, 607, 667-676.",
      "Hangleiter, D., & Eisert, J. (2023). Computational advantage of quantum random sampling. Reviews of Modern Physics, 95, 035001.",
      "King, A. D., et al. (2025). Beyond-classical computation in quantum simulation. Science, 388, 199-204.",
      "Kim, Y., et al. (2023). Evidence for the utility of quantum computing before fault tolerance. Nature, 618, 500-505.",
      "Tindall, J., Fishman, M., Stoudenmire, E. M., & Sels, D. (2024). Efficient tensor network simulation of IBM's Eagle kicked Ising experiment. PRX Quantum, 5, 010308.",
      "Google Quantum AI (2025). Observation of constructive interference at the edge of quantum ergodicity. Nature (October 2025).",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Evidence for the Utility of Quantum Computing Before Fault Tolerance", href: "/research/kim-utility-before-fault-tolerance-2023" },
      { label: "Paper: Beyond-Classical Computation in Quantum Simulation", href: "/research/king-beyond-classical-quantum-simulation-2025" },
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
      { label: "Term: Quantum Supremacy", href: "/dictionary/quantum-supremacy" },
    ], words: 1068 },
  { slug: "quantum-optimization-logistics-future", title: "Quantum Optimization and Logistics: Promise Versus Proof", category: "applications", horizon: "2026 to 2040", confidence: "Low", summary: "Optimization is the most advertised use of quantum computers in business, and the evidence for advantage is the weakest. Quadratic speedups are hard to exploit, variational methods struggle, and strong classical solvers set a high bar.", sections: [
      { heading: "Why optimization is attractive", paragraphs: [
          "Companies face optimization problems everywhere: routing vehicles, scheduling shifts and machines, packing containers, assigning crews, balancing power grids, and selecting portfolios. Many such problems are NP-hard, meaning that no efficient exact algorithm is known, and the cost of better solutions can be large: a few percent saved on a delivery network or a factory schedule is worth millions of dollars. Quantum computers are often presented as a way to explore many solutions at once, which is a misleading picture, but there are real algorithmic ideas behind the hope.",
          "Three families of quantum methods target optimization: Grover-type search and amplitude amplification, which give quadratic speedups; variational and annealing methods, such as QAOA and quantum annealers, which are heuristics with no proven speedups; and structured algorithms that exploit specific features, such as quantum walks on graphs, with polynomial speedups for some problems.",
        ] },
      { heading: "What the theory says", paragraphs: [
          "The best proven generic result is a quadratic speedup for unstructured search. Montanaro showed in 2020 that backtracking and branch-and-bound algorithms can be accelerated quadratically, and the survey by Dalzell and coauthors in 2023 lists end-to-end resource requirements for many such algorithms. The difficulty is that a quadratic speedup on an error-corrected machine is easily consumed by overhead, as Babbush and coauthors argued in 2021: logical operations are thousands of times slower than classical ones, so the crossover happens only at problem sizes that take a classical computer weeks to years to solve.",
          "For variational methods, the evidence is weaker. QAOA has proven performance guarantees only for low depth, and the guarantees are below those of the best classical approximation algorithms for problems such as maximum cut. Bravyi and coauthors showed in 2020 that low-depth QAOA is limited on certain problems by symmetry, and the barren plateau problem makes training hard at scale. For quantum annealers, the question of advantage over specialized classical solvers is contested, as discussed in the annealing topic of this series.",
        ] },
      { heading: "What industry pilots show", paragraphs: [
          "Industrial pilots are numerous. Volkswagen explored traffic flow optimization with a quantum annealer, as described by Neukart and coauthors in 2017, Airbus ran a challenge on aircraft loading, and logistics firms, airlines, and energy companies have tested scheduling and routing on annealers and gate-model devices. These have produced learning and some interesting hybrid workflows, but few have moved to production, usually because the classical solver was as good or better, or because the quantum part was a small piece of a larger pipeline.",
          "A recurring finding is that formulating the problem in a form suitable for quantum hardware improves classical solutions as well, since it forces a clean model. This is a real benefit but not a quantum one. Quantum-inspired classical algorithms, such as simulated bifurcation and digital annealers, often match the quantum hardware at lower cost, and they are sold commercially.",
        ] },
      { heading: "The classical bar is high", paragraphs: [
          "Classical optimization has benefited from decades of engineering. Commercial solvers such as those based on mixed-integer programming, along with constraint programming and local search heuristics, routinely solve problems with millions of variables, and machine learning is now used to guide them. A quantum method must beat these, not a textbook baseline. The competition also improves quickly, so a result that looks like an advantage in one year may vanish in the next.",
          "Abbas and coauthors reviewed the situation in 2024 and concluded that clear evidence of a quantum advantage for optimization is still lacking, and that identifying structured problems where a superquadratic speedup exists is an important research direction.",
        ] },
      { heading: "Where advantage might appear", paragraphs: [
          "Possible niches include problems with special structure that fault-tolerant algorithms can exploit, such as some portfolio and risk calculations that reduce to estimation tasks, tasks that combine optimization with simulation of quantum systems, and large unstructured search problems where quadratic speedups, with very fast logical clocks, might pay off. Hybrid approaches that use a quantum subroutine for sampling or for solving a subproblem inside a classical solver are another possibility.",
          "Photonic and atom-based machines have proposed natural mappings, such as maximum independent set on Rydberg arrays, which have attracted attention because the hardware realizes the problem directly. Whether it can beat classical solvers at large sizes is unknown.",
        ] },
      { heading: "Questions to ask a vendor", paragraphs: [
          "A few questions help in conversations with vendors. What exactly is the problem size, number of variables and constraints, and how does it compare with the production problem? What classical solvers were run, with what settings and time limits, and by whom? Was the same data used, and were results repeated over many instances and random seeds? What was the total cost including problem formulation and embedding, and what would it be at production scale?",
          "How does the solution quality compare, not only the time? Does the quantum method scale as the problem grows, or only work on small instances? Is the quantum part essential, or does the hybrid pipeline work as well with a classical subroutine in its place? Answers to these questions separate pilots that teach something from pilots that only demonstrate that a quantum device can be called from a program.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We have low confidence in quantum advantage for industrial optimization before 2035. A sensible approach for companies is to build optimization models, benchmark them against strong classical solvers, and run small quantum pilots to learn, while expecting returns from the modeling work itself. If a vendor claims an advantage, ask for a comparison with a tuned commercial solver on the customer's real data at production size. We expect the first credible quantum optimization advantage to come, if at all, from fault-tolerant machines applying structured algorithms to specific problems in the 2030s.",
        ] },
    ], forecast: [
      { label: "2026 to 2029", value: "Pilots continue; quantum-inspired classical solvers often match quantum hardware; no verified advantage on industrial problems." },
      { label: "2030 to 2034", value: "Fault-tolerant prototypes test structured algorithms; possible niche advantages in sampling and estimation tasks." },
      { label: "2035 to 2040", value: "Optimization may be a use case for large machines if structured speedups and fast logical clocks arrive." },
    ], signals: [
      "A peer-reviewed result beating a tuned commercial solver on a real industrial instance.",
      "New superquadratic quantum algorithms for combinatorial problems.",
      "Logical clock rates above tens of kilohertz.",
      "Production deployments that persist beyond pilots.",
    ], risks: [
      "Classical solvers and machine-learning heuristics will keep improving.",
      "Quadratic speedups may never beat overheads.",
      "Variational methods may not scale.",
    ], faq: [
      { q: "Can quantum computers solve NP-hard problems quickly?", a: "No evidence suggests they can solve them in polynomial time. The best generic speedup is quadratic." },
      { q: "Are quantum annealers good for logistics?", a: "They can find good solutions, but classical solvers are usually as good, and advantage is not proven." },
      { q: "What should a company do now?", a: "Model the problem well, benchmark classical solvers, and run small pilots for learning." },
    ], references: [
      "Montanaro, A. (2016). Quantum algorithms: an overview. npj Quantum Information, 2, 15023.",
      "Montanaro, A. (2020). Quantum speedup of branch-and-bound algorithms. Physical Review Research, 2, 013056.",
      "Dalzell, A. M., et al. (2023). Quantum algorithms: A survey of applications and end-to-end complexities. arXiv:2310.03011.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Farhi, E., Goldstone, J., & Gutmann, S. (2014). A quantum approximate optimization algorithm. arXiv:1411.4028.",
      "Bravyi, S., Kliesch, A., Koenig, R., & Tang, E. (2020). Obstacles to variational quantum optimization from symmetry protection. Physical Review Letters, 125, 260505.",
      "Abbas, A., et al. (2024). Challenges and opportunities in quantum optimization. Nature Reviews Physics, 6, 718-735.",
      "Neukart, F., et al. (2017). Traffic flow optimization using a quantum annealer. Frontiers in ICT, 4, 29.",
    ], links: [
      { label: "Paper: A Quantum Approximate Optimization Algorithm", href: "/research/farhi-qaoa-2014" },
      { label: "Paper: Focus Beyond Quadratic Speedups for Error-Corrected Quantum Advantage", href: "/research/babbush-beyond-quadratic-speedups-2021" },
      { label: "Algorithm: Quantum Approximate Optimization Algorithm (QAOA)", href: "/algorithms/qaoa" },
      { label: "Industry: Quantum Computing for Logistics", href: "/industries/logistics" },
      { label: "Industry: Quantum Computing for Transportation", href: "/industries/transportation" },
      { label: "Term: Quantum Annealing", href: "/dictionary/quantum-annealing" },
    ], words: 1080 },
  { slug: "quantum-simulation-science-future", title: "Quantum Simulation: The Most Likely Early Scientific Payoff", category: "applications", horizon: "2026 to 2035", confidence: "High", summary: "Using quantum devices to simulate other quantum systems was the original goal, and it is where a first verified advantage is most likely. Analog simulators already study magnets and exotic phases beyond easy classical reach.", sections: [
      { heading: "The original use case", paragraphs: [
          "Richard Feynman proposed quantum computers in 1981 so that quantum systems could be simulated without the exponential cost that classical computers face. Seth Lloyd proved in 1996 that a quantum computer can efficiently simulate any system with local interactions. Today simulation is again the application with the strongest scientific case, because it needs no data loading, its output is physical and checkable, and the classical alternatives, while good, break down for strongly correlated systems and for real-time dynamics.",
          "Two styles exist. Analog simulators realize a model Hamiltonian directly in a controllable system, such as cold atoms in optical lattices, Rydberg atom arrays, trapped ions, and superconducting circuits. Digital simulators run the time evolution as a sequence of gates, which is more general but needs more resources.",
        ] },
      { heading: "What analog simulators have achieved", paragraphs: [
          "Analog simulators have studied phenomena that classical methods struggle with. A Harvard and MIT team's 256-atom Rydberg array in 2021 explored ordered phases on two-dimensional lattices, and the same platform provided evidence of a topological spin liquid. Trapped-ion simulators with 53 ions studied dynamical phase transitions in 2017, and cold-atom experiments in optical lattices have realized Hubbard models and measured their properties for years. D-Wave's 2025 simulation of quench dynamics used an annealer as an analog simulator of magnetic materials, and Google's Quantum Echoes experiment measured a quantity linked to quantum chaos on a digital superconducting processor.",
          "Many such experiments sit near the edge of classical capability, and some have been matched by improved classical methods, notably tensor networks, which work well when entanglement is limited. The frontier moves with each side's progress.",
        ] },
      { heading: "Where digital simulation fits", paragraphs: [
          "Digital simulation promises generality: arbitrary Hamiltonians, programmable evolution, and the ability to prepare initial states and measure observables flexibly. On noisy devices without error correction, circuit depth limits the dynamics that can be simulated, as in IBM's 2023 utility experiment on a spin model, where mitigation extended the reach. For longer times and higher accuracy, error-corrected machines are needed, and resource estimates by Childs and coauthors for simple spin models and by many others for lattice gauge theories and electronic structure show that useful simulations need hundreds to thousands of logical qubits.",
          "Topics under study include condensed matter models such as the Hubbard model, which may bear on high-temperature superconductivity, nuclear and high-energy physics, where lattice gauge theories challenge classical methods, and quantum chemistry. Bauer and coauthors reviewed the prospects for high-energy physics in 2023, and Altman and coauthors outlined architectures and opportunities for quantum simulators in 2021.",
        ] },
      { heading: "The verification question", paragraphs: [
          "A distinctive challenge for simulation is knowing whether the result is right. If the answer cannot be computed classically, how can it be checked? Strategies include comparing different simulators on the same model, checking limits where theory gives exact answers, testing conserved quantities, and using results to make predictions that experiments on real materials can confirm. Daley and coauthors argued that the community should design simulation tasks with such checks built in. Verifiable quantities such as the out-of-time-order correlators used by Google fit this goal.",
          "The credibility of a claimed advantage in simulation will depend on this verification and on persistent attempts by classical groups to match it. We expect the next few years to see a number of claims and rebuttals.",
        ] },
      { heading: "Impact beyond physics", paragraphs: [
          "If simulation advantage is achieved, the first impacts will be in science: new understanding of correlated materials, spin liquids, and nuclear matter, and benchmarks for approximate classical methods. Industrial value would follow if the methods can handle realistic materials and molecules with enough accuracy to guide design, which needs fault-tolerant machines. There is also a feedback effect: better simulators will help to test and calibrate quantum hardware, and models of noise and error correction may use them.",
        ] },
      { heading: "Specific scientific targets", paragraphs: [
          "Several targets show what a successful simulation advantage could look like. In condensed matter, the two-dimensional Hubbard model is the standard minimal model of strongly correlated electrons and is believed to capture aspects of high-temperature superconductors, but its phase diagram at the relevant doping is not settled. Cold-atom simulators of the Hubbard model have reached low temperatures but not yet the regime where the question is decided, and fault-tolerant digital simulation is another route. In nuclear and high-energy physics, simulating the real-time dynamics of gauge theories, for example in heavy-ion collisions or the early universe, is a problem on which classical Monte Carlo fails because of the sign problem.",
          "In chemistry, the targets are photochemical processes and strongly correlated catalysts, where dynamics and excited states matter. In quantum information itself, simulators help to study how quantum information scrambles in black holes and chaotic systems, an area that Google's out-of-time-order experiments address. A result that settled a long-standing question in one of these areas, in a way that was confirmed independently, would be the most persuasive demonstration of advantage that one could ask for.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We are confident that simulation will be the first area where quantum devices provide scientifically valuable results beyond classical reach, and we expect an accepted case by about 2028 to 2030. We expect analog and digital approaches to converge, with programmable arrays and error-detected digital circuits used together. Commercial value from simulation is more distant and depends on error-corrected machines. The risk is that classical methods, including machine learning wavefunctions, continue to push the boundary, so the target keeps moving.",
        ] },
    ], forecast: [
      { label: "2026 to 2027", value: "More simulation claims on atoms, ions, and superconducting platforms, each with classical challenges." },
      { label: "2028 to 2030", value: "At least one simulation result accepted as beyond classical; digital simulations on early error-corrected devices." },
      { label: "2031 to 2035", value: "Simulation of lattice gauge theories and correlated materials at scales relevant to science and some industry problems." },
    ], signals: [
      "Agreement between independent quantum simulators on a hard quantity.",
      "Classical methods failing to reproduce a result after sustained effort.",
      "Logical-qubit machines running dynamics with controlled error.",
      "New experiments testing predictions about real materials.",
    ], risks: [
      "Tensor networks and neural-network methods may close the gap.",
      "Noise may limit digital simulations.",
      "Verification may remain contested.",
    ], faq: [
      { q: "What is a quantum simulator?", a: "A controllable quantum system used to mimic another quantum system that is hard to compute classically." },
      { q: "What is analog versus digital simulation?", a: "Analog realizes the target Hamiltonian directly, while digital runs the evolution as a sequence of quantum gates." },
      { q: "Why is simulation the likely first advantage?", a: "Because the output is physical, needs no data loading, and classical methods struggle with strongly correlated dynamics." },
    ], references: [
      "Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics, 21, 467-488.",
      "Lloyd, S. (1996). Universal quantum simulators. Science, 273, 1073-1078.",
      "Georgescu, I. M., Ashhab, S., & Nori, F. (2014). Quantum simulation. Reviews of Modern Physics, 86, 153-185.",
      "Daley, A. J., et al. (2022). Practical quantum advantage in quantum simulation. Nature, 607, 667-676.",
      "Altman, E., et al. (2021). Quantum simulators: Architectures and opportunities. PRX Quantum, 2, 017003.",
      "Bauer, C. W., et al. (2023). Quantum simulation for high-energy physics. PRX Quantum, 4, 027001.",
      "Ebadi, S., et al. (2021). Quantum phases of matter on a 256-atom programmable quantum simulator. Nature, 595, 227-232.",
      "Childs, A. M., Maslov, D., Nam, Y., Ross, N. J., & Su, Y. (2018). Toward the first quantum simulation with quantum speedup. PNAS, 115, 9456-9461.",
    ], links: [
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Paper: Universal Quantum Simulators", href: "/research/lloyd-universal-quantum-simulators-1996" },
      { label: "Paper: Quantum Phases of Matter on a 256-Atom Programmable Quantum Simulator", href: "/research/ebadi-256-atom-quantum-simulator-2021" },
      { label: "Paper: Beyond-Classical Computation in Quantum Simulation", href: "/research/king-beyond-classical-quantum-simulation-2025" },
      { label: "Term: Quantum Simulator", href: "/dictionary/quantum-simulator" },
      { label: "Industry: Quantum Computing for Materials Science", href: "/industries/materials-science" },
    ], words: 1042 },
  { slug: "quantum-sensing-future", title: "Quantum Sensing: Clocks, Navigation, and Imaging", category: "applications", horizon: "2026 to 2035", confidence: "High", summary: "Quantum sensors are the part of quantum technology already reaching customers. Optical clocks, atom interferometers, diamond magnetometers, and squeezed-light detectors improve measurement, and the next decade is about turning laboratory instruments into rugged products.", sections: [
      { heading: "What quantum sensing is", paragraphs: [
          "Quantum sensing uses quantum systems, such as atoms, ions, spins in diamond, superconducting loops, or squeezed light, as the measuring element. The measured quantity changes the quantum state, for example by shifting a frequency or rotating a spin, and the change is read out. Because quantum states are exquisitely sensitive to their environment, they can detect tiny magnetic fields, accelerations, rotations, gravity, time, and electric fields, with precision limited by fundamental physics. Degen, Reinhard, and Cappellaro's 2017 review is the standard introduction.",
          "Unlike quantum computing, sensing does not require large fault-tolerant machines or error correction, so several kinds are commercial. A sensor can be a single atom cloud, a diamond chip, or a pulse of light, and it works on small volumes of data, which makes the technology easier to scale than computing.",
        ] },
      { heading: "The main technologies and their status", paragraphs: [
          "Optical atomic clocks have reached fractional uncertainties near 10 to the minus 18, as in the strontium lattice clock of Bloom and coauthors in 2014, good enough to detect height differences of a centimeter through gravitational time dilation. The international metrology community has been discussing a redefinition of the second based on optical clocks around 2030. Clocks matter for navigation, finance, networks, and tests of fundamental physics, and compact versions are being built.",
          "Atom interferometers measure acceleration, rotation, and gravity with cold atoms, and Bongs and coauthors described in 2019 how they are moving from laboratories to field instruments for gravity mapping, navigation, and tests of general relativity. Nitrogen-vacancy diamond sensors map magnetic fields and temperatures at the micrometer scale at room temperature, with uses in electronics inspection and biology. Optically pumped magnetometers allow wearable magnetoencephalography, as Boto and coauthors showed in 2018. Squeezed light is already used in LIGO and Virgo to reduce quantum noise in gravitational wave detection, as Tse and coauthors reported in 2019.",
        ] },
      { heading: "Navigation without GPS", paragraphs: [
          "A major driver is navigation that does not rely on satellites, which can be jammed or spoofed. Quantum inertial sensors based on atom interferometry could keep position errors small over hours, and quantum magnetometers could match measured magnetic anomalies to maps for positioning. Several militaries and companies have run field tests, including flights and ship trials, and the sector has government funding in the United States, the United Kingdom, and Europe. The engineering challenges are size, power, robustness to vibration, and measurement rate, since many cold-atom sensors measure slowly, and hybrid designs that combine a quantum sensor with a conventional inertial unit are the likely first products.",
          "We expect early adoption in defense, aviation, and maritime markets, with civilian uses following if prices fall. The time to products with strong performance in rugged environments is a few years for magnetic navigation and the end of the decade for full inertial systems.",
        ] },
      { heading: "Medicine, geoscience, and industry", paragraphs: [
          "Wearable brain imaging with optically pumped magnetometers is entering research hospitals, and diamond sensors support studies of cells and materials. Gravimeters and gradiometers based on atoms or other sensors can map underground structures, aquifers, and mineral deposits, and may help with infrastructure inspection and tunnel detection. In industry, quantum sensors are used for inspecting semiconductor chips and batteries, and for precise timing in telecommunications and data centers. These markets are modest but real.",
          "Claims need scrutiny in areas such as quantum radar and quantum lidar, where theoretical advantages exist in specific noise conditions but practical systems must beat strong classical ones, and many proposals have not shown clear gains. Quantum illumination, for example, offers an advantage in principle at low signal levels, as shown in laboratory experiments, but real-world benefits are uncertain.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "Quantum sensing will probably produce the most commercial value from quantum technology in the next five years, because the technologies are mature enough for products and the advantages are concrete. We expect growth in atomic clocks for timing and networks, magnetometers for medicine and inspection, and early quantum navigation products for defense. The central challenge is engineering: making instruments small, robust, and affordable, and proving the benefit against improving conventional sensors, such as MEMS inertial units. Government funding will remain important.",
        ] },
      { heading: "A buyer's guide to quantum sensors", paragraphs: [
          "For an organization considering quantum sensors, the first question is whether a conventional sensor already meets the need. MEMS accelerometers, fiber-optic gyroscopes, and fluxgate magnetometers are cheap and rugged and improving, and a quantum sensor must offer a clear gain in sensitivity, stability, or drift, not just novelty. The second question is how the claim was measured: laboratory sensitivity under ideal conditions differs from field performance under temperature changes, vibration, and electromagnetic noise, so ask for data from field tests.",
          "Third, consider the system. A quantum sensor often needs lasers, vacuum, shielding, and electronics, and size, power, and maintenance matter as much as the sensing element. Fourth, check the supply chain and service: many suppliers are startups, and support and calibration matter for a device that must run for years. Fifth, consider data processing: a sensitive sensor produces data that needs good algorithms, and integration with existing systems is often the larger part of the project.",
          "For those starting out, a pilot in a defined application, with a clear metric and a conventional baseline, is the sensible route. Standards for performance and testing are emerging through national metrology institutes, and engaging with them early helps ensure that results are comparable. We expect procurement to become easier over the next five years as products mature and independent test data accumulate.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Commercial atomic clocks and magnetometers expand; navigation field trials; wearable MEG in more hospitals." },
      { label: "2029 to 2031", value: "Compact atom-interferometer navigation units in defense and aviation; discussion of redefining the second." },
      { label: "2032 to 2035", value: "Broader civilian adoption in geoscience, medicine, and infrastructure if costs fall." },
    ], signals: [
      "Field-tested quantum navigation systems with defined performance over hours.",
      "Cost and size of atomic clocks and atom interferometers.",
      "Regulatory approvals for medical sensing devices.",
      "Replication of quantum illumination and radar advantages in realistic conditions.",
    ], risks: [
      "Conventional sensors may keep up for most uses.",
      "Ruggedization may be harder than expected.",
      "Markets may stay small.",
    ], faq: [
      { q: "Is quantum sensing real?", a: "Yes. Atomic clocks, magnetometers, and gravimeters are commercial, and many are in use." },
      { q: "Can quantum sensors replace GPS?", a: "They can complement it by keeping position accurate when GPS is unavailable, though full replacement is not expected." },
      { q: "Do quantum sensors need cooling?", a: "Some do, but several types, including diamond and many atomic sensors, work at room temperature." },
    ], references: [
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
      "Bloom, B. J., et al. (2014). An optical lattice clock with accuracy and stability at the 10^-18 level. Nature, 506, 71-75.",
      "Bongs, K., et al. (2019). Taking atom interferometric quantum sensors from the laboratory to real-world applications. Nature Reviews Physics, 1, 731-739.",
      "Boto, E., et al. (2018). Moving magnetoencephalography towards real-world applications with a wearable system. Nature, 555, 657-661.",
      "Tse, M., et al. (2019). Quantum-enhanced Advanced LIGO detectors in the era of gravitational-wave astronomy. Physical Review Letters, 123, 231107.",
      "Giovannetti, V., Lloyd, S., & Maccone, L. (2004). Quantum-enhanced measurements: beating the standard quantum limit. Science, 306, 1330-1336.",
      "Pirandola, S., et al. (2018). Advances in photonic quantum sensing. Nature Photonics, 12, 724-733.",
      "McKinsey and Company (2025). Quantum Technology Monitor.",
    ], links: [
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Term: Nitrogen-Vacancy Center", href: "/dictionary/nitrogen-vacancy-center" },
      { label: "Industry: Quantum Technology for Space and National Security", href: "/industries/space-defense" },
      { label: "Industry: Quantum Computing for Healthcare", href: "/industries/healthcare" },
      { label: "Industry: Quantum Computing for Oil, Gas, and Mining", href: "/industries/oil-gas-mining" },
    ], words: 1042 },
  { slug: "qkd-future", title: "Quantum Key Distribution: Where It Fits Beside Post-Quantum Cryptography", category: "security-networks", horizon: "2026 to 2040", confidence: "Medium", summary: "Quantum key distribution is proven technology with real networks, but intelligence agencies favor post-quantum cryptography for general use. QKD's future is in specific high-assurance links, satellite services, and as a complement to software-based security.", sections: [
      { heading: "What QKD offers and what it does not", paragraphs: [
          "Quantum key distribution lets two parties create a shared secret key by sending quantum states, usually single photons, whose disturbance by an eavesdropper can be detected. Security rests on physics, namely the no-cloning theorem and the uncertainty principle, and not on the assumption that a mathematical problem is hard. Shor and Preskill proved in 2000 that the BB84 protocol is secure against any attack allowed by quantum mechanics, in the ideal model, when the error rate is below about 11 percent.",
          "QKD does not by itself provide secure communication. It produces keys that must then be used with symmetric encryption, it needs an authenticated classical channel, which in practice relies on pre-shared secrets or classical signatures, and it protects only the key exchange, not endpoints, software, or people. It also needs dedicated hardware and a quantum channel, usually fiber or free space.",
        ] },
      { heading: "What exists today", paragraphs: [
          "Networks are operating. China's backbone between Beijing and Shanghai exceeds 2,000 kilometers and uses trusted relay nodes, and it has been linked with the Micius satellite to span intercontinental distances, as in the 2017 key exchange with Austria. The European Union is building EuroQCI, a quantum communication infrastructure with terrestrial and satellite parts, and national networks exist or are planned in the United Kingdom, South Korea, Japan, Singapore, and India. Commercial vendors include ID Quantique, Toshiba, QuantumCTek, and QNu Labs, and they sell systems to governments, banks, and telecom operators.",
          "Technical advances have extended reach and robustness. Decoy-state methods, proposed in 2003 and 2005, made weak-laser-pulse systems secure against photon-number-splitting attacks. Measurement-device-independent QKD, from Lo, Curty, and Qi in 2012, removes detector vulnerabilities. Twin-field QKD, proposed by Lucamarini and coauthors in 2018, scales better with distance, and experiments have reached more than 500 kilometers of fiber in field conditions and over 800 kilometers in laboratory spools. Continuous-variable QKD uses standard telecom components and is attractive for integration. Chip-based transmitters promise lower cost.",
        ] },
      { heading: "The policy debate", paragraphs: [
          "Agencies are divided from industry advocates. The US National Security Agency and the UK National Cyber Security Centre have published positions that do not recommend QKD for general use, citing limited scope, the need for special hardware, the reliance on trusted nodes for long distances, authentication needs, and implementation vulnerabilities. They favor post-quantum cryptography, which runs on existing hardware and addresses key exchange and signatures. The European Union and China, by contrast, invest heavily in QKD infrastructure, and several security agencies allow QKD as a complement.",
          "Practical attacks on real devices explain some of the caution. Lydersen and coauthors in 2010 showed how to blind detectors in commercial systems, and other attacks exploit imperfections in sources and timing. These have been countered by countermeasures and by protocols that do not rely on trusted devices, but they underline that security depends on implementation, and that certification matters. Standards work includes ETSI protection profiles and ISO/IEC 23837 on security evaluation of QKD, published in 2023.",
        ] },
      { heading: "Where QKD may thrive", paragraphs: [
          "We see four niches. The first is government and military links with very long-term secrecy needs and the resources for dedicated infrastructure, where defense in depth, using both post-quantum cryptography and QKD, is attractive. The second is critical infrastructure operators, such as financial clearing, power grid control, and data center interconnects, where fiber links already exist and a quantum layer can be added. The third is satellite-based services for countries that want secure links across large territories without trusting foreign infrastructure. The fourth is research networks that serve as testbeds for the quantum internet.",
          "The economics depend on cost per key and per link. Systems have cost tens to hundreds of thousands of dollars per link, and key rates are modest, from kilobits to megabits per second over metropolitan distances, falling rapidly with distance. Photonic integration may lower costs, and satellite constellations may spread them across many users.",
        ] },
      { heading: "Interplay with post-quantum cryptography", paragraphs: [
          "The two approaches address different threats. Post-quantum cryptography defends against attacks by quantum computers on the math of public-key systems and can be deployed through software updates. QKD defends against any adversary, including those with unlimited computing power, for the key exchange, but depends on hardware. Hybrid designs, in which a session key is derived from both a post-quantum key exchange and a QKD key, give security if either holds, and several vendors and standards bodies are developing them.",
          "The risk of overselling is real. Presenting QKD as the quantum-safe solution for everything misleads buyers and may delay the less glamorous work of migrating software. A balanced view treats QKD as a specialized tool within a broader security architecture.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect QKD to continue growing slowly in government and critical infrastructure, with satellite services expanding in the late 2020s, and for post-quantum cryptography to carry the bulk of the internet's migration. Entanglement-based and device-independent protocols will remain research topics with niche products by the 2030s. If quantum repeaters mature, QKD may become the first application of a quantum internet, but that is unlikely before the mid 2030s. A plausible outcome is a global QKD market in the low billions of dollars by 2035, concentrated in a few countries.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More metropolitan networks and satellite launches; hybrid QKD plus post-quantum products; certification under ISO/IEC 23837." },
      { label: "2029 to 2032", value: "Satellite constellations offering regular key service; twin-field links over 500 to 1,000 km in field networks." },
      { label: "2033 to 2040", value: "Repeater-based links possible; QKD remains a niche within broader quantum-safe architectures." },
    ], signals: [
      "Cost per link and per secure key bit.",
      "Certification and acceptance of QKD by agencies such as NSA, NCSC, and ANSSI.",
      "Field demonstrations of repeater or twin-field links beyond 500 km.",
      "Successful commercial satellite QKD services.",
    ], risks: [
      "Implementation attacks could undermine trust.",
      "Post-quantum cryptography may make QKD unnecessary for most customers.",
      "Costs may stay too high for broad deployment.",
    ], faq: [
      { q: "Is QKD unhackable?", a: "The protocols are secure in theory. Real devices can have flaws that attackers exploit, so implementation security matters." },
      { q: "Does QKD replace post-quantum cryptography?", a: "No. Agencies recommend post-quantum cryptography for general use, with QKD for special high-assurance links." },
      { q: "How far can QKD reach?", a: "A few hundred kilometers in fiber without relays, and thousands with trusted nodes or satellites." },
    ], references: [
      "Bennett, C. H., & Brassard, G. (1984). Quantum cryptography: Public key distribution and coin tossing. Proceedings of IEEE International Conference on Computers, Systems and Signal Processing, 175-179.",
      "Shor, P. W., & Preskill, J. (2000). Simple proof of security of the BB84 quantum key distribution protocol. Physical Review Letters, 85, 441-444.",
      "Lo, H.-K., Ma, X., & Chen, K. (2005). Decoy state quantum key distribution. Physical Review Letters, 94, 230504.",
      "Lo, H.-K., Curty, M., & Qi, B. (2012). Measurement-device-independent quantum key distribution. Physical Review Letters, 108, 130503.",
      "Lucamarini, M., Yuan, Z. L., Dynes, J. F., & Shields, A. J. (2018). Overcoming the rate-distance limit of quantum key distribution without quantum repeaters. Nature, 557, 400-403.",
      "Lydersen, L., et al. (2010). Hacking commercial quantum cryptography systems by tailored bright illumination. Nature Photonics, 4, 686-689.",
      "Xu, F., Ma, X., Zhang, Q., Lo, H.-K., & Pan, J.-W. (2020). Secure quantum key distribution with realistic devices. Reviews of Modern Physics, 92, 025002.",
      "Pirandola, S., et al. (2020). Advances in quantum cryptography. Advances in Optics and Photonics, 12, 1012-1236.",
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Paper: Simple Proof of Security of the BB84 Quantum Key Distribution Protocol", href: "/research/shor-preskill-bb84-security-proof-2000" },
      { label: "Paper: Decoy State Quantum Key Distribution", href: "/research/lo-ma-chen-decoy-state-qkd-2005" },
      { label: "Paper: Satellite-to-Ground Quantum Key Distribution", href: "/research/liao-satellite-to-ground-qkd-2017" },
      { label: "Paper: Quantum Cryptography Based on Bell's Theorem", href: "/research/ekert-quantum-cryptography-bell-1991" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
      { label: "Industry: Quantum Computing for Telecommunications", href: "/industries/telecommunications" },
    ], words: 1002 },
  { slug: "blockchain-crypto-quantum-future", title: "Quantum Computers and Blockchains: What Is Really at Risk", category: "security-networks", horizon: "2026 to 2040", confidence: "Medium", summary: "Bitcoin, Ethereum, and most blockchains rely on elliptic-curve signatures that a large quantum computer could forge. The threat is not immediate, but the migration is a coordination problem that is slow for decentralized systems, so planning matters now.", sections: [
      { heading: "What a quantum computer could break", paragraphs: [
          "Most blockchains secure ownership with digital signatures. Bitcoin and Ethereum use the elliptic-curve signature scheme ECDSA over the curve secp256k1, and Bitcoin has added Schnorr signatures in its Taproot upgrade, which rely on the same mathematical problem, the elliptic-curve discrete logarithm. Shor's algorithm, run on a large fault-tolerant quantum computer, can derive a private key from a public key. An attacker who could do this could sign transactions that move funds from any address whose public key has been revealed.",
          "Hash functions, used for mining and for building addresses, are much less affected. Grover's algorithm gives only a quadratic speedup against them, which affects mining difficulty modestly and does not allow shortcuts that would break the chain. The main exposure is therefore signatures, and secondarily the key exchange used in wallets and network communications.",
        ] },
      { heading: "Which coins are exposed", paragraphs: [
          "Exposure depends on whether the public key is visible. Bitcoin addresses of the common pay-to-public-key-hash type publish only a hash of the key until the owner spends from the address, so an unspent, never-reused address hides its public key behind a hash and is protected against a pure long-range attack, although the key is revealed when a transaction is broadcast. Older pay-to-public-key outputs, used in the early years including many coins attributed to the earliest miners, expose the key directly, as do reused addresses and Taproot outputs, where a tweaked public key appears on chain. Aggarwal, Brennen, Lee, Santha, and Tomamichel analyzed these categories in 2018 and estimated that a substantial fraction of coins sits in addresses with exposed keys.",
          "There is also a short-range attack. When a transaction is broadcast, the public key is revealed for the minutes until it is confirmed, so an attacker with a fast enough quantum computer could compute the private key and broadcast a competing transaction. That needs a machine that can break a key in minutes, which is much harder than one that takes days.",
        ] },
      { heading: "How big a machine is needed", paragraphs: [
          "Resource estimates for breaking 256-bit elliptic curves are lower than for RSA-2048 in terms of logical qubits. Roetteler and coauthors estimated in 2017 that about 2,330 logical qubits suffice. Webber and coauthors estimated in 2022 that breaking Bitcoin's signatures within an hour would need hundreds of millions of physical qubits, and within a day about 13 million physical qubits, under assumptions of 0.1 percent error and a one-microsecond cycle. Litinski in 2023 reduced the gate count to about 50 million Toffoli gates, and Gouzien and coauthors estimated that a cat-qubit architecture could do a 256-bit elliptic curve logarithm in about nine hours with about 126,000 cat qubits. These are model-dependent figures and may fall further.",
          "Today's machines are far from this. But the estimates show that the threshold for elliptic curves may be reached before that for RSA-2048, which is why some cryptographers regard them as the first targets.",
        ] },
      { heading: "The migration problem", paragraphs: [
          "The technical fix exists: signatures based on lattices, hashes, or codes. NIST standardized ML-DSA and SLH-DSA in 2024, and the Falcon-based scheme is in preparation. The costs are size and speed: an ECDSA signature is 64 bytes, a Falcon-512 signature about 666 bytes, an ML-DSA-65 signature about 3,300 bytes, and a small SLH-DSA signature about 7,900 bytes, with public keys also larger. On a blockchain, where every node stores every transaction, larger signatures raise storage and fees, so designs that aggregate signatures or move verification off-chain are being studied.",
          "The harder problem is governance. Changing a blockchain's signature scheme requires consensus among developers, miners or validators, exchanges, and users, and funds in lost or abandoned wallets cannot be migrated. Proposals for Bitcoin include new quantum-resistant output types, such as BIP-360, and discussions of deadlines after which old outputs would be frozen, which are contentious because of the principle that coins cannot be seized. Ethereum developers have discussed emergency hard forks and long-term plans to adopt post-quantum signatures, and account abstraction allows smart-contract wallets to switch signature schemes without changing the base protocol. Some chains, such as the Quantum Resistant Ledger, launched with hash-based signatures.",
        ] },
      { heading: "What users and builders can do", paragraphs: [
          "For ordinary holders, the practical advice is modest. Avoid address reuse, keep up with wallet software that adopts quantum-resistant options, and follow community proposals. For developers of tokens and applications on existing chains, the signature layer belongs to the base chain or the wallet, so the main step is to design contracts so that they can adapt, for example by supporting smart-contract accounts and by avoiding hard-coded assumptions about signature types. Teams that handle large custody, such as exchanges, should plan key rotation and inventory exposed keys.",
          "Another consideration is data: on-chain records are permanent, and transactions that reveal public keys can be recorded today and attacked later. Systems that encrypt sensitive data on chain or in off-chain storage with elliptic-curve key exchange face the harvest-now-decrypt-later risk, which is a reason to use hybrid or post-quantum key exchange for confidential data.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We believe the quantum threat to blockchains is real but not imminent. The central estimates place a machine capable of breaking elliptic curves in the 2030s at the earliest, with wide uncertainty, and the cost of waiting is that decentralized migration takes years. We expect major chains to adopt post-quantum signature options by around 2030, with adoption by users being slower. The danger is a surprise acceleration while migration is incomplete, and the scenario of frozen or stolen coins from abandoned wallets could be a lasting problem. Anyone building long-lived financial infrastructure should treat post-quantum readiness as part of the roadmap.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Proposals and testnets for post-quantum signatures on major chains; wallet and account-abstraction support appears." },
      { label: "2029 to 2032", value: "Post-quantum signature options live on major chains; exchanges and custodians rotate keys; debate over freezing legacy outputs." },
      { label: "2033 to 2040", value: "Migration mostly complete for active funds; legacy and lost wallets remain exposed if a machine appears." },
    ], signals: [
      "Resource estimates for elliptic-curve breaking below 100,000 physical qubits.",
      "Merged proposals for post-quantum output types on Bitcoin and Ethereum.",
      "Adoption of smart-contract wallets with upgradeable signatures.",
      "Exchange and custodian migration announcements.",
    ], risks: [
      "Governance could stall migration.",
      "A sudden advance in quantum hardware could outpace it.",
      "Larger signatures could strain blockchain capacity.",
    ], faq: [
      { q: "Will quantum computers break Bitcoin soon?", a: "Not with current machines. Estimates suggest millions of physical qubits are needed, and the date is uncertain." },
      { q: "Which coins are most at risk?", a: "Those held in addresses whose public keys are already visible on chain." },
      { q: "Is mining at risk?", a: "Much less. Grover's algorithm gives only a quadratic speedup against hash functions." },
    ], references: [
      "Aggarwal, D., Brennen, G., Lee, T., Santha, M., & Tomamichel, M. (2018). Quantum attacks on Bitcoin, and how to protect against them. Ledger, 3, 68-90.",
      "Roetteler, M., Naehrig, M., Svore, K. M., & Lauter, K. (2017). Quantum resource estimates for computing elliptic curve discrete logarithms. ASIACRYPT 2017, LNCS 10625, 241-270.",
      "Webber, M., et al. (2022). The impact of hardware specifications on reaching quantum advantage in the fault tolerant regime. AVS Quantum Science, 4, 013801.",
      "Litinski, D. (2023). How to compute a 256-bit elliptic curve private key with only 50 million Toffoli gates. arXiv:2306.08585.",
      "Gouzien, E., Ruiz, D., Le Régent, F.-M., Guillaud, J., & Sangouard, N. (2023). Performance analysis of a repetition cat code architecture: Computing 256-bit elliptic curve logarithm in 9 hours with 126,133 cat qubits. Physical Review Letters, 131, 040602.",
      "National Institute of Standards and Technology (2024). FIPS 204 and FIPS 205: Module-lattice-based digital signature standard; stateless hash-based digital signature standard.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Industry: Quantum Computing for Finance", href: "/industries/finance" },
    ], words: 1064 },
  { slug: "quantum-randomness-future", title: "Quantum Random Numbers and Certified Randomness", category: "security-networks", horizon: "2026 to 2035", confidence: "High", summary: "Quantum random number generators are already in phones and servers, and a new class of certified randomness can prove that bits are fresh and unpredictable. This is a small but real use of quantum technology with verifiable benefits.", sections: [
      { heading: "Why randomness matters", paragraphs: [
          "Cryptography depends on unpredictable numbers. Keys, nonces, salts, and challenges must be random, and a weak source can break otherwise strong systems. Computers usually rely on pseudo-random generators seeded from physical noise, such as thermal noise, timing jitter, or hardware sources in the processor. These are good when the entropy source is sound, but they can fail silently, and several real-world breaches have traced to poor randomness. Lotteries, games, scientific simulations, auctions, and blockchain protocols also need randomness that others can trust.",
          "Quantum mechanics offers randomness that is fundamentally unpredictable, because measuring a quantum system in a superposition gives a result that no hidden variable determines, according to the Born rule and the experimental violation of Bell inequalities. A quantum random number generator turns such a measurement into bits.",
        ] },
      { heading: "The commercial present", paragraphs: [
          "Quantum random number generators come in several designs. Simple devices send photons to a beam splitter and record which of two detectors fires. Others measure the phase noise of a laser, the arrival times of photons, or the vacuum fluctuations of the electromagnetic field, and some use image sensors found in phones to detect shot noise. Herrero-Collantes and Garcia-Escartin reviewed the field in 2017, and Ma and coauthors in 2016. Output rates from megabits to gigabits per second have been shown.",
          "Products are available. ID Quantique's chips powered a Samsung phone developed with SK Telecom in 2020, and quantum entropy sources are sold as cards and chips for servers and hardware security modules. Standards define how to test them: NIST SP 800-90B evaluates entropy sources, and certification schemes in Europe and Asia include quantum devices. The practical benefit is mainly assurance: a physical source with a clear model of its entropy, and a margin against some kinds of failure, though a conventional hardware source that is well tested is also adequate for most uses.",
        ] },
      { heading: "Certified and device-independent randomness", paragraphs: [
          "A stronger idea is to certify randomness from the statistics of the output alone. In device-independent randomness, proposed by Colbeck and by Pironio and coauthors in 2010, a Bell test is used: if the devices violate a Bell inequality, then the outputs must contain fresh randomness, whatever the internals of the devices. Pironio and coauthors demonstrated the principle with trapped ions in 2010, Bierhorst and coauthors in 2018 certified randomness with photons using Bell tests that closed loopholes, and Liu and coauthors in 2021 showed randomness expansion against quantum side information.",
          "In 2025, two results moved the field forward. A team at NIST and the University of Colorado launched a public randomness beacon, CURBy, whose bits are certified by a Bell test. And JPMorgan Chase, Quantinuum, and national laboratories published in Nature a protocol that uses a 56-qubit trapped-ion computer to produce random bits whose randomness can be verified by classical supercomputers, because producing the right kind of output is believed to be hard for a classical cheater. This is a verifiable use of a quantum computer on a task of practical relevance, even if narrow.",
        ] },
      { heading: "Applications", paragraphs: [
          "Four groups of applications stand out. Cryptographic key generation in high-assurance settings is the direct use, where quantum sources add defense in depth. Public randomness beacons that publish unpredictable values at regular intervals support lotteries, audits, fair selection, and protocols that need a trusted source of randomness, such as verifiable random functions in blockchains and decentralized applications. Gaming and gambling regulators prefer sources with certified entropy. Scientific simulation and Monte Carlo methods benefit from high-quality random streams, though pseudo-random generators suffice in most cases.",
          "Certified randomness could become a service: a cloud quantum computer that generates certified bits on demand for customers who need proof of freshness. Whether customers will pay for it depends on the cost compared with conventional sources, and on regulation that rewards proof.",
        ] },
      { heading: "What certified randomness cannot do", paragraphs: [
          "Certified randomness has limits that are easy to forget. It proves that bits were unpredictable at the time they were produced under stated assumptions, but it does not protect them afterward: if an attacker steals the bits, or if the system that consumes them is compromised, certification does not help. Device-independent protocols also assume that the devices cannot communicate during the test and that a small amount of initial randomness is available, and they produce bits slowly, often at rates far below those of conventional generators, because Bell tests need many trials.",
          "The verification method of the 2025 trapped-ion protocol relies on a computational assumption, namely that a classical computer cannot produce outputs of the required kind within the time limit, so its security is of a different kind from a Bell test. Users should therefore treat certified randomness as an additional layer of assurance for special uses and not as a replacement for sound system design, secure key handling, and well-tested conventional entropy sources.",
          "Even so, certification creates a useful habit: asking whether randomness can be audited. Auditable randomness is valuable in elections, lotteries, clinical trial allocation, and decentralized protocols, where the cost of doubt is high, and we expect interest from regulators and standards bodies to grow as the technology matures.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect quantum random number generators to become routine components in phones, servers, and security modules over the next five years, because the cost is low and the benefit is simple to explain. Device-independent and certified randomness will remain specialized, with beacons and a few services, and may grow if regulators and financial institutions begin to require proof of randomness. It will not be a large market, but it is one of the few quantum applications that is already verifiable and useful. The main risk is that the benefits over good classical sources are small for most buyers.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "QRNG chips in more devices and security modules; more public beacons; first certified-randomness pilots in finance." },
      { label: "2029 to 2032", value: "Standards for certified randomness; cloud services offering certified bits." },
      { label: "2033 to 2035", value: "Routine use in high-assurance systems; certified randomness integrated into protocols that need public randomness." },
    ], signals: [
      "Standards that reference quantum or Bell-certified sources.",
      "Phone makers adopting QRNG chips.",
      "Regulators requiring auditable randomness.",
      "Independent replication of certified randomness protocols on other hardware.",
    ], risks: [
      "Classical hardware sources may remain good enough.",
      "Certification may be too costly for most users.",
      "Hype may exaggerate the benefit.",
    ], faq: [
      { q: "Are quantum random numbers really random?", a: "If the source is well designed, the unpredictability is fundamental. Device-independent methods can certify it from statistics alone." },
      { q: "Do I need a quantum random number generator?", a: "Most applications do not. High-assurance and auditing uses may benefit." },
      { q: "What is certified randomness?", a: "Random bits whose unpredictability can be proven, for example by a Bell test or a verifiable computation." },
    ], references: [
      "Herrero-Collantes, M., & Garcia-Escartin, J. C. (2017). Quantum random number generators. Reviews of Modern Physics, 89, 015004.",
      "Ma, X., Yuan, X., Cao, Z., Qi, B., & Zhang, Z. (2016). Quantum random number generation. npj Quantum Information, 2, 16021.",
      "Pironio, S., et al. (2010). Random numbers certified by Bell's theorem. Nature, 464, 1021-1024.",
      "Bierhorst, P., et al. (2018). Experimentally generated randomness certified by the impossibility of superluminal signals. Nature, 556, 223-226.",
      "Liu, W.-Z., et al. (2021). Device-independent randomness expansion against quantum side information. Nature Physics, 17, 448-451.",
      "Liu, M., et al. (2025). Certified randomness using a trapped-ion quantum processor. Nature, 640, 343-348.",
      "National Institute of Standards and Technology (2018). NIST Special Publication 800-90B: Recommendation for the entropy sources used for random bit generation.",
    ], links: [
      { label: "Term: Quantum Random Number Generator", href: "/dictionary/quantum-random-number-generator" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
      { label: "Hardware: Quantinuum H2", href: "/hardware/quantinuum-h2" },
    ], words: 1083 },
  { slug: "pqc-migration-engineering-future", title: "Migrating to Post-Quantum Cryptography: The Engineering Reality", category: "security-networks", horizon: "2026 to 2035", confidence: "High", summary: "The algorithms are standardized, and the hard part is replacing them in billions of devices, certificates, and protocols. Larger keys and signatures, legacy hardware, and slow supply chains make the migration a multi-year engineering project.", sections: [
      { heading: "What changes technically", paragraphs: [
          "Post-quantum algorithms are not drop-in replacements. The key exchange standard ML-KEM, derived from Kyber, uses a public key of 1,184 bytes and a ciphertext of 1,088 bytes at the common 768 security level, compared with 32 bytes for X25519. The signature standard ML-DSA, derived from Dilithium, has public keys near 2,000 bytes and signatures near 3,300 bytes at the mid security level, versus 64-byte ECDSA signatures. The Falcon-based scheme has smaller signatures, about 666 bytes, but is harder to implement safely because of floating-point arithmetic, and SLH-DSA has tiny keys but signatures of several kilobytes. Computation is fast, since ML-KEM runs about as fast as elliptic-curve exchange, but the size of the messages affects protocols.",
          "These sizes cause real problems. A TLS handshake with hybrid key exchange adds more than a kilobyte, which exceeds the packet size assumptions in some middleboxes and caused connection failures when browsers first enabled hybrid Kyber in 2023 and 2024. Certificate chains with post-quantum signatures could add tens of kilobytes to each handshake, which matters for latency on slow links. Sikeridis and coauthors studied the performance of post-quantum authentication in TLS in 2020 and showed that signature size is the main cost.",
        ] },
      { heading: "Key exchange first, signatures later", paragraphs: [
          "The order of migration follows the threat. Harvest-now-decrypt-later attacks target key exchange, so hybrid key exchange that combines X25519 with ML-KEM has been deployed first, in Chrome, Cloudflare, and other services, and in messaging apps such as Signal and Apple's iMessage with their own post-quantum protocols. Signatures can be forged only by an attacker who has a quantum computer at the time of the attack, so the urgency is lower, except for long-lived signatures on software, firmware, and legal documents.",
          "Code signing is the first signature use case, because firmware lives long. NIST approved stateful hash-based signatures, LMS and XMSS, in 2020 in SP 800-208, and the NSA's CNSA 2.0 requires them for firmware signing in national security systems on a near timeline. For the web, ideas such as Merkle tree certificates aim to reduce the size cost of post-quantum certificates by changing how certificates are issued and validated, and IETF work on hybrid and post-quantum TLS continues.",
        ] },
      { heading: "The long tail: embedded systems and legacy", paragraphs: [
          "The hardest part is not browsers but everything else. Industrial control systems, medical devices, vehicles, smart meters, satellites, and payment terminals have service lives of 10 to 30 years, limited memory and processing power, and slow update paths. Some cannot be updated in the field. Hardware security modules, smart cards, and secure elements need new firmware or new chips, and certification of those products takes years. Supply chains for such products are long, so decisions made now determine what is in service in 2040.",
          "Organizations face the further problem of knowing what they use. Cryptography is embedded in libraries, protocols, and vendor products, often undocumented. Guidance from CISA, NSA, and NIST in 2023 and NIST's NCCoE migration project recommend building an inventory, sometimes called a cryptographic bill of materials, as the first step, then prioritizing by data lifetime and system criticality.",
        ] },
      { heading: "Crypto-agility and hybrids", paragraphs: [
          "The lesson of the SIKE break in 2022 is to expect surprises. Systems should be built so that algorithms can be replaced without redesign: negotiated algorithms, modular libraries, configurable key sizes, and the ability to update certificates and trust anchors. Hybrid constructions that combine a classical and a post-quantum algorithm hedge against failure of either, at the cost of extra size and complexity, and are recommended by many agencies for the transition, although some, like the NSA, accept pure post-quantum use in national security systems under CNSA 2.0.",
          "Agility has costs, since negotiation introduces downgrade attack risks, and support for many algorithms enlarges the attack surface. Good practice is to support a small number of well-reviewed options and to retire old ones on schedule.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We have high confidence that migration of public-facing web and cloud services will be largely done for key exchange by 2028 to 2030, and that signatures and certificates will follow by the early 2030s. Government and regulated sectors will meet deadlines of 2030 to 2035, with extensions and exceptions. The long tail of embedded and legacy systems will extend beyond 2035, which is why early inventory and procurement requirements matter. Costs will be significant, and organizations that treat migration as a normal part of lifecycle management will spend less than those that treat it as an emergency.",
        ] },
      { heading: "A practical migration plan in phases", paragraphs: [
          "A practical plan has four phases. In the first, discovery, the organization builds the inventory of cryptographic use, covering protocols, libraries, certificates, hardware, and third-party services, and identifies data with long confidentiality needs. In the second, risk ranking and planning, it assigns priority to systems whose data must stay secret the longest or whose replacement takes the longest, and sets target dates aligned with regulatory deadlines. In the third, pilots, it tests hybrid key exchange and post-quantum certificates in controlled environments, measuring performance, compatibility with middleboxes, and effects on operations.",
          "In the fourth, rollout, it deploys in waves, starting with externally facing services and key exchange, then internal systems, then signatures and devices, with monitoring and fallback plans. Throughout, it engages vendors and asks for post-quantum roadmaps in contracts, because many systems cannot be fixed by the customer alone. Budgeting should include testing and certification, which are often larger costs than the cryptographic change itself, and training for engineers who may never have worked with the new algorithms.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Hybrid key exchange default across major services; inventories completed in large organizations; post-quantum code signing for firmware." },
      { label: "2029 to 2032", value: "Post-quantum certificates and signatures in browsers and operating systems; HSM and smart card products certified." },
      { label: "2033 to 2035", value: "Deadlines hit in regulated sectors; legacy and embedded systems partially migrated." },
    ], signals: [
      "Share of web traffic using post-quantum key exchange.",
      "Certificate authorities issuing post-quantum certificates.",
      "Procurement rules requiring post-quantum support.",
      "New attacks on lattice-based schemes.",
    ], risks: [
      "A flaw in a standardized algorithm could force rework.",
      "Long-lived devices may stay vulnerable for years.",
      "Large signatures may hurt performance on constrained networks.",
    ], faq: [
      { q: "What is the first step for an organization?", a: "Build an inventory of where and how cryptography is used, and rank systems by how long their data must stay secret." },
      { q: "What is a hybrid key exchange?", a: "A method that combines a classical and a post-quantum algorithm, so that security holds if either one is broken." },
      { q: "Why are signatures slower to migrate?", a: "Post-quantum signatures are much larger, and certificate infrastructure has many dependencies." },
    ], references: [
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
      "National Institute of Standards and Technology (2020). NIST Special Publication 800-208: Recommendation for stateful hash-based signature schemes.",
      "National Institute of Standards and Technology (2024). NIST IR 8547 (initial public draft): Transition to post-quantum cryptography standards.",
      "Sikeridis, D., Kampanakis, P., & Devetsikiotis, M. (2020). Post-quantum authentication in TLS 1.3: A performance study. NDSS Symposium 2020.",
      "National Security Agency (2022). Commercial National Security Algorithm Suite 2.0 advisory.",
      "CISA, NSA, and NIST (2023). Quantum-readiness: Migration to post-quantum cryptography.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
      "Castryck, W., & Decru, T. (2023). An efficient key recovery attack on SIDH. EUROCRYPT 2023, LNCS 14008, 423-447.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Paper: An Efficient Key Recovery Attack on SIDH", href: "/research/castryck-decru-sidh-break-2022" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Industry: Quantum Computing for Cybersecurity", href: "/industries/cybersecurity" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
    ], words: 1055 },
  { slug: "quantum-market-funding-future", title: "The Quantum Market: Funding, Valuations, and Bubble Risk", category: "industry-policy", horizon: "2026 to 2040", confidence: "Low", summary: "Quantum companies have raised billions and trade at high valuations while revenue stays small and mostly comes from governments and research. Market forecasts range from tens to hundreds of billions of dollars, so it pays to know how those numbers are built.", sections: [
      { heading: "The size of the market today", paragraphs: [
          "Quantum computing revenue is small. Industry analysts such as McKinsey estimated the revenue of quantum computing companies at roughly 650 to 750 million dollars in 2024 and expected it to pass one billion dollars in 2025, and the wider quantum technology market, including sensing and communication, is larger but still in the low single-digit billions. Most customers are governments, national laboratories, universities, and a smaller number of large corporations running pilots. Hardware companies sell on-premises systems for millions to tens of millions of dollars, cloud access by the hour or by the task, and services.",
          "This is a research-stage market with product-like pricing. Many of the largest contracts are tied to public programs, such as national quantum initiatives and defense research, and a few come from companies buying systems to build expertise. Few customers use quantum computers in production for something they could not do otherwise.",
        ] },
      { heading: "Forecasts and how they are built", paragraphs: [
          "Forecasts of the future market are large and vary widely. McKinsey's 2025 Quantum Technology Monitor suggested that the combined market for quantum computing, communication, and sensing could reach up to about 97 billion dollars by 2035 in an optimistic scenario. Boston Consulting Group's 2024 analysis estimated that quantum computing could create 450 to 850 billion dollars of economic value by 2040, with vendors capturing 90 to 170 billion dollars of revenue, and noted that much of the value would come after fault-tolerant machines arrive.",
          "These numbers should be read as scenarios, not predictions. They multiply assumed adoption rates, value per use case, and the timing of technical milestones, each of which is uncertain, and small changes in the date of fault-tolerant machines move the totals by large factors. History offers caution: Mohseni and coauthors wrote in Nature in 2017 that quantum technologies could be commercialized within five years, an expectation that did not come true, and market forecasts for emerging technologies often overshoot in the near term and undershoot in the long term.",
        ] },
      { heading: "Funding and valuations", paragraphs: [
          "Capital has flowed in. Venture investment in quantum technology startups was on the order of two billion dollars in 2024, according to industry trackers, and 2025 saw even larger rounds. PsiQuantum raised about a billion dollars in September 2025, Quantinuum raised about 600 million dollars at a valuation of about 10 billion dollars, QuEra raised more than 230 million dollars, Alice and Bob about 100 million euros, and IQM a large round as well. Public pure-play companies such as IonQ, Rigetti, D-Wave, and Quantum Computing Inc. saw their share prices rise sharply in 2024 and 2025, giving some of them multi-billion dollar valuations on revenues of tens of millions of dollars or less. Governments have joined: in May 2026 the US Department of Commerce announced letters of intent with nine companies for about two billion dollars, reported to include equity stakes.",
          "Valuations reflect expectations of a very large future market, and they depend on continued progress and on investor sentiment. Many companies burn cash faster than they earn revenue, and rely on raising new money or on government contracts to continue.",
        ] },
      { heading: "Bubble risk", paragraphs: [
          "There are signs of exuberance: valuations far above revenue, share prices that moved on announcements, and companies adopting the word quantum in their names or strategies. There are also reasons the picture differs from a pure bubble: the technology advances measurably, large technology companies are investing, governments treat it as strategic, and real progress in error correction has occurred. The risk is not that quantum computing is fake, but that timelines are longer than market prices assume.",
          "A shakeout is plausible. Technology cycles often include a period of disappointment when promised applications fail to arrive, with consolidation and failures, before the surviving companies mature. The failure of Zapata AI, a quantum software company that reportedly ceased operations in 2024, illustrates that software-only business models can struggle before hardware is ready. Investors and customers should distinguish companies with strong technical teams and enough cash to reach milestones from those that rely on narratives.",
        ] },
      { heading: "Where revenue may come from", paragraphs: [
          "The near-term revenue pools are government programs and defense, post-quantum cryptography and quantum-safe services, quantum sensing products such as clocks and magnetometers, cloud access and research collaborations, and component sales such as cryogenics, lasers, and control electronics. The suppliers of picks and shovels, including cryogenic companies, optical component makers, and electronics vendors, may see steadier revenue than the full-stack vendors, since they sell to many customers.",
          "Large revenue from quantum computing applications such as chemistry, materials, and optimization depends on fault-tolerant machines and on advantage over classical methods, and we expect it to emerge after 2030. The path from billions of revenue to tens of billions probably runs through that transition.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We rate our confidence as low because market outcomes depend on technical, financial, and political factors that interact. Our central view is that revenue will grow steadily, reaching several billion dollars by 2030 across computing, sensing, and communication, that a funding correction at some point in the late 2020s is more likely than not, and that a handful of leaders with strong technology and capital will emerge with larger shares. For individuals, we caution against treating quantum stocks as simple bets on a technology; they are bets on specific companies, timelines, and capital markets, and this page is not investment advice.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Revenue passes a few billion dollars across quantum technology; large rounds continue; first signs of consolidation." },
      { label: "2029 to 2032", value: "A possible funding correction; leaders with fault-tolerant roadmaps raise capital; revenue from error-corrected machines begins." },
      { label: "2033 to 2040", value: "Market growth tied to advantage in chemistry, materials, and cryptanalysis; wide range of outcomes." },
    ], signals: [
      "Revenue from commercial customers, not only governments.",
      "Repeat purchases of systems and recurring cloud contracts.",
      "Cash runway relative to technical milestones.",
      "Gaps between valuations and revenue in public companies.",
    ], risks: [
      "Technical delays could cause a funding downturn.",
      "Government funding could change with politics.",
      "Forecasts may be overly optimistic.",
    ], faq: [
      { q: "How big is the quantum computing market today?", a: "Roughly a billion dollars of annual revenue in the mid-2020s, according to analysts, mostly from governments and research." },
      { q: "Are quantum stocks a bubble?", a: "Valuations are high relative to revenue and depend on future progress. This page is not investment advice." },
      { q: "Which forecast should I trust?", a: "None individually. Treat market forecasts as scenarios and look at their assumptions." },
    ], references: [
      "McKinsey and Company (2025). Quantum Technology Monitor.",
      "Boston Consulting Group (2024). Where will quantum computing create value, and when?",
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
      "U.S. Department of Commerce (2026). Department of Commerce announces letters of intent with 9 companies for $2 billion to accelerate U.S. leadership in quantum computing. https://www.quantum.gov/department-of-commerce-announces-letters-of-intent-with-9-companies-for-2-billion-to-accelerate-u-s-leadership-in-quantum-computing/",
      "EE News Europe (2025). QuEra advances fault tolerant quantum roadmap with $230M industrial push.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
    ], links: [
      { label: "Company: IonQ", href: "/companies/ionq" },
      { label: "Company: Rigetti Computing", href: "/companies/rigetti" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
      { label: "Company: Quantinuum", href: "/companies/quantinuum" },
      { label: "Company: QuEra Computing", href: "/companies/quera" },
      { label: "Industry: Quantum Computing for Finance", href: "/industries/finance" },
    ], words: 1030 },
  { slug: "quantum-business-landscape-future", title: "Who Will Win: Big Tech, Startups, and Consolidation", category: "industry-policy", horizon: "2026 to 2035", confidence: "Low", summary: "The quantum industry mixes technology giants, public pure-plays, and well-funded startups, each with different strengths. Expect acquisitions, partnerships with chipmakers and cloud providers, and a shakeout among companies without a path to fault tolerance.", sections: [
      { heading: "The cast of players", paragraphs: [
          "Four groups compete. Technology giants include IBM, Google, Microsoft, Amazon, and Intel, which have research programs, cloud platforms, and balance sheets, and sell access to hardware and software. NVIDIA is a different kind of player: it does not build qubits but supplies the classical computing, software, and links, such as CUDA-Q and NVQLink, that hybrid systems need, and has invested in several quantum startups. Public pure-plays such as IonQ, Rigetti, D-Wave, and Quantum Computing Inc. raised money in public markets. Well-funded private companies include Quantinuum, majority-owned by Honeywell, PsiQuantum, QuEra, Pasqal, Alice and Bob, IQM, Atom Computing, Infleqtion, and Xanadu, along with many smaller firms in software, control systems, sensing, and networking.",
          "Each group has strengths. Giants bring capital, manufacturing know-how, cloud customers, and patience, but are exposed to internal priorities. Startups are focused and agile but need capital and customers. Public pure-plays have access to equity but face market pressure. The question of who wins depends on which technical approach reaches fault tolerance first and on who can fund the long path.",
        ] },
      { heading: "Business models", paragraphs: [
          "Hardware companies sell in three ways. On-premises systems for national laboratories and corporations, priced from millions to tens of millions of dollars, give revenue and credibility. Cloud access, through their own platforms or through marketplaces such as Amazon Braket and Azure Quantum, gives recurring revenue at smaller scale. Government research contracts and partnerships provide the largest share for many. Software and tools companies, such as Classiq, Q-CTRL, Phasecraft, and others, sell compilers, error suppression, and algorithm services, and face the problem that their market depends on the hardware reaching useful scale. Component suppliers sell cryogenics, lasers, and electronics to many customers.",
          "Full-stack integration is a strategy for some, such as IBM and Quantinuum, and a risk for others who must master many technologies at once. Specialization and partnerships are the alternative: a company that does a single thing well, such as control electronics or decoders, can serve multiple platforms.",
        ] },
      { heading: "Consolidation has begun", paragraphs: [
          "Acquisitions have started. IonQ, using its public stock and cash, reportedly acquired Qubitekk, took a controlling stake in ID Quantique, and bought Lightsynq, Capella Space, Vector Atomic, and, for about 1.08 billion dollars, Oxford Ionics in 2025, building a position across computing, networking, sensing, and space. Quantinuum was formed in 2021 by merging Honeywell's quantum unit with Cambridge Quantum. Partnerships tie hardware makers to cloud and chip companies: Microsoft works with Atom Computing and Quantinuum, Google has invested in QuEra, and NVIDIA has invested in several companies.",
          "We expect more of these. Companies with strong technology but limited capital will be acquired or merge, and big technology firms may buy platforms that prove out. Failures will also occur, and the end of the cycle will leave fewer, larger players. Customers should consider the survival of a vendor when committing to a platform, and prefer open software standards that reduce lock-in.",
        ] },
      { heading: "How to judge durability", paragraphs: [
          "Several indicators help. Cash runway relative to the milestones the company says it will reach is the first: a company that must raise money before it can show the next milestone is fragile. Technical credibility is second, measured by peer-reviewed results, independent verification, and a track record of meeting roadmap dates. Third is the revenue mix, in particular the share from repeat commercial customers as opposed to one-time government grants. Fourth is the team's depth in the hard problems, such as error correction, fabrication, and control systems, not only in physics.",
          "Finally, a plausible path to fault tolerance with credible resource estimates matters. A company whose roadmap needs a million qubits but whose current device has a hundred, and which has no published plan for the intervening steps, is taking a larger risk than one with a staged plan and demonstrated components.",
        ] },
      { heading: "What customers should ask before committing", paragraphs: [
          "Customers choosing a platform should ask practical questions. Can the software run on more than one vendor's hardware, or is it tied to a proprietary toolchain? What happens to access and data if the vendor is acquired or ceases operations? Are prices predictable, and are the terms for cloud time, support, and system upgrades clear? Is the roadmap supported by results that independent experts have reviewed, and does the vendor publish error rates and benchmark data?",
          "A sensible policy for large organizations is to work with two or three vendors on different technologies at modest scale, to keep skills portable by using open frameworks and standards, and to avoid prepaying for long contracts based on roadmap promises. For small organizations, cloud marketplaces offer flexibility. In all cases, the purchase should be tied to a learning goal or a concrete project, not to the fear of missing out, since the field will change repeatedly in the next decade.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We have low confidence about which companies and technologies will lead, and we expect surprises. A reasonable central scenario is that by 2030, three to five full-stack leaders remain across superconducting, ion, and atom platforms, that photonic and topological approaches either demonstrate critical milestones or fade, and that a larger group of component, software, and service companies serve the ecosystem. Big technology firms will remain important as capital providers and cloud channels. Individuals and organizations should avoid betting on a single winner and should favor skills and interfaces that transfer across platforms.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More acquisitions and strategic investments; a few startups fail or are absorbed; chipmakers and cloud providers deepen ties." },
      { label: "2029 to 2032", value: "Leaders emerge on error-corrected machines; funding concentrates; platform shakeout." },
      { label: "2033 to 2035", value: "A smaller set of established vendors with fault-tolerant products, plus a specialized supplier ecosystem." },
    ], signals: [
      "Acquisitions and mergers among hardware makers.",
      "Independent verification of vendor milestones.",
      "Cloud marketplaces dropping or adding platforms.",
      "Cash runway disclosures and funding rounds.",
    ], risks: [
      "A technology surprise could upset the leaders.",
      "Capital markets could close for the sector.",
      "Vendor lock-in could hurt customers if a platform fails.",
    ], faq: [
      { q: "Which company is ahead?", a: "It depends on the measure: Google on demonstrated surface-code scaling, IBM on roadmaps and access, Quantinuum on trapped-ion accuracy, QuEra on neutral-atom logical qubits." },
      { q: "Should I worry about vendor lock-in?", a: "Yes. Prefer open standards and software that runs on several platforms." },
      { q: "Will big tech buy the startups?", a: "Some acquisitions are likely, especially for companies with key technology." },
    ], references: [
      "McKinsey and Company (2025). Quantum Technology Monitor.",
      "IonQ (2025). IonQ to acquire Oxford Ionics. IonQ press release, June 2025.",
      "Quantinuum (2021). Honeywell and Cambridge Quantum announce the formation of Quantinuum. Press release, 29 November 2021.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
      "NVIDIA (2025). NVQLink announcement. NVIDIA press release, October 2025.",
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Company: Google (Google Quantum AI)", href: "/companies/google" },
      { label: "Company: Microsoft", href: "/companies/microsoft" },
      { label: "Company: IonQ", href: "/companies/ionq" },
      { label: "Company: Quantinuum", href: "/companies/quantinuum" },
      { label: "Company: Classiq", href: "/companies/classiq" },
    ], words: 1020 },
  { slug: "quantum-export-controls-supply-chain-future", title: "Export Controls and the Quantum Supply Chain", category: "industry-policy", horizon: "2026 to 2035", confidence: "Medium", summary: "Quantum technology depends on specialized parts, rare materials, and a few suppliers, and governments are restricting exports of key items. These controls and supply bottlenecks will shape who can build quantum machines and how fast.", sections: [
      { heading: "A supply chain with few suppliers", paragraphs: [
          "A quantum computer is a system of specialized components, and many have only a handful of suppliers. Superconducting machines need dilution refrigerators, mostly from companies in Finland, the United States, and the United Kingdom, plus cryogenic amplifiers, superconducting cables, and filters. Trapped-ion and neutral-atom machines need narrow-linewidth lasers, optical modulators, vacuum systems, and cameras or detectors. Photonic machines depend on foundries, single-photon sources, and superconducting nanowire detectors. Silicon spin qubits depend on isotopically enriched silicon-28, historically supplied by a small number of sources. All need control electronics, such as fast arbitrary waveform generators and FPGAs.",
          "Many of these items are produced in small volumes by specialized firms, and lead times are long. A fast-growing market meets a thin supply chain, which can cause delays and price increases, and this is a reason that expanding production capacity has become a priority for governments and companies.",
        ] },
      { heading: "Helium-3 and other scarce inputs", paragraphs: [
          "Dilution refrigerators run on helium-3, a rare isotope produced mainly as a byproduct of the decay of tritium used in nuclear weapons programs, and its supply is limited, as the US Congressional Research Service documented in 2010. Demand from quantum computing, medical imaging, and neutron detection has grown, prices have risen, and each large system uses significant quantities. Alternatives under study include more efficient recycling, adiabatic demagnetization refrigerators, and, more speculatively, extraction of helium-3 from lunar soil, which some startups have proposed. We treat the lunar route as long-term and uncertain.",
          "Other scarce inputs include ytterbium and strontium isotopes for atomic qubits, rare-earth materials for certain memories, high-purity niobium and tantalum for superconducting circuits, and sapphire and silicon substrates of high quality. Dependence on a few countries for some of these raises resilience concerns similar to those in semiconductors.",
        ] },
      { heading: "Export controls", paragraphs: [
          "Governments have begun to control exports. In September 2024, the US Bureau of Industry and Security issued rules restricting exports of certain quantum computers above defined qubit counts and error-rate thresholds, and of key items such as dilution refrigerators, cryogenic control electronics, parametric amplifiers, and some fabrication and testing equipment, with license requirements for many destinations, and allied governments adopted parallel or complementary measures. The Netherlands, Spain, and France introduced national controls in 2024, the United Kingdom has its own list, and the European Union has been updating its dual-use list to include quantum items.",
          "The aims are to slow the acquisition of capabilities by countries seen as adversaries, mainly for cryptanalysis and military uses, while keeping trade among allies open. China has its own export rules on some materials and technologies and has invested in domestic substitutes for cryogenic and control equipment. The effect on science is complex: controls can complicate collaboration, hinder access to equipment, and affect the movement of researchers, because transfers of controlled technology to foreign nationals can require licenses.",
        ] },
      { heading: "Effects on the industry", paragraphs: [
          "For companies, controls mean compliance costs, restrictions on markets, and encouragement to localize supply chains. Hardware vendors that sell abroad must track the thresholds, and customers may find that certain systems are unavailable. For countries without domestic suppliers, controls create dependence on allies, which has driven national programs to build capabilities in cryogenics, lasers, and chip fabrication, including in India, Japan, South Korea, and the European Union. For researchers, the practical effect is more paperwork and the need to check whether a collaboration or a purchase triggers a license requirement.",
          "There are also industrial policy effects. Governments are funding fabrication facilities for superconducting and photonic chips, pilot lines, and testbeds, and tying funding to domestic manufacturing, as in the 2026 US Commerce Department announcement. This can speed progress by solving bottlenecks but can also duplicate effort and fragment standards.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect controls to broaden and become more detailed as technology matures, with thresholds updated to reflect new capabilities, and for allied alignment to improve. Supply bottlenecks will ease in some areas as volume rises, for example in dilution refrigerators and lasers, and persist in others, such as isotopes and specialized foundry capacity. Helium-3 will remain a constraint for cryogenic systems, favoring platforms that avoid dilution refrigerators or require less cooling power, and encouraging recycling. Companies should map their supply chains, dual-source critical components where possible, and build export compliance into planning. Policymakers should aim for controls that are targeted and clear, since broad or unpredictable rules harm legitimate research and industry.",
        ] },
      { heading: "What companies and researchers can do", paragraphs: [
          "Practical steps are straightforward. Companies should map their bill of materials to identify single-source components and items that may fall under export rules, keep records of classification and licensing decisions, and build relationships with several suppliers where possible. They should plan for lead times, since dilution refrigerators and specialized lasers can take many months to deliver, and consider the location of facilities when hiring international staff or sharing technical data.",
          "Researchers should check with their institution's export compliance office before ordering controlled equipment or sharing controlled technical data with collaborators abroad, and should be aware that fundamental research is often exempt under many regimes while specific technology transfers are not. Funders and universities can help by providing clear guidance and by supporting shared facilities, such as national cryogenic and fabrication centers, which reduce duplication and give smaller groups access to scarce equipment.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More export-control rules, including allied updates; supply bottlenecks for fridges and lasers ease; domestic pilot lines announced." },
      { label: "2029 to 2032", value: "Regional supply chains develop; helium-3 recycling and alternatives mature; controls track fault-tolerant capabilities." },
      { label: "2033 to 2035", value: "Quantum treated like semiconductors in trade policy, with routine licensing regimes and allied supply networks." },
    ], signals: [
      "New or revised thresholds in US, EU, and allied export rules.",
      "Helium-3 prices and supply announcements.",
      "Domestic dilution refrigerator and laser production in India, Japan, and Europe.",
      "Delays in system deliveries attributed to supply issues.",
    ], risks: [
      "Overbroad controls could harm science.",
      "Supply shortages could slow scaling.",
      "Fragmented standards could raise costs.",
    ], faq: [
      { q: "Why are dilution refrigerators controlled?", a: "Because they are essential for superconducting quantum computers and hard to substitute." },
      { q: "Is helium-3 running out?", a: "Supply is limited and demand has grown, so price and availability are concerns." },
      { q: "Do export controls affect researchers?", a: "They can, through licensing for equipment and for sharing controlled technology with foreign nationals." },
    ], references: [
      "U.S. Bureau of Industry and Security (2024). Export controls on quantum computing items, interim final rule, September 2024.",
      "Shea, D. A., & Morgan, D. (2010). The helium-3 shortage: Supply, demand, and options for Congress. Congressional Research Service Report R41419.",
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "U.S. Department of Commerce (2026). Department of Commerce announces letters of intent with 9 companies for $2 billion to accelerate U.S. leadership in quantum computing. https://www.quantum.gov/department-of-commerce-announces-letters-of-intent-with-9-companies-for-2-billion-to-accelerate-u-s-leadership-in-quantum-computing/",
      "European Commission (2025). Quantum Europe Strategy.",
    ], links: [
      { label: "Industry: Quantum Computing and the Semiconductor Industry", href: "/industries/semiconductors-electronics" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
      { label: "Term: Dilution Refrigerator", href: "/dictionary/dilution-refrigerator" },
      { label: "Term: Cryogenic CMOS Control", href: "/dictionary/cryo-cmos" },
    ], words: 1007 },
  { slug: "quantum-standards-regulation-future", title: "Standards and Regulation for Quantum Technology", category: "industry-policy", horizon: "2026 to 2035", confidence: "High", summary: "Standards bodies and regulators are moving from post-quantum cryptography to broader quantum technology. Expect firm deadlines for cryptographic migration, formal terminology and benchmarks for quantum computers, and certification schemes for quantum communication.", sections: [
      { heading: "Why standards matter now", paragraphs: [
          "A young technology needs shared definitions before markets can work. Without agreed terms and tests, a qubit count or a speedup claim cannot be compared across vendors, and customers cannot judge performance or security. Standards also support procurement, regulation, and interoperability: programming languages, hardware interfaces, and cryptographic algorithms that work together. In quantum technology, standardization has progressed fastest where urgency is greatest, in cryptography, and is now spreading to computing, communication, and sensing.",
        ] },
      { heading: "Cryptography: the most advanced area", paragraphs: [
          "NIST published the first post-quantum standards in August 2024 and selected HQC in March 2025. Governments have attached deadlines. The US NSM-10 of 2022 and the Quantum Computing Cybersecurity Preparedness Act require agencies to inventory cryptography and prepare for migration, with an overall target around 2035, and the Office of Management and Budget issued a memorandum in 2022 on the inventory. NSA's CNSA 2.0 sets algorithm and timing requirements for national security systems, with most categories exclusive by 2033. The UK NCSC has milestones at 2028, 2031, and 2035, the European Commission issued a recommendation in 2024 and a coordinated implementation roadmap in 2025 calling for national plans by 2026, high-risk systems by 2030, and as many systems as feasible by 2035, and Australia and Canada have published comparable timelines. In finance, the G7 Cyber Expert Group and the Bank for International Settlements have published statements and projects on quantum readiness.",
          "These instruments are moving from guidance to requirements in procurement and sector rules. Organizations that sell to governments or operate critical infrastructure will face contract clauses that require post-quantum support, and auditors will ask about inventories and migration plans.",
        ] },
      { heading: "Quantum computing: terminology, performance, and software", paragraphs: [
          "Work on computing standards is earlier. The IEEE has projects on quantum computing definitions and terminology and on performance metrics and benchmarking, and the joint technical committee of ISO and IEC on quantum technologies, created in 2024, is developing a program of standards. In Europe, CEN and CENELEC have a joint technical committee on quantum technologies. The Quantum Economic Development Consortium in the United States publishes application-oriented benchmarks and use-case guidance.",
          "Software interfaces matter too. OpenQASM 3, described by Cross and coauthors in 2022, is a widely used circuit language, the Quantum Intermediate Representation, hosted by the QIR Alliance under the Linux Foundation, offers a common compiler target, and cloud providers support several kits. These are de facto standards from industry, and formal standardization may follow.",
        ] },
      { heading: "Quantum communication and sensing", paragraphs: [
          "For quantum key distribution, ETSI has produced specifications and protection profiles, and the ISO and IEC standard 23837 on security evaluation of QKD systems was published in 2023, with certification schemes emerging in Europe and Asia. The International Telecommunication Union has study groups on quantum key distribution networks and a focus on terminology and architecture. The IETF's Quantum Internet Research Group produced RFC 9340 on architectural principles in 2023.",
          "For quantum sensing, national metrology institutes work on traceability, calibration, and performance testing, since customers need to know that a quantum magnetometer or clock meets a specification. The international discussions on redefining the second using optical clocks are a notable example of metrology shaping standards.",
        ] },
      { heading: "Regulation beyond cryptography", paragraphs: [
          "Regulation is likely to extend to export controls, as discussed elsewhere in this series, to data protection concerns about harvest-now-decrypt-later, to safety rules for products using quantum sensors in medicine and aviation, and to procurement rules for critical infrastructure. Questions of liability, for example when a system relying on weak cryptography is breached years after data was collected, are open. Privacy regulators have begun to note that encryption must protect data for the length of time it needs to be confidential, which implies quantum-safe measures for sensitive long-lived data.",
          "There is little regulation specific to quantum computing as a computing technology, and we do not expect much in this decade, because the machines are not yet widely deployed. Safety and ethics questions will arise with applications, such as the use of quantum-enhanced methods in medicine or finance, and would be handled under existing sectoral rules.",
        ] },
      { heading: "Practical steps for organizations", paragraphs: [
          "Organizations can take concrete steps. Assign someone to track standards and regulatory developments in cryptography and in the sectors they operate in, and map internal policies to the deadlines of the main regulators that affect them. Join industry groups that participate in standards work, since early involvement helps shape practical requirements and gives early notice of changes. When procuring products, ask suppliers whether they follow the relevant standards, for example the NIST post-quantum algorithms, and request evidence of testing and certification.",
          "For quantum computing and sensing projects, document benchmarks and methods in ways that follow emerging conventions, so that results can be compared and audited, and prefer open interfaces, such as OpenQASM and the common intermediate representations, that reduce dependence on a single vendor. Standards work is slow, but organizations that engage with it usually find that compliance later is cheaper and easier than retrofitting.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect standards and regulation in cryptography to tighten steadily and to be the most consequential for organizations in this decade. Performance and terminology standards for quantum computers will mature by about 2030, helping to make claims comparable, and certification for QKD and quantum sensing will follow. Organizations should follow their sector regulators, join industry consortia that shape standards, and treat compliance deadlines as planning anchors, not as the finish line, because a cryptographic transition takes years.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "National migration plans due; procurement clauses require post-quantum support; first ISO/IEC and IEEE quantum standards drafts." },
      { label: "2029 to 2031", value: "Deadlines for high-risk systems; performance and benchmarking standards published; QKD certification matures." },
      { label: "2032 to 2035", value: "Quantum-safe cryptography required in most regulated sectors; standards for fault-tolerant computing metrics." },
    ], signals: [
      "Procurement rules requiring post-quantum algorithms.",
      "Publication of ISO and IEC quantum standards.",
      "Sector regulators issuing quantum-readiness requirements.",
      "Adoption of common benchmarks across vendors.",
    ], risks: [
      "Fragmented national standards could raise costs.",
      "Deadlines could be pushed back.",
      "Standards could lag technology.",
    ], faq: [
      { q: "What are the main quantum security standards?", a: "NIST's FIPS 203, 204, and 205, with HQC selected as a backup, and national deadlines such as NSA's CNSA 2.0." },
      { q: "Is there a standard for quantum computer performance?", a: "Work is under way at IEEE, ISO and IEC, and industry groups, but no single standard is widely adopted yet." },
      { q: "Will quantum computing be regulated?", a: "Mostly indirectly, through export controls, cryptography rules, and sector regulations." },
    ], references: [
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
      "The White House (2022). National Security Memorandum 10 (NSM-10).",
      "United States Congress (2022). Quantum Computing Cybersecurity Preparedness Act, Public Law 117-260.",
      "National Security Agency (2022). Commercial National Security Algorithm Suite 2.0 advisory.",
      "European Commission (2024). Recommendation on a coordinated implementation roadmap for the transition to post-quantum cryptography.",
      "UK National Cyber Security Centre (2025). Timelines for migration to post-quantum cryptography.",
      "Cross, A., et al. (2022). OpenQASM 3: A broader and deeper quantum assembly language. ACM Transactions on Quantum Computing, 3, 12.",
      "Kozlowski, W., Wehner, S., Van Meter, R., et al. (2023). Architectural principles for a quantum internet. IETF RFC 9340.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
      { label: "Industry: Quantum Computing for Cybersecurity", href: "/industries/cybersecurity" },
    ], words: 1027 },
  { slug: "quantum-india-future", title: "India and Quantum Technology: The National Quantum Mission and Beyond", category: "industry-policy", horizon: "2026 to 2038", confidence: "Medium", summary: "India's National Quantum Mission funds computing, communication, sensing, and materials hubs, and a growing set of startups and institutions is building hardware and software. The country has strong talent, and its challenges are fabrication, supply chains, and scale of funding.", sections: [
      { heading: "The National Quantum Mission", paragraphs: [
          "India's Union Cabinet approved the National Quantum Mission on 19 April 2023, with a budget of about 6,003 crore rupees for the period from 2023 to 2024 through 2030 to 2031, to be implemented by the Department of Science and Technology. The mission aims to build intermediate-scale quantum computers with 50 to 1,000 physical qubits in five to eight years, to establish satellite-based secure quantum communication between ground stations over distances up to 2,000 kilometers within India and long-distance quantum key distribution with other countries, to develop inter-city quantum key distribution over fiber networks of about 2,000 kilometers, and to build advanced quantum sensing and metrology devices, including magnetometers with high sensitivity, atomic clocks, and quantum materials and devices.",
          "The mission organizes work in four thematic hubs, announced in 2024: quantum computing at the Indian Institute of Science in Bengaluru, quantum communication at IIT Madras together with C-DOT, quantum sensing and metrology at IIT Bombay, and quantum materials and devices at IIT Delhi. The hubs link universities, national laboratories, and industry, and the mission funds fellowships, startups, and infrastructure.",
        ] },
      { heading: "What exists and who is building", paragraphs: [
          "India has a long record in quantum theory and experiment. The Tata Institute of Fundamental Research, the Raman Research Institute, IISc, IIT groups, and the Physical Research Laboratory have worked on superconducting circuits, trapped ions, cold atoms, quantum optics, and quantum information, and several groups have built small superconducting qubit devices. The Indian Space Research Organisation demonstrated free-space quantum key distribution over a few hundred meters in 2021, and DRDO and IIT Delhi reported longer free-space links, which are steps toward satellite communication.",
          "A startup ecosystem has formed. QpiAI in Bengaluru has reported building a 25-qubit superconducting processor and plans for larger ones, QNu Labs sells quantum-safe security products including quantum key distribution and post-quantum solutions, BosonQ Psi works on quantum software for engineering simulation, and other firms build tools, sensors, and services. Large Indian IT services companies, including TCS, Infosys, Wipro, and HCL, have quantum practices, often in partnership with IBM, Microsoft, and others, and the state of Andhra Pradesh has announced the Amaravati Quantum Valley initiative with plans to host a large IBM quantum system and attract companies and researchers. Details of some of these programs have been announced through press releases and should be treated as plans until delivered.",
        ] },
      { heading: "Strengths and constraints", paragraphs: [
          "India's main strengths are talent and software. The country produces large numbers of engineers and scientists, has strong computer science and mathematics, and a services industry that can build software, compilers, and applications on top of hardware from others. These strengths suit areas such as algorithms, error-correction software, post-quantum cryptography migration, and quantum-safe security for the country's large digital public infrastructure, including payments and identity systems.",
          "Constraints are significant. Fabrication of superconducting and photonic chips needs cleanroom facilities and processes that are still limited, supply chains for dilution refrigerators, lasers, and cryogenic electronics rely on imports, and funding, though substantial for India, is smaller than the programs of the United States, China, or the European Union. Retaining talent is a challenge, since many researchers move abroad. Export controls by other countries could complicate access to equipment, an additional reason for domestic capacity building.",
        ] },
      { heading: "Opportunities for students, developers, and companies", paragraphs: [
          "For students, the mission funds research positions, fellowships, and new courses at IITs, IISc, and other institutes, and open resources and cloud access make it possible to learn quantum programming from anywhere. For software developers, opportunities exist in quantum software tools, hybrid algorithms, error-correction decoders, and simulators, as well as in post-quantum cryptography engineering, where demand from banks and government is growing. For companies, the security market is the nearest, since regulators and large institutions, including financial services, will need to migrate to quantum-safe cryptography, and quantum sensing and communication products fit the government's priorities.",
          "For ventures in the digital economy, including web and blockchain developers, the practical connection is cryptographic readiness. Systems that handle identity, payments, and long-lived records should plan for post-quantum signatures and key exchange, and Indian developers building on global platforms will follow the schedules of those platforms.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect India to establish credible capabilities in quantum communication and sensing and in software during the next five years, and to demonstrate a domestic processor in the range of tens to a hundred or so physical qubits within the mission period, which would be a significant achievement but far from fault tolerance. India is unlikely to lead in hardware scale this decade, and its greatest opportunities are likely to be in applications, security, services, and specialized components. Progress will depend on fabrication infrastructure, sustained funding beyond the mission, and the ability to keep talent in the country. Meeting the mission's 2,000-kilometer communication goals would depend on satellite launches and ground infrastructure that take time.",
        ] },
      { heading: "What to watch in the next three years", paragraphs: [
          "Several milestones will show how the mission is progressing. The first is the publication of data from hub-built processors, including coherence times and gate fidelities, which will indicate whether domestic devices are competitive for their size. The second is the launch and operation of the first satellite and fiber quantum communication links that connect cities, with measured key rates and uptime. The third is the formation of domestic supply capacity for cryogenic systems, lasers, and control electronics, since dependence on imports is the main bottleneck.",
          "Policy milestones matter as much. Regulators in finance and telecommunications may issue post-quantum migration requirements, which would create a market for local security products and services. Funding announcements beyond 2031, procurement policies that favor domestic suppliers, and programs that connect research groups to industry will determine whether early progress turns into an industry. These are signals that students, developers, and entrepreneurs can follow to decide where to invest their time.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Hubs deliver prototypes; domestic processors of tens of qubits; Amaravati and other facilities start operations; more startups and services contracts." },
      { label: "2029 to 2031", value: "Mission targets of intermediate-scale machines and long-distance QKD tested; national post-quantum migration policies develop." },
      { label: "2032 to 2038", value: "India as a strong player in applications, security, and components; hardware scale depends on fabrication and funding." },
    ], signals: [
      "Delivery of domestic processors with published fidelity data.",
      "Satellite QKD missions and inter-city fiber networks.",
      "Follow-on funding after 2031.",
      "Indian regulators issuing post-quantum migration requirements.",
    ], risks: [
      "Fabrication and supply-chain limits could slow hardware.",
      "Talent migration could weaken capacity.",
      "Announced programs may be delayed.",
    ], faq: [
      { q: "What is the National Quantum Mission?", a: "A program approved in April 2023 with about 6,000 crore rupees to build quantum computers, communication networks, sensors, and materials in India by 2031." },
      { q: "Which Indian companies work on quantum?", a: "QpiAI, QNu Labs, BosonQ Psi, and others, plus IT services companies with quantum practices." },
      { q: "How can I start a quantum career in India?", a: "Learn the foundations, use cloud platforms and open tools, and look for research and fellowship opportunities in the mission hubs." },
    ], references: [
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
      "Department of Science and Technology, Government of India (2024). National Quantum Mission: announcement of thematic hubs.",
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
      "Hughes, C., et al. (2022). Assessing the needs of the quantum industry. IEEE Transactions on Education, 65, 592-601.",
      "McKinsey and Company (2025). Quantum Technology Monitor.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
      { label: "Industry: Quantum Computing for Telecommunications", href: "/industries/telecommunications" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], words: 1117 },
  { slug: "quantum-enterprise-readiness-future", title: "A Practical Roadmap for Companies: How to Prepare for Quantum", category: "industry-policy", horizon: "2026 to 2035", confidence: "High", summary: "Most organizations need to act on quantum security now and on quantum computing applications later. A staged plan, with clear owners, small experiments, and decision points tied to measurable signals, avoids both panic and neglect.", sections: [
      { heading: "Separate the two questions", paragraphs: [
          "Executives often hear two stories about quantum at once: the threat to cryptography and the promise of new computing capabilities. They have different timelines, owners, and urgency. The security question is a risk-management task with deadlines from regulators and a clear action list, and it applies to almost every organization that uses encryption. The computing question is a strategic option relevant to a smaller set of industries, such as pharmaceuticals, chemicals, materials, finance, logistics, and energy, and its timeline is longer and less certain.",
          "Treat them as separate programs with separate budgets. Mixing them leads to either overspending on quantum computing pilots while neglecting migration, or underinvesting in both because the promise looks distant.",
        ] },
      { heading: "The security program", paragraphs: [
          "The security program should start now. Appoint an owner, usually in the security or architecture function, and a sponsor in senior management. Build an inventory of cryptographic assets: protocols, libraries, certificates, hardware security modules, data stores, and third-party services. Classify data by how long it must remain confidential, and identify systems with long service lives. Set target dates aligned with regulators and customers. Require vendors to provide post-quantum roadmaps, and include quantum-readiness in procurement. Pilot hybrid key exchange and test post-quantum certificates in a lab. Plan for crypto-agility, so that algorithms can be swapped.",
          "Budget for the long tail. Legacy systems, embedded devices, and external dependencies will take years. Mosca's inequality is a useful framing for executives: if the time data must stay secret plus the time to migrate exceeds the time until a quantum computer can break current cryptography, action is overdue.",
        ] },
      { heading: "The computing program: stage it", paragraphs: [
          "For organizations in industries where quantum computing could matter, a staged approach works. In the learning stage, now through about 2028, a small team builds literacy, follows the field, runs tutorials on simulators and cloud hardware, and identifies two or three candidate problems with potentially high value, such as strongly correlated chemistry, certain simulation workloads, or optimization problems where classical methods struggle. The team estimates, using public resource estimates, what scale of machine each problem would need.",
          "In the readiness stage, from about 2028 to 2032, the organization prepares data and workflows so that high-accuracy quantum calculations could be used when available: curated datasets, hybrid classical-quantum pipelines, vendor relationships, and partnerships with universities or national laboratories. It watches for the signals that fault-tolerant machines with enough logical qubits are arriving. In the adoption stage, after about 2032 and only if the signals are met, it runs production pilots on fault-tolerant hardware and decides on scaling.",
        ] },
      { heading: "How to run pilots well", paragraphs: [
          "Good pilots have a defined business question, a baseline using the best classical method, a time limit, and a decision rule. Insist on comparing against a strong classical approach, including GPU-accelerated and machine-learning methods, and measure cost and quality, not only speed. Avoid problems chosen because they fit a quantum circuit. Treat results honestly: a negative result that shows the classical method is better is a useful outcome. Keep pilots small, because the value is learning and relationships, not production results in the near term.",
          "Vendor selection deserves care. Look for peer-reviewed results, independent benchmarks, a credible hardware roadmap, access to experts, and open software interfaces that reduce lock-in. Consider cloud access before purchasing a system, and consider the financial stability of the vendor.",
        ] },
      { heading: "People and governance", paragraphs: [
          "A small cross-functional group is usually enough: a technical lead with quantum knowledge, a domain expert in the target application, a security architect, and a business sponsor. Training should be proportional: broad awareness for managers and engineers, deeper skills for a few. Hiring should focus on strong engineers and scientists who can learn quantum, since the market for experienced quantum specialists is tight. External advisors and academic partnerships can fill gaps. Report progress to the board in terms of risk and options, with a short list of signals that would trigger a change in investment.",
        ] },
      { heading: "A one-page checklist", paragraphs: [
          "For quick use, the plan can be reduced to a checklist. For security: name an owner, build the cryptographic inventory within the next year, classify data by confidentiality lifetime, require vendor roadmaps, pilot hybrid key exchange, adopt crypto-agility, and schedule migration of the highest-risk systems first. For computing: name a small team, choose two or three candidate problems, estimate the machine size they need from public resource estimates, run one or two time-limited pilots with strong classical baselines, and set decision signals for escalating or stopping.",
          "For governance: report to senior management twice a year with a short list of signals, keep budgets small and tied to milestones, and review the plan whenever a major result appears, such as an independent demonstration of low logical error rates or a change in regulatory deadlines. This level of effort will not be expensive for most companies, and it positions them to act quickly if the field moves faster than expected.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "The organizations that will benefit most are those that did the unglamorous work early: security migration, data readiness, and a small team with good judgment. They will be able to move quickly when machines arrive and will have avoided the cost of crisis responses and hype-driven spending. The signals that should change the plan are logical qubit counts and error rates from independent sources, resource estimates for the organization's chosen problems falling within announced machine capabilities, and verified advantage on tasks like theirs. Until then, a modest and steady program is the right size for most.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Inventory and pilots for post-quantum migration; small quantum literacy teams; hybrid key exchange in production." },
      { label: "2029 to 2031", value: "Migration of high-risk systems; data and workflow readiness for chemistry, materials, and simulation users." },
      { label: "2032 to 2035", value: "Production pilots on fault-tolerant machines for organizations whose signals are met; broad completion of cryptographic migration." },
    ], signals: [
      "Independent logical qubit results with low error rates.",
      "Resource estimates for your target problems below announced machine sizes.",
      "Peer-reviewed advantage on tasks similar to yours.",
      "Regulatory deadlines for quantum-safe cryptography in your sector.",
    ], risks: [
      "Overspending on pilots without a decision rule.",
      "Underestimating the long tail of security migration.",
      "Vendor lock-in or vendor failure.",
    ], faq: [
      { q: "What should a company do first about quantum?", a: "Start the cryptographic inventory and plan the migration to post-quantum algorithms." },
      { q: "Do all companies need a quantum computing strategy?", a: "No. Only a subset of industries have likely applications, and for them a staged, low-cost approach is enough." },
      { q: "How big should a quantum team be?", a: "Small. A few people with clear goals and external partners are enough for most organizations." },
    ], references: [
      "Mosca, M. (2018). Cybersecurity in an era with quantum computers: Will we be ready? IEEE Security and Privacy, 16(5), 38-41.",
      "CISA, NSA, and NIST (2023). Quantum-readiness: Migration to post-quantum cryptography.",
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
      "Dalzell, A. M., et al. (2023). Quantum algorithms: A survey of applications and end-to-end complexities. arXiv:2310.03011.",
      "Alexeev, Y., et al. (2021). Quantum computer systems for scientific discovery. PRX Quantum, 2, 017001.",
      "Beverland, M. E., et al. (2022). Assessing requirements to scale to practical quantum advantage. arXiv:2211.07629.",
      "Boston Consulting Group (2024). Where will quantum computing create value, and when?",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Industry: Quantum Computing for Pharmaceuticals and Drug Discovery", href: "/industries/pharmaceuticals" },
      { label: "Industry: Quantum Computing for Finance", href: "/industries/finance" },
    ], words: 1058 },
  { slug: "quantum-skeptics-case-future", title: "The Skeptic's Case: What Critics Get Right and Wrong", category: "science-outlook", horizon: "2026 to 2035", confidence: "Medium", summary: "Skeptics of quantum computing make several distinct arguments, from physics to economics. The claim that large quantum computers are impossible in principle is losing ground to experiments, while doubts about timelines and usefulness remain reasonable.", sections: [
      { heading: "Four kinds of skepticism", paragraphs: [
          "People who doubt quantum computing do not all doubt the same thing. The first kind is physical: the argument that noise, especially correlated noise, will always overwhelm large quantum systems, so scalable fault tolerance cannot be achieved. The second is about usefulness: even if machines are built, they may be good at few problems that matter, and classical methods may keep up. The third is about timing: the machines may arrive, but decades later than promised. The fourth is about business: the sector may be overhyped, overfunded, and prone to a bust.",
          "These are separate, and the evidence bears on each differently. Conflating them leads to unproductive debates in which a critique of the hype is mistaken for a claim that the physics is wrong, or the reverse.",
        ] },
      { heading: "The physical argument and the evidence", paragraphs: [
          "The strongest physical skeptics have been Gil Kalai, a mathematician at the Hebrew University, who argued from 2011 that correlated noise in realistic systems would defeat the assumptions of the threshold theorem and cap quantum computation at small scales, and Mikhail Dyakonov, a physicist, who argued in articles and a 2020 book that the number of continuous parameters of a large quantum state makes control impossible in practice. Their positions deserve credit for forcing the field to examine assumptions about noise.",
          "Experiments have been unkind to the strong form of the argument. The threshold theorem assumes that errors are not too correlated, and the experiments test exactly that. Google's 2024 result showed logical error falling by a factor of about 2.14 per increase in code distance from 3 to 5 to 7, which is what the theory predicts when errors are sufficiently local and uncorrelated, and repetition-code experiments up to distance 29 showed error suppression until rare correlated bursts from cosmic rays appeared at a level near one in ten billion. Quantinuum and QuEra experiments on other platforms support the picture in smaller form. This does not prove that scaling will continue to the million-qubit level, but it moves the burden: a skeptic must now explain why the observed scaling would stop, and at what scale.",
        ] },
      { heading: "The usefulness argument", paragraphs: [
          "This argument is stronger. Only a few problems have known large quantum speedups: factoring and discrete logarithms, simulating quantum systems, and some structured problems. For many popular applications, speedups are quadratic or unproven, and Babbush and coauthors showed that quadratic speedups are hard to exploit on error-corrected machines. Dequantization results, starting with Tang's in 2018, showed that some claimed exponential speedups in machine learning vanish when classical algorithms are given comparable data access. Noisy-device results by Aharonov and coauthors and by Quek and coauthors show limits on what unprotected machines can do.",
          "A reasonable view is that quantum computers will be powerful tools for a narrow but important set of problems, such as cryptanalysis and the simulation of quantum matter, and perhaps for a few others, not general accelerators. Many proponents agree. Where skeptics and proponents differ is on how valuable the narrow set will be, and on whether verified advantage will appear soon.",
        ] },
      { heading: "The timing and business arguments", paragraphs: [
          "Timing skepticism is well founded in history. Mohseni and coauthors wrote in 2017 that quantum technologies could be commercialized in five years, and that did not happen; roadmaps have slipped; and the engineering of millions of components with low error is hard. At the same time, the field has met several intermediate targets, such as below-threshold error correction, ahead of or near predictions made a decade ago. A fair summary is that dates should be treated with wide error bars and that the direction of progress is real.",
          "Business skepticism points to valuations far above revenue, reliance on government funding, and the risk of a correction. We discussed this in the market topic of this series. It is a reason for caution by investors and customers, not a reason to doubt the science.",
        ] },
      { heading: "What skeptics have contributed", paragraphs: [
          "Skeptics and careful critics have improved the field. Aaronson's essay Read the Fine Print set standards for describing speedups, Tang's dequantization showed how to question input assumptions, classical simulation groups have forced advantage claims to be more rigorous, and critiques of noise models led to better experiments on correlated errors. A healthy field needs this pressure. The best proponents welcome it, and the worst hype is exposed by it.",
        ] },
      { heading: "Questions both sides should answer", paragraphs: [
          "A productive debate would ask each side for predictions that can fail. Proponents should say at what scale logical error would stop falling, and how they would respond if it did. Skeptics should say what scaling result would change their minds, for example logical error falling for three consecutive increases of code distance with correlated errors measured and found small. Both should agree on the data to be collected, such as burst rates and leakage statistics, and on a time frame, so that disputes end in evidence instead of repetition.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We take the in-principle impossibility argument to be increasingly unlikely, because experiments keep passing the tests it predicts will fail, but we do not rule out a surprise at larger scales. We think the usefulness and timing critiques are fair and that readers should expect delays and narrow initial applications. A balanced position is that quantum computing is a real long-term technology with uncertain timing and scope. Over the next five years, the experiments that most inform the debate are tests of whether logical error continues to fall at larger distances, whether logical gates have the same scaling, and whether decoders keep up.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Experiments extend below-threshold scaling to larger codes and to logical gates; skeptics focus on correlated noise and scale." },
      { label: "2029 to 2031", value: "Tens to hundreds of logical qubits tested; the in-principle debate fades if scaling holds; usefulness debate intensifies." },
      { label: "2032 to 2035", value: "Evidence on real applications decides between the narrow-tool and broad-accelerator views." },
    ], signals: [
      "Logical error decreasing at distances above 11 on hardware.",
      "Correlated error rates measured at the million-qubit scale.",
      "Independent confirmation of advantage on a useful task.",
      "Failures of scaling that cannot be fixed by engineering.",
    ], risks: [
      "Correlated noise could emerge at larger scales.",
      "Classical methods could stay ahead on most problems.",
      "Overhype could provoke a backlash that harms funding.",
    ], faq: [
      { q: "Are quantum computers impossible?", a: "Experiments show error correction working as theory predicts at small scales, so impossibility in principle looks unlikely, though scaling to large machines is unproven." },
      { q: "Is quantum computing overhyped?", a: "Parts of it are, especially claims about near-term business value and universal speedups." },
      { q: "Who are the main critics?", a: "Gil Kalai and Mikhail Dyakonov on physical grounds, and many scientists on hype and usefulness." },
    ], references: [
      "Kalai, G. (2011). How quantum computers fail: Quantum codes, correlations in physical systems, and noise accumulation. arXiv:1106.0485.",
      "Dyakonov, M. (2018). The case against quantum computing. IEEE Spectrum, 15 November 2018.",
      "Dyakonov, M. (2020). Will we ever have a quantum computer? Springer.",
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "McEwen, M., et al. (2022). Resolving catastrophic error bursts from cosmic rays in large arrays of superconducting qubits. Nature Physics, 18, 107-111.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
      "Quek, Y., et al. (2024). Exponentially tighter bounds on limitations of quantum error mitigation. Nature Physics, 20, 1648-1658.",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: A Quantum-Inspired Classical Algorithm for Recommendation Systems", href: "/research/tang-quantum-inspired-recommendation-2019" },
      { label: "Paper: Fault-Tolerant Quantum Computation with Constant Error Rate", href: "/research/aharonov-ben-or-fault-tolerant-constant-error-1997" },
      { label: "Paper: Exponentially Tighter Bounds on Limitations of Quantum Error Mitigation", href: "/research/quek-limits-of-error-mitigation-2024" },
      { label: "Term: Threshold Theorem", href: "/dictionary/threshold-theorem" },
      { label: "Term: Fault Tolerance", href: "/dictionary/fault-tolerance" },
    ], words: 1070 },
  { slug: "quantum-scenarios-2035-future", title: "Three Scenarios for 2030, 2035, and 2040", category: "science-outlook", horizon: "2030 to 2040", confidence: "Low", summary: "Instead of one forecast, we sketch three plausible futures: fast, base, and slow. Each has different milestones in logical qubits, advantage, and cryptographic risk, and the branch points can be observed in the next few years.", sections: [
      { heading: "Why scenarios", paragraphs: [
          "A single date for a technology milestone creates false precision. Scenario thinking lays out coherent alternative futures, assigns rough likelihoods, and identifies the observations that would tell us which one is unfolding. For quantum computing, three scenarios cover the plausible range. The probabilities below are our judgment, not measurements, and they are meant to be revised as evidence arrives.",
          "The variables that separate the scenarios are the scaling of logical error with code size, the speed and cost of decoding and magic states, the ability to link modules, and the economics of building and running large systems. A surprise in any of them can move the world from one scenario to another.",
        ] },
      { heading: "Scenario A: fast (about 20 percent)", paragraphs: [
          "In the fast scenario, roadmaps are met or nearly met. By 2029 to 2030, several platforms demonstrate error-corrected machines with 100 to 200 logical qubits and logical error rates near one in a million, and logical gates and magic states work at scale. By 2030, verified scientific advantage in simulation is accepted, and early industrial use in chemistry appears. By 2033 to 2035, machines with about 1,000 logical qubits run chemistry calculations such as FeMoco, and RSA-2048 and elliptic-curve cryptography become breakable around 2034 to 2036, which requires post-quantum migration to be complete.",
          "This scenario requires several things to go right at once: no new error floors, fast decoders, successful modular links, and sustained funding. It is plausible mainly because estimates for useful machines keep falling and because several well-resourced teams are on similar paths.",
        ] },
      { heading: "Scenario B: base (about 50 percent)", paragraphs: [
          "In the base scenario, progress is real but slower than roadmaps. Logical qubit counts reach the tens by about 2028 and 100 to 200 around 2031 to 2033, with logical error near 10 to the minus 4 to 10 to the minus 6. Scientific advantage in simulation is established around 2028 to 2031. Commercial advantage in chemistry and materials appears in the mid-2030s, in narrow cases. Machines with about a thousand logical qubits arrive around 2035 to 2038. Cryptographically relevant machines are plausible in the late 2030s, with large uncertainty, and migration deadlines of 2030 to 2035 are met mostly on time.",
          "This scenario assumes that engineering difficulties, such as wiring, cryogenics, decoding, and manufacturing yield, add a few years to each stage but do not block it. It is our central expectation.",
        ] },
      { heading: "Scenario C: slow (about 30 percent)", paragraphs: [
          "In the slow scenario, something fundamental slows progress. A new source of correlated errors at larger scales, a materials or yield limit, a decoder bottleneck, or a funding collapse after disappointing results could extend timelines by a decade or more. Logical qubit counts stagnate in the tens through the early 2030s, advantage remains limited to a few scientific tasks, commercial applications do not appear before 2040, and cryptographic threats move beyond 2040. Quantum sensing and communication continue to grow and provide most commercial revenue, and the field consolidates around a few companies and government programs.",
          "This scenario does not mean failure. Even in it, post-quantum cryptography migration is worthwhile, since the risk remains, and quantum sensing and simulation deliver value.",
        ] },
      { heading: "Branch points to watch", paragraphs: [
          "We would move probability toward the fast scenario if logical error continues to fall at distances of 11 and above with logical gates and without post-selection, if fast decoders and cheap magic states are demonstrated at scale, if modular links work with high fidelity, and if resource estimates for key problems keep falling. We would move toward the slow scenario if error floors appear at larger distances, if leakage or correlated bursts resist mitigation, if the cost per logical qubit stays high, or if funding falls sharply.",
          "Because these observations will arrive over the next three to five years, the scenarios will become clearer by around 2029. Decisions with long lead times, such as cryptographic migration and workforce development, should not wait for that clarity, since they pay off in all three scenarios.",
        ] },
      { heading: "How to use scenarios in decisions", paragraphs: [
          "Scenarios are most useful for deciding under uncertainty. An action is robust if it pays off in all three scenarios, such as migrating cryptography, building a small team of skilled people, and adopting open software standards. An action is a bet if it pays off in one scenario only, such as committing to a specific vendor's roadmap date or building production systems that assume fault-tolerant machines in 2030. Robust actions should be done now, and bets should be sized so that a loss does not threaten the organization.",
          "It also helps to define triggers. For example, an organization might decide to raise its quantum budget if two independent groups show logical error falling at code distance 11 or above on different platforms, or to lower exposure if error floors prevent scaling. Triggers convert abstract uncertainty into decisions that can be reviewed once or twice a year, and they prevent both overreaction to single announcements and neglect of real changes.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "The scenarios share a common feature: in all of them, the next five years are about error correction, not about applications. The practical advice is to prepare for the base case, hedge for the fast case by moving cryptographic migration forward, and not to bet an organization's strategy on any particular year. If you must pick one number to remember, it is that the most important changes in cryptography and chemistry are more likely to occur in the 2030s than in the 2020s, with the spread of dates from about 2030 to beyond 2040.",
        ] },
    ], forecast: [
      { label: "By 2030", value: "Fast: 100 to 200 logical qubits. Base: tens of logical qubits, simulation advantage. Slow: small logical systems, contested advantage." },
      { label: "By 2035", value: "Fast: chemistry and cryptanalysis within reach. Base: first narrow commercial advantage. Slow: still tens of logical qubits." },
      { label: "By 2040", value: "Fast: broad use in science and industry. Base: thousand-logical-qubit machines in use. Slow: limited to niches, with key milestones still ahead." },
    ], signals: [
      "Logical error scaling at distances above 11.",
      "Cost per logical qubit and per logical operation.",
      "Decoder latency and magic state costs at scale.",
      "Funding and policy trends.",
    ], risks: [
      "Probabilities are subjective and may be miscalibrated.",
      "Unknown unknowns could create a scenario we have not considered.",
      "Scenarios may differ by platform.",
    ], faq: [
      { q: "Which scenario is most likely?", a: "We put about 50 percent on the base case, 20 percent on fast, and 30 percent on slow. These are judgments and will change." },
      { q: "What should I do in all scenarios?", a: "Migrate cryptography, build skills, and track the leading indicators." },
      { q: "When will we know?", a: "Around 2029, when logical qubit scaling at larger sizes will be clear." },
    ], references: [
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
      "Quantinuum (2025). Quantinuum launches Helios and publishes its roadmap to a fault-tolerant machine. Press release, November 2025.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Mosca, M., & Piani, M. Quantum threat timeline report. Global Risk Institute (annual).",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Dalzell, A. M., et al. (2023). Quantum algorithms: A survey of applications and end-to-end complexities. arXiv:2310.03011.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Term: Fault Tolerance", href: "/dictionary/fault-tolerance" },
      { label: "Term: NISQ", href: "/dictionary/nisq" },
      { label: "Term: Logical Qubit", href: "/dictionary/logical-qubit" },
    ], words: 1059 },
  { slug: "quantum-failure-modes-future", title: "What Could Go Wrong: Failure Modes of Large Quantum Computers", category: "science-outlook", horizon: "2026 to 2035", confidence: "Medium", summary: "Scaling quantum computers can fail in specific, identifiable ways: correlated error bursts, leakage, decoder backlogs, cryogenic and wiring limits, yield, and economic shocks. Knowing them helps interpret roadmaps and spot warning signs early.", sections: [
      { heading: "Why catalog failure modes", paragraphs: [
          "Every engineering field has a list of ways large systems fail, and quantum computing has its own. Cataloging them is not pessimism but a way to understand which results matter. Roadmaps tend to emphasize successes; the failure modes tell you what could slow them. Most have identified mitigations, and the question is whether the mitigations will work at scale.",
        ] },
      { heading: "Correlated errors and rare events", paragraphs: [
          "The threshold theorem assumes that errors are local or weakly correlated. Real devices have events that break this assumption. McEwen and coauthors showed in 2021 that cosmic-ray impacts on a superconducting chip create bursts in which many qubits fail at once, and Google's long repetition-code experiments found a floor on logical error near one in ten billion cycles from such events. Other sources include stray radiation, thermal fluctuations of defects, and fluctuations of control electronics that affect many qubits together.",
          "Mitigations include shielding, placing devices underground, engineering the substrate to absorb phonons, detecting bursts and excluding affected regions, and decoders that account for correlations. A larger machine has more area exposed to such events, so the rate of bursts per computation rises with size, and an algorithm that runs for days needs the burst rate to be low enough that the machine rarely fails mid-run.",
        ] },
      { heading: "Leakage, defects, and drift", paragraphs: [
          "Qubits can leave the computational states, a problem called leakage, and leaked qubits cause correlated errors for many cycles until detected and reset. Leakage reduction circuits and erasure-based designs reduce the problem, but they add complexity. Material defects, such as two-level systems in superconducting circuits, change over time and can move a qubit out of its working range, so calibrations drift. Large machines need automated calibration that runs continuously without disturbing computation, and a failure of that infrastructure would degrade performance across the chip.",
          "Yield is a related concern. If a fabrication process yields working qubits with some probability, large chips will contain bad qubits and bad couplers. Architectures must tolerate defects, by routing around them or by using modular designs with tested components.",
        ] },
      { heading: "Decoding and control bottlenecks", paragraphs: [
          "A decoder that cannot keep up creates a backlog, as Terhal pointed out in 2015, and the delay grows exponentially in the number of operations that depend on decoded results. Real-time decoders have been shown for moderate codes, but scaling to hundreds of logical qubits with qLDPC codes and fast cycles is not yet demonstrated. Classical control electronics must also scale: millions of channels of precise timing and signal generation are needed, and their power and noise can limit performance. A failure here would show up as a logical clock rate far below the promised value.",
        ] },
      { heading: "Cryogenic, supply, and manufacturing limits", paragraphs: [
          "Superconducting systems depend on dilution refrigerators with limited cooling power, and wiring heat loads scale with qubit number. If cryo-CMOS, optical links, and multiplexing do not deliver, machines will be limited to hundreds of thousands of qubits at most, or will require many refrigerators linked by lossy interconnects. Helium-3 supply, specialized lasers, enriched isotopes, and foundry capacity are further constraints, discussed in the supply chain topic of this series. For photonic machines, loss is the equivalent: if component losses stay above the thresholds, large machines cannot work.",
        ] },
      { heading: "Algorithmic, economic, and social failure modes", paragraphs: [
          "Not all failures are technical. If algorithmic overheads stay high, or if classical methods keep up, the machines may be too slow or too expensive to be worth using for most problems, even if they work. If funding falls after disappointing results, as happened in earlier technology cycles, progress could slow for years. Security missteps, such as a premature claim of cryptographic breakthrough or a flawed post-quantum standard, could damage trust. Talent shortages and fragmented standards can slow integration.",
          "A different failure is complacency: organizations that assume the threat or opportunity is far away and do not prepare, then face a rush when it arrives.",
        ] },
      { heading: "Early warning signs", paragraphs: [
          "Several indicators could reveal trouble before a roadmap date is missed. If published logical error rates stop improving when code distance rises, or improve less than the theory predicts, correlated errors may be the cause. If vendors report physical qubit counts but stop reporting error rates, or report logical qubits with small codes and post-selection while avoiding strict definitions, the underlying scaling may be weak. If decoder latency is not mentioned in announcements of logical clock rates, it may be a bottleneck.",
          "Other warning signs include delays in delivery of announced chips, repeated changes of roadmap emphasis, a shift from qubit count to other metrics without data, and departures of key technical staff. None of these is proof of failure, and companies sometimes change plans for good reasons, but a pattern of several signs together deserves attention. Conversely, regular publication of detailed data, including negative results, is a good sign of an engineering culture that finds and fixes problems.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We think the most likely sources of delay, in order, are decoding and control scaling, correlated errors and leakage at large sizes, wiring and cryogenic limits, and manufacturing yield. Each has plausible mitigations in progress, and most are engineering problems with known directions. The least predictable are rare events that appear only at scale, which is why large demonstrations, rather than small ones, are the most valuable evidence. We rate our confidence as medium, since the list is based on current knowledge, and unknown unknowns are likely.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Tests of burst mitigation, leakage removal, and real-time decoders on hundreds of qubits." },
      { label: "2029 to 2031", value: "Evidence on whether wiring, cryogenics, and decoders scale to hundreds of logical qubits." },
      { label: "2032 to 2035", value: "Large-scale effects, such as rare events and yield, determine practical limits." },
    ], signals: [
      "Measured rate of correlated error bursts per qubit-hour as chips grow.",
      "Decoder latency at the largest codes.",
      "Cost per qubit and power per logical qubit.",
      "Yield data from fabrication lines.",
    ], risks: [
      "New failure modes may appear only at larger scale.",
      "Mitigations may be costly.",
      "Several failure modes could occur together.",
    ], faq: [
      { q: "What is a correlated error burst?", a: "An event, such as a cosmic-ray impact, that causes many qubits to fail at the same time." },
      { q: "What is leakage?", a: "A qubit leaving its two computational states and ending up in another energy level." },
      { q: "Why does decoder speed matter?", a: "Because syndrome data arrive every microsecond, and a slow decoder causes a backlog that slows or stops the computation." },
    ], references: [
      "McEwen, M., et al. (2022). Resolving catastrophic error bursts from cosmic rays in large arrays of superconducting qubits. Nature Physics, 18, 107-111.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Terhal, B. M. (2015). Quantum error correction for quantum memories. Reviews of Modern Physics, 87, 307-346.",
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "Bartolucci, S., et al. (2023). Fusion-based quantum computation. Nature Communications, 14, 912.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Shea, D. A., & Morgan, D. (2010). The helium-3 shortage: Supply, demand, and options for Congress. Congressional Research Service Report R41419.",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: Learning High-Accuracy Error Decoding for Quantum Processors", href: "/research/bausch-alphaqubit-decoder-2024" },
      { label: "Term: Leakage Error", href: "/dictionary/leakage-error" },
      { label: "Term: Crosstalk", href: "/dictionary/crosstalk" },
      { label: "Term: Syndrome Measurement", href: "/dictionary/syndrome-measurement" },
    ], words: 1021 },
  { slug: "quantum-energy-sustainability-future", title: "The Energy and Environmental Footprint of Quantum Computing", category: "science-outlook", horizon: "2026 to 2040", confidence: "Low", summary: "Quantum computers use modest power today, mostly for cooling and control, but scaling to millions of qubits changes the picture. Whether quantum computing is green depends on whether it solves problems with far less energy than classical machines, which is plausible for some tasks and unproven for most.", sections: [
      { heading: "Where the energy goes today", paragraphs: [
          "A superconducting quantum computer draws power mainly for its cryogenic system and its classical control electronics. A dilution refrigerator with its pulse-tube cooler, compressors, and pumps typically uses on the order of ten to a few tens of kilowatts, and control racks and room-temperature electronics add to that, so a current system uses power comparable to a few households up to a small commercial building. Trapped-ion and neutral-atom systems use lasers, vacuum pumps, and electronics, with power in a similar range of tens of kilowatts depending on the design, and they avoid dilution refrigerators. Photonic systems use lasers and cryogenic detectors.",
          "These numbers are small compared with supercomputers. The Frontier exascale system at Oak Ridge uses about 20 megawatts, and AI data centers draw tens to hundreds of megawatts or more. Today's quantum computers are therefore minor consumers in absolute terms, though their computational output is also small.",
        ] },
      { heading: "The energy problem at scale", paragraphs: [
          "Scaling changes the arithmetic. A fault-tolerant machine with a million physical qubits needs control electronics for millions of channels, decoders processing terabits per second, and cooling for a much larger heat load. Fellous-Asiani and coauthors analyzed in 2023 the resource efficiency of full-stack quantum computers and found that for a given computation, the energy depends strongly on how the physical error rate trades against the number of qubits and the cooling and control overheads, and that optimized designs can reduce consumption significantly. Auffèves argued in 2022 that the field needs a quantum energy initiative to include energy as a design metric alongside speed and accuracy.",
          "A rough view is that large machines could draw megawatts, similar to a supercomputer. If so, the energy cost per computation depends on how fast the machine runs and how much work it does.",
        ] },
      { heading: "Could quantum computing save energy?", paragraphs: [
          "The hope is that quantum computers will solve some problems with far less energy than classical ones. Jaschke and Montangero estimated in 2023 that for certain tasks, quantum computers could achieve an energy-efficiency advantage at large problem sizes, since the energy of the quantum computation grows more slowly with problem size than that of classical supercomputing for those tasks. If a calculation that would require a classical supercomputer running for months can be done by a quantum computer in hours, the energy saving could be large.",
          "This is conditional on advantage existing for the task, which is not yet established for useful problems. For tasks without advantage, a quantum computer uses more energy than a classical one for the same result. The quantum cost is also dominated by overheads, such as error correction and cooling, that can erase the benefit for modest speedups. In that respect, energy follows the same logic as time: only large advantages pay.",
        ] },
      { heading: "Materials, manufacturing, and helium", paragraphs: [
          "The environmental footprint includes more than electricity. Manufacturing cryogenic systems, superconducting chips, and lasers uses energy and materials, and some inputs are scarce or have environmental costs: helium-3 and helium-4, high-purity metals such as niobium, rare isotopes, and electronic-grade silicon. Helium is a nonrenewable resource that is lost to the atmosphere when released, and quantum computing is a small but growing consumer. Systems that recycle helium and designs that avoid dilution refrigerators reduce this.",
          "A full life-cycle accounting is rare. As the industry grows, customers and regulators may ask for it, in the way they do for data centers.",
        ] },
      { heading: "Comparison with AI", paragraphs: [
          "A fashionable claim is that quantum computers will relieve the energy crisis in AI. The evidence does not support it. Training and running large neural networks involves massive matrix operations on classical data, for which known quantum algorithms offer no advantage, and loading large data sets into a quantum computer is itself costly. Quantum computers may help design better chips or materials for energy use in the long term, but that is a separate and distant benefit. For now, the largest energy question in computing is about AI data centers, not quantum computers.",
        ] },
      { heading: "Metrics that would make energy claims meaningful", paragraphs: [
          "A useful metric would be energy per logical operation, measured at the wall socket, including cooling, control electronics, and decoding, and reported together with the logical error rate and the code used. A second would be energy per solved instance of a benchmark problem, compared with the energy of the best classical solution on the same problem. These measurements are rarely published today, partly because systems are experimental and partly because the numbers may be unflattering.",
          "Standardizing such metrics would let buyers compare platforms and would reveal whether claims of efficiency hold up. It would also encourage design choices that save energy, such as cryo-CMOS that reduces cable heat, efficient pulse tubes, higher operating temperatures for spin qubits, and architectures that need fewer physical qubits per logical qubit. Several research groups have called for energy to be treated as a first-class design metric, and we expect this to become part of benchmarking in the early 2030s.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect the absolute energy use of quantum computing to stay small relative to classical computing through the 2020s, and to grow with fault-tolerant machines in the 2030s to the scale of large supercomputers, where energy efficiency per logical operation becomes a design target. Whether quantum computing turns out to save energy depends on advantage, which we discussed elsewhere. Vendors should publish energy per logical operation as a standard metric, and buyers should ask for it. We give low confidence to the claim of a net environmental benefit before 2040.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Vendors begin to report power and energy per task; cryo-CMOS and efficient cooling reduce overhead." },
      { label: "2029 to 2032", value: "Energy per logical operation becomes a design metric; first studies of energy advantage on real workloads." },
      { label: "2033 to 2040", value: "Fault-tolerant machines consume megawatts; net benefit depends on advantage for high-value tasks." },
    ], signals: [
      "Published energy per logical operation or per task.",
      "Cooling power and wiring heat per qubit in new designs.",
      "Helium use and recycling reports.",
      "Studies comparing energy of quantum and classical solutions for the same task.",
    ], risks: [
      "Cooling and control overheads could grow faster than expected.",
      "Lack of advantage would make quantum less efficient than classical.",
      "Resource constraints such as helium could add costs.",
    ], faq: [
      { q: "How much power does a quantum computer use?", a: "Tens of kilowatts for current systems, mostly for cooling and control, far less than supercomputers." },
      { q: "Is quantum computing green?", a: "It could be for tasks with large advantage, but that is not yet shown." },
      { q: "Will quantum computers fix AI's energy use?", a: "No evidence suggests so. Quantum algorithms do not speed up standard deep learning." },
    ], references: [
      "Jaschke, D., & Montangero, S. (2023). Is quantum computing green? An estimate for an energy-efficiency quantum advantage. Quantum Science and Technology, 8, 025001.",
      "Auffèves, A. (2022). Quantum technologies need a quantum energy initiative. PRX Quantum, 3, 020101.",
      "Fellous-Asiani, M., et al. (2023). Optimizing resource efficiencies for scalable full-stack quantum computers. PRX Quantum, 4, 040319.",
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "Shea, D. A., & Morgan, D. (2010). The helium-3 shortage: Supply, demand, and options for Congress. Congressional Research Service Report R41419.",
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
    ], links: [
      { label: "Term: Dilution Refrigerator", href: "/dictionary/dilution-refrigerator" },
      { label: "Term: Cryogenic CMOS Control", href: "/dictionary/cryo-cmos" },
      { label: "Industry: Quantum Computing, AI, and Data Centers", href: "/industries/artificial-intelligence-data-centers" },
      { label: "Industry: Quantum Computing for Energy and Utilities", href: "/industries/energy" },
    ], words: 1057 },
  { slug: "quantum-ethics-society-future", title: "Ethics, Equity, and Society in the Quantum Age", category: "industry-policy", horizon: "2026 to 2040", confidence: "Medium", summary: "Quantum technology raises questions about security, privacy, military use, access, and public trust. Responsible innovation frameworks are emerging, and the earliest ethical issues come from cryptography and the concentration of capability.", sections: [
      { heading: "Why ethics matters for quantum", paragraphs: [
          "Every general-purpose technology brings benefits and risks that are unevenly shared. Quantum technology differs from many predecessors in two ways. First, its most certain early consequence is a security risk: the potential to break cryptography that protects everyone's data. Second, it is expensive and concentrated in a few countries and companies, which raises questions of access and power. Researchers have begun to develop responsible innovation approaches for the field, including the Ten Principles for Responsible Quantum Innovation published by Kop and coauthors in 2024 and the Quantum Computing Governance Principles of the World Economic Forum from 2022.",
        ] },
      { heading: "Security, privacy, and the harvest problem", paragraphs: [
          "The most immediate ethical issue is the exposure of data to future decryption. Information collected today by governments, companies, or criminals can be stored and decrypted when quantum computers arrive. For individuals, this affects medical records, communications, and personal histories. For societies, it affects the confidentiality of whistleblowers, journalists, dissidents, and diplomatic exchanges. The obligation to protect long-lived sensitive data, by using post-quantum or hybrid encryption, falls mainly on organizations that hold it, and regulators are beginning to treat it as part of data protection duties.",
          "There is also an asymmetry. A state with an early quantum capability for cryptanalysis could read others' traffic without their knowing, which creates incentives for secrecy and for arms-race dynamics. Transparent migration timelines and international norms on responsible disclosure could reduce the risk, but there are no binding rules.",
        ] },
      { heading: "Access and equity", paragraphs: [
          "Quantum computing hardware is concentrated in the United States, China, and a few other countries, and in a handful of companies. Cloud access broadens participation, and open-source software and free tiers help students and researchers worldwide, but the infrastructure, skills, and capital are unevenly distributed. If quantum advantage in drug discovery, materials, and finance materializes, countries and firms without access could fall behind, extending existing digital divides. Programs such as India's National Quantum Mission and regional initiatives in Africa, Latin America, and Southeast Asia aim to build local capacity, and educational outreach by vendors and universities helps.",
          "Within countries, concentration of expertise raises similar concerns: the benefits of quantum-enabled products may accrue to large firms, while workers and smaller companies lack the skills to take part. Education, open tools, and public research funding that is not tied to a single vendor can help spread benefits.",
        ] },
      { heading: "Military and dual-use issues", paragraphs: [
          "Quantum technologies have dual uses. Quantum sensing for navigation and detection, secure communication, and cryptanalysis all have military value. Export controls and national security policies shape the field, as discussed elsewhere in this series. Ethical questions include whether researchers have responsibilities regarding potential military applications, how to maintain scientific openness while limiting proliferation of sensitive capabilities, and how to avoid a destabilizing race. Some researchers have called for international dialogue on norms for quantum technologies analogous to those for other emerging technologies, but progress is slow.",
        ] },
      { heading: "Public understanding and trust", paragraphs: [
          "Misleading claims harm public trust. Hype about quantum computers curing diseases or solving climate change sets expectations that cannot be met, and pseudo-scientific uses of the word quantum in products and wellness claims confuse the public. Honest communication by scientists, companies, and journalists, including clear statements of uncertainty, is an ethical duty in a field where the public cannot easily judge claims. Education about what quantum computers can and cannot do helps people make sensible choices, as consumers, workers, and citizens.",
        ] },
      { heading: "Practical steps for organizations", paragraphs: [
          "Organizations that develop or use quantum technology can adopt practical measures. They can inventory long-lived sensitive data and protect it with quantum-safe encryption now, publish honest descriptions of what their systems can and cannot do, and avoid marketing that implies capabilities they do not have. They can include diverse voices in design and governance, support education and access programs, and consider how their products affect workers and communities. Companies working with defense or intelligence customers can establish review processes for sensitive uses.",
          "Researchers can follow responsible research practices: clear communication of uncertainty, careful handling of dual-use findings, and openness consistent with legal requirements. Funders can require data management and ethics statements in quantum projects and support interdisciplinary work with social scientists and ethicists, who can help anticipate effects that technical teams might miss.",
          "Citizens and consumers can contribute by asking organizations about their plans for quantum-safe security, by being skeptical of exaggerated claims, and by supporting public education. The aim is not to slow progress but to make sure that its benefits and risks are shared more fairly than in earlier technology waves.",
        ] },
      { heading: "Questions for the next decade", paragraphs: [
          "Several questions deserve public discussion before they become urgent. Who decides how quantum-enabled capabilities, such as large-scale cryptanalysis, are used, and under what oversight? How should the benefits of quantum-designed drugs and materials be shared, especially with countries that did not take part in the research? What obligations do companies have to disclose weaknesses in cryptographic products that they know are vulnerable? Early, open debate on such questions is cheaper and better than reacting after harm has occurred.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect ethical and governance questions to grow in importance as the technology matures, starting with cryptography and security, and extending to access, competition, and international norms. A practical approach for organizations is to adopt responsible innovation principles, such as transparency about capabilities and limits, attention to security and privacy by design, consideration of the effects on workers and communities, and engagement with stakeholders. For policymakers, priorities include timely migration to quantum-safe cryptography, support for broad education and open tools, and international cooperation to avoid avoidable arms-race dynamics.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Privacy and data-protection regulators address long-lived data and quantum-safe encryption; responsible innovation frameworks adopted by some companies." },
      { label: "2029 to 2032", value: "International discussions on quantum norms and export policy; equity programs expand through national missions and global partnerships." },
      { label: "2033 to 2040", value: "If advantage appears, debates on access, competition, and concentration of capability intensify." },
    ], signals: [
      "Privacy regulators referencing harvest-now-decrypt-later risks.",
      "International agreements or norms on quantum technology.",
      "Funding programs for access and education in lower-income regions.",
      "Adoption of responsible innovation principles by major vendors.",
    ], risks: [
      "Unequal access could widen divides.",
      "Secrecy and arms-race dynamics could grow.",
      "Hype could damage public trust.",
    ], faq: [
      { q: "Is quantum computing a threat to privacy?", a: "Indirectly, because recorded encrypted data could be decrypted later unless it is protected with quantum-safe methods." },
      { q: "Who will benefit from quantum technology?", a: "Early benefits go to organizations with access and expertise, so education and open tools matter for wider participation." },
      { q: "Are there ethical guidelines for quantum technology?", a: "Yes, such as the Ten Principles for Responsible Quantum Innovation and the World Economic Forum's governance principles." },
    ], references: [
      "Kop, M., Aboy, M., De Jong, E., et al. (2024). Ten principles for responsible quantum innovation. Quantum Science and Technology, 9, 035013.",
      "World Economic Forum (2022). Quantum Computing Governance Principles.",
      "Mosca, M. (2018). Cybersecurity in an era with quantum computers: Will we be ready? IEEE Security and Privacy, 16(5), 38-41.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
      "Fox, M. F. J., Zwickl, B. M., & Lewandowski, H. J. (2020). Preparing for the quantum revolution: What is the role of higher education? Physical Review Physics Education Research, 16, 020131.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
      { label: "Industry: Quantum Computing for Cybersecurity", href: "/industries/cybersecurity" },
    ], words: 1064 },
  { slug: "quantum-ip-open-source-future", title: "Patents, Open Source, and the Quantum Software Commons", category: "industry-policy", horizon: "2026 to 2035", confidence: "Medium", summary: "Quantum technology combines a patent race in hardware with a strong open-source culture in software. How these coexist will shape competition, standards, and who can participate.", sections: [
      { heading: "Two cultures", paragraphs: [
          "Quantum computing grew from academic physics and computer science, where publishing and sharing are the norm, and has attracted large companies and venture-funded startups, for whom intellectual property is a strategic asset. The result is a mix: open-source software frameworks and public preprints sit alongside patent portfolios on hardware, control methods, and error correction, and trade secrets around fabrication processes and calibration techniques.",
        ] },
      { heading: "The open-source ecosystem", paragraphs: [
          "Open-source software is central. IBM's Qiskit, released in 2017 and described by Javadi-Abhari and coauthors in 2024, is widely used. Google's Cirq, Xanadu's PennyLane described by Bergholm and coauthors in 2018, NVIDIA's CUDA-Q, Amazon's Braket SDK, Quantinuum's tket, and many others are available under permissive licenses such as Apache 2.0. Simulators and tools such as Stim for stabilizer circuits, described by Gidney in 2021, and decoders such as PyMatching are open, and the community shares code through repositories and foundations, including the Linux Foundation's QIR Alliance and the Unitary Fund, which supports open-source projects.",
          "The openness has accelerated learning and made research reproducible. It has also given companies a way to attract developers to their platforms, since users of a framework tend to use that vendor's hardware. This is a business strategy as well as an altruistic act, and it creates a mild form of lock-in, which standards such as OpenQASM 3 and the common intermediate representations aim to loosen.",
        ] },
      { heading: "Patents and the hardware race", paragraphs: [
          "Companies and universities file patents on qubit designs, control schemes, error-correcting codes and decoders, cryogenic and packaging technology, and applications. Patent filing has risen sharply in the past decade, and landscapes published by patent offices and consultancies show the United States and China as leading in different segments: the United States in computing hardware and software, and China strongly in quantum communication, with Japan, Canada, and Europe also active. Counts depend on how fields are defined, so numbers vary by source.",
          "Patents may affect the field in several ways. They can protect investment and give companies incentives to develop hardware. They can also create thickets, in which many overlapping patents complicate entry, and the risk of litigation. So far, quantum patent litigation has been limited, and cross-licensing and defensive patenting are common. Some universities and companies have made patents available under open terms or pledged not to assert them against open-source users, and the Open Quantum Initiative-style efforts have been discussed.",
        ] },
      { heading: "Standards, openness, and competition", paragraphs: [
          "Standards touch intellectual property: if a standard depends on patented technology, the holders may need to license it on fair terms. Cryptographic standards are an example. NIST's post-quantum selection process considered patent issues, and one of the algorithms, the code-based HQC, and others, were examined for patent encumbrances before selection. Open standards for circuit languages and benchmarks help competition by letting users move between vendors, and openness in error-correction research benefits the field, since improvements to codes and decoders can be used by all hardware teams.",
        ] },
      { heading: "Challenges", paragraphs: [
          "Several tensions deserve attention. Researchers who publish openly may find their ideas patented by others, and companies may keep key advances secret, such as calibration methods, which slows scientific progress. Government funding creates expectations that results will be shared, while national security considerations limit what can be published. Open-source projects depend on contributions from a small number of companies, whose priorities can change, and some tools have been deprecated, such as the removal of pulse-level interfaces from a major framework, which affects users who depended on them.",
          "For startups, the choice between patenting and open publication is strategic: patents help in fundraising and acquisition, while open contributions build community and credibility.",
        ] },
      { heading: "Advice for developers and founders", paragraphs: [
          "For developers, the practical advice is to build on open frameworks that support more than one backend, to read licenses before including code in products, and to contribute improvements back when appropriate, since contributions build reputation and reduce maintenance. For researchers, depositing code and data in public repositories alongside papers improves reproducibility and citation. Using standard interchange formats, such as OpenQASM and common intermediate representations, protects against vendor changes.",
          "For founders, intellectual property strategy should match the business. A hardware company with a distinctive device design will typically file patents on core inventions, while keeping process know-how as a trade secret and contributing to open standards where interoperability helps the market. A software company may rely on open source for adoption and sell services, hosted products, or proprietary extensions. Investors will ask about freedom to operate and the origin of the technology, so clean records of university and employer rights are important. Seeking advice early from a patent attorney experienced in quantum technology saves money later.",
        ] },
      { heading: "A note on university research", paragraphs: [
          "Universities play a special role, since much foundational work in quantum technology comes from academic laboratories, and the rules for patenting and licensing university inventions influence the field. Policies that make licensing quick and flexible, and that allow open release of research tools, help startups and collaborations. Policies that are slow or restrictive can push researchers to publish without protection or to move work to other settings. Clear, predictable rules for technology transfer are a quiet but important part of the ecosystem.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect the combination of open-source software and proprietary hardware to continue, with growing standardization at the software layer and more patent activity in hardware and error correction. A major patent dispute is possible as the market grows, but cross-licensing and the cooperative culture may limit it. Policymakers can support the commons by funding open tools and benchmarks, encouraging interoperable standards, and ensuring that publicly funded results are available. Developers should prefer open frameworks with active communities and check licenses when building products.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Continued growth in patent filings; software standards converge; more companies release tools under open licenses." },
      { label: "2029 to 2032", value: "Larger licensing deals and defensive pools in hardware; open decoders and codes become shared infrastructure." },
      { label: "2033 to 2035", value: "Mature IP landscape with cross-licensing; occasional litigation as products reach market." },
    ], signals: [
      "Patent litigation involving quantum hardware or software.",
      "New open-source standards adopted by several vendors.",
      "Licensing pledges or patent pools.",
      "Deprecations or relicensing of major open-source frameworks.",
    ], risks: [
      "Patent thickets could raise barriers to entry.",
      "Vendor-controlled open source could change direction.",
      "Secrecy could slow scientific progress.",
    ], faq: [
      { q: "Is quantum software open source?", a: "Much of it is. Qiskit, Cirq, PennyLane, and many other tools are open under permissive licenses." },
      { q: "Can I patent a quantum algorithm?", a: "Rules vary by country and are complicated. Consult a patent attorney, since abstract algorithms face limits in many jurisdictions." },
      { q: "Does open source lock me into a vendor?", a: "It can influence which hardware you use, so prefer standards such as OpenQASM and portable frameworks." },
    ], references: [
      "Javadi-Abhari, A., et al. (2024). Quantum computing with Qiskit. arXiv:2405.08810.",
      "Bergholm, V., et al. (2018). PennyLane: Automatic differentiation of hybrid quantum-classical computations. arXiv:1811.04968.",
      "Gidney, C. (2021). Stim: a fast stabilizer circuit simulator. Quantum, 5, 497.",
      "Cross, A., et al. (2022). OpenQASM 3: A broader and deeper quantum assembly language. ACM Transactions on Quantum Computing, 3, 12.",
      "Higgott, O., & Gidney, C. (2025). Sparse blossom: correcting a million errors per core second with minimum-weight matching. Quantum.",
    ], links: [
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Term: Transpilation", href: "/dictionary/transpilation" },
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Company: Xanadu Quantum Technologies", href: "/companies/xanadu" },
      { label: "Industry: Quantum Computing and the Public Sector", href: "/industries/government-public-sector" },
    ], words: 1076 },
  { slug: "quantum-consumer-future", title: "Quantum in Everyday Life: What Ordinary People Will Actually Use", category: "applications", horizon: "2026 to 2035", confidence: "High", summary: "No one will own a home quantum computer. Consumers will meet quantum technology through quantum-safe messaging, better clocks and sensors, and cloud services, and should be wary of products that use the word quantum as marketing.", sections: [
      { heading: "What will not happen", paragraphs: [
          "Quantum computers are not a consumer product and will not be. They need cryogenic or vacuum systems, specialized control, and expert operation, and the problems they solve are not tasks that individuals face. Claims that a future phone or laptop will contain a quantum processor for everyday computing are not supported by the technology or the economics. If you use a quantum computer, you will do it through a cloud service, like a scientist or an engineer, and for specialized tasks.",
        ] },
      { heading: "Where consumers already meet quantum technology", paragraphs: [
          "Several applications are present or near. Quantum-safe messaging is the most visible. Signal introduced a post-quantum key agreement protocol, PQXDH, in 2023, and Apple announced the PQ3 protocol for iMessage in 2024, both combining classical and post-quantum algorithms, and browsers began using hybrid post-quantum key exchange by default in 2024. Users get this protection without doing anything, and it defends against harvest-now-decrypt-later attacks.",
          "Quantum random number generators have appeared in phones: Samsung and SK Telecom released a phone with a quantum random number chip in 2020. Everyday devices already depend on quantum effects, including lasers, LEDs, flash memory, and MRI scanners, but those are classical devices built on quantum physics, not quantum computers. Quantum-enhanced sensors may appear in navigation and health devices over the next decade, for example in more precise inertial measurement or magnetometers, and optical atomic clocks will support timing for networks and finance in the background.",
        ] },
      { heading: "Services behind the scenes", paragraphs: [
          "Many people will benefit indirectly. Pharmaceutical and materials companies may use quantum computers to design better drugs and batteries, and the results would reach consumers as products, not as quantum devices. Banks and payment networks will migrate to quantum-safe cryptography. Telecom operators may use quantum key distribution for specific links. Wearable brain imaging could improve diagnostics. These are slow-moving, and consumers would rarely notice the quantum part.",
        ] },
      { heading: "Education and entertainment", paragraphs: [
          "Consumers can learn about quantum computing at home. Cloud services give free access to small devices and simulators, games and interactive tutorials teach concepts, and many courses are free. For students, this is a real opportunity to learn by doing, with a laptop and an internet connection. Games that use quantum random numbers or quantum ideas exist, but they are novelties, and the best use of consumer interest is education.",
        ] },
      { heading: "Quantum marketing and scams", paragraphs: [
          "The word quantum is used on products that have nothing to do with quantum technology, from wellness devices and supplements to software and investment schemes. Some are harmless, and some are fraudulent, such as trading systems said to use quantum computers to guarantee profits, or cryptocurrency schemes that claim quantum protection. A good rule is that a consumer product claiming a quantum computer inside, or a quantum advantage for ordinary tasks, is probably misleading. Genuine quantum technologies in consumer settings are specific and checkable, such as a post-quantum protocol in a messaging app, with published specifications.",
        ] },
      { heading: "What to do as a consumer", paragraphs: [
          "There are a few concrete things worth doing. Keep operating systems, browsers, and apps up to date, since post-quantum protections arrive through updates and not through purchases. Use messaging services that publish their post-quantum protocols and prefer those that adopt them early. For passwords and accounts, use a password manager and enable multi-factor authentication, which matter far more for personal security today than any quantum threat. For sensitive long-term data, such as documents you want to stay private for decades, consider strong symmetric encryption with long keys, which is considered resistant to quantum attacks.",
          "If you want to explore quantum computing, use the free cloud tiers and tutorials from major providers, and try a few small programs on simulators and real devices. If a product, service, or investment pitch claims to use a quantum computer for profit or health benefits, ask for independent evidence, and treat requests for upfront payment with great caution. Regulators in several countries have warned about fraud that exploits interest in new technologies, and quantum is no exception.",
          "For parents and teachers, the best use of consumer interest is to encourage foundations in mathematics, physics, and programming, which prepare students for quantum and for many other fields. Quantum concepts can be taught at an introductory level using visual tools and simple circuits, and curiosity at that level is a healthy starting point.",
        ] },
      { heading: "Frequently confused ideas", paragraphs: [
          "A few ideas get mixed up in consumer conversations. Quantum computing is not the same as quantum cryptography: the first threatens current encryption, while the second, key distribution, is a defense that uses quantum physics. Post-quantum cryptography is not quantum: it is ordinary software that runs on ordinary computers and resists attacks from quantum computers. A device that uses quantum physics, such as a laser or a flash memory chip, is not a quantum computer. And quantum random numbers are not required for most everyday security, because good conventional sources are adequate.",
          "Keeping these distinctions in mind makes news easier to read. When you see an announcement, ask which of these it concerns. Is it a computer that processes quantum information, a communication system that uses quantum states, a sensor that uses quantum effects, or software that defends against quantum computers? Each has a different timeline, different benefits, and different relevance to everyday life, and most consumers will meet the last one first.",
          "Finally, a note on timing. Consumers should not expect sudden changes. Security upgrades arrive quietly through updates, sensors arrive inside other products, and scientific advances reach consumers years later through new materials and medicines. The visible signs will be small, and the real effects will be gradual.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "Over the next decade, consumers will see more quantum-safe security in their apps and devices, perhaps a few quantum-based sensors in specialized products, and heavy marketing using the word quantum. The right response is to keep devices and apps updated, prefer services that adopt post-quantum protections, and be skeptical of unverified claims. We have high confidence in this forecast because it rests on technologies that are already deployed and on the structural reasons that quantum computers are not personal devices.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "Post-quantum protection becomes common in browsers and messaging; QRNG chips appear in more devices; more quantum branding in marketing." },
      { label: "2029 to 2032", value: "Quantum-enhanced sensors in some navigation and medical devices; quantum-safe payments and identity systems." },
      { label: "2033 to 2035", value: "Consumers benefit indirectly from quantum-designed materials and drugs, if advantage arrives." },
    ], signals: [
      "Messaging apps and operating systems adopting post-quantum signatures.",
      "Phone makers integrating quantum sensors or random number chips.",
      "Regulator warnings about quantum-branded scams.",
    ], risks: [
      "Hype could mislead consumers.",
      "Fraud could exploit interest in quantum.",
      "Benefits may be slower to reach consumers than expected.",
    ], faq: [
      { q: "Will I have a quantum computer at home?", a: "No. Quantum computers need specialized equipment, and you would use them through the cloud if at all." },
      { q: "Is my phone quantum?", a: "It uses quantum physics in its chips, but it is not a quantum computer. Some phones include quantum random number chips." },
      { q: "How can I protect myself against the quantum threat?", a: "Keep software updated and use services that adopt post-quantum encryption." },
    ], references: [
      "Kret, E., & Schmidt, R. (2023). The PQXDH key agreement protocol. Signal specification.",
      "Apple Security Engineering and Architecture (2024). iMessage with PQ3: The new state of the art in quantum-secure messaging at scale. Apple Security Research blog, February 2024.",
      "Herrero-Collantes, M., & Garcia-Escartin, J. C. (2017). Quantum random number generators. Reviews of Modern Physics, 89, 015004.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Quantum Random Number Generator", href: "/dictionary/quantum-random-number-generator" },
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
    ], words: 1141 },
  { slug: "judging-quantum-claims-future", title: "A Reader's Guide to Judging Quantum Claims", category: "science-outlook", horizon: "Ongoing", confidence: "High", summary: "Quantum announcements come fast and are often exaggerated. A short checklist, an evidence ladder, and a few worked examples can help readers separate real progress from marketing.", sections: [
      { heading: "Why this guide", paragraphs: [
          "Quantum computing news mixes real scientific advances, corporate marketing, and speculation, and journalists often lack the expertise to tell them apart. Readers who want to understand the field, whether as students, managers, or investors, need practical tools for judging claims. The tools below do not require physics expertise, only a habit of asking specific questions.",
        ] },
      { heading: "The evidence ladder", paragraphs: [
          "It helps to place a claim on a ladder. At the bottom is a press release or conference talk, with no data. Next is a preprint, which gives data but has not been reviewed. Then comes a peer-reviewed paper, which has passed expert scrutiny but is not guaranteed correct. Higher is independent replication by another group, ideally on different hardware. Higher still is survival of attempts to reproduce the result classically, and at the top is adoption by customers who repeat the use because it delivers value. Most announcements are on the first or second rung, and claims should be weighed accordingly. Retractions and failed replications in the field, such as the 2018 Majorana paper retracted in 2021, show why higher rungs matter.",
        ] },
      { heading: "Ten questions to ask", paragraphs: [
          "First, what exactly was done: what task, on how many qubits, with what error rates? Second, compared with what: was the classical baseline the best available method, tuned by experts, and what was its cost? Third, how was it measured: is the result verified, and by whom? Fourth, what are the error bars and how many runs were done? Fifth, was post-selection used, and what fraction of runs was discarded? Sixth, are data and code available for others to check?",
          "Seventh, is the claim about the device working, about the task being hard for classical computers, or about usefulness, and are these separated? Eighth, does the result scale, or does it work only at the size shown? Ninth, who funded and wrote it, and do they gain from the claim? Tenth, what do independent experts say, particularly those with no stake? These questions apply to any technology claim, and they work well for quantum.",
        ] },
      { heading: "Worked examples", paragraphs: [
          "Consider Google's 2019 supremacy claim. The device performed the task, as shown by the verification, but the classical estimate of 10,000 years was challenged by IBM within days and by later algorithms, and the task was artificial. A fair reading is that it showed a regime hard to simulate exactly and was not evidence of useful advantage. IBM's 2023 utility experiment is a second example: the authors claimed utility, not advantage, and classical groups reproduced the results within weeks. The claim of utility was modest and accurate, while press coverage sometimes called it advantage.",
          "A third example is Microsoft's Majorana announcements. The 2025 and 2026 claims describe measurements on devices that may host topological states, with company statements of large improvements, while independent physicists asked for more evidence and an editorial note on the 2025 paper said it did not by itself show Majorana modes. The right position is to wait for replication. A fourth example is the HSBC and IBM 2025 claim of a 34 percent improvement in predicting bond trade fills: it is a result on a specific prediction task against a specific baseline, and does not show general advantage.",
        ] },
      { heading: "Red flags and green flags", paragraphs: [
          "Red flags include the use of the word revolutionary without data, comparisons to a weak or unspecified classical baseline, results shown only at sizes that classical computers handle easily, extrapolations from small experiments to commercial value, a lack of error bars, secrecy about methods, and claims that quantum computers explore all possibilities at once. Be wary of announcements timed with funding rounds or stock offerings. Green flags include peer review, open data, independent replication, honest discussion of limitations, clear definitions of metrics, and acknowledgments of classical competition. Trusted voices include researchers with track records who publicly engage with critiques, though even experts can disagree.",
        ] },
      { heading: "A one-minute version", paragraphs: [
          "If you have only a minute, ask four things. What was actually measured, and on how many qubits? What was it compared against, and was that the best classical method? Has anyone independent checked it, either by repeating it or by trying to match it classically? And what would it take for this to matter in practice, such as scale, cost, and error rates? If a story cannot answer these, treat it as a promise and not as a result.",
          "It also helps to keep a few base rates in mind. Most advantage claims on artificial tasks have been narrowed by classical rebuttals. Most roadmap dates have slipped, though intermediate milestones in error correction have been met. Few, if any, business applications of quantum computing have moved from pilot to production. Cryptography is the exception: the risk is real, the standards exist, and the advice to migrate is sound. Holding these base rates in mind makes it easier to read new announcements with proportion.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "Judging claims well is a skill that improves with practice. The field is real and moving, which makes it all the more important to discount overstatement. A reader who keeps the evidence ladder in mind, asks for the baseline, and waits for replication will be right more often than one who reacts to headlines. We hope the references and the other pages on this site help readers apply these habits.",
        ] },
    ], forecast: [
      { label: "2026 to 2028", value: "More trackers and replication efforts; journals demand fuller data; still many exaggerated press claims." },
      { label: "2029 to 2032", value: "Standard benchmarks and verification practices reduce ambiguity." },
      { label: "2033 onward", value: "Customer adoption becomes the main test of value." },
    ], signals: [
      "Independent replication of major claims.",
      "Journals and agencies requiring classical baselines and data release.",
      "Reduced use of loaded terms in press releases.",
    ], risks: [
      "Hype cycles could return with new technology waves.",
      "Even experts may be misled by subtle errors.",
      "Information overload can make checking hard.",
    ], faq: [
      { q: "How can I tell if a quantum announcement is real?", a: "Look for peer-reviewed data, an honest classical baseline, independent replication, and clear statements of limits." },
      { q: "Is a preprint reliable?", a: "It is useful but unreviewed. Treat it as a claim that needs checking." },
      { q: "Who can I trust?", a: "Researchers with track records who engage openly with critics, and sources that cite data." },
    ], references: [
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505-510.",
      "Kim, Y., et al. (2023). Evidence for the utility of quantum computing before fault tolerance. Nature, 618, 500-505.",
      "Tindall, J., Fishman, M., Stoudenmire, E. M., & Sels, D. (2024). Efficient tensor network simulation of IBM's Eagle kicked Ising experiment. PRX Quantum, 5, 010308.",
      "Microsoft Azure Quantum (2025). Interferometric single-shot parity measurement in InAs-Al hybrid devices. Nature, 638, 651-655.",
      "Hangleiter, D., & Eisert, J. (2023). Computational advantage of quantum random sampling. Reviews of Modern Physics, 95, 035001.",
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Evidence for the Utility of Quantum Computing Before Fault Tolerance", href: "/research/kim-utility-before-fault-tolerance-2023" },
      { label: "Paper: Efficient Tensor Network Simulation of IBM's Eagle Kicked Ising Experiment", href: "/research/tindall-tensor-network-eagle-kicked-ising-2024" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
      { label: "Term: Quantum Supremacy", href: "/dictionary/quantum-supremacy" },
    ], words: 1003 },
  { slug: "quantum-2040-long-term-future", title: "Looking Toward 2040 and Beyond", category: "science-outlook", horizon: "2035 to 2050", confidence: "Low", summary: "If error-corrected machines arrive in the 2030s, quantum computing could become a standard scientific and industrial tool by 2040 and beyond. We sketch plausible outcomes, with the caveat that forecasts this far out are mostly informed imagination.", sections: [
      { heading: "A note on long-range forecasting", paragraphs: [
          "Predictions about technology twenty years ahead are usually wrong in detail, and often wrong in kind. The transistor, the laser, and the internet all changed the world in ways their inventors did not foresee. Our long-range picture is therefore a set of plausible patterns based on what we know about the technology, not a prediction. We rate confidence as low and present it for thinking, not planning.",
        ] },
      { heading: "Computing in 2040", paragraphs: [
          "If the base scenario holds, by 2040 fault-tolerant quantum computers with thousands of logical qubits will exist in a few facilities, run by governments, major vendors, and large institutions. They will be accessed through the cloud and through HPC centers, working with classical supercomputers and AI systems. Typical tasks would include simulating molecules and materials with high accuracy, solving certain scientific and engineering problems, and, for governments, cryptanalysis of legacy systems. Machines may not be faster for ordinary tasks, so classical computing will remain dominant by volume.",
          "Quantum computing may become a standard tool in computational chemistry and physics, much like GPUs are in machine learning, used by specialists and embedded in software that most users do not see. The measure of success would be that a new drug, battery, or catalyst design depends in a documented way on a quantum calculation.",
        ] },
      { heading: "Networks and sensing", paragraphs: [
          "By 2040 specialized quantum networks may link data centers, government sites, and research facilities with entanglement-based links and quantum memories, enabling secure communication and distributed quantum computing. Satellite constellations could provide quantum links between continents. Quantum sensors may be common in navigation, geophysics, medical diagnostics, and infrastructure monitoring, and optical clocks may underpin a redefined second and the timing of global networks. These areas have lower barriers and are likely to be more widespread than quantum computers themselves.",
        ] },
      { heading: "Science", paragraphs: [
          "Quantum technology may change science itself. Quantum simulators and computers could settle open questions in condensed matter, nuclear physics, and chemistry. Sensors and networks could improve tests of fundamental physics, including searches for dark matter and gravitational waves. Experiments with large quantum systems may test the limits of quantum mechanics at macroscopic scales. Machine learning and quantum computing may combine in new ways, for example in learning about quantum systems from experiments. These are speculative but consistent with current research programs.",
        ] },
      { heading: "Society and economy", paragraphs: [
          "Economically, quantum technology is likely to be a significant but not dominant sector, with revenue in the tens to hundreds of billions of dollars in optimistic forecasts, spread across computing, sensing, communication, and the supporting supply chain. Its largest effect may be defensive: the cost of migrating cryptography and the resilience it brings to digital infrastructure. Geopolitically, quantum capability will be one of several strategic technologies, along with semiconductors and AI, and countries will compete and cooperate in complicated ways.",
          "The workforce will include more engineers and technicians than physicists, and education will integrate quantum concepts into engineering and computer science. Public understanding will probably remain limited, which makes honest communication important.",
        ] },
      { heading: "Questions that will shape the long term", paragraphs: [
          "Several open questions will determine the long-term outcome. Will the cost per logical qubit fall far enough to make large machines affordable for universities and companies, not only for governments? Will new algorithms emerge that give speedups for problems of broad commercial importance, as Shor's algorithm did for cryptography? Will platforms converge on a standard architecture, or will several coexist for specialized roles? Will quantum networks become a global infrastructure or remain a niche? How will classical computing and AI evolve, and will they close or widen the gap?",
          "The answers depend on research that is under way and on economic and political choices. They also depend on how well the community communicates with the public and with decision makers, since support for long-term research relies on trust. If the field delivers real value in the 2030s, public and private investment will continue, and the long-term picture above becomes more likely. If it does not, funding may fall, and quantum technology may settle into narrower roles. We think the first is more probable than the second, but neither is certain.",
        ] },
      { heading: "What stays the same", paragraphs: [
          "It is worth remembering what is unlikely to change by 2040. Classical computers will still do most computing, because quantum computers are specialized. The need for good engineering, security hygiene, and honest evaluation of claims will remain. The physics of noise and error correction will still impose costs, and progress will still come from careful experiments, mathematics, and engineering. People will still need to be educated and trained, and societies will still need to decide how to use powerful tools. These continuities provide a stable base for planning even when specific technologies change.",
        ] },
      { heading: "What could surprise us", paragraphs: [
          "Several surprises are possible. A breakthrough in error correction, qubit design, or algorithms could bring capabilities much earlier. A fundamental obstacle could limit scale, ending the pursuit of general-purpose machines but leaving specialized devices. New applications that we have not imagined could emerge, as happened with classical computing. Classical algorithms and hardware may improve, including AI-driven methods that make some quantum targets less valuable. Any of these would change the picture, and the main lesson of the history of technology is to hold forecasts loosely.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "The outline above is a plausible and not a certain outcome. What we can say with more confidence is that the next decade will answer the main open questions about scaling, and that preparations that make sense in all scenarios, such as cryptographic migration, skills, and open standards, are worth doing now. After that, the path will depend on evidence that has not yet been gathered. We will revise these pages as it arrives.",
        ] },
    ], forecast: [
      { label: "By 2035", value: "First fault-tolerant machines with hundreds to a thousand logical qubits; early chemistry and cryptanalysis uses." },
      { label: "By 2040", value: "Quantum computing a standard tool in several scientific fields; specialized quantum networks and sensors widespread." },
      { label: "By 2050", value: "Mature quantum technologies in science, security, and some industries; unknown applications." },
    ], signals: [
      "Evidence of logical qubit scaling and costs in the next five years.",
      "Verified advantage in chemistry or materials.",
      "Adoption of quantum networks and sensors outside research.",
    ], risks: [
      "Long-range forecasts are unreliable.",
      "A fundamental barrier could change the path.",
      "Classical technology may advance faster than expected.",
    ], faq: [
      { q: "Will quantum computers be common by 2040?", a: "Not as personal devices. They are likely to exist as shared scientific and industrial tools if scaling succeeds." },
      { q: "What will matter most by 2040?", a: "Probably security (post-quantum cryptography), sensing, and quantum simulation in science and materials." },
      { q: "How reliable are these forecasts?", a: "Not very. Treat them as scenarios and watch the leading indicators." },
    ], references: [
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics, 21, 467-488.",
      "Wehner, S., Elkouss, D., & Hanson, R. (2018). Quantum internet: A vision for the road ahead. Science, 362, eaam9288.",
      "Daley, A. J., et al. (2022). Practical quantum advantage in quantum simulation. Nature, 607, 667-676.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
      "McKinsey and Company (2025). Quantum Technology Monitor.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
    ], links: [
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Paper: Quantum Internet: A Vision for the Road Ahead", href: "/research/wehner-quantum-internet-vision-2018" },
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Term: Fault Tolerance", href: "/dictionary/fault-tolerance" },
      { label: "Term: Quantum Internet", href: "/dictionary/quantum-internet" },
    ], words: 1062 },
  { slug: "quantum-foundations-physics-future", title: "Fundamental Physics: Testing Quantum Mechanics and Probing Nature", category: "science-outlook", horizon: "2026 to 2040", confidence: "Low", summary: "Quantum technology is also a laboratory for fundamental physics: tests of quantum mechanics with larger objects, searches for dark matter with quantum sensors, and simulations of exotic physics. Some claims, such as quantum gravity in a chip, are controversial.", sections: [
      { heading: "Technology that doubles as a physics experiment", paragraphs: [
          "The same control of quantum systems that makes quantum computing possible lets physicists ask questions that were thought to be philosophical. How large can a system be and still show quantum interference? Does gravity behave quantum mechanically? What is the dark matter? Can a quantum computer simulate aspects of quantum gravity? Because experiments are becoming precise and large, some of these questions are now within reach, though others remain speculative, and the field needs care to separate solid results from hype.",
        ] },
      { heading: "Pushing the quantum-classical boundary", paragraphs: [
          "Quantum mechanics predicts that any isolated system can be in a superposition, but we do not see superpositions of everyday objects, which decoherence explains in part. Some theories, called collapse models, propose that wavefunctions collapse spontaneously above some size, a possibility that experiments can bound, as Bassi and coauthors reviewed in 2013. Interference experiments with molecules have reached about 25,000 atomic mass units, as reported by Fein and coauthors in 2019. Levitated nanoparticles, cooled to their motional ground state by Delić and coauthors in 2020 and by Magrini and coauthors in 2021, are a platform for preparing superpositions of larger masses, and superconducting circuits and mechanical resonators also push the limits.",
          "Over the next decade, these experiments may test collapse models decisively or extend quantum superpositions to masses where gravitational effects might matter. A positive result for a modification of quantum mechanics would be revolutionary, and a null result would tighten limits.",
        ] },
      { heading: "Gravity and quantum mechanics", paragraphs: [
          "A long-standing puzzle is whether gravity is quantum. In 2017, Bose and coauthors, and independently Marletto and Vedral, proposed that if two massive objects in superposition become entangled through gravity alone, then gravity must be a quantum entity, by an argument based on information theory. The experiment requires keeping two micron-scale masses in superposition, close together, isolated from other interactions, which is extremely demanding. Progress in levitated systems, optomechanics, and diamond spin sensors makes the experiment conceivable on a decade timescale, though no one has done it, and theoretical debates about the interpretation continue.",
        ] },
      { heading: "Quantum sensors in the search for new physics", paragraphs: [
          "Precision measurement is a tool for discovering new physics. Atomic clocks, atom interferometers, and magnetometers constrain or search for variation of fundamental constants, violations of Lorentz symmetry, and dark matter, as Safronova and coauthors reviewed in 2018. Networks of clocks and sensors could detect dark matter candidates passing through the Earth, and space-based atom interferometers could probe the equivalence principle and gravitational waves in new frequency bands. Squeezed light already improves gravitational wave detectors, and quantum techniques will help future ones. These projects are among the most solid applications of quantum technology to fundamental science.",
        ] },
      { heading: "Quantum simulation of exotic physics", paragraphs: [
          "Quantum computers and simulators can probe theories that are hard to simulate classically, including lattice gauge theories relevant to the strong force, models of quantum matter, and toy models of quantum gravity. A prominent example is the 2022 experiment by Jafferis and coauthors, which used Google's processor to simulate dynamics related to a traversable wormhole in a simplified model, a claim that drew criticism about whether the experiment shows more than a classical simulation of a small system would, as Kobrin and coauthors argued. Such experiments are valuable as tests of simulation methods, and claims about creating gravitational physics in a lab should be treated cautiously.",
          "A deeper link between quantum information and gravity comes from the realization that spacetime in some models behaves like an error-correcting code, as Almheiri, Dong, and Harlow proposed in 2015. These ideas guide theory and may eventually guide experiments on quantum simulators.",
        ] },
      { heading: "How to read foundational claims", paragraphs: [
          "Fundamental physics claims need extra care because the interpretation is often as contested as the data. When an experiment is reported to show a quantum effect in a new regime, ask which alternative explanations the authors have ruled out and what the control experiments were. When a simulation is said to reproduce gravitational or cosmological physics, ask whether the simulated model is a faithful analog or a loose analogy, and whether a classical computer could produce the same output. When a new bound is announced on a theory, ask how the bound depends on model assumptions.",
          "Foundational experiments also tend to take longer than technology demonstrations and to produce incremental bounds more often than dramatic discoveries. A decade of progress might narrow a parameter range of collapse models by a factor of ten without settling anything, and that is the normal course of science. The excitement of the field comes from the possibility, not the certainty, of a surprise, and the best reporting conveys both.",
        ] },
      { heading: "Our assessment", paragraphs: [
          "We expect quantum technology to contribute steadily to fundamental physics through precision sensing, tests of quantum mechanics at larger scales, and simulation. The most likely achievements by 2035 are tighter bounds on collapse models and dark matter candidates, improved tests of relativity with clocks and interferometers, and simulations that explore regimes of many-body and gauge theories beyond classical reach. A demonstration of gravity-mediated entanglement is possible but uncertain. Readers should be cautious about claims of discoveries from quantum computers about the nature of spacetime. We hold this forecast with low confidence because fundamental discoveries are unpredictable by nature.",
        ] },
    ], forecast: [
      { label: "2026 to 2029", value: "Levitated and optomechanical systems reach larger superposition masses; improved clock and interferometer bounds." },
      { label: "2030 to 2035", value: "Decisive tests of some collapse models; space and ground sensor networks search for dark matter; larger simulations of gauge theories." },
      { label: "2036 to 2040", value: "Possible tests of gravity-mediated entanglement; quantum simulators contribute to theory of quantum matter and gravity." },
    ], signals: [
      "Superpositions of objects with masses far above current records.",
      "Atomic clock networks reporting bounds on dark matter couplings.",
      "Experiments approaching gravity-mediated entanglement.",
      "Independent replication of quantum gravity simulations.",
    ], risks: [
      "Experiments may find nothing new.",
      "Claims may be overinterpreted.",
      "Funding competes with other priorities.",
    ], faq: [
      { q: "Can quantum computers test quantum gravity?", a: "They can simulate toy models, but claims about creating real gravitational physics are controversial." },
      { q: "Can we test whether gravity is quantum?", a: "Proposed experiments could, by checking whether gravity can entangle two masses. They are very hard and not yet done." },
      { q: "How do quantum sensors search for dark matter?", a: "By looking for tiny shifts in clocks, interferometers, or magnetometers caused by dark matter fields." },
    ], references: [
      "Bassi, A., Lochan, K., Satin, S., Singh, T. P., & Ulbricht, H. (2013). Models of wave-function collapse, underlying theories, and experimental tests. Reviews of Modern Physics, 85, 471-527.",
      "Fein, Y. Y., et al. (2019). Quantum superposition of molecules beyond 25 kDa. Nature Physics, 15, 1242-1245.",
      "Delić, U., et al. (2020). Cooling of a levitated nanoparticle to the motional quantum ground state. Science, 367, 892-895.",
      "Magrini, L., et al. (2021). Real-time optimal quantum control of mechanical motion at room temperature. Nature, 595, 373-377.",
      "Bose, S., et al. (2017). Spin entanglement witness for quantum gravity. Physical Review Letters, 119, 240401.",
      "Marletto, C., & Vedral, V. (2017). Gravitationally induced entanglement between two massive particles is sufficient evidence of quantum effects in gravity. Physical Review Letters, 119, 240402.",
      "Safronova, M. S., et al. (2018). Search for new physics with atoms and molecules. Reviews of Modern Physics, 90, 025008.",
      "Jafferis, D., et al. (2022). Traversable wormhole dynamics on a quantum processor. Nature, 612, 51-55.",
      "Almheiri, A., Dong, X., & Harlow, D. (2015). Bulk locality and quantum error correction in AdS/CFT. Journal of High Energy Physics, 2015(4), 163.",
    ], links: [
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
    ], words: 1001 },
];

export function getFutureTopic(slug: string) {
  return futureTopics.find((t) => t.slug === slug);
}
