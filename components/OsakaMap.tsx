"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { restaurants, Restaurant } from "@/data/restaurants";
import RestaurantModal from "./RestaurantModal";

const OSAKA_CENTER = { lat: 34.6937, lng: 135.5023 };

// "中央区（難波）" → "難波"、括弧なしなら元の文字列をそのまま返す
function shortArea(area: string): string {
  const match = area.match(/（(.+)）/);
  return match ? match[1] : area;
}

export default function OsakaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<Map<string, google.maps.marker.AdvancedMarkerElement>>(new Map());

  const [selected, setSelected] = useState<Restaurant | null>(null);
  const [areaFilter, setAreaFilter] = useState<string>("すべて");

  // ユニークエリア一覧
  const areas = ["すべて", ...Array.from(new Set(restaurants.map((r) => r.area)))];

  // マップ初期化（1回のみ）
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

      mapInstanceRef.current = map;

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

        markersRef.current.set(restaurant.id, marker);
      });
    })();

    return () => { cancelled = true; };
  }, []);

  // フィルタ変更時にマーカーを表示/非表示
  useEffect(() => {
    const map = mapInstanceRef.current;
    markersRef.current.forEach((marker, id) => {
      const restaurant = restaurants.find((r) => r.id === id);
      if (!restaurant) return;
      const visible = areaFilter === "すべて" || restaurant.area === areaFilter;
      marker.map = visible ? map : null;
    });
  }, [areaFilter]);

  return (
    <>
      {/* エリアフィルタバー */}
      <div className="absolute top-[52px] left-0 right-0 z-10 px-3 py-2 flex gap-2 overflow-x-auto scrollbar-none bg-white/85 backdrop-blur-sm shadow-sm">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setAreaFilter(area)}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              areaFilter === area
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-red-400"
            }`}
          >
            {area === "すべて" ? "すべて" : shortArea(area)}
          </button>
        ))}
      </div>

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
