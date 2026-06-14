import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../App";
import { content } from "../content";
import { setSeoMeta } from "../seo";

const normalizeLang = (lang: any): "en" | "fr" => {
  if (!lang) return "fr";

  return String(lang)
    .replace("#/", "")
    .trim() === "en"
    ? "en"
    : "fr";
};

const Solutions: React.FC = () => {
  const { language } = useContext(LanguageContext);

  // ================= CLEAN LANGUAGE =================
  const lang = normalizeLang(language);

  // ================= SAFE CONTENT ACCESS =================
  const pageContent =
    content?.[lang]?.solutions ??
    content?.en?.solutions ??
    content?.fr?.solutions;

  // ================= SEO =================
  useEffect(() => {
    setSeoMeta(
      lang === "fr"
        ? "Packaging cosmétique – systèmes skincare & K-beauty | Elmvale Global"
        : "Cosmetic packaging systems – skincare & K-beauty | Elmvale Global",
      lang === "fr"
        ? "Solutions packaging skincare et K-beauty pour marques globales"
        : "Skincare and K-beauty packaging systems for global brands"
    );
  }, [lang]);

  // ================= HARD GUARD =================
  if (!pageContent) {
    return (
      <div style={{ padding: 40 }}>
        ⚠️ Solutions content not found. Please check:
        <br />
        - language: {String(language)}
        <br />
        - normalized: {lang}
      </div>
    );
  }

  const images = [
    "/flacons-pots-product.png",
    "/tubes-sachets-product.png",
    "/pompes-distributeurs-product.png",
    "/bouchons-fermetures-product.png",
  ];

  return (
    <div className="bg-brand-cream pb-0">

      {/* HEADER（保持你原结构） */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-10">
          {pageContent.title}
        </h1>

        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl font-light">
          {pageContent.intro?.desc || pageContent.intro}
        </p>
      </section>

      {/* ================= CATEGORIES ================= */}
      <div className="space-y-0">
        {(pageContent.categories || []).map((cat: any, idx: number) => {
          const no = String(idx + 1).padStart(2, "0");

          return (
            <section
              key={idx}
              className="group flex flex-col md:flex-row w-full border-t border-stone-200 last:border-b"
            >

              {/* TEXT */}
              <div
                className={[
                  "w-full md:w-1/2",
                  "p-10 md:p-16 lg:p-20",
                  "flex flex-col justify-center",
                  "min-h-[520px] md:min-h-[680px]",
                  idx % 2 === 1 ? "md:order-2 bg-white" : "bg-brand-cream",
                ].join(" ")}
              >
                <div className="mb-8 md:mb-10">
                  <div className="font-serif text-[140px] text-brand-dark/10 leading-none">
                    {no}
                  </div>
                </div>

                <div className="max-w-xl">
                  <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8">
                    {cat.title}
                  </h2>

                  <p className="text-stone-600 text-lg font-light leading-loose">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 bg-stone-100">
                <img
                  src={images[idx]}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>

            </section>
          );
        })}
      </div>

      {/* ================= QUALITY ================= */}
      <div className="bg-white py-24 border-t border-stone-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">
                {pageContent.quality?.title}
              </h3>
              <p className="text-stone-500 text-lg font-light">
                {pageContent.quality?.desc}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">
                {pageContent.customization?.title}
              </h3>
              <p className="text-stone-500 text-lg font-light">
                {pageContent.customization?.desc}
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Solutions;
