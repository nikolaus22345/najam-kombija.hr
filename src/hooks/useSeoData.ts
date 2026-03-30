import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getEnBasePath } from '../lib/route-mapping';
import { seoData } from '../lib/seo-data';

export const useSeoData = () => {
    const location = useLocation();
    const { language } = useLanguage();
    
    // Normalizacija putanje za pronalaženje u mapi
    let currentPathWithoutLang = location.pathname.replace(/\/+$/, '') || '/';
    if (language !== 'en' && currentPathWithoutLang.startsWith(`/${language}`)) {
        currentPathWithoutLang = currentPathWithoutLang.replace(new RegExp(`^/${language}(/|$)`), '/') || '/';
    }
    if (currentPathWithoutLang !== '/') {
        currentPathWithoutLang = currentPathWithoutLang.replace(/\/+$/, '');
    }

    // Pronalazak glavne engleske rute (ključ u našem seoData.ts fajlu)
    const enBasePath = getEnBasePath(currentPathWithoutLang, language);
    
    // Preuzimanje podataka za pronađeni URL i trenutni jezik
    const pageData = seoData[enBasePath];
    const localizedData = pageData ? (pageData[language] || pageData['en']) : null;

    return {
        h1: localizedData?.h1 || '',  // Ukoliko nema, vratiti će prazno (tad slobodno koristite standardni H1 iz komponente)
        title: localizedData?.title || "Zagreb Transfers - Premium Transportation in Croatia",
        description: localizedData?.description || "Reliable transfers from Zagreb, Split, Zadar to destinations all over Croatia."
    };
};
