import React, { useContext, useEffect } from "react"; 
import { LanguageContext } from '../App';
import { content } from '../content';
import { Check } from 'lucide-react';
import { setSeoMeta } from "../seo";

const Compliance: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].compliance;

  useEffect(() => {
    if (language === "fr") {
      setSeoMeta(
        "Elmvale Global – Conformité & durabilité des emballages cosmétiques",
        "Informations sur la conformité des emballages cosmétiques (règlement UE, REACH, ISO 22716) et les initiatives de durabilité proposées par Elmvale Global."
      );
    } else {
      setSeoMeta(
        "Elmvale Global – Cosmetic packaging compliance & sustainability",
        "Overview of cosmetic packaging compliance (EU regulation, REACH, ISO 22716) and sustainability initiatives supported by Elmvale Global."
      );
    }
  }, [language]);

  const supportTitle = language === 'fr' ? 'Ce que nous fournissons' : 'What we provide';
  const needTitle = language === 'fr' ? 'Ce dont nous avons besoin' : 'What we need from you';

  const provide = language === 'fr'
    ? [
        'Fiches techniques matières / specs composants (sur demande)',
        'Traçabilité lot & certificats disponibles (selon usine / matière)',
        'Coordination tests tiers (SGS/BV/Intertek) si requis',
        'Revue “design for recycling” (mono-matériau, démontabilité, marquage)'
      ]
    : [
        'Material specs / component drawings (on request)',
        'Batch traceability + available certificates (per factory/material)',
        'Third-party testing coordination (SGS/BV/Intertek) when needed',
        'Design-for-recycling review (mono-material, disassembly, markings)'
      ];

  const need = language === 'fr'
    ? [
        'Marché cible + exigences internes',
        'Type de formule (sensibilités, alcool, huiles essentielles, etc.)',
        'Format, col/standard, décor, MOQ & délai',
        'Niveau PCR souhaité & contraintes esthétiques'
      ]
    : [
        'Target market + any internal requirements',
        'Formula type (sensitivities, alcohol, essential oils, etc.)',
        'Format, neck finish/standard, decoration, MOQ & timeline',
        'Target PCR % and appearance constraints'
      ];

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero with background image */}
      <section className="relative w-full min-h-[520px] md:min-h-[580px] overflow-hidden">
        {/* 背景图：放在 public/compliance-hero.jpg */}
        <img
          src="/compliance-hero.png"
          alt={
            language === "fr"
              ? "Documents de conformité et packagings cosmétiques durables"
              : "Compliance documents and sustainable cosmetic packaging"
          }
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        {/* 暗色渐变遮罩，保证文字可读 */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* 文案层 */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 pt-40 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <h1 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-[1.12] md:leading-[1.08] mb-8 max-w-[16ch] tracking-[-0.02em]">
              {t.intro.title}
            </h1>
            <p className="text-base md:text-xl text-stone-100/95 font-light leading-relaxed max-w-2xl border-l-2 border-brand-primary/90 pl-6">
              {t.intro.desc}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-32">
        {/* Regulations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl text-brand-dark sticky top-32">
              {t.regulations.title}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {t.regulations.items.map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full border border-brand-dark/30 flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-brand-dark mb-4">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-stone-200 mb-40" />

        {/* Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl text-brand-dark sticky top-32">
              {t.sustainability.title}
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {t.sustainability.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-dark mb-4 border-b border-stone-200 pb-2 inline-block">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical block: Provide / Need */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 md:p-12 border border-black/5 shadow-sm">
            <h3 className="font-serif text-2xl text-brand-dark mb-6">{supportTitle}</h3>
            <ul className="space-y-3 text-stone-600 font-light leading-relaxed">
              {provide.map((x, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full border border-brand-dark/25 flex items-center justify-center text-brand-dark">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 md:p-12 border border-black/5 shadow-sm">
            <h3 className="font-serif text-2xl text-brand-dark mb-6">{needTitle}</h3>
            <ul className="space-y-3 text-stone-600 font-light leading-relaxed">
              {need.map((x, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full border border-brand-dark/25 flex items-center justify-center text-brand-dark">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-white p-12 md:p-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <p className="font-serif text-2xl md:text-3xl text-brand-dark leading-relaxed max-w-4xl mx-auto">
            “{t.closing}”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
