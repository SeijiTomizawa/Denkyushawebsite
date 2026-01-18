import { Lightbulb, Palette, Code, Rocket, CheckCircle, ArrowRight, Monitor, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const processes = [
  {
    step: '01',
    title: 'ヒアリング',
    description: 'お客様のビジネスや目標、ご要望を詳しくお伺いします。',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'デザイン',
    description: 'ブランドイメージに合わせた魅力的なデザインを作成します。',
    icon: Palette,
  },
  {
    step: '03',
    title: '開発',
    description: '最新技術を用いて、高品質なサイトを構築します。',
    icon: Code,
  },
  {
    step: '04',
    title: '公開・運用',
    description: 'サイトを公開し、継続的なサポートを提供します。',
    icon: Rocket,
  },
];

const frontendPlans = [
  {
    name: 'ライトプラン',
    price: '¥200,000',
    period: '〜',
    description: 'シンプルなコーポレートサイト',
    features: [
      '5ページまで',
      'レスポンシブデザイン',
      '静的サイト（HTML/CSS/JavaScript）',
      '基本的なSEO対策',
      '1ヶ月間の無料サポート',
    ],
    color: 'border-gray-300',
    buttonColor: 'bg-gray-900 hover:bg-gray-800',
  },
  {
    name: 'スタンダードプラン',
    price: '¥400,000',
    period: '〜',
    description: '本格的なビジネスサイト',
    features: [
      '10ページまで',
      'レスポンシブデザイン',
      'React / Next.js対応',
      'アニメーション・インタラクション',
      '詳細なSEO対策',
      '3ヶ月間の無料サポート',
    ],
    color: 'border-yellow-500',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    recommended: true,
  },
];

const backendPlans = [
  {
    name: 'スタンダードプラン',
    price: '¥700,000',
    period: '〜',
    description: 'CMS・ブログ機能付きサイト',
    features: [
      '10ページまで',
      'レスポンシブデザイン',
      'CMS導入（WordPress / Headless CMS）',
      'ブログ・ニュース機能',
      'お問い合わせフォーム（DB連携）',
      '詳細なSEO対策',
      '6ヶ月間の無料サポート',
    ],
    color: 'border-gray-300',
    buttonColor: 'bg-gray-900 hover:bg-gray-800',
  },
  {
    name: 'プレミアムプラン',
    price: '¥1,200,000',
    period: '〜',
    description: '大規模サイト・ECサイト',
    features: [
      'ページ数無制限',
      'レスポンシブデザイン',
      'ECサイト構築',
      '会員システム・ログイン機能',
      '決済機能（Stripe / PayPal連携）',
      'データベース設計・構築',
      '管理画面開発',
      '詳細なSEO対策',
      '12ヶ月間の無料サポート',
    ],
    color: 'border-blue-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    recommended: true,
  },
];

const faqs = [
  {
    question: 'フロントエンドのみとバックエンド処理の違いは？',
    answer: 'フロントエンドのみは、デザインと表示に特化した静的サイトです。バックエンド処理が必要なプランでは、データベース連携、会員機能、決済システムなど動的な機能を実装できます。',
  },
  {
    question: '制作期間はどのくらいかかりますか？',
    answer: 'フロントエンドのみのライトプランで約2週間〜1ヶ月、バックエンド処理を含むプレミアムプランで3〜4ヶ月程度が目安です。プロジェクトの規模により変動します。',
  },
  {
    question: '制作費用の支払い方法は？',
    answer: '着手金として50%を契約時にお支払いいただき、残りの50%を納品時にお支払いいただく形となります。銀行振込でのお支払いをお願いしております。',
  },
  {
    question: '修正は何回まで可能ですか？',
    answer: 'デザイン段階で2回、コーディング段階で2回まで無料で修正対応させていただきます。それ以降の修正は別途お見積もりとなります。',
  },
  {
    question: '公開後のサポートはありますか？',
    answer: 'はい、プランに応じて1ヶ月〜12ヶ月の無料サポート期間を設けております。その後も月額制の保守サポートプランをご用意しております。',
  },
  {
    question: '既存サイトのリニューアルも可能ですか？',
    answer: 'はい、可能です。既存サイトの分析を行い、改善点を洗い出した上で、より効果的なサイトへとリニューアルいたします。',
  },
];

export default function CreatePage() {
  const navigate = useNavigate();

  const goToOrderForm = () => {
    navigate('/order');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs bg-gray-900 text-white px-4 py-2 rounded-full inline-block mb-6">
                WEB制作サービス
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
                ビジネスを加速する
                <br />
                <span className="text-yellow-600">WEBサイト制作</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                お客様のビジネスに最適なWEBサイトを制作します。
                デザインから開発、運用まで、トータルでサポートいたします。
              </p>
              <button
                onClick={goToOrderForm}
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors inline-flex items-center gap-2 group"
              >
                無料相談・お見積もり
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                <Lightbulb className="text-white w-40 h-40" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">制作の流れ</h2>
            <p className="text-xl text-gray-600">
              4つのステップで、理想のWEBサイトを実現します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold text-yellow-100 mb-4">{process.step}</div>
                  <div className="w-16 h-16 bg-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <process.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-32 right-0 transform translate-x-1/2">
                    <ArrowRight className="text-yellow-300" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Frontend */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">料金プラン</h2>
            <p className="text-xl text-gray-600">
              お客様のニーズに合わせた柔軟なプランをご用意
            </p>
          </div>

          {/* Frontend Plans */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                <Monitor className="text-white" size={24} />
              </div>
              <h3 className="text-3xl text-gray-900">フロントエンド機能のみ</h3>
            </div>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              デザインとユーザー体験に特化した静的サイト。コーポレートサイト、ポートフォリオ、ランディングページに最適です。
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {frontendPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 border-2 ${plan.color} ${
                    plan.recommended ? 'shadow-2xl transform scale-105' : 'shadow-lg'
                  } transition-all hover:shadow-2xl`}
                >
                  {plan.recommended && (
                    <div className="bg-yellow-600 text-white text-sm px-4 py-2 rounded-full inline-block mb-4">
                      おすすめ
                    </div>
                  )}
                  <h4 className="text-2xl mb-2 text-gray-900">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={goToOrderForm}
                    className={`w-full ${plan.buttonColor} text-white px-6 py-3 rounded-lg transition-colors`}
                  >
                    お問い合わせ
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Plans */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Server className="text-white" size={24} />
              </div>
              <h3 className="text-3xl text-gray-900">バックエンド処理が必要</h3>
            </div>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              データベース連携、会員機能、決済システムなど動的な機能を実装。EC サイト、会員制サイト、Webアプリケーションに対応します。
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {backendPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 border-2 ${plan.color} ${
                    plan.recommended ? 'shadow-2xl transform scale-105' : 'shadow-lg'
                  } transition-all hover:shadow-2xl`}
                >
                  {plan.recommended && (
                    <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full inline-block mb-4">
                      おすすめ
                    </div>
                  )}
                  <h4 className="text-2xl mb-2 text-gray-900">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed"
                  >
                    準備中
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>※料金は目安です。詳細はお問い合わせください。</p>
            <p>※消費税別途</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">よくある質問</h2>
            <p className="text-xl text-gray-600">
              お客様からよくいただくご質問にお答えします
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition-colors"
              >
                <h3 className="text-xl mb-3 text-gray-900 flex items-start gap-3">
                  <span className="bg-yellow-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-yellow-600 to-yellow-700">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 opacity-90">
            お見積もりは無料です。お客様のご要望をお聞かせください。
          </p>
          <button
            onClick={goToOrderForm}
            className="bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-lg font-semibold"
          >
            無料相談はこちら
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}