import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Healthcare | QuantumAtlas",
  description:
    "How quantum computing applies to drug discovery, molecular simulation, and genomics — current state, real research, and realistic timelines.",
};

export default function HealthcarePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Healthcare
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Healthcare — specifically drug discovery and molecular simulation —
        is widely considered the most scientifically grounded near-term
        application of quantum computing, directly traceable to Richard
        Feynman's original 1981 insight that quantum computers are
        naturally suited to simulating quantum systems.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Why molecules are a natural fit</h2>
        <p>
          Molecules are governed by quantum mechanics — the behavior of
          electrons around atoms is fundamentally a quantum phenomenon.
          Classical computers can only approximate this behavior, and the
          computational cost of these approximations grows exponentially as
          molecules get larger. A quantum computer, built from the same
          quantum mechanical principles, may be able to simulate this
          behavior far more naturally and efficiently.
        </p>

        <h2>Drug discovery and molecular simulation</h2>
        <p>
          Discovering new drugs requires understanding how candidate
          molecules interact with target proteins in the body — a process
          that's extremely expensive to model accurately with classical
          computational chemistry methods.
        </p>
        <p>
          <strong>Quantum approach:</strong> Algorithms like the{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            Variational Quantum Eigensolver (VQE)
          </Link>{" "}
          calculate the ground-state energy of molecules — a key quantity
          for understanding molecular stability and reactivity — using a
          hybrid quantum-classical approach suited to today's noisy
          hardware.
        </p>
        <p>
          <strong>Current reality:</strong> As detailed in our{" "}
          <Link href="/research/vqe-molecular-simulation-accuracy" className="text-quantum hover:underline">
            research summary on adaptive VQE methods
          </Link>
          , researchers are successfully simulating small molecules relevant
          to early drug discovery stages. Scaling to the larger, more
          complex molecules relevant to most real drugs remains a work in
          progress, limited primarily by current hardware error rates.
        </p>

        <h2>Protein folding and structure prediction</h2>
        <p>
          Understanding how proteins fold into their 3D structures is
          critical for understanding disease mechanisms and designing
          targeted treatments.
        </p>
        <p>
          <strong>Current reality:</strong> This area has actually seen more
          progress from classical AI (like DeepMind's AlphaFold) than from
          quantum computing so far. Quantum approaches are being explored as
          potential complements — particularly for simulating the quantum
          mechanical details of specific binding sites — rather than as a
          replacement for these classical breakthroughs.
        </p>

        <h2>Genomics and personalized medicine</h2>
        <p>
          Some research explores whether quantum algorithms could accelerate
          pattern recognition in genomic data, supporting personalized
          treatment approaches.
        </p>
        <p>
          <strong>Current reality:</strong> This is among the more
          speculative applications discussed in healthcare. Genomic data
          analysis at scale remains dominated by classical machine learning
          and statistical methods, with no demonstrated quantum advantage
          yet for real genomic datasets.
        </p>

        <h2>Who's actively working on this</h2>
        <p>
          Pharmaceutical companies have established partnerships with
          quantum hardware providers and software companies to explore VQE
          and related algorithms on early-stage drug candidates. Most work
          remains at the research and proof-of-concept stage, run on
          cloud-accessible quantum hardware from providers like{" "}
          <Link href="/companies/ibm" className="text-quantum hover:underline">IBM</Link>{" "}
          and{" "}
          <Link href="/companies/ionq" className="text-quantum hover:underline">IonQ</Link>.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Many researchers consider quantum-accelerated molecular simulation
          for small-to-medium molecules one of the more plausible "first
          practical use cases" for quantum computing generally, with
          potential meaningful impact within the next decade as hardware
          error rates continue to improve. Predictions in this space have
          historically been optimistic, however, so timelines should be
          treated with appropriate caution.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Has a quantum computer ever helped discover a real drug?</h3>
        <p>
          Not yet, in the sense of a drug reaching market that was
          discovered primarily through quantum computation. Current work
          focuses on demonstrating accuracy and feasibility on small test
          molecules as a step toward eventually contributing to real
          discovery pipelines.
        </p>
        <h3>Why not just use classical supercomputers for this?</h3>
        <p>
          Classical supercomputers are and will remain essential for most
          computational chemistry. The specific advantage quantum computers
          may offer is for problems involving strongly correlated electron
          behavior in larger molecules — a regime where classical
          approximation methods become unreliable or computationally
          infeasible.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/finance" className="text-quantum hover:underline">→ Quantum for Finance</Link>
          <Link href="/industries/logistics" className="text-quantum hover:underline">→ Quantum for Logistics</Link>
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
