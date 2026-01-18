import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Sparkles, Code } from 'lucide-react';

export default function JsModernPage() {
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
            <Package className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">モダンJavaScript（ES6+）</h1>
          <p className="text-xl text-gray-600">
            ES6（ES2015）以降のJavaScriptに追加された新機能を学びます。
            分割代入、スプレッド演算子、テンプレートリテラル、モジュールなど、
            モダンなJavaScript開発に不可欠な機能を理解しましょう。
          </p>
        </div>

        {/* 変数宣言 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">let と const</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// let: ブロックスコープの変数
if (true) {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // エラー！ブロック外では使えない

// const: ブロックスコープの定数
const PI = 3.14159;
// PI = 3.14; // エラー！再代入できない

// constでもオブジェクトのプロパティは変更可能
const user = { name: '太郎', age: 30 };
user.name = '花子'; // OK
user.age = 25; // OK
// user = {}; // エラー！再代入はできない

// constでも配列の要素は変更可能
const numbers = [1, 2, 3];
numbers.push(4); // OK
numbers[0] = 10; // OK
// numbers = []; // エラー！再代入はできない`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* アロー関数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">アロー関数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 従来の関数
const add = function(a, b) {
    return a + b;
};

// アロー関数
const add = (a, b) => {
    return a + b;
};

// 式が1つの場合、{}とreturnを省略
const add = (a, b) => a + b;

// 引数が1つの場合、()を省略
const square = x => x * x;

// 引数がない場合
const greet = () => console.log('Hello!');

// オブジェクトを返す場合、()で囲む
const createUser = (name, age) => ({ name, age });

// thisの違い
const obj = {
    name: '太郎',
    // 通常の関数: thisはobjを指す
    greet1: function() {
        console.log(\`Hello, \${this.name}\`);
    },
    // アロー関数: thisは外側のスコープを参照
    greet2: () => {
        console.log(\`Hello, \${this.name}\`); // undefined
    }
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テンプレートリテラル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テンプレートリテラル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 文字列の埋め込み
const name = '太郎';
const age = 30;

// 従来の方法
const message1 = '私の名前は' + name + 'で、' + age + '歳です。';

// テンプレートリテラル
const message2 = \`私の名前は\${name}で、\${age}歳です。\`;

// 式の埋め込み
const price = 1000;
const tax = 0.1;
const total = \`合計: \${price * (1 + tax)}円\`;

// 複数行の文字列
const html = \`
    <div>
        <h1>\${name}</h1>
        <p>年齢: \${age}歳</p>
    </div>
\`;

// タグ付きテンプレート
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
    }, '');
}

const highlighted = highlight\`名前は\${name}、年齢は\${age}歳です\`;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 分割代入 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Package className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">分割代入</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// オブジェクトの分割代入
const user = { name: '太郎', age: 30, city: '東京' };

// 従来の方法
const name = user.name;
const age = user.age;

// 分割代入
const { name, age } = user;

// 別名をつける
const { name: userName, age: userAge } = user;

// デフォルト値
const { name, age, country = '日本' } = user;

// ネストしたオブジェクト
const person = {
    name: '太郎',
    address: {
        city: '東京',
        zip: '123-4567'
    }
};

const { name, address: { city, zip } } = person;

// 配列の分割代入
const numbers = [1, 2, 3, 4, 5];

// 従来の方法
const first = numbers[0];
const second = numbers[1];

// 分割代入
const [first, second] = numbers;

// スキップ
const [first, , third] = numbers;

// Rest要素
const [first, second, ...rest] = numbers;
console.log(rest); // [3, 4, 5]

// デフォルト値
const [a, b, c = 0] = [1, 2];

// 入れ替え
let x = 1, y = 2;
[x, y] = [y, x];

// 関数の引数で
function greet({ name, age }) {
    return \`\${name}（\${age}歳）\`;
}

greet({ name: '太郎', age: 30 });

// 関数の戻り値で
function getCoordinates() {
    return [10, 20];
}

const [x, y] = getCoordinates();`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* スプレッド演算子 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">スプレッド演算子とRest</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 配列のスプレッド
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 配列の結合
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 配列のコピー
const copy = [...arr1]; // [1, 2, 3]

// 配列への要素追加
const arr3 = [0, ...arr1, 4]; // [0, 1, 2, 3, 4]

// Math関数で
const numbers = [1, 5, 3, 9, 2];
const max = Math.max(...numbers); // 9
const min = Math.min(...numbers); // 1

// オブジェクトのスプレッド
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// オブジェクトのマージ
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// オブジェクトのコピー
const objCopy = { ...obj1 };

// プロパティの上書き
const obj3 = { a: 1, b: 2 };
const obj4 = { ...obj3, b: 3, c: 4 }; // { a: 1, b: 3, c: 4 }

// Rest Parameters（関数）
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4, 5); // 15

// Restパラメータは最後に
function greet(greeting, ...names) {
    return \`\${greeting}, \${names.join(', ')}!\`;
}

greet('こんにちは', '太郎', '花子', '次郎');

// オブジェクトのRest
const user = { name: '太郎', age: 30, city: '東京', country: '日本' };
const { name, ...rest } = user;
console.log(rest); // { age: 30, city: '東京', country: '日本' }`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* オプショナルチェーニングとNullish Coalescing */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">オプショナルチェーニングとNullish Coalescing</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// オプショナルチェーニング (?.)
const user = {
    name: '太郎',
    address: {
        city: '東京'
    }
};

// 従来の方法
const city = user && user.address && user.address.city;

// オプショナルチェーニング
const city = user?.address?.city; // '東京'

// 存在しないプロパティ
const zip = user?.address?.zip; // undefined（エラーにならない）

// メソッド呼び出し
const result = obj?.method?.(); // メソッドが存在すれば実行

// 配列要素へのアクセス
const firstItem = arr?.[0];

// Nullish Coalescing (??)
// 従来の方法（||）
const value1 = null || 'デフォルト'; // 'デフォルト'
const value2 = 0 || 'デフォルト'; // 'デフォルト'（0はfalsyなので）
const value3 = '' || 'デフォルト'; // 'デフォルト'（空文字はfalsyなので）

// Nullish Coalescing
const value4 = null ?? 'デフォルト'; // 'デフォルト'
const value5 = 0 ?? 'デフォルト'; // 0（0はnullでもundefinedでもない）
const value6 = '' ?? 'デフォルト'; // ''（空文字はnullでもundefinedでもない）

// 実用例
function getDisplayName(user) {
    return user?.name ?? '名無し';
}

// 組み合わせ
const address = user?.address?.city ?? '不明';`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* デフォルトパラメータ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">デフォルトパラメータ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 従来の方法
function greet(name, greeting) {
    greeting = greeting || 'こんにちは';
    return \`\${greeting}, \${name}さん！\`;
}

// デフォルトパラメータ
function greet(name, greeting = 'こんにちは') {
    return \`\${greeting}, \${name}さん！\`;
}

greet('太郎'); // 'こんにちは, 太郎さん！'
greet('太郎', 'おはよう'); // 'おはよう, 太郎さん！'

// 式も使える
function createArray(length = 10, fill = 0) {
    return Array(length).fill(fill);
}

// 前の引数を参照できる
function calculate(a, b = a * 2) {
    return a + b;
}

calculate(5); // 15 (5 + 10)
calculate(5, 3); // 8 (5 + 3)

// オブジェクトのデフォルト値
function createUser({ name, age = 0, city = '東京' } = {}) {
    return { name, age, city };
}

createUser({ name: '太郎' }); // { name: '太郎', age: 0, city: '東京' }
createUser(); // { name: undefined, age: 0, city: '東京' }`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 配列メソッド */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Package className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">モダンな配列メソッド</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`const numbers = [1, 2, 3, 4, 5];

// find（最初に見つかった要素）
const found = numbers.find(n => n > 3); // 4

// findIndex（最初に見つかったインデックス）
const index = numbers.findIndex(n => n > 3); // 3

// includes（要素が含まれるか）
const hasThree = numbers.includes(3); // true

// flat（配列のフラット化）
const nested = [1, [2, 3], [4, [5, 6]]];
const flat1 = nested.flat(); // [1, 2, 3, 4, [5, 6]]
const flat2 = nested.flat(2); // [1, 2, 3, 4, 5, 6]
const flatAll = nested.flat(Infinity); // 全階層フラット化

// flatMap（mapしてからflat）
const words = ['hello world', 'foo bar'];
const letters = words.flatMap(word => word.split(' '));
// ['hello', 'world', 'foo', 'bar']

// from（配列に変換）
const str = 'hello';
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
// [1, 2, 3, 4, 5]

// of（配列の作成）
const arr = Array.of(1, 2, 3); // [1, 2, 3]

// entries（インデックスと値のペア）
for (const [index, value] of numbers.entries()) {
    console.log(\`\${index}: \${value}\`);
}

// keys（インデックス）
for (const index of numbers.keys()) {
    console.log(index);
}

// values（値）
for (const value of numbers.values()) {
    console.log(value);
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* モジュール */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">モジュール（import/export）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// === math.js ===

// 名前付きエクスポート
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// まとめてエクスポート
const divide = (a, b) => a / b;
const subtract = (a, b) => a - b;
export { divide, subtract };

// デフォルトエクスポート
export default class Calculator {
    add(a, b) {
        return a + b;
    }
}

// === main.js ===

// 名前付きインポート
import { PI, add, multiply } from './math.js';

// 別名でインポート
import { add as sum } from './math.js';

// 全てインポート
import * as math from './math.js';
console.log(math.PI);
console.log(math.add(2, 3));

// デフォルトインポート
import Calculator from './math.js';

// デフォルトと名前付きを同時に
import Calculator, { PI, add } from './math.js';

// 動的インポート
const module = await import('./math.js');
const result = module.add(2, 3);

// 条件付きインポート
if (condition) {
    const { feature } = await import('./feature.js');
    feature();
}

// === 再エクスポート ===
// utils/index.js
export { add, multiply } from './math.js';
export { format } from './string.js';
export * from './array.js'; // 全て再エクスポート`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* クラスの新機能 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">クラスの新機能</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// クラスフィールド
class Counter {
    count = 0; // パブリックフィールド
    #privateCount = 0; // プライベートフィールド
    
    increment() {
        this.count++;
        this.#privateCount++;
    }
    
    getPrivateCount() {
        return this.#privateCount;
    }
}

const counter = new Counter();
console.log(counter.count); // 0
// console.log(counter.#privateCount); // エラー！

// 静的フィールドとメソッド
class MathUtil {
    static PI = 3.14159;
    static #secret = 'secret';
    
    static calculateCircumference(radius) {
        return 2 * this.PI * radius;
    }
    
    static #privateMethod() {
        return this.#secret;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.calculateCircumference(10));

// プライベートメソッド
class BankAccount {
    #balance = 0;
    
    deposit(amount) {
        this.#validateAmount(amount);
        this.#balance += amount;
    }
    
    #validateAmount(amount) {
        if (amount <= 0) {
            throw new Error('金額は正の数である必要があります');
        }
    }
}

// クラス式
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              モダンJavaScript（ES6+）の機能を活用することで、より簡潔で読みやすいコードを書けます。
              アロー関数、テンプレートリテラル、分割代入、スプレッド演算子などは、
              日常的に使用する重要な機能です。
            </p>
            <p>
              オプショナルチェーニングやNullish Coalescingなどの新しい演算子、
              配列の高度なメソッド、モジュールシステムを理解することで、
              モダンなJavaScript開発の基礎が身につきます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            モダンJavaScriptを理解したら、次はReactでUIを構築しましょう！
          </p>
          <Link 
            to="/study/react"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            Reactを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
