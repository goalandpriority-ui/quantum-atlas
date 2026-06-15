/**
 * Visualizes the spinning-coin analogy for superposition: a coin
 * mid-spin (superposition) on the left, and the two possible outcomes
 * after measurement on the right.
 */
export default function CoinSuperpositionDiagram() {
  return (
    <svg
      viewBox="0 0 380 200"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A diagram showing a spinning coin representing superposition on the left, with an arrow pointing to two possible measurement outcomes — heads representing 0, and tails representing 1 — on the right."
    >
      {/* Spinning coin (superposition) */}
      <ellipse cx="80" cy="100" rx="55" ry="55" fill="none" stroke="#E8542E" strokeWidth="3" strokeDasharray="10 6" />
      <text x="80" y="106" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" fill="#E8542E" fontWeight="500">
        α|0⟩+β|1⟩
      </text>
      <text x="80" y="172" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Before measurement
      </text>

      {/* Arrow */}
      <line x1="150" y1="100" x2="210" y2="100" stroke="#9296AC" strokeWidth="2" />
      <path d="M 202 92 L 214 100 L 202 108" fill="none" stroke="#9296AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="180" y="85" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#9296AC">
        measure
      </text>

      {/* Outcome: 0 */}
      <circle cx="290" cy="60" r="32" fill="none" stroke="#3454D1" strokeWidth="2.5" />
      <text x="290" y="68" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="22" fill="#3454D1" fontWeight="600">
        |0⟩
      </text>

      {/* Outcome: 1 */}
      <circle cx="290" cy="140" r="32" fill="none" stroke="#3454D1" strokeWidth="2.5" />
      <text x="290" y="148" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="22" fill="#3454D1" fontWeight="600">
        |1⟩
      </text>

      <text x="290" y="180" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        One definite outcome
      </text>
    </svg>
  );
}

