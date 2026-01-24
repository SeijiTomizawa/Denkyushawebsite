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
            className="text-5xl md:text-6xl tracking-wider mb-6 text-[#e8c292]"
            style={{ 
              fontFamily: "'Noto Serif JP', serif", 
              fontWeight: 300,
              textShadow: '0 0 30px rgba(232, 194, 146, 0.6), 0 0 60px rgba(232, 194, 146, 0.3)'
            }}
          >
            サービス
          </h2>
          <p 
            className="text-sm text-[#e8c292] opacity-80 tracking-wider"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              textShadow: '0 0 10px rgba(232, 194, 146, 0.4)'
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
                className="text-xs tracking-[0.3em] text-[#e8c292] opacity-50 mb-6"
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
                className="text-base text-[#b8b8b8] opacity-70 leading-loose tracking-wide max-w-md mx-auto"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                {service.description}
              </p>
              
              {/* Thin line separator */}
              {index < services.length - 1 && (
                <div className="mt-24 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#e8c292]/20 to-transparent mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}