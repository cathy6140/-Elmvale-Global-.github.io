import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { localizedPath } from "../locale";
import { trackContactCta } from "../analytics";
import RelatedGuides from "../components/RelatedGuides";

const SupplierComparisonGuide: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  const criteria = fr
    ? [
        ["MOQ & structure de commande", "Comparez le minimum réel du projet, pas seulement celui d’un composant. Vérifiez aussi les minimums liés à la couleur, au décor et aux accessoires."],
        ["Délais & capacité", "Demandez les délais pour échantillons, personnalisation et production, ainsi que la capacité du fabricant à tenir le calendrier cible."],
        ["Personnalisation", "Clarifiez ce qui est réellement disponible : couleur, coating, sérigraphie, marquage à chaud, moules, composants dédiés et contraintes techniques."],
        ["Échantillons", "Vérifiez si des échantillons stock, décorés ou pré-production peuvent être fournis avant l’engagement final."],
        ["Faisabilité technique", "Confirmez les dimensions, standards de col, dosage pompe, assemblage, compatibilité composants et points qui nécessitent encore un test."],
        ["Documentation", "Identifiez les fiches techniques, déclarations matière, certificats ou informations de traçabilité disponibles selon le projet."],
        ["Qualité & contrôle", "Clarifiez les contrôles réalisés par l’usine, les tolérances disponibles et les inspections supplémentaires possibles si nécessaire."],
        ["Communication", "Évaluez la clarté des réponses, la capacité à signaler les risques et la fiabilité du suivi pendant échantillonnage et production."]
      ]
    : [
        ["MOQ & order structure", "Compare the real project minimum, not only the MOQ of one component. Check separate minimums for color, decoration and accessories."],
        ["Lead time & capacity", "Ask for sampling, customization and production timing, and whether the manufacturer can realistically support the target launch schedule."],
        ["Customization capability", "Clarify what is actually available: color, coating, silk screen, hot stamping, tooling, dedicated components and technical limits."],
        ["Samples", "Check whether stock, decorated or pre-production samples can be supplied before final commitment."],
        ["Technical feasibility", "Confirm dimensions, neck standards, pump output, assembly, component compatibility and any points that still require testing."],
        ["Documentation", "Identify which technical sheets, material declarations, certificates or traceability information are available for the project."],
        ["Quality & inspection", "Clarify factory checks, available tolerances and whether additional inspection can be coordinated when needed."],
        ["Communication", "Evaluate response clarity, willingness to flag risks and reliability of follow-up during sampling and production."]
      ];

  const questions = fr
    ? [
        ["Le MOQ le plus bas est-il toujours le meilleur choix ?", "Non. Un MOQ plus bas peut être utile au lancement, mais il faut aussi comparer le coût unitaire, la personnalisation, le délai, la qualité d’exécution et le risque opérationnel."],
        ["Que demander avant de commander des échantillons ?", "Demandez au minimum la référence exacte, les dimensions principales, les options de personnalisation, le MOQ indicatif, le délai, le prix ou ordre de grandeur disponible et les documents techniques accessibles."],
        ["Faut-il choisir un seul fournisseur ?", "Pas nécessairement. Un projet multi-composants peut nécessiter plusieurs fabricants, mais cela augmente la coordination. Le bon choix dépend du niveau d’intégration et des contraintes du projet."],
        ["Comment comparer deux offres qui semblent similaires ?", "Normalisez les hypothèses : même quantité, même finition, mêmes composants, même niveau de contrôle et même calendrier. Sinon, les prix et délais ne sont pas réellement comparables."]
      ]
    : [
        ["Is the lowest MOQ always the best choice?", "No. A lower MOQ can reduce launch commitment, but unit cost, customization, lead time, execution quality and operational risk still need to be compared."],
        ["What should you ask before ordering samples?", "At minimum, ask for the exact reference, key dimensions, customization options, indicative MOQ, timing, available pricing context and accessible technical documents."],
        ["Should a brand use only one supplier?", "Not necessarily. A multi-component project may require several manufacturers, but that increases coordination. The right setup depends on project complexity and integration needs."],
        ["How do you compare two quotes that look similar?", "Normalize the assumptions: same quantity, finish, components, inspection level and timing. Otherwise price and lead time are not truly comparable."]
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "GUIDE COMPARAISON FOURNISSEURS" : "SUPPLIER COMPARISON GUIDE"}
        </p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6 max-w-4xl">
          {fr ? "Comment comparer des fournisseurs de packaging cosmétique" : "How to compare cosmetic packaging suppliers"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Comparer des fournisseurs ne consiste pas seulement à comparer un prix ou un MOQ. Une décision solide tient compte du délai, de la personnalisation, de la faisabilité technique, des échantillons, des documents disponibles et de la qualité du suivi."
            : "Comparing packaging suppliers is not only about price or MOQ. A useful comparison also considers timing, customization, technical feasibility, samples, available documentation and the quality of project follow-up."}
        </p>
      </section>

      <section className="bg-zinc-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "RÉPONSE COURTE" : "SHORT ANSWER"}</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Comparez les conditions du projet, pas uniquement le fournisseur" : "Compare the project conditions, not just the supplier"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Deux fabricants peuvent proposer un packaging visuellement similaire tout en ayant des MOQ, délais, capacités de décoration, niveaux de documentation et contraintes techniques très différents. La comparaison doit donc partir d’un brief commun et d’hypothèses identiques."
                : "Two manufacturers can offer visually similar packaging while having very different MOQs, lead times, decoration capabilities, documentation and technical constraints. A useful comparison therefore starts from the same brief and the same assumptions."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "8 CRITÈRES" : "8 COMPARISON CRITERIA"}</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Les points à comparer avant de sélectionner un fournisseur" : "What to compare before selecting a packaging supplier"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
          {criteria.map(([title, desc], index) => (
            <div key={title} className="bg-white p-7 md:p-8 min-h-[220px]">
              <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-6">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-white/45 mb-4">{fr ? "COMPARAISON PRATIQUE" : "PRACTICAL COMPARISON"}</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl mb-5">
              {fr ? "Mettez les offres sur la même base" : "Put supplier offers on the same basis"}
            </h2>
            <p className="text-white/75 leading-relaxed">
              {fr
                ? "Une offre moins chère peut reposer sur une finition différente, un autre niveau de contrôle ou un délai plus long. Avant de décider, vérifiez que les hypothèses sont comparables."
                : "A cheaper quote may rely on a different finish, inspection level or longer lead time. Before deciding, make sure the assumptions are comparable."}
            </p>
          </div>
          <div className="border border-white/15 rounded-3xl p-8">
            <h3 className="font-serif text-3xl mb-5">{fr ? "À aligner entre fournisseurs" : "Normalize these points"}</h3>
            <ul className="space-y-3 text-white/75 list-disc pl-5">
              <li>{fr ? "même quantité et nombre de SKU" : "same quantity and number of SKUs"}</li>
              <li>{fr ? "même matériau et configuration composants" : "same material and component configuration"}</li>
              <li>{fr ? "même couleur, décor et finition" : "same color, decoration and finish"}</li>
              <li>{fr ? "mêmes exigences d’échantillonnage" : "same sampling requirements"}</li>
              <li>{fr ? "même niveau de contrôle / inspection" : "same quality or inspection scope"}</li>
              <li>{fr ? "même calendrier cible" : "same target timing"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "QUESTIONS FRÉQUENTES" : "COMMON QUESTIONS"}</p>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
            {fr ? "Questions utiles avant de prendre une décision" : "Useful questions before making a sourcing decision"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {questions.map(([q, a]) => (
            <div key={q} className="bg-zinc-50 border border-stone-200 rounded-2xl p-7">
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{q}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">{fr ? "AVANT DE COMPARER" : "BEFORE COMPARING"}</p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Un brief clair rend la comparaison plus utile" : "A clear brief makes supplier comparison more useful"}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              {fr
                ? "Si les fournisseurs répondent à des hypothèses différentes, la comparaison devient trompeuse. Commencez par clarifier le format, la quantité, la personnalisation, le marché cible et le calendrier."
                : "If suppliers are quoting against different assumptions, the comparison becomes misleading. Start by clarifying format, quantity, customization, target market and timing."}
            </p>
            <Link to={localizedPath("/packaging-sourcing-brief", language)} className="inline-flex items-center gap-2 text-sm text-brand-dark underline underline-offset-4">
              {fr ? "Voir le guide du brief sourcing" : "See the packaging sourcing brief guide"} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-brand-dark mb-5">{fr ? "À retenir" : "Key takeaway"}</h3>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "Le meilleur fournisseur n’est pas nécessairement celui qui propose le prix ou le MOQ le plus bas. C’est celui dont les capacités, les conditions et le niveau de suivi correspondent le mieux aux priorités réelles du projet."
                : "The best supplier is not necessarily the one with the lowest price or MOQ. It is the one whose capabilities, conditions and level of follow-up best match the real priorities of the project."}
            </p>
          </div>
        </div>
      </section>

      <RelatedGuides language={language} current="supplier" />

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="uppercase text-[10px] tracking-[0.3em] text-stone-400 mb-5">{fr ? "VOTRE PROJET" : "YOUR PROJECT"}</p>
        <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
          {fr ? "Vous comparez plusieurs options fournisseurs ?" : "Comparing packaging supplier options?"}
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          {fr
            ? "Partagez votre brief, vos références ou les options déjà reçues. Nous pouvons aider à structurer la comparaison autour des critères qui comptent réellement pour le projet."
            : "Share your brief, references or options already received. We can help structure the comparison around the criteria that actually matter for the project."}
        </p>
        <Link
          to={localizedPath("/contact", language)}
          onClick={() => trackContactCta("/compare-cosmetic-packaging-suppliers/", fr ? "Partager votre projet" : "Share Your Project")}
          className="inline-block bg-brand-dark text-white px-8 py-3.5 rounded-full"
        >
          {fr ? "Partager votre projet" : "Share Your Project"}
        </Link>
      </section>
    </div>
  );
};

export default SupplierComparisonGuide;
