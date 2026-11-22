"use client";

import { ReactNode } from "react";

export const cn = (...c: (string | false | undefined | null)[]) => c.filter(Boolean).join(" ");

const SUP: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻",
};

export function sup(n: number): string {
  return String(n)
    .split("")
    .map((c) => SUP[c] ?? c)
    .join("");
}

/** Compact number formatting with scientific notation for very large or small values. */
export function fmt(n: number, digits = 3): string {
  if (Number.isNaN(n)) return "n/a";
  if (!Number.isFinite(n)) return n > 0 ? "∞" : "−∞";
  if (n === 0) return "0";
  const a = Math.abs(n);
  if (a >= 1e9 || a < 1e-3) {
    const e = Math.floor(Math.log10(a));
    const m = n / Math.pow(10, e);
    return `${m.toFixed(Math.max(0, digits - 1))}×10${sup(e)}`;
  }
  if (a >= 1000) return Math.round(n).toLocaleString("en-US");
  if (a >= 100) return n.toFixed(1);
  if (a >= 10) return n.toFixed(2);
  return n.toPrecision(digits);
}

export function fmtPercent(p: number, digits = 2): string {
  if (!Number.isFinite(p)) return "n/a";
  const v = p * 100;
  if (v !== 0 && Math.abs(v) < 0.01) return `${fmt(v, 2)}%`;
  return `${v.toFixed(digits)}%`;
}

const YEAR = 365.25 * 24 * 3600;

export function fmtDuration(seconds: number): string {
  if (!Number.isFinite(seconds)) return "effectively never";
  if (seconds < 0) return "n/a";
  if (seconds < 1e-6) return `${fmt(seconds * 1e9)} ns`;
  if (seconds < 1e-3) return `${fmt(seconds * 1e6)} µs`;
  if (seconds < 1) return `${fmt(seconds * 1e3)} ms`;
  if (seconds < 60) return `${fmt(seconds)} seconds`;
  if (seconds < 3600) return `${fmt(seconds / 60)} minutes`;
  if (seconds < 86400) return `${fmt(seconds / 3600)} hours`;
  if (seconds < YEAR) return `${fmt(seconds / 86400)} days`;
  const years = seconds / YEAR;
  if (years < 1e6) return `${fmt(years)} years`;
  const universe = years / 1.38e10;
  if (universe < 1e3) return `${fmt(years)} years (${fmt(universe)}× the age of the universe)`;
  return `${fmt(years)} years (${fmt(universe)}× the age of the universe)`;
}

export function fmtBytes(bytes: number): string {
  if (!Number.isFinite(bytes)) return "n/a";
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let v = bytes;
  let i = 0;
  while (v >= 1000 && i < units.length - 1) {
    v /= 1000;
    i++;
  }
  if (i === units.length - 1 && v >= 1000) return `${fmt(v)} ${units[i]}`;
  return `${v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2)} ${units[i]}`;
}

export function clamp(v: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, v));
}

/* ---------- Layout pieces ---------- */

export function CalcCard({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-line bg-surface p-5 md:p-7">{children}</div>;
}

export function Panel({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-4">
      {title && <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-3">{title}</p>}
      {children}
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
  tone = "neutral",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "neutral" | "good" | "warn" | "bad";
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-500/40"
      : tone === "warn"
      ? "border-amber-500/40"
      : tone === "bad"
      ? "border-rose-500/40"
      : "border-line";
  return (
    <div className={cn("rounded-xl border bg-quantum-50 p-4", toneClass)}>
      <p className="font-mono text-[11px] uppercase tracking-wide text-quantum mb-1">{label}</p>
      <p className="font-mono text-xl md:text-2xl font-bold text-ink break-words">{value}</p>
      {sub && <p className="text-xs text-ink-muted mt-1 leading-relaxed">{sub}</p>}
    </div>
  );
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "good" | "warn" | "bad";
  title?: string;
  children: ReactNode;
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-500/50"
      : tone === "warn"
      ? "border-amber-500/50"
      : tone === "bad"
      ? "border-rose-500/50"
      : "border-quantum/50";
  return (
    <div className={cn("rounded-lg border-l-4 bg-surface px-4 py-3 text-sm leading-relaxed text-ink-muted", toneClass)}>
      {title && <p className="font-semibold text-ink mb-1">{title}</p>}
      {children}
    </div>
  );
}

/* ---------- Inputs ---------- */

export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
  format,
  log = false,
  help,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  format?: (v: number) => string;
  log?: boolean;
  help?: string;
}) {
  const shown = format ? format(value) : String(value);
  const toPos = (v: number) => (log ? (Math.log(v / min) / Math.log(max / min)) * 1000 : v);
  const fromPos = (p: number) => {
    if (log) return min * Math.pow(max / min, p / 1000);
    return p;
  };
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-ink mb-1">
        {label}: <span className="font-mono text-quantum">{shown}</span>
        {unit && <span className="text-ink-soft"> {unit}</span>}
      </label>
      <input
        type="range"
        min={log ? 0 : min}
        max={log ? 1000 : max}
        step={log ? 1 : step}
        value={toPos(clamp(value, min, max))}
        onChange={(e) => {
          const raw = fromPos(Number(e.target.value));
          onChange(log ? raw : Math.round(raw / step) * step);
        }}
        className="w-full accent-quantum"
        aria-label={label}
      />
      {help && <p className="text-xs text-ink-soft mt-1 leading-relaxed">{help}</p>}
    </div>
  );
}

export function NumberField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  help,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number | "any";
  unit?: string;
  help?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-ink mb-1">
        {label}
        {unit && <span className="text-ink-soft"> ({unit})</span>}
      </label>
      <input
        type="number"
        value={Number.isFinite(value) ? value : ""}
        min={min}
        max={max}
        step={step ?? "any"}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (e.target.value === "" || Number.isNaN(v)) return;
          onChange(min !== undefined && max !== undefined ? clamp(v, min, max) : v);
        }}
        className="w-full rounded-lg border border-line bg-transparent px-3 py-2 text-sm font-mono text-ink focus:outline-none focus:border-quantum"
      />
      {help && <p className="text-xs text-ink-soft mt-1 leading-relaxed">{help}</p>}
    </div>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  help,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  help?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-ink mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink focus:outline-none focus:border-quantum"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {help && <p className="text-xs text-ink-soft mt-1 leading-relaxed">{help}</p>}
    </div>
  );
}

export function PresetRow({ presets }: { presets: { label: string; apply: () => void }[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft self-center mr-1">Presets</span>
      {presets.map((p) => (
        <button
          key={p.label}
          type="button"
          onClick={p.apply}
          className="px-3 py-1.5 rounded-full border border-line text-xs font-mono text-ink-muted hover:text-quantum hover:border-quantum"
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- Charts ---------- */

export type Point = { x: number; y: number };
export type Series = { name: string; color: string; points: Point[]; dashed?: boolean };

function niceTicks(min: number, max: number, count = 5): number[] {
  if (!(max > min)) return [min];
  const raw = (max - min) / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm >= 5 ? 10 : norm >= 2 ? 5 : norm >= 1 ? 2 : 1) * mag;
  const start = Math.ceil(min / step) * step;
  const ticks: number[] = [];
  for (let v = start; v <= max + step * 1e-6; v += step) ticks.push(Number(v.toPrecision(12)));
  return ticks;
}

function logTicks(min: number, max: number): number[] {
  const lo = Math.floor(Math.log10(min));
  const hi = Math.ceil(Math.log10(max));
  const out: number[] = [];
  const stride = Math.max(1, Math.ceil((hi - lo) / 7));
  for (let e = lo; e <= hi; e += stride) out.push(Math.pow(10, e));
  return out;
}

function tickLabel(v: number): string {
  const a = Math.abs(v);
  if (a !== 0 && (a >= 1e5 || a < 1e-2)) {
    const e = Math.round(Math.log10(a));
    const m = v / Math.pow(10, e);
    return Math.abs(m - 1) < 1e-9 ? `10${sup(e)}` : `${m.toFixed(1)}×10${sup(e)}`;
  }
  return Number(v.toPrecision(4)).toString();
}

export function LineChart({
  series,
  xLabel,
  yLabel,
  xLog = false,
  yLog = false,
  yMin,
  yMax,
  xMin,
  xMax,
  marker,
  hLines,
  height = 280,
}: {
  series: Series[];
  xLabel: string;
  yLabel: string;
  xLog?: boolean;
  yLog?: boolean;
  yMin?: number;
  yMax?: number;
  xMin?: number;
  xMax?: number;
  marker?: { x: number; label: string };
  hLines?: { y: number; label: string; color?: string }[];
  height?: number;
}) {
  const W = 640;
  const H = height;
  const pad = { l: 64, r: 18, t: 16, b: 46 };
  const all = series.flatMap((s) => s.points).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y) && (!xLog || p.x > 0) && (!yLog || p.y > 0));
  if (all.length === 0) {
    return <div className="text-sm text-ink-soft">No data to plot.</div>;
  }
  const xs = all.map((p) => p.x);
  const ys = all.map((p) => p.y);
  let x0 = xMin ?? Math.min(...xs);
  let x1 = xMax ?? Math.max(...xs);
  let y0 = yMin ?? Math.min(...ys, ...(hLines ?? []).map((h) => h.y));
  let y1 = yMax ?? Math.max(...ys, ...(hLines ?? []).map((h) => h.y));
  if (x0 === x1) x1 = x0 + 1;
  if (y0 === y1) y1 = y0 + 1;
  const tx = (x: number) => (xLog ? Math.log10(x) : x);
  const ty = (y: number) => (yLog ? Math.log10(y) : y);
  const sx = (x: number) => pad.l + ((tx(x) - tx(x0)) / (tx(x1) - tx(x0))) * (W - pad.l - pad.r);
  const sy = (y: number) => H - pad.b - ((ty(y) - ty(y0)) / (ty(y1) - ty(y0))) * (H - pad.t - pad.b);
  const xt = xLog ? logTicks(x0, x1) : niceTicks(x0, x1, 6);
  const yt = yLog ? logTicks(y0, y1) : niceTicks(y0, y1, 5);
  const inX = (v: number) => v >= x0 * (xLog ? 0.999 : 1) - 1e-12 && v <= x1 * (xLog ? 1.001 : 1) + 1e-12;
  const inY = (v: number) => v >= y0 * (yLog ? 0.999 : 1) - 1e-12 && v <= y1 * (yLog ? 1.001 : 1) + 1e-12;
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`${yLabel} versus ${xLabel}`}>
        <rect x={pad.l} y={pad.t} width={W - pad.l - pad.r} height={H - pad.t - pad.b} fill="none" stroke="currentColor" opacity={0.15} />
        {yt.filter(inY).map((v) => (
          <g key={`y${v}`}>
            <line x1={pad.l} x2={W - pad.r} y1={sy(v)} y2={sy(v)} stroke="currentColor" opacity={0.08} />
            <text x={pad.l - 6} y={sy(v) + 4} textAnchor="end" fontSize={10} fill="currentColor" opacity={0.7}>
              {tickLabel(v)}
            </text>
          </g>
        ))}
        {xt.filter(inX).map((v) => (
          <g key={`x${v}`}>
            <line x1={sx(v)} x2={sx(v)} y1={pad.t} y2={H - pad.b} stroke="currentColor" opacity={0.08} />
            <text x={sx(v)} y={H - pad.b + 16} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>
              {tickLabel(v)}
            </text>
          </g>
        ))}
        {(hLines ?? []).filter((h) => inY(h.y)).map((h) => (
          <g key={h.label}>
            <line x1={pad.l} x2={W - pad.r} y1={sy(h.y)} y2={sy(h.y)} stroke={h.color ?? "#e11d48"} strokeDasharray="5 4" opacity={0.8} />
            <text x={W - pad.r - 4} y={sy(h.y) - 4} textAnchor="end" fontSize={10} fill={h.color ?? "#e11d48"}>
              {h.label}
            </text>
          </g>
        ))}
        {marker && marker.x >= x0 && marker.x <= x1 && (
          <g>
            <line x1={sx(marker.x)} x2={sx(marker.x)} y1={pad.t} y2={H - pad.b} stroke="#7c3aed" strokeDasharray="4 3" opacity={0.9} />
            <text x={Math.min(sx(marker.x) + 4, W - 80)} y={pad.t + 12} fontSize={10} fill="#7c3aed">
              {marker.label}
            </text>
          </g>
        )}
        {series.map((s) => {
          const pts = s.points.filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y) && (!xLog || p.x > 0) && (!yLog || p.y > 0));
          const clampY = (y: number) => Math.min(Math.max(y, y0), y1);
          const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(clampY(p.y)).toFixed(1)}`).join(" ");
          return <path key={s.name} d={d} fill="none" stroke={s.color} strokeWidth={2.2} strokeDasharray={s.dashed ? "6 4" : undefined} />;
        })}
        <text x={(pad.l + W - pad.r) / 2} y={H - 6} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.8}>
          {xLabel}
        </text>
        <text x={14} y={(pad.t + H - pad.b) / 2} textAnchor="middle" fontSize={11} fill="currentColor" opacity={0.8} transform={`rotate(-90 14 ${(pad.t + H - pad.b) / 2})`}>
          {yLabel}
        </text>
      </svg>
      {series.length > 1 && (
        <div className="flex flex-wrap gap-4 mt-2 text-xs text-ink-muted">
          {series.map((s) => (
            <span key={s.name} className="inline-flex items-center gap-1.5">
              <span className="inline-block w-4 h-0.5" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function BarList({
  items,
  format,
  max,
}: {
  items: { label: string; value: number; color?: string; note?: string }[];
  format: (v: number) => string;
  max?: number;
}) {
  const m = max ?? Math.max(...items.map((i) => i.value), 1e-12);
  return (
    <div className="space-y-2">
      {items.map((i) => (
        <div key={i.label}>
          <div className="flex justify-between text-xs text-ink-muted mb-0.5">
            <span>{i.label}</span>
            <span className="font-mono text-ink">{format(i.value)}</span>
          </div>
          <div className="h-3 rounded-full bg-line/40 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${Math.max(1, Math.min(100, (i.value / m) * 100))}%`, background: i.color ?? "#7c3aed" }} />
          </div>
          {i.note && <p className="text-[11px] text-ink-soft mt-0.5">{i.note}</p>}
        </div>
      ))}
    </div>
  );
        }
        
