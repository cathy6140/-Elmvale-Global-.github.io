// src/components/CookieBanner.tsx
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "elmvale_cookie_consent"; // localStorage 里记住用户选择

type ConsentValue = "accepted" | "rejected";

interface Props {
  // 如果你将来想从外面强制传语言，也可以加 props，这里先简单从 <html lang> 取
}

const CookieBanner: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState<"en" | "fr">("en");

  // 页面加载时检查是否已有记录 + 读取语言
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
    if (!saved) {
      setVisible(true);
    } else {
      // 如果已经选过，在这里可以顺便调用一次 GA 同步状态（防止刷新后丢失）
      if (saved === "accepted" && typeof window !== "undefined") {
        (window as any).acceptAnalytics?.();
      }
      if (saved === "rejected" && typeof window !== "undefined") {
        (window as any).declineAnalytics?.();
      }
    }

    const htmlLang = document.documentElement.lang;
    if (htmlLang === "fr") setLang("fr");
    else setLang("en");
  }, []);

  const handleChoice = (choice: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, choice);

    if (typeof window !== "undefined") {
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
              <a
                href="/cookies"
                className="underline underline-offset-2 hover:text-brand-dark"
              >
                Cookies
              </a>
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
              <a
                href="/cookies.html"
                className="underline underline-offset-2 hover:text-brand-dark"
              >
                Cookies
              </a>{" "}
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
