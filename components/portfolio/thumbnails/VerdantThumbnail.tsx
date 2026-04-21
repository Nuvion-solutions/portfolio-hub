export default function VerdantThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="vd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B4332" />
          <stop offset="100%" stopColor="#0D2B20" />
        </linearGradient>
        <linearGradient id="vd-cream" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="100%" stopColor="#EDD9A3" />
        </linearGradient>
        <radialGradient id="vd-center" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#2D6A4F" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1B4332" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="600" height="208" fill="url(#vd-bg)" />
      <rect width="600" height="208" fill="url(#vd-center)" />

      {/* Subtle diagonal texture */}
      {[-6, -3, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30].map((i) => (
        <line
          key={i}
          x1={i * 32 - 50} y1="0"
          x2={i * 32 + 10} y2="208"
          stroke="#2D6A4F"
          strokeOpacity="0.25"
          strokeWidth="0.5"
        />
      ))}

      {/* Left botanical leaf cluster */}
      <path d="M148 76 Q118 56 98 88  Q122 98  148 76" fill="#2D6A4F" fillOpacity="0.7" />
      <path d="M132 108 Q100 96 96 128 Q120 124 132 108" fill="#2D6A4F" fillOpacity="0.5" />
      <path d="M155 92 Q128 80 118 108 Q138 108 155 92" fill="#40916C" fillOpacity="0.4" />
      <line x1="148" y1="76" x2="96" y2="132" stroke="#40916C" strokeOpacity="0.45" strokeWidth="1" />

      {/* Right botanical leaf cluster (mirrored) */}
      <path d="M452 76 Q482 56 502 88  Q478 98  452 76" fill="#2D6A4F" fillOpacity="0.7" />
      <path d="M468 108 Q500 96 504 128 Q480 124 468 108" fill="#2D6A4F" fillOpacity="0.5" />
      <path d="M445 92 Q472 80 482 108 Q462 108 445 92" fill="#40916C" fillOpacity="0.4" />
      <line x1="452" y1="76" x2="504" y2="132" stroke="#40916C" strokeOpacity="0.45" strokeWidth="1" />

      {/* Center circle */}
      <circle cx="300" cy="97" r="54" fill="#0D2B20" stroke="#FFF8E7" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="300" cy="97" r="46" fill="none" stroke="#FFF8E7" strokeOpacity="0.07" strokeWidth="0.5" />

      {/* "V" — elegant serif */}
      <text
        x="300" y="130"
        textAnchor="middle"
        fontFamily="Georgia, 'Palatino Linotype', Palatino, serif"
        fontSize="56"
        fontWeight="300"
        fill="url(#vd-cream)"
      >
        V
      </text>

      {/* Horizontal accent flanking lines */}
      <line x1="192" y1="158" x2="268" y2="158" stroke="#FFF8E7" strokeOpacity="0.18" strokeWidth="0.5" />
      <line x1="332" y1="158" x2="408" y2="158" stroke="#FFF8E7" strokeOpacity="0.18" strokeWidth="0.5" />
      <circle cx="300" cy="158" r="1.5" fill="#FFF8E7" fillOpacity="0.25" />

      {/* Wordmark */}
      <text
        x="300" y="187"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="7.5"
        letterSpacing="6"
        fill="#FFF8E7"
        fillOpacity="0.45"
      >
        VERDANT NYC
      </text>
    </svg>
  )
}
