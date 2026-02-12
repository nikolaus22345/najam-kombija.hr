import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/lib/translations";
import { useLocation, useNavigate } from "react-router-dom";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const navigate = useNavigate();
  const location = useLocation();

  const setLanguage = (lang: Language) => {
    // Optimistically update state
    setLanguageState(lang);

    // Update URL if needed
    // Assuming URL structure is /:lang/rest/of/path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentLangSegment = pathSegments[0]; // e.g., 'en', 'hr'

    // Check if the first segment is a known language code?
    // We assume it is because of our routing structure /:lang
    // But verify against valid languages just in case

    // If we are at root /, create path /lang
    if (pathSegments.length === 0) {
      navigate(`/${lang}`);
      return;
    }

    if (currentLangSegment !== lang) {
      // Replace the language segment
      // e.g. /hr/about -> /en/about
      // pathSegments is ['hr', 'about'] -> replacement ['en', 'about']
      pathSegments[0] = lang;
      const newPath = '/' + pathSegments.join('/');
      navigate(newPath + location.search + location.hash);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
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
