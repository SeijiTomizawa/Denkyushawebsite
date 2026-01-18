import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <div className="relative">
                <Lightbulb
                  className="text-yellow-500 w-7 h-7"
                  fill="currentColor"
                />
                <div className="absolute inset-0 blur-lg bg-yellow-400 opacity-30 animate-pulse" />
              </div>
              <div className="text-2xl font-bold">
                電究社 <small>- DENKYUSHA -</small>
              </div>
            </Link>
            <p className="text-gray-400">
              あなたのビジネスをデジタルで明るく照らす、WEB制作のプロフェッショナル。
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">サービス</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/create" className="hover:text-yellow-500 transition-colors">
                  WEBサイト制作
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-yellow-500 transition-colors">
                  WordPressヘッドレス化
                </Link>
              </li>
              <li>
                <Link to="/study" className="hover:text-yellow-500 transition-colors">
                  プログラミング学習
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-yellow-500 transition-colors">
                  お申し込み
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">ページ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-yellow-500 transition-colors">
                  TOP
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-yellow-500 transition-colors">
                  SERVICE
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-yellow-500 transition-colors">
                  CREATE
                </Link>
              </li>
              <li>
                <Link to="/study" className="hover:text-yellow-500 transition-colors">
                  STUDY
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} 電究社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}