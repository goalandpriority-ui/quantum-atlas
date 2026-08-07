import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Materials Science | QuantumAtlas",
  description:
    "How quantum simulation could revolutionize materials discovery — from room-temperature superconductors to stronger alloys and novel semiconductors.",
};

export default function MaterialsSciencePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Promising
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Materials Science
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Materials science is arguably the single most natural application of quantum computing. Every material's properties — strength, conductivity, magnetism, optical behavior — emerge from quantum mechanical interactions between electrons that are exponentially hard to simulate classically.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>The fundamental connection</h2>
        <p>
          Classical computers simulate quantum systems by approximating them — methods like Density Functional Theory (DFT) work well for simple materials but fail for strongly correlated electron systems. These hard cases — high-temperature superconductors, transition metal oxides, complex catalysts — are precisely where quantum computers would provide genuine advantage, because they simulate quantum systems using quantum mechanics directly.
        </p>

        <h2>High-temperature superconductors</h2>
        <p>
          Room-temperature superconductors would revolutionize energy transmission (eliminating ~5% transmission losses globally), MRI machines, maglev transportation, and quantum computers themselves. The mechanism behind copper-oxide (cuprate) high-temperature superconductors has eluded classical simulation for 40 years because the strongly correlated electrons cannot be accurately modeled with current classical methods.
        </p>
        <p>
          <strong>Quantum approach:</strong> Simulating the Hubbard model (which describes electron interactions in cuprates) on a quantum computer is a realistic near-term target. IBM, Google, and academic groups have demonstrated early steps toward this simulation.
        </p>
        <p>
          <strong>Current reality:</strong> Early demonstrations exist, but accurately simulating a real cuprate material at practically useful scale requires fault-tolerant hardware not yet available.
        </p>

        <h2>Novel semiconductor design</h2>
        <p>
          As classical transistors approach physical size limits, new semiconductor materials (gallium nitride, silicon carbide, 2D materials like graphene) need accurate quantum simulation to optimize their electronic properties for next-generation chips. Quantum computers could dramatically accelerate the materials-to-device design cycle.
        </p>

        <h2>Catalysis and surface chemistry</h2>
        <p>
          Industrial catalysts (for fertilizer production via Haber-Bosch, petroleum refining, fuel cells) are currently designed through expensive trial-and-error. Quantum simulation of surface chemistry reactions — how molecules bind to and react on a catalyst surface — could enable rational catalyst design with far fewer experimental iterations. See also our{" "}
          <Link href="/industries/climate-environment" className="text-quantum hover:underline">
            Climate & Environment
          </Link>{" "}
          coverage for carbon capture catalyst applications.
        </p>

        <h2>Correlated electron materials</h2>
        <p>
          Many technologically important materials — topological insulators, quantum spin liquids, heavy fermion compounds — exhibit strongly correlated electron behavior that defeats classical simulation methods entirely.{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">VQE</Link>{" "}
          and{" "}
          <Link href="/algorithms/quantum-gibbs-sampling" className="text-quantum hover:underline">
            quantum Gibbs sampling
          </Link>{" "}
          algorithms are specifically designed to tackle these systems.
        </p>

        <h2>Who is working on this</h2>
        <p>
          Materials simulation is a major research focus at IBM Quantum, Google Quantum AI, and Quantinuum. The US Department of Energy's national laboratories (Argonne, Oak Ridge) are running quantum chemistry programs specifically targeting materials problems. In Europe, the EU Quantum Flagship has dedicated work packages for materials simulation.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Small-scale demonstrations of quantum advantage for specific materials properties (like Hubbard model ground states) may occur within 5 years on NISQ+ hardware. Practically useful materials discovery — simulating real molecules at sufficient accuracy to guide synthesis decisions — requires fault-tolerant hardware likely 10-20 years away.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">→ VQE Algorithm</Link>
          <Link href="/algorithms/quantum-gibbs-sampling" className="text-quantum hover:underline">→ Quantum Gibbs Sampling</Link>
          <Link href="/industries/climate-environment" className="text-quantum hover:underline">→ Quantum for Climate</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
