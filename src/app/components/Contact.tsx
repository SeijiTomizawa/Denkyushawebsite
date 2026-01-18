import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">お問い合わせ</h2>
          <p className="text-xl text-gray-600">
            お気軽にご相談ください。まずは無料相談から。
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">お問い合わせフォーム</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                  会社名・団体名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors"
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition-colors resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? '送信中...' : '送信する'}
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}