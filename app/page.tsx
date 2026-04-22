import Link from "next/link";
import Script from "next/script";
import MapLoader from "@/components/MapLoader";
import Header from "@/components/Header";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "大阪万国食堂マップ",
  url: "https://osaka-bankoku-map.skyhighplanet.workers.dev",
  description: "大阪市内で食べられる各国料理の飲食店を地図でまとめて探せるサイト。イタリアン・中華・韓国料理・フランス料理など国名とエリアで絞り込んで大阪のワールドグルメを発見。",
  inLanguage: "ja",
  keywords: "大阪グルメ,大阪各国料理,大阪イタリアン,大阪中華,大阪韓国料理,大阪エスニック,難波,心斎橋,天満,北新地,福島",
};

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
