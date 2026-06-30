import Link from "next/link";

export const metadata = {
  title: "Disclaimer | QuantumAtlas",
  description: "Important disclaimers about the educational content, research summaries, and tools on QuantumAtlas.",
};

export default function DisclaimerPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Legal
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        Disclaimer
      </h1>
      <p className="text-sm text-ink-soft mb-8">Last updated: June 2026</p>

      <div className="prose-quantum max-w-2xl">
        <p>
          This page lays out important context for how to interpret the
          content on QuantumAtlas. We'd rather be upfront about these
          limitations than have you discover them by surprise.
        </p>

        <h2>Educational purpose</h2>
        <p>
          QuantumAtlas is an educational reference resource. Nothing on
          this site should be treated as professional, legal, financial,
          security, or investment advice specific to your situation. Where
          we discuss topics like post-quantum cryptography migration (see
          our{" "}
          <Link href="/quiz" className="text-quantum hover:underline">
            Quantum Readiness Quiz
          </Link>
          ) or industry applications, these are general informational
          frameworks, not personalized recommendations.
        </p>

        <h2>Illustrative figures and estimates</h2>
        <p>
          Several interactive tools on this site — including our{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Encryption Breaking Time Estimator
          </Link>
          ,{" "}
          <Link href="/tools" className="text-quantum hover:underline">
            Qubit Infrastructure Cost Estimator
          </Link>
          , and{" "}
          <Link href="/salary" className="text-quantum hover:underline">
            Salary &amp; Skills Heatmap
          </Link>{" "}
          — present illustrative or estimated figures meant to build
          intuition, not precise, verified, real-time data. We clearly try
          to label these as illustrative within the tools themselves, but
          we're restating it here too: these are order-of-magnitude
          educational illustrations, not quotes, predictions, or financial
          guidance you should rely on for real-world decisions.
        </p>

        <h2>Research summaries</h2>
        <p>
          Our{" "}
          <Link href="/research" className="text-quantum hover:underline">
            Research Papers
          </Link>{" "}
          section presents research findings in plain language for
          accessibility. Some entries represent illustrative summaries of
          the kind of research being conducted in the field rather than
          citations of specific, individually verified arXiv papers. We
          aim to accurately represent genuine research trends and findings
          in the field, but readers needing to cite specific primary
          research should consult original published papers directly.
        </p>

        <h2>Live data feeds</h2>
        <p>
          Our{" "}
          <Link href="/news" className="text-quantum hover:underline">
            News
          </Link>{" "}
          and{" "}
          <Link href="/jobs" className="text-quantum hover:underline">
            Jobs
          </Link>{" "}
          pages pull live data from third-party APIs (NewsAPI and Adzuna,
          respectively). We don't independently verify every article or
          job listing returned by these services, and availability depends
          on those third parties' uptime and data quality.
        </p>

        <h2>Predictions and timelines</h2>
        <p>
          Our{" "}
          <Link href="/future" className="text-quantum hover:underline">
            Future Predictions
          </Link>{" "}
          page and similar forward-looking content represent informed,
          calibrated estimates based on publicly available information and
          stated industry roadmaps — not guarantees. Quantum computing
          timelines have historically run optimistic across the industry,
          and we try to reflect that uncertainty honestly rather than
          presenting speculative dates as settled fact.
        </p>

        <h2>No company endorsement</h2>
        <p>
          Companies, products, and technologies discussed throughout this
          site — including in our{" "}
          <Link href="/companies" className="text-quantum hover:underline">
            Companies Database
          </Link>{" "}
          and{" "}
          <Link href="/courses" className="text-quantum hover:underline">
            Courses
          </Link>{" "}
          page — are included because they are factually relevant to the
          topic, not as an endorsement or recommendation. We are not
          compensated by any company for inclusion or favorable coverage.
        </p>

        <h2>Questions or corrections</h2>
        <p>
          If something on this site seems inaccurate or you have questions
          about how to interpret specific content, please reach out via
          our{" "}
          <Link href="/contact" className="text-quantum hover:underline">
            Contact page
          </Link>{" "}
          — we take corrections seriously and review them promptly.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/privacy-policy" className="text-quantum hover:underline">→ Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-quantum hover:underline">→ Terms of Service</Link>
          <Link href="/contact" className="text-quantum hover:underline">→ Contact Us</Link>
        </div>
      </div>
    </article>
  );
}
