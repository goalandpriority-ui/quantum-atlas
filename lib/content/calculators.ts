export type CalculatorCategory = "foundations" | "error-correction" | "algorithms" | "hardware" | "security";

export type CalculatorInfo = {
  slug: string;
  title: string;
  category: CalculatorCategory;
  level: "Beginner" | "Intermediate" | "Advanced";
  tagline: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  formulas: { name: string; expression: string; note: string }[];
  examples: { title: string; steps: string[]; result: string }[];
  faq: { q: string; a: string }[];
  references: string[];
  links: { label: string; href: string }[];
  words: number;
};

export const calculatorCategoryLabels: Record<CalculatorCategory, string> = {
  foundations: "Quantum Foundations",
  "error-correction": "Noise and Error Correction",
  algorithms: "Algorithms and Advantage",
  hardware: "Hardware and Physics",
  security: "Security and Networks",
};

export const calculators: CalculatorInfo[] = [
  { slug: "chsh-bell-test-calculator", title: "CHSH Bell Test Calculator", category: "foundations", level: "Intermediate", tagline: "Pick four measurement angles, set how noisy your entangled source is, and see whether your correlations break the classical limit.", summary: "Compute the CHSH value S for an entangled pair, compare it with the classical bound of 2 and the quantum bound of 2.83, find the game win probability, and estimate how many trials a convincing Bell test needs.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "The CHSH inequality, named after Clauser, Horne, Shimony, and Holt, is the most widely used test of whether two distant measurements are correlated in a way that no classical theory can explain. Alice and Bob each choose between two measurement settings, record one-bit outcomes, and combine four measured correlations into a single number S. If the world obeys local hidden variables, then S can never exceed 2 in magnitude. Quantum mechanics predicts that an entangled pair can reach 2√2, about 2.83, which is called the Tsirelson bound.",
          "This calculator uses the textbook model of a singlet state measured along directions in one plane, with an adjustable visibility that stands in for noise in the source and detectors. You choose the four angles and the visibility, and it returns the four correlators, the S value, whether the inequality is violated, the winning probability in the equivalent CHSH game, and the statistical significance you would get from a chosen number of trials.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the preset called Optimal Bell settings, which uses angles 0°, 90° for Alice and 45°, 135° for Bob. With perfect visibility you get S = 2.828 and a game win probability of 85.36 percent. Then lower the visibility slider and watch S fall in proportion. Where the curve in the chart crosses 2, you lose the violation. That crossing is at 70.7 percent visibility, and it is the minimum quality an entangled source needs for a Bell test to work with these settings.",
          "Next, try moving the angles. The preset called All angles equal shows that without a difference between the settings there is nothing for entanglement to exploit, so the four correlators cancel. Then change one angle at a time and see which choices keep S high. You will find that the best arrangement has neighboring settings separated by 45 degrees, which makes sense because the correlation falls off as a cosine of the angle difference.",
          "Finally, use the trials slider. A real experiment has finite statistics, so each correlator is only known to within a statistical error. The calculator splits your trials evenly across the four setting pairs and estimates the standard error of S, then tells you how many standard deviations above 2 your result sits. The text under the callout reports how many trials are needed for a five-sigma violation at the current settings.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "A value of S above 2 means no local hidden-variable model can reproduce the statistics, provided the experiment closes the usual loopholes. A value between 0 and 2 is consistent with classical explanations. The game win probability is a different way of expressing the same number. In the CHSH game, referees give Alice and Bob random bits and they must output bits whose parity matches the product of the referee bits, without communicating. Classical players can win at most 75 percent of rounds, while players sharing entanglement can win up to 85.36 percent.",
          "Be careful about what a violation does and does not prove. It shows that the correlations cannot come from pre-agreed local instructions. It does not allow messages to travel faster than light, and it does not by itself prove that a system is useful for computing. In practice, laboratories also have to guarantee that detectors catch enough of the particles and that the settings are chosen too late for any signal to travel between the two sites. The loophole-free experiments of 2015 did both.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The calculator assumes an ideal two-qubit singlet state mixed with white noise, perfect detection, and measurements in a single plane. Real photon experiments use polarization angles that are half the Bloch-sphere angles used here, so a 45 degree Bloch angle corresponds to 22.5 degrees of polarizer rotation. Real systems also suffer from accidental coincidences, unbalanced detectors, drifts, and sometimes loophole-opening choices, none of which are modeled. The statistical formula treats trials as independent and identically distributed, which is the usual idealization.",
        ] },
    ], formulas: [
      { name: "Correlator", expression: "E(x, y) = −V cos(x − y)", note: "For a singlet state measured along directions x and y in one plane, with visibility V." },
      { name: "CHSH value", expression: "S = E(a, b) − E(a, b′) + E(a′, b) + E(a′, b′)", note: "Any local hidden-variable theory gives |S| ≤ 2. Quantum mechanics allows up to 2√2." },
      { name: "Game win probability", expression: "P(win) = 1/2 + |S|/8", note: "Classical strategies reach 75 percent, entangled strategies up to about 85.36 percent." },
      { name: "Minimum visibility", expression: "V_min = 1/√2 ≈ 0.707", note: "With optimal settings, S = 2√2·V exceeds 2 only above this visibility." },
      { name: "Statistical error", expression: "σ(S) = √( Σᵢ (1 − Eᵢ²) / nᵢ ),  nᵢ = N/4", note: "Standard error of S when N trials are split evenly across the four setting pairs." },
    ], examples: [
      { title: "Ideal source with optimal angles", steps: [
          "Set a = 0°, a′ = 90°, b = 45°, b′ = 135° and V = 100%.",
          "The four correlators are −0.707, +0.707, −0.707, and −0.707.",
          "S = −0.707 − 0.707 − 0.707 − 0.707 = −2.828.",
        ], result: "|S| = 2.828, which is the Tsirelson bound, and the game win probability is 85.36 percent." },
      { title: "A realistic lab source", steps: [
          "Keep the optimal angles but set V = 95%.",
          "Each correlator has magnitude 0.95 × 0.707 = 0.672, so |S| = 2.687.",
          "The win probability is 1/2 + 2.687/8 = 83.6 percent.",
          "Σ(1 − E²) = 4 × (1 − 0.4516) = 2.194, so a 5σ violation needs N ≈ 25 × 2.194 × 4 / (0.687)² ≈ 465 trials.",
        ], result: "A 95 percent source violates the inequality by 0.687 and needs only a few hundred ideal trials for five sigma." },
      { title: "A source that is too noisy", steps: [
          "Set V = 65% with the optimal angles.",
          "|S| = 2.828 × 0.65 = 1.838.",
        ], result: "S is below 2, so these correlations can be explained classically even though the underlying state is still entangled." },
    ], faq: [
      { q: "Why is the classical limit exactly 2?", a: "Because if each particle carries pre-agreed answers for both settings, the four correlators combine in a way that can add up to at most 2, as Clauser, Horne, Shimony, and Holt showed in 1969." },
      { q: "Is a Bell violation proof of faster-than-light influence?", a: "No. The correlations cannot be used to send information, and the violation only rules out the combination of locality and pre-existing values." },
      { q: "Why does a visibility below 70.7 percent hide the violation?", a: "Because noise shrinks all correlators by the same factor, and 2√2 times 0.707 equals exactly 2." },
    ], references: [
      "Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. Physics Physique Fizika, 1, 195-200.",
      "Clauser, J. F., Horne, M. A., Shimony, A., & Holt, R. A. (1969). Proposed experiment to test local hidden-variable theories. Physical Review Letters, 23, 880-884.",
      "Tsirelson, B. S. (1980). Quantum generalizations of Bell's inequality. Letters in Mathematical Physics, 4, 93-100.",
      "Aspect, A., Dalibard, J., & Roger, G. (1982). Experimental test of Bell's inequalities using time-varying analyzers. Physical Review Letters, 49, 1804-1807.",
      "Hensen, B., et al. (2015). Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. Nature, 526, 682-686.",
      "Brunner, N., Cavalcanti, D., Pironio, S., Scarani, V., & Wehner, S. (2014). Bell nonlocality. Reviews of Modern Physics, 86, 419-478.",
      "Cleve, R., Høyer, P., Toner, B., & Watrous, J. (2004). Consequences and limits of nonlocal strategies. Proceedings of the 19th IEEE Conference on Computational Complexity, 236-249.",
    ], links: [
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
      { label: "Myth: Entanglement is just ordinary correlation, and hidden variables can explain it", href: "/myths/entanglement-is-just-classical-correlation" },
      { label: "Myth: Entanglement lets you send messages faster than light", href: "/myths/entanglement-faster-than-light-messages" },
    ], words: 1107 },
  { slug: "teleportation-fidelity-calculator", title: "Quantum Teleportation Fidelity Calculator", category: "foundations", level: "Intermediate", tagline: "Find out whether your entangled link and your gates are good enough to beat the best classical strategy, and how far a repeater chain can stretch.", summary: "Combine the fidelity of a shared Bell pair, the error of the Bell measurement, the error of the correction gate, and the number of entanglement-swapping links to compute average teleportation fidelity and compare it with the 2/3 classical limit.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Quantum teleportation moves an unknown qubit state from a sender to a receiver using a shared entangled pair and two classical bits. In an ideal world the state arrives perfectly. In a laboratory, every ingredient is imperfect: the shared pair is not a perfect Bell state, the sender's joint measurement sometimes misidentifies which of four outcomes occurred, and the receiver's correction gate has its own error. Teleportation fidelity is the average overlap between the state that arrives and the state that was sent, averaged over all possible inputs. A value of 100 percent is perfect, while 50 percent corresponds to a completely random output.",
          "This calculator lets you set the quality of the Bell pair, the two local error rates, and the number of entanglement-swapping links that join smaller pairs into one long pair, as in a quantum repeater. It reports the end-to-end pair fidelity and the resulting teleportation fidelity, and tells you whether you beat the classical benchmark of 2/3.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Begin with the Good lab link preset, which models a pair of 95 percent fidelity with small local errors. The result is about 95.5 percent teleportation fidelity, comfortably above the classical bar. Now drag the pair fidelity downward. Because teleportation fidelity depends linearly on the pair fidelity, you will see a straight line in the first chart, crossing the 66.7 percent classical limit exactly when the pair fidelity falls to 50 percent. That is the point where the shared state stops being entangled, and it is no coincidence.",
          "Next, raise the number of links. Each entanglement swap multiplies the Werner parameter of the pair, so quality decays exponentially with chain length. The second chart shows the end-to-end pair fidelity falling toward 25 percent, the value for a fully mixed state, and crossing the 50 percent line where entanglement disappears. This is the reason long-distance quantum communication needs entanglement purification or error-corrected repeaters and cannot rely on swapping noisy pairs indefinitely.",
          "Finally, raise the Bell-measurement error and the correction error and notice how quickly local imperfection eats the margin. The text below the main result states the minimum end-to-end pair fidelity needed to beat the classical limit given your local error rates. If it exceeds 100 percent, no pair can compensate, and the hardware itself must improve.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The classical benchmark of 2/3 comes from the best strategy that does not use entanglement: measure the input state in some basis, send the result, and have the receiver prepare a state accordingly. Averaged over all inputs, that strategy cannot exceed 2/3 for a qubit, a result established by Popescu in 1994 and by Massar and Popescu in 1995. A teleportation experiment that reports a fidelity above 2/3 therefore demonstrates that quantum resources were used. Experiments aiming at practical networks usually want far more, such as 90 percent or higher, because teleportation is a building block inside longer protocols and errors accumulate.",
          "A related point is that the fidelity of the pair and the fidelity of the teleported state are linked by a simple formula for the commonly used noise model. For a Werner state with singlet fraction F, the average teleportation fidelity is (2F + 1)/3. This is a general result of Horodecki, Horodecki, and Horodecki from 1999 for the standard protocol with an optimal correction.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model assumes that the shared pair is a Werner state, meaning a mixture of a perfect Bell state and white noise, which is a good approximation for depolarizing noise but not for noise that favors one kind of error, such as pure dephasing in many hardware platforms. It treats a wrong Bell identification as producing a random output, and a faulty correction as the same, which gives a simple but approximate combined formula. It does not model photon loss, memory decoherence while waiting for classical messages, or the success probability of swapping, all of which matter in a real repeater. Treat the numbers as a guide to scaling and thresholds and not as a prediction for a specific device.",
        ] },
    ], formulas: [
      { name: "Werner parameter", expression: "w = (4F − 1)/3", note: "Converts pair fidelity F with a Bell state into the Werner mixing parameter." },
      { name: "Swapping chain", expression: "w_total = wᵏ,  F_chain = (1 + 3·wᵏ)/4", note: "Entanglement swapping multiplies the Werner parameters of the k links." },
      { name: "Teleportation fidelity", expression: "F_tel = (2·F_chain + 1)/3", note: "Average fidelity over all input states for the standard protocol with a Werner resource." },
      { name: "With local errors", expression: "F_total ≈ q·F_tel + (1 − q)/2,  q = (1 − ε_M)(1 − ε_C)", note: "Treats a failed measurement or correction as producing a random output with fidelity 1/2." },
      { name: "Classical benchmark", expression: "F_classical = 2/3", note: "Best average fidelity for measure-and-resend strategies on a qubit." },
    ], examples: [
      { title: "A good laboratory link", steps: [
          "Pair fidelity 95%, Bell measurement error 2%, correction error 0.5%, one link.",
          "w = (3.8 − 1)/3 = 0.933, so F_tel = (1.9 + 1)/3 = 0.967.",
          "q = 0.98 × 0.995 = 0.975, so F_total = 0.975 × 0.967 + 0.025 × 0.5 = 0.955.",
        ], result: "About 95.5 percent, well above the 66.7 percent classical benchmark." },
      { title: "A ten-link repeater chain", steps: [
          "Each link has fidelity 97%, so w = (3.88 − 1)/3 = 0.96.",
          "After 10 swaps w¹⁰ = 0.665 and F_chain = (1 + 1.994)/4 = 0.749.",
          "F_tel = (2 × 0.749 + 1)/3 = 0.832.",
        ], result: "The chain still beats the classical limit, but the pair has lost most of its quality, which is why repeaters use purification." },
      { title: "The break-even pair", steps: [
          "With no local errors, set F_tel = 2/3 and solve (2F + 1)/3 = 2/3.",
        ], result: "F = 1/2, the same threshold at which the pair stops being entangled." },
    ], faq: [
      { q: "Why is 2/3 the classical limit?", a: "Without entanglement the best you can do is estimate the state from a single copy, and the optimal estimate-and-resend strategy returns the right state with average fidelity 2/3." },
      { q: "Does teleportation work faster than light?", a: "No. The receiver needs the two classical bits from the sender to apply the right correction." },
      { q: "Why do repeater chains lose fidelity so fast?", a: "Each swap combines the imperfections of two pairs, and in the Werner model the quality parameters multiply." },
    ], references: [
      "Bennett, C. H., et al. (1993). Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 70, 1895-1899.",
      "Popescu, S. (1994). Bell's inequalities versus teleportation: What is nonlocality? Physical Review Letters, 72, 797-799.",
      "Massar, S., & Popescu, S. (1995). Optimal extraction of information from finite quantum ensembles. Physical Review Letters, 74, 1259-1263.",
      "Horodecki, M., Horodecki, P., & Horodecki, R. (1999). General teleportation channel, singlet fraction, and quasidistillation. Physical Review A, 60, 1888-1898.",
      "Briegel, H.-J., Dür, W., Cirac, J. I., & Zoller, P. (1998). Quantum repeaters: The role of imperfect local operations in quantum communication. Physical Review Letters, 81, 5932-5935.",
      "Ren, J.-G., et al. (2017). Ground-to-satellite quantum teleportation. Nature, 549, 70-73.",
      "Pirandola, S., Eisert, J., Weedbrook, C., Furusawa, A., & Braunstein, S. L. (2015). Advances in quantum teleportation. Nature Photonics, 9, 641-652.",
    ], links: [
      { label: "Paper: Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels", href: "/research/bennett-quantum-teleportation-1993" },
      { label: "Paper: Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication", href: "/research/briegel-quantum-repeaters-1998" },
      { label: "Term: Quantum Teleportation", href: "/dictionary/quantum-teleportation" },
      { label: "Term: Quantum Repeater", href: "/dictionary/quantum-repeater" },
      { label: "Myth: Quantum teleportation transports people and objects like in science fiction", href: "/myths/quantum-teleportation-moves-matter" },
      { label: "Forecast: The Quantum Internet", href: "/future/quantum-internet-future" },
    ], words: 1069 },
  { slug: "two-qubit-entanglement-calculator", title: "Two-Qubit Entanglement Calculator", category: "foundations", level: "Beginner", tagline: "Type in a two-qubit state and read off its concurrence, entanglement entropy, and purity, then see how noise destroys entanglement.", summary: "Enter four amplitudes for a two-qubit pure state and compute concurrence, entanglement entropy in ebits, single-qubit purity, and outcome probabilities, then explore how white noise degrades a Bell state.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Entanglement is the resource behind teleportation, superdense coding, quantum key distribution, and the speedups of many quantum algorithms. For two qubits in a pure state, it can be measured exactly, and the numbers are easy to compute. This calculator lets you set the four amplitudes of a state written as a|00⟩ + b|01⟩ + c|10⟩ + d|11⟩, normalizes them for you, and then reports three standard measures: concurrence, entanglement entropy, and the purity of one qubit.",
          "Concurrence runs from 0 for a product state to 1 for a maximally entangled state such as a Bell state. Entanglement entropy counts how many ebits, or maximally entangled pairs, the state is worth, and it ranges from 0 to 1 for two qubits. Purity tells you how mixed one qubit looks when you ignore the other. Entangled states have mixed subsystems even though the whole system is pure, which is the signature of entanglement.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Pick the Bell state preset and you will see concurrence 1, entropy 1 ebit, and purity 0.5. The probabilities show that the outcomes 00 and 11 each appear half the time, and 01 and 10 never do. Now switch to the product state presets. The state |00⟩ has concurrence 0, and so does |+⟩|+⟩ with all four amplitudes equal to one half, even though its outcome probabilities are spread across all four possibilities. This is an important lesson: random-looking measurement results do not imply entanglement.",
          "Then use the partly entangled preset and move the amplitudes by hand. For example, take amplitudes 0.9 on |00⟩ and 0.436 on |11⟩. The concurrence is 2 × 0.9 × 0.436 = 0.785, and the entropy is about 0.70 ebits. As the two amplitudes become equal the concurrence rises to 1, and as one of them shrinks to zero it falls to 0. A useful rule: the product ad − bc vanishes exactly when the state factors into a product of single-qubit states.",
          "The second panel adds noise. It takes a perfect Bell state and mixes it with the maximally mixed state with weight p for the Bell state, which produces what is called a Werner state. The concurrence of the noisy state is max(0, (3p − 1)/2). So the entanglement vanishes entirely when p drops to one third, even though the state is still partly correlated. This sudden death of entanglement under noise is one reason quantum hardware must be so carefully isolated.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "Entropy and concurrence tell the same story from two angles, and for pure two-qubit states one can be computed from the other. Concurrence is the quantity that generalizes more easily to mixed states, through the formula of Wootters from 1998. Entropy has a direct operational meaning in the limit of many copies: it is the number of Bell pairs that can be distilled from each copy by local operations and classical communication, as shown by Bennett, Bernstein, Popescu, and Schumacher in 1996.",
          "If the verdict says Separable, then the two qubits are independent and no entanglement-based protocol will work with that state. If it says Entangled, then the state violates some form of separability, though it may or may not violate a Bell inequality, since not every entangled state is Bell-nonlocal. For pure states, though, every entangled state violates a Bell inequality, a result known as Gisin's theorem.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "This calculator handles real amplitudes and pure states only, so it does not cover relative phases or mixed states in general. Phases can change which Bell state you have but not the amount of entanglement, so for the quantities shown nothing is lost for pure states with real amplitudes up to local operations. The noise panel uses only white noise on a Bell state, and real noise is often structured, for instance amplitude damping or dephasing, which changes the thresholds.",
        ] },
    ], formulas: [
      { name: "Normalization", expression: "(a, b, c, d) → (a, b, c, d)/√(a² + b² + c² + d²)", note: "Amplitudes are rescaled so the probabilities sum to one." },
      { name: "Concurrence", expression: "C = 2|ad − bc|", note: "For a pure two-qubit state. Zero means a product state, one means maximal entanglement." },
      { name: "Schmidt weights", expression: "λ± = (1 ± √(1 − C²))/2", note: "Eigenvalues of the reduced state of either qubit." },
      { name: "Entanglement entropy", expression: "E = −λ₊ log₂ λ₊ − λ₋ log₂ λ₋", note: "Measured in ebits. Equals 1 for a Bell state." },
      { name: "Purity", expression: "Tr ρ² = 1 − C²/2", note: "Purity of a single qubit. It is 1/2 for a maximally entangled pair." },
      { name: "Werner state", expression: "C = max(0, (3p − 1)/2)", note: "Concurrence of p|Φ⁺⟩⟨Φ⁺| + (1 − p) I/4." },
    ], examples: [
      { title: "A Bell state", steps: [
          "Amplitudes (0.707, 0, 0, 0.707).",
          "ad − bc = 0.5, so C = 1.",
          "Eigenvalues are 1/2 and 1/2, so the entropy is 1 ebit and the purity is 0.5.",
        ], result: "The state is maximally entangled." },
      { title: "A partly entangled state", steps: [
          "Amplitudes (0.9, 0, 0, 0.436).",
          "C = 2 × 0.9 × 0.436 = 0.785.",
          "λ± = (1 ± 0.62)/2, which is 0.81 and 0.19, so E = 0.81 × 0.304 + 0.19 × 2.396 ≈ 0.70 ebits.",
        ], result: "About 70 percent of a Bell pair." },
      { title: "Noise on a Bell state", steps: [
          "Set p = 0.5.",
          "C = (3 × 0.5 − 1)/2 = 0.25 and the fidelity with the Bell state is (3 × 0.5 + 1)/4 = 0.625.",
        ], result: "Still entangled, but only barely. At p = 1/3 the concurrence reaches zero." },
    ], faq: [
      { q: "Can a state with random-looking outcomes be unentangled?", a: "Yes. The state |+⟩|+⟩ gives all four outcomes with equal probability and is a product state. Entanglement is about correlations in all bases, not randomness in one." },
      { q: "What is an ebit?", a: "One ebit is the entanglement of a maximally entangled pair of qubits, such as a Bell state." },
      { q: "Is more entanglement always better?", a: "Not always. Many algorithms and protocols need specific amounts or structures of entanglement, and too much can be as unhelpful as too little." },
    ], references: [
      "Wootters, W. K. (1998). Entanglement of formation of an arbitrary state of two qubits. Physical Review Letters, 80, 2245-2248.",
      "Bennett, C. H., Bernstein, H. J., Popescu, S., & Schumacher, B. (1996). Concentrating partial entanglement by local operations. Physical Review A, 53, 2046-2052.",
      "Werner, R. F. (1989). Quantum states with Einstein-Podolsky-Rosen correlations admitting a hidden-variable model. Physical Review A, 40, 4277-4281.",
      "Horodecki, R., Horodecki, P., Horodecki, M., & Horodecki, K. (2009). Quantum entanglement. Reviews of Modern Physics, 81, 865-942.",
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
      "Schrödinger, E. (1935). Die gegenwärtige Situation in der Quantenmechanik. Die Naturwissenschaften, 23, 807-812.",
    ], links: [
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
      { label: "Term: Bell State", href: "/dictionary/bell-state" },
      { label: "Term: Density Matrix", href: "/dictionary/density-matrix" },
      { label: "Myth: Entanglement lets you send messages faster than light", href: "/myths/entanglement-faster-than-light-messages" },
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
    ], words: 1011 },
  { slug: "grover-search-calculator", title: "Grover Search Calculator", category: "algorithms", level: "Intermediate", tagline: "See exactly how many Grover iterations you need, how success probability rises and falls, and when quantum search actually beats classical search.", summary: "Choose a search space size and the number of marked items, compute the optimal number of Grover iterations and success probability, compare with classical search, and compare wall-clock times at rates you set.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Grover's algorithm searches an unstructured collection of N items for one that satisfies a test, using about the square root of N evaluations of the test instead of about N. It is the most famous quantum algorithm after Shor's, and the speedup is proven to be optimal for unstructured search. But the details are often misunderstood. The algorithm does not find the answer after any number of steps: success probability oscillates, and running too long makes things worse. Also, a square-root speedup in the number of queries does not automatically translate into a faster computer, because each quantum iteration is far slower than a classical check.",
          "This calculator makes those points concrete. Set the size of the search space from 2 to 2 to the 128, set the number of marked items, and it computes the optimal iteration count, the success probability after any number of iterations, the expected classical effort, the query speedup, and the wall-clock time for each side given the speeds you choose. The chart shows the full oscillation so you can see the sweet spot and the overshoot.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the Database of 1 million preset. For N around a million and one marked item, the optimal number of iterations is 804, and the success probability at that point is above 99.99 percent. A classical search checks about 524,000 items on average, so the query speedup is about 650 times. Now look at the wall-clock panel. At one billion classical checks per second and ten thousand quantum iterations per second, the classical search takes half a millisecond and the quantum search takes 80 milliseconds. The classical computer wins by a large margin. That is not a flaw in the algorithm. It is the central point of the 2021 analysis by Babbush and coauthors, which showed that quadratic speedups pay off only when the classical computation is already very long.",
          "Next, try the AES-128 key search preset. The search space is 2 to the 128, and the optimal count is about 1.4 times 10 to the 19 iterations. At ten thousand iterations per second that is about 46 million years, and since each iteration must evaluate AES inside a fault-tolerant circuit, ten thousand per second is generous. Grover's algorithm cannot be sped up by simply adding machines, because splitting the search across many devices reduces the speedup, as Zalka showed in 1999. This is why AES-128 is regarded as acceptably secure against quantum attacks.",
          "Finally, uncheck the optimal option and use the iteration slider with the Overshoot demo preset. Success peaks near the optimal count and then falls, reaching nearly zero when the state has rotated past the marked items. When the number of marked items is unknown, the algorithm must be run with varied iteration counts, as in the method of Boyer, Brassard, Høyer, and Tapp.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The calculator treats Grover's algorithm as a rotation. The state starts almost perpendicular to the marked subspace, at a small angle θ with sin θ = √(M/N), and each iteration rotates it by 2θ toward the marked items. After k iterations the success probability is sin² of (2k + 1)θ. The best k brings the angle close to 90 degrees. Because the rotation is by a fixed amount, doing more than the optimal number of iterations starts to rotate the state back toward the unmarked items.",
          "The speedup figure divides the expected classical checks by the Grover iterations. It is a ratio of queries, not of time, which is why the wall-clock panel exists. For real problems you should also include the cost of implementing the oracle, which usually costs many logical gates, and the overhead of error correction, which makes each logical gate much slower than a classical operation.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model assumes a perfect noiseless algorithm and an oracle that takes one iteration step each. It treats classical search as random sampling without replacement. In practice, many search problems have structure that classical algorithms exploit, so the true classical baseline can be far better than N/2. And real implementations suffer from errors that reduce success probability unless the machine is fault tolerant. Treat the results as the ideal-case benchmark against which more careful resource estimates should be compared.",
        ] },
    ], formulas: [
      { name: "Rotation angle", expression: "θ = arcsin √(M/N)", note: "Initial angle between the uniform state and the marked subspace." },
      { name: "Success probability", expression: "P(k) = sin²((2k + 1)θ)", note: "Probability of measuring a marked item after k Grover iterations." },
      { name: "Optimal iterations", expression: "k_opt ≈ round( π/(4θ) − 1/2 ) ≈ (π/4)√(N/M)", note: "The first peak of P(k)." },
      { name: "Classical expected checks", expression: "(N + 1)/(M + 1)", note: "Expected number of random checks until a marked item is found, without replacement." },
      { name: "Query speedup", expression: "(N + 1)/((M + 1)·k_opt)", note: "Ratio of classical checks to Grover iterations. Not the same as a time speedup." },
    ], examples: [
      { title: "One in a million", steps: [
          "N = 2²⁰ = 1,048,576 and M = 1.",
          "θ = arcsin(1/1024) = 0.000977, so k_opt = round(804.2 − 0.5) = 804.",
          "Classical average is about 524,288 checks, so the query speedup is about 652.",
        ], result: "At 10⁹ checks per second classical and 10⁴ iterations per second quantum, classical takes 0.52 ms and quantum 80 ms." },
      { title: "Brute-forcing AES-128", steps: [
          "N = 2¹²⁸, M = 1, so k_opt ≈ 0.785 × 2⁶⁴ = 1.45 × 10¹⁹.",
          "At 10⁴ iterations per second the time is 1.45 × 10¹⁵ seconds.",
        ], result: "That is about 46 million years, even with a generous iteration rate." },
      { title: "Many solutions", steps: [
          "N = 1024 and M = 256, so one quarter of items are marked.",
          "θ = arcsin(0.5) = 30°, so k_opt = round(π/(4 × 0.5236) − 0.5) = round(1.0) = 1.",
        ], result: "A single Grover iteration finds a marked item with probability 100 percent here." },
    ], faq: [
      { q: "Why does success probability drop if I run more iterations?", a: "Each iteration rotates the state by a fixed angle, and after passing the marked direction the state rotates away from it again." },
      { q: "Can Grover's algorithm speed up any search?", a: "It speeds up unstructured search by a square root. If the problem has structure, a classical algorithm may already be faster than the Grover bound." },
      { q: "Does a square-root speedup make quantum search practical?", a: "Only for problems where the classical search is extremely long, because quantum iterations are slow and error correction adds large overheads." },
    ], references: [
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. Proceedings of the 28th Annual ACM Symposium on Theory of Computing, 212-219.",
      "Boyer, M., Brassard, G., Høyer, P., & Tapp, A. (1998). Tight bounds on quantum searching. Fortschritte der Physik, 46, 493-505.",
      "Bennett, C. H., Bernstein, E., Brassard, G., & Vazirani, U. (1997). Strengths and weaknesses of quantum computing. SIAM Journal on Computing, 26, 1510-1523.",
      "Zalka, C. (1999). Grover's quantum searching algorithm is optimal. Physical Review A, 60, 2746-2751.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Jaques, S., Naehrig, M., Roetteler, M., & Virdia, F. (2020). Implementing Grover oracles for quantum key search on AES and LowMC. EUROCRYPT 2020, LNCS 12106, 280-310.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
      { label: "Myth: A quantum computer tries every possible answer at the same time", href: "/myths/quantum-computers-try-all-answers" },
      { label: "Myth: Quantum computers will break all encryption, including AES and hashes", href: "/myths/quantum-breaks-all-encryption-including-aes" },
      { label: "Forecast: Quantum Advantage by 2030: What to Expect and What Not To", href: "/future/quantum-advantage-2030-future" },
    ], words: 1085 },
  { slug: "classical-simulation-memory-calculator", title: "Classical Simulation Memory Calculator", category: "foundations", level: "Beginner", tagline: "Find out how many qubits your laptop, GPU, or supercomputer can simulate exactly, and see why 50 qubits is such a famous line.", summary: "Compute the memory needed to store an n-qubit state vector at a chosen precision, how many qubits fit in your hardware, how many devices you need, and how long a circuit takes when the simulation is memory-bandwidth bound.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "The founding argument for quantum computing is that classical computers cannot efficiently simulate quantum systems, because the description of n qubits needs 2 to the n complex numbers. This calculator turns that statement into concrete numbers. Choose the number of qubits and the precision used to store each amplitude, and it tells you the size of the state vector in bytes, whether it fits in the memory you specify, how many devices you would need, and how long each gate takes if the simulation is limited by memory bandwidth.",
          "This is the method used by state-vector simulators such as those in Qiskit, Cirq, and cuQuantum. It is exact, but its cost doubles with each added qubit. The calculator's chart plots memory against qubit count on a logarithmic axis, along with reference lines for a laptop, a high-end GPU, and the memory scale of the largest supercomputers, so you can see where each machine runs out of room.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Use the Laptop preset first. With 16 GB of memory and double precision, you can fit 29 qubits, or 30 if you count 16 binary gigabytes. That number is worth remembering: each additional qubit doubles the requirement, so 31 qubits already needs 34 GB, and 40 qubits needs about 17.6 terabytes. Switch to single precision and you gain exactly one qubit, since halving the bytes per amplitude only halves the memory. Then try the single 80 GB GPU preset: you can reach 32 qubits in double precision, and a node of eight such GPUs reaches 35.",
          "Then move the qubit slider to 45. In 2017, Häner and Steiger simulated a 45-qubit circuit on a supercomputer using about half a petabyte of memory. At 53 qubits, the size of Google's Sycamore processor, the state vector in double precision takes about 144 petabytes, which exceeds the total memory of any machine ever built. That is why the 2019 supremacy experiment could not be checked by exact simulation, and it is also why classical groups needed cleverer methods, such as tensor networks, to challenge it.",
          "The bandwidth input matters for speed. Applying a gate to a state vector reads and writes each amplitude, so on modern hardware the cost is dominated by moving data, not by arithmetic. The calculator estimates time per gate as twice the state size divided by total bandwidth. A 30-qubit simulation on a GPU with 2 terabytes per second takes about 17 milliseconds per gate, while a 40-qubit simulation on a cluster with the same total memory capacity needs to spread across many devices and takes much longer.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The headline number is the largest circuit that fits. If your circuit is bigger, brute-force state-vector simulation is out of reach, but that does not mean the circuit cannot be simulated at all. Circuits with limited entanglement can be simulated with tensor networks, whose cost depends on the entanglement rather than on the number of qubits. Circuits made only of Clifford gates can be simulated efficiently by the Gottesman-Knill theorem. Noisy circuits can be simpler than they look, as shown by the 2023 result of Aharonov and coauthors. The calculator's callout reminds you of these exceptions.",
          "The quick reference table shows memory for common sizes. It is useful for sanity-checking claims: when a press release says a quantum computer performed a task that no classical computer could, you can check whether the task requires a state-vector approach or admits shortcuts.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model assumes a dense state vector, ignores memory used by the simulator itself, assumes perfect parallel scaling across devices, and treats speed as purely bandwidth bound. Real simulators have overheads, communication costs between nodes can dominate for large runs, and some use tricks such as gate fusion and compression to reduce the cost. The reference line for the largest supercomputers is an approximate round figure. Use the output as an order-of-magnitude guide.",
        ] },
    ], formulas: [
      { name: "Number of amplitudes", expression: "2ⁿ", note: "One complex amplitude for each basis state of n qubits." },
      { name: "Memory", expression: "M = 2ⁿ × b", note: "With b = 8 bytes for single precision complex numbers and 16 bytes for double precision." },
      { name: "Qubits that fit", expression: "n_max = ⌊log₂(M_total / b)⌋", note: "Largest n whose state vector fits in the total memory." },
      { name: "Time per gate", expression: "t ≈ 2M / (devices × bandwidth)", note: "Each gate reads and writes the full state, so the cost is set by memory bandwidth." },
    ], examples: [
      { title: "A laptop", steps: [
          "16 GB of memory, double precision.",
          "n_max = ⌊log₂(16 × 10⁹ / 16)⌋ = ⌊29.9⌋ = 29.",
        ], result: "About 29 or 30 qubits fit, depending on how you count binary gigabytes." },
      { title: "The 45-qubit record", steps: [
          "n = 45 at 16 bytes per amplitude.",
          "M = 2⁴⁵ × 16 = 5.6 × 10¹⁴ bytes.",
        ], result: "About 0.56 petabytes, consistent with the 2017 simulation by Häner and Steiger." },
      { title: "Sycamore scale", steps: [
          "n = 53 at 16 bytes per amplitude.",
          "M = 2⁵³ × 16 = 1.44 × 10¹⁷ bytes.",
        ], result: "About 144 petabytes, far beyond any single machine, which is why the supremacy task was hard to check exactly." },
    ], faq: [
      { q: "Why does each qubit double the memory?", a: "Because adding a qubit doubles the number of basis states, so the number of amplitudes doubles." },
      { q: "Can I simulate 100 qubits?", a: "Not with a state vector. You would need about 2 × 10³¹ bytes. You can simulate special 100-qubit circuits with other methods." },
      { q: "Why not just use compression?", a: "Generic quantum states are not compressible. Compression works only when the state has structure, such as low entanglement." },
    ], references: [
      "Häner, T., & Steiger, D. S. (2017). 0.5 petabyte simulation of a 45-qubit quantum circuit. Proceedings of the International Conference for High Performance Computing, Networking, Storage and Analysis (SC17), 33.",
      "Boixo, S., et al. (2018). Characterizing quantum supremacy in near-term devices. Nature Physics, 14, 595-600.",
      "Pednault, E., et al. (2019). Leveraging secondary storage to simulate deep 54-qubit Sycamore circuits. arXiv:1910.09534.",
      "Gottesman, D. (1998). The Heisenberg representation of quantum computers. arXiv:quant-ph/9807006.",
      "Orús, R. (2014). A practical introduction to tensor networks: Matrix product states and projected entangled pair states. Annals of Physics, 349, 117-158.",
      "Aharonov, D., Gao, X., Landau, Z., Liu, Y., & Vazirani, U. (2023). A polynomial-time classical algorithm for noisy random circuit sampling. STOC '23, 945-957.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Myth: Classical computers can never simulate a quantum computer", href: "/myths/classical-computers-cannot-simulate-quantum-circuits" },
      { label: "Term: Hilbert Space", href: "/dictionary/hilbert-space" },
      { label: "Forecast: Quantum Simulation: The Most Likely Early Scientific Payoff", href: "/future/quantum-simulation-science-future" },
    ], words: 957 },
  { slug: "surface-code-overhead-calculator", title: "Surface Code Overhead Calculator", category: "error-correction", level: "Advanced", tagline: "Turn a physical error rate and an algorithm size into a code distance, a physical qubit count, and a runtime.", summary: "Estimate the surface code distance, physical qubits per logical qubit, total physical qubits, and runtime needed to run an algorithm of a given size, using either a threshold model or a measured error-suppression factor.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Quantum error correction promises reliable computation from unreliable qubits, but the price is overhead. A single logical qubit is encoded across many physical qubits, and the more reliable you need it to be, the more physical qubits you spend. For the surface code, the leading candidate for the first fault-tolerant machines, the overhead is set by one number: the code distance d. A distance-d patch uses roughly 2d² physical qubits and suppresses logical errors exponentially as d grows, provided the physical error rate is below a threshold.",
          "This calculator connects the dots. You enter the physical error rate, the size of the algorithm in logical qubits and logical time steps, the total failure probability you can tolerate, and a few engineering parameters. It finds the smallest odd code distance that keeps the total failure probability within budget, then reports the physical qubits per logical qubit, the total physical qubits including overhead for routing and magic-state factories, and the runtime. The chart shows how the logical error per round falls with distance for your error rate and for neighboring values, so you can see how much a better chip would save.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Begin with the preset called Good target, p = 0.1%. With a threshold of 1 percent, each increase of the distance by 2 suppresses the logical error by a factor of ten, since the ratio p to p_th is one tenth. Setting the algorithm to 100 logical qubits and 10 million logical steps with a 10 percent total failure budget gives a distance of 21, 881 physical qubits per logical qubit, and about 132,000 physical qubits overall. Runtime is about 3.5 minutes at a one microsecond cycle.",
          "Now move the physical error rate up to 0.5 percent. The ratio p to p_th rises to one half, so each step of 2 in distance suppresses errors by only a factor of two, and the required distance jumps to 73 with about 1.6 million physical qubits, twelve times more than before. This is the most important lesson of the calculator: overhead explodes as you approach threshold, and every factor of two in physical error rate buys a large saving. Then try the RSA-scale algorithm preset, which uses 1,500 logical qubits and a billion logical steps. It gives a distance of 27 and about 3.3 million physical qubits at 0.1 percent error, within a factor of a few of the 20 million qubits in the 2019 estimate by Gidney and Ekerå, whose estimate includes many details this simplified model does not.",
          "The second error model replaces the threshold formula with a measured suppression factor Λ. Google Quantum AI reported in 2024 that the logical error of its surface-code memory fell by about a factor of 2.14 each time the distance grew by 2, with a logical error of 0.143 percent per round at distance 7. Choose that preset to see how a measured Λ compares to the idealized threshold curve. Notice how sensitive the result is to Λ: a Λ of 4 instead of 2 cuts the distance needed by about half and the qubit count by about three quarters.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The code distance is the number that determines everything else. Odd distances are used because they allow a majority vote among data qubits. The per-logical overhead of 2d² − 1 comes from the data qubits of a rotated surface code patch plus its measurement qubits. The multiplier you set covers lattice surgery routing between logical qubits and the factories that produce magic states for non-Clifford gates, which in published estimates can take half or more of the machine, though newer methods such as magic state cultivation aim to shrink them.",
          "Runtime follows from the cycle time. Each logical time step takes about d rounds of syndrome extraction, so a distance-27 machine with one-microsecond rounds performs about 37,000 logical steps per second. Slower platforms, such as ions or neutral atoms with millisecond cycles, pay a proportionally longer runtime for the same distance, though they may need fewer qubits if they use denser codes.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The simplified formulas assume independent, identically distributed noise, a fixed prefactor of 0.1, and that every logical qubit sits in a patch of identical distance. Real fault-tolerant compilations vary the distance in different parts of the machine, use more efficient codes such as qLDPC codes, and account for decoder reaction time, which this calculator ignores. The overhead multiplier is a single number standing in for routing, factories, and idle space. The model also ignores correlated errors, leakage, and measurement error beyond what the threshold already captures. Use it to understand scaling, to compare scenarios, and to sanity-check published estimates, not to specify hardware.",
        ] },
    ], formulas: [
      { name: "Logical error per round", expression: "p_L(d) ≈ 0.1 · (p / p_th)^((d + 1)/2)", note: "Standard empirical form for the surface code below threshold, with prefactor about 0.1." },
      { name: "Measured-suppression form", expression: "p_L(d) = ε₃ · Λ^(−(d − 3)/2)", note: "Λ is the factor by which the logical error drops when d increases by 2." },
      { name: "Failure budget", expression: "p_L(d) × Q × T × d ≤ target", note: "Q logical qubits, T logical time steps, each taking d rounds." },
      { name: "Qubits per logical qubit", expression: "N = 2d² − 1", note: "Data plus measurement qubits in a rotated surface code patch." },
      { name: "Total physical qubits", expression: "N_total = N × Q × (overhead multiplier)", note: "The multiplier covers routing and magic-state factories." },
      { name: "Runtime", expression: "t = T × d × t_cycle", note: "Each logical step uses d rounds of syndrome extraction." },
    ], examples: [
      { title: "A small chemistry-style run", steps: [
          "p = 0.1%, p_th = 1%, Q = 100, T = 10⁷, total failure 10%.",
          "Condition: 0.1 × 0.1^((d+1)/2) × 10⁹ × d ≤ 0.1, which first holds at d = 21.",
          "Qubits per logical = 2 × 441 − 1 = 881, total = 881 × 100 × 1.5 = 132,150.",
        ], result: "About 132,000 physical qubits and a 3.5 minute runtime at a 1 µs cycle." },
      { title: "An RSA-scale algorithm", steps: [
          "p = 0.1%, Q = 1,500, T = 10⁹, total failure 10%.",
          "The condition first holds at d = 27, with 1,457 qubits per logical qubit.",
          "Total = 1,457 × 1,500 × 1.5 ≈ 3.3 million; runtime = 10⁹ × 27 × 1 µs ≈ 7.5 hours.",
        ], result: "Same distance as Gidney and Ekerå (d = 27); their larger 20 million qubit total includes factories and layout details." },
      { title: "Near the threshold", steps: [
          "p = 0.5%, the same small run (Q = 100, T = 10⁷).",
          "The ratio p/p_th = 0.5, so d rises to 73 with 10,657 qubits per logical qubit.",
        ], result: "About 1.6 million physical qubits, twelve times the 0.1% case: error rate matters enormously." },
    ], faq: [
      { q: "Why must the physical error rate be below threshold?", a: "Above threshold, adding more qubits adds more places for errors to occur than the code can correct, so logical error grows with distance." },
      { q: "Why does a Λ of 2.14 matter so much?", a: "It is the measured improvement factor per step. Roadmaps need Λ well above 2, because each logical error target of 10⁻⁹ or lower requires many steps in distance." },
      { q: "Do other codes need fewer qubits?", a: "Yes. Quantum LDPC codes can use several times fewer physical qubits per logical qubit for memory, at the cost of longer-range connections." },
    ], references: [
      "Fowler, A. G., Mariantoni, M., Martinis, J. M., & Cleland, A. N. (2012). Surface codes: Towards practical large-scale quantum computation. Physical Review A, 86, 032324.",
      "Dennis, E., Kitaev, A., Landahl, A., & Preskill, J. (2002). Topological quantum memory. Journal of Mathematical Physics, 43, 4452-4505.",
      "Raussendorf, R., & Harrington, J. (2007). Fault-tolerant quantum computation with high threshold in two dimensions. Physical Review Letters, 98, 190504.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum, 5, 433.",
      "Litinski, D. (2019). A game of surface codes: Large-scale quantum computing with lattice surgery. Quantum, 3, 128.",
      "Beverland, M. E., et al. (2022). Assessing requirements to scale to practical quantum advantage. arXiv:2211.07629.",
    ], links: [
      { label: "Paper: Surface Codes: Towards Practical Large-Scale Quantum Computation", href: "/research/fowler-surface-codes-2012" },
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
      { label: "Forecast: Logical Qubits: How Many, How Good, and When", href: "/future/logical-qubit-milestones-future" },
      { label: "Forecast: How the Cost of Useful Quantum Computing Keeps Falling", href: "/future/resource-estimates-future" },
    ], words: 1235 },
  { slug: "circuit-success-probability-calculator", title: "Circuit Success Probability Calculator", category: "error-correction", level: "Beginner", tagline: "Multiply out your gate and readout errors to see the chance that a circuit runs without a single fault, and how many gates your hardware can afford.", summary: "Compute the probability that a circuit has no errors from gate counts and error rates, see which operations dominate, find a two-qubit gate budget, and check whether the circuit would pass a quantum volume style test.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Every quantum gate has a small chance of going wrong, and for circuits without error correction those chances add up. A useful first approximation treats errors as independent: the probability that nothing goes wrong is the product of the success probabilities of every gate and every readout. That product shrinks exponentially with circuit size, which is why a machine with a 0.5 percent two-qubit error can run a hundred gates acceptably and a thousand gates hopelessly.",
          "This calculator multiplies it all out. You enter the number of qubits measured, the counts of single-qubit and two-qubit gates, and the error rate of each kind of operation. It reports the probability of an error-free run, shows which category contributes most to the total error, finds how many two-qubit gates you can afford before the success probability falls to one half, and tests whether a circuit of this quality would pass a quantum volume style check.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the preset called Google Sycamore benchmark. It uses the numbers of the 2019 random circuit experiment: 53 qubits, 1,113 single-qubit gates, 430 two-qubit gates, and per-operation errors of about 0.16 percent for single-qubit gates, 0.62 percent for two-qubit gates, and 3.8 percent for readout. The product model predicts an error-free probability of about 0.15 percent, in good agreement with the measured cross-entropy fidelity of roughly 0.2 percent that Google reported. That agreement is the key empirical fact behind digital error models: for this kind of circuit, total fidelity is approximately the product of component fidelities, which allowed the team to validate its noisy device without simulating it exactly.",
          "Next, try the Noisy early device preset and then the Ion-trap quality preset. Same circuit, same gate counts, very different outcomes: the noisy device succeeds with a probability of a fraction of a percent, while the ion-trap numbers succeed more than half the time. Watch the error-share bars. In most hardware, two-qubit gates dominate, but readout can be a surprisingly large contributor when many qubits are measured, which is why large circuits often need careful readout calibration and mitigation.",
          "The chart shows what happens as you scale up. Each curve is the success probability against the number of two-qubit gates, on log-log axes, for your error rate and for rates three and ten times lower. Cutting the error by a factor of ten extends the usable circuit size by roughly a factor of ten. This is the practical meaning of improving gate fidelity: not a few percent more success, but an order of magnitude more circuit.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The probability of no error is an optimistic estimate of the probability that the output is correct, because some errors cancel or do not change the measured result, and others can be partly corrected by post-processing. It is also a pessimistic estimate of the fraction of runs that are partly correct. For tasks like sampling, where a fraction F of the output is signal and the rest is noise, it is the natural measure of quality. The quantum volume panel uses this fact: ideal random circuits produce heavy outputs, those with above-median probability, with probability about 0.85, while pure noise gives 0.5. The test passes if the measured heavy-output fraction exceeds two thirds, which requires the circuit fidelity to be roughly 48 percent.",
          "The gate budget field answers a planning question: how many two-qubit gates before success drops to 50 percent if only two-qubit errors counted. At a 0.1 percent error that is about 693 gates, and at 0.01 percent it is about 6,900. These figures give a rule of thumb: circuit size you can run is of the order of 1 divided by the error rate.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The product model assumes independent errors that always corrupt the result. Real noise is correlated across qubits and time, some gates have much larger errors than the average, crosstalk can make simultaneous gates worse than isolated ones, and idling errors are not included. The model also ignores the structure of the circuit, so circuits of the same size can behave differently. Treat the output as a quick estimate of scaling, and use device-specific benchmarks for real planning.",
        ] },
    ], formulas: [
      { name: "Success probability", expression: "F = (1 − ε₁)^G₁ · (1 − ε₂)^G₂ · (1 − ε_r)^n", note: "Probability that no operation fails, assuming independent errors." },
      { name: "Error exponent share", expression: "λ_k = −G_k ln(1 − ε_k)", note: "Each operation type contributes to the total exponent; shares are λ_k divided by the sum." },
      { name: "Gate budget", expression: "G₂,max = ln(1/2) / ln(1 − ε₂)", note: "Number of two-qubit gates before success falls to 50 percent, ignoring other errors." },
      { name: "Heavy-output fraction", expression: "h ≈ 0.847·F + 0.5·(1 − F)", note: "Heavy-output probability for noisy random circuits; the test requires h > 2/3." },
    ], examples: [
      { title: "The 2019 Sycamore circuit", steps: [
          "n = 53, G₁ = 1,113, G₂ = 430 with ε₁ = 0.16%, ε₂ = 0.62%, ε_r = 3.8%.",
          "The exponents are 1.78, 2.67, and 2.05, which sum to 6.51.",
          "F = e^(−6.51) = 0.0015.",
        ], result: "About 0.15 percent, close to the roughly 0.2 percent cross-entropy fidelity measured in the experiment." },
      { title: "A modest 20-qubit circuit", steps: [
          "n = 20, G₁ = 200, G₂ = 100, ε₁ = 0.05%, ε₂ = 0.5%, ε_r = 1%.",
          "The exponents are 0.10, 0.50, and 0.20, which sum to 0.80.",
          "F = e^(−0.80) = 0.449, and the heavy-output share is 0.449 × 0.847 + 0.551 × 0.5 = 0.655.",
        ], result: "The circuit succeeds 45 percent of the time and narrowly fails a 2/3 heavy-output test." },
      { title: "Gate budgets", steps: [
          "For ε₂ = 0.1%, G₂,max = 0.693 / 0.0010005 = 693.",
          "For ε₂ = 0.01%, G₂,max ≈ 6,931.",
        ], result: "A tenfold improvement in gate error buys about a tenfold larger circuit." },
    ], faq: [
      { q: "Why do errors multiply?", a: "If each gate independently works with probability 1 − ε, the chance that all of them work is the product of those probabilities." },
      { q: "Is a 1 percent error rate bad?", a: "For error correction, it is near the threshold of the surface code. For a 100-gate circuit without correction, it gives only about a 37 percent chance of success." },
      { q: "Does a low success probability mean the output is useless?", a: "Not always. For sampling and expectation values, a small signal can still be extracted with enough repetitions, as long as the noise is not systematic." },
    ], references: [
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505-510.",
      "Cross, A. W., et al. (2019). Validating quantum computers using randomized model circuits. Physical Review A, 100, 032328.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Kjaergaard, M., et al. (2020). Superconducting qubits: Current state of play. Annual Review of Condensed Matter Physics, 11, 369-395.",
      "Boixo, S., et al. (2018). Characterizing quantum supremacy in near-term devices. Nature Physics, 14, 595-600.",
      "Proctor, T., Rudinger, K., Young, K., Nielsen, E., & Blume-Kohout, R. (2022). Measuring the capabilities of quantum computers. Nature Physics, 18, 75-79.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Validating Quantum Computers Using Randomized Model Circuits", href: "/research/cross-quantum-volume-2019" },
      { label: "Term: Quantum Volume", href: "/dictionary/quantum-volume" },
      { label: "Term: Gate Fidelity", href: "/dictionary/gate-fidelity" },
      { label: "Myth: Quantum computers are perfect machines that do not make errors", href: "/myths/quantum-computers-make-no-errors" },
      { label: "Myth: More qubits always means a better quantum computer", href: "/myths/more-qubits-always-better" },
    ], words: 1086 },
  { slug: "coherence-gate-error-calculator", title: "Coherence and Gate Error Calculator", category: "hardware", level: "Intermediate", tagline: "Turn T1, T2, and gate times into the error floor that decoherence alone imposes, and see how much longer-lived qubits would help.", summary: "Compute decoherence-limited single-qubit and two-qubit gate errors from T1, T2, and gate durations, find how many gates fit within the coherence time, and compare platforms from transmons to trapped ions.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Quantum information is lost to the environment in two main ways. Energy relaxation, with timescale T1, is the decay of an excited state toward the ground state. Dephasing, with timescale T2, is the loss of the phase relationship between the components of a superposition. Both clocks start running when a gate begins, so every gate has a minimum error set by how long it takes compared with the coherence times. A faster gate leaves less time for the environment to interfere, and a longer-lived qubit gives the same speed a lower error.",
          "This calculator turns those three numbers into an error floor. Enter T1, T2, and the durations of single-qubit and two-qubit gates, and it computes the average gate infidelity from decoherence alone, the number of two-qubit gates that fit inside one dephasing time, and the circuit depth at which decoherence alone would reduce the success probability to one half. The chart shows how the error floor depends on gate time for your coherence and for qubits ten and one hundred times longer lived.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Use the Typical transmon preset first, with T1 of 150 microseconds, T2 of 120 microseconds, a 30 nanosecond single-qubit gate, and a 100 nanosecond two-qubit gate. The decoherence floor is about 0.012 percent for the single-qubit gate and 0.078 percent for the two-qubit gate. Real devices usually show larger errors, around 0.1 to 0.5 percent for two-qubit gates, so decoherence is only part of the story, but it sets a hard minimum. Roughly 1,200 two-qubit gates fit inside one T2.",
          "Now try the Trapped ion preset. The coherence times are orders of magnitude longer, around a second, but the gates are also orders of magnitude slower, about 100 microseconds. The decoherence floor is similar to the transmon, near 0.007 percent. The lesson is that what matters is the ratio of T2 to gate time, not either number alone. Ions trade speed for coherence, and superconducting circuits trade coherence for speed. Neutral atoms, with fast Rydberg gates and second-long coherence, combine long T2 with moderately fast gates, which is part of their appeal, though other error sources dominate in practice.",
          "The chart makes the improvement path explicit. Reading across the lines at a fixed gate time, ten times longer coherence cuts the decoherence floor by about ten times. That is why materials research, such as the move to tantalum-based transmons, matters, but also why the floor is not the bottleneck once it sits well below 0.1 percent: control errors, crosstalk, leakage, and measurement must also come down. The dashed lines mark 0.1 percent, a common target for gate errors, and 1 percent, the neighborhood of surface code thresholds.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The calculator uses the standard expression for the average fidelity of an idle qubit over a time t with relaxation T1 and dephasing T2, which is F = [3 + e^(−t/T1) + 2e^(−t/T2)] / 6. For short gates it reduces to an infidelity of about t divided by 6 times the sum of 1/T1 and 2/T2. If T2 equals 2·T1, dephasing comes only from relaxation, and no extra pure dephasing exists. T2 cannot exceed 2·T1 for a physical qubit, so the tool caps it and tells you when that happens. The pure dephasing time Tφ follows from 1/Tφ = 1/T2 − 1/(2·T1).",
          "For two-qubit gates, the tool doubles the single-qubit idle error over the gate duration, because both qubits decohere during the operation. This is an approximation that is accurate for small errors and independent noise. It ignores that qubits spend part of the gate in states that decohere faster or slower than idle ones.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "This is a floor and not a prediction. Real gates suffer from control imperfections, calibration drift, leakage out of the qubit states, crosstalk with neighbors, non-Markovian noise from two-level defects, and in some platforms heating or laser noise. The values in the presets are rounded orders of magnitude that vary widely between devices and over time. Use them to build intuition about scaling, and consult device calibration data for specifics.",
        ] },
    ], formulas: [
      { name: "Idle fidelity", expression: "F(t) = [3 + e^(−t/T₁) + 2e^(−t/T₂)] / 6", note: "Average gate fidelity of an idle qubit for duration t under amplitude damping and dephasing." },
      { name: "Error floor", expression: "ε₁(t) = 1 − F(t) ≈ (t/6)(1/T₁ + 2/T₂)", note: "Valid for t much smaller than T1 and T2." },
      { name: "Two-qubit floor", expression: "ε₂ ≈ 2 · ε₁(t_gate)", note: "Both qubits decohere while the gate runs." },
      { name: "Pure dephasing", expression: "1/T_φ = 1/T₂ − 1/(2T₁)", note: "T2 is bounded above by 2·T1." },
      { name: "Gates per coherence time", expression: "N = T₂ / t_gate", note: "How many gates fit before dephasing erases the phase." },
      { name: "Depth budget", expression: "D₅₀ = ln 2 / ε₂", note: "Two-qubit layers before decoherence alone reduces success to 50 percent." },
    ], examples: [
      { title: "A typical transmon", steps: [
          "T1 = 150 µs, T2 = 120 µs, two-qubit gate 100 ns.",
          "ε₁(100 ns) = [3 − e^(−0.000667) − 2e^(−0.000833)]/6 = 0.00039.",
          "ε₂ ≈ 0.00078, N = 120 µs / 0.1 µs = 1,200 gates, and D₅₀ ≈ 890.",
        ], result: "A decoherence floor of about 0.078 percent per two-qubit gate." },
      { title: "A best-in-class lab transmon", steps: [
          "T1 = 1 ms, T2 = 0.8 ms, two-qubit gate 60 ns.",
          "ε₁(60 ns) ≈ 3.5 × 10⁻⁵, so ε₂ ≈ 7 × 10⁻⁵.",
        ], result: "A floor of 0.007 percent, so other error sources dominate completely." },
      { title: "A trapped ion", steps: [
          "T2 = 1 s, T1 ≫ T2, two-qubit gate 100 µs.",
          "ε₁ ≈ (100 µs / 6) × (2 / 10⁶ µs) = 3.3 × 10⁻⁵, so ε₂ ≈ 7 × 10⁻⁵.",
        ], result: "The same floor as the fast transmon, reached by a very different route." },
    ], faq: [
      { q: "Is T2 always less than T1?", a: "T2 is at most 2·T1. It is often smaller than T1 because of extra dephasing noise." },
      { q: "Why do some qubits have very long T1 but short T2?", a: "Because dephasing can be caused by noise that does not change energy, such as fluctuating magnetic or electric fields." },
      { q: "If decoherence is not the bottleneck, why improve T1 and T2?", a: "Longer coherence removes one error source, relaxes the speed requirements on gates, and leaves room to trade speed for fidelity in control." },
    ], references: [
      "Krantz, P., et al. (2019). A quantum engineer's guide to superconducting qubits. Applied Physics Reviews, 6, 021318.",
      "Kjaergaard, M., et al. (2020). Superconducting qubits: Current state of play. Annual Review of Condensed Matter Physics, 11, 369-395.",
      "Place, A. P. M., et al. (2021). New material platform for superconducting transmon qubits with coherence times exceeding 0.3 milliseconds. Nature Communications, 12, 1779.",
      "Bruzewicz, C. D., Chiaverini, J., McConnell, R., & Sage, J. M. (2019). Trapped-ion quantum computing: Progress and challenges. Applied Physics Reviews, 6, 021314.",
      "Saffman, M. (2016). Quantum computing with atomic qubits and Rydberg interactions: progress and challenges. Journal of Physics B, 49, 202001.",
      "Koch, J., et al. (2007). Charge-insensitive qubit design derived from the Cooper pair box. Physical Review A, 76, 042319.",
    ], links: [
      { label: "Paper: Charge-Insensitive Qubit Design Derived from the Cooper Pair Box", href: "/research/koch-transmon-charge-insensitive-qubit-2007" },
      { label: "Paper: Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box", href: "/research/nakamura-cooper-pair-box-1999" },
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: Transmon", href: "/dictionary/transmon" },
      { label: "Forecast: Superconducting Qubits: The Road to 2030", href: "/future/superconducting-qubits-future" },
      { label: "Forecast: Trapped-Ion Quantum Computing: Accuracy First, Scale Next", href: "/future/trapped-ion-quantum-computing-future" },
    ], words: 1051 },
  { slug: "error-mitigation-overhead-calculator", title: "Error Mitigation Overhead Calculator", category: "error-correction", level: "Advanced", tagline: "Find out how many shots probabilistic error cancellation needs for your circuit, and where the mitigation wall hits.", summary: "Estimate the sampling overhead of probabilistic error cancellation from gate counts and error rates, the number of shots and wall-clock time for a target precision, the signal lost without mitigation, and the largest circuit your shot budget can handle.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Before full error correction arrives, researchers use error mitigation to squeeze better answers from noisy devices. One family of methods, probabilistic error cancellation, works by running many randomized variants of a circuit and combining their results with positive and negative weights so that the noise cancels on average. The method can remove bias completely in principle, but it pays with variance: the combined estimator has a larger spread, and the number of shots grows with the square of a sampling overhead γ that increases exponentially with the amount of noise in the circuit.",
          "This calculator lets you see the exponential price. Enter the gate counts and error rates, the precision you want, the speed of the machine, and the total number of shots you can afford. It computes the noise strength λ, the sampling overhead γ, the shots required, the time they take, and the fraction of the true signal that survives if you do not mitigate at all. It also reports the largest noise strength your shot budget can mitigate, expressed as a number of two-qubit gates.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Open the Small VQE circuit preset. With 60 two-qubit gates at 0.5 percent error and 150 single-qubit gates at 0.05 percent, the noise strength is about 0.375, which gives a sampling overhead of 2.1 and about 180,000 shots for a precision of 0.005. At 5,000 shots per second that takes about 36 seconds. Mitigation is cheap here. Now open the Utility-style circuit preset, which uses 2,880 two-qubit gates at 0.2 percent error. The noise strength is about 6.8, the overhead exceeds 700,000, and the required shots reach 10 to the 15, which is out of reach. This is why large experiments, such as the 127-qubit utility experiment of 2023, used cheaper methods such as zero-noise extrapolation, which trades guaranteed unbiasedness for a feasible cost.",
          "The first chart plots shots against circuit size on log-log axes, with a horizontal line at your budget. The curve rises faster than any power law, because the number of shots grows as the exponential of twice the noise strength squared. Where it crosses your budget line is the mitigation wall. For a budget of 10⁸ shots and a precision of 0.01, the wall sits at a noise strength of about 2.3, which is roughly 770 two-qubit gates at 0.3 percent error. The second chart shows the signal that survives without mitigation, which decays exponentially as well. Together the charts show the dilemma: without mitigation the answer is biased, and with it the cost explodes.",
          "Try improving the hardware. Lower the two-qubit error from 0.3 percent to 0.1 percent and watch the wall move out by a factor of three. Halving the error rate does not merely halve the cost; it can reduce the shots needed by many orders of magnitude for a fixed circuit, which is why hardware improvement is worth more than any mitigation trick.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The overhead γ is the factor by which the one-norm of the quasi-probability decomposition exceeds one, and shots scale as γ² over the square of the target precision. For Pauli noise of total strength λ, the overhead is approximately e^(2λ), with exact values depending on the noise model. The unmitigated signal factor e^(−λ) is the approximate circuit fidelity: if the noise were a global depolarizing channel, the measured expectation value would be damped by that factor.",
          "Theory says the exponential cost is not an artifact of one method. Takagi and coauthors in 2022 and Quek and coauthors in 2024 proved that any error mitigation strategy needs an exponentially growing number of samples in the circuit depth under realistic noise, which means mitigation extends the reach of noisy devices modestly but cannot replace error correction.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model uses the simple exponential approximation for the sampling overhead and assumes that every gate has Pauli noise of the stated strength, that errors are independent, and that the noise has been characterized exactly, which is itself costly. It ignores readout error mitigation, the cost of learning the noise model, drift between calibration and execution, and the benefit of exploiting circuit structure. Other mitigation methods, such as zero-noise extrapolation and symmetry verification, have different cost profiles. Use the tool to understand why the cost grows so fast, not to forecast a particular experiment.",
        ] },
    ], formulas: [
      { name: "Noise strength", expression: "λ ≈ Σ εᵢ = ε₂G₂ + ε₁G₁", note: "Expected number of faults in the circuit." },
      { name: "Sampling overhead", expression: "γ ≈ e^(2λ)", note: "For Pauli noise inverted by probabilistic error cancellation." },
      { name: "Shots required", expression: "N ≈ γ² / δ²", note: "δ is the target standard error on an expectation value bounded by one." },
      { name: "Unmitigated signal", expression: "s ≈ e^(−λ)", note: "Damping of the expectation value under global depolarizing noise." },
      { name: "Mitigation wall", expression: "λ_max = ½ ln(δ√S)", note: "Largest noise strength mitigable with S total shots at precision δ." },
    ], examples: [
      { title: "A small variational circuit", steps: [
          "ε₂ = 0.5%, G₂ = 60, ε₁ = 0.05%, G₁ = 150, δ = 0.005.",
          "λ = 0.30 + 0.075 = 0.375, so γ = e^(0.75) = 2.12.",
          "N = 4.48 / (0.005)² ≈ 1.8 × 10⁵ shots.",
        ], result: "About 36 seconds at 5,000 shots per second." },
      { title: "A utility-scale circuit", steps: [
          "ε₂ = 0.2%, G₂ = 2,880, ε₁ = 0.02%, G₁ = 5,000, δ = 0.02.",
          "λ = 5.76 + 1.0 = 6.76, so γ = e^(13.5) ≈ 7.4 × 10⁵.",
          "N ≈ (7.4 × 10⁵)² / (0.02)² ≈ 1.4 × 10¹⁵.",
        ], result: "Far beyond any shot budget, which is why such experiments use cheaper, biased mitigation." },
      { title: "What a 10⁸ shot budget can handle", steps: [
          "δ = 0.01 and S = 10⁸ give γ_max = 0.01 × 10⁴ = 100.",
          "λ_max = ½ ln 100 = 2.30, and at ε₂ = 0.3% that is about 770 two-qubit gates.",
        ], result: "The mitigation wall for that budget." },
    ], faq: [
      { q: "Is error mitigation the same as error correction?", a: "No. Mitigation reduces bias in estimated averages using extra shots, and it does not protect the quantum state or enable long computations." },
      { q: "Why does the cost grow exponentially?", a: "Each gate's noise needs a correction with weights larger than one, and the overheads multiply across the circuit." },
      { q: "Which mitigation method should I use?", a: "It depends on the circuit. Probabilistic error cancellation is unbiased but expensive, zero-noise extrapolation is cheaper but biased, and symmetry-based methods are cheap when applicable." },
    ], references: [
      "Temme, K., Bravyi, S., & Gambetta, J. M. (2017). Error mitigation for short-depth quantum circuits. Physical Review Letters, 119, 180509.",
      "Endo, S., Benjamin, S. C., & Li, Y. (2018). Practical quantum error mitigation for near-future applications. Physical Review X, 8, 031027.",
      "Kandala, A., et al. (2019). Error mitigation extends the computational reach of a noisy quantum processor. Nature, 567, 491-495.",
      "van den Berg, E., Minev, Z. K., Kandala, A., & Temme, K. (2023). Probabilistic error cancellation with sparse Pauli-Lindblad models on noisy quantum processors. Nature Physics, 19, 1116-1121.",
      "Takagi, R., Endo, S., Minagawa, S., & Gu, M. (2022). Fundamental limits of quantum error mitigation. npj Quantum Information, 8, 114.",
      "Quek, Y., et al. (2024). Exponentially tighter bounds on limitations of quantum error mitigation. Nature Physics, 20, 1648-1658.",
      "Kim, Y., et al. (2023). Evidence for the utility of quantum computing before fault tolerance. Nature, 618, 500-505.",
    ], links: [
      { label: "Paper: Evidence for the Utility of Quantum Computing Before Fault Tolerance", href: "/research/kim-utility-before-fault-tolerance-2023" },
      { label: "Paper: Exponentially Tighter Bounds on Limitations of Quantum Error Mitigation", href: "/research/quek-limits-of-error-mitigation-2024" },
      { label: "Term: Quantum Error Mitigation", href: "/dictionary/quantum-error-mitigation" },
      { label: "Term: NISQ", href: "/dictionary/nisq" },
      { label: "Forecast: Quantum Advantage by 2030: What to Expect and What Not To", href: "/future/quantum-advantage-2030-future" },
    ], words: 1084 },
  { slug: "shot-count-calculator", title: "Quantum Shot Count Calculator", category: "algorithms", level: "Beginner", tagline: "Work out how many times you must run a circuit to estimate a probability, an expectation value, or a molecular energy to the precision you want.", summary: "Compute the number of measurement shots needed for a target margin of error and confidence level, for probabilities, expectation values, sums of Pauli terms, or whole output distributions, and see the run time at your shot rate.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "A quantum computer does not hand you a number. It hands you a random bit string every time you run it, and the quantity you care about, a probability or an average, must be estimated from many repetitions called shots. The more shots you take, the smaller the statistical error, but only slowly: the error falls as one over the square root of the number of shots. This calculator turns that rule into planning numbers for four common situations.",
          "The first is estimating the probability of one outcome. The second is estimating the expectation value of an observable that returns plus or minus one. The third is estimating an energy that is a weighted sum of many Pauli terms, as in variational chemistry, where you must measure many different operators. The fourth is learning an entire output distribution to a given total variation distance, which shows why full tomography of large systems is impossible. For each, the calculator gives the shots needed for your margin and confidence, the run time, and a table of how the cost changes with the margin.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the Fair-coin outcome preset. To estimate an outcome probability of 0.5 within ±1 percentage point at 95 percent confidence, you need about 9,600 shots. Now change the margin to 0.1 percentage points, ten times smaller, and watch the shots grow a hundred times, to 960,000. That is the square-root law at work. The chart plots shots against margin on log-log axes, and the lines for different confidence levels are parallel straight lines with slope minus two.",
          "Next, switch to the Rare outcome preset. For a probability of 0.001 and a margin of 0.0005, the estimate needs about 15,000 shots. Rare events are cheap in absolute terms but expensive in relative terms, because the margin you need shrinks with the probability. A warning appears because the normal approximation is poor for rare events; if you see no events at all, the rule of three says that the 95 percent upper bound on the probability is about three divided by the number of shots.",
          "Then try the Chemistry energy preset. A molecular energy is a sum of hundreds or thousands of Pauli terms, and reaching chemical accuracy of 1.6 milli-Hartree for a 500-term Hamiltonian with average coefficient 0.05 requires about 940 million shots under the standard optimal allocation. At 5,000 shots per second that is more than two days. This kind of arithmetic is why measurement cost, not circuit depth alone, is one of the bottlenecks of variational algorithms, and why researchers invented grouping of commuting terms and techniques such as classical shadows.",
          "The last preset learns a 20-qubit distribution to total variation distance 0.05, which takes of the order of 2²⁰ over 0.05² samples, about 420 million. The count doubles with each added qubit, so learning a full 40-qubit distribution this way is hopeless. Practical protocols avoid learning everything and estimate only the properties they need.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "For a probability p estimated from n shots, the standard error is √(p(1−p)/n). A confidence interval of ±m at confidence level with z-score z needs n = z² p(1−p)/m². The worst case is p = 0.5, so if you do not know p, use it. For an expectation value of an observable with eigenvalues ±1, the variance is 1 − E², so the cost is largest when E = 0. For a sum of Pauli terms with coefficients c_i, the best allocation of shots among terms makes the variance (Σ|c_i|σ_i)²/N, where σ_i ≤ 1 is the standard deviation of term i, so the total shots scale with the square of the one-norm of the coefficients.",
          "These counts are statistical minima. Hardware noise adds bias that no number of shots removes, and error mitigation adds overhead on top, as the mitigation calculator shows. Drift during a long run means that millions of shots may not be statistically identical, so practical protocols interleave calibration.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The calculator uses the normal approximation, which is accurate when n·p and n·(1−p) are both comfortably larger than ten and rough otherwise. It treats shots as independent and identically distributed, and it assumes that the terms of a multi-term observable are measured with the optimal allocation, which is a lower bound. The distribution mode shows a scaling and not a precise count, since constants and logarithmic factors depend on the confidence you want. Real shot rates depend on circuit duration, readout, and reset times and range from about a hundred per second to a hundred thousand per second.",
        ] },
    ], formulas: [
      { name: "Probability estimate", expression: "n = z² · p(1 − p) / m²", note: "Normal approximation for a binomial proportion with margin m and z-score z." },
      { name: "Expectation of a ±1 observable", expression: "n = z² · (1 − ⟨O⟩²) / m²", note: "Variance of a ±1 random variable with mean ⟨O⟩." },
      { name: "Weighted sum of Paulis", expression: "n ≈ z² · (Σ|cᵢ|)² / m²", note: "Optimal shot allocation among terms, using σᵢ ≤ 1." },
      { name: "Output distribution", expression: "n ≈ 2ᵏ / ε²", note: "Samples to learn a distribution over 2ᵏ outcomes to total variation distance ε, up to constants." },
      { name: "Rule of three", expression: "p_upper ≈ 3/n", note: "95 percent upper bound when no events are seen in n shots." },
    ], examples: [
      { title: "A fair coin outcome", steps: [
          "p = 0.5, margin ±0.01, 95% confidence (z = 1.96).",
          "n = 3.84 × 0.25 / 0.0001 = 9,604.",
        ], result: "About 9,600 shots. A margin ten times smaller needs a hundred times more." },
      { title: "A chemistry energy", steps: [
          "500 Pauli terms with average |c| = 0.05, so Σ|c| = 25.",
          "Margin 1.6 × 10⁻³, z = 1.96.",
          "n = 3.84 × 625 / (1.6 × 10⁻³)² ≈ 9.4 × 10⁸.",
        ], result: "About 940 million shots, or roughly 2.2 days at 5,000 shots per second." },
      { title: "Learning a distribution", steps: [
          "20 qubits, so 2²⁰ ≈ 10⁶ outcomes, with ε = 0.05.",
          "n ≈ 1.05 × 10⁶ / 0.0025 ≈ 4.2 × 10⁸.",
        ], result: "Hundreds of millions of shots for just 20 qubits; the count doubles per added qubit." },
    ], faq: [
      { q: "Why does error shrink so slowly with more shots?", a: "Because averaging independent random samples reduces the standard error only as one over the square root of the number of samples." },
      { q: "How many shots do cloud quantum computers allow?", a: "Limits vary by provider, from thousands to millions per job, and long runs can be split across jobs." },
      { q: "Can I avoid measuring every Pauli term?", a: "Yes. Grouping commuting terms, symmetry reductions, and classical shadows can cut the cost substantially." },
    ], references: [
      "Wecker, D., Hastings, M. B., & Troyer, M. (2015). Progress towards practical quantum variational algorithms. Physical Review A, 92, 042303.",
      "Rubin, N. C., Babbush, R., & McClean, J. (2018). Application of fermionic marginal constraints to hybrid quantum algorithms. New Journal of Physics, 20, 053020.",
      "Huang, H.-Y., Kueng, R., & Preskill, J. (2020). Predicting many properties of a quantum system from very few measurements. Nature Physics, 16, 1050-1057.",
      "Brown, L. D., Cai, T. T., & DasGupta, A. (2001). Interval estimation for a binomial proportion. Statistical Science, 16, 101-133.",
      "Wilson, E. B. (1927). Probable inference, the law of succession, and statistical inference. Journal of the American Statistical Association, 22, 209-212.",
      "McClean, J. R., Romero, J., Babbush, R., & Aspuru-Guzik, A. (2016). The theory of variational hybrid quantum-classical algorithms. New Journal of Physics, 18, 023023.",
    ], links: [
      { label: "Paper: Predicting Many Properties of a Quantum System from Very Few Measurements", href: "/research/huang-classical-shadows-2020" },
      { label: "Paper: A Variational Eigenvalue Solver on a Photonic Quantum Processor", href: "/research/peruzzo-variational-eigensolver-2014" },
      { label: "Algorithm: Variational Quantum Eigensolver (VQE)", href: "/algorithms/vqe" },
      { label: "Term: Variational Quantum Algorithm", href: "/dictionary/variational-quantum-algorithm" },
      { label: "Forecast: Quantum Meets Supercomputing: Hybrid Systems and Quantum Data Centers", href: "/future/quantum-hpc-integration-future" },
    ], words: 1119 },
  { slug: "quadratic-speedup-breakeven-calculator", title: "Quadratic Speedup Break-Even Calculator", category: "algorithms", level: "Intermediate", tagline: "Find the problem size and runtime at which a quantum speedup actually beats a classical machine once real clock speeds and overheads are counted.", summary: "Compare classical and quantum runtimes using your own speeds, parallelism, and per-step costs, and find the break-even problem size and runtime for quadratic, quartic, or custom speedups.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Headlines about quantum speedups quote how the number of steps scales with problem size, for example N steps classically against the square root of N steps on a quantum computer. But a speedup in step count is not a speedup in time. A classical processor can check a billion candidates per second, and it can be multiplied across thousands of cores. A fault-tolerant quantum computer performs logical operations at kilohertz to megahertz rates, and each quantum step may itself contain thousands of logical operations. So a quantum algorithm with a better exponent can lose for every problem that fits in a reasonable runtime.",
          "This calculator makes that trade-off explicit. You describe the classical machine by its operations per second, number of cores, and operations per candidate. You describe the quantum machine by its logical clock rate and the number of logical operations in one step of the algorithm. You choose the scaling exponents of both approaches, so you can model Grover's quadratic speedup, hypothetical higher-order speedups, or any other pair. It then reports the break-even problem size, the runtime at break-even, and a comparison at any size you choose.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Begin with the preset called Grover vs one CPU core. The classical machine checks a billion candidates per second. The quantum machine performs 100,000 logical operations per second, and each Grover iteration costs 10,000 of them, so it completes ten iterations per second. The classical time grows as N and the quantum time as the square root of N. The two curves cross at N = 10 to the 16, where each side takes about 10 million seconds, roughly 116 days. For any job shorter than that, the classical computer wins.",
          "Now switch to the preset called Grover vs 1,000-core cluster. Giving the classical side a thousand cores multiplies the break-even size by a million, because the break-even depends on the square of the speed ratio. The crossover moves to N = 10 to the 22 and a runtime of about 317 years. In other words, if a classical cluster can attack the same unstructured search in parallel, a square-root speedup effectively never pays off. This is the central conclusion of the 2021 analysis by Babbush and coauthors, and it is why researchers hunt for higher-order speedups.",
          "The preset called Cheap oracle, fast logical clock shows the optimistic end: if each iteration costs only 100 logical operations and the logical clock runs at a megahertz, the break-even drops to N = 10 to the 10 and a runtime of 10 seconds. That kind of efficiency is far from what real oracles achieve, but it shows which levers matter. Finally, try the quartic speedup preset, where the quantum exponent is 0.25. Even against 1,000 classical cores, the crossover falls to about 5 times 10 to the 14 and a runtime under ten minutes. A bigger gap in exponents pays off far sooner, because the break-even size shrinks as the ratio of speeds raised to one over the exponent gap.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "Break-even is the point where both machines take the same time. Below that size the classical machine is faster, and above it the quantum machine wins by a growing factor. The runtime at break-even is the most informative number: it tells you how long a problem must take before quantum helps. A speedup whose break-even runtime is years is useful only for problems that would otherwise be impossible, and a speedup whose break-even is seconds is useful nearly everywhere.",
          "The chart plots both runtimes against problem size on log-log axes. The quantum curve starts above the classical curve, because each step is slow, but has a shallower slope, so it eventually crosses. The horizontal lines at one hour and one year help you see where the crossover sits relative to practical timescales. If the crossing is above the one-year line, think carefully before relying on the speedup.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model treats both algorithms as pure power laws with a single constant, ignores error-correction overhead beyond what you fold into the logical clock rate, assumes the classical side parallelizes perfectly, and ignores data-loading costs, which can erase quantum speedups for problems with large inputs. Hoefler, Häner, and Troyer argued in 2023 that realistic advantage is likely only for problems with small data and large compute. Real algorithms have polylogarithmic factors and structure that classical solvers can exploit, so the actual crossover can be better or worse. Use the calculator to build intuition about which parameters matter, not to forecast a specific application.",
        ] },
    ], formulas: [
      { name: "Classical time", expression: "t_C(N) = N^a · c / (R_C · P)", note: "a is the classical exponent, c operations per check, R_C operations per second per core, P cores." },
      { name: "Quantum time", expression: "t_Q(N) = N^b · C_q / R_Q", note: "b is the quantum exponent, C_q logical operations per step, R_Q logical operations per second." },
      { name: "Break-even size", expression: "N* = (C_q · R_C · P / (R_Q · c))^(1/(a − b))", note: "The size at which the two times are equal." },
      { name: "Break-even runtime", expression: "t* = (N*)^a · c / (R_C · P)", note: "How long the crossover problem takes on either machine." },
    ], examples: [
      { title: "Grover against a single core", steps: [
          "R_C = 10⁹, P = 1, c = 1, C_q = 10⁴, R_Q = 10⁵, a = 1, b = 0.5.",
          "Candidate checks per second 10⁹, quantum steps per second 10, ratio 10⁸.",
          "N* = (10⁸)² = 10¹⁶ and t* = 10¹⁶ / 10⁹ = 10⁷ seconds.",
        ], result: "Break-even at about 116 days of runtime." },
      { title: "Grover against a thousand cores", steps: [
          "Same as above with P = 1,000.",
          "Ratio 10¹¹, so N* = 10²², and t* = 10²² / 10¹² = 10¹⁰ seconds.",
        ], result: "About 317 years. Parallel classical hardware wipes out a square-root speedup." },
      { title: "A quartic speedup", steps: [
          "P = 1,000, a = 1, b = 0.25, ratio 10¹¹.",
          "N* = (10¹¹)^(1/0.75) = 4.6 × 10¹⁴ and t* ≈ 4.6 × 10¹⁴ / 10¹² ≈ 460 seconds.",
        ], result: "The crossover is under ten minutes, so higher-order speedups matter far more than quadratic ones." },
    ], faq: [
      { q: "Is Grover's algorithm useless then?", a: "No, it is optimal for unstructured search and widely useful as a building block, but on its own it rarely pays off against parallel classical hardware for practical problem sizes." },
      { q: "What kinds of speedups would pay off?", a: "Superpolynomial speedups, such as Shor's algorithm, and perhaps polynomial ones of high order, such as cubic or quartic." },
      { q: "Does faster hardware change the picture?", a: "Yes. Raising the logical clock rate or cutting the per-step cost moves the break-even to smaller problems, which is why architecture work on speed matters." },
    ], references: [
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Hoefler, T., Häner, T., & Troyer, M. (2023). Disentangling hype from practicality: On realistically achieving quantum advantage. Communications of the ACM, 66(5), 82-87.",
      "Campbell, E., Khurana, A., & Montanaro, A. (2019). Applying quantum algorithms to constraint satisfaction problems. Quantum, 3, 167.",
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Montanaro, A. (2016). Quantum algorithms: an overview. npj Quantum Information, 2, 15023.",
      "Dalzell, A. M., et al. (2023). Quantum algorithms: A survey of applications and end-to-end complexities. arXiv:2310.03011.",
    ], links: [
      { label: "Paper: Focus Beyond Quadratic Speedups for Error-Corrected Quantum Advantage", href: "/research/babbush-beyond-quadratic-speedups-2021" },
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
      { label: "Myth: Quantum computers can solve any hard problem instantly", href: "/myths/quantum-solves-np-hard-instantly" },
      { label: "Forecast: Quantum Optimization and Logistics: Promise Versus Proof", href: "/future/quantum-optimization-logistics-future" },
    ], words: 1129 },
  { slug: "rsa-break-resource-estimator", title: "RSA and Elliptic Curve Break Resource Estimator", category: "security", level: "Advanced", tagline: "See how many qubits and how much time it takes to break RSA or an elliptic curve key, and how that changes with key size and hardware quality.", summary: "Scale published resource estimates for Shor's algorithm to your key size and physical error rate, with logical qubits, Toffoli gates, code distance, physical qubits, and runtime for RSA and elliptic curve keys.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Shor's algorithm threatens the public-key cryptography that secures the internet, but how big a quantum computer does it take, and how long would the attack run? The answer has changed enormously over the last decade, mostly because of better algorithms and error correction schemes. A 2012 estimate needed about a billion physical qubits to factor a 2,048-bit number. Gidney and Ekerå estimated 20 million noisy qubits and eight hours in 2019. Gidney estimated fewer than one million noisy qubits and under a week in 2025. Elliptic curve keys need fewer logical qubits than RSA keys of comparable security, which makes them an earlier target.",
          "This calculator lets you explore those estimates. Choose one of three published methods, set the key size and the physical error rate, and it computes the number of logical qubits, the number of Toffoli gates, the surface code distance needed to keep the total failure probability at 10 percent, the resulting physical qubit count, and the runtime. A chart shows how physical qubits scale with key size for all three methods at your error rate.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the preset RSA-2048 (2021 method). At a physical error rate of 0.1 percent, the model gives about 6,200 logical qubits, 2.6 billion Toffoli gates, a code distance of 29, roughly 23 million physical qubits, and a runtime of about seven hours. These numbers sit close to the headline result of Gidney and Ekerå, who reported 20 million qubits and eight hours with a distance of 27; the small differences come from details of their layout that a simple model does not capture. Now switch to the 2025 method. The logical qubit count drops to about 1,400 because of approximate residue arithmetic, and the physical count to under 900,000 because of denser storage and cheaper magic states, while the runtime rises to about six days because the circuit uses more operations. This is the central trade-off of the new design: fewer qubits, more time.",
          "Next, change the physical error rate. Moving from 0.1 percent to 0.01 percent cuts the code distance from 29 to 15 in the 2021 method and the physical qubit count from 23 million to about 6 million, a factor of nearly four. Raising the error rate to 0.3 percent pushes the distance to 57 and the qubit count to nearly 90 million. This sensitivity is why error rates, not just qubit counts, decide when cryptographically relevant machines arrive.",
          "Then compare key sizes. Doubling an RSA key from 2,048 to 4,096 bits multiplies the Toffoli count by about eight and the qubit count by about two to three, a modest price for the defender, which is why longer RSA keys do not provide meaningful protection. Switch to the elliptic curve method and set 256 bits. Elliptic curve discrete logarithms need about 2,330 logical qubits but more than 10 to the 11 Toffoli gates in the 2017 design, so under this model the machine is smaller than for RSA-2048 but runs for weeks. Later papers cut the gate count by orders of magnitude, so treat the elliptic curve option as an older upper bound.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The logical qubit and Toffoli counts come from the algorithm: they depend on the key size and the arithmetic circuits used. The code distance, physical qubits, and runtime depend on the hardware model. The distance is the smallest odd value for which the surface code keeps the whole computation within a 10 percent failure budget, using the same empirical error formula as the surface code overhead calculator. Physical qubits include a multiplier for routing and magic state factories, calibrated so that the 2021 method reproduces the published 20 million figure. Runtime assumes the machine is limited by the time the classical controller needs to react to each Toffoli measurement, which is the regime assumed in the published estimates.",
          "The gap panel compares the result with a chip of 1,000 physical qubits, roughly the scale of today's largest superconducting processors. A factor of tens of thousands in qubits, plus logical error rates several orders of magnitude lower than anything demonstrated at scale, is the distance still to travel. But the history of the estimates shows that software and architecture improvements have moved the target by factors of twenty or more in six years, which is why security planners treat any single number with caution.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "This is a scaling model calibrated to published headline figures, not a reimplementation of the papers. It uses a single empirical error formula, a fixed overhead multiplier, and rough scaling laws in key size, and the 2025 method is scaled linearly from one data point. It ignores decoder and control costs, correlated errors, the possibility of using qLDPC or cat-qubit architectures that would cut qubit counts further, and many algorithmic refinements. Elliptic curve estimates in the literature range over orders of magnitude depending on the design. Use the tool to see how the numbers scale and why migration deadlines matter, and consult the original papers for precise figures.",
        ] },
    ], formulas: [
      { name: "RSA logical qubits (2021)", expression: "L ≈ 3n + 0.002 n log₂ n", note: "Gidney and Ekerå scaling for an n-bit modulus." },
      { name: "RSA Toffoli count (2021)", expression: "T ≈ 0.3 n³ + 0.0005 n³ log₂ n", note: "About 2.6 × 10⁹ for n = 2,048." },
      { name: "RSA anchor (2025)", expression: "L ≈ 1,400, T ≈ 6.5 × 10⁹ at n = 2,048", note: "Scaled as L ∝ n and T ∝ n³ in this calculator." },
      { name: "Elliptic curve logical qubits", expression: "L = 9n + 2⌈log₂ n⌉ + 10", note: "Roetteler et al. 2017; 2,330 for a 256-bit curve." },
      { name: "Failure budget", expression: "0.1 · (p/p_th)^((d+1)/2) · L · T · d ≤ 0.1", note: "Used to choose the smallest odd code distance d, with p_th = 1 percent." },
      { name: "Physical qubits", expression: "N = L · (2d² − 1) · 2.2", note: "The multiplier 2.2 is calibrated to the published 20 million qubit figure." },
      { name: "Runtime", expression: "t = T × (reaction time)", note: "Reaction-limited execution, with the 2025 method calibrated to under a week." },
    ], examples: [
      { title: "RSA-2048 with the 2021 method", steps: [
          "p = 0.1%, reaction time 10 µs.",
          "L = 3 × 2,048 + 0.002 × 2,048 × 11 = 6,189 and T = 2.6 × 10⁹.",
          "The failure budget gives d = 29, so N = 6,189 × 1,681 × 2.2 ≈ 2.3 × 10⁷ and t = 2.6 × 10⁹ × 10 µs ≈ 7.3 hours.",
        ], result: "About 23 million physical qubits and seven hours, within about 15 percent of the published figure." },
      { title: "RSA-2048 with the 2025 method", steps: [
          "L ≈ 1,399 and T = 6.5 × 10⁹ at p = 0.1%.",
          "N = 641 × 1,399 ≈ 897,000 and t = 6.5 × 10⁹ × 80 µs ≈ 6 days.",
        ], result: "Under a million qubits but about six days, matching the headline of the 2025 paper." },
      { title: "Ten times better hardware", steps: [
          "Same 2021 method with p = 0.01%.",
          "The distance falls from 29 to 15, so N = 6,189 × 449 × 2.2 ≈ 6.1 × 10⁶.",
        ], result: "A tenfold improvement in physical error rate cuts the qubit count by a factor of about four." },
    ], faq: [
      { q: "Does this mean RSA-2048 will be broken soon?", a: "No. The estimates describe what a machine must have, and no machine near that scale exists. They are a reason to migrate on schedule." },
      { q: "Why do elliptic curves need fewer logical qubits?", a: "Because the group elements are smaller for the same security level. Newer designs also cut the gate count sharply." },
      { q: "Why does the 2025 method take longer?", a: "It trades qubits for time, using more operations on a smaller machine." },
    ], references: [
      "Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum, 5, 433.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Roetteler, M., Naehrig, M., Svore, K. M., & Lauter, K. (2017). Quantum resource estimates for computing elliptic curve discrete logarithms. ASIACRYPT 2017, LNCS 10625, 241-270.",
      "Litinski, D. (2023). How to compute a 256-bit elliptic curve private key with only 50 million Toffoli gates. arXiv:2306.08585.",
      "Fowler, A. G., Mariantoni, M., Martinis, J. M., & Cleland, A. N. (2012). Surface codes: Towards practical large-scale quantum computation. Physical Review A, 86, 032324.",
      "Webber, M., et al. (2022). The impact of hardware specifications on reaching quantum advantage in the fault tolerant regime. AVS Quantum Science, 4, 013801.",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Myth: Making RSA keys bigger is enough to protect against quantum computers", href: "/myths/bigger-rsa-keys-make-it-quantum-safe" },
      { label: "Forecast: How the Cost of Useful Quantum Computing Keeps Falling", href: "/future/resource-estimates-future" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1299 },
  { slug: "quantum-sensing-precision-calculator", title: "Quantum Sensing Precision Calculator", category: "hardware", level: "Intermediate", tagline: "Compare the standard quantum limit, squeezed states, and the Heisenberg limit, and turn phase precision into clock stability.", summary: "Compute the phase uncertainty for N probes at the standard quantum limit, with squeezed states under loss, and at the Heisenberg limit, then convert to fractional frequency stability for a clock and find how many probes a target needs.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Quantum sensors measure tiny quantities, such as time, magnetic fields, or gravitational waves, by watching how a quantum state accumulates phase. If you use N independent probes, such as N atoms or N photons, the statistical noise in the measured phase falls as one over the square root of N. This is the standard quantum limit, and it is a consequence of the random outcomes of independent quantum measurements. Entangled or squeezed states can beat it. In the ideal case the phase uncertainty falls as one over N, the Heisenberg limit, which for a million probes is a thousand times better.",
          "This calculator puts numbers on those statements. You choose the number of probes, how long each measurement takes, the total averaging time, and the transition frequency of the clock or sensor. You also choose how strongly the probe states are squeezed and how much loss or decoherence is present. It reports the phase uncertainty at the three limits, the fractional frequency instability that results for a clock, and how many probes are needed to reach a target precision with and without entanglement.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Begin with the preset Optical lattice clock (strontium). With 10,000 atoms, one second per interrogation, 10,000 seconds of averaging, and a 429 terahertz transition, the standard quantum limit on phase is 0.01 radians, and the fractional frequency instability is about 4 times 10 to the minus 20. That is the quantum projection noise floor for such a clock. Real optical clocks reach a few times 10 to the minus 19 for long averaging, limited by laser noise, dead time between measurements, and systematic shifts. Now raise the squeezing to 10 decibels with a loss fraction of 20 percent. The noise variance factor is 0.1 times 0.8 plus 0.2, which is 0.28, so the phase uncertainty improves by about 1.9 times, far less than the factor of 3.2 that 10 decibels would give with no loss. The calculator shows why: loss mixes uncorrelated noise back in and sets a ceiling.",
          "Next, drag the loss slider to zero. The improvement becomes 3.16 times, the full 10 decibels, and with 15 decibels it reaches 5.6 times. Real systems struggle to keep both high squeezing and low loss. Gravitational wave detectors such as LIGO reached a few decibels of squeezing in practice in 2019, and optical clock experiments have demonstrated spin squeezing of several decibels on an optical transition, as in the work of Pedrozo-Peñafiel and coauthors in 2020. The theoretical bound by Demkowicz-Dobrzański, Kołodyński, and Guţă in 2012 shows that for independent loss or dephasing, the Heisenberg 1 over N scaling cannot be sustained, and the best possible improvement is a constant factor, which is exactly what the squeezed-with-loss curve in the chart shows.",
          "Finally, use the target slider. To reach a phase precision of one milliradian you need a million independent probes at the standard limit but only a thousand perfectly entangled ones. This is the promise of quantum metrology, and the reason that entanglement is attractive for sensors where adding more probes is expensive. The honest message of the calculator is that the promise is real but fragile.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The phase uncertainty applies to a single shot with N probes. The fractional frequency instability of a clock after a total averaging time T follows from dividing by the phase accumulated per shot, 2π times f₀ times the interrogation time τ, and averaging over T/τ shots. At the standard quantum limit this gives the familiar expression 1/(2π f₀ √(N τ T)). Longer interrogation time, higher transition frequency, more atoms, and longer averaging all help, which is why optical clocks beat microwave clocks by a factor of ten thousand in the quantum noise floor.",
          "The squeezed curve uses the standard loss model for squeezed light, in which the noise is the squeezed variance weighted by the transmission plus the vacuum noise weighted by the loss. The Heisenberg curve is the ideal bound and is shown dashed because real devices rarely reach it. The gap between the middle and lower curves is the price of imperfection.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The tool assumes ideal measurements at the quantum projection noise level, independent shots, and squeezing described by a single number. It does not model dead time, laser noise, technical noise, drifts, or systematic shifts, which dominate most real sensors. The Heisenberg bound shown assumes perfect entanglement with no noise during the interrogation, which is not achievable in practice. For atomic clocks and magnetometers, the real limit is usually a mix of quantum and technical noise, and the quantum floor shown here tells you what would be possible if everything else were perfect.",
        ] },
    ], formulas: [
      { name: "Standard quantum limit", expression: "Δφ_SQL = 1/√N", note: "Phase uncertainty for N uncorrelated probes in one shot." },
      { name: "Heisenberg limit", expression: "Δφ_HL = 1/N", note: "Ideal bound for maximally entangled probes without noise." },
      { name: "Squeezed with loss", expression: "Δφ = √(e^(−2r)(1 − L) + L) / √N", note: "Squeezing e^(−2r) = 10^(−dB/10) degraded by loss fraction L." },
      { name: "Clock stability", expression: "σ_y(T) = Δφ / (2π f₀ τ √(T/τ))", note: "Fractional frequency instability after averaging time T." },
      { name: "Standard-limit clock", expression: "σ_y = 1/(2π f₀ √(N τ T))", note: "Quantum projection noise limit for N atoms." },
      { name: "Probes needed", expression: "N_SQL = 1/Δφ², N_HL = 1/Δφ", note: "Number of probes for a target phase precision." },
    ], examples: [
      { title: "A strontium lattice clock", steps: [
          "N = 10⁴, τ = 1 s, T = 10⁴ s, f₀ = 4.29 × 10¹⁴ Hz.",
          "Δφ_SQL = 0.01 rad.",
          "σ_y = 0.01 / (2π × 4.29 × 10¹⁴ × 1 × 100) = 3.7 × 10⁻²⁰.",
        ], result: "A quantum projection noise floor near 4 × 10⁻²⁰, well below what real clocks reach." },
      { title: "Squeezing under loss", steps: [
          "10 dB squeezing gives e^(−2r) = 0.1, with 20 percent loss.",
          "Variance factor = 0.1 × 0.8 + 0.2 = 0.28, so Δφ = √0.28/100 = 0.0053 rad.",
        ], result: "An improvement of 1.9 times, compared with 3.2 times without loss." },
      { title: "Probes for a milliradian", steps: [
          "Target Δφ = 10⁻³ rad.",
          "N_SQL = 1/(10⁻³)² = 10⁶ and N_HL = 1/10⁻³ = 10³.",
        ], result: "A thousand times fewer probes at the Heisenberg limit, if entanglement survives." },
    ], faq: [
      { q: "Why is the standard quantum limit a limit?", a: "Because independent quantum probes give random outcomes, and averaging N of them reduces the noise only as one over the square root of N." },
      { q: "Why can't we just use entangled states everywhere?", a: "Entanglement is fragile. Loss and dephasing erase most of the advantage, leaving at best a constant-factor gain." },
      { q: "Is the Heisenberg limit a violation of the uncertainty principle?", a: "No. It is the best precision allowed by quantum mechanics, and reaching it requires special entangled states." },
    ], references: [
      "Giovannetti, V., Lloyd, S., & Maccone, L. (2004). Quantum-enhanced measurements: beating the standard quantum limit. Science, 306, 1330-1336.",
      "Pezzè, L., Smerzi, A., Oberthaler, M. K., Schmied, R., & Treutlein, P. (2018). Quantum metrology with nonclassical states of atomic ensembles. Reviews of Modern Physics, 90, 035005.",
      "Demkowicz-Dobrzański, R., Kołodyński, J., & Guţă, M. (2012). The elusive Heisenberg limit in quantum-enhanced metrology. Nature Communications, 3, 1063.",
      "Ludlow, A. D., Boyd, M. M., Ye, J., Peik, E., & Schmidt, P. O. (2015). Optical atomic clocks. Reviews of Modern Physics, 87, 637-701.",
      "Pedrozo-Peñafiel, E., et al. (2020). Entanglement on an optical atomic-clock transition. Nature, 588, 414-418.",
      "Tse, M., et al. (2019). Quantum-enhanced Advanced LIGO detectors in the era of gravitational-wave astronomy. Physical Review Letters, 123, 231107.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
    ], links: [
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Myth: The uncertainty principle means we can never measure anything precisely", href: "/myths/uncertainty-principle-means-imprecise-measurement" },
      { label: "Forecast: Quantum Sensing: Clocks, Navigation, and Imaging", href: "/future/quantum-sensing-future" },
    ], words: 1136 },
  { slug: "photon-loss-budget-calculator", title: "Photonic Quantum Computer Loss Budget Calculator", category: "hardware", level: "Intermediate", tagline: "Stack up every source of photon loss on a chip and see whether the total fits inside the tolerance of a fault-tolerant photonic architecture.", summary: "Combine source efficiency, coupling, waveguide, switch, and detector losses into total loss per photon, find the survival probability of a multi-photon resource state, and see how many components your budget allows.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Photonic quantum computers encode information in particles of light and process it on chips made in semiconductor foundries. Their great enemy is loss: every component a photon passes through absorbs or scatters a tiny fraction of the light, and a photon that is lost is an error. In architectures such as fusion-based quantum computing, a lost photon can often be treated as an erasure, which is easier to correct than an unknown error, but only if the loss rate stays below a threshold of a few percent per photon. A machine with millions of components has no room for sloppy parts.",
          "This calculator is a loss accountant. You enter the efficiency of the photon source and heralding, the loss from coupling light on and off the chip, the loss per waveguide element and how many elements the photon passes, the loss per optical switch and how many switches there are, and the efficiency of the detector. It multiplies the transmissions to give the total loss per photon, expresses it in decibels, and computes the probability that all the photons in a resource state of a chosen size survive. It also compares your total to a tolerance you can set and tells you how many more waveguide elements your budget would allow.",
        ] },
      { heading: "How to use it", paragraphs: [
          "The default values describe a respectable but not yet sufficient design: a source efficiency of 99 percent, 0.1 dB of coupling loss, 20 waveguide elements at 0.01 dB each, two switches at 0.02 dB, and a detector with 98 percent efficiency. The total loss per photon is about 10 percent, three times the 3 percent tolerance, and a six-photon resource state survives only about half the time. Try the Target quality preset, which improves every stage: a source at 99.8 percent, 0.03 dB coupling, 0.001 dB per element, 0.005 dB per switch, and a 99.5 percent detector. The loss falls to about 2 percent, within the tolerance, and the six-photon state survives about 88 percent of the time. This is the scale of component quality that photonic roadmaps require, tens of times better than early prototypes.",
          "Now try the Early prototype preset to see the other end: with 2 dB coupling, 0.1 dB per element, and an 85 percent detector, the total loss is about 88 percent and a six-photon state almost never survives. Change one parameter at a time to learn which stages matter most. Because losses multiply, every stage counts, but the structure of the budget is revealing: coupling and detector terms are paid once, while waveguide and switch terms are paid for every element, so the number of elements on the path is a design lever as important as the loss per element.",
          "The chart shows total loss versus the number of waveguide elements for four values of loss per element, with your tolerance drawn as a horizontal line. At 0.1 dB per element, no more than a handful of elements fit inside a 3 percent budget. At 0.003 dB per element, hundreds do. It illustrates why photonic companies invest so heavily in making waveguides, couplers, and switches with loss measured in thousandths of a decibel.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "Loss in decibels adds across stages, while transmissions multiply. A loss of 0.13 dB corresponds to 3 percent, and each additional 0.1 dB costs about 2.3 percent. The probability that a resource state of k photons arrives intact is the single-photon transmission raised to the power k, so large resource states are much more sensitive to loss than single photons. Fault-tolerant schemes build the computation from many such states and use fusion measurements and error-correcting codes to tolerate some lost photons, but the tolerance has limits. Bartolucci and coauthors analyzed the thresholds for fusion-based quantum computing in 2023, and the numbers depend on the resource state and on other errors such as fusion failure, so the tolerance field is yours to set.",
          "Detector efficiency has improved rapidly: superconducting nanowire detectors have reached system efficiencies of 93 percent in 2013 and 98 percent in 2020. Foundry waveguide losses have fallen too, with the platform paper of 2025 describing a manufacturable photonic platform built in a commercial foundry. The numbers in the presets are illustrative.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The calculator treats the path of each photon as a simple chain of independent loss stages, ignores that different photons take different paths of different length, ignores wavelength dependence, and treats the tolerance as a single number. Real architectures have loss budgets split across delay lines, multiplexers, and routing networks, and the tolerance depends on the code and on other imperfections. The component values are illustrative and not specifications of any company's chip. Use the tool to see how quickly small losses accumulate and what scale of improvement is needed.",
        ] },
    ], formulas: [
      { name: "Transmission from decibels", expression: "T = 10^(−dB/10)", note: "Converts a loss in decibels to a transmission fraction." },
      { name: "Total transmission", expression: "T_total = η_source · T_coupling · T_element^m · T_switch^s · η_detector", note: "Losses multiply along the photon's path." },
      { name: "Loss per photon", expression: "ℓ = 1 − T_total", note: "Compared with the architecture's tolerance." },
      { name: "Resource state survival", expression: "P = T_total^k", note: "Probability that all k photons of a resource state arrive." },
      { name: "Elements allowed", expression: "m_max = ln((1 − ℓ_tol)/T_other) / ln(T_element)", note: "Number of waveguide elements that fits in the tolerance, other stages fixed." },
    ], examples: [
      { title: "A near-miss design", steps: [
          "Source 99%, coupling 0.1 dB, 20 elements at 0.01 dB, 2 switches at 0.02 dB, detector 98%.",
          "Transmissions: 0.99 × 0.977 × 0.955 × 0.991 × 0.98 = 0.897.",
          "Loss per photon is 10.3 percent, and a six-photon state survives with 0.897⁶ ≈ 52 percent.",
        ], result: "About three times too lossy for a 3 percent tolerance." },
      { title: "A target-quality design", steps: [
          "Source 99.8%, coupling 0.03 dB, 20 elements at 0.001 dB, 2 switches at 0.005 dB, detector 99.5%.",
          "Transmissions: 0.998 × 0.993 × 0.995 × 0.998 × 0.995 = 0.979.",
        ], result: "Loss of about 2.1 percent, within the tolerance, with an 88 percent survival of a six-photon state." },
      { title: "Decibel arithmetic", steps: [
          "A tolerance of 3 percent is a transmission of 0.97.",
          "In decibels, −10 log₁₀(0.97) = 0.13 dB.",
        ], result: "The entire path must lose less than about 0.13 dB." },
    ], faq: [
      { q: "Why is loss so important for photonic computing?", a: "Because lost photons are errors, and fault-tolerant architectures can only absorb a few percent per photon." },
      { q: "Do photonic computers work at room temperature?", a: "Most of the chip does, but the best single-photon detectors operate at a few kelvin." },
      { q: "Is loss a problem for other platforms?", a: "Atoms and ions have analogous losses, such as atom loss from traps, but they are handled differently." },
    ], references: [
      "Bartolucci, S., et al. (2023). Fusion-based quantum computation. Nature Communications, 14, 912.",
      "Bourassa, J. E., et al. (2021). Blueprint for a scalable photonic fault-tolerant quantum computer. Quantum, 5, 392.",
      "Alexander, K., et al. (2025). A manufacturable platform for photonic quantum computing. Nature, 641, 876-883.",
      "Marsili, F., et al. (2013). Detecting single infrared photons with 93% system efficiency. Nature Photonics, 7, 210-214.",
      "Reddy, D. V., Nam, S. W., & Shaw, M. D. (2020). Superconducting nanowire single-photon detectors with 98% system detection efficiency at 1550 nm. Optica, 7, 1649-1653.",
      "Kok, P., et al. (2007). Linear optical quantum computing with photonic qubits. Reviews of Modern Physics, 79, 135-174.",
      "Rudolph, T. (2017). Why I am optimistic about the silicon-photonic route to quantum computing. APL Photonics, 2, 030901.",
    ], links: [
      { label: "Paper: Fusion-Based Quantum Computation", href: "/research/bartolucci-fusion-based-quantum-computation-2023" },
      { label: "Paper: A Scheme for Efficient Quantum Computation with Linear Optics", href: "/research/knill-laflamme-milburn-linear-optics-2001" },
      { label: "Term: Photonic Qubit", href: "/dictionary/photonic-qubit" },
      { label: "Forecast: Photonic Quantum Computing: Chips, Loss, and Million-Qubit Plans", href: "/future/photonic-quantum-computing-future" },
    ], words: 1128 },
  { slug: "rydberg-blockade-radius-calculator", title: "Rydberg Blockade Radius and Gate Error Calculator", category: "hardware", level: "Advanced", tagline: "Find the blockade radius of a Rydberg atom pair, check whether your array spacing works, and see how drive strength trades blockade leakage against decay.", summary: "Compute the van der Waals coefficient, blockade radius, interaction strength at your atom spacing, gate duration, and estimated gate error from imperfect blockade and Rydberg decay for rubidium nS states.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Neutral-atom quantum computers hold individual atoms in a grid of optical tweezers and entangle them by briefly exciting them to Rydberg states, highly excited states with huge electron orbits. Two nearby Rydberg atoms interact so strongly that one atom's excitation shifts the energy of its neighbor out of resonance with the laser, so the pair cannot be excited at the same time. This is the Rydberg blockade, proposed by Jaksch and coauthors in 2000 and by Lukin and coauthors in 2001, and it is the mechanism behind the fast two-qubit gates now demonstrated on arrays of hundreds of atoms.",
          "This calculator connects the physics to the design of an array. You choose the principal quantum number n of the Rydberg state, the Rabi frequency of the laser drive, the atom spacing, and a reference Rydberg lifetime. It computes the van der Waals coefficient, the blockade radius within which the blockade works, the interaction strength at your spacing compared with the drive, the duration of a controlled-Z gate, and the estimated gate error from two sources: imperfect blockade, which grows with the drive strength, and spontaneous decay of the Rydberg state, which grows as the gate gets longer.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Open the preset Typical rubidium gate (n = 70). With a Rabi frequency of 2 MHz and atoms 4 micrometers apart, the blockade radius is about 8.7 micrometers, so the atoms are well inside it. The interaction at 4 micrometers is about 210 MHz, 105 times the Rabi frequency, and the blockade leakage error is only about 0.001 percent. The three-pulse controlled-Z sequence takes about one microsecond. The dominant error is Rydberg decay: with a 150 microsecond lifetime the loss during the gate is about 0.3 percent. Now try the Tight array preset, with n = 60, a spacing of 3 micrometers, and a 1 MHz drive. The blockade is extremely strong, with a ratio above 200, but the shorter lifetime of lower states and the slower gate lead to about 0.9 percent error from decay.",
          "The first chart shows the central trade-off. Imperfect blockade falls as the drive weakens, since a weak drive is better matched to a strong interaction. Decay error rises as the drive weakens, since the gate takes longer and the atom spends more time in the Rydberg state. Their sum has a minimum at an intermediate Rabi frequency, which you can read off the plot. Moving the spacing changes the position of the minimum: wider spacing weakens the interaction, which forces a weaker drive and a longer gate, and raises the minimum error. That is why array designers choose spacings of a few micrometers and why optimizing laser power is a central part of gate design.",
          "Try the Spacing too wide preset, where atoms at 12 micrometers with n = 60 and a 4 MHz drive. The interaction falls to a few tens of kilohertz, far below the drive, and the calculator warns that the blockade is weak: both atoms would be excited and the gate would fail. The second chart shows the blockade radius growing with n, as roughly n to the 11/6, which is why higher Rydberg states allow wider spacing but at the cost of larger sensitivity to electric fields and longer-range crosstalk.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The van der Waals coefficient C6 describes the strength of the interaction, V(r) = C6/r⁶, and scales as n to the 11 for fixed state type, which gives enormous tunability. The blockade radius is where the interaction equals the drive, R_b = (C6/ħΩ)^(1/6). Gate errors are estimated with the leading terms of the analysis of Saffman and Walker from 2005: a blockade leakage error of Ω²/(8V²) and a decay error of 7π/(4Ωτ), where τ is the Rydberg lifetime, for a controlled-Z gate. Real gates also suffer from laser phase noise, Doppler shifts, atomic motion, intermediate-state scattering, and fluctuations in the interaction from positional uncertainty, which is why measured fidelities of around 99.5 percent, as in the 2023 experiments of Evered and coauthors, are higher than the floor from these two terms alone.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The calculator is built for rubidium nS states with a C6 scaled from a single reference value at n = 70 and with a lifetime scaled as n cubed from your input. Real values depend on the state type, the quantum defects, the angular dependence of the interaction for P and D states, the temperature, and proximity to Förster resonances, where the interaction can change by orders of magnitude. Detailed work uses numerical tools such as the Alkali Rydberg Calculator. Use this tool to understand scaling and design trade-offs, and use dedicated calculations for a real experiment.",
        ] },
    ], formulas: [
      { name: "Van der Waals coefficient", expression: "C₆(n) ≈ 859 GHz·µm⁶ × (n/70)¹¹", note: "Rubidium nS scaling from the n = 70 reference value." },
      { name: "Interaction", expression: "V(r) = C₆ / r⁶", note: "Energy shift when two atoms are both in the Rydberg state." },
      { name: "Blockade radius", expression: "R_b = (C₆ / ħΩ)^(1/6)", note: "Distance at which the interaction equals the drive strength." },
      { name: "Blockade error", expression: "ε_block ≈ Ω² / (8V²)", note: "Leakage into the doubly excited state, to leading order." },
      { name: "Decay error", expression: "ε_decay ≈ 7π / (4Ωτ)", note: "Spontaneous decay during a controlled-Z gate of duration 4π/Ω." },
      { name: "Rydberg lifetime", expression: "τ(n) = τ₇₀ (n/70)³", note: "Rough scaling of the effective lifetime with n." },
    ], examples: [
      { title: "A typical gate at n = 70", steps: [
          "Ω/2π = 2 MHz, spacing 4 µm, τ₇₀ = 150 µs.",
          "R_b = (859 GHz·µm⁶ / 0.002 GHz)^(1/6) = 8.7 µm.",
          "V(4 µm) = 859 GHz / 4,096 = 210 MHz, so V/Ω = 105 and ε_block ≈ 1.1 × 10⁻⁵.",
          "ε_decay = 7π / (4 × 1.26 × 10⁷ × 1.5 × 10⁻⁴) ≈ 0.29 percent.",
        ], result: "A total error near 0.3 percent, dominated by Rydberg decay, with a 1 µs gate." },
      { title: "A tight array at n = 60", steps: [
          "Ω/2π = 1 MHz, spacing 3 µm.",
          "C₆ = 859 × (60/70)¹¹ = 158 GHz·µm⁶, so R_b = 7.4 µm and V(3 µm) = 216 MHz.",
          "The lifetime scales to 94 µs, so ε_decay ≈ 0.93 percent.",
        ], result: "Strong blockade, but a slower gate and shorter lifetime raise the decay error." },
      { title: "Atoms too far apart", steps: [
          "n = 60, Ω/2π = 4 MHz, spacing 12 µm.",
          "V(12 µm) = 158 GHz / 2.99 × 10⁶ ≈ 0.05 MHz, far below Ω.",
        ], result: "The blockade fails because both atoms can be excited." },
    ], faq: [
      { q: "Why is the interaction so strong for Rydberg atoms?", a: "Because the electron orbit is huge, giving atoms very large polarizabilities, and C6 grows as the eleventh power of n." },
      { q: "Why not use the highest n for the longest range?", a: "Higher states are more sensitive to stray electric fields, have more crowded energy levels, and have longer-range crosstalk that complicates dense arrays." },
      { q: "What limits Rydberg gate fidelity in practice?", a: "Laser noise, atomic motion, intermediate-state scattering, and fluctuations in the interaction, in addition to decay and blockade leakage." },
    ], references: [
      "Jaksch, D., Cirac, J. I., Zoller, P., Rolston, S. L., Côté, R., & Lukin, M. D. (2000). Fast quantum gates for neutral atoms. Physical Review Letters, 85, 2208-2211.",
      "Lukin, M. D., et al. (2001). Dipole blockade and quantum information processing in mesoscopic atomic ensembles. Physical Review Letters, 87, 037901.",
      "Saffman, M., & Walker, T. G. (2005). Analysis of a quantum logic device based on dipole-dipole interactions of optically trapped Rydberg atoms. Physical Review A, 72, 022347.",
      "Saffman, M., Walker, T. G., & Mølmer, K. (2010). Quantum information with Rydberg atoms. Reviews of Modern Physics, 82, 2313-2363.",
      "Evered, S. J., et al. (2023). High-fidelity parallel entangling gates on a neutral-atom quantum computer. Nature, 622, 268-272.",
      "Šibalić, N., Pritchard, J. D., Adams, C. S., & Weatherill, K. J. (2017). ARC: An open-source library for calculating properties of alkali Rydberg atoms. Computer Physics Communications, 220, 319-331.",
      "Browaeys, A., & Lahaye, T. (2020). Many-body physics with individually controlled Rydberg atoms. Nature Physics, 16, 132-142.",
    ], links: [
      { label: "Paper: Fast Quantum Gates for Neutral Atoms", href: "/research/jaksch-fast-gates-neutral-atoms-2000" },
      { label: "Paper: High-Fidelity Parallel Entangling Gates on a Neutral-Atom Quantum Computer", href: "/research/evered-parallel-entangling-gates-atoms-2023" },
      { label: "Term: Rydberg State", href: "/dictionary/rydberg-state" },
      { label: "Term: Neutral Atom Qubit", href: "/dictionary/neutral-atom-qubit" },
      { label: "Forecast: Neutral-Atom Quantum Computing: Thousands of Atoms and the Race to Logical Qubits", href: "/future/neutral-atom-quantum-computing-future" },
    ], words: 1181 },
  { slug: "mosca-migration-risk-calculator", title: "Post-Quantum Migration Risk Calculator (Mosca Inequality)", category: "security", level: "Beginner", tagline: "Combine how long your data must stay secret, how long migration takes, and when a quantum computer might arrive, and see whether you are already late.", summary: "Apply Mosca's inequality with uncertainty: compute the probability that data is exposed, see the timeline of migration against the quantum threat, and find how soon you must start to keep the risk under five percent.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Nobody knows when a quantum computer capable of breaking today's public-key cryptography will exist. That uncertainty tempts organizations to wait. Michele Mosca gave a compact way to see why waiting is dangerous. Let x be the number of years your data must stay confidential, let y be the number of years your organization needs to migrate to quantum-safe cryptography, and let z be the number of years until a cryptographically relevant quantum computer exists. If x plus y is greater than z, then data protected during the migration can be decrypted while it is still sensitive. The inequality does not need an exact value of z. It only asks whether your own deadlines already overlap with a plausible threat.",
          "This calculator turns the inequality into a risk estimate. You enter x and y, a central guess for z, and how uncertain that guess is. It models z as a bell-shaped distribution, computes the probability that z is smaller than x plus y, draws the timeline, and works out how many years you have left before migration must start in order to keep the risk below five percent. A second chart shows how exposure falls as you shorten the migration.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the Medical records preset: data that must stay private for 30 years and a five year migration. With a central threat estimate of 12 years and an uncertainty of five years, the sum x plus y is 35 years, far beyond the threat, and the exposure probability is essentially 100 percent. Records encrypted today with quantum-vulnerable key exchange can be recorded now and decrypted later, which is the harvest-now-decrypt-later risk. Compare the Short-lived tokens preset, where data is sensitive for about a month and migration takes a year. The sum is 1.1 years, the exposure probability is about 1.5 percent, and there is little urgency.",
          "Next, try the Payment card data preset, with a seven year secrecy requirement and a three year migration. The sum of 10 years is just under the central threat estimate of 12 years, so the central case looks fine, but the uncertainty leaves a 35 percent chance that the threat arrives sooner. This is the zone where most organizations live, and it shows why the calculator reports a probability and not just a pass or fail. Then flip the threat to the Cautious preset, with a central guess of 25 years and an uncertainty of eight years: the same card-data case drops to about 3 percent. The conclusion depends strongly on your view of the threat, which is why national agencies set deadlines for everyone, not just for those who agree.",
          "The planning panel answers the practical question: to keep exposure under five percent, when must migration finish and when must it start? With the central guess of 12 years and a five year uncertainty, the 95 percent worst case is that the threat arrives in under four years. Data that must stay secret for more than four years then needs protection already, and the start date is negative, meaning the start date has already passed. For short-lived data, the calculator gives you a positive number of years to begin. Move the sliders to see which of the four variables dominates your situation.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "Treat the probability as a way to compare scenarios, not as a forecast. The model assumes that the threat arrival date follows a simple bell-shaped distribution, which is a crude stand-in for expert opinion. Expert surveys, such as the Global Risk Institute's annual report, show wide disagreement, with some experts giving high probability to a break within 10 years and others much lower. Policy deadlines reflect that spread. NIST proposes deprecating quantum-vulnerable algorithms by 2030 and disallowing them by 2035, the US National Security Agency requires exclusive use of quantum-resistant algorithms in most national security systems by 2033, and the UK and EU have published similar timelines.",
          "The migration time y deserves as much thought as the threat. Cryptographic transitions are slow: SHA-1 was deprecated for signatures by NIST in 2011, and a practical collision was shown in 2017, yet some systems still used it afterwards. Post-quantum migration touches protocols, certificates, hardware security modules, embedded firmware, and third-party dependencies. Many large organizations need five to ten years even when they start with a good inventory.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model treats x, y, and the threat date as independent and ignores that migration can be staged: key exchange for new connections can move quickly, while signatures and embedded devices lag. It assumes that data can be collected and stored by an adversary, which is plausible for network traffic and stolen databases, and it ignores partial mitigations such as strong symmetric encryption layers. It uses a single threat distribution rather than a mix of scenarios. It is a thinking tool for planning, not a risk assessment of a particular system.",
        ] },
    ], formulas: [
      { name: "Mosca's inequality", expression: "x + y > z  ⇒  exposure", note: "x is the secrecy lifetime, y the migration time, z the time until a cryptographically relevant quantum computer." },
      { name: "Probability of exposure", expression: "P = Φ((x + y − μ) / σ)", note: "Φ is the normal cumulative distribution function, μ the central guess for z, σ its uncertainty." },
      { name: "Migration deadline for 5% risk", expression: "t_finish = μ − 1.645σ − x", note: "Latest completion time, in years from now, that keeps the exposure probability under 5 percent." },
      { name: "Latest start", expression: "t_start = t_finish − y", note: "Negative values mean the start date has already passed." },
    ], examples: [
      { title: "Medical records", steps: [
          "x = 30 years, y = 5 years, μ = 12 years, σ = 5 years.",
          "x + y = 35, so P = Φ((35 − 12)/5) = Φ(4.6) ≈ 1.",
        ], result: "Near-certain exposure on this model. Such data needs protection now." },
      { title: "Short-lived tokens", steps: [
          "x = 0.1 years, y = 1 year, same threat.",
          "x + y = 1.1 years, so P = Φ((1.1 − 12)/5) = Φ(−2.18) ≈ 1.5%.",
        ], result: "Low risk. The deadline to finish is about 3.7 years away and the start is about 2.7 years away." },
      { title: "Payment card data", steps: [
          "x = 7 years, y = 3 years.",
          "With μ = 12 and σ = 5: P = Φ((10 − 12)/5) = Φ(−0.4) ≈ 34%.",
          "With μ = 25 and σ = 8: P = Φ((10 − 25)/8) = Φ(−1.9) ≈ 3%.",
        ], result: "The answer swings from a third to a few percent depending on the threat view." },
    ], faq: [
      { q: "Do I need to know exactly when a quantum computer will arrive?", a: "No. The inequality works with a range of plausible dates, and the cost of being late is high enough to justify caution." },
      { q: "Why is harvest now, decrypt later relevant?", a: "Because an adversary can record encrypted traffic today and decrypt it when a machine exists, so exposure starts when the data is sent, not when the machine arrives." },
      { q: "What should I do first?", a: "Make an inventory of where and how cryptography is used, rank systems by x and y, and begin with the ones that fail the test." },
    ], references: [
      "Mosca, M. (2018). Cybersecurity in an era with quantum computers: Will we be ready? IEEE Security and Privacy, 16(5), 38-41.",
      "National Institute of Standards and Technology (2024). NIST IR 8547 (initial public draft): Transition to post-quantum cryptography standards.",
      "National Security Agency (2022). Commercial National Security Algorithm Suite 2.0 advisory.",
      "Mosca, M., & Piani, M. Quantum threat timeline report. Global Risk Institute (annual).",
      "Stevens, M., Bursztein, E., Karpman, P., Albertini, A., & Markov, Y. (2017). The first collision for full SHA-1. CRYPTO 2017, LNCS 10401, 570-596.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Myth: There is no need to switch to post-quantum cryptography until a quantum computer actually exists", href: "/myths/no-need-to-migrate-until-quantum-computer-exists" },
      { label: "Forecast: Migrating to Post-Quantum Cryptography: The Engineering Reality", href: "/future/pqc-migration-engineering-future" },
      { label: "Forecast: A Practical Roadmap for Companies: How to Prepare for Quantum", href: "/future/quantum-enterprise-readiness-future" },
    ], words: 1213 },
  { slug: "pqc-size-bandwidth-calculator", title: "Post-Quantum Key and Signature Size Calculator", category: "security", level: "Intermediate", tagline: "See how much bigger a TLS handshake gets with post-quantum algorithms, when it spills into an extra round trip, and what it costs in daily bandwidth.", summary: "Choose a key exchange and a signature scheme, set the certificate chain, and compute handshake size, the server flight against the TCP initial window, added round trips, and extra bandwidth per day compared with today's X25519 and ECDSA.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Post-quantum cryptography replaces elliptic curves and RSA with algorithms whose keys, ciphertexts, and signatures are much larger. Speed is rarely the problem: ML-KEM runs about as fast as elliptic curve key exchange. Size is. A classical X25519 key share is 32 bytes while a post-quantum ML-KEM-768 share is 1,184 bytes, and a classical ECDSA signature is 64 bytes while an ML-DSA-65 signature is 3,309 bytes. Every TLS handshake sends several keys and signatures, so the sizes multiply, and the first flight of the server can exceed the number of packets the sender may transmit before waiting for an acknowledgment. That produces an extra network round trip, which users feel as latency.",
          "This calculator lets you assemble a handshake from the standardized building blocks and see the consequences. Pick a key exchange, from classical X25519 to ML-KEM and the hybrid X25519 plus ML-KEM-768 used by browsers today. Pick a signature scheme, from classical ECDSA and RSA to the NIST standards ML-DSA and SLH-DSA and the forthcoming Falcon-based standard. Set the number of certificates the server sends and the number of extra signed objects, such as certificate transparency timestamps and OCSP staples. It reports the total handshake size, the server flight against the TCP initial congestion window, the extra round trips and latency, and the bandwidth added per day for the number of connections you enter.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Begin with the preset Today, which uses X25519 and ECDSA P-256. With two certificates and three extra signatures, the model gives a handshake of about 1.8 kilobytes. Now choose Hybrid key exchange only. The handshake grows to about 4.0 kilobytes, a factor of 2.3, and still fits the initial window of ten packets, about 14.6 kilobytes. That is why the hybrid key exchange could be deployed in browsers in 2024 with little visible effect, and why it protects against harvest-now-decrypt-later attacks at modest cost.",
          "Next choose Full post-quantum with ML-DSA-65. The server flight jumps to about 25.8 kilobytes, the total handshake to 27.3 kilobytes, 15 times the classical size, and the server flight no longer fits in one window, adding a round trip. At a 50 millisecond round trip that is 50 milliseconds of extra latency per new connection, and for a service with a million new connections a day it is 25 gigabytes of extra traffic. Now try Compact signatures with Falcon-512: the handshake falls to about 9.3 kilobytes and fits the window, at the price of an implementation that needs care because of floating-point sampling. The hash-based preset, SLH-DSA-128s, has tiny public keys of 32 bytes but 7.9 kilobyte signatures, and the model shows a handshake of 50 kilobytes with four flights.",
          "The bar chart at the bottom compares the server flight for every signature scheme at your current settings. It makes plain that signature size, repeated across a certificate chain and several signed objects, dominates the cost, not the key exchange. This is why researchers are working on ways to shrink the signature load, such as Merkle tree certificates, which would replace the chain of signatures with compact inclusion proofs, and why client-side caching of intermediate certificates helps.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The sizes of keys and signatures come from the NIST standards for ML-KEM (FIPS 203), ML-DSA (FIPS 204), and SLH-DSA (FIPS 205), and from the Falcon specification. The hybrid key exchange sizes follow from concatenating a 32-byte X25519 share with the ML-KEM-768 encapsulation key or ciphertext. The model charges 300 bytes of metadata per certificate and 300 bytes of other handshake messages per side, which are rough but typical. The TCP initial congestion window of ten packets of 1,460 bytes follows RFC 6928, and the calculator treats the server flight as needing as many round trips as it needs windows.",
          "Added latency matters more than added bytes for interactive traffic, while bytes matter for large fleets and constrained networks such as satellite links and low-power wide-area networks. A device on a link that carries a few hundred bytes per message may be unable to run a full post-quantum handshake at all, which is why embedded systems are the long tail of the migration.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "This is a simplified model of TLS 1.3. Real handshakes vary with the number of extensions, certificate compression, session resumption, which avoids most of the cost for returning clients, and the congestion window the server actually uses. The extra-signature count is an assumption. Post-quantum signatures will probably be deployed together with certificate compression and new certificate designs that change the arithmetic. Use the numbers to understand the scale of the change and the reasons for design choices, not to predict the latency of a specific site.",
        ] },
    ], formulas: [
      { name: "Certificate size", expression: "c = |pk| + |sig| + 300 bytes", note: "Public key, issuer signature, and metadata for each certificate." },
      { name: "Client flight", expression: "F_client = |share_client| + 300", note: "Key share plus other client handshake messages." },
      { name: "Server flight", expression: "F_server = |share_server| + n_cert · c + |sig| + n_extra · |sig| + 300", note: "Key share, certificate chain, handshake signature, and extra signed objects." },
      { name: "Initial window", expression: "W = initcwnd × 1,460 bytes", note: "Data the server may send before waiting for an acknowledgment. Ten packets is about 14,600 bytes." },
      { name: "Round trips", expression: "⌈F_server / W⌉ − 1", note: "Extra round trips needed when the server flight exceeds the window." },
    ], examples: [
      { title: "Today's handshake", steps: [
          "X25519 and ECDSA P-256, two certificates, three extra signatures.",
          "Client flight 332 bytes and server flight 1,444 bytes.",
        ], result: "A total of 1,776 bytes, with no extra round trip." },
      { title: "Full post-quantum with ML-DSA-65", steps: [
          "Hybrid X25519 plus ML-KEM-768 and ML-DSA-65.",
          "Server flight = 1,120 + 2 × (1,952 + 3,309 + 300) + 3,309 + 3 × 3,309 + 300 = 25,778 bytes; client flight 1,516.",
        ], result: "Total 27,294 bytes, 15.4 times today's, with one extra round trip and about 25.5 GB of extra traffic per day at a million connections." },
      { title: "Compact signatures", steps: [
          "Hybrid key exchange with Falcon-512 and the same chain.",
          "Server flight = 1,120 + 2 × (897 + 666 + 300) + 666 + 3 × 666 + 300 = 7,810 bytes.",
        ], result: "Total 9,326 bytes, 5.3 times today's, and still inside the initial window." },
    ], faq: [
      { q: "Why are post-quantum signatures so large?", a: "Lattice and hash-based signature schemes need more data to achieve security, so signatures run from about 0.7 to 17 kilobytes compared with 64 bytes for ECDSA." },
      { q: "Is the key exchange or the signature the bigger problem?", a: "The signatures. Key exchange adds about a kilobyte or two, while signatures repeated through a certificate chain add tens of kilobytes." },
      { q: "What reduces the cost?", a: "Hybrid key exchange only, certificate compression, session resumption, caching intermediates, Falcon where implementation risk is acceptable, and new certificate designs." },
    ], references: [
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205: Module-lattice-based key-encapsulation, module-lattice-based digital signature, and stateless hash-based digital signature standards.",
      "Fouque, P.-A., et al. (2020). Falcon: Fast-Fourier lattice-based compact signatures over NTRU. NIST post-quantum cryptography submission.",
      "Rescorla, E. (2018). The Transport Layer Security (TLS) Protocol Version 1.3. IETF RFC 8446.",
      "Chu, J., Dukkipati, N., Cheng, Y., & Mathis, M. (2013). Increasing TCP's Initial Window. IETF RFC 6928.",
      "Sikeridis, D., Kampanakis, P., & Devetsikiotis, M. (2020). Post-quantum authentication in TLS 1.3: A performance study. NDSS Symposium 2020.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Myth: Post-quantum cryptography and quantum cryptography are the same thing", href: "/myths/post-quantum-and-quantum-cryptography-same" },
      { label: "Forecast: Migrating to Post-Quantum Cryptography: The Engineering Reality", href: "/future/pqc-migration-engineering-future" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1153 },
  { slug: "symmetric-key-quantum-security-calculator", title: "Symmetric Key Quantum Security Calculator (Grover Attack)", category: "security", level: "Intermediate", tagline: "See how long a quantum computer would need to brute-force an AES key, and why doubling the key length restores the margin.", summary: "Estimate the time for a Grover attack on a symmetric key from the key length, the oracle cost, the logical clock rate, and the number of quantum machines, and compare with classical brute force and the age of the universe.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Quantum computers threaten some cryptography far more than other cryptography. Shor's algorithm breaks public-key systems such as RSA and elliptic curves completely. For symmetric ciphers like AES, there is no such shortcut. The best known generic attack is a key search, and Grover's algorithm speeds up a search over 2 to the k keys to about 2 to the k over 2 steps. That is a quadratic speedup, which effectively halves the key length: AES-128 behaves like a 64-bit cipher against an ideal quantum attacker, and AES-256 like a 128-bit cipher. This calculator shows what that means in time.",
          "It would be easy to stop at the halving rule, but the rule alone overstates the threat, because each Grover step is not a single operation. It is a full evaluation of the cipher inside a reversible quantum circuit, which costs hundreds of thousands to millions of logical gates, run on an error-corrected machine whose logical gates are far slower than classical operations. And Grover's algorithm does not parallelize well: using P machines only reduces the running time by the square root of P. Enter those numbers and the calculator computes the number of Grover iterations, the wall-clock time of the quantum attack, the time of a classical brute-force attack at the key-testing rate you choose, and how the two compare with the age of the universe.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the preset AES-128 and Realistic oracle cost. With one machine performing a million logical operations per second and an oracle of a million logical operations, each Grover iteration takes one second. The attack needs about 1.4 times 10 to the 19 iterations, so it takes about 1.4 times 10 to the 19 seconds, roughly 460 billion years, thirty times the age of the universe. Now try the Generous quantum machine preset: a hundred million logical operations per second, an oracle ten times cheaper, and a million machines. The time falls to about 460,000 years. Even with these extremely optimistic assumptions, AES-128 remains out of reach. Switch to AES-256: the iterations jump to 2.7 times 10 to the 38, and the time to around 10 to the 30 years.",
          "The most instructive control is the machines slider. Raise it to a billion and the time falls only by a factor of about 31,600, to roughly 14 million years, because the speedup grows as the square root. This is Zalka's 1999 result: Grover's algorithm cannot be parallelized efficiently. If you could rent a billion machines, you would still wait millions of years. For comparison, a classical attacker testing a trillion keys per second needs about 5 times 10 to the 18 years for AES-128, so the quantum attacker is faster in principle, but both are astronomically far from feasible.",
          "Try the Old DES preset to see what a genuinely weak key looks like: with 56 bits, a classical attacker at a trillion keys per second needs about ten hours, and the quantum attacker needs about 2 times 10 to the 8 iterations at one second each, around seven years on one machine. The table and chart show how fast the picture changes with length: each additional 2 bits multiplies the quantum time by two, and the chart's classical curve climbs twice as steeply as the quantum one.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "Effective quantum strength is half the key length because Grover needs 2 to the k over 2 iterations. NIST uses this idea in its post-quantum security categories, defining category 1 as at least as hard to break as an exhaustive search on AES-128, category 3 on AES-192, and category 5 on AES-256, with quantum costs estimated by circuit depth and gate counts. Detailed work by Jaques, Naehrig, Roetteler, and Virdia in 2020 computed explicit Grover oracles for AES and found that the cost of key search is far beyond practical limits for AES-128, while noting that margins are thinner than the idealized formula suggests. For hash functions, preimage search has the same square-root structure, and collision search by the Brassard-Høyer-Tapp algorithm needs enormous memory and offers no advantage once the cost of memory is counted, as Bernstein argued.",
          "The practical advice is simple: use AES-256 where long-term secrecy matters, treat AES-128 as adequate for most uses, and concentrate migration effort on public-key cryptography, where the quantum threat is real and qualitative.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The model uses a single number for the cost of the oracle, which in reality depends on the cipher, the key size, and how well the circuit is optimized, and it treats logical operations as a uniform clock. It ignores memory and routing overhead, the cost of error correction beyond what is folded into the logical rate, and related-key or structural attacks, which are separate from key search. Its comparison with the age of the universe is a way to express a scale, not a security proof. The goal is to build intuition about why symmetric cryptography survives the quantum transition.",
        ] },
    ], formulas: [
      { name: "Grover iterations", expression: "I = (π/4) · 2^(k/2)", note: "Iterations to search a space of 2^k keys with one solution." },
      { name: "Quantum time", expression: "t_Q = I · C / (R · √P)", note: "C logical operations per iteration, R logical operations per second, P machines." },
      { name: "Classical time", expression: "t_C = 2^(k−1) / r", note: "Average-case brute force at r keys per second." },
      { name: "Effective strength", expression: "k_eff ≈ k/2", note: "Under an ideal Grover attack, ignoring overheads." },
    ], examples: [
      { title: "AES-128 with realistic overheads", steps: [
          "C = 10⁶, R = 10⁶ per second, P = 1.",
          "I = 0.785 × 2⁶⁴ = 1.45 × 10¹⁹ iterations, each taking 1 second.",
        ], result: "About 1.45 × 10¹⁹ seconds, or 4.6 × 10¹¹ years, thirty times the age of the universe." },
      { title: "A billion machines", steps: [
          "Same as above with P = 10⁹.",
          "The speedup is √P = 31,623.",
        ], result: "About 1.45 × 10⁷ years, still far beyond any practical horizon." },
      { title: "AES-256", steps: [
          "k = 256 gives I = 0.785 × 2¹²⁸ = 2.67 × 10³⁸ iterations.",
        ], result: "Around 8 × 10³⁰ years with the realistic machine, so AES-256 is considered quantum resistant by a vast margin." },
    ], faq: [
      { q: "Is AES-128 broken by quantum computers?", a: "No. Grover's algorithm reduces its effective strength to about 64 bits in an idealized model, but the circuit cost and the limits of parallelization keep the attack out of reach." },
      { q: "Why not just use bigger keys everywhere?", a: "For symmetric cryptography that is a good strategy: AES-256 costs little more than AES-128. The problem is public-key cryptography, which needs new algorithms." },
      { q: "What about hash functions?", a: "Preimage search has the same square-root speedup, so SHA-256 retains about 128 bits of preimage security, and collisions are not meaningfully weakened." },
    ], references: [
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Zalka, C. (1999). Grover's quantum searching algorithm is optimal. Physical Review A, 60, 2746-2751.",
      "Jaques, S., Naehrig, M., Roetteler, M., & Virdia, F. (2020). Implementing Grover oracles for quantum key search on AES and LowMC. EUROCRYPT 2020, LNCS 12106, 280-310.",
      "Brassard, G., Høyer, P., & Tapp, A. (1998). Quantum cryptanalysis of hash and claw-free functions. LATIN '98, LNCS 1380, 163-169.",
      "Bernstein, D. J. (2009). Cost analysis of hash collisions: Will quantum computers make SHARCS obsolete? SHARCS 2009 workshop.",
      "National Institute of Standards and Technology (2016). Submission requirements and evaluation criteria for the post-quantum cryptography standardization process.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
      { label: "Myth: Quantum computers will break all encryption, including AES and hashes", href: "/myths/quantum-breaks-all-encryption-including-aes" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1144 },
  { slug: "password-quantum-guessing-calculator", title: "Password Strength and Quantum Guessing Calculator", category: "security", level: "Beginner", tagline: "Find out how long a password survives against GPUs and against a quantum computer running Grover's algorithm, and what actually protects you.", summary: "Compute password entropy from character set and length, apply a human-choice penalty, and compare the expected cracking time of classical GPU attackers with a Grover attack for different password storage schemes.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Headlines suggest that quantum computers will crack any password instantly. This calculator tests that claim with arithmetic. A password is attacked by guessing, which means computing the hash of each candidate and comparing it with a stolen hash. How long that takes depends on three things: how unpredictable the password is, measured in bits of entropy; how expensive each guess is, which depends on how the password is stored; and how many guesses per second the attacker can make. A quantum computer running Grover's algorithm can in principle search a space of N candidates in about the square root of N steps, but each step requires running the hash function inside a quantum circuit.",
          "You choose the character set and length, the storage scheme from a fast unsalted hash to a slow memory-hard function, the number of attacker GPUs, and a penalty that models how human-chosen passwords are less random than random ones. You also describe a quantum machine: operations per hash, logical operations per second, and the number of machines. The calculator reports the strength in bits, a rating based on classical cracking time, the classical and quantum times, and a chart of both against password length.",
        ] },
      { heading: "How to use it", paragraphs: [
          "Start with the preset 8 random letters and digits, stored with a fast unsalted hash and attacked by a single modern GPU. The password has 47.6 bits of entropy. A GPU testing 160 billion guesses per second searches half the space in about 11 minutes, so the rating is Weak. The quantum attacker, at a million logical operations per second and a million operations per hash, needs about 11.6 million iterations at one second each, around 134 days, which is slower than the classical GPU. This is the usual surprise: Grover's square-root speedup is real, but fast classical hardware starts with a huge head start, and the quantum machine's overheads are even larger.",
          "Now try 12 random letters and digits. The strength rises to 71.5 bits. A single GPU would need about 320 years on average, and a thousand GPUs would need about four months, so the rating moves to Strong against a modest attacker. The quantum attacker needs about 1,400 years on one machine, still slower than the thousand-GPU cluster. Six Diceware words, a random passphrase from a list of 7,776 words, give 77.5 bits: about 22,000 years for one GPU. Then select the Slow hash preset and see how a memory-hard storage scheme such as Argon2id multiplies the classical cracking time by a factor of a billion compared with a fast hash. Choosing how passwords are stored is the most powerful defense a service has.",
          "Next, the Human-chosen 10 characters preset. Ten characters from the full keyboard would have 65.5 bits if random, but real people choose predictable patterns, which the human-choice penalty models as 25 bits. The effective strength falls to 40.5 bits and a single GPU finds it in about five seconds. Researchers who studied leaked password databases, such as Weir and coauthors in 2009, found that dictionary-based and pattern-based attacks crack a large fraction of human-chosen passwords within hours. The lesson is that randomness matters far more than apparent complexity.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The entropy of a uniformly random password is its length times the logarithm base 2 of the character set size. The expected classical effort is half the space divided by the guess rate. Grover's algorithm needs about π/4 times the square root of the space in iterations, and each iteration costs one evaluation of the hash in the quantum circuit. For a fast hash such as MD5, a classical GPU does a guess in picoseconds-scale amortized time, while a quantum machine takes a fraction of a second per logical hash even in generous scenarios, so the classical side wins until the password space is huge. The crossover is far beyond the strengths that people actually use, and at those strengths both attacks are infeasible.",
          "Note what the calculator does not cover. Online guessing against a login page is limited by rate limits and lockouts, and neither GPUs nor quantum computers speed it up. Most real-world compromises involve phishing, malware, reuse of passwords across sites, and leaked plaintext, which no cryptography can fix. The recommendations of NIST Special Publication 800-63B emphasize length, screening against known-compromised passwords, and multi-factor authentication.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The guess rates are order-of-magnitude figures from community benchmarks of modern GPUs and will differ by hardware, hash implementation, and parameters. The model assumes a uniformly random password except for the penalty slider, a single hash evaluation per guess, and a pure Grover attack without exploiting structure in the password distribution, which a classical attacker can do with dictionaries and rules. It does not model salted databases attacked per-user, which multiplies the effort. Use it to compare orders of magnitude and to see which factors matter.",
        ] },
    ], formulas: [
      { name: "Entropy", expression: "H = L · log₂ |A|", note: "L characters or words from an alphabet of size |A|, chosen uniformly at random." },
      { name: "Effective strength", expression: "H_eff = H − penalty", note: "A crude model of predictability in human-chosen passwords." },
      { name: "Classical time", expression: "t_C = 2^(H_eff − 1) / (r · G)", note: "r guesses per second per GPU and G GPUs, searching half the space on average." },
      { name: "Quantum time", expression: "t_Q = (π/4) · 2^(H_eff/2) · C / (R · √P)", note: "C logical operations per hash evaluation, R per second, P machines." },
    ], examples: [
      { title: "Eight random letters and digits", steps: [
          "H = 8 × log₂ 62 = 47.6 bits, one GPU at 1.6 × 10¹¹ guesses per second.",
          "Classical: 2^46.6 / 1.6 × 10¹¹ ≈ 680 seconds.",
          "Quantum: 0.785 × 2^23.8 = 1.16 × 10⁷ iterations at 1 second each.",
        ], result: "11 minutes classically versus about 134 days on a single quantum machine." },
      { title: "Twelve random letters and digits", steps: [
          "H = 71.5 bits.",
          "Classical, one GPU: about 1.0 × 10¹⁰ seconds, or 320 years; with 1,000 GPUs, about 0.32 years.",
          "Quantum, one machine: 4.5 × 10¹⁰ seconds, or about 1,400 years.",
        ], result: "Both attackers need years or centuries even with generous hardware." },
      { title: "Six Diceware words", steps: [
          "H = 6 × log₂ 7,776 = 77.5 bits.",
          "Classical, one GPU: about 6.9 × 10¹¹ seconds, or 22,000 years.",
        ], result: "A random passphrase of this length is strong against both classical and quantum guessing." },
    ], faq: [
      { q: "Can a quantum computer crack any password instantly?", a: "No. Grover's algorithm gives only a square-root speedup and needs a full hash evaluation inside a quantum circuit for every step." },
      { q: "How long should my password be?", a: "Use a password manager to generate random passwords of at least 16 characters, or a six-word random passphrase for passwords you must memorize." },
      { q: "What matters more than quantum computing for passwords?", a: "Not reusing passwords, using multi-factor authentication or passkeys, and services storing passwords with slow salted hashes." },
    ], references: [
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Zalka, C. (1999). Grover's quantum searching algorithm is optimal. Physical Review A, 60, 2746-2751.",
      "Grassi, P. A., et al. (2017). NIST Special Publication 800-63B: Digital identity guidelines: Authentication and lifecycle management.",
      "Bonneau, J., Herley, C., van Oorschot, P. C., & Stajano, F. (2012). The quest to replace passwords: A framework for comparative evaluation of web authentication schemes. IEEE Symposium on Security and Privacy, 553-567.",
      "Weir, M., Aggarwal, S., de Medeiros, B., & Glodek, B. (2009). Password cracking using probabilistic context-free grammars. IEEE Symposium on Security and Privacy, 391-405.",
      "Wheeler, D. L. (2016). zxcvbn: Low-budget password strength estimation. USENIX Security Symposium, 157-173.",
      "Jaques, S., Naehrig, M., Roetteler, M., & Virdia, F. (2020). Implementing Grover oracles for quantum key search on AES and LowMC. EUROCRYPT 2020, LNCS 12106, 280-310.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
      { label: "Myth: A quantum computer could crack any password instantly", href: "/myths/quantum-computers-crack-any-password-instantly" },
      { label: "Forecast: Quantum in Everyday Life: What Ordinary People Will Actually Use", href: "/future/quantum-consumer-future" },
    ], words: 1159 },
  { slug: "qkd-key-rate-distance-calculator", title: "QKD Key Rate and Distance Calculator", category: "security", level: "Advanced", tagline: "Model how fast a quantum key distribution link can make secret key as fiber gets longer, and where trusted nodes or repeaters become necessary.", summary: "Compute the secret key rate of decoy-state BB84 for a fiber link from loss, detector, and error parameters, compare it with the repeaterless PLOB limit and with a chain of trusted nodes, and find the maximum unrelayed distance.", sections: [
      { heading: "What this calculator does", paragraphs: [
          "Quantum key distribution sends single photons through optical fiber and builds a shared secret key from the results. The physics gives the technology its security, but it also sets a harsh limit on distance: light in fiber loses about 0.2 decibels per kilometer, so every 50 kilometers the surviving fraction of photons drops by a factor of ten. A key rate that is megabits per second in a city falls to a few bits per second at 300 kilometers. Because quantum states cannot be amplified without destroying them, there is no simple fix. This calculator shows how steep the decline is and how different strategies change it.",
          "You set the fiber length and attenuation, a fixed loss for connectors and optics, the clock rate of the source, the efficiency and dark-count rate of the detectors, and the optical misalignment error. It computes the total channel loss and three key rates. The first is a practical decoy-state BB84 rate from the standard asymptotic formula, optimized over the signal intensity. The second is the PLOB bound, the ultimate limit for any protocol without quantum repeaters, derived by Pirandola, Laurenza, Ottaviani, and Banchi in 2017. The third is the rate of a chain of trusted nodes, where the link is divided into hops and keys are relayed. It also reports the maximum distance at which the practical rate stays above one bit per second.",
        ] },
      { heading: "How to use it", paragraphs: [
          "The default settings model a 100 kilometer link over standard fiber with a 1 GHz source, detectors with 80 percent efficiency and 10 to the minus 7 dark counts per pulse, and a 1.5 percent misalignment error. The total loss is 23 dB, and the practical model gives about 440 kilobits per second, compared with a PLOB limit of about 7 megabits per second. The gap between practical and ultimate is typical, and it reflects imperfect detectors, error correction overhead, and the use of weak coherent pulses instead of ideal single photons. Now drag the distance to 200 kilometers. The practical rate falls to about 4 kilobits per second, a hundredfold decrease for a doubling of distance, because the loss doubles in decibels.",
          "At 300 kilometers the practical model reaches zero: dark counts and background noise overwhelm the signal, and the secret key rate falls below one bit per second. The reach panel reports that the maximum distance with these parameters is about 270 kilometers. Try the Best detectors preset, with 95 percent efficiency and one-in-a-billion dark counts, together with the Ultra-low-loss fiber preset at 0.16 dB per kilometer: the reach extends past 450 kilometers, consistent in spirit with the 2018 experiment of Boaron and coauthors, who distributed keys over 421 kilometers of ultra-low-loss fiber at a few bits per second. Select Poor InGaAs detectors, with 15 percent efficiency and high dark counts, and watch the range shrink to about 130 kilometers.",
          "Then use the trusted-node slider. Dividing a 300 kilometer link into four hops of 75 kilometers raises the end-to-end rate from zero to over a megabit per second, because each hop operates in the easy regime. This is how China's 2,000 kilometer backbone between Beijing and Shanghai works, with trusted relay nodes about every 30 to 100 kilometers. The cost is security: each relay holds the key in the clear, so it must be physically protected and trusted. The chart shows all three curves on a log scale and makes the exponential decay of the single-hop rate vivid.",
        ] },
      { heading: "Reading the result", paragraphs: [
          "The practical rate uses the standard decoy-state formula of Ma, Qi, Zhao, and Lo from 2005, building on the security analysis of Gottesman, Lo, Lütkenhaus, and Preskill from 2004. The secret key per pulse is one half times the quantity of single-photon-derived key, Q₁ times one minus the binary entropy of the single-photon error rate, minus the cost of error correction on all signals, with an error correction efficiency of 1.16. The calculator searches for the best signal intensity. The rate is asymptotic, meaning that it assumes an infinite number of pulses and an infinite number of decoy states, and real finite-size effects reduce the rate and the reach.",
          "The PLOB bound is minus the logarithm base 2 of one minus the channel transmittance, per use of the channel. At long distances it behaves like 1.44 times the transmittance, so it too falls exponentially. Protocols such as twin-field QKD, proposed in 2018 by Lucamarini and coauthors, achieve a rate that scales with the square root of the transmittance, which allowed experiments beyond 500 kilometers, but they still fall below what quantum repeaters could do.",
        ] },
      { heading: "Assumptions and limits", paragraphs: [
          "The practical model is the idealized asymptotic decoy-state BB84 without finite-key penalties, detector dead time, saturation, polarization drift, or timing jitter, and it treats the fixed loss and misalignment as constants. The trusted-node curve assumes that all hops have identical parameters and that relay nodes are secure. It does not model satellite links, which have different loss behavior, or entanglement-based and twin-field protocols. Use the tool to learn how loss controls everything and to compare strategies, and use detailed link budgets for real systems.",
        ] },
    ], formulas: [
      { name: "Channel loss", expression: "A = α·L + A_fixed  (dB)", note: "Fiber attenuation α in dB per km, length L, plus fixed loss." },
      { name: "Transmittance", expression: "η = 10^(−A/10) · η_det", note: "Overall probability that a photon is detected." },
      { name: "Decoy-state key per pulse", expression: "R = ½ [ −Q_μ f H₂(E_μ) + Q₁ (1 − H₂(e₁)) ]", note: "Q_μ is the signal gain, Q₁ the single-photon gain, e₁ the single-photon error, f = 1.16." },
      { name: "PLOB bound", expression: "R_PLOB = −log₂(1 − η_ch)", note: "Maximum secret bits per channel use without repeaters; η_ch is the channel transmittance." },
      { name: "Rate in bits per second", expression: "K = R × (clock rate)", note: "Key per pulse times the pulse rate." },
    ], examples: [
      { title: "A 100 km link", steps: [
          "α = 0.2 dB/km, fixed loss 3 dB, so A = 23 dB and η_ch = 0.5%.",
          "With detector efficiency 80%, dark counts 10⁻⁷, error 1.5%, 1 GHz source.",
        ], result: "About 4.4 × 10⁵ bit/s for decoy-state BB84 against a PLOB limit of about 7 × 10⁶ bit/s." },
      { title: "A 200 km link", steps: [
          "A = 43 dB, so η_ch = 5 × 10⁻⁵.",
        ], result: "About 4 × 10³ bit/s practical, and 7 × 10⁴ bit/s as the ultimate bound." },
      { title: "A 300 km link split into four hops", steps: [
          "Each hop is 75 km with A = 18 dB.",
          "Single-hop rate is about 1.4 × 10⁶ bit/s at 75 km.",
        ], result: "About 1.4 × 10⁶ bit/s end to end, compared with zero for a single unrelayed 300 km link." },
    ], faq: [
      { q: "Why can't we just amplify the photons?", a: "Because a quantum state cannot be copied or amplified without disturbing it, so no ordinary amplifier can be used." },
      { q: "What do quantum repeaters change?", a: "They would make key rates fall much more slowly with distance, but they require quantum memories and error correction that are not yet ready." },
      { q: "Why do trusted nodes reduce security?", a: "Each node learns the key, so an attacker who compromises a node gets the key." },
    ], references: [
      "Bennett, C. H., & Brassard, G. (1984). Quantum cryptography: Public key distribution and coin tossing. Proceedings of IEEE International Conference on Computers, Systems and Signal Processing, 175-179.",
      "Gottesman, D., Lo, H.-K., Lütkenhaus, N., & Preskill, J. (2004). Security of quantum key distribution with imperfect devices. Quantum Information and Computation, 4, 325-360.",
      "Ma, X., Qi, B., Zhao, Y., & Lo, H.-K. (2005). Practical decoy state for quantum key distribution. Physical Review A, 72, 012326.",
      "Pirandola, S., Laurenza, R., Ottaviani, C., & Banchi, L. (2017). Fundamental limits of repeaterless quantum communications. Nature Communications, 8, 15043.",
      "Lucamarini, M., Yuan, Z. L., Dynes, J. F., & Shields, A. J. (2018). Overcoming the rate-distance limit of quantum key distribution without quantum repeaters. Nature, 557, 400-403.",
      "Boaron, A., et al. (2018). Secure quantum key distribution over 421 km of optical fiber. Physical Review Letters, 121, 190502.",
      "Xu, F., Ma, X., Zhang, Q., Lo, H.-K., & Pan, J.-W. (2020). Secure quantum key distribution with realistic devices. Reviews of Modern Physics, 92, 025002.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Paper: Decoy State Quantum Key Distribution", href: "/research/lo-ma-chen-decoy-state-qkd-2005" },
      { label: "Paper: Satellite-to-Ground Quantum Key Distribution", href: "/research/liao-satellite-to-ground-qkd-2017" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
      { label: "Myth: Quantum cryptography is completely unhackable", href: "/myths/quantum-cryptography-is-unhackable" },
      { label: "Forecast: Quantum Key Distribution: Where It Fits Beside Post-Quantum Cryptography", href: "/future/qkd-future" },
    ], words: 1208 },
];

export function getCalculator(slug: string) {
  return calculators.find((c) => c.slug === slug);
}
