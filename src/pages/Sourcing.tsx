import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { localizedPath } from "../locale";
import { trackContactCta } from "../analytics";

const Sourcing: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const items = fr
    ? [
        ["Recherche fournisseurs", "Identification d’options selon votre catégorie, quantité, budget, finitions et calendrier."],
        ["Comparaison", "Comparaison des options, MOQ, délais, personnalisation et informations disponibles."],
        ["Échantillons", "Coordination d’échantillons standards ou personnalisés avant production."],
        ["Développement", "Couleurs, sérigraphie, marquage à chaud, coating, composants et moules selon faisabilité."],
        ["Suivi de production", "Communication avec le fabricant et suivi des étapes clés du projet."],
        ["Qualité & documents", "Coordination de contrôles qualité et collecte de documents disponibles selon le fabricant et le matériau."],
        ["Coordination expédition", "Support optionnel pour la préparation de l’expédition et la coordination avec votre transitaire ou partenaire logistique lorsque nécessaire."]
      ]
    : [
        ["Supplier search", "Identify options based on category, quantity, target cost, finish and timing."],
        ["Option comparison", "Compare MOQ, lead time, customization options and available information."],
        ["Sampling", "Coordinate stock or customized samples before production."],
        ["Development", "Color, silk screen, hot stamping, coating, components and tooling when feasible."],
        ["Production follow-up", "Coordinate communication with manufacturers and follow key project milestones."],
        ["Quality & documents", "Coordinate quality inspections and collect available documents depending on manufacturer and material."],
        ["Shipment coordination", "Optional support with shipment preparation and coordination with your nominated freight forwarder or logistics partner when required."]
      ];

  const directAnswers = fr
    ? [
        ["Que comprend le sourcing de packaging cosmétique ?", "Le sourcing peut couvrir la recherche et la comparaison de fournisseurs, les échantillons et le développement, le suivi de production, ainsi que la coordination des contrôles qualité et des documents disponibles. La coordination d’expédition reste optionnelle selon le projet."],
        ["Travaillez-vous aussi sur le packaging parfum ?", "Oui. Nous pouvons sourcer des flacons, pompes, capots, cols, décorations et packaging secondaire, soit comme pack complet, soit comme composants séparés selon le brief."],
        ["Pouvez-vous accompagner des projets avec des volumes plus faibles ?", "Nous pouvons comparer des références stock, des niveaux de personnalisation et plusieurs fabricants afin d’identifier une route plus réaliste. Il n’existe pas de MOQ unique : le minimum dépend du composant, de la finition et du fournisseur."],
        ["Coordonnez-vous les contrôles qualité ?", "Oui. Nous pouvons coordonner des inspections qualité et collecter les documents disponibles auprès du fabricant. Le périmètre exact du contrôle est défini selon le produit, le fournisseur et les besoins du projet."],
        ["Gérez-vous le transport ?", "La coordination d’expédition est optionnelle. Lorsque nécessaire, nous pouvons préparer les informations d’expédition et coordonner avec le transitaire ou partenaire logistique désigné par le client ; nous n’agissons pas comme transitaire."]
      ]
    : [
        ["What does cosmetic packaging sourcing include?", "Packaging sourcing can include supplier search and comparison, sampling and development, production follow-up, plus coordination of quality inspections and available documentation. Shipment coordination is optional depending on the project."],
        ["Do you also source fragrance packaging?", "Yes. We can source fragrance bottles, pumps, caps, collars, decoration and secondary packaging, either as a complete set or as individual components depending on the brief."],
        ["Can you support lower-volume projects?", "We can compare stock references, different levels of customization and multiple manufacturers to identify a more workable route. There is no universal MOQ; minimums depend on the component, finish and supplier."],
        ["Do you coordinate quality inspections?", "Yes. We can coordinate quality inspections and collect available manufacturer documentation. The exact inspection scope is agreed based on the product, supplier and project requirements."],
        ["Do you manage shipping?", "Shipment coordination is optional. When required, we can prepare shipment information and coordinate with the client’s nominated freight forwarder or logistics partner; we do not act as the freight forwarder."]
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "SOURCING PACKAGING" : "PACKAGING SOURCING"}</p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Sourcing de packaging cosmétique pour les marques beauté" : "Cosmetic packaging sourcing for beauty brands"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Elmvale aide les marques beauté à sourcer des packagings cosmétiques, skincare et parfum auprès de fournisseurs qualifiés. Nous accompagnons la sélection fournisseurs, les échantillons et le développement, le suivi de production et les contrôles qualité, avec une coordination d’expédition disponible lorsque nécessaire."
            : "Elmvale helps beauty brands source cosmetic, skincare and fragrance packaging from qualified suppliers. We support supplier selection, sampling and development, production follow-up and quality inspection, with shipment coordination available when required."}
        </p>
      </section>

      <section className="bg-zinc-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([title, desc]) => (
            <div key={title} className="bg-white rounded-2xl border border-stone-200 p-6">
              <h2 className="font-semibold text-brand-dark mb-3">{title}</h2>
              <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-10">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
            {fr ? "RÉPONSES DIRECTES" : "DIRECT ANSWERS"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Questions fréquentes sur le sourcing packaging" : "Common questions about packaging sourcing"}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Des réponses courtes aux questions qui reviennent le plus souvent avant de lancer un projet."
              : "Short answers to the questions brands most often ask before starting a sourcing project."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {directAnswers.map(([question, answer]) => (
            <article key={question} className="border border-stone-200 rounded-2xl p-6 bg-white">
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{question}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{answer}</p>
            </article>
          ))}
        </div>
        <Link
          to={localizedPath("/fragrance-packaging", language)}
          className="mt-8 inline-flex items-center gap-2 text-sm text-brand-dark underline underline-offset-4"
        >
          {fr ? "Voir notre accompagnement en packaging parfum" : "Explore our fragrance packaging sourcing support"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="bg-zinc-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-10">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "GUIDES PACKAGING" : "PACKAGING GUIDES"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Approfondir les décisions de sourcing" : "Explore common packaging sourcing decisions"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Des guides pratiques pour cadrer un brief, comprendre les MOQ, choisir entre stock et custom, puis comparer des fournisseurs."
                : "Practical guides to help structure a brief, understand MOQ, decide between stock and custom packaging, and compare suppliers."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to={localizedPath("/packaging-sourcing-brief", language)} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition">
              <p className="uppercase text-[10px] tracking-[0.22em] text-stone-400 mb-3">{fr ? "GUIDE 01" : "GUIDE 01"}</p>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "Brief sourcing packaging" : "Packaging sourcing brief"}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{fr ? "Les informations utiles pour commencer un sourcing sans brief finalisé." : "What to include when starting sourcing without a fully finalized brief."}</p>
            </Link>
            <Link to={localizedPath("/cosmetic-packaging-moq", language)} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition">
              <p className="uppercase text-[10px] tracking-[0.22em] text-stone-400 mb-3">{fr ? "GUIDE 02" : "GUIDE 02"}</p>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "MOQ packaging cosmétique" : "Cosmetic packaging MOQ"}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{fr ? "Pourquoi les minimums varient et comment évaluer une route réaliste." : "Why minimums vary and how to judge which sourcing option is realistic."}</p>
            </Link>
            <Link to={localizedPath("/stock-vs-custom-packaging", language)} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition">
              <p className="uppercase text-[10px] tracking-[0.22em] text-stone-400 mb-3">{fr ? "GUIDE 03" : "GUIDE 03"}</p>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "Stock vs custom" : "Stock vs custom packaging"}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{fr ? "Comparer MOQ, délai, investissement, différenciation et risque de lancement." : "Compare MOQ, timing, investment, differentiation and launch risk."}</p>
            </Link>
            <Link to={localizedPath("/compare-cosmetic-packaging-suppliers", language)} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition">
              <p className="uppercase text-[10px] tracking-[0.22em] text-stone-400 mb-3">{fr ? "GUIDE 04" : "GUIDE 04"}</p>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "Comparer les fournisseurs" : "Compare packaging suppliers"}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{fr ? "Comparer MOQ, délais, personnalisation, documentation, faisabilité et suivi." : "Compare MOQ, timing, customization, documentation, feasibility and supplier follow-up."}</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-5">{fr ? "Ce que nous demandons dans un brief" : "What to include in your brief"}</h2>
          <ul className="space-y-3 text-stone-600 list-disc pl-5">
            <li>{fr ? "Produit et format souhaité" : "Product type and desired format"}</li>
            <li>{fr ? "Photos ou références existantes" : "Reference images or existing packaging"}</li>
            <li>{fr ? "Quantité estimée / MOQ cible" : "Estimated quantity / target MOQ"}</li>
            <li>{fr ? "Décoration et finitions" : "Decoration and finishing"}</li>
            <li>{fr ? "Marché cible" : "Target market"}</li>
            <li>{fr ? "Date de lancement souhaitée" : "Target launch date"}</li>
          </ul>
          <Link
            to={localizedPath("/packaging-sourcing-brief", language)}
            className="mt-6 inline-flex items-center gap-2 text-sm text-brand-dark underline underline-offset-4"
          >
            {fr ? "Voir le guide complet du brief sourcing" : "See the full packaging sourcing brief guide"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="bg-brand-dark text-white rounded-3xl p-8">
          <h2 className="font-serif text-3xl mb-4">{fr ? "Vous cherchez une option précise ?" : "Looking for a specific packaging option?"}</h2>
          <p className="text-white/75 mb-6">{fr ? "Envoyez-nous votre brief. Nous vous répondrons avec les informations nécessaires pour démarrer le sourcing." : "Send us your brief. We will reply with the information needed to start sourcing."}</p>
          <Link to={localizedPath("/contact", language)} onClick={() => trackContactCta("/sourcing/", fr ? "Envoyer un brief" : "Send Your Brief")} className="inline-block bg-white text-brand-dark px-6 py-3 rounded-full">{fr ? "Envoyer un brief" : "Send Your Brief"}</Link>
        </div>
      </section>
    </div>
  );
};

export default Sourcing;
