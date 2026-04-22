import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "WWmFyy6QE6zFYVcQriSHd8foMQPIa6_6NH00SMcO7to",
  },
  title: "大阪くいだおれマップ | 大阪グルメ・カフェ・ラーメン・居酒屋まとめ",
  description: "大阪のグルメレポーターがXで紹介する飲食店を地図でまとめて探せるサイト。難波・心斎橋・天満・北新地・福島など大阪各エリアのカフェ・ラーメン・居酒屋・イタリアン・焼肉などおすすめグルメ情報を掲載。そのまま予約も可能。",
  keywords: ["大阪グルメ", "大阪カフェ", "大阪ランチ", "大阪居酒屋", "大阪ラーメン", "大阪焼肉", "大阪イタリアン", "難波グルメ", "心斎橋グルメ", "天満グルメ", "北新地グルメ", "福島グルメ", "大阪くいだおれ", "大阪飲食店マップ"],
  openGraph: {
    title: "大阪くいだおれマップ | 大阪グルメまとめ",
    description: "大阪のグルメレポーターがXで紹介する飲食店を地図でまとめて探せるサイト。カフェ・ラーメン・居酒屋・焼肉など大阪各エリアのおすすめグルメ情報を掲載。",
    url: "https://osaka-kuidaore-map.skyhighplanet.workers.dev",
    siteName: "大阪くいだおれマップ",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
