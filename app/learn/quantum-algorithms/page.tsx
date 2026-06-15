import Link from "next/link";
import SpeedupComparisonDiagram from "@/components/diagrams/SpeedupComparisonDiagram";

export const metadata = {
  title: "Quantum Algorithms: An Overview | QuantumAtlas",
  description:
    "How quantum algorithms work, what kinds of speedups they offer, and how they're built from qubits, gates, and circuits.",
};

export default function QuantumAlgorithmsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 3 · Algorithms
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Algorithms
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          A quantum algorithm is a step-by-step procedure — built from
          qubits, gates, and circuits — designed to solve a problem in a way
          that takes advantage of superposition, entanglement, and
          interference. Not every problem benefits from a quantum approach,
          but for the right problems, the speedup can range from modest to
          breathtaking.
        </p>

        <h2>What makes an algorithm "quantum"?</h2>
        <p>
          At a technical level, a quantum algorithm is simply a quantum
          circuit: a specific sequence of gates applied to a set of qubits,
          followed by measurement. What makes it interesting is{" "}
          <em>how</em> those gates are arranged — the goal is to use
          interference so that, by the time you measure, the probability of
          getting a useful answer is much higher than it would be by chance.
        </p>
        <p>
          A useful mental model: a quantum algorithm doesn't "try every
          possibility and pick the best one." Instead, it arranges
          probability amplitudes so that wrong answers interfere
          destructively (canceling out) while the right answer interferes
          constructively (reinforcing) — making it the most likely outcome
          when you measure.
        </p>

        <h2>Categories of quantum speedup</h2>
        <p>
          Quantum algorithms are often grouped by the <em>type</em> of speedup
          they offer over the best known classical algorithms:
        </p>
        <ul>
          <li>
            <strong>Exponential speedup</strong> — the quantum algorithm's
            running time grows polynomially with problem size, while the best
            classical algorithm grows exponentially. Shor's Algorithm for
            factoring is the most famous example.
          </li>
          <li>
            <strong>Quadratic speedup</strong> — the quantum algorithm is
            roughly the square root of the classical running time. Grover's
            Algorithm for searching is the classic example: a problem that
            takes N steps classically takes roughly √N steps quantumly.
          </li>
          <li>
            <strong>No speedup (or unknown)</strong> — for many problems, no
            quantum algorithm is known to beat the best classical approach.
            Identifying which problems fall into which category is an active
            area of research.
          </li>
        </ul>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <SpeedupComparisonDiagram />
        </div>

        <h2>Two foundational algorithms</h2>
        <p>
          Two algorithms, both developed in the 1990s, remain the most
          widely-referenced examples of quantum advantage — and both are
          covered in dedicated articles on this site:
        </p>
        <ul>
          <li>
            <Link href="/learn/shors-algorithm" className="text-quantum hover:underline">
              <strong>Shor's Algorithm</strong>
            </Link>{" "}
            — efficiently finds the prime factors of large numbers,
            threatening widely-used encryption methods.
          </li>
          <li>
            <Link href="/learn/grovers-algorithm" className="text-quantum hover:underline">
              <strong>Grover's Algorithm</strong>
            </Link>{" "}
            — searches through unsorted data quadratically faster than any
            classical method.
          </li>
        </ul>

        <h2>Beyond Shor and Grover</h2>
        <p>
          Modern quantum computing research extends well beyond these two
          landmark algorithms:
        </p>
        <ul>
          <li>
            <strong>Variational algorithms</strong> (like VQE — the
            Variational Quantum Eigensolver) combine a quantum computer with a
            classical optimizer, and are considered promising for near-term
            "noisy" hardware because they can tolerate some errors.
          </li>
          <li>
            <strong>Quantum simulation algorithms</strong> directly simulate
            the behavior of molecules and materials — arguably the most
            natural application of quantum computers, since Richard Feynman's
            original motivation was that quantum systems are hard for
            classical computers to simulate.
          </li>
          <li>
            <strong>Quantum machine learning algorithms</strong> explore
            whether quantum circuits can speed up certain components of
            machine learning, such as linear algebra operations used in
            training models.
          </li>
        </ul>

        <h2>Why algorithm design matters so much</h2>
        <p>
          Unlike classical computing, where almost any problem can eventually
          be solved by "just writing more code," quantum speedups are
          carefully constructed and problem-specific. Finding a new quantum
          algorithm with a genuine speedup is a significant research
          achievement — which is part of why, decades after Shor's and
          Grover's algorithms, the list of algorithms with proven, dramatic
          speedups remains relatively short.
        </p>

        <h2>What's next?</h2>
        <p>
          Let's look at the two landmark algorithms in detail, starting with
          the one that put quantum computing on the map for cybersecurity.
        </p>
        <p>
          <Link href="/learn/shors-algorithm" className="text-quantum hover:underline">
            Continue to: Shor's Algorithm →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Do quantum algorithms always run on a quantum computer alone?</h3>
        <p>
          Not necessarily. Many practical near-term approaches are{" "}
          <strong>hybrid</strong>: a classical computer handles most of the
          work, occasionally calling a quantum processor to perform a specific
          sub-task — similar to how a CPU might offload certain calculations
          to a GPU.
        </p>
        <h3>Can any classical algorithm be converted into a quantum one?</h3>
        <p>
          Any classical computation can, in principle, be run on a quantum
          computer (quantum computers are at least as powerful as classical
          ones). However, simply "porting" a classical algorithm rarely
          produces a speedup — genuine quantum advantage usually requires
          fundamentally rethinking the approach to exploit superposition,
          entanglement, and interference.
        </p>
        <h3>How do I know if my problem could benefit from a quantum algorithm?</h3>
        <p>
          As a rough guide, problems involving large-scale search,
          optimization, factoring, or simulating quantum systems (like
          molecules) are the most promising candidates. Problems that are
          already efficiently solvable classically, or that are inherently
          sequential, are less likely to benefit.
        </p>
      </div>
    </article>
  );
}
