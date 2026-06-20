import Link from "next/link";

export const metadata = {
  title: "The Math of a Qubit | QuantumAtlas",
  description:
    "How the Bloch sphere and inner products precisely describe a qubit's state — the mathematical detail behind the Bloch sphere visualizations used throughout this site.",
};

export default function MathOfAQubitPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 0 · Math Foundations
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        The Math of a Qubit
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Our{" "}
          <Link href="/dictionary/bloch-sphere" className="text-quantum hover:underline">
            Bloch Sphere
          </Link>{" "}
          dictionary entry introduces the idea of visualizing a qubit's
          state as a point on a sphere. This article goes one level deeper,
          building on the{" "}
          <Link href="/learn/linear-algebra-for-quantum-computing" className="text-quantum hover:underline">
            Linear Algebra for Quantum Computing
          </Link>{" "}
          article to show precisely how that visualization is derived
          mathematically.
        </p>

        <h2>Starting from the general qubit state</h2>
        <p>
          Every qubit state can be written as |ψ⟩ = α|0⟩ + β|1⟩, where α and
          β are complex numbers satisfying |α|² + |β|² = 1 (since
          probabilities must add up to 100%). At first glance, this seems
          to require four real numbers to fully specify (since each complex
          number has two components) — but several mathematical
          simplifications reduce this dramatically.
        </p>

        <h2>Simplification 1: global phase doesn't matter</h2>
        <p>
          Two quantum states that differ only by an overall multiplicative
          phase factor (a complex number with magnitude 1, applied equally
          to both α and β) are physically indistinguishable — they produce
          identical measurement probabilities and behave identically in
          every observable way. This means we can always choose to make α a
          non-negative real number without losing any actual information
          about the state.
        </p>

        <h2>Simplification 2: the normalization constraint</h2>
        <p>
          The requirement |α|² + |β|² = 1 removes one more degree of
          freedom — once you know α (now a non-negative real number), the
          magnitude of β is fully determined.
        </p>

        <h2>Arriving at the Bloch sphere parameterization</h2>
        <p>
          After these simplifications, any qubit state can be written using
          just two real angles, θ (theta) and φ (phi):
        </p>
        <p className="font-mono bg-surface border border-line rounded-lg p-4 text-center">
          |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩
        </p>
        <p>
          These two angles are <em>exactly</em> the latitude and longitude
          coordinates used to plot a point on the{" "}
          <Link href="/dictionary/bloch-sphere" className="text-quantum hover:underline">
            Bloch sphere
          </Link>
          . The north pole (θ = 0) corresponds to |0⟩, the south pole (θ =
          π) corresponds to |1⟩, and every other point on the sphere's
          surface corresponds to some specific superposition.
        </p>

        <h2>What θ and φ each control</h2>
        <p>
          The angle θ controls the <strong>measurement probabilities</strong>{" "}
          — specifically, cos²(θ/2) gives the probability of measuring 0,
          and sin²(θ/2) gives the probability of measuring 1, matching the
          interactive behavior in our{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Probability Amplitude Calculator
          </Link>{" "}
          tool.
        </p>
        <p>
          The angle φ controls the <strong>relative phase</strong> between
          the |0⟩ and |1⟩ components — information that doesn't affect
          measurement probabilities directly when measuring in the standard
          basis, but critically affects how the qubit behaves under further
          gate operations and{" "}
          <Link href="/dictionary/quantum-interference" className="text-quantum hover:underline">
            interference
          </Link>{" "}
          with other qubits.
        </p>

        <h2>Why phase matters even though it's "invisible"</h2>
        <p>
          This is a subtle but important point: two states with the same θ
          but different φ values give identical measurement probabilities
          if measured immediately — yet behave completely differently if
          you apply further gates first. This is precisely why phase
          information, though not directly observable in a single
          measurement, is essential to how quantum algorithms like{" "}
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
            Grover's Algorithm
          </Link>{" "}
          achieve their speedup — they manipulate phase to set up
          constructive and destructive interference before the final
          measurement.
        </p>

        <h2>Gates as rotations of the Bloch sphere</h2>
        <p>
          With this geometric picture, quantum gates take on an elegant
          interpretation: every single-qubit gate corresponds to a rotation
          of the Bloch sphere. The{" "}
          <Link href="/dictionary/pauli-gates" className="text-quantum hover:underline">
            Pauli X gate
          </Link>{" "}
          is a 180° rotation around one axis, the{" "}
          <Link href="/dictionary/hadamard-gate" className="text-quantum hover:underline">
            Hadamard gate
          </Link>{" "}
          is a 180° rotation around a diagonal axis, and so on — turning
          abstract matrix multiplication into an intuitive geometric
          picture.
        </p>

        <h2>The limits of this picture</h2>
        <p>
          One important caveat: the Bloch sphere only works cleanly for a
          single qubit. As covered in our{" "}
          <Link href="/learn/multi-qubit-systems-tensor-products" className="text-quantum hover:underline">
            Multi-Qubit Systems & Tensor Products
          </Link>{" "}
          article, multi-qubit states — especially entangled ones — cannot
          be visualized this same way, since entanglement is fundamentally
          a property of how multiple qubits relate to each other, not
          something expressible as points on individual spheres.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Why can't entangled states be shown on a Bloch sphere?</h3>
        <p>
          The Bloch sphere parameterization relies on a single qubit having
          a well-defined pure state of its own. As discussed in our{" "}
          <Link href="/learn/density-matrices-mixed-states" className="text-quantum hover:underline">
            Density Matrices & Mixed States
          </Link>{" "}
          article, looking at just one qubit from an entangled pair actually
          produces a mixed state, which the simple Bloch sphere picture
          can't represent.
        </p>
        <h3>Is the Bloch sphere just a visualization tool, or does it have real physical meaning?</h3>
        <p>
          Both — it's a faithful, complete mathematical representation of
          any single-qubit pure state (not a simplification that loses
          information), while also being genuinely useful as an intuitive
          visualization for understanding gate operations as rotations.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/dictionary/bloch-sphere" className="text-quantum hover:underline">→ Bloch Sphere explained</Link>
          <Link href="/learn/multi-qubit-systems-tensor-products" className="text-quantum hover:underline">→ Multi-Qubit Systems & Tensor Products</Link>
          <Link href="/tools" className="text-quantum hover:underline">→ Probability Amplitude Calculator</Link>
        </div>
      </div>
    </article>
  );
}
