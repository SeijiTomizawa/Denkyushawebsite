import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function HtmlFormsPage() {
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
          <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">フォーム</h1>
          <p className="text-xl text-gray-600">
            フォーム要素を使ってユーザーからの入力を受け取る方法を学びます。
            問い合わせフォーム、ログインフォーム、検索フォームなどに必要不可欠な要素です。
          </p>
        </div>

        {/* 基本的なフォーム */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的なフォーム</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本構造 -->
<form action="/submit" method="POST">
    <label for="username">ユーザー名:</label>
    <input type="text" id="username" name="username">
    
    <label for="password">パスワード:</label>
    <input type="password" id="password" name="password">
    
    <button type="submit">送信</button>
</form>

<!-- action属性：送信先のURL -->
<!-- method属性：GET（URLに表示）またはPOST（非表示） -->

<!-- GETメソッド -->
<form action="/search" method="GET">
    <input type="text" name="q" placeholder="検索">
    <button type="submit">検索</button>
</form>
<!-- 送信先: /search?q=検索ワード -->

<!-- POSTメソッド -->
<form action="/login" method="POST">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">ログイン</button>
</form>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 入力フィールド */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テキスト入力</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本的なテキスト -->
<input type="text" name="username" placeholder="ユーザー名">

<!-- パスワード -->
<input type="password" name="password" placeholder="パスワード">

<!-- メールアドレス -->
<input type="email" name="email" placeholder="email@example.com">

<!-- URL -->
<input type="url" name="website" placeholder="https://example.com">

<!-- 電話番号 -->
<input type="tel" name="phone" placeholder="090-1234-5678">

<!-- 数値 -->
<input type="number" name="age" min="0" max="120" step="1">

<!-- 範囲スライダー -->
<input type="range" name="volume" min="0" max="100" step="1" value="50">

<!-- 検索 -->
<input type="search" name="query" placeholder="検索...">

<!-- 日付 -->
<input type="date" name="birthday">

<!-- 時刻 -->
<input type="time" name="appointment">

<!-- 日時 -->
<input type="datetime-local" name="meeting">

<!-- 月 -->
<input type="month" name="month">

<!-- 週 -->
<input type="week" name="week">

<!-- 色 -->
<input type="color" name="color" value="#ff0000">

<!-- ファイル -->
<input type="file" name="upload">
<input type="file" name="images" multiple accept="image/*">

<!-- 非表示 -->
<input type="hidden" name="user_id" value="123">

<!-- 複数行テキスト -->
<textarea name="message" rows="5" cols="50" placeholder="メッセージを入力"></textarea>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* チェックボックスとラジオボタン */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">選択要素</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- チェックボックス（複数選択可） -->
<label>
    <input type="checkbox" name="hobbies" value="sports">
    スポーツ
</label>
<label>
    <input type="checkbox" name="hobbies" value="music">
    音楽
</label>
<label>
    <input type="checkbox" name="hobbies" value="reading">
    読書
</label>

<!-- 初期チェック状態 -->
<input type="checkbox" name="agree" value="yes" checked> 利用規約に同意

<!-- ラジオボタン（1つだけ選択） -->
<label>
    <input type="radio" name="gender" value="male">
    男性
</label>
<label>
    <input type="radio" name="gender" value="female">
    女性
</label>
<label>
    <input type="radio" name="gender" value="other">
    その他
</label>

<!-- セレクトボックス（ドロップダウン） -->
<select name="prefecture">
    <option value="">都道府県を選択</option>
    <option value="tokyo">東京都</option>
    <option value="osaka">大阪府</option>
    <option value="fukuoka">福岡県</option>
</select>

<!-- 初期選択 -->
<select name="country">
    <option value="japan" selected>日本</option>
    <option value="usa">アメリカ</option>
    <option value="uk">イギリス</option>
</select>

<!-- 複数選択可能 -->
<select name="languages" multiple size="4">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="php">PHP</option>
</select>

<!-- オプショングループ -->
<select name="food">
    <optgroup label="果物">
        <option value="apple">りんご</option>
        <option value="banana">バナナ</option>
    </optgroup>
    <optgroup label="野菜">
        <option value="tomato">トマト</option>
        <option value="cucumber">きゅうり</option>
    </optgroup>
</select>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ボタン */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">ボタン</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 送信ボタン -->
<button type="submit">送信</button>
<input type="submit" value="送信">

<!-- リセットボタン -->
<button type="reset">リセット</button>
<input type="reset" value="リセット">

<!-- 通常のボタン -->
<button type="button">クリック</button>
<input type="button" value="クリック">

<!-- 画像ボタン -->
<input type="image" src="submit-button.png" alt="送信">

<!-- 無効化 -->
<button type="submit" disabled>送信不可</button>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* フォームのバリデーション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">バリデーション</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 必須入力 -->
<input type="text" name="username" required>

<!-- 最小・最大長 -->
<input type="text" name="username" minlength="3" maxlength="20">

<!-- 数値の範囲 -->
<input type="number" name="age" min="18" max="100">

<!-- パターン（正規表現） -->
<input type="text" name="zipcode" pattern="[0-9]{3}-[0-9]{4}" placeholder="123-4567">
<input type="text" name="phone" pattern="[0-9]{2,4}-[0-9]{2,4}-[0-9]{3,4}">

<!-- メール形式 -->
<input type="email" name="email" required>

<!-- URL形式 -->
<input type="url" name="website">

<!-- プレースホルダー -->
<input type="text" name="search" placeholder="検索ワードを入力">

<!-- 自動フォーカス -->
<input type="text" name="username" autofocus>

<!-- 自動補完 -->
<input type="text" name="name" autocomplete="name">
<input type="email" name="email" autocomplete="email">
<input type="tel" name="phone" autocomplete="tel">

<!-- 自動補完オフ -->
<input type="text" name="code" autocomplete="off">

<!-- 読み取り専用 -->
<input type="text" name="id" value="12345" readonly>

<!-- カスタムエラーメッセージ -->
<input type="text" name="username" required title="ユーザー名は必須です">

<!-- 完全な例 -->
<form action="/register" method="POST" novalidate>
    <label for="username">ユーザー名（3～20文字）:</label>
    <input 
        type="text" 
        id="username" 
        name="username" 
        minlength="3" 
        maxlength="20" 
        required
        pattern="[a-zA-Z0-9_]+"
        title="英数字とアンダースコアのみ"
    >
    
    <label for="email">メールアドレス:</label>
    <input 
        type="email" 
        id="email" 
        name="email" 
        required
    >
    
    <label for="age">年齢（18歳以上）:</label>
    <input 
        type="number" 
        id="age" 
        name="age" 
        min="18" 
        max="120" 
        required
    >
    
    <button type="submit">登録</button>
</form>

<!-- novalidate属性：HTML5バリデーションを無効化（JavaScript使用時） -->`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* フォームの整理 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FileText className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">フォームの整理</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- fieldsetとlegendでグループ化 -->
<form>
    <fieldset>
        <legend>個人情報</legend>
        
        <label for="name">名前:</label>
        <input type="text" id="name" name="name">
        
        <label for="email">メール:</label>
        <input type="email" id="email" name="email">
    </fieldset>
    
    <fieldset>
        <legend>住所</legend>
        
        <label for="zipcode">郵便番号:</label>
        <input type="text" id="zipcode" name="zipcode">
        
        <label for="address">住所:</label>
        <input type="text" id="address" name="address">
    </fieldset>
    
    <button type="submit">送信</button>
</form>

<!-- グループ全体を無効化 -->
<fieldset disabled>
    <legend>利用不可</legend>
    <input type="text" name="field1">
    <input type="text" name="field2">
</fieldset>

<!-- datalistで候補を表示 -->
<label for="browser">ブラウザ:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
    <option value="Edge">
</datalist>`}</code>
              </pre>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
              <h4 className="text-xl mb-3 text-gray-900">フォームのベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>すべての入力フィールドにlabelを付ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>適切なtype属性を使う（email、tel、urlなど）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>プレースホルダーで入力例を示す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>バリデーションエラーは明確に表示</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>送信ボタンは分かりやすく配置</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              フォームは、ユーザーからの入力を受け取るための重要な要素です。
              適切なtype属性とバリデーション属性を使うことで、ユーザビリティとデータの品質が向上します。
            </p>
            <p>
              labelとinputを関連付け、fieldsetでグループ化することで、
              アクセシビリティの高いフォームを作成できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-emerald-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            フォームを理解したら、次はセマンティックHTMLについて学びましょう！
          </p>
          <Link 
            to="/study/html/semantic"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            セマンティックHTMLを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
