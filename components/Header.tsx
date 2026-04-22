"use client";

import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const { lang, toggleLang } = useLang();
  const t = translations[lang];

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-sm px-4 py-3 flex items-center gap-2">
      <span className="text-xl">🍽</span>
      <h1 className="font-bold text-lg text-gray-800">{t.siteTitle}</h1>
      <span className="text-xs text-gray-500 ml-auto mr-2">{t.tagline}</span>
      <button
        onClick={toggleLang}
        className="flex-shrink-0 text-lg leading-none hover:scale-110 transition-transform"
        aria-label="Toggle language"
        title={lang === "ja" ? "Switch to English" : "日本語に切り替え"}
      >
        {lang === "ja" ? "🇬🇧" : "🇯🇵"}
      </button>
    </div>
  );
}
