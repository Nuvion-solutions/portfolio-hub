export default function LuminaryThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="lm-glow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lm-flame" cx="50%" cy="80%" r="50%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lm-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <filter id="lm-glow-f">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="lm-soft">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="600" height="208" fill="#080508" />
      <rect width="600" height="208" fill="url(#lm-glow)" />

      {/* Soft light rays from center candle */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x2 = 300 + Math.cos(rad) * 160
        const y2 = 104 + Math.sin(rad) * 100
        return (
          <line key={i} x1="300" y1="104" x2={x2} y2={y2}
            stroke="#F59E0B" strokeOpacity={0.025 + (i % 3) * 0.01}
            strokeWidth="0.5" />
        )
      })}

      {/* Candle body */}
      <rect x="292" y="108" width="16" height="34" rx="2"
        fill="#1A1008" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="0.5" />
      {/* Wick */}
      <line x1="300" y1="108" x2="300" y2="100" stroke="#D97706" strokeOpacity="0.7" strokeWidth="1" />
      {/* Flame */}
      <ellipse cx="300" cy="94" rx="6" ry="9" fill="url(#lm-flame)" filter="url(#lm-glow-f)" />
      <ellipse cx="300" cy="96" rx="3" ry="5" fill="#FDE68A" fillOpacity="0.9" />

      {/* Wax drip */}
      <path d="M292 120 Q289 126 291 132" fill="none" stroke="#F59E0B" strokeOpacity="0.15" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small surrounding candles */}
      {[
        [220, 130, 22], [380, 130, 22],
        [160, 150, 16], [440, 150, 16],
      ].map(([cx, cy, h], i) => (
        <g key={i} filter="url(#lm-soft)">
          <rect x={cx - 4} y={cy} width="8" height={h} rx="1"
            fill="#110A04" stroke="#F59E0B" strokeOpacity="0.25" strokeWidth="0.5" />
          <line x1={cx} y1={cy} x2={cx} y2={cy - 6} stroke="#D97706" strokeOpacity="0.5" strokeWidth="0.8" />
          <ellipse cx={cx} cy={cy - 9} rx="3" ry="4" fill="#FDE68A" fillOpacity={0.4 - i * 0.05} />
        </g>
      ))}

      {/* Wordmark */}
      <text x="300" y="176" textAnchor="middle"
        fontFamily="'Georgia', serif" fontSize="13" fontWeight="400"
        letterSpacing="7" fill="url(#lm-gold)" fillOpacity="0.75">
        LUMINARY
      </text>

      {/* Subtitle */}
      <text x="300" y="192" textAnchor="middle"
        fontFamily="'Arial', sans-serif" fontSize="5.5" fontWeight="600"
        letterSpacing="4" fill="#F59E0B" fillOpacity="0.35">
        FOUNDATION
      </text>

      {/* Corner brackets */}
      <path d="M50 22 L22 22 L22 50"  fill="none" stroke="#F59E0B" strokeOpacity="0.20" strokeWidth="1" />
      <path d="M550 22 L578 22 L578 50"  fill="none" stroke="#F59E0B" strokeOpacity="0.20" strokeWidth="1" />
      <path d="M50 186 L22 186 L22 158" fill="none" stroke="#F59E0B" strokeOpacity="0.20" strokeWidth="1" />
      <path d="M550 186 L578 186 L578 158" fill="none" stroke="#F59E0B" strokeOpacity="0.20" strokeWidth="1" />
    </svg>
  )
}
