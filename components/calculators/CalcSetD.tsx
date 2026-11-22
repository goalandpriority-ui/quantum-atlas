"use client";

import { useMemo, useState } from "react";
import {
  BarList,
  CalcCard,
  Callout,
  LineChart,
  Panel,
  PresetRow,
  SelectField,
  SliderField,
  Stat,
  fmt,
  fmtBytes,
  fmtDuration,
  fmtPercent,
  type Series,
} from "./ui";

/* ---------- math helpers ---------- */

function erf(x: number): number {
  const s = x < 0 ? -1 : 1;
  const a = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * a);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-a * a);
  return s * y;
}
const normalCdf = (z: number) => 0.5 * (1 + erf(z / Math.SQRT2));
const h2 = (x: number) => (x <= 0 || x >= 1 ? 0 : -x * Math.log2(x) - (1 - x) * Math.log2(1 - x));

/* ------------------------------------------------------------------ */
/* 16. Mosca migration risk calculator                                  */
/* ------------------------------------------------------------------ */

export function MoscaCalculator() {
  const [x, setX] = useState(20);
  const [y, setY] = useState(6);
  const [mu, setMu] = useState(12);
  const [sd, setSd] = useState(5);

  const r = useMemo(() => {
    const need = x + y;
    const pExpose = normalCdf((need - mu) / Math.max(0.5, sd));
    const margin = mu - need;
    const startBy = mu - 1.645 * sd - x - y; // years from now to keep exposure under 5%
    const deadlineFor5 = mu - 1.645 * sd - x; // when migration must finish
    return { need, pExpose, margin, startBy, deadlineFor5 };
  }, [x, y, mu, sd]);

  const curve = useMemo(() => {
    const pts = [];
    for (let yy = 0; yy <= 30; yy += 0.5) pts.push({ x: yy, y: normalCdf((x + yy - mu) / Math.max(0.5, sd)) * 100 });
    return pts;
  }, [x, mu, sd]);

  const horizon = Math.max(40, r.need + 6, mu + 2 * sd + 2);
  const W = 640;
  const sx = (v: number) => 20 + (Math.min(v, horizon) / horizon) * (W - 40);
  const tone = r.pExpose < 0.05 ? "good" : r.pExpose < 0.3 ? "warn" : "bad";
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Medical records", apply: () => { setX(30); setY(5); } },
          { label: "Government secrets", apply: () => { setX(50); setY(8); } },
          { label: "Payment card data", apply: () => { setX(7); setY(3); } },
          { label: "Short-lived tokens", apply: () => { setX(0.1); setY(1); } },
          { label: "Legacy embedded fleet", apply: () => { setX(15); setY(12); } },
          { label: "Optimistic threat (8 years)", apply: () => { setMu(8); setSd(3); } },
          { label: "Cautious threat (25 years)", apply: () => { setMu(25); setSd(8); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="x: years the data must stay secret" value={x} onChange={setX} min={0} max={75} step={0.5} format={(v) => `${v} years`} help="From the moment it is encrypted. Medical, legal, and state secrets can need decades." />
          <SliderField label="y: years your migration will take" value={y} onChange={setY} min={0} max={25} step={0.5} format={(v) => `${v} years`} help="Inventory, testing, vendor updates, and replacing hardware. Large organizations often need 5 to 10 years." />
          <SliderField label="z: years until a cryptographically relevant quantum computer" value={mu} onChange={setMu} min={3} max={40} step={0.5} format={(v) => `${v} years (central guess)`} />
          <SliderField label="Uncertainty in z (standard deviation)" value={sd} onChange={setSd} min={1} max={15} step={0.5} format={(v) => `± ${v} years`} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Mosca test x + y" value={`${r.need.toFixed(1)} years`} sub={`versus z = ${mu} years`} tone={r.margin > 0 ? "good" : "bad"} />
            <Stat label="Chance of exposure" value={fmtPercent(r.pExpose, 1)} sub="Probability that z < x + y" tone={tone} />
          </div>
          <Callout tone={tone} title={r.pExpose < 0.05 ? "Comfortable" : r.pExpose < 0.3 ? "Meaningful risk" : "High risk"}>
            {r.margin > 0
              ? `On the central guess you have ${r.margin.toFixed(1)} years of slack, but the uncertainty still leaves a ${fmtPercent(r.pExpose, 1)} chance of exposure.`
              : `On the central guess you are ${(-r.margin).toFixed(1)} years late. Data encrypted during migration could be decrypted while it is still sensitive.`}
          </Callout>
          <Panel title="Planning">
            <p className="text-sm text-ink-muted leading-relaxed">
              To keep exposure under 5%, migration must finish within <span className="font-mono text-ink">{r.deadlineFor5.toFixed(1)}</span> years from now, so it should start{" "}
              {r.startBy >= 0 ? (
                <span className="font-mono text-ink">within {r.startBy.toFixed(1)} years</span>
              ) : (
                <span className="font-mono text-rose-600">{(-r.startBy).toFixed(1)} years ago</span>
              )}
              .
            </p>
          </Panel>
        </div>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Panel title="Timeline">
          <svg viewBox={`0 0 ${W} 150`} className="w-full h-auto" role="img" aria-label="Migration timeline">
            <line x1={20} x2={W - 20} y1={118} y2={118} stroke="currentColor" opacity={0.3} />
            {[0, 10, 20, 30, 40, 50, 60].filter((t) => t <= horizon).map((t) => (
              <g key={t}>
                <line x1={sx(t)} x2={sx(t)} y1={114} y2={122} stroke="currentColor" opacity={0.5} />
                <text x={sx(t)} y={138} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>{t}</text>
              </g>
            ))}
            <rect x={sx(0)} y={14} width={Math.max(2, sx(y) - sx(0))} height={22} fill="#7c3aed" opacity={0.85} rx={3} />
            <text x={sx(0) + 6} y={29} fontSize={11} fill="#fff">migration {y}y</text>
            <rect x={sx(y)} y={44} width={Math.max(2, sx(y + x) - sx(y))} height={22} fill="#f59e0b" opacity={0.85} rx={3} />
            <text x={sx(y) + 6} y={59} fontSize={11} fill="#1f2937">data must stay secret {x}y</text>
            <rect x={sx(Math.max(0, mu - 2 * sd))} y={74} width={Math.max(2, sx(mu + 2 * sd) - sx(Math.max(0, mu - 2 * sd)))} height={22} fill="#e11d48" opacity={0.25} rx={3} />
            <line x1={sx(mu)} x2={sx(mu)} y1={70} y2={100} stroke="#e11d48" strokeWidth={2} />
            <text x={Math.min(sx(mu) + 6, W - 150)} y={89} fontSize={11} fill="#e11d48">quantum threat (±2σ)</text>
            <text x={W / 2} y={150} textAnchor="middle" fontSize={10} fill="currentColor" opacity={0.7}>years from now</text>
          </svg>
          <p className="text-xs text-ink-soft mt-1">If the amber bar ends after the red line, data encrypted late in the migration can be exposed.</p>
        </Panel>
        <Panel title="Exposure probability versus migration time">
          <LineChart series={[{ name: "P(exposure)", color: "#7c3aed", points: curve }]} xLabel="Migration time y (years)" yLabel="Chance of exposure (%)" yMin={0} yMax={100} hLines={[{ y: 5, label: "5% target", color: "#16a34a" }]} marker={{ x: y, label: "you" }} />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 17. Post-quantum size and bandwidth calculator                       */
/* ------------------------------------------------------------------ */

type Kem = { label: string; client: number; server: number };
type Sig = { label: string; pk: number; sig: number };

const KEMS: Record<string, Kem> = {
  x25519: { label: "X25519 (classical)", client: 32, server: 32 },
  p256: { label: "ECDH P-256 (classical)", client: 65, server: 65 },
  mlkem512: { label: "ML-KEM-512", client: 800, server: 768 },
  mlkem768: { label: "ML-KEM-768", client: 1184, server: 1088 },
  mlkem1024: { label: "ML-KEM-1024", client: 1568, server: 1568 },
  hybrid: { label: "X25519 + ML-KEM-768 (hybrid)", client: 1216, server: 1120 },
};

const SIGS: Record<string, Sig> = {
  ed25519: { label: "Ed25519 (classical)", pk: 32, sig: 64 },
  p256: { label: "ECDSA P-256 (classical)", pk: 64, sig: 64 },
  rsa2048: { label: "RSA-2048 (classical)", pk: 256, sig: 256 },
  rsa3072: { label: "RSA-3072 (classical)", pk: 384, sig: 384 },
  mldsa44: { label: "ML-DSA-44", pk: 1312, sig: 2420 },
  mldsa65: { label: "ML-DSA-65", pk: 1952, sig: 3309 },
  mldsa87: { label: "ML-DSA-87", pk: 2592, sig: 4627 },
  falcon512: { label: "Falcon-512 (about 666 byte signature)", pk: 897, sig: 666 },
  falcon1024: { label: "Falcon-1024 (about 1,280 byte signature)", pk: 1793, sig: 1280 },
  slh128s: { label: "SLH-DSA-128s", pk: 32, sig: 7856 },
  slh128f: { label: "SLH-DSA-128f", pk: 32, sig: 17088 },
};

function handshake(kem: Kem, sig: Sig, chain: number, extra: number) {
  const misc = 300;
  const cert = sig.pk + sig.sig + 300;
  const client = kem.client + misc;
  const server = kem.server + chain * cert + sig.sig + extra * sig.sig + misc;
  return { client, server, total: client + server };
}

export function PqcSizeCalculator() {
  const [kemKey, setKemKey] = useState("hybrid");
  const [sigKey, setSigKey] = useState("mldsa65");
  const [chain, setChain] = useState(2);
  const [extra, setExtra] = useState(3);
  const [conns, setConns] = useState(1e6);
  const [rtt, setRtt] = useState(50);
  const [initcwnd, setInitcwnd] = useState(10);

  const r = useMemo(() => {
    const kem = KEMS[kemKey];
    const sig = SIGS[sigKey];
    const mine = handshake(kem, sig, chain, extra);
    const base = handshake(KEMS.x25519, SIGS.p256, chain, extra);
    const window = initcwnd * 1460;
    const flights = (bytes: number) => Math.max(1, Math.ceil(bytes / window));
    const extraRtts = flights(mine.server) - flights(base.server);
    return {
      mine,
      base,
      increase: mine.total - base.total,
      factor: mine.total / base.total,
      extraRtts,
      extraMs: Math.max(0, extraRtts) * rtt,
      daily: (mine.total - base.total) * conns,
      window,
    };
  }, [kemKey, sigKey, chain, extra, conns, rtt, initcwnd]);

  const compare = useMemo(
    () =>
      Object.entries(SIGS).map(([k, s]) => ({
        label: s.label,
        value: handshake(KEMS[kemKey], s, chain, extra).server,
        color: k.startsWith("ml") || k.startsWith("falcon") || k.startsWith("slh") ? "#7c3aed" : "#0ea5e9",
      })),
    [kemKey, chain, extra]
  );

  const opts = (rec: Record<string, { label: string }>) => Object.entries(rec).map(([value, v]) => ({ value, label: v.label }));
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Today (X25519 + ECDSA)", apply: () => { setKemKey("x25519"); setSigKey("p256"); } },
          { label: "Hybrid key exchange only", apply: () => { setKemKey("hybrid"); setSigKey("p256"); } },
          { label: "Full post-quantum (ML-DSA-65)", apply: () => { setKemKey("hybrid"); setSigKey("mldsa65"); } },
          { label: "Compact signatures (Falcon-512)", apply: () => { setKemKey("hybrid"); setSigKey("falcon512"); } },
          { label: "Conservative (hash-based)", apply: () => { setKemKey("hybrid"); setSigKey("slh128s"); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SelectField label="Key exchange" value={kemKey} onChange={setKemKey} options={opts(KEMS)} />
          <SelectField label="Certificate and handshake signatures" value={sigKey} onChange={setSigKey} options={opts(SIGS)} />
          <SliderField label="Certificates sent by the server" value={chain} onChange={setChain} min={1} max={4} step={1} help="Leaf plus intermediates. Root certificates are not sent." />
          <SliderField label="Extra signatures in the handshake" value={extra} onChange={setExtra} min={0} max={6} step={1} help="Certificate transparency timestamps and OCSP staples carry signatures too." />
          <SliderField label="TCP initial congestion window" value={initcwnd} onChange={setInitcwnd} min={4} max={40} step={1} format={(v) => `${v} packets (${fmtBytes(v * 1460)})`} />
          <SliderField label="Round-trip time" value={rtt} onChange={setRtt} min={1} max={400} log format={(v) => `${v.toFixed(0)} ms`} />
          <SliderField label="Connections per day" value={conns} onChange={setConns} min={1e3} max={1e10} log format={fmt} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Handshake size" value={fmtBytes(r.mine.total)} sub={`${r.factor.toFixed(1)}× today's ${fmtBytes(r.base.total)}`} tone={r.factor < 2 ? "good" : r.factor < 6 ? "warn" : "bad"} />
            <Stat label="Server flight" value={fmtBytes(r.mine.server)} sub={r.mine.server > r.window ? `Exceeds the ${fmtBytes(r.window)} initial window` : "Fits the initial window"} tone={r.mine.server > r.window ? "bad" : "good"} />
            <Stat label="Extra round trips" value={String(Math.max(0, r.extraRtts))} sub={`${r.extraMs.toFixed(0)} ms added at ${rtt} ms RTT`} tone={r.extraRtts > 0 ? "warn" : "good"} />
            <Stat label="Extra bandwidth per day" value={fmtBytes(Math.max(0, r.daily))} sub={`for ${fmt(conns)} connections`} />
          </div>
          <Panel title="Key and signature material">
            <p className="text-sm text-ink-muted">Client key share: <span className="font-mono text-ink">{fmtBytes(KEMS[kemKey].client)}</span></p>
            <p className="text-sm text-ink-muted">Server key share: <span className="font-mono text-ink">{fmtBytes(KEMS[kemKey].server)}</span></p>
            <p className="text-sm text-ink-muted">Public key: <span className="font-mono text-ink">{fmtBytes(SIGS[sigKey].pk)}</span>, signature: <span className="font-mono text-ink">{fmtBytes(SIGS[sigKey].sig)}</span></p>
          </Panel>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Server flight size by signature scheme (your key exchange and chain)">
          <BarList format={fmtBytes} items={compare} />
          <p className="text-xs text-ink-soft mt-2">Blue bars are classical schemes, purple bars are post-quantum. The model adds about 300 bytes of metadata per certificate and 300 bytes of other handshake messages per side.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 18. Symmetric key quantum security calculator                        */
/* ------------------------------------------------------------------ */

export function SymmetricSecurityCalculator() {
  const [bits, setBits] = useState(128);
  const [opCost, setOpCost] = useState(1e6);
  const [logicalRate, setLogicalRate] = useState(1e6);
  const [machines, setMachines] = useState(1);
  const [classicalRate, setClassicalRate] = useState(1e12);

  const compute = (k: number) => {
    const iterations = (Math.PI / 4) * Math.pow(2, k / 2);
    const tQ = (iterations * opCost) / logicalRate / Math.sqrt(machines);
    const tC = Math.pow(2, k - 1) / classicalRate;
    return { iterations, tQ, tC };
  };

  const r = useMemo(() => {
    const base = compute(bits);
    const totalOps = base.iterations * opCost * Math.sqrt(machines);
    return { ...base, totalOps, qBits: Math.log2(Math.max(2, base.iterations * opCost)) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bits, opCost, logicalRate, machines, classicalRate]);

  const year = 365.25 * 24 * 3600;
  const universe = 1.38e10 * year;
  const curves = useMemo(() => {
    const q: { x: number; y: number }[] = [];
    const c: { x: number; y: number }[] = [];
    for (let k = 40; k <= 256; k += 4) {
      const v = compute(k);
      q.push({ x: k, y: v.tQ });
      c.push({ x: k, y: v.tC });
    }
    return [
      { name: "Quantum (Grover)", color: "#7c3aed", points: q } as Series,
      { name: "Classical brute force", color: "#0ea5e9", points: c } as Series,
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opCost, logicalRate, machines, classicalRate]);

  const safe = r.tQ > universe;
  const rows = [56, 80, 112, 128, 192, 256];
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "AES-128", apply: () => setBits(128) },
          { label: "AES-192", apply: () => setBits(192) },
          { label: "AES-256", apply: () => setBits(256) },
          { label: "Generous quantum machine", apply: () => { setOpCost(1e5); setLogicalRate(1e8); setMachines(1e6); } },
          { label: "Realistic oracle cost", apply: () => { setOpCost(1e6); setLogicalRate(1e6); setMachines(1); } },
          { label: "Old DES (56-bit)", apply: () => setBits(56) },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Key length" value={bits} onChange={(v) => setBits(Math.round(v))} min={32} max={256} step={1} format={(v) => `${v} bits`} />
          <SliderField label="Logical operations per Grover iteration" value={opCost} onChange={setOpCost} min={1e3} max={1e9} log format={fmt} help="The cost of running the cipher inside a reversible quantum circuit, including uncomputation." />
          <SliderField label="Logical operations per second" value={logicalRate} onChange={setLogicalRate} min={1e3} max={1e9} log format={fmt} help="An error-corrected clock rate. Physical gates are faster, logical gates are slower." />
          <SliderField label="Number of quantum machines" value={machines} onChange={(v) => setMachines(Math.max(1, Math.round(v)))} min={1} max={1e12} log format={(v) => Math.round(v).toLocaleString("en-US")} help="Splitting Grover over P machines only speeds it up by √P." />
          <SliderField label="Classical keys tested per second" value={classicalRate} onChange={setClassicalRate} min={1e6} max={1e18} log format={fmt} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Grover iterations" value={fmt(r.iterations)} sub="(π/4) · 2^(k/2)" />
            <Stat label="Quantum attack time" value={fmtDuration(r.tQ)} tone={safe ? "good" : "bad"} />
            <Stat label="Classical attack time" value={fmtDuration(r.tC)} sub="Average case, 2^(k−1) trials" />
            <Stat label="Effective quantum strength" value={`~${(bits / 2).toFixed(0)} bits`} sub="Key length halves under Grover" />
          </div>
          <Callout tone={safe ? "good" : "bad"} title={safe ? "Out of reach" : "Within reach of the model"}>
            {safe
              ? `Even with the quantum machine you describe, the search takes longer than the age of the universe. This is why AES-128 and AES-256 are treated as quantum-resistant.`
              : `Under these generous assumptions the attack finishes in ${fmtDuration(r.tQ)}. Increase the key length by 64 bits and it would take about 2³² times longer.`}
          </Callout>
          <Panel title="Quick table at your settings">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink-soft text-xs">
                  <th className="py-1">Key</th>
                  <th className="py-1">Quantum</th>
                  <th className="py-1">Classical</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((k) => {
                  const v = compute(k);
                  return (
                    <tr key={k} className={k === bits ? "text-quantum" : "text-ink-muted"}>
                      <td className="py-0.5 font-mono">{k}</td>
                      <td className="py-0.5 font-mono">{fmtDuration(v.tQ)}</td>
                      <td className="py-0.5 font-mono">{fmtDuration(v.tC)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Panel>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Attack time versus key length">
          <LineChart series={curves} xLabel="Key length (bits)" yLabel="Seconds" yLog yMin={1e-6} yMax={1e80} hLines={[{ y: year, label: "1 year", color: "#f59e0b" }, { y: universe, label: "Age of the universe", color: "#e11d48" }]} marker={{ x: bits, label: `${bits} bits` }} />
          <p className="text-xs text-ink-soft mt-2">The two curves have different slopes: classical time doubles with each added bit, quantum time grows by about 1.41 times.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 19. Password quantum guessing calculator                             */
/* ------------------------------------------------------------------ */

const CHARSETS = [
  { value: "10", label: "Digits only (10)" },
  { value: "26", label: "Lowercase letters (26)" },
  { value: "52", label: "Upper and lowercase letters (52)" },
  { value: "62", label: "Letters and digits (62)" },
  { value: "94", label: "All printable ASCII (94)" },
  { value: "7776", label: "Diceware words from a 7,776-word list (per word)" },
];

const HASHES = [
  { value: "1.6e11", label: "Fast unsalted hash (MD5, NTLM) on one modern GPU, about 1.6×10¹¹ per second" },
  { value: "2e10", label: "SHA-256 on one modern GPU, about 2×10¹⁰ per second" },
  { value: "1.5e3", label: "bcrypt at a typical cost on one GPU, order of 10³ per second" },
  { value: "1e2", label: "Memory-hard Argon2id with strong settings, order of 10² per second" },
];

export function PasswordQuantumCalculator() {
  const [charset, setCharset] = useState("62");
  const [length, setLength] = useState(8);
  const [hash, setHash] = useState("1.6e11");
  const [gpus, setGpus] = useState(1);
  const [penalty, setPenalty] = useState(0);
  const [opCost, setOpCost] = useState(1e6);
  const [logicalRate, setLogicalRate] = useState(1e6);
  const [machines, setMachines] = useState(1);

  const r = useMemo(() => {
    const size = Number(charset);
    const nominal = length * Math.log2(size);
    const eff = Math.max(1, nominal - penalty);
    const N = Math.pow(2, eff);
    const rate = Number(hash) * gpus;
    const tC = N / 2 / rate;
    const iterations = (Math.PI / 4) * Math.sqrt(N);
    const tQ = (iterations * opCost) / logicalRate / Math.sqrt(machines);
    return { nominal, eff, tC, tQ, iterations };
  }, [charset, length, hash, gpus, penalty, opCost, logicalRate, machines]);

  const year = 365.25 * 24 * 3600;
  const grade = r.tC < 3600 ? "Weak" : r.tC < year ? "Fair" : r.tC < 1e6 * year ? "Strong" : "Excellent";
  const tone = grade === "Weak" ? "bad" : grade === "Fair" ? "warn" : "good";

  const curves = useMemo(() => {
    const size = Number(charset);
    const c: { x: number; y: number }[] = [];
    const q: { x: number; y: number }[] = [];
    for (let L = 1; L <= 24; L++) {
      const eff = Math.max(1, L * Math.log2(size) - penalty);
      const N = Math.pow(2, eff);
      c.push({ x: L, y: N / 2 / (Number(hash) * gpus) });
      q.push({ x: L, y: (((Math.PI / 4) * Math.sqrt(N)) * opCost) / logicalRate / Math.sqrt(machines) });
    }
    return [
      { name: "Classical GPUs", color: "#0ea5e9", points: c } as Series,
      { name: "Quantum (Grover)", color: "#7c3aed", points: q } as Series,
    ];
  }, [charset, hash, gpus, penalty, opCost, logicalRate, machines]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "8 random letters and digits", apply: () => { setCharset("62"); setLength(8); setHash("1.6e11"); setGpus(1); setPenalty(0); } },
          { label: "12 random letters and digits", apply: () => { setCharset("62"); setLength(12); } },
          { label: "6 Diceware words", apply: () => { setCharset("7776"); setLength(6); } },
          { label: "Human-chosen 10 characters", apply: () => { setCharset("94"); setLength(10); setPenalty(25); } },
          { label: "Attacker with 1,000 GPUs", apply: () => setGpus(1000) },
          { label: "Slow hash (Argon2id)", apply: () => setHash("1e2") },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SelectField label="Character set" value={charset} onChange={setCharset} options={CHARSETS} />
          <SliderField label={charset === "7776" ? "Number of words" : "Length"} value={length} onChange={(v) => setLength(Math.round(v))} min={1} max={24} step={1} />
          <SelectField label="How the password is stored" value={hash} onChange={setHash} options={HASHES} help="Speeds are order-of-magnitude figures for a leaked hash file that is attacked offline." />
          <SliderField label="Attacker GPUs" value={gpus} onChange={(v) => setGpus(Math.max(1, Math.round(v)))} min={1} max={1e6} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Human-choice penalty" value={penalty} onChange={setPenalty} min={0} max={50} step={1} format={(v) => `${v} bits`} help="Human-chosen passwords are far less random than uniform random ones. Typical effective strength is 20 to 40 bits." />
          <SliderField label="Quantum logical operations per hash evaluation" value={opCost} onChange={setOpCost} min={1e3} max={1e9} log format={fmt} />
          <SliderField label="Quantum logical operations per second" value={logicalRate} onChange={setLogicalRate} min={1e3} max={1e9} log format={fmt} />
          <SliderField label="Quantum machines" value={machines} onChange={(v) => setMachines(Math.max(1, Math.round(v)))} min={1} max={1e9} log format={(v) => Math.round(v).toLocaleString("en-US")} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Strength" value={`${r.eff.toFixed(1)} bits`} sub={`${r.nominal.toFixed(1)} bits nominal`} />
            <Stat label="Rating" value={grade} sub="Based on classical cracking time" tone={tone} />
            <Stat label="Classical GPUs" value={fmtDuration(r.tC)} sub="Expected time, half the space" />
            <Stat label="Quantum (Grover)" value={fmtDuration(r.tQ)} sub={r.tQ > r.tC ? "Slower than the classical attacker" : "Faster than the classical attacker"} tone={r.tQ < r.tC ? "warn" : "good"} />
          </div>
          <Callout tone={tone} title="What to take from this">
            {grade === "Weak"
              ? "A single graphics card breaks this quickly. Add length, use a slow password hash, and never reuse the password."
              : r.tQ < r.tC
              ? "Quantum search would beat the classical attacker here, which only happens when the classical hardware is modest and the password is strong. Longer passwords still push both far out of reach."
              : "Classical hardware is the faster attacker. Quantum search at realistic speeds does not change the picture for passwords."}
          </Callout>
          <p className="text-xs text-ink-muted leading-relaxed">
            Quantum search needs about {fmt(r.iterations)} Grover iterations, and each one must run the hash inside a fault-tolerant circuit.
            Online guessing is limited by the server's rate limits, which neither GPUs nor quantum computers can speed up.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Time to crack versus length">
          <LineChart series={curves} xLabel={charset === "7776" ? "Number of words" : "Length"} yLabel="Seconds" yLog yMin={1e-3} yMax={1e40} hLines={[{ y: 3600, label: "1 hour", color: "#f59e0b" }, { y: year, label: "1 year", color: "#16a34a" }]} marker={{ x: length, label: "yours" }} />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 20. QKD key rate and distance calculator                             */
/* ------------------------------------------------------------------ */

const rateDecoy = (totalLossDb: number, detEff: number, dark: number, ed: number, clock: number): number => {
  const eta = Math.pow(10, -totalLossDb / 10) * detEff;
  const e0 = 0.5;
  const f = 1.16;
  let best = 0;
  for (let mu = 0.05; mu <= 1.0001; mu += 0.05) {
    const Qmu = dark + 1 - Math.exp(-eta * mu);
    const Emu = (e0 * dark + ed * (1 - Math.exp(-eta * mu))) / Qmu;
    const Y1 = dark + eta - dark * eta;
    const e1 = (e0 * dark + ed * eta) / Y1;
    const Q1 = Y1 * mu * Math.exp(-mu);
    const R = 0.5 * (-Qmu * f * h2(Emu) + Q1 * (1 - h2(Math.min(0.5, e1))));
    if (R > best) best = R;
  }
  return best * clock;
};

const ratePlob = (totalLossDb: number, clock: number): number => {
  const eta = Math.pow(10, -totalLossDb / 10);
  return -Math.log2(1 - eta) * clock;
};

export function QkdRateCalculator() {
  const [dist, setDist] = useState(100);
  const [alpha, setAlpha] = useState(0.2);
  const [fixedDb, setFixedDb] = useState(3);
  const [clock, setClock] = useState(1e9);
  const [detEff, setDetEff] = useState(0.8);
  const [dark, setDark] = useState(1e-7);
  const [ed, setEd] = useState(0.015);
  const [hops, setHops] = useState(4);

  const r = useMemo(() => {
    const loss = alpha * dist + fixedDb;
    const decoy = rateDecoy(loss, detEff, dark, ed, clock);
    const plob = ratePlob(loss, clock);
    const hopLoss = alpha * (dist / hops) + fixedDb;
    const trusted = rateDecoy(hopLoss, detEff, dark, ed, clock);
    let maxKm = 0;
    for (let L = 1; L <= 1000; L += 1) {
      if (rateDecoy(alpha * L + fixedDb, detEff, dark, ed, clock) >= 1) maxKm = L;
      else if (L > maxKm + 5) break;
    }
    return { loss, decoy, plob, trusted, maxKm };
  }, [dist, alpha, fixedDb, clock, detEff, dark, ed, hops]);

  const curves = useMemo(() => {
    const d: { x: number; y: number }[] = [];
    const p: { x: number; y: number }[] = [];
    const t: { x: number; y: number }[] = [];
    for (let L = 5; L <= 600; L += 5) {
      const loss = alpha * L + fixedDb;
      const a = rateDecoy(loss, detEff, dark, ed, clock);
      const b = ratePlob(loss, clock);
      const c = rateDecoy(alpha * (L / hops) + fixedDb, detEff, dark, ed, clock);
      if (a > 1e-3) d.push({ x: L, y: a });
      if (b > 1e-3) p.push({ x: L, y: b });
      if (c > 1e-3) t.push({ x: L, y: c });
    }
    return [
      { name: "Repeaterless limit (PLOB)", color: "#16a34a", points: p, dashed: true } as Series,
      { name: "Decoy-state BB84 (practical model)", color: "#7c3aed", points: d } as Series,
      { name: `Trusted-node chain (${hops} hops)`, color: "#0ea5e9", points: t } as Series,
    ];
  }, [alpha, fixedDb, detEff, dark, ed, clock, hops]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Metro link (50 km)", apply: () => { setDist(50); setAlpha(0.2); setClock(1e9); } },
          { label: "Long fiber (250 km)", apply: () => { setDist(250); setAlpha(0.2); } },
          { label: "Ultra-low-loss fiber (0.16 dB/km)", apply: () => { setAlpha(0.16); setDist(300); } },
          { label: "Best detectors", apply: () => { setDetEff(0.95); setDark(1e-9); } },
          { label: "Poor InGaAs detectors", apply: () => { setDetEff(0.15); setDark(1e-5); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Fiber length" value={dist} onChange={setDist} min={1} max={600} step={1} format={(v) => `${v} km`} />
          <SliderField label="Fiber attenuation" value={alpha} onChange={setAlpha} min={0.14} max={0.4} step={0.005} format={(v) => `${v.toFixed(3)} dB/km`} help="About 0.2 dB/km for standard telecom fiber and 0.16 dB/km for ultra-low-loss fiber." />
          <SliderField label="Fixed loss (connectors, optics)" value={fixedDb} onChange={setFixedDb} min={0} max={10} step={0.5} format={(v) => `${v.toFixed(1)} dB`} />
          <SliderField label="Source clock rate" value={clock} onChange={setClock} min={1e6} max={1e10} log format={(v) => `${fmt(v)} Hz`} />
          <SliderField label="Detector efficiency" value={detEff} onChange={setDetEff} min={0.05} max={0.98} step={0.01} format={(v) => `${(v * 100).toFixed(0)}%`} />
          <SliderField label="Dark count probability per pulse" value={dark} onChange={setDark} min={1e-10} max={1e-4} log format={fmt} />
          <SliderField label="Misalignment error" value={ed} onChange={setEd} min={0.001} max={0.05} step={0.001} format={(v) => `${(v * 100).toFixed(1)}%`} />
          <SliderField label="Trusted-node hops" value={hops} onChange={(v) => setHops(Math.max(1, Math.round(v)))} min={1} max={50} step={1} help="Splitting the link into hops with trusted relay nodes that store the keys." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Channel loss" value={`${r.loss.toFixed(1)} dB`} sub={`${fmtPercent(Math.pow(10, -r.loss / 10), 4)} transmission`} />
            <Stat label="Secret key rate" value={r.decoy >= 1 ? `${fmt(r.decoy)} bit/s` : "below 1 bit/s"} sub="Decoy-state BB84, asymptotic model" tone={r.decoy > 1e3 ? "good" : r.decoy >= 1 ? "warn" : "bad"} />
            <Stat label="Repeaterless limit" value={`${fmt(r.plob)} bit/s`} sub="PLOB upper bound for this channel" />
            <Stat label="Trusted-node chain" value={r.trusted >= 1 ? `${fmt(r.trusted)} bit/s` : "below 1 bit/s"} sub={`${hops} hops of ${(dist / hops).toFixed(1)} km`} tone={r.trusted >= 1 ? "good" : "bad"} />
          </div>
          <Panel title="Reach">
            <p className="text-sm text-ink-muted">Maximum distance for 1 bit per second without relays: <span className="font-mono text-ink">{r.maxKm >= 1 ? `${r.maxKm} km` : "under 1 km"}</span>.</p>
            <p className="text-xs text-ink-soft mt-1">An AES-256 key is 256 bits, so one bit per second yields a fresh key every four minutes.</p>
          </Panel>
          <Callout tone="info">Trusted nodes extend the range but must be physically protected, because they hold the keys in the clear. Satellites and quantum repeaters aim to avoid that.</Callout>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Secret key rate versus distance">
          <LineChart series={curves} xLabel="Distance (km)" yLabel="Secret key rate (bit/s)" yLog yMin={1e-3} yMax={1e10} hLines={[{ y: 1, label: "1 bit/s", color: "#f59e0b" }]} marker={{ x: dist, label: `${dist} km` }} />
          <p className="text-xs text-ink-soft mt-2">The curves fall by a factor of ten for every 50 km of standard fiber. This exponential loss is why long-distance quantum communication needs trusted nodes, satellites, or repeaters.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}
