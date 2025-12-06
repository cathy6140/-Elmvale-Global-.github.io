import React, { useContext, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LanguageContext } from "../App";
import { content } from "../content";
import { Mail, Phone, Clock } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xjkaopok"; // ✅ 改成你自己的 Formspree endpoint

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // ✅ 从 URL 读取预选分类：/contact?category=Tubes%20%26%20Sachets
  const prefillCategory = useMemo(() => {
    const raw = (searchParams.get("category") || "").trim();
    if (!raw) return "";

    // 统一成 value（EN）以便 <option value="..."> 命中
    const map: Record<string, string> = {
      // EN
      "Bottles & Jars": "Bottles & Jars",
      "Tubes & Sachets": "Tubes & Sachets",
      "Pumps & Dispensers": "Pumps & Dispensers",
      "Caps & Closures": "Caps & Closures",
      Other: "Other",

      // FR -> EN value
      "Flacons & Pots": "Bottles & Jars",
      "Pompes & Distributeurs": "Pumps & Dispensers",
      "Bouchons & Fermetures": "Caps & Closures",
      Autre: "Other",
    };

    return map[raw] || raw;
  }, [searchParams]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Header */}
      <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto mb-20">
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">
          {t.intro.title}
        </h1>
        <p className="text-xl text-stone-600 font-light max-w-2xl leading-relaxed">
          {t.intro.desc}
        </p>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Info Side */}
          <div className="space-y-16">
            {/* Contact Details */}
            <div>
              <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">
                {t.details.title}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <Mail
                    className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition"
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">
                      {language === "fr" ? "Email" : "Email"}
                    </span>
                    <a
                      href={`mailto:${t.details.email}`}
                      className="text-stone-500 font-light hover:text-brand-dark transition"
                    >
                      {t.details.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Phone
                    className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition"
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">
                      {language === "fr" ? "Téléphone" : "Phone"}
                    </span>
                    <span className="text-stone-500 font-light">{t.details.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Clock
                    className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition"
                    strokeWidth={1.5}
                  />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">
                      {language === "fr" ? "Horaires" : "Hours"}
                    </span>
                    <span className="text-stone-500 font-light">{t.details.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Text */}
            <div className="border-l-2 border-brand-primary pl-6 py-2">
              <p className="text-stone-600 font-serif italic text-lg leading-relaxed">
                {t.map}
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-10">
              {t.form.title}
            </h2>

            <form className="space-y-10" onSubmit={onSubmit}>
              {/* ✅ 蜜罐（反垃圾） */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* 可选：把语言写进提交内容 */}
              <input type="hidden" name="language" value={language} />

              {/* Name */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t.form.name}
                </label>
              </div>

              {/* Company */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                />
                <label
                  htmlFor="company"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t.form.company}
                </label>
              </div>

              {/* Email */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t.form.email}
                </label>
              </div>

              {/* Category */}
              <div className="relative z-0 w-full group">
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-stone-400 mb-3">
                  {language === "fr" ? "Catégorie" : "Category"}
                </label>

                <select
                  name="category"
                  id="category"
                  required
                  defaultValue={prefillCategory || ""}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-brand-dark font-light"
                >
                  <option value="" disabled>
                    {language === "fr" ? "Choisir une catégorie…" : "Select a category…"}
                  </option>

                  <option value="Bottles & Jars">
                    {language === "fr" ? "Flacons & Pots" : "Bottles & Jars"}
                  </option>
                  <option value="Tubes & Sachets">
                    {language === "fr" ? "Tubes & Sachets" : "Tubes & Sachets"}
                  </option>
                  <option value="Pumps & Dispensers">
                    {language === "fr" ? "Pompes & Distributeurs" : "Pumps & Dispensers"}
                  </option>
                  <option value="Caps & Closures">
                    {language === "fr" ? "Bouchons & Fermetures" : "Caps & Closures"}
                  </option>

                  {/* ✅ 其他 */}
                  <option value="Other">{language === "fr" ? "Autre" : "Other"}</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {t.form.message}
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 bg-brand-dark text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-primary transition duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? language === "fr"
                    ? "Envoi..."
                    : "Sending..."
                  : t.form.submit}
              </button>

              <p className="text-xs text-stone-400 mt-4 font-light">{t.details.privacy}</p>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-sm text-emerald-700 font-light">
                  {language === "fr" ? "Message envoyé. Merci !" : "Sent! Thank you."}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-light">
                  {language === "fr"
                    ? "Échec de l’envoi. Veuillez réessayer ou écrire à contact@elmvaleglobal.com."
                    : "Failed to send. Please retry or email contact@elmvaleglobal.com."}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Final */}
        <div className="mt-32 text-center">
          <h3 className="font-serif text-3xl text-brand-dark">{t.final}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
