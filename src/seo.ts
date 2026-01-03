// src/seo.ts
export function setSeoMeta(title: string, description: string) {
  if (typeof document === "undefined") return;

  document.title = title;

  // 找 <meta name="description">
  let meta = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]'
  );
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}
