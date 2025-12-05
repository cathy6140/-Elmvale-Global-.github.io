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

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
