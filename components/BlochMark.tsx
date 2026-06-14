type BlochMarkProps = {
  size?: number;
  animated?: boolean;
  className?: string;
};

/**
 * Signature visual motif: a simplified Bloch sphere with a state vector.
 * Used as the site mark and as a recurring divider/decoration.
 */
export default function BlochMark({ size = 32, animated = true, className = "" }: BlochMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* outer sphere */}
      <circle cx="20" cy="20" r="18" stroke="#3454D1" strokeWidth="1.5" fill="none" />
      {/* equator ellipse */}
      <ellipse cx="20" cy="20" rx="18" ry="6" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      {/* vertical axis */}
      <line x1="20" y1="2" x2="20" y2="38" stroke="#3454D1" strokeWidth="1" strokeOpacity="0.3" />
      {/* state vector group, rotates around center */}
      <g className={animated ? "orbit-vector" : ""} style={{ transformBox: "fill-box" }}>
        <line x1="20" y1="20" x2="32" y2="11" stroke="#E8542E" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="11" r="2.5" fill="#E8542E" />
      </g>
      {/* center point */}
      <circle cx="20" cy="20" r="1.5" fill="#1B1B2F" />
    </svg>
  );
}

