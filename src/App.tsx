import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
} from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import { Language, LanguageContextType } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Sourcing from "./pages/Sourcing";
import FragrancePackaging from "./pages/FragrancePackaging";
import PackagingSourcingBrief from "./pages/PackagingSourcingBrief";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import CookieBanner from "./components/CookieBanner";
import { normalizeSeoPath, seoByRoute, setSeoMeta } from "./seo";

// ================= CONTEXT =================

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

const LANG_KEY = "elmvale_lang";

// ================= SAFE LANGUAGE =================

const normalizeLang = (lang: any): "en" | "fr" => {
  if (!lang) return "en";

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

// ================= SEO =================

const SeoManager: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = React.useContext(LanguageContext);

  useEffect(() => {
    const route = normalizeSeoPath(pathname);
    const entry = seoByRoute[route][language];
    setSeoMeta(entry.title, entry.description, entry.path);
  }, [pathname, language]);

  return null;
};

// ================= APP =================

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlLang = searchParams.get("lang") as Language | null;
  const storedLang = localStorage.getItem(LANG_KEY) as Language | null;

  const initialLang: Language = normalizeLang(
    urlLang || storedLang || "en"
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
        <SeoManager />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Main commercial page */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/sourcing/" element={<Sourcing />} />
            <Route path="/fragrance-packaging" element={<FragrancePackaging />} />
            <Route path="/fragrance-packaging/" element={<FragrancePackaging />} />
            <Route path="/packaging-sourcing-brief" element={<PackagingSourcingBrief />} />
            <Route path="/packaging-sourcing-brief/" element={<PackagingSourcingBrief />} />

            {/* Trust and conversion pages */}
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/compliance/" element={<Compliance />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />

            {/* Legal pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy/" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/terms/" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cookies/" element={<Cookies />} />

            {/* Legacy redirects */}
            <Route path="/solutions" element={<Navigate to="/products" replace />} />
            <Route
              path="/skincare-mask-packaging"
              element={<Navigate to="/products" replace />}
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <CookieBanner />
        <Footer />

      </div>
    </LanguageContext.Provider>
  );
};

export default App;
