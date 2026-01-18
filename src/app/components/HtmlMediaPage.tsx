import { Link } from 'react-router-dom';
import { ArrowLeft, Image, Video, Music } from 'lucide-react';

export default function HtmlMediaPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/html" 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          HTMLページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
            <Image className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">画像とメディア</h1>
          <p className="text-xl text-gray-600">
            画像、動画、音声、iframeなどのメディア要素をWebページに埋め込む方法を学びます。
            視覚的なコンテンツでユーザー体験を向上させましょう。
          </p>
        </div>

        {/* 画像 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Image className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">画像（img）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的な画像 -->
<img src="image.jpg" alt="画像の説明">

<!-- サイズ指定 -->
<img src="image.jpg" alt="画像の説明" width="300" height="200">

<!-- 相対パス -->
<img src="images/photo.jpg" alt="写真">
<img src="../images/photo.jpg" alt="写真">

<!-- 絶対パス -->
<img src="/images/photo.jpg" alt="写真">
<img src="https://example.com/image.jpg" alt="外部画像">

<!-- レスポンシブ画像 -->
<img src="image.jpg" alt="画像" style="max-width: 100%; height: auto;">

<!-- 遅延読み込み -->
<img src="image.jpg" alt="画像" loading="lazy">
<img src="image.jpg" alt="画像" loading="eager"><!-- すぐに読み込む -->

<!-- 画像マップ（クリッカブルマップ） -->
<img src="map.jpg" alt="マップ" usemap="#workmap">
<map name="workmap">
    <area shape="rect" coords="34,44,270,350" alt="エリア1" href="page1.html">
    <area shape="circle" coords="290,172,111" alt="エリア2" href="page2.html">
</map>

<!-- 代替テキストが重要 -->
<img src="logo.png" alt="会社ロゴ">
<img src="chart.png" alt="2024年の売上推移グラフ">
<img src="decoration.png" alt=""><!-- 装飾画像は空 -->

<!-- タイトル属性（ツールチップ） -->
<img src="image.jpg" alt="画像の説明" title="追加情報">

<!-- figureとfigcaptionで画像に説明を追加 -->
<figure>
    <img src="image.jpg" alt="美しい風景">
    <figcaption>富士山からの眺め（2024年撮影）</figcaption>
</figure>`}</code>
              </pre>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h4 className="text-xl mb-3 text-gray-900">alt属性の重要性</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span><strong>アクセシビリティ：</strong>スクリーンリーダーが読み上げる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span><strong>SEO：</strong>検索エンジンが画像の内容を理解</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span><strong>代替表示：</strong>画像が読み込めない時の代わり</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* picture要素 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Image className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">レスポンシブ画像（picture）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              picture要素を使うと、画面サイズやデバイスに応じて異なる画像を表示できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- レスポンシブ画像 -->
<picture>
    <!-- デスクトップ用 -->
    <source media="(min-width: 1024px)" srcset="image-large.jpg">
    <!-- タブレット用 -->
    <source media="(min-width: 768px)" srcset="image-medium.jpg">
    <!-- モバイル用（フォールバック） -->
    <img src="image-small.jpg" alt="レスポンシブ画像">
</picture>

<!-- 画像フォーマットの切り替え -->
<picture>
    <!-- WebP対応ブラウザ -->
    <source srcset="image.webp" type="image/webp">
    <!-- AVIF対応ブラウザ -->
    <source srcset="image.avif" type="image/avif">
    <!-- フォールバック（どのブラウザでも表示） -->
    <img src="image.jpg" alt="画像">
</picture>

<!-- 高解像度ディスプレイ対応 -->
<picture>
    <source srcset="image@2x.jpg 2x, image@1x.jpg 1x">
    <img src="image.jpg" alt="画像">
</picture>

<!-- srcset属性（imgタグでも使える） -->
<img 
    src="image-small.jpg" 
    srcset="image-small.jpg 480w,
            image-medium.jpg 768w,
            image-large.jpg 1024w"
    sizes="(max-width: 480px) 100vw,
           (max-width: 768px) 50vw,
           33vw"
    alt="レスポンシブ画像"
>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 動画 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Video className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">動画（video）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的な動画 -->
<video src="video.mp4" controls>
    お使いのブラウザは動画タグに対応していません。
</video>

<!-- 複数のフォーマット -->
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <source src="video.ogv" type="video/ogg">
    お使いのブラウザは動画タグに対応していません。
</video>

<!-- 属性 -->
<video 
    src="video.mp4" 
    controls              <!-- コントロールを表示 -->
    autoplay              <!-- 自動再生 -->
    loop                  <!-- ループ再生 -->
    muted                 <!-- ミュート（自動再生に必要） -->
    poster="thumbnail.jpg" <!-- サムネイル画像 -->
    preload="metadata"    <!-- 事前読み込み -->
    width="640" 
    height="360"
>
</video>

<!-- preload属性 -->
<video src="video.mp4" controls preload="none"><!-- 読み込まない -->
<video src="video.mp4" controls preload="metadata"><!-- メタデータのみ -->
<video src="video.mp4" controls preload="auto"><!-- 全て読み込む -->

<!-- 字幕（track） -->
<video src="video.mp4" controls>
    <track 
        kind="subtitles" 
        src="subtitles-ja.vtt" 
        srclang="ja" 
        label="日本語"
        default
    >
    <track 
        kind="subtitles" 
        src="subtitles-en.vtt" 
        srclang="en" 
        label="English"
    >
</video>

<!-- YouTube埋め込み -->
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
>
</iframe>

<!-- レスポンシブな動画 -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <video 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="video.mp4" 
        controls
    >
    </video>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 音声 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Music className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">音声（audio）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的な音声 -->
<audio src="audio.mp3" controls>
    お使いのブラウザは音声タグに対応していません。
</audio>

<!-- 複数のフォーマット -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.wav" type="audio/wav">
    お使いのブラウザは音声タグに対応していません。
</audio>

<!-- 属性 -->
<audio 
    src="audio.mp3" 
    controls       <!-- コントロールを表示 -->
    autoplay       <!-- 自動再生 -->
    loop           <!-- ループ再生 -->
    muted          <!-- ミュート -->
    preload="auto" <!-- 事前読み込み -->
>
</audio>

<!-- バックグラウンドミュージック（非推奨） -->
<audio src="bgm.mp3" autoplay loop muted></audio>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* iframe */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Image className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">インラインフレーム（iframe）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              iframeは、他のWebページやコンテンツを埋め込むことができます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なiframe -->
<iframe src="https://example.com" width="600" height="400">
    お使いのブラウザはiframeに対応していません。
</iframe>

<!-- タイトルを付ける（アクセシビリティ） -->
<iframe 
    src="https://example.com" 
    title="埋め込みコンテンツの説明"
    width="600" 
    height="400"
>
</iframe>

<!-- YouTube動画 -->
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
>
</iframe>

<!-- Google Maps -->
<iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
>
</iframe>

<!-- レスポンシブなiframe -->
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe 
        src="https://example.com"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        title="埋め込みコンテンツ"
    >
    </iframe>
</div>

<!-- sandbox属性（セキュリティ） -->
<iframe 
    src="untrusted.html" 
    sandbox="allow-scripts allow-same-origin"
>
</iframe>`}</code>
              </pre>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h4 className="text-xl mb-3 text-gray-900">iframeの注意点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>SEO: iframeのコンテンツは検索エンジンに認識されにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>セキュリティ: 信頼できないサイトの埋め込みは避ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>パフォーマンス: 多用するとページが重くなる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SVG */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Image className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">SVG（ベクター画像）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- SVGファイルを画像として -->
<img src="icon.svg" alt="アイコン" width="50" height="50">

<!-- インラインSVG -->
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<!-- より複雑なSVG -->
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="180" height="180" fill="lightblue" />
    <circle cx="100" cy="100" r="50" fill="red" />
    <text x="100" y="110" text-anchor="middle" fill="white">Hello</text>
</svg>

<!-- CSSでスタイル可能 -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" style="fill: blue; stroke: black; stroke-width: 2" />
</svg>

<!-- アイコンとして使用 -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
</svg>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              画像とメディア要素は、Webページを視覚的に豊かにする重要な要素です。
              適切な属性を使い、アクセシビリティとパフォーマンスに配慮しましょう。
            </p>
            <p>
              alt属性は必ず記述し、レスポンシブデザインに対応した画像を提供することで、
              すべてのユーザーに快適な体験を提供できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            画像とメディアを理解したら、次はテーブルについて学びましょう！
          </p>
          <Link 
            to="/study/html/tables"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            テーブルを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
