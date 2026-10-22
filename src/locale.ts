import { Language } from "./types";

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/fr" || pathname === "/fr/") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function localizedPath(pathname: string, language: Language) {
  const base = stripLocalePrefix(pathname);
  if (language === "fr") {
    return base === "/" ? "/fr/" : `/fr${base.startsWith("/") ? base : `/${base}`}`;
  }
  return base;
}

export function languageFromPath(pathname: string): Language {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}
