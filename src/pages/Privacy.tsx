// src/pages/Privacy.tsx 
import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const Privacy: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const isFR = language === "fr";
  
  useEffect(() => {
    if (isFr) {
      setSeoMeta(
        "Elmvale Global – Politique de confidentialité",
        "Politique de confidentialité d’Elmvale Global expliquant comment nous traitons les données personnelles sur ce site."
      );
    } else {
      setSeoMeta(
        "Elmvale Global – Privacy Policy",
        "Elmvale Global privacy policy explaining how we handle personal data on this website."
      );
    }
  }, [isFr]);

  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24">
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
            {isFR ? "Politique de confidentialité" : "Privacy Policy"}
          </h1>
          <p className="text-sm text-stone-500">
            {isFR ? "Dernière mise à jour : 2 janvier 2026" : "Last updated: 02 January 2026"}
          </p>
        </header>

        <div className="space-y-10 text-stone-700 leading-relaxed text-sm md:text-base">
          {/* 1. Intro */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "1. Responsable du traitement & contact" : "1. Data controller & contact"}
            </h2>
            <p>
              {isFR ? (
                <>
                  La présente Politique de confidentialité explique comment <strong>Elmvale Global</strong>{" "}
                  (« nous ») collecte, utilise et protège vos données personnelles lorsque vous visitez{" "}
                  <strong>elmvaleglobal.com</strong> ou nous contactez au sujet de projets de packaging pour
                  cosmétiques et soins.
                </>
              ) : (
                <>
                  This Privacy Policy explains how <strong>Elmvale Global</strong> (“we”, “us”, “our”) collects,
                  uses, and protects personal information when you visit{" "}
                  <strong>elmvaleglobal.com</strong> or contact us about cosmetic and skincare packaging projects.
                </>
              )}
            </p>
            <p className="mt-2">
              <strong>Elmvale Global</strong>
              <br />
              Email: <a href="mailto:contact@elmvaleglobal.com">contact@elmvaleglobal.com</a>
              <br />
              Website: <a href="https://elmvaleglobal.com">https://elmvaleglobal.com</a>
            </p>
          </section>

          {/* 2. Data we collect */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR
                ? "2. Données personnelles que nous collectons"
                : "2. Personal data we collect"}
            </h2>
            <h3 className="font-semibold mb-1">
              {isFR ? "2.1. Informations que vous nous communiquez" : "2.1. Information you provide"}
            </h3>
            <p>
              {isFR ? (
                <>
                  Lorsque vous nous contactez via le formulaire de contact ou par e-mail, vous pouvez nous
                  communiquer votre nom, société, fonction, coordonnées professionnelles et détails de projet
                  (catégorie d’emballage, quantités, délais, marchés, brief…).
                </>
              ) : (
                <>
                  When you contact us via the contact form or by email, you may provide your name, company,
                  role, business contact details and project details (packaging category, quantities, timelines,
                  markets, brief, and similar information).
                </>
              )}
            </p>

            <h3 className="font-semibold mt-4 mb-1">
              {isFR
                ? "2.2. Informations collectées automatiquement"
                : "2.2. Information collected automatically"}
            </h3>
            <p>
              {isFR ? (
                <>
                  Lors de votre visite sur le site, certaines informations techniques peuvent être collectées
                  automatiquement (adresse IP, type de navigateur, pages consultées, pays/région approximatif),
                  notamment via Google Analytics 4, afin de sécuriser et améliorer le site.
                </>
              ) : (
                <>
                  When you visit the site, certain technical information may be collected automatically (IP
                  address, browser type, pages visited, approximate country/region), including via Google
                  Analytics 4, in order to secure and improve the website.
                </>
              )}
            </p>
          </section>

          {/* 3. Purposes & legal bases */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "3. Finalités et bases juridiques" : "3. Purposes and legal bases"}
            </h2>
            <p>
              {isFR ? (
                <>
                  Lorsque le RGPD (UE/Royaume-Uni) s’applique, nous traitons vos données uniquement si nous
                  disposons d’un fondement juridique valable, notamment l’intérêt légitime (répondre à vos
                  demandes, gérer nos relations d’affaires, sécuriser et améliorer le site), votre consentement
                  (pour certains cookies ou communications, le cas échéant) et l’exécution d’un contrat ou de
                  mesures précontractuelles.
                </>
              ) : (
                <>
                  Where EU/UK data protection law applies, we process your data only where we have a valid legal
                  basis, including legitimate interests (responding to inquiries, managing business
                  relationships, securing and improving the site), your consent (for certain cookies or
                  communications where required), and contract performance or pre-contractual steps.
                </>
              )}
            </p>
          </section>

          {/* 4. Cookies */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "4. Cookies et analytique" : "4. Cookies and analytics"}
            </h2>
            <p>
              {isFR ? (
                <>
                  Nous utilisons des cookies et outils similaires pour assurer le fonctionnement du site et
                  mesurer l’audience (par exemple via Google Analytics 4). Selon la législation locale, certains
                  cookies ne sont déposés qu’avec votre consentement. Vous pouvez gérer les cookies via la
                  bannière dédiée ou les réglages de votre navigateur.
                </>
              ) : (
                <>
                  We use cookies and similar tools to operate the site and measure audience (for example via
                  Google Analytics 4). Depending on local law, some cookies are used only with your consent. You
                  can manage cookies through the site banner (where available) or your browser settings.
                </>
              )}
            </p>
          </section>

          {/* 5. Sharing */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "5. Partage et sous-traitants" : "5. Sharing and service providers"}
            </h2>
            <p>
              {isFR ? (
                <>
                  Nous ne vendons pas vos données personnelles. Nous pouvons les partager avec des prestataires
                  de services (hébergeurs, prestataires de formulaire, analytique) agissant en tant
                  que sous-traitants, ainsi qu’avec des conseils professionnels ou autorités lorsque la loi
                  l’impose.
                </>
              ) : (
                <>
                  We do not sell your personal information. We may share it with service providers (hosting,
                  form processing, analytics) acting as processors, as well as professional advisers or
                  authorities where required by law.
                </>
              )}
            </p>
          </section>

          {/* 6. Transfers & retention */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "6. Transferts internationaux & conservation" : "6. Transfers and retention"}
            </h2>
            <p>
              {isFR ? (
                <>
                  Vos données peuvent être traitées en dehors de votre pays de résidence, y compris en dehors de
                  l’EEE/Royaume-Uni. Dans ce cas, nous nous appuyons sur des garanties appropriées (par
                  exemple, clauses contractuelles types) ou limitons ces transferts au strict nécessaire. Les
                  données sont conservées pendant la durée nécessaire aux finalités décrites puis supprimées ou
                  anonymisées, sauf obligation légale contraire.
                </>
              ) : (
                <>
                  Your data may be processed outside your country of residence, including outside the EEA/UK.
                  Where this occurs, we rely on appropriate safeguards (such as standard contractual clauses) or
                  limit such transfers to what is strictly necessary. Data is retained for as long as needed for
                  the purposes described and then deleted or anonymised, unless a longer period is required by
                  law.
                </>
              )}
            </p>
          </section>

          {/* 7. Rights */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "7. Vos droits" : "7. Your rights"}
            </h2>
            <p>
              {isFR ? (
                <>
                  Selon votre juridiction (par exemple en Europe ou dans certains États américains), vous pouvez
                  disposer de droits d’accès, de rectification, d’effacement, de limitation, d’opposition, de
                  portabilité et de retrait du consentement. Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:contact@elmvaleglobal.com">contact@elmvaleglobal.com</a>. Vous pouvez aussi
                  introduire une réclamation auprès de votre autorité de contrôle locale.
                </>
              ) : (
                <>
                  Depending on your jurisdiction (for example in Europe or certain US states), you may have
                  rights to access, correct, delete, restrict or object to processing, request portability, and
                  withdraw consent. To exercise these rights, please contact{" "}
                  <a href="mailto:contact@elmvaleglobal.com">contact@elmvaleglobal.com</a>. You also have the
                  right to lodge a complaint with your local data protection authority.
                </>
              )}
            </p>
          </section>

          {/* 8. Security, children, changes */}
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">
              {isFR ? "8. Sécurité, mineurs & modifications" : "8. Security, children and changes"}
            </h2>
            <p>
              {isFR ? (
                <>
                  Nous mettons en place des mesures techniques et organisationnelles raisonnables pour protéger
                  vos données. Nos Services sont destinés à des professionnels et non aux mineurs. Nous pouvons
                  mettre à jour la présente Politique de temps à autre ; la date de mise à jour en haut de la
                  page sera alors adaptée.
                </>
              ) : (
                <>
                  We implement reasonable technical and organisational measures to protect your data. Our
                  Services are intended for professionals and not for children. We may update this Policy from
                  time to time; the “Last updated” date at the top of this page will be revised accordingly.
                </>
              )}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
