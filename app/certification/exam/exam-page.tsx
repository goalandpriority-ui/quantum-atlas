"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { questionPool, ExamQuestion } from "@/lib/examQuestions";

const TOTAL_QUESTIONS = 150;
const PASS_MARK = 110;
const TIME_LIMIT = 90 * 60; // 90 minutes

type ExamState = "ready" | "taking" | "passed" | "failed";

function getRandomQuestions(): ExamQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, TOTAL_QUESTIONS);
}

export default function ExamPage() {
  const [examState, setExamState] = useState<ExamState>("ready");
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(0 | 1 | 2 | null)[]>([]);
  const [selected, setSelected] = useState<0 | 1 | 2 | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [timerActive, setTimerActive] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const finalizeExam = useCallback((finalAnswers: (0 | 1 | 2 | null)[], qs: ExamQuestion[]) => {
    const finalScore: number = finalAnswers.reduce((acc: number, ans, i) =>
      ans === qs[i]?.correct ? acc + 1 : acc, 0);
    setScore(finalScore);
    setTimerActive(false);
    setExamState(finalScore >= PASS_MARK ? "passed" : "failed");
  }, []);

  const handleTimeUp = useCallback(() => {
    const finalAnswers = [...answers];
    while (finalAnswers.length < questions.length) finalAnswers.push(null);
    setAnswers(finalAnswers);
    finalizeExam(finalAnswers, questions);
  }, [answers, questions, finalizeExam]);

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
    setTimeLeft(TIME_LIMIT);
    setTimerActive(true);
    setShowReview(false);
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
      finalizeExam(newAnswers, questions);
    }
  };

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return h > 0 ? `${h}:${m}:${sec}` : `${m}:${sec}`;
  };

  const q = questions[current];
  const progress = (current / TOTAL_QUESTIONS) * 100;
  const isLowTime = timeLeft < 10 * 60;

  // ---- READY ----
  if (examState === "ready") {
    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Certification Exam
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
          Quantum Computing Certification Exam
        </h1>
        <p className="text-ink-muted max-w-2xl mb-8">
          150 questions · 90 minutes · 3 options each · Score 110/150 (73%) to earn your certificate.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-xl">
          <div className="rounded-xl border border-line bg-surface p-4 text-center">
            <p className="font-mono text-2xl font-bold text-quantum">150</p>
            <p className="text-xs text-ink-muted">Questions</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4 text-center">
            <p className="font-mono text-2xl font-bold text-quantum">90 min</p>
            <p className="text-xs text-ink-muted">Time limit</p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-4 text-center">
            <p className="font-mono text-2xl font-bold text-quantum">110/150</p>
            <p className="text-xs text-ink-muted">Pass mark (73%)</p>
          </div>
        </div>

        <div className="max-w-xl rounded-2xl border border-line bg-surface p-8 mb-8">
          <h2 className="font-serif text-xl font-semibold text-ink mb-4">Before you begin</h2>
          <ul className="space-y-2.5 text-sm text-ink-muted mb-6">
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>150 questions randomly selected from our 500+ question pool — every attempt is unique</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>3 options per question — choose the best answer</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>90 minute time limit — pace yourself (~36 seconds per question)</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>Score 110 or more correct to pass and earn your certificate</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>Full answer review with explanations shown at the end</li>
            <li className="flex gap-2"><span className="text-quantum shrink-0">→</span>Retake as many times as you like — different questions each attempt</li>
          </ul>
          <button onClick={startExam}
            className="w-full rounded-full bg-quantum text-white py-4 font-semibold hover:bg-quantum-700 transition-colors">
            Begin Exam →
          </button>
        </div>

        <div className="flex gap-4 text-sm">
          <Link href="/certification" className="text-quantum hover:underline">← Certification overview</Link>
          <span className="text-line">|</span>
          <Link href="/interview-questions" className="text-quantum hover:underline">Study first →</Link>
        </div>
      </div>
    );
  }

  // ---- TAKING ----
  if (examState === "taking" && q) {
    return (
      <div className="max-w-content mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-mono text-sm text-ink">
              Question <span className="text-quantum font-bold">{current + 1}</span>
              <span className="text-ink-soft"> / {TOTAL_QUESTIONS}</span>
            </p>
            <p className="font-mono text-xs text-ink-soft">
              {answers.filter(a => a !== null && a !== undefined).length} answered
            </p>
          </div>
          <p className={`font-mono text-sm font-bold px-4 py-1.5 rounded-full border ${
            isLowTime
              ? "text-collapse border-collapse bg-collapse-50"
              : "text-quantum border-quantum bg-quantum-50"
          }`}>
            ⏱ {formatTime(timeLeft)}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-line rounded-full overflow-hidden mb-6">
          <div className="h-full bg-quantum rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }} />
        </div>

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
                <button key={i} onClick={() => setSelected(i as 0 | 1 | 2)}
                  className={`w-full text-left rounded-xl border-2 px-4 py-4 text-sm transition-all ${
                    selected === i
                      ? "border-quantum bg-quantum-50 text-ink"
                      : "border-line bg-paper text-ink-muted hover:border-quantum hover:text-ink"
                  }`}>
                  <span className={`font-mono text-xs mr-3 ${selected === i ? "text-quantum" : "text-ink-soft"}`}>
                    {["A", "B", "C"][i]}.
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleNext} disabled={selected === null}
            className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
            {current === questions.length - 1 ? "Submit Exam →" : "Next Question →"}
          </button>

          {/* Mini progress — show every 10 questions */}
          <div className="mt-5 text-center">
            <p className="font-mono text-xs text-ink-soft">
              Section {Math.floor(current / 10) + 1}/15 · {Math.round(progress)}% complete
            </p>
            <div className="flex gap-1 mt-2 justify-center flex-wrap">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className={`h-1.5 w-8 rounded-full ${
                  i * 10 < current ? "bg-quantum" :
                  i * 10 === current ? "bg-quantum-100" : "bg-line"
                }`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- RESULT (passed or failed) ----
  if (examState === "passed" || examState === "failed") {
    const passed = examState === "passed";
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);

    return (
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <div className="text-center mb-8">
            <p className="text-5xl mb-3">{passed ? "🎉" : "📚"}</p>
            <h1 className="font-serif text-3xl font-semibold text-ink mb-2">
              {passed ? "You Passed!" : "Not Quite Yet"}
            </h1>
            <p className={`font-mono text-3xl font-bold mb-1 ${passed ? "text-quantum" : "text-collapse"}`}>
              {score}/{TOTAL_QUESTIONS}
            </p>
            <p className="text-ink-muted">{pct}% · Pass mark: {PASS_MARK}/{TOTAL_QUESTIONS} (73%)</p>
          </div>

          {/* Score bar */}
          <div className="rounded-xl border border-line bg-surface p-5 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-ink-muted">Your score</span>
              <span className={`font-mono font-bold ${passed ? "text-quantum" : "text-collapse"}`}>{score}/{TOTAL_QUESTIONS}</span>
            </div>
            <div className="h-3 bg-line rounded-full overflow-hidden relative">
              <div className={`h-full rounded-full transition-all ${passed ? "bg-quantum" : "bg-collapse"}`}
                style={{ width: `${pct}%` }} />
              {/* Pass mark indicator */}
              <div className="absolute top-0 h-full w-0.5 bg-ink"
                style={{ left: `${(PASS_MARK / TOTAL_QUESTIONS) * 100}%` }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-mono text-xs text-ink-soft">0</span>
              <span className="font-mono text-xs text-ink-soft">Pass: {PASS_MARK}</span>
              <span className="font-mono text-xs text-ink-soft">{TOTAL_QUESTIONS}</span>
            </div>
          </div>

          {passed ? (
            <div className="rounded-2xl bg-quantum-50 border-2 border-quantum p-6 mb-8 text-center">
              <p className="font-serif text-xl font-semibold text-ink mb-2">Claim Your Certificate</p>
              <p className="text-sm text-ink-muted mb-4">
                Enter your name and generate your personalized QuantumAtlas certificate.
              </p>
              <Link href={`/certification/certificate?score=${score}&total=${TOTAL_QUESTIONS}`}
                className="inline-block rounded-full bg-quantum text-white px-8 py-3 font-semibold hover:bg-quantum-700 transition-colors">
                Generate My Certificate →
              </Link>
            </div>
          ) : (
            <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 mb-8">
              <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">Study recommendations</p>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/interview-questions" className="text-quantum hover:underline">→ Review Interview Questions</Link>
                <Link href="/learn/quiz-hub" className="text-quantum hover:underline">→ Article Quiz Hub — practice by topic</Link>
                <Link href="/roadmap" className="text-quantum hover:underline">→ Follow the Learning Roadmap</Link>
                <Link href="/daily-challenge" className="text-quantum hover:underline">→ Daily Challenge — build knowledge daily</Link>
              </div>
            </div>
          )}

          {/* Answer review toggle */}
          <button onClick={() => setShowReview(!showReview)}
            className="w-full rounded-xl border border-line bg-surface py-3 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors mb-4">
            {showReview ? "Hide" : "Show"} Answer Review ({questions.length} questions)
          </button>

          {showReview && (
            <div className="space-y-2 mb-6 max-h-[600px] overflow-y-auto rounded-xl border border-line p-3">
              {questions.map((q, i) => {
                const userAns = answers[i];
                const correct = userAns === q.correct;
                return (
                  <div key={i} className={`rounded-lg border p-3 ${correct ? "border-quantum-100 bg-quantum-50" : "border-collapse bg-collapse-50"}`}>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-sm shrink-0">{correct ? "✅" : "❌"}</span>
                      <p className="font-medium text-ink text-xs">{i + 1}. {q.question}</p>
                    </div>
                    {!correct && (
                      <p className="text-[11px] text-ink-muted ml-6 mb-1">
                        Your: {userAns !== null && userAns !== undefined ? q.options[userAns] : "Not answered"} · Correct: {q.options[q.correct]}
                      </p>
                    )}
                    <p className="text-[11px] text-ink-soft ml-6">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}

          <button onClick={startExam}
            className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors">
            {passed ? "Retake Exam" : "Try Again →"}
          </button>
        </div>
      </div>
    );
  }

  return null;
}
