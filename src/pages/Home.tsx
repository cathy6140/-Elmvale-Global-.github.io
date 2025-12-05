import React, { useContext, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../content';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].home;
  const nav = content[language].nav;
  const [searchParams] = useSearchParams();

  // keep lang param for all routes
  const withLang = useMemo(() => {
    const current = new URLSearchParams(searchParams);
    current.set('lang', language);
    const search = `?${current.toString()}`;
    return (pathname: string) => ({ pathname, search });
  }, [language, searchParams]);

  // contact with prefilled category
  const contactWithCategory = (categoryTitle: string) => {
    const p = new URLSearchParams(searchParams);
    p.set('lang', language);
    p.set('category', categoryTitle);
    return { pathname: '/contact', search: `?${p.toString()}` };
  };

  return (
    <div className="bg-brand-cream">
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop"
            alt="Sustainable minimalist cosmetic packaging"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              img.onerror = null;
              img.src = "/elmvale-logo-1024.png"; // fallback
              img.style.objectFit = "contain";
              img.style.background = "#0b1f1a";
            }}
          />
      
          {/* Darken + editorial gradients for readability */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
        </div>
      
        {/* Content */}
        <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="h-full flex items-end pb-20 md:pb-28">
            <div className="max-w-3xl animate-fade-in-up">
              {/* Eyebrow (optional but premium) */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-10 bg-brand-primary/80" />
                <span className="text-xs uppercase tracking-[0.35em] text-white/80 font-medium">
                  Elmvale Global
                </span>
              </div>
      
              {/* Headline */}
              <h1
                className="
                  font-serif text-white
                  text-5xl md:text-7xl lg:text-8xl
                  leading-[1.02] md:leading-[1.03]
                  tracking-[-0.02em]
                  max-w-[14ch]
                "
                style={{ textShadow: "0 8px 30px rgba(0,0,0,0.35)" }}
              >
                {t.hero.tagline}
              </h1>
      
              {/* Subtext */}
              <p className="mt-8 text-base md:text-xl text-stone-200/95 font-light max-w-xl leading-relaxed border-l-2 border-brand-primary/90 pl-6">
                {t.hero.subtext}
              </p>
      
              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link
                  to="/products"
                  className="
                    inline-flex items-center justify-center
                    bg-white text-brand-dark
                    px-7 py-4
                    uppercase tracking-[0.2em] text-xs font-semibold
                    hover:bg-brand-light transition duration-500
                  "
                >
                  {content[language].nav.products}
                </Link>
      
                <Link
                  to="/contact"
                  className="
                    inline-flex items-center justify-center
                    border border-white/35 text-white
                    px-7 py-4
                    uppercase tracking-[0.2em] text-xs font-semibold
                    hover:bg-white hover:text-brand-dark transition duration-500
                  "
                >
                  {language === "en" ? "Request a Quote" : "Demander un devis"}
                </Link>
      
                <a
                  href="#explore"
                  className="hidden md:inline-flex items-center gap-3 text-white/90 uppercase tracking-[0.25em] text-xs font-semibold hover:text-white transition"
                >
                  {language === "en" ? "Explore" : "Explorer"}
                  <span className="w-12 h-[1px] bg-white/80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      
        {/* Anchor for explore */}
        <div id="explore" className="absolute bottom-0 left-0 right-0 h-1" />
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100 border-b border-stone-100">
            {[
              { title: t.valueProp.recyclable.title, desc: t.valueProp.recyclable.desc },
              { title: t.valueProp.compliance.title, desc: t.valueProp.compliance.desc },
              { title: t.valueProp.trust.title, desc: t.valueProp.trust.desc },
            ].map((x, idx) => (
              <div
                key={idx}
                className="px-6 py-12 md:px-12 text-center md:text-left hover:bg-stone-50 transition duration-500"
              >
                <div className="w-10 h-10 mb-6 mx-auto md:mx-0 rounded-full border border-black/10 flex items-center justify-center">
                  <img src="/elmvale-logo-512.png" alt="" className="w-5 h-5 opacity-80" />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">{x.title}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-32 bg-brand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
                {t.solutions.title}
              </h2>
              <p className="text-stone-500 font-light text-lg">{t.solutions.intro}</p>
            </div>
            <Link
              to={withLang('/products')}
              className="hidden md:flex items-center gap-2 text-brand-dark uppercase tracking-widest text-xs font-semibold hover:opacity-60 transition"
            >
              {language === 'en' ? 'View All' : 'Voir tout'} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.solutions.items.map((item, idx) => (
              <Link
                to={`/contact?category=${encodeURIComponent(
                  ['bottles-jars','tubes-sachets','pumps-dispensers','caps-closures'][idx] || 'other'
                )}`}
                key={idx}
                className="group relative block overflow-hidden aspect-[4/5] bg-white"
              >
                <img
                  src={`https://images.unsplash.com/photo-${[
                    '1615396659714-f446d51c416e',
                    '1629198688000-71f23e745b6e',
                    '1608248597279-f99d160bfbc8',
                    '1516975080664-ed2fc6a32937',
                  ][idx] || '1620916566398-39f1143ab7be'}?q=80&w=800&auto=format&fit=crop`}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition duration-500" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <span className="text-[10px] uppercase tracking-[0.25em] opacity-85">
                      {language === 'fr' ? 'Demander' : 'Inquire'}
                    </span>
                  </div>
                  <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition duration-500 delay-100 line-clamp-3 mt-2">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to={withLang('/products')}
              className="inline-flex items-center gap-2 text-brand-dark uppercase tracking-widest text-xs font-semibold"
            >
              {language === 'en' ? 'View All' : 'Voir tout'} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">{t.cta.title}</h2>
          <p className="text-xl text-brand-light/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            {t.cta.desc}
          </p>
          <Link
            to={withLang('/contact')}
            className="inline-block border border-white/30 bg-transparent text-white px-12 py-5 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-brand-dark transition duration-500"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
