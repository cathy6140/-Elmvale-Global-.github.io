import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";
  const categories = fr
    ? [
        ["Packaging skincare primaire", "Flacons, pots, airless, droppers et composants pour sérums, crèmes et soins.", "/Image ChatGPT 22 oct. 2026 à 17_15_26.png"],
        ["Packaging parfum", "Flacons verre, pompes, capots, cols, décoration et étuis pour projets fragrance.", "/Image ChatGPT 22 oct. 2026 à 17_15_40.png"],
        ["Tubes & distribution", "Tubes, pompes, sprays et systèmes de distribution pour soins et cosmétiques.", "/Nature morte cosmétique en lumière naturelle.png"],
        ["Mask & sachet packaging", "Pochettes sheet mask, eye patch et sachets échantillons.", "/Image ChatGPT 22 oct. 2026 à 17_16_00.png"],
        ["Packaging secondaire", "Cartons, coffrets, beauty sets et solutions de présentation retail.", "/Image ChatGPT 22 oct. 2026 à 17_16_14.png"],
        ["Options plus durables", "Recherche d’options PCR, papier FSC, mono-matériau ou réduction matière selon faisabilité.", "/Cosmétiques écoresponsables sous lumière naturelle.png"]
      ]
    : [
        ["Skincare Primary Packaging", "Bottles, jars, airless systems, droppers and components for serums, creams and treatments.", "/Image ChatGPT 22 oct. 2026 à 17_15_26.png"],
        ["Fragrance Packaging", "Glass bottles, pumps, caps, collars, decoration and cartons for fragrance projects.", "/Image ChatGPT 22 oct. 2026 à 17_15_40.png"],
        ["Tubes & Dispensing", "Tubes, pumps, sprayers and dispensing systems for skincare and cosmetics.", "/Nature morte cosmétique en lumière naturelle.png"],
        ["Mask & Sachet Packaging", "Sheet mask pouches, eye patch packs and sample sachets.", "/Image ChatGPT 22 oct. 2026 à 17_16_00.png"],
        ["Secondary Packaging", "Cartons, boxes, beauty sets and retail presentation solutions.", "/Image ChatGPT 22 oct. 2026 à 17_16_14.png"],
        ["More Sustainable Options", "Source PCR, FSC paper, mono-material or material-reduction options where feasible.", "/Cosmétiques écoresponsables sous lumière naturelle.png"]
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "PACKAGING" : "PACKAGING"}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">
          {fr ? "Catégories de packaging que nous pouvons sourcer" : "Packaging Categories We Can Source"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          {fr
            ? "Nous ne limitons pas le sourcing à un catalogue fixe. Partagez votre référence ou besoin et nous recherchons les options fabricants les plus pertinentes."
            : "We are not limited to a fixed catalog. Share a reference or requirement and we will search for relevant manufacturing options."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([title, desc, image]) => (
            <div key={title} className="overflow-hidden bg-white rounded-2xl border border-stone-200">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl text-brand-dark mb-3">{title}</h2>
                <p className="text-stone-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8">
        <Link to="/sourcing" className="border border-stone-200 rounded-3xl p-8 hover:shadow-md transition">
          <h2 className="font-serif text-3xl text-brand-dark mb-3">{fr ? "Besoin d’aide pour sourcer ?" : "Need Help Sourcing?"}</h2>
          <p className="text-stone-600">{fr ? "Découvrez comment nous recherchons et comparons les options fabricants." : "See how we search and compare manufacturing options."}</p>
        </Link>
        <Link to="/fragrance-packaging" className="border border-stone-200 rounded-3xl p-8 hover:shadow-md transition">
          <h2 className="font-serif text-3xl text-brand-dark mb-3">{fr ? "Projet parfum ?" : "Fragrance Project?"}</h2>
          <p className="text-stone-600">{fr ? "Voir nos capacités de sourcing pour flacons et composants parfum." : "Explore our sourcing scope for fragrance bottles and components."}</p>
        </Link>
      </section>
    </div>
  );
};

export default Products;
