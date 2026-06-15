/**
 * Visualizes a qubit's state on a Bloch sphere — |0⟩ at the top pole,
 * |1⟩ at the bottom pole, and a state vector at an angle representing
 * a superposition between the two.
 */
export default function BlochSphereDiagram() {
  return (
    <svg
      viewBox="0 0 360 340"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A Bloch sphere diagram showing a qubit state vector pointing between the |0⟩ and |1⟩ poles, representing superposition."
    >
      {/* Outer sphere */}
      <circle cx="180" cy="170" r="130" fill="none" stroke="#3454D1" strokeWidth="1.5" />
      {/* Equator ellipse */}
      <ellipse cx="180" cy="170" rx="130" ry="42" fill="none" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.35" />
      {/* Vertical axis */}
      <line x1="180" y1="20" x2="180" y2="320" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.3" />
      {/* Horizontal axis */}
      <line x1="50" y1="170" x2="310" y2="170" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />

      {/* |0> label - top pole */}
      <circle cx="180" cy="40" r="4" fill="#1B1B2F" />
      <text x="200" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="16" fill="#1B1B2F">
        |0⟩
      </text>

      {/* |1> label - bottom pole */}
      <circle cx="180" cy="300" r="4" fill="#1B1B2F" />
      <text x="200" y="312" fontFamily="IBM Plex Mono, monospace" fontSize="16" fill="#1B1B2F">
        |1⟩
      </text>

      {/* State vector pointing to a superposition state */}
      <line x1="180" y1="170" x2="270" y2="95" stroke="#E8542E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="270" cy="95" r="5" fill="#E8542E" />

      {/* Angle arc */}
      <path
        d="M 180 130 A 40 40 0 0 1 211 113"
        fill="none"
        stroke="#9296AC"
        strokeWidth="1"
      />
      <text x="218" y="125" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#6B6F8A">
        θ
      </text>

      {/* Center point */}
      <circle cx="180" cy="170" r="3" fill="#1B1B2F" />

      {/* State label */}
      <text x="278" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="15" fill="#E8542E" fontWeight="500">
        |ψ⟩
      </text>

      {/* Caption */}
      <text x="180" y="332" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#9296AC">
        |ψ⟩ = α|0⟩ + β|1⟩ — a superposition state
      </text>
    </svg>
  );
}

