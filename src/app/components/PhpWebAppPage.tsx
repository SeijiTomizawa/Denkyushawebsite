import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Database, FileEdit, Trash2, Eye, Send, Lock } from 'lucide-react';

export default function PhpWebAppPage() {
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
            <Globe className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">PHP Webアプリケーション</h1>
          <p className="text-xl text-gray-600">
            PHPを使ったWebアプリケーション開発の基礎を学びます。
            HTTPリクエストの処理、CRUD操作、フォーム処理、セッション管理など、実践的なWebアプリケーション開発に必要な技術を習得します。
          </p>
        </div>

        {/* HTTPリクエストとレスポンスセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Send className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">HTTPリクエストとレスポンス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">リクエストメソッドとデータの取得</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              WebアプリケーションはHTTPプロトコルを通じてクライアントとサーバー間で通信します。
              PHPでは、<code className="bg-purple-100 px-2 py-1 rounded text-purple-700">$_GET</code>、
              <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">$_POST</code>、
              <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">$_SERVER</code> などのスーパーグローバル変数を使って、
              クライアントからのリクエストデータにアクセスできます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// GETリクエストからデータを取得
// URL例: page.php?name=太郎&age=25
$name = $_GET['name'] ?? 'ゲスト'; // null合体演算子でデフォルト値設定
$age = $_GET['age'] ?? 0;

echo "名前: " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
echo "年齢: " . $age;

// POSTリクエストからデータを取得
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // バリデーション
    if (empty($username) || empty($password)) {
        $error = "ユーザー名とパスワードを入力してください";
    } else {
        // 処理を実行
        echo "ログイン処理を実行";
    }
}

// JSONレスポンスを返す
header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'status' => 'success',
    'data' => ['name' => $name, 'age' => $age],
    'timestamp' => time()
]);

// リダイレクト
header('Location: /dashboard.php');
exit;`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">主要なHTTPメソッド</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <code className="bg-purple-600 text-white px-3 py-1 rounded font-semibold text-sm">GET</code>
                  <span>データの取得。URLパラメータでデータを送信（検索、ページング等）</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="bg-green-600 text-white px-3 py-1 rounded font-semibold text-sm">POST</code>
                  <span>データの送信。リクエストボディでデータを送信（フォーム送信等）</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="bg-blue-600 text-white px-3 py-1 rounded font-semibold text-sm">PUT</code>
                  <span>データの更新。既存リソース全体を置き換え</span>
                </div>
                <div className="flex items-start gap-3">
                  <code className="bg-red-600 text-white px-3 py-1 rounded font-semibold text-sm">DELETE</code>
                  <span>データの削除。指定されたリソースを削除</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CRUD操作セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Database className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">CRUD操作</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">データベース操作の基本</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              CRUD（Create, Read, Update, Delete）は、データベース操作の基本となる4つの操作です。
              PHPのPDO（PHP Data Objects）を使用することで、安全かつ効率的にデータベースを操作できます。
              プリペアドステートメントを使用することで、SQLインジェクション攻撃を防ぐことができます。
            </p>

            {/* Create - 作成 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileEdit className="text-green-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">Create - データの作成</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// データベース接続
$dsn = 'mysql:host=localhost;dbname=myapp;charset=utf8mb4';
$username = 'root';
$password = 'password';

try {
    $pdo = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    
    // 新規ユーザーの作成
    $sql = "INSERT INTO users (name, email, created_at) 
            VALUES (:name, :email, NOW())";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name' => '山田太郎',
        ':email' => 'yamada@example.com'
    ]);
    
    // 挿入されたIDを取得
    $lastId = $pdo->lastInsertId();
    echo "新規ユーザーID: " . $lastId;
    
} catch (PDOException $e) {
    echo "エラー: " . $e->getMessage();
}`}</code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">ポイント：</span>
                プリペアドステートメントで名前付きプレースホルダー（:name）を使用し、execute()でバインドします。
              </p>
            </div>

            {/* Read - 読み取り */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="text-blue-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">Read - データの読み取り</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// 単一レコードの取得
$sql = "SELECT * FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => 1]);
$user = $stmt->fetch(); // 1行取得

if ($user) {
    echo "名前: " . htmlspecialchars($user['name']);
    echo "メール: " . htmlspecialchars($user['email']);
}

// 複数レコードの取得
$sql = "SELECT * FROM users WHERE age >= :age ORDER BY created_at DESC";
$stmt = $pdo->prepare($sql);
$stmt->execute([':age' => 20]);
$users = $stmt->fetchAll(); // すべての行を取得

foreach ($users as $user) {
    echo $user['name'] . "<br>";
}

// カウントの取得
$sql = "SELECT COUNT(*) as count FROM users WHERE status = :status";
$stmt = $pdo->prepare($sql);
$stmt->execute([':status' => 'active']);
$result = $stmt->fetch();
echo "アクティブユーザー数: " . $result['count'];`}</code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">ポイント：</span>
                fetch()は1行、fetchAll()は全行を取得します。必ず取得したデータをエスケープ処理します。
              </p>
            </div>

            {/* Update - 更新 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <FileEdit className="text-yellow-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">Update - データの更新</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// ユーザー情報の更新
$sql = "UPDATE users 
        SET name = :name, 
            email = :email, 
            updated_at = NOW() 
        WHERE id = :id";

$stmt = $pdo->prepare($sql);
$result = $stmt->execute([
    ':name' => '山田花子',
    ':email' => 'hanako@example.com',
    ':id' => 1
]);

// 影響を受けた行数を取得
$rowCount = $stmt->rowCount();
echo $rowCount . "件のレコードを更新しました";

// 条件付き更新
$sql = "UPDATE users 
        SET status = :status 
        WHERE last_login < :date";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':status' => 'inactive',
    ':date' => date('Y-m-d', strtotime('-30 days'))
]);`}</code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">ポイント：</span>
                rowCount()で更新された行数を確認できます。WHERE句を忘れると全レコードが更新されるので注意が必要です。
              </p>
            </div>

            {/* Delete - 削除 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Trash2 className="text-red-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">Delete - データの削除</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// 単一レコードの削除
$sql = "DELETE FROM users WHERE id = :id";
$stmt = $pdo->prepare($sql);
$result = $stmt->execute([':id' => 10]);

$rowCount = $stmt->rowCount();
if ($rowCount > 0) {
    echo "ユーザーを削除しました";
} else {
    echo "削除するユーザーが見つかりませんでした";
}

// 条件付き削除
$sql = "DELETE FROM users 
        WHERE status = :status 
        AND created_at < :date";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':status' => 'deleted',
    ':date' => date('Y-m-d', strtotime('-1 year'))
]);

// 論理削除（ソフトデリート）
$sql = "UPDATE users 
        SET deleted_at = NOW(), 
            status = 'deleted' 
        WHERE id = :id";

$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => 5]);`}</code>
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">ポイント：</span>
                物理削除ではなく、論理削除（deleted_atフラグ）を使用することで、データを復元可能な状態で保持できます。
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">トランザクション処理</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
try {
    // トランザクション開始
    $pdo->beginTransaction();
    
    // 複数のデータベース操作
    $pdo->exec("INSERT INTO users (name) VALUES ('太郎')");
    $pdo->exec("UPDATE accounts SET balance = balance - 1000 WHERE id = 1");
    $pdo->exec("UPDATE accounts SET balance = balance + 1000 WHERE id = 2");
    
    // すべて成功したらコミット
    $pdo->commit();
    echo "トランザクション成功";
    
} catch (Exception $e) {
    // エラーが発生したらロールバック
    $pdo->rollBack();
    echo "トランザクション失敗: " . $e->getMessage();
}`}</code>
                </pre>
              </div>
              <p className="text-gray-700 text-sm">
                複数の操作をまとめて実行し、すべて成功した場合のみコミットすることで、データの整合性を保ちます。
              </p>
            </div>
          </div>
        </div>


        {/* フォーム処理セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <FileEdit className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">フォーム処理</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">安全なフォームデータの処理</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              ユーザーからの入力データを適切にバリデーションし、サニタイズすることはWebアプリケーションのセキュリティにおいて非常に重要です。
              CSRFトークンを使用した攻撃対策も必須です。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// セッション開始（CSRFトークン用）
session_start();

// CSRFトークンの生成
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// POSTリクエストの処理
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // CSRFトークンの検証
    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'] ?? '')) {
        die('不正なリクエストです');
    }
    
    // 入力データの取得
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $age = (int)($_POST['age'] ?? 0);
    $message = trim($_POST['message'] ?? '');
    
    // バリデーション
    $errors = [];
    
    if (empty($name)) {
        $errors[] = '名前を入力してください';
    } elseif (mb_strlen($name) > 50) {
        $errors[] = '名前は50文字以内で入力してください';
    }
    
    if (empty($email)) {
        $errors[] = 'メールアドレスを入力してください';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = '正しいメールアドレスを入力してください';
    }
    
    if ($age < 0 || $age > 150) {
        $errors[] = '年齢は0〜150の範囲で入力してください';
    }
    
    // エラーがなければデータベースに保存
    if (empty($errors)) {
        try {
            $sql = "INSERT INTO contacts (name, email, age, message, created_at) 
                    VALUES (:name, :email, :age, :message, NOW())";
            
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':name' => $name,
                ':email' => $email,
                ':age' => $age,
                ':message' => $message
            ]);
            
            // 成功メッセージ
            $success = 'お問い合わせを受け付けました';
            
            // フォームをリセット
            $name = $email = $age = $message = '';
            
        } catch (PDOException $e) {
            $errors[] = 'データベースエラー: ' . $e->getMessage();
        }
    }
}
?>

<!-- HTMLフォーム -->
<form method="POST" action="">
    <input type="hidden" name="csrf_token" 
           value="<?= htmlspecialchars($_SESSION['csrf_token']) ?>">
    
    <input type="text" name="name" 
           value="<?= htmlspecialchars($name ?? '') ?>" 
           placeholder="名前">
    
    <input type="email" name="email" 
           value="<?= htmlspecialchars($email ?? '') ?>" 
           placeholder="メールアドレス">
    
    <input type="number" name="age" 
           value="<?= htmlspecialchars($age ?? '') ?>" 
           placeholder="年齢">
    
    <textarea name="message"><?= htmlspecialchars($message ?? '') ?></textarea>
    
    <button type="submit">送信</button>
</form>`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">フォーム処理のベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>CSRFトークン：</strong>クロスサイトリクエストフォージェリ対策として必須</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>入力値検証：</strong>必須チェック、型チェック、文字数制限、形式チェック</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>サニタイズ：</strong>htmlspecialchars()でXSS対策</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>エラーメッセージ：</strong>ユーザーフレンドリーなメッセージを表示</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>リダイレクト：</strong>送信後はPRGパターン（Post-Redirect-Get）を使用</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* セッション管理セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Lock className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セッション管理</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">ユーザー認証とセッション</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              セッションは、HTTPの状態を保持しない性質を補い、ユーザーごとの情報を管理する仕組みです。
              ログイン認証、ショッピングカート、ユーザー設定の保持など、多くの場面で使用されます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// セッションの開始（ページの最初で実行）
session_start();

// セッション設定の強化
ini_set('session.cookie_httponly', 1); // JavaScriptからのアクセス防止
ini_set('session.use_only_cookies', 1); // URLパラメータでのID送信を禁止
ini_set('session.cookie_secure', 1);    // HTTPS通信のみ（本番環境）

// ログイン処理
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // データベースからユーザー情報を取得
    $sql = "SELECT id, username, password_hash FROM users 
            WHERE username = :username";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':username' => $username]);
    $user = $stmt->fetch();
    
    // パスワード検証
    if ($user && password_verify($password, $user['password_hash'])) {
        // セッションハイジャック対策：セッションIDを再生成
        session_regenerate_id(true);
        
        // セッションにユーザー情報を保存
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['logged_in'] = true;
        $_SESSION['login_time'] = time();
        
        header('Location: /dashboard.php');
        exit;
    } else {
        $error = 'ユーザー名またはパスワードが間違っています';
    }
}

// ログイン状態の確認
function isLoggedIn() {
    return isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
}

// 認証が必要なページでの確認
if (!isLoggedIn()) {
    header('Location: /login.php');
    exit;
}

// セッションタイムアウトのチェック（30分）
$timeout = 1800; // 30分 = 1800秒
if (isset($_SESSION['login_time']) && 
    (time() - $_SESSION['login_time']) > $timeout) {
    // セッション破棄
    session_destroy();
    header('Location: /login.php?timeout=1');
    exit;
}

// 最終アクティブ時刻を更新
$_SESSION['login_time'] = time();

// ログアウト処理
if (isset($_GET['logout'])) {
    // セッション変数をすべて削除
    $_SESSION = [];
    
    // セッションクッキーを削除
    if (isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time() - 3600, '/');
    }
    
    // セッションを破棄
    session_destroy();
    
    header('Location: /login.php');
    exit;
}

// セッションデータの保存と取得
$_SESSION['cart'] = [
    ['product_id' => 1, 'quantity' => 2],
    ['product_id' => 5, 'quantity' => 1]
];

$cartItems = $_SESSION['cart'] ?? [];

// フラッシュメッセージ（1回だけ表示）
function setFlashMessage($message, $type = 'info') {
    $_SESSION['flash_message'] = [
        'message' => $message,
        'type' => $type
    ];
}

function getFlashMessage() {
    if (isset($_SESSION['flash_message'])) {
        $flash = $_SESSION['flash_message'];
        unset($_SESSION['flash_message']);
        return $flash;
    }
    return null;
}`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">セッション管理のセキュリティ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>セッションIDの再生成：</strong>ログイン時に必ず実行してセッションハイジャックを防ぐ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>HttpOnly属性：</strong>JavaScriptからのアクセスを防止してXSS対策</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Secure属性：</strong>HTTPS通信でのみクッキーを送信</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>タイムアウト設定：</strong>一定時間経過後は自動ログアウト</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>パスワードのハッシュ化：</strong>password_hash()とpassword_verify()を使用</span>
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
              <h4 className="font-semibold text-purple-700 mb-2">HTTPリクエストとレスポンス</h4>
              <p>$_GET、$_POST、$_SERVERを使ったリクエストデータの取得と、適切なレスポンスの返し方を理解しましょう。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">CRUD操作</h4>
              <p>PDOを使った安全なデータベース操作、プリペアドステートメント、トランザクション処理をマスターすることで、堅牢なアプリケーションを構築できます。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">フォーム処理</h4>
              <p>CSRFトークン、バリデーション、サニタイズなど、キュアなフォーム処理は必須スキルです。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">セッション管理</h4>
              <p>ユーザー認証やステート管理において、セッションの適切な使用とセキュリティ対策が重要です。</p>
            </div>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-purple-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            Webアプリケーションの基礎を理解したら、LaravelなどのPHPフレームワークを学習し、
            より効率的で保守性の高いアプリケーション開発に進んでいきましょう。
            RESTful API設計、認証・認可、ファイルアップロード処理なども重要なテーマです。
          </p>
          <Link 
            to="/study/php"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            PHPページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}