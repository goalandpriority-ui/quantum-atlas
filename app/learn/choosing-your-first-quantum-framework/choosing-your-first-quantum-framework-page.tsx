import Link from "next/link";

export const metadata = {
  title: "Choosing Your First Quantum Framework: Qiskit vs Cirq vs PennyLane | QuantumAtlas",
  description:
    "An honest comparison of Qiskit, Cirq, and PennyLane to help you pick which quantum programming framework to learn first.",
};

export default function ChoosingFrameworkPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Level 6 · Practitioner's Corner
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Choosing Your First Quantum Framework
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          Once you're ready to move from theory to actually writing quantum
          code — as in our{" "}
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">
            Your First Qiskit Circuit
          </Link>{" "}
          tutorial — you'll find several major open-source frameworks to
          choose from. This article compares the three most widely used
          options honestly, without pretending there's one universally
          "correct" choice.
        </p>

        <h2>Qiskit (IBM)</h2>
        <p>
          Qiskit is the most widely adopted quantum programming framework,
          developed by{" "}
          <Link href="/companies/ibm" className="text-quantum hover:underline">
            IBM
          </Link>
          . It includes the{" "}
          <Link href="/courses" className="text-quantum hover:underline">
            Qiskit Textbook
          </Link>
          , one of the best free educational resources in the field, and
          provides direct access to real IBM quantum hardware through the
          cloud.
        </p>
        <p>
          <strong>Strengths:</strong> Largest community and most extensive
          documentation, excellent learning resources, direct hardware
          access matching the processors covered in our{" "}
          <Link href="/hardware" className="text-quantum hover:underline">
            Hardware Database
          </Link>
          .
        </p>
        <p>
          <strong>Considerations:</strong> Being the most popular choice
          isn't automatically the best fit for every use case — its breadth
          can feel like a lot to take in for an absolute beginner compared
          to more focused alternatives.
        </p>

        <h2>Cirq (Google)</h2>
        <p>
          Cirq is Google's open-source framework, designed with particularly
          close attention to the practical realities of near-term NISQ
          hardware — reflecting Google Quantum AI's research focus
          discussed in our{" "}
          <Link href="/companies/google" className="text-quantum hover:underline">
            Google company profile
          </Link>
          .
        </p>
        <p>
          <strong>Strengths:</strong> Particularly strong tools for working
          directly with circuit-level hardware details and noise modeling,
          appealing if you're interested in the hardware engineering side
          of quantum computing rather than just algorithm design.
        </p>
        <p>
          <strong>Considerations:</strong> Smaller community and fewer
          beginner-oriented tutorials compared to Qiskit, and direct cloud
          hardware access is less readily available to the general public.
        </p>

        <h2>PennyLane (Xanadu)</h2>
        <p>
          PennyLane, developed by{" "}
          <Link href="/companies/xanadu" className="text-quantum hover:underline">
            Xanadu
          </Link>
          , is specifically designed for{" "}
          <Link href="/dictionary/quantum-machine-learning" className="text-quantum hover:underline">
            quantum machine learning
          </Link>
          , with deep integration into classical machine learning tools like
          PyTorch and TensorFlow.
        </p>
        <p>
          <strong>Strengths:</strong> The clear best choice if your specific
          interest is quantum machine learning or hybrid quantum-classical
          algorithms like{" "}
          <Link href="/algorithms/vqe" className="text-quantum hover:underline">
            VQE
          </Link>{" "}
          — its automatic differentiation tools are purpose-built for
          exactly this kind of work.
        </p>
        <p>
          <strong>Considerations:</strong> Less ideal if your primary
          interest is general quantum algorithms or hardware-level circuit
          design rather than the machine learning intersection specifically.
        </p>

        <h2>A simple decision guide</h2>
        <ul>
          <li>
            <strong>New to quantum computing entirely, want the most
            learning resources:</strong> Start with Qiskit.
          </li>
          <li>
            <strong>Interested in hardware-level details and noise
            modeling:</strong> Cirq is worth exploring.
          </li>
          <li>
            <strong>Specifically interested in quantum machine learning
            (VQE, QAOA, quantum neural networks):</strong> PennyLane is
            purpose-built for this.
          </li>
          <li>
            <strong>Want access to trapped-ion hardware specifically:</strong>{" "}
            Check{" "}
            <Link href="/companies/ionq" className="text-quantum hover:underline">
              IonQ's
            </Link>{" "}
            own SDK or use PennyLane/Qiskit's hardware integrations, since
            most frameworks can target multiple hardware backends through
            plugins.
          </li>
        </ul>

        <h2>You don't have to choose just one</h2>
        <p>
          In practice, many researchers and developers become comfortable
          with multiple frameworks over time, since the underlying concepts
          — gates, circuits, measurement — transfer directly between them,
          even though the exact syntax differs. Learning your first
          framework deeply matters far more than which specific one you
          start with.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Which framework do the algorithms on this site's Algorithms Database typically use?</h3>
        <p>
          Our{" "}
          <Link href="/algorithms" className="text-quantum hover:underline">
            Algorithms Database
          </Link>{" "}
          describes algorithms conceptually rather than tied to a specific
          framework's syntax — all of the major frameworks discussed here
          are capable of implementing any of the 50 algorithms covered.
        </p>
        <h3>Do I need to know which quantum hardware I'll eventually use before picking a framework?</h3>
        <p>
          Not necessarily — most major frameworks support multiple hardware
          backends through plugins, so you can generally start learning
          with whichever framework appeals to you and adapt later if your
          hardware needs become more specific.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Continue learning</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Related topics</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/your-first-qiskit-circuit" className="text-quantum hover:underline">→ Your First Qiskit Circuit</Link>
          <Link href="/courses" className="text-quantum hover:underline">→ Courses — structured learning paths</Link>
          <Link href="/jobs" className="text-quantum hover:underline">→ Quantum Jobs — see what skills employers want</Link>
        </div>
      </div>
    </article>
  );
}
