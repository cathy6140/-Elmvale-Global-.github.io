import React, { useContext, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LanguageContext } from "../App";
import { content } from "../content";
import { Mail, Phone, Clock } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xjkaopok"; // ✅ 换成你的

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const [searchParams] = useSearchParams();
  const prefillCategory = useMemo(() => {
    const c = (searchParams.get("category") || "").trim();
    return c;
  }, [searchParams]);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // ✅ 如果 URL 带了 ?category=xxx，就写入表单字段（即使用户不动 select）
      if (prefillCategory && !formData.get("category")) {
        formData.set("category", prefillCategory);
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
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
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8">{t.intro.title}</h1>
        <p className="text-xl text-stone-600 font-light max-w-2xl leading-relaxed">{t.intro.desc}</p>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8">
                {t.details.title}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <Mail className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">
                      {t.details.labels?.email ?? "Email"}
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
                  <Phone className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">
                      {t.details.labels?.phone ?? "Phone"}
                    </span>
                    <span className="text-stone-500 font-light">{t.details.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Clock className="w-6 h-6 text-stone-300 group-hover:text-brand-primary transition" strokeWidth={1.5} />
                  <div>
                    <span className="block font-serif text-xl text-brand-dark mb-1">
                      {t.details.labels?.hours ?? "Hours"}
                    </span>
                    <span className="text-stone-500 font-light">{t.details.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-brand-primary pl-6 py-2">
              <p className="text-stone-600 font-serif italic text-lg leading-relaxed">{t.map}</p>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-10">
              {t.form.title}
            </h2>

            <form className="space-y-10" onSubmit={onSubmit}>
              {/* 蜜罐反垃圾 */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* 可选：把当前语言也发过去 */}
              <input type="hidden" name="language" value={language} />

              {/* Category：自动带入 */}
              <div className="relative z-0 w-full group">
                <select
                  name="category"
                  defaultValue={prefillCategory || ""}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 focus:outline-none focus:ring-0 focus:border-brand-dark font-light"
                  required
                >
                  <option value="" disabled>
                    {language === "fr" ? "Choisir une catégorie…" : "Select a category…"}
                  </option>

                  {/* 你可以按自己产品分类改这些 value */}
                  <option value="Bottles & Jars">Bottles & Jars</option>
                  <option value="Tubes & Sachets">Tubes & Sachets</option>
                  <option value="Pumps & Dispensers">Pumps & Dispensers</option>
                  <option value="Caps & Closures">Caps & Closures</option>
                </select>
              </div>

              {/* Email */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.email}
                </label>
              </div>

              {/* Message */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  rows={5}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light resize-none"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  {t.form.message}
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 bg-brand-dark text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-primary transition duration-500 disabled:opacity-60"
              >
                {status === "sending"
                  ? language === "fr"
                    ? "Envoi…"
                    : "Sending…"
                  : t.form.submit}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-700 font-light">
                  {language === "fr" ? "Merci — votre message a bien été envoyé." : "Thanks — your message has been sent."}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-light">
                  {language === "fr"
                    ? "Échec de l’envoi. Réessayez ou envoyez un email."
                    : "Send failed. Please try again or email us."}
                </p>
              )}

              <p className="text-xs text-stone-400 mt-4 font-light">{t.details.privacy}</p>
            </form>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h3 className="font-serif text-3xl text-brand-dark">{t.final}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
