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

export const restaurants: Restaurant[] = [
  {
    id: "us-1",
    name: "Old Cairo Cafe",
    area: "中央区（西心斎橋）",
    country: "エジプト",
    category: "エジプト料理",
    lat: 34.6708,
    lng: 135.4986,
    posts: [
      {
        tweetUrl: "https://x.com/uramesizesakura/status/2046959879685054476",
        posterName: "桜-すき好きウラなんば。",
        posterHandle: "@uramesizesakura",
      },
    ],
    gurunaviUrl: "",
    hotpepperUrl: "",
    ikyuUrl: "",
  },
];
