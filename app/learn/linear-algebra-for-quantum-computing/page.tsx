import Link from "next/link";

export const metadata = {
  title: "Linear Algebra for Quantum Computing | QuantumAtlas",
  description:
    "Vectors, matrices, and complex numbers — the mathematical language quantum computing is written in, explained from scratch for newcomers.",
};

export default function LinearAlgebraPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 0 · Math Foundations
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Linear Algebra for Quantum Computing
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          You can understand the <em>concepts</em> behind quantum computing
          — superposition, entanglement, interference — without much math,
          and that's exactly how the rest of this Learning Center is
          written. But if you want to understand <em>why</em> the equations
          throughout this site (like |ψ⟩ = α|0⟩ + β|1⟩) work the way they
          do, a small amount of linear algebra goes a long way. This article
          is optional, but it unlocks a deeper level of understanding for
          everything that follows.
        </p>

        <h2>Vectors: lists of numbers with direction</h2>
        <p>
          A vector is simply an ordered list of numbers. In quantum
          computing, a qubit's state is represented as a vector with two
          entries — written vertically:
        </p>
        <p className="font-mono bg-surface border border-line rounded-lg p-4 text-center">
          |0⟩ = [1, 0]ᵀ &nbsp;&nbsp;&nbsp; |1⟩ = [0, 1]ᵀ
        </p>
        <p>
          Here, |0⟩ and |1⟩ are just convenient names (using a notation
          called "bra-ket" notation) for two specific, simple vectors. Any
          qubit state — including superpositions — is built by combining
          these two basic vectors with appropriate weights.
        </p>

        <h2>Complex numbers: why quantum computing needs them</h2>
        <p>
          You may already know real numbers (like 3, -1.5, or π). Quantum
          mechanics requires a richer number system called{" "}
          <strong>complex numbers</strong>, written as a + bi, where i is
          defined as the square root of -1 (a number that doesn't exist
          among the real numbers).
        </p>
        <p>
          Why does quantum computing need this? Because the amplitudes
          described throughout this site (like α and β in |ψ⟩ = α|0⟩ +
          β|1⟩) are generally complex numbers, not just real ones. This
          extra richness is exactly what allows{" "}
          <Link href="/dictionary/quantum-interference" className="text-quantum hover:underline">
            quantum interference
          </Link>{" "}
          to work — real numbers alone can't produce the same range of
          constructive and destructive cancellation effects.
        </p>

        <h2>Vector addition and scalar multiplication</h2>
        <p>
          Two operations you'll see constantly: adding vectors together
          (combining them entry by entry), and multiplying a vector by a
          single number, called a "scalar" (multiplying every entry by that
          number). A general qubit state α|0⟩ + β|1⟩ is built from exactly
          these two operations — scaling |0⟩ by α, scaling |1⟩ by β, and
          adding the results together.
        </p>

        <h2>Matrices: transformations applied to vectors</h2>
        <p>
          A matrix is a rectangular grid of numbers that represents a
          transformation you can apply to a vector. In quantum computing,
          every{" "}
          <Link href="/dictionary/quantum-gate" className="text-quantum hover:underline">
            quantum gate
          </Link>{" "}
          is mathematically a matrix, and "applying a gate to a qubit"
          literally means multiplying the gate's matrix by the qubit's
          vector.
        </p>
        <p>
          For example, the{" "}
          <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
            Hadamard gate
          </Link>{" "}
          is the matrix:
        </p>
        <p className="font-mono bg-surface border border-line rounded-lg p-4 text-center">
          H = (1/√2) × [[1, 1], [1, -1]]
        </p>
        <p>
          Multiplying this matrix by the vector for |0⟩ produces (1/√2)(|0⟩
          + |1⟩) — the equal superposition state referenced throughout this
          site. This single matrix multiplication is the actual mathematical
          content behind the much more casually stated idea of "the
          Hadamard gate creates superposition."
        </p>

        <h2>Why gates must be unitary</h2>
        <p>
          Not every matrix is a valid quantum gate. Quantum gates must be{" "}
          <strong>unitary</strong> — a technical property guaranteeing that
          the gate preserves total probability (since |α|² + |β|² must
          always equal 1) and is always reversible, consistent with the
          reversibility of quantum gates discussed in our{" "}
          <Link href="/dictionary/quantum-gate" className="text-quantum hover:underline">
            Quantum Gate dictionary entry
          </Link>
          .
        </p>

        <h2>Inner products: measuring overlap between states</h2>
        <p>
          The "inner product" between two vectors is a single number
          measuring how much they overlap or align. In quantum computing,
          inner products are used to calculate measurement probabilities,
          and they're the mathematical foundation behind tools like the{" "}
          <Link href="/algorithms/swap-test" className="text-quantum hover:underline">
            SWAP test
          </Link>
          , which estimates how similar two quantum states are.
        </p>

        <h2>You now have enough to go deeper</h2>
        <p>
          With vectors, complex numbers, matrices, and inner products in
          hand, you have the core toolkit used throughout the more
          mathematical articles on this site — including{" "}
          <Link href="/learn/the-math-of-a-qubit" className="text-quantum hover:underline">
            The Math of a Qubit
          </Link>{" "}
          and{" "}
          <Link href="/learn/density-matrices-mixed-states" className="text-quantum hover:underline">
            Density Matrices & Mixed States
          </Link>
          . You don't need to master every detail to continue — even a
          rough intuition for these ideas will make the rest of this site
          noticeably more meaningful.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Do I need this math to understand the rest of the site?</h3>
        <p>
          No — every article in our Learning Center's Levels 1 through 4
          is written to be understandable through plain-language
          explanations and analogies alone. This article exists for readers
          who want the deeper mathematical "why" behind those explanations.
        </p>
        <h3>How much math background do I need to start this article?</h3>
        <p>
          High school algebra is sufficient as a starting point — this
          article builds up complex numbers, vectors, and matrices from
          fairly basic assumptions, rather than assuming prior linear
          algebra coursework.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/the-math-of-a-qubit" className="text-quantum hover:underline">→ The Math of a Qubit</Link>
          <Link href="/learn/what-is-a-qubit" className="text-quantum hover:underline">→ What is a Qubit?</Link>
          <Link href="/dictionary/quantum-gate" className="text-quantum hover:underline">→ Quantum Gate explained</Link>
        </div>
      </div>
    </article>
  );
}
