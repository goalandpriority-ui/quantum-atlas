import Link from "next/link";
import GroverAmplificationDiagram from "@/components/diagrams/GroverAmplificationDiagram";

export const metadata = {
  title: "Grover's Algorithm Explained | QuantumAtlas",
  description:
    "How Grover's Algorithm provides a quadratic speedup for searching unsorted data, and why it matters for optimization and search problems.",
};

export default function GroversAlgorithmPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 3 · Algorithms
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Grover's Algorithm
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          In 1996, Lov Grover developed a quantum algorithm for a problem that
          shows up almost everywhere: searching through a collection of items
          to find the one (or few) that satisfy some condition. While its
          speedup is more modest than Shor's Algorithm, its broad
          applicability makes it one of the most important quantum algorithms
          known.
        </p>

        <h2>The problem: searching unsorted data</h2>
        <p>
          Imagine you have a list of N items, and you want to find the one
          item that satisfies a particular condition — but the list isn't
          sorted, and there's no shortcut like a sorted index to help you. The
          only classical option is to check items one by one. On average,
          you'd need to check about N/2 items; in the worst case, all N.
        </p>
        <p>
          This might sound like a narrow scenario, but "searching" in this
          general sense underlies an enormous range of problems: finding a
          solution that satisfies a set of constraints, finding an input that
          produces a particular output, or finding the best option among many
          candidates in an optimization problem.
        </p>

        <h2>The quantum speedup: quadratic, not exponential</h2>
        <p>
          Grover's Algorithm finds the answer using roughly{" "}
          <strong>√N</strong> steps instead of N. This is called a{" "}
          <strong>quadratic speedup</strong>. For a list of one million items,
          a classical search might need around 500,000 checks on average,
          while Grover's Algorithm needs roughly 1,000.
        </p>
        <p>
          This is far less dramatic than Shor's exponential speedup — but
          because searching and optimization problems are so common, even a
          quadratic speedup has wide-reaching potential, if it can be realized
          on hardware capable of running it at meaningful scale.
        </p>

        <h2>How Grover's Algorithm works: amplitude amplification</h2>
        <p>
          Grover's Algorithm works through a process called{" "}
          <strong>amplitude amplification</strong>. Here's the intuition:
        </p>
        <ul>
          <li>
            <strong>Step 1 — Start in superposition.</strong> Put all qubits
            into an equal superposition of every possible answer, using
            Hadamard gates. At this point, every possible answer has an equal
            (small) probability of being measured.
          </li>
          <li>
            <strong>Step 2 — Mark the answer.</strong> Apply an "oracle" — a
            quantum operation that flips the phase of the correct answer's
            amplitude, without revealing which one it is. This doesn't change
            the probability yet, but sets up the next step.
          </li>
          <li>
            <strong>Step 3 — Amplify.</strong> Apply a second operation
            (sometimes called the "diffusion operator") that reflects all
            amplitudes around their average. Because the correct answer's
            amplitude was flipped, this reflection increases its probability
            while decreasing the others.
          </li>
          <li>
            <strong>Step 4 — Repeat.</strong> Repeating steps 2 and 3 roughly
            √N times gradually concentrates almost all the probability onto
            the correct answer.
          </li>
          <li>
            <strong>Step 5 — Measure.</strong> Measuring now returns the
            correct answer with very high probability.
          </li>
        </ul>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <GroverAmplificationDiagram />
        </div>

        <h2>The "oracle": a key assumption</h2>
        <p>
          A subtle but important point: Grover's Algorithm assumes access to
          an "oracle" — a quantum operation that can recognize a correct
          answer when it sees one (even if it can't search for it directly).
          In practice, building an efficient oracle for a real-world problem
          is itself a significant engineering challenge, and the overall
          speedup depends on how efficiently this oracle can be implemented.
        </p>

        <h2>Real-world relevance and limitations</h2>
        <p>
          Grover's Algorithm is often discussed in the context of:
        </p>
        <ul>
          <li>
            <strong>Cryptography.</strong> A quadratic speedup on search
            effectively halves the "bit strength" of certain symmetric
            encryption schemes — which is why some cryptographic standards
            recommend longer keys as a precaution against future quantum
            computers, even though this is a much smaller concern than Shor's
            Algorithm's threat to RSA.
          </li>
          <li>
            <strong>Optimization problems.</strong> Many optimization problems
            can be framed as searching for the input that minimizes or
            maximizes some value — a natural fit for Grover-style approaches,
            though often combined with other techniques.
          </li>
          <li>
            <strong>Database and pattern-matching tasks.</strong> Conceptually,
            any task that boils down to "find the item matching this
            condition" is a candidate, though practical implementations
            require careful oracle design.
          </li>
        </ul>
        <p>
          It's worth emphasizing: a quadratic speedup, while valuable, is much
          less transformative than an exponential one. Grover's Algorithm
          won't make currently-intractable problems suddenly easy — but for
          large-scale search and optimization tasks, even a quadratic
          reduction in computation time can be highly significant.
        </p>

        <h2>What's next?</h2>
        <p>
          With Shor's and Grover's Algorithms covered, you've seen the two
          most influential examples of quantum speedup. The next step is
          understanding the hardware that has to actually run these
          algorithms — and the errors that stand in the way.
        </p>
        <p>
          <Link href="/learn" className="text-quantum hover:underline">
            ← Back to Learning Center
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is Grover's Algorithm used in practice today?</h3>
        <p>
          Small-scale demonstrations exist on current quantum hardware, but
          practical, large-scale use awaits quantum computers with
          significantly lower error rates and more qubits. Researchers
          continue to explore how to design efficient oracles for real
          problems.
        </p>
        <h3>Does Grover's Algorithm work on sorted data too?</h3>
        <p>
          Yes, but it offers no advantage there — if data is sorted, classical
          algorithms can already search it extremely efficiently (e.g., binary
          search). Grover's Algorithm's advantage is specifically for{" "}
          <em>unsorted</em> data, where classical algorithms have no shortcut.
        </p>
        <h3>Can Grover's Algorithm be combined with Shor's Algorithm?</h3>
        <p>
          They solve different problems and are typically discussed
          separately, but both are examples of how quantum algorithms
          restructure problems to exploit superposition and interference.
          Some research explores using amplitude amplification techniques
          (the core idea behind Grover's) as a building block within other,
          more specialized algorithms.
        </p>
      </div>
    </article>
  );
}
