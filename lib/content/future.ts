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
];

export function getFutureTopic(slug: string) {
  return futureTopics.find((t) => t.slug === slug);
}
