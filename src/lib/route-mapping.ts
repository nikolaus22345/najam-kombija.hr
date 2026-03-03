import { Language } from "./translations";

export type RouteMapEntry = Partial<Record<Language, string>>;

// Map of EN base paths to their localized versions
// If a language is missing, it implies there is NO translation for that exact route in that language
export const routeMap: Record<string, RouteMapEntry> = {
    '/': {
        en: '/',
        hr: '/',
        de: '/',
        it: '/',
        fr: '/',
        ko: '/',
        zh: '/',
        ja: '/',
    },
    '/about': {
        en: '/about',
        hr: '/o-nama',
        de: '/ueber-uns',
        it: '/chi-siamo',
        fr: '/a-propos',
        ko: '/about',
        zh: '/about',
        ja: '/about',
    },
    '/contact': {
        en: '/contact',
        hr: '/kontakt',
        de: '/kontakt',
        it: '/contatto',
        fr: '/contact',
        ko: '/contact',
        zh: '/contact',
        ja: '/contact',
    },
    '/booking': {
        en: '/booking',
        hr: '/rezervacija',
        de: '/buchung',
        it: '/prenotazione',
        fr: '/reservation',
        ko: '/booking',
        zh: '/booking',
        ja: '/booking',
    },
    // Example of a specific transfer route translation
    '/transfers/zagreb-to-split': {
        en: '/transfers/zagreb-to-split',
        hr: '/transfer-zagreb-split',
        de: '/transfer-zagreb-split',
    },
};

export const getLocalizedPath = (enPath: string, targetLang: Language): string | null => {
    // If we have an explicit mapping
    if (routeMap[enPath]) {
        const mapped = routeMap[enPath][targetLang];
        if (mapped) return mapped;
        // If the translation doesn't exist in map and we are strict, return enPath so it doesn't break
        return enPath;
    }

    // Fallback: If no explicit mapping, we just use the enPath for all languages
    // This maintains compatibility with the existing 100+ routes
    return enPath;
};

// Reverse lookup: given a current path and lang, find the EN base path
export const getEnBasePath = (currentPath: string, currentLang: Language): string => {
    // Exact match in map
    for (const [enPath, translations] of Object.entries(routeMap)) {
        if (translations[currentLang] === currentPath) {
            return enPath;
        }
    }
    // Fallback
    return currentPath;
};
