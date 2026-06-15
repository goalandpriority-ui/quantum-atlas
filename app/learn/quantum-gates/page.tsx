import Link from "next/link";
import QuantumCircuitDiagram from "@/components/diagrams/QuantumCircuitDiagram";

export const metadata = {
  title: "Quantum Gates Explained | QuantumAtlas",
  description:
    "A deep dive into quantum gates — the operations used to manipulate qubits, including the Hadamard, Pauli, and CNOT gates, and how they form quantum circuits.",
};

export default function QuantumGatesPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 2 · Core Principles
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Gates
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          If qubits are the "memory" of a quantum computer, quantum gates are
          its "instructions." Just as classical computers combine simple logic
          gates (AND, OR, NOT) to build any program, quantum computers combine
          simple quantum gates to build any quantum algorithm.
        </p>

        <h2>What makes a quantum gate "quantum"?</h2>
        <p>
          A classical logic gate takes definite inputs (0s and 1s) and
          produces definite outputs. A quantum gate, by contrast, is a
          mathematical operation — represented by a matrix — that transforms
          a qubit's probability amplitudes. Applying a gate can create
          superposition, change the "phase" of a state, or entangle multiple
          qubits.
        </p>
        <p>
          Quantum gates have an important property that most classical gates
          don't: they are <strong>reversible</strong>. For every quantum gate,
          there's another gate that exactly undoes its effect. (Compare this
          to a classical AND gate — given the output, you can't always figure
          out the inputs.) This reversibility is a direct consequence of the
          underlying physics and has deep implications for how quantum
          algorithms and error correction are designed.
        </p>

        <h2>Single-qubit gates</h2>
        <h3>The Pauli-X Gate (Quantum NOT)</h3>
        <p>
          The Pauli-X gate is the quantum equivalent of a classical NOT gate —
          it flips |0⟩ to |1⟩ and |1⟩ to |0⟩. Unlike a classical NOT, it also
          correctly flips superposition states, swapping the roles of the two
          amplitudes.
        </p>
        <h3>The Pauli-Y and Pauli-Z Gates</h3>
        <p>
          These gates also flip or modify a qubit's state, but they operate
          differently on the "phase" of the state — the part of a probability
          amplitude that doesn't affect measurement probabilities directly,
          but does affect how the qubit interferes with other qubits later in
          a computation.
        </p>
        <h3>The Hadamard Gate (H)</h3>
        <p>
          The Hadamard gate is arguably the most important single-qubit gate
          in quantum computing. Applied to a qubit in the |0⟩ state, it
          creates an equal superposition of |0⟩ and |1⟩ — the qubit now has a
          50/50 chance of being measured as either value. Hadamard gates are
          often the very first operation in a quantum algorithm, "spreading
          out" the computation across all possible combinations before further
          gates shape the probabilities toward a useful answer.
        </p>

        <h2>Multi-qubit gates</h2>
        <h3>The CNOT Gate (Controlled-NOT)</h3>
        <p>
          The CNOT gate acts on two qubits: a "control" qubit and a "target"
          qubit. If the control qubit is |1⟩, the CNOT gate flips the target
          qubit (like an X gate); if the control qubit is |0⟩, the target is
          left unchanged. When the control qubit is in superposition, this
          creates <strong>entanglement</strong> between the two qubits — their
          fates become linked.
        </p>
        <h3>The Toffoli Gate (CCNOT)</h3>
        <p>
          The Toffoli gate extends this idea to three qubits: two control
          qubits and one target. The target is flipped only if{" "}
          <em>both</em> control qubits are |1⟩. The Toffoli gate is
          particularly notable because it's powerful enough, on its own, to
          implement any classical reversible computation — making it a bridge
          between classical and quantum logic.
        </p>

        <h2>Putting it together: quantum circuits</h2>
        <p>
          A <strong>quantum circuit</strong> is a sequence of gates applied to
          a set of qubits, usually drawn as horizontal lines (representing
          qubits over time) with boxes and symbols (representing gates) placed
          along them. Below is one of the simplest meaningful circuits: a
          Hadamard gate followed by a CNOT gate, which together create
          entanglement between two qubits starting from |0⟩.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <QuantumCircuitDiagram />
        </div>

        <p>
          Reading this circuit left to right: the Hadamard gate (H) puts the
          first qubit into a superposition of |0⟩ and |1⟩. Then the CNOT gate
          uses that first qubit as its control and the second qubit as its
          target — entangling them. The result is a <strong>Bell state</strong>,
          one of the building blocks of quantum information protocols.
        </p>

        <h2>Universal gate sets</h2>
        <p>
          A remarkable result in quantum computing is that a small set of
          gates — for example, the Hadamard gate plus a couple of
          phase-related gates and the CNOT gate — is enough to approximate{" "}
          <em>any</em> possible quantum operation, given enough applications.
          This is called a <strong>universal gate set</strong>, and it's the
          quantum analog of how classical computers can build any program from
          a handful of basic logic gates.
        </p>
        <p>
          In practice, different quantum hardware platforms have different
          "native" gates — the operations their physical qubits can directly
          perform. Software compilers translate the gates in an algorithm into
          sequences of native gates for a given machine, similar to how a
          compiler translates high-level code into a specific processor's
          instruction set.
        </p>

        <h2>What's next?</h2>
        <p>
          With superposition, entanglement, and gates under your belt, you
          have the core building blocks needed to understand how quantum{" "}
          <strong>algorithms</strong> are constructed — the topic of Level 3.
        </p>
        <p>
          <Link href="/learn" className="text-quantum hover:underline">
            ← Back to Learning Center
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Can quantum gates make mistakes?</h3>
        <p>
          Yes — in real hardware, gates aren't perfect. Each application of a
          gate has some probability of introducing a small error. This is one
          of the main reasons quantum error correction (covered in Level 4) is
          so important.
        </p>
        <h3>Are quantum gates the same as classical logic gates?</h3>
        <p>
          They serve an analogous role — building blocks for computation — but
          operate very differently. Quantum gates manipulate probability
          amplitudes and must be reversible, while classical gates manipulate
          definite bit values and often aren't reversible.
        </p>
        <h3>How many gates does a useful quantum algorithm need?</h3>
        <p>
          It varies enormously depending on the algorithm and problem size —
          from just a handful of gates for simple demonstrations to millions
          or more for algorithms like Shor's Algorithm at a scale that would
          threaten real-world encryption. Reducing the number of gates needed
          (and the errors they introduce) is a major focus of both algorithm
          design and hardware development.
        </p>
      </div>
    </article>
  );
}
