import React, { useContext, useEffect, useMemo, useRef } from "react";
import { LanguageContext } from "../App";
import { Mail, Clock } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { trackEmailClick } from "../analytics";

const FORMSPREE_FORM_ID = "xjkaopok";

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";
  const [formState, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const leadTracked = useRef(false);

  const isOfficialHost = useMemo(() => window.location.hostname === "elmvaleglobal.com", []);

  useEffect(() => {
    if (!formState.succeeded || leadTracked.current) return;

    leadTracked.current = true;
    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "generate_lead", {
        send_to: "G-BRRFY9DWWK",
        event_category: "contact",
        form_name: "packaging_brief",
      });
    }
  }, [formState.succeeded]);

  const nextSteps = fr
    ? [
        ["01", "Nous examinons votre brief", "Nous regardons le besoin, les références, la quantité cible et les contraintes principales."],
        ["02", "Nous clarifions si nécessaire", "S’il manque une information importante, nous revenons vers vous avant de lancer le sourcing."],
        ["03", "Nous identifions les directions pertinentes", "Nous recherchons et comparons les options fabricants correspondant au projet."],
        ["04", "Nous avançons sur les options retenues", "Échantillons, informations techniques et demandes de prix sont coordonnés une fois une direction adaptée sélectionnée."],
      ]
    : [
        ["01", "We review your brief", "We look at the requirement, references, target quantity and key project constraints."],
        ["02", "We clarify what is missing", "If an important detail is missing, we come back to you before sourcing begins."],
        ["03", "We identify relevant directions", "We search and compare manufacturing options that fit the project."],
        ["04", "We move forward on selected options", "Samples, technical information and quotations are coordinated once a suitable direction has been selected."],
      ];

  return (
    <div className="bg-white min-h-screen pt-28">
      <section className="px-6 max-w-6xl mx-auto mb-14">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "NOUVEAU PROJET" : "NEW PROJECT"}</p>
        <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[54px] text-brand-dark mb-6">
          {fr ? "Envoyez-nous votre brief packaging" : "Send us your packaging brief"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Vous n’avez pas besoin d’un brief finalisé. Une référence visuelle, une quantité cible ou une première direction suffit pour commencer."
            : "You do not need a complete specification to contact us. A visual reference, target quantity or initial direction is enough to get started."}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <Mail className="w-5 h-5 mt-1 text-stone-400" />
            <div>
              <h2 className="font-semibold text-brand-dark">Email</h2>
              <a href="mailto:contact@elmvaleglobal.com" onClick={() => trackEmailClick("/contact/")} className="text-stone-600 hover:text-brand-dark">contact@elmvaleglobal.com</a>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Clock className="w-5 h-5 mt-1 text-stone-400" />
            <div>
              <h2 className="font-semibold text-brand-dark">{fr ? "Réponse" : "Response"}</h2>
              <p className="text-stone-600">{fr ? "Généralement sous 1–2 jours ouvrés." : "Usually within 1–2 business days."}</p>
            </div>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
            <h2 className="font-semibold text-brand-dark mb-3">{fr ? "Informations utiles à partager" : "Helpful to include"}</h2>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li>{fr ? "Photos, liens ou références existantes" : "Reference photos, links or existing packaging"}</li>
              <li>{fr ? "Dimensions ou volume" : "Dimensions or fill volume"}</li>
              <li>{fr ? "Finition / décoration souhaitée" : "Desired finish / decoration"}</li>
              <li>{fr ? "Quantité estimée" : "Estimated quantity"}</li>
              <li>{fr ? "Marché cible" : "Target market"}</li>
              <li>{fr ? "Calendrier de lancement" : "Target launch timing"}</li>
            </ul>
          </div>
        </div>

        <form acceptCharset="UTF-8" className="space-y-6" onSubmit={handleSubmit}>
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="language" value={language} />
          <input type="hidden" name="source" value={window.location.href} />

          <div className="grid md:grid-cols-2 gap-6">
            <Field label={fr ? "Nom" : "Name"} name="name" required disabled={!isOfficialHost} />
            <Field label={fr ? "Entreprise / marque" : "Company / Brand"} name="company" required disabled={!isOfficialHost} />
          </div>
          <Field label="Email" name="email" type="email" required disabled={!isOfficialHost} />

          <div className="grid md:grid-cols-2 gap-6">
            <Select
              label={fr ? "Type de packaging" : "Packaging Type"}
              name="packaging_type"
              disabled={!isOfficialHost}
              options={fr
                ? ["Skincare primaire", "Packaging parfum", "Tubes & pompes", "Packaging secondaire", "Packaging durable", "Autre"]
                : ["Skincare primary", "Fragrance packaging", "Tubes & pumps", "Secondary packaging", "Sustainable packaging", "Other"]}
            />
            <Field label={fr ? "Quantité estimée" : "Estimated Quantity"} name="quantity" disabled={!isOfficialHost} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Field label={fr ? "Marché cible" : "Target Market"} name="target_market" disabled={!isOfficialHost} />
            <Field label={fr ? "Date de lancement cible" : "Target Launch Date"} name="launch_timing" disabled={!isOfficialHost} />
          </div>

          <Field
            label={fr ? "Lien de référence (optionnel)" : "Reference link (optional)"}
            name="reference_link"
            type="url"
            disabled={!isOfficialHost}
            placeholder={fr ? "Lien produit, Pinterest, Google Drive, site de marque..." : "Product link, Pinterest, Google Drive, brand website..."}
          />

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">{fr ? "Brief / message" : "Project brief / message"}</label>
            <textarea
              name="message"
              rows={6}
              required
              disabled={!isOfficialHost}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-dark"
              placeholder={fr
                ? "Décrivez le produit, le packaging recherché, les références, finitions et contraintes importantes."
                : "Tell us about the product, packaging you are looking for, references, finishes and important requirements."}
            />
          </div>

          {!isOfficialHost && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4">
              {fr ? "Le formulaire est activé uniquement sur elmvaleglobal.com." : "The inquiry form is enabled only on elmvaleglobal.com."}
            </p>
          )}

          <button type="submit" disabled={!isOfficialHost || formState.submitting} className="bg-brand-dark text-white px-8 py-3 rounded-full disabled:opacity-40">
            {formState.submitting
              ? (fr ? "Envoi..." : "Sending...")
              : (fr ? "Partager votre brief" : "Share Your Packaging Brief")}
          </button>
          {formState.succeeded && (
            <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl p-4" role="status">
              {fr
                ? "Merci. Votre brief a bien été envoyé. Nous reviendrons vers vous prochainement."
                : "Thank you. Your packaging brief has been sent successfully. We will get back to you shortly."}
            </p>
          )}
          <ValidationError
            errors={formState.errors}
            className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-4"
          />
          <p className="text-xs text-stone-400">
            {fr
              ? "Vos informations servent uniquement à répondre à votre demande et à évaluer votre projet."
              : "Your information is used only to respond to your inquiry and evaluate your project."}
          </p>
        </form>
      </section>

      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="uppercase text-[11px] tracking-[0.32em] text-stone-400 mb-4">
              {fr ? "APRÈS VOTRE DEMANDE" : "WHAT HAPPENS NEXT"}
            </p>
            <h2 className="font-serif font-normal text-3xl md:text-4xl text-brand-dark mb-5">
              {fr ? "Un processus simple pour cadrer la prochaine étape" : "A simple process to define the next step"}
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {fr
                ? "L’objectif du premier échange est de comprendre suffisamment le besoin pour savoir quelles options méritent d’être explorées."
                : "The first exchange is about understanding the requirement well enough to identify which sourcing directions are worth exploring."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-[26px] border border-stone-200 bg-stone-200">
            {nextSteps.map(([num, title, desc]) => (
              <div key={num} className="bg-white p-7 min-h-[230px]">
                <div className="text-[10px] tracking-[0.28em] text-stone-400 mb-7">{num}</div>
                <h3 className="font-serif text-2xl text-brand-dark mb-3">{title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-dark"
    />
  </div>
);

const Select = ({ label, name, options, disabled = false }: { label: string; name: string; options: string[]; disabled?: boolean }) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-2">{label}</label>
    <select name={name} disabled={disabled} className="w-full border border-stone-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-brand-dark">
      <option value="">{languageLabelPlaceholder()}</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

const languageLabelPlaceholder = () => "Select";

export default Contact;
