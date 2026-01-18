import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Code, Package } from 'lucide-react';

export default function JsFunctionsPage() {
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
            <Zap className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">JavaScript 関数</h1>
          <p className="text-xl text-gray-600">
            関数は、再利用可能なコードのまとまりです。関数宣言、関数式、アロー関数、
            高階関数、クロージャなど、JavaScriptの関数について詳しく学びます。
          </p>
        </div>

        {/* 関数の定義 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">関数の定義</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">関数宣言</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的な関数宣言
function greet(name) {
    return \`こんにちは、\${name}さん！\`;
}

console.log(greet('太郎')); // 'こんにちは、太郎さん！'

// 複数の引数
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8

// デフォルト引数
function introduce(name = '名無し', age = 0) {
    return \`\${name}（\${age}歳）\`;
}

console.log(introduce()); // '名無し（0歳）'
console.log(introduce('太郎', 30)); // '太郎（30歳）'

// 戻り値がない関数
function logMessage(message) {
    console.log(message);
    // return文がない場合、undefinedが返される
}

// 関数の巻き上げ（ホイスティング）
// 関数宣言は巻き上げられるので、定義前に呼び出せる
sayHello(); // 'Hello!'

function sayHello() {
    console.log('Hello!');
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">関数式</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 関数式
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// 名前付き関数式
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // 関数名で再帰呼び出し
};

console.log(factorial(5)); // 120

// 関数式は巻き上げられない
// divide(); // エラー！

const divide = function(a, b) {
    return a / b;
};`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">アロー関数</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なアロー関数
const add = (a, b) => {
    return a + b;
};

// 式が1つの場合、{}とreturnを省略可能
const multiply = (a, b) => a * b;

// 引数が1つの場合、()を省略可能
const square = x => x * x;

// 引数がない場合、()が必要
const greet = () => {
    console.log('Hello!');
};

// オブジェクトを返す場合、()で囲む
const createUser = (name, age) => ({ name, age });

// 配列メソッドと組み合わせ
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);

// thisの扱いが異なる
const obj = {
    name: '太郎',
    // 通常の関数
    greet1: function() {
        console.log(\`Hello, \${this.name}\`);
    },
    // アロー関数（thisは外側のスコープを参照）
    greet2: () => {
        console.log(\`Hello, \${this.name}\`); // undefinedになる
    }
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 引数と戻り値 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">引数と戻り値</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 可変長引数（Rest Parameters）
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// 引数と一緒に使う場合は最後に配置
function introduce(greeting, ...names) {
    return \`\${greeting}, \${names.join(', ')}!\`;
}

console.log(introduce('こんにちは', '太郎', '花子', '次郎'));
// 'こんにちは, 太郎, 花子, 次郎!'

// 分割代入を引数に使う
function createUser({ name, age, email }) {
    return {
        name,
        age,
        email,
        createdAt: new Date()
    };
}

createUser({ name: '太郎', age: 30, email: 'taro@example.com' });

// 配列の分割代入
function getCoordinates([x, y]) {
    return { x, y };
}

getCoordinates([10, 20]); // { x: 10, y: 20 }

// 複数の値を返す
function getMinMax(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

const result = getMinMax([1, 5, 3, 9, 2]);
console.log(result); // { min: 1, max: 9 }

// 分割代入で受け取る
const { min, max } = getMinMax([1, 5, 3, 9, 2]);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 高階関数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Package className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">高階関数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              高階関数とは、関数を引数として受け取ったり、関数を返したりする関数のことです。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 関数を引数として受け取る
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// 0
// 1
// 2

// 関数を返す
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// アロー関数で
const makePower = exponent => base => base ** exponent;
const square = makePower(2);
const cube = makePower(3);

console.log(square(5)); // 25
console.log(cube(5)); // 125

// デコレーター（関数を拡張）
function withLogging(func) {
    return function(...args) {
        console.log(\`関数実行開始: \${func.name}\`);
        const result = func(...args);
        console.log(\`関数実行終了: \${func.name}\`);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(2, 3);
// 関数実行開始: add
// 関数実行終了: add

// 配列の高階関数
const numbers = [1, 2, 3, 4, 5];

// map: 各要素を変換
const doubled = numbers.map(n => n * 2);

// filter: 条件に合う要素のみ
const evens = numbers.filter(n => n % 2 === 0);

// reduce: 集約
const sum = numbers.reduce((total, n) => total + n, 0);

// find: 最初に見つかった要素
const found = numbers.find(n => n > 3);

// some: 少なくとも1つが条件を満たす
const hasEven = numbers.some(n => n % 2 === 0);

// every: 全てが条件を満たす
const allPositive = numbers.every(n => n > 0);

// メソッドチェーン
const result = numbers
    .filter(n => n % 2 === 0) // [2, 4]
    .map(n => n * 2) // [4, 8]
    .reduce((total, n) => total + n, 0); // 12`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* クロージャ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">クロージャ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              クロージャとは、関数とその関数が宣言された環境（スコープ）の組み合わせです。
              内部関数は外部関数の変数にアクセスできます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なクロージャ
function outer() {
    let count = 0; // プライベート変数
    
    return function inner() {
        count++;
        return count;
    };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// カウンターの実装
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
        reset: () => {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
console.log(counter.reset()); // 0

// 関数ファクトリー
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
const add10 = createAdder(10);

console.log(add5(3)); // 8
console.log(add10(3)); // 13

// プライベート変数のカプセル化
function BankAccount(initialBalance) {
    let balance = initialBalance; // プライベート変数
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const account = BankAccount(1000);
account.deposit(500); // 1500
account.withdraw(300); // 1200
console.log(account.getBalance()); // 1200
// balance に直接アクセスできない

// ループでのクロージャの注意点
// 間違った例
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3 (期待: 0, 1, 2)
    }, 100);
}

// 正しい例1: let を使う
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2
    }, 100);
}

// 正しい例2: クロージャを使う
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0, 1, 2
        }, 100);
    })(i);
}`}</code>
              </pre>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl mb-3 text-gray-900">クロージャの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>データの隠蔽：</strong>プライベート変数を作成できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>状態の保持：</strong>関数呼び出し間で状態を保持できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>カプセル化：</strong>関連するデータと関数をまとめられる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 即時実行関数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">即時実行関数（IIFE）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              IIFE（Immediately Invoked Function Expression）は、定義と同時に実行される関数です。
              グローバルスコープを汚染せずに、プライベートスコープを作成できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なIIFE
(function() {
    console.log('即時実行！');
})();

// アロー関数で
(() => {
    console.log('即時実行！');
})();

// 引数を渡す
(function(name) {
    console.log(\`Hello, \${name}!\`);
})('太郎');

// 戻り値を受け取る
const result = (function() {
    return 42;
})();

console.log(result); // 42

// モジュールパターン
const myModule = (function() {
    // プライベート変数
    let privateVar = 'プライベート';
    
    // プライベート関数
    function privateFunc() {
        console.log('プライベート関数');
    }
    
    // パブリックAPI
    return {
        publicVar: 'パブリック',
        publicFunc() {
            console.log('パブリック関数');
            privateFunc();
        }
    };
})();

myModule.publicFunc(); // OK
// myModule.privateFunc(); // エラー！

// グローバル変数の衝突を防ぐ
(function() {
    let $ = 'ローカルの$';
    console.log($); // 'ローカルの$'
})();

// 外側の$は影響を受けない`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              JavaScriptの関数について、関数宣言、関数式、アロー関数、高階関数、クロージャなど、
              様々な概念を学びました。関数はJavaScriptの最も重要な機能の1つです。
            </p>
            <p>
              高階関数を使うことで、より抽象的で再利用可能なコードを書くことができます。
              クロージャを理解することで、プライベート変数やモジュールパターンなど、
              高度なプログラミング技法を使えるようになります。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            関数を理解したら、次はDOM操作を学びましょう！
          </p>
          <Link 
            to="/study/javascript/dom"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            DOM操作を学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
