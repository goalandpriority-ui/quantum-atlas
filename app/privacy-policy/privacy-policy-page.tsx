import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | QuantumAtlas",
  description: "How QuantumAtlas collects, uses, and protects information from visitors to this site.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Legal
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-3">
        Privacy Policy
      </h1>
      <p className="text-sm text-ink-soft mb-8">Last updated: June 2026</p>

      <div className="prose-quantum max-w-2xl">
        <p>
          This Privacy Policy explains how QuantumAtlas ("we," "us," "our,"
          accessible at quantumatlas.in) collects, uses, and protects
          information when you visit our website. We've tried to write this
          in plain language rather than dense legal text, while still
          covering everything required.
        </p>

        <h2>Information we collect automatically</h2>
        <p>
          Like virtually all websites, our hosting infrastructure
          (Vercel) automatically logs standard technical information when
          you visit, including your IP address, browser type, device type,
          referring page, and pages visited. This is standard web server
          activity and is used for security, performance monitoring, and
          understanding aggregate traffic patterns — not to identify
          individual visitors personally.
        </p>

        <h2>Local storage</h2>
        <p>
          QuantumAtlas uses your browser's local storage to remember your
          dark mode/light mode preference. This information stays on your
          device and is not transmitted to us or any third party. You can
          clear it at any time by clearing your browser's site data.
        </p>

        <h2>Cookies and advertising</h2>
        <p>
          We use or may use Google AdSense to display advertisements on
          this site. Google and its partners may use cookies — including
          the DoubleClick cookie — to serve ads based on your prior visits
          to this site and other sites on the internet. This is sometimes
          called "interest-based advertising" or "personalized
          advertising."
        </p>
        <p>
          You can opt out of personalized advertising by visiting Google's{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quantum hover:underline"
          >
            Ads Settings
          </a>
          , or opt out of third-party vendor use of cookies for
          personalized advertising by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quantum hover:underline"
          >
            www.aboutads.info
          </a>
          .
        </p>

        <h2>Third-party data sources</h2>
        <p>
          Our{" "}
          <Link href="/news" className="text-quantum hover:underline">
            News
          </Link>{" "}
          page pulls live data from NewsAPI.org, and our{" "}
          <Link href="/jobs" className="text-quantum hover:underline">
            Jobs
          </Link>{" "}
          page pulls live data from Adzuna. These requests happen from our
          server, not directly from your browser, so these third parties do
          not receive your personal information through your use of those
          pages on our site.
        </p>

        <h2>What we don't do</h2>
        <p>
          QuantumAtlas does not require account creation, does not collect
          email addresses through the site itself (only if you choose to
          email us directly), does not sell personal data to third
          parties, and does not run third-party tracking pixels beyond
          standard advertising cookies disclosed above.
        </p>

        <h2>Children's privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not
          knowingly collect personal information from children under 13.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on your location, you may have rights regarding
          personal information collected about you, including the right to
          request access to, correction of, or deletion of such
          information. Since we collect very limited personal data
          directly, most such requests would concern data held by
          third-party services like our hosting provider or Google
          AdSense, which maintain their own privacy policies and request
          processes.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or for legal or regulatory reasons. We
          will update the "Last updated" date at the top of this page when
          we do.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have questions about this Privacy Policy, please reach out
          via our{" "}
          <Link href="/contact" className="text-quantum hover:underline">
            Contact page
          </Link>{" "}
          or email{" "}
          <a href="mailto:goalandpriority@gmail.com" className="text-quantum hover:underline">
            goalandpriority@gmail.com
          </a>
          .
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/terms-of-service" className="text-quantum hover:underline">→ Terms of Service</Link>
          <Link href="/disclaimer" className="text-quantum hover:underline">→ Disclaimer</Link>
          <Link href="/contact" className="text-quantum hover:underline">→ Contact Us</Link>
        </div>
      </div>
    </article>
  );
}
