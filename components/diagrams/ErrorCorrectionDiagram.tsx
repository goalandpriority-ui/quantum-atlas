/**
 * Visualizes the core idea of quantum error correction: several
 * imperfect "physical" qubits are combined to form one more reliable
 * "logical" qubit.
 */
export default function ErrorCorrectionDiagram() {
  const physicalPositions = [
    { x: 60, y: 50 },
    { x: 60, y: 110 },
    { x: 60, y: 170 },
    { x: 130, y: 50 },
    { x: 130, y: 170 },
    { x: 130, y: 110 },
    { x: 60, y: 30 + 0 },
  ];

  return (
    <svg
      viewBox="0 0 380 220"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A diagram showing a grid of small physical qubits on the left, each prone to error, combined together to form a single, more reliable logical qubit shown as a larger shape on the right."
    >
      {/* Physical qubits grid */}
      <text x="95" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Physical qubits (noisy)
      </text>
      {[
        [40, 45], [95, 45], [150, 45],
        [40, 100], [95, 100], [150, 100],
        [40, 155], [95, 155], [150, 155],
      ].map(([x, y], i) => (
        <g key={`p-${i}`}>
          <circle cx={x} cy={y} r="18" fill="#EEF1FC" stroke="#3454D1" strokeWidth="1.5" />
          <text x={x} y={y + 5} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#3454D1">
            q
          </text>
          {i === 4 && (
            <circle cx={x} cy={y} r="22" fill="none" stroke="#E8542E" strokeWidth="2" strokeDasharray="3 3" />
          )}
        </g>
      ))}
      <text x="95" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#E8542E">
        (dashed = an error occurred here)
      </text>

      {/* Arrow */}
      <line x1="200" y1="110" x2="250" y2="110" stroke="#9296AC" strokeWidth="2" />
      <path d="M 242 102 L 254 110 L 242 118" fill="none" stroke="#9296AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="225" y="95" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#9296AC">
        encode
      </text>

      {/* Logical qubit */}
      <circle cx="320" cy="110" r="55" fill="none" stroke="#3454D1" strokeWidth="2.5" />
      <ellipse cx="320" cy="110" rx="55" ry="18" fill="none" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.35" />
      <text x="320" y="115" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="16" fill="#3454D1" fontWeight="700">
        logical q
      </text>
      <text x="320" y="185" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Logical qubit
      </text>
      <text x="320" y="202" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#6B6F8A">
        (error survives intact)
      </text>
    </svg>
  );
      }

