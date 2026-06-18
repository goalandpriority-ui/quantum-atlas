import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Aerospace & Defense | QuantumAtlas",
  description:
    "How quantum computing applies to sensing, navigation, secure communications, and materials simulation in aerospace and defense — current state and realistic timelines.",
};

export default function AerospaceDefensePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Aerospace & Defense
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Government defense and aerospace agencies are among the largest
        funders of quantum research worldwide, drawn by applications in
        secure communications, precision sensing, and materials simulation
        that align closely with national security priorities.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Quantum sensing and navigation</h2>
        <p>
          Quantum sensors exploit quantum mechanical precision — using
          phenomena like superposition and entanglement — to measure
          physical quantities (acceleration, rotation, magnetic fields,
          gravity) with extremely high sensitivity.
        </p>
        <p>
          <strong>Defense relevance:</strong> GPS-independent navigation is
          a major priority for defense applications, since GPS signals can
          be jammed or spoofed. Quantum sensors (particularly quantum
          accelerometers and gyroscopes) could provide highly accurate
          navigation without relying on external satellite signals.
        </p>
        <p>
          <strong>Current reality:</strong> As discussed in our{" "}
          <Link href="/future" className="text-quantum hover:underline">
            Quantum Future Predictions
          </Link>{" "}
          coverage, quantum sensing is one of the more mature near-term
          quantum technologies, with several defense agencies and
          contractors actively developing prototype quantum navigation
          systems, though widespread deployment in operational systems
          remains in progress.
        </p>

        <h2>Secure military communications</h2>
        <p>
          Defense communications require the highest possible security
          guarantees, making{" "}
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">
            quantum key distribution
          </Link>{" "}
          and{" "}
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            post-quantum cryptography
          </Link>{" "}
          particularly relevant, building on the broader cybersecurity
          applications discussed in our{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            Cybersecurity
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> Defense agencies in multiple
          countries have funded QKD infrastructure pilots and are among the
          most aggressive adopters of post-quantum cryptography migration,
          given the long confidentiality requirements of military and
          intelligence communications.
        </p>

        <h2>Materials simulation for aerospace components</h2>
        <p>
          Designing aerospace materials — heat-resistant alloys for jet
          engines, lightweight composites, materials that withstand extreme
          conditions in space — connects directly to the quantum chemistry
          simulation applications discussed in our{" "}
          <Link href="/industries/manufacturing" className="text-quantum hover:underline">
            Manufacturing & Materials Science
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> Aerospace companies and defense
          contractors have participated in early-stage quantum materials
          simulation research, though, as with other materials science
          applications, current quantum hardware can only model relatively
          small and simplified material systems.
        </p>

        <h2>Optimization for logistics and mission planning</h2>
        <p>
          Military logistics — supply chain management, fleet routing,
          mission scheduling — shares the same combinatorial optimization
          structure discussed in our{" "}
          <Link href="/industries/logistics" className="text-quantum hover:underline">
            Logistics
          </Link>{" "}
          coverage, applied to defense-specific scenarios.
        </p>
        <p>
          <strong>Current reality:</strong> Defense agencies have funded
          research into quantum optimization for logistics and scheduling
          problems, following similar patterns and similar limitations
          (classical methods remaining competitive) as the broader
          logistics industry.
        </p>

        <h2>Government funding's outsized role</h2>
        <p>
          Unlike most industries covered on this site, defense and
          aerospace's relationship to quantum computing is shaped heavily by
          direct government research funding rather than purely commercial
          incentives. National security considerations — particularly
          concerns about adversaries achieving quantum capabilities first —
          motivate substantial public investment that wouldn't necessarily
          be justified by near-term commercial returns alone.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Quantum sensing for navigation and post-quantum cryptography
          migration are the most active, near-term areas, already moving
          from research into early deployment. Materials simulation and
          optimization applications follow similar longer timelines to
          their counterparts in manufacturing and logistics.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Could quantum computers break military encryption soon?</h3>
        <p>
          Not with current hardware — the same scale limitations discussed
          in our{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>{" "}
          coverage apply here. This is precisely why defense agencies are
          aggressively pursuing post-quantum cryptography migration now,
          well ahead of when such an attack might become feasible.
        </p>
        <h3>Why does defense fund so much quantum research?</h3>
        <p>
          National security agencies often fund research with long time
          horizons and uncertain commercial payoffs, viewing quantum
          capability as strategically important regardless of near-term
          practical applications — a funding pattern similar to early
          government investment in classical computing and the internet.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
          <Link href="/industries/telecommunications" className="text-quantum hover:underline">→ Quantum for Telecommunications</Link>
          <Link href="/industries/manufacturing" className="text-quantum hover:underline">→ Quantum for Manufacturing & Materials Science</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
