import Link from "next/link";

export const metadata = {
  title: "12 Quantum Computing Myths, Debunked | QuantumAtlas",
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
];

export default function MythsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Fact-Checked
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        12 Quantum Computing Myths, Debunked
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
