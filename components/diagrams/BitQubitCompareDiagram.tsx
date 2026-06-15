/**
 * Side-by-side visual comparison: a classical bit (a simple switch
 * that is either 0 or 1) versus a qubit (a Bloch sphere whose state
 * vector can point anywhere, representing superposition).
 */
export default function BitQubitCompareDiagram() {
  return (
    <svg
      viewBox="0 0 380 240"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A side-by-side comparison diagram: on the left, a classical bit shown as a switch fixed at either 0 or 1; on the right, a qubit shown as a sphere whose state vector can point to any combination of 0 and 1."
    >
      {/* Classical bit panel */}
      <rect x="20" y="20" width="150" height="180" rx="12" fill="none" stroke="#E4DFD3" strokeWidth="1.5" />
      <text x="95" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Classical Bit
      </text>
      {/* switch track */}
      <rect x="55" y="90" width="80" height="40" rx="20" fill="#EEF1FC" stroke="#3454D1" strokeWidth="1.5" />
      {/* switch knob fixed at one side */}
      <circle cx="135" cy="110" r="16" fill="#3454D1" />
      <text x="95" y="116" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="16" fill="#3454D1" fontWeight="600" opacity="0">
        1
      </text>
      <text x="135" y="115" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="14" fill="#FFFFFF" fontWeight="600">
        1
      </text>
      <text x="95" y="165" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A">
        Always exactly
      </text>
      <text x="95" y="182" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#1B1B2F" fontWeight="600">
        0 or 1
      </text>

      {/* Qubit panel */}
      <rect x="210" y="20" width="150" height="180" rx="12" fill="none" stroke="#E4DFD3" strokeWidth="1.5" />
      <text x="285" y="45" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight="600">
        Qubit
      </text>
      {/* mini bloch sphere */}
      <circle cx="285" cy="105" r="42" fill="none" stroke="#3454D1" strokeWidth="1.5" />
      <ellipse cx="285" cy="105" rx="42" ry="14" fill="none" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.35" />
      <line x1="285" y1="105" x2="318" y2="78" stroke="#E8542E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="318" cy="78" r="4" fill="#E8542E" />
      <circle cx="285" cy="105" r="2.5" fill="#1B1B2F" />
      <text x="285" y="165" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A">
        Can be a
      </text>
      <text x="285" y="182" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#1B1B2F" fontWeight="600">
        superposition
      </text>

      {/* VS divider */}
      <circle cx="190" cy="110" r="18" fill="#FAF7F1" stroke="#E4DFD3" strokeWidth="1.5" />
      <text x="190" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#9296AC" fontWeight="600">
        VS
      </text>
    </svg>
  );
}

