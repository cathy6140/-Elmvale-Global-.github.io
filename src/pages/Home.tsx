import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[520px] md:min-h-[620px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero-home.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
      
        {/* Optional left gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
      
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl text-left">
      
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
              {language === "fr"
                ? "Emballages durables pour marques beauté"
                : "Sustainable Packaging for Skincare"}
            </h1>
      
            <div className="border-l-4 border-emerald-500 pl-6">
              <p className="text-white/90 max-w-2xl text-lg md:text-xl leading-relaxed">
                {language === "fr"
                  ? "Nous accompagnons les marques de beauté, les entreprises K-beauty et les fabricants OEM/ODM dans le sourcing de packagings cosmétiques, avec des délais fiables et une documentation claire."
                  : "We help beauty brands, K-beauty companies, and OEM/ODM manufacturers source cosmetic packaging with reliable lead times and clear documentation."}
              </p>
            </div>
      
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/products"
                className="bg-white text-brand-dark px-8 py-3 rounded-full font-medium hover:bg-stone-100 transition text-center"
              >
                {language === "fr"
                  ? "Explorer les produits"
                  : "Explore Products"}
              </Link>
      
              <Link
                to="/contact"
                className="border border-white/70 text-white px-8 py-3 rounded-full hover:bg-white hover:text-brand-dark transition text-center"
              >
                {language === "fr" ? "Demander un devis" : "Request Quote"}
              </Link>
            </div>
      
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPS ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Produits packaging skincare"
                : "Skincare Packaging Products"}
            </h3>
            <p className="text-stone-600">
              {language === "fr"
                ? "Flacons, pots, airless, droppers, tubes et systèmes de distribution pour marques skincare."
                : "Bottles, jars, airless systems, droppers, tubes and dispensing systems for skincare brands."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Focus masques & K-beauty"
                : "Mask & K-Beauty Focus"}
            </h3>
            <p className="text-stone-600">
              {language === "fr"
                ? "Pochettes sheet mask, packaging eye patch et sachets échantillons pour lancements K-beauty."
                : "Sheet mask pouches, eye patch packaging and sachet samples for K-beauty launches."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              {language === "fr"
                ? "Matériaux durables"
                : "Sustainable Materials"}
            </h3>
            <p className="text-stone-600">
              {language === "fr"
                ? "PCR, papier FSC, mono-matériaux et conception recyclable pour les exigences internationales."
                : "PCR plastics, FSC paper, mono-material structures and recyclable design for global requirements."}
            </p>
          </div>

        </div>
      </section>

      {/* ================= PRODUCT CATEGORY ENTRY ================= */}
      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-stone-500 mb-3">
              {language === "fr" ? "CATÉGORIES PRODUITS" : "PRODUCT CATEGORIES"}
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-3">
              {language === "fr"
                ? "Cinq catégories pour vos projets skincare"
                : "Five Packaging Categories for Skincare Projects"}
            </h2>

            <p className="text-stone-600 max-w-2xl">
              {language === "fr"
                ? "Découvrez nos systèmes de packaging pour masques, packaging primaire, tubes, packaging secondaire et solutions durables."
                : "Explore mask packaging, primary skincare packaging, tubes and dispensing, secondary packaging and sustainable solutions."}
            </p>
          </div>

          <Link
            to="/products"
            className="bg-brand-dark text-white px-8 py-3 rounded-full whitespace-nowrap hover:opacity-90 transition"
          >
            {language === "fr" ? "Voir les produits" : "View Products"}
          </Link>

        </div>
      </section>

      {/* ================= PRODUCT OVERVIEW ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="font-serif text-3xl text-center mb-12">
            {language === "fr"
              ? "Nos catégories packaging"
              : "Our Packaging Categories"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title:
                  language === "fr"
                    ? "Mask Packaging Systems"
                    : "Mask Packaging Systems",
                desc:
                  language === "fr"
                    ? "Pochettes sheet mask, eye patch packaging et sachets échantillons."
                    : "Sheet mask pouches, eye patch packaging and sachet samples.",
              },
              {
                title:
                  language === "fr"
                    ? "Packaging primaire skincare"
                    : "Skincare Primary Packaging",
                desc:
                  language === "fr"
                    ? "Flacons, pots, airless et droppers."
                    : "Bottles, jars, airless systems and droppers.",
              },
              {
                title:
                  language === "fr"
                    ? "Tubes & systèmes de distribution"
                    : "Tubes & Dispensing Systems",
                desc:
                  language === "fr"
                    ? "Tubes, pompes et sprays pour crèmes, gels et soins."
                    : "Tubes, pumps and sprayers for creams, gels and skincare products.",
              },
              {
                title:
                  language === "fr"
                    ? "Packaging secondaire"
                    : "Secondary Packaging",
                desc:
                  language === "fr"
                    ? "Cartons, gift boxes, beauty sets et retail packaging."
                    : "Cartons, gift boxes, beauty sets and retail packaging.",
              },
              {
                title:
                  language === "fr"
                    ? "Solutions packaging durables"
                    : "Sustainable Packaging Solutions",
                desc:
                  language === "fr"
                    ? "PCR, mono-matériaux, papier FSC et design recyclable."
                    : "PCR plastics, mono-material, FSC paper and recyclable design.",
              },
              {
                title:
                  language === "fr"
                    ? "Développement sur mesure"
                    : "Custom Packaging Development",
                desc:
                  language === "fr"
                    ? "Sélection matériaux, impression, finition et développement adapté à votre marque."
                    : "Material selection, printing, finishing and brand-specific packaging development.",
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

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="text-brand-dark underline underline-offset-4 hover:opacity-70"
            >
              {language === "fr"
                ? "Voir toutes les catégories produits →"
                : "View all product categories →"}
            </Link>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      
          <h2 className="font-serif text-3xl mb-4 text-brand-dark">
            {language === "fr"
              ? "Prêt à développer votre projet packaging ?"
              : "Ready to Start Your Packaging Project?"}
          </h2>
      
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous pour développer une solution adaptée à vos produits skincare ou K-beauty."
              : "Contact us to develop a tailored packaging solution for your skincare or K-beauty brand."}
          </p>
      
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="bg-brand-dark text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              {language === "fr" ? "Voir les produits" : "View Products"}
            </Link>
      
            <Link
              to="/contact"
              className="border border-stone-400 text-brand-dark px-8 py-3 rounded-full hover:bg-white transition"
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
