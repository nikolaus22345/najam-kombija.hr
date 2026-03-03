import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "../lib/translations";
import { useLocation, useNavigate } from "react-router-dom";
import { getEnBasePath, getLocalizedPath } from "../lib/route-mapping";

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

    // First find the EN equivalent if the path is already localized
    const enBasePath = getEnBasePath(cleanPath, language);

    // Then get the mapped path for the current language
    const targetPath = getLocalizedPath(enBasePath, language) || enBasePath;

    if (language === DEFAULT_LANGUAGE) {
      return targetPath === '/' ? '/' : `${targetPath}/`; // trailing slash
    }
    return `/${language}${targetPath === '/' ? '' : targetPath}/`; // trailing slash
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const isFirstSegmentLang = VALID_LANGUAGES.includes(firstSegment as Language);

    let currentPathWithoutLang = location.pathname.replace(/\/+$/, '') || '/';
    if (isFirstSegmentLang && firstSegment !== 'en') {
      currentPathWithoutLang = '/' + pathSegments.slice(1).join('/');
    }

    // Normalize to prevent mismatch with routeMap
    if (currentPathWithoutLang !== '/') {
      currentPathWithoutLang = currentPathWithoutLang.replace(/\/+$/, '');
    }

    // Find what the EN base path is
    const enBasePath = getEnBasePath(currentPathWithoutLang, isFirstSegmentLang ? (firstSegment as Language) : 'en');

    // Get the localized equivalent for the new language
    const newMappedPath = getLocalizedPath(enBasePath, lang);

    let fullNewPath = '';

    // If there is NO equivalent in that language, fallback to EN home or EN base
    if (newMappedPath === null) {
      // Fallback: stay on home page of that language (or keep english root)
      fullNewPath = lang === 'en' ? '/' : `/${lang}/`;
    } else {
      if (lang === DEFAULT_LANGUAGE) {
        fullNewPath = newMappedPath === '/' ? '/' : `${newMappedPath}/`;
      } else {
        fullNewPath = `/${lang}${newMappedPath === '/' ? '' : newMappedPath}/`;
      }
    }

    // Preserve query string and hash
    fullNewPath += location.search + location.hash;

    // Fix double slashes and ensure exactly 1 trailing slash (unless hash/search exists)
    // Wait, query params should be after the slash!
    fullNewPath = fullNewPath.replace(/(?<!:)\/{2,}/g, '/');

    const currentPath = location.pathname + location.search + location.hash;

    if (fullNewPath !== currentPath) {
      navigate(fullNewPath);
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
