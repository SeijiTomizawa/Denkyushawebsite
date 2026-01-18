import { Link } from 'react-router-dom';
import { ArrowLeft, Layout } from 'lucide-react';

export default function HtmlSemanticPage() {
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
          <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
            <Layout className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">セマンティックHTML</h1>
          <p className="text-xl text-gray-600">
            意味論的なタグを使って、文書の構造を明確にする方法を学びます。
            SEOとアクセシビリティの向上に不可欠な技術です。
          </p>
        </div>

        {/* セマンティックHTMLとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Layout className="text-teal-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セマンティックHTMLとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              セマンティックHTMLとは、タグに意味を持たせることで、文書の構造を明確にする手法です。
              divやspanのような汎用タグではなく、header、nav、article、footerなどの
              意味を持つタグを使います。
            </p>

            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
              <h4 className="text-xl mb-3 text-gray-900">セマンティックHTMLの利点</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span><strong>SEO：</strong>検索エンジンが内容を理解しやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span><strong>アクセシビリティ：</strong>スクリーンリーダーが構造を認識</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span><strong>保守性：</strong>コードの意図が明確になる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">•</span>
                  <span><strong>一貫性：</strong>チーム開発で共通理解が持てる</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 文書構造タグ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Layout className="text-teal-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">文書構造タグ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なレイアウト構造 -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ページタイトル</title>
</head>
<body>
    <!-- ヘッダー（ページ上部） -->
    <header>
        <h1>サイト名</h1>
        <nav>
            <ul>
                <li><a href="/">ホーム</a></li>
                <li><a href="/about">会社概要</a></li>
                <li><a href="/contact">お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- メインコンテンツ -->
    <main>
        <!-- セクション -->
        <section>
            <h2>セクションタイトル</h2>
            <p>コンテンツ...</p>
        </section>
        
        <!-- 記事 -->
        <article>
            <h2>記事タイトル</h2>
            <p>記事本文...</p>
        </article>
        
        <!-- サイドバー -->
        <aside>
            <h3>関連情報</h3>
            <p>サイドバーコンテンツ...</p>
        </aside>
    </main>
    
    <!-- フッター（ページ下部） -->
    <footer>
        <p>&copy; 2024 会社名</p>
    </footer>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* セマンティック要素の詳細 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Layout className="text-teal-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">主要なセマンティック要素</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- header: ヘッダー情報 -->
<header>
    <h1>サイト名</h1>
    <p>サイトの説明</p>
</header>

<!-- nav: ナビゲーション -->
<nav>
    <ul>
        <li><a href="/">ホーム</a></li>
        <li><a href="/about">概要</a></li>
    </ul>
</nav>

<!-- main: メインコンテンツ（1ページに1つ） -->
<main>
    <h1>ページタイトル</h1>
    <p>メインコンテンツ...</p>
</main>

<!-- section: セクション（まとまった内容） -->
<section>
    <h2>セクションタイトル</h2>
    <p>セクション内容...</p>
</section>

<!-- article: 独立したコンテンツ -->
<article>
    <h2>記事タイトル</h2>
    <p>投稿日: <time datetime="2024-01-01">2024年1月1日</time></p>
    <p>記事本文...</p>
</article>

<!-- aside: 補足情報 -->
<aside>
    <h3>関連リンク</h3>
    <ul>
        <li><a href="#">リンク1</a></li>
        <li><a href="#">リンク2</a></li>
    </ul>
</aside>

<!-- footer: フッター情報 -->
<footer>
    <p>著作権情報</p>
    <address>
        お問い合わせ: <a href="mailto:info@example.com">info@example.com</a>
    </address>
</footer>

<!-- address: 連絡先情報 -->
<address>
    <p>会社名</p>
    <p>〒123-4567 東京都...</p>
    <p>電話: 03-1234-5678</p>
</address>

<!-- figure: 図表 -->
<figure>
    <img src="chart.png" alt="売上グラフ">
    <figcaption>2024年の売上推移</figcaption>
</figure>

<!-- details/summary: 折りたたみ可能なコンテンツ -->
<details>
    <summary>詳細を表示</summary>
    <p>詳細な説明がここに表示されます。</p>
</details>

<!-- mark: ハイライト -->
<p>重要な<mark>キーワード</mark>を強調します。</p>

<!-- time: 日時 -->
<p>公開日: <time datetime="2024-01-01T10:00:00">2024年1月1日 10:00</time></p>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 実践例 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Layout className="text-teal-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ブログページの例</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ブログ - 記事タイトル</title>
</head>
<body>
    <header>
        <h1>マイブログ</h1>
        <nav>
            <ul>
                <li><a href="/">ホーム</a></li>
                <li><a href="/articles">記事一覧</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h2>記事のタイトル</h2>
                <p>
                    投稿日: <time datetime="2024-01-15">2024年1月15日</time>
                    著者: <a href="/author/taro">山田太郎</a>
                </p>
            </header>
            
            <section>
                <h3>はじめに</h3>
                <p>記事の導入部分...</p>
            </section>
            
            <section>
                <h3>本文</h3>
                <p>記事の本文...</p>
                
                <figure>
                    <img src="image.jpg" alt="説明">
                    <figcaption>画像の説明</figcaption>
                </figure>
            </section>
            
            <section>
                <h3>まとめ</h3>
                <p>記事のまとめ...</p>
            </section>
            
            <footer>
                <p>タグ: <a href="/tag/html">HTML</a>, <a href="/tag/css">CSS</a></p>
            </footer>
        </article>
        
        <aside>
            <h3>人気記事</h3>
            <ul>
                <li><a href="#">記事1</a></li>
                <li><a href="#">記事2</a></li>
                <li><a href="#">記事3</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <nav>
            <ul>
                <li><a href="/privacy">プライバシーポリシー</a></li>
                <li><a href="/terms">利用規約</a></li>
            </ul>
        </nav>
        <p>&copy; 2024 マイブログ</p>
    </footer>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 悪い例と良い例 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Layout className="text-teal-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">悪い例と良い例</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">❌ 悪い例（セマンティックでない）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<div class="header">
    <div class="logo">サイト名</div>
    <div class="menu">
        <div class="menu-item">ホーム</div>
        <div class="menu-item">概要</div>
    </div>
</div>

<div class="main">
    <div class="post">
        <div class="post-title">記事タイトル</div>
        <div class="post-content">記事本文...</div>
    </div>
</div>

<div class="footer">
    <div class="copyright">&copy; 2024</div>
</div>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">✅ 良い例（セマンティック）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<header>
    <h1>サイト名</h1>
    <nav>
        <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/about">概要</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>記事タイトル</h2>
        <p>記事本文...</p>
    </article>
</main>

<footer>
    <p>&copy; 2024</p>
</footer>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ARIAロール */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Layout className="text-teal-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ARIA（補助的なアクセシビリティ）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              ARIAは、HTMLだけでは表現できないアクセシビリティ情報を補完します。
              ただし、セマンティックHTMLを優先し、必要な場合のみ使用します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- role属性 -->
<div role="navigation"><!-- navタグを使う方が良い -->
    <a href="/">ホーム</a>
</div>

<div role="main"><!-- mainタグを使う方が良い -->
    メインコンテンツ
</div>

<!-- aria-label: 要素に名前を付ける -->
<button aria-label="メニューを開く">
    ☰
</button>

<!-- aria-labelledby: 別の要素で名前を付ける -->
<section aria-labelledby="section-title">
    <h2 id="section-title">セクションタイトル</h2>
</section>

<!-- aria-describedby: 説明を関連付ける -->
<input 
    type="text" 
    aria-describedby="username-help"
>
<span id="username-help">3～20文字で入力してください</span>

<!-- aria-hidden: スクリーンリーダーから隠す -->
<span aria-hidden="true">📧</span> メールアドレス

<!-- aria-live: 動的コンテンツの更新を通知 -->
<div aria-live="polite">
    <!-- ここの内容が更新されたら通知 -->
</div>

<!-- aria-current: 現在のページ -->
<nav>
    <a href="/">ホーム</a>
    <a href="/about" aria-current="page">概要</a>
</nav>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-teal-50 rounded-2xl p-8 border border-teal-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              セマンティックHTMLを使うことで、文書の構造が明確になり、SEOとアクセシビリティが向上します。
              header、nav、main、article、aside、footerなどのタグを適切に使いましょう。
            </p>
            <p>
              divやspanは汎用的なコンテナとして便利ですが、意味を持つタグが存在する場合は
              そちらを優先することで、より良いHTMLを作成できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-teal-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            HTMLの学習を完了したら、次はCSSでスタイリングを学びましょう！
          </p>
          <Link 
            to="/study/css"
            className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            CSSを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
