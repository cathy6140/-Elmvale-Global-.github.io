import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { content } from "../content";
import React, { useContext, useEffect } from "react";
import { setSeoMeta } from "../seo";

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].products;

  useEffect(() => {
    if (language === "fr") {
      setSeoMeta(
        "Elmvale Global – Flacons, pots, tubes et pompes pour cosmétiques",
        "Sélection de flacons, pots, tubes, sachets, pompes et bouchons pour soins et maquillage, avec des options recyclables et adaptées aux formules sensibles."
      );
    } else {
      setSeoMeta(
        "Elmvale Global – Bottles, jars, tubes and pumps for cosmetics",
        "Range of cosmetic bottles, jars, tubes, sachets, pumps and closures with options for recyclable materials and formula-sensitive applications."
      );
    }
  }, [language]);

  const images = [
    "/flacons-pots-product.png",           // 01 Flacons & Pots / Bottles & Jars
    "/tubes-sachets-product.png",          // 02 Tubes & Sachets
    "/pompes-distributeurs-product.png",   // 03 Pompes & Distributeurs
    "/bouchons-fermetures-product.png",    // 04 Bouchons & Fermetures
  ];

  return (
    <div className="bg-brand-cream pb-0">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-10">
          {t.intro.title}
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl font-light">
          {t.intro.desc}
        </p>
      </section>

      {/* Categories */}
      <div className="space-y-0">
        {t.categories.map((cat, idx) => {
          const no = String(idx + 1).padStart(2, "0");

          return (
            <section
              key={idx}
              className="group flex flex-col md:flex-row w-full border-t border-stone-200 last:border-b"
            >
              {/* Text Section */}
              <div
                className={[
                  "w-full md:w-1/2",
                  "p-10 md:p-16 lg:p-20",
                  "flex flex-col justify-center",
                  "min-h-[520px] md:min-h-[680px]",
                  idx % 2 === 1 ? "md:order-2 bg-white" : "bg-brand-cream",
                ].join(" ")}
              >
                {/* ✅ 数字：正常排版（不重合），并且在上方 */}
                <div className="flex-none mb-8 md:mb-10">
                  <div
                    aria-hidden="true"
                    className={[
                      "font-serif leading-none select-none",
                      "text-brand-dark/10",
                      "text-[110px] sm:text-[140px] md:text-[180px] lg:text-[220px]",
                    ].join(" ")}
                  >
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

              {/* Image Section */}
              <div
                className={[
                  "w-full md:w-1/2",
                  "overflow-hidden relative",
                  "min-h-[380px] md:min-h-[680px]",
                  idx % 2 === 1 ? "md:order-1" : "",
                  "bg-stone-100",
                ].join(" ")}
              >
                <img
                  src={images[idx]}
                  alt={cat.title}
                  className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.onerror = null;
                    img.src = "/elmvale-logo-1024.png";
                    img.style.objectFit = "contain";
                    img.style.background = "#ffffff";
                  }}
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition duration-700"></div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Quality & Customization */}
      <div className="bg-white py-24 border-t border-stone-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">
                {t.quality.title}
              </h3>
              <p className="text-stone-500 leading-relaxed font-light text-lg max-w-xl">
                {t.quality.desc}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">
                {t.customization.title}
              </h3>
              <p className="text-stone-500 leading-relaxed font-light text-lg max-w-xl">
                {t.customization.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
