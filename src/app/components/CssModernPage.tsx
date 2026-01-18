import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Grid3x3, Columns, Palette } from 'lucide-react';

export default function CssModernPage() {
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
            <Sparkles className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">モダンCSS</h1>
          <p className="text-xl text-gray-600">
            Flexbox、Grid、CSS変数、アニメーションなど、モダンなCSSの技術を学びます。
            これらの機能を使うことで、より柔軟で保守しやすいデザインを実現できます。
          </p>
        </div>

        {/* Flexbox */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Columns className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Flexbox</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Flexboxは、1次元のレイアウト（行または列）を簡単に作成できるレイアウトモデルです。
              要素の配置、整列、順序、スペース配分を柔軟に制御できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* Flexコンテナの設定 */
.container {
    display: flex; /* Flexboxを有効化 */
    
    /* 主軸の方向 */
    flex-direction: row; /* 横方向（デフォルト） */
    flex-direction: row-reverse; /* 横方向（逆順） */
    flex-direction: column; /* 縦方向 */
    flex-direction: column-reverse; /* 縦方向（逆順） */
    
    /* 折り返し */
    flex-wrap: nowrap; /* 折り返さない（デフォルト） */
    flex-wrap: wrap; /* 折り返す */
    flex-wrap: wrap-reverse; /* 折り返す（逆順） */
    
    /* 短縮記法 */
    flex-flow: row wrap; /* flex-direction flex-wrap */
    
    /* 主軸方向の配置 */
    justify-content: flex-start; /* 開始位置（デフォルト） */
    justify-content: flex-end; /* 終了位置 */
    justify-content: center; /* 中央 */
    justify-content: space-between; /* 両端揃え */
    justify-content: space-around; /* 均等配置 */
    justify-content: space-evenly; /* 完全均等配置 */
    
    /* 交差軸方向の配置 */
    align-items: stretch; /* 引き伸ばす（デフォルト） */
    align-items: flex-start; /* 開始位置 */
    align-items: flex-end; /* 終了位置 */
    align-items: center; /* 中央 */
    align-items: baseline; /* ベースライン揃え */
    
    /* 複数行の配置 */
    align-content: flex-start;
    align-content: flex-end;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    align-content: stretch;
    
    /* ギャップ */
    gap: 20px; /* 要素間の間隔 */
    row-gap: 20px; /* 行間 */
    column-gap: 10px; /* 列間 */
}

/* Flexアイテムの設定 */
.item {
    /* 伸縮率 */
    flex-grow: 0; /* 拡大しない（デフォルト） */
    flex-grow: 1; /* 余白に応じて拡大 */
    
    flex-shrink: 1; /* 縮小する（デフォルト） */
    flex-shrink: 0; /* 縮小しない */
    
    flex-basis: auto; /* 基本サイズ（デフォルト） */
    flex-basis: 200px; /* 200pxを基準 */
    flex-basis: 50%; /* 50%を基準 */
    
    /* 短縮記法 */
    flex: 1; /* flex-grow: 1; flex-shrink: 1; flex-basis: 0% */
    flex: 0 0 200px; /* flex-grow flex-shrink flex-basis */
    flex: none; /* flex: 0 0 auto */
    
    /* 個別の配置 */
    align-self: auto; /* コンテナの設定に従う */
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
    align-self: stretch;
    
    /* 順序 */
    order: 0; /* デフォルト */
    order: 1; /* 後ろに移動 */
    order: -1; /* 前に移動 */
}

/* 実用例 */

/* 中央配置 */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* ナビゲーション */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.nav__menu {
    display: flex;
    gap: 2rem;
    list-style: none;
}

/* カードグリッド */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px; /* 最小300px、余白に応じて拡大 */
}

/* 聖杯レイアウト */
.container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.header,
.footer {
    flex: 0 0 auto; /* 固定サイズ */
}

.main {
    display: flex;
    flex: 1; /* 残りのスペースを埋める */
}

.content {
    flex: 1; /* メインコンテンツが広がる */
}

.sidebar {
    flex: 0 0 250px; /* サイドバーは250px固定 */
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* CSS Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Grid3x3 className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">CSS Grid</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              CSS Gridは、2次元のレイアウト（行と列）を簡単に作成できる強力なレイアウトシステムです。
              複雑なグリッドレイアウトを直感的に実現できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* Gridコンテナの設定 */
.container {
    display: grid;
    
    /* 列の定義 */
    grid-template-columns: 200px 200px 200px; /* 3列、各200px */
    grid-template-columns: 1fr 2fr 1fr; /* 比率で指定 */
    grid-template-columns: repeat(3, 1fr); /* 3列、等幅 */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 自動調整 */
    grid-template-columns: 200px auto 100px; /* 固定、可変、固定 */
    
    /* 行の定義 */
    grid-template-rows: 100px 200px auto;
    grid-template-rows: repeat(3, 100px);
    grid-template-rows: 100px auto;
    
    /* ギャップ */
    gap: 20px; /* 行と列の間隔 */
    row-gap: 20px; /* 行間 */
    column-gap: 10px; /* 列間 */
    
    /* グリッドエリアの定義 */
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
    
    /* 配置 */
    justify-items: start; /* 列方向の配置 */
    justify-items: end;
    justify-items: center;
    justify-items: stretch; /* デフォルト */
    
    align-items: start; /* 行方向の配置 */
    align-items: end;
    align-items: center;
    align-items: stretch; /* デフォルト */
    
    /* グリッド全体の配置 */
    justify-content: start;
    justify-content: end;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
    
    align-content: start;
    align-content: end;
    align-content: center;
    align-content: space-between;
    align-content: space-around;
    align-content: space-evenly;
}

/* Gridアイテムの設定 */
.item {
    /* 列の配置 */
    grid-column-start: 1;
    grid-column-end: 3;
    grid-column: 1 / 3; /* 短縮記法 */
    grid-column: 1 / span 2; /* 1列目から2列分 */
    grid-column: 1 / -1; /* 最初から最後まで */
    
    /* 行の配置 */
    grid-row-start: 1;
    grid-row-end: 3;
    grid-row: 1 / 3;
    grid-row: 1 / span 2;
    
    /* エリア名で配置 */
    grid-area: header;
    grid-area: sidebar;
    grid-area: content;
    
    /* 個別の配置 */
    justify-self: start;
    justify-self: end;
    justify-self: center;
    justify-self: stretch;
    
    align-self: start;
    align-self: end;
    align-self: center;
    align-self: stretch;
}

/* 実用例 */

/* 基本的なグリッド */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

/* レスポンシブグリッド */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* 聖杯レイアウト */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar content aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* マガジンレイアウト */
.magazine {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 200px);
    gap: 10px;
}

.featured {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
}

.article-1 {
    grid-column: 4 / 7;
    grid-row: 1 / 2;
}

/* 画像ギャラリー */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    gap: 10px;
}

.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* CSS変数 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Palette className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">CSS変数（カスタムプロパティ）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              CSS変数を使うことで、値を再利用し、保守性を高めることができます。
              JavaScriptから動的に変更することも可能です。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 変数の定義 */
:root {
    /* カラー */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --danger-color: #e74c3c;
    --text-color: #333;
    --bg-color: #fff;
    
    /* スペーシング */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    /* フォント */
    --font-family: 'Helvetica Neue', Arial, sans-serif;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 20px;
    --font-size-xl: 24px;
    
    /* ボーダー */
    --border-radius: 4px;
    --border-width: 1px;
    --border-color: #ddd;
    
    /* シャドウ */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
    
    /* トランジション */
    --transition-speed: 0.3s;
    --transition-timing: ease-in-out;
}

/* 変数の使用 */
.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    font-size: var(--font-size-md);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-speed) var(--transition-timing);
}

.button:hover {
    box-shadow: var(--shadow-md);
}

/* デフォルト値 */
.element {
    color: var(--text-color, #000); /* --text-colorがなければ#000 */
}

/* スコープ付き変数 */
.dark-theme {
    --bg-color: #1a1a1a;
    --text-color: #f0f0f0;
    --primary-color: #4a9eff;
}

.light-theme {
    --bg-color: #ffffff;
    --text-color: #333333;
    --primary-color: #3498db;
}

/* 計算と組み合わせ */
.container {
    --columns: 3;
    --gap: 16px;
    width: calc(100% / var(--columns) - var(--gap));
}

/* JavaScriptから変更 */
// document.documentElement.style.setProperty('--primary-color', '#e74c3c');

/* メディアクエリで変更 */
:root {
    --container-width: 1200px;
}

@media (max-width: 768px) {
    :root {
        --container-width: 100%;
        --spacing-md: 12px;
        --font-size-md: 14px;
    }
}

/* 実用例：ダークモード */
:root {
    --bg: #ffffff;
    --text: #000000;
    --primary: #3498db;
}

[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #ffffff;
    --primary: #4a9eff;
}

body {
    background-color: var(--bg);
    color: var(--text);
}

.button {
    background-color: var(--primary);
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* アニメーションとトランジション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">アニメーションとトランジション</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">トランジション</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 基本的なトランジション */
.button {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: red;
}

/* 複数のプロパティ */
.box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: all 0.3s ease-in-out;
}

.box:hover {
    width: 150px;
    height: 150px;
    background-color: red;
}

/* 個別指定 */
.element {
    transition-property: transform, opacity;
    transition-duration: 0.3s, 0.5s;
    transition-timing-function: ease-in-out, linear;
    transition-delay: 0s, 0.2s;
}

/* 短縮記法 */
.element {
    transition: transform 0.3s ease-in-out 0s,
                opacity 0.5s linear 0.2s;
}

/* タイミング関数 */
.ease { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }
.cubic { transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); }`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">アニメーション</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* キーフレームの定義 */
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
    animation: fadeIn 1s ease-in-out;
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}

/* 詳細設定 */
.animated {
    animation-name: bounce;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite; /* 無限ループ */
    animation-direction: alternate; /* 往復 */
    animation-fill-mode: forwards; /* 終了状態を維持 */
    animation-play-state: running; /* 再生状態 */
}

/* 短縮記法 */
.animated {
    animation: bounce 1s ease-in-out 0.5s infinite alternate forwards;
}

/* 複数のアニメーション */
.element {
    animation: 
        fadeIn 1s ease-in-out,
        slideIn 0.5s ease-out 0.5s;
}

/* 実用例 */

/* ローディングスピナー */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.spinner {
    animation: spin 1s linear infinite;
}

/* パルス */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.05);
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}

/* シェイク */
@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
    }
    20%, 40%, 60%, 80% {
        transform: translateX(10px);
    }
}

.shake {
    animation: shake 0.5s;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Transform */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-pink-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Transform</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 移動 */
.translate {
    transform: translateX(50px); /* X方向 */
    transform: translateY(100px); /* Y方向 */
    transform: translate(50px, 100px); /* X, Y */
    transform: translateZ(50px); /* Z方向（3D） */
    transform: translate3d(50px, 100px, 50px); /* X, Y, Z */
}

/* 回転 */
.rotate {
    transform: rotate(45deg); /* 2D回転 */
    transform: rotateX(45deg); /* X軸回転（3D） */
    transform: rotateY(45deg); /* Y軸回転（3D） */
    transform: rotateZ(45deg); /* Z軸回転（3D） */
    transform: rotate3d(1, 1, 0, 45deg); /* 3D回転 */
}

/* 拡大・縮小 */
.scale {
    transform: scale(1.5); /* 1.5倍 */
    transform: scaleX(2); /* X方向に2倍 */
    transform: scaleY(0.5); /* Y方向に0.5倍 */
    transform: scale(2, 0.5); /* X, Y */
    transform: scale3d(2, 0.5, 1); /* X, Y, Z */
}

/* 傾斜 */
.skew {
    transform: skewX(20deg); /* X方向 */
    transform: skewY(10deg); /* Y方向 */
    transform: skew(20deg, 10deg); /* X, Y */
}

/* 複数の変形を組み合わせ */
.combined {
    transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}

/* 変形の基準点 */
.origin {
    transform-origin: center; /* 中央（デフォルト） */
    transform-origin: top left; /* 左上 */
    transform-origin: 50% 50%; /* 中央 */
    transform-origin: 100px 200px; /* 座標指定 */
}

/* 3D変形 */
.transform-3d {
    perspective: 1000px; /* 親要素に設定 */
}

.child {
    transform: rotateY(45deg);
    transform-style: preserve-3d; /* 3D空間を維持 */
}

/* 実用例 */

/* カードの反転 */
.card {
    position: relative;
    width: 300px;
    height: 200px;
    perspective: 1000px;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
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
              モダンCSSの技術として、Flexbox、Grid、CSS変数、アニメーション、Transformについて学びました。
              これらの機能を使うことで、複雑なレイアウトや動的な表現を簡単に実現できます。
            </p>
            <p>
              FlexboxとGridを組み合わせることで、ほとんどのレイアウトを実現できます。
              CSS変数で保守性を高め、アニメーションでユーザー体験を向上させましょう。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-pink-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            モダンCSSを理解したら、次はTailwind CSSでより効率的にスタイリングしましょう！
          </p>
          <Link 
            to="/study/css/tailwind"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
          >
            Tailwind CSSを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
