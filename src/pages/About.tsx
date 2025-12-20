import React, { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../content';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].about;
  const nav = content[language].nav;

  const [searchParams] = useSearchParams();
  const withLang = (path: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('lang', language);
    return { pathname: path, search: `?${next.toString()}` };
  };

  return (
    <div className="bg-white">
      {/* Editorial Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="border-l-4 border-brand-dark pl-8 md:pl-16 py-4">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-10 leading-tight max-w-4xl">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-2xl text-stone-600 leading-relaxed font-light max-w-4xl">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Mission Image Break */}
      <section className="w-full h-[60vh] overflow-hidden">
        {/* ✅ 建议后续换成 public/about-hero.jpg:  src="/about-hero.jpg" */}
        <img
          src="/about-hero.png"
          alt="Nature and sustainable packaging"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-32">
        {/* Mission & Values Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl text-brand-dark mb-8 sticky top-32">
              {t.mission.title}
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-stone-700 font-serif leading-relaxed italic mb-20">
              {t.mission.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {t.values.items.map((value, idx) => (
                <div key={idx} className="border-t border-stone-200 pt-8">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise - Dark Block */}
        <div className="bg-brand-dark text-white p-12 md:p-24 relative overflow-hidden mb-32">
          {/* 用 style 写 backgroundImage，比 Tailwind arbitrary url 更稳 */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/noise.png')",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">
                {t.expertise.title}
              </h2>
              <Link
                to={withLang('/contact')}
                className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                {nav.contact} <ArrowRight size={16} />
              </Link>
            </div>

            <p className="text-stone-300 leading-loose text-lg font-light">
              {t.expertise.desc}
            </p>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center max-w-4xl mx-auto py-20">
          <p className="font-serif text-3xl md:text-4xl text-brand-dark leading-tight">
            “{t.conclusion}”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
