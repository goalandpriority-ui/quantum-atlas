import Link from "next/link";

export const metadata = {
  title: "Quantum Computing in Movies & Pop Culture | QuantumAtlas",
  description:
    "How quantum computing gets portrayed (and misrepresented) in films, TV shows, and pop culture — from Ant-Man to Devs.",
};

const entries = [
  {
    title: "Ant-Man and the Wasp: Quantumania (2023)",
    category: "Film",
    claim: "The 'Quantum Realm' is depicted as a subatomic universe you can physically shrink into and explore, complete with its own civilizations and physics.",
    reality:
      "Quantum mechanics describes the behavior of particles at very small scales — it isn't a physical place you travel to. There's no 'Quantum Realm' to shrink into; quantum effects are mathematical descriptions of probability and behavior, not a parallel dimension.",
    verdict: "Pure fiction",
    color: "text-collapse",
  },
  {
    title: "Devs (2020, TV series)",
    category: "TV Series",
    claim: "A secretive tech company builds a quantum computer powerful enough to perfectly simulate the past and predict the future with complete determinism.",
    reality:
      "This conflates quantum computing's probabilistic nature with deterministic prediction — actually the opposite of how quantum mechanics works. Quantum computers excel at problems involving probability and superposition, not perfect deterministic forecasting. Devs is visually beautiful but scientifically more philosophy than physics.",
    verdict: "Creative license, but thoughtfully wrong",
    color: "text-collapse",
  },
  {
    title: "Avengers: Endgame (2019)",
    category: "Film",
    claim: "Time travel is achieved through the 'Quantum Realm,' borrowing terminology from Ant-Man's quantum physics.",
    reality:
      "As with Quantumania, this uses 'quantum' as a buzzword for 'mysterious physics that enables time travel' rather than anything connected to actual quantum mechanics or quantum computing.",
    verdict: "Quantum as magic word",
    color: "text-collapse",
  },
  {
    title: "Sneakers (1992)",
    category: "Film",
    claim: "A mathematician builds a device that can break all encryption — a plot device decades ahead of practical quantum computing discussions.",
    reality:
      "Surprisingly prescient in spirit — Sneakers predates Shor's Algorithm (1994) but anticipates the real concern that a sufficiently powerful computer could break public-key cryptography. The mechanism shown isn't quantum-specific, but the underlying anxiety mirrors today's genuine post-quantum cryptography concerns.",
    verdict: "Accidentally ahead of its time",
    color: "text-quantum",
  },
  {
    title: "Travelers (2016, TV series)",
    category: "TV Series",
    claim: "Future humans send consciousness back in time using quantum technology to inhabit people in the present.",
    reality:
      "No connection to actual quantum computing principles — 'quantum' is used as scientific-sounding justification for consciousness transfer, a concept with no basis in quantum information theory.",
    verdict: "Quantum as magic word",
    color: "text-collapse",
  },
  {
    title: "The Big Bang Theory (2007–2019)",
    category: "TV Series",
    claim: "Sheldon Cooper frequently references quantum mechanics and string theory in technically accurate but often comedically exaggerated ways.",
    reality:
      "The show's writers consulted physicists (including UCLA's David Saltzberg), so specific terminology is often genuinely accurate, even when used for comedic effect. It doesn't focus on quantum computing specifically, but the quantum mechanics references are unusually well-researched for sitcom television.",
    verdict: "Surprisingly accurate (for a sitcom)",
    color: "text-quantum",
  },
  {
    title: "Quantum of Solace (2008)",
    category: "Film",
    claim: "James Bond film title uses 'quantum' as the name of a sinister organization — purely a branding choice.",
    reality:
      "Zero connection to quantum mechanics or computing — 'Quantum' here is just an evocative organization name, continuing a long tradition of films borrowing scientific-sounding words for dramatic effect without any technical content.",
    verdict: "Title only — no science involved",
    color: "text-ink-muted",
  },
  {
    title: "Spider-Man: No Way Home (2021)",
    category: "Film",
    claim: "A multiverse-opening spell is partially blamed on 'quantum' instability after the Quantumania-adjacent universe-hopping established elsewhere in the MCU.",
    reality:
      "Continues the MCU pattern of using 'quantum' as a catch-all justification for multiverse and reality-bending plot devices, disconnected from quantum computing or quantum mechanics as actually understood by physicists.",
    verdict: "Quantum as magic word",
    color: "text-collapse",
  },
];

const verdictCounts = {
  "Pure fiction": entries.filter(e => e.verdict === "Pure fiction").length,
  "Quantum as magic word": entries.filter(e => e.verdict === "Quantum as magic word").length,
  "Surprisingly accurate": entries.filter(e => e.verdict.includes("Surprisingly") || e.verdict.includes("ahead")).length,
};

export default function PopCulturePage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Fact-Checking Fiction
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing in Movies &amp; Pop Culture
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Hollywood loves the word "quantum" — it sounds scientific, mysterious,
        and powerful. Here's how {entries.length} films and shows actually
        stack up against real quantum mechanics and quantum computing.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-2xl">
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-collapse">{verdictCounts["Quantum as magic word"]}</p>
          <p className="text-xs text-ink-muted">Use "quantum" as a magic word</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-quantum">{verdictCounts["Surprisingly accurate"]}</p>
          <p className="text-xs text-ink-muted">Surprisingly grounded</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4 text-center">
          <p className="font-mono text-2xl font-bold text-ink-muted">{entries.length}</p>
          <p className="text-xs text-ink-muted">Total fact-checked</p>
        </div>
      </div>

      <div className="space-y-5">
        {entries.map((e) => (
          <div key={e.title} className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wide text-ink-soft">{e.category}</span>
                <h2 className="font-serif text-lg font-semibold text-ink mt-0.5">{e.title}</h2>
              </div>
              <span className={`font-mono text-[11px] uppercase tracking-wide rounded-full px-2.5 py-1 shrink-0 ${e.color} bg-paper border border-line`}>
                {e.verdict}
              </span>
            </div>
            <p className="text-sm text-ink mb-2">
              <span className="font-semibold">The claim: </span>
              <span className="text-ink-muted">{e.claim}</span>
            </p>
            <p className="text-sm text-ink">
              <span className="font-semibold text-quantum">Reality: </span>
              <span className="text-ink-muted">{e.reality}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Want the real science?</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/myths" className="text-quantum hover:underline">→ 30 Quantum Computing Myths, Debunked</Link>
          <Link href="/learn" className="text-quantum hover:underline">→ Learning Center — start from the basics</Link>
          <Link href="/dictionary/superposition" className="text-quantum hover:underline">→ What superposition actually is</Link>
        </div>
      </div>
    </div>
  );
}
