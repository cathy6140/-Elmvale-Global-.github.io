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
      description: "Elmvale Global helps beauty and fragrance brands compare sourcing options, clarify MOQ, timing, customization and technical feasibility, then coordinate sampling and supplier communication.",
      path: "/sourcing/",
    },
    fr: {
      title: "Sourcing packaging & coordination fournisseurs | Elmvale Global",
      description: "Elmvale Global aide les marques beauté et parfum à comparer les options de sourcing, clarifier MOQ, délais, personnalisation et faisabilité, puis coordonner échantillons et échanges fournisseurs.",
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
  "/compliance": {
    en: {
      title: "Packaging documentation & sustainability support | Elmvale Global",
      description: "Elmvale Global coordinates available supplier documentation, technical information and third-party testing support while helping brands explore more responsible packaging options.",
      path: "/compliance/",
    },
    fr: {
      title: "Documentation packaging & durabilité | Elmvale Global",
      description: "Elmvale Global coordonne les documents fournisseurs, informations techniques et essais tiers disponibles tout en aidant les marques à explorer des options packaging plus responsables.",
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
  if (pathname === "/") return "/";
  const withoutSlash = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return seoByRoute[withoutSlash] ? withoutSlash : "/";
}

export function setSeoMeta(title: string, description: string, canonicalPath = "/") {
  if (typeof document === "undefined") return;

  const canonicalUrl = `https://elmvaleglobal.com${canonicalPath}`;

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

  setMeta('meta[name="description"]', "name", "description", description);
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
}
