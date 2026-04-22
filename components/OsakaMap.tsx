"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { restaurants, Restaurant } from "@/data/restaurants";
import RestaurantModal from "./RestaurantModal";
import { useLang } from "@/lib/LanguageContext";
import { translations, countryTranslations, countryFlags, areaTranslations } from "@/lib/translations";

const OSAKA_CENTER = { lat: 34.6937, lng: 135.5023 };

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
  const [countryFilter, setCountryFilter] = useState<string>("all");

  const areas = Array.from(new Set(restaurants.map((r) => r.area)));
  const countries = Array.from(new Set(restaurants.map((r) => r.country)));

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
        mapId: "osaka-bankoku-map",
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      });

      mapInstanceRef.current = map;

      restaurants.forEach((restaurant) => {
        const flag = countryFlags[restaurant.country] ?? "🍽";
        const pinEl = document.createElement("div");
        pinEl.innerHTML = `
          <div style="
            background:white;
            border:2px solid #2563eb;
            border-radius:50% 50% 50% 0;
            width:36px;height:36px;
            display:flex;align-items:center;justify-content:center;
            transform:rotate(-45deg);
            box-shadow:0 2px 6px rgba(0,0,0,0.25);
            cursor:pointer;
          ">
            <span style="transform:rotate(45deg);font-size:20px;line-height:1;">${flag}</span>
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

  useEffect(() => {
    const map = mapInstanceRef.current;
    markersRef.current.forEach((marker, id) => {
      const r = restaurants.find((r) => r.id === id);
      if (!r) return;
      const areaMatch = areaFilter === "all" || r.area === areaFilter;
      const countryMatch = countryFilter === "all" || r.country === countryFilter;
      marker.map = areaMatch && countryMatch ? map : null;
    });
  }, [areaFilter, countryFilter]);

  return (
    <>
      {/* フィルタバー（2行） */}
      <div className="absolute top-[52px] left-0 right-0 z-10 bg-white/85 backdrop-blur-sm shadow-sm">
        {/* 国名フィルタ */}
        <div className="px-3 pt-2 pb-1 flex gap-2 overflow-x-auto scrollbar-none">
          <span className="flex-shrink-0 text-[10px] text-gray-400 self-center pr-1">{t.countryLabel}</span>
          <button
            onClick={() => setCountryFilter("all")}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              countryFilter === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
          >
            {t.all}
          </button>
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setCountryFilter(country)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                countryFilter === country
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
              }`}
            >
              {countryFlags[country] ?? ""} {lang === "en" ? (countryTranslations[country] ?? country) : country}
            </button>
          ))}
        </div>

        {/* エリアフィルタ */}
        <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
          <span className="flex-shrink-0 text-[10px] text-gray-400 self-center pr-1">{t.areaLabel}</span>
          <button
            onClick={() => setAreaFilter("all")}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
              areaFilter === "all"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
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
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
              }`}
            >
              {lang === "en" ? (areaTranslations[area] ?? shortArea(area)) : shortArea(area)}
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
