import React, { useContext, useEffect, useMemo } from "react";

import { Link, useSearchParams } from "react-router-dom";

import { ArrowRight, Clock, Layers, PackageCheck, Globe2 } from "lucide-react";

import { LanguageContext } from "../App";

import { setSeoMeta } from "../seo";

const SkincareMaskPackaging: React.FC = () => {

  const { language } = useContext(LanguageContext);

  const [searchParams] = useSearchParams();

  useEffect(() => {

    if (language === "fr") {

      setSeoMeta(

        "Solutions d’emballage skincare & masques | Elmvale Global",

        "Sourcing d’emballages pour skincare, masques, patchs hydrogel, pochettes, tubes, flacons, pots, étuis et options plus durables."

      );

    } else {

      setSeoMeta(

        "Skincare & Mask Packaging Solutions | Elmvale Global",

        "Custom sourcing support for skincare bottles, tubes, jars, sheet mask pouches, hydrogel mask packaging, folding cartons and sustainable packaging options."

      );

    }

  }, [language]);

  const withLang = useMemo(() => {

    const current = new URLSearchParams(searchParams);

    current.set("lang", language);

    return (pathname: string) => ({

      pathname,

      search: `?${current.toString()}`,

    });

  }, [language, searchParams]);

  const contactLink = useMemo(() => {

    const p = new URLSearchParams(searchParams);

    p.set("lang", language);

    p.set("category", "Skincare & Mask Packaging");

    p.set("source", "skincare-mask-packaging");

    return { pathname: "/contact", search: `?${p.toString()}` };

  }, [language, searchParams]);

  const copy =

    language === "fr"

      ? {

          label: "Solutions skincare & masques",

          title: "Solutions d’emballage pour skincare, masques et lancements beauté rapides.",

          subtitle:

            "Sourcing sur mesure pour flacons, tubes, pots, pochettes de masques, emballages hydrogel, étuis pliants et options plus durables.",

          cta: "Envoyer un brief packaging",

          secondary: "Voir les produits",

          introTitle: "Pour les marques beauté, OEM/ODM et partenaires packaging",

          intro:

            "Nous accompagnons les projets skincare et masques avec un sourcing flexible, des échantillons rapides et une coordination de production en Chine pour les lancements internationaux.",

          kbeautyTitle: "Adapté aux projets K-beauty et mask-led skincare",

          kbeauty:

            "Des pochettes sheet mask aux emballages hydrogel, en passant par les étuis, coffrets et options plus durables, nous aidons les équipes à comparer rapidement les solutions adaptées au développement produit.",

          categoriesTitle: "Catégories d’emballages",

          whyTitle: "Pourquoi travailler avec Elmvale Global",

          processTitle: "Processus simple",

        }

      : {

          label: "Skincare & Mask Packaging",

          title: "Packaging solutions for skincare, mask and fast-moving beauty launches.",

          subtitle:

            "Custom sourcing support for skincare bottles, tubes, jars, sheet mask pouches, hydrogel mask packaging, folding cartons and sustainable packaging options.",

          cta: "Send us your packaging brief",

          secondary: "View products",

          introTitle: "For beauty brands, OEM/ODM manufacturers and packaging partners",

          intro:

            "We support skincare and mask packaging projects with flexible sourcing, fast sampling and China-side production coordination for global beauty launches.",

          kbeautyTitle: "Suitable for K-beauty inspired and mask-led skincare projects",

          kbeauty:

            "From sheet mask pouches and hydrogel mask packaging to skincare sets, cartons and sustainable options, we help teams compare packaging solutions for fast product development and overseas market versions.",

          categoriesTitle: "Packaging categories",

          whyTitle: "Why work with Elmvale Global",

          processTitle: "Simple project process",

        };

  const categories =

    language === "fr"

      ? [

          ["Pochettes masques & hydrogel", ["Sheet mask pouches", "Hydrogel mask pouches", "Eye patch pouches", "Foil pouches", "Roll film", "Pochettes recyclables"]],

          ["Packaging skincare primaire", ["Flacons sérum", "Pots crème", "Tubes cosmétiques", "Airless bottles", "PET / PP / verre", "Caps & closures"]],

          ["Étuis & coffrets", ["Étuis pliants", "Coffrets rigides", "Calages intérieurs", "Travel sets", "Sample kits", "Retail display boxes"]],

          ["Options plus durables", ["PCR options", "Mono-material", "Paper-based packaging", "FSC paper boxes", "Refill pouches", "Lightweighting"]],

        ]

      : [

          ["Mask & hydrogel packaging", ["Sheet mask pouches", "Hydrogel mask pouches", "Eye patch pouches", "Foil pouches", "Roll film", "Recyclable pouch concepts"]],

          ["Skincare primary packaging", ["Serum bottles", "Cream jars", "Cosmetic tubes", "Airless bottles", "PET / PP / glass containers", "Caps & closures"]],

          ["Cartons & beauty sets", ["Folding cartons", "Rigid gift boxes", "Inner trays", "Travel sets", "Sample kits", "Retail display boxes"]],

          ["Sustainable options", ["PCR options", "Mono-material packaging", "Paper-based packaging", "FSC paper boxes", "Refill pouches", "Lightweighting"]],

        ];

  const advantages =

    language === "fr"

      ? [

          [Clock, "Échantillons rapides", "Coordination d’échantillons pour lancements, présentations acheteurs et comparaisons packaging."],

          [Layers, "MOQ flexible", "Adapté aux tests marché, versions export, coffrets promotionnels et projets sensibles au coût."],

          [PackageCheck, "Coordination Chine", "Sourcing et suivi auprès de partenaires de fabrication pour composants, pochettes, étuis et coffrets."],

          [Globe2, "Prêt pour l’export", "Options avec documentation, traçabilité et considérations de durabilité selon le marché cible."],

        ]

      : [

          [Clock, "Fast sampling", "Sample sourcing for launches, buyer presentations and packaging comparisons."],

          [Layers, "Flexible MOQ", "Suitable for market tests, overseas versions, promotional sets and cost-sensitive projects."],

          [PackageCheck, "China-side coordination", "Sourcing and follow-up with manufacturing partners for components, pouches, cartons and boxes."],

          [Globe2, "Global market readiness", "Packaging options with documentation, traceability and sustainability considerations for target markets."],

        ];

  const process =

    language === "fr"

      ? [

          ["01", "Envoyer le brief", "Produit, format, matériau, quantité, marché cible et planning."],

          ["02", "Matching échantillons", "Nous présélectionnons des options adaptées et coordonnons les échantillons."],

          ["03", "Alignement specs", "Matériau, décor, MOQ, délai, tests et documentation."],

          ["04", "Suivi production", "Suivi commande, points qualité et coordination expédition."],

        ]

      : [

          ["01", "Send your brief", "Product type, size, material, quantity, target market and timeline."],

          ["02", "Sample matching", "We shortlist suitable packaging options and coordinate samples."],

          ["03", "Specification alignment", "Material, decoration, MOQ, lead time, testing and documentation."],

          ["04", "Production follow-up", "Order follow-up, quality checkpoints and shipment coordination."],

        ];

  return (

    <div className="bg-stone-50 text-stone-800">

      <section className="bg-brand-dark text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <p className="uppercase tracking-[0.25em] text-sm text-stone-300 mb-6">

            {copy.label}

          </p>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl">

            {copy.title}

          </h1>

          <p className="mt-8 text-lg md:text-xl text-stone-200 max-w-3xl leading-relaxed">

            {copy.subtitle}

          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link

              to={contactLink}

              className="inline-flex items-center justify-center rounded-full bg-white text-brand-dark px-7 py-3 font-medium hover:bg-stone-100 transition"

            >

              {copy.cta}

              <ArrowRight className="ml-2 h-4 w-4" />

            </Link>

            <Link

              to={withLang("/products")}

              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 font-medium hover:bg-white/10 transition"

            >

              {copy.secondary}

            </Link>

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">

        <div className="rounded-3xl bg-white border border-stone-200 p-8 shadow-sm">

          <h2 className="font-serif text-2xl md:text-3xl mb-4">

            {copy.introTitle}

          </h2>

          <p className="text-stone-700 leading-relaxed mb-6">{copy.intro}</p>

          <h3 className="font-serif text-xl md:text-2xl mb-3">

            {copy.kbeautyTitle}

          </h3>

          <p className="text-stone-700 leading-relaxed">{copy.kbeauty}</p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="font-serif text-3xl md:text-4xl mb-8">

          {copy.categoriesTitle}

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {categories.map(([title, items]) => (

            <div key={title as string} className="rounded-3xl bg-white border border-stone-200 p-8 shadow-sm">

              <h3 className="font-serif text-2xl mb-5">{title}</h3>

              <ul className="grid sm:grid-cols-2 gap-3">

                {(items as string[]).map((item) => (

                  <li key={item} className="text-stone-700">

                    • {item}

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </section>

      <section className="bg-white border-y border-stone-200">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="font-serif text-3xl md:text-4xl mb-10">

            {copy.whyTitle}

          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {advantages.map(([Icon, title, desc]) => {

              const LucideIcon = Icon as typeof Clock;

              return (

                <div key={title as string} className="rounded-3xl bg-stone-50 p-7">

                  <LucideIcon className="h-8 w-8 mb-5 text-brand-dark" />

                  <h3 className="font-serif text-xl mb-3">{title as string}</h3>

                  <p className="text-stone-600 leading-relaxed">{desc as string}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="font-serif text-3xl md:text-4xl mb-8">

          {copy.processTitle}

        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          {process.map(([no, title, desc]) => (

            <div key={no} className="rounded-3xl border border-stone-200 p-7 bg-white">

              <div className="text-sm tracking-[0.2em] text-stone-400 mb-4">{no}</div>

              <h3 className="font-serif text-xl mb-3">{title}</h3>

              <p className="text-stone-600 leading-relaxed">{desc}</p>

            </div>

          ))}

        </div>

      </section>

      <section className="bg-brand-dark text-white">

        <div className="max-w-5xl mx-auto px-6 py-16 text-center">

          <h2 className="font-serif text-3xl md:text-4xl mb-6">

            {language === "fr"

              ? "Vous avez un projet skincare ou masque ?"

              : "Have a skincare or mask packaging project?"}

          </h2>

          <p className="text-stone-200 max-w-2xl mx-auto mb-8 leading-relaxed">

            {language === "fr"

              ? "Envoyez-nous votre brief et nous vous aiderons à comparer les options selon échantillons, MOQ, coût et faisabilité."

              : "Send us your brief and we will help compare suitable options for sampling, MOQ, cost and production feasibility."}

          </p>

          <Link

            to={contactLink}

            className="inline-flex items-center justify-center rounded-full bg-white text-brand-dark px-8 py-3 font-medium hover:bg-stone-100 transition"

          >

            {copy.cta}

            <ArrowRight className="ml-2 h-4 w-4" />

          </Link>

        </div>

      </section>

    </div>

  );

};

export default SkincareMaskPackaging;
