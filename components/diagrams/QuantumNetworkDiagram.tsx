/**
 * Visualizes a quantum internet: multiple nodes connected by entanglement
 * links, forming a network distinct from the classical internet.
 */
export default function QuantumNetworkDiagram() {
  const nodes = [
    { x: 60, y: 50, label: "Lab A" },
    { x: 200, y: 30, label: "Lab B" },
    { x: 320, y: 60, label: "Lab C" },
    { x: 90, y: 160, label: "Lab D" },
    { x: 250, y: 170, label: "Lab E" },
  ];
  const links = [
    [0, 1], [1, 2], [0, 3], [1, 4], [3, 4], [2, 4],
  ];

  return (
    <svg
      viewBox="0 0 380 210"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="A network diagram showing five labs connected by dashed lines representing entanglement links, forming a distributed quantum internet."
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#3454D1"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          opacity="0.6"
        />
      ))}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="14" fill="#EEF1FC" stroke="#3454D1" strokeWidth="2" />
          <circle cx={node.x} cy={node.y} r="4" fill="#E8542E" />
          <text x={node.x} y={node.y + 28} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#1B1B2F" fontWeight="600">
            {node.label}
          </text>
        </g>
      ))}
      <text x="190" y="200" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#9296AC">
        Dashed lines represent entanglement distributed between nodes
      </text>
    </svg>
  );
}

