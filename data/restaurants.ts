export type Restaurant = {
  id: string;
  name: string;
  area: string;
  category: string; // 例: "ラーメン" | "カフェ" | "イタリアン" など
  lat: number;
  lng: number;
  posts: Post[];
  gurunaviUrl?: string;
  hotpepperUrl?: string;
  ikyuUrl?: string;
};

export type Post = {
  tweetUrl: string;
  posterName: string;
  posterHandle: string;
};

// 投稿者アカウント一覧
export const POSTERS = [
  { handle: "@osaka_gourmet_", url: "https://x.com/osaka_gourmet_" },
  { handle: "@muni_gurume",    url: "https://x.com/muni_gurume" },
  { handle: "@furan_osakacafe", url: "https://x.com/furan_osakacafe" },
];

// ★ 実際の投稿URLと店舗情報をここに登録してください
export const restaurants: Restaurant[] = [
  // --- @osaka_gourmet_ ---
  {
    id: "og-1",
    name: "生ハムとPIZZA。86ストア",
    area: "中央区（難波）",
    category: "イタリアン",
    lat: 34.6652,
    lng: 135.5020,
    posts: [
      {
        tweetUrl: "https://x.com/osaka_gourmet_/status/2046162596383052247",
        posterName: "大阪グルメ",
        posterHandle: "@osaka_gourmet_",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @muni_gurume ---
  {
    id: "mg-1",
    name: "中華そば桐麺 総本店",
    area: "淀川区（十三）",
    category: "ラーメン",
    lat: 34.7224,
    lng: 135.4698,
    posts: [
      {
        tweetUrl: "https://x.com/muni_gurume/status/2044795381800903008",
        posterName: "むにグルメ",
        posterHandle: "@muni_gurume",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @furan_osakacafe ---
  {
    id: "fc-1",
    name: "Hobbit's Tea Room",
    area: "中央区（大手前）",
    category: "カフェ",
    lat: 34.6868,
    lng: 135.5196,
    posts: [
      {
        tweetUrl: "https://x.com/furan_osakacafe/status/2045803189656760638",
        posterName: "フラン大阪カフェ",
        posterHandle: "@furan_osakacafe",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },
];
