import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Table, Search, Lock } from 'lucide-react';

const topics = [
  {
    icon: Table,
    title: 'テーブル設計',
    description: 'データベーステーブルの設計と正規化について学びます。',
  },
  {
    icon: Search,
    title: 'クエリ',
    description: 'SELECT、INSERT、UPDATE、DELETEなどの基本的なSQL文を学びます。',
  },
  {
    icon: Database,
    title: 'インデックス',
    description: 'パフォーマンス向上のためのインデックスの使い方を理解します。',
  },
  {
    icon: Lock,
    title: 'トランザクション',
    description: 'データの整合性を保つためのトランザクション処理を学びます。',
  },
];

export default function MysqlPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
            <Database className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">データベース - MySQL</h1>
          <p className="text-xl text-gray-600">
            MySQLは、世界で最も普及しているオープンソースのリレーショナルデータベース管理システムです。
            高速で信頼性が高く、多くのWebアプリケーションで使用されています。
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl text-gray-900">学習内容</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-green-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <topic.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-2xl mb-4 text-gray-900">コード例</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`-- テーブルの作成
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- データの挿入
INSERT INTO users (name, email) 
VALUES ('山田太郎', 'yamada@example.com');

-- データの検索
SELECT * FROM users 
WHERE email LIKE '%@example.com'
ORDER BY created_at DESC;`}</code>
            </pre>
          </div>
          <p className="mt-4 text-gray-700">
            この例では、usersテーブルを作成し、データを挿入・検索しています。
            適切な制約とインデックスを設定することで、データの整合性とパフォーマンスを確保します。
          </p>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <h3 className="text-xl mb-3 text-gray-900">学習のポイント</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>データベース設計の段階で正規化を意識する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>インデックスの適切な使用でクエリを最適化する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span>バックアップとリカバリの仕組みを理解する</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
