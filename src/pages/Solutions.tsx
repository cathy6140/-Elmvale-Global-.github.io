import React from "react";
import { content } from "../content";
import { Link } from "react-router-dom";

type Props = {
  lang: string;
};

const normalizeLang = (lang: string): "en" | "fr" => {
  const clean = String(lang || "").replace("#/", "").trim();
  return clean.startsWith("en") ? "en" : "fr";
};

const Solutions: React.FC<Props> = ({ lang }) => {
  const safeLang = normalizeLang(lang);

  // ✅ FIX: content location
  const pageContent =
    content?.[safeLang]?.home?.solutions ||
    content?.en?.home?.solutions ||
    content?.fr?.home?.solutions;

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

      {/* ================= HERO ================= */}
      <section className="py-16 px-6 text-center bg-white">
        <h1 className="text-4xl font-bold mb-4">
          {pageContent.title}
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          {pageContent.intro}
        </p>

        {/* 🔥 NEW: 导流到 Products（关键优化） */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            {safeLang === "fr" ? "Voir les produits" : "Explore Products"}
          </Link>

          <Link
            to="/contact"
            className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            {safeLang === "fr" ? "Contact" : "Get Quote"}
          </Link>
        </div>
      </section>

      {/* ================= SYSTEM GRID ================= */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {pageContent.items?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* 🔥 NEW: 每个 system → 产品导流 */}
              <Link
                to="/products"
                className="text-sm text-blue-600 hover:underline"
              >
                View related products →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          {safeLang === "fr"
            ? "Besoin d’une solution complète ?"
            : "Need a complete packaging solution?"}
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {safeLang === "fr"
            ? "Découvrez nos produits ou contactez-nous pour un devis."
            : "Explore our products or contact us for a tailored quote."}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/products"
            className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            {safeLang === "fr" ? "Produits" : "Products"}
          </Link>

          <Link
            to="/contact"
            className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            {safeLang === "fr" ? "Contact" : "Contact Us"}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
