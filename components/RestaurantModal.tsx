"use client";

import { useEffect, useRef } from "react";
import { Restaurant } from "@/data/restaurants";
import { useLang } from "@/lib/LanguageContext";
import { translations, areaTranslations, countryTranslations } from "@/lib/translations";

type Props = {
  restaurant: Restaurant;
  onClose: () => void;
};

const RESERVATION_SITES = [
  {
    key: "gurunavi",
    label: "ぐるなび",
    logo: "https://r.gnavi.co.jp/image/favicon/favicon-32x32.png",
    color: "#e60012",
  },
  {
    key: "hotpepper",
    label: "ホットペッパー",
    logo: "https://www.hotpepper.jp/favicon.ico",
    color: "#ff0000",
  },
  {
    key: "ikyu",
    label: "一休",
    logo: "https://www.ikyu.com/favicon.ico",
    color: "#c8a415",
  },
] as const;

function getTweetId(url: string): string | null {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : null;
}

function TweetEmbed({ tweetUrl, containerId }: { tweetUrl: string; containerId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tweetId = getTweetId(tweetUrl);
    if (!tweetId || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = "";
    let cancelled = false;

    const render = () => {
      if (cancelled || !container.isConnected) return;
      container.innerHTML = "";
      (window as any).twttr?.widgets?.createTweet(tweetId, container, {
        lang: "ja",
        dnt: true,
      });
    };

    // スクリプトがすでに読み込まれていれば即実行、なければ少し待つ
    if ((window as any).twttr?.widgets) {
      render();
    } else {
      const timer = setTimeout(render, 1500);
      return () => {
        cancelled = true;
        clearTimeout(timer);
        container.innerHTML = "";
      };
    }

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, [tweetUrl]);

  return <div ref={containerRef} className="min-h-[120px]" />;
}

export default function RestaurantModal({ restaurant, onClose }: Props) {
  const { lang } = useLang();
  const t = translations[lang];

  const reservationLinks = [
    { site: RESERVATION_SITES[0], url: restaurant.gurunaviUrl },
    { site: RESERVATION_SITES[1], url: restaurant.hotpepperUrl },
    { site: RESERVATION_SITES[2], url: restaurant.ikyuUrl },
  ].filter((r) => r.url);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-xl z-10 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white rounded-t-2xl">
          <div>
            <h2 className="font-bold text-lg leading-tight">{restaurant.name}</h2>
            <p className="text-sm text-gray-500">
              {lang === "en" ? (areaTranslations[restaurant.area] ?? restaurant.area) : restaurant.area}
            </p>
            <p className="text-xs text-blue-600 font-medium mt-0.5">
              {lang === "en" ? (countryTranslations[restaurant.country] ?? restaurant.country) : restaurant.country}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Xの投稿 */}
        <div className="p-4 space-y-4">
          {restaurant.posts.map((post, i) => (
            <TweetEmbed
              key={`${restaurant.id}-${i}`}
              tweetUrl={post.tweetUrl}
              containerId={`tweet-${restaurant.id}-${i}`}
            />
          ))}
        </div>

        {/* 予約ボタン */}
        {reservationLinks.length > 0 ? (
          <div className="px-4 pb-6">
            <p className="text-xs text-gray-500 mb-2">{t.reservation}</p>
            <div className="flex gap-3 flex-wrap">
              {reservationLinks.map(({ site, url }) => (
                <a
                  key={site.key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium hover:opacity-80 transition-opacity"
                  style={{ borderColor: site.color, color: site.color }}
                >
                  <img
                    src={site.logo}
                    alt={site.label}
                    width={14}
                    height={14}
                    className="rounded-sm"
                  />
                  {site.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 pb-6">
            <p className="text-xs text-gray-400">{t.reservationPending}</p>
          </div>
        )}
      </div>
    </div>
  );
}
