import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Variable, Calculator, GitBranch } from 'lucide-react';

export default function JsBasicSyntaxPage() {
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
            <Code className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">JavaScript 基本構文</h1>
          <p className="text-xl text-gray-600">
            JavaScriptの基本的な文法、変数、データ型、演算子、制御構文について学びます。
            これらはJavaScriptプログラミングの基礎となる重要な要素です。
          </p>
        </div>

        {/* 変数宣言 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Variable className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">変数宣言</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              変数は、データを格納するための入れ物です。JavaScriptでは、let、const、varの3つの方法で変数を宣言できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// let: 再代入可能な変数
let name = '山田太郎';
name = '佐藤花子'; // 再代入OK
let age; // 初期値なしでも宣言可能
age = 30;

// const: 再代入不可の定数
const PI = 3.14159;
// PI = 3.14; // エラー！再代入できない

const user = { name: '太郎', age: 30 };
user.name = '花子'; // オブジェクトのプロパティは変更OK
// user = {}; // エラー！再代入はできない

// var: 旧式の変数宣言（なるべく使わない）
var oldStyle = 'ES5以前の方法';

// 変数の命名規則
let userName; // キャメルケース（推奨）
let user_name; // スネークケース
let UserName; // パスカルケース（クラス名など）
const MAX_COUNT = 100; // 定数は大文字（慣習）`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">let、const、varの違い</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>let：</strong>ブロックスコープ、再代入可能、再宣言不可</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>const：</strong>ブロックスコープ、再代入不可、再宣言不可</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>var：</strong>関数スコープ、再代入可能、再宣言可能（非推奨）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* データ型 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">データ型</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              JavaScriptには、プリミティブ型とオブジェクト型の2つのカテゴリーがあります。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// プリミティブ型

// String（文字列）
let text = '文字列';
let text2 = "ダブルクォートも使える";
let template = \`テンプレートリテラル: \${text}\`;

// Number（数値）
let integer = 42;
let float = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN; // Not a Number

// Boolean（真偽値）
let isTrue = true;
let isFalse = false;

// Null（値が存在しない）
let empty = null;

// Undefined（未定義）
let notDefined;
console.log(notDefined); // undefined

// Symbol（ES6で追加）
let sym = Symbol('description');

// BigInt（大きな整数）
let bigNumber = 123456789012345678901234567890n;

// オブジェクト型

// Object（オブジェクト）
let person = {
    name: '山田太郎',
    age: 30,
    city: '東京'
};

// Array（配列）
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'text', true, null, { key: 'value' }];

// Function（関数）
function greet(name) {
    return \`こんにちは、\${name}さん！\`;
}

// Date（日付）
let now = new Date();
let specificDate = new Date('2024-01-01');

// 型の確認
console.log(typeof text); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (バグだが互換性のため残されている)
console.log(typeof {}); // "object"
console.log(Array.isArray([])); // true`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 演算子 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Calculator className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">演算子</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">算術演算子</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 算術演算子
let a = 10;
let b = 3;

console.log(a + b); // 13 (加算)
console.log(a - b); // 7 (減算)
console.log(a * b); // 30 (乗算)
console.log(a / b); // 3.333... (除算)
console.log(a % b); // 1 (剰余)
console.log(a ** b); // 1000 (べき乗)

// インクリメント/デクリメント
let count = 0;
count++; // 1 (後置インクリメント)
++count; // 2 (前置インクリメント)
count--; // 1 (後置デクリメント)
--count; // 0 (前置デクリメント)

// 代入演算子
let x = 10;
x += 5; // x = x + 5 → 15
x -= 3; // x = x - 3 → 12
x *= 2; // x = x * 2 → 24
x /= 4; // x = x / 4 → 6
x %= 4; // x = x % 4 → 2`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">比較演算子</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 比較演算子
console.log(10 === 10); // true (厳密等価)
console.log(10 === '10'); // false (型も比較)
console.log(10 == '10'); // true (型変換後に比較)

console.log(10 !== 5); // true (厳密不等価)
console.log(10 != 5); // true (不等価)

console.log(10 > 5); // true (より大きい)
console.log(10 < 5); // false (より小さい)
console.log(10 >= 10); // true (以上)
console.log(10 <= 5); // false (以下)

// 注意: == と === の違い
console.log(0 == false); // true (型変換される)
console.log(0 === false); // false (型が異なる)
console.log('' == false); // true
console.log('' === false); // false

// 推奨: 常に === と !== を使う`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">論理演算子</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 論理演算子
console.log(true && true); // true (AND: 両方true)
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true (OR: どちらかtrue)
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false (NOT: 反転)
console.log(!false); // true

// 短絡評価
let user = null;
let name = user && user.name; // user が null なので評価されず name は null

let defaultName = user || '名無し'; // user が null なので '名無し'

// Nullish Coalescing (??)
let value1 = null ?? 'デフォルト'; // 'デフォルト'
let value2 = 0 ?? 'デフォルト'; // 0 (|| との違い)
let value3 = '' ?? 'デフォルト'; // '' (|| との違い)`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 制御構文 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <GitBranch className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">制御構文</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">条件分岐（if文）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// if文
let score = 85;

if (score >= 90) {
    console.log('優秀');
} else if (score >= 70) {
    console.log('良好');
} else if (score >= 60) {
    console.log('合格');
} else {
    console.log('不合格');
}

// 三項演算子
let result = score >= 60 ? '合格' : '不合格';
console.log(result);

// 複雑な条件
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log('運転できます');
} else {
    console.log('運転できません');
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">switch文</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// switch文
let day = '月曜日';

switch (day) {
    case '月曜日':
        console.log('週の始まり');
        break;
    case '金曜日':
        console.log('週末近し');
        break;
    case '土曜日':
    case '日曜日':
        console.log('週末');
        break;
    default:
        console.log('平日');
}

// break を忘れると次のcaseも実行される（フォールスルー）
let grade = 'A';
switch (grade) {
    case 'A':
        console.log('優秀');
        // break がないので次も実行される
    case 'B':
        console.log('良好');
        break;
    default:
        console.log('その他');
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">ループ（繰り返し）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// for文
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while文
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do-while文（最低1回は実行される）
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// 配列のループ
let fruits = ['りんご', 'バナナ', 'オレンジ'];

// for...of（値を取得）
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in（インデックスを取得）
for (let index in fruits) {
    console.log(index, fruits[index]);
}

// forEach
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});

// オブジェクトのループ
let person = { name: '太郎', age: 30, city: '東京' };

for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// break と continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // 3 をスキップ
    if (i === 7) break; // 7 で終了
    console.log(i); // 0, 1, 2, 4, 5, 6
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 文字列操作 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">文字列操作</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 文字列の基本操作
let text = 'Hello, World!';

// 長さ
console.log(text.length); // 13

// 文字へのアクセス
console.log(text[0]); // 'H'
console.log(text.charAt(0)); // 'H'

// 検索
console.log(text.indexOf('World')); // 7
console.log(text.includes('World')); // true
console.log(text.startsWith('Hello')); // true
console.log(text.endsWith('!')); // true

// 切り出し
console.log(text.slice(0, 5)); // 'Hello'
console.log(text.substring(7, 12)); // 'World'
console.log(text.substr(7, 5)); // 'World' (非推奨)

// 大文字・小文字変換
console.log(text.toLowerCase()); // 'hello, world!'
console.log(text.toUpperCase()); // 'HELLO, WORLD!'

// 置換
console.log(text.replace('World', 'JavaScript')); // 'Hello, JavaScript!'
console.log(text.replaceAll('l', 'L')); // 'HeLLo, WorLd!'

// 分割
let words = text.split(', '); // ['Hello', 'World!']
let chars = text.split(''); // ['H', 'e', 'l', ...]

// 結合
let joined = ['Hello', 'World'].join(', '); // 'Hello, World'

// トリム（空白除去）
let padded = '  trim me  ';
console.log(padded.trim()); // 'trim me'
console.log(padded.trimStart()); // 'trim me  '
console.log(padded.trimEnd()); // '  trim me'

// 繰り返し
console.log('abc'.repeat(3)); // 'abcabcabc'

// パディング
console.log('5'.padStart(3, '0')); // '005'
console.log('5'.padEnd(3, '0')); // '500'

// テンプレートリテラル
let name = '太郎';
let age = 30;
let message = \`私の名前は\${name}で、\${age}歳です。\`;
console.log(message);

// 複数行
let multiline = \`
    これは
    複数行の
    文字列です
\`;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 配列操作 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">配列操作</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 配列の作成
let arr = [1, 2, 3, 4, 5];
let empty = [];
let mixed = [1, 'text', true, null, { key: 'value' }];

// 要素へのアクセス
console.log(arr[0]); // 1
console.log(arr[arr.length - 1]); // 5 (最後の要素)

// 要素の追加
arr.push(6); // 末尾に追加 → [1, 2, 3, 4, 5, 6]
arr.unshift(0); // 先頭に追加 → [0, 1, 2, 3, 4, 5, 6]

// 要素の削除
arr.pop(); // 末尾を削除 → [0, 1, 2, 3, 4, 5]
arr.shift(); // 先頭を削除 → [1, 2, 3, 4, 5]

// 要素の検索
console.log(arr.indexOf(3)); // 2
console.log(arr.includes(3)); // true
console.log(arr.find(n => n > 3)); // 4
console.log(arr.findIndex(n => n > 3)); // 3

// 配列の結合
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2); // [1, 2, 3, 4]
let spread = [...arr1, ...arr2]; // [1, 2, 3, 4]

// スライス（切り出し）
let sliced = arr.slice(1, 4); // [2, 3, 4]

// スプライス（削除・挿入）
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1); // インデックス2から1個削除 → [1, 2, 4, 5]
numbers.splice(2, 0, 3); // インデックス2に3を挿入 → [1, 2, 3, 4, 5]
numbers.splice(2, 1, 99); // インデックス2を99に置換 → [1, 2, 99, 4, 5]

// ソート
let nums = [3, 1, 4, 1, 5, 9];
nums.sort(); // [1, 1, 3, 4, 5, 9]
nums.sort((a, b) => b - a); // [9, 5, 4, 3, 1, 1] (降順)

// リバース
nums.reverse(); // 配列を逆順に

// map（変換）
let doubled = arr.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter（抽出）
let evens = arr.filter(n => n % 2 === 0); // [2, 4]

// reduce（集約）
let sum = arr.reduce((total, n) => total + n, 0); // 15

// every / some
console.log(arr.every(n => n > 0)); // true（全てが条件を満たす）
console.log(arr.some(n => n > 4)); // true（少なくとも1つが条件を満たす）

// join（文字列化）
console.log(arr.join(', ')); // '1, 2, 3, 4, 5'`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              JavaScriptの基本構文として、変数宣言、データ型、演算子、制御構文を学びました。
              これらはプログラミングの基礎となる重要な要素です。
            </p>
            <p>
              let と const を使った変数宣言、様々なデータ型の理解、条件分岐やループの使い方を
              マスターすることで、より複雑なプログラムを書けるようになります。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            基本構文を理解したら、次は関数について学びましょう！
          </p>
          <Link 
            to="/study/javascript/functions"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            関数を学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
