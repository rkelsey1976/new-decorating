/**
 * Paint brushstroke edge for use at the top or bottom of a section.
 * position="top" = wavy edge at top (flipped SVG); position="bottom" = wavy edge at bottom.
 * Fill colour should match the adjacent section.
 */
export default function BrushStroke({
  fill = "var(--background)",
  position = "bottom",
  className = "",
}: {
  fill?: string;
  position?: "top" | "bottom";
  className?: string;
}) {
  const isTop = position === "top";
  return (
    <div
      className={`absolute left-0 right-0 z-20 ${isTop ? "top-0" : "bottom-0"} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`block w-full h-[30px] sm:h-[45px] lg:h-[60px] ${isTop ? "scale-y-[-1]" : ""}`}
        fill={fill}
      >
        <path d="M0,60 L0,25 C60,28 120,8 200,12 C280,16 320,35 420,30 C520,25 560,5 660,8 C760,11 800,32 900,28 C1000,24 1060,6 1140,10 C1220,14 1300,30 1380,26 L1440,22 L1440,60 Z" />
      </svg>
    </div>
  );
}
