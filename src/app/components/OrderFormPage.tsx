import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  CheckCircle, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Target, 
  Palette, 
  FileText, 
  Zap, 
  DollarSign, 
  Calendar, 
  HelpCircle,
  Shield,
  Clock
} from 'lucide-react';
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
  '小売業（商店・ショップ等）',
  '飲食業（レストラン・カフェ等）',
  '美容・サロン（美容室・エステ等）',
  '医療・福祉（クリニック・介護施設等）',
  '士業（税理士・弁護士・行政書士等）',
  '協会・団体・NPO',
  '建設業・工務店',
  '製造業',
  'IT・Web関連',
  '教育・スクール',
  '不動産',
  'その他のサービス業',
];

const designImages = [
  '選択してください',
  'シンプル・��ニマル（すっきりとした印象）',
  'ナチュラル・温かみ（親しみやすい雰囲気）',
  'モダン・洗練（都会的でスタイリッシュ）',
  'クラシック・伝統的（信頼感・格式）',
  'ポップ・カラフル（明るく元気な印象）',
  'エレガント・高級感（上品で洗練された雰囲気）',
  'まだ決まっていない（相談したい）',
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
  '10万円〜30万円',
  '30万円〜50万円',
  '50万円〜80万円',
  '80万円〜100万円',
  '100万円以上',
  '予算未定・相談したい',
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
      <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <CheckCircle className="text-white" size={32} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">お申し込みありがとうございます</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              ご入力いただいた内容を確認し、3営業日以内にご連絡させていただきます。
              <br />
              今しばらくお待ちください。
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-yellow-700 transition-colors text-sm sm:text-base"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-20 px-4 md:px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/create" 
          className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-6 md:mb-8 transition-colors text-sm md:text-base"
        >
          <ArrowLeft size={18} />
          CREATEページに戻る
        </Link>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 sm:p-6 md:p-12">
          <div className="mb-6 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 text-gray-900">WEB制作 お申し込みフォーム</h1>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              お客様のご要望を詳しくお聞かせください。<br className="hidden sm:block" />
              より正確なお見積もりとご提案をさせていただきます。
            </p>
            
            {/* 安心メッセージ */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg md:rounded-xl p-3 md:p-4 flex items-start gap-2 md:gap-3">
              <Shield className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="mb-1"><span className="font-semibold">初めてのお客様も安心してください。</span></p>
                <p>まずはご要望をお聞かせいただき、無料でお見積もりをご提案いたします。お気軽にご相談ください。</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-10">
            {/* 基本情報 */}
            <section className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-white" size={16} />
                </div>
                <h2 className="text-xl md:text-2xl text-gray-900">基本情報</h2>
              </div>
              
              <div>
                <label htmlFor="companyName" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Building2 size={14} className="flex-shrink-0" />
                  会社名・屋号 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('companyName', { required: '会社名・屋号を入力してください' })}
                  type="text"
                  id="companyName"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="例：株式会社〇〇、〇〇商店、〇〇協会"
                />
                {errors.companyName && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="personName" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <User size={14} className="flex-shrink-0" />
                  ご担当者名 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('personName', { required: 'ご担当者名を入力してください' })}
                  type="text"
                  id="personName"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="例：山田 太郎"
                />
                {errors.personName && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.personName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                    <Mail size={14} className="flex-shrink-0" />
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email', { 
                      required: 'メールアドレスを入力してください',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '有効なメールアドレスを入力してください'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                    <Phone size={14} className="flex-shrink-0" />
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', { required: '電話番号を入力してください' })}
                    type="tel"
                    id="phone"
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="03-1234-5678"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </section>

            {/* サイト情報 */}
            <section className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-white" size={16} />
                </div>
                <h2 className="text-xl md:text-2xl text-gray-900">サイト情報</h2>
              </div>

              <div>
                <label htmlFor="industry" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Briefcase size={14} className="flex-shrink-0" />
                  業種 <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('industry', { 
                    required: '業種を選択してください',
                    validate: (value) => value !== '選択してください' || '業種を選択してください'
                  })}
                  id="industry"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.industry.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="purpose" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Target size={14} className="flex-shrink-0" />
                  サイトの目的 <span className="text-red-500">*</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  どのような目的でWebサイトを作りたいですか？
                </div>
                <textarea
                  {...register('purpose', { required: 'サイトの目的を入力してください' })}
                  id="purpose"
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                  placeholder="例：新規のお客様を増やしたい、サービス内容を詳しく伝えたい、会社の信頼性を高めたい、など"
                />
                {errors.purpose && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.purpose.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="designImage" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Palette size={14} className="flex-shrink-0" />
                  デザインイメージ <span className="text-red-500">*</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  どんな雰囲気のデザインがお好みですか？
                </div>
                <select
                  {...register('designImage', { 
                    required: 'デザインイメージを選択してください',
                    validate: (value) => value !== '選択してください' || 'デザインイメージを選択してください'
                  })}
                  id="designImage"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  {designImages.map((image) => (
                    <option key={image} value={image}>
                      {image}
                    </option>
                  ))}
                </select>
                {errors.designImage && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.designImage.message}</p>
                )}
              </div>
            </section>

            {/* ページ構成 */}
            <section className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white" size={16} />
                </div>
                <h2 className="text-xl md:text-2xl text-gray-900">ページ構成</h2>
              </div>

              <div>
                <label className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 md:mb-3 text-gray-700 font-medium">
                  <FileText size={14} className="flex-shrink-0" />
                  必要なページ <span className="text-red-500">*</span>
                  <span className="text-xs text-gray-500 font-normal ml-1 md:ml-2">（複数選択可）</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  サイトに必要なページを選択してください
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {pageOptions.map((page) => (
                    <label 
                      key={page.value} 
                      className="flex items-center gap-2 cursor-pointer bg-white border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 hover:border-yellow-500 hover:bg-yellow-50 transition-all"
                    >
                      <input
                        {...register('pages', { required: '少なくとも1つのページを選択してください' })}
                        type="checkbox"
                        value={page.label}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700">{page.label}</span>
                    </label>
                  ))}
                </div>
                {errors.pages && (
                  <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.pages.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="pageCount" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  概算ページ数 <span className="text-gray-500 text-xs font-normal">（任意）</span>
                </label>
                <input
                  {...register('pageCount')}
                  type="text"
                  id="pageCount"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="例：約10ページ、5〜8ページ程度"
                />
              </div>
            </section>

            {/* 機能要件 */}
            <section className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={16} />
                </div>
                <h2 className="text-xl md:text-2xl text-gray-900">機能要件</h2>
              </div>

              <div>
                <label className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 md:mb-3 text-gray-700 font-medium">
                  <Zap size={14} className="flex-shrink-0" />
                  必要な機能 <span className="text-gray-500 text-xs font-normal">（任意・複数選択可）</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  サイトに追加したい機能があれば選択してください
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {featureOptions.map((feature) => (
                    <label 
                      key={feature.value} 
                      className="flex items-center gap-2 cursor-pointer bg-white border border-gray-200 rounded-lg px-3 py-2.5 md:px-4 md:py-3 hover:border-yellow-500 hover:bg-yellow-50 transition-all"
                    >
                      <input
                        {...register('features')}
                        type="checkbox"
                        value={feature.label}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-700">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* 予算・スケジュール */}
            <section className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="text-white" size={16} />
                </div>
                <h2 className="text-xl md:text-2xl text-gray-900">予算・スケジュール</h2>
              </div>

              <div>
                <label htmlFor="budget" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <DollarSign size={14} className="flex-shrink-0" />
                  ご予算 <span className="text-red-500">*</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  おおよそのご予算をお選びください（後から変更可能です）
                </div>
                <select
                  {...register('budget', { 
                    required: 'ご予算を選択してください',
                    validate: (value) => value !== '選択してください' || 'ご予算を選択してください'
                  })}
                  id="budget"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="deadline" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Calendar size={14} className="flex-shrink-0" />
                  希望納期 <span className="text-gray-500 text-xs font-normal">（任意）</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  いつ頃までにサイトを公開したいですか？
                </div>
                <input
                  {...register('deadline')}
                  type="text"
                  id="deadline"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="例：3ヶ月以内、2026年6月末まで、など"
                />
                <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={12} className="flex-shrink-0" />
                  通常、5〜10ページのサイトで1〜2ヶ月程度です
                </p>
              </div>
            </section>

            {/* その他 */}
            <section className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="text-white" size={16} />
                </div>
                <h2 className="text-xl md:text-2xl text-gray-900">その他</h2>
              </div>

              <div>
                <label htmlFor="referenceUrls" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  参考サイト（URL） <span className="text-gray-500 text-xs font-normal">（任意）</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  「こんなサイトにしたい」という参考サイトがあればURLを教えてください
                </div>
                <textarea
                  {...register('referenceUrls')}
                  id="referenceUrls"
                  rows={3}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                  placeholder="https://example.com&#10;https://sample.jp&#10;など、複数のURLを改行して入力できます"
                />
              </div>

              <div>
                <label htmlFor="otherRequests" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  その他ご要望・ご質問 <span className="text-gray-500 text-xs font-normal">（任意）</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  その他、ご不明な点やご要望があれば何でもお書きください
                </div>
                <textarea
                  {...register('otherRequests')}
                  id="otherRequests"
                  rows={5}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                  placeholder="例：&#10;・ロゴデザインも一緒にお願いしたい&#10;・写真撮影も依頼できますか？&#10;・見積もりだけ先に知りたい&#10;・まだ迷っているので相談だけでも大丈夫ですか？&#10;など、お気軽にお書きください"
                />
              </div>
            </section>

            {/* 送信ボタン */}
            <div className="pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-yellow-600 text-white px-6 md:px-8 py-3.5 md:py-5 rounded-lg md:rounded-xl hover:bg-yellow-700 transition-all inline-flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                    お申し込み内容を送信する
                  </>
                )}
              </button>
              <p className="mt-3 md:mt-4 text-xs sm:text-sm text-gray-600 text-center flex items-center justify-center gap-1.5 md:gap-2">
                <Shield size={14} className="text-yellow-600 flex-shrink-0" />
                送信後、3営業日以内にご連絡させていただきます
              </p>
              <p className="mt-1.5 md:mt-2 text-xs text-gray-500 text-center">
                まずは無料でお見積もりをご提案いたします。お気軽にお申し込みください。
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}