import Link from "next/link";

export const metadata = {
  title: "Quantum Cryptography: A Complete Lesson | QuantumAtlas",
  description:
    "A complete lesson on BB84, E91, and how quantum mechanics enables provably secure communication — from first principles.",
};

export default function QuantumCryptographyLessonPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 7 · Capstone Topics
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Cryptography: A Complete Lesson
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          This site discusses quantum cryptography in several places — our{" "}
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">
            BB84
          </Link>{" "}
          and{" "}
          <Link href="/algorithms/e91-protocol" className="text-quantum hover:underline">
            E91
          </Link>{" "}
          entries, and the{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            Cybersecurity industry page
          </Link>
          . This lesson ties those pieces together into one structured
          walkthrough of how quantum mechanics enables a fundamentally new
          kind of secure communication.
        </p>

        <h2>The classical cryptography problem</h2>
        <p>
          Secure communication generally relies on both parties sharing a
          secret key, used to encrypt and decrypt messages. The hard
          problem is: how do you establish that shared secret key in the
          first place, especially if you've never met in person and an
          eavesdropper might be listening to every message you exchange?
        </p>
        <p>
          Classical solutions (like the encryption discussed in our{" "}
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            Post-Quantum Cryptography
          </Link>{" "}
          entry) rely on mathematical problems believed to be hard to
          solve. Quantum key distribution takes a completely different
          approach: using physics itself to guarantee security, rather than
          assumed mathematical difficulty.
        </p>

        <h2>The core insight: measurement disturbs quantum states</h2>
        <p>
          The entire foundation of quantum cryptography rests on one fact
          covered in our{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            Measurement Collapse
          </Link>{" "}
          entry: measuring a qubit in the "wrong" basis disturbs its state
          in a detectable way. If you encode information in quantum states
          and someone tries to secretly intercept and measure them, that
          interception leaves a detectable trace.
        </p>

        <h2>Walking through BB84, step by step</h2>
        <p>
          <strong>Step 1 — Alice prepares qubits:</strong> Alice wants to
          send Bob a string of random bits that will become their shared
          secret key. For each bit, she randomly chooses one of two
          measurement "bases" (think of these as two different ways of
          encoding 0 and 1 using qubit states) and encodes her bit value
          using a qubit prepared in that basis.
        </p>
        <p>
          <strong>Step 2 — Bob measures, also choosing randomly:</strong>{" "}
          For each incoming qubit, Bob independently and randomly chooses
          which basis to measure in — he doesn't yet know which basis
          Alice used for each qubit.
        </p>
        <p>
          <strong>Step 3 — Basis reconciliation:</strong> After all qubits
          are sent and measured, Alice and Bob publicly compare (over an
          ordinary, even insecure, classical channel) which basis they each
          used for every qubit — but not the actual bit values themselves.
          They keep only the results where they happened to use the same
          basis, discarding the rest. On average, this keeps about half of
          the original bits.
        </p>
        <p>
          <strong>Step 4 — Eavesdropping detection:</strong> Alice and Bob
          publicly compare a small random sample of their remaining,
          matching-basis bits. If no eavesdropper was present, these should
          match perfectly. If someone (often called "Eve" in cryptography
          examples) intercepted and measured qubits along the way, her
          measurements would have disturbed some states, introducing
          detectable errors in this comparison.
        </p>
        <p>
          <strong>Step 5 — Final key:</strong> If the error rate in the
          sampled bits is below an acceptable threshold, Alice and Bob
          discard the sampled bits (since they've now been revealed
          publicly) and use the remaining matching-basis bits as their
          shared secret key.
        </p>

        <h2>How E91 takes a different mathematical route to the same goal</h2>
        <p>
          As covered in our{" "}
          <Link href="/algorithms/e91-protocol" className="text-quantum hover:underline">
            E91 Protocol
          </Link>{" "}
          entry, this alternative approach uses entangled particle pairs and
          Bell inequality violations as its security foundation instead of
          BB84's single-photon, basis-comparison approach. Rather than
          detecting eavesdropping through basis mismatches, E91 detects it
          through statistical violations of Bell inequalities — connecting
          quantum cryptography directly to the foundational tests of
          quantum mechanics discussed in our{" "}
          <Link href="/timeline" className="text-quantum hover:underline">
            Timeline
          </Link>
          .
        </p>

        <h2>What makes this security "provable" rather than "assumed"</h2>
        <p>
          The crucial distinction from classical cryptography: BB84 and
          E91's security doesn't rely on an eavesdropper lacking sufficient
          computing power (the assumption behind RSA-style classical
          cryptography, threatened by{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>
          ). It relies on the laws of quantum mechanics itself — an
          eavesdropper with literally unlimited computing power, even a
          hypothetical future quantum computer, still cannot measure
          quantum states without leaving a detectable trace.
        </p>

        <h2>Practical limitations</h2>
        <p>
          As discussed in our{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            Cybersecurity industry coverage
          </Link>
          , quantum key distribution requires specialized hardware and
          (typically) dedicated fiber optic infrastructure, limiting it to
          high-security applications rather than everyday internet use.
          This is why{" "}
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            post-quantum cryptography
          </Link>{" "}
          — a classical, software-based approach — is the more practical
          near-term defense for most organizations, even though it relies
          on mathematical rather than physical security guarantees.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Can an eavesdropper ever successfully intercept a quantum-cryptography-protected message without detection?</h3>
        <p>
          In the idealized protocol, no — any interception attempt
          introduces a statistically detectable disturbance. In practice,
          real-world implementations must carefully guard against more
          subtle attacks exploiting imperfections in physical hardware,
          which is why ongoing protocol refinements like the six-state
          protocol exist.
        </p>
        <h3>Does quantum cryptography encrypt the actual message content?</h3>
        <p>
          Not directly — quantum key distribution protocols like BB84 and
          E91 establish a shared secret key. That key is then used with a
          classical encryption algorithm to actually encrypt and decrypt
          the message content itself.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">→ BB84 Protocol (Algorithms DB)</Link>
          <Link href="/algorithms/e91-protocol" className="text-quantum hover:underline">→ E91 Protocol (Algorithms DB)</Link>
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
        </div>
      </div>
    </article>
  );
}
