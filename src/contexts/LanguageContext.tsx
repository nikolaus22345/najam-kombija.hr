import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";
import { useLocation, useNavigate } from "react-router-dom";

const DEFAULT_LANGUAGE: Language = "en";
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
    if (language === DEFAULT_LANGUAGE) {
      return cleanPath;
    }
    return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const isFirstSegmentLang = VALID_LANGUAGES.includes(firstSegment as Language);

    if (lang === DEFAULT_LANGUAGE) {
      if (isFirstSegmentLang) {
        const newPath = '/' + pathSegments.slice(1).join('/');
        navigate((newPath || '/') + location.search + location.hash);
      }
    } else {
      if (isFirstSegmentLang) {
        pathSegments[0] = lang;
        navigate('/' + pathSegments.join('/') + location.search + location.hash);
      } else {
        navigate(`/${lang}/${pathSegments.join('/')}` + location.search + location.hash);
      }
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
