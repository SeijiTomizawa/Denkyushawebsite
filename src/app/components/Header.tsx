import { Lightbulb, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isStudyMenuOpen, setIsStudyMenuOpen] = useState(false);
  const [isMobileStudyOpen, setIsMobileStudyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // デスクトップメニュー外をクリックしたら閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsStudyMenuOpen(false);
      }
    };

    if (isStudyMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isStudyMenuOpen]);

  // ルート変更時にすべてのメニューを閉じる
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsStudyMenuOpen(false);
    setIsMobileStudyOpen(false);
  }, [location.pathname]);

  const handleMobileNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsMobileStudyOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-md z-50 border-b border-[#d4a574] border-opacity-10">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - minimal */}
          <Link to="/" className="flex items-center gap-3 group">
            <Lightbulb 
              className="text-[#d4a574] w-6 h-6 opacity-90 transition-all duration-500 group-hover:opacity-100" 
              fill="currentColor"
              strokeWidth={1}
            />
            <div 
              className="text-lg tracking-[0.3em] text-[#f5f5f0] opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              style={{ 
                fontFamily: "'Noto Serif JP', serif", 
                fontWeight: 300,
                textShadow: '0 0 15px rgba(212, 165, 116, 0.3)'
              }}
            >
              電究社
            </div>
          </Link>

          {/* Desktop Navigation - minimal */}
          <div className="hidden lg:flex items-center gap-12">
            <Link 
              to="/create" 
              className="text-sm tracking-[0.2em] text-[#d4a574] opacity-80 hover:opacity-100 transition-all duration-500 uppercase"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontWeight: 300,
                textShadow: '0 0 10px rgba(212, 165, 116, 0.2)'
              }}
            >
              Create
            </Link>
            
            {/* STUDY Dropdown */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setIsStudyMenuOpen(!isStudyMenuOpen)}
                className="flex items-center gap-1 text-gray-400 hover:text-[#FFD700] transition-colors duration-300 text-sm tracking-widest uppercase font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                STUDY
                <ChevronDown 
                  size={16} 
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${isStudyMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isStudyMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md shadow-2xl border border-[#FFD700] border-opacity-20 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <div className="py-2">
                    <Link to="/study" onClick={() => setIsStudyMenuOpen(false)} className="block px-4 py-2 text-white hover:bg-white/5 transition-colors uppercase text-sm tracking-wider"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      STUDY TOP
                    </Link>
                    
                    <div className="border-t border-[#FFD700] border-opacity-10 my-2"></div>
                    
                    {/* Frontend */}
                    <div className="px-4 py-1">
                      <div className="text-xs text-gray-500 font-semibold mb-1 tracking-wider uppercase">Frontend</div>
                      <Link to="/study/html" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-2 text-sm text-white hover:bg-white/5 transition-colors">HTML</Link>
                      <Link to="/study/html/basic-syntax" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">基本構文</Link>
                      <Link to="/study/html/lists-links" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">リストとリンク</Link>
                      <Link to="/study/html/media" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">画像とメディア</Link>
                      <Link to="/study/html/tables" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">テーブル</Link>
                      <Link to="/study/html/forms" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">フォーム</Link>
                      <Link to="/study/html/semantic" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">セマンティックHTML</Link>
                      
                      <Link to="/study/css" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-2 text-sm text-white hover:bg-white/5 hover:text-[#FFD700] mt-2">CSS</Link>
                      <Link to="/study/css/basic-syntax" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">基本構文</Link>
                      <Link to="/study/css/external-files" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">外部ファイル化</Link>
                      <Link to="/study/css/modern-css" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">モダンCSS</Link>
                      <Link to="/study/css/tailwind" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">Tailwind CSS</Link>
                      <Link to="/study/css/vanilla-extract" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">vanilla-extract</Link>
                      
                      <Link to="/study/javascript" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-2 text-sm text-white hover:bg-white/5 hover:text-[#FFD700] mt-2">JavaScript/TypeScript</Link>
                      <Link to="/study/javascript/basic-syntax" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">基本構文</Link>
                      <Link to="/study/javascript/functions" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">関数</Link>
                      <Link to="/study/javascript/dom" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">DOM操作</Link>
                      <Link to="/study/javascript/async" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">非同期処理</Link>
                      <Link to="/study/javascript/typescript" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">TypeScript</Link>
                      <Link to="/study/javascript/modern-js" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">モダンJavaScript</Link>
                      <Link to="/study/javascript/canvas" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">Canvas</Link>
                      
                      <Link to="/study/react" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-2 text-sm text-white hover:bg-white/5 hover:text-[#FFD700] mt-2">React</Link>
                      <Link to="/study/react/components" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">コンポーネント</Link>
                      <Link to="/study/react/hooks" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">Hooks</Link>
                      <Link to="/study/react/lifecycle" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">ライフサイクル</Link>
                      <Link to="/study/react/jsx" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">JSX</Link>
                    </div>
                    
                    <div className="border-t border-[#FFD700] border-opacity-10 my-2"></div>
                    
                    {/* PHP */}
                    <div className="px-4 py-1">
                      <div className="text-xs text-gray-500 font-semibold mb-1 tracking-wider uppercase">PHP</div>
                      <Link to="/study/php" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-2 text-sm text-white hover:bg-white/5 hover:text-[#FFD700]">PHP</Link>
                      <Link to="/study/php/basic-syntax" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">基本構文</Link>
                      <Link to="/study/php/web-application" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">Webアプリケーション</Link>
                      <Link to="/study/php/database-control" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">データベース制御</Link>
                      <Link to="/study/php/framework" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">フレームワーク</Link>
                      <Link to="/study/php/security" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-1.5 text-xs text-gray-400 hover:bg-white/5 hover:text-[#FFD700] ml-2">セキュリティ</Link>
                    </div>
                    
                    <div className="border-t border-[#FFD700] border-opacity-10 my-2"></div>
                    
                    {/* MySQL */}
                    <div className="px-4 py-1">
                      <div className="text-xs text-gray-500 font-semibold mb-1 tracking-wider uppercase">MySQL</div>
                      <Link to="/study/mysql" onClick={() => setIsStudyMenuOpen(false)} className="block px-2 py-2 text-sm text-white hover:bg-white/5 hover:text-[#FFD700]">MySQL</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="relative px-8 py-2 bg-[#FFD700] text-black font-bold uppercase tracking-wider text-xs hover:bg-[#FFC700] transition-all duration-300 group overflow-hidden"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 lg:hidden"
            style={{ top: '60px', zIndex: 40 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Drawer */}
          <div 
            className="fixed right-0 bg-white shadow-2xl lg:hidden overflow-y-auto"
            style={{ 
              top: '60px', 
              height: 'calc(100vh - 60px)', 
              width: '288px',
              zIndex: 50
            }}
          >
            <div className="p-4 space-y-2">
              <button
                onClick={() => handleMobileNavigation('/create')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                CREATE
              </button>
              
              {/* STUDY Accordion */}
              <div className="border-t border-gray-200 pt-2">
                <button
                  onClick={() => setIsMobileStudyOpen(!isMobileStudyOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  STUDY
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isMobileStudyOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {isMobileStudyOpen && (
                  <div className="mt-2 ml-2 space-y-1">
                    <button onClick={() => handleMobileNavigation('/study')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                      STUDY TOP
                    </button>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    {/* Frontend */}
                    <div className="px-2">
                      <div className="text-xs text-gray-500 font-semibold mb-2 px-2">Frontend</div>
                      
                      <button onClick={() => handleMobileNavigation('/study/html')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded font-medium">
                        HTML
                      </button>
                      <div className="ml-3 space-y-1">
                        <button onClick={() => handleMobileNavigation('/study/html/basic-syntax')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">基本構文</button>
                        <button onClick={() => handleMobileNavigation('/study/html/lists-links')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">リストとリンク</button>
                        <button onClick={() => handleMobileNavigation('/study/html/media')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">画像とメディア</button>
                        <button onClick={() => handleMobileNavigation('/study/html/tables')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">テーブル</button>
                        <button onClick={() => handleMobileNavigation('/study/html/forms')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">フォーム</button>
                        <button onClick={() => handleMobileNavigation('/study/html/semantic')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">セマンティックHTML</button>
                      </div>
                      
                      <button onClick={() => handleMobileNavigation('/study/css')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded font-medium mt-2">
                        CSS
                      </button>
                      <div className="ml-3 space-y-1">
                        <button onClick={() => handleMobileNavigation('/study/css/basic-syntax')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">基本構文</button>
                        <button onClick={() => handleMobileNavigation('/study/css/external-files')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">外部ファイル化</button>
                        <button onClick={() => handleMobileNavigation('/study/css/modern-css')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">モダンCSS</button>
                        <button onClick={() => handleMobileNavigation('/study/css/tailwind')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">Tailwind CSS</button>
                        <button onClick={() => handleMobileNavigation('/study/css/vanilla-extract')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">vanilla-extract</button>
                      </div>
                      
                      <button onClick={() => handleMobileNavigation('/study/javascript')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded font-medium mt-2">
                        JavaScript/TypeScript
                      </button>
                      <div className="ml-3 space-y-1">
                        <button onClick={() => handleMobileNavigation('/study/javascript/basic-syntax')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">基本構文</button>
                        <button onClick={() => handleMobileNavigation('/study/javascript/functions')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">関数</button>
                        <button onClick={() => handleMobileNavigation('/study/javascript/dom')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">DOM操作</button>
                        <button onClick={() => handleMobileNavigation('/study/javascript/async')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">非同期処理</button>
                        <button onClick={() => handleMobileNavigation('/study/javascript/typescript')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">TypeScript</button>
                        <button onClick={() => handleMobileNavigation('/study/javascript/modern-js')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">モダンJavaScript</button>
                        <button onClick={() => handleMobileNavigation('/study/javascript/canvas')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">Canvas</button>
                      </div>
                      
                      <button onClick={() => handleMobileNavigation('/study/react')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded font-medium mt-2">
                        React
                      </button>
                      <div className="ml-3 space-y-1">
                        <button onClick={() => handleMobileNavigation('/study/react/components')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">コンポーネント</button>
                        <button onClick={() => handleMobileNavigation('/study/react/hooks')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">Hooks</button>
                        <button onClick={() => handleMobileNavigation('/study/react/lifecycle')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">ライフサイクル</button>
                        <button onClick={() => handleMobileNavigation('/study/react/jsx')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">JSX</button>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    {/* PHP */}
                    <div className="px-2">
                      <div className="text-xs text-gray-500 font-semibold mb-2 px-2">PHP</div>
                      <button onClick={() => handleMobileNavigation('/study/php')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded font-medium">
                        PHP
                      </button>
                      <div className="ml-3 space-y-1">
                        <button onClick={() => handleMobileNavigation('/study/php/basic-syntax')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">基本構文</button>
                        <button onClick={() => handleMobileNavigation('/study/php/web-application')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">Webアプリケーション</button>
                        <button onClick={() => handleMobileNavigation('/study/php/database-control')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">データベース制御</button>
                        <button onClick={() => handleMobileNavigation('/study/php/framework')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">フレームワーク</button>
                        <button onClick={() => handleMobileNavigation('/study/php/security')} className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded">セキュリティ</button>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    {/* MySQL */}
                    <div className="px-2">
                      <div className="text-xs text-gray-500 font-semibold mb-2 px-2">MySQL</div>
                      <button onClick={() => handleMobileNavigation('/study/mysql')} className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded font-medium">
                        MySQL
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-2">
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }} 
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}