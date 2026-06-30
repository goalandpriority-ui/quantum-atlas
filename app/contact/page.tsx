import Link from "next/link";

export const metadata = {
  title: "Contact Us | QuantumAtlas",
  description:
    "How to reach QuantumAtlas with questions, corrections, partnership inquiries, or feedback.",
};

export default function ContactPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Get in Touch
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        Contact Us
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          We welcome questions, corrections, and feedback from readers at
          every level — whether you've spotted a factual error in one of
          our dictionary entries, have a suggestion for content we should
          cover, or are reaching out about a potential partnership or
          collaboration.
        </p>

        <h2>Email</h2>
        <p>
          The best way to reach us is by email:{" "}
          <a
            href="mailto:goalandpriority@gmail.com"
            className="text-quantum hover:underline font-medium"
          >
            goalandpriority@gmail.com
          </a>
        </p>

        <h2>What to include</h2>
        <p>
          If you're reporting a factual error or outdated information,
          please include the specific page URL and a brief description of
          what seems incorrect — this helps us verify and fix it quickly.
          We take accuracy seriously and most correction requests are
          reviewed within a few days.
        </p>

        <h2>Content suggestions</h2>
        <p>
          If there's a quantum computing topic, algorithm, company, or
          concept you think deserves coverage and don't currently see on
          the site, let us know. Many of the sections on QuantumAtlas —
          including our{" "}
          <Link href="/people" className="text-quantum hover:underline">
            Quantum Pioneers
          </Link>{" "}
          profiles and{" "}
          <Link href="/countries" className="text-quantum hover:underline">
            Countries
          </Link>{" "}
          comparison — were added in direct response to reader interest.
        </p>

        <h2>Partnerships and collaboration</h2>
        <p>
          We occasionally hear from universities, course providers, and
          companies in the quantum computing space. We're generally open to
          conversations, though we maintain editorial independence — we
          don't accept payment for favorable coverage, and any
          collaboration would be clearly disclosed.
        </p>

        <h2>Response times</h2>
        <p>
          QuantumAtlas is maintained by a small team, so please allow a few
          business days for a response. We read every message we receive,
          even if we can't respond to all of them individually.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Quick links
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/about" className="text-quantum hover:underline">→ About QuantumAtlas</Link>
          <Link href="/faq" className="text-quantum hover:underline">→ Frequently Asked Questions</Link>
          <Link href="/privacy-policy" className="text-quantum hover:underline">→ Privacy Policy</Link>
        </div>
      </div>
    </article>
  );
}
