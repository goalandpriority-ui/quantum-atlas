"use client";

import { useMemo, useState } from "react";
import {
  BarList,
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
  fmtBytes,
  fmtDuration,
  fmtPercent,
} from "./ui";

const deg = (d: number) => (d * Math.PI) / 180;

/* ------------------------------------------------------------------ */
/* 1. CHSH / Bell test calculator                                      */
/* ------------------------------------------------------------------ */

export function ChshCalculator() {
  const [a, setA] = useState(0);
  const [a2, setA2] = useState(90);
  const [b, setB] = useState(45);
  const [b2, setB2] = useState(135);
  const [vis, setVis] = useState(0.95);
  const [trials, setTrials] = useState(100000);

  const r = useMemo(() => {
    const E = (x: number, y: number) => -vis * Math.cos(deg(x - y));
    const e1 = E(a, b);
    const e2 = E(a, b2);
    const e3 = E(a2, b);
    const e4 = E(a2, b2);
    const S = e1 - e2 + e3 + e4;
    const absS = Math.abs(S);
    const per = Math.max(1, trials / 4);
    const sigma = Math.sqrt([e1, e2, e3, e4].reduce((s: number, e: number) => s + (1 - e * e) / per, 0));
    const sigmas = sigma > 0 ? (absS - 2) / sigma : Infinity;
    const needFor5 = absS > 2 ? Math.ceil((25 * [e1, e2, e3, e4].reduce((s: number, e: number) => s + (1 - e * e), 0) * 4) / Math.pow(absS - 2, 2)) : Infinity;
    return { e1, e2, e3, e4, S, absS, win: 0.5 + absS / 8, sigma, sigmas, needFor5 };
  }, [a, a2, b, b2, vis, trials]);

  const curve = useMemo(() => {
    const pts = [];
    for (let v = 0; v <= 1.0001; v += 0.01) pts.push({ x: v * 100, y: 2 * Math.SQRT2 * v });
    return pts;
  }, []);

  const violated = r.absS > 2;

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Optimal Bell settings", apply: () => { setA(0); setA2(90); setB(45); setB2(135); } },
          { label: "All angles equal (classical-like)", apply: () => { setA(0); setA2(0); setB(0); setB2(0); } },
          { label: "Noisy source (V = 65%)", apply: () => setVis(0.65) },
          { label: "Perfect source (V = 100%)", apply: () => setVis(1) },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Alice setting a" value={a} onChange={setA} min={0} max={180} step={1} unit="°" />
          <SliderField label="Alice setting a′" value={a2} onChange={setA2} min={0} max={180} step={1} unit="°" />
          <SliderField label="Bob setting b" value={b} onChange={setB} min={0} max={180} step={1} unit="°" />
          <SliderField label="Bob setting b′" value={b2} onChange={setB2} min={0} max={180} step={1} unit="°" />
          <SliderField label="Source visibility V" value={vis} onChange={setVis} min={0} max={1} step={0.01} format={(v) => `${(v * 100).toFixed(0)}%`} help="How much of the ideal entangled state survives. 100% is a perfect singlet, lower values add white noise." />
          <SliderField label="Total trials" value={trials} onChange={(v) => setTrials(Math.round(v))} min={100} max={100000000} log format={(v) => Math.round(v).toLocaleString("en-US")} help="Trials are split evenly across the four setting pairs." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="CHSH value |S|" value={r.absS.toFixed(3)} sub="Classical limit 2, quantum limit 2.828" tone={violated ? "good" : "warn"} />
            <Stat label="Game win probability" value={fmtPercent(r.win, 2)} sub="Classical best 75%, quantum best 85.36%" tone={r.win > 0.75 ? "good" : "neutral"} />
          </div>
          <Panel title="Correlators E(x, y) = −V cos(x − y)">
            <BarList
              format={(v) => v.toFixed(3)}
              max={1}
              items={[
                { label: "E(a, b)", value: Math.abs(r.e1), color: r.e1 < 0 ? "#7c3aed" : "#0ea5e9" },
                { label: "E(a, b′)", value: Math.abs(r.e2), color: r.e2 < 0 ? "#7c3aed" : "#0ea5e9" },
                { label: "E(a′, b)", value: Math.abs(r.e3), color: r.e3 < 0 ? "#7c3aed" : "#0ea5e9" },
                { label: "E(a′, b′)", value: Math.abs(r.e4), color: r.e4 < 0 ? "#7c3aed" : "#0ea5e9" },
              ]}
            />
            <p className="text-[11px] text-ink-soft mt-2">Bars show magnitudes. Purple means negative, blue means positive.</p>
          </Panel>
          <Callout tone={violated ? "good" : "warn"} title={violated ? "Bell inequality violated" : "No violation"}>
            {violated
              ? `S = ${r.absS.toFixed(3)} exceeds 2, so no local hidden-variable model can reproduce these correlations. With ${Math.round(trials).toLocaleString("en-US")} trials the statistical error is about ±${r.sigma.toFixed(4)}, a ${Number.isFinite(r.sigmas) ? r.sigmas.toFixed(1) : "very large"}σ violation.`
              : `S = ${r.absS.toFixed(3)} stays at or below 2, so a local hidden-variable model could explain it. Try the optimal settings and raise the visibility above 70.7%.`}
          </Callout>
          {violated && Number.isFinite(r.needFor5) && (
            <p className="text-xs text-ink-muted">Trials needed for a 5σ violation at these settings: about {Math.round(r.needFor5).toLocaleString("en-US")}.</p>
          )}
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Maximum S versus visibility (optimal settings)">
          <LineChart
            series={[{ name: "S = 2√2 · V", color: "#7c3aed", points: curve }]}
            xLabel="Source visibility V (%)"
            yLabel="CHSH value S"
            yMin={0}
            yMax={3}
            hLines={[{ y: 2, label: "Classical limit 2" }, { y: 2 * Math.SQRT2, label: "Tsirelson bound 2.83", color: "#16a34a" }]}
            marker={{ x: vis * 100, label: "your V" }}
          />
          <p className="text-xs text-ink-soft mt-2">The curve crosses the classical limit at V = 1/√2 ≈ 70.7%, the minimum visibility that can show a violation.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Teleportation fidelity calculator                                */
/* ------------------------------------------------------------------ */

export function TeleportationFidelityCalculator() {
  const [fPair, setFPair] = useState(0.95);
  const [epsM, setEpsM] = useState(0.02);
  const [epsC, setEpsC] = useState(0.005);
  const [links, setLinks] = useState(1);

  const r = useMemo(() => {
    const w = (4 * fPair - 1) / 3;
    const wChain = Math.pow(Math.max(0, w), links);
    const fChain = (1 + 3 * wChain) / 4;
    const fTel = (2 * fChain + 1) / 3;
    const ok = (1 - epsM) * (1 - epsC);
    const fTotal = ok * fTel + (1 - ok) / 2;
    // minimum chain-end fidelity required to beat 2/3 with these local errors
    const fTelNeeded = ((2 / 3) - (1 - ok) / 2) / ok;
    const fChainNeeded = (3 * fTelNeeded - 1) / 2;
    return { w, fChain, fTel, fTotal, fChainNeeded, ok };
  }, [fPair, epsM, epsC, links]);

  const curve = useMemo(() => {
    const pts = [];
    for (let f = 0.25; f <= 1.0001; f += 0.01) {
      const ft = (2 * f + 1) / 3;
      pts.push({ x: f * 100, y: (r.ok * ft + (1 - r.ok) / 2) * 100 });
    }
    return pts;
  }, [r.ok]);

  const chain = useMemo(() => {
    const pts = [];
    const w = (4 * fPair - 1) / 3;
    for (let k = 1; k <= 30; k++) {
      const wk = Math.pow(Math.max(0, w), k);
      pts.push({ x: k, y: ((1 + 3 * wk) / 4) * 100 });
    }
    return pts;
  }, [fPair]);

  const beats = r.fTotal > 2 / 3;
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Ideal", apply: () => { setFPair(1); setEpsM(0); setEpsC(0); setLinks(1); } },
          { label: "Good lab link", apply: () => { setFPair(0.95); setEpsM(0.02); setEpsC(0.005); setLinks(1); } },
          { label: "Marginal link", apply: () => { setFPair(0.8); setEpsM(0.05); setEpsC(0.01); setLinks(1); } },
          { label: "Five-link repeater chain", apply: () => { setFPair(0.97); setEpsM(0.01); setEpsC(0.002); setLinks(5); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Fidelity of each Bell pair" value={fPair} onChange={setFPair} min={0.25} max={1} step={0.005} format={(v) => `${(v * 100).toFixed(1)}%`} help="Overlap of each shared pair with a perfect Bell state. 25% is a fully mixed pair, above 50% the pair is entangled." />
          <SliderField label="Entanglement-swapping links in the chain" value={links} onChange={setLinks} min={1} max={30} step={1} help="1 means a direct pair. More links model a repeater chain that joins pairs by swapping." />
          <SliderField label="Bell-measurement error" value={epsM} onChange={setEpsM} min={0} max={0.2} step={0.001} format={(v) => `${(v * 100).toFixed(1)}%`} help="Chance the sender misidentifies the Bell outcome, so the receiver applies a wrong correction." />
          <SliderField label="Correction-gate error" value={epsC} onChange={setEpsC} min={0} max={0.1} step={0.001} format={(v) => `${(v * 100).toFixed(1)}%`} help="Chance the receiver's Pauli correction goes wrong." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Teleportation fidelity" value={fmtPercent(r.fTotal, 2)} sub="Average over all input states" tone={beats ? "good" : "bad"} />
            <Stat label="End-to-end pair fidelity" value={fmtPercent(r.fChain, 2)} sub={r.fChain > 0.5 ? "Still entangled" : "Entanglement lost"} tone={r.fChain > 0.5 ? "neutral" : "bad"} />
          </div>
          <Callout tone={beats ? "good" : "bad"} title={beats ? "Beats the classical limit" : "Below the classical limit"}>
            The best a classical measure-and-resend strategy can do is 2/3 ≈ 66.7% average fidelity (Popescu 1994). Your setup gives {fmtPercent(r.fTotal, 2)}, which is{" "}
            {beats ? `${((r.fTotal - 2 / 3) * 100).toFixed(1)} points above` : `${((2 / 3 - r.fTotal) * 100).toFixed(1)} points below`} that line.
          </Callout>
          <p className="text-xs text-ink-muted leading-relaxed">
            With these local errors, the end-to-end pair needs a fidelity of at least{" "}
            {r.fChainNeeded > 1 ? "more than 100% (impossible)" : `${(Math.max(0.25, r.fChainNeeded) * 100).toFixed(1)}%`} for teleportation to beat the classical limit.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Panel title="Teleportation fidelity versus pair fidelity">
          <LineChart series={[{ name: "Teleportation fidelity", color: "#7c3aed", points: curve }]} xLabel="Pair fidelity (%)" yLabel="Teleportation fidelity (%)" yMin={40} yMax={100} hLines={[{ y: 66.667, label: "Classical limit 66.7%" }]} marker={{ x: r.fChain * 100, label: "your pair" }} />
        </Panel>
        <Panel title="End-to-end pair fidelity along a swap chain">
          <LineChart series={[{ name: "Chain fidelity", color: "#0ea5e9", points: chain }]} xLabel="Number of links" yLabel="Pair fidelity (%)" yMin={20} yMax={100} hLines={[{ y: 50, label: "No entanglement below 50%" }]} marker={{ x: links, label: "your chain" }} />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Two-qubit entanglement calculator                                */
/* ------------------------------------------------------------------ */

function log2s(x: number): number {
  return x <= 1e-12 ? 0 : Math.log2(x);
}

export function EntanglementCalculator() {
  const [amps, setAmps] = useState<[number, number, number, number]>([0.707, 0, 0, 0.707]);
  const [noise, setNoise] = useState(1);

  const set = (i: number, v: number) => {
    const next: [number, number, number, number] = [...amps] as [number, number, number, number];
    next[i] = v;
    setAmps(next);
  };

  const r = useMemo(() => {
    const norm = Math.sqrt(amps.reduce((s: number, x: number) => s + x * x, 0));
    const n: number[] = norm < 1e-9 ? [1, 0, 0, 0] : amps.map((x: number) => x / norm);
    const [a, b, c, d] = n;
    const conc = 2 * Math.abs(a * d - b * c);
    const root = Math.sqrt(Math.max(0, 1 - conc * conc));
    const l1 = (1 + root) / 2;
    const l2 = (1 - root) / 2;
    const entropy = -(l1 * log2s(l1) + l2 * log2s(l2));
    const purity = 1 - (conc * conc) / 2;
    const probs = [a * a, b * b, c * c, d * d];
    const maxEnt = conc > 0.999;
    const separable = conc < 1e-6;
    const wernerC = Math.max(0, (3 * noise - 1) / 2);
    return { n, conc, entropy, purity, probs, maxEnt, separable, wernerC };
  }, [amps, noise]);

  const labels = ["|00⟩", "|01⟩", "|10⟩", "|11⟩"];
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Bell state Φ⁺", apply: () => setAmps([0.707, 0, 0, 0.707]) },
          { label: "Bell state Ψ⁻", apply: () => setAmps([0, 0.707, -0.707, 0]) },
          { label: "Product state |00⟩", apply: () => setAmps([1, 0, 0, 0]) },
          { label: "Product |+⟩|+⟩", apply: () => setAmps([0.5, 0.5, 0.5, 0.5]) },
          { label: "Partly entangled", apply: () => setAmps([0.9, 0, 0, 0.436]) },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-ink-muted mb-3">Set the four real amplitudes. The calculator normalizes them for you.</p>
          {labels.map((l, i) => (
            <SliderField key={l} label={`Amplitude of ${l}`} value={amps[i]} onChange={(v) => set(i, v)} min={-1} max={1} step={0.01} format={(v) => v.toFixed(2)} />
          ))}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Concurrence" value={r.conc.toFixed(3)} sub="0 is a product state, 1 is maximally entangled" tone={r.conc > 0.5 ? "good" : "neutral"} />
            <Stat label="Entanglement entropy" value={`${r.entropy.toFixed(3)} ebit`} sub="Maximum for two qubits is 1 ebit" />
            <Stat label="Purity of one qubit" value={r.purity.toFixed(3)} sub="1 means the qubit alone is pure, 0.5 means maximally mixed" />
            <Stat label="Verdict" value={r.separable ? "Separable" : r.maxEnt ? "Maximally entangled" : "Entangled"} />
          </div>
          <Panel title="Measurement outcome probabilities (computational basis)">
            <BarList format={(v) => fmtPercent(v, 1)} max={1} items={labels.map((l, i) => ({ label: l, value: r.probs[i] }))} />
          </Panel>
        </div>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Panel title="Add white noise to a Bell state">
          <SliderField label="Mixing weight p of the Bell state" value={noise} onChange={setNoise} min={0} max={1} step={0.01} format={(v) => `${(v * 100).toFixed(0)}%`} help="ρ = p |Φ⁺⟩⟨Φ⁺| + (1 − p) I/4, the Werner state." />
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Concurrence" value={r.wernerC.toFixed(3)} sub="max(0, (3p − 1)/2)" />
            <Stat label="State fidelity" value={fmtPercent((3 * noise + 1) / 4, 1)} sub="Overlap with the ideal Bell state" tone={noise > 1 / 3 ? "good" : "bad"} />
          </div>
          <p className="text-xs text-ink-soft mt-3">The state stays entangled only while p is above 1/3 (fidelity above 50%).</p>
        </Panel>
        <Panel title="How the numbers are computed">
          <p className="text-sm text-ink-muted leading-relaxed">
            For a pure two-qubit state with amplitudes a, b, c, d, the concurrence is 2|ad − bc|. The reduced state of one qubit has eigenvalues (1 ± √(1 − C²))/2, and the entropy of
            those eigenvalues is the entanglement entropy in ebits.
          </p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Grover search calculator                                          */
/* ------------------------------------------------------------------ */

export function GroverCalculator() {
  const [bits, setBits] = useState(20);
  const [marked, setMarked] = useState(1);
  const [iter, setIter] = useState(0);
  const [classicalRate, setClassicalRate] = useState(1e9);
  const [quantumRate, setQuantumRate] = useState(1e4);
  const [useOpt, setUseOpt] = useState(true);

  const r = useMemo(() => {
    const N = Math.pow(2, bits);
    const M = Math.min(marked, N);
    const theta = Math.asin(Math.sqrt(M / N));
    const kOpt = Math.max(0, Math.round(Math.PI / (4 * theta) - 0.5));
    const k = useOpt ? kOpt : iter;
    const success = Math.pow(Math.sin((2 * k + 1) * theta), 2);
    const classicalQueries = (N + 1) / (M + 1);
    const tC = classicalQueries / classicalRate;
    const tQ = k / quantumRate;
    return { N, M, theta, kOpt, k, success, classicalQueries, tC, tQ, speedup: classicalQueries / Math.max(1, kOpt) };
  }, [bits, marked, iter, classicalRate, quantumRate, useOpt]);

  const curve = useMemo(() => {
    const max = Math.min(Math.max(r.kOpt * 2.2, 6), 4000);
    const pts = [];
    const stepN = Math.max(1, Math.floor(max / 200));
    for (let k = 0; k <= max; k += stepN) pts.push({ x: k, y: Math.pow(Math.sin((2 * k + 1) * r.theta), 2) * 100 });
    return pts;
  }, [r.kOpt, r.theta]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Database of 1 million", apply: () => { setBits(20); setMarked(1); } },
          { label: "AES-128 key search (2^128)", apply: () => { setBits(128); setMarked(1); } },
          { label: "Many solutions (25%)", apply: () => { setBits(10); setMarked(256); } },
          { label: "Overshoot demo", apply: () => { setBits(10); setMarked(1); setUseOpt(false); setIter(60); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Search space size" value={bits} onChange={setBits} min={2} max={128} step={1} format={(v) => `2^${v} (${fmt(Math.pow(2, v))})`} help="Number of candidates N = 2 to the power of n qubits-worth of bits." />
          <SliderField label="Marked items M" value={marked} onChange={(v) => setMarked(Math.round(v))} min={1} max={4096} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <div className="mb-4">
            <label className="inline-flex items-center gap-2 text-sm text-ink">
              <input type="checkbox" checked={useOpt} onChange={(e) => setUseOpt(e.target.checked)} className="accent-quantum" />
              Use the optimal number of iterations
            </label>
          </div>
          {!useOpt && <SliderField label="Grover iterations k" value={iter} onChange={(v) => setIter(Math.round(v))} min={0} max={Math.max(10, r.kOpt * 3)} step={1} />}
          <SliderField label="Classical checks per second" value={classicalRate} onChange={setClassicalRate} min={1e3} max={1e12} log format={fmt} />
          <SliderField label="Quantum Grover iterations per second" value={quantumRate} onChange={setQuantumRate} min={1} max={1e8} log format={fmt} help="One iteration includes the full oracle circuit, so this is far lower than a gate rate." />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Optimal iterations" value={r.kOpt.toLocaleString("en-US")} sub="≈ (π/4)√(N/M)" />
            <Stat label="Success probability" value={fmtPercent(r.success, 2)} sub={`after ${r.k.toLocaleString("en-US")} iterations`} tone={r.success > 0.9 ? "good" : r.success > 0.5 ? "warn" : "bad"} />
            <Stat label="Classical checks (average)" value={fmt(r.classicalQueries)} sub="(N + 1)/(M + 1)" />
            <Stat label="Query speedup" value={`${fmt(r.speedup)}×`} sub="Classical checks ÷ Grover iterations" />
          </div>
          <Panel title="Wall-clock time">
            <p className="text-sm text-ink-muted leading-relaxed mb-1">Classical: <span className="font-mono text-ink">{fmtDuration(r.tC)}</span></p>
            <p className="text-sm text-ink-muted leading-relaxed">Quantum: <span className="font-mono text-ink">{fmtDuration(r.tQ)}</span></p>
            <p className="text-xs text-ink-soft mt-2">{r.tQ < r.tC ? "At these rates the quantum search finishes first." : "At these rates the classical search finishes first, because quantum iterations are slow."}</p>
          </Panel>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Success probability versus iterations">
          <LineChart series={[{ name: "P(success)", color: "#7c3aed", points: curve }]} xLabel="Grover iterations" yLabel="Success probability (%)" yMin={0} yMax={100} marker={{ x: r.k, label: "k" }} />
          <p className="text-xs text-ink-soft mt-2">The probability oscillates. Stop at the first peak. Running too long rotates the state past the answer and success falls again.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Classical simulation memory calculator                            */
/* ------------------------------------------------------------------ */

const PRECISIONS = [
  { value: "8", label: "Single precision complex (8 bytes per amplitude)" },
  { value: "16", label: "Double precision complex (16 bytes per amplitude)" },
];

export function SimulationMemoryCalculator() {
  const [n, setN] = useState(45);
  const [bytes, setBytes] = useState("16");
  const [memGb, setMemGb] = useState(80);
  const [devices, setDevices] = useState(1);
  const [bw, setBw] = useState(2000);
  const [gates, setGates] = useState(1000);

  const r = useMemo(() => {
    const b = Number(bytes);
    const amps = Math.pow(2, n);
    const need = amps * b;
    const total = memGb * 1e9 * devices;
    const maxQubits = Math.floor(Math.log2(total / b));
    const devicesNeeded = Math.ceil(need / (memGb * 1e9));
    const perGate = (2 * need) / (bw * 1e9 * devices);
    return { amps, need, total, maxQubits, devicesNeeded, perGate, circuit: perGate * gates };
  }, [n, bytes, memGb, devices, bw, gates]);

  const curve = useMemo(() => {
    const b = Number(bytes);
    const pts = [];
    for (let q = 1; q <= 80; q++) pts.push({ x: q, y: Math.pow(2, q) * b });
    return pts;
  }, [bytes]);

  const rows = [30, 40, 45, 50, 53, 60, 70, 100];
  const fits = r.need <= r.total;
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Laptop (16 GB)", apply: () => { setMemGb(16); setDevices(1); setBw(50); } },
          { label: "One 80 GB GPU", apply: () => { setMemGb(80); setDevices(1); setBw(2000); } },
          { label: "Multi-GPU node (8 × 80 GB)", apply: () => { setMemGb(80); setDevices(8); setBw(2000); } },
          { label: "Sycamore size (53 qubits)", apply: () => setN(53) },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Number of qubits" value={n} onChange={setN} min={1} max={100} step={1} />
          <SelectField label="Amplitude precision" value={bytes} onChange={setBytes} options={PRECISIONS} />
          <NumberField label="Memory per device" value={memGb} onChange={setMemGb} min={1} max={100000} unit="GB" />
          <NumberField label="Number of devices" value={devices} onChange={(v) => setDevices(Math.max(1, Math.round(v)))} min={1} max={1000000} />
          <NumberField label="Memory bandwidth per device" value={bw} onChange={setBw} min={1} max={100000} unit="GB/s" help="A gate on a state vector reads and writes every amplitude, so speed is limited by bandwidth." />
          <NumberField label="Gates in the circuit" value={gates} onChange={(v) => setGates(Math.max(1, Math.round(v)))} min={1} max={1e9} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="State vector size" value={fmtBytes(r.need)} sub={`${fmt(r.amps)} amplitudes`} tone={fits ? "good" : "bad"} />
            <Stat label="Your total memory" value={fmtBytes(r.total)} sub={fits ? "The full state fits" : "Does not fit"} />
            <Stat label="Largest circuit that fits" value={`${r.maxQubits} qubits`} />
            <Stat label="Devices needed" value={fmt(r.devicesNeeded)} sub={`of ${memGb} GB each`} />
          </div>
          <Panel title="Speed (memory-bound estimate)">
            <p className="text-sm text-ink-muted">Time per gate: <span className="font-mono text-ink">{fmtDuration(r.perGate)}</span></p>
            <p className="text-sm text-ink-muted">Whole circuit: <span className="font-mono text-ink">{fmtDuration(r.circuit)}</span></p>
          </Panel>
          <Callout tone={fits ? "good" : "warn"}>
            {fits
              ? "This circuit can be simulated exactly with a state-vector simulator on your hardware."
              : "Brute-force state-vector simulation will not work here. Real experiments of this size are simulated only if the circuit has special structure, such as low entanglement (tensor networks) or only Clifford gates."}
          </Callout>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Panel title="Memory needed versus qubits">
          <LineChart
            series={[{ name: "State vector", color: "#7c3aed", points: curve }]}
            xLabel="Qubits"
            yLabel="Bytes"
            yLog
            yMin={1e1}
            yMax={1e30}
            hLines={[
              { y: 16e9, label: "16 GB laptop", color: "#0ea5e9" },
              { y: 80e9, label: "80 GB GPU", color: "#16a34a" },
              { y: 1e16, label: "~10 PB, largest supercomputers", color: "#e11d48" },
            ]}
            marker={{ x: n, label: `${n} qubits` }}
          />
        </Panel>
        <Panel title="Quick reference">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-soft text-xs">
                <th className="py-1">Qubits</th>
                <th className="py-1">Memory</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((q) => (
                <tr key={q} className={q === n ? "text-quantum" : "text-ink-muted"}>
                  <td className="py-0.5 font-mono">{q}</td>
                  <td className="py-0.5 font-mono">{fmtBytes(Math.pow(2, q) * Number(bytes))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </CalcCard>
  );
}
