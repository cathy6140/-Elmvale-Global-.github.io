import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../types";
import { localizedPath } from "../locale";

type GuideKey = "brief" | "moq" | "stock";

type Props = {
  language: Language;
  current: GuideKey;
};

const guides: Record<GuideKey, {
  path: string;
  en: { title: string; description: string };
  fr: { title: string; description: string };
}> = {
  brief: {
    path: "/packaging-sourcing-brief",
    en: {
      title: "Packaging sourcing brief",
      description: "What to prepare before comparing packaging options and suppliers."
    },
    fr: {
      title: "Brief sourcing packaging",
      description: "Les informations à préparer avant de comparer les options et fournisseurs."
    }
  },
  moq: {
    path: "/cosmetic-packaging-moq",
    en: {
      title: "Cosmetic packaging MOQ",
      description: "Understand what changes minimum quantities and how to reduce launch risk."
    },
    fr: {
      title: "MOQ packaging cosmétique",
      description: "Comprendre ce qui fait varier les minimums et comment réduire le risque de lancement."
    }
  },
  stock: {
    path: "/stock-vs-custom-packaging",
    en: {
      title: "Stock vs custom packaging",
      description: "Compare MOQ, timing, investment, differentiation and launch risk."
    },
    fr: {
      title: "Packaging stock vs custom",
      description: "Comparer MOQ, délais, investissement, différenciation et risque de lancement."
    }
  }
};

const RelatedGuides: React.FC<Props> = ({ language, current }) => {
  const fr = language === "fr";
  const related = (Object.entries(guides) as [GuideKey, typeof guides[GuideKey]][])
    .filter(([key]) => key !== current);

  return (
    <section className="bg-stone-50 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-10">
          <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-4">
            {fr ? "GUIDES ASSOCIÉS" : "RELATED GUIDES"}
          </p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-4">
            {fr ? "Poursuivre la réflexion packaging" : "Continue the packaging decision process"}
          </h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Ces guides couvrent les décisions qui suivent souvent naturellement ce sujet."
              : "These guides cover the decisions that often come next in the sourcing process."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {related.map(([key, guide]) => {
            const copy = guide[language];
            return (
              <Link
                key={key}
                to={localizedPath(guide.path, language)}
                className="group bg-white border border-stone-200 rounded-2xl p-7 hover:shadow-md transition"
              >
                <h3 className="font-serif text-2xl text-brand-dark mb-3 group-hover:underline underline-offset-4">
                  {copy.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-5">
                  {copy.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-brand-dark">
                  {fr ? "Lire le guide" : "Read the guide"} <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedGuides;
