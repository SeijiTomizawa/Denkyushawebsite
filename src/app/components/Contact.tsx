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
    <section id="contact" className="py-48 px-6 bg-[#050505] relative min-h-screen flex items-center justify-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#e8c292] opacity-[0.01] blur-[120px]" />
      
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-24">
          <div className="divider-line mx-auto mb-12" />
          <h2 
            className="text-5xl md:text-6xl tracking-wider mb-6 text-[#e8c292]"
            style={{ 
              fontFamily: "'Noto Serif JP', serif", 
              fontWeight: 300,
              textShadow: '0 0 30px rgba(232, 194, 146, 0.6), 0 0 60px rgba(232, 194, 146, 0.3)'
            }}
          >
            お問い合わせ
          </h2>
          <p 
            className="text-sm text-[#e8c292] opacity-80 tracking-wider"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300,
              textShadow: '0 0 10px rgba(232, 194, 146, 0.4)'
            }}
          >
            Contact
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 border border-[#e8c292] border-opacity-30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-[#e8c292]" size={32} strokeWidth={1} />
            </div>
            <h3 
              className="text-2xl mb-8 text-[#f5f5f0] tracking-wider"
              style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
            >
              送信完了
            </h3>
            <p className="text-base text-[#b8b8b8] mb-12 leading-loose opacity-80"
               style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}>
              お問い合わせありがとうございます。<br />
              3営業日以内にご連絡させていただきます。
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="ghost-btn text-xs"
            >
              新しいお問い合わせ
            </button>
          </div>
        ) : (
          <div className="py-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-xs tracking-[0.2em] text-[#e8c292] opacity-70 mb-4 uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 text-base bg-transparent border-0 border-b border-[#e8c292] border-opacity-20 text-[#f5f5f0] focus:outline-none focus:border-opacity-50 transition-all placeholder-[#6b6b6b]"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs tracking-[0.2em] text-[#e8c292] opacity-70 mb-4 uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 text-base bg-transparent border-0 border-b border-[#e8c292] border-opacity-20 text-[#f5f5f0] focus:outline-none focus:border-opacity-50 transition-all placeholder-[#6b6b6b]"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="company" 
                  className="block text-xs tracking-[0.2em] text-[#e8c292] opacity-70 mb-4 uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  Company <span className="opacity-50">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-4 text-base bg-transparent border-0 border-b border-[#e8c292] border-opacity-20 text-[#f5f5f0] focus:outline-none focus:border-opacity-50 transition-all placeholder-[#6b6b6b]"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                  placeholder="株式会社〇〇"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs tracking-[0.2em] text-[#e8c292] opacity-70 mb-4 uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-4 text-base bg-transparent border-0 border-b border-[#e8c292] border-opacity-20 text-[#f5f5f0] focus:outline-none focus:border-opacity-50 transition-all resize-none placeholder-[#6b6b6b]"
                  style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}
                  placeholder="ご相談内容をお聞かせください..."
                />
              </div>

              <div className="pt-8 text-center">
                <button
                  type="submit"
                  disabled={isSending}
                  className="ghost-btn text-xs disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isSending ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}