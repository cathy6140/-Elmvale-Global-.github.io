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
        ? "Elmvale Global est un projet de sourcing dédié au packaging cosmétique et parfum pour les marques internationales."
        : "Elmvale Global is a packaging sourcing project for international beauty and fragrance brands."
    );
  }, [fr]);

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "À PROPOS" : "ABOUT"}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">
          {fr ? "Un projet de sourcing construit autour du packaging beauté" : "A Sourcing Project Built Around Beauty Packaging"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Elmvale Global est actuellement un projet entrepreneurial en développement, dédié au sourcing et à la coordination de packaging pour les marques skincare, beauté et parfum."
            : "Elmvale Global is currently an early-stage sourcing venture focused on packaging sourcing and project coordination for skincare, beauty and fragrance brands."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "Notre point de départ" : "Our Starting Point"}</h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Nous développons progressivement un réseau de fabricants de packaging adapté aux besoins des marques internationales."
                : "We are progressively building a packaging manufacturing network suited to the needs of international beauty brands."}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "Notre rôle" : "Our Role"}</h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Aider le client à clarifier son besoin, rechercher des options, comparer les solutions et coordonner les échanges avec les fabricants."
                : "Help clients clarify requirements, source options, compare solutions and coordinate communication with manufacturers."}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "Notre approche" : "Our Approach"}</h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Privilégier la transparence : ce qui est confirmé par le fabricant est présenté comme tel, et ce qui nécessite un test ou une validation est clairement indiqué."
                : "Work transparently: information confirmed by a manufacturer is presented as such, while anything requiring testing or validation is clearly identified."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Réseau de fabrication" : "Manufacturing Network"}</h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Notre réseau s’appuie notamment sur des ressources fabricants en Chine pour les flacons, pots, pompes, tubes, composants parfum, décorations et packaging secondaire. Notre rôle est d’identifier les options adaptées au projet et de coordonner le développement avec clarté."
              : "Our sourcing network includes manufacturing resources in China for bottles, jars, pumps, tubes, fragrance components, decoration and secondary packaging. Our role is to identify suitable options and coordinate development clearly."}
          </p>
        </div>
        <div className="bg-brand-dark text-white rounded-3xl p-8">
          <h2 className="font-serif text-3xl mb-4">{fr ? "Construisons le premier projet ensemble" : "Build the Next Project With Us"}</h2>
          <p className="text-white/75 mb-6">
            {fr
              ? "Nous n’affichons pas de faux logos clients ni de faux cas d’étude. Si votre projet correspond à nos ressources, nous préférons vous montrer des options concrètes et avancer étape par étape."
              : "We do not display invented client logos or fabricated case studies. If your project fits our resources, we prefer to show concrete options and move forward step by step."}
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand-dark px-6 py-3 rounded-full">
            {fr ? "Envoyer votre brief" : "Send Your Brief"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
