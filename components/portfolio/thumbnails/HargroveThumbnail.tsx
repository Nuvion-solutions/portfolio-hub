export default function HargroveThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="ha-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2F2F5" />
          <stop offset="100%" stopColor="#E5E5EC" />
        </linearGradient>
        <linearGradient id="ha-navy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B2F5E" />
          <stop offset="100%" stopColor="#0F1E3D" />
        </linearGradient>
      </defs>

      <rect width="600" height="208" fill="url(#ha-bg)" />

      {/* Subtle vertical grid */}
      {[55, 110, 165, 220, 275, 330, 385, 440, 495, 550].map((x, i) => (
        <line key={i} x1={x} y1="0" x2={x} y2="208" stroke="#1B2F5E" strokeOpacity="0.04" strokeWidth="0.5" />
      ))}

      {/* Navy accent bar top */}
      <rect x="0" y="0" width="600" height="4" fill="url(#ha-navy)" />
      {/* Navy accent bar bottom */}
      <rect x="0" y="204" width="600" height="4" fill="url(#ha-navy)" fillOpacity="0.4" />

      {/* Medallion */}
      <circle cx="300" cy="96" r="54" fill="#FFFFFF" stroke="#1B2F5E" strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="300" cy="96" r="47" fill="none" stroke="#1B2F5E" strokeOpacity="0.07" strokeWidth="0.5" />

      {/* Scales of justice */}
      {/* Center post */}
      <line x1="300" y1="66" x2="300" y2="112" stroke="#1B2F5E" strokeOpacity="0.65" strokeWidth="1.5" />
      {/* Top cap */}
      <circle cx="300" cy="66" r="2.5" fill="#1B2F5E" fillOpacity="0.65" />
      {/* Horizontal beam */}
      <line x1="270" y1="76" x2="330" y2="76" stroke="#1B2F5E" strokeOpacity="0.65" strokeWidth="1.5" />
      {/* Left chain */}
      <line x1="274" y1="76" x2="268" y2="90" stroke="#1B2F5E" strokeOpacity="0.45" strokeWidth="1" />
      <line x1="282" y1="76" x2="288" y2="90" stroke="#1B2F5E" strokeOpacity="0.45" strokeWidth="1" />
      {/* Left pan */}
      <path d="M266 90 Q278 97 290 90" fill="none" stroke="#1B2F5E" strokeOpacity="0.55" strokeWidth="1" />
      {/* Right chain */}
      <line x1="326" y1="76" x2="320" y2="90" stroke="#1B2F5E" strokeOpacity="0.45" strokeWidth="1" />
      <line x1="318" y1="76" x2="312" y2="90" stroke="#1B2F5E" strokeOpacity="0.45" strokeWidth="1" />
      {/* Right pan */}
      <path d="M310 90 Q322 97 334 90" fill="none" stroke="#1B2F5E" strokeOpacity="0.55" strokeWidth="1" />
      {/* Base */}
      <line x1="292" y1="112" x2="308" y2="112" stroke="#1B2F5E" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* "H & A" */}
      <text
        x="300" y="130"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="3"
        fill="#1B2F5E"
        fillOpacity="0.75"
      >
        H &amp; A
      </text>

      {/* Corner flourishes */}
      <path d="M38 20 L58 20 L58 40"  fill="none" stroke="#1B2F5E" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M562 20 L542 20 L542 40" fill="none" stroke="#1B2F5E" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M38 188 L58 188 L58 168" fill="none" stroke="#1B2F5E" strokeOpacity="0.18" strokeWidth="1" />
      <path d="M562 188 L542 188 L542 168" fill="none" stroke="#1B2F5E" strokeOpacity="0.18" strokeWidth="1" />

      {/* Wordmark */}
      <text
        x="300" y="174"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="7.5"
        letterSpacing="4"
        fill="#1B2F5E"
        fillOpacity="0.45"
      >
        HARGROVE &amp; ASSOCIATES
      </text>
    </svg>
  )
}
