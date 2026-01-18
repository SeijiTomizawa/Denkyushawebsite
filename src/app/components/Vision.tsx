import { Target, Shield, Zap, RefreshCw, AlertTriangle, CheckCircle2, Sparkles, Code2 } from 'lucide-react';

const risks = [
  {
    icon: AlertTriangle,
    title: 'セキュリティリスク',
    description: 'プラグインやテーマの脆弱性により、ハッキングやマルウェア感染のリスクが常に存在します。',
  },
  {
    icon: AlertTriangle,
    title: 'パフォーマンスの問題',
    description: '多数のプラグインやテーマの肥大化により、サイトの読み込み速度が遅くなり、SEOにも悪影響を与えます。',
  },
  {
    icon: AlertTriangle,
    title: '保守コストの増加',
    description: 'WordPress本体、プラグイン、テーマの定期的なアップデートが必要で、互換性の問題も発生しやすくなります。',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'セキュリティの向上',
    description: 'フロントエンドとバックエンドを分離することで、攻撃対象を最小化。WordPressの管理画面を外部に公開する必要がありません。',
  },
  {
    icon: Zap,
    title: 'パフォーマンスの向上',
    description: 'React + 静的生成により、超高速なページ表示を実現。Core Web Vitalsスコアが大幅に改善され、SEOにも有利です。',
  },
  {
    icon: RefreshCw,
    title: 'モダンな開発体験',
    description: 'Reactの最新技術を活用した柔軟なUI/UX設計が可能。WordPressはコンテンツ管理に専念できます。',
  },
];

export default function Vision() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-yellow-600 text-white px-6 py-3 rounded-full mb-6">
            <Target size={24} />
            <span className="font-semibold">電究社の目指すところ</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            私のWEB制作の目指すところ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WordPressをご利用中のお客様へ、より安全で高速なWEBサイトを提供します
          </p>
        </div>

        {/* Service Overview */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16 border border-yellow-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-4 text-gray-900">WordPressヘッドレス化サービス</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              既存のWordPressサイトのフロントエンドを<span className="font-bold text-yellow-600">React</span>で再構築し、<br />
              WordPressを<span className="font-bold text-yellow-600">ヘッドレスCMS</span>として活用するサービスを展開しています。<br />
              <span className="text-gray-600 text-base mt-2 inline-block">
                コンテンツ管理の使いやすさはそのままに、セキュリティとパフォーマンスを劇的に向上させます。
              </span>
            </p>
          </div>
        </div>

        {/* WordPress Risks */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4 text-gray-900 flex items-center justify-center gap-3">
              <AlertTriangle className="text-red-600" size={32} />
              WordPressを運用するリスク
            </h3>
            <p className="text-gray-600">
              従来のWordPressには、以下のような課題があります
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {risks.map((risk, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-red-200 hover:border-red-400 transition-colors"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <risk.icon className="text-red-600" size={28} />
                </div>
                <h4 className="text-xl mb-3 text-gray-900">{risk.title}</h4>
                <p className="text-gray-600 leading-relaxed">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Headless Benefits */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4 text-gray-900 flex items-center justify-center gap-3">
              <CheckCircle2 className="text-green-600" size={32} />
              ヘッドレス化の利点
            </h3>
            <p className="text-gray-600">
              React + ヘッドレスWordPressで、これらの課題を解決します
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-green-200 hover:border-green-400 transition-colors"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="text-green-600" size={28} />
                </div>
                <h4 className="text-xl mb-3 text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* microCMS Option */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-lg mb-16 border border-blue-200">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-3xl text-gray-900">WordPressを利用していないお客様へ</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
            WordPressを使用していない、またはこれから新規でWEBサイトを構築されるお客様には、<br />
            <span className="font-bold text-blue-600">microCMS</span>を活用したモダンなサイト構築をご提案します。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900 font-semibold">microCMSとは</h4>
              <p className="text-gray-600 leading-relaxed">
                日本製のヘッドレスCMSで、APIベースのコンテンツ管理システムです。直感的な管理画面で、エンジニアでなくても簡単にコンテンツを更新できます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900 font-semibold">microCMSの特徴</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                  <span>セキュリティリスクが極めて低い</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                  <span>保守・アップデートが不要</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                  <span>日本語サポート完備</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                  <span>高速なコンテンツ配信</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Backend Development */}
        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 md:p-12 shadow-lg mb-16 border border-purple-200">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <Code2 className="text-white" size={24} />
            </div>
            <h3 className="text-3xl text-gray-900">カスタムバックエンド開発</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            お客様の要望に応じて、<span className="font-bold text-purple-600">Laravel</span>や<span className="font-bold text-purple-600">Symfony</span>などの<br />
            PHPフレームワークを使用した独自のバックエンド開発も承っております。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900 font-semibold">複雑な業務ロジック</h4>
              <p className="text-gray-600 leading-relaxed">
                会員管理、予約システム、決済処理など、ビジネス要件に合わせた複雑な機能を実装できます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900 font-semibold">データベース設計</h4>
              <p className="text-gray-600 leading-relaxed">
                MySQLやPostgreSQLを使用した最適なデータベース設計により、高速で安全なデータ管理を実現します。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900 font-semibold">API開発</h4>
              <p className="text-gray-600 leading-relaxed">
                RESTful APIやGraphQLを使用した、拡張性の高いバックエンドシステムを構築します。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <span className="font-semibold text-purple-600">対応フレームワーク：</span>
              Laravel / Symfony / その他PHPフレームワーク
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="shine-effect bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl mb-4">採用技術</h3>
          <div className="mb-6">
            <p className="text-lg opacity-90 mb-4">フロントエンド</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                React / Next.js
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                TypeScript
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                Tailwind CSS
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                vanilla-extract CSS
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg opacity-90 mb-4">バックエンド / CMS</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                WordPress REST API
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                microCMS
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                Laravel
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                Symfony
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg opacity-90 mb-4">インフラ</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                Xserver
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                Vercel
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                MySQL
              </span>
              <span className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-lg font-semibold shadow-lg border border-white/40">
                Firebase
              </span>
            </div>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            最新のモダンWEB技術と使いやすいCMSを組み合わせ、<br />
            ビジネスの成長を支える強固な基盤を構築します。
          </p>
        </div>
      </div>
    </section>
  );
}