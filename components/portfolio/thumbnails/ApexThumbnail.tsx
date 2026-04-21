export default function ApexThumbnail() {
  return (
    <svg
      viewBox="0 0 600 208"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="ax-glow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ax-blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="ax-runway" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
        <filter id="ax-glow-f">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="600" height="208" fill="#050812" />
      <rect width="600" height="208" fill="url(#ax-glow)" />

      {/* Star field */}
      {[
        [45,18],[120,32],[200,12],[310,28],[420,15],[510,35],[570,20],
        [80,55],[180,48],[280,62],[380,44],[490,58],[30,75],[560,68],
        [150,88],[340,82],[520,90],[90,105],[250,98],[460,112],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1 : 0.6}
          fill="#93C5FD" fillOpacity={0.2 + (i % 3) * 0.1} />
      ))}

      {/* Runway perspective lines converging to horizon */}
      <path d="M300 170 L200 208 L0 208" fill="none" stroke="#1D4ED8" strokeOpacity="0.12" strokeWidth="0.5" />
      <path d="M300 170 L400 208 L600 208" fill="none" stroke="#1D4ED8" strokeOpacity="0.12" strokeWidth="0.5" />
      <path d="M300 170 L160 208" fill="none" stroke="#60A5FA" strokeOpacity="0.07" strokeWidth="0.5" />
      <path d="M300 170 L440 208" fill="none" stroke="#60A5FA" strokeOpacity="0.07" strokeWidth="0.5" />
      <path d="M300 170 L80 208" fill="none" stroke="#1D4ED8" strokeOpacity="0.05" strokeWidth="0.5" />
      <path d="M300 170 L520 208" fill="none" stroke="#1D4ED8" strokeOpacity="0.05" strokeWidth="0.5" />

      {/* Runway center dashes */}
      {[176, 184, 192, 200].map((y, i) => (
        <rect key={i} x="297" y={y} width="6" height="4" rx="0.5"
          fill="#60A5FA" fillOpacity={0.15 + i * 0.04} />
      ))}

      {/* Aircraft silhouette — sleek private jet */}
      {/* Fuselage */}
      <path d="M210 98 Q260 93 300 94 Q340 93 390 98 Q370 101 300 102 Q230 101 210 98Z"
        fill="#0F172A" stroke="#60A5FA" strokeOpacity="0.45" strokeWidth="0.8" />
      {/* Left wing */}
      <path d="M265 98 Q248 118 218 124 Q238 112 265 100Z"
        fill="#0F172A" stroke="#60A5FA" strokeOpacity="0.35" strokeWidth="0.6" />
      {/* Right wing */}
      <path d="M335 98 Q352 118 382 124 Q362 112 335 100Z"
        fill="#0F172A" stroke="#60A5FA" strokeOpacity="0.35" strokeWidth="0.6" />
      {/* Tail */}
      <path d="M375 94 Q388 80 395 82 Q388 92 390 98Z"
        fill="#0F172A" stroke="#60A5FA" strokeOpacity="0.30" strokeWidth="0.6" />
      {/* Cockpit windows */}
      <path d="M222 96 Q232 93 244 94 Q238 97 222 97Z"
        fill="#1D4ED8" fillOpacity="0.5" />

      {/* Engine glow */}
      <circle cx="232" cy="108" r="3" fill="#60A5FA" fillOpacity="0.2" filter="url(#ax-glow-f)" />
      <circle cx="368" cy="108" r="3" fill="#60A5FA" fillOpacity="0.2" filter="url(#ax-glow-f)" />

      {/* Wordmark */}
      <text x="300" y="155" textAnchor="middle"
        fontFamily="'Arial Narrow', Arial, sans-serif" fontSize="20" fontWeight="800"
        letterSpacing="10" fill="url(#ax-blue)" filter="url(#ax-glow-f)">
        APEX
      </text>

      {/* Subtitle */}
      <text x="300" y="192" textAnchor="middle"
        fontFamily="'Arial', sans-serif" fontSize="5.5" fontWeight="600"
        letterSpacing="5" fill="#60A5FA" fillOpacity="0.35">
        PRIVATE AVIATION
      </text>

      {/* Corner brackets */}
      <path d="M50 22 L22 22 L22 50"  fill="none" stroke="#1D4ED8" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M550 22 L578 22 L578 50"  fill="none" stroke="#1D4ED8" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M50 186 L22 186 L22 158" fill="none" stroke="#1D4ED8" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M550 186 L578 186 L578 158" fill="none" stroke="#1D4ED8" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  )
}
