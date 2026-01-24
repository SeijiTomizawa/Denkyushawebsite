import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Vision from '@/app/components/Vision';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import FlashlightCursor from '@/app/components/FlashlightCursor';
import Study from '@/app/components/Study';
import HtmlMainPage from '@/app/components/HtmlMainPage';
import HtmlBasicSyntaxPage from '@/app/components/HtmlBasicSyntaxPage';
import HtmlListsLinksPage from '@/app/components/HtmlListsLinksPage';
import HtmlMediaPage from '@/app/components/HtmlMediaPage';
import HtmlTablesPage from '@/app/components/HtmlTablesPage';
import HtmlFormsPage from '@/app/components/HtmlFormsPage';
import HtmlSemanticPage from '@/app/components/HtmlSemanticPage';
import CssMainPage from '@/app/components/CssMainPage';
import CssBasicSyntaxPage from '@/app/components/CssBasicSyntaxPage';
import CssExternalFilesPage from '@/app/components/CssExternalFilesPage';
import CssModernPage from '@/app/components/CssModernPage';
import CssTailwindPage from '@/app/components/CssTailwindPage';
import CssVanillaExtractPage from '@/app/components/CssVanillaExtractPage';
import JavaScriptMainPage from '@/app/components/JavaScriptMainPage';
import JsBasicSyntaxPage from '@/app/components/JsBasicSyntaxPage';
import JsFunctionsPage from '@/app/components/JsFunctionsPage';
import JsDomPage from '@/app/components/JsDomPage';
import JsAsyncPage from '@/app/components/JsAsyncPage';
import JsTypeScriptPage from '@/app/components/JsTypeScriptPage';
import JsModernPage from '@/app/components/JsModernPage';
import ReactMainPage from '@/app/components/ReactMainPage';
import ReactComponentPage from '@/app/components/ReactComponentPage';
import ReactHooksPage from '@/app/components/ReactHooksPage';
import ReactLifecyclePage from '@/app/components/ReactLifecyclePage';
import ReactJsxPage from '@/app/components/ReactJsxPage';
import PhpPage from '@/app/components/PhpPage';
import PhpBasicSyntaxPage from '@/app/components/PhpBasicSyntaxPage';
import PhpWebAppPage from '@/app/components/PhpWebAppPage';
import PhpDatabaseControlPage from '@/app/components/PhpDatabaseControlPage';
import PhpFrameworkPage from '@/app/components/PhpFrameworkPage';
import PhpSecurityPage from '@/app/components/PhpSecurityPage';
import MysqlPage from '@/app/components/MysqlPage';
import CreatePage from '@/app/components/CreatePage';
import OrderFormPage from '@/app/components/OrderFormPage';
import ServicePage from '@/app/components/ServicePage';

function HomePage() {
  return (
    <>
      <Hero />
      <Vision />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FlashlightCursor />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/order" element={<OrderFormPage />} />
            <Route path="/study" element={<Study />} />
            <Route path="/study/html" element={<HtmlMainPage />} />
            <Route path="/study/html/basic-syntax" element={<HtmlBasicSyntaxPage />} />
            <Route path="/study/html/lists-links" element={<HtmlListsLinksPage />} />
            <Route path="/study/html/media" element={<HtmlMediaPage />} />
            <Route path="/study/html/tables" element={<HtmlTablesPage />} />
            <Route path="/study/html/forms" element={<HtmlFormsPage />} />
            <Route path="/study/html/semantic" element={<HtmlSemanticPage />} />
            <Route path="/study/css" element={<CssMainPage />} />
            <Route path="/study/css/basic-syntax" element={<CssBasicSyntaxPage />} />
            <Route path="/study/css/external-files" element={<CssExternalFilesPage />} />
            <Route path="/study/css/modern-css" element={<CssModernPage />} />
            <Route path="/study/css/tailwind" element={<CssTailwindPage />} />
            <Route path="/study/css/vanilla-extract" element={<CssVanillaExtractPage />} />
            <Route path="/study/javascript" element={<JavaScriptMainPage />} />
            <Route path="/study/javascript/basic-syntax" element={<JsBasicSyntaxPage />} />
            <Route path="/study/javascript/functions" element={<JsFunctionsPage />} />
            <Route path="/study/javascript/dom" element={<JsDomPage />} />
            <Route path="/study/javascript/async" element={<JsAsyncPage />} />
            <Route path="/study/javascript/typescript" element={<JsTypeScriptPage />} />
            <Route path="/study/javascript/modern-js" element={<JsModernPage />} />
            <Route path="/study/react" element={<ReactMainPage />} />
            <Route path="/study/react/components" element={<ReactComponentPage />} />
            <Route path="/study/react/hooks" element={<ReactHooksPage />} />
            <Route path="/study/react/lifecycle" element={<ReactLifecyclePage />} />
            <Route path="/study/react/jsx" element={<ReactJsxPage />} />
            <Route path="/study/php" element={<PhpPage />} />
            <Route path="/study/php/basic-syntax" element={<PhpBasicSyntaxPage />} />
            <Route path="/study/php/web-application" element={<PhpWebAppPage />} />
            <Route path="/study/php/database-control" element={<PhpDatabaseControlPage />} />
            <Route path="/study/php/framework" element={<PhpFrameworkPage />} />
            <Route path="/study/php/security" element={<PhpSecurityPage />} />
            <Route path="/study/mysql" element={<MysqlPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}