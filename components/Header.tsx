import Link from "next/link";
import BlochMark from "./BlochMark";

const nav = [
  { href: "/learn", label: "Learning Center" },
  { href: "/dictionary", label: "Dictionary" },
  { href: "/companies", label: "Companies" },
  { href: "/hardware", label: "Hardware" },
  { href: "/news", label: "News" },
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

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/80">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-quantum transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/dictionary"
          className="hidden sm:inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink/70 hover:border-quantum hover:text-quantum transition-colors"
        >
          Search |ψ⟩
        </Link>
      </div>
    </header>
  );
}
