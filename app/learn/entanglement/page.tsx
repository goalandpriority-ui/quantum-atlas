import Link from "next/link";
import EntanglementDiagram from "@/components/diagrams/EntanglementDiagram";
import QuantumCircuitDiagram from "@/components/diagrams/QuantumCircuitDiagram";

export const metadata = {
  title: "Entanglement Explained | QuantumAtlas",
  description:
    "A deep dive into quantum entanglement — what it is, how it's created, why Einstein called it 'spooky,' and how it powers quantum computing and cryptography.",
};

export default function EntanglementLearnPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 2 · Core Principles
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Entanglement
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Entanglement is, alongside superposition, one of the two pillars of
          quantum computing. While superposition lets a single qubit hold a
          blend of possibilities, entanglement links multiple qubits together
          so that their possibilities become correlated — in ways that have no
          classical equivalent.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <EntanglementDiagram />
        </div>

        <h2>The EPR paradox and Einstein's objection</h2>
        <p>
          In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen published
          a paper pointing out a strange consequence of quantum mechanics:
          two particles could be prepared so that measuring one instantly
          tells you the outcome of measuring the other, no matter how far
          apart they are. Einstein found this deeply troubling, famously
          calling it <strong>"spooky action at a distance."</strong> He
          believed quantum mechanics must be incomplete — that there had to be
          some "hidden variable" determining the outcomes in advance.
        </p>
        <p>
          For decades, this was a philosophical debate. Then in 1964, physicist
          John Bell devised a way to test it experimentally. Bell's theorem
          showed that if hidden variables existed, certain statistical
          correlations between measurements could never exceed a specific
          limit. Quantum mechanics predicted those correlations{" "}
          <em>would</em> exceed that limit. Experiments — repeated many times
          with increasing precision — have consistently confirmed the quantum
          prediction. Entanglement is real, and there are no simple "hidden
          variables" explaining it away.
        </p>

        <h2>What entanglement is NOT</h2>
        <ul>
          <li>
            <strong>It is not faster-than-light communication.</strong>{" "}
            Although measuring one entangled qubit instantly correlates with
            the other, you cannot use this to send a message. To compare
            results and notice the correlation, both parties still need to
            communicate through normal (slower-than-light) means.
          </li>
          <li>
            <strong>It is not "copying" information.</strong> A principle
            called the no-cloning theorem says you cannot create an identical
            copy of an unknown quantum state. Entanglement creates correlation,
            not duplication.
          </li>
          <li>
            <strong>It does not mean the particles are "communicating."</strong>{" "}
            There's no signal passing between them. The correlation was
            established when they became entangled, and it simply persists.
          </li>
        </ul>

        <h2>How entanglement is created</h2>
        <p>
          In a quantum computer, entanglement is typically created using a
          combination of a single-qubit gate (like the Hadamard gate, which
          creates superposition) followed by a two-qubit gate (like CNOT,
          which creates correlation based on another qubit's state).
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <QuantumCircuitDiagram />
        </div>

        <p>
          The circuit shown above produces what's called a{" "}
          <strong>Bell state</strong> — one of the simplest and most-studied
          entangled states. After this circuit runs, measuring either qubit
          will always give a result perfectly correlated with measuring the
          other: if qubit 0 is measured as 0, qubit 1 will also be 0; if qubit
          0 is measured as 1, qubit 1 will also be 1 — even though, before
          measurement, each individual qubit's outcome was completely random.
        </p>

        <h2>Real-world applications</h2>
        <h3>Quantum Key Distribution (QKD)</h3>
        <p>
          Entanglement enables protocols like quantum key distribution, where
          two parties can generate a shared secret encryption key in a way
          that reveals any eavesdropping attempt — because measuring an
          entangled system disturbs it in a detectable way.
        </p>
        <h3>Quantum Teleportation</h3>
        <p>
          "Quantum teleportation" doesn't move matter — it transfers the{" "}
          <em>state</em> of one qubit to another distant qubit, using
          entanglement plus a classical communication channel. This is a key
          building block for future quantum networks.
        </p>
        <h3>Quantum Algorithms</h3>
        <p>
          Many quantum algorithms rely on entangling qubits as an intermediate
          step — it's part of how quantum computers represent and manipulate
          correlations between different parts of a computation that would be
          expensive to represent classically.
        </p>

        <h2>What's next?</h2>
        <p>
          Now that you understand the two foundational phenomena —
          superposition and entanglement — the next step is understanding the{" "}
          <strong>gates</strong> used to create and manipulate them.
        </p>
        <p>
          <Link href="/learn/quantum-gates" className="text-quantum hover:underline">
            Continue to: Quantum Gates →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Can entanglement be broken?</h3>
        <p>
          Yes — interactions with the environment (a process called
          decoherence) can destroy entanglement. Keeping qubits entangled long
          enough to complete a computation is one of the major engineering
          challenges in building quantum computers.
        </p>
        <h3>How many qubits can be entangled at once?</h3>
        <p>
          In principle, any number — and creating large, stable entangled
          states (often called "GHZ states" for three or more qubits) is an
          active area of research, since it's both a useful resource and a
          benchmark of hardware quality.
        </p>
        <h3>Is entanglement the same as correlation in everyday life?</h3>
        <p>
          Not quite. Everyday correlations (like two gloves from the same
          pair, one left and one right) are determined in advance. Entangled
          particles have outcomes that are genuinely undetermined until
          measured, yet still end up correlated in ways that violate what's
          possible for any "determined in advance" explanation — as proven by
          Bell's theorem.
        </p>
      </div>
    </article>
  );
}
