import React, { useContext, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../content';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].products;
  const [searchParams] = useSearchParams();

  const images = [
    'https://images.unsplash.com/photo-1615396659714-f446d51c416e?q=80&w=1600&auto=format&fit=crop', // Bottles & Jars
    'https://images.unsplash.com/photo-1556228720-1987df6a5e1a?q=80&w=1600&auto=format&fit=crop', // Tubes & Sachets
    'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=1600&auto=format&fit=crop', // Pumps
    'https://images.unsplash.com/photo-1605309608249-166e4a2e5532?q=80&w=1600&auto=format&fit=crop', // Caps
  ];

  // keep lang param everywhere
  const withLang = useMemo(() => {
    const p = new URLSearchParams(searchParams);
    p.set('lang', language);
    const search = `?${p.toString()}`;
    return (pathname: string) => ({ pathname, search });
  }, [language, searchParams]);

  // contact with category prefilled
  const contactWithCategory = (categoryTitle: string) => {
    const p = new URLSearchParams(searchParams);
    p.set('lang', language);
    p.set('category', categoryTitle);
    return { pathname: '/contact', search: `?${p.toString()}` };
  };

  const tocLabel = language === 'fr' ? 'Catégories' : 'Categories';
  const quoteLabel = language === 'fr' ? 'Demander un devis' : 'Request a quote';
  const learnLabel = language === 'fr' ? 'Voir la conformité' : 'See compliance';

  // lightweight “sales enablement” bullets (可后续迁移到 content.ts)
  const bulletsByIndex: Array<string[]> = [
    language === 'fr'
      ? ['Verre / PET / PP · options PCR', 'Cols standard (ex. 18/410–24/410)', 'Décors : sérigraphie, laquage, marquage à chaud']
      : ['Glass / PET / PP · optional PCR', 'Standard neck finishes (e.g. 18/410–24/410)', 'Decoration: silk-screen, color coating, hot stamping'],
    language === 'fr'
      ? ['Tubes PE/PP monomatériau · coex au besoin', 'Sachets allégés · films sur demande', 'Barrière / étanchéité selon formule']
      : ['Mono-material PE/PP tubes · coex when needed', 'Lightweight sachets · films upon request', 'Barrier / sealing per formula needs'],
    language === 'fr'
      ? ['Pompes lotion · spray · brumisateur', 'Options tout-plastique (sans métal) possibles', 'Tests dose / fonctionnement sur échantillon']
      : ['Lotion pumps · sprays · misters', 'All-plastic options (no metal) available', 'Dose/actuation tests on master samples'],
    language === 'fr'
      ? ['Flip-top · screw cap · lids', 'Conception monomatériau & liner-less options', 'Couple / étanchéité validables en test']
      : ['Flip-top · screw caps · lids', 'Mono-material & liner-less options', 'Torque/leakage can be validated via testing'],
  ];

  // slug for anchors
  const anchorId = (i: number) => `cat-${i + 1}`;

  return (
    <div className="bg-brand-cream pb-20">
      {/* Header */}
      <section className="pt-32 pb-14 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-10">
          {t.intro.title}
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl font-light">
          {t.intro.desc}
        </p>

        {/* Quick TOC */}
        <div className="mt-10 border-t border-stone-200 pt-8">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400 mb-4">
            {tocLabel}
          </div>
          <div className="flex flex-wrap gap-3">
            {t.categories.map((cat, idx) => (
              <a
                key={idx}
                href={`#${anchorId(idx)}`}
                className="px-4 py-2 bg-white border border-stone-200 text-brand-dark text-xs uppercase tracking-[0.18em] hover:border-brand-dark/30 hover:bg-stone-50 transition"
              >
                {cat.title}
              </a>
            ))}
            <Link
              to={withLang('/compliance')}
              className="px-4 py-2 bg-brand-dark text-white text-xs uppercase tracking-[0.18em] hover:bg-brand-dark/90 transition inline-flex items-center gap-2"
            >
              {learnLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="space-y-0">
        {t.categories.map((cat, idx) => (
          <div
            key={idx}
            id={anchorId(idx)}
            className="scroll-mt-28 group flex flex-col md:flex-row h-auto md:h-[82vh] min-h-[620px] w-full border-t border-stone-200 last:border-b"
          >
            {/* Text */}
            <div
              className={`w-full md:w-1/2 p-10 md:p-20 lg:p-24 flex flex-col justify-center ${
                idx % 2 === 1 ? 'md:order-2 bg-white' : 'bg-brand-cream'
              }`}
            >
              <span className="text-brand-dark/40 font-serif text-6xl md:text-8xl mb-6 opacity-20 select-none">
                0{idx + 1}
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
                {cat.title}
              </h2>

              <p className="text-stone-600 text-lg font-light leading-loose mb-10">
                {cat.desc}
              </p>

              {/* Practical bullets */}
              <ul className="space-y-3 text-stone-500 font-light leading-relaxed mb-10">
                {(bulletsByIndex[idx] || []).map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-dark/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  to={contactWithCategory(cat.title)}
                  className="inline-flex items-center justify-center px-10 py-4 bg-brand-dark text-white uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-primary transition duration-500"
                >
                  {quoteLabel}
                </Link>

                <Link
                  to={withLang('/contact')}
                  className="inline-flex items-center justify-center px-10 py-4 border border-stone-300 text-brand-dark uppercase tracking-[0.2em] text-xs font-semibold hover:border-brand-dark/30 hover:bg-stone-50 transition duration-500"
                >
                  {language === 'fr' ? 'Parler à un expert' : 'Talk to an expert'}
                </Link>
              </div>

              <p className="text-xs text-stone-400 mt-4 font-light">
                {language === 'fr'
                  ? 'Astuce : indiquez le marché cible et le type de formule pour accélérer la recommandation.'
                  : 'Tip: include target market and formula type to speed up recommendations.'}
              </p>
            </div>

            {/* Image */}
            <div className={`w-full md:w-1/2 overflow-hidden relative ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <img
                src={images[idx] || `https://picsum.photos/seed/prod${idx}/800/800`}
                alt={cat.title}
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition duration-700" />
            </div>
          </div>
        ))}
      </div>

      {/* Quality & Customization */}
      <div className="bg-white py-32 border-t border-stone-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">{t.quality.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light text-lg">{t.quality.desc}</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-brand-dark mb-6">{t.customization.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light text-lg">{t.customization.desc}</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-serif text-2xl text-brand-dark">
                {language === 'fr' ? 'Un brief rapide = un devis plus rapide.' : 'A clear brief = a faster quote.'}
              </div>
              <div className="text-stone-500 font-light mt-2">
                {language === 'fr'
                  ? 'Partagez catégorie, volume, marché cible, et contraintes de décor.'
                  : 'Share category, volume, target market, and decoration constraints.'}
              </div>
            </div>
            <Link
              to={withLang('/contact')}
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-dark text-white uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-primary transition duration-500"
            >
              {language === 'fr' ? 'Ouvrir le formulaire' : 'Open inquiry form'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
