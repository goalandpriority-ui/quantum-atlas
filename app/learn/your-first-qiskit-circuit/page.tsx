import Link from "next/link";

export const metadata = {
  title: "Your First Qiskit Circuit | QuantumAtlas",
  description:
    "A step-by-step walkthrough of writing and running a simple quantum circuit using IBM's Qiskit framework — from installation to your first real result.",
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-ink text-paper rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed my-4">
      <code>{children}</code>
    </pre>
  );
}

export default function FirstQiskitCircuitPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 6 · Practitioner's Corner
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Your First Qiskit Circuit
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Reading about{" "}
          <Link href="/dictionary/superposition" className="text-quantum hover:underline">
            superposition
          </Link>{" "}
          and{" "}
          <Link href="/dictionary/entanglement" className="text-quantum hover:underline">
            entanglement
          </Link>{" "}
          is one thing — actually running a quantum circuit and seeing the
          results is another. This walkthrough uses{" "}
          <strong>Qiskit</strong>, IBM's open-source quantum computing
          framework, to build and run one of the simplest meaningful
          circuits: creating a Bell state.
        </p>

        <h2>Step 1: Installation</h2>
        <p>
          Qiskit is a Python library. If you have Python installed, getting
          started takes one command:
        </p>
        <CodeBlock>{`pip install qiskit qiskit-aer`}</CodeBlock>
        <p>
          The <code>qiskit-aer</code> package includes a high-performance
          simulator, which is what we'll use here — no real quantum
          hardware access required for this first example.
        </p>

        <h2>Step 2: Build the circuit</h2>
        <p>
          We'll create the{" "}
          <Link href="/dictionary/bell-state" className="text-quantum hover:underline">
            Bell state
          </Link>{" "}
          discussed throughout this site — two entangled qubits — using
          exactly the two gates described in our{" "}
          <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
            Hadamard Gate
          </Link>{" "}
          and{" "}
          <Link href="/dictionary/cnot-gate" className="text-quantum hover:underline">
            CNOT Gate
          </Link>{" "}
          dictionary entries.
        </p>
        <CodeBlock>{`from qiskit import QuantumCircuit

# Create a circuit with 2 qubits and 2 classical bits for measurement
qc = QuantumCircuit(2, 2)

# Apply a Hadamard gate to qubit 0 — creates superposition
qc.h(0)

# Apply a CNOT gate: qubit 0 controls qubit 1 — creates entanglement
qc.cx(0, 1)

# Measure both qubits into the classical bits
qc.measure([0, 1], [0, 1])

print(qc)`}</CodeBlock>
        <p>
          Running <code>print(qc)</code> shows a text-based circuit diagram
          — if you've read our{" "}
          <Link href="/learn/reading-a-quantum-circuit-diagram" className="text-quantum hover:underline">
            Reading a Quantum Circuit Diagram
          </Link>{" "}
          article, this should already look familiar.
        </p>

        <h2>Step 3: Run it on a simulator</h2>
        <CodeBlock>{`from qiskit_aer import AerSimulator
from qiskit import transpile

simulator = AerSimulator()
compiled_circuit = transpile(qc, simulator)

# Run the circuit 1000 times to build a statistical picture
result = simulator.run(compiled_circuit, shots=1000).result()
counts = result.get_counts()

print(counts)`}</CodeBlock>

        <h2>Step 4: Interpret the results</h2>
        <p>
          You should see output roughly like:
        </p>
        <CodeBlock>{`{'00': 498, '11': 502}`}</CodeBlock>
        <p>
          Notice what's missing: you should see almost no '01' or '10'
          results. This is exactly the entanglement behavior described in
          our{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Bell State Measurement Simulator
          </Link>{" "}
          tool — both qubits always agree, even though each individual
          outcome is random. Roughly half the time both qubits read 0, and
          half the time both read 1, but they're never split between
          different values.
        </p>

        <h2>Why run it 1,000 times?</h2>
        <p>
          A single run of this circuit gives you one definite outcome
          (either '00' or '11') because of{" "}
          <Link href="/dictionary/measurement-collapse" className="text-quantum hover:underline">
            measurement collapse
          </Link>
          . To see the underlying probability distribution — and verify the
          entanglement is behaving as expected — you need to repeat the
          experiment many times, called "shots" in Qiskit terminology.
        </p>

        <h2>What's next</h2>
        <p>
          From here, a natural next step is trying this same circuit on
          real quantum hardware instead of a simulator — covered in our{" "}
          <Link href="/learn/from-simulator-to-real-hardware" className="text-quantum hover:underline">
            From Simulator to Real Hardware
          </Link>{" "}
          article — or exploring how a slightly larger circuit implements
          an actual algorithm, like the simplified{" "}
          <Link href="/algorithms/deutsch-jozsa" className="text-quantum hover:underline">
            Deutsch-Jozsa Algorithm
          </Link>
          .
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Do I need to understand the math to follow this tutorial?</h3>
        <p>
          Not deeply — this walkthrough is meant to build practical
          intuition. Reading our{" "}
          <Link href="/learn/what-is-a-qubit" className="text-quantum hover:underline">
            What is a Qubit?
          </Link>{" "}
          and{" "}
          <Link href="/learn/entanglement" className="text-quantum hover:underline">
            Entanglement
          </Link>{" "}
          articles first will help the results make more sense, but you can
          run this code successfully without a deep mathematical background.
        </p>
        <h3>Why use a simulator instead of real hardware for this first example?</h3>
        <p>
          Simulators are instant, free, and (for small circuits like this
          one) produce results indistinguishable from real hardware,
          letting you focus on learning the code structure before dealing
          with the queue times and noise inherent to real quantum
          processors.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/reading-a-quantum-circuit-diagram" className="text-quantum hover:underline">→ Reading a Quantum Circuit Diagram</Link>
          <Link href="/learn/from-simulator-to-real-hardware" className="text-quantum hover:underline">→ From Simulator to Real Hardware</Link>
          <Link href="/courses" className="text-quantum hover:underline">→ Courses — structured learning paths</Link>
        </div>
      </div>
    </article>
  );
}
