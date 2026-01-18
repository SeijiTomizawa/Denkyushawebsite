import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Box, Palette, Type } from 'lucide-react';

export default function CssBasicSyntaxPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/css" 
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          CSSページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-pink-600 rounded-2xl flex items-center justify-center mb-6">
            <Code className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">CSS 基本構文</h1>
          <p className="text-xl text-gray-600">
            CSSの基本的な文法、セレクタ、プロパティ、ボックスモデル、レイアウトについて学びます。
            これらはWebデザインの基礎となる重要な要素です。
          </p>
        </div>

        {/* CSSの基本構文 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Code className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">CSSの基本構文</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              CSSは「セレクタ」と「宣言ブロック」から構成されます。
              セレクタでスタイルを適用する要素を指定し、宣言ブロックで具体的なスタイルを定義します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 基本構文 */
セレクタ {
    プロパティ: 値;
    プロパティ: 値;
}

/* 例 */
h1 {
    color: blue;
    font-size: 24px;
    margin-bottom: 16px;
}

/* コメントの書き方 */
/* これはコメントです */

/* 
複数行の
コメント
*/`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* セレクタ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Palette className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セレクタ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">基本セレクタ</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 要素セレクタ */
p {
    color: black;
}

h1 {
    font-size: 32px;
}

/* クラスセレクタ */
.container {
    width: 100%;
    max-width: 1200px;
}

.button {
    padding: 10px 20px;
    background-color: blue;
}

/* IDセレクタ */
#header {
    background-color: #f0f0f0;
}

#main-content {
    padding: 20px;
}

/* 全称セレクタ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 属性セレクタ */
input[type="text"] {
    border: 1px solid #ccc;
}

a[href^="https"] {
    color: green;
}

a[href$=".pdf"] {
    color: red;
}

a[href*="example"] {
    text-decoration: underline;
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">結合子</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 子孫セレクタ（スペース） */
div p {
    color: blue; /* divの中の全てのp */
}

/* 子セレクタ（>） */
ul > li {
    list-style: none; /* ulの直接の子のli */
}

/* 隣接兄弟セレクタ（+） */
h1 + p {
    font-weight: bold; /* h1の直後のp */
}

/* 一般兄弟セレクタ（~） */
h1 ~ p {
    color: gray; /* h1の後ろの全てのp */
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">疑似クラス</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* リンクの状態 */
a:link {
    color: blue; /* 未訪問 */
}

a:visited {
    color: purple; /* 訪問済み */
}

a:hover {
    color: red; /* ホバー時 */
}

a:active {
    color: orange; /* クリック時 */
}

/* フォーカス */
input:focus {
    border-color: blue;
    outline: 2px solid blue;
}

/* 構造的疑似クラス */
li:first-child {
    font-weight: bold;
}

li:last-child {
    margin-bottom: 0;
}

li:nth-child(odd) {
    background-color: #f0f0f0; /* 奇数 */
}

li:nth-child(even) {
    background-color: white; /* 偶数 */
}

li:nth-child(3n) {
    color: red; /* 3の倍数 */
}

/* その他の疑似クラス */
input:disabled {
    opacity: 0.5;
}

input:checked + label {
    font-weight: bold;
}

p:not(.special) {
    color: gray;
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">疑似要素</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* ::before（要素の前に挿入） */
.icon::before {
    content: "★";
    margin-right: 5px;
}

/* ::after（要素の後に挿入） */
.link::after {
    content: " →";
}

/* ::first-letter（最初の文字） */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

/* ::first-line（最初の行） */
p::first-line {
    color: blue;
}

/* ::selection（選択範囲） */
::selection {
    background-color: yellow;
    color: black;
}

/* ::placeholder（プレースホルダー） */
input::placeholder {
    color: #999;
    font-style: italic;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ボックスモデル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Box className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ボックスモデル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              すべてのHTML要素は、コンテンツ、パディング、ボーダー、マージンの4つの領域から構成されます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* ボックスモデルの構成 */
.box {
    /* コンテンツの幅と高さ */
    width: 300px;
    height: 200px;
    
    /* パディング（内側の余白） */
    padding: 20px; /* 全方向 */
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding: 10px 15px; /* 上下 左右 */
    padding: 10px 15px 20px; /* 上 左右 下 */
    padding: 10px 15px 20px 25px; /* 上 右 下 左（時計回り） */
    
    /* ボーダー（境界線） */
    border: 1px solid black; /* 幅 スタイル 色 */
    border-width: 2px;
    border-style: solid; /* solid, dashed, dotted, double, none */
    border-color: blue;
    border-top: 1px solid red;
    border-radius: 10px; /* 角丸 */
    border-radius: 10px 20px 30px 40px; /* 左上 右上 右下 左下 */
    
    /* マージン（外側の余白） */
    margin: 20px; /* 全方向 */
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin: 10px auto; /* 上下10px、左右中央 */
}

/* box-sizing */
.box1 {
    box-sizing: content-box; /* デフォルト：width/heightはコンテンツのみ */
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* 実際の幅 = 300 + 20*2 + 5*2 = 350px */
}

.box2 {
    box-sizing: border-box; /* width/heightにpadding/borderを含む */
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* 実際の幅 = 300px */
}

/* 推奨設定 */
* {
    box-sizing: border-box;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テキストとフォント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Type className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テキストとフォント</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* フォントファミリー */
body {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-family: "游ゴシック", "Yu Gothic", sans-serif; /* 日本語 */
}

/* フォントサイズ */
h1 {
    font-size: 32px; /* ピクセル */
    font-size: 2em; /* 親要素の2倍 */
    font-size: 2rem; /* ルート要素の2倍 */
    font-size: 120%; /* 親要素の120% */
}

/* フォントウェイト（太さ） */
p {
    font-weight: normal; /* 400 */
    font-weight: bold; /* 700 */
    font-weight: 100; /* 100-900 */
}

/* フォントスタイル */
em {
    font-style: italic; /* 斜体 */
    font-style: normal; /* 通常 */
}

/* テキスト色 */
p {
    color: red;
    color: #ff0000;
    color: rgb(255, 0, 0);
    color: rgba(255, 0, 0, 0.5); /* 透明度50% */
    color: hsl(0, 100%, 50%);
}

/* テキスト配置 */
p {
    text-align: left; /* 左寄せ */
    text-align: center; /* 中央 */
    text-align: right; /* 右寄せ */
    text-align: justify; /* 両端揃え */
}

/* テキスト装飾 */
a {
    text-decoration: none; /* 装飾なし */
    text-decoration: underline; /* 下線 */
    text-decoration: line-through; /* 取り消し線 */
    text-decoration: overline; /* 上線 */
}

/* テキスト変換 */
p {
    text-transform: uppercase; /* 大文字 */
    text-transform: lowercase; /* 小文字 */
    text-transform: capitalize; /* 先頭大文字 */
}

/* 行の高さ */
p {
    line-height: 1.5; /* フォントサイズの1.5倍 */
    line-height: 24px;
}

/* 文字間隔 */
h1 {
    letter-spacing: 2px; /* 文字間 */
    word-spacing: 5px; /* 単語間 */
}

/* テキストシャドウ */
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* x-offset y-offset blur-radius color */
}

/* テキストの折り返し */
p {
    word-wrap: break-word; /* 長い単語を折り返す */
    overflow-wrap: break-word;
    white-space: nowrap; /* 折り返さない */
    white-space: pre-wrap; /* 改行と空白を保持 */
}

/* テキストの切り詰め */
.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* ... で省略 */
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 背景 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Palette className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">背景</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 背景色 */
div {
    background-color: blue;
    background-color: #3498db;
    background-color: rgba(52, 152, 219, 0.8);
}

/* 背景画像 */
div {
    background-image: url('image.jpg');
    background-repeat: no-repeat; /* 繰り返さない */
    background-repeat: repeat-x; /* 横方向のみ */
    background-repeat: repeat-y; /* 縦方向のみ */
    background-position: center; /* 中央 */
    background-position: top right; /* 右上 */
    background-position: 50% 50%; /* 中央 */
    background-size: cover; /* 要素を覆う */
    background-size: contain; /* 要素に収める */
    background-size: 100% auto;
    background-attachment: fixed; /* スクロール時固定 */
}

/* 短縮記法 */
div {
    background: url('image.jpg') no-repeat center/cover;
}

/* グラデーション */
div {
    /* 線形グラデーション */
    background: linear-gradient(to right, red, blue);
    background: linear-gradient(45deg, red, yellow, green);
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
    
    /* 円形グラデーション */
    background: radial-gradient(circle, red, blue);
    background: radial-gradient(ellipse at center, red, blue);
}

/* 複数背景 */
div {
    background:
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('image.jpg') center/cover;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 表示とポジション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Box className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">表示とポジション</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* display プロパティ */
div {
    display: block; /* ブロック要素 */
    display: inline; /* インライン要素 */
    display: inline-block; /* インラインブロック */
    display: none; /* 非表示 */
    display: flex; /* Flexbox */
    display: grid; /* Grid */
}

/* visibility */
div {
    visibility: visible; /* 表示 */
    visibility: hidden; /* 非表示（領域は確保） */
}

/* position */
div {
    position: static; /* デフォルト */
    position: relative; /* 相対位置 */
    position: absolute; /* 絶対位置 */
    position: fixed; /* 固定位置（スクロールしても固定） */
    position: sticky; /* スクロールに追従 */
}

/* 相対位置 */
.relative {
    position: relative;
    top: 10px;
    left: 20px;
}

/* 絶対位置 */
.absolute {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

/* 固定位置 */
.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

/* スティッキー */
.sticky {
    position: sticky;
    top: 0;
}

/* z-index（重なり順） */
.layer1 {
    position: relative;
    z-index: 1;
}

.layer2 {
    position: relative;
    z-index: 2; /* 上に表示 */
}

/* overflow */
div {
    overflow: visible; /* デフォルト */
    overflow: hidden; /* はみ出しを隠す */
    overflow: scroll; /* スクロールバー表示 */
    overflow: auto; /* 必要に応じてスクロールバー */
    overflow-x: auto; /* 横方向のみ */
    overflow-y: auto; /* 縦方向のみ */
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-pink-50 rounded-2xl p-8 border border-pink-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              CSSの基本構文として、セレクタ、ボックスモデル、テキストスタイリング、背景、
              ポジショニングについて学びました。これらはWebデザインの基礎となる重要な要素です。
            </p>
            <p>
              セレクタを理解することで要素を正確に指定でき、ボックスモデルを理解することで
              レイアウトを自在に制御できます。これらの基礎をしっかり身につけることが重要です。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-pink-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            基本構文を理解したら、次はCSSの外部ファイル化について学びましょう！
          </p>
          <Link 
            to="/study/css/external-files"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
          >
            外部ファイル化を学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
