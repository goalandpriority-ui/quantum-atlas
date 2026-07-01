import Link from "next/link";
import BlochMark from "./BlochMark";

const columns = [
  {
    title: "Learn",
    links: [
      { href: "/learn", label: "Learning Center" },
      { href: "/guide/quantum-computing-complete-guide", label: "Complete Guide" },
      { href: "/dictionary", label: "Dictionary" },
      { href: "/algorithms", label: "Algorithms" },
      { href: "/myths", label: "Myths Debunked" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Database",
    links: [
      { href: "/companies", label: "Companies" },
      { href: "/hardware", label: "Hardware" },
      { href: "/compare", label: "Compare Processors" },
      { href: "/research", label: "Research Papers" },
      { href: "/timeline", label: "Timeline" },
      { href: "/people", label: "Quantum Pioneers" },
    ],
  },
  {
    title: "Insights",
    links: [
      { href: "/industries", label: "By Industry" },
      { href: "/quantum-vs-classical", label: "Quantum vs Classical" },
      { href: "/quantum-vs-ai", label: "Quantum vs AI" },
      { href: "/quantum-vs-supercomputers", label: "Quantum vs Supercomputers" },
      { href: "/quantum-vs-blockchain", label: "Quantum vs Blockchain" },
      { href: "/future", label: "Future Predictions" },
      { href: "/countries", label: "By Country" },
      { href: "/hype-cycle", label: "Hype Cycle Tracker" },
      { href: "/investment-tracker", label: "Investment Tracker" },
      { href: "/patents", label: "Patent Filings" },
      { href: "/industry-readiness", label: "Industry Readiness" },
      { href: "/vendor-comparison", label: "Vendor Comparison" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/daily-challenge", label: "Daily Challenge 🧩" },
      { href: "/badges", label: "Badges & Achievements" },
      { href: "/news", label: "News" },
      { href: "/jobs", label: "Jobs" },
      { href: "/courses", label: "Courses" },
      { href: "/tools", label: "Calculators" },
      { href: "/circuit-builder", label: "Circuit Builder" },
      { href: "/race", label: "Quantum vs Classical Race" },
      { href: "/grovers-builder", label: "Build Grover's Algorithm" },
      { href: "/entanglement-visualizer", label: "Entanglement Visualizer" },
      { href: "/quiz", label: "Quantum Readiness Quiz" },
      { href: "/salary", label: "Salary Heatmap" },
      { href: "/glossary", label: "Acronym Glossary" },
      { href: "/pop-culture", label: "Quantum in Pop Culture" },
      { href: "/search", label: "Search" },
    ],
  },
];

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-content mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2.5 mb-3">
            <BlochMark size={26} animated={false} />
            <span className="font-serif text-lg font-semibold">
              Quantum<span className="text-quantum">Atlas</span>
            </span>
          </div>
          <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
            The open encyclopedia of quantum computing — news, research,
            companies, hardware, and interactive learning, all in one place.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-ink mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-quantum transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-content mx-auto px-6 py-6 border-t border-line text-xs text-ink-soft flex flex-col sm:flex-row justify-between gap-3">
        <span>© {new Date().getFullYear()} QuantumAtlas. Built for curious minds.</span>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-quantum transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="font-mono">|0⟩ + |1⟩</span>
      </div>
    </footer>
  );
}
