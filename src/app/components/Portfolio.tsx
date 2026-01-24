const portfolioItems = [
  {
    title: '企業WEBサイト',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzY4Njk1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'ECプラットフォーム',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MXx8fHwxNzY4Njk1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'ブランディングサイト',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NjU5NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-48 px-6 bg-[#050505] relative">
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
            制作実績
          </h2>
          <p 
            className="text-sm text-[#d4a574] opacity-70 tracking-wider"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              textShadow: '0 0 10px rgba(212, 165, 116, 0.3)'
            }}
          >
            Portfolio
          </p>
        </div>

        {/* Portfolio items - sparse grid */}
        <div className="space-y-32">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group"
              style={{
                animation: `fadeIn 1s ease-out ${index * 0.3}s both`
              }}
            >
              {/* Image container */}
              <div className="relative overflow-hidden mb-8 border border-[#d4a574] border-opacity-10">
                <div className="aspect-[16/10] relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700"
                    style={{ filter: 'grayscale(60%) contrast(1.1)' }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40" />
                </div>
              </div>
              
              {/* Project info */}
              <div className="text-center">
                <div 
                  className="text-xs tracking-[0.3em] text-[#d4a574] opacity-50 mb-4 uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.category}
                </div>
                <h3 
                  className="text-2xl tracking-wider text-[#f5f5f0] text-fade"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Divider */}
              {index < portfolioItems.length - 1 && (
                <div className="mt-32 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/20 to-transparent mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}