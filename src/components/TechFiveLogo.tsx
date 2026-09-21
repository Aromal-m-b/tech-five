import React from 'react';

interface TechFiveLogoProps {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  withGlow?: boolean;
}

export const TechFiveLogo: React.FC<TechFiveLogoProps> = ({
  size = 48,
  className = '',
  showWordmark = false,
  withGlow = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="tech-five-brand-logo">
      <div 
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size }}
      >
        {withGlow && (
          <div 
            className="absolute inset-0 rounded-full blur-md opacity-40 bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 animate-pulse pointer-events-none"
            style={{ transform: 'scale(1.15)' }}
          />
        )}
        
        {/* SVG Pentagon Logo with Nodes and T5 Emblem */}
        <svg 
          viewBox="0 0 500 500" 
          width={size} 
          height={size}
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="t5-pentagon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d5b5" />
              <stop offset="35%" stopColor="#06b6d4" />
              <stop offset="70%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00d5b5" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Pentagon outline with 5 vertices */}
          <polygon
            points="250,55 438,192 366,412 134,412 62,192"
            fill="none"
            stroke="url(#t5-pentagon-grad)"
            strokeWidth="18"
            strokeLinejoin="round"
          />

          {/* 5 Corner Nodes */}
          {/* Top Node */}
          <circle cx="250" cy="55" r="21" fill="#080d18" stroke="#00d5b5" strokeWidth="9" />
          {/* Top Right Node */}
          <circle cx="438" cy="192" r="21" fill="#080d18" stroke="#06b6d4" strokeWidth="9" />
          {/* Bottom Right Node */}
          <circle cx="366" cy="412" r="21" fill="#080d18" stroke="#2563eb" strokeWidth="9" />
          {/* Bottom Left Node */}
          <circle cx="134" cy="412" r="21" fill="#080d18" stroke="#00d5b5" strokeWidth="9" />
          {/* Top Left Node */}
          <circle cx="62" cy="192" r="21" fill="#080d18" stroke="#00e5c7" strokeWidth="9" />

          {/* Center T5 Symbol */}
          <g id="t5-center-typography">
            {/* Capital T */}
            <path
              d="M 155 160 H 345 V 196 H 270 V 338 H 230 V 196 H 155 Z"
              fill="#0ea5e9"
              stroke="#080d18"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Bold 5 numeral */}
            <path
              d="M 248 218 H 333 V 254 H 255 V 286 C 265 273 282 268 302 268 C 335 268 358 288 358 322 C 358 358 328 382 284 382 C 248 382 222 364 200 342 L 228 316 C 242 332 258 344 282 344 C 304 344 318 333 318 321 C 318 308 304 298 282 298 C 265 298 252 305 244 312 L 218 305 L 226 218 Z"
              fill="#3b82f6"
              stroke="#080d18"
              strokeWidth="7"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-tight text-white font-['Space_Grotesk'] text-xl">
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FIVE</span>
            </span>
            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase tracking-wider">
              T5
            </span>
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 mt-1">
            Projects & Solutions
          </span>
        </div>
      )}
    </div>
  );
};
