import React from "react";
import { content } from "../content";

type Props = {
  lang: string;
};

const normalizeLang = (lang: string): "en" | "fr" => {
  const clean = String(lang || "").replace("#/", "").trim();
  return clean.startsWith("en") ? "en" : "fr";
};

const Products: React.FC<Props> = ({ lang }) => {
  const safeLang = normalizeLang(lang);

  const pageContent =
    content?.[safeLang]?.products ??
    content?.en?.products ??
    content?.fr?.products;

  if (!pageContent) {
    return (
      <div className="p-10 text-red-500">
        ⚠️ Products content not found
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="py-16 px-6 text-center bg-white">
        <h1 className="text-4xl font-bold mb-4">
          {pageContent.intro?.title}
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          {pageContent.intro?.desc}
        </p>

        {/* 🔥 导流：去 Solutions */}
        <div className="mt-6">
          <a
            href="/solutions"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Explore our packaging system solutions
          </a>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {pageContent.categories?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <button className="text-sm px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                Request Quote
              </button>

              {/* 🔥 导流：去对应 Solutions */}
              <div className="mt-4 text-xs text-gray-500">
                <a
                  href="/solutions"
                  className="hover:underline"
                >
                  View related system →
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-4">
            {pageContent.quality?.title}
          </h2>

          <p className="text-gray-600 mb-10">
            {pageContent.quality?.desc}
          </p>

          <h2 className="text-2xl font-bold mb-4">
            {pageContent.customization?.title}
          </h2>

          <p className="text-gray-600">
            {pageContent.customization?.desc}
          </p>

        </div>
      </section>

      {/* 🔥 FINAL CTA + RETURN TO SOLUTIONS */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Packaging Project
        </h2>

        <p className="text-gray-300 mb-6">
          Need help choosing the right system? Explore our solutions first.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
          >
            Get Quote
          </a>

          {/* 🔥 Solutions 导流 */}
          <a
            href="/solutions"
            className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            View Solutions
          </a>
        </div>
      </section>

    </div>
  );
};

export default Products;
