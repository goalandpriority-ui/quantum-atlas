/**
 * Visualizes the layered physical stack of a quantum computer, from
 * room-temperature control electronics down to the qubit chip at
 * near-absolute-zero temperatures.
 */
export default function QuantumStackDiagram() {
  const layers = [
    { label: "Room-temperature control electronics", temp: "~293 K", y: 20 },
    { label: "Cooling stages (dilution refrigerator)", temp: "~4 K → 1 K", y: 75 },
    { label: "Wiring & filtering", temp: "~0.1 K", y: 130 },
    { label: "Qubit chip", temp: "~0.01 K (10 mK)", y: 185 },
  ];

  return (
    <svg
      viewBox="0 0 380 240"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A diagram showing the layered stack of a superconducting quantum computer, from room-temperature control electronics at the top, through successive cooling stages, down to the qubit chip operating near absolute zero at the bottom."
    >
      {layers.map((layer, i) => (
        <g key={layer.label}>
          <rect
            x="20"
            y={layer.y}
            width="340"
            height="44"
            rx="8"
            fill={i === layers.length - 1 ? "#EEF1FC" : "#FFFFFF"}
            stroke="#3454D1"
            strokeWidth={i === layers.length - 1 ? "2" : "1.5"}
            strokeOpacity={i === layers.length - 1 ? "1" : "0.5"}
          />
          <text x="36" y={layer.y + 27} fontFamily="Inter, sans-serif" fontSize="13" fill="#1B1B2F" fontWeight={i === layers.length - 1 ? "700" : "500"}>
            {layer.label}
          </text>
          <text x="344" y={layer.y + 27} textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#6B6F8A">
            {layer.temp}
          </text>
        </g>
      ))}

      {/* Arrow indicating colder going down */}
      <line x1="10" y1="25" x2="10" y2="225" stroke="#9296AC" strokeWidth="1.5" />
      <path d="M 5 217 L 10 226 L 15 217" fill="none" stroke="#9296AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="10" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#9296AC">
        colder
      </text>
    </svg>
  );
}

