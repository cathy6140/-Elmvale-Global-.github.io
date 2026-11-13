import { Language } from "./types";
import { localizedPath, stripLocalePrefix } from "./locale";

type GuideMeta = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
};

const guideMeta: Record<string, { en: GuideMeta; fr: GuideMeta }> = {
  "/packaging-sourcing-brief/": {
    en: {
      headline: "What to include in a cosmetic packaging sourcing brief",
      description: "A practical guide to structuring a packaging sourcing brief before comparing manufacturing options.",
      datePublished: "2026-10-22",
      dateModified: "2026-11-03",
      image: "https://elmvaleglobal.com/packaging-sourcing-coordination.webp",
    },
    fr: {
      headline: "Que faut-il inclure dans un brief de sourcing packaging cosmétique ?",
      description: "Un guide pratique pour structurer un brief packaging avant de comparer les options fabricants.",
      datePublished: "2026-10-22",
      dateModified: "2026-11-03",
      image: "https://elmvaleglobal.com/packaging-sourcing-coordination.webp",
    },
  },
  "/cosmetic-packaging-moq/": {
    en: {
      headline: "Cosmetic packaging MOQ: what brands should expect",
      description: "A practical guide to the factors that change cosmetic packaging minimum order quantities.",
      datePublished: "2026-10-22",
      dateModified: "2026-11-13",
      image: "https://elmvaleglobal.com/skincare-primary-packaging.webp",
    },
    fr: {
      headline: "MOQ packaging cosmétique : à quoi les marques doivent-elles s’attendre ?",
      description: "Un guide pratique des facteurs qui font varier les quantités minimales en packaging cosmétique.",
      datePublished: "2026-10-22",
      dateModified: "2026-11-13",
      image: "https://elmvaleglobal.com/skincare-primary-packaging.webp",
    },
  },
  "/stock-vs-custom-packaging/": {
    en: {
      headline: "Stock vs custom cosmetic packaging: which option should you choose?",
      description: "Compare stock and custom packaging across MOQ, timing, investment, differentiation and launch risk.",
      datePublished: "2026-10-22",
      dateModified: "2026-11-03",
      image: "https://elmvaleglobal.com/beauty-skincare-packaging.webp",
    },
    fr: {
      headline: "Packaging stock ou custom : quelle route choisir ?",
      description: "Comparer packaging stock et custom selon MOQ, délais, investissement, différenciation et risque de lancement.",
      datePublished: "2026-10-22",
      dateModified: "2026-11-03",
      image: "https://elmvaleglobal.com/beauty-skincare-packaging.webp",
    },
  },
  "/compare-cosmetic-packaging-suppliers/": {
    en: {
      headline: "How to compare cosmetic packaging suppliers",
      description: "Compare packaging suppliers across MOQ, lead time, customization, samples, technical feasibility, documentation and quality.",
      datePublished: "2026-11-06",
      dateModified: "2026-11-06",
      image: "https://elmvaleglobal.com/packaging-sourcing-coordination.webp",
    },
    fr: {
      headline: "Comment comparer des fournisseurs de packaging cosmétique",
      description: "Comparer les fournisseurs packaging selon MOQ, délais, personnalisation, échantillons, faisabilité technique, documentation et qualité.",
      datePublished: "2026-11-06",
      dateModified: "2026-11-06",
      image: "https://elmvaleglobal.com/packaging-sourcing-coordination.webp",
    },
  },
};

const pageNames: Record<string, { en: string; fr: string }> = {
  "/products/": { en: "Packaging categories", fr: "Catégories de packaging" },
  "/sourcing/": { en: "Packaging sourcing", fr: "Sourcing packaging" },
  "/fragrance-packaging/": { en: "Fragrance packaging", fr: "Packaging parfum" },
  "/packaging-sourcing-brief/": { en: "Packaging sourcing brief", fr: "Brief sourcing packaging" },
  "/cosmetic-packaging-moq/": { en: "Cosmetic packaging MOQ", fr: "MOQ packaging cosmétique" },
  "/stock-vs-custom-packaging/": { en: "Stock vs custom packaging", fr: "Packaging stock vs custom" },
  "/compare-cosmetic-packaging-suppliers/": { en: "Compare packaging suppliers", fr: "Comparer les fournisseurs" },
  "/compliance/": { en: "Compliance & sustainability", fr: "Conformité & durabilité" },
  "/about/": { en: "About Elmvale Global", fr: "À propos d’Elmvale Global" },
  "/contact/": { en: "Contact", fr: "Contact" },
  "/privacy/": { en: "Privacy policy", fr: "Politique de confidentialité" },
  "/terms/": { en: "Website terms", fr: "Conditions d’utilisation" },
  "/cookies/": { en: "Cookie policy", fr: "Politique cookies" },
};

function buildBreadcrumbItems(basePath: string, language: Language) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: language === "fr" ? "Accueil" : "Home",
      item: language === "fr" ? "https://elmvaleglobal.com/fr/" : "https://elmvaleglobal.com/",
    },
  ];

  if (basePath === "/") return items;

  if (basePath === "/fragrance-packaging/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: language === "fr" ? "Catégories de packaging" : "Packaging categories",
      item: `https://elmvaleglobal.com${localizedPath("/products/", language)}`,
    });
  } else if (guideMeta[basePath]) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: language === "fr" ? "Sourcing packaging" : "Packaging sourcing",
      item: `https://elmvaleglobal.com${localizedPath("/sourcing/", language)}`,
    });
  }

  const pageName = pageNames[basePath]?.[language];
  if (pageName) {
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: pageName,
      item: `https://elmvaleglobal.com${localizedPath(basePath, language)}`,
    });
  }

  return items;
}

export function buildStructuredData(pathname: string, language: Language) {
  const rawBasePath = stripLocalePrefix(pathname);
  const basePath = rawBasePath === "/" || rawBasePath.endsWith("/") ? rawBasePath : `${rawBasePath}/`;
  const pagePath = localizedPath(basePath, language);
  const pageUrl = `https://elmvaleglobal.com${pagePath}`;
  const siteUrl = language === "fr" ? "https://elmvaleglobal.com/fr/" : "https://elmvaleglobal.com/";
  const sourcingUrl = language === "fr"
    ? "https://elmvaleglobal.com/fr/sourcing/"
    : "https://elmvaleglobal.com/sourcing/";

  const organizationDescription = language === "fr"
    ? "Sourcing packaging et coordination de projet pour les marques de beauté et de parfum."
    : "Packaging sourcing and project coordination support for beauty and fragrance brands.";

  const websiteDescription = language === "fr"
    ? "Elmvale Global accompagne les marques beauté et parfum dans le sourcing packaging, la comparaison de fournisseurs, les échantillons et la coordination de projet."
    : "Elmvale Global supports beauty and fragrance brands with packaging sourcing, supplier comparison, sampling and project coordination.";

  const serviceName = language === "fr"
    ? "Sourcing de packaging cosmétique et parfum"
    : "Cosmetic and fragrance packaging sourcing";

  const serviceTypes = language === "fr"
    ? [
        "Sourcing de packaging cosmétique",
        "Sourcing de packaging parfum",
        "Comparaison de fournisseurs",
        "Coordination d’échantillons",
        "Coordination de projets packaging",
      ]
    : [
        "Cosmetic packaging sourcing",
        "Fragrance packaging sourcing",
        "Supplier comparison",
        "Sampling coordination",
        "Packaging project coordination",
      ];

  const guide = guideMeta[basePath]?.[language];
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elmvaleglobal.com/#organization",
        name: "Elmvale Global",
        url: "https://elmvaleglobal.com/",
        email: "contact@elmvaleglobal.com",
        logo: {
          "@type": "ImageObject",
          url: "https://elmvaleglobal.com/elmvale-logo-512.webp",
          width: 512,
          height: 512,
        },
        sameAs: ["https://www.linkedin.com/company/elmvale-global/"],
        description: organizationDescription,
      },
      {
        "@type": "WebSite",
        "@id": language === "fr"
          ? "https://elmvaleglobal.com/fr/#website"
          : "https://elmvaleglobal.com/#website",
        url: siteUrl,
        name: "Elmvale Global",
        inLanguage: language,
        publisher: { "@id": "https://elmvaleglobal.com/#organization" },
        description: websiteDescription,
      },
      {
        "@type": "Service",
        "@id": language === "fr"
          ? "https://elmvaleglobal.com/fr/#sourcing-service"
          : "https://elmvaleglobal.com/#sourcing-service",
        name: serviceName,
        inLanguage: language,
        provider: { "@id": "https://elmvaleglobal.com/#organization" },
        areaServed: "Worldwide",
        serviceType: serviceTypes,
        url: sourcingUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: buildBreadcrumbItems(basePath, language),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        inLanguage: language,
        isPartOf: {
          "@id": language === "fr"
            ? "https://elmvaleglobal.com/fr/#website"
            : "https://elmvaleglobal.com/#website",
        },
        breadcrumb: { "@id": breadcrumbId },
        about: { "@id": "https://elmvaleglobal.com/#organization" },
      },
      ...(guide
        ? [{
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            headline: guide.headline,
            description: guide.description,
            image: guide.image,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
            author: { "@id": "https://elmvaleglobal.com/#organization" },
            publisher: { "@id": "https://elmvaleglobal.com/#organization" },
            inLanguage: language,
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            about: "Cosmetic packaging sourcing",
          }]
        : []),
    ],
  };
}

export function syncStructuredData(pathname: string, language: Language) {
  if (typeof document === "undefined") return;

  let node = document.querySelector<HTMLScriptElement>('script#elmvale-structured-data');
  if (!node) {
    node = document.createElement("script");
    node.id = "elmvale-structured-data";
    node.type = "application/ld+json";
    document.head.appendChild(node);
  }

  node.textContent = JSON.stringify(buildStructuredData(pathname, language));
}
