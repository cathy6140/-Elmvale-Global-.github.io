import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../App";

const Cookies: React.FC = () => {

  const { language } = useContext(LanguageContext);
  const isFr = language === "fr";

  useEffect(() => {
    document.title = isFr
      ? "Elmvale Global – Cookies"
      : "Elmvale Global – Cookies";

    const desc = isFr
      ? "Politique cookies d’Elmvale Global : cookies strictement nécessaires et mesure d’audience Google Analytics 4 avec consentement."
      : "Elmvale Global Cookies Policy: strictly necessary cookies and Google Analytics 4 used with consent.";

    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.name = "description";
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute("content", desc);
  }, [isFr]);
  
  return (
    <div className="bg-white">
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
          Cookies Policy
        </h1>
        <p className="text-stone-600 max-w-3xl leading-relaxed">
          This Cookies Policy explains how Elmvale Global uses cookies and
          similar technologies on elmvaleglobal.com.
        </p>
      </section>

      <section className="pb-32 px-6 lg:px-12 max-w-screen-2xl mx-auto space-y-10">
        <div>
          <h2 className="font-serif text-2xl text-brand-dark mb-3">
            1. What are cookies?
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Cookies are small text files placed on your device when you visit a
            website. They help the site function, remember your preferences and
            understand how visitors use the site.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-brand-dark mb-3">
            2. Types of cookies we use
          </h2>
          <h3 className="font-semibold text-stone-800 mb-1">
            a) Strictly necessary cookies
          </h3>
          <p className="text-stone-600 leading-relaxed mb-3">
            These cookies are essential for the website to function (for
            example, to remember your language choice and cookie preferences).
            They do not require your consent.
          </p>

          <h3 className="font-semibold text-stone-800 mb-1">
            b) Analytics cookies (Google Analytics 4)
          </h3>
          <p className="text-stone-600 leading-relaxed">
            With your consent, we use Google Analytics 4 to collect aggregated
            statistics about how visitors use our site (pages visited, time
            spent, browser type, etc.). These cookies help us improve our
            content and user experience. Analytics cookies are only activated
            after you click “Accept analytics” in our cookie banner.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-brand-dark mb-3">
            3. Managing your cookie choices
          </h2>
          <p className="text-stone-600 leading-relaxed">
            On your first visit, you can accept or reject analytics cookies via
            our cookie banner. If you change your mind later, you can delete
            cookies via your browser settings. We will present the banner again
            when needed so you can update your choice.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-brand-dark mb-3">
            4. Contact
          </h2>
          <p className="text-stone-600 leading-relaxed">
            If you have any questions about this Cookies Policy, you can
            contact us at{" "}
            <a
              href="mailto:contact@elmvaleglobal.com"
              className="underline underline-offset-2"
            >
              contact@elmvaleglobal.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
