export default function VeloceThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="vl-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#CC0000" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vl-red" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF1111" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        <filter id="vl-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="600" height="208" fill="#080808" />
      <rect width="600" height="208" fill="url(#vl-glow)" />

      {/* Speed lines — horizontal streaks */}
      {[18, 38, 58, 72, 88, 104, 120, 136, 152, 170, 190].map((y, i) => (
        <line
          key={i}
          x1="0"
          y1={y}
          x2={120 + (i % 5) * 30}
          y2={y}
          stroke="#CC0000"
          strokeOpacity={0.06 + (i % 3) * 0.03}
          strokeWidth={i % 4 === 0 ? 1 : 0.5}
        />
      ))}
      {[18, 38, 58, 72, 88, 104, 120, 136, 152, 170, 190].map((y, i) => (
        <line
          key={`r${i}`}
          x1="600"
          y1={y}
          x2={480 - (i % 5) * 30}
          y2={y}
          stroke="#CC0000"
          strokeOpacity={0.06 + (i % 3) * 0.03}
          strokeWidth={i % 4 === 0 ? 1 : 0.5}
        />
      ))}

      {/* Center emblem — diamond shape */}
      <polygon
        points="300,62 338,104 300,146 262,104"
        fill="#100000"
        stroke="#CC0000"
        strokeOpacity="0.7"
        strokeWidth="1"
      />
      <polygon
        points="300,72 328,104 300,136 272,104"
        fill="none"
        stroke="#CC0000"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />

      {/* "V" monogram */}
      <text
        x="300"
        y="116"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="2"
        fill="url(#vl-red)"
        filter="url(#vl-glow-filter)"
      >
        V
      </text>

      {/* Corner accent lines */}
      <path d="M60 20 L20 20 L20 55"  fill="none" stroke="#CC0000" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M540 20 L580 20 L580 55"  fill="none" stroke="#CC0000" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M60 188 L20 188 L20 153" fill="none" stroke="#CC0000" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M540 188 L580 188 L580 153" fill="none" stroke="#CC0000" strokeOpacity="0.35" strokeWidth="1" />

      {/* Wordmark */}
      <text
        x="300"
        y="192"
        textAnchor="middle"
        fontFamily="'Arial Narrow', Arial, sans-serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="8"
        fill="#CC0000"
        fillOpacity="0.55"
      >
        VELOCE
      </text>
    </svg>
  )
}
