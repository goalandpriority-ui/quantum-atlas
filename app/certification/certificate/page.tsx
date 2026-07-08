"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function CertificateContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "150");
  const pct = Math.round((score / total) * 100);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [certId, setCertId] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);

  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const id = "QA-" + Date.now().toString(36).toUpperCase().slice(-6) + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    setCertId(id);
  }, []);

  const drawCertificate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !submitted) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // Background
    ctx.fillStyle = "#FDFAF5";
    ctx.fillRect(0, 0, W, H);

    // Outer border
    ctx.strokeStyle = "#3454D1";
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, W - 40, H - 40);

    // Inner thin border
    ctx.strokeStyle = "#D6DEF8";
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, W - 64, H - 64);

    // Corner ornaments
    const drawCorner = (x: number, y: number) => {
      ctx.fillStyle = "#3454D1";
      ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#EEF1FC";
      ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill();
    };
    drawCorner(32, 32); drawCorner(W - 32, 32);
    drawCorner(32, H - 32); drawCorner(W - 32, H - 32);

    // Gradient strips
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "#EEF1FC");
    grad.addColorStop(0.5, "#3454D1");
    grad.addColorStop(1, "#EEF1FC");
    ctx.fillStyle = grad;
    ctx.fillRect(32, 42, W - 64, 4);
    ctx.fillRect(32, H - 46, W - 64, 4);

    // Logo
    ctx.fillStyle = "#3454D1";
    ctx.font = "bold 15px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Q U A N T U M A T L A S", W / 2, 85);

    // Atom
    ctx.font = "32px serif";
    ctx.fillText("⚛", W / 2, 128);

    // Title
    ctx.fillStyle = "#1B1B2F";
    ctx.font = "bold 42px Georgia, serif";
    ctx.fillText("Certificate of Achievement", W / 2, 188);

    // Certifies that
    ctx.fillStyle = "#6B6F8A";
    ctx.font = "italic 17px Georgia, serif";
    ctx.fillText("This is to certify that", W / 2, 228);

    // Divider above name
    ctx.strokeStyle = "#D6DEF8"; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(W / 2 - 220, 248); ctx.lineTo(W / 2 + 220, 248); ctx.stroke();

    // Name
    ctx.fillStyle = "#1B1B2F";
    ctx.font = "italic 52px Georgia, serif";
    ctx.fillText(name, W / 2, 312);

    // Divider below name
    ctx.strokeStyle = "#3454D1"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(W / 2 - 220, 330); ctx.lineTo(W / 2 + 220, 330); ctx.stroke();

    // Achievement
    ctx.fillStyle = "#6B6F8A";
    ctx.font = "17px Georgia, serif";
    ctx.fillText("has successfully demonstrated proficiency in", W / 2, 370);

    ctx.fillStyle = "#1B1B2F";
    ctx.font = "bold 26px Georgia, serif";
    ctx.fillText("Quantum Computing Fundamentals", W / 2, 408);

    // Score badge
    const bx = W / 2 - 140, by = 428, bw = 280, bh = 52, br = 26;
    const drawRoundRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    ctx.fillStyle = "#EEF1FC";
    drawRoundRect(bx, by, bw, bh, br); ctx.fill();
    ctx.strokeStyle = "#3454D1"; ctx.lineWidth = 2;
    drawRoundRect(bx, by, bw, bh, br); ctx.stroke();

    ctx.fillStyle = "#3454D1";
    ctx.font = "bold 22px monospace";
    ctx.fillText(`Score: ${score} / ${total}  (${pct}%)`, W / 2, 461);

    // Footer
    ctx.fillStyle = "#9296AC";
    ctx.font = "12px monospace";
    ctx.textAlign = "left";
    ctx.fillText(`Issued: ${dateStr}`, 52, H - 56);
    ctx.textAlign = "right";
    ctx.fillText(`ID: ${certId}`, W - 52, H - 56);

    ctx.fillStyle = "#3454D1";
    ctx.font = "12px monospace";
    ctx.textAlign = "center";
    ctx.fillText("quantumatlas.in/certification", W / 2, H - 56);

    // Seal
    ctx.fillStyle = "#3454D1";
    ctx.beginPath(); ctx.arc(W / 2, H - 28, 18, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#EEF1FC";
    ctx.beginPath(); ctx.arc(W / 2, H - 28, 13, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#3454D1";
    ctx.font = "bold 11px monospace";
    ctx.fillText("QA", W / 2, H - 24);

  }, [submitted, name, score, total, pct, dateStr, certId]);

  useEffect(() => {
    if (submitted) setTimeout(drawCertificate, 100);
  }, [submitted, drawCertificate]);

  // PNG download
  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `QuantumAtlas-Certificate-${name.replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // PDF download via jsPDF CDN
  const downloadPDF = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setPdfLoading(true);

    const imgData = canvas.toDataURL("image/png");

    // Check if jsPDF already loaded
    const win = window as unknown as Record<string, unknown>;
    if (win.jspdf) {
      generatePDF(imgData, win);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = () => generatePDF(imgData, win);
    script.onerror = () => {
      setPdfLoading(false);
      alert("PDF library failed to load. Downloading PNG instead.");
      downloadPNG();
    };
    document.head.appendChild(script);
  };

  const generatePDF = (imgData: string, win: Record<string, unknown>) => {
    try {
      const jspdfLib = win.jspdf as { jsPDF: new (o: object) => {
        addImage: (d: string, t: string, x: number, y: number, w: number, h: number) => void;
        save: (name: string) => void;
      }};
      const { jsPDF } = jspdfLib;
      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      // A4 landscape: 297 x 210 mm
      const margin = 6;
      const pageW = 297;
      const pageH = 210;
      const imgW = pageW - margin * 2;
      const imgH = (660 / 900) * imgW; // maintain canvas aspect ratio
      const yOffset = (pageH - imgH) / 2;
      pdf.addImage(imgData, "PNG", margin, yOffset, imgW, imgH);
      pdf.save(`QuantumAtlas-Certificate-${name.replace(/\s+/g, "-")}.pdf`);
    } catch {
      alert("PDF generation failed. Downloading PNG instead.");
      downloadPNG();
    } finally {
      setPdfLoading(false);
    }
  };

  if (score < 110) {
    return (
      <div className="max-w-content mx-auto px-6 py-14 text-center">
        <p className="text-4xl mb-3">🔒</p>
        <h1 className="font-serif text-2xl font-semibold text-ink mb-3">Certificate not unlocked</h1>
        <p className="text-ink-muted mb-6">You need to score 110/150 or higher to earn a certificate.</p>
        <Link href="/certification/exam"
          className="rounded-full bg-quantum text-white px-6 py-2.5 font-semibold hover:bg-quantum-700 transition-colors">
          Take the Exam →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">🎉 Congratulations!</p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        You passed — {score}/{total} ({pct}%)
      </h1>
      <p className="text-ink-muted max-w-xl mb-10">
        Enter your name exactly as you want it to appear on your certificate.
      </p>

      {!submitted ? (
        <div className="max-w-md">
          <label className="block text-sm font-medium text-ink mb-2">Your full name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && name.trim() && setSubmitted(true)}
            placeholder="e.g. Ajithkumar Eswaran"
            maxLength={50}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-line bg-surface text-ink placeholder:text-ink-soft focus:outline-none focus:border-quantum transition-colors text-base mb-4"
          />
          <button
            onClick={() => setSubmitted(true)}
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
          {/* Certificate preview */}
          <div className="rounded-2xl border-2 border-quantum overflow-hidden mb-6 max-w-3xl shadow-lg">
            <canvas ref={canvasRef} width={900} height={660} className="w-full h-auto" />
          </div>

          {/* Download buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={downloadPDF}
              disabled={pdfLoading}
              className="rounded-full bg-quantum text-white px-6 py-2.5 text-sm font-semibold hover:bg-quantum-700 transition-colors disabled:opacity-60"
            >
              {pdfLoading ? "Generating PDF…" : "⬇ Download PDF"}
            </button>
            <button
              onClick={downloadPNG}
              className="rounded-full border-2 border-quantum text-quantum bg-quantum-50 px-6 py-2.5 text-sm font-semibold hover:bg-quantum hover:text-white transition-colors"
            >
              ⬇ Download PNG
            </button>
            <button
              onClick={() => window.print()}
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
            >
              🖨 Print
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `I just earned a Quantum Computing Certificate from QuantumAtlas!\n\nScore: ${score}/${total} (${pct}%)\n\nTake the free exam → quantumatlas.in/certification`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink-muted hover:border-quantum hover:text-quantum transition-colors"
            >
              Share on X/Twitter
            </a>
          </div>

          {/* Certificate details */}
          <div className="rounded-xl bg-quantum-50 border border-quantum-100 p-5 max-w-md text-sm">
            <p className="font-mono text-xs uppercase tracking-wide text-quantum mb-3">Certificate Details</p>
            <div className="space-y-1">
              <p className="text-ink-muted"><span className="font-medium text-ink">Name:</span> {name}</p>
              <p className="text-ink-muted"><span className="font-medium text-ink">Score:</span> {score}/{total} ({pct}%)</p>
              <p className="text-ink-muted"><span className="font-medium text-ink">Date:</span> {dateStr}</p>
              <p className="text-ink-muted"><span className="font-medium text-ink">Certificate ID:</span> {certId}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link href="/certification" className="text-sm text-quantum hover:underline">
          ← Back to Certification
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
