import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Code } from 'lucide-react';

export default function ReactHooksPage() {
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
          <div className="w-20 h-20 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">React Hooks</h1>
          <p className="text-xl text-gray-600">
            HooksはReact 16.8で導入された機能で、関数コンポーネントで状態管理やライフサイクルメソッドを使えるようにします。
            クラスコンポーネントを書かずに、Reactのすべての機能を利用できます。
          </p>
        </div>

        {/* Hooksとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Zap className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Hooksとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hooksは、Reactの機能を「フック（hook）」する特別な関数です。
              関数コンポーネント内で状態やライフサイクルを扱うことができます。
            </p>

            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <h4 className="text-xl mb-3 text-gray-900">Hooksの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>コードの再利用：</strong>ロジックを簡単に共有できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>シンプルな記述：</strong>クラスコンポーネントより簡潔</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>関連ロジックをまとめる：</strong>useEffectで関連する処理を一箇所に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>thisの複雑さを回避：</strong>クラスのthisバインディング不要</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* useState */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Code className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">useState（状態管理）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              useStateは、関数コンポーネントで状態を管理するためのHookです。
              状態の値と、その値を更新する関数を返します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useState } from 'react';

// 基本的な使い方
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>リセット</button>
    </div>
  );
}

// 複数の状態を管理
function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  
  return (
    <form>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))} 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
    </form>
  );
}

// オブジェクトで状態を管理
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });
  
  const handleChange = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <form>
      <input 
        value={user.name} 
        onChange={(e) => handleChange('name', e.target.value)} 
      />
      <input 
        type="number"
        value={user.age} 
        onChange={(e) => handleChange('age', Number(e.target.value))} 
      />
    </form>
  );
}

// 配列の状態管理
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 関数による初期化（重い計算の場合）
function ExpensiveComponent() {
  const [data, setData] = useState(() => {
    // この関数は初回レンダリング時のみ実行される
    const initialData = expensiveCalculation();
    return initialData;
  });
  
  return <div>{data}</div>;
}

// 前の状態に基づいて更新
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    // 前の状態を使用（推奨）
    setCount(prev => prev + 1);
  };
  
  const incrementMultiple = () => {
    // 複数回更新する場合は関数形式を使う
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={incrementMultiple}>+3</button>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* useEffect */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Code className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">useEffect（副作用）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              useEffectは、副作用（データ取得、購読、DOM操作など）を実行するためのHookです。
              コンポーネントのレンダリング後に実行されます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useState, useEffect } from 'react';

// 基本的な使い方（毎回実行）
function Component() {
  useEffect(() => {
    console.log('レンダリングされました');
  });
  
  return <div>コンポーネン��</div>;
}

// マウント時のみ実行（空の依存配列）
function MountComponent() {
  useEffect(() => {
    console.log('マウントされました');
    // 初回のみ実行される
  }, []);
  
  return <div>コンポーネント</div>;
}

// 特定の値が変わった時のみ実行
function WatchComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('countが変わりました:', count);
  }, [count]); // countが変わった時のみ実行
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

// クリーンアップ関数
function TimerComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    // クリーンアップ関数（アンマウント時に実行）
    return () => {
      clearInterval(timer);
      console.log('タイマーをクリア');
    };
  }, []);
  
  return <div>経過時間: {count}秒</div>;
}

// データ取得
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // ローディング開始
    setLoading(true);
    setError(null);
    
    // データ取得
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]); // userIdが変わったら再取得
  
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  if (!user) return <div>ユーザーが見つかりません</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// イベントリスナーの登録
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // クリーンアップでリスナーを削除
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div>{size.width} x {size.height}</div>;
}

// 複数のuseEffectを使い分ける
function MultiEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // countの変更を監視
  useEffect(() => {
    document.title = \`カウント: \${count}\`;
  }, [count]);
  
  // nameの変更を監視
  useEffect(() => {
    console.log('名前が変わりました:', name);
  }, [name]);
  
  // マウント時のみ実行
  useEffect(() => {
    console.log('コンポーネントがマウントされました');
  }, []);
  
  return <div>...</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* useContext */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Code className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">useContext（コンテキスト）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              useContextは、コンテキストの値を取得するためのHookです。
              propsのバケツリレーを避けて、深い階層でもデータを共有できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { createContext, useContext, useState } from 'react';

// コンテキストを作成
const ThemeContext = createContext();

// プロバイダーコンポーネント
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// コンテキストを使用
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      style={{ 
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'ダーク' : 'ライト'}モードに切り替え
    </button>
  );
}

// アプリ全体
function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

// ユーザー認証の例
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (userData) => {
    setUser(userData);
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function UserInfo() {
  const { user, logout } = useContext(AuthContext);
  
  if (!user) {
    return <div>ログインしていません</div>;
  }
  
  return (
    <div>
      <p>ようこそ、{user.name}さん</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}

// カスタムフックで簡潔に
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthはAuthProvider内で使用してください');
  }
  return context;
}

function Component() {
  const { user, login, logout } = useAuth();
  // ...
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* useRef */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Code className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">useRef（参照）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              useRefは、レンダリング間で値を保持するためのHookです。
              DOM要素への参照や、再レンダリングを引き起こさない値の保存に使います。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useRef, useEffect } from 'react';

// DOM要素への参照
function FocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    // マウント時にフォーカス
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} type="text" />;
}

// 前の値を保存
function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  return (
    <div>
      <p>現在: {count}</p>
      <p>前回: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

// タイマーの参照を保存
function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  
  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
  };
  
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  return (
    <div>
      <p>{count}秒</p>
      <button onClick={start}>開始</button>
      <button onClick={stop}>停止</button>
    </div>
  );
}

// スクロール位置の取得
function ScrollComponent() {
  const divRef = useRef(null);
  
  const scrollToTop = () => {
    divRef.current.scrollTop = 0;
  };
  
  return (
    <div>
      <div ref={divRef} style={{ height: 300, overflow: 'auto' }}>
        {/* 長いコンテンツ */}
      </div>
      <button onClick={scrollToTop}>トップへ</button>
    </div>
  );
}

// 再レンダリングを引き起こさない値の保存
function RenderCount() {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current += 1;
  });
  
  return <div>レンダリング回数: {renderCount.current}</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* useMemoとuseCallback */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Code className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">useMemo と useCallback</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">useMemo（値のメモ化）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useMemo, useState } from 'react';

// 重い計算をメモ化
function ExpensiveComponent({ numbers }) {
  const [count, setCount] = useState(0);
  
  // numbersが変わらない限り、再計算しない
  const sum = useMemo(() => {
    console.log('計算中...');
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);
  
  return (
    <div>
      <p>合計: {sum}</p>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

// フィルタリング結果をメモ化
function FilteredList({ items, filterText }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [items, filterText]);
  
  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// ソート結果をメモ化
function SortedList({ items, sortKey }) {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
  }, [items, sortKey]);
  
  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">useCallback（関数のメモ化）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useCallback, memo } from 'react';

// 子コンポーネント（メモ化）
const Button = memo(({ onClick, children }) => {
  console.log('Buttonがレンダリングされました');
  return <button onClick={onClick}>{children}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  // 関数をメモ化（countが変わった時のみ再作成）
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // 依存配列が空なので、一度だけ作成
  
  return (
    <div>
      <p>{count}</p>
      <Button onClick={increment}>+1</Button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
  // textが変わってもButtonは再レンダリングされない
}

// 子コンポーネントにコールバックを渡す
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  // 削除関数をメモ化
  const removeTodo = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []); // todosを依存配列に入れない（関数形式でsetTodosを使うため）
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onRemove={removeTodo} 
        />
      ))}
    </ul>
  );
}

// イベントハンドラーをメモ化
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleChange = useCallback((field) => {
    return (e) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
  }, []);
  
  return (
    <form>
      <input value={formData.name} onChange={handleChange('name')} />
      <input value={formData.email} onChange={handleChange('email')} />
    </form>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* useReducer */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Code className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">useReducer（複雑な状態管理）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              useReducerは、複雑な状態ロジックを管理するためのHookです。
              Reduxのようなパターンで、状態とアクションを明確に分離できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useReducer } from 'react';

// カウンターの例
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>リセット</button>
    </div>
  );
}

// Todoリストの例
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    case 'clear_completed':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');
  
  const handleAdd = () => {
    dispatch({ type: 'add', payload: input });
    setInput('');
  };
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
            />
            {todo.text}
            <button onClick={() => dispatch({ type: 'remove', payload: todo.id })}>
              削除
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'clear_completed' })}>
        完了済みを削除
      </button>
    </div>
  );
}

// フォームの例
function formReducer(state, action) {
  switch (action.type) {
    case 'update_field':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'reset':
      return action.payload;
    default:
      return state;
  }
}

function Form() {
  const initialState = { name: '', email: '', message: '' };
  const [formData, dispatch] = useReducer(formReducer, initialState);
  
  const handleChange = (field) => (e) => {
    dispatch({ 
      type: 'update_field', 
      field, 
      value: e.target.value 
    });
  };
  
  const handleReset = () => {
    dispatch({ type: 'reset', payload: initialState });
  };
  
  return (
    <form>
      <input value={formData.name} onChange={handleChange('name')} />
      <input value={formData.email} onChange={handleChange('email')} />
      <textarea value={formData.message} onChange={handleChange('message')} />
      <button type="button" onClick={handleReset}>リセット</button>
    </form>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* カスタムHooks */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Zap className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">カスタムHooks</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              カスタムHooksは、ロジックを再利用するための独自のHookです。
              "use"で始まる名前の関数として作成します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// フォーム入力の管理
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const reset = () => {
    setValue(initialValue);
  };
  
  return {
    value,
    onChange: handleChange,
    reset
  };
}

// 使用例
function Form() {
  const name = useInput('');
  const email = useInput('');
  
  return (
    <form>
      <input type="text" {...name} />
      <input type="email" {...email} />
      <button type="button" onClick={() => {
        name.reset();
        email.reset();
      }}>
        リセット
      </button>
    </form>
  );
}

// データ取得のカスタムHook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// 使用例
function UserList() {
  const { data, loading, error } = useFetch('/api/users');
  
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// ローカルストレージの同期
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// 使用例
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div>
      <p>現在のテーマ: {theme}</p>
      <button onClick={() => setTheme('light')}>ライト</button>
      <button onClick={() => setTheme('dark')}>ダーク</button>
    </div>
  );
}

// ウィンドウサイズの取得
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// 使用例
function ResponsiveComponent() {
  const { width } = useWindowSize();
  
  return (
    <div>
      {width < 768 ? 'モバイル表示' : 'デスクトップ表示'}
    </div>
  );
}

// タイマーのカスタムHook
function useInterval(callback, delay) {
  const savedCallback = useRef();
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  
  useEffect(() => {
    if (delay !== null) {
      const timer = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
}

// 使用例
function Clock() {
  const [time, setTime] = useState(new Date());
  
  useInterval(() => {
    setTime(new Date());
  }, 1000);
  
  return <div>{time.toLocaleTimeString()}</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Hooksのルール */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Zap className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Hooksのルール</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200 mb-6">
              <h4 className="text-xl mb-3 text-gray-900">必ず守るべきルール</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">1.</span>
                  <div>
                    <strong>トップレベルで呼ぶ：</strong>
                    <p className="mt-1">ループ、条件分岐、ネストした関数の中でHooksを呼ばない</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">2.</span>
                  <div>
                    <strong>React関数内でのみ呼ぶ：</strong>
                    <p className="mt-1">関数コンポーネントまたはカスタムHooks内でのみ使用</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm">
                <code>{`// ❌ 悪い例
function BadComponent({ condition }) {
  if (condition) {
    const [state, setState] = useState(0); // NG: 条件分岐の中
  }
  
  for (let i = 0; i < 10; i++) {
    useEffect(() => { /* ... */ }); // NG: ループの中
  }
}

// ✅ 良い例
function GoodComponent({ condition }) {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    if (condition) {
      // 条件分岐はuseEffectの中
    }
  }, [condition]);
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ベストプラクティス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Zap className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ベストプラクティス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <div>
                    <strong>依存配列を正しく指定：</strong>
                    <p className="mt-1">useEffectやuseCallbackの依存配列には、使用するすべての値を含める</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <div>
                    <strong>状態更新は関数形式で：</strong>
                    <p className="mt-1">前の状態に基づく更新は setState(prev {'=>'} prev + 1) を使う</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <div>
                    <strong>useEffectは目的ごとに分ける：</strong>
                    <p className="mt-1">関連のないロジックは別々のuseEffectに分割</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <div>
                    <strong>カスタムHooksで再利用：</strong>
                    <p className="mt-1">共通のロジックはカスタムHooksにまとめる</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <div>
                    <strong>過度な最適化を避ける：</strong>
                    <p className="mt-1">useMemoやuseCallbackは本当に必要な時だけ使う</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              React Hooksは、関数コンポーネントで状態管理やライフサイクルを扱うための強力な機能です。
              useState、useEffect、useContextなどの基本的なHooksを理解し、適切に使い分けることが重要です。
            </p>
            <p>
              カスタムHooksを作成することで、ロジックを再利用しやすくなり、
              コードの可読性と保守性が向上します。Hooksのルールを守り、ベストプラクティスに従いましょう。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-cyan-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            Hooksを理解したら、次はライフサイクルについて学びましょう！
          </p>
          <Link 
            to="/study/react/lifecycle"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
          >
            ライフサイクルを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}