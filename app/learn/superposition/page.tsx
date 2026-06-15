import Link from "next/link";
import BlochSphereDiagram from "@/components/diagrams/BlochSphereDiagram";
import CoinSuperpositionDiagram from "@/components/diagrams/CoinSuperpositionDiagram";

export const metadata = {
  title: "Superposition Explained | QuantumAtlas",
  description:
    "A deep dive into quantum superposition — what it really means, how it's represented mathematically, and why it's the foundation of quantum computing.",
};

export default function SuperpositionPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 2 · Core Principles
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Superposition
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Superposition is the principle that gives quantum computing its
          name and its power. In Level 1, you saw the basic idea: a qubit can
          be 0, 1, or a blend of both. Here, we'll go deeper — what
          superposition actually represents mathematically, how it differs
          from ordinary uncertainty, and why it's the foundation everything
          else in quantum computing is built on.
        </p>

        <h2>Superposition is not "not knowing yet"</h2>
        <p>
          The most common misunderstanding about superposition is treating it
          like a hidden classical fact — as if the qubit "really is" a 0 or a
          1, and we simply haven't checked yet, like a coin already lying
          heads-up under a cup.
        </p>
        <p>
          That's not what's happening. Before measurement, a qubit in
          superposition doesn't have a definite value at all. It exists in a
          genuine combination of both possibilities, and this has been
          confirmed through decades of experiments — most famously through
          violations of "Bell inequalities," which rule out the idea that
          particles carry hidden, predetermined values.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <CoinSuperpositionDiagram />
        </div>

        <h2>The mathematics: probability amplitudes</h2>
        <p>
          A qubit's state is written as |ψ⟩ = α|0⟩ + β|1⟩, where α and β are
          called <strong>probability amplitudes</strong>. These are complex
          numbers, and the probability of measuring 0 is |α|², while the
          probability of measuring 1 is |β|². These probabilities must add up
          to 1 — the qubit has to be found in <em>some</em> state when
          measured.
        </p>
        <p>
          The fact that α and β are complex numbers (not just plain
          probabilities) is crucial. It means they have both a{" "}
          <strong>magnitude</strong> (how likely each outcome is) and a{" "}
          <strong>phase</strong> (a kind of "direction" in an abstract space).
          This phase is what enables <strong>interference</strong> — the
          effect that lets quantum algorithms cancel out wrong answers and
          amplify right ones.
        </p>

        <div className="rounded-xl border border-line bg-surface p-6 my-8">
          <BlochSphereDiagram />
        </div>

        <h2>Superposition vs. classical probability</h2>
        <p>
          Classical probability also deals with "I don't know which one, but
          here are the odds" — so what's actually different?
        </p>
        <p>
          The key difference is <strong>interference</strong>. If you flip two
          classical coins and ask "what's the probability both land heads,"
          you simply multiply probabilities — there's no way for one
          possibility to "cancel out" another. But with quantum amplitudes,
          two paths to the same outcome can have phases that cancel each other
          out entirely, making that outcome <em>impossible</em>, even though
          each path individually had a nonzero probability.
        </p>
        <p>
          This is the effect demonstrated by the famous{" "}
          <strong>double-slit experiment</strong>: particles sent through two
          slits create an interference pattern on a screen, as if each
          particle traveled through both slits at once and interfered with
          itself. Quantum algorithms exploit this same effect — not with
          particles and slits, but with qubits and gates — to make correct
          answers more likely and incorrect ones less likely.
        </p>

        <h2>Measurement: the collapse</h2>
        <p>
          When you measure a qubit, its superposition "collapses" — it
          settles into one definite outcome (0 or 1), with a probability
          determined by its amplitudes. After measurement, the superposition
          is gone; the qubit now behaves like a classical bit holding that
          result.
        </p>
        <p>
          This is why quantum algorithms are carefully designed sequences of
          operations performed <em>before</em> measurement. Once you measure,
          you only get to see one outcome — so the goal of a good quantum
          algorithm is to arrange the amplitudes so that, by the time you
          measure, the correct answer has a very high probability of being the
          one you observe.
        </p>

        <h2>Superposition with many qubits</h2>
        <p>
          The real power of superposition emerges when you have multiple
          qubits. A single qubit in superposition is a blend of 2 states (0
          and 1). Two qubits in superposition can represent a blend of all 4
          combinations (00, 01, 10, 11). With <em>n</em> qubits, a quantum
          computer can represent a superposition across all 2ⁿ possible
          combinations simultaneously.
        </p>
        <p>
          This exponential scaling is why even modest numbers of qubits
          represent enormous amounts of "computational space" — though, as
          discussed in Level 1, you can't directly read out all of this
          information; algorithms must be designed to extract a useful answer
          through interference.
        </p>

        <h2>What's next?</h2>
        <p>
          Superposition by itself is powerful, but it becomes even more
          interesting when multiple qubits become correlated with each other
          — a phenomenon called entanglement.
        </p>
        <p>
          <Link href="/learn/entanglement" className="text-quantum hover:underline">
            Continue to: Entanglement →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is superposition the same as a particle being in "two places at once"?</h3>
        <p>
          That's a common simplification, but it's more precise to say a
          quantum system exists in a combination of distinguishable states —
          which could be positions, but for a qubit usually refers to the
          abstract 0 and 1 states, not physical locations.
        </p>
        <h3>Can superposition be observed directly?</h3>
        <p>
          Not directly — any measurement collapses it. However, its effects
          can be observed indirectly through interference patterns, like in
          the double-slit experiment, or through statistical patterns across
          many repeated experiments.
        </p>
        <h3>How is superposition different from a classical wave?</h3>
        <p>
          Classical waves (like sound or water waves) can also overlap and
          interfere. The key quantum difference is that a single particle or
          qubit behaves as if it's a wave of <em>possibilities</em> — and when
          measured, the entire wave collapses to one outcome, which has no
          classical analog.
        </p>
      </div>
    </article>
  );
}
