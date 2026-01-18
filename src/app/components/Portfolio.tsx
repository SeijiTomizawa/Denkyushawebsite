const portfolioItems = [
  {
    title: '企業WEBサイト',
    category: 'コーポレートサイト',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzY4Njk1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'モダンなデザインと使いやすさを両立した企業サイト',
  },
  {
    title: 'ECプラットフォーム',
    category: 'ECサイト',
    image: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MXx8fHwxNzY4Njk1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '直感的なUIで高いコンバージョンを実現',
  },
  {
    title: 'ブランディングサイト',
    category: 'ブランディング',
    image: 'https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NjU5NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'ブランドの世界観を表現した特別なサイト',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">制作実績</h2>
          <p className="text-xl text-gray-600">
            これまでに手がけたプロジェクトの一部をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="text-sm text-yellow-600 mb-2">{item.category}</div>
                <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}