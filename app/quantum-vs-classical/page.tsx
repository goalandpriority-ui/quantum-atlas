import Link from "next/link";
import ScalingDiagram from "@/components/diagrams/ScalingDiagram";
import SpeedupComparisonDiagram from "@/components/diagrams/SpeedupComparisonDiagram";

export const metadata = {
  title: "Quantum vs Classical Computing: Full Comparison | QuantumAtlas",
  description:
    "A comprehensive comparison of quantum and classical computing — how they differ in architecture, speed, use cases, limitations, and the future of hybrid systems.",
};

const comparisonRows = [
  { aspect: "Basic unit", classical: "Bit (0 or 1)", quantum: "Qubit (0, 1, or superposition)" },
  { aspect: "Information processing", classical: "Sequential or parallel via multiple processors", quantum: "Exploits superposition and entanglement to process many possibilities simultaneously" },
  { aspect: "Gate operations", classical: "Logic gates (AND, OR, NOT) — mostly irreversible", quantum: "Quantum gates (Hadamard, CNOT, etc.) — always reversible" },
  { aspect: "Error rates", classical: "Extremely low — 1 error per quintillion operations or better", quantum: "Currently high — 0.1–1% per gate on best hardware" },
  { aspect: "Operating environment", classical: "Room temperature", quantum: "Often near absolute zero (superconducting) or laser-controlled vacuum (trapped ion)" },
  { aspect: "Best suited for", classical: "General-purpose tasks: browsing, writing, video, databases", quantum: "Specific hard problems: factoring, search, simulation, optimization" },
  { aspect: "Scalability", classical: "Mature, proven, billions of transistors per chip", quantum: "Early-stage: hundreds to thousands of physical qubits; scaling is an active challenge" },
  { aspect: "Programming model", classical: "Well-established: C, Python, Java, etc.", quantum: "Emerging: Qiskit, Cirq, Q#, PennyLane" },
  { aspect: "Current maturity", classical: "Fully mature — ubiquitous, cheap, reliable", quantum: "NISQ era — experimental, expensive, rapidly improving" },
  { aspect: "Energy use", classical: "Highly optimized; modern chips are extremely efficient", quantum: "Cooling infrastructure requires significant energy; active area of research" },
];

const useCaseRows = [
  {
    task: "Factoring large numbers (e.g., breaking RSA encryption)",
    classical: "Exponentially hard — infeasible for large numbers",
    quantum: "Shor's Algorithm — exponential speedup",
    winner: "quantum",
  },
  {
    task: "Searching unsorted data",
    classical: "O(N) — check each item",
    quantum: "Grover's Algorithm — O(√N) quadratic speedup",
    winner: "quantum",
  },
  {
    task: "Simulating molecules and materials",
    classical: "Exponentially hard as molecule size grows",
    quantum: "Natural fit — quantum systems simulate quantum systems efficiently",
    winner: "quantum",
  },
  {
    task: "Running a web browser",
    classical: "Instant, optimized",
    quantum: "No advantage — not suited for this",
    winner: "classical",
  },
  {
    task: "Streaming video",
    classical: "Highly efficient, mature infrastructure",
    quantum: "No advantage",
    winner: "classical",
  },
  {
    task: "Training a large machine learning model",
    classical: "GPUs highly optimized for this",
    quantum: "Some quantum ML algorithms show promise, but no proven large-scale advantage yet",
    winner: "classical",
  },
  {
    task: "Portfolio optimization (finance)",
    classical: "Approximate solutions via classical heuristics",
    quantum: "Promising near-term application via QAOA",
    winner: "mixed",
  },
  {
    task: "Drug discovery and molecular simulation",
    classical: "Approximate — becomes infeasible for large molecules",
    quantum: "VQE and other algorithms show strong near-term promise",
    winner: "mixed",
  },
];

export default function QuantumVsClassicalPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Comparison
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum vs Classical Computing
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Quantum computers are not "faster classical computers." They are a
        fundamentally different type of machine — suited for a different class
        of problems. This guide explains exactly how they differ, what each
        does best, and where the future is headed.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>The core difference</h2>
        <p>
          A classical computer — your phone, laptop, or a data center full of
          servers — processes information as{" "}
          <strong>bits</strong>: tiny switches that are always either 0 or 1.
          Every program ever written, every photo or video, every website —
          all ultimately encoded in strings of 0s and 1s.
        </p>
        <p>
          A quantum computer processes information as{" "}
          <Link href="/dictionary/qubit" className="text-quantum hover:underline">
            <strong>qubits</strong>
          </Link>
          , which can exist in a{" "}
          <Link href="/dictionary/superposition" className="text-quantum hover:underline">
            superposition
          </Link>{" "}
          of 0 and 1 simultaneously. Combined with{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entanglement
          </Link>{" "}
          and interference, this allows quantum computers to explore
          exponentially large solution spaces in ways that have no classical
          analog — but only for specific types of problems.
        </p>

        <h2>Side-by-side comparison</h2>
      </div>

      {/* Full comparison table */}
      <div className="overflow-x-auto my-8 max-w-4xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink w-1/4">Aspect</th>
              <th className="text-left p-3 border border-line font-semibold text-ink w-[37.5%]">Classical Computing</th>
              <th className="text-left p-3 border border-line font-semibold text-quantum w-[37.5%]">Quantum Computing</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={row.aspect} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line font-semibold text-ink text-sm">{row.aspect}</td>
                <td className="p-3 border border-line text-ink-muted text-sm">{row.classical}</td>
                <td className="p-3 border border-line text-ink-muted text-sm">{row.quantum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>Why quantum doesn't just "replace" classical</h2>
        <p>
          The most common misconception is that quantum computers will
          eventually make classical computers obsolete — the way smartphones
          replaced feature phones. This is not what's happening.
        </p>
        <p>
          Quantum computers offer dramatic speedups for a{" "}
          <em>specific subset</em> of problems — primarily those involving
          factoring, search, optimization, and quantum simulation. For
          everyday tasks like running a word processor, browsing the web, or
          playing a video game, classical computers are and will remain vastly
          more practical and efficient.
        </p>
        <p>
          The likely future is{" "}
          <strong>hybrid computing</strong>: classical computers handle
          general-purpose tasks and orchestrate the overall workflow, while
          offloading specific, quantum-suited sub-problems to a quantum
          processor — similar to how CPUs offload graphics rendering to GPUs
          today.
        </p>

        <h2>The scaling gap: where quantum shines</h2>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6 my-8 max-w-2xl">
        <ScalingDiagram />
      </div>

      <div className="prose-quantum max-w-2xl">
        <p>
          For problems with an exponential classical cost, quantum algorithms
          can reduce the required computation to something polynomial —
          turning "takes longer than the age of the universe" into "done in
          hours." This gap grows with problem size, which is why quantum
          advantage becomes more pronounced for large instances of the right
          kinds of problems.
        </p>

        <h2>Use case comparison: who wins where?</h2>
      </div>

      {/* Use case table */}
      <div className="overflow-x-auto my-8 max-w-4xl">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-quantum-50">
              <th className="text-left p-3 border border-line font-semibold text-ink w-1/4">Task</th>
              <th className="text-left p-3 border border-line font-semibold text-ink w-[30%]">Classical</th>
              <th className="text-left p-3 border border-line font-semibold text-ink w-[30%]">Quantum</th>
              <th className="text-left p-3 border border-line font-semibold text-ink w-[12%]">Edge</th>
            </tr>
          </thead>
          <tbody>
            {useCaseRows.map((row, i) => (
              <tr key={row.task} className={i % 2 === 0 ? "bg-surface" : "bg-paper"}>
                <td className="p-3 border border-line font-medium text-ink text-sm">{row.task}</td>
                <td className="p-3 border border-line text-ink-muted text-sm">{row.classical}</td>
                <td className="p-3 border border-line text-ink-muted text-sm">{row.quantum}</td>
                <td className="p-3 border border-line text-center">
                  {row.winner === "quantum" && (
                    <span className="inline-block bg-quantum-50 text-quantum font-mono text-[11px] px-2 py-0.5 rounded-full font-semibold">Quantum</span>
                  )}
                  {row.winner === "classical" && (
                    <span className="inline-block bg-paper text-ink-soft font-mono text-[11px] px-2 py-0.5 rounded-full border border-line">Classical</span>
                  )}
                  {row.winner === "mixed" && (
                    <span className="inline-block bg-collapse-50 text-collapse font-mono text-[11px] px-2 py-0.5 rounded-full">Mixed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>Grover's quadratic speedup: a visual</h2>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6 my-8 max-w-2xl">
        <SpeedupComparisonDiagram />
      </div>

      <div className="prose-quantum max-w-2xl">
        <h2>The error problem: why we're not there yet</h2>
        <p>
          Even for problems where quantum algorithms have a theoretical
          advantage, today's quantum computers can't yet realize that advantage
          at useful scale — because of errors. Current hardware is in the{" "}
          <Link href="/dictionary/nisq" className="text-quantum hover:underline">
            NISQ era
          </Link>
          : noisy, intermediate-scale machines where error rates are high
          enough to corrupt the results of any long, complex computation.
        </p>
        <p>
          Overcoming this requires{" "}
          <Link href="/learn/quantum-error-correction" className="text-quantum hover:underline">
            quantum error correction
          </Link>{" "}
          — which itself requires many more physical qubits to protect each
          logical qubit. This is the central engineering challenge of the
          field today.
        </p>

        <h2>The future: hybrid classical-quantum systems</h2>
        <p>
          The most realistic near-term picture is not "quantum replaces
          classical" — it's specialized quantum co-processors working
          alongside classical computers, each doing what they do best:
        </p>
        <ul>
          <li>Classical handles I/O, orchestration, general logic</li>
          <li>Quantum handles the specific sub-tasks it's suited for (simulation, optimization, search)</li>
          <li>Results flow back to classical for interpretation and further processing</li>
        </ul>
        <p>
          This hybrid model is already how companies like IBM, IonQ, and
          Rigetti structure their cloud offerings — classical programs call
          quantum circuits as a subroutine.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is a quantum computer always faster than a classical one?</h3>
        <p>
          No. For most tasks, classical computers are faster, more practical,
          and more efficient. Quantum computers offer advantages only for
          specific classes of problems where quantum algorithms provide a
          provable speedup.
        </p>
        <h3>When will quantum computers be better than classical ones for useful tasks?</h3>
        <p>
          This is called "quantum advantage" (distinct from "quantum supremacy"
          on artificial benchmarks), and it's an active research target. Most
          experts expect meaningful quantum advantage for specific practical
          problems — like drug discovery or optimization — within the next 5–15
          years, though timelines remain uncertain.
        </p>
        <h3>Should I learn quantum programming now?</h3>
        <p>
          If you're a developer or researcher interested in the field, tools
          like Qiskit (IBM) and Cirq (Google) are mature and free. Running
          small quantum circuits on real hardware via the cloud is already
          possible today and a great way to build intuition — even if
          large-scale practical quantum computing is still years away.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Want to go deeper?
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center — start from the basics</Link>
          <Link href="/guide/quantum-computing-complete-guide" className="text-quantum hover:underline">→ The Complete Guide — everything in one page</Link>
          <Link href="/dictionary/nisq" className="text-quantum hover:underline">→ What is NISQ?</Link>
          <Link href="/learn/quantum-error-correction" className="text-quantum hover:underline">→ Quantum Error Correction</Link>
          <Link href="/hardware" className="text-quantum hover:underline">→ Hardware Database — see real processors</Link>
        </div>
      </div>
    </article>
  );
}
