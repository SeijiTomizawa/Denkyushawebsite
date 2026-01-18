import { Link } from 'react-router-dom';
import { ArrowLeft, MousePointer, Eye, Hand } from 'lucide-react';

export default function JsDomPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/study/javascript" 
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          JavaScript/TypeScriptページに戻る
        </Link>

        <div className="mb-12">
          <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mb-6">
            <MousePointer className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">DOM操作</h1>
          <p className="text-xl text-gray-600">
            DOM（Document Object Model）を操作することで、HTMLの要素を動的に変更できます。
            要素の取得、操作、イベント処理について学びます。
          </p>
        </div>

        {/* DOMとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Eye className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">DOMとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              DOM（Document Object Model）は、HTML文書をJavaScriptから操作するためのAPIです。
              HTML要素をオブジェクトとして扱い、動的に内容やスタイルを変更できます。
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">DOMでできること</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>HTML要素の取得・作成・削除</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>テキストや属性の変更</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>CSSスタイルの変更</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>イベントへの応答</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 要素の取得 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <MousePointer className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">要素の取得</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// IDで取得
const element = document.getElementById('myId');

// クラス名で取得（複数）
const elements = document.getElementsByClassName('myClass');
// HTMLCollectionが返される（配列ではない）

// タグ名で取得（複数）
const paragraphs = document.getElementsByTagName('p');

// CSSセレクタで取得（最初の1つ）
const first = document.querySelector('.container .title');
const button = document.querySelector('button#submit');
const input = document.querySelector('input[type="text"]');

// CSSセレクタで取得（全て）
const all = document.querySelectorAll('.item');
// NodeListが返される

// 親要素からの相対取得
const parent = document.querySelector('.parent');
const child = parent.querySelector('.child');

// 複数の要素をループ
const items = document.querySelectorAll('.item');

// forEachを使う（NodeListの場合）
items.forEach(item => {
    console.log(item.textContent);
});

// forループを使う
for (let i = 0; i < items.length; i++) {
    console.log(items[i].textContent);
}

// for...ofを使う
for (let item of items) {
    console.log(item.textContent);
}

// 配列に変換
const itemsArray = Array.from(items);
const itemsArray2 = [...items];

// 特殊な要素の取得
const body = document.body;
const head = document.head;
const html = document.documentElement;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 要素の操作 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Hand className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">要素の操作</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">テキストとHTML</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`const element = document.querySelector('.target');

// テキストの取得・変更
console.log(element.textContent); // テキストのみ
element.textContent = '新しいテキスト';

// HTMLの取得・変更
console.log(element.innerHTML); // HTMLタグ含む
element.innerHTML = '<strong>太字のテキスト</strong>';

// innerTextとtextContentの違い
// innerText: 表示されているテキストのみ（CSSのdisplay:noneは除外）
// textContent: 全てのテキスト（非表示のものも含む）

// 安全なテキスト挿入（XSS対策）
const userInput = '<script>alert("XSS")</script>';
element.textContent = userInput; // タグとして解釈されない
// element.innerHTML = userInput; // 危険！スクリプトが実行される`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">属性の操作</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`const link = document.querySelector('a');

// 属性の取得
const href = link.getAttribute('href');
const target = link.getAttribute('target');

// 属性の設定
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'noopener noreferrer');

// 属性の削除
link.removeAttribute('target');

// 属性の存在確認
const hasTarget = link.hasAttribute('target'); // true/false

// data属性
const element = document.querySelector('.item');
element.setAttribute('data-id', '123');
element.setAttribute('data-name', '太郎');

// data属性の取得（dataset）
const id = element.dataset.id; // '123'
const name = element.dataset.name; // '太郎'

// data属性の設定
element.dataset.category = 'books';

// フォーム要素の値
const input = document.querySelector('input');
const value = input.value; // 値の取得
input.value = '新しい値'; // 値の設定

const checkbox = document.querySelector('input[type="checkbox"]');
const isChecked = checkbox.checked; // true/false
checkbox.checked = true; // チェックを入れる`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">クラスの操作</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`const element = document.querySelector('.box');

// クラスの追加
element.classList.add('active');
element.classList.add('highlighted', 'important'); // 複数追加

// クラスの削除
element.classList.remove('active');
element.classList.remove('highlighted', 'important');

// クラスのトグル（あれば削除、なければ追加）
element.classList.toggle('visible');

// 条件付きトグル
element.classList.toggle('active', true); // 強制的に追加
element.classList.toggle('active', false); // 強制的に削除

// クラスの存在確認
const hasActive = element.classList.contains('active'); // true/false

// クラスの置き換え
element.classList.replace('old-class', 'new-class');

// 全クラスの取得
const classes = element.className; // 文字列
const classList = Array.from(element.classList); // 配列`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">スタイルの変更</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`const element = document.querySelector('.box');

// インラインスタイルの変更
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '20px';
element.style.display = 'none';

// ケバブケースをキャメルケースに
// CSS: background-color → JS: backgroundColor
// CSS: font-size → JS: fontSize

// 複数のスタイルを一度に
Object.assign(element.style, {
    color: 'blue',
    fontSize: '24px',
    padding: '10px'
});

// スタイルの削除
element.style.color = '';

// 計算済みスタイルの取得
const computedStyle = window.getComputedStyle(element);
const color = computedStyle.color;
const fontSize = computedStyle.fontSize;

// CSSクラスでスタイルを変更（推奨）
element.classList.add('highlighted');`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 要素の作成と挿入 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Hand className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">要素の作成と挿入</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 要素の作成
const newDiv = document.createElement('div');
const newP = document.createElement('p');
const newSpan = document.createElement('span');

// 要素の設定
newDiv.textContent = 'Hello!';
newDiv.className = 'box';
newDiv.id = 'myBox';

// 要素の追加
const container = document.querySelector('.container');

// 末尾に追加
container.appendChild(newDiv);

// 先頭に追加
container.prepend(newDiv);

// 末尾に追加（新しい方法）
container.append(newDiv);

// 特定の要素の前に挿入
const reference = document.querySelector('.reference');
container.insertBefore(newDiv, reference);

// 隣接する位置に挿入
reference.insertAdjacentElement('beforebegin', newDiv); // 要素の前
reference.insertAdjacentElement('afterbegin', newDiv); // 最初の子として
reference.insertAdjacentElement('beforeend', newDiv); // 最後の子として
reference.insertAdjacentElement('afterend', newDiv); // 要素の後

// HTMLテキストを挿入
reference.insertAdjacentHTML('beforeend', '<p>新しい段落</p>');

// 要素の削除
const element = document.querySelector('.target');

// 親要素から削除
element.parentElement.removeChild(element);

// 自身を削除（新しい方法）
element.remove();

// 全ての子要素を削除
container.innerHTML = '';
// または
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// 要素のクローン
const original = document.querySelector('.original');
const clone = original.cloneNode(true); // true: 子要素も含めて複製
container.appendChild(clone);

// 要素の置き換え
const newElement = document.createElement('div');
const oldElement = document.querySelector('.old');
oldElement.replaceWith(newElement);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* イベント処理 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <MousePointer className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">イベント処理</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// イベントリスナーの追加
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    console.log('クリックされました！');
    console.log(event); // イベントオブジェクト
});

// アロー関数で
button.addEventListener('click', (e) => {
    console.log('クリック！', e.target);
});

// イベントリスナーの削除
function handleClick() {
    console.log('クリック');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// マウスイベント
element.addEventListener('click', (e) => {}); // クリック
element.addEventListener('dblclick', (e) => {}); // ダブルクリック
element.addEventListener('mousedown', (e) => {}); // マウスボタンを押した
element.addEventListener('mouseup', (e) => {}); // マウスボタンを離した
element.addEventListener('mousemove', (e) => {}); // マウス移動
element.addEventListener('mouseover', (e) => {}); // 要素に入った
element.addEventListener('mouseout', (e) => {}); // 要素から出た
element.addEventListener('mouseenter', (e) => {}); // 要素に入った（バブリングしない）
element.addEventListener('mouseleave', (e) => {}); // 要素から出た（バブリングしない）

// キーボードイベント
input.addEventListener('keydown', (e) => {
    console.log('キー押下:', e.key);
    if (e.key === 'Enter') {
        console.log('Enterキーが押されました');
    }
});

input.addEventListener('keyup', (e) => {
    console.log('キー離上:', e.key);
});

input.addEventListener('keypress', (e) => {
    console.log('キー入力:', e.key); // 非推奨、keydownを使う
});

// フォームイベント
input.addEventListener('input', (e) => {
    console.log('入力値:', e.target.value);
});

input.addEventListener('change', (e) => {
    console.log('値が変更されました:', e.target.value);
});

input.addEventListener('focus', () => {
    console.log('フォーカスされました');
});

input.addEventListener('blur', () => {
    console.log('フォーカスが外れました');
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // デフォルトの送信を防ぐ
    console.log('フォーム送信');
});

// その他のイベント
window.addEventListener('load', () => {
    console.log('ページ読み込み完了');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM構築完了');
});

window.addEventListener('resize', () => {
    console.log('ウィンドウサイズ変更');
});

window.addEventListener('scroll', () => {
    console.log('スクロール');
});

// イベントオブジェクト
button.addEventListener('click', (event) => {
    event.target; // イベントが発生した要素
    event.currentTarget; // イベントリスナーが設定された要素
    event.type; // イベントの種類
    event.preventDefault(); // デフォルト動作を防ぐ
    event.stopPropagation(); // イベントの伝播を止める
});

// イベントデリゲーション
const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('リスト項目がクリックされました:', e.target.textContent);
    }
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* ナビゲーションとトラバーサル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Eye className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">要素間の移動</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`const element = document.querySelector('.target');

// 親要素
const parent = element.parentElement;
const parentNode = element.parentNode;

// 子要素
const children = element.children; // HTMLCollection（要素のみ）
const childNodes = element.childNodes; // NodeList（テキストノードなども含む）
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// 兄弟要素
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// 祖先要素を検索
const closest = element.closest('.container'); // 最も近い祖先要素

// 子孫要素を検索
const matches = element.querySelectorAll('.child');

// 要素のチェック
const isMatching = element.matches('.active'); // true/false

// 要素の情報
const tagName = element.tagName; // 'DIV'
const id = element.id;
const className = element.className;

// 位置とサイズ
const rect = element.getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height);

// スクロール位置
const scrollTop = element.scrollTop;
const scrollLeft = element.scrollLeft;

// オフセット
const offsetTop = element.offsetTop;
const offsetLeft = element.offsetLeft;
const offsetWidth = element.offsetWidth;
const offsetHeight = element.offsetHeight;`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              DOM操作は、JavaScriptでWebページを動的に変更するための基本技術です。
              要素の取得、操作、イベント処理をマスターすることで、
              インタラクティブなWebアプリケーションを作成できます。
            </p>
            <p>
              querySelector/querySelectorAllを使った要素の取得、classList/styleを使った見た目の変更、
              addEventListenerを使ったイベント処理は、最も頻繁に使う操作です。
              これらを組み合わせることで、様々な動的機能を実装できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            DOM操作を理解したら、次は非同期処理を学びましょう！
          </p>
          <Link 
            to="/study/javascript/async"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            非同期処理を学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
