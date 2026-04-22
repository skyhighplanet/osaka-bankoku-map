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

export const restaurants: Restaurant[] = [];
