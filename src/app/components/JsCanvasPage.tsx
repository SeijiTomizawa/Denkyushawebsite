import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Image, Sparkles, Zap } from 'lucide-react';

export default function JsCanvasPage() {
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
            <Palette className="text-white" size={40} />
          </div>
          <h1 className="text-5xl mb-6 text-gray-900">Canvas API</h1>
          <p className="text-xl text-gray-600">
            Canvas APIは、JavaScriptを使って図形やグラフィックを動的に描画できる強力なツールです。
            ゲーム、データ可視化、画像処理など、様々な用途に活用できます。
          </p>
        </div>

        {/* Canvas APIとは */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Palette className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">Canvas APIとは</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Canvas APIは、HTML5の&lt;canvas&gt;要素を使用して、JavaScriptでビットマップグラフィックスを描画するためのAPIです。
              2Dグラフィックス（Canvas 2D API）と3Dグラフィックス（WebGL）をサポートしています。
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-xl mb-3 text-gray-900">Canvas APIでできること</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>図形の描画（線、矩形、円、パスなど）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>テキストの描画とスタイリング</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>画像の描画と加工</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>アニメーション</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>インタラクティブなグラフィックス</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>ゲーム開発</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>データ可視化（グラフ、チャート）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 基本的な使い方 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">基本的な使い方</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`<!-- HTML -->
<canvas id="myCanvas" width="800" height="600"></canvas>

<!-- JavaScript -->
<script>
// Canvasの取得
const canvas = document.getElementById('myCanvas');

// 描画コンテキストの取得（2D）
const ctx = canvas.getContext('2d');

// レスポンシブ対応
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// デバイスピクセル比対応（高解像度ディスプレイ）
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.offsetWidth * dpr;
canvas.height = canvas.offsetHeight * dpr;
ctx.scale(dpr, dpr);
</script>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 図形の描画 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Palette className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">図形の描画</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <h3 className="text-2xl mb-4 text-gray-900">矩形（四角形）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 塗りつぶし矩形
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);
// fillRect(x, y, width, height)

// 枠線のみの矩形
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(300, 50, 200, 100);

// 矩形をクリア（消去）
ctx.clearRect(60, 60, 50, 50);`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">線と経路（パス）</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 直線
ctx.beginPath();
ctx.moveTo(50, 50); // 開始点
ctx.lineTo(200, 200); // 終点
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

// 複数の線
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.lineTo(200, 200);
ctx.lineTo(50, 200);
ctx.closePath(); // パスを閉じる
ctx.stroke();

// 線のスタイル
ctx.lineCap = 'round'; // 'butt', 'round', 'square'
ctx.lineJoin = 'round'; // 'miter', 'round', 'bevel'
ctx.setLineDash([5, 10]); // 点線 [線の長さ, 間隔]
ctx.lineDashOffset = 0;

// 三角形（塗りつぶし）
ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">円と弧</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 円
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
// arc(x, y, radius, startAngle, endAngle)
ctx.fillStyle = 'orange';
ctx.fill();

// 円（枠線のみ）
ctx.beginPath();
ctx.arc(350, 200, 50, 0, Math.PI * 2);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;
ctx.stroke();

// 半円
ctx.beginPath();
ctx.arc(200, 350, 50, 0, Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();

// 扇形
ctx.beginPath();
ctx.moveTo(350, 350); // 中心点
ctx.arc(350, 350, 50, 0, Math.PI / 2);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();

// ドーナツ型（複数パスの組み合わせ）
ctx.beginPath();
ctx.arc(500, 200, 60, 0, Math.PI * 2);
ctx.arc(500, 200, 30, 0, Math.PI * 2, true); // 反時計回り
ctx.fillStyle = 'pink';
ctx.fill();`}</code>
              </pre>
            </div>

            <h3 className="text-2xl mb-4 mt-8 text-gray-900">ベジェ曲線</h3>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 2次ベジェ曲線
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.quadraticCurveTo(200, 100, 350, 50);
// quadraticCurveTo(cpx, cpy, x, y)
// cp: 制御点, (x,y): 終点
ctx.strokeStyle = 'blue';
ctx.stroke();

// 3次ベジェ曲線
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.bezierCurveTo(150, 50, 250, 250, 350, 150);
// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
ctx.strokeStyle = 'red';
ctx.stroke();`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 色とスタイル */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Palette className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">色とスタイル</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 色の指定
ctx.fillStyle = 'red';
ctx.fillStyle = '#ff0000';
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // 透明度50%

// グラデーション（線形）
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(50, 50, 200, 100);

// グラデーション（放射状）
const radialGradient = ctx.createRadialGradient(150, 150, 20, 150, 150, 100);
radialGradient.addColorStop(0, 'white');
radialGradient.addColorStop(1, 'blue');
ctx.fillStyle = radialGradient;
ctx.fillRect(50, 200, 200, 200);

// パターン
const img = new Image();
img.src = 'pattern.png';
img.onload = () => {
    const pattern = ctx.createPattern(img, 'repeat');
    // 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
    ctx.fillStyle = pattern;
    ctx.fillRect(300, 50, 200, 200);
};

// 影
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 100, 100);

// 影を無効化
ctx.shadowColor = 'transparent';

// 透明度
ctx.globalAlpha = 0.5; // 全体の透明度
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
ctx.globalAlpha = 1.0; // 元に戻す`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* テキストの描画 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">テキストの描画</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 基本的なテキスト
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 50, 100);

// 枠線のテキスト
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeText('Hello Canvas!', 50, 150);

// フォント設定
ctx.font = 'italic bold 40px serif';
ctx.font = '20px "Courier New"';

// テキスト配置
ctx.textAlign = 'left'; // 'left', 'right', 'center', 'start', 'end'
ctx.textBaseline = 'top'; // 'top', 'middle', 'bottom', 'alphabetic', 'hanging'

// テキストの測定
const text = 'Hello';
const metrics = ctx.measureText(text);
console.log(metrics.width); // テキストの幅

// 最大幅を指定
ctx.fillText('Long text...', 50, 200, 200);
// fillText(text, x, y, maxWidth)

// 中央揃え
const centerX = canvas.width / 2;
ctx.textAlign = 'center';
ctx.fillText('Centered Text', centerX, 250);

// 垂直中央揃え
const centerY = canvas.height / 2;
ctx.textBaseline = 'middle';
ctx.fillText('Centered Text', centerX, centerY);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 画像の描画 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Image className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">画像の描画</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 画像の読み込みと描画
const img = new Image();
img.src = 'image.jpg';
img.onload = () => {
    // 基本的な描画
    ctx.drawImage(img, 50, 50);
    
    // サイズ指定
    ctx.drawImage(img, 50, 50, 200, 150);
    // drawImage(img, x, y, width, height)
    
    // 切り抜きとサイズ指定
    ctx.drawImage(img, 
        100, 100, 200, 150,  // 元画像の切り抜き範囲 (sx, sy, sWidth, sHeight)
        50, 50, 400, 300     // 描画先 (dx, dy, dWidth, dHeight)
    );
};

// エラーハンドリング
img.onerror = () => {
    console.error('画像の読み込みに失敗しました');
};

// 画像データの取得と操作
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data; // Uint8ClampedArray [r, g, b, a, r, g, b, a, ...]

// ピクセル操作（グレースケール化）
for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;     // R
    data[i + 1] = avg; // G
    data[i + 2] = avg; // B
    // data[i + 3] はアルファ値（そのまま）
}

// 画像データを描画
ctx.putImageData(imageData, 0, 0);

// 画像の反転
ctx.save();
ctx.scale(-1, 1); // 水平反転
ctx.drawImage(img, -canvas.width, 0, canvas.width, canvas.height);
ctx.restore();

// 画像の回転
ctx.save();
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.rotate(Math.PI / 4); // 45度回転
ctx.drawImage(img, -img.width / 2, -img.height / 2);
ctx.restore();`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 変形と合成 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">変形と合成</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// 状態の保存と復元
ctx.save(); // 現在の状態を保存
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
ctx.restore(); // 保存した状態に戻す

// 移動
ctx.translate(100, 100); // 原点を移動
ctx.fillRect(0, 0, 50, 50); // 新しい原点から描画

// 回転
ctx.rotate(Math.PI / 4); // 45度回転（ラジアン）

// 拡大・縮小
ctx.scale(2, 2); // 2倍に拡大
ctx.scale(0.5, 1); // 水平方向のみ0.5倍

// 変形行列
ctx.transform(1, 0, 0, 1, 0, 0);
ctx.setTransform(1, 0, 0, 1, 0, 0); // リセットしてから変形
ctx.resetTransform(); // 変形をリセット

// 合成モード
ctx.globalCompositeOperation = 'source-over'; // デフォルト
ctx.globalCompositeOperation = 'destination-over';
ctx.globalCompositeOperation = 'source-atop';
ctx.globalCompositeOperation = 'destination-atop';
ctx.globalCompositeOperation = 'lighter'; // 加算
ctx.globalCompositeOperation = 'multiply'; // 乗算
ctx.globalCompositeOperation = 'screen'; // スクリーン

// クリッピング
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.clip(); // クリッピング領域を設定

// この後の描画は円の内側のみ
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, canvas.width, canvas.height);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* アニメーション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">アニメーション</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// requestAnimationFrameを使ったアニメーション
let x = 0;
let y = 100;
let dx = 2; // x方向の速度
let dy = 1; // y方向の速度
const ballRadius = 20;

function animate() {
    // キャンバスをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // ボールを描画
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    
    // 壁との衝突判定
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx; // 反転
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    // 位置を更新
    x += dx;
    y += dy;
    
    // 次のフレームをリクエスト
    requestAnimationFrame(animate);
}

// アニメーション開始
animate();

// アニメーションの停止
let animationId;
function animate() {
    // ... 描画処理 ...
    animationId = requestAnimationFrame(animate);
}

// 停止
cancelAnimationFrame(animationId);

// 時間ベースのアニメーション
let lastTime = 0;
function animate(currentTime) {
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    
    // deltaTimeを使って速度を調整
    x += dx * deltaTime * 0.1;
    
    // ... 描画処理 ...
    
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// パーティクルアニメーション
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * 4 - 2;
        this.radius = Math.random() * 3 + 1;
        this.color = \`hsl(\${Math.random() * 360}, 50%, 50%)\`;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push(new Particle(canvas.width / 2, canvas.height / 2));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
    });
    
    requestAnimationFrame(animate);
}

animate();`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* インタラクション */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Zap className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">インタラクション</h2>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
              <pre className="text-green-400 text-sm">
                <code>{`// マウスイベント
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    console.log(\`Clicked at: \${x}, \${y}\`);
    
    // クリック位置に円を描画
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
});

// マウスの移動
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 線を描画
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    lastX = x;
    lastY = y;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

// タッチイベント（モバイル対応）
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    // ... 処理 ...
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    // ... 処理 ...
});

// 衝突判定
function isPointInCircle(px, py, cx, cy, radius) {
    const dx = px - cx;
    const dy = py - cy;
    return dx * dx + dy * dy <= radius * radius;
}

function isPointInRect(px, py, rx, ry, rw, rh) {
    return px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
}

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (isPointInCircle(x, y, 100, 100, 50)) {
        console.log('円をクリックしました');
    }
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 学習のまとめ */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h3 className="text-2xl mb-4 text-gray-900">学習のまとめ</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Canvas APIを使うことで、JavaScriptでリッチなグラフィックスを描画できます。
              図形、テキスト、画像の描画から、アニメーション、インタラクションまで、
              様々な視覚的表現が可能です。
            </p>
            <p>
              ゲーム開発、データ可視化、画像処理など、幅広い用途に活用できます。
              requestAnimationFrameを使った滑らかなアニメーションや、
              マウス・タッチイベントを組み合わせたインタラクティブなコンテンツを作成できます。
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="mt-8 p-6 bg-yellow-600 rounded-xl text-white">
          <h3 className="text-xl mb-3">次のステップ</h3>
          <p className="mb-4">
            Canvas APIを理解したら、次は代表的なJavaScriptライブラリを学びましょう！
          </p>
          <Link 
            to="/study/javascript/libraries"
            className="inline-flex items-center gap-2 bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
          >
            JavaScriptライブラリを学ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
