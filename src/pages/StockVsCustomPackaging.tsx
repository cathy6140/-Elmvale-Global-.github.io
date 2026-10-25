import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { localizedPath } from "../locale";
import { trackContactCta } from "../analytics";
import RelatedGuides from "../components/RelatedGuides";

const StockVsCustomPackaging: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const compare = fr ? [
    ["MOQ","Souvent plus flexible","Généralement plus élevé"],
    ["Délai","Plus court si la référence est disponible","Plus long avec développement, outillage et validations"],
    ["Investissement initial","Plus limité","Plus important"],
    ["Différenciation","Via couleur, décor et secondaire","Peut inclure une forme ou structure dédiée"],
    ["Risque lancement","Plus faible","Plus élevé si les volumes sont encore incertains"],
    ["Flexibilité","Bonne pour tester ou lancer vite","Meilleure pour construire une solution propriétaire"]
  ] : [
    ["MOQ","Often more flexible","Generally higher"],
    ["Lead time","Shorter when the reference is available","Longer with development, tooling and validation"],
    ["Upfront investment","More limited","Higher"],
    ["Differentiation","Through color, decoration and secondary packaging","Can include a dedicated shape or structure"],
    ["Launch risk","Lower","Higher when demand is still uncertain"],
    ["Flexibility","Useful for testing and faster launches","Better for building a proprietary solution"]
  ];

  const stockBest = fr ? [
    "Premier lancement ou test marché",
    "Volumes encore incertains",
    "Calendrier serré",
    "Forme standard acceptable",
    "Différenciation possible via décor, couleur ou secondaire"
  ] : [
    "First launch or market test",
    "Volumes are still uncertain",
    "Tight launch timing",
    "A standard shape is acceptable",
    "Differentiation can come from decoration, color or secondary packaging"
  ];

  const customBest = fr ? [
    "La forme ou l’usage doit être réellement distinctif",
    "Les volumes justifient l’investissement",
    "Le calendrier permet développement et validation",
    "Le packaging joue un rôle central dans l’expérience de marque",
    "Une référence standard ne répond pas aux contraintes techniques"
  ] : [
    "The shape or user experience needs to be truly distinctive",
    "Volumes justify the investment",
    "Timing allows development and validation",
    "Packaging plays a central role in the brand experience",
    "A standard reference cannot meet the technical requirement"
  ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "GUIDE DÉCISION PACKAGING" : "PACKAGING DECISION GUIDE"}</p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6 max-w-4xl">
          {fr ? "Packaging stock ou custom : quelle route choisir ?" : "Stock vs custom cosmetic packaging: which route should you choose?"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr ? "Le meilleur choix dépend rarement du niveau de personnalisation seul. MOQ, délai, investissement, différenciation et risque de lancement doivent être regardés ensemble." : "The better route is rarely decided by customization alone. MOQ, lead time, upfront investment, differentiation and launch risk need to be considered together."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "RÉPONSE COURTE" : "SHORT ANSWER"}</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">{fr ? "Choisissez la route qui correspond au stade réel du projet" : "Choose the route that fits the actual stage of the project"}</h2>
          <p className="text-stone-600 leading-relaxed max-w-3xl">
            {fr ? "Le stock packaging est souvent pertinent pour lancer plus vite, limiter l’engagement initial et tester un marché. Le custom devient plus logique lorsque la différenciation, l’usage ou les contraintes techniques justifient des volumes, un budget et un calendrier plus importants." : "Stock packaging is often a strong option when speed, lower initial commitment and market testing matter. Custom development becomes more logical when differentiation, user experience or technical requirements justify higher volumes, budget and a longer timeline."}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "COMPARAISON" : "COMPARISON"}</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">{fr ? "Les compromis principaux" : "The main tradeoffs"}</h2>
        </div>
        <div className="overflow-hidden rounded-[26px] border border-stone-200">
          <div className="grid grid-cols-3 bg-stone-100 text-brand-dark font-medium">
            <div className="p-5">{fr ? "Critère" : "Criteria"}</div><div className="p-5">Stock</div><div className="p-5">Custom</div>
          </div>
          {compare.map(([label, stock, custom]) => (
            <div key={label} className="grid grid-cols-3 border-t border-stone-200">
              <div className="p-5 font-medium text-brand-dark">{label}</div>
              <div className="p-5 text-stone-600">{stock}</div>
              <div className="p-5 text-stone-600">{custom}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-white/45 mb-4">{fr ? "QUAND LE STOCK EST PERTINENT" : "WHEN STOCK MAKES SENSE"}</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">{fr ? "Réduire le risque tout en gardant de la marge pour la différenciation" : "Reduce launch risk while keeping room for brand differentiation"}</h2>
            <ul className="space-y-3 text-white/80 list-disc pl-5">{stockBest.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="border border-white/15 rounded-3xl p-8">
            <p className="uppercase text-[11px] tracking-[0.32em] text-white/45 mb-4">{fr ? "QUAND LE CUSTOM EST PERTINENT" : "WHEN CUSTOM MAKES SENSE"}</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">{fr ? "Investir lorsque la différence créée est réellement utile" : "Invest when the difference created is genuinely valuable"}</h2>
            <ul className="space-y-3 text-white/80 list-disc pl-5">{customBest.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "UNE ROUTE INTERMÉDIAIRE" : "A MIDDLE ROUTE"}</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">{fr ? "Stock + personnalisation peut offrir un compromis solide" : "Stock + customization can offer a strong middle route"}</h2>
            <p className="text-stone-600 leading-relaxed">{fr ? "Beaucoup de projets n’ont pas besoin d’un nouveau moule. Une référence existante peut être différenciée par la couleur, le coating, la sérigraphie, le marquage à chaud, les composants ou le packaging secondaire." : "Many projects do not need new tooling. An existing reference can still be differentiated through color, coating, silk screen, hot stamping, components or secondary packaging."}</p>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
            <h3 className="font-serif text-3xl text-brand-dark mb-5">{fr ? "Questions à poser avant de décider" : "Questions to ask before deciding"}</h3>
            <ul className="space-y-3 text-stone-600 list-disc pl-5">
              <li>{fr ? "Quel est le volume réaliste du premier lancement ?" : "What is the realistic first-launch volume?"}</li>
              <li>{fr ? "Quelle partie du packaging doit être distinctive ?" : "Which part of the pack truly needs to be distinctive?"}</li>
              <li>{fr ? "Quel délai est réellement disponible ?" : "How much time is actually available?"}</li>
              <li>{fr ? "Quel niveau d’investissement initial est acceptable ?" : "What level of upfront investment is acceptable?"}</li>
              <li>{fr ? "Une référence standard peut-elle répondre aux contraintes techniques ?" : "Can a standard reference meet the technical requirements?"}</li>
            </ul>
            <Link to={localizedPath("/cosmetic-packaging-moq", language)} className="mt-6 inline-flex items-center gap-2 text-sm text-brand-dark underline underline-offset-4">
              {fr ? "Comprendre les MOQ packaging" : "Understand packaging MOQ"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuides language={language} current="stock" />

      <section className="max-w-5xl mx-auto px-6 py-20 text-center bg-stone-50 border border-stone-200 rounded-[30px] mb-20">
        <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-5">{fr ? "VOTRE PROJET" : "YOUR PROJECT"}</p>
        <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">{fr ? "Vous hésitez entre une référence stock et un développement custom ?" : "Deciding between stock packaging and custom development?"}</h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">{fr ? "Partagez votre volume, votre référence et vos priorités. Nous pouvons comparer les options autour du MOQ, du délai, de la personnalisation et de la faisabilité." : "Share your volume, reference and priorities. We can compare options around MOQ, timing, customization and feasibility."}</p>
        <Link to={localizedPath("/contact", language)} onClick={() => trackContactCta("/stock-vs-custom-packaging/", fr ? "Comparer les options" : "Compare Your Options")} className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full">
          {fr ? "Comparer les options" : "Compare Your Options"}
        </Link>
      </section>
    </div>
  );
};

export default StockVsCustomPackaging;
