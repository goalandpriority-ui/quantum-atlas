"use client";

import { useState } from "react";
import Link from "next/link";

type Question = { q: string; options: string[]; correct: number; explanation: string; link?: string };
type QuizSection = { title: string; articleHref: string; level: string; questions: Question[] };

const quizSections: QuizSection[] = [
  {
    title: "What is a Qubit?",
    articleHref: "/learn/what-is-a-qubit",
    level: "Level 1",
    questions: [
      { q: "How is a qubit different from a classical bit?", options: ["It stores 2 bits simultaneously", "It can exist in superposition of 0 and 1", "It is faster than a classical bit", "It uses less energy"], correct: 1, explanation: "A qubit exploits superposition — existing as a blend of 0 and 1 simultaneously until measured.", link: "/dictionary/qubit" },
      { q: "What happens when a qubit is measured?", options: ["It stays in superposition", "It becomes two qubits", "It collapses to a definite 0 or 1", "It resets to 0"], correct: 2, explanation: "Measurement causes collapse — the superposition ends and a definite outcome (0 or 1) is produced.", link: "/dictionary/measurement-collapse" },
    ],
  },
  {
    title: "Superposition",
    articleHref: "/learn/superposition",
    level: "Level 2",
    questions: [
      { q: "Superposition is best described as:", options: ["A qubit secretly being 0 or 1", "A qubit genuinely being in a blend of both states", "A type of quantum error", "Faster classical computation"], correct: 1, explanation: "Superposition is not hidden information — both possibilities genuinely coexist with specific amplitudes.", link: "/dictionary/superposition" },
      { q: "What enables quantum algorithms to amplify correct answers?", options: ["Superposition alone", "Faster processors", "Quantum interference", "More qubits"], correct: 2, explanation: "Quantum interference — not superposition alone — is what algorithms use to boost correct answers.", link: "/dictionary/quantum-interference" },
    ],
  },
  {
    title: "Entanglement",
    articleHref: "/learn/entanglement",
    level: "Level 2",
    questions: [
      { q: "Two entangled qubits are measured. What is always true?", options: ["Both always measure 0", "Their outcomes are correlated beyond classical limits", "They communicate faster than light", "Their outcomes are always opposite"], correct: 1, explanation: "Entanglement creates correlations stronger than any classical system can produce, confirmed by Bell inequality tests.", link: "/dictionary/entanglement" },
      { q: "Can entanglement be used to send information faster than light?", options: ["Yes, instantly", "Only for small messages", "No — a classical channel is still required", "Only with a quantum repeater"], correct: 2, explanation: "Measurement outcomes are random — no information can be encoded in them without a classical channel.", link: "/learn/quantum-teleportation-lesson" },
    ],
  },
  {
    title: "Shor's Algorithm",
    articleHref: "/learn/shors-algorithm",
    level: "Level 3",
    questions: [
      { q: "What type of speedup does Shor's Algorithm offer over classical factoring?", options: ["Quadratic", "Linear", "Exponential", "Logarithmic"], correct: 2, explanation: "Shor's Algorithm factors integers exponentially faster than any known classical algorithm.", link: "/algorithms/shors-algorithm" },
      { q: "Which encryption standard is most directly threatened by Shor's Algorithm?", options: ["AES", "RSA", "SHA-256", "Blowfish"], correct: 1, explanation: "RSA security relies on the difficulty of factoring large integers — exactly what Shor's Algorithm breaks.", link: "/dictionary/post-quantum-cryptography" },
    ],
  },
  {
    title: "Quantum Error Correction",
    articleHref: "/learn/quantum-error-correction",
    level: "Level 4",
    questions: [
      { q: "How many physical qubits are typically needed per logical qubit in surface code?", options: ["Exactly 2", "Around 5–10", "Hundreds to over a thousand", "Millions"], correct: 2, explanation: "Current estimates suggest hundreds to over a thousand physical qubits per logical qubit at useful error rates.", link: "/dictionary/logical-qubit" },
      { q: "Syndrome measurement allows error detection without:", options: ["Using ancilla qubits", "Measuring the protected logical qubit", "Applying correction gates", "Running multiple shots"], correct: 1, explanation: "Syndrome measurement reveals error type using ancilla qubits, without measuring (and collapsing) the protected data.", link: "/dictionary/syndrome-measurement" },
    ],
  },
  {
    title: "Quantum Complexity Theory",
    articleHref: "/learn/quantum-complexity-theory",
    level: "Level 5",
    questions: [
      { q: "BQP is best described as:", options: ["Problems no computer can solve", "Problems quantum computers can solve efficiently", "All NP problems", "Problems classical computers solve fastest"], correct: 1, explanation: "BQP (Bounded-error Quantum Polynomial time) is the class of problems a quantum computer can solve efficiently.", link: "/learn/quantum-complexity-theory" },
      { q: "Is integer factoring believed to be NP-complete?", options: ["Yes", "No — it's in NP but not NP-complete", "Yes, that's why Shor's matters", "It's in P"], correct: 1, explanation: "Factoring is in NP but not believed NP-complete — so Shor's Algorithm doesn't imply quantum computers can solve all NP-hard problems.", link: "/learn/quantum-complexity-theory" },
    ],
  },
  {
    title: "Path to Fault Tolerance",
    articleHref: "/learn/path-to-fault-tolerance",
    level: "Level 5",
    questions: [
      { q: "What did Google's Willow processor demonstrate?", options: ["Shor's algorithm on real RSA keys", "Below-threshold error correction scaling", "1 million qubits", "Room temperature operation"], correct: 1, explanation: "Willow demonstrated that adding more physical qubits in surface code actually decreases logical error rate — confirming the fault-tolerance threshold was crossed.", link: "/hardware/google-willow" },
    ],
  },
  {
    title: "Algorithm Design Patterns",
    articleHref: "/learn/quantum-algorithm-design-patterns",
    level: "Level 7",
    questions: [
      { q: "Which design pattern underlies both Grover's Algorithm and Quantum Amplitude Estimation?", options: ["Phase kickback", "Amplitude amplification", "Hybrid quantum-classical loop", "Oracle encoding"], correct: 1, explanation: "Amplitude amplification — marking a target and reflecting around the average — is the common pattern in both algorithms.", link: "/learn/quantum-algorithm-design-patterns" },
      { q: "VQE and QAOA both use which design pattern?", options: ["Amplitude amplification", "Phase kickback", "Hybrid quantum-classical loop", "Trotterization"], correct: 2, explanation: "Both use a hybrid loop — a quantum circuit evaluated on hardware, with a classical optimizer adjusting parameters.", link: "/algorithms/vqe" },
    ],
  },
];

export default function QuizHubPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [scores, setScores] = useState<Record<number, number>>({});

  const section = quizSections[activeSection];

  const handleSelect = (qIdx: number, optIdx: number) => {
    const key = `${activeSection}-${qIdx}`;
    if (submitted[key]) return;
    setAnswers((prev) => ({ ...prev, [key]: optIdx }));
  };

  const handleSubmit = (qIdx: number) => {
    const key = `${activeSection}-${qIdx}`;
    if (answers[key] === undefined) return;
    setSubmitted((prev) => ({ ...prev, [key]: true }));
    const correct = answers[key] === section.questions[qIdx].correct ? 1 : 0;
    setScores((prev) => ({ ...prev, [activeSection]: (prev[activeSection] || 0) + correct }));
  };

  const totalAnswered = Object.keys(submitted).filter(k => k.startsWith(`${activeSection}-`)).length;
  const totalCorrect = scores[activeSection] || 0;

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Test Yourself
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Article Quiz Hub
      </h1>
      <p className="text-ink-muted max-w-2xl mb-10">
        Quick 2-question checks for each major Learning Center article.
        Pick a topic, answer without looking, then check your explanation.
      </p>

      {/* Topic selector */}
      <div className="flex flex-wrap gap-2 mb-10">
        {quizSections.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            className={`px-3 py-2 rounded-full text-xs font-medium border transition-colors ${
              activeSection === i
                ? "bg-quantum text-white border-quantum"
                : "bg-surface text-ink-muted border-line hover:border-quantum hover:text-quantum"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Active section */}
      <div className="max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">{section.title}</h2>
            <p className="font-mono text-xs text-quantum">{section.level}</p>
          </div>
          {totalAnswered > 0 && (
            <p className="font-mono text-sm text-ink-muted">
              {totalCorrect}/{totalAnswered} correct
            </p>
          )}
        </div>

        <div className="space-y-6">
          {section.questions.map((q, qIdx) => {
            const key = `${activeSection}-${qIdx}`;
            const sel = answers[key];
            const isSubmitted = submitted[key];
            const isCorrect = sel === q.correct;

            return (
              <div key={qIdx} className="rounded-xl border border-line bg-surface p-5">
                <p className="font-medium text-ink mb-4 leading-snug">{qIdx + 1}. {q.q}</p>
                <div className="space-y-2 mb-4">
                  {q.options.map((opt, oIdx) => {
                    let style = "border-line bg-paper text-ink-muted hover:border-quantum";
                    if (isSubmitted && oIdx === q.correct) style = "border-quantum bg-quantum-50 text-ink";
                    else if (isSubmitted && oIdx === sel && !isCorrect) style = "border-collapse bg-collapse-50 text-ink";
                    else if (sel === oIdx && !isSubmitted) style = "border-quantum bg-quantum-50 text-ink";
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelect(qIdx, oIdx)}
                        disabled={isSubmitted}
                        className={`w-full text-left rounded-lg border px-3 py-2.5 text-sm transition-all ${style}`}
                      >
                        {opt}
                        {isSubmitted && oIdx === q.correct && " ✓"}
                      </button>
                    );
                  })}
                </div>

                {!isSubmitted ? (
                  <button
                    onClick={() => handleSubmit(qIdx)}
                    disabled={sel === undefined}
                    className="rounded-full bg-quantum text-white px-5 py-2 text-xs font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40"
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className={`rounded-lg p-3 text-sm ${isCorrect ? "bg-quantum-50" : "bg-collapse-50"}`}>
                    <p className={`font-semibold mb-1 ${isCorrect ? "text-quantum" : "text-collapse"}`}>
                      {isCorrect ? "✅ Correct!" : "Not quite."}
                    </p>
                    <p className="text-ink-muted text-xs leading-relaxed">{q.explanation}</p>
                    {q.link && <Link href={q.link} className="text-xs text-quantum hover:underline mt-1 inline-block">→ Read more</Link>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href={section.articleHref} className="text-sm text-quantum hover:underline">
            → Read the full article
          </Link>
          <span className="text-ink-soft">·</span>
          <Link href="/learning-paths" className="text-sm text-quantum hover:underline">
            → Find your learning path
          </Link>
        </div>
      </div>
    </div>
  );
}
