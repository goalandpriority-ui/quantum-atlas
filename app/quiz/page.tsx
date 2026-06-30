"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: string;
  text: string;
  subtext?: string;
  options: { label: string; value: number; tag?: string }[];
};

const questions: Question[] = [
  {
    id: "encryption",
    text: "Does your organization use public-key encryption (RSA, ECC) to protect sensitive data?",
    subtext: "This includes HTTPS, email encryption, VPNs, digital signatures.",
    options: [
      { label: "Yes, extensively", value: 3, tag: "High exposure" },
      { label: "Some systems do", value: 2 },
      { label: "Not sure", value: 1 },
      { label: "No / Not applicable", value: 0 },
    ],
  },
  {
    id: "data_lifespan",
    text: "How long does your most sensitive data need to remain confidential?",
    subtext: "Think about medical records, state secrets, financial contracts, IP.",
    options: [
      { label: "10+ years", value: 3, tag: "Harvest now risk" },
      { label: "5–10 years", value: 2 },
      { label: "1–5 years", value: 1 },
      { label: "Less than a year", value: 0 },
    ],
  },
  {
    id: "industry",
    text: "Which sector best describes your organization?",
    options: [
      { label: "Finance / Banking / Insurance", value: 3, tag: "Critical" },
      { label: "Healthcare / Pharma / Government", value: 3, tag: "Critical" },
      { label: "Technology / Telecommunications", value: 2 },
      { label: "Retail / Consumer / Other", value: 1 },
    ],
  },
  {
    id: "awareness",
    text: "Has your organization assessed its post-quantum cryptography migration needs?",
    options: [
      { label: "Yes, we have a roadmap", value: 0, tag: "Already on it" },
      { label: "We've started discussions", value: 1 },
      { label: "We're aware but haven't started", value: 2 },
      { label: "We haven't thought about it", value: 3, tag: "Urgent" },
    ],
  },
  {
    id: "supply_chain",
    text: "Do you depend on third-party software or vendors for cryptographic security?",
    subtext: "E.g. cloud providers, payment processors, identity platforms.",
    options: [
      { label: "Yes, heavily", value: 2, tag: "Dependency risk" },
      { label: "Some dependencies", value: 1 },
      { label: "We manage it in-house", value: 1 },
      { label: "Not sure", value: 2 },
    ],
  },
  {
    id: "quantum_opportunity",
    text: "Does your work involve optimization, molecular simulation, or large-scale search problems?",
    subtext: "E.g. drug discovery, portfolio optimization, logistics routing, materials science.",
    options: [
      { label: "Yes — this is core to our work", value: 3, tag: "Opportunity" },
      { label: "Potentially relevant", value: 2 },
      { label: "Unlikely to apply", value: 1 },
      { label: "No", value: 0 },
    ],
  },
  {
    id: "timeline",
    text: "When do you think large-scale quantum computers able to break current encryption will exist?",
    options: [
      { label: "Within 5 years — act now", value: 3 },
      { label: "5–15 years — start planning", value: 2 },
      { label: "15–30 years — plenty of time", value: 1 },
      { label: "Never — it's all hype", value: 0 },
    ],
  },
];

type Result = {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  emoji: string;
  headline: string;
  description: string;
  urgency: string;
  actions: string[];
  links: { href: string; label: string }[];
};

function getResult(score: number, answers: Record<string, number>): Result {
  const opportunityScore = answers["quantum_opportunity"] || 0;

  if (score <= 4) {
    return {
      label: "Quantum Aware",
      color: "text-quantum",
      bgColor: "bg-quantum-50",
      borderColor: "border-quantum-100",
      emoji: "🟢",
      headline: "Low immediate risk — but stay informed",
      description:
        "Your current exposure to quantum computing risks is relatively low, and your organization isn't an obvious early target for quantum attacks. That said, the field is moving faster than most organizations anticipate.",
      urgency: "Monitor — revisit in 2 years",
      actions: [
        "Monitor NIST post-quantum cryptography adoption in your industry",
        "Inventory which systems use public-key encryption",
        "Ensure your cloud and software vendors have PQC migration plans",
      ],
      links: [
        { href: "/dictionary/post-quantum-cryptography", label: "Post-Quantum Cryptography explained" },
        { href: "/industries/cybersecurity", label: "Quantum for Cybersecurity" },
      ],
    };
  }

  if (score <= 9) {
    return {
      label: "Action Recommended",
      color: "text-collapse",
      bgColor: "bg-collapse-50",
      borderColor: "border-collapse",
      emoji: "🟡",
      headline: "Start your PQC migration assessment now",
      description:
        "Your organization has meaningful exposure to quantum-related risks — particularly if you handle sensitive data with long confidentiality requirements. The 'harvest now, decrypt later' threat means data encrypted today could be compromised in the future.",
      urgency: "Begin assessment within 12 months",
      actions: [
        "Conduct a cryptographic inventory — catalogue all public-key encryption in use",
        "Engage your IT/security team on NIST PQC standards (FIPS 203, 204, 205)",
        "Audit third-party vendors' post-quantum migration timelines",
        "Pilot a PQC migration on a non-critical system to build expertise",
      ],
      links: [
        { href: "/dictionary/harvest-now-decrypt-later", label: "Harvest Now, Decrypt Later" },
        { href: "/algorithms/shors-algorithm", label: "Why Shor's Algorithm matters" },
        { href: "/research/post-quantum-migration-case-study", label: "Real migration case study" },
      ],
    };
  }

  return {
    label: "Act Urgently",
    color: "text-collapse",
    bgColor: "bg-collapse-50",
    borderColor: "border-collapse",
    emoji: "🔴",
    headline: "Your organization faces significant quantum risk — prioritize now",
    description:
      "Based on your answers, your organization has high exposure to quantum computing threats: sensitive long-lived data, heavy use of public-key encryption, and critical sector classification. You may already be targeted by 'harvest now, decrypt later' data collection.",
    urgency: "Begin migration planning immediately",
    actions: [
      "Treat this as a board-level priority — not just an IT project",
      "Immediately inventory all public-key cryptographic dependencies",
      "Adopt NIST-standardized post-quantum algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium) for new systems",
      "Engage external quantum-security specialists for a full risk assessment",
      "Pressure test your vendor supply chain for PQC readiness",
    ],
    links: [
      { href: "/dictionary/post-quantum-cryptography", label: "Post-Quantum Cryptography" },
      { href: "/industries/cybersecurity", label: "Quantum for Cybersecurity" },
      { href: "/dictionary/harvest-now-decrypt-later", label: "Harvest Now, Decrypt Later" },
    ],
  };
}

function getOpportunityResult(score: number) {
  if (score >= 3) {
    return {
      show: true,
      headline: "Quantum computing could be a competitive advantage for you",
      description:
        "Your work involves problem types — optimization, simulation, or large-scale search — where quantum algorithms offer credible near-term or medium-term advantages. Organizations in your space are already piloting quantum approaches.",
      links: [
        { href: "/algorithms/vqe", label: "VQE for molecular simulation" },
        { href: "/algorithms/qaoa", label: "QAOA for optimization" },
        { href: "/industries/finance", label: "Quantum for Finance" },
      ],
    };
  }
  if (score >= 2) {
    return {
      show: true,
      headline: "Quantum computing is worth monitoring for your use case",
      description:
        "Your work may benefit from quantum algorithms within the next 5–10 years. It's worth staying informed about developments in quantum optimization and simulation.",
      links: [
        { href: "/future", label: "Future Predictions" },
        { href: "/algorithms", label: "Algorithms Database" },
      ],
    };
  }
  return { show: false, headline: "", description: "", links: [] };
}

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(totalScore, answers);
  const opportunityResult = getOpportunityResult(answers["quantum_opportunity"] || 0);

  const handleSelect = (value: number) => setSelected(value);

  const handleNext = () => {
    if (selected === null) return;
    const q = questions[currentQ];
    setAnswers((prev) => ({ ...prev, [q.id]: selected }));
    setSelected(null);
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers({});
    setSelected(null);
    setShowResult(false);
  };

  const shareText = `I just took the Quantum Readiness Quiz on QuantumAtlas — result: "${result.label}". ${result.urgency}. Find out your organization's quantum risk at quantumatlas.app/quiz`;

  if (showResult) {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Your Result
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-6">
          Quantum Readiness Assessment
        </h1>

        {/* Main result card */}
        <div className={`rounded-2xl border-2 ${result.borderColor} ${result.bgColor} p-8 max-w-2xl mb-8`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{result.emoji}</span>
            <span className={`font-mono text-sm uppercase tracking-widest font-bold ${result.color}`}>
              {result.label}
            </span>
          </div>
          <h2 className="font-serif text-2xl font-semibold text-ink mb-3">{result.headline}</h2>
          <p className="text-ink-muted leading-relaxed mb-4">{result.description}</p>
          <div className="rounded-lg bg-paper border border-line px-4 py-2 inline-block">
            <p className="font-mono text-xs text-ink-soft">
              Recommended urgency: <span className="font-bold text-ink">{result.urgency}</span>
            </p>
          </div>
        </div>

        {/* Recommended actions */}
        <div className="max-w-2xl mb-8">
          <h3 className="font-serif text-xl font-semibold text-ink mb-4">Recommended actions</h3>
          <div className="space-y-3">
            {result.actions.map((action, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
                <span className="font-mono text-xs text-quantum font-bold shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-ink-muted leading-relaxed">{action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunity section */}
        {opportunityResult.show && (
          <div className="max-w-2xl mb-8 rounded-xl border border-quantum-100 bg-quantum-50 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
              Bonus insight
            </p>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">
              {opportunityResult.headline}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">{opportunityResult.description}</p>
            <div className="flex flex-col gap-2">
              {opportunityResult.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-quantum hover:underline">
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Share + links */}
        <div className="max-w-2xl mb-6">
          <h3 className="font-serif text-lg font-semibold text-ink mb-4">Learn more</h3>
          <div className="flex flex-col gap-2">
            {result.links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-quantum hover:underline">
                → {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 max-w-2xl">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-quantum text-white px-5 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors"
          >
            Share on X/Twitter
          </a>
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface text-ink-muted px-5 py-2.5 text-sm font-medium hover:border-quantum hover:text-quantum transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];
  const progress = ((currentQ) / questions.length) * 100;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        7 Questions · ~2 Minutes
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-2">
        Are You Quantum Ready?
      </h1>
      <p className="text-ink-muted max-w-xl mb-8">
        Find out how urgently your organization needs to act on quantum computing
        threats — and whether you could gain a quantum computing advantage.
      </p>

      {/* Progress bar */}
      <div className="max-w-2xl mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-ink-soft">
            Question {currentQ + 1} of {questions.length}
          </span>
          <span className="font-mono text-xs text-quantum">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-line rounded-full overflow-hidden">
          <div
            className="h-full bg-quantum rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="max-w-2xl">
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 mb-4">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-2 leading-snug">
            {q.text}
          </h2>
          {q.subtext && (
            <p className="text-sm text-ink-soft mb-6">{q.subtext}</p>
          )}
          {!q.subtext && <div className="mb-6" />}
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left rounded-xl border px-4 py-3.5 text-sm transition-all ${
                  selected === opt.value
                    ? "border-quantum bg-quantum-50 text-ink"
                    : "border-line bg-paper text-ink-muted hover:border-quantum hover:text-ink"
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span>{opt.label}</span>
                  {opt.tag && (
                    <span className="font-mono text-[10px] uppercase tracking-wide text-quantum shrink-0">
                      {opt.tag}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={selected === null}
          className="w-full rounded-full bg-quantum text-white py-3.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {currentQ === questions.length - 1 ? "See my result →" : "Next question →"}
        </button>
      </div>
    </div>
  );
}
