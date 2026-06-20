import Link from "next/link";

export const metadata = {
  title: "Multi-Qubit Systems & Tensor Products | QuantumAtlas",
  description:
    "How individual qubits mathematically combine into the larger systems that give quantum computing its power, via the tensor product.",
};

export default function MultiQubitSystemsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 0 · Math Foundations
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Multi-Qubit Systems & Tensor Products
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Every Bloch sphere picture and single-qubit equation discussed in{" "}
          <Link href="/learn/the-math-of-a-qubit" className="text-quantum hover:underline">
            The Math of a Qubit
          </Link>{" "}
          describes exactly one qubit. But real quantum algorithms use many
          qubits together — and how multiple qubits combine mathematically
          is the actual source of quantum computing's exponential scaling
          and{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entanglement
          </Link>
          . The mathematical tool for combining qubits is called the{" "}
          <strong>tensor product</strong>.
        </p>

        <h2>Combining two classical bits: the easy case</h2>
        <p>
          Two classical bits combine simply: you just list both values
          together (like "01" or "10"). Two bits give you 4 possible
          combined states, three bits give 8, and so on — this is exactly
          the doubling pattern explored in our{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Qubit-to-States Converter
          </Link>{" "}
          tool.
        </p>

        <h2>Combining two qubits: the tensor product</h2>
        <p>
          Combining two qubit <em>vectors</em> requires a more involved
          operation called the tensor product (written with the symbol ⊗).
          Given two single-qubit states, the tensor product produces every
          possible pairing of their components, multiplied together:
        </p>
        <p className="font-mono bg-surface border border-line rounded-lg p-4 text-center">
          |0⟩ ⊗ |0⟩ = |00⟩ &nbsp;&nbsp;&nbsp; |0⟩ ⊗ |1⟩ = |01⟩
        </p>
        <p>
          For a general superposition state combined with another, the
          tensor product distributes across every combination — meaning a
          system of n qubits requires 2ⁿ total numbers (amplitudes) to fully
          describe, exactly the exponential scaling discussed throughout
          this site.
        </p>

        <h2>Product states: when qubits remain independent</h2>
        <p>
          Some multi-qubit states can be written as a tensor product of
          individual single-qubit states — these are called{" "}
          <strong>product states</strong>. For example, if qubit A is in
          superposition and qubit B is definitely |0⟩, their combined state
          is just the tensor product of each qubit's individual state. In
          a product state, each qubit genuinely has its own independent,
          well-defined state.
        </p>

        <h2>Entangled states: when the math won't separate</h2>
        <p>
          Here's the crucial mathematical fact behind{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entanglement
          </Link>
          : not every valid multi-qubit state can be written as a tensor
          product of individual qubit states. The{" "}
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
            Bell state
          </Link>{" "}
          |Φ+⟩ = (1/√2)(|00⟩ + |11⟩) is the textbook example — no matter how
          you try, you cannot factor this state into "qubit A's state"
          tensor-producted with "qubit B's state" separately.
        </p>
        <p>
          This isn't a limitation of notation or imagination — it's a
          rigorous mathematical fact, and it's precisely what entanglement
          <em> means</em> at the mathematical level: a multi-qubit state
          that cannot be decomposed into independent individual qubit
          states.
        </p>

        <h2>How gates act on multi-qubit systems</h2>
        <p>
          Single-qubit gates, like the{" "}
          <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
            Hadamard gate
          </Link>
          , act on multi-qubit systems by being tensor-producted with the
          "identity" operation (which leaves a qubit unchanged) on every
          other qubit they're not directly acting on. Two-qubit gates, like
          the{" "}
          <Link href="/dictionary/cnot-gate" className="text-quantum hover:underline">
            CNOT gate
          </Link>
          , are themselves 4×4 matrices acting directly on the full
          combined two-qubit vector — and it's precisely this kind of
          genuinely two-qubit operation that's capable of creating
          entanglement from a product state.
        </p>

        <h2>Why this explains exponential scaling</h2>
        <p>
          The tensor product's exponential growth — 2ⁿ amplitudes for n
          qubits — is the actual mathematical root of both quantum
          computing's potential power and its central engineering
          challenge. It's why quantum computers can represent exponentially
          large state spaces with relatively few qubits (the source of
          their potential advantage), and also why simulating quantum
          systems classically becomes so expensive (Feynman's original
          motivating observation, discussed in our{" "}
          <Link href="/learn/quantum-simulation-deep-dive" className="text-quantum hover:underline">
            Quantum Simulation
          </Link>{" "}
          article).
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is the tensor product the same as regular multiplication?</h3>
        <p>
          No — the tensor product is a distinct mathematical operation that
          combines two smaller vectors (or matrices) into a larger one,
          preserving all possible combinations of their components, rather
          than producing a single combined number the way regular
          multiplication does.
        </p>
        <h3>Do I need to manually compute tensor products to use Qiskit or other frameworks?</h3>
        <p>
          No — as shown in our{" "}
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
            Your First Qiskit Circuit
          </Link>{" "}
          tutorial, frameworks handle this math automatically behind the
          scenes. Understanding tensor products helps you reason about{" "}
          <em>why</em> circuits behave the way they do, even though you
          won't typically compute them by hand in practice.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/entanglement" className="text-quantum hover:underline">→ Entanglement Explained</Link>
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">→ Bell State explained</Link>
          <Link href="/learn/quantum-complexity-theory" className="text-quantum hover:underline">→ Quantum Complexity Theory</Link>
        </div>
      </div>
    </article>
  );
}
