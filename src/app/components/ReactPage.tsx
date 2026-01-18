import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Component, RefreshCw, Zap } from 'lucide-react';

const topics = [
  {
    icon: Component,
    title: 'コンポーネント',
    description: 'Reactの基本となるコンポーネントの作成と再利用について学びます。',
  },
  {
    icon: Zap,
    title: 'Hooks',
    description: 'useState, useEffectなどのReact Hooksを使った状態管理を学びます。',
  },
  {
    icon: RefreshCw,
    title: 'ライフサイクル',
    description: 'コンポーネントのライフサイクルとその管理方法を理解します。',
  },
  {
    icon: Code,
    title: 'JSX',
    description: 'JavaScriptの拡張構文であるJSXの書き方と活用方法を学びます。',
  },
];

export default function ReactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-4xl">
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
          <h1 className="text-5xl mb-6 text-gray-900">フロントエンド - React</h1>
          <p className="text-xl text-gray-600">
            Reactは、Facebookが開発したユーザーインターフェースを構築するためのJavaScriptライブラリです。
            コンポーネントベースの開発により、再利用可能で保守性の高いコードを書くことができます。
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl text-gray-900">学習内容</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <topic.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-2xl mb-4 text-gray-900">コード例</h2>
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
}`}</code>
            </pre>
          </div>
          <p className="mt-4 text-gray-700">
            このシンプルな例では、useStateフックを使用してカウンターの状態を管理しています。
            ボタンをクリックすると、カウントが増加します。
          </p>
        </div>

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
          </ul>
        </div>
      </div>
    </div>
  );
}
