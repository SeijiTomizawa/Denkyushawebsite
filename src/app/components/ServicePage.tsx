import { ExternalLink, Clock, CheckCircle, Rocket } from 'lucide-react';

const services = [
  {
    title: 'WEB制作サービス',
    description: '企業サイト、ECサイト、ランディングページなど、お客様のニーズに合わせたWEBサイトを制作します。',
    status: '稼働中',
    statusColor: 'bg-[#d4a574]',
    link: '/create',
    linkText: '詳細を見る',
    isExternal: false,
  },
  {
    title: '学習プラットフォーム',
    description: 'WEB開発に必要な技術を体系的に学べるオンライン学習サービスです。React、PHP、MySQLなどを学習できます。',
    status: '稼働中',
    statusColor: 'bg-[#d4a574]',
    link: '/study',
    linkText: '学習を始める',
    isExternal: false,
  },
  {
    title: 'デザインツール',
    description: 'ノンコーディングでモダンなWEBデザインを作成できるツールです。ドラッグ&ドロップで直感的にデザインできます。',
    status: '開発中',
    statusColor: 'bg-[#8b7355]',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
  {
    title: 'SEO分析ツール',
    description: 'WEBサイトのSEO状態を分析し、改善提案を行うツールです。競合分析やキーワード調査機能も搭載予定です。',
    status: '開��中',
    statusColor: 'bg-[#8b7355]',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
  {
    title: 'WEBホスティングサービス',
    description: '高速で安定したWEBホスティングサービスです。WordPress対応、SSL証明書無料、自動バックアップ機能付き。',
    status: '近日公開',
    statusColor: 'bg-[#6b5d4f]',
    link: '#',
    linkText: '準備中',
    isExternal: false,
  },
  {
    title: 'チャットボットサービス',
    description: 'AI搭載のチャットボットで、お客様のWEBサイトのカスタマーサポートを自動化します。',
    status: '近日公開',
    statusColor: 'bg-[#6b5d4f]',
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
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505] relative overflow-hidden">
      {/* Grain Texture */}
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl mb-8 text-[#d4a574] tracking-wider"
            style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: 300,
              textShadow: '0 0 30px rgba(212, 165, 116, 0.5), 0 0 60px rgba(212, 165, 116, 0.3)'
            }}
          >
            サービス一覧
          </h1>
          <p 
            className="text-lg md:text-xl text-[#f5f5f0] opacity-70 max-w-3xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            電究社が提供する、現在稼働中および開発中のサービスをご紹介します
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const StatusIcon = statusIcons[service.status] || CheckCircle;
            const isClickable = service.link !== '#';
            
            return (
              <div
                key={index}
                className="bg-[#050505] border border-[#d4a574] border-opacity-20 p-10 hover:border-opacity-60 transition-all duration-700 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`${service.statusColor} text-black text-xs px-4 py-2 inline-flex items-center gap-2 tracking-wider uppercase`}
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {StatusIcon && <StatusIcon size={14} />}
                    {service.status}
                  </div>
                </div>
                
                <h3 
                  className="text-2xl md:text-3xl mb-6 text-[#d4a574] group-hover:text-[#e6b684] transition-colors duration-500"
                  style={{ 
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: 300,
                    textShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-[#f5f5f0] opacity-60 mb-8 min-h-[5rem] text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {service.description}
                </p>
                
                {isClickable ? (
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#e6b684] transition-colors duration-500 text-sm tracking-widest uppercase opacity-70 hover:opacity-100"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {service.linkText}
                    {service.isExternal && <ExternalLink size={16} />}
                  </a>
                ) : (
                  <span 
                    className="inline-flex items-center gap-2 text-[#f5f5f0] opacity-30 text-sm tracking-widest uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {service.linkText}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Status Legend */}
        <div className="bg-[#050505] border border-[#d4a574] border-opacity-20 p-12 mb-24">
          <h3 
            className="text-3xl md:text-4xl mb-10 text-[#d4a574] text-center"
            style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: 300,
              textShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
            }}
          >
            ステータスについて
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#d4a574] text-black w-12 h-12 flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <div>
                <div 
                  className="text-lg text-[#d4a574] mb-2"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                >
                  稼働中
                </div>
                <p 
                  className="text-sm text-[#f5f5f0] opacity-60"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  現在ご利用いただけるサービスです
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#8b7355] text-black w-12 h-12 flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <div 
                  className="text-lg text-[#d4a574] mb-2"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                >
                  開発中
                </div>
                <p 
                  className="text-sm text-[#f5f5f0] opacity-60"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  現在開発を進めているサービスです
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#6b5d4f] text-black w-12 h-12 flex items-center justify-center">
                <Rocket size={24} />
              </div>
              <div>
                <div 
                  className="text-lg text-[#d4a574] mb-2"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                >
                  近日公開
                </div>
                <p 
                  className="text-sm text-[#f5f5f0] opacity-60"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  近日中に公開予定のサービスです
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border border-[#d4a574] border-opacity-30 p-16 text-center">
          <h2 
            className="text-3xl md:text-5xl mb-6 text-[#d4a574]"
            style={{ 
              fontFamily: "'Noto Serif JP', serif",
              fontWeight: 300,
              textShadow: '0 0 30px rgba(212, 165, 116, 0.4)'
            }}
          >
            新サービスの最新情報をお届け
          </h2>
          <p 
            className="text-lg md:text-xl mb-10 text-[#f5f5f0] opacity-70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            開発中のサービスに関する最新情報やリリース予定をお知らせします
          </p>
          <button
            onClick={() => window.location.href = '/#contact'}
            className="border border-[#d4a574] text-[#d4a574] px-12 py-4 hover:bg-[#d4a574] hover:text-black transition-all duration-500 tracking-widest uppercase text-sm"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  );
}