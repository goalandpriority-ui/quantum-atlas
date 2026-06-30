"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Acronym = {
  short: string;
  full: string;
  meaning: string;
  link?: { href: string; label: string };
};

const acronyms: Acronym[] = [
  { short: "BQP", full: "Bounded-error Quantum Polynomial time", meaning: "The complexity class of problems a quantum computer can solve efficiently with high probability of correctness — the quantum analog of P.", link: { href: "/learn/quantum-complexity-theory", label: "Full explanation" } },
  { short: "NISQ", full: "Noisy Intermediate-Scale Quantum", meaning: "Today's era of quantum hardware — tens to a few thousand qubits, too noisy and small for the most dramatic promised applications.", link: { href: "/dictionary/nisq", label: "Dictionary entry" } },
  { short: "QEC", full: "Quantum Error Correction", meaning: "Techniques for protecting quantum information from decoherence and gate errors by encoding logical qubits across many physical qubits.", link: { href: "/learn/quantum-error-correction", label: "Full article" } },
  { short: "QKD", full: "Quantum Key Distribution", meaning: "Using quantum mechanics to establish encryption keys whose security is guaranteed by physics, not just mathematical assumptions.", link: { href: "/algorithms/bb84-protocol", label: "BB84 Protocol" } },
  { short: "PQC", full: "Post-Quantum Cryptography", meaning: "Classical cryptography mathematically designed to resist attacks from quantum computers — does not itself use quantum hardware.", link: { href: "/dictionary/post-quantum-cryptography", label: "Dictionary entry" } },
  { short: "VQE", full: "Variational Quantum Eigensolver", meaning: "A hybrid quantum-classical algorithm for finding ground-state energies of molecules — one of the most promising near-term quantum applications.", link: { href: "/algorithms/vqe", label: "Algorithm page" } },
  { short: "QAOA", full: "Quantum Approximate Optimization Algorithm", meaning: "A hybrid algorithm for finding approximate solutions to combinatorial optimization problems like routing and scheduling.", link: { href: "/algorithms/qaoa", label: "Algorithm page" } },
  { short: "QFT", full: "Quantum Fourier Transform", meaning: "The quantum analog of the discrete Fourier transform — a key subroutine inside Shor's Algorithm and quantum phase estimation.", link: { href: "/dictionary/quantum-fourier-transform", label: "Dictionary entry" } },
  { short: "QPU", full: "Quantum Processing Unit", meaning: "A quantum computer's processor — the physical chip or device containing the qubits, analogous to a CPU or GPU.", link: { href: "/hardware", label: "Hardware Database" } },
  { short: "QPE", full: "Quantum Phase Estimation", meaning: "An algorithm for extracting eigenvalue information from a quantum operation — used inside Shor's Algorithm and chemistry simulation.", link: { href: "/algorithms/quantum-phase-estimation", label: "Algorithm page" } },
  { short: "HHL", full: "Harrow-Hassidim-Lloyd Algorithm", meaning: "A quantum algorithm for solving linear systems of equations exponentially faster than classical methods, under specific conditions.", link: { href: "/algorithms/hhl-algorithm", label: "Algorithm page" } },
  { short: "QRAM", full: "Quantum Random Access Memory", meaning: "A hypothetical memory architecture that would let quantum algorithms efficiently load classical data — a major bottleneck in practice.", link: { href: "/dictionary/qram-architecture", label: "Dictionary entry" } },
  { short: "QML", full: "Quantum Machine Learning", meaning: "The intersection of quantum computing and machine learning — exploring whether quantum circuits can accelerate specific ML tasks.", link: { href: "/dictionary/quantum-machine-learning", label: "Dictionary entry" } },
  { short: "QCCD", full: "Quantum Charge-Coupled Device", meaning: "A trapped-ion architecture where ions are physically shuttled between trap zones to achieve flexible qubit connectivity.", link: { href: "/dictionary/qccd-architecture", label: "Dictionary entry" } },
  { short: "GKP", full: "Gottesman-Kitaev-Preskill (qubit)", meaning: "An error-resistant way of encoding a logical qubit using continuous-variable photonic states.", link: { href: "/dictionary/gkp-qubit", label: "Dictionary entry" } },
  { short: "QV", full: "Quantum Volume", meaning: "A benchmark metric (introduced by IBM) combining qubit count, connectivity, and gate error rates into a single comparative number.", link: { href: "/dictionary/quantum-volume", label: "Dictionary entry" } },
  { short: "T1 / T2", full: "Relaxation Time / Dephasing Time", meaning: "Two measures of qubit coherence time — T1 measures energy relaxation, T2 measures phase coherence.", link: { href: "/dictionary/coherence-time", label: "Dictionary entry" } },
  { short: "CV", full: "Continuous-Variable (quantum computing)", meaning: "A quantum computing approach (used by Xanadu) encoding information in continuous properties of light rather than discrete qubits." },
  { short: "DV", full: "Discrete-Variable (quantum computing)", meaning: "The standard qubit model — information encoded in discrete |0⟩/|1⟩ states, as opposed to continuous-variable approaches." },
  { short: "ZNE", full: "Zero-Noise Extrapolation", meaning: "An error mitigation technique that runs circuits at deliberately varied noise levels and extrapolates back to a zero-noise estimate.", link: { href: "/dictionary/quantum-error-mitigation", label: "Dictionary entry" } },
  { short: "MWPM", full: "Minimum-Weight Perfect Matching", meaning: "A classical decoding algorithm commonly used to interpret error syndromes in surface code quantum error correction.", link: { href: "/research/surface-code-decoder-neural-network", label: "Related research" } },
  { short: "LCU", full: "Linear Combination of Unitaries", meaning: "A technique for implementing quantum operations that aren't directly realizable as a single gate, by combining several unitary operations.", link: { href: "/algorithms/linear-combination-of-unitaries", label: "Algorithm page" } },
  { short: "QSP", full: "Quantum Signal Processing", meaning: "An advanced framework for designing quantum algorithms with optimal resource efficiency, used in modern quantum simulation.", link: { href: "/algorithms/quantum-signal-processing", label: "Algorithm page" } },
  { short: "DJ", full: "Deutsch-Jozsa (Algorithm)", meaning: "The first quantum algorithm demonstrating a provable speedup — determines if a function is constant or balanced.", link: { href: "/algorithms/deutsch-jozsa", label: "Algorithm page" } },
  { short: "QAA", full: "Quantum Amplitude Amplification", meaning: "The general technique (generalizing Grover's Algorithm) for boosting the probability of measuring a desired outcome." },
  { short: "AQC", full: "Adiabatic Quantum Computing", meaning: "An alternative quantum computing model based on slowly evolving a system's Hamiltonian — the theoretical basis for quantum annealing.", link: { href: "/learn/adiabatic-quantum-computing", label: "Full article" } },
  { short: "FTQC", full: "Fault-Tolerant Quantum Computing", meaning: "Quantum computing reliable enough to run arbitrarily long computations despite physical errors, using full error correction.", link: { href: "/dictionary/fault-tolerance", label: "Dictionary entry" } },
  { short: "DI-QKD", full: "Device-Independent Quantum Key Distribution", meaning: "The most secure known form of quantum cryptography — security holds even without trusting the quantum devices used." },
];

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return acronyms;
    const q = query.toLowerCase();
    return acronyms.filter(
      (a) =>
        a.short.toLowerCase().includes(q) ||
        a.full.toLowerCase().includes(q) ||
        a.meaning.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Quick Reference
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Quantum Computing Acronyms
      </h1>
      <p className="text-ink-muted max-w-2xl mb-8">
        {acronyms.length} acronyms decoded — from BQP to QKD. A fast lookup
        for jargon you'll encounter reading papers, job listings, or
        industry news.
      </p>

      <div className="relative max-w-xl mb-10">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search acronyms…"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-line bg-surface text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum transition-colors text-sm"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((a) => (
          <div key={a.short} className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-xl font-bold text-quantum">{a.short}</span>
              <span className="text-xs text-ink-soft">{a.full}</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed mb-2">{a.meaning}</p>
            {a.link && (
              <Link href={a.link.href} className="text-xs text-quantum hover:underline">
                → {a.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-muted text-center py-12">No acronyms match "{query}"</p>
      )}

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Go deeper</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/dictionary" className="text-quantum hover:underline">→ Full Dictionary (50 terms)</Link>
          <Link href="/faq" className="text-quantum hover:underline">→ Frequently Asked Questions</Link>
        </div>
      </div>
    </div>
  );
}
