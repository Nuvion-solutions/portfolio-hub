export default function LuminaThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="lu-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lu-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D78E" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#A07830" />
        </linearGradient>
        <linearGradient id="lu-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D78E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect width="600" height="208" fill="#0C0A06" />
      <rect width="600" height="208" fill="url(#lu-glow)" />

      {/* Outer decorative rings */}
      <ellipse cx="300" cy="104" rx="88" ry="88" fill="none" stroke="url(#lu-ring)" strokeWidth="0.75" />
      <ellipse cx="300" cy="104" rx="66" ry="66" fill="none" stroke="#C9A84C" strokeOpacity="0.18" strokeWidth="0.5" />

      {/* Monogram background circle */}
      <circle cx="300" cy="104" r="44" fill="#18120A" stroke="url(#lu-gold)" strokeWidth="1" />

      {/* "LA" monogram */}
      <text
        x="300" y="119"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="26"
        fontWeight="400"
        letterSpacing="5"
        fill="url(#lu-gold)"
      >
        LA
      </text>

      {/* Horizontal accent lines */}
      <line x1="218" y1="104" x2="248" y2="104" stroke="#C9A84C" strokeOpacity="0.35" strokeWidth="0.5" />
      <line x1="352" y1="104" x2="382" y2="104" stroke="#C9A84C" strokeOpacity="0.35" strokeWidth="0.5" />

      {/* Particle dots */}
      <circle cx="110" cy="38"  r="1.5" fill="#C9A84C" fillOpacity="0.55" />
      <circle cx="490" cy="55"  r="1"   fill="#F5D78E" fillOpacity="0.45" />
      <circle cx="72"  cy="155" r="1.5" fill="#C9A84C" fillOpacity="0.4"  />
      <circle cx="530" cy="148" r="1"   fill="#F5D78E" fillOpacity="0.5"  />
      <circle cx="195" cy="24"  r="1"   fill="#C9A84C" fillOpacity="0.35" />
      <circle cx="410" cy="180" r="1.5" fill="#C9A84C" fillOpacity="0.4"  />
      <circle cx="152" cy="172" r="1"   fill="#F5D78E" fillOpacity="0.3"  />
      <circle cx="455" cy="28"  r="1"   fill="#C9A84C" fillOpacity="0.45" />
      <circle cx="348" cy="18"  r="1.5" fill="#F5D78E" fillOpacity="0.35" />
      <circle cx="258" cy="190" r="1"   fill="#C9A84C" fillOpacity="0.3"  />
      <circle cx="540" cy="95"  r="1"   fill="#F5D78E" fillOpacity="0.25" />
      <circle cx="62"  cy="80"  r="1"   fill="#C9A84C" fillOpacity="0.25" />

      {/* Wordmark */}
      <text
        x="300" y="193"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="7.5"
        letterSpacing="5"
        fill="#C9A84C"
        fillOpacity="0.45"
      >
        LUMINA AESTHETICS
      </text>
    </svg>
  )
}
