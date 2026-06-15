import Link from "next/link";
import BitQubitCompareDiagram from "@/components/diagrams/BitQubitCompareDiagram";

export const metadata = {
  title: "Difference Between Bit & Qubit | QuantumAtlas",
  description:
    "A clear, side-by-side comparison of classical bits and quantum qubits.",
};

export default function BitVsQubitPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 1 · Foundations
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Difference Between Bit & Qubit
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Now that you've learned about bits and qubits separately, let's put
          them side by side. Understanding these differences is the key to
          understanding why quantum computers can do things classical
          computers cannot.
        </p>

        <h2>The core difference</h2>
        <p>
          A <strong>bit</strong> is always in exactly one of two states: 0 or
          1. A <strong>qubit</strong> can be 0, 1, or any combination
          (superposition) of both — described by probabilities — until it is
          measured.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <BitQubitCompareDiagram />
        </div>

        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Classical Bit</th>
              <th>Qubit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Possible states</td>
              <td>0 or 1</td>
              <td>0, 1, or a superposition of both</td>
            </tr>
            <tr>
              <td>Physical example</td>
              <td>Transistor (on/off)</td>
              <td>Superconducting circuit, trapped ion, photon</td>
            </tr>
            <tr>
              <td>Combining units</td>
              <td>n bits = 2ⁿ possible combinations, one at a time</td>
              <td>n qubits can represent all 2ⁿ combinations simultaneously via superposition</td>
            </tr>
            <tr>
              <td>Interaction between units</td>
              <td>Independent</td>
              <td>Can become entangled — linked regardless of distance</td>
            </tr>
            <tr>
              <td>Reading the value</td>
              <td>Always returns the stored value</td>
              <td>Measurement collapses superposition to a single 0 or 1</td>
            </tr>
            <tr>
              <td>Error sensitivity</td>
              <td>Extremely low — very stable</td>
              <td>Very high — sensitive to heat, vibration, electromagnetic noise</td>
            </tr>
            <tr>
              <td>Operating environment</td>
              <td>Room temperature</td>
              <td>Often near absolute zero or precisely controlled</td>
            </tr>
          </tbody>
        </table>

        <h2>Why exponential scaling matters</h2>
        <p>
          This is the single most important idea in this article. With{" "}
          <em>n</em> classical bits, you can represent one number out of 2ⁿ
          possibilities at a time — for example, 10 bits can represent any one
          number from 0 to 1023.
        </p>
        <p>
          With <em>n</em> qubits in superposition, a quantum computer can, in a
          meaningful mathematical sense, represent <strong>all</strong> 2ⁿ
          possibilities at once. 10 qubits represent a "superposition" across
          all 1024 combinations simultaneously. Add more qubits, and this
          number doubles each time — 20 qubits cover over a million
          combinations, 50 qubits cover over a quadrillion.
        </p>
        <p>
          The catch: you can't simply "read out" all of these possibilities —
          measurement gives you just one result. The art of quantum algorithm
          design is using interference to make the <em>correct</em> answer the
          most likely one to appear when you measure.
        </p>

        <h2>A note on "quantum supremacy" claims</h2>
        <p>
          You may have read headlines about a quantum computer with, say, 50 or
          100 qubits "outperforming" supercomputers. This exponential scaling
          is why — but it's important to understand that these early
          demonstrations were on specially chosen problems, not on the kinds of
          everyday tasks your computer does.
        </p>

        <h2>What's next?</h2>
        <p>
          You now understand the fundamental difference between classical and
          quantum information. Next, we'll explore the two phenomena that make
          quantum computing possible: superposition and entanglement, in
          depth.
        </p>
        <p>
          <Link href="/learn" className="text-quantum hover:underline">
            ← Back to Learning Center
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is a qubit "better" than a bit?</h3>
        <p>
          Not in a general sense — for everyday tasks like word processing or
          web browsing, bits and classical computers remain far more practical
          and efficient. Qubits offer advantages only for specific classes of
          problems.
        </p>
        <h3>Can quantum computers run regular software?</h3>
        <p>
          Not directly. Quantum computers run specialized quantum algorithms
          designed around qubits and quantum gates. In practice, quantum
          computers work alongside classical computers in hybrid systems,
          where the classical computer handles general tasks and offloads
          specific calculations to the quantum processor.
        </p>
      </div>
    </article>
  );
}
