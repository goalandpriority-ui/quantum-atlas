import Link from "next/link";

export const metadata = {
  title: "Quantum Computing vs Blockchain | QuantumAtlas",
  description:
    "How quantum computing threatens — and might eventually help — blockchain technology, and what 'quantum-resistant' blockchains actually means.",
};

export default function QuantumVsBlockchainPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Comparison
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6">
        Quantum Computing vs Blockchain
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        Unlike our other comparison pages, quantum computing and blockchain
        aren't really alternatives to each other — they're two unrelated
        technologies with an important intersection: quantum computers
        pose a genuine future threat to how most blockchains currently
        secure themselves.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>What blockchain actually relies on</h2>
        <p>
          Blockchains like Bitcoin and Ethereum depend on two distinct
          cryptographic building blocks: hash functions (used in mining
          and linking blocks together) and public-key cryptography
          (specifically elliptic curve cryptography, used to secure
          wallets and sign transactions). These are two separate systems
          with very different vulnerability profiles when it comes to
          quantum computing.
        </p>

        <h2>The wallet security threat</h2>
        <p>
          Public-key cryptography — the system protecting your wallet's
          private key — is directly vulnerable to{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>
          . A sufficiently large, fault-tolerant quantum computer could, in
          principle, derive a wallet's private key from its public key,
          which is often visible on the blockchain once a transaction has
          been made. This is the same fundamental threat discussed in our{" "}
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">
            Cybersecurity industry coverage
          </Link>
          , applied specifically to cryptocurrency wallets.
        </p>

        <h2>Mining and hash functions are more resistant</h2>
        <p>
          Proof-of-work mining relies on hash functions (like SHA-256),
          which are far more resistant to quantum attack than public-key
          cryptography. Grover's Algorithm offers only a quadratic
          speedup against hash functions — which can be straightforwardly
          countered by doubling the hash output length, unlike the
          exponential threat Shor's Algorithm poses to public-key systems.
          See our{" "}
          <Link href="/algorithms/grovers-algorithm" className="text-quantum hover:underline">
            Grover's Algorithm
          </Link>{" "}
          entry for more on this distinction.
        </p>

        <h2>The "harvest now, decrypt later" risk for crypto wallets</h2>
        <p>
          As covered in our{" "}
          <Link href="/dictionary/harvest-now-decrypt-later" className="text-quantum hover:underline">
            Harvest Now, Decrypt Later
          </Link>{" "}
          entry, an adversary could record blockchain transaction data
          today — including exposed public keys — and wait for
          sufficiently powerful quantum computers to exist before
          attempting to derive private keys. Wallets that have never moved
          funds (where only a hashed address, not the public key, is
          exposed) are considered more protected under current
          understanding, but this remains an active area of cryptographic
          research.
        </p>

        <h2>What "quantum-resistant blockchain" actually means</h2>
        <p>
          Several blockchain projects market themselves as
          "quantum-resistant" or "quantum-proof." In practice, this
          typically means adopting{" "}
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">
            post-quantum cryptographic
          </Link>{" "}
          signature schemes — the same NIST-standardized algorithms
          (like CRYSTALS-Dilithium) being adopted across the broader
          cybersecurity industry — rather than anything blockchain-specific
          or quantum-computing-based itself. The "quantum" in
          "quantum-resistant" describes what it resists, not any quantum
          technology being used.
        </p>

        <h2>Quantum computing doesn't help blockchain mining</h2>
        <p>
          A common misconception worth addressing directly: quantum
          computers do not meaningfully accelerate proof-of-work mining in
          a way that would be practically advantageous. Grover's quadratic
          speedup against hash functions is real but modest, and current
          and near-term quantum hardware is vastly slower per-operation
          than specialized classical mining hardware (ASICs). There's no
          credible scenario where quantum computers make blockchain mining
          more efficient in the near term.
        </p>

        <h2>Realistic timeline for blockchain migration</h2>
        <p>
          Major blockchain projects are at varying stages of
          quantum-resistance planning — some have research proposals for
          post-quantum signature schemes, but widespread migration faces
          the same coordination challenges discussed in our broader{" "}
          <Link href="/research/post-quantum-migration-case-study" className="text-quantum hover:underline">
            post-quantum migration research
          </Link>
          , compounded by blockchain's decentralized governance making
          coordinated upgrades more complex than in centralized
          organizations.
        </p>

        <h2>Side-by-side comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Blockchain</th>
              <th>Quantum Computing's relevance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wallet security (ECC)</td>
              <td>Currently industry standard</td>
              <td>Vulnerable to Shor's Algorithm on large fault-tolerant hardware</td>
            </tr>
            <tr>
              <td>Mining (hash functions)</td>
              <td>Proof-of-work consensus</td>
              <td>Only modest quadratic threat from Grover's Algorithm, easily mitigated</td>
            </tr>
            <tr>
              <td>"Quantum-resistant" claims</td>
              <td>Marketing term used by some projects</td>
              <td>Usually means adopting standard post-quantum cryptography, not quantum tech itself</td>
            </tr>
            <tr>
              <td>Timeline of concern</td>
              <td colSpan={2}>Long-term (15-30+ years for practical Shor's Algorithm attacks) but migration planning is reasonable now</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>
        <h3>Should I be worried about my cryptocurrency right now?</h3>
        <p>
          Not urgently — no quantum computer today comes close to the
          scale needed to break elliptic curve cryptography. This is a
          long-term planning consideration, similar to broader post-quantum
          cryptography migration discussed throughout this site, not an
          immediate threat.
        </p>
        <h3>Can quantum computers be used to predict cryptocurrency prices?</h3>
        <p>
          No — this conflates quantum computing's mathematical capabilities
          with financial prediction, which depends on market psychology
          and external information, not computational power. There's no
          credible mechanism by which quantum computing would make markets
          more predictable.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Related comparisons</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/quantum-vs-classical" className="text-quantum hover:underline">→ Quantum vs Classical Computing</Link>
          <Link href="/quantum-vs-supercomputers" className="text-quantum hover:underline">→ Quantum vs Supercomputers</Link>
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
        </div>
      </div>
    </article>
  );
}
