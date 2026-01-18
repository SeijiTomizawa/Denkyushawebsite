import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from '@/config/emailjs';

interface FormData {
  companyName: string;
  personName: string;
  email: string;
  phone: string;
  industry: string;
  purpose: string;
  designImage: string;
  pageCount: string;
  pages: string[];
  features: string[];
  budget: string;
  deadline: string;
  referenceUrls: string;
  otherRequests: string;
}

const industries = [
  '選択してください',
  '製造業',
  '小売業',
  '飲食業',
  'IT・通信',
  '医療・福祉',
  '教育',
  '不動産',
  '建設業',
  '美容・サロン',
  'その他',
];

const designImages = [
  '選択してください',
  'モダン・洗練',
  'シンプル・ミニマル',
  'クラシック・伝統的',
  'ポップ・カラフル',
  'エレガント・高級感',
  'ナチュラル・温かみ',
  'テクノロジー・先進的',
  'その他',
];

const pageOptions = [
  { value: 'top', label: 'トップページ' },
  { value: 'about', label: '会社概要・自己紹介' },
  { value: 'service', label: 'サービス・事業内容' },
  { value: 'products', label: '製品・商品紹介' },
  { value: 'case', label: '実績・事例' },
  { value: 'blog', label: 'ブログ・お知らせ' },
  { value: 'recruit', label: '採用情報' },
  { value: 'contact', label: 'お問い合わせ' },
  { value: 'faq', label: 'よくある質問' },
  { value: 'privacy', label: 'プライバシーポリシー' },
];

const featureOptions = [
  { value: 'contactForm', label: 'お問い合わせフォーム' },
  { value: 'blog', label: 'ブログ機能' },
  { value: 'cms', label: 'CMS（更新システム）' },
  { value: 'ec', label: 'ECサイト（ショッピング機能）' },
  { value: 'member', label: '会員システム' },
  { value: 'reservation', label: '予約システム' },
  { value: 'multilingual', label: '多言語対応' },
  { value: 'sns', label: 'SNS連携' },
  { value: 'analytics', label: 'アクセス解析' },
];

const budgetRanges = [
  '選択してください',
  '30万円以下',
  '30万円〜50万円',
  '50万円〜100万円',
  '100万円〜200万円',
  '200万円〜500万円',
  '500万円以上',
  '未定・相談したい',
];

export default function OrderFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // EmailJSの初期化
  useEffect(() => {
    if (emailJsConfig.publicKey) {
      emailjs.init(emailJsConfig.publicKey);
      console.log('EmailJS initialized for Order Form');
    } else {
      console.error('EmailJS Public Key is not set');
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    console.log('📧 お申し込みフォーム送信開始');
    console.log('送信データ:', data);
    setIsSending(true);

    try {
      // 環境変数の確認
      console.log('EmailJS設定:', {
        serviceId: emailJsConfig.serviceId,
        templateId: emailJsConfig.orderTemplateId,
        publicKey: emailJsConfig.publicKey ? '設定済み' : '未設定'
      });

      if (!emailJsConfig.serviceId || !emailJsConfig.orderTemplateId) {
        throw new Error('EmailJS configuration is missing');
      }

      // 配列データを文字列に変換
      const selectedPages = data.pages?.join(', ') || '未選択';
      const selectedFeatures = data.features?.join(', ') || '未選択';

      // 送信するテンプレートパラメータ
      const templateParams = {
        form_type: 'WEB制作お申し込み',
        company_name: data.companyName,
        person_name: data.personName,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
        purpose: data.purpose,
        design_image: data.designImage,
        page_count: data.pageCount || '未入力',
        pages: selectedPages,
        features: selectedFeatures,
        budget: data.budget,
        deadline: data.deadline || '未入力',
        reference_urls: data.referenceUrls || '未入力',
        other_requests: data.otherRequests || '未入力',
      };

      console.log('📤 EmailJS送信中...', templateParams);

      // EmailJSでメールを送信
      const result = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.orderTemplateId,
        templateParams
      );

      console.log('✅ EmailJS送信結果:', result);

      if (result.status === 200) {
        console.log('🎉 お申し込みメール送信成功！');
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('❌ 予期しないステータス:', result.status);
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      console.error('❌ 送信エラー:', error);
      if (error instanceof Error) {
        console.error('エラーメッセージ:', error.message);
      }
      alert('送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSending(false);
      console.log('📧 お申し込みフォーム送信処理完了');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h1 className="text-4xl mb-6 text-gray-900">お申し込みありがとうございます</h1>
            <p className="text-xl text-gray-600 mb-8">
              ご入力いただいた内容を確認し、3営業日以内にご連絡させていただきます。
              <br />
              今しばらくお待ちください。
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/create" 
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          CREATEページに戻る
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-4xl mb-4 text-gray-900">WEB制作 お申し込みフォーム</h1>
            <p className="text-lg text-gray-600">
              お客様のご要望を詳しくお聞かせください。より正確なお見積もりとご提案をさせていただきます。
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* 基本情報 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-900 border-b-2 border-yellow-500 pb-2">基本情報</h2>
              
              <div>
                <label htmlFor="companyName" className="block text-sm mb-2 text-gray-700">
                  会社名・屋号 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('companyName', { required: '会社名は必須です' })}
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="株式会社〇〇"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="personName" className="block text-sm mb-2 text-gray-700">
                  ご担当者名 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('personName', { required: 'ご担当者名は必須です' })}
                  type="text"
                  id="personName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="山田 太郎"
                />
                {errors.personName && (
                  <p className="mt-1 text-sm text-red-500">{errors.personName.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email', { 
                      required: 'メールアドレスは必須です',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '有効なメールアドレスを入力してください'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', { required: '電話番号は必須です' })}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                    placeholder="03-1234-5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* サイト情報 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-900 border-b-2 border-yellow-500 pb-2">サイト情報</h2>

              <div>
                <label htmlFor="industry" className="block text-sm mb-2 text-gray-700">
                  業種 <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('industry', { required: '業種を選択してください' })}
                  id="industry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-500">{errors.industry.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm mb-2 text-gray-700">
                  サイトの目的 <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('purpose', { required: 'サイトの目的を入力してください' })}
                  id="purpose"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                  placeholder="例：新規顧客の獲得、既存顧客への情報提供、採用活動の強化など"
                />
                {errors.purpose && (
                  <p className="mt-1 text-sm text-red-500">{errors.purpose.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="designImage" className="block text-sm mb-2 text-gray-700">
                  デザインイメージ <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('designImage', { required: 'デザインイメージを選択してください' })}
                  id="designImage"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                >
                  {designImages.map((image) => (
                    <option key={image} value={image}>
                      {image}
                    </option>
                  ))}
                </select>
                {errors.designImage && (
                  <p className="mt-1 text-sm text-red-500">{errors.designImage.message}</p>
                )}
              </div>
            </div>

            {/* ページ構成 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-900 border-b-2 border-yellow-500 pb-2">ページ構成</h2>

              <div>
                <label className="block text-sm mb-3 text-gray-700">
                  必要なページ <span className="text-red-500">*</span>
                  <span className="text-sm text-gray-500 ml-2">（複数選択可）</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {pageOptions.map((page) => (
                    <label key={page.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        {...register('pages', { required: '少なくとも1つのページを選択してください' })}
                        type="checkbox"
                        value={page.value}
                        className="w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-gray-700">{page.label}</span>
                    </label>
                  ))}
                </div>
                {errors.pages && (
                  <p className="mt-1 text-sm text-red-500">{errors.pages.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="pageCount" className="block text-sm mb-2 text-gray-700">
                  概算ページ数
                </label>
                <input
                  {...register('pageCount')}
                  type="text"
                  id="pageCount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="例：約10ページ"
                />
              </div>
            </div>

            {/* 機能要件 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-900 border-b-2 border-yellow-500 pb-2">機能要件</h2>

              <div>
                <label className="block text-sm mb-3 text-gray-700">
                  必要な機能
                  <span className="text-sm text-gray-500 ml-2">（複数選択可）</span>
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {featureOptions.map((feature) => (
                    <label key={feature.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        {...register('features')}
                        type="checkbox"
                        value={feature.value}
                        className="w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-gray-700">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 予算・スケジュール */}
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-900 border-b-2 border-yellow-500 pb-2">予算・スケジュール</h2>

              <div>
                <label htmlFor="budget" className="block text-sm mb-2 text-gray-700">
                  ご予算 <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('budget', { required: 'ご予算を選択してください' })}
                  id="budget"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="deadline" className="block text-sm mb-2 text-gray-700">
                  希望納期
                </label>
                <input
                  {...register('deadline')}
                  type="text"
                  id="deadline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="例：2024年6月末、できるだけ早く、など"
                />
              </div>
            </div>

            {/* その他 */}
            <div className="space-y-6">
              <h2 className="text-2xl text-gray-900 border-b-2 border-yellow-500 pb-2">その他</h2>

              <div>
                <label htmlFor="referenceUrls" className="block text-sm mb-2 text-gray-700">
                  参考サイト（URL）
                </label>
                <textarea
                  {...register('referenceUrls')}
                  id="referenceUrls"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                  placeholder="参考にしたいサイトのURLを記入してください（複数可）"
                />
              </div>

              <div>
                <label htmlFor="otherRequests" className="block text-sm mb-2 text-gray-700">
                  その他ご要望・ご質問
                </label>
                <textarea
                  {...register('otherRequests')}
                  id="otherRequests"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                  placeholder="その他、ご要望やご質問がありましたらご記入ください"
                />
              </div>
            </div>

            {/* 送信ボタン */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors inline-flex items-center justify-center gap-2 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? '送信中...' : (
                  <>
                    <Send className="group-hover:translate-x-1 transition-transform" size={24} />
                    お申し込み内容を送信
                  </>
                )}
              </button>
              <p className="mt-4 text-sm text-gray-600 text-center">
                送信後、3営業日以内にご連絡させていただきます
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}