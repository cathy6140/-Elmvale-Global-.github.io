import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = "dist";
const baseHtml = await readFile(join(distDir, "index.html"), "utf8");

const routes = [
  { path: "/products/", title: "Cosmetic Packaging Products | Elmvale Global", description: "Explore cosmetic packaging for skincare and beauty brands, including bottles, jars, airless systems, tubes, dispensers, secondary packaging, and sustainable solutions." },
  { path: "/compliance/", title: "Cosmetic Packaging Compliance | Elmvale Global", description: "Learn how Elmvale Global supports cosmetic packaging compliance with material documentation, supplier traceability, testing coordination, and regulatory-ready sourcing." },
  { path: "/about/", title: "About Elmvale Global | Cosmetic Packaging Partner", description: "Discover Elmvale Global, a sourcing and development partner helping beauty brands build reliable, sustainable cosmetic packaging supply chains." },
  { path: "/contact/", title: "Contact Elmvale Global | Cosmetic Packaging Projects", description: "Contact Elmvale Global for cosmetic packaging quotations, sourcing requests, custom development, sustainability options, and compliance support." },
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
