import { Language } from "./types";
import { localizedPath, stripLocalePrefix } from "./locale";

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
};

export const seoByRoute: Record<string, { en: SeoEntry; fr: SeoEntry }> = {
  "/": {
    en: {
      title: "Cosmetic & fragrance packaging sourcing | Elmvale Global",
      description: "Elmvale Global supports beauty and fragrance brands with packaging sourcing, supplier comparison, sampling and project coordination.",
      path: "/",
    },
    fr: {
      title: "Sourcing packaging cosmétique & parfum | Elmvale Global",
      description: "Elmvale Global accompagne les marques beauté et parfum dans le sourcing packaging, la comparaison de fournisseurs, les échantillons et la coordination de projet.",
      path: "/",
    },
  },
  "/products": {
    en: {
      title: "Cosmetic & fragrance packaging | Elmvale Global",
      description: "Explore skincare, fragrance, tubes, dispensing, secondary packaging and more sustainable packaging options supported by Elmvale Global sourcing.",
      path: "/products/",
    },
    fr: {
      title: "Packaging cosmétique & parfum | Elmvale Global",
      description: "Découvrez des options de packaging skincare, parfum, tubes, distribution, packaging secondaire et solutions plus responsables.",
      path: "/products/",
    },
  },
  "/sourcing": {
    en: {
      title: "Packaging sourcing & supplier coordination | Elmvale Global",
      description: "Elmvale Global helps beauty and fragrance brands compare packaging sourcing options, clarify MOQ and timing, and coordinate sampling and suppliers.",
      path: "/sourcing/",
    },
    fr: {
      title: "Sourcing packaging & coordination fournisseurs | Elmvale Global",
      description: "Elmvale Global aide les marques beauté et parfum à comparer les options de sourcing, clarifier MOQ et délais, puis coordonner échantillons et fournisseurs.",
      path: "/sourcing/",
    },
  },
  "/fragrance-packaging": {
    en: {
      title: "Fragrance packaging sourcing | Elmvale Global",
      description: "Source fragrance bottles, pumps, caps, collars, decoration and secondary packaging with structured supplier comparison and project coordination.",
      path: "/fragrance-packaging/",
    },
    fr: {
      title: "Sourcing packaging parfum | Elmvale Global",
      description: "Sourcing de flacons, pompes, capots, cols, décorations et packaging secondaire pour projets parfum, avec comparaison fournisseurs et coordination de projet.",
      path: "/fragrance-packaging/",
    },
  },
  "/packaging-sourcing-brief": {
    en: {
      title: "Cosmetic packaging sourcing brief | Elmvale Global",
      description: "Learn what to include in a cosmetic packaging sourcing brief, from references and quantity to finish, target market and launch timing.",
      path: "/packaging-sourcing-brief/",
    },
    fr: {
      title: "Brief de sourcing packaging cosmétique | Elmvale Global",
      description: "Découvrez les informations utiles à inclure dans un brief de sourcing packaging : références, quantités, finitions, marché cible et calendrier.",
      path: "/packaging-sourcing-brief/",
    },
  },
  "/cosmetic-packaging-moq": {
    en: {
      title: "Cosmetic packaging MOQ guide | Elmvale Global",
      description: "Understand what drives cosmetic packaging MOQ, how stock and custom routes differ, and what brands can do when minimum quantities are too high.",
      path: "/cosmetic-packaging-moq/",
    },
    fr: {
      title: "Guide MOQ packaging cosmétique | Elmvale Global",
      description: "Comprenez ce qui détermine le MOQ packaging, les différences entre stock et custom, et les options lorsque les minimums sont trop élevés.",
      path: "/cosmetic-packaging-moq/",
    },
  },
  "/stock-vs-custom-packaging": {
    en: {
      title: "Stock vs custom cosmetic packaging | Elmvale Global",
      description: "Compare stock and custom cosmetic packaging across MOQ, lead time, investment, differentiation and launch risk to choose the right sourcing route.",
      path: "/stock-vs-custom-packaging/",
    },
    fr: {
      title: "Packaging stock vs custom | Elmvale Global",
      description: "Comparez packaging stock et custom selon MOQ, délais, investissement, différenciation et risque afin de choisir la bonne route de sourcing.",
      path: "/stock-vs-custom-packaging/",
    },
  },
  "/compliance": {
    en: {
      title: "Packaging documentation & sustainability support | Elmvale Global",
      description: "Elmvale Global coordinates supplier documentation, technical information and third-party testing support for beauty and fragrance packaging projects.",
      path: "/compliance/",
    },
    fr: {
      title: "Documentation packaging & durabilité | Elmvale Global",
      description: "Elmvale Global coordonne documents fournisseurs, informations techniques et essais tiers pour les projets packaging beauté et parfum.",
      path: "/compliance/",
    },
  },
  "/about": {
    en: {
      title: "About Elmvale Global | Packaging sourcing support",
      description: "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing, supplier comparison and project coordination.",
      path: "/about/",
    },
    fr: {
      title: "À propos d’Elmvale Global | Sourcing packaging",
      description: "Elmvale Global accompagne les marques beauté et parfum avec un sourcing packaging structuré, une comparaison fournisseurs et une coordination de projet.",
      path: "/about/",
    },
  },
  "/contact": {
    en: {
      title: "Send a packaging brief | Elmvale Global",
      description: "Share your cosmetic or fragrance packaging brief, reference, target quantity or initial direction with Elmvale Global.",
      path: "/contact/",
    },
    fr: {
      title: "Envoyer un brief packaging | Elmvale Global",
      description: "Partagez votre brief packaging cosmétique ou parfum, une référence, une quantité cible ou une première direction avec Elmvale Global.",
      path: "/contact/",
    },
  },
  "/privacy": {
    en: { title: "Privacy policy | Elmvale Global", description: "Read the Elmvale Global privacy policy.", path: "/privacy/" },
    fr: { title: "Politique de confidentialité | Elmvale Global", description: "Consultez la politique de confidentialité d’Elmvale Global.", path: "/privacy/" },
  },
  "/terms": {
    en: { title: "Website terms | Elmvale Global", description: "Read the Elmvale Global website terms.", path: "/terms/" },
    fr: { title: "Conditions d’utilisation | Elmvale Global", description: "Consultez les conditions d’utilisation du site Elmvale Global.", path: "/terms/" },
  },
  "/cookies": {
    en: { title: "Cookie policy | Elmvale Global", description: "Read the Elmvale Global cookie policy.", path: "/cookies/" },
    fr: { title: "Politique cookies | Elmvale Global", description: "Consultez la politique cookies d’Elmvale Global.", path: "/cookies/" },
  },
};

export function normalizeSeoPath(pathname: string) {
  const basePath = stripLocalePrefix(pathname);
  if (basePath === "/") return "/";
  const withoutSlash = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  return seoByRoute[withoutSlash] ? withoutSlash : "/";
}

export function setSeoMeta(
  title: string,
  description: string,
  canonicalPath = "/",
  language: Language = "en"
) {
  if (typeof document === "undefined") return;

  const englishPath = stripLocalePrefix(canonicalPath);
  const currentPath = localizedPath(englishPath, language);
  const canonicalUrl = `https://elmvaleglobal.com${currentPath}`;
  const englishUrl = `https://elmvaleglobal.com${localizedPath(englishPath, "en")}`;
  const frenchUrl = `https://elmvaleglobal.com${localizedPath(englishPath, "fr")}`;

  document.title = title;

  const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
    let node = document.querySelector<HTMLMetaElement>(selector);
    if (!node) {
      node = document.createElement("meta");
      node.setAttribute(attr, key);
      document.head.appendChild(node);
    }
    node.content = content;
  };

  const setLink = (selector: string, rel: string, href: string, hreflang?: string) => {
    let node = document.querySelector<HTMLLinkElement>(selector);
    if (!node) {
      node = document.createElement("link");
      node.rel = rel;
      if (hreflang) node.hreflang = hreflang;
      document.head.appendChild(node);
    }
    node.href = href;
  };

  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
  setMeta('meta[property="og:locale"]', "property", "og:locale", language === "fr" ? "fr_FR" : "en_US");
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

  setLink('link[rel="canonical"]', "canonical", canonicalUrl);
  setLink('link[rel="alternate"][hreflang="en"]', "alternate", englishUrl, "en");
  setLink('link[rel="alternate"][hreflang="fr"]', "alternate", frenchUrl, "fr");
  setLink('link[rel="alternate"][hreflang="x-default"]', "alternate", englishUrl, "x-default");
}
