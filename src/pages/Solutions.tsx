import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../App";
import { content } from "../content";
import { setSeoMeta } from "../seo";

const Solutions: React.FC = () => {
  const { language } = useContext(LanguageContext);

  // ✅ 关键：清洗 language，防止 "fr " / undefined
  const lang = (language || "en").trim();

  // ✅ 安全读取 content（防 crash 核心）
  const pageContent =
    content?.[lang]?.solutions ||
    content?.en?.solutions;

  // ✅ SEO
  useEffect(() => {
    if (lang === "fr") {
      setSeoMeta(
        "Packaging cosmétique – systèmes skincare & K-beauty | Elmvale Global",
        "Solutions packaging pour marques skincare : flacons, tubes, pompes et packaging durable."
      );
    } else {
      setSeoMeta(
        "Cosmetic packaging systems – skincare & K-beauty | Elmvale Global",
        "Skincare packaging systems: bottles, tubes, pumps and sustainable packaging solutions."
      );
    }
  }, [lang]);

  // ❗ 防止白屏（关键）
  if (!pageContent) {
    return (
      <div style={{ padding: 40, fontSize: 16 }}>
        ⚠️ Content loading error: solutions data not found.
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
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-10">
          {pageContent.intro.title}
        </h1>

        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl font-light">
          {pageContent.intro.desc}
        </p>
      </section>

      {/* Categories */}
      <div className="space-y-0">
        {pageContent.categories?.map((cat: any, idx: number) => {
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
                />
              </div>
            </section>
          );
        })}
      </div>

      {/* Quality */}
      <div className="bg-white py-24 border-t border-stone-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">
                {pageContent.quality.title}
              </h3>
              <p className="text-stone-500 text-lg font-light">
                {pageContent.quality.desc}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">
                {pageContent.customization.title}
              </h3>
              <p className="text-stone-500 text-lg font-light">
                {pageContent.customization.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Solutions;
