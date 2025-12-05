import React, { useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../content';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

type CategoryId =
  | 'bottles-jars'
  | 'tubes-sachets'
  | 'pumps-dispensers'
  | 'caps-closures'
  | 'other';

const normalizeCategory = (raw: string | null): CategoryId => {
  if (!raw) return 'other';
  const v = raw.trim().toLowerCase();

  // 支持你未来想传的多种写法
  if (['bottles', 'bottle', 'jar', 'jars', 'bottles-jars', 'bottles&jars', 'bottles-and-jars'].includes(v)) return 'bottles-jars';
  if (['tubes', 'tube', 'sachet', 'sachets', 'tubes-sachets'].includes(v)) return 'tubes-sachets';
  if (['pump', 'pumps', 'dispenser', 'dispensers', 'spray', 'sprayer', 'pumps-dispensers'].includes(v)) return 'pumps-dispensers';
  if (['cap', 'caps', 'closure', 'closures', 'caps-closures'].includes(v)) return 'caps-closures';
  return 'other';
};

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const [searchParams] = useSearchParams();
  const categoryId = useMemo(
    () => normalizeCategory(searchParams.get('category')),
    [searchParams]
  );

  const categoryLabel = useMemo(() => {
    // 这里做“显示用”的多语言标签（提交也能一并带走）
    const labels: Record<LanguageContext['language'], Record<CategoryId, string>> = {
      en: {
        'bottles-jars': 'Bottles & Jars',
        'tubes-sachets': 'Tubes & Sachets',
        'pumps-dispensers': 'Pumps & Dispensers',
        'caps-closures': 'Caps & Closures',
        other: 'Other / Not sure',
      },
      fr: {
        'bottles-jars': 'Flacons & Pots',
        'tubes-sachets': 'Tubes & Sachets',
        'pumps-dispensers': 'Pompes & Distributeurs',
        'caps-closures': 'Bouchons & Fermetures',
        other: 'Autre / Pas sûr',
      },
    } as any;

    return labels[language]?.[categoryId] ?? labels.en[categoryId];
  }, [language, categoryId]);

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Header */}
      <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-20">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">{t.intro.title}</h1>
        <p className="text-xl text-stone-600 font-light max-w-2xl leading-relaxed">
          {t.intro.desc}
        </p>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">{t.details.title}</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <Mail className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{t.details.labels.email}</span>
                    <a href={`mailto:${t.details.email}`} className="text-stone-500 font-light hover:text-brand-dark transition">
                      {t.details.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <Phone className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{t.details.labels.phone}</span>
                    <span className="text-stone-500 font-light">{t.details.phone}</span>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <Clock className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{t.details.labels.hours}</span>
                    <span className="text-stone-500 font-light">{t.details.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-brand-primary pl-6 py-2">
              <p className="text-stone-600 font-serif italic text-lg leading-relaxed">
                {t.map}
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-10">{t.form.title}</h2>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              {/* ✅ Category（自动从 ?category=... 选中） */}
              <div className="relative z-0 w-full group">
                <select
                  name="category"
                  id="category"
                  defaultValue={categoryId}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-brand-dark font-light"
                >
                  <option value="bottles-jars">{language === 'fr' ? 'Flacons & Pots' : 'Bottles & Jars'}</option>
                  <option value="tubes-sachets">{language === 'fr' ? 'Tubes & Sachets' : 'Tubes & Sachets'}</option>
                  <option value="pumps-dispensers">{language === 'fr' ? 'Pompes & Distributeurs' : 'Pumps & Dispensers'}</option>
                  <option value="caps-closures">{language === 'fr' ? 'Bouchons & Fermetures' : 'Caps & Closures'}</option>
                  <option value="other">{language === 'fr' ? 'Autre / Pas sûr' : 'Other / Not sure'}</option>
                </select>
                <div className="mt-2 text-xs text-stone-400 font-light">
                  {language === 'fr' ? 'Catégorie pré-remplie depuis votre sélection.' : 'Category prefilled from your selection.'}
                </div>
              </div>

              {/* 可选：把“显示标签”也带上，方便你收集线索 */}
              <input type="hidden" name="categoryLabel" value={categoryLabel} />

              {/* 原来的字段保持不变 */}
              <div className="relative z-0 w-full group">
                <input type="text" name="name" id="name"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.name}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input type="text" name="company" id="company"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" " />
                <label htmlFor="company" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.company}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input type="email" name="email" id="email"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.email}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <textarea name="message" id="message" rows={4}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light resize-none"
                  placeholder=" " required />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.message}
                </label>
              </div>

              <button className="mt-8 bg-brand-dark text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-primary transition duration-500">
                {t.form.submit}
              </button>

              <p className="text-xs text-stone-400 mt-4 font-light">{t.details.privacy}</p>
            </form>
          </div>

        </div>

        <div className="mt-32 text-center">
          <h3 className="font-serif text-3xl text-brand-dark">{t.final}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
