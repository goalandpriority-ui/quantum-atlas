import Link from "next/link";
import BlochMark from "./BlochMark";

const nav = [
  { href: "/learn", label: "Learning Center" },
  { href: "/dictionary", label: "Dictionary" },
  { href: "/algorithms", label: "Algorithms" },
  { href: "/companies", label: "Companies" },
  { href: "/hardware", label: "Hardware" },
  { href: "/research", label: "Research" },
  { href: "/timeline", label: "Timeline" },
  { href: "/quantum-vs-classical", label: "Quantum vs Classical" },
  { href: "/future", label: "Future" },
  { href: "/news", label: "News" },
  { href: "/courses", label: "Courses" },
  { href: "/tools", label: "Tools" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <BlochMark size={30} />
          <span className="font-serif text-xl font-semibold tracking-tight">
            Quantum<span className="text-quantum">Atlas</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink/80 overflow-x-auto scrollbar-none">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-quantum transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/dictionary"
          className="hidden sm:inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink/70 hover:border-quantum hover:text-quantum transition-colors shrink-0"
        >
          Search |ψ⟩
        </Link>
      </div>

      {/* Mobile nav - horizontal scroll */}
      <div className="md:hidden border-t border-line">
        <nav className="max-w-content mx-auto px-6 py-2.5 flex items-center gap-5 text-sm font-medium text-ink/80 overflow-x-auto scrollbar-none">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-quantum transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
