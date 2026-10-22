import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Cookies: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const sections = fr
    ? [
        ["1. Que sont les cookies ?", "Les cookies sont de petits fichiers stockés sur votre appareil. Ils peuvent être nécessaires au fonctionnement du site ou utilisés pour mesurer l’audience lorsque vous y consentez."],
        ["2. Cookies nécessaires", "Nous pouvons utiliser des éléments de stockage nécessaires au fonctionnement du site, notamment pour mémoriser votre langue ou vos choix de consentement."],
        ["3. Mesure d’audience", "Google Analytics 4 est configuré avec un mode de consentement. Les fonctions d’analyse nécessitant un consentement ne sont activées qu’après votre accord lorsque celui-ci est requis."],
        ["4. Gérer vos choix", "Vous pouvez accepter ou refuser l’analyse via la bannière de consentement et supprimer les cookies ou données de site depuis les réglages de votre navigateur."],
        ["5. Contact", "Pour toute question concernant cette politique : contact@elmvaleglobal.com."]
      ]
    : [
        ["1. What are cookies?", "Cookies are small files stored on your device. They may be necessary for website functionality or used for audience measurement when you consent."],
        ["2. Necessary storage", "We may use storage that is necessary for the website to function, including remembering your language or consent choices."],
        ["3. Analytics", "Google Analytics 4 is configured with consent mode. Analytics functions that require consent are enabled only after you agree where consent is required."],
        ["4. Managing your choices", "You can accept or reject analytics through the consent banner and remove cookies or site data through your browser settings."],
        ["5. Contact", "For questions about this policy: contact@elmvaleglobal.com."]
      ];

  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
          {fr ? "Politique cookies" : "Cookie Policy"}
        </h1>
        <p className="text-sm text-stone-500 mb-10">
          {fr ? "Dernière mise à jour : 21 octobre 2026" : "Last updated: 21 October 2026"}
        </p>
        <div className="space-y-9 text-stone-700 leading-relaxed">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-serif text-2xl text-brand-dark mb-3">{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cookies;
