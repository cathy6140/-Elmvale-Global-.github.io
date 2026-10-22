import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

const routes = [
  { path: "/products/", title: "Cosmetic & fragrance packaging | Elmvale Global", description: "Explore skincare, fragrance, tubes, dispensing, secondary packaging and more sustainable packaging options supported by Elmvale Global sourcing." },
  { path: "/sourcing/", title: "Packaging sourcing & supplier coordination | Elmvale Global", description: "Elmvale Global helps beauty and fragrance brands compare sourcing options, clarify MOQ, timing, customization and technical feasibility, then coordinate sampling and supplier communication." },
  { path: "/fragrance-packaging/", title: "Fragrance packaging sourcing | Elmvale Global", description: "Source fragrance bottles, pumps, caps, collars, decoration and secondary packaging with structured supplier comparison and project coordination." },
  { path: "/compliance/", title: "Packaging documentation & sustainability support | Elmvale Global", description: "Elmvale Global coordinates available supplier documentation, technical information and third-party testing support while helping brands explore more responsible packaging options." },
  { path: "/about/", title: "About Elmvale Global | Packaging sourcing support", description: "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing, supplier comparison and project coordination." },
  { path: "/contact/", title: "Send a packaging brief | Elmvale Global", description: "Share your cosmetic or fragrance packaging brief, reference, target quantity or initial direction with Elmvale Global." },
  { path: "/privacy/", title: "Privacy policy | Elmvale Global", description: "Read the Elmvale Global privacy policy." },
  { path: "/terms/", title: "Website terms | Elmvale Global", description: "Read the Elmvale Global website terms." },
  { path: "/cookies/", title: "Cookie policy | Elmvale Global", description: "Read the Elmvale Global cookie policy." }
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
  html = replaceOrInsert(html, /<meta\s+name=["\']twitter:title["\'][^>]*>/i, '<meta name="twitter:title" content="' + route.title + '" />');
  html = replaceOrInsert(html, /<meta\s+name=["\']twitter:description["\'][^>]*>/i, '<meta name="twitter:description" content="' + route.description + '" />');
  const outputPath = join(distDir, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

console.log("Generated " + routes.length + " static route entry pages for GitHub Pages.");
