import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createHash } from "node:crypto";

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

if (bytes.length !== 18871) {
  throw new Error(`Fragrance artwork size mismatch: ${bytes.length} bytes`);
}

const sha256 = createHash("sha256").update(bytes).digest("hex");
if (sha256 !== "9d82b4bde8f5e9c168aa9f83df5f5dae7b4734be0e57d3c611c07effafa95137") {
  throw new Error(`Fragrance artwork checksum mismatch: ${sha256}`);
}

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, bytes);

console.log(`Prepared fragrance artwork: ${outputPath} (${bytes.length} bytes)`);
