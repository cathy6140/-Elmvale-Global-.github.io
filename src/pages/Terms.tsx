// src/pages/Terms.tsx
import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Terms: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const isFr = language === "fr";

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
          {isFr ? "Conditions d’utilisation" : "Terms of Service"}
        </h1>
        <p className="text-xs md:text-sm text-stone-500 mb-10">
          {isFr ? "Dernière mise à jour : 1 janvier 2026" : "Last updated: 1 January 2026"}
        </p>

        <div className="space-y-8 text-sm md:text-base text-stone-700 leading-relaxed">
          {isFr ? (
            <>
              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  1. Qui nous sommes
                </h2>
                <p>
                  Les présentes Conditions d’utilisation (les « Conditions ») régissent
                  votre utilisation du site elmvaleglobal.com (le « Site »), exploité par
                  Elmvale Global (« Elmvale Global », « nous »). Le Site s’adresse à un
                  public professionnel et présente nos services de sourcing, négoce et
                  coordination de projets pour des emballages cosmétiques et de soins.
                </p>
                <p>
                  En accédant au Site ou en l’utilisant, vous acceptez d’être lié(e) par
                  les présentes Conditions. Si vous n’êtes pas d’accord, vous ne devez
                  pas utiliser le Site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  2. Ce que fait – et ne fait pas – ce Site
                </h2>
                <p>
                  Les informations publiées sur le Site sont fournies à titre général,
                  illustratif et marketing uniquement. Elles ne constituent pas une offre
                  ferme de vente, ni un avis juridique ou réglementaire, ni une garantie
                  de disponibilité, de prix, de délais ou de performances.
                </p>
                <p>
                  Toute relation commerciale avec Elmvale Global (par exemple fourniture
                  d’emballages, contrôles qualité, logistique, prestations de conseil)
                  est régie par des contrats écrits distincts, bons de commande et/ou
                  cahiers des charges convenus entre vous et Elmvale Global.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  3. Admissibilité et usage acceptable
                </h2>
                <p>
                  En utilisant le Site, vous confirmez que vous agissez pour le compte
                  d’une entreprise ou organisation professionnelle et que vous êtes
                  habilité(e) à l’engager.
                </p>
                <p>Vous vous engagez notamment à ne pas :</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>utiliser le Site de manière illégale ou à des fins illicites ;</li>
                  <li>
                    tenter d’obtenir un accès non autorisé au Site, à nos serveurs ou à
                    nos systèmes ;
                  </li>
                  <li>
                    aspirer ou copier massivement le Site à des fins concurrentielles ou
                    abusives ;
                  </li>
                  <li>
                    transmettre tout code malveillant (virus, malware, etc.) ; ni
                  </li>
                  <li>
                    usurper l’identité d’une autre personne ou fausser votre affiliation.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  4. Demandes, devis et conditions commerciales
                </h2>
                <p>
                  Le Site vous permet de nous contacter pour discuter de projets, demander
                  des informations ou un devis. En soumettant une demande, vous
                  garantissez que les informations fournies sont exactes et que vous êtes
                  autorisé(e) à les transmettre.
                </p>
                <p>
                  Tout devis, échantillon, délai, prix ou autre condition commerciale que
                  nous vous communiquons est destiné à votre usage interne, peut être
                  modifié jusqu’à la signature d’un accord écrit ou d’un bon de commande,
                  et peut dépendre d’informations complémentaires (formule, exigences
                  réglementaires, critères qualité, etc.).
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  5. Propriété intellectuelle
                </h2>
                <p>
                  Sauf mention contraire, l’ensemble du contenu du Site (textes, visuels,
                  design, logos, graphisme, mise en page) appartient à Elmvale Global ou
                  à ses concédants et est protégé par le droit d’auteur et le droit des
                  marques.
                </p>
                <p>
                  Vous pouvez consulter le Site et télécharger ou imprimer des extraits
                  raisonnables pour votre usage interne uniquement, dans le but d’évaluer
                  nos services. Toute autre utilisation, notamment la reproduction ou la
                  diffusion à des fins commerciales, nécessite notre accord écrit
                  préalable.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  6. Données personnelles et confidentialité
                </h2>
                <p>
                  Notre utilisation des données personnelles, y compris les coordonnées
                  que vous nous fournissez via les formulaires ou par e-mail, est régie
                  par notre Politique de confidentialité disponible sur le Site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  7. Liens et services tiers
                </h2>
                <p>
                  Le Site peut contenir des liens vers des sites ou services tiers. Nous
                  ne contrôlons pas ces sites tiers et ne sommes pas responsables de leur
                  contenu ni de leurs pratiques. Le suivi de ces liens se fait à votre
                  discrétion et à vos risques.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  8. Absence de garanties
                </h2>
                <p>
                  Le Site est fourni « tel quel » et « selon disponibilité ». Dans la
                  mesure maximale autorisée par la loi, nous n’accordons aucune garantie
                  expresse ou implicite concernant le Site, y compris toute garantie
                  d’exactitude, d’exhaustivité, de non-contrefaçon, d’adéquation à un
                  usage particulier ou de disponibilité.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  9. Limitation de responsabilité
                </h2>
                <p>
                  Dans la mesure maximale autorisée par la loi, Elmvale Global et ses
                  dirigeants, salariés et mandataires ne sauraient être tenus
                  responsables de tout dommage indirect, perte de profit, de chiffre
                  d’affaires, de contrats, de clientèle ou de données lié à votre
                  utilisation du Site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  10. Droit applicable et juridiction
                </h2>
                <p>
                  Les présentes Conditions sont régies par le droit de [pays] et tout
                  litige sera soumis à la compétence exclusive des tribunaux de [ville,
                  pays], sous réserve des dispositions impératives éventuellement
                  applicables.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  11. Contact
                </h2>
                <p>
                  Pour toute question concernant ces Conditions, vous pouvez nous
                  contacter à l’adresse suivante : contact@elmvaleglobal.com
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  1. Who we are
                </h2>
                <p>
                  These Terms of Service (“Terms”) govern your use of the website
                  elmvaleglobal.com (the “Site”), operated by Elmvale Global (“Elmvale
                  Global”, “we”, “us”, or “our”). The Site is aimed at professional and
                  business users and presents our cosmetic and personal care packaging
                  sourcing, trading and project coordination services.
                </p>
                <p>
                  By accessing or using the Site, you agree to be bound by these Terms.
                  If you do not agree, you must not use the Site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  2. What this Site does – and does not do
                </h2>
                <p>
                  Information on the Site is provided for general, illustrative and
                  marketing purposes only. It does not constitute a binding offer to
                  sell, legal or regulatory advice, or a guarantee of availability,
                  pricing, lead times or performance.
                </p>
                <p>
                  Any commercial relationship with Elmvale Global (for example supply of
                  packaging, quality control, logistics or consulting work) will be
                  governed by separate written contracts, purchase orders and/or agreed
                  specifications between you and Elmvale Global.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  3. Eligibility and acceptable use
                </h2>
                <p>
                  By using the Site, you confirm that you act on behalf of a business or
                  professional organization and that you are authorized to bind that
                  organization.
                </p>
                <p>You agree not to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>use the Site in any unlawful way or for any unlawful purpose;</li>
                  <li>
                    attempt to gain unauthorized access to the Site, our servers or any
                    related systems;
                  </li>
                  <li>
                    scrape, copy or bulk-download the Site for competitive or abusive
                    purposes;
                  </li>
                  <li>
                    upload or transmit any viruses, malware or other harmful code; or
                  </li>
                  <li>
                    impersonate any person or misrepresent your affiliation with any
                    entity.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  4. Inquiries, quotes and commercial terms
                </h2>
                <p>
                  The Site allows you to contact us (for example via forms or email) to
                  discuss projects, request information or request a quote. By submitting
                  an inquiry, you confirm that the information you provide is accurate and
                  that you are authorized to share it.
                </p>
                <p>
                  Any quotes, samples, lead times, pricing or other commercial terms we
                  provide are for your internal use only, may change until a written
                  agreement or purchase order is in place, and may depend on additional
                  information (such as formula, regulatory requirements and quality
                  criteria).
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  5. Intellectual property
                </h2>
                <p>
                  Unless otherwise indicated, all content on the Site (including text,
                  visuals, layout, design and logos) is owned by Elmvale Global or its
                  licensors and is protected by copyright, trademark and other
                  intellectual property laws.
                </p>
                <p>
                  You may view the Site and download or print reasonable excerpts for
                  internal business use, solely to evaluate our services. Any other use,
                  including reproduction or distribution for commercial purposes, requires
                  our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  6. Data protection and privacy
                </h2>
                <p>
                  Our handling of personal data, including contact details you provide via
                  forms or email, is governed by our Privacy Policy available on the
                  Site. Please review it carefully.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  7. Third-party links and services
                </h2>
                <p>
                  The Site may contain links to third-party websites or services. We do
                  not control and are not responsible for those third parties, their
                  content or their privacy practices. Following such links is at your own
                  discretion and risk.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  8. No warranties
                </h2>
                <p>
                  The Site is provided on an “as is” and “as available” basis. To the
                  fullest extent permitted by law, we make no express or implied
                  warranties regarding the Site, including any warranties of accuracy,
                  completeness, non-infringement, fitness for a particular purpose or
                  availability.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  9. Limitation of liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Elmvale Global and its
                  directors, employees and agents shall not be liable for any indirect,
                  incidental, consequential or punitive damages, or for any loss of
                  profits, revenue, business, contracts, goodwill or data arising out of
                  or in connection with your use of the Site.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  10. Governing law and jurisdiction
                </h2>
                <p>
                  These Terms are governed by the laws of [Country], and any dispute will
                  be subject to the exclusive jurisdiction of the courts of [City,
                  Country], subject to any mandatory provisions of applicable law.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-brand-dark mb-3">
                  11. Contact
                </h2>
                <p>
                  If you have questions about these Terms, you can contact us at:
                  contact@elmvaleglobal.com
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terms;
