import Link from "next/link";

export const metadata = {
  title: "運営者情報 | 大阪くいだおれマップ",
  description: "大阪くいだおれマップの運営者情報・お問い合わせ先です。",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 text-gray-800">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← トップへ戻る
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">運営者情報</h1>

      <section className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold mt-6">サイト概要</h2>
        <dl className="grid grid-cols-[120px_1fr] gap-y-2 border-t pt-3">
          <dt className="font-medium text-gray-600">サイト名</dt>
          <dd>大阪くいだおれマップ</dd>
          <dt className="font-medium text-gray-600">URL</dt>
          <dd className="break-all">https://osaka-kuidaore-map.skyhighplanet.workers.dev</dd>
          <dt className="font-medium text-gray-600">開設日</dt>
          <dd>2026年4月</dd>
        </dl>

        <h2 className="text-lg font-semibold mt-6">運営の目的</h2>
        <p>
          大阪市内のグルメレポーターがX（旧Twitter）で紹介する飲食店を、地図上で気軽に探せるようまとめたサイトです。
          店舗の場所・投稿者の感想・予約サイトへのリンクを一画面でご確認いただけます。
        </p>

        <h2 className="text-lg font-semibold mt-6">運営者</h2>
        <dl className="grid grid-cols-[120px_1fr] gap-y-2 border-t pt-3">
          <dt className="font-medium text-gray-600">運営者名</dt>
          <dd>わう</dd>
          <dt className="font-medium text-gray-600">お問い合わせ</dt>
          <dd>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSctMc-aouBSWyQFM9RFdcGavtJpCR7kJ-uW9KZkrhZxucYy5w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              お問い合わせフォーム
            </a>
          </dd>
        </dl>

        <h2 className="text-lg font-semibold mt-6">掲載情報について</h2>
        <p>
          当サイトは、X（旧Twitter）上で公開されているグルメ投稿を引用・埋め込み表示し、各飲食店の位置情報と組み合わせて掲載しています。
          掲載内容に誤りがある場合や、投稿・掲載の削除をご希望の場合は、上記お問い合わせ先までご連絡ください。
        </p>

        <h2 className="text-lg font-semibold mt-6">関連ページ</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <Link href="/privacy" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </Link>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500">最終更新日：2026年4月22日</p>
      </section>
    </main>
  );
}
