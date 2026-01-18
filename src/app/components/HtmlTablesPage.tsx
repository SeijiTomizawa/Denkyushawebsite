import { Link } from 'react-router-dom';
import { ArrowLeft, Table } from 'lucide-react';

export default function HtmlTablesPage() {
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
          <div className="w-20 h-20 bg-lime-600 rounded-2xl flex items-center justify-center mb-6">
            <Table className="text-white" size={40} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-6 text-gray-900">テーブル</h1>
          <p className="text-xl text-gray-600">
            テーブル要素を使ってデータを表形式で表示する方法を学びます。
            構造化されたデータを見やすく整理できます。
          </p>
        </div>

        {/* 基本的なテーブル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
              <Table className="text-lime-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的なテーブル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 基本構造 -->
<table>
    <tr><!-- 行 -->
        <th>見出し1</th><!-- ヘッダーセル -->
        <th>見出し2</th>
        <th>見出し3</th>
    </tr>
    <tr>
        <td>データ1</td><!-- データセル -->
        <td>データ2</td>
        <td>データ3</td>
    </tr>
    <tr>
        <td>データ4</td>
        <td>データ5</td>
        <td>データ6</td>
    </tr>
</table>

<!-- ボーダー付き -->
<table border="1">
    <tr>
        <th>名前</th>
        <th>年齢</th>
        <th>職業</th>
    </tr>
    <tr>
        <td>山田太郎</td>
        <td>30</td>
        <td>エンジニア</td>
    </tr>
    <tr>
        <td>佐藤花子</td>
        <td>28</td>
        <td>デザイナー</td>
    </tr>
</table>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テーブルの構造 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
              <Table className="text-lime-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テーブルの構造</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 完全な構造 -->
<table>
    <caption>売上データ</caption><!-- テーブルのタイトル -->
    
    <thead><!-- ヘッダー部分 -->
        <tr>
            <th>月</th>
            <th>売上</th>
            <th>利益</th>
        </tr>
    </thead>
    
    <tbody><!-- 本体部分 -->
        <tr>
            <td>1月</td>
            <td>100万円</td>
            <td>20万円</td>
        </tr>
        <tr>
            <td>2月</td>
            <td>150万円</td>
            <td>30万円</td>
        </tr>
    </tbody>
    
    <tfoot><!-- フッター部分 -->
        <tr>
            <td>合計</td>
            <td>250万円</td>
            <td>50万円</td>
        </tr>
    </tfoot>
</table>

<!-- 列グループ -->
<table>
    <colgroup>
        <col style="background-color: #f0f0f0;">
        <col span="2" style="background-color: #e0e0e0;">
    </colgroup>
    <thead>
        <tr>
            <th>製品</th>
            <th>価格</th>
            <th>在庫</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>製品A</td>
            <td>1,000円</td>
            <td>50個</td>
        </tr>
    </tbody>
</table>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* セルの結合 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
              <Table className="text-lime-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">セルの結合</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 横方向の結合（colspan） -->
<table border="1">
    <tr>
        <th colspan="3">ヘッダー（3列分）</th>
    </tr>
    <tr>
        <td>データ1</td>
        <td>データ2</td>
        <td>データ3</td>
    </tr>
</table>

<!-- 縦方向の結合（rowspan） -->
<table border="1">
    <tr>
        <th rowspan="2">カテゴリ</th>
        <td>項目1</td>
    </tr>
    <tr>
        <td>項目2</td>
    </tr>
</table>

<!-- 複雑な結合例 -->
<table border="1">
    <tr>
        <th rowspan="2">年度</th>
        <th colspan="2">売上</th>
        <th rowspan="2">合計</th>
    </tr>
    <tr>
        <th>第1四半期</th>
        <th>第2四半期</th>
    </tr>
    <tr>
        <td>2023年</td>
        <td>100万</td>
        <td>150万</td>
        <td>250万</td>
    </tr>
    <tr>
        <td>2024年</td>
        <td>120万</td>
        <td>180万</td>
        <td>300万</td>
    </tr>
</table>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* アクセシブルなテーブル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
              <Table className="text-lime-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">アクセシブルなテーブル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- scope属性でヘッダーの範囲を指定 -->
<table>
    <thead>
        <tr>
            <th scope="col">名前</th><!-- 列のヘッダー -->
            <th scope="col">年齢</th>
            <th scope="col">職業</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">山田太郎</th><!-- 行のヘッダー -->
            <td>30</td>
            <td>エンジニア</td>
        </tr>
    </tbody>
</table>

<!-- headers属性で関連付け -->
<table>
    <thead>
        <tr>
            <th id="name">名前</th>
            <th id="age">年齢</th>
            <th id="job">職業</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td headers="name">山田太郎</td>
            <td headers="age">30</td>
            <td headers="job">エンジニア</td>
        </tr>
    </tbody>
</table>

<!-- 複雑なテーブルの場合 -->
<table>
    <caption>社員情報</caption>
    <thead>
        <tr>
            <th id="dept" scope="col">部署</th>
            <th id="name" scope="col">名前</th>
            <th id="age" scope="col">年齢</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th id="sales" scope="rowgroup" rowspan="2">営業部</th>
            <td headers="sales name">山田太郎</td>
            <td headers="sales age">30</td>
        </tr>
        <tr>
            <td headers="sales name">佐藤花子</td>
            <td headers="sales age">28</td>
        </tr>
    </tbody>
</table>`}</code>
              </pre>
            </div>

            <div className="bg-lime-50 rounded-lg p-6 border border-lime-200">
              <h4 className="text-xl mb-3 text-gray-900">テーブルのベストプラクティス</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 mt-1">•</span>
                  <span>必ず&lt;caption&gt;でテーブルのタイトルを付ける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 mt-1">•</span>
                  <span>&lt;th&gt;にscope属性を付けて範囲を明確に</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 mt-1">•</span>
                  <span>レイアウト目的でテーブルを使わない（CSSを使用）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 mt-1">•</span>
                  <span>レスポンシブ対応を考慮する</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* レスポンシブテーブル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
              <Table className="text-lime-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">レスポンシブテーブル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- 横スクロール方式 -->
<div style="overflow-x: auto;">
    <table>
        <thead>
            <tr>
                <th>列1</th>
                <th>列2</th>
                <th>列3</th>
                <th>列4</th>
                <th>列5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>データ</td>
                <td>データ</td>
                <td>データ</td>
                <td>データ</td>
                <td>データ</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- カード表示方式（CSSで制御） -->
<table class="responsive-table">
    <thead>
        <tr>
            <th>名前</th>
            <th>年齢</th>
            <th>職業</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="名前">山田太郎</td>
            <td data-label="年齢">30</td>
            <td data-label="職業">エンジニア</td>
        </tr>
    </tbody>
</table>

<!-- 
CSS例：
@media (max-width: 600px) {
    .responsive-table thead {
        display: none;
    }
    
    .responsive-table tr {
        display: block;
        margin-bottom: 1rem;
    }
    
    .responsive-table td {
        display: block;
        text-align: right;
    }
    
    .responsive-table td::before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
    }
}
-->`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-lime-50 rounded-2xl p-8 border border-lime-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              テーブルは、データを表形式で表示するための重要な要素です。
              thead、tbody、tfootで構造を明確にし、scope属性でアクセシビリティを向上させましょう。
            </p>
            <p>
              セルの結合（colspan、rowspan）を使うことで、複雑な表も表現できます。
              レスポンシブデザインにも配慮し、モバイルでも見やすいテーブルを作りましょう。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-lime-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            テーブルを理解したら、次はフォームについて学びましょう！
          </p>
          <Link 
            to="/study/html/forms"
            className="inline-flex items-center gap-2 bg-white text-lime-600 px-6 py-3 rounded-lg font-semibold hover:bg-lime-50 transition-colors"
          >
            フォームを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
