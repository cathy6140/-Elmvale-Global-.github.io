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
              : "Sustainable Packaging Systems for Skincare Brands"}
          </h1>

          <p className="text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {language === "fr"
              ? "Solutions packaging pour skincare, masques hydrogel et marques K-beauty."
              : "From hydrogel mask packaging to full skincare systems for global K-beauty brands."}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            
            <Link
              to="/skincare-mask-packaging"
              className="bg-brand-dark text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              {language === "fr"
                ? "Packaging masques hydrogel"
                : "Explore Hydrogel Mask Packaging"}
            </Link>

            <Link
              to="/solutions"
              className="border border-stone-400 px-8 py-3 rounded-full hover:bg-stone-100 transition"
            >
              {language === "fr" ? "Solutions" : "View All Systems"}
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
                : "Complete systems for skincare, mask and beauty launches."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Focus masques hydrogel"
                : "Hydrogel Mask Entry Point"}
            </h3>
            <p className="text-stone-600">
              {language === "fr"
                ? "Point d’entrée pour les marques K-beauty."
                : "Key entry category for K-beauty brand development."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Matériaux durables"
                : "Sustainable Materials"}
            </h3>
            <p className="text-stone-600">
              PCR, FSC paper, mono-material structures for global compliance.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MASK ENTRY CTA (VERY IMPORTANT) ================= */}
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
                ? "Découvrez notre solution d’emballage pour masques hydrogel et sheet masks."
                : "Dedicated packaging system for hydrogel masks, sheet masks and eye patch products."}
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
              ? "Nos systèmes d’emballage"
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
              ? "Contactez-nous pour développer votre packaging skincare."
              : "Contact us to develop your skincare packaging system."}
          </p>

          <Link
            to="/contact"
            className="bg-white text-stone-900 px-8 py-3 rounded-full font-medium hover:bg-stone-200 transition"
          >
            {language === "fr" ? "Contact" : "Get in Touch"}
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;
