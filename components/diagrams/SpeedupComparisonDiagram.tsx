/**
 * Visualizes how the number of steps required grows with problem size
 * for a classical brute-force search versus Grover's quantum search —
 * illustrating a quadratic speedup.
 */
export default function SpeedupComparisonDiagram() {
  // Simple illustrative curves: classical ~ N, quantum ~ sqrt(N)
  const points = [4, 16, 36, 64, 100];
  const maxN = 100;
  const chartWidth = 300;
  const chartHeight = 110;
  const originX = 40;
  const originY = 150;

  const toX = (n: number) => originX + (n / maxN) * chartWidth;
  const classicalY = (n: number) => originY - (n / maxN) * chartHeight;
  const quantumY = (n: number) => originY - (Math.sqrt(n) / Math.sqrt(maxN)) * chartHeight;

  const classicalPath = points.map((n, i) => `${i === 0 ? "M" : "L"} ${toX(n)} ${classicalY(n)}`).join(" ");
  const quantumPath = points.map((n, i) => `${i === 0 ? "M" : "L"} ${toX(n)} ${quantumY(n)}`).join(" ");

  return (
    <svg
      viewBox="0 0 380 200"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A line chart comparing how the number of steps grows with problem size for classical search versus Grover's quantum search. The classical line grows linearly and steeply, while the quantum line grows much more slowly, following a square-root curve."
    >
      {/* Axes */}
      <line x1={originX} y1={originY} x2={originX + chartWidth + 10} y2={originY} stroke="#9296AC" strokeWidth="1.5" />
      <line x1={originX} y1={originY} x2={originX} y2={originY - chartHeight - 10} stroke="#9296AC" strokeWidth="1.5" />
      <text x={originX + chartWidth / 2} y={originY + 25} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A">
        Problem size (N)
      </text>
      <text x="15" y={originY - chartHeight / 2} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A" transform={`rotate(-90, 15, ${originY - chartHeight / 2})`}>
        Steps needed
      </text>

      {/* Classical line */}
      <path d={classicalPath} fill="none" stroke="#9296AC" strokeWidth="2.5" />
      <text x={toX(100) + 8} y={classicalY(100)} fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A" fontWeight="600">
        Classical: ~N
      </text>

      {/* Quantum line */}
      <path d={quantumPath} fill="none" stroke="#E8542E" strokeWidth="2.5" />
      <text x={toX(100) + 8} y={quantumY(100) - 4} fontFamily="Inter, sans-serif" fontSize="12" fill="#E8542E" fontWeight="600">
        Grover's: ~√N
      </text>
    </svg>
  );
}

