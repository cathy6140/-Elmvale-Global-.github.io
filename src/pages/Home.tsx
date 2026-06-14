import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
            {language === "fr"
              ? "Emballages durables pour marques beauté"
              : "Sustainable Packaging Systems for Skincare & K-Beauty Brands"}
          </h1>

          <p className="text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {language === "fr"
              ? "Solutions packaging pour skincare, masques hydrogel et marques K-beauty."
              : "From hydrogel mask packaging to full skincare systems and sustainable packaging solutions for global brands."}
          </p>

          {/* 🔥 PRIMARY CTA STRUCTURE（升级重点） */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <Link
              to="/products"
              className="bg-brand-dark text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              {language === "fr"
                ? "Explorer les produits"
                : "Explore Products"}
            </Link>

            <Link
              to="/solutions"
              className="border border-stone-400 px-8 py-3 rounded-full hover:bg-stone-100 transition"
            >
              {language === "fr" ? "Solutions" : "View Systems"}
            </Link>

            <Link
              to="/skincare-mask-packaging"
              className="text-brand-dark underline underline-offset-4 hover:opacity-70 transition"
            >
              {language === "fr"
                ? "Focus masques hydrogel"
                : "Mask Packaging Focus"}
            </Link>

          </div>
        </div>
      </section>

      {/* ================= VALUE PROPS ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Systèmes packaging"
                : "Packaging Systems"}
            </h3>
            <p className="text-stone-600">
              {language === "fr"
                ? "Structures complètes pour skincare et K-beauty."
                : "Complete packaging systems for skincare and beauty brands."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Spécialiste K-beauty"
                : "K-Beauty Expertise"}
            </h3>
            <p className="text-stone-600">
              Hydrogel masks, sheet masks and OEM/ODM packaging solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Matériaux durables"
                : "Sustainable Materials"}
            </h3>
            <p className="text-stone-600">
              PCR plastics, FSC paper, mono-material structures for EU compliance.
            </p>
          </div>

        </div>
      </section>

      {/* ================= STRATEGIC ENTRY BLOCK ================= */}
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-stone-500 mb-3">
              K-BEAUTY ENTRY POINT
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-3">
              Hydrogel Mask Packaging Solutions
            </h2>

            <p className="text-stone-600 max-w-2xl">
              {language === "fr"
                ? "Solution dédiée pour masques hydrogel et sheet masks."
                : "Dedicated packaging system for hydrogel masks, sheet masks and K-beauty launches."}
            </p>
          </div>

          <Link
            to="/skincare-mask-packaging"
            className="bg-brand-dark text-white px-8 py-3 rounded-full whitespace-nowrap hover:opacity-90 transition"
          >
            {language === "fr" ? "Explorer" : "Explore Now"}
          </Link>

        </div>
      </section>

      {/* ================= SYSTEM OVERVIEW ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="font-serif text-3xl text-center mb-12">
            {language === "fr"
              ? "Nos systèmes"
              : "Our Packaging Systems"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: language === "fr" ? "Système masques" : "Mask System",
                desc: language === "fr"
                  ? "Masques hydrogel et sheet masks."
                  : "Hydrogel mask & sheet mask packaging.",
              },
              {
                title: language === "fr" ? "Système skincare" : "Skincare System",
                desc: "Bottles, jars, airless packaging.",
              },
              {
                title: language === "fr" ? "Système tubes" : "Tube System",
                desc: "Tubes, pumps, dispensers.",
              },
              {
                title: language === "fr" ? "Système secondaire" : "Secondary System",
                desc: "Cartons and beauty boxes.",
              },
              {
                title: language === "fr" ? "Système durable" : "Sustainable System",
                desc: "PCR, FSC paper, recyclable packaging.",
              },
              {
                title: language === "fr" ? "Solutions sur mesure" : "Custom Solutions",
                desc: "Tailored packaging development.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-stone-200 rounded-2xl p-6 hover:shadow-sm transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}

          </div>

          {/* 🔥 NEW CTA LINK */}
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="text-brand-dark underline underline-offset-4 hover:opacity-70"
            >
              {language === "fr"
                ? "Voir tous les produits"
                : "View all products →"}
            </Link>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="font-serif text-3xl mb-4">
            {language === "fr"
              ? "Prêt à lancer votre projet ?"
              : "Ready to Start Your Packaging Project?"}
          </h2>

          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous pour votre projet packaging."
              : "Contact us to develop your skincare packaging solution."}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">

            <Link
              to="/products"
              className="bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-stone-200 transition"
            >
              {language === "fr" ? "Produits" : "Products"}
            </Link>

            <Link
              to="/contact"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-stone-900 transition"
            >
              {language === "fr" ? "Contact" : "Get in Touch"}
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
