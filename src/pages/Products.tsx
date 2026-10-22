import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const primaryCards = fr
    ? [
        {
          title: "Packaging skincare primaire",
          desc: "Flacons, pots, airless, droppers et composants pour sérums, crèmes et soins.",
          image: "/flacons-pots-product.png",
        },
        {
          title: "Tubes & distribution",
          desc: "Tubes, pompes, sprays et systèmes de distribution pour soins et cosmétiques.",
          image: "/pompes-distributeurs-product.png",
        },
        {
          title: "Tubes & formats souples",
          desc: "Tubes, sachets et formats souples pour soins, masques et échantillons.",
          image: "/tubes-sachets-product.png",
        },
      ]
    : [
        {
          title: "Skincare Primary Packaging",
          desc: "Bottles, jars, airless systems, droppers and components for serums, creams and treatments.",
          image: "/flacons-pots-product.png",
        },
        {
          title: "Dispensing Systems",
          desc: "Pumps, sprayers and dispensing systems for skincare and cosmetic applications.",
          image: "/pompes-distributeurs-product.png",
        },
        {
          title: "Tubes & Flexible Formats",
          desc: "Tubes, sachets and flexible formats for skincare, masks and sampling.",
          image: "/tubes-sachets-product.png",
        },
      ];

  const supportingCards = fr
    ? [
        ["Packaging secondaire", "Cartons, coffrets, beauty sets et solutions de présentation retail."],
        ["Options plus durables", "Recherche d’options PCR, papier FSC, mono-matériau ou réduction matière selon faisabilité."],
      ]
    : [
        ["Secondary Packaging", "Cartons, boxes, beauty sets and retail presentation solutions."],
        ["More Sustainable Options", "PCR, FSC paper, mono-material or material-reduction options where feasible."],
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">PACKAGING</p>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6 max-w-4xl">
          {fr ? "Les catégories de packaging que nous pouvons sourcer" : "Packaging Categories We Can Source"}
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Nous ne travaillons pas à partir d’un catalogue fixe. Partagez votre référence, votre format ou votre objectif projet et nous recherchons les options fabricants les plus pertinentes."
            : "We are not limited to a fixed catalog. Share a reference, format or project requirement and we will search for relevant manufacturing options."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-18 md:py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="uppercase text-[10px] tracking-[0.28em] text-stone-400 mb-3">
                {fr ? "BEAUTÉ & SKINCARE" : "BEAUTY & SKINCARE"}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
                {fr ? "Packaging primaire & systèmes de distribution" : "Primary Packaging & Dispensing"}
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {primaryCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[26px] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(2,44,34,0.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.92] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-brand-dark mb-3">{card.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
          <div className="rounded-[28px] border border-stone-200 bg-white p-8 md:p-10">
            <p className="uppercase text-[10px] tracking-[0.28em] text-stone-400 mb-4">
              {fr ? "PACKAGING PARFUM" : "FRAGRANCE PACKAGING"}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-5">
              {fr ? "Un univers packaging à part entière" : "A Dedicated Packaging Category"}
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl mb-8">
              {fr
                ? "Flacons verre, pompes, capots, cols, décoration et packaging secondaire demandent une lecture plus spécifique du projet. Nous avons donc conservé un espace dédié au parfum."
                : "Glass bottles, pumps, caps, collars, decoration and secondary packaging often require a more specific project approach, so fragrance has its own dedicated space."}
            </p>
            <Link
              to="/fragrance-packaging"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-dark"
            >
              {fr ? "Voir le packaging parfum" : "Explore fragrance packaging"}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-stone-900 min-h-[320px]">
            <img
              src="/bouchons-fermetures-product.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover saturate-[0.9] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-10">
            <p className="uppercase text-[10px] tracking-[0.28em] text-stone-400 mb-3">
              {fr ? "AUTOUR DU PACKAGING" : "SUPPORTING PACKAGING"}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">
              {fr ? "Des options qui complètent le pack primaire" : "Options Beyond the Primary Pack"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supportingCards.map(([title, desc], index) => (
              <div key={title} className="rounded-[24px] border border-stone-200 bg-white p-7 md:p-8">
                <div className="text-[10px] tracking-[0.2em] text-stone-300 mb-8">0{index + 1}</div>
                <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
                <p className="text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[28px] border border-stone-200 bg-white px-8 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="uppercase text-[10px] tracking-[0.28em] text-stone-400 mb-3">
              {fr ? "VOTRE PROJET" : "YOUR PROJECT"}
            </p>
            <h2 className="font-serif text-3xl text-brand-dark mb-3">
              {fr ? "Vous avez une référence précise ?" : "Already Have a Specific Reference?"}
            </h2>
            <p className="text-stone-600">
              {fr
                ? "Envoyez une photo, une quantité estimée et vos contraintes principales pour démarrer le sourcing."
                : "Send a reference image, estimated quantity and key requirements to start the sourcing process."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark/90 transition"
            >
              {fr ? "Envoyer un brief" : "Send a Brief"}
            </Link>
            <Link
              to="/sourcing"
              className="border border-stone-300 text-brand-dark px-6 py-3 rounded-full text-sm hover:border-brand-dark transition"
            >
              {fr ? "Voir notre méthode" : "How We Source"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
