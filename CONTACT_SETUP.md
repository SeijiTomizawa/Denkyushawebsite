# コンタクトフォーム セットアップガイド（EmailJS）

このガイドでは、EmailJSを使ったコンタクトフォームのセットアップ手順を説明します。

## 前提条件

- EmailJSアカウント（無料プランでOK）
- メールアドレス

---

## セットアップ手順

### 1. EmailJSアカウントの作成

1. [EmailJS](https://www.emailjs.com/)にアクセス
2. **Sign Up**をクリックして無料アカウントを作成
3. メールアドレスを確認して認証を完了

### 2. メールサービスの追加

1. EmailJSダッシュボードにログイン
2. **Email Services**タブに移動
3. **Add New Service**をクリック
4. 使用するメールサービスを選択（Gmail、Outlook、Yahoo、その他）
5. サービスに接続して認証
6. **Service ID**をメモしておく（例: `service_xxxxxxx`）

#### Gmail を使用する場合

1. **Gmail**を選択
2. Googleアカウントでログイン
3. EmailJSにアクセスを許可
4. Service IDを確認してメモ

### 3. メールテンプレートの作成

1. **Email Templates**タブに移動
2. **Create New Template**をクリック
3. テンプレートを以下のように設定：

#### Template Settings

- **Template Name**: `contact_form`（任意）
- **Template ID**: 自動生成されるのでメモ（例: `template_xxxxxxx`）

#### Template Content

**Subject（件名）:**
```
【お問い合わせ】{{from_name}}様より
```

**Content（本文）:**
```
お問い合わせがありました。

名前: {{from_name}}
メールアドレス: {{from_email}}
会社名・団体名: {{company}}

お問い合わせ内容:
{{message}}
```

4. **Save**をクリック
5. **Template ID**をメモしておく

### 4. Public Keyの取得

1. ダッシュボードの**Account**タブに移動
2. **API Keys**セクションを探す
3. **Public Key**をコピーしてメモ（例: `xxxxxxxxxxxxxxxx`）

### 5. 環境変数の設定

#### ローカル環境（開発時）

1. プロジェクトルートに `.env.local` ファイルを作成
2. 以下の内容をコピーして値を設定：

```env
# EmailJS Settings
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

**重要:** Viteを使用しているため、環境変数は `VITE_` で始まる必要があります。

#### Vercel環境（本番環境）

1. [Vercel](https://vercel.com/)にログイン
2. プロジェクトを選択
3. **Settings** → **Environment Variables** に移動
4. 以下の環境変数を追加：

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_xxxxxxx` | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_xxxxxxx` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `xxxxxxxxxxxxxxxx` | Production, Preview, Development |

5. **Save**をクリック
6. プロジェクトを再デプロイ

### 6. デプロイ

#### Vercelへのデプロイ

1. GitHubリポジトリにプッシュ
2. Vercelが自動的にデプロイを開始
3. デプロイが完了したらサイトにアクセス

または

```bash
# Vercel CLIでデプロイ
npm install -g vercel
vercel
```

---

## テスト方法

### ローカルでのテスト

1. `.env.local`ファイルに環境変数を設定

2. 開発サーバーを起動：
```bash
npm run dev
```

3. `http://localhost:5173/` にアクセス

4. お問い合わせフォームから送信テスト

5. EmailJSダッシュボードの**Activity**タブで送信状況を確認

### 本番環境でのテスト

1. Vercelにデプロイ
2. デプロイされたURLにアクセス
3. お問い合わせフォームから送信
4. 設定したメールアドレスにメールが届くことを確認

---

## トラブルシューティング

### エラー: "Failed to send email"

- 環境変数が正しく設定されているか確認
- Service ID、Template ID、Public Keyが正しいか確認
- `.env.local`ファイルが正しく読み込まれているか確認
- Viteを再起動（環境変数の変更後は必須）

### メールが届かない

1. EmailJSダッシュボードで**Activity**を確認
2. 送信履歴が表示されているか確認
3. 迷惑メールフォルダを確認
4. EmailJSのサービス接続が有効か確認

### 環境変数が読み込まれない

- 環境変数名が `VITE_` で始まっているか確認
- `.env.local`ファイルがプロジェクトルートにあるか確認
- サーバーを再起動したか確認

### 無料プランの制限

- EmailJS無料プランは**月200通**まで送信可能
- それ以上必要な場合は有料プランに変更
- ダッシュボードで使用状況を確認できます

---

## セキュリティに関する注意事項

1. **Public Keyについて**
   - EmailJSのPublic Keyはクライアント側で使用するため、公開されても問題ありません
   - ただし、念のため環境変数として管理することを推奨

2. **メール送信の制限**
   - EmailJSは無料プランで月200通の制限があります
   - スパム対策として適切な制限が設けられています

3. **reCAPTCHA（オプション）**
   - より強固なスパム対策が必要な場合、EmailJSのreCAPTCHA機能を利用できます
   - ダッシュボードの**Security**タブから設定可能

---

## EmailJSの利点

✅ **シンプルな設定**: バックエンド不要でフロントエンドから直接送信
✅ **無料プラン**: 月200通まで無料で利用可能
✅ **複数のメールサービス対応**: Gmail、Outlook、Yahoo、SendGridなど
✅ **テンプレート機能**: HTMLメールのカスタマイズが簡単
✅ **ダッシュボード**: 送信履歴と統計情報を確認可能

---

## 参考リンク

- [EmailJS ドキュメント](https://www.emailjs.com/docs/)
- [EmailJS React ガイド](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS 料金プラン](https://www.emailjs.com/pricing/)

---

## サポート

問題が解決しない場合は、以下を確認してください：

1. EmailJS の Activity ログ
2. ブラウザの開発者ツール（Console）
3. 環境変数の設定（特に`VITE_`プレフィックス）

それでも解決しない場合は、EmailJSの公式ドキュメントやサポートを参照してください。
