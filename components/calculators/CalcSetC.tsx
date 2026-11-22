"use client";

import { useMemo, useState } from "react";
import {
  CalcCard,
  Callout,
  LineChart,
  NumberField,
  Panel,
  PresetRow,
  SelectField,
  SliderField,
  Stat,
  fmt,
  fmtDuration,
  fmtPercent,
  type Series,
} from "./ui";

/* ------------------------------------------------------------------ */
/* 11. Quadratic speedup break-even calculator                          */
/* ------------------------------------------------------------------ */

export function SpeedupBreakEvenCalculator() {
  const [classicalRate, setClassicalRate] = useState(1e9);
  const [cores, setCores] = useState(1);
  const [classicalCost, setClassicalCost] = useState(1);
  const [oracleCost, setOracleCost] = useState(1e4);
  const [logicalRate, setLogicalRate] = useState(1e5);
  const [classicalExp, setClassicalExp] = useState(1);
  const [quantumExp, setQuantumExp] = useState(0.5);
  const [sizeLog, setSizeLog] = useState(12);

  const r = useMemo(() => {
    const cRate = (classicalRate * cores) / classicalCost; // candidate checks per second
    const qRate = logicalRate / oracleCost; // quantum iterations per second
    const gap = classicalExp - quantumExp;
    const ratio = cRate > 0 ? (1 / qRate) / (1 / cRate) : Infinity; // = cRate/qRate
    // classical time = N^a / cRate, quantum time = N^b / qRate. Equal when N^(a-b) = cRate/qRate
    const nStar = gap > 0 ? Math.pow(cRate / qRate, 1 / gap) : Infinity;
    const tStar = Number.isFinite(nStar) ? Math.pow(nStar, classicalExp) / cRate : Infinity;
    const N = Math.pow(10, sizeLog);
    const tC = Math.pow(N, classicalExp) / cRate;
    const tQ = Math.pow(N, quantumExp) / qRate;
    return { cRate, qRate, gap, ratio, nStar, tStar, N, tC, tQ };
  }, [classicalRate, cores, classicalCost, oracleCost, logicalRate, classicalExp, quantumExp, sizeLog]);

  const curves = useMemo(() => {
    const cs: { x: number; y: number }[] = [];
    const qs: { x: number; y: number }[] = [];
    for (let e = 0; e <= 40; e += 0.5) {
      const N = Math.pow(10, e);
      cs.push({ x: N, y: Math.pow(N, classicalExp) / r.cRate });
      qs.push({ x: N, y: Math.pow(N, quantumExp) / r.qRate });
    }
    return [
      { name: "Classical", color: "#0ea5e9", points: cs } as Series,
      { name: "Quantum", color: "#7c3aed", points: qs } as Series,
    ];
  }, [classicalExp, quantumExp, r.cRate, r.qRate]);

  const quantumWins = r.tQ < r.tC;
  const year = 365.25 * 24 * 3600;
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Grover vs one CPU core", apply: () => { setClassicalRate(1e9); setCores(1); setClassicalCost(1); setOracleCost(1e4); setLogicalRate(1e5); setClassicalExp(1); setQuantumExp(0.5); } },
          { label: "Grover vs 1,000-core cluster", apply: () => { setClassicalRate(1e9); setCores(1000); setClassicalCost(1); setOracleCost(1e4); setLogicalRate(1e5); setClassicalExp(1); setQuantumExp(0.5); } },
          { label: "Cheap oracle, fast logical clock", apply: () => { setClassicalRate(1e9); setCores(1); setClassicalCost(1); setOracleCost(100); setLogicalRate(1e6); setClassicalExp(1); setQuantumExp(0.5); } },
          { label: "Quartic speedup (N → N^0.25)", apply: () => { setClassicalRate(1e9); setCores(1000); setClassicalCost(1); setOracleCost(1e4); setLogicalRate(1e5); setClassicalExp(1); setQuantumExp(0.25); } },
          { label: "Exponential-like (classical N², quantum N^0.5)", apply: () => { setClassicalExp(2); setQuantumExp(0.5); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">Classical side</p>
          <SliderField label="Operations per second per core" value={classicalRate} onChange={setClassicalRate} min={1e6} max={1e11} log format={fmt} />
          <SliderField label="Parallel cores or GPUs" value={cores} onChange={(v) => setCores(Math.max(1, Math.round(v)))} min={1} max={1e6} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Operations per candidate check" value={classicalCost} onChange={setClassicalCost} min={1} max={1e4} log format={fmt} />
          <SliderField label="Classical scaling exponent a (time ∝ N^a)" value={classicalExp} onChange={setClassicalExp} min={0.5} max={3} step={0.05} format={(v) => v.toFixed(2)} />
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2 mt-4">Quantum side</p>
          <SliderField label="Logical operations per second" value={logicalRate} onChange={setLogicalRate} min={1e2} max={1e8} log format={fmt} help="Error-corrected logical clock rate. Physical gates are faster, logical operations are much slower." />
          <SliderField label="Logical operations per quantum step" value={oracleCost} onChange={setOracleCost} min={10} max={1e8} log format={fmt} help="Cost of the oracle plus diffusion for one Grover iteration, in logical gates." />
          <SliderField label="Quantum scaling exponent b (time ∝ N^b)" value={quantumExp} onChange={setQuantumExp} min={0.1} max={2} step={0.05} format={(v) => v.toFixed(2)} />
          <SliderField label="Problem size N to evaluate" value={sizeLog} onChange={setSizeLog} min={0} max={40} step={0.5} format={(v) => `10^${v}`} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Break-even size N*" value={Number.isFinite(r.nStar) ? fmt(r.nStar) : "never"} sub="Size at which quantum becomes faster" tone={Number.isFinite(r.nStar) ? "neutral" : "bad"} />
            <Stat label="Runtime at break-even" value={Number.isFinite(r.tStar) ? fmtDuration(r.tStar) : "n/a"} sub="How long the crossover problem takes" tone={r.tStar > year ? "bad" : r.tStar > 3600 ? "warn" : "good"} />
            <Stat label="Classical time at N" value={fmtDuration(r.tC)} />
            <Stat label="Quantum time at N" value={fmtDuration(r.tQ)} tone={quantumWins ? "good" : "neutral"} />
          </div>
          <Callout tone={quantumWins ? "good" : "warn"} title={quantumWins ? "Quantum wins at this size" : "Classical wins at this size"}>
            {quantumWins
              ? `At N = ${fmt(r.N)} the quantum run is ${fmt(r.tC / r.tQ)} times faster.`
              : `At N = ${fmt(r.N)} the classical run is ${fmt(r.tQ / r.tC)} times faster. The quantum machine only wins once N exceeds ${Number.isFinite(r.nStar) ? fmt(r.nStar) : "any size"}.`}
          </Callout>
          <p className="text-xs text-ink-muted leading-relaxed">
            Classical machine: {fmt(r.cRate)} candidate checks per second. Quantum machine: {fmt(r.qRate)} quantum steps per second.
            {Number.isFinite(r.tStar) && r.tStar > 1e3 ? " A speedup that only pays off for jobs this long is useful only for problems that would otherwise take a very long time." : ""}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Runtime versus problem size">
          <LineChart series={curves} xLabel="Problem size N" yLabel="Runtime (seconds)" xLog yLog yMin={1e-6} yMax={1e30} hLines={[{ y: 3600, label: "1 hour", color: "#16a34a" }, { y: year, label: "1 year", color: "#f59e0b" }]} marker={{ x: r.N, label: "N" }} />
          <p className="text-xs text-ink-soft mt-2">The quantum curve starts higher because each step is slow, then bends below the classical curve at the break-even size.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 12. RSA / elliptic curve resource estimator                          */
/* ------------------------------------------------------------------ */

type EstMode = "ge" | "g25" | "ecc";

const EST_MODES = [
  { value: "ge", label: "RSA, Gidney and Ekerå (2019 and 2021)" },
  { value: "g25", label: "RSA, Gidney (2025), fewer than a million qubits" },
  { value: "ecc", label: "Elliptic curves, Roetteler et al. (2017)" },
];

function counts(mode: EstMode, n: number): { L: number; T: number } {
  const lg = Math.log2(n);
  if (mode === "ge") return { L: 3 * n + 0.002 * n * lg, T: 0.3 * n ** 3 + 0.0005 * n ** 3 * lg };
  if (mode === "g25") return { L: 0.683 * n, T: 6.5e9 * Math.pow(n / 2048, 3) };
  return { L: 9 * n + 2 * Math.ceil(lg) + 10, T: 448 * lg * n ** 3 + 4090 * n ** 3 };
}

function distanceFor(p: number, L: number, T: number): number | null {
  if (p >= 0.01) return null;
  for (let d = 3; d <= 501; d += 2) {
    const pl = 0.1 * Math.pow(p / 0.01, (d + 1) / 2);
    if (pl * L * T * d <= 0.1) return d;
  }
  return null;
}

function estimate(mode: EstMode, n: number, p: number, tReactUs: number) {
  const { L, T } = counts(mode, n);
  const d = distanceFor(p, L, T);
  if (!d) return { L, T, d: null as number | null, phys: Infinity, runtime: Infinity };
  let phys: number;
  if (mode === "g25") {
    const dRef = distanceFor(1e-3, L, T) ?? d;
    phys = 641 * L * Math.pow(d / dRef, 2);
  } else {
    phys = L * (2 * d * d - 1) * 2.2;
  }
  const mult = mode === "g25" ? 8 : 1;
  return { L, T, d, phys, runtime: T * tReactUs * 1e-6 * mult };
}

export function RsaEstimatorCalculator() {
  const [mode, setMode] = useState<EstMode>("ge");
  const [bits, setBits] = useState(2048);
  const [p, setP] = useState(1e-3);
  const [react, setReact] = useState(10);

  const r = useMemo(() => estimate(mode, bits, p, react), [mode, bits, p, react]);

  const sizes = [256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192];
  const series = useMemo(() => {
    const make = (name: string, color: string, m: EstMode): Series => ({
      name,
      color,
      points: sizes
        .map((n) => ({ x: n, y: estimate(m, n, p, react).phys }))
        .filter((pt) => Number.isFinite(pt.y)),
    });
    return [make("RSA, 2021 method", "#7c3aed", "ge"), make("RSA, 2025 method", "#16a34a", "g25"), make("Elliptic curve", "#0ea5e9", "ecc")];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p, react]);

  const todays = 1000;
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "RSA-2048 (2021 method)", apply: () => { setMode("ge"); setBits(2048); setP(1e-3); setReact(10); } },
          { label: "RSA-2048 (2025 method)", apply: () => { setMode("g25"); setBits(2048); setP(1e-3); setReact(10); } },
          { label: "RSA-1024", apply: () => { setMode("ge"); setBits(1024); } },
          { label: "RSA-4096", apply: () => { setMode("ge"); setBits(4096); } },
          { label: "ECC-256 (Bitcoin curve size)", apply: () => { setMode("ecc"); setBits(256); setP(1e-3); } },
          { label: "Better hardware (p = 0.01%)", apply: () => setP(1e-4) },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SelectField label="Estimate method" value={mode} onChange={(v) => setMode(v as EstMode)} options={EST_MODES} />
          <SliderField label={mode === "ecc" ? "Elliptic curve size" : "RSA modulus size"} value={bits} onChange={(v) => setBits(Math.round(v))} min={128} max={16384} log format={(v) => `${Math.round(v).toLocaleString("en-US")} bits`} />
          <SliderField label="Physical error rate p" value={p} onChange={setP} min={1e-4} max={5e-3} log format={(v) => `${(v * 100).toFixed(3)}%`} />
          <SliderField label="Control reaction time per Toffoli" value={react} onChange={setReact} min={1} max={1000} log format={(v) => `${v.toFixed(v < 10 ? 1 : 0)} µs`} help="Time the classical controller needs to decode and respond. It sets the runtime when the machine is reaction limited." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Logical qubits" value={fmt(Math.round(r.L))} />
            <Stat label="Toffoli gates" value={fmt(r.T)} />
            <Stat label="Code distance" value={r.d ? String(r.d) : "n/a"} />
            <Stat label="Physical qubits" value={Number.isFinite(r.phys) ? fmt(Math.round(r.phys)) : "n/a"} sub={Number.isFinite(r.phys) ? `${fmt(r.phys / todays)}× a 1,000-qubit chip` : "Error rate too high for this model"} tone="warn" />
          </div>
          <Panel title="Runtime">
            <p className="font-mono text-lg text-ink">{fmtDuration(r.runtime)}</p>
            <p className="text-xs text-ink-soft mt-1">{fmt(r.T)} Toffoli gates × {react} µs{mode === "g25" ? " × 8 (calibrated to the reported runtime of under a week)" : ""}.</p>
          </Panel>
          <Callout tone="info" title="Compare with today">
            The best machines have hundreds to a few thousand physical qubits and dozens of logical qubits. The qubit gap to this estimate is a factor of about{" "}
            {Number.isFinite(r.phys) ? fmt(r.phys / todays) : "n/a"}, and logical error rates also need to fall by several orders of magnitude.
          </Callout>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Physical qubits versus key size">
          <LineChart series={series} xLabel="Key size (bits)" yLabel="Physical qubits" xLog yLog yMin={1e5} yMax={1e10} hLines={[{ y: 1e6, label: "1 million qubits", color: "#f59e0b" }]} marker={{ x: bits, label: `${bits} bits` }} />
          <p className="text-xs text-ink-soft mt-2">All curves use your physical error rate. They are illustrative scalings calibrated to the published headline figures, not exact reproductions of those papers.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 13. Quantum sensing precision calculator                             */
/* ------------------------------------------------------------------ */

export function SensingPrecisionCalculator() {
  const [n, setN] = useState(10000);
  const [tau, setTau] = useState(1);
  const [total, setTotal] = useState(10000);
  const [f0, setF0] = useState(4.29e14);
  const [squeeze, setSqueeze] = useState(10);
  const [loss, setLoss] = useState(0.2);
  const [target, setTarget] = useState(1e-3);

  const r = useMemo(() => {
    const sql = 1 / Math.sqrt(n);
    const e2r = Math.pow(10, -squeeze / 10); // e^{-2r}
    const sq = Math.sqrt(e2r * (1 - loss) + loss) / Math.sqrt(n);
    const hl = 1 / n;
    const reps = Math.max(1, total / tau);
    const toFrac = (dphi: number) => dphi / (2 * Math.PI * f0 * tau * Math.sqrt(reps));
    return {
      sql,
      sq,
      hl,
      fSql: toFrac(sql),
      fSq: toFrac(sq),
      fHl: toFrac(hl),
      nSql: 1 / (target * target),
      nHl: 1 / target,
      gain: sql / sq,
    };
  }, [n, tau, total, f0, squeeze, loss, target]);

  const curves = useMemo(() => {
    const e2r = Math.pow(10, -squeeze / 10);
    const mk = (name: string, color: string, f: (N: number) => number, dashed = false): Series => {
      const pts = [];
      for (let e = 0; e <= 9; e += 0.25) {
        const N = Math.pow(10, e);
        pts.push({ x: N, y: f(N) });
      }
      return { name, color, points: pts, dashed };
    };
    return [
      mk("Standard quantum limit 1/√N", "#0ea5e9", (N) => 1 / Math.sqrt(N)),
      mk("Squeezed light with loss", "#7c3aed", (N) => Math.sqrt(e2r * (1 - loss) + loss) / Math.sqrt(N)),
      mk("Heisenberg limit 1/N", "#16a34a", (N) => 1 / N, true),
    ];
  }, [squeeze, loss]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Optical lattice clock (strontium)", apply: () => { setN(10000); setTau(1); setTotal(10000); setF0(4.29e14); } },
          { label: "Cesium fountain clock", apply: () => { setN(1e6); setTau(1); setTotal(1e5); setF0(9.19e9); } },
          { label: "Few ions, entangled", apply: () => { setN(10); setTau(1); setTotal(1000); setF0(4.4e14); setSqueeze(0); } },
          { label: "Strong squeezing, low loss", apply: () => { setSqueeze(15); setLoss(0.05); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Number of probes N (atoms or photons)" value={n} onChange={(v) => setN(Math.round(v))} min={1} max={1e9} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Interrogation time per shot τ" value={tau} onChange={setTau} min={0.001} max={100} log format={(v) => `${v < 1 ? v.toFixed(3) : v.toFixed(1)} s`} />
          <SliderField label="Total averaging time" value={total} onChange={setTotal} min={1} max={1e7} log format={(v) => fmtDuration(v)} />
          <SliderField label="Transition frequency f₀" value={f0} onChange={setF0} min={1e9} max={1e15} log format={(v) => `${fmt(v)} Hz`} help="About 9.19×10⁹ Hz for the cesium microwave clock, around 4×10¹⁴ Hz for optical clocks." />
          <SliderField label="Squeezing" value={squeeze} onChange={setSqueeze} min={0} max={20} step={0.5} format={(v) => `${v.toFixed(1)} dB`} />
          <SliderField label="Loss or decoherence fraction" value={loss} onChange={setLoss} min={0} max={0.95} step={0.01} format={(v) => `${(v * 100).toFixed(0)}%`} help="Squeezing is fragile. Loss mixes noise back in and caps the gain." />
          <SliderField label="Target phase precision" value={target} onChange={setTarget} min={1e-6} max={0.1} log format={(v) => `${fmt(v)} rad`} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Standard quantum limit" value={`${fmt(r.sql)} rad`} sub="Uncorrelated probes" />
            <Stat label="With squeezing" value={`${fmt(r.sq)} rad`} sub={`${fmt(r.gain)}× better than the limit`} tone={r.gain > 1.2 ? "good" : "neutral"} />
            <Stat label="Heisenberg limit" value={`${fmt(r.hl)} rad`} sub="Ideal entangled probes" />
            <Stat label="Probes for target" value={`${fmt(r.nSql)} vs ${fmt(r.nHl)}`} sub="Standard limit versus Heisenberg limit" />
          </div>
          <Panel title="Fractional frequency instability after the full averaging time">
            <p className="text-sm text-ink-muted">Standard limit: <span className="font-mono text-ink">{fmt(r.fSql)}</span></p>
            <p className="text-sm text-ink-muted">With squeezing: <span className="font-mono text-ink">{fmt(r.fSq)}</span></p>
            <p className="text-sm text-ink-muted">Heisenberg limit: <span className="font-mono text-ink">{fmt(r.fHl)}</span></p>
            <p className="text-xs text-ink-soft mt-2">These are quantum-projection-noise floors. Real clocks are usually limited by laser noise, dead time, and systematics.</p>
          </Panel>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Phase uncertainty versus number of probes">
          <LineChart series={curves} xLabel="Number of probes N" yLabel="Phase uncertainty (rad)" xLog yLog marker={{ x: n, label: "your N" }} />
          <p className="text-xs text-ink-soft mt-2">The standard limit improves as 1/√N, the Heisenberg limit as 1/N. Squeezing with loss lowers the curve by a constant factor.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 14. Photon loss budget calculator                                    */
/* ------------------------------------------------------------------ */

const dbToT = (db: number) => Math.pow(10, -db / 10);

export function PhotonLossCalculator() {
  const [sourceEff, setSourceEff] = useState(0.99);
  const [couplingDb, setCouplingDb] = useState(0.1);
  const [elementDb, setElementDb] = useState(0.01);
  const [elements, setElements] = useState(20);
  const [switchDb, setSwitchDb] = useState(0.02);
  const [switches, setSwitches] = useState(2);
  const [detEff, setDetEff] = useState(0.98);
  const [photons, setPhotons] = useState(6);
  const [threshold, setThreshold] = useState(0.03);

  const r = useMemo(() => {
    const parts = [
      { label: "Source and heralding", T: sourceEff },
      { label: "Chip-fiber or fiber-chip coupling", T: dbToT(couplingDb) },
      { label: "Waveguide elements", T: Math.pow(dbToT(elementDb), elements) },
      { label: "Optical switches", T: Math.pow(dbToT(switchDb), switches) },
      { label: "Detector", T: detEff },
    ];
    const total = parts.reduce((s, p) => s * p.T, 1);
    const totalDb = -10 * Math.log10(total);
    const perPhotonLoss = 1 - total;
    const stateSurvival = Math.pow(total, photons);
    const withinThreshold = perPhotonLoss <= threshold;
    // largest number of waveguide elements allowed to stay within threshold, other parts fixed
    const others = parts.filter((p) => p.label !== "Waveguide elements").reduce((s, p) => s * p.T, 1);
    const room = (1 - threshold) / others;
    const maxElements = room >= 1 ? Math.floor(Math.log(room) / Math.log(dbToT(elementDb))) : 0;
    return { parts, total, totalDb, perPhotonLoss, stateSurvival, withinThreshold, maxElements };
  }, [sourceEff, couplingDb, elementDb, elements, switchDb, switches, detEff, photons, threshold]);

  const curves = useMemo(() => {
    const others = dbToT(couplingDb) * sourceEff * detEff * Math.pow(dbToT(switchDb), switches);
    const mk = (name: string, color: string, db: number): Series => {
      const pts = [];
      for (let e = 0; e <= 3.4; e += 0.1) {
        const k = Math.pow(10, e);
        pts.push({ x: k, y: (1 - others * Math.pow(dbToT(db), k)) * 100 });
      }
      return { name, color, points: pts };
    };
    return [mk("0.1 dB per element", "#e11d48", 0.1), mk("0.03 dB per element", "#f59e0b", 0.03), mk("0.01 dB per element", "#16a34a", 0.01), mk("0.003 dB per element", "#0ea5e9", 0.003)];
  }, [couplingDb, sourceEff, detEff, switchDb, switches]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Good foundry chip", apply: () => { setSourceEff(0.97); setCouplingDb(0.5); setElementDb(0.02); setElements(20); setSwitchDb(0.1); setSwitches(2); setDetEff(0.97); } },
          { label: "Early prototype", apply: () => { setSourceEff(0.7); setCouplingDb(2); setElementDb(0.1); setElements(30); setSwitchDb(0.5); setSwitches(4); setDetEff(0.85); } },
          { label: "Target quality", apply: () => { setSourceEff(0.998); setCouplingDb(0.03); setElementDb(0.001); setElements(20); setSwitchDb(0.005); setSwitches(2); setDetEff(0.995); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Source and heralding efficiency" value={sourceEff} onChange={setSourceEff} min={0.3} max={1} step={0.005} format={(v) => `${(v * 100).toFixed(1)}%`} />
          <SliderField label="Coupling loss" value={couplingDb} onChange={setCouplingDb} min={0.01} max={5} log format={(v) => `${v.toFixed(2)} dB`} />
          <SliderField label="Loss per waveguide element" value={elementDb} onChange={setElementDb} min={0.001} max={0.5} log format={(v) => `${v.toFixed(3)} dB`} help="Bends, couplers, crossings, and propagation along each stage." />
          <SliderField label="Waveguide elements on the path" value={elements} onChange={(v) => setElements(Math.round(v))} min={1} max={5000} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Loss per optical switch" value={switchDb} onChange={setSwitchDb} min={0.001} max={1} log format={(v) => `${v.toFixed(3)} dB`} />
          <SliderField label="Switches on the path" value={switches} onChange={(v) => setSwitches(Math.round(v))} min={0} max={50} step={1} />
          <SliderField label="Detector efficiency" value={detEff} onChange={setDetEff} min={0.5} max={1} step={0.005} format={(v) => `${(v * 100).toFixed(1)}%`} />
          <SliderField label="Photons in a resource state" value={photons} onChange={(v) => setPhotons(Math.round(v))} min={1} max={40} step={1} />
          <SliderField label="Tolerable loss per photon" value={threshold} onChange={setThreshold} min={0.005} max={0.2} step={0.0025} format={(v) => `${(v * 100).toFixed(1)}%`} help="Architecture dependent. Published fusion-based designs quote thresholds of a few percent per photon." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Total loss per photon" value={fmtPercent(r.perPhotonLoss, 2)} sub={`${r.totalDb.toFixed(2)} dB`} tone={r.withinThreshold ? "good" : "bad"} />
            <Stat label="Resource state survival" value={fmtPercent(r.stateSurvival, 1)} sub={`All ${photons} photons arrive`} tone={r.stateSurvival > 0.8 ? "good" : r.stateSurvival > 0.5 ? "warn" : "bad"} />
          </div>
          <Panel title="Transmission by stage">
            {r.parts.map((p) => (
              <div key={p.label} className="mb-2">
                <div className="flex justify-between text-xs text-ink-muted">
                  <span>{p.label}</span>
                  <span className="font-mono text-ink">{fmtPercent(p.T, 2)}</span>
                </div>
                <div className="h-2 rounded-full bg-line/40 overflow-hidden">
                  <div className="h-full rounded-full bg-quantum" style={{ width: `${Math.max(1, p.T * 100)}%` }} />
                </div>
              </div>
            ))}
          </Panel>
          <Callout tone={r.withinThreshold ? "good" : "bad"} title={r.withinThreshold ? "Within the loss tolerance" : "Over the loss tolerance"}>
            {r.withinThreshold
              ? `Your per-photon loss is ${fmtPercent(r.perPhotonLoss, 2)} against a tolerance of ${fmtPercent(threshold, 1)}. With the other stages fixed you could add up to about ${fmt(r.maxElements)} waveguide elements.`
              : `Your per-photon loss of ${fmtPercent(r.perPhotonLoss, 2)} exceeds the ${fmtPercent(threshold, 1)} tolerance. Cut loss per element, coupling loss, or the number of elements.`}
          </Callout>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Total loss versus number of waveguide elements">
          <LineChart series={curves} xLabel="Waveguide elements" yLabel="Loss per photon (%)" xLog yMin={0} yMax={100} hLines={[{ y: threshold * 100, label: "Your tolerance", color: "#16a34a" }]} marker={{ x: elements, label: "you" }} />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 15. Rydberg blockade calculator                                      */
/* ------------------------------------------------------------------ */

export function RydbergCalculator() {
  const [n, setN] = useState(70);
  const [omega, setOmega] = useState(2);
  const [spacing, setSpacing] = useState(4);
  const [tauRef, setTauRef] = useState(150);

  const c6 = (nn: number) => 859 * Math.pow(nn / 70, 11); // GHz um^6, rubidium nS scaling
  const lifetimeUs = (nn: number) => tauRef * Math.pow(nn / 70, 3);

  const r = useMemo(() => {
    const C6 = c6(n);
    const omegaGHz = omega / 1000;
    const rb = Math.pow(C6 / omegaGHz, 1 / 6);
    const vMHz = (C6 / Math.pow(spacing, 6)) * 1000;
    const ratio = vMHz / omega;
    const errBlock = Math.pow(omega, 2) / (8 * Math.pow(vMHz, 2));
    const tau = lifetimeUs(n) * 1e-6;
    const omegaRad = 2 * Math.PI * omega * 1e6;
    const errDecay = (7 * Math.PI) / (4 * omegaRad * tau);
    const gateTimeUs = (4 * Math.PI) / omegaRad * 1e6;
    return { C6, rb, vMHz, ratio, errBlock, errDecay, errTotal: errBlock + errDecay, tau, gateTimeUs };
  }, [n, omega, spacing, tauRef]);

  const omegaCurve = useMemo(() => {
    const C6 = c6(n);
    const vMHz = (C6 / Math.pow(spacing, 6)) * 1000;
    const tau = lifetimeUs(n) * 1e-6;
    const mk = (name: string, color: string, f: (om: number) => number): Series => {
      const pts = [];
      for (let e = -1; e <= 1.5; e += 0.05) {
        const om = Math.pow(10, e);
        pts.push({ x: om, y: Math.max(1e-9, f(om)) });
      }
      return { name, color, points: pts };
    };
    return [
      mk("Imperfect blockade", "#e11d48", (om) => (om * om) / (8 * vMHz * vMHz)),
      mk("Rydberg decay", "#0ea5e9", (om) => (7 * Math.PI) / (4 * 2 * Math.PI * om * 1e6 * tau)),
      mk("Total", "#7c3aed", (om) => (om * om) / (8 * vMHz * vMHz) + (7 * Math.PI) / (4 * 2 * Math.PI * om * 1e6 * tau)),
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, spacing, tauRef]);

  const radiusCurve = useMemo(() => {
    const pts = [];
    for (let nn = 30; nn <= 120; nn += 2) pts.push({ x: nn, y: Math.pow(c6(nn) / (omega / 1000), 1 / 6) });
    return [{ name: "Blockade radius", color: "#7c3aed", points: pts }];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [omega]);

  const blockaded = r.ratio > 10;
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Typical rubidium gate (n = 70)", apply: () => { setN(70); setOmega(2); setSpacing(4); } },
          { label: "Tight array, strong blockade", apply: () => { setN(60); setOmega(1); setSpacing(3); } },
          { label: "Large Rydberg state", apply: () => { setN(100); setOmega(1); setSpacing(10); } },
          { label: "Spacing too wide", apply: () => { setN(60); setOmega(4); setSpacing(12); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Principal quantum number n (rubidium nS)" value={n} onChange={(v) => setN(Math.round(v))} min={30} max={120} step={1} />
          <SliderField label="Rabi frequency Ω/2π" value={omega} onChange={setOmega} min={0.1} max={30} log format={(v) => `${v.toFixed(v < 1 ? 2 : 1)} MHz`} />
          <SliderField label="Atom spacing" value={spacing} onChange={setSpacing} min={1} max={20} step={0.1} format={(v) => `${v.toFixed(1)} µm`} />
          <NumberField label="Rydberg lifetime at n = 70" value={tauRef} onChange={setTauRef} min={10} max={1000} unit="µs" help="Effective lifetime including blackbody effects. Scaled as n³ for other n. A rough value, adjust to your setup." />
          <Callout tone="info">The van der Waals coefficient is scaled as n¹¹ from about 859 GHz·µm⁶ at n = 70 for rubidium nS states. It is a good guide near n = 50 to 100 and rougher outside.</Callout>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Blockade radius" value={`${r.rb.toFixed(2)} µm`} sub="Atoms closer than this cannot both be excited" tone={spacing < r.rb ? "good" : "warn"} />
            <Stat label="Interaction at your spacing" value={`${fmt(r.vMHz)} MHz`} sub={`${fmt(r.ratio)}× the Rabi frequency`} tone={blockaded ? "good" : "bad"} />
            <Stat label="Estimated gate error" value={fmtPercent(r.errTotal, r.errTotal < 0.001 ? 3 : 2)} sub="Blockade leakage plus Rydberg decay" tone={r.errTotal < 0.005 ? "good" : r.errTotal < 0.02 ? "warn" : "bad"} />
            <Stat label="CZ gate duration" value={`${r.gateTimeUs.toFixed(2)} µs`} sub="Three-pulse sequence, 4π/Ω" />
          </div>
          <Panel title="Error budget">
            <p className="text-sm text-ink-muted">Imperfect blockade: <span className="font-mono text-ink">{fmtPercent(r.errBlock, 3)}</span></p>
            <p className="text-sm text-ink-muted">Rydberg decay: <span className="font-mono text-ink">{fmtPercent(r.errDecay, 3)}</span> (lifetime {fmtDuration(r.tau)})</p>
          </Panel>
          <Callout tone={blockaded ? "good" : "warn"} title={blockaded ? "Blockade regime" : "Blockade is weak"}>
            {blockaded
              ? `The interaction is ${fmt(r.ratio)} times larger than the drive, so the pair behaves as a single two-level system and entangling gates are possible.`
              : "The interaction is not much larger than the drive, so both atoms can be excited and the gate fails. Move the atoms closer, lower Ω, or raise n."}
          </Callout>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Panel title="Gate error versus Rabi frequency">
          <LineChart series={omegaCurve} xLabel="Rabi frequency Ω/2π (MHz)" yLabel="Error" xLog yLog yMin={1e-6} yMax={1} marker={{ x: omega, label: "you" }} />
          <p className="text-xs text-ink-soft mt-2">Driving harder shortens the gate and cuts decay errors but weakens the blockade. The total has a minimum.</p>
        </Panel>
        <Panel title="Blockade radius versus n">
          <LineChart series={radiusCurve} xLabel="Principal quantum number n" yLabel="Blockade radius (µm)" yMin={0} marker={{ x: n, label: `n = ${n}` }} />
        </Panel>
      </div>
    </CalcCard>
  );
}
