import { Link } from 'react-router-dom';
import { ArrowLeft, Code, FileCode } from 'lucide-react';

export default function HtmlBasicSyntaxPage() {
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
          <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
            <Code className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">HTML 基本構文</h1>
          <p className="text-xl text-gray-600">
            HTMLの基礎となるタグの構造、文書構造、見出し、段落、テキスト装飾について学びます。
            これらはすべてのWebページの土台となる重要な要素です。
          </p>
        </div>

        {/* HTMLの基本構造 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <FileCode className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">HTMLの基本構造</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              HTMLドキュメントは、決まった構造を持ちます。
              DOCTYPE宣言から始まり、html、head、bodyタグで構成されます。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページタイトル</title>
</head>
<body>
    <!-- ここにコンテンツを書く -->
    <h1>Hello World</h1>
    <p>これは段落です。</p>
</body>
</html>`}</code>
              </pre>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">各要素の説明</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;!DOCTYPE html&gt;:</strong> HTML5文書であることを宣言
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;html&gt;:</strong> HTML文書のルート要素（lang属性で言語を指定）
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;head&gt;:</strong> メタ情報（文書の情報）を記述
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;meta charset="UTF-8"&gt;:</strong> 文字エンコーディングを指定
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;meta name="viewport"&gt;:</strong> レスポンシブデザイン用の設定
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;title&gt;:</strong> ブラウザのタブに表示されるタイトル
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>&lt;body&gt;:</strong> 実際に表示されるコンテンツ
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* タグの基本 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">タグの基本</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 開始タグと終了タグ -->
<p>これは段落です。</p>
<div>これはdiv要素です。</div>

<!-- 空要素（終了タグがない） -->
<br>
<img src="image.jpg" alt="画像">
<input type="text">
<hr>
<meta charset="UTF-8">

<!-- 属性を持つタグ -->
<a href="https://example.com" target="_blank">リンク</a>
<img src="image.jpg" alt="説明" width="300" height="200">
<input type="text" name="username" placeholder="ユーザー名">

<!-- ネスト（入れ子） -->
<div>
    <p>段落1</p>
    <p>段落2</p>
</div>

<!-- コメント -->
<!-- これはコメントです。ブラウザには表示されません。 -->`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 見出し */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">見出し</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              見出しタグは、h1からh6まであり、文書の階層構造を表現します。
              h1が最も重要で、h6が最も重要度が低くなります。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<h1>最も重要な見出し（ページに1つ）</h1>
<h2>主要なセクションの見出し</h2>
<h3>サブセクションの見出し</h3>
<h4>より詳細なセクション</h4>
<h5>さらに詳細なセクション</h5>
<h6>最も詳細なセクション</h6>

<!-- 使用例 -->
<h1>Webサイトのタイトル</h1>

<h2>第1章：HTMLとは</h2>
<h3>HTMLの歴史</h3>
<h3>HTMLの構造</h3>

<h2>第2章：CSSとは</h2>
<h3>CSSの基本</h3>
<h3>セレクタ</h3>`}</code>
              </pre>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h4 className="text-xl mb-3 text-gray-900">見出しのベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>h1はページに1つだけ使用（SEO的に重要）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>階層を飛ばさない（h1の次はh2、h2の次はh3）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>デザイン目的で見出しタグを使わない（CSSで調整）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 段落とテキスト */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">段落とテキスト</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 段落 -->
<p>これは段落です。段落は1つのまとまった文章を表します。</p>
<p>別の段落です。</p>

<!-- 改行 -->
<p>
    1行目<br>
    2行目<br>
    3行目
</p>

<!-- 水平線 -->
<p>セクション1</p>
<hr>
<p>セクション2</p>

<!-- 整形済みテキスト（空白や改行がそのまま表示） -->
<pre>
function hello() {
    console.log('Hello');
}
</pre>

<!-- ブロック引用 -->
<blockquote>
    <p>これは引用文です。</p>
    <cite>著者名</cite>
</blockquote>

<!-- div（汎用コンテナ） -->
<div>
    <p>関連するコンテンツをグループ化</p>
</div>

<!-- span（インライン汎用コンテナ） -->
<p>これは<span style="color: red;">赤い</span>テキストです。</p>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テキスト装飾 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テキスト装飾</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 太字 -->
<p><strong>重要なテキスト（意味的に強調）</strong></p>
<p><b>太字のテキスト（見た目のみ）</b></p>

<!-- 斜体 -->
<p><em>強調されたテキスト（意味的に強調）</em></p>
<p><i>イタリック体のテキスト（見た目のみ）</i></p>

<!-- 下線 -->
<p><u>下線付きテキスト</u></p>

<!-- 取り消し線 -->
<p><s>削除されたテキスト</s></p>
<p><del>削除されたテキスト（編集履歴）</del></p>

<!-- 挿入されたテキスト -->
<p><ins>挿入されたテキスト</ins></p>

<!-- ハイライト -->
<p><mark>ハイライトされたテキスト</mark></p>

<!-- 小さい文字 -->
<p><small>小さい文字（注釈など）</small></p>

<!-- 上付き・下付き文字 -->
<p>E = mc<sup>2</sup></p>
<p>H<sub>2</sub>O</p>

<!-- コード -->
<p>コマンド: <code>npm install</code></p>

<!-- キーボード入力 -->
<p><kbd>Ctrl</kbd> + <kbd>C</kbd> でコピー</p>

<!-- サンプル出力 -->
<p><samp>File not found</samp></p>

<!-- 変数 -->
<p><var>x</var> + <var>y</var> = <var>z</var></p>

<!-- 引用 -->
<p>彼は<q>こんにちは</q>と言った。</p>

<!-- 略語 -->
<p><abbr title="HyperText Markup Language">HTML</abbr></p>

<!-- 時間 -->
<p><time datetime="2024-01-01">2024年1月1日</time></p>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 特殊文字 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">特殊文字（エンティティ）</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              HTMLで予約されている文字や特殊文字を表示するには、エンティティを使います。
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- HTMLタグとして解釈されないようにする -->
&lt;      <!-- < (小なり) -->
&gt;      <!-- > (大なり) -->
&amp;     <!-- & (アンパサンド) -->
&quot;    <!-- " (ダブルクォート) -->
&apos;    <!-- ' (シングルクォート) -->

<!-- スペース -->
&nbsp;    <!-- 改行されない空白 -->

<!-- 著作権など -->
&copy;    <!-- © (著作権) -->
&reg;     <!-- ® (登録商標) -->
&trade;   <!-- ™ (商標) -->

<!-- 通貨記号 -->
&yen;     <!-- ¥ (円) -->
&euro;    <!-- € (ユーロ) -->
&pound;   <!-- £ (ポンド) -->

<!-- 数学記号 -->
&times;   <!-- × (掛ける) -->
&divide;  <!-- ÷ (割る) -->
&plusmn;  <!-- ± (プラスマイナス) -->

<!-- 矢印 -->
&larr;    <!-- ← -->
&uarr;    <!-- ↑ -->
&rarr;    <!-- → -->
&darr;    <!-- ↓ -->

<!-- 使用例 -->
<p>&lt;p&gt;タグは段落を表します。</p>
<p>価格: &yen;1,000</p>
<p>Copyright &copy; 2024</p>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* コメント */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Code className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">コメント</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- これはコメントです。ブラウザには表示されません。 -->

<!-- 
複数行の
コメント
-->

<!-- セクションの区切り -->
<!-- ================================ -->
<!--          ヘッダー               -->
<!-- ================================ -->

<!-- 一時的にコードを無効化 -->
<!--
<p>この段落は表示されません</p>
-->

<!-- メモを残す -->
<!-- TODO: ここに画像を追加 -->
<!-- FIXME: リンク切れを修正 -->
<!-- NOTE: このセクションは後で削除予定 -->`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              HTMLの基本構文として、文書構造、見出し、段落、テキスト装飾について学びました。
              これらはすべてのWebページの基礎となる要素です。
            </p>
            <p>
              見出しタグは階層構造を正しく使い、セマンティックな意味を持つタグ（strong、emなど）を
              適切に使うことで、アクセシビリティとSEOが向上します。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-orange-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            基本構文を理解したら、次はリストとリンクについて学びましょう！
          </p>
          <Link 
            to="/study/html/lists-links"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            リストとリンクを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
