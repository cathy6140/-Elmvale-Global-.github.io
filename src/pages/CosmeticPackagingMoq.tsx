import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { localizedPath } from "../locale";
import { trackContactCta } from "../analytics";
import RelatedGuides from "../components/RelatedGuides";

const CosmeticPackagingMoq: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const routes = fr
    ? [
        ["01", "Référence standard en stock", "La route la plus flexible lorsque la forme, la matière et les composants existent déjà. Les quantités minimales peuvent être plus basses, mais dépendent toujours du stock réel et du fournisseur."],
        ["02", "Référence standard + décoration", "La base packaging existe déjà, mais la couleur, le coating, la sérigraphie, le marquage à chaud ou d’autres finitions peuvent créer leur propre minimum de production."],
        ["03", "Développement custom", "Une nouvelle forme, un nouveau moule, des composants dédiés ou certaines matières spécifiques impliquent généralement des minimums plus élevés et davantage d’étapes de validation."]
      ]
    : [
        ["01", "Stock packaging", "The most flexible route when the shape, material and components already exist. Minimum quantities can be lower, but still depend on actual stock and supplier conditions."],
        ["02", "Stock packaging + decoration", "The base pack already exists, but custom color, coating, silk screen, hot stamping or other finishes can introduce their own production minimums."],
        ["03", "Custom development", "A new shape, tooling, dedicated components or certain material routes generally require higher minimums and more validation steps."]
      ];

  const factors = fr
    ? [
        ["Composant", "Un flacon, une pompe, un capot ou un pot peuvent chacun avoir un MOQ différent."],
        ["Matière", "Le verre, le plastique, l’aluminium ou des contenus recyclés peuvent suivre des minimums différents selon le fabricant."],
        ["Couleur", "Une couleur standard est souvent plus flexible qu’une coloration sur mesure."],
        ["Décoration", "Sérigraphie, marquage à chaud, coating et métallisation peuvent nécessiter des quantités minimales distinctes."],
        ["Moule & outillage", "Un nouveau moule augmente généralement l’engagement minimum nécessaire pour rendre le développement viable."],
        ["Capacité fabricant", "Les lignes, cavités de moule, calendriers et politiques commerciales varient d’une usine à l’autre."]
      ]
    : [
        ["Component", "A bottle, pump, cap or jar can each have a different MOQ."],
        ["Material", "Glass, plastic, aluminium or recycled-content routes can follow different minimums by manufacturer."],
        ["Color", "A standard color is usually more flexible than a custom color run."],
        ["Decoration", "Silk screen, hot stamping, coating and metallization can each introduce separate production minimums."],
        ["Tooling", "New tooling usually increases the minimum commitment needed to make development viable."],
        ["Manufacturer setup", "Production lines, mold cavities, schedules and commercial policies differ from one factory to another."]
      ];

  const options = fr
    ? [
        ["Réduire la personnalisation", "Commencer avec une référence standard et garder la personnalisation sur l’étiquette, le décor ou le packaging secondaire."],
        ["Comparer plusieurs routes", "Chercher une autre référence, un autre composant ou un autre fabricant avec une structure de MOQ plus adaptée."],
        ["Concentrer les variantes", "Réduire le nombre de couleurs, formats ou composants au premier lancement pour augmenter la quantité par SKU."],
        ["Phaser le développement", "Lancer d’abord une version plus standard, puis passer à un développement plus custom lorsque les volumes le justifient."]
      ]
    : [
        ["Reduce customization", "Start with a standard reference and keep differentiation in labeling, decoration or secondary packaging."],
        ["Compare sourcing routes", "Look for another reference, component or manufacturer with an MOQ structure that better fits the project."],
        ["Consolidate variants", "Reduce the number of colors, formats or components at launch so more volume sits behind each SKU."],
        ["Phase the development", "Launch with a more standard route first, then move to a more customized development when volumes justify it."]
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "GUIDE MOQ PACKAGING" : "PACKAGING MOQ GUIDE"}
        </p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6 max-w-4xl">
          {fr ? "MOQ packaging cosmétique : à quoi les marques doivent-elles s’attendre ?" : "Cosmetic packaging MOQ: what brands should expect"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Il n’existe pas un MOQ unique pour le packaging cosmétique. Le minimum dépend de la référence, du composant, de la matière, de la décoration, du fabricant et du niveau de personnalisation demandé."
            : "There is no single standard MOQ for cosmetic packaging. The minimum depends on the reference, component, material, decoration, manufacturer and level of customization required."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "RÉPONSE COURTE" : "SHORT ANSWER"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Le bon MOQ dépend surtout de la route de sourcing" : "MOQ is mainly a sourcing-route question"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Une référence déjà en stock peut permettre une première commande plus souple. Dès que l’on ajoute une couleur sur mesure, une décoration spécifique, un nouveau moule ou des composants dédiés, les minimums ont tendance à augmenter. Le premier travail consiste donc à identifier quelle route correspond réellement au volume du projet."
                : "An in-stock reference can allow a more flexible first order. Once custom color, decoration, new tooling or dedicated components are added, minimums usually rise. The first task is therefore to identify which sourcing route actually fits the project volume."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
            {fr ? "3 ROUTES FRÉQUENTES" : "3 COMMON ROUTES"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Pourquoi deux projets similaires peuvent avoir des MOQ très différents" : "Why similar projects can have very different MOQs"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
          {routes.map(([num, title, desc]) => (
            <div key={num} className="bg-white p-7 md:p-8 min-h-[260px]">
              <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-7">{num}</div>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="uppercase text-[11px] tracking-[0.32em] text-white/45 mb-4">
              {fr ? "CE QUI FAIT VARIER LE MOQ" : "WHAT CHANGES THE MOQ"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">
              {fr ? "Le MOQ ne vient pas seulement du flacon" : "MOQ is not determined by the bottle alone"}
            </h2>
            <p className="text-white/75 leading-relaxed">
              {fr
                ? "Dans un packaging multi-composants, le minimum réel du projet est souvent dicté par le composant ou le procédé le moins flexible."
                : "In a multi-component pack, the real project minimum is often dictated by the least flexible component or process."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-[26px] border border-white/15 bg-white/15">
            {factors.map(([title, desc]) => (
              <div key={title} className="bg-brand-dark p-7 min-h-[210px]">
                <h3 className="font-serif text-2xl mb-3">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "QUANTITÉ VS PROJET" : "VOLUME VS PROJECT"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Un MOQ n’est utile que s’il correspond au risque du lancement" : "A workable MOQ should match the launch risk"}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-5">
              {fr
                ? "Le bon choix n’est pas forcément l’option avec le MOQ le plus bas. Il faut aussi regarder le prix unitaire, la personnalisation, le délai, la qualité perçue et le volume que la marque est réellement prête à engager."
                : "The right option is not necessarily the one with the lowest MOQ. Unit cost, customization, lead time, perceived quality and the volume the brand is genuinely ready to commit all matter."}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Pour un premier lancement, une solution légèrement plus standard peut parfois réduire le risque sans bloquer l’identité de marque."
                : "For an initial launch, a slightly more standard route can sometimes reduce risk without compromising the brand direction."}
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-3xl text-brand-dark mb-5">
              {fr ? "Avant de demander un MOQ, clarifiez :" : "Before asking for MOQ, clarify:"}
            </h3>
            <ul className="space-y-3 text-stone-600 list-disc pl-5">
              <li>{fr ? "la quantité cible du premier lancement" : "target quantity for the first launch"}</li>
              <li>{fr ? "le nombre de références / SKU" : "number of SKUs or variants"}</li>
              <li>{fr ? "ce qui doit absolument être custom" : "what truly needs to be customized"}</li>
              <li>{fr ? "ce qui peut rester standard" : "what can remain standard"}</li>
              <li>{fr ? "la date de lancement" : "target launch date"}</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Link to={localizedPath("/packaging-sourcing-brief", language)} className="inline-flex items-center gap-2 text-sm text-brand-dark underline underline-offset-4">
                {fr ? "Voir le guide du brief sourcing" : "See the packaging sourcing brief guide"} <span aria-hidden="true">→</span>
              </Link>
              <Link to={localizedPath("/stock-vs-custom-packaging", language)} className="inline-flex items-center gap-2 text-sm text-brand-dark underline underline-offset-4">
                {fr ? "Comparer packaging stock et custom" : "Compare stock vs custom packaging"} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "SI LE MOQ EST TROP ÉLEVÉ" : "IF THE MOQ IS TOO HIGH"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Il existe plusieurs leviers avant d’abandonner une direction" : "There are several levers before abandoning a direction"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map(([title, desc]) => (
              <div key={title} className="bg-white border border-stone-200 rounded-2xl p-6">
                <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides language={language} current="moq" />

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-5">
          {fr ? "VOTRE PROJET" : "YOUR PROJECT"}
        </p>
        <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
          {fr ? "Vous avez une quantité cible mais vous ne savez pas quelles options sont réalistes ?" : "Have a target quantity but not sure which packaging routes are realistic?"}
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {fr
            ? "Partagez votre quantité, votre référence ou votre direction packaging. Nous pouvons comparer les routes de sourcing et clarifier les compromis entre MOQ, personnalisation, délai et faisabilité."
            : "Share your target quantity, reference or packaging direction. We can compare sourcing routes and clarify the tradeoffs between MOQ, customization, timing and feasibility."}
        </p>
        <Link
          to={localizedPath("/contact", language)}
          onClick={() => trackContactCta("/cosmetic-packaging-moq/", fr ? "Partager votre projet" : "Share Your Project")}
          className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full"
        >
          {fr ? "Partager votre projet" : "Share Your Project"}
        </Link>
      </section>
    </div>
  );
};

export default CosmeticPackagingMoq;
