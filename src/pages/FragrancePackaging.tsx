import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { localizedPath } from "../locale";
import { trackContactCta } from "../analytics";

const fragranceImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
];

const FragrancePackaging: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const components = fr
    ? [
        "Flacons en verre",
        "Pompes & systèmes de sertissage",
        "Capots",
        "Cols",
      ]
    : [
        "Glass bottles",
        "Pumps & crimp systems",
        "Caps",
        "Collars",
      ];

  const development = fr
    ? [
        "Coating & coloration",
        "Sérigraphie & marquage à chaud",
        "Coffrets & étuis",
        "Développement packaging sur mesure",
      ]
    : [
        "Coating & coloration",
        "Silk screen & hot stamping",
        "Boxes & cartons",
        "Custom packaging development",
      ];

  const sourcingRoutes = fr
    ? [
        ["Pack complet", "Recherche coordonnée du flacon, de la pompe, du capot, du col et du packaging secondaire pour construire un ensemble cohérent."],
        ["Composants séparés", "Sourcing d’un composant spécifique si vous avez déjà une partie du pack ou souhaitez comparer une nouvelle option."],
        ["Options standards", "Recherche de références existantes pour avancer plus rapidement sur les échantillons et limiter le développement initial."],
        ["Développement personnalisé", "Recherche d’options de couleur, finition, décoration, composants spécifiques ou développement dédié selon faisabilité."],
      ]
    : [
        ["Full-set sourcing", "Coordinate bottle, pump, cap, collar and secondary packaging sourcing to build a coherent fragrance pack."],
        ["Individual components", "Source a specific component when part of the pack is already defined or you want to compare an alternative."],
        ["Stock options", "Search existing references to move faster on sampling and reduce initial development requirements."],
        ["Customized development", "Explore color, finish, decoration, component changes or dedicated development depending on feasibility."],
      ];

  const briefItems = fr
    ? [
        "Volume ou format recherché",
        "Photo, lien ou packaging de référence",
        "Type de pompe / système de sertissage si connu",
        "Finition, couleur et décoration souhaitées",
        "Quantité estimée",
        "Marché cible",
        "Calendrier de lancement",
      ]
    : [
        "Bottle volume or desired format",
        "Reference image, link or existing packaging",
        "Pump / crimp system if already known",
        "Desired finish, color and decoration",
        "Estimated quantity",
        "Target market",
        "Target launch timing",
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "PACKAGING PARFUM" : "FRAGRANCE PACKAGING"}
        </p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Sourcing packaging pour marques de parfum" : "Packaging sourcing for fragrance brands"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Nous recherchons et coordonnons des solutions de packaging parfum, des composants standards aux développements personnalisés."
            : "We source and coordinate fragrance packaging solutions, from stock components to customized development."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
          {[
            {
              eyebrow: fr ? "COMPOSANTS" : "COMPONENTS",
              title: fr ? "Les éléments principaux du pack parfum" : "Core Fragrance Packaging Components",
              items: components,
              offset: 0,
            },
            {
              eyebrow: fr ? "DÉCORATION & DÉVELOPPEMENT" : "DECORATION & DEVELOPMENT",
              title: fr ? "Finitions, étuis et développement sur mesure" : "Finishes, Boxes & Custom Development",
              items: development,
              offset: 4,
            },
          ].map((group) => (
            <div key={group.eyebrow}>
              <div className="max-w-2xl mb-8">
                <p className="uppercase text-[10px] tracking-[0.28em] text-stone-400 mb-3">{group.eyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">{group.title}</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, index) => (
                  <article
                    key={item}
                    className="overflow-hidden rounded-[22px] border border-stone-200 bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <img
                        src={fragranceImages[group.offset + index]}
                        alt={item}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-5 py-5">
                      <h3 className="font-serif text-xl text-brand-dark leading-snug">{item}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <p className="text-xs text-stone-400 max-w-3xl leading-relaxed">
            {fr
              ? "Les visuels sont illustratifs. Les options finales, matériaux, finitions et structures dépendent du fabricant et du brief du projet."
              : "Visuals are illustrative. Final options, materials, finishes and structures depend on the manufacturer and project brief."}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
            {fr ? "OPTIONS DE SOURCING" : "SOURCING ROUTES"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Du composant unique au pack parfum complet" : "From a single component to a complete fragrance pack"}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Le point de départ dépend de ce que vous avez déjà défini. Nous pouvons rechercher un ensemble complet ou intervenir sur une partie précise du packaging."
              : "The starting point depends on what you already have defined. We can search a complete set or focus on one specific part of the packaging."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
          {sourcingRoutes.map(([title, desc], index) => (
            <div key={title} className="bg-[#fbfaf8] p-7 min-h-[240px]">
              <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-7">0{index + 1}</div>
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
              {fr ? "MOQ, ÉCHANTILLONS & DÉLAIS" : "MOQ, SAMPLES & TIMING"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">
              {fr ? "Les paramètres dépendent du packaging sélectionné" : "Key Parameters Depend on the Selected Packaging"}
            </h2>
            <p className="text-white/70 leading-relaxed">
              {fr
                ? "Les exigences varient selon le flacon, les composants, la quantité et le niveau de personnalisation. Nous confirmons les conditions réalistes après sélection d’une option adaptée."
                : "Requirements vary by bottle, components, quantity and level of customization. We confirm realistic conditions once a suitable option has been selected."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-2xl mb-3">MOQ</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {fr
                  ? "Le MOQ dépend des composants, du fabricant et du niveau de personnalisation. Les références standards peuvent parfois permettre des quantités de départ plus basses."
                  : "MOQ depends on components, manufacturer and level of customization. Stock references may sometimes allow lower starting quantities."}
              </p>
            </div>
            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-2xl mb-3">{fr ? "Échantillons" : "Samples"}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {fr
                  ? "Des échantillons standards peuvent être demandés pour certaines références. Les échantillons personnalisés dépendent du type de développement nécessaire."
                  : "Stock samples can be requested for selected references. Customized samples depend on the development route required."}
              </p>
            </div>
            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-2xl mb-3">{fr ? "Délais" : "Lead Time"}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {fr
                  ? "Les délais dépendent du packaging, des quantités et du niveau de personnalisation. Nous confirmons le délai de production estimé une fois l’option adaptée sélectionnée."
                  : "Timing depends on the packaging, quantity and customization required. We confirm the expected production lead time once a suitable option has been selected."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="uppercase text-[10px] tracking-[0.26em] text-stone-400 mb-4">{fr ? "PERSONNALISATION" : "CUSTOMIZATION"}</p>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Personnalisation du pack parfum" : "Fragrance Pack Customization"}</h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Selon le projet et le fabricant, nous pouvons rechercher des options de coloration verre, coating, sérigraphie, marquage à chaud, composants décoratifs, coffrets et développements sur mesure."
              : "Depending on the project and manufacturer, we can source options for glass coloration, coating, silk screen, hot stamping, decorative components, boxes and custom packaging development."}
          </p>
        </div>
        <div>
          <p className="uppercase text-[10px] tracking-[0.26em] text-stone-400 mb-4">{fr ? "POUR DÉMARRER" : "TO GET STARTED"}</p>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Ce qu’il est utile de nous envoyer" : "What is helpful to send us"}</h2>
          <ul className="space-y-2.5 text-stone-600 list-disc pl-5">
            {briefItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-5">
            {fr ? "PROJET PARFUM" : "FRAGRANCE PROJECT"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Vous avez une référence ou une direction en tête ?" : "Have a reference or direction in mind?"}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {fr
              ? "Envoyez-nous une photo, un lien, un flacon existant ou simplement votre besoin. Nous vous aiderons à identifier les options à explorer."
              : "Send us an image, link, existing bottle or simply what you are looking for. We will help identify the options worth exploring."}
          </p>
          <Link to={localizedPath("/contact", language)} onClick={() => trackContactCta("/fragrance-packaging/", fr ? "Partager votre référence" : "Share Your Reference")} className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full">
            {fr ? "Partager votre référence" : "Share Your Reference"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FragrancePackaging;
