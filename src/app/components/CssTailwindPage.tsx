import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, Zap, Settings } from 'lucide-react';

export default function CssTailwindPage() {
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
          <div className="w-20 h-20 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
            <Layers className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">Tailwind CSS</h1>
          <p className="text-xl text-gray-600">
            Tailwind CSSは、ユーティリティファーストのCSSフレームワークです。
            事前定義されたクラスを組み合わせることで、素早く柔軟にUIを構築できます。
          </p>
        </div>

        {/* Tailwind CSSとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Layers className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Tailwind CSSとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Tailwind CSSは、低レベルのユーティリティクラスを提供するCSSフレームワークです。
              独自のデザインを簡単に作成でき、カスタマイズ性が非常に高いのが特徴です。
            </p>

            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200 mb-6">
              <h4 className="text-xl mb-3 text-gray-900">Tailwind CSSの特徴</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>ユーティリティファースト：</strong>小さな単一目的のクラスを組み合わせる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>高いカスタマイズ性：</strong>設定ファイルで簡単にカスタマイズ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>レスポンシブ対応：</strong>ブレークポイントを使った簡単な対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>未使用CSSの削除：</strong>PurgeCSSで本番ビルドを最適化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span><strong>一貫性：</strong>デザインシステムに基づいた値</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">インストール</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`# npm
npm install -D tailwindcss
npx tailwindcss init

# Vite + React の場合
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 基本的な使い方 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Zap className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的な使い方</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">レイアウト</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- Container -->
<div class="container mx-auto px-4">
  <!-- max-width: 1280px; margin: 0 auto; padding: 0 1rem; -->
</div>

<!-- Display -->
<div class="block"><!-- display: block; --></div>
<div class="inline-block"><!-- display: inline-block; --></div>
<div class="flex"><!-- display: flex; --></div>
<div class="grid"><!-- display: grid; --></div>
<div class="hidden"><!-- display: none; --></div>

<!-- Flexbox -->
<div class="flex justify-center items-center">
  <!-- display: flex; justify-content: center; align-items: center; -->
</div>

<div class="flex flex-col"><!-- flex-direction: column; --></div>
<div class="flex flex-wrap"><!-- flex-wrap: wrap; --></div>
<div class="flex gap-4"><!-- gap: 1rem; --></div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <!-- display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- レスポンシブグリッド -->
</div>

<!-- Position -->
<div class="relative"><!-- position: relative; --></div>
<div class="absolute top-0 right-0"><!-- position: absolute; top: 0; right: 0; --></div>
<div class="fixed bottom-4 right-4"><!-- position: fixed; bottom: 1rem; right: 1rem; --></div>
<div class="sticky top-0"><!-- position: sticky; top: 0; --></div>

<!-- Width & Height -->
<div class="w-full"><!-- width: 100%; --></div>
<div class="w-1/2"><!-- width: 50%; --></div>
<div class="w-64"><!-- width: 16rem; (256px) --></div>
<div class="h-screen"><!-- height: 100vh; --></div>
<div class="min-h-screen"><!-- min-height: 100vh; --></div>

<!-- Max Width -->
<div class="max-w-md"><!-- max-width: 28rem; --></div>
<div class="max-w-xl"><!-- max-width: 36rem; --></div>
<div class="max-w-7xl"><!-- max-width: 80rem; --></div>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">スペーシング</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- Padding -->
<div class="p-4"><!-- padding: 1rem; --></div>
<div class="px-4 py-2"><!-- padding-left/right: 1rem; padding-top/bottom: 0.5rem; --></div>
<div class="pt-4"><!-- padding-top: 1rem; --></div>
<div class="pr-4"><!-- padding-right: 1rem; --></div>
<div class="pb-4"><!-- padding-bottom: 1rem; --></div>
<div class="pl-4"><!-- padding-left: 1rem; --></div>

<!-- Margin -->
<div class="m-4"><!-- margin: 1rem; --></div>
<div class="mx-auto"><!-- margin-left: auto; margin-right: auto; --></div>
<div class="mt-8"><!-- margin-top: 2rem; --></div>
<div class="-mt-4"><!-- margin-top: -1rem; (負のマージン) --></div>

<!-- Space Between -->
<div class="flex space-x-4">
  <!-- 子要素間に横方向のスペース -->
</div>
<div class="flex flex-col space-y-4">
  <!-- 子要素間に縦方向のスペース -->
</div>

<!-- Gap -->
<div class="flex gap-4"><!-- gap: 1rem; --></div>
<div class="grid gap-6"><!-- gap: 1.5rem; --></div>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">タイポグラフィ</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- Font Family -->
<p class="font-sans"><!-- font-family: sans-serif; --></p>
<p class="font-serif"><!-- font-family: serif; --></p>
<p class="font-mono"><!-- font-family: monospace; --></p>

<!-- Font Size -->
<p class="text-xs"><!-- font-size: 0.75rem; --></p>
<p class="text-sm"><!-- font-size: 0.875rem; --></p>
<p class="text-base"><!-- font-size: 1rem; --></p>
<p class="text-lg"><!-- font-size: 1.125rem; --></p>
<p class="text-xl"><!-- font-size: 1.25rem; --></p>
<p class="text-2xl"><!-- font-size: 1.5rem; --></p>
<p class="text-4xl"><!-- font-size: 2.25rem; --></p>

<!-- Font Weight -->
<p class="font-thin"><!-- font-weight: 100; --></p>
<p class="font-normal"><!-- font-weight: 400; --></p>
<p class="font-bold"><!-- font-weight: 700; --></p>
<p class="font-black"><!-- font-weight: 900; --></p>

<!-- Text Color -->
<p class="text-black"><!-- color: #000; --></p>
<p class="text-white"><!-- color: #fff; --></p>
<p class="text-gray-500"><!-- color: rgb(107 114 128); --></p>
<p class="text-blue-600"><!-- color: rgb(37 99 235); --></p>
<p class="text-red-500/50"><!-- color: rgba(239 68 68 / 0.5); 透明度50% --></p>

<!-- Text Align -->
<p class="text-left"><!-- text-align: left; --></p>
<p class="text-center"><!-- text-align: center; --></p>
<p class="text-right"><!-- text-align: right; --></p>

<!-- Text Decoration -->
<p class="underline"><!-- text-decoration: underline; --></p>
<p class="line-through"><!-- text-decoration: line-through; --></p>
<p class="no-underline"><!-- text-decoration: none; --></p>

<!-- Line Height -->
<p class="leading-none"><!-- line-height: 1; --></p>
<p class="leading-tight"><!-- line-height: 1.25; --></p>
<p class="leading-normal"><!-- line-height: 1.5; --></p>
<p class="leading-relaxed"><!-- line-height: 1.625; --></p>

<!-- Letter Spacing -->
<p class="tracking-tight"><!-- letter-spacing: -0.025em; --></p>
<p class="tracking-normal"><!-- letter-spacing: 0; --></p>
<p class="tracking-wide"><!-- letter-spacing: 0.025em; --></p>

<!-- Text Transform -->
<p class="uppercase"><!-- text-transform: uppercase; --></p>
<p class="lowercase"><!-- text-transform: lowercase; --></p>
<p class="capitalize"><!-- text-transform: capitalize; --></p>

<!-- Truncate -->
<p class="truncate"><!-- overflow: hidden; text-overflow: ellipsis; white-space: nowrap; --></p>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">背景と境界線</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- Background Color -->
<div class="bg-white"><!-- background-color: #fff; --></div>
<div class="bg-gray-100"><!-- background-color: rgb(243 244 246); --></div>
<div class="bg-blue-500"><!-- background-color: rgb(59 130 246); --></div>
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  <!-- グラデーション -->
</div>

<!-- Border -->
<div class="border"><!-- border-width: 1px; --></div>
<div class="border-2"><!-- border-width: 2px; --></div>
<div class="border-t"><!-- border-top-width: 1px; --></div>
<div class="border-gray-300"><!-- border-color: rgb(209 213 219); --></div>

<!-- Border Radius -->
<div class="rounded"><!-- border-radius: 0.25rem; --></div>
<div class="rounded-lg"><!-- border-radius: 0.5rem; --></div>
<div class="rounded-full"><!-- border-radius: 9999px; --></div>
<div class="rounded-t-lg"><!-- border-top-left/right-radius: 0.5rem; --></div>

<!-- Shadow -->
<div class="shadow"><!-- box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1); --></div>
<div class="shadow-md"><!-- box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); --></div>
<div class="shadow-lg"><!-- box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); --></div>
<div class="shadow-xl"><!-- box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); --></div>

<!-- Opacity -->
<div class="opacity-0"><!-- opacity: 0; --></div>
<div class="opacity-50"><!-- opacity: 0.5; --></div>
<div class="opacity-100"><!-- opacity: 1; --></div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* レスポンシブデザイン */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Settings className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">レスポンシブデザイン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- ブレークポイント -->
<!-- sm: 640px -->
<!-- md: 768px -->
<!-- lg: 1024px -->
<!-- xl: 1280px -->
<!-- 2xl: 1536px -->

<!-- 基本的な使い方 -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- モバイル: 100%, タブレット: 50%, デスクトップ: 33.33% -->
</div>

<!-- レスポンシブグリッド -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <!-- モバイル: 1列, sm: 2列, lg: 3列, xl: 4列 -->
</div>

<!-- 表示/非表示 -->
<div class="hidden md:block">
  <!-- モバイルで非表示、タブレット以上で表示 -->
</div>

<div class="block md:hidden">
  <!-- モバイルで表示、タブレット以上で非表示 -->
</div>

<!-- フォントサイズ -->
<h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
  <!-- レスポンシブなフォントサイズ -->
</h1>

<!-- スペーシング -->
<div class="p-4 md:p-6 lg:p-8">
  <!-- レスポンシブなパディング -->
</div>

<!-- Flexの方向 -->
<div class="flex flex-col md:flex-row">
  <!-- モバイル: 縦並び, タブレット以上: 横並び -->
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ホバー、フォーカス、その他の状態 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Zap className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">状態変化</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-600">
  <!-- ホバー時に背景色を変更 -->
</button>

<a class="text-blue-500 hover:text-blue-700 hover:underline">
  <!-- ホバー時に色を変更し下線を追加 -->
</a>

<!-- Focus -->
<input class="border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <!-- フォーカス時にボーダー色を変更しリングを追加 -->
</input>

<!-- Active -->
<button class="bg-blue-500 active:bg-blue-700">
  <!-- クリック時に背景色を変更 -->
</button>

<!-- Disabled -->
<button class="bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed" disabled>
  <!-- 無効時のスタイル -->
</button>

<!-- Group Hover -->
<div class="group">
  <img class="group-hover:opacity-75">
  <p class="group-hover:text-blue-500">
    <!-- 親要素のホバーで子要素のスタイルを変更 -->
  </p>
</div>

<!-- First, Last, Odd, Even -->
<ul>
  <li class="first:font-bold"><!-- 最初の要素 --></li>
  <li class="last:border-b-0"><!-- 最後の要素 --></li>
  <li class="odd:bg-gray-100"><!-- 奇数要素 --></li>
  <li class="even:bg-white"><!-- 偶数要素 --></li>
</ul>

<!-- Dark Mode -->
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  <!-- ダークモード対応 -->
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* カスタマイズ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Settings className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">カスタマイズ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// tailwind.config.js
export default {
  theme: {
    extend: {
      // カラーの追加
      colors: {
        'brand': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        'custom-blue': '#3b82f6',
      },
      
      // スペーシングの追加
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      
      // フォントファミリーの追加
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Lexend', 'sans-serif'],
      },
      
      // ブレークポイントの追加
      screens: {
        '3xl': '1920px',
      },
      
      // ボーダー半径の追加
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    // プラグインの追加
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

<!-- 使用例 -->
<div class="bg-brand-500 text-brand-50 p-72 rounded-4xl">
  <!-- カスタムカラーとスペーシング -->
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 実用例 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Layers className="text-cyan-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">実用例</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- ボタン -->
<button class="
  bg-blue-500 hover:bg-blue-600 
  text-white 
  px-6 py-3 
  rounded-lg 
  shadow-md hover:shadow-lg 
  transition-all duration-200
  disabled:bg-gray-300 disabled:cursor-not-allowed
">
  送信
</button>

<!-- カード -->
<div class="
  bg-white 
  rounded-xl 
  shadow-lg 
  overflow-hidden 
  hover:shadow-2xl 
  transition-shadow duration-300
">
  <img src="image.jpg" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-bold mb-2">タイトル</h3>
    <p class="text-gray-600 mb-4">説明文</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">詳細</button>
  </div>
</div>

<!-- フォーム -->
<form class="max-w-md mx-auto space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-2">
      名前
    </label>
    <input 
      type="text" 
      class="
        w-full 
        px-4 py-2 
        border border-gray-300 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-transparent
      "
    >
  </div>
</form>

<!-- ナビゲーション -->
<nav class="bg-white shadow-md fixed top-0 w-full z-50">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="text-2xl font-bold">Logo</div>
      <ul class="hidden md:flex space-x-8">
        <li><a href="#" class="hover:text-blue-500">Home</a></li>
        <li><a href="#" class="hover:text-blue-500">About</a></li>
        <li><a href="#" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- グリッドレイアウト -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow p-6">Item 1</div>
  <div class="bg-white rounded-lg shadow p-6">Item 2</div>
  <div class="bg-white rounded-lg shadow p-6">Item 3</div>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-cyan-50 rounded-2xl p-8 border border-cyan-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Tailwind CSSは、ユーティリティクラスを組み合わせることで、素早く柔軟にUIを構築できます。
              レスポンシブデザインや状態変化にも簡単に対応でき、カスタマイズ性も非常に高いのが特徴です。
            </p>
            <p>
              Tailwind CSSを使うことで、CSSファイルを書く必要がほとんどなくなり、
              HTMLとスタイルが一体化するため、開発スピードが大幅に向上します。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-cyan-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            Tailwind CSSを理解したら、次はvanilla-extractで型安全なCSSを学びましょう！
          </p>
          <Link 
            to="/study/css/vanilla-extract"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
          >
            vanilla-extractを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
