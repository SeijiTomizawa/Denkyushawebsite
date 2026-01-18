import { Link } from 'react-router-dom';
import { ArrowLeft, List, Link as LinkIcon } from 'lucide-react';

export default function HtmlListsLinksPage() {
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
          <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <List className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">リストとリンク</h1>
          <p className="text-xl text-gray-600">
            リスト要素を使ったコンテンツの整理と、リンクを使ったページ間のナビゲーションについて学びます。
            これらはWebサイトの重要な構成要素です。
          </p>
        </div>

        {/* 順序なしリスト */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <List className="text-amber-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">順序なしリスト（ul）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              順序なしリスト（Unordered List）は、箇条書きで項目を表示します。
              順序が重要でない項目をリスト化するときに使います。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的な順序なしリスト -->
<ul>
    <li>項目1</li>
    <li>項目2</li>
    <li>項目3</li>
</ul>

<!-- ネストしたリスト -->
<ul>
    <li>フルーツ
        <ul>
            <li>りんご</li>
            <li>バナナ</li>
            <li>オレンジ</li>
        </ul>
    </li>
    <li>野菜
        <ul>
            <li>トマト</li>
            <li>きゅうり</li>
            <li>レタス</li>
        </ul>
    </li>
</ul>

<!-- CSSでマーカーを変更（参考） -->
<ul style="list-style-type: disc;"><!-- ● 黒丸（デフォルト） -->
    <li>項目</li>
</ul>

<ul style="list-style-type: circle;"><!-- ○ 白丸 -->
    <li>項目</li>
</ul>

<ul style="list-style-type: square;"><!-- ■ 四角 -->
    <li>項目</li>
</ul>

<ul style="list-style-type: none;"><!-- マーカーなし -->
    <li>項目</li>
</ul>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 順序付きリスト */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <List className="text-amber-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">順序付きリスト（ol）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              順序付きリスト（Ordered List）は、番号付きで項目を表示します。
              手順や順位など、順序が重要な項目をリスト化するときに使います。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的な順序付きリスト -->
<ol>
    <li>1番目</li>
    <li>2番目</li>
    <li>3番目</li>
</ol>

<!-- 開始番号を指定 -->
<ol start="5">
    <li>5番目</li>
    <li>6番目</li>
    <li>7番目</li>
</ol>

<!-- 逆順 -->
<ol reversed>
    <li>3番目</li>
    <li>2番目</li>
    <li>1番目</li>
</ol>

<!-- 番号の種類を指定 -->
<ol type="1"><!-- 1, 2, 3（デフォルト） -->
    <li>項目</li>
</ol>

<ol type="A"><!-- A, B, C -->
    <li>項目</li>
</ol>

<ol type="a"><!-- a, b, c -->
    <li>項目</li>
</ol>

<ol type="I"><!-- I, II, III（ローマ数字大文字） -->
    <li>項目</li>
</ol>

<ol type="i"><!-- i, ii, iii（ローマ数字小文字） -->
    <li>項目</li>
</ol>

<!-- ネストしたリスト -->
<ol>
    <li>手順1
        <ol type="a">
            <li>サブ手順a</li>
            <li>サブ手順b</li>
        </ol>
    </li>
    <li>手順2</li>
    <li>手順3</li>
</ol>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 定義リスト */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <List className="text-amber-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">定義リスト（dl）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              定義リスト（Description List）は、用語とその説明をセットで表示します。
              用語集、FAQ、仕様書などで使用されます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的な定義リスト -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Languageの略。Webページの構造を記述する言語。</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheetsの略。Webページのスタイルを記述する言語。</dd>
    
    <dt>JavaScript</dt>
    <dd>Webページに動的な機能を追加するプログラミング言語。</dd>
</dl>

<!-- 1つの用語に複数の説明 -->
<dl>
    <dt>HTML</dt>
    <dd>マークアップ言語</dd>
    <dd>Webページの構造を定義</dd>
    <dd>1993年に誕生</dd>
</dl>

<!-- 複数の用語に1つの説明 -->
<dl>
    <dt>HTML</dt>
    <dt>HyperText Markup Language</dt>
    <dd>Webページの構造を記述する言語</dd>
</dl>

<!-- FAQの例 -->
<dl>
    <dt>Q: HTMLとは何ですか？</dt>
    <dd>A: HTMLは、Webページの構造を記述するマークアップ言語です。</dd>
    
    <dt>Q: どのバージョンを使えばいいですか？</dt>
    <dd>A: 現在はHTML5が標準です。</dd>
</dl>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* リンク（基本） */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <LinkIcon className="text-amber-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">リンク（a）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              リンクタグ（Anchor）は、他のページや同じページ内の別の場所への遷移を可能にします。
              Webの最も基本的な機能の1つです。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なリンク -->
<a href="https://example.com">外部サイトへのリンク</a>

<!-- 同じサイト内の別ページへのリンク -->
<a href="/about.html">Aboutページ</a>
<a href="contact.html">お問い合わせ</a>
<a href="../index.html">1つ上の階層</a>

<!-- 新しいタブで開く -->
<a href="https://example.com" target="_blank">新しいタブで開く</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    安全に新しいタブで開く
</a>

<!-- メールリンク -->
<a href="mailto:info@example.com">メールを送る</a>
<a href="mailto:info@example.com?subject=お問い合わせ&body=こんにちは">
    件名と本文付きメール
</a>

<!-- 電話リンク（スマホで電話をかける） -->
<a href="tel:03-1234-5678">03-1234-5678</a>

<!-- ファイルのダウンロード -->
<a href="document.pdf" download>PDFをダウンロード</a>
<a href="document.pdf" download="新しい名前.pdf">別名でダウンロード</a>

<!-- ページ内リンク（アンカー） -->
<a href="#section1">セクション1へ移動</a>

<h2 id="section1">セクション1</h2>
<p>コンテンツ...</p>

<!-- トップに戻る -->
<a href="#">ページトップへ</a>

<!-- リンクなし（JavaScriptで使用） -->
<a href="#">クリック</a>
<a href="javascript:void(0);">クリック</a>

<!-- 画像をリンクに -->
<a href="https://example.com">
    <img src="image.jpg" alt="説明">
</a>

<!-- ボタン風リンク -->
<a href="register.html" style="display: inline-block; padding: 10px 20px; background: blue; color: white; text-decoration: none;">
    今すぐ登録
</a>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* リンクの属性 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <LinkIcon className="text-amber-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">リンクの重要な属性</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- target属性 -->
<a href="page.html" target="_blank"><!-- 新しいウィンドウ/タブ -->
<a href="page.html" target="_self"><!-- 同じウィンドウ（デフォルト） -->
<a href="page.html" target="_parent"><!-- 親フレーム -->
<a href="page.html" target="_top"><!-- 最上位ウィンドウ -->

<!-- rel属性 -->
<a href="https://example.com" rel="nofollow">
    <!-- 検索エンジンにリンク先を追跡させない -->
</a>

<a href="https://example.com" rel="noopener">
    <!-- セキュリティ対策（target="_blank"使用時） -->
</a>

<a href="https://example.com" rel="noreferrer">
    <!-- リファラー情報を送信しない -->
</a>

<a href="https://example.com" rel="noopener noreferrer">
    <!-- 両方指定（推奨） -->
</a>

<!-- title属性（ツールチップ） -->
<a href="page.html" title="このリンクはページに移動します">リンク</a>

<!-- download属性 -->
<a href="file.pdf" download>ダウンロード</a>
<a href="file.pdf" download="新しいファイル名.pdf">ダウンロード</a>

<!-- hreflang属性（言語指定） -->
<a href="https://example.com/en" hreflang="en">English</a>
<a href="https://example.com/ja" hreflang="ja">日本語</a>`}</code>
              </pre>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h4 className="text-xl mb-3 text-gray-900">リンクのベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>リンクテキストは明確に（「こちら」ではなく「サービス詳細」など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>外部リンクには target="_blank" と rel="noopener noreferrer" を付ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>リンクとわかるようにスタイルを付ける（下線、色など）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>訪問済みリンクは色を変える</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <List className="text-amber-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ナビゲーションの実装</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なナビゲーション -->
<nav>
    <ul>
        <li><a href="index.html">ホーム</a></li>
        <li><a href="about.html">会社概要</a></li>
        <li><a href="services.html">サービス</a></li>
        <li><a href="contact.html">お問い合わせ</a></li>
    </ul>
</nav>

<!-- 現在のページを強調 -->
<nav>
    <ul>
        <li><a href="index.html">ホーム</a></li>
        <li><a href="about.html" aria-current="page">会社概要</a></li>
        <li><a href="services.html">サービス</a></li>
        <li><a href="contact.html">お問い合わせ</a></li>
    </ul>
</nav>

<!-- パンくずリスト -->
<nav aria-label="パンくずリスト">
    <ol>
        <li><a href="/">ホーム</a></li>
        <li><a href="/category/">カテゴリー</a></li>
        <li><a href="/category/subcategory/">サブカテゴリー</a></li>
        <li aria-current="page">現在のページ</li>
    </ol>
</nav>

<!-- フッターナビゲーション -->
<footer>
    <nav aria-label="フッターナビゲーション">
        <ul>
            <li><a href="/privacy">プライバシーポリシー</a></li>
            <li><a href="/terms">利用規約</a></li>
            <li><a href="/sitemap">サイトマップ</a></li>
        </ul>
    </nav>
</footer>

<!-- ドロップダウンメニュー（構造のみ） -->
<nav>
    <ul>
        <li>
            <a href="services.html">サービス</a>
            <ul>
                <li><a href="service1.html">サービス1</a></li>
                <li><a href="service2.html">サービス2</a></li>
                <li><a href="service3.html">サービス3</a></li>
            </ul>
        </li>
    </ul>
</nav>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              リストは情報を整理して見やすく表示するための重要な要素です。
              順序なしリスト（ul）、順序付きリスト（ol）、定義リスト（dl）を適切に使い分けましょう。
            </p>
            <p>
              リンクはWebの基本機能です。適切な属性を使い、セキュリティとアクセシビリティに配慮した
              リンクを作成することが重要です。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-amber-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            リストとリンクを理解したら、次は画像とメディアについて学びましょう！
          </p>
          <Link 
            to="/study/html/media"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            画像とメディアを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
