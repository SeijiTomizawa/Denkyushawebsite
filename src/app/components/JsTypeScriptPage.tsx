import { Link } from 'react-router-dom';
import { ArrowLeft, FileJson, Shield, Code } from 'lucide-react';

export default function JsTypeScriptPage() {
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
            <FileJson className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">TypeScript</h1>
          <p className="text-xl text-gray-600">
            TypeScriptは、JavaScriptに型システムを追加した言語です。
            型安全性により、バグを早期に発見し、より保守しやすいコードを書けます。
          </p>
        </div>

        {/* TypeScriptとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <FileJson className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">TypeScriptとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              TypeScriptは、Microsoftが開発したJavaScriptのスーパーセットです。
              JavaScriptに型定義を追加することで、コンパイル時に型エラーを検出できます。
              最終的にはJavaScriptにコンパイルされるため、既存のJavaScriptコードと互換性があります。
            </p>

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

        {/* 基本的な型 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的な型</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// プリミティブ型
let name: string = '山田太郎';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;

// any型（型チェックを無効化、なるべく使わない）
let anything: any = 'string';
anything = 123;
anything = true;

// unknown型（anyより安全）
let value: unknown = 'hello';
// value.toUpperCase(); // エラー！型の確認が必要
if (typeof value === 'string') {
    value.toUpperCase(); // OK
}

// void型（戻り値なし）
function logMessage(message: string): void {
    console.log(message);
}

// never型（決して値を返さない）
function throwError(message: string): never {
    throw new Error(message);
}

// 配列
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ['りんご', 'バナナ'];
let mixed: (number | string)[] = [1, 'two', 3];

// タプル（要素数と型が固定）
let person: [string, number] = ['太郎', 30];
let coordinates: [number, number, number] = [10, 20, 30];

// オブジェクト
let user: { name: string; age: number } = {
    name: '太郎',
    age: 30
};

// オプショナルプロパティ
let config: { host: string; port?: number } = {
    host: 'localhost'
    // portは省略可能
};

// 読み取り専用プロパティ
let point: { readonly x: number; readonly y: number } = {
    x: 10,
    y: 20
};
// point.x = 30; // エラー！

// リテラル型
let direction: 'up' | 'down' | 'left' | 'right' = 'up';
let status: 'active' | 'inactive' | 'pending' = 'active';
let zero: 0 = 0;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* インターフェースと型エイリアス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Shield className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">インターフェースと型エイリアス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">インターフェース</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// インターフェースの定義
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // オプショナル
    readonly createdAt: Date; // 読み取り専用
}

const user: User = {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
    createdAt: new Date()
};

// インターフェースの拡張
interface Admin extends User {
    role: string;
    permissions: string[];
}

const admin: Admin = {
    id: 1,
    name: '管理者',
    email: 'admin@example.com',
    createdAt: new Date(),
    role: 'admin',
    permissions: ['read', 'write', 'delete']
};

// メソッドを含むインターフェース
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

const calc: Calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// インデックスシグネチャ
interface Dictionary {
    [key: string]: string;
}

const dict: Dictionary = {
    hello: 'こんにちは',
    goodbye: 'さようなら'
};`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">型エイリアス</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 型エイリアスの定義
type ID = number | string;
type Status = 'active' | 'inactive' | 'pending';

let userId: ID = 123;
let userStatus: Status = 'active';

// オブジェクト型
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

// Union型（複数の型のいずれか）
type Result = number | string | boolean;

function process(value: Result): void {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value);
    }
}

// Intersection型（複数の型を組み合わせ）
type Colorful = {
    color: string;
};

type Circle = {
    radius: number;
};

type ColorfulCircle = Colorful & Circle;

const circle: ColorfulCircle = {
    color: 'red',
    radius: 10
};

// 関数型
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 関数の型 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">関数の型</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 関数の型注釈
function add(a: number, b: number): number {
    return a + b;
}

// アロー関数
const multiply = (a: number, b: number): number => a * b;

// オプショナル引数
function greet(name: string, greeting?: string): string {
    return \`\${greeting || 'こんにちは'}, \${name}さん！\`;
}

// デフォルト引数
function introduce(name: string, age: number = 0): string {
    return \`\${name}（\${age}歳）\`;
}

// Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

// オーバーロード
function getValue(id: number): string;
function getValue(name: string): number;
function getValue(idOrName: number | string): string | number {
    if (typeof idOrName === 'number') {
        return 'User' + idOrName;
    } else {
        return idOrName.length;
    }
}

// 関数型の定義
type Operation = (a: number, b: number) => number;

const divide: Operation = (a, b) => a / b;

// コールバック関数
function fetchData(callback: (data: string) => void): void {
    setTimeout(() => {
        callback('データ');
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ジェネリクス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Shield className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ジェネリクス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              ジェネリクスは、型を変数のように扱う機能です。
              再利用可能で型安全なコードを書けます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なジェネリクス
function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(42); // number型
const str = identity<string>('hello'); // string型
const auto = identity(true); // 型推論でboolean型

// 配列の関数
function first<T>(array: T[]): T | undefined {
    return array[0];
}

const firstNum = first([1, 2, 3]); // number | undefined
const firstStr = first(['a', 'b', 'c']); // string | undefined

// 複数の型パラメータ
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const p1 = pair<number, string>(1, 'one');
const p2 = pair(true, 42); // 型推論

// ジェネリックインターフェース
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: 'hello' };

// ジェネリッククラス
class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);

// 制約付きジェネリクス
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(value: T): void {
    console.log(value.length);
}

logLength('hello'); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // エラー！numberにはlengthがない

// keyofを使ったジェネリクス
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: '太郎', age: 30 };
const name = getProperty(person, 'name'); // string型
const age = getProperty(person, 'age'); // number型
// getProperty(person, 'invalid'); // エラー！`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ユーティリティ型 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Shield className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ユーティリティ型</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              TypeScriptには、既存の型から新しい型を作成するためのユーティリティ型が用意されています。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Partial<T>（すべてのプロパティをオプショナルに）
type PartialTodo = Partial<Todo>;
// { title?: string; description?: string; completed?: boolean; }

const partialTodo: PartialTodo = {
    title: 'タイトルのみ'
};

// Required<T>（すべてのプロパティを必須に）
type RequiredTodo = Required<Todo>;

// Readonly<T>（すべてのプロパティを読み取り専用に）
type ReadonlyTodo = Readonly<Todo>;

const todo: ReadonlyTodo = {
    title: 'タイトル',
    description: '説明',
    completed: false
};
// todo.title = '変更'; // エラー！

// Pick<T, K>（特定のプロパティのみ選択）
type TodoPreview = Pick<Todo, 'title' | 'completed'>;
// { title: string; completed: boolean; }

// Omit<T, K>（特定のプロパティを除外）
type TodoInfo = Omit<Todo, 'completed'>;
// { title: string; description: string; }

// Record<K, T>（キーと値の型を指定）
type PageInfo = {
    title: string;
    url: string;
};

type Pages = Record<'home' | 'about' | 'contact', PageInfo>;

const pages: Pages = {
    home: { title: 'ホーム', url: '/' },
    about: { title: '概要', url: '/about' },
    contact: { title: 'お問い合わせ', url: '/contact' }
};

// Exclude<T, U>（Uを除外）
type T1 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

// Extract<T, U>（Uのみ抽出）
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'd'>; // 'a'

// NonNullable<T>（nullとundefinedを除外）
type T3 = NonNullable<string | number | null | undefined>; // string | number

// ReturnType<T>（関数の戻り値の型を取得）
function createUser() {
    return { name: '太郎', age: 30 };
}

type User = ReturnType<typeof createUser>;
// { name: string; age: number; }

// Parameters<T>（関数の引数の型を取得）
function greet(name: string, age: number) {
    return \`\${name}（\${age}歳）\`;
}

type GreetParams = Parameters<typeof greet>;
// [name: string, age: number]`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* クラス */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Code className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">クラス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なクラス
class Person {
    // プロパティ
    name: string;
    age: number;
    
    // コンストラクタ
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    // メソッド
    introduce(): string {
        return \`\${this.name}（\${this.age}歳）\`;
    }
}

const person = new Person('太郎', 30);
console.log(person.introduce());

// アクセス修飾子
class BankAccount {
    private balance: number; // プライベート（クラス内のみ）
    protected accountNumber: string; // プロテクテッド（サブクラスでも可）
    public owner: string; // パブリック（どこからでも）
    
    constructor(owner: string, initialBalance: number) {
        this.owner = owner;
        this.balance = initialBalance;
        this.accountNumber = Math.random().toString();
    }
    
    deposit(amount: number): void {
        this.balance += amount;
    }
    
    getBalance(): number {
        return this.balance;
    }
}

// 短縮記法
class User {
    constructor(
        public name: string,
        private age: number,
        protected email: string
    ) {}
}

// 継承
class Student extends Person {
    constructor(name: string, age: number, public grade: number) {
        super(name, age);
    }
    
    study(): void {
        console.log(\`\${this.name}が勉強中\`);
    }
}

// 抽象クラス
abstract class Animal {
    constructor(public name: string) {}
    
    abstract makeSound(): string; // 抽象メソッド
    
    move(): void {
        console.log('移動中');
    }
}

class Dog extends Animal {
    makeSound(): string {
        return 'ワンワン';
    }
}

// インターフェースの実装
interface Drawable {
    draw(): void;
}

class Circle implements Drawable {
    constructor(public radius: number) {}
    
    draw(): void {
        console.log(\`半径\${this.radius}の円を描く\`);
    }
}

// 静的メンバー
class MathUtil {
    static PI = 3.14159;
    
    static calculateCircumference(radius: number): number {
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.calculateCircumference(10));`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              TypeScriptは、JavaScriptに型システムを追加することで、より安全で保守しやすいコードを書けます。
              基本的な型、インターフェース、ジェネリクス、ユーティリティ型などを活用することで、
              バグを早期に発見し、開発効率を向上させることができます。
            </p>
            <p>
              エディタの自動補完やリファクタリング機能も強力になるため、大規模なプロジェクトや
              チーム開発では特に効果を発揮します。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            TypeScriptを理解したら、次はモダンJavaScriptの機能を学びましょう！
          </p>
          <Link 
            to="/study/javascript/modern-js"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            モダンJavaScriptを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
