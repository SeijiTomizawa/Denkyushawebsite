import { Globe, Smartphone, Palette, Search, ShoppingCart, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'WEBサイト制作',
    description: 'レスポンシブ対応のモダンなウェブサイトを制作。ユーザー体験を重視したデザインで、ビジネスの成長をサポートします。',
  },
  {
    icon: Smartphone,
    title: 'モバイルアプリ開発',
    description: 'iOSとAndroidに対応したネイティブアプリ開発。使いやすさと機能性を両立したアプリケーションを提供します。',
  },
  {
    icon: Palette,
    title: 'UIデザイン',
    description: '直感的で美しいユーザーインターフェースを設計。ブランドイメージを最大限に表現したデザインを制作します。',
  },
  {
    icon: Search,
    title: 'SEO対策',
    description: '検索エンジン最適化により、オーガニック検索での上位表示を実現。持続的なウェブ集客をサポートします。',
  },
  {
    icon: ShoppingCart,
    title: 'ECサイト構築',
    description: 'ショッピング機能を備えた本格的なECサイトを構築。決済システムの導入から運用サポートまで対応します。',
  },
  {
    icon: Zap,
    title: 'WEBシステム開発',
    description: '業務効率化のためのカスタムシステム開発。クラウド技術を活用した最新のソリューションを提供します。',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">サービス</h2>
          <p className="text-xl text-gray-600">
            幅広いWEB制作サービスを提供しています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:border-yellow-600 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                <service.icon className="text-yellow-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}