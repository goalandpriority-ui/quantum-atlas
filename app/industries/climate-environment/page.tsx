import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Climate & Environment | QuantumAtlas",
  description:
    "How quantum computing could accelerate battery materials discovery, carbon capture chemistry, and climate modeling — honest assessment of current state and timelines.",
};

export default function ClimateEnvironmentPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Research
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Climate & Environment
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Climate change is fundamentally a chemistry and materials problem — discovering better batteries, solar cells, and carbon capture catalysts requires simulating quantum mechanical systems that are exponentially hard for classical computers. This is exactly what quantum computers are designed to do.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Why this is one of the most credible quantum applications</h2>
        <p>
          Unlike many quantum computing application claims, the connection between quantum hardware and climate applications is scientifically direct. Designing better materials requires solving the Schrödinger equation for molecules — a quantum mechanical calculation that scales exponentially on classical computers but polynomially on quantum computers. This is not hype; it is the original motivation Richard Feynman cited for building quantum computers in 1981.
        </p>

        <h2>Battery materials discovery</h2>
        <p>
          Next-generation batteries — for electric vehicles and grid storage — require materials with specific electrochemical properties that are difficult to predict without accurate quantum simulation. Classical approximations (DFT) work for many systems but fail for strongly correlated electron systems that appear in promising battery cathode materials.
        </p>
        <p>
          <strong>Quantum approach:</strong>{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">VQE</Link>{" "}
          and related quantum chemistry algorithms can simulate electron correlation in these materials more accurately than classical methods, potentially identifying candidate materials decades faster than experimental trial-and-error.
        </p>
        <p>
          <strong>Current reality:</strong> VQE demonstrations are still limited to small molecules (fewer than 100 qubits). Practically useful battery material simulation requires fault-tolerant hardware with thousands of logical qubits — still years away.
        </p>

        <h2>Carbon capture catalyst design</h2>
        <p>
          Designing enzymes and metal-organic frameworks that efficiently capture CO₂ from the atmosphere requires understanding complex quantum mechanical interactions between the catalyst and CO₂ molecules. Classical simulation of these systems is highly approximate.
        </p>
        <p>
          <strong>Quantum approach:</strong> Hamiltonian simulation of the catalytic cycle — how electrons rearrange as CO₂ binds to a catalyst — is a natural application for quantum computers, potentially revealing binding mechanisms that lead to far more efficient capture materials.
        </p>
        <p>
          <strong>Current reality:</strong> Early academic demonstrations exist at toy scale. No quantum computer has yet simulated a catalytic system large enough to provide actionable design guidance for real carbon capture materials.
        </p>

        <h2>Solar cell efficiency optimization</h2>
        <p>
          Perovskite solar cells have shown extraordinary efficiency improvements but suffer from stability problems. Quantum simulation of the electron-phonon interactions responsible for degradation could guide the design of more stable perovskite structures.
        </p>

        <h2>Climate modeling</h2>
        <p>
          Large-scale climate models are classical numerical simulations — not natural quantum computing applications. Some researchers have explored quantum approaches to fluid dynamics (the Navier-Stokes equations) and optimization of energy grid management, but these remain highly speculative compared to quantum chemistry applications.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Battery and catalyst simulation at practically relevant scales likely requires fault-tolerant quantum computers with millions of physical qubits — a 15-30 year horizon. Smaller, more targeted simulations of specific molecular properties may become practically useful in 5-10 years as NISQ hardware improves. The quantum computing industry broadly agrees this is one of the clearest long-term value cases.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">→ VQE Algorithm</Link>
          <Link href="/industries/materials-science" className="text-quantum hover:underline">→ Quantum for Materials Science</Link>
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare (drug discovery)</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
