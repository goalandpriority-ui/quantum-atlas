import Link from "next/link";

export const metadata = {
  title: "Common Beginner Mistakes in Quantum Computing | QuantumAtlas",
  description:
    "The misunderstandings that trip up almost everyone learning quantum computing, both conceptually and when writing actual quantum code — and how to avoid them.",
};

export default function CommonBeginnerMistakesPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 6 · Practitioner's Corner
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Common Beginner Mistakes
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Quantum computing trips up beginners in fairly predictable ways —
          some conceptual, some purely practical mistakes made while writing
          actual code. This article collects the most common ones, building
          on the misconceptions already addressed in our{" "}
          <Link href="/myths" className="text-quantum hover:underline">
            Myths page
          </Link>
          , with a more practitioner-focused angle.
        </p>

        <h2>Conceptual mistake 1: Thinking more qubits always means more power</h2>
        <p>
          As discussed in our{" "}
          <Link href="/dictionary/algorithmic-qubits" className="text-quantum hover:underline">
            Algorithmic Qubits
          </Link>{" "}
          entry, a processor's usefulness depends heavily on{" "}
          <Link href="/dictionary/gate-fidelity" className="text-quantum hover:underline">
            gate fidelity
          </Link>{" "}
          and connectivity, not just raw qubit count. Beginners often assume
          a 1,000-qubit processor is automatically more capable than a
          50-qubit one — check our{" "}
          <Link href="/compare" className="text-quantum hover:underline">
            Compare Processors tool
          </Link>{" "}
          to see how dramatically this varies in practice.
        </p>

        <h2>Conceptual mistake 2: Confusing superposition with classical uncertainty</h2>
        <p>
          As covered in our{" "}
          <Link href="/dictionary/superposition" className="text-quantum hover:underline">
            Superposition
          </Link>{" "}
          entry, a qubit in superposition isn't "secretly" a 0 or a 1 that
          you just haven't checked yet — both possibilities are genuinely
          present and can interfere with each other. This distinction
          matters enormously once you start reasoning about why quantum
          algorithms actually work.
        </p>

        <h2>Conceptual mistake 3: Expecting quantum computers to be faster at everything</h2>
        <p>
          As detailed in our{" "}
          <Link href="/quantum-vs-classical" className="text-quantum hover:underline">
            Quantum vs Classical
          </Link>{" "}
          comparison, quantum computers only offer advantages for specific
          problem types. Many beginners are surprised that a quantum
          computer would be hopelessly worse than a laptop at, say, running
          a spreadsheet.
        </p>

        <h2>Practical mistake 1: Forgetting that measurement is irreversible</h2>
        <p>
          A very common coding mistake: measuring a qubit partway through a
          circuit, then trying to use its "superposition" afterward.{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            Measurement collapse
          </Link>{" "}
          means that once you measure, the superposition is gone — if your
          algorithm needs the superposition preserved, measurement must
          happen only at the very end (or you need a more sophisticated
          technique like syndrome measurement, covered in our error
          correction coverage).
        </p>

        <h2>Practical mistake 2: Not running enough shots</h2>
        <p>
          As discussed in our{" "}
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
            Your First Qiskit Circuit
          </Link>{" "}
          tutorial, a single circuit execution gives you one random outcome,
          not a probability distribution. Beginners sometimes run a circuit
          once, see an unexpected result, and conclude their code is broken
          — when really they just needed more shots to see the underlying
          statistical pattern clearly.
        </p>

        <h2>Practical mistake 3: Ignoring qubit connectivity when designing circuits</h2>
        <p>
          As explained in our{" "}
          <Link href="/dictionary/qubit-connectivity" className="text-quantum hover:underline">
            Qubit Connectivity
          </Link>{" "}
          entry, not every pair of qubits on real hardware can directly
          interact. Code that works perfectly on an idealized simulator can
          require significant extra "SWAP" operations — and therefore much
          more circuit depth and error — once compiled for hardware with
          limited connectivity, like IBM's heavy-hex layout.
        </p>

        <h2>Practical mistake 4: Underestimating noise on real hardware</h2>
        <p>
          Code that produces clean, expected results on a simulator can
          look dramatically noisier on real quantum hardware, due to{" "}
          <Link href="/dictionary/decoherence" className="text-quantum hover:underline">
            decoherence
          </Link>{" "}
          and gate errors. This is exactly why{" "}
          <Link href="/dictionary/quantum-error-mitigation" className="text-quantum hover:underline">
            error mitigation techniques
          </Link>{" "}
          exist, and why our{" "}
          <Link href="/learn/from-simulator-to-real-hardware" className="text-quantum hover:underline">
            From Simulator to Real Hardware
          </Link>{" "}
          article specifically addresses this transition.
        </p>

        <h2>Practical mistake 5: Designing circuits that are too deep for NISQ hardware</h2>
        <p>
          As covered in our{" "}
          <Link href="/dictionary/circuit-depth" className="text-quantum hover:underline">
            Circuit Depth
          </Link>{" "}
          entry, deeper circuits accumulate more error. Beginners sometimes
          design algorithmically "correct" but very deep circuits that
          produce essentially random noise when run on real NISQ hardware,
          simply because the circuit is too long relative to the hardware's{" "}
          <Link href="/dictionary/coherence-time" className="text-quantum hover:underline">
            coherence time
          </Link>
          .
        </p>

        <h2>The meta-mistake: trusting hype over primary sources</h2>
        <p>
          Perhaps the most common mistake of all: forming beliefs about
          quantum computing's current capabilities from breathless headlines
          rather than the actual research. Our{" "}
          <Link href="/myths" className="text-quantum hover:underline">
            Myths page
          </Link>{" "}
          and{" "}
          <Link href="/research" className="text-quantum hover:underline">
            Research Papers section
          </Link>{" "}
          exist specifically to help counteract this pattern.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is it normal for my first few quantum programs to not work as expected?</h3>
        <p>
          Completely normal — debugging a quantum circuit's actual behavior
          against your expectations is one of the best ways to deepen your
          understanding, similar to how debugging classical code reinforces
          programming fundamentals.
        </p>
        <h3>How do I know if a mistake is conceptual or just a coding bug?</h3>
        <p>
          A useful diagnostic: try running your circuit on a clean
          simulator first. If results match your conceptual expectations
          there but not on real hardware, the issue is likely noise-related
          (see our hardware transition article). If results don't match
          expectations even in simulation, the issue is more likely a
          conceptual misunderstanding or a circuit construction bug.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/myths" className="text-quantum hover:underline">→ 30 Quantum Computing Myths, Debunked</Link>
          <Link href="/learn/from-simulator-to-real-hardware" className="text-quantum hover:underline">→ From Simulator to Real Hardware</Link>
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">→ Your First Qiskit Circuit</Link>
        </div>
      </div>
    </article>
  );
}
