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
    price: '¥100,000',
    period: '〜',
    description: 'シンプルなコーポレートサイト',
    features: [
      '5ページまで',
      'レスポンシブデザイン',
      '静的サイト（HTML/CSS/JavaScript）',
      '基本的なSEO対策',
      '1ヶ月間の無料サポート',
    ],
    color: 'border-[#d4a574]',
    buttonColor: 'border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black',
  },
  {
    name: 'スタンダードプラン',
    price: '¥200,000',
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
    color: 'border-[#d4a574]',
    buttonColor: 'border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black',
    recommended: true,
  },
];

const backendPlans = [
  {
    name: 'スタンダードプラン',
    price: '¥300,000',
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
    color: 'border-[#d4a574]',
    buttonColor: 'border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black',
    recommended: true,
  },
  {
    name: 'アドバンスドプラン',
    price: 'ASK',
    period: '',
    description: '大規模サイト・ECサイト・Webアプリケーション',
    features: [
      'ページ数無制限',
      'レスポンシブデザイン',
      'ECサイト構築',
      '会員システム・ログイン機能',
      '決済機能（Stripe / PayPal連携）',
      'データベース設計・構築',
      '管理画面開発',
      'API開発・外部サービス連携',
      '詳細なSEO対策',
      '12ヶ月間の無料サポート',
    ],
    color: 'border-[#d4a574]',
    buttonColor: 'border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-black',
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
    <div className="min-h-screen pt-32 pb-20 bg-[#050505] relative overflow-hidden">
      {/* Grain Texture */}
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="px-6 py-20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className="text-xs border border-[#d4a574] text-[#d4a574] px-6 py-3 inline-block mb-8 tracking-widest uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                WEB制作サービス
              </div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl mb-8 text-[#d4a574] tracking-wider"
                style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 300,
                  textShadow: '0 0 30px rgba(212, 165, 116, 0.5), 0 0 60px rgba(212, 165, 116, 0.3)'
                }}
              >
                ビジネスを加速する
                <br />
                WEBサイト制作
              </h1>
              <p 
                className="text-lg md:text-xl text-[#f5f5f0] opacity-70 mb-10 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                お客様のビジネスに最適なWEBサイトを制作します。
                デザインから開発、運用まで、トータルでサポートいたします。
              </p>
              <button
                onClick={goToOrderForm}
                className="border border-[#d4a574] text-[#d4a574] px-12 py-4 hover:bg-[#d4a574] hover:text-black transition-all duration-500 inline-flex items-center gap-3 group tracking-widest uppercase text-sm"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                無料相談・お見積もり
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Lightbulb 
                  className="text-[#d4a574] w-64 h-64 opacity-80" 
                  fill="currentColor" 
                  strokeWidth={0.5}
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(212, 165, 116, 0.6))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#d4a574] tracking-wider"
              style={{ 
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 300,
                textShadow: '0 0 30px rgba(212, 165, 116, 0.5)'
              }}
            >
              制作の流れ
            </h2>
            <p 
              className="text-lg md:text-xl text-[#f5f5f0] opacity-70"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              4つのステップで、理想のWEBサイトを実現します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div 
                    className="text-7xl text-[#d4a574] opacity-20 mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {process.step}
                  </div>
                  <div className="w-16 h-16 border border-[#d4a574] flex items-center justify-center mx-auto mb-6">
                    <process.icon className="text-[#d4a574]" size={32} strokeWidth={1} />
                  </div>
                  <h3 
                    className="text-2xl md:text-3xl mb-4 text-[#d4a574]"
                    style={{ 
                      fontFamily: "'Noto Serif JP', serif",
                      fontWeight: 300,
                      textShadow: '0 0 15px rgba(212, 165, 116, 0.3)'
                    }}
                  >
                    {process.title}
                  </h3>
                  <p 
                    className="text-[#f5f5f0] opacity-60 text-base md:text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {process.description}
                  </p>
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-32 right-0 transform translate-x-1/2">
                    <ArrowRight className="text-[#d4a574] opacity-30" size={32} strokeWidth={1} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Frontend */}
      <section className="px-6 py-20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#d4a574] tracking-wider"
              style={{ 
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 300,
                textShadow: '0 0 30px rgba(212, 165, 116, 0.5)'
              }}
            >
              料金プラン
            </h2>
            <p 
              className="text-lg md:text-xl text-[#f5f5f0] opacity-70"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              お客様のニーズに合わせた柔軟なプランをご用意
            </p>
          </div>

          {/* Frontend Plans */}
          <div className="mb-24">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-12 border border-[#d4a574] flex items-center justify-center">
                <Monitor className="text-[#d4a574]" size={24} strokeWidth={1} />
              </div>
              <h3 
                className="text-3xl md:text-4xl text-[#d4a574]"
                style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 300,
                  textShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                }}
              >
                フロントエンド機能のみ
              </h3>
            </div>
            <p 
              className="text-center text-[#f5f5f0] opacity-70 mb-12 max-w-3xl mx-auto text-base md:text-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              デザインとユーザー体験に特化した静的サイト。コーポレートサイト、ポートフォリオ、ランディングページに最適です。
            </p>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {frontendPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-[#050505] border-2 ${plan.color} border-opacity-30 p-10 ${
                    plan.recommended ? 'border-opacity-60' : ''
                  } transition-all duration-700 hover:border-opacity-60`}
                >
                  {plan.recommended && (
                    <div 
                      className="bg-[#d4a574] text-black text-xs px-5 py-2 inline-block mb-6 tracking-widest uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                    >
                      おすすめ
                    </div>
                  )}
                  <h4 
                    className="text-2xl md:text-3xl mb-4 text-[#d4a574]"
                    style={{ 
                      fontFamily: "'Noto Serif JP', serif",
                      fontWeight: 300,
                      textShadow: '0 0 15px rgba(212, 165, 116, 0.3)'
                    }}
                  >
                    {plan.name}
                  </h4>
                  <div className="mb-6">
                    <span 
                      className="text-4xl text-[#d4a574]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {plan.price}
                    </span>
                    <span 
                      className="text-[#f5f5f0] opacity-60 ml-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p 
                    className="text-[#f5f5f0] opacity-70 mb-8 text-base md:text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {plan.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[#d4a574] flex-shrink-0 mt-1 opacity-70" size={20} strokeWidth={1.5} />
                        <span 
                          className="text-[#f5f5f0] opacity-70 text-base"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={goToOrderForm}
                    className={`w-full ${plan.buttonColor} px-8 py-4 transition-all duration-500 tracking-widest uppercase text-sm`}
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    お問い合わせ
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Plans */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-12 border border-[#d4a574] flex items-center justify-center">
                <Server className="text-[#d4a574]" size={24} strokeWidth={1} />
              </div>
              <h3 
                className="text-3xl md:text-4xl text-[#d4a574]"
                style={{ 
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 300,
                  textShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                }}
              >
                バックエンド処理が必要
              </h3>
            </div>
            <p 
              className="text-center text-[#f5f5f0] opacity-70 mb-12 max-w-3xl mx-auto text-base md:text-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              データベース連携、会員機能、決済システムなど動的な機能を実装。EC サイト、会員制サイト、Webアプリケーションに対応します。
            </p>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {backendPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-[#050505] border-2 ${plan.color} border-opacity-30 p-10 ${
                    plan.recommended ? 'border-opacity-60' : ''
                  } transition-all duration-700 hover:border-opacity-60`}
                >
                  {plan.recommended && (
                    <div 
                      className="bg-[#d4a574] text-black text-xs px-5 py-2 inline-block mb-6 tracking-widest uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                    >
                      おすすめ
                    </div>
                  )}
                  <h4 
                    className="text-2xl md:text-3xl mb-4 text-[#d4a574]"
                    style={{ 
                      fontFamily: "'Noto Serif JP', serif",
                      fontWeight: 300,
                      textShadow: '0 0 15px rgba(212, 165, 116, 0.3)'
                    }}
                  >
                    {plan.name}
                  </h4>
                  <div className="mb-6">
                    <span 
                      className="text-4xl text-[#d4a574]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {plan.price}
                    </span>
                    <span 
                      className="text-[#f5f5f0] opacity-60 ml-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p 
                    className="text-[#f5f5f0] opacity-70 mb-8 text-base md:text-lg"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {plan.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[#d4a574] flex-shrink-0 mt-1 opacity-70" size={20} strokeWidth={1.5} />
                        <span 
                          className="text-[#f5f5f0] opacity-70 text-base"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    disabled
                    className="w-full border border-[#d4a574] border-opacity-20 text-[#f5f5f0] opacity-30 px-8 py-4 cursor-not-allowed tracking-widest uppercase text-sm"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    準備中
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center text-[#f5f5f0] opacity-60">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>※料金は目安です。詳細はお問い合わせください。</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>※消費税別途</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#d4a574] tracking-wider"
              style={{ 
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 300,
                textShadow: '0 0 30px rgba(212, 165, 116, 0.5)'
              }}
            >
              よくある質問
            </h2>
            <p 
              className="text-lg md:text-xl text-[#f5f5f0] opacity-70"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              お客様からよくいただくご質問にお答えします
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#050505] border border-[#d4a574] border-opacity-20 p-8 hover:border-opacity-50 transition-all duration-700"
              >
                <h3 
                  className="text-xl md:text-2xl mb-4 text-[#d4a574] flex items-start gap-4"
                  style={{ 
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: 300,
                    textShadow: '0 0 15px rgba(212, 165, 116, 0.2)'
                  }}
                >
                  <span className="bg-[#d4a574] text-black w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p 
                  className="text-[#f5f5f0] opacity-70 pl-11 text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="border border-[#d4a574] border-opacity-30 p-16 text-center">
            <h2 
              className="text-3xl md:text-5xl mb-6 text-[#d4a574]"
              style={{ 
                fontFamily: "'Noto Serif JP', serif",
                fontWeight: 300,
                textShadow: '0 0 30px rgba(212, 165, 116, 0.4)'
              }}
            >
              まずはお気軽にご相談ください
            </h2>
            <p 
              className="text-lg md:text-xl mb-10 text-[#f5f5f0] opacity-70"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              お見積もりは無料です。お客様のご要望をお聞かせください。
            </p>
            <button
              onClick={goToOrderForm}
              className="border border-[#d4a574] text-[#d4a574] px-12 py-4 hover:bg-[#d4a574] hover:text-black transition-all duration-500 inline-flex items-center gap-3 tracking-widest uppercase text-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            >
              無料相談はこちら
              <ArrowRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}