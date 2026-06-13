import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
} from "react";
import {
  Routes,
  Route,
  HashRouter,
  useLocation,
  useSearchParams,
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

// ================= LANGUAGE CONTEXT =================

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

const LANG_KEY = "elmvale_lang";

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
    const baseTitle =
      language === "fr"
        ? "Elmvale Global – Packaging cosmétique"
        : "Elmvale Global – Cosmetic Packaging";

    let pageTitle = "";

    switch (pathname) {
      case "/":
        pageTitle = language === "fr" ? "Accueil" : "Home";
        break;
      case "/solutions":
        pageTitle = language === "fr" ? "Solutions" : "Solutions";
        break;
      case "/skincare-mask-packaging":
        pageTitle =
          language === "fr"
            ? "Packaging masques"
            : "Hydrogel Mask Packaging";
        break;
      case "/about":
        pageTitle = language === "fr" ? "À propos" : "About";
        break;
      case "/compliance":
        pageTitle =
          language === "fr"
            ? "Conformité"
            : "Compliance & Sustainability";
        break;
      case "/contact":
        pageTitle = language === "fr" ? "Contact" : "Contact";
        break;
      default:
        pageTitle = "";
    }

    document.title = pageTitle
      ? `${pageTitle} | ${baseTitle}`
      : baseTitle;
  }, [pathname, language]);

  return null;
};

// ================= INNER APP =================

const AppInner: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlLang = searchParams.get("lang") as Language | null;
  const storedLang = localStorage.getItem(LANG_KEY) as Language | null;

  const initialLang: Language =
    urlLang === "en" || urlLang === "fr"
      ? urlLang
      : storedLang === "en" || storedLang === "fr"
      ? storedLang
      : "fr";

  const [language, setLanguageState] =
    useState<Language>(initialLang);

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem(LANG_KEY, l);

    const next = new URLSearchParams(searchParams);
    next.set("lang", l);
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    if (urlLang === "en" || urlLang === "fr") {
      setLanguageState(urlLang);
      localStorage.setItem(LANG_KEY, urlLang);
    }
  }, [urlLang]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
            <Route
              path="/skincare-mask-packaging"
              element={<SkincareMaskPackaging />}
            />
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

// ================= ROOT =================

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
};

export default App;
