"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MAP_CENTER, SERVICE_AREA_NAME } from "@/lib/area";

// Fix default marker icon in Next.js (Leaflet’s default paths break with bundling)
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

type LeafletMapProps = {
  height?: string;
  className?: string;
};

export default function LeafletMap({ height = "320px", className = "" }: LeafletMapProps) {
  const heightCss = typeof height === "string" && /^\d+$/.test(height) ? `${height}px` : height;
  return (
    <div className={className} style={{ height: heightCss }}>
      <MapContainer
        center={[MAP_CENTER.lat, MAP_CENTER.lng]}
        zoom={10}
        scrollWheelZoom={true}
        className="h-full w-full rounded-xl"
        style={{ minHeight: 280 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[MAP_CENTER.lat, MAP_CENTER.lng]} icon={defaultIcon}>
          <Popup>
            <strong>New Decorating</strong>
            <br />
            {SERVICE_AREA_NAME}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
