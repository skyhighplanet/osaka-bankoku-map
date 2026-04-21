import MapLoader from "@/components/MapLoader";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm shadow-sm px-4 py-3 flex items-center gap-2">
          <span className="text-xl">🍽</span>
          <h1 className="font-bold text-lg text-gray-800">大阪くいだおれMAP</h1>
          <span className="text-xs text-gray-500 ml-auto">ピンをタップして詳細を見る</span>
        </div>
      </div>
      <MapLoader />
    </main>
  );
}
