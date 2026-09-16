// Hero illustration for a product page: an AI core with orbiting admissions
// elements (programmes, documents, analytics, security) and two floating
// cards showing a student question and a database-computed answer.
// Pure SVG in brand colours; motion is CSS-only and respects reduced-motion.
function ProductHeroArt({ name = "FUTURA" }) {
  return (
    <svg
      className="pr-art"
      viewBox="0 0 640 580"
      role="img"
      aria-label={`${name}, AI assistant connecting students, documents, applicant data and security`}
    >
      <defs>
        <linearGradient id="prArtA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7050f4" />
          <stop offset="1" stopColor="#4d98d1" />
        </linearGradient>
        <linearGradient id="prArtB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#5b3fe0" />
        </linearGradient>
        <linearGradient id="prArtLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#4d98d1" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="prArtGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#8b5cf6" stopOpacity="0.12" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <filter id="prArtShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#1c1633" floodOpacity="0.16" />
        </filter>
        <filter id="prArtCoreShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#7050f4" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="320" cy="300" rx="290" ry="260" fill="url(#prArtGlow)" />

      {/* Orbits */}
      <g className="pr-art-orbit" style={{ transformOrigin: "320px 300px" }}>
        <circle cx="320" cy="300" r="214" fill="none" stroke="#7050f4" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="6 10" />
        <circle cx="320" cy="300" r="150" fill="none" stroke="#7050f4" strokeOpacity="0.28" strokeWidth="1.5" />
        <circle cx="320" cy="86" r="5" fill="#8b5cf6" />
        <circle cx="534" cy="300" r="4" fill="#4d98d1" />
        <circle cx="170" cy="300" r="4" fill="#8b5cf6" />
        <circle cx="426" cy="486" r="3.5" fill="#4d98d1" />
      </g>

      {/* Connectors core → satellites (animated flow) */}
      <g className="pr-art-flow" fill="none" stroke="url(#prArtLine)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 10">
        <path d="M320 222 L320 150" />
        <path d="M398 300 L470 300" />
        <path d="M320 378 L320 450" />
        <path d="M242 300 L170 300" />
      </g>

      {/* Core */}
      <g filter="url(#prArtCoreShadow)">
        <circle cx="320" cy="300" r="78" fill="url(#prArtB)" />
        <circle cx="320" cy="300" r="78" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      </g>
      <circle cx="320" cy="300" r="96" fill="none" stroke="#8b5cf6" strokeOpacity="0.25" strokeWidth="10" className="pr-art-pulse" style={{ transformOrigin: "320px 300px" }} />
      {/* Neural mark inside the core */}
      <g stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" fill="none">
        <line x1="320" y1="300" x2="292" y2="278" />
        <line x1="320" y1="300" x2="348" y2="278" />
        <line x1="320" y1="300" x2="292" y2="322" />
        <line x1="320" y1="300" x2="348" y2="322" />
        <line x1="292" y1="278" x2="348" y2="278" />
        <line x1="292" y1="322" x2="348" y2="322" />
        <line x1="292" y1="278" x2="292" y2="322" />
        <line x1="348" y1="278" x2="348" y2="322" />
      </g>
      <g fill="#ffffff">
        <circle cx="320" cy="300" r="7" />
        <circle cx="292" cy="278" r="4.5" />
        <circle cx="348" cy="278" r="4.5" />
        <circle cx="292" cy="322" r="4.5" />
        <circle cx="348" cy="322" r="4.5" />
      </g>
      <text x="320" y="356" textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff" letterSpacing="2">
        {name}
      </text>

      {/* Satellite: programmes (graduation cap) - top */}
      <g className="pr-art-float" style={{ "--d": "0s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="286" y="82" width="68" height="68" rx="18" fill="#ffffff" />
        </g>
        <g transform="translate(320 116)">
          <path d="M-20 -6 L0 -15 L20 -6 L0 3 Z" fill="url(#prArtA)" />
          <path d="M-12 -2 L-12 8 Q0 15 12 8 L12 -2" fill="none" stroke="url(#prArtA)" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="-6" x2="20" y2="8" stroke="#4d98d1" strokeWidth="3" strokeLinecap="round" />
        </g>
        <text x="320" y="170" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#4b5563">Courses</text>
      </g>

      {/* Satellite: documents - right */}
      <g className="pr-art-float" style={{ "--d": "0.8s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="474" y="266" width="68" height="68" rx="18" fill="#ffffff" />
        </g>
        <g transform="translate(508 300)" fill="none" stroke="url(#prArtA)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-12 -16 H6 L14 -8 V16 H-12 Z" />
          <path d="M6 -16 V-8 H14" />
          <line x1="-5" y1="0" x2="7" y2="0" />
          <line x1="-5" y1="7" x2="7" y2="7" />
        </g>
        <text x="508" y="354" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#4b5563">Documents</text>
      </g>

      {/* Satellite: analytics - bottom */}
      <g className="pr-art-float" style={{ "--d": "1.6s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="286" y="450" width="68" height="68" rx="18" fill="#ffffff" />
        </g>
        <g transform="translate(320 484)">
          <rect x="-16" y="0" width="8" height="14" rx="2" fill="#4d98d1" />
          <rect x="-4" y="-10" width="8" height="24" rx="2" fill="url(#prArtA)" />
          <rect x="8" y="-4" width="8" height="18" rx="2" fill="#8b5cf6" />
        </g>
        <text x="320" y="538" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#4b5563">Student numbers</text>
      </g>

      {/* Satellite: security - left */}
      <g className="pr-art-float" style={{ "--d": "2.4s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="98" y="266" width="68" height="68" rx="18" fill="#ffffff" />
        </g>
        <g transform="translate(132 300)" fill="none" stroke="url(#prArtA)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 -16 L14 -10 V2 C14 10 7 15 0 18 C-7 15 -14 10 -14 2 V-10 Z" />
          <path d="M-5 1 L-1 5 L6 -3" />
        </g>
        <text x="132" y="354" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#4b5563">Secure access</text>
      </g>

      {/* Floating card: student question - top-left */}
      <g className="pr-art-float" style={{ "--d": "0.4s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="22" y="40" width="238" height="78" rx="18" fill="#ffffff" />
        </g>
        <circle cx="52" cy="66" r="14" fill="url(#prArtA)" />
        <circle cx="52" cy="62" r="5" fill="#ffffff" />
        <path d="M43 76 Q52 68 61 76" fill="#ffffff" />
        <text x="76" y="62" fontSize="11" fontWeight="700" fill="#6d4df2" letterSpacing="1">STUDENT</text>
        <text x="76" y="80" fontSize="13" fontWeight="600" fill="#111827">Which courses accept</text>
        <text x="76" y="98" fontSize="13" fontWeight="600" fill="#111827">a 2:1 for September?</text>
      </g>

      {/* Floating card: computed answer - bottom-right */}
      <g className="pr-art-float" style={{ "--d": "1.2s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="386" y="410" width="234" height="118" rx="18" fill="#ffffff" />
        </g>
        <circle cx="414" cy="436" r="12" fill="url(#prArtB)" />
        <circle cx="414" cy="436" r="3.5" fill="#ffffff" />
        <text x="434" y="432" fontSize="11" fontWeight="700" fill="#6d4df2" letterSpacing="1">ADMIN</text>
        <text x="434" y="447" fontSize="12" fontWeight="600" fill="#111827">International applicants</text>
        <rect x="404" y="462" width="200" height="8" rx="4" fill="#ece7ff" />
        <rect x="404" y="462" width="140" height="8" rx="4" fill="url(#prArtA)" />
        <text x="404" y="486" fontSize="11" fontWeight="600" fill="#4b5563">Business &amp; Management</text>
        <text x="604" y="486" fontSize="11" fontWeight="800" fill="#111827" textAnchor="end">63%</text>
        <rect x="404" y="494" width="200" height="8" rx="4" fill="#ece7ff" />
        <rect x="404" y="494" width="92" height="8" rx="4" fill="#4d98d1" />
        <text x="404" y="518" fontSize="11" fontWeight="600" fill="#4b5563">Engineering</text>
        <text x="604" y="518" fontSize="11" fontWeight="800" fill="#111827" textAnchor="end">41%</text>
      </g>

      {/* Computed-in-SQL badge */}
      <g className="pr-art-float" style={{ "--d": "2s" }}>
        <g filter="url(#prArtShadow)">
          <rect x="446" y="150" width="150" height="34" rx="17" fill="#111827" />
        </g>
        <circle cx="466" cy="167" r="5" fill="#22c55e" />
        <text x="480" y="171" fontSize="12" fontWeight="700" fill="#ffffff">From your records</text>
      </g>

      {/* Sparkles */}
      <g fill="#8b5cf6" className="pr-art-sparkle">
        <path d="M84 200 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z" />
        <path d="M560 84 l2.5 6.5 6.5 2.5 -6.5 2.5 -2.5 6.5 -2.5 -6.5 -6.5 -2.5 6.5 -2.5 z" fill="#4d98d1" />
        <path d="M110 470 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
        <path d="M596 380 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" fill="#4d98d1" />
      </g>
    </svg>
  );
}

export default ProductHeroArt;
