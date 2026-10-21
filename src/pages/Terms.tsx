import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const Terms: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  useEffect(() => {
    setSeoMeta(
      fr ? "Conditions d’utilisation | Elmvale Global" : "Website Terms | Elmvale Global",
      fr ? "Conditions d’utilisation du site Elmvale Global." : "Website terms for Elmvale Global."
    );
  }, [fr]);

  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
          {fr ? "Conditions d’utilisation" : "Website Terms"}
        </h1>
        <p className="text-sm text-stone-500 mb-10">
          {fr ? "Dernière mise à jour : 21 octobre 2026" : "Last updated: 21 October 2026"}
        </p>

        <div className="space-y-9 text-stone-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "1. À propos du site" : "1. About this website"}</h2>
            <p>{fr
              ? "Elmvale Global est actuellement un nom commercial et un projet de sourcing en développement. Le site présente nos services envisagés de sourcing, développement et coordination de packaging pour professionnels. Il ne doit pas être interprété comme la présentation d’une société déjà constituée si cela n’est pas expressément indiqué."
              : "Elmvale Global is currently a trading name and sourcing project under development. This website presents our intended packaging sourcing, development and coordination services for business users. It should not be interpreted as representing an incorporated company unless expressly stated otherwise."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "2. Informations commerciales" : "2. Commercial information"}</h2>
            <p>{fr
              ? "Les informations du site sont fournies à titre indicatif. Disponibilité, prix, MOQ, délais, matériaux, finitions, certificats et performances dépendent du fabricant, du projet et des spécifications finales. Aucun contenu du site ne constitue une offre ferme."
              : "Website information is provided for general guidance. Availability, pricing, MOQ, lead times, materials, finishes, certificates and performance depend on the manufacturer, project and final specifications. Nothing on this site constitutes a binding offer."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "3. Projets et commandes" : "3. Projects and orders"}</h2>
            <p>{fr
              ? "Toute future commande ou mission fera l’objet de conditions commerciales spécifiques convenues par écrit avant engagement. Ces conditions pourront notamment préciser le fournisseur, les spécifications, les quantités, les prix, les modalités de paiement, les contrôles, la livraison et les responsabilités."
              : "Any future order or project engagement will be subject to specific written commercial terms agreed before commitment. These may cover supplier, specifications, quantity, pricing, payment, inspections, delivery and responsibilities."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "4. Conformité et conseils" : "4. Compliance and advice"}</h2>
            <p>{fr
              ? "Elmvale Global peut aider à coordonner la collecte de documents et des contrôles ou essais tiers lorsque cela est pertinent, mais ne fournit pas de conseil juridique ou réglementaire et ne garantit pas qu’un packaging soit conforme à tous les marchés. La validation finale reste à la charge du client et de ses conseils ou laboratoires compétents."
              : "Elmvale Global may help coordinate available documentation and third-party inspections or testing where relevant, but does not provide legal or regulatory advice and does not guarantee that packaging complies with every market. Final validation remains the responsibility of the client and its qualified advisers or laboratories."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "5. Propriété intellectuelle" : "5. Intellectual property"}</h2>
            <p>{fr
              ? "Les textes, éléments graphiques et contenus originaux du site ne peuvent pas être reproduits à des fins commerciales sans autorisation préalable."
              : "Original text, graphics and website content may not be reproduced for commercial purposes without prior permission."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "6. Protection des données" : "6. Data protection"}</h2>
            <p>{fr
              ? "Les données transmises via le site sont traitées conformément à notre Politique de confidentialité."
              : "Personal information submitted through the site is handled in accordance with our Privacy Policy."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "7. Droit applicable" : "7. Governing law"}</h2>
            <p>{fr
              ? "Aucune juridiction contractuelle spécifique n’est désignée sur ce site tant que la structure juridique exploitant Elmvale Global n’est pas définitivement établie. Toute relation commerciale future précisera les règles applicables dans les conditions convenues entre les parties."
              : "No specific contractual jurisdiction is designated on this website while the legal structure operating Elmvale Global is still being established. Future commercial engagements will specify applicable terms in the written agreement between the parties."}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-brand-dark mb-3">{fr ? "8. Contact" : "8. Contact"}</h2>
            <p>contact@elmvaleglobal.com</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Terms;
