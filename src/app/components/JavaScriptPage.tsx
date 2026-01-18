import { Link } from 'react-router-dom';
import { ArrowLeft, Braces, Code, Zap, Package, FileJson } from 'lucide-react';

export default function JavaScriptPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
            <Braces className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">JavaScript / TypeScript</h1>
          <p className="text-xl text-gray-600">
            JavaScriptはWebページに動的な機能を追加するプログラミング言語です。
            TypeScriptはJavaScriptに型安全性を追加した言語で、大規模なアプリケーション開発に適しています。
          </p>
        </div>

        {/* JavaScriptとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Braces className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">JavaScriptとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              JavaScriptは、Webページにインタラクティブな機能を追加するためのプログラミング言語です。
              フォームの検証、アニメーション、APIとの通信、ユーザーインタラクションへの応答など、
              動的な機能を実現できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なJavaScript
console.log('Hello, World!');

// 変数宣言
let name = '山田太郎';
const age = 30;
var oldStyle = 'なるべく使わない';

// データ型
let text = '文字列'; // String
let number = 42; // Number
let flag = true; // Boolean
let nothing = null; // Null
let undefined_value; // Undefined
let array = [1, 2, 3]; // Array
let object = { name: '太郎', age: 30 }; // Object

// 演算子
let sum = 10 + 5; // 加算
let diff = 10 - 5; // 減算
let product = 10 * 5; // 乗算
let quotient = 10 / 5; // 除算
let remainder = 10 % 3; // 剰余

// 比較演算子
10 === 10; // true（厳密等価）
10 == '10'; // true（等価）
10 !== 5; // true（厳密不等価）
10 > 5; // true
10 < 5; // false

// 論理演算子
true && false; // false（AND）
true || false; // true（OR）
!true; // false（NOT）`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 制御構文 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">制御構文</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// if文
let score = 85;
if (score >= 90) {
    console.log('優秀');
} else if (score >= 70) {
    console.log('良好');
} else {
    console.log('要努力');
}

// switch文
let day = '月曜日';
switch (day) {
    case '月曜日':
        console.log('週の始まり');
        break;
    case '金曜日':
        console.log('週末近し');
        break;
    default:
        console.log('通常の日');
}

// 三項演算子
let result = score >= 60 ? '合格' : '不合格';

// for文
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while文
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do-while文
do {
    console.log(count);
    count++;
} while (count < 5);

// 配列のループ
let fruits = ['りんご', 'バナナ', 'オレンジ'];

// for...of（値）
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});

// map（新しい配列を作成）
let upperFruits = fruits.map(fruit => fruit.toUpperCase());

// filter（条件に合う要素のみ）
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(n => n % 2 === 0);

// オブジェクトのループ
let person = { name: '太郎', age: 30, city: '東京' };

// for...in（キー）
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Object.keys
Object.keys(person).forEach(key => {
    console.log(\`\${key}: \${person[key]}\`);
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 関数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">関数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 関数宣言
function greet(name) {
    return \`こんにちは、\${name}さん！\`;
}

// 関数式
const add = function(a, b) {
    return a + b;
};

// アロー関数
const multiply = (a, b) => a * b;

const square = x => x * x; // 引数が1つの場合

const sayHello = () => {
    console.log('Hello!');
};

// デフォルト引数
function introduce(name = '名無し', age = 0) {
    return \`\${name}（\${age}歳）\`;
}

// 可変長引数
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 分割代入
function createUser({ name, age, email }) {
    return { name, age, email };
}

createUser({ name: '太郎', age: 30, email: 'taro@example.com' });

// 高階関数
function withLogging(func) {
    return function(...args) {
        console.log('関数実行開始');
        const result = func(...args);
        console.log('関数実行終了');
        return result;
    };
}

const loggedAdd = withLogging(add);
loggedAdd(2, 3);

// クロージャ
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const myCounter = counter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.getCount(); // 2`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* DOM操作 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">DOM操作</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              DOM（Document Object Model）を操作することで、HTMLの要素を動的に変更できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 要素の取得
const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const tags = document.getElementsByTagName('p');
const query = document.querySelector('.container .title');
const queryAll = document.querySelectorAll('.item');

// 要素の作成
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.className = 'box';
newDiv.id = 'myBox';

// 要素の追加
document.body.appendChild(newDiv);
element.insertBefore(newDiv, element.firstChild);

// 要素の削除
element.removeChild(newDiv);
newDiv.remove(); // 自身を削除

// テキストの変更
element.textContent = '新しいテキスト';
element.innerHTML = '<strong>太字のテキスト</strong>';

// 属性の操作
element.setAttribute('data-id', '123');
element.getAttribute('data-id');
element.removeAttribute('data-id');
element.hasAttribute('data-id');

// クラスの操作
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
element.classList.contains('active'); // true/false

// スタイルの変更
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.display = 'none';

// イベントリスナー
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    console.log('クリックされました！');
    event.preventDefault(); // デフォルト動作を防ぐ
});

// アロー関数で
button.addEventListener('click', (e) => {
    console.log('クリック！', e.target);
});

// イベントの削除
function handleClick() {
    console.log('クリック');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// 様々なイベント
element.addEventListener('mouseover', () => {});
element.addEventListener('mouseout', () => {});
element.addEventListener('keydown', (e) => {
    console.log(e.key); // 押されたキー
});

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    console.log(e.target.value); // 入力値
});

input.addEventListener('change', () => {}); // 値が変更されたとき
input.addEventListener('focus', () => {}); // フォーカス
input.addEventListener('blur', () => {}); // フォーカス解除`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 非同期処理 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">非同期処理</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// setTimeout（一定時間後に実行）
setTimeout(() => {
    console.log('3秒後に実行');
}, 3000);

// setInterval（定期的に実行）
const intervalId = setInterval(() => {
    console.log('1秒ごとに実行');
}, 1000);

// 停止
clearInterval(intervalId);

// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('成功しました！');
        } else {
            reject('失敗しました');
        }
    }, 1000);
});

promise
    .then(result => {
        console.log(result);
        return '次の処理';
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('完了');
    });

// async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('エラー:', error);
    }
}

// Fetch API（HTTP通信）
// GET リクエスト
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POST リクエスト
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: '山田太郎',
        email: 'yamada@example.com'
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

// async/awaitで
async function createUser() {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: '山田太郎' })
    });
    const data = await response.json();
    return data;
}

// 複数の非同期処理を並列実行
async function fetchMultiple() {
    const [users, posts] = await Promise.all([
        fetch('https://api.example.com/users').then(r => r.json()),
        fetch('https://api.example.com/posts').then(r => r.json())
    ]);
    console.log(users, posts);
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* TypeScript */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <FileJson className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">TypeScript</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              TypeScriptは、JavaScriptに型システムを追加した言語です。
              コンパイル時に型チェックが行われるため、バグを早期に発見でき、
              大規模なアプリケーション開発に適しています。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的な型
let name: string = '山田太郎';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;

// 配列
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ['りんご', 'バナナ'];

// タプル（要素数と型が固定）
let person: [string, number] = ['太郎', 30];

// オブジェクト
let user: { name: string; age: number } = {
    name: '太郎',
    age: 30
};

// インターフェース
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // オプショナル
    readonly createdAt: Date; // 読み取り専用
}

const newUser: User = {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    createdAt: new Date()
};

// 型エイリアス
type ID = number | string;
type Status = 'active' | 'inactive' | 'pending';

let userId: ID = 123;
let userStatus: Status = 'active';

// 関数の型
function add(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b;

// void（戻り値なし）
function logMessage(message: string): void {
    console.log(message);
}

// ジェネリクス
function identity<T>(value: T): T {
    return value;
}

identity<number>(42);
identity<string>('hello');

// 配列の関数
function first<T>(array: T[]): T | undefined {
    return array[0];
}

// インターフェースとジェネリクス
interface Response<T> {
    data: T;
    status: number;
    message: string;
}

const userResponse: Response<User> = {
    data: newUser,
    status: 200,
    message: 'Success'
};

// クラス
class Person {
    private id: number;
    protected name: string;
    public age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return \`\${this.name}（\${this.age}歳）\`;
    }
}

class Student extends Person {
    constructor(id: number, name: string, age: number, public grade: number) {
        super(id, name, age);
    }

    study(): void {
        console.log(\`\${this.name}が勉強中\`);
    }
}

// Union型（複数の型のいずれか）
type Result = number | string | boolean;

function process(value: Result): void {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
}

// Intersection型（複数の型を組み合わせ）
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

const myCircle: ColorfulCircle = {
    color: 'red',
    radius: 10
};

// ユーティリティ型
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Partial（すべてのプロパティをオプショナルに）
type PartialTodo = Partial<Todo>;

// Required（すべてのプロパティを必須に）
type RequiredTodo = Required<Todo>;

// Pick（特定のプロパティのみ）
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// Omit（特定のプロパティを除外）
type TodoInfo = Omit<Todo, 'completed'>;`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">TypeScriptの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>型安全性：</strong>コンパイル時に型エラーを検出</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>IntelliSense：</strong>エディタの自動補完が強力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>リファクタリング：</strong>安全にコードを変更できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>ドキュメント：</strong>型定義がドキュメントの役割を果たす</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>大規模開発：</strong>チーム開発や大規模プロジェクトに適している</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* モダンJavaScript */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Package className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">モダンJavaScript（ES6+）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 分割代入
const user = { name: '太郎', age: 30, city: '東京' };
const { name, age } = user;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// スプレッド演算子
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// テンプレートリテラル
const name = '太郎';
const greeting = \`こんにちは、\${name}さん！\`;

const multiline = \`
    これは
    複数行の
    文字列です
\`;

// オプショナルチェーニング
const address = user?.address?.street; // undefinedでもエラーにならない

// Nullish Coalescing
const value = null ?? 'デフォルト値'; // 'デフォルト値'
const value2 = 0 ?? 'デフォルト値'; // 0

// 配列メソッド
const nums = [1, 2, 3, 4, 5];

// map
const doubled = nums.map(n => n * 2);

// filter
const evens = nums.filter(n => n % 2 === 0);

// reduce
const sum = nums.reduce((total, n) => total + n, 0);

// find
const found = nums.find(n => n > 3); // 4

// some / every
const hasEven = nums.some(n => n % 2 === 0); // true
const allPositive = nums.every(n => n > 0); // true

// includes
nums.includes(3); // true

// モジュール
// export
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default class Calculator {}

// import
import Calculator, { PI, add } from './calculator';
import * as math from './math';

// クラスのフィールド
class Counter {
    count = 0; // パブリックフィールド
    #privateCount = 0; // プライベートフィールド

    increment() {
        this.count++;
        this.#privateCount++;
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
              JavaScriptはWebページに動的な機能を追加する強力な言語です。変数、制御構文、関数、
              DOM操作、非同期処理など、様々な機能を駆使してインタラクティブなWebアプリケーションを作成できます。
            </p>
            <p>
              TypeScriptを使用することで、型安全性が向上し、大規模なアプリケーション開発がより安全かつ効率的になります。
              モダンJavaScriptの機能を活用することで、より読みやすく保守しやすいコードを書くことができます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            JavaScript/TypeScriptの基礎を理解したら、次はReactでモダンなUIを構築しましょう！
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
