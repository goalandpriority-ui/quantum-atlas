import Link from "next/link";

export const metadata = {
  title: "Quantum Computers vs Supercomputers | QuantumAtlas",
  description:
    "How quantum computers differ from classical supercomputers — they aren't competing on the same axis, and understanding why clarifies what each is actually good for.",
};

export default function QuantumVsSupercomputersPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Comparison
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6">
        Quantum Computers vs Supercomputers
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        A common question: if supercomputers are already incredibly
        powerful, why do we need quantum computers? The answer is that
        they're not competing on the same axis — they're built to solve
        fundamentally different kinds of problems.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>What a supercomputer actually is</h2>
        <p>
          A classical supercomputer — like Frontier at Oak Ridge National
          Laboratory, currently among the world's fastest — is built from
          enormous numbers of conventional processors (CPUs and GPUs)
          working in parallel. It doesn't use any fundamentally different
          computing principle than your laptop; it's simply an
          extraordinarily large-scale version of the same{" "}
          <Link href="/dictionary/qubit" className="text-quantum hover:underline">
            classical bit
          </Link>
          -based architecture, optimized for massive parallel throughput.
        </p>

        <h2>Where supercomputers dominate</h2>
        <p>
          Supercomputers excel at problems that can be broken into many
          independent or loosely coupled pieces processed in parallel —
          weather simulation, nuclear physics modeling, large-scale data
          analysis, and training large AI models. These are precisely the
          tasks where having millions of conventional cores working
          together genuinely helps, and where quantum computers currently
          offer no advantage whatsoever.
        </p>

        <h2>Where quantum computers could eventually help</h2>
        <p>
          Quantum computers target a narrower, different class of
          problems — ones involving exponentially large solution spaces
          with specific mathematical structure, like{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            integer factoring
          </Link>
          ,{" "}
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
            unstructured search
          </Link>
          , and{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            quantum chemistry simulation
          </Link>
          . For these specific problem types, a quantum computer's use of{" "}
          <Link href="/dictionary/superposition" className="text-quantum hover:underline">
            superposition
          </Link>{" "}
          and{" "}
          <Link href="/dictionary/quantum-interference" className="text-quantum hover:underline">
            interference
          </Link>{" "}
          offers a fundamentally different computational approach — not
          just more processing power, but a different kind of power
          entirely.
        </p>

        <h2>A useful analogy</h2>
        <p>
          Think of a supercomputer as an enormous fleet of delivery trucks
          — incredibly effective at moving huge volumes of cargo, and you
          can always add more trucks for more throughput. A quantum
          computer is more like a specialized tool — say, an MRI machine —
          built for an entirely different kind of task. You wouldn't use
          an MRI machine to deliver packages, and you wouldn't use a fleet
          of trucks to image soft tissue. More trucks never turns into an
          MRI machine, no matter how many you add.
        </p>

        <h2>Why classical supercomputers can sometimes "beat" quantum claims</h2>
        <p>
          This is exactly what happened with Google's 2019 "quantum
          supremacy" claim: classical supercomputers, using improved
          simulation algorithms, later narrowed the performance gap on the
          specific{" "}
          <Link href="/dictionary/random-circuit-sampling" className="text-quantum hover:underline">
            random circuit sampling
          </Link>{" "}
          task involved. This doesn't mean supercomputers are "better"
          than quantum computers in general — it means that particular
          benchmark task wasn't as definitively beyond classical reach as
          first claimed. See our{" "}
          <Link href="/myths" className="text-quantum hover:underline">
            Myths page
          </Link>{" "}
          for more on this pattern.
        </p>

        <h2>The realistic future: working together</h2>
        <p>
          Most serious roadmaps envision hybrid systems — classical
          supercomputers handling the vast majority of computation, with
          quantum processors called in as specialized co-processors for
          the narrow slice of problems where they offer genuine advantage,
          similar to how GPUs accelerate specific tasks within
          classical-dominated systems today. This hybrid model, not
          quantum computers replacing supercomputers, is the consensus
          expectation across the field. See our{" "}
          <Link href="/quantum-vs-classical" className="text-quantum hover:underline">
            Quantum vs Classical
          </Link>{" "}
          comparison for more detail on this hybrid future.
        </p>

        <h2>Side-by-side comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Supercomputer</th>
              <th>Quantum Computer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Underlying unit</td>
              <td>Classical bits, millions of cores</td>
              <td>Qubits, currently tens to low thousands</td>
            </tr>
            <tr>
              <td>Best at</td>
              <td>Parallelizable, large-scale numerical simulation</td>
              <td>Specific structured problems: factoring, search, quantum simulation</td>
            </tr>
            <tr>
              <td>Maturity</td>
              <td>Decades of refinement, fully production-ready</td>
              <td>Early-stage, NISQ era, narrow proven advantages</td>
            </tr>
            <tr>
              <td>Scaling approach</td>
              <td>Add more conventional cores</td>
              <td>Improve qubit count and quality simultaneously</td>
            </tr>
            <tr>
              <td>Relationship</td>
              <td colSpan={2}>Complementary — likely to work together in hybrid systems, not in competition</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>
        <h3>Will quantum computers eventually be faster than supercomputers at everything?</h3>
        <p>
          No — this is a category error. Quantum speedups are specific to
          certain mathematical problem structures, not a general
          performance multiplier. For the vast majority of computing
          tasks, classical supercomputers will remain faster and more
          practical indefinitely.
        </p>
        <h3>Could a quantum computer simulate a supercomputer, or vice versa?</h3>
        <p>
          A quantum computer can simulate any classical computation (it's
          computationally universal), though often inefficiently for
          tasks classical hardware already handles well. A classical
          supercomputer can simulate small quantum systems, but the
          required resources grow exponentially with qubit count — this
          exponential wall is exactly why quantum computers are being
          built in the first place.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related comparisons</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/quantum-vs-classical" className="text-quantum hover:underline">→ Quantum vs Classical Computing</Link>
          <Link href="/quantum-vs-ai" className="text-quantum hover:underline">→ Quantum vs AI</Link>
          <Link href="/quantum-vs-blockchain" className="text-quantum hover:underline">→ Quantum vs Blockchain</Link>
        </div>
      </div>
    </article>
  );
}
