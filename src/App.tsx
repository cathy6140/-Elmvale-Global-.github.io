import React, { useState, createContext, useEffect, useMemo } from "react";
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

// ================= LANGUAGE CLEAN =================

const normalizeLang = (lang: any): "en" | "fr" => {
  if (!lang) return "fr";

  const clean = String(lang)
    .replace("#/", "")
    .trim();

  return clean === "en" ? "en" : "fr";
};

// ================= APP =================

const App: React.FC = () => {
  const storedLang = localStorage.getItem(LANG_KEY);

  const [language, setLanguageState] = useState<"en" | "fr">(
    normalizeLang(storedLang)
  );

  const setLanguage = (l: "en" | "fr") => {
    const clean = normalizeLang(l);
    setLanguageState(clean);
    localStorage.setItem(LANG_KEY, clean);
  };

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
