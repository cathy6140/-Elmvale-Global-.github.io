import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  useEffect(() => {
    setSeoMeta(
      fr ? "À propos | Elmvale Global" : "About Elmvale Global | Packaging Sourcing",
      fr
        ? "Elmvale Global accompagne les marques beauté et parfum dans la structuration, le sourcing et la coordination de leurs projets packaging."
        : "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing and project coordination."
    );
  }, [fr]);

  const supportItems = fr
    ? [
        ["Structurer le brief", "Clarifier le format, la quantité, le coût cible, la personnalisation, le calendrier et les exigences du marché avant de lancer le sourcing."],
        ["Identifier les bons partenaires", "Rechercher et présélectionner les options fabricants les plus pertinentes selon les besoins réels du projet."],
        ["Clarifier la faisabilité", "Comparer MOQ, délais, personnalisation et contraintes techniques pour avancer avec une vision plus claire."],
        ["Coordonner le développement", "Suivre les échantillons, les échanges techniques, les finitions et la communication avec les fabricants."],
      ]
    : [
        ["Clarify the brief", "Structure requirements around format, quantity, target cost, customization, timing and market needs before sourcing begins."],
        ["Identify suitable partners", "Search and pre-select manufacturing options based on the actual requirements of each project."],
        ["Clarify feasibility", "Compare MOQ, timing, customization routes and technical constraints before moving forward."],
        ["Coordinate development", "Follow samples, technical exchanges, finishes and communication with manufacturers throughout the sourcing process."],
      ];

  const lenses = fr
    ? [
        ["Cohérence de marque", "Le packaging doit soutenir l’expérience produit et l’identité visuelle de la marque."],
        ["Faisabilité technique", "Le format, les finitions et la personnalisation doivent rester réalistes au regard des contraintes du projet."],
        ["Options plus responsables", "Lorsque cela est pertinent, nous pouvons explorer PCR, papier FSC, mono-matériau ou réduction matière."],
      ]
    : [
        ["Brand coherence", "Packaging should support the intended product experience and visual identity of the brand."],
        ["Technical feasibility", "Format, finish and customization need to remain realistic within the constraints of the project."],
        ["More responsible options", "Where relevant, we can explore PCR, FSC paper, mono-material structures or material-reduction approaches."],
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "À PROPOS" : "ABOUT"}</p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Un accompagnement structuré pour vos projets packaging" : "A more structured approach to packaging sourcing"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Elmvale Global accompagne les marques beauté et parfum dans la structuration, le sourcing et la coordination de leurs projets packaging, depuis la réflexion initiale jusqu’aux échanges avec les fabricants."
            : "Elmvale Global supports beauty and fragrance brands with structured packaging sourcing and project coordination, from early-stage requirements through manufacturer communication."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "NOTRE RÔLE" : "WHAT WE HELP WITH"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Transformer une direction packaging en brief plus clair et exploitable" : "Turn a packaging direction into a clearer, actionable brief"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Notre rôle n’est pas seulement de montrer des produits. Nous aidons à clarifier les besoins en amont, à présélectionner les options pertinentes et à coordonner les étapes qui suivent."
                : "Our role is not simply to present products. We help clarify requirements early, pre-select relevant options and coordinate the steps that follow."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
            {supportItems.map(([title, desc], index) => (
              <div key={title} className="bg-white p-7 min-h-[245px]">
                <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-7">0{index + 1}</div>
                <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "NOTRE APPROCHE" : "OUR APPROACH"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Trois critères pour évaluer une option packaging" : "Three lenses for Evaluating a Packaging Option"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Une bonne option packaging doit fonctionner à la fois pour la marque, pour la production et pour les contraintes réelles du projet."
                : "A suitable packaging option needs to work for the brand, for production and for the practical constraints of the project."}
            </p>
          </div>

          <div className="space-y-5">
            {lenses.map(([title, desc], index) => (
              <div key={title} className="border border-stone-200 rounded-2xl p-6 md:p-7">
                <div className="flex gap-5">
                  <span className="text-[10px] tracking-[0.24em] text-stone-400 pt-1">0{index + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-brand-dark mb-2">{title}</h3>
                    <p className="text-stone-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-white/45 mb-4">
              {fr ? "RÉSEAU DE SOURCING" : "SOURCING NETWORK"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">
              {fr ? "Un réseau orienté packaging beauté" : "A Network Focused on Beauty Packaging"}
            </h2>
            <p className="text-white/75 leading-relaxed">
              {fr
                ? "Notre réseau de sourcing comprend des ressources fabricants en Chine pour les flacons, pots, airless, pompes, tubes, composants parfum, décorations et packaging secondaire."
                : "Our sourcing network includes manufacturing resources in China for bottles, jars, airless systems, pumps, tubes, fragrance components, decoration and secondary packaging."}
            </p>
          </div>
          <div className="border border-white/15 rounded-3xl p-8">
            <h3 className="font-serif text-3xl mb-4">{fr ? "Une information claire à chaque étape" : "Clear information at each stage"}</h3>
            <p className="text-white/75 leading-relaxed">
              {fr
                ? "Nous distinguons ce qui est confirmé par le fabricant de ce qui nécessite encore un test, un échantillon ou une validation technique. L’objectif est d’aider la marque à avancer avec une vision réaliste des options disponibles."
                : "We distinguish what has been confirmed by a manufacturer from what still requires testing, sampling or technical validation. The goal is to help brands move forward with a realistic view of the available options."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-5">
            {fr ? "VOTRE PROJET" : "YOUR PROJECT"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Vous avez déjà une référence ou vous définissez encore la direction ?" : "Already have a reference, or still defining the direction?"}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {fr
              ? "Partagez votre besoin, votre quantité cible ou une simple référence visuelle. Nous vous aiderons à identifier les options pertinentes à explorer."
              : "Share your requirements, target quantity or simply a visual reference. We will help identify the options worth exploring."}
          </p>
          <Link to="/contact" className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full">
            {fr ? "Partager votre besoin" : "Share Your Requirements"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
