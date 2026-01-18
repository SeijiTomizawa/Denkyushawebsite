import { Link } from 'react-router-dom';
import { ArrowLeft, FileCode, FolderTree, Settings } from 'lucide-react';

export default function CssExternalFilesPage() {
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
            <FileCode className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">CSS 外部ファイル化</h1>
          <p className="text-xl text-gray-600">
            CSSを外部ファイルとして管理する方法、ファイル構成、ベストプラクティスについて学びます。
            適切なファイル管理により、保守性と再利用性が向上します。
          </p>
        </div>

        {/* CSSの読み込み方法 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-pink-600" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900">CSSの読み込み方法</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-900">1. 外部CSSファイル（推奨）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- HTML -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>マイサイト</title>
    
    <!-- 外部CSSファイルの読み込み -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- CDNからの読み込み -->
    <link rel="stylesheet" href="https://cdn.example.com/style.css">
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h4 className="text-xl mb-3 text-gray-900">外部ファイルの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>再利用性：</strong>複数のHTMLページで同じCSSを使える</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>保守性：</strong>CSSを一箇所で管理できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>キャッシュ：</strong>ブラウザがCSSをキャッシュして高速化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>分離：</strong>HTMLとCSSを分離してコードを整理</span>
                </li>
              </ul>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">2. 内部CSS</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- HTML -->
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        
        h1 {
            color: blue;
            font-size: 24px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>

<!-- 
使用場面：
- 単一ページのみのスタイル
- プロトタイピング
- メールHTML（外部CSSが使えない）
-->`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">3. インラインCSS</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- HTML -->
<h1 style="color: blue; font-size: 24px;">Hello World</h1>

<div style="
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
">
    コンテンツ
</div>

<!-- 
使用場面：
- 動的なスタイル（JavaScriptで変更）
- 一時的なテスト
- メールHTML

注意：保守性が低いため、通常は避ける
-->`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">4. @import（非推奨）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* CSS */
/* 他のCSSファイルをインポート */
@import url('normalize.css');
@import url('typography.css');
@import url('layout.css');

/* メディアクエリ付き */
@import url('mobile.css') screen and (max-width: 768px);

/*
注意：
- パフォーマンスが悪い（並列読み込みできない）
- <link>タグの方が推奨される
- CSS内で他のCSSを整理する場合に限定的に使用
*/`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ファイル構成 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <FolderTree className="text-pink-600" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900">ファイル構成</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-900">基本的な構成</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`project/
├── index.html
├── about.html
├── contact.html
└── css/
    ├── style.css          # メインのスタイルシート
    ├── reset.css          # リセットCSS
    ├── responsive.css     # レスポンシブ対応
    └── print.css          # 印刷用スタイル`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">モジュール化された構成</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`project/
├── index.html
└── css/
    ├── main.css           # すべてをまとめるファイル
    ├── base/
    │   ├── reset.css      # リセット
    │   ├── variables.css  # CSS変数
    │   └── typography.css # タイポグラフィ
    ├── layout/
    │   ├── header.css     # ヘッダー
    │   ├── footer.css     # フッター
    │   ├── grid.css       # グリッドシステム
    │   └── sidebar.css    # サイドバー
    ├── components/
    │   ├── buttons.css    # ボタン
    │   ├── cards.css      # カード
    │   ├── forms.css      # フォーム
    │   └── modals.css     # モーダル
    ├── pages/
    │   ├── home.css       # ホームページ固有
    │   ├── about.css      # Aboutページ固有
    │   └── contact.css    # Contactページ固有
    └── utilities/
        ├── helpers.css    # ヘルパークラス
        └── responsive.css # レスポンシブ`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">BEM方式の構成</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`project/
└── css/
    ├── blocks/            # BEMのBlock
    │   ├── header.css
    │   ├── navigation.css
    │   ├── card.css
    │   └── button.css
    ├── elements/          # BEMのElement
    │   ├── header__logo.css
    │   ├── card__title.css
    │   └── button__icon.css
    └── modifiers/         # BEMのModifier
        ├── button--primary.css
        ├── card--featured.css
        └── header--fixed.css`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* CSSの命名規則 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Settings className="text-pink-600" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900">命名規則とベストプラクティス</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-900">BEM（Block Element Modifier）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* Block（独立したコンポーネント） */
.card { }
.button { }
.header { }

/* Element（Blockの一部） */
.card__title { }
.card__image { }
.card__description { }
.button__icon { }
.header__logo { }

/* Modifier（BlockやElementのバリエーション） */
.button--primary { }
.button--large { }
.card--featured { }
.header--fixed { }

/* 使用例 */
.card { }
.card__title { }
.card__image { }
.card__description { }
.card--featured { }
.card--featured .card__title { }

/* HTML */
<div class="card card--featured">
    <h3 class="card__title">タイトル</h3>
    <img class="card__image" src="image.jpg">
    <p class="card__description">説明文</p>
</div>`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">その他の命名規則</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* OOCSS（Object-Oriented CSS） */
.btn { }           /* オブジェクト */
.btn-primary { }   /* バリエーション */
.box { }
.box-header { }

/* SMACSS（Scalable and Modular Architecture for CSS） */
/* Base */
body { }
a { }

/* Layout */
.l-header { }
.l-sidebar { }
.l-main { }

/* Module */
.module { }
.module-title { }

/* State */
.is-active { }
.is-hidden { }
.is-disabled { }

/* Theme */
.theme-dark { }

/* Utility（ヘルパークラス） */
.text-center { text-align: center; }
.mt-10 { margin-top: 10px; }
.hidden { display: none; }
.flex { display: flex; }
.grid { display: grid; }`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">命名のベストプラクティス</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 良い例 */
.user-profile { }
.search-form { }
.product-card { }
.btn-primary { }

/* 避けるべき例 */
.up { }          /* 意味が不明瞭 */
.div1 { }        /* 汎用的すぎる */
.redText { }     /* 見た目に依存 */
.style1 { }      /* 意味がない */

/* 状態を表すクラス */
.is-active { }
.is-open { }
.is-loading { }
.is-disabled { }
.has-error { }
.has-icon { }

/* JavaScript用のクラス */
.js-toggle { }   /* JavaScriptから参照 */
.js-modal { }
.js-dropdown { }

/* アクセシビリティ */
.sr-only {       /* スクリーンリーダー専用 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* CSSの最適化 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Settings className="text-pink-600" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900">CSSの最適化</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 1. セレクタの最適化 */

/* 避けるべき：深すぎるネスト */
.header .nav .menu .item .link { }

/* 推奨：浅いセレクタ */
.menu-link { }

/* 避けるべき：過度な詳細度 */
div#content .post .title h2 { }

/* 推奨：必要最小限 */
.post-title { }

/* 2. CSSの圧縮 */

/* 開発時（読みやすい） */
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}

/* 本番環境（圧縮） */
.button{background-color:blue;color:white;padding:10px 20px;border-radius:5px}

/* 3. 未使用CSSの削除 */
/* ツール: PurgeCSS, UnCSS */

/* 4. クリティカルCSSの抽出 */
/* ファーストビューに必要なCSSをインライン化 */
<head>
    <style>
        /* クリティカルCSS（インライン） */
        body { margin: 0; font-family: sans-serif; }
        .header { background: #333; color: white; }
    </style>
    
    <!-- その他のCSS（遅延読み込み） -->
    <link rel="preload" href="style.css" as="style" onload="this.rel='stylesheet'">
</head>

/* 5. メディアクエリの整理 */

/* 避けるべき：散在 */
.container { width: 100%; }
@media (min-width: 768px) {
    .container { width: 750px; }
}
.sidebar { width: 100%; }
@media (min-width: 768px) {
    .sidebar { width: 300px; }
}

/* 推奨：まとめる */
.container { width: 100%; }
.sidebar { width: 100%; }

@media (min-width: 768px) {
    .container { width: 750px; }
    .sidebar { width: 300px; }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* リセットCSSとノーマライズCSS */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-pink-600" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-900">リセットCSS / ノーマライズCSS</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-900">リセットCSS（Reset CSS）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`/* 最小限のリセット */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* より詳細なリセット */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}`}</code>
              </pre>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-8 text-gray-900">ノーマライズCSS（Normalize.css）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- CDNから読み込み -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">

/* または npm でインストール */
npm install normalize.css

/* 
Normalize.cssの特徴：
- ブラウザ間の差異を正規化
- 有用なデフォルトスタイルを保持
- 一般的なバグを修正
- 使いやすさを改善
*/

/* モダンなリセット（modern-normalize） */
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize/modern-normalize.css">

/* 
modern-normalizeの特徴：
- モダンブラウザに最適化
- より軽量
- CSS変数に対応
*/`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-pink-50 rounded-2xl p-8 border border-pink-200">
          <h3 className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              CSSの外部ファイル化について、読み込み方法、ファイル構成、命名規則、最適化手法を学びました。
              適切なファイル管理により、保守性と再利用性が大幅に向上します。
            </p>
            <p>
              BEMなどの命名規則を採用することで、チーム開発でもコードの一貫性を保てます。
              リセットCSSやノーマライズCSSを使うことで、ブラウザ間の差異を吸収できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-pink-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            ファイル管理を理解したら、次はモダンCSSの技術を学びましょう！
          </p>
          <Link 
            to="/study/css/modern-css"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
          >
            モダンCSSを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}