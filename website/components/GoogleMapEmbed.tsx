"use client";

import { GBP_MAPS_EMBED_URL, GBP_MAPS_URL } from "@/lib/site";

type GoogleMapEmbedProps = {
  title?: string;
  className?: string;
  height?: string;
};

export default function GoogleMapEmbed({
  title = "",
  className = "",
  height = "280px",
}: GoogleMapEmbedProps) {
  const heightCss = typeof height === "string" && /^\d+$/.test(height) ? `${height}px` : height;

  return (
    <div className={className}>
      {title && (
        <h2 className="font-display text-xl font-semibold text-foreground mb-4">{title}</h2>
      )}
      <div className="rounded-xl overflow-hidden border border-black/10 shadow-md relative z-0">
        <iframe
          src={GBP_MAPS_EMBED_URL}
          width="100%"
          height={heightCss}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="New Decorating on Google Maps"
          className="w-full"
        />
        <div className="flex justify-end px-3 py-2 bg-muted/20 border-t border-black/5">
          <a
            href={GBP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent font-medium hover:text-accent-soft transition-colors"
            aria-label="View New Decorating on Google Maps (opens in new tab)"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
