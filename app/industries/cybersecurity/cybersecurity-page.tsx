import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Cybersecurity | QuantumAtlas",
  description:
    "How quantum computing affects cybersecurity through post-quantum cryptography and quantum key distribution — current deployment status and what to do now.",
};

export default function CybersecurityPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Active Deployment
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Cybersecurity
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Cybersecurity is the most mature quantum-related industry
        application today — not because quantum computers are breaking
        encryption yet, but because the defensive response to that future
        threat is already being actively deployed.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>The threat: Shor's Algorithm and RSA</h2>
        <p>
          As covered in depth in our{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>{" "}
          article, a sufficiently powerful, error-corrected quantum computer
          could factor the large numbers underlying RSA encryption —
          breaking one of the most widely used cryptographic systems
          protecting internet communications today.
        </p>
        <p>
          <strong>Current reality:</strong> No existing quantum computer is
          anywhere close to large enough or reliable enough to do this. The
          concern is forward-looking: encrypted data intercepted and stored
          <em> today</em> could potentially be decrypted once sufficiently
          powerful quantum computers exist — commonly called "harvest now,
          decrypt later."
        </p>

        <h2>The response: post-quantum cryptography</h2>
        <p>
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            Post-quantum cryptography (PQC)
          </Link>{" "}
          refers to classical encryption algorithms specifically designed
          to resist attacks from quantum computers, based on mathematical
          problems believed to remain hard even for quantum algorithms.
        </p>
        <p>
          <strong>Current reality:</strong> This is genuinely active
          deployment, not speculation. NIST finalized its first post-quantum
          cryptography standards in 2024 (including CRYSTALS-Kyber and
          CRYSTALS-Dilithium), and organizations — particularly in
          government, finance, and critical infrastructure — are actively
          migrating systems to these new standards today.
        </p>

        <h2>Quantum key distribution (QKD)</h2>
        <p>
          Unlike post-quantum cryptography (which is classical math designed
          to resist quantum attacks), quantum key distribution uses actual
          quantum mechanics to detect eavesdropping. Protocols like{" "}
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">
            BB84
          </Link>{" "}
          and{" "}
          <Link href="/algorithms/e91-protocol" className="text-quantum hover:underline">
            E91
          </Link>{" "}
          allow two parties to generate a shared secret key whose security
          is guaranteed by the laws of physics rather than computational
          difficulty.
        </p>
        <p>
          <strong>Current reality:</strong> QKD is commercially available
          today for specific high-security applications — government
          communications, certain financial transactions, and critical
          infrastructure links — though the specialized hardware (and often
          dedicated fiber optic infrastructure) makes it impractical for
          mainstream, everyday use.
        </p>

        <h2>What organizations should actually do now</h2>
        <p>
          This is one of the few areas in this site's industry coverage
          where there's a clear, actionable recommendation rather than just
          "wait and see":
        </p>
        <ul>
          <li>
            <strong>Inventory cryptographic assets.</strong> Identify which
            systems use RSA or other quantum-vulnerable encryption, and
            assess how sensitive the protected data is and for how long it
            needs to remain secure.
          </li>
          <li>
            <strong>Plan migration to post-quantum standards.</strong>{" "}
            Especially for data with long confidentiality requirements
            (government secrets, medical records, intellectual property),
            organizations are advised to begin transitioning to NIST's
            post-quantum algorithms well before quantum computers become a
            practical threat.
          </li>
          <li>
            <strong>Evaluate QKD only for specific high-value use cases.</strong>{" "}
            Given its infrastructure requirements, QKD is generally
            reserved for the highest-security links rather than broad
            deployment.
          </li>
        </ul>

        <h2>Who's actively working on this</h2>
        <p>
          Standards bodies like NIST, along with major cloud providers,
          browser vendors, and government agencies worldwide, are actively
          rolling out post-quantum cryptography support. On the hardware
          side, companies including{" "}
          <Link href="/companies/ibm" className="text-quantum hover:underline">IBM</Link>{" "}
          continue advancing the quantum computing capabilities that
          motivate this transition in the first place.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Post-quantum cryptography adoption is happening now and is
          expected to continue over the next several years as systems are
          gradually upgraded. The quantum computing threat itself
          (large-scale Shor's Algorithm execution) remains a longer-term
          prospect, but the defensive migration is deliberately running
          well ahead of that timeline as a precaution.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is my data at risk right now from quantum computers?</h3>
        <p>
          Not from a quantum computer actually breaking your encryption
          today — no hardware exists that's capable of this. The relevant
          risk is "harvest now, decrypt later" for data that needs to
          remain confidential for many years into the future.
        </p>
        <h3>Do I need quantum key distribution for my business?</h3>
        <p>
          Almost certainly not for typical business needs — post-quantum
          cryptography (a software/standards upgrade) is the appropriate
          response for the vast majority of organizations. QKD's
          specialized infrastructure requirements make it relevant mainly
          for a narrow set of very high-security use cases.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/finance" className="text-quantum hover:underline">→ Quantum for Finance</Link>
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare</Link>
          <Link href="/industries/logistics" className="text-quantum hover:underline">→ Quantum for Logistics</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
