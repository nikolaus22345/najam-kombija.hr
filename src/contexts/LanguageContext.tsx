import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "../lib/translations";
import { useLocation, useNavigate } from "react-router-dom";
import { getEnBasePath, getLocalizedPath } from "../lib/route-mapping";

const DEFAULT_LANGUAGE: Language = "hr";
const VALID_LANGUAGES = Object.keys(translations) as Language[];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLink: (path: string) => string;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const navigate = useNavigate();
  const location = useLocation();

  const getLink = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return cleanPath === '/' ? '/' : `${cleanPath}/`; // ensure trailing slash
  };

  const setLanguage = (lang: Language) => {
    if (lang !== DEFAULT_LANGUAGE) {
        console.warn('Site is now Croatian only. Cannot change language.');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLink, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
