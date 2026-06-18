import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Manufacturing & Materials Science | QuantumAtlas",
  description:
    "How quantum computing applies to new materials discovery, catalysts, and quality optimization in manufacturing — current state and realistic timelines.",
};

export default function ManufacturingPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Manufacturing & Materials Science
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Materials science sits at the intersection of chemistry and physics
        — and since materials are fundamentally quantum mechanical systems,
        this is one of the application areas most directly connected to
        quantum computing's original motivating idea.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>New materials discovery</h2>
        <p>
          Discovering materials with specific desired properties —
          stronger, lighter, more conductive, more heat-resistant — has
          traditionally relied heavily on trial-and-error experimentation,
          guided by classical computational approximations of material
          behavior.
        </p>
        <p>
          <strong>Quantum approach:</strong> The same quantum simulation
          techniques discussed in our{" "}
          <Link href="/industries/healthcare" className="text-quantum hover:underline">
            Healthcare
          </Link>{" "}
          coverage for molecular simulation apply directly to materials:
          algorithms like{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            VQE
          </Link>{" "}
          can model the electronic structure of candidate materials,
          potentially revealing promising new compounds faster than
          classical trial-and-error methods.
        </p>
        <p>
          <strong>Current reality:</strong> Materials science is widely
          considered, alongside drug discovery, one of the most credible
          near-term quantum computing applications, since both rely on the
          same fundamental quantum chemistry simulation capability. Current
          work remains focused on relatively small molecular and crystal
          structures rather than the complex materials used in most
          real-world manufacturing.
        </p>

        <h2>Catalyst design</h2>
        <p>
          Catalysts — substances that speed up chemical reactions without
          being consumed — are central to manufacturing processes ranging
          from fertilizer production to plastics and pharmaceuticals.
          Designing better catalysts requires understanding precisely how
          electrons behave during chemical reactions.
        </p>
        <p>
          <strong>Current reality:</strong> Several chemical and industrial
          companies have explored quantum simulation for specific catalytic
          processes (including nitrogen fixation, relevant to fertilizer
          production), but these remain research-stage collaborations
          rather than tools used in production catalyst development.
        </p>

        <h2>Quality control and defect detection</h2>
        <p>
          Some manufacturers have explored quantum machine learning
          approaches for detecting defects in manufacturing quality control
          processes, treating it as a pattern recognition problem.
        </p>
        <p>
          <strong>Current reality:</strong> As discussed in our{" "}
          <Link href="/quantum-vs-ai" className="text-quantum hover:underline">
            Quantum vs AI
          </Link>{" "}
          comparison, quantum machine learning has not demonstrated broad
          advantages on real-world pattern recognition tasks, making this
          one of the more speculative applications in manufacturing — likely
          to remain dominated by classical computer vision and machine
          learning approaches for the foreseeable future.
        </p>

        <h2>Manufacturing process optimization</h2>
        <p>
          Optimizing manufacturing schedules, supply chains, and production
          line configurations shares the combinatorial optimization
          structure discussed in our{" "}
          <Link href="/industries/logistics" className="text-quantum hover:underline">
            Logistics
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> Similar to logistics, classical
          optimization heuristics remain highly competitive, and quantum
          approaches like{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">
            QAOA
          </Link>{" "}
          have not yet demonstrated consistent advantages for real-world
          manufacturing scheduling problems.
        </p>

        <h2>Who's actively working on this</h2>
        <p>
          Chemical, industrial, and materials companies have established
          research partnerships with quantum hardware and software providers
          to explore VQE-based materials simulation, often as part of
          broader digital innovation initiatives rather than standalone
          quantum strategies.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Materials discovery is frequently cited alongside drug discovery
          as one of the more plausible "first practical use cases" for
          quantum computing, with potential meaningful contributions within
          the next decade as hardware error rates improve — though, as with
          healthcare, predictions in this space have historically run
          optimistic.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Has quantum computing discovered any real materials yet?</h3>
        <p>
          Not materials currently in commercial use. Current research
          demonstrates feasibility on small, simplified molecular and
          crystal systems as a step toward eventually contributing to real
          materials discovery pipelines.
        </p>
        <h3>How is this different from quantum for healthcare?</h3>
        <p>
          The underlying quantum simulation techniques are very similar —
          both rely on algorithms like VQE to model molecular and electronic
          structure. The difference is mainly the target application:
          drugs and biological molecules versus industrial materials and
          catalysts.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/energy" className="text-quantum hover:underline">→ Quantum for Energy & Climate</Link>
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare</Link>
          <Link href="/industries/automotive" className="text-quantum hover:underline">→ Quantum for Automotive</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
