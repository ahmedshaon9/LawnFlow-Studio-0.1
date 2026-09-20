interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function LogoIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lawnflow Studio Emblem"
    >
      <defs>
        <linearGradient id="lf-logo-grad" x1="10%" y1="90%" x2="90%" y2="10%">
          <stop offset="0%" stopColor="#008EA6" />
          <stop offset="35%" stopColor="#00AEC7" />
          <stop offset="70%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      {/* Outer Polygon Shield with Integrated Bottom Notch */}
      <path
        d="M 36 8.5
           C 40 8.5, 73 14, 76 15
           C 81 16, 85 21, 87 27
           L 88 66
           C 89 72, 85 78, 79 81
           L 50 94
           C 45 96, 40 94, 38 89
           C 36 84, 38 79, 42 75
           L 53 62
           L 33 75
           C 28 78, 22 77, 18 73
           L 12 55
           C 9 49, 11 42, 16 38
           L 31 11
           C 33 9, 35 8.5, 36 8.5 Z"
        fill="url(#lf-logo-grad)"
      />

      {/* Left White Dome with Grass Blade Cutouts */}
      <path
        d="M 45 20.5
           C 35 24, 28 34, 28.5 47
           C 28.5 54, 32 61, 37 65
           C 36 60, 35 55, 36 51
           C 38 54, 39 58, 41 62
           C 40 52, 40 42, 42 33.5
           C 44 42, 45 52, 47 61.5
           C 47 50, 45 33, 44 15.5
           C 44.5 17, 45 19, 45 20.5 Z"
        fill="#FFFFFF"
      />

      {/* Right White Dome with Grass Blade Cutouts */}
      <path
        d="M 53 20.5
           C 53 23, 64 25, 68 28
           C 73 34, 74 44, 73 54
           C 72 59, 71 63, 72 64
           L 73 68
           L 68 65
           C 67 59, 66 52, 67 46
           C 65 51, 63 56, 61 62
           C 60 54, 58 46, 57 39
           C 56 46, 54 54, 52.5 61.5
           C 52.5 50, 52.8 33, 53 20.5 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function Logo({ className = "", iconOnly = false, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
    xl: "h-14"
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-14 h-14"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base sm:text-lg",
    lg: "text-xl sm:text-2xl",
    xl: "text-3xl sm:text-4xl"
  };

  if (iconOnly) {
    return <LogoIcon className={`${iconSizes[size]} ${className}`} />;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <LogoIcon className={`${iconSizes[size]} shrink-0`} />
      <div className="flex flex-col leading-none">
        <span className={`font-sans font-black italic tracking-wide text-white uppercase ${textSizes[size]}`}>
          Lawnflow
        </span>
        <div className="flex items-center gap-1.5 w-full mt-0.5">
          <span className="h-[1.5px] flex-1 bg-white/80 rounded-full" />
          <span className="font-sans font-bold tracking-[0.28em] text-white uppercase text-[8px] sm:text-[9px]">
            Studio
          </span>
          <span className="h-[1.5px] flex-1 bg-white/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}
