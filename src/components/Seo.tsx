
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, Language } from '../lib/translations';
import { getEnBasePath, getLocalizedPath } from '../lib/route-mapping';
import { useQuery } from '@tanstack/react-query';
import { client } from '../sanity/lib/client';

interface SeoProps {
    title?: string;
    description?: string;
    image?: string;
}

const BASE_URL = 'https://www.zagreb-transfers.hr';
const VALID_LANGUAGES = Object.keys(translations) as Language[];

const formatUrl = (path: string) => {
    // Add trailing slash to all URLs consistently, prevent double slashes
    if (path === '/' || path === '') return `${BASE_URL}/`;
    const cleanPath = path.replace(/\/+$/, '');
    return `${BASE_URL}${cleanPath}/`;
};

const Seo = ({ title, description, image = '/og-image.png' }: SeoProps) => {
    const location = useLocation();
    const { language } = useLanguage();

    // 1) Find the "English Base Path" equivalent of the current URL
    let currentPathWithoutLang = location.pathname.replace(/\/+$/, '') || '/';
    if (language !== 'en' && currentPathWithoutLang.startsWith(`/${language}`)) {
        currentPathWithoutLang = currentPathWithoutLang.replace(new RegExp(`^/${language}(/|$)`), '/') || '/';
    }

    // Normalize to prevent mismatch with routeMap which uses paths without trailing slashes except for '/'
    if (currentPathWithoutLang !== '/') {
        currentPathWithoutLang = currentPathWithoutLang.replace(/\/+$/, '');
    }

    // Find the master EN path using our mapping
    const enBasePath = getEnBasePath(currentPathWithoutLang, language);

    // 2) Generate the canonical URL for the CURRENT view
    const currentMappedPath = getLocalizedPath(enBasePath, language) || enBasePath;
    const currentFullPath = language === 'en'
        ? currentMappedPath
        : `/${language}${currentMappedPath === '/' ? '' : currentMappedPath}`;
    const canonicalUrl = formatUrl(currentFullPath);

    // 3) Generate alternative URLs for all languages
    const alternates = VALID_LANGUAGES.map((lang) => {
        const mappedPath = getLocalizedPath(enBasePath, lang);
        if (mappedPath === null) return null;

        const fullPath = lang === 'en'
            ? mappedPath
            : `/${lang}${mappedPath === '/' ? '' : mappedPath}`;

        return {
            lang,
            url: formatUrl(fullPath)
        };
    }).filter(Boolean) as { lang: string, url: string }[];

    // Centralized fallback logic for static pages that don't pass their own title
    const getFallbackMetadata = (path: string, lang: string) => {
        const fallbacks: Record<string, any> = {
            '/coach-rental': {
                en: { t: 'Coach Rental Croatia | Zagreb Transfers', d: 'Premium coach rental services for groups throughout Croatia.' },
                hr: { t: 'Najam autobusa Hrvatska | Zagreb Transfers', d: 'Premium usluga najma autobusa za grupe širom Hrvatske.' },
                de: { t: 'Busvermietung Kroatien | Zagreb Transfers', d: 'Premium-Busvermietung für Gruppen in ganz Kroatien.' },
            },
            '/minibus-rental': {
                en: { t: 'Minibus Rental Croatia | Zagreb Transfers', d: 'Comfortable minibus rentals for medium groups.' },
                hr: { t: 'Najam minibusa Hrvatska | Zagreb Transfers', d: 'Udoban najam minibusa za srednje grupe širom Hrvatske.' },
            },
            '/van-rental': {
                en: { t: 'Van Rental Croatia | Zagreb Transfers', d: 'Premium van rental services for families and groups.' },
                hr: { t: 'Najam kombija Hrvatska | Zagreb Transfers', d: 'Premium usluga najma kombija za obitelji i manje grupe.' },
            },
            '/chauffeur-service': {
                en: { t: 'Professional Chauffeur Service | Zagreb Transfers', d: 'Private driver and chauffeur services for VIP and business.' },
                hr: { t: 'Profesionalni Chauffeur Service | Vozila s vozačem', d: 'Privatni vozač i profesionalna usluga prijevoza.' },
                de: { t: 'Professioneller Chauffeurservice | Zagreb Transfers', d: 'Privatfahrer für VIP und Business.' }
            },
            '/limo-hire-for-wedding': {
                en: { t: 'Limo Hire for Weddings Croatia | Zagreb Transfers', d: 'Luxury wedding transportation services in Croatia.' },
                hr: { t: 'Najam limuzine za vjenčanja u Hrvatskoj | Zagreb Transfers', d: 'Luksuzne limuzine za vjenčanja s profesionalnim vozačem.' },
            }
        };

        const pageFallback = fallbacks[path];
        if (pageFallback) {
            return pageFallback[lang] || pageFallback['en'];
        }
        return { 
            t: "Zagreb Transfers - Premium Transportation in Croatia", 
            d: "Reliable transfers from Zagreb, Split, Zadar to destinations all over Croatia." 
        };
    };

    const fallback = getFallbackMetadata(enBasePath, language);

    // x-default is always the English version
    const enAlternate = alternates.find(a => a.lang === 'en');
    const xDefaultUrl = enAlternate ? enAlternate.url : formatUrl(enBasePath);

    const { data: sanitySeo } = useQuery({
        queryKey: ['sanity-seo', language, canonicalUrl],
        queryFn: async () => {
            const query = `*[_type == "seo" && language == $lang && pageId == $pageId][0]`;
            return await client.fetch(query, { lang: language, pageId: canonicalUrl });
        },
        staleTime: 1000 * 60 * 5, // Cache for 5 mins
    });

    const tTitle = sanitySeo?.title || title || fallback.t;
    const tDesc = sanitySeo?.metaDescription || description || fallback.d;

    return (
        <Helmet htmlAttributes={{ lang: language }}>
            {/* Standard Metadata */}
            <title>{tTitle}</title>
            <meta name="description" content={tDesc} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Hreflang Tags */}
            {alternates.map(({ lang, url }) => (
                <link key={lang} rel="alternate" hrefLang={lang} href={url} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={tTitle} />
            <meta property="og:description" content={tDesc} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={tTitle} />
            <meta property="twitter:description" content={tDesc} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default Seo;
