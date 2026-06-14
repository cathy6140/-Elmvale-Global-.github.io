import React from "react";
import { content } from "../content";

type Props = {
  lang: string;
};

const normalizeLang = (lang: string): "en" | "fr" => {
  const clean = String(lang || "").replace("#/", "").trim();
  return clean.startsWith("en") ? "en" : "fr";
};

const Solutions: React.FC<Props> = ({ lang }) => {
  const safeLang = normalizeLang(lang);

  // ✅ FIX: 真实数据路径在 home.solutions
  const pageContent =
    content?.[safeLang]?.home?.solutions ||
    content?.en?.home?.solutions ||
    content?.fr?.home?.solutions;

  // ✅ 防止白屏
  if (!pageContent) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        ⚠️ Solutions content not found
        <br />
        language: {safeLang}
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="py-16 px-6 text-center bg-white">
        <h1 className="text-4xl font-bold mb-4">
          {pageContent.title}
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          {pageContent.intro}
        </p>
      </section>

      {/* GRID SECTION */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {pageContent.items?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Solutions;
