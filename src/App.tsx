import React, { createContext, useEffect, useMemo, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
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
import ClientFeedback from "./pages/ClientFeedback";
import Sourcing from "./pages/Sourcing";
import FragrancePackaging from "./pages/FragrancePackaging";
import PackagingSourcingBrief from "./pages/PackagingSourcingBrief";
import CosmeticPackagingMoq from "./pages/CosmeticPackagingMoq";
import StockVsCustomPackaging from "./pages/StockVsCustomPackaging";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import CookieBanner from "./components/CookieBanner";
import { normalizeSeoPath, seoByRoute, setSeoMeta } from "./seo";
import { languageFromPath, localizedPath, stripLocalePrefix } from "./locale";
import { syncStructuredData } from "./structuredData";

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

const LANG_KEY = "elmvale_lang";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const SeoManager: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = React.useContext(LanguageContext);

  useEffect(() => {
    const route = normalizeSeoPath(pathname);
    const entry = seoByRoute[route][language];
    setSeoMeta(entry.title, entry.description, entry.path, language, entry.robots);
  }, [pathname, language]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlLang = searchParams.get("lang") as Language | null;
  const initialLang: Language =
    location.pathname === "/fr" || location.pathname.startsWith("/fr/")
      ? "fr"
      : urlLang === "fr"
        ? "fr"
        : "en";

  const [language, setLanguageState] = useState<Language>(initialLang);

  useEffect(() => {
    const pathLanguage = languageFromPath(location.pathname);

    if (urlLang === "fr" && pathLanguage === "en") {
      const next = new URLSearchParams(searchParams);
      next.delete("lang");
      const search = next.toString();
      navigate(
        {
          pathname: localizedPath(location.pathname, "fr"),
          search: search ? `?${search}` : "",
        },
        { replace: true }
      );
      return;
    }

    setLanguageState(pathLanguage);
    localStorage.setItem(LANG_KEY, pathLanguage);
  }, [location.pathname, navigate, searchParams, urlLang]);

  const setLanguage = (nextLanguage: Language) => {
    const basePath = stripLocalePrefix(location.pathname);
    const next = new URLSearchParams(searchParams);
    next.delete("lang");

    setLanguageState(nextLanguage);
    localStorage.setItem(LANG_KEY, nextLanguage);

    const search = next.toString();
    navigate({
      pathname: localizedPath(basePath, nextLanguage),
      search: search ? `?${search}` : "",
    });
  };

  useEffect(() => {
    document.documentElement.lang = language;
    syncStructuredData(location.pathname, language);
  }, [language, location.pathname]);

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
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/" element={<Home />} />

            <Route path="/products" element={<Products />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/fr/products" element={<Products />} />
            <Route path="/fr/products/" element={<Products />} />

            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/sourcing/" element={<Sourcing />} />
            <Route path="/fr/sourcing" element={<Sourcing />} />
            <Route path="/fr/sourcing/" element={<Sourcing />} />

            <Route path="/fragrance-packaging" element={<FragrancePackaging />} />
            <Route path="/fragrance-packaging/" element={<FragrancePackaging />} />
            <Route path="/fr/fragrance-packaging" element={<FragrancePackaging />} />
            <Route path="/fr/fragrance-packaging/" element={<FragrancePackaging />} />

            <Route path="/packaging-sourcing-brief" element={<PackagingSourcingBrief />} />
            <Route path="/packaging-sourcing-brief/" element={<PackagingSourcingBrief />} />
            <Route path="/fr/packaging-sourcing-brief" element={<PackagingSourcingBrief />} />
            <Route path="/fr/packaging-sourcing-brief/" element={<PackagingSourcingBrief />} />

            <Route path="/cosmetic-packaging-moq" element={<CosmeticPackagingMoq />} />
            <Route path="/cosmetic-packaging-moq/" element={<CosmeticPackagingMoq />} />
            <Route path="/fr/cosmetic-packaging-moq" element={<CosmeticPackagingMoq />} />
            <Route path="/fr/cosmetic-packaging-moq/" element={<CosmeticPackagingMoq />} />

            <Route path="/stock-vs-custom-packaging" element={<StockVsCustomPackaging />} />
            <Route path="/stock-vs-custom-packaging/" element={<StockVsCustomPackaging />} />
            <Route path="/fr/stock-vs-custom-packaging" element={<StockVsCustomPackaging />} />
            <Route path="/fr/stock-vs-custom-packaging/" element={<StockVsCustomPackaging />} />

            <Route path="/compliance" element={<Compliance />} />
            <Route path="/compliance/" element={<Compliance />} />
            <Route path="/fr/compliance" element={<Compliance />} />
            <Route path="/fr/compliance/" element={<Compliance />} />

            <Route path="/about" element={<About />} />
            <Route path="/about/" element={<About />} />
            <Route path="/fr/about" element={<About />} />
            <Route path="/fr/about/" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/fr/contact" element={<Contact />} />
            <Route path="/fr/contact/" element={<Contact />} />

            <Route path="/client-feedback" element={<ClientFeedback />} />
            <Route path="/client-feedback/" element={<ClientFeedback />} />
            <Route path="/fr/client-feedback" element={<ClientFeedback />} />
            <Route path="/fr/client-feedback/" element={<ClientFeedback />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy/" element={<Privacy />} />
            <Route path="/fr/privacy" element={<Privacy />} />
            <Route path="/fr/privacy/" element={<Privacy />} />

            <Route path="/terms" element={<Terms />} />
            <Route path="/terms/" element={<Terms />} />
            <Route path="/fr/terms" element={<Terms />} />
            <Route path="/fr/terms/" element={<Terms />} />

            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cookies/" element={<Cookies />} />
            <Route path="/fr/cookies" element={<Cookies />} />
            <Route path="/fr/cookies/" element={<Cookies />} />

            <Route path="/solutions" element={<Navigate to="/products" replace />} />
            <Route path="/skincare-mask-packaging" element={<Navigate to="/products" replace />} />

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
