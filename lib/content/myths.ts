export type MythCategory = "computing" | "physics" | "security" | "industry" | "society";

export type MythVerdict = "False" | "Mostly false" | "Misleading" | "Partly true" | "Unproven";

export type MythTopic = {
  slug: string;
  myth: string;
  category: MythCategory;
  verdict: MythVerdict;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  facts: string[];
  spot: string[];
  faq: { q: string; a: string }[];
  references: string[];
  links: { label: string; href: string }[];
  words: number;
};

export const mythCategoryLabels: Record<MythCategory, string> = {
  computing: "How Quantum Computers Work",
  physics: "Physics and Concepts",
  security: "Security and Cryptography",
  industry: "Industry, Hardware, and Business",
  society: "Society, Science, and Hype",
};

export const mythTopics: MythTopic[] = [
  { slug: "quantum-computers-just-faster", myth: "Quantum computers are just much faster versions of ordinary computers", category: "computing", verdict: "False", summary: "A quantum computer is a different kind of machine, not a faster one. It beats classical computers only on problems with a special mathematical structure, and for everyday tasks it would be slower and far more expensive.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth is encouraged by headlines that compare a quantum experiment with a supercomputer and say that a task took minutes instead of thousands of years. It is natural to conclude that the quantum machine is simply faster. Marketing language adds to the confusion, since vendors talk about speed and power without explaining that the comparison is for one carefully chosen task.",
          "The idea also comes from the history of computing, in which each generation of machines was faster than the last, so people assume that quantum computers are the next step on the same ladder. They are not on that ladder. A classical computer manipulates bits that are definitely 0 or 1. A quantum computer manipulates quantum states that carry amplitudes, which can interfere, and its operations are designed so that wrong answers cancel and right answers reinforce. That is a different way of computing, with different strengths and weaknesses.",
        ] },
      { heading: "What the science says", paragraphs: [
          "Computer scientists describe the difference with complexity classes. The class of problems that quantum computers can solve efficiently, called BQP, was defined by Bernstein and Vazirani in 1993. It contains the problems that ordinary computers solve efficiently, but it is believed to be larger only in specific ways. The best-known additional problems are factoring large integers and computing discrete logarithms, which Shor's algorithm solves in polynomial time, and the simulation of quantum systems, which was Feynman's original motivation. For most other tasks, no quantum speedup is known.",
          "Where speedups exist they come in different sizes. Shor's algorithm gives a superpolynomial speedup for factoring. Grover's algorithm gives a quadratic speedup for unstructured search, which is proven optimal by Bennett, Bernstein, Brassard, and Vazirani in 1997. For many everyday tasks, such as sorting a list, running a spreadsheet, rendering video, or browsing the web, no quantum advantage is known, and the data-loading and output costs of a quantum computer would erase any gain.",
          "Speed in the sense of operations per second also favors classical machines. A modern processor performs billions of operations per second. An error-corrected quantum computer will perform logical operations at rates of thousands to perhaps millions per second, because each logical operation is built from many physical operations and error-correction cycles. Babbush and coauthors showed in 2021 that this slowness means a quadratic speedup pays off only for problems that already take a classical computer days to years.",
        ] },
      { heading: "A thought experiment", paragraphs: [
          "Imagine two tasks. The first is to sort a million numbers; the second is to find the prime factors of a 2,048-bit number. For the first, the best classical algorithms take about twenty million steps and run in a fraction of a second on a phone, and no quantum algorithm is known that does better in a meaningful way, once the cost of loading and reading the data is counted. For the second, classical methods take an astronomically long time, while a large fault-tolerant quantum computer would take days. A person who says that a quantum computer is faster would be right about the second task and wrong about the first, and the pair shows why the claim needs a task attached to it.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "For certain problems the difference is dramatic. Factoring a 2,048-bit number is believed to be infeasible for any classical computer in the lifetime of the universe with known methods, while a fault-tolerant quantum computer with about a million noisy qubits could do it in under a week, according to Gidney's 2025 estimate. Simulating the dynamics of some quantum materials may also be out of reach classically and feasible for quantum devices. In those cases, it is fair to say that a quantum computer is far faster. The error is to generalize from them to all computation.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth leads to wrong decisions. Companies sometimes buy or plan around quantum computing expecting general acceleration of their workloads, and are disappointed. Students may think that quantum computers will make classical programming obsolete. Policymakers may overestimate or underestimate the impact on sectors. A correct picture, in which quantum computers are specialized accelerators for particular tasks, similar to how GPUs are used for graphics and machine learning, leads to better planning. Researchers such as Aaronson have repeatedly pointed out that the real question for any application is whether a known quantum algorithm gives a speedup that survives the overheads.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "A useful reply is that a quantum computer is not a faster computer but a different one, good for some problems and useless for others, in the way that a microscope is not a faster telescope. If someone claims a quantum speedup, ask which algorithm provides it, what the speedup is, and what the classical comparison is. If the answer is vague, the claim is probably marketing. Understanding that quantum computers are specialized also helps you see why the important applications are cryptography, quantum simulation, and a few structured problems.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computers are not generally faster than classical ones. They offer speedups for particular problems with exploitable structure, and for the rest of computing, classical machines will remain better and cheaper. The best way to think about the technology is as a new kind of accelerator that will be used alongside classical computers, as the hybrid systems described elsewhere on this site show.",
        ] },
    ], facts: [
      "BQP, the class of problems solvable efficiently by quantum computers, was defined by Bernstein and Vazirani in 1993.",
      "Known large speedups cover factoring, discrete logarithms, and simulation of quantum systems.",
      "Grover's quadratic speedup for search is proven to be the best possible for unstructured problems.",
      "Logical operations on error-corrected machines are expected to be thousands to millions of times slower than classical operations.",
    ], spot: [
      "Look for the phrase faster computer or powerful as a general description of quantum computers.",
      "Ask which algorithm provides the speedup and for which problem.",
      "Check whether the comparison uses the best classical method on the same task.",
      "Be skeptical of claims about everyday applications, such as faster web browsing or video.",
    ], faq: [
      { q: "Will quantum computers replace my laptop?", a: "No. Quantum computers are specialized machines that need specialized environments, and they would be slower than your laptop for ordinary tasks." },
      { q: "Which problems do quantum computers speed up?", a: "Factoring, discrete logarithms, simulation of quantum systems, and a few other structured problems. Many other problems have no known speedup." },
      { q: "Is quantum speed measured in qubits?", a: "No. Speed depends on error rates, the algorithm, and the architecture, not only on the number of qubits." },
    ], references: [
      "Bernstein, E., & Vazirani, U. (1997). Quantum complexity theory. SIAM Journal on Computing, 26, 1411-1473.",
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
      "Bennett, C. H., Bernstein, E., Brassard, G., & Vazirani, U. (1997). Strengths and weaknesses of quantum computing. SIAM Journal on Computing, 26, 1510-1523.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
      "Montanaro, A. (2016). Quantum algorithms: an overview. npj Quantum Information, 2, 15023.",
    ], links: [
      { label: "Paper: Quantum Complexity Theory", href: "/research/bernstein-vazirani-quantum-complexity-theory-1997" },
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Term: BQP Complexity Class", href: "/dictionary/bqp" },
      { label: "Term: Quantum Speedup", href: "/dictionary/quantum-speedup" },
    ], words: 1093 },
  { slug: "quantum-computers-try-all-answers", myth: "A quantum computer tries every possible answer at the same time", category: "computing", verdict: "Misleading", summary: "Quantum computers do create superpositions of many possibilities, but a measurement returns only one result. The art of quantum algorithms is to use interference so that the right answer becomes likely, which is not the same as trying everything at once.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The picture of trying every answer at once appears in popular science, in company explanations, and even in some textbooks written for general readers. It is a tempting summary of two true facts: a register of n qubits can be in a superposition of all 2 to the n bit strings, and a quantum operation acts on every component of the superposition simultaneously. From there it seems natural to say that the computer evaluates all possibilities in parallel and picks the best.",
          "The trouble is the last step. A quantum computer has no way to pick the best answer from the superposition, because when you measure the qubits you get a single bit string at random, with probabilities given by the squares of the amplitudes. The parallelism is real, but the output is not a list of all results. Understanding this gap is the key to understanding quantum algorithms.",
        ] },
      { heading: "What actually happens", paragraphs: [
          "The correct description involves amplitudes, numbers that can be positive, negative, or complex. A quantum algorithm prepares a superposition, applies operations that change the amplitudes, and finally measures. The probability of each outcome is the squared size of its amplitude. If you simply prepare a superposition of all answers and measure, you get a random answer, no better than guessing. To get a useful result, the algorithm must arrange that the amplitudes of wrong answers cancel each other out through interference, while the amplitudes of right answers add up.",
          "Grover's algorithm shows how this works. It starts with an equal superposition of N possibilities and repeatedly applies two operations: one that flips the sign of the amplitude of the correct answer, and one that reflects all amplitudes about their average. Each round increases the amplitude of the correct answer a little. After about the square root of N rounds, measuring gives the correct answer with high probability. The speedup is quadratic, not exponential, and it is proven optimal by Bennett, Bernstein, Brassard, and Vazirani, who showed that no quantum algorithm can search an unstructured list faster than about the square root of N steps. If a quantum computer simply tried everything at once, search would take one step.",
          "Shor's algorithm uses interference in a different way. It builds a superposition of values of a periodic function, uses the quantum Fourier transform to make the period appear as a peak in the amplitudes, and measures to get information about the period. The magic is in the structure of the problem, not in brute-force parallelism.",
        ] },
      { heading: "The role of many worlds", paragraphs: [
          "Some explanations say that the quantum computer performs computations in parallel universes, as David Deutsch has argued from the many-worlds interpretation. This is one interpretation of what the mathematics means, and it is not required to use or understand quantum computing. All interpretations of quantum mechanics make the same predictions for experiments, so the parallel-universe picture cannot be tested against alternatives with a quantum computer. Treating it as established fact is another form of the myth.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The word parallelism does describe something true. A single quantum operation can act on a superposition of many inputs, which Deutsch called quantum parallelism in 1985. Quantum computers can evaluate a function on a superposition of inputs in one step. But the result is entangled with the inputs in a way that does not allow you to read out all the values. The useful information is a global property of the function, such as its period or whether it is constant or balanced, and that is what algorithms such as Deutsch-Jozsa, Simon's, and Shor's extract.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth encourages unrealistic expectations. If a quantum computer could try every possibility, it could solve every hard search and optimization problem quickly, including problems in the class NP, and many people believe this. Computer scientists believe that quantum computers cannot do so, and the best known speedups for generic search are quadratic. The myth also makes it harder to learn the subject, since students look for the parallel computation and are confused when the algorithm does not seem to do it.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "A better one-sentence explanation is that a quantum computer manipulates waves of probability so that the waves for wrong answers cancel and the waves for right answers reinforce, like noise-cancelling headphones. Scott Aaronson has used this kind of description in articles for general readers. When someone says quantum computers try every answer at once, you can reply that they set up all the answers at once, but that most of the work is arranging interference so that measuring gives the right one.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. The statement is a loose description of superposition and parallelism, but it hides the fact that you can only read out one result and that the power comes from interference. It leads to the false belief that quantum computers can solve any search problem quickly.",
        ] },
    ], facts: [
      "Measuring a quantum register gives one random bit string, with probabilities set by the amplitudes.",
      "Grover's algorithm needs about the square root of N steps, and this is the best possible for unstructured search.",
      "Interference, not brute-force parallelism, is the source of quantum speedups.",
      "Many-worlds is one interpretation of quantum mechanics, not a requirement for quantum computing.",
    ], spot: [
      "Watch for phrases such as tries all possibilities simultaneously.",
      "Ask how the answer is extracted from the superposition.",
      "Be suspicious of claims that quantum computers solve every hard problem quickly.",
      "Look for explanations that mention interference and measurement.",
    ], faq: [
      { q: "What is quantum parallelism?", a: "The ability of a quantum operation to act on all components of a superposition at once, though the result can only be read out in a limited way." },
      { q: "Why can't we read all results?", a: "Because measurement returns only one outcome, and n qubits can give at most n bits of classical information." },
      { q: "Do quantum computers use parallel universes?", a: "That is one interpretation. The mathematics and predictions are the same in other interpretations." },
    ], references: [
      "Deutsch, D. (1985). Quantum theory, the Church-Turing principle and the universal quantum computer. Proceedings of the Royal Society A, 400, 97-117.",
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Bennett, C. H., Bernstein, E., Brassard, G., & Vazirani, U. (1997). Strengths and weaknesses of quantum computing. SIAM Journal on Computing, 26, 1510-1523.",
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
      "Aaronson, S. (2008). The limits of quantum computers. Scientific American, 298(3), 62-69.",
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Paper: Rapid Solution of Problems by Quantum Computation", href: "/research/deutsch-jozsa-rapid-solution-1992" },
      { label: "Term: Quantum Interference", href: "/dictionary/quantum-interference" },
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
    ], words: 1005 },
  { slug: "qubit-both-zero-and-one-more-information", myth: "A qubit is both 0 and 1 at once, so it stores far more information than a bit", category: "computing", verdict: "Misleading", summary: "A qubit in superposition is in a single quantum state with amplitudes for 0 and 1, and measuring it gives one bit. A register of n qubits can carry at most n classical bits of readable information, even though describing its state needs 2 to the n numbers.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Explanations of qubits often begin with the line that a bit is either 0 or 1, while a qubit can be both at the same time. The slogan is memorable and roughly gestures at superposition. From there, people infer that a qubit holds two values, that two qubits hold four, and that a few hundred qubits hold more information than there are atoms in the universe. The last claim is often repeated, and it contains a real mathematical fact that is easily misread.",
          "The fact is that describing the state of n qubits in general takes 2 to the n complex numbers. With 300 qubits, that is more numbers than there are atoms in the observable universe. But describing a state is not the same as storing information that you can retrieve. The difference is the heart of the myth.",
        ] },
      { heading: "What a qubit state is", paragraphs: [
          "A qubit's state is a pair of complex numbers, called amplitudes, with squared sizes that add up to one. For example, a qubit can be in a state that gives 0 with probability 0.36 and 1 with probability 0.64, with a particular phase relation between the two amplitudes. The qubit is not both 0 and 1 in the sense of having two values. It is in one definite state, a point on the Bloch sphere, which happens to give random results when measured in the standard basis. Saying that it is both is a loose way of saying that its description involves both amplitudes.",
          "When you measure the qubit, you get a single bit, 0 or 1, and the state collapses to match. All the information in the amplitudes beyond that single bit is lost. This is why a qubit cannot be used as a storage device for two bits.",
        ] },
      { heading: "The Holevo bound", paragraphs: [
          "The precise statement is the Holevo bound, proved by Alexander Holevo in 1973. It says that n qubits can carry at most n bits of classical information that a receiver can extract, no matter how cleverly the information is encoded and measured. Entanglement can be used to do clever things, as in superdense coding, where one qubit sent from a sender who shares an entangled pair with the receiver carries two bits. But that uses a shared resource set up beforehand, and the bound still holds when it is accounted for.",
          "This means that the exponentially large state space of n qubits is not a larger memory in the ordinary sense. A quantum computer cannot store 2 to the n bits in n qubits and read them out. What it can do is manipulate the amplitudes in the exponentially large space through a sequence of operations, which is where computational power may come from, but only for algorithms that turn that manipulation into a readable answer.",
        ] },
      { heading: "Data loading and the input problem", paragraphs: [
          "There is also a limit on the input side. Getting N numbers into the amplitudes of a quantum state generally takes on the order of N operations, unless the data has structure, so loading a classical dataset can cost as much as the computation it was meant to speed up. Aaronson emphasized this in his 2015 essay on the fine print of quantum speedups, and it is a reason why many proposed applications to machine learning and big data face difficulties. The idea that a few hundred qubits can hold all the world's data is therefore doubly wrong: the data cannot be read back and cannot easily be loaded in.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The exponential size of the state space is real and important. It is the reason classical computers cannot simulate large quantum systems exactly, since storing the state of 50 qubits takes petabytes of memory. It is also the reason that quantum computers may do some things classical ones cannot. The myth is wrong in saying that this space is a usable memory, not in saying that the space is large.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth leads to confusion about what quantum computers can do with data, and to inflated claims about applications such as quantum databases, quantum cloud storage, or quantum big data. It also leads people to think that adding a qubit doubles the amount of information stored, so that a 1,000-qubit machine is unimaginably more capable than a 100-qubit one regardless of error rates. In practice, the usable power depends on how many operations can be performed reliably, which is why logical qubits and error rates matter more than raw counts.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "A good short answer is that a qubit is a point on a sphere that gives one random bit when measured, and that n qubits can give at most n bits of output. The exponentially large state space is a resource for computation, not for storage. If someone claims that quantum computers store exponentially more data, ask how the data would be read out and how it was loaded in.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. Superposition is real and the state space is exponentially large, but the information a qubit stores in the sense of what can be retrieved is limited by the Holevo bound. The slogan both 0 and 1 hides this and gives rise to wrong beliefs about storage and capacity.",
        ] },
    ], facts: [
      "Describing the state of n qubits takes 2 to the n complex amplitudes in general.",
      "The Holevo bound limits the classical information that can be extracted from n qubits to n bits.",
      "Measuring a qubit gives one bit and destroys the superposition.",
      "Loading N classical numbers into amplitudes generally takes about N operations.",
    ], spot: [
      "Be wary of the claim that a few hundred qubits can store more information than the universe has atoms.",
      "Ask how the stored information would be read out.",
      "Look for explanations that distinguish describing a state from storing readable data.",
      "Notice if capacity is quoted in qubits without mentioning error rates.",
    ], faq: [
      { q: "Is a qubit in superposition really both 0 and 1?", a: "It is in a single quantum state with amplitudes for both outcomes. Measuring it gives either 0 or 1." },
      { q: "Do two qubits store four bits?", a: "They have four amplitudes, but you can read out at most two bits from them." },
      { q: "Why can't we use the large state space as memory?", a: "Because measurement extracts only a limited amount of information, as the Holevo bound shows." },
    ], references: [
      "Holevo, A. S. (1973). Bounds for the quantity of information transmitted by a quantum communication channel. Problems of Information Transmission, 9, 177-183.",
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
      "Bennett, C. H., & Wiesner, S. J. (1992). Communication via one- and two-particle operators on Einstein-Podolsky-Rosen states. Physical Review Letters, 69, 2881-2884.",
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
      "Schumacher, B. (1995). Quantum coding. Physical Review A, 51, 2738-2747.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
    ], links: [
      { label: "Term: Qubit", href: "/dictionary/qubit" },
      { label: "Term: Bloch Sphere", href: "/dictionary/bloch-sphere" },
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Term: Hilbert Space", href: "/dictionary/hilbert-space" },
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
    ], words: 1071 },
  { slug: "more-qubits-always-better", myth: "More qubits always means a better quantum computer", category: "computing", verdict: "Misleading", summary: "Qubit count is only one factor. Error rates, connectivity, speed, and the ability to correct errors matter as much or more, and a smaller machine with high-quality qubits can outperform a much larger noisy one.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Press coverage of quantum computing has often reduced progress to a single number, the count of qubits, in the way that classical processors were once compared by clock speed. Company announcements reinforce this by emphasizing record qubit counts, such as IBM's 1,121-qubit Condor chip in 2023 or D-Wave's annealers with thousands of qubits. Roadmaps show qubit counts rising year after year. It is natural to conclude that the machine with more qubits is the better one.",
          "The comparison is misleading because qubits are not interchangeable units. A qubit with an error rate of one percent and one with an error rate of 0.01 percent are very different resources, and a collection of poorly connected qubits is much less useful than a smaller collection that can all interact. The number alone says little about what a machine can compute.",
        ] },
      { heading: "What actually determines capability", paragraphs: [
          "Several factors determine what a quantum computer can do. Gate fidelity, the accuracy of two-qubit operations, sets how many operations can be performed before the result is dominated by noise. With error rates of about 0.5 percent, a circuit of 200 two-qubit gates succeeds only about a third of the time, so adding qubits that run at that quality does not allow longer computations. Coherence time and gate speed set how many gates fit within the time the qubits keep their state. Connectivity, the pattern of which qubits can interact directly, determines how many extra operations are needed to bring distant qubits together. Measurement and reset quality matter for error correction.",
          "Benchmarks try to capture these together. IBM introduced quantum volume in 2017 and described it with Cross and coauthors in 2019. It measures the largest random square circuit that a machine can run successfully, which depends on the number of qubits, the error rates, and the connectivity. Quantinuum's trapped-ion systems reached a quantum volume above 33 million, with far fewer qubits than IBM's largest chips, because their qubits have lower errors and full connectivity. IonQ's algorithmic qubits metric and application-oriented benchmarks pursue the same idea.",
          "IBM itself illustrates the point. In 2023 it announced the 1,121-qubit Condor processor and the 133-qubit Heron processor on the same day, and said that Heron, with fewer qubits but better quality and tunable couplers, was the more important step, and its roadmap shifted from qubit counts to quality and error correction. Google's 105-qubit Willow chip, with high coherence and lower errors, produced the below-threshold error correction result of 2024, which no larger but noisier processor had shown.",
        ] },
      { heading: "A simple example with numbers", paragraphs: [
          "Suppose machine A has 1,000 qubits with a two-qubit error rate of 1 percent, and machine B has 100 qubits with an error rate of 0.1 percent. A circuit with 1,000 two-qubit gates succeeds on machine B with probability about 37 percent, since the chance that no error occurs is roughly the exponential of minus one. On machine A, the same circuit has a success probability near the exponential of minus ten, which is about 0.005 percent, effectively zero. Machine A has ten times the qubits but cannot run the circuit at all, while machine B can, with enough repetitions. This kind of arithmetic is why careful readers always ask for error rates.",
        ] },
      { heading: "Logical qubits are the real unit", paragraphs: [
          "For useful algorithms the relevant number is logical qubits, error-corrected qubits made from many physical ones. The overhead depends on the physical error rate and the code. A machine with a million physical qubits at an error rate of 0.1 percent might provide a thousand logical qubits, while the same machine at one percent could provide none, because the error rate is above the threshold of the code. This is why roadmaps from IBM, Google, and Quantinuum now speak of logical qubits and logical error rates, and why a claim of a large number of physical qubits is only the start of the story.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Qubit count does matter. Some problems need many qubits regardless of quality, and a machine with too few cannot run them at all. Simulating large systems, running error-correcting codes with large distance, and factoring large numbers all need large qubit counts in addition to good quality. For error-corrected machines, the number of physical qubits determines how many logical qubits you can have. The myth is wrong in saying that more is always better, not in saying that more can help.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth distorts investment and expectations. Companies that chase headline qubit numbers may neglect quality, and customers may buy systems that cannot run their workloads. Media comparisons of national programs that count qubits can mislead. Understanding the multiple dimensions helps readers evaluate claims and compare platforms, such as neutral atoms with many qubits and slower gates against ions with fewer qubits and higher fidelity.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask for the error rates, not just the count. Ask what the machine can actually do: the largest circuit it can run, the quantum volume or application benchmark result, and the number and quality of logical qubits. Compare platforms along several axes: qubit number, two-qubit error rate, connectivity, gate speed, and measurement quality. A short rule is to treat the qubit count as the size of the canvas, and the error rate as the quality of the paint.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. More qubits can help, but only when they are of high quality and well connected. A smaller machine with low error rates can outperform a larger noisy one, and the field's focus has shifted from physical qubit counts to logical qubits and error rates.",
        ] },
    ], facts: [
      "IBM's 133-qubit Heron was presented as more important than its 1,121-qubit Condor because of its quality.",
      "Quantinuum's trapped-ion systems reached a quantum volume above 33 million with far fewer qubits than the largest superconducting chips.",
      "At a two-qubit error rate of 0.5 percent, a 200-gate circuit succeeds only about a third of the time.",
      "Roadmaps now emphasize logical qubits and logical error rates.",
    ], spot: [
      "Be wary of comparisons based only on qubit counts.",
      "Ask for two-qubit gate fidelity, connectivity, and a benchmark result.",
      "Check whether the qubits are physical or logical.",
      "Look at what the machine has actually computed, not just its size.",
    ], faq: [
      { q: "What is quantum volume?", a: "A benchmark that measures the largest random square circuit a quantum computer can run successfully, combining qubit number, error rates, and connectivity." },
      { q: "Is a 1,000-qubit machine better than a 100-qubit one?", a: "Not necessarily. It depends on error rates, connectivity, and what you want to compute." },
      { q: "What matters more, qubits or errors?", a: "Both matter, but error rates usually limit what can be done long before qubit counts do." },
    ], references: [
      "Cross, A. W., et al. (2019). Validating quantum computers using randomized model circuits. Physical Review A, 100, 032328.",
      "DiVincenzo, D. P. (2000). The physical implementation of quantum computation. Fortschritte der Physik, 48, 771-783.",
      "IBM (2023). IBM debuts next-generation quantum processor and IBM Quantum System Two. IBM press release, 4 December 2023.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Lubinski, T., et al. (2023). Application-oriented performance benchmarks for quantum computing. IEEE Transactions on Quantum Engineering, 4, 3100332.",
    ], links: [
      { label: "Paper: Validating Quantum Computers Using Randomized Model Circuits", href: "/research/cross-quantum-volume-2019" },
      { label: "Paper: The Physical Implementation of Quantum Computation", href: "/research/divincenzo-physical-implementation-2000" },
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Term: Quantum Volume", href: "/dictionary/quantum-volume" },
      { label: "Term: Algorithmic Qubits", href: "/dictionary/algorithmic-qubits" },
      { label: "Term: Gate Fidelity", href: "/dictionary/gate-fidelity" },
    ], words: 1104 },
  { slug: "quantum-will-replace-classical-computers", myth: "Quantum computers will replace classical computers", category: "computing", verdict: "False", summary: "Quantum computers will be specialized accelerators used alongside classical machines. Most computing tasks gain nothing from quantum hardware, and the future is a hybrid of classical processors, GPUs, and quantum processors.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth borrows from the story of technological replacement: vacuum tubes gave way to transistors, mainframes to personal computers, and so people assume that quantum computers are the next generation that will make older machines obsolete. Headlines about quantum computers rendering supercomputers useless reinforce it. Some company statements speak of the quantum era as if it will succeed the digital era.",
          "The comparison fails because quantum computers do not compute the same things better. They are suited to a narrow set of problems. For most of what computers do, such as running operating systems, databases, web servers, and spreadsheets, there is no known way to benefit from quantum mechanics.",
        ] },
      { heading: "What the science says", paragraphs: [
          "Quantum algorithms offer speedups for a small number of problem types, as discussed in the myths on speed and parallelism. Beyond that, the economics and engineering matter. A quantum computer requires specialized hardware, often cryogenic or vacuum systems and precise control, and classical computers are needed to control it, run error-correcting decoders in real time, and process the results. Every quantum computer is therefore also a classical computer, and most real workloads, such as chemistry simulations or optimization, combine classical and quantum steps.",
          "The direction of the industry confirms the hybrid picture. IBM describes quantum-centric supercomputing, in which quantum processors work with classical high-performance computers, and it demonstrated a chemistry workflow with RIKEN's Fugaku supercomputer in 2025. NVIDIA has built software and hardware links to connect GPUs and quantum processors at microsecond latency. Supercomputing centers in Japan, Germany, the United States, and elsewhere install quantum machines next to classical clusters. Humble and coauthors described this accelerator model in 2021, in which quantum processors are called by classical programs for specific kernels, as GPUs are.",
          "The history of computing offers analogies. Graphics processors did not replace central processors; they were added for tasks where parallel arithmetic helps. Tensor accelerators for machine learning were added in turn. Quantum processors are likely to follow the same pattern, adding a new kind of accelerator for problems where they help.",
        ] },
      { heading: "Economic and practical limits", paragraphs: [
          "A quantum computer is expensive to build and run. Current systems cost millions to tens of millions of dollars and use tens of kilowatts, mainly for cooling and control. Error-corrected machines will need many more components. Unless a task offers a large speedup, running it on a quantum machine costs more than running it on a classical one. The cost of loading data into quantum states can also erase the benefit for data-heavy tasks. For these reasons, classical computing will remain dominant by volume for as far ahead as one can reasonably forecast.",
        ] },
      { heading: "What a realistic future looks like", paragraphs: [
          "A realistic picture of the 2030s is a data center that contains racks of CPUs and GPUs, and next to them a quantum module, perhaps several, that handles specific jobs submitted by classical programs. A chemist's workflow would run most of the analysis on classical hardware, send a carefully prepared subproblem to the quantum processor, and use the result to refine a classical model. A bank's security team would run post-quantum cryptography on ordinary servers. A navigation system might carry a quantum sensor that feeds data into a conventional computer.",
          "In none of these cases does the quantum device replace the classical machine. It extends it. The most useful mental model is that quantum computing adds a new tool to the toolbox. Toolboxes grow, and older tools remain, as hammers did not vanish when power drills arrived. Seen this way, the future of computing is plural, and the skill that will be valuable is knowing which tool fits which problem.",
          "Educators and managers can use this picture to plan. A computer science student who learns quantum ideas on top of strong classical foundations will be well placed, and a company that treats quantum as an experiment within its existing computing strategy will avoid both hype and neglect.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "In some domains, quantum computers may displace classical methods. Cryptanalysis with Shor's algorithm would make current public-key cryptography obsolete, which is why the world is migrating to post-quantum algorithms. Simulation of quantum materials and chemistry may move partly to quantum computers if they achieve advantage. In those niches, quantum may replace classical methods for particular tasks. But that is replacement of a method, not of the computer.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth shapes careers and investment. Students may avoid learning classical computing skills because they think quantum will take over, which is a mistake, since classical engineering skills are needed for quantum systems and will remain in demand. Companies may delay decisions or overinvest in quantum, and governments may misjudge the relevance of quantum for their economies. Understanding the hybrid future leads to more balanced plans.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "A helpful analogy is that quantum computers will be like specialized laboratory instruments or accelerators, sitting in data centers and accessed through the cloud, not like the next generation of the laptop. When you hear that quantum will replace classical, ask for a specific task and a specific algorithm. If there is none, the claim is rhetoric. If there is one, ask what fraction of the overall workload that task represents.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computers will complement, not replace, classical computers. They will be used for a few classes of problems, and classical machines will continue to do most computing, including the control and processing that quantum machines depend on.",
        ] },
    ], facts: [
      "Every quantum computer relies on classical computers for control, decoding, and data processing.",
      "IBM and RIKEN demonstrated a quantum-centric supercomputing workflow with the Fugaku supercomputer in 2025.",
      "Current quantum systems cost millions to tens of millions of dollars and draw tens of kilowatts.",
      "Quantum processors are expected to work as accelerators, like GPUs.",
    ], spot: [
      "Look for claims that quantum will make classical computing obsolete.",
      "Ask which specific task would move to quantum and why.",
      "Check whether the claim considers the cost and data-loading overhead.",
      "Notice if hybrid workflows are ignored.",
    ], faq: [
      { q: "Will there be quantum laptops?", a: "No. Quantum computers need specialized hardware and are expected to be accessed through the cloud or HPC centers." },
      { q: "Will GPUs become obsolete?", a: "No. GPUs are central to AI and graphics, and quantum computers are not expected to replace them." },
      { q: "Which tasks might move to quantum computers?", a: "Cryptanalysis, simulation of quantum systems, and a few structured problems." },
    ], references: [
      "Humble, T. S., et al. (2021). Quantum computers for high-performance computing. IEEE Micro, 41(5), 15-23.",
      "Alexeev, Y., et al. (2021). Quantum computer systems for scientific discovery. PRX Quantum, 2, 017001.",
      "Robledo-Moreno, J., et al. (2025). Chemistry beyond the scale of exact diagonalization on a quantum-centric supercomputer. Science Advances, 11, eadu9991.",
      "Dalzell, A. M., et al. (2023). Quantum algorithms: A survey of applications and end-to-end complexities. arXiv:2310.03011.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "NVIDIA (2025). NVQLink announcement. NVIDIA press release, October 2025.",
    ], links: [
      { label: "Term: Hybrid Quantum-Classical Computing", href: "/dictionary/hybrid-quantum-classical" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Industry: Quantum Computing, AI, and Data Centers", href: "/industries/artificial-intelligence-data-centers" },
      { label: "Paper: Focus Beyond Quadratic Speedups for Error-Corrected Quantum Advantage", href: "/research/babbush-beyond-quadratic-speedups-2021" },
    ], words: 1057 },
  { slug: "quantum-solves-np-hard-instantly", myth: "Quantum computers can solve any hard problem instantly", category: "computing", verdict: "False", summary: "Quantum computers are not believed to solve the hardest problems, the NP-hard ones, in polynomial time. The best known generic speedup is quadratic, and even that is hard to exploit in practice.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth appears wherever quantum computers are described as exploring all possibilities at once. If that were true, then problems whose difficulty comes from having too many possibilities to check, such as scheduling, route planning, and puzzles like the traveling salesman problem, would melt away. Popular articles often promise exactly this, and industry presentations list logistics, finance, and drug discovery as problems that quantum computers will solve instantly.",
          "Behind the myth is a real set of problems. Computer scientists call a problem NP-complete or NP-hard if it is at least as hard as every problem whose solutions can be checked quickly, and many practical optimization tasks are of this kind. No one has found an efficient classical algorithm for them, and most experts believe none exists. The natural question is whether quantum computers change that. The answer, as far as anyone knows, is no.",
        ] },
      { heading: "What the evidence says", paragraphs: [
          "There is strong evidence that quantum computers cannot solve NP-complete problems in polynomial time. The oracle results of Bennett, Bernstein, Brassard, and Vazirani in 1997 show that, relative to a black box for the problem, any quantum algorithm needs on the order of the square root of N queries to find a solution among N possibilities, so exponential search spaces stay exponential. Scott Aaronson summarized the situation in his 2005 paper NP-complete problems and physical reality, arguing that it is reasonable to conjecture that NP-complete problems are not efficiently solvable by any physical process, including quantum computers, much as the impossibility of perpetual motion machines is taken as a principle.",
          "The known quantum speedups are for special problems. Factoring and discrete logarithms are believed not to be NP-complete, which is why Shor's algorithm does not imply that quantum computers can solve NP-hard problems. Grover's algorithm provides a quadratic speedup for generic search, which turns a problem needing a trillion steps into one needing a million, a significant gain, but one that leaves exponential problems exponential: a search over 2 to the 100 possibilities would still need about 2 to the 50 steps, which is not feasible.",
          "Heuristic quantum methods, such as the quantum approximate optimization algorithm and quantum annealing, do not come with proofs of speedups, and they are compared against classical heuristics that are very effective on practical instances. A 2024 review by Abbas and coauthors concluded that clear evidence of quantum advantage for optimization is still lacking. And the overheads of error correction, as Babbush and coauthors showed, make quadratic speedups hard to realize on practical problem sizes.",
        ] },
      { heading: "Instantly is never the answer", paragraphs: [
          "Even where a quantum speedup exists, the word instantly is wrong. Quantum computations take time, including the time to prepare states, run many operations, and repeat the measurement many times to get statistics. Error-corrected machines are slow in terms of operations per second. A realistic claim of quantum advantage is that a task takes hours instead of years, not that it is instantaneous.",
        ] },
      { heading: "A worked example: the traveling salesman problem", paragraphs: [
          "Take the traveling salesman problem with 60 cities. The number of possible tours is about 60 factorial divided by 120, a number with roughly 80 digits. A brute-force search is impossible for any machine. A quantum computer using Grover-style search would reduce the number of steps to roughly the square root of that, still a number with about 40 digits, which is also impossible. In practice, classical solvers handle instances with tens of thousands of cities to near-optimality by using clever mathematics, not brute force, and so the relevant question for a quantum computer is whether it can beat those solvers, not whether it can beat brute force. For this problem there is no evidence that it can.",
          "The example shows why the claim that quantum computers will solve routing and scheduling problems instantly is not credible. A careful statement is that quantum methods might provide modest speedups or better heuristics for specific structured instances, and that this remains to be demonstrated against the best classical solvers.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computers may help with some optimization and search tasks in the sense of modest speedups or better heuristics. For specific structured problems, such as certain problems in algebra and number theory, exponential speedups are known. And simulation of quantum systems, which is hard for classical computers, is feasible for quantum ones. These are real benefits, but they do not amount to solving hard problems in general.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Believing the myth leads to bad business decisions and to misplaced fears. Some people worry that quantum computers will break every kind of security or solve every puzzle, and some companies invest in quantum optimization expecting dramatic savings. Public understanding is also harmed: if a field is said to be able to do anything, the promise cannot be met, and disappointment may follow. In cryptography, the myth is a reason that people think symmetric encryption and hash functions are also broken, when they are only modestly weakened.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that quantum computers are strong on certain structured problems and give at most a square-root speedup on generic search. Ask whether the problem in question has a known quantum algorithm and what the speedup is. If someone claims that a quantum computer will solve an NP-hard problem quickly, ask them for the algorithm and the complexity analysis. If they cannot provide it, the claim is speculation.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. No evidence suggests that quantum computers can solve NP-hard problems efficiently, and strong theoretical evidence suggests they cannot. The best known generic speedup is quadratic, and the practical benefit is limited.",
        ] },
    ], facts: [
      "Quantum search of N possibilities needs about the square root of N steps at best, and this is proven optimal in the oracle model.",
      "Factoring is not known to be NP-complete, so Shor's algorithm does not solve NP-hard problems.",
      "Aaronson argued in 2005 that NP-complete problems are probably intractable for any physical computer.",
      "A search over 2 to the 100 possibilities would still need about 2 to the 50 quantum steps.",
    ], spot: [
      "Watch for claims that quantum computers will solve the traveling salesman problem or all optimization quickly.",
      "Ask for the algorithm and the proven or measured speedup.",
      "Check if the claim confuses factoring with NP-hard problems.",
      "Be wary of the word instantly in descriptions of quantum computation.",
    ], faq: [
      { q: "Can quantum computers solve NP-complete problems?", a: "No efficient quantum algorithm is known, and evidence suggests that none exists." },
      { q: "Why does Shor's algorithm not break NP-hardness?", a: "Factoring is believed to be easier than NP-complete problems and has special algebraic structure." },
      { q: "Will quantum computers improve logistics?", a: "Possibly with modest speedups or better heuristics, but advantage over strong classical solvers has not been shown." },
    ], references: [
      "Bennett, C. H., Bernstein, E., Brassard, G., & Vazirani, U. (1997). Strengths and weaknesses of quantum computing. SIAM Journal on Computing, 26, 1510-1523.",
      "Aaronson, S. (2005). NP-complete problems and physical reality. ACM SIGACT News, 36(1), 30-52.",
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Abbas, A., et al. (2024). Challenges and opportunities in quantum optimization. Nature Reviews Physics, 6, 718-735.",
      "Babbush, R., et al. (2021). Focus beyond quadratic speedups for error-corrected quantum advantage. PRX Quantum, 2, 010103.",
      "Montanaro, A. (2016). Quantum algorithms: an overview. npj Quantum Information, 2, 15023.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Paper: Focus Beyond Quadratic Speedups for Error-Corrected Quantum Advantage", href: "/research/babbush-beyond-quadratic-speedups-2021" },
      { label: "Term: BQP Complexity Class", href: "/dictionary/bqp" },
      { label: "Term: Quantum Speedup", href: "/dictionary/quantum-speedup" },
    ], words: 1107 },
  { slug: "no-real-quantum-computers-exist", myth: "Real quantum computers do not exist yet; it is all theory and simulation", category: "computing", verdict: "False", summary: "Real quantum computers exist and anyone can run programs on them through the cloud. What does not exist yet is a large, error-corrected machine that solves useful problems beyond classical reach.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth comes from a fair observation stated too strongly. Headlines have promised that quantum computers will transform industries, and yet no one can point to a quantum computer solving a customer's problem better than a classical one. Skeptics conclude that the machines are not real. A related confusion is the idea that cloud services offer only simulators.",
          "The truth is more nuanced. Physical quantum processors with tens to thousands of qubits have been built, run, and published on for years. What is missing is scale and reliability sufficient for useful work. Confusing these two statements, one about existence and one about usefulness, creates the myth.",
        ] },
      { heading: "What exists today", paragraphs: [
          "Quantum processors based on several technologies are operating. In 2016, IBM put a five-qubit superconducting processor on the cloud, and since then millions of circuits have been run on its machines. Google's Sycamore processor with 53 qubits performed a random circuit sampling experiment in 2019, and its 105-qubit Willow chip demonstrated error correction below threshold in 2024. Quantinuum's trapped-ion systems have reached quantum volumes above 33 million and have run logical-qubit experiments, IonQ, Rigetti, IQM, and others sell or operate machines, neutral-atom systems from QuEra, Pasqal, Atom Computing, and Infleqtion have arrays of hundreds to thousands of atoms, and D-Wave's annealers have thousands of qubits. Photonic devices such as Xanadu's Borealis and USTC's Jiuzhang perform boson sampling.",
          "These are physical devices, with specifications, calibration data, and published results. Their behavior can be checked against simulations for small sizes, and the results of cloud runs match the predictions of quantum mechanics, including entanglement, as shown in countless experiments. Papers in Nature and Science describe them in detail, and independent groups have tested claims.",
        ] },
      { heading: "Cloud access is access to real hardware", paragraphs: [
          "Cloud platforms such as IBM Quantum, Amazon Braket, and Azure Quantum offer simulators and real devices, and the user chooses which to run on. Jobs on real devices run in a queue, return results that include noise, and show device-specific error patterns that a perfect simulator would not. This is easily checked by running the same circuit on both: the real device gives noisy distributions. Some devices are available for free with limited time, and students use them in classes around the world.",
        ] },
      { heading: "What does not exist yet", paragraphs: [
          "What does not exist is a fault-tolerant quantum computer with hundreds or thousands of logical qubits. Current machines are noisy, and the largest error-corrected demonstrations involve a handful of reliable logical qubits or larger numbers of qubits with weaker protection. No quantum computer has yet performed a useful, commercially valuable calculation faster or better than the best classical approach, though several experiments have claimed advantage on specific tasks that are debated. The largest number factored by Shor's algorithm on a quantum computer is tiny, such as 15 or 21 in early experiments, and used shortcuts. Roadmaps place useful fault-tolerant machines in the late 2020s to 2030s.",
        ] },
      { heading: "A test you can do yourself", paragraphs: [
          "You can verify the existence of real hardware in an afternoon. Create a free account on a cloud platform, build a two-qubit circuit that creates a Bell state, and run it first on a simulator and then on a real device. The simulator will give outcomes 00 and 11 with probability one half each and nothing else. The real device will give mostly 00 and 11, with a few percent of 01 and 10, and the exact numbers will differ from run to run and from device to device. Those wrong answers are the signature of real hardware with real noise, and they are the reason that error correction is the central challenge of the field.",
          "If you then repeat the experiment on a larger number of qubits, for example a ten-qubit entangled state, you will see the fidelity fall as the circuit grows. That trend, observed by thousands of students every year, is direct evidence that these are physical devices rather than idealized simulations.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Skeptics are right that quantum computers have not yet delivered practical benefit. They are also right that many claims about timelines and applications are exaggerated. The statement that quantum computers do not exist is wrong, and the more accurate claim is that they exist at small and noisy scale, and that scaling to useful size is an open engineering challenge. Experienced researchers describe the field as in an early stage comparable to classical computing in the 1950s, when machines existed but were limited and unreliable.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth leads people to dismiss the technology, ignore the security risk, and miss opportunities for learning. If quantum computers do not exist, the cryptographic migration seems unnecessary, though the risk is about future machines and recorded data. Students may think that there is nothing to try, when they can run circuits today. And policymakers might underinvest. On the other hand, the myth is a corrective to hype, and healthy skepticism about claims is useful. The aim is calibration: the machines are real, small, and noisy, and the main milestones are ahead.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Acknowledge the valid doubt about usefulness and gently correct the claim about existence. Point to the cloud experiment above, and to published papers with device data. Then ask what else a machine of that size could do that classical computers cannot, and you will see the gap between existence and usefulness.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Real quantum computers exist and are used daily by researchers and students. The accurate statement is that useful, large-scale, error-corrected quantum computers do not yet exist.",
        ] },
    ], facts: [
      "IBM put a five-qubit processor on the cloud in 2016, and many devices are now accessible online.",
      "Google's Willow chip with 105 qubits showed error correction below threshold in 2024.",
      "Quantinuum's trapped-ion system reached a quantum volume above 33 million.",
      "No quantum computer has yet performed a commercially useful task beyond classical capability.",
    ], spot: [
      "Distinguish existence of devices from usefulness of applications.",
      "Check whether a source treats cloud access as simulators only.",
      "Look at published experiments with device data and error rates.",
      "Beware both hype and blanket dismissal.",
    ], faq: [
      { q: "Can I run a program on a real quantum computer?", a: "Yes. Several providers offer free or low-cost access to real devices through the cloud." },
      { q: "Why do quantum computers give noisy results?", a: "Because qubits are fragile and gates are imperfect. Error correction aims to fix this." },
      { q: "When will useful quantum computers exist?", a: "Roadmaps point to the late 2020s and 2030s, with substantial uncertainty." },
    ], references: [
      "IBM (2016). IBM makes quantum computing available on IBM Cloud to accelerate innovation. IBM press release, 3 May 2016.",
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505-510.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Bluvstein, D., et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature, 626, 58-65.",
      "King, A. D., et al. (2025). Beyond-classical computation in quantum simulation. Science, 388, 199-204.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
      { label: "Hardware: IBM Heron (r1, r2, and r3)", href: "/hardware/ibm-heron" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
    ], words: 1067 },
  { slug: "quantum-computing-is-new", myth: "Quantum computing is a brand-new invention", category: "computing", verdict: "False", summary: "The ideas behind quantum computing are more than forty years old, built on quantum physics from the 1920s. What is new is the engineering, which has advanced from single-qubit experiments in the 1990s to machines with thousands of qubits.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum computing entered public attention in the late 2010s and 2020s, through headlines about supremacy claims, big investments, and startups. For many people, that is the first they heard of it, and it seems like a recent technology. Company marketing about the quantum era reinforces the impression of novelty.",
          "In fact, the idea has a long history. It grew from quantum mechanics, developed between 1900 and the 1930s, and from information theory and computer science of the mid-twentieth century. The first proposals for quantum computers appeared around 1980, and the first quantum algorithms in the early 1990s.",
        ] },
      { heading: "A brief history", paragraphs: [
          "Max Planck introduced the quantum of energy in 1900, and Einstein, Bohr, Heisenberg, Schrödinger, and Dirac developed quantum mechanics in the 1920s. In 1935 Einstein, Podolsky, and Rosen pointed out the strange correlations of entangled states, and in 1964 John Bell showed how to test them, which Aspect and others did in the 1980s. Rolf Landauer and Charles Bennett studied the physics of computation and reversible computing in the 1960s and 1970s. In 1980, Paul Benioff described a quantum mechanical model of a Turing machine, and Yuri Manin raised the idea of quantum automata.",
          "Richard Feynman's talk in 1981 at the MIT conference on the physics of computation, published in 1982, argued that simulating quantum systems requires quantum computers. David Deutsch defined the universal quantum computer in 1985 and quantum circuits in 1989. The first algorithms came with Deutsch and Jozsa in 1992 and Simon in 1994, and Peter Shor's factoring algorithm in 1994 drew wide attention. Grover's search followed in 1996, and the first quantum error-correcting codes, by Shor and Steane, in 1995 and 1996.",
          "Experiments followed quickly. Cirac and Zoller proposed trapped-ion quantum computing in 1995, and Monroe and Wineland's group at NIST demonstrated a quantum logic gate the same year. Nuclear magnetic resonance experiments ran small algorithms in 1998, a superconducting qubit was demonstrated by Nakamura and colleagues in 1999, and IBM factored 15 with a seven-qubit NMR computer in 2001. The transmon, the qubit used in most superconducting machines, was invented in 2007. IBM put a quantum computer on the cloud in 2016, Google claimed supremacy in 2019, and the first below-threshold error correction was shown in 2024. David Wineland and Serge Haroche received the Nobel Prize in 2012 for manipulating single quantum systems, and Clarke, Devoret, and Martinis received it in 2025 for work underlying superconducting qubits.",
        ] },
      { heading: "What is actually new", paragraphs: [
          "What is new is the scale and the engineering. Early experiments used one to a few qubits for microseconds. Today there are processors with hundreds to thousands of qubits, coherence times that are thousands of times longer, gate errors lower by orders of magnitude, and demonstrations of error correction that improve with code size. There is also a new commercial ecosystem, with cloud platforms, software kits, startups, and government programs. And the recognition of cryptographic risk has led to standardized post-quantum cryptography, which is new in this decade. The field is therefore decades old in ideas and young in engineering.",
        ] },
      { heading: "Why it took so long", paragraphs: [
          "The long gap between ideas and machines has clear reasons. Quantum states are fragile, and the early theory did not say how to protect them. The discovery of quantum error correction in 1995 and 1996, and of the threshold theorem in 1997 and 1998, showed that large quantum computations are possible in principle, and from then on the task was an engineering one: to build qubits with low enough error rates. Each platform needed years of materials science, laser and microwave engineering, and cryogenic technology, and each advance in coherence, from the first Cooper pair box in 1999 to the transmon in 2007 to tantalum-based circuits in 2021, opened the next stage.",
          "A comparison with classical computing is useful. The transistor was invented in 1947, the integrated circuit in 1958, and the microprocessor in 1971, and personal computers became common in the 1980s, four decades after the transistor. By that clock, quantum computing, whose first gate was demonstrated in 1995, is still early. This is a reason for patience with timelines, and a reason to credit the steady progress that has been made.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "For the general public and for industry, quantum computing is indeed new, and the pace of change has accelerated in the last ten years. A person who first encountered it in 2020 is right that it is recent for them. The myth is in saying that the invention is recent, which obscures how much groundwork stands behind it. Understanding the history also helps set expectations: classical computing took several decades from the first transistors to personal computers, and quantum computing may take similar time.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Thinking that the field is brand new can lead to unrealistic expectations of rapid maturity, or to ignoring the lessons of history. The long timeline suggests patience. It also shows that progress has been steady, with periods of fast advance after key ideas such as error correction and the transmon. Recognizing the history credits the researchers who laid the foundations, many of whom, such as Bennett, Brassard, Deutsch, Shor, and Kitaev, are still active.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Point to a few dates: 1981 for Feynman's proposal, 1994 for Shor's algorithm, 1995 for the first logic gate, 2016 for the first cloud access, and 2024 for below-threshold error correction. The timeline page on this site lists these events with references. When someone says that quantum computing is new, you can say that it is a forty-year-old idea that is only now reaching the engineering stage.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. The ideas are more than four decades old and rest on a century of quantum physics. Only the engineering scale and the commercial ecosystem are recent.",
        ] },
    ], facts: [
      "Feynman proposed quantum simulators in 1981, and Deutsch defined the universal quantum computer in 1985.",
      "Shor's algorithm dates from 1994, and the first quantum logic gate was demonstrated in 1995.",
      "IBM put a quantum computer on the cloud in 2016.",
      "The 2012 and 2025 Nobel Prizes in Physics recognized work underlying quantum computing hardware.",
    ], spot: [
      "Look for claims that quantum computing began in the 2010s or 2020s.",
      "Check dates against the history of Feynman, Deutsch, and Shor.",
      "Distinguish ideas from engineering milestones.",
      "Be wary of narratives that skip the decades of foundational work.",
    ], faq: [
      { q: "Who invented quantum computing?", a: "Many people contributed. Benioff, Feynman, and Deutsch laid the foundations, and Shor's algorithm showed its importance." },
      { q: "When was the first quantum computer built?", a: "Small devices, such as NMR and ion-trap systems, ran algorithms in the 1990s. Cloud-accessible machines came in 2016." },
      { q: "Why does it seem so recent?", a: "Because public attention and investment grew sharply after about 2015." },
    ], references: [
      "Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics, 21, 467-488.",
      "Deutsch, D. (1985). Quantum theory, the Church-Turing principle and the universal quantum computer. Proceedings of the Royal Society A, 400, 97-117.",
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
      "Cirac, J. I., & Zoller, P. (1995). Quantum computations with cold trapped ions. Physical Review Letters, 74, 4091-4094.",
      "Monroe, C., Meekhof, D. M., King, B. E., Itano, W. M., & Wineland, D. J. (1995). Demonstration of a fundamental quantum logic gate. Physical Review Letters, 75, 4714-4717.",
      "Benioff, P. (1980). The computer as a physical system. Journal of Statistical Physics, 22, 563-591.",
    ], links: [
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Paper: Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer", href: "/research/deutsch-universal-quantum-computer-1985" },
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Paper: Quantum Computations with Cold Trapped Ions", href: "/research/cirac-zoller-trapped-ions-1995" },
    ], words: 1126 },
  { slug: "quantum-computing-requires-phd", myth: "You need a PhD in physics to understand or work in quantum computing", category: "computing", verdict: "False", summary: "The core ideas of quantum computing need only linear algebra and some probability, and the industry employs many engineers, software developers, and technicians without physics doctorates. A PhD is useful for research roles but not required for most careers.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum mechanics has a reputation for being impossibly hard, helped by quotes such as the remark attributed to Feynman that nobody understands it. Popular accounts stress mysterious ideas such as superposition and entanglement and rarely show the mathematics, which suggests that only physicists can master the subject. Many job advertisements for quantum research scientists do list a doctorate, which reinforces the impression that the whole field is gated by one.",
          "The impression is partly correct for research positions in theory and experimental physics, where a PhD is the norm. But it overlooks how the field has grown and how much of its work is engineering, software, and operations.",
        ] },
      { heading: "The mathematics is accessible", paragraphs: [
          "Quantum computing, as a computational model, uses linear algebra: vectors, matrices, and complex numbers, together with elementary probability. The state of a qubit is a vector, gates are matrices, and measurement gives probabilities. A student with a first-year university course in linear algebra can follow the basic algorithms of Deutsch-Jozsa, Grover, and the quantum Fourier transform. Standard textbooks, such as Nielsen and Chuang, introduce quantum computation starting from these prerequisites, and many universities teach it to undergraduates in computer science and engineering. Free online courses and tutorials from IBM, Microsoft, and others are accessible to beginners with programming experience.",
          "The physics of building hardware, such as superconducting circuits and trapped ions, requires more background. But a person can understand and program quantum computers at the level of circuits without knowing the details of how qubits are made, just as one can program classical computers without knowing semiconductor physics.",
        ] },
      { heading: "What the industry actually needs", paragraphs: [
          "Surveys of the quantum industry show a wide range of roles. Hughes and coauthors interviewed employers in 2022 and found that most positions do not require a PhD in physics, and that companies seek engineers in electrical, mechanical, and software disciplines, as well as technicians and operations staff. Fox, Zwickl, and Lewandowski argued in 2020 that educational programs should prepare a broader workforce, not only researchers. Roles include cryogenic engineering, control electronics, microwave and photonics design, fabrication and process engineering, software development for compilers and decoders, cloud platform engineering, and cybersecurity work on post-quantum cryptography migration, which is among the fastest-growing areas.",
          "There are also roles in business development, sales, project management, policy, and education that require a good understanding of the technology but not a physics degree. Many people enter from classical computing, electrical engineering, mathematics, or chemistry.",
        ] },
      { heading: "A learning path that works", paragraphs: [
          "A practical path for a beginner takes about six to twelve months of part-time study. Start with a refresher on linear algebra, covering vectors, matrices, eigenvalues, and complex numbers, and learn enough Python to use arrays and plotting. Then work through the first chapters of a quantum computing textbook or a free online course, and write small circuits with a software kit such as Qiskit, Cirq, or PennyLane: a Bell state, the Deutsch-Jozsa algorithm, and Grover search on a few qubits. Run them on simulators and on real cloud hardware to see the effect of noise.",
          "After that, choose a direction. For algorithms and applications, study phase estimation, variational algorithms, and resource estimates for chemistry. For hardware, read review articles on superconducting qubits and ion traps. For security, read the NIST post-quantum standards and learn how key exchange and signatures work in practice. At each stage, build something small and publish it in a public repository, because a visible project is often the best credential in a field with few formal paths.",
        ] },
      { heading: "Where a PhD helps", paragraphs: [
          "A doctorate is the usual path for research scientist positions, such as designing new qubits, developing error-correcting codes, or inventing algorithms. Academic careers require it. In these roles, deep understanding of quantum mechanics, many-body physics, or theoretical computer science is needed. The point is that these are a subset of jobs, not the entire field.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Deep expertise in quantum computing takes years of study, and the field has hard open problems that need advanced training. Reading research papers on error correction or topological codes needs substantial mathematical maturity. So it is true that some parts of the field are hard. But the entry points are many, and the path from curiosity to contribution does not always run through a doctorate.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth discourages capable people from trying. Students may assume that the field is closed to them, and mid-career engineers may not consider a transition. It also contributes to the shortage of talent that the industry reports. For countries building quantum programs, such as India, a broader view of who can contribute helps to build the workforce. Providing clear learning paths, as national missions and companies increasingly do, can open the field.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Share the learning path above. Point out that companies list many roles that do not require a doctorate, and that cloud access lets anyone run experiments. If someone says that quantum computing is only for physicists, ask which part they mean: building the hardware, designing algorithms, or using the tools, since the answers differ.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. A PhD is required for many research roles but not for understanding the basics or for most jobs in the industry. The core ideas are accessible with undergraduate mathematics, and the field needs engineers and developers as much as physicists.",
        ] },
    ], facts: [
      "The basic quantum algorithms can be understood with linear algebra and probability.",
      "Industry surveys find that most quantum roles do not require a physics PhD.",
      "Free cloud access lets anyone run circuits on real quantum hardware.",
      "Post-quantum cryptography engineering is among the fastest-growing quantum-related jobs.",
    ], spot: [
      "Be skeptical of claims that quantum computing is only for physicists.",
      "Look at job descriptions, which often list engineering and software roles.",
      "Check whether the speaker distinguishes research from engineering roles.",
      "Notice if the claim discourages beginners from trying.",
    ], faq: [
      { q: "What should I learn first?", a: "Linear algebra, basic probability, and Python, then a quantum computing textbook or course." },
      { q: "Can I learn quantum computing without a physics background?", a: "Yes. The computational model needs mathematics, not detailed physics." },
      { q: "Which jobs do not need a doctorate?", a: "Many engineering, software, operations, and security roles." },
    ], references: [
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
      "Hughes, C., et al. (2022). Assessing the needs of the quantum industry. IEEE Transactions on Education, 65, 592-601.",
      "Fox, M. F. J., Zwickl, B. M., & Lewandowski, H. J. (2020). Preparing for the quantum revolution: What is the role of higher education? Physical Review Physics Education Research, 16, 020131.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
    ], links: [
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Term: Quantum Circuit", href: "/dictionary/quantum-circuit" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Forecast: Quantum Education and the Workforce", href: "/future/quantum-education-workforce-future" },
    ], words: 1027 },
  { slug: "all-quantum-computers-same", myth: "All quantum computers work the same way and use the same kind of qubit", category: "industry", verdict: "False", summary: "Quantum computers are built from very different technologies: superconducting circuits, trapped ions, neutral atoms, photons, electron spins, and more. Each has different strengths, speeds, and engineering challenges, and no platform has yet won.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Popular images of quantum computers show a golden chandelier of cables in a cryogenic cooler, which is the look of IBM and Google's superconducting machines. Media stories then describe qubits and gates as if every machine were built this way. Introductory courses also treat a qubit as an abstract two-level system, which hides the physical differences.",
          "But an abstract qubit can be realized in many physical systems, which is why the field has several competing platforms. The choice affects everything from operating temperature to gate speed, error rates, connectivity, and how machines scale.",
        ] },
      { heading: "The main platforms", paragraphs: [
          "Superconducting circuits, used by IBM, Google, Rigetti, and IQM, make qubits from metal and Josephson junctions on chips cooled to about 10 to 20 millikelvin. They are fast, with gates of tens of nanoseconds, and use chip fabrication methods, but have shorter coherence than atoms and need extensive cryogenics and wiring. Trapped ions, used by Quantinuum, IonQ, and Alpine Quantum Technologies, hold charged atoms in electromagnetic traps, with the best gate fidelities and full connectivity within a trap, but slower gates, in microseconds to hundreds of microseconds.",
          "Neutral atoms, used by QuEra, Pasqal, Atom Computing, and Infleqtion, trap uncharged atoms with laser tweezers and use Rydberg interactions for gates. They scale to thousands of atoms and allow flexible rearrangement, but cycle times are in milliseconds. Photonic quantum computers, from PsiQuantum, Xanadu, Quandela, and others, use particles of light on chips and can work at higher temperatures and over fiber, but face photon loss and difficult interactions. Silicon spin qubits, studied by Intel, Diraq, and Quantum Motion, store information in electron spins in transistor-like devices, aiming to use chip factories. Other approaches include nitrogen-vacancy centers in diamond, mostly for sensing and networks, topological qubits that Microsoft pursues, and bosonic qubits using cat and GKP states in cavities.",
          "Quantum annealers, such as those of D-Wave, are a different kind of machine altogether: special-purpose devices that find low-energy states of Ising problems and are not general gate-based computers.",
        ] },
      { heading: "Why the differences matter", paragraphs: [
          "The platforms differ in the axes that determine capability. Superconducting qubits are fast and manufacturable but must be kept at millikelvin temperatures. Ions are accurate and well connected but slow to scale. Atoms are numerous and flexible but slow. Photons are good for networks but hard for gates. These differences affect which error-correcting codes fit, how many physical qubits per logical qubit are needed, and what applications come first. Kjaergaard and coauthors reviewed superconducting qubits in 2020, Bruzewicz and coauthors reviewed trapped ions in 2019, Henriet and coauthors neutral atoms in 2020, and Burkard and coauthors spin qubits in 2023. DiVincenzo's criteria of 2000 provide a common checklist for comparing them.",
          "No platform has clearly won. In 2025 and 2026, results on logical qubits came from superconducting, ion, and neutral-atom machines, each with a different strength. Some researchers expect that different platforms will specialize or that hybrid systems will combine them, for example photons linking ion or superconducting modules.",
        ] },
      { heading: "A comparison in one table of words", paragraphs: [
          "A rough comparison helps. For speed, superconducting circuits lead, with gate times of tens of nanoseconds, followed by spins and photons, then ions at microseconds to hundreds of microseconds, and atoms with cycle times of milliseconds. For two-qubit accuracy, trapped ions lead at 99.9 percent and above, followed by superconducting and atom devices at roughly 99.5 to 99.9 percent. For number of qubits, neutral atoms lead with arrays of thousands, followed by superconducting chips at hundreds to over a thousand, and ions at tens to about a hundred. For operating conditions, superconducting machines need dilution refrigerators at 10 to 20 millikelvin, ions and atoms need ultra-high vacuum and lasers, and photonic machines need cooled detectors but mostly operate at higher temperatures.",
          "These are generalizations that change with each year's results, but they show why a single description cannot cover all machines, and why the best platform depends on the task: a long, deep circuit favors speed, while a high-accuracy small circuit favors ions.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "At the level of computation, all universal quantum computers can in principle run the same algorithms, because they implement the same mathematical model of qubits and gates. A circuit written for one platform can be translated to another by a compiler, with different costs. In that sense, they are equivalent in what they can compute. The myth is wrong in the physical sense and in performance.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Treating all machines as the same hides important trade-offs. Customers who choose a platform need to know whether it fits their task, whether it can scale, and what the risks are. Investors who think a result on one platform applies to another may be misled, for instance by assuming that a speed from superconducting qubits applies to atoms. And policymakers may not appreciate the diversity of supply chains that different platforms need, from dilution refrigerators to lasers.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what physical system the qubits are made of and what its speed, error rate, and operating conditions are. Look at a comparison table across platforms before drawing conclusions. When reading a news story, note which platform the claim applies to, and whether the result is specific to it.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computers use many different qubit technologies with different strengths, and the choice affects performance and scaling. They share a mathematical model, but not the physics or the engineering.",
        ] },
    ], facts: [
      "Major platforms include superconducting circuits, trapped ions, neutral atoms, photons, and silicon spins.",
      "Superconducting gates take tens of nanoseconds, ion gates microseconds to hundreds of microseconds, and atom cycles milliseconds.",
      "D-Wave's annealers are special-purpose machines, not gate-based computers.",
      "No platform has yet won the race to fault tolerance.",
    ], spot: [
      "Be wary of generalizing a result from one platform to all.",
      "Ask for the physical qubit type in any announcement.",
      "Check whether comparisons use the same metrics.",
      "Notice if cryogenic requirements are assumed for all machines.",
    ], faq: [
      { q: "Do all quantum computers need to be near absolute zero?", a: "No. Superconducting machines do, but trapped-ion, neutral-atom, and many photonic and diamond systems operate differently." },
      { q: "Which technology is best?", a: "It depends on the metric. No platform leads in every dimension." },
      { q: "Can software run on all quantum computers?", a: "Often yes, through compilers, but performance and connectivity differ." },
    ], references: [
      "DiVincenzo, D. P. (2000). The physical implementation of quantum computation. Fortschritte der Physik, 48, 771-783.",
      "Kjaergaard, M., et al. (2020). Superconducting qubits: Current state of play. Annual Review of Condensed Matter Physics, 11, 369-395.",
      "Bruzewicz, C. D., Chiaverini, J., McConnell, R., & Sage, J. M. (2019). Trapped-ion quantum computing: Progress and challenges. Applied Physics Reviews, 6, 021314.",
      "Henriet, L., et al. (2020). Quantum computing with neutral atoms. Quantum, 4, 327.",
      "Burkard, G., Ladd, T. D., Pan, A., Nichol, J. M., & Petta, J. R. (2023). Semiconductor spin qubits. Reviews of Modern Physics, 95, 025003.",
      "Slussarenko, S., & Pryde, G. J. (2019). Photonic quantum information processing: A concise review. Applied Physics Reviews, 6, 041303.",
    ], links: [
      { label: "Paper: The Physical Implementation of Quantum Computation", href: "/research/divincenzo-physical-implementation-2000" },
      { label: "Term: Superconducting Qubit", href: "/dictionary/superconducting-qubit" },
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
      { label: "Term: Neutral Atom Qubit", href: "/dictionary/neutral-atom-qubit" },
      { label: "Term: Photonic Qubit", href: "/dictionary/photonic-qubit" },
      { label: "Term: Spin Qubit", href: "/dictionary/spin-qubit" },
    ], words: 1045 },
  { slug: "entanglement-faster-than-light-messages", myth: "Entanglement lets you send messages faster than light", category: "physics", verdict: "False", summary: "Entangled particles show correlations that no local theory can explain, but those correlations cannot be used to send information. Every protocol that uses entanglement needs an ordinary signal, limited by the speed of light, to make sense of the results.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth begins with Einstein's own phrase. In a 1947 letter to Max Born he described entanglement as spooky action at a distance, and the phrase has been repeated ever since. Popular accounts describe two entangled particles as instantly influencing each other across any distance, and experiments confirming this seem to prove it. Science fiction then turns the idea into a faster-than-light radio. The picture is natural but it confuses correlation with communication.",
          "The truth is subtler. When two entangled particles are measured, their results are correlated in a way that cannot be explained by pre-agreed instructions, as John Bell proved in 1964. But each side, looking only at its own results, sees random outcomes. The correlation appears only when the two sides compare their records, and that comparison requires sending information the ordinary way.",
        ] },
      { heading: "Why no message can be sent", paragraphs: [
          "The result is called the no-communication theorem. Whatever operation or measurement the sender performs on her half of an entangled pair, the statistics of the receiver's outcomes do not change. If they did, the receiver could detect the sender's choice, and a signal would have been sent. Quantum mechanics is built so that this does not happen, which is what makes it consistent with special relativity. The argument was made precisely in the 1980 paper by Ghirardi, Rimini, and Weber, and its consequences are discussed in the review by Peres and Terno in 2004.",
          "A simple example shows the idea. Suppose Alice and Bob share many entangled pairs, and Alice decides to measure in one of two ways to encode a bit. Bob's results, seen alone, look like a random string of zeros and ones whether she measured one way or the other. Only when Alice tells him by phone or email which measurement she chose, and he sorts his results accordingly, do the correlations appear. The phone call travels at or below the speed of light, so the information is never faster than light.",
          "Experiments confirm the picture. Aspect and coauthors in 1982 used polarizers that were switched while the photons were in flight, and found Bell correlations. In 2015 groups in Delft, at NIST, and in Vienna closed the remaining loopholes, and in 2017 groups tested the correlations over distances up to 1,200 kilometers with a satellite. In all of them, individual results were random, and the correlations were revealed only after the records were compared.",
        ] },
      { heading: "Quantum teleportation and the classical channel", paragraphs: [
          "The same structure appears in quantum teleportation, proposed by Bennett and coauthors in 1993. Alice and Bob share an entangled pair, and Alice performs a joint measurement on her half and the qubit she wants to send. She then must tell Bob the result, two classical bits, so that he can apply the right correction. Until the message arrives, Bob's qubit is in a random state that carries no information about the original. This is why teleportation cannot exceed the speed of light, and why it is a communication protocol that uses entanglement together with classical communication.",
        ] },
      { heading: "What is true in the myth", paragraphs: [
          "Something does connect the entangled particles. The correlations are real, they cannot be explained by local hidden variables, and the loophole-free experiments of 2015 and the Nobel Prize of 2022 to Aspect, Clauser, and Zeilinger recognize that. Physicists still debate what this means about the nature of reality, and interpretations such as Bohmian mechanics involve nonlocal influences that cannot be used for signaling. So the idea that entanglement shows something strange about nature is correct. What is wrong is the step to a faster-than-light telephone.",
        ] },
      { heading: "Relativity and the order of events", paragraphs: [
          "There is a deeper reason why signaling is impossible. In special relativity, two events that are separated by more than light can travel between them have no absolute time order: different observers disagree about which came first. If a faster-than-light signal were possible, some observers would see the effect before the cause, and paradoxes of causality would follow. Quantum mechanics and relativity are compatible precisely because the correlations of entanglement cannot be used to send signals. Each measurement result is random for the observer who makes it, and the order in which the two measurements happen does not change the statistics.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth shapes public expectations of quantum technology. Some people believe that quantum networks will provide instant communication across the solar system, and some advertisements for quantum communication products imply near-instant connections. In reality, quantum networks use entanglement to enable secure key distribution and teleportation, and their latency is set by the speed of light and by classical signals. The myth also hides what entanglement is actually good for: security guarantees, distributed computing, and precision sensing.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "A short answer is that entanglement gives correlations, not signals. You can illustrate with a pair of gloves in two boxes: opening one box and finding the left glove tells you immediately that the other box holds the right one, but you have not sent a message. The quantum case is stranger, since the results are not predetermined, but the practical conclusion is the same: to learn anything useful you need an ordinary message.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Entanglement does not allow faster-than-light communication, and the no-communication theorem proves it within quantum mechanics. The correlations are real and strange, but they carry no usable signal without a classical channel.",
        ] },
    ], facts: [
      "Bell's theorem of 1964 shows that entangled correlations cannot be explained by local hidden variables.",
      "The no-communication theorem proves that local operations on one half of an entangled pair do not change the statistics seen on the other half.",
      "Quantum teleportation requires two classical bits to be sent for each teleported qubit.",
      "Loophole-free Bell tests were reported in 2015, and the 2022 Nobel Prize in Physics recognized work on entanglement.",
    ], spot: [
      "Watch for descriptions of entanglement as instant communication.",
      "Ask how the receiver learns anything without a classical message.",
      "Be skeptical of products that claim instant quantum messaging.",
      "Look for the distinction between correlation and signaling.",
    ], faq: [
      { q: "Did Einstein believe entanglement was real?", a: "He accepted that quantum mechanics predicts it but argued that the theory must be incomplete. Experiments since 1982 favor quantum mechanics." },
      { q: "Is quantum communication instant?", a: "No. Quantum communication uses classical channels and travels no faster than light." },
      { q: "Why do physicists still call it spooky?", a: "Because the correlations cannot be explained by local pre-existing properties, which challenges intuition." },
    ], references: [
      "Einstein, A., Podolsky, B., & Rosen, N. (1935). Can quantum-mechanical description of physical reality be considered complete? Physical Review, 47, 777-780.",
      "Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. Physics Physique Fizika, 1, 195-200.",
      "Ghirardi, G. C., Rimini, A., & Weber, T. (1980). A general argument against superluminal transmission through the quantum mechanical measurement process. Lettere al Nuovo Cimento, 27, 293-298.",
      "Peres, A., & Terno, D. R. (2004). Quantum information and relativity theory. Reviews of Modern Physics, 76, 93-123.",
      "Aspect, A., Dalibard, J., & Roger, G. (1982). Experimental test of Bell's inequalities using time-varying analyzers. Physical Review Letters, 49, 1804-1807.",
      "Hensen, B., et al. (2015). Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. Nature, 526, 682-686.",
      "Bennett, C. H., et al. (1993). Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 70, 1895-1899.",
    ], links: [
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
      { label: "Paper: Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels", href: "/research/bennett-quantum-teleportation-1993" },
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
      { label: "Term: Quantum Teleportation", href: "/dictionary/quantum-teleportation" },
    ], words: 1066 },
  { slug: "quantum-teleportation-moves-matter", myth: "Quantum teleportation transports people and objects like in science fiction", category: "physics", verdict: "False", summary: "Quantum teleportation transfers the state of one particle to another using entanglement and a classical message. No matter travels, the original state is destroyed, and the protocol cannot work faster than light.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The name teleportation comes from science fiction, and it was chosen deliberately by the authors of the 1993 paper, who said that the process is a bit like the beaming of Star Trek. Headlines about teleporting photons, atoms, or information across a city or from Earth to a satellite have made the idea sound like the first step toward teleporting objects. Some articles even speculate about teleporting people.",
          "The protocol is real and has been demonstrated many times, but it is a method of sending quantum information, not matter. The word teleportation is a metaphor, and taking it literally produces the myth.",
        ] },
      { heading: "What teleportation actually does", paragraphs: [
          "Quantum teleportation, proposed by Bennett, Brassard, Crépeau, Jozsa, Peres, and Wootters in 1993, moves an unknown quantum state from a sender to a receiver. Alice and Bob first share an entangled pair of qubits. Alice then performs a joint measurement on her half of the pair and on the qubit whose state she wants to send. The measurement destroys the state of the original qubit and gives two classical bits. She sends these bits to Bob by ordinary means, and Bob applies one of four simple operations to his half of the pair, which then ends up in the original state.",
          "Three features matter. First, no matter or energy moves from Alice to Bob; the particles stay where they are, and only the state is transferred. Second, the original state is destroyed in the measurement, so no copy is made, consistent with the no-cloning theorem. Third, the classical message is necessary, so teleportation cannot be faster than light. Without it, Bob's qubit is a random state that carries no information.",
          "What is moved is the information that defines the state, which for a single qubit is a pair of continuous numbers. The beauty of the protocol is that this continuous information is carried by two classical bits and a pre-shared entangled pair, which is far less than one would expect.",
        ] },
      { heading: "Experiments", paragraphs: [
          "Teleportation of single photon states was first demonstrated by the Innsbruck group of Bouwmeester, Zeilinger, and coauthors in 1997 and by a Rome group in 1998. Later experiments teleported states of atoms and ions, between solid-state qubits in diamond separated by three meters in 2014 by a Delft group, and over long distances with satellites, with Ren and coauthors reporting ground-to-satellite teleportation up to about 1,400 kilometers in 2017. Teleportation is also used inside quantum computers: Gottesman and Chuang showed in 1999 that logical gates can be applied by teleporting through special entangled states, and this technique is central to fault-tolerant computing and to lattice surgery.",
        ] },
      { heading: "Why people cannot be teleported", paragraphs: [
          "Teleporting a person would require measuring and transmitting the quantum state of every atom, more than 10 to the 28 atoms with an astronomically large state space, and recreating it with new atoms at the destination, while destroying the original. No known technology can measure such a state, and the protocol needs entanglement between the sender and receiver for each degree of freedom. Even for a single large molecule, teleportation has not been achieved. The largest systems teleported are single atoms, ions, photons, and small collections of them.",
          "Philosophical puzzles about identity aside, the practical obstacles are insurmountable with any foreseeable technology. The destruction of the original, if applied to a person, is another reason that the idea belongs to fiction.",
        ] },
      { heading: "What teleportation is good for", paragraphs: [
          "Teleportation is a building block of quantum networks. A quantum repeater uses it, together with entanglement swapping, to extend entanglement over long distances without sending fragile qubits through lossy fibers. It connects distant quantum computers, and in the long term may link them into a larger system. It is also used in measurement-based and fault-tolerant computing. These are real and valuable applications, though they involve sending information, not matter.",
        ] },
      { heading: "A step-by-step example", paragraphs: [
          "Here is the protocol with a concrete example. Alice holds a qubit in an unknown state, perhaps the result of a calculation. She and Bob share an entangled pair prepared earlier. Alice performs a joint measurement on her qubit and her half of the pair, which has four possible outcomes, each equally likely. She texts Bob the outcome as two bits. Bob looks at the message and applies one of four simple operations, such as flipping the qubit, to his half of the pair. After that, his qubit is exactly in the state that Alice's qubit had before, and Alice's qubit is gone, since her measurement destroyed it. At no point did Alice or Bob learn the state itself, and a copy was never made.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth creates false expectations about quantum technology, which can lead to disappointment or to exploitation by sellers of dubious products. It also obscures the actual significance of the protocol, which shows that quantum information can be moved with entanglement and classical bits, and that the no-cloning theorem is consistent with transfer of states. Explaining teleportation correctly is a good way to teach core ideas of quantum information.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that teleportation sends the information needed to reconstruct a state, not the object, and that it needs a classical message, so it is limited by the speed of light. A good analogy is a fax: the paper does not travel, but the pattern does, though with a fax you keep the original, and in quantum teleportation you do not. If someone claims to be able to teleport objects, ask for the evidence and the mechanism.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum teleportation does not move matter. It transfers a quantum state using entanglement and a classical message, destroys the original, and cannot exceed the speed of light.",
        ] },
    ], facts: [
      "The protocol was proposed in 1993 by Bennett and five coauthors.",
      "Each teleported qubit needs two classical bits and one shared entangled pair.",
      "The original qubit's state is destroyed when it is measured.",
      "A 2017 experiment teleported photon states from the ground to a satellite about 1,400 kilometers away.",
    ], spot: [
      "Watch for headlines that say objects or people have been teleported.",
      "Ask what physically moved and whether a classical message was required.",
      "Check whether the original is destroyed in the description.",
      "Be skeptical of claims about instantaneous transport.",
    ], faq: [
      { q: "Can anything be teleported faster than light?", a: "No. The classical message limits the speed to that of light." },
      { q: "Is the teleported particle the same particle?", a: "The state is transferred to another particle of the same type. Identical particles are indistinguishable, so the question is philosophical." },
      { q: "What is teleportation used for?", a: "Quantum networks, repeaters, and fault-tolerant quantum computing." },
    ], references: [
      "Bennett, C. H., Brassard, G., Crépeau, C., Jozsa, R., Peres, A., & Wootters, W. K. (1993). Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 70, 1895-1899.",
      "Bouwmeester, D., et al. (1997). Experimental quantum teleportation. Nature, 390, 575-579.",
      "Boschi, D., Branca, S., De Martini, F., Hardy, L., & Popescu, S. (1998). Experimental realization of teleporting an unknown pure quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 80, 1121-1125.",
      "Pfaff, W., et al. (2014). Unconditional quantum teleportation between distant solid-state quantum bits. Science, 345, 532-535.",
      "Ren, J.-G., et al. (2017). Ground-to-satellite quantum teleportation. Nature, 549, 70-73.",
      "Gottesman, D., & Chuang, I. L. (1999). Demonstrating the viability of universal quantum computation using teleportation and single-qubit operations. Nature, 402, 390-392.",
      "Pirandola, S., Eisert, J., Weedbrook, C., Furusawa, A., & Braunstein, S. L. (2015). Advances in quantum teleportation. Nature Photonics, 9, 641-652.",
    ], links: [
      { label: "Paper: Teleporting an Unknown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels", href: "/research/bennett-quantum-teleportation-1993" },
      { label: "Paper: Demonstrating the Viability of Universal Quantum Computation Using Teleportation and Single-Qubit Operations", href: "/research/gottesman-chuang-teleportation-gates-1999" },
      { label: "Term: Quantum Teleportation", href: "/dictionary/quantum-teleportation" },
      { label: "Term: No-Cloning Theorem", href: "/dictionary/no-cloning-theorem" },
      { label: "Term: Entanglement Swapping", href: "/dictionary/entanglement-swapping" },
    ], words: 1091 },
  { slug: "schrodingers-cat-everyday-objects", myth: "Schrödinger's cat shows that everyday objects are in two states at once until we look", category: "physics", verdict: "Misleading", summary: "Schrödinger invented the cat to show how absurd it is to apply superposition to large objects. Decoherence explains why everyday objects behave classically, and experiments show superpositions only in carefully isolated small systems.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The cat in the box is the most famous image in quantum mechanics. In popular retellings, a cat is sealed in a box with a device that may or may not kill it depending on a quantum event, and until we open the box the cat is both alive and dead. The story is repeated to make the point that quantum mechanics says the world is not definite until observed, and it is easy to conclude that everyday objects, if left alone, are in several states at once.",
          "The original use was the opposite. Erwin Schrödinger introduced the cat in 1935, in the same series of papers where he named entanglement, as a reductio ad absurdum. He wanted to show that applying the rules of quantum mechanics directly to a macroscopic object leads to a conclusion that seems ridiculous, and that the theory therefore needed to be understood more carefully. The cat is a warning, not a recommendation.",
        ] },
      { heading: "Why we never see cats in superposition", paragraphs: [
          "The modern answer is decoherence. A quantum superposition is fragile because any interaction with the environment, such as scattering of air molecules or photons, entangles the system with the environment and destroys the interference between the components. H. Dieter Zeh described the mechanism in 1970, and Wojciech Zurek developed it in the following decades, reviewing it in 2003 and showing how it selects the states that we perceive as classical. For a cat, which has about 10 to the 27 atoms and is warm and surrounded by air, the decoherence time is unimaginably short, far shorter than any process that could observe it. By the time anyone could look, the superposition has become an ordinary mixture of states, one alive and one dead, with no interference.",
          "Decoherence is not a proof that only one outcome occurs, and interpretations of quantum mechanics differ on that question. But it explains why macroscopic superpositions are not seen without invoking observers or consciousness. The cat is never in a state that is both alive and dead in a way that can be detected.",
        ] },
      { heading: "Real cat states in the laboratory", paragraphs: [
          "Physicists do create cat states, in small, isolated systems. In 1996, Monroe and coauthors at NIST put a single trapped beryllium ion in a superposition of two spatially separated positions, about 80 nanometers apart. In the same year, Brune and coauthors in Paris created superpositions of two coherent states of a microwave field in a cavity and watched them decohere. In 1999, Arndt and coauthors in Vienna showed interference of C60 molecules, and by 2019 Fein and coauthors showed interference of molecules with masses above 25,000 atomic mass units. In 2000, Friedman and coauthors reported superpositions of two opposite currents in a superconducting loop, with about a billion electrons.",
          "These experiments show that the principle holds for increasingly large systems, as long as they are isolated well enough. They also let physicists measure how decoherence grows with size, and test theories in which wavefunctions collapse spontaneously at some scale, as reviewed by Bassi and coauthors in 2013. So far, no deviation from quantum mechanics has been found.",
        ] },
      { heading: "Cat qubits in technology", paragraphs: [
          "The idea has even been put to practical use. Cat qubits encode a qubit in superpositions of two coherent states of a microwave cavity, which are called cat states because of the analogy. By engineering the way the cavity loses photons, the states can be stabilized, and bit-flip errors suppressed exponentially in the size of the cat, as shown by Lescanne and coauthors in 2020. Companies such as Alice and Bob and Amazon Web Services use cat qubits in their designs. The cat in these devices is a few photons, not a feline, but it shows that macroscopic quantum superpositions are a resource.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The myth contains a true core: quantum mechanics does allow superpositions of states that differ in macroscopic ways, and experiments are pushing the boundary of how large such superpositions can be. The question of what happens in measurement is still debated by physicists. But the specific claim that everyday objects are in two states at once until observed is wrong, because decoherence ensures that they behave classically in practice.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth feeds a view of quantum mechanics as magic, in which reality depends on observation by people. It contributes to claims of quantum healing and mind-over-matter that have no basis in the physics. It also makes it harder to appreciate real results, such as the realization of cat states in the laboratory, which are impressive precisely because they require extreme isolation. Teachers can use the cat to explain why quantum effects are hard to see and hard to harness.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Say that the cat was meant as a joke at the expense of naive interpretations, and that real objects interact with their surroundings so quickly that superpositions vanish. If someone asks whether the cat is both alive and dead, answer that in practice, it is one or the other, and that the superposition would have disappeared long before the box was opened. For a deeper discussion, point them to decoherence and to the laboratory cat states.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. Schrödinger's cat was meant to show the absurdity of applying superposition to large objects. Decoherence explains why everyday objects behave classically, and laboratory cat states exist only in small, well-isolated systems.",
        ] },
    ], facts: [
      "Schrödinger introduced the cat in 1935 to highlight a problem, not to describe reality.",
      "Decoherence times for macroscopic objects at room temperature are extremely short.",
      "Interference of molecules above 25,000 atomic mass units has been observed.",
      "Cat qubits use superpositions of coherent states in microwave cavities.",
    ], spot: [
      "Watch for claims that everyday objects exist in multiple states until observed.",
      "Ask how decoherence is accounted for.",
      "Notice if the thought experiment is presented as a literal description.",
      "Look for connections to consciousness or mysticism.",
    ], faq: [
      { q: "Is the cat alive and dead at the same time?", a: "In practice it is one or the other. Decoherence removes the superposition almost instantly." },
      { q: "Can we make real cat states?", a: "Yes, in small, isolated systems such as trapped ions, cavities, and molecules." },
      { q: "Did Schrödinger believe in the cat?", a: "He used it to criticize a naive reading of quantum mechanics." },
    ], references: [
      "Schrödinger, E. (1935). Die gegenwärtige Situation in der Quantenmechanik. Die Naturwissenschaften, 23, 807-812, 823-828, 844-849.",
      "Zeh, H. D. (1970). On the interpretation of measurement in quantum theory. Foundations of Physics, 1, 69-76.",
      "Zurek, W. H. (2003). Decoherence, einselection, and the quantum origins of the classical. Reviews of Modern Physics, 75, 715-775.",
      "Monroe, C., Meekhof, D. M., King, B. E., & Wineland, D. J. (1996). A Schrödinger cat superposition state of an atom. Science, 272, 1131-1136.",
      "Brune, M., et al. (1996). Observing the progressive decoherence of the meter in a quantum measurement. Physical Review Letters, 77, 4887-4890.",
      "Arndt, M., et al. (1999). Wave-particle duality of C60 molecules. Nature, 401, 680-682.",
      "Fein, Y. Y., et al. (2019). Quantum superposition of molecules beyond 25 kDa. Nature Physics, 15, 1242-1245.",
      "Bassi, A., Lochan, K., Satin, S., Singh, T. P., & Ulbricht, H. (2013). Models of wave-function collapse, underlying theories, and experimental tests. Reviews of Modern Physics, 85, 471-527.",
      "Lescanne, R., et al. (2020). Exponential suppression of bit-flips in a qubit encoded in an oscillator. Nature Physics, 16, 509-513.",
    ], links: [
      { label: "Paper: Exponential Suppression of Bit-Flips in a Qubit Encoded in an Oscillator", href: "/research/lescanne-exponential-bit-flip-suppression-2020" },
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Term: Cat Qubit", href: "/dictionary/cat-qubit" },
      { label: "Forecast: Fundamental Physics: Testing Quantum Mechanics and Probing Nature", href: "/future/quantum-foundations-physics-future" },
    ], words: 1038 },
  { slug: "conscious-observer-collapses-wavefunction", myth: "A conscious observer is needed to collapse the wavefunction, so consciousness creates reality", category: "physics", verdict: "False", summary: "In quantum mechanics a measurement is a physical interaction with an apparatus and its environment, not an act of awareness. Detectors, cameras, and even stray molecules produce the same effects as a human observer, and most physicists reject a special role for consciousness.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The word observer in quantum mechanics suggests a person looking at an experiment. Popular books and films use it to claim that the universe depends on the mind of the observer, that reality is created by looking, or that thought can change physical outcomes. The claim has historical roots: some founders of quantum theory, including John von Neumann and Eugene Wigner, discussed whether consciousness could be the final step in the chain of measurement, and the idea has been revived in books of the 1970s and later.",
          "The mainstream view is different. In the formalism, an observer is any system that interacts with the quantum system in a way that records information. A photographic plate, a detector, or a molecule in the air can all play that role. No experiment has shown that a human mind is required.",
        ] },
      { heading: "What measurement is in physics", paragraphs: [
          "A measurement is an interaction in which the state of the quantum system becomes correlated with the state of a measuring device, and the device's pointer ends up in a definite position that can be recorded. The mathematical rule, the Born rule, tells us the probabilities of outcomes. What it does not specify is the exact mechanism by which one outcome occurs, and that is the measurement problem, which has several proposed solutions: collapse theories, pilot-wave theory, many-worlds, and others. Consciousness-based accounts are one family among these, and they are held by a small minority.",
          "Experiments support the view that consciousness is not needed. In the double-slit experiment, interference disappears when which-path information is recorded by a detector, even if no one ever looks at the record. Experiments with delayed choice and quantum erasers show that the pattern depends on whether the information exists in principle in the apparatus, not on whether a person has seen it. And modern theory of decoherence, developed by Zeh and Zurek, shows that interaction with the environment destroys interference effectively, without anyone observing. John Bell criticized the use of the word observer and the vagueness of measurement in his 1990 essay Against Measurement.",
        ] },
      { heading: "The role of Wigner's friend", paragraphs: [
          "Wigner proposed in 1961 a thought experiment, in which a friend inside a sealed laboratory measures a quantum system, while Wigner outside treats the whole laboratory as a quantum system. The two give different descriptions, and Wigner suggested that consciousness might resolve the puzzle. Modern versions have returned in the literature: Frauchiger and Renner in 2018 derived a paradox from assumptions about observers that use quantum theory, and Proietti and coauthors in 2019 tested a version with photons, using qubits as stand-ins for observers. These results are important for foundations, since they show that some combinations of common assumptions cannot all hold. They do not show that consciousness plays a role, and the authors and most commentators draw different conclusions, about the compatibility of facts across observers, not about minds.",
        ] },
      { heading: "What physicists think", paragraphs: [
          "A 2011 survey by Schlosshauer, Koehler, and Zeilinger of participants at a conference on quantum foundations asked about interpretations and the role of the observer. Only a small share, in the range of single-digit percentages, said that the observer should be regarded as a conscious being, while most chose answers in which the observer is a physical system or the role of the observer is not special. Interpretations differed, but the consciousness-based view was a clear minority. Such a survey is not proof, but it shows where the community stands.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The measurement problem is unsolved, and serious physicists differ on how to interpret it. The role of the observer in the formalism has been a topic of discussion since the 1920s. It is true that the theory does not give a complete account of how a single outcome emerges, and it is legitimate to explore different answers. The error is to claim that physics has shown that human consciousness creates reality, when the evidence does not support it.",
        ] },
      { heading: "Experiments without any person involved", paragraphs: [
          "Several kinds of experiments show that human awareness is not a factor. Interference in the double-slit setup disappears if a which-path detector is present, even if its data is erased unread or never inspected by anyone, as long as the information was recorded in a way that could be read. Quantum computers measure their qubits with automated electronics, and the data is processed by software long before a person sees it, yet the outcomes follow the same statistics predicted by theory. Large collaborations analyze such data years later with no sign that the timing of human attention matters. If consciousness changed the outcome, these long delays would make a difference, and none has been found.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth is the foundation of many pseudoscientific claims: that thoughts can heal diseases, that wishes can be materialized by quantum effects, and that science has proven spiritual doctrines. These claims affect health decisions, finances, and trust in science. They are often marketed through books, courses, and products. Correcting the myth helps people to evaluate such claims and to understand what quantum mechanics says about the world.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that observer in physics means an interacting physical system, and that detectors and environments suffice. Point to experiments where the data are recorded by machines and analyzed later, with the same results as if someone had watched. If someone claims that quantum mechanics proves the power of consciousness, ask for the experiment that shows it and for the independent replication.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum mechanics does not require a conscious observer. Measurements are physical interactions, and decoherence explains how environments produce definite outcomes in practice, while the deeper measurement problem remains an open topic with several non-mystical interpretations.",
        ] },
    ], facts: [
      "In quantum theory an observer is any system that records information, such as a detector.",
      "Interference disappears when which-path information is recorded, even if nobody reads it.",
      "A 2011 survey of foundations researchers found that only a small minority support a conscious-observer view.",
      "John Bell criticized the vague use of the word observer in his 1990 essay Against Measurement.",
    ], spot: [
      "Watch for claims that observation by a mind changes physical outcomes.",
      "Ask whether the experiment would give the same result with an automatic detector.",
      "Be skeptical of arguments that jump from quantum mechanics to spiritual conclusions.",
      "Look for independent replication and expert consensus.",
    ], faq: [
      { q: "Does looking at an experiment change the result?", a: "Measuring it does, by interacting with the system. A camera or detector has the same effect as a person." },
      { q: "Is the measurement problem solved?", a: "No. Several interpretations exist, and none is universally accepted." },
      { q: "Do physicists believe consciousness is involved?", a: "A small minority do. Most do not." },
    ], references: [
      "Bell, J. S. (1990). Against measurement. Physics World, 3(8), 33-41.",
      "Zurek, W. H. (2003). Decoherence, einselection, and the quantum origins of the classical. Reviews of Modern Physics, 75, 715-775.",
      "Schlosshauer, M., Koehler, J., & Zeilinger, A. (2013). A snapshot of foundational attitudes toward quantum mechanics. Studies in History and Philosophy of Modern Physics, 44, 222-230.",
      "Frauchiger, D., & Renner, R. (2018). Quantum theory cannot consistently describe the use of itself. Nature Communications, 9, 3711.",
      "Proietti, M., et al. (2019). Experimental test of local observer independence. Science Advances, 5, eaaw9832.",
      "Everett, H. (1957). Relative state formulation of quantum mechanics. Reviews of Modern Physics, 29, 454-462.",
    ], links: [
      { label: "Term: Measurement Collapse", href: "/dictionary/measurement-collapse" },
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: Born Rule", href: "/dictionary/born-rule" },
      { label: "Forecast: Fundamental Physics: Testing Quantum Mechanics and Probing Nature", href: "/future/quantum-foundations-physics-future" },
    ], words: 1113 },
  { slug: "quantum-computers-use-parallel-universes", myth: "Quantum computers work by doing calculations in parallel universes", category: "physics", verdict: "Unproven", summary: "The parallel-universe picture is one interpretation of quantum mechanics, championed by David Deutsch, and it is not needed to explain or use quantum computers. All interpretations make the same predictions, so the claim cannot be tested by a computation.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The idea that quantum computers work by borrowing computing power from parallel universes was put forward by David Deutsch, who helped to found the field. In his 1985 paper and in his book The Fabric of Reality in 1997, he argued that the efficiency of Shor's algorithm is hard to explain unless a vast number of computations takes place in different branches of reality, a picture based on Hugh Everett's many-worlds interpretation from 1957. Popular writers have repeated the idea in articles and talks, and companies sometimes use the image to describe their machines.",
          "The idea is striking and has defenders, but it is a claim about interpretation. It is not a result of quantum computing, and it is not a necessary part of the explanation.",
        ] },
      { heading: "What the many-worlds interpretation says", paragraphs: [
          "Everett proposed that the wavefunction never collapses. When a measurement occurs, all outcomes happen, each in a branch of an ever-growing universal wavefunction, and observers in each branch see one outcome. Modern versions, developed by Wallace and others, use decoherence to explain why branches do not interfere with each other. On this view, a quantum computer in a superposition of computational paths is, in a sense, running many branches, and interference brings together the results.",
          "Many physicists find this view elegant because it takes the formalism literally and avoids adding a collapse postulate. Others find it extravagant or incomplete, since questions about probability and the meaning of branches are debated, and they prefer other approaches: collapse theories, pilot-wave theory, relational or information-based interpretations, or an agnostic stance.",
        ] },
      { heading: "Why it is not required", paragraphs: [
          "Quantum algorithms can be understood entirely in terms of amplitudes, interference, and measurement, which is how textbooks and researchers describe them. Shor's algorithm uses the quantum Fourier transform to make the period of a function appear as a peak, and the explanation requires linear algebra, not universes. Grover's algorithm increases the amplitude of the correct answer through repeated reflections. These explanations apply under every interpretation of quantum mechanics, because all interpretations agree on the predictions of the theory for experiments. A quantum computer built and run by a follower of the Copenhagen interpretation behaves exactly like one run by a many-worlds advocate.",
          "Scott Aaronson and others have pointed out that the argument that the computations must happen somewhere is not compelling. The state space of n qubits is exponentially large, but as shown by the Holevo bound, only n bits can be read out, and the speedups come from specific structure, not from the sheer number of branches. Aaronson has also noted that if the many-worlds picture implied unlimited parallel computation, quantum computers would solve NP-complete problems quickly, which is not believed to be true.",
        ] },
      { heading: "What physicists think", paragraphs: [
          "Interpretation is not settled. The 2011 survey of foundations researchers by Schlosshauer, Koehler, and Zeilinger found that the Copenhagen interpretation was the most popular choice, with information-based views next, and the Everett interpretation chosen by roughly one in five. That means that many-worlds is a respected minority view, and not the consensus. Deutsch's argument is taken seriously, but most researchers do not think a quantum computer can settle the question.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The many-worlds interpretation is a coherent and serious option, and it has been productive in thinking about quantum computation. The sense that a quantum computer explores a huge space of possibilities is part of why it is powerful. For those who find the interpretation natural, speaking of parallel branches is a convenient way to think. The error is to present it as the established explanation of how quantum computers work.",
        ] },
      { heading: "How a quantum algorithm looks without universes", paragraphs: [
          "Consider Deutsch's own example. A function takes one bit and returns one bit, and the task is to find out whether the function gives the same value for both inputs or different values. Classically, you must evaluate it twice. A quantum computer prepares a superposition of the two inputs, evaluates the function once, and applies a Hadamard gate, after which measuring one qubit tells you the answer with certainty. The explanation is that the two amplitudes either add or cancel at the end, depending on the global property of the function. One can describe this as two universes computing in parallel, or as one system whose amplitudes interfere. Both descriptions give the same answer, the same prediction, and the same experimental result, which is the reason that the choice between them is a matter of interpretation, not a matter of testing.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Presenting an interpretation as a fact misleads the public about what is known. It also sets up false expectations: if computers draw on parallel universes, they might seem capable of anything. And it blurs the line between physics, which is tested by experiments, and philosophy, which is argued. Keeping these distinct helps people judge claims. For the field, it matters that investors and policymakers understand that the technology rests on well-tested physics and does not depend on contested interpretation.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Say that parallel universes are one way of interpreting the mathematics, favored by some physicists, and that the mathematics itself, which gives the same predictions under every interpretation, is what makes quantum computers work. If you want a simple picture, use interference of waves. If someone claims that quantum computers prove many worlds, point out that other interpretations predict exactly the same results.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Unproven. The many-worlds explanation is a legitimate interpretation but not established fact, and quantum computers neither need it nor can confirm it, since all interpretations predict the same experimental results.",
        ] },
    ], facts: [
      "David Deutsch argued for a many-worlds explanation of quantum computing in 1985 and 1997.",
      "All interpretations of quantum mechanics make the same experimental predictions.",
      "A 2011 survey found the Everett interpretation preferred by roughly one in five foundations researchers.",
      "Quantum algorithms are fully explained by amplitudes and interference.",
    ], spot: [
      "Look for statements that quantum computers prove the existence of parallel universes.",
      "Ask whether the explanation depends on a specific interpretation.",
      "Notice if philosophical claims are presented as experimental results.",
      "Prefer explanations in terms of amplitudes and interference.",
    ], faq: [
      { q: "Do quantum computers prove many-worlds?", a: "No. They behave the same way under every interpretation." },
      { q: "Who believes in many-worlds?", a: "A minority of physicists, including David Deutsch and Sean Carroll, among others." },
      { q: "Can I understand quantum computing without many-worlds?", a: "Yes. The standard explanation uses amplitudes and interference." },
    ], references: [
      "Everett, H. (1957). Relative state formulation of quantum mechanics. Reviews of Modern Physics, 29, 454-462.",
      "Deutsch, D. (1985). Quantum theory, the Church-Turing principle and the universal quantum computer. Proceedings of the Royal Society A, 400, 97-117.",
      "Deutsch, D. (1997). The Fabric of Reality. Allen Lane.",
      "Wallace, D. (2012). The Emergent Multiverse: Quantum Theory according to the Everett Interpretation. Oxford University Press.",
      "Schlosshauer, M., Koehler, J., & Zeilinger, A. (2013). A snapshot of foundational attitudes toward quantum mechanics. Studies in History and Philosophy of Modern Physics, 44, 222-230.",
      "Aaronson, S. (2013). Quantum Computing since Democritus. Cambridge University Press.",
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
    ], links: [
      { label: "Paper: Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer", href: "/research/deutsch-universal-quantum-computer-1985" },
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Term: Quantum Interference", href: "/dictionary/quantum-interference" },
    ], words: 1061 },
  { slug: "entanglement-is-just-classical-correlation", myth: "Entanglement is just ordinary correlation, and hidden variables can explain it", category: "physics", verdict: "False", summary: "Bell's theorem and decades of experiments, including loophole-free tests in 2015, show that entangled correlations cannot be explained by pre-existing local properties. They are stronger than any classical correlation allows.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth offers a comforting answer to a puzzling phenomenon. When two entangled particles give matching results, it seems natural to say that they were prepared with matching instructions, like a pair of gloves sent to different places, and that when you find a left glove you know the other is a right glove. Einstein, Podolsky, and Rosen argued in 1935 that quantum mechanics must therefore be incomplete, and that there must be hidden variables that fix the outcomes in advance. Many people still find this explanation convincing, and critics of quantum technology sometimes use it to argue that the effects are not special.",
          "The gloves explanation works for some correlations, but not for all of those that quantum mechanics predicts and that experiments see. The decisive step was taken by John Bell in 1964.",
        ] },
      { heading: "What Bell proved", paragraphs: [
          "Bell considered the correlations between measurements on two distant particles, where each side can choose between different measurement settings. He showed that any theory in which the outcomes are determined by pre-existing properties carried by the particles, and in which the choice of setting on one side does not influence the other, must satisfy certain inequalities. Quantum mechanics predicts that entangled particles violate them. The difference is not small: in the CHSH version of the inequality, local hidden variable theories cannot exceed a value of 2, while quantum mechanics allows 2 times the square root of 2, about 2.83.",
          "The theorem turned a philosophical argument into an experiment. Freedman and Clauser performed the first test in 1972, and Aspect and coworkers did stricter ones in 1982, with settings changed while the photons were in flight. All found violations, in agreement with quantum mechanics. Early experiments had loopholes: the detectors missed many photons, or the particles might have communicated before the measurements. In 2015, groups in Delft, at NIST, and in Vienna closed the main loopholes simultaneously, and the violation persisted. Later experiments used distant quasars and human choices from a worldwide game, as in the BIG Bell Test of 2018, to make the settings independent. The Nobel Prize in Physics 2022 went to Aspect, Clauser, and Zeilinger for this work.",
        ] },
      { heading: "Why a classical explanation fails", paragraphs: [
          "The classical explanation requires that each particle carries a complete set of instructions for every possible measurement. Bell's inequalities show that no such set of instructions can reproduce the quantum correlations. To keep a classical-style explanation, one must give up something: either locality, accepting that distant events can influence each other instantaneously in a way that cannot be used for signaling, as in Bohmian mechanics, or the independence of the measurement settings from the hidden variables, which is called superdeterminism and requires a conspiracy-like correlation between the settings and the preparation of the particles. Most physicists find both unattractive, though they remain logically possible.",
          "Either way, the correlations are not the simple shared-instruction correlations of everyday life. The result also does not allow communication, as discussed in the myth about faster-than-light messages.",
        ] },
      { heading: "Why this matters for technology", paragraphs: [
          "The strength of entangled correlations is a resource. Device-independent quantum key distribution uses a Bell violation to certify that a key is secure even if the devices are not trusted. Certified randomness uses it to prove that bits are unpredictable. Entanglement is needed for quantum teleportation, for quantum networks, and for the speedups of some algorithms. If entanglement were merely classical correlation, none of these would work as they do. Experiments that verify these applications, such as the NIST randomness beacon of 2025, rest on Bell tests.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Some correlations in quantum experiments can be reproduced by classical models, particularly for weakly entangled states or limited measurements, and critics are right to insist that a Bell violation, not just any correlation, is the sign of true nonclassicality. Also, the foundational debate about how to interpret the violation is open. But the claim that hidden variables of the local kind can explain entanglement has been refuted by experiment.",
        ] },
      { heading: "A quick numerical check", paragraphs: [
          "The numbers make the point concrete. Suppose two parties choose between two measurement settings each, and score a point when the outcomes agree for three of the setting pairs and differ for the fourth. Any assignment of pre-set answers to the particles can score at most three of the four pairs in each round, so the average correlation value is limited to 2 in the standard CHSH form. Entangled photons in a suitable state reach 2.8 in experiments, and the measured violations in the 2015 tests exceeded the classical limit by many standard deviations. A pair of gloves cannot do that, whatever instructions they carry.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth leads people to dismiss quantum technology as old physics with a new name, and to underestimate what entanglement offers. It also appears in arguments that quantum computing cannot provide speedups because everything is just correlation. Understanding Bell's theorem is a good way to see why quantum information is a new resource, and why protocols for security and computation can offer things that classical information cannot.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Describe the glove analogy and then explain that Bell showed that it fails: if the particles carried instructions, the correlations would obey a limit that experiments exceed. Point to the 2015 loophole-free experiments and the 2022 Nobel Prize. If someone asks about superdeterminism, acknowledge that it is a logical possibility that few physicists find plausible, and that it has not produced testable predictions.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Local hidden variables cannot explain entanglement, as Bell's theorem and loophole-free experiments show. Entangled correlations are stronger than any classical correlation between pre-existing local properties.",
        ] },
    ], facts: [
      "Local hidden variable theories cannot exceed a CHSH value of 2, while quantum mechanics reaches about 2.83.",
      "Loophole-free Bell tests were reported in 2015 by groups in Delft, at NIST, and in Vienna.",
      "The BIG Bell Test of 2018 used choices from about 100,000 human participants to set measurement settings.",
      "The 2022 Nobel Prize in Physics recognized experiments with entangled photons that established Bell violations.",
    ], spot: [
      "Watch for claims that entanglement is just like two gloves in boxes.",
      "Ask how the explanation accounts for Bell inequality violations.",
      "Notice if the argument ignores the measurement settings.",
      "Be wary of dismissals of quantum technology based on this claim.",
    ], faq: [
      { q: "What is a Bell inequality?", a: "A mathematical limit on correlations that any local hidden variable theory must obey. Quantum mechanics violates it." },
      { q: "Is superdeterminism ruled out?", a: "No, but it requires fine-tuned correlations between the experimenter's choices and the particles, which most physicists find implausible." },
      { q: "Does a Bell violation allow faster-than-light signaling?", a: "No. It shows nonlocal correlations that cannot be used to send messages." },
    ], references: [
      "Einstein, A., Podolsky, B., & Rosen, N. (1935). Can quantum-mechanical description of physical reality be considered complete? Physical Review, 47, 777-780.",
      "Bell, J. S. (1964). On the Einstein Podolsky Rosen paradox. Physics Physique Fizika, 1, 195-200.",
      "Freedman, S. J., & Clauser, J. F. (1972). Experimental test of local hidden-variable theories. Physical Review Letters, 28, 938-941.",
      "Aspect, A., Dalibard, J., & Roger, G. (1982). Experimental test of Bell's inequalities using time-varying analyzers. Physical Review Letters, 49, 1804-1807.",
      "Hensen, B., et al. (2015). Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. Nature, 526, 682-686.",
      "Shalm, L. K., et al. (2015). Strong loophole-free test of local realism. Physical Review Letters, 115, 250402.",
      "The BIG Bell Test Collaboration (2018). Challenging local realism with human choices. Nature, 557, 212-216.",
      "Pironio, S., et al. (2010). Random numbers certified by Bell's theorem. Nature, 464, 1021-1024.",
    ], links: [
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
      { label: "Paper: Quantum Cryptography Based on Bell's Theorem", href: "/research/ekert-quantum-cryptography-bell-1991" },
      { label: "Term: Bell Inequality", href: "/dictionary/bell-inequality" },
      { label: "Term: Entanglement", href: "/dictionary/entanglement" },
      { label: "Forecast: Quantum Random Numbers and Certified Randomness", href: "/future/quantum-randomness-future" },
    ], words: 1102 },
  { slug: "uncertainty-principle-means-imprecise-measurement", myth: "The uncertainty principle means we can never measure anything precisely", category: "physics", verdict: "Misleading", summary: "The uncertainty principle limits how well certain pairs of properties can be defined at the same time. It does not limit the precision of a single measurement, and quantum sensors reach record precision by working with it.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Werner Heisenberg introduced the uncertainty principle in 1927 with a thought experiment about observing an electron with a microscope: to locate the electron precisely, you need light of short wavelength, which kicks the electron and disturbs its momentum. Many textbooks and popular books repeated this as the explanation, so the principle seems to say that measurement disturbs the system and that our instruments therefore limit our knowledge. From there it is a short step to the idea that nothing can be measured exactly, which is used to justify claims that science is fundamentally uncertain.",
          "The modern understanding is different. The principle is a statement about the quantum state itself, not about the clumsiness of instruments.",
        ] },
      { heading: "What the principle actually says", paragraphs: [
          "In the form proved by Kennard in 1927 and generalized by Robertson in 1929, the uncertainty principle says that for any quantum state, the spread of results of measuring position multiplied by the spread of results of measuring momentum cannot be smaller than half of the reduced Planck constant. The spreads are statistical properties of an ensemble of identically prepared systems, and they describe how the state is distributed over possible outcomes. A state cannot have both a sharply defined position and a sharply defined momentum, because they are conjugate quantities related by a Fourier transform.",
          "This is a limit on preparation of states, not on measurement accuracy. You can measure position with extreme precision, and you will get a very precise result, as a position measurement; the price is that the state afterwards has a wide spread in momentum. Nothing prevents either measurement from being precise on its own. The principle also applies to other pairs, such as the components of spin along different axes, and to energy and time in a more subtle sense.",
        ] },
      { heading: "Error and disturbance", paragraphs: [
          "Heisenberg's original idea, that measuring one quantity disturbs another in proportion, is a different statement, and it has been tested. Ozawa showed in 2003 that the simple form of the relation between measurement error and disturbance is not always valid, and that a corrected relation holds. Erhart and coauthors in 2012 with neutron spins, and Rozema and coauthors in 2012 with photons, confirmed that the original error-disturbance relation can be violated while the corrected one holds. The conclusion is that disturbance is real but is not what limits the uncertainty principle, which is a property of states.",
        ] },
      { heading: "Quantum sensors work with uncertainty, and beat naive limits", paragraphs: [
          "The best evidence against the myth is that quantum technology achieves some of the most precise measurements ever made. Optical lattice clocks have reached fractional uncertainties near 10 to the minus 18, enough to detect the change in a clock's rate when it is lifted by a centimeter. The LIGO gravitational wave detectors measure changes in length of less than a thousandth of the width of a proton, and since 2019 they use squeezed light to reduce quantum noise, as reported by Tse and coauthors. Squeezing works by trading uncertainty between conjugate quantities: the uncertainty in the phase of light is reduced, at the cost of increased uncertainty in the amplitude, which does not matter for the measurement. This is the uncertainty principle used as a design tool.",
          "Quantum metrology theory shows that using entanglement and squeezing, measurement precision can scale better with the number of probes than the standard quantum limit, approaching what is called the Heisenberg limit, as Giovannetti, Lloyd, and Maccone described in 2004. Far from forbidding precision, quantum mechanics tells us how to reach the best possible precision.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The principle does set real limits. You cannot prepare a particle with exactly known position and momentum, and you cannot measure both simultaneously with arbitrary precision on the same particle. Fundamental limits on precision exist, for example the standard quantum limit for measurements that do not use squeezing, and the Heisenberg limit as the ultimate bound. So it is right to say that nature imposes limits. The error is to say that these limits make precise measurement impossible, or to attribute them only to disturbance.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth is used in many places to defend vague claims: that science cannot know anything for sure, that free will is rescued by quantum uncertainty, or that quantum mechanics makes everyday precision meaningless. It also confuses students about how measurement works. Correcting it helps people appreciate that quantum mechanics is a very predictive theory, which underlies modern electronics, lasers, GPS clocks, and medical imaging, all of which require precise measurement.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that the principle limits what the state can be, not what instruments can read, and that measurement precision is routinely beyond what everyday intuition would allow. Mention atomic clocks, gravitational wave detectors, and MRI. A useful analogy is that you cannot make a wave that is both a short pulse and a pure tone, since a pure tone needs time to define its pitch. That trade-off is the same mathematics as the uncertainty principle.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. The uncertainty principle limits how sharply conjugate properties can be defined in a state, and it is not a limit on measurement precision as such. Quantum technology uses it to achieve extremely precise measurements.",
        ] },
    ], facts: [
      "The Kennard and Robertson inequality was proved in 1927 and 1929 as a property of quantum states.",
      "Optical lattice clocks have reached fractional uncertainties near 10 to the minus 18.",
      "LIGO has used squeezed light since 2019 to reduce quantum noise.",
      "Experiments in 2012 showed that Heisenberg's original error-disturbance relation can be violated.",
    ], spot: [
      "Watch for statements that the principle means we can never know anything exactly.",
      "Ask whether the claim distinguishes state preparation from measurement.",
      "Notice whether the microscope explanation is presented as the whole story.",
      "Look for examples of precision measurement in the argument.",
    ], faq: [
      { q: "Does measuring a particle always disturb it?", a: "Yes, in some way, but the uncertainty principle is about the properties of states, not only about disturbance." },
      { q: "Can we measure position exactly?", a: "In principle you can get a very precise position, though the momentum becomes widely spread afterward." },
      { q: "How do clocks get so precise?", a: "By using atoms in carefully controlled quantum states, with techniques that reduce noise and exploit the properties of the principle." },
    ], references: [
      "Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik. Zeitschrift für Physik, 43, 172-198.",
      "Robertson, H. P. (1929). The uncertainty principle. Physical Review, 34, 163-164.",
      "Ozawa, M. (2003). Universally valid reformulation of the Heisenberg uncertainty principle on noise and disturbance in measurement. Physical Review A, 67, 042105.",
      "Erhart, J., et al. (2012). Experimental demonstration of a universally valid error-disturbance uncertainty relation in spin measurements. Nature Physics, 8, 185-189.",
      "Rozema, L. A., et al. (2012). Violation of Heisenberg's measurement-disturbance relationship by weak measurements. Physical Review Letters, 109, 100404.",
      "Giovannetti, V., Lloyd, S., & Maccone, L. (2004). Quantum-enhanced measurements: beating the standard quantum limit. Science, 306, 1330-1336.",
      "Tse, M., et al. (2019). Quantum-enhanced Advanced LIGO detectors in the era of gravitational-wave astronomy. Physical Review Letters, 123, 231107.",
      "Bloom, B. J., et al. (2014). An optical lattice clock with accuracy and stability at the 10^-18 level. Nature, 506, 71-75.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Term: Uncertainty Principle", href: "/dictionary/uncertainty-principle" },
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Forecast: Quantum Sensing: Clocks, Navigation, and Imaging", href: "/future/quantum-sensing-future" },
    ], words: 1040 },
  { slug: "classical-computers-cannot-simulate-quantum-circuits", myth: "Classical computers can never simulate a quantum computer", category: "physics", verdict: "Mostly false", summary: "Classical computers can simulate small quantum circuits exactly and some large ones efficiently, and many claimed quantum advantages have been narrowed by cleverer classical algorithms. The cost grows exponentially only for general circuits with enough entanglement and low noise.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth exaggerates a true statement. Feynman argued in 1981 that simulating quantum systems on classical computers takes exponential resources, and this became the founding motivation of quantum computing. Popular accounts conclude that classical computers cannot simulate quantum computers at all. Company announcements, such as the claim that a quantum processor did in minutes what a supercomputer would need thousands of years for, reinforce the impression of an absolute gap.",
          "The reality is more detailed. The difficulty of simulation depends on the circuit, the amount of entanglement, the noise, and the accuracy required. For many circuits of interest, classical simulation is feasible, and the boundary keeps moving.",
        ] },
      { heading: "Exact simulation and its limits", paragraphs: [
          "Storing the full state of n qubits requires 2 to the n complex numbers. For 30 qubits that is about 16 gigabytes in single precision, which fits on a laptop. For 45 qubits it is on the order of a petabyte, which only the largest supercomputers can hold, and each added qubit doubles the requirement. Exact simulation of 100 qubits is beyond any conceivable memory. So for general circuits on more than about 50 qubits, brute-force simulation fails. This part of the myth is right.",
          "But exact simulation is not the only approach. Many simulations aim to reproduce measurement statistics to some accuracy, not the full state, and clever methods can do that for circuits with structure.",
        ] },
      { heading: "Circuits that are easy to simulate", paragraphs: [
          "Several classes of quantum circuits can be simulated efficiently. Circuits made only of Clifford gates, which include the building blocks of error-correcting codes, can be simulated in polynomial time by the Gottesman-Knill theorem, and software such as Stim does it for thousands of qubits. Circuits with limited entanglement can be simulated with tensor network methods, such as matrix product states, whose cost depends on the amount of entanglement and not on the number of qubits. Circuits with noise are often easier still: Aharonov and coauthors proved in 2023 that random circuit sampling with a constant amount of noise per gate can be simulated classically in polynomial time, which implies that the largest noisy experiments are not as hard as their size suggests.",
          "The practice of the last years shows this repeatedly. After Google's 2019 supremacy claim, IBM argued that the task could be done in days with disk storage, and in 2022 Pan and Zhang reported simulating the Sycamore sampling problem in about 15 hours on a cluster of 512 GPUs. After IBM's 2023 utility experiment on a 127-qubit processor, Tindall and coauthors and others reproduced the results with tensor network and belief propagation methods on classical computers. Algorithms for Gaussian boson sampling by Oh and coauthors in 2024 reduced the claimed gap for photonic experiments. In each case, the quantum experiment was real, and the classical response showed that its difficulty had been overestimated.",
        ] },
      { heading: "Where classical simulation really does fail", paragraphs: [
          "For general circuits with high entanglement, low noise, and enough depth, no efficient classical method is known, and strong evidence from complexity theory suggests that none exists. Random circuit sampling in the noiseless limit is believed to be hard under standard conjectures, as reviewed by Hangleiter and Eisert in 2023. Simulating the real-time dynamics of strongly entangled quantum systems, such as a two-dimensional lattice after a quench, is also hard for the best known classical methods. Fault-tolerant machines running Shor's algorithm on large numbers would be impossible to simulate classically.",
          "The frontier is therefore a moving boundary. Experiments aim for regimes beyond the reach of classical methods, and classical researchers extend their methods in response. The most reliable claim is that classical computers cannot simulate large, low-noise, highly entangled quantum computations, while many intermediate cases can be handled.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The difficulty of simulating quantum systems is the reason quantum computers are interesting in the first place, and for the cases that matter most, such as large fault-tolerant computations and strongly correlated materials, classical simulation is out of reach. So it is correct to say that there are quantum computations that no classical computer can simulate. The myth goes wrong in saying that this holds for all of them.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Believing that simulation is always impossible makes it easy to accept exaggerated claims of quantum advantage and to overlook the work of classical groups who push back. It also leads to the false view that any large quantum device must be doing something that no classical computer could do. A realistic view helps to evaluate experiments: the question is always whether the specific circuit is hard, with what noise, for which classical methods.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask three questions of any claim of classical intractability. How was the classical cost estimated, and with what algorithm? Has anyone tried the best methods, including tensor networks and noise-aware algorithms? And does the quantum device's noise make the task easier than the ideal case? A good answer to all three gives credibility to the claim, and a vague answer does not.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Classical computers can simulate small quantum circuits exactly, many larger ones approximately, and some special classes efficiently. They cannot simulate general large, low-noise, highly entangled circuits, which is where quantum advantage lies.",
        ] },
    ], facts: [
      "The memory for exact simulation doubles with every added qubit, reaching about a petabyte at 45 qubits.",
      "Clifford circuits can be simulated efficiently by the Gottesman-Knill theorem.",
      "Pan and Zhang simulated the Sycamore sampling problem in about 15 hours on 512 GPUs in 2022.",
      "Aharonov and coauthors proved in 2023 that noisy random circuit sampling with constant noise is classically simulable.",
    ], spot: [
      "Watch for statements that classical simulation is impossible without specifying the circuit.",
      "Ask how the classical cost estimate was made and by whom.",
      "Check whether noise, entanglement, and depth are taken into account.",
      "Look for independent classical attempts to reproduce the result.",
    ], faq: [
      { q: "Can a laptop simulate a quantum computer?", a: "Yes, up to about 30 qubits for general circuits, and many more for special circuits." },
      { q: "What is a tensor network simulation?", a: "A method that represents the quantum state with a network of small tensors, efficient when entanglement is limited." },
      { q: "Does a classical simulation mean that the quantum experiment was not real?", a: "No. It means that the task was easier than initially estimated." },
    ], references: [
      "Feynman, R. P. (1982). Simulating physics with computers. International Journal of Theoretical Physics, 21, 467-488.",
      "Gottesman, D. (1998). The Heisenberg representation of quantum computers. arXiv:quant-ph/9807006.",
      "Gidney, C. (2021). Stim: a fast stabilizer circuit simulator. Quantum, 5, 497.",
      "Pednault, E., et al. (2019). Leveraging secondary storage to simulate deep 54-qubit Sycamore circuits. arXiv:1910.09534.",
      "Pan, F., & Zhang, P. (2022). Simulation of quantum circuits using the big-batch tensor network method. Physical Review Letters, 128, 030501.",
      "Aharonov, D., Gao, X., Landau, Z., Liu, Y., & Vazirani, U. (2023). A polynomial-time classical algorithm for noisy random circuit sampling. STOC '23, 945-957.",
      "Tindall, J., Fishman, M., Stoudenmire, E. M., & Sels, D. (2024). Efficient tensor network simulation of IBM's Eagle kicked Ising experiment. PRX Quantum, 5, 010308.",
      "Hangleiter, D., & Eisert, J. (2023). Computational advantage of quantum random sampling. Reviews of Modern Physics, 95, 035001.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: A Polynomial-Time Classical Algorithm for Noisy Random Circuit Sampling", href: "/research/aharonov-noisy-random-circuit-sampling-2023" },
      { label: "Paper: Efficient Tensor Network Simulation of IBM's Eagle Kicked Ising Experiment", href: "/research/tindall-tensor-network-eagle-kicked-ising-2024" },
      { label: "Paper: Simulating Physics with Computers", href: "/research/feynman-simulating-physics-1982" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
      { label: "Forecast: Quantum Simulation: The Most Likely Early Scientific Payoff", href: "/future/quantum-simulation-science-future" },
    ], words: 1046 },
  { slug: "no-cloning-makes-error-correction-impossible", myth: "Quantum error correction is impossible because quantum states cannot be copied", category: "physics", verdict: "False", summary: "The no-cloning theorem forbids copying an unknown state, but error correction does not copy. It spreads one qubit's information across entangled qubits and measures only error syndromes, and the idea has been demonstrated in experiments.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth seems like a rigorous argument. Classical error correction works by redundancy: store three copies of each bit and take a majority vote. The no-cloning theorem, proved by Wootters and Zurek and by Dieks in 1982, says that an unknown quantum state cannot be copied. Hence, the argument concludes, quantum information cannot be protected by redundancy. A second objection is that measuring a qubit to check for errors destroys its superposition. In the early 1990s many physicists, including Rolf Landauer, took such objections seriously and doubted that large quantum computers could ever work.",
          "The objections were answered in 1995 and 1996 by the discovery of quantum error-correcting codes. They show that redundancy is possible without copying, and that errors can be detected without measuring the encoded information.",
        ] },
      { heading: "How quantum error correction works", paragraphs: [
          "Peter Shor's 1995 code encodes one logical qubit into nine physical qubits. The encoding does not copy the state. It uses entanglement to spread the information across the nine qubits, so that no single qubit holds the information on its own. To detect errors, one measures parity checks, which are questions such as whether two neighboring qubits agree, and not the qubits' values. The answers, called the syndrome, reveal where an error occurred without revealing the encoded state. A correction is then applied based on the syndrome.",
          "The codes handle the other objection too. Quantum errors are continuous, since a qubit can be rotated by any small angle, but the act of measuring the syndrome forces the error to be one of a discrete set, such as a bit flip, a phase flip, or both, which can then be corrected exactly. Andrew Steane found a seven-qubit code in 1996, and Calderbank and Shor showed how to build good codes from classical ones. Daniel Gottesman formalized stabilizer codes in 1997, and Alexei Kitaev proposed the toric code, the ancestor of the surface code used today.",
          "The theory was completed by the threshold theorem of Aharonov and Ben-Or, Kitaev, and Knill, Laflamme, and Zurek in 1997 and 1998: if the error rate per operation is below a threshold, arbitrarily long computations can be made reliable with a modest overhead.",
        ] },
      { heading: "Experimental confirmation", paragraphs: [
          "Error correction has now been shown in experiments. In 2021, Google showed that repeated rounds of correction in a repetition code reduced bit or phase errors exponentially as the code was enlarged from 5 to 21 qubits. In 2024, its Willow processor demonstrated a surface-code logical qubit that became more reliable as the code distance grew from 3 to 5 to 7, with the logical error decreasing by a factor of about 2.14 at each step, and the distance-7 memory outlived its best physical qubit by roughly 2.4 times. Trapped-ion, neutral-atom, and other groups have shown logical qubits with errors below those of their physical qubits. Each result is a direct refutation of the claim that quantum error correction is impossible.",
        ] },
      { heading: "Why no-cloning is not violated", paragraphs: [
          "The codes respect the no-cloning theorem. The logical state is not copied into the other qubits; it is encoded into a joint state of all of them, which is a different thing. If one tried to read the logical state from a single physical qubit, one would find nothing. The theorem forbids making independent copies of an unknown state, and codes do not make independent copies. In fact, no-cloning is a reason that quantum cryptography is secure and one of the constraints that shaped the design of codes.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The objections pointed to real difficulties. Quantum error correction is costly: protecting one logical qubit can require hundreds or thousands of physical qubits, and operations must be done carefully so that errors do not spread. The threshold is demanding, and the overhead is the main reason that large quantum computers are hard to build. So the no-cloning theorem and the measurement problem do make quantum error correction harder than classical correction, but not impossible.",
        ] },
      { heading: "The three-qubit example", paragraphs: [
          "The simplest example is the three-qubit bit-flip code. A qubit in the state a|0> plus b|1> is encoded as a|000> plus b|111>, using two controlled-NOT gates, which does not copy the state, since the result is an entangled superposition and not three independent copies of the original. If one of the three qubits flips, measuring the two parity checks, whether the first two qubits agree and whether the last two agree, identifies which qubit flipped without revealing a or b. Flipping it back restores the encoded state. The code handles only bit flips, and Shor's code adds protection against phase flips by nesting this idea, but the example shows the central trick in a form that a student can verify in a few lines.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth still appears in skeptical arguments that quantum computers can never scale. Understanding why it fails is a key to understanding why researchers believe that large machines are possible in principle. It also shows how a deep theoretical idea, entanglement-based encoding, solved a problem that seemed to forbid progress. For students, it is a good example of how a no-go theorem can be circumvented once its assumptions are examined.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that error correction encodes information in entanglement instead of copying it, and that it measures error syndromes, not the data. Cite the 2024 Google result, in which the logical error fell as the code grew. If someone says that this is only a small experiment, agree that scaling remains the challenge, and add that the principle is established.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum error correction is possible, was demonstrated theoretically in 1995 and 1996, and has been shown in experiments, including below-threshold error suppression in 2024. The no-cloning theorem forbids copying, not encoding.",
        ] },
    ], facts: [
      "The no-cloning theorem was proved in 1982 by Wootters and Zurek and by Dieks.",
      "Shor's nine-qubit code of 1995 was the first quantum error-correcting code.",
      "The threshold theorem was proved in 1997 and 1998 by several groups.",
      "Google's 2024 experiment showed logical error falling by a factor of about 2.14 per increase in code distance.",
    ], spot: [
      "Watch for arguments that no-cloning makes redundancy impossible.",
      "Ask whether the argument accounts for syndrome measurement and entanglement-based encoding.",
      "Look for experimental evidence of error suppression with code size.",
      "Be aware that overhead, not possibility, is the real obstacle.",
    ], faq: [
      { q: "Does error correction copy the qubit?", a: "No. It encodes the information across entangled qubits, which is different from copying." },
      { q: "Does checking for errors destroy the state?", a: "Not if you measure only parity checks that reveal errors without revealing the data." },
      { q: "How many qubits does one logical qubit need?", a: "Roughly tens to thousands of physical qubits, depending on the code and error rates." },
    ], references: [
      "Wootters, W. K., & Zurek, W. H. (1982). A single quantum cannot be cloned. Nature, 299, 802-803.",
      "Shor, P. W. (1995). Scheme for reducing decoherence in quantum computer memory. Physical Review A, 52, R2493-R2496.",
      "Steane, A. M. (1996). Error correcting codes in quantum theory. Physical Review Letters, 77, 793-797.",
      "Gottesman, D. (1997). Stabilizer codes and quantum error correction. PhD thesis, California Institute of Technology. arXiv:quant-ph/9705052.",
      "Aharonov, D., & Ben-Or, M. (2008). Fault-tolerant quantum computation with constant error rate. SIAM Journal on Computing, 38, 1207-1282.",
      "Terhal, B. M. (2015). Quantum error correction for quantum memories. Reviews of Modern Physics, 87, 307-346.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Google Quantum AI (2021). Exponential suppression of bit or phase errors with cyclic error correction. Nature, 595, 383-387.",
    ], links: [
      { label: "Paper: Scheme for Reducing Decoherence in Quantum Computer Memory", href: "/research/shor-error-correcting-code-1995" },
      { label: "Paper: Error Correcting Codes in Quantum Theory", href: "/research/steane-error-correcting-codes-1996" },
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Term: No-Cloning Theorem", href: "/dictionary/no-cloning-theorem" },
      { label: "Term: Surface Code", href: "/dictionary/surface-code" },
      { label: "Term: Stabilizer Code", href: "/dictionary/stabilizer-code" },
    ], words: 1114 },
  { slug: "quantum-physics-proves-healing-and-attraction", myth: "Quantum physics proves that consciousness, healing energy, or the law of attraction are real", category: "society", verdict: "False", summary: "Quantum mechanics is a tested theory of atoms, light, and electrons. It provides no support for healing energies, thought-based manifestation, or consciousness shaping reality, and quantum-branded wellness claims are not backed by evidence.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum physics has a reputation for being mysterious, and writers outside physics have used that mystery to support spiritual and self-help claims. The pattern goes back to the 1970s with books that linked quantum mechanics to Eastern mysticism, and it expanded with Deepak Chopra's Quantum Healing in 1989, the 2004 film What the Bleep Do We Know, and the law of attraction literature, which claims that thoughts shape reality through quantum effects. Products such as quantum healing devices, quantum wellness bracelets, and quantum coaching programs now use the word as a marketing label.",
          "The appeal is understandable. The measurement problem and entanglement are puzzling, and words such as observer and superposition suggest a role for the mind. But the leap from puzzling physics to claims about health and personal success is not supported by any evidence.",
        ] },
      { heading: "What the physics says", paragraphs: [
          "Quantum mechanics describes microscopic systems with exceptional accuracy, and its predictions are the basis of lasers, transistors, MRI, and atomic clocks. It makes specific, testable claims about energy levels, probabilities, and correlations. It says nothing about thoughts changing the outcomes of unrelated events, or about a universal energy that can be directed to heal. As discussed in the myth on conscious observers, the observer in quantum mechanics is a physical system, and no experiment has shown that minds influence quantum outcomes.",
          "A particular case concerns the brain. Some authors, such as Roger Penrose and Stuart Hameroff, proposed that quantum processes in microtubules underlie consciousness. Max Tegmark calculated in 2000 that the decoherence time of such states in the warm, wet brain is between 10 to the minus 13 and 10 to the minus 20 seconds, far shorter than the milliseconds of neural processes, which would prevent them from playing a role. Hameroff and coauthors replied in 2002, disputing the estimate, and the debate has continued, but no experiment has established that quantum computation occurs in the brain or underlies consciousness. These proposals are speculative scientific hypotheses, not established facts, and they are not claims about healing or manifestation.",
        ] },
      { heading: "Real quantum biology", paragraphs: [
          "There is a legitimate field of quantum biology. Experiments suggested that quantum coherence might help energy transfer in photosynthetic complexes, as reported by Engel and coauthors in 2007, although later work has debated how much of the observed oscillations are electronic coherence and how important it is for efficiency, as reviewed by Cao and coauthors in 2020. Birds may use a quantum effect in the radical pair mechanism to sense the direction of Earth's magnetic field, which is supported by several experiments but not yet settled, as reviewed by Hore and Mouritsen in 2016. Enzymes can use tunneling of protons and electrons. These are studies of physical processes in molecules, and they do not extend to claims about consciousness or healing. They show that quantum effects can matter in biology at small scales, while the large-scale claims of wellness marketing lack evidence.",
        ] },
      { heading: "Evidence for quantum healing claims", paragraphs: [
          "No controlled studies show that quantum healing devices or treatments work. Claims of energy balancing, quantum frequency therapy, or quantum bracelets that improve wellness do not hold up in tests, and regulatory agencies in several countries have taken action against deceptive claims for such products. Studies of the law of attraction find that positive thinking can have modest psychological effects on motivation and mood, which have conventional explanations, and no evidence supports the claim that thoughts attract events through physical effects. Physicians and scientific societies advise that serious health conditions require evidence-based treatment.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "There are two kernels of truth. First, quantum mechanics really does contain puzzles about measurement and reality that are debated by serious physicists, and it is reasonable to find them fascinating. Second, mind and health are linked in ways that science studies, such as the effects of stress, attitude, and placebo. But neither kernel supports the specific claims. The puzzles of quantum mechanics are about particles and measurements, and the psychology of health has its own, well-studied mechanisms.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth can cause real harm. People may spend money on ineffective products, delay medical care, or be exploited by scams that use scientific language to appear credible. It also undermines public trust in science by associating quantum mechanics with pseudoscience, and makes it harder for legitimate quantum technology to be understood. Scientists have a role in countering the misuse of their field, and consumers benefit from knowing how to recognize it.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask for the controlled evidence: a randomized trial, a replicated experiment, or a clear mechanism that follows from the physics. Notice whether the claim uses quantum words, such as energy, frequency, and vibration, without equations or measurements. Check whether the seller is a physicist or has published in peer-reviewed journals. Be especially careful with products that make health claims. Real quantum technology is described with specific numbers, such as qubits, error rates, and clock precision, and can be checked.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum physics provides no support for healing energies, manifestation by thought, or consciousness creating reality. Quantum-branded wellness claims should be treated as marketing, and genuine quantum biology concerns molecular processes, not mysticism.",
        ] },
    ], facts: [
      "Tegmark estimated in 2000 that quantum states in the brain would decohere in 10 to the minus 13 to 10 to the minus 20 seconds.",
      "Quantum biology studies photosynthesis, bird navigation, and enzyme tunneling, not healing energies.",
      "No controlled studies show that quantum healing devices work.",
      "The observer in quantum mechanics is a physical system, not a mind.",
    ], spot: [
      "Watch for products that use the word quantum without any technical specification.",
      "Ask for controlled studies and independent replication.",
      "Check whether the claims jump from particles to human health or fortune.",
      "Look at the credentials of those making claims.",
    ], faq: [
      { q: "Is there real quantum biology?", a: "Yes, but it studies molecular processes such as energy transfer in photosynthesis and magnetic sensing in birds." },
      { q: "Does the brain use quantum computing?", a: "Not established. Proposals exist, but decoherence arguments and the lack of evidence make it speculative." },
      { q: "Can thoughts change physical reality through quantum effects?", a: "No experiment supports this claim." },
    ], references: [
      "Tegmark, M. (2000). Importance of quantum decoherence in brain processes. Physical Review E, 61, 4194-4206.",
      "Hagan, S., Hameroff, S. R., & Tuszynski, J. A. (2002). Quantum computation in brain microtubules: Decoherence and biological feasibility. Physical Review E, 65, 061901.",
      "Engel, G. S., et al. (2007). Evidence for wavelike energy transfer through quantum coherence in photosynthetic systems. Nature, 446, 782-786.",
      "Cao, J., et al. (2020). Quantum biology revisited. Science Advances, 6, eaaz4888.",
      "Hore, P. J., & Mouritsen, H. (2016). The radical-pair mechanism of magnetoreception. Annual Review of Biophysics, 45, 299-344.",
      "Schlosshauer, M., Koehler, J., & Zeilinger, A. (2013). A snapshot of foundational attitudes toward quantum mechanics. Studies in History and Philosophy of Modern Physics, 44, 222-230.",
      "Bell, J. S. (1990). Against measurement. Physics World, 3(8), 33-41.",
    ], links: [
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Term: Measurement Collapse", href: "/dictionary/measurement-collapse" },
      { label: "Forecast: Quantum in Everyday Life: What Ordinary People Will Actually Use", href: "/future/quantum-consumer-future" },
    ], words: 1017 },
  { slug: "quantum-computers-already-break-encryption", myth: "Quantum computers can already break encryption, or will do so tomorrow", category: "security", verdict: "False", summary: "No quantum computer today can break the encryption that protects the internet. The largest numbers factored by Shor's algorithm on real hardware are tiny, and breaking RSA-2048 is estimated to need about a million high-quality qubits. The risk is real but lies years ahead.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Every few months a headline announces that quantum computers have broken RSA, or that a country has cracked military encryption. In 2022 a team in China reported factoring a 48-bit number with a superconducting processor and the media wrote that RSA was in danger. In 2024 a paper from Shanghai University used a D-Wave annealer to factor a 22-bit number and press accounts said that quantum computers had broken military-grade encryption. Warnings by governments about quantum threats add to the sense that the break has already happened or is about to.",
          "These stories mix up three things: small demonstrations, claims about future capability, and actual breaks. None of the demonstrations threatens real encryption, and the researchers themselves usually say so. The distance between a 22-bit or 48-bit number and the 2,048-bit numbers used in RSA is enormous.",
        ] },
      { heading: "What has actually been done", paragraphs: [
          "The largest numbers factored by a true implementation of Shor's algorithm are very small. The 2001 NMR experiment at IBM factored 15, and later experiments with ions, photons, and superconducting chips factored 15 and 21, as in the photonic experiment of Martín-López and coauthors in 2012. In 2013, Smolin, Smith, and Vargo showed that some such experiments used shortcuts that depended on knowing the answer, in a paper titled Oversimplifying quantum factoring. In 2019, Amico and coauthors found that Shor's algorithm run on IBM's cloud devices could not factor 35 reliably because of noise. Claims of larger factorizations use methods that are not Shor's algorithm, such as annealing or hybrid approaches, which do not scale. Aaronson commented in 2023 that a claim of factoring a 48-bit number with ten qubits was a sublinear-resource method that would not extend to cryptographic sizes.",
          "A different kind of claim came from a mathematician. In 2021, Claus Schnorr posted a paper claiming that a classical-quantum approach would break RSA, and the claim was found to be flawed within days. These episodes show why large claims need scrutiny from independent experts.",
        ] },
      { heading: "What it would take", paragraphs: [
          "Resource estimates show what would be needed. Breaking RSA-2048 needs thousands of logical qubits running billions of operations. Fowler and coauthors estimated in 2012 about a billion physical qubits, Gidney and Ekerå in 2019 about 20 million noisy qubits for eight hours, and Gidney in 2025 fewer than one million noisy qubits for under a week, with physical error rates of 0.1 percent and one-microsecond cycles. The best devices today have a hundred to a few thousand physical qubits, and error-corrected logical qubits number in the dozens at most. The gap is a factor of several hundred to a thousand in qubit count and several orders of magnitude in logical error rates, which is large but not unimaginable on a decade timescale.",
        ] },
      { heading: "How close is it?", paragraphs: [
          "No one knows. The Global Risk Institute's annual survey of experts asks for probabilities, and the answers range widely, with a substantial minority giving significant odds of a break within ten years. Public roadmaps from IBM and Quantinuum target machines with hundreds of logical qubits around 2029, still below what cryptanalysis needs. Our own judgment, set out in the forecasts section of this site, is that a break before 2030 is unlikely and that the middle to late 2030s is plausible. That timeline is the reason for urgency, not a sign that the break has already occurred.",
        ] },
      { heading: "Harvest now, decrypt later", paragraphs: [
          "There is a real way in which the myth contains truth. An adversary can record encrypted traffic today and decrypt it later with a future quantum computer. So data that must remain secret for decades is at risk now, even though no machine can break it yet. This is the reason governments and companies are migrating key exchange to post-quantum algorithms already. Confusing this with a present break leads to panic, and dismissing it leads to complacency.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computing is a real threat to RSA and elliptic-curve cryptography, and the progress in resource estimates and hardware means that the threat is taken seriously by agencies. The myth errs in timing, not in direction. A good summary is that the threat is future, certain in principle, and uncertain in date.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth has two harmful effects. If people believe that encryption is already broken, they may lose trust in online banking and messaging, or fall for scams offering quantum-proof products. If they later learn that the claims were false, they may conclude that the whole quantum threat is exaggerated and fail to prepare. Both reactions are costly. An accurate view supports calm, steady migration.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what number was factored and how, and whether the method scales. A claim about a number of fewer than 100 bits is not a threat to RSA. Ask whether independent cryptographers have confirmed the result, and check the statements of the researchers, which usually include caveats. Then add that the real response is to migrate to post-quantum algorithms on a schedule, which is already under way.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. No quantum computer can break today's encryption, and headlines claiming otherwise describe small experiments or flawed methods. The threat is real for the future, and the right response is orderly migration.",
        ] },
    ], facts: [
      "Genuine Shor's algorithm experiments have factored only tiny numbers such as 15 and 21.",
      "Gidney estimated in 2025 that RSA-2048 needs fewer than one million noisy qubits and under a week.",
      "Today's largest devices have hundreds to a few thousand physical qubits and dozens of logical qubits.",
      "Harvest now, decrypt later makes long-lived secrets vulnerable before a machine exists.",
    ], spot: [
      "Check the bit length of the number factored in any claim.",
      "Ask whether the method is Shor's algorithm or a shortcut that does not scale.",
      "Look for confirmation from independent cryptographers.",
      "Be wary of headlines that mention military-grade encryption broken.",
    ], faq: [
      { q: "Has RSA been broken by a quantum computer?", a: "No. Only tiny numbers have been factored with quantum methods." },
      { q: "When might RSA be broken?", a: "Estimates vary, with the mid to late 2030s considered plausible and earlier dates possible but less likely." },
      { q: "Should I worry now?", a: "Organizations with long-lived secrets should plan migration now, while ordinary users mostly need to keep software updated." },
    ], references: [
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
      "Vandersypen, L. M. K., et al. (2001). Experimental realization of Shor's quantum factoring algorithm using nuclear magnetic resonance. Nature, 414, 883-887.",
      "Martín-López, E., et al. (2012). Experimental realization of Shor's quantum factoring algorithm using qubit recycling. Nature Photonics, 6, 773-776.",
      "Smolin, J. A., Smith, G., & Vargo, A. (2013). Oversimplifying quantum factoring. Nature, 499, 163-165.",
      "Amico, M., Saleem, Z. H., & Kumph, M. (2019). Experimental study of Shor's factoring algorithm using the IBM Q Experience. Physical Review A, 100, 012305.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Mosca, M., & Piani, M. Quantum threat timeline report. Global Risk Institute (annual).",
    ], links: [
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1038 },
  { slug: "quantum-breaks-all-encryption-including-aes", myth: "Quantum computers will break all encryption, including AES and hashes", category: "security", verdict: "Mostly false", summary: "Shor's algorithm breaks public-key systems such as RSA and elliptic curves, but symmetric ciphers like AES and hash functions are only weakened by Grover's algorithm to the equivalent of half the key length. AES-256 and SHA-256 remain secure against known quantum attacks.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Many articles say that quantum computers will break all encryption. The statement is a simplification of a real threat. It blends together two different kinds of cryptography, public-key and symmetric, and two different quantum algorithms, Shor's and Grover's, whose effects differ greatly. The result is a belief that nothing will be safe, that passwords, files, and bank records are all doomed.",
          "Cryptographers draw sharp lines. Public-key cryptography, used to agree on keys and sign messages, is vulnerable in a fundamental way. Symmetric cryptography, used to encrypt the bulk of data once a key is shared, and hash functions are affected only by a speedup that can be countered by larger parameters.",
        ] },
      { heading: "What Shor's algorithm breaks", paragraphs: [
          "Shor's algorithm solves the integer factoring and discrete logarithm problems in polynomial time, which destroys RSA, Diffie-Hellman, and elliptic curve cryptography. These systems rely on mathematical structure, and the quantum algorithm exploits it. Increasing the key size does not help much, because the cost of the attack grows only polynomially, as discussed in the myth on bigger keys. That is why the world is switching to new public-key algorithms based on other problems, such as lattices, whose security is not known to be threatened by any quantum algorithm.",
        ] },
      { heading: "What Grover's algorithm does to symmetric cryptography", paragraphs: [
          "Symmetric ciphers such as AES have no known algebraic structure of the kind that Shor exploits. The best general attack is a search over keys. A classical computer needs about 2 to the k trials for a k-bit key. Grover's algorithm needs about 2 to the k over 2 evaluations, a quadratic speedup, so AES-128 would drop to about 64 bits of security against a quantum attacker and AES-256 to about 128 bits. A 128-bit level of security is considered safe, which is why NIST and the NSA consider AES-256 quantum-resistant.",
          "In practice, the Grover attack on AES-128 is far harder than the formula suggests. Grover's algorithm cannot be parallelized well: Zalka showed in 1999 that using many quantum computers in parallel gives only a square-root gain in the number of machines. The algorithm must run its roughly 2 to the 64 iterations in sequence on each machine, and each iteration requires evaluating AES inside a fault-tolerant circuit of thousands of operations. Even if a quantum computer could do a million iterations per second, which would be very fast for an error-corrected machine, 2 to the 64 iterations would take about 585,000 years. Jaques and coauthors computed detailed circuits for key search on AES in 2020 and found costs that make the attack on AES-128 impractical for the foreseeable future, though margins are thinner than for AES-256.",
        ] },
      { heading: "Hash functions", paragraphs: [
          "Hash functions such as SHA-256 and SHA-3 are used for integrity, signatures, and password storage. Finding a preimage, an input for a given hash, takes about 2 to the 256 classical trials and about 2 to the 128 with Grover, which is still infeasible. Collision finding is classically about 2 to the 128 for SHA-256. A quantum algorithm by Brassard, Høyer, and Tapp could in principle find collisions in about 2 to the 85 steps but needs enormous memory, and Bernstein argued in 2009 that when the cost of memory is counted, it gives no advantage over classical methods. For these reasons, standard hash functions remain in use, and hash-based signatures such as SLH-DSA, standardized in 2024, are among the most conservative post-quantum choices.",
        ] },
      { heading: "What is recommended", paragraphs: [
          "Practical advice is straightforward. Use AES-256 where long-term security is important, and prefer SHA-384 or SHA-512 or SHA-3 where larger outputs are cheap. NIST's post-quantum security categories use the cost of AES key search and SHA-3 collision search as reference points, treating AES-128 as a baseline. The NSA's CNSA 2.0 requires AES-256 and SHA-384 or SHA-512 for national security systems. The main migration effort is in public-key cryptography, where algorithms must be replaced.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Symmetric cryptography is affected: key sizes need to be adequate, and 128-bit keys give a smaller safety margin than before. And protocols that use symmetric primitives in ways that rely on quantum-vulnerable key exchange are at risk because of the exchange, not because of AES. So the statement that quantum computers affect encryption broadly is true, while the statement that they break all of it is not.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth can cause misallocated effort. Organizations may plan to replace all their cryptography, or conversely conclude that the threat is overblown because AES survives. The correct plan is targeted: replace key exchange and signatures, keep strong symmetric algorithms, and review key lengths. It also affects the public's trust: believing that everything will be broken may reduce the willingness to use encryption at all, which would be worse than the quantum threat.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain the difference between public-key and symmetric cryptography with an analogy: public-key systems are like locks whose design has a mathematical weakness that a new tool exploits, while symmetric ciphers are like safes whose only attack is trying combinations, which a new tool speeds up modestly. Then state that doubling the key length restores the margin. If someone claims that AES-256 is broken by quantum computers, ask for the algorithm and the cost estimate.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Quantum computers threaten public-key cryptography seriously, but symmetric ciphers and hash functions remain secure with adequate parameters. AES-256 and SHA-256 or larger are considered safe against known quantum attacks.",
        ] },
    ], facts: [
      "Grover's algorithm reduces the effective strength of a k-bit symmetric key to about k over 2 bits.",
      "Zalka proved in 1999 that Grover's algorithm cannot be parallelized efficiently.",
      "At a million iterations per second, 2 to the 64 Grover iterations would take about 585,000 years.",
      "NIST and the NSA treat AES-256 as quantum-resistant.",
    ], spot: [
      "Watch for claims that all encryption will be broken.",
      "Check whether the claim distinguishes public-key from symmetric cryptography.",
      "Ask for the algorithm and cost estimate behind claims about AES.",
      "Look for advice that recommends specific parameters, such as AES-256.",
    ], faq: [
      { q: "Is AES-128 safe against quantum computers?", a: "It is considered adequate for most purposes, with about 64 bits of quantum security in the worst case, but AES-256 gives a larger margin." },
      { q: "Do I need to replace my hash functions?", a: "Usually not. SHA-256 and SHA-3 remain secure, and larger outputs are an inexpensive precaution." },
      { q: "What actually needs replacing?", a: "Public-key algorithms for key exchange and digital signatures." },
    ], references: [
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Zalka, C. (1999). Grover's quantum searching algorithm is optimal. Physical Review A, 60, 2746-2751.",
      "Bernstein, D. J. (2009). Cost analysis of hash collisions: Will quantum computers make SHARCS obsolete? SHARCS 2009 workshop.",
      "Jaques, S., Naehrig, M., Roetteler, M., & Virdia, F. (2020). Implementing Grover oracles for quantum key search on AES and LowMC. EUROCRYPT 2020, LNCS 12106, 280-310.",
      "National Institute of Standards and Technology (2016). Submission requirements and evaluation criteria for the post-quantum cryptography standardization process.",
      "National Security Agency (2022). Commercial National Security Algorithm Suite 2.0 advisory.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1065 },
  { slug: "quantum-cryptography-is-unhackable", myth: "Quantum cryptography is completely unhackable", category: "security", verdict: "Misleading", summary: "The protocols of quantum key distribution are provably secure under ideal assumptions, but real devices have flaws that attackers have exploited. Security depends on implementation, authentication, and certification, so it is better described as very strong than unhackable.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum key distribution is often described in marketing and media as unbreakable, unhackable, or guaranteed by the laws of physics. The claim has a basis: the BB84 protocol and its relatives are proven secure against any attack permitted by quantum mechanics, so an eavesdropper who tries to measure the photons disturbs them in a way that the legitimate parties can detect. Shor and Preskill gave a simple proof in 2000, and many later proofs cover practical variations.",
          "But a proof applies to a mathematical model, and real systems are built from lasers, detectors, fibers, and software that differ from the model. Security of the whole system is therefore a matter of how closely it matches the assumptions, and of everything else around it.",
        ] },
      { heading: "How real systems have been attacked", paragraphs: [
          "The best-known attacks target the detectors. Lydersen and coauthors showed in 2010 that by shining bright light on the single-photon detectors of commercial systems, an attacker could blind them and control their outputs, learning the key without being noticed. Other attacks exploit imperfect sources that sometimes emit more than one photon, which allows photon-number-splitting, and timing and wavelength differences that leak information, as well as Trojan horse attacks in which the attacker sends light into the transmitter and analyzes what is reflected. Xu and coauthors reviewed these and the countermeasures in 2020.",
          "These attacks were found by researchers, mostly in laboratories, and many were reported to vendors and fixed. They show that a system's practical security depends on careful engineering and testing, as for any security technology. The attacks do not break the theory of quantum key distribution but the match between theory and device.",
        ] },
      { heading: "Countermeasures and better protocols", paragraphs: [
          "The field has responded. Decoy-state protocols, proposed by Hwang in 2003 and made practical by Lo, Ma, and Chen in 2005, defend against photon-number attacks. Measurement-device-independent QKD, proposed by Lo, Curty, and Qi in 2012, removes all detector vulnerabilities by having the detection done by an untrusted relay. Device-independent QKD goes further, certifying security from a Bell inequality violation without trusting the devices at all, though at low key rates. Standards bodies have developed evaluation schemes, such as the ETSI protection profile and ISO and IEC standard 23837 published in 2023, and certification labs test systems against known attacks.",
        ] },
      { heading: "Other weak points", paragraphs: [
          "Even a perfect quantum link does not make a whole system secure. QKD requires an authenticated classical channel, which is usually provided by pre-shared secret keys or classical signatures, so a weakness in authentication undermines the entire scheme. Long-distance networks often use trusted relay nodes that hold the keys in the clear, so security depends on the physical and operational protection of those nodes. The keys produced must be used with encryption algorithms and software that can have bugs. And attackers can target people, endpoints, and supply chains, which no physics prevents.",
          "For these reasons, the US National Security Agency and the UK National Cyber Security Centre have said that they do not recommend QKD for general use, favoring post-quantum cryptography, which has none of these hardware requirements. Other agencies, including some in Europe and Asia, accept QKD for specific high-assurance links, often in combination with post-quantum cryptography.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The theory is strong. Against an eavesdropper limited only by the laws of quantum mechanics, a properly implemented protocol detects attacks, which is not true of classical key exchange based on computational assumptions. For some threat models, such as adversaries with unlimited computing power, QKD offers something that post-quantum cryptography cannot. Calling it very strong in principle is fair. The overstatement is in extending the guarantee to every real system.",
        ] },
      { heading: "A practical checklist for buyers", paragraphs: [
          "An organization considering a QKD product should ask a short list of questions. Has the system been evaluated by an independent laboratory against a published protection profile, and does the evaluation cover side channels and known detector attacks? How is the classical channel authenticated, and what happens to security if the pre-shared secret is compromised? Does the design rely on trusted relay nodes, and how are they physically protected? What is the key rate at the intended distance, and what is the total cost per link compared with a post-quantum software solution?",
          "It is also worth asking how the keys will be used and whether a hybrid design, combining QKD keys with post-quantum key exchange, is available. These questions do not imply that QKD is a poor choice, only that its security depends on the details, and that a vendor who answers them clearly is more trustworthy than one who relies on the word unhackable.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Customers who believe that quantum cryptography is unhackable may neglect other security measures, buy expensive hardware where software upgrades would do, or accept inadequate testing. Overselling can also damage trust in the field if a vulnerability is publicized. A balanced description helps customers to decide where QKD fits and to ask for certification. It is also a reminder for any security technology: claims of absolute security are a warning sign.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Say that the protocols are provably secure in theory and that real implementations must be tested. Ask whether the system has been evaluated against known attacks, whether authentication is handled, and whether trusted nodes are used. Compare with post-quantum cryptography, which can be deployed in software, and consider hybrid designs that use both.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. Quantum key distribution offers strong theoretical security, but real systems have been hacked through flawed devices, and security also depends on authentication, trusted nodes, and endpoints. Unhackable is not an accurate description.",
        ] },
    ], facts: [
      "Shor and Preskill proved the security of BB84 in 2000 for error rates below about 11 percent in the ideal model.",
      "Lydersen and coauthors blinded detectors in commercial QKD systems in 2010.",
      "Measurement-device-independent QKD, proposed in 2012, removes detector vulnerabilities.",
      "The NSA and the UK NCSC do not recommend QKD for general use.",
    ], spot: [
      "Watch for words such as unhackable or guaranteed by physics.",
      "Ask whether the product has been certified against known attacks.",
      "Check how authentication is handled and whether trusted nodes are used.",
      "Consider whether post-quantum cryptography would meet the need at lower cost.",
    ], faq: [
      { q: "Is QKD secure?", a: "Its protocols are provably secure in theory, and real systems need careful implementation and testing." },
      { q: "Has QKD been hacked?", a: "Researchers have attacked commercial devices in the laboratory, and countermeasures have followed." },
      { q: "Should I use QKD or post-quantum cryptography?", a: "Most users should use post-quantum cryptography, with QKD reserved for specific high-assurance links." },
    ], references: [
      "Shor, P. W., & Preskill, J. (2000). Simple proof of security of the BB84 quantum key distribution protocol. Physical Review Letters, 85, 441-444.",
      "Lydersen, L., et al. (2010). Hacking commercial quantum cryptography systems by tailored bright illumination. Nature Photonics, 4, 686-689.",
      "Lo, H.-K., Ma, X., & Chen, K. (2005). Decoy state quantum key distribution. Physical Review Letters, 94, 230504.",
      "Lo, H.-K., Curty, M., & Qi, B. (2012). Measurement-device-independent quantum key distribution. Physical Review Letters, 108, 130503.",
      "Xu, F., Ma, X., Zhang, Q., Lo, H.-K., & Pan, J.-W. (2020). Secure quantum key distribution with realistic devices. Reviews of Modern Physics, 92, 025002.",
      "Pirandola, S., et al. (2020). Advances in quantum cryptography. Advances in Optics and Photonics, 12, 1012-1236.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Paper: Simple Proof of Security of the BB84 Quantum Key Distribution Protocol", href: "/research/shor-preskill-bb84-security-proof-2000" },
      { label: "Paper: Decoy State Quantum Key Distribution", href: "/research/lo-ma-chen-decoy-state-qkd-2005" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
      { label: "Forecast: Quantum Key Distribution: Where It Fits Beside Post-Quantum Cryptography", href: "/future/qkd-future" },
    ], words: 1083 },
  { slug: "post-quantum-and-quantum-cryptography-same", myth: "Post-quantum cryptography and quantum cryptography are the same thing", category: "security", verdict: "False", summary: "Post-quantum cryptography is ordinary software that runs on ordinary computers and resists quantum attacks. Quantum cryptography, such as key distribution, uses quantum physics and special hardware. The two are different tools that address the quantum threat in different ways.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The names are confusingly similar. Both involve quantum computers, both appear in the same news stories, and both are described as protecting against quantum threats. Vendors sometimes use quantum-safe as a label for either, and some articles use the terms interchangeably. As a result, many people believe that defending against quantum computers requires quantum technology.",
          "The two approaches are in fact different in kind, in how they work, what they need, and what they offer. Understanding the difference is important for anyone planning security.",
        ] },
      { heading: "Post-quantum cryptography", paragraphs: [
          "Post-quantum cryptography, also called quantum-resistant or quantum-safe cryptography, consists of classical algorithms designed to resist attacks by both classical and quantum computers. They are based on mathematical problems that are not known to be easy for quantum computers, such as finding short vectors in lattices, decoding random error-correcting codes, or inverting hash functions. They run on ordinary processors, in software or in conventional hardware, and are used through the same kinds of interfaces as RSA and elliptic curve cryptography.",
          "NIST standardized the first algorithms in August 2024: ML-KEM, based on lattices, for key establishment in FIPS 203; ML-DSA, also lattice-based, for signatures in FIPS 204; and SLH-DSA, based on hash functions, for signatures in FIPS 205. In March 2025 it selected HQC, a code-based scheme, as a backup key-establishment algorithm. Browsers, cloud providers, and messaging applications have begun deploying them, and governments have set migration deadlines in 2030 to 2035.",
        ] },
      { heading: "Quantum cryptography", paragraphs: [
          "Quantum cryptography usually means quantum key distribution, in which two parties produce a shared secret key by exchanging quantum states, typically photons, and the laws of quantum mechanics ensure that eavesdropping is detectable. It requires special hardware: single-photon sources and detectors, and a quantum channel such as dedicated fiber or free space. Its range is limited, networks use trusted relay nodes or satellites, and it still depends on classical authentication. The related field also includes quantum random number generators and, in research, protocols such as quantum digital signatures and device-independent cryptography.",
          "QKD's security rests on physics and not on assumptions about computational hardness, which gives it a property that no post-quantum algorithm can claim: security against adversaries with unlimited computing power for the key exchange. But it solves only part of the problem, key agreement, and does not provide digital signatures or the broad functionality of public-key cryptography.",
        ] },
      { heading: "A side-by-side comparison", paragraphs: [
          "The differences are practical. Post-quantum cryptography runs on existing hardware and can be deployed through software updates, scales to the whole internet, and replaces both key exchange and signatures, but its security relies on mathematical assumptions that could in principle be broken, as the 2022 attack on SIKE showed. Quantum key distribution needs new hardware, works over limited distances without relays, serves only key exchange, and costs more, but its security does not rely on computational assumptions. Agencies including the NSA and the UK NCSC favor post-quantum cryptography for general use and are cautious about QKD, while some others consider QKD for special links.",
          "A third piece is quantum random number generation, which provides entropy for keys and is a component of both approaches, though it is not a defense against quantum attack by itself.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Both are responses to the quantum era, and both are parts of the larger picture of quantum-safe security. In some designs they are used together, with a session key derived from both a post-quantum exchange and a QKD key, so that security holds if either one is sound. So they are related in purpose, and the terms are sometimes used loosely in marketing. But they are not the same.",
        ] },
      { heading: "How they appear in real products", paragraphs: [
          "In everyday products, the difference is easy to see. When a browser connects to a website using the hybrid key exchange that combines X25519 with ML-KEM, it is using post-quantum cryptography: no quantum hardware is involved on either side, and the connection looks like any other. When a bank in a city links two data centers through a pair of QKD boxes connected by dedicated fiber, it is using quantum cryptography: the boxes contain lasers and single-photon detectors, and the fiber carries quantum signals alongside, or separate from, classical traffic.",
          "Messaging apps such as Signal and iMessage have added post-quantum key agreement in software, and users notice nothing except that the app has been updated. A satellite that sends keys to ground stations, like the Micius mission, is quantum cryptography at global scale. Because the two kinds of technology are so different in what they require, a buyer should always ask which one is being offered, and a policymaker should plan for both separately.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The confusion has practical costs. Organizations may think that they need to buy quantum hardware to be safe, and spend money on QKD when software migration to post-quantum algorithms would be more effective. Others may dismiss the quantum threat, thinking that defense requires technology they cannot access. Clear terms help with budgeting and with procurement, and they help regulators write clear rules.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Use a short rule: post-quantum cryptography is math that runs on normal computers; quantum cryptography is physics that needs special equipment. When someone asks which to use, the answer for most people is post-quantum cryptography. If a vendor says that its product is quantum-safe, ask which of the two it is, and which standards and certifications apply.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Post-quantum cryptography and quantum cryptography are different technologies with different purposes. The first is classical software that resists quantum attacks, and the second uses quantum physics to establish keys.",
        ] },
    ], facts: [
      "NIST published the first post-quantum standards, FIPS 203, 204, and 205, in August 2024.",
      "Post-quantum algorithms run on ordinary computers and require no quantum hardware.",
      "Quantum key distribution needs special photonic hardware and provides only key exchange.",
      "The NSA and UK NCSC favor post-quantum cryptography for general use.",
    ], spot: [
      "Look for products described as quantum-safe without saying which approach they use.",
      "Ask whether the product needs special hardware.",
      "Check which standards the algorithms follow.",
      "Consider whether a hybrid design is used.",
    ], faq: [
      { q: "Do I need a quantum computer to use post-quantum cryptography?", a: "No. It runs on ordinary computers and phones." },
      { q: "Is QKD better than post-quantum cryptography?", a: "It offers different guarantees and has practical limits. Most users should rely on post-quantum cryptography." },
      { q: "What does quantum-safe mean?", a: "It usually means resistant to attacks by quantum computers, through either approach." },
    ], references: [
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
      "National Institute of Standards and Technology (2025). NIST selects HQC as fifth algorithm for post-quantum encryption. NIST news release, 11 March 2025.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
      "Bennett, C. H., & Brassard, G. (1984). Quantum cryptography: Public key distribution and coin tossing. Proceedings of IEEE International Conference on Computers, Systems and Signal Processing, 175-179.",
      "Pirandola, S., et al. (2020). Advances in quantum cryptography. Advances in Optics and Photonics, 12, 1012-1236.",
      "Castryck, W., & Decru, T. (2023). An efficient key recovery attack on SIDH. EUROCRYPT 2023, LNCS 14008, 423-447.",
    ], links: [
      { label: "Paper: Quantum Cryptography: Public Key Distribution and Coin Tossing", href: "/research/bennett-brassard-bb84-1984" },
      { label: "Paper: An Efficient Key Recovery Attack on SIDH", href: "/research/castryck-decru-sidh-break-2022" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Term: Quantum Key Distribution", href: "/dictionary/quantum-key-distribution" },
      { label: "Forecast: Migrating to Post-Quantum Cryptography: The Engineering Reality", href: "/future/pqc-migration-engineering-future" },
      { label: "Forecast: Quantum Key Distribution: Where It Fits Beside Post-Quantum Cryptography", href: "/future/qkd-future" },
    ], words: 1073 },
  { slug: "no-need-to-migrate-until-quantum-computer-exists", myth: "There is no need to switch to post-quantum cryptography until a quantum computer actually exists", category: "security", verdict: "False", summary: "Data encrypted today can be recorded and decrypted later, and migrating cryptography takes many years. If your data must stay secret longer than the time until a quantum computer arrives plus the time to migrate, you are already late.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The argument sounds sensible: why spend money fixing a problem that does not exist? Skeptics point out that no quantum computer can break RSA today, that timelines are uncertain, and that new cryptography is untested. Some believe that migrating early is wasteful because standards may change, and that it is better to wait until the threat is concrete.",
          "The logic overlooks two facts: attackers can store encrypted data now and read it later, and cryptographic migrations are slow. Together they mean that the right time to start is well before the machine exists.",
        ] },
      { heading: "Harvest now, decrypt later", paragraphs: [
          "An adversary who can intercept encrypted communications, for example a government with access to network backbones or a criminal who steals encrypted databases, can keep the ciphertext and wait. When a quantum computer capable of breaking the key exchange becomes available, the stored data can be decrypted. For data with a long secrecy requirement, such as state secrets, medical and genetic records, trade secrets, intellectual property, and legal and financial records, the damage occurs in the future, but the exposure begins today.",
          "Government agencies treat this threat as real. The US NSM-10 memorandum of 2022, NSA's CNSA 2.0, CISA guidance, the UK NCSC, and the European Commission all cite it as a reason for early action. Browsers and large providers deployed hybrid post-quantum key exchange in 2023 and 2024 for exactly this reason, because key exchange protects the data in transit against recording.",
        ] },
      { heading: "Mosca's inequality", paragraphs: [
          "Michele Mosca formulated the timing problem in a simple way. Let x be the number of years that the data must remain secure, y the number of years needed to migrate the systems to quantum-safe cryptography, and z the number of years until a quantum computer can break current cryptography. If x plus y is greater than z, then data will be exposed before it is no longer sensitive. The uncertainty in z is the reason for caution: since no one can say that z is larger than, for instance, 15 years, any organization with x plus y of 15 years or more is at risk. Many organizations have secrecy requirements of 10 to 30 years and migration times of 5 to 10 years.",
        ] },
      { heading: "Migrations take a long time", paragraphs: [
          "Cryptographic transitions have always been slow. NIST deprecated SHA-1 for digital signatures in 2011, theoretical attacks had been known since 2005, yet a practical collision was demonstrated by Stevens and coauthors in 2017, and some systems still used SHA-1 for years afterward. The triple-DES cipher was found vulnerable to the Sweet32 attack in 2016 and was still deployed in many places. Replacing a widely used algorithm involves finding every use, updating libraries, protocols, devices, and certificates, testing for compatibility, and coordinating with partners and customers. Embedded devices, industrial systems, and satellites may take a decade or more.",
          "Post-quantum migration is larger than previous ones, because it changes the size of keys and signatures, affects protocols, and touches hardware security modules and public key infrastructure. Government timelines reflect this: NIST proposes deprecating quantum-vulnerable algorithms by 2030 and disallowing them by 2035, and the EU roadmap asks for national plans by 2026 and high-risk systems by 2030.",
        ] },
      { heading: "Is early migration risky?", paragraphs: [
          "The concern about untested algorithms is legitimate. The SIKE break of 2022 showed that a candidate that had survived years of scrutiny could be broken in an hour on a laptop. The answer is hybrid constructions, which combine a classical algorithm with a post-quantum one, so that the combination is secure if either holds. This is the approach used by Chrome, Cloudflare, Signal, and Apple, and it protects against both the quantum threat and an unexpected flaw in the new algorithm. The cost of early migration is therefore modest, while the cost of late migration may be large.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Not every organization faces the same urgency. A system that handles data with a short lifetime, such as a one-time authentication token, is much less exposed than a archive of medical records. For such systems, waiting for standards to mature and for vendor support is reasonable. And it is right that spending should be prioritized by risk. The myth is wrong in saying that nobody needs to act until the machine exists.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Delay is the main way to turn a manageable risk into a crisis. Organizations that start late will face higher costs, rushed projects, and larger exposure. Governments have already set deadlines, and regulated companies will need to comply. Starting with an inventory is cheap and gives choices. For individuals, the main action is to keep software updated and to use services that adopt post-quantum protection.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask how long the data must remain secret and how long migration would take, and compare to the plausible timeline of a quantum computer. Point out that recorded data cannot be protected retroactively. Suggest a first step: an inventory of cryptographic use and a plan for hybrid key exchange in external systems. For those who say it is too early, note that the deadlines of 2030 and 2035 are only a few years away in engineering terms.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Waiting for a quantum computer to exist leaves recorded data exposed and ignores the long lead time of cryptographic migration. Prudent organizations are already inventorying and migrating, starting with key exchange.",
        ] },
    ], facts: [
      "Mosca's inequality says that you are at risk if data lifetime plus migration time exceeds the time until a cryptographically relevant quantum computer.",
      "NIST proposes deprecating quantum-vulnerable algorithms by 2030 and disallowing them by 2035.",
      "A practical SHA-1 collision was shown in 2017, six years after its deprecation for signatures by NIST.",
      "Chrome, Cloudflare, Signal, and Apple deployed hybrid post-quantum key exchange in 2023 and 2024.",
    ], spot: [
      "Watch for arguments that nothing needs to be done until a machine exists.",
      "Ask how long the data must stay secret.",
      "Check whether the migration time has been estimated.",
      "Look for hybrid solutions that reduce risk.",
    ], faq: [
      { q: "What is harvest now, decrypt later?", a: "Recording encrypted data now to decrypt it later when a quantum computer is available." },
      { q: "What should I do first?", a: "Make an inventory of where cryptography is used and rank systems by how long their data must stay secret." },
      { q: "Is it safe to use new algorithms now?", a: "Hybrid designs that combine classical and post-quantum algorithms reduce the risk of a flaw in the new algorithm." },
    ], references: [
      "Mosca, M. (2018). Cybersecurity in an era with quantum computers: Will we be ready? IEEE Security and Privacy, 16(5), 38-41.",
      "National Institute of Standards and Technology (2024). NIST IR 8547 (initial public draft): Transition to post-quantum cryptography standards.",
      "The White House (2022). National Security Memorandum on promoting United States leadership in quantum computing while mitigating risks to vulnerable cryptographic systems (NSM-10).",
      "Stevens, M., Bursztein, E., Karpman, P., Albertini, A., & Markov, Y. (2017). The first collision for full SHA-1. CRYPTO 2017, LNCS 10401, 570-596.",
      "Bhargavan, K., & Leurent, G. (2016). On the practical (in-)security of 64-bit block ciphers: Collision attacks on HTTP over TLS and OpenVPN. ACM CCS 2016, 456-467.",
      "CISA, NSA, and NIST (2023). Quantum-readiness: Migration to post-quantum cryptography.",
      "Castryck, W., & Decru, T. (2023). An efficient key recovery attack on SIDH. EUROCRYPT 2023, LNCS 14008, 423-447.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Paper: An Efficient Key Recovery Attack on SIDH", href: "/research/castryck-decru-sidh-break-2022" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Forecast: Migrating to Post-Quantum Cryptography: The Engineering Reality", href: "/future/pqc-migration-engineering-future" },
      { label: "Forecast: A Practical Roadmap for Companies: How to Prepare for Quantum", href: "/future/quantum-enterprise-readiness-future" },
    ], words: 1070 },
  { slug: "governments-have-secret-quantum-computer", myth: "Governments already have a secret quantum computer that can break encryption", category: "security", verdict: "Unproven", summary: "No evidence shows that any government has a cryptographically relevant quantum computer, and several reasons make it unlikely. But classified programs exist, and the possibility that capabilities arrive earlier than public estimates is a reason to migrate to post-quantum cryptography early.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The idea has a natural logic. Intelligence agencies have a long history of cryptographic secrecy: the British codebreakers at Bletchley Park kept the breaking of Enigma secret for decades, and the NSA is believed to have been ahead of academic cryptography in the 1970s. In 2014, documents leaked by Edward Snowden showed that the NSA had a research program, called Penetrating Hard Targets, with a budget of about 80 million dollars, aimed at building a quantum computer that could break encryption. From these facts, people infer that some agency must already have succeeded and is reading everyone's messages.",
          "The inference is possible but not supported by evidence. The same documents described the effort as research, with no sign that the agency was close, and public progress by academic and corporate groups has been well documented.",
        ] },
      { heading: "What the evidence suggests", paragraphs: [
          "Several observations argue against a hidden machine that is far ahead of the public state of the art. First, building a cryptographically relevant machine requires an enormous engineering effort: on the order of a million high-quality physical qubits, or thousands of logical qubits, with cryogenic or laser systems, control electronics, and decoders that do not yet exist in public. The public record shows that the leading efforts, at IBM, Google, Quantinuum, and others, with thousands of engineers and billions of dollars, are at the stage of tens of logical qubits. A secret program would need to have solved the same hard problems without the open exchange of ideas that drives progress, which is unlikely, although not impossible.",
          "Second, the supply chain is visible. Dilution refrigerators, lasers, superconducting cables, and fabrication equipment are sold by a small number of companies, and a large secret program would need large quantities. Third, the talent is concentrated in universities and companies that publish, and the top researchers in error correction work in the open. Fourth, progress in the open literature has been steady and predictable, with milestones such as below-threshold error correction arriving in 2024 in a published experiment. A secret program with a decisive lead would likely show up as a break in the pattern, such as sudden withdrawal of researchers or unusual purchasing, which has not been observed.",
          "Finally, agencies' behavior is informative. The NSA published CNSA 2.0 in 2022, requiring migration to post-quantum algorithms for national security systems, and governments set deadlines that stretch to the mid-2030s. That timeline is consistent with a belief that a machine is years away, though it does not prove it.",
        ] },
      { heading: "Why the possibility cannot be ruled out", paragraphs: [
          "It is impossible to prove a negative about classified work. Governments could in principle have achieved algorithmic or hardware advances that are not public, particularly in areas such as error correction and architecture, where a small improvement can reduce qubit counts by large factors. History offers examples of classified work running ahead of public knowledge, for instance in public-key cryptography, discovered at GCHQ in the early 1970s and revealed in 1997. Our assessment is that the chance of a classified machine that can break RSA-2048 in 2026 is very low, but not zero, and that a classified lead of a few years in some component is more plausible than a complete machine.",
        ] },
      { heading: "Claims by others", paragraphs: [
          "Related myths include claims that a company or a university has secretly or openly broken RSA with a quantum computer. As described elsewhere on this site, such claims have so far been based on small numbers or flawed methods. Some conspiracy narratives also claim that quantum computers have broken Bitcoin or that agencies are quietly stealing coins. There is no evidence for this, and the unspent Bitcoin addresses that would be the targets have not moved in suspicious ways.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Classified research on quantum computing exists, as the 2014 documents showed, and several governments fund such programs. Secrecy limits our knowledge of what has been achieved. It is also true that the date of a cryptographic break is uncertain and that estimates have repeatedly fallen. These facts justify caution, though not the belief that a break has already happened.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth can lead to two errors. People may conclude that all encryption is already broken and give up on security, which would be harmful, since current cryptography still protects against all known adversaries. Or they may use the myth to argue that quantum threats are conspiracy theories. The sensible response is to assume that the capability could arrive earlier than public estimates and to migrate accordingly, which is exactly what governments are doing, while not assuming that it already exists.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask for evidence beyond secrecy: what would the machine need, and where would its components come from? Note that the public progress is well documented and that open research is ahead of what a secret program could easily replicate. Then say that, since no one can rule out surprises, the best policy is to migrate to post-quantum cryptography on schedule, which protects against both an early public machine and a hidden one.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Unproven, and unlikely. There is no evidence that any government has a machine that can break encryption, and the engineering and supply-chain considerations argue against it. Because the possibility cannot be excluded, early migration to post-quantum cryptography is prudent.",
        ] },
    ], facts: [
      "Documents leaked in 2014 described a roughly 80 million dollar NSA research program on quantum computing for cryptanalysis.",
      "Public-key cryptography was discovered at GCHQ in the early 1970s and disclosed in 1997.",
      "The NSA's CNSA 2.0 of 2022 requires migration to post-quantum algorithms for national security systems.",
      "Leading public efforts have tens of logical qubits, far from cryptographic scale.",
    ], spot: [
      "Look for claims based only on secrecy and no technical detail.",
      "Ask what hardware and supply chain such a machine would need.",
      "Check whether the claim matches public data on progress.",
      "Distinguish possible classified research from a working machine.",
    ], faq: [
      { q: "Does the NSA have a quantum computer?", a: "The NSA funds quantum computing research. There is no evidence that it has a machine capable of breaking current encryption." },
      { q: "Could a secret program be ahead?", a: "It is possible in some components, but a complete cryptographically relevant machine is considered unlikely." },
      { q: "What should I do given the uncertainty?", a: "Migrate to post-quantum cryptography on schedule, starting with key exchange." },
    ], references: [
      "Rich, S., & Gellman, B. (2014). NSA seeks to build quantum computer that could crack most types of encryption. The Washington Post, 2 January 2014.",
      "National Security Agency (2022). Commercial National Security Algorithm Suite 2.0 advisory.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Mosca, M., & Piani, M. Quantum threat timeline report. Global Risk Institute (annual).",
      "Ellis, J. H. (1999). The story of non-secret encryption. CESG historical document, released 1997.",
    ], links: [
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Term: Harvest Now, Decrypt Later", href: "/dictionary/harvest-now-decrypt-later" },
      { label: "Forecast: Governments, Defense, and Quantum Strategy", href: "/future/quantum-government-defense-future" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1056 },
  { slug: "quantum-computers-destroy-bitcoin-overnight", myth: "Quantum computers will destroy Bitcoin overnight", category: "security", verdict: "Mostly false", summary: "A large quantum computer could forge Bitcoin signatures, but none exists, the threat can be countered by upgrading to quantum-resistant signatures, and mining is not seriously at risk. The challenge is the slow, contested process of coordinating an upgrade.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Bitcoin and other cryptocurrencies rely on cryptography, and quantum computers threaten cryptography, so the conclusion seems immediate: when a quantum computer arrives, Bitcoin collapses. Social media posts, videos, and articles predict a sudden day on which wallets are emptied. Some use the story to argue that cryptocurrencies are doomed, and others to sell supposedly quantum-proof coins.",
          "The story has a real core and several exaggerations. The real core is that elliptic curve signatures can be broken by Shor's algorithm. The exaggerations are in the timing, the speed of an attack, and the idea that the system cannot adapt.",
        ] },
      { heading: "What is actually vulnerable", paragraphs: [
          "Bitcoin uses the elliptic curve digital signature algorithm over the curve secp256k1, and, since the 2021 Taproot upgrade, Schnorr signatures on the same curve. A quantum computer running Shor's algorithm could derive a private key from a public key, and sign transactions as the owner. Addresses of the common pay-to-public-key-hash type hide the public key behind a hash until a coin is spent, so coins in unused, never-reused addresses are protected against a long-range attack, while coins in addresses that have exposed their public keys, such as old pay-to-public-key outputs, reused addresses, and some modern output types, are exposed. Aggarwal, Brennen, Lee, Santha, and Tomamichel analyzed these categories in 2018 and estimated that a significant fraction of coins sits in exposed outputs.",
          "Mining, the process that secures the blockchain, relies on hash functions. Grover's algorithm gives only a quadratic speedup, and Aggarwal and coauthors concluded that quantum miners would have a limited advantage at best, since the hardware needed to run Grover's algorithm with competitive speed is far beyond what classical specialized chips do cheaply. The consensus mechanism is therefore much less threatened than signatures.",
        ] },
      { heading: "How big a machine is needed, and how fast", paragraphs: [
          "Resource estimates for 256-bit elliptic curves are lower than for RSA-2048 in terms of logical qubits, about 2,330 according to Roetteler and coauthors in 2017. Webber and coauthors estimated in 2022 that breaking a Bitcoin key within an hour would need hundreds of millions of physical qubits, and within a day about 13 million, under assumptions of 0.1 percent error and a one-microsecond cycle. Litinski reduced the gate count in 2023, and Gouzien and coauthors estimated that a cat-qubit architecture could do it in about nine hours with about 126,000 cat qubits. These numbers are very large compared with today's machines, and attacks would take hours, not seconds, which affects the kind of attack possible. A so-called short-range attack, intercepting a transaction in the minutes before confirmation, needs a machine that is much faster than one that takes a day.",
          "There is therefore no scenario in which a quantum computer appears one night and drains wallets by morning. If it appears, it will be at first a rare and expensive resource, and attacks would target the highest-value exposed outputs.",
        ] },
      { heading: "Bitcoin can adapt", paragraphs: [
          "The decisive point is that the cryptography can be changed. NIST standardized post-quantum signatures in 2024, and Bitcoin developers have proposed new output types that use quantum-resistant signatures, such as BIP-360, and discussed ways to migrate funds. Users could move coins to new addresses before a machine exists. The difficulty is governance and logistics, not technology. Changing the protocol requires broad agreement among developers, miners, exchanges, and users, and signature sizes would increase transaction sizes and fees. Coins in lost or abandoned wallets cannot be moved by their owners, and there is debate about whether such coins should eventually be frozen, which conflicts with the principle that no one can seize coins.",
          "Ethereum and other chains face similar issues. Ethereum developers have discussed emergency forks and account abstraction, which lets smart-contract wallets change their signature scheme without changing the base protocol. Some newer chains were designed with hash-based signatures from the start.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The threat is real in the long term, and the Bitcoin community takes it seriously. The migration problem is hard, and the possibility that a machine arrives before the migration is complete cannot be excluded. Early coins in exposed addresses may be the first targets. A responsible summary is that quantum computers threaten Bitcoin's signatures but not the entire system, and that the response needs years of preparation.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth drives bad decisions on both sides. Some investors sell in panic or buy unproven quantum-resistant tokens with exaggerated claims, and others dismiss the whole threat. A calm view helps: prepare for a gradual transition, follow protocol proposals, avoid address reuse, and treat marketing claims about quantum-proof coins with caution. This page is not investment advice.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what size of quantum computer is needed, how long the attack would take, and which coins are exposed. Point out that mining is not the main target and that post-quantum signatures exist. Add that the real risk is slow coordination, which is a reason to start discussing the upgrade now. If someone sells a quantum-proof coin, ask which signature scheme it uses and whether it has been audited.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. A large quantum computer could forge Bitcoin signatures, but none exists, an attack would not happen overnight, mining is not seriously threatened, and the protocol can be upgraded. The real difficulty is the governance of a timely migration.",
        ] },
    ], facts: [
      "Bitcoin signatures use elliptic curves that Shor's algorithm would break.",
      "Estimates range from about 126,000 cat qubits for nine hours to hundreds of millions of physical qubits for one hour.",
      "Grover's algorithm gives only a quadratic speedup against hash-based mining.",
      "NIST standardized post-quantum signatures in 2024, and proposals such as BIP-360 aim to bring them to Bitcoin.",
    ], spot: [
      "Watch for claims of sudden collapse on a specific day.",
      "Ask how large a machine is needed and how long an attack would take.",
      "Check whether mining and signatures are distinguished.",
      "Be skeptical of quantum-proof tokens without audited signature schemes.",
    ], faq: [
      { q: "Can a quantum computer steal my Bitcoin today?", a: "No. No machine can do this today." },
      { q: "Which Bitcoin is most at risk?", a: "Coins in addresses whose public keys are already visible on the blockchain." },
      { q: "Will Bitcoin upgrade to quantum-safe signatures?", a: "Proposals exist, but the process requires broad consensus and will take years." },
    ], references: [
      "Aggarwal, D., Brennen, G., Lee, T., Santha, M., & Tomamichel, M. (2018). Quantum attacks on Bitcoin, and how to protect against them. Ledger, 3, 68-90.",
      "Roetteler, M., Naehrig, M., Svore, K. M., & Lauter, K. (2017). Quantum resource estimates for computing elliptic curve discrete logarithms. ASIACRYPT 2017, LNCS 10625, 241-270.",
      "Webber, M., et al. (2022). The impact of hardware specifications on reaching quantum advantage in the fault tolerant regime. AVS Quantum Science, 4, 013801.",
      "Litinski, D. (2023). How to compute a 256-bit elliptic curve private key with only 50 million Toffoli gates. arXiv:2306.08585.",
      "Gouzien, E., Ruiz, D., Le Régent, F.-M., Guillaud, J., & Sangouard, N. (2023). Performance analysis of a repetition cat code architecture: Computing 256-bit elliptic curve logarithm in 9 hours with 126,133 cat qubits. Physical Review Letters, 131, 040602.",
      "National Institute of Standards and Technology (2024). FIPS 204 and FIPS 205.",
    ], links: [
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Forecast: Quantum Computers and Blockchains: What Is Really at Risk", href: "/future/blockchain-crypto-quantum-future" },
      { label: "Forecast: Migrating to Post-Quantum Cryptography: The Engineering Reality", href: "/future/pqc-migration-engineering-future" },
    ], words: 1035 },
  { slug: "quantum-computers-crack-any-password-instantly", myth: "A quantum computer could crack any password instantly", category: "security", verdict: "False", summary: "Passwords are attacked by guessing, not by factoring. Grover's algorithm gives only a quadratic speedup on guessing, which does not help against long random passwords, and weak passwords are already cracked by ordinary computers.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Stories about quantum computers cracking passwords appear in news, advertisements, and videos. They combine the idea that quantum computers break encryption with the everyday experience of passwords, and conclude that any password, however strong, can be guessed instantly. The same story is used to sell password managers, security courses, and quantum-proof apps, so it is repeated widely.",
          "The picture mixes up several different mechanisms. A password is not encrypted with RSA, and the threat from Shor's algorithm to public-key cryptography is not the same as a threat to passwords. The relevant quantum algorithm for guessing is Grover's, which gives a more modest gain.",
        ] },
      { heading: "How passwords are really attacked", paragraphs: [
          "Passwords are usually stored on servers as hashes, the output of a one-way function with a random salt. An attacker who steals the hash file tries guesses, computes the hash of each, and compares. The speed depends on the hash function and the hardware: a fast hash such as unsalted SHA-1 can be tested at billions of guesses per second per GPU, while a deliberately slow function such as bcrypt, scrypt, or Argon2 reduces the speed by orders of magnitude. The security of a password therefore depends on its entropy, that is, how unpredictable it is, and on the cost of each guess.",
          "Most real-world password compromises do not involve any brute force at all. They come from phishing, reuse of passwords across sites, malware, and database leaks, and from people choosing predictable passwords, which dictionary attacks find quickly. Bonneau and coauthors surveyed the weaknesses of passwords in 2012 and the best guidance, such as NIST Special Publication 800-63B, emphasizes length, avoiding known-compromised passwords, rate limiting, and multi-factor authentication.",
        ] },
      { heading: "What Grover's algorithm can do", paragraphs: [
          "If the attacker could run a quantum search over the possible passwords, Grover's algorithm would reduce the number of guesses from N to about the square root of N. A password with 40 bits of entropy, for instance, takes about a trillion guesses classically and about a million quantum steps. But a trillion classical guesses is trivial for a GPU against a fast hash, so such a password is already weak. A password with 80 bits of entropy, such as a random passphrase of seven or eight words from a large list, would need about 2 to the 80 classical guesses, which is infeasible, and about 2 to the 40 Grover iterations. Each iteration involves evaluating the hash inside a quantum circuit, which is far slower and more expensive than on a classical chip. Zalka proved in 1999 that Grover's algorithm cannot be parallelized efficiently, so the speedup does not scale with many machines. As a result, quantum search offers little threat to well-chosen passwords, and ordinary advice remains valid.",
          "Online guessing, in which an attacker tries passwords against a login page, is limited by rate limits and lockouts, and a quantum computer cannot speed it up, since each guess requires a round trip to the server. The attack that Grover's algorithm would enhance, offline guessing against a stolen hash file, is already feasible for weak passwords and infeasible for strong ones.",
        ] },
      { heading: "What actually protects you", paragraphs: [
          "The practical measures are well known. Use long, random passwords or passphrases generated by a password manager, and never reuse them across sites. Enable multi-factor authentication, preferably with hardware security keys or passkeys, which replace passwords with public-key credentials and resist phishing. Rely on services that store passwords with slow salted hashes. Passkeys use public-key cryptography, so in the long run they will need post-quantum algorithms, and standards bodies are working on that. These measures defend against the threats that cause most breaches, and are much more important than any quantum consideration.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computers do affect some aspects of password security indirectly. If a protocol protects passwords in transit using quantum-vulnerable key exchange, recorded traffic could be decrypted later, revealing passwords, which is a reason to adopt post-quantum key exchange. And Grover's algorithm slightly reduces the effective strength of passwords against offline attacks, so a margin of safety suggests using longer passphrases. These are modest effects.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth distracts from the real threats and encourages fatalism. If any password can be cracked instantly, why bother choosing a good one? That attitude leaves people open to the common attacks. It also helps vendors to sell products using fear. Accurate information gives people practical steps they can take today.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that passwords are guessed, not decrypted by Shor's algorithm, and that quantum computers offer at most a square-root speedup on guessing. Give the example of an 80-bit passphrase. Then recommend a password manager, long random passwords, multi-factor authentication, and passkeys. If a seller claims that its product protects against quantum password cracking, ask which attack it addresses.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computers cannot crack any password instantly. Grover's algorithm gives only a quadratic speedup on guessing, strong random passwords remain safe, and the main threats to passwords are phishing, reuse, and weak choices.",
        ] },
    ], facts: [
      "Grover's algorithm reduces the number of guesses from N to about the square root of N.",
      "Zalka proved in 1999 that Grover's algorithm does not parallelize efficiently.",
      "A random passphrase with 80 bits of entropy would still need about 2 to the 40 quantum iterations.",
      "Most password breaches come from phishing, reuse, and leaks, not from brute force.",
    ], spot: [
      "Watch for claims that quantum computers crack passwords instantly.",
      "Ask whether the claim refers to online login attacks or offline hash cracking.",
      "Check whether password strength is described in terms of entropy.",
      "Be skeptical of products that sell quantum protection for passwords.",
    ], faq: [
      { q: "Should I make my passwords longer because of quantum computers?", a: "Longer passwords are good practice for other reasons, and an 80-bit passphrase is strong against quantum search as well." },
      { q: "Do passkeys protect against quantum computers?", a: "They avoid password guessing and phishing. Their cryptography will need to move to post-quantum algorithms over time." },
      { q: "Can a quantum computer speed up online guessing?", a: "No. Online guessing is limited by the server's rate limits." },
    ], references: [
      "Grover, L. K. (1996). A fast quantum mechanical algorithm for database search. STOC '96, 212-219.",
      "Zalka, C. (1999). Grover's quantum searching algorithm is optimal. Physical Review A, 60, 2746-2751.",
      "Bonneau, J., Herley, C., van Oorschot, P. C., & Stajano, F. (2012). The quest to replace passwords: A framework for comparative evaluation of web authentication schemes. IEEE Symposium on Security and Privacy, 553-567.",
      "Grassi, P. A., et al. (2017). NIST Special Publication 800-63B: Digital identity guidelines: Authentication and lifecycle management.",
      "Jaques, S., Naehrig, M., Roetteler, M., & Virdia, F. (2020). Implementing Grover oracles for quantum key search on AES and LowMC. EUROCRYPT 2020, LNCS 12106, 280-310.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Algorithm: Grover's Algorithm", href: "/algorithms/grovers-algorithm" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Forecast: Quantum in Everyday Life: What Ordinary People Will Actually Use", href: "/future/quantum-consumer-future" },
    ], words: 1007 },
  { slug: "quantum-random-numbers-required-for-security", myth: "You need quantum random numbers to have secure encryption", category: "security", verdict: "Mostly false", summary: "Well-designed conventional random number generators seeded from good hardware entropy are secure. Real-world failures came from flawed implementations and backdoors, not from the lack of quantum physics, so quantum generators are an optional extra layer.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum random number generators are marketed as truly random, with true randomness from quantum mechanics, in contrast to the pseudo-random numbers of computers, which are described as predictable and therefore insecure. The conclusion that encryption needs quantum randomness follows naturally. Telecom operators and phone makers advertise chips with quantum random generators, and some articles suggest that without them, keys are weak.",
          "The distinction between true and pseudo randomness is real in theory, but it has little practical bearing on the security of well-engineered systems. What matters is unpredictability to an attacker, which can be achieved in several ways.",
        ] },
      { heading: "How computers generate secure random numbers", paragraphs: [
          "Modern operating systems collect entropy from physical processes: timing of interrupts, hardware noise sources in processors, thermal noise in circuits, and other unpredictable events. They feed it into a cryptographically secure pseudo-random generator, which expands a small, truly unpredictable seed into a large stream of bits that cannot be distinguished from random by any feasible computation. NIST's Special Publications 800-90A, B, and C specify the designs, the testing of entropy sources, and their combination. As long as the seed has enough entropy, for instance 128 bits, the output is secure for any practical purpose, including generating keys for cryptography that resists quantum computers.",
          "A quantum random generator is a different entropy source: a physical process, such as photon detection at a beam splitter, whose unpredictability follows from quantum theory. It is a good source, with a clear physical model, and it can supply entropy at high rates. But a conventional hardware source that is well designed and tested serves equally well in practice.",
        ] },
      { heading: "How randomness actually fails", paragraphs: [
          "Real-world failures have not come from the absence of quantum physics. In 2006, a change to the Debian distribution of OpenSSL removed essential entropy collection and left only 32,768 possible keys, an error not found until 2008. In 2012, Heninger and coauthors scanned the internet and found that a notable fraction of RSA keys on network devices shared factors or were duplicates, because devices generated keys at boot time before they had collected enough entropy. In 2013 it became public that the Dual_EC_DRBG generator, standardized by NIST, contained a possible backdoor, as analyzed by Bernstein, Lange, and Niederhagen. In each case, the problem was a design or implementation flaw, and a quantum source would only have helped if it had been included correctly, which was the real issue.",
          "These examples show that the key practice is sound engineering: collect entropy from multiple sources, wait until enough is available, test it, mix it, and avoid untrusted designs.",
        ] },
      { heading: "What quantum generators add", paragraphs: [
          "Quantum generators offer advantages in some settings. They provide a physical source whose entropy can be modeled and tested, which helps in certification of high-assurance systems. They can produce high rates of random bits for applications such as simulation, lotteries, and gaming. Device-independent and certified randomness protocols, based on Bell tests or verifiable quantum computations, can prove that bits are fresh and unpredictable to an outside auditor, which conventional sources cannot do. Such proofs matter for public randomness beacons, auditing, and some regulatory contexts. But these are specialized benefits.",
          "For ordinary encryption, a quantum source is a defense in depth: an additional entropy input that can be mixed with others. It is not a requirement, and its absence does not make a properly built system insecure.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Randomness is crucial to cryptography, and weak randomness has caused serious breaches. Quantum sources can make the physical basis of randomness clearer and, in the certified case, verifiable. For high-assurance applications, they are attractive. The statement that you need them for secure encryption is wrong in general.",
        ] },
      { heading: "What to do in practice", paragraphs: [
          "For a developer or administrator, the practical advice is short. Use the random number interface of the operating system or of a well-reviewed cryptographic library, such as the system generator and the default functions of modern languages, and never write your own. On virtual machines and embedded devices, make sure the system has enough entropy before generating long-lived keys, for example by using hardware generators available in the processor or a trusted platform module. Avoid seeding from the clock or from predictable values. For systems with the highest assurance requirements, add a second independent entropy source, which could be a quantum device, and combine them so that the output is secure if either source is good.",
          "These steps defend against the failures that have occurred in practice, and they cost far less than replacing infrastructure. Where an audit or regulation asks for evidence of entropy quality, test the source according to NIST SP 800-90B, and keep records. If a quantum generator is chosen, treat it as one component in a design that has been reviewed, and not as a guarantee on its own.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth leads buyers to spend money on quantum random number products where improving operating system entropy handling would be sufficient, and it directs attention away from the practical failures, which are in implementation. It also confuses the question of defending against quantum computers: random numbers do not protect against Shor's algorithm, and replacing a random number generator does not make RSA quantum-safe. Post-quantum cryptography addresses that threat.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Say that security requires unpredictability to the attacker, and that standard operating system generators provide it when properly implemented. Ask what problem the quantum source solves in this case: is it certification, a regulatory requirement, or just marketing? Recommend that systems use the generators provided by modern operating systems and cryptographic libraries, avoid custom designs, and test entropy in constrained devices.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Secure encryption does not require quantum random numbers. Conventional generators with good entropy sources are adequate, and quantum generators are a useful option for high-assurance and auditable uses.",
        ] },
    ], facts: [
      "NIST SP 800-90A, B, and C specify secure random number generation and entropy testing.",
      "A 2006 Debian OpenSSL change left only 32,768 possible keys until 2008.",
      "Heninger and coauthors found widespread weak RSA keys from low-entropy devices in 2012.",
      "Certified randomness protocols can prove freshness to an outside auditor.",
    ], spot: [
      "Watch for claims that pseudo-random numbers are insecure by definition.",
      "Ask what failure the quantum source is meant to prevent.",
      "Check how the system collects and tests entropy.",
      "Notice if randomness is confused with protection against quantum attacks.",
    ], faq: [
      { q: "Are pseudo-random numbers secure?", a: "Cryptographically secure generators seeded with good entropy are secure for practical purposes." },
      { q: "Why use a quantum random number generator?", a: "For a clear physical entropy source, high rates, certification needs, or auditable randomness." },
      { q: "Does quantum randomness protect against quantum computers?", a: "No. That requires post-quantum algorithms." },
    ], references: [
      "Herrero-Collantes, M., & Garcia-Escartin, J. C. (2017). Quantum random number generators. Reviews of Modern Physics, 89, 015004.",
      "National Institute of Standards and Technology (2018). NIST Special Publication 800-90B: Recommendation for the entropy sources used for random bit generation.",
      "Heninger, N., Durumeric, Z., Wustrow, E., & Halderman, J. A. (2012). Mining your Ps and Qs: Detection of widespread weak keys in network devices. USENIX Security Symposium, 205-220.",
      "Bernstein, D. J., Lange, T., & Niederhagen, R. (2016). Dual EC: A standardized back door. In The New Codebreakers, LNCS 9100, 256-281.",
      "Pironio, S., et al. (2010). Random numbers certified by Bell's theorem. Nature, 464, 1021-1024.",
      "Liu, M., et al. (2025). Certified randomness using a trapped-ion quantum processor. Nature, 640, 343-348.",
    ], links: [
      { label: "Paper: Loophole-Free Bell Inequality Violation Using Electron Spins Separated by 1.3 Kilometres", href: "/research/hensen-loophole-free-bell-test-2015" },
      { label: "Term: Quantum Random Number Generator", href: "/dictionary/quantum-random-number-generator" },
      { label: "Forecast: Quantum Random Numbers and Certified Randomness", href: "/future/quantum-randomness-future" },
      { label: "Forecast: Migrating to Post-Quantum Cryptography: The Engineering Reality", href: "/future/pqc-migration-engineering-future" },
    ], words: 1102 },
  { slug: "bigger-rsa-keys-make-it-quantum-safe", myth: "Making RSA keys bigger is enough to protect against quantum computers", category: "security", verdict: "False", summary: "Shor's algorithm breaks RSA in polynomial time, so longer keys buy little. Keys would need to be absurdly large, around a terabyte, to resist a quantum attack, which is why the world is moving to different algorithms instead.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The intuition comes from the history of RSA. When faster computers or better factoring methods threatened shorter keys, the response was to lengthen them: 512-bit keys gave way to 1,024, then 2,048 and 3,072 bits. It seems natural to expect the same answer to quantum computers: just double the key size again. Some security advice and even a few product descriptions suggest this, and for symmetric keys it is correct, since doubling an AES key length restores the security margin against Grover's algorithm.",
          "For RSA and similar systems, however, the situation is different because of how Shor's algorithm scales.",
        ] },
      { heading: "Why bigger keys do not help much", paragraphs: [
          "The best classical algorithms for factoring, such as the general number field sieve, take time that grows sub-exponentially in the key length, so adding bits makes the attack costlier at an increasing rate, which is why moving from 1,024 to 2,048 bits was effective. Shor's algorithm takes time that grows only polynomially, roughly as the cube of the number of bits. Doubling the key size therefore increases the cost of the quantum attack by about a factor of eight, which is a small price for the attacker compared with the astronomical jump against classical methods. The attacker's hardware requirements grow, but moderately: the logical qubits needed scale roughly linearly with key size, so a 4,096-bit key needs about twice the logical qubits of a 2,048-bit key. Gidney and Ekerå's and Gidney's estimates for RSA-2048 would increase by modest factors for larger keys.",
          "In the race between longer keys and better quantum computers, the quantum side wins easily once the machines exist, because the machines' capability is limited by hardware, not by the key length, while the cost of using longer keys grows too, in key generation, storage, and handshake size.",
        ] },
      { heading: "The terabyte RSA proposal", paragraphs: [
          "To make the point vivid, Bernstein, Heninger, Lou, and Valenta proposed in 2017 a scheme they called post-quantum RSA, which uses public keys of about a terabyte in size. The design chooses a modulus built from many large primes and arranges the system so that Shor's algorithm would require an impractically large quantum computer, with the aim of showing that RSA could in principle be made quantum-resistant, but at a cost that is ridiculous: generating and transmitting a terabyte key, and performing computations with it, is far beyond what any real system would accept. The paper is a research demonstration that illustrates the problem more than it offers a solution, and it shows that making RSA quantum-safe by size alone is possible only at absurd cost.",
        ] },
      { heading: "What the real solutions are", paragraphs: [
          "The practical solution is to use algorithms based on other mathematical problems for which no efficient quantum algorithm is known, such as lattice problems, code-based problems, and hash functions. NIST standardized ML-KEM, ML-DSA, and SLH-DSA in 2024, and chose HQC as a backup key-establishment scheme in 2025. The keys and signatures of these algorithms are bigger than those of elliptic curve cryptography, with public keys of about one to two kilobytes and signatures of two to several kilobytes, but they are tiny compared with terabyte RSA keys and they run quickly on ordinary hardware.",
          "Elliptic curve cryptography is no better against Shor's algorithm. The attack on a 256-bit elliptic curve needs fewer logical qubits than RSA-2048, as Roetteler and coauthors showed, so switching to elliptic curves or to larger curves is not a solution either.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "In the transition period, key length still matters against classical attackers, and using 3,072-bit or longer RSA keys remains reasonable for current security. For symmetric cryptography, longer keys do solve the quantum problem. The error is in carrying that lesson over to public-key algorithms broken by Shor's algorithm.",
        ] },
      { heading: "A quick comparison of cost growth", paragraphs: [
          "A small table of how costs scale makes the difference plain. If the key length doubles, the classical factoring effort for the number field sieve grows by many orders of magnitude, from about 2 to the 112 operations at 2,048 bits to roughly 2 to the 150 at 4,096 bits, which is why 4,096-bit keys are considered safe against classical computers for the foreseeable future. For a quantum attacker, the cost grows only by a factor of a few in qubits and about eight in time. A machine that can break the smaller key in a week can break the larger one in a few weeks, with a machine somewhat larger than before. Since the quantum machine either exists or does not, the doubling of key size buys, at most, a short delay.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Believing that bigger keys suffice can delay the real migration. An organization may increase its RSA key sizes and consider the matter closed, and be exposed when a machine arrives, or to the recording of traffic in the meantime. It also wastes effort and slows systems. Understanding that the issue is an algorithmic one, not one of size, helps in planning the transition to post-quantum algorithms.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that the cost of Shor's algorithm grows polynomially with key size, while classical attacks grow much faster, so size gives the defender little. Mention the terabyte RSA proposal as a thought experiment. Then point to the standardized replacements and the migration deadlines. If someone says to use a larger elliptic curve, note that elliptic curves are also broken by Shor's algorithm.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Longer RSA keys do not provide meaningful protection against a quantum computer running Shor's algorithm, except at impractical sizes. The solution is to adopt different algorithms, such as the NIST post-quantum standards.",
        ] },
    ], facts: [
      "Shor's algorithm runs in time that grows polynomially, roughly as the cube of the key length.",
      "Bernstein and coauthors proposed terabyte-sized RSA keys in 2017 as a demonstration of impractical size.",
      "Elliptic curve cryptography is also broken by Shor's algorithm, with fewer logical qubits needed than for RSA-2048.",
      "NIST standardized ML-KEM, ML-DSA, and SLH-DSA in 2024.",
    ], spot: [
      "Watch for advice that bigger keys are the answer to quantum computers.",
      "Ask whether the algorithm in question is symmetric or public-key.",
      "Check whether elliptic curves are suggested as a quantum-safe alternative.",
      "Look for references to NIST post-quantum standards.",
    ], faq: [
      { q: "Is RSA-4096 safe against quantum computers?", a: "No. It would need about twice the quantum resources of RSA-2048, which is a small increase." },
      { q: "Are bigger AES keys helpful?", a: "Yes. Doubling the key length restores the security margin against Grover's algorithm." },
      { q: "What should replace RSA?", a: "Post-quantum algorithms such as ML-KEM for key exchange and ML-DSA or SLH-DSA for signatures." },
    ], references: [
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
      "Bernstein, D. J., Heninger, N., Lou, P., & Valenta, L. (2017). Post-quantum RSA. PQCrypto 2017, LNCS 10346, 311-329.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Roetteler, M., Naehrig, M., Svore, K. M., & Lauter, K. (2017). Quantum resource estimates for computing elliptic curve discrete logarithms. ASIACRYPT 2017, LNCS 10625, 241-270.",
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
      "Bernstein, D. J., & Lange, T. (2017). Post-quantum cryptography. Nature, 549, 188-194.",
    ], links: [
      { label: "Paper: Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer", href: "/research/shor-prime-factorization-1997" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers in 8 Hours Using 20 Million Noisy Qubits", href: "/research/gidney-ekera-rsa-20-million-qubits-2019" },
      { label: "Term: Post-Quantum Cryptography", href: "/dictionary/post-quantum-cryptography" },
      { label: "Forecast: Quantum Computing and the Future of Cybersecurity", href: "/future/quantum-cybersecurity-future" },
    ], words: 1082 },
  { slug: "all-quantum-computers-need-absolute-zero", myth: "All quantum computers must be cooled to near absolute zero", category: "industry", verdict: "Mostly false", summary: "Superconducting quantum computers need millikelvin temperatures, but trapped-ion, neutral-atom, photonic, and diamond-based machines work differently. Some operate in room-temperature vacuum chambers, and silicon spin qubits have worked above one kelvin.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The standard picture of a quantum computer is a golden chandelier hanging inside a cylindrical cryostat, which is the image of IBM's and Google's superconducting machines. Photographs, videos, and news stories show it again and again, and articles explain that quantum computers need to be colder than outer space. It is easy to conclude that cold is a requirement of all quantum computing. Some company explanations, written for general readers, repeat the statement without qualification.",
          "The statement is true for one important platform and false for others. Quantum states are fragile, and thermal noise is one of the things that disturbs them, but the way each technology handles heat differs greatly.",
        ] },
      { heading: "Which machines need extreme cold", paragraphs: [
          "Superconducting qubits, used by IBM, Google, Rigetti, IQM, and Fujitsu, are made of aluminum or niobium circuits that become superconducting below a few kelvin, and their quantum states have energies so small that even a little heat would excite them. They are cooled to about 10 to 20 millikelvin, which is hundredths of a degree above absolute zero, using dilution refrigerators that use helium-3 and helium-4. The cooling is also needed to keep thermal photons in the control lines from corrupting the qubits. This is the reason these machines look the way they do, and it requires large and expensive cryogenic systems, as described by Krinner and coauthors in 2019.",
          "Superconducting nanowire detectors, used in photonic quantum computing and quantum communication to detect single photons efficiently, are also cooled, typically to between about one and four kelvin, which is much easier than millikelvin but still requires cryogenic equipment.",
        ] },
      { heading: "Which machines do not", paragraphs: [
          "Trapped-ion and neutral-atom machines work at a different kind of cold. The atoms are held in an ultra-high vacuum chamber, which sits at room temperature, and the atoms themselves are cooled with laser light to microkelvin or lower, because laser cooling removes the atoms' own motion without cooling the surroundings. The apparatus on the table is at room temperature, and the qubits are internal states of individual atoms that are very well isolated from the environment. Quantinuum, IonQ, QuEra, Pasqal, and Atom Computing use such systems, with lasers, optics, and vacuum pumps in place of dilution refrigerators.",
          "Photonic quantum computers use particles of light that travel on chips and fibers, which are largely insensitive to temperature, since photons at optical frequencies have energies far above thermal energies at room temperature. Their waveguides and many components can operate at room temperature, though detectors and some sources may need cooling, as noted above. Nitrogen-vacancy centers in diamond can hold and manipulate quantum states at room temperature, as shown in work from the 1990s and later, which is why they are used for quantum sensing and in some networking experiments, and Balasubramanian and coauthors showed spin coherence times of about 2 milliseconds at room temperature in 2009.",
          "Silicon spin qubits are an intermediate case. They traditionally run at tens of millikelvin, but Yang and coauthors and Petit and coauthors showed in 2020 that they can operate at temperatures above one kelvin, which is much easier to reach and gives more cooling power for control electronics. This is one of the attractions of the technology.",
        ] },
      { heading: "Why not absolute zero", paragraphs: [
          "Another part of the myth is the phrase near absolute zero. Absolute zero, 0 kelvin, cannot be reached, as the third law of thermodynamics states, and no quantum computer is at absolute zero. Dilution refrigerators reach a few millikelvin at best. The relevant quantity is not the absolute temperature but how it compares to the energy scale of the qubit. A superconducting qubit with a transition frequency of about 5 gigahertz has an energy equivalent to a temperature of about 240 millikelvin, so cooling to 10 to 20 millikelvin makes thermal excitation rare. A trapped-ion qubit uses optical or microwave transitions with much larger energy gaps relative to room temperature, or hyperfine transitions that are very well isolated, so it does not need such cooling.",
        ] },
      { heading: "A comparison in words", paragraphs: [
          "A short comparison helps. Superconducting circuits operate at 10 to 20 millikelvin in a dilution refrigerator. Silicon spin qubits operate at 10 millikelvin to a few kelvin depending on the design. Trapped ions are held in room-temperature vacuum chambers with atoms laser-cooled to well below one millikelvin. Neutral atoms in optical tweezers are cooled to microkelvin by lasers in a vacuum chamber. Photonic chips run at room temperature, with detectors at one to four kelvin. Diamond color centers can work at room temperature. These differences matter for cost, power, size, and the supply chain, including the helium-3 that dilution refrigerators consume.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The leading superconducting platforms do need extreme cold, and many of the machines in the news are of this type. Cold is a common requirement, and avoiding it is an advantage of other platforms. In most platforms some part of the system, such as detectors, electronics, or the qubits themselves, needs cooling, although at very different levels. The myth is in saying that all quantum computers share the requirement.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth affects how people think about the technology's practicality. If every quantum computer needed a dilution refrigerator, they would be confined to a few specialized facilities. In reality, some architectures may be easier to deploy and scale, which is part of the competition between platforms. Policy and supply chain planning also depend on it: helium-3 shortages affect superconducting systems more than atom-based ones. And the claim that quantum computers can never leave the laboratory because of cooling is not correct for all platforms.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask which kind of quantum computer is meant. Say that superconducting machines need millikelvin temperatures, while atom, ion, and photonic machines use other approaches, such as laser cooling, with room-temperature vacuum chambers. A good example is the 2025 Aurora photonic machine, whose chips operate with fiber at room temperature. When reading news, note the platform before concluding about cooling.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Superconducting quantum computers need temperatures near 10 to 20 millikelvin, but trapped-ion, neutral-atom, photonic, and diamond-based systems use different methods, and some operate largely at room temperature. No quantum computer is at absolute zero.",
        ] },
    ], facts: [
      "Superconducting quantum computers operate at about 10 to 20 millikelvin in dilution refrigerators.",
      "Trapped ions and neutral atoms are laser-cooled inside room-temperature vacuum chambers.",
      "Silicon spin qubits have been operated above one kelvin.",
      "Absolute zero cannot be reached, according to the third law of thermodynamics.",
    ], spot: [
      "Check which qubit technology the claim refers to.",
      "Be wary of statements that all quantum computers need extreme cold.",
      "Ask whether the cooling refers to the qubits or to the detectors and electronics.",
      "Notice phrases such as colder than outer space applied to all machines.",
    ], faq: [
      { q: "Which quantum computers work at room temperature?", a: "Photonic chips and diamond color-center devices can, though some detectors may need cooling, and ion and atom machines use room-temperature vacuum chambers with laser cooling." },
      { q: "Why do superconducting qubits need dilution refrigerators?", a: "To keep the circuits superconducting and to suppress thermal excitation of the qubits." },
      { q: "Can quantum computers reach absolute zero?", a: "No. Absolute zero cannot be reached." },
    ], references: [
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "Kjaergaard, M., et al. (2020). Superconducting qubits: Current state of play. Annual Review of Condensed Matter Physics, 11, 369-395.",
      "Bruzewicz, C. D., Chiaverini, J., McConnell, R., & Sage, J. M. (2019). Trapped-ion quantum computing: Progress and challenges. Applied Physics Reviews, 6, 021314.",
      "Saffman, M. (2016). Quantum computing with atomic qubits and Rydberg interactions: progress and challenges. Journal of Physics B, 49, 202001.",
      "Balasubramanian, G., et al. (2009). Ultralong spin coherence time in isotopically engineered diamond. Nature Materials, 8, 383-387.",
      "Yang, C. H., et al. (2020). Operation of a silicon quantum processor unit cell above one kelvin. Nature, 580, 350-354.",
      "Petit, L., et al. (2020). Universal quantum logic in hot silicon qubits. Nature, 580, 355-359.",
    ], links: [
      { label: "Paper: Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box", href: "/research/nakamura-cooper-pair-box-1999" },
      { label: "Term: Dilution Refrigerator", href: "/dictionary/dilution-refrigerator" },
      { label: "Term: Superconducting Qubit", href: "/dictionary/superconducting-qubit" },
      { label: "Term: Trapped-Ion Qubit", href: "/dictionary/trapped-ion-qubit" },
      { label: "Forecast: Cryogenics, Wiring, and Control Electronics: The Hidden Scaling Problem", href: "/future/quantum-cryogenics-wiring-future" },
    ], words: 1178 },
  { slug: "dwave-and-ibm-same-kind-of-computer", myth: "D-Wave and IBM build the same kind of quantum computer", category: "industry", verdict: "False", summary: "D-Wave builds quantum annealers, special-purpose machines that find low-energy states of Ising problems, while IBM builds gate-based quantum computers aimed at general computation. They use superconducting circuits, but they work differently and do different jobs.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Both companies make superconducting quantum processors, both sell cloud access, and both appear in headlines about qubit counts. When D-Wave announces a system with more than 4,000 qubits and IBM announces one with 120 or 156, a reader can conclude that D-Wave is far ahead, or that the two are directly comparable. Media coverage often treats them as competitors in the same race.",
          "But the numbers do not mean the same thing, because the machines are designed for different purposes and operate on different principles.",
        ] },
      { heading: "Annealers and gate-model machines", paragraphs: [
          "A gate-model quantum computer, built by IBM, Google, Quantinuum, IonQ, and others, performs a sequence of quantum logic gates on qubits, in a way analogous to the logic gates of a classical computer. Programs are quantum circuits, the machine can in principle run any quantum algorithm, including Shor's and Grover's, and with error correction it can compute reliably. It is a universal computer.",
          "A quantum annealer, built by D-Wave, is a special-purpose device. The user encodes an optimization problem as a set of couplings and fields in an Ising model, the machine starts in a state dominated by a transverse field that creates quantum fluctuations, and the field is gradually reduced so that the system settles into a low-energy configuration that encodes a good solution. The idea of quantum annealing was formulated by Kadowaki and Nishimori in 1998, and Farhi and coauthors framed adiabatic quantum computation in 2000. The machine does not run gate sequences, cannot run Shor's algorithm, and does not support error correction in the same way.",
          "There is a theoretical link: adiabatic quantum computation with general interactions is equivalent in power to the gate model, as Aharonov and coauthors proved in 2007. But D-Wave's hardware implements a restricted form of interaction, known as stoquastic, which is believed to be less powerful, and it works at finite temperature with noise, so it is not a universal adiabatic computer, as Albash and Lidar's 2018 review explains.",
        ] },
      { heading: "Why the qubit counts are not comparable", paragraphs: [
          "D-Wave's Advantage2 system has more than 4,400 qubits, each connected to up to 20 others, while IBM's Nighthawk processor has 120 qubits with 218 tunable couplers, aimed at running circuits with thousands of gates. The annealer's qubits are flux qubits of a design optimized for annealing, with limited coherence compared with gate-model qubits, and the machine's computation lasts microseconds as a single analog evolution, rather than a long sequence of precise gates. A gate-model qubit is held to much stricter standards of control, which is why gate-model machines have fewer qubits. Comparing counts is like comparing the number of transistors in a specialized analog circuit with those in a processor.",
        ] },
      { heading: "What each is good for", paragraphs: [
          "Annealers are used to find good solutions to optimization problems, to sample from distributions, and to simulate quantum magnets. D-Wave's 2025 paper in Science claimed that its annealer simulated the dynamics of magnetic materials beyond the reach of classical methods, though classical groups matched parts of the results. For industrial optimization, evidence of advantage over strong classical solvers is lacking, as reviewed by Abbas and coauthors in 2024, though customers use the machines for experiments and some production tasks through hybrid solvers. Gate-model machines are the platform for the broader promise: cryptanalysis, chemistry, and simulation, once error correction scales.",
          "The two have different routes to usefulness. The annealer is available now and is limited in scope. The gate-model machine is limited in size today and may become general. D-Wave has said that it also works on gate-model hardware, and IBM has no annealing product, so the paths are distinct.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Both are quantum computers in a broad sense, since they use quantum effects of superconducting circuits to process information. Both use similar fabrication and cryogenic technology. And there is a theoretical equivalence for idealized adiabatic computation. The myth is in treating them as the same product or in using their counts as a scoreboard.",
        ] },
      { heading: "A cooking analogy", paragraphs: [
          "A helpful analogy is the difference between a pressure cooker and a full kitchen. The annealer does one kind of job, and does it with a purpose-built design: put the ingredients in, apply the process, and read the result. The gate-model machine is the kitchen, which can in principle prepare any dish, though today it is small and the cooks make many mistakes. Asking which has more burners misses the point.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The confusion affects decisions. A customer who thinks that a 4,000-qubit annealer is a more powerful version of a 100-qubit gate-model machine might choose the wrong tool for a problem, expecting it to run algorithms that the annealer cannot. A journalist might report that one company is ahead of the other. Students might think that an annealer can break encryption. Getting the distinction right is part of understanding the field.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that D-Wave's machines are annealers for optimization and sampling, while IBM's are gate-based and aim at universal computation. Ask what kind of problem you want to solve, and look at whether it maps to an Ising model. For comparisons, look at the benchmark appropriate to each, not the qubit counts. If someone says that an annealer will break RSA, note that it cannot run Shor's algorithm.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. D-Wave and IBM build different kinds of machines: quantum annealers for specific optimization and simulation tasks, and gate-based quantum computers aimed at general computation. Their qubit counts are not comparable.",
        ] },
    ], facts: [
      "Quantum annealing was formulated by Kadowaki and Nishimori in 1998.",
      "D-Wave's Advantage2 has more than 4,400 qubits, while IBM's Nighthawk has 120 qubits and 218 tunable couplers.",
      "Annealers cannot run Shor's algorithm.",
      "Adiabatic computation with general interactions is equivalent to the gate model, but D-Wave's hardware uses restricted interactions.",
    ], spot: [
      "Check whether a system is an annealer or a gate-model machine.",
      "Do not compare qubit counts across the two types.",
      "Ask whether the target problem maps to an Ising model.",
      "Be wary of claims that an annealer can run general quantum algorithms.",
    ], faq: [
      { q: "Can a quantum annealer break encryption?", a: "No. It cannot run Shor's algorithm." },
      { q: "Is D-Wave a real quantum computer?", a: "It is a real quantum device that exploits quantum effects but solves a restricted class of problems." },
      { q: "Which is better for my problem?", a: "It depends. Optimization problems that map to Ising models can be tried on an annealer, while general algorithms need gate-model machines." },
    ], references: [
      "Kadowaki, T., & Nishimori, H. (1998). Quantum annealing in the transverse Ising model. Physical Review E, 58, 5355-5363.",
      "Farhi, E., Goldstone, J., Gutmann, S., & Sipser, M. (2000). Quantum computation by adiabatic evolution. arXiv:quant-ph/0001106.",
      "Aharonov, D., et al. (2007). Adiabatic quantum computation is equivalent to standard quantum computation. SIAM Journal on Computing, 37, 166-194.",
      "Albash, T., & Lidar, D. A. (2018). Adiabatic quantum computation. Reviews of Modern Physics, 90, 015002.",
      "Hauke, P., Katzgraber, H. G., Lechner, W., Nishimori, H., & Oliver, W. D. (2020). Perspectives of quantum annealing: Methods and implementations. Reports on Progress in Physics, 83, 054401.",
      "King, A. D., et al. (2025). Beyond-classical computation in quantum simulation. Science, 388, 199-204.",
      "Abbas, A., et al. (2024). Challenges and opportunities in quantum optimization. Nature Reviews Physics, 6, 718-735.",
    ], links: [
      { label: "Paper: Quantum Annealing in the Transverse Ising Model", href: "/research/kadowaki-nishimori-quantum-annealing-1998" },
      { label: "Paper: Quantum Computation by Adiabatic Evolution", href: "/research/farhi-adiabatic-evolution-2000" },
      { label: "Paper: Adiabatic Quantum Computation Is Equivalent to Standard Quantum Computation", href: "/research/aharonov-adiabatic-equivalent-circuit-2007" },
      { label: "Hardware: D-Wave Advantage2", href: "/hardware/dwave-advantage2" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
      { label: "Forecast: Quantum Annealing: What D-Wave and Its Competitors Can Do", href: "/future/quantum-annealing-future" },
    ], words: 1062 },
  { slug: "logical-and-physical-qubits-are-the-same", myth: "Physical qubits and logical qubits are the same thing, so qubit counts can be compared directly", category: "industry", verdict: "Misleading", summary: "A physical qubit is a real device that makes errors. A logical qubit is an error-corrected qubit made from many physical ones. Announcements use both terms, often loosely, and a claim of many logical qubits may involve small codes and discarded runs.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "In news and in marketing, the word qubit is used without qualification. A company announces a 1,000-qubit processor and another announces 48 logical qubits, and a reader may assume that the second is smaller. Or a company says that its roadmap will deliver a thousand logical qubits, and a reader takes this as comparable to the current thousand-qubit chips. The word logical, which seems a technical detail, changes the meaning entirely.",
          "The two terms refer to different levels of the system, as a transistor differs from a reliable memory built from many transistors, and the difference is the key to understanding progress in the field.",
        ] },
      { heading: "What each term means", paragraphs: [
          "A physical qubit is an actual quantum device: a superconducting circuit, a trapped ion, a neutral atom, an electron spin. It has an error rate, typically about 0.1 to 1 percent per operation on good devices, which means that it cannot be used for long computations. A logical qubit is an abstract qubit that is encoded across many physical qubits by an error-correcting code, in such a way that errors can be detected and corrected while the computation proceeds. If the physical error rate is below the code's threshold, adding more physical qubits per logical qubit lowers the logical error rate exponentially.",
          "The overhead is large. With a surface code at physical error rates of about 0.1 percent, reaching a logical error rate of one in a billion needs on the order of a thousand physical qubits per logical qubit. More efficient codes, such as the bivariate bicycle codes of IBM, need roughly ten times fewer, and bosonic and erasure schemes may reduce it further. So a machine with a thousand physical qubits might provide a single logical qubit of high quality, or a few logical qubits of lower quality, which is far from a thousand logical qubits.",
        ] },
      { heading: "Why logical qubit claims need care", paragraphs: [
          "Not all logical qubit claims are equal. Some experiments use small codes, such as distance-2 or distance-3 codes, that can only detect errors and not correct them, and discard runs in which an error is detected, a procedure called post-selection. The resulting logical error rates look low, but the method does not scale to long computations, because the fraction of discarded runs grows with circuit size. Others demonstrate full error correction with repeated rounds and active feedback, and show that the logical error falls as the code distance grows, as in Google's 2024 surface-code experiment. Both can be reported as logical qubits, though they mean different things.",
          "A fair comparison needs four numbers: the code distance, the logical error rate per cycle or per operation, the fraction of runs discarded, and whether logical gates were performed. Reports from Harvard and QuEra of 48 logical qubits in 2023, from Microsoft and Quantinuum of logical qubits with errors below the physical ones in 2024, from Atom Computing and Microsoft of 24 entangled logical qubits, and from Infleqtion of 30 entangled logical qubits in 2026 differ in these respects, and each should be read with its details.",
        ] },
      { heading: "Roadmaps use logical qubits", paragraphs: [
          "The distinction is built into the way roadmaps are now written. IBM plans its Starling machine in 2029 with about 200 logical qubits running 100 million operations. Quantinuum targets a fault-tolerant machine called Apollo in 2029 with hundreds of logical qubits. Google's milestones include a long-lived logical qubit and then about 100 logical qubits. These plans describe the number of reliable qubits that can run useful algorithms, which is the relevant quantity for cryptanalysis or chemistry, and it will be much smaller than the number of physical qubits underneath.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Physical qubit counts matter as a resource: more of them allow more logical qubits at a given overhead, and some experiments need large numbers to test architectures. And the word qubit is legitimately used for both, as long as the level is stated. The myth is that the two are interchangeable, or that headline counts, taken without qualification, indicate computational power.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Misreading the terms leads to wrong judgments about progress. A reader may think that a 48-logical-qubit experiment is a larger machine than a 1,000-physical-qubit chip, or the opposite, or may believe that fault-tolerant machines are already here because the word logical appears. Investors and policymakers use such numbers to compare companies and countries, and errors propagate. Clear labeling helps all of them.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Always ask which kind of qubit is meant. If logical, ask about the code, the distance, the logical error rate, post-selection, and whether logical gates were shown. Compare physical numbers only with physical numbers, and report error rates with them. As a rule of thumb, treat one good logical qubit as worth tens to thousands of physical ones.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. Physical and logical qubits are different things, and counts of each cannot be compared directly. A logical qubit is made from many physical qubits and is far more reliable, and claims of logical qubits vary widely in what they demonstrate.",
        ] },
    ], facts: [
      "A logical qubit is encoded in many physical qubits using an error-correcting code.",
      "A surface code can need about a thousand physical qubits per logical qubit for very low error rates.",
      "Some logical qubit claims use small codes with post-selection that does not scale.",
      "IBM's Starling roadmap targets about 200 logical qubits in 2029.",
    ], spot: [
      "Ask whether a qubit count refers to physical or logical qubits.",
      "For logical qubits, ask about code distance and logical error rate.",
      "Check whether runs with detected errors were discarded.",
      "Do not compare physical and logical counts directly.",
    ], faq: [
      { q: "What is a logical qubit?", a: "A qubit encoded across many physical qubits so that errors can be detected and corrected." },
      { q: "How many physical qubits make a logical one?", a: "From tens to thousands, depending on the code and the error rates." },
      { q: "Is 48 logical qubits better than 1,000 physical qubits?", a: "They are different quantities. The logical qubits are more reliable, and the comparison depends on the details." },
    ], references: [
      "Terhal, B. M. (2015). Quantum error correction for quantum memories. Reviews of Modern Physics, 87, 307-346.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Bluvstein, D., et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature, 626, 58-65.",
      "Bravyi, S., et al. (2024). High-threshold and low-overhead fault-tolerant quantum memory. Nature, 627, 778-782.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
      "Quantum Computing Report (2026). Infleqtion achieves 30 entangled logical qubits on Sqale neutral atom quantum processor. https://quantumcomputingreport.com/infleqtion-achieves-30-entangled-logical-qubits-on-sqale-neutral-atom-quantum-processor/amp/",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
      { label: "Paper: High-Threshold and Low-Overhead Fault-Tolerant Quantum Memory", href: "/research/bravyi-high-threshold-low-overhead-memory-2024" },
      { label: "Term: Logical Qubit", href: "/dictionary/logical-qubit" },
      { label: "Term: Logical Error Rate", href: "/dictionary/logical-error-rate" },
      { label: "Forecast: Logical Qubits: How Many, How Good, and When", href: "/future/logical-qubit-milestones-future" },
    ], words: 1008 },
  { slug: "quantum-supremacy-means-better-than-classical", myth: "Quantum supremacy means quantum computers are now better than classical computers", category: "industry", verdict: "Misleading", summary: "Quantum supremacy was defined as a quantum device performing some task that no classical computer can do in reasonable time, even if the task is useless. It has been claimed and debated on artificial tasks, and it does not mean that quantum computers are generally better.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "When Google announced in October 2019 that its Sycamore processor had achieved quantum supremacy, headlines declared that quantum computers had surpassed classical ones, or that a quantum computer had done in 200 seconds what the world's best supercomputer would need 10,000 years to do. The word supremacy suggests that one kind of computer is superior to another, and many readers took it to mean that quantum computers were now simply better.",
          "The term was introduced by John Preskill in 2012 with a narrower meaning. Understanding what it meant, and what it did not, clears up the confusion.",
        ] },
      { heading: "What supremacy meant", paragraphs: [
          "Preskill defined quantum supremacy as the point at which a quantum device can perform a well-defined computational task that no classical computer can perform in a reasonable time, regardless of whether the task is useful. The aim was to mark a scientific milestone, a demonstration that quantum devices access a regime of computational complexity out of reach for classical machines. The task chosen by Google was random circuit sampling: running a random quantum circuit and sampling its output. It has no application. The device had 53 working qubits and ran circuits with about 20 cycles, and the team estimated that exact classical simulation would take about 10,000 years on a leading supercomputer.",
          "The experiment succeeded in showing that the device worked as intended, with fidelity measured by cross-entropy benchmarking, and in a regime where exact simulation was extremely expensive. It did not show a useful application, and it did not show that quantum computers were better at tasks that people care about.",
        ] },
      { heading: "The classical response", paragraphs: [
          "The claim that 10,000 years were needed was disputed within days. IBM argued that with disk storage and better algorithms, the task could be done in about two and a half days, as Pednault and coauthors described. Later, tensor network methods reduced the time further, and in 2022 Pan and Zhang reported simulating the sampling problem on 512 GPUs in about 15 hours. The quantum experiment was 200 seconds, so there still was a gap, but it was much smaller than the headline. The pattern repeated with the 2020 Jiuzhang photonic experiment and later claims, each followed by classical algorithms that cut the estimated difficulty, and Aharonov and coauthors proved in 2023 that noisy random circuit sampling with constant noise can be simulated classically in polynomial time, which means that the largest noisy experiments might be easier than they look.",
          "This back and forth does not discredit the experiments, which were real feats of engineering. It shows that claims of supremacy depend on the current state of classical algorithms, and that the line moves.",
        ] },
      { heading: "The word itself", paragraphs: [
          "The term became controversial. Many researchers objected to the connotations of supremacy, associated with white supremacy, and a growing number prefer quantum advantage or quantum computational advantage. Google's paper used the term, and Nature published it, while other groups, such as IBM, argued that advantage should refer to doing something useful faster. The community has since used advantage for claims about tasks and utility for more practical ones, and the debate about terminology continues. This is another reason to read claims carefully.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The experiments showed that quantum devices can enter regimes where classical simulation is hard, which is a real scientific milestone, and a necessary step for the field. They provided data on error rates and the performance of large circuits, and they helped develop benchmarking methods. It is fair to say that quantum computers can do some tasks that are very hard to do classically. The myth is the jump to general superiority.",
        ] },
      { heading: "Supremacy, advantage, and utility compared", paragraphs: [
          "Three terms are now in use. Quantum supremacy, or quantum computational advantage on a task, means that a quantum device performs a defined task that classical computers cannot do in reasonable time. Quantum advantage in the practical sense means that a quantum computer does something useful better than the best classical method, taking cost and quality into account, and no one has shown this yet. Utility, a term used by IBM in 2023, means that a device produces reliable results at a scale that is beyond brute-force classical simulation and that could be useful to scientists, without claiming advantage. Keeping these three apart is one of the simplest ways to read quantum news correctly: the first has been claimed, the second has not, and the third is an intermediate notion.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth shapes public expectations. If quantum computers are already supreme, people might expect them to be applied to real problems now, and become disillusioned when this does not happen. Investors may assume that the technology is mature. Skeptics, on the other hand, may use the weakness of the tasks to dismiss the field. A balanced view recognizes the milestone and its limits.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that supremacy meant beating classical computers at any task, including a useless one, and that the claimed experiments did so for random sampling, with debate about the margin. Ask what task was done, whether it is useful, and what classical methods were compared. Point out that the field now emphasizes verifiable and useful tasks, and that error-corrected machines are the route to practical advantage.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. Quantum supremacy refers to a milestone on a specific, artificial task, and it was contested by classical simulations. It does not mean that quantum computers are generally better than classical ones.",
        ] },
    ], facts: [
      "John Preskill introduced the term quantum supremacy in 2012.",
      "Google's 2019 experiment used 53 qubits and random circuit sampling, with a claimed classical cost of 10,000 years.",
      "IBM argued in 2019 that the task could be done in about two and a half days classically.",
      "Pan and Zhang simulated the task in about 15 hours on 512 GPUs in 2022.",
    ], spot: [
      "Check what task was performed and whether it is useful.",
      "Ask what classical methods were compared and how recent they were.",
      "Notice whether the claim is about supremacy, advantage, or utility.",
      "Look for independent classical challenges.",
    ], faq: [
      { q: "Did Google achieve quantum supremacy?", a: "It claimed to for random circuit sampling, and the margin was disputed by classical simulations." },
      { q: "Why do some people avoid the word supremacy?", a: "Because of its connotations, and because it suggests general superiority. Advantage is often preferred." },
      { q: "Does supremacy mean quantum computers are useful now?", a: "No. The tasks used so far have no practical application." },
    ], references: [
      "Preskill, J. (2012). Quantum computing and the entanglement frontier. arXiv:1203.5813.",
      "Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. Nature, 574, 505-510.",
      "Pednault, E., et al. (2019). Leveraging secondary storage to simulate deep 54-qubit Sycamore circuits. arXiv:1910.09534.",
      "Pan, F., & Zhang, P. (2022). Simulation of quantum circuits using the big-batch tensor network method. Physical Review Letters, 128, 030501.",
      "Zhong, H.-S., et al. (2020). Quantum computational advantage using photons. Science, 370, 1460-1463.",
      "Aharonov, D., Gao, X., Landau, Z., Liu, Y., & Vazirani, U. (2023). A polynomial-time classical algorithm for noisy random circuit sampling. STOC '23, 945-957.",
      "Hangleiter, D., & Eisert, J. (2023). Computational advantage of quantum random sampling. Reviews of Modern Physics, 95, 035001.",
    ], links: [
      { label: "Paper: Quantum Supremacy Using a Programmable Superconducting Processor", href: "/research/arute-quantum-supremacy-2019" },
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Paper: A Polynomial-Time Classical Algorithm for Noisy Random Circuit Sampling", href: "/research/aharonov-noisy-random-circuit-sampling-2023" },
      { label: "Term: Quantum Supremacy", href: "/dictionary/quantum-supremacy" },
      { label: "Term: Quantum Advantage", href: "/dictionary/quantum-advantage" },
      { label: "Forecast: Quantum Advantage by 2030: What to Expect and What Not To", href: "/future/quantum-advantage-2030-future" },
    ], words: 1079 },
  { slug: "majorana-chip-proves-topological-qubits", myth: "Microsoft's Majorana chip proves that topological qubits exist and are ready", category: "industry", verdict: "Unproven", summary: "Microsoft says its Majorana chips contain topological qubits, but independent physicists say the evidence is not yet conclusive, and the field has a history of retractions. A long parity lifetime is not the same as a working, long-lived qubit.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "In February 2025, Microsoft announced Majorana 1, which it called the first quantum chip with a topological core and described as a step toward a million-qubit processor. In June 2026 it announced Majorana 2, with claims of much longer parity lifetimes and a thousandfold improvement in reliability. Press coverage often repeated the language of breakthroughs and proof, and some headlines said that a new state of matter had been created or that topological qubits were solved.",
          "The announcements describe real engineering progress on difficult devices. But the claims that the devices are topological, and that they are qubits with the promised protection, are what the community has not accepted.",
        ] },
      { heading: "What is claimed", paragraphs: [
          "A topological qubit would store information in a global property of a system, such as the parity of electrons shared by two Majorana zero modes at the ends of a semiconductor-superconductor nanowire, so that local noise could not easily disturb it. The idea goes back to Kitaev in 1997 and was reviewed by Nayak and coauthors in 2008. If realized, such qubits would need much less error correction. Microsoft's 2025 Nature paper reported interferometric single-shot measurement of parity in indium arsenide and aluminum devices, and the company argued that this showed the building blocks of a topological qubit. The 2026 announcement, with a lead-based superconductor in a tetron design, reported parity lifetimes of about 20 seconds and a large improvement in reliability, and repeated a target of useful quantum computing by 2029.",
        ] },
      { heading: "Why scientists are cautious", paragraphs: [
          "The field has a history that justifies caution. Experiments in the 2010s, starting with Mourik and coauthors in 2012, saw zero-bias conductance peaks that were interpreted as Majorana modes, but ordinary disorder and other states can produce similar signals. In 2018, a Nature paper from a Microsoft-linked group reported quantized Majorana conductance, and it was retracted in 2021 after problems with data selection were identified. Critics such as Vincent Mourik, Sergey Frolov, and others have repeatedly asked for open data and for tests that distinguish Majorana modes from trivial states.",
          "For the 2025 paper, the journal published an editorial note stating that the results do not by themselves show that Majorana modes are present. Many physicists welcomed the progress in device fabrication and measurement and asked for further evidence, such as independent replication and demonstration of braiding or fusion rules. For the 2026 announcement, coverage noted that the claims came from the company and that skepticism remained. The central point is that a long parity lifetime is a useful property, but it is not the same as the coherence time of a computational qubit, and it does not by itself demonstrate gates or topological protection.",
        ] },
      { heading: "What would count as proof", paragraphs: [
          "Convincing evidence would include independent replication by other groups with different fabrication, clear signatures of non-Abelian statistics through braiding or fusion experiments, coherent control of a qubit with error rates that beat those of conventional qubits, and open data. Synthetic demonstrations, in which Google and Quantinuum simulated non-Abelian anyons on conventional processors in 2023, show that the theory is sound, but they do not provide protection in hardware.",
          "Until such evidence appears, the claims are best treated as promising and unconfirmed. Importantly, this is a statement about the state of evidence, not a claim that topological qubits are impossible.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Progress is real. Microsoft and its partners have developed new materials and measurement techniques, DARPA selected the company, along with PsiQuantum, for the final phase of its US2QC program in 2025, and the physics of topological states is a deep and active field. It is possible that topological qubits will work, and the payoff would be large. The myth is in treating announcements as proof and in assuming readiness.",
        ] },
      { heading: "What parity lifetime means", paragraphs: [
          "A parity lifetime is the time over which the measured parity of a device, the evenness or oddness of the number of electrons in a region, remains stable before it flips. A long parity lifetime shows that the device is protected against certain kinds of noise, such as quasiparticles that change the electron number, and that is valuable, because such events were a major problem in earlier devices. But a qubit needs more: the ability to prepare superpositions, to rotate between states, to entangle with other qubits, and to measure in different bases, all with low error. A device can hold a parity for 20 seconds and still not be a qubit in this sense. The distinction is why independent experts focus on whether gates and coherent control have been demonstrated, and why a number such as 20 seconds, while impressive, should not be read as a coherence time.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Overstating the status of topological qubits misleads investors, policymakers, and students. It may lead governments to bet on timelines that the evidence does not support, or lead observers to dismiss the effort entirely if claims later prove premature. The right stance is patient scrutiny: wait for replication and for demonstration of qubit operations.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what was measured and whether independent groups have reproduced it. Ask whether a qubit operation was demonstrated and what its error rate was. Note the history of retractions and the editorial statement on the 2025 paper, and say that the evidence will come from replication. Treat timelines such as useful quantum computing by 2029 as company targets, not as established results.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Unproven. Microsoft's Majorana devices are an interesting engineering advance, but independent physicists have not accepted that they are topological qubits, and a long parity lifetime is not a working qubit. Replication and qubit operations are needed.",
        ] },
    ], facts: [
      "Microsoft announced Majorana 1 in February 2025 and Majorana 2 in June 2026.",
      "A 2018 Nature paper on quantized Majorana conductance was retracted in 2021.",
      "Nature added an editorial note that the 2025 paper does not by itself show Majorana modes.",
      "DARPA selected Microsoft and PsiQuantum for the final phase of US2QC in 2025.",
    ], spot: [
      "Look for claims of proof based on a company announcement alone.",
      "Ask whether independent groups have replicated the result.",
      "Check whether a qubit operation, not only a parity measurement, was shown.",
      "Notice the difference between parity lifetime and qubit coherence.",
    ], faq: [
      { q: "Has anyone built a topological qubit?", a: "Microsoft says so. Many physicists say that the evidence is not yet conclusive." },
      { q: "Why was a 2018 paper retracted?", a: "Problems with data selection and analysis were found in the Nature paper reporting quantized Majorana conductance." },
      { q: "When will topological qubits be ready?", a: "Unknown. Microsoft targets 2029, which is a company goal." },
    ], references: [
      "Kitaev, A. Yu. (2003). Fault-tolerant quantum computation by anyons. Annals of Physics, 303, 2-30.",
      "Nayak, C., Simon, S. H., Stern, A., Freedman, M., & Das Sarma, S. (2008). Non-Abelian anyons and topological quantum computation. Reviews of Modern Physics, 80, 1083-1159.",
      "Mourik, V., et al. (2012). Signatures of Majorana fermions in hybrid superconductor-semiconductor nanowire devices. Science, 336, 1003-1007.",
      "Microsoft Azure Quantum (2025). Interferometric single-shot parity measurement in InAs-Al hybrid devices. Nature, 638, 651-655.",
      "Andersen, T. I., et al. (2023). Non-Abelian braiding of graph vertices in a superconducting processor. Nature, 618, 264-269.",
      "Quantum Computing Report (2026). Microsoft announces an improved Majorana qubit design. https://quantumcomputingreport.com/microsoft-announces-an-improved-majorana-qubit-design/",
    ], links: [
      { label: "Paper: Fault-Tolerant Quantum Computation by Anyons", href: "/research/kitaev-fault-tolerant-anyons-2003" },
      { label: "Term: Topological Qubit", href: "/dictionary/topological-qubit" },
      { label: "Company: Microsoft", href: "/companies/microsoft" },
      { label: "Forecast: Topological Qubits: Will Majorana Machines Deliver?", href: "/future/topological-qubits-future" },
    ], words: 1093 },
  { slug: "quantum-computers-use-enormous-energy", myth: "Quantum computers consume enormous amounts of energy", category: "industry", verdict: "Partly true", summary: "Today's quantum computers draw tens of kilowatts, far less than supercomputers or AI data centers, mostly for cooling and control. Future fault-tolerant machines may need megawatts, and whether quantum computing is energy-efficient depends on whether it solves problems with real advantage.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Pictures of quantum computers show large cryogenic systems with compressors, pumps, and racks of electronics, and articles mention temperatures colder than space. People infer that such machines must consume huge amounts of power. At the same time, news about the energy appetite of AI data centers makes energy a topic of public concern, and quantum computing is sometimes drawn into the same discussion, either as a villain or as a savior.",
          "The truth is more modest at present and more uncertain in the future. A quantum computer is not an energy hog by today's standards, but it is not free of energy costs, and scaling will change the picture.",
        ] },
      { heading: "What current machines use", paragraphs: [
          "A superconducting quantum computer needs a dilution refrigerator, which is cooled by a pulse-tube cryocooler with compressors, and the total electrical power for the cooling system is typically on the order of ten to a few tens of kilowatts. Control electronics, microwave sources, amplifiers, and computers add to this, so that a complete system, including auxiliary equipment, draws power comparable to a small commercial building or a few households. Trapped-ion and neutral-atom machines use lasers, vacuum pumps, and electronics, and draw similar amounts, depending on the design. Photonic machines use lasers and cooled detectors.",
          "For comparison, the Frontier exascale supercomputer at Oak Ridge National Laboratory uses about 20 megawatts, a thousand times more, and AI data centers can draw tens to hundreds of megawatts. A quantum computer's energy use today is therefore small in absolute terms. Of course, its computational output is also small, so the comparison per useful result is not meaningful until useful results exist.",
        ] },
      { heading: "What scaling might do", paragraphs: [
          "Scaling changes the arithmetic. A fault-tolerant machine with a million physical qubits needs control electronics for each qubit or group of qubits, real-time decoders that process terabits of data per second, and cooling for a much larger heat load. Fellous-Asiani and coauthors analyzed the energy efficiency of full-stack quantum computers in 2023 and showed that for a given computation, the total energy depends strongly on the interplay between the physical error rate, the number of qubits, and the overheads of cooling and control, and that optimized designs can reduce consumption significantly. Auffèves argued in 2022 that the field needs to treat energy as a design metric, a quantum energy initiative, from the start. A rough expectation is that large machines could draw megawatts, similar to a supercomputer.",
          "Whether this is a lot depends on the work done. If a calculation that would take a classical supercomputer months can be done in hours, the energy saved may exceed the energy used. Jaschke and Montangero estimated in 2023 that quantum computers could achieve an energy-efficiency advantage for some tasks at large problem sizes, because the energy of the quantum computation scales more slowly with problem size than classical supercomputing for those tasks.",
        ] },
      { heading: "Advantage is the key", paragraphs: [
          "This leads to the main point: energy efficiency follows computational advantage. For tasks where quantum computers have no advantage, they use more energy than classical computers for the same result, since they carry overheads for error correction and cooling. For tasks with a large advantage, such as simulating certain quantum systems, they could use much less. At present, there is no verified commercial advantage, so there is no demonstrated energy benefit either. The claim that quantum computing will solve the energy problem of computing is therefore unproven, and the claim that it is an energy disaster is exaggerated.",
        ] },
      { heading: "Beyond electricity", paragraphs: [
          "The footprint includes more than electricity. Manufacturing dilution refrigerators, superconducting chips, lasers, and vacuum systems consumes energy and materials, and some inputs, such as helium-3 and helium-4, are scarce or nonrenewable. Helium used in cooling is lost to the atmosphere when released, and the supply of helium-3 is limited. Systems that recycle helium, designs that avoid dilution refrigerators, and more efficient cooling reduce these costs. Full life-cycle accounting for quantum computers is rare, and as the industry grows, customers and regulators may begin to ask for it, as they do for data centers.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computers do require significant energy for cooling and control, relative to their current computational output, and future machines may need megawatts. The concern is legitimate and it is good that researchers raise it early. The myth is in the word enormous, which exaggerates today's consumption, and in assuming that energy use will necessarily be a problem.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth can shape public opinion and policy. If quantum computers are seen as energy hogs, there may be resistance to funding, and if they are seen as green solutions, expectations may be inflated. A balanced picture supports sensible design: measuring energy per logical operation, optimizing cooling and control, and comparing with classical alternatives for the same task. Vendors can help by publishing energy numbers, which are rarely reported now.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Give numbers: tens of kilowatts for a present system, compared with about 20 megawatts for the Frontier supercomputer and far more for AI data centers. Then say that the future depends on scale and advantage. Ask any claim about energy savings what task, what classical baseline, and what measure of energy was used.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Partly true. Quantum computers use real power, mostly for cooling and control, but today's machines draw tens of kilowatts, far less than supercomputers or AI data centers. Whether future machines are energy-efficient depends on scale and on real computational advantage.",
        ] },
    ], facts: [
      "A current quantum computer draws roughly ten to a few tens of kilowatts.",
      "The Frontier supercomputer uses about 20 megawatts.",
      "Jaschke and Montangero estimated in 2023 that some tasks could show an energy-efficiency advantage at large scale.",
      "Energy per logical operation is rarely reported by vendors.",
    ], spot: [
      "Look for claims that quantum computers will cut computing energy use without a task and baseline.",
      "Check whether the energy figure includes cooling, control, and decoding.",
      "Ask for energy per logical operation or per solved problem.",
      "Beware of comparisons that mix a quantum device with a classical data center of unrelated size.",
    ], faq: [
      { q: "How much power does a quantum computer use?", a: "Tens of kilowatts for current systems, mostly for cooling and control." },
      { q: "Will quantum computers be green?", a: "It depends on whether they solve problems with real advantage, which is not yet shown." },
      { q: "Do quantum computers help with AI energy use?", a: "There is no evidence that they do." },
    ], references: [
      "Jaschke, D., & Montangero, S. (2023). Is quantum computing green? An estimate for an energy-efficiency quantum advantage. Quantum Science and Technology, 8, 025001.",
      "Auffèves, A. (2022). Quantum technologies need a quantum energy initiative. PRX Quantum, 3, 020101.",
      "Fellous-Asiani, M., et al. (2023). Optimizing resource efficiencies for scalable full-stack quantum computers. PRX Quantum, 4, 040319.",
      "Krinner, S., et al. (2019). Engineering cryogenic setups for 100-qubit scale superconducting circuit systems. EPJ Quantum Technology, 6, 2.",
      "Shea, D. A., & Morgan, D. (2010). The helium-3 shortage: Supply, demand, and options for Congress. Congressional Research Service Report R41419.",
    ], links: [
      { label: "Term: Dilution Refrigerator", href: "/dictionary/dilution-refrigerator" },
      { label: "Term: Cryogenic CMOS Control", href: "/dictionary/cryo-cmos" },
      { label: "Forecast: The Energy and Environmental Footprint of Quantum Computing", href: "/future/quantum-energy-sustainability-future" },
      { label: "Forecast: Cryogenics, Wiring, and Control Electronics: The Hidden Scaling Problem", href: "/future/quantum-cryogenics-wiring-future" },
    ], words: 1070 },
  { slug: "quantum-computers-will-be-sold-for-home", myth: "Quantum computers will soon be sold for homes and phones", category: "industry", verdict: "Mostly false", summary: "Powerful quantum computers need specialized equipment and will be used through the cloud, not at home. Small educational desktop devices exist, but they are teaching tools, not computers for everyday use.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Every computing technology has moved from rooms to desks to pockets, and people expect the same for quantum. Advertisements promise quantum phones and laptops, startups announce devices for consumers, and news stories about miniaturization suggest that a personal quantum computer is a matter of time. A few real products reinforce the idea: small educational quantum computers that sit on a desk.",
          "The comparison with classical computing misses the fact that quantum computers are not general-purpose replacements for classical ones, and that the physical requirements of most qubit technologies prevent them from shrinking to a phone.",
        ] },
      { heading: "Why powerful machines will not be personal", paragraphs: [
          "Most qubit technologies need elaborate infrastructure. Superconducting machines need dilution refrigerators and cables, ion and atom machines need ultra-high vacuum, lasers, and optical tables, and photonic machines need detectors and sources. These systems are measured in cubic meters and cost millions of dollars. Error-corrected machines will have thousands or millions of physical qubits and large classical control systems and decoders. Even with miniaturization of components, such as cryogenic control chips and integrated photonics, they will likely occupy data center racks, not pockets.",
          "The tasks also do not match consumer needs. Quantum computers offer speedups for specific problems: breaking cryptography, simulating molecules and materials, and a few others. Consumers rarely need these. Web browsing, video, games, and office applications do not benefit, and the cost of loading data into quantum states can erase any gain. Personal quantum computing would be like owning a particle accelerator for your own use, and for the same reasons, access through shared facilities is the natural model. Cloud platforms from IBM, Amazon, Microsoft, and others already provide it, with free tiers for learning.",
        ] },
      { heading: "The desktop devices that do exist", paragraphs: [
          "Small quantum computers for education are on sale. Companies such as SpinQ in China sell desktop machines based on nuclear magnetic resonance, with two or three qubits, for classrooms, priced in the range of thousands to tens of thousands of dollars. They use small magnets and the spins of nuclei in a molecule in solution at room temperature, the same family of technique as the NMR quantum computers of the late 1990s, as described by Gershenfeld and Chuang in 1997 and reviewed by Jones in 2011. They can run simple algorithms, such as Grover's search on two qubits and demonstrations of entanglement, and are meant to teach students how qubits and gates work. They cannot do anything beyond what a classical computer can simulate trivially, and they are not intended to.",
          "These devices demonstrate that quantum computing can be taught hands-on, which is valuable, and they are sometimes mistaken for a sign that consumer quantum computers are near. They are teaching tools, similar to a chemistry set.",
        ] },
      { heading: "Quantum technology that will reach consumers", paragraphs: [
          "Consumers will meet quantum technology in other ways, as discussed elsewhere on this site. Messaging and browsing will use post-quantum cryptography in software. Some phones include quantum random number chips. Sensors based on quantum effects, such as atomic clocks and magnetometers, may appear in navigation and health devices. And medicines, materials, and batteries designed with the help of quantum computers may eventually reach the market. In all of these, the consumer does not own the quantum computer.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Technology does shrink, and surprising miniaturizations have occurred. Chip-based photonic and spin qubit technologies may reduce the size of some components, and small quantum devices may find roles in sensing and communication in portable form. It is not impossible that some niche quantum devices will be carried in pockets, such as a quantum random number chip. The myth is wrong about quantum computers for general computing.",
        ] },
      { heading: "What a data center model looks like", paragraphs: [
          "The likely model is the data center. A company or a university that needs quantum computing rents time on a machine hosted by a vendor or a national laboratory, submits a program through a software kit, and receives results, as it does today with cloud supercomputers. Large customers, such as governments and pharmaceutical firms, may buy a system and install it in their own facility, much as they buy mainframes or supercomputers. In both cases the machine is a shared, professionally operated resource.",
          "The model has advantages for users. They do not need to maintain cryogenic equipment, calibrate lasers, or hire specialists to keep qubits working, and they can switch among providers and technologies as the field changes. It also means that the skills a person needs are software and problem formulation, which can be learned on a laptop today, and not the operation of exotic hardware. For most readers of this site, the useful question is therefore not when they will own a quantum computer, but what problems in their field a shared quantum resource might eventually help to solve.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth fuels scams and marketing. Products labeled quantum, such as quantum phones or laptops with no actual quantum hardware, have been sold, and investment schemes promise personal quantum computing. It also distorts expectations of the technology's path: the likely path is shared, specialized facilities. Understanding this helps consumers, and also helps students to see where careers and opportunities lie.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what physical system the device uses and where the qubits are. Look for the specifications: number of qubits, error rates, and published results. Explain that powerful quantum computers need infrastructure that does not fit in a home, and that cloud access is the practical route. If a product is an educational NMR device, treat it as a teaching tool. If a product claims to be a quantum phone, be skeptical.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Powerful quantum computers will be accessed through the cloud, not owned at home, and no consumer task needs one. Small educational desktop devices exist but are not practical computers.",
        ] },
    ], facts: [
      "Educational desktop NMR quantum computers with two or three qubits are sold by companies such as SpinQ.",
      "NMR quantum computing was demonstrated by Gershenfeld and Chuang and by Cory and coauthors in 1997.",
      "Cloud platforms offer free access to real quantum hardware for learning.",
      "Consumers will mainly encounter quantum technology through post-quantum security, sensors, and quantum-designed products.",
    ], spot: [
      "Be wary of products labeled quantum computer for home or phone use.",
      "Ask for the number of qubits, the technology, and published results.",
      "Check whether the claims match known physical requirements.",
      "Distinguish teaching devices from computing tools.",
    ], faq: [
      { q: "Can I buy a quantum computer?", a: "Small educational desktop devices exist. Powerful machines are sold to institutions and accessed through the cloud." },
      { q: "Will my next phone have a quantum chip?", a: "It may include a quantum random number chip, but not a quantum computer." },
      { q: "How can I try quantum computing at home?", a: "Use free cloud services and simulators with a software kit such as Qiskit." },
    ], references: [
      "Gershenfeld, N. A., & Chuang, I. L. (1997). Bulk spin-resonance quantum computation. Science, 275, 350-356.",
      "Cory, D. G., Fahmy, A. F., & Havel, T. F. (1997). Ensemble quantum computing by NMR spectroscopy. PNAS, 94, 1634-1639.",
      "Jones, J. A. (2011). Quantum computing with NMR. Progress in Nuclear Magnetic Resonance Spectroscopy, 59, 91-120.",
      "Chuang, I. L., Gershenfeld, N., & Kubinec, M. (1998). Experimental implementation of fast quantum searching. Physical Review Letters, 80, 3408-3411.",
      "Herrero-Collantes, M., & Garcia-Escartin, J. C. (2017). Quantum random number generators. Reviews of Modern Physics, 89, 015004.",
      "Humble, T. S., et al. (2021). Quantum computers for high-performance computing. IEEE Micro, 41(5), 15-23.",
    ], links: [
      { label: "Paper: A Fast Quantum Mechanical Algorithm for Database Search", href: "/research/grover-database-search-1996" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Forecast: Quantum in Everyday Life: What Ordinary People Will Actually Use", href: "/future/quantum-consumer-future" },
    ], words: 1114 },
  { slug: "quantum-computing-will-make-ai-superintelligent", myth: "Quantum computing will make AI superintelligent or dramatically faster", category: "society", verdict: "Mostly false", summary: "There is no evidence that quantum computers will speed up mainstream AI such as large language models. Loading data into quantum states is costly, many proposed quantum speedups for machine learning have been matched classically, and the clearest overlap is AI helping to build quantum computers.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Both quantum computing and artificial intelligence attract hype, and the two are often combined in headlines: quantum AI will create superintelligence, quantum computers will train models in seconds, a quantum chatbot will outthink all humans. The idea is attractive: AI needs vast computing power, quantum computers are said to offer vast computing power, so the pairing seems natural. Companies add to it with products labeled quantum AI.",
          "Behind the slogans there is a small amount of real research, which is far from the claims.",
        ] },
      { heading: "Why quantum computers do not obviously speed up deep learning", paragraphs: [
          "Training and running large neural networks consists mostly of multiplying huge matrices of numbers, a task for which graphics processors and specialized chips are extremely efficient. Quantum computers have known speedups for particular structured problems, and none of them applies directly to this workload. Several obstacles stand in the way. Loading classical data into a quantum state takes about as many operations as there are numbers to load, which can eliminate the gain, as Aaronson stressed in 2015. Reading results out is limited, since n qubits give at most n classical bits. And quantum logical operations on error-corrected machines are slow compared with classical ones, so only large speedups pay off, as Babbush and coauthors showed in 2021.",
          "Early proposals promised exponential speedups for machine learning tasks, but several were undone by classical algorithms. Ewin Tang showed in 2018 that a classical algorithm matches the quantum recommendation-system algorithm, and follow-up work dequantized related proposals. Huang and coauthors showed in 2021 that classical models with access to training data can often match quantum models, and Bowles, Ahmed, and Schuld found in 2024 in a large benchmark that classical models generally outperformed the quantum models tested. Variational quantum circuits face barren plateaus, in which training gradients vanish exponentially with the number of qubits, as McClean and coauthors showed in 2018.",
        ] },
      { heading: "What may be true", paragraphs: [
          "A few directions remain open. Quantum computers may help learn from quantum data, such as the output of quantum sensors and simulators. Huang and coauthors showed in 2022 that a quantum learner with quantum memory can learn certain properties of physical systems with exponentially fewer experiments than a classical learner. Liu, Arunachalam, and Temme gave in 2021 a rigorous separation for a learning task built on the discrete logarithm problem, though it is contrived. Quantum sampling might help generative models in niche cases. None of these is about making chatbots faster.",
          "The overlap that is real is in the other direction. Artificial intelligence is already helping to build quantum computers: AlphaQubit, a neural network decoder from Google DeepMind and Google Quantum AI, made fewer errors than conventional decoders on real data in 2024, reinforcement learning was used to design control sequences for a GKP qubit that passed break-even in 2023, and machine learning is used for calibration, circuit compilation, and discovery of error-correcting codes. This is a practical synergy, and it is the opposite of the myth: AI helps quantum, not the reverse.",
        ] },
      { heading: "Superintelligence", paragraphs: [
          "The claim of superintelligence adds another layer of speculation. Whatever one thinks of the prospects for advanced AI, nothing in current quantum computing research suggests that quantum hardware is a missing ingredient. The capabilities of language models have grown through data, algorithms, and classical computing at scale. Some have speculated that consciousness or intelligence involves quantum effects in the brain, as in the proposal by Penrose and Hameroff, but this is a minority hypothesis without experimental support, and arguments about decoherence by Tegmark and others suggest that quantum computation in the warm brain is implausible. A link between quantum computing and superintelligence is therefore a speculation on top of a speculation.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The fields do interact. Quantum machine learning is a legitimate research area with interesting theory, and it may find applications, particularly for quantum data. AI is a valuable tool for quantum engineering. And future quantum computers might accelerate specific tasks used in AI pipelines, such as sampling or optimization subroutines, if advantage materializes. The myth is in the sweeping claim that quantum computing will make AI superintelligent or dramatically faster.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth misdirects investment and attention. Companies may adopt quantum AI products with no real benefit, and investors may be swayed by labels. It also obscures the actual energy question for AI, which is classical, and the real contribution of AI to quantum technology. For students, it may suggest that quantum computing is a shortcut to AI expertise, when in practice the skills are different.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what the quantum component does and how it compares with a tuned classical model on the same data. Ask how data are loaded and read out. Point out that large language models run on classical hardware and that no quantum algorithm for them is known. Then mention that AI is helping quantum computing with decoding and calibration.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. There is no evidence that quantum computing will make mainstream AI dramatically faster or superintelligent. The credible overlaps are quantum learning from quantum data in research settings, and AI methods that help to build and operate quantum computers.",
        ] },
    ], facts: [
      "Tang's 2018 result showed that a classical algorithm matches the quantum recommendation-system algorithm.",
      "A 2024 benchmark found that classical models generally outperformed the quantum machine learning models tested.",
      "Loading N classical numbers into a quantum state typically takes about N operations.",
      "AlphaQubit, a neural decoder, beat conventional decoders on real quantum error correction data in 2024.",
    ], spot: [
      "Watch for products labeled quantum AI with no described quantum advantage.",
      "Ask what classical baseline was used and how it was tuned.",
      "Check how data are loaded and read out.",
      "Distinguish AI helping quantum from quantum helping AI.",
    ], faq: [
      { q: "Will quantum computers train ChatGPT faster?", a: "There is no evidence for it." },
      { q: "Is quantum machine learning real?", a: "It is an active research area, with limited demonstrated advantage so far." },
      { q: "Is AI used in quantum computing?", a: "Yes. Neural decoders, learned control, and automated calibration are examples." },
    ], references: [
      "Biamonte, J., et al. (2017). Quantum machine learning. Nature, 549, 195-202.",
      "Cerezo, M., et al. (2022). Challenges and opportunities in quantum machine learning. Nature Computational Science, 2, 567-576.",
      "Tang, E. (2019). A quantum-inspired classical algorithm for recommendation systems. STOC '19, 217-228.",
      "Huang, H.-Y., et al. (2021). Power of data in quantum machine learning. Nature Communications, 12, 2631.",
      "Huang, H.-Y., et al. (2022). Quantum advantage in learning from experiments. Science, 376, 1182-1186.",
      "Bowles, J., Ahmed, S., & Schuld, M. (2024). Better than classical? The subtle art of benchmarking quantum machine learning models. arXiv:2403.07059.",
      "McClean, J. R., et al. (2018). Barren plateaus in quantum neural network training landscapes. Nature Communications, 9, 4812.",
      "Bausch, J., et al. (2024). Learning high-accuracy error decoding for quantum processors. Nature, 635, 834-840.",
      "Aaronson, S. (2015). Read the fine print. Nature Physics, 11, 291-293.",
    ], links: [
      { label: "Paper: A Quantum-Inspired Classical Algorithm for Recommendation Systems", href: "/research/tang-quantum-inspired-recommendation-2019" },
      { label: "Paper: Barren Plateaus in Quantum Neural Network Training Landscapes", href: "/research/mcclean-barren-plateaus-2018" },
      { label: "Paper: Learning High-Accuracy Error Decoding for Quantum Processors", href: "/research/bausch-alphaqubit-decoder-2024" },
      { label: "Term: Quantum Machine Learning (QML)", href: "/dictionary/quantum-machine-learning" },
      { label: "Forecast: Quantum AI: Hype, Hope, and the Real Overlap", href: "/future/quantum-ai-future" },
    ], words: 1014 },
  { slug: "quantum-computers-will-cure-diseases-soon", myth: "Quantum computers will cure diseases and discover new drugs within a few years", category: "society", verdict: "Mostly false", summary: "Quantum computers may eventually help compute the chemistry of some molecules, but useful drug-discovery calculations need machines far beyond today's, and most of the cost and failure in drug development lies in biology and clinical trials, not in computing energies.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Pharmaceutical partnerships, startup pitches, and news stories promise that quantum computers will revolutionize drug discovery, find cures for cancer and Alzheimer's, and shorten development from decades to months. The logic is appealing: drugs are molecules, molecules are governed by quantum mechanics, so quantum computers should be the right tool. Some companies describe pilot projects as breakthroughs, and the language of miracle cures is common.",
          "There is a real scientific basis for interest in the area, but the claims about timing and scale are not supported by the evidence.",
        ] },
      { heading: "The real scientific case", paragraphs: [
          "Calculating how a molecule behaves means solving for the behavior of its electrons. For many drug-like molecules, classical methods such as density functional theory and coupled cluster are accurate enough, and machine-learned force fields are advancing quickly. For molecules with strongly correlated electrons, such as those containing transition metals, the classical methods are unreliable, and exact methods scale exponentially. A fault-tolerant quantum computer running quantum phase estimation could in principle compute ground-state energies to chemical accuracy for such systems, as proposed by Aspuru-Guzik and coauthors in 2005 and discussed for drug discovery by Cao and coauthors in 2018.",
          "The resource estimates show the scale. For the nitrogenase cofactor FeMoco, a standard benchmark, Lee and coauthors estimated in 2021 that about four million physical qubits and several days would be needed with a surface-code machine at 0.1 percent error. Estimates for cytochrome P450, an enzyme central to drug metabolism, are similar. Today's best machines have dozens of logical qubits at most. So even the calculations that are clearly useful are years away, on central estimates in the early to mid 2030s, with considerable uncertainty.",
        ] },
      { heading: "Why a better energy calculation is not a cure", paragraphs: [
          "Drug development is long, and computation of energies is only one step. A typical program involves identifying a biological target, finding molecules that bind it, optimizing properties such as potency, solubility, metabolism, and safety, testing in cells and animals, and running clinical trials in humans, which take years and cost hundreds of millions of dollars. The main reason drugs fail is not inaccurate binding energies but biology: the target does not matter in the disease, the drug is toxic, or it does not work in people. Quantum calculation of molecular energies addresses a small part of the process.",
          "Artificial intelligence has already changed parts of the pipeline without quantum computers. AlphaFold predicted protein structures with high accuracy in 2021, as reported by Jumper and coauthors, and machine learning is used to propose molecules and predict properties. The classical competition is strong and improving, so quantum computers will need to show advantage on specific hard subproblems, such as metalloenzymes and photochemistry, to matter.",
        ] },
      { heading: "What pilots show", paragraphs: [
          "Pharmaceutical companies have run pilots with quantum computers, often in collaboration with hardware and software firms. These have mainly produced learning, tools, and small-molecule demonstrations that can be done on classical computers, and they are not evidence of a quantum advantage. Announcements often describe a quantum computer being used to simulate a molecule, which is true but usually refers to a tiny molecule such as hydrogen or lithium hydride that a classical computer handles exactly. As the 2020 review by Bauer, Bravyi, Motta, and Chan and the review by McArdle and coauthors discuss, the reach of current devices is limited by noise.",
        ] },
      { heading: "Where quantum technology helps medicine sooner", paragraphs: [
          "The nearest medical benefits come from quantum sensing. Optically pumped magnetometers allow wearable brain imaging, as Boto and coauthors showed in 2018, and diamond sensors map magnetic fields at the scale of cells. Quantum-safe cryptography will protect health data over decades. These benefits do not need fault-tolerant machines, and some are already in research hospitals.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computing may contribute to drug discovery in the longer term, especially for compounds where strong correlation matters, and the field's work on algorithms and resource estimates is steadily lowering the requirements. It is reasonable for pharmaceutical companies to build expertise. The error is in the timescale and the scope: a few years is much too short, and cures are far beyond what an energy calculation delivers.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth raises false hopes among patients and the public, and can lead to misallocation of research funds. It can also be used in marketing and fundraising to make claims that cannot be met. When timelines slip, the damage to trust affects the whole field. Clear communication about what quantum computing might contribute, and when, protects both science and the public.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask which step of drug development the quantum computer would improve, how many logical qubits the calculation needs, and when such machines are expected. Ask how the result would compare with classical and AI methods. Point out that the cited resource estimates are for machines that do not yet exist. Treat claims of cures within years as marketing.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Quantum computers may help with specific chemistry calculations in the future, but the needed machines are years away, and the main challenges in drug development lie in biology and clinical testing. Cures within a few years are not a realistic expectation.",
        ] },
    ], facts: [
      "Lee and coauthors estimated in 2021 that FeMoco needs about four million physical qubits and several days on a surface-code machine.",
      "Today's best machines have dozens of logical qubits at most.",
      "Most drug candidates fail for biological reasons, not because of inaccurate energy calculations.",
      "Wearable quantum magnetometers for brain imaging are already used in research hospitals.",
    ], spot: [
      "Watch for claims of cures or drug discoveries by quantum computers within a few years.",
      "Ask whether the molecule in a demonstration is small enough to be solved classically.",
      "Check which step of the drug pipeline is addressed.",
      "Compare claims with the published resource estimates.",
    ], faq: [
      { q: "Can quantum computers design drugs today?", a: "No. Current machines simulate only tiny molecules that classical computers can handle exactly." },
      { q: "When might quantum chemistry become useful?", a: "Central estimates point to the early to mid 2030s for some narrow problems, with large uncertainty." },
      { q: "Is AI more useful for drug discovery now?", a: "Yes. AI methods such as AlphaFold are already widely used." },
    ], references: [
      "Aspuru-Guzik, A., Dutoi, A. D., Love, P. J., & Head-Gordon, M. (2005). Simulated quantum computation of molecular energies. Science, 309, 1704-1707.",
      "Cao, Y., Romero, J., & Aspuru-Guzik, A. (2018). Potential of quantum computing for drug discovery. IBM Journal of Research and Development, 62(6), 6:1-6:20.",
      "Reiher, M., Wiebe, N., Svore, K. M., Wecker, D., & Troyer, M. (2017). Elucidating reaction mechanisms on quantum computers. PNAS, 114, 7555-7560.",
      "Lee, J., et al. (2021). Even more efficient quantum computations of chemistry through tensor hypercontraction. PRX Quantum, 2, 030305.",
      "McArdle, S., Endo, S., Aspuru-Guzik, A., Benjamin, S. C., & Yuan, X. (2020). Quantum computational chemistry. Reviews of Modern Physics, 92, 015003.",
      "Bauer, B., Bravyi, S., Motta, M., & Chan, G. K.-L. (2020). Quantum algorithms for quantum chemistry and quantum materials science. Chemical Reviews, 120, 12685-12717.",
      "Jumper, J., et al. (2021). Highly accurate protein structure prediction with AlphaFold. Nature, 596, 583-589.",
      "Boto, E., et al. (2018). Moving magnetoencephalography towards real-world applications with a wearable system. Nature, 555, 657-661.",
    ], links: [
      { label: "Paper: Elucidating Reaction Mechanisms on Quantum Computers", href: "/research/reiher-reaction-mechanisms-quantum-computers-2017" },
      { label: "Paper: Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction", href: "/research/lee-tensor-hypercontraction-chemistry-2021" },
      { label: "Paper: Simulated Quantum Computation of Molecular Energies", href: "/research/aspuru-guzik-molecular-energies-2005" },
      { label: "Industry: Quantum Computing for Pharmaceuticals and Drug Discovery", href: "/industries/pharmaceuticals" },
      { label: "Forecast: Quantum Computing in Medicine and Drug Discovery", href: "/future/quantum-medicine-future" },
    ], words: 1019 },
  { slug: "quantum-computing-is-all-hype", myth: "Quantum computing is all hype and will never work", category: "society", verdict: "Mostly false", summary: "The hype is real, but so is the progress. Error correction now works as theory predicts, machines with hundreds of qubits exist, and the cryptographic risk is taken seriously by governments. The open questions are timing and usefulness, not whether the physics works.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The myth is a reaction to genuine overpromising. Since 2017, announcements have often claimed breakthroughs, record qubit counts, and imminent applications, and many have been followed by qualifications, classical rebuttals, or silence. Valuations of public companies have risen faster than revenue, and predictions made years ago have not come true: Mohseni and coauthors wrote in Nature in 2017 that quantum technologies could be commercialized in five years. Critics such as Gil Kalai and Mikhail Dyakonov have argued that large quantum computers are impossible in principle. It is understandable that many people conclude that the whole field is a bubble.",
          "Hype and substance can both exist, and separating them is the point of careful reading.",
        ] },
      { heading: "Evidence that the physics works", paragraphs: [
          "The strongest evidence concerns error correction, which was the main theoretical objection. The threshold theorem of 1997 and 1998 said that large computations are possible if error rates are low enough and errors are not too correlated. Experiments have tested these conditions. In 2021, Google showed exponential suppression of errors in a repetition code as the code was enlarged from 5 to 21 qubits. In 2024, its Willow chip showed a surface-code logical qubit whose error fell by a factor of about 2.14 each time the code distance increased from 3 to 5 to 7, with the distance-7 memory outliving its best physical qubit by about 2.4 times. Trapped-ion, neutral-atom, and other platforms have shown logical qubits with errors below those of physical qubits, and Harvard and QuEra operated a logical processor with 48 logical qubits in 2023. These results show that the theory's predictions hold at small scale.",
          "Other evidence includes the steady improvement of qubit quality: superconducting qubit coherence has risen from nanoseconds in 1999 to hundreds of microseconds and above a millisecond, trapped-ion gate fidelities exceed 99.9 percent, and neutral-atom arrays have grown to thousands of atoms. Machines are available to the public on the cloud, and their results match quantum mechanics. Three Nobel Prizes in 2012, 2022, and 2025 recognized work behind the technology.",
        ] },
      { heading: "What is unproven", paragraphs: [
          "Several important things have not been shown. Error correction has not been demonstrated at the scale of hundreds of logical qubits with low logical error, and scaling to the sizes needed for cryptanalysis or chemistry is an open engineering challenge, with issues such as correlated error bursts, decoding speed, wiring, and cooling. No quantum computer has yet done a commercially useful task better than the best classical method. Claims of advantage have been contested. And timelines are uncertain, with roadmaps that point to fault-tolerant machines around 2029 to 2033 and a real chance of delays.",
          "So the accurate summary is that the physics is working at small scale, and the engineering and application questions are open.",
        ] },
      { heading: "The hype that is real", paragraphs: [
          "Many specific claims in the field are exaggerated. Statements that quantum computers will solve every hard problem, make AI superintelligent, cure diseases within years, or break all encryption are unsupported. Startups use the word quantum for products that have little to do with it, and some financial products and consumer devices are marketed on the label. Critics who point to these are right, and a healthy skepticism about announcements is a good habit, as described in the reader's guide to judging claims on this site.",
        ] },
      { heading: "Why governments and companies are not just chasing hype", paragraphs: [
          "Large institutions have acted on the risk side with concrete steps. NIST standardized post-quantum cryptography in 2024, the NSA set deadlines for national security systems, and the EU and UK published migration timelines, because the threat to cryptography is serious enough to act on even if its timing is uncertain. Funding by governments, including the US, EU, UK, India, China, and Japan, rests on strategic reasoning, not only on enthusiasm. At the same time, funding decisions can be mistaken, and the existence of large budgets does not prove that the technology will work.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The field has a history of overpromising and of timelines slipping. Sensible people should discount claims, wait for replication, and recognize that the central applications are still to be demonstrated. A funding correction is plausible. The myth goes too far in concluding that the technology is a fraud or that it will never work, when experiments keep passing the tests that skeptics proposed.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Dismissing the field entirely can be as harmful as believing the hype. It may lead organizations to ignore the cryptographic risk, students to overlook opportunities, and policymakers to cut research that has long-term value. A balanced view recognizes both the progress and the uncertainty, and supports preparation that pays off in all scenarios: post-quantum migration, skills, and open standards.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Distinguish hype from physics. Agree that many claims are exaggerated, and point to the experiments on error correction as evidence that the underlying approach works at small scale. Say that the open questions are timing and usefulness. Suggest following leading indicators such as logical error rates and independent replication. Offer the three-scenario view of this site as a way to think about the uncertainty.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. There is a great deal of hype, but the technology is real and error correction works as predicted at small scale. The open questions concern when large machines will exist and what they will be good for.",
        ] },
    ], facts: [
      "Google's 2024 Willow experiment showed logical error falling by about 2.14 per increase in code distance.",
      "Mohseni and coauthors predicted in 2017 that quantum technologies could be commercialized in five years, which did not happen.",
      "Nobel Prizes in Physics in 2012, 2022, and 2025 recognized work behind quantum technology.",
      "NIST standardized post-quantum cryptography in 2024 in response to the quantum threat.",
    ], spot: [
      "Distinguish claims about the physics from claims about applications and timelines.",
      "Look for independent replication and honest discussion of limits.",
      "Be skeptical of both extreme enthusiasm and blanket dismissal.",
      "Follow leading indicators such as logical error rates.",
    ], faq: [
      { q: "Is quantum computing a scam?", a: "No. The technology is real and progressing, though many claims about timing and applications are exaggerated." },
      { q: "Could it fail?", a: "Yes, scaling is an open challenge, and a slow scenario is possible." },
      { q: "Why do governments take it seriously?", a: "Because of the potential threat to cryptography and the strategic importance of the technology." },
    ], references: [
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
      "Kalai, G. (2011). How quantum computers fail: Quantum codes, correlations in physical systems, and noise accumulation. arXiv:1106.0485.",
      "Dyakonov, M. (2018). The case against quantum computing. IEEE Spectrum, 15 November 2018.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
      "Google Quantum AI (2021). Exponential suppression of bit or phase errors with cyclic error correction. Nature, 595, 383-387.",
      "Bluvstein, D., et al. (2024). Logical quantum processor based on reconfigurable atom arrays. Nature, 626, 58-65.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "National Institute of Standards and Technology (2024). FIPS 203, FIPS 204, and FIPS 205.",
    ], links: [
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: Logical Quantum Processor Based on Reconfigurable Atom Arrays", href: "/research/bluvstein-logical-quantum-processor-2023" },
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Forecast: The Skeptic's Case: What Critics Get Right and Wrong", href: "/future/quantum-skeptics-case-future" },
      { label: "Forecast: A Reader's Guide to Judging Quantum Claims", href: "/future/judging-quantum-claims-future" },
    ], words: 1048 },
  { slug: "quantum-computers-make-no-errors", myth: "Quantum computers are perfect machines that do not make errors", category: "computing", verdict: "False", summary: "Today's quantum computers are noisy. Operations fail a fraction of a percent of the time, and errors accumulate quickly. Controlling errors is the central challenge of the field, and error correction exists precisely because quantum computers make mistakes.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum computers are described in superlatives: unimaginably powerful, able to solve problems in seconds that would take supercomputers millennia. It is natural to assume that such machines are precise and reliable. Popular accounts focus on the potential and rarely mention that the machines produce wrong answers a large share of the time, or that most of the effort in the field goes into controlling noise. The word computer also suggests the dependable machines we use every day, which almost never make arithmetic mistakes.",
          "The reality is the opposite. Quantum information is fragile, and errors are the main obstacle to useful quantum computing.",
        ] },
      { heading: "How noisy are quantum computers?", paragraphs: [
          "The error rates of current devices are typical of the best experimental physics, and far above those of classical computers. On leading superconducting and trapped-ion machines, single-qubit gates have errors of about 0.01 to 0.1 percent, two-qubit gates of about 0.1 to 0.5 percent, and measurements of about one percent or less, with the best trapped-ion results at the lower end. A classical processor, by comparison, performs operations with failure rates on the order of one in a quadrillion or better, so that errors are negligible in everyday use. For a quantum circuit with a thousand two-qubit gates at an error rate of 0.3 percent, the chance that no error occurs is about five percent, which means that most runs produce a wrong or degraded result.",
          "The errors come from many sources: interaction with the environment, which destroys superposition, called decoherence; imperfect control pulses; unwanted coupling between neighboring qubits; leakage out of the computational states; and imperfect readout. Kjaergaard and coauthors reviewed the sources in superconducting devices in 2020, Bruzewicz and coauthors in trapped ions in 2019. Rare events, such as cosmic-ray impacts that cause bursts of errors across a chip, as McEwen and coauthors showed in 2021, add to the problem.",
          "These noise levels are why Preskill named the current era noisy intermediate-scale quantum, or NISQ, in 2018: devices with tens to hundreds of qubits that cannot yet correct errors, and so are limited to relatively shallow circuits.",
        ] },
      { heading: "What is done about errors", paragraphs: [
          "There are three levels of response. The first is better hardware: improving materials, fabrication, control, and shielding to lower physical error rates, which has improved by orders of magnitude over two decades. The second is error mitigation, a family of techniques that reduce the effect of noise on the results of shallow circuits without correcting errors, by extrapolating to zero noise, probabilistic cancellation, and post-processing, as in the work of Temme, Bravyi, and Gambetta in 2017. Mitigation has useful limits: Takagi and coauthors and Quek and coauthors showed that its cost grows exponentially with circuit size, so it cannot scale indefinitely.",
          "The third is quantum error correction, which encodes each logical qubit across many physical qubits and repeatedly measures error syndromes. Its existence is the strongest proof that quantum computers make errors, since it would not be needed otherwise. In 2024, Google showed that logical error fell by a factor of about 2.14 each time the surface code distance increased from 3 to 5 to 7, ending at about 0.14 percent per cycle, which is still far above the one-in-a-billion level needed for large algorithms. Roadmaps aim for logical error rates of one in a million and below by about 2029 to 2033.",
        ] },
      { heading: "Noise as a feature of benchmarks", paragraphs: [
          "The noise of real devices is visible in benchmarks. Quantum volume, introduced by IBM, measures the largest random circuit a machine can run before errors dominate, and it grows slowly because noise limits it. When you run a simple circuit on a cloud quantum computer, such as an entangled pair of qubits, you will see not just the expected outcomes but a few percent of wrong ones. Experiments that claim advantage must account for noise in their analysis, and the noisy output is part of what makes classical simulation easier, as Aharonov and coauthors proved in 2023 for random circuit sampling with constant noise.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "In principle, quantum mechanics is exact and the algorithms are deterministic mathematical procedures. A perfect quantum computer would give exactly the predicted probabilities. Real machines also have strengths: quantum gates can be implemented with very high precision in the best systems, and error correction promises exponentially suppressed errors. So it is true that errors are not a fundamental obstacle. But the machines of today are far from perfect, and the myth is in assuming that they are.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth hides what the field is actually doing. It makes it hard to understand why companies focus on logical qubits, why roadmaps emphasize error rates, and why qubit counts alone are misleading. It also leads users to trust results from noisy devices without checking. For students, it obscures the most interesting part of the subject: how reliable computation can be built from unreliable parts, a theme as old as von Neumann's work on reliable machines from unreliable components.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Point out that error correction exists because quantum computers make errors, and that every serious roadmap is organized around reducing them. Suggest running a Bell-state circuit on a cloud device and looking at the unexpected outcomes. Ask any performance claim for the error rates and for how errors were handled.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computers are noisy, with error rates thousands of times higher than classical computers, and managing errors is the central challenge of the field. Error correction works at small scale and is the route to reliable machines.",
        ] },
    ], facts: [
      "Two-qubit gate errors on leading machines are about 0.1 to 0.5 percent.",
      "A circuit of 1,000 two-qubit gates at 0.3 percent error succeeds only about five percent of the time.",
      "Google's 2024 surface-code logical error was about 0.14 percent per cycle at distance 7.",
      "Preskill named the current era noisy intermediate-scale quantum in 2018.",
    ], spot: [
      "Be wary of descriptions of quantum computers as exact or perfect.",
      "Ask for error rates and how errors were handled in any result.",
      "Check whether results were obtained with error mitigation or correction.",
      "Look for evidence of noise in any cloud device you try.",
    ], faq: [
      { q: "Why do quantum computers make errors?", a: "Because qubits are fragile and interact with their environment, and gates are imperfect." },
      { q: "Can errors be removed completely?", a: "Error correction can make logical errors very small, but it needs many physical qubits." },
      { q: "Is error mitigation the same as correction?", a: "No. Mitigation reduces the effect of noise on results but does not scale indefinitely." },
    ], references: [
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "Kjaergaard, M., et al. (2020). Superconducting qubits: Current state of play. Annual Review of Condensed Matter Physics, 11, 369-395.",
      "Bruzewicz, C. D., Chiaverini, J., McConnell, R., & Sage, J. M. (2019). Trapped-ion quantum computing: Progress and challenges. Applied Physics Reviews, 6, 021314.",
      "McEwen, M., et al. (2022). Resolving catastrophic error bursts from cosmic rays in large arrays of superconducting qubits. Nature Physics, 18, 107-111.",
      "Temme, K., Bravyi, S., & Gambetta, J. M. (2017). Error mitigation for short-depth quantum circuits. Physical Review Letters, 119, 180509.",
      "Quek, Y., et al. (2024). Exponentially tighter bounds on limitations of quantum error mitigation. Nature Physics, 20, 1648-1658.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
    ], links: [
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Paper: Quantum Error Correction Below the Surface Code Threshold", href: "/research/google-below-threshold-2024" },
      { label: "Paper: A Polynomial-Time Classical Algorithm for Noisy Random Circuit Sampling", href: "/research/aharonov-noisy-random-circuit-sampling-2023" },
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: NISQ", href: "/dictionary/nisq" },
      { label: "Forecast: What Could Go Wrong: Failure Modes of Large Quantum Computers", href: "/future/quantum-failure-modes-future" },
    ], words: 1087 },
  { slug: "quantum-computing-will-destroy-jobs", myth: "Quantum computing will destroy jobs and make programmers obsolete", category: "society", verdict: "False", summary: "There is no evidence that quantum computing will eliminate jobs. The field is creating roles in engineering, software, and security, classical programming remains central, and the largest effects on employment from computing come from AI, not quantum.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Every wave of automation brings predictions of mass unemployment, and quantum computing, described as unimaginably powerful, seems a candidate. Articles suggest that quantum computers will do the work of analysts, chemists, traders, or programmers in seconds. Some commentators combine quantum computing with AI and predict that human expertise will become obsolete. Students and professionals ask whether it is worth learning programming when quantum computers will replace it.",
          "The prediction misunderstands what quantum computers do and how technologies change work.",
        ] },
      { heading: "Quantum computers do not replace programmers", paragraphs: [
          "Quantum computers are specialized accelerators for particular problems. They do not run general-purpose software, and every quantum computer depends on classical computers for control, error correction decoding, and data processing. Programs for quantum machines are written by software engineers using languages and kits such as Qiskit, Cirq, and PennyLane, which are built on Python and other classical languages. Most software, such as web services, databases, mobile apps, and operating systems, has no quantum counterpart and will remain classical. The idea that quantum computers will make programmers obsolete confuses a new tool with a replacement for the whole craft.",
          "Quantum computing also adds work. Compilers, simulators, decoders, control systems, cloud platforms, and application software for quantum machines all need to be built and maintained, and the industry reports shortages of qualified people. Hughes and coauthors surveyed employers in 2022 and found demand for engineers in electrical, mechanical, and software fields as well as physicists, and Fox, Zwickl, and Lewandowski argued in 2020 that higher education needed to expand training for a broader quantum workforce. Roles in post-quantum cryptography migration are growing quickly in security teams, as banks and governments inventory and replace cryptographic systems.",
        ] },
      { heading: "Where quantum might change work", paragraphs: [
          "In the long term, if fault-tolerant machines achieve advantage in chemistry, materials, or optimization, the methods used by some professionals will change. A computational chemist might use quantum calculations as one more tool, as chemists adopted classical computers and density functional theory in earlier decades, and the expected outcome is more capable chemists, not fewer. Cryptographers and security engineers have already had to adapt to the quantum threat, which has increased demand for their skills. The effect is likely to be a shift of tasks within occupations, as with most technologies, not wholesale elimination.",
          "The timeline also matters. Useful fault-tolerant quantum computers are expected, on central estimates, in the 2030s, and the number of people who will interact directly with them is small. Job effects, if any, will come slowly.",
        ] },
      { heading: "Where the real disruption is", paragraphs: [
          "The technology that is changing programming and many knowledge jobs now is artificial intelligence, with tools that generate code, text, and analysis. Whatever one thinks of its effects, they are not caused by quantum computing, and the two are often conflated in popular accounts. Quantum computing is not currently an engine of automation. Anyone worried about the future of programming should look at AI and at the changing skill requirements of software work, and a student interested in quantum should expect to need strong classical foundations in mathematics, algorithms, and engineering.",
        ] },
      { heading: "What to do as a worker or student", paragraphs: [
          "The practical advice is to build durable skills: linear algebra, probability, programming, and a domain such as chemistry, finance, or security, then add quantum literacy. Employers value people who can bridge disciplines. For a software developer, learning to use a quantum software kit and to run small circuits on cloud hardware takes weeks, and it is a way to stay informed. For a security professional, learning about post-quantum cryptography is directly useful today. National programs, such as India's National Quantum Mission, fund training and fellowships to widen the pool of people who can work in the field.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Technology does change jobs, and quantum computing may eventually change how some scientific and engineering work is done. Some tasks, such as certain kinds of cryptographic analysis or molecular modeling, may be done differently. It is sensible to follow developments and to maintain adaptable skills. But there is no basis for predicting that quantum computing will cause mass job losses.",
        ] },
      { heading: "Lessons from earlier technologies", paragraphs: [
          "History offers some guidance. When classical computers spread, they eliminated certain clerical tasks and created far more roles in programming, networking, and information technology, and entire industries grew around them. The shift involved real disruption for individuals, and the aggregate effect was a change in the mix of jobs, not their disappearance. Quantum computing is a much smaller technology in employment terms, since it will be concentrated in a few facilities and used for narrow tasks. If it follows the pattern, the net effect will be new specialized roles and modest changes in some scientific and engineering occupations, which is a good reason for curiosity and not alarm.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth can discourage people from entering technical fields, or lead to fear and misdirected policy. It also distracts from the genuine issues of workforce shortages in quantum and related fields, and from the effects of AI on work. Accurate information supports better choices for students and workers and better planning by governments.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask which jobs would be replaced, by which quantum algorithm, and when. Point out that quantum computers are specialized, depend on classical computing, and create new roles. Suggest focusing on durable skills and on understanding where AI, not quantum, is changing work now.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computing is not expected to destroy jobs or make programmers obsolete. It is creating new roles, depends on classical software, and the larger forces changing work come from AI.",
        ] },
    ], facts: [
      "Hughes and coauthors found in 2022 that most quantum industry roles do not require a physics PhD.",
      "Every quantum computer relies on classical computers for control and decoding.",
      "Post-quantum cryptography migration is increasing demand for security engineers.",
      "Fault-tolerant machines are not expected before the 2030s on central estimates.",
    ], spot: [
      "Watch for claims that quantum computers will replace specific professions.",
      "Ask which algorithm would do the work and on what timeline.",
      "Notice if the claim confuses quantum computing with AI.",
      "Look at job postings and surveys for evidence on demand.",
    ], faq: [
      { q: "Should I stop learning to code because of quantum computers?", a: "No. Classical programming remains essential, and quantum software is written with it." },
      { q: "Will quantum computers replace data scientists or chemists?", a: "They are expected to become tools for some tasks, not replacements." },
      { q: "Which quantum-related jobs are growing?", a: "Engineering, software, and security roles, including post-quantum cryptography migration." },
    ], references: [
      "Hughes, C., et al. (2022). Assessing the needs of the quantum industry. IEEE Transactions on Education, 65, 592-601.",
      "Fox, M. F. J., Zwickl, B. M., & Lewandowski, H. J. (2020). Preparing for the quantum revolution: What is the role of higher education? Physical Review Physics Education Research, 16, 020131.",
      "Humble, T. S., et al. (2021). Quantum computers for high-performance computing. IEEE Micro, 41(5), 15-23.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
      "McKinsey and Company (2025). Quantum Technology Monitor.",
    ], links: [
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Forecast: Quantum Education and the Workforce", href: "/future/quantum-education-workforce-future" },
      { label: "Forecast: India and Quantum Technology: The National Quantum Mission and Beyond", href: "/future/quantum-india-future" },
    ], words: 1065 },
  { slug: "quantum-computers-predict-lottery-and-stock-market", myth: "Quantum computers can predict lottery numbers or beat the stock market", category: "society", verdict: "False", summary: "Lottery draws are random, and no computer can predict them. Markets are noisy and adaptive, and no known quantum algorithm forecasts prices. Products that promise quantum trading profits are a recognized type of investment fraud.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Advertisements for quantum trading bots, quantum lottery predictors, and quantum investing apps promise profits from the power of quantum computing. Some use real research in quantum finance as a hook, and some invent a technology that does not exist. Videos and social media posts claim that a quantum computer has cracked the lottery or learned to anticipate markets, and ask people to pay for access or to invest.",
          "The myth rests on the idea that quantum computers can examine all possible futures at once, which, as discussed in the myth on parallel computation, is not how they work, and on a false assumption that future outcomes are determined by information that a powerful enough computer could find.",
        ] },
      { heading: "The lottery", paragraphs: [
          "A fair lottery is designed so that each draw is independent and uniformly random. The balls or random number generators that select the numbers have no memory and no hidden pattern for an algorithm to learn. A computer of any kind, classical or quantum, cannot predict a truly random event better than chance. A quantum computer can generate random numbers, using the unpredictability of quantum measurement, but it cannot predict them. The odds of a jackpot in a typical lottery, for instance one in about 300 million for a major US game, are fixed by the rules, and software that claims to improve them is selling a fantasy. The one place where a quantum random number generator matters in lotteries is the opposite: it can supply random draws that are verifiably unpredictable, which is useful for fairness.",
        ] },
      { heading: "Financial markets", paragraphs: [
          "Markets are different from lotteries, but forecasting them is also not a matter of computing power. Prices reflect the actions of many participants who react to information and to each other, which makes the system adaptive: a predictable pattern, once exploited, tends to disappear. The efficient market hypothesis, set out by Eugene Fama in 1970, holds in various forms that prices already reflect available information, and decades of research find it hard to beat markets consistently after costs. Professional quantitative firms, with huge resources, find that most signals are weak and short-lived.",
          "There is real research on quantum computing for finance, but it concerns different tasks. Quantum amplitude estimation could speed up Monte Carlo calculations used to price derivatives and measure risk, as Herman and coauthors reviewed in 2023, though Chakrabarti and coauthors found in 2021 that the machines needed would be far beyond today's. Quantum optimization methods might help to construct portfolios, though evidence of advantage over classical solvers is lacking. These are computational speedups for models that people already use, not a way to see the future. A faster calculation of the value of a derivative does not tell you where the market will go.",
          "Some firms have reported improvements in prediction tasks from hybrid quantum-classical machine learning experiments, such as the 2025 report by HSBC and IBM of a modest improvement in predicting bond trade fills. These are results on a specific task against a specific baseline, and they do not imply that markets can be beaten.",
        ] },
      { heading: "Fraud and how to recognize it", paragraphs: [
          "Securities regulators and consumer agencies have warned about investment schemes that use buzzwords such as artificial intelligence and quantum computing to attract victims, promising high returns with little risk. A joint alert from US regulators in early 2024 described AI-related investment fraud, and similar warnings apply to quantum. Signs of fraud include guaranteed returns, pressure to invest quickly, claims of secret technology, lack of verifiable performance records, and requests for payment in cryptocurrency or to unregistered entities. No legitimate fund can guarantee returns, and no quantum trading product has shown a consistent edge in independent audits. Anyone offered such a product should check regulator registrations and be skeptical. This page is not investment advice.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computing may in time improve some financial calculations, and banks are investigating this. Quantum random number generators may make lotteries and simulations more trustworthy. And some quantitative strategies do use advanced computation. The myth is in asserting that quantum computers can predict the unpredictable.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "People lose money to such schemes. The myth also damages public understanding of what quantum computers do, and the reputation of the field. Knowing that randomness is a property of the process, and that markets are hard to beat, protects people from false promises.",
        ] },
      { heading: "A thought experiment on prediction", paragraphs: [
          "Suppose someone built a perfect quantum computer today. To predict a market, it would need a model that maps current information to future prices, and such a model does not exist, because prices depend on the future decisions of people, on news that has not yet happened, and on the reactions of other traders to any predictive model, including this one. More computing power does not create information that the world does not yet contain. In the same way, a perfect computer cannot predict the next toss of a fair coin. The limit is in the problem, not in the machine, which is why speed-ups, however large, do not translate into forecasts.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that a random event cannot be predicted by any computer, and that markets are shaped by the reactions of participants. Ask for independent, audited performance records for any trading product. Point out that real quantum finance research is about faster calculations, not forecasts. If someone promises guaranteed returns, treat it as a red flag.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum computers cannot predict lottery numbers, and no known quantum algorithm forecasts markets. Products making such claims should be treated as likely scams.",
        ] },
    ], facts: [
      "Lottery draws are independent and random, so no algorithm can predict them.",
      "Fama's efficient market hypothesis of 1970 holds that prices reflect available information.",
      "Quantum finance research focuses on faster pricing and risk calculations, not on forecasting.",
      "Regulators warned in 2024 about AI-related investment fraud, and similar warnings apply to quantum claims.",
    ], spot: [
      "Be skeptical of guaranteed returns from any technology.",
      "Check regulator registration and independent audits.",
      "Watch for claims that quantum computers see all futures at once.",
      "Notice if a product offers a quantum trading bot with no technical detail.",
    ], faq: [
      { q: "Can a quantum computer win the lottery?", a: "No. Lottery numbers are random and cannot be predicted." },
      { q: "Do banks use quantum computers to trade?", a: "They run pilots on pricing and risk calculations, not trading predictions." },
      { q: "How do I recognize a quantum investment scam?", a: "Guaranteed returns, secrecy, pressure to act, and no verifiable records." },
    ], references: [
      "Fama, E. F. (1970). Efficient capital markets: A review of theory and empirical work. Journal of Finance, 25, 383-417.",
      "Herman, D., et al. (2023). Quantum computing for finance. Nature Reviews Physics, 5, 450-465.",
      "Chakrabarti, S., et al. (2021). A threshold for quantum advantage in derivative pricing. Quantum, 5, 463.",
      "Brassard, G., Høyer, P., Mosca, M., & Tapp, A. (2002). Quantum amplitude amplification and estimation. Contemporary Mathematics, 305, 53-74.",
      "Herrero-Collantes, M., & Garcia-Escartin, J. C. (2017). Quantum random number generators. Reviews of Modern Physics, 89, 015004.",
      "U.S. Securities and Exchange Commission, NASAA, and FINRA (2024). Artificial intelligence (AI) and investment fraud: Investor alert.",
    ], links: [
      { label: "Paper: A Threshold for Quantum Advantage in Derivative Pricing", href: "/research/chakrabarti-derivative-pricing-threshold-2021" },
      { label: "Paper: Quantum Amplitude Amplification and Estimation", href: "/research/brassard-amplitude-amplification-estimation-2002" },
      { label: "Term: Quantum Random Number Generator", href: "/dictionary/quantum-random-number-generator" },
      { label: "Industry: Quantum Computing for Finance", href: "/industries/finance" },
      { label: "Forecast: Quantum Computing in Finance", href: "/future/quantum-finance-future" },
    ], words: 1075 },
  { slug: "experts-agree-on-quantum-timelines", myth: "Experts agree on when useful quantum computers will arrive", category: "society", verdict: "False", summary: "Expert opinion on timelines is widely spread. Company roadmaps point to the late 2020s, many academics expect the 2030s or later, and skeptics doubt that large machines will ever work. Surveys show broad ranges, and the dates are better read as scenarios than as consensus.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "News stories often quote a single date: useful quantum computers by 2030, a break of RSA within a decade, practical advantage next year. Quoted with confidence, such dates sound like the settled view of the field. Company roadmaps, government strategy documents, and consultant reports present timelines in tables and charts, which looks authoritative. The impression is that experts have worked it out and agree.",
          "In reality, timelines in this field are highly uncertain, and informed people hold a wide range of views.",
        ] },
      { heading: "What the surveys show", paragraphs: [
          "The best systematic data come from surveys. The Global Risk Institute's annual Quantum Threat Timeline Report, authored by Michele Mosca and Marco Piani, asks dozens of experts for the probability that a cryptographically relevant quantum computer will exist within various time frames. The answers differ widely: some experts give high probabilities within ten years, others give low ones, and many give broad uncertainty. The reports have found that the probabilities assigned to near-term dates have risen over time, but the spread among experts has remained large. Similar spreads appear in informal polls at conferences.",
          "The spread reflects genuine uncertainty about engineering questions: whether error rates will keep falling, whether correlated errors will cap scaling, whether decoders and cryogenic and wiring systems will scale, and whether funding will persist. Those who work close to a particular hardware platform tend to be more optimistic about it, and those who study the obstacles tend to be more cautious.",
        ] },
      { heading: "Different groups, different dates", paragraphs: [
          "Company roadmaps are the most specific. IBM plans a fault-tolerant machine called Starling in 2029 with about 200 logical qubits, Quantinuum targets a universal fault-tolerant machine called Apollo in 2029, Google targets a useful error-corrected computer by the end of the decade, and Microsoft says useful quantum computing by 2029, while IonQ has published much more aggressive targets. Roadmaps are statements of intent made by organizations with commercial and fundraising interests, and they have slipped before. Government programs, such as DARPA's Quantum Benchmarking Initiative, which tests the feasibility of utility-scale machines by 2033, reflect a more cautious horizon and an effort to check claims independently.",
          "Academic researchers vary. Some expect the first fault-tolerant machines in the early 2030s, others in the 2030s to 2040s, and some doubt that general-purpose machines will arrive at all. Skeptics such as Gil Kalai and Mikhail Dyakonov argue that scaling will fail, as discussed in the page on the skeptic's case. Mohseni and coauthors predicted in 2017 that quantum technologies could be commercialized in five years, a forecast that did not come true, which is a reminder that confident predictions from inside the field have been wrong.",
        ] },
      { heading: "How to use timelines", paragraphs: [
          "A sensible approach is to treat dates as scenarios with probabilities and to track leading indicators: logical error rates, code distance scaling, decoder speed, and independent replication of claims. Our own forecasts on this site use three scenarios, fast, base, and slow, with the probabilities about 20, 50, and 30 percent, and we regard those numbers as subjective and revisable. For decisions, the useful question is what to do that makes sense in all scenarios, such as cryptographic migration and skills, and what to treat as a bet.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "There is some consensus. Most experts agree that fault-tolerant quantum computing is possible in principle, that it is not here yet, that the next five years will answer key scaling questions, and that cryptographic migration should begin now. There is also agreement that the 2030s are the likely decade for the first machines capable of chemistry and cryptanalysis, within a broad range. The myth is in claiming agreement on specific dates.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "False precision leads to bad decisions. Organizations may time investments to a specific year and be disappointed, or may dismiss the threat because a date seems far away. Policymakers may set deadlines that are too tight or too loose. Recognizing the uncertainty makes plans more robust, and makes it easier to update as evidence arrives.",
        ] },
      { heading: "A note on incentives and calibration", paragraphs: [
          "When reading a forecast, consider the incentives of the person making it. A company raising capital benefits from announcing near dates, a government agency may prefer cautious language, a consultancy sells reports that quantify opportunity, and an academic's reputation may rest on either optimism or skepticism. None of these invalidates their views, but all shape what is said in public. A useful habit is to ask forecasters to state probabilities for different dates and to revisit them later, as practiced in forecasting research, so that track records can be checked. The field has too few such records, which is another reason for humility.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask who is making the prediction and what interest they have. Ask for the assumptions: error rates, scaling, and funding. Look at surveys and at the range of views, not a single quote. When someone gives a date, ask for the probability and the evidence that would change it.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Experts do not agree on when useful quantum computers will arrive. Views range from the late 2020s to beyond 2040, and company roadmaps should be read as goals, not consensus forecasts.",
        ] },
    ], facts: [
      "The Global Risk Institute's annual survey finds a wide spread of expert opinion on the timing of cryptographically relevant quantum computers.",
      "IBM, Quantinuum, and Microsoft target fault-tolerant or useful machines around 2029.",
      "DARPA's Quantum Benchmarking Initiative aims to test the feasibility of utility-scale machines by 2033.",
      "Mohseni and coauthors predicted in 2017 that quantum technologies could be commercialized in five years.",
    ], spot: [
      "Be wary of a single date presented as consensus.",
      "Ask who benefits from the prediction.",
      "Look for surveys that show the range of opinion.",
      "Ask what evidence would change the date.",
    ], faq: [
      { q: "When will useful quantum computers exist?", a: "No one knows. Estimates range from the late 2020s to beyond 2040." },
      { q: "Why do roadmaps differ from academic views?", a: "Roadmaps are goals by organizations with commercial interests, and academics weigh technical obstacles differently." },
      { q: "How should I plan?", a: "Use scenarios and prepare for actions that make sense in all of them." },
    ], references: [
      "Mosca, M., & Piani, M. Quantum threat timeline report. Global Risk Institute (annual).",
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
      "Preskill, J. (2018). Quantum computing in the NISQ era and beyond. Quantum, 2, 79.",
      "IBM (2025). IBM sets the course to build world's first large-scale, fault-tolerant quantum computer. IBM press release, 10 June 2025.",
      "Defense Advanced Research Projects Agency (2025). Quantum Benchmarking Initiative.",
      "Kalai, G. (2011). How quantum computers fail: Quantum codes, correlations in physical systems, and noise accumulation. arXiv:1106.0485.",
    ], links: [
      { label: "Paper: Quantum Computing in the NISQ Era and Beyond", href: "/research/preskill-nisq-era-2018" },
      { label: "Paper: Cybersecurity in an Era with Quantum Computers: Will We Be Ready?", href: "/research/mosca-cybersecurity-quantum-computers-2018" },
      { label: "Forecast: Three Scenarios for 2030, 2035, and 2040", href: "/future/quantum-scenarios-2035-future" },
      { label: "Forecast: The Skeptic's Case: What Critics Get Right and Wrong", href: "/future/quantum-skeptics-case-future" },
    ], words: 1020 },
  { slug: "single-breakthrough-will-change-everything", myth: "One big breakthrough will suddenly make quantum computers useful", category: "society", verdict: "Mostly false", summary: "Quantum computing has advanced through many incremental improvements plus a few conceptual advances. Some changes, such as better algorithms or crossing an error threshold, can shift estimates sharply, but a single event will not make the technology useful overnight.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Headlines celebrate breakthroughs: a new qubit, a record, a result that solves the problem of scaling. Each announcement is described as the moment when quantum computing changes. The popular image of technological progress, from the light bulb to the transistor, is of a flash of invention followed by rapid adoption. Investors and fans wait for the one development that will tip the field into practical use.",
          "The history of quantum computing shows something different: steady engineering improvements, interspersed with ideas that changed what was possible, and a long path between each step and useful machines.",
        ] },
      { heading: "How progress has actually happened", paragraphs: [
          "Two kinds of advances have mattered. Conceptual breakthroughs changed the picture of what is possible. Shor's algorithm in 1994 showed that quantum computers had a killer application. The discovery of quantum error correction in 1995 and 1996, and the threshold theorem in 1997 and 1998, answered the objection that noise would defeat large computations. The transmon, invented in 2007 by Koch and coauthors, made superconducting qubits much less sensitive to charge noise. Magic state distillation in 2005, surface codes in 2012, and Rydberg gates in 2000 each opened a route. More recently, magic state cultivation in 2024 and better arithmetic and storage methods cut the estimate for breaking RSA-2048 from 20 million qubits to under one million in 2025 without any change in hardware.",
          "Engineering progress is the other kind: improvements in materials, fabrication, control, and system integration, such as tantalum-based superconducting circuits with longer coherence, laser systems that cool and control thousands of atoms, and faster decoders. These happen continuously and add up. The 2024 below-threshold error correction experiment came from years of such improvements at Google, and it showed a kind of tipping point: once physical errors are low enough, adding qubits suppresses logical errors exponentially.",
        ] },
      { heading: "Why a single event is unlikely to flip the switch", paragraphs: [
          "A useful quantum computer needs many things at once: low error rates, enough qubits, fast control, real-time decoding, efficient magic state production, cooling and wiring that scale, manufacturing yield, and algorithms and software for valuable problems. A breakthrough in one of them does not remove the others. A new qubit with a very long coherence time, for example, would still need to be manufactured at scale, wired, controlled, and combined with error correction. This is why roadmaps lay out many steps over years, and why even optimistic plans have a decade of milestones.",
          "There are, however, nonlinear effects. Resource estimates can drop sharply when an algorithmic idea removes a bottleneck, as the RSA estimate did, and a result that shows scaling at one level can raise confidence and funding. These can bring timelines forward by years, which is why forecasts should have uncertainty ranges. But the transformation from laboratory machines to useful ones is not instantaneous.",
        ] },
      { heading: "The danger of waiting for the breakthrough", paragraphs: [
          "The myth has a security corollary. Some people say that nothing needs to be done until a breakthrough arrives, since only then will the threat be real. But because progress is incremental and estimates can fall quickly, the first signs of danger will be gradual: more logical qubits, lower error rates, falling resource estimates. Waiting for a clear signal means waiting too long, as the discussion of migration timelines explains.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Some advances are indeed pivotal. Error correction below threshold in 2024 was a landmark, and a demonstration of a thousand-qubit error-corrected machine would be another. Breakthroughs in algorithms could change what quantum computers are good for, as Shor's did. The myth is in expecting a single event to turn research into products.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "Expecting a breakthrough encourages passivity and overreaction to news. Organizations may postpone planning, and investors may chase announcements. It also distorts the view of the field's progress: because no single announcement delivers a useful machine, observers may conclude that nothing is happening. Understanding the incremental nature of progress supports patience and attention to leading indicators.",
        ] },
      { heading: "How to follow progress without waiting for headlines", paragraphs: [
          "A practical approach is to keep a short dashboard of indicators and check it once or twice a year. Useful items include the best published logical error rate and code distance on each major platform, the number of logical qubits with real error correction and no post-selection, the lowest published resource estimate for breaking RSA-2048 and for simulating a benchmark molecule, the decoder latency demonstrated at the largest code size, and whether independent groups have replicated key results. If several of these move in the right direction together, progress is real. If a single headline is not backed by movement in these measures, it is probably not a turning point. This kind of tracking replaces the wait for one decisive event with an ongoing, calm assessment.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Describe the many components needed and name a few. Use the RSA estimate example to show how software ideas can matter as much as hardware. Suggest watching indicators such as logical error rates and code distance scaling and not waiting for a headline. If someone says that a particular announcement changes everything, ask which of the many requirements it addresses.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Progress has come from many incremental advances and a few conceptual breakthroughs, and no single event will make quantum computers useful overnight. Some advances can bring timelines forward, so forecasts should allow for surprises.",
        ] },
    ], facts: [
      "Shor's algorithm (1994) and quantum error correction (1995) changed what was thought possible.",
      "The transmon (2007) made superconducting qubits far less sensitive to charge noise.",
      "Algorithmic and architectural advances cut the RSA-2048 estimate from 20 million qubits (2019) to under one million (2025).",
      "Google's 2024 experiment showed error suppression improving as code size grew.",
    ], spot: [
      "Be wary of announcements described as the breakthrough that changes everything.",
      "Ask which requirement of useful computing the result addresses.",
      "Look for leading indicators across several metrics.",
      "Notice whether the claim accounts for the other bottlenecks.",
    ], faq: [
      { q: "Has there been a breakthrough in quantum computing?", a: "There have been several important advances, such as error correction and below-threshold scaling, but none made machines useful on its own." },
      { q: "Could an algorithm change everything?", a: "New algorithms can change what machines are good for and how large they must be, as Shor's did." },
      { q: "Why do roadmaps have so many steps?", a: "Because many independent challenges must be solved together." },
    ], references: [
      "Shor, P. W. (1997). Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer. SIAM Journal on Computing, 26, 1484-1509.",
      "Shor, P. W. (1995). Scheme for reducing decoherence in quantum computer memory. Physical Review A, 52, R2493-R2496.",
      "Koch, J., et al. (2007). Charge-insensitive qubit design derived from the Cooper pair box. Physical Review A, 76, 042319.",
      "Gidney, C., Shutty, N., & Jones, C. (2024). Magic state cultivation: growing T states as cheap as CNOT gates. arXiv:2409.17595.",
      "Gidney, C. (2025). How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917.",
      "Google Quantum AI and collaborators (2025). Quantum error correction below the surface code threshold. Nature, 638, 920-926.",
    ], links: [
      { label: "Paper: Scheme for Reducing Decoherence in Quantum Computer Memory", href: "/research/shor-error-correcting-code-1995" },
      { label: "Paper: Charge-Insensitive Qubit Design Derived from the Cooper Pair Box", href: "/research/koch-transmon-charge-insensitive-qubit-2007" },
      { label: "Paper: Magic State Cultivation: Growing T States as Cheap as CNOT Gates", href: "/research/gidney-magic-state-cultivation-2024" },
      { label: "Paper: How to Factor 2048 Bit RSA Integers with Less than a Million Noisy Qubits", href: "/research/gidney-rsa-million-qubits-2025" },
      { label: "Forecast: How the Cost of Useful Quantum Computing Keeps Falling", href: "/future/resource-estimates-future" },
      { label: "Forecast: Three Scenarios for 2030, 2035, and 2040", href: "/future/quantum-scenarios-2035-future" },
    ], words: 1044 },
  { slug: "quantum-computers-need-exotic-programming", myth: "Quantum computers can only be programmed by physicists using exotic mathematics", category: "computing", verdict: "Mostly false", summary: "Quantum programs are written in ordinary languages such as Python using open-source kits, and anyone can run them on cloud hardware. Designing new quantum algorithms is hard, but using existing ones and learning to write circuits does not require a physics degree.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Pictures of quantum computing often show pages of equations with kets and bras, and descriptions emphasize abstract concepts such as Hilbert spaces and unitary operators. Programs for the earliest quantum machines were indeed written by physicists as sequences of laser or microwave pulses. It is easy to think that programming a quantum computer means manipulating the physical hardware with specialized mathematics, which only experts can do.",
          "Today, the situation is very different. Layers of software now hide most of the physics, as in classical computing, where programmers do not manipulate transistors.",
        ] },
      { heading: "How quantum programming works today", paragraphs: [
          "The most common way to program a quantum computer is to write a quantum circuit: a sequence of gates applied to qubits, followed by measurements. Open-source software kits, such as IBM's Qiskit, Google's Cirq, Xanadu's PennyLane, Amazon's Braket SDK, NVIDIA's CUDA-Q, and Quantinuum's tket, let the user write circuits in Python or similar languages. Javadi-Abhari and coauthors described Qiskit in 2024, and Bergholm and coauthors described PennyLane in 2018. The code looks like ordinary programming: you create a circuit object, add gates by calling functions, and run it on a simulator or on real hardware through a cloud service. A beginner can write a program that creates an entangled pair in a few lines, and run it on a real device within minutes.",
          "Under the hood, a compiler translates the circuit into the native operations of a particular machine, handles qubit connectivity by inserting swaps, and optimizes gate counts. Standards such as OpenQASM 3, described by Cross and coauthors in 2022, and the Quantum Intermediate Representation allow programs to move between tools and platforms. Higher-level tools go further: some companies, such as Classiq, let users describe what a computation should do and automatically synthesize a circuit, and libraries provide ready-made routines for chemistry, optimization, and machine learning. Control pulses, the actual electromagnetic signals sent to qubits, are managed by the hardware provider, though advanced users can access them.",
        ] },
      { heading: "What is still hard", paragraphs: [
          "Designing new quantum algorithms is hard, and doing it well requires mathematical training in linear algebra, probability, and often complexity theory. There are only a few families of algorithms with large speedups, and finding more is a research problem. Choosing whether a problem suits a quantum approach, formulating it, and judging the result against classical methods requires expertise. Writing efficient programs for error-corrected machines will need new tools for resource estimation and compilation, an area of active research. Working at the hardware level, designing qubits or control systems, needs physics and engineering knowledge.",
          "These difficulties resemble those of other technical fields. Using a machine learning library is easy, while designing new machine learning methods is hard. The same applies here: a software developer can use quantum kits and existing algorithms with modest preparation, while inventing new algorithms is the work of specialists.",
        ] },
      { heading: "Learning to program a quantum computer", paragraphs: [
          "A typical path takes a few months of part-time study. Learn the basics of qubits, gates, and measurement from a textbook such as Nielsen and Chuang or from free courses offered by providers. Install a kit and write the standard small programs: a Bell state, the Deutsch-Jozsa algorithm, quantum teleportation, and Grover search on a few qubits. Run them on simulators, and then on real devices through the free tiers of cloud services, to see the effect of noise. After that, explore variational algorithms with PennyLane or Qiskit, which look like machine learning code, and study applications in your own field. Publishing the code in a repository and contributing to open-source projects helps to build a record.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Quantum computing does require new concepts: superposition, entanglement, measurement, and interference are unfamiliar, and thinking in terms of amplitudes takes practice. The mathematics is not trivial. Some careers in the field do need a strong physics background, particularly in hardware and theory. And quantum programs are harder to debug than classical ones, since you cannot inspect the state of a running quantum computer without disturbing it. The myth is in saying that only physicists can program quantum computers, which is no longer true.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth discourages software developers, students, and companies from trying, and slows the growth of the community that the field needs. It also leaves the impression that quantum computing is accessible only to elite institutions, when anyone with an internet connection can run experiments. Open tools and free access are among the main reasons that the field has grown a global community, including in countries without large quantum laboratories.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Show a short program. A few lines of Python can create an entangled pair and run it on a real device. Point to the free cloud tiers and open-source kits. Then say honestly that inventing new algorithms is difficult, and that using existing ones is within reach of any programmer who is willing to learn linear algebra basics.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Mostly false. Quantum computers are programmed in ordinary languages with open-source kits, and anyone can run programs on real hardware. Inventing new algorithms and building hardware require specialized training, but using the tools does not require being a physicist.",
        ] },
    ], facts: [
      "Qiskit, Cirq, PennyLane, CUDA-Q, and others are open-source kits that use Python.",
      "OpenQASM 3 is a widely used language for describing quantum circuits.",
      "Free cloud tiers let anyone run circuits on real quantum hardware.",
      "Compilers translate circuits into the native operations of each machine.",
    ], spot: [
      "Watch for claims that quantum programming requires physics expertise.",
      "Ask whether the claim distinguishes using algorithms from inventing them.",
      "Try a short circuit on a free cloud device.",
      "Check the open-source documentation of a major kit.",
    ], faq: [
      { q: "What language do I use to program a quantum computer?", a: "Mostly Python, with libraries such as Qiskit, Cirq, or PennyLane." },
      { q: "Do I need to know quantum mechanics to program?", a: "You need basic ideas about qubits, gates, and measurement, learned with linear algebra, but not advanced physics." },
      { q: "Can I run my program on a real quantum computer?", a: "Yes, through cloud services with free or low-cost access." },
    ], references: [
      "Javadi-Abhari, A., et al. (2024). Quantum computing with Qiskit. arXiv:2405.08810.",
      "Bergholm, V., et al. (2018). PennyLane: Automatic differentiation of hybrid quantum-classical computations. arXiv:1811.04968.",
      "Cross, A., et al. (2022). OpenQASM 3: A broader and deeper quantum assembly language. ACM Transactions on Quantum Computing, 3, 12.",
      "Nielsen, M. A., & Chuang, I. L. (2010). Quantum computation and quantum information (10th anniversary ed.). Cambridge University Press.",
      "Gidney, C. (2021). Stim: a fast stabilizer circuit simulator. Quantum, 5, 497.",
      "Hughes, C., et al. (2022). Assessing the needs of the quantum industry. IEEE Transactions on Education, 65, 592-601.",
    ], links: [
      { label: "Term: Quantum SDK", href: "/dictionary/quantum-sdk" },
      { label: "Term: Quantum Circuit", href: "/dictionary/quantum-circuit" },
      { label: "Term: Transpilation", href: "/dictionary/transpilation" },
      { label: "Term: Quantum Cloud Computing", href: "/dictionary/quantum-cloud-computing" },
      { label: "Forecast: Patents, Open Source, and the Quantum Software Commons", href: "/future/quantum-ip-open-source-future" },
    ], words: 1014 },
  { slug: "every-quantum-company-will-win", myth: "Every quantum company and stock is a sure winner as the industry grows", category: "industry", verdict: "False", summary: "Industry growth does not guarantee success for individual companies. Quantum startups have failed, valuations are high relative to revenue, timelines are long, and consolidation is likely. This page is not investment advice.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "When a technology is expected to be worth tens or hundreds of billions of dollars, it is natural to think that any company in the field will share in the gains. Forecasts from consultancies, news about government funding, and sharp rises in the prices of quantum-related stocks in 2024 and 2025 encouraged this view. Social media posts and videos present quantum stocks as lottery tickets for the next big thing, and promoters of small companies use the label quantum to attract attention.",
          "But sector growth and company success are different things, and history is full of industries in which most early firms disappeared even as the industry flourished.",
        ] },
      { heading: "What the numbers show", paragraphs: [
          "Revenue in quantum computing is small. Analysts such as McKinsey estimated the revenue of quantum computing companies at roughly 650 to 750 million dollars in 2024, with expectations of passing one billion dollars in 2025, mostly from government and research customers. Valuations of public companies have often been many times their revenue, and several have valuations in the billions of dollars with revenue in the tens of millions or less. Boston Consulting Group estimated in 2024 that quantum computing could create 450 to 850 billion dollars of value by 2040, with vendors capturing 90 to 170 billion dollars, and noted that most of the value would come after fault-tolerant machines arrive. These forecasts are scenarios and depend on technical milestones that have not been reached.",
          "Mohseni and coauthors wrote in Nature in 2017 that quantum technologies could be commercialized within five years, and the expectation was not met. Forecasts for new technologies often overestimate the near term and underestimate the long term, and the winners and timing are hard to predict.",
        ] },
      { heading: "Failures and consolidation", paragraphs: [
          "Failures have already occurred. Zapata AI, a quantum software company that went public in 2024, reportedly ceased operations later that year. Several startups have been absorbed or have pivoted, and large technology companies have acquired or invested in others. IonQ made a series of acquisitions in 2024 and 2025, including Qubitekk, a controlling stake in ID Quantique, Lightsynq, Capella Space, Vector Atomic, and Oxford Ionics for about 1.08 billion dollars. Honeywell and Cambridge Quantum merged to form Quantinuum in 2021. These transactions show an industry that is consolidating, with strong companies buying others and weaker ones disappearing.",
          "A shakeout is common in technology cycles. Many companies in the early internet, electric vehicles, and solid-state batteries failed even as the sectors grew, and survivors emerged with larger shares. The quantum sector has features that increase the risk: long timelines to revenue, reliance on government contracts, technical uncertainty about which approach will win, and high cash burn.",
        ] },
      { heading: "Technical risk differs by company", paragraphs: [
          "Companies pursue different technologies, and only some will reach fault tolerance. If superconducting, trapped-ion, and neutral-atom approaches succeed, photonic or topological approaches may lag, or the reverse. A company with a good idea can fail if a competitor reaches the milestone first, or if supply chains, funding, or talent fall short. Software and component companies depend on the success of hardware. A company's roadmap can look convincing and still be wrong. Investors and customers can examine the evidence: peer-reviewed results, independent verification, cash runway relative to milestones, and revenue from repeat customers.",
        ] },
      { heading: "What this means for individuals", paragraphs: [
          "This page is not investment advice, and it does not claim that quantum stocks will rise or fall. The point is that sector enthusiasm is not a reason to assume that any particular company will succeed, and that prices can be highly volatile, with sharp falls after rises. Anyone considering such investments should read company filings, understand the revenue and cash position, and recognize that the share price reflects expectations, which can change quickly. Diversification and caution about concentrated bets are standard principles. Promoters who guarantee returns or claim inside knowledge of a quantum breakthrough should be treated with suspicion.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "The industry is real, well funded, and likely to grow over the long term, and some companies will become large and valuable. Early investors in successful technology companies have often profited. Participation in a growing field can be rewarding for employees and customers as well. The myth is in the word every and in the certainty.",
        ] },
      { heading: "A simple due diligence checklist", paragraphs: [
          "Before relying on any company, whether as a customer, partner, employee, or investor, a short checklist helps. Read the technical papers and see whether independent groups have confirmed the main results. Compare the company's roadmap with its record of meeting earlier milestones. Look at the revenue split between government grants, one-off projects, and repeat commercial customers, and at how many months of cash remain at the current spending rate. Check who owns the intellectual property and whether key staff are likely to stay.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth can lead to financial losses and to poor business decisions, such as committing to a vendor who later fails. It also fuels hype that damages the field's credibility when expectations are not met. A realistic view encourages due diligence and healthy skepticism, which benefits serious companies as well.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask what the company has demonstrated, how long its cash lasts, how much of its revenue is repeat and commercial, and what happens if a competing approach wins. Compare the valuation with revenue. Read independent assessments and look at the company's record against its own roadmap. If a source says a stock cannot lose, stop.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Industry growth does not guarantee the success of every company, and failures and consolidation have already begun. Individual outcomes depend on technology, funding, and execution, and this page is not investment advice.",
        ] },
    ], facts: [
      "McKinsey estimated quantum computing company revenue at roughly 650 to 750 million dollars in 2024.",
      "Zapata AI, a quantum software company, reportedly ceased operations in 2024.",
      "IonQ completed several acquisitions in 2024 and 2025, including Oxford Ionics for about 1.08 billion dollars.",
      "Mohseni and coauthors' 2017 forecast of commercialization within five years was not met.",
    ], spot: [
      "Watch for claims that a stock or company cannot lose.",
      "Compare valuation with revenue and cash runway.",
      "Look for independent verification of technical milestones.",
      "Be skeptical of promotions that use the word quantum as a selling point.",
    ], faq: [
      { q: "Are quantum companies a good investment?", a: "This site does not give investment advice. Outcomes are uncertain, and prices can be volatile." },
      { q: "Will the industry consolidate?", a: "It already has begun, with acquisitions and some failures." },
      { q: "How can I evaluate a quantum company?", a: "Look at peer-reviewed results, independent verification, cash runway, and the quality of revenue." },
    ], references: [
      "McKinsey and Company (2025). Quantum Technology Monitor.",
      "Boston Consulting Group (2024). Where will quantum computing create value, and when?",
      "Mohseni, M., et al. (2017). Commercialize quantum technologies in five years. Nature, 543, 171-174.",
      "IonQ (2025). IonQ to acquire Oxford Ionics. IonQ press release, June 2025.",
      "Quantinuum (2021). Honeywell and Cambridge Quantum announce the formation of Quantinuum. Press release, 29 November 2021.",
    ], links: [
      { label: "Company: IonQ", href: "/companies/ionq" },
      { label: "Company: Quantinuum", href: "/companies/quantinuum" },
      { label: "Company: Rigetti Computing", href: "/companies/rigetti" },
      { label: "Company: D-Wave Quantum", href: "/companies/d-wave" },
      { label: "Forecast: The Quantum Market: Funding, Valuations, and Bubble Risk", href: "/future/quantum-market-funding-future" },
      { label: "Forecast: Who Will Win: Big Tech, Startups, and Consolidation", href: "/future/quantum-business-landscape-future" },
    ], words: 1081 },
  { slug: "one-country-far-ahead-in-quantum", myth: "One country is far ahead of all others in quantum technology", category: "industry", verdict: "Misleading", summary: "Leadership in quantum technology is divided by area. The United States leads in many computing efforts, China in satellite and long-distance quantum communication, Europe and others in sensing and components, and no single country dominates every field.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Media stories often frame quantum technology as a race between the United States and China, with one country declared the winner after each announcement. Reports of record qubit counts, satellites, and funding figures appear in headlines, and political commentary draws conclusions about who is ahead. Statements by officials about falling behind or leading the world add to the impression of a single scoreboard.",
          "The reality is a multi-dimensional field with several strong players, each with different strengths, and no common metric that ranks them overall.",
        ] },
      { heading: "A picture by area", paragraphs: [
          "In quantum computing hardware, the United States has the largest concentration of leading efforts: IBM, Google, Quantinuum with operations in the US and UK, IonQ, Rigetti, Microsoft, Amazon, PsiQuantum, QuEra, and Atom Computing, together with strong university groups. China has made important advances, including the Zuchongzhi superconducting processors, which reached 105 qubits in 2025, and the Jiuzhang photonic machines, and several Chinese companies and labs are active. Japan's RIKEN and Fujitsu announced a 256-qubit superconducting machine in 2025. Europe has companies such as IQM, Pasqal, Alice and Bob, and Quandela, as well as strong academic groups, and Canada and Australia host D-Wave, Xanadu, Diraq, and others.",
          "In quantum communication, China has led in satellite-based work with the Micius mission, which demonstrated satellite entanglement distribution, teleportation, and QKD from 2016 to 2020, and operates a long-distance QKD backbone of more than 2,000 kilometers. Europe is building EuroQCI, and many countries have programs. In quantum sensing and metrology, the United States, United Kingdom, Germany, France, and others have strong activity, with the optical atomic clock community distributed across NIST, JILA, European and Asian institutes, and with significant industrial sensors work in the UK and Europe. In quantum software and theory, leading work comes from the United States, Europe, Canada, Israel, India, China, and elsewhere.",
        ] },
      { heading: "Funding and strategy", paragraphs: [
          "Government commitments vary and are difficult to compare. The United States passed the National Quantum Initiative Act in 2018 and announced in 2026 a Commerce Department plan of about two billion dollars of support, with other programs through DARPA and the Department of Energy. The European Union has the Quantum Flagship and a Quantum Europe Strategy, the United Kingdom a ten-year strategy of about 2.5 billion pounds, India's National Quantum Mission about 6,000 crore rupees, and Japan, South Korea, Canada, Australia, and others have national programs. China's public funding is often cited as among the largest, though figures are uncertain and not comparable because of differences in accounting. Private investment is concentrated in the United States and, increasingly, in Europe.",
          "Raw funding does not translate directly into capability, and capabilities depend on talent, industrial base, supply chains, and international collaboration. Export controls and security concerns in the United States and allied countries restrict some trade in quantum items, as discussed elsewhere on this site, and affect cooperation.",
        ] },
      { heading: "Why a single ranking is misleading", paragraphs: [
          "Any ranking depends on the metric. If one counts physical qubits, the answer depends on the technology. If one counts papers or patents, the answer depends on how fields are defined, and quantum communication patents are dominated by Chinese applicants while computing patents are led by US firms. If one counts commercial revenue, US and Canadian companies have an edge now. If one considers readiness for post-quantum cryptography, the answers differ again. Capabilities also change quickly, and a result that puts one team ahead may be matched within a year.",
          "There is also a risk in the race framing: it encourages exaggeration, secrecy, and short-term thinking, and may damage collaboration that has been valuable to science. Scholars of science policy have long argued that fundamental research thrives on international exchange, with national security carve-outs where justified.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "Some leads are real. China's satellite quantum communication program has been ahead of others, and the United States has the deepest concentration of companies and capital in quantum computing. Policy and funding choices matter, and countries that invest in talent and infrastructure will be better placed. The myth lies in the single scoreboard and in the belief that one country is far ahead of all others.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The framing shapes policy and public opinion. Overstating a rival's lead can prompt hasty spending and restrictive measures, while overstating one's own lead can create complacency. It affects how companies are valued and how researchers are treated. A more accurate view, in which strength is distributed, supports balanced strategies: invest in talent and supply chains, maintain openness where possible, and track capabilities by area.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask which area is meant: computing, communication, sensing, or software, and what metric is used. Look at the evidence of results, such as published experiments, deployed systems, and commercial products, not only funding announcements. Note that leadership in one area does not imply leadership in others, and that figures for public funding are rarely comparable.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "Misleading. Different countries lead in different areas of quantum technology, and no single country is far ahead in all of them. Rankings depend on the metric chosen and change quickly.",
        ] },
    ], facts: [
      "China's Micius mission demonstrated satellite entanglement distribution, teleportation, and QKD between 2016 and 2020.",
      "The USTC Zuchongzhi 3.0 superconducting processor reached 105 qubits in 2025.",
      "RIKEN and Fujitsu announced a 256-qubit superconducting machine in 2025.",
      "Leading quantum computing companies are concentrated in the United States, with significant efforts in Europe, Canada, Japan, Australia, and China.",
    ], spot: [
      "Ask which area of quantum technology a ranking refers to.",
      "Check whether funding figures are comparable.",
      "Look for evidence in published results and deployed systems.",
      "Be wary of race language that implies a single winner.",
    ], faq: [
      { q: "Who leads in quantum computing?", a: "The United States has the most leading companies, but strong efforts exist in China, Europe, Japan, Canada, and elsewhere." },
      { q: "Who leads in quantum communication?", a: "China has been ahead in satellite-based communication, and Europe and others are building networks." },
      { q: "Does more funding mean a country is ahead?", a: "Not directly. Talent, industry, and supply chains also matter." },
    ], references: [
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
      "Yin, J., et al. (2020). Entanglement-based secure quantum cryptography over 1,120 kilometres. Nature, 582, 501-505.",
      "Zhong, H.-S., et al. (2020). Quantum computational advantage using photons. Science, 370, 1460-1463.",
      "United States Congress (2018). National Quantum Initiative Act, Public Law 115-368.",
      "European Commission (2025). Quantum Europe Strategy.",
      "McKinsey and Company (2025). Quantum Technology Monitor.",
      "Government of India, Press Information Bureau (2023). Cabinet approves National Quantum Mission, 19 April 2023.",
    ], links: [
      { label: "Paper: Satellite-to-Ground Quantum Key Distribution", href: "/research/liao-satellite-to-ground-qkd-2017" },
      { label: "Paper: Quantum Computational Advantage Using Photons", href: "/research/zhong-jiuzhang-photonic-advantage-2020" },
      { label: "Company: Origin Quantum", href: "/companies/origin-quantum" },
      { label: "Forecast: Governments, Defense, and Quantum Strategy", href: "/future/quantum-government-defense-future" },
      { label: "Forecast: India and Quantum Technology: The National Quantum Mission and Beyond", href: "/future/quantum-india-future" },
      { label: "Forecast: Export Controls and the Quantum Supply Chain", href: "/future/quantum-export-controls-supply-chain-future" },
    ], words: 1002 },
  { slug: "quantum-mechanics-only-affects-the-tiny", myth: "Quantum mechanics only matters for tiny things and has no effect on everyday life", category: "physics", verdict: "False", summary: "Quantum mechanics underlies transistors, lasers, LEDs, MRI scanners, atomic clocks, flash memory, solar cells, and the chemistry of materials. Everyday technology depends on it, though most of it is not quantum computing.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "Quantum effects are usually illustrated with electrons, photons, and atoms, and popular accounts say that they appear only at tiny scales and disappear in the everyday world, where objects obey classical laws. Schrödinger's cat is invoked to show how strange it would be if they did not. From this it is easy to conclude that quantum mechanics is a theory of an exotic microscopic realm that does not affect ordinary life.",
          "This is wrong in an important way. Quantum mechanics governs the structure of matter, and the properties of everyday materials and devices can be explained only with it.",
        ] },
      { heading: "Technology built on quantum mechanics", paragraphs: [
          "Start with the device you are using. Transistors, the basic switches of every computer and phone, depend on the quantum theory of electrons in semiconductors, as in the work of Bardeen, Brattain, and Shockley in 1947 and 1948. Billions of them are in a typical chip. Flash memory stores data by quantum tunneling of electrons through thin insulating layers. Light-emitting diodes, including the blue LEDs recognized by the 2014 Nobel Prize in Physics, produce light when electrons drop between quantum energy levels in a semiconductor. Lasers, demonstrated by Maiman in 1960, rely on stimulated emission, a quantum process, and appear in fiber-optic communication, barcode scanners, optical drives, and surgery. Solar cells convert light to electricity by the photoelectric effect, which Einstein explained in 1905 with light quanta, and its semiconductor version relies on band structure.",
          "Medical and measurement technology rely on quantum physics as well. Magnetic resonance imaging uses the spins of hydrogen nuclei in a magnetic field, a quantum property, and the 2003 Nobel Prize recognized Lauterbur and Mansfield for the technique. Atomic clocks, which keep the time of the Global Positioning System and the internet, count oscillations of radiation absorbed by atoms in transitions between quantum states, and the second is defined in terms of the cesium atom. Electron microscopes depend on the wave nature of electrons, and many chemical analysis methods rely on quantum energy levels.",
        ] },
      { heading: "Matter itself", paragraphs: [
          "More fundamentally, quantum mechanics explains why matter is stable and has the properties it has. Without it, atoms would collapse, since classical electrons orbiting a nucleus would radiate energy and spiral inward. The Pauli exclusion principle, which prevents electrons from occupying the same quantum state, gives atoms their size and the periodic table its structure, and underlies the rigidity of solids. The color of objects, the conductivity of metals, the strength of chemical bonds, magnetism, and superconductivity are all quantum phenomena. When a chemist calculates how a drug binds to a protein, or a materials scientist designs a battery, quantum mechanics is the underlying theory, even if approximations make the calculation classical.",
          "Even the sun shines because of quantum tunneling, which allows protons to fuse despite their electrical repulsion at the temperatures inside the star, a process first explained by Gamow in the 1920s and applied to stellar energy by others. And quantum effects appear in biology, in photosynthesis, enzyme reactions, and possibly bird navigation, as reviews by Cao and coauthors and by Hore and Mouritsen discuss.",
        ] },
      { heading: "Why we do not see quantum weirdness", paragraphs: [
          "Everyday objects do not behave in obviously quantum ways, because of decoherence and the large number of particles in them: superpositions are destroyed by interaction with the environment almost instantly, and the average behavior of many particles follows classical laws. So the strange features of quantum mechanics, such as superposition of position and entanglement, are hard to see in macroscopic objects. But the laws underlying them are quantum, and the classical world emerges from them. In that sense, quantum mechanics is not a theory of the small but the theory of everything made of matter, with classical mechanics as an approximation that works for large systems.",
        ] },
      { heading: "Quantum technologies versus quantum-based technologies", paragraphs: [
          "A distinction is useful. The devices above, sometimes called first-generation quantum technologies, use quantum mechanics to design materials and components, but their operation is classical at the level of use. The second quantum revolution, as it is sometimes called, uses the quantum states themselves, superposition and entanglement, as a resource for computing, communication, and sensing. Quantum computers belong to the second category. So it is accurate to say that quantum computers are not part of everyday life, while quantum mechanics is.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "For most purposes in everyday life, classical physics describes the motion of objects accurately, and quantum effects, such as interference or superposition, are not visible. Engineers designing bridges do not need quantum mechanics. And the most exotic quantum features are indeed observed only in carefully controlled conditions. The myth goes too far in saying that quantum mechanics has no effect on ordinary life.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth makes quantum mechanics seem irrelevant and mysterious, which may reduce interest in science education and obscure the value of basic research. It also feeds the notion that quantum technology is purely futuristic, when its foundations already power the economy. Knowing the history of quantum-based devices helps to justify long-term research funding: transistors and lasers came from work on fundamental physics decades before they became everyday items.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Ask the person to look at their phone. The processor, memory, display, camera, battery, and the atomic clock timing that synchronizes the network all depend on quantum physics. Mention MRI and GPS. Then explain that quantum computing is a different, newer use that exploits entanglement and superposition directly.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. Quantum mechanics determines the structure of matter and underlies transistors, lasers, LEDs, MRI, atomic clocks, flash memory, and solar cells. Everyday technology depends on it, even though quantum computers themselves are not yet part of daily life.",
        ] },
    ], facts: [
      "Transistors were invented at Bell Labs in 1947 using quantum theory of semiconductors.",
      "Flash memory stores data through quantum tunneling of electrons.",
      "The second is defined in terms of a transition in the cesium atom, which underlies GPS timing.",
      "MRI relies on the quantum spin of hydrogen nuclei, and its pioneers received the 2003 Nobel Prize.",
    ], spot: [
      "Watch for statements that quantum mechanics is irrelevant to everyday life.",
      "Ask whether the claim distinguishes quantum-based devices from quantum computers.",
      "Look at the technologies in your own pocket.",
      "Distinguish quantum effects that are visible from those that explain properties.",
    ], faq: [
      { q: "Does my phone use quantum mechanics?", a: "Yes. Its transistors, memory, LEDs, camera sensor, and network timing rely on quantum physics." },
      { q: "Why don't we see quantum effects in everyday objects?", a: "Because decoherence destroys superpositions quickly and large objects behave classically on average." },
      { q: "Is a laser a quantum device?", a: "Yes. It works by stimulated emission, a quantum process." },
    ], references: [
      "Bardeen, J., & Brattain, W. H. (1948). The transistor, a semi-conductor triode. Physical Review, 74, 230-231.",
      "Maiman, T. H. (1960). Stimulated optical radiation in ruby. Nature, 187, 493-494.",
      "Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt. Annalen der Physik, 322, 132-148.",
      "Zurek, W. H. (2003). Decoherence, einselection, and the quantum origins of the classical. Reviews of Modern Physics, 75, 715-775.",
      "Cao, J., et al. (2020). Quantum biology revisited. Science Advances, 6, eaaz4888.",
      "Hore, P. J., & Mouritsen, H. (2016). The radical-pair mechanism of magnetoreception. Annual Review of Biophysics, 45, 299-344.",
      "Degen, C. L., Reinhard, F., & Cappellaro, P. (2017). Quantum sensing. Reviews of Modern Physics, 89, 035002.",
    ], links: [
      { label: "Term: Decoherence", href: "/dictionary/decoherence" },
      { label: "Term: Superposition", href: "/dictionary/superposition" },
      { label: "Term: Quantum Sensing", href: "/dictionary/quantum-sensing" },
      { label: "Forecast: Quantum in Everyday Life: What Ordinary People Will Actually Use", href: "/future/quantum-consumer-future" },
    ], words: 1093 },
  { slug: "quantum-internet-will-replace-internet", myth: "A quantum internet will replace the current internet", category: "industry", verdict: "False", summary: "A quantum internet would distribute entanglement for secure communication, networked quantum computers, and linked sensors. It would run alongside the classical internet, which it needs for control information, and it would not make web browsing or video faster.", sections: [
      { heading: "Where the myth comes from", paragraphs: [
          "The phrase quantum internet suggests a successor to the internet, faster and unhackable. News stories describe quantum networks that send information instantly, headlines announce that the quantum internet is coming, and some commentators suggest that the web will be replaced. The image of teleporting data and of instant communication through entanglement makes the replacement narrative appealing.",
          "As described in the myths on entanglement and teleportation, entanglement cannot carry messages faster than light. The actual purpose of a quantum internet is more modest and more specific.",
        ] },
      { heading: "What a quantum internet is", paragraphs: [
          "A quantum internet is a network that can distribute entanglement and quantum states between distant nodes, as described by Kimble in 2008 and by Wehner, Elkouss, and Hanson in 2018. The goal is to enable applications that classical networks cannot support: key distribution secured by physics, linking small quantum computers into larger ones, and combining distant sensors and clocks into more precise instruments. It would be built from nodes that hold quantum memories, quantum repeaters that extend entanglement over long distances by entanglement swapping, and channels such as optical fiber and free space or satellite links. Azuma and coauthors reviewed the state of repeaters in 2023.",
          "Crucially, every quantum network protocol depends on a classical network. Teleportation needs classical bits to be sent for each qubit. Entanglement swapping and purification need classical communication to report measurement results. Network control, routing, and authentication are classical. The architecture published by the IETF Quantum Internet Research Group in 2023, RFC 9340, describes the quantum internet as an extension that works together with the classical one. The quantum layer carries entanglement, and the classical layer carries everything else.",
        ] },
      { heading: "Why it would not replace the web", paragraphs: [
          "Entanglement-based links carry quantum states, not bulk data. Sending the web pages, videos, and messages that make up most internet traffic needs a high data rate, which fiber and wireless networks provide at gigabits to terabits per second. Quantum links generate entanglement at much lower rates, currently from a few pairs per second to kilohertz in the best cases, and each pair is a resource used for security or computation, not a carrier of a file. Quantum memories, repeaters, and transducers are far from the performance needed to replace the classical infrastructure, and there is no application in sight that would make quantum links the main way of carrying data.",
          "Cost and benefit also matter. Classical networks, with post-quantum cryptography to defend against quantum computers, will meet most security needs at a fraction of the cost of a quantum layer. Quantum networks are likely to be built for specialized uses: secure government and financial links, connections between quantum computers and data centers, and networks of sensors for science. That is valuable, but it is different from a replacement.",
        ] },
      { heading: "Where things stand", paragraphs: [
          "The first stage of the quantum internet, trusted-node QKD networks, exists commercially, with China's backbone of more than 2,000 kilometers and networks in Europe, Japan, South Korea, and elsewhere. Satellites have distributed entanglement over 1,200 kilometers, and QKD between ground stations on different continents. In the laboratory, a Delft team connected three nodes in 2021, and groups have shown entanglement over tens of kilometers of fiber in field settings. A true repeater chain that beats direct transmission over long distances has not yet been demonstrated, and that is the main milestone ahead. The European Quantum Internet Alliance aims at a prototype network around the end of the decade. Our own forecast is that specialized networks will exist in the 2030s and that a general-purpose quantum internet is unlikely before 2040.",
        ] },
      { heading: "The grain of truth", paragraphs: [
          "A quantum internet is a real research goal with potential benefits, and it may become an important infrastructure for particular applications. It may someday carry entanglement between data centers in a way that enables distributed quantum computing. Some of the technologies, such as satellite quantum links, are already operating. The error is in the word replace and in the expectation that it will speed up or supersede the classical internet.",
        ] },
      { heading: "Why the myth matters", paragraphs: [
          "The myth leads to confusion about what quantum networks can do and when. It encourages claims about instant communication and unhackable networks that are not supported, and may lead to waste if customers buy quantum equipment where classical measures would do. It also hides the actual priority for internet security, which is the migration to post-quantum cryptography. Accurate expectations help in planning investments and in assessing announcements.",
        ] },
      { heading: "How to answer the myth", paragraphs: [
          "Explain that the quantum internet is a complement, with a classical network carrying control information and most data. Ask what task the quantum link would perform, such as key distribution or linking quantum computers, and what rate it can deliver. Note that quantum networks do not make downloads faster. If someone says that quantum communication is instant, remind them that entanglement cannot transmit messages.",
        ] },
      { heading: "Our verdict", paragraphs: [
          "False. A quantum internet would run alongside the classical internet and rely on it, enabling specialized applications such as secure key distribution and networked quantum computing. It will not replace the internet or make ordinary communication faster.",
        ] },
    ], facts: [
      "Every quantum network protocol needs a classical channel for control and measurement results.",
      "RFC 9340, published by the IETF in 2023, describes the architecture of a quantum internet as an extension of the classical one.",
      "China operates a trusted-node QKD backbone of more than 2,000 kilometers.",
      "A repeater chain that beats direct transmission over long distances has not yet been demonstrated.",
    ], spot: [
      "Watch for claims that the quantum internet will replace or speed up the internet.",
      "Ask what task the quantum link performs and at what rate.",
      "Notice if entanglement is described as carrying messages.",
      "Check whether the claim accounts for the classical channel.",
    ], faq: [
      { q: "Will quantum internet make downloads faster?", a: "No. Quantum links carry entanglement for specific tasks, not bulk data." },
      { q: "Is a quantum internet unhackable?", a: "Quantum key distribution has strong security in theory, but real systems need careful implementation, as discussed in the myth about unhackable cryptography." },
      { q: "When will a quantum internet exist?", a: "Specialized networks are expected in the 2030s, and a general-purpose one is uncertain." },
    ], references: [
      "Kimble, H. J. (2008). The quantum internet. Nature, 453, 1023-1030.",
      "Wehner, S., Elkouss, D., & Hanson, R. (2018). Quantum internet: A vision for the road ahead. Science, 362, eaam9288.",
      "Azuma, K., et al. (2023). Quantum repeaters: From quantum networks to the quantum internet. Reviews of Modern Physics, 95, 045006.",
      "Kozlowski, W., Wehner, S., Van Meter, R., et al. (2023). Architectural principles for a quantum internet. IETF RFC 9340.",
      "Pompili, M., et al. (2021). Realization of a multinode quantum network of remote solid-state qubits. Science, 372, 259-264.",
      "Liao, S.-K., et al. (2017). Satellite-to-ground quantum key distribution. Nature, 549, 43-47.",
    ], links: [
      { label: "Paper: Quantum Internet: A Vision for the Road Ahead", href: "/research/wehner-quantum-internet-vision-2018" },
      { label: "Paper: Realization of a Multinode Quantum Network of Remote Solid-State Qubits", href: "/research/pompili-multinode-quantum-network-2021" },
      { label: "Paper: Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication", href: "/research/briegel-quantum-repeaters-1998" },
      { label: "Term: Quantum Internet", href: "/dictionary/quantum-internet" },
      { label: "Term: Quantum Repeater", href: "/dictionary/quantum-repeater" },
      { label: "Forecast: The Quantum Internet", href: "/future/quantum-internet-future" },
    ], words: 1019 },
];

export function getMythTopic(slug: string) {
  return mythTopics.find((t) => t.slug === slug);
}
