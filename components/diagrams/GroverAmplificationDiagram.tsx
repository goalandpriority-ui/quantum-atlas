/**
 * Visualizes amplitude amplification in Grover's Algorithm: before the
 * algorithm runs, all outcomes are equally likely (flat bars); after
 * enough iterations, the correct answer's probability is amplified
 * while the others shrink.
 */
export default function GroverAmplificationDiagram() {
  const items = ["00", "01", "10", "11"];
  const before = [25, 25, 25, 25];
  const after = [4, 4, 88, 4];

  const barWidth = 28;
  const gap = 22;
  const groupGap = 70;
  const maxHeight = 90;
  const baseY = 150;

  return (
    <svg
      viewBox="0 0 380 200"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A bar chart diagram showing amplitude amplification in Grover's Algorithm. On the left, four possible outcomes each start with an equal 25% probability. On the right, after the algorithm runs, one outcome has been amplified to a much higher probability while the others have shrunk."
    >
      {/* Before group */}
      <text x="70" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Before
      </text>
      {before.map((val, i) => {
        const x = 20 + i * (barWidth + gap);
        const h = (val / 100) * maxHeight;
        return (
          <g key={`before-${items[i]}`}>
            <rect x={x} y={baseY - h} width={barWidth} height={h} fill="#3454D1" opacity="0.35" rx="3" />
            <text x={x + barWidth / 2} y={baseY + 18} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#6B6F8A">
              {items[i]}
            </text>
          </g>
        );
      })}

      {/* Arrow */}
      <line x1="160" y1="100" x2="210" y2="100" stroke="#9296AC" strokeWidth="2" />
      <path d="M 202 92 L 214 100 L 202 108" fill="none" stroke="#9296AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="185" y="85" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#9296AC">
        amplify
      </text>

      {/* After group */}
      <text x="300" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        After
      </text>
      {after.map((val, i) => {
        const x = 230 + i * (barWidth + gap);
        const h = (val / 100) * maxHeight;
        const isAnswer = i === 2;
        return (
          <g key={`after-${items[i]}`}>
            <rect
              x={x}
              y={baseY - h}
              width={barWidth}
              height={h}
              fill={isAnswer ? "#E8542E" : "#3454D1"}
              opacity={isAnswer ? "1" : "0.25"}
              rx="3"
            />
            <text x={x + barWidth / 2} y={baseY + 18} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill={isAnswer ? "#E8542E" : "#6B6F8A"} fontWeight={isAnswer ? "700" : "400"}>
              {items[i]}
            </text>
          </g>
        );
      })}

      <text x="190" y="190" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#9296AC">
        The correct answer's probability grows with each iteration
      </text>
    </svg>
  );
      }
        
