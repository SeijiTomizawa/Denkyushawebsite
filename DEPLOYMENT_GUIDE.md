# デプロイガイド - EmailJS環境変数の設定

このガイドでは、Vercelなどのホスティング環境でEmailJSを使用するための環境変数設定方法を説明します。

## 重要な注意事項

⚠️ **`.env.local` ファイルはGitにコミットされません**

セキュリティ上の理由から、`.env.local` ファイルは `.gitignore` に含まれており、GitHubにプッシュされません。そのため、**デプロイ環境で別途環境変数を設定する必要があります**。

---

## Vercelへのデプロイ手順

### 1. Vercelにログイン

1. [Vercel](https://vercel.com/)にアクセス
2. GitHubアカウントでログイン
3. プロジェクトをインポート

### 2. 環境変数の設定

#### 方法A: Vercelダッシュボードから設定

1. Vercelダッシュボードでプロジェクトを選択
2. **Settings** タブをクリック
3. 左側のメニューから **Environment Variables** を選択
4. 以下の環境変数を追加：

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_okm53ng` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_vffjunb` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `e-GUfAZt_TrCL8nGB` | Production, Preview, Development |

5. 各変数を入力後、**Save** をクリック
6. プロジェクトを再デプロイ（**Deployments** タブから最新のデプロイメントを選択して **Redeploy**）

#### 方法B: Vercel CLIから設定

```bash
# Vercel CLIをインストール
npm install -g vercel

# プロジェクトディレクトリに移動
cd your-project-directory

# 環境変数を設定
vercel env add VITE_EMAILJS_SERVICE_ID
# 値を入力: service_okm53ng

vercel env add VITE_EMAILJS_TEMPLATE_ID
# 値を入力: template_vffjunb

vercel env add VITE_EMAILJS_PUBLIC_KEY
# 値を入力: e-GUfAZt_TrCL8nGB

# デプロイ
vercel --prod
```

### 3. デプロイの確認

1. Vercelのデプロイが完了するのを待つ
2. デプロイされたURLにアクセス
3. ブラウザの開発者ツールを開く（F12キー）
4. **Console** タブを確認
   - エラーがないことを確認
   - "EmailJS Public Key is not set" が表示されていないことを確認

### 4. テスト送信

1. お問い合わせフォームに情報を入力
2. 送信ボタンをクリック
3. 「お問い合わせありがとうございます」のメッセージが表示されることを確認
4. EmailJSダッシュボードの **Activity** タブで送信履歴を確認
5. メールアドレスに問い合わせ内容が届くことを確認

---

## 環境変数の確認方法

### ローカル環境で確認

```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 にアクセス
# 開発者ツール（F12）のConsoleを確認
```

**確認すべき点：**
- ❌ "EmailJS Public Key is not set" が表示される → 環境変数が読み込まれていない
- ✅ エラーメッセージが表示されない → 正常に設定されている

### デプロイ環境で確認

1. デプロイされたサイトにアクセス
2. 開発者ツール（F12）を開く
3. **Console** タブでエラーを確認

---

## トラブルシューティング

### ❌ "EmailJS configuration is missing"

**原因:** 環境変数が設定されていない、または読み込まれていない

**解決策:**
1. Vercelダッシュボードで環境変数が正しく設定されているか確認
2. 環境変数名が `VITE_` で始まっているか確認
3. プロジェクトを再デプロイ

### ❌ "Failed to send email" / "Error 401"

**原因:** Public Key、Service ID、Template IDのいずれかが間違っている

**解決策:**
1. EmailJSダッシュボードで以下を確認：
   - Service ID: `service_okm53ng`
   - Template ID: `template_vffjunb`
   - Public Key: `e-GUfAZt_TrCL8nGB`
2. Vercelの環境変数と一致しているか確認
3. タイプミスがないか確認

### ❌ メールが届かない

**原因:** EmailJSのサービス設定やテンプレート設定に問題がある

**解決策:**
1. EmailJSダッシュボードの **Activity** タブを確認
   - 送信履歴が表示されている → EmailJSまでは届いている
   - 送信履歴がない → フロントエンドの設定に問題あり
2. EmailJSのメールサービスが正しく接続されているか確認
3. 迷惑メールフォルダを確認
4. テンプレートの設定（件名・本文）を確認

### ❌ ローカルでは動作するが、デプロイ環境で動作しない

**原因:** デプロイ環境で環境変数が設定されていない

**解決策:**
1. `.env.local` は Git にコミットされないため、Vercel で別途設定が必要
2. Vercel の Environment Variables に3つの変数を追加
3. 必ず再デプロイを実行

---

## 環境変数の値（クイックリファレンス）

```
VITE_EMAILJS_SERVICE_ID=service_okm53ng
VITE_EMAILJS_TEMPLATE_ID=template_vffjunb
VITE_EMAILJS_PUBLIC_KEY=e-GUfAZt_TrCL8nGB
```

---

## セキュリティについて

### Public Keyは公開されても問題ない？

はい、EmailJS の **Public Key** はクライアント側（ブラウザ）で使用することを想定しているため、公開されても問題ありません。

ただし、以下の対策を推奨します：

1. **EmailJSのレート制限機能を有効化**
   - ダッシュボードの Security 設定でレート制限を設定
   
2. **ドメイン制限の設定**
   - 特定のドメインからのみリクエストを受け付けるように設定
   
3. **reCAPTCHAの導入**
   - スパム対策としてreCAPTCHAを追加（オプション）

---

## 参考リンク

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)

---

## サポート

問題が解決しない場合は、以下を確認してください：

1. Vercelのデプロイログ
2. ブラウザのConsoleログ
3. EmailJS Activityログ
4. ネットワークタブ（送信リクエストの詳細）
