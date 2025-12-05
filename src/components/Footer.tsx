import React, { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../content';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language];
  const [searchParams] = useSearchParams();

  // 保持语言不丢：所有 footer 链接自动带 ?lang=
  const withLang = (path: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('lang', language);
    return { pathname: path, search: `?${next.toString()}` };
  };

  return (
    <footer className="bg-brand-dark text-stone-300 py-18 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6 max-w-md">
            <div className="flex items-center gap-3 text-white">
              <img
                src="/elmvale-logo-512.png"
                alt="Elmvale Global"
                className="w-9 h-9"
                loading="eager"
              />
              <div>
                <div className="font-serif text-2xl tracking-wide leading-none">ELMVALE</div>
                <div className="text-xs tracking-[0.2em] text-stone-300/90">GLOBAL</div>
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed text-stone-200/90">
              {t.footer?.blurb ?? t.home.hero.subtext}
            </p>

            <div className="text-xs text-stone-400">
              {t.contact?.details?.email ?? 'info@elmvaleglobal.com'}
              {' · '}
              {t.contact?.details?.phone ?? 'WhatsApp +86 130 6260 1713'}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-5">
              <h4 className="text-white uppercase tracking-[0.2em] text-xs font-semibold">
                {t.footer?.menu ?? 'Menu'}
              </h4>
              <ul className="space-y-3 text-sm font-light">
                <li><Link to={withLang('/about')} className="hover:text-white transition">{t.nav.about}</Link></li>
                <li><Link to={withLang('/products')} className="hover:text-white transition">{t.nav.products}</Link></li>
                <li><Link to={withLang('/compliance')} className="hover:text-white transition">{t.nav.compliance}</Link></li>
                <li><Link to={withLang('/contact')} className="hover:text-white transition">{t.nav.contact}</Link></li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-white uppercase tracking-[0.2em] text-xs font-semibold">
                {t.footer?.marketsTitle ?? 'Markets'}
              </h4>
              <ul className="space-y-3 text-sm font-light text-stone-200/90">
                <li>{t.footer?.marketsLine ?? (language === 'fr' ? 'Service marchés UE · US · Corée' : 'Serving EU · US · Korea')}</li>
                <li>{t.footer?.leadTime ?? (language === 'fr' ? 'De l’échantillon à la production' : 'From sampling to production')}</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-white uppercase tracking-[0.2em] text-xs font-semibold">
                {t.footer?.legal ?? (language === 'fr' ? 'Légal' : 'Legal')}
              </h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a className="hover:text-white transition" href="privacy.html">{t.footer?.privacy ?? 'Privacy Policy'}</a></li>
                <li><a className="hover:text-white transition" href="terms.html">{t.footer?.terms ?? 'Terms of Service'}</a></li>
                <li><a className="hover:text-white transition" href="cookies.html">{t.footer?.cookies ?? 'Cookies'}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs font-light flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Elmvale Global. {t.footer?.rights ?? ''}
          </p>
          <div className="opacity-90">
            {language === 'fr'
              ? 'Emballages durables · Conformité · Traçabilité'
              : 'Sustainable packaging · Compliance · Traceability'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
