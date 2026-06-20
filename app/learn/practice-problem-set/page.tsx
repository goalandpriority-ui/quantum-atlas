import Link from "next/link";

export const metadata = {
  title: "Practice Problem Set | QuantumAtlas",
  description:
    "Work through a set of problems spanning everything covered in this Learning Center, with full worked solutions — the capstone exercise for this site's quantum computing course.",
};

function Solution({ children }: { children: React.ReactNode }) {
  return (
    <details className="rounded-lg border border-line bg-surface p-4 my-4">
      <summary className="font-mono text-sm font-semibold text-quantum cursor-pointer">
        Show worked solution
      </summary>
      <div className="mt-3 text-sm text-ink-muted leading-relaxed space-y-2">
        {children}
      </div>
    </details>
  );
}

export default function PracticeProblemSetPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 7 · Capstone Topics
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Practice Problem Set
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          This is the capstone exercise for the QuantumAtlas Learning
          Center — a set of problems spanning everything from Level 0
          through Level 7. Try working through each one yourself before
          revealing the worked solution. There's no grading or
          submission — this is purely for your own understanding.
        </p>

        <h2>Problem 1: Basic probability</h2>
        <p>
          A qubit is in state |ψ⟩ = 0.6|0⟩ + β|1⟩, where β is a positive
          real number. What is β, and what is the probability of measuring
          1?
        </p>
      </div>
      <Solution>
        <p>
          Since |α|² + |β|² = 1 (see our{" "}
          <Link href="/dictionary/qubit" className="text-quantum hover:underline">
            Qubit
          </Link>{" "}
          entry), and α = 0.6, we have 0.36 + β² = 1, so β² = 0.64, giving β
          = 0.8. The probability of measuring 1 is |β|² = 0.64, or 64%. You
          can verify this using our{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Probability Amplitude Calculator
          </Link>{" "}
          tool.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 2: Identifying entanglement</h2>
        <p>
          Is the state (1/2)(|00⟩ + |01⟩ + |10⟩ + |11⟩) entangled? Why or
          why not?
        </p>
      </div>
      <Solution>
        <p>
          This state is <em>not</em> entangled — it's a product state. You
          can verify this by checking whether it factors into a tensor
          product of two single-qubit states: (1/√2)(|0⟩ + |1⟩) ⊗
          (1/√2)(|0⟩ + |1⟩) expands to exactly this state. Compare this to
          the genuinely entangled{" "}
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
            Bell state
          </Link>{" "}
          (1/√2)(|00⟩ + |11⟩), which cannot be factored this way — see our{" "}
          <Link href="/learn/multi-qubit-systems-tensor-products" className="text-quantum hover:underline">
            Multi-Qubit Systems & Tensor Products
          </Link>{" "}
          article for the full explanation.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 3: Gate sequences</h2>
        <p>
          Using our{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Mini Quantum Circuit Builder
          </Link>{" "}
          tool (or by hand), determine what applying H, then X, then H does
          to a qubit starting in state |0⟩.
        </p>
      </div>
      <Solution>
        <p>
          H applied to |0⟩ gives (1/√2)(|0⟩ + |1⟩). Applying X (which
          swaps the |0⟩ and |1⟩ components) to this gives (1/√2)(|1⟩ +
          |0⟩), which is the same state — equal superposition is unchanged
          by a bit flip. Applying H again returns the qubit to |0⟩. So
          H-X-H, applied to |0⟩, returns |0⟩ unchanged. Try this in the
          circuit builder tool to confirm.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 4: Algorithm speedup classification</h2>
        <p>
          Without looking it up, guess whether each of these offers an
          exponential, quadratic, or no proven speedup: (a) Shor's
          Algorithm, (b) Grover's Algorithm, (c) QAOA.
        </p>
      </div>
      <Solution>
        <p>
          (a) Shor's Algorithm offers an <strong>exponential</strong>{" "}
          speedup for factoring. (b) Grover's Algorithm offers a{" "}
          <strong>quadratic</strong> speedup for unstructured search. (c)
          QAOA is a <strong>heuristic</strong> algorithm with no proven
          speedup over the best classical methods — see our{" "}
          <Link href="/algorithms" className="text-quantum hover:underline">
            Algorithms Database
          </Link>{" "}
          to check your answers against all 50 entries.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 5: Hardware tradeoffs</h2>
        <p>
          A trapped-ion processor has fewer qubits than a superconducting
          processor, but much higher gate fidelity. Using the concept of{" "}
          <Link href="/dictionary/algorithmic-qubits" className="text-quantum hover:underline">
            algorithmic qubits
          </Link>
          , explain why the trapped-ion system might still be more useful
          for running a specific algorithm.
        </p>
      </div>
      <Solution>
        <p>
          Algorithmic qubits accounts for both qubit count and gate
          fidelity together. A processor with fewer, higher-fidelity qubits
          can run deeper, more complex circuits reliably before errors
          dominate, while a larger but noisier processor may only support
          very shallow circuits before results become unreliable. Use our{" "}
          <Link href="/compare" className="text-quantum hover:underline">
            Compare Processors tool
          </Link>{" "}
          to see this tradeoff with real hardware specs.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 6: Teleportation conceptual check</h2>
        <p>
          After Alice performs her measurement in the quantum teleportation
          protocol, has Bob's qubit already become the teleported state, or
          does he need to wait for something else first?
        </p>
      </div>
      <Solution>
        <p>
          Bob's qubit has already collapsed into a state correlated with
          Alice's original qubit — but Bob doesn't yet know{" "}
          <em>which</em> of the four possible corrections to apply without
          Alice's classical measurement result. He must wait for her
          classical message before he can complete the protocol and
          recover the exact original state. See our{" "}
          <Link href="/learn/quantum-teleportation-lesson" className="text-quantum hover:underline">
            Quantum Teleportation lesson
          </Link>{" "}
          for the full step-by-step walkthrough.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 7: Complexity theory reasoning</h2>
        <p>
          A friend claims: "Since Shor's Algorithm proves quantum computers
          are exponentially faster at one NP problem, they must be
          exponentially faster at all NP-hard problems too." What's wrong
          with this reasoning?
        </p>
      </div>
      <Solution>
        <p>
          Factoring (the problem Shor's Algorithm solves) is believed to be
          in NP but is <em>not</em> believed to be NP-complete — meaning it
          isn't representative of the hardest problems in NP. Quantum
          computers having a speedup for factoring doesn't imply a speedup
          for NP-hard problems like the traveling salesman problem. See our{" "}
          <Link href="/learn/quantum-complexity-theory" className="text-quantum hover:underline">
            Quantum Complexity Theory
          </Link>{" "}
          article for the full explanation of this frequently confused
          distinction.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>Problem 8: Design pattern identification</h2>
        <p>
          You're designing a new quantum algorithm to estimate an unknown
          probability more efficiently than classical Monte Carlo sampling.
          Which design pattern from our{" "}
          <Link href="/learn/quantum-algorithm-design-patterns" className="text-quantum hover:underline">
            Quantum Algorithm Design Patterns
          </Link>{" "}
          article is most relevant?
        </p>
      </div>
      <Solution>
        <p>
          This points toward <strong>amplitude amplification</strong> — and
          in fact, this is exactly the design pattern behind{" "}
          <Link href="/algorithms/quantum-amplitude-estimation" className="text-quantum hover:underline">
            Quantum Amplitude Estimation
          </Link>
          , which provides a proven quadratic speedup over classical Monte
          Carlo methods for precisely this kind of probability estimation
          task.
        </p>
      </Solution>

      <div className="prose-quantum max-w-2xl">
        <h2>How did you do?</h2>
        <p>
          If most of these felt approachable, you've built a genuinely
          solid working understanding of quantum computing — spanning the
          math foundations, core principles, major algorithms, hardware
          realities, and the field's complexity-theoretic boundaries. If
          some problems were tricky, revisit the linked articles for those
          specific topics; that's exactly what they're there for.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">What's next</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Back to the Learning Center overview</Link>
          <Link href="/algorithms" className="text-quantum hover:underline">→ Algorithms Database — 50 algorithms</Link>
          <Link href="/courses" className="text-quantum hover:underline">→ Courses — continue with structured external learning</Link>
          <Link href="/jobs" className="text-quantum hover:underline">→ Quantum Jobs — see where this knowledge can take you</Link>
        </div>
      </div>
    </article>
  );
}
