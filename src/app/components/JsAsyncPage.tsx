import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Clock, Zap } from 'lucide-react';

export default function JsAsyncPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/javascript" 
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          JavaScript/TypeScriptページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">JavaScript 非同期処理</h1>
          <p className="text-xl text-gray-600">
            非同期処理は、時間のかかる処理を待たずに他の処理を続けるための仕組みです。
            Promise、async/await、Fetch APIについて学びます。
          </p>
        </div>

        {/* 非同期処理とは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">非同期処理とは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              JavaScriptはシングルスレッドで動作するため、時間のかかる処理（ファイル読み込み、API通信など）を
              同期的に実行すると、その間他の処理ができなくなります。非同期処理を使うことで、
              処理の完了を待たずに次の処理を実行できます。
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">非同期処理が必要な場面</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>API通信（サーバーからデータを取得）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>ファイルの読み込み</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>タイマー処理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>データベース操作</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* コールバック関数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">コールバック関数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              コールバック関数は、非同期処理の最も基本的な方法です。処理が完了したときに呼び出される関数を渡します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// setTimeout（一定時間後に実行）
console.log('開始');

setTimeout(() => {
    console.log('3秒後に実行');
}, 3000);

console.log('終了');
// 出力順: 開始 → 終了 → 3秒後に実行

// setInterval（定期的に実行）
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(\`\${count}秒経過\`);
    
    if (count === 5) {
        clearInterval(intervalId); // 停止
        console.log('タイマー終了');
    }
}, 1000);

// コールバック地獄（Callback Hell）
getData1((data1) => {
    getData2(data1, (data2) => {
        getData3(data2, (data3) => {
            getData4(data3, (data4) => {
                console.log(data4);
                // ネストが深くなり読みにくい
            });
        });
    });
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Promise */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Promise</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Promiseは、非同期処理の結果を表すオブジェクトです。
              処理が成功（resolve）したか失敗（reject）したかを扱えます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// Promiseの作成
const promise = new Promise((resolve, reject) => {
    // 非同期処理
    setTimeout(() => {
        const success = true;
        
        if (success) {
            resolve('成功しました！'); // 成功
        } else {
            reject('失敗しました'); // 失敗
        }
    }, 1000);
});

// Promiseの使用
promise
    .then((result) => {
        console.log(result); // '成功しました！'
        return '次の処理';
    })
    .then((result) => {
        console.log(result); // '次の処理'
    })
    .catch((error) => {
        console.error(error); // エラー処理
    })
    .finally(() => {
        console.log('完了'); // 成功・失敗に関わらず実行
    });

// Promiseチェーン
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: '太郎' });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: '投稿1' },
                { id: 2, title: '投稿2' }
            ]);
        }, 1000);
    });
}

fetchUser(1)
    .then((user) => {
        console.log('ユーザー:', user);
        return fetchPosts(user.id);
    })
    .then((posts) => {
        console.log('投稿:', posts);
    })
    .catch((error) => {
        console.error('エラー:', error);
    });

// 複数のPromiseを扱う
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

// Promise.all（全て完了を待つ）
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // [1, 2, 3]
    });

// Promise.race（最初の1つが完了）
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // 最初に完了したもの
    });

// Promise.allSettled（全て完了を待つ、成功・失敗問わず）
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 1 },
        //   { status: 'fulfilled', value: 2 },
        //   { status: 'fulfilled', value: 3 }
        // ]
    });

// Promise.any（最初の成功を待つ）
Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // 最初に成功したもの
    });`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* async/await */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">async / await</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              async/awaitは、Promiseをより読みやすく書くための構文です。
              非同期処理を同期処理のように書けます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// async関数の定義
async function fetchData() {
    // async関数は常にPromiseを返す
    return 'データ';
}

fetchData().then((data) => {
    console.log(data); // 'データ'
});

// awaitの使用
async function getUserData() {
    try {
        // awaitでPromiseの完了を待つ
        const user = await fetchUser(1);
        console.log('ユーザー:', user);
        
        const posts = await fetchPosts(user.id);
        console.log('投稿:', posts);
        
        return { user, posts };
    } catch (error) {
        console.error('エラー:', error);
    }
}

getUserData();

// Promiseチェーンとの比較
// Promiseチェーン
function getDataWithPromise() {
    return fetchUser(1)
        .then((user) => {
            return fetchPosts(user.id);
        })
        .then((posts) => {
            return posts;
        })
        .catch((error) => {
            console.error(error);
        });
}

// async/await
async function getDataWithAsync() {
    try {
        const user = await fetchUser(1);
        const posts = await fetchPosts(user.id);
        return posts;
    } catch (error) {
        console.error(error);
    }
}

// 並列実行
async function fetchMultiple() {
    // 順次実行（遅い）
    const user1 = await fetchUser(1);
    const user2 = await fetchUser(2);
    
    // 並列実行（速い）
    const [user3, user4] = await Promise.all([
        fetchUser(3),
        fetchUser(4)
    ]);
    
    console.log(user1, user2, user3, user4);
}

// エラーハンドリング
async function handleErrors() {
    try {
        const result = await someAsyncFunction();
        return result;
    } catch (error) {
        if (error.code === 404) {
            console.error('見つかりません');
        } else if (error.code === 500) {
            console.error('サーバーエラー');
        } else {
            console.error('その他のエラー:', error);
        }
    } finally {
        console.log('処理完了');
    }
}

// アロー関数で
const getData = async () => {
    const data = await fetchData();
    return data;
};

// トップレベルawait（モジュール内のみ）
// const data = await fetchData();
// console.log(data);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Fetch API */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Fetch API</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Fetch APIは、HTTPリクエストを送信するためのモダンなAPIです。
              サーバーとの通信に使用します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// GETリクエスト（基本）
fetch('https://api.example.com/users')
    .then((response) => {
        // レスポンスの確認
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // JSONをパース
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('エラー:', error);
    });

// async/awaitで
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('取得エラー:', error);
    }
}

// POSTリクエスト
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('作成エラー:', error);
    }
}

// 使用例
createUser({
    name: '山田太郎',
    email: 'yamada@example.com',
    age: 30
});

// PUTリクエスト（更新）
async function updateUser(id, userData) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    
    return await response.json();
}

// DELETEリクエスト
async function deleteUser(id) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE'
    });
    
    return await response.json();
}

// ヘッダーの設定
async function fetchWithAuth() {
    const response = await fetch('https://api.example.com/protected', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_TOKEN_HERE',
            'Content-Type': 'application/json',
        }
    });
    
    return await response.json();
}

// 複数のレスポンス形式
async function fetchDifferentFormats() {
    // JSON
    const jsonResponse = await fetch('https://api.example.com/data.json');
    const jsonData = await jsonResponse.json();
    
    // テキスト
    const textResponse = await fetch('https://api.example.com/data.txt');
    const textData = await textResponse.text();
    
    // Blob（画像など）
    const imageResponse = await fetch('https://api.example.com/image.jpg');
    const imageBlob = await imageResponse.blob();
    
    // FormData
    const formResponse = await fetch('https://api.example.com/form');
    const formData = await formResponse.formData();
}

// タイムアウトの実装
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('タイムアウト');
        } else {
            console.error('エラー:', error);
        }
    }
}

// リクエストのキャンセル
const controller = new AbortController();

fetch('https://api.example.com/data', {
    signal: controller.signal
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
        if (error.name === 'AbortError') {
            console.log('リクエストがキャンセルされました');
        }
    });

// 必要に応じてキャンセル
// controller.abort();

// エラーハンドリングの例
async function robustFetch(url) {
    try {
        const response = await fetch(url);
        
        // ステータスコードの確認
        if (response.status === 404) {
            throw new Error('データが見つかりません');
        } else if (response.status === 500) {
            throw new Error('サーバーエラー');
        } else if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('ネットワークエラー:', error);
        } else {
            console.error('エラー:', error.message);
        }
        throw error;
    }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              非同期処理は、モダンなJavaScriptアプリケーションに不可欠な技術です。
              Promiseで非同期処理の結果を扱い、async/awaitでより読みやすいコードを書けます。
            </p>
            <p>
              Fetch APIを使うことで、サーバーとの通信を簡潔に記述できます。
              エラーハンドリングを適切に行い、ユーザーにとって使いやすいアプリケーションを作りましょう。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            非同期処理を理解したら、次はTypeScriptで型安全なコードを書きましょう！
          </p>
          <Link 
            to="/study/javascript/typescript"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            TypeScriptを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
