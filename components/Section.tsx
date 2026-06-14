import { ReactNode } from "react";
import Link from "next/link";

export function SectionHeader({
  eyebrow,
  title,
  href,
  hrefLabel,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-1">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="text-sm font-medium text-quantum hover:underline whitespace-nowrap"
        >
          {hrefLabel ?? "View all →"}
        </Link>
      )}
    </div>
  );
}

export function Card({
  href,
  children,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const base = `block rounded-xl border border-line bg-surface p-5 transition-all hover:border-quantum hover:shadow-[0_4px_20px_-8px_rgba(52,84,209,0.35)] ${className}`;
  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}
