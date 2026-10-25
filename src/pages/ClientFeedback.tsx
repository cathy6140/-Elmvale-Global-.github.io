import React, { useContext, useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { LanguageContext } from "../App";

const FORMSPREE_FORM_ID = "xjkaopok";

const ClientFeedback: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";
  const [formState, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const isOfficialHost = useMemo(() => window.location.hostname === "elmvaleglobal.com", []);

  if (formState.succeeded) {
    return (
      <div className="bg-white min-h-screen pt-28">
        <section className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-5">
            {fr ? "MERCI" : "THANK YOU"}
          </p>
          <h1 className="font-serif font-normal text-4xl md:text-5xl text-brand-dark mb-6">
            {fr ? "Merci pour votre retour" : "Thank you for your feedback"}
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {fr
              ? "Votre retour nous aide à améliorer la manière dont nous accompagnons les projets de sourcing et de développement packaging."
              : "Your feedback helps us improve how we support packaging sourcing and development projects."}
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-28">
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "RETOUR CLIENT" : "CLIENT FEEDBACK"}
        </p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Partagez votre expérience avec Elmvale Global" : "Share your experience with Elmvale Global"}
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed max-w-3xl">
          {fr
            ? "Votre retour nous aide à améliorer notre accompagnement sur les projets de sourcing packaging, de comparaison fournisseurs et de coordination."
            : "Your feedback helps us improve how we support packaging sourcing, supplier comparison and project coordination."}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <form acceptCharset="UTF-8" className="space-y-8" onSubmit={handleSubmit}>
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="form_type" value="client_feedback" />
          <input type="hidden" name="language" value={language} />
          <input type="hidden" name="source" value={window.location.href} />

          <div className="grid md:grid-cols-2 gap-6">
            <Field label={fr ? "Nom" : "Name"} name="name" required disabled={!isOfficialHost} />
            <Field label={fr ? "Entreprise / marque" : "Company / Brand"} name="company" required disabled={!isOfficialHost} />
          </div>

          <Field
            label={fr ? "Email (non publié)" : "Email (not published)"}
            name="email"
            type="email"
            required
            disabled={!isOfficialHost}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Rating
              label={fr ? "Expérience globale" : "Overall experience"}
              name="overall_rating"
              required
              disabled={!isOfficialHost}
            />
            <Rating
              label={fr ? "Communication" : "Communication"}
              name="communication_rating"
              disabled={!isOfficialHost}
            />
            <Rating
              label={fr ? "Accompagnement sourcing" : "Packaging / sourcing support"}
              name="sourcing_support_rating"
              disabled={!isOfficialHost}
            />
            <Rating
              label={fr ? "Coordination fournisseurs / échantillons" : "Supplier / sample coordination"}
              name="coordination_rating"
              disabled={!isOfficialHost}
            />
          </div>

          <TextArea
            label={fr ? "Qu’est-ce qui vous a été le plus utile ?" : "What was most helpful?"}
            name="most_helpful"
            rows={5}
            disabled={!isOfficialHost}
          />

          <TextArea
            label={fr ? "Que pourrions-nous améliorer ?" : "What could we improve?"}
            name="improvement"
            rows={4}
            disabled={!isOfficialHost}
          />

          <TextArea
            label={fr ? "Votre retour ou témoignage" : "Your feedback or testimonial"}
            name="testimonial"
            rows={6}
            disabled={!isOfficialHost}
            placeholder={fr
              ? "Vous pouvez partager quelques mots sur votre expérience de travail avec Elmvale Global."
              : "You can share a few words about your experience working with Elmvale Global."}
          />

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              {fr ? "Autorisation de publication" : "Permission to publish"}
            </label>
            <select
              name="publication_permission"
              required
              disabled={!isOfficialHost}
              className="w-full h-[52px] border border-stone-300 rounded-xl px-4 bg-white focus:outline-none focus:border-brand-dark"
              defaultValue=""
            >
              <option value="" disabled>{fr ? "Sélectionner" : "Select"}</option>
              <option value="public_with_brand">
                {fr ? "Vous pouvez publier mon retour avec mon nom / ma marque" : "You may publish my feedback with my name / brand"}
              </option>
              <option value="public_anonymous">
                {fr ? "Vous pouvez publier mon retour de manière anonyme" : "You may publish my feedback anonymously"}
              </option>
              <option value="internal_only">
                {fr ? "Usage interne uniquement — ne pas publier" : "Internal use only — do not publish"}
              </option>
            </select>
            <p className="text-xs text-stone-500 mt-2">
              {fr
                ? "Nous n’utiliserons pas publiquement votre retour au-delà de l’autorisation sélectionnée."
                : "We will not use your feedback publicly beyond the permission you select."}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              {fr ? "Seriez-vous prêt(e) à retravailler avec Elmvale Global ?" : "Would you work with Elmvale Global again?"}
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                [fr ? "Oui" : "Yes", "yes"],
                [fr ? "Peut-être" : "Maybe", "maybe"],
                [fr ? "Non" : "No", "no"],
              ].map(([label, value]) => (
                <label key={value} className="inline-flex items-center gap-2 border border-stone-300 rounded-full px-4 py-2 text-sm text-stone-700">
                  <input type="radio" name="work_again" value={value} disabled={!isOfficialHost} />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          {!isOfficialHost && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4">
              {fr ? "Le formulaire est activé uniquement sur elmvaleglobal.com." : "The feedback form is enabled only on elmvaleglobal.com."}
            </p>
          )}

          <button
            type="submit"
            disabled={!isOfficialHost || formState.submitting}
            className="bg-brand-dark text-white px-8 py-3.5 rounded-full disabled:opacity-40"
          >
            {formState.submitting
              ? (fr ? "Envoi..." : "Sending...")
              : (fr ? "Envoyer mon retour" : "Submit Feedback")}
          </button>

          <ValidationError
            errors={formState.errors}
            className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4"
          />

          <p className="text-xs text-stone-400 leading-relaxed">
            {fr
              ? "Ce formulaire est destiné aux clients et partenaires ayant travaillé avec Elmvale Global. Les coordonnées servent à vérifier le retour et ne sont pas publiées sans autorisation."
              : "This form is intended for clients and partners who have worked with Elmvale Global. Contact details are used to verify feedback and are not published without permission."}
          </p>
        </form>
      </section>
    </div>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required = false,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      disabled={disabled}
      className="w-full h-[52px] border border-stone-300 rounded-xl px-4 focus:outline-none focus:border-brand-dark"
    />
  </div>
);

const TextArea = ({
  label,
  name,
  rows,
  disabled = false,
  placeholder,
}: {
  label: string;
  name: string;
  rows: number;
  disabled?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-2">{label}</label>
    <textarea
      name={name}
      rows={rows}
      disabled={disabled}
      placeholder={placeholder}
      className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-dark"
    />
  </div>
);

const Rating = ({
  label,
  name,
  required = false,
  disabled = false,
}: {
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
}) => (
  <fieldset className="border border-stone-200 rounded-2xl p-5">
    <legend className="text-sm font-medium text-brand-dark px-1">{label}</legend>
    <div className="flex flex-wrap gap-2 mt-3" role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((rating) => (
        <label key={rating} className="cursor-pointer">
          <input
            type="radio"
            name={name}
            value={rating}
            required={required}
            disabled={disabled}
            className="peer sr-only"
          />
          <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-stone-300 px-3 text-sm text-stone-600 transition peer-checked:bg-brand-dark peer-checked:text-white peer-checked:border-brand-dark">
            {rating} ★
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default ClientFeedback;
