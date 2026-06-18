import Link from "next/link";

export const metadata = {
  title: "30 Quantum Computing Myths, Debunked | QuantumAtlas",
  description:
    "Common misconceptions about quantum computing — separated from reality. Will quantum computers break encryption tomorrow? Are they just faster classical computers? Find out.",
};

const myths = [
  {
    myth: "Quantum computers will break all encryption tomorrow.",
    reality:
      "No existing quantum computer is anywhere close to large or reliable enough to run Shor's Algorithm at the scale needed to break real-world RSA encryption — that would require thousands of high-quality, error-corrected logical qubits. Current hardware has hundreds to about a thousand noisy physical qubits. The real near-term concern is 'harvest now, decrypt later' — encrypted data being collected today for potential future decryption.",
    link: { href: "/algorithms/shors-algorithm", label: "Read about Shor's Algorithm" },
  },
  {
    myth: "Quantum computers are just faster classical computers.",
    reality:
      "Quantum computers are not a faster version of your laptop — they're a fundamentally different type of machine, useful only for specific classes of problems (optimization, simulation, factoring, search). For everyday tasks like browsing or word processing, classical computers remain vastly more practical and will stay that way.",
    link: { href: "/quantum-vs-classical", label: "See the full comparison" },
  },
  {
    myth: "A qubit is just a bit that can be 0 or 1, but we don't know which yet.",
    reality:
      "This is one of the most common misunderstandings. A qubit in superposition doesn't have a hidden, predetermined value — it genuinely exists in a combination of both states until measured. This has been confirmed through Bell inequality experiments, which rule out the idea that qubits simply hide a classical value we haven't checked yet.",
    link: { href: "/dictionary/qubit", label: "Learn what a qubit really is" },
  },
  {
    myth: "Entanglement allows faster-than-light communication.",
    reality:
      "Measuring one entangled particle does instantly correlate with the other, no matter the distance — but no usable information can be transmitted this way. To notice the correlation at all, both parties still need to compare results through ordinary, slower-than-light communication.",
    link: { href: "/dictionary/entanglement", label: "Understand entanglement" },
  },
  {
    myth: "More qubits always means a better quantum computer.",
    reality:
      "Qubit count alone is a misleading headline number. A processor with a thousand noisy, error-prone qubits may be less useful than one with far fewer but much higher-quality qubits. Coherence time, gate fidelity, and connectivity all matter as much as raw count.",
    link: { href: "/hardware", label: "Compare real processor specs" },
  },
  {
    myth: "Quantum computers will replace classical computers entirely.",
    reality:
      "The realistic future is hybrid: classical computers will continue handling general-purpose tasks, occasionally offloading specific, suitable sub-problems to a quantum processor — similar to how GPUs accelerate specific tasks alongside CPUs today, without replacing them.",
    link: { href: "/quantum-vs-classical", label: "Why quantum won't replace classical" },
  },
  {
    myth: "Quantum supremacy means quantum computers are now generally more powerful.",
    reality:
      "'Quantum supremacy' claims (like Google's 2019 Sycamore announcement) refer to performing one specific, often artificially chosen task faster than classical computers — not general superiority. Google's claim was later partially challenged by improved classical simulation methods, illustrating how narrow these benchmarks can be.",
    link: { href: "/dictionary/quantum-supremacy", label: "Understand quantum supremacy" },
  },
  {
    myth: "Quantum computing is purely theoretical — no real quantum computers exist.",
    reality:
      "Real, functioning quantum computers exist today and are accessible over the cloud from multiple companies. They're not yet powerful or reliable enough to outperform classical computers on most practical problems, but they are genuinely real hardware, not just theory.",
    link: { href: "/hardware", label: "See real quantum processors" },
  },
  {
    myth: "You need a PhD in physics to understand quantum computing.",
    reality:
      "While the underlying physics is genuinely deep, the core computing concepts — superposition, entanglement, gates, and algorithms — can be understood with basic math and good analogies, without needing to derive quantum mechanics from scratch.",
    link: { href: "/learn", label: "Start the Learning Center" },
  },
  {
    myth: "Quantum computers can solve any hard problem instantly.",
    reality:
      "Quantum speedups are narrow and problem-specific. Most known quantum algorithms offer speedups only for particular problem structures (like factoring or unstructured search) — there's no general quantum algorithm that instantly solves arbitrary hard problems. Many important problems have no known quantum speedup at all.",
    link: { href: "/algorithms", label: "Browse the Algorithms Database" },
  },
  {
    myth: "Quantum computing will make AI dramatically smarter very soon.",
    reality:
      "Most claimed quantum machine learning speedups apply to narrow, specially structured problems — not the messy, large-scale data that dominates real-world AI. Current evidence shows no broad quantum advantage for mainstream AI training. This is one of the most overhyped near-term claims in the field.",
    link: { href: "/research/quantum-machine-learning-kernel-methods", label: "See the actual research" },
  },
  {
    myth: "Quantum bits can store more information than classical bits because they're 'both 0 and 1.'",
    reality:
      "A single qubit, when measured, still gives you exactly one classical bit of information (a 0 or a 1) — not two. The advantage of superposition comes from how many qubits work together during a computation, via interference, not from squeezing extra bits out of one qubit.",
    link: { href: "/learn/bit-vs-qubit", label: "Bit vs Qubit explained" },
  },
  {
    myth: "Quantum computers exist that can outperform classical computers at any task you give them.",
    reality:
      "No quantum computer today outperforms classical computers on practical, real-world tasks. The narrow demonstrations of quantum advantage that exist (like specific random sampling tasks) involve artificially chosen problems with no broader application — not general-purpose superiority.",
    link: { href: "/hardware", label: "See real processor specs" },
  },
  {
    myth: "Quantum cryptography and post-quantum cryptography are the same thing.",
    reality:
      "These are different approaches that often get confused. Post-quantum cryptography is classical math designed to resist quantum attacks. Quantum cryptography (like quantum key distribution) uses actual quantum mechanics to detect eavesdropping. Both defend against quantum threats, but through completely different mechanisms.",
    link: { href: "/dictionary/post-quantum-cryptography", label: "Post-Quantum Cryptography explained" },
  },
  {
    myth: "A quantum computer with more qubits is always closer to being useful than one with fewer, higher-quality qubits.",
    reality:
      "A small number of high-fidelity, well-connected qubits can outperform a much larger number of noisy ones for running actual algorithms. This is why companies like IonQ emphasize 'algorithmic qubits' as a metric, rather than raw qubit count, when describing their hardware's practical capability.",
    link: { href: "/compare", label: "Compare real processors" },
  },
  {
    myth: "Quantum computers think or have some form of consciousness.",
    reality:
      "A quantum computer is a physical device that manipulates qubits according to the rules of quantum mechanics to run specific algorithms — it has no awareness, understanding, or thought process of any kind, no more than a classical calculator does.",
    link: { href: "/learn/what-is-quantum-computing", label: "What is Quantum Computing?" },
  },
  {
    myth: "Schrödinger's cat proves that quantum effects apply to everyday large objects.",
    reality:
      "Schrödinger's cat was originally proposed as a thought experiment to highlight how absurd it would seem if quantum superposition applied to large objects — it was meant to question the interpretation of quantum mechanics, not to demonstrate that cats (or other macroscopic objects) actually exist in superposition in practice.",
    link: { href: "/dictionary/superposition", label: "Superposition explained" },
  },
  {
    myth: "Quantum teleportation can transport physical matter from one place to another.",
    reality:
      "Quantum teleportation transfers quantum information (a state) from one particle to another using entanglement and classical communication — no physical matter or energy is transported. The original particle's state is destroyed in the process, consistent with the no-cloning theorem.",
    link: { href: "/algorithms/quantum-teleportation-protocol", label: "Quantum Teleportation Protocol" },
  },
  {
    myth: "Quantum computers can break any code or password instantly.",
    reality:
      "Quantum speedups apply to specific mathematical structures, like the factoring problem underlying RSA encryption. Many types of encryption (including well-designed symmetric encryption and most modern password hashing) are not efficiently broken by any known quantum algorithm, even in principle.",
    link: { href: "/industries/cybersecurity", label: "Quantum for Cybersecurity" },
  },
  {
    myth: "If quantum computers existed in the past, history would have been completely different.",
    reality:
      "This popular thought experiment overstates quantum computing's scope. Even a hypothetical earlier quantum computer would only have offered advantages for the narrow set of problems quantum algorithms actually address — most of history's technological and military developments depended on factors quantum computing doesn't touch.",
    link: { href: "/timeline", label: "See the real quantum timeline" },
  },
  {
    myth: "All quantum computers use the same basic technology, just at different scales.",
    reality:
      "Quantum computers are built using fundamentally different physical approaches — superconducting circuits, trapped ions, neutral atoms, and photonics all represent genuinely different hardware technologies with different strengths, weaknesses, and operating principles, not just different sizes of the same thing.",
    link: { href: "/hardware", label: "Explore different hardware types" },
  },
  {
    myth: "Quantum annealers like D-Wave's are the same as gate-based quantum computers like IBM's.",
    reality:
      "Quantum annealers are a specialized type of hardware purpose-built for optimization problems, and cannot run general-purpose gate-based algorithms like Shor's or Grover's. Gate-based quantum computers are general-purpose but currently smaller in qubit count than commercial annealers, which serve a different niche entirely.",
    link: { href: "/algorithms/quantum-annealing", label: "Quantum Annealing explained" },
  },
  {
    myth: "Once quantum computers are 'finished,' they'll be sold to consumers like regular computers.",
    reality:
      "Most experts expect quantum computers to remain specialized, cloud-accessed co-processors for the foreseeable future — similar to how few people own a supercomputer today. The hardware requirements (extreme cooling, vacuum chambers, precision lasers) make consumer ownership impractical for most quantum technologies.",
    link: { href: "/quantum-vs-classical", label: "Why quantum won't replace classical" },
  },
  {
    myth: "A 'logical qubit' and a 'physical qubit' are the same thing, just described differently.",
    reality:
      "A physical qubit is an actual hardware qubit, subject to errors and decoherence. A logical qubit is an error-protected unit built by combining many physical qubits using quantum error correction — current estimates suggest roughly 1,000 or more physical qubits may be needed per reliable logical qubit, depending on the error correction code used.",
    link: { href: "/learn/quantum-error-correction", label: "Quantum Error Correction explained" },
  },
  {
    myth: "Every country has roughly equal quantum computing capability.",
    reality:
      "Quantum computing capability varies significantly by country, shaped by differing levels of government investment, private industry presence, and research infrastructure. The US and China are generally viewed as leading in different aspects of the field, with other countries and the EU investing heavily but from different starting positions.",
    link: { href: "/companies/origin-quantum", label: "See China's Origin Quantum" },
  },
  {
    myth: "Quantum computing is a recent invention from the last few years.",
    reality:
      "The theoretical foundations of quantum computing trace back to the early 1980s with Richard Feynman's proposals, and key algorithms like Shor's and Grover's were developed in the 1990s. What's recent is the scaling of actual hardware to hundreds or thousands of qubits — the underlying ideas are several decades old.",
    link: { href: "/timeline", label: "See the full history" },
  },
  {
    myth: "A quantum computer can simulate the entire universe, given enough qubits.",
    reality:
      "While quantum computers are well-suited to simulating quantum systems, simulating something as complex as 'the entire universe' would require resources and a level of detail that's not just a matter of qubit count — fundamental questions about the universe's quantum description at large scales remain unresolved in physics itself.",
    link: { href: "/learn/quantum-hardware", label: "How real quantum hardware works" },
  },
  {
    myth: "Quantum random number generators are the same as the random number generators in regular software.",
    reality:
      "Software-based ('pseudo-random') number generators use deterministic mathematical formulas that are, in principle, predictable if you know the starting conditions. Quantum random number generators exploit genuine quantum randomness (like measuring a qubit in superposition), producing numbers that are fundamentally unpredictable, not just difficult to predict.",
    link: { href: "/industries/telecommunications", label: "Quantum for Telecommunications" },
  },
  {
    myth: "If a company claims 'quantum advantage,' it means their quantum computer is now generally useful.",
    reality:
      "'Quantum advantage' claims typically apply to one specific, often carefully chosen task — not general usefulness. Many such claims have later been partially or fully challenged by improved classical algorithms, as discussed in our Myths entry on quantum supremacy and our research coverage of independent verification efforts.",
    link: { href: "/research/quantum-advantage-claim-independent-verification", label: "See how these claims get verified" },
  },
  {
    myth: "Quantum computing will create a massive wave of job losses, similar to fears about AI automation.",
    reality:
      "Quantum computing is currently a field desperately short on skilled workers, not one displacing them — companies across research, software, and hardware roles are actively hiring. Unlike some AI applications aimed at automating existing tasks, quantum computing today is overwhelmingly a field of net job creation in specialized, hard-to-fill roles.",
    link: { href: "/jobs", label: "See real quantum career paths" },
  },
];

export default function MythsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Fact-Checked
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        30 Quantum Computing Myths, Debunked
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Quantum computing attracts more hype and misinformation than almost
        any other technology field. Here are the most common myths —
        separated clearly from what's actually true, with links to dig
        deeper on each topic.
      </p>

      <div className="space-y-6 max-w-2xl">
        {myths.map((item, i) => (
          <div key={i} className="rounded-xl border border-line bg-surface overflow-hidden">
            <div className="p-5 border-b border-line bg-collapse-50">
              <p className="font-mono text-[11px] uppercase tracking-wide text-collapse mb-1.5">
                Myth #{i + 1}
              </p>
              <p className="font-serif text-lg font-semibold text-ink leading-snug">
                {item.myth}
              </p>
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1.5">
                The Reality
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mb-3">
                {item.reality}
              </p>
              <Link href={item.link.href} className="text-sm text-quantum hover:underline font-medium">
                {item.link.label} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Build an accurate foundation
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center — start from the basics</Link>
          <Link href="/guide/quantum-computing-complete-guide" className="text-quantum hover:underline">→ The Complete Guide</Link>
          <Link href="/dictionary" className="text-quantum hover:underline">→ Quantum Dictionary</Link>
        </div>
      </div>
    </article>
  );
}
