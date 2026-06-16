/**
 * Visualizes how classical vs quantum computation scales with problem size
 * for problems where quantum offers an exponential advantage.
 */
export default function ScalingDiagram() {
  const steps = [0, 10, 20, 30, 40, 50];
  const chartW = 280;
  const chartH = 120;
  const oX = 50;
  const oY = 160;

  const toX = (n: number) => oX + (n / 50) * chartW;
  // Classical: exponential 2^(n/10), capped
  const classY = (n: number) => {
    const val = Math.pow(2, n / 10);
    return oY - Math.min((val / Math.pow(2, 5)) * chartH, chartH);
  };
  // Quantum: polynomial n^2
  const quantY = (n: number) => oY - ((n * n) / (50 * 50)) * chartH;

  const classPath = steps.map((n, i) => `${i === 0 ? "M" : "L"} ${toX(n)} ${classY(n)}`).join(" ");
  const quantPath = steps.map((n, i) => `${i === 0 ? "M" : "L"} ${toX(n)} ${quantY(n)}`).join(" ");

  return (
    <svg
      viewBox="0 0 380 200"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A chart comparing how computation time scales with problem size for classical versus quantum computers. The classical line rises steeply (exponential), while the quantum line rises gradually (polynomial), showing a dramatic gap for large problems."
    >
      {/* Axes */}
      <line x1={oX} y1={oY} x2={oX + chartW + 15} y2={oY} stroke="#9296AC" strokeWidth="1.5" />
      <line x1={oX} y1={oY} x2={oX} y2={oY - chartH - 15} stroke="#9296AC" strokeWidth="1.5" />
      <text x={oX + chartW / 2} y={oY + 22} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A">Problem size</text>
      <text x="14" y={oY - chartH / 2} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A" transform={`rotate(-90,14,${oY - chartH / 2})`}>Time needed</text>

      {/* Classical line */}
      <path d={classPath} fill="none" stroke="#9296AC" strokeWidth="2.5" strokeLinecap="round" />
      <text x={toX(50) + 8} y={classY(50) + 4} fontFamily="Inter, sans-serif" fontSize="11" fill="#6B6F8A" fontWeight="600">Classical</text>

      {/* Quantum line */}
      <path d={quantPath} fill="none" stroke="#3454D1" strokeWidth="2.5" strokeLinecap="round" />
      <text x={toX(50) + 8} y={quantY(50) + 4} fontFamily="Inter, sans-serif" fontSize="11" fill="#3454D1" fontWeight="600">Quantum</text>

      {/* Gap annotation */}
      <line x1={toX(50)} y1={quantY(50)} x2={toX(50)} y2={classY(50)} stroke="#E8542E" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={toX(50) - 6} y={(quantY(50) + classY(50)) / 2} textAnchor="end" fontFamily="Inter, sans-serif" fontSize="11" fill="#E8542E" fontWeight="600">gap</text>

      <text x={oX + chartW / 2} y={oY + 40} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#9296AC">
        For certain problems, the gap grows exponentially with size
      </text>
    </svg>
  );
}

