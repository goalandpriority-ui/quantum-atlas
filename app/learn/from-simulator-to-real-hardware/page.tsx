import Link from "next/link";

export const metadata = {
  title: "From Simulator to Real Hardware | QuantumAtlas",
  description:
    "What actually changes when you move your quantum code from a local simulator to a real quantum processor — noise, queue times, and what to expect.",
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-ink text-paper rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed my-4">
      <code>{children}</code>
    </pre>
  );
}

export default function SimulatorToHardwarePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 6 · Practitioner's Corner
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        From Simulator to Real Hardware
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          After completing the{" "}
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
            Your First Qiskit Circuit
          </Link>{" "}
          tutorial on a simulator, the natural next step is running the same
          code on real quantum hardware. This transition reveals a lot about
          the practical realities discussed more abstractly throughout this
          site's{" "}
          <Link href="/hardware" className="text-quantum hover:underline">
            Hardware Database
          </Link>
          .
        </p>

        <h2>What stays the same</h2>
        <p>
          Encouragingly, your actual circuit-building code barely changes.
          Continuing the Bell state example from our first tutorial:
        </p>
        <CodeBlock>{`from qiskit import QuantumCircuit

qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])`}</CodeBlock>
        <p>
          This circuit construction code is identical whether you're
          targeting a simulator or real hardware — the framework
          deliberately abstracts this away.
        </p>

        <h2>What changes: the backend</h2>
        <p>
          Instead of using <code>AerSimulator()</code>, you connect to real
          hardware through a cloud service:
        </p>
        <CodeBlock>{`from qiskit_ibm_runtime import QiskitRuntimeService

# Requires a free IBM Quantum account and API token
service = QiskitRuntimeService()
backend = service.least_busy(operational=True, simulator=False)

print(f"Running on: {backend.name}")`}</CodeBlock>
        <p>
          This connects to a real processor like those covered in our{" "}
          <Link href="/hardware" className="text-quantum hover:underline">
            Hardware Database
          </Link>{" "}
          — possibly an IBM Heron or Condor-generation device, depending on
          what's available and least busy at the time.
        </p>

        <h2>Change 1: Queue times</h2>
        <p>
          Unlike a simulator, which runs instantly on your own computer,
          real quantum hardware is a shared, scarce resource. Your job
          joins a queue alongside other users' jobs, and execution can take
          anywhere from seconds to minutes (or occasionally longer),
          depending on demand.
        </p>

        <h2>Change 2: Noise in your results</h2>
        <p>
          This is the big one. Recall our simulator results were close to a
          perfect 50/50 split between '00' and '11', with almost no '01' or
          '10' outcomes. On real hardware, you'll typically see something
          like:
        </p>
        <CodeBlock>{`{'00': 467, '11': 471, '01': 34, '10': 28}`}</CodeBlock>
        <p>
          Those '01' and '10' results — which shouldn't theoretically occur
          for a perfect Bell state — are the direct, visible signature of{" "}
          <Link href="/dictionary/decoherence" className="text-quantum hover:underline">
            decoherence
          </Link>{" "}
          and{" "}
          <Link href="/dictionary/gate-fidelity" className="text-quantum hover:underline">
            gate infidelity
          </Link>{" "}
          discussed throughout this site's Hardware Database — this is what
          "noisy" actually looks like in practice, not just an abstract
          concept.
        </p>

        <h2>Change 3: Circuit transpilation becomes more visible</h2>
        <p>
          Real hardware has specific{" "}
          <Link href="/dictionary/qubit-connectivity" className="text-quantum hover:underline">
            qubit connectivity
          </Link>{" "}
          constraints. The transpilation step (converting your circuit into
          one compatible with the specific hardware's native gate set and
          connectivity) can meaningfully change your circuit's actual depth
          and structure:
        </p>
        <CodeBlock>{`from qiskit import transpile

# optimization_level controls how hard the compiler tries
# to minimize the resulting circuit's depth and gate count
transpiled = transpile(qc, backend, optimization_level=3)

print(f"Original depth: {qc.depth()}")
print(f"Transpiled depth: {transpiled.depth()}")`}</CodeBlock>
        <p>
          You may be surprised to see the transpiled depth is higher than
          your original circuit — a direct, hands-on encounter with the
          hardware-aware compilation challenges discussed in our{" "}
          <Link href="/research/qaoa-hardware-aware-circuit-compilation" className="text-quantum hover:underline">
            Research Papers section
          </Link>
          .
        </p>

        <h2>Should you apply error mitigation?</h2>
        <p>
          For circuits beyond simple examples, applying{" "}
          <Link href="/dictionary/quantum-error-mitigation" className="text-quantum hover:underline">
            error mitigation techniques
          </Link>{" "}
          (many built directly into modern Qiskit Runtime) can meaningfully
          improve result accuracy — though for a first Bell state
          experiment, you'll likely find the raw, unmitigated noise
          interesting and informative to see directly.
        </p>

        <h2>Managing expectations</h2>
        <p>
          A small two-qubit circuit like this one will generally still show
          recognizable, mostly-correct results on real hardware, despite the
          added noise. Larger, deeper circuits degrade much faster — which
          is exactly why current practical algorithms like{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            VQE
          </Link>{" "}
          and{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">
            QAOA
          </Link>{" "}
          are deliberately designed to use shallow circuits well-suited to
          today's{" "}
          <Link href="/dictionary/nisq" className="text-quantum hover:underline">
            NISQ-era
          </Link>{" "}
          hardware.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is real quantum hardware access free?</h3>
        <p>
          IBM and several other providers offer free tiers with limited
          access to real hardware, sufficient for learning and small
          experiments. Higher-volume or priority access typically requires
          a paid plan — check each provider's current offerings, since
          pricing and free-tier availability can change.
        </p>
        <h3>How much worse are results on real hardware compared to simulation?</h3>
        <p>
          It varies significantly by circuit depth and the specific
          hardware's current calibration — small, shallow circuits like the
          Bell state example here typically still show clearly recognizable
          results, while larger circuits can degrade substantially, directly
          illustrating the practical importance of the{" "}
          <Link href="/dictionary/circuit-depth" className="text-quantum hover:underline">
            circuit depth
          </Link>{" "}
          concept.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">→ Your First Qiskit Circuit</Link>
          <Link href="/hardware" className="text-quantum hover:underline">→ Hardware Database</Link>
          <Link href="/learn/common-beginner-mistakes" className="text-quantum hover:underline">→ Common Beginner Mistakes</Link>
        </div>
      </div>
    </article>
  );
}
