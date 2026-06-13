import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
} from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Language, LanguageContextType } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import SkincareMaskPackaging from "./pages/SkincareMaskPackaging";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import CookieBanner from "./components/CookieBanner";

// ================= CONTEXT =================

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

const LANG_KEY = "elmvale_lang";

// ================= HELPERS =================

// ✅ 统一语言清洗（核心修复）
const normalizeLang = (lang: any): Language => {
  if (!lang) return "fr";

  const clean = String(lang).trim();

  if (clean === "en" || clean === "fr") {
    return clean;
  }

  return "fr";
};

// ================= SCROLL =================

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ================= TITLE =================

const TitleManager: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = React.useContext(LanguageContext);

  useEffect(() => {
    const base = "Elmvale Global";

    let title = "";

    switch (pathname) {
      case "/":
        title = language === "fr" ? "Accueil" : "Home";
        break;
      case "/solutions":
        title = "Solutions";
        break;
      case "/skincare-mask-packaging":
        title = language === "fr" ? "Packaging masques" : "Mask Packaging";
        break;
      case "/about":
        title = language === "fr" ? "À propos" : "About";
        break;
      case "/compliance":
        title = language === "fr" ? "Conformité" : "Compliance";
        break;
      case "/contact":
        title = language === "fr" ? "Contact" : "Contact";
        break;
      default:
        title = "";
    }

    document.title = title ? `${title} | ${base}` : base;
  }, [pathname, language]);

  return null;
};

// ================= APP =================

const App: React.FC = () => {
  const storedLang = localStorage.getItem(LANG_KEY);

  // ✅ 初始化语言（100%安全）
  const [language, setLanguageState] = useState<Language>(
    normalizeLang(storedLang)
  );

  // ================= SET LANGUAGE =================

  const setLanguage = (l: Language) => {
    const clean = normalizeLang(l);

    setLanguageState(clean);
    localStorage.setItem(LANG_KEY, clean);
  };

  // ================= SYNC HTML LANG =================

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // ================= CONTEXT =================

  const ctx = useMemo(
    () => ({ language, setLanguage }),
    [language]
  );

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
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/skincare-mask-packaging" element={<SkincareMaskPackaging />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>

        <CookieBanner />
        <Footer />

      </div>
    </LanguageContext.Provider>
  );
};

export default App;
