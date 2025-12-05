import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../content';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const FORMSPREE_URL = "https://formspree.io/f/xjkaopok"; 

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const labels = {
    email: language === 'fr' ? 'Email' : 'Email',
    phone: language === 'fr' ? 'WhatsApp / Téléphone' : 'WhatsApp / Phone',
    coverage: language === 'fr' ? 'Couverture' : 'Coverage',
    hours: language === 'fr' ? 'Délai de réponse' : 'Response time',
    category: language === 'fr' ? 'Catégorie' : 'Category',
    moq: language === 'fr' ? 'MOQ / volume estimé' : 'MOQ / estimated volume',
  };

  const categoryOptions = language === 'fr'
    ? ['Flacons & Pots', 'Tubes & Sachets', 'Pompes & Distributeurs', 'Bouchons & Fermetures', 'Autre']
    : ['Bottles & Jars', 'Tubes & Sachets', 'Pumps & Dispensers', 'Caps & Closures', 'Other'];

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Header */}
      <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-20">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">
          {t.intro.title}
        </h1>
        <p className="text-xl text-stone-600 font-light max-w-2xl leading-relaxed">
          {t.intro.desc}
        </p>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">
                {t.details.title}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <Mail className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{labels.email}</span>
                    <a
                      href={`mailto:${t.details.email}`}
                      className="text-stone-500 font-light hover:text-brand-dark transition"
                    >
                      {t.details.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Phone className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{labels.phone}</span>
                    <span className="text-stone-500 font-light">{t.details.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <MapPin className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{labels.coverage}</span>
                    <span className="text-stone-500 font-light">
                      {/* 建议你把 content.ts 里的 address 改成 “Global service · EU/US/KR markets” */}
                      {t.details.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Clock className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">{labels.hours}</span>
                    <span className="text-stone-500 font-light">{t.details.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Text */}
            <div className="border-l-2 border-brand-primary pl-6 py-2">
              <p className="text-stone-600 font-serif italic text-lg leading-relaxed">
                {t.map}
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-10">
              {t.form.title}
            </h2>

            <form className="space-y-10" action={FORMSPREE_URL} method="POST">
              {/* Honeypot (anti-spam) */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.name}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                />
                <label htmlFor="company" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.company}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.email}
                </label>
              </div>

              {/* Category */}
              <div className="relative z-0 w-full group">
                <select
                  name="category"
                  id="category"
                  required
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-brand-dark font-light"
                  defaultValue=""
                >
                  <option value="" disabled>{labels.category}</option>
                  {categoryOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* MOQ / volume */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="moq"
                  id="moq"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                />
                <label htmlFor="moq" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {labels.moq}
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light resize-none"
                  placeholder=" "
                  required
                />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.message}
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 bg-brand-dark text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-primary transition duration-500"
              >
                {t.form.submit}
              </button>

              <p className="text-xs text-stone-400 mt-4 font-light">
                {t.details.privacy}
              </p>
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
