import Link from "next/link";

export const metadata = {
  title: "What is a Qubit? | QuantumAtlas",
  description:
    "An in-depth, beginner-friendly explanation of qubits — the fundamental unit of quantum information.",
};

export default function WhatIsAQubitPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 1 · Foundations
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        What is a Qubit?
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          A <strong>qubit</strong> (short for "quantum bit") is the basic unit
          of information in a quantum computer — the quantum equivalent of the
          bit in classical computing. Understanding qubits is the first step
          to understanding everything else in quantum computing.
        </p>

        <h2>From bits to qubits</h2>
        <p>
          A classical bit is simple: it's either 0 or 1, full stop. You can
          think of it like a light switch — it's either off or on, and there's
          no in-between.
        </p>
        <p>
          A qubit can also be measured as a 0 or a 1 — but before it's
          measured, it can exist in a <strong>superposition</strong>: a
          combination of both 0 and 1 at the same time, with certain
          probabilities attached to each outcome.
        </p>

        <h2>The coin-flip analogy</h2>
        <blockquote>
          Picture a coin spinning in the air. While it's spinning, it isn't
          "heads" or "tails" — it's in a blend of both, with some likelihood of
          landing on each. Only when it lands (when it's "measured") does it
          become definitely heads or definitely tails. A qubit behaves
          similarly: while unmeasured, it holds a combination of 0 and 1; once
          measured, it collapses into one definite value.
        </blockquote>

        <h2>How is a qubit physically made?</h2>
        <p>
          A qubit isn't a "thing" in the way a transistor is — it's a property
          of a physical system that can be controlled and measured. Different
          companies use different physical systems to create qubits:
        </p>
        <ul>
          <li>
            <strong>Superconducting circuits</strong> — tiny loops of metal
            cooled to near absolute zero, used by IBM and Google
          </li>
          <li>
            <strong>Trapped ions</strong> — individual charged atoms controlled
            with lasers, used by IonQ
          </li>
          <li>
            <strong>Photons</strong> — particles of light, used in photonic
            quantum computing
          </li>
          <li>
            <strong>Neutral atoms</strong> — atoms held in place by laser
            "tweezers"
          </li>
        </ul>
        <p>
          Each approach has trade-offs in terms of stability, speed, and how
          easy it is to scale up to many qubits.
        </p>

        <h2>What can a single qubit do?</h2>
        <p>
          On its own, not much more than a classical bit — when measured, it
          still gives you just one bit of information (a 0 or a 1). The real
          power emerges when many qubits are combined and become{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entangled
          </Link>{" "}
          with each other, allowing a quantum computer to represent and process
          a huge number of combinations at once.
        </p>

        <h2>Visualizing a qubit: the Bloch sphere</h2>
        <p>
          Physicists often visualize a qubit's state as a point on the surface
          of a sphere, called a <strong>Bloch sphere</strong>. The North and
          South poles represent the pure states 0 and 1, while every other
          point on the sphere represents a different superposition. You'll see
          this sphere referenced throughout this site as a visual shorthand
          for "the state of a qubit."
        </p>

        <h2>What's next?</h2>
        <p>
          Now that you understand what a qubit is, let's directly compare it to
          a classical bit to make the differences crystal clear.
        </p>
        <p>
          <Link href="/learn/bit-vs-qubit" className="text-quantum hover:underline">
            Continue to: Difference Between Bit & Qubit →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Can a qubit store more than one bit of information?</h3>
        <p>
          A single qubit, when measured, still only yields one classical bit
          (0 or 1). However, before measurement, its state involves more
          information (the probabilities and "phase" of being 0 vs 1), which
          quantum algorithms exploit during computation — even though you can't
          directly "read out" extra bits from one qubit.
        </p>
        <h3>How long can a qubit maintain superposition?</h3>
        <p>
          This depends on the hardware, but typically only for a very short
          time — microseconds to milliseconds in most current systems — before
          interactions with the environment cause "decoherence." Extending this
          time is a major focus of quantum hardware research.
        </p>
      </div>
    </article>
  );
}
