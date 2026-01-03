import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "elmvale_cookie_consent"; // localStorage 里记住用户选择

type ConsentValue = "accepted" | "rejected";

interface Props {
  // 现在不用 props，如果以后想从外面传语言可以在这里扩展
}

const CookieBanner: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");

  // 页面加载时检查是否已有记录 + 读取语言
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;

    if (!saved) {
      // 没有记录 → 显示 banner
      setVisible(true);
    } else {
      // 已经选过 → 同步一次 GA4 的状态（防止刷新丢失）
      const anyWindow = window as any;
      if (saved === "accepted") {
        anyWindow.acceptAnalytics?.();
      } else {
        anyWindow.declineAnalytics?.();
      }
    }

    // 从 <html lang=".."> 读取语言
    const htmlLang = document.documentElement.lang;
    if (htmlLang === "fr") setLang("fr");
    else setLang("en");
  }, []);

  const handleChoice = (choice: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, choice);

    const anyWindow = window as any;
    if (choice === "accepted") {
      anyWindow.acceptAnalytics?.();
    } else {
      anyWindow.declineAnalytics?.();
    }

    setVisible(false);
  };

  if (!visible) return null;

  const isFr = lang === "fr";
  // 这里统一拼出 cookie 页的路由，带上 ?lang=xx
  const cookiePath = isFr ? "/cookies?lang=fr" : "/cookies?lang=en";

  return (
    <div
      className="
        fixed left-4 right-4 bottom-4 z-50
        max-w-3xl mx-auto
        bg-white text-stone-800
        border border-stone-200 shadow-xl
        rounded-2xl
        p-4 sm:p-6
        flex flex-col gap-4
      "
      role="dialog"
      aria-label={isFr ? "Bannière cookies" : "Cookie banner"}
    >
      <div className="text-sm leading-relaxed">
        <strong className="block mb-1">
          {isFr ? "Cookies & mesure d’audience" : "Cookies & analytics"}
        </strong>
        <span className="text-stone-600">
          {isFr ? (
            <>
              Nous utilisons des cookies strictement nécessaires au
              fonctionnement du site.{" "}
              <span className="font-medium">
                Vous pouvez accepter ou refuser les mesures d’audience
                (Google Analytics 4)
              </span>{" "}
              ci-dessous. Vous pouvez modifier votre choix à tout moment via
              la page{" "}
              <Link
                to={cookiePath}
                className="underline underline-offset-2 hover:text-brand-dark"
              >
                Cookies
              </Link>
              .
            </>
          ) : (
            <>
              We use cookies that are strictly necessary for this site to
              function.{" "}
              <span className="font-medium">
                You can choose to allow or refuse analytics (Google Analytics 4)
              </span>{" "}
              below. You can change your choice at any time from the{" "}
              <Link
                to={cookiePath}
                className="underline underline-offset-2 hover:text-brand-dark"
              >
                Cookies
              </Link>{" "}
              page.
            </>
          )}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="
            px-4 py-2 rounded-full text-sm font-medium
            border border-stone-300
            text-stone-800 bg-white
            hover:bg-stone-100 transition
          "
        >
          {isFr ? "Tout refuser" : "Reject all"}
        </button>

        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="
            px-4 py-2 rounded-full text-sm font-semibold
            bg-brand-dark text-white
            hover:bg-black transition
          "
        >
          {isFr ? "Tout accepter" : "Accept all"}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
