import { Link } from 'react-router-dom';
import { ArrowLeft, FileCode, Code } from 'lucide-react';

export default function ReactJsxPage() {
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
          <div className="w-20 h-20 bg-sky-600 rounded-2xl flex items-center justify-center mb-6">
            <FileCode className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">JSX</h1>
          <p className="text-xl text-gray-600">
            JSX（JavaScript XML）は、JavaScriptの中にHTMLのような構文を書くことができるReactの拡張構文です。
            UIの構造を直感的に記述でき、JavaScriptの全機能を活用できます。
          </p>
        </div>

        {/* JSXとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">JSXとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              JSXは、JavaScriptの中にマークアップを書くための構文拡張です。
              HTMLに似ていますが、実際にはJavaScriptのオブジェクトにコンパイルされます。
            </p>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200 mb-6">
              <h4 className="text-xl mb-3 text-gray-900">JSXの特徴</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">•</span>
                  <span><strong>HTMLライクな構文：</strong>見た目はHTMLに似ているが、実際はJavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">•</span>
                  <span><strong>JavaScriptの全機能：</strong>変数、式、関数などを自由に使える</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">•</span>
                  <span><strong>型安全：</strong>TypeScriptと組み合わせて型チェックできる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">•</span>
                  <span><strong>コンパイル：</strong>Babelなどでピュアなjavascriptに変換される</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`// JSXの例
const element = <h1>Hello, World!</h1>;

// コンパイル後のJavaScript
const element = React.createElement('h1', null, 'Hello, World!');

// より複雑な例
const user = { name: '太郎', age: 25 };
const greeting = (
  <div>
    <h1>こんにちは、{user.name}さん</h1>
    <p>年齢: {user.age}歳</p>
  </div>
);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 基本構文 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本構文</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 単一の要素
const element = <h1>タイトル</h1>;

// 複数行の場合は括弧で囲む
const component = (
  <div>
    <h1>タイトル</h1>
    <p>説明文</p>
  </div>
);

// 自己クローズタグ
const image = <img src="photo.jpg" alt="写真" />;
const input = <input type="text" />;
const lineBreak = <br />;

// ネストした要素
const card = (
  <div className="card">
    <div className="card-header">
      <h2>カードタイトル</h2>
    </div>
    <div className="card-body">
      <p>カードの内容</p>
    </div>
    <div className="card-footer">
      <button>詳細を見る</button>
    </div>
  </div>
);

// コンポーネントの使用
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* JavaScriptの埋め込み */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">JavaScriptの埋め込み</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              中括弧 {`{}`} を使って、JSX内にJavaScriptの式を埋め込むことができます。
            </p>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 変数の埋め込み
const name = '太郎';
const element = <h1>こんにちは、{name}さん</h1>;

// 式の埋め込み
const price = 1000;
const tax = 0.1;
const total = <p>合計: {price * (1 + tax)}円</p>;

// 関数の呼び出し
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = { firstName: '太郎', lastName: '山田' };
const greeting = <h1>Hello, {formatName(user)}</h1>;

// 三項演算子
const isLoggedIn = true;
const message = (
  <div>
    {isLoggedIn ? 'ログイン中' : 'ログアウト中'}
  </div>
);

// 論理演算子
const unreadCount = 5;
const notification = (
  <div>
    通知
    {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
  </div>
);

// オブジェクトのプロパティ
const product = {
  name: 'ノートPC',
  price: 100000,
  inStock: true
};

const productCard = (
  <div>
    <h2>{product.name}</h2>
    <p>価格: {product.price.toLocaleString()}円</p>
    <p>{product.inStock ? '在庫あり' : '在庫なし'}</p>
  </div>
);

// 配列のメソッド
const numbers = [1, 2, 3, 4, 5];
const sum = <p>合計: {numbers.reduce((a, b) => a + b, 0)}</p>;

// テンプレートリテラル
const username = '太郎';
const greeting = <h1>{\`ようこそ、\${username}さん！\`}</h1>;

// Date オブジェクト
const now = new Date();
const datetime = (
  <p>
    現在時刻: {now.toLocaleString('ja-JP')}
  </p>
);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 属性の指定 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">属性の指定</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              JSXでは、HTMLの属性名とは異なる名前を使う場合があります。
              特にclassはclassName、forはhtmlForとなります。
            </p>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 文字列リテラル
const link = <a href="https://example.com">リンク</a>;

// JavaScriptの式
const imageUrl = '/images/photo.jpg';
const image = <img src={imageUrl} alt="写真" />;

// className（HTMLのclassに相当）
const button = <button className="btn btn-primary">クリック</button>;

// 複数のクラス
const card = <div className="card shadow-lg rounded-xl">カード</div>;

// 動的なクラス
const isActive = true;
const navItem = (
  <li className={isActive ? 'nav-item active' : 'nav-item'}>
    メニュー
  </li>
);

// テンプレートリテラルでクラス名を組み立て
const size = 'large';
const color = 'blue';
const button = (
  <button className={\`btn btn-\${size} btn-\${color}\`}>
    ボタン
  </button>
);

// htmlFor（HTMLのforに相当）
const formGroup = (
  <div>
    <label htmlFor="email">メールアドレス</label>
    <input type="email" id="email" />
  </div>
);

// style属性（オブジェクトで指定）
const div = (
  <div style={{ 
    color: 'red', 
    backgroundColor: 'yellow',
    fontSize: '20px',
    padding: '10px'
  }}>
    スタイル付き
  </div>
);

// 動的なスタイル
const color = 'blue';
const size = 20;
const text = (
  <p style={{ 
    color: color,
    fontSize: \`\${size}px\`
  }}>
    テキスト
  </p>
);

// data属性
const element = <div data-id="123" data-type="user">データ</div>;

// aria属性
const button = (
  <button aria-label="閉じる" aria-expanded="false">
    ×
  </button>
);

// 真偽値の属性
const input1 = <input type="checkbox" checked={true} />;
const input2 = <input type="text" disabled={false} />;
const input3 = <input type="text" readOnly />;

// イベントハンドラー（キャメルケース）
const handleClick = () => console.log('クリック');
const button = <button onClick={handleClick}>クリック</button>;

// スプレッド構文で複数の属性を渡す
const props = {
  className: 'btn',
  type: 'submit',
  disabled: false
};
const button = <button {...props}>送信</button>;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* JSXとHTMLの違い */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">JSXとHTMLの違い</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 1. classNameを使う（classではない）
// ❌ HTML
<div class="container">...</div>

// ✅ JSX
<div className="container">...</div>

// 2. htmlForを使う（forではない）
// ❌ HTML
<label for="email">メール</label>

// ✅ JSX
<label htmlFor="email">メール</label>

// 3. styleはオブジェクト
// ❌ HTML
<div style="color: red; font-size: 20px;">テキスト</div>

// ✅ JSX
<div style={{ color: 'red', fontSize: '20px' }}>テキスト</div>

// 4. 自己クローズタグは必ず閉じる
// ❌ HTML（閉じなくてもOK）
<input type="text">
<br>
<img src="photo.jpg">

// ✅ JSX（必ず閉じる）
<input type="text" />
<br />
<img src="photo.jpg" />

// 5. 属性名はキャメルケース
// ❌ HTML
<button onclick="handleClick()">クリック</button>
<div tabindex="0">フォーカス可能</div>

// ✅ JSX
<button onClick={handleClick}>クリック</button>
<div tabIndex={0}>フォーカス可能</div>

// 6. 真偽値の属性
// ❌ HTML
<input type="checkbox" checked="checked">
<input type="text" disabled="disabled">

// ✅ JSX
<input type="checkbox" checked={true} />
<input type="text" disabled />

// 7. コメントの書き方
// ❌ HTML
<!-- これはHTMLのコメント -->

// ✅ JSX
{/* これはJSXのコメント */}

// 8. 予約語との衝突を避ける
// ❌ HTML
<label for="input">ラベル</label>

// ✅ JSX（forは予約語なのでhtmlForを使う）
<label htmlFor="input">ラベル</label>

// 9. 小文字のタグはHTML要素、大文字はコンポーネント
const div = <div>HTML要素</div>;
const Component = <MyComponent />; // カスタムコンポーネント

// 10. 必ず1つのルート要素
// ❌ 複数のルート要素
return (
  <h1>タイトル</h1>
  <p>説明</p>
);

// ✅ 1つのルート要素で囲む
return (
  <div>
    <h1>タイトル</h1>
    <p>説明</p>
  </div>
);

// または Fragment を使う
return (
  <>
    <h1>タイトル</h1>
    <p>説明</p>
  </>
);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 条件付きレンダリング */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">条件付きレンダリング</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 1. if文を使う方法
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>おかえりなさい！</h1>;
  }
  return <h1>ログインしてください</h1>;
}

// 2. 三項演算子
function UserStatus({ isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span className="status online">オンライン</span>
      ) : (
        <span className="status offline">オフライン</span>
      )}
    </div>
  );
}

// 3. && 演算子（条件がtrueの時のみ表示）
function Notification({ hasUnread, count }) {
  return (
    <div>
      通知
      {hasUnread && <span className="badge">{count}</span>}
    </div>
  );
}

// 4. 論理OR演算子（デフォルト値）
function UserName({ name }) {
  return <h1>{name || 'ゲスト'}</h1>;
}

// 5. Nullish Coalescing（??）
function DisplayValue({ value }) {
  return <p>{value ?? 'デフォルト値'}</p>;
}

// 6. 即座に実行される関数式（IIFE）
function ComplexCondition({ status }) {
  return (
    <div>
      {(() => {
        switch (status) {
          case 'loading':
            return <Spinner />;
          case 'error':
            return <Error />;
          case 'success':
            return <Content />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

// 7. 早期リターン
function UserProfile({ user }) {
  if (!user) {
    return <div>ユーザーが見つかりません</div>;
  }
  
  if (user.isBlocked) {
    return <div>このユーザーはブロックされています</div>;
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}

// 8. 変数に代入
function TodoItem({ todo }) {
  let statusIcon;
  
  if (todo.completed) {
    statusIcon = <CheckIcon />;
  } else if (todo.inProgress) {
    statusIcon = <ClockIcon />;
  } else {
    statusIcon = <CircleIcon />;
  }
  
  return (
    <div>
      {statusIcon}
      <span>{todo.text}</span>
    </div>
  );
}

// 9. 複数条件の組み合わせ
function AccessControl({ user, isPremium, isAdmin }) {
  return (
    <div>
      {user && isPremium && (
        <PremiumContent />
      )}
      
      {user && isAdmin && (
        <AdminPanel />
      )}
      
      {!user && (
        <LoginPrompt />
      )}
    </div>
  );
}

// 10. オブジェクトマッピング
function StatusBadge({ status }) {
  const statusConfig = {
    pending: { text: '保留中', color: 'yellow' },
    approved: { text: '承認済み', color: 'green' },
    rejected: { text: '却下', color: 'red' }
  };
  
  const config = statusConfig[status];
  
  return (
    <span className={\`badge badge-\${config.color}\`}>
      {config.text}
    </span>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* リストのレンダリング */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">リストのレンダリング</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なリスト
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}

// オブジェクトの配列
function UserList() {
  const users = [
    { id: 1, name: '太郎' },
    { id: 2, name: '花子' },
    { id: 3, name: '次郎' }
  ];
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// コンポーネントのリスト
function TodoList({ todos }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// インデックスをkeyに使う（推奨されない）
function SimpleList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// フィルタリングしたリスト
function ActiveTodos({ todos }) {
  return (
    <ul>
      {todos
        .filter(todo => !todo.completed)
        .map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
    </ul>
  );
}

// ソートしたリスト
function SortedList({ items }) {
  return (
    <ul>
      {items
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
    </ul>
  );
}

// ネストしたリスト
function CategoryList({ categories }) {
  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// 変数に代入してから使用
function ProductGrid({ products }) {
  const productItems = products.map(product => (
    <ProductCard key={product.id} product={product} />
  ));
  
  return <div className="grid">{productItems}</div>;
}

// 条件付きリスト
function ConditionalList({ items, showAll }) {
  const displayItems = showAll ? items : items.slice(0, 5);
  
  return (
    <ul>
      {displayItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// key属性の重要性
// ❌ 悪い例：keyがない
<ul>
  {items.map(item => <li>{item}</li>)}
</ul>

// ❌ 悪い例：インデックスをkeyに使う（並び替えや削除がある場合）
<ul>
  {items.map((item, index) => <li key={index}>{item}</li>)}
</ul>

// ✅ 良い例：一意のIDをkeyに使う
<ul>
  {items.map(item => <li key={item.id}>{item.name}</li>)}
</ul>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* フラグメント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">フラグメント</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              フラグメントを使うと、余分なDOMノードを追加せずに複数の要素をグループ化できます。
            </p>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { Fragment } from 'react';

// 短縮記法（推奨）
function Table() {
  return (
    <table>
      <tbody>
        <>
          <tr><td>行1</td></tr>
          <tr><td>行2</td></tr>
          <tr><td>行3</td></tr>
        </>
      </tbody>
    </table>
  );
}

// Fragment コンポーネント
function List() {
  return (
    <Fragment>
      <li>アイテム1</li>
      <li>アイテム2</li>
      <li>アイテム3</li>
    </Fragment>
  );
}

// key属性が必要な場合はFragmentを使う
function Glossary({ items }) {
  return (
    <dl>
      {items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

// 不要なdivを避ける
// ❌ 悪い例：不要なdiv
function BadExample() {
  return (
    <div>
      <h1>タイトル</h1>
      <p>段落</p>
    </div>
  );
}

// ✅ 良い例：Fragmentを使う
function GoodExample() {
  return (
    <>
      <h1>タイトル</h1>
      <p>段落</p>
    </>
  );
}

// コンポーネントから複数の要素を返す
function Columns() {
  return (
    <>
      <td>カラム1</td>
      <td>カラム2</td>
      <td>カラム3</td>
    </>
  );
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* スタイリング */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <Code className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">スタイリング</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 1. インラインスタイル
function InlineStyle() {
  return (
    <div style={{ 
      color: 'blue',
      fontSize: '20px',
      backgroundColor: 'lightgray',
      padding: '10px',
      borderRadius: '5px'
    }}>
      インラインスタイル
    </div>
  );
}

// 2. スタイルオブジェクトを変数に
function StyleObject() {
  const divStyle = {
    color: 'red',
    fontSize: '16px',
    fontWeight: 'bold'
  };
  
  return <div style={divStyle}>スタイル付き</div>;
}

// 3. 動的なスタイル
function DynamicStyle({ isActive }) {
  const style = {
    color: isActive ? 'green' : 'gray',
    fontWeight: isActive ? 'bold' : 'normal'
  };
  
  return <div style={style}>ステータス</div>;
}

// 4. className（CSS クラス）
function ClassNameExample() {
  return (
    <div className="container">
      <h1 className="title">タイトル</h1>
      <p className="text-gray-700">説明文</p>
    </div>
  );
}

// 5. 条件付きクラス
function ConditionalClass({ isActive, isDisabled }) {
  const className = \`btn \${isActive ? 'active' : ''} \${isDisabled ? 'disabled' : ''}\`;
  
  return <button className={className}>ボタン</button>;
}

// 6. 配列でクラスを組み立て
function ArrayClass({ variant, size }) {
  const classes = [
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`
  ].join(' ');
  
  return <button className={classes}>ボタン</button>;
}

// 7. Tailwind CSS
function TailwindExample() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        タイトル
      </h1>
      <p className="text-gray-600 leading-relaxed">
        説明文
      </p>
    </div>
  );
}

// 8. CSS Modules（別ファイル）
import styles from './Button.module.css';

function CSSModules() {
  return (
    <button className={styles.button}>
      ボタン
    </button>
  );
}

// 9. clsx / classnames ライブラリ
import clsx from 'clsx';

function ClsxExample({ isActive, size }) {
  return (
    <button className={clsx(
      'btn',
      {
        'btn-active': isActive,
        'btn-disabled': !isActive
      },
      \`btn-\${size}\`
    )}>
      ボタン
    </button>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ベストプラクティス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-sky-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ベストプラクティス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">1.</span>
                  <div>
                    <strong>コンポーネントは大文字で始める：</strong>
                    <p className="mt-1">小文字で始まるとHTML要素として扱われる</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">2.</span>
                  <div>
                    <strong>1つのルート要素：</strong>
                    <p className="mt-1">複数の要素を返す場合はFragmentで囲む</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">3.</span>
                  <div>
                    <strong>自己クローズタグは閉じる：</strong>
                    <p className="mt-1">{'<img />'}, {'<input />'}, {'<br />'} など必ず閉じる</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">4.</span>
                  <div>
                    <strong>key属性を正しく使う：</strong>
                    <p className="mt-1">リストレンダリング時は一意のkeyを指定</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">5.</span>
                  <div>
                    <strong>属性名はキャメルケース：</strong>
                    <p className="mt-1">onClick, onChange, htmlFor など</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">6.</span>
                  <div>
                    <strong>コメントは中括弧で：</strong>
                    <p className="mt-1">{`{/* コメント */}`} の形式で書く</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">7.</span>
                  <div>
                    <strong>複雑なロジックは外に出す：</strong>
                    <p className="mt-1">JSX内はシンプルに保ち、ロジックは関数に分離</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1">8.</span>
                  <div>
                    <strong>可読性を優先：</strong>
                    <p className="mt-1">適切にインデントし、改行を入れる</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* よくある間違い */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Code className="text-red-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">よくある間違い</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// ❌ 間違い1：classを使う
<div class="container">...</div>

// ✅ 正しい：classNameを使う
<div className="container">...</div>

// ❌ 間違い2：自己クローズタグを閉じない
<img src="photo.jpg">
<input type="text">

// ✅ 正しい：必ず閉じる
<img src="photo.jpg" />
<input type="text" />

// ❌ 間違い3：複数のルート要素
return (
  <h1>タイトル</h1>
  <p>説明</p>
);

// ✅ 正しい：1つのルート要素で囲む
return (
  <>
    <h1>タイトル</h1>
    <p>説明</p>
  </>
);

// ❌ 間違い4：HTMLのコメントを使う
<div>
  <!-- これは表示されません -->
</div>

// ✅ 正しい：JSXのコメントを使う
<div>
  {/* これがJSXのコメント */}
</div>

// ❌ 間違い5：文字列以外の属性に引用符
<img width="100" /> // "100"は文字列
<div style="color: red" />

// ✅ 正しい：数値やオブジェクトは中括弧
<img width={100} /> // 100は数値
<div style={{ color: 'red' }} />

// ❌ 間違い6：forを使う
<label for="input">ラベル</label>

// ✅ 正しい：htmlForを使う
<label htmlFor="input">ラベル</label>

// ❌ 間違い7：onclickを使う（小文字）
<button onclick={handleClick}>クリック</button>

// ✅ 正しい：onClickを使う（キャメルケース）
<button onClick={handleClick}>クリ��ク</button>

// ❌ 間違い8：keyがない、またはインデックスを使う
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ✅ 正しい：一意のIDをkeyに使う
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-sky-50 rounded-2xl p-8 border border-sky-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              JSXは、JavaScriptの中にマークアップを書くためのReactの構文拡張です。
              HTMLに似ていますが、className、htmlFor、キャメルケースの属性名など、いくつかの違いがあります。
            </p>
            <p>
              中括弧を使ってJavaScriptの式を埋め込むことができ、
              条件付きレンダリングやリストのレンダリングなど、動的なUIを簡単に構築できます。
            </p>
            <p>
              JSXを正しく理解し、ベストプラクティスに従うことで、
              読みやすく保守しやすいReactコンポーネントを作成できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-sky-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">おめでとうございます！</h3>
          <p className="mb-4">
            Reactの基本的なトピックをすべて学習しました。次は実際にアプリケーションを構築して、学んだ知識を実践しましょう！
          </p>
          <Link 
            to="/study/react"
            className="inline-flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
          >
            Reactページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
