import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const steps = fr
    ? [
        ["01", "Partagez votre brief", "Type de produit, références, quantités, budget cible, finitions et calendrier."],
        ["02", "Sourcing fournisseurs", "Nous recherchons et comparons des options adaptées parmi notre réseau de fabricants."],
        ["03", "Échantillons & développement", "Coordination des échantillons, couleurs, décorations, composants et ajustements techniques."],
        ["04", "Production & qualité", "Suivi de production et coordination des contrôles et documents disponibles selon le projet."],
        ["05", "Préparation à l’expédition", "Coordination des exigences de livraison et des informations nécessaires à votre importation."]
      ]
    : [
        ["01", "Share your brief", "Product type, references, quantity, target cost, decoration and launch timing."],
        ["02", "Supplier sourcing", "We identify and compare suitable options across our manufacturing network."],
        ["03", "Sampling & development", "We coordinate samples, colors, decoration, components and technical adjustments."],
        ["04", "Production & quality", "We follow production and coordinate inspections and available documentation when required."],
        ["05", "Delivery preparation", "We coordinate shipment requirements and the information needed for your import process."]
      ];

  const focusCards = fr
    ? [
        {
          title: "Beauty & skincare",
          desc: "Flacons, pots, airless, droppers, tubes, pompes et packaging secondaire.",
          image: "/flacons-pots.png",
          to: "/products",
        },
        {
          title: "Parfum",
          desc: "Flacons verre, pompes, capots, cols, décorations, coffrets et développements sur mesure.",
          image: "/bouchons-fermetures.png",
          to: "/fragrance-packaging",
        },
        {
          title: "Coordination de projet",
          desc: "Sourcing, comparaison d’options, échantillons, personnalisation, suivi de production et documentation disponible.",
          image: "/about-hero.png",
          to: "/sourcing",
        },
      ]
    : [
        {
          title: "Beauty & Skincare",
          desc: "Bottles, jars, airless, droppers, tubes, pumps and secondary packaging.",
          image: "/flacons-pots.png",
          to: "/products",
        },
        {
          title: "Fragrance",
          desc: "Glass bottles, pumps, caps, collars, decoration, boxes and custom development.",
          image: "/bouchons-fermetures.png",
          to: "/fragrance-packaging",
        },
        {
          title: "Project Coordination",
          desc: "Sourcing, option comparison, sampling, customization, production follow-up and available documentation.",
          image: "/about-hero.png",
          to: "/sourcing",
        },
      ];

  const featureCards = fr
    ? [
        {
          title: "Sourcing packaging",
          desc: "Recherche fournisseurs, comparaison d’options, échantillons et coordination de projet.",
          to: "/sourcing",
        },
        {
          title: "Packaging parfum",
          desc: "Un espace dédié aux flacons, pompes, capots, cols, décorations et packaging secondaire pour projets fragrance.",
          to: "/fragrance-packaging",
        },
      ]
    : [
        {
          title: "Packaging Sourcing",
          desc: "Supplier search, option comparison, sampling and project coordination.",
          to: "/sourcing",
        },
        {
          title: "Fragrance Packaging",
          desc: "A dedicated space for bottles, pumps, caps, collars, decoration and secondary packaging for fragrance projects.",
          to: "/fragrance-packaging",
        },
      ];

  return (
    <div className="w-full bg-white">
      <section
        className="relative min-h-[560px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero-home.png')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120f]/85 via-[#241b16]/48 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(255,244,224,0.16),transparent_34%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.34em] text-[11px] text-white/[0.72] mb-6">
              {fr ? "SOURCING PACKAGING BEAUTÉ & PARFUM" : "PACKAGING SOURCING FOR BEAUTY & FRAGRANCE"}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[78px] text-white mb-8 leading-[1.03] tracking-[-0.02em]">
              {fr
                ? "Sourcing de packaging cosmétique & parfum"
                : "Cosmetic & Fragrance Packaging Sourcing"}
            </h1>
            <p className="text-white/[0.88] max-w-2xl text-lg md:text-xl leading-relaxed font-light">
              {fr
                ? "Elmvale Global accompagne les marques beauté, skincare et parfum dans la recherche et le développement de packaging, du sourcing et des échantillons jusqu’au suivi de production."
                : "Elmvale Global helps beauty, skincare and fragrance brands source and develop packaging, from supplier search and sampling to production follow-up."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/contact"
                className="bg-white text-brand-dark px-8 py-3.5 rounded-full font-medium text-center hover:bg-stone-100 transition shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                {fr ? "Envoyer votre brief" : "Send Your Packaging Brief"}
              </Link>
              <Link
                to="/sourcing"
                className="border border-white/60 bg-white/5 backdrop-blur-sm text-white px-8 py-3.5 rounded-full text-center hover:bg-white hover:text-brand-dark transition"
              >
                {fr ? "Notre méthode de sourcing" : "How We Source"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-7 grid sm:grid-cols-3 gap-6 sm:gap-0">
          {[
            fr ? ["01", "Recherche fournisseurs", "Options selon catégorie, quantité, budget et calendrier."] : ["01", "Supplier search", "Options matched to category, quantity, target cost and timing."],
            fr ? ["02", "Échantillons & développement", "Coordination des échantillons, finitions et ajustements techniques."] : ["02", "Sampling & development", "Samples, finishes and technical adjustments coordinated with manufacturers."],
            fr ? ["03", "Suivi de production", "Communication projet et suivi des étapes clés jusqu’à la préparation expédition."] : ["03", "Production follow-up", "Project communication and milestone follow-up through shipment preparation."]
          ].map(([num, title, desc], index) => (
            <div
              key={num}
              className={`flex gap-4 sm:px-6 ${index > 0 ? "sm:border-l sm:border-stone-200" : ""}`}
            >
              <span className="text-[10px] tracking-[0.24em] text-stone-350 pt-1">{num}</span>
              <div>
                <h2 className="text-sm font-medium text-brand-dark mb-1.5">{title}</h2>
                <p className="text-xs leading-relaxed text-stone-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-6">
            {focusCards.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group relative min-h-[360px] overflow-hidden rounded-[28px] bg-stone-900 shadow-[0_14px_40px_rgba(32,24,18,0.08)]"
              >
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] saturate-[0.98] contrast-[1.02] brightness-[1.00]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#171717]/[0.90] via-[#2b2926]/[0.58] to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,248,239,0.04),transparent_46%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 min-h-[230px] flex flex-col justify-end">
                  <h2 className="font-serif text-[2rem] text-white mb-3 tracking-[-0.01em] leading-[1.08] min-h-[4.2rem] flex items-end drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)]">{card.title}</h2>
                  <p className="text-sm text-white/[0.92] leading-relaxed max-w-sm min-h-[4.7rem] drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">{card.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/[0.94]">
                    {fr ? "Découvrir" : "Explore"}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-14">
            <p className="uppercase text-[11px] tracking-[0.34em] text-stone-400 mb-4">
              {fr ? "COMMENT NOUS TRAVAILLONS" : "HOW WE WORK"}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-5 tracking-[-0.02em]">
              {fr ? "Un interlocuteur pour coordonner votre projet packaging" : "One Partner to Coordinate Your Packaging Project"}
            </h2>
            <p className="text-stone-600 leading-relaxed max-w-2xl">
              {fr
                ? "Nous sommes en phase de développement commercial et construisons progressivement notre réseau de sourcing. Notre rôle est de vous aider à identifier les bonnes options et à coordonner le projet avec transparence."
                : "We are building our client portfolio and progressively developing our sourcing network. Our role is to help you identify suitable options and coordinate the project transparently from brief to production."}
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
            {steps.map(([num, title, desc]) => (
              <div key={num} className="bg-[#fbfaf8] p-6 min-h-[230px]">
                <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-7">{num}</div>
                <h3 className="font-medium text-brand-dark mb-3">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-6">
            {featureCards.map((card, index) => (
              <Link
                key={card.title}
                to={card.to}
                className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-stone-200 bg-white p-8 md:p-10 text-brand-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(2,44,34,0.08)]"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="text-[10px] tracking-[0.18em] text-stone-300">0{index + 1}</span>
                  </div>
                  <div className="max-w-xl pt-10">
                    <h2 className="font-serif text-3xl md:text-5xl mb-5 tracking-[-0.02em] text-brand-dark">{card.title}</h2>
                    <p className="leading-relaxed max-w-lg text-stone-600">{card.desc}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-dark">
                      {fr ? "En savoir plus" : "Learn more"}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute left-0 top-0 h-[3px] w-24 bg-brand-dark/80" />
                <div aria-hidden="true" className="absolute -right-20 -bottom-24 h-60 w-60 rounded-full border border-brand-dark/10" />
                <div aria-hidden="true" className="absolute -right-5 -bottom-12 h-36 w-36 rounded-full border border-brand-dark/10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="uppercase text-[10px] tracking-[0.32em] text-white/[0.48] mb-5">
            {fr ? "COMMENCER UN PROJET" : "START A PROJECT"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-5 tracking-[-0.02em]">
            {fr ? "Vous avez déjà une référence ou une idée de packaging ?" : "Already Have a Packaging Reference or Idea?"}
          </h2>
          <p className="text-white/[0.70] mb-9 max-w-2xl mx-auto leading-relaxed">
            {fr ? "Envoyez-nous votre brief, une photo de référence, vos quantités et votre calendrier cible." : "Send us your brief, reference image, expected quantity and target launch timing."}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-dark px-8 py-3.5 rounded-full font-medium hover:bg-stone-100 transition"
          >
            {fr ? "Envoyer un brief" : "Send a Brief"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
