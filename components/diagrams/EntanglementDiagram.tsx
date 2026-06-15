/**
 * Visualizes entanglement: two particles whose states are correlated
 * regardless of the distance between them, connected by a dashed link.
 */
export default function EntanglementDiagram() {
  return (
    <svg
      viewBox="0 0 360 220"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A diagram showing two entangled particles connected by a dashed line, each represented as a small Bloch sphere with correlated state vectors pointing in opposite directions."
    >
      {/* Connection line */}
      <line x1="100" y1="110" x2="260" y2="110" stroke="#9296AC" strokeWidth="1.5" strokeDasharray="6 6" />
      <text x="180" y="95" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#9296AC">
        entangled
      </text>

      {/* Particle A */}
      <circle cx="80" cy="110" r="60" fill="none" stroke="#3454D1" strokeWidth="1.5" />
      <ellipse cx="80" cy="110" rx="60" ry="20" fill="none" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.35" />
      <line x1="80" y1="110" x2="80" y2="65" stroke="#E8542E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="65" r="5" fill="#E8542E" />
      <circle cx="80" cy="110" r="3" fill="#1B1B2F" />
      <text x="80" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Qubit A
      </text>

      {/* Particle B */}
      <circle cx="280" cy="110" r="60" fill="none" stroke="#3454D1" strokeWidth="1.5" />
      <ellipse cx="280" cy="110" rx="60" ry="20" fill="none" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.35" />
      <line x1="280" y1="110" x2="280" y2="155" stroke="#E8542E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="280" cy="155" r="5" fill="#E8542E" />
      <circle cx="280" cy="110" r="3" fill="#1B1B2F" />
      <text x="280" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Qubit B
      </text>

      {/* Caption */}
      <text x="180" y="215" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#9296AC">
        Measuring A instantly determines B's outcome — at any distance
      </text>
    </svg>
  );
}

