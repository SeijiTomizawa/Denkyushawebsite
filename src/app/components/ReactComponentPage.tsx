import { Link } from 'react-router-dom';
import { ArrowLeft, Component, Code, Package } from 'lucide-react';

export default function ReactComponentPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/react" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Reactページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Component className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">React コンポーネント</h1>
          <p className="text-xl text-gray-600">
            コンポーネントはReactアプリケーションの基本的な構成要素です。
            UIを独立した再利用可能な部品に分割し、それぞれを個別に管理できます。
          </p>
        </div>

        {/* コンポーネントとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Component className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">コンポーネントとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              コンポーネントは、UIの一部を表すJavaScript関数またはクラスです。
              プロパティ（props）を受け取り、画面に表示するReact要素を返します。
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">コンポーネントの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>再利用性：</strong>同じコンポーネントを複数箇所で使える</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>保守性：</strong>小さな部品に分けることでコードが管理しやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>テスト容易性：</strong>独立したコンポーネントは単体テストが簡単</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>可読性：</strong>コードの意図が明確になる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 関数コンポーネント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Code className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">関数コンポーネント</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              関数コンポーネントは、最もシンプルなコンポーネントの形式です。
              JavaScriptの関数として定義され、JSXを返します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的な関数コンポーネント
function Welcome() {
  return <h1>Hello, React!</h1>;
}

// アロー関数での定義
const Greeting = () => {
  return <h1>こんにちは！</h1>;
};

// 1行で返す場合（括弧省略）
const SimpleButton = () => <button>クリック</button>;

// 複数行のJSXを返す場合
function Card() {
  return (
    <div className="card">
      <h2>カードタイトル</h2>
      <p>カードの内容</p>
    </div>
  );
}

// export default を使った定義
export default function App() {
  return (
    <div>
      <Welcome />
      <Greeting />
      <Card />
    </div>
  );
}

// 名前付きエクスポート
export function Header() {
  return <header>ヘッダー</header>;
}

export function Footer() {
  return <footer>フッター</footer>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Props */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Package className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Props（プロパティ）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Propsは、親コンポーネントから子コンポーネントへデータを渡すための仕組みです。
              コンポーネントを再利用可能にする重要な機能です。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// Propsを受け取るコンポーネント
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 分割代入を使用（推奨）
function Greeting({ name, age }) {
  return (
    <div>
      <p>名前: {name}</p>
      <p>年齢: {age}歳</p>
    </div>
  );
}

// デフォルト値の設定
function Button({ text = 'クリック', onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

// TypeScriptでの型定義
interface UserProps {
  name: string;
  age: number;
  email?: string; // オプショナル
}

function UserProfile({ name, age, email }: UserProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>年齢: {age}</p>
      {email && <p>メール: {email}</p>}
    </div>
  );
}

// 使用例
function App() {
  return (
    <div>
      <Welcome name="太郎" />
      <Greeting name="花子" age={25} />
      <Button text="送信" onClick={() => alert('クリック!')} />
      <UserProfile name="山田太郎" age={30} email="taro@example.com" />
    </div>
  );
}

// children propを使用
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// 使用例
<Card title="カードタイトル">
  <p>カードの内容</p>
  <button>詳細を見る</button>
</Card>

// スプレッド構文でpropsを渡す
const userProps = {
  name: '太郎',
  age: 30,
  email: 'taro@example.com'
};

<UserProfile {...userProps} />`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">Propsのルール</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>読み取り専用：</strong>コンポーネント内でpropsを変更してはいけない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>単一方向：</strong>親から子への一方向のデータフロー</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>任意の型：</strong>文字列、数値、オブジェクト、配列、関数など渡せる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* コンポーネントの構成 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Component className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">コンポーネントの構成</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// コンポーネントのネスト
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function UserCard({ user }) {
  return (
    <div className="user-card">
      <Avatar src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// 条件付きレンダリング
function Greeting({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// 三項演算子を使用
function StatusMessage({ isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span className="online">オンライン</span>
      ) : (
        <span className="offline">オフライン</span>
      )}
    </div>
  );
}

// && 演算子を使用
function Notification({ hasUnread, count }) {
  return (
    <div>
      通知
      {hasUnread && <span className="badge">{count}</span>}
    </div>
  );
}

// リストのレンダリング
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// フラグメント
import { Fragment } from 'react';

function Table() {
  return (
    <table>
      <tbody>
        {/* Fragment を使用 */}
        <Fragment>
          <tr><td>行1</td></tr>
          <tr><td>行2</td></tr>
        </Fragment>
        
        {/* 短縮記法 */}
        <>
          <tr><td>行3</td></tr>
          <tr><td>行4</td></tr>
        </>
      </tbody>
    </table>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* イベント処理 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Code className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">イベント処理</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// クリックイベント
function Button() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };
  
  return <button onClick={handleClick}>クリック</button>;
}

// インラインで定義
function InlineButton() {
  return (
    <button onClick={() => console.log('クリック!')}>
      クリック
    </button>
  );
}

// 引数を渡す
function ListItem({ id, name, onDelete }) {
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => onDelete(id)}>削除</button>
    </div>
  );
}

// フォームイベント
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルト動作を防ぐ
    console.log('フォームが送信されました');
  };
  
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">送信</button>
    </form>
  );
}

// 複数のイベントハンドラー
function MultiEventButton() {
  const handleMouseEnter = () => console.log('マウスが入った');
  const handleMouseLeave = () => console.log('マウスが出た');
  const handleClick = () => console.log('クリックされた');
  
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      ホバーまたはクリック
    </button>
  );
}

// イベントオブジェクトの使用
function Input() {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enterが押されました');
    }
  };
  
  return <input type="text" onKeyDown={handleKeyDown} />;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* コンポーネントの設計パターン */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Package className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">コンポーネントの設計パターン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">1. プレゼンテーショナルコンポーネント</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 見た目だけを担当するコンポーネント
function Button({ text, onClick, variant = 'primary' }) {
  const baseClass = 'px-4 py-2 rounded';
  const variantClass = variant === 'primary' 
    ? 'bg-blue-600 text-white' 
    : 'bg-gray-200 text-gray-800';
  
  return (
    <button 
      className={\`\${baseClass} \${variantClass}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">2. コンテナコンポーネント</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// ロジックを担当するコンポーネント
import { useState, useEffect } from 'react';

function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  return <UserList users={users} />;
}

// プレゼンテーショナルコンポーネント
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">3. 高階コンポーネント（HOC）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// コンポーネントを受け取り、新しいコンポーネントを返す
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>読み込み中...</div>;
    }
    return <Component {...props} />;
  };
}

// 使用例
const UserListWithLoading = withLoading(UserList);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  
  return (
    <UserListWithLoading 
      isLoading={isLoading} 
      users={users} 
    />
  );
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">4. Render Props</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 関数をpropsとして受け取るパターン
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// 使用例
function App() {
  return (
    <MouseTracker 
      render={({ x, y }) => (
        <p>マウス位置: {x}, {y}</p>
      )}
    />
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ベストプラクティス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Component className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ベストプラクティス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">1.</span>
                  <div>
                    <strong>単一責任の原則：</strong>
                    <p className="mt-1">1つのコンポーネントは1つの役割だけを持つ</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">2.</span>
                  <div>
                    <strong>小さく保つ：</strong>
                    <p className="mt-1">コンポーネントは100行以内を目安に、大きくなったら分割</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">3.</span>
                  <div>
                    <strong>命名規則：</strong>
                    <p className="mt-1">コンポーネント名はPascalCase（例: UserProfile）</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">4.</span>
                  <div>
                    <strong>propsの検証：</strong>
                    <p className="mt-1">TypeScriptやPropTypesで型を定義</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">5.</span>
                  <div>
                    <strong>key属性：</strong>
                    <p className="mt-1">リストレンダリング時は必ずユニークなkeyを指定</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">6.</span>
                  <div>
                    <strong>ファイル構成：</strong>
                    <p className="mt-1">1ファイル1コンポーネントを基本とする</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Reactコンポーネントは、UIを独立した再利用可能な部品に分割するための仕組みです。
              関数コンポーネントを基本とし、propsを使ってデータを受け渡します。
            </p>
            <p>
              コンポーネントは小さく保ち、単一責任の原則に従って設計することで、
              保守性の高いアプリケーションを構築できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            コンポーネントを理解したら、次はHooksで状態管理を学びましょう！
          </p>
          <Link 
            to="/study/react/hooks"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Hooksを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
