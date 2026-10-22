import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

const routes = [
  { path: "/products/", title: "Cosmetic & Fragrance Packaging | Elmvale Global", description: "Explore skincare, cosmetic and fragrance packaging categories that Elmvale Global can source and coordinate for international brands." },
  { path: "/sourcing/", title: "Cosmetic Packaging Sourcing | Elmvale Global", description: "Elmvale Global helps beauty and fragrance brands search, compare and develop packaging solutions, with sourcing support from brief to production." },
  { path: "/fragrance-packaging/", title: "Fragrance & Perfume Packaging Sourcing | Elmvale Global", description: "Source perfume bottles, pumps, caps, collars, decoration and secondary packaging for fragrance projects." },
  { path: "/compliance/", title: "Cosmetic Packaging Compliance | Elmvale Global", description: "Learn how Elmvale Global supports cosmetic packaging compliance with material documentation, supplier traceability, testing coordination, and regulatory-ready sourcing." },
  { path: "/about/", title: "About Elmvale Global | Packaging Sourcing", description: "Elmvale Global is an early-stage packaging sourcing venture connecting international beauty and fragrance brands with manufacturing resources in China." },
  { path: "/contact/", title: "Send a Packaging Brief | Elmvale Global", description: "Send your cosmetic or fragrance packaging sourcing brief to Elmvale Global." },
  { path: "/privacy/", title: "Privacy Policy | Elmvale Global", description: "Read the Elmvale Global privacy policy." },
  { path: "/terms/", title: "Terms | Elmvale Global", description: "Read the Elmvale Global website terms." },
  { path: "/cookies/", title: "Cookie Policy | Elmvale Global", description: "Read the Elmvale Global cookie policy." }
];

function replaceOrInsert(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace("</head>", "  " + replacement + "\n  </head>");
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
  const outputPath = join(distDir, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

console.log("Generated " + routes.length + " static route entry pages for GitHub Pages.");
