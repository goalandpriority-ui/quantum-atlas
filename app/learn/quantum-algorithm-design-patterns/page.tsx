import Link from "next/link";

export const metadata = {
  title: "Quantum Algorithm Design Patterns | QuantumAtlas",
  description:
    "The recurring building blocks — amplitude amplification, phase kickback, and more — that show up again and again across quantum algorithms.",
};

export default function DesignPatternsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 7 · Capstone Topics
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Algorithm Design Patterns
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Our{" "}
          <Link href="/algorithms" className="text-quantum hover:underline">
            Algorithms Database
          </Link>{" "}
          covers 50 individual algorithms, each solving a specific problem.
          But underneath that variety, a much smaller set of recurring
          mathematical "design patterns" shows up again and again. Learning
          to recognize these patterns is what separates memorizing
          individual algorithms from actually understanding how to design
          new ones.
        </p>

        <h2>Pattern 1: Phase kickback</h2>
        <p>
          Phase kickback is a technique where information about a function
          gets transferred into the <em>phase</em> of a control qubit,
          rather than directly into a measurable bit value. This sounds
          abstract, but it's the actual mechanism underlying{" "}
          <Link href="/algorithms/deutsch-jozsa" className="text-quantum hover:underline">
            Deutsch-Jozsa
          </Link>
          ,{" "}
          <Link href="/algorithms/bernstein-vazirani" className="text-quantum hover:underline">
            Bernstein-Vazirani
          </Link>
          , and — in a more elaborate form —{" "}
          <Link href="/algorithms/quantum-phase-estimation" className="text-quantum hover:underline">
            Quantum Phase Estimation
          </Link>
          , which itself powers{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>
          . Recognizing "this problem involves extracting global information
          about a function" is often the first clue that phase kickback
          might be the relevant design pattern.
        </p>

        <h2>Pattern 2: Amplitude amplification</h2>
        <p>
          First introduced through{" "}
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
            Grover's Algorithm
          </Link>
          , amplitude amplification is a general technique for boosting the
          probability of measuring a "correct" answer through repeated
          rounds of marking and reflecting — using{" "}
          <Link href="/dictionary/quantum-interference" className="text-quantum hover:underline">
            quantum interference
          </Link>{" "}
          to concentrate probability where you want it. This same pattern,
          generalized, underlies{" "}
          <Link href="/algorithms/quantum-counting" className="text-quantum hover:underline">
            Quantum Counting
          </Link>
          ,{" "}
          <Link href="/algorithms/quantum-amplitude-estimation" className="text-quantum hover:underline">
            Quantum Amplitude Estimation
          </Link>
          , and{" "}
          <Link href="/algorithms/quantum-approximate-counting" className="text-quantum hover:underline">
            Quantum Approximate Counting
          </Link>
          . Recognizing "this problem involves finding or estimating
          something among many possibilities" often points toward this
          pattern.
        </p>

        <h2>Pattern 3: The hybrid quantum-classical loop</h2>
        <p>
          Rather than a purely quantum algorithm, this pattern splits work
          between a quantum circuit (evaluating something quantum
          mechanically) and a classical optimizer (deciding how to adjust
          parameters based on the result), repeating many times. This
          pattern, used in{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            VQE
          </Link>{" "}
          and{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">
            QAOA
          </Link>
          , exists specifically because it's well-suited to noisy,{" "}
          <Link href="/dictionary/nisq" className="text-quantum hover:underline">
            NISQ-era
          </Link>{" "}
          hardware — keeping the quantum portion of the computation
          shallow, while offloading the harder optimization work to
          reliable classical computers.
        </p>

        <h2>Pattern 4: Encode, transform, measure</h2>
        <p>
          Many quantum algorithms follow a consistent three-stage shape:
          encode a classical problem into a quantum state, apply a sequence
          of gates that transforms it in a problem-specific way, then
          measure to extract a classical answer. This pattern is visible
          throughout the{" "}
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
            Bell state example
          </Link>{" "}
          from our practitioner tutorials, scaled up to far more complex
          algorithms.
        </p>

        <h2>Pattern 5: Problem-specific oracles</h2>
        <p>
          Several algorithms — notably Grover's and Deutsch-Jozsa — are
          described in terms of an abstract "oracle": a black-box quantum
          operation that encodes the specific problem you're solving,
          separate from the general algorithm structure around it. This
          separation lets the same general algorithm framework be reused
          across many different specific problems, simply by swapping out
          the oracle.
        </p>

        <h2>Pattern 6: Using linear combinations of unitaries</h2>
        <p>
          More advanced algorithms, like those built on{" "}
          <Link href="/algorithms/linear-combination-of-unitaries" className="text-quantum hover:underline">
            Linear Combination of Unitaries
          </Link>{" "}
          and{" "}
          <Link href="/algorithms/quantum-signal-processing" className="text-quantum hover:underline">
            Quantum Signal Processing
          </Link>
          , use this pattern to implement mathematical operations that
          aren't directly realizable as a single quantum gate, by cleverly
          combining several gate operations probabilistically.
        </p>

        <h2>Putting it together: recognizing patterns in a new problem</h2>
        <p>
          When approaching a new computational problem and wondering if a
          quantum algorithm might help, these patterns offer a useful
          checklist: Does it involve extracting global structure or
          periodicity from a function (phase kickback)? Does it involve
          searching or estimating among many possibilities (amplitude
          amplification)? Is it an optimization problem suited to today's
          noisy hardware (hybrid quantum-classical loop)? This kind of
          pattern-matching is exactly how researchers continue to discover
          new quantum algorithms today.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Do all 50 algorithms in the Algorithms Database fit neatly into one of these patterns?</h3>
        <p>
          Most do, though some — particularly the cryptographic protocols
          like BB84 and E91 — rely more directly on fundamental quantum
          properties like measurement disturbance rather than these
          algorithmic design patterns specifically.
        </p>
        <h3>Is understanding these patterns enough to invent a new quantum algorithm?</h3>
        <p>
          It's a strong starting point, but real algorithm design also
          requires deep familiarity with the specific mathematical
          structure of your target problem — these patterns are more like
          a toolkit of proven techniques than a guaranteed formula for
          success.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms" className="text-quantum hover:underline">→ Algorithms Database — all 50 algorithms</Link>
          <Link href="/learn/practice-problem-set" className="text-quantum hover:underline">→ Practice Problem Set</Link>
          <Link href="/learn/quantum-complexity-theory" className="text-quantum hover:underline">→ Quantum Complexity Theory</Link>
        </div>
      </div>
    </article>
  );
}
