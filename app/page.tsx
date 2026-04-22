import Link from "next/link";
import MapLoader from "@/components/MapLoader";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10">
        <Header />
      </div>

      <MapLoader />

      {/* フッター */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <div className="bg-white/85 backdrop-blur-sm px-4 py-2 flex items-center justify-center gap-4 text-xs text-gray-600 pointer-events-auto">
          <Link href="/about" className="hover:text-gray-900 hover:underline">
            運営者情報
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/privacy" className="hover:text-gray-900 hover:underline">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </main>
  );
}
