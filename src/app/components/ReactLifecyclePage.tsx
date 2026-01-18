import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Code } from 'lucide-react';

export default function ReactLifecyclePage() {
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
          <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
            <RefreshCw className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">React ライフサイクル</h1>
          <p className="text-xl text-gray-600">
            ライフサイクルとは、Reactコンポーネントが生まれてから消えるまでの一連の流れです。
            マウント、更新、アンマウントの各フェーズを理解することで、適切なタイミングで処理を実行できます。
          </p>
        </div>

        {/* ライフサイクルとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <RefreshCw className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ライフサイクルとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Reactコンポーネントには、マウント（生成）、更新、アンマウント（破棄）という3つの主要なフェーズがあります。
              各フェーズで適切な処理を実行することで、効率的なアプリケーションを構築できます。
            </p>

            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <h4 className="text-xl mb-3 text-gray-900">3つのライフサイクルフェーズ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">1.</span>
                  <div>
                    <strong>マウント（Mounting）：</strong>
                    <p className="mt-1">コンポーネントが初めて画面に表示される</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">2.</span>
                  <div>
                    <strong>更新（Updating）：</strong>
                    <p className="mt-1">propsや状態が変わってコンポーネントが再レンダリングされる</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">3.</span>
                  <div>
                    <strong>アンマウント（Unmounting）：</strong>
                    <p className="mt-1">コンポーネントが画面から削除される</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* マウント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Code className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">マウント（Mounting）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              マウントは、コンポーネントが初めてDOMに挿入される時のフェーズです。
              初期化処理、データ取得、イベントリスナーの登録などを行います。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useState, useEffect } from 'react';

// マウント時に実行される処理
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // マウント時のみ実行（空の依存配列）
  useEffect(() => {
    console.log('コンポーネントがマウントされました');
    
    // データ取得
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
    
    // ページタイトルを設定
    document.title = 'ユーザープロフィール';
  }, []); // 空の依存配列 = マウント時のみ実行
  
  if (loading) return <div>読み込み中...</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// 初期化処理の例
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    console.log('タイマー開始');
    
    // タイマーを開始
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // クリーンアップ関数（アンマウント時に実行）
    return () => {
      console.log('タイマー停止');
      clearInterval(interval);
    };
  }, []); // マウント時のみ実行
  
  return <div>経過時間: {seconds}秒</div>;
}

// イベントリスナーの登録
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // マウント時にリスナーを登録
    window.addEventListener('scroll', handleScroll);
    console.log('スクロールリスナーを登録しました');
    
    // アンマウント時にリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('スクロールリスナーを削除しました');
    };
  }, []);
  
  return <div>スクロール位置: {scrollY}px</div>;
}

// 複数の初期化処理
function Dashboard() {
  useEffect(() => {
    // 分析ツールの初期化
    analytics.init();
    console.log('分析ツールを初期化');
  }, []);
  
  useEffect(() => {
    // WebSocketの接続
    const ws = new WebSocket('ws://localhost:8080');
    console.log('WebSocketに接続');
    
    return () => {
      ws.close();
      console.log('WebSocketを切断');
    };
  }, []);
  
  useEffect(() => {
    // ローカルストレージからデータを読み込む
    const savedData = localStorage.getItem('dashboardData');
    if (savedData) {
      console.log('保存されたデータを読み込みました');
    }
  }, []);
  
  return <div>ダッシュボード</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 更新 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Code className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">更新（Updating）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              更新は、propsや状態が変わってコンポーネントが再レンダリングされる時のフェーズです。
              依存配列に値を指定することで、特定の値が変わった時のみ処理を実行できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useState, useEffect } from 'react';

// propsの変更を監視
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  // userIdが変わるたびに実行
  useEffect(() => {
    console.log('userIdが変わりました:', userId);
    
    setUser(null); // ローディング状態にする
    
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // userIdを依存配列に指定
  
  return user ? <div>{user.name}</div> : <div>読み込み中...</div>;
}

// 状態の変更を監視
function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  // queryが変わるたびに検索
  useEffect(() => {
    if (query.length > 0) {
      console.log('検索中:', query);
      
      fetch(\`/api/search?q=\${query}\`)
        .then(res => res.json())
        .then(data => setResults(data));
    } else {
      setResults([]);
    }
  }, [query]); // queryを依存配列に指定
  
  return (
    <div>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 複数の値を監視
function ProductDetail({ productId, currency }) {
  const [price, setPrice] = useState(null);
  
  // productIdまたはcurrencyが変わるたびに実行
  useEffect(() => {
    console.log('価格を再取得:', productId, currency);
    
    fetch(\`/api/products/\${productId}/price?currency=\${currency}\`)
      .then(res => res.json())
      .then(data => setPrice(data));
  }, [productId, currency]); // 複数の値を監視
  
  return <div>価格: {price}</div>;
}

// 条件付き更新処理
function AutoSave({ content, isDirty }) {
  useEffect(() => {
    if (isDirty) {
      console.log('自動保存中...');
      
      const timer = setTimeout(() => {
        // 3秒後に保存
        fetch('/api/save', {
          method: 'POST',
          body: JSON.stringify({ content })
        });
      }, 3000);
      
      // 次の更新前にタイマーをクリア
      return () => clearTimeout(timer);
    }
  }, [content, isDirty]);
  
  return <div>編集中...</div>;
}

// 前回の値と比較
function Counter() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  
  useEffect(() => {
    console.log(\`カウントが \${prevCount} から \${count} に変わりました\`);
    setPrevCount(count);
  }, [count]); // countが変わるたびに実行
  
  return (
    <div>
      <p>現在: {count}</p>
      <p>前回: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

// ページタイトルの更新
function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;
    console.log('ページタイトルを更新:', title);
  }, [title]); // titleが変わるたびに実行
  
  return <h1>{title}</h1>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* アンマウント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Code className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">アンマウント（Unmounting）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              アンマウントは、コンポーネントがDOMから削除される時のフェーズです。
              クリーンアップ関数を使って、タイマーの停止やイベントリスナーの削除などを行います。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useEffect } from 'react';

// タイマーのクリーンアップ
function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    // アンマウント時に実行されるクリーンアップ関数
    return () => {
      clearInterval(interval);
      console.log('タイマーを停止しました');
    };
  }, []);
  
  return <div>タイマー実行中</div>;
}

// イベントリスナーのクリーンアップ
function KeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 's' && e.ctrlKey) {
        console.log('保存ショートカット');
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    console.log('キーボードリスナーを登録');
    
    // アンマウント時にリスナーを削除
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      console.log('キーボードリスナーを削除');
    };
  }, []);
  
  return <div>Ctrl+Sで保存</div>;
}

// WebSocketのクリーンアップ
function ChatRoom({ roomId }) {
  useEffect(() => {
    const ws = new WebSocket(\`ws://localhost:8080/rooms/\${roomId}\`);
    
    ws.onopen = () => {
      console.log('チャットルームに接続');
    };
    
    ws.onmessage = (event) => {
      console.log('メッセージ受信:', event.data);
    };
    
    // アンマウント時またはroomIdが変わる時にクリーンアップ
    return () => {
      ws.close();
      console.log('チャットルームから切断');
    };
  }, [roomId]); // roomIdが変わると再接続
  
  return <div>チャットルーム</div>;
}

// サブスクリプションのクリーンアップ
function NotificationListener() {
  useEffect(() => {
    // 通知サービスに登録
    const subscription = notificationService.subscribe((notification) => {
      console.log('通知:', notification);
    });
    
    console.log('通知サービスに登録しました');
    
    // アンマウント時に登録解除
    return () => {
      subscription.unsubscribe();
      console.log('通知サービスから登録解除しました');
    };
  }, []);
  
  return <div>通知受信中</div>;
}

// 複数のクリーンアップ
function Dashboard() {
  useEffect(() => {
    // タイマー
    const timer = setInterval(() => {
      console.log('更新中...');
    }, 5000);
    
    // イベントリスナー
    const handleResize = () => console.log('リサイズ');
    window.addEventListener('resize', handleResize);
    
    // WebSocket
    const ws = new WebSocket('ws://localhost:8080');
    
    // すべてのクリーンアップをまとめて実行
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
      ws.close();
      console.log('すべてのリソースをクリーンアップしました');
    };
  }, []);
  
  return <div>ダッシュボード</div>;
}

// 条件付きクリーンアップ
function ModalWithBackdrop({ isOpen }) {
  useEffect(() => {
    if (isOpen) {
      // モーダルが開いている時のみ処理
      document.body.style.overflow = 'hidden';
      console.log('スクロールを無効化');
      
      return () => {
        document.body.style.overflow = 'auto';
        console.log('スクロールを有効化');
      };
    }
  }, [isOpen]);
  
  return isOpen ? <div>モーダル</div> : null;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 依存配列の使い方 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <RefreshCw className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">依存配列の使い方</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`import { useEffect, useState } from 'react';

// 1. 依存配列なし - 毎回実行
function EveryRender() {
  useEffect(() => {
    console.log('毎回レンダリング後に実行されます');
  }); // 依存配列なし
  
  return <div>コンポーネント</div>;
}

// 2. 空の依存配列 - マウント時のみ実行
function OnMount() {
  useEffect(() => {
    console.log('マウント時のみ実行されます');
  }, []); // 空の依存配列
  
  return <div>コンポーネント</div>;
}

// 3. 特定の値を監視 - その値が変わった時のみ実行
function OnChange({ value }) {
  useEffect(() => {
    console.log('valueが変わった時のみ実行されます');
  }, [value]); // valueを依存配列に指定
  
  return <div>{value}</div>;
}

// 4. 複数の値を監視
function OnMultipleChanges({ id, filter }) {
  useEffect(() => {
    console.log('idまたはfilterが変わった時に実行されます');
  }, [id, filter]); // 複数の値を監視
  
  return <div>ID: {id}, Filter: {filter}</div>;
}

// 依存配列の注意点
function DependencyExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('太郎');
  
  // ❌ 悪い例：依存配列にcountを入れ忘れ
  useEffect(() => {
    console.log('現在のカウント:', count);
    // countを使っているのに依存配列に入れていない
  }, []); // 警告が出る
  
  // ✅ 良い例：使用する値をすべて依存配列に含める
  useEffect(() => {
    console.log('現在のカウント:', count);
  }, [count]); // countを依存配列に含める
  
  // オブジェクトや配列の依存
  const user = { name, age: 30 };
  
  // ❌ 悪い例：毎回新しいオブジェクトが作られるので毎回実行される
  useEffect(() => {
    console.log('ユーザー情報:', user);
  }, [user]); // userは毎回新しいオブジェクト
  
  // ✅ 良い例：プリミティブな値を監視
  useEffect(() => {
    console.log('名前:', name);
  }, [name]); // プリミティブな値を監視
  
  return <div>例</div>;
}

// 関数を依存配列に含める
function FunctionDependency() {
  const [count, setCount] = useState(0);
  
  // この関数は毎回新しく作られる
  const handleClick = () => {
    console.log('クリック:', count);
  };
  
  // ❌ 悪い例：関数を依存配列に含めると毎回実行される
  useEffect(() => {
    handleClick();
  }, [handleClick]); // handleClickは毎回新しい関数
  
  // ✅ 良い例1：関数内で使う値を依存配列に含める
  useEffect(() => {
    const handleClick = () => {
      console.log('クリック:', count);
    };
    handleClick();
  }, [count]); // countを監視
  
  // ✅ 良い例2：useCallbackを使う
  const handleClickMemo = useCallback(() => {
    console.log('クリック:', count);
  }, [count]);
  
  useEffect(() => {
    handleClickMemo();
  }, [handleClickMemo]); // メモ化された関数
  
  return <div>例</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* クラスコンポーネントとの対応 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Code className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">クラスコンポーネントとの対応</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              関数コンポーネントのuseEffectは、クラスコンポーネントの複数のライフサイクルメソッドに対応します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// クラスコンポーネント（従来の方法）
class ClassComponent extends React.Component {
  componentDidMount() {
    // マウント時
    console.log('マウントされました');
    this.fetchData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // 更新時
    if (prevProps.userId !== this.props.userId) {
      console.log('userIdが変わりました');
      this.fetchData();
    }
  }
  
  componentWillUnmount() {
    // アンマウント時
    console.log('アンマウントされます');
    this.cleanup();
  }
  
  fetchData() {
    // データ取得
  }
  
  cleanup() {
    // クリーンアップ
  }
  
  render() {
    return <div>コンポーネント</div>;
  }
}

// 関数コンポーネント（モダンな方法）
function FunctionComponent({ userId }) {
  // componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    console.log('マウントまたは更新されました');
    fetchData();
    
    // componentWillUnmount
    return () => {
      console.log('アンマウントされます');
      cleanup();
    };
  }, [userId]); // userIdが変わった時のみ実行
  
  return <div>コンポーネント</div>;
}

// マウント時のみ実行（componentDidMountのみ）
function MountOnly() {
  useEffect(() => {
    console.log('マウント時のみ実行');
    
    return () => {
      console.log('アンマウント時のみ実行');
    };
  }, []); // 空の依存配列
  
  return <div>コンポーネント</div>;
}

// 更新時のみ実行（componentDidUpdateのみ）
function UpdateOnly({ value }) {
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 初回レンダリングはスキップ
    }
    
    console.log('更新時のみ実行');
  }, [value]);
  
  return <div>コンポーネント</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 実践的な例 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <RefreshCw className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">実践的な例</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// データフェッチングの完全な例
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isCancelled = false; // クリーンアップフラグ
    
    // ローディング開始
    setLoading(true);
    setError(null);
    
    console.log('ユーザーデータを取得中:', userId);
    
    // データ取得
    fetch(\`/api/users/\${userId}\`)
      .then(res => {
        if (!res.ok) throw new Error('取得失敗');
        return res.json();
      })
      .then(data => {
        // コンポーネントがアンマウントされていなければ更新
        if (!isCancelled) {
          setUser(data);
          setLoading(false);
          console.log('ユーザーデータを取得しました');
        }
      })
      .catch(err => {
        if (!isCancelled) {
          setError(err.message);
          setLoading(false);
          console.error('エラー:', err);
        }
      });
    
    // クリーンアップ
    return () => {
      isCancelled = true;
      console.log('データ取得をキャンセル');
    };
  }, [userId]); // userIdが変わるたびに再取得
  
  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;
  if (!user) return <div>ユーザーが見つかりません</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// リアルタイム通信の例
function LiveChat({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  
  useEffect(() => {
    console.log('チャットルームに接続中:', roomId);
    
    const ws = new WebSocket(\`ws://localhost:8080/chat/\${roomId}\`);
    
    ws.onopen = () => {
      setConnected(true);
      console.log('接続しました');
    };
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
      console.log('メッセージ受信:', message);
    };
    
    ws.onerror = (error) => {
      console.error('WebSocketエラー:', error);
    };
    
    ws.onclose = () => {
      setConnected(false);
      console.log('切断しました');
    };
    
    // クリーンアップ
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
        console.log('WebSocketを閉じました');
      }
    };
  }, [roomId]); // roomIdが変わると再接続
  
  return (
    <div>
      <p>{connected ? '接続中' : '切断'}</p>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}

// ドキュメントタイトルと複数の副作用
function ArticlePage({ articleId }) {
  const [article, setArticle] = useState(null);
  const [views, setViews] = useState(0);
  
  // 記事データの取得
  useEffect(() => {
    fetch(\`/api/articles/\${articleId}\`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [articleId]);
  
  // ドキュメントタイトルの更新
  useEffect(() => {
    if (article) {
      document.title = article.title;
      console.log('タイトルを更新:', article.title);
    }
    
    return () => {
      document.title = 'デフォルトタイトル';
    };
  }, [article]);
  
  // 閲覧数のカウント
  useEffect(() => {
    // マウント時に閲覧数を記録
    fetch(\`/api/articles/\${articleId}/view\`, { method: 'POST' })
      .then(res => res.json())
      .then(data => setViews(data.views));
    
    console.log('閲覧数を記録');
  }, [articleId]);
  
  // ページ離脱時の処理
  useEffect(() => {
    const handleBeforeUnload = () => {
      // 読了時間を記録
      console.log('ページを離れます');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  return article ? (
    <div>
      <h1>{article.title}</h1>
      <p>閲覧数: {views}</p>
      <div>{article.content}</div>
    </div>
  ) : (
    <div>読み込み中...</div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ベストプラクティス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <RefreshCw className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ベストプラクティス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">1.</span>
                  <div>
                    <strong>クリーンアップを忘れない：</strong>
                    <p className="mt-1">タイマー、イベントリスナー、WebSocketなどは必ずクリーンアップする</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">2.</span>
                  <div>
                    <strong>依存配列を正しく指定：</strong>
                    <p className="mt-1">useEffect内で使用するすべての値を依存配列に含める</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">3.</span>
                  <div>
                    <strong>関心の分離：</strong>
                    <p className="mt-1">関連のない処理は別々のuseEffectに分割する</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">4.</span>
                  <div>
                    <strong>非同期処理の取り扱い：</strong>
                    <p className="mt-1">コンポーネントのアンマウント後の状態更新を防ぐフラグを使う</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">5.</span>
                  <div>
                    <strong>無限ループに注意：</strong>
                    <p className="mt-1">useEffect内で状態を更新する場合、依存配列を慎重に設定する</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">6.</span>
                  <div>
                    <strong>パフォーマンスを考慮：</strong>
                    <p className="mt-1">頻繁に実行される処理はデバウンスやスロットリングを使う</p>
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
                <code>{`// ❌ 間違い1：無限ループ
function BadExample1() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1); // 状態を更新
  }, [count]); // countを監視 → 無限ループ
  
  return <div>{count}</div>;
}

// ✅ 修正：依存配列を空にするか、条件を追加
function GoodExample1() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]); // 条件を追加
  
  return <div>{count}</div>;
}

// ❌ 間違い2：クリーンアップ忘れ
function BadExample2() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    // クリーンアップがない！
  }, []);
  
  return <div>Timer</div>;
}

// ✅ 修正：クリーンアップを追加
function GoodExample2() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <div>Timer</div>;
}

// ❌ 間違い3：依存配列の不足
function BadExample3({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // userIdを依存配列に入れていない
  
  return <div>{user?.name}</div>;
}

// ✅ 修正：userIdを依存配列に追加
function GoodExample3({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // userIdを監視
  
  return <div>{user?.name}</div>;
}

// ❌ 間違い4：アンマウント後の状態更新
function BadExample4() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        // コンポーネントがアンマウントされていても更新される
        setData(data);
      });
  }, []);
  
  return <div>{data}</div>;
}

// ✅ 修正：キャンセルフラグを使う
function GoodExample4() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let isCancelled = false;
    
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        if (!isCancelled) {
          setData(data);
        }
      });
    
    return () => {
      isCancelled = true;
    };
  }, []);
  
  return <div>{data}</div>;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Reactのライフサイクルは、マウント、更新、アンマウントの3つのフェーズで構成されます。
              useEffectを使うことで、各フェーズで適切な処理を実行できます。
            </p>
            <p>
              依存配列を正しく指定し、必要なクリーンアップを行うことで、
              メモリリークやバグのない安定したアプリケーションを構築できます。
            </p>
            <p>
              関数コンポーネントとHooksを使えば、クラスコンポーネントよりもシンプルで
              理解しやすいコードを書くことができます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-indigo-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            ライフサイクルを理解したら、次はJSXについて学びましょう！
          </p>
          <Link 
            to="/study/react/jsx"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            JSXを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
