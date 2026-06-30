import Link from "next/link";

export const metadata = {
  title: "About QuantumAtlas | The Open Encyclopedia of Quantum Computing",
  description:
    "Why QuantumAtlas exists, how it's built, and what we're trying to do differently in covering quantum computing online.",
};

export default function AboutPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        About
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-8">
        About QuantumAtlas
      </h1>

      <div className="prose-quantum max-w-2xl">
        <p>
          QuantumAtlas exists because quantum computing is one of the most
          consequential technologies being developed today, and yet most
          information about it online falls into one of two unhelpful
          extremes: dense academic papers written for physicists, or
          breathless marketing copy that overstates what current hardware
          can actually do. We built this site to occupy the space in
          between — accurate, accessible, and honest about both the genuine
          promise and the real limitations of the field.
        </p>

        <h2>What QuantumAtlas covers</h2>
        <p>
          The site is organized into several interconnected sections: a
          50-term dictionary of core concepts, a database of 50 quantum
          algorithms, profiles of 14 real quantum processors, 10 major
          companies in the space, 10 industries exploring quantum
          applications, a structured 8-level learning path from absolute
          basics through advanced theory and hands-on coding, 30 commonly
          believed myths we've fact-checked, and 20 plain-language summaries
          of research developments. We've also built interactive tools —
          calculators, a circuit builder, and quizzes — to make abstract
          quantum mechanical concepts tangible.
        </p>

        <h2>Our approach to accuracy</h2>
        <p>
          We try to be explicit about the difference between what's been
          rigorously proven (like the speedups offered by Shor's and
          Grover's algorithms), what's strongly believed but not absolutely
          proven (like the practical hardness assumptions underlying much
          of cryptography), and what remains genuinely speculative (like
          specific timelines for large-scale fault-tolerant quantum
          computers). Our{" "}
          <Link href="/myths" className="text-quantum hover:underline">
            Myths
          </Link>{" "}
          section exists specifically to correct the most common
          misconceptions we see repeated across the internet, including
          ones occasionally found in respectable-seeming sources.
        </p>

        <h2>Why we don't inflate the numbers</h2>
        <p>
          You'll notice that our coverage of "quantum advantage" claims,
          research papers, and industry predictions tends to include
          caveats and counterpoints rather than unqualified enthusiasm.
          This is deliberate. Quantum computing has a documented history of
          both genuine breakthroughs and claims that didn't hold up to
          scrutiny — Google's 2019 "quantum supremacy" announcement, for
          instance, was later partially challenged by improved classical
          simulation techniques. We'd rather be a source people trust for
          calibrated, accurate expectations than one optimized for
          excitement.
        </p>

        <h2>How the site is maintained</h2>
        <p>
          QuantumAtlas is an independently run reference site. Content is
          researched, written, and reviewed for accuracy on an ongoing
          basis, and we periodically update sections — particularly our
          News and Jobs pages, which pull live data — to keep pace with a
          fast-moving field. If you notice an error or an outdated claim,
          we genuinely want to hear about it; see our{" "}
          <Link href="/contact" className="text-quantum hover:underline">
            Contact page
          </Link>{" "}
          for how to reach us.
        </p>

        <h2>Who this site is for</h2>
        <p>
          QuantumAtlas is built for a wide range of readers: students
          encountering quantum computing for the first time, software
          engineers considering a career pivot into the field, journalists
          and policy researchers needing accurate background, and curious
          generalists who want to actually understand what all the
          discussion is about. Our{" "}
          <Link href="/learn" className="text-quantum hover:underline">
            Learning Center
          </Link>{" "}
          is structured in levels from zero background to advanced theory,
          so you can start wherever matches your current understanding.
        </p>

        <h2>What we are not</h2>
        <p>
          We are not a quantum hardware company, we don't sell quantum
          computing services, and we don't accept payment to favorably
          cover any company, product, or technology discussed on this
          site. Where we mention specific companies — IBM, Google, IonQ,
          and others — it's because they're factually significant to the
          topic at hand, not because of any commercial relationship.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Get in touch
        </p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Questions, corrections, or feedback
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/contact" className="text-quantum hover:underline">→ Contact Us</Link>
          <Link href="/learn" className="text-quantum hover:underline">→ Start Learning</Link>
          <Link href="/dictionary" className="text-quantum hover:underline">→ Browse the Dictionary</Link>
        </div>
      </div>
    </article>
  );
}
