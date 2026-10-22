import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../App';
import { content } from '../content';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = content[language].nav;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Keep ?lang= in links
  const withLang = useMemo(() => {
    const current = new URLSearchParams(searchParams);
    current.set('lang', language);

    const search = `?${current.toString()}`;

    return (pathname: string) => ({ pathname, search });
  }, [language, searchParams]);

  const selectLang = (next: 'en' | 'fr') => {
    if (next === language) return;

    setLanguage(next);

    const p = new URLSearchParams(searchParams);
    p.set('lang', next);
    setSearchParams(p, { replace: true });
  };

  // ================= NAV LINKS =================
  // Updated structure:
  // Home / Products / Compliance / About / Contact
  const navLinks = [
    { path: '/', label: t.home },
    { path: '/products', label: language === 'fr' ? 'Packaging' : 'Packaging' },
    { path: '/sourcing', label: language === 'fr' ? 'Sourcing' : 'Sourcing' },
    { path: '/fragrance-packaging', label: language === 'fr' ? 'Parfum' : 'Fragrance' },
    { path: '/compliance', label: language === 'fr' ? 'Conformité' : 'Compliance' },
    { path: '/about', label: t.about },
    { path: '/contact', label: t.contact },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to={withLang('/')} className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-black/5 shadow-sm transition-transform duration-500 group-hover:rotate-6">
              <img
                src="/elmvale-logo-512.png"
                alt="Elmvale Global"
                className="w-7 h-7 object-contain"
                loading="eager"
              />
            </div>

            <div className="flex flex-col leading-none text-brand-dark">
              <span className="font-serif text-[17px] md:text-[19px] tracking-[0.08em]">
                ELMVALE
              </span>
              <span className="mt-1 text-[8px] md:text-[9px] font-medium tracking-[0.34em] pl-[0.34em]">
                GLOBAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={withLang(link.path)}
                className={`whitespace-nowrap text-[10px] lg:text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-brand-dark'
                    : 'text-stone-500 hover:text-brand-dark'
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 w-full h-[1px] bg-brand-dark transform origin-left transition-transform duration-300 ${
                    isActive(link.path)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-50'
                  }`}
                />
              </Link>
            ))}

            {/* Desktop Language Switcher */}
            <div className="flex items-center gap-2 border-l border-stone-300 pl-5 ml-1 text-[10px] tracking-[0.18em] font-semibold">
              <button
                onClick={() => selectLang('en')}
                className={`transition-opacity ${language === 'en' ? 'text-brand-dark opacity-100' : 'text-stone-400 opacity-70 hover:opacity-100'}`}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => selectLang('fr')}
                className={`transition-opacity ${language === 'fr' ? 'text-brand-dark opacity-100' : 'text-stone-400 opacity-70 hover:opacity-100'}`}
                aria-pressed={language === 'fr'}
                aria-label="Passer en français"
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em]">
              <button
                onClick={() => selectLang('en')}
                className={language === 'en' ? 'text-brand-dark' : 'text-stone-400'}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
              <span className="text-stone-300">·</span>
              <button
                onClick={() => selectLang('fr')}
                className={language === 'fr' ? 'text-brand-dark' : 'text-stone-400'}
                aria-pressed={language === 'fr'}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-brand-dark focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X strokeWidth={1.5} size={28} />
              ) : (
                <Menu strokeWidth={1.5} size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-cream z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-brand-dark"
          aria-label="Close menu"
        >
          <X size={32} strokeWidth={1} />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={withLang(link.path)}
            onClick={() => setIsOpen(false)}
            className="font-serif text-3xl text-brand-dark hover:italic transition-all"
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA */}
        <Link
          to={withLang('/contact')}
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-brand-dark text-white px-8 py-3 rounded-full text-sm uppercase tracking-[0.18em]"
        >
          {language === 'fr' ? 'Envoyer un brief' : 'Send a Brief'}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
