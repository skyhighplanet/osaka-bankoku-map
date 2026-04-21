"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { restaurants, Restaurant } from "@/data/restaurants";
import RestaurantModal from "./RestaurantModal";

const OSAKA_CENTER = { lat: 34.6937, lng: 135.5023 };

export default function OsakaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Restaurant | null>(null);

  useEffect(() => {
    setOptions({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      v: "weekly",
      language: "ja",
      region: "JP",
    });

    let cancelled = false;

    (async () => {
      const { Map } = await importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await importLibrary("marker") as google.maps.MarkerLibrary;
      if (cancelled || !mapRef.current) return;

      const map = new Map(mapRef.current, {
        center: OSAKA_CENTER,
        zoom: 13,
        mapId: "osaka-kuidaore-map",
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      });

      restaurants.forEach((restaurant) => {
        const pinEl = document.createElement("div");
        pinEl.innerHTML = `
          <div style="
            background:#e53e3e;
            color:white;
            border-radius:50% 50% 50% 0;
            width:36px;height:36px;
            display:flex;align-items:center;justify-content:center;
            transform:rotate(-45deg);
            box-shadow:0 2px 6px rgba(0,0,0,0.3);
            cursor:pointer;
          ">
            <span style="transform:rotate(45deg);font-size:18px;">🍽</span>
          </div>
        `;

        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: restaurant.lat, lng: restaurant.lng },
          content: pinEl,
          title: restaurant.name,
        });

        marker.addListener("click", () => {
          setSelected(restaurant);
        });
      });
    })();

    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <div ref={mapRef} className="w-full h-full" />
      {selected && (
        <RestaurantModal
          restaurant={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
