export default function TideThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="td-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#0D9488" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="td-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
        <linearGradient id="td-wave-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0D9488" stopOpacity="0" />
          <stop offset="30%" stopColor="#0D9488" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#0D9488" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
        </linearGradient>
        <filter id="td-blur">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="600" height="208" fill="#040F0F" />
      <rect width="600" height="208" fill="url(#td-glow)" />

      {/* Wave layers */}
      <path d="M0 148 Q75 128 150 148 Q225 168 300 148 Q375 128 450 148 Q525 168 600 148 L600 208 L0 208 Z"
        fill="#0D9488" fillOpacity="0.07" />
      <path d="M0 158 Q80 138 160 158 Q240 178 320 158 Q400 138 480 158 Q560 178 600 162 L600 208 L0 208 Z"
        fill="#0D9488" fillOpacity="0.05" />
      <path d="M0 168 Q90 150 180 168 Q270 186 360 168 Q450 150 540 168 Q570 174 600 170 L600 208 L0 208 Z"
        fill="#0D9488" fillOpacity="0.09" />

      {/* Horizontal grid lines */}
      {[40, 70, 100, 130].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="600" y2={y}
          stroke="#0D9488" strokeOpacity={0.04} strokeWidth="0.5" />
      ))}

      {/* Globe circle */}
      <circle cx="300" cy="98" r="52" fill="none" stroke="#2DD4BF" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="300" cy="98" r="38" fill="none" stroke="#2DD4BF" strokeOpacity="0.10" strokeWidth="0.5" />

      {/* Globe meridians */}
      <ellipse cx="300" cy="98" rx="52" ry="18" fill="none" stroke="#2DD4BF" strokeOpacity="0.12" strokeWidth="0.5" />
      <ellipse cx="300" cy="98" rx="52" ry="36" fill="none" stroke="#2DD4BF" strokeOpacity="0.08" strokeWidth="0.5" />
      <line x1="300" y1="46" x2="300" y2="150" stroke="#2DD4BF" strokeOpacity="0.10" strokeWidth="0.5" />
      <line x1="248" y1="98" x2="352" y2="98" stroke="#2DD4BF" strokeOpacity="0.10" strokeWidth="0.5" />

      {/* Location dots on globe */}
      {[
        [278, 82], [312, 76], [296, 108], [324, 92], [268, 104],
        [310, 116], [284, 68], [336, 102],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="#2DD4BF" fillOpacity="0.55" />
      ))}

      {/* Center wordmark */}
      <text x="300" y="103" textAnchor="middle"
        fontFamily="'Arial', sans-serif" fontSize="22" fontWeight="800"
        letterSpacing="6" fill="url(#td-teal)" filter="url(#td-blur)">
        TIDE
      </text>

      {/* Corner brackets */}
      <path d="M50 22 L22 22 L22 50"  fill="none" stroke="#0D9488" strokeOpacity="0.30" strokeWidth="1" />
      <path d="M550 22 L578 22 L578 50"  fill="none" stroke="#0D9488" strokeOpacity="0.30" strokeWidth="1" />
      <path d="M50 186 L22 186 L22 158" fill="none" stroke="#0D9488" strokeOpacity="0.30" strokeWidth="1" />
      <path d="M550 186 L578 186 L578 158" fill="none" stroke="#0D9488" strokeOpacity="0.30" strokeWidth="1" />

      {/* Tagline */}
      <text x="300" y="192" textAnchor="middle"
        fontFamily="'Arial', sans-serif" fontSize="6" fontWeight="600"
        letterSpacing="5" fill="#2DD4BF" fillOpacity="0.40">
        OCEAN CONSERVATION
      </text>
    </svg>
  )
}
