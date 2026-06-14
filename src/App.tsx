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
  useSearchParams,
} from "react-router-dom";

import { Language, LanguageContextType } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products"; // ✅ NEW
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

// ================= SAFE LANGUAGE =================

const normalizeLang = (lang: any): "en" | "fr" => {
  if (!lang) return "fr";

  const clean = String(lang)
    .replace("#/", "")
    .trim();

  return clean.startsWith("en") ? "en" : "fr";
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

    let page = "";

    switch (pathname) {
      case "/":
        page = language === "fr" ? "Accueil" : "Home";
        break;

      case "/solutions":
        page = "Solutions";
        break;

      case "/products": // ✅ NEW
        page = language === "fr" ? "Produits" : "Products";
        break;

      case "/skincare-mask-packaging":
        page = language === "fr" ? "Packaging masques" : "Mask Packaging";
        break;

      case "/about":
        page = language === "fr" ? "À propos" : "About";
        break;

      case "/compliance":
        page = language === "fr" ? "Conformité" : "Compliance";
        break;

      case "/contact":
        page = language === "fr" ? "Contact" : "Contact";
        break;

      default:
        page = "";
    }

    document.title = page ? `${page} | ${base}` : base;
  }, [pathname, language]);

  return null;
};

// ================= APP =================

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlLang = searchParams.get("lang") as Language | null;
  const storedLang = localStorage.getItem(LANG_KEY) as Language | null;

  const initialLang: Language = normalizeLang(
    urlLang || storedLang || "fr"
  );

  const [language, setLanguageState] = useState<Language>(initialLang);

  // ================= SET LANGUAGE =================

  const setLanguage = (l: Language) => {
    const clean = normalizeLang(l);

    setLanguageState(clean);
    localStorage.setItem(LANG_KEY, clean);

    const next = new URLSearchParams(searchParams);
    next.set("lang", clean);
    setSearchParams(next, { replace: true });
  };

  // ================= SYNC URL =================

  useEffect(() => {
    if (urlLang) {
      setLanguageState(normalizeLang(urlLang));
    }
  }, [urlLang]);

  // ================= HTML LANG =================

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

            {/* ✅ NEW ROUTE */}
            <Route path="/products" element={<Products />} />

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
