import { Lightbulb, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [isStudyMenuOpen, setIsStudyMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <Lightbulb className="text-yellow-500 w-8 h-8" fill="currentColor" />
              <div className="absolute inset-0 blur-xl bg-yellow-400 opacity-30 animate-pulse" />
            </div>
            <div className="text-2xl font-bold text-gray-900">
              電究社 <small>- DENKYUSHA -</small>
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
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
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      HTML
                    </Link>
                    <Link
                      to="/study/html/basic-syntax"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/html/lists-links"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      リストとリンク
                    </Link>
                    <Link
                      to="/study/html/media"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      画像とメディア
                    </Link>
                    <Link
                      to="/study/html/tables"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      テーブル
                    </Link>
                    <Link
                      to="/study/html/forms"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      フォーム
                    </Link>
                    <Link
                      to="/study/html/semantic"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      セマンティックHTML
                    </Link>
                    <Link
                      to="/study/css"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      CSS
                    </Link>
                    <Link
                      to="/study/css/basic-syntax"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/css/external-files"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      外部ファイル化
                    </Link>
                    <Link
                      to="/study/css/modern-css"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      モダンCSS
                    </Link>
                    <Link
                      to="/study/css/tailwind"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Tailwind CSS
                    </Link>
                    <Link
                      to="/study/css/vanilla-extract"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      vanilla-extract
                    </Link>
                    <Link
                      to="/study/javascript"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      JavaScript/TypeScript
                    </Link>
                    <Link
                      to="/study/javascript/basic-syntax"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/javascript/functions"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      関数
                    </Link>
                    <Link
                      to="/study/javascript/dom"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      DOM操作
                    </Link>
                    <Link
                      to="/study/javascript/async"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      非同期処理
                    </Link>
                    <Link
                      to="/study/javascript/typescript"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      TypeScript
                    </Link>
                    <Link
                      to="/study/javascript/modern-js"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      モダンJavaScript
                    </Link>
                    <Link
                      to="/study/react"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      React
                    </Link>
                    <Link
                      to="/study/react/components"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      コンポーネント
                    </Link>
                    <Link
                      to="/study/react/hooks"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Hooks
                    </Link>
                    <Link
                      to="/study/react/lifecycle"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      ライフサイクル
                    </Link>
                    <Link
                      to="/study/react/jsx"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      JSX
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* React Section - Removed since it's now in Frontend */}
                  
                  {/* PHP Section */}
                  <div className="px-4 py-1">
                    <div className="text-xs text-gray-500 font-semibold mb-1">PHP</div>
                    <Link
                      to="/study/php"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors"
                    >
                      PHP
                    </Link>
                    <Link
                      to="/study/php/basic-syntax"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      基本構文
                    </Link>
                    <Link
                      to="/study/php/web-application"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      Webアプリケーション
                    </Link>
                    <Link
                      to="/study/php/database-control"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      データベース制御
                    </Link>
                    <Link
                      to="/study/php/framework"
                      className="block px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors ml-2"
                    >
                      フレームワーク
                    </Link>
                    <Link
                      to="/study/php/security"
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
        </div>
      </nav>
    </header>
  );
}