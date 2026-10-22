import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const fragranceSprite = "/images/fragrance-categories.webp";

const cardPositions = [
  "0% 0%",
  "33.333% 0%",
  "66.666% 0%",
  "100% 0%",
  "0% 100%",
  "33.333% 100%",
  "66.666% 100%",
  "100% 100%",
];

const FragrancePackaging: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  useEffect(() => {
    setSeoMeta(
      fr ? "Packaging parfum & flacons | Elmvale Global" : "Fragrance & Perfume Packaging Sourcing | Elmvale Global",
      fr
        ? "Sourcing de flacons parfum, pompes, capots, cols, décoration et packaging secondaire auprès de fabricants en Chine."
        : "Source perfume bottles, pumps, caps, collars, decoration and secondary packaging with manufacturers in China."
    );
  }, [fr]);

  const categories = fr
    ? [
        "Flacons en verre",
        "Pompes & systèmes de sertissage",
        "Capots",
        "Cols",
        "Coating & coloration",
        "Sérigraphie & marquage à chaud",
        "Coffrets & étuis",
        "Développement packaging sur mesure",
      ]
    : [
        "Glass bottles",
        "Pumps & crimp systems",
        "Caps",
        "Collars",
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
            ? "Nous recherchons et coordonnons des solutions de packaging parfum auprès de fabricants en Chine, des composants standards aux développements personnalisés."
            : "We source and coordinate fragrance packaging solutions with manufacturers in China, from stock components to customized development."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <article
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-stone-200/70 bg-stone-900 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  role="img"
                  aria-label={item}
                  className="relative aspect-[4/3] bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  style={{
                    backgroundImage: `url(${fragranceSprite})`,
                    backgroundSize: "400% 200%",
                    backgroundPosition: cardPositions[index],                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,22,18,0.16),rgba(24,19,15,0.28),rgba(14,11,9,0.52))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,235,0.16),transparent_45%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <h2 className="max-w-[90%] text-white text-lg md:text-xl font-medium leading-snug tracking-[0.06em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.38)]">
                      {item}
                    </h2>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-xs text-stone-400 max-w-3xl leading-relaxed">
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
