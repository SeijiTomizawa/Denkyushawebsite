import { Link } from 'react-router-dom';
import { ArrowLeft, FileCode, Code2, Variable, FunctionSquare, Box, Layers, AlertCircle, Wrench, Bug, List } from 'lucide-react';

export default function PhpBasicSyntaxPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/php" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          PHPページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <FileCode className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">PHP 基本構文</h1>
          <p className="text-xl text-gray-600">
            PHPの基本的な文法、変数、関数について学びます。
            これらはPHPプログラミングの基礎となる重要な要素です。
          </p>
        </div>

        {/* 目次 */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <List className="text-purple-600" size={20} />
            </div>
            <h2 className="text-2xl text-gray-900">目次</h2>
          </div>
          
          <nav className="grid md:grid-cols-2 gap-3">
            <a 
              href="#syntax" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Code2 className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">文法</span>
            </a>
            <a 
              href="#variables" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Variable className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">変数</span>
            </a>
            <a 
              href="#functions" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <FunctionSquare className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">関数</span>
            </a>
            <a 
              href="#oop" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Box className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">オブジェクト指向プログラミング</span>
            </a>
            <a 
              href="#fp" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Layers className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">関数型プログラミング</span>
            </a>
            <a 
              href="#best-practices" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <AlertCircle className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">コーディング注意点</span>
            </a>
            <a 
              href="#design-patterns" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Wrench className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">デザインパターン</span>
            </a>
            <a 
              href="#debugging" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Bug className="text-purple-600" size={18} />
              <span className="text-gray-700 group-hover:text-purple-600">デバッグ方法</span>
            </a>
          </nav>
        </div>

        {/* 文法セクション */}
        <div id="syntax" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Code2 className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">文法</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">PHPタグと基本的な記述ルール</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              PHPコードは <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">&lt;?php</code> で始まり、
              <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">?&gt;</code> で終わります。
              ただし、PHPファイルの最後にある場合は、閉じタグ <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">?&gt;</code> を
              省略することが推奨されています。これにより、意図しない空白や改行の出力を防ぐことができます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// これは単一行コメントです

/*
 * これは複数行コメントです
 * 複数の行にわたってコメントを書けます
 */

echo "Hello, World!"; // 文の終わりにはセミコロンが必要

// 閉じタグ ?> は省略可能（推奨）`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">重要なポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>すべての文の終わりにはセミコロン（;）を付けます</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>PHPは大文字と小文字を区別します（変数名は特に注意）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>コメントは <code className="bg-purple-100 px-1 rounded text-sm">//</code> または <code className="bg-purple-100 px-1 rounded text-sm">/* */</code> で記述</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>echo や print を使って文字列を出力できます</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 条件分岐 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">条件分岐（if文、switch文）</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              条件分岐は、特定の条件によってプログラムの実行を分岐させる制御構造です。
              if文、else、elseif、switch文を使って、様々な条件に応じた処理を記述できます。
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">if文、else、elseif</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// 基本的なif文
$age = 20;

if ($age >= 18) {
    echo "成人です";
}

// if-else文
$score = 75;

if ($score >= 60) {
    echo "合格です";
} else {
    echo "不合格です";
}

// if-elseif-else文
$grade = 85;

if ($grade >= 90) {
    echo "評価：A";
} elseif ($grade >= 80) {
    echo "評価：B";
} elseif ($grade >= 70) {
    echo "評価：C";
} elseif ($grade >= 60) {
    echo "評価：D";
} else {
    echo "評価：F";
}

// 複数の条件（AND、OR）
$isLoggedIn = true;
$isAdmin = false;

if ($isLoggedIn && $isAdmin) {
    echo "管理者ページへようこそ";
}

if ($isLoggedIn || $isAdmin) {
    echo "アクセス許可";
}

// 否定（NOT）
if (!$isAdmin) {
    echo "管理者ではありません";
}

// 三項演算子（短縮形）
$status = ($age >= 18) ? "成人" : "未成年";
echo $status;

// null合体演算子（PHP 7以降）
$username = $_GET['name'] ?? 'ゲスト';
echo $username;

// 比較演算子
$a = 5;
$b = "5";

if ($a == $b) {  // 値が等しい
    echo "値が同じ";
}

if ($a === $b) {  // 値と型が等しい
    echo "値と型が同じ";
} else {
    echo "型が異なる";  // これが実行される
}`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">switch文</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// switch文
$day = "月曜日";

switch ($day) {
    case "月曜日":
        echo "週の始まりです";
        break;
    case "火曜日":
    case "水曜日":
    case "木曜日":
        echo "平日の真ん中です";
        break;
    case "金曜日":
        echo "もうすぐ週末！";
        break;
    case "土曜日":
    case "日曜日":
        echo "週末です";
        break;
    default:
        echo "不明な曜日";
        break;
}

// match式（PHP 8以降）
$result = match ($day) {
    "月曜日" => "週の始まり",
    "火曜日", "水曜日", "木曜日" => "平日の真ん中",
    "金曜日" => "もうすぐ週末",
    "土曜日", "日曜日" => "週末",
    default => "不明な曜日"
};

echo $result;`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-gray-700">
                <strong>ポイント：</strong>switch文ではbreakを忘れずに記述しましょう。
                breakがないと次のcaseも実行されてしまいます。
                PHP 8以降のmatch式では、breakが不要で自動的に値を返します。
              </p>
            </div>
          </div>

          {/* ループ処理 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">ループ処理（繰り返し）</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              ループ処理は、同じ処理を繰り返し実行するための制御構造です。
              for文、while文、do-while文、foreach文を使って、効率的に繰り返し処理を記述できます。
            </p>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">for文</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// 基本的なfor文
for ($i = 0; $i < 5; $i++) {
    echo "回数: " . $i . "\\n";
}
// 出力: 回数: 0, 1, 2, 3, 4

// 配列の要素を出力
$numbers = [10, 20, 30, 40, 50];

for ($i = 0; $i < count($numbers); $i++) {
    echo $numbers[$i] . "\\n";
}

// 2つずつ増やす
for ($i = 0; $i <= 10; $i += 2) {
    echo $i . " ";
}
// 出力: 0 2 4 6 8 10

// 九九の表
for ($i = 1; $i <= 9; $i++) {
    for ($j = 1; $j <= 9; $j++) {
        echo $i * $j . " ";
    }
    echo "\\n";
}`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">while文とdo-while文</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// while文（前判定）
$count = 0;

while ($count < 5) {
    echo "カウント: " . $count . "\\n";
    $count++;
}

// do-while文（後判定）
$count = 0;

do {
    echo "カウント: " . $count . "\\n";
    $count++;
} while ($count < 5);

// 条件がfalseでも最低1回は実行される
$num = 10;
do {
    echo "少なくとも1回実行される\\n";
} while ($num < 5);`}</code>
                </pre>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-3 text-gray-900">foreach文（配列のループ）</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// 基本的なforeach文
$fruits = ["りんご", "バナナ", "オレンジ"];

foreach ($fruits as $fruit) {
    echo $fruit . "\\n";
}

// インデックス付きで取得
foreach ($fruits as $index => $fruit) {
    echo $index . ": " . $fruit . "\\n";
}

// 連想配列のループ
$user = [
    "name" => "山田太郎",
    "age" => 30,
    "email" => "yamada@example.com"
];

foreach ($user as $key => $value) {
    echo $key . ": " . $value . "\\n";
}

// 参照渡しで値を変更
$numbers = [1, 2, 3, 4, 5];

foreach ($numbers as &$num) {
    $num *= 2;
}
unset($num);

print_r($numbers);  // [2, 4, 6, 8, 10]`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-gray-700">
                <strong>ループの選択：</strong>
                回数が決まっている場合はfor文、条件による繰り返しはwhile文、
                配列の要素を処理する場合はforeach文を使用するのが一般的です。
              </p>
            </div>
          </div>

          {/* 制御文 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">制御文（break、continue、return）</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              ループの実行を制御するための特殊な命令文です。
              break、continue、returnを使って、ループの流れを柔軟に制御できます。
            </p>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// break: ループを完全に抜ける
for ($i = 0; $i < 10; $i++) {
    if ($i === 5) {
        break;
    }
    echo $i . " ";
}
// 出力: 0 1 2 3 4

// continue: 現在の反復をスキップ
for ($i = 0; $i < 10; $i++) {
    if ($i % 2 === 0) {
        continue;
    }
    echo $i . " ";
}
// 出力: 1 3 5 7 9

// return: 関数から値を返す
function findValue($array, $target) {
    foreach ($array as $value) {
        if ($value === $target) {
            return true;
        }
    }
    return false;
}

$numbers = [1, 2, 3, 4, 5];
if (findValue($numbers, 3)) {
    echo "値が見つかりました";
}`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">制御文のポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>break：</strong>ループを完全に終了し、ループの外に出る</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>continue：</strong>現在の反復をスキップし、次の反復へ進む</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>return：</strong>関数から値を返し、関数の実行を終了する</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 変数セクション */}
        <div id="variables" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Variable className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">変数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">変数の宣言と使用</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              PHPの変数は <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">$</code> 記号で始まります。
              変数名は英字またはアンダースコアで始まり、その後に英数字とアンダースコアを含めることができます。
              PHPは動的型付け言語なので、変数の型を宣言する必要はありません。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// 文字列型
$name = "電究社";
$message = 'こんにちは';

// 数値型（整数）
$age = 30;
$count = 100;

// 数値型（浮動小数点数）
$price = 9.99;
$rate = 0.08;

// 論理型（真偽値）
$isActive = true;
$hasError = false;

// 配列
$colors = array("赤", "青", "緑");
$numbers = [1, 2, 3, 4, 5]; // PHP 5.4以降の短縮構文

// 連想配列
$user = array(
    "name" => "山田太郎",
    "age" => 25,
    "email" => "yamada@example.com"
);

// 変数の出力
echo $name; // "電究社"
echo "私の名前は " . $name . " です。"; // 文字列連結

// null値
$emptyValue = null;`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">変数の型</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold text-purple-700 mb-2">基本的なデータ型</p>
                  <ul className="space-y-1 text-sm">
                    <li><code className="bg-purple-100 px-1 rounded">string</code> - 文字列</li>
                    <li><code className="bg-purple-100 px-1 rounded">integer</code> - 整数</li>
                    <li><code className="bg-purple-100 px-1 rounded">float</code> - 浮動小数点数</li>
                    <li><code className="bg-purple-100 px-1 rounded">boolean</code> - 真偽値</li>
                    <li><code className="bg-purple-100 px-1 rounded">array</code> - 配列</li>
                    <li><code className="bg-purple-100 px-1 rounded">null</code> - null値</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 mb-2">変数のスコープ</p>
                  <ul className="space-y-1 text-sm">
                    <li><code className="bg-purple-100 px-1 rounded">ローカル変数</code> - 関数内</li>
                    <li><code className="bg-purple-100 px-1 rounded">グローバル変数</code> - 関数外</li>
                    <li><code className="bg-purple-100 px-1 rounded">スタティック変数</code> - 値を保持</li>
                    <li><code className="bg-purple-100 px-1 rounded">スーパーグローバル</code> - $_GET, $_POST等</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 関数セクション */}
        <div id="functions" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <FunctionSquare className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">関数</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">関数の定義と呼び出し</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              関数は <code className="bg-purple-100 px-2 py-1 rounded text-purple-700">function</code> キーワードを使って定義します。
              関数を使うことで、コードを再利用可能な単位に分割し、プログラムの構造を整理できます。
              引数を受け取り、処理を行い、結果を返すことができます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// 基本的な関数
function greet() {
    echo "こんにちは！";
}

// 関数の呼び出し
greet(); // "こんにちは！"

// 引数を受け取る関数
function greetUser($name) {
    echo "こんにちは、" . $name . "さん！";
}

greetUser("太郎"); // "こんにちは、太郎さん！"

// 複数の引数を持つ関数
function add($a, $b) {
    return $a + $b;
}

$result = add(5, 3); // 8

// デフォルト引数
function greetWithTime($name, $time = "おはよう") {
    return $time . "、" . $name . "さん！";
}

echo greetWithTime("花子"); // "おはよう、花子さん！"
echo greetWithTime("次郎", "こんばんは"); // "こんばんは、次郎さん！"

// 型宣言（PHP 7以降）
function multiply(int $a, int $b): int {
    return $a * $b;
}

$product = multiply(4, 5); // 20

// 可変長引数
function sum(...$numbers) {
    $total = 0;
    foreach ($numbers as $num) {
        $total += $num;
    }
    return $total;
}

echo sum(1, 2, 3, 4, 5); // 15

// 無名関数（クロージャ）
$double = function($n) {
    return $n * 2;
};

echo $double(5); // 10

// アロー関数（PHP 7.4以降）
$triple = fn($n) => $n * 3;
echo $triple(5); // 15`}</code>
              </pre>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-xl mb-3 text-gray-900">関数の重要な概念</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">戻り値：</span>
                    <code className="bg-purple-100 px-1 rounded text-sm ml-1">return</code> 文を使って値を返す
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">引数のデフォルト値：</span>
                    引数にデフォルト値を設定できる
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">型宣言：</span>
                    PHP 7以降では引数と戻り値の型を指定できる
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">可変長引数：</span>
                    <code className="bg-purple-100 px-1 rounded text-sm ml-1">...</code> を使って任意の数の引数を受け取れる
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">無名関数：</span>
                    変数に代入できる関数（クロージャ）
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">アロー関数：</span>
                    PHP 7.4以降で使える短縮構文 <code className="bg-purple-100 px-1 rounded text-sm">fn()</code>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* オブジェクト指向プログラミングセクション */}
        <div id="oop" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Box className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">オブジェクト指向プログラミング（OOP）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">クラスとオブジェクト</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              オブジェクト指向プログラミングは、データと機能をオブジェクトとして組み合わせる手法です。
              クラスは設計図、オブジェクトはその設計図から作られた実体です。
              カプセル化、継承、ポリモーフィズムなどの概念により、保守性と再利用性の高いコードが書けます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// クラスの定義
class User {
    // プロパティ（属性）
    private $name;
    private $email;
    protected $age;
    public $role = 'user';
    
    // コンストラクタ（初期化）
    public function __construct($name, $email, $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }
    
    // メソッド（機能）
    public function getName() {
        return $this->name;
    }
    
    public function setName($name) {
        $this->name = $name;
    }
    
    public function getEmail() {
        return $this->email;
    }
    
    public function greet() {
        return "こんにちは、" . $this->name . "です。";
    }
    
    // スタティックメソッド
    public static function createGuest() {
        return new self('ゲスト', 'guest@example.com', 0);
    }
}

// オブジェクトの生成（インスタンス化）
$user1 = new User('山田太郎', 'yamada@example.com', 30);
echo $user1->greet(); // "こんにちは、山田太郎です。"
echo $user1->getName(); // "山田太郎"

// プロパティへのアクセス
$user1->role = 'admin';
echo $user1->role; // "admin"

// スタティックメソッドの呼び出し
$guest = User::createGuest();
echo $guest->getName(); // "ゲスト"

// 継承
class Admin extends User {
    private $permissions = [];
    
    public function __construct($name, $email, $age) {
        parent::__construct($name, $email, $age);
        $this->role = 'admin';
    }
    
    public function addPermission($permission) {
        $this->permissions[] = $permission;
    }
    
    public function getPermissions() {
        return $this->permissions;
    }
    
    // メソッドのオーバーライド
    public function greet() {
        return "管理者の" . $this->getName() . "です。";
    }
}

$admin = new Admin('佐藤花子', 'sato@example.com', 28);
$admin->addPermission('create_user');
$admin->addPermission('delete_user');
echo $admin->greet(); // "管理者の佐藤花子です。"

// インターフェース
interface Authenticatable {
    public function authenticate($password);
    public function logout();
}

class AuthUser implements Authenticatable {
    private $passwordHash;
    
    public function authenticate($password) {
        return password_verify($password, $this->passwordHash);
    }
    
    public function logout() {
        session_destroy();
    }
}

// 抽象クラス
abstract class Animal {
    protected $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    // 抽象メソッド（サブクラスで実装必須）
    abstract public function makeSound();
    
    // 通常のメソッド
    public function getName() {
        return $this->name;
    }
}

class Dog extends Animal {
    public function makeSound() {
        return "ワンワン！";
    }
}

class Cat extends Animal {
    public function makeSound() {
        return "ニャー！";
    }
}

$dog = new Dog('ポチ');
echo $dog->getName(); // "ポチ"
echo $dog->makeSound(); // "ワンワン！"

$cat = new Cat('タマ');
echo $cat->makeSound(); // "ニャー！"`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">OOPの重要な概念</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">カプセル化：</span>
                    データをprivate/protectedで隠蔽し、publicメソッドで操作
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">継承：</span>
                    既存のクラスを拡張して新しいクラスを作成（extendsキーワード）
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">ポリモーフィズム：</span>
                    同じメソッド名でクラスごとに異なる動作を実装
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">インターフェース：</span>
                    implementsで実装を強制し、共通の契約を定義
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">抽象クラス：</span>
                    共通の機能を提供しつつ、一部の実装をサブクラスに委ねる
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <span className="font-semibold">アクセス修飾子：</span>
                    public（どこからでも）、protected（自身と継承クラス）、private（自身のみ）
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* トレイトとマジックメソッド */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">トレイトとマジックメソッド</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// トレイト（コードの再利用）
trait Timestampable {
    private $createdAt;
    private $updatedAt;
    
    public function setTimestamps() {
        $now = date('Y-m-d H:i:s');
        if (!$this->createdAt) {
            $this->createdAt = $now;
        }
        $this->updatedAt = $now;
    }
    
    public function getCreatedAt() {
        return $this->createdAt;
    }
}

class Article {
    use Timestampable; // トレイトを使用
    
    private $title;
    private $content;
    
    public function __construct($title, $content) {
        $this->title = $title;
        $this->content = $content;
        $this->setTimestamps();
    }
}

$article = new Article('PHPの基礎', '内容...');
echo $article->getCreatedAt();

// マジックメソッド
class MagicExample {
    private $data = [];
    
    // __get: 存在しないプロパティへのアクセス
    public function __get($name) {
        return $this->data[$name] ?? null;
    }
    
    // __set: 存在しないプロパティへの代入
    public function __set($name, $value) {
        $this->data[$name] = $value;
    }
    
    // __call: 存在しないメソッドの呼び出し
    public function __call($name, $arguments) {
        echo "メソッド {$name} が呼ばれました";
    }
    
    // __toString: オブジェクトを文字列として扱う
    public function __toString() {
        return json_encode($this->data);
    }
    
    // __invoke: オブジェクトを関数として呼び出す
    public function __invoke($x) {
        return $x * 2;
    }
}

$obj = new MagicExample();
$obj->name = '太郎'; // __set が呼ばれる
echo $obj->name; // __get が呼ばれる
echo $obj; // __toString が呼ばれる
echo $obj(5); // __invoke が呼ばれる → 10`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>トレイト：</strong>複数のクラスで共通のメソッドを再利用する仕組み。
                単一継承の制約を補完し、コードの重複を避けられます。
              </p>
            </div>
          </div>
        </div>

        {/* 関数型プログラミングセクション */}
        <div id="fp" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Layers className="text-green-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">関数型プログラミング（FP）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">配列操作と高階関数</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              関数型プログラミングは、関数を第一級オブジェクトとして扱い、
              副作用を避けて不変性を重視するプログラミングパラダイムです。
              PHPでは、array_map、array_filter、array_reduceなどの高階関数を使って関数型スタイルのコードが書けます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// array_map: 各要素に関数を適用
$numbers = [1, 2, 3, 4, 5];

$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);
// [2, 4, 6, 8, 10]

// アロー関数を使用（PHP 7.4以降）
$squared = array_map(fn($n) => $n * $n, $numbers);
// [1, 4, 9, 16, 25]

// array_filter: 条件に合う要素のみ抽出
$evenNumbers = array_filter($numbers, fn($n) => $n % 2 === 0);
// [2, 4]

$greaterThanThree = array_filter($numbers, fn($n) => $n > 3);
// [4, 5]

// array_reduce: 配列を単一の値に集約
$sum = array_reduce($numbers, fn($carry, $n) => $carry + $n, 0);
// 15

$product = array_reduce($numbers, fn($carry, $n) => $carry * $n, 1);
// 120

// メソッドチェーン的な使用
$result = array_reduce(
    array_filter(
        array_map(fn($n) => $n * 2, $numbers),
        fn($n) => $n > 5
    ),
    fn($carry, $n) => $carry + $n,
    0
);
// (2, 4, 6, 8, 10) → (6, 8, 10) → 24

// 連想配列の操作
$users = [
    ['name' => '太郎', 'age' => 25, 'active' => true],
    ['name' => '花子', 'age' => 30, 'active' => false],
    ['name' => '次郎', 'age' => 22, 'active' => true],
];

// アクティブなユーザーのみ抽出
$activeUsers = array_filter($users, fn($user) => $user['active']);

// 名前のみを抽出
$names = array_map(fn($user) => $user['name'], $activeUsers);
// ['太郎', '次郎']

// 年齢の合計
$totalAge = array_reduce(
    $users,
    fn($carry, $user) => $carry + $user['age'],
    0
);
// 77

// array_walk: 配列の各要素に関数を適用（参照渡し）
$prices = [100, 200, 300];
array_walk($prices, function(&$price) {
    $price *= 1.1; // 10%増税
});
// [110, 220, 330]

// usort: カスタムソート
usort($users, fn($a, $b) => $a['age'] <=> $b['age']);
// 年齢順にソート

// array_column: 特定のカラムを抽出
$ages = array_column($users, 'age');
// [22, 25, 30]

$usersByName = array_column($users, null, 'name');
// 名前をキーにした連想配列`}</code>
              </pre>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl mb-3 text-gray-900">関数型プログラミングの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>不変性：</strong>元のデータを変更せず、新しいデータを生成</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>予測可能性：</strong>同じ入力に対して常に同じ出力を返す（純粋関数）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>コードの簡潔性：</strong>forループより宣言的で読みやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>テストしやすい：</strong>副作用がないため単体テストが容易</span>
                </li>
              </ul>
            </div>
          </div>

          {/* クロージャと部分適用 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">クロージャと部分適用</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<?php
// クロージャ（無名関数）と外部変数のキャプチャ
function createMultiplier($factor) {
    return function($number) use ($factor) {
        return $number * $factor;
    };
}

$double = createMultiplier(2);
$triple = createMultiplier(3);

echo $double(5); // 10
echo $triple(5); // 15

// 高階関数：関数を引数として受け取る
function applyOperation($a, $b, $operation) {
    return $operation($a, $b);
}

$add = fn($x, $y) => $x + $y;
$multiply = fn($x, $y) => $x * $y;

echo applyOperation(5, 3, $add); // 8
echo applyOperation(5, 3, $multiply); // 15

// 関数合成
function compose($f, $g) {
    return function($x) use ($f, $g) {
        return $f($g($x));
    };
}

$addOne = fn($n) => $n + 1;
$double = fn($n) => $n * 2;

$addOneThenDouble = compose($double, $addOne);
echo $addOneThenDouble(5); // (5 + 1) * 2 = 12

// カリー化（部分適用）
function curry($function) {
    return function($arg1) use ($function) {
        return function($arg2) use ($function, $arg1) {
            return $function($arg1, $arg2);
        };
    };
}

$curriedAdd = curry(fn($a, $b) => $a + $b);
$addFive = $curriedAdd(5);
echo $addFive(3); // 8
echo $addFive(10); // 15

// パイプライン処理
function pipe(...$functions) {
    return function($value) use ($functions) {
        return array_reduce(
            $functions,
            fn($carry, $fn) => $fn($carry),
            $value
        );
    };
}

$pipeline = pipe(
    fn($n) => $n + 1,
    fn($n) => $n * 2,
    fn($n) => $n - 3
);

echo $pipeline(5); // ((5 + 1) * 2) - 3 = 9

// メモ化（キャッシュ）
function memoize($function) {
    $cache = [];
    
    return function($arg) use ($function, &$cache) {
        if (!isset($cache[$arg])) {
            $cache[$arg] = $function($arg);
        }
        return $cache[$arg];
    };
}

$fibonacci = memoize(function($n) use (&$fibonacci) {
    if ($n <= 1) return $n;
    return $fibonacci($n - 1) + $fibonacci($n - 2);
});

echo $fibonacci(10); // 55（効率的に計算される）`}</code>
              </pre>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-gray-700">
                <strong>実践的な活用：</strong>高階関数を組み合わせることで、
                複雑なデータ処理を小さな関数に分解し、再利用可能で理解しやすいコードを書けます。
              </p>
            </div>
          </div>
        </div>

        {/* コーディング注意点セクション */}
        <div id="best-practices" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">コーディング注意点</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">PHPコーディングのベストプラクティス</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              品質の高いPHPコードを書くためには、命名規則、コードスタイル、エラー処理などの
              ベストプラクティスを理解し実践することが重要です。
              PSR（PHP Standards Recommendations）に従うことで、チーム開発でも一貫性のあるコードが書けます。
            </p>

            {/* 命名規則 */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">命名規則</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// ✅ クラス名：PascalCase（各単語の頭文字を大文字）
class UserController {}
class DatabaseConnection {}
class OrderProcessor {}

// ✅ メソッド名・関数名：camelCase（最初は小文字、以降は大文字）
public function getUserById($id) {}
function calculateTotal($items) {}
function sendEmailNotification($email) {}

// ✅ 変数名：camelCase または snake_case
$userName = "太郎";
$orderTotal = 1000;
$user_name = "太郎";  // snake_caseも許容される

// ✅ 定数：大文字のSNAKE_CASE
define('MAX_LOGIN_ATTEMPTS', 5);
const DATABASE_HOST = 'localhost';
const API_KEY = 'your-api-key';

// ✅ プライベートプロパティ：アンダースコアで始めることも
class User {
    private $_password;  // または $password
    protected $_email;
}

// ❌ 避けるべき命名
$x = 5;  // 意味が不明
$temp = getData();  // 曖昧
$flag = true;  // 何のフラグかわからない

// ✅ 良い命名
$maxRetryCount = 5;
$userData = getData();
$isAuthenticated = true;`}</code>
                </pre>
              </div>
            </div>

            {/* コードスタイル */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">コードスタイル（PSR-12準拠）</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// ✅ インデント：スペース4つ（タブではなく）
// ✅ 1行の長さ：120文字以内を推奨

namespace App\\Controllers;

use App\\Models\\User;
use App\\Services\\EmailService;

class UserController
{
    // プロパティの後に空行
    private $userModel;
    private $emailService;
    
    // メソッド間に空行
    public function __construct(User $userModel, EmailService $emailService)
    {
        $this->userModel = $userModel;
        $this->emailService = $emailService;
    }
    
    public function create(array $data): bool
    {
        // 制御構造の後にスペース
        if (empty($data['email'])) {
            return false;
        }
        
        // 複数行の配列
        $userData = [
            'name' => $data['name'],
            'email' => $data['email'],
            'status' => 'active',
        ];
        
        // メソッドチェーンは改行して見やすく
        $user = $this->userModel
            ->create($userData)
            ->sendWelcomeEmail()
            ->logActivity();
        
        return true;
    }
    
    // 条件分岐のスタイル
    public function processOrder($order)
    {
        // elseif は1語で書く
        if ($order->isPaid()) {
            $this->shipOrder($order);
        } elseif ($order->isPending()) {
            $this->sendReminder($order);
        } else {
            $this->cancelOrder($order);
        }
    }
}

// ❌ 避けるべきスタイル
class bad_class_name {  // クラス名が小文字
public function badMethod(){  // 開き括弧が同じ行にない
$x=5+3;  // 演算子の前後にスペースがない
if($x>5){echo"test";}  // 読みにくい
}
}`}</code>
                </pre>
              </div>
            </div>

            {/* エラー処理 */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">適切なエラー処理</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// ✅ 例外処理を使用
try {
    $pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
    $stmt->execute([':id' => $userId]);
    
} catch (PDOException $e) {
    // 本番環境では詳細を隠す
    error_log($e->getMessage());
    die('データベースエラーが発生しました');
}

// ✅ カスタム例外の使用
class ValidationException extends Exception {}

function validateEmail($email)
{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new ValidationException('無効なメールアドレスです');
    }
    return true;
}

try {
    validateEmail('invalid-email');
} catch (ValidationException $e) {
    echo '検証エラー: ' . $e->getMessage();
}

// ✅ finally ブロックでクリーンアップ
$file = fopen('data.txt', 'r');
try {
    $content = fread($file, filesize('data.txt'));
    processContent($content);
} catch (Exception $e) {
    error_log($e->getMessage());
} finally {
    fclose($file);  // 必ず実行される
}

// ❌ エラーを無視しない
@file_get_contents('nonexistent.txt');  // @ でエラーを抑制（避けるべき）

// ✅ エラーを適切にハンドリング
$content = @file_get_contents('file.txt');
if ($content === false) {
    error_log('ファイルの読み込みに失敗しました');
    // 適切な処理
}`}</code>
                </pre>
              </div>
            </div>

            {/* その他の注意点 */}
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h4 className="text-xl mb-3 text-gray-900">その他の重要な注意点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>グローバル変数を避ける：</strong>関数やクラスのスコープ内で変数を管理</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>マジックナンバーを定数化：</strong>数値を直接使わず、定数で意味を明確に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>DRY原則：</strong>Don't Repeat Yourself - コードの重複を避ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>単一責任の原則：</strong>関数やクラスは1つの役割のみを持つ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>コメントは「なぜ」を説明：</strong>コードを見れば「何を」はわかる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span><strong>型ヒントを活用：</strong>PHP 7以降は型宣言を使って堅牢性を向上</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* デザインパターンセクション */}
        <div id="design-patterns" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Wrench className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">典型的なデザインパターン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">よく使われるデザインパターン</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              デザインパターンは、ソフトウェア設計における典型的な問題に対する再利用可能な解決策です。
              パターンを理解し活用することで、保守性が高く拡張しやすいコードが書けます。
            </p>

            {/* Singletonパターン */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">Singleton パターン</h4>
              <p className="text-sm text-gray-600 mb-3">クラスのインスタンスが1つだけであることを保証するパターン</p>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
class Database
{
    private static $instance = null;
    private $connection;
    
    // コンストラクタをprivateにして外部からのインスタンス化を防ぐ
    private function __construct()
    {
        $this->connection = new PDO(
            'mysql:host=localhost;dbname=mydb',
            'user',
            'password'
        );
    }
    
    // クローンを禁止
    private function __clone() {}
    
    // シリアライズを禁止
    public function __wakeup()
    {
        throw new Exception("Cannot unserialize singleton");
    }
    
    // インスタンスを取得
    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function getConnection()
    {
        return $this->connection;
    }
}

// 使用例
$db1 = Database::getInstance();
$db2 = Database::getInstance();
// $db1 と $db2 は同じインスタンス`}</code>
                </pre>
              </div>
            </div>

            {/* Factoryパターン */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">Factory パターン</h4>
              <p className="text-sm text-gray-600 mb-3">オブジェクトの生成ロジックをカプセル化するパターン</p>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
interface PaymentInterface
{
    public function pay($amount);
}

class CreditCardPayment implements PaymentInterface
{
    public function pay($amount)
    {
        echo "クレジットカードで{$amount}円を支払いました";
    }
}

class BankTransferPayment implements PaymentInterface
{
    public function pay($amount)
    {
        echo "銀行振込で{$amount}円を支払いました";
    }
}

class PayPalPayment implements PaymentInterface
{
    public function pay($amount)
    {
        echo "PayPalで{$amount}円を支払いました";
    }
}

// Factory クラス
class PaymentFactory
{
    public static function create($type): PaymentInterface
    {
        switch ($type) {
            case 'credit_card':
                return new CreditCardPayment();
            case 'bank_transfer':
                return new BankTransferPayment();
            case 'paypal':
                return new PayPalPayment();
            default:
                throw new Exception("未対応の支払い方法です");
        }
    }
}

// 使用例
$payment = PaymentFactory::create('credit_card');
$payment->pay(5000);`}</code>
                </pre>
              </div>
            </div>

            {/* Strategyパターン */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">Strategy パターン</h4>
              <p className="text-sm text-gray-600 mb-3">アルゴリズムを切り替え可能にするパターン</p>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
interface SortStrategy
{
    public function sort(array $data): array;
}

class BubbleSort implements SortStrategy
{
    public function sort(array $data): array
    {
        // バブルソートの実装
        $n = count($data);
        for ($i = 0; $i < $n - 1; $i++) {
            for ($j = 0; $j < $n - $i - 1; $j++) {
                if ($data[$j] > $data[$j + 1]) {
                    $temp = $data[$j];
                    $data[$j] = $data[$j + 1];
                    $data[$j + 1] = $temp;
                }
            }
        }
        return $data;
    }
}

class QuickSort implements SortStrategy
{
    public function sort(array $data): array
    {
        // クイックソートの実装
        if (count($data) < 2) {
            return $data;
        }
        
        $pivot = $data[0];
        $left = $right = [];
        
        for ($i = 1; $i < count($data); $i++) {
            if ($data[$i] < $pivot) {
                $left[] = $data[$i];
            } else {
                $right[] = $data[$i];
            }
        }
        
        return array_merge(
            $this->sort($left),
            [$pivot],
            $this->sort($right)
        );
    }
}

class Sorter
{
    private $strategy;
    
    public function __construct(SortStrategy $strategy)
    {
        $this->strategy = $strategy;
    }
    
    public function setStrategy(SortStrategy $strategy)
    {
        $this->strategy = $strategy;
    }
    
    public function sort(array $data): array
    {
        return $this->strategy->sort($data);
    }
}

// 使用例
$data = [5, 2, 8, 1, 9];

$sorter = new Sorter(new BubbleSort());
$result1 = $sorter->sort($data);

$sorter->setStrategy(new QuickSort());
$result2 = $sorter->sort($data);`}</code>
                </pre>
              </div>
            </div>

            {/* Observerパターン */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">Observer パターン</h4>
              <p className="text-sm text-gray-600 mb-3">オブジェクトの状態変化を他のオブジェクトに通知するパターン</p>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
interface Observer
{
    public function update($data);
}

class Subject
{
    private $observers = [];
    private $state;
    
    public function attach(Observer $observer)
    {
        $this->observers[] = $observer;
    }
    
    public function detach(Observer $observer)
    {
        $key = array_search($observer, $this->observers, true);
        if ($key !== false) {
            unset($this->observers[$key]);
        }
    }
    
    public function setState($state)
    {
        $this->state = $state;
        $this->notify();
    }
    
    private function notify()
    {
        foreach ($this->observers as $observer) {
            $observer->update($this->state);
        }
    }
}

class EmailNotifier implements Observer
{
    public function update($data)
    {
        echo "メール送信: {$data}\\n";
    }
}

class Logger implements Observer
{
    public function update($data)
    {
        echo "ログ記録: {$data}\\n";
    }
}

class SMSNotifier implements Observer
{
    public function update($data)
    {
        echo "SMS送信: {$data}\\n";
    }
}

// 使用例
$order = new Subject();
$order->attach(new EmailNotifier());
$order->attach(new Logger());
$order->attach(new SMSNotifier());

$order->setState('注文が完了しました');
// すべてのObserverに通知される`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <h4 className="text-xl mb-3 text-gray-900">デザインパターンの活用ポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>適切な場面で使用：</strong>過度な使用は複雑さを増すので注意</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>チーム共通言語：</strong>パターン名でコミュニケーションが円滑に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>拡張性と保守性：</strong>変更に強い設計が可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>フレームワークの理解：</strong>LaravelやSymfonyでも多用されている</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* デバッグ方法セクション */}
        <div id="debugging" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Bug className="text-red-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">デバッグの方法</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">効果的なデバッグ手法</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              デバッグはプログラミングにおいて重要なスキルです。
              var_dump、error_log、Xdebugなどのツールを使いこなすことで、
              問題を素早く特定し解決できるようになります。
            </p>

            {/* 基本的なデバッグ */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">基本的なデバッグ関数</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// var_dump(): 変数の詳細情報を表示
$user = ['name' => '太郎', 'age' => 25];
var_dump($user);
// array(2) { ["name"]=> string(6) "太郎" ["age"]=> int(25) }

// print_r(): 人間が読みやすい形式で表示
print_r($user);
// Array ( [name] => 太郎 [age] => 25 )

// var_export(): PHP形式で出力（コピペで使える）
var_export($user);
// array ( 'name' => '太郎', 'age' => 25, )

// debug_backtrace(): 関数呼び出しのトレース
function levelThree() {
    debug_print_backtrace();
}
function levelTwo() {
    levelThree();
}
function levelOne() {
    levelTwo();
}
levelOne();  // 呼び出しの階層が表示される

// get_defined_vars(): すべての変数を表示
$a = 1;
$b = 2;
print_r(get_defined_vars());

// gettype(): 変数の型を取得
echo gettype($user);  // "array"
echo gettype(123);    // "integer"

// is_*() 関数: 型チェック
var_dump(is_array($user));    // bool(true)
var_dump(is_string($user));   // bool(false)
var_dump(is_null(null));      // bool(true)`}</code>
                </pre>
              </div>
            </div>

            {/* エラーログ */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">エラーログの活用</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// error_log(): ログファイルに記録
error_log('エラーが発生しました');

// 変数をログに記録
$data = ['user_id' => 123, 'action' => 'login'];
error_log('ログイン処理: ' . print_r($data, true));

// カスタムログファイルに記録
error_log(
    "エラー詳細: " . json_encode($data),
    3,
    '/var/log/myapp/error.log'
);

// エラー設定（開発環境）
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// エラー設定（本番環境）
ini_set('display_errors', 0);
error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', '/var/log/php_errors.log');

// カスタムエラーハンドラー
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    $message = "[" . date('Y-m-d H:i:s') . "] ";
    $message .= "Error [$errno]: $errstr in $errfile on line $errline\\n";
    error_log($message, 3, '/var/log/custom_errors.log');
    
    // 本番環境では詳細を隠す
    if (getenv('APP_ENV') === 'production') {
        echo 'エラーが発生しました';
    } else {
        echo $message;
    }
});

// 例外ハンドラー
set_exception_handler(function($exception) {
    error_log(
        'Exception: ' . $exception->getMessage() . 
        ' in ' . $exception->getFile() . 
        ' on line ' . $exception->getLine()
    );
    echo '予期しないエラーが発生しました';
});`}</code>
                </pre>
              </div>
            </div>

            {/* デバッグツール */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-gray-900">高度なデバッグツール</h4>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                <pre className="text-green-400 text-sm">
                  <code>{`<?php
// Xdebug の使用（インストールが必要）
// php.ini に以下を追加
/*
zend_extension=xdebug.so
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_port=9003
*/

// ブレークポイントの設定（IDEと連携）
function processData($data) {
    // この行で停止してステップ実行
    $result = transformData($data);
    return $result;
}

// デバッグ用のヘルパー関数を作成
function dd($var) {
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
    die();
}

function dump($var) {
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
}

// 使用例
$users = getUsers();
dd($users);  // ここで実行が停止

// 実行時間の計測
$start = microtime(true);

// 重い処理
processLargeData();

$end = microtime(true);
$executionTime = $end - $start;
error_log("実行時間: {$executionTime}秒");

// メモリ使用量の確認
echo "メモリ使用量: " . memory_get_usage() . " bytes\\n";
echo "最大メモリ使用量: " . memory_get_peak_usage() . " bytes\\n";

// クエリのデバッグ（PDO）
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
$stmt->execute([':id' => $userId]);

// 実行されたSQLを確認
ob_start();
$stmt->debugDumpParams();
$debugInfo = ob_get_clean();
error_log($debugInfo);`}</code>
                </pre>
              </div>
            </div>

            {/* デバッグのベストプラクティス */}
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h4 className="text-xl mb-3 text-gray-900">デバッグのベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>再現手順を明確に：</strong>エラーを確実に再現できる手順を特定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>仮説を立てる：</strong>原因を推測してから検証する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>二分探索法：</strong>問題の範囲を半分ずつ絞り込む</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>ログを活用：</strong>エラーログを定期的にチェック</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>単体テスト：</strong>テストを書いて問題を早期発見</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>デバッグコードを削除：</strong>本番環境にvar_dumpやddを残さない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span><strong>IDEのデバッガを活用：</strong>ステップ実行で変数を監視</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">文法の基本</h4>
              <p>PHPタグの使い方、コメントの書き方、文���終わりにセミコロンを付けることなど、基本的なルールを理解しましょう。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">変数の活用</h4>
              <p>変数名の付け方、データ型の理解、配列や連想配列の使い方をマスターすることで、データを効果的に扱えるようになります。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">関数による構造化</h4>
              <p>関数を使ってコードを整理し、再利用可能な部品として管理することで、保守性の高いプログラムを書けるようになります。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">オブジェクト指向プログラミング</h4>
              <p>クラス、継承、カプセル化などOOPの概念を理解し、大規模なアプリケーション開発に適した設計ができるようになります。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">関数型プログラミング</h4>
              <p>高階関数を活用した関数型スタイルのコーディングにより、簡潔で保守性の高いコードを書けるようになります。</p>
            </div>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-purple-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            基本構文を理解したら、制御構文（if文、for文など）やオブジェクト指向プログラミング、
            データベース接続など、より実践的な内容に進んでいきましょう。
          </p>
          <Link 
            to="/study/php"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            PHPページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}