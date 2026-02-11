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

          {/* Side image with border, no paint mask */}
          {image && (
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-2xl shadow-black/30">
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
          )}
        </div>
      </div>
      <BrushStroke />
    </section>
  );
}
