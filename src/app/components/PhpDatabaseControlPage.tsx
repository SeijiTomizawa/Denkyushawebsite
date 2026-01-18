import { Link } from 'react-router-dom';
import { ArrowLeft, Database } from 'lucide-react';

export default function PhpDatabaseControlPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/php" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          PHPページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <Database className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">PHPデータベース制御</h1>
          <p className="text-xl text-gray-600">
            PHPでのデータベース操作を効率的かつ安全に行うための設計パターンとベストプラクティスを学びます。
            DAOパターン、設定の外部化、SQLファイルの管理など、実践的な開発手法を習得します。
          </p>
        </div>

        {/* DAOパターンセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Database className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">DAOパターン（Data Access Object）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">DAOパターンとは</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              DAOパターンは、データベースへのアクセスをビジネスロジックから分離するデザインパターンです。
              データベース操作を専用のクラスに集約することで、コードの保守性、再利用性、テストのしやすさが向上します。
              ビジネスロジックとデータアクセス層を分離することで、データベースの変更がアプリケーション全体に影響しにくくなります。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// BaseDAO.php - すべてのDAOの基底クラス
abstract class BaseDAO {
    protected $pdo;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }
    
    /**
     * プリペアドステートメントを実行
     */
    protected function execute($sql, $params = []) {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }
    
    /**
     * 単一行を取得
     */
    protected function fetchOne($sql, $params = []) {
        $stmt = $this->execute($sql, $params);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    
    /**
     * 複数行を取得
     */
    protected function fetchAll($sql, $params = []) {
        $stmt = $this->execute($sql, $params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

// UserDAO.php - ユーザーテーブルへのアクセスを管理
class UserDAO extends BaseDAO {
    
    /**
     * ユーザーを作成
     */
    public function create($name, $email, $password) {
        $sql = "INSERT INTO users (name, email, password, created_at) 
                VALUES (:name, :email, :password, NOW())";
        
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        $this->execute($sql, [
            ':name' => $name,
            ':email' => $email,
            ':password' => $hashedPassword
        ]);
        
        return $this->pdo->lastInsertId();
    }
    
    /**
     * IDでユーザーを取得
     */
    public function findById($id) {
        $sql = "SELECT id, name, email, created_at FROM users WHERE id = :id";
        return $this->fetchOne($sql, [':id' => $id]);
    }
    
    /**
     * メールアドレスでユーザーを取得
     */
    public function findByEmail($email) {
        $sql = "SELECT id, name, email, password, created_at 
                FROM users WHERE email = :email";
        return $this->fetchOne($sql, [':email' => $email]);
    }
    
    /**
     * すべてのユーザーを取得
     */
    public function findAll($limit = 100, $offset = 0) {
        $sql = "SELECT id, name, email, created_at 
                FROM users 
                ORDER BY created_at DESC 
                LIMIT :limit OFFSET :offset";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    /**
     * ユーザーを更新
     */
    public function update($id, $name, $email) {
        $sql = "UPDATE users 
                SET name = :name, email = :email, updated_at = NOW() 
                WHERE id = :id";
        
        $this->execute($sql, [
            ':id' => $id,
            ':name' => $name,
            ':email' => $email
        ]);
        
        return $this->pdo->rowCount() > 0;
    }
    
    /**
     * ユーザーを削除
     */
    public function delete($id) {
        $sql = "DELETE FROM users WHERE id = :id";
        $this->execute($sql, [':id' => $id]);
        return $this->pdo->rowCount() > 0;
    }
    
    /**
     * メールアドレスの重複チェック
     */
    public function emailExists($email, $excludeId = null) {
        $sql = "SELECT COUNT(*) as count FROM users WHERE email = :email";
        
        if ($excludeId !== null) {
            $sql .= " AND id != :id";
            $result = $this->fetchOne($sql, [
                ':email' => $email,
                ':id' => $excludeId
            ]);
        } else {
            $result = $this->fetchOne($sql, [':email' => $email]);
        }
        
        return $result['count'] > 0;
    }
    
    /**
     * 検索機能
     */
    public function search($keyword, $limit = 50) {
        $sql = "SELECT id, name, email, created_at 
                FROM users 
                WHERE name LIKE :keyword OR email LIKE :keyword
                ORDER BY created_at DESC 
                LIMIT :limit";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':keyword', '%' . $keyword . '%', PDO::PARAM_STR);
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        $stmt->execute();
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

// 使用例
try {
    // データベース接続
    $pdo = new PDO(
        'mysql:host=localhost;dbname=myapp;charset=utf8mb4',
        'username',
        'password',
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
    
    // DAOのインスタンスを作成
    $userDAO = new UserDAO($pdo);
    
    // ユーザーを作成
    $userId = $userDAO->create('山田太郎', 'yamada@example.com', 'password123');
    echo "新しいユーザーID: " . $userId . "\\n";
    
    // ユーザーを取得
    $user = $userDAO->findById($userId);
    echo "ユーザー名: " . $user['name'] . "\\n";
    
    // メールアドレスで検索
    $user = $userDAO->findByEmail('yamada@example.com');
    
    // すべてのユーザーを取得（ページネーション）
    $users = $userDAO->findAll(10, 0); // 最初の10件
    
    // ユーザーを更新
    $userDAO->update($userId, '山田次郎', 'yamada2@example.com');
    
    // メールアドレスの重複チェック
    if ($userDAO->emailExists('test@example.com')) {
        echo "このメールアドレスは既に使用されています\\n";
    }
    
    // 検索
    $results = $userDAO->search('山田');
    
    // ユーザーを削除
    $userDAO->delete($userId);
    
} catch (PDOException $e) {
    echo "データベースエラー: " . $e->getMessage();
}`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">DAOパターンの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>分離：</strong>ビジネスロジックとデータアクセスを分離し、保守性向上</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>再利用性：</strong>同じデータベース操作を複数の場所で再利用可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>テスト：</strong>モックDAOを使ったユニットテストが容易</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>保守性：</strong>データベーススキーマの変更が1箇所で済む</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>一貫性：</strong>すべてのデータアクセスで同じパターンを使用</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* データベース設定の外部化セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Database className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">データベース設定の外部化</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">設定ファイルの分離</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              データベースの接続情報をソースコードに直接書くのは、セキュリティリスクとなります。
              設定ファイルを外部化し、バージョン管理から除外することで、認証情報の漏洩を防ぎます。
              また、開発環境・本番環境で異なる設定を簡単に切り替えられるようになります。
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">config.php - 設定ファイル</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// config/config.php

// 環境変数から設定を読み込む（推奨）
return [
    'database' => [
        'host' => getenv('DB_HOST') ?: 'localhost',
        'port' => getenv('DB_PORT') ?: '3306',
        'database' => getenv('DB_DATABASE') ?: 'myapp',
        'username' => getenv('DB_USERNAME') ?: 'root',
        'password' => getenv('DB_PASSWORD') ?: '',
        'charset' => 'utf8mb4',
        'options' => [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"
        ]
    ],
    'app' => [
        'name' => '電究社アプリ',
        'env' => getenv('APP_ENV') ?: 'development',
        'debug' => getenv('APP_DEBUG') === 'true',
        'url' => getenv('APP_URL') ?: 'http://localhost'
    ],
    'session' => [
        'lifetime' => 120, // 分
        'secure' => getenv('APP_ENV') === 'production',
        'httponly' => true,
        'samesite' => 'Strict'
    ]
];`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">.env - 環境変数ファイル</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`# .env（このファイルは.gitignoreに追加）

# アプリケーション設定
APP_NAME="電究社アプリ"
APP_ENV=development
APP_DEBUG=true
APP_URL=http://localhost:8000

# データベース設定
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=myapp
DB_USERNAME=root
DB_PASSWORD=secret123

# セッション設定
SESSION_LIFETIME=120
SESSION_SECURE=false`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                <strong>重要：</strong>.envファイルは.gitignoreに追加し、バージョン管理に含めないでください。
                代わりに.env.exampleをリポジトリに含め、必要な環境変数のテンプレートとして使用します。
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">Database.php - データベース接続クラス</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// database/Database.php

class Database {
    private static $instance = null;
    private $connection;
    private $config;
    
    /**
     * プライベートコンストラクタ（シングルトンパターン）
     */
    private function __construct() {
        $this->loadConfig();
        $this->connect();
    }
    
    /**
     * 設定ファイルを読み込む
     */
    private function loadConfig() {
        // .envファイルを読み込む（簡易版）
        $envFile = __DIR__ . '/../.env';
        if (file_exists($envFile)) {
            $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                if (strpos(trim($line), '#') === 0) continue;
                list($key, $value) = explode('=', $line, 2);
                putenv(trim($key) . '=' . trim($value));
            }
        }
        
        // config.phpを読み込む
        $this->config = require __DIR__ . '/../config/config.php';
    }
    
    /**
     * データベースに接続
     */
    private function connect() {
        $db = $this->config['database'];
        
        $dsn = sprintf(
            'mysql:host=%s;port=%s;dbname=%s;charset=%s',
            $db['host'],
            $db['port'],
            $db['database'],
            $db['charset']
        );
        
        try {
            $this->connection = new PDO(
                $dsn,
                $db['username'],
                $db['password'],
                $db['options']
            );
        } catch (PDOException $e) {
            // 本番環境では詳細なエラーを表示しない
            if ($this->config['app']['env'] === 'production') {
                error_log('Database connection failed: ' . $e->getMessage());
                throw new Exception('データベース接続に失敗しました');
            } else {
                throw $e;
            }
        }
    }
    
    /**
     * インスタンスを取得（シングルトン）
     */
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * PDO接続を取得
     */
    public function getConnection() {
        return $this->connection;
    }
    
    /**
     * 設定を取得
     */
    public function getConfig($key = null) {
        if ($key === null) {
            return $this->config;
        }
        
        // ドット記法をサポート（例: 'database.host'）
        $keys = explode('.', $key);
        $value = $this->config;
        
        foreach ($keys as $k) {
            if (!isset($value[$k])) {
                return null;
            }
            $value = $value[$k];
        }
        
        return $value;
    }
    
    /**
     * クローンを禁止（シングルトン）
     */
    private function __clone() {}
    
    /**
     * アンシリアライズを禁止（シングルトン）
     */
    public function __wakeup() {
        throw new Exception("Cannot unserialize singleton");
    }
}

// 使用例
try {
    // データベース接続を取得
    $db = Database::getInstance();
    $pdo = $db->getConnection();
    
    // 設定を取得
    $appName = $db->getConfig('app.name');
    $isDebug = $db->getConfig('app.debug');
    
    // DAOで使用
    $userDAO = new UserDAO($pdo);
    
    // クエリ実行
    $stmt = $pdo->query("SELECT * FROM users LIMIT 10");
    $users = $stmt->fetchAll();
    
} catch (Exception $e) {
    echo "エラー: " . $e->getMessage();
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl mb-3 text-gray-900">設定外部化のベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>.envファイル：</strong>.gitignoreに追加し、認証情報を保護</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>.env.example：</strong>必要な環境変数のテンプレートを提供</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>環境別設定：</strong>開発・ステージング・本番で異なる設定を管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>シングルトン：</strong>データベース接続は1つのインスタンスで管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>エラー処理：</strong>本番環境では詳細なエラーを表示しない</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 外部SQLファイルの読み込みセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Database className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">外部SQLファイルの読み込みと実行</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">SQLファイルの管理と実行</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              データベースのスキーマ定義、初期データ、マイグレーションなどを外部SQLファイルで管理することで、
              バージョン管理がしやすくなり、チーム開発での共有も容易になります。
              PHPから外部SQLファイルを読み込んで実行する方法を学びます。
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">schema.sql - データベーススキーマ</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`-- database/schema.sql

-- ユーザーテーブル
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 投稿テーブル
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_published_at (published_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- コメントテーブル
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_post_id (post_id),
    INDEX idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">seed.sql - 初期データ</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`-- database/seed.sql

-- ユーザーの初期データ
INSERT INTO users (name, email, password) VALUES
('山田太郎', 'yamada@example.com', '$2y$10$abcdefghijklmnopqrstuv'),
('佐藤花子', 'sato@example.com', '$2y$10$abcdefghijklmnopqrstuv'),
('鈴木次郎', 'suzuki@example.com', '$2y$10$abcdefghijklmnopqrstuv');

-- 投稿の初期データ
INSERT INTO posts (user_id, title, content, status, published_at) VALUES
(1, 'PHPの基本', 'PHPは人気のサーバーサイド言語です。', 'published', NOW()),
(1, 'データベース設計', 'データベース設計の基本を学びます。', 'published', NOW()),
(2, 'Webアプリ開発', 'Webアプリケーション開発の実践。', 'draft', NULL);

-- コメントの初期データ
INSERT INTO comments (post_id, user_id, content) VALUES
(1, 2, 'とても参考になりました！'),
(1, 3, 'わかりやすい説明ですね。'),
(2, 2, '次の記事も楽しみです。');`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">SqlLoader.php - SQLファイル実行クラス</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// database/SqlLoader.php

class SqlLoader {
    private $pdo;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }
    
    /**
     * SQLファイルを読み込んで実行
     */
    public function loadFile($filepath) {
        if (!file_exists($filepath)) {
            throw new Exception("SQLファイルが見つかりません: " . $filepath);
        }
        
        // ファイルの内容を読み込む
        $sql = file_get_contents($filepath);
        
        if ($sql === false) {
            throw new Exception("SQLファイルの読み込みに失敗しました");
        }
        
        return $this->execute($sql);
    }
    
    /**
     * SQL文を実行（複数のステートメントに対応）
     */
    public function execute($sql) {
        // コメントを削除
        $sql = $this->removeComments($sql);
        
        // セミコロンで分割して個別のステートメントを取得
        $statements = $this->splitStatements($sql);
        
        $executedCount = 0;
        $errors = [];
        
        try {
            $this->pdo->beginTransaction();
            
            foreach ($statements as $statement) {
                $statement = trim($statement);
                
                if (empty($statement)) {
                    continue;
                }
                
                try {
                    $this->pdo->exec($statement);
                    $executedCount++;
                } catch (PDOException $e) {
                    $errors[] = [
                        'statement' => substr($statement, 0, 100) . '...',
                        'error' => $e->getMessage()
                    ];
                }
            }
            
            if (empty($errors)) {
                $this->pdo->commit();
                return [
                    'success' => true,
                    'executed' => $executedCount,
                    'errors' => []
                ];
            } else {
                $this->pdo->rollBack();
                return [
                    'success' => false,
                    'executed' => 0,
                    'errors' => $errors
                ];
            }
            
        } catch (Exception $e) {
            $this->pdo->rollBack();
            throw $e;
        }
    }
    
    /**
     * SQLコメントを削除
     */
    private function removeComments($sql) {
        // 単一行コメント（--）を削除
        $sql = preg_replace('/--[^\\n]*\\n/', "\\n", $sql);
        
        // 複数行コメント（/* */）を削除
        $sql = preg_replace('/\\/\\*.*?\\*\\//s', '', $sql);
        
        return $sql;
    }
    
    /**
     * SQLをステートメントに分割
     */
    private function splitStatements($sql) {
        $statements = array_filter(
            array_map('trim', explode(';', $sql)),
            'strlen'
        );
        
        return $statements;
    }
    
    /**
     * 複数のSQLファイルを順番に実行
     */
    public function loadFiles(array $filepaths) {
        $results = [];
        
        foreach ($filepaths as $filepath) {
            $results[$filepath] = $this->loadFile($filepath);
        }
        
        return $results;
    }
    
    /**
     * マイグレーションの実行
     */
    public function migrate($migrationDir) {
        if (!is_dir($migrationDir)) {
            throw new Exception("マイグレーションディレクトリが見つかりません");
        }
        
        // SQLファイルを取得してソート
        $files = glob($migrationDir . '/*.sql');
        sort($files);
        
        return $this->loadFiles($files);
    }
}

// 使用例
try {
    // データベース接続
    $db = Database::getInstance();
    $pdo = $db->getConnection();
    
    // SQLローダーを作成
    $loader = new SqlLoader($pdo);
    
    // スキーマファイルを実行
    echo "スキーマを作成中...\\n";
    $result = $loader->loadFile(__DIR__ . '/database/schema.sql');
    
    if ($result['success']) {
        echo "成功: " . $result['executed'] . "個のステートメントを実行しました\\n";
    } else {
        echo "エラーが発生しました:\\n";
        foreach ($result['errors'] as $error) {
            echo "- " . $error['error'] . "\\n";
        }
    }
    
    // 初期データを投入
    echo "\\n初期データを投入中...\\n";
    $result = $loader->loadFile(__DIR__ . '/database/seed.sql');
    
    if ($result['success']) {
        echo "成功: " . $result['executed'] . "個のステートメントを実行しました\\n";
    }
    
    // 複数のファイルを一度に実行
    $results = $loader->loadFiles([
        __DIR__ . '/database/schema.sql',
        __DIR__ . '/database/seed.sql'
    ]);
    
    // マイグレーションの実行
    $results = $loader->migrate(__DIR__ . '/database/migrations');
    
} catch (Exception $e) {
    echo "エラー: " . $e->getMessage() . "\\n";
}`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">setup.php - セットアップスクリプト</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// setup.php - データベースセットアップスクリプト

require_once __DIR__ . '/database/Database.php';
require_once __DIR__ . '/database/SqlLoader.php';

try {
    echo "データベースセットアップを開始します...\\n\\n";
    
    // データベース接続
    $db = Database::getInstance();
    $pdo = $db->getConnection();
    $loader = new SqlLoader($pdo);
    
    // 1. スキーマの作成
    echo "[1/2] データベーススキーマを作成中...\\n";
    $result = $loader->loadFile(__DIR__ . '/database/schema.sql');
    
    if ($result['success']) {
        echo "✓ スキーマの作成が完了しました\\n";
    } else {
        throw new Exception("スキーマの作成に失敗しました");
    }
    
    // 2. 初期データの投入
    echo "\\n[2/2] 初期データを投入中...\\n";
    $result = $loader->loadFile(__DIR__ . '/database/seed.sql');
    
    if ($result['success']) {
        echo "✓ 初期データの投入が完了しました\\n";
    } else {
        throw new Exception("初期データの投入に失敗しました");
    }
    
    echo "\\n✓ セットアップが完了しました！\\n";
    
} catch (Exception $e) {
    echo "\\n✗ エラー: " . $e->getMessage() . "\\n";
    exit(1);
}

// コマンドラインから実行
// php setup.php`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <h4 className="text-xl mb-3 text-gray-900">外部SQLファイル管理のベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>ファイル分割：</strong>schema.sql、seed.sql、migration.sqlなど目的別に分割</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>バージョン管理：</strong>SQLファイルをGitで管理し、変更履歴を追跡</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>トランザクション：</strong>複数のステートメントはトランザクションでまとめて実行</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>エラー処理：</strong>各ステートメントのエラーを記録し、適切に処理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>セットアップスクリプト：</strong>開発環境の構築を自動化</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">DAOパターン</h4>
              <p>データアクセス層を分離することで、保守性と再利用性の高いコードを実現できます。BaseDAOクラスで共通機能を提供し、各エンティティごとにDAOクラスを作成します。</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">設定の外部化</h4>
              <p>データベース接続情報などの機密情報は.envファイルに保存し、バージョン管理から除外します。シングルトンパターンで接続を管理することで、リソースを効率的に使用できます。</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">SQLファイルの管理</h4>
              <p>スキーマ定義や初期データを外部SQLファイルで管理することで、チーム開発での共有が容易になり、環境構築を自動化できます。</p>
            </div>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            これらのデータベース制御の手法を習得したら、より高度なトピックとして、
            リポジトリパターン、クエリビルダー、ORMの活用、データベースマイグレーション、
            レプリケーション、キャッシング戦略などを学習していきましょう。
          </p>
          <Link 
            to="/study/php"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            PHPページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}