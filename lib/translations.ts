export type Language = "ja" | "en";

export const translations = {
  ja: {
    siteTitle: "大阪万国食堂マップ",
    tagline: "ピンをタップして詳細を見る",
    areaLabel: "エリア",
    countryLabel: "国名",
    all: "すべて",
    reservation: "予約はこちら",
    reservationPending: "予約リンク準備中",
  },
  en: {
    siteTitle: "Osaka World Kitchen MAP",
    tagline: "Tap a pin to see details",
    areaLabel: "Area",
    countryLabel: "Cuisine",
    all: "All",
    reservation: "Make a Reservation",
    reservationPending: "Reservation links coming soon",
  },
} as const;

export const countryFlags: Record<string, string> = {
  "日本": "🇯🇵",
  "中国": "🇨🇳",
  "韓国": "🇰🇷",
  "イタリア": "🇮🇹",
  "フランス": "🇫🇷",
  "イギリス": "🇬🇧",
  "アメリカ": "🇺🇸",
  "インド": "🇮🇳",
  "タイ": "🇹🇭",
  "ベトナム": "🇻🇳",
  "メキシコ": "🇲🇽",
  "スペイン": "🇪🇸",
  "ギリシャ": "🇬🇷",
  "トルコ": "🇹🇷",
  "エチオピア": "🇪🇹",
  "ペルー": "🇵🇪",
  "エジプト": "🇪🇬",
  "ベルギー": "🇧🇪",
};

export const countryTranslations: Record<string, string> = {
  "日本": "Japanese",
  "中国": "Chinese",
  "韓国": "Korean",
  "イタリア": "Italian",
  "フランス": "French",
  "イギリス": "British",
  "アメリカ": "American",
  "インド": "Indian",
  "タイ": "Thai",
  "ベトナム": "Vietnamese",
  "メキシコ": "Mexican",
  "スペイン": "Spanish",
  "ギリシャ": "Greek",
  "トルコ": "Turkish",
  "エチオピア": "Ethiopian",
  "ペルー": "Peruvian",
  "エジプト": "Egyptian",
  "ベルギー": "Belgian",
};

export const areaTranslations: Record<string, string> = {
  "中央区（難波）": "Namba",
  "淀川区（十三）": "Juso",
  "中央区（大手前）": "Otemae",
  "西区（阿波座）": "Awaza",
  "中央区（本町）": "Hommachi",
  "東住吉区（駒川中野）": "Komagawa-Nakano",
  "西区（西大橋）": "Nishiohashi",
  "北区（天満）": "Tenma",
  "北区（北新地）": "Kitashinchi",
  "阿倍野区（天王寺）": "Tennoji",
  "中央区（心斎橋）": "Shinsaibashi",
  "福島区（福島）": "Fukushima",
};
