import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { trackContactCta } from "../analytics";

const PackagingSourcingBrief: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const briefItems = fr
    ? [
        ["01", "Type de produit & format", "Flacon, pot, tube, airless, packaging parfum ou autre format. Une référence visuelle peut suffire si le format exact n’est pas encore défini."],
        ["02", "Capacité & composants", "Volume cible, type de pompe, bouchon, col ou configuration souhaitée lorsqu’ils sont déjà connus."],
        ["03", "Quantité cible", "Une estimation de la première commande aide à déterminer quelles options de MOQ valent la peine d’être explorées."],
        ["04", "Références visuelles", "Photos, liens, produits existants ou moodboards permettent d’aligner plus rapidement forme, finition et niveau de personnalisation."],
        ["05", "Couleurs, finition & décoration", "Couleur, coating, sérigraphie, marquage à chaud, métallisation ou autres effets selon le rendu recherché."],
        ["06", "Marché cible", "Le pays ou la région de commercialisation peut influencer les documents, matériaux ou validations à demander au fabricant."],
        ["07", "Calendrier de lancement", "Une date cible permet d’évaluer si une référence standard, une personnalisation ou un développement dédié est réaliste."]
      ]
    : [
        ["01", "Product type & format", "Bottle, jar, tube, airless, fragrance packaging or another format. A visual reference is often enough if the exact format is not yet defined."],
        ["02", "Capacity & components", "Target fill volume, pump, cap, neck finish or component configuration when these details are already known."],
        ["03", "Target quantity", "An estimated first order helps narrow down which MOQ ranges and manufacturing routes are worth exploring."],
        ["04", "Visual references", "Photos, links, existing products or moodboards help align shape, finish and customization direction faster."],
        ["05", "Color, finish & decoration", "Custom color, coating, silk screen, hot stamping, metallization or other effects depending on the desired result."],
        ["06", "Target market", "The country or region where the product will be sold may affect which documents, materials or validations should be requested."],
        ["07", "Launch timing", "A target launch date helps assess whether a stock reference, customization route or dedicated development is realistic."]
      ];

  const notRequired = fr
    ? [
        "Un dessin technique final",
        "Un matériau déjà arrêté",
        "Un MOQ exact",
        "Un fabricant déjà identifié",
        "Toutes les finitions déjà définies"
      ]
    : [
        "A finalized technical drawing",
        "A fully fixed material choice",
        "An exact MOQ",
        "A manufacturer already selected",
        "Every finish already decided"
      ];

  const confirmLater = fr
    ? [
        ["MOQ réel", "Le MOQ final dépend du composant, du fabricant et du niveau de personnalisation."],
        ["Délai de production", "Le délai se confirme une fois l’option, la quantité et la personnalisation définies."],
        ["Compatibilité & tests", "La compatibilité formule/packaging et certains tests doivent être validés selon le projet."],
        ["Disponibilité documentaire", "Les déclarations, certificats et informations techniques disponibles varient selon le fabricant et la matière."]
      ]
    : [
        ["Actual MOQ", "Final MOQ depends on the component, manufacturer and level of customization."],
        ["Production lead time", "Timing is confirmed once the option, quantity and customization route are defined."],
        ["Compatibility & testing", "Formula-packaging compatibility and some technical tests need project-specific validation."],
        ["Documentation availability", "Supplier declarations, certificates and technical information vary by manufacturer and material."]
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "GUIDE SOURCING PACKAGING" : "PACKAGING SOURCING GUIDE"}
        </p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6 max-w-4xl">
          {fr
            ? "Que faut-il inclure dans un brief de sourcing packaging cosmétique ?"
            : "What to include in a cosmetic packaging sourcing brief"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Un brief utile n’a pas besoin d’être parfaitement finalisé. Pour démarrer un sourcing, l’essentiel est de donner assez de contexte pour comparer des options réalistes en termes de format, MOQ, personnalisation, faisabilité et calendrier."
            : "A useful sourcing brief does not need to be fully finalized. To start sourcing, the goal is to provide enough context to compare realistic options around format, MOQ, customization, feasibility and timing."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mb-10">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "RÉPONSE COURTE" : "SHORT ANSWER"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Commencez avec ce que vous savez déjà" : "Start with what you already know"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Une référence visuelle, une quantité estimée, un type de produit et un calendrier cible suffisent souvent pour une première recherche. Les spécifications plus techniques peuvent ensuite être clarifiées au fur et à mesure des options fabricants."
                : "A visual reference, estimated quantity, product type and target timing are often enough for an initial search. More technical specifications can then be clarified as suitable manufacturing options are identified."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
            {fr ? "LES 7 INFORMATIONS CLÉS" : "7 KEY INPUTS"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Les éléments qui rendent un brief plus exploitable" : "What makes a sourcing brief actionable"}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Plus ces éléments sont clairs, plus il devient facile de présélectionner des options pertinentes et d’éviter des comparaisons qui ne correspondent pas aux contraintes réelles du projet."
              : "The clearer these inputs are, the easier it becomes to pre-select relevant options and avoid comparing routes that do not fit the project's real constraints."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
          {briefItems.map(([num, title, desc]) => (
            <div key={num} className="bg-white p-7 md:p-8 min-h-[220px]">
              <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-7">{num}</div>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-white/45 mb-4">
              {fr ? "PAS BESOIN DE TOUT FINALISER" : "YOU DO NOT NEED EVERYTHING READY"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">
              {fr ? "Un brief préliminaire peut déjà être utile" : "A preliminary brief can still be useful"}
            </h2>
            <p className="text-white/75 leading-relaxed">
              {fr
                ? "Le sourcing peut commencer alors que certaines décisions sont encore ouvertes. L’objectif de la première étape est justement d’identifier les routes réalistes avant de figer trop tôt le packaging."
                : "Sourcing can begin while some decisions are still open. The first step is often to identify realistic routes before locking the packaging direction too early."}
            </p>
          </div>
          <div className="border border-white/15 rounded-3xl p-8">
            <ul className="space-y-4 text-white/80">
              {notRequired.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white/40">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
            {fr ? "À CONFIRMER ENSUITE" : "WHAT GETS CONFIRMED LATER"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Certaines informations dépendent toujours de l’option sélectionnée" : "Some details depend on the option you select"}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Un bon brief aide à cadrer le projet, mais certaines données ne peuvent pas être promises de manière générique. Elles doivent être confirmées avec le fabricant ou par des essais selon le cas."
              : "A good brief helps frame the project, but some details cannot be promised generically. They need to be confirmed with the manufacturer or through project-specific testing."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {confirmLater.map(([title, desc]) => (
            <div key={title} className="border border-stone-200 rounded-2xl p-6">
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "EXEMPLE DE BRIEF SIMPLE" : "A SIMPLE BRIEF EXAMPLE"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Quelques lignes peuvent suffire pour commencer" : "A few lines can be enough to start"}
            </h2>
            <div className="bg-white border border-stone-200 rounded-2xl p-7 text-stone-600 leading-relaxed">
              {fr ? (
                <p>
                  Nous recherchons un flacon airless 30 ml pour un sérum premium, avec une finition blanc mat et un logo noir. Première quantité estimée : 5 000 pièces. Marché cible : France et UE. Lancement souhaité au T2. Nous avons une photo de référence mais la matière et le système de pompe restent ouverts.
                </p>
              ) : (
                <p>
                  We are looking for a 30 ml airless bottle for a premium serum, with a matte white finish and black logo. Estimated first quantity: 5,000 units. Target market: France and EU. Target launch: Q2. We have a reference image, but the material and pump system are still open.
                </p>
              )}
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-3xl text-brand-dark mb-4">
              {fr ? "À partir de là, que peut-on comparer ?" : "What can be compared from there?"}
            </h3>
            <ul className="space-y-3 text-stone-600 list-disc pl-5">
              <li>{fr ? "Références standard vs personnalisation" : "Stock references vs customization"}</li>
              <li>{fr ? "Différentes routes de MOQ" : "Different MOQ routes"}</li>
              <li>{fr ? "Options de matériaux et composants" : "Material and component options"}</li>
              <li>{fr ? "Finitions techniquement réalistes" : "Technically realistic finishes"}</li>
              <li>{fr ? "Délais estimés selon la route retenue" : "Expected timing by sourcing route"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-5">
          {fr ? "VOTRE PROJET" : "YOUR PROJECT"}
        </p>
        <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
          {fr ? "Votre brief est encore incomplet ?" : "Still defining your packaging brief?"}
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {fr
            ? "Partagez une référence, une quantité cible ou simplement l’état actuel du projet. Nous pouvons vous aider à structurer les prochaines étapes de sourcing."
            : "Share a reference, target quantity or simply where the project stands. We can help structure the next sourcing steps."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            onClick={() => trackContactCta("/packaging-sourcing-brief/", fr ? "Partager votre brief" : "Share Your Brief")}
            className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full"
          >
            {fr ? "Partager votre brief" : "Share Your Brief"}
          </Link>
          <Link
            to="/sourcing"
            className="inline-block border border-stone-300 text-brand-dark px-8 py-3.5 rounded-full"
          >
            {fr ? "Voir notre approche sourcing" : "See Our Sourcing Approach"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackagingSourcingBrief;
