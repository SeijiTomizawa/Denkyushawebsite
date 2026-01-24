const services = [
  {
    title: 'WEBサイト制作',
    description: 'レスポンシブ対応のモダンなウェブサイトを制作',
  },
  {
    title: 'モバイルアプリ開発',
    description: 'iOSとAndroidに対応したアプリケーション開発',
  },
  {
    title: 'UIデザイン',
    description: '直感的で美しいユーザーインターフェース設計',
  },
  {
    title: 'SEO対策',
    description: '検索エンジン最適化による上位表示を実現',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-48 px-6 bg-[#050505] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Minimal header */}
        <div className="text-center mb-32">
          <div className="divider-line mx-auto mb-12" />
          <h2 
            className="text-5xl md:text-6xl tracking-wider mb-6 text-[#d4a574]"
            style={{ 
              fontFamily: "'Noto Serif JP', serif", 
              fontWeight: 300,
              textShadow: '0 0 30px rgba(212, 165, 116, 0.5), 0 0 60px rgba(212, 165, 116, 0.2)'
            }}
          >
            サービス
          </h2>
          <p 
            className="text-sm text-[#d4a574] opacity-70 tracking-wider"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              textShadow: '0 0 10px rgba(212, 165, 116, 0.3)'
            }}
          >
            Services
          </p>
        </div>

        {/* Minimal service list with large spacing */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{
                animation: `fadeIn 1s ease-out ${index * 0.2 + 0.3}s both`
              }}
            >
              {/* Service number */}
              <div 
                className="text-xs tracking-[0.3em] text-[#d4a574] opacity-40 mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Title */}
              <h3 
                className="text-2xl md:text-3xl tracking-wider mb-6 text-[#f5f5f0] text-fade"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                {service.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-base text-[#9a9a9a] opacity-60 leading-loose tracking-wide max-w-md mx-auto"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                {service.description}
              </p>
              
              {/* Thin line separator */}
              {index < services.length - 1 && (
                <div className="mt-24 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}