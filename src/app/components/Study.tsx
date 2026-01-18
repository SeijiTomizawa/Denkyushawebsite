import { Link } from 'react-router-dom';
import { Code, Server, Database, FileCode, Palette, Braces } from 'lucide-react';

const topics = [
  {
    id: 'html',
    icon: FileCode,
    title: 'フロントエンド - HTML',
    description: 'Webページの構造を作るためのHTMLについて学びます',
    color: 'bg-orange-100 text-orange-600',
    hoverColor: 'hover:bg-orange-600',
  },
  {
    id: 'css',
    icon: Palette,
    title: 'フロントエンド - CSS',
    description: 'Webページのデザインを作るためのCSSについて学びます',
    color: 'bg-pink-100 text-pink-600',
    hoverColor: 'hover:bg-pink-600',
  },
  {
    id: 'javascript',
    icon: Braces,
    title: 'フロントエンド - JavaScript/TypeScript',
    description: 'インタラクティブなWebページを作るためのJavaScript/TypeScriptについて学びます',
    color: 'bg-yellow-100 text-yellow-600',
    hoverColor: 'hover:bg-yellow-600',
  },
  {
    id: 'react',
    icon: Code,
    title: 'フロントエンド - React',
    description: 'モダンなUIを構築するためのReactライブラリについて学びます',
    color: 'bg-blue-100 text-blue-600',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    id: 'php',
    icon: Server,
    title: 'バックエンド - PHP',
    description: 'サーバーサイド開発のためのPHPについて学びます',
    color: 'bg-purple-100 text-purple-600',
    hoverColor: 'hover:bg-purple-600',
  },
  {
    id: 'mysql',
    icon: Database,
    title: 'データベース - MySQL',
    description: 'データ管理のためのMySQLデータベースについて学びます',
    color: 'bg-green-100 text-green-600',
    hoverColor: 'hover:bg-green-600',
  },
];

export default function Study() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">学習コンテンツ</h1>
          <p className="text-xl text-gray-600">
            WEB開発に必要な技術を体系的に学びましょう
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/study/${topic.id}`}
              className="group"
            >
              <div className={`p-8 rounded-2xl border border-gray-200 ${topic.hoverColor} hover:shadow-2xl transition-all duration-300 h-full`}>
                <div className={`w-16 h-16 ${topic.color} rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors`}>
                  <topic.icon className={`${topic.color.split(' ')[1]} group-hover:text-white transition-colors`} size={32} />
                </div>
                <h2 className="text-2xl mb-4 text-gray-900 group-hover:text-white transition-colors">{topic.title}</h2>
                <p className="text-gray-600 group-hover:text-white transition-colors">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 bg-yellow-50 rounded-2xl border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習の進め方</h3>
          <ol className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <span>まずはフロントエンドのHTMLから始めて、Webページの構造を理解しましょう</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <span>次にCSSでWebページのデザインを学びます</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <span>その後JavaScript/TypeScriptでインタラクティブなWebページを作ります</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <span>次にReactライブラリでモダンなUIを構築します</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</span>
              <span>次にバックエンドのPHPでサーバーサイドの処理を学びます</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0">6</span>
              <span>最後にMySQLでデータベースの操作方法をマスターしましょう</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}