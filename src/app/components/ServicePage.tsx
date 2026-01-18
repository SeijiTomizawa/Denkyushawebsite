import { ExternalLink, Clock, CheckCircle, Rocket } from 'lucide-react';

const services = [
  {
    title: 'WEB制作サービス',
    description: '企業サイト、ECサイト、ランディングページなど、お客様のニーズに合わせたWEBサイトを制作します。',
    status: '稼働中',
    statusColor: 'bg-green-600',
    link: '/create',
    linkText: '詳細を見る',
    isExternal: false,
  },
  {
    title: '学習プラットフォーム',
    description: 'WEB開発に必要な技術を体系的に学べるオンライン学習サービスです。React、PHP、MySQLなどを学習できます。',
    status: '稼働中',
    statusColor: 'bg-green-600',
    link: '/study',
    linkText: '学習を始める',
    isExternal: false,
  },
  {
    title: 'デザインツール',
    description: 'ノンコーディングでモダンなWEBデザインを作成できるツールです。ドラッグ&ドロップで直感的にデザインできます。',
    status: '開発中',
    statusColor: 'bg-yellow-600',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
  {
    title: 'SEO分析ツール',
    description: 'WEBサイトのSEO状態を分析し、改善提案を行うツールです。競合分析やキーワード調査機能も搭載予定です。',
    status: '開発中',
    statusColor: 'bg-yellow-600',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
  {
    title: 'WEBホスティングサービス',
    description: '高速で安定したWEBホスティングサービスです。WordPress対応、SSL証明書無料、自動バックアップ機能付き。',
    status: '近日公開',
    statusColor: 'bg-blue-600',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
  {
    title: 'チャットボットサービス',
    description: 'AI搭載のチャットボットで、お客様のWEBサイトのカスタマーサポートを自動化します。',
    status: '近日公開',
    statusColor: 'bg-blue-600',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
];

const statusIcons: { [key: string]: typeof CheckCircle } = {
  '稼働中': CheckCircle,
  '開発中': Clock,
  '近日公開': Rocket,
};

export default function ServicePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            サービス一覧
          </h1>
          <p className="text-xl text-gray-600">
            電究社が提供する、現在稼働中および開発中のサービスをご紹介します
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const StatusIcon = statusIcons[service.status];
            const isClickable = service.link !== '#';
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${service.statusColor} text-white text-xs px-3 py-1 rounded-full inline-flex items-center gap-1`}>
                    <StatusIcon size={14} />
                    {service.status}
                  </div>
                </div>
                
                <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[4.5rem]">{service.description}</p>
                
                {isClickable ? (
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                  >
                    {service.linkText}
                    {service.isExternal && <ExternalLink size={16} />}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-gray-400 font-semibold">
                    {service.linkText}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Status Legend */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl mb-6 text-gray-900">ステータスについて</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">稼働中</div>
                <p className="text-sm text-gray-600">現在ご利用いただけるサービスです</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-yellow-600 text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">開発中</div>
                <p className="text-sm text-gray-600">現在開発を進めているサービスです</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">近日公開</div>
                <p className="text-sm text-gray-600">近日中に公開予定のサービスです</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">
            新サービスの最新情報をお届け
          </h2>
          <p className="text-lg mb-6 opacity-90">
            開発中のサービスに関する最新情報やリリース予定をお知らせします
          </p>
          <button
            onClick={() => window.location.href = '/#contact'}
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
}
