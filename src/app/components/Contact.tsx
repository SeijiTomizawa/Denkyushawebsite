import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, Building2, MessageSquare, CheckCircle, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from '@/config/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJSの初期化
  useEffect(() => {
    if (emailJsConfig.publicKey) {
      emailjs.init(emailJsConfig.publicKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS Public Key is not set');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    console.log('📧 フォーム送信開始');
    console.log('送信データ:', formData);
    
    try {
      // 環境変数の確認
      console.log('EmailJS設定:', {
        serviceId: emailJsConfig.serviceId,
        templateId: emailJsConfig.contactTemplateId,
        publicKey: emailJsConfig.publicKey ? '設定済み' : '未設定'
      });

      if (!emailJsConfig.serviceId || !emailJsConfig.contactTemplateId) {
        throw new Error('EmailJS configuration is missing');
      }

      // 送信するテンプレートパラメータ
      const templateParams = {
        form_type: 'お問い合わせ',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || '未入力',
        message: formData.message,
      };

      console.log('📤 EmailJS送信中...', templateParams);

      // EmailJSでメールを送信
      const result = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.contactTemplateId,
        templateParams
      );

      console.log('✅ EmailJS送信結果:', result);

      if (result.status === 200) {
        console.log('🎉 メール送信成功！');
        alert('お問い合わせありがとうございます。後ほどご連絡させていただきます。');
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(true);
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
      console.log('📧 フォーム送信処理完了');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl mb-3 md:mb-4 text-gray-900">お問い合わせ</h2>
          <p className="text-base md:text-xl text-gray-600">
            お気軽にご相談ください。まずは無料相談から。
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <CheckCircle className="text-white" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">送信完了</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              お問い合わせありがとうございます。<br />
              3営業日以内にご連絡させていただきます。
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-yellow-700 transition-colors text-sm sm:text-base"
            >
              新しいお問い合わせを送信
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 sm:p-6 md:p-12">
            {/* 安心メッセージ */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg md:rounded-xl p-3 md:p-4 flex items-start gap-2 md:gap-3 mb-6 md:mb-8">
              <Shield className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
              <div className="text-xs sm:text-sm text-gray-700">
                <p className="mb-1"><span className="font-semibold">お気軽にお問い合わせください。</span></p>
                <p>ご質問やご相談など、どんなことでも承ります。営業時間内に順次対応いたします。</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <User size={14} className="flex-shrink-0" />
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="例：山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Mail size={14} className="flex-shrink-0" />
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <Building2 size={14} className="flex-shrink-0" />
                  会社名・団体名 <span className="text-xs text-gray-500 font-normal">（任意）</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="例：株式会社〇〇、〇〇商店、〇〇協会"
                />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-1.5 md:gap-2 text-xs sm:text-sm mb-2 text-gray-700 font-medium">
                  <MessageSquare size={14} className="flex-shrink-0" />
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <div className="mb-2 text-xs text-gray-500">
                  ご質問やご相談内容を詳しくお書きください
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                  placeholder="例：&#10;・WordPressのヘッドレス化について詳しく知りたい&#10;・見積もりを依頼したい&#10;・既存サイトのリニューアルを検討している&#10;など、お気軽にお書きください"
                />
              </div>

              <div className="pt-2 md:pt-4">
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
                      お問い合わせを送信する
                    </>
                  )}
                </button>
                <p className="mt-3 md:mt-4 text-xs sm:text-sm text-gray-600 text-center flex items-center justify-center gap-1.5 md:gap-2">
                  <Shield size={14} className="text-yellow-600 flex-shrink-0" />
                  送信後、3営業日以内にご連絡させていただきます
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}