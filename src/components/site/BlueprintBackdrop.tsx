/**
 * Animated architectural blueprint backdrop for premium dark CTAs.
 * Uses pure SVG patterns + a gold sweep — no canvas, no JS.
 */
export function BlueprintBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Slow-panning fine grid */}
      <svg
        className="absolute -inset-20 w-[calc(100%+10rem)] h-[calc(100%+10rem)] text-gold/15 animate-blueprint-pan"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="bp-fine"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="bp-coarse"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              opacity="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-fine)" />
        <rect width="100%" height="100%" fill="url(#bp-coarse)" />
      </svg>

      {/* Architectural diagonals — static decorative line work */}
      <svg
        className="absolute inset-0 w-full h-full text-gold/20"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="180" cy="120" r="90" />
          <circle cx="180" cy="120" r="140" opacity="0.5" />
          <circle cx="1020" cy="480" r="120" />
          <circle cx="1020" cy="480" r="180" opacity="0.4" />
          <path d="M0 500 L1200 100" />
          <path d="M0 540 L1200 140" opacity="0.5" />
          <path d="M600 0 V600" opacity="0.35" />
        </g>
      </svg>

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, hsl(var(--gold)) 0%, transparent 60%)",
        }}
      />

      {/* Gold sweep beam */}
      <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-gold/15 to-transparent skew-x-12 animate-blueprint-sweep" />

      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-30" />
    </div>
  );
}
