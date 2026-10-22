import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

const routes = [
  {
    path: "/products/",
    title: "Cosmetic & fragrance packaging | Elmvale Global",
    description: "Explore skincare, fragrance, tubes, dispensing, secondary packaging and more sustainable packaging options supported by Elmvale Global sourcing.",
    h1: "Packaging categories we can source",
    intro: "Explore skincare, fragrance, tubes, dispensing, secondary packaging and more sustainable packaging options supported through structured sourcing."
  },
  {
    path: "/sourcing/",
    title: "Packaging sourcing & supplier coordination | Elmvale Global",
    description: "Elmvale Global helps beauty and fragrance brands compare packaging sourcing options, clarify MOQ and timing, and coordinate sampling and suppliers.",
    h1: "Cosmetic packaging sourcing",
    intro: "Elmvale Global helps beauty and fragrance brands compare sourcing options, clarify MOQ, timing, customization and technical feasibility, then coordinate sampling and supplier communication."
  },
  {
    path: "/fragrance-packaging/",
    title: "Fragrance packaging sourcing | Elmvale Global",
    description: "Source fragrance bottles, pumps, caps, collars, decoration and secondary packaging with structured supplier comparison and project coordination.",
    h1: "Packaging sourcing for fragrance brands",
    intro: "Source fragrance bottles, pumps, caps, collars, decoration and secondary packaging with structured supplier comparison and project coordination."
  },
  {
    path: "/compliance/",
    title: "Packaging documentation & sustainability support | Elmvale Global",
    description: "Elmvale Global coordinates supplier documentation, technical information and third-party testing support for beauty and fragrance packaging projects.",
    h1: "Compliance & sustainability",
    intro: "Elmvale Global coordinates available supplier documentation, technical information and third-party testing support while helping brands explore more responsible packaging options."
  },
  {
    path: "/about/",
    title: "About Elmvale Global | Packaging sourcing support",
    description: "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing, supplier comparison and project coordination.",
    h1: "A more structured approach to packaging sourcing",
    intro: "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing, supplier comparison and project coordination."
  },
  {
    path: "/contact/",
    title: "Send a packaging brief | Elmvale Global",
    description: "Share your cosmetic or fragrance packaging brief, reference, target quantity or initial direction with Elmvale Global.",
    h1: "Send us your packaging brief",
    intro: "You do not need a complete specification to contact us. A reference, target quantity or initial packaging direction is enough to get started."
  },
  {
    path: "/privacy/",
    title: "Privacy policy | Elmvale Global",
    description: "Read the Elmvale Global privacy policy.",
    h1: "Privacy policy",
    intro: "Information about how Elmvale Global handles personal information submitted through this website."
  },
  {
    path: "/terms/",
    title: "Website terms | Elmvale Global",
    description: "Read the Elmvale Global website terms.",
    h1: "Website terms",
    intro: "Terms governing the use of the Elmvale Global website and information presented on it."
  },
  {
    path: "/cookies/",
    title: "Cookie policy | Elmvale Global",
    description: "Read the Elmvale Global cookie policy.",
    h1: "Cookie policy",
    intro: "Information about cookies and analytics technologies used on the Elmvale Global website."
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

function semanticFallback(route) {
  return `<!-- STATIC_SEMANTIC_START -->
      <main style="max-width:1120px;margin:0 auto;padding:96px 24px;font-family:Arial,sans-serif;color:#1c2b26;background:#ffffff;">
        <p style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#78716c;margin:0 0 16px;">Elmvale Global</p>
        <h1 style="font-family:Georgia,serif;font-size:52px;line-height:1.08;font-weight:400;margin:0 0 24px;">${escapeHtml(route.h1)}</h1>
        <p style="max-width:760px;font-size:18px;line-height:1.7;color:#57534e;margin:0 0 28px;">${escapeHtml(route.intro)}</p>
        <nav aria-label="Key pages">
          <a href="/products/" style="margin-right:18px;color:#065f46;">Packaging</a>
          <a href="/sourcing/" style="margin-right:18px;color:#065f46;">Sourcing</a>
          <a href="/fragrance-packaging/" style="margin-right:18px;color:#065f46;">Fragrance packaging</a>
          <a href="/contact/" style="color:#065f46;">Contact</a>
        </nav>
      </main>
      <!-- STATIC_SEMANTIC_END -->`;
}

for (const route of routes) {
  const canonical = "https://elmvaleglobal.com" + route.path;
  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/i, "<title>" + route.title + "</title>");
  html = replaceOrInsert(html, /<meta\s+name=["\']description["\'][^>]*>/i, '<meta name="description" content="' + route.description + '" />');
  html = replaceOrInsert(html, /<link\s+rel=["\']canonical["\'][^>]*>/i, '<link rel="canonical" href="' + canonical + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["\']og:title["\'][^>]*>/i, '<meta property="og:title" content="' + route.title + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["\']og:description["\'][^>]*>/i, '<meta property="og:description" content="' + route.description + '" />');
  html = replaceOrInsert(html, /<meta\s+property=["\']og:url["\'][^>]*>/i, '<meta property="og:url" content="' + canonical + '" />');
  html = replaceOrInsert(html, /<meta\s+name=["\']twitter:title["\'][^>]*>/i, '<meta name="twitter:title" content="' + route.title + '" />');
  html = replaceOrInsert(html, /<meta\s+name=["\']twitter:description["\'][^>]*>/i, '<meta name="twitter:description" content="' + route.description + '" />');
  html = html.replace(
    /<!-- STATIC_SEMANTIC_START -->[\s\S]*?<!-- STATIC_SEMANTIC_END -->/,
    semanticFallback(route)
  );
  const outputPath = join(distDir, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

console.log("Generated " + routes.length + " static route entry pages with semantic HTML fallbacks.");
