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
  fmtDuration,
  fmtPercent,
  type Series,
} from "./ui";

/* ------------------------------------------------------------------ */
/* 6. Surface code overhead calculator                                  */
/* ------------------------------------------------------------------ */

const MODES = [
  { value: "threshold", label: "Threshold model: p_L = 0.1 · (p / p_th)^((d+1)/2)" },
  { value: "lambda", label: "Measured suppression factor Λ per step of distance 2" },
];

export function SurfaceCodeCalculator() {
  const [mode, setMode] = useState("threshold");
  const [p, setP] = useState(1e-3);
  const [pth, setPth] = useState(0.01);
  const [lambda, setLambda] = useState(2.14);
  const [eps3, setEps3] = useState(0.0065);
  const [logicalQubits, setLogicalQubits] = useState(100);
  const [steps, setSteps] = useState(1e8);
  const [target, setTarget] = useState(0.1);
  const [overhead, setOverhead] = useState(1.5);
  const [cycleUs, setCycleUs] = useState(1);

  const pL = (d: number, pp = p, lam = lambda): number =>
    mode === "threshold" ? 0.1 * Math.pow(pp / pth, (d + 1) / 2) : eps3 * Math.pow(lam, -(d - 3) / 2);

  const r = useMemo(() => {
    const above = mode === "threshold" && p >= pth;
    let dFound: number | null = null;
    if (!above) {
      for (let d = 3; d <= 301; d += 2) {
        const perRound = mode === "threshold" ? 0.1 * Math.pow(p / pth, (d + 1) / 2) : eps3 * Math.pow(lambda, -(d - 3) / 2);
        if (perRound * logicalQubits * steps * d <= target) {
          dFound = d;
          break;
        }
      }
    }
    const perLogical = dFound ? 2 * dFound * dFound - 1 : 0;
    const total = dFound ? perLogical * logicalQubits * overhead : 0;
    const runtime = dFound ? steps * dFound * cycleUs * 1e-6 : 0;
    const budget = dFound ? target / (logicalQubits * steps * dFound) : target / (logicalQubits * steps * 3);
    return { above, dFound, perLogical, total, runtime, budget };
  }, [mode, p, pth, lambda, eps3, logicalQubits, steps, target, overhead, cycleUs]);

  const curves = useMemo(() => {
    const ds: number[] = [];
    for (let d = 3; d <= 41; d += 2) ds.push(d);
    const f = (d: number, pp: number, lam: number): number =>
      mode === "threshold" ? 0.1 * Math.pow(pp / pth, (d + 1) / 2) : eps3 * Math.pow(lam, -(d - 3) / 2);
    const make = (name: string, color: string, pp: number, lam: number): Series => ({
      name,
      color,
      points: ds.map((d) => ({ x: d, y: Math.max(1e-30, Math.min(1, f(d, pp, lam))) })),
    });
    if (mode === "threshold") {
      return [make("Half your error rate", "#16a34a", p / 2, lambda), make("Your error rate", "#7c3aed", p, lambda), make("Double your error rate", "#e11d48", Math.min(p * 2, pth * 0.99), lambda)];
    }
    return [make("Λ^0.5 (worse)", "#e11d48", p, Math.sqrt(lambda)), make("Your Λ", "#7c3aed", p, lambda), make("Λ^1.5 (better)", "#16a34a", p, Math.pow(lambda, 1.5))];
  }, [mode, p, pth, lambda, eps3]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Today's best chips (p = 0.3%)", apply: () => { setMode("threshold"); setP(0.003); } },
          { label: "Good target (p = 0.1%)", apply: () => { setMode("threshold"); setP(0.001); } },
          { label: "Google-style Λ = 2.14", apply: () => { setMode("lambda"); setLambda(2.14); setEps3(0.0065); } },
          { label: "RSA-scale algorithm", apply: () => { setMode("threshold"); setP(0.001); setLogicalQubits(1500); setSteps(1e9); setTarget(0.1); } },
          { label: "Small chemistry run", apply: () => { setMode("threshold"); setP(0.001); setLogicalQubits(100); setSteps(1e7); setTarget(0.1); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SelectField label="Error model" value={mode} onChange={setMode} options={MODES} />
          {mode === "threshold" ? (
            <>
              <SliderField label="Physical error rate p" value={p} onChange={setP} min={1e-5} max={2e-2} log format={(v) => `${(v * 100).toFixed(3)}%`} help="Error per physical operation, including measurement, in the error-correction circuit." />
              <SliderField label="Threshold p_th" value={pth} onChange={setPth} min={0.003} max={0.015} step={0.0005} format={(v) => `${(v * 100).toFixed(2)}%`} help="Around 0.6% to 1% for the surface code under circuit-level noise." />
            </>
          ) : (
            <>
              <SliderField label="Suppression factor Λ" value={lambda} onChange={setLambda} min={1.05} max={10} step={0.01} format={(v) => v.toFixed(2)} help="Factor by which logical error drops each time the distance increases by 2." />
              <SliderField label="Logical error per round at distance 3" value={eps3} onChange={setEps3} min={1e-4} max={0.05} log format={(v) => `${(v * 100).toFixed(3)}%`} />
            </>
          )}
          <SliderField label="Logical qubits in the algorithm" value={logicalQubits} onChange={(v) => setLogicalQubits(Math.round(v))} min={1} max={10000} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Logical time steps" value={steps} onChange={setSteps} min={1e3} max={1e12} log format={fmt} help="Each logical step takes d rounds of error correction." />
          <SliderField label="Acceptable total failure probability" value={target} onChange={setTarget} min={0.001} max={0.5} log format={(v) => `${(v * 100).toFixed(1)}%`} />
          <SliderField label="Routing and magic-state overhead multiplier" value={overhead} onChange={setOverhead} min={1} max={4} step={0.1} format={(v) => `${v.toFixed(1)}×`} help="Extra qubits for lattice surgery routing and T-state factories. Published estimates are often 1.5× to 3×." />
          <SliderField label="Error-correction cycle time" value={cycleUs} onChange={setCycleUs} min={0.1} max={1000} log format={(v) => `${v.toFixed(v < 10 ? 2 : 0)} µs`} />
        </div>
        <div className="space-y-4">
          {r.above && (
            <Callout tone="bad" title="Above threshold">
              With p at or above the threshold, adding qubits makes the logical error worse, not better. No code distance works. Reduce p.
            </Callout>
          )}
          {!r.above && !r.dFound && (
            <Callout tone="bad" title="No solution up to distance 301">
              This setup needs a larger distance than the calculator searches. Reduce the algorithm size or improve the physical error rate.
            </Callout>
          )}
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Code distance d" value={r.dFound ? String(r.dFound) : "n/a"} sub="Smallest odd distance that meets the budget" tone={r.dFound ? "good" : "bad"} />
            <Stat label="Physical qubits per logical" value={r.dFound ? fmt(r.perLogical) : "n/a"} sub="2d² − 1 for a rotated surface code patch" />
            <Stat label="Total physical qubits" value={r.dFound ? fmt(r.total) : "n/a"} sub={`${logicalQubits.toLocaleString("en-US")} logical × ${overhead.toFixed(1)}× overhead`} />
            <Stat label="Runtime" value={r.dFound ? fmtDuration(r.runtime) : "n/a"} sub={`${fmt(steps)} steps × d rounds × ${cycleUs} µs`} />
          </div>
          {r.dFound && (
            <Panel title="Error budget">
              <p className="text-sm text-ink-muted leading-relaxed">
                Per-round logical error budget: <span className="font-mono text-ink">{fmt(r.budget)}</span>. The code reaches{" "}
                <span className="font-mono text-ink">{fmt(pL(r.dFound))}</span> at d = {r.dFound}.
              </p>
            </Panel>
          )}
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Logical error per round versus code distance">
          <LineChart
            series={curves}
            xLabel="Code distance d"
            yLabel="Logical error per round"
            yLog
            yMin={1e-20}
            yMax={1}
            hLines={[{ y: Math.max(1e-20, r.budget), label: "Your per-round budget", color: "#0ea5e9" }]}
            marker={r.dFound ? { x: r.dFound, label: `d = ${r.dFound}` } : undefined}
          />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Circuit success probability calculator                            */
/* ------------------------------------------------------------------ */

export function CircuitSuccessCalculator() {
  const [n, setN] = useState(20);
  const [g1, setG1] = useState(200);
  const [g2, setG2] = useState(100);
  const [e1, setE1] = useState(0.0005);
  const [e2, setE2] = useState(0.005);
  const [er, setEr] = useState(0.01);

  const r = useMemo(() => {
    const l1 = -g1 * Math.log(1 - e1);
    const l2 = -g2 * Math.log(1 - e2);
    const lr = -n * Math.log(1 - er);
    const F = Math.exp(-(l1 + l2 + lr));
    const gBudget = Math.log(0.5) / Math.log(1 - e2);
    const heavyOutput = F * 0.847 + (1 - F) * 0.5;
    return { l1, l2, lr, F, gBudget, heavyOutput, qvPass: heavyOutput > 2 / 3 };
  }, [n, g1, g2, e1, e2, er]);

  const curves = useMemo(() => {
    const other = Math.exp(-(r.l1 + r.lr));
    const make = (name: string, color: string, e: number): Series => {
      const pts = [];
      for (let k = 0; k <= 60; k++) {
        const g = Math.pow(10, 0 + (k / 60) * 5);
        pts.push({ x: g, y: Math.max(1e-6, other * Math.pow(1 - e, g)) * 100 });
      }
      return { name, color, points: pts };
    };
    return [make("Your two-qubit error", "#7c3aed", e2), make("Error ÷ 3", "#0ea5e9", e2 / 3), make("Error ÷ 10", "#16a34a", e2 / 10)];
  }, [e2, r.l1, r.lr]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Google Sycamore benchmark", apply: () => { setN(53); setG1(1113); setG2(430); setE1(0.0016); setE2(0.0062); setEr(0.038); } },
          { label: "Quantum-volume-style 5×5 circuit", apply: () => { setN(5); setG2(38); setG1(190); setE1(0.0005); setE2(0.005); setEr(0.01); } },
          { label: "Ion-trap quality", apply: () => { setN(20); setG1(200); setG2(100); setE1(0.0001); setE2(0.001); setEr(0.003); } },
          { label: "Noisy early device", apply: () => { setN(20); setG1(200); setG2(100); setE1(0.002); setE2(0.02); setEr(0.03); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Qubits measured at the end" value={n} onChange={(v) => setN(Math.round(v))} min={1} max={200} step={1} />
          <SliderField label="Single-qubit gates" value={g1} onChange={(v) => setG1(Math.round(v))} min={0} max={100000} log={false} step={10} format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Two-qubit gates" value={g2} onChange={(v) => setG2(Math.round(v))} min={0} max={20000} step={5} format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Single-qubit gate error" value={e1} onChange={setE1} min={1e-5} max={0.02} log format={(v) => `${(v * 100).toFixed(3)}%`} />
          <SliderField label="Two-qubit gate error" value={e2} onChange={setE2} min={1e-4} max={0.1} log format={(v) => `${(v * 100).toFixed(3)}%`} />
          <SliderField label="Readout error per qubit" value={er} onChange={setEr} min={1e-4} max={0.1} log format={(v) => `${(v * 100).toFixed(2)}%`} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Probability of no error" value={fmtPercent(r.F, r.F < 0.01 ? 3 : 2)} sub="Circuit fidelity under the product model" tone={r.F > 0.5 ? "good" : r.F > 0.1 ? "warn" : "bad"} />
            <Stat label="Two-qubit gate budget" value={fmt(r.gBudget)} sub="Gates before success falls to 50% (two-qubit errors only)" />
          </div>
          <Panel title="Where the errors come from (share of total error exponent)">
            <BarList
              format={(v) => fmtPercent(v, 1)}
              max={1}
              items={[
                { label: "Single-qubit gates", value: r.l1 / (r.l1 + r.l2 + r.lr || 1), color: "#0ea5e9" },
                { label: "Two-qubit gates", value: r.l2 / (r.l1 + r.l2 + r.lr || 1), color: "#7c3aed" },
                { label: "Readout", value: r.lr / (r.l1 + r.l2 + r.lr || 1), color: "#f59e0b" },
              ]}
            />
          </Panel>
          <Callout tone={r.qvPass ? "good" : "warn"} title="Quantum-volume style check">
            Ideal random circuits put about 85% of probability on heavy outputs. With noise the heavy-output share is roughly {fmtPercent(r.heavyOutput, 1)}. A quantum volume test needs more than 66.7%, so this circuit would {r.qvPass ? "pass" : "fail"} such a test.
          </Callout>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Success probability versus number of two-qubit gates">
          <LineChart series={curves} xLabel="Two-qubit gates" yLabel="Success probability (%)" xLog yLog yMin={0.01} yMax={100} marker={{ x: Math.max(1, g2), label: "your circuit" }} />
          <p className="text-xs text-ink-soft mt-2">Dividing the error rate by ten extends the usable circuit size by roughly a factor of ten, not a few percent.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Coherence-limited gate error calculator                           */
/* ------------------------------------------------------------------ */

export function CoherenceCalculator() {
  const [t1, setT1] = useState(150);
  const [t2, setT2] = useState(120);
  const [tg1, setTg1] = useState(30);
  const [tg2, setTg2] = useState(100);

  const r = useMemo(() => {
    const t2eff = Math.min(t2, 2 * t1);
    const capped = t2 > 2 * t1;
    const inf = (tNs: number, T1: number, T2: number) => {
      const t = tNs * 1e-3; // ns to µs
      return (3 - Math.exp(-t / T1) - 2 * Math.exp(-t / T2)) / 6;
    };
    const e1q = inf(tg1, t1, t2eff);
    const e2q = 2 * inf(tg2, t1, t2eff);
    const tphiInv = 1 / t2eff - 1 / (2 * t1);
    const tphi = tphiInv > 1e-15 ? 1 / tphiInv : Infinity;
    const gatesInT2 = (t2eff * 1e3) / tg2;
    const depth50 = Math.log(2) / Math.max(e2q, 1e-15);
    return { t2eff, capped, e1q, e2q, tphi, gatesInT2, depth50 };
  }, [t1, t2, tg1, tg2]);

  const curves = useMemo(() => {
    const t2eff = Math.min(t2, 2 * t1);
    const make = (name: string, color: string, k: number): Series => {
      const pts = [];
      for (let i = 0; i <= 60; i++) {
        const ns = Math.pow(10, (i / 60) * 5);
        const t = ns * 1e-3;
        const e = 2 * ((3 - Math.exp(-t / (t1 * k)) - 2 * Math.exp(-t / (t2eff * k))) / 6);
        pts.push({ x: ns, y: Math.max(1e-12, e) });
      }
      return { name, color, points: pts };
    };
    return [make("Your T1, T2", "#7c3aed", 1), make("10× longer coherence", "#0ea5e9", 10), make("100× longer coherence", "#16a34a", 100)];
  }, [t1, t2]);

  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Typical transmon", apply: () => { setT1(150); setT2(120); setTg1(30); setTg2(100); } },
          { label: "Best lab transmon (T1 ≈ 1 ms)", apply: () => { setT1(1000); setT2(800); setTg1(25); setTg2(60); } },
          { label: "Trapped ion (order of magnitude)", apply: () => { setT1(1e7); setT2(1e6); setTg1(10000); setTg2(100000); } },
          { label: "Neutral atom (order of magnitude)", apply: () => { setT1(1e7); setT2(1e6); setTg1(1000); setTg2(300); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Energy relaxation time T1" value={t1} onChange={setT1} min={1} max={1e8} log format={(v) => (v >= 1e6 ? `${(v / 1e6).toFixed(1)} s` : v >= 1e3 ? `${(v / 1e3).toFixed(1)} ms` : `${v.toFixed(0)} µs`)} />
          <SliderField label="Dephasing time T2" value={t2} onChange={setT2} min={1} max={2e8} log format={(v) => (v >= 1e6 ? `${(v / 1e6).toFixed(1)} s` : v >= 1e3 ? `${(v / 1e3).toFixed(1)} ms` : `${v.toFixed(0)} µs`)} help="T2 cannot exceed 2·T1. The calculator caps it if you go higher." />
          <SliderField label="Single-qubit gate time" value={tg1} onChange={setTg1} min={1} max={1e6} log format={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)} µs` : `${v.toFixed(0)} ns`)} />
          <SliderField label="Two-qubit gate time" value={tg2} onChange={setTg2} min={1} max={1e7} log format={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)} µs` : `${v.toFixed(0)} ns`)} />
          {r.capped && <Callout tone="warn">T2 was capped at 2·T1 = {fmt(r.t2eff)} µs, the physical maximum.</Callout>}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Single-qubit error floor" value={fmtPercent(r.e1q, r.e1q < 1e-4 ? 4 : 3)} sub="From decoherence alone" tone={r.e1q < 1e-3 ? "good" : "warn"} />
            <Stat label="Two-qubit error floor" value={fmtPercent(r.e2q, r.e2q < 1e-4 ? 4 : 3)} sub="Both qubits decohere during the gate" tone={r.e2q < 1e-3 ? "good" : "warn"} />
            <Stat label="Gates per T2" value={fmt(r.gatesInT2)} sub="Two-qubit gates that fit inside one dephasing time" />
            <Stat label="Depth at 50% success" value={fmt(r.depth50)} sub="Two-qubit layers if decoherence were the only error" />
          </div>
          <Panel title="Pure dephasing time">
            <p className="text-sm text-ink-muted">Tφ = <span className="font-mono text-ink">{Number.isFinite(r.tphi) ? fmtDuration(r.tphi * 1e-6) : "∞"}</span>, from 1/Tφ = 1/T2 − 1/(2·T1).</p>
          </Panel>
          <Callout tone="info">Real gate errors are larger than this floor, because control errors, crosstalk, leakage, and measurement add on top of decoherence.</Callout>
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Decoherence-limited two-qubit error versus gate time">
          <LineChart
            series={curves}
            xLabel="Gate duration (ns)"
            yLabel="Error from decoherence"
            xLog
            yLog
            yMin={1e-9}
            yMax={1}
            hLines={[{ y: 1e-3, label: "0.1%" }, { y: 1e-2, label: "1% (surface-code threshold region)", color: "#f59e0b" }]}
            marker={{ x: tg2, label: "your gate" }}
          />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Error mitigation overhead calculator                              */
/* ------------------------------------------------------------------ */

export function MitigationCalculator() {
  const [e2, setE2] = useState(0.003);
  const [g2, setG2] = useState(200);
  const [e1, setE1] = useState(0.0003);
  const [g1, setG1] = useState(400);
  const [delta, setDelta] = useState(0.01);
  const [rate, setRate] = useState(5000);
  const [budget, setBudget] = useState(1e8);

  const r = useMemo(() => {
    const lambda = e2 * g2 + e1 * g1;
    const gamma = Math.exp(2 * lambda);
    const shotsPec = (gamma * gamma) / (delta * delta);
    const shotsRaw = 1 / (delta * delta);
    const signal = Math.exp(-lambda);
    const gammaMax = delta * Math.sqrt(budget);
    const lambdaMax = gammaMax > 1 ? Math.log(gammaMax) / 2 : 0;
    const g2Max = e2 > 0 ? lambdaMax / e2 : Infinity;
    return { lambda, gamma, shotsPec, shotsRaw, signal, lambdaMax, g2Max, timeSec: shotsPec / rate };
  }, [e2, g2, e1, g1, delta, rate, budget]);

  const curve = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const g = Math.pow(10, 0.5 + (i / 60) * 3.5);
      const lam = e2 * g + e1 * (g1 / Math.max(1, g2)) * g;
      pts.push({ x: g, y: Math.exp(4 * lam) / (delta * delta) });
    }
    return pts;
  }, [e2, e1, g1, g2, delta]);

  const survival = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const g = Math.pow(10, 0.5 + (i / 60) * 3.5);
      const lam = e2 * g + e1 * (g1 / Math.max(1, g2)) * g;
      pts.push({ x: g, y: Math.exp(-lam) * 100 });
    }
    return pts;
  }, [e2, e1, g1, g2]);

  const feasible = r.shotsPec <= budget;
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Utility-style circuit", apply: () => { setE2(0.002); setG2(2880); setE1(0.0002); setG1(5000); setDelta(0.02); setBudget(1e9); } },
          { label: "Small VQE circuit", apply: () => { setE2(0.005); setG2(60); setE1(0.0005); setG1(150); setDelta(0.005); setBudget(1e8); } },
          { label: "Too deep to mitigate", apply: () => { setE2(0.005); setG2(2000); setE1(0.0005); setG1(4000); setDelta(0.01); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SliderField label="Two-qubit gate error" value={e2} onChange={setE2} min={1e-4} max={0.05} log format={(v) => `${(v * 100).toFixed(3)}%`} />
          <SliderField label="Two-qubit gates" value={g2} onChange={(v) => setG2(Math.round(v))} min={1} max={10000} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Single-qubit gate error" value={e1} onChange={setE1} min={1e-5} max={0.01} log format={(v) => `${(v * 100).toFixed(3)}%`} />
          <SliderField label="Single-qubit gates" value={g1} onChange={(v) => setG1(Math.round(v))} min={1} max={50000} log format={(v) => Math.round(v).toLocaleString("en-US")} />
          <SliderField label="Target precision δ (absolute)" value={delta} onChange={setDelta} min={0.001} max={0.2} log format={(v) => v.toFixed(3)} help="Standard error you want on the expectation value, which lies between −1 and 1." />
          <SliderField label="Shot rate" value={rate} onChange={setRate} min={10} max={1e6} log format={(v) => `${fmt(v)} /s`} />
          <SliderField label="Total shot budget" value={budget} onChange={setBudget} min={1e4} max={1e12} log format={fmt} />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Noise strength λ" value={r.lambda.toFixed(3)} sub="Sum of gate errors, the expected number of faults" />
            <Stat label="Sampling overhead γ" value={fmt(r.gamma)} sub="e^(2λ) for Pauli noise" tone={r.gamma < 10 ? "good" : r.gamma < 1000 ? "warn" : "bad"} />
            <Stat label="Shots with mitigation" value={fmt(r.shotsPec)} sub={`${fmt(r.shotsPec / r.shotsRaw)}× the shots of a noise-free run`} tone={feasible ? "good" : "bad"} />
            <Stat label="Wall-clock time" value={fmtDuration(r.timeSec)} sub={`at ${fmt(rate)} shots per second`} />
          </div>
          <Panel title="Without mitigation">
            <p className="text-sm text-ink-muted leading-relaxed">
              Noise damps the signal to about <span className="font-mono text-ink">{fmtPercent(r.signal, 1)}</span> of its true value, a bias you cannot average away.
            </p>
          </Panel>
          <Callout tone={feasible ? "good" : "bad"} title={feasible ? "Within your shot budget" : "Beyond your shot budget"}>
            With {fmt(budget)} shots and δ = {delta}, mitigation can handle noise strength up to λ ≈ {r.lambdaMax.toFixed(2)}, which is about {Number.isFinite(r.g2Max) ? fmt(r.g2Max) : "unlimited"} two-qubit gates at this error rate.
          </Callout>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Panel title="Shots needed versus circuit size">
          <LineChart series={[{ name: "Mitigated shots", color: "#7c3aed", points: curve }]} xLabel="Two-qubit gates" yLabel="Shots" xLog yLog yMin={1e3} yMax={1e18} hLines={[{ y: budget, label: "Your budget", color: "#0ea5e9" }]} marker={{ x: g2, label: "you" }} />
        </Panel>
        <Panel title="Signal surviving without mitigation">
          <LineChart series={[{ name: "Signal", color: "#16a34a", points: survival }]} xLabel="Two-qubit gates" yLabel="Signal remaining (%)" xLog yMin={0} yMax={100} marker={{ x: g2, label: "you" }} />
        </Panel>
      </div>
    </CalcCard>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Shot count calculator                                            */
/* ------------------------------------------------------------------ */

const Z_TABLE: Record<string, number> = { "90": 1.645, "95": 1.96, "99": 2.576, "99.9": 3.291 };
const SHOT_MODES = [
  { value: "prob", label: "Probability of one outcome" },
  { value: "expect", label: "Expectation value of a ±1 observable" },
  { value: "terms", label: "Weighted sum of Pauli terms (VQE energy)" },
  { value: "dist", label: "Whole output distribution (total variation distance)" },
];

export function ShotCountCalculator() {
  const [mode, setMode] = useState("prob");
  const [conf, setConf] = useState("95");
  const [prob, setProb] = useState(0.5);
  const [expectation, setExpectation] = useState(0);
  const [margin, setMargin] = useState(0.01);
  const [terms, setTerms] = useState(100);
  const [avgCoeff, setAvgCoeff] = useState(0.5);
  const [qubits, setQubits] = useState(10);
  const [rate, setRate] = useState(5000);

  const z = Z_TABLE[conf];

  const shots = (mg: number): number => {
    if (mode === "prob") return (z * z * prob * (1 - prob)) / (mg * mg);
    if (mode === "expect") return (z * z * (1 - expectation * expectation)) / (mg * mg);
    if (mode === "terms") return (z * z * Math.pow(terms * avgCoeff, 2)) / (mg * mg);
    return Math.pow(2, qubits) / (mg * mg);
  };

  const n = shots(margin);
  const curves = useMemo(() => {
    const make = (name: string, color: string, zz: number): Series => {
      const pts = [];
      for (let i = 0; i <= 50; i++) {
        const mg = Math.pow(10, -4 + (i / 50) * 3.3);
        let v: number;
        if (mode === "prob") v = (zz * zz * prob * (1 - prob)) / (mg * mg);
        else if (mode === "expect") v = (zz * zz * (1 - expectation * expectation)) / (mg * mg);
        else if (mode === "terms") v = (zz * zz * Math.pow(terms * avgCoeff, 2)) / (mg * mg);
        else v = Math.pow(2, qubits) / (mg * mg);
        pts.push({ x: mg, y: v });
      }
      return { name, color, points: pts };
    };
    return mode === "dist" ? [make("≈ 2ⁿ / ε²", "#7c3aed", 1)] : [make("90% confidence", "#16a34a", 1.645), make("95% confidence", "#7c3aed", 1.96), make("99.9% confidence", "#e11d48", 3.291)];
  }, [mode, prob, expectation, terms, avgCoeff, qubits]);

  const rows = [0.1, 0.05, 0.01, 0.005, 0.001];
  return (
    <CalcCard>
      <PresetRow
        presets={[
          { label: "Fair-coin outcome ±1%", apply: () => { setMode("prob"); setProb(0.5); setMargin(0.01); setConf("95"); } },
          { label: "Rare outcome (p = 0.001)", apply: () => { setMode("prob"); setProb(0.001); setMargin(0.0005); } },
          { label: "Chemistry energy to 1.6 mHa", apply: () => { setMode("terms"); setTerms(500); setAvgCoeff(0.05); setMargin(0.0016); } },
          { label: "Learn a 20-qubit distribution", apply: () => { setMode("dist"); setQubits(20); setMargin(0.05); } },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <SelectField label="What are you estimating?" value={mode} onChange={setMode} options={SHOT_MODES} />
          <SelectField label="Confidence level" value={conf} onChange={setConf} options={[{ value: "90", label: "90%" }, { value: "95", label: "95%" }, { value: "99", label: "99%" }, { value: "99.9", label: "99.9%" }]} />
          {mode === "prob" && <SliderField label="True probability p" value={prob} onChange={setProb} min={0.0001} max={0.9999} log format={(v) => v.toFixed(4)} help="Use 0.5 if unknown. That is the worst case." />}
          {mode === "expect" && <SliderField label="True expectation value" value={expectation} onChange={setExpectation} min={-1} max={1} step={0.01} format={(v) => v.toFixed(2)} />}
          {mode === "terms" && (
            <>
              <SliderField label="Number of Pauli terms" value={terms} onChange={(v) => setTerms(Math.round(v))} min={1} max={1e6} log format={(v) => Math.round(v).toLocaleString("en-US")} />
              <SliderField label="Average coefficient size |c|" value={avgCoeff} onChange={setAvgCoeff} min={0.001} max={5} log format={(v) => v.toFixed(3)} />
            </>
          )}
          {mode === "dist" && <SliderField label="Number of qubits measured" value={qubits} onChange={setQubits} min={1} max={60} step={1} />}
          <SliderField label={mode === "dist" ? "Target total variation distance ε" : "Margin of error"} value={margin} onChange={setMargin} min={0.0001} max={0.5} log format={(v) => v.toFixed(4)} />
          <NumberField label="Shot rate" value={rate} onChange={setRate} min={1} max={1e8} unit="shots per second" />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Stat label="Shots needed" value={fmt(Math.ceil(n))} sub={mode === "dist" ? "Scaling estimate, up to a constant" : `For ±${margin} at ${conf}% confidence`} tone={n < 1e6 ? "good" : n < 1e9 ? "warn" : "bad"} />
            <Stat label="Run time" value={fmtDuration(n / rate)} sub={`at ${fmt(rate)} shots per second`} />
          </div>
          <Panel title="Shots for other margins">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink-soft text-xs">
                  <th className="py-1">{mode === "dist" ? "ε" : "Margin"}</th>
                  <th className="py-1">Shots</th>
                  <th className="py-1">Time</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((m) => {
                  const s = shots(m);
                  return (
                    <tr key={m} className="text-ink-muted">
                      <td className="py-0.5 font-mono">±{m}</td>
                      <td className="py-0.5 font-mono">{fmt(Math.ceil(s))}</td>
                      <td className="py-0.5 font-mono">{fmtDuration(s / rate)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Panel>
          {mode === "prob" && prob < 0.02 && (
            <Callout tone="warn">For rare outcomes the normal approximation is rough. If you see zero events in n shots, the 95% upper bound on p is about 3/n (the rule of three).</Callout>
          )}
          {mode === "dist" && <Callout tone="warn">Learning the full distribution needs shots that grow as 2ⁿ. Methods such as classical shadows avoid this when you only need certain properties.</Callout>}
        </div>
      </div>
      <div className="mt-6">
        <Panel title="Shots versus margin of error">
          <LineChart series={curves} xLabel={mode === "dist" ? "Total variation distance ε" : "Margin of error"} yLabel="Shots" xLog yLog marker={{ x: margin, label: "your target" }} />
          <p className="text-xs text-ink-soft mt-2">Halving the margin of error multiplies the shots by four. Precision is expensive.</p>
        </Panel>
      </div>
    </CalcCard>
  );
}
