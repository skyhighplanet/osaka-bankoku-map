export type Language = "ja" | "en";

export const translations = {
  ja: {
    siteTitle: "大阪くいだおれMAP",
    tagline: "ピンをタップして詳細を見る",
    areaLabel: "エリア",
    categoryLabel: "種別",
    all: "すべて",
    reservation: "予約はこちら",
    reservationPending: "予約リンク準備中",
  },
  en: {
    siteTitle: "Osaka Kuidaore MAP",
    tagline: "Tap a pin to see details",
    areaLabel: "Area",
    categoryLabel: "Category",
    all: "All",
    reservation: "Make a Reservation",
    reservationPending: "Reservation links coming soon",
  },
} as const;

export const categoryTranslations: Record<string, string> = {
  "イタリアン": "Italian",
  "ラーメン": "Ramen",
  "カフェ": "Cafe",
  "ワインバー": "Wine Bar",
  "中華": "Chinese",
  "創作料理": "Creative Cuisine",
  "火鍋": "Hot Pot",
  "居酒屋": "Izakaya",
  "ブックカフェ": "Book Cafe",
};

export const areaTranslations: Record<string, string> = {
  "中央区（難波）": "Namba",
  "淀川区（十三）": "Juso",
  "中央区（大手前）": "Otemae",
  "西区（阿波座）": "Awaza",
  "中央区（本町）": "Hommachi",
  "東住吉区（駒川中野）": "Komagawa-Nakano",
  "西区（西大橋）": "Nishiohashi",
  "北区（北新地）": "Kitashinchi",
  "阿倍野区（天王寺）": "Tennoji",
  "中央区（心斎橋）": "Shinsaibashi",
  "福島区（福島）": "Fukushima",
};
