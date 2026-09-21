// icons.js
export const logoSVGs = {
  blueprint: {
    dark: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bpGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#075985"/>
          <stop offset="100%" stop-color="#0c2d48"/>
        </linearGradient>
        <pattern id="bpGridDark" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#bpGradDark)"/>
      <rect width="512" height="512" rx="120" fill="url(#bpGridDark)"/>
      <rect x="56" y="56" width="400" height="400" rx="32" fill="none" stroke="#38bdf8" stroke-width="6" stroke-dasharray="16 10" stroke-opacity="0.6"/>
      <g transform="translate(256, 175)">
        <circle cx="0" cy="0" r="46" fill="none" stroke="#facc15" stroke-width="16" stroke-dasharray="14 10"/>
        <circle cx="0" cy="0" r="22" fill="#facc15"/>
      </g>
      <line x1="160" y1="260" x2="160" y2="380" stroke="#0284c7" stroke-width="8"/>
      <line x1="352" y1="260" x2="352" y2="380" stroke="#0284c7" stroke-width="8"/>
      <polygon points="256,215 384,275 256,335 128,275" fill="#0369a1" fill-opacity="0.35" stroke="#38bdf8" stroke-width="10" stroke-linejoin="round"/>
      <polygon points="128,275 256,335 256,415 128,355" fill="#075985" fill-opacity="0.5" stroke="#38bdf8" stroke-width="10" stroke-linejoin="round"/>
      <polygon points="256,335 384,275 384,355 256,415" fill="#0c4a6e" fill-opacity="0.5" stroke="#38bdf8" stroke-width="10" stroke-linejoin="round"/>
      <circle cx="256" cy="215" r="7" fill="#facc15"/>
      <circle cx="384" cy="275" r="7" fill="#facc15"/>
      <circle cx="128" cy="275" r="7" fill="#facc15"/>
      <circle cx="256" cy="415" r="7" fill="#facc15"/>
    </svg>`,
    light: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bpGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f0f9ff"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
        <pattern id="bpGridLight" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#0284c7" stroke-width="1" stroke-opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#bpGradLight)" stroke="#bae6fd" stroke-width="12"/>
      <rect width="512" height="512" rx="120" fill="url(#bpGridLight)"/>
      <rect x="56" y="56" width="400" height="400" rx="32" fill="none" stroke="#0284c7" stroke-width="6" stroke-dasharray="16 10" stroke-opacity="0.7"/>
      <g transform="translate(256, 175)">
        <circle cx="0" cy="0" r="46" fill="none" stroke="#d97706" stroke-width="16" stroke-dasharray="14 10"/>
        <circle cx="0" cy="0" r="22" fill="#d97706"/>
      </g>
      <line x1="160" y1="260" x2="160" y2="380" stroke="#93c5fd" stroke-width="8"/>
      <line x1="352" y1="260" x2="352" y2="380" stroke="#93c5fd" stroke-width="8"/>
      <polygon points="256,215 384,275 256,335 128,275" fill="#e0f2fe" fill-opacity="0.7" stroke="#0284c7" stroke-width="10" stroke-linejoin="round"/>
      <polygon points="128,275 256,335 256,415 128,355" fill="#bae6fd" fill-opacity="0.6" stroke="#0284c7" stroke-width="10" stroke-linejoin="round"/>
      <polygon points="256,335 384,275 384,355 256,415" fill="#7dd3fc" fill-opacity="0.6" stroke="#0284c7" stroke-width="10" stroke-linejoin="round"/>
      <circle cx="256" cy="215" r="7" fill="#d97706"/>
      <circle cx="384" cy="275" r="7" fill="#d97706"/>
      <circle cx="128" cy="275" r="7" fill="#d97706"/>
      <circle cx="256" cy="415" r="7" fill="#d97706"/>
    </svg>`
  },
  shelves: {
    dark: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="120" fill="#0f172a"/>
      <rect x="76" y="76" width="360" height="360" rx="28" fill="none" stroke="#334155" stroke-width="20"/>
      <line x1="76" y1="264" x2="436" y2="264" stroke="#475569" stroke-width="20" stroke-linecap="round"/>
      <line x1="76" y1="358" x2="436" y2="358" stroke="#475569" stroke-width="20" stroke-linecap="round"/>
      <rect x="130" y="296" width="46" height="62" rx="8" fill="#38bdf8"/>
      <rect x="200" y="306" width="70" height="52" rx="8" fill="#64748b"/>
      <rect x="294" y="286" width="98" height="72" rx="10" fill="#94a3b8"/>
      <circle cx="340" cy="220" r="22" fill="#10b981"/>
    </svg>`,
    light: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="120" fill="#ffffff" stroke="#e2e8f0" stroke-width="20"/>
      <rect x="76" y="76" width="360" height="360" rx="28" fill="none" stroke="#94a3b8" stroke-width="20"/>
      <line x1="76" y1="264" x2="436" y2="264" stroke="#64748b" stroke-width="20" stroke-linecap="round"/>
      <line x1="76" y1="358" x2="436" y2="358" stroke="#64748b" stroke-width="20" stroke-linecap="round"/>
      <rect x="130" y="296" width="46" height="62" rx="8" fill="#0284c7"/>
      <rect x="200" y="306" width="70" height="52" rx="8" fill="#94a3b8"/>
      <rect x="294" y="286" width="98" height="72" rx="10" fill="#64748b"/>
      <circle cx="340" cy="220" r="22" fill="#059669"/>
    </svg>`
  }
};