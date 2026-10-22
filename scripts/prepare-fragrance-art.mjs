import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const sourceDir = "scripts/fragrance-art-v3";
const outputDir = "public/images";
const outputPath = join(outputDir, "fragrance-categories.avif");

const parts = (await readdir(sourceDir))
  .filter((name) => name.endsWith(".b64"))
  .sort();

if (parts.length !== 8) {
  throw new Error(`Expected 8 fragrance artwork chunks, found ${parts.length}`);
}

const base64 = (
  await Promise.all(parts.map((name) => readFile(join(sourceDir, name), "utf8")))
).join("").replace(/\s+/g, "");

const bytes = Buffer.from(base64, "base64");

if (bytes.length < 10000) {
  throw new Error("Fragrance artwork decode produced an unexpectedly small file.");
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, bytes);

console.log(`Prepared fragrance artwork: ${outputPath} (${bytes.length} bytes)`);
