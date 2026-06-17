import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Logistics | QuantumAtlas",
  description:
    "How quantum computing applies to route optimization, scheduling, and supply chain efficiency — current state, real pilots, and realistic timelines.",
};

export default function LogisticsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Logistics
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Logistics — routing, scheduling, and supply chain management — is
        fundamentally a world of optimization problems, making it one of
        the most frequently cited testing grounds for near-term quantum and
        quantum-inspired algorithms.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Why logistics is optimization-heavy</h2>
        <p>
          Many logistics problems are variations on classic combinatorial
          optimization challenges: the traveling salesman problem (finding
          the shortest route visiting multiple locations), bin packing
          (efficiently loading vehicles or containers), and scheduling
          (assigning resources to tasks under constraints). These problems
          often have an enormous number of possible solutions, with the
          difficulty growing rapidly as the problem scales.
        </p>

        <h2>Route optimization</h2>
        <p>
          Delivery companies and logistics providers constantly solve
          vehicle routing problems — determining the most efficient paths
          for fleets of vehicles serving many delivery locations.
        </p>
        <p>
          <strong>Quantum approach:</strong> Both gate-based algorithms like{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">
            QAOA
          </Link>{" "}
          and specialized{" "}
          <Link href="/algorithms/quantum-annealing" className="text-quantum hover:underline">
            quantum annealing
          </Link>{" "}
          hardware (like D-Wave's systems) have been applied to route
          optimization problems, reformulating them as the kind of
          combinatorial optimization these approaches are designed for.
        </p>
        <p>
          <strong>Current reality:</strong> Several logistics and
          transportation companies have run pilot projects testing quantum
          and quantum-inspired methods against classical optimization
          software. Results so far generally show classical methods
          remaining competitive or superior for most real-world problem
          sizes, though quantum-inspired classical algorithms (which borrow
          mathematical ideas from quantum approaches but run on classical
          hardware) have shown some practical promise independently.
        </p>

        <h2>Warehouse and supply chain scheduling</h2>
        <p>
          Coordinating complex supply chains — deciding what to produce,
          when, and where to ship it — involves scheduling and resource
          allocation problems with similar combinatorial structure to
          routing problems.
        </p>
        <p>
          <strong>Current reality:</strong> This remains largely
          exploratory. A few companies have published proof-of-concept
          studies applying quantum optimization to simplified versions of
          supply chain scheduling problems, but production deployment
          replacing classical optimization software has not yet occurred
          at meaningful scale.
        </p>

        <h2>The "quantum-inspired" classical algorithms angle</h2>
        <p>
          An interesting and sometimes overlooked development: research into
          quantum optimization algorithms has inspired new classical
          algorithms that borrow mathematical techniques from the quantum
          approach (like certain tensor network methods) without requiring
          actual quantum hardware. Some of these "quantum-inspired" classical
          methods have shown competitive or superior performance to both
          traditional classical methods and current quantum approaches —
          an interesting case where quantum computing research is already
          paying dividends, even without quantum hardware in the loop.
        </p>

        <h2>Who's actively working on this</h2>
        <p>
          Several major logistics, automotive, and aerospace companies have
          run published pilots exploring quantum and quantum-inspired
          optimization, often in partnership with quantum hardware and
          software providers like{" "}
          <Link href="/companies/rigetti" className="text-quantum hover:underline">Rigetti</Link>{" "}
          and others offering cloud-based optimization tools.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Most experts view broad quantum advantage for logistics
          optimization as a longer-term prospect than areas like
          chemistry simulation or cryptography, given how well-optimized
          classical heuristics already are for many of these problems. The
          "quantum-inspired classical algorithms" trend may deliver
          practical value sooner than quantum hardware itself does for this
          particular industry.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Are any companies actually using quantum computers for logistics today?</h3>
        <p>
          Some companies run periodic pilots and benchmarking studies on
          cloud-accessible quantum hardware, but production logistics
          systems today rely on classical optimization software, not
          quantum computers.
        </p>
        <h3>What's the difference between quantum annealing and gate-based quantum computing for this?</h3>
        <p>
          Quantum annealing (used by companies like D-Wave) is a specialized
          approach designed specifically for optimization problems, while
          gate-based quantum computers (like those from IBM or IonQ) are
          general-purpose and run optimization algorithms like QAOA as one
          of many possible applications. Both are being explored for
          logistics use cases, with ongoing debate about which approach,
          if either, will prove more practical.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/finance" className="text-quantum hover:underline">→ Quantum for Finance</Link>
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare</Link>
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
