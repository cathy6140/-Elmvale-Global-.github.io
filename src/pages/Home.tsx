import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const steps = fr
    ? [
        ["01", "Partagez votre brief", "Type de produit, références, quantités, budget cible, finitions et calendrier."],
        ["02", "Sourcing fournisseurs", "Nous recherchons et comparons des options adaptées parmi notre réseau de fabricants en Chine."],
        ["03", "Échantillons & développement", "Coordination des échantillons, couleurs, décorations, composants et ajustements techniques."],
        ["04", "Production & qualité", "Suivi de production et coordination des contrôles et documents disponibles selon le projet."],
        ["05", "Préparation à l’expédition", "Coordination des exigences de livraison et des informations nécessaires à votre importation."]
      ]
    : [
        ["01", "Share your brief", "Product type, references, quantity, target cost, decoration and launch timing."],
        ["02", "Supplier sourcing", "We identify and compare suitable options across our manufacturing network in China."],
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
          eyebrow: "SERVICE",
          title: "Sourcing packaging en Chine",
          desc: "Comprendre notre processus de sélection, développement et coordination fournisseurs.",
          image: "/compliance-hero.png",
          to: "/sourcing",
        },
        {
          eyebrow: "SPÉCIALITÉ",
          title: "Packaging parfum",
          desc: "Flacons, pompes, capots, cols, décoration et packaging secondaire pour projets parfum.",
          image: "/hero-home.png",
          to: "/fragrance-packaging",
        },
      ]
    : [
        {
          eyebrow: "SERVICE",
          title: "Packaging Sourcing in China",
          desc: "See how we approach supplier search, development and project coordination.",
          image: "/compliance-hero.png",
          to: "/sourcing",
        },
        {
          eyebrow: "SPECIALTY",
          title: "Fragrance Packaging",
          desc: "Bottles, pumps, caps, collars, decoration and secondary packaging for fragrance projects.",
          image: "/hero-home.png",
          to: "/fragrance-packaging",
        },
      ];

  return (
    <div className="w-full bg-white">
      <section
        className="relative min-h-[680px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero-home.png')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120f]/85 via-[#241b16]/48 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(255,244,224,0.16),transparent_34%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.34em] text-[11px] text-white/70 mb-6">
              {fr ? "SOURCING PACKAGING EN CHINE" : "COSMETIC PACKAGING SOURCING FROM CHINA"}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[78px] text-white mb-8 leading-[1.03] tracking-[-0.02em]">
              {fr
                ? "Sourcing de packaging cosmétique & parfum en Chine"
                : "Cosmetic & Fragrance Packaging Sourcing from China"}
            </h1>
            <p className="text-white/85 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
              {fr
                ? "Elmvale Global accompagne les marques beauté, skincare et parfum dans la recherche et le développement de packaging auprès de fabricants en Chine — du sourcing et des échantillons jusqu’au suivi de production."
                : "Elmvale Global helps beauty, skincare and fragrance brands source and develop packaging with manufacturers in China — from supplier search and sampling to production follow-up."}
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

      <section className="border-b border-stone-200/70 bg-white">
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

      <section className="bg-[#f7f4ef]">
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
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] saturate-[0.82] contrast-[1.03] brightness-[0.88]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17110d]/80 via-[#211711]/26 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(218,187,145,0.10),transparent_42%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <h2 className="font-serif text-3xl text-white mb-3 tracking-[-0.01em]">{card.title}</h2>
                  <p className="text-sm text-white/78 leading-relaxed max-w-md">{card.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/85">
                    {fr ? "Découvrir" : "Explore"}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200/70">
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
                ? "Nous sommes en phase de développement commercial et travaillons à partir de ressources fabricants en Chine. Notre rôle est de vous aider à identifier les bonnes options et à coordonner le projet avec transparence."
                : "We are building our client portfolio and work from manufacturing resources in China. Our role is to help you identify suitable options and coordinate the project transparently from brief to production."}
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

      <section className="bg-[#f7f4ef]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-6">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group relative min-h-[390px] overflow-hidden rounded-[30px] bg-stone-900 shadow-[0_16px_50px_rgba(32,24,18,0.09)]"
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] saturate-[0.78] contrast-[1.04] brightness-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17110d]/82 via-[#1b130e]/48 to-[#17110d]/12" />
              <div className="absolute inset-0 flex items-end p-8 md:p-10">
                <div className="max-w-lg">
                  <p className="uppercase text-[10px] tracking-[0.28em] text-white/60 mb-3">{card.eyebrow}</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-[-0.02em]">{card.title}</h2>
                  <p className="text-white/75 leading-relaxed max-w-md">{card.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/85">
                    {fr ? "En savoir plus" : "Learn more"}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="uppercase text-[10px] tracking-[0.32em] text-white/45 mb-5">
            {fr ? "COMMENCER UN PROJET" : "START A PROJECT"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-5 tracking-[-0.02em]">
            {fr ? "Vous avez déjà une référence ou une idée de packaging ?" : "Already Have a Packaging Reference or Idea?"}
          </h2>
          <p className="text-white/65 mb-9 max-w-2xl mx-auto leading-relaxed">
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
