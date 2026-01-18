import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Box, Layout, Smartphone, Sparkles } from 'lucide-react';

export default function CssPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
            <Palette className="text-white" size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 text-gray-900">CSS</h1>
          <p className="text-xl text-gray-600">
            CSS（Cascading Style Sheets）は、Webページのデザインやレイアウトを定義するスタイルシート言語です。
            HTMLで構築した構造に、色、フォント、配置などの視覚的なスタイルを適用します。
          </p>
        </div>

        {/* CSSとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Palette className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">CSSとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              CSSは、HTMLで作成した要素に対して、色、サイズ、配置、アニメーションなどのスタイルを適用するための言語です。
              HTMLとCSSを分離することで、コンテンツとデザインを独立して管理できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 基本的なCSSの書き方 */
セレクタ {
    プロパティ: 値;
}

/* 例 */
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}

p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 16px;
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 text-gray-900">CSSの適用方法</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 1. インラインスタイル（非推奨） -->
<p style="color: red; font-size: 16px;">テキスト</p>

<!-- 2. 内部スタイルシート -->
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>

<!-- 3. 外部スタイルシート（推奨） -->
<head>
    <link rel="stylesheet" href="style.css">
</head>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* セレクタ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Box className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セレクタ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              セレクタは、スタイルを適用する対象を指定します。様々な種類のセレクタを組み合わせて、
              特定の要素にスタイルを適用できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 要素セレクタ */
p {
    color: black;
}

/* クラスセレクタ */
.container {
    width: 1200px;
    margin: 0 auto;
}

/* IDセレクタ */
#header {
    background-color: #f0f0f0;
}

/* 子孫セレクタ */
.container p {
    margin-bottom: 16px;
}

/* 子セレクタ */
.nav > li {
    display: inline-block;
}

/* 隣接セレクタ */
h2 + p {
    margin-top: 0;
}

/* 属性セレクタ */
input[type="text"] {
    border: 1px solid #ccc;
}

/* 疑似クラス */
a:hover {
    color: red;
}

button:active {
    transform: scale(0.98);
}

li:first-child {
    font-weight: bold;
}

li:nth-child(odd) {
    background-color: #f9f9f9;
}

/* 疑似要素 */
p::before {
    content: "→ ";
}

p::after {
    content: " ←";
}

::selection {
    background-color: yellow;
}

/* 複数セレクタ */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}

/* クラスの組み合わせ */
.button.primary {
    background-color: blue;
    color: white;
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
              CSSのボックスモデルは、すべての要素が矩形のボックスとして表示されるという概念です。
              各ボックスは、コンテンツ、パディング、ボーダー、マージンから構成されます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`.box {
    /* 幅と高さ */
    width: 300px;
    height: 200px;
    
    /* パディング（内側の余白） */
    padding: 20px;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    /* ショートハンド */
    padding: 10px 20px; /* 上下 左右 */
    padding: 10px 20px 30px 40px; /* 上 右 下 左 */
    
    /* ボーダー（境界線） */
    border: 2px solid #333;
    border-top: 1px dashed red;
    border-radius: 8px; /* 角丸 */
    
    /* マージン（外側の余白） */
    margin: 20px;
    margin: 0 auto; /* 中央寄せ */
    
    /* ボックスサイジング */
    box-sizing: border-box; /* paddingとborderを幅に含める */
}

/* 影 */
.card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
                0 2px 4px rgba(0, 0, 0, 0.06); /* 複数の影 */
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* レイアウト */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Layout className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">レイアウト</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">Flexbox（フレックスボックス）</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Flexboxは、要素を柔軟に配置するためのレイアウトモデルです。
              水平方向や垂直方向への配置、要素の順序変更、スペースの分配が簡単にできます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* Flexコンテナ */
.container {
    display: flex;
    
    /* 方向 */
    flex-direction: row; /* 横並び（デフォルト） */
    flex-direction: column; /* 縦並び */
    
    /* 折り返し */
    flex-wrap: wrap; /* 折り返す */
    flex-wrap: nowrap; /* 折り返さない（デフォルト） */
    
    /* 主軸方向の配置 */
    justify-content: flex-start; /* 開始位置（デフォルト） */
    justify-content: center; /* 中央 */
    justify-content: flex-end; /* 終了位置 */
    justify-content: space-between; /* 均等配置 */
    justify-content: space-around; /* 周囲にスペース */
    
    /* 交差軸方向の配置 */
    align-items: stretch; /* 伸縮（デフォルト） */
    align-items: center; /* 中央 */
    align-items: flex-start; /* 開始位置 */
    align-items: flex-end; /* 終了位置 */
    
    /* 間隔 */
    gap: 16px; /* アイテム間の間隔 */
}

/* Flexアイテム */
.item {
    /* 伸縮率 */
    flex: 1; /* 均等に伸縮 */
    flex-grow: 1; /* 伸びる */
    flex-shrink: 1; /* 縮む */
    flex-basis: 200px; /* 基本サイズ */
    
    /* 個別の配置 */
    align-self: center;
    
    /* 順序 */
    order: 2;
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">Grid（グリッド）</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              CSS Gridは、2次元のグリッドレイアウトを作成するためのシステムです。
              複雑なレイアウトを簡潔に記述できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* Gridコンテナ */
.grid-container {
    display: grid;
    
    /* 列の定義 */
    grid-template-columns: 200px 200px 200px; /* 固定幅 */
    grid-template-columns: 1fr 1fr 1fr; /* 均等な幅 */
    grid-template-columns: repeat(3, 1fr); /* 3列 */
    grid-template-columns: 200px 1fr 200px; /* 混在 */
    
    /* 行の定義 */
    grid-template-rows: 100px auto 100px;
    
    /* 間隔 */
    gap: 20px; /* 行と列の間隔 */
    row-gap: 20px; /* 行の間隔 */
    column-gap: 20px; /* 列の間隔 */
    
    /* エリアの定義 */
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

/* Gridアイテム */
.grid-item {
    /* 列の配置 */
    grid-column: 1 / 3; /* 1列目から3列目まで */
    grid-column: span 2; /* 2列分 */
    
    /* 行の配置 */
    grid-row: 1 / 3;
    
    /* エリア名で配置 */
    grid-area: header;
}

/* レスポンシブグリッド */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 色とフォント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">色とフォント</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 色の指定方法 */
.element {
    /* 色名 */
    color: red;
    
    /* HEXコード */
    color: #ff0000;
    color: #f00; /* 短縮形 */
    
    /* RGB */
    color: rgb(255, 0, 0);
    
    /* RGBA（透明度付き） */
    color: rgba(255, 0, 0, 0.5);
    
    /* HSL */
    color: hsl(0, 100%, 50%);
    
    /* HSLA（透明度付き） */
    color: hsla(0, 100%, 50%, 0.5);
    
    /* 背景色 */
    background-color: #f0f0f0;
    
    /* グラデーション */
    background: linear-gradient(to right, #ff0000, #0000ff);
    background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
    background: radial-gradient(circle, #ff0000, #0000ff);
}

/* フォント */
.text {
    /* フォントファミリー */
    font-family: Arial, sans-serif;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    
    /* フォントサイズ */
    font-size: 16px;
    font-size: 1rem; /* ルート要素基準 */
    font-size: 1.2em; /* 親要素基準 */
    
    /* フォントウェイト */
    font-weight: normal; /* 400 */
    font-weight: bold; /* 700 */
    font-weight: 600;
    
    /* フォントスタイル */
    font-style: normal;
    font-style: italic;
    
    /* 行の高さ */
    line-height: 1.6;
    line-height: 24px;
    
    /* 文字間隔 */
    letter-spacing: 0.05em;
    
    /* 単語間隔 */
    word-spacing: 4px;
    
    /* テキスト装飾 */
    text-decoration: none;
    text-decoration: underline;
    text-decoration: line-through;
    
    /* テキスト配置 */
    text-align: left;
    text-align: center;
    text-align: right;
    text-align: justify;
    
    /* テキスト変換 */
    text-transform: uppercase; /* 大文字 */
    text-transform: lowercase; /* 小文字 */
    text-transform: capitalize; /* 先頭大文字 */
    
    /* テキストシャドウ */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Webフォントの読み込み */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

.japanese-text {
    font-family: 'Noto Sans JP', sans-serif;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* レスポンシブデザイン */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Smartphone className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">レスポンシブデザイン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              レスポンシブデザインは、デバイスの画面サイズに応じてレイアウトを変更する手法です。
              メディアクエリを使用して、スマートフォン、タブレット、デスクトップで最適な表示を実現します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* モバイルファースト */
.container {
    width: 100%;
    padding: 16px;
}

/* タブレット以上 */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* デスクトップ */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}

/* 大画面 */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
}

/* 画面の向き */
@media (orientation: portrait) {
    .sidebar {
        display: none;
    }
}

@media (orientation: landscape) {
    .sidebar {
        display: block;
    }
}

/* プリント用 */
@media print {
    .no-print {
        display: none;
    }
}

/* ダークモード */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #ffffff;
    }
}

/* 高解像度ディスプレイ */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
    .logo {
        background-image: url('logo@2x.png');
    }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* アニメーション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">アニメーション</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">トランジション</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    
    /* トランジション */
    transition: background-color 0.3s ease;
    transition: all 0.3s ease-in-out;
    transition: transform 0.2s, opacity 0.3s;
}

.button:hover {
    background-color: darkblue;
    transform: translateY(-2px);
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">キーフレームアニメーション</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* アニメーションの定義 */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* アニメーションの適用 */
.fade-in {
    animation: fadeIn 1s ease-in;
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}

.bounce {
    animation: bounce 1s infinite;
    animation: bounce 2s ease-in-out infinite alternate;
}

/* 複数のアニメーション */
.element {
    animation: fadeIn 1s, slideIn 0.5s;
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
              CSSはWebページのデザインを作るための強力なツールです。セレクタ、ボックスモデル、
              FlexboxやGridなどのレイアウト手法、色やフォントの設定、レスポンシブデザイン、
              アニメーションなど、多彩な機能があります。
            </p>
            <p>
              モダンなWebデザインには、Flexbox、Grid、メディアクエリが必須です。
              これらをマスターすることで、美しく使いやすいWebサイトを作成できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-pink-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            CSSでデザインの基礎を理解したら、次はJavaScript/TypeScriptでインタラクティブなWebページを作りましょう！
          </p>
          <Link 
            to="/study/javascript"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
          >
            JavaScript/TypeScriptを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}