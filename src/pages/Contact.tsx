import React, { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LanguageContext } from "../App";
import { content } from "../content";
import { Mail, Phone, Clock } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjkaopok";

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const [searchParams] = useSearchParams();
  const presetCategory = searchParams.get("category") || "";

  const isOfficialHost = useMemo(() => {
    const host = window.location.hostname;
    return host === "elmvaleglobal.com"; // 你确认最终就是这个
  }, []);

  // 你要的“其他”
  const categories = useMemo(
    () => [
      { value: "airless", labelEn: "Airless", labelFr: "Airless" },
      { value: "bottles-jars", labelEn: "Bottles & Jars", labelFr: "Flacons & Pots" },
      { value: "tubes-sachets", labelEn: "Tubes & Sachets", labelFr: "Tubes & Sachets" },
      { value: "pumps-dispensers", labelEn: "Pumps & Dispensers", labelFr: "Pompes & Distributeurs" },
      { value: "caps-closures", labelEn: "Caps & Closures", labelFr: "Bouchons & Fermetures" },
      { value: "other", labelEn: "Other", labelFr: "Autre" },
    ],
    []
  );

  const categoryLabel = (c: (typeof categories)[number]) =>
    language === "fr" ? c.labelFr : c.labelEn;

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
                    <a href={`mailto:${t.details.email}`} className="text-stone-500 font-light hover:text-brand-dark transition">
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
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-10">{t.form.title}</h2>

            {!isOfficialHost && (
              <div className="mb-8 p-4 border border-stone-200 bg-stone-50 text-stone-600 text-sm leading-relaxed">
                表单只在 <span className="font-semibold">elmvaleglobal.com</span> 上启用（Formspree 免费版域名限制）。
                你现在这个地址提交会被拒绝。
              </div>
            )}

            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-10"
              // 关键：让 Formspree 返回 200/JSON，而不是跳转
              //（有些浏览器对 action 跳转会让你误以为“没反应”）
              acceptCharset="UTF-8"
            >
              {/* 防垃圾 蜜罐 */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* 你需要的隐藏字段：语言 / 预选类目 / 来源 */}
              <input type="hidden" name="language" value={language} />
              <input type="hidden" name="source" value={window.location.href} />

              {/* Name */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                  required
                  disabled={!isOfficialHost}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                  peer-focus:-translate-y-6"
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
                  disabled={!isOfficialHost}
                />
                <label
                  htmlFor="company"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                  peer-focus:-translate-y-6"
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
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light"
                  placeholder=" "
                  required
                  disabled={!isOfficialHost}
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                  peer-focus:-translate-y-6"
                >
                  {t.form.email}
                </label>
              </div>

              {/* Category */}
              <div className="relative z-0 w-full group">
                <select
                  name="category"
                  id="category"
                  defaultValue={presetCategory}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark font-light"
                  required
                  disabled={!isOfficialHost}
                >
                  <option value="" disabled>
                    {language === "fr" ? "Sélectionnez…" : "Select…"}
                  </option>
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {categoryLabel(c)}
                    </option>
                  ))}
                </select>
                <label className="block text-sm text-stone-400 mt-2">
                  {language === "fr" ? "Catégorie" : "Category"}
                </label>
              </div>

              {/* Message */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block py-4 px-0 w-full text-lg text-brand-dark bg-transparent border-b border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-dark peer font-light resize-none"
                  placeholder=" "
                  required
                  disabled={!isOfficialHost}
                />
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium absolute text-lg text-stone-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                  peer-focus:left-0 peer-focus:text-brand-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                  peer-focus:-translate-y-6"
                >
                  {t.form.message}
                </label>
              </div>

              <button
                type="submit"
                disabled={!isOfficialHost}
                className={`mt-8 px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold transition duration-500
                ${isOfficialHost ? "bg-brand-dark text-white hover:bg-brand-primary" : "bg-stone-300 text-white cursor-not-allowed"}`}
              >
                {t.form.submit}
              </button>

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
