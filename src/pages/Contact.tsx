import React, { useContext, useEffect, useMemo } from "react";
import { LanguageContext } from "../App";
import { Mail, Clock } from "lucide-react";
import { setSeoMeta } from "../seo";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkaopok";

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  useEffect(() => {
    setSeoMeta(
      fr ? "Envoyer un brief packaging | Elmvale Global" : "Send a Packaging Brief | Elmvale Global",
      fr
        ? "Envoyez votre brief de sourcing packaging cosmétique ou parfum à Elmvale Global."
        : "Send your cosmetic or fragrance packaging sourcing brief to Elmvale Global."
    );
  }, [fr]);

  const isOfficialHost = useMemo(() => window.location.hostname === "elmvaleglobal.com", []);

  return (
    <div className="bg-white min-h-screen pt-28">
      <section className="px-6 max-w-6xl mx-auto mb-14">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">{fr ? "NOUVEAU PROJET" : "NEW PROJECT"}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">
          {fr ? "Envoyez-nous votre brief packaging" : "Send Us Your Packaging Brief"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Plus votre brief est précis, plus nous pouvons identifier rapidement les fabricants et options adaptés à votre projet."
            : "The more specific your brief, the faster we can identify suitable manufacturing options for your project."}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <Mail className="w-5 h-5 mt-1 text-stone-400" />
            <div>
              <h2 className="font-semibold text-brand-dark">Email</h2>
              <a href="mailto:contact@elmvaleglobal.com" className="text-stone-600 hover:text-brand-dark">contact@elmvaleglobal.com</a>
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
            <h2 className="font-semibold text-brand-dark mb-3">{fr ? "Vous pouvez aussi envoyer" : "Helpful to Include"}</h2>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li>{fr ? "Photos ou liens de référence" : "Reference photos or links"}</li>
              <li>{fr ? "Dimensions ou volume" : "Dimensions or fill volume"}</li>
              <li>{fr ? "Finition / décoration souhaitée" : "Desired finish / decoration"}</li>
              <li>{fr ? "Quantité estimée" : "Estimated quantity"}</li>
              <li>{fr ? "Marché cible" : "Target market"}</li>
              <li>{fr ? "Calendrier de lancement" : "Target launch timing"}</li>
            </ul>
          </div>
        </div>

        <form action={FORMSPREE_ENDPOINT} method="POST" acceptCharset="UTF-8" className="space-y-6">
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

          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">{fr ? "Brief / message" : "Project Brief / Message"}</label>
            <textarea name="message" rows={6} required disabled={!isOfficialHost} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-dark" placeholder={fr ? "Décrivez le produit, le packaging recherché, les références, finitions et contraintes importantes." : "Tell us about the product, packaging you are looking for, references, finishes and important requirements."} />
          </div>

          {!isOfficialHost && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4">
              {fr ? "Le formulaire est activé uniquement sur elmvaleglobal.com." : "The inquiry form is enabled only on elmvaleglobal.com."}
            </p>
          )}

          <button type="submit" disabled={!isOfficialHost} className="bg-brand-dark text-white px-8 py-3 rounded-full disabled:opacity-40">
            {fr ? "Envoyer le brief" : "Send Brief"}
          </button>
          <p className="text-xs text-stone-400">{fr ? "Vos informations servent uniquement à répondre à votre demande et à évaluer votre projet." : "Your information is used only to respond to your inquiry and evaluate your project."}</p>
        </form>
      </section>
    </div>
  );
};

const Field = ({ label, name, type = "text", required = false, disabled = false }: { label: string; name: string; type?: string; required?: boolean; disabled?: boolean }) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-2">{label}</label>
    <input type={type} name={name} required={required} disabled={disabled} className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-dark" />
  </div>
);

const Select = ({ label, name, options, disabled = false }: { label: string; name: string; options: string[]; disabled?: boolean }) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-2">{label}</label>
    <select name={name} disabled={disabled} className="w-full border border-stone-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-brand-dark">
      <option value="">Select</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

export default Contact;
