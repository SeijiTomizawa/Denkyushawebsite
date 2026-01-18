import { Link } from 'react-router-dom';
import { ArrowLeft, Server, FileCode, Globe, Shield, Database } from 'lucide-react';

const topics = [
  {
    icon: FileCode,
    title: '基本構文',
    description: 'PHPの基本的な文法、変数、関数の使い方を学びます。',
    link: '/study/php/basic-syntax',
  },
  {
    icon: Globe,
    title: 'Webアプリケーション',
    description: 'HTTPリクエストの処理とレスポンスの生成方法を理解します。',
    link: '/study/php/web-application',
  },
  {
    icon: Database,
    title: 'データベース制御',
    description: 'DAOパターン、設定の外部化、SQLファイルの管理方法を学びます。',
    link: '/study/php/database-control',
  },
  {
    icon: Server,
    title: 'フレームワーク',
    description: 'LaravelなどのPHPフレームワークの活用方法を学びます。',
    link: '/study/php/framework',
  },
  {
    icon: Shield,
    title: 'セキュリティ',
    description: 'SQLインジェクションやXSSなどのセキュリティ対策を学びます。',
    link: '/study/php/security',
  },
];

export default function PhpPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <Server className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">バックエンド - PHP</h1>
          <p className="text-xl text-gray-600">
            PHPは、サーバーサイドのスクリプト言語で、動的なWebページの生成に広く使用されています。
            データベースとの連携やセッション管理など、Webアプリケーション開発に必要な機能が充実しています。
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl text-gray-900">学習内容</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <topic.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
                {topic.link && (
                  <Link
                    to={topic.link}
                    className="inline-block mt-4 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                  >
                    詳細を学ぶ →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl mb-4 text-gray-900">コード例</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`<?php
// データベース接続
$pdo = new PDO('mysql:host=localhost;dbname=mydb', 
               'user', 'password');

// ユーザー情報の取得
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
$stmt->execute([$userId]);
$user = $stmt->fetch();

// レスポンスの生成
header('Content-Type: application/json');
echo json_encode($user);
?>`}</code>
            </pre>
          </div>
          <p className="mt-4 text-gray-700">
            この例では、PDOを使用してデータベースに接続し、ユーザー情報を取得してJSON形式で返しています。
            プリペアドステートメントを使用することでSQLインジェクションを防いでいます。
          </p>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <h3 className="text-xl mb-3 text-gray-900">学習のポイント</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>セキュリティを最優先に考えてコードを書く</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>エラーハンドリングを適切に実装する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">•</span>
              <span>MVCパターンなどの設計パターンを理解する</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}