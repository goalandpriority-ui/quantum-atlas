import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Telecommunications | QuantumAtlas",
  description:
    "How quantum computing applies to secure communication, network optimization, and the future quantum internet — current state and realistic timelines.",
};

export default function TelecommunicationsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Telecommunications
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Telecommunications carriers sit at an interesting intersection of
        quantum computing's two most mature application areas — secure
        communication and network optimization — while also being the
        likely infrastructure backbone for any future quantum internet.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Quantum-secure communications</h2>
        <p>
          As covered in depth in our{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            Quantum for Cybersecurity
          </Link>{" "}
          coverage, telecom networks carry enormous amounts of sensitive
          data secured by encryption that could eventually be vulnerable to
          quantum attacks.
        </p>
        <p>
          <strong>Current reality:</strong> Several major telecom carriers
          have run pilot deployments of{" "}
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">
            quantum key distribution
          </Link>{" "}
          over fiber optic networks, and most are actively planning
          migration to{" "}
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            post-quantum cryptography
          </Link>{" "}
          standards for their core infrastructure — among the more concrete,
          actionable quantum-related activities in the telecom sector today.
        </p>

        <h2>Network optimization</h2>
        <p>
          Routing traffic efficiently across a telecom network — balancing
          load, minimizing latency, and managing limited bandwidth — is a
          large-scale optimization problem similar in structure to those
          discussed in our{" "}
          <Link href="/industries/logistics" className="text-quantum hover:underline">
            Logistics
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> A handful of carriers have
          explored quantum and quantum-inspired optimization for network
          routing problems in research pilots, but classical network
          optimization software remains the production standard, following
          the same pattern seen in logistics and energy grid optimization.
        </p>

        <h2>Building toward a quantum internet</h2>
        <p>
          As discussed in our{" "}
          <Link href="/future" className="text-quantum hover:underline">
            Quantum Future Predictions
          </Link>{" "}
          coverage, a future quantum internet would distribute entanglement
          across long distances, enabling provably secure communication and
          networked quantum computing.
        </p>
        <p>
          <strong>Current reality:</strong> Telecom infrastructure — existing
          fiber optic networks, in particular — is the most likely backbone
          for any future quantum internet, and some carriers have
          participated in early quantum network testbeds in partnership with
          research institutions. A continent-spanning quantum internet
          remains a multi-decade prospect, dependent on quantum repeater
          technology that doesn't yet exist at scale.
        </p>

        <h2>Quantum random number generation</h2>
        <p>
          One of the more immediately practical quantum technologies in
          telecom is quantum random number generation — using genuine
          quantum randomness (rather than classical pseudo-randomness) to
          strengthen encryption keys.
        </p>
        <p>
          <strong>Current reality:</strong> Quantum random number generators
          are already commercially available and deployed today by several
          telecom and security companies — one of the few quantum
          technologies in this industry overview that's in genuine,
          mainstream production use rather than pilot stage.
        </p>

        <h2>Who's actively working on this</h2>
        <p>
          Major telecom carriers worldwide have established quantum research
          partnerships, often focused on QKD pilots and post-quantum
          cryptography migration planning, working with quantum hardware and
          cryptography providers.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Post-quantum cryptography migration and quantum random number
          generation are happening now. Quantum key distribution pilots will
          likely continue expanding gradually over the next several years.
          A true quantum internet, by contrast, remains a long-term
          prospect, likely a decade or more away even for early metropolitan
          deployments.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Will quantum computers replace classical telecom infrastructure?</h3>
        <p>
          No — a quantum internet would be a complementary network for
          specific quantum applications (distributing entanglement, secure
          key exchange), running alongside, not replacing, the classical
          internet that handles ordinary data traffic.
        </p>
        <h3>Is quantum-secure communication already available to consumers?</h3>
        <p>
          Not directly to individual consumers yet — current QKD deployments
          are focused on carrier-to-carrier and enterprise links. Most
          consumer-facing quantum security benefits will come indirectly,
          through post-quantum cryptography being built into standard
          internet protocols.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
          <Link href="/industries/aerospace-defense" className="text-quantum hover:underline">→ Quantum for Aerospace & Defense</Link>
          <Link href="/future" className="text-quantum hover:underline">→ Quantum Future Predictions</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
