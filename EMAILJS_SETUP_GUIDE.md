# EmailJS セットアップガイド - 電究社

このガイドでは、2つのフォーム（お問い合わせフォームとお申し込みフォーム）を区別してメール送信する設定方法を説明します。

---

## 📧 フォームの区別方法

電究社のサイトには2種類のフォームがあります：

1. **お問い合わせフォーム** - トップページの簡易的な問い合わせ
2. **WEB制作お申し込みフォーム** - 詳細な制作依頼

---

## 🎯 推奨される2つのセットアップ方法

### 方法1: 同じテンプレートで変数を使用（簡単）⭐ おすすめ

同じテンプレートIDを使用し、`{{form_type}}`変数で区別します。

#### メリット：
- ✅ 設定が簡単（テンプレート1つだけ）
- ✅ 環境変数の変更不要

#### 設定手順：

**現在の状態:**
- `.env.example`の設定で両方のフォームが同じテンプレートID（`template_vffjunb`）を使用

**EmailJSテンプレート設定:**

件名：
```
【電究社】{{form_type}} - {{person_name}}{{from_name}}様より
```

本文：
```
電究社へ{{form_type}}がありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ フォームタイプ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{form_type}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 基本情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
お名前: {{person_name}}{{from_name}}
会社名: {{company_name}}{{company}}
メール: {{email}}{{from_email}}
電話: {{phone}}

{{#company_name}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ サイト情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
業種: {{industry}}
サイトの目的: {{purpose}}
デザインイメージ: {{design_image}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ ページ構成
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
必要なページ: {{pages}}
概算ページ数: {{page_count}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 機能要件
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
必要な機能: {{features}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 予算・スケジュール
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
予算: {{budget}}
希望納期: {{deadline}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ その他
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
参考サイト: {{reference_urls}}
その他の要望: {{other_requests}}
{{/company_name}}

{{#message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}
{{/message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールは電究社のフォームから自動送信されました。
```

> **注意:** EmailJSのテンプレートは`{{#変数名}}...{{/変数名}}`で条件分岐が可能です。お申し込みフォームのデータがある場合のみ表示されます。

---

### 方法2: 別々のテンプレートを使用（詳細に管理）

2つの異なるテンプレートIDを作成し、フォームごとに完全に別のメールを送信します。

#### メリット：
- ✅ フォームごとに完全にカスタマイズ可能
- ✅ それぞれのメール内容を独立して管理

#### デメリット：
- ❌ テンプレートを2つ作成・管理する必要がある

#### 設定手順：

##### 1. EmailJSで新しいテンプレートを作成

1. [EmailJS Dashboard](https://dashboard.emailjs.com/)にログイン
2. 左側メニューから **Email Templates** をクリック
3. **Create New Template** ボタンをクリック
4. お申し込みフォーム用のテンプレートを作成
5. テンプレートIDをコピー（例: `template_order123`）

##### 2. `.env.example`ファイルを編集

```env
# EmailJS設定
VITE_EMAILJS_SERVICE_ID=service_okm53ng
VITE_EMAILJS_PUBLIC_KEY=e-GUfAZt_TrCL8nGB

# お問い合わせフォーム用テンプレートID
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_vffjunb

# お申し込みフォーム用テンプレートID（新しく作成したID）
VITE_EMAILJS_ORDER_TEMPLATE_ID=template_order123
```

##### 3. お問い合わせフォーム用テンプレート（`template_vffjunb`）

**件名:**
```
【電究社】お問い合わせ - {{from_name}}様より
```

**本文:**
```
電究社へのお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

お名前: {{from_name}}
メールアドレス: {{from_email}}
会社名・団体名: {{company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールは電究社のお問い合わせフォームから自動送信されました。
```

##### 4. お申し込みフォーム用テンプレート（`template_order123`）

**件名:**
```
【電究社】WEB制作お申し込み - {{company_name}}様
```

**本文:**
```
電究社へWEB制作のお申し込みがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 基本情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

会社名・屋号: {{company_name}}
ご担当者名: {{person_name}}
メールアドレス: {{email}}
電話番号: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ サイト情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

業種: {{industry}}

サイトの目的:
{{purpose}}

デザインイメージ: {{design_image}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ ページ構成
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

必要なページ: {{pages}}
概算ページ数: {{page_count}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 機能要件
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

必要な機能: {{features}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 予算・スケジュール
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ご予算: {{budget}}
希望納期: {{deadline}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ その他
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

参考サイト（URL）:
{{reference_urls}}

その他ご要望・ご質問:
{{other_requests}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールは電究社のWEB制作お申し込みフォームから自動送信されました。
```

---

## 🔧 環境変数の設定

### 開発環境（ローカル）

プロジェクトのルートディレクトリに`.env.local`ファイルを作成：

```env
VITE_EMAILJS_SERVICE_ID=service_okm53ng
VITE_EMAILJS_PUBLIC_KEY=e-GUfAZt_TrCL8nGB
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_vffjunb
VITE_EMAILJS_ORDER_TEMPLATE_ID=template_vffjunb
```

> **方法2を使う場合:**  
> `VITE_EMAILJS_ORDER_TEMPLATE_ID`を新しく作成したテンプレートIDに変更してください。

### 本番環境

デプロイ先（Netlify、Vercel等）の環境変数設定で以下を追加：

```
VITE_EMAILJS_SERVICE_ID=service_okm53ng
VITE_EMAILJS_PUBLIC_KEY=e-GUfAZt_TrCL8nGB
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_vffjunb
VITE_EMAILJS_ORDER_TEMPLATE_ID=template_vffjunb（または新しいID）
```

---

## 📊 送信されるデータ一覧

### お問い合わせフォーム

| 変数名 | 説明 |
|--------|------|
| `{{form_type}}` | "お問い合わせ" |
| `{{from_name}}` | お名前 |
| `{{from_email}}` | メールアドレス |
| `{{company}}` | 会社名・団体名 |
| `{{message}}` | お問い合わせ内容 |

### お申し込みフォーム

| 変数名 | 説明 |
|--------|------|
| `{{form_type}}` | "WEB制作お申し込み" |
| `{{company_name}}` | 会社名・屋号 |
| `{{person_name}}` | ご担当者名 |
| `{{email}}` | メールアドレス |
| `{{phone}}` | 電話番号 |
| `{{industry}}` | 業種 |
| `{{purpose}}` | サイトの目的 |
| `{{design_image}}` | デザインイメージ |
| `{{page_count}}` | 概算ページ数 |
| `{{pages}}` | 必要なページ（カンマ区切り） |
| `{{features}}` | 必要な機能（カンマ区切り） |
| `{{budget}}` | ご予算 |
| `{{deadline}}` | 希望納期 |
| `{{reference_urls}}` | 参考サイト（URL） |
| `{{other_requests}}` | その他ご要望・ご質問 |

---

## ✅ テスト方法

### 1. ブラウザの開発者ツールを開く（F12）

### 2. Consoleタブを選択

### 3. お問い合わせフォームをテスト

1. トップページのお問い合わせフォームにアクセス
2. 情報を入力して送信
3. コンソールで以下を確認：
   ```
   📧 フォーム送信開始
   EmailJS設定: {
     serviceId: "service_okm53ng",
     templateId: "template_vffjunb",  ← お問い合わせ用
     publicKey: "設定済み"
   }
   📤 EmailJS送信中... {form_type: "お問い合わせ", ...}
   ✅ EmailJS送信結果: {status: 200, ...}
   🎉 メール送信成功！
   ```

### 4. お申し込みフォームをテスト

1. `/order`ページにアクセス
2. 情報を入力して送信
3. コンソールで以下を確認：
   ```
   📧 お申し込みフォーム送信開始
   EmailJS設定: {
     serviceId: "service_okm53ng",
     templateId: "template_vffjunb",  ← お申し込み用（方法2なら別ID）
     publicKey: "設定済み"
   }
   📤 EmailJS送信中... {form_type: "WEB制作お申し込み", ...}
   ✅ EmailJS送信結果: {status: 200, ...}
   🎉 お申し込みメール送信成功！
   ```

### 5. EmailJSダッシュボードで確認

1. [EmailJS Activity](https://dashboard.emailjs.com/admin)にアクセス
2. 送信履歴に2つのメールが表示されているか確認
3. それぞれの`form_type`が正しく区別されているか確認

### 6. メールボックスで確認

受信したメールの件名で区別できることを確認：
- お問い合わせ: `【電究社】お問い合わせ - ○○様より`
- お申し込み: `【電究社】WEB制作お申し込み - ○○様`

---

## 🎯 まとめ

### 現在の設定（方法1）:
- ✅ お問い合わせフォーム: `contactTemplateId`（`template_vffjunb`）
- ✅ お申し込みフォーム: `orderTemplateId`（`template_vffjunb`）
- ✅ 両方とも同じテンプレートを使用し、`{{form_type}}`で区別

### より詳細に管理したい場合（方法2）:
1. EmailJSで新しいテンプレートを作成
2. `.env.local`の`VITE_EMAILJS_ORDER_TEMPLATE_ID`を新しいIDに変更
3. 開発サーバーを再起動

---

## 🔗 参考リンク

- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Template Variables Guide](https://www.emailjs.com/docs/user-guide/dynamic-variables/)
