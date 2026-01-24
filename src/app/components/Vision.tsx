export default function Vision() {
  return (
    <section className="px-6 py-48 bg-[#050505] relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Minimal header */}
        <div className="text-center mb-32">
          <div className="divider-line mx-auto mb-12" />
          <h2 
            className="text-5xl md:text-6xl tracking-wider mb-8 text-[#d4a574]"
            style={{ 
              fontFamily: "'Noto Serif JP', serif", 
              fontWeight: 300,
              textShadow: '0 0 30px rgba(212, 165, 116, 0.5), 0 0 60px rgba(212, 165, 116, 0.2)'
            }}
          >
            ヘッドレスWordPress
          </h2>
          <p 
            className="text-sm text-[#d4a574] opacity-70 tracking-wider mb-16"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              textShadow: '0 0 10px rgba(212, 165, 116, 0.3)'
            }}
          >
            Headless WordPress
          </p>
          <p 
            className="text-base md:text-lg text-[#9a9a9a] opacity-60 leading-loose tracking-wide max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
          >
            WordPressをご利用中のお客様へ、より安全で高速なWEBサイト��提供します
          </p>
        </div>

        {/* Core benefits - minimal list */}
        <div className="space-y-20 mb-32">
          <div className="text-center">
            <div 
              className="text-xs tracking-[0.3em] text-[#d4a574] opacity-40 mb-6 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              01
            </div>
            <h3 
              className="text-xl md:text-2xl tracking-wider mb-4 text-[#f5f5f0] opacity-90"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              セキュリティの向上
            </h3>
            <p 
              className="text-base text-[#9a9a9a] opacity-60 leading-loose max-w-lg mx-auto"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              フロントエンドとバックエンドを分離し、攻撃対象を最小化
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent mx-auto" />

          <div className="text-center">
            <div 
              className="text-xs tracking-[0.3em] text-[#d4a574] opacity-40 mb-6 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              02
            </div>
            <h3 
              className="text-xl md:text-2xl tracking-wider mb-4 text-[#f5f5f0] opacity-90"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              パフォーマンスの向上
            </h3>
            <p 
              className="text-base text-[#9a9a9a] opacity-60 leading-loose max-w-lg mx-auto"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              React + 静的生成により、超高速なページ表示を実現
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent mx-auto" />

          <div className="text-center">
            <div 
              className="text-xs tracking-[0.3em] text-[#d4a574] opacity-40 mb-6 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              03
            </div>
            <h3 
              className="text-xl md:text-2xl tracking-wider mb-4 text-[#f5f5f0] opacity-90"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              モダンな開発体験
            </h3>
            <p 
              className="text-base text-[#9a9a9a] opacity-60 leading-loose max-w-lg mx-auto"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              最新のReact技術を活用した柔軟なUI/UX設計が可能
            </p>
          </div>
        </div>

        {/* Technology stack - minimal */}
        <div className="text-center">
          <div className="divider-line mx-auto mb-12" />
          <h3 
            className="text-xl md:text-2xl tracking-wider mb-12 text-[#f5f5f0] opacity-90"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
          >
            採用技術
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              React
            </span>
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Next.js
            </span>
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              TypeScript
            </span>
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              WordPress
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              microCMS
            </span>
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Laravel
            </span>
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vercel
            </span>
            <span 
              className="text-xs tracking-[0.2em] text-[#d4a574] opacity-60 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Firebase
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}