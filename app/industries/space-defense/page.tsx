import Link from "next/link";

export const metadata = {
  title: "Quantum Computing for Space & Defense | QuantumAtlas",
  description:
    "How quantum technologies — sensing, cryptography, and computing — are reshaping defense and space applications globally.",
};

export default function SpaceDefensePage() {
  return (
    <article className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Industry · Active Investment
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-6 max-w-3xl">
        Quantum Computing for Space & Defense
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-12">
        Defense agencies are the largest government investors in quantum technology globally — not primarily for quantum computing, but for quantum sensing and quantum cryptography, both of which are more mature and offer nearer-term military advantage.
      </p>

      <div className="prose-quantum max-w-2xl">
        <h2>Quantum sensing — the most mature application</h2>
        <p>
          Quantum sensing uses quantum mechanical effects to measure physical quantities with extraordinary precision — far beyond classical instruments. Defense applications include GPS-independent navigation (quantum accelerometers and gyroscopes), submarine detection via quantum gravimeters, and extremely sensitive radar. Unlike quantum computing, quantum sensing is already commercially deployed in some contexts (atomic clocks, quantum magnetometers).
        </p>
        <p>
          DARPA, IARPA, the UK's Defence Science and Technology Laboratory, and China's military research arms have all classified quantum sensing as a near-term strategic priority. The US, UK, and Australia (through AUKUS) have explicit quantum sensing cooperation programs.
        </p>

        <h2>Post-quantum cryptography — urgent priority</h2>
        <p>
          Defense organizations encrypt classified communications using public-key cryptography (RSA, elliptic curve) that would be broken by a large fault-tolerant quantum computer running{" "}
          <Link href="/algorithms/shors-algorithm" className="text-quantum hover:underline">
            Shor's Algorithm
          </Link>
          . The "harvest now, decrypt later" threat — adversaries collecting encrypted military communications today for future decryption — makes this an immediate concern, not a future one.
        </p>
        <p>
          The NSA issued a mandate in 2022 requiring US national security systems to transition to post-quantum cryptography. GCHQ in the UK and equivalent agencies globally are running similar programs. This is the most operationally urgent quantum technology for defense.
        </p>

        <h2>Quantum key distribution for secure communications</h2>
        <p>
          Several nations are deploying quantum key distribution networks for military and government communications.{" "}
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">
            QKD
          </Link>{" "}
          provides physics-guaranteed security — any interception attempt is detectable. China's Micius satellite demonstrated intercontinental QKD in 2017 and has continued to extend the network. The US, EU, and UK are building domestic QKD infrastructure for high-security government communications.
        </p>

        <h2>Quantum computing for defense — longer term</h2>
        <p>
          Quantum computing applications for defense include logistics optimization (routing supply chains and mission planning), materials simulation for developing new alloys and explosives, and intelligence analysis. However, these applications generally require more capable hardware than currently exists, making them medium-to-long-term investments.
        </p>

        <h2>Space applications</h2>
        <p>
          Space agencies including NASA and ESA are exploring quantum computing for trajectory optimization, satellite constellation scheduling, and Earth observation data processing. Quantum sensing has the clearest near-term space application — quantum gravimeters aboard satellites could map Earth's gravitational field with unprecedented precision, enabling better underground resource detection and early earthquake warning.
        </p>

        <h2>Realistic timeline</h2>
        <p>
          Quantum sensing: deployable now, improving rapidly. Post-quantum cryptography migration: urgent, should be in progress now. QKD networks: active deployment in high-security contexts. Quantum computing for defense optimization and simulation: 10-20 year horizon for meaningful advantage.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Keep exploring</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/cybersecurity" className="text-quantum hover:underline">→ Quantum for Cybersecurity</Link>
          <Link href="/algorithms/bb84-protocol" className="text-quantum hover:underline">→ BB84 QKD Protocol</Link>
          <Link href="/dictionary/post-quantum-cryptography" className="text-quantum hover:underline">→ Post-Quantum Cryptography</Link>
          <Link href="/countries" className="text-quantum hover:underline">→ Global Quantum Investment by Country</Link>
          <Link href="/industries" className="text-quantum hover:underline">← All Industries</Link>
        </div>
      </div>
    </article>
  );
}
