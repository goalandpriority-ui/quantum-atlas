"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

type Vec2 = { x: number; y: number };
type Threat = {
  id: number;
  pos: Vec2;
  vel: Vec2;
  type: "bit-flip" | "phase-flip" | "decoherence";
  radius: number;
  hp: number;
};
type Qubit = { id: number; pos: Vec2; fidelity: number; shielded: boolean; shieldTimer: number };
type Particle = { id: number; pos: Vec2; vel: Vec2; alpha: number; color: string; radius: number };
type GameState = "menu" | "playing" | "gameover";

const THREAT_COLORS = {
  "bit-flip": "#E8542E",
  "phase-flip": "#FF8C42",
  "decoherence": "#CC3A1E",
};

const THREAT_LABELS = {
  "bit-flip": "X",
  "phase-flip": "Z",
  "decoherence": "☠",
};

const GATES = [
  { id: "X", label: "X Gate", description: "Fixes bit-flip errors", color: "#3454D1", key: "1" },
  { id: "Z", label: "Z Gate", description: "Fixes phase-flip errors", color: "#2A41A8", key: "2" },
  { id: "H", label: "H Gate", description: "Shields nearby qubits", color: "#5B8CFF", key: "3" },
];

let nextId = 1;
function uid() { return nextId++; }

export default function QubitDefenderPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    qubits: Qubit[];
    threats: Threat[];
    particles: Particle[];
    score: number;
    wave: number;
    spawnTimer: number;
    gameOver: boolean;
    selectedGate: string;
    highScore: number;
  }>({
    qubits: [],
    threats: [],
    particles: [],
    score: 0,
    wave: 1,
    spawnTimer: 0,
    gameOver: false,
    selectedGate: "X",
    highScore: 0,
  });
  const rafRef = useRef<number | null>(null);
  const [gameState, setGameState] = useState<GameState>("menu");
  const [displayScore, setDisplayScore] = useState(0);
  const [displayWave, setDisplayWave] = useState(1);
  const [selectedGate, setSelectedGate] = useState("X");
  const [highScore, setHighScore] = useState(0);

  // Sync selectedGate to ref
  useEffect(() => {
    stateRef.current.selectedGate = selectedGate;
  }, [selectedGate]);

  const initGame = useCallback(() => {
    const s = stateRef.current;
    // 3 qubits arranged in a triangle in the center area
    s.qubits = [
      { id: uid(), pos: { x: 300, y: 150 }, fidelity: 100, shielded: false, shieldTimer: 0 },
      { id: uid(), pos: { x: 180, y: 310 }, fidelity: 100, shielded: false, shieldTimer: 0 },
      { id: uid(), pos: { x: 420, y: 310 }, fidelity: 100, shielded: false, shieldTimer: 0 },
    ];
    s.threats = [];
    s.particles = [];
    s.score = 0;
    s.wave = 1;
    s.spawnTimer = 0;
    s.gameOver = false;
  }, []);

  const spawnThreat = useCallback(() => {
    const s = stateRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.width, H = canvas.height;
    // Spawn from random edge
    const edge = Math.floor(Math.random() * 4);
    let pos: Vec2;
    if (edge === 0) pos = { x: Math.random() * W, y: -20 };
    else if (edge === 1) pos = { x: W + 20, y: Math.random() * H };
    else if (edge === 2) pos = { x: Math.random() * W, y: H + 20 };
    else pos = { x: -20, y: Math.random() * H };

    // Target a random qubit
    const target = s.qubits[Math.floor(Math.random() * s.qubits.length)];
    if (!target) return;

    const dx = target.pos.x - pos.x;
    const dy = target.pos.y - pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = 0.8 + s.wave * 0.15;
    const vel = { x: (dx / dist) * speed, y: (dy / dist) * speed };

    const types: Threat["type"][] = ["bit-flip", "phase-flip", "decoherence"];
    const type = types[Math.floor(Math.random() * (s.wave < 3 ? 2 : 3))];

    s.threats.push({
      id: uid(),
      pos,
      vel,
      type,
      radius: type === "decoherence" ? 14 : 11,
      hp: type === "decoherence" ? 2 : 1,
    });
  }, []);

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const s = stateRef.current;
    if (s.gameOver) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (e.clientX - rect.left) * scaleX;
    const cy = (e.clientY - rect.top) * scaleY;

    const gate = s.selectedGate;

    if (gate === "H") {
      // H gate: shield all qubits near click for 3 seconds
      s.qubits.forEach((q) => {
        const dx = q.pos.x - cx, dy = q.pos.y - cy;
        if (Math.sqrt(dx * dx + dy * dy) < 100) {
          q.shielded = true;
          q.shieldTimer = 180;
        }
      });
      // Particle burst
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        s.particles.push({ id: uid(), pos: { x: cx, y: cy }, vel: { x: Math.cos(angle) * 2, y: Math.sin(angle) * 2 }, alpha: 1, color: "#5B8CFF", radius: 4 });
      }
      return;
    }

    // X or Z gate: destroy matching threat type near click
    const fixType = gate === "X" ? "bit-flip" : "phase-flip";
    let hit = false;
    s.threats = s.threats.filter((t) => {
      const dx = t.pos.x - cx, dy = t.pos.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 40 && (t.type === fixType || (gate === "X" && t.type === "decoherence"))) {
        t.hp--;
        if (t.hp <= 0) {
          // Explosion particles
          for (let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2;
            s.particles.push({ id: uid(), pos: { ...t.pos }, vel: { x: Math.cos(angle) * 3, y: Math.sin(angle) * 3 }, alpha: 1, color: THREAT_COLORS[t.type], radius: 3 });
          }
          s.score += t.type === "decoherence" ? 30 : 10;
          hit = true;
          return false;
        }
      }
      return true;
    });

    // Miss flash
    if (!hit) {
      s.particles.push({ id: uid(), pos: { x: cx, y: cy }, vel: { x: 0, y: 0 }, alpha: 0.7, color: "#ffffff", radius: 8 });
    }
  }, []);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;
    if (s.gameOver) return;

    const W = canvas.width, H = canvas.height;

    // Spawn logic
    s.spawnTimer++;
    const spawnRate = Math.max(40, 120 - s.wave * 12);
    if (s.spawnTimer >= spawnRate) {
      spawnThreat();
      s.spawnTimer = 0;
    }

    // Update threats
    for (const t of s.threats) {
      t.pos.x += t.vel.x;
      t.pos.y += t.vel.y;

      // Check collision with qubits
      for (const q of s.qubits) {
        const dx = q.pos.x - t.pos.x, dy = q.pos.y - t.pos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < t.radius + 18) {
          if (!q.shielded) {
            q.fidelity -= t.type === "decoherence" ? 20 : 12;
          }
          // Flash particles on hit
          for (let i = 0; i < 5; i++) {
            const angle = Math.random() * Math.PI * 2;
            s.particles.push({ id: uid(), pos: { ...t.pos }, vel: { x: Math.cos(angle) * 2, y: Math.sin(angle) * 2 }, alpha: 1, color: q.shielded ? "#5B8CFF" : "#E8542E", radius: 3 });
          }
          t.hp = 0; // Remove threat after hitting qubit
        }
      }
    }
    s.threats = s.threats.filter((t) => t.hp > 0 && t.pos.x > -50 && t.pos.x < W + 50 && t.pos.y > -50 && t.pos.y < H + 50);

    // Update shield timers
    for (const q of s.qubits) {
      if (q.shielded) {
        q.shieldTimer--;
        if (q.shieldTimer <= 0) q.shielded = false;
      }
      q.fidelity = Math.max(0, q.fidelity);
    }

    // Update particles
    for (const p of s.particles) {
      p.pos.x += p.vel.x;
      p.pos.y += p.vel.y;
      p.alpha -= 0.03;
      p.radius *= 0.97;
    }
    s.particles = s.particles.filter((p) => p.alpha > 0);

    // Wave progression
    s.wave = 1 + Math.floor(s.score / 150);

    // Check game over
    if (s.qubits.every((q) => q.fidelity <= 0)) {
      s.gameOver = true;
      const saved = parseInt(localStorage.getItem("qa_defender_hs") || "0");
      const newHs = Math.max(saved, s.score);
      localStorage.setItem("qa_defender_hs", String(newHs));
      s.highScore = newHs;
      setHighScore(newHs);
      setDisplayScore(s.score);
      setGameState("gameover");
      return;
    }

    // ---------- Draw ----------
    ctx.clearRect(0, 0, W, H);

    // Background grid
    ctx.strokeStyle = "rgba(var(--color-line), 0.3)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Entanglement lines between qubits
    ctx.strokeStyle = "rgba(52,84,209,0.2)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 6]);
    for (let i = 0; i < s.qubits.length; i++) {
      for (let j = i + 1; j < s.qubits.length; j++) {
        ctx.beginPath();
        ctx.moveTo(s.qubits[i].pos.x, s.qubits[i].pos.y);
        ctx.lineTo(s.qubits[j].pos.x, s.qubits[j].pos.y);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);

    // Particles
    for (const p of s.particles) {
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.pos.x, p.pos.y, Math.max(0.1, p.radius), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Threats
    for (const t of s.threats) {
      ctx.fillStyle = THREAT_COLORS[t.type];
      ctx.shadowColor = THREAT_COLORS[t.type];
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(t.pos.x, t.pos.y, t.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "white";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(THREAT_LABELS[t.type], t.pos.x, t.pos.y);
    }

    // Qubits
    for (const q of s.qubits) {
      const fidelityColor = q.fidelity > 60 ? "#3454D1" : q.fidelity > 30 ? "#FF8C42" : "#E8542E";

      // Shield ring
      if (q.shielded) {
        ctx.strokeStyle = "#5B8CFF";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5 + 0.3 * Math.sin(Date.now() / 200);
        ctx.beginPath();
        ctx.arc(q.pos.x, q.pos.y, 30, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Qubit body
      ctx.fillStyle = fidelityColor;
      ctx.shadowColor = fidelityColor;
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(q.pos.x, q.pos.y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Fidelity label
      ctx.fillStyle = "white";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${Math.round(q.fidelity)}%`, q.pos.x, q.pos.y);

      // Fidelity bar below qubit
      const barW = 36;
      const barH = 4;
      const barX = q.pos.x - barW / 2;
      const barY = q.pos.y + 24;
      ctx.fillStyle = "#333";
      ctx.fillRect(barX, barY, barW, barH);
      ctx.fillStyle = fidelityColor;
      ctx.fillRect(barX, barY, barW * (q.fidelity / 100), barH);
    }

    setDisplayScore(s.score);
    setDisplayWave(s.wave);

    rafRef.current = requestAnimationFrame(gameLoop);
  }, [spawnThreat]);

  const startGame = useCallback(() => {
    initGame();
    const saved = parseInt(localStorage.getItem("qa_defender_hs") || "0");
    stateRef.current.highScore = saved;
    setHighScore(saved);
    setDisplayScore(0);
    setDisplayWave(1);
    setGameState("playing");
  }, [initGame]);

  useEffect(() => {
    if (gameState === "playing") {
      rafRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [gameState, gameLoop]);

  return (
    <div className="max-w-content mx-auto px-6 py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
        Arcade Game
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-3">
        Qubit Defender
      </h1>
      <p className="text-ink-muted max-w-2xl mb-6">
        Decoherence, bit-flips, and phase-flips are attacking your qubits.
        Select a correction gate and click to neutralize threats before
        they drain your qubits' fidelity to zero.
      </p>

      {/* Gate selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {GATES.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelectedGate(g.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              selectedGate === g.id
                ? "bg-quantum text-white border-quantum shadow-md"
                : "bg-surface text-ink-muted border-line hover:border-quantum"
            }`}
          >
            [{g.key}] {g.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-ink-soft mb-4">
        {GATES.find((g) => g.id === selectedGate)?.description} — click on canvas to apply
      </p>

      {/* Score bar */}
      <div className="flex items-center gap-6 mb-4 font-mono text-sm">
        <span className="text-ink">Score: <span className="text-quantum font-bold">{displayScore}</span></span>
        <span className="text-ink">Wave: <span className="text-collapse font-bold">{displayWave}</span></span>
        <span className="text-ink">Best: <span className="text-ink-muted">{highScore}</span></span>
      </div>

      {/* Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-line bg-paper">
        <canvas
          ref={canvasRef}
          width={600}
          height={420}
          onClick={handleCanvasClick}
          className="w-full cursor-crosshair"
          style={{ display: gameState === "playing" ? "block" : "none" }}
        />

        {/* Menu overlay */}
        {gameState === "menu" && (
          <div className="w-full h-[420px] flex flex-col items-center justify-center gap-6 bg-paper">
            <p className="text-4xl">⚛️</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">Qubit Defender</h2>
            <div className="text-sm text-ink-muted text-center max-w-sm space-y-1">
              <p>🔴 <strong>X</strong> — Destroy bit-flip threats</p>
              <p>🟠 <strong>Z</strong> — Destroy phase-flip threats</p>
              <p>⚡ <strong>H</strong> — Shield nearby qubits temporarily</p>
              <p className="text-ink-soft pt-2">Click canvas to apply gates · Protect qubit fidelity</p>
            </div>
            <button
              onClick={startGame}
              className="rounded-full bg-quantum text-white px-8 py-3 font-semibold hover:bg-quantum-700 transition-colors"
            >
              Start Game
            </button>
          </div>
        )}

        {/* Game over overlay */}
        {gameState === "gameover" && (
          <div className="w-full h-[420px] flex flex-col items-center justify-center gap-4 bg-paper">
            <p className="text-4xl">💥</p>
            <h2 className="font-serif text-2xl font-semibold text-ink">Decoherence Wins</h2>
            <p className="font-mono text-lg text-quantum font-bold">Score: {displayScore}</p>
            {displayScore >= highScore && highScore > 0 && (
              <p className="font-mono text-sm text-collapse">🏆 New High Score!</p>
            )}
            <p className="font-mono text-sm text-ink-muted">Best: {highScore}</p>
            <div className="flex gap-3">
              <button
                onClick={startGame}
                className="rounded-full bg-quantum text-white px-6 py-2.5 font-semibold hover:bg-quantum-700 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="prose-quantum max-w-2xl mt-8">
        <h2>What you're defending against</h2>
        <p>
          The threats in this game mirror real quantum hardware challenges.
          Bit-flip errors (X) and phase-flip errors (Z) are the two
          fundamental{" "}
          <Link href="/dictionary/pauli-gates" className="text-quantum hover:underline">
            Pauli error types
          </Link>{" "}
          in real quantum error correction — and the correction gates you're
          clicking are literally the same X and Z gates used in real{" "}
          <Link href="/learn/quantum-error-correction" className="text-quantum hover:underline">
            quantum error correction
          </Link>{" "}
          to fix them. Decoherence represents the general environmental
          noise threatening qubit fidelity over time.
        </p>
      </div>

      <div className="mt-8 rounded-2xl bg-quantum-50 border border-quantum-100 p-8 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-quantum mb-2">
          Go deeper
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/learn/quantum-error-correction" className="text-quantum hover:underline">
            → Quantum Error Correction explained
          </Link>
          <Link href="/dictionary/pauli-gates" className="text-quantum hover:underline">
            → Pauli Gates — the real X, Y, Z
          </Link>
          <Link href="/daily-challenge" className="text-quantum hover:underline">
            → Daily Challenge — test your knowledge
          </Link>
        </div>
      </div>
    </div>
  );
}
