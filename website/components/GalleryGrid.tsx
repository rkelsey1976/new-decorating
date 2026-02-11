"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const filtered =
    active === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-3 mt-10" role="tablist" aria-label="Filter gallery by category">
        <button
          role="tab"
          aria-selected={active === "All"}
          onClick={() => setActive("All")}
          className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
            active === "All"
              ? "bg-accent text-white shadow-md"
              : "bg-white border border-black/8 text-foreground hover:border-accent/30 hover:text-accent"
          }`}
        >
          All ({GALLERY_IMAGES.length})
        </button>
        {GALLERY_CATEGORIES.map((cat) => {
          const count = GALLERY_IMAGES.filter((img) => img.category === cat).length;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-white border border-black/8 text-foreground hover:border-accent/30 hover:text-accent"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Image grid */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel">
        {filtered.map((img) => (
          <article
            key={img.filename}
            className="rounded-2xl border border-black/8 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] relative bg-muted/20">
              <Image
                src={`/gallery/${img.filename}`}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold ${
                    img.category === "Interior"
                      ? "bg-accent/10 text-accent"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {img.category}
                </span>
              </div>
              <p className="text-foreground text-sm font-medium leading-snug">{img.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
