import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Component, Zap, RefreshCw, FileCode } from 'lucide-react';

export default function ReactMainPage() {
  const sections = [
    {
      id: 'components',
      icon: Component,
      title: 'コンポーネント',
      description: 'Reactの基本となるコンポーネントの作成と再利用について学びます',
      color: 'bg-blue-100 text-blue-600',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      id: 'hooks',
      icon: Zap,
      title: 'Hooks',
      description: 'useState、useEffectなどのReact Hooksを使った状態管理を学びます',
      color: 'bg-cyan-100 text-cyan-600',
      hoverColor: 'hover:bg-cyan-600',
    },
    {
      id: 'lifecycle',
      icon: RefreshCw,
      title: 'ライフサイクル',
      description: 'コンポーネントのライフサイクルとその管理方法を理解します',
      color: 'bg-indigo-100 text-indigo-600',
      hoverColor: 'hover:bg-indigo-600',
    },
    {
      id: 'jsx',
      icon: FileCode,
      title: 'JSX',
      description: 'JavaScriptの拡張構文であるJSXの書き方と活用方法を学びます',
      color: 'bg-sky-100 text-sky-600',
      hoverColor: 'hover:bg-sky-600',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Code className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">React</h1>
          <p className="text-xl text-gray-600">
            Reactは、Facebookが開発したユーザーインターフェースを構築するためのJavaScriptライブラリです。
            コンポーネントベースの開発により、再利用可能で保守性の高いコードを書くことができます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/study/react/${section.id}`}
              className="group"
            >
              <div className={`p-6 rounded-2xl border border-gray-200 ${section.hoverColor} hover:shadow-2xl transition-all duration-300 h-full bg-white`}>
                <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors`}>
                  <section.icon className={`${section.color.split(' ')[1]} group-hover:text-white transition-colors`} size={28} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-white transition-colors">{section.title}</h3>
                <p className="text-gray-600 group-hover:text-white transition-colors text-sm">{section.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Reactとは */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Code className="text-blue-600" size={24} />
              </div>
              <h2 className="text-3xl text-gray-900">Reactとは</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Reactは、宣言的でコンポーネントベースのUIライブラリです。
              仮想DOMを使った高速なレンダリングと、一方向のデータフローにより、
              予測可能で保守しやすいアプリケーションを構築できます。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-xl mb-3 text-gray-900">Reactの特徴</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>コンポーネントベースの設計</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>仮想DOMによる高速レンダリング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>宣言的なUI記述</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>一方向データフロー</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>豊富なエコシステム</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="text-xl mb-3 text-gray-900">Reactの利点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>再利用可能なコンポーネント</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>保守性の高いコードベース</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>優れたパフォーマンス</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>豊富なサードパーティライブラリ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>大きなコミュニティ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 簡単なコード例 */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl mb-4 text-gray-900">シンプルなコンポーネントの例</h2>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        クリック
      </button>
    </div>
  );
}

export default Counter;`}</code>
              </pre>
            </div>
            <p className="mt-4 text-gray-700">
              このシンプルな例では、useStateフックを使用してカウンターの状態を管理しています。
              ボタンをクリックすると、カウントが増加します。
            </p>
          </div>
        </div>

        {/* 学習の流れ */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl mb-6 text-gray-900">学習の流れ</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">コンポーネント</h4>
                <p className="text-gray-700">Reactの基本となるコンポーネントの作成と再利用を学びます</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">Hooks</h4>
                <p className="text-gray-700">useState、useEffectなどのHooksで状態管理とサイドエフェクトを扱います</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">ライフサイクル</h4>
                <p className="text-gray-700">コンポーネントのライフサイクルを理解し、適切に管理します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">JSX</h4>
                <p className="text-gray-700">JavaScriptとHTMLを組み合わせたJSX構文を習得します</p>
              </div>
            </div>
          </div>
        </div>

        {/* 学習のポイント */}
        <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <h3 className="text-xl mb-3 text-gray-900">学習のポイント</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>コンポーネントの再利用性を意識して設計する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>状態管理はシンプルに保つことを心がける</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>公式ドキュメントを活用して最新の情報をキャッチアップする</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>関数コンポーネントとHooksを優先して使用する</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
