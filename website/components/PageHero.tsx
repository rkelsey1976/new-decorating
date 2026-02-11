import Image from "next/image";
import Link from "next/link";
import BrushStroke from "@/components/BrushStroke";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  /** Hero title */
  title?: React.ReactNode;
  /** Hero subtitle */
  subtitle?: React.ReactNode;
  /** Small label above the title (e.g. "Professional Service") */
  categoryLabel?: string;
  /** Image displayed to the right of the text */
  image?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Breadcrumb trail - array of { label, href? }. Last item is the current page (no link). */
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  categoryLabel,
  image,
  imageAlt = "",
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative bg-accent" aria-label="Hero">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs - sit above the grid, full width */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="pt-10 sm:pt-14 pb-2">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="text-white/30" aria-hidden="true">/</span>
                    )}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-white/90" : ""}>
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className={`${image ? "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" : ""} ${breadcrumbs ? "pt-4 pb-20 sm:pb-28" : "py-14 sm:py-20 pb-20 sm:pb-28"}`}>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            {categoryLabel && (
              <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-3">
                {categoryLabel}
              </p>
            )}

            {title && (
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </div>

          {/* Side image with paint-edge mask on all sides */}
          {image && (
            <div className="hidden lg:block">
              <svg width="0" height="0" aria-hidden="true" className="absolute">
                <defs>
                  <mask id="hero-paint-mask" maskContentUnits="objectBoundingBox">
                    <path
                      fill="white"
                      d="M 0,0.06 Q 0.08,0 0.2,0.03 Q 0.4,0 0.6,0.02 Q 0.8,0 1,0.05 L 1,0.2 Q 1.02,0.35 1,0.5 L 1,0.75 Q 0.98,0.9 0.92,0.98 Q 0.75,1 0.55,1 Q 0.35,1 0.15,0.98 Q 0,1 0,0.92 L 0,0.7 Q 0,0.5 0,0.3 L 0,0.06 Z"
                    />
                  </mask>
                </defs>
              </svg>
              <div className="relative aspect-[4/3] overflow-visible shadow-2xl shadow-black/30">
                {/* Colored border layer – same paint mask, scaled up so edge shows */}
                <div
                  className="absolute inset-0 bg-white"
                  style={{
                    transform: "scale(1.04)",
                    maskImage: "url(#hero-paint-mask)",
                    WebkitMaskImage: "url(#hero-paint-mask)",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
                {/* Image with paint-edge mask */}
                <div
                  className="absolute inset-0"
                  style={{
                    maskImage: "url(#hero-paint-mask)",
                    WebkitMaskImage: "url(#hero-paint-mask)",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                >
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BrushStroke />
    </section>
  );
}
