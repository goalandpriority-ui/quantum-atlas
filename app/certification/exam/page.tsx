"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { questionPool, ExamQuestion } from "@/lib/examQuestions";

type ExamState = "ready" | "taking" | "reviewing" | "passed" | "failed";

function getRandomQuestions(): ExamQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 20);
}

export default function ExamPage() {
  const [examState, setExamState] = useState<ExamState>("ready");
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(0 | 1 | 2 | null)[]>([]);
  const [selected, setSelected] = useState<0 | 1 | 2 | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [timerActive, setTimerActive] = useState(false);

  const handleTimeUp = useCallback(() => {
    // Auto-submit remaining answers as null
    const finalAnswers = [...answers];
    while (finalAnswers.length < questions.length) finalAnswers.push(null);
    const finalScore = finalAnswers.reduce((acc, ans, i) =>
      ans === questions[i]?.correct ? acc + 1 : acc, 0);
    setScore(finalScore);
    setAnswers(finalAnswers);
    setTimerActive(false);
    setExamState(finalScore >= 15 ? "passed" : "failed");
  }, [answers, questions]);

  useEffect(() => {
    if (!timerActive) return;
    const iv = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(iv); handleTimeUp(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [timerActive, handleTimeUp]);

  const startExam = () => {
    const qs = getRandomQuestions();
    setQuestions(qs);
    setAnswers([]);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setTimeLeft(30 * 60);
    setTimerActive(true);
    setExamState("taking");
  };

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setSelected(null);

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      // Last question — calculate score
      const finalScore = newAnswers.reduce((acc, ans, i) =>
        ans === questions[i]?.correct ? acc + 1 : acc, 0);
      setScore(finalScore);
      setTimerActive(false);
      setExamState(finalScore >= 15 ? "passed" : "failed");
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const q = questions[current];
  const progress = ((current) / 20) * 100;
  const isLowTime = timeLeft < 5 * 60;

  // ---- READY STATE ----
  if (examState === "ready") {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Certification Exam
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
          Quantum Computing Exam
        </h1>
        <p className="text-ink-muted max-w-2xl mb-8">
          20 questions · 30 minutes · 3 options each · Score 15/20 (73%) to pass and earn your certificate.
        </p>

        <div className="max-w-xl rounded-2xl border border-line bg-surface p-8 mb-8">
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">Before you begin</h2>
          <ul className="space-y-2 text-sm text-ink-muted mb-6">
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>20 questions, 3 options each — choose the best answer</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>30 minute time limit</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>You need 15 or more correct (73%) to pass</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>Each attempt uses a different random set of questions</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>All answers reviewed at the end with explanations</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>Enter your name after passing to generate your certificate</li>
          </ul>
          <button
            onClick={startExam}
            className="w-full rounded-full bg-quantum text-white py-4 font-semibold hover:bg-quantum-700 transition-colors"
          >
            Begin Exam →
          </button>
        </div>

        <Link href="/certification" className="text-sm text-quantum hover:underline">
          ← Back to Certification overview
        </Link>
      </div>
    );
  }

  // ---- TAKING EXAM ----
  if (examState === "taking" && q) {
    return (
      <div className="max-w-content mx-auto px-6 py-10">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono text-sm text-ink">
            Question <span className="text-quantum font-bold">{current + 1}</span> of 20
          </p>
          <p className={`font-mono text-sm font-bold px-4 py-1.5 rounded-full border ${
            isLowTime ? "text-collapse border-collapse bg-collapse-50" : "text-quantum border-quantum bg-quantum-50"
          }`}>
            ⏱ {formatTime(timeLeft)}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-line rounded-full overflow-hidden mb-8">
          <div className="h-full bg-quantum rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        {/* Question card */}
        <div className="max-w-2xl">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8 mb-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-quantum mb-3">
              Choose the best answer
            </p>
            <h2 className="font-serif text-lg md:text-xl font-semibold text-ink mb-6 leading-snug">
              {q.question}
            </h2>

            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i as 0 | 1 | 2)}
                  className={`w-full text-left rounded-xl border-2 px-4 py-4 text-sm transition-all ${
                    selected === i
                      ? "border-quantum bg-quantum-50 text-ink"
                      : "border-line bg-paper text-ink-muted hover:border-quantum hover:text-ink"
                  }`}
                >
                  <span className={`font-mono text-xs mr-3 ${selected === i ? "text-quantum" : "text-ink-soft"}`}>
                    {["A", "B", "C"][i]}.
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={selected === null}
            className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {current === questions.length - 1 ? "Submit Exam →" : "Next Question →"}
          </button>

          {/* Answer progress dots */}
          <div className="flex flex-wrap gap-1.5 mt-5 justify-center">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-full ${
                i < current ? "bg-quantum" : i === current ? "bg-quantum-100 border border-quantum" : "bg-line"
              }`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---- PASSED ----
  if (examState === "passed") {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <div className="text-center mb-8">
            <p className="text-5xl mb-3">🎉</p>
            <h1 className="font-serif text-3xl font-semibold text-ink mb-2">You Passed!</h1>
            <p className="font-mono text-2xl text-quantum font-bold mb-1">{score}/20 correct</p>
            <p className="text-ink-muted">{Math.round((score / 20) * 100)}% · Pass threshold: 73%</p>
          </div>

          {/* Score breakdown */}
          <div className="rounded-xl border border-line bg-surface p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-ink-muted">Your score</span>
              <span className="font-mono font-bold text-quantum">{score}/20</span>
            </div>
            <div className="h-3 bg-line rounded-full overflow-hidden">
              <div className="h-full bg-quantum rounded-full" style={{ width: `${(score / 20) * 100}%` }} />
            </div>
          </div>

          {/* Get certificate CTA */}
          <div className="rounded-2xl bg-quantum-50 border-2 border-quantum p-6 mb-8 text-center">
            <p className="font-serif text-xl font-semibold text-ink mb-2">Claim Your Certificate</p>
            <p className="text-sm text-ink-muted mb-4">
              Click below to enter your name and generate your personalized QuantumAtlas certificate.
            </p>
            <Link
              href={`/certification/certificate?score=${score}&total=20`}
              className="inline-block rounded-full bg-quantum text-white px-8 py-3 font-semibold hover:bg-quantum-700 transition-colors"
            >
              Generate My Certificate →
            </Link>
          </div>

          {/* Answer review */}
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">Answer Review</h2>
          <div className="space-y-3">
            {questions.map((q, i) => {
              const userAns = answers[i];
              const correct = userAns === q.correct;
              return (
                <div key={i} className={`rounded-xl border p-4 ${correct ? "border-quantum bg-quantum-50" : "border-collapse bg-collapse-50"}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-sm shrink-0">{correct ? "✅" : "❌"}</span>
                    <p className="font-medium text-ink text-sm">{q.question}</p>
                  </div>
                  {!correct && (
                    <p className="text-xs text-ink-muted ml-6 mb-1">
                      Your answer: {userAns !== null ? q.options[userAns] : "Not answered"} ·{" "}
                      Correct: {q.options[q.correct]}
                    </p>
                  )}
                  <p className="text-xs text-ink-soft ml-6 leading-relaxed">{q.explanation}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={startExam}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors">
              Retake Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- FAILED ----
  if (examState === "failed") {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <div className="text-center mb-8">
            <p className="text-5xl mb-3">📚</p>
            <h1 className="font-serif text-3xl font-semibold text-ink mb-2">Not Quite Yet</h1>
            <p className="font-mono text-2xl text-collapse font-bold mb-1">{score}/20 correct</p>
            <p className="text-ink-muted">{Math.round((score / 20) * 100)}% · Need 73% (15/20) to pass</p>
          </div>

          <div className="rounded-xl border border-line bg-surface p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-ink-muted">Your score</span>
              <span className="font-mono font-bold text-collapse">{score}/20</span>
            </div>
            <div className="h-3 bg-line rounded-full overflow-hidden">
              <div className="h-full bg-collapse rounded-full" style={{ width: `${(score / 20) * 100}%` }} />
            </div>
            <div className="h-0.5 bg-quantum mt-1 ml-0" style={{ marginLeft: "73%", width: "1px", marginTop: "-14px", position: "relative" }} />
          </div>

          <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 mb-8">
            <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">Study recommendations</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/interview-questions" className="text-quantum hover:underline">→ Review Interview Questions</Link>
              <Link href="/learn/quiz-hub" className="text-quantum hover:underline">→ Article Quiz Hub — practice by topic</Link>
              <Link href="/roadmap" className="text-quantum hover:underline">→ Follow the Learning Roadmap</Link>
              <Link href="/daily-challenge" className="text-quantum hover:underline">→ Daily Challenge — build knowledge daily</Link>
            </div>
          </div>

          {/* Answer review */}
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">Answer Review</h2>
          <div className="space-y-3 mb-6">
            {questions.map((q, i) => {
              const userAns = answers[i];
              const correct = userAns === q.correct;
              return (
                <div key={i} className={`rounded-xl border p-4 ${correct ? "border-quantum bg-quantum-50" : "border-collapse bg-collapse-50"}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-sm shrink-0">{correct ? "✅" : "❌"}</span>
                    <p className="font-medium text-ink text-sm">{q.question}</p>
                  </div>
                  {!correct && (
                    <p className="text-xs text-ink-muted ml-6 mb-1">
                      Your answer: {userAns !== null ? q.options[userAns] : "Not answered"} ·{" "}
                      Correct: {q.options[q.correct]}
                    </p>
                  )}
                  <p className="text-xs text-ink-soft ml-6 leading-relaxed">{q.explanation}</p>
                </div>
              );
            })}
          </div>

          <button onClick={startExam}
            className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors">
            Try Again →
          </button>
        </div>
      </div>
    );
  }

  return null;
}

