import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Code, FileCode, Sparkles, Layers, Paintbrush } from 'lucide-react';

export default function CssMainPage() {
  const sections = [
    {
      id: 'basic-syntax',
      icon: Code,
      title: '基本構文',
      description: 'セレクタ、プロパティ、ボックスモデル、レイアウトなど、CSSの基礎を学びます',
      color: 'bg-pink-100 text-pink-600',
      hoverColor: 'hover:bg-pink-600',
    },
    {
      id: 'external-files',
      icon: FileCode,
      title: '外部ファイル化',
      description: 'CSSファイルの読み込み方法、管理方法、ベストプラクティスを学びます',
      color: 'bg-rose-100 text-rose-600',
      hoverColor: 'hover:bg-rose-600',
    },
    {
      id: 'modern-css',
      icon: Sparkles,
      title: 'モダンCSS',
      description: 'Flexbox、Grid、CSS変数、アニメーションなど、モダンなCSSテクニックを学びます',
      color: 'bg-fuchsia-100 text-fuchsia-600',
      hoverColor: 'hover:bg-fuchsia-600',
    },
    {
      id: 'tailwind',
      icon: Layers,
      title: 'Tailwind CSS',
      description: 'ユーティリティファーストのCSSフレームワークを学びます',
      color: 'bg-cyan-100 text-cyan-600',
      hoverColor: 'hover:bg-cyan-600',
    },
    {
      id: 'vanilla-extract',
      icon: Paintbrush,
      title: 'vanilla-extract',
      description: 'TypeScriptベースのCSS-in-JSライブラリを学びます',
      color: 'bg-purple-100 text-purple-600',
      hoverColor: 'hover:bg-purple-600',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-pink-600 rounded-2xl flex items-center justify-center mb-6">
            <Palette className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">CSS</h1>
          <p className="text-xl text-gray-600">
            CSS（Cascading Style Sheets）は、Webページのデザインやレイアウトを制御するスタイルシート言語です。
            基本から最新のモダンな技術まで、体系的に学びましょう。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/study/css/${section.id}`}
              className="group"
            >
              <div className={`p-6 rounded-2xl border border-gray-200 ${section.hoverColor} hover:shadow-2xl transition-all duration-300 h-full`}>
                <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors`}>
                  <section.icon className={`${section.color.split(' ')[1]} group-hover:text-white transition-colors`} size={28} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-white transition-colors">{section.title}</h3>
                <p className="text-gray-600 group-hover:text-white transition-colors text-sm">{section.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CSSとは */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Palette className="text-pink-600" size={24} />
              </div>
              <h2 className="text-3xl text-gray-900">CSSとは</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              CSS（Cascading Style Sheets）は、HTML要素の見た目を装飾するためのスタイルシート言語です。
              色、フォント、レイアウト、アニメーションなど、Webページの視覚的なデザインを制御します。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
                <h4 className="text-xl mb-3 text-gray-900">CSSでできること</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>色やフォントのスタイリング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>レイアウト設計（Flexbox、Grid）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>レスポンシブデザイン</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>アニメーション効果</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span>印刷スタイルの制御</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-xl mb-3 text-gray-900">CSSの歴史</h4>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>CSS1（1996年）:</strong> 基本的なスタイリング機能
                  </div>
                  <div>
                    <strong>CSS2（1998年）:</strong> ポジショニング、メディアタイプ
                  </div>
                  <div>
                    <strong>CSS3（2011年〜）:</strong> モジュール化、アニメーション、グラデーション
                  </div>
                  <div>
                    <strong>モダンCSS:</strong> Flexbox、Grid、CSS変数、カスタムプロパティ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学習の流れ */}
        <div className="bg-pink-50 rounded-2xl p-8 border border-pink-200">
          <h3 className="text-2xl mb-6 text-gray-900">学習の流れ</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">基本構文</h4>
                <p className="text-gray-700">セレクタ、プロパティ、ボックスモデルなど、CSSの基礎を学びます</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">外部ファイル化</h4>
                <p className="text-gray-700">CSSファイルの管理方法とベストプラクティスを理解します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">モダンCSS</h4>
                <p className="text-gray-700">Flexbox、Grid、CSS変数など、最新のCSS技術を習得します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">Tailwind CSS</h4>
                <p className="text-gray-700">ユーティリティファーストのアプローチで効率的にスタイリングします</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">vanilla-extract</h4>
                <p className="text-gray-700">TypeScriptで型安全なCSS-in-JSを実現します</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
