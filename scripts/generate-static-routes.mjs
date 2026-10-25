import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

const routes = [
  {
    path: "/",
    en: {
      title: "Cosmetic & fragrance packaging sourcing | Elmvale Global",
      description: "Elmvale Global supports beauty and fragrance brands with packaging sourcing, supplier comparison, sampling and project coordination.",
      h1: "Cosmetic & fragrance packaging sourcing",
      intro: "Elmvale Global supports beauty and fragrance brands with packaging sourcing, supplier comparison, sampling and project coordination."
    },
    fr: {
      title: "Sourcing packaging cosmétique & parfum | Elmvale Global",
      description: "Elmvale Global accompagne les marques beauté et parfum dans le sourcing packaging, la comparaison de fournisseurs, les échantillons et la coordination de projet.",
      h1: "Sourcing de packaging cosmétique & parfum",
      intro: "Elmvale Global accompagne les marques beauté et parfum dans le sourcing packaging, la comparaison de fournisseurs, les échantillons et la coordination de projet."
    }
  },
  {
    path: "/products/",
    en: {
      title: "Cosmetic & fragrance packaging | Elmvale Global",
      description: "Explore skincare, fragrance, tubes, dispensing, secondary packaging and more sustainable packaging options supported by Elmvale Global sourcing.",
      h1: "Packaging categories we can source",
      intro: "Explore skincare, fragrance, tubes, dispensing, secondary packaging and more sustainable packaging options supported through structured sourcing."
    },
    fr: {
      title: "Packaging cosmétique & parfum | Elmvale Global",
      description: "Découvrez des options de packaging skincare, parfum, tubes, distribution, packaging secondaire et solutions plus responsables.",
      h1: "Catégories de packaging que nous pouvons sourcer",
      intro: "Découvrez des options de packaging skincare, parfum, tubes, distribution, packaging secondaire et des solutions plus responsables via un sourcing structuré."
    }
  },
  {
    path: "/sourcing/",
    en: {
      title: "Packaging sourcing & supplier coordination | Elmvale Global",
      description: "Elmvale Global helps beauty and fragrance brands compare packaging sourcing options, clarify MOQ and timing, and coordinate sampling and suppliers.",
      h1: "Cosmetic packaging sourcing",
      intro: "Elmvale Global helps beauty and fragrance brands compare sourcing options, clarify MOQ, timing, customization and technical feasibility, then coordinate sampling and supplier communication."
    },
    fr: {
      title: "Sourcing packaging & coordination fournisseurs | Elmvale Global",
      description: "Elmvale Global aide les marques beauté et parfum à comparer les options de sourcing, clarifier MOQ et délais, puis coordonner échantillons et fournisseurs.",
      h1: "Sourcing de packaging cosmétique",
      intro: "Elmvale Global aide les marques beauté et parfum à comparer les options de sourcing, clarifier MOQ, délais, personnalisation et faisabilité, puis coordonner les échantillons et les fournisseurs."
    }
  },
  {
    path: "/fragrance-packaging/",
    noindex: true,
    redirectTo: "/products/",
    en: {
      title: "Fragrance packaging sourcing | Elmvale Global",
      description: "Source fragrance bottles, pumps, caps, collars, decoration and secondary packaging with structured supplier comparison and project coordination.",
      h1: "Packaging sourcing for fragrance brands",
      intro: "Source fragrance bottles, pumps, caps, collars, decoration and secondary packaging with structured supplier comparison and project coordination."
    },
    fr: {
      title: "Sourcing packaging parfum | Elmvale Global",
      description: "Sourcing de flacons, pompes, capots, cols, décorations et packaging secondaire pour projets parfum, avec comparaison fournisseurs et coordination de projet.",
      h1: "Sourcing de packaging pour les marques de parfum",
      intro: "Sourcing de flacons, pompes, capots, cols, décorations et packaging secondaire avec comparaison fournisseurs et coordination de projet."
    }
  },
  {
    path: "/packaging-sourcing-brief/",
    en: {
      title: "Cosmetic packaging sourcing brief | Elmvale Global",
      description: "Learn what to include in a cosmetic packaging sourcing brief, from references and quantity to finish, target market and launch timing.",
      h1: "What to include in a cosmetic packaging sourcing brief",
      intro: "A useful packaging sourcing brief can start with a visual reference, estimated quantity, product type and launch timing. More technical details can be clarified as suitable manufacturing options are identified."
    },
    fr: {
      title: "Brief de sourcing packaging cosmétique | Elmvale Global",
      description: "Découvrez les informations utiles à inclure dans un brief de sourcing packaging : références, quantités, finitions, marché cible et calendrier.",
      h1: "Que faut-il inclure dans un brief de sourcing packaging cosmétique ?",
      intro: "Un brief peut commencer avec une référence visuelle, une quantité estimée, un type de produit et un calendrier cible. Les détails techniques peuvent être précisés au fur et à mesure du sourcing."
    }
  },
  {
    path: "/cosmetic-packaging-moq/",
    en: {
      title: "Cosmetic packaging MOQ guide | Elmvale Global",
      description: "Understand what drives cosmetic packaging MOQ, how stock and custom options differ, and what brands can do when minimum quantities are too high.",
      h1: "Cosmetic packaging MOQ: what brands should expect",
      intro: "There is no single standard MOQ for cosmetic packaging. Minimum quantities depend on the reference, component, material, decoration, manufacturer and level of customization required."
    },
    fr: {
      title: "Guide MOQ packaging cosmétique | Elmvale Global",
      description: "Comprenez ce qui détermine le MOQ packaging, les différences entre stock et custom, et les options lorsque les minimums sont trop élevés.",
      h1: "MOQ packaging cosmétique : à quoi les marques doivent-elles s’attendre ?",
      intro: "Il n’existe pas de MOQ unique pour le packaging cosmétique. Le minimum dépend de la référence, du composant, de la matière, de la décoration, du fabricant et du niveau de personnalisation."
    }
  },
  {
    path: "/stock-vs-custom-packaging/",
    en: {
      title: "Stock vs custom cosmetic packaging | Elmvale Global",
      description: "Compare stock and custom cosmetic packaging across MOQ, lead time, investment, differentiation and launch risk to choose the right sourcing option.",
      h1: "Stock vs custom cosmetic packaging: which option should you choose?",
      intro: "Compare stock and custom packaging across MOQ, lead time, upfront investment, differentiation and launch risk to identify the option that best fits the project."
    },
    fr: {
      title: "Packaging stock vs custom | Elmvale Global",
      description: "Comparez packaging stock et custom selon MOQ, délais, investissement, différenciation et risque afin de choisir la bonne route de sourcing.",
      h1: "Packaging stock ou custom : quelle route choisir ?",
      intro: "Comparez stock et custom selon MOQ, délai, investissement initial, différenciation et risque de lancement pour choisir la route adaptée au projet."
    }
  },
  {
    path: "/compliance/",
    en: {
      title: "Packaging documentation & sustainability support | Elmvale Global",
      description: "Elmvale Global coordinates supplier documentation, technical information and third-party testing support for beauty and fragrance packaging projects.",
      h1: "Compliance & sustainability",
      intro: "Elmvale Global coordinates available supplier documentation, technical information and third-party testing support while helping brands explore more responsible packaging options."
    },
    fr: {
      title: "Documentation packaging & durabilité | Elmvale Global",
      description: "Elmvale Global coordonne documents fournisseurs, informations techniques et essais tiers pour les projets packaging beauté et parfum.",
      h1: "Conformité & durabilité",
      intro: "Elmvale Global coordonne les documents fournisseurs disponibles, les informations techniques et le support aux essais tiers, tout en aidant les marques à explorer des options plus responsables."
    }
  },
  {
    path: "/about/",
    en: {
      title: "About Elmvale Global | Packaging sourcing support",
      description: "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing, supplier comparison and project coordination.",
      h1: "A more structured approach to packaging sourcing",
      intro: "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing, supplier comparison and project coordination."
    },
    fr: {
      title: "À propos d’Elmvale Global | Sourcing packaging",
      description: "Elmvale Global accompagne les marques beauté et parfum avec un sourcing packaging structuré, une comparaison fournisseurs et une coordination de projet.",
      h1: "Une approche plus structurée du sourcing packaging",
      intro: "Elmvale Global accompagne les marques beauté et parfum avec un sourcing packaging structuré, une comparaison fournisseurs et une coordination de projet."
    }
  },
  {
    path: "/contact/",
    en: {
      title: "Send a packaging brief | Elmvale Global",
      description: "Share your cosmetic or fragrance packaging brief, reference, target quantity or initial direction with Elmvale Global.",
      h1: "Send us your packaging brief",
      intro: "You do not need a complete specification to contact us. A reference, target quantity or initial packaging direction is enough to get started."
    },
    fr: {
      title: "Envoyer un brief packaging | Elmvale Global",
      description: "Partagez votre brief packaging cosmétique ou parfum, une référence, une quantité cible ou une première direction avec Elmvale Global.",
      h1: "Envoyez-nous votre brief packaging",
      intro: "Vous n’avez pas besoin d’un brief finalisé. Une référence, une quantité cible ou une première direction packaging suffit pour commencer."
    }
  },
  {
    path: "/client-feedback/",
    noindex: true,
    en: {
      title: "Client feedback | Elmvale Global",
      description: "Share feedback about your experience working with Elmvale Global.",
      h1: "Share your experience with Elmvale Global",
      intro: "Your feedback helps us improve how we support packaging sourcing, supplier comparison and project coordination."
    },
    fr: {
      title: "Retour client | Elmvale Global",
      description: "Partagez votre retour sur votre expérience avec Elmvale Global.",
      h1: "Partagez votre expérience avec Elmvale Global",
      intro: "Votre retour nous aide à améliorer notre accompagnement sur les projets de sourcing packaging, de comparaison fournisseurs et de coordination."
    }
  },
  {
    path: "/privacy/",
    en: { title: "Privacy policy | Elmvale Global", description: "Read the Elmvale Global privacy policy.", h1: "Privacy policy", intro: "Information about how Elmvale Global handles personal information submitted through this website." },
    fr: { title: "Politique de confidentialité | Elmvale Global", description: "Consultez la politique de confidentialité d’Elmvale Global.", h1: "Politique de confidentialité", intro: "Informations sur la manière dont Elmvale Global traite les informations personnelles soumises via ce site." }
  },
  {
    path: "/terms/",
    en: { title: "Website terms | Elmvale Global", description: "Read the Elmvale Global website terms.", h1: "Website terms", intro: "Terms governing the use of the Elmvale Global website and information presented on it." },
    fr: { title: "Conditions d’utilisation | Elmvale Global", description: "Consultez les conditions d’utilisation du site Elmvale Global.", h1: "Conditions d’utilisation", intro: "Conditions régissant l’utilisation du site Elmvale Global et des informations qui y sont présentées." }
  },
  {
    path: "/cookies/",
    en: { title: "Cookie policy | Elmvale Global", description: "Read the Elmvale Global cookie policy.", h1: "Cookie policy", intro: "Information about cookies and analytics technologies used on the Elmvale Global website." },
    fr: { title: "Politique cookies | Elmvale Global", description: "Consultez la politique cookies d’Elmvale Global.", h1: "Politique cookies", intro: "Informations sur les cookies et technologies d’analyse utilisés sur le site Elmvale Global." }
  }
];

function replaceOrInsert(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", "  " + replacement + "\n  </head>");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function localizedPath(path, lang) {
  if (lang === "en") return path;
  return path === "/" ? "/fr/" : "/fr" + path;
}

function semanticFallback(route, lang) {
  const data = route[lang];
  const prefix = lang === "fr" ? "/fr" : "";
  return `<!-- STATIC_SEMANTIC_START -->
      <main style="max-width:1120px;margin:0 auto;padding:96px 24px;font-family:Arial,sans-serif;color:#1c2b26;background:#ffffff;">
        <p style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#78716c;margin:0 0 16px;">Elmvale Global</p>
        <h1 style="font-family:Georgia,serif;font-size:52px;line-height:1.08;font-weight:400;margin:0 0 24px;">${escapeHtml(data.h1)}</h1>
        <p style="max-width:760px;font-size:18px;line-height:1.7;color:#57534e;margin:0 0 28px;">${escapeHtml(data.intro)}</p>
        <nav aria-label="Key pages">
          <a href="${prefix}/products/" style="margin-right:18px;color:#065f46;">Packaging</a>
          <a href="${prefix}/sourcing/" style="margin-right:18px;color:#065f46;">Sourcing</a>
          <a href="${prefix}/contact/" style="color:#065f46;">Contact</a>
        </nav>
      </main>
      <!-- STATIC_SEMANTIC_END -->`;
}

function structuredData(path, lang) {
  const pageUrl = "https://elmvaleglobal.com" + path;
  const siteUrl = lang === "fr" ? "https://elmvaleglobal.com/fr/" : "https://elmvaleglobal.com/";
  const sourcingUrl = lang === "fr" ? "https://elmvaleglobal.com/fr/sourcing/" : "https://elmvaleglobal.com/sourcing/";
  const websiteId = lang === "fr" ? "https://elmvaleglobal.com/fr/#website" : "https://elmvaleglobal.com/#website";
  const serviceId = lang === "fr" ? "https://elmvaleglobal.com/fr/#sourcing-service" : "https://elmvaleglobal.com/#sourcing-service";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://elmvaleglobal.com/#organization",
        name: "Elmvale Global",
        url: "https://elmvaleglobal.com/",
        email: "contact@elmvaleglobal.com",
        description: lang === "fr"
          ? "Sourcing packaging et coordination de projet pour les marques de beauté et de parfum."
          : "Packaging sourcing and project coordination support for beauty and fragrance brands."
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Elmvale Global",
        inLanguage: lang,
        publisher: { "@id": "https://elmvaleglobal.com/#organization" },
        description: lang === "fr"
          ? "Elmvale Global accompagne les marques beauté et parfum dans le sourcing packaging, la comparaison de fournisseurs, les échantillons et la coordination de projet."
          : "Elmvale Global supports beauty and fragrance brands with packaging sourcing, supplier comparison, sampling and project coordination."
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: lang === "fr" ? "Sourcing de packaging cosmétique et parfum" : "Cosmetic and fragrance packaging sourcing",
        inLanguage: lang,
        provider: { "@id": "https://elmvaleglobal.com/#organization" },
        areaServed: "Worldwide",
        serviceType: lang === "fr"
          ? ["Sourcing de packaging cosmétique", "Sourcing de packaging parfum", "Comparaison de fournisseurs", "Coordination d’échantillons", "Coordination de projets packaging"]
          : ["Cosmetic packaging sourcing", "Fragrance packaging sourcing", "Supplier comparison", "Sampling coordination", "Packaging project coordination"],
        url: sourcingUrl
      },
      {
        "@type": "WebPage",
        "@id": pageUrl + "#webpage",
        url: pageUrl,
        inLanguage: lang,
        isPartOf: { "@id": websiteId },
        about: { "@id": "https://elmvaleglobal.com/#organization" }
      }
    ]
  };
}

function applyRoute(html, route, lang) {
  const data = route[lang];
  const path = localizedPath(route.path, lang);
  const canonicalPath = route.redirectTo ? localizedPath(route.redirectTo, lang) : path;
  const canonical = "https://elmvaleglobal.com" + canonicalPath;
  const enUrl = "https://elmvaleglobal.com" + localizedPath(route.redirectTo || route.path, "en");
  const frUrl = "https://elmvaleglobal.com" + localizedPath(route.redirectTo || route.path, "fr");

  html = html.replace(/<html\s+lang=["'][^"']*["']/i, '<html lang="' + lang + '"');
  html = html.replace(/<title>[^<]*<\/title>/i, "<title>" + data.title + "</title>");
  html = replaceOrInsert(html, /<meta\s+name=["']description["'][^>]*>/i, '<meta name="description" content="' + data.description + '" />');
  html = replaceOrInsert(html, /<meta\s+name=["']robots["'][^>]*>/i, '<meta name="robots" content="' + (route.noindex ? 'noindex, nofollow' : 'index, follow') + '" />');
  if (route.redirectTo) {
    const redirectPath = localizedPath(route.redirectTo, lang);
    html = replaceOrInsert(html, /<meta\s+http-equiv=["']refresh["'][^>]*>/i, '<meta http-equiv="refresh" content="0; url=' + redirectPath + '" />');
  }
  html = replaceOrInsert(html, /<link\s+rel=["']canonical["'][^>]*>/i, '<link rel="canonical" href="' + canonical + '" />');
  html = replaceOrInsert(html, /<link\s+rel=["']alternate["']\s+hreflang=["']en["'][^>]*>/i, '<link rel="alternate" hreflang="en" href="' + enUrl + '" />');
  html = replaceOrInsert(html, /<link\s+rel=["']alternate["']\s+hreflang=["']fr["'][^>]*>/i, '<link rel="alternate" hreflang="fr" href="' + frUrl + '" />');
  html = replaceOrInsert(html, /<link\s+rel=["']alternate["']\s+hreflang=["']x-default["'][^>]*>/i, '<link rel="alternate" hreflang="x-default" href="' + enUrl + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["']og:title["'][^>]*>/i, '<meta property="og:title" content="' + data.title + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["']og:description["'][^>]*>/i, '<meta property="og:description" content="' + data.description + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["']og:url["'][^>]*>/i, '<meta property="og:url" content="' + canonical + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["']og:locale["'][^>]*>/i, '<meta property="og:locale" content="' + (lang === "fr" ? "fr_FR" : "en_US") + '" />');
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, '<meta name="twitter:title" content="' + data.title + '" />');
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, '<meta name="twitter:description" content="' + data.description + '" />');
  html = html.replace(
    /<script id=["']elmvale-structured-data["'] type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
    '<script id="elmvale-structured-data" type="application/ld+json">\n' + JSON.stringify(structuredData(path, lang), null, 2) + '\n    </script>'
  );
  html = html.replace(/<!-- STATIC_SEMANTIC_START -->[\s\S]*?<!-- STATIC_SEMANTIC_END -->/, semanticFallback(route, lang));
  return html;
}

for (const route of routes) {
  for (const lang of ["en", "fr"]) {
    if (route.path === "/" && lang === "en") continue;
    const html = applyRoute(baseHtml, route, lang);
    const targetPath = localizedPath(route.path, lang);
    const outputPath = targetPath === "/"
      ? join(distDir, "index.html")
      : join(distDir, targetPath.replace(/^\//, ""), "index.html");
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");
  }
}

console.log("Generated localized static route entry pages with canonical and hreflang metadata.");
