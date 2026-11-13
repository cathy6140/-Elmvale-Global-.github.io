import { Language } from "./types";
import { localizedPath, stripLocalePrefix } from "./locale";

export function buildStructuredData(pathname: string, language: Language) {
  const rawBasePath = stripLocalePrefix(pathname);
  const basePath = rawBasePath === "/" || rawBasePath.endsWith("/") ? rawBasePath : `${rawBasePath}/`;
  const pagePath = localizedPath(basePath, language);
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

  const guideMeta: Record<string, { en: { headline: string; description: string }; fr: { headline: string; description: string } }> = {
    "/packaging-sourcing-brief/": {
      en: { headline: "What to include in a cosmetic packaging sourcing brief", description: "A practical guide to structuring a packaging sourcing brief before comparing manufacturing options." },
      fr: { headline: "Que faut-il inclure dans un brief de sourcing packaging cosmétique ?", description: "Un guide pratique pour structurer un brief packaging avant de comparer les options fabricants." },
    },
    "/cosmetic-packaging-moq/": {
      en: { headline: "Cosmetic packaging MOQ: what brands should expect", description: "A practical guide to the factors that change cosmetic packaging minimum order quantities." },
      fr: { headline: "MOQ packaging cosmétique : à quoi les marques doivent-elles s’attendre ?", description: "Un guide pratique des facteurs qui font varier les quantités minimales en packaging cosmétique." },
    },
    "/stock-vs-custom-packaging/": {
      en: { headline: "Stock vs custom cosmetic packaging: which option should you choose?", description: "Compare stock and custom packaging across MOQ, timing, investment, differentiation and launch risk." },
      fr: { headline: "Packaging stock ou custom : quelle route choisir ?", description: "Comparer packaging stock et custom selon MOQ, délais, investissement, différenciation et risque de lancement." },
    },
    "/compare-cosmetic-packaging-suppliers/": {
      en: { headline: "How to compare cosmetic packaging suppliers", description: "Compare packaging suppliers across MOQ, lead time, customization, samples, technical feasibility, documentation and quality." },
      fr: { headline: "Comment comparer des fournisseurs de packaging cosmétique", description: "Comparer les fournisseurs packaging selon MOQ, délais, personnalisation, échantillons, faisabilité technique, documentation et qualité." },
    },
  };

  const guide = guideMeta[basePath]?.[language];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elmvaleglobal.com/#organization",
        name: "Elmvale Global",
        url: "https://elmvaleglobal.com/",
        email: "contact@elmvaleglobal.com",
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
        "@type": "WebPage",
        "@id": `https://elmvaleglobal.com${pagePath}#webpage`,
        url: `https://elmvaleglobal.com${pagePath}`,
        inLanguage: language,
        isPartOf: {
          "@id": language === "fr"
            ? "https://elmvaleglobal.com/fr/#website"
            : "https://elmvaleglobal.com/#website",
        },
        about: { "@id": "https://elmvaleglobal.com/#organization" },
      },
      ...(guide
        ? [{
            "@type": "Article",
            "@id": `https://elmvaleglobal.com${pagePath}#article`,
            headline: guide.headline,
            description: guide.description,
            inLanguage: language,
            mainEntityOfPage: { "@id": `https://elmvaleglobal.com${pagePath}#webpage` },
            publisher: { "@id": "https://elmvaleglobal.com/#organization" },
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
