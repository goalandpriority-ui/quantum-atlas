import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Transportation | QuantumAtlas",
  description:
    "Route optimization, traffic management, and autonomous vehicle simulation — honest assessment of quantum computing's role in transportation.",
};

export default function TransportationPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Exploratory
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Transportation
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Transportation optimization — routing vehicles, scheduling flights, managing traffic — involves combinatorial problems that are natural candidates for quantum optimization algorithms. The honest assessment: classical methods remain highly competitive, but quantum approaches are actively being piloted.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Vehicle routing optimization</h2>
        <p>
          The Vehicle Routing Problem (VRP) — optimizing delivery routes for fleets of vehicles — is NP-hard, meaning no classical algorithm finds optimal solutions efficiently at large scale. Logistics companies use powerful classical heuristics that find near-optimal solutions quickly.
        </p>
        <p>
          <strong>Quantum approach:</strong>{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">QAOA</Link>{" "}
          and quantum annealing (D-Wave) have been applied to VRP variants. Volkswagen piloted D-Wave optimization for taxi routing in Lisbon (2019). Results were mixed — quantum approaches showed promise but didn't clearly outperform classical heuristics at practically relevant problem sizes.
        </p>
        <p>
          <strong>Current reality:</strong> Quantum optimization for routing remains a research area. Classical solvers (Google OR-Tools, commercial optimization platforms) continue to outperform quantum approaches on real-world instances.
        </p>

        <h2>Air traffic management</h2>
        <p>
          Scheduling thousands of daily flights across shared airspace, assigning gates, and managing delays involves combinatorial optimization problems that quantum computers could theoretically address. Airbus and NASA have both published research on quantum approaches to flight scheduling and taxi routing at airports.
        </p>
        <p>
          <strong>Quantum approach:</strong> Both gate-based quantum algorithms (QAOA) and quantum annealing have been explored for flight gate assignment and conflict resolution in air traffic control. The problem structure maps naturally to Quadratic Unconstrained Binary Optimization (QUBO) formulations suitable for quantum optimization.
        </p>

        <h2>Autonomous vehicle simulation</h2>
        <p>
          Training autonomous vehicles requires simulating billions of edge-case scenarios — a task that is computationally expensive classically. Quantum simulation of specific physical scenarios (sensor behavior in adverse weather, rare crash geometries) is a longer-term research area with less near-term traction than optimization applications.
        </p>

        <h2>Railway and supply chain scheduling</h2>
        <p>
          Deutsche Bahn (German rail) has partnered with quantum computing companies to explore train scheduling optimization. Supply chain scheduling — coordinating manufacturing, shipping, and warehouse operations — involves similar combinatorial structure.
        </p>
        <p>
          D-Wave's quantum annealing approach has been the most actively deployed in these transportation logistics contexts, given its specialization in optimization problems.
        </p>

        <h2>Electric vehicle charging network optimization</h2>
        <p>
          As EV adoption grows, optimizing charging station placement, dynamic pricing, and grid load balancing becomes an increasingly complex optimization problem. Early research has explored quantum approaches to EV charging scheduling, though practical advantage over classical methods hasn't been demonstrated.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Transportation optimization is one of the application areas where quantum computing has been most actively piloted — but also where classical methods are strongest. Near-term (1-5 years): continued pilots with D-Wave and gate-based systems on specific sub-problems. Medium-term (5-15 years): potential quantum advantage on very large, complex routing problems as hardware improves. The key question is whether problem sizes where quantum wins are also practically relevant — this remains unresolved.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">→ QAOA Algorithm</Link>
          <Link href="/companies/d-wave" className="text-quantum hover:underline">→ D-Wave (quantum annealing leader)</Link>
          <Link href="/industries/logistics" className="text-quantum hover:underline">→ Quantum for Logistics</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
