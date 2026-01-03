import React, { useState, createContext, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import { Language, LanguageContextType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookieBanner from "./components/CookieBanner";
import Cookies from "./pages/Cookies";


export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// 加一个 TitleManager：
const TitleManager: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = React.useContext(LanguageContext);

  useEffect(() => {
    // 网站基础标题（可以按语言稍微不一样）
    const baseTitle =
      language === 'fr'
        ? 'Elmvale Global – Emballages cosmétiques responsables'
        : 'Elmvale Global – Sustainable cosmetic packaging';

    let pageTitle = '';

    switch (pathname) {
      case '/':
        pageTitle = language === 'fr' ? 'Accueil' : 'Home';
        break;
      case '/products':
        pageTitle = language === 'fr' ? 'Produits' : 'Products';
        break;
      case '/about':
        pageTitle = language === 'fr' ? 'À propos de nous' : 'About us';
        break;
      case '/compliance':
        pageTitle =
          language === 'fr'
            ? 'Conformité & durabilité'
            : 'Compliance & Sustainability';
        break;
      case '/contact':
        pageTitle = language === 'fr' ? 'Contactez-nous' : 'Contact us';
        break;
      case '/privacy':
        pageTitle =
          language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy';
        break;
      case '/terms':
        pageTitle =
          language === 'fr' ? 'Conditions d’utilisation' : 'Terms of Service';
        break;
      case '/cookies':
        pageTitle = language === 'fr' ? 'Cookies' : 'Cookies';
        break;
      default:
        pageTitle = '';
    }

    // 最终标题：有具体页面就“页面名 | base”，否则就 base
    document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  }, [pathname, language]);

  return null;
};

const LANG_KEY = 'elmvale_lang';

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1) 初始化语言：URL ?lang > localStorage > 默认值
  const urlLang = searchParams.get('lang') as Language | null;
  const storedLang = (localStorage.getItem(LANG_KEY) as Language | null);

  const initialLang: Language =
    urlLang === 'en' || urlLang === 'fr'
      ? urlLang
      : storedLang === 'en' || storedLang === 'fr'
      ? storedLang
      : 'fr'; // 你也可以改成 'en'

  const [language, setLanguageState] = useState<Language>(initialLang);

  // 2) setLanguage：同步 localStorage + URL
  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem(LANG_KEY, l);

    const next = new URLSearchParams(searchParams);
    next.set('lang', l);
    setSearchParams(next, { replace: true });
  };

  // 3) URL 改变时（用户分享链接或手动改参数），同步应用状态
  useEffect(() => {
    if (urlLang === 'en' || urlLang === 'fr') {
      setLanguageState(urlLang);
      localStorage.setItem(LANG_KEY, urlLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlLang]);

  // 4) 更新 <html lang="..">
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const ctx = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={ctx}>
      <div className="flex flex-col min-h-screen bg-stone-50 text-stone-800 font-sans">
        <ScrollToTop />
        <TitleManager />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        {/* 这里插入 CookieBanner，让它出现在所有页面 */}
        <CookieBanner />
        
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
