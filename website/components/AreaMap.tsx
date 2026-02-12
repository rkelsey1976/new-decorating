"use client";

import dynamic from "next/dynamic";
import { MAP_CENTER, SERVICE_AREA_NAME } from "@/lib/area";

const OSM_VIEW_URL = `https://www.openstreetmap.org/?mlat=${MAP_CENTER.lat}&mlon=${MAP_CENTER.lng}&zoom=10`;

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl bg-muted/20 flex items-center justify-center text-muted"
      style={{ minHeight: 280 }}
    >
      Loading map…
    </div>
  ),
});

type AreaMapProps = {
  title?: string;
  className?: string;
  height?: string;
};

export default function AreaMap({
  title = "My service area",
  className = "",
  height = "320px",
}: AreaMapProps) {
  return (
    <div className={className}>
      {title && (
        <h2 className="font-display text-xl font-semibold text-foreground mb-4">
          {title}
        </h2>
      )}
      <div className="rounded-xl overflow-hidden border border-black/10 shadow-md relative z-0">
        <LeafletMap height={height} className="w-full" />
        <div className="flex justify-end px-3 py-2 bg-muted/20 border-t border-black/5">
          <a
            href={OSM_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent font-medium hover:text-accent-soft transition-colors"
          >
            View larger map →
          </a>
        </div>
      </div>
    </div>
  );
}
