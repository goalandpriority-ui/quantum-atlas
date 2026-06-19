import Link from "next/link";
import QuantumCircuitDiagram from "@/components/diagrams/QuantumCircuitDiagram";

export const metadata = {
  title: "Reading a Quantum Circuit Diagram | QuantumAtlas",
  description:
    "How to interpret the symbols, wires, and boxes in a quantum circuit diagram — a practical guide for anyone learning to read real quantum code and papers.",
};

export default function ReadingCircuitDiagramPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 6 · Practitioner's Corner
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Reading a Quantum Circuit Diagram
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Every quantum algorithm on this site — from{" "}
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
            Grover's Algorithm
          </Link>{" "}
          to{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>{" "}
          — is eventually expressed as a{" "}
          <Link href="/dictionary/quantum-circuit" className="text-quantum hover:underline">
            quantum circuit diagram
          </Link>
          . Once you know how to read one, you can follow along with
          research papers, Qiskit documentation, and academic talks far more
          confidently.
        </p>

        <h2>The basic anatomy</h2>
        <p>
          A quantum circuit diagram is read left to right, like a timeline.
          Each horizontal line represents one qubit, and time flows from
          left (the starting state) to right (the final measurement).
        </p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6 my-8 max-w-2xl">
        <QuantumCircuitDiagram />
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>Reading the wires</h2>
        <p>
          Each wire usually starts labeled with an initial state, most
          commonly |0⟩, since that's the standard starting point before any
          gates are applied. Some diagrams omit this label when it's
          obvious from context.
        </p>

        <h2>Single-qubit gate boxes</h2>
        <p>
          A labeled box on a single wire represents a single-qubit gate
          being applied at that point in time. The most common ones you'll
          see:
        </p>
        <ul>
          <li>
            <strong>H</strong> — the{" "}
            <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
              Hadamard gate
            </Link>
            , creating superposition
          </li>
          <li>
            <strong>X</strong> — the Pauli-X gate, flipping |0⟩ and |1⟩
            (see our{" "}
            <Link href="/dictionary/pauli-gates" className="text-quantum hover:underline">
              Pauli Gates entry
            </Link>
            )
          </li>
          <li>
            <strong>Z</strong> — the Pauli-Z gate, flipping the phase of |1⟩
          </li>
        </ul>

        <h2>Two-qubit gates: the vertical line</h2>
        <p>
          Two-qubit gates, like{" "}
          <Link href="/dictionary/cnot-gate" className="text-quantum hover:underline">
            CNOT
          </Link>
          , are drawn connecting two wires with a vertical line. CNOT
          specifically uses a filled dot (●) on the control qubit's wire and
          a circled plus symbol (⊕) on the target qubit's wire — visually
          showing which qubit "controls" the operation and which one gets
          acted upon.
        </p>
        <p>
          When you see this pattern, you're looking at the exact gate
          structure used to create the{" "}
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
            Bell states
          </Link>{" "}
          discussed throughout this site — a Hadamard gate followed by a
          CNOT gate is one of the most common two-gate sequences you'll
          encounter.
        </p>

        <h2>Measurement symbols</h2>
        <p>
          A measurement is typically drawn as a small meter-like icon (often
          resembling a gauge or dial) at the end of a wire, sometimes with a
          double line continuing afterward to represent the classical bit
          the result gets stored in — marking the transition from quantum
          information to a definite classical outcome, as discussed in our{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            Measurement Collapse
          </Link>{" "}
          entry.
        </p>

        <h2>Reading circuit depth visually</h2>
        <p>
          The number of distinct "columns" of gates you can identify in a
          diagram corresponds roughly to its{" "}
          <Link href="/dictionary/circuit-depth" className="text-quantum hover:underline">
            circuit depth
          </Link>
          — gates stacked in the same vertical column (acting on different
          qubits simultaneously) don't add to depth, while gates in
          different columns do.
        </p>

        <h2>Ancilla qubits in diagrams</h2>
        <p>
          When a circuit includes extra helper qubits — as in error
          correction syndrome measurement — these are typically drawn as
          additional wires, sometimes visually separated or labeled
          distinctly from the "data" qubits actually carrying the
          information you care about. See our{" "}
          <Link href="/dictionary/ancilla-qubit" className="text-quantum hover:underline">
            Ancilla Qubit entry
          </Link>{" "}
          for more on this role.
        </p>

        <h2>A practical tip: reading research paper circuits</h2>
        <p>
          When reading circuit diagrams in actual research papers — like
          those summarized in our{" "}
          <Link href="/research" className="text-quantum hover:underline">
            Research Papers section
          </Link>{" "}
          — pay close attention to the figure caption, since notation
          conventions vary slightly between papers and software frameworks.
          The core reading principles covered here (left-to-right time flow,
          dots and plus-circles for controlled gates, meter icons for
          measurement) remain consistent across nearly all sources, though.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Do all quantum circuit diagrams look exactly the same?</h3>
        <p>
          The core conventions (wires for qubits, boxes for gates, left to
          right time flow) are nearly universal, but specific symbol styles
          can vary slightly between Qiskit, Cirq, academic papers, and
          textbooks — similar to how different programming languages share
          common concepts but differ in exact syntax.
        </p>
        <h3>Why don't circuit diagrams show probabilities directly?</h3>
        <p>
          A circuit diagram describes the sequence of operations applied,
          not the resulting probabilities — you'd need to either run the
          circuit (as in our{" "}
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
            Your First Qiskit Circuit
          </Link>{" "}
          tutorial) or calculate the resulting state mathematically to see
          actual probabilities.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">→ Your First Qiskit Circuit</Link>
          <Link href="/dictionary/quantum-circuit" className="text-quantum hover:underline">→ Quantum Circuit explained</Link>
          <Link href="/tools" className="text-quantum hover:underline">→ Mini Quantum Circuit Builder tool</Link>
        </div>
      </div>
    </article>
  );
}
