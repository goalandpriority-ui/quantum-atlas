import Link from "next/link";

export const metadata = {
  title: "Quantum Computing vs AI: What Each Can (and Can't) Do | QuantumAtlas",
  description:
    "An honest comparison of quantum computing and artificial intelligence — what each technology is actually good at, where they overlap, and why 'which is faster' is the wrong question.",
};

const capabilityRows = [
  {
    task: "Recognizing images, speech, or text patterns",
    ai: "Excellent — this is AI's core strength, refined over a decade of deep learning research",
    quantum: "No advantage — not a problem quantum computers are suited to solve directly",
    edge: "ai",
  },
  {
    task: "Generating human-like text or images",
    ai: "Excellent — large language models and diffusion models excel here",
    quantum: "No current application — generative AI is a classical deep learning achievement",
    edge: "ai",
  },
  {
    task: "Factoring very large numbers",
    ai: "Cannot do this efficiently — no AI technique changes the fundamental classical difficulty",
    quantum: "Proven exponential speedup via Shor's Algorithm — theoretically, at sufficient scale",
    edge: "quantum",
  },
  {
    task: "Simulating molecules and chemical reactions",
    ai: "Limited — AI can approximate and accelerate parts of this, but doesn't solve the fundamental quantum complexity",
    quantum: "Natural fit — quantum computers simulate quantum systems directly, the original motivation for the field",
    edge: "quantum",
  },
  {
    task: "Searching large unsorted datasets",
    ai: "Good with structure (indexes, embeddings) — but no AI shortcut for truly unsorted search",
    quantum: "Grover's Algorithm offers a proven quadratic speedup for unstructured search",
    edge: "quantum",
  },
  {
    task: "Training on massive real-world datasets",
    ai: "This is what modern AI is built for — GPUs and AI hardware are highly optimized for this",
    quantum: "No proven advantage on real-world data; demonstrated speedups are limited to specially structured datasets",
    edge: "ai",
  },
  {
    task: "Running today, at scale, in production",
    ai: "Yes — deployed in products used by billions of people daily",
    quantum: "Limited — small-scale cloud access exists, but no large-scale production deployment for general use",
    edge: "ai",
  },
  {
    task: "Optimization problems (routing, scheduling, portfolios)",
    ai: "Classical heuristics and ML-assisted optimization are mature and effective",
    quantum: "Active research area (QAOA, quantum annealing) — promising but not yet consistently beating classical methods",
    edge: "mixed",
  },
];

export default function QuantumVsAIPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Comparison
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing vs AI
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Quantum computing and artificial intelligence are often mentioned in
        the same breath as "next big technologies" — but they are not
        competitors solving the same problem. This page explains, honestly,
        what each is actually good at, where they overlap, and why "which is
        more accurate" or "which is faster" is usually the wrong question to
        ask.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Why this comparison is tricky</h2>
        <p>
          Before the table below, it's worth being upfront about something
          most articles on this topic skip: <strong>quantum computing and AI
          are different categories of technology</strong>, solving largely
          different kinds of problems. Asking "which is more accurate" or
          "which is faster" is a bit like asking whether a microscope or a
          telescope is "better" — it depends entirely on what you're trying
          to look at.
        </p>
        <p>
          AI (specifically modern machine learning) is a set of{" "}
          <strong>statistical techniques</strong> for finding patterns in
          data, trained on classical computers (usually GPUs). Quantum
          computing is a fundamentally different{" "}
          <strong>computational model</strong>, using qubits instead of
          bits. They aren't directly comparable the way two AI models or two
          CPUs might be.
        </p>

        <h2>Capability comparison</h2>
      </div>

      <div className="overflow-x-auto my-8 max-w-4xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink w-1/4">Task</th>
              <th className="text-left p-3 border border-line font-semibold text-ink w-[37.5%]">AI / Machine Learning</th>
              <th className="text-left p-3 border border-line font-semibold text-quantum w-[37.5%]">Quantum Computing</th>
            </tr>
          </thead>
          <tbody>
            {capabilityRows.map((row, i) => (
              <tr key={row.task} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line font-medium text-ink text-sm">{row.task}</td>
                <td className="p-3 border border-line text-ink-muted text-sm">{row.ai}</td>
                <td className="p-3 border border-line text-ink-muted text-sm">{row.quantum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>On "accuracy" — why we won't give you a fake percentage</h2>
        <p>
          You may have seen claims online like "quantum computers are 95%
          accurate" or similar specific figures. These numbers are almost
          always misleading or fabricated, for a simple reason: accuracy in
          both AI and quantum computing depends entirely on the specific
          task, the specific model or hardware, and how the test was set up.
        </p>
        <p>
          For AI, accuracy is measured per task and per model — a model
          might be 99% accurate at one narrow image classification task and
          far worse at a different one. For quantum computers, the relevant
          measure isn't really "accuracy" in the AI sense at all — it's
          things like{" "}
          <Link href="/dictionary/decoherence" className="text-quantum hover:underline">
            gate error rates
          </Link>{" "}
          and{" "}
          <Link href="/learn/quantum-error-correction" className="text-quantum hover:underline">
            coherence times
          </Link>
          , which vary by hardware platform and are detailed on our{" "}
          <Link href="/hardware" className="text-quantum hover:underline">
            Hardware Database
          </Link>{" "}
          for each real processor.
        </p>

        <h2>On "speed" — the honest answer</h2>
        <p>
          Rather than a single speed number, the honest framing is: quantum
          computers offer <strong>proven speedups for specific
          algorithms</strong>, not a general "faster than AI" claim.
        </p>
        <ul>
          <li>
            <strong>Exponential speedup:</strong>{" "}
            <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
              Shor's Algorithm
            </Link>{" "}
            for factoring — but only at a scale no current hardware can
            reach.
          </li>
          <li>
            <strong>Quadratic speedup:</strong>{" "}
            <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
              Grover's Algorithm
            </Link>{" "}
            for unstructured search — real, but more modest than people
            often assume.
          </li>
          <li>
            <strong>No proven speedup (yet):</strong> Most attempts to use
            quantum computing to speed up mainstream AI training fall into
            this category — see our research summary on{" "}
            <Link href="/research/quantum-machine-learning-kernel-methods" className="text-quantum hover:underline">
              quantum kernel methods
            </Link>{" "}
            for a concrete example of how narrow these results currently
            are.
          </li>
        </ul>
        <p>
          For a full breakdown of speedup types across all 20 known quantum
          algorithms, see our{" "}
          <Link href="/algorithms" className="text-quantum hover:underline">
            Algorithms Database
          </Link>
          .
        </p>

        <h2>Where they overlap: Quantum Machine Learning</h2>
        <p>
          The genuine intersection of these two fields is{" "}
          <strong>quantum machine learning (QML)</strong> — research into
          whether quantum circuits can accelerate specific components of
          machine learning, such as certain linear algebra operations (see
          the{" "}
          <Link href="/algorithms/hhl-algorithm" className="text-quantum hover:underline">
            HHL Algorithm
          </Link>
          ) or specialized kernel methods.
        </p>
        <p>
          Separately, classical AI is already being used <em>to help build
          quantum computers</em> — assisting with qubit calibration, error
          correction code design, and control system optimization. This
          "AI helping quantum" direction is more mature today than "quantum
          helping AI."
        </p>

        <h2>The bottom line</h2>
        <p>
          AI and quantum computing are not in a race against each other.
          AI is a mature, deployed technology dominating tasks involving
          pattern recognition and generation at massive scale. Quantum
          computing is an early-stage technology with proven but narrow
          theoretical advantages for specific problems like factoring,
          unstructured search, and quantum simulation — none of which
          overlap much with what makes today's AI systems useful. The most
          likely future involves them working alongside each other, not
          competing.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Will quantum computers make AI obsolete?</h3>
        <p>
          No. Quantum computers don't address the core computational tasks
          that make modern AI useful (large-scale pattern recognition on
          real data). If anything, AI is more likely to help advance quantum
          computing than the reverse, at least in the near term.
        </p>
        <h3>Is a quantum computer "smarter" than an AI model?</h3>
        <p>
          This isn't a meaningful comparison — a quantum computer has no
          built-in intelligence or learning capability of its own; it's a
          computational device that runs specific algorithms. An AI model
          is a trained statistical system. Neither is "smarter" in a general
          sense; they're different tools for different problems.
        </p>
        <h3>Which field should I learn if I want a future-proof career?</h3>
        <p>
          AI/machine learning offers far more immediate job opportunities
          today, given its mature deployment. Quantum computing offers a
          smaller but growing field with strong long-term potential,
          particularly for those with physics or mathematics backgrounds.
          See our <Link href="/jobs" className="text-quantum hover:underline">Quantum Jobs</Link> page for what quantum-specific roles
          actually look like.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Go deeper on either side
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms" className="text-quantum hover:underline">→ Algorithms Database — every quantum algorithm's actual speedup type</Link>
          <Link href="/quantum-vs-classical" className="text-quantum hover:underline">→ Quantum vs Classical Computing</Link>
          <Link href="/myths" className="text-quantum hover:underline">→ 12 Quantum Computing Myths, Debunked</Link>
          <Link href="/research" className="text-quantum hover:underline">→ Research Papers — real benchmarks, not hype</Link>
        </div>
      </div>
    </article>
  );
}
