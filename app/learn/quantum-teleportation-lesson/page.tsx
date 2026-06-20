import Link from "next/link";

export const metadata = {
  title: "Quantum Teleportation: A Complete Lesson | QuantumAtlas",
  description:
    "A full, step-by-step lesson on how quantum teleportation actually works, what it transmits, and what it definitely does not do.",
};

export default function QuantumTeleportationLessonPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 7 · Capstone Topics
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Teleportation: A Complete Lesson
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Our{" "}
          <Link href="/algorithms/quantum-teleportation-protocol" className="text-quantum hover:underline">
            Quantum Teleportation Protocol
          </Link>{" "}
          entry in the Algorithms Database gives a concise summary. This
          lesson walks through the protocol step by step, building on
          concepts from earlier in the Learning Center, so you understand
          not just what it does but exactly how and why it works.
        </p>

        <h2>The problem teleportation solves</h2>
        <p>
          Suppose Alice has a qubit in some unknown quantum state and wants
          to send that exact state to Bob, who is far away. She can't just
          measure her qubit and tell Bob the result over the phone — as
          covered in our{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            Measurement Collapse
          </Link>{" "}
          entry, measuring would destroy the very superposition she's trying
          to send. She also can't simply make a copy to send, since the{" "}
          <Link href="/dictionary/no-cloning-theorem" className="text-quantum hover:underline">
            no-cloning theorem
          </Link>{" "}
          forbids it. Teleportation is the clever protocol that solves this
          puzzle.
        </p>

        <h2>Step 1: Alice and Bob share an entangled pair, in advance</h2>
        <p>
          Before teleportation can happen, Alice and Bob must each hold one
          qubit from a shared{" "}
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
            Bell state
          </Link>
          , prepared and distributed ahead of time — perhaps using the{" "}
          <Link href="/learn/quantum-networking-fundamentals" className="text-quantum hover:underline">
            quantum networking
          </Link>{" "}
          infrastructure discussed elsewhere in this Learning Center. This
          shared entanglement is the essential resource the entire protocol
          depends on.
        </p>

        <h2>Step 2: Alice entangles her message qubit with her half of the pair</h2>
        <p>
          Alice now has two qubits: the one she wants to send (call it Q,
          in an unknown state), and her half of the shared entangled pair.
          She applies a{" "}
          <Link href="/dictionary/cnot-gate" className="text-quantum hover:underline">
            CNOT gate
          </Link>{" "}
          (with Q as control) followed by a{" "}
          <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
            Hadamard gate
          </Link>{" "}
          on Q. This entangles all three qubits together — Q, Alice's half
          of the pair, and Bob's half of the pair — in a specific,
          mathematically predictable way.
        </p>

        <h2>Step 3: Alice measures her two qubits</h2>
        <p>
          Alice measures both of her qubits (Q and her half of the
          entangled pair), getting one of four possible classical
          outcomes: 00, 01, 10, or 11. This measurement, following our{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            Measurement Collapse
          </Link>{" "}
          entry, destroys Alice's original qubit's state completely — but,
          crucially, it leaves Bob's qubit in a state directly related to
          the original unknown state Alice wanted to send.
        </p>

        <h2>Step 4: Alice sends her measurement result classically</h2>
        <p>
          Alice sends her two classical measurement bits to Bob through an
          ordinary classical communication channel — a phone call, an
          email, anything works, as long as it's no faster than the speed
          of light. This step is essential, and it's the reason
          teleportation cannot transmit information faster than light,
          despite using entanglement.
        </p>

        <h2>Step 5: Bob applies a correction based on Alice's message</h2>
        <p>
          Depending on which of the four possible results Alice obtained,
          Bob applies one of four specific gate operations (some
          combination of the{" "}
          <Link href="/dictionary/pauli-gates" className="text-quantum hover:underline">
            Pauli X and Z gates
          </Link>
          ) to his qubit. After this correction, Bob's qubit is now in
          <em> exactly</em> the same state Alice's original qubit Q was in
          — the teleportation is complete.
        </p>

        <h2>What was actually transmitted?</h2>
        <p>
          This is the most important conceptual point in the entire lesson:
          no physical particle traveled from Alice to Bob. What was
          transmitted was <strong>quantum information</strong> — the
          specific state Q was in — reconstructed on a completely different
          physical qubit (Bob's half of the entangled pair) at the
          destination. Alice's original qubit Q no longer holds that state
          after the protocol; its information has been "moved," not copied,
          fully consistent with the no-cloning theorem.
        </p>

        <h2>Why this isn't faster-than-light communication</h2>
        <p>
          Bob's qubit instantly takes on a state correlated with Alice's
          measurement the moment she measures — but Bob has no way to know
          what state his qubit is actually in until he receives Alice's
          classical message (step 4) telling him which correction to apply.
          Without that classical information, his qubit just looks like
          random noise to him. This is the same fundamental limitation
          discussed in our{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            Entanglement
          </Link>{" "}
          dictionary entry — entanglement alone never allows information
          to be sent faster than light.
        </p>

        <h2>Why teleportation matters despite this limitation</h2>
        <p>
          Even though it's not faster than light, teleportation is hugely
          significant: it's the foundational protocol underlying the{" "}
          <Link href="/learn/quantum-networking-fundamentals" className="text-quantum hover:underline">
            quantum internet
          </Link>{" "}
          vision, allows quantum information to be moved between physically
          different quantum computing systems, and has been experimentally
          demonstrated over increasing distances, including via satellite.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Could this ever be used to teleport physical objects, like in science fiction?</h3>
        <p>
          No — quantum teleportation moves quantum <em>information</em>
          (a state), not matter or energy. Even teleporting a single
          particle's full quantum state requires an existing identical
          particle at the destination to receive that state; there's no
          mechanism here for transporting physical material itself.
        </p>
        <h3>Does Bob need to do anything special to receive the teleported state?</h3>
        <p>
          Bob simply needs to hold onto his half of the originally shared
          entangled pair until Alice's classical message arrives, then
          apply the specific correction gate her message indicates — a
          mechanical, well-defined final step once the classical
          information is received.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/quantum-teleportation-protocol" className="text-quantum hover:underline">→ Quantum Teleportation Protocol (Algorithms DB)</Link>
          <Link href="/learn/quantum-cryptography-lesson" className="text-quantum hover:underline">→ Quantum Cryptography: A Complete Lesson</Link>
          <Link href="/learn/quantum-networking-fundamentals" className="text-quantum hover:underline">→ Quantum Networking Fundamentals</Link>
        </div>
      </div>
    </article>
  );
}
