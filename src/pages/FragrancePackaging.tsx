import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

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
    ? ["Flacons verre", "Pompes & sertissage", "Capots", "Cols", "Coating & coloration", "Sérigraphie & marquage à chaud", "Coffrets & étuis", "Moules sur mesure"]
    : ["Glass bottles", "Pumps & crimp systems", "Caps", "Collars", "Coating & coloration", "Silk screen & hot stamping", "Boxes & cartons", "Custom tooling"];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "PACKAGING PARFUM" : "FRAGRANCE PACKAGING"}</p>
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
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((item) => (
            <div key={item} className="bg-white border border-stone-200 rounded-2xl p-5 font-medium text-brand-dark">{item}</div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Personnalisation" : "Customization"}</h2>
          <p className="text-stone-600 leading-relaxed">{fr ? "Selon le projet et le fabricant, nous pouvons rechercher des options de coloration verre, coating, sérigraphie, marquage à chaud, composants décoratifs et développements de moules." : "Depending on the project and manufacturer, we can source options for glass coloration, coating, silk screen, hot stamping, decorative components and custom tooling."}</p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Informations utiles pour démarrer" : "Useful Information to Start"}</h2>
          <p className="text-stone-600 leading-relaxed">{fr ? "Volume du flacon, référence visuelle, type de pompe, finition, quantité estimée, marché cible et calendrier de lancement." : "Bottle volume, visual reference, pump type, finish, estimated quantity, target market and launch timing."}</p>
        </div>
      </section>
      <section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl mb-5">{fr ? "Parlez-nous de votre projet parfum" : "Tell Us About Your Fragrance Project"}</h2>
          <Link to="/contact" className="inline-block bg-white text-brand-dark px-7 py-3 rounded-full">{fr ? "Envoyer un brief" : "Send Your Brief"}</Link>
        </div>
      </section>
    </div>
  );
};

export default FragrancePackaging;
