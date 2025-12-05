import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { content } from "../content";

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].products;

  // ✅ 建议：长期稳定 = 用本地图片（public 里放好即可）
  // 如果你暂时还没放本地图片，可以先用 unsplash；但一定要有 onError 回退
  const images = [
    "https://images.unsplash.com/photo-1615396659714-f446d51c416e?q=80&w=1800&auto=format&fit=crop", // Bottles
    "https://images.unsplash.com/photo-1556228720-1987df6a5e1a?q=80&w=1800&auto=format&fit=crop", // Tubes
    "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1800&auto=format&fit=crop", // Pumps
    "https://images.unsplash.com/photo-1605309608249-166e4a2e5532?q=80&w=1800&auto=format&fit=crop", // Caps
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
        {t.categories.map((cat, idx) => (
          <section
            key={idx}
            className="group flex flex-col md:flex-row w-full border-t border-stone-200 last:border-b"
          >
            {/* Text Section */}
            <div
              className={[
                "relative w-full md:w-1/2",
                "p-10 md:p-16 lg:p-20",
                "flex flex-col justify-center",
                "min-h-[520px] md:min-h-[680px]", // ✅ 更稳，不用 80vh 固定高度
                idx % 2 === 1 ? "md:order-2 bg-white" : "bg-brand-cream",
              ].join(" ")}
            >
              {/* ✅ 水印数字：absolute，不参与排版 → 不会跑偏 */}
              {/* ✅ 水印数字：固定在上方 + 在内容后面 */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute top-8 left-8 md:top-10 md:left-12
                  font-serif
                  text-[clamp(64px,10vw,140px)]
                  leading-none
                  text-brand-dark/10
                  select-none
                  -z-10
                "
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              
              {/* ✅ 正文层级在上面 */}
              <div className="relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8">
                  {cat.title}
                </h2>
                <p className="text-stone-600 text-lg font-light leading-loose max-w-xl">
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
                "bg-stone-100", // ✅ 图片没出来也不会“空白一片”
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
                  // ✅ 回退到你仓库 public 根目录的 logo（你已经有 elmvale-logo-1024.png）
                  img.src = "/elmvale-logo-1024.png";
                  img.style.objectFit = "contain";
                  img.style.background = "#ffffff";
                }}
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition duration-700"></div>
            </div>
          </section>
        ))}
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
