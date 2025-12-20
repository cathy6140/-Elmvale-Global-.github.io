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
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Keep ?lang= in links
  const withLang = useMemo(() => {
    const current = new URLSearchParams(searchParams);
    current.set('lang', language);
    const search = `?${current.toString()}`;
    return (pathname: string) => ({ pathname, search });
  }, [language, searchParams]);

  const toggleLang = () => {
    const next = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
    const p = new URLSearchParams(searchParams);
    p.set('lang', next);
    setSearchParams(p, { replace: true });
  };

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/products', label: t.products },
    { path: '/about', label: t.about },
    { path: '/compliance', label: t.compliance },
    { path: '/contact', label: t.contact },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">

          {/* Logo (use your brand mark) */}
          <Link to={withLang('/')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-black/5 shadow-sm transition-transform duration-500 group-hover:rotate-6">
              <img
                src="/elmvale-logo-512.png"
                alt="Elmvale Global"
                className="w-7 h-7 object-contain"
                loading="eager"
              />
            </div>
            <span className="    font-serif
                                 text-lg md:text-xl
                                 uppercase
                                 tracking-[0.35em]
                                 font-normal
                                 text-brand-dark">
              ELMVALE GLOBAL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={withLang(link.path)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative group ${
                  isActive(link.path) ? 'text-brand-dark' : 'text-stone-500 hover:text-brand-dark'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 w-full h-[1px] bg-brand-dark transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  }`}
                />
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="text-xs font-semibold tracking-widest text-brand-dark border-l border-stone-300 pl-6 ml-2 hover:opacity-70 transition-opacity"
              aria-label={language === 'en' ? 'Switch to French' : 'Switch to English'}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="text-xs font-bold text-brand-dark tracking-wider"
              aria-label={language === 'en' ? 'Switch to French' : 'Switch to English'}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="text-brand-dark focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X strokeWidth={1.5} size={28} /> : <Menu strokeWidth={1.5} size={28} />}
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
      </div>
    </nav>
  );
};

export default Navbar;
