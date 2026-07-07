import Link from "next/link";

export const metadata = {
  title: "Quantum Computing Certification | QuantumAtlas",
  description:
    "Earn a QuantumAtlas Quantum Computing Certificate. Pass a 20-question exam with 73% or higher to receive a personalized, printable certificate.",
};

export default function CertificationPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Official Certificate Program
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4">
        QuantumAtlas Certification
      </h1>
      <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-10">
        Demonstrate your quantum computing knowledge with a personalized,
        printable certificate from QuantumAtlas — the open encyclopedia of
        quantum computing.
      </p>

      {/* Certificate preview */}
      <div className="rounded-2xl border-2 border-quantum bg-quantum-50 p-8 max-w-2xl mb-12 text-center">
        <div className="border border-quantum-100 rounded-xl bg-paper p-6 mb-4">
          <p className="font-mono text-xs text-quantum uppercase tracking-widest mb-1">QuantumAtlas</p>
          <p className="font-serif text-2xl font-semibold text-ink mb-1">Certificate of Achievement</p>
          <p className="text-sm text-ink-muted mb-3">Quantum Computing Fundamentals</p>
          <div className="border-t border-b border-line py-3 mb-3">
            <p className="font-serif text-lg text-ink italic">Your Name Here</p>
          </div>
          <p className="text-xs text-ink-soft">Score: 115/150 · {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
        <p className="text-xs text-ink-soft">Preview — your name and score will appear on the actual certificate</p>
      </div>

      {/* Exam details */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-2xl">
        <div className="rounded-xl border border-line bg-surface p-5 text-center">
          <p className="font-mono text-2xl font-bold text-quantum mb-1">20</p>
          <p className="text-xs text-ink-muted">Questions per exam</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5 text-center">
          <p className="font-mono text-2xl font-bold text-quantum mb-1">73%</p>
          <p className="text-xs text-ink-muted">Pass threshold (15/20)</p>
        </div>
        <div className="rounded-xl border border-line bg-surface p-5 text-center">
          <p className="font-mono text-2xl font-bold text-quantum mb-1">20</p>
          <p className="text-xs text-ink-muted">Unique question sets</p>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink mb-5">How it works</h2>
        <div className="space-y-4">
          {[
            { num: "01", title: "Take the exam", desc: "20 questions drawn from our 150-question pool across 20 unique sets. Each attempt uses a different randomized set. 3 options per question — choose the best answer." },
            { num: "02", title: "Score 73% or higher", desc: "You need at least 15 out of 20 correct to pass. Your score is shown at the end with explanations for every answer." },
            { num: "03", title: "Enter your name", desc: "After passing, enter the name you want to appear on your certificate." },
            { num: "04", title: "Download your certificate", desc: "A professional, printable certificate is generated with your name, score, date, and a unique certificate number. Download as PNG or print directly." },
          ].map((step) => (
            <div key={step.num} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
              <span className="font-mono text-lg font-bold text-quantum shrink-0">{step.num}</span>
              <div>
                <p className="font-semibold text-ink mb-1">{step.title}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics covered */}
      <div className="max-w-2xl mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink mb-4">Topics covered</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Qubits & Superposition", "Entanglement & Interference",
            "Quantum Gates & Circuits", "Key Algorithms (Shor's, Grover's, VQE)",
            "Hardware & Qubit Types", "Quantum Error Correction",
            "Post-Quantum Cryptography", "Industry Applications",
            "Complexity Theory (BQP)", "Quantum Frameworks (Qiskit etc.)",
          ].map((topic) => (
            <div key={topic} className="flex gap-2 text-sm text-ink-muted">
              <span className="text-quantum shrink-0">→</span>{topic}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl">
        <Link href="/certification/exam"
          className="block w-full text-center rounded-full bg-quantum text-white py-4 text-base font-semibold hover:bg-quantum-700 transition-colors mb-4">
          Start the Exam →
        </Link>
        <p className="text-xs text-ink-soft text-center">
          Free · No account required · Retake as many times as you want · Different question set each attempt
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">Prepare first</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/roadmap" className="text-quantum hover:underline">→ Quantum Computing Roadmap</Link>
          <Link href="/interview-questions" className="text-quantum hover:underline">→ Study with Interview Questions</Link>
          <Link href="/learn/quiz-hub" className="text-quantum hover:underline">→ Article Quiz Hub</Link>
          <Link href="/daily-challenge" className="text-quantum hover:underline">→ Daily Challenge — warm up daily</Link>
        </div>
      </div>
    </div>
  );
      }

