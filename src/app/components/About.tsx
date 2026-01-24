export default function About() {
  return (
    <section id="about" className="py-48 px-6 bg-[#050505] relative">
      <div className="container mx-auto max-w-3xl relative z-10">
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
            会社概要
          </h2>
          <p 
            className="text-sm text-[#e8c292] opacity-80 tracking-wider"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              textShadow: '0 0 10px rgba(232, 194, 146, 0.4)'
            }}
          >
            About
          </p>
        </div>

        {/* Company description - sparse */}
        <div className="space-y-12 mb-32">
          <p 
            className="text-center text-base md:text-lg text-[#b8b8b8] opacity-80 leading-loose tracking-wide"
            style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
          >
            電究社は、最先端のWEB技術とクリエイティブなデザインで、<br className="hidden md:block" />
            お客様のビジネスを成功に導く個人事業です。
          </p>
        </div>

        {/* Business info - minimal card */}
        <div className="border border-[#e8c292] border-opacity-10 p-12 md:p-16">
          <div className="space-y-10">
            <div className="text-center pb-6 border-b border-[#e8c292] border-opacity-10">
              <div 
                className="text-xs tracking-[0.2em] text-[#e8c292] opacity-60 mb-3 uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Business Name
              </div>
              <div 
                className="text-lg text-[#f5f5f0] opacity-90 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                電究社
              </div>
            </div>

            <div className="text-center pb-6 border-b border-[#e8c292] border-opacity-10">
              <div 
                className="text-xs tracking-[0.2em] text-[#e8c292] opacity-60 mb-3 uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Representative
              </div>
              <div 
                className="text-lg text-[#f5f5f0] opacity-90 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                富澤　聖児
              </div>
            </div>

            <div className="text-center pb-6 border-b border-[#e8c292] border-opacity-10">
              <div 
                className="text-xs tracking-[0.2em] text-[#e8c292] opacity-60 mb-3 uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Location
              </div>
              <div 
                className="text-lg text-[#f5f5f0] opacity-90 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                東京都杉並区
              </div>
            </div>

            <div className="text-center">
              <div 
                className="text-xs tracking-[0.2em] text-[#e8c292] opacity-60 mb-3 uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Established
              </div>
              <div 
                className="text-lg text-[#f5f5f0] opacity-90 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
              >
                2026年1月
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}