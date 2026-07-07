"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function CertificateContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "20");
  const pct = Math.round((score / total) * 100);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [certId, setCertId] = useState("");

  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    // Generate a unique certificate ID
    const id = "QA-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    setCertId(id);
  }, []);

  const drawCertificate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !submitted) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Background — warm white
    ctx.fillStyle = "#FAF7F1";
    ctx.fillRect(0, 0, W, H);

    // Outer border — double line
    ctx.strokeStyle = "#3454D1";
    ctx.lineWidth = 8;
    ctx.strokeRect(24, 24, W - 48, H - 48);
    ctx.strokeStyle = "#D6DEF8";
    ctx.lineWidth = 2;
    ctx.strokeRect(34, 34, W - 68, H - 68);

    // Corner decorations
    const corners = [[44, 44], [W - 44, 44], [44, H - 44], [W - 44, H - 44]];
    corners.forEach(([cx, cy]) => {
      ctx.fillStyle = "#3454D1";
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    // Header — QuantumAtlas logo text
    ctx.fillStyle = "#3454D1";
    ctx.font = "bold 18px 'IBM Plex Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("QUANTUMATLAS", W / 2, 90);

    // Quantum symbol
    ctx.font = "28px serif";
    ctx.fillText("⚛", W / 2, 130);

    // Certificate title
    ctx.fillStyle = "#1B1B2F";
    ctx.font = "bold 38px 'Source Serif 4', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Achievement", W / 2, 185);

    // Subtitle
    ctx.fillStyle = "#6B6F8A";
    ctx.font = "16px 'Source Serif 4', Georgia, serif";
    ctx.fillText("This certifies that", W / 2, 225);

    // Decorative line above name
    ctx.strokeStyle = "#D6DEF8";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 200, 248);
    ctx.lineTo(W / 2 + 200, 248);
    ctx.stroke();

    // Recipient name
    ctx.fillStyle = "#1B1B2F";
    ctx.font = "italic 46px 'Source Serif 4', Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(name, W / 2, 305);

    // Decorative line below name
    ctx.strokeStyle = "#3454D1";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 200, 322);
    ctx.lineTo(W / 2 + 200, 322);
    ctx.stroke();

    // Achievement text
    ctx.fillStyle = "#6B6F8A";
    ctx.font = "16px 'Source Serif 4', Georgia, serif";
    ctx.fillText("has successfully demonstrated proficiency in", W / 2, 362);

    ctx.fillStyle = "#1B1B2F";
    ctx.font = "bold 24px 'Source Serif 4', Georgia, serif";
    ctx.fillText("Quantum Computing Fundamentals", W / 2, 400);

    // Score badge
    ctx.fillStyle = "#EEF1FC";
    ctx.beginPath();
    ctx.roundRect(W / 2 - 100, 422, 200, 50, 25);
    ctx.fill();
    ctx.strokeStyle = "#3454D1";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(W / 2 - 100, 422, 200, 50, 25);
    ctx.stroke();

    ctx.fillStyle = "#3454D1";
    ctx.font = "bold 20px 'IBM Plex Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText(`Score: ${score}/${total} (${pct}%)`, W / 2, 454);

    // Footer info
    ctx.fillStyle = "#9296AC";
    ctx.font = "13px 'IBM Plex Mono', monospace";
    ctx.textAlign = "left";
    ctx.fillText(`Date: ${dateStr}`, 60, 520);
    ctx.textAlign = "right";
    ctx.fillText(`Certificate ID: ${certId}`, W - 60, 520);

    // Website
    ctx.fillStyle = "#3454D1";
    ctx.font = "13px 'IBM Plex Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("quantumatlas.in/certification", W / 2, 550);

    // Bottom seal
    ctx.fillStyle = "#3454D1";
    ctx.beginPath();
    ctx.arc(W / 2, 590, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "bold 14px serif";
    ctx.textAlign = "center";
    ctx.fillText("QA", W / 2, 596);

  }, [submitted, name, score, total, pct, dateStr, certId]);

  useEffect(() => {
    if (submitted) {
      // Small delay to ensure canvas is rendered
      setTimeout(drawCertificate, 100);
    }
  }, [submitted, drawCertificate]);

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `QuantumAtlas-Certificate-${name.replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleSubmitName = () => {
    if (!name.trim()) return;
    setSubmitted(true);
  };

  // Guard: redirect if no valid score
  if (score < 15) {
    return (
      <div className="max-w-content mx-auto px-6 py-14 text-center">
        <p className="text-4xl mb-3">🔒</p>
        <h1 className="font-serif text-2xl font-semibold text-ink mb-3">Certificate not unlocked</h1>
        <p className="text-ink-muted mb-6">You need to score 15/20 or higher on the exam to earn a certificate.</p>
        <Link href="/certification/exam" className="rounded-full bg-quantum text-white px-6 py-2.5 font-semibold hover:bg-quantum-700 transition-colors">
          Take the Exam →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        🎉 Congratulations!
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        You passed — {score}/20 ({pct}%)
      </h1>
      <p className="text-ink-muted max-w-xl mb-10">
        Enter your name exactly as you want it to appear on your certificate.
      </p>

      {!submitted ? (
        <div className="max-w-md">
          <label className="block text-sm font-medium text-ink mb-2">
            Your full name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmitName()}
            placeholder="e.g. Priya Ramachandran"
            maxLength={50}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-line bg-surface text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum transition-colors text-base mb-4"
          />
          <button
            onClick={handleSubmitName}
            disabled={!name.trim()}
            className="w-full rounded-full bg-quantum text-white py-3.5 font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Generate My Certificate →
          </button>
          <p className="text-xs text-ink-soft mt-3 text-center">
            Double-check spelling — this name will appear on your certificate
          </p>
        </div>
      ) : (
        <div>
          <div className="rounded-2xl border-2 border-quantum overflow-hidden mb-6 max-w-3xl">
            <canvas
              ref={canvasRef}
              width={800}
              height={630}
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={downloadCertificate}
              className="rounded-full bg-quantum text-white px-6 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors"
            >
              Download Certificate (PNG)
            </button>
            <button
              onClick={() => window.print()}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
            >
              Print
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `I just earned a Quantum Computing Certificate from QuantumAtlas!\n\nScore: ${score}/20 (${pct}%)\n\nTake the free exam at quantumatlas.in/certification`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
            >
              Share on X/Twitter
            </a>
          </div>

          <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 max-w-md text-sm">
            <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-2">Certificate Details</p>
            <p className="text-ink-muted"><span className="font-medium text-ink">Name:</span> {name}</p>
            <p className="text-ink-muted"><span className="font-medium text-ink">Score:</span> {score}/{total} ({pct}%)</p>
            <p className="text-ink-muted"><span className="font-medium text-ink">Date:</span> {dateStr}</p>
            <p className="text-ink-muted"><span className="font-medium text-ink">Certificate ID:</span> {certId}</p>
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/certification" className="text-sm text-quantum hover:underline">
          ← Back to Certification overview
        </Link>
      </div>
    </div>
  );
}

export default function CertificatePage() {
  return (
    <Suspense fallback={
      <div className="max-w-content mx-auto px-6 py-14">
        <p className="text-ink-muted">Loading…</p>
      </div>
    }>
      <CertificateContent />
    </Suspense>
  );
    }
    
