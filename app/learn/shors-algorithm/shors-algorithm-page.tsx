import Link from "next/link";

export const metadata = {
  title: "Shor's Algorithm Explained | QuantumAtlas",
  description:
    "What Shor's Algorithm does, how it works, and why it threatens widely-used encryption methods like RSA.",
};

export default function ShorsAlgorithmPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 3 · Algorithms
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Shor's Algorithm
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          In 1994, mathematician Peter Shor published an algorithm that, if
          run on a sufficiently powerful quantum computer, could find the
          prime factors of large numbers exponentially faster than any known
          classical algorithm. This single result is one of the main reasons
          quantum computing attracted serious attention from governments,
          industry, and the cryptography community.
        </p>

        <h2>The problem: factoring large numbers</h2>
        <p>
          Every whole number greater than 1 can be broken down into a unique
          set of prime numbers that multiply together to produce it — its{" "}
          <strong>prime factorization</strong>. For small numbers, this is
          easy: 15 = 3 × 5. But for very large numbers (hundreds of digits
          long), finding the prime factors becomes extraordinarily difficult
          for classical computers — the best known classical algorithms take
          time that grows roughly exponentially with the number of digits.
        </p>

        <h2>Why this matters: RSA encryption</h2>
        <p>
          The widely-used <strong>RSA encryption</strong> scheme — which
          underpins much of the security of the internet, from HTTPS websites
          to secure email — relies directly on the difficulty of factoring
          large numbers. RSA works by choosing two large prime numbers,
          multiplying them together to form a "public key," and keeping the
          original primes secret as the "private key." Anyone can use the
          public key to encrypt a message, but decrypting it without the
          private key requires factoring that large number — something that's
          computationally infeasible for classical computers when the numbers
          are large enough.
        </p>
        <p>
          Shor's Algorithm threatens this entire foundation: a large enough,
          error-corrected quantum computer running Shor's Algorithm could
          factor these numbers efficiently, recovering the private key and
          breaking the encryption.
        </p>

        <h2>How Shor's Algorithm works (high level)</h2>
        <p>
          Shor's Algorithm doesn't try to factor a number directly. Instead,
          it cleverly transforms factoring into a different problem — finding
          the <strong>period</strong> of a particular mathematical function —
          which a quantum computer can solve efficiently using a technique
          called the <strong>Quantum Fourier Transform (QFT)</strong>.
        </p>
        <p>The overall process looks like this:</p>
        <ul>
          <li>
            <strong>Step 1 — Classical setup.</strong> Pick a random number
            and use ordinary classical computation to set up a mathematical
            function related to the number you want to factor.
          </li>
          <li>
            <strong>Step 2 — Quantum period-finding.</strong> Use a quantum
            computer, with qubits in superposition and the Quantum Fourier
            Transform, to efficiently find the "period" of that function — a
            hidden repeating pattern that would take a classical computer an
            enormous amount of time to find by brute force.
          </li>
          <li>
            <strong>Step 3 — Classical follow-up.</strong> Use that period,
            together with simple classical arithmetic (specifically, the
            Euclidean algorithm for finding greatest common divisors), to
            compute the actual prime factors.
          </li>
        </ul>
        <p>
          The quantum part — period-finding via the Quantum Fourier Transform
          — is where the exponential speedup comes from. The QFT is itself
          built from a structured sequence of Hadamard and controlled-phase
          gates, applied to a "register" of qubits in superposition.
        </p>

        <h2>What it would take to actually break RSA</h2>
        <p>
          Despite the alarming implications, running Shor's Algorithm on
          cryptographically relevant numbers (thousands of bits long) is far
          beyond the capability of any quantum computer that exists today.
          Estimates for the number of high-quality,{" "}
          <strong>error-corrected logical qubits</strong> needed range into
          the thousands or millions, depending on the size of the number and
          the efficiency of the implementation — far more than the noisy,
          error-prone qubits available on current hardware.
        </p>
        <p>
          However, the threat is taken seriously precisely because encrypted
          data sent <em>today</em> could be recorded and decrypted later, once
          sufficiently powerful quantum computers exist — a concern often
          called "harvest now, decrypt later."
        </p>

        <h2>The response: post-quantum cryptography</h2>
        <p>
          In response to this long-term threat, cryptographers have developed{" "}
          <strong>post-quantum cryptography (PQC)</strong> — encryption
          methods based on mathematical problems believed to be hard even for
          quantum computers (such as certain problems involving mathematical
          lattices). Standards bodies have been working to standardize and
          gradually roll out these new algorithms across the internet's
          infrastructure, well ahead of when large-scale quantum computers are
          expected to become a practical threat.
        </p>

        <h2>What's next?</h2>
        <p>
          Shor's Algorithm is the headline-grabbing example of an exponential
          quantum speedup. Next, let's look at a different kind of algorithm —
          one with a more modest, but much more broadly applicable, speedup.
        </p>
        <p>
          <Link href="/learn/grovers-algorithm" className="text-quantum hover:underline">
            Continue to: Grover's Algorithm →
          </Link>
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Has Shor's Algorithm ever actually factored a meaningful number?</h3>
        <p>
          Small demonstrations have factored tiny numbers (like 15 or 21) on
          early quantum hardware, proving the algorithm works in principle.
          These demonstrations are far from the scale needed to threaten real
          encryption, which requires factoring numbers with hundreds of
          digits.
        </p>
        <h3>Should I be worried about my data being decrypted right now?</h3>
        <p>
          Not from Shor's Algorithm specifically — no existing quantum
          computer is anywhere close to being able to run it at a relevant
          scale. The main reason to care today is the long-term "harvest now,
          decrypt later" risk, which is why organizations are gradually
          adopting post-quantum cryptography standards.
        </p>
        <h3>Does Shor's Algorithm threaten all forms of encryption?</h3>
        <p>
          No. It specifically threatens encryption methods based on the
          difficulty of factoring large numbers (like RSA) or related
          mathematical problems (like certain discrete logarithm problems).
          Other types of cryptography, including the post-quantum methods
          mentioned above, are designed to resist it.
        </p>
      </div>
    </article>
  );
}
