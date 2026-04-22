export type Restaurant = {
  id: string;
  name: string;
  area: string;
  country: string; // 料理の出身国（例: "日本" | "イタリア" | "中国" など）
  category: string; // 料理種別（例: "ラーメン" | "カフェ" | "イタリアン" など）
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

export const restaurants: Restaurant[] = [
  // --- @osaka_gourmet_ ---
  {
    id: "og-1",
    name: "生ハムとPIZZA。86ストア",
    area: "中央区（難波）",
    country: "イタリア",
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
    country: "日本",
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

  // --- @osaka_gourmet_ ---
  {
    id: "og-2",
    name: "自然派ワインBAR PASSE",
    area: "西区（阿波座）",
    country: "フランス",
    category: "ワインバー",
    lat: 34.683762,
    lng: 135.484676,
    posts: [
      {
        tweetUrl: "https://x.com/osaka_gourmet_/status/2046614781147414784",
        posterName: "大阪グルメ",
        posterHandle: "@osaka_gourmet_",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @tabichef ---
  {
    id: "tc-1",
    name: "またぐ",
    area: "西区（西大橋）",
    country: "日本",
    category: "創作料理",
    lat: 34.678904,
    lng: 135.495336,
    posts: [
      {
        tweetUrl: "https://x.com/tabichef/status/2046831984094347444",
        posterName: "tabichef",
        posterHandle: "@tabichef",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @enseimeshi ---
  {
    id: "em-1",
    name: "422 BOOKCAFE & BAR",
    area: "中央区（本町）",
    country: "日本",
    category: "カフェ",
    lat: 34.686749,
    lng: 135.499560,
    posts: [
      {
        tweetUrl: "https://x.com/enseimeshi/status/2046515172668477498",
        posterName: "enseimeshi",
        posterHandle: "@enseimeshi",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @h_gashiyama ---
  {
    id: "hg-1",
    name: "北新地ひなべ ぺんぎん",
    area: "北区（北新地）",
    country: "中国",
    category: "火鍋",
    lat: 34.696379,
    lng: 135.498201,
    posts: [
      {
        tweetUrl: "https://x.com/h_gashiyama/status/2046873810293690505",
        posterName: "h_gashiyama",
        posterHandle: "@h_gashiyama",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @kyari_gourmet ---
  {
    id: "kg-1",
    name: "酒場音色",
    area: "中央区（心斎橋）",
    country: "日本",
    category: "居酒屋",
    lat: 34.672264,
    lng: 135.501822,
    posts: [
      {
        tweetUrl: "https://x.com/kyari_gourmet/status/2046841391305936969",
        posterName: "kyari_gourmet",
        posterHandle: "@kyari_gourmet",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @umedakeizai ---
  {
    id: "ume-1",
    name: "発酵旬菜 もろみ庵",
    area: "福島区（福島）",
    country: "日本",
    category: "居酒屋",
    lat: 34.697285,
    lng: 135.486360,
    posts: [
      {
        tweetUrl: "https://x.com/umedakeizai/status/2046864295020093718",
        posterName: "umedakeizai",
        posterHandle: "@umedakeizai",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @crew_value1 ---
  {
    id: "cv-2",
    name: "あべの酒場",
    area: "阿倍野区（天王寺）",
    country: "日本",
    category: "居酒屋",
    lat: 34.646517,
    lng: 135.510906,
    posts: [
      {
        tweetUrl: "https://x.com/crew_value1/status/2046883025149960467",
        posterName: "crew_value1",
        posterHandle: "@crew_value1",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @cafe__xx__ ---
  {
    id: "cx-1",
    name: "余白 (yohaku)",
    area: "中央区（本町）",
    country: "日本",
    category: "カフェ",
    lat: 34.681283,
    lng: 135.502693,
    posts: [
      {
        tweetUrl: "https://x.com/cafe__xx__/status/2046505421276676099",
        posterName: "𝓜",
        posterHandle: "@cafe__xx__",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @crew_value1 ---
  {
    id: "cv-1",
    name: "萬珉",
    area: "東住吉区（駒川中野）",
    country: "中国",
    category: "中華",
    lat: 34.623933,
    lng: 135.539576,
    posts: [
      {
        tweetUrl: "https://x.com/crew_value1/status/2046530169318633626",
        posterName: "crew_value1",
        posterHandle: "@crew_value1",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },

  // --- @yk_mg18 ---
  {
    id: "yk-1",
    name: "291010（にくじゅうじゅう）",
    area: "北区（天満）",
    country: "韓国",
    category: "焼肉",
    lat: 34.70648,
    lng: 135.509424,
    posts: [
      {
        tweetUrl: "https://x.com/yk_mg18/status/2046910216399475095",
        posterName: "yk_mg18",
        posterHandle: "@yk_mg18",
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
    country: "イギリス",
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
