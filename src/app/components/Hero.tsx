import { useEffect, useState } from 'react';

export default function Hero() {
  const [dustParticles, setDustParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number; animation: string }>>([]);

  useEffect(() => {
    // Generate sparse dust particles
    const particles = Array.from({ length: 25 }, () => ({
      left: 40 + Math.random() * 20,
      top: 20 + Math.random() * 60,
      delay: Math.random() * 6,
      duration: 12 + Math.random() * 6,
      animation: `float-${Math.floor(Math.random() * 3) + 1}`,
    }));
    setDustParticles(particles);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#050505]">
      {/* Deep vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#050505]/60 to-[#050505] pointer-events-none z-10" />
      
      {/* Centered lonely light bulb */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 md:pt-24 pb-64 md:pb-80">
        <div className="relative w-full max-w-sm md:max-w-md aspect-square">
          {/* Main bulb image with cinematic glow */}
          <img 
            src="https://images.unsplash.com/photo-1767025981746-0e0f5b5dfca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGlnaHQlMjBidWxiJTIwZ2xvd2luZyUyMGRhcmt8ZW58MXx8fHwxNzY5MjY1OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="聖域の光"
            className="w-full h-full object-contain opacity-80"
            style={{
              filter: 'contrast(1.1) brightness(1.05)',
              animation: 'bulb-glow 4s ease-in-out infinite',
            }}
          />
          
          {/* Warm amber glow - layered */}
          <div className="absolute inset-0 bg-gradient-radial from-[#d4a574]/15 via-[#d4a574]/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-gradient-radial from-[#c89b5f]/10 via-transparent to-transparent blur-2xl" />
          
          {/* Sparse dust particles in the light */}
          <div className="absolute inset-0 overflow-hidden">
            {dustParticles.map((particle, index) => (
              <div
                key={index}
                className="dust-particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationName: particle.animation,
                  animationDuration: `${particle.duration}s`,
                  animationDelay: `${particle.delay}s`,
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Minimal text content - top */}
      <div 
        className="relative z-20 mb-auto pt-32 text-center"
        style={{ animation: 'fadeInSlow 2s ease-out 0.5s both' }}
      >
        <div 
          className="text-sm tracking-[0.4em] uppercase text-[#d4a574] opacity-80 mb-8"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontWeight: 300,
            textShadow: '0 0 20px rgba(212, 165, 116, 0.4), 0 0 40px rgba(212, 165, 116, 0.2)'
          }}
        >
          Private Web Agency
        </div>
        <h1 
          className="text-6xl md:text-8xl tracking-wider leading-relaxed text-[#d4a574]"
          style={{ 
            fontFamily: "'Noto Serif JP', serif",
            fontWeight: 300,
            textShadow: '0 0 30px rgba(212, 165, 116, 0.6), 0 0 60px rgba(212, 165, 116, 0.3), 0 0 90px rgba(212, 165, 116, 0.1)'
          }}
        >
          電究社
        </h1>
      </div>

      {/* Minimal text content - bottom */}
      <div 
        className="relative z-20 mt-auto pb-32 text-center max-w-2xl"
        style={{ animation: 'fadeInSlow 2s ease-out 1.2s both' }}
      >
        <p 
          className="text-base md:text-lg text-[#d4a574] mb-16 leading-loose tracking-wider opacity-80"
          style={{ 
            fontFamily: "'Noto Serif JP', serif", 
            fontWeight: 300,
            textShadow: '0 0 15px rgba(212, 165, 116, 0.3)'
          }}
        >
          暗闇の中の聖域<br />
          一筋の光が、新しい世界を照らす
        </p>

        {/* Ghost button */}
        <button 
          onClick={scrollToContact}
          className="ghost-btn text-xs"
        >
          お問い合わせ
        </button>
      </div>

      {/* Thin divider at bottom */}
      <div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 divider-line"
        style={{ animation: 'fadeInSlow 2s ease-out 1.8s both' }}
      />
    </section>
  );
}