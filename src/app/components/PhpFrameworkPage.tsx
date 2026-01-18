import { Link } from 'react-router-dom';
import { ArrowLeft, Server, Layers, Box, Zap, Shield, Code2 } from 'lucide-react';

export default function PhpFrameworkPage() {
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
            <Server className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">PHP フレームワーク</h1>
          <p className="text-xl text-gray-600">
            PHPフレームワークを使用することで、効率的で保守性の高いWebアプリケーションを開発できます。
            MVCアーキテクチャパターンの理解と、LaravelやSymfonyなどの主要フレームワークの活用方法を学びます。
          </p>
        </div>

        {/* MVCパターンセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Layers className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">MVCアーキテクチャパターン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">MVCとは</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              MVC（Model-View-Controller）は、アプリケーションを3つの主要なコンポーネントに分離する設計パターンです。
              この分離により、コードの整理、保守性の向上、チーム開発の効率化が実現できます。
              現代のほぼすべてのPHPフレームワークがこのパターンを採用しています。
            </p>

            {/* Model */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Box className="text-blue-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">Model（モデル）- データ層</h4>
              </div>
              
              <p className="text-gray-700 mb-4">
                ビジネスロジックとデータベース操作を担当します。
                データの取得、保存、更新、削除などのデータ操作を行い、アプリケーションの中核となるロジックを実装します。
              </p>

              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// Modelの例 - ユーザーモデル
class User {
    private $db;
    
    public function __construct($database) {
        $this->db = $database;
    }
    
    // ユーザーの取得
    public function find($id) {
        $stmt = $this->db->prepare(
            "SELECT * FROM users WHERE id = :id"
        );
        $stmt->execute([':id' => $id]);
        return $stmt->fetch();
    }
    
    // すべてのユーザーを取得
    public function all() {
        $stmt = $this->db->query("SELECT * FROM users");
        return $stmt->fetchAll();
    }
    
    // ユーザーの作成
    public function create($data) {
        $stmt = $this->db->prepare(
            "INSERT INTO users (name, email, password) 
             VALUES (:name, :email, :password)"
        );
        
        return $stmt->execute([
            ':name' => $data['name'],
            ':email' => $data['email'],
            ':password' => password_hash($data['password'], PASSWORD_DEFAULT)
        ]);
    }
    
    // ユーザーの更新
    public function update($id, $data) {
        $stmt = $this->db->prepare(
            "UPDATE users 
             SET name = :name, email = :email 
             WHERE id = :id"
        );
        
        return $stmt->execute([
            ':id' => $id,
            ':name' => $data['name'],
            ':email' => $data['email']
        ]);
    }
    
    // ユーザーの削除
    public function delete($id) {
        $stmt = $this->db->prepare("DELETE FROM users WHERE id = :id");
        return $stmt->execute([':id' => $id]);
    }
    
    // メールアドレスでユーザーを検索
    public function findByEmail($email) {
        $stmt = $this->db->prepare(
            "SELECT * FROM users WHERE email = :email"
        );
        $stmt->execute([':email' => $email]);
        return $stmt->fetch();
    }
}`}</code>
                </pre>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>責務：</strong>データベースとのやり取り、ビジネスルールの実装、データの検証など
                </p>
              </div>
            </div>

            {/* View */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code2 className="text-green-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">View（ビュー）- 表示層</h4>
              </div>
              
              <p className="text-gray-700 mb-4">
                ユーザーインターフェースを担当します。
                Controllerから受け取ったデータを使用して、HTMLを生成し、ユーザーに表示する画面を作成します。
                ビジネスロジックは含めず、純粋に表示に専念します。
              </p>

              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<!-- views/users/index.php - ユーザー一覧ビュー -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ユーザー一覧</title>
</head>
<body>
    <h1>ユーザー一覧</h1>
    
    <?php if (empty($users)): ?>
        <p>ユーザーが見つかりません。</p>
    <?php else: ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名前</th>
                    <th>メールアドレス</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?= htmlspecialchars($user['id']) ?></td>
                        <td><?= htmlspecialchars($user['name']) ?></td>
                        <td><?= htmlspecialchars($user['email']) ?></td>
                        <td>
                            <a href="/users/<?= $user['id'] ?>">詳細</a>
                            <a href="/users/<?= $user['id'] ?>/edit">編集</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
    
    <a href="/users/create">新規ユーザー作成</a>
</body>
</html>`}</code>
                </pre>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-700">
                  <strong>責務：</strong>データの表示、HTMLの生成、テンプレートエンジンの使用、XSS対策のためのエスケープ処理
                </p>
              </div>
            </div>

            {/* Controller */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-purple-600" size={20} />
                </div>
                <h4 className="text-xl text-gray-900">Controller（コントローラー）- 制御層</h4>
              </div>
              
              <p className="text-gray-700 mb-4">
                ユーザーのリクエストを受け取り、適切なModelとViewを呼び出して処理を調整します。
                ModelとViewの橋渡し役として機能し、アプリケーションの流れを制御します。
              </p>

              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// UserController.php - ユーザーコントローラー
class UserController {
    private $userModel;
    
    public function __construct($database) {
        $this->userModel = new User($database);
    }
    
    // ユーザー一覧を表示
    public function index() {
        // Modelからデータを取得
        $users = $this->userModel->all();
        
        // Viewにデータを渡して表示
        require 'views/users/index.php';
    }
    
    // 特定のユーザーを表示
    public function show($id) {
        $user = $this->userModel->find($id);
        
        if (!$user) {
            header('HTTP/1.0 404 Not Found');
            require 'views/errors/404.php';
            return;
        }
        
        require 'views/users/show.php';
    }
    
    // ユーザー作成フォームを表示
    public function create() {
        require 'views/users/create.php';
    }
    
    // ユーザーを保存
    public function store() {
        // リクエストデータの取得
        $data = [
            'name' => $_POST['name'] ?? '',
            'email' => $_POST['email'] ?? '',
            'password' => $_POST['password'] ?? ''
        ];
        
        // バリデーション
        $errors = $this->validate($data);
        
        if (!empty($errors)) {
            require 'views/users/create.php';
            return;
        }
        
        // Modelでデータを保存
        $this->userModel->create($data);
        
        // リダイレクト
        header('Location: /users');
        exit;
    }
    
    // 編集フォームを表示
    public function edit($id) {
        $user = $this->userModel->find($id);
        
        if (!$user) {
            header('HTTP/1.0 404 Not Found');
            require 'views/errors/404.php';
            return;
        }
        
        require 'views/users/edit.php';
    }
    
    // ユーザーを更新
    public function update($id) {
        $data = [
            'name' => $_POST['name'] ?? '',
            'email' => $_POST['email'] ?? ''
        ];
        
        $errors = $this->validate($data, false);
        
        if (!empty($errors)) {
            $user = $this->userModel->find($id);
            require 'views/users/edit.php';
            return;
        }
        
        $this->userModel->update($id, $data);
        
        header('Location: /users/' . $id);
        exit;
    }
    
    // ユーザーを削除
    public function destroy($id) {
        $this->userModel->delete($id);
        header('Location: /users');
        exit;
    }
    
    // バリデーション
    private function validate($data, $requirePassword = true) {
        $errors = [];
        
        if (empty($data['name'])) {
            $errors[] = '名前を入力してください';
        }
        
        if (empty($data['email'])) {
            $errors[] = 'メールアドレスを入力してください';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = '正しいメールアドレスを入力してください';
        }
        
        if ($requirePassword && empty($data['password'])) {
            $errors[] = 'パスワードを入力してください';
        }
        
        return $errors;
    }
}`}</code>
                </pre>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-700">
                  <strong>責務：</strong>リクエストの処理、入力のバリデーション、ModelとViewの調整、レスポンスの返却
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h4 className="text-xl mb-3 text-gray-900">MVCパターンの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>関心の分離：</strong>各コンポーネントが明確な役割を持ち、コードが整理される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>保守性の向上：</strong>変更が必要な箇所を特定しやすく、影響範囲が限定される</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>再利用性：</strong>Modelは複数のControllerから利用でき、Viewも再利用可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>テスト容易性：</strong>各コンポーネントを独立してテストできる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>チーム開発：</strong>役割分担がしやすく、並行開発が可能</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Laravelセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Zap className="text-red-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Laravel</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">世界で最も人気のあるPHPフレームワーク</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Laravelは、エレガントな構文と豊富な機能を持つPHPフレームワークです。
              Taylor Otwellによって2011年に作成され、開発者の生産性を重視した設計になっています。
              認証、ルーティング、セッション、キャッシング、データベース移行など、Webアプリケーション開発に必要な機能が標準で揃っています。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <Shield size={20} />
                  主な特徴
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Eloquent ORM - 直感的なデータベース操作</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Blade テンプレートエンジン</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Artisan コマンドラインツール</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>マイグレーションとシーディング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>ミドルウェアによる認証・認可</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Queueジョブとタスクスケジューリング</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <Box size={20} />
                  適している用途
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Webアプリケーション全般</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>RESTful API開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>SaaS製品</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>ECサイト・CMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>スタートアップのMVP開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>中規模〜大規模プロジェクト</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl mb-4 text-gray-900">Laravelのコード例</h4>
              
              <div className="space-y-4">
                {/* ルーティング */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">ルーティング（routes/web.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`<?php
use App\\Http\\Controllers\\UserController;

// 基本的なルーティング
Route::get('/', function () {
    return view('welcome');
});

// コントローラーを使用したルーティング
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);

// リソースルート（CRUD操作を自動生成）
Route::resource('posts', PostController::class);

// APIルート
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});`}</code>
                    </pre>
                  </div>
                </div>

                {/* Eloquent Model */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Eloquent Model（app/Models/User.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
    
    protected $hidden = ['password'];
    
    // リレーション: ユーザーは複数の投稿を持つ
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    // アクセサ: 名前を大文字で取得
    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }
}

// 使用例
$users = User::where('active', true)->get();
$user = User::find(1);
$user->posts; // リレーションの取得
User::create(['name' => '太郎', 'email' => 'taro@example.com']);`}</code>
                    </pre>
                  </div>
                </div>

                {/* Controller */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Controller（app/Http/Controllers/UserController.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`<?php
namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::paginate(10);
        return view('users.index', compact('users'));
    }
    
    public function show($id)
    {
        $user = User::findOrFail($id);
        return view('users.show', compact('user'));
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8'
        ]);
        
        $user = User::create($validated);
        
        return redirect()->route('users.show', $user->id)
            ->with('success', 'ユーザーを作成しました');
    }
}`}</code>
                    </pre>
                  </div>
                </div>

                {/* Blade View */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Blade View（resources/views/users/index.blade.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`@extends('layouts.app')

@section('title', 'ユーザー一覧')

@section('content')
    <h1>ユーザー一覧</h1>
    
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    
    @forelse($users as $user)
        <div class="user-card">
            <h3>{{ $user->name }}</h3>
            <p>{{ $user->email }}</p>
            <a href="{{ route('users.show', $user->id) }}">詳細</a>
        </div>
    @empty
        <p>ユーザーが見つかりません。</p>
    @endforelse
    
    {{ $users->links() }}
@endsection`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h4 className="text-xl mb-3 text-gray-900">Laravelのエコシステム</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-red-700 mb-2">公式パッケージ</p>
                  <ul className="space-y-1">
                    <li><strong>Laravel Breeze:</strong> シンプルな認証スターター</li>
                    <li><strong>Laravel Jetstream:</strong> 高機能な認証システム</li>
                    <li><strong>Laravel Sanctum:</strong> API認証</li>
                    <li><strong>Laravel Horizon:</strong> Queueモニタリング</li>
                    <li><strong>Laravel Telescope:</strong> デバッグアシスタント</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-2">学習リソース</p>
                  <ul className="space-y-1">
                    <li><strong>Laracasts:</strong> 動画学習プラットフォーム</li>
                    <li><strong>公式ドキュメント:</strong> 詳細で分かりやすい</li>
                    <li><strong>Laravel News:</strong> 最新情報とチュートリアル</li>
                    <li><strong>活発なコミュニティ:</strong> Stack Overflow等</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Symfonyセクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
              <Server className="text-white" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Symfony</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">エンタープライズグレードのPHPフレームワーク</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Symfonyは、大規模で複雑なWebアプリケーション開発に特化したフレームワークです。
              Fabien Potencierによって2005年に作成され、再利用可能なコンポーネントのセットとして設計されています。
              多くの有名プロジェクト（Drupal、Magento、Laravel自体もSymfonyコンポーネントを使用）で採用されており、
              エンタープライズ開発における信頼性と柔軟性で知られています。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-300">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Shield size={20} />
                  主な特徴
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>高度なコンポーネントアーキテクチャ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Doctrine ORM - 強力なデータベース抽象化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>Twig テンプレートエンジン</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>依存性注入コンテナ（DI Container）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>イベント駆動アーキテクチャ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>充実したテスト機能（PHPUnit統合）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 border border-gray-300">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Box size={20} />
                  適している用途
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>大規模エンタープライズアプリ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>複雑なビジネスロジックを持つシステム</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>長期間保守が必要なプロジェクト</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>高いカスタマイズ性が求められる案件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>マイクロサービスアーキテクチャ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>金融・医療系など堅牢性重視のシステム</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl mb-4 text-gray-900">Symfonyのコード例</h4>
              
              <div className="space-y-4">
                {/* Controller */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Controller（src/Controller/UserController.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`<?php
namespace App\\Controller;

use App\\Entity\\User;
use App\\Repository\\UserRepository;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\Routing\\Annotation\\Route;

class UserController extends AbstractController
{
    #[Route('/users', name: 'user_list')]
    public function index(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();
        
        return $this->render('user/index.html.twig', [
            'users' => $users,
        ]);
    }
    
    #[Route('/users/{id}', name: 'user_show')]
    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
    }
    
    #[Route('/users/create', name: 'user_create')]
    public function create(Request $request, UserRepository $userRepository): Response
    {
        if ($request->isMethod('POST')) {
            $user = new User();
            $user->setName($request->request->get('name'));
            $user->setEmail($request->request->get('email'));
            
            $userRepository->save($user, true);
            
            return $this->redirectToRoute('user_show', [
                'id' => $user->getId()
            ]);
        }
        
        return $this->render('user/create.html.twig');
    }
}`}</code>
                    </pre>
                  </div>
                </div>

                {/* Entity */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Entity（src/Entity/User.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`<?php
namespace App\\Entity;

use Doctrine\\ORM\\Mapping as ORM;
use Doctrine\\Common\\Collections\\ArrayCollection;

#[ORM\\Entity]
#[ORM\\Table(name: 'users')]
class User
{
    #[ORM\\Id]
    #[ORM\\GeneratedValue]
    #[ORM\\Column(type: 'integer')]
    private ?int $id = null;
    
    #[ORM\\Column(type: 'string', length: 255)]
    private string $name;
    
    #[ORM\\Column(type: 'string', length: 255, unique: true)]
    private string $email;
    
    #[ORM\\OneToMany(targetEntity: Post::class, mappedBy: 'user')]
    private $posts;
    
    public function __construct()
    {
        $this->posts = new ArrayCollection();
    }
    
    // Getter and Setter methods
    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getName(): string
    {
        return $this->name;
    }
    
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }
    
    public function getPosts(): Collection
    {
        return $this->posts;
    }
}`}</code>
                    </pre>
                  </div>
                </div>

                {/* Twig Template */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Twig Template（templates/user/index.html.twig）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`{% extends 'base.html.twig' %}

{% block title %}ユーザー一覧{% endblock %}

{% block body %}
    <h1>ユーザー一覧</h1>
    
    {% if users is empty %}
        <p>ユーザーが見つかりません。</p>
    {% else %}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名前</th>
                    <th>メールアドレス</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {% for user in users %}
                    <tr>
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>
                            <a href="{{ path('user_show', {id: user.id}) }}">詳細</a>
                        </td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    {% endif %}
    
    <a href="{{ path('user_create') }}">新規作成</a>
{% endblock %}`}</code>
                    </pre>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Service（src/Service/UserService.php）</p>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
                      <code>{`<?php
namespace App\\Service;

use App\\Entity\\User;
use App\\Repository\\UserRepository;
use Symfony\\Component\\PasswordHasher\\Hasher\\UserPasswordHasherInterface;

class UserService
{
    public function __construct(
        private UserRepository $userRepository,
        private UserPasswordHasherInterface $passwordHasher
    ) {}
    
    public function createUser(string $name, string $email, string $password): User
    {
        $user = new User();
        $user->setName($name);
        $user->setEmail($email);
        
        $hashedPassword = $this->passwordHasher->hashPassword(
            $user,
            $password
        );
        $user->setPassword($hashedPassword);
        
        $this->userRepository->save($user, true);
        
        return $user;
    }
    
    public function findActiveUsers(): array
    {
        return $this->userRepository->findBy(['active' => true]);
    }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-300">
              <h4 className="text-xl mb-3 text-gray-900">Symfonyの強み</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span><strong>長期サポート（LTS）版：</strong>3年間のバグ修正、4年間のセキュリティサポート</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span><strong>コンポーネント単位での利用：</strong>必要な部分だけを他のプロジェクトで使用可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span><strong>ベストプラクティス：</strong>SOLID原則に基づいた設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span><strong>Symfony Flex：</strong>依存関係管理の自動化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span><strong>充実したドキュメント：</strong>詳細で体系的な公式ドキュメント</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1">•</span>
                  <span><strong>Profiler：</strong>強力なデバッグツール（Symfony Profiler）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LaravelとSymfonyの比較 */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6 text-gray-900">LaravelとSymfonyの比較</h3>
          
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-900">比較項目</th>
                    <th className="px-6 py-4 text-left text-gray-900">Laravel</th>
                    <th className="px-6 py-4 text-left text-gray-900">Symfony</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">学習曲線</td>
                    <td className="px-6 py-4 text-gray-600">なだらか・初心者フレンドリー</td>
                    <td className="px-6 py-4 text-gray-600">やや急・中級者向け</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">開発速度</td>
                    <td className="px-6 py-4 text-gray-600">高速（規約重視）</td>
                    <td className="px-6 py-4 text-gray-600">やや遅い（設定重視）</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">柔軟性</td>
                    <td className="px-6 py-4 text-gray-600">高い</td>
                    <td className="px-6 py-4 text-gray-600">非常に高い</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">パフォーマンス</td>
                    <td className="px-6 py-4 text-gray-600">良好</td>
                    <td className="px-6 py-4 text-gray-600">非常に良好</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">コミュニティ</td>
                    <td className="px-6 py-4 text-gray-600">非常に活発</td>
                    <td className="px-6 py-4 text-gray-600">活発（企業利用が多い）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">ORM</td>
                    <td className="px-6 py-4 text-gray-600">Eloquent（シンプル）</td>
                    <td className="px-6 py-4 text-gray-600">Doctrine（高機能）</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">テンプレート</td>
                    <td className="px-6 py-4 text-gray-600">Blade</td>
                    <td className="px-6 py-4 text-gray-600">Twig</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">適用規模</td>
                    <td className="px-6 py-4 text-gray-600">小〜大規模</td>
                    <td className="px-6 py-4 text-gray-600">中〜超大規模</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">おすすめ用途</td>
                    <td className="px-6 py-4 text-gray-600">一般的なWebアプリ、API、SaaS</td>
                    <td className="px-6 py-4 text-gray-600">エンタープライズ、複雑なシステム</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">MVCパターンの理解</h4>
              <p>Model、View、Controllerの役割を理解し、関心の分離を実践することで、保守性の高いコードが書けるようになります。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Laravelの活用</h4>
              <p>開発者フレンドリーなLaravelは、迅速な開発とエレガントなコードを実現します。一般的なWebアプリケーション開発に最適です。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Symfonyの活用</h4>
              <p>エンタープライズグレードのSymfonyは、大規模で複雑なシステム開発に威力を発揮します。長期保守が必要なプロジェクトに最適です。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">フレームワークの選択</h4>
              <p>プロジェクトの規模、要件、チームのスキルレベルに応じて適切なフレームワークを選択することが重要です。</p>
            </div>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-purple-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            フレームワークの基礎を理解したら、実際にプロジェクトを作成して学びを深めましょう。
            認証システム、API開発、テスト駆動開発（TDD）、デプロイメント、パフォーマンス最適化など、
            より実践的なトピックに進んでいくことをおすすめします。
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
