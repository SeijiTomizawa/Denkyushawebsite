import { Lightbulb, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [isStudyMenuOpen, setIsStudyMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    // ホームページにいない場合は、まずホームに戻る
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // メニュー外をクリックしたら閉じる
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

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              <Lightbulb className="text-yellow-500 w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
              <div className="absolute inset-0 blur-xl bg-yellow-400 opacity-30 animate-pulse" />
            </div>
            <div className="text-lg md:text-2xl font-bold text-gray-900">
              電究社 <small className="hidden sm:inline">- DENKYUSHA -</small>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/service" className="text-gray-700 hover:text-gray-900 transition-colors">
              SERVICE
            </Link>
            <Link to="/create" className="text-gray-700 hover:text-gray-900 transition-colors">
              CREATE
            </Link>
            
            {/* STUDY Dropdown Menu */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsStudyMenuOpen(!isStudyMenuOpen);
                }}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                STUDY
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isStudyMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Dropdown Content */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 max-h-[calc(100vh-100px)] overflow-y-auto ${
                  isStudyMenuOpen 
                    ? 'opacity-100 visible' 
                    : 'opacity-0 invisible pointer-events-none'
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/study"
                    onClick={() => setIsStudyMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  >
                    STUDY TOP
                  </Link>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* Frontend Section */}
                  <div className="px-4 py-1">
                    <div className="text-xs text-gray-500 font-semibold mb-1">Frontend</div>
                    <Link
                      to="/study/html"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      HTML
                    </Link>
                    <Link
                      to="/study/html/basic-syntax"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/html/lists-links"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      リストとリンク
                    </Link>
                    <Link
                      to="/study/html/media"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      画像とメディア
                    </Link>
                    <Link
                      to="/study/html/tables"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      テーブル
                    </Link>
                    <Link
                      to="/study/html/forms"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      フォーム
                    </Link>
                    <Link
                      to="/study/html/semantic"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      セマンティックHTML
                    </Link>
                    <Link
                      to="/study/css"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      CSS
                    </Link>
                    <Link
                      to="/study/css/basic-syntax"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/css/external-files"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      外部ファイル化
                    </Link>
                    <Link
                      to="/study/css/modern-css"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      モダンCSS
                    </Link>
                    <Link
                      to="/study/css/tailwind"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Tailwind CSS
                    </Link>
                    <Link
                      to="/study/css/vanilla-extract"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      vanilla-extract
                    </Link>
                    <Link
                      to="/study/javascript"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      JavaScript/TypeScript
                    </Link>
                    <Link
                      to="/study/javascript/basic-syntax"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/javascript/functions"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      関数
                    </Link>
                    <Link
                      to="/study/javascript/dom"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      DOM操作
                    </Link>
                    <Link
                      to="/study/javascript/async"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      非同期処理
                    </Link>
                    <Link
                      to="/study/javascript/typescript"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      TypeScript
                    </Link>
                    <Link
                      to="/study/javascript/modern-js"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      モダンJavaScript
                    </Link>
                    <Link
                      to="/study/javascript/canvas"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Canvas
                    </Link>
                    <Link
                      to="/study/react"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      React
                    </Link>
                    <Link
                      to="/study/react/components"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      コンポーネント
                    </Link>
                    <Link
                      to="/study/react/hooks"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Hooks
                    </Link>
                    <Link
                      to="/study/react/lifecycle"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      ライフサイクル
                    </Link>
                    <Link
                      to="/study/react/jsx"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      JSX
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* PHP Section */}
                  <div className="px-4 py-1">
                    <div className="text-xs text-gray-500 font-semibold mb-1">PHP</div>
                    <Link
                      to="/study/php"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      PHP
                    </Link>
                    <Link
                      to="/study/php/basic-syntax"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/php/web-application"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Webアプリケーション
                    </Link>
                    <Link
                      to="/study/php/database-control"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      データベース制御
                    </Link>
                    <Link
                      to="/study/php/framework"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      フレームワーク
                    </Link>
                    <Link
                      to="/study/php/security"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      セキュリティ
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* MySQL Section */}
                  <div className="px-4 py-1">
                    <div className="text-xs text-gray-500 font-semibold mb-1">MySQL</div>
                    <Link
                      to="/study/mysql"
                      onClick={() => setIsStudyMenuOpen(false)}
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      MySQL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 space-y-2">
          <Link
            to="/service"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors font-medium"
          >
            SERVICE
          </Link>
          <Link
            to="/create"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors font-medium"
          >
            CREATE
          </Link>
          
          {/* STUDY Section in Mobile */}
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => setIsStudyMenuOpen(!isStudyMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors font-medium"
            >
              STUDY
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${isStudyMenuOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {isStudyMenuOpen && (
              <div className="mt-2 ml-2 space-y-1 max-h-[calc(100vh-300px)] overflow-y-auto">
                <Link
                  to="/study"
                  onClick={() => {
                    setIsStudyMenuOpen(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                >
                  STUDY TOP
                </Link>
                
                <div className="border-t border-gray-200 my-2"></div>
                
                {/* Frontend */}
                <div className="px-2">
                  <div className="text-xs text-gray-500 font-semibold mb-2 px-2">Frontend</div>
                  
                  {/* HTML */}
                  <Link
                    to="/study/html"
                    onClick={() => {
                      setIsStudyMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors font-medium"
                  >
                    HTML
                  </Link>
                  <div className="ml-3 space-y-1">
                    <Link
                      to="/study/html/basic-syntax"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/html/lists-links"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      リストとリンク
                    </Link>
                    <Link
                      to="/study/html/media"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      画像とメディア
                    </Link>
                    <Link
                      to="/study/html/tables"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      テーブル
                    </Link>
                    <Link
                      to="/study/html/forms"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      フォーム
                    </Link>
                    <Link
                      to="/study/html/semantic"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      セマンティックHTML
                    </Link>
                  </div>
                  
                  {/* CSS */}
                  <Link
                    to="/study/css"
                    onClick={() => {
                      setIsStudyMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors font-medium mt-2"
                  >
                    CSS
                  </Link>
                  <div className="ml-3 space-y-1">
                    <Link
                      to="/study/css/basic-syntax"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/css/external-files"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      外部ファイル化
                    </Link>
                    <Link
                      to="/study/css/modern-css"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      モダンCSS
                    </Link>
                    <Link
                      to="/study/css/tailwind"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      Tailwind CSS
                    </Link>
                    <Link
                      to="/study/css/vanilla-extract"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      vanilla-extract
                    </Link>
                  </div>
                  
                  {/* JavaScript */}
                  <Link
                    to="/study/javascript"
                    onClick={() => {
                      setIsStudyMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors font-medium mt-2"
                  >
                    JavaScript/TypeScript
                  </Link>
                  <div className="ml-3 space-y-1">
                    <Link
                      to="/study/javascript/basic-syntax"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/javascript/functions"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      関数
                    </Link>
                    <Link
                      to="/study/javascript/dom"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      DOM操作
                    </Link>
                    <Link
                      to="/study/javascript/async"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      非同期処理
                    </Link>
                    <Link
                      to="/study/javascript/typescript"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      TypeScript
                    </Link>
                    <Link
                      to="/study/javascript/modern-js"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      モダンJavaScript
                    </Link>
                    <Link
                      to="/study/javascript/canvas"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      Canvas
                    </Link>
                  </div>
                  
                  {/* React */}
                  <Link
                    to="/study/react"
                    onClick={() => {
                      setIsStudyMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors font-medium mt-2"
                  >
                    React
                  </Link>
                  <div className="ml-3 space-y-1">
                    <Link
                      to="/study/react/components"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      コンポーネント
                    </Link>
                    <Link
                      to="/study/react/hooks"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      Hooks
                    </Link>
                    <Link
                      to="/study/react/lifecycle"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      ライフサイクル
                    </Link>
                    <Link
                      to="/study/react/jsx"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      JSX
                    </Link>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-2"></div>
                
                {/* PHP */}
                <div className="px-2">
                  <div className="text-xs text-gray-500 font-semibold mb-2 px-2">PHP</div>
                  <Link
                    to="/study/php"
                    onClick={() => {
                      setIsStudyMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors font-medium"
                  >
                    PHP
                  </Link>
                  <div className="ml-3 space-y-1">
                    <Link
                      to="/study/php/basic-syntax"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/php/web-application"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      Webアプリケーション
                    </Link>
                    <Link
                      to="/study/php/database-control"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      データベース制御
                    </Link>
                    <Link
                      to="/study/php/framework"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      フレームワーク
                    </Link>
                    <Link
                      to="/study/php/security"
                      onClick={() => {
                        setIsStudyMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      セキュリティ
                    </Link>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-2"></div>
                
                {/* MySQL */}
                <div className="px-2">
                  <div className="text-xs text-gray-500 font-semibold mb-2 px-2">MySQL</div>
                  <Link
                    to="/study/mysql"
                    onClick={() => {
                      setIsStudyMenuOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors font-medium"
                  >
                    MySQL
                  </Link>
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
    </header>
  );
}