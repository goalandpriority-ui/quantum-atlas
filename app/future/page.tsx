import Link from "next/link";
import QuantumNetworkDiagram from "@/components/diagrams/QuantumNetworkDiagram";

export const metadata = {
  title: "Quantum Future Predictions: Internet, AI, Medicine & Cybersecurity | QuantumAtlas",
  description:
    "How quantum computing could reshape the internet, artificial intelligence, medicine, cybersecurity, and space research in the coming decades.",
};

export default function FuturePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Looking Ahead
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Future Predictions
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Quantum computing's biggest impact may still be ahead of us. Here's
        an honest look at five areas where quantum technology could reshape
        the world — what's realistic, what's speculative, and what timeline
        experts actually expect.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>1. Quantum Internet</h2>
        <p>
          A <strong>quantum internet</strong> would be a global network that
          distributes entanglement between distant locations, enabling forms
          of communication and security that are physically impossible on
          today's classical internet.
        </p>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6 my-8 max-w-2xl">
        <QuantumNetworkDiagram />
      </div>

      <div className="prose-quantum max-w-2xl">
        <p>
          <strong>What it would enable:</strong> Provably secure
          communication via quantum key distribution, ultra-precise
          distributed sensing and timekeeping (useful for GPS-independent
          navigation and synchronized scientific instruments), and networking
          multiple quantum computers together to tackle problems too large
          for a single machine.
        </p>
        <p>
          <strong>Current reality:</strong> Small-scale quantum networks
          already exist — China's Micius satellite has demonstrated
          entanglement distribution over 1,200 km, and metropolitan-area
          quantum networks are operating in several cities for research and
          early commercial use. A truly global quantum internet, however,
          would require <strong>quantum repeaters</strong> — devices that
          extend entanglement over long distances without measuring (and
          thus destroying) it — which remain an active area of research.
        </p>
        <p>
          <strong>Realistic timeline:</strong> Metropolitan and regional
          quantum networks are likely within the next 5–10 years. A
          continental or global quantum internet is a multi-decade prospect,
          dependent on quantum repeater breakthroughs.
        </p>

        <h2>2. Quantum AI</h2>
        <p>
          <strong>Quantum AI</strong> refers to the intersection of quantum
          computing and machine learning — either using quantum computers to
          accelerate parts of AI training and inference, or using classical
          AI to help design and control quantum hardware.
        </p>
        <p>
          <strong>What's promising:</strong> Certain linear algebra operations
          that underpin machine learning (like matrix manipulations) have
          theoretical quantum speedups. Quantum computers may also be
          naturally suited to modeling certain probabilistic systems that
          appear in generative AI. Separately, classical AI is already being
          used today to help design better qubit layouts, calibrate quantum
          hardware, and even discover new quantum error-correcting codes.
        </p>
        <p>
          <strong>What's overhyped:</strong> Claims that quantum computers
          will soon "supercharge" large language models or replace GPUs for
          mainstream AI training are not well-supported by current research.
          Most quantum machine learning speedups proven so far apply to
          narrow, structured problems — not the messy, large-scale data that
          dominates today's AI workloads.
        </p>
        <p>
          <strong>Realistic timeline:</strong> The "classical AI helping
          build quantum computers" direction is already happening today. Genuine
          quantum speedups for mainstream AI training remain speculative, with
          no clear timeline — this is an area where the gap between research
          interest and proven practical results is unusually wide.
        </p>

        <h2>3. Quantum Medicine</h2>
        <p>
          Quantum computing's most scientifically grounded near-term
          application may be in medicine and drug discovery — directly
          related to Feynman's original insight that quantum computers are
          naturally suited to simulating quantum systems, and molecules are
          quantum systems.
        </p>
        <p>
          <strong>What's promising:</strong> Simulating how candidate drug
          molecules interact with target proteins is extremely
          computationally expensive classically, because electron behavior is
          fundamentally quantum mechanical. Quantum computers — even
          relatively small, near-term ones — may be able to simulate small
          molecules more accurately than classical approximations allow,
          potentially accelerating the early stages of drug discovery.
        </p>
        <p>
          <strong>Current reality:</strong> Pharmaceutical companies and
          quantum computing companies have active partnerships exploring this
          space, but demonstrated quantum advantage for real drug discovery
          problems (as opposed to toy molecules) has not yet been achieved.
          Most current work uses NISQ-era hybrid algorithms like VQE on small
          test cases.
        </p>
        <p>
          <strong>Realistic timeline:</strong> Many researchers consider
          quantum-accelerated molecular simulation one of the more plausible
          "first practical use cases" for quantum computing, potentially
          emerging within the next decade as hardware error rates improve —
          though predictions in this space have historically been optimistic.
        </p>

        <h2>4. Quantum Cybersecurity</h2>
        <p>
          Quantum computing's relationship with cybersecurity cuts both ways:
          it's simultaneously a long-term threat to current encryption and the
          source of fundamentally new security tools.
        </p>
        <p>
          <strong>The threat:</strong> As covered in our{" "}
          <Link href="/learn/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>{" "}
          article, a sufficiently powerful quantum computer could break
          RSA and related encryption schemes that protect most of today's
          internet traffic. This motivates the "harvest now, decrypt later"
          concern, where encrypted data is being collected today for
          decryption once quantum computers mature.
        </p>
        <p>
          <strong>The opportunity:</strong>{" "}
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            Post-quantum cryptography
          </Link>{" "}
          provides classical defenses against this threat, while quantum key
          distribution offers a fundamentally different approach — using the
          physics of quantum measurement itself to detect eavesdropping,
          rather than relying on mathematical hardness assumptions.
        </p>
        <p>
          <strong>Realistic timeline:</strong> Post-quantum cryptography
          standards already exist (finalized by NIST in 2024) and
          organizations are actively migrating critical systems now. Quantum
          key distribution is commercially available today for specific
          high-security use cases (government, finance) but remains too
          expensive and infrastructure-intensive for mainstream adoption.
        </p>

        <h2>5. Quantum Space Research</h2>
        <p>
          Space and quantum technology intersect in several concrete ways,
          some already operational today.
        </p>
        <p>
          <strong>Quantum communication satellites:</strong> China's Micius
          satellite has already demonstrated intercontinental quantum key
          distribution, suggesting satellites may be a practical path toward
          global-scale quantum networking — avoiding the signal loss that
          limits ground-based fiber optic entanglement distribution.
        </p>
        <p>
          <strong>Quantum sensing for navigation:</strong> Quantum sensors —
          devices exploiting quantum mechanical precision — are being
          developed for GPS-independent navigation, which would be valuable
          for deep space missions or GPS-denied environments.
        </p>
        <p>
          <strong>Simulating extreme physics:</strong> Quantum computers may
          eventually help simulate extreme astrophysical conditions (like the
          interior of stars or behavior near black holes) that are
          governed by quantum mechanics but too complex for classical
          simulation.
        </p>
        <p>
          <strong>Realistic timeline:</strong> Quantum satellite
          communication is already demonstrated and likely to expand over the
          next decade. Quantum sensing applications for navigation are
          progressing steadily. Large-scale astrophysical simulation remains
          a long-term, speculative application.
        </p>

        <h2>Taking these predictions with the right amount of salt</h2>
        <p>
          Quantum computing has a history of both genuine breakthroughs and
          overhyped claims. A useful filter: predictions grounded in specific,
          named algorithms and demonstrated small-scale experiments (like
          quantum simulation for chemistry, or quantum key distribution) tend
          to be more reliable than predictions about quantum computers
          transforming broad, undefined fields (like "quantum AI will
          revolutionize everything"). The articles on this site try to flag
          this distinction explicitly wherever possible.
        </p>

        <h2>Frequently Asked Questions</h2>
        <h3>Which of these predictions is most likely to happen first?</h3>
        <p>
          Among the five areas discussed, quantum-enhanced molecular
          simulation for chemistry and materials science, along with
          continued post-quantum cryptography adoption, are generally viewed
          by researchers as the most near-term and well-grounded.
        </p>
        <h3>Is the "quantum internet" the same as today's internet, but faster?</h3>
        <p>
          No — a quantum internet would not replace the classical internet
          for general data transfer. It would be a complementary network
          specifically for distributing entanglement and enabling
          quantum-specific applications like provably secure key exchange.
        </p>
        <h3>Should businesses prepare for these changes now?</h3>
        <p>
          For cybersecurity specifically, yes — migrating to post-quantum
          cryptography is a concrete, actionable step many organizations are
          already taking. For the other areas (AI, medicine, networking),
          most experts recommend monitoring developments and identifying
          potential use cases, rather than expecting near-term operational
          impact.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <h2 className="font-serif text-xl font-semibold text-ink mb-4">
          Build the foundation first
        </h2>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center — understand the fundamentals</Link>
          <Link href="/learn/shors-algorithm" className="text-quantum hover:underline">→ Shor's Algorithm — the cybersecurity connection</Link>
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">→ Post-Quantum Cryptography</Link>
          <Link href="/timeline" className="text-quantum hover:underline">→ Timeline — how we got here</Link>
        </div>
      </div>
    </article>
  );
}
