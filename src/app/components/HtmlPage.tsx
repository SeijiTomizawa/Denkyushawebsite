import { Link } from 'react-router-dom';
import { ArrowLeft, FileCode, FileText, Image, Link as LinkIcon, List, Table, Code } from 'lucide-react';

export default function HtmlPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
            <FileCode className="text-white" size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 text-gray-900">HTML</h1>
          <p className="text-xl text-gray-600">
            HTMLはHyperText Markup Languageの略で、Webページの構造を定義するマークアップ言語です。
            すべてのWebサイトの基礎となる技術を学びましょう。
          </p>
        </div>

        {/* HTMLとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FileText className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">HTMLとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              HTML（HyperText Markup Language）は、Webページの構造を記述するためのマークアップ言語です。
              文章に意味を持たせるために「タグ」と呼ばれる記号を使って、見出し、段落、リスト、リンクなどの要素を定義します。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>私のWebページ</title>
</head>
<body>
    <h1>ようこそ！</h1>
    <p>これが私の最初のWebページです。</p>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">HTMLの基本構造</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>&lt;!DOCTYPE html&gt;：</strong>HTML5を使用することを宣言</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>&lt;html&gt;：</strong>HTML文書のルート要素</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>&lt;head&gt;：</strong>メタデータや設定情報を記述</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>&lt;body&gt;：</strong>実際に表示されるコンテンツを記述</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 基本的なタグ */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的なタグ</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">見出しと段落</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 見出し（h1が最も重要、h6が最も低い） -->
<h1>メインタイトル</h1>
<h2>セクション見出し</h2>
<h3>サブセクション見出し</h3>

<!-- 段落 -->
<p>これは段落のテキストです。</p>
<p>これは別の段落です。</p>

<!-- 改行 -->
<p>1行目<br>2行目</p>

<!-- 水平線 -->
<hr>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 text-gray-900">テキストの装飾</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 太字 -->
<strong>重要なテキスト</strong>
<b>太字のテキスト</b>

<!-- 斜体 -->
<em>強調されたテキスト</em>
<i>斜体のテキスト</i>

<!-- マーク -->
<mark>ハイライトされたテキスト</mark>

<!-- 削除線 -->
<del>削除されたテキスト</del>

<!-- 下線 -->
<u>下線付きテキスト</u>

<!-- 小さいテキスト -->
<small>小さいテキスト</small>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* リストとリンク */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <List className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">リストとリンク</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">リスト</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 順序なしリスト -->
<ul>
    <li>項目1</li>
    <li>項目2</li>
    <li>項目3</li>
</ul>

<!-- 順序付きリスト -->
<ol>
    <li>最初の項目</li>
    <li>2番目の項目</li>
    <li>3番目の項目</li>
</ol>

<!-- 定義リスト -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>

<!-- ネストされたリスト -->
<ul>
    <li>項目1
        <ul>
            <li>サブ項目1</li>
            <li>サブ項目2</li>
        </ul>
    </li>
    <li>項目2</li>
</ul>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 text-gray-900">リンク</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なリンク -->
<a href="https://example.com">Exampleサイトへ</a>

<!-- 新しいタブで開く -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    外部サイトへ
</a>

<!-- メールリンク -->
<a href="mailto:info@example.com">メールを送る</a>

<!-- 電話リンク -->
<a href="tel:090-1234-5678">電話をかける</a>

<!-- ページ内リンク -->
<a href="#section1">セクション1へ移動</a>
<h2 id="section1">セクション1</h2>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 画像とメディア */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Image className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">画像とメディア</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 画像 -->
<img src="image.jpg" alt="画像の説明">

<!-- サイズ指定 -->
<img src="image.jpg" alt="画像の説明" width="300" height="200">

<!-- レスポンシブ画像 -->
<picture>
    <source srcset="image-large.jpg" media="(min-width: 800px)">
    <source srcset="image-medium.jpg" media="(min-width: 400px)">
    <img src="image-small.jpg" alt="画像の説明">
</picture>

<!-- 動画 -->
<video controls width="600">
    <source src="video.mp4" type="video/mp4">
    お使いのブラウザは動画タグをサポートしていません。
</video>

<!-- 音声 -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    お使いのブラウザは音声タグをサポートしていません。
</audio>

<!-- YouTube動画の埋め込み -->
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allowfullscreen>
</iframe>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テーブル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Table className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テーブル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なテーブル -->
<table>
    <thead>
        <tr>
            <th>名前</th>
            <th>年齢</th>
            <th>職業</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>山田太郎</td>
            <td>30</td>
            <td>エンジニア</td>
        </tr>
        <tr>
            <td>佐藤花子</td>
            <td>25</td>
            <td>デザイナー</td>
        </tr>
    </tbody>
</table>

<!-- セル結合 -->
<table>
    <tr>
        <th colspan="2">見出し（2列結合）</th>
    </tr>
    <tr>
        <td rowspan="2">2行結合</td>
        <td>データ1</td>
    </tr>
    <tr>
        <td>���ータ2</td>
    </tr>
</table>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* フォーム */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FileText className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">フォーム</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なフォーム -->
<form action="/submit" method="POST">
    <!-- テキスト入力 -->
    <label for="name">名前：</label>
    <input type="text" id="name" name="name" required>
    
    <!-- メールアドレス -->
    <label for="email">メール：</label>
    <input type="email" id="email" name="email" required>
    
    <!-- パスワード -->
    <label for="password">パスワード：</label>
    <input type="password" id="password" name="password" required>
    
    <!-- 数値 -->
    <label for="age">年齢：</label>
    <input type="number" id="age" name="age" min="0" max="120">
    
    <!-- 日付 -->
    <label for="birthday">生年月日：</label>
    <input type="date" id="birthday" name="birthday">
    
    <!-- ラジオボタン -->
    <p>性別：</p>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">男性</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女性</label>
    
    <!-- チェックボックス -->
    <p>興味のある分野：</p>
    <input type="checkbox" id="html" name="interest" value="html">
    <label for="html">HTML</label>
    <input type="checkbox" id="css" name="interest" value="css">
    <label for="css">CSS</label>
    
    <!-- セレクトボックス -->
    <label for="country">国：</label>
    <select id="country" name="country">
        <option value="">選択してください</option>
        <option value="japan">日本</option>
        <option value="usa">アメリカ</option>
        <option value="uk">イギリス</option>
    </select>
    
    <!-- テキストエリア -->
    <label for="message">メッセージ：</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    
    <!-- ファイルアップロード -->
    <label for="file">ファイル：</label>
    <input type="file" id="file" name="file">
    
    <!-- 送信ボタン -->
    <button type="submit">送信</button>
    <button type="reset">リセット</button>
</form>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* セマンティックHTML */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セマンティックHTML</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              セマンティックHTML（意味論的HTML）とは、コンテンツの意味や構造を明確に表すタグを使用することです。
              これにより、検索エンジンやスクリーンリーダーがコンテンツを正しく理解できます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>セマンティックHTMLの例</title>
</head>
<body>
    <!-- ヘッダー -->
    <header>
        <nav>
            <ul>
                <li><a href="#home">ホーム</a></li>
                <li><a href="#about">概要</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- メインコンテンツ -->
    <main>
        <!-- 記事 -->
        <article>
            <header>
                <h1>記事のタイトル</h1>
                <time datetime="2024-01-01">2024年1月1日</time>
            </header>
            
            <section>
                <h2>セクション1</h2>
                <p>コンテンツ...</p>
            </section>
            
            <section>
                <h2>セクション2</h2>
                <p>コンテンツ...</p>
            </section>
            
            <footer>
                <p>著者: 山田太郎</p>
            </footer>
        </article>
        
        <!-- サイドバー -->
        <aside>
            <h3>関連記事</h3>
            <ul>
                <li><a href="#">記事1</a></li>
                <li><a href="#">記事2</a></li>
            </ul>
        </aside>
    </main>
    
    <!-- フッター -->
    <footer>
        <p>&copy; 2024 電究社. All rights reserved.</p>
    </footer>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-xl mb-3 text-gray-900">主なセマンティックタグ</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;header&gt;：</strong>ヘッダーセクション</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;nav&gt;：</strong>ナビゲーションリンク</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;main&gt;：</strong>メインコンテンツ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;article&gt;：</strong>独立したコンテンツ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;section&gt;：</strong>セクション</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;aside&gt;：</strong>サイドバー</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>&lt;footer&gt;：</strong>フッターセクション</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              HTMLはWebページの構造を作る基礎技術です。見出し、段落、リスト、リンク、画像、テーブル、フォームなど、
              様々な要素を組み合わせてコンテンツを構築します。
            </p>
            <p>
              セマンティックHTMLを使用することで、コンテンツの意味や構造を明確にし、
              アクセシビリティやSEOの向上につながります。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-orange-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            HTMLでWebページの構造を理解したら、次はCSSでデザインを学びましょう！
          </p>
          <Link 
            to="/study/css"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            CSSを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}