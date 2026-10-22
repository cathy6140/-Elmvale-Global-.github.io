import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const categories = fr
    ? [
        {
          title: "Packaging skincare primaire",
          desc: "Flacons, pots, airless, droppers et composants pour sérums, crèmes et soins.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_16_14.png",
          products: "Flacons · Pots · Airless · Droppers · Pompes",
          suitable: "Sérums · Crèmes · Lotions · Soins",
        },
        {
          title: "Packaging parfum",
          desc: "Flacons verre, pompes, capots, cols, décoration et étuis pour projets fragrance.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_15_26.png",
          products: "Flacons · Pompes · Capots · Cols · Étuis",
          suitable: "Eau de parfum · Brumes · Formats nomades",
          to: "/fragrance-packaging",
        },
        {
          title: "Tubes & distribution",
          desc: "Tubes, pompes, sprays et systèmes de distribution pour soins et cosmétiques.",
          image: "/Nature morte cosmétique en lumière naturelle.png",
          products: "Tubes · Pompes · Sprays · Distributeurs",
          suitable: "Crèmes · Gels · Solaires · Soins",
        },
        {
          title: "Mask & sachet packaging",
          desc: "Pochettes sheet mask, eye patch et sachets échantillons.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_16_00.png",
          products: "Pochettes · Sachets · Eye patch packs",
          suitable: "Sheet masks · Échantillons · Soins unidoses",
        },
        {
          title: "Packaging secondaire",
          desc: "Cartons, coffrets, beauty sets et solutions de présentation retail.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_15_40.png",
          products: "Cartons · Coffrets · Inserts · Beauty sets",
          suitable: "Retail · Coffrets cadeaux · Kits lancement",
        },
        {
          title: "Options plus durables",
          desc: "Recherche d’options PCR, papier FSC, mono-matériau ou réduction matière selon faisabilité.",
          image: "/Cosmétiques écoresponsables sous lumière naturelle.png",
          products: "PCR · Papier FSC · Mono-matériau · Réduction matière",
          suitable: "Projets avec objectifs de durabilité",
        },
      ]
    : [
        {
          title: "Skincare Primary Packaging",
          desc: "Bottles, jars, airless systems, droppers and components for serums, creams and treatments.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_16_14.png",
          products: "Bottles · Jars · Airless · Droppers · Pumps",
          suitable: "Serums · Creams · Lotions · Treatments",
        },
        {
          title: "Fragrance Packaging",
          desc: "Glass bottles, pumps, caps, collars, decoration and cartons for fragrance projects.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_15_26.png",
          products: "Bottles · Pumps · Caps · Collars · Cartons",
          suitable: "Eau de parfum · Mists · Travel formats",
          to: "/fragrance-packaging",
        },
        {
          title: "Tubes & Dispensing",
          desc: "Tubes, pumps, sprayers and dispensing systems for skincare and cosmetics.",
          image: "/Nature morte cosmétique en lumière naturelle.png",
          products: "Tubes · Pumps · Sprayers · Dispensers",
          suitable: "Creams · Gels · Sunscreen · Treatments",
        },
        {
          title: "Mask & Sachet Packaging",
          desc: "Sheet mask pouches, eye patch packs and sample sachets.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_16_00.png",
          products: "Pouches · Sachets · Eye patch packs",
          suitable: "Sheet masks · Samples · Single-use treatments",
        },
        {
          title: "Secondary Packaging",
          desc: "Cartons, boxes, beauty sets and retail presentation solutions.",
          image: "/Image ChatGPT 22 oct. 2026 à 17_15_40.png",
          products: "Cartons · Boxes · Inserts · Beauty sets",
          suitable: "Retail · Gift sets · Launch kits",
        },
        {
          title: "More Sustainable Options",
          desc: "Source PCR, FSC paper, mono-material or material-reduction options where feasible.",
          image: "/Cosmétiques écoresponsables sous lumière naturelle.png",
          products: "PCR · FSC paper · Mono-material · Material reduction",
          suitable: "Projects with sustainability targets",
        },
      ];

  const customization = fr
    ? [
        ["Format & capacité", "Forme, volume, col, dosage pompe et configuration des composants selon la gamme disponible."],
        ["Matériaux", "Plastique, verre, aluminium, papier et certaines options recyclées selon l’application et la faisabilité."],
        ["Couleur & finition", "Couleur personnalisée, mat, brillant, coating, métallisation et autres traitements de surface selon le composant."],
        ["Décoration", "Sérigraphie, marquage à chaud, étiquettes, impression et autres options de branding selon le packaging."],
      ]
    : [
        ["Format & Capacity", "Shape, fill volume, neck finish, pump output and component configuration depending on available ranges."],
        ["Materials", "Plastic, glass, aluminium, paper and selected recycled-material options depending on application and feasibility."],
        ["Color & Finish", "Custom color, matte or glossy finish, coating, metallization and other surface treatments depending on the component."],
        ["Decoration", "Silk screen, hot stamping, labels, printing and other branding options depending on the packaging."],
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">PACKAGING</p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Catégories de packaging que nous pouvons sourcer" : "Packaging Categories We Can Source"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          {fr
            ? "Nous ne limitons pas le sourcing à un catalogue fixe. Partagez une référence, une photo ou un besoin et nous rechercherons les options fabricants les plus pertinentes."
            : "We are not limited to a fixed catalog. Share a reference, image or requirement and we will search for relevant manufacturing options."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const card = (
              <div className="h-full overflow-hidden bg-white rounded-2xl border border-stone-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(28,24,20,0.08)]">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={category.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-brand-dark mb-3">{category.title}</h2>
                  <p className="text-stone-600 leading-relaxed mb-5">{category.desc}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="uppercase tracking-[0.2em] text-[10px] text-stone-400 mb-1.5">{fr ? "EXEMPLES" : "EXAMPLES"}</p>
                      <p className="text-stone-700">{category.products}</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-[0.2em] text-[10px] text-stone-400 mb-1.5">{fr ? "ADAPTÉ POUR" : "SUITABLE FOR"}</p>
                      <p className="text-stone-600">{category.suitable}</p>
                    </div>
                  </div>
                  {category.to && (
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-dark">
                      {fr ? "Explorer les options" : "Explore options"} <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </div>
            );

            return category.to ? (
              <Link key={category.title} to={category.to} className="block">
                {card}
              </Link>
            ) : (
              <div key={category.title}>{card}</div>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
            {fr ? "PERSONNALISATION" : "CUSTOMIZATION"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Ce qui peut être adapté à votre projet" : "What Can Be Adapted to Your Project"}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Les possibilités dépendent du type de packaging, du fabricant, de la quantité et du niveau de personnalisation. Nous vous aidons à identifier les options réalistes avant d’avancer."
              : "Available options depend on packaging type, manufacturer, quantity and level of customization. We help identify realistic routes before moving forward."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
          {customization.map(([title, desc], index) => (
            <div key={title} className="bg-[#fbfaf8] p-7 min-h-[230px]">
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
              {fr ? "MOQ, ÉCHANTILLONS & DÉLAIS" : "MOQ, SAMPLES & LEAD TIME"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">
              {fr ? "Les paramètres se confirment après sélection du packaging" : "Key Parameters Are Confirmed After Packaging Selection"}
            </h2>
            <p className="text-white/70 leading-relaxed">
              {fr
                ? "Nous évitons les promesses génériques : MOQ, échantillons et délais varient selon le composant, la personnalisation et le fabricant."
                : "We avoid generic promises: MOQ, sample availability and lead time vary by component, customization and manufacturer."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-2xl mb-3">MOQ</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {fr
                  ? "Le MOQ dépend du type de packaging, du fabricant et du niveau de personnalisation. Les composants standards peuvent permettre des quantités de départ plus basses."
                  : "MOQ depends on packaging type, manufacturer and level of customization. Stock components may allow lower starting quantities."}
              </p>
            </div>
            <div className="border border-white/15 rounded-2xl p-6">
              <h3 className="font-serif text-2xl mb-3">{fr ? "Échantillons" : "Samples"}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {fr
                  ? "Des échantillons standards peuvent être demandés pour certaines références. Les échantillons personnalisés dépendent du mode de développement."
                  : "Stock samples can be requested for selected references. Customized samples depend on the development route."}
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

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8">
        <Link to="/sourcing" className="border border-stone-200 rounded-3xl p-8 hover:shadow-md transition">
          <p className="uppercase tracking-[0.2em] text-[10px] text-stone-400 mb-4">{fr ? "MÉTHODE" : "PROCESS"}</p>
          <h2 className="font-serif text-3xl text-brand-dark mb-3">{fr ? "Besoin d’aide pour sourcer ?" : "Need Help Sourcing?"}</h2>
          <p className="text-stone-600">{fr ? "Découvrez comment nous recherchons, comparons et coordonnons les options fabricants." : "See how we search, compare and coordinate manufacturing options."}</p>
        </Link>

        <Link to="/contact" className="bg-stone-50 border border-stone-200 rounded-3xl p-8 hover:shadow-md transition">
          <p className="uppercase tracking-[0.2em] text-[10px] text-stone-400 mb-4">{fr ? "PAS DANS LE CATALOGUE ?" : "CAN’T FIND IT HERE?"}</p>
          <h2 className="font-serif text-3xl text-brand-dark mb-3">
            {fr ? "Envoyez-nous une référence ou une photo" : "Send Us a Reference or Image"}
          </h2>
          <p className="text-stone-600 mb-5">
            {fr
              ? "Nous ne sommes pas limités aux produits affichés sur cette page. Partagez une référence, une quantité cible ou votre besoin et nous rechercherons les options pertinentes."
              : "We are not limited to the products shown on this page. Share a reference, target quantity or requirement and we will search for relevant options."}
          </p>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-dark">
            {fr ? "Partager votre besoin" : "Share your requirements"} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Products;
