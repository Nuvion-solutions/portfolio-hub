export default function IronCladThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="ic-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <linearGradient id="ic-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        <linearGradient id="ic-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <pattern id="ic-steel" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <line x1="0" y1="24" x2="24" y2="0" stroke="#ffffff" strokeOpacity="0.025" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="600" height="208" fill="url(#ic-bg)" />
      <rect width="600" height="208" fill="url(#ic-steel)" />

      {/* Red left accent bar */}
      <rect x="0" y="0" width="4" height="208" fill="url(#ic-red)" />
      {/* Red top accent bar */}
      <rect x="0" y="0" width="600" height="3" fill="url(#ic-red)" fillOpacity="0.5" />

      {/* Horizontal rules */}
      <line x1="0" y1="28"  x2="600" y2="28"  stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.5" />
      <line x1="0" y1="180" x2="600" y2="180" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="0.5" />

      {/* Shield shape */}
      <path
        d="M300 54 L346 70 L346 116 Q346 138 300 152 Q254 138 254 116 L254 70 Z"
        fill="url(#ic-shield)"
        stroke="url(#ic-red)"
        strokeWidth="1.5"
      />
      {/* Inner shield outline */}
      <path
        d="M300 62 L338 76 L338 114 Q338 133 300 145 Q262 133 262 114 L262 76 Z"
        fill="none"
        stroke="#FF3333"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />

      {/* "IC" inside shield */}
      <text
        x="300" y="120"
        textAnchor="middle"
        fontFamily="Impact, 'Arial Black', Arial, sans-serif"
        fontSize="34"
        fontWeight="900"
        letterSpacing="3"
        fill="url(#ic-red)"
      >
        IC
      </text>

      {/* Rivet / bolt corners */}
      {([[240, 68], [360, 68], [240, 140], [360, 140]] as [number, number][]).map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4"   fill="#222222" stroke="#444" strokeWidth="0.5" />
          <circle cx={x} cy={y} r="1.5" fill="#555" />
        </g>
      ))}

      {/* Wordmark */}
      <text
        x="300" y="194"
        textAnchor="middle"
        fontFamily="Impact, Arial, sans-serif"
        fontSize="7.5"
        letterSpacing="4"
        fill="#CC0000"
        fillOpacity="0.55"
      >
        IRONCLAD HOME SERVICES
      </text>
    </svg>
  )
}
