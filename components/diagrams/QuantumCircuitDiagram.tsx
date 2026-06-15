/**
 * Visualizes a simple two-qubit quantum circuit: a Hadamard gate on the
 * first qubit puts it into superposition, then a CNOT gate entangles
 * it with the second qubit — together producing a Bell state.
 */
export default function QuantumCircuitDiagram() {
  return (
    <svg
      viewBox="0 0 380 180"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A quantum circuit diagram with two horizontal qubit wires. The top wire passes through a Hadamard gate box labeled H, then both wires connect through a CNOT gate, shown as a control dot on the top wire linked to a target circle on the bottom wire."
    >
      {/* Qubit 0 wire */}
      <line x1="20" y1="50" x2="360" y2="50" stroke="#9296AC" strokeWidth="1.5" />
      <text x="10" y="55" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="14" fill="#1B1B2F">
        |0⟩
      </text>

      {/* Qubit 1 wire */}
      <line x1="20" y1="130" x2="360" y2="130" stroke="#9296AC" strokeWidth="1.5" />
      <text x="10" y="135" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="14" fill="#1B1B2F">
        |0⟩
      </text>

      {/* Hadamard gate */}
      <rect x="90" y="28" width="44" height="44" rx="6" fill="#EEF1FC" stroke="#3454D1" strokeWidth="1.5" />
      <text x="112" y="56" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="20" fill="#3454D1" fontWeight="700">
        H
      </text>

      {/* CNOT gate */}
      <line x1="230" y1="50" x2="230" y2="130" stroke="#E8542E" strokeWidth="2" />
      <circle cx="230" cy="50" r="7" fill="#E8542E" />
      <circle cx="230" cy="130" r="16" fill="none" stroke="#E8542E" strokeWidth="2.5" />
      <line x1="230" y1="118" x2="230" y2="142" stroke="#E8542E" strokeWidth="2.5" />
      <line x1="218" y1="130" x2="242" y2="130" stroke="#E8542E" strokeWidth="2.5" />

      {/* Labels */}
      <text x="112" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A">
        Hadamard
      </text>
      <text x="230" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B6F8A">
        CNOT
      </text>

      {/* Output */}
      <text x="345" y="55" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#1B1B2F" fontWeight="600">
        entangled
      </text>
      <text x="345" y="135" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#1B1B2F" fontWeight="600">
        pair
      </text>

      {/* Caption */}
      <text x="190" y="172" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#9296AC">
        H puts qubit 0 into superposition; CNOT then entangles both qubits
      </text>
    </svg>
  );
}

