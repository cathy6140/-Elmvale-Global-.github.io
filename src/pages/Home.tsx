import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const steps = fr
    ? [
        ["01", "Partagez votre brief", "Type de produit, références, quantités, budget cible, finitions et calendrier."],
        ["02", "Sourcing fournisseurs", "Nous recherchons et comparons des options adaptées parmi notre réseau de fabricants en Chine."],
        ["03", "Échantillons & développement", "Coordination des échantillons, couleurs, décorations, composants et ajustements techniques."],
        ["04", "Production & qualité", "Suivi de production et coordination des contrôles et documents disponibles selon le projet."],
        ["05", "Préparation à l’expédition", "Coordination des exigences de livraison et des informations nécessaires à votre importation."]
      ]
    : [
        ["01", "Share your brief", "Product type, references, quantity, target cost, decoration and launch timing."],
        ["02", "Supplier sourcing", "We identify and compare suitable options across our manufacturing network in China."],
        ["03", "Sampling & development", "We coordinate samples, colors, decoration, components and technical adjustments."],
        ["04", "Production & quality", "We follow production and coordinate inspections and available documentation when required."],
        ["05", "Delivery preparation", "We coordinate shipment requirements and the information needed for your import process."]
      ];

  return (
    <div className="w-full">
      <section
        className="relative min-h-[620px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero-home.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.28em] text-xs text-white/70 mb-5">
              {fr ? "SOURCING PACKAGING EN CHINE" : "COSMETIC PACKAGING SOURCING FROM CHINA"}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-7 leading-tight">
              {fr
                ? "Sourcing de packaging cosmétique & parfum en Chine"
                : "Cosmetic & Fragrance Packaging Sourcing from China"}
            </h1>
            <p className="text-white/90 max-w-3xl text-lg md:text-xl leading-relaxed">
              {fr
                ? "Elmvale Global accompagne les marques beauté, skincare et parfum dans la recherche et le développement de packaging auprès de fabricants en Chine — du sourcing et des échantillons jusqu’au suivi de production."
                : "Elmvale Global helps beauty, skincare and fragrance brands source and develop packaging with manufacturers in China — from supplier search and sampling to production follow-up."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to="/contact" className="bg-white text-brand-dark px-8 py-3 rounded-full font-medium text-center hover:bg-stone-100 transition">
                {fr ? "Envoyer votre brief" : "Send Your Packaging Brief"}
              </Link>
              <Link to="/sourcing" className="border border-white/70 text-white px-8 py-3 rounded-full text-center hover:bg-white hover:text-brand-dark transition">
                {fr ? "Notre méthode de sourcing" : "How We Source"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            fr ? ["Beauty & skincare", "Flacons, pots, airless, droppers, tubes, pompes et packaging secondaire."] : ["Beauty & Skincare", "Bottles, jars, airless, droppers, tubes, pumps and secondary packaging."],
            fr ? ["Parfum", "Flacons verre, pompes, capots, cols, décorations, coffrets et développements sur mesure."] : ["Fragrance", "Glass bottles, pumps, caps, collars, decoration, boxes and custom development."],
            fr ? ["Coordination de projet", "Sourcing, comparaison d’options, échantillons, personnalisation, suivi de production et documentation disponible."] : ["Project Coordination", "Sourcing, option comparison, sampling, customization, production follow-up and available documentation."]
          ].map(([title, desc]) => (
            <div key={title}>
              <h2 className="font-semibold text-lg mb-3 text-brand-dark">{title}</h2>
              <p className="text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="uppercase text-xs tracking-[0.3em] text-stone-500 mb-3">
              {fr ? "COMMENT NOUS TRAVAILLONS" : "HOW WE WORK"}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4">
              {fr ? "Un interlocuteur pour coordonner votre projet packaging" : "One Partner to Coordinate Your Packaging Project"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Nous sommes en phase de développement commercial et travaillons à partir de ressources fabricants en Chine. Notre rôle est de vous aider à identifier les bonnes options et à coordonner le projet avec transparence."
                : "We are building our client portfolio and work from manufacturing resources in China. Our role is to help you identify suitable options and coordinate the project transparently from brief to production."}
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-5">
            {steps.map(([num, title, desc]) => (
              <div key={num} className="bg-white border border-stone-200 rounded-2xl p-5">
                <div className="text-xs tracking-[0.25em] text-stone-400 mb-4">{num}</div>
                <h3 className="font-semibold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8">
          <Link to="/sourcing" className="border border-stone-200 rounded-3xl p-8 hover:shadow-md transition">
            <p className="uppercase text-xs tracking-[0.25em] text-stone-400 mb-3">{fr ? "SERVICE" : "SERVICE"}</p>
            <h2 className="font-serif text-3xl text-brand-dark mb-3">{fr ? "Sourcing packaging en Chine" : "Packaging Sourcing in China"}</h2>
            <p className="text-stone-600">{fr ? "Comprendre notre processus de sélection, développement et coordination fournisseurs." : "See how we approach supplier search, development and project coordination."}</p>
          </Link>
          <Link to="/fragrance-packaging" className="border border-stone-200 rounded-3xl p-8 hover:shadow-md transition">
            <p className="uppercase text-xs tracking-[0.25em] text-stone-400 mb-3">{fr ? "SPÉCIALITÉ" : "SPECIALTY"}</p>
            <h2 className="font-serif text-3xl text-brand-dark mb-3">{fr ? "Packaging parfum" : "Fragrance Packaging"}</h2>
            <p className="text-stone-600">{fr ? "Flacons, pompes, capots, cols, décoration et packaging secondaire pour projets parfum." : "Bottles, pumps, caps, collars, decoration and secondary packaging for fragrance projects."}</p>
          </Link>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            {fr ? "Vous avez déjà une référence ou une idée de packaging ?" : "Already Have a Packaging Reference or Idea?"}
          </h2>
          <p className="text-white/75 mb-8">
            {fr ? "Envoyez-nous votre brief, une photo de référence, vos quantités et votre calendrier cible." : "Send us your brief, reference image, expected quantity and target launch timing."}
          </p>
          <Link to="/contact" className="inline-block bg-white text-brand-dark px-8 py-3 rounded-full font-medium">
            {fr ? "Envoyer un brief" : "Send a Brief"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
