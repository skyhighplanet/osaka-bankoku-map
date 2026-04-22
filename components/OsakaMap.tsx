"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { restaurants, Restaurant } from "@/data/restaurants";
import RestaurantModal from "./RestaurantModal";
import { useLang } from "@/lib/LanguageContext";
import { translations, categoryTranslations, areaTranslations } from "@/lib/translations";

const OSAKA_CENTER = { lat: 34.6937, lng: 135.5023 };

// "中央区（難波）" → "難波"、括弧なしならそのまま返す
function shortArea(area: string): string {
  const match = area.match(/（(.+)）/);
  return match ? match[1] : area;
}

export default function OsakaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<Map<string, google.maps.marker.AdvancedMarkerElement>>(new Map());

  const { lang } = useLang();
  const t = translations[lang];

  const [selected, setSelected] = useState<Restaurant | null>(null);
  const [areaFilter, setAreaFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // ユニーク一覧（内部キーは日本語で保持）
  const areas = Array.from(new Set(restaurants.map((r) => r.area)));
  const categories = Array.from(new Set(restaurants.map((r) => r.category)));

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

  // フィルタ変更時にマーカーを表示/非表示（エリア × カテゴリのAND条件）
  useEffect(() => {
    const map = mapInstanceRef.current;
    markersRef.current.forEach((marker, id) => {
      const r = restaurants.find((r) => r.id === id);
      if (!r) return;
      const areaMatch = areaFilter === "all" || r.area === areaFilter;
      const categoryMatch = categoryFilter === "all" || r.category === categoryFilter;
      marker.map = areaMatch && categoryMatch ? map : null;
    });
  }, [areaFilter, categoryFilter]);

  return (
    <>
      {/* フィルタバー（2行） */}
      <div className="absolute top-[52px] left-0 right-0 z-10 bg-white/85 backdrop-blur-sm shadow-sm">
        {/* エリアフィルタ */}
        <div className="px-3 pt-2 pb-1 flex gap-2 overflow-x-auto scrollbar-none">
          <span className="flex-shrink-0 text-[10px] text-gray-400 self-center pr-1">{t.areaLabel}</span>
          {/* 「すべて」ボタン */}
          <button
            onClick={() => setAreaFilter("all")}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              areaFilter === "all"
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-red-400"
            }`}
          >
            {t.all}
          </button>
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
              {lang === "en" ? (areaTranslations[area] ?? shortArea(area)) : shortArea(area)}
            </button>
          ))}
        </div>

        {/* カテゴリフィルタ */}
        <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
          <span className="flex-shrink-0 text-[10px] text-gray-400 self-center pr-1">{t.categoryLabel}</span>
          {/* 「すべて」ボタン */}
          <button
            onClick={() => setCategoryFilter("all")}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              categoryFilter === "all"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
            }`}
          >
            {t.all}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                categoryFilter === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
              }`}
            >
              {lang === "en" ? (categoryTranslations[cat] ?? cat) : cat}
            </button>
          ))}
        </div>
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
