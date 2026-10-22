import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const fragranceSprite = "data:image/webp;base64,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[... trimmed ...]";

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
