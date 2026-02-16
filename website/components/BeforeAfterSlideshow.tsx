"use client";

import BeforeAfterImage from "@/components/BeforeAfterImage";
import type { BeforeAfterProject } from "@/lib/before-after";

export type BeforeAfterSlideshowProps = {
  /** One or more before/after projects to show */
  projects: BeforeAfterProject[];
  /** Optional small label above the title (e.g. "Before & After") */
  sectionLabel?: string;
  /** Optional main section heading */
  sectionTitle?: string;
  /** Optional section description below the title */
  sectionDescription?: string;
  /** Optional wrapper class name */
  className?: string;
  /** Show "Before" / "After" labels on main panels (default: true) */
  showLabels?: boolean;
  /** Show the grid of extra images below main row (default: true) */
  showGrid?: boolean;
};

const defaultMainBeforeAlt = "Before – project state before work";
const defaultMainAfterAlt = "After – project state after work";
const defaultGridBeforeAlt = "Before – additional view";
const defaultGridAfterAlt = "After – additional view";

export default function BeforeAfterSlideshow({
  projects,
  sectionLabel,
  sectionTitle,
  sectionDescription,
  className = "",
  showLabels = true,
  showGrid = true,
}: BeforeAfterSlideshowProps) {
  if (!projects.length) return null;

  const hasSectionHeader = sectionLabel ?? sectionTitle ?? sectionDescription;

  return (
    <section className={className}>
      {hasSectionHeader && (
        <div className="text-center">
          {sectionLabel && (
            <p className="text-accent text-sm font-medium uppercase tracking-[0.2em]">
              {sectionLabel}
            </p>
          )}
          {sectionTitle && (
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2 tracking-tight">
              {sectionTitle}
            </h2>
          )}
          {sectionDescription && (
            <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">
              {sectionDescription}
            </p>
          )}
        </div>
      )}

      {projects.map((project) => (
        <div
          key={project.id}
          className={`rounded-2xl border border-black/8 bg-white overflow-hidden shadow-lg ${projects.length > 1 ? "mt-10" : "mt-10"}`}
        >
          {/* Optional per-project title/description (when multiple projects, or no section header) */}
          {(project.title ?? project.description) && (projects.length > 1 || !hasSectionHeader) && (
            <div className="px-4 pt-4 pb-2 text-center sm:px-6">
              {project.title && (
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {project.title}
                  {project.location && (
                    <span className="text-muted font-normal">, {project.location}</span>
                  )}
                </h3>
              )}
              {project.description && (
                <p className="mt-1 text-muted text-sm">{project.description}</p>
              )}
            </div>
          )}

          {/* Main row: Before | After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-black/8">
            <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[320px] bg-muted/20">
              {showLabels && (
                <span className="absolute top-3 left-3 z-10 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow">
                  Before
                </span>
              )}
              <BeforeAfterImage
                src={project.beforeMain}
                alt={project.beforeMainAlt ?? defaultMainBeforeAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[320px] bg-muted/20">
              {showLabels && (
                <span className="absolute top-3 left-3 z-10 rounded-md bg-accent/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow">
                  After
                </span>
              )}
              <BeforeAfterImage
                src={project.afterMain}
                alt={project.afterMainAlt ?? defaultMainAfterAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Grid: extra before + after */}
          {showGrid && (project.beforeGrid.length > 0 || project.afterGrid.length > 0) && (
            <div className="grid grid-cols-2 gap-px bg-black/8 sm:min-h-[200px]">
              {project.beforeGrid[0] && (
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[180px] bg-muted/20">
                  <BeforeAfterImage
                    src={project.beforeGrid[0]}
                    alt={project.beforeGridAlt?.[0] ?? defaultGridBeforeAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              )}
              {project.afterGrid[0] && (
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[180px] bg-muted/20">
                  <BeforeAfterImage
                    src={project.afterGrid[0]}
                    alt={project.afterGridAlt?.[0] ?? defaultGridAfterAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
