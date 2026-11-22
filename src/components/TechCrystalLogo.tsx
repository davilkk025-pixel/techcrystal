interface TechCrystalLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function TechCrystalLogo({ size = 'md', showTagline = true, className = '' }: TechCrystalLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Crystal Diamond Hexagon Logo */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} shrink-0`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_10px_rgba(57,255,20,0.6)]"
        >
          {/* Hexagonal crystal outer frame */}
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            stroke="#39FF14"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />
          {/* Inner facet lines */}
          <path
            d="M20 2L20 38M4 11L36 29M4 29L36 11"
            stroke="#39FF14"
            strokeWidth="1.2"
            strokeOpacity="0.75"
          />
          {/* Center glowing core diamond */}
          <polygon
            points="20,13 27,20 20,27 13,20"
            fill="#39FF14"
            fillOpacity="0.85"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-bold tracking-tight text-white ${textSizes[size]} leading-none`}>
          Tech<span className="text-[#39FF14]">Crystal</span>
        </span>
        {showTagline && (
          <span className="text-[11px] text-[#A7B0AC] tracking-wider mt-1 font-medium">
            Smart Tech. Better Life.
          </span>
        )}
      </div>
    </div>
  );
}
