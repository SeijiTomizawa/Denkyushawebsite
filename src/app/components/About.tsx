import { Users, Award, Clock, Smile } from 'lucide-react';

const stats = [
  { icon: Users, value: '100+', label: 'プロジェクト実績' },
  { icon: Award, value: '15+', label: '受賞歴' },
  { icon: Clock, value: '10年', label: '業界経験' },
  { icon: Smile, value: '98%', label: '顧客満足度' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        {/* <div className="grid md:grid-cols-2 gap-12 items-center mb-20"> */}
        <div className="grid md:grid-cols-1 gap-24 items-center mb-10">  
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">会社概要</h2>
            <p className="text-lg text-gray-600 mb-6">
              電究社は、最先端のWEB技術とクリエイティブなデザインで、お客様のビジネスを成功に導く個人事業です。
            </p>
            <p className="text-lg text-gray-600 mb-6">
              お客様一人ひとりのニーズに寄り添い、丁寧なヒアリングから始まるオーダーメイドの制作プロセスを大切にしています。単なる「WEBサイト制作」ではなく、ビジネスの成長に貢献する「デジタルパートナー」として、長期的な関係を築いていきます。
            </p>
            <p className="text-lg text-gray-600">
              小規模事業だからこそ実現できる、スピーディーで柔軟な対応力が強みです。大手企業にはできないきめ細やかなサービスを提供しています。
            </p>
          </div>
          {/* <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-100"
              >
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl mb-6 text-gray-900">事業者情報</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">事業者名</div>
              <div className="text-lg text-gray-900">電究社</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">代表者</div>
              <div className="text-lg text-gray-900">富澤　聖児</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">所在地</div>
              <div className="text-lg text-gray-900">東京都杉並区</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">設立</div>
              <div className="text-lg text-gray-900">2026年1月</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">事業内容</div>
              <div className="text-lg text-gray-900">WEBサイト制作、WEBシステム開発、WEBサービス運営</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}