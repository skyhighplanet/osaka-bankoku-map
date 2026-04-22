import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 大阪くいだおれマップ",
  description: "大阪くいだおれマップのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 text-gray-800">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← トップへ戻る
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">プライバシーポリシー</h1>

      <section className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold mt-6">1. 個人情報の取り扱い</h2>
        <p>
          当サイト「大阪くいだおれマップ」（以下「当サイト」）は、ユーザーの個人情報を取得・保存する機能を有しません。
          お問い合わせ等でご連絡いただいた場合、いただいたメールアドレス等の情報はお問い合わせへの返信にのみ使用し、第三者への提供は行いません。
        </p>

        <h2 className="text-lg font-semibold mt-6">2. アフィリエイトプログラムについて</h2>
        <p>
          当サイトは、以下のアフィリエイトプログラムに参加しています。
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>A8.net</li>
          <li>バリューコマース</li>
          <li>楽天アフィリエイト</li>
        </ul>
        <p>
          当サイト上の広告リンク経由で商品購入や予約が行われた場合、各アフィリエイトプログラムから当サイトに対し成果報酬が支払われることがあります。
          商品・サービスの提供は各広告主が行うものであり、購入・予約に関するトラブルについて当サイトは責任を負いかねます。
        </p>

        <h2 className="text-lg font-semibold mt-6">3. 外部サービス・Cookieの利用</h2>
        <p>
          当サイトでは以下の外部サービスを利用しています。これらのサービスはCookieやローカルストレージ等の技術を使用することがあります。
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Google Maps（地図表示）</li>
          <li>X（旧Twitter）のツイート埋め込み</li>
          <li>アフィリエイト広告（成果計測のため）</li>
        </ul>
        <p>
          これらのサービスが取得する情報の取り扱いは、各サービスのプライバシーポリシーをご確認ください。
        </p>

        <h2 className="text-lg font-semibold mt-6">4. 掲載情報について</h2>
        <p>
          当サイトに掲載する飲食店情報は、X（旧Twitter）上で各投稿者が公開している投稿を引用・埋め込み表示しています。
          著作権は原著作者に帰属します。削除をご希望の投稿者・店舗様は、お問い合わせよりご連絡ください。
        </p>

        <h2 className="text-lg font-semibold mt-6">5. 免責事項</h2>
        <p>
          当サイトに掲載する情報の正確性には注意を払っておりますが、内容の完全性・最新性・正確性を保証するものではありません。
          掲載情報を利用したことにより生じたいかなる損害についても、当サイトは責任を負いかねます。
          店舗の営業状況・メニュー・価格等は、ご来店前に各店舗へ直接ご確認ください。
        </p>

        <h2 className="text-lg font-semibold mt-6">6. プライバシーポリシーの変更</h2>
        <p>
          本ポリシーは、必要に応じて予告なく変更することがあります。変更後の内容は本ページに掲載した時点で効力を生じるものとします。
        </p>

        <h2 className="text-lg font-semibold mt-6">7. お問い合わせ</h2>
        <p>
          当サイトに関するお問い合わせは、<Link href="/about" className="text-blue-600 hover:underline">運営者情報ページ</Link>をご確認ください。
        </p>

        <p className="mt-8 text-xs text-gray-500">最終更新日：2026年4月22日</p>
      </section>
    </main>
  );
}
