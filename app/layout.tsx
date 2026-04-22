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
  title: "大阪万国食堂マップ | 大阪で食べられる各国料理まとめ",
  description: "大阪市内で食べられる各国料理の飲食店を地図でまとめて探せるサイト。イタリアン・中華・韓国料理・フランス料理など、国名とエリアで絞り込んで大阪のワールドグルメを発見。",
  keywords: ["大阪グルメ", "大阪各国料理", "大阪イタリアン", "大阪中華", "大阪韓国料理", "大阪エスニック", "大阪フランス料理", "難波グルメ", "心斎橋グルメ", "天満グルメ", "大阪万博", "大阪飲食店マップ"],
  openGraph: {
    title: "大阪万国食堂マップ | 大阪の各国料理まとめ",
    description: "大阪市内で食べられる各国料理の飲食店を地図でまとめて探せるサイト。国名・エリアで絞り込んで大阪のワールドグルメを発見。",
    url: "https://osaka-bankoku-map.skyhighplanet.workers.dev",
    siteName: "大阪万国食堂マップ",
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
