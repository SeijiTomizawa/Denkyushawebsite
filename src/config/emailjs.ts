// EmailJS設定ファイル

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_okm53ng',
  // お問い合わせフォーム用テンプレート
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_vffjunb',
  // お申し込みフォーム用テンプレート
  orderTemplateId: import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID || 'template_p95e9ze',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'e-GUfAZt_TrCL8nGB',
};

// 開発環境でのデバッグ用
if (import.meta.env.DEV) {
  console.log('EmailJS Config:', {
    serviceId: emailJsConfig.serviceId,
    contactTemplateId: emailJsConfig.contactTemplateId,
    orderTemplateId: emailJsConfig.orderTemplateId,
    publicKey: emailJsConfig.publicKey ? '設定済み' : '未設定',
  });
}