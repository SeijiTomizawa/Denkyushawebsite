import { Lightbulb } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
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
            </div>
            <p className="text-gray-400">
              あなたのビジネスをデジタルで明るく照らす、WEB制作のプロフェッショナル。
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">サービス</h3>
            <ul className="space-y-2 text-gray-400">
              <li>WEBサイト制作</li>
              <li>モバイルアプリ開発</li>
              <li>UIデザイン</li>
              <li>SEO対策</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">ページ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>TOP</li>
              <li>SERVICE</li>
              <li>CREATE</li>
              <li>STUDY</li>
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