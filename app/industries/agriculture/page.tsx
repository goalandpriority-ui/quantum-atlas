import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Agriculture | QuantumAtlas",
  description:
    "How quantum computing might apply to crop optimization, fertilizer chemistry, and supply chain modeling in agriculture — an honest look at this exploratory application area.",
};

export default function AgriculturePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Exploratory
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Agriculture
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Agriculture is one of the most exploratory application areas covered
        on this site — the connections to quantum computing are real and
        scientifically grounded, but concrete activity remains limited to a
        small number of research efforts rather than active industry pilots.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Nitrogen fixation and fertilizer chemistry</h2>
        <p>
          One of the most scientifically interesting connections between
          quantum computing and agriculture involves nitrogen fixation — the
          chemical process of converting atmospheric nitrogen into a form
          plants can use, central to fertilizer production.
        </p>
        <p>
          <strong>The connection:</strong> The industrial process for
          nitrogen fixation (the Haber-Bosch process) is extremely
          energy-intensive, responsible for a notable share of global energy
          consumption. By contrast, certain bacteria fix nitrogen at room
          temperature using an enzyme called nitrogenase, through a
          mechanism not fully understood, in part because it involves
          complex quantum mechanical electron behavior that's difficult to
          simulate classically.
        </p>
        <p>
          <strong>Quantum approach:</strong> Algorithms like{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            VQE
          </Link>{" "}
          have been proposed as a way to better understand the nitrogenase
          mechanism, potentially informing the design of more energy
          efficient synthetic fertilizer production methods.
        </p>
        <p>
          <strong>Current reality:</strong> This remains an active academic
          research topic rather than an applied agricultural technology.
          The nitrogenase molecule is large and complex enough that
          simulating it accurately is beyond the reach of current quantum
          hardware — it's frequently cited as a long-term "stretch goal"
          for quantum chemistry rather than a near-term deliverable.
        </p>

        <h2>Crop yield optimization</h2>
        <p>
          Some research has explored whether quantum machine learning could
          improve predictions of crop yields based on weather, soil, and
          other agricultural data.
        </p>
        <p>
          <strong>Current reality:</strong> As discussed throughout our{" "}
          <Link href="/quantum-vs-ai" className="text-quantum hover:underline">
            Quantum vs AI
          </Link>{" "}
          coverage, quantum machine learning has not demonstrated advantages
          for real-world data analysis tasks like this. Classical machine
          learning and statistical methods remain the dominant and most
          practical approach for crop yield prediction today.
        </p>

        <h2>Agricultural supply chain and logistics</h2>
        <p>
          Optimizing the agricultural supply chain — from farm to
          distribution to retail, accounting for perishability and seasonal
          variation — shares structural similarities with the broader
          optimization challenges discussed in our{" "}
          <Link href="/industries/logistics" className="text-quantum hover:underline">
            Logistics
          </Link>{" "}
          coverage.
        </p>
        <p>
          <strong>Current reality:</strong> No agriculture-specific quantum
          optimization pilots are widely documented; this application would
          likely follow the same trajectory and face the same
          classical-methods-are-already-strong challenges as logistics more
          broadly.
        </p>

        <h2>Why agriculture is the most exploratory industry covered here</h2>
        <p>
          Unlike finance, healthcare, logistics, and cybersecurity — all
          areas with documented company pilots and partnerships — agriculture's
          quantum connections are currently driven almost entirely by
          fundamental scientific research (particularly around nitrogen
          fixation chemistry) rather than applied industry initiatives. This
          page is included for completeness and scientific interest, with an
          extra emphasis on honesty about how early-stage this really is.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          The nitrogenase simulation problem is explicitly cited by
          researchers as requiring substantially more capable, larger-scale
          fault-tolerant quantum computers than exist today — likely a
          longer timeline than the chemistry simulation applications
          discussed in healthcare and manufacturing, given the size and
          complexity of the molecule involved.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is quantum computing currently used on any farms?</h3>
        <p>
          No — there are no known quantum computing applications in active
          agricultural use today. All current activity is fundamental
          research, primarily in academic chemistry departments studying
          nitrogen fixation.
        </p>
        <h3>Why include agriculture if there's so little happening?</h3>
        <p>
          The nitrogen fixation connection is scientifically real and
          frequently cited in quantum computing research literature as a
          long-term goal — it's a legitimate example of how quantum
          simulation could eventually matter for a fundamental global
          challenge (the energy cost of fertilizer production), even though
          practical impact remains distant.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/energy" className="text-quantum hover:underline">→ Quantum for Energy & Climate</Link>
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare</Link>
          <Link href="/industries/logistics" className="text-quantum hover:underline">→ Quantum for Logistics</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
