export default function NexusThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="nx-glow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor="#00FF41" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nx-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#39FF14" />
          <stop offset="100%" stopColor="#00CC33" />
        </linearGradient>
        <filter id="nx-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="600" height="208" fill="#000000" />
      <rect width="600" height="208" fill="url(#nx-glow)" />

      {/* Vertical rain columns */}
      {[40, 80, 118, 155, 195, 235, 275, 325, 365, 405, 445, 483, 522, 560].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="0" x2={x} y2="208" stroke="#00FF41" strokeOpacity={0.025 + (i % 4) * 0.015} strokeWidth="0.5" />
          <rect
            x={x - 1}
            y={(i * 23) % 170}
            width="2"
            height={6 + (i % 4) * 4}
            fill="#00FF41"
            fillOpacity={0.12 + (i % 3) * 0.08}
          />
        </g>
      ))}

      {/* Horizontal scan lines */}
      {[0, 52, 104, 156, 208].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="600" y2={y} stroke="#00FF41" strokeOpacity="0.05" strokeWidth="0.5" />
      ))}

      {/* Center ring */}
      <circle cx="300" cy="104" r="52" fill="#050F05" stroke="#00FF41" strokeOpacity="0.45" strokeWidth="1" />
      <circle cx="300" cy="104" r="44" fill="none" stroke="#00FF41" strokeOpacity="0.12" strokeWidth="0.5" />

      {/* "NX" monogram */}
      <text
        x="300" y="120"
        textAnchor="middle"
        fontFamily="'Courier New', Courier, monospace"
        fontSize="32"
        fontWeight="700"
        letterSpacing="8"
        fill="url(#nx-green)"
        filter="url(#nx-glow-filter)"
      >
        NX
      </text>

      {/* Corner bracket decorations */}
      <path d="M238 62 L218 62 L218 82"  fill="none" stroke="#00FF41" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M362 62 L382 62 L382 82"  fill="none" stroke="#00FF41" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M238 146 L218 146 L218 126" fill="none" stroke="#00FF41" strokeOpacity="0.4" strokeWidth="1" />
      <path d="M362 146 L382 146 L382 126" fill="none" stroke="#00FF41" strokeOpacity="0.4" strokeWidth="1" />

      {/* Wordmark */}
      <text
        x="300" y="193"
        textAnchor="middle"
        fontFamily="'Courier New', monospace"
        fontSize="7"
        letterSpacing="6"
        fill="#00FF41"
        fillOpacity="0.45"
      >
        NEXUS.AI
      </text>
    </svg>
  )
}
