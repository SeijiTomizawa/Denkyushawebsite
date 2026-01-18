import { Link } from 'react-router-dom';
import { ArrowLeft, Braces, Code, Zap, Package, FileJson, Sparkles, MousePointer } from 'lucide-react';

export default function JavaScriptMainPage() {
  const sections = [
    {
      id: 'basic-syntax',
      icon: Code,
      title: '基本構文',
      description: '変数、データ型、演算子、制御構文など、JavaScriptの基礎を学びます',
      color: 'bg-yellow-100 text-yellow-600',
      hoverColor: 'hover:bg-yellow-600',
    },
    {
      id: 'functions',
      icon: Zap,
      title: '関数',
      description: '関数宣言、アロー関数、高階関数、クロージャなどを学びます',
      color: 'bg-orange-100 text-orange-600',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      id: 'dom',
      icon: MousePointer,
      title: 'DOM操作',
      description: 'HTML要素の取得・操作、イベント処理を学びます',
      color: 'bg-amber-100 text-amber-600',
      hoverColor: 'hover:bg-amber-600',
    },
    {
      id: 'async',
      icon: Sparkles,
      title: '非同期処理',
      description: 'Promise、async/await、Fetch APIを使った非同期プログラミングを学びます',
      color: 'bg-yellow-100 text-yellow-600',
      hoverColor: 'hover:bg-yellow-600',
    },
    {
      id: 'typescript',
      icon: FileJson,
      title: 'TypeScript',
      description: '型システム、インターフェース、ジェネリクスなど、TypeScriptの機能を学びます',
      color: 'bg-blue-100 text-blue-600',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      id: 'modern-js',
      icon: Package,
      title: 'モダンJavaScript',
      description: 'ES6+の機能、分割代入、スプレッド演算子、モジュールなどを学びます',
      color: 'bg-green-100 text-green-600',
      hoverColor: 'hover:bg-green-600',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
            <Braces className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">JavaScript / TypeScript</h1>
          <p className="text-xl text-gray-600">
            JavaScriptはWebページに動的な機能を追加するプログラミング言語です。
            TypeScriptはJavaScriptに型安全性を追加した言語で、大規模なアプリケーション開発に適しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/study/javascript/${section.id}`}
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

        {/* JavaScriptとは */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Braces className="text-yellow-600" size={24} />
              </div>
              <h2 className="text-3xl text-gray-900">JavaScriptとは</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              JavaScriptは、Webページにインタラクティブな機能を追加するためのプログラミング言語です。
              1995年にNetscape社のBrendan Eichによって開発され、現在ではWebブラウザだけでなく、
              Node.jsを使ったサーバーサイド開発にも広く使われています。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h4 className="text-xl mb-3 text-gray-900">JavaScriptの用途</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Webページの動的な機能追加</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>フォームの検証</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>アニメーション効果</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>APIとの通信</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>シングルページアプリケーション（SPA）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-xl mb-3 text-gray-900">TypeScriptとは</h4>
                <p className="text-gray-700 mb-4">
                  TypeScriptは、Microsoftが開発したJavaScriptのスーパーセットです。
                  JavaScriptに型システムを追加することで、より安全で保守しやすいコードを書くことができます。
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>型安全性</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>エディタの自動補完</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>大規模開発に適している</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 学習の流れ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-6 text-gray-900">学習の流れ</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">基本構文</h4>
                <p className="text-gray-700">変数、データ型、演算子、制御構文など、JavaScriptの基礎を学びます</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">関数</h4>
                <p className="text-gray-700">関数の定義方法、アロー関数、高階関数などを理解します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">DOM操作</h4>
                <p className="text-gray-700">HTML要素を取得・操作し、イベントに応答する方法を学びます</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">非同期処理</h4>
                <p className="text-gray-700">Promise、async/await、Fetch APIを使った非同期プログラミングをマスターします</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">TypeScript</h4>
                <p className="text-gray-700">型システムを理解し、より安全なコードを書けるようにします</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">6</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">モダンJavaScript</h4>
                <p className="text-gray-700">ES6+の最新機能を学び、効率的なコードを書きます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
