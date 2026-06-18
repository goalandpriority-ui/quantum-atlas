import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Automotive | QuantumAtlas",
  description:
    "How quantum computing applies to battery chemistry, supply chain optimization, and autonomous systems in the automotive industry — current state and realistic timelines.",
};

export default function AutomotivePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Exploratory
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Automotive
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        The automotive industry's interest in quantum computing spans
        several other industries covered on this site — battery chemistry
        connects to energy and materials science, supply chain optimization
        connects to logistics — making it more of a cross-cutting early
        adopter than a wholly distinct application area.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Battery chemistry for electric vehicles</h2>
        <p>
          As electric vehicles become more central to the auto industry,
          battery performance — range, charging speed, longevity, cost — has
          become a major competitive differentiator, directly connecting to
          the quantum materials simulation discussed in our{" "}
          <Link href="/industries/energy" className="text-quantum hover:underline">
            Energy & Climate
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> Several automakers have
          announced research partnerships with quantum computing companies
          specifically targeting battery material simulation, though these
          remain early-stage research collaborations rather than tools
          actively shaping production vehicle batteries today.
        </p>

        <h2>Manufacturing and supply chain optimization</h2>
        <p>
          Automotive manufacturing involves enormously complex supply
          chains — thousands of parts from hundreds of suppliers,
          coordinated across global manufacturing networks — connecting
          directly to the optimization challenges discussed in our{" "}
          <Link href="/industries/logistics" className="text-quantum hover:underline">
            Logistics
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> A few major automakers have
          piloted quantum and quantum-inspired optimization for specific
          supply chain and manufacturing scheduling problems, with results
          generally following the broader logistics pattern: interesting
          research, but not yet outperforming mature classical optimization
          tools at production scale.
        </p>

        <h2>Autonomous vehicle development</h2>
        <p>
          Some discussion exists around whether quantum computing could
          eventually assist with the machine learning and sensor processing
          challenges underlying autonomous vehicle systems.
        </p>
        <p>
          <strong>Current reality:</strong> This is the most speculative
          application discussed in automotive. As detailed in our{" "}
          <Link href="/quantum-vs-ai" className="text-quantum hover:underline">
            Quantum vs AI
          </Link>{" "}
          comparison, quantum computing has not demonstrated advantages for
          the kind of large-scale, real-world machine learning that
          autonomous driving systems depend on. Autonomous vehicle progress
          continues to be driven almost entirely by classical AI and sensor
          technology improvements.
        </p>

        <h2>Materials for lightweighting and aerodynamics</h2>
        <p>
          Reducing vehicle weight while maintaining strength and safety, and
          optimizing aerodynamic designs, both benefit from better materials
          science — connecting to the broader manufacturing applications
          discussed in our{" "}
          <Link href="/industries/manufacturing" className="text-quantum hover:underline">
            Manufacturing & Materials Science
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> Largely theoretical at this
          stage for automotive specifically — most quantum materials
          simulation research has focused on batteries and chemistry rather
          than structural materials.
        </p>

        <h2>Why automotive is "exploratory" rather than "early pilots"</h2>
        <p>
          Compared to finance, healthcare, logistics, and cybersecurity —
          all rated "early pilots" elsewhere on this site — automotive's
          quantum activity is more diffuse and earlier-stage, often
          embedded within broader battery research or supply chain
          innovation programs rather than dedicated, named quantum
          computing initiatives.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Automotive's quantum timeline largely tracks the broader energy
          and materials science timeline for battery applications, and the
          broader logistics timeline for supply chain applications — there
          isn't a distinct automotive-specific quantum timeline so much as
          automotive being one customer among several for these adjacent
          application areas.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Will quantum computing make self-driving cars better?</h3>
        <p>
          Not directly, based on current evidence. Self-driving technology
          progress is driven by classical AI and sensor improvements; no
          demonstrated quantum advantage exists for the underlying machine
          learning problems involved.
        </p>
        <h3>Which automakers are investing in quantum computing?</h3>
        <p>
          Several major automakers have announced quantum computing research
          partnerships, primarily focused on battery materials and supply
          chain optimization, but specific company involvement changes
          frequently as partnerships evolve — check individual company
          announcements for current details.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/energy" className="text-quantum hover:underline">→ Quantum for Energy & Climate</Link>
          <Link href="/industries/manufacturing" className="text-quantum hover:underline">→ Quantum for Manufacturing & Materials Science</Link>
          <Link href="/industries/logistics" className="text-quantum hover:underline">→ Quantum for Logistics</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
