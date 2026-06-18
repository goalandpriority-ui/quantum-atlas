import Link from "next/link";
import QuantumNetworkDiagram from "@/components/diagrams/QuantumNetworkDiagram";

export const metadata = {
  title: "Quantum Networking Fundamentals Explained | QuantumAtlas",
  description:
    "The building blocks of a future quantum internet — entanglement distribution, quantum repeaters, and what actually needs to be built before this vision becomes reality.",
};

export default function QuantumNetworkingFundamentalsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 5 · Advanced Topics
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Quantum Networking Fundamentals
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Our{" "}
          <Link href="/future" className="text-quantum hover:underline">
            Future Predictions
          </Link>{" "}
          page introduces the idea of a quantum internet at a high level.
          This article goes one level deeper into the actual technical
          building blocks involved — entanglement distribution, the role of
          quantum repeaters, and the specific engineering challenges that
          separate today's small-scale demonstrations from a genuinely
          useful, large-scale quantum network.
        </p>

        <h2>What a quantum network actually transmits</h2>
        <p>
          A classical network transmits bits — definite 0s and 1s. A
          quantum network's defining purpose is different: distributing{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entanglement
          </Link>{" "}
          between distant locations, creating shared quantum correlations
          that can then be used for tasks like{" "}
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">
            quantum key distribution
          </Link>{" "}
          or{" "}
          <Link href="/algorithms/quantum-teleportation-protocol" className="text-quantum hover:underline">
            quantum teleportation
          </Link>
          .
        </p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6 my-8 max-w-2xl">
        <QuantumNetworkDiagram />
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>The fundamental distance problem</h2>
        <p>
          Entangled photons sent through fiber optic cables gradually lose
          fidelity over distance, due to photon loss and decoherence in the
          fiber itself. Classical networks solve an analogous signal-loss
          problem using repeaters that simply amplify the signal. But the{" "}
          <Link href="/dictionary/no-cloning-theorem" className="text-quantum hover:underline">
            no-cloning theorem
          </Link>{" "}
          means you can't just "copy and amplify" quantum information the
          same way — a fundamentally different solution is needed.
        </p>

        <h2>Quantum repeaters and entanglement swapping</h2>
        <p>
          <Link href="/dictionary/quantum-repeater" className="text-quantum hover:underline">
            Quantum repeaters
          </Link>{" "}
          solve the distance problem using a technique called{" "}
          <strong>entanglement swapping</strong>: instead of trying to send
          one entangled pair across the entire distance, the network
          establishes entanglement across several shorter segments, then
          uses entanglement swapping operations to "stitch" these shorter
          entangled links into one long-distance entangled connection —
          all without ever directly measuring (and thus destroying) the
          underlying quantum information.
        </p>
        <p>
          As covered in our{" "}
          <Link href="/research/quantum-repeater-prototype-demonstration" className="text-quantum hover:underline">
            Research Papers section
          </Link>
          , early quantum repeater prototypes have already demonstrated
          extending entanglement distribution over standard telecom fiber —
          genuine, if still early-stage, progress toward this vision.
        </p>

        <h2>Quantum memory: the other missing piece</h2>
        <p>
          Quantum repeaters also generally require <strong>quantum
          memory</strong> — the ability to store an entangled quantum state
          for a meaningful amount of time while waiting for entanglement to
          be established across other segments of the network. Building
          quantum memory with long enough storage times, and high enough
          fidelity, remains an active hardware research challenge distinct
          from (though related to) the{" "}
          <Link href="/dictionary/coherence-time" className="text-quantum hover:underline">
            coherence time
          </Link>{" "}
          challenges discussed throughout our Hardware Database.
        </p>

        <h2>Satellite-based quantum networking</h2>
        <p>
          An alternative approach to ground-based fiber, discussed in our{" "}
          <Link href="/future" className="text-quantum hover:underline">
            Future Predictions
          </Link>{" "}
          page, uses satellites to distribute entangled photons over very
          long distances through the vacuum of space, where photon loss
          behaves differently than in fiber. China's Micius satellite has
          already demonstrated intercontinental entanglement distribution
          this way, suggesting a hybrid satellite-and-fiber approach may be
          the most practical path to a global-scale quantum network.
        </p>

        <h2>What you could actually do with a working quantum network</h2>
        <p>
          Beyond the secure communication applications covered in our{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            Cybersecurity
          </Link>{" "}
          and{" "}
          <Link href="/industries/telecommunications" className="text-quantum hover:underline">
            Telecommunications
          </Link>{" "}
          industry pages, a mature quantum network could eventually enable{" "}
          <strong>distributed quantum computing</strong> — networking
          multiple smaller quantum computers together to collectively
          tackle problems too large for any single machine, and{" "}
          <strong>quantum-enhanced sensor networks</strong> for
          ultra-precise distributed measurement and timekeeping.
        </p>

        <h2>Realistic expectations</h2>
        <p>
          Metropolitan-scale quantum networks for specific use cases (like
          bank-to-bank quantum key distribution links) are achievable with
          current or near-term technology. A continental or global-scale
          quantum internet, by contrast, remains a multi-decade engineering
          challenge, fundamentally gated by quantum repeater and quantum
          memory technology that doesn't yet exist at the scale and quality
          required.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Will the quantum internet replace the regular internet?</h3>
        <p>
          No — a quantum network would be a specialized, complementary
          network running alongside the classical internet, used for
          specific quantum applications like secure key distribution and
          distributed quantum computing, not for general web browsing or
          everyday data transfer.
        </p>
        <h3>What's the single biggest technical blocker to a global quantum internet?</h3>
        <p>
          Most researchers point to quantum repeaters — and specifically,
          building quantum memory components reliable and long-lived enough
          to support the entanglement swapping process across long
          distances — as the central missing piece.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/dictionary/quantum-repeater" className="text-quantum hover:underline">→ Quantum Repeater explained</Link>
          <Link href="/future" className="text-quantum hover:underline">→ Future Predictions — Quantum Internet</Link>
          <Link href="/industries/telecommunications" className="text-quantum hover:underline">→ Quantum for Telecommunications</Link>
        </div>
      </div>
    </article>
  );
}

