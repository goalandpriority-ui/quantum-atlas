import Link from "next/link";

export const metadata = {
  title: "Terms of Service | QuantumAtlas",
  description: "The terms governing your use of QuantumAtlas.",
};

export default function TermsPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Legal
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        Terms of Service
      </h1>
      <p className="text-sm text-ink-soft mb-8">Last updated: June 2026</p>

      <div className="prose-quantum max-w-2xl">
        <p>
          These Terms of Service ("Terms") govern your access to and use of
          QuantumAtlas (quantumatlas.in). By visiting or using this site,
          you agree to these Terms. If you don't agree, please don't use
          the site.
        </p>

        <h2>What QuantumAtlas is</h2>
        <p>
          QuantumAtlas is an independently operated educational reference
          website covering quantum computing — including a dictionary,
          algorithm database, hardware and company profiles, a structured
          learning path, and interactive tools. It is provided for
          informational and educational purposes.
        </p>

        <h2>Use of content</h2>
        <p>
          You're welcome to read, share links to, and reference content on
          this site for personal, educational, or non-commercial purposes,
          including citing it in academic work with appropriate
          attribution. You may not republish, redistribute, or reproduce
          substantial portions of our content elsewhere without
          permission. If you'd like to use our content in a way not
          covered here, please{" "}
          <Link href="/contact" className="text-quantum hover:underline">
            contact us
          </Link>
          .
        </p>

        <h2>No professional advice</h2>
        <p>
          Content on this site — including our{" "}
          <Link href="/quiz" className="text-quantum hover:underline">
            Quantum Readiness Quiz
          </Link>
          , industry pages, and cybersecurity coverage — is for general
          informational purposes only and does not constitute professional
          security, legal, financial, or technical consulting advice for
          your specific organization. Decisions about cryptographic
          migration, technology investment, or security posture should be
          made with the input of qualified professionals familiar with
          your specific circumstances.
        </p>

        <h2>Accuracy of information</h2>
        <p>
          We make a genuine effort to keep information on this site
          accurate and current, including periodic review of our content
          and live data feeds on our{" "}
          <Link href="/news" className="text-quantum hover:underline">
            News
          </Link>{" "}
          and{" "}
          <Link href="/jobs" className="text-quantum hover:underline">
            Jobs
          </Link>{" "}
          pages. However, quantum computing is a fast-moving field, and we
          cannot guarantee that all information is complete, current, or
          error-free at every moment. If you spot an error, please let us
          know via our{" "}
          <Link href="/contact" className="text-quantum hover:underline">
            Contact page
          </Link>
          .
        </p>

        <h2>Third-party links and data</h2>
        <p>
          This site contains links to third-party websites — including
          company sites, course providers, and research papers — and pulls
          live data from third-party APIs (NewsAPI and Adzuna). We don't
          control these external sources and aren't responsible for their
          content, accuracy, or availability.
        </p>

        <h2>Advertising</h2>
        <p>
          This site may display advertisements served through Google
          AdSense or similar advertising networks. We don't control the
          specific content of ads served by these networks. See our{" "}
          <Link href="/privacy-policy" className="text-quantum hover:underline">
            Privacy Policy
          </Link>{" "}
          for information about advertising cookies.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          QuantumAtlas is provided "as is" without warranties of any kind,
          express or implied. We are not liable for any damages or losses
          arising from your use of this site or reliance on its content,
          to the fullest extent permitted by applicable law.
        </p>

        <h2>Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          site after changes constitutes acceptance of the updated Terms.
          We'll update the "Last updated" date above when changes are made.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:goalandpriority@gmail.com" className="text-quantum hover:underline">
            goalandpriority@gmail.com
          </a>{" "}
          or via our{" "}
          <Link href="/contact" className="text-quantum hover:underline">
            Contact page
          </Link>
          .
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/privacy-policy" className="text-quantum hover:underline">→ Privacy Policy</Link>
          <Link href="/disclaimer" className="text-quantum hover:underline">→ Disclaimer</Link>
          <Link href="/contact" className="text-quantum hover:underline">→ Contact Us</Link>
        </div>
      </div>
    </article>
  );
}
