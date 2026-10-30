export type TimelineCategory =
  | "foundations"
  | "theory"
  | "algorithm"
  | "hardware"
  | "error-correction"
  | "cryptography"
  | "networking"
  | "industry";

export type TimelineLink = { label: string; href: string };

export type TimelineEvent = {
  id: string;
  year: number;
  date: string;
  title: string;
  description: string;
  why: string;
  people: string;
  category: TimelineCategory;
  sources: string[];
  links: TimelineLink[];
};

export type TimelineEra = {
  id: string;
  label: string;
  start: number;
  end: number;
  blurb: string;
};

export const timelineEras: TimelineEra[] = [
  { id: "foundations", label: "Quantum Foundations", start: 1900, end: 1935, blurb: "Planck, Einstein, Bohr, Heisenberg, Schrödinger, and Dirac build quantum mechanics, and Einstein, Podolsky, and Rosen expose entanglement." },
  { id: "information", label: "Information and Physics", start: 1936, end: 1980, blurb: "Computing, information theory, and the first tests of quantum weirdness arrive, and the first ideas about quantum computing appear." },
  { id: "birth", label: "Birth of Quantum Computing", start: 1981, end: 1994, blurb: "Feynman and Deutsch define the field, quantum cryptography and teleportation are invented, and Shor's algorithm changes everything." },
  { id: "theory-expansion", label: "Algorithms, Codes, and First Qubits", start: 1995, end: 2005, blurb: "Grover's algorithm, quantum error correction, and the first working qubits in ions, nuclear spins, and superconducting circuits." },
  { id: "hardware-rise", label: "Hardware Takes Off", start: 2006, end: 2015, blurb: "Transmons, D-Wave's annealers, Rydberg gates, the surface code, and the first loophole-free tests." },
  { id: "nisq", label: "Cloud, NISQ, and Supremacy", start: 2016, end: 2022, blurb: "Quantum computers go on the cloud, Google claims supremacy, post-quantum standards are chosen, and the field goes public." },
  { id: "error-correction", label: "The Error Correction Era", start: 2023, end: 2026, blurb: "Logical qubits beat physical ones, the advantage race heats up, and governments and investors commit billions." },
];

export const timelineEvents: TimelineEvent[] = [
  { year: 1900, date: "14 December 1900", title: "Planck introduces the quantum of energy", description: "Max Planck presented a derivation of the blackbody radiation law to the German Physical Society in which energy is exchanged in discrete packets proportional to frequency, E equals h times nu. He treated the constant h as a mathematical device to fit the data, and did not at first believe that energy was truly quantized. The date is often given as the birthday of quantum theory.", why: "It introduced Planck's constant and the idea that energy comes in discrete steps, the root of every later quantum idea.", people: "Max Planck", category: "foundations", sources: [
      "Planck, M. (1901). Ueber das Gesetz der Energieverteilung im Normalspectrum. Annalen der Physik, 309(3), 553-563.",
    ], links: [], id: "1900-1" },
  { year: 1905, date: "March 1905", title: "Einstein explains the photoelectric effect with light quanta", description: "Albert Einstein proposed that light itself consists of discrete quanta, later called photons, to explain why light ejects electrons from metal only above a threshold frequency, regardless of intensity. Unlike Planck, he treated the quantization as a physical property of light. Experiments by Robert Millikan later confirmed his equation, and Einstein received the 1921 Nobel Prize in Physics for this work.", why: "It established that light behaves as particles as well as waves, which is why photonic qubits are possible today.", people: "Albert Einstein", category: "foundations", sources: [
      "Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. Annalen der Physik, 322(6), 132-148.",
    ], links: [
      { label: "Term: Photonic Qubit", href: "/dictionary/photonic-qubit" },
    ], id: "1905-2" },
  { year: 1913, date: "1913", title: "Bohr's model of the atom", description: "Niels Bohr proposed that electrons in atoms occupy discrete orbits with fixed energies and emit or absorb light only when jumping between them. The model explained the spectrum of hydrogen and made the idea of discrete energy levels central to atomic physics. It was later replaced by full quantum mechanics but left the vocabulary of quantum jumps and energy levels.", why: "Discrete energy levels are the reason atoms and ions can serve as qubits, with two chosen levels acting as 0 and 1.", people: "Niels Bohr", category: "foundations", sources: [
      "Bohr, N. (1913). On the constitution of atoms and molecules. Philosophical Magazine, 26(151), 1-25.",
    ], links: [
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
    ], id: "1913-3" },
  { year: 1922, date: "1922", title: "The Stern-Gerlach experiment shows quantized spin", description: "Otto Stern and Walther Gerlach sent a beam of silver atoms through an inhomogeneous magnetic field and found that it split into two distinct beams instead of spreading smoothly. The result revealed that the angular momentum of the atoms has only discrete orientations along a chosen axis. Spin, as a two-valued property, was explained only later.", why: "It was the first clear observation of a two-level quantum system, the physical template for the qubit.", people: "Otto Stern, Walther Gerlach", category: "foundations", sources: [
      "Gerlach, W., & Stern, O. (1922). Der experimentelle Nachweis der Richtungsquantelung im Magnetfeld. Zeitschrift für Physik, 9, 349-352.",
    ], links: [
      { label: "Term: Qubit", href: "/dictionary/qubit" },
      { label: "Term: Bloch Sphere", href: "/dictionary/bloch-sphere" },
    ], id: "1922-4" },
  { year: 1924, date: "1924", title: "De Broglie's matter waves and Bose's statistics", description: "Louis de Broglie proposed in his doctoral thesis that particles such as electrons have wavelengths, an idea that unified wave and particle pictures. In the same year the Indian physicist Satyendra Nath Bose derived Planck's radiation law by treating photons as indistinguishable particles, and Einstein extended the method to atoms. The resulting Bose-Einstein statistics later predicted Bose-Einstein condensation.", why: "Wave behavior of matter is the basis of interference, and Bose's statistics underpin photonic and cold-atom experiments.", people: "Louis de Broglie, Satyendra Nath Bose", category: "foundations", sources: [
      "de Broglie, L. (1924). A tentative theory of light quanta. Philosophical Magazine, 47(278), 446-458.",
      "Bose, S. N. (1924). Plancks Gesetz und Lichtquantenhypothese. Zeitschrift für Physik, 26, 178-181.",
    ], links: [
      { label: "Term: Quantum Interference", href: "/dictionary/quantum-interference" },
    ], id: "1924-5" },
  { year: 1925, date: "January 1925", title: "Pauli's exclusion principle", description: "Wolfgang Pauli stated that no two electrons in an atom can share the same set of quantum numbers. The principle explained the structure of the periodic table and the stability of matter. It was later shown to follow from the antisymmetry of the wavefunction of fermions, and it shapes the electron structure that quantum chemistry simulations try to compute.", why: "Fermionic antisymmetry is why electronic structure is hard to simulate classically, a main motivation for quantum computers.", people: "Wolfgang Pauli", category: "foundations", sources: [
      "Pauli, W. (1925). Über den Zusammenhang des Abschlusses der Elektronengruppen im Atom mit der Komplexstruktur der Spektren. Zeitschrift für Physik, 31, 765-783.",
    ], links: [
      { label: "Term: Quantum Chemistry Simulation", href: "/dictionary/quantum-chemistry-simulation" },
    ], id: "1925-6" },
  { year: 1925, date: "July 1925", title: "Heisenberg's matrix mechanics", description: "Werner Heisenberg, working on the island of Helgoland, formulated a version of quantum mechanics based on observable quantities arranged as arrays of numbers. Max Born and Pascual Jordan recognized that his arrays were matrices and developed the full theory with him. Matrix mechanics showed that quantities such as position and momentum do not commute.", why: "Non-commuting operators and matrices are the language in which every quantum gate and measurement is written.", people: "Werner Heisenberg, Max Born, Pascual Jordan", category: "foundations", sources: [
      "Heisenberg, W. (1925). Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen. Zeitschrift für Physik, 33, 879-893.",
      "Born, M., & Jordan, P. (1925). Zur Quantenmechanik. Zeitschrift für Physik, 34, 858-888.",
    ], links: [
      { label: "Term: Unitary Operator", href: "/dictionary/unitary-operator" },
      { label: "Term: Pauli Gates (X, Y, Z)", href: "/dictionary/pauli-gates" },
    ], id: "1925-7" },
  { year: 1926, date: "January to June 1926", title: "Schrödinger's wave equation", description: "Erwin Schrödinger published a series of papers presenting a wave equation that governs how the quantum state of a system changes in time. He showed that it reproduces the hydrogen spectrum and that it is equivalent to Heisenberg's matrices. The equation is the central dynamical law of nonrelativistic quantum mechanics and is the starting point of quantum simulation.", why: "Every quantum gate is a solution of the Schrödinger equation for a controlled interaction, and simulating it is Feynman's original goal.", people: "Erwin Schrödinger", category: "foundations", sources: [
      "Schrödinger, E. (1926). Quantisierung als Eigenwertproblem. Annalen der Physik, 79(4), 361-376.",
    ], links: [
      { label: "Term: Schrödinger Equation", href: "/dictionary/schrodinger-equation" },
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
    ], id: "1926-8" },
  { year: 1926, date: "June 1926", title: "Born's probability interpretation", description: "Max Born proposed that the square of the wavefunction's amplitude gives the probability of finding a particle at a given place. The rule explained collision experiments and made probability a built-in feature of quantum theory. Born received the Nobel Prize in 1954 for this interpretation.", why: "The Born rule turns amplitudes into measurement outcomes, which is how every quantum algorithm produces its answer.", people: "Max Born", category: "foundations", sources: [
      "Born, M. (1926). Zur Quantenmechanik der Stoßvorgänge. Zeitschrift für Physik, 37, 863-867.",
    ], links: [
      { label: "Term: Born Rule", href: "/dictionary/born-rule" },
      { label: "Term: Measurement Collapse", href: "/dictionary/measurement-collapse" },
    ], id: "1926-9" },
  { year: 1927, date: "March 1927", title: "Heisenberg's uncertainty principle", description: "Heisenberg showed that certain pairs of properties, such as position and momentum, cannot both be known with arbitrary precision at the same time. The limit is not a flaw of measuring devices but a property of nature. The principle became a cornerstone of the Copenhagen interpretation.", why: "Uncertainty between conjugate bases is the reason quantum key distribution can detect eavesdroppers.", people: "Werner Heisenberg", category: "foundations", sources: [
      "Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik. Zeitschrift für Physik, 43, 172-198.",
    ], links: [
      { label: "Term: Uncertainty Principle", href: "/dictionary/uncertainty-principle" },
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
    ], id: "1927-10" },
  { year: 1927, date: "1927", title: "Davisson and Germer observe electron diffraction; the Solvay debates", description: "Clinton Davisson and Lester Germer at Bell Labs showed that electrons scatter from a nickel crystal in a diffraction pattern, confirming de Broglie's wave hypothesis. In October of the same year, the Fifth Solvay Conference in Brussels brought together Einstein, Bohr, Heisenberg, Schrödinger, and others in the famous debates over how to interpret quantum mechanics.", why: "Interference of matter is the physical basis of quantum computation, and the interpretation debates shaped later tests of entanglement.", people: "Clinton Davisson, Lester Germer, Niels Bohr, Albert Einstein", category: "foundations", sources: [
      "Davisson, C., & Germer, L. H. (1927). Diffraction of electrons by a crystal of nickel. Physical Review, 30(6), 705-740.",
    ], links: [
      { label: "Term: Quantum Interference", href: "/dictionary/quantum-interference" },
    ], id: "1927-11" },
  { year: 1928, date: "1928", title: "Dirac's relativistic equation for the electron", description: "Paul Dirac combined quantum mechanics with special relativity in an equation for the electron that naturally included spin and predicted the existence of antimatter. The positron was discovered in 1932. Dirac's 1930 textbook, The Principles of Quantum Mechanics, gave the bra-ket notation that physicists and quantum programmers use today.", why: "Dirac notation is the standard way to write qubit states, such as |0> and |1>.", people: "Paul Dirac", category: "foundations", sources: [
      "Dirac, P. A. M. (1928). The quantum theory of the electron. Proceedings of the Royal Society A, 117(778), 610-624.",
    ], links: [
      { label: "Term: Qubit", href: "/dictionary/qubit" },
    ], id: "1928-12" },
  { year: 1932, date: "1932", title: "Von Neumann formalizes quantum mechanics", description: "John von Neumann published Mathematical Foundations of Quantum Mechanics, presenting the theory in terms of Hilbert spaces and operators, introducing the density matrix, and analyzing the measurement process. His formulation is the standard framework used in quantum information theory today.", why: "The Hilbert space and density matrix are the mathematical objects that describe qubits, noise, and entanglement.", people: "John von Neumann", category: "foundations", sources: [
      "von Neumann, J. (1932). Mathematische Grundlagen der Quantenmechanik. Berlin: Springer.",
    ], links: [
      { label: "Term: Hilbert Space", href: "/dictionary/hilbert-space" },
      { label: "Term: Density Matrix", href: "/dictionary/density-matrix" },
    ], id: "1932-13" },
  { year: 1935, date: "15 May 1935", title: "The Einstein-Podolsky-Rosen paper", description: "Einstein, Boris Podolsky, and Nathan Rosen argued that quantum mechanics must be incomplete, using a thought experiment on two particles whose properties are correlated however far apart they are. They assumed that no influence can travel faster than light and that physical properties exist before measurement. The argument pointed to what we now call entanglement.", why: "It identified the strange correlations that Bell later turned into a testable theorem and that quantum computers use as a resource.", people: "Albert Einstein, Boris Podolsky, Nathan Rosen", category: "foundations", sources: [
      "Einstein, A., Podolsky, B., & Rosen, N. (1935). Can quantum-mechanical description of physical reality be considered complete? Physical Review, 47(10), 777-780.",
    ], links: [
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
    ], id: "1935-14" },
  { year: 1935, date: "November 1935", title: "Schrödinger's cat and the word entanglement", description: "In a response to EPR, Schrödinger coined the term Verschränkung, entanglement, and described it as the characteristic trait of quantum mechanics. In the same series of papers he gave the cat thought experiment, in which a cat linked to a radioactive atom would be in a superposition of alive and dead, to show how strange it is to apply superposition to large objects.", why: "The cat paradox frames the measurement and decoherence problems that every quantum hardware team still fights.", people: "Erwin Schrödinger", category: "foundations", sources: [
      "Schrödinger, E. (1935). Die gegenwärtige Situation in der Quantenmechanik. Die Naturwissenschaften, 23, 807-812, 823-828, 844-849.",
    ], links: [
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
    ], id: "1935-15" },
  { year: 1936, date: "November 1936", title: "Turing defines the universal computing machine", description: "Alan Turing described an abstract machine that can compute anything that can be computed by following rules, and showed that a single universal machine can imitate all others. Alonzo Church reached equivalent conclusions with a different formalism. Together they gave the Church-Turing thesis, the idea that these machines capture what any computer can do.", why: "Quantum computing asks whether physics allows machines beyond this classical limit in efficiency, which is Deutsch's question of 1985.", people: "Alan Turing, Alonzo Church", category: "theory", sources: [
      "Turing, A. M. (1936). On computable numbers, with an application to the Entscheidungsproblem. Proceedings of the London Mathematical Society, s2-42(1), 230-265.",
    ], links: [
      { label: "Paper: Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer", href: "/research/deutsch-universal-quantum-computer-1985" },
    ], id: "1936-16" },
  { year: 1947, date: "December 1947", title: "The transistor is invented at Bell Labs", description: "John Bardeen and Walter Brattain, working with William Shockley, demonstrated the first point-contact transistor, a solid-state device that amplifies signals. It applied quantum mechanics of solids to electronics and launched the age of digital computing. The three shared the 1956 Nobel Prize in Physics.", why: "The transistor made classical computers possible, and its fabrication methods are now used to build spin-qubit and superconducting chips.", people: "John Bardeen, Walter Brattain, William Shockley", category: "industry", sources: [
      "Bardeen, J., & Brattain, W. H. (1948). The transistor, a semi-conductor triode. Physical Review, 74(2), 230-231.",
    ], links: [
      { label: "Term: Spin Qubit", href: "/dictionary/spin-qubit" },
    ], id: "1947-17" },
  { year: 1948, date: "July and October 1948", title: "Shannon founds information theory", description: "Claude Shannon's A Mathematical Theory of Communication defined the bit as the unit of information, introduced entropy as a measure of uncertainty, and proved limits on reliable communication over noisy channels. It showed that errors can be corrected with redundancy, an idea that quantum error correction would later adapt.", why: "The bit, entropy, and channel capacity are the concepts that the qubit and quantum information theory generalize.", people: "Claude Shannon", category: "theory", sources: [
      "Shannon, C. E. (1948). A mathematical theory of communication. Bell System Technical Journal, 27, 379-423 and 623-656.",
    ], links: [
      { label: "Term: Qubit", href: "/dictionary/qubit" },
      { label: "Paper: Scheme for Reducing Decoherence in Quantum Computer Memory", href: "/research/shor-error-correcting-code-1995" },
    ], id: "1948-18" },
  { year: 1948, date: "1948", title: "Feynman's path-integral formulation", description: "Richard Feynman reformulated quantum mechanics as a sum over all possible paths a particle can take, each contributing an amplitude. The method gave a vivid picture of interference as the adding and cancelling of paths, and it became central to quantum field theory. Feynman shared the 1965 Nobel Prize in Physics for quantum electrodynamics.", why: "The idea that amplitudes of different paths add or cancel is exactly how quantum algorithms amplify right answers.", people: "Richard Feynman", category: "foundations", sources: [
      "Feynman, R. P. (1948). Space-time approach to non-relativistic quantum mechanics. Reviews of Modern Physics, 20(2), 367-387.",
    ], links: [
      { label: "Term: Quantum Interference", href: "/dictionary/quantum-interference" },
    ], id: "1948-19" },
  { year: 1957, date: "July 1957", title: "Everett's relative-state interpretation", description: "Hugh Everett III proposed in his doctoral work that the wavefunction never collapses and that all outcomes of a measurement occur in branching, noninteracting worlds. The many-worlds interpretation was little noticed at first, but it later influenced David Deutsch, who used it to motivate quantum computing.", why: "It gave Deutsch a physical picture of quantum parallelism and shaped how many people think about quantum computation.", people: "Hugh Everett III", category: "foundations", sources: [
      "Everett, H. (1957). Relative state formulation of quantum mechanics. Reviews of Modern Physics, 29(3), 454-462.",
    ], links: [
      { label: "Term: Measurement Collapse", href: "/dictionary/measurement-collapse" },
      { label: "Paper: Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer", href: "/research/deutsch-universal-quantum-computer-1985" },
    ], id: "1957-20" },
  { year: 1958, date: "1958 to 1959", title: "The integrated circuit", description: "Jack Kilby at Texas Instruments built the first working integrated circuit in 1958, and Robert Noyce at Fairchild developed a practical silicon version in 1959. Putting many transistors on one chip made computers smaller and cheaper, and it set the manufacturing path that today's silicon quantum devices follow.", why: "The same lithographic processes now make superconducting and silicon spin qubits.", people: "Jack Kilby, Robert Noyce", category: "industry", sources: [
      "Kilby, J. S. (1976). Invention of the integrated circuit. IEEE Transactions on Electron Devices, 23(7), 648-654.",
    ], links: [
      { label: "Term: Spin Qubit", href: "/dictionary/spin-qubit" },
    ], id: "1958-21" },
  { year: 1960, date: "May 1960", title: "The first laser", description: "Theodore Maiman at Hughes Research Laboratories operated the first laser, using a ruby crystal. The laser provides coherent light that can be tuned to atomic transitions, and it later became the basic tool for cooling, trapping, and controlling atoms and ions.", why: "Every trapped-ion and neutral-atom quantum computer uses lasers to cool, control, and read out qubits.", people: "Theodore Maiman", category: "hardware", sources: [
      "Maiman, T. H. (1960). Stimulated optical radiation in ruby. Nature, 187, 493-494.",
    ], links: [
      { label: "Term: Optical Tweezers", href: "/dictionary/optical-tweezers" },
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
    ], id: "1960-22" },
  { year: 1961, date: "1961", title: "Landauer links information to physics", description: "Rolf Landauer at IBM argued that erasing a bit of information must dissipate a minimum amount of heat, about kT ln 2, while reversible logical operations need not. This tied information to thermodynamics and raised the question of whether computation can be reversible, a property that quantum gates have.", why: "All quantum gates are reversible, and Landauer's insight shows why that matters physically.", people: "Rolf Landauer", category: "theory", sources: [
      "Landauer, R. (1961). Irreversibility and heat generation in the computing process. IBM Journal of Research and Development, 5(3), 183-191.",
    ], links: [
      { label: "Term: Unitary Operator", href: "/dictionary/unitary-operator" },
      { label: "Term: Quantum Gate", href: "/dictionary/quantum-gate" },
    ], id: "1961-23" },
  { year: 1964, date: "1964", title: "Bell's theorem", description: "John Stewart Bell proved that no theory in which measurement results are determined by local hidden variables can reproduce all the predictions of quantum mechanics for entangled particles. He derived an inequality that can be tested in a laboratory. The theorem moved the EPR debate from philosophy into experiment.", why: "Bell violations certify real quantum correlations and are the basis of device-independent cryptography and randomness.", people: "John Stewart Bell", category: "foundations", sources: [
      "Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. Physics Physique Fizika, 1(3), 195-200.",
    ], links: [
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
    ], id: "1964-24" },
  { year: 1965, date: "19 April 1965", title: "Moore's observation on chip growth", description: "Gordon Moore, a co-founder of Fairchild and later Intel, observed that the number of components on an integrated circuit was doubling roughly every year, and he later revised the pace to every two years. The observation, called Moore's law, guided the semiconductor industry for decades and created the expectation of steady computing progress.", why: "Quantum computing is often discussed as a way forward once classical scaling slows, though the two technologies serve different tasks.", people: "Gordon Moore", category: "industry", sources: [
      "Moore, G. E. (1965). Cramming more components onto integrated circuits. Electronics, 38(8), 114-117.",
    ], links: [], id: "1965-25" },
  { year: 1970, date: "1970", title: "Wiesner's conjugate coding and Zeh's decoherence", description: "Stephen Wiesner, then a graduate student at Columbia, wrote a paper proposing quantum banknotes and quantum multiplexing based on states in conjugate bases, which was rejected and only published in 1983. In the same year H. Dieter Zeh argued that interaction with the environment explains why quantum superpositions are not seen in everyday life, laying the groundwork for decoherence theory.", why: "Wiesner's idea became BB84 quantum key distribution, and decoherence is the central enemy of every quantum computer.", people: "Stephen Wiesner, H. Dieter Zeh", category: "cryptography", sources: [
      "Wiesner, S. (1983). Conjugate coding. SIGACT News, 15(1), 78-88.",
      "Zeh, H. D. (1970). On the interpretation of measurement in quantum theory. Foundations of Physics, 1(1), 69-76.",
    ], links: [
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
    ], id: "1970-26" },
  { year: 1972, date: "1972", title: "The first experimental test of Bell's inequality", description: "Stuart Freedman and John Clauser at Berkeley measured the correlated polarizations of photon pairs emitted by calcium atoms and found a violation of a Bell-type inequality, in agreement with quantum mechanics. The experiment had loopholes, but it started a long series of tests.", why: "It was the first evidence that nature does not follow local hidden variable rules, leading to the 2022 Nobel Prize for Clauser, Aspect, and Zeilinger.", people: "Stuart Freedman, John Clauser", category: "foundations", sources: [
      "Freedman, S. J., & Clauser, J. F. (1972). Experimental test of local hidden-variable theories. Physical Review Letters, 28(14), 938-941.",
    ], links: [
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
    ], id: "1972-27" },
  { year: 1973, date: "1973", title: "Bennett shows computation can be reversible", description: "Charles Bennett at IBM showed that any computation can in principle be carried out reversibly, without erasing information, by keeping a record of intermediate steps and then undoing them. This answered a worry raised by Landauer's principle and showed that computation need not dissipate energy fundamentally.", why: "Quantum computation is reversible by nature, and Bennett's methods are used in uncomputation of ancilla qubits.", people: "Charles Bennett", category: "theory", sources: [
      "Bennett, C. H. (1973). Logical reversibility of computation. IBM Journal of Research and Development, 17(6), 525-532.",
    ], links: [
      { label: "Term: Ancilla Qubit", href: "/dictionary/ancilla-qubit" },
    ], id: "1973-28" },
  { year: 1976, date: "November 1976", title: "Public-key cryptography is invented", description: "Whitfield Diffie and Martin Hellman published New Directions in Cryptography, describing how two people can agree on a secret over a public channel using a mathematical problem that is easy in one direction and hard in the other. Their key exchange rests on the discrete logarithm problem.", why: "Shor's algorithm later showed that discrete logarithms can be solved on a quantum computer, which put this whole method at risk.", people: "Whitfield Diffie, Martin Hellman", category: "cryptography", sources: [
      "Diffie, W., & Hellman, M. (1976). New directions in cryptography. IEEE Transactions on Information Theory, 22(6), 644-654.",
    ], links: [
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
    ], id: "1976-29" },
  { year: 1977, date: "1977 to 1978", title: "The RSA cryptosystem", description: "Ronald Rivest, Adi Shamir, and Leonard Adleman at MIT invented a public-key encryption and signature scheme whose security rests on the difficulty of factoring the product of two large primes. Their method was published in 1978 and became the basis of secure communication on the internet.", why: "RSA is the main system that a large quantum computer running Shor's algorithm would break.", people: "Ronald Rivest, Adi Shamir, Leonard Adleman", category: "cryptography", sources: [
      "Rivest, R. L., Shamir, A., & Adleman, L. (1978). A method for obtaining digital signatures and public-key cryptosystems. Communications of the ACM, 21(2), 120-126.",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], id: "1977-30" },
  { year: 1980, date: "1980", title: "The first ideas of quantum computing", description: "Paul Benioff described a quantum mechanical model of a Turing machine, showing that a computer could in principle operate by the laws of quantum mechanics. In the same year the Soviet mathematician Yuri Manin remarked in his book that a quantum automaton might be needed to describe the complexity of quantum systems.", why: "These are the earliest proposals that computers might be built from quantum systems, just before Feynman's talk.", people: "Paul Benioff, Yuri Manin", category: "theory", sources: [
      "Benioff, P. (1980). The computer as a physical system: A microscopic quantum mechanical Hamiltonian model of computers as represented by Turing machines. Journal of Statistical Physics, 22(5), 563-591.",
      "Manin, Yu. I. (1980). Vychislimoe i nevychislimoe [Computable and Uncomputable]. Moscow: Sovetskoe Radio.",
    ], links: [
      { label: "Term: Quantum Circuit", href: "/dictionary/quantum-circuit" },
    ], id: "1980-31" },
  { year: 1981, date: "6 to 8 May 1981", title: "Feynman's talk at the MIT Physics of Computation conference", description: "At a conference organized by Edward Fredkin, Rolf Landauer, and Tommaso Toffoli, Richard Feynman argued that classical computers cannot efficiently simulate quantum systems because the number of quantities to track grows exponentially. He suggested building computers from quantum mechanical elements so that nature could be simulated exactly. The talk appeared in print in 1982.", why: "Most historians date the start of quantum computing to this talk.", people: "Richard Feynman", category: "theory", sources: [
      "Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics, 21(6-7), 467-488.",
    ], links: [
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Term: Quantum Simulator", href: "/dictionary/quantum-simulator" },
    ], id: "1981-32" },
  { year: 1982, date: "1982", title: "The no-cloning theorem", description: "William Wootters and Wojciech Zurek, and independently Dennis Dieks, proved that no process can copy an unknown quantum state perfectly. The result came in reply to a proposal for faster-than-light signaling using a cloning device. It has become a pillar of quantum information.", why: "No-cloning makes quantum key distribution secure and forces quantum error correction to avoid copying.", people: "William Wootters, Wojciech Zurek, Dennis Dieks", category: "theory", sources: [
      "Wootters, W. K., & Zurek, W. H. (1982). A single quantum cannot be cloned. Nature, 299, 802-803.",
      "Dieks, D. (1982). Communication by EPR devices. Physics Letters A, 92(6), 271-272.",
    ], links: [
      { label: "Term: No-Cloning Theorem", href: "/dictionary/no-cloning-theorem" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
    ], id: "1982-33" },
  { year: 1982, date: "December 1982", title: "Aspect's experiments strengthen the Bell test", description: "Alain Aspect, Jean Dalibard, and Gérard Roger at the University of Paris-Saclay used polarizers that were switched while the photons were in flight, closing the loophole that the detectors could have communicated. The results again violated Bell's inequality by many standard deviations and agreed with quantum mechanics.", why: "It made the case that nature is nonlocal in the Bell sense very hard to deny, and it won Aspect a share of the 2022 Nobel Prize.", people: "Alain Aspect, Jean Dalibard, Gérard Roger", category: "foundations", sources: [
      "Aspect, A., Dalibard, J., & Roger, G. (1982). Experimental test of Bell's inequalities using time-varying analyzers. Physical Review Letters, 49(25), 1804-1807.",
    ], links: [
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
    ], id: "1982-34" },
  { year: 1984, date: "December 1984", title: "BB84, the first quantum key distribution protocol", description: "Charles Bennett and Gilles Brassard presented a way for two parties to create a secret key by sending single photons in randomly chosen bases, with any eavesdropping showing up as errors. The paper was given at a conference in Bangalore, India, and built on Wiesner's earlier idea of conjugate coding.", why: "It started quantum cryptography, which is now the most mature quantum technology.", people: "Charles Bennett, Gilles Brassard", category: "cryptography", sources: [
      "Bennett, C. H., & Brassard, G. (1984). Quantum cryptography: Public key distribution and coin tossing. Proceedings of the IEEE International Conference on Computers, Systems and Signal Processing, Bangalore, 175-179.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Algorithm: BB84 Quantum Key Distribution", href: "/algorithms/bb84-protocol" },
    ], id: "1984-35" },
  { year: 1985, date: "1985", title: "Deutsch defines the universal quantum computer", description: "David Deutsch at Oxford formulated the quantum Turing machine and argued that the Church-Turing principle should be restated in physical terms. He gave the first example of a task done faster by exploiting quantum parallelism, a one-bit problem solved with a single function evaluation instead of two.", why: "It turned Feynman's suggestion into a precise model of computation.", people: "David Deutsch", category: "theory", sources: [
      "Deutsch, D. (1985). Quantum theory, the Church-Turing principle and the universal quantum computer. Proceedings of the Royal Society A, 400(1818), 97-117.",
    ], links: [
      { label: "Paper: Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer", href: "/research/deutsch-universal-quantum-computer-1985" },
      { label: "Algorithm: Deutsch-Jozsa Algorithm", href: "/algorithms/deutsch-jozsa" },
    ], id: "1985-36" },
  { year: 1989, date: "1989", title: "The first quantum cryptography prototype", description: "Bennett, Brassard, and their coworkers built a working quantum key distribution system at IBM's Thomas J. Watson Research Center. Photons were sent over about 32 centimeters of free space on a laboratory bench, and a key was exchanged. The team joked that the system worked in the dark.", why: "It showed that quantum cryptography is not only a theory but a working technology.", people: "Charles Bennett, Gilles Brassard, John Smolin", category: "cryptography", sources: [
      "Bennett, C. H., Bessette, F., Brassard, G., Salvail, L., & Smolin, J. (1992). Experimental quantum cryptography. Journal of Cryptology, 5(1), 3-28.",
    ], links: [
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
    ], id: "1989-37" },
  { year: 1989, date: "1989", title: "Deutsch introduces quantum circuits", description: "In a second paper, Deutsch described computations as networks of quantum gates acting on qubits, the model that is used almost universally today. He showed that a small set of gates suffices for universal computation.", why: "The circuit diagram, with qubit wires and gates, comes from this work.", people: "David Deutsch", category: "theory", sources: [
      "Deutsch, D. (1989). Quantum computational networks. Proceedings of the Royal Society A, 425(1868), 73-90.",
    ], links: [
      { label: "Term: Quantum Circuit", href: "/dictionary/quantum-circuit" },
      { label: "Term: Universal Gate Set", href: "/dictionary/universal-gate-set" },
    ], id: "1989-38" },
  { year: 1991, date: "1991", title: "Ekert's entanglement-based key distribution", description: "Artur Ekert, then a doctoral student at Oxford, proposed a key distribution protocol in which entangled pairs are shared and the security is certified by a violation of Bell's inequality. The protocol, called E91, linked a foundational result to practical cryptography.", why: "It is the basis of entanglement-based QKD, including satellite experiments and device-independent protocols.", people: "Artur Ekert", category: "cryptography", sources: [
      "Ekert, A. K. (1991). Quantum cryptography based on Bell's theorem. Physical Review Letters, 67(6), 661-663.",
    ], links: [
      { label: "Paper: Quantum Cryptography Based on Bell's Theorem", href: "/research/ekert-quantum-cryptography-bell-1991" },
      { label: "Algorithm: E91 Quantum Key Distribution", href: "/algorithms/e91-protocol" },
    ], id: "1991-39" },
  { year: 1992, date: "1992", title: "The Deutsch-Jozsa algorithm and superdense coding", description: "David Deutsch and Richard Jozsa found a quantum algorithm that distinguishes constant from balanced functions with one query, an exponential improvement over deterministic methods. In the same year Bennett and Stephen Wiesner showed superdense coding, in which one entangled pair lets a sender transmit two classical bits by sending a single qubit.", why: "These were the first clear examples that quantum resources beat classical ones in computation and communication.", people: "David Deutsch, Richard Jozsa, Charles Bennett, Stephen Wiesner", category: "algorithm", sources: [
      "Deutsch, D., & Jozsa, R. (1992). Rapid solution of problems by quantum computation. Proceedings of the Royal Society A, 439(1907), 553-558.",
      "Bennett, C. H., & Wiesner, S. J. (1992). Communication via one- and two-particle operators on Einstein-Podolsky-Rosen states. Physical Review Letters, 69(20), 2881-2884.",
    ], links: [
      { label: "Paper: Rapid Solution of Problems by Quantum Computation", href: "/research/deutsch-jozsa-rapid-solution-1992" },
      { label: "Algorithm: Deutsch-Jozsa Algorithm", href: "/algorithms/deutsch-jozsa" },
    ], id: "1992-40" },
  { year: 1993, date: "March 1993", title: "Quantum teleportation", description: "Six authors at IBM, Montréal, Technion, and Williams College showed that an unknown quantum state can be transferred from one place to another using a shared entangled pair and two classical bits. The original state is destroyed in the process, so no copying occurs.", why: "Teleportation is a building block of quantum networks, repeaters, and fault-tolerant gates.", people: "Charles Bennett, Gilles Brassard, Claude Crépeau, Richard Jozsa, Asher Peres, William Wootters", category: "networking", sources: [
      "Bennett, C. H., Brassard, G., Crépeau, C., Jozsa, R., Peres, A., & Wootters, W. K. (1993). Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 70(13), 1895-1899.",
    ], links: [
      { label: "Paper: Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels", href: "/research/bennett-quantum-teleportation-1993" },
      { label: "Term: Quantum Teleportation", href: "/dictionary/quantum-teleportation" },
    ], id: "1993-41" },
  { year: 1993, date: "1993", title: "Bernstein and Vazirani build quantum complexity theory", description: "Ethan Bernstein and Umesh Vazirani gave the first rigorous treatment of quantum Turing machines, proved that a universal one exists, defined the class BQP, and showed an oracle problem where quantum computers beat classical probabilistic ones by a super-polynomial factor. Andrew Yao showed the same year that quantum circuits are equivalent to the Turing machine model.", why: "BQP is still the standard definition of what quantum computers can solve efficiently.", people: "Ethan Bernstein, Umesh Vazirani, Andrew Yao", category: "theory", sources: [
      "Bernstein, E., & Vazirani, U. (1997). Quantum complexity theory. SIAM Journal on Computing, 26(5), 1411-1473.",
      "Yao, A. C.-C. (1993). Quantum circuit complexity. Proceedings of the 34th IEEE Symposium on Foundations of Computer Science, 352-361.",
    ], links: [
      { label: "Paper: Quantum Complexity Theory", href: "/research/bernstein-vazirani-quantum-complexity-theory-1997" },
      { label: "Term: BQP Complexity Class", href: "/dictionary/bqp" },
    ], id: "1993-42" },
  { year: 1993, date: "December 1993", title: "Entanglement swapping and the first hardware proposal", description: "Marek Zukowski, Anton Zeilinger, Michael Horne, and Artur Ekert showed that measuring one particle from each of two entangled pairs can entangle the other two, which never interacted. Separately, Seth Lloyd published a proposal for a realizable quantum computer built from an array of coupled quantum dots or a polymer.", why: "Swapping is the key step of quantum repeaters, and Lloyd's paper was among the first to propose real hardware.", people: "Marek Zukowski, Anton Zeilinger, Seth Lloyd", category: "networking", sources: [
      "Zukowski, M., Zeilinger, A., Horne, M. A., & Ekert, A. K. (1993). Event-ready-detectors Bell experiment via entanglement swapping. Physical Review Letters, 71(26), 4287-4290.",
      "Lloyd, S. (1993). A potentially realizable quantum computer. Science, 261(5128), 1569-1571.",
    ], links: [
      { label: "Term: Entanglement Swapping", href: "/dictionary/entanglement-swapping" },
      { label: "Term: Quantum Repeater", href: "/dictionary/quantum-repeater" },
    ], id: "1993-43" },
  { year: 1994, date: "1994", title: "Simon's algorithm", description: "Daniel Simon described a problem, finding a hidden bit string in a function that is two-to-one, that a quantum computer solves with about n queries while any classical probabilistic algorithm needs exponentially many. It was the first proven exponential separation against randomized algorithms and directly inspired Shor.", why: "It showed that the Fourier-sampling approach could give exponential speedups.", people: "Daniel Simon", category: "algorithm", sources: [
      "Simon, D. R. (1997). On the power of quantum computation. SIAM Journal on Computing, 26(5), 1474-1483.",
    ], links: [
      { label: "Paper: On the Power of Quantum Computation", href: "/research/simon-power-of-quantum-computation-1994" },
      { label: "Algorithm: Simon's Algorithm", href: "/algorithms/simons-algorithm" },
    ], id: "1994-44" },
  { year: 1994, date: "April to November 1994", title: "Shor's factoring algorithm", description: "Peter Shor at AT&T Bell Laboratories found that a quantum computer can factor large integers and compute discrete logarithms in polynomial time. He announced the result in spring 1994, and presented it at the Symposium on Foundations of Computer Science in November. Don Coppersmith's approximate quantum Fourier transform appeared the same year.", why: "It showed that quantum computers threaten the public-key cryptography that protects the internet, and it drew governments and companies into the field.", people: "Peter Shor, Don Coppersmith", category: "algorithm", sources: [
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26(5), 1484-1509. arXiv:quant-ph/9508027.",
      "Coppersmith, D. (1994). An approximate Fourier transform useful in quantum factoring. IBM Research Report RC19642.",
    ], links: [
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Algorithm: Shor's Algorithm", href: "/algorithms/shors-algorithm" },
      { label: "Algorithm: Quantum Fourier Transform (QFT)", href: "/algorithms/quantum-fourier-transform" },
    ], id: "1994-45" },
  { year: 1995, date: "May and December 1995", title: "Trapped-ion quantum computer proposed and a gate demonstrated", description: "Ignacio Cirac and Peter Zoller proposed using laser-cooled ions in a trap as qubits, with their shared motion mediating two-qubit gates. Seven months later, David Wineland's group at NIST, led in the experiment by Chris Monroe, demonstrated a controlled-NOT type gate between an ion's internal state and its motion.", why: "It was the first complete blueprint and first logic gate for a quantum computer, and trapped ions are still among the best qubits.", people: "Ignacio Cirac, Peter Zoller, Chris Monroe, David Wineland", category: "hardware", sources: [
      "Cirac, J. I., & Zoller, P. (1995). Quantum computations with cold trapped ions. Physical Review Letters, 74(20), 4091-4094.",
      "Monroe, C., Meekhof, D. M., King, B. E., Itano, W. M., & Wineland, D. J. (1995). Demonstration of a fundamental quantum logic gate. Physical Review Letters, 75(25), 4714-4717.",
    ], links: [
      { label: "Paper: Quantum Computations with Cold Trapped Ions", href: "/research/cirac-zoller-trapped-ions-1995" },
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
    ], id: "1995-46" },
  { year: 1995, date: "October 1995", title: "Shor's error-correcting code and the word qubit", description: "Peter Shor showed that quantum information can be protected by encoding one qubit in nine, answering the objection that quantum states are too fragile and cannot be copied. In the same year Benjamin Schumacher published a paper introducing the term qubit, crediting William Wootters for the word.", why: "Error correction made large quantum computers possible in principle, and the field got its name for the basic unit.", people: "Peter Shor, Benjamin Schumacher", category: "error-correction", sources: [
      "Shor, P. W. (1995). Scheme for reducing decoherence in quantum computer memory. Physical Review A, 52(4), R2493-R2496.",
      "Schumacher, B. (1995). Quantum coding. Physical Review A, 51(4), 2738-2747.",
    ], links: [
      { label: "Paper: Scheme for Reducing Decoherence in Quantum Computer Memory", href: "/research/shor-error-correcting-code-1995" },
      { label: "Term: Qubit", href: "/dictionary/qubit" },
    ], id: "1995-47" },
  { year: 1995, date: "1995", title: "Kitaev's phase estimation and Bose-Einstein condensation", description: "Alexei Kitaev posted a paper on measuring eigenvalues of unitary operators and the abelian stabilizer problem, giving the phase estimation procedure. In June, Eric Cornell and Carl Wieman at JILA, and in later months Wolfgang Ketterle at MIT, produced the first Bose-Einstein condensates of atomic gases, opening the era of controlled cold atoms.", why: "Phase estimation is the core of many fault-tolerant algorithms, and cold-atom control underlies neutral-atom quantum computers.", people: "Alexei Kitaev, Eric Cornell, Carl Wieman, Wolfgang Ketterle", category: "algorithm", sources: [
      "Kitaev, A. Yu. (1995). Quantum measurements and the Abelian stabilizer problem. arXiv:quant-ph/9511026.",
      "Anderson, M. H., Ensher, J. R., Matthews, M. R., Wieman, C. E., & Cornell, E. A. (1995). Observation of Bose-Einstein condensation in a dilute atomic vapor. Science, 269(5221), 198-201.",
    ], links: [
      { label: "Paper: Quantum Measurements and the Abelian Stabilizer Problem", href: "/research/kitaev-abelian-stabilizer-phase-estimation-1995" },
      { label: "Algorithm: Quantum Phase Estimation (QPE)", href: "/algorithms/quantum-phase-estimation" },
    ], id: "1995-48" },
  { year: 1996, date: "May 1996", title: "Grover's search algorithm", description: "Lov Grover at Bell Labs showed that a quantum computer can search an unsorted list of N items in about the square root of N steps. A proof by Bennett, Bernstein, Brassard, and Vazirani showed this is optimal. The algorithm applies to any problem where a solution can be recognized.", why: "It gave a broad, if modest, quantum speedup and the amplitude amplification idea used everywhere.", people: "Lov Grover", category: "algorithm", sources: [
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. Proceedings of the 28th Annual ACM Symposium on Theory of Computing, 212-219. arXiv:quant-ph/9605043.",
      "Bennett, C. H., Bernstein, E., Brassard, G., & Vazirani, U. (1997). Strengths and weaknesses of quantum computing. SIAM Journal on Computing, 26(5), 1510-1523.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
    ], id: "1996-49" },
  { year: 1996, date: "1996", title: "Steane code, CSS codes, fault tolerance, and universal simulators", description: "Andrew Steane found a seven-qubit error-correcting code, and Robert Calderbank and Peter Shor proved that good quantum codes exist, giving the CSS construction. Shor gave the first fault-tolerant constructions for computing on encoded qubits. Seth Lloyd proved that quantum computers can efficiently simulate any local quantum system.", why: "These results made the error-correction program concrete and put Feynman's conjecture on firm ground.", people: "Andrew Steane, Robert Calderbank, Peter Shor, Seth Lloyd", category: "error-correction", sources: [
      "Steane, A. M. (1996). Error correcting codes in quantum theory. Physical Review Letters, 77(5), 793-797.",
      "Calderbank, A. R., & Shor, P. W. (1996). Good quantum error-correcting codes exist. Physical Review A, 54(2), 1098-1105.",
      "Lloyd, S. (1996). Universal quantum simulators. Science, 273(5278), 1073-1078.",
    ], links: [
      { label: "Paper: Error Correcting Codes in Quantum Theory", href: "/research/steane-error-correcting-codes-1996" },
      { label: "Paper: Good Quantum Error-Correcting Codes Exist", href: "/research/calderbank-shor-good-codes-exist-1996" },
      { label: "Paper: Universal Quantum Simulators", href: "/research/lloyd-universal-quantum-simulators-1996" },
    ], id: "1996-50" },
  { year: 1997, date: "1997", title: "Stabilizer codes, the toric code, and the threshold theorem", description: "Daniel Gottesman introduced the stabilizer formalism in his doctoral thesis at Caltech. Alexei Kitaev proposed the toric code, a topological code on a torus, and Dorit Aharonov and Michael Ben-Or presented a proof that error rates below a threshold allow arbitrarily long quantum computations. Knill, Laflamme, and Zurek reached a similar result in 1998, and Kitaev reached it in the same period.", why: "The threshold theorem answered the objection that noise would always defeat quantum computers.", people: "Daniel Gottesman, Alexei Kitaev, Dorit Aharonov, Michael Ben-Or", category: "error-correction", sources: [
      "Gottesman, D. (1997). Stabilizer codes and quantum error correction. PhD thesis, California Institute of Technology. arXiv:quant-ph/9705052.",
      "Aharonov, D., & Ben-Or, M. (2008). Fault-tolerant quantum computation with constant error rate. SIAM Journal on Computing, 38(4), 1207-1282.",
      "Kitaev, A. Yu. (2003). Fault-tolerant quantum computation by anyons. Annals of Physics, 303(1), 2-30.",
    ], links: [
      { label: "Paper: Stabilizer Codes and Quantum Error Correction", href: "/research/gottesman-stabilizer-codes-thesis-1997" },
      { label: "Paper: Fault-Tolerant Quantum Computation by Anyons", href: "/research/kitaev-fault-tolerant-anyons-2003" },
      { label: "Paper: Fault-Tolerant Quantum Computation with Constant Error Rate", href: "/research/aharonov-ben-or-fault-tolerant-constant-error-1997" },
      { label: "Term: Threshold Theorem", href: "/dictionary/threshold-theorem" },
    ], id: "1997-51" },
  { year: 1997, date: "1997", title: "NMR quantum computing and the first teleportation experiments", description: "David Cory, Amr Fahmy, and Timothy Havel, and Neil Gershenfeld and Isaac Chuang, showed that nuclear spins of molecules in liquid can act as qubits using bulk magnetic resonance. Separately, Dik Bouwmeester, Anton Zeilinger, and colleagues in Innsbruck performed the first experimental teleportation of a photon's polarization state, and a Rome group followed in 1998.", why: "These were the first real quantum information experiments, and they opened the door to hands-on quantum computing.", people: "David Cory, Neil Gershenfeld, Isaac Chuang, Anton Zeilinger", category: "hardware", sources: [
      "Gershenfeld, N. A., & Chuang, I. L. (1997). Bulk spin-resonance quantum computation. Science, 275(5298), 350-356.",
      "Bouwmeester, D., Pan, J.-W., Mattle, K., Eibl, M., Weinfurter, H., & Zeilinger, A. (1997). Experimental quantum teleportation. Nature, 390, 575-579.",
    ], links: [
      { label: "Term: Quantum Teleportation", href: "/dictionary/quantum-teleportation" },
    ], id: "1997-52" },
  { year: 1998, date: "1998", title: "The first quantum algorithms run on hardware", description: "Teams at Oxford, led by Jonathan Jones and Michele Mosca, and at IBM and MIT, led by Isaac Chuang, ran the Deutsch-Jozsa algorithm and Grover's search on two- and three-qubit nuclear magnetic resonance computers. The devices were small and the quantum character of the NMR ensembles was later debated, but the experiments proved that quantum algorithms could be executed.", why: "They were the first quantum computations to run on a physical machine.", people: "Jonathan Jones, Michele Mosca, Isaac Chuang", category: "hardware", sources: [
      "Jones, J. A., & Mosca, M. (1998). Implementation of a quantum algorithm on a nuclear magnetic resonance quantum computer. Journal of Chemical Physics, 109(5), 1648-1653.",
      "Chuang, I. L., Gershenfeld, N., & Kubinec, M. (1998). Experimental implementation of fast quantum searching. Physical Review Letters, 80(15), 3408-3411.",
    ], links: [
      { label: "Algorithm: Deutsch-Jozsa Algorithm", href: "/algorithms/deutsch-jozsa" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
    ], id: "1998-53" },
  { year: 1998, date: "1998", title: "Spin qubits proposed in silicon and quantum dots", description: "Daniel Loss and David DiVincenzo proposed using the spin of electrons in quantum dots as qubits, with exchange coupling for gates. Bruce Kane proposed a silicon-based quantum computer with phosphorus nuclear spins. Both ideas aimed at building quantum computers with semiconductor manufacturing.", why: "They are the starting point of silicon spin-qubit research, which has reached fault-tolerance-level gate fidelities.", people: "Daniel Loss, David DiVincenzo, Bruce Kane", category: "hardware", sources: [
      "Loss, D., & DiVincenzo, D. P. (1998). Quantum computation with quantum dots. Physical Review A, 57(1), 120-126.",
      "Kane, B. E. (1998). A silicon-based nuclear spin quantum computer. Nature, 393, 133-137.",
    ], links: [
      { label: "Paper: Quantum Computation with Quantum Dots", href: "/research/loss-divincenzo-spin-qubits-quantum-dots-1998" },
      { label: "Term: Spin Qubit", href: "/dictionary/spin-qubit" },
    ], id: "1998-54" },
  { year: 1998, date: "1998", title: "Quantum repeaters, resilient computation, and the Gottesman-Knill theorem", description: "Hans Briegel, Wolfgang Dür, Ignacio Cirac, and Peter Zoller proposed quantum repeaters to extend entanglement over long distances. Knill, Laflamme, and Zurek published their threshold result in Science. Daniel Gottesman and Emanuel Knill showed that circuits of Clifford gates can be simulated efficiently on a classical computer.", why: "The repeater is the central idea of the quantum internet, and the Gottesman-Knill theorem explains why non-Clifford gates are the costly ones.", people: "Hans Briegel, Emanuel Knill, Raymond Laflamme, Wojciech Zurek, Daniel Gottesman", category: "networking", sources: [
      "Briegel, H.-J., Dür, W., Cirac, J. I., & Zoller, P. (1998). Quantum repeaters: The role of imperfect local operations in quantum communication. Physical Review Letters, 81(26), 5932-5935.",
      "Knill, E., Laflamme, R., & Zurek, W. H. (1998). Resilient quantum computation. Science, 279(5349), 342-345.",
    ], links: [
      { label: "Paper: Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication", href: "/research/briegel-quantum-repeaters-1998" },
      { label: "Paper: Resilient Quantum Computation", href: "/research/knill-laflamme-zurek-resilient-1998" },
      { label: "Term: Clifford Group", href: "/dictionary/clifford-group" },
    ], id: "1998-55" },
  { year: 1998, date: "November 1998", title: "Quantum annealing is formulated", description: "Tadashi Kadowaki and Hidetoshi Nishimori at the Tokyo Institute of Technology showed numerically that adding a transverse field to an Ising model and slowly reducing it can find low-energy states better than thermal annealing in the cases studied. The method treats quantum fluctuations as a substitute for thermal ones.", why: "It is the theoretical basis of the annealers that D-Wave later commercialized.", people: "Tadashi Kadowaki, Hidetoshi Nishimori", category: "algorithm", sources: [
      "Kadowaki, T., & Nishimori, H. (1998). Quantum annealing in the transverse Ising model. Physical Review E, 58(5), 5355-5363.",
    ], links: [
      { label: "Paper: Quantum Annealing in the Transverse Ising Model", href: "/research/kadowaki-nishimori-quantum-annealing-1998" },
      { label: "Term: Quantum Annealing", href: "/dictionary/quantum-annealing" },
    ], id: "1998-56" },
  { year: 1999, date: "April 1999", title: "The first superconducting qubit", description: "Yasunobu Nakamura, Yuri Pashkin, and Jaw-Shen Tsai at NEC in Japan observed coherent oscillations between two charge states of a Cooper pair box, a tiny superconducting circuit. The coherence lasted only a few nanoseconds, but it showed that macroscopic electrical circuits can behave quantum mechanically.", why: "Every IBM and Google processor descends from this circuit.", people: "Yasunobu Nakamura, Jaw-Shen Tsai", category: "hardware", sources: [
      "Nakamura, Y., Pashkin, Yu. A., & Tsai, J. S. (1999). Coherent control of macroscopic quantum states in a single-Cooper-pair box. Nature, 398, 786-788.",
    ], links: [
      { label: "Paper: Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box", href: "/research/nakamura-cooper-pair-box-1999" },
      { label: "Term: Superconducting Qubit", href: "/dictionary/superconducting-qubit" },
    ], id: "1999-57" },
  { year: 1999, date: "1999", title: "The Mølmer-Sørensen gate, D-Wave's founding, and gate teleportation", description: "Klaus Mølmer and Anders Sørensen devised an ion entangling gate that does not need ground-state cooling. D-Wave Systems was founded in Burnaby, Canada, to build quantum annealing hardware. Daniel Gottesman and Isaac Chuang showed that gates can be applied by teleporting through prepared entangled states.", why: "The Mølmer-Sørensen gate is the standard two-qubit gate on ion machines, and gate teleportation is how fault-tolerant machines apply T gates.", people: "Klaus Mølmer, Anders Sørensen, Geordie Rose, Daniel Gottesman, Isaac Chuang", category: "hardware", sources: [
      "Mølmer, K., & Sørensen, A. (1999). Multiparticle entanglement of hot trapped ions. Physical Review Letters, 82(9), 1835-1838.",
      "Gottesman, D., & Chuang, I. L. (1999). Demonstrating the viability of universal quantum computation using teleportation and single-qubit operations. Nature, 402, 390-392.",
    ], links: [
      { label: "Paper: Multiparticle Entanglement of Hot Trapped Ions", href: "/research/molmer-sorensen-hot-ions-1999" },
      { label: "Paper: Demonstrating the Viability of Universal Quantum Computation Using Teleportation and Single-Qubit Operations", href: "/research/gottesman-chuang-teleportation-gates-1999" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
    ], id: "1999-58" },
  { year: 2000, date: "2000", title: "The DiVincenzo criteria and adiabatic quantum computation", description: "David DiVincenzo listed five requirements that any physical system must meet to serve as a quantum computer, plus two for quantum communication. In the same year Edward Farhi, Jeffrey Goldstone, Sam Gutmann, and Michael Sipser proposed adiabatic quantum computation, and Peter Shor and John Preskill published a short proof that the BB84 protocol is secure with an error rate up to about 11 percent.", why: "The criteria are still the checklist for comparing qubit technologies, and the other two results underpin annealing and QKD security.", people: "David DiVincenzo, Edward Farhi, Peter Shor, John Preskill", category: "theory", sources: [
      "DiVincenzo, D. P. (2000). The physical implementation of quantum computation. Fortschritte der Physik, 48(9-11), 771-783.",
      "Farhi, E., Goldstone, J., Gutmann, S., & Sipser, M. (2000). Quantum computation by adiabatic evolution. arXiv:quant-ph/0001106.",
      "Shor, P. W., & Preskill, J. (2000). Simple proof of security of the BB84 quantum key distribution protocol. Physical Review Letters, 85(2), 441-444.",
    ], links: [
      { label: "Paper: The Physical Implementation of Quantum Computation", href: "/research/divincenzo-physical-implementation-2000" },
      { label: "Paper: Quantum Computation by Adiabatic Evolution", href: "/research/farhi-adiabatic-evolution-2000" },
      { label: "Paper: Simple Proof of Security of the BB84 Quantum Key Distribution Protocol", href: "/research/shor-preskill-bb84-security-proof-2000" },
    ], id: "2000-59" },
  { year: 2000, date: "2000", title: "Rydberg gates proposed for neutral atoms", description: "Dieter Jaksch, Ignacio Cirac, Peter Zoller, Steve Rolston, Robin Côté, and Mikhail Lukin proposed entangling neutral atoms by exciting them briefly to Rydberg states, where strong interactions block simultaneous excitation of neighbors. The scheme promised fast gates on atoms with very long-lived qubit states.", why: "The Rydberg blockade is the entangling mechanism of today's neutral-atom quantum computers.", people: "Dieter Jaksch, Mikhail Lukin, Ignacio Cirac, Peter Zoller", category: "hardware", sources: [
      "Jaksch, D., Cirac, J. I., Zoller, P., Rolston, S. L., Côté, R., & Lukin, M. D. (2000). Fast quantum gates for neutral atoms. Physical Review Letters, 85(10), 2208-2211.",
    ], links: [
      { label: "Paper: Fast Quantum Gates for Neutral Atoms", href: "/research/jaksch-fast-gates-neutral-atoms-2000" },
      { label: "Term: Rydberg State", href: "/dictionary/rydberg-state" },
    ], id: "2000-60" },
  { year: 2001, date: "December 2001", title: "IBM factors 15 with a seven-qubit NMR computer", description: "Lieven Vandersypen, Matthias Steffen, Isaac Chuang, and colleagues at IBM Almaden and Stanford used a custom molecule with seven nuclear spins to run Shor's algorithm and factor the number 15 into 3 times 5. The computation took pulses lasting a fraction of a second and was done on an ensemble of molecules.", why: "It was the first demonstration of Shor's algorithm on hardware, even though the number was tiny and NMR cannot scale.", people: "Lieven Vandersypen, Isaac Chuang", category: "hardware", sources: [
      "Vandersypen, L. M. K., Steffen, M., Breyta, G., Yannoni, C. S., Sherwood, M. H., & Chuang, I. L. (2001). Experimental realization of Shor's quantum factoring algorithm using nuclear magnetic resonance. Nature, 414, 883-887.",
    ], links: [
      { label: "Algorithm: Shor's Algorithm", href: "/algorithms/shors-algorithm" },
    ], id: "2001-61" },
  { year: 2001, date: "2001", title: "Linear optics, one-way computing, and oscillator qubits", description: "Emanuel Knill, Raymond Laflamme, and Gerard Milburn showed that universal computation is possible with linear optics, single photons, and detectors. Robert Raussendorf and Hans Briegel proposed the one-way quantum computer driven by single-qubit measurements on a cluster state. Daniel Gottesman, Alexei Kitaev, and John Preskill described how to encode a qubit in an oscillator.", why: "These three proposals are the roots of photonic computing, measurement-based computing, and bosonic error-correcting codes.", people: "Emanuel Knill, Raymond Laflamme, Gerard Milburn, Robert Raussendorf, Hans Briegel, John Preskill", category: "theory", sources: [
      "Knill, E., Laflamme, R., & Milburn, G. J. (2001). A scheme for efficient quantum computation with linear optics. Nature, 409, 46-52.",
      "Raussendorf, R., & Briegel, H. J. (2001). A one-way quantum computer. Physical Review Letters, 86(22), 5188-5191.",
      "Gottesman, D., Kitaev, A., & Preskill, J. (2001). Encoding a qubit in an oscillator. Physical Review A, 64(1), 012310.",
    ], links: [
      { label: "Paper: A Scheme for Efficient Quantum Computation with Linear Optics", href: "/research/knill-laflamme-milburn-linear-optics-2001" },
      { label: "Paper: A One-Way Quantum Computer", href: "/research/raussendorf-briegel-one-way-quantum-computer-2001" },
      { label: "Paper: Encoding a Qubit in an Oscillator", href: "/research/gottesman-kitaev-preskill-encoding-oscillator-2001" },
    ], id: "2001-62" },
  { year: 2002, date: "2002", title: "Scalable ion-trap architecture and the surface code's theory", description: "David Kielpinski, Chris Monroe, and David Wineland proposed moving trapped ions between zones of a chip for storage, gates, and readout, the quantum charge-coupled device. Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill showed that the toric code has an error threshold linked to a phase transition in a disordered magnet. Gilles Brassard and coauthors published amplitude amplification and estimation.", why: "The QCCD design is the basis of Quantinuum's machines, the threshold analysis supports the surface code, and amplitude estimation drives Monte Carlo proposals.", people: "David Kielpinski, Chris Monroe, David Wineland, John Preskill, Gilles Brassard", category: "hardware", sources: [
      "Kielpinski, D., Monroe, C., & Wineland, D. J. (2002). Architecture for a large-scale ion-trap quantum computer. Nature, 417, 709-711.",
      "Dennis, E., Kitaev, A., Landahl, A., & Preskill, J. (2002). Topological quantum memory. Journal of Mathematical Physics, 43(9), 4452-4505.",
      "Brassard, G., Høyer, P., Mosca, M., & Tapp, A. (2002). Quantum amplitude amplification and estimation. Contemporary Mathematics, 305, 53-74.",
    ], links: [
      { label: "Paper: Architecture for a Large-Scale Ion-Trap Quantum Computer", href: "/research/kielpinski-ion-trap-architecture-2002" },
      { label: "Paper: Topological Quantum Memory", href: "/research/dennis-topological-quantum-memory-2002" },
      { label: "Paper: Quantum Amplitude Amplification and Estimation", href: "/research/brassard-amplitude-amplification-estimation-2002" },
      { label: "Term: QCCD Architecture", href: "/dictionary/qccd-architecture" },
    ], id: "2002-63" },
  { year: 2003, date: "2003", title: "First two-qubit gates in photons, ions, and superconducting circuits", description: "Jeremy O'Brien and colleagues at Queensland demonstrated a photonic controlled-NOT gate. Ferdinand Schmidt-Kaler and the Innsbruck group realized the Cirac-Zoller gate between two ions. Tsuyoshi Yamamoto and the NEC team demonstrated a conditional gate between two superconducting qubits. The same year, Won-Young Hwang proposed the decoy-state idea for quantum key distribution.", why: "Within one year, three platforms showed entangling gates, which set the pattern for the following decades of competition.", people: "Jeremy O'Brien, Ferdinand Schmidt-Kaler, Yasunobu Nakamura, Won-Young Hwang", category: "hardware", sources: [
      "O'Brien, J. L., Pryde, G. J., White, A. G., Ralph, T. C., & Branning, D. (2003). Demonstration of an all-optical quantum controlled-NOT gate. Nature, 426, 264-267.",
      "Schmidt-Kaler, F., et al. (2003). Realization of the Cirac-Zoller controlled-NOT quantum gate. Nature, 422, 408-411.",
      "Yamamoto, T., Pashkin, Yu. A., Astafiev, O., Nakamura, Y., & Tsai, J. S. (2003). Demonstration of conditional gate operation using superconducting charge qubits. Nature, 425, 941-944.",
    ], links: [
      { label: "Paper: Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box", href: "/research/nakamura-cooper-pair-box-1999" },
      { label: "Term: CNOT Gate", href: "/dictionary/cnot-gate" },
    ], id: "2003-64" },
  { year: 2003, date: "2003 to 2005", title: "The DARPA Quantum Network goes online", description: "BBN Technologies, Harvard, and Boston University linked nodes across the Boston area with quantum key distribution links over fiber and free space, creating the first QKD network that fed keys into real internet security protocols. It ran for several years as a testbed for network control and authentication.", why: "It showed that QKD could be integrated into ordinary networks, a path later followed by national backbones.", people: "Chip Elliott and colleagues at BBN Technologies", category: "networking", sources: [
      "Elliott, C., Colvin, A., Pearson, D., Pikalo, O., Schlafer, J., & Yeh, H. (2005). Current status of the DARPA Quantum Network. Proceedings of SPIE, 5815, 138-149.",
    ], links: [
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
    ], id: "2003-65" },
  { year: 2004, date: "April 2004", title: "The first bank transfer secured with quantum cryptography", description: "A team around Anton Zeilinger in Vienna used entangled photons over a fiber link of about 1.5 kilometers to secure a money transfer between Vienna City Hall and a bank branch. The experiment was a public demonstration of entanglement-based quantum cryptography in a real setting.", why: "It was an early sign that quantum cryptography could leave the laboratory.", people: "Anton Zeilinger and colleagues", category: "cryptography", sources: [
      "Poppe, A., et al. (2004). Practical quantum key distribution with polarization entangled photons. Optics Express, 12(16), 3865-3871.",
    ], links: [
      { label: "Paper: Quantum Cryptography Based on Bell's Theorem", href: "/research/ekert-quantum-cryptography-bell-1991" },
    ], id: "2004-66" },
  { year: 2004, date: "September 2004", title: "Circuit quantum electrodynamics", description: "Andreas Wallraff, Robert Schoelkopf, and their Yale colleagues coupled a superconducting qubit to a single microwave photon in an on-chip resonator, using ideas from atomic cavity physics. The architecture made it possible to read out and couple superconducting qubits through resonators.", why: "Circuit QED is the way nearly all superconducting quantum computers are controlled and measured.", people: "Andreas Wallraff, Robert Schoelkopf, Alexandre Blais, Michel Devoret, Steven Girvin", category: "hardware", sources: [
      "Wallraff, A., et al. (2004). Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics. Nature, 431, 162-167.",
    ], links: [
      { label: "Term: Superconducting Qubit", href: "/dictionary/superconducting-qubit" },
    ], id: "2004-67" },
  { year: 2004, date: "2004", title: "Adiabatic computation is shown to be as powerful as the circuit model", description: "Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev proved that adiabatic quantum computation can simulate any quantum circuit with polynomial overhead and the reverse. The conference version appeared at FOCS 2004 and the journal version in 2007.", why: "It made adiabatic computing a complete model of quantum computation.", people: "Dorit Aharonov, Julia Kempe, Seth Lloyd, Oded Regev", category: "theory", sources: [
      "Aharonov, D., van Dam, W., Kempe, J., Landau, Z., Lloyd, S., & Regev, O. (2007). Adiabatic quantum computation is equivalent to standard quantum computation. SIAM Journal on Computing, 37(1), 166-194.",
    ], links: [
      { label: "Paper: Adiabatic Quantum Computation Is Equivalent to Standard Quantum Computation", href: "/research/aharonov-adiabatic-equivalent-circuit-2007" },
      { label: "Term: Quantum Annealing", href: "/dictionary/quantum-annealing" },
    ], id: "2004-68" },
  { year: 2005, date: "2005", title: "Quantum chemistry on quantum computers, magic states, and decoy states", description: "Alán Aspuru-Guzik and colleagues showed how phase estimation can compute molecular energies. Sergey Bravyi and Alexei Kitaev introduced magic state distillation, which gives fault-tolerant machines their non-Clifford gates. Hoi-Kwong Lo, Xiongfeng Ma, and Kai Chen published the decoy-state method that made QKD with laser pulses secure and practical.", why: "These three papers define the leading application, the central fault-tolerance trick, and the leading QKD technique.", people: "Alán Aspuru-Guzik, Sergey Bravyi, Alexei Kitaev, Hoi-Kwong Lo", category: "theory", sources: [
      "Aspuru-Guzik, A., Dutoi, A. D., Love, P. J., & Head-Gordon, M. (2005). Simulated quantum computation of molecular energies. Science, 309(5741), 1704-1707.",
      "Bravyi, S., & Kitaev, A. (2005). Universal quantum computation with ideal Clifford gates and noisy ancillas. Physical Review A, 71(2), 022316.",
      "Lo, H.-K., Ma, X., & Chen, K. (2005). Decoy state quantum key distribution. Physical Review Letters, 94(23), 230504.",
    ], links: [
      { label: "Paper: Simulated Quantum Computation of Molecular Energies", href: "/research/aspuru-guzik-molecular-energies-2005" },
      { label: "Paper: Universal Quantum Computation with Ideal Clifford Gates and Noisy Ancillas", href: "/research/bravyi-kitaev-magic-states-2005" },
      { label: "Paper: Decoy State Quantum Key Distribution", href: "/research/lo-ma-chen-decoy-state-qkd-2005" },
    ], id: "2005-69" },
  { year: 2005, date: "2005", title: "Eight entangled ions and one-way computing with photons", description: "Hartmut Häffner, Rainer Blatt, and colleagues in Innsbruck entangled eight calcium ions in a W state, setting a record for the size of an entangled quantum register at the time. Philip Walther, Anton Zeilinger, and coworkers in Vienna implemented one-way quantum computing with four entangled photons.", why: "They showed that ions and photons could scale beyond a few qubits and that measurement-based computing works.", people: "Rainer Blatt, Hartmut Häffner, Philip Walther, Anton Zeilinger", category: "hardware", sources: [
      "Häffner, H., et al. (2005). Scalable multiparticle entanglement of trapped ions. Nature, 438, 643-646.",
      "Walther, P., et al. (2005). Experimental one-way quantum computing. Nature, 434, 169-176.",
    ], links: [
      { label: "Paper: A One-Way Quantum Computer", href: "/research/raussendorf-briegel-one-way-quantum-computer-2001" },
    ], id: "2005-70" },
  { year: 2007, date: "February 2007", title: "D-Wave demonstrates a 16-qubit annealer", description: "D-Wave Systems held a public demonstration of a 16-qubit superconducting processor in Mountain View, California, running optimization problems such as a seating arrangement puzzle. Many physicists doubted that the device was quantum, and the following years saw a long debate about what its behavior proved.", why: "It started the commercial era of quantum hardware, and the debate about quantum annealing's evidence began.", people: "Geordie Rose and the D-Wave team", category: "industry", sources: [
      "D-Wave Systems (2007). Press release on the Orion 16-qubit demonstration, 13 February 2007.",
    ], links: [
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
      { label: "Term: Quantum Annealing", href: "/dictionary/quantum-annealing" },
    ], id: "2007-71" },
  { year: 2007, date: "October 2007", title: "The transmon qubit", description: "Jens Koch, Robert Schoelkopf, Steven Girvin, and colleagues at Yale designed a superconducting qubit that is almost immune to charge noise by adding a large capacitor to the Cooper pair box. The first experiments in 2008 confirmed the effect, and coherence times rose from microseconds to hundreds of microseconds within a decade.", why: "The transmon is the qubit of IBM, Google, Rigetti, IQM, and most superconducting processors.", people: "Jens Koch, Robert Schoelkopf, Steven Girvin", category: "hardware", sources: [
      "Koch, J., et al. (2007). Charge-insensitive qubit design derived from the Cooper pair box. Physical Review A, 76(4), 042319.",
    ], links: [
      { label: "Paper: Charge-Insensitive Qubit Design Derived from the Cooper Pair Box", href: "/research/koch-transmon-charge-insensitive-qubit-2007" },
      { label: "Term: Transmon", href: "/dictionary/transmon" },
    ], id: "2007-72" },
  { year: 2008, date: "October 2008", title: "The SECOQC quantum key distribution network in Vienna", description: "A European consortium demonstrated a network of QKD links connecting several nodes in Vienna, using fiber and free-space connections from different vendors, with keys used for encrypted communication and a video conference. It was the first multi-vendor QKD network.", why: "It was a template for national and European QKD infrastructure.", people: "SECOQC consortium", category: "networking", sources: [
      "Peev, M., et al. (2009). The SECOQC quantum key distribution network in Vienna. New Journal of Physics, 11, 075001.",
    ], links: [
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
    ], id: "2008-73" },
  { year: 2009, date: "2009", title: "HHL, and the first two-qubit superconducting processor", description: "Aram Harrow, Avinatan Hassidim, and Seth Lloyd showed that a quantum computer can prepare a state encoding the solution of a linear system in time polylogarithmic in its size, under conditions. At Yale, Leonardo DiCarlo and colleagues built a two-qubit superconducting processor that ran small algorithms, including Grover search.", why: "HHL started quantum linear algebra, and the Yale device was a direct ancestor of IBM's processors.", people: "Aram Harrow, Avinatan Hassidim, Seth Lloyd, Leonardo DiCarlo, Robert Schoelkopf", category: "algorithm", sources: [
      "Harrow, A. W., Hassidim, A., & Lloyd, S. (2009). Quantum algorithm for linear systems of equations. Physical Review Letters, 103(15), 150502.",
      "DiCarlo, L., et al. (2009). Demonstration of two-qubit algorithms with a superconducting quantum processor. Nature, 460, 240-244.",
    ], links: [
      { label: "Paper: Quantum Algorithm for Linear Systems of Equations", href: "/research/harrow-hassidim-lloyd-linear-systems-2009" },
      { label: "Algorithm: HHL Algorithm", href: "/algorithms/hhl-algorithm" },
    ], id: "2009-74" },
  { year: 2010, date: "January 2010", title: "First quantum chemistry on a quantum device and the first Rydberg gates", description: "Ben Lanyon, Andrew White, and colleagues computed the energy of molecular hydrogen with a photonic quantum computer. In the same month, groups at Wisconsin and in Paris demonstrated the Rydberg blockade between two single atoms and used it to make an entangling gate.", why: "The experiments turned two major proposals, chemistry on quantum computers and Rydberg gates, into laboratory results.", people: "Ben Lanyon, Andrew White, Mark Saffman, Antoine Browaeys", category: "hardware", sources: [
      "Lanyon, B. P., et al. (2010). Towards quantum chemistry on a quantum computer. Nature Chemistry, 2, 106-111.",
      "Isenhower, L., et al. (2010). Demonstration of a neutral atom controlled-NOT quantum gate. Physical Review Letters, 104(1), 010503.",
    ], links: [
      { label: "Paper: Fast Quantum Gates for Neutral Atoms", href: "/research/jaksch-fast-gates-neutral-atoms-2000" },
      { label: "Term: Quantum Chemistry Simulation", href: "/dictionary/quantum-chemistry-simulation" },
    ], id: "2010-75" },
  { year: 2011, date: "May 2011", title: "D-Wave One is sold to Lockheed Martin and a quantum annealing paper appears", description: "D-Wave announced the D-Wave One, a 128-qubit annealer, and sold the first one to Lockheed Martin. The same month, the company's researchers published a Nature paper on an eight-qubit chip with evidence of quantum annealing. Further studies by many groups tested whether the machines show a speedup.", why: "It was the first commercial quantum computer sale.", people: "Mark Johnson, Geordie Rose, D-Wave Systems", category: "industry", sources: [
      "Johnson, M. W., et al. (2011). Quantum annealing with manufactured spins. Nature, 473, 194-198.",
    ], links: [
      { label: "Paper: Quantum Annealing with Manufactured Spins", href: "/research/johnson-quantum-annealing-manufactured-spins-2011" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
    ], id: "2011-76" },
  { year: 2011, date: "2011", title: "Boson sampling and digital quantum simulation", description: "Scott Aaronson and Alex Arkhipov proved that sampling the output of photons in a linear optical network is hard for classical computers unless the polynomial hierarchy collapses, giving a route to quantum advantage without a universal machine. In Innsbruck, Ben Lanyon and Rainer Blatt's team showed universal digital quantum simulation with trapped ions.", why: "Boson sampling led to the photonic advantage experiments, and the ion simulation showed Lloyd's 1996 theorem working.", people: "Scott Aaronson, Alex Arkhipov, Ben Lanyon, Rainer Blatt", category: "algorithm", sources: [
      "Aaronson, S., & Arkhipov, A. (2013). The computational complexity of linear optics. Theory of Computing, 9, 143-252.",
      "Lanyon, B. P., et al. (2011). Universal digital quantum simulation with trapped ions. Science, 334(6052), 57-61.",
    ], links: [
      { label: "Paper: The Computational Complexity of Linear Optics", href: "/research/aaronson-arkhipov-boson-sampling-2011" },
      { label: "Algorithm: Boson Sampling", href: "/algorithms/boson-sampling" },
    ], id: "2011-77" },
  { year: 2012, date: "9 October 2012", title: "Haroche and Wineland win the Nobel Prize in Physics", description: "Serge Haroche and David Wineland received the prize for methods that make it possible to measure and manipulate individual quantum systems, with photons in cavities and ions in traps. Their work laid the experimental basis for quantum computing with ions and cavities.", why: "The prize recognized the control of single quantum systems, the central skill of quantum hardware.", people: "Serge Haroche, David Wineland", category: "industry", sources: [
      "The Royal Swedish Academy of Sciences (2012). The Nobel Prize in Physics 2012 press release, 9 October 2012.",
    ], links: [
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
    ], id: "2012-78" },
  { year: 2012, date: "2012", title: "Surface codes, quantum supremacy named, Majorana signals, and a silicon qubit", description: "Austin Fowler and colleagues published a long review showing how a large quantum computer could be built with the surface code. John Preskill coined the term quantum supremacy. Leo Kouwenhoven's group at Delft reported signatures of Majorana modes in a nanowire, and Andrea Morello's group at UNSW demonstrated single-shot readout and control of an electron and a nucleus of a single phosphorus atom in silicon.", why: "It was a dense year that gave the field its error-correction blueprint, its goal name, and its early topological and silicon leads.", people: "Austin Fowler, John Preskill, Leo Kouwenhoven, Andrea Morello", category: "error-correction", sources: [
      "Fowler, A. G., Mariantoni, M., Martinis, J. M., & Cleland, A. N. (2012). Surface codes: Towards practical large-scale quantum computation. Physical Review A, 86(3), 032324.",
      "Preskill, J. (2012). Quantum computing and the entanglement frontier. arXiv:1203.5813.",
      "Mourik, V., et al. (2012). Signatures of Majorana fermions in hybrid superconductor-semiconductor nanowire devices. Science, 336(6084), 1003-1007.",
      "Pla, J. J., et al. (2012). A single-atom electron spin qubit in silicon. Nature, 489, 541-545.",
    ], links: [
      { label: "Paper: Surface Codes: Towards Practical Large-Scale Quantum Computation", href: "/research/fowler-surface-codes-2012" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
      { label: "Term: Quantum Supremacy", href: "/dictionary/quantum-supremacy" },
      { label: "Term: Topological Qubit", href: "/dictionary/topological-qubit" },
    ], id: "2012-79" },
  { year: 2013, date: "May 2013", title: "Google and NASA launch the Quantum Artificial Intelligence Lab", description: "Google, NASA's Ames Research Center, and the Universities Space Research Association announced a lab hosting a D-Wave Two annealer to study quantum optimization and machine learning. The lab became a place where benchmarks of annealers against classical algorithms were carried out, and led to Google's later in-house hardware effort.", why: "It brought a major technology company into quantum computing.", people: "Hartmut Neven, Google; NASA Ames", category: "industry", sources: [
      "Google Research (2013). Launching the Quantum Artificial Intelligence Lab. Google Research Blog, 16 May 2013.",
    ], links: [
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
    ], id: "2013-80" },
  { year: 2014, date: "January 2014", title: "Documents reveal that the NSA is researching quantum computers", description: "Documents provided by Edward Snowden, reported by The Washington Post, described an NSA research program with a budget of about 80 million dollars aimed at building a quantum computer that could break encryption. The report raised public awareness of the threat that Shor's algorithm poses to cryptography.", why: "It was a turning point for governments and companies thinking about post-quantum security.", people: "Barton Gellman, Steven Rich", category: "cryptography", sources: [
      "Rich, S., & Gellman, B. (2014). NSA seeks to build quantum computer that could crack most types of encryption. The Washington Post, 2 January 2014.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], id: "2014-81" },
  { year: 2014, date: "2014", title: "The variational eigensolver, QAOA, and the cat-qubit proposal", description: "Alberto Peruzzo and colleagues demonstrated the variational quantum eigensolver on a photonic chip. Edward Farhi, Jeffrey Goldstone, and Sam Gutmann proposed the quantum approximate optimization algorithm. Mazyar Mirrahimi, Michel Devoret, and coauthors proposed stabilizing cat qubits by engineered two-photon dissipation. John Martinis's group joined Google in September to build superconducting processors.", why: "The two hybrid algorithms define the NISQ era, and the cat qubit and Google's hardware team shaped the 2020s.", people: "Alberto Peruzzo, Edward Farhi, Mazyar Mirrahimi, John Martinis", category: "algorithm", sources: [
      "Peruzzo, A., et al. (2014). A variational eigenvalue solver on a photonic quantum processor. Nature Communications, 5, 4213.",
      "Farhi, E., Goldstone, J., & Gutmann, S. (2014). A quantum approximate optimization algorithm. arXiv:1411.4028.",
      "Mirrahimi, M., et al. (2014). Dynamically protected cat-qubits. New Journal of Physics, 16, 045014.",
    ], links: [
      { label: "Paper: A Variational Eigenvalue Solver on a Photonic Quantum Processor", href: "/research/peruzzo-variational-eigensolver-2014" },
      { label: "Paper: A Quantum Approximate Optimization Algorithm", href: "/research/farhi-qaoa-2014" },
      { label: "Paper: Dynamically Protected Cat-Qubits: A New Paradigm for Universal Quantum Computation", href: "/research/mirrahimi-dynamically-protected-cat-qubits-2014" },
      { label: "Algorithm: Variational Quantum Eigensolver (VQE)", href: "/algorithms/vqe" },
      { label: "Algorithm: Quantum Approximate Optimization Algorithm (QAOA)", href: "/algorithms/qaoa" },
    ], id: "2014-82" },
  { year: 2015, date: "2015", title: "Loophole-free Bell tests", description: "Three groups, in Delft, at NIST, and in Vienna, reported Bell inequality violations that closed both the detection and locality loopholes at once. The Delft experiment used electron spins in diamond separated by 1.3 kilometers, and the others used photon pairs.", why: "They settled the experimental question of local hidden variables and underpin device-independent cryptography.", people: "Ronald Hanson, Lynden Shalm, Marissa Giustina", category: "foundations", sources: [
      "Hensen, B., et al. (2015). Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. Nature, 526, 682-686.",
      "Shalm, L. K., et al. (2015). Strong loophole-free test of local realism. Physical Review Letters, 115, 250402.",
      "Giustina, M., et al. (2015). Significant-loophole-free test of Bell's theorem with entangled photons. Physical Review Letters, 115, 250401.",
    ], links: [
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
    ], id: "2015-83" },
  { year: 2015, date: "2015", title: "Error detection on superconducting chips and the 1,000-qubit annealer", description: "Google's team led by Julian Kelly and John Martinis, and an IBM team led by Antonio Córcoles, showed small error-detecting codes on superconducting qubits. D-Wave announced a system with more than 1,000 qubits. IonQ was founded by Chris Monroe and Jungsang Kim, and Intel invested 50 million dollars in the QuTech research center in Delft.", why: "Error detection on chips was a first step toward correction, and corporate investment began to grow.", people: "Julian Kelly, Antonio Córcoles, Chris Monroe, Jungsang Kim", category: "industry", sources: [
      "Kelly, J., et al. (2015). State preservation by repetitive error detection in a superconducting quantum circuit. Nature, 519, 66-69.",
      "Córcoles, A. D., et al. (2015). Demonstration of a quantum error detection code using a square lattice of four superconducting qubits. Nature Communications, 6, 6979.",
    ], links: [
      { label: "Company: IonQ", href: "/companies/ionq" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
    ], id: "2015-84" },
  { year: 2015, date: "August 2015", title: "The NSA announces a plan to move to quantum-resistant cryptography", description: "The US National Security Agency announced that it would begin planning a transition to cryptographic algorithms that resist quantum attacks, and advised against investing in further upgrades of elliptic-curve suites. The statement led NIST to start its post-quantum standardization effort in 2016.", why: "It was the first public signal from a major agency that quantum-safe migration had begun.", people: "NSA Information Assurance Directorate", category: "cryptography", sources: [
      "National Security Agency, Information Assurance Directorate (2015). Cryptography today: statement on the transition to quantum-resistant algorithms, August 2015.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], id: "2015-85" },
  { year: 2016, date: "3 May 2016", title: "IBM puts a quantum computer on the cloud", description: "IBM opened a five-qubit superconducting processor to the public through the IBM Quantum Experience, with a graphical circuit composer and later the Qiskit software kit. Within a few years, hundreds of thousands of users had run experiments, and hundreds of papers had been published using the service.", why: "It was the first time anyone with an internet connection could run programs on a real quantum computer.", people: "IBM Research", category: "industry", sources: [
      "IBM (2016). IBM makes quantum computing available on IBM Cloud to accelerate innovation. IBM press release, 3 May 2016.",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
    ], id: "2016-86" },
  { year: 2016, date: "16 August 2016", title: "China launches the Micius quantum satellite", description: "The Chinese Academy of Sciences launched Micius, named after an ancient Chinese philosopher, into an orbit of about 500 kilometers, carrying sources of entangled photons and equipment for quantum key distribution. Jian-Wei Pan led the project. In 2017 it produced the first satellite-based quantum communication results.", why: "It started satellite quantum communication and showed that space can overcome fiber loss.", people: "Jian-Wei Pan and colleagues", category: "networking", sources: [
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
    ], links: [
      { label: "Paper: Satellite-to-Ground Quantum Key Distribution", href: "/research/liao-satellite-to-ground-qkd-2017" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
    ], id: "2016-87" },
  { year: 2016, date: "December 2016", title: "NIST launches the post-quantum cryptography competition", description: "The US National Institute of Standards and Technology issued a public call for quantum-resistant public-key algorithms. Eighty-two submissions arrived in November 2017, of which 69 were accepted for the first round. Over six years of public analysis, several candidates were broken and the field narrowed.", why: "The process produced the standards that now replace RSA and elliptic-curve cryptography.", people: "NIST", category: "cryptography", sources: [
      "National Institute of Standards and Technology (2016). Announcing request for nominations for public-key post-quantum cryptographic algorithms. Federal Register, 81(244).",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Paper: An Efficient Key Recovery Attack on SIDH", href: "/research/castryck-decru-sidh-break-2022" },
    ], id: "2016-88" },
  { year: 2016, date: "2016", title: "Break-even error correction, Shor on ions, and molecules on chips", description: "Yale researchers showed that an error-corrected cat-code qubit in a cavity outlived its best uncorrected component, a milestone called break-even. A team in Innsbruck ran a scalable version of Shor's algorithm on five trapped ions to factor 15, and a Google, UC Santa Barbara, and Harvard collaboration computed the energy of molecular hydrogen on superconducting qubits.", why: "They were the first demonstrations of error-correction break-even, a scalable Shor circuit, and chemistry on superconducting hardware.", people: "Nissim Ofek, Rainer Blatt, Peter O'Malley, Rob Schoelkopf", category: "hardware", sources: [
      "Ofek, N., et al. (2016). Extending the lifetime of a quantum bit with error correction in superconducting circuits. Nature, 536, 441-445.",
      "Monz, T., et al. (2016). Realization of a scalable Shor algorithm. Science, 351(6277), 1068-1070.",
      "O'Malley, P. J. J., et al. (2016). Scalable quantum simulation of molecular energies. Physical Review X, 6, 031007.",
    ], links: [
      { label: "Paper: Extending the Lifetime of a Quantum Bit with Error Correction in Superconducting Circuits", href: "/research/ofek-extending-qubit-lifetime-2016" },
      { label: "Algorithm: Variational Quantum Eigensolver (VQE)", href: "/algorithms/vqe" },
    ], id: "2016-89" },
  { year: 2016, date: "2016", title: "Atom-by-atom assembly of arrays of single atoms", description: "Manuel Endres, Mikhail Lukin and colleagues at Harvard and Caltech, and a team in Paris led by Antoine Browaeys, showed how to rearrange randomly loaded single atoms in optical tweezers into defect-free arrays, by imaging the atoms and moving them with movable traps.", why: "This technique is the foundation of today's neutral-atom quantum computers with thousands of atoms.", people: "Manuel Endres, Mikhail Lukin, Antoine Browaeys", category: "hardware", sources: [
      "Endres, M., et al. (2016). Atom-by-atom assembly of defect-free one-dimensional cold atom arrays. Science, 354(6315), 1024-1027.",
      "Barredo, D., et al. (2016). An atom-by-atom assembler of defect-free arbitrary two-dimensional atomic arrays. Science, 354(6315), 1021-1023.",
    ], links: [
      { label: "Paper: Atom-by-Atom Assembly of Defect-Free One-Dimensional Cold Atom Arrays", href: "/research/endres-atom-by-atom-assembly-2016" },
      { label: "Term: Optical Tweezers", href: "/dictionary/optical-tweezers" },
    ], id: "2016-90" },
  { year: 2017, date: "2017", title: "Micius demonstrates quantum teleportation, QKD, and entanglement from space", description: "The Micius team reported the first ground-to-satellite teleportation of a photon's state over distances up to about 1,400 kilometers, the first satellite-to-ground decoy-state quantum key distribution, and the distribution of entangled photon pairs to ground stations 1,200 kilometers apart. A key exchange between China and Austria followed in 2017 and was used for an encrypted video call.", why: "It proved that satellites can link places thousands of kilometers apart with quantum signals.", people: "Jian-Wei Pan, Chao-Yang Lu, Anton Zeilinger", category: "networking", sources: [
      "Ren, J.-G., et al. (2017). Ground-to-satellite quantum teleportation. Nature, 549, 70-73.",
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
      "Yin, J., et al. (2017). Satellite-based entanglement distribution over 1200 kilometers. Science, 356(6343), 1140-1144.",
    ], links: [
      { label: "Paper: Satellite-to-Ground Quantum Key Distribution", href: "/research/liao-satellite-to-ground-qkd-2017" },
      { label: "Paper: Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels", href: "/research/bennett-quantum-teleportation-1993" },
    ], id: "2017-91" },
  { year: 2017, date: "2017", title: "The first 17-qubit and 50-qubit class processors", description: "Intel announced a 17-qubit superconducting test chip in October, and IBM announced a working 17-qubit processor and a 50-qubit prototype in November. D-Wave had launched the 2,000-qubit 2000Q annealer in January. The numbers fueled a race in which qubit count was the headline metric.", why: "It marked the point where quantum processors approached sizes that are hard to simulate exactly on classical computers.", people: "IBM, Intel, D-Wave", category: "industry", sources: [
      "IBM (2017). IBM Q announces 20 qubit commercial processor and 50 qubit prototype. IBM press release, 10 November 2017.",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
    ], id: "2017-92" },
  { year: 2017, date: "2017", title: "51 atoms, 53 ions, and hardware-efficient chemistry", description: "Hannes Bernien, Mikhail Lukin, and colleagues at Harvard and MIT built a programmable simulator of 51 Rydberg atoms, and Jiehang Zhang, Chris Monroe, and coworkers at Maryland built a 53-ion simulator. At IBM, Abhinav Kandala and colleagues ran the variational eigensolver with a hardware-efficient circuit on six qubits for molecules up to beryllium hydride.", why: "They showed that cold atoms, ions, and superconducting chips could reach dozens of controlled qubits.", people: "Hannes Bernien, Jiehang Zhang, Abhinav Kandala", category: "hardware", sources: [
      "Bernien, H., et al. (2017). Probing many-body dynamics on a 51-atom quantum simulator. Nature, 551, 579-584.",
      "Zhang, J., et al. (2017). Observation of a many-body dynamical phase transition with a 53-qubit quantum simulator. Nature, 551, 601-604.",
      "Kandala, A., et al. (2017). Hardware-efficient variational quantum eigensolver for small molecules and quantum magnets. Nature, 549, 242-246.",
    ], links: [
      { label: "Paper: Hardware-Efficient Variational Quantum Eigensolver for Small Molecules and Quantum Magnets", href: "/research/kandala-hardware-efficient-vqe-2017" },
      { label: "Term: Neutral Atom Qubit", href: "/dictionary/neutral-atom-qubit" },
    ], id: "2017-93" },
  { year: 2017, date: "December 2017", title: "Microsoft releases Q# and the Quantum Development Kit", description: "Microsoft released a quantum programming language, Q#, together with a simulator and libraries, so developers could write and test quantum programs on laptops. It also confirmed that it was pursuing topological qubits based on Majorana modes. Other kits, such as IBM's Qiskit and later Google's Cirq and Xanadu's PennyLane, formed a growing software ecosystem.", why: "Software tools opened quantum programming to students and developers before the hardware was ready.", people: "Microsoft Quantum team", category: "industry", sources: [
      "Microsoft (2017). Microsoft releases Quantum Development Kit preview with the Q# language. Microsoft press release, 11 December 2017.",
    ], links: [
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Company: Microsoft", href: "/companies/microsoft" },
    ], id: "2017-94" },
  { year: 2018, date: "January and March 2018", title: "Intel's Tangle Lake and Google's Bristlecone", description: "Intel unveiled a 49-qubit superconducting test chip called Tangle Lake at CES in January. In March, Google announced Bristlecone, a 72-qubit processor designed to test quantum supremacy. The processors had higher qubit counts, but error rates were high, and they led to attention on quality rather than numbers.", why: "They show the 2018 push toward the 50-qubit regime that Preskill had called intermediate scale.", people: "Intel, Google Quantum AI", category: "hardware", sources: [
      "Kelly, J. (2018). A preview of Bristlecone, Google's new quantum processor. Google AI Blog, 5 March 2018.",
    ], links: [
      { label: "Company: Google (Google Quantum AI)", href: "/companies/google" },
    ], id: "2018-95" },
  { year: 2018, date: "2018", title: "Preskill names the NISQ era", description: "John Preskill published a paper on quantum computing in the noisy intermediate-scale quantum era, defining devices with tens to hundreds of qubits and no error correction, and discussing what they could and could not do. The term became the standard way to describe the period.", why: "It gave researchers a shared vocabulary and tempered expectations.", people: "John Preskill", category: "theory", sources: [
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
    ], links: [
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Term: NISQ", href: "/dictionary/nisq" },
    ], id: "2018-96" },
  { year: 2018, date: "2018", title: "Tang dequantizes quantum recommendation, and barren plateaus are found", description: "Ewin Tang, an undergraduate advised by Scott Aaronson, found a classical algorithm that matches the quantum recommendation algorithm, removing a celebrated claim of exponential speedup in machine learning. Jarrod McClean and colleagues at Google showed that variational circuits can have exponentially flat training landscapes.", why: "Together they began a reality check for quantum machine learning and variational algorithms.", people: "Ewin Tang, Jarrod McClean, Hartmut Neven", category: "algorithm", sources: [
      "Tang, E. (2019). A quantum-inspired classical algorithm for recommendation systems. Proceedings of the 51st Annual ACM Symposium on Theory of Computing, 217-228.",
      "McClean, J. R., et al. (2018). Barren plateaus in quantum neural network training landscapes. Nature Communications, 9, 4812.",
    ], links: [
      { label: "Paper: A Quantum-Inspired Classical Algorithm for Recommendation Systems", href: "/research/tang-quantum-inspired-recommendation-2019" },
      { label: "Paper: Barren Plateaus in Quantum Neural Network Training Landscapes", href: "/research/mcclean-barren-plateaus-2018" },
      { label: "Term: Barren Plateau", href: "/dictionary/barren-plateau" },
    ], id: "2018-97" },
  { year: 2018, date: "21 December 2018", title: "The US National Quantum Initiative Act", description: "The United States signed into law the National Quantum Initiative Act, authorizing about 1.2 billion dollars over five years for quantum research programs at the Department of Energy, NIST, and the National Science Foundation, and coordination of agencies. Similar national programs were launched by the European Union, China, the United Kingdom, India, and others.", why: "It marked the start of large-scale government funding for quantum technology.", people: "US Congress", category: "industry", sources: [
      "United States Congress (2018). National Quantum Initiative Act, Public Law 115-368, 21 December 2018.",
    ], links: [], id: "2018-98" },
  { year: 2018, date: "2018", title: "Europe's Quantum Flagship and the quantum internet roadmap", description: "The European Union launched its Quantum Flagship in October with a budget of about one billion euros over ten years. In the same year, Stephanie Wehner, David Elkouss, and Ronald Hanson published a six-stage roadmap for the quantum internet that is now widely used to describe progress.", why: "The flagship funded hundreds of projects, and the roadmap gave the networking field a common framework.", people: "European Commission, Stephanie Wehner, Ronald Hanson", category: "networking", sources: [
      "Wehner, S., Elkouss, D., & Hanson, R. (2018). Quantum internet: A vision for the road ahead. Science, 362(6412), eaam9288.",
    ], links: [
      { label: "Paper: Quantum Internet: A Vision for the Road Ahead", href: "/research/wehner-quantum-internet-vision-2018" },
      { label: "Term: Quantum Internet", href: "/dictionary/quantum-internet" },
    ], id: "2018-99" },
  { year: 2019, date: "8 January 2019", title: "IBM unveils the first integrated commercial quantum system", description: "At the Consumer Electronics Show, IBM presented the IBM Q System One, a 20-qubit superconducting machine in a glass cube with its own cryogenics and control electronics, designed for reliable operation outside a laboratory. It was installed later in Germany, Japan, and elsewhere.", why: "It was the first quantum computer packaged as a product and not a laboratory experiment.", people: "IBM Quantum", category: "industry", sources: [
      "IBM (2019). IBM unveils world's first integrated quantum computing system for commercial use. IBM press release, 8 January 2019.",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
    ], id: "2019-100" },
  { year: 2019, date: "23 October 2019", title: "Google claims quantum supremacy", description: "Google's team led by John Martinis and Hartmut Neven reported that its 53-qubit Sycamore processor sampled the output of random circuits in about 200 seconds, a task the authors estimated would take the best supercomputer about 10,000 years. IBM disputed the estimate within days. The paper appeared in Nature.", why: "It was the first widely discussed claim of a quantum computer beating classical ones on a defined task.", people: "Frank Arute, John Martinis, Hartmut Neven", category: "hardware", sources: [
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505-510. arXiv:1910.11333.",
      "Pednault, E., et al. (2019). Leveraging secondary storage to simulate deep 54-qubit Sycamore circuits. arXiv:1910.09534.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Hardware: Google Sycamore", href: "/hardware/google-sycamore" },
      { label: "Term: Quantum Supremacy", href: "/dictionary/quantum-supremacy" },
    ], id: "2019-101" },
  { year: 2019, date: "2019", title: "Quantum kernels, quantum volume, and the 20 million qubit estimate", description: "IBM researchers proposed quantum feature maps and kernels for machine learning and defined quantum volume, a benchmark that combines qubit count and quality. Craig Gidney and Martin Ekerå estimated that RSA-2048 could be broken in about eight hours with 20 million noisy qubits, a hundredfold lower than earlier figures.", why: "These papers set the metrics and the cryptographic benchmark that shaped the following years.", people: "Vojtěch Havlíček, Andrew Cross, Craig Gidney, Martin Ekerå", category: "theory", sources: [
      "Havlíček, V., et al. (2019). Supervised learning with quantum-enhanced feature spaces. Nature, 567, 209-212.",
      "Cross, A. W., et al. (2019). Validating quantum computers using randomized model circuits. Physical Review A, 100, 032328.",
      "Gidney, C., & Ekerå, M. (2021). How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum, 5, 433.",
    ], links: [
      { label: "Paper: Supervised Learning with Quantum-Enhanced Feature Spaces", href: "/research/havlicek-quantum-enhanced-feature-spaces-2019" },
      { label: "Paper: Validating Quantum Computers Using Randomized Model Circuits", href: "/research/cross-quantum-volume-2019" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
    ], id: "2019-102" },
  { year: 2019, date: "November and December 2019", title: "Quantum computing arrives on the major cloud platforms", description: "Microsoft announced Azure Quantum in November, and Amazon announced Amazon Braket in December, both offering access to hardware from several providers. Google had its own program, and IBM had opened its machines in 2016. Cloud access became the main way for companies and researchers to use quantum hardware.", why: "Cloud marketplaces made it possible to compare machines from many vendors with the same code.", people: "Microsoft, Amazon Web Services", category: "industry", sources: [
      "Amazon Web Services (2019). Amazon Braket announcement at re:Invent, 2 December 2019.",
      "Microsoft (2019). Azure Quantum announcement at Ignite, 4 November 2019.",
    ], links: [
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Company: Microsoft", href: "/companies/microsoft" },
    ], id: "2019-103" },
  { year: 2020, date: "June to September 2020", title: "Honeywell leads on quality, and IBM publishes a roadmap", description: "Honeywell reported a quantum volume of 64 on its trapped-ion system in June, the highest then reported. In September, IBM published a roadmap targeting a 127-qubit Eagle in 2021, a 433-qubit Osprey in 2022, and a 1,121-qubit Condor in 2023, and announced the 65-qubit Hummingbird.", why: "Public roadmaps made progress measurable and set expectations for the field.", people: "Honeywell, IBM", category: "industry", sources: [
      "IBM (2020). IBM's roadmap for scaling quantum technology. IBM Research blog, 15 September 2020.",
    ], links: [
      { label: "Hardware: IBM Condor", href: "/hardware/ibm-condor" },
      { label: "Hardware: Quantinuum H2", href: "/hardware/quantinuum-h2" },
      { label: "Term: Quantum Volume", href: "/dictionary/quantum-volume" },
    ], id: "2020-104" },
  { year: 2020, date: "3 December 2020", title: "Jiuzhang photonic machine claims quantum advantage", description: "A team at the University of Science and Technology of China led by Jian-Wei Pan reported Jiuzhang, a photonic Gaussian boson sampler with 100 modes that detected up to 76 photons. They estimated that a classical supercomputer would need about 2.5 billion years for the task. Later classical algorithms reduced the estimate substantially.", why: "It was the first advantage claim with photons and the first from outside the United States.", people: "Han-Sen Zhong, Chao-Yang Lu, Jian-Wei Pan", category: "hardware", sources: [
      "Zhong, H.-S., et al. (2020). Quantum computational advantage using photons. Science, 370(6523), 1460-1463.",
    ], links: [
      { label: "Paper: Quantum Computational Advantage Using Photons", href: "/research/zhong-jiuzhang-photonic-advantage-2020" },
      { label: "Algorithm: Boson Sampling", href: "/algorithms/boson-sampling" },
    ], id: "2020-105" },
  { year: 2020, date: "2020", title: "Satellite entanglement over 1,120 km, bosonic codes, and classical shadows", description: "The Micius team distributed entangled photons for key distribution between stations 1,120 kilometers apart. Teams in Paris and at Yale made GKP states in superconducting cavities, and Raphaël Lescanne and colleagues showed exponential suppression of bit flips in a cat qubit. Hsin-Yuan Huang, Richard Kueng, and John Preskill introduced classical shadows.", why: "They advanced satellite networks, bosonic codes, and efficient measurement methods at once.", people: "Juan Yin, Philippe Campagne-Ibarcq, Raphaël Lescanne, Hsin-Yuan Huang", category: "networking", sources: [
      "Yin, J., et al. (2020). Entanglement-based secure quantum cryptography over 1,120 kilometres. Nature, 582, 501-505.",
      "Campagne-Ibarcq, P., et al. (2020). Quantum error correction of a qubit encoded in grid states of an oscillator. Nature, 584, 368-372.",
      "Huang, H.-Y., Kueng, R., & Preskill, J. (2020). Predicting many properties of a quantum system from very few measurements. Nature Physics, 16, 1050-1057.",
    ], links: [
      { label: "Paper: Quantum Error Correction of a Qubit Encoded in Grid States of an Oscillator", href: "/research/campagne-ibarcq-gkp-error-correction-2020" },
      { label: "Paper: Exponential Suppression of Bit-Flips in a Qubit Encoded in an Oscillator", href: "/research/lescanne-exponential-bit-flip-suppression-2020" },
      { label: "Paper: Predicting Many Properties of a Quantum System from Very Few Measurements", href: "/research/huang-classical-shadows-2020" },
    ], id: "2020-106" },
  { year: 2021, date: "16 November 2021", title: "IBM unveils Eagle, the first 100-plus-qubit processor", description: "IBM announced Eagle, a 127-qubit superconducting processor, built with a multilayer wiring design to bring signals to the qubits. It was the first processor to exceed 100 qubits and the starting point for IBM's 2023 utility experiment.", why: "It crossed the 100-qubit mark, a size at which exact classical simulation is no longer possible.", people: "IBM Quantum", category: "hardware", sources: [
      "IBM (2021). IBM unveils breakthrough 127-qubit quantum processor. IBM press release, 16 November 2021.",
    ], links: [
      { label: "Hardware: IBM Eagle", href: "/hardware/ibm-eagle" },
      { label: "Paper: Evidence for the Utility of Quantum Computing Before Fault Tolerance", href: "/research/kim-utility-before-fault-tolerance-2023" },
    ], id: "2021-107" },
  { year: 2021, date: "June to October 2021", title: "Zuchongzhi and Google's repeated error correction", description: "The USTC group reported Zuchongzhi 2.0, a 66-qubit superconducting processor performing random circuit sampling beyond classical reach. Google reported a repetition code that suppressed bit or phase errors exponentially as the code size grew from 5 to 21 qubits, a step toward the surface code.", why: "One result extended supremacy-type experiments to China's superconducting platform, and the other showed that error suppression scales with code size.", people: "Yulin Wu, Jian-Wei Pan, Google Quantum AI", category: "hardware", sources: [
      "Wu, Y., et al. (2021). Strong quantum computational advantage using a superconducting quantum processor. Physical Review Letters, 127, 180501.",
      "Google Quantum AI (2021). Exponential suppression of bit or phase errors with cyclic error correction. Nature, 595, 383-387.",
    ], links: [
      { label: "Term: Random Circuit Sampling", href: "/dictionary/random-circuit-sampling" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
    ], id: "2021-108" },
  { year: 2021, date: "2021", title: "A multinode quantum network, a 256-atom simulator, and a spin liquid", description: "A Delft team linked three diamond nodes in a small quantum network with entanglement swapping and teleportation. Harvard and MIT built a 256-atom programmable simulator, and in December they reported evidence of a topological quantum spin liquid on a programmable Rydberg lattice.", why: "They showed networks, large-scale simulation, and exotic states of matter on quantum platforms.", people: "Ronald Hanson, Sepehr Ebadi, Giulia Semeghini, Mikhail Lukin", category: "networking", sources: [
      "Pompili, M., et al. (2021). Realization of a multinode quantum network of remote solid-state qubits. Science, 372(6539), 259-264.",
      "Ebadi, S., et al. (2021). Quantum phases of matter on a 256-atom programmable quantum simulator. Nature, 595, 227-232.",
      "Semeghini, G., et al. (2021). Probing topological spin liquids on a programmable quantum simulator. Science, 374(6572), 1242-1247.",
    ], links: [
      { label: "Paper: Realization of a Multinode Quantum Network of Remote Solid-State Qubits", href: "/research/pompili-multinode-quantum-network-2021" },
      { label: "Paper: Quantum Phases of Matter on a 256-Atom Programmable Quantum Simulator", href: "/research/ebadi-256-atom-quantum-simulator-2021" },
    ], id: "2021-109" },
  { year: 2021, date: "July to November 2021", title: "The quantum industry goes public and raises large rounds", description: "PsiQuantum raised 450 million dollars in July. IonQ became the first publicly traded pure-play quantum company on the New York Stock Exchange in October. Honeywell's quantum unit merged with Cambridge Quantum to form Quantinuum in November. Rigetti and D-Wave followed to public markets in 2022.", why: "It brought quantum computing into capital markets and set up a wave of large investments.", people: "PsiQuantum, IonQ, Quantinuum", category: "industry", sources: [
      "IonQ (2021). IonQ begins trading on the New York Stock Exchange. Press release, 1 October 2021.",
      "Quantinuum (2021). Honeywell and Cambridge Quantum announce the formation of Quantinuum. Press release, 29 November 2021.",
    ], links: [
      { label: "Company: IonQ", href: "/companies/ionq" },
      { label: "Company: Quantinuum", href: "/companies/quantinuum" },
    ], id: "2021-110" },
  { year: 2021, date: "2021", title: "Resource estimates become realistic, and good quantum LDPC codes are found", description: "Ryan Babbush and colleagues argued that quadratic speedups are unlikely to pay off on error-corrected machines. Shouvanik Chakrabarti and coauthors estimated the resources for derivative pricing, and Joonho Lee and coauthors lowered the cost of chemistry with tensor hypercontraction. Pavel Panteleev and Gleb Kalachev constructed quantum LDPC codes with constant rate and linear distance.", why: "They reshaped which applications are promoted and which codes may cut overhead.", people: "Ryan Babbush, Joonho Lee, Pavel Panteleev, Gleb Kalachev", category: "algorithm", sources: [
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Lee, J., et al. (2021). Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum, 2, 030305.",
      "Panteleev, P., & Kalachev, G. (2022). Asymptotically good quantum and locally testable classical LDPC codes. STOC '22, 375-388.",
    ], links: [
      { label: "Paper: Focus Beyond Quadratic Speedups for Error-Corrected Quantum Advantage", href: "/research/babbush-beyond-quadratic-speedups-2021" },
      { label: "Paper: Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction", href: "/research/lee-tensor-hypercontraction-chemistry-2021" },
      { label: "Paper: Asymptotically Good Quantum and Locally Testable Classical LDPC Codes", href: "/research/panteleev-kalachev-good-qldpc-codes-2022" },
      { label: "Paper: A Threshold for Quantum Advantage in Derivative Pricing", href: "/research/chakrabarti-derivative-pricing-threshold-2021" },
    ], id: "2021-111" },
  { year: 2022, date: "January 2022", title: "Silicon spin qubits cross the fault-tolerance threshold", description: "Three groups, at Delft, RIKEN in Japan, and UNSW in Australia, reported silicon spin-qubit devices with two-qubit gate fidelities above about 99 percent, in papers published together in Nature. Their results removed doubts about whether semiconductor qubits could reach the accuracy needed for error correction.", why: "It made silicon qubits made in chip factories a serious contender.", people: "Lieven Vandersypen, Seigo Tarucha, Andrea Morello", category: "hardware", sources: [
      "Xue, X., et al. (2022). Quantum logic with spin qubits crossing the surface code threshold. Nature, 601, 343-347.",
      "Noiri, A., et al. (2022). Fast universal quantum gate above the fault-tolerance threshold in silicon. Nature, 601, 338-342.",
    ], links: [
      { label: "Paper: Quantum Logic with Spin Qubits Crossing the Surface Code Threshold", href: "/research/xue-spin-qubits-surface-code-threshold-2022" },
      { label: "Paper: Fast Universal Quantum Gate Above the Fault-Tolerance Threshold in Silicon", href: "/research/noiri-fast-universal-gate-silicon-2022" },
      { label: "Term: Spin Qubit", href: "/dictionary/spin-qubit" },
    ], id: "2022-112" },
  { year: 2022, date: "4 May 2022", title: "The White House issues NSM-10 on quantum computing and cryptography", description: "National Security Memorandum 10 directed US federal agencies to prepare to migrate to quantum-resistant cryptography, to inventory vulnerable systems, and to plan for a transition by 2035. It set the policy basis for later requirements on agencies and contractors.", why: "It turned the post-quantum migration into a government-wide program.", people: "The White House", category: "cryptography", sources: [
      "The White House (2022). National Security Memorandum on promoting United States leadership in quantum computing while mitigating risks to vulnerable cryptographic systems (NSM-10), 4 May 2022.",
    ], links: [
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
    ], id: "2022-113" },
  { year: 2022, date: "June 2022", title: "Xanadu's Borealis claims photonic advantage with a programmable machine", description: "Xanadu reported Borealis, a programmable photonic Gaussian boson sampler with 216 squeezed modes using time multiplexing, claiming a sample in 36 microseconds that would take thousands of years classically. It was made available through the cloud. Later classical algorithms reduced the claimed gap.", why: "It showed a photonic advantage claim on a programmable device.", people: "Lars Madsen, Xanadu team", category: "hardware", sources: [
      "Madsen, L. S., et al. (2022). Quantum computational advantage with a programmable photonic processor. Nature, 606, 75-81.",
    ], links: [
      { label: "Paper: Quantum Computational Advantage with a Programmable Photonic Processor", href: "/research/madsen-borealis-photonic-advantage-2022" },
      { label: "Hardware: Xanadu Borealis", href: "/hardware/xanadu-borealis" },
    ], id: "2022-114" },
  { year: 2022, date: "5 July 2022", title: "NIST selects the first post-quantum algorithms", description: "After six years of evaluation, NIST announced CRYSTALS-Kyber for key establishment and CRYSTALS-Dilithium, Falcon, and SPHINCS+ for digital signatures as the first algorithms to be standardized. Kyber, Dilithium, and SPHINCS+ became ML-KEM, ML-DSA, and SLH-DSA in the 2024 standards.", why: "It gave industry the algorithms to begin the migration away from RSA and elliptic curves.", people: "NIST", category: "cryptography", sources: [
      "National Institute of Standards and Technology (2022). NIST announces first four quantum-resistant cryptographic algorithms. NIST news release, 5 July 2022.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], id: "2022-115" },
  { year: 2022, date: "July 2022", title: "SIKE is broken on a laptop", description: "Wouter Castryck and Thomas Decru in Leuven published an attack that recovered the secret key of the isogeny-based SIKE key exchange, a NIST fourth-round candidate, in about an hour on a single core. The attack used a mathematical theorem from the 1990s and showed that new cryptographic assumptions can fail suddenly.", why: "It is the standard lesson for why hybrid schemes and continued scrutiny matter in post-quantum cryptography.", people: "Wouter Castryck, Thomas Decru", category: "cryptography", sources: [
      "Castryck, W., & Decru, T. (2023). An efficient key recovery attack on SIDH. EUROCRYPT 2023, LNCS 14008, 423-447. IACR ePrint 2022/975.",
    ], links: [
      { label: "Paper: An Efficient Key Recovery Attack on SIDH", href: "/research/castryck-decru-sidh-break-2022" },
    ], id: "2022-116" },
  { year: 2022, date: "4 October 2022", title: "Aspect, Clauser, and Zeilinger win the Nobel Prize in Physics", description: "Alain Aspect, John Clauser, and Anton Zeilinger shared the prize for experiments with entangled photons, establishing the violation of Bell inequalities and pioneering quantum information science. Their work covers Bell tests, teleportation, and entanglement swapping.", why: "It recognized the experimental foundations of quantum information.", people: "Alain Aspect, John Clauser, Anton Zeilinger", category: "foundations", sources: [
      "The Royal Swedish Academy of Sciences (2022). The Nobel Prize in Physics 2022 press release, 4 October 2022.",
    ], links: [
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
    ], id: "2022-117" },
  { year: 2022, date: "November 2022", title: "IBM's 433-qubit Osprey and a classical algorithm for noisy circuits", description: "IBM unveiled Osprey, a 433-qubit processor. In the same month, Dorit Aharonov and coauthors posted a proof that noisy random circuit sampling with constant noise per gate can be simulated in polynomial time classically, a result that points to the need for error correction.", why: "One paper showed that scaling continued, the other showed that scaling noisy devices has limits.", people: "IBM Quantum, Dorit Aharonov, Umesh Vazirani", category: "hardware", sources: [
      "Aharonov, D., Gao, X., Landau, Z., Liu, Y., & Vazirani, U. (2023). A polynomial-time classical algorithm for noisy random circuit sampling. STOC '23, 945-957.",
    ], links: [
      { label: "Paper: A Polynomial-Time Classical Algorithm for Noisy Random Circuit Sampling", href: "/research/aharonov-noisy-random-circuit-sampling-2023" },
      { label: "Hardware: IBM Condor", href: "/hardware/ibm-condor" },
    ], id: "2022-118" },
  { year: 2022, date: "21 December 2022", title: "The Quantum Computing Cybersecurity Preparedness Act", description: "The US Congress passed and the president signed the act requiring federal agencies to inventory their cryptographic systems and prepare for migration to post-quantum algorithms, with reporting to Congress. It followed NSM-10 and set deadlines for agencies.", why: "It put post-quantum migration into law.", people: "US Congress", category: "cryptography", sources: [
      "United States Congress (2022). Quantum Computing Cybersecurity Preparedness Act, Public Law 117-260, 21 December 2022.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], id: "2022-119" },
  { year: 2023, date: "February to March 2023", title: "Larger surface codes and break-even for a GKP qubit", description: "Google ran a distance-5 surface code on a 72-qubit Sycamore processor and found a slightly lower logical error rate than distance 3, the first improvement with code size on a superconducting chip. Yale researchers reported a GKP qubit in a cavity that outlived its best passive qubit by about 2.3 times, using real-time feedback tuned by reinforcement learning.", why: "Both were steps toward error correction that gets better as hardware grows.", people: "Google Quantum AI, Volodymyr Sivak, Michel Devoret", category: "error-correction", sources: [
      "Google Quantum AI (2023). Suppressing quantum errors by scaling a surface code logical qubit. Nature, 614, 676-681.",
      "Sivak, V. V., et al. (2023). Real-time quantum error correction beyond break-even. Nature, 616, 50-55.",
    ], links: [
      { label: "Paper: Suppressing Quantum Errors by Scaling a Surface Code Logical Qubit", href: "/research/google-suppressing-errors-surface-code-2023" },
      { label: "Paper: Real-Time Quantum Error Correction Beyond Break-Even", href: "/research/sivak-error-correction-beyond-break-even-2023" },
    ], id: "2023-120" },
  { year: 2023, date: "May to June 2023", title: "Non-Abelian anyons and Jiuzhang 3.0", description: "Google and Quantinuum each reported creating and braiding non-Abelian anyons on their processors, a synthetic version of the topological physics that Kitaev envisioned. The USTC team reported Jiuzhang 3.0, a photonic Gaussian boson sampler detecting up to 255 photons with improved detectors.", why: "They showed topological physics on gate-based devices and continued the photonic advantage race.", people: "Trond Andersen, Mohsin Iqbal, Han-Sen Zhong", category: "hardware", sources: [
      "Andersen, T. I., et al. (2023). Non-Abelian braiding of graph vertices in a superconducting processor. Nature, 618, 264-269.",
      "Deng, Y.-H., et al. (2023). Gaussian boson sampling with pseudo-photon-number-resolving detectors and quantum computational advantage. Physical Review Letters, 130, 190601.",
    ], links: [
      { label: "Paper: Fault-Tolerant Quantum Computation by Anyons", href: "/research/kitaev-fault-tolerant-anyons-2003" },
      { label: "Term: Topological Qubit", href: "/dictionary/topological-qubit" },
    ], id: "2023-121" },
  { year: 2023, date: "14 June 2023", title: "IBM and Berkeley report utility with 127 qubits", description: "IBM and UC Berkeley published results in Nature from a 127-qubit processor, using error mitigation to compute properties of a kicked Ising model on circuits with up to 60 layers and 2,880 two-qubit gates. The authors claimed utility, not advantage. Within weeks, classical groups reproduced the results with tensor networks and Pauli propagation.", why: "It started the modern cycle of claim, classical rebuttal, and better benchmarks.", people: "Youngseok Kim, Abhinav Kandala, IBM Quantum", category: "hardware", sources: [
      "Kim, Y., et al. (2023). Evidence for the utility of quantum computing before fault tolerance. Nature, 618, 500-505.",
    ], links: [
      { label: "Paper: Evidence for the Utility of Quantum Computing Before Fault Tolerance", href: "/research/kim-utility-before-fault-tolerance-2023" },
      { label: "Paper: Efficient Tensor Network Simulation of IBM's Eagle Kicked Ising Experiment", href: "/research/tindall-tensor-network-eagle-kicked-ising-2024" },
      { label: "Term: Quantum Error Mitigation", href: "/dictionary/quantum-error-mitigation" },
    ], id: "2023-122" },
  { year: 2023, date: "June 2023", title: "Microsoft publishes a three-level roadmap to scale", description: "Microsoft described three levels of quantum computing: foundational machines without error correction, resilient machines with reliable logical qubits, and scale machines that can solve problems beyond classical reach. It positioned its own work on topological qubits and on software for error correction within the roadmap.", why: "The levels gave the industry a vocabulary for the stage between noisy and fault-tolerant machines.", people: "Microsoft Azure Quantum", category: "industry", sources: [
      "Microsoft Azure Quantum (2023). Achieving quantum at scale: the three levels of quantum computing. Microsoft Azure Quantum blog, June 2023.",
    ], links: [
      { label: "Company: Microsoft", href: "/companies/microsoft" },
      { label: "Term: Fault Tolerance", href: "/dictionary/fault-tolerance" },
    ], id: "2023-123" },
  { year: 2023, date: "October to December 2023", title: "Neutral atoms reach 99.5 percent gates and 48 logical qubits", description: "A Harvard, MIT, and QuEra team reported entangling gates between neutral atoms with 99.5 percent fidelity, performed in parallel on dozens of pairs, and then used a reconfigurable array of up to 280 atoms to run algorithms on up to 48 logical qubits with small error-detecting and error-correcting codes.", why: "It brought neutral atoms from analog simulators to logical-qubit computing.", people: "Simon Evered, Dolev Bluvstein, Mikhail Lukin", category: "hardware", sources: [
      "Evered, S. J., et al. (2023). High-fidelity parallel entangling gates on a neutral-atom quantum computer. Nature, 622, 268-272.",
      "Bluvstein, D., et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature, 626, 58-65.",
    ], links: [
      { label: "Paper: High-Fidelity Parallel Entangling Gates on a Neutral-Atom Quantum Computer", href: "/research/evered-parallel-entangling-gates-atoms-2023" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
      { label: "Hardware: QuEra Aquila", href: "/hardware/quera-aquila" },
    ], id: "2023-124" },
  { year: 2023, date: "4 December 2023", title: "IBM announces Condor, Heron, and Quantum System Two", description: "At its Quantum Summit, IBM unveiled Condor, a 1,121-qubit processor, and Heron, a 133-qubit processor with tunable couplers and lower error rates, along with Quantum System Two, a modular system. IBM said that quality, not qubit count, would drive progress and changed its roadmap to emphasize Heron and error correction.", why: "It marked the pivot from raising qubit counts to improving error rates and connectivity.", people: "IBM Quantum", category: "hardware", sources: [
      "IBM (2023). IBM debuts next-generation quantum processor and IBM Quantum System Two. IBM press release, 4 December 2023.",
    ], links: [
      { label: "Hardware: IBM Condor", href: "/hardware/ibm-condor" },
      { label: "Hardware: IBM Heron (r1, r2, and r3)", href: "/hardware/ibm-heron" },
    ], id: "2023-125" },
  { year: 2024, date: "March 2024", title: "IBM's gross code and the case for quantum LDPC codes", description: "IBM researchers published high-threshold, low-overhead fault-tolerant memory based on bivariate bicycle codes, including a code that stores 12 logical qubits in 144 data qubits plus 144 check qubits, about ten times fewer qubits than a surface code for similar protection, at the cost of longer-range connections.", why: "It gave IBM, and later others, a practical path to cut error-correction overhead.", people: "Sergey Bravyi, Andrew Cross, Jay Gambetta, Theodore Yoder", category: "error-correction", sources: [
      "Bravyi, S., et al. (2024). High-threshold and low-overhead fault-tolerant quantum memory. Nature, 627, 778-782.",
    ], links: [
      { label: "Paper: High-Threshold and Low-Overhead Fault-Tolerant Quantum Memory", href: "/research/bravyi-high-threshold-low-overhead-memory-2024" },
      { label: "Term: Quantum LDPC Code", href: "/dictionary/qldpc-code" },
    ], id: "2024-126" },
  { year: 2024, date: "April and September 2024", title: "Microsoft and Quantinuum show reliable logical qubits", description: "In April, Microsoft and Quantinuum reported four logical qubits on a trapped-ion machine with logical error rates reported to be many times lower than the physical ones. In September, they announced 12 entangled logical qubits. The work combined Quantinuum's hardware with Microsoft's qubit-virtualization software.", why: "It was a headline demonstration of the resilient level in Microsoft's roadmap.", people: "Microsoft, Quantinuum", category: "error-correction", sources: [
      "Microsoft Azure Quantum and Quantinuum (2024). Advancing reliable quantum computing: logical qubits. Microsoft Azure Quantum blog, April and September 2024.",
    ], links: [
      { label: "Hardware: Quantinuum H2", href: "/hardware/quantinuum-h2" },
      { label: "Term: Logical Qubit", href: "/dictionary/logical-qubit" },
    ], id: "2024-127" },
  { year: 2024, date: "April 2024", title: "Browsers begin shipping post-quantum key exchange", description: "Google Chrome enabled a hybrid key exchange combining X25519 with the Kyber lattice scheme by default in version 124, and later versions switched to the standardized ML-KEM. Cloudflare and other providers supported it, and a large share of web traffic became protected against harvest-now-decrypt-later attacks.", why: "It was the first large-scale deployment of post-quantum cryptography on the internet.", people: "Google Chrome team, Cloudflare", category: "cryptography", sources: [
      "The Chromium Projects (2024). Chrome 124 release notes: hybrid X25519Kyber768 key exchange enabled by default.",
    ], links: [
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
    ], id: "2024-128" },
  { year: 2024, date: "13 August 2024", title: "NIST publishes the first post-quantum standards", description: "NIST released three Federal Information Processing Standards: FIPS 203, ML-KEM for key establishment, FIPS 204, ML-DSA for signatures, and FIPS 205, SLH-DSA, a hash-based signature. It urged organizations to start migrating immediately. FIPS 206 for the Falcon-based signature FN-DSA was still in preparation.", why: "These are the official replacements for RSA and elliptic-curve cryptography.", people: "NIST", category: "cryptography", sources: [
      "National Institute of Standards and Technology (2024). NIST releases first 3 finalized post-quantum encryption standards. NIST news release, 13 August 2024.",
    ], links: [
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
    ], id: "2024-129" },
  { year: 2024, date: "2024", title: "Classical simulations contest advantage claims", description: "Researchers at the Flatiron Institute showed that IBM's 127-qubit utility experiment could be simulated with tensor networks and belief propagation, and a Chicago team published a classical algorithm that exploits photon loss to simulate Gaussian boson sampling experiments such as Jiuzhang. Each claim of advantage began to be tested within weeks by classical groups.", why: "The exchange raised the standard for verifying advantage.", people: "Joseph Tindall, Changhun Oh", category: "theory", sources: [
      "Tindall, J., Fishman, M., Stoudenmire, E. M., & Sels, D. (2024). Efficient tensor network simulation of IBM's Eagle kicked Ising experiment. PRX Quantum, 5, 010308.",
      "Oh, C., Liu, M., Alexeev, Y., Fefferman, B., & Jiang, L. (2024). Classical algorithm for simulating experimental Gaussian boson sampling. Nature Physics, 20, 1461-1468.",
    ], links: [
      { label: "Paper: Efficient Tensor Network Simulation of IBM's Eagle Kicked Ising Experiment", href: "/research/tindall-tensor-network-eagle-kicked-ising-2024" },
      { label: "Paper: Classical Algorithm for Simulating Experimental Gaussian Boson Sampling", href: "/research/oh-classical-algorithm-gaussian-boson-sampling-2024" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
    ], id: "2024-130" },
  { year: 2024, date: "September to November 2024", title: "Magic state cultivation, 24 logical qubits, and a neural decoder", description: "Craig Gidney, Noah Shutty, and Cody Jones proposed magic state cultivation, which could cut the cost of non-Clifford gates by an order of magnitude. Microsoft and Atom Computing reported 24 entangled logical qubits on neutral atoms. Google DeepMind and Google Quantum AI published AlphaQubit, a neural network decoder that beat conventional decoders on real data.", why: "They addressed the three main cost drivers: magic states, logical qubit counts, and decoding.", people: "Craig Gidney, Johannes Bausch", category: "error-correction", sources: [
      "Gidney, C., Shutty, N., & Jones, C. (2024). Magic state cultivation: growing T states as cheap as CNOT gates. arXiv:2409.17595.",
      "Bausch, J., et al. (2024). Learning high-accuracy error decoding for quantum processors. Nature, 635, 834-840.",
    ], links: [
      { label: "Paper: Magic State Cultivation: Growing T States as Cheap as CNOT Gates", href: "/research/gidney-magic-state-cultivation-2024" },
      { label: "Paper: Learning High-Accuracy Error Decoding for Quantum Processors", href: "/research/bausch-alphaqubit-decoder-2024" },
      { label: "Term: Magic State Distillation", href: "/dictionary/magic-state-distillation" },
    ], id: "2024-131" },
  { year: 2024, date: "9 December 2024", title: "Google's Willow shows error correction below threshold", description: "Google Quantum AI announced Willow, a 105-qubit superconducting processor, and reported that a surface-code logical qubit became more reliable as the code grew from distance 3 to 5 to 7, with logical error falling by about a factor of 2.14 per step. The distance-7 memory outlived its best physical qubit by roughly 2.4 times. The company also reported a random circuit sampling benchmark in under five minutes.", why: "It is the clearest evidence so far that error correction improves with scale on real hardware.", people: "Google Quantum AI", category: "error-correction", sources: [
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926. arXiv:2408.13687.",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Hardware: Google Willow", href: "/hardware/google-willow" },
      { label: "Term: Logical Error Rate", href: "/dictionary/logical-error-rate" },
    ], id: "2024-132" },
  { year: 2025, date: "2025", title: "The International Year of Quantum Science and Technology", description: "The United Nations declared 2025 the International Year of Quantum Science and Technology, marking the 100th anniversary of the formulation of quantum mechanics by Heisenberg and others. Events were held around the world, and the opening took place at UNESCO in Paris in February.", why: "It recognized the century since matrix mechanics and brought attention to quantum technology.", people: "United Nations, UNESCO", category: "industry", sources: [
      "United Nations General Assembly (2024). Proclamation of 2025 as the International Year of Quantum Science and Technology.",
    ], links: [
      { label: "Term: Hilbert Space", href: "/dictionary/hilbert-space" },
    ], id: "2025-133" },
  { year: 2025, date: "January to February 2025", title: "Alice and Bob and QuEra raise large rounds", description: "Alice and Bob, a Paris cat-qubit company, announced a funding round of about 100 million euros, and QuEra announced a round of more than 230 million dollars, with investors including Google and SoftBank. The funding supported roadmaps to fault-tolerant machines with logical qubits by the end of the decade.", why: "It showed that investors were funding error-correction roadmaps, not only near-term devices.", people: "Alice and Bob, QuEra Computing", category: "industry", sources: [
      "EE News Europe (2025). QuEra advances fault tolerant quantum roadmap with $230M industrial push.",
    ], links: [
      { label: "Company: Alice & Bob", href: "/companies/alice-bob" },
      { label: "Company: QuEra Computing", href: "/companies/quera" },
    ], id: "2025-134" },
  { year: 2025, date: "19 and 27 February 2025", title: "Microsoft's Majorana 1 and Amazon's Ocelot", description: "Microsoft announced Majorana 1, a chip with eight qubits based on a topological core, though many physicists said the evidence for topological qubits was not yet conclusive. A week later Amazon Web Services announced Ocelot, a chip of cat qubits and a repetition code that the company said cut error-correction overhead by up to about 90 percent.", why: "They represent two new qubit designs, topological and bosonic, aimed at cheaper fault tolerance.", people: "Microsoft Quantum, AWS Center for Quantum Computing", category: "hardware", sources: [
      "Microsoft Azure Quantum (2025). Interferometric single-shot parity measurement in InAs-Al hybrid devices. Nature, 638, 651-655.",
      "Putterman, H., et al. (2025). Hardware-efficient quantum error correction via concatenated bosonic qubits. Nature, 638, 927-934.",
    ], links: [
      { label: "Term: Topological Qubit", href: "/dictionary/topological-qubit" },
      { label: "Term: Cat Qubit", href: "/dictionary/cat-qubit" },
      { label: "Paper: Dynamically Protected Cat-Qubits: A New Paradigm for Universal Quantum Computation", href: "/research/mirrahimi-dynamically-protected-cat-qubits-2014" },
    ], id: "2025-135" },
  { year: 2025, date: "11 to 12 March 2025", title: "NIST picks HQC, and D-Wave claims beyond-classical simulation", description: "NIST selected HQC, a code-based scheme, as a backup key-establishment algorithm. A day later D-Wave published a Science paper claiming that its annealer simulated quench dynamics of magnetic materials beyond the reach of classical methods. Classical groups soon reproduced parts of the results with tensor networks.", why: "One diversified the post-quantum standards, and the other added to the advantage debate.", people: "NIST, Andrew King, D-Wave", category: "cryptography", sources: [
      "National Institute of Standards and Technology (2025). NIST selects HQC as fifth algorithm for post-quantum encryption. NIST news release, 11 March 2025.",
      "King, A. D., et al. (2025). Beyond-classical computation in quantum simulation. Science, 388(6743), 199-204.",
    ], links: [
      { label: "Paper: Beyond-Classical Computation in Quantum Simulation", href: "/research/king-beyond-classical-quantum-simulation-2025" },
      { label: "Hardware: D-Wave Advantage2", href: "/hardware/dwave-advantage2" },
    ], id: "2025-136" },
  { year: 2025, date: "March 2025", title: "Certified randomness from a quantum computer", description: "JPMorgan Chase, Quantinuum, and US national laboratories published a protocol that used a 56-qubit trapped-ion machine to generate random bits whose randomness can be verified using classical supercomputers. NVIDIA announced a Boston research center for accelerated quantum computing, and the GTC conference included a Quantum Day.", why: "It was an early example of a verifiable, if narrow, practical use of a quantum computer.", people: "Scott Aaronson, Marco Pistoia, Quantinuum", category: "cryptography", sources: [
      "Liu, M., et al. (2025). Certified randomness using a trapped-ion quantum processor. Nature, 640, 343-348.",
    ], links: [
      { label: "Term: Quantum Random Number Generator", href: "/dictionary/quantum-random-number-generator" },
      { label: "Hardware: Quantinuum H2", href: "/hardware/quantinuum-h2" },
    ], id: "2025-137" },
  { year: 2025, date: "April 2025", title: "DARPA opens the Quantum Benchmarking Initiative", description: "DARPA announced Stage A of the Quantum Benchmarking Initiative with about 15 to 18 companies selected to define how they would reach a utility-scale quantum computer, with the aim of testing by 2033 whether such a machine is feasible. Later stages were to include independent verification of hardware plans.", why: "It set a government test for roadmaps.", people: "DARPA", category: "industry", sources: [
      "Defense Advanced Research Projects Agency (2025). Quantum Benchmarking Initiative announcement, April 2025.",
    ], links: [], id: "2025-138" },
  { year: 2025, date: "May 21, 2025", title: "Gidney lowers RSA-2048 to under a million qubits", description: "Craig Gidney of Google Quantum AI estimated that a 2048-bit RSA integer could be factored in under a week with fewer than a million noisy qubits, about twenty times fewer than his 2019 estimate with Ekerå. He combined approximate residue arithmetic, yoked surface codes, and magic state cultivation.", why: "It cut the hardware needed to break RSA and accelerated post-quantum planning.", people: "Craig Gidney", category: "cryptography", sources: [
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
    ], id: "2025-139" },
  { year: 2025, date: "June 2025", title: "IBM's roadmap to Starling, and IonQ buys Oxford Ionics", description: "IBM published a detailed roadmap to a fault-tolerant machine called Starling in 2029, with 200 logical qubits and 100 million operations, based on bivariate bicycle codes, followed by a larger system in 2033. IonQ announced the acquisition of Oxford Ionics, an electronic-qubit-control ion trap company, for about 1.08 billion dollars. NIST also launched a public randomness beacon certified by a Bell test.", why: "It was a month of consolidation, roadmaps, and certified randomness.", people: "IBM Quantum, IonQ, NIST", category: "industry", sources: [
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer at new IBM Quantum Data Center. IBM press release, 10 June 2025.",
      "IonQ (2025). IonQ to acquire Oxford Ionics. IonQ press release, June 2025.",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Company: IonQ", href: "/companies/ionq" },
      { label: "Paper: High-Threshold and Low-Overhead Fault-Tolerant Quantum Memory", href: "/research/bravyi-high-threshold-low-overhead-memory-2024" },
    ], id: "2025-140" },
  { year: 2025, date: "September 2025", title: "6,100 atoms in one array and continuous operation of 3,000", description: "A Caltech team reported a tweezer array of more than 6,100 atoms with long coherence, and a Harvard team reported continuous operation of a 3,000-atom system for over two hours by reloading atoms while the array runs. During the same month, Quantinuum raised about 600 million dollars at a 10 billion dollar valuation and PsiQuantum raised about a billion dollars.", why: "It showed that neutral-atom arrays can scale to thousands of atoms and run continuously, and capital flowed to the leaders.", people: "Endres group, Caltech; Lukin group, Harvard", category: "hardware", sources: [
      "Manetsch, H. J., et al. (2025). A tweezer array with 6100 highly coherent atom qubits. Nature (2025).",
      "Chiu, N.-C., et al. (2025). Continuous operation of a coherent 3,000-qubit system. Nature (2025).",
    ], links: [
      { label: "Term: Neutral Atom Qubit", href: "/dictionary/neutral-atom-qubit" },
      { label: "Term: Optical Tweezers", href: "/dictionary/optical-tweezers" },
      { label: "Paper: Atom-by-Atom Assembly of Defect-Free One-Dimensional Cold Atom Arrays", href: "/research/endres-atom-by-atom-assembly-2016" },
    ], id: "2025-141" },
  { year: 2025, date: "7 October 2025", title: "Clarke, Devoret, and Martinis win the Nobel Prize in Physics", description: "John Clarke, Michel Devoret, and John Martinis received the prize for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit, the physics behind superconducting qubits. Devoret and Martinis lead hardware teams at Google, and Devoret's earlier group at Yale produced the transmon and cat-qubit proposals.", why: "It recognized the physics on which IBM and Google processors are built.", people: "John Clarke, Michel Devoret, John Martinis", category: "foundations", sources: [
      "The Royal Swedish Academy of Sciences (2025). The Nobel Prize in Physics 2025 press release, 7 October 2025.",
    ], links: [
      { label: "Paper: Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box", href: "/research/nakamura-cooper-pair-box-1999" },
      { label: "Term: Transmon", href: "/dictionary/transmon" },
    ], id: "2025-142" },
  { year: 2025, date: "22 October 2025", title: "Google's Quantum Echoes experiment", description: "Google Quantum AI reported an experiment on Willow measuring an out-of-time-order correlator, an echo-like quantity sensitive to quantum chaos, which the team said ran about 13,000 times faster than the best classical algorithm it could apply on a leading supercomputer. The paper appeared in Nature and was framed as a verifiable step toward useful advantage.", why: "It was a flagship advantage claim of 2025, and others began to test it.", people: "Google Quantum AI", category: "hardware", sources: [
      "Google Quantum AI (2025). Observation of constructive interference at the edge of quantum ergodicity. Nature (October 2025).",
    ], links: [
      { label: "Hardware: Google Willow", href: "/hardware/google-willow" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
    ], id: "2025-143" },
  { year: 2025, date: "November 2025", title: "Quantinuum's Helios and IBM's Nighthawk and Loon", description: "Quantinuum launched Helios, a barium ion machine with 98 qubits and reported record two-qubit fidelities, with demonstrations of dozens of logical qubits. IBM announced Nighthawk, a 120-qubit processor with 218 tunable couplers aimed at advantage experiments, and Loon, an experimental chip with long-range connections for error-correcting codes. DARPA moved a group of companies to Stage B of its benchmarking initiative.", why: "They are the leading trapped-ion and superconducting platforms entering the error-correction era.", people: "Quantinuum, IBM Quantum, DARPA", category: "hardware", sources: [
      "Quantinuum (2025). Quantinuum launches Helios. Press release, November 2025.",
      "IBM (2025). IBM announces Nighthawk and Loon quantum chips. Reported by Engadget, 12 November 2025. https://www.engadget.com/science/ibm-announces-nighthawk-and-loon-quantum-chips-213603769.html",
    ], links: [
      { label: "Hardware: Quantinuum H2", href: "/hardware/quantinuum-h2" },
      { label: "Hardware: IBM Heron (r1, r2, and r3)", href: "/hardware/ibm-heron" },
      { label: "Term: Quantum LDPC Code", href: "/dictionary/qldpc-code" },
    ], id: "2025-144" },
  { year: 2026, date: "Late 2025 to January 2026", title: "Neutral-atom fault-tolerant architecture with up to 96 logical qubits", description: "A collaboration of QuEra, Harvard, MIT, and others reported in Nature a fault-tolerant architecture on neutral atoms using up to 96 logical qubits, combining transversal gates, magic state distillation, and continuous operation. Earlier in 2025 the same groups had published logical-level magic state distillation and a 3,000-atom continuous system.", why: "It shows the neutral-atom platform moving from demonstrations of parts toward integrated fault-tolerant systems.", people: "QuEra Computing, Harvard, MIT", category: "error-correction", sources: [
      "Quantum Zeitgeist (2026). Quantum logical-qubit leaderboard (summary of reported results, including QuEra up to 96 logical qubits). https://quantumzeitgeist.com/quantum-logical-qubit-leaderboard/",
    ], links: [
      { label: "Company: QuEra Computing", href: "/companies/quera" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
    ], id: "2026-145" },
  { year: 2026, date: "March 2026", title: "Quantinuum reports 94 error-protected logical qubits", description: "Quantinuum reported results on its Helios system with 94 logical qubits protected by error-detecting codes, building on the 48 logical qubits shown in late 2025. Such counts use small codes and error detection, so they are not equivalent to fully error-corrected qubits, and the logical error rates matter more than the counts.", why: "It continued the race of logical-qubit counts, which should be compared by logical error rate and code distance.", people: "Quantinuum", category: "error-correction", sources: [
      "Value the Markets (2026). Quantinuum reports 94 error-protected qubits in quantum system. https://www.valuethemarkets.com/news/quantinuum-reports-94-error-protected-qubits-in-quantum-system",
    ], links: [
      { label: "Company: Quantinuum", href: "/companies/quantinuum" },
      { label: "Term: Logical Error Rate", href: "/dictionary/logical-error-rate" },
    ], id: "2026-146" },
  { year: 2026, date: "21 May 2026", title: "The US Commerce Department announces about 2 billion dollars for quantum companies", description: "The US Department of Commerce announced letters of intent with nine quantum computing companies for about 2 billion dollars in support, reported to include government equity stakes. IBM, D-Wave, and other firms were among those named in media reports, with funding tied to domestic manufacturing and fabrication capacity.", why: "It marks a shift to direct government investment in quantum hardware companies and fabrication.", people: "US Department of Commerce", category: "industry", sources: [
      "U.S. Department of Commerce (2026). Department of Commerce announces letters of intent with 9 companies for $2 billion to accelerate U.S. leadership in quantum computing. https://www.quantum.gov/department-of-commerce-announces-letters-of-intent-with-9-companies-for-2-billion-to-accelerate-u-s-leadership-in-quantum-computing/",
      "The Star (2026). US to award $2 billion to quantum computing firms, take equity stakes, WSJ reports, 21 May 2026.",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
    ], id: "2026-147" },
  { year: 2026, date: "2026", title: "IBM targets verified quantum advantage by the end of 2026", description: "IBM said it expected the first cases of verified quantum advantage by the end of 2026, using Nighthawk processors with an open tracker, developed with partners such as Algorithmiq, the Flatiron Institute, and BlueQubit, where claims can be tested by classical groups. Kookaburra, the first module to combine error-correcting memory with logic, is on IBM's roadmap for 2026.", why: "The industry's central question for 2026 is whether advantage claims survive classical scrutiny.", people: "IBM Quantum", category: "industry", sources: [
      "Tech Wire Asia (2025). IBM introduces new processor as it targets quantum advantage by 2026. https://techwireasia.com/2025/11/ibm-introduces-new-processor-as-it-targets-quantum-advantage-by-2026/",
    ], links: [
      { label: "Company: IBM", href: "/companies/ibm" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
    ], id: "2026-148" },
  { year: 2026, date: "24 September 2026", title: "Infleqtion reports 30 entangled logical qubits", description: "Infleqtion reported 30 entangled logical qubits on its Sqale neutral-atom processor, according to the Quantum Computing Report. Several companies, including QuEra, Quantinuum, Atom Computing, and Microsoft, have reported logical qubit demonstrations on different codes and with different error rates.", why: "It is a recent data point in the growing set of logical-qubit results across platforms.", people: "Infleqtion", category: "error-correction", sources: [
      "Quantum Computing Report (2026). Infleqtion achieves 30 entangled logical qubits on Sqale neutral atom quantum processor. https://quantumcomputingreport.com/infleqtion-achieves-30-entangled-logical-qubits-on-sqale-neutral-atom-quantum-processor/amp/",
    ], links: [
      { label: "Term: Logical Qubit", href: "/dictionary/logical-qubit" },
      { label: "Term: Neutral Atom Qubit", href: "/dictionary/neutral-atom-qubit" },
    ], id: "2026-149" },
];
