import { Link } from 'react-router-dom';
import { ArrowLeft, FileCode, Code, List, Image, Table, FileText, Layout } from 'lucide-react';

export default function HtmlMainPage() {
  const sections = [
    {
      id: 'basic-syntax',
      icon: Code,
      title: '基本構文',
      description: 'HTMLの基礎、見出し、段落、テキスト装飾など基本的なタグを学びます',
      color: 'bg-orange-100 text-orange-600',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      id: 'lists-links',
      icon: List,
      title: 'リストとリンク',
      description: '順序なしリスト、順序付きリスト、定義リスト、各種リンクの使い方を学びます',
      color: 'bg-amber-100 text-amber-600',
      hoverColor: 'hover:bg-amber-600',
    },
    {
      id: 'media',
      icon: Image,
      title: '画像とメディア',
      description: '画像、動画、音声、iframeなどのメディア要素を学びます',
      color: 'bg-yellow-100 text-yellow-600',
      hoverColor: 'hover:bg-yellow-600',
    },
    {
      id: 'tables',
      icon: Table,
      title: 'テーブル',
      description: 'テーブルの構造、セル結合、アクセシブルなテーブルの作り方を学びます',
      color: 'bg-lime-100 text-lime-600',
      hoverColor: 'hover:bg-lime-600',
    },
    {
      id: 'forms',
      icon: FileText,
      title: 'フォーム',
      description: '入力フィールド、ボタン、バリデーションなどフォーム要素を学びます',
      color: 'bg-emerald-100 text-emerald-600',
      hoverColor: 'hover:bg-emerald-600',
    },
    {
      id: 'semantic',
      icon: Layout,
      title: 'セマンティックHTML',
      description: '意味論的なタグを使って、構造化されたHTMLを作成する方法を学びます',
      color: 'bg-teal-100 text-teal-600',
      hoverColor: 'hover:bg-teal-600',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/study" 
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          学習コンテンツに戻る
        </Link>

        <div className="mb-12">
          <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
            <FileCode className="text-white" size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 text-gray-900">HTML</h1>
          <p className="text-xl text-gray-600">
            HTML（HyperText Markup Language）は、Webページの構造を定義するマークアップ言語です。
            すべてのWebサイトの基礎となる技術を、体系的に学びましょう。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/study/html/${section.id}`}
              className="group"
            >
              <div className={`p-6 rounded-2xl border border-gray-200 ${section.hoverColor} hover:shadow-2xl transition-all duration-300 h-full bg-white`}>
                <div className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors`}>
                  <section.icon className={`${section.color.split(' ')[1]} group-hover:text-white transition-colors`} size={28} />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-white transition-colors">{section.title}</h3>
                <p className="text-gray-600 group-hover:text-white transition-colors text-sm">{section.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* HTMLとは */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <FileCode className="text-orange-600" size={24} />
              </div>
              <h2 className="text-3xl text-gray-900">HTMLとは</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              HTML（HyperText Markup Language）は、Webページの構造を記述するためのマークアップ言語です。
              文章に意味を持たせるために「タグ」と呼ばれる記号を使って、見出し、段落、リスト、リンクなどの要素を定義します。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h4 className="text-xl mb-3 text-gray-900">HTMLでできること</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>文書構造の定義（見出し、段落など）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>ハイパーリンクの作成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>画像や動画の埋め込み</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>フォームの作成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>テーブルの作成</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="text-xl mb-3 text-gray-900">HTMLの歴史</h4>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>HTML1.0（1993年）:</strong> 初版
                  </div>
                  <div>
                    <strong>HTML4.01（1999年）:</strong> 広く普及
                  </div>
                  <div>
                    <strong>XHTML（2000年）:</strong> XML準拠
                  </div>
                  <div>
                    <strong>HTML5（2014年）:</strong> 現在の標準、セマンティック要素追加
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学習の流れ */}
        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-2xl mb-6 text-gray-900">学習の流れ</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">基本構文</h4>
                <p className="text-gray-700">HTMLの基礎、見出し、段落、テキスト装飾など基本的なタグを学びます</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">リストとリンク</h4>
                <p className="text-gray-700">リストの種類とリンクの作成方法を理解します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">画像とメディア</h4>
                <p className="text-gray-700">画像、動画、音声などのメディア要素を扱います</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">テーブル</h4>
                <p className="text-gray-700">データを表形式で表現する方法を学びます</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">5</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">フォーム</h4>
                <p className="text-gray-700">ユーザー入力を受け取るフォーム要素を習得します</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">6</span>
              <div>
                <h4 className="text-lg mb-1 text-gray-900">セマンティックHTML</h4>
                <p className="text-gray-700">意味論的なタグを使って、構造化されたHTMLを作成します</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}