import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Energy & Climate | QuantumAtlas",
  description:
    "How quantum computing applies to battery materials, grid optimization, and carbon capture chemistry — current state, real research, and realistic timelines.",
};

export default function EnergyPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Energy & Climate
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        The energy transition depends on better materials, more efficient
        grids, and new chemistry — three areas where quantum computing's
        natural strengths in simulation and optimization could plausibly
        contribute, even if large-scale impact remains years away.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Battery materials research</h2>
        <p>
          Designing better batteries — higher energy density, faster
          charging, longer lifespan, less reliance on scarce materials —
          ultimately comes down to understanding how electrons behave in
          candidate materials at the atomic level.
        </p>
        <p>
          <strong>Quantum approach:</strong> Algorithms like{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            VQE
          </Link>{" "}
          and other quantum chemistry methods can, in principle, simulate
          the electronic structure of candidate battery materials more
          accurately than classical approximations, particularly for
          materials with strongly correlated electron behavior that
          classical methods struggle to model.
        </p>
        <p>
          <strong>Current reality:</strong> Several automakers and battery
          manufacturers have run early research collaborations exploring
          quantum simulation for next-generation battery chemistries (like
          solid-state and lithium-sulfur batteries), but these remain
          small-scale research demonstrations rather than tools actively
          used in production battery design.
        </p>

        <h2>Power grid optimization</h2>
        <p>
          Modern power grids — especially as they incorporate more
          intermittent renewable sources like wind and solar — require
          constant, complex optimization: balancing supply and demand,
          routing power efficiently, and maintaining stability.
        </p>
        <p>
          <strong>Quantum approach:</strong> Grid optimization problems share
          structural similarities with other combinatorial optimization
          problems discussed in our{" "}
          <Link href="/industries/logistics" className="text-quantum hover:underline">
            Logistics
          </Link>{" "}
          coverage, making algorithms like{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">
            QAOA
          </Link>{" "}
          theoretically applicable to grid balancing and routing problems.
        </p>
        <p>
          <strong>Current reality:</strong> A handful of utility companies
          have explored quantum and quantum-inspired optimization for grid
          problems in pilot studies, but classical optimization methods
          remain the production standard, similar to the pattern seen in
          logistics applications.
        </p>

        <h2>Carbon capture and emissions chemistry</h2>
        <p>
          Developing more efficient carbon capture materials and catalysts
          for converting captured carbon into useful products requires
          understanding complex molecular interactions — directly related
          to the kind of chemistry simulation discussed in our{" "}
          <Link href="/industries/healthcare" className="text-quantum hover:underline">
            Healthcare
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> This is among the more
          speculative near-term applications discussed in our industry
          coverage. While the underlying chemistry simulation problem is
          well-suited in principle to quantum approaches, demonstrated
          progress specifically on carbon capture materials remains limited
          to small academic research efforts.
        </p>

        <h2>Who's actively working on this</h2>
        <p>
          Energy companies and utilities have begun smaller-scale research
          partnerships with quantum hardware providers, often as part of
          broader corporate innovation programs rather than dedicated
          quantum strategies. This contrasts with{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            cybersecurity
          </Link>
          , where adoption is driven by a clear, time-sensitive threat.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Most experts place quantum-enhanced materials simulation for
          batteries and energy storage in a similar timeline to other
          quantum chemistry applications — plausible meaningful contributions
          within the next decade as hardware improves, though grid
          optimization specifically faces the same "classical methods are
          already quite good" challenge seen in logistics.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Will quantum computers help solve climate change?</h3>
        <p>
          Quantum computing could contribute incrementally — through better
          battery materials, more efficient grids, or improved carbon
          capture chemistry — but it is one tool among many, not a singular
          solution. Most climate progress will continue to come from policy,
          deployment of existing technology, and classical engineering
          improvements.
        </p>
        <h3>Are any energy companies using quantum computers in production today?</h3>
        <p>
          Not yet for core operations. Current activity is research
          partnerships and small pilot studies, similar in maturity to the
          finance and logistics industries covered elsewhere on this site.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/manufacturing" className="text-quantum hover:underline">→ Quantum for Manufacturing & Materials Science</Link>
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare</Link>
          <Link href="/industries/automotive" className="text-quantum hover:underline">→ Quantum for Automotive</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
