const INDEXNOW_KEY = "5834b917ee014d8b97f9e5cb0ffb2e68";
const HOST = "elmvaleglobal.com";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const sitemapResponse = await fetch(SITEMAP_URL);
if (!sitemapResponse.ok) {
  throw new Error(`Unable to fetch sitemap: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

if (!urls.length) {
  throw new Error("No canonical URLs found in sitemap.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }),
});

if (!response.ok && response.status !== 202) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed: ${response.status} ${body}`);
}

console.log(`IndexNow accepted ${urls.length} canonical URLs with status ${response.status}.`);
