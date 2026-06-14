import Link from "next/link";

export const metadata = {
  title: "What is Quantum Computing? | QuantumAtlas",
  description:
    "A plain-language introduction to quantum computing: what it is, how it differs from classical computing, and why it matters.",
};

export default function WhatIsQuantumComputingPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 1 · Foundations
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        What is Quantum Computing?
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Quantum computing is a new way of processing information that uses
          the rules of quantum mechanics — the physics that governs atoms,
          electrons, and photons — instead of the classical physics that
          governs everyday objects.
        </p>

        <p>
          Every computer you've used — your phone, laptop, or even a
          supercomputer — stores information as <strong>bits</strong>, tiny
          switches that are either off (0) or on (1). A quantum computer
          instead stores information in <strong>qubits</strong>, which can be
          0, 1, or — thanks to a property called superposition — a blend of
          both at the same time.
        </p>

        <h2>Why does that matter?</h2>
        <p>
          On its own, "a switch that can be in two states at once" doesn't
          sound useful. The real power comes when you combine many qubits
          together. With superposition and a related property called
          entanglement, a quantum computer can represent and manipulate an
          enormous number of possibilities simultaneously — growing
          exponentially with each qubit you add.
        </p>

        <p>
          For certain types of problems — especially ones involving searching
          through huge numbers of combinations, simulating molecules, or
          factoring very large numbers — this lets a quantum computer
          potentially find answers that would take a classical computer
          longer than the age of the universe.
        </p>

        <h2>What quantum computers are NOT</h2>
        <ul>
          <li>
            They are not simply "faster" laptops — most everyday tasks (browsing,
            writing documents, watching video) will always run better on
            classical computers.
          </li>
          <li>
            They won't replace your phone or laptop. They're specialized tools,
            similar to how a graphics card (GPU) handles certain tasks better
            than a general processor (CPU).
          </li>
          <li>
            They aren't "magic" — they still follow precise mathematical rules;
            those rules are just different from the ones classical computers
            follow.
          </li>
        </ul>

        <h2>A simple way to picture it</h2>
        <blockquote>
          Imagine you're looking for one specific page in a library with a
          billion books, but you can only check books one at a time. A
          classical computer checks book after book. A quantum computer, in a
          sense, can "look at" many books at once and use interference — a
          wave-like effect — to make the correct page stand out while the
          wrong ones fade away.
        </blockquote>

        <h2>Where quantum computing stands today</h2>
        <p>
          As of the mid-2020s, quantum computers exist and are accessible over
          the cloud, but they are still small and "noisy" — meaning errors
          creep in frequently. Researchers and companies are racing toward
          <strong> quantum advantage</strong>: the point where a quantum
          computer solves a genuinely useful, real-world problem faster than
          any classical computer or supercomputer could.
        </p>

        <h2>What's next?</h2>
        <p>
          Now that you have a high-level picture, the next step is
          understanding the basic unit of quantum information itself.
        </p>
        <p>
          <Link href="/learn/what-is-a-qubit" className="text-quantum hover:underline">
            Continue to: What is a Qubit? →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is quantum computing real, or still theoretical?</h3>
        <p>
          It's real. Functioning quantum computers exist today and can be
          accessed over the cloud. However, they are not yet powerful or
          reliable enough to outperform classical computers on most
          real-world problems.
        </p>
        <h3>Do I need to know advanced physics to understand quantum computing?</h3>
        <p>
          No. While the underlying physics is deep, the core ideas —
          superposition, entanglement, and how qubits are manipulated — can be
          understood with basic math and the analogies used throughout this
          Learning Center.
        </p>
      </div>
    </article>
  );
}
