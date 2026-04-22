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
  title: "大阪くいだおれマップ | 大阪グルメ投稿まとめ",
  description: "大阪市内のグルメレポーターが紹介する飲食店を地図で探せるサイト。X投稿からおすすめ店を見つけてそのまま予約できます。",
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
