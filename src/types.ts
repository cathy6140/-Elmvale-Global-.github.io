export const SUPPORTED_LANGS = ['en', 'fr'] as const;
export type Language = typeof SUPPORTED_LANGS[number];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Optional: shared query keys (for ?lang= & ?category= prefill)
export const QUERY_KEYS = {
  lang: 'lang',
  category: 'category',
} as const;

export type QueryKey = typeof QUERY_KEYS[keyof typeof QUERY_KEYS];
