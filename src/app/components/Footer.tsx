import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#d4a574] border-opacity-10 py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Minimal logo */}
        <div className="text-center mb-20">
          <Link to="/" onClick={scrollToTop} className="inline-flex flex-col items-center gap-4 group">
            <Lightbulb 
              className="text-[#d4a574] w-6 h-6 opacity-60 group-hover:opacity-90 transition-all duration-700" 
              fill="currentColor"
              strokeWidth={1}
            />
            <div 
              className="text-base tracking-[0.4em] text-[#f5f5f0] opacity-60 group-hover:opacity-90 transition-opacity duration-700"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              電究社
            </div>
          </Link>
        </div>

        {/* Minimal navigation */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-20">
          <Link 
            to="/service" 
            className="text-xs tracking-[0.2em] text-[#d4a574] opacity-50 hover:opacity-100 transition-opacity duration-500 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Service
          </Link>
          <Link 
            to="/create" 
            className="text-xs tracking-[0.2em] text-[#d4a574] opacity-50 hover:opacity-100 transition-opacity duration-500 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Create
          </Link>
          <Link 
            to="/study" 
            className="text-xs tracking-[0.2em] text-[#d4a574] opacity-50 hover:opacity-100 transition-opacity duration-500 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Study
          </Link>
          <Link 
            to="/order" 
            className="text-xs tracking-[0.2em] text-[#d4a574] opacity-50 hover:opacity-100 transition-opacity duration-500 uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Order
          </Link>
        </div>

        {/* Thin divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent mx-auto mb-12" />

        {/* Copyright */}
        <div className="text-center">
          <p 
            className="text-xs text-[#9a9a9a] opacity-40 tracking-wider"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            &copy; {currentYear} 電究社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
