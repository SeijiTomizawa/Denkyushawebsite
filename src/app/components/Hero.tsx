import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              あなたのビジネスを
              <br />
              <span className="text-yellow-600">明るく照らす</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              電究社は、最先端の技術と洗練されたデザインで、あなたのビジョンを実現します。WEB制作からブランディングまで、トータルサポート。
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 group"
            >
              無料相談はこちら
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NjU5NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Web Design Workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}