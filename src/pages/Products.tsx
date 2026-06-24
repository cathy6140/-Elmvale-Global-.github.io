import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

type ProductCategory = {
  title: string;
  badge: string;
  desc: string;
  items: string[];
};

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const productCategories: ProductCategory[] =
    language === "fr"
      ? [
          {
            title: "Mask Packaging Systems",
            badge: "Entrée K-Beauty",
            desc:
              "Solutions d’emballage pour sheet masks, eye patches et sachets échantillons, adaptées aux lancements skincare et K-beauty.",
            items: [
              "Sheet mask pouch",
              "Eye patch packaging",
              "Sachet samples",
            ],
          },
          {
            title: "Packaging primaire skincare",
            badge: "Packaging primaire",
            desc:
              "Packaging primaire pour formules skincare, incluant flacons, pots, airless et droppers.",
            items: [
              "Bottles",
              "Jars",
              "Airless",
              "Droppers",
            ],
          },
          {
            title: "Tubes & systèmes de distribution",
            badge: "Dispensing",
            desc:
              "Solutions tubes et systèmes de distribution pour crèmes, gels, lotions, solaires et soins.",
            items: [
              "Tubes",
              "Pumps",
              "Sprayers",
            ],
          },
          {
            title: "Packaging secondaire",
            badge: "Retail Ready",
            desc:
              "Packaging secondaire pour présentation retail, coffrets cadeaux, kits promotionnels et lancements beauté.",
            items: [
              "Cartons",
              "Gift boxes",
              "Beauty sets",
              "Retail packaging",
            ],
          },
          {
            title: "Solutions packaging durables",
            badge: "Sustainable",
            desc:
              "Options packaging utilisant PCR, mono-matériaux, papier FSC et principes de design recyclable.",
            items: [
              "PCR plastics",
              "Mono-material",
              "FSC paper",
              "Recyclable design",
            ],
          },
        ]
      : [
          {
            title: "Mask Packaging Systems",
            badge: "Core K-Beauty Entry",
            desc:
              "Packaging solutions for sheet masks, eye patches and sachet samples, designed for skincare and K-beauty product launches.",
            items: [
              "Sheet mask pouch",
              "Eye patch packaging",
              "Sachet samples",
            ],
          },
          {
            title: "Skincare Primary Packaging",
            badge: "Primary Packaging",
            desc:
              "Primary packaging for skincare formulas, including bottles, jars, airless systems and droppers.",
            items: [
              "Bottles",
              "Jars",
              "Airless",
              "Droppers",
            ],
          },
          {
            title: "Tubes & Dispensing Systems",
            badge: "Dispensing",
            desc:
              "Tube and dispensing solutions for creams, gels, lotions, sunscreen and treatment products.",
            items: [
              "Tubes",
              "Pumps",
              "Sprayers",
            ],
          },
          {
            title: "Secondary Packaging",
            badge: "Retail Ready",
            desc:
              "Secondary packaging for retail presentation, gift sets, promotional kits and beauty product launches.",
            items: [
              "Cartons",
              "Gift boxes",
              "Beauty sets",
              "Retail packaging",
            ],
          },
          {
            title: "Sustainable Packaging Solutions",
            badge: "Sustainable Options",
            desc:
              "Packaging options using PCR plastics, mono-material structures, FSC paper and recyclable design principles.",
            items: [
              "PCR plastics",
              "Mono-material",
              "FSC paper",
              "Recyclable design",
            ],
          },
        ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
            {language === "fr" ? "PRODUITS PACKAGING" : "PACKAGING PRODUCTS"}
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-5">
            {language === "fr"
              ? "Produits packaging pour skincare & K-beauty"
              : "Packaging Products for Skincare & K-Beauty Brands"}
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {language === "fr"
              ? "Découvrez nos cinq catégories principales : mask packaging, packaging primaire skincare, tubes, packaging secondaire et solutions durables."
              : "Explore our five core packaging categories: mask packaging, skincare primary packaging, tubes and dispensing, secondary packaging and sustainable solutions."}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-dark text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              {language === "fr" ? "Demander un devis" : "Request Quote"}
            </Link>

            <Link
              to="/compliance"
              className="border border-stone-400 px-6 py-3 rounded-full hover:bg-stone-100 transition"
            >
              {language === "fr"
                ? "Voir conformité"
                : "View Compliance"}
            </Link>
          </div>

        </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-stone-200"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3">
                {category.badge}
              </p>

              <h3 className="text-xl font-semibold mb-3 text-brand-dark">
                {category.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                {category.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="text-sm px-4 py-2 bg-brand-dark text-white rounded-full hover:opacity-90 transition inline-block"
              >
                {language === "fr" ? "Demander un devis" : "Request Quote"}
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brand-dark mb-4">
              {language === "fr"
                ? "Pourquoi travailler avec Elmvale Global ?"
                : "Why Work with Elmvale Global?"}
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === "fr"
                ? "Nous accompagnons les marques skincare dans le sourcing, la personnalisation, la qualité et la coordination de projets packaging internationaux."
                : "We support skincare brands with sourcing, customization, quality control and international packaging project coordination."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-stone-200 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">
                {language === "fr"
                  ? "Spécialisation skincare"
                  : "Skincare Focus"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {language === "fr"
                  ? "Nous nous concentrons sur les besoins packaging des marques skincare, beauty et K-beauty."
                  : "We focus on packaging needs for skincare, beauty and K-beauty brands."}
              </p>
            </div>

            <div className="border border-stone-200 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">
                {language === "fr"
                  ? "Personnalisation"
                  : "Customization"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {language === "fr"
                  ? "Matériaux, formats, impression, finition et design peuvent être adaptés à votre projet."
                  : "Materials, formats, printing, finishing and structure can be customized for your project."}
              </p>
            </div>

            <div className="border border-stone-200 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">
                {language === "fr"
                  ? "Qualité & conformité"
                  : "Quality & Compliance"}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {language === "fr"
                  ? "Nous soutenons les projets avec contrôle qualité, documentation et options durables."
                  : "We support projects with quality control, documentation and sustainable packaging options."}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 px-6 bg-stone-50 border-t border-stone-200 text-center">
        <div className="max-w-4xl mx-auto">
      
          <h2 className="text-3xl font-serif mb-4 text-brand-dark">
            {language === "fr"
              ? "Vous développez un nouveau projet packaging ?"
              : "Developing a New Packaging Project?"}
          </h2>
      
          <p className="text-stone-600 mb-8">
            {language === "fr"
              ? "Envoyez-nous votre brief produit, vos besoins matériaux ou vos objectifs de lancement."
              : "Send us your product brief, material requirements or launch goals. We will help you identify the right packaging direction."}
          </p>
      
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-brand-dark text-white rounded-full hover:opacity-90 transition"
            >
              {language === "fr" ? "Contact" : "Contact Us"}
            </Link>
      
            <Link
              to="/compliance"
              className="px-6 py-3 border border-stone-400 text-brand-dark rounded-full hover:bg-white transition"
            >
              {language === "fr"
                ? "Voir conformité"
                : "View Compliance"}
            </Link>
          </div>
      
        </div>
      </section>

    </div>
  );
};

export default Products;
