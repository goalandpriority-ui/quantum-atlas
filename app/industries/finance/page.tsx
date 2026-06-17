import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Finance | QuantumAtlas",
  description:
    "How quantum computing applies to portfolio optimization, risk modeling, and derivatives pricing — current state, real pilots, and realistic timelines.",
};

export default function FinancePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Early Pilots
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Finance
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Finance is one of the most actively piloted industries for quantum
        computing — largely because many of its hardest problems are
        optimization and simulation tasks that map naturally onto quantum
        algorithms already being developed.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Why finance is a natural fit</h2>
        <p>
          Much of quantitative finance boils down to two kinds of hard
          computational problems: <strong>optimization</strong> (finding the
          best combination of assets, trades, or strategies among an
          enormous number of possibilities) and <strong>simulation</strong>{" "}
          (estimating probabilities and expected outcomes, often using
          repeated random sampling). Both are exactly the kinds of problems
          where specific quantum algorithms have shown theoretical promise.
        </p>

        <h2>Portfolio optimization</h2>
        <p>
          Selecting an optimal mix of assets to maximize return for a given
          level of risk is a classic combinatorial optimization problem.
          Classical methods handle this well for many cases, but become
          computationally expensive as the number of assets and constraints
          grows.
        </p>
        <p>
          <strong>Quantum approach:</strong> Algorithms like{" "}
          <Link href="/algorithms/qaoa" className="text-quantum hover:underline">
            QAOA
          </Link>{" "}
          are being tested on portfolio optimization problems, reformulating
          them as the kind of combinatorial problem QAOA is designed to
          approximately solve.
        </p>
        <p>
          <strong>Current reality:</strong> Benchmarks generally show
          classical heuristics still outperforming current quantum
          approaches for most realistic problem sizes — see our{" "}
          <Link href="/research/qaoa-portfolio-optimization-benchmark" className="text-quantum hover:underline">
            research summary
          </Link>{" "}
          on this exact topic. The gap is narrowing but hasn't closed.
        </p>

        <h2>Risk analysis and derivatives pricing</h2>
        <p>
          Pricing complex financial derivatives and estimating risk metrics
          (like Value at Risk) often relies on{" "}
          <strong>Monte Carlo simulation</strong> — running enormous numbers
          of random simulations to estimate a probability distribution.
        </p>
        <p>
          <strong>Quantum approach:</strong>{" "}
          <Link href="/algorithms/quantum-amplitude-estimation" className="text-quantum hover:underline">
            Quantum Amplitude Estimation
          </Link>{" "}
          offers a theoretical quadratic speedup over classical Monte Carlo
          methods for certain estimation tasks — meaning a problem requiring
          a million classical samples might need only a thousand quantum
          "samples" to reach comparable accuracy.
        </p>
        <p>
          <strong>Current reality:</strong> This is widely considered one of
          the more credible near-term quantum finance applications, since
          the theoretical speedup is well-established. However, it requires
          quantum hardware with low enough error rates to run the necessary
          circuit depths — still a work in progress.
        </p>

        <h2>Fraud detection and quantum machine learning</h2>
        <p>
          Some financial institutions are exploring quantum machine learning
          for fraud detection and pattern recognition in transaction data.
        </p>
        <p>
          <strong>Current reality:</strong> This is the most speculative
          application discussed here. As covered in our{" "}
          <Link href="/research/quantum-machine-learning-kernel-methods" className="text-quantum hover:underline">
            research on quantum kernel methods
          </Link>
          , proven quantum machine learning advantages remain narrow and
          specific — no broad advantage on real-world financial datasets has
          been convincingly demonstrated yet.
        </p>

        <h2>Who's actively working on this</h2>
        <p>
          Major banks and financial institutions have established quantum
          computing research groups and partnerships with quantum hardware
          providers like{" "}
          <Link href="/companies/ibm" className="text-quantum hover:underline">IBM</Link>,{" "}
          <Link href="/companies/ionq" className="text-quantum hover:underline">IonQ</Link>, and others, typically running small-scale pilots
          on real cloud-accessible quantum hardware rather than production
          deployments.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Most experts consider quantum-enhanced Monte Carlo methods (like
          amplitude estimation for risk analysis) the most likely near-term
          win, potentially within 5–10 years as hardware error rates
          improve. Broad quantum advantage for portfolio optimization and
          fraud detection remains a longer-term, less certain prospect.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Are quantum computers being used in production at banks today?</h3>
        <p>
          Not for core trading or risk systems. Current activity is
          research and pilot-stage — exploring feasibility and benchmarking
          against classical methods, rather than replacing production
          infrastructure.
        </p>
        <h3>Should a financial firm invest in quantum computing now?</h3>
        <p>
          Many large institutions maintain small research teams to build
          expertise and stay ahead of the curve, without expecting
          near-term operational returns. For most firms, monitoring
          developments is more practical than direct investment at this
          stage.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">More industries</h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/healthcare" className="text-quantum hover:underline">→ Quantum for Healthcare</Link>
          <Link href="/industries/logistics" className="text-quantum hover:underline">→ Quantum for Logistics</Link>
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
