"use client";

import dynamic from "next/dynamic";

const OsakaMap = dynamic(() => import("@/components/OsakaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <p className="text-gray-500 text-sm">地図を読み込み中...</p>
    </div>
  ),
});

export default function MapLoader() {
  return <OsakaMap />;
}
