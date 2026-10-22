import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

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

  useEffect(() => {
    setSeoMeta(
      fr ? "Packaging parfum & flacons | Elmvale Global" : "Fragrance & Perfume Packaging Sourcing | Elmvale Global",
      fr
        ? "Sourcing de flacons parfum, pompes, capots, cols, décoration et packaging secondaire pour projets fragrance."
        : "Source perfume bottles, pumps, caps, collars, decoration and secondary packaging for fragrance projects."
    );
  }, [fr]);

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

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "PACKAGING PARFUM" : "FRAGRANCE PACKAGING"}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">
          {fr ? "Sourcing packaging pour marques de parfum" : "Packaging Sourcing for Fragrance Brands"}
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

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Personnalisation" : "Customization"}</h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Selon le projet et le fabricant, nous pouvons rechercher des options de coloration verre, coating, sérigraphie, marquage à chaud, composants décoratifs et développements sur mesure."
              : "Depending on the project and manufacturer, we can source options for glass coloration, coating, silk screen, hot stamping, decorative components and custom packaging development."}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Informations utiles pour démarrer" : "Useful Information to Start"}</h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Volume du flacon, référence visuelle, type de pompe, finition, quantité estimée, marché cible et calendrier de lancement."
              : "Bottle volume, visual reference, pump type, finish, estimated quantity, target market and launch timing."}
          </p>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl mb-5">{fr ? "Parlez-nous de votre projet parfum" : "Tell Us About Your Fragrance Project"}</h2>
          <Link to="/contact" className="inline-block bg-white text-brand-dark px-7 py-3 rounded-full">
            {fr ? "Envoyer un brief" : "Send Your Brief"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FragrancePackaging;
