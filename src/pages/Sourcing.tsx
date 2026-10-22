import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const Sourcing: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";
  useEffect(() => {
    setSeoMeta(
      fr ? "Sourcing packaging cosmétique | Elmvale Global" : "Cosmetic Packaging Sourcing | Elmvale Global",
      fr
        ? "Elmvale Global aide les marques beauté et parfum à rechercher, comparer et développer des solutions packaging, avec un réseau de sourcing en Chine."
        : "Elmvale Global helps beauty and fragrance brands search, compare and develop packaging solutions, supported by a sourcing network in China."
    );
  }, [fr]);

  const items = fr
    ? [
        ["Recherche fournisseurs", "Identification d’options selon votre catégorie, quantité, budget, finitions et calendrier."],
        ["Comparaison", "Comparaison des options, MOQ, délais, personnalisation et informations disponibles."],
        ["Échantillons", "Coordination d’échantillons standards ou personnalisés avant production."],
        ["Développement", "Couleurs, sérigraphie, marquage à chaud, coating, composants et moules selon faisabilité."],
        ["Suivi de production", "Communication avec le fabricant et suivi des étapes clés du projet."],
        ["Qualité & documents", "Coordination de contrôles et collecte de documents disponibles selon le fabricant et le matériau."]
      ]
    : [
        ["Supplier search", "Identify options based on category, quantity, target cost, finish and timing."],
        ["Option comparison", "Compare MOQ, lead time, customization routes and available information."],
        ["Sampling", "Coordinate stock or customized samples before production."],
        ["Development", "Color, silk screen, hot stamping, coating, components and tooling when feasible."],
        ["Production follow-up", "Coordinate communication with manufacturers and follow key project milestones."],
        ["Quality & documents", "Coordinate inspections and collect available documents depending on manufacturer and material."]
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "SOURCING PACKAGING" : "PACKAGING SOURCING"}</p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Sourcing de packaging cosmétique" : "Cosmetic Packaging Sourcing"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Nous aidons les marques à naviguer les options fabricants et à coordonner les étapes essentielles d’un projet packaging. Notre réseau de sourcing comprend des ressources fabricants en Chine, sans prétendre remplacer vos équipes réglementaires ou qualité."
            : "We help brands navigate manufacturing options and coordinate the essential steps of a packaging project. Our sourcing network includes manufacturing resources in China, without replacing your own regulatory or quality teams."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([title, desc]) => (
            <div key={title} className="bg-white rounded-2xl border border-stone-200 p-6">
              <h2 className="font-semibold text-brand-dark mb-3">{title}</h2>
              <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-5">{fr ? "Ce que nous demandons dans un brief" : "What to Include in Your Brief"}</h2>
          <ul className="space-y-3 text-stone-600 list-disc pl-5">
            <li>{fr ? "Produit et format souhaité" : "Product type and desired format"}</li>
            <li>{fr ? "Photos ou références existantes" : "Reference images or existing packaging"}</li>
            <li>{fr ? "Quantité estimée / MOQ cible" : "Estimated quantity / target MOQ"}</li>
            <li>{fr ? "Décoration et finitions" : "Decoration and finishing"}</li>
            <li>{fr ? "Marché cible" : "Target market"}</li>
            <li>{fr ? "Date de lancement souhaitée" : "Target launch date"}</li>
          </ul>
        </div>
        <div className="bg-brand-dark text-white rounded-3xl p-8">
          <h2 className="font-serif text-3xl mb-4">{fr ? "Vous cherchez une option précise ?" : "Looking for a Specific Packaging Option?"}</h2>
          <p className="text-white/75 mb-6">{fr ? "Envoyez-nous votre brief. Nous vous répondrons avec les informations nécessaires pour démarrer le sourcing." : "Send us your brief. We will reply with the information needed to start sourcing."}</p>
          <Link to="/contact" className="inline-block bg-white text-brand-dark px-6 py-3 rounded-full">{fr ? "Envoyer un brief" : "Send Your Brief"}</Link>
        </div>
      </section>
    </div>
  );
};

export default Sourcing;
